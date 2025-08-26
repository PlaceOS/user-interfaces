import {
    Component,
    forwardRef,
    inject,
    input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    BookingRecurrence,
    formatRecurrence,
    fromBookingRecurrence,
    fromEventRecurrence,
    NO_RECURR,
    Recurrence,
    toBookingRecurrence,
    toEventRecurrence,
} from '@placeos/common';

import { addDays, addYears, endOfDay } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { RecurrenceDetails } from 'libs/events/src/lib/event.interfaces';
import { RecurrenceModalComponent } from './recurrence-modal.component';

@Component({
    selector: 'recurrence-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [(ngModel)]="recurr_type"
                (ngModelChange)="setSimple($event)"
                [placeholder]="'FORM.RECURRENCE_NONE' | translate"
            >
                <mat-option value="none">{{
                    'FORM.RECURRENCE_NONE' | translate
                }}</mat-option>
                <mat-option value="daily">{{
                    'FORM.RECURRENCE_DAILY' | translate
                }}</mat-option>
                @if (available_days() >= 14) {
                    <mat-option value="weekly">
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    </mat-option>
                }
                @if (available_days() >= 28) {
                    <mat-option value="monthly">
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month,
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    </mat-option>
                }
                @if (false) {
                    <mat-option value="yearly">
                        Anually on {{ date() | date: 'LLLL dd' }}
                    </mat-option>
                }
                @if (value?._custom) {
                    <mat-option value="custom_display">
                        {{ formatted_value }}
                    </mat-option>
                }
                <mat-option
                    value="custom"
                    (click)="openCustomRecurrenceModal()"
                >
                    {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
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
    imports: [
        MatFormFieldModule,
        MatSelectModule,
        CommonModule,
        TranslatePipe,
        FormsModule,
    ],
})
export class RecurrenceFieldComponent
    implements ControlValueAccessor, OnChanges
{
    private _dialog = inject(MatDialog);
    private _settings = inject(SettingsService);

    public readonly type = input<'event' | 'booking'>('booking');
    public readonly date = input(Date.now());
    public readonly available_days = input(180);
    public prev_type = 'none';
    public recurr_type = 'none';
    public iom = 0;
    public instance_of_month: string;
    public value: Recurrence = NO_RECURR;

    /** Form control on change handler */
    private _onChange: (_: RecurrenceDetails | BookingRecurrence) => void;
    /** Form control on touch handler */
    private _onTouch: (_: RecurrenceDetails | BookingRecurrence) => void;

    public ngOnChanges(changes: SimpleChanges) {
        const dateValue = this.date();
        if (changes.date && dateValue) {
            const date = new Date(dateValue).getDate();
            let instance = Math.floor(date / 7) + (date % 7 ? 1 : 0);
            this.instance_of_month = `${instance}${
                instance === 2 ? 'nd' : instance === 3 ? 'rd' : 'th'
            }`;
            if ((instance === 4 && date >= 25) || instance === 5) {
                this.instance_of_month = 'Last';
                instance = -1;
            }
            if (instance === 1) this.instance_of_month = 'First';
            this.iom = instance;
        }
    }

    public get formatted_value() {
        return !this.value ? '' : formatRecurrence(this.value);
    }

    public toRaw(data: Recurrence) {
        return this.type() === 'event'
            ? toEventRecurrence(data, this.date())
            : toBookingRecurrence(data);
    }

    public fromRaw(data: RecurrenceDetails | BookingRecurrence) {
        return this.type() === 'event'
            ? fromEventRecurrence(data as RecurrenceDetails)
            : fromBookingRecurrence(data as BookingRecurrence);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Recurrence): void {
        this.value = new_value;
        if (this._onChange) this._onChange(this.toRaw(new_value));
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: RecurrenceDetails | BookingRecurrence) {
        if (!value) return (this.value = NO_RECURR);
        this.value = this.fromRaw(value || ({} as any));
        this.recurr_type = this.value._custom
            ? 'custom_display'
            : this.value.type;
        this.prev_type = this.recurr_type;
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    public openCustomRecurrenceModal() {
        const ref = this._dialog.open(RecurrenceModalComponent, {
            data: {
                value: this.value,
                iom: this.iom,
                date: this.date(),
                available_days: this.available_days(),
            },
        });
        ref.afterClosed().subscribe((d?) =>
            setTimeout(() => {
                console.log('Prev Type:', this.prev_type);
                d ? this.setValue({ ...d }) : '';
                this.recurr_type = d ? 'custom_display' : this.prev_type;
            }, 10),
        );
    }

    public setSimple(pattern: string) {
        const day_of_week = new Date(this.date()).getDay();
        const default_recurrence =
            this._settings.get('app.default_recurrence_period') || 180;
        const end_date = endOfDay(
            addDays(this.date(), default_recurrence),
        ).valueOf();
        if (pattern === 'none') {
            this.setValue(NO_RECURR);
            this.prev_type = this.recurr_type;
        } else if (pattern === 'daily') {
            this.setValue({
                _custom: false,
                type: 'daily',
                interval: 1,
                end_type: 'date',
                end_date,
            });
            this.prev_type = this.recurr_type;
        } else if (pattern === 'weekly') {
            this.setValue({
                _custom: false,
                type: 'weekly',
                interval: 1,
                weekdays: new Set<any>([day_of_week]),
                end_type: 'date',
                end_date,
            });
            this.prev_type = this.recurr_type;
        } else if (pattern === 'monthly') {
            this.setValue({
                _custom: false,
                type: 'monthly',
                interval: 1,
                weekdays: new Set<any>([day_of_week]),
                monthly_type: 'day_of_week',
                week: this.iom as any,
                end_type: 'date',
                end_date,
            });
            this.prev_type = this.recurr_type;
        } else if (pattern === 'yearly') {
            this.setValue({
                _custom: false,
                type: 'yearly',
                interval: 1,
                end_type: 'date',
                end_date: addYears(this.date(), 7).valueOf(),
            });
            this.prev_type = this.recurr_type;
        }
    }
}
