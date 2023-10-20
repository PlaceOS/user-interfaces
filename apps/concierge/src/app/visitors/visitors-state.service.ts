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
    AsyncHandler,
    SettingsService,
    currentUser,
    downloadFile,
    flatten,
    jsonToCsv,
    notifyError,
    notifySuccess,
    openConfirmModal,
    unique,
} from '@placeos/common';
import {
    checkinEventGuest,
    newCalendarEventFromBooking,
    queryEvents,
} from '@placeos/events';
import { CalendarEvent } from 'libs/events/src/lib/event.class';
import { GuestUser, queryGuests, updateGuest, User } from '@placeos/users';
import { MatDialog } from '@angular/material/dialog';
import {
    Booking,
    approveBooking,
    checkinBookingAttendee,
    queryBookings,
    rejectBooking,
} from '@placeos/bookings';
import { OrganisationService } from '@placeos/organisation';
import { SpacePipe } from '@placeos/spaces';

export interface VisitorFilters {
    date?: number;
    zones?: string[];
    all_bookings?: boolean;
    period?: number;
}

@Injectable({
    providedIn: 'root',
})
export class VisitorsStateService extends AsyncHandler {
    private _poll = new BehaviorSubject<number>(0);

    private _filters = new BehaviorSubject<VisitorFilters>({});

    private _search = new BehaviorSubject<string>('');

    private _loading = new BehaviorSubject<boolean>(false);
    private _space_pipe = new SpacePipe();

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
                zone_ids:
                    (filters.zones || []).join(',') || this._org.building.id,
            }).pipe(catchError((_) => of([])));
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
            return events
                .filter((event) =>
                    event.attendees.find(
                        (user) =>
                            user.name?.toLowerCase().includes(filter) ||
                            user.email?.toLowerCase().includes(filter)
                    )
                )
                .sort((a, b) => a.date - b.date);
        })
    );

    public readonly filtered_guests = combineLatest([
        this._search,
        this.guests,
    ]).pipe(
        map(([search, guest_list]) => {
            const filter = search.toLowerCase();
            const out = guest_list
                .filter(
                    (_) =>
                        _.name.toLowerCase().includes(filter) ||
                        _.email.toLowerCase().includes(filter)
                )
                .map((_) => {
                    const event: any = _.booking
                        ? new Booking(_.booking)
                        : new CalendarEvent(_.event || _.extension_data?.event);
                    return new GuestUser({
                        ..._,
                        extension_data: {
                            ..._.extension_data,
                            event_id:
                                event instanceof CalendarEvent ? event.id : '',
                            booking_id:
                                event instanceof Booking ? event.id : '',
                            date: event.date,
                            host:
                                event.organiser?.name ||
                                event.organiser?.email ||
                                event.user_name ||
                                event.user_email ||
                                event.host,
                            status:
                                event.status ||
                                (event.rejected
                                    ? 'declined'
                                    : event.approved
                                    ? 'approved'
                                    : 'pending') ||
                                _.status,
                        },
                    });
                })
                .sort((a, b) => a.extension_data.date - b.extension_data.date);
            return out;
        })
    );

    public get search() {
        return this._search.getValue();
    }

    public get time_format() {
        return this._settings.time_format;
    }

    constructor(
        private _dialog: MatDialog,
        private _org: OrganisationService,
        private _settings: SettingsService
    ) {
        super();
    }

    public setFilters(filters: VisitorFilters) {
        this._filters.next({ ...this._filters.getValue(), ...filters });
    }

    public setSearchString(search: string) {
        this._search.next(search);
    }

    public poll() {
        this._poll.next(Date.now());
    }

    public startPolling(delay: number = 30 * 1000) {
        this.interval('poll', () => this._poll.next(Date.now()), delay);
    }

    public stopPolling() {
        this.clearInterval('poll');
    }

    public async checkGuestIn(event: CalendarEvent, user: User) {
        const checkin_fn = this._checkinCall(event, user.email, true);
        const new_user = await checkin_fn.catch((e) => {
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
        this._poll.next(Date.now());
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
        const event = (guest as any).event || guest.extension_data.event;
        await (guest.extension_data.event_id || event?.id
            ? updateGuest(guest.id, {
                  ...guest,
                  extension_data: {
                      ...guest.extension_data,
                      status: 'approved',
                  },
              })
            : (approveBooking(guest.booking.id) as any)
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error approving visitor: ${e.message || e.error || e}`
                );
                details.close();
                throw e;
            });
        notifySuccess(`Successfully approved visitor`);
        this._poll.next(Date.now());
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
        const event = (guest as any).event || guest.extension_data.event;
        await (guest.extension_data.event_id || event?.id
            ? updateGuest(guest.id, {
                  ...guest,
                  extension_data: {
                      ...guest.extension_data,
                      status: 'declined',
                  },
              })
            : (rejectBooking(guest.booking.id) as any)
        )
            .toPromise()
            .catch((e) => {
                notifyError(
                    `Error declining visitor: ${e.message || e.error || e}`
                );
                details.close();
                throw e;
            });
        notifySuccess(`Successfully declining visitor`);
        this._poll.next(Date.now());
        details.close();
    }

    public async checkGuestOut(event: CalendarEvent, user: User) {
        const checkin_fn = this._checkinCall(event, user.email, false);
        const new_user = await checkin_fn.catch((e) => {
            notifyError(
                `Error checking in ${user.name} for ${
                    event.organiser?.name || (event as any).user_name
                }'s meeting`
            );
            throw e;
        });
        notifySuccess(
            `Successfully checked out ${user.name} from ${
                event.organiser?.name || (event as any).user_name
            }'s meeting`
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
            guests.map((user) => this._checkinCall(event, user.email, true))
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
            guests.map((user) => this._checkinCall(event, user.email, false))
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

    private async _checkinCall(
        data: CalendarEvent,
        email: string,
        state: boolean = true
    ) {
        if (data.from_bookings)
            return checkinBookingAttendee(data.id, email, state).toPromise();
        const event = new CalendarEvent(data);
        const space = await this._space_pipe.transform(
            event.resources[0]?.email
        );
        return checkinEventGuest(
            event.id,
            email,
            state,
            event.resources?.length
                ? {
                      calendar: event.host,
                      system_id: space.id,
                  }
                : {}
        ).toPromise();
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
            Date: format(_.extension_data?.date, 'dd MMM ' + this.time_format),
        }));
        const data = jsonToCsv(list);
        downloadFile(
            `visitor-list-${format(date || Date.now(), 'MMM-dd')}.csv`,
            data
        );
    }
}
