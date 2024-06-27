import { Injectable } from '@angular/core';
import { searchStaff, StaffUser } from '@placeos/users';
import { BehaviorSubject, combineLatest } from 'rxjs';

import {
    Booking,
    checkinBooking,
    queryBookings,
    saveBooking,
} from '@placeos/bookings';
import { map, shareReplay, switchMap } from 'rxjs/operators';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';
import { AsyncHandler, timePeriodsIntersect } from '@placeos/common';
import { HashMap } from '@placeos/ts-client/dist/esm/utilities/types';
import { OrganisationService } from '@placeos/organisation';

export interface StaffFilters {
    date?: number;
    zones?: string[];
    only_onsite?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class StaffStateService extends AsyncHandler {
    private _onsite: HashMap<boolean> = {};
    private _events: HashMap<Booking> = {};

    private _filters = new BehaviorSubject<StaffFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);

    private _users = new BehaviorSubject<StaffUser[]>([]);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly users = this._filters.asObservable();

    public readonly filtered_users = combineLatest([
        this._search,
        this._users,
        this._filters,
    ]).pipe(
        map((details) => {
            const [filter, users, options] = details;
            return users.filter(
                (i) =>
                    (!filter ||
                        i.name.toLowerCase().includes(filter) ||
                        i.email.toLowerCase().includes(filter)) &&
                    (!options.only_onsite || this._onsite[i.email])
            );
        })
    );

    public readonly user_events = combineLatest([this._filters]).pipe(
        switchMap(async (_) => {
            this._loading.next(true);
            const bookings = await queryBookings({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'staff',
            }).toPromise();
            const checkin_map = {};
            const now = new Date().valueOf();
            for (const bkn of bookings) {
                if (
                    timePeriodsIntersect(
                        now,
                        now,
                        bkn.date,
                        bkn.date + bkn.duration * 60 * 1000
                    )
                ) {
                    checkin_map[bkn.asset_id] = bkn.checked_in;
                    this._events[bkn.asset_id] = bkn;
                }
            }
            this._onsite = checkin_map;
            this._loading.next(false);
            return checkin_map;
        }),
        shareReplay(1)
    );

    constructor(private _org: OrganisationService) {
        super();
        this.loadUsers();
        this.user_events.subscribe();
    }

    public setFilters(filters: StaffFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    public startPolling(delay: number = 30 * 1000) {
        this.setFilters(this._filters.getValue());
        this.interval(
            'poll',
            () => this.setFilters(this._filters.getValue()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkin(user: StaffUser) {
        const result = await saveBooking({
            booking_start: Math.floor(new Date().valueOf() / 1000),
            booking_end: Math.floor(endOfDay(new Date()).valueOf() / 1000),
            asset_id: user.email,
            title: 'Checked-in Onsite',
            description:
                this._org.building.display_name || this._org.building.name,
            zones: [this._org.building.id],
            booking_type: 'staff',
        } as any).toPromise();
        await checkinBooking(result.id, true).toPromise();
        this._events[user.email] = result;
        this._onsite[user.email] = true;
    }

    public async checkout(user: StaffUser) {
        const event = this._events[user.email];
        if (event) {
            const result = await saveBooking({
                ...event.toJSON(),
                booking_end: Math.floor(new Date().valueOf() / 1000),
            } as any).toPromise();
            await checkinBooking(result.id, false).toPromise();
            this._events[user.email] = result;
            this._onsite[user.email] = false;
        }
    }

    private async loadUsers() {
        const user_list = await searchStaff('').toPromise();
        user_list.sort((a, b) => a.name.localeCompare(b.name));
        this._users.next(user_list);
    }
}
