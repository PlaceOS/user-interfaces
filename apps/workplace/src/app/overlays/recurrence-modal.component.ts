import { Component, OnInit, Output, EventEmitter, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { RecurrenceDetails } from '@placeos/events';
import { AsyncHandler, DialogEvent, Identity } from '@placeos/common';

export interface RecurrenceModalData {
    /** Current recurrence details */
    details: RecurrenceDetails;
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
    template: `
        <header>
            <div class="heading" mat-dialog-title>Booking Recurrence</div>
            <button icon mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="p-4" *ngIf="!loading; else load_state">
            <form *ngIf="form" [formGroup]="form">
                <div
                    class="flex flex-col"
                    *ngIf="form.controls.pattern && patterns.length > 1"
                >
                    <label for="period">Period: </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <mat-select
                            name="interval"
                            [(ngModel)]="selected_pattern"
                            (ngModelChange)="changePattern($event)"
                            [ngModelOptions]="{ standalone: true }"
                            placeholder="None"
                        >
                            <mat-option
                                *ngFor="let type of patterns"
                                [value]="type"
                            >
                                {{ type.name }}
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.end">
                    <label
                        class="mb"
                        for="end"
                        [class.error]="
                            form.controls.end.errors &&
                            form.controls.end.touched
                        "
                    >
                        End Date<span>*</span>:
                    </label>
                    <a-date-field
                        name="end"
                        formControlName="end"
                        [from]="date"
                        class="w-full"
                    >
                        End date needs to be in the future
                    </a-date-field>
                </div>
            </form>
        </main>
        <footer *ngIf="!loading">
            <button btn matRipple class="w-32" (click)="save()">
                Add to Booking
            </button>
        </footer>
        <ng-template #load_state>
            <main>
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ loading }}</p>
                </div>
            </main>
        </ng-template>
    `,
    styles: [``],
})
export class RecurrenceModalComponent extends AsyncHandler implements OnInit {
    /** Emitter for user action on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for recurrence */
    public form = new FormGroup({
        pattern: new FormControl(this._data.details?.pattern),
        interval: new FormControl(this._data.details?.interval),
        end: new FormControl(this._data.details?.end || this._data.date, [
            Validators.required,
        ]),
    });
    /** Loading state */
    public loading: string;
    /** Current date of the booking */
    public date: number;
    /** Available recurrence patterns */
    public patterns: Identity[] = [
        { id: '', name: 'None' },
        { id: 'daily', name: 'Daily', interval: 1, pattern: 'daily' },
        { id: 'weekly', name: 'Weekly', interval: 1, pattern: 'weekly' },
        {
            id: 'monthly',
            name: 'Every 4 weeks',
            interval: 4,
            pattern: 'weekly',
        },
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
            (i) =>
                i.interval === details?.interval &&
                i.pattern === details?.pattern
        );
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
