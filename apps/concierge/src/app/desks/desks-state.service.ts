import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    listChildMetadata,
    showMetadata,
    updateMetadata,
} from '@placeos/ts-client';
import { addHours, endOfDay, getUnixTime, set, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {
    catchError,
    debounceTime,
    distinctUntilChanged,
    first,
    map,
    scan,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';

import {
    approveBooking,
    Booking,
    checkinBooking,
    queryBookings,
    queryPagedBookings,
    RecurrenceDays,
    rejectBooking,
    removeBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifyInfo,
    notifySuccess,
    randomInt,
    SettingsService,
    unique,
} from '@placeos/common';
import { Desk, OrganisationService } from '@placeos/organisation';

import { openConfirmModal } from '@placeos/components';
import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { generateQRCode } from 'libs/common/src/lib/qr-code';
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

export interface DeskFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends AsyncHandler {
    private _filters = new BehaviorSubject<DeskFilters>({});
    private _desk_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<boolean>(false);
    private _change = new BehaviorSubject(0);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly desks: Observable<Desk[]> = combineLatest([
        this._filters,
        this._change,
    ]).pipe(
        debounceTime(500),
        switchMap(([filters]) => {
            const zones = filters.zones || [];
            return zones && !zones.includes('All')
                ? showMetadata(zones[0], 'desks').pipe(
                      map((m) => (m.details instanceof Array ? m.details : [])),
                      catchError((_) => of([])),
                  )
                : listChildMetadata(this._org.building?.id, {
                      name: 'desks',
                  }).pipe(
                      map((m) =>
                          m
                              .map((i) => i.metadata?.desks?.details || [])
                              .reduce((c: any[], i: any[]) => [...c, ...i], []),
                      ),
                      catchError((_) => of([])),
                  );
        }),
        map((list) => {
            if (!(list instanceof Array)) list = [];
            list.sort((a, b) => a.name?.localeCompare(b.name));
            return list.map((i) => new Desk({ ...i, qr_code: '' }));
        }),
        shareReplay(1),
    );

    private _next_page = new Subject<() => QueryResponse<Booking>>();
    private _call_next_page = new Subject<string>();
    private _all_zones_keys = ['All', -1, '-1', ''];
    public readonly setup_paging = combineLatest([
        this._filters,
        this._org.initialised,
    ]).pipe(
        debounceTime(500),
        tap(([filters, loaded]) => {
            if (!loaded) return;
            const date = filters.date || Date.now();
            const active_zones = (filters.zones || []).filter(
                (_) => !this._all_zones_keys.includes(_),
            );
            const zones = !active_zones.length
                ? this._settings.get('app.use_region')
                    ? this._org.buildingsForRegion().map((_) => _.id)
                    : [this._org.building.id]
                : filters.zones;
            this._next_page.next(() =>
                queryPagedBookings({
                    period_start: getUnixTime(startOfDay(date)),
                    period_end: getUnixTime(endOfDay(date)),
                    type: 'desk',
                    zones: zones.join(','),
                    include_checked_out: true,
                    limit: 500,
                }).pipe(
                    catchError((_) => of({ data: [], total: 0, next: null })),
                ),
            );
            this._call_next_page.next(`RESET_${Date.now()}`);
        }),
    );

    public readonly paged_bookings: Observable<any> = combineLatest([
        this._next_page,
        this._call_next_page,
    ]).pipe(
        debounceTime(500),
        distinctUntilChanged((a, b) => a[1] === b[1]),
        switchMap(([next_page, action]) => {
            this._loading.next(true);
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
        tap((_) => this._loading.next(false)),
        shareReplay(1),
    );

    public readonly has_more_pages = this.paged_bookings.pipe(
        map((_) => _.has_next),
    );
    public readonly bookings = combineLatest([
        this.paged_bookings,
        this._change,
    ]).pipe(map(([i]) => i.list));

    public nextPage() {
        this._call_next_page.next(`NEXT_${Date.now()}`);
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService,
    ) {
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
        } else if (
            filters.zones &&
            this._filters.getValue()?.zones?.includes('All')
        ) {
            filters.zones = [];
        }
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public refresh() {
        this._loading.next(true);
        this.timeout('poll', () => this.setFilters(this._filters.getValue()));
    }

    public async addDesks(list: Desk[]) {
        const zone = this._filters.getValue().zones[0];
        const desk_list = await this.desks.pipe(take(1)).toPromise();
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
        this._change.next(Date.now());
    }

    public async editDesk(desk: Desk = new Desk()) {
        const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._filters.getValue().zones[0];
        const new_desk = {
            ...state.metadata,
            id:
                state.metadata.id ||
                `desk-${zone.slice(-3)}.${randomInt(999_999)}`,
        };
        const desk_list = await this.desks.pipe(take(1)).toPromise();
        const idx = desk_list.findIndex((_) => _.id === new_desk.id);
        if (idx >= 0) desk_list[idx] = new_desk;
        else desk_list.push(new_desk);
        await updateMetadata(zone, {
            name: 'desks',
            details: desk_list,
            description: 'List of available desks',
        })
            .toPromise()
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.DESKS_SAVE_ERROR', { error: e }),
                );
                ref.componentInstance.loading = false;
                throw e;
            });
        if (desk.assigned_to && desk.assigned_to !== new_desk.assigned_to) {
            this._clearAssignedBooking(desk);
        }
        if (desk.assigned_to !== new_desk.assigned_to && new_desk.assigned_to) {
            const date = set(Date.now(), { hours: 1, minutes: 0, seconds: 0 });
            await saveBooking(
                new Booking({
                    user_id: new_desk.assigned_to,
                    user_email: new_desk.assigned_to,
                    user_name: new_desk.assigned_name,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 22)),
                    type: 'desk',
                    booking_type: 'desk',
                    asset_id: new_desk.id,
                    asset_name: new_desk.name,
                    recurrence_type: 'daily',
                    recurrence_days:
                        RecurrenceDays.MONDAY |
                        RecurrenceDays.TUESDAY |
                        RecurrenceDays.WEDNESDAY |
                        RecurrenceDays.THURSDAY |
                        RecurrenceDays.FRIDAY,
                    zones: unique([
                        this._org.organisation.id,
                        this._org.region?.id,
                        this._org.building?.id,
                        new_desk.zone?.id,
                        new_desk.zone,
                        ...(new_desk?.zones || []),
                        zone,
                    ]).filter((_) => !!_),
                    extension_data: {
                        asset_name: new_desk.name,
                        is_assigned: true,
                    },
                }),
            ).toPromise();
        }
        this._change.next(Date.now());
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
        this._desk_bookings = [...this._desk_bookings, status] as any;
        this.setFilters({});
    }

    public async rejectAllDesks() {
        const list = this._desk_bookings || [];
        if (list.length <= 0)
            return notifyInfo('No desks to reject for the selected date');
        const resp = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.DESKS_REJECT_ALL_TITLE'),
                content: i18n('APP.CONCIERGE.DESKS_REJECT_ALL_MSG'),
                icon: {
                    type: 'icon',
                    class: 'material-icons',
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

    private async _clearAssignedBooking(desk: Desk) {
        const booking_list = await queryBookings({
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
            type: 'desk',
            email: desk.assigned_to,
            include_checked_out: true,
        }).toPromise();
        const filtered = booking_list.filter((_) => _.asset_id === desk.id);
        await Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    }
}
