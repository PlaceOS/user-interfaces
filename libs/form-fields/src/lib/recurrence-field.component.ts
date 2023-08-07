import { Component, forwardRef, Input, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { RecurrenceDetails } from 'libs/events/src/lib/event.interfaces';
import { formatRecurrence } from 'libs/events/src/lib/helpers';
import { RecurrenceModalComponent } from './recurrence-modal.component';
import { addDays, addYears, endOfDay } from 'date-fns';
import { SettingsService } from 'libs/common/src/lib/settings.service';

@Component({
    selector: 'recurrence-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="value._pattern"
                (ngModelChange)="setSimple($event)"
                placeholder="Doesn't repeat"
            >
                <mat-option value="none">Doesn't repeat</mat-option>
                <mat-option value="daily">Daily</mat-option>
                <mat-option value="weekly">
                    Weekly on {{ date | date: 'EEEE' }}
                </mat-option>
                <mat-option value="monthly">
                    {{ instance_of_month }} {{ date | date: 'EEEE' }} of Month
                </mat-option>
                <!-- <mat-option value="yearly">
                    Anually on {{ date | date: 'LLLL dd' }}
                </mat-option> -->
                <mat-option
                    *ngIf="value._pattern === 'custom_display'"
                    value="custom_display"
                >
                    {{ formatted_value }}
                </mat-option>
                <mat-option
                    value="custom"
                    (click)="openCustomRecurrenceModal()"
                >
                    Custom...
                </mat-option>
            </mat-select>
        </mat-form-field>
    `,
    styles: [
        `
            [value] {
                min-width: 3em;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => RecurrenceFieldComponent),
            multi: true,
        },
    ],
})
export class RecurrenceFieldComponent implements ControlValueAccessor {
    /** Size of a single step */
    @Input() public date = Date.now();
    public instance_of_month: string;
    public old_value: string;
    public value: RecurrenceDetails = { pattern: 'none' } as any;

    /** Form control on change handler */
    private _onChange: (_: RecurrenceDetails) => void;
    /** Form control on touch handler */
    private _onTouch: (_: RecurrenceDetails) => void;

    constructor(
        private _dialog: MatDialog,
        private _settings: SettingsService
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date && this.date) {
            const date = new Date(this.date).getDate();
            const instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
            this.instance_of_month = `${instance}${
                instance === 2 ? 'nd' : instance === 3 ? 'rd' : 'th'
            }`;
            if ((instance === 4 && date >= 25) || instance === 5)
                this.instance_of_month = 'Last';
            if (instance === 1) this.instance_of_month = 'First';
            this.value = {
                ...this.value,
                start: this.date,
                days_of_week: !this.value.pattern
                    ? [new Date(this.date).getDay()]
                    : this.value.days_of_week,
            };
            this.setValue(this.value);
        }
    }

    public get formatted_value() {
        return formatRecurrence(this.value);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: RecurrenceDetails): void {
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: RecurrenceDetails) {
        this.value = value || ({} as any);
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: RecurrenceDetails) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: RecurrenceDetails) => void): void {
        this._onTouch = fn;
    }

    public openCustomRecurrenceModal() {
        if (!this.value.pattern) {
            this.value.days_of_week = [new Date(this.date).getDay()];
        }
        const ref = this._dialog.open(RecurrenceModalComponent, {
            data: { value: this.value },
        });
        this.setValue({ ...this.value, _pattern: 'none' });
        ref.afterClosed().subscribe((data?: RecurrenceDetails) => {
            this.setValue({
                ...(data || this.value),
                _pattern: data ? 'custom_display' : (this.old_value as any),
            });
        });
    }

    public setSimple(pattern: string) {
        const day_of_week = new Date(this.date).getDay();
        const default_recurrence =
            this._settings.get('app.default_recurrence_period') || 180;
        this.old_value = this.value._pattern;
        if (pattern === 'none') {
            this.setValue({
                pattern: null,
                _pattern: 'none',
                days_of_week: [day_of_week],
            } as any);
        } else if (pattern === 'daily') {
            this.setValue({
                pattern,
                _pattern: pattern,
                start: this.date,
                end: endOfDay(addDays(this.date, default_recurrence)).valueOf(),
                days_of_week: [day_of_week],
                interval: 1,
            });
        } else if (pattern === 'weekly') {
            this.setValue({
                pattern,
                _pattern: pattern,
                start: this.date,
                end: endOfDay(addDays(this.date, default_recurrence)).valueOf(),
                days_of_week: [day_of_week],
                interval: 1,
            });
        } else if (pattern === 'monthly') {
            this.setValue({
                pattern,
                _pattern: pattern,
                start: this.date,
                end: endOfDay(addDays(this.date, default_recurrence)).valueOf(),
                days_of_week: [day_of_week],
                interval: 1,
            });
        } else if (pattern === 'yearly') {
            this.setValue({
                pattern,
                _pattern: pattern,
                start: this.date,
                end: addYears(this.date, 7).valueOf(),
                days_of_week: [day_of_week],
                interval: 1,
            });
        }
    }
}
