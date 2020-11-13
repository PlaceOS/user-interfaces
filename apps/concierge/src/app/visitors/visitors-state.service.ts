import { Injectable } from '@angular/core';
import {
    BaseClass,
    notifyError,
    notifySuccess,
    unique,
} from '@user-interfaces/common';
import { CalendarEvent, EventsService } from '@user-interfaces/events';
import { User } from '@user-interfaces/users';
import { endOfDay, startOfDay } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
}

@Injectable({
    providedIn: 'root',
})
export class VisitorsStateService extends BaseClass {
    private _filters = new BehaviorSubject<VisitorFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly events = combineLatest([this._filters]).pipe(
        debounceTime(500),
        switchMap((details) => {
            this._loading.next(true);
            const [filters] = details;
            const date = filters.date ? new Date(filters.date) : new Date();
            return this._events.query({
                period_start: Math.floor(startOfDay(date).valueOf() / 1000),
                period_end: Math.floor(endOfDay(date).valueOf() / 1000),
                zone_ids: (filters.zones || []).join(','),
            });
        }),
        map((list) => {
            this._loading.next(false);
            return list.filter(
                (event) => event.has_visitors && event.attendees.length > 1
            );
        }),
        shareReplay()
    );

    public readonly filtered_events = combineLatest([
        this._search,
        this.events,
    ]).pipe(
        map((details) => {
            const [search, events] = details;
            const filter = search.toLowerCase();
            return events.filter((event) =>
                event.attendees.find(
                    (user) =>
                        user.name.toLowerCase().includes(filter) ||
                        user.email.toLowerCase().includes(filter)
                )
            );
        })
    );

    public get search() {
        return this._search.getValue();
    }

    constructor(private _events: EventsService) {
        super();
    }

    public setFilters(filters: VisitorFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval(
            'poll',
            () => this.setFilters(this._filters.getValue()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkGuestIn(event: CalendarEvent, user: User) {
        const new_user = await this._events
            .checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: true,
            })
            .catch((e) => {
                notifyError(
                    `Error checking in ${user.name} for ${event.organiser.name}'s meeting`
                );
                throw e;
            });
        notifySuccess(
            `Successfully checked in ${user.name} for ${event.organiser.name}'s meeting`
        );
        const new_attendees = unique([new_user, ...event.attendees], 'email');
        new_attendees.sort((a, b) =>
            a.organizer ? -1 : a.email.localeCompare(b.email)
        );
        return new CalendarEvent({
            ...event,
            attendees: new_attendees,
        });
    }

    public async checkGuestOut(event: CalendarEvent, user: User) {
        const new_user = await this._events
            .checkInGuest(event.id, user.id, {
                system_id: event.system.id,
                state: false,
            })
            .catch((e) => {
                notifyError(
                    `Error checking out ${user.name} from ${event.organiser.name}'s meeting`
                );
                throw e;
            });
        notifySuccess(
            `Successfully checked out ${user.name} from ${event.organiser.name}'s meeting`
        );
        const new_attendees = unique([new_user, ...event.attendees], 'email');
        new_attendees.sort((a, b) =>
            a.organizer ? -1 : a.email.localeCompare(b.email)
        );
        return new CalendarEvent({
            ...event,
            attendees: new_attendees,
        });
    }

    public async checkAllGuestsIn(event: CalendarEvent) {
        const guests = event.attendees.filter(
            (user) => user.is_external && !user.checked_in
        );
        if (guests.length <= 0) throw new Error('No Guests to checkin');
        const attendees = await Promise.all(
            guests.map((user) =>
                this._events.checkInGuest(event.id, user.id, {
                    system_id: event.system.id,
                    state: true,
                })
            )
        ).catch((e) => {
            notifyError(
                `Error checking in all guests for ${event.organiser.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked in all guests for ${event.organiser.name}'s meeting`
        );
        const new_attendees = unique(
            [...attendees, ...event.attendees],
            'email'
        );
        new_attendees.sort((a, b) =>
            a.organizer ? -1 : a.email.localeCompare(b.email)
        );
        return new CalendarEvent({
            ...event,
            attendees: new_attendees,
        });
    }

    public async checkAllGuestsOut(event: CalendarEvent) {
        const guests = event.attendees.filter(
            (user) => user.is_external && user.checked_in && !user.organizer
        );
        if (guests.length <= 0) throw new Error('No Guests to checkout');
        const attendees = await Promise.all(
            guests.map((user) =>
                this._events.checkInGuest(event.id, user.id, {
                    system_id: event.system.id,
                    state: false,
                })
            )
        ).catch((e) => {
            notifyError(
                `Error checking out all guests from ${event.organiser.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked out all guests from ${event.organiser.name}'s meeting`
        );
        const new_attendees = unique(
            [...attendees, ...event.attendees],
            'email'
        );
        new_attendees.sort((a, b) =>
            a.organizer ? -1 : a.email.localeCompare(b.email)
        );
        return new CalendarEvent({
            ...event,
            attendees: new_attendees,
        });
    }
}
