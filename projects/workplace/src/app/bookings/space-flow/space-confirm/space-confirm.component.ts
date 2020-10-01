import { Component, OnInit, Input, OnDestroy, SimpleChanges, OnChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

import { clearBookingFormData } from 'src/app/bookings/booking.utilities';
import { CalendarEvent } from 'src/app/events/event.class';
import { Space } from 'src/app/spaces/space.class';
import { User } from 'src/app/users/user.class';
import { StaffService } from 'src/app/users/staff.service';

import * as dayjs from 'dayjs';
import { formatDuration } from 'date-fns';

@Component({
    selector: 'booking-space-confirm',
    templateUrl: './space-confirm.component.html',
    styleUrls: ['./space-confirm.component.scss'],
})
export class SpaceConfirmComponent implements OnInit, OnDestroy, OnChanges {
    @Input() public form: FormGroup;
    @Input() public booking: CalendarEvent;

    public event: CalendarEvent;

    constructor(private _users: StaffService, private _router: Router) {}

    public ngOnInit() {
        if (!this.showSummary) {
            this._router.navigate(['book', 'spaces']);
        }
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.booking || changes.form) {
            this.event = new CalendarEvent({ ...this.booking, ...this.form.value });
        }
    }

    public ngOnDestroy(): void {
        if (this.form) {
            this.form.reset();
        }
        clearBookingFormData();
    }

    public get showSummary(): boolean {
        return !!(this.booking && this.form && this.form.valid);
    }

    public get title(): string {
        return this.event.title || '';
    }

    /** Display string of when the event will occur */
    public get when(): string {
        if (!this.booking) {
            return 'Unable to determine.';
        }
        const date = dayjs(this.event.date);
        const end = date.add(this.event.duration, 'm');
        if (this.event.all_day || this.event.duration > 23 * 60) {
            return `${date.format('DD MMM YYYY')} - All Day`;
        } else {
            if (date.isSame(end, 'd')) {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format('h:mm A')}`;
            } else {
                return `${date.format('DD MMM YYYY, h:mm A')} - ${end.format(
                    'DD MMM YYYY, h:mm A'
                )}`;
            }
        }
    }

    /** Display string for the event's duration */
    public get duration(): string {
        return formatDuration({ minutes: this.event.duration || 60 });
    }

    /** List of spaces associated with the event */
    public get spaces(): Space[] {
        const spaces = this.event.resources;
        return spaces;
    }

    /** List of attendees associated with the event not including the host */
    public get attendees(): User[] {
        return this.event.attendees;
    }

    /** Host of the event */
    public get organiser(): string {
        return this.event.creator;
    }

    /** Details about the event */
    public get notes(): string {
        return this.event.body;
    }

    public get catering_items(): any[] {
        const order = this.event.catering[0];
        return order ? [...order.items] : [];
    }
    public get catering_items_total(): number {
        return this.catering_items.reduce((amount, item) => amount + item.amount, 0);
    }
    public get catering_notes(): string {
        // return this.booking.catering_notes;
        return '';
    }

    public newBooking() {
        this._router.navigate(['book', 'spaces']);
    }

    public myDay() {
        this._router.navigate(['schedule']);
    }
}
