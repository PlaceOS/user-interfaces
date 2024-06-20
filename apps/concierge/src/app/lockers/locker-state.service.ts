import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, of, Subject } from 'rxjs';
import {
    debounceTime,
    distinctUntilChanged,
    map,
    scan,
    shareReplay,
    switchMap,
    tap,
} from 'rxjs/operators';
import { endOfDay, format, getUnixTime, startOfDay } from 'date-fns';

import {
    approveBooking,
    Booking,
    checkinBooking,
    queryPagedBookings,
    rejectBooking,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    notifyError,
    notifyInfo,
    notifySuccess,
    openConfirmModal,
    SettingsService,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';

import { QueryResponse } from '@placeos/ts-client/dist/esm/resources/functions';

export interface LockerFilters {
    date?: number;
    zones?: string[];
    show_map?: boolean;
    search?: string;
}

@Injectable({
    providedIn: 'root',
})
export class LockersStateService extends AsyncHandler {
    private _filters = new BehaviorSubject<LockerFilters>({});
    // private _new_lockers = new BehaviorSubject<Locker[]>([]);
    private _locker_bookings: Booking[] = [];
    private _loading = new BehaviorSubject<boolean>(false);
    /** List of available parking levels for the current building */
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
        })
    );

    // public readonly new_lockers = this._new_lockers.asObservable();

    // public get new_locker_count() {
    //     return this._new_lockers.getValue()?.length || 0;
    // }

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    // public readonly lockers: Observable<Locker[]> = this._filters.pipe(
    //     debounceTime(500),
    //     switchMap((filters) => {
    //         const zones = filters.zones || [];
    //         return zones && !zones.includes('All')
    //             ? showMetadata(zones[0], 'lockers').pipe(map((m) => m.details))
    //             : listChildMetadata(this._org.building?.id, {
    //                   name: 'lockers',
    //               }).pipe(
    //                   map((m) =>
    //                       m
    //                           .map((i) => i.metadata.lockers.details)
    //                           .reduce((c: any[], i: any[]) => [...c, ...i], [])
    //                   )
    //               );
    //     }),
    //     catchError((_) => []),
    //     map((list) => {
    //         if (!(list instanceof Array)) list = [];
    //         list.sort((a, b) => a.name?.localeCompare(b.name));
    //         return list.map((i) => new Locker({ ...i, qr_code: '' }));
    //     }),
    //     shareReplay(1)
    // );

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
                })
            );
            this._call_next_page.next(`RESET_${Date.now()}`);
        })
    );

    public readonly paged_bookings = combineLatest([
        this._next_page,
        this._call_next_page,
    ]).pipe(
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
                    map((data: any) => ({ ...data, reset: true }))
                );
            }
            return next_page().pipe(
                map((data: any) => ({ ...data, reset: false }))
            );
        }),
        scan(
            (acc, { data, total, next, reset }) => {
                const list = data;
                this._next_page.next(next); // Set the next page function
                if (reset) return { list, total }; // Reset the items array
                return {
                    list: [...acc.list, ...list],
                    total,
                };
            },
            { list: [], total: 0 }
        ),
        tap((_) => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly has_more_pages = this.paged_bookings.pipe(
        map((_) => _.list.length < _.total)
    );
    public readonly bookings = this.paged_bookings.pipe(map((i) => i.list));

    public nextPage() {
        this._call_next_page.next(`NEXT_${Date.now()}`);
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog,
        private _settings: SettingsService
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
        this._loading.next(true);
        this.timeout('poll', () => this.setFilters(this._filters.getValue()));
    }

    // public addLockers(list: Locker[]) {
    //     this._new_lockers.next(this._new_lockers.getValue().concat(list));
    // }

    // public clearNewLockers() {
    //     this._filters.next(this._filters.getValue());
    //     this._new_lockers.next([]);
    // }

    public async checkinLocker(locker: Booking, state: boolean = true) {
        console.log('Check-in:', locker);
        const status: any = await checkinBooking(locker.id, state ?? true)
            .toPromise()
            .catch((_) => ({ failed: true, error: _ }));
        if (status.failed) {
            notifyError(
                status.error
                    ? `Error: ${status.error}`
                    : `Error checking ${state ? 'in' : 'out'} locker booking`
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
                'MMM do'
            )}.`
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
                'MMM do'
            )}.`
        );
        (locker as any).approved = false;
        (locker as any).rejected = true;
    }

    public async giveAccess(locker: Booking) {
        const success = await saveBooking(
            new Booking({ ...locker, access: true })
        )
            .toPromise()
            .catch((_) => 'failed');
        if (success === 'failed')
            return notifyError('Error giving building access booking host');
        notifySuccess(
            `Successfully gave building access to ${locker.user_name} for locker booking.`
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
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Rejecting all lockers for selected date...');
        await Promise.all(
            list.map((locker) => rejectBooking(locker.id).toPromise())
        );
        notifySuccess(
            'Successfully rejected all locker bookings for selected date.'
        );
        resp.close();
    }
}
