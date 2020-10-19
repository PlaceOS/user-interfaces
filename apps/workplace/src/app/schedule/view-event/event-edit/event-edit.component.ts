import {
    Component,
    OnInit,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
    OnChanges,
    OnDestroy,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent, generateEventForm } from '@user-interfaces/events';

import { BookingConfirmComponent } from '../../../bookings/overlays/booking-confirm/booking-confirm.component';

@Component({
    selector: 'schedule-event-edit',
    templateUrl: './event-edit.component.html',
    styleUrls: ['./event-edit.component.scss'],
})
export class EventEditComponent extends BaseClass implements OnInit, OnChanges, OnDestroy {
    /** Booking to display */
    @Input() public event: CalendarEvent;
    /** Emitter for action on the display view */
    @Output() public change = new EventEmitter<{ type: string }>();
    /** Emitter for changes to the loading state */
    @Output() public loading = new EventEmitter<string>();
    /** Form field data */
    public form: FormGroup;

    constructor(private _dialog: MatDialog) {
        super();
    }

    public ngOnInit(): void {
        if (this.event) {
            this.form = generateEventForm(this.event);
        }
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.event && this.event) {
            this.form = generateEventForm(this.event);
        }
    }

    /**
     * Exit the edit form
     */
    public cancel() {
        this.change.emit({ type: 'cancel_edit' });
    }

    /**
     * Save changes to the booking
     */
    public save() {
        this.form.markAllAsTouched();
        if (this.form.valid) {
            const dialog_ref = this._dialog.open(BookingConfirmComponent, {
                width: '32em',
                maxWidth: '95vw',
                maxHeight: '95vh',
                data: { booking: this.event },
            });
            dialog_ref.componentInstance.event.subscribe((event) => {
                if (event.reason === 'success') {
                    this.change.emit({ type: 'view' });
                    dialog_ref.close();
                }
            });
        } else {
            console.warn('Some form fields are invalid:', this.form);
        }
    }

    public handleEvent(event) {}
}
