import {
    ChangeDetectionStrategy,
    Component,
    OnInit,
    inject,
    output,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import {
    CalendarEvent,
    DialogEvent,
    SettingsService,
    currentUser,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { EventFormService, queryEvents } from '@placeos/events';

export interface BookingModalData {
    event?: CalendarEvent;
}

@Component({
    selector: 'booking-modal',
    template: `
        <header>
            <h2>{{ model()?.id ? 'Edit' : 'New' }} Booking</h2>
            <div class="w-0 flex-1"></div>
            <button icon mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="relative p-4" [class.overflow-auto]="!loading()">
            <event-form
                [class.pointer-events-none]="loading()"
                [form]="form"
            ></event-form>
            @if (loading()) {
                <div
                    loading
                    class="absolute inset-0 flex flex-col items-center justify-center"
                >
                    <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                    <p>{{ loading() }}</p>
                </div>
            }
        </main>
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-center border-t p-2"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    standalone: false,
})
export class BookingModalComponent implements OnInit {
    private _data = inject<BookingModalData>(MAT_DIALOG_DATA);
    private _service = inject(EventFormService);
    private _dialog_ref =
        inject<MatDialogRef<BookingModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);

    public readonly event = output<DialogEvent>();
    /** Signal for the loading state of the form */
    public readonly loading = this._service.loading;

    public get form() {
        return this._service.form;
    }

    public get model() {
        return this._service.model;
    }

    public async ngOnInit() {
        let event = this._data.event;
        if (event?.creator !== event?.mailbox) {
            event =
                (
                    await queryEvents({
                        period_start: event.event_start,
                        period_end: event.event_end,
                        ical_uid: event.ical_uid,
                    })
                ).find((_) => _.ical_uid === (event as any).ical_uid) || event;
        }
        if (event && !event.id) {
            (event as any).all_day =
                this._settings.get('app.events.all_day_default') ??
                event.all_day;
        }
        this._service.newForm(event);
        this.model.update((m) => ({
            ...m,
            organiser: currentUser(),
            host: currentUser().email,
        }));
    }

    public async save() {
        if (!this.model().host) {
            this.model.update((m) => ({
                ...m,
                host: currentUser().email,
            }));
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
