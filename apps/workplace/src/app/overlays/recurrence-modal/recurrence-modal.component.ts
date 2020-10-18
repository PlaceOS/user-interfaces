import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { BookingRecurrenceDetails } from '@user-interfaces/bookings';
import { BaseClass, DialogEvent, Identity } from '@user-interfaces/common';


export interface RecurrenceModalData {
    /** Current recurrence details */
    details: BookingRecurrenceDetails;
    /** Currently set date for the booking */
    date: number;
}

export const RECURRENCE_METADATA = {
    height: 'auto',
    width: '24em',
    maxHeight: 'calc(100vh - 2em)',
    maxWidth: 'calc(100vw - 2em)',
};

@Component({
    selector: 'recurrence-modal',
    templateUrl: './recurrence-modal.component.html',
    styleUrls: ['./recurrence-modal.component.scss'],
})
export class RecurrenceModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for recurrence */
    public form: FormGroup;
    /** Loading state */
    public loading: string;
    /** Current date of the booking */
    public date: number;
    /** Available recurrence patterns */
    public patterns: Identity[] = [
        { id: '', name: 'None' },
        { id: 'daily', name: 'Daily', interval: 1, pattern: 'daily' },
        { id: 'weekly', name: 'Weekly', interval: 1, pattern: 'weekly' },
        { id: 'monthly', name: 'Every 4 weeks', interval: 4, pattern: 'weekly' },
    ];
    /** Selected pattern */
    public selected_pattern;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: RecurrenceModalData) {
        super();
    }

    public ngOnInit(): void {
        this.date = this._data.date;
        const details = this._data.details;
        this.selected_pattern = this.patterns.find(
            (i) => i.interval === details?.interval && i.pattern === details?.pattern
        );
        this.form = new FormGroup({
            pattern: new FormControl(details?.pattern),
            interval: new FormControl(details?.interval),
            end: new FormControl(details?.end || this._data.date, [Validators.required]),
        });
    }

    public changePattern(event) {
        this.form.patchValue({
            pattern: event.pattern,
            interval: event.interval,
        });
    }

    /**
     * User confirmation of the content of the modal
     */
    public save() {
        this.form.markAllAsTouched();
        /* istanbul ignore else */
        if (this.form.valid) {
            this.loading = 'Adding recurrence data to booking...';
            this.event.emit({
                reason: 'done',
                metadata: { ...this._data.details, ...this.form.value },
            });
        }
    }
}
