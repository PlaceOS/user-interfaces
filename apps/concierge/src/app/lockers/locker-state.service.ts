import {
    computed,
    debounced,
    effect,
    inject,
    Injectable,
    resource,
    signal,
    Signal,
    untracked,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    deleteLockerAsset,
    deleteLockerBankAsset,
    queryLockerAssetsForZones,
    queryLockerBankAssetsForZones,
    saveLockerAsset,
    saveLockerBankAsset,
} from '@placeos/assets';
import {
    approveBooking,
    Locker,
    LockerBank,
    lockerBankFromAsset,
    lockerFromAsset,
    queryBookings,
    queryPagedBookings,
    rejectBooking,
    removeBooking,
    saveBooking,
    setBookingCheckedIn,
    updateBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    getTimezoneDifferenceInHours,
    i18n,
    nextValueFrom,
    notifyError,
    notifyInfo,
    notifySuccess,
    OrganisationService,
    RecurrenceDays,
    setTimeInTimezone,
    SettingsService,
    StaffUser,
    unique,
    User,
} from '@placeos/common';
import { PlaceAsset, QueryResponse } from '@placeos/ts-client';
import {
    addHours,
    addMinutes,
    endOfDay,
    getUnixTime,
    startOfDay,
    subDays,
} from 'date-fns';

import { openConfirmModal } from '@placeos/components';
import { SelectUserModalComponent } from '@placeos/users';
import { LockerBankModalComponent } from './locker-bank-modal.component';
import { LockerBookingModalComponent } from './locker-booking-modal.component';
import { LockerModalComponent } from './locker-modal.component';
import { ViewLockerBankModalComponent } from './view-locker-bank-modal.component';

export interface LockerFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
}

const addToken = (l: string, t: string) => l.replace(t, '') + t;
const removeToken = (l: string, t: string) => l.replace(t, '');

function lockerBankToAsset(
    bank: Partial<LockerBank>,
    zone_id: string,
): Partial<PlaceAsset> {
    return {
        ...(bank.id ? { id: bank.id } : {}),
        identifier: bank.name || '',
        map_id: bank.map_id || '',
        notes: (bank as any).notes || '',
        zone_id,
        zones: bank.zones || [zone_id],
        tags: bank.tags || [],
        other_data: {
            name: bank.name || '',
            map_id: bank.map_id || '',
            height: `${bank.height || 3}`,
            tags: JSON.stringify(bank.tags || []),
            images: JSON.stringify(bank.images || []),
        },
    } as unknown as Partial<PlaceAsset>;
}

function lockerToAsset(
    locker: Partial<Locker>,
    zone_id: string,
): Partial<PlaceAsset> {
    return {
        ...(locker.id ? { id: locker.id } : {}),
        identifier: locker.name || '',
        map_id: locker.map_id || '',
        zone_id,
        zones: locker.bank?.zones || [],
        features: locker.features || [],
        bookable: locker.bookable !== false,
        parent_id: locker.bank_id || '',
        assigned_to: locker.assigned_to || '',
        assigned_name: (locker as any).assigned_name || '',
        other_data: {
            name: locker.name || '',
            map_id: locker.map_id || '',
            assigned_to: locker.assigned_to || '',
            assigned_name: (locker as any).assigned_name || '',
            accessible: locker.accessible ? 'true' : 'false',
            position: JSON.stringify(locker.position || [0, 0]),
            size: JSON.stringify(locker.size || [1, 1]),
            features: JSON.stringify(locker.features || []),
        },
    } as unknown as Partial<PlaceAsset>;
}

