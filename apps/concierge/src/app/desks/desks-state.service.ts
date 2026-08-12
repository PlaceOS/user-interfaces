import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    Signal,
    signal,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    checkinBooking,
    queryBookings,
    queryPagedBookings,
    rejectBooking,
    rejectBookingInstance,
    rejectOverlappingRecurringBookings,
    removeBooking,
    saveBooking,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    BuildingLevel,
    Desk,
    downloadFile,
    generateQRCode,
    getTimezoneDifferenceInHours,
    i18n,
    jsonToCsv,
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

import { openConfirmModal } from '@placeos/components';
import { BookingHistoryModalComponent } from '../ui/booking-history-modal.component';
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

export interface DeskQrItem {
    id: string;
    name?: string;
    qr_code?: string;
    qr_link?: string;
}

@Injectable({
    providedIn: 'root',
})
export class DesksStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _filters = signal<DeskFilters>({});
    private _loading = signal<boolean>(false);
    private _change = signal(0);
    private _booking_status = signal<Record<string, 'approved' | 'declined'>>(
        {},
    );

    public readonly loading = this._loading.asReadonly();
    public readonly filters = this._filters.asReadonly();
    public readonly print_desk = signal<DeskQrItem | null>(null);

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    /**
     * Inputs that affect the desk metadata listing. Search is intentionally
     * excluded — it is applied client side and must not trigger a reload.
     */
    private readonly _desk_params = computed(
        () => ({
            view: this._filters().view,
            zones: this._filters().zones || [],
            change: this._change(),
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
        }),
        {
            equal: (a, b) =>
                a.view === b.view &&
                a.change === b.change &&
                a.building === b.building &&
                a.region === b.region &&
                a.zones.join(',') === b.zones.join(','),
        },
    );
    private readonly _desk_params_debounced = debounced(this._desk_params, 300);

    /** List of desks for the active management zone */
    private readonly _desks = resource({
        params: () => this._desk_params_debounced.value(),
        defaultValue: [] as Desk[],
        loader: async ({ params }) => {
            if (params.view !== 'manage' && params.view !== 'events') return [];
            this._loading.set(true);
            try {
                const zones = this._getActiveZones(params.zones);
                const all_zones = params.zones.includes('All');
                let list: any[] = [];
                if (zones.length && !all_zones) {
                    const metadata = await showMetadata(
                        zones[0],
                        'desks',
                    ).catch(() => ({ details: [] }) as any);
                    list = (
                        metadata.details instanceof Array
                            ? metadata.details
                            : []
                    ).map((i) => ({ ...i, zone: { id: zones[0] } }));
                } else {
                    const metadata = await listChildMetadata(
                        this._org.building?.id,
                        { name: 'desks' },
                    ).catch(() => [] as any[]);
                    // Tag each desk with its level so per-desk saves can
                    // target the correct zone when viewing all levels.
                    list = metadata
                        .map((item) =>
                            (item.metadata?.desks?.details instanceof Array
                                ? item.metadata.desks.details
                                : []
                            ).map((i) => ({ ...i, zone: item.zone })),
                        )
                        .reduce((c: any[], i: any[]) => [...c, ...i], []);
                }
                if (!(list instanceof Array)) list = [];
                list.sort((a, b) => a.name?.localeCompare(b.name));
                return list.map((i) => new Desk({ ...i, qr_code: '' }));
            } finally {
                this._loading.set(false);
            }
        },
    });
    public readonly desks: Signal<Desk[]> = this._desks.value;

    /** List of levels with bookable desk resources */
    private readonly _levels = resource({
        params: () => this._org.active_levels(),
        defaultValue: [] as BuildingLevel[],
        loader: async ({ params: levels }) => {
            if (!levels.length) return [];
            const results = await Promise.all(
                levels.map(async (level) => {
                    const metadata = await showMetadata(
                        level.id,
                        'desks',
                    ).catch(() => null);
                    return {
                        level,
                        has_bookable:
                            metadata?.details instanceof Array &&
                            metadata.details.some((desk) => desk.bookable),
                    };
                }),
            );
            return results
                .filter((item) => item.has_bookable)
                .map((item) => item.level);
        },
    });
    public readonly levels: Signal<BuildingLevel[]> = this._levels.value;

    /** Accumulated paged desk bookings for the events view */
    private readonly _bookings_state = signal<{
        list: Booking[];
        total: number;
        has_next: boolean;
    }>({ list: [], total: 0, has_next: false });
    public readonly paged_bookings = this._bookings_state.asReadonly();

    public readonly has_more_pages = computed(
        () => this.paged_bookings().has_next,
    );
    public readonly bookings = computed(() => {
        const desks = new Map(this.desks().map((desk) => [desk.id, desk]));
        const bookings = this.paged_bookings().list;
        for (const booking of bookings) {
            Object.assign(booking, {
                asset_name:
                    desks.get(booking.asset_id)?.name || booking.asset_id,
            });
        }
        return [...bookings];
    });
    /** Time the booking list last finished loading from the server */
    private readonly _last_updated = signal(0);
    public readonly last_updated = this._last_updated.asReadonly();

    /** Query for the first page of bookings for the active filters */
    private _first_page: (() => QueryResponse<Booking>) | null = null;
    /** Query for the next page of bookings */
    private _next_page_fn: (() => QueryResponse<Booking> | null) | null = null;
    /** Token used to discard responses from superseded page loads */
    private _load_token = 0;
    private _all_zones_keys = ['All', -1, '-1', ''];
    private readonly _bookings_params = computed(
        () => ({
            filters: this._filters(),
            loaded: this._org.initialised(),
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
        }),
        {
            equal: (a, b) =>
                a.loaded === b.loaded &&
                a.building === b.building &&
                a.region === b.region &&
                a.filters.view === b.filters.view &&
                a.filters.date === b.filters.date &&
                (a.filters.zones || []).join(',') ===
                    (b.filters.zones || []).join(','),
        },
    );
    private readonly _bookings_params_debounced = debounced(
        this._bookings_params,
        500,
    );

    public nextPage() {
        this._loadPage(false);
    }

    constructor() {
        super();
        // Rebuild the paging query whenever the filters, organisation or
        // initialised state change. Debounced to collapse rapid updates.
        effect(() => {
            const { filters, loaded } = this._bookings_params_debounced.value();
            // Only load bookings when on events view
            if (!loaded || filters.view !== 'events') return;
            this._first_page = this._buildFirstPage(filters);
            this._next_page_fn = this._first_page;
            this._loadPage(true);
        });
    }

    /** Build the first page query function for the given filters */
    private _buildFirstPage(
        filters: DeskFilters,
    ): () => QueryResponse<Booking> {
        const date = filters.date || Date.now();
        const period_start = addMinutes(startOfDay(date), this.tz_offset * 60);
        const period_end = addMinutes(endOfDay(date), this.tz_offset * 60);
        const active_zones = this._getActiveZones(filters.zones);
        const all_zones =
            !active_zones.length || filters.zones?.includes('All');
        const zones = all_zones
            ? this._settings.get('app.use_region')
                ? this._org.buildingsForRegion().map((_) => _.id)
                : [this._org.building.id]
            : active_zones;
        return () =>
            queryPagedBookings({
                period_start: getUnixTime(period_start),
                period_end: getUnixTime(period_end),
                type: 'desk',
                zones: zones.join(','),
                include_checked_out: true,
                include_deleted: true,
                limit: 500,
            } as any);
    }

    /**
     * Load a page of desk bookings, either resetting the list or appending the
     * next page. Stale responses are discarded if a newer load has started.
     */
    private async _loadPage(reset: boolean) {
        const fetch = reset ? this._first_page : this._next_page_fn;
        if (!fetch) {
            if (reset) {
                this._bookings_state.set({
                    list: [],
                    total: 0,
                    has_next: false,
                });
            }
            return;
        }
        const token = ++this._load_token;
        this._loading.set(true);
        const resp: any = await Promise.resolve(fetch()).catch(() => ({
            data: [],
            total: 0,
            next: null,
        }));
        if (token !== this._load_token) return;
        const { data = [], total = 0, next = null } = resp || {};
        const list = data.map((booking) => this._normaliseBooking(booking));
        this._next_page_fn = next;
        this._bookings_state.update((acc) =>
            reset
                ? { list, total, has_next: list.length < total && !!next }
                : { list: [...acc.list, ...list], total, has_next: !!next },
        );
        this._loading.set(false);
        this._last_updated.set(Date.now());
    }

    private _normaliseBooking(booking: Booking) {
        const status =
            this._booking_status()[this._bookingKey(booking)] ||
            (booking?.rejected ? 'declined' : '');
        if (!status) return booking;
        return new Booking({
            ...booking,
            approved: status === 'approved',
            rejected: status === 'declined',
            status,
        });
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
        this._next_page_fn = this._first_page;
        this._loadPage(true);
    }

    /** Download the current desk list as a CSV file */
    public downloadDesksCSV() {
        const desks = this.desks();
        const rows = (
            desks.length
                ? desks
                : [
                      new Desk({
                          id: 'desk-123',
                          name: 'Test Desk',
                          bookable: true,
                          groups: ['test-desk-group', 'desk-bookers'],
                          features: ['Standing Desk', 'Dual Monitor'],
                          tags: ['engineering', 'level-3'],
                          homebase: 'Sydney HQ',
                      }),
                  ]
        ).map((desk) => {
            const row: any = desk.toJSON();
            delete row.images;
            return row;
        });
        downloadFile('desks.csv', jsonToCsv(rows));
    }

    public async addDesks(list: Desk[]) {
        const selected_zones = this._getSelectedZones();
        const all_zones = this._filters().zones?.includes('All');
        const fallback_zone =
            !all_zones && selected_zones.length ? selected_zones[0] : '';
        // Group the desks by their level so each level's metadata is only
        // written with its own desks.
        const groups = new Map<string, Desk[]>();
        for (const desk of list) {
            const zone = desk.zone?.id || fallback_zone;
            if (!zone) {
                notifyError(i18n('APP.CONCIERGE.DESKS_SELECT_LEVEL'));
                return;
            }
            groups.set(zone, [...(groups.get(zone) || []), desk]);
        }
        for (const [zone, desks] of groups) {
            const desk_list = this.desks().filter(
                (_) => (_.zone?.id || fallback_zone) === zone,
            );
            for (const desk of desks) {
                const idx = desk_list.findIndex((_) => _.id === desk.id);
                if (idx >= 0) desk_list[idx] = desk;
                else desk_list.push(desk);
            }
            await updateMetadata(zone, {
                name: 'desks',
                details: desk_list,
                description: 'List of available desks',
            });
        }
        this._change.set(Date.now());
    }

    public async editDesk(desk: Desk = new Desk()) {
        const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
        const state = await Promise.race([
            nextValueFrom(ref.afterClosed()),
            new Promise<any>((resolve) => {
                const sub = ref.componentInstance.event.subscribe((event) => {
                    if (event?.reason !== 'done') return;
                    sub.unsubscribe();
                    resolve(event);
                });
            }),
        ]);
        if (state?.reason !== 'done') return;
        const selected_zones = this._getSelectedZones();
        const all_zones = this._filters().zones?.includes('All');
        const zone =
            desk.zone?.id ||
            (!all_zones && selected_zones.length ? selected_zones[0] : '');
        if (!zone) {
            notifyError(i18n('APP.CONCIERGE.DESKS_SELECT_LEVEL'));
            return;
        }
        const new_desk = {
            ...state.metadata,
            id:
                state.metadata.id ||
                `desk-${zone.slice(-3)}.${randomInt(999_999)}`,
        };
        // Only this desk's level is written, so scope the list to that zone.
        const original_desk_list = this.desks().filter(
            (_) => (_.zone?.id || zone) === zone,
        );
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
        try {
            await updateMetadata(zone, {
                name: 'desks',
                details: desk_list,
                description: 'List of available desks',
            });
        } catch (e) {
            notifyError(i18n('APP.CONCIERGE.DESKS_SAVE_ERROR', { error: e }));
            ref.componentInstance.loading.set(false);
            throw e;
        }
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
            const created = await saveBooking(
                this._createAssignedBooking(new_desk, zone).toJSON(),
            ).catch(async (e) => {
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
            // Reject the assignee's overlapping ad-hoc desk bookings over the
            // next 4 weeks now that they have a recurring desk assigned.
            if (created?.id) {
                await rejectOverlappingRecurringBookings(created, 'desk').catch(
                    () => [],
                );
            }
        }
        this._change.set(Date.now());
        ref.close();
    }

    public async checkinDesk(desk: Booking, state = true) {
        const status: any = await checkinBooking(desk.id, state ?? true).catch(
            (_) => ({ failed: true, error: _ }),
        );
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
        const status: any = await approveBooking(desk.id).catch((_) => ({
            failed: true,
            error: _,
        }));
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
        (desk as any).status = 'approved';
        this._setBookingStatus(desk, 'approved');
        this.setFilters({});
    }

    public async rejectDesk(desk: Booking) {
        const status: any = await this._rejectDeskBooking(desk).catch((_) => ({
            failed: true,
            error: _,
        }));
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
        (desk as any).status = 'declined';
        this._setBookingStatus(desk, 'declined');
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
        await removeBooking(booking_id, query).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.DESKS_BOOKING_DELETE_ERROR', { error: e }),
            );
            result.close();
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.DESKS_BOOKING_DELETE_SUCCESS'));
        result.close();
        this._bookings_state.update((state) => ({
            ...state,
            list: state.list.map((item) => {
                const is_deleted = series
                    ? item.id === booking_id || item.parent_id === booking_id
                    : this._bookingKey(item) === this._bookingKey(booking);
                return is_deleted
                    ? new Booking({
                          ...item,
                          deleted: true,
                          status: 'cancelled',
                      })
                    : item;
            }),
        }));
    }

    public viewBookingHistory(booking: Booking) {
        if (!booking) return;
        this._dialog.open(BookingHistoryModalComponent, {
            data: { booking },
            width: '32rem',
            maxWidth: '100vw',
        });
    }

    public async giveAccess(desk: Booking) {
        const status: any = await saveBooking(
            new Booking({ ...desk, access: true }).toJSON(),
        ).catch((_) => ({ failed: true, error: _ }));
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
        const list = this.bookings().filter(
            (desk) => desk.status === 'approved' || desk.status === 'tentative',
        );
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
        try {
            await Promise.all(
                list.map((desk) => this._rejectDeskBooking(desk)),
            );
            list.forEach((desk) => {
                (desk as any).approved = false;
                (desk as any).rejected = true;
                (desk as any).status = 'declined';
                this._setBookingStatus(desk, 'declined');
            });
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.DESKS_REJECT_ALL_ERROR', { error: e }),
            );
            throw e;
        } finally {
            resp.close();
        }
        notifySuccess(i18n('APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS'));
        this.refresh();
    }

    private _rejectDeskBooking(desk: Booking) {
        return desk.instance
            ? rejectBookingInstance(desk.id, desk.instance)
            : rejectBooking(desk.id);
    }

    private _setBookingStatus(
        booking: Booking,
        status: 'approved' | 'declined',
    ) {
        this._booking_status.update((map) => ({
            ...map,
            [this._bookingKey(booking)]: status,
        }));
    }

    private _bookingKey(booking: Booking) {
        return `${booking.id}:${booking.instance || ''}`;
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
                    showMetadata(level.id, 'desks')
                        .then((metadata) =>
                            metadata.details instanceof Array
                                ? metadata.details
                                : [],
                        )
                        .catch(() => []),
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
            const key = 'APP.CONCIERGE.DESKS_ASSIGN_LIMIT_ERROR';
            const message = i18n(
                key,
                { count: max_assigned_count },
                max_assigned_count,
            );
            throw !message || message === key
                ? `Users can only have ${max_assigned_count} assigned desk${max_assigned_count === 1 ? '' : 's'} at a time.`
                : message;
        }
    }

    private async _rollbackMetadata(zone: string, original_desk_list: any[]) {
        try {
            await updateMetadata(zone, {
                name: 'desks',
                details: original_desk_list,
                description: 'List of available desks',
            });
        } catch (rollback_err) {
            console.error(
                'Failed to rollback desk metadata after error',
                rollback_err,
            );
        }
    }

    private _createAssignedBooking(desk: Desk, zone?: string) {
        const timezone = this._settings.get(
            'app.bookings.use_building_timezone',
        )
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
        await saveBooking(this._createAssignedBooking(desk, zone).toJSON());
    }

    private async _clearAssignedBooking(desk: Desk) {
        const today = Date.now();
        const booking_list = await queryBookings({
            period_start: getUnixTime(startOfDay(today)),
            period_end: getUnixTime(endOfDay(today)),
            type: 'desk',
            email: desk.assigned_to,
            include_checked_out: true,
        });
        const filtered = booking_list.filter((_) => _.asset_id === desk.id);
        const today_start = getUnixTime(startOfDay(today));
        for (const booking of filtered) {
            const is_recurring = booking.instance;
            const series_starts_today =
                getUnixTime(startOfDay(booking.booking_start * 1000)) ===
                today_start;
            if (is_recurring && !series_starts_today) {
                const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
                await updateBooking(
                    booking.id,
                    { recurrence_end: yesterday_end },
                    'patch',
                );
            } else {
                // Series starts today (truncating to yesterday would be
                // invalid) or it is a one-off booking, so delete it outright.
                await removeBooking(booking.parent_id || booking.id);
            }
        }
    }

    /** Selected zone filters with the "all levels" sentinel keys stripped */
    private _getSelectedZones(): string[] {
        return (this._filters().zones || []).filter(
            (zone) => !this._all_zones_keys.includes(zone),
        );
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
