import { Component, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { DialogEvent, HashMap, AsyncHandler } from '@placeos/common';
import { Space } from '@placeos/spaces';
import { first } from 'rxjs/operators';
import { User } from '@placeos/users';

export interface BookingModalData extends HashMap {
    title?: string;
    space?: Space;
    date?: number;
    min_duration?: number;
    max_duration?: number;
}

export async function openBookingModal(
    data: BookingModalData,
    dialog: MatDialog
) {
    const ref = dialog.open(BookingModalComponent, {
        data,
        autoFocus: false,
    });
    const result = await Promise.race([
        ref.componentInstance.event
            .pipe(first((_) => _.reason === 'done'))
            .toPromise(),
        ref.afterClosed().toPromise(),
    ]).catch((_) => ({}));
    return {
        ...result,
        close: () => ref.close(),
    };
}

@Component({
    selector: 'booking-modal',
    template: `
        <header class="bg-primary text-white p-4">
            <h3>New Booking</h3>
        </header>
        <form
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
            class="p-2"
        >
            <div class="field" *ngIf="form.controls.organiser">
                <label for="host">Host<span>*</span>:</label>
                <a-user-search-field
                    name="host"
                    formControlName="organiser"
                ></a-user-search-field>
            </div>
            <div class="flex space-x-2">
                <div class="flex-1" *ngIf="form.controls.date">
                    <label for="start-time">Start Time:</label>
                    <a-time-field
                        name="start-time"
                        formControlName="date"
                    ></a-time-field>
                </div>
                <div class="flex-1" *ngIf="form.controls.duration">
                    <label for="duration">Duration:</label>
                    <a-duration-field
                        name="duration"
                        formControlName="duration"
                    ></a-duration-field>
                </div>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.title">
                <label for="host">Title<span>*</span>:</label>
                <mat-form-field appearance="outline" class="w-full">
                    <input
                        matInput
                        name="title"
                        placeholder="Meeting Title"
                        formControlName="title"
                    />
                    <mat-error>Title is required</mat-error>
                </mat-form-field>
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex items-center justify-center p-2 w-full border-t border-gray-200 space-x-2"
        >
            <button
                matRipple
                name="close"
                class="inverse w-32"
                mat-dialog-close
            >
                Cancel
            </button>
            <button btn matRipple name="save" class="w-32" (click)="save()">
                Save
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Processing request...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            form {
                width: 32rem;
                max-width: calc(100vw - 2rem);
            }
        `,
    ],
    animations: [],
})
export class BookingModalComponent extends AsyncHandler {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether modal is closing */
    public closing: boolean;
    /** Whether the modal is processing a booking request */
    public loading: boolean;
    /** Form */
    public form: FormGroup = new FormGroup({
        organiser: new FormControl<User>(this._data.user || null, [
            Validators.required,
        ]),
        room_ids: new FormControl<string[]>([this._data.space?.email || '']),
        date: new FormControl(this._data.date || new Date().valueOf()),
        duration: new FormControl(30),
        title: new FormControl(this._data.title || '', [Validators.required]),
    });

    constructor(@Inject(MAT_DIALOG_DATA) private _data: BookingModalData) {
        super();
        // this.form.reset();
    }

    /**
     * Post form data
     */
    public save() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            this.loading = true;
            this.event.emit({
                reason: 'done',
                metadata: this.form.value,
            });
        } else {
            console.log('Invalid form fields. Valid states:', this.form);
        }
    }
}
