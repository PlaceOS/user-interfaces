import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnDestroy,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BaseClass } from '@user-interfaces/common';
import { CalendarEvent, generateEventForm } from '@user-interfaces/events';
import { BookingConfirmComponent } from '../../bookings/overlays/booking-confirm/booking-confirm.component';

@Component({
    selector: 'schedule-event-edit',
    template: `
        <form
            class="grid m-auto mt-8"
            *ngIf="form && event"
            [formGroup]="form"
            (ngSubmit)="save()"
        >
            <booking-edit [form]="form" [event]="event"></booking-edit>
            <div
                class="footer flex items-center justify-center w-full p-2 space-x-2"
            >
                <button
                    mat-button
                    type="button"
                    class="inverse"
                    (click)="cancel()"
                >
                    Cancel
                </button>
                <button mat-button type="submit">Save</button>
            </div>
        </form>
    `,
    styles: [
        `
            form {
                grid-template-columns: max-content;
                grid-template-rows: 1fr auto;
                grid-template-areas:
                    'edit'
                    'actions';
                max-width: 600px;
            }

            booking-edit,
            schedule-event-view {
                grid-area: edit;
            }

            .footer {
                grid-area: actions;
            }
        `,
    ],
})
export class EventEditComponent
    extends BaseClass
    implements OnInit, OnChanges, OnDestroy {
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
