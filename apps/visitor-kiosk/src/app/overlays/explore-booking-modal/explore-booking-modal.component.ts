import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup } from '@angular/forms';
import { format } from 'date-fns-tz';

import { BaseClass, DialogEvent, notifyError, notifySuccess } from '@user-interfaces/common';
import { CalendarEvent, EventsService } from '@user-interfaces/events';
import { Space } from '@user-interfaces/spaces';
import { Building, OrganisationService } from '@user-interfaces/organisation';

import * as dayjs from 'dayjs';

export interface ExploreBookingModalData {
    space: Space;
}

@Component({
    selector: 'a-explore-booking-modal',
    templateUrl: './explore-booking-modal.component.html',
    styleUrls: ['./explore-booking-modal.component.scss'],
})
export class ExploreBookingModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** New booking to be saved */
    public booking: CalendarEvent;
    /** Form fields for the new booking */
    public form: FormGroup;
    /** Whether booking request is being made */
    public loading: boolean;

    /** Active space being booked */
    public get space(): Space {
        return this._data.space;
    }

    public get building(): Building {
        const level = this.space.level;
        const building = this._org.buildings.find((bld) => bld.id === level.parent_id);
        return building;
    }

    public get is_different_tz(): boolean {
        return this.time_string !== this.building_time;
    }

    public get date_string(): string {
        const date = dayjs(this.booking.date);
        return date.format('DD MMM YYYY');
    }

    public get building_time() {
        const date = dayjs(this.booking.date);
        const building = this.building;
        if (!building || !building.timezone) {
            return;
        }
        return format(date.toDate(), 'h:mm a', { timeZone: building.timezone }).toUpperCase();
    }

    public get time_string(): string {
        const date = dayjs(this.booking.date);
        return date.format('h:mmA');
    }

    public get upcoming_booking(): string {
        // if (this.space.next) {
        //     const date = dayjs(this.space.next.date);
        //     return `Next booking at ${date.format('h:mm A')}`;
        // }
        return `No more booking today`;
    }

    public get equipment(): string[] {
        const building = this.building;
        if (!building) {
            return;
        }
        return building.extras
            .filter((i) => this.space.features.indexOf(`${i.id}`) >= 0)
            .map((i) => i.name);
    }

    constructor(
        private _dialog_ref: MatDialogRef<ExploreBookingModalComponent>,
        @Inject(MAT_DIALOG_DATA) private _data: ExploreBookingModalData,
        private _org: OrganisationService,
        private _events: EventsService
    ) {
        super();
    }

    public ngOnInit(): void {
        const time = dayjs();
        this.booking = new CalendarEvent({
            title: 'Meeting',
            system: this.space as any,
            date: time.minute(Math.ceil(time.minute() / 5) * 5).valueOf(),
            duration: 30,
        });
        // this.form = generateBookingForm(this.booking, null, [
        //     'title',
        //     'organiser',
        //     'duration'
        // ] as AvailableBookingFields[]);
    }

    public book() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.loading = true;
            this._events.save(this.booking).then(
                () => {
                    notifySuccess(`Sucessfully made booking`);
                    this._dialog_ref.close();
                },
                (err) => {
                    notifyError(`Error creating booking. Error: ${err}`);
                    this.loading = false;
                }
            );
        }
    }
}
