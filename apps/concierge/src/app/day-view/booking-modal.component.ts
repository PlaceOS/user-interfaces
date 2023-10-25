import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import {
    DialogEvent,
    SettingsService,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { CalendarEvent, EventFormService, queryEvents } from '@placeos/events';

export interface BookingModalData {
    event?: CalendarEvent;
}

@Component({
    selector: 'booking-modal',
    template: `
        <header>
            <h2>{{ form?.value.id ? 'Edit' : 'New' }} Booking</h2>
            <div class="flex-1 w-0"></div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="relative p-4" [class.overflow-auto]="!(loading | async)">
            <event-form
                [class.pointer-events-none]="loading | async"
                [form]="form"
            ></event-form>
            <div
                loading
                class="absolute inset-0 flex flex-col items-center justify-center"
                *ngIf="loading | async"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        </main>
        <footer
            *ngIf="!(loading | async)"
            class="flex justify-center items-center p-2 border-t border-base-200"
        >
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
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
    /** Observable for the loading state of the form */
    public readonly loading = this._service.loading;

    public get form() {
        return this._service.form;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: BookingModalData,
        private _service: EventFormService,
        private _dialog_ref: MatDialogRef<BookingModalComponent>,
        private _settings: SettingsService
    ) {}

    public async ngOnInit() {
        let event = this._data.event;
        if (event?.creator !== event?.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    }).toPromise()
                ).find((_) => _.ical_uid === (event as any).ical_uid) || event;
        }
        if (event && !event.id) {
            (event as any).all_day =
                this._settings.get('app.events.all_day_default') ??
                event.all_day;
        }
        this._service.newForm(event);
    }

    public async save() {
        const event = await this._service.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess('Successfully created booking');
        this._dialog_ref.close();
    }
}
