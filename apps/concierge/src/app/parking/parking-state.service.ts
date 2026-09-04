import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import type { ParkingFleetVehicle, ParkingUser } from '@placeos/assets';
import {
    deleteParkingFleetVehicle,
    deleteParkingSpace,
    deleteParkingUser,
    ParkingSpacePipe,
    queryParkingFleetVehicles,
    queryParkingSpaces,
    queryParkingSpacesForZones,
    queryParkingUsers,
    saveParkingFleetVehicle,
    saveParkingSpace,
    saveParkingUser,
    toParkingFleetVehicle,
} from '@placeos/assets';
import {
    approveBooking,
    approveBookingInstance,
    bookedResourceList,
    parkingRequestStatus,
    queryAllBookings,
    queryPagedBookings,
    rejectBooking,
    rejectBookingInstance,
    removeBooking as removeBookingApi,
    saveBooking,
    setBookingCheckedIn,
    updateBooking,
    updateBookingInstance,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    csvToJson,
    currentUser,
    downloadFile,
    getTimezoneDifferenceInHours,
    i18n,
    jsonToCsv,
    loadTextFileFromInputEvent,
    notifyError,
    notifySuccess,
    OrganisationService,
    RecurrenceDays,
    setTimeInTimezone,
    SettingsService,
    unique,
    User,
} from '@placeos/common';
import { openConfirmModal } from '@placeos/components';
import { PlaceAsset, QueryResponse } from '@placeos/ts-client';
import { UserPipe } from '@placeos/users';
import {
    addHours,
    addMinutes,
    endOfDay,
    endOfWeek,
    getUnixTime,
    startOfDay,
    startOfWeek,
    subDays,
} from 'date-fns';
import { BookingHistoryModalComponent } from '../ui/booking-history-modal.component';
import { ParkingAssignSpaceModalComponent } from './parking-assign-space-modal.component';
import { ParkingBookingHistoryModalComponent } from './parking-booking-history-modal.component';
import { ParkingBookingModalComponent } from './parking-booking-modal.component';
import { ParkingFleetModalComponent } from './parking-fleet-modal.component';
import { ParkingRequestModalComponent } from './parking-request-modal.component';
import { ParkingSpaceModalComponent } from './parking-space-modal.component';
import { ParkingUserModalComponent } from './parking-user-modal.component';

export type ParkingRequestFilter =
    | 'all'
    | 'bookings'
    | 'manual'
    | 'pending'
    | 'requests'
    | 'waitlist';

export interface ParkingOptions {
    date: number;
    period: 'day' | 'week';
    all_day?: boolean;
    duration?: number;
    search: string;
    zones: string[];
    request_filter: ParkingRequestFilter;
}

export type ParkingSpace = PlaceAsset;

export type { ParkingFleetVehicle, ParkingUser } from '@placeos/assets';

const USER_PIPE = new UserPipe();
const PARKING_SPACE_PIPE = new ParkingSpacePipe();
const MAX_BOOKING_PAGES = 50;

function csvList(value: unknown): string[] {
    const list = Array.isArray(value)
        ? value
        : String(value || '').split(/[|,]/);
    return list.map((_) => String(_).trim()).filter(Boolean);
}

function csvString(value: unknown): string {
    return value === null || value === undefined ? '' : String(value).trim();
}

function csvBoolean(value: unknown): boolean {
    return value === true || csvString(value).toLowerCase() === 'true';
}

function stripParkingZones(space: Partial<ParkingSpace>) {
    const metadata = { ...space };
    Reflect.deleteProperty(metadata, 'zone_id');
    Reflect.deleteProperty(metadata, 'zones');
    return metadata;
}

