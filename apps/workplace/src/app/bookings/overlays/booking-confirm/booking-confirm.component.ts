import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from '@angular/material/dialog';
import { formatDuration } from 'date-fns';

import { BaseClass, RoomConfiguration } from '@user-interfaces/common';
import { CalendarEvent, EventsService } from '@user-interfaces/events';
import { CalendarService } from '@user-interfaces/calendar';
import { Space, SpacesService } from '@user-interfaces/spaces';
import { OrganisationService } from '@user-interfaces/organisation';

import { ViewCateringModalComponent } from '../../../overlays/view-catering-modal/view-catering-modal.component';
import { ViewAttendeesModalComponent } from '../../../overlays/view-attendees-modal/view-attendees-modal.component';

import * as dayjs from 'dayjs';

@Component({
    selector: 'a-booking-confirm-modal',
    templateUrl: './booking-confirm.component.html',
    styleUrls: ['./booking-confirm.component.scss'],
})
export class BookingConfirmComponent extends BaseClass {
    /** Emitter for user actions on the modal */
    @Output() public event = new EventEmitter();
    /** Whether changes are being processed */
    public loading: boolean;
    /** Whether space availability is being checked */
    public checking_available: boolean;
    /** Whether to show all attendees */
    public show_attendees: boolean;
    /** Whether to show all attendees */
    public show_locations: boolean;

    /** Booking to confirm changes to */
    public get booking(): CalendarEvent {
        return this._data.booking;
    }

    /** Title of the displayed event */
    public get title(): string {
        return this.booking.title;
    }

    /** Display string of when the event will occur */
    public get when(): string {
        const date = dayjs(this.booking.date);
        const end = date.add(this.booking.duration || 60, 'm');
        if (this.booking.all_day || this.booking.duration > 23 * 60) {
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
        return formatDuration({ minutes: this.booking.duration || 60 });
    }

    public get configuration(): RoomConfiguration | null {
        if (!this.booking) {
            return null;
        }
        const configs = this._org.available_room_configs;
        const config = '';
        return !!config ? configs.find((f) => f.id === config) : null;
    }

    public get catering_items(): any[] {
        const order = this.booking.catering[0];
        return order ? [...order.items] : [];
    }
    public get catering_items_total(): number {
        return this.catering_items.reduce((amount, item) => amount + item.amount, 0);
    }
    public get catering_notes(): string {
        // return this.booking.catering_notes;
        return '';
    }

    constructor(
        private _dialog: MatDialogRef<BookingConfirmComponent>,
        @Inject(MAT_DIALOG_DATA)
        private _data: { old_booking: CalendarEvent; booking: CalendarEvent },
        private _calendar: CalendarService,
        private _events: EventsService,
        private _spaces: SpacesService,
        private _org: OrganisationService,
        private _dialogService: MatDialog
    ) {
        super();
    }

    /**
     * Save booking changes
     */
    public async saveChanges() {
        this.loading = true;
        this.checking_available = true;
        try {
            await this.checkSpaceAvailability();
            this.checking_available = false;

            try {
                await this._events.save(this.booking).catch((e) => {
                    throw new Error(e);
                });
                this.event.emit({ type: 'success' });
                this._dialog.close();
                // this._service.notifySuccess(
                //     `Successfully ${this.booking.id ? 'updated' : 'created'} booking`
                // );
            } catch (saveErr) {
                // this._service.notifyError(
                //     `Error ${this.booking.id ? 'updating' : 'creating'} booking: ${saveErr}`
                // );
            }
        } catch (err) {
            this.checking_available = false;
            // this._service.notifyError(`Error: ${err}`);
        }
        this.loading = false;
    }

    /**
     * Check whether the selected spaces are available for the selected time period
     */
    public async checkSpaceAvailability(): Promise<boolean> {
        const spaces: Space[] = this._spaces.filter((space) =>
            this.booking.resources.some((r) => r.email === space.email)
        );
        if (
            (this.booking.id && this._data.old_booking.date === this.booking.date) ||
            this._data.old_booking.duration === this.booking.duration ||
            (spaces && spaces.length <= 0)
        ) {
            console.log('No check needed');
            return true;
        }
        const start = Math.floor(this.booking.date / 1000);
        const end = dayjs(this.booking.date).add(this.booking.duration, 'm').unix();
        const available_spaces = await this._calendar.availability(
            {
                system_ids: spaces.map((space) => space.id).join(','),
                period_start: start,
                period_end: end,
            },
            this.booking.all_day
        );

        if (available_spaces.length < 1) {
            throw new Error(`There are no spaces available for the selected time period.`);
        }

        available_spaces.forEach((available) => {
            if (!spaces.find((space) => space.email === available.email)) {
                throw new Error(`${available.name} is not available for the selected time period.`);
            }
        });
        return true;
    }

    public showCatering() {
        this._dialogService.open(ViewCateringModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { catering: this.catering_items, catering_note: this.catering_notes },
        });
    }

    public showAttendees() {
        this._dialogService.open(ViewAttendeesModalComponent, {
            width: '32em',
            maxWidth: '95vw',
            maxHeight: '95vh',
            data: { attendees: this.booking.attendees },
        });
    }
}
