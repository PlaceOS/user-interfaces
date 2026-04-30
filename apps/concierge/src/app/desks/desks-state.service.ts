import { computed, inject, Injectable, signal } from '@angular/core';
import {
    outputToObservable,
    toObservable,
    toSignal,
} from '@angular/core/rxjs-interop';
import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    checkinBooking,
    queryBookings,
    queryPagedBookings,
    rejectBooking,
    removeBooking,
    saveBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BuildingLevel,
    Desk,
    generateQRCode,
    getTimezoneDifferenceInHours,
    i18n,
    nextValueFrom,
    notifyError,
    notifyInfo,
    notifySuccess,
    OrganisationService,
    randomInt,
    RecurrenceDays,
    setTimeInTimezone,
    SettingsService,
    unique,
} from '@placeos/common';
import {
    listChildMetadata,
    QueryResponse,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import {
    addHours,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfDay,
    subDays,
} from 'date-fns';
import { combineLatest, lastValueFrom, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    first,
    map,
    scan,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';

import { openConfirmModal } from '@placeos/components';
import { DeskModalComponent } from './desk-modal.component';

function addQRCodeToBooking(booking: Booking): Booking {
    return new Booking({
        ...booking,
        extension_data: {
            ...booking.extension_data,
            checkin_qr_code: generateQRCode(
                `/workplace/#/book/code?asset_id=${encodeURIComponent(
                    booking.asset_id,
                )}`,
            ),
        },
    });
}

export type DeskView = 'manage' | 'events' | 'map';

export interface DeskFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
    view?: DeskView;
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _filters = signal<DeskFilters>({});
    private _desk_bookings: Booking[] = [];
    private _loading = signal<boolean>(false);
    private _change = signal(0);

    public readonly loading = this._loading.asReadonly();
    public readonly filters = this._filters.asReadonly();

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    private readonly _desks$ = combineLatest([
        toObservable(this._filters),
        toObservable(this._change),
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        debounceTime(500),
        switchMap(([filters]) => {
            // Only load desk metadata when on manage view
            if (filters.view !== 'manage') {
                return of({ list: [] as any[], is_manage: false });
            }
            this._loading.set(true);
            const zones = this._getActiveZones(filters.zones);
            const fetch$ =
                zones && !zones.includes('All')
                    ? showMetadata(zones[0], 'desks').pipe(
                          map((m) =>
                              m.details instanceof Array ? m.details : [],
                          ),
                          catchError((_) => of([])),
                      )
                    : listChildMetadata(this._org.building?.id, {
                          name: 'desks',
                      }).pipe(
                          map((m) =>
                              m
                                  .map((i) => i.metadata?.desks?.details || [])
                                  .reduce(
                                      (c: any[], i: any[]) => [...c, ...i],
                                      [],
                                  ),
                          ),
                          catchError((_) => of([])),
                      );
            return fetch$.pipe(map((list) => ({ list, is_manage: true })));
        }),
        map(({ list, is_manage }) => {
            if (!(list instanceof Array)) list = [];
            list.sort((a, b) => a.name?.localeCompare(b.name));
            // Only set loading to false if we're on manage view
            if (is_manage) this._loading.set(false);
            return list.map((i) => new Desk({ ...i, qr_code: '' }));
        }),
        shareReplay(1),
    );
    public readonly desks = toSignal(this._desks$, {
        initialValue: [] as Desk[],
    });

    /** List of levels with bookable desk resources */
    public readonly levels = this._org.active_levels.pipe(
        switchMap((levels) => {
            if (!levels.length) {
                return of(
                    [] as { level: BuildingLevel; has_bookable: boolean }[],
                );
            }
            return combineLatest(
                levels.map((level) =>
                    showMetadata(level.id, 'desks').pipe(
                        map((metadata) => ({
                            level,
                            has_bookable:
                                metadata.details instanceof Array &&
                                metadata.details.some((desk) => desk.bookable),
                        })),
                        catchError(() => of({ level, has_bookable: false })),
                    ),
                ),
            );
        }),
        map((levels) =>
            levels.filter((item) => item.has_bookable).map((item) => item.level),
        ),
        shareReplay(1),
    );

    private _next_page = new Subject<() => QueryResponse<Booking>>();
    private _call_next_page = new Subject<string>();
    private _all_zones_keys = ['All', -1, '-1', ''];
    public readonly setup_paging = combineLatest([
        toObservable(this._filters),
        this._org.initialised,
        this._org.active_building,
        this._org.active_region,
    ]).pipe(
        debounceTime(500),
        tap(([filters, loaded]) => {
            // Only load bookings when on events view
            if (!loaded || filters.view !== 'events') return;
            const date = filters.date || Date.now();
            const period_start = addMinutes(
                startOfDay(date),
                this.tz_offset * 60,
            );
            const period_end = addMinutes(endOfDay(date), this.tz_offset * 60);
            const active_zones = this._getActiveZones(filters.zones);
            const zones = !active_zones.length
                ? this._settings.get('app.use_region')
                    ? this._org.buildingsForRegion().map((_) => _.id)
                    : [this._org.building.id]
                : filters.zones;
            this._next_page.next(() =>
                queryPagedBookings({
                    period_start: getUnixTime(period_start),
                    period_end: getUnixTime(period_end),
                    type: 'desk',
                    zones: zones.join(','),
                    include_checked_out: true,
                    include_deleted: true,
                    limit: 500,
                } as any).pipe(
                    catchError((_) => of({ data: [], total: 0, next: null })),
                ),
            );
            this._call_next_page.next(`RESET_${Date.now()}`);
        }),
    );

    private readonly _paged_bookings$ = combineLatest([
        this._next_page,
        this._call_next_page,
    ]).pipe(
        debounceTime(500),
        distinctUntilChanged((a, b) => a[1] === b[1]),
        switchMap(([next_page, action]) => {
            this._loading.set(true);
            if (!next_page) {
                return of({
                    data: [],
                    total: 0,
                    next: null,
                    reset: action.includes('RESET'),
                });
            }
            // If reset is true, start over
            if (action.includes('RESET')) {
                return next_page().pipe(
                    map((data: any) => ({ ...data, reset: true })),
                    catchError((_) => of({ data: [], total: 0, next: null })),
                );
            }
            return next_page().pipe(
                map((data: any) => ({ ...data, reset: false })),
                catchError((_) => of({ data: [], total: 0, next: null })),
            );
        }),
        scan(
            (acc, { data, total, next, reset }) => {
                const list = data;
                this._next_page.next(next); // Set the next page function
                if (reset)
                    return {
                        list,
                        total,
                        has_next: list.length < total && !!next,
                    }; // Reset the items array
                return {
                    list: [...acc.list, ...list],
                    has_next: !!next,
                    total,
                };
            },
            { list: [], total: 0, has_next: false },
        ),
        tap((_) => this._loading.set(false)),
        shareReplay(1),
    );
    public readonly paged_bookings = toSignal(this._paged_bookings$, {
        initialValue: { list: [], total: 0, has_next: false },
    });

    public readonly has_more_pages = computed(
        () => this.paged_bookings().has_next,
    );
    public readonly bookings = computed(() => this.paged_bookings().list);

    public nextPage() {
        this._call_next_page.next(`NEXT_${Date.now()}`);
    }

    constructor() {
        super();
        this.setup_paging.subscribe();
    }

    public setFilters(filters: DeskFilters) {
        if (filters.zones?.includes('All')) {
            filters.zones = [
                'All',
                ...this._org
                    .levelsForBuilding(this._org.building)
                    .map((lvl) => lvl.id),
            ];
        } else if (filters.zones && this._filters()?.zones?.includes('All')) {
            filters.zones = [];
        }
        // Set loading immediately when zones or date change to prevent stale data from showing
        if (filters.zones !== undefined || filters.date !== undefined) {
            this._loading.set(true);
        }
        this._filters.set({ ...this._filters(), ...filters });
    }

    public refresh() {
        this._loading.set(true);
        this.timeout('poll', () => this.setFilters(this._filters()));
    }

    public async addDesks(list: Desk[]) {
        const zone = this._filters().zones[0];
        const desk_list = [...this.desks()];
        for (const desk of list) {
            const idx = desk_list.findIndex((_) => _.id === desk.id);
            if (idx >= 0) desk_list[idx] = desk;
            else desk_list.push(desk);
        }
        await updateMetadata(zone, {
            name: 'desks',
            details: desk_list,
            description: 'List of available desks',
        }).toPromise();
        this._change.set(Date.now());
    }

    public async editDesk(desk: Desk = new Desk()) {
        const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
        const state = await Promise.race([
            lastValueFrom(ref.afterClosed()),
            lastValueFrom(
                outputToObservable(ref.componentInstance.event).pipe(
                    first((_) => _.reason === 'done'),
                ),
            ),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._filters().zones[0];
        const new_desk = {
            ...state.metadata,
            id:
                state.metadata.id ||
                `desk-${zone.slice(-3)}.${randomInt(999_999)}`,
        };
        const original_desk_list = [...this.desks()];
        const desk_list = [...original_desk_list];
        const idx = desk_list.findIndex((_) => _.id === desk.id);
        if (idx >= 0) desk_list[idx] = new_desk;
        else desk_list.push(new_desk);
        if (
            new_desk.assigned_to &&
            (desk.assigned_to !== new_desk.assigned_to ||
                desk.id !== new_desk.id)
        ) {
            try {
                await this._checkAssignedDeskLimit(
                    new_desk.assigned_to,
                    desk.id,
                );
            } catch (error) {
                notifyError(
                    error instanceof Error ? error.message : `${error}`,
                );
                ref.componentInstance.loading.set(false);
                ref.close();
                throw error;
            }
        }
        await lastValueFrom(
            updateMetadata(zone, {
                name: 'desks',
                details: desk_list,
                description: 'List of available desks',
            }),
        ).catch((e) => {
            notifyError(i18n('APP.CONCIERGE.DESKS_SAVE_ERROR', { error: e }));
            ref.componentInstance.loading.set(false);
            throw e;
        });
        let recreate = false;
        if (
            desk.assigned_to &&
            (desk.assigned_to !== new_desk.assigned_to ||
                desk.id !== new_desk.id)
        ) {
            try {
                await this._clearAssignedBooking(desk);
            } catch (e) {
                await this._rollbackMetadata(zone, original_desk_list);
                notifyError(
                    i18n('APP.CONCIERGE.DESKS_SAVE_ERROR', { error: e }),
                );
                ref.componentInstance.loading.set(false);
                throw e;
            }
            recreate = true;
        }
        if (
            (desk.assigned_to !== new_desk.assigned_to || recreate) &&
            new_desk.assigned_to
        ) {
            await saveBooking(this._createAssignedBooking(new_desk, zone))
                .toPromise()
                .catch(async (e) => {
                    await this._rollbackMetadata(zone, original_desk_list);
                    if (recreate) {
                        await this._restoreAssignedBooking(desk, zone).catch(
                            (restore_err) =>
                                console.error(
                                    'Failed to restore assigned booking during rollback',
                                    restore_err,
                                ),
                        );
                    }
                    if (e?.status === 409) {
                        notifyError(
                            i18n('APP.CONCIERGE.DESKS_ASSIGN_CONFLICT_ERROR'),
                        );
                    } else {
                        notifyError(
                            i18n('APP.CONCIERGE.DESKS_SAVE_ERROR', {
                                error: e,
                            }),
                        );
                    }
                    ref.componentInstance.loading.set(false);
                    throw e;
                });
        }
        this._change.set(Date.now());
        ref.close();
    }

    public async checkinDesk(desk: Booking, state = true) {
        const status: any = await checkinBooking(desk.id, state ?? true)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            notifyError(
                i18n(
                    state
                        ? 'APP.CONCIERGE.DESKS_CHECKIN_ERROR'
                        : 'APP.CONCIERGE.DESKS_CHECKOUT_ERROR',
                    { error: status.error },
                ),
            );
            throw status.error;
        }
        notifySuccess(
            i18n(
                state
                    ? 'APP.CONCIERGE.DESKS_CHECKIN_SUCCESS'
                    : 'APP.CONCIERGE.DESKS_CHECKOUT_SUCCESS',
            ),
        );
    }

    public async approveDesk(desk: Booking) {
        const status: any = await approveBooking(desk.id)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            return notifyError(
                i18n('APP.CONCIERGE.DESKS_APPROVE_ERROR', {
                    error: status.error,
                }),
            );
        }
        notifySuccess(i18n('APP.CONCIERGE.DESKS_APPROVE_SUCCESS'));
        (desk as any).approved = true;
        (desk as any).rejected = false;
        this.setFilters({});
    }

    public async rejectDesk(desk: Booking) {
        const status: any = await rejectBooking(desk.id)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            return notifyError(
                i18n('APP.CONCIERGE.DESKS_REJECT_ERROR', {
                    error: status.error,
                }),
            );
        }
        notifySuccess(i18n('APP.CONCIERGE.DESKS_REJECT_SUCCESS'));
        (desk as any).approved = false;
        (desk as any).rejected = true;
        this.setFilters({});
    }

    public async cancelBooking(booking: Booking, series = false) {
        const result = await openConfirmModal(
            {
                title: i18n(
                    series
                        ? 'APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_TITLE'
                        : 'APP.CONCIERGE.DESKS_BOOKING_DELETE_TITLE',
                ),
                content: i18n(
                    series
                        ? 'APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_CONTENT'
                        : 'APP.CONCIERGE.DESKS_BOOKING_DELETE_CONTENT',
                ),
                icon: { content: 'event_busy' },
            },
            this._dialog,
        );
        if (result.reason !== 'done') return;
        result.loading(
            i18n(
                series
                    ? 'APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_LOADING'
                    : 'APP.CONCIERGE.DESKS_BOOKING_DELETE_LOADING',
            ),
        );
        const query =
            !series && booking.instance
                ? { instance: true, start_time: booking.instance }
                : {};
        const booking_id = series
            ? booking.parent_id || booking.id
            : booking.id;
        await nextValueFrom(removeBooking(booking_id, query)).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.DESKS_BOOKING_DELETE_ERROR', { error: e }),
            );
            result.close();
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_DELETE_SUCCESS'));
        result.close();
        this.setFilters({});
    }

    public async giveAccess(desk: Booking) {
        const status: any = await saveBooking(
            new Booking({ ...desk, access: true }),
        )
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            return notifyError(
                i18n('APP.CONCIERGE.DESKS_ACCESS_ERROR', {
                    error: status.error,
                }),
            );
        }
        notifySuccess(i18n('APP.CONCIERGE.DESKS_ACCESS_SUCCESS'));
        this.setFilters({});
    }

    public async rejectAllDesks() {
        const list = this.bookings();
        if (list.length <= 0)
            return notifyInfo('No desks to reject for the selected date');
        const resp = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.DESKS_REJECT_ALL_TITLE'),
                content: i18n('APP.CONCIERGE.DESKS_REJECT_ALL_MSG'),
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'delete',
                },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.CONCIERGE.DESKS_REJECT_ALL_LOADING'));
        await Promise.all(
            list.map((desk) => rejectBooking(desk.id).toPromise()),
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.DESKS_REJECT_ALL_ERROR', { error: e }),
            );
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS'));
        this.setFilters({});
        resp.close();
    }

    private async _checkAssignedDeskLimit(
        user_email: string,
        current_desk_id?: string,
    ) {
        const max_assigned_count = Math.max(
            Number(this._settings.get('app.desks.max_assigned_count')) || 0,
            0,
        );
        if (!max_assigned_count || !user_email) return;
        const email = user_email.toLowerCase();
        const assigned_count = (
            await Promise.all(
                this._currentLevelList().map((level) =>
                    lastValueFrom(
                        showMetadata(level.id, 'desks').pipe(
                            map((metadata) =>
                                metadata.details instanceof Array
                                    ? metadata.details
                                    : [],
                            ),
                            catchError(() => of([])),
                        ),
                    ),
                ),
            )
        )
            .flat()
            .filter(
                (item: Partial<Desk>) =>
                    item.id !== current_desk_id &&
                    item.assigned_to?.toLowerCase() === email,
            ).length;
        if (assigned_count >= max_assigned_count) {
            const key =
                max_assigned_count === 1
                    ? 'APP.CONCIERGE.DESKS_ASSIGN_LIMIT_ERROR_1'
                    : 'APP.CONCIERGE.DESKS_ASSIGN_LIMIT_ERROR_N';
            const message = i18n(key, { count: max_assigned_count });
            throw !message || message === key
                ? `Users can only have ${max_assigned_count} assigned desk${max_assigned_count === 1 ? '' : 's'} at a time.`
                : message;
        }
    }

    private async _rollbackMetadata(zone: string, original_desk_list: any[]) {
        try {
            await lastValueFrom(
                updateMetadata(zone, {
                    name: 'desks',
                    details: original_desk_list,
                    description: 'List of available desks',
                }),
            );
        } catch (rollback_err) {
            console.error(
                'Failed to rollback desk metadata after error',
                rollback_err,
            );
        }
    }

    private _createAssignedBooking(desk: Desk, zone?: string) {
        const timezone = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building?.timezone
            : '';
        const date = setTimeInTimezone(Date.now(), 1, 0, timezone);
        return new Booking({
            user_id: desk.assigned_to,
            user_email: desk.assigned_to,
            user_name: desk['assigned_name'],
            booking_start: getUnixTime(date),
            booking_end: getUnixTime(addHours(date, 22)),
            type: 'desk',
            booking_type: 'desk',
            asset_id: desk.id,
            asset_name: desk.name,
            recurrence_type: 'daily',
            recurrence_days:
                RecurrenceDays.MONDAY |
                RecurrenceDays.TUESDAY |
                RecurrenceDays.WEDNESDAY |
                RecurrenceDays.THURSDAY |
                RecurrenceDays.FRIDAY |
                RecurrenceDays.SATURDAY |
                RecurrenceDays.SUNDAY,
            zones: unique([
                this._org.organisation.id,
                this._org.region?.id,
                this._org.building?.id,
                desk.zone?.id,
                desk.zone,
                ...(desk['zones'] || []),
                zone,
            ]).filter((_) => !!_),
            extension_data: {
                asset_name: desk.name,
                is_assigned: true,
            },
        });
    }

    private async _restoreAssignedBooking(desk: Desk, zone?: string) {
        if (!desk.assigned_to) return;
        await lastValueFrom(saveBooking(this._createAssignedBooking(desk, zone)));
    }

    private async _clearAssignedBooking(desk: Desk) {
        const today = Date.now();
        const booking_list = await lastValueFrom(
            queryBookings({
                period_start: getUnixTime(startOfDay(today)),
                period_end: getUnixTime(endOfDay(today)),
                type: 'desk',
                email: desk.assigned_to,
                include_checked_out: true,
            }),
        );
        const filtered = booking_list.filter((_) => _.asset_id === desk.id);
        for (const booking of filtered) {
            const is_recurring = booking.instance;
            if (is_recurring) {
                const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
                await lastValueFrom(
                    updateBooking(
                        booking.id,
                        { recurrence_end: yesterday_end },
                        'patch',
                    ),
                );
            } else {
                await lastValueFrom(removeBooking(booking.id));
            }
        }
    }

    private _getActiveZones(zones: string[] = []): string[] {
        const level_list = this._currentLevelList();
        const level_ids = new Set(level_list.map((level) => level.id));
        return (zones || []).filter(
            (zone) =>
                !this._all_zones_keys.includes(zone) && level_ids.has(zone),
        );
    }

    private _currentLevelList(): BuildingLevel[] {
        return this._settings.get('app.use_region')
            ? this._org.levelsForRegion(this._org.region)
            : this._org.levelsForBuilding(this._org.building);
    }
}