@Injectable({
    providedIn: 'root',
})
export class ParkingStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private readonly _options = signal<ParkingOptions>({
        date: Date.now(),
        period: 'day',
        all_day: true,
        duration: 60,
        search: '',
        zones: [],
        request_filter: 'all',
    });

    public get timezone() {
        return this._settings.get('app.bookings.use_building_timezone') ||
            this._settings.get('app.parking.use_building_timezone')
            ? this._org.building?.timezone
            : '';
    }

    public get tz_offset() {
        const tz = this.timezone;
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    /** Whether the organisation data has finished loading */
    public readonly org_initialised = this._org.initialised;

    /** Currently applied filter/view options for the parking section */
    public readonly options = this._options.asReadonly();
    /** Selected view period for the parking section */
    public readonly period = computed(() => this._options().period);

    /** Reactive `app.use_region` setting, kept in sync on building/region overrides */
    private readonly _use_region = this._settings.signal('use_region', false);

    /** List of available parking levels for the current building */
    public readonly levels = computed(() => {
        // Read `use_region` as a signal so the computed re-runs when building/region
        // overrides change it. Reading it non-reactively let this singleton computed
        // get stuck on the wrong branch and report no parking levels after load.
        const use_region = this._use_region();
        this._org.active_region();
        const bld = this._org.active_building();
        if (!bld) return [];
        const levels = this._org.levels.filter((_) =>
            _.tags.includes('parking'),
        );
        if (use_region) {
            const blds = this._org.buildingsForRegion();
            const bld_ids = blds.map((building) => building.id);
            return levels.filter((lvl) => bld_ids.includes(lvl.parent_id));
        }
        return levels.filter((lvl) => lvl.parent_id === bld.id);
    });

    /** Resource resolving which parking levels have bookable spaces */
    private readonly _bookable_levels_resource = resource({
        params: () => this.levels(),
        loader: async ({ params: levels }) => {
            if (!levels.length) return [];
            const checks = await Promise.all(
                levels.map(async (level) => {
                    const spaces = await queryParkingSpacesForZones([
                        level.id,
                    ]).catch(() => []);
                    return { level, has_bookable: spaces.length > 0 };
                }),
            );
            return checks
                .filter((item) => item.has_bookable)
                .map((item) => item.level);
        },
    });
    /** List of parking levels with parking space resources */
    public readonly bookable_levels = computed(
        () => this._bookable_levels_resource.value() ?? [],
    );

    /**
     * Params driving the parking space resource, debounced to coalesce changes.
     *
     * Only the resolved `zone_ids` are compared for equality so unrelated
     * option changes (e.g. `search` on each keystroke) don't trigger a reload.
     */
    private readonly _spaces_params = computed(
        () => {
            const levels = this.levels();
            const options = this._options();
            // No selection means all levels for the building.
            const zone_ids = options.zones.length
                ? options.zones
                : levels.map((lvl) => lvl.id);
            return zone_ids.length ? { zone_ids } : undefined;
        },
        {
            equal: (a, b) =>
                a === b ||
                (!!a && !!b && a.zone_ids.join() === b.zone_ids.join()),
        },
    );
    private readonly _spaces_params_debounced = debounced(
        this._spaces_params,
        300,
    );
    /** Resource resolving the parking spaces for the current selection */
    private readonly _spaces_resource = resource({
        params: () => this._spaces_params_debounced.value(),
        loader: async ({ params: { zone_ids } }) => {
            const list = await queryParkingSpacesForZones(zone_ids);
            return list.sort((a, b) =>
                (a.name || '').localeCompare(b.name || ''),
            );
        },
    });
    /** List of parking spaces for the current building/level */
    public readonly spaces = computed<ParkingSpace[]>(
        () => this._spaces_resource.value() ?? [],
    );

    /**
     * Map of parking space `asset_id` -> bay identifier, resolved via the same
     * `ParkingSpacePipe` asset list the bay column renders from. Bookings can
     * reference spaces on any level (outside the currently selected zone), so
     * resolving through the shared asset cache keeps search consistent with
     * what is displayed.
     */
    private readonly _bay_identifiers = signal<Record<string, string>>({});

    constructor() {
        super();
        // Rebuild the bookings paging query whenever the options, building or
        // user list change. Debounced to collapse rapid updates.
        effect(() => {
            const params = this._bookings_params_debounced.value();
            if (!params) return;
            this._first_page = this._buildFirstPage(params.options, params.bld);
            this._next_page_fn = this._first_page;
            this._loadPage(true);
        });
        // Resolve bay identifiers for the loaded bookings so they can be
        // searched by bay number/name. Uses the ParkingSpacePipe (shared asset
        // cache, with a per-id fetch fallback) so resolution matches the
        // displayed bay column regardless of the selected zone.
        effect(() => {
            const ids = unique(
                this.bookings()
                    .map((booking) => booking.asset_id)
                    .filter((id) => id && !id.startsWith('unallocated')),
            );
            const known = untracked(this._bay_identifiers);
            const missing = ids.filter((id) => !(id in known));
            if (!missing.length) return;
            Promise.all(
                missing.map(
                    async (id) =>
                        [
                            id,
                            (await PARKING_SPACE_PIPE.transform(id))
                                ?.identifier || '',
                        ] as const,
                ),
            ).then((entries) => {
                this._bay_identifiers.update((current) => {
                    const next = { ...current };
                    for (const [id, identifier] of entries) {
                        next[id] = identifier;
                    }
                    return next;
                });
            });
        });
    }

    /** Resource resolving the parking users for the current building */
    private readonly _users_resource = resource({
        params: () => {
            const bld = this._org.active_building();
            return bld?.id ? { building: bld.id } : undefined;
        },
        loader: ({ params: { building } }) => queryParkingUsers(building),
    });
    /** List of parking users for the current building */
    public readonly users = computed<ParkingUser[]>(
        () => this._users_resource.value() ?? [],
    );

    /** Resource resolving the fleet vehicles for the current building */
    private readonly _fleet_resource = resource({
        params: () => {
            const bld = this._org.active_building();
            return bld?.id ? { building: bld.id } : undefined;
        },
        loader: ({ params: { building } }) =>
            queryParkingFleetVehicles(building),
    });
    /** List of fleet vehicles for the current building */
    public readonly fleet_vehicles = computed<ParkingFleetVehicle[]>(
        () => this._fleet_resource.value() ?? [],
    );

    /**
     * Params driving the bookings resource, debounced to coalesce changes.
     *
     * Only the fields the loader actually queries on are compared for
     * equality, so client-side concerns like `search` don't trigger a server
     * reload (and the table flicker that comes with it).
     */
    private readonly _bookings_params = computed(
        () => {
            const bld = this._org.active_building();
            const users = this._users_resource.value();
            return bld?.id && users
                ? { bld, options: this._options(), users }
                : undefined;
        },
        {
            equal: (a, b) =>
                a === b ||
                (!!a &&
                    !!b &&
                    a.bld === b.bld &&
                    a.users === b.users &&
                    a.options.date === b.options.date &&
                    a.options.period === b.options.period &&
                    a.options.zones.join() === b.options.zones.join()),
        },
    );
    private readonly _bookings_params_debounced = debounced(
        this._bookings_params,
        500,
    );
    /** Accumulated paged parking bookings for the current selection */
    private readonly _bookings_state = signal<{
        list: Booking[];
        total: number;
        has_next: boolean;
    }>({ list: [], total: 0, has_next: false });
    /** Query for the first page of bookings for the active options */
    private _first_page: (() => QueryResponse<Booking>) | null = null;
    /** Query for the next page of bookings */
    private _next_page_fn: (() => QueryResponse<Booking> | null) | null = null;
    /** Token used to discard responses from superseded page loads */
    private _load_token = 0;
    private readonly _bookings_loading = signal(false);
    /** Time the booking list last finished loading from the server */
    private readonly _last_updated = signal(0);
    public readonly last_updated = this._last_updated.asReadonly();
    public readonly has_more_pages = computed(
        () => this._bookings_state().has_next,
    );
    /**
     * List of parking bookings for the current building/level. The previously
     * loaded list stays visible while a new first page is loading (polling,
     * filter/date change, etc.) instead of momentarily collapsing to `[]` and
     * flickering the table.
     */
    public readonly bookings = computed(() => this._bookings_state().list);

    public nextPage() {
        this._loadPage(false);
    }

    /** Reload the first page of bookings for the active options */
    public refresh() {
        this._next_page_fn = this._first_page;
        this._loadPage(true);
    }

    /** Build the first page query function for the given options */
    private _buildFirstPage(
        options: ParkingOptions,
        bld: { id?: string },
    ): () => QueryResponse<Booking> {
        const week_start = this._settings.get('app.week_start') || 0;
        const range_start =
            options.period === 'week'
                ? startOfWeek(options.date, { weekStartsOn: week_start })
                : startOfDay(options.date);
        const range_end =
            options.period === 'week'
                ? endOfWeek(options.date, { weekStartsOn: week_start })
                : endOfDay(options.date);
        const period_start = addMinutes(range_start, this.tz_offset * 60);
        const period_end = addMinutes(range_end, this.tz_offset * 60);
        return () =>
            queryPagedBookings({
                period_start: getUnixTime(period_start),
                period_end: getUnixTime(period_end),
                type: 'parking',
                zones: this._bookingQueryZone(options, bld),
                include_checked_out: true,
                include_deleted: true,
                limit: 200,
            } as any);
    }

    /**
     * Load a page of parking bookings, either resetting the list or appending
     * the next page. Stale responses are discarded if a newer load started.
     */
    private async _loadPage(reset: boolean, page_count = 1) {
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
        this._bookings_loading.set(true);
        const resp: any = await Promise.resolve(fetch()).catch(() => ({
            data: [],
            total: 0,
            next: null,
        }));
        if (token !== this._load_token) return;
        const { data = [], total = 0, next = null } = resp || {};
        const users = this._users_resource.value() || [];
        for (const booking of data) {
            const user = users.find(
                (_) =>
                    _.email.toLowerCase() === booking.user_email.toLowerCase(),
            );
            if (user) {
                booking.extension_data.plate_number =
                    booking.extension_data.plate_number || user.plate_number;
            }
        }
        const loaded_count = reset
            ? data.length
            : this._bookings_state().list.length + data.length;
        const has_next =
            data.length > 0 &&
            !!next &&
            page_count < MAX_BOOKING_PAGES &&
            (!total || loaded_count < total);
        this._next_page_fn = has_next ? next : null;
        this._bookings_state.update((acc) =>
            reset
                ? {
                      list: data,
                      total,
                      has_next,
                  }
                : {
                      list: [...acc.list, ...data],
                      total,
                      has_next,
                  },
        );
        if (has_next) {
            await this._loadPage(false, page_count + 1);
            return;
        }
        this._bookings_loading.set(false);
        this._last_updated.set(Date.now());
    }

    /** List of loading state tokens for the active parking resources */
    public readonly loading = computed(() => {
        const list: string[] = [];
        if (this._spaces_resource.isLoading()) list.push('spaces');
        if (this._users_resource.isLoading()) list.push('users');
        if (this._fleet_resource.isLoading()) list.push('fleet');
        if (this._bookings_loading()) list.push('[BOOKINGS]');
        return list;
    });

    public get week_start(): 0 | 1 | 2 | 3 | 4 | 5 | 6 {
        return this._settings.get('app.week_start') || 0;
    }

    public get show_waitlist() {
        return this._settings.get('app.parking.show_waitlist') !== false;
    }

    public setOptions(options: Partial<ParkingOptions>) {
        this._options.update((current) => ({ ...current, ...options }));
    }

    public setPeriod(period: 'day' | 'week') {
        this.setOptions({ period });
    }

    /** Reload all parking data resources after a mutation */
    private _reloadResources() {
        this._spaces_resource.reload();
        this._users_resource.reload();
        this._fleet_resource.reload();
        this.refresh();
    }

    /**
     * Resolve once a modal emits a `done` event or the dialog is closed,
     * whichever happens first.
     */
    private _waitForModalResult<T = any>(ref: any): Promise<T> {
        return new Promise<T>((resolve) => {
            let resolved = false;
            let event_sub: { unsubscribe: () => void } | undefined;
            let close_sub: { unsubscribe: () => void } | undefined;
            const done = (value: T) => {
                if (resolved) return;
                resolved = true;
                event_sub?.unsubscribe();
                close_sub?.unsubscribe();
                resolve(value);
            };
            close_sub = ref.afterClosed().subscribe((value: T) => done(value));
            event_sub = ref.componentInstance?.event?.subscribe((e: any) => {
                if (e?.reason === 'done') done(e);
            });
        });
    }

    private _bookingQueryZone(options: ParkingOptions, bld?: { id?: string }) {
        const allow_level_filter =
            options.request_filter === 'all' ||
            options.request_filter === 'bookings';
        if (allow_level_filter && options.zones?.length) {
            return options.zones.join(',');
        }
        return (
            (this._settings.get('app.use_region')
                ? this._org.region?.id
                : '') || bld?.id
        );
    }

    public isRequest(booking: Booking) {
        return !!booking.asset_id?.startsWith('unallocated');
    }

    public canApproveBooking(
        booking: Booking,
        user_groups = currentUser()?.groups || [],
    ) {
        const approver_group = booking.extension_data?.approver_group;
        return !approver_group || user_groups.includes(approver_group);
    }

    public isManualRequest(booking: Booking) {
        return (
            booking.status === 'tentative' &&
            parkingRequestStatus(booking) === 'approval_required'
        );
    }

    public isWaitlisted(booking: Booking) {
        return (
            booking.status === 'tentative' &&
            parkingRequestStatus(booking) === 'waitlist'
        );
    }

    public filterEventList(list: Booking[], filter_type: ParkingRequestFilter) {
        const show_requests = !!this._settings.get('app.parking.show_requests');
        const visible_list = show_requests
            ? list
            : list.filter((booking) => !this.isRequest(booking));
        if (filter_type === 'bookings') {
            return visible_list.filter((booking) => !this.isRequest(booking));
        }
        if (filter_type === 'requests') {
            return visible_list.filter((booking) => this.isRequest(booking));
        }
        if (filter_type === 'manual') {
            return visible_list.filter(
                (booking) =>
                    this.isManualRequest(booking) &&
                    booking.status === 'tentative',
            );
        }
        if (filter_type === 'waitlist') {
            return this.show_waitlist
                ? visible_list.filter((booking) => this.isWaitlisted(booking))
                : visible_list.filter((booking) => this.isRequest(booking));
        }
        if (filter_type === 'pending') {
            return visible_list.filter(
                (booking) =>
                    this.isRequest(booking) &&
                    booking.status === 'tentative' &&
                    (!this.show_waitlist || !this.isWaitlisted(booking)),
            );
        }
        return visible_list;
    }

    public filterEventSearch(list: Booking[], search = '') {
        const search_term = search.toLowerCase();
        if (!search_term) return list;
        const spaces = this.spaces();
        return list.filter(
            (booking) =>
                booking.user_name?.toLowerCase().includes(search_term) ||
                booking.user_email?.toLowerCase().includes(search_term) ||
                booking.booked_by_name?.toLowerCase().includes(search_term) ||
                booking.booked_by_email?.toLowerCase().includes(search_term) ||
                booking.asset_name?.toLowerCase().includes(search_term) ||
                booking.extension_data?.plate_number
                    ?.toLowerCase()
                    .includes(search_term) ||
                this.bayNumber(booking, spaces)
                    ?.toLowerCase()
                    .includes(search_term),
        );
    }

    /** Resolve the bay number (parking space identifier) for a booking */
    public bayNumber(booking: Booking, spaces = this.spaces()) {
        const asset_id = booking?.asset_id;
        if (!asset_id || asset_id.startsWith('unallocated')) return '';
        const resolved = this._bay_identifiers()[asset_id];
        if (resolved) return resolved;
        const space = spaces.find((_) => _.id === asset_id);
        return space?.identifier || '';
    }

    public activeBookings(list: Booking[]) {
        return list.filter((booking) => !this.isRequest(booking));
    }

    /** Download current parking spaces as a CSV file */
    public async downloadSpacesCSV() {
        const spaces = this.spaces();
        const rows = spaces.map((space) => ({
            id: space.id || '',
            identifier: space.identifier || '',
            map_id: space.map_id || '',
            assigned_to: space.assigned_to || '',
            assigned_name: space.assigned_name || '',
            bookable: space.bookable ?? false,
            place_groups: (space.place_groups || []).join('|'),
            features: (space.features || []).join('|'),
            notes: space.notes || '',
        }));
        if (!rows.length) {
            // Download an empty template with headers
            rows.push({
                id: '',
                identifier: '',
                map_id: '',
                assigned_to: '',
                assigned_name: '',
                bookable: false,
                place_groups: '',
                features: '',
                notes: '',
            });
        }
        const csv = jsonToCsv(rows);
        downloadFile('parking-spaces.csv', csv);
    }

    /** Upload a CSV file to create or update parking spaces */
    public async uploadSpacesCSV(event: InputEvent) {
        const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
            notifyError(m);
            throw e;
        });
        try {
            const rows = csvToJson(data) || [];
            if (!rows.length) {
                notifyError(i18n('APP.CONCIERGE.PARKING_CSV_EMPTY'));
                return;
            }
            const zone_id = this._options().zones[0] || '';
            // New spaces (rows without an id) need a level to be created on,
            // so require a specific level selection for them.
            const has_new_spaces = rows.some((row) => !csvString(row.id));
            if (has_new_spaces && !zone_id) {
                notifyError(i18n('APP.CONCIERGE.PARKING_CSV_NO_ZONE'));
                return;
            }
            let success_count = 0;
            let error_count = 0;
            for (const row of rows) {
                try {
                    const space_data: Partial<ParkingSpace> = {
                        ...(csvString(row.id) ? { id: csvString(row.id) } : {}),
                        identifier: csvString(row.identifier),
                        map_id: csvString(row.map_id),
                        assigned_to: csvString(row.assigned_to),
                        assigned_name: csvString(row.assigned_name),
                        bookable: csvBoolean(row.bookable),
                        place_groups: csvList(row.place_groups),
                        features: csvList(row.features),
                        notes: csvString(row.notes),
                        ...(!csvString(row.id) ? { zone_id } : {}),
                    };
                    if (space_data.assigned_to) {
                        await this._checkAssignedParkingLimit(
                            space_data.assigned_to,
                            space_data.id,
                        );
                    }
                    await saveParkingSpace(space_data);
                    success_count++;
                } catch (e) {
                    console.error('Failed to save parking space row:', row, e);
                    error_count++;
                }
            }
            if (error_count > 0) {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_CSV_SAVE_ERROR', {
                        count: error_count,
                    }),
                );
            }
            if (success_count > 0) {
                notifySuccess(
                    i18n('APP.CONCIERGE.PARKING_CSV_SAVE_SUCCESS', {
                        count: success_count,
                    }),
                );
            }
            this._reloadResources();
        } catch (e) {
            console.error('CSV parsing error:', e);
            notifyError(i18n('APP.CONCIERGE.PARKING_CSV_PARSE_ERROR'));
        }
    }

    /** Add or update a space in the available list */
    public async editSpace(space: ParkingSpace = {} as any) {
        const ref = this._dialog.open(ParkingSpaceModalComponent, {
            data: space,
        });
        const state = await this._waitForModalResult(ref);
        if (state?.reason !== 'done') return;
        // Keep the space on its own level when no specific level is selected
        // (viewing all levels), otherwise use the selected level.
        const zone_id =
            space.zone_id ||
            this._options().zones[0] ||
            this._org.levelsForBuilding()[0]?.id;
        const asset_data: Partial<ParkingSpace> = {
            ...stripParkingZones(state.metadata),
            id: state.metadata.id || undefined,
        };
        if (
            asset_data.assigned_to &&
            (space.assigned_to !== asset_data.assigned_to ||
                space.id !== asset_data.id)
        ) {
            try {
                await this._checkAssignedParkingLimit(
                    asset_data.assigned_to,
                    space.id,
                );
            } catch (error) {
                notifyError(
                    error instanceof Error ? error.message : `${error}`,
                );
                ref.componentInstance.loading.set(false);
                throw error;
            }
        }
        const original_space_data = stripParkingZones(space);
        let recreate = false;
        if (
            space.assigned_to &&
            (space.assigned_to !== asset_data.assigned_to ||
                space.id !== asset_data.id)
        ) {
            try {
                await this._clearAssignedBooking(space);
            } catch (e) {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR', {
                        error: e,
                    }),
                );
                ref.componentInstance.loading.set(false);
                throw e;
            }
            recreate = true;
        }
        const zones = unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            zone_id,
        ]);
        const saved = await saveParkingSpace(
            space.id ? asset_data : { ...asset_data, zone_id, zones },
        ).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR', {
                    error: e,
                }),
            );
            ref.componentInstance.loading.set(false);
            throw e;
        });
        if (
            (space.assigned_to !== asset_data.assigned_to || recreate) &&
            asset_data.assigned_to
        ) {
            await saveBooking(
                await this._createAssignedParkingBooking(
                    saved,
                    asset_data.assigned_to,
                    zones,
                ),
            ).catch(async (e) => {
                if (space.id) {
                    await saveParkingSpace(original_space_data);
                } else if (saved.id) {
                    await deleteParkingSpace(saved.id);
                }
                if (recreate) {
                    await this._restoreAssignedBooking(space).catch(
                        (restore_err) =>
                            console.error(
                                'Failed to restore assigned parking booking during rollback',
                                restore_err,
                            ),
                    );
                }
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_ERROR', {
                        error: e,
                    }),
                );
                ref.componentInstance.loading.set(false);
                throw e;
            });
        }
        this._reloadResources();
        ref.close();
    }

    /** Remove the given space from the available list */
    public async removeSpace(space: ParkingSpace) {
        const state = await openConfirmModal(
            {
                title: 'Remove Parking Space',
                content: `Are you sure you wish to remove the parking space "${space.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading('Removing parking space...');
        await this._clearAssignedBooking(space);
        await deleteParkingSpace(space.id);
        this._reloadResources();
        state.close();
    }

    /** Add or update a user in the available list */
    public async editUser(user?: ParkingUser) {
        const ref = this._dialog.open(ParkingUserModalComponent, {
            data: user,
        });
        const state = await this._waitForModalResult(ref);
        if (state?.reason !== 'done') return;
        const zone = this._org.building.id;
        const new_user = {
            ...state.metadata,
            id: state.metadata.id || undefined,
        };
        if ('user' in new_user) delete new_user.user;
        await saveParkingUser(new_user, zone);
        this._reloadResources();
        ref.close();
    }

    /** Remove the given user from the available list */
    public async removeUser(user: ParkingUser) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.PARKING_USER_REMOVE'),
                content: i18n('APP.CONCIERGE.PARKING_USER_REMOVE_MSG', {
                    name: user.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.PARKING_USER_REMOVE_LOADING'));
        await deleteParkingUser(user.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_USER_REMOVE_ERROR', {
                    error: e,
                }),
            );
            throw e;
        });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.PARKING_USER_REMOVE_SUCCESS'));
        this._reloadResources();
    }

    /** Add or update a fleet vehicle in the available list */
    public async editFleetVehicle(vehicle?: ParkingFleetVehicle) {
        const ref = this._dialog.open(ParkingFleetModalComponent, {
            data: vehicle,
        });
        const state = await this._waitForModalResult(ref);
        if (state?.reason !== 'done') return;
        const zone = this._org.building.id;
        const new_vehicle = {
            ...state.metadata,
            id: state.metadata.id || undefined,
        };
        const saved = await saveParkingFleetVehicle(new_vehicle, zone);
        this._upsertFleetVehicle(toParkingFleetVehicle(saved));
        ref.close();
    }

    /** Remove the given fleet vehicle from the available list */
    public async removeFleetVehicle(vehicle: ParkingFleetVehicle) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE'),
                content: i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_MSG', {
                    name: vehicle.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_LOADING'));
        await deleteParkingFleetVehicle(vehicle.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_ERROR', {
                    error: e,
                }),
            );
            throw e;
        });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.PARKING_FLEET_REMOVE_SUCCESS'));
        this._removeFleetVehicleFromList(vehicle.id);
    }

    public async editReservation(
        reservation?: Booking,
        {
            parent_id,
            user,
            link_id,
            date,
            space,
            allow_time_changes,
            external_user,
        }: {
            parent_id?: string;
            user?: User;
            link_id?: string;
            date?: number;
            space?: ParkingSpace;
            allow_time_changes?: boolean;
            external_user?: boolean;
        } = {},
    ) {
        if (reservation?.asset_id?.startsWith('unallocated')) {
            return new Promise<string>((resolve) => {
                const ref = this._dialog.open(ParkingRequestModalComponent, {
                    data: { booking: reservation, date },
                });
                ref.afterClosed().subscribe((id) => {
                    resolve(id);
                    if (id) this._reloadResources();
                    else this.refresh();
                });
            });
        }
        const levels = this.levels();
        const spaces = this.spaces();
        if (!space && reservation?.asset_id) {
            space = spaces.find((_) => _.id === reservation.asset_id);
        }
        return new Promise<string>((resolve) => {
            const ref = this._dialog.open(ParkingBookingModalComponent, {
                data: {
                    parent_id,
                    booking: reservation,
                    user,
                    link_id,
                    date,
                    level: levels[0],
                    space,
                    allow_time_changes,
                    external_user,
                },
            });
            ref.afterClosed().subscribe((id) => {
                resolve(id);
                this.refresh();
            });
        });
    }

    public viewBookingHistory(booking: Booking) {
        if (!booking) return;
        this._dialog.open(BookingHistoryModalComponent, {
            data: { booking },
            width: '32rem',
            maxWidth: '100vw',
        });
    }

    public requestParking(date?: number) {
        return new Promise<string>((resolve) => {
            const ref = this._dialog.open(ParkingRequestModalComponent, {
                data: { date },
            });
            ref.afterClosed().subscribe((id) => {
                resolve(id);
                if (id) this._reloadResources();
            });
        });
    }

    public async setBookingCheckinState(booking: Booking, state = true) {
        const promise = setBookingCheckedIn(booking, state).catch((_) => ({
            state: 'failed',
            error: _,
        }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n(
                      state
                          ? 'APP.CONCIERGE.PARKING_CHECKIN_ERROR'
                          : 'APP.CONCIERGE.PARKING_CHECKOUT_ERROR',
                      { error: success.error },
                  ),
              )
            : notifySuccess(
                  i18n(
                      state
                          ? 'APP.CONCIERGE.PARKING_CHECKIN_SUCCESS'
                          : 'APP.CONCIERGE.PARKING_CHECKOUT_SUCCESS',
                  ),
              );
        if (success.state !== 'failed') this._reloadResources();
    }

    public async approveBooking(booking: Booking, series = false) {
        if (
            !series &&
            this._settings.get('app.parking.assign_space_on_approve') &&
            this.isRequest(booking)
        ) {
            try {
                await this._assignSpaceForApproval(booking);
            } catch (error) {
                notifyError(
                    i18n('APP.CONCIERGE.PARKING_APPROVE_ERROR', {
                        error: error?.message || error?.error || error,
                    }),
                );
                return;
            }
        }
        const booking_id = series
            ? booking.parent_id || booking.id
            : booking.id;
        const promise = (
            !series && booking.instance
                ? approveBookingInstance(booking_id, booking.instance)
                : approveBooking(booking_id)
        ).catch((_) => ({ state: 'failed', error: _ }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n('APP.CONCIERGE.PARKING_APPROVE_ERROR', {
                      error: success.error,
                  }),
              )
            : notifySuccess(i18n('APP.CONCIERGE.PARKING_APPROVE_SUCCESS'));
        if (success.state !== 'failed') this._reloadResources();
    }

    public async rejectBooking(booking: Booking, series = false) {
        const booking_id = series
            ? booking.parent_id || booking.id
            : booking.id;
        const promise = (
            !series && booking.instance
                ? rejectBookingInstance(booking_id, booking.instance)
                : rejectBooking(booking_id)
        ).catch((_) => ({ state: 'failed', error: _ }));
        const success = await promise;
        success.state === 'failed'
            ? notifyError(
                  i18n('APP.CONCIERGE.PARKING_DECLINE_ERROR', {
                      error: success.error,
                  }),
              )
            : notifySuccess(i18n('APP.CONCIERGE.PARKING_DECLINE_SUCCESS'));
        if (success.state !== 'failed') this._reloadResources();
    }

    public async assignSpace(booking: Booking) {
        const ref = this._dialog.open(ParkingAssignSpaceModalComponent, {
            data: { booking },
        });
        const result = await ref.afterClosed().toPromise();
        if (result) this._reloadResources();
    }

    private async _assignSpaceForApproval(booking: Booking) {
        const building = this._org.building;
        const levels = this._org
            .levelsForBuilding(building)
            .filter((level) => level.tags.includes('parking'));
        if (!building?.id || !levels.length) {
            throw i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY');
        }
        const [booked_ids, level_spaces] = await Promise.all([
            bookedResourceList({
                period_start: getUnixTime(startOfDay(booking.date)),
                period_end: getUnixTime(endOfDay(booking.date)),
                type: 'parking',
                zones: building.id,
            }),
            Promise.all(levels.map((level) => queryParkingSpaces(level.id))),
        ]);
        const booked_resource_ids = new Set(booked_ids);
        const available_space = level_spaces
            .flat()
            .find(
                (space) =>
                    !booked_resource_ids.has(space.id) &&
                    !space.assigned_to &&
                    space.bookable !== false,
            );
        if (!available_space) {
            throw i18n('APP.CONCIERGE.PARKING_ASSIGN_SPACE_EMPTY');
        }
        const level = levels.find(
            (item) => item.id === available_space.zone_id,
        );
        const asset_name = available_space.name || available_space.id;
        const patch = {
            asset_id: available_space.id,
            asset_name,
            zones: level
                ? unique([
                      this._org.organisation.id,
                      this._org.region?.id,
                      level.parent_id,
                      level.id,
                  ]).filter((_) => _)
                : booking.zones,
            extension_data: {
                ...booking.extension_data,
                asset_name,
            },
        } as Partial<Booking>;
        await (booking.instance
            ? updateBookingInstance(
                  booking.id,
                  booking.instance || booking.booking_start,
                  patch,
              )
            : updateBooking(booking.id, patch));
    }

    public async removeBooking(booking: Booking) {
        const details = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.BOOKING_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.BOOKING_REMOVE_MSG', {
                    name:
                        booking.asset_name ||
                        booking.user_name ||
                        booking.user_email ||
                        booking.id,
                    time: new Date(booking.date).toLocaleString(),
                }),
                icon: { class: 'material-symbols-rounded', content: 'delete' },
            },
            this._dialog,
        );
        if (details?.reason !== 'done') return;
        details.loading(i18n('APP.CONCIERGE.BOOKING_REMOVE_LOADING'));
        const query = booking.instance
            ? { instance: true, start_time: booking.instance }
            : {};
        await removeBookingApi(booking.id, query).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.BOOKING_REMOVE_ERROR', { error: e }),
            );
            details.close();
            throw e;
        });
        details.close();
        notifySuccess(i18n('APP.CONCIERGE.BOOKING_REMOVE_SUCCESS'));
        this._reloadResources();
    }

    private async _checkAssignedParkingLimit(
        user_email: string,
        current_space_id?: string,
    ) {
        const max_assigned_count = Math.max(
            Number(this._settings.get('app.parking.max_assigned_count')) || 0,
            0,
        );
        if (!max_assigned_count || !user_email) return;
        const level_ids = this._org
            .levelsForBuilding(this._org.building)
            .filter((level) => level.tags.includes('parking'))
            .map((level) => level.id);
        if (!level_ids.length) return;
        const email = user_email.toLowerCase();
        const assigned_count = (
            await queryParkingSpacesForZones(level_ids).catch(() => [])
        ).filter(
            (space) =>
                space.id !== current_space_id &&
                space.assigned_to?.toLowerCase() === email,
        ).length;
        if (assigned_count >= max_assigned_count) {
            const key = 'APP.CONCIERGE.PARKING_ASSIGN_LIMIT_ERROR';
            const message = i18n(
                key,
                { count: max_assigned_count },
                max_assigned_count,
            );
            throw !message || message === key
                ? `Users can only have ${max_assigned_count} assigned parking space${max_assigned_count === 1 ? '' : 's'} at a time.`
                : message;
        }
    }

    private async _clearAssignedBooking(resource: ParkingSpace) {
        const today = Date.now();
        const booking_list = await queryAllBookings({
            period_start: getUnixTime(startOfDay(today)),
            period_end: getUnixTime(endOfDay(today)),
            type: 'parking',
            email: resource.assigned_to,
            include_checked_out: true,
            limit: 200,
        });
        const filtered = booking_list.filter((_) => _.asset_id === resource.id);
        for (const booking of filtered) {
            const is_recurring = booking.instance;
            if (is_recurring) {
                const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
                await updateBooking(
                    booking.id,
                    { recurrence_end: yesterday_end },
                    'patch',
                );
            } else {
                await removeBookingApi(booking.id);
            }
        }
    }

    private async _restoreAssignedBooking(resource: ParkingSpace) {
        if (!resource.assigned_to) return;
        await saveBooking(
            await this._createAssignedParkingBooking(
                resource,
                resource.assigned_to,
                unique(resource.zones || []).filter((_) => _),
            ),
        );
    }

    private async _createAssignedParkingBooking(
        resource: Partial<ParkingSpace>,
        user_email: string,
        zones: string[],
    ) {
        const users = this.users();
        const user = users.find((_) => _.email === user_email);
        const user_details = await USER_PIPE.transform(user_email);
        const timezone = this.timezone;
        const date = setTimeInTimezone(Date.now(), 1, 0, timezone);
        const asset_name = resource.name || resource.identifier || resource.id;
        return new Booking({
            user_id: user_details.id || user_email,
            user_email,
            user_name: user_details.name,
            booking_start: getUnixTime(date),
            booking_end: getUnixTime(addHours(date, 22)),
            type: 'parking',
            booking_type: 'parking',
            asset_id: resource.id,
            asset_name,
            recurrence_type: 'daily',
            recurrence_days:
                RecurrenceDays.MONDAY |
                RecurrenceDays.TUESDAY |
                RecurrenceDays.WEDNESDAY |
                RecurrenceDays.THURSDAY |
                RecurrenceDays.FRIDAY,
            zones,
            extension_data: {
                asset_name,
                is_assigned: true,
                plate_number: user?.plate_number || '',
            },
        });
    }

    private _upsertFleetVehicle(vehicle: ParkingFleetVehicle) {
        const fleet_list = this._fleet_resource.value() ?? [];
        const index = fleet_list.findIndex((_) => _.id === vehicle.id);
        this._fleet_resource.value.set(
            index >= 0
                ? fleet_list.map((item, idx) =>
                      idx === index ? vehicle : item,
                  )
                : [...fleet_list, vehicle],
        );
    }

    private _removeFleetVehicleFromList(vehicle_id: string) {
        this._fleet_resource.value.set(
            (this._fleet_resource.value() ?? []).filter(
                (_) => _.id !== vehicle_id,
            ),
        );
    }
}
