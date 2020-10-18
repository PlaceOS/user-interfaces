import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Booking } from '@user-interfaces/bookings';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';
import { Space } from '@user-interfaces/spaces';
import { StaffService } from '@user-interfaces/users';

import * as dayjs from 'dayjs';

@Component({
    selector: 'schedule-event-details',
    templateUrl: './event-details.component.html',
    styleUrls: ['./event-details.component.scss'],
})
export class EventDetailsComponent extends BaseClass {
    /** Booking to display */
    @Input() public item: CalendarEvent;
    /** Emitter for action on the display view */
    @Output() public event = new EventEmitter();
    /** Emitter for changes to the loading state */
    @Output() public loading = new EventEmitter();
    /** Toggle for activating checkin */
    public checked_in: boolean;
    /** Mapping of spaces to last checkin time */
    public last_start: { [id: string]: number } = {};
    /** Whether to show full locations list */
    public show_locations: boolean;
    /** Whether to show full attendee list */
    public show_attendees: boolean;

    /** List of spaces associated with the event */
    public get spaces(): Space[] {
        return this.item.resources;
    }

    /** Host of the event */
    public get organiser(): string {
        return this.item.creator || this._users.current.name;
    }

    /** Whether the user is allowed to edit the event */
    public get can_edit(): boolean {
        const organiser = this.organiser;
        const user = this._users.current;
        return this.item.creator === user.email && this.status !== 'done';
    }

    /** can the user cancel the meeting */
    public get can_cancel(): boolean {
        return this.can_edit && this.status === 'future';
    }

    /** Status of the event */
    public get status(): 'future' | 'upcoming' | 'done' | 'started' | 'in_progress' {
        if (this.item) {
            const now = dayjs();
            const date = dayjs(this.item.date);
            if (now.isBefore(date.subtract(15, 'm'), 'm')) {
                return 'future';
            } else if (now.isBefore(date, 'm')) {
                return 'upcoming';
            } else if (now.isBefore(date.add(15, 'm'), 'm')) {
                return 'started';
            } else if (now.isBefore(date.add(this.item.duration, 'm'), 'm')) {
                return 'in_progress';
            }
        }
        return 'done';
    }

    /** Whether the user has checkin to all the spaces in the event */
    public get is_checked_in(): boolean {
        return this.spaces.reduce(
            (a, v) => a && this.item.date <= (this.last_start[v.id] || 0),
            true
        );
    }

    /** Whether the spaces can be controlled */
    public get can_control(): boolean {
        return this.spaces.length > 0 && this.status !== 'future' && this.status !== 'done';
    }

    /** Whether the user is able to checkin to the event */
    public get can_checkin(): boolean {
        return this.spaces.length > 0 && (this.status === 'upcoming' || this.status === 'started');
    }

    constructor(
        private _users: StaffService,
        private _router: Router
    ) {
        super();
    }

    /**
     * Enter edit mode for the booking
     */
    public edit(): void {
        this.event.emit({ type: 'edit' });
    }

    /**
     * Checkin the current booking
     */
    public checkin(): void {
        this.checked_in = !this.checked_in;
    }

    /**
     * Store the booking data and navigate to the booking form
     */
    public duplicate(): void {
        if (localStorage) {
            const booking = new Booking({ ...this.item as any, id: '' });
            localStorage.setItem('STAFF.booking_form', JSON.stringify(booking));
        }
        this._router.navigate(['/book']);
    }

    /**
     * Cancel the booking
     */
    public cancelBooking(): void {
        this.event.emit({ type: 'cancel_booking' });
    }
}
