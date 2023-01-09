import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, of, zip } from 'rxjs';
import {
    catchError,
    debounceTime,
    map,
    shareReplay,
    switchMap,
    take,
    tap,
} from 'rxjs/operators';
import { startOfDay, getUnixTime, addDays, format } from 'date-fns';

import {
    BaseClass,
    downloadFile,
    flatten,
    jsonToCsv,
    notifyError,
    notifySuccess,
    openConfirmModal,
    unique,
} from '@placeos/common';
import {
    CalendarEvent,
    checkinEventGuest,
    newCalendarEventFromBooking,
    queryEvents,
} from '@placeos/events';
import { GuestUser, queryGuests, updateGuest, User } from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';
import { checkinBookingAttendee, queryBookings } from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
    all_bookings?: boolean;
    period?: number;
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

    public readonly guests = combineLatest([this._filters, this._poll]).pipe(
        debounceTime(150),
        switchMap(([filters]) => {
            this._loading.next(true);
            const date = filters.date ? new Date(filters.date) : new Date();
            const start = startOfDay(date);
            const end = addDays(start, filters.period || 1);
            return queryGuests({
                period_start: getUnixTime(start),
                period_end: getUnixTime(end),
                zone_ids: (filters.zones || []).join(','),
            });
        }),
        tap(() => this._loading.next(false)),
        shareReplay(1)
    );

    public readonly events = combineLatest([this._filters, this._poll]).pipe(
        debounceTime(150),
        switchMap(([filters]) => {
            this._loading.next(true);
            const date = filters.date ? new Date(filters.date) : new Date();
            const start = startOfDay(date);
            const end = addDays(start, filters.period || 1);
            return zip(
                queryEvents({
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zone_ids: (filters.zones || []).join(','),
                }).pipe(catchError((_) => of([]))),
                queryBookings({
                    type: 'visitor',
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zones: this._org.building?.id,
                }).pipe(
                    map((_) => _.map((i) => newCalendarEventFromBooking(i))),
                    catchError((_) => of([]))
                ),
                queryBookings({
                    type: 'room',
                    period_start: getUnixTime(start),
                    period_end: getUnixTime(end),
                    zones: (filters.zones || []).join(','),
                }).pipe(
                    map((_) => _.map((i) => newCalendarEventFromBooking(i))),
                    catchError((_) => of([]))
                )
            );
        }),
        map(([e_list, v_list, r_list]) => {
            const list = [...e_list, ...v_list, ...r_list];
            this._loading.next(false);
            return this._filters.getValue().all_bookings
                ? list
                : list.filter(
                      (event) =>
                          event?.guests?.length && event?.attendees?.length > 1
                  );
        }),
        shareReplay(1)
    );

    public readonly filtered_events = combineLatest([
        this._search,
        this.events,
    ]).pipe(
        map(([search, events]) => {
            const filter = search.toLowerCase();
            return events.filter((event) =>
                event.attendees.find(
                    (user) =>
                        user.name?.toLowerCase().includes(filter) ||
                        user.email?.toLowerCase().includes(filter)
                )
            );
        })
    );

    public readonly filtered_guests = combineLatest([
        this._search,
        this.filtered_events,
        this.guests,
    ]).pipe(
        map(([search, events, guest_list]) => {
            const filter = search.toLowerCase();
            return flatten(
                events.map((event) => {
                    const guests = event.attendees.filter(
                        (user) =>
                            user.is_external &&
                            (user.name?.toLowerCase().includes(filter) ||
                                user.email?.toLowerCase().includes(filter))
                    );
                    return guests.map((_) => {
                        const g: any =
                            guest_list.find((g) => g.email === _.email) || {};
                        return new GuestUser({
                            ..._,
                            ...g,
                            extension_data: {
                                ..._.extension_data,
                                ...g.extension_data,
                                date: event.date,
                                host:
                                    event.organiser?.name ||
                                    event.organiser?.email ||
                                    event.host,
                            },
                        });
                    });
                })
            );
        })
    );

    public get search() {
        return this._search.getValue();
    }

    constructor(private _dialog: MatDialog, private _org: OrganisationService) {
        super();
    }

    public setFilters(filters: VisitorFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval('poll', () => this._poll.next(Date.now()), delay);
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkGuestIn(event: CalendarEvent, user: User) {
        const checkin_fn = this._checkinCall(event, user.email, true);
        const new_user = await checkin_fn.toPromise().catch((e) => {
            notifyError(
                `Error checking in ${user.name} for ${event.organiser?.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked in ${user.name} for ${event.organiser?.name}'s meeting`
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

    public async setExt<T = any>(guest: GuestUser, field: string, value: T) {
        const extension_data = { ...guest.extension_data };
        extension_data[field] = value;
        await updateGuest(guest.id, { ...guest, extension_data }).toPromise();
    }

    public async approveVisitor(guest: GuestUser) {
        const details = await openConfirmModal(
            {
                title: 'Approve Visitor',
                content: `Approve attendance of ${guest.name} to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await updateGuest(guest.id, {
            ...guest,
            extension_data: { ...guest.extension_data, status: 'approved' },
        }).toPromise();
        details.close();
    }

    public async declineVisitor(guest: GuestUser) {
        const details = await openConfirmModal(
            {
                title: 'Decline Visitor',
                content: `Decline attendance of ${guest.name} to their meeting?`,
                icon: { content: 'event_available' },
            },
            this._dialog
        );
        if (details.reason !== 'done') return details.close();
        details.loading('Updating guest details');
        await updateGuest(guest.id, {
            ...guest,
            extension_data: { ...guest.extension_data, status: 'declined' },
        }).toPromise();
        details.close();
    }

    public async checkGuestOut(event: CalendarEvent, user: User) {
        const new_user = await this._checkinCall(event, user.email, false)
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error checking out ${user.name} from ${event.organiser?.name}'s meeting`
                );
                throw e;
            });
        notifySuccess(
            `Successfully checked out ${user.name} from ${event.organiser?.name}'s meeting`
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
                this._checkinCall(event, user.email, true).toPromise()
            )
        ).catch((e) => {
            notifyError(
                `Error checking in all guests for ${event.organiser?.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked in all guests for ${event.organiser?.name}'s meeting`
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
                this._checkinCall(event, user.email, false).toPromise()
            )
        ).catch((e) => {
            notifyError(
                `Error checking out all guests from ${event.organiser?.name}'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked out all guests from ${event.organiser?.name}'s meeting`
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

    private _checkinCall(
        event: CalendarEvent,
        email: string,
        state: boolean = true
    ) {
        return event.from_bookings
            ? checkinBookingAttendee(event.id, email, state)
            : checkinEventGuest(event.id, email, state, {
                  system_id: event.system?.id || event.resources[0]?.id,
              });
    }

    public async downloadVisitorsList() {
        const guests: GuestUser[] = await this.filtered_guests
            .pipe(take(1))
            .toPromise();
        if (!guests.length) return;
        const { date } = this._filters.getValue();
        const list = guests.map((_) => ({
            Name: _.name,
            Email: _.email,
            'Checked In': _.checked_in,
            Host: _.extension_data?.host || '',
            Status: _.status,
            Date: format(_.extension_data?.date, 'dd MMM h:mm a'),
        }));
        const data = jsonToCsv(list);
        downloadFile(
            `visitor-list-${format(date || Date.now(), 'MMM-dd')}.csv`,
            data
        );
    }
}
