import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { searchStaff } from '@placeos/users';

import { checkinBooking, queryBookings, saveBooking } from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    MINUTES,
    OrganisationService,
    StaffUser,
    timePeriodsIntersect,
} from '@placeos/common';
import { endOfDay, getUnixTime, startOfDay } from 'date-fns';

export interface StaffFilters {
    date?: number;
    zones?: string[];
    only_onsite?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class StaffStateService extends AsyncHandler {
    private _org = inject(OrganisationService);

    private _onsite: Record<string, boolean> = {};
    private _events: Record<string, Booking> = {};
    private readonly _users = signal<StaffUser[]>([]);
    private readonly _poll = signal(0);

    public readonly loading = signal<boolean>(false);
    public readonly filters = signal<StaffFilters>({});
    public readonly search = signal<string>('');
    public readonly user_events = signal<Record<string, boolean>>({});

    public readonly filtered_users = computed(() => {
        const filter = this.search();
        const users = this._users();
        const options = this.filters();
        return users.filter(
            (i) =>
                (!filter ||
                    i.name.toLowerCase().includes(filter) ||
                    i.email.toLowerCase().includes(filter)) &&
                (!options.only_onsite || this._onsite[i.email]),
        );
    });

    constructor() {
        super();
        this.loadUsers();
        effect(() => {
            this._org.active_building();
            this._poll();
            this.timeout('load-events', () => this._loadEvents(), 300);
        });
    }

    public setFilters(filters: StaffFilters) {
        this.filters.set({ ...this.filters(), ...filters });
    }

    public setSearchString(search: string) {
        this.search.set(search);
    }

    public startPolling(delay: number = 3 * MINUTES) {
        const poll_delay = Math.max(delay, 3 * MINUTES);
        this._poll.update((value) => value + 1);
        this.interval(
            'poll',
            () => this._poll.update((value) => value + 1),
            poll_delay,
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
        } as any);
        await checkinBooking(result.id, true);
        this._events[user.email] = result;
        this._onsite[user.email] = true;
    }

    public async checkout(user: StaffUser) {
        const event = this._events[user.email];
        if (event) {
            const result = await saveBooking({
                ...event.toJSON(),
                booking_end: Math.floor(new Date().valueOf() / 1000),
            } as any);
            await checkinBooking(result.id, false);
            this._events[user.email] = result;
            this._onsite[user.email] = false;
        }
    }

    private async _loadEvents() {
        this.loading.set(true);
        const bookings = await queryBookings({
            period_start: getUnixTime(startOfDay(Date.now())),
            period_end: getUnixTime(endOfDay(Date.now())),
            type: 'staff',
        });
        const checkin_map = {};
        const now = new Date().valueOf();
        for (const bkn of bookings) {
            if (
                timePeriodsIntersect(
                    now,
                    now,
                    bkn.date,
                    bkn.date + bkn.duration * 60 * 1000,
                )
            ) {
                checkin_map[bkn.asset_id] = bkn.checked_in;
                this._events[bkn.asset_id] = bkn;
            }
        }
        this._onsite = checkin_map;
        this.user_events.set(checkin_map);
        this.loading.set(false);
    }

    private async loadUsers() {
        const user_list = await searchStaff('');
        user_list.sort((a, b) => a.name.localeCompare(b.name));
        this._users.set(user_list);
    }
}
