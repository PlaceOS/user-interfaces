import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
    DialogEvent,
    SettingsService,
    currentUser,
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
            <div class="w-0 flex-1"></div>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="relative p-4" [class.overflow-auto]="!(loading | async)">
            <event-form
                [class.pointer-events-none]="loading | async"
                [form]="form"
            ></event-form>
            @if (loading | async) {
                <div
                    loading
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                    <p>{{ loading | async }}</p>
                </div>
            }
        </main>
        @if (!(loading | async)) {
            <footer
                class="flex items-center justify-center border-t border-base-200 p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    Save
                </button>
            </footer>
        }
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
    standalone: false,
})
export class BookingModalComponent implements OnInit {
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Observable for the loading state of the form */
    public readonly loading = this._service.loading$;

    public get form() {
        return this._service.form;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: BookingModalData,
        private _service: EventFormService,
        private _dialog_ref: MatDialogRef<BookingModalComponent>,
        private _settings: SettingsService,
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
        this.form.patchValue({
            organiser: currentUser(),
            host: currentUser().email,
        });
    }

    public async save() {
        if (!this.form.value.host) {
            this.form.patchValue({
                host: currentUser().email,
            });
        }
        const event = await this._service.postForm().catch((_) => {
            notifyError(_);
            throw _;
        });
        this.event.emit({ reason: 'done', metadata: event });
        notifySuccess('Successfully created booking');
        this._dialog_ref.close();
    }
}
