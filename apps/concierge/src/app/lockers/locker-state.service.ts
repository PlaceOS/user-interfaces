import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, Observable, of, Subject } from 'rxjs';
import {
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
    addHours,
    endOfDay,
    format,
    getUnixTime,
    set,
    startOfDay,
} from 'date-fns';

import {
    approveBooking,
    Booking,
    checkinBooking,
    loadLockerBanks,
    loadLockers,
    Locker,
    LockerBank,
    queryBookings,
    queryPagedBookings,
    RecurrenceDays,
    rejectBooking,
    removeBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    notifyError,
    notifyInfo,
    notifySuccess,
    openConfirmModal,
    randomInt,
    SettingsService,
    unique,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';
import { updateMetadata } from '@placeos/ts-client';
import { LockerModalComponent } from './locker-modal.component';
import { User } from '@sentry/angular';
import { LockerBookingModalComponent } from './locker-booking-modal.component';
import { LockerBankModalComponent } from './locker-bank-modal.component';

export interface LockerFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
}

const addToken = (l: string, t: string) => l.replace(t, '') + t;
const removeToken = (l: string, t: string) => l.replace(t, '');

@Injectable({
    providedIn: 'root',
})
export class LockerStateService extends AsyncHandler {
    private _filters = new BehaviorSubject<LockerFilters>({});
    // private _new_lockers = new BehaviorSubject<Locker[]>([]);
    private _locker_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<string>('');
    private _change = new BehaviorSubject(0);
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

    public readonly lockers_banks$: Observable<LockerBank[]> = loadLockerBanks(
        this._org,
        combineLatest([
            this._org.active_building,
            this._org.active_region,
            this._change,
        ]),
        () => this._settings.get('app.use_region'),
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
    );

