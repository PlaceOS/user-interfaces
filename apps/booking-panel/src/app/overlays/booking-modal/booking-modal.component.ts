import { Component, OnInit, EventEmitter, Output, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

import { CalendarEvent } from '@user-interfaces/events';
import { DialogEvent, HashMap, BaseClass } from '@user-interfaces/common';
import { Space } from '@user-interfaces/spaces';

export interface BookingModalData extends HashMap {
    title?: string;
    space?: Space;
    date?: number;
    min_duration?: number;
    max_duration?: number;
}

export function openBookingModal(data: BookingModalData, dialog: MatDialog) {
    dialog.open(BookingModalComponent, {
        data
    });
}

@Component({
    selector: 'booking-modal',
    templateUrl: './booking-modal.component.html',
    styleUrls: ['./booking-modal.component.scss'],
    animations: []
})
export class BookingModalComponent extends BaseClass implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Whether modal is closing */
    public closing: boolean;
    /** Whether the modal is processing a booking request */
    public loading: boolean;
    /** Form */
    public form: FormGroup;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: BookingModalData) {
        super();
    }

    public ngOnInit(): void {
        this.form = new FormGroup({
            // organiser: new FormControl(null, [Validators.required]),
            room_ids: new FormControl([this._data.space.email]),
            date: new FormControl(this._data.date || new Date().valueOf()),
            duration: new FormControl(30),
            title: new FormControl(this._data.title || '', [Validators.required])
        });
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
                metadata: new CalendarEvent({ ...this.form.value })
            });
        } else {
            console.log(
                'Invalid form fields. Valid states:',
                this.form
            );
        }
    }
}
