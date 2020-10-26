import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { BookingsService } from '@user-interfaces/bookings';
import { BaseClass, toQueryString } from '@user-interfaces/common';

import * as dayjs from 'dayjs';

export interface BookingLike {
    /** ID of the item */
    id: string;
    /** Sorting weight of the item */
    order_id?: string;
    /** Type of item to render */
    type: 'date' | 'event' | 'empty' | 'desk';
    /** Date in UTC milliseconds */
    date: number;
    /** Current state of the booking */
    status?: 'confirmed' | 'tentative' | 'cancelled';
    [key: string]: any;
}

@Component({
    selector: 'schedule-event-item',
    templateUrl: './list-item.component.html',
    styleUrls: ['./list-item.component.scss'],
})
export class ScheduleEventListItemComponent extends BaseClass {
    /** Booking to display */
    @Input() public event: BookingLike;

    constructor(private _bookings: BookingsService, private _router: Router) {
        super();
    }

    public get isFuture(): boolean {
        return dayjs(this.event.date).isAfter(dayjs(), 'm');
    }

    public get status(): string {
        return this.event.status;
    }

    public get is_done(): boolean {
        return this.event.is_done;
    }

    /** Display location of the booking event */
    public get location(): string {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return 'No location';
        }
        return this.event.location;
    }

    /** Image name to display for the event */
    public get type_image(): string {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return 'block';
        }
        if (this.event.has_visitors) {
            return 'external';
        }
        return 'book_room';
    }

    public get time(): string {
        if (!this.event || this.event.type === 'date' || this.event.type === 'empty') {
            return '';
        }
        return this.event.all_day || this.event.duration > 23 * 60
            ? 'All Day'
            : dayjs(this.event.date).format('h:mm A');
    }

    public view() {
        const query = toQueryString({
            calendar: this.event.calendar,
            type: this.event.type,
        });
        const url = `/schedule/view/${this.event.id}?${query}`;
        this._router.navigateByUrl(url);
    }
}
