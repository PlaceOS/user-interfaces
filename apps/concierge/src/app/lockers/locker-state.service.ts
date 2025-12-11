import { inject, Injectable, signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {
    approveBooking,
    checkinBooking,
    legacyLockerBankMapFn,
    legacyLockerMapFn,
    loadLockerBanks,
    loadLockers,
    Locker,
    LOCKER_ASSET_MAPPING,
    LOCKER_BANK_ASSET_MAPPING,
    LockerBank,
    queryBookings,
    queryPagedBookings,
    rejectBooking,
    removeBooking,
    ResourceAssetsService,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    i18n,
    nextValueFrom,
    notifyError,
    notifyInfo,
    notifySuccess,
    OrganisationService,
    randomInt,
    RecurrenceDays,
    SettingsService,
    StaffUser,
    unique,
    User,
} from '@placeos/common';
import { QueryResponse, updateMetadata } from '@placeos/ts-client';
import { addHours, endOfDay, getUnixTime, set, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
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

@Injectable({
    providedIn: 'root',
})
export class LockerStateService extends AsyncHandler {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);
    private _resourceAssets = inject(ResourceAssetsService);

    private _search = new BehaviorSubject('');
    private _filters = new BehaviorSubject<LockerFilters>({});
    // private _new_lockers = new BehaviorSubject<Locker[]>([]);
    private _locker_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<string>('');
    private _change = new BehaviorSubject(0);
    private _banks_need_migration = signal<boolean>(false);
    private _lockers_need_migration = signal<boolean>(false);

    public readonly banks_need_migration =
        this._banks_need_migration.asReadonly();
    public readonly lockers_need_migration =
        this._lockers_need_migration.asReadonly();
    /** List of available locker levels for the current building */
    public levels = this._org.level_list.pipe(
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

    public readonly filters = this._filters.asObservable();

    public readonly search = this._search.asObservable();

    public readonly lockers_banks$: Observable<LockerBank[]> = loadLockerBanks(
        this._org,
        combineLatest([
            this._org.active_building,
            this._org.active_region,
            this._change,
        ]),
        () => this._settings.get('app.use_region'),
        this._resourceAssets,
    );
    public readonly lockers$: Observable<Locker[]> = loadLockers(
        this._org,
        combineLatest([
            this._org.active_building,
            this._org.active_region,
            this._change,
        ]),
        this.lockers_banks$,
        () => this._settings.get('app.use_region'),
        this._resourceAssets,
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
    ]).pipe(
        map(([{ zones }, search, list]) => {
            search = (search || '').toLowerCase();
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

    private _next_page = new Subject<() => QueryResponse<Booking>>();
    private _call_next_page = new Subject<string>();
    private _all_zones_keys = ['All', -1, '-1'];
    public readonly setup_paging = combineLatest([
        this._filters,
        this._org.initialised,
    ]).pipe(
        debounceTime(500),
        tap(([filters, loaded]) => {
            if (!loaded) return;
            const date = filters.date || Date.now();
            const zones =
                !filters.zones ||
                filters.zones.some((z) => this._all_zones_keys.includes(z))
                    ? this._settings.get('app.use_region')
                        ? [this._org.region.id]
                        : [this._org.building.id]
                    : filters.zones;
            this._next_page.next(() =>
                queryPagedBookings({
                    period_start: getUnixTime(startOfDay(date)),
                    period_end: getUnixTime(endOfDay(date)),
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
                return next_page().pipe(
                    map((data: any) => ({ ...data, reset: true })),
                );
            }
            return next_page().pipe(
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
        // Check migration status when building changes
        this._org.active_building.subscribe(() => {
            this.checkBanksMigrationStatus();
            this.checkLockersMigrationStatus();
        });
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

    /** Add or update a locker bank in the available list */
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
        const zone = this._org.building.id;
        const new_bank: LockerBank = {
            ...state.metadata,
            id: bank.id || `locker-bank-${randomInt(999_999)}`,
        };

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'locker_banks',
            zone,
        );

        try {
            if (using_assets) {
                const saved = await this._resourceAssets.saveResource(
                    'locker_banks',
                    new_bank,
                    zone,
                    LOCKER_BANK_ASSET_MAPPING,
                    bank.id,
                );
                if (saved) {
                    (new_bank as any).id = saved.id;
                }
            } else {
                const banks = await nextValueFrom(this.lockers_banks$);
                const idx = banks.findIndex(
                    (_) => _.id === (bank.id || new_bank.id),
                );
                if (idx >= 0) banks[idx] = new_bank;
                else banks.push(new_bank);
                const new_locker_list = banks.map((_) => ({ ..._ }));
                for (const b of new_locker_list) {
                    delete b.lockers;
                }
                await updateMetadata(zone, {
                    name: 'locker_banks',
                    details: new_locker_list,
                    description: 'List of available locker banks',
                }).toPromise();
            }
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_BANK_SAVE_ERROR', { error: e }) ||
                    `Failed to save locker bank: ${e}`,
            );
            throw e;
        }

        this._change.next(Date.now());
        ref.close();
    }

    /** Add or update a locker in the available list */
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
        const zone = this._org.building.id;
        const new_locker: Locker = {
            ...state.metadata,
            bank_id: bank.id,
            id: locker.id || `locker-${zone}.${randomInt(999_999)}`,
        };

        if (
            locker.assigned_to &&
            locker.assigned_to !== new_locker.assigned_to
        ) {
            this._clearAssignedBooking(locker);
        }
        if (
            locker.assigned_to !== new_locker.assigned_to &&
            new_locker.assigned_to
        ) {
            const date = set(Date.now(), { hours: 2, minutes: 0, seconds: 0 });
            await saveBooking(
                new Booking({
                    user_id: new_locker.assigned_to,
                    user_email: new_locker.assigned_to,
                    user_name: (new_locker as any)?.assigned_name,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 20)),
                    type: 'locker',
                    booking_type: 'locker',
                    asset_id: new_locker.id,
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
                        ...(bank?.zones || []),
                    ]).filter((_) => !!_),
                    tags: bank?.tags || [],
                    extension_data: {
                        asset_name: new_locker.name,
                        tags: bank.tags || [],
                        is_assigned: true,
                    },
                }),
            ).toPromise();
        }

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'lockers',
            zone,
        );

        try {
            if (using_assets) {
                const saved = await this._resourceAssets.saveResource(
                    'lockers',
                    new_locker,
                    zone,
                    LOCKER_ASSET_MAPPING,
                    locker.id,
                );
                if (saved) {
                    (new_locker as any).id = saved.id;
                }
            } else {
                const lockers = await nextValueFrom(this.lockers$);
                const idx = lockers.findIndex(
                    (_) => _.id === (locker.id || new_locker.id),
                );
                if (idx >= 0) lockers[idx] = new_locker;
                else lockers.push(new_locker);
                const new_locker_list = lockers;
                for (const l of new_locker_list) {
                    if (l.bank) delete l.bank;
                    if (l.zone) delete l.zone;
                }
                await updateMetadata(zone, {
                    name: 'lockers',
                    details: new_locker_list,
                    description: 'List of available lockers',
                }).toPromise();
            }
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_SAVE_ERROR', { error: e }) ||
                    `Failed to save locker: ${e}`,
            );
            throw e;
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
        const zone = this._org.building.id;

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'locker_banks',
            zone,
        );

        try {
            if (using_assets) {
                await this._resourceAssets.deleteResource(bank.id);
            } else {
                const banks = await nextValueFrom(this.lockers_banks$);
                await updateMetadata(zone, {
                    name: 'locker_banks',
                    details: banks.filter((_) => _.id !== bank.id),
                    description: 'List of available locker banks',
                }).toPromise();
            }
            notifySuccess(i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_SUCCESS'));
            this._change.next(Date.now());
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_BANK_REMOVE_ERROR', {
                    error: e,
                }),
            );
        }
        state.close();
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
        const zone = this._org.building.id;
        this._clearAssignedBooking(locker);

        const using_assets = await this._resourceAssets.isUsingAssetsAPI(
            'lockers',
            zone,
        );

        try {
            if (using_assets) {
                await this._resourceAssets.deleteResource(locker.id);
            } else {
                const lockers = await nextValueFrom(this.lockers$);
                await updateMetadata(zone, {
                    name: 'lockers',
                    details: lockers.filter((_) => _.id !== locker.id),
                    description: 'List of available lockers',
                }).toPromise();
            }
            notifySuccess(i18n('APP.CONCIERGE.LOCKERS_REMOVE_SUCCESS'));
            this._change.next(Date.now());
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_REMOVE_ERROR', { error: e }),
            );
        }
        state.close();
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
        const status: any = await checkinBooking(locker.id, state ?? true)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
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
        const success = await approveBooking(locker.id)
            .toPromise()
            .catch((_) => 'failed');
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
        const success = await rejectBooking(locker.id)
            .toPromise()
            .catch((_) => 'failed');
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
        )
            .toPromise()
            .catch((_) => 'failed');
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
        await Promise.all(
            list.map((locker) => rejectBooking(locker.id).toPromise()),
        ).catch((e) => {
            notifyError(i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_ERROR'));
            throw e;
        });
        notifySuccess(i18n('APP.CONCIERGE.LOCKERS_REJECT_ALL_SUCCESS'));
        resp.close();
        this.refresh();
    }

    private async _clearAssignedBooking(locker: Locker) {
        const booking_list = await queryBookings({
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
            type: 'locker',
            email: locker.assigned_to,
            include_checked_out: true,
        }).toPromise();
        const filtered = booking_list.filter((_) => _.asset_id === locker.id);
        await Promise.all(filtered.map((_) => removeBooking(_.id).toPromise()));
    }

    /** Check and update migration status for locker banks */
    public async checkBanksMigrationStatus(): Promise<void> {
        const zone = this._org.building?.id;
        if (!zone) return;
        const needs_migration = await this._resourceAssets.needsMigration(
            'locker_banks',
            zone,
        );
        this._banks_need_migration.set(needs_migration);
    }

    /** Check and update migration status for lockers */
    public async checkLockersMigrationStatus(): Promise<void> {
        const zone = this._org.building?.id;
        if (!zone) return;
        const needs_migration = await this._resourceAssets.needsMigration(
            'lockers',
            zone,
        );
        this._lockers_need_migration.set(needs_migration);
    }

    /** Migrate locker banks from metadata to Assets API */
    public async migrateLockerBanks(): Promise<boolean> {
        const zone = this._org.building?.id;
        if (!zone) {
            notifyError('Please select a building to migrate locker banks.');
            return false;
        }

        const resp = await openConfirmModal(
            {
                title:
                    i18n('APP.CONCIERGE.LOCKERS_BANKS_MIGRATE_TITLE') ||
                    'Migrate Locker Banks',
                content:
                    i18n('APP.CONCIERGE.LOCKERS_BANKS_MIGRATE_MSG') ||
                    `This will migrate all locker banks for this building to the Assets API. Continue?`,
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'sync',
                },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return false;

        resp.loading(
            i18n('APP.CONCIERGE.LOCKERS_BANKS_MIGRATE_LOADING') ||
                'Migrating locker banks...',
        );

        try {
            const result = await this._resourceAssets.migrateFromMetadata(
                'locker_banks',
                'locker_banks',
                zone,
                LOCKER_BANK_ASSET_MAPPING,
                legacyLockerBankMapFn,
            );
            resp.close();
            this._banks_need_migration.set(false);
            this._change.next(Date.now());
            return result;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_BANKS_MIGRATE_ERROR', {
                    error: e,
                }) || `Migration failed: ${e}`,
            );
            resp.close();
            return false;
        }
    }

    /** Migrate lockers from metadata to Assets API */
    public async migrateLockers(): Promise<boolean> {
        const zone = this._org.building?.id;
        if (!zone) {
            notifyError('Please select a building to migrate lockers.');
            return false;
        }

        const resp = await openConfirmModal(
            {
                title:
                    i18n('APP.CONCIERGE.LOCKERS_MIGRATE_TITLE') ||
                    'Migrate Lockers',
                content:
                    i18n('APP.CONCIERGE.LOCKERS_MIGRATE_MSG') ||
                    `This will migrate all lockers for this building to the Assets API. Continue?`,
                icon: {
                    type: 'icon',
                    class: 'material-symbols-rounded',
                    content: 'sync',
                },
            },
            this._dialog,
        );

        if (resp.reason !== 'done') return false;

        resp.loading(
            i18n('APP.CONCIERGE.LOCKERS_MIGRATE_LOADING') ||
                'Migrating lockers...',
        );

        try {
            // Get current banks to build old ID -> new ID mapping
            const banks = await nextValueFrom(this.lockers_banks$);
            const bankIdMap = new Map<string, string>();
            for (const bank of banks) {
                const client_id = (bank as any).client_id;
                if (client_id && client_id !== bank.id) {
                    bankIdMap.set(client_id, bank.id);
                }
            }

            // Custom migration that updates bank_id references
            const result =
                await this._resourceAssets.migrateFromMetadataWithTransform(
                    'lockers',
                    'lockers',
                    zone,
                    LOCKER_ASSET_MAPPING,
                    (item: any, zone_id: string) => {
                        const locker = legacyLockerMapFn(item, zone_id);
                        // Update bank_id to new Asset ID if mapping exists
                        if (locker.bank_id && bankIdMap.has(locker.bank_id)) {
                            locker.bank_id = bankIdMap.get(locker.bank_id);
                        }
                        return locker;
                    },
                );
            resp.close();
            this._lockers_need_migration.set(false);
            this._change.next(Date.now());
            return result;
        } catch (e) {
            notifyError(
                i18n('APP.CONCIERGE.LOCKERS_MIGRATE_ERROR', { error: e }) ||
                    `Migration failed: ${e}`,
            );
            resp.close();
            return false;
        }
    }
}
