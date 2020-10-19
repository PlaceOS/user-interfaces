import { Component, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';

import { Space } from '@user-interfaces/spaces';
import { BaseClass, DialogEvent } from '@user-interfaces/common';
import { CalendarEvent, EventsService, generateEventForm } from '@user-interfaces/events';
import { CalendarService } from '@user-interfaces/calendar';
import { StaffService } from '@user-interfaces/users';

export interface BookingModalData {
    space: Space;
    date: number;
}

@Component({
    selector: 'a-booking-modal',
    templateUrl: './booking-modal.component.html',
    styleUrls: ['./booking-modal.component.scss'],
})
export class BookingModalComponent extends BaseClass implements OnInit {
    /** Emitter for user actions on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** New Booking data */
    public booking: CalendarEvent;
    /** Form fields for booking */
    public form: FormGroup;
    /** Display string for the current loading state */
    public loading: string;
    /** Inditcation on which booking modal form to show */
    public first_form: boolean;
    /** Display string for when room is available */
    public available_until: string;

    /** Selected space */
    public get space(): Space {
        return this._data.space;
    }

    constructor(
        private _calendar: CalendarService,
        private _events: EventsService,
        private _staff: StaffService,
        private _dialog_ref: MatDialogRef<BookingModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: BookingModalData
    ) {
        super();
    }

    public ngOnInit(): void {
        this.booking = new CalendarEvent({
            date: this._data.date,
            system: { id: this._data.space.id },
            attendees: [
                {
                    id: this._staff.current.id,
                    email: this._staff.current.email,
                },
            ],
        } as any);
        this.form = generateEventForm(this.booking);
        this.first_form = true;
    }

    public next() {
        this.first_form = false;
    }

    public cancel() {
        this._dialog_ref.close();
    }

    public async book() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this._dialog_ref.disableClose = true;
            this.loading = 'Checking space availability...';
            const available = await this.checkSpaceAvailability().catch(() => {
                // this._service.notifyError('The space is not available for this period.');
            });
            this.loading = '';
            if (!available) {
                this._dialog_ref.disableClose = false;
                return;
            }
            this.loading = 'Processing booking request...';
            try {
                const booking = new CalendarEvent({ ...this.booking, ...this.form.value });
                await this._events.save(booking);
                this.event.emit({ reason: 'done' });
                this._dialog_ref.close();
                // this._service.notifySuccess(
                //     `Successfully ${this.booking.id ? 'updated' : 'created'} booking`
                // );
            } catch (saveErr) {
                // this._service.notifyError('Booking could not be created.');
                this._dialog_ref.disableClose = false;
            }
        }
        this.loading = '';
    }

    /**
     * Check whether the selected spaces are available for the selected time period
     */
    public async checkSpaceAvailability(): Promise<boolean> {
        const event = new CalendarEvent({ ...this.booking, ...this.form.value });
        const available_spaces = await this._calendar.availability({
            system_ids: event.system.id,
            period_start: Math.floor(event.date / 1000),
            period_end: Math.floor((event.date + event.duration * 60 * 1000) / 1000),
        });

        if (available_spaces.length < 1) {
            throw new Error(`The space is not available for the selected time period.`);
        }
        return true;
    }
}
