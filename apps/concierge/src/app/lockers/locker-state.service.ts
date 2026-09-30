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

import { openConfirmModal, runBulkAction } from '@placeos/components';
import { SelectUserModalComponent } from '@placeos/users';
import { bulkRejectOptions } from '../ui/bulk-booking-actions';
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

import { confirmAction, errorText, saveFromModal } from '../ui/modal-actions';
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
        const levels = this._settings.get('app.use_region')
            ? all.filter((lvl) => bld_ids.includes(lvl.parent_id))
            : all.filter((lvl) => lvl.parent_id === this._org.building?.id);
        return levels.sort(
            (a, b) =>
                +!!a.tags?.includes('parking') - +!!b.tags?.includes('parking'),
        );
    });
    public readonly loading = this._loading.asReadonly();
    private readonly _load_error = signal(false);
    /** Whether the latest load of bookings failed */
    public readonly load_error = this._load_error.asReadonly();

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
            const assets = await queryLockerBankAssetsForZones(
                this._lockerZoneIds(scope_id),
            );
            return unique(assets, 'id').map(lockerBankFromAsset);
        },
    });
    /**
     * Zones to search for locker assets. Banks and lockers are saved on
     * their level, so search the building or region and its levels.
     */
    private _lockerZoneIds(scope_id: string) {
        const levels = this._settings.get('app.use_region')
            ? this._org.levelsForRegion()
            : this._org.levelsForBuilding();
        return unique([scope_id, ...levels.map((level) => level.id)]);
    }

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
            const assets = unique(
                await queryLockerAssetsForZones(this._lockerZoneIds(scope_id)),
                'id',
            );
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
                limit: 200,
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
        let failed = false;
        const resp: any = await Promise.resolve(fetch()).catch(() => {
            failed = true;
            return { data: [], total: 0, next: null };
        });
        if (token !== this._load_token) return;
        this._load_error.set(failed);
        const { data = [], total = 0, next = null } = resp || {};
        const has_next = data.length > 0 && !!next;
        this._next_page_fn = has_next ? next : null;
        this._bookings_state.update((acc) =>
            reset
                ? { list: data, total, has_next }
                : { list: [...acc.list, ...data], total, has_next },
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

    /** Reload the first page of bookings with the current filters. */
    public refresh() {
        this._loadPage(true);
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
                    error: errorText(e),
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
                    i18n('APP.CONCIERGE.LOCKERS_RELEASE_ERROR', {
                        error: errorText(e),
                    }),
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
        try {
            await mod.execute('locker_unlock_mine', [
                locker.bank_id,
                locker.id,
            ]);
            notifySuccess(i18n(`APP.CONCIERGE.LOCKERS_OPEN_SUCCESS`));
        } catch (e) {
            notifyError(i18n(`APP.CONCIERGE.LOCKERS_OPEN_ERROR`, { error: e }));
        } finally {
            close?.();
        }
    }

    /** Add or update a space in the available list */
    public async editLockerBank(bank: LockerBank = {} as LockerBank) {
        const ref = this._dialog.open(LockerBankModalComponent, {
            data: bank,
        });
        await saveFromModal(ref, async (state) => {
            const zone_id = state.metadata.level_id || this._org.building.id;
            const new_bank = { ...state.metadata, id: bank.id };
            const saved = await saveLockerBankAsset(
                lockerBankToAsset(new_bank, zone_id),
            ).catch((e) => {
                notifyError(`Failed to save locker bank. ${errorText(e)}`);
                throw e;
            });
            // The asset list query lags new records, so add new banks directly.
            if (bank.id) this._change.set(Date.now());
            else this._upsertBank(lockerBankFromAsset(saved));
        });
    }

    /** Add or update a space in the available list */
    public async editLocker(bank: LockerBank, locker: Locker = {} as Locker) {
        const ref = this._dialog.open(LockerModalComponent, {
            data: { locker, bank },
        });
        await saveFromModal(ref, async (state) => {
            let saved: PlaceAsset;
            try {
                const zone_id = bank.zones?.[0] || this._org.building.id;
                const new_locker = {
                    ...state.metadata,
                    bank_id: bank.id,
                    bank,
                    id: locker.id,
                };
                // Save the locker before clearing the old assignee's booking, so a
                // failed save does not remove the booking.
                saved = await saveLockerAsset(
                    lockerToAsset(new_locker, zone_id),
                );
                if (
                    locker.assigned_to &&
                    locker.assigned_to !== new_locker.assigned_to
                ) {
                    await this._clearAssignedBooking(locker);
                }
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
            } catch (e) {
                notifyError(`Failed to save locker. ${errorText(e)}`);
                throw e;
            }
            // The asset list query lags new records, so add new lockers directly.
            if (locker.id) this._change.set(Date.now());
            else this._addLocker(lockerFromAsset(saved, this.lockers_banks()));
        });
    }

    /** Add a new locker bank to the displayed list. */
    private _upsertBank(bank: LockerBank) {
        const banks = this._lockers_banks.value() ?? [];
        this._lockers_banks.value.set([
            ...banks.filter((_) => _.id !== bank.id),
            bank,
        ]);
    }

    /** Add a new locker to the displayed list and to its bank. */
    private _addLocker(locker: Locker) {
        if (!locker.bank) return;
        locker.bank.lockers = [...(locker.bank.lockers || []), { ...locker }];
        this._lockers.value.set([...this.lockers(), locker]);
    }

    public async removeLockerBank(bank: LockerBank) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_TITLE', {
                    name: bank.name,
                }),
                icon: { content: 'delete' },
            },
            {
                loading: i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_LOADING'),
                action: () => deleteLockerBankAsset(bank.id),
                error: (e) =>
                    i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_ERROR', {
                        error: errorText(e),
                    }),
            },
        );
        if (!removed) return;
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_SUCCESS'));
        this._change.set(Date.now());
    }

    public async removeLocker(locker: Locker) {
        const removed = await confirmAction(
            this._dialog,
            {
                title: i18n('APP.CONCIERGE.LOCKERS_REMOVE_TITLE'),
                content: i18n('APP.CONCIERGE.LOCKERS_REMOVE_TITLE', {
                    name: locker.name,
                }),
                icon: { content: 'delete' },
            },
            {
                loading: i18n('APP.CONCIERGE.LOCKERS_REMOVE_LOADING'),
                action: async () => {
                    await this._clearAssignedBooking(locker);
                    await deleteLockerAsset(locker.id);
                },
                error: (e) =>
                    i18n('APP.CONCIERGE.LOCKERS_REMOVE_ERROR', {
                        error: errorText(e),
                    }),
            },
        );
        if (!removed) return;
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

    /**
     * Approve or reject several bookings. Asks before it rejects.
     * @returns `false` if the user cancelled
     */
    public async setBookingsApproval(bookings: Booking[], approve: boolean) {
        const failed = await runBulkAction(
            bookings,
            (locker) =>
                approve ? approveBooking(locker.id) : rejectBooking(locker.id),
            approve ? {} : bulkRejectOptions(bookings.length, this._dialog),
        );
        if (failed === null) return false;
        this.refresh();
        return true;
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
