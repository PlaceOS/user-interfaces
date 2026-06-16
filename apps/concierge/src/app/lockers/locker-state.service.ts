import { inject, Injectable } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
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
    checkinBooking,
    Locker,
    LockerBank,
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
import {
    BehaviorSubject,
    combineLatest,
    from,
    Observable,
    of,
    Subject,
} from 'rxjs';
import {
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

function lockerBankFromAsset(asset: PlaceAsset): LockerBank {
    const data = asset.other_data || {};
    const tags = data.tags ? JSON.parse(data.tags) : [];
    return {
        id: asset.id,
        map_id: asset.map_id || data.map_id || '',
        level_id: asset.zone_id,
        name: asset.identifier || data.name || '',
        height: +(data.height || 3),
        notes: asset.notes || '',
        zones: asset.zones || [asset.zone_id].filter((_) => _),
        tags: (asset as any).tags || tags,
        images: data.images ? JSON.parse(data.images) : [],
    } as LockerBank;
}

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

function lockerFromAsset(asset: PlaceAsset, banks: LockerBank[]): Locker {
    const data = asset.other_data || {};
    const position = data.position ? JSON.parse(data.position) : [0, 0];
    const size = data.size ? JSON.parse(data.size) : [1, 1];
    const features = data.features ? JSON.parse(data.features) : [];
    const bank_id = (asset as any).parent_id || '';
    const bank = banks.find((_) => _.id === bank_id);
    return {
        id: asset.id,
        bank_id,
        map_id: asset.map_id || data.map_id,
        assigned_to: (asset as any).assigned_to || data.assigned_to,
        assigned_name: (asset as any).assigned_name || data.assigned_name,
        name: asset.identifier || data.name || '',
        accessible: data.accessible === 'true',
        bookable: asset.bookable !== false,
        position,
        size,
        bank,
        zone: bank?.zone,
        features: asset.features || features,
    } as Locker;
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

    private _search = new BehaviorSubject('');
    private _filters = new BehaviorSubject<LockerFilters>({});
    // private _new_lockers = new BehaviorSubject<Locker[]>([]);
    private _locker_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<string>('');
    private _change = new BehaviorSubject(0);
    /** List of available locker levels for the current building */
    public levels = toObservable(this._org.level_list).pipe(
        map((_) => {
            if (!this._settings.get('app.use_region')) {
                const blds = this._org.buildingsForRegion();
                const bld_ids = blds.map((bld) => bld.id);
                const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
                list.map((lvl) => ({
                    ...lvl,
                    display_name: `${
                        blds.find((_) => _.id === lvl.parent_id)?.display_name
                    } - ${lvl.display_name}`,
                }));
                return list;
            }
            return _.filter((lvl) => lvl.parent_id === this._org.building.id);
        }),
    );
    public readonly loading = this._loading.asObservable();

    public get tz_offset() {
        const tz = this._settings.get('app.bookings.use_building_timezone')
            ? this._org.building.timezone
            : '';
        const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
        return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
    }

    public readonly filters = this._filters.asObservable();

    public readonly search = this._search.asObservable();

    public readonly lockers_banks$: Observable<LockerBank[]> = combineLatest([
        toObservable(this._org.active_building),
        toObservable(this._org.active_region),
        this._change,
    ]).pipe(
        debounceTime(300),
        switchMap(([building, region]) => {
            const scope_id = this._settings.get('app.use_region')
                ? region?.id
                : building?.id;
            if (!scope_id) return of([] as LockerBank[]);
            return from(queryLockerBankAssetsForZones([scope_id])).pipe(
                map((assets) => assets.map(lockerBankFromAsset)),
            );
        }),
        shareReplay(1),
    );
    public readonly lockers$: Observable<Locker[]> = combineLatest([
        toObservable(this._org.active_building),
        toObservable(this._org.active_region),
        this._change,
        this.lockers_banks$,
    ]).pipe(
        debounceTime(300),
        switchMap(([building, region, _change, banks]) => {
            const scope_id = this._settings.get('app.use_region')
                ? region?.id
                : building?.id;
            if (!scope_id) return of([] as Locker[]);
            return from(queryLockerAssetsForZones([scope_id])).pipe(
                map((assets) => {
                    const lockers = assets.map((_) =>
                        lockerFromAsset(_, banks),
                    );
                    for (const bank of banks) {
                        bank.lockers = lockers
                            .filter((_) => _.bank_id === bank.id)
                            .map((_) => ({ ..._ }));
                    }
                    return lockers;
                }),
            );
        }),
        map((lockers) => lockers.filter((_) => _.bank)),
        shareReplay(1),
    );
    /** List of levels with bookable locker resources */
    public bookable_levels = combineLatest([this.levels, this.lockers$]).pipe(
        map(([levels, lockers]) =>
            levels.filter((level) =>
                lockers.some(
                    (locker) =>
                        locker.bookable &&
                        (
                            (locker as any).zones ||
                            locker.bank?.zones ||
                            []
                        ).includes(level.id),
                ),
            ),
        ),
        shareReplay(1),
    );

    public filtered_lockers = combineLatest([
        this.filters,
        this._search,
        this.lockers$,
    ]).pipe(
        map(([{ zones }, search, list]) => {
            search = (search || '').toLowerCase();
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
        }),
    );

    public filtered_banks = combineLatest([
        this.filters,
        this._search,
        this.lockers_banks$,
        this.lockers$,
    ]).pipe(
        map(([{ zones }, search, list, lockers]) => {
            search = (search || '').toLowerCase();
            list = list.map((bank) => ({
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
        }),
    );

    private _next_page = new Subject<
        () => Observable<any> | QueryResponse<Booking>
    >();
    private _call_next_page = new Subject<string>();
    private _all_zones_keys = ['All', -1, '-1'];
    public readonly setup_paging = combineLatest([
        this._filters,
        toObservable(this._org.initialised),
    ]).pipe(
        debounceTime(500),
        tap(([filters, loaded]) => {
            if (!loaded) return;
            const date = filters.date || Date.now();
            const period_start = addMinutes(
                startOfDay(date),
                this.tz_offset * 60,
            );
            const period_end = addMinutes(endOfDay(date), this.tz_offset * 60);
            const zones =
                !filters.zones ||
                filters.zones.some((z) => this._all_zones_keys.includes(z))
                    ? this._settings.get('app.use_region')
                        ? [this._org.region.id]
                        : [this._org.building.id]
                    : filters.zones;
            this._next_page.next(() =>
                queryPagedBookings({
                    period_start: getUnixTime(period_start),
                    period_end: getUnixTime(period_end),
                    type: 'locker',
                    zones: zones.join(','),
                    include_checked_out: true,
                    limit: 1000,
                }),
            );
            this._call_next_page.next(`RESET_${Date.now()}`);
        }),
    );

    public readonly paged_bookings = combineLatest([
        this._next_page,
        this._call_next_page,
    ]).pipe(
        distinctUntilChanged((a, b) => a[1] === b[1]),
        switchMap(([next_page, action]) => {
            this._loading.next(
                addToken(this._loading.getValue(), '[BOOKINGS]'),
            );
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
                return from(next_page() as any).pipe(
                    map((data: any) => ({ ...data, reset: true })),
                );
            }
            return from(next_page() as any).pipe(
                map((data: any) => ({ ...data, reset: false })),
            );
        }),
        scan(
            (acc, { data, total, next, reset }) => {
                const list = data;
                this._next_page.next(next); // Set the next page function
                if (reset) return { list, total, has_next: !!next }; // Reset the items array
                return {
                    list: [...acc.list, ...list],
                    has_next: !!next,
                    total,
                };
            },
            { list: [], total: 0, has_next: false },
        ),
        tap(() =>
            this.timeout(
                'stop-loading',
                () =>
                    this._loading.next(
                        removeToken(this._loading.getValue(), '[BOOKINGS]'),
                    ),
                1000,
            ),
        ),
        shareReplay(1),
    );

    public readonly has_more_pages = this.paged_bookings.pipe(
        map((_) => _.has_next),
    );
    public readonly bookings = this.paged_bookings.pipe(map((i) => i.list));

    public readonly filtered_bookings = combineLatest([
        this.bookings,
        this._search,
    ]).pipe(
        map(([l, search]) =>
            l.filter(
                (_) =>
                    _.title.toLowerCase().includes(search.toLowerCase()) ||
                    _.user_name.toLowerCase().includes(search.toLowerCase()) ||
                    _.user_email.toLowerCase().includes(search.toLowerCase()) ||
                    _.description
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                    _.asset_name.toLowerCase().includes(search.toLowerCase()),
            ),
        ),
    );

    public nextPage() {
        this._call_next_page.next(`NEXT_${Date.now()}`);
    }

    constructor() {
        super();
        this.setup_paging.subscribe();
    }

    public setSearch(value: string) {
        this._search.next(value);
    }

    public setFilters(filters: LockerFilters) {
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
        this._loading.next(addToken(this._loading.getValue(), '[BOOKINGS]'));
        this.timeout('poll', () => this.setFilters(this._filters.getValue()));
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
            const value = await ref.afterClosed().toPromise();
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
        const lockers = await nextValueFrom(this.lockers$);
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
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone_id = state.metadata.level_id || this._org.building.id;
        const new_bank = {
            ...state.metadata,
            id: bank.id,
        };
        await saveLockerBankAsset(lockerBankToAsset(new_bank, zone_id));
        this._change.next(Date.now());
        ref.close();
    }

    /** Add or update a space in the available list */
    public async editLocker(bank: LockerBank, locker: Locker = {} as Locker) {
        const ref = this._dialog.open(LockerModalComponent, {
            data: { locker, bank },
        });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
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
        this._change.next(Date.now());
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
        this._change.next(Date.now());
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
        this._change.next(Date.now());
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
        const levels = await nextValueFrom(this.levels);
        const spaces = await nextValueFrom(this.lockers$);
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
        const id = await ref.afterClosed().toPromise();
        if (id) this._change.next(Date.now());
        return id;
    }

    public async checkinLocker(locker: Booking, state = true) {
        const status: any = await checkinBooking(
            locker.id,
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
