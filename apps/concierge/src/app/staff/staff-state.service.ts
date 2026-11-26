import { computed, effect, inject, Injectable, signal } from '@angular/core';
import { searchStaff } from '@placeos/users';

import {
    checkinBooking,
    queryBookingsOrThrow,
    saveBooking,
} from '@placeos/bookings';
import {
    AsyncHandler,
    Booking,
    i18n,
    MINUTES,
    notifyError,
    OrganisationService,
    StaffUser,
    timePeriodsIntersect,
    unique,
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

    private _events: Record<string, Booking> = {};
    /** Set after a failed check-in load; one notice per run of failures. */
    private _events_failed = false;
    private readonly _users = signal<StaffUser[]>([]);
    /** Search string of the loaded directory list */
    private readonly _users_query = signal('');
    /** First directory page, loaded with an empty search */
    private readonly _directory = signal<StaffUser[]>([]);
    private readonly _poll = signal(0);
    /** Cancels the directory load that is in progress. */
    private _users_abort?: AbortController;

    public readonly loading = signal<boolean>(false);
    /** True while the staff directory is loading. */
    public readonly users_loading = signal<boolean>(false);
    /** True when the last staff directory load failed. */
    public readonly users_error = signal<boolean>(false);
    public readonly filters = signal<StaffFilters>({});
    public readonly search = signal<string>('');
    /** Check-in state of each staff member, keyed by email */
    public readonly user_events = signal<Record<string, boolean>>({});

    public readonly filtered_users = computed(() => {
        const search = this.search();
        const filter = search.toLowerCase();
        const matches = (list: StaffUser[]) =>
            !filter
                ? list
                : list.filter(
                      (i) =>
                          i.name.toLowerCase().includes(filter) ||
                          i.email.toLowerCase().includes(filter),
                  );
        // Server results can miss part-word matches, so add the matches from
        // the first page. Before the results arrive, filter the old list.
        const users =
            search === this._users_query()
                ? unique(
                      [...this._users(), ...matches(this._directory())],
                      'email',
                  ).sort((a, b) => a.name.localeCompare(b.name))
                : matches(this._users());
        const options = this.filters();
        const onsite = this.user_events();
        return users.filter((i) => !options.only_onsite || onsite[i.email]);
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

    /** Filters the loaded list now, then searches the directory after a pause. */
    public setSearchString(search: string) {
        if (search === this.search()) return;
        this.search.set(search);
        // A load for the old search must not replace the list for this one
        this._users_abort?.abort();
        this.timeout('search', () => this.loadUsers(), 300);
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
        });
        await checkinBooking(result.id, true);
        this._events[user.email] = result;
        this._setOnsite(user.email, true);
    }

    public async checkout(user: StaffUser) {
        const event = this._events[user.email];
        if (event) {
            const result = await saveBooking({
                ...event.toJSON(),
                booking_end: Math.floor(new Date().valueOf() / 1000),
            });
            await checkinBooking(result.id, false);
            this._events[user.email] = result;
            this._setOnsite(user.email, false);
        }
    }

    private _setOnsite(email: string, onsite: boolean) {
        this.user_events.update((map) => ({ ...map, [email]: onsite }));
    }

    private async _loadEvents() {
        this.loading.set(true);
        try {
            const bookings = await queryBookingsOrThrow({
                period_start: getUnixTime(startOfDay(Date.now())),
                period_end: getUnixTime(endOfDay(Date.now())),
                type: 'staff',
            });
            const checkin_map: Record<string, boolean> = {};
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
            this.user_events.set(checkin_map);
            this._events_failed = false;
        } catch (err) {
            console.error('Staff check-in load failed:', err);
            if (!this._events_failed) notifyError(i18n('COMMON.LOAD_ERROR'));
            this._events_failed = true;
        } finally {
            this.loading.set(false);
        }
    }

    /**
     * Searches the staff directory with the current search string. The
     * directory API returns one page, so the search runs on the server.
     * Call it again to retry after a failure. A new call cancels a load that
     * is in progress.
     */
    public async loadUsers() {
        this.clearTimeout('search');
        this._users_abort?.abort();
        const abort = new AbortController();
        this._users_abort = abort;
        this.users_loading.set(true);
        this.users_error.set(false);
        try {
            const query = this.search();
            const user_list = await searchStaff(query, {
                signal: abort.signal,
            });
            if (abort.signal.aborted) return;
            user_list.sort((a, b) => a.name.localeCompare(b.name));
            this._users.set(user_list);
            this._users_query.set(query);
            if (!query) this._directory.set(user_list);
        } catch (err) {
            if (abort.signal.aborted) return;
            console.error('Staff directory load failed:', err);
            this.users_error.set(true);
        } finally {
            if (this._users_abort === abort) this.users_loading.set(false);
        }
    }
}