    public filtered_lockers = combineLatest([this.filters, this.lockers$]).pipe(
        map(([{ zones, search }, list]) => {
            search = (search || '').toLowerCase();
            return list.filter((item) => {
                if (!zones?.length && !search) return;
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
        this.lockers_banks$,
    ]).pipe(
        map(([{ zones, search }, list]) => {
            search = (search || '').toLowerCase();
            return list.filter((item) => {
                if (!zones?.length && !search) return;
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
        tap((_) =>
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

    /** Add or update a space in the available list */
    public async editLockerBank(bank: LockerBank = {} as any) {
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
        const new_bank = {
            ...state.metadata,
            zone,
            id: bank.id || `locker-bank-${randomInt(999_999)}`,
        };
        const banks = await this.lockers_banks$.pipe(take(1)).toPromise();
        const idx = banks.findIndex((_) => _.id === new_bank.id);
        if (idx >= 0) banks[idx] = new_bank;
        else banks.push(new_bank);
        const new_locker_list = banks.map((_) => ({ ..._ }));
        for (const bank of new_locker_list) {
            delete bank.lockers;
        }
        await updateMetadata(zone, {
            name: 'locker_banks',
            details: new_locker_list,
            description: 'List of available locker banks',
        }).toPromise();
        this._change.next(Date.now());
        ref.close();
    }

    /** Add or update a space in the available list */
    public async editLocker(bank_id: string, locker: Locker = {} as any) {
        const ref = this._dialog.open(LockerModalComponent, {
            data: locker,
        });
        const state = await Promise.race([
            ref.afterClosed().toPromise(),
            ref.componentInstance.event
                .pipe(first((_) => _.reason === 'done'))
                .toPromise(),
        ]);
        if (state?.reason !== 'done') return;
        const zone = this._org.building.id;
        const new_locker = {
            ...state.metadata,
            bank_id,
            zone,
            id: locker.id || `locker-${zone}.${randomInt(999_999)}`,
        };
        const lockers = await this.lockers$.pipe(take(1)).toPromise();
        const idx = lockers.findIndex((_) => _.id === new_locker.id);
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
            const date = set(Date.now(), { hours: 4, minutes: 0, seconds: 0 });
            await saveBooking(
                new Booking({
                    user_id: new_locker.assigned_to,
                    user_email: new_locker.assigned_to,
                    booking_start: getUnixTime(date),
                    booking_end: getUnixTime(addHours(date, 16)),
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
                        new_locker.zone_id ||
                            new_locker.zone?.id ||
                            new_locker.zone,
                    ]),
                    extension_data: {
                        asset_name: new_locker.name,
                    },
                }),
            ).toPromise();
        }
        if (idx >= 0) lockers[idx] = new_locker;
        else lockers.push(new_locker);
        const new_locker_list = lockers;
        for (const locker of new_locker_list) {
            if (locker.bank) delete locker.bank;
        }
        await updateMetadata(zone, {
            name: 'lockers',
            details: new_locker_list,
            description: 'List of available lockers',
        }).toPromise();
        this._change.next(Date.now());
        ref.close();
    }

    public async removeLockerBank(bank: LockerBank) {
        const state = await openConfirmModal(
            {
                title: 'Remove Locker Bank',
                content: `Are you sure you wish to remove the locker bank "${bank.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading('Removing parking space...');
        const zone = this._org.building.id;
        const banks = await this.lockers_banks$.pipe(take(1)).toPromise();
        await updateMetadata(zone, {
            name: 'locker_banks',
            details: banks.filter((_) => _.id !== bank.id),
            description: 'List of available locker banks',
        }).toPromise();
        state.close();
        this._change.next(Date.now());
    }

    public async removeLocker(locker: Locker) {
        const state = await openConfirmModal(
            {
                title: 'Remove Locker',
                content: `Are you sure you wish to remove the locker "${locker.name}"?`,
                icon: { content: 'delete' },
            },
            this._dialog,
        );
        if (state?.reason !== 'done') return;
        state.loading('Removing parking space...');
        const zone = this._org.building.id;
        const lockers = await this.lockers$.pipe(take(1)).toPromise();
        this._clearAssignedBooking(locker);
        await updateMetadata(zone, {
            name: 'lockers',
            details: lockers.filter((_) => _.id !== locker.id),
            description: 'List of available lockers',
        }).toPromise();
        state.close();
        this._change.next(Date.now());
    }

    public editBooking(
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
        return new Promise<string>(async (resolve) => {
            const levels = await this.levels.pipe(take(1)).toPromise();
            const spaces = await this.lockers$.pipe(take(1)).toPromise();
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
            ref.afterClosed().subscribe((id) => {
                resolve(id);
                this._change.next(Date.now());
            });
        });
    }

    public async checkinLocker(locker: Booking, state = true) {
        const status: any = await checkinBooking(locker.id, state ?? true)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            notifyError(
                status.error
                    ? `Error: ${status.error}`
                    : `Error checking ${state ? 'in' : 'out'} locker booking`,
            );
            throw status.error;
        }
        notifySuccess(`Checked ${state ? 'in' : 'out'} ${locker.user_name}.`);
    }

    public async approveLocker(locker: Booking) {
        const success = await approveBooking(locker.id)
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError('Error approving in locker booking');
        }
        notifySuccess(
            `Approved locker booking for ${locker.user_name} on ${format(
                locker.date,
                'MMM do',
            )}.`,
        );
        (locker as any).approved = true;
        (locker as any).rejected = false;
    }

    public async rejectLocker(locker: Booking) {
        const success = await rejectBooking(locker.id)
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed') {
            return notifyError('Error rejecting in locker booking');
        }
        notifySuccess(
            `Rejected locker booking for ${locker.user_name} on ${format(
                locker.date,
                'MMM do',
            )}.`,
        );
        (locker as any).approved = false;
        (locker as any).rejected = true;
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
                title: 'Cancel all locker bookings',
                content:
                    'Are you sure you want to cancel all bookings for the selected date?',
                icon: {
                    type: 'icon',
                    class: 'material-icons',
                    content: 'delete',
                },
            },
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading('Rejecting all lockers for selected date...');
        await Promise.all(
            list.map((locker) => rejectBooking(locker.id).toPromise()),
        );
        notifySuccess(
            'Successfully rejected all locker bookings for selected date.',
        );
        resp.close();
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
}
