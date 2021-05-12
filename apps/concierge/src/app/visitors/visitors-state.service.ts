import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, shareReplay, switchMap } from 'rxjs/operators';
import {
    endOfDay,
    endOfWeek,
    startOfDay,
    startOfWeek,
    getUnixTime,
} from 'date-fns';

import { BaseClass, notifyError, notifySuccess, unique } from '@placeos/common';
import { CalendarEvent, checkinEventGuest, queryEvents } from '@placeos/events';
import { User } from '@placeos/users';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
    all_bookings?: boolean;
    show_week?: boolean;
}

@Injectable({
    providedIn: 'root',
})
export class VisitorsStateService extends BaseClass {
    private _poll = new BehaviorSubject<number>(0);

    private _filters = new BehaviorSubject<VisitorFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);

    public readonly loading = this._loading.asObservable();

    public readonly filters = this._filters.asObservable();

    public readonly events = combineLatest([this._filters, this._poll]).pipe(
        debounceTime(500),
        switchMap(([filters]) => {
            console.log('Filters:', filters);
            this._loading.next(true);
            const date = filters.date ? new Date(filters.date) : new Date();
            const start = filters.show_week
                ? startOfWeek(date)
                : startOfDay(date);
            const end = filters.show_week ? endOfWeek(date) : endOfDay(date);
            return queryEvents({
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                zone_ids: (filters.zones || []).join(','),
            });
        }),
        map((list) => {
            this._loading.next(false);
            return this._filters.getValue().all_bookings
                ? list
                : list.filter(
                      (event) =>
                          event.guests.length && event.attendees.length > 1
                  );
        }),
        shareReplay(1)
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

    constructor() {
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
            () => this._poll.next(new Date().valueOf()),
            delay
        );
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkGuestIn(event: CalendarEvent, user: User) {
        const new_user = checkinEventGuest(event.id, user.id, true, {
            system_id: event.system?.id || event.resources[0]?.id,
        })
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error checking in ${user.name} for ${event.organiser.name}'s meeting`
                );
                throw e;
            });
        notifySuccess(
            `Successfully checked in ${user.name} for ${event.organiser.name}'s meeting`
        );
        const new_attendees: User[] = unique(
            [new_user, ...event.attendees],
            'email'
        ) as any;
        new_attendees.sort((a, b) =>
            a.organizer ? -1 : a.email.localeCompare(b.email)
        );
        return new CalendarEvent({
            ...event,
            attendees: new_attendees,
        });
    }

    public async checkGuestOut(event: CalendarEvent, user: User) {
        const new_user = await checkinEventGuest(event.id, user.id, false, {
            system_id: event.system?.id || event.resources[0]?.id,
        })
            .toPromise()
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
                checkinEventGuest(event.id, user.id, true, {
                    system_id: event.system?.id || event.resources[0]?.id,
                }).toPromise()
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
                checkinEventGuest(event.id, user.id, false, {
                    system_id: event.system?.id || event.resources[0]?.id,
                }).toPromise()
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
