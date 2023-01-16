import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogEvent, notifyError, notifySuccess } from '@placeos/common';
import { CalendarEvent, EventFormService } from '@placeos/events';

export interface BookingModalData {
    event?: CalendarEvent;
}

@Component({
    selector: 'booking-modal',
    template: `
        <header>
            <h2>New Booking</h2>
            <div class="flex-1 w-0"></div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            *ngIf="!(loading | async); else load_state"
            class="overflow-auto p-4"
        >
            <event-form [form]="form"></event-form>
        </main>
        <footer
            *ngIf="!(loading | async)"
            class="flex justify-center items-center p-2 border-t border-gray-200"
        >
            <button btn matRipple (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <main
                loading
                class="h-64 flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading | async }}</p>
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
    /** Observable for the loading state of the form */
    public readonly loading = this._service.loading;

    public get form() {
        return this._service.form;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: BookingModalData,
        private _service: EventFormService,
        private _dialog_ref: MatDialogRef<BookingModalComponent>
    ) {}

    public ngOnInit(): void {
        this._service.newForm(this._data.event);
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
