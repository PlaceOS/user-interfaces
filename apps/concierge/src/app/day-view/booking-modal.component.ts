import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CalendarService } from '@user-interfaces/calendar';
import {
    DialogEvent,
    notifyError,
    notifySuccess,
} from '@user-interfaces/common';
import {
    CalendarEvent,
    EventsService,
    generateEventForm,
} from '@user-interfaces/events';

export interface BookingModalData {
    event?: CalendarEvent;
}

@Component({
    selector: 'booking-modal',
    template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1 w-0"></div>
            <button mat-icon-button mat-dialog-close>
                <app-icon className="material-icons">close</app-icon>
            </button>
        </header>
        <main *ngIf="!loading; else load_state" class="overflow-auto p-4">
            <event-form [form]="form"></event-form>
        </main>
        <footer
            *ngIf="!loading"
            class="flex justify-center items-center p-2 border-t border-gray-200"
        >
            <button mat-button (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main class="h-64 flex flex-col items-center justify-center">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading }}</p>
            </main>
        </ng-template>
    `,
    styles: [
        `
            main {
                width: 32rem;
                max-height: 65vh;
                max-width: calc(100vw - 4rem);
            }
        `,
    ],
})
export class BookingModalComponent implements OnInit {
    @Output() public event = new EventEmitter<DialogEvent>();
    public form: FormGroup;
    public loading: string;

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: BookingModalData,
        private _calendar: CalendarService,
        private _event: EventsService,
        private _dialog_ref: MatDialogRef<BookingModalComponent>
    ) {}

    public ngOnInit() {
        this.form = generateEventForm(
            new CalendarEvent(this._data.event || {})
        );
        this.form.controls.host.setValue(null);
    }

    public async save() {
        this.form.markAllAsTouched();
        if (this.form.controls.organiser.value && !this.form.controls.host.value) {
            this.form.controls.host.setValue(this.form.controls.organiser.value.email);
        }
        if (!this.form.valid || !this.form.value.resources?.length) {
            const list = [];
            for (const key in this.form.controls) {
                if (this.form.controls[key].invalid) {
                    list.push(key);
                }
            }
            return notifyError(
                `Some form fields are not valid: [${list.join(', ')}]`
            );
        }
        const value = this.form.value;
        this.loading = 'Check space availability...';
        const spaces = await this._calendar
            .availability({
                period_start: Math.floor(new Date(value.date).valueOf() / 1000),
                period_end:
                    Math.floor(new Date(value.date).valueOf() / 1000) +
                    value.duration * 60,
                system_ids: value.resources.map((space) => space.id).join(','),
            })
            .catch((_) => []);
        if (spaces.length < value.resources.length) {
            this.loading = '';
            return notifyError(
                'Some of the selected spaces are not available for the selected time and duration'
            );
        }
        this.loading = 'Creating calendar event...';
        value.system = value.resources[0];
        const booking = await this._event
            .save(new CalendarEvent(value).toJSON(), { calendar: value.calendar })
            .catch((_) => null);
        this.loading = '';
        if (!booking) {
            return notifyError('Error creating booking.');
        }
        this.event.emit({ reason: 'done', metadata: booking });
        notifySuccess('Successfully created booking.');
        this._dialog_ref.close();
    }
}