@Injectable({
    providedIn: 'root',
})
export class LockerStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    private _search = signal('');
    private _filters = signal<LockerFilters>({});
    private _locker_bookings: Booking[] = [];
    private _loading = signal<string>('');
    private _change = signal(0);
    /** List of available locker levels for the current building, parking-only levels last */
    public readonly levels = computed(() => {
        const all = this._org.level_list();
        const bld_ids = this._org.buildingsForRegion().map((bld) => bld.id);
        const levels = !this._settings.get('app.use_region')
            ? all.filter((lvl) => bld_ids.includes(lvl.parent_id))
            : all.filter((lvl) => lvl.parent_id === this._org.building?.id);
        return levels.sort(
            (a, b) =>
                +!!a.tags?.includes('parking') - +!!b.tags?.includes('parking'),
        );
    });
    public readonly loading = this._loading.asReadonly();

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    public readonly filters = this._filters.asReadonly();

    public readonly search = this._search.asReadonly();

    /** List of locker banks for the active building/region */
    private readonly _lockers_banks = resource({
        params: () => ({
            building: this._org.active_building()?.id,
            region: this._org.active_region()?.id,
            change: this._change(),
        }),
        loader: async ({ params }) => {
            const scope_id = this._settings.get('app.use_region')
                ? params.region
                : params.building;
            if (!scope_id) return [] as LockerBank[];
            const assets = await queryLockerBankAssetsForZones([scope_id]);
            return assets.map(lockerBankFromAsset);
        },
    });
    public readonly lockers_banks = computed<LockerBank[]>(
        () => this._lockers_banks.value() ?? [],
    );

    /** List of lockers for the active building/region */
    private readonly _lockers = resource({
        params: () => {
            const banks = this._lockers_banks.value();
            return banks
                ? {
                      building: this._org.active_building()?.id,
                      region: this._org.active_region()?.id,
                      change: this._change(),
                      banks,
                  }
                : undefined;
        },
        defaultValue: [] as Locker[],
        loader: async ({ params }) => {
            const scope_id = this._settings.get('app.use_region')
                ? params.region
                : params.building;
            if (!scope_id) return [] as Locker[];
            const banks = params.banks;
            const assets = await queryLockerAssetsForZones([scope_id]);
            const lockers = assets.map((_) => lockerFromAsset(_, banks));
            for (const bank of banks) {
                bank.lockers = lockers
                    .filter((_) => _.bank_id === bank.id)
                    .map((_) => ({ ..._ }));
            }
            return lockers.filter((_) => _.bank);
        },
    });
    public readonly lockers: Signal<Locker[]> = this._lockers.value;

    /** List of levels with bookable locker resources */
    public readonly bookable_levels = computed(() => {
        const levels = this.levels();
        const lockers = this.lockers();
        return levels.filter((level) =>
            lockers.some(
                (locker) =>
                    locker.bookable &&
                    (
                        (locker as any).zones ||
                        locker.bank?.zones ||
                        []
                    ).includes(level.id),
            ),
        );
    });

    public readonly filtered_lockers = computed(() => {
        const { zones } = this._filters();
        const search = (this._search() || '').toLowerCase();
        const list = this.lockers();
        if (!zones?.length && !search) return list;
        return list.filter((item) => {
            let match = true;
            if (search) {
                match =
                    item.name.toLowerCase().includes(search) ||
                    item.bank.name.toLowerCase().includes(search);
            }
            if (zones?.length) {
                match = !!zones.find((zone) =>
                    ((item as any).zones || item.bank.zones || []).includes(
                        zone,
                    ),
                );
            }
            return match;
        });
    });

    public readonly filtered_banks = computed(() => {
        const { zones } = this._filters();
        const search = (this._search() || '').toLowerCase();
        const lockers = this.lockers();
        const list = this.lockers_banks().map((bank) => ({
            ...bank,
            lockers: lockers.filter((locker) => locker.bank_id === bank.id),
        }));
        if (!zones?.length && !search) return list;
        return list.filter((item) => {
            let match = true;
            if (search) {
                match = item.name.toLowerCase().includes(search);
            }
            if (zones?.length) {
                match = !!zones.find((zone) =>
                    (item.zones || []).includes(zone),
                );
            }
            return match;
        });
    });

    /** Accumulated paged locker bookings */
    private readonly _bookings_state = signal<{
        list: Booking[];
        total: number;
        has_next: boolean;
    }>({ list: [], total: 0, has_next: false });
    public readonly paged_bookings = this._bookings_state.asReadonly();

    public readonly has_more_pages = computed(
        () => this.paged_bookings().has_next,
    );
    public readonly bookings = computed(() => this.paged_bookings().list);

    public readonly filtered_bookings = computed(() => {
        const search = (this._search() || '').toLowerCase();
        return this.bookings().filter(
            (_) =>
                _.title.toLowerCase().includes(search) ||
                _.user_name.toLowerCase().includes(search) ||
                _.user_email.toLowerCase().includes(search) ||
                _.description.toLowerCase().includes(search) ||
                _.asset_name.toLowerCase().includes(search),
        );
    });

    private _all_zones_keys = ['All', -1, '-1'];
    /** Query for the first page of bookings for the active filters */
    private _first_page: (() => QueryResponse<Booking>) | null = null;
    /** Query for the next page of bookings */
    private _next_page_fn: (() => QueryResponse<Booking> | null) | null = null;
    /** Token used to discard responses from superseded page loads */
    private _load_token = 0;
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
        // Rebuild the paging query whenever the filters or initialised state
        // change. Debounced to collapse rapid updates.
        effect(() => {
            const { filters, loaded } = this._bookings_params_debounced.value();
            if (!loaded) return;
            untracked(() => {
                this._first_page = this._buildFirstPage(filters);
                this._next_page_fn = this._first_page;
                this._loadPage(true);
            });
        });
    }

    /** Build the first page query function for the given filters */
    private _buildFirstPage(
        filters: LockerFilters,
    ): () => QueryResponse<Booking> {
        const date = filters.date || Date.now();
        const period_start = addMinutes(startOfDay(date), this.tz_offset * 60);
        const period_end = addMinutes(endOfDay(date), this.tz_offset * 60);
        const zones =
            !filters.zones ||
            filters.zones.some((z) => this._all_zones_keys.includes(z))
                ? this._settings.get('app.use_region')
                    ? [this._org.region.id]
                    : [this._org.building.id]
                : filters.zones;
        return () =>
            queryPagedBookings({
                period_start: getUnixTime(period_start),
                period_end: getUnixTime(period_end),
                type: 'locker',
                zones: zones.join(','),
                include_checked_out: true,
                limit: 1000,
            });
    }

    /**
     * Load a page of locker bookings, either resetting the list or appending
     * the next page. Stale responses are discarded if a newer load started.
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
        this._loading.set(addToken(this._loading(), '[BOOKINGS]'));
        const resp: any = await Promise.resolve(fetch()).catch(() => ({
            data: [],
            total: 0,
            next: null,
        }));
        if (token !== this._load_token) return;
        const { data = [], total = 0, next = null } = resp || {};
        this._next_page_fn = next;
        this._bookings_state.update((acc) =>
            reset
                ? { list: data, total, has_next: !!next }
                : { list: [...acc.list, ...data], total, has_next: !!next },
        );
        this.timeout(
            'stop-loading',
            () => this._loading.set(removeToken(this._loading(), '[BOOKINGS]')),
            1000,
        );
    }

    public setSearch(value: string) {
        this._search.set(value);
    }

    public setFilters(filters: LockerFilters) {
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
        this._filters.set({ ...this._filters(), ...filters });
    }

    public refresh() {
        this._loading.set(addToken(this._loading(), '[BOOKINGS]'));
        this.timeout('poll', () => this.setFilters(this._filters()));
    }

    public viewLockerBank(bank: LockerBank) {
        this._dialog.open(ViewLockerBankModalComponent, {
            data: { bank },
        });
    }

    public async allocateLocker(locker: Locker, notify = true) {
        const mod = this._org.module('lockers', 'Lockers');
        if (!mod) return notifyError(i18n('APP.CONCIERGE.LOCKERS_NO_DRIVER'));
        await mod
            .execute('locker_allocate_me', [locker.bank_id, locker.id])
            .catch((e) => {
                notifyError(e);
                throw e;
            });
        if (notify)
            notifySuccess(`Successfully allocated locker "${locker.name}"`);
    }

    public get has_driver() {
        return !!this._org.binding('lockers');
    }

    public async shareLocker(locker: Locker, user?: StaffUser) {
        const mod = this._org.module('lockers', 'Lockers');
        if (!mod) return notifyError(i18n('APP.CONCIERGE.LOCKERS_NO_DRIVER'));
        if (!user) {
            // TODO: Ask to select user
            const ref = this._dialog.open(SelectUserModalComponent, {});
            const value = await nextValueFrom(ref.afterClosed());
            if (!value) return;
            user = value;
        }
        console.log('User:', user);
        await this.allocateLocker(locker, false);
        await mod
            .execute('locker_share_mine', [locker.bank_id, locker.id, user.id])
            .catch((e) => {
                console.log('err', e);
                notifyError(
                    i18n(`APP.CONCIERGE.LOCKERS_SHARE_ERROR`, {
                        error: `${e?.msg || e}`,
                    }),
                );
                throw e;
            });
        notifySuccess(
            i18n(`APP.CONCIERGE.LOCKERS_SHARE_SUCCESS`, {
                name: locker.name,
                user: user.name,
            }),
        );
    }
    public async releaseAllLockers(confirm = false) {
        const mod = this._org.module('lockers', 'Lockers');
        if (!mod) return notifyError(i18n('APP.CONCIERGE.LOCKERS_NO_DRIVER'));
        let close: () => void;
        const lockers = this.lockers();
        if (!lockers.length) return;
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.CONCIERGE.LOCKERS_RELEASE_ALL_TITLE'),
                    content: i18n('APP.CONCIERGE.LOCKERS_RELEASE_ALL_MSG'),
                    icon: { content: 'event_busy' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.loading(i18n('APP.CONCIERGE.LOCKERS_RELEASE_ALL_LOADING'));
            close = result.close;
        }
        await mod.execute('release_all_lockers', []).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_RELEASE_ALL_ERROR', {
                    error: e,
                }),
            );
            if (close) close();
            throw e;
        });
        notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_RELEASE_ALL_SUCCESS`));
        if (close) close();
    }

    public async releaseLocker(locker: Locker, confirm = false) {
        const mod = this._org.module('lockers', 'Lockers');
        if (!mod) return notifyError(i18n('APP.CONCIERGE.LOCKERS_NO_DRIVER'));
        let close: () => void;
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.CONCIERGE.LOCKERS_RELEASE_TITLE'),
                    content: i18n('APP.CONCIERGE.LOCKERS_RELEASE_MSG'),
                    icon: { content: 'event_busy' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.loading(i18n('APP.CONCIERGE.LOCKERS_RELEASE_LOADING'));
            close = result.close;
        }
        await mod
            .execute('locker_release', [locker.bank_id, locker.id])
            .catch((e) => {
                notifyError(
                    i18n('APP.CONCIERGE.LOCKERS_RELEASE_ERROR', { error: e }),
                );
                if (close) close();
                throw e;
            });
        notifySuccess(
            i18n(`APP.CONCIERGE.LOCKERS_RELEASE_SUCCESS`, {
                name: locker.name,
            }),
        );
        if (close) close();
    }

    public async openLocker(locker: Locker, confirm = false) {
        const mod = this._org.module('lockers', 'Lockers');
        if (!mod) return notifyError(i18n('APP.CONCIERGE.LOCKERS_NO_DRIVER'));
        let close: () => void;
        if (confirm) {
            const result = await openConfirmModal(
                {
                    title: i18n('APP.CONCIERGE.LOCKERS_OPEN_TITLE'),
                    content: i18n('APP.CONCIERGE.LOCKERS_OPEN_MSG'),
                    icon: { content: 'event_busy' },
                },
                this._dialog,
            );
            if (result.reason !== 'done') return;
            result.loading(i18n('APP.CONCIERGE.LOCKERS_OPEN_LOADING'));
            close = result.close;
        }
        await mod
            .execute('locker_unlock_mine', [locker.bank_id, locker.id])
            .catch((e) => {
                notifyError(
                    i18n(`APP.CONCIERGE.LOCKERS_OPEN_ERROR`, { error: e }),
                );
                throw e;
            });
        notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_OPEN_SUCCESS`));
        if (close) close();
    }

    /** Add or update a space in the available list */
    public async editLockerBank(bank: LockerBank = {} as LockerBank) {
        const ref = this._dialog.open(LockerBankModalComponent, {
            data: bank,
        });
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
        const zone_id = state.metadata.level_id || this._org.building.id;
        const new_bank = {
            ...state.metadata,
            id: bank.id,
        };
        await saveLockerBankAsset(lockerBankToAsset(new_bank, zone_id));
        this._change.set(Date.now());
        ref.close();
    }

    /** Add or update a space in the available list */
    public async editLocker(bank: LockerBank, locker: Locker = {} as Locker) {
        const ref = this._dialog.open(LockerModalComponent, {
            data: { locker, bank },
        });
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
        const zone_id = bank.zones?.[0] || this._org.building.id;
        const new_locker = {
            ...state.metadata,
            bank_id: bank.id,
            bank,
            id: locker.id,
        };
        if (
            locker.assigned_to &&
            locker.assigned_to !== new_locker.assigned_to
        ) {
            await this._clearAssignedBooking(locker);
        }
        const saved = await saveLockerAsset(lockerToAsset(new_locker, zone_id));
        if (
            locker.assigned_to !== new_locker.assigned_to &&
            new_locker.assigned_to
        ) {
            const timezone = this._settings.get(
                'app.bookings.use_building_timezone',
            )
                ? this._org.building?.timezone
                : '';
            const date = setTimeInTimezone(Date.now(), 2, 0, timezone);
            await saveBooking(
                new Booking({
                    user_id: new_locker.assigned_to,
                    user_email: new_locker.assigned_to,
                    user_name: new_locker?.assigned_name,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 20)),
                    type: 'locker',
                    booking_type: 'locker',
                    asset_id: saved.id,
                    asset_name: new_locker.name,
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
                        zone_id,
                        ...(bank?.zones || []),
                    ]).filter((_) => !!_),
                    tags: bank?.tags || [],
                    extension_data: {
                        asset_name: new_locker.name,
                        tags: bank.tags || [],
                        is_assigned: true,
                    },
                }),
            );
        }
        this._change.set(Date.now());
        ref.close();
    }

    public async removeLockerBank(bank: LockerBank) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE', {
                    name: bank.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_LOADING'));
        await deleteLockerBankAsset(bank.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_ERROR', {
                    error: e,
                }),
            );
            throw e;
        });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_SUCCESS'));
        this._change.set(Date.now());
    }

    public async removeLocker(locker: Locker) {
        const state = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.LOCKERS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.LOCKERS_REMOVE_TITLE', {
                    name: locker.name,
                }),
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading(i18n('APP.CONCIERGE.LOCKERS_REMOVE_LOADING'));
        await this._clearAssignedBooking(locker);
        await deleteLockerAsset(locker.id).catch((e) => {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_REMOVE_ERROR', { error: e }),
            );
            throw e;
        });
        state.close();
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_REMOVE_SUCCESS'));
        this._change.set(Date.now());
    }

    public async editBooking(
        booking?: Booking,
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
            space?: Locker;
            allow_time_changes?: boolean;
            external_user?: boolean;
        } = {},
    ) {
        const levels = this.levels();
        const spaces = this.lockers();
        if (!space && booking?.asset_id) {
            space = spaces.find((_) => _.id === booking.asset_id);
        }
        const ref = this._dialog.open(LockerBookingModalComponent, {
            data: {
                parent_id,
                booking: booking,
                user,
                link_id,
                date,
                level: levels[0],
                space,
                allow_time_changes,
                external_user,
            },
        });
        const id = await nextValueFrom(ref.afterClosed());
        if (id) this._change.set(Date.now());
        return id;
    }

    public async checkinLocker(locker: Booking, state = true) {
        const status: any = await setBookingCheckedIn(
            locker,
            state ?? true,
        ).catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            notifyError(
                i18n(
                    state
                        ? 'BOOKINGS.CHECK_IN_ERROR'
                        : 'BOOKINGS_CHECK_OUT_ERROR',
                ),
            );
            throw status.error;
        }
        notifySuccess(
            i18n(
                state
                    ? 'BOOKINGS.CHECK_IN_SUCCESS'
                    : 'BOOKINGS_CHECK_OUT_SUCCESS',
            ),
        );
    }

    public async approveLocker(locker: Booking) {
        const success = await approveBooking(locker.id).catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError(i18n('APP.CONCIERGE.LOCKERS_APPROVE_ERROR'));
        }
        notifySuccess(
            i18n('APP.CONCIERGE.LOCKERS_APPROVE_SUCCESS', {
                name: locker.user_name,
            }),
        );
        (locker as any).approved = true;
        (locker as any).rejected = false;
        (locker as any).status = 'approved';
        this.refresh();
    }

    public async rejectLocker(locker: Booking) {
        const success = await rejectBooking(locker.id).catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError(i18n('APP.CONCIERGE.LOCKERS_REJECT_ERROR'));
        }
        notifySuccess(
            i18n('APP.CONCIERGE.LOCKERS_REJECT_SUCCESS', {
                name: locker.user_name,
            }),
        );
        (locker as any).approved = false;
        (locker as any).rejected = true;
        (locker as any).status = 'declined';
        this.refresh();
    }

    public async giveAccess(locker: Booking) {
        const success = await saveBooking(
            new Booking({ ...locker, access: true }),
        ).catch((_) => 'failed');
        if (success === 'failed')
            return notifyError('Error giving building access booking host');
        notifySuccess(
            `Successfully gave building access to ${locker.user_name} for locker booking.`,
        );
        this._locker_bookings = [...this._locker_bookings, success] as any;
    }

    public async rejectAllLockers() {
        const list = this._locker_bookings || [];
        if (list.length <= 0)
            return notifyInfo('No lockers to reject for the selected date');
        const resp = await openConfirmModal(
            {
                title: i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_TITLE'),
                content: i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_MSG'),
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'delete',
                },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading(i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_LOADING'));
        await Promise.all(list.map((locker) => rejectBooking(locker.id))).catch(
            (e) => {
                notifyError(i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_ERROR'));
                throw e;
            },
        );
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_SUCCESS'));
        resp.close();
        this.refresh();
    }

    private async _clearAssignedBooking(resource: Locker) {
        const today = Date.now();
        const booking_list = await queryBookings({
            period_start: getUnixTime(startOfDay(today)),
            period_end: getUnixTime(endOfDay(today)),
            type: 'locker',
            email: resource.assigned_to,
            include_checked_out: true,
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
                await removeBooking(booking.id);
            }
        }
    }
}
