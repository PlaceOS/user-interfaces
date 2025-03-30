import {
    Component,
    forwardRef,
    Input,
    OnChanges,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { addDays, addYears, endOfDay } from 'date-fns';

import { WeekOfMonth } from 'libs/bookings/src/lib/booking.class';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { RecurrenceDetails } from 'libs/events/src/lib/event.interfaces';
import { formatRecurrence } from 'libs/events/src/lib/helpers';
import {
    DayIndex,
    Recurrence,
    RecurrenceModalComponent,
    RecurrType,
    WeekIndex,
} from './recurrence-modal.component';

const NO_RECURR: Recurrence = {
    _custom: false,
    type: 'none',
    end_type: 'never',
    interval: 1,
};

export interface BookingRecurrence {
    /** Type of recurrence instance */
    recurrence_type: 'none' | 'daily' | 'weekly' | 'monthly';
    /** Bit flags for the recurrence days of the week */
    recurrence_days?: number;
    /** Week of the month to recur on */
    recurrence_nth_of_month?: WeekOfMonth;
    /** How often to recur */
    recurrence_interval?: number;
    /** Unix epoch for the end time of the recurrence in seconds */
    recurrence_end?: number;

    recurrence_custom?: boolean;
}

function fromEventRecurrence(r: RecurrenceDetails): Recurrence {
    if (!r.pattern || r._pattern === 'none') {
        return {
            _custom: false,
            type: 'none',
            interval: 1,
            end_type: 'never',
        };
    }

    const recurr: Recurrence = {
        _custom: r._pattern == 'custom_display',
        type: r.pattern as RecurrType,
        interval: r.interval || 1,
        end_type: r.end ? 'date' : 'never',
    };

    if (r.end) recurr.end_date = r.end;

    if (r.pattern === 'weekly' && r.days_of_week?.length) {
        recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
    }

    if (r.pattern === 'monthly') {
        recurr.monthly_type = 'day_of_week';
        if (r.days_of_week?.length) {
            recurr.weekdays = new Set(r.days_of_week as DayIndex[]);
        }
        // Note: Week of month is not directly mapped from RecurrenceDetails
        // This would need to be calculated based on the first occurrence
    }

    return recurr;
}

function toEventRecurrence(
    r: Recurrence,
    date: number = Date.now(),
): RecurrenceDetails {
    if (r.type === 'none') {
        return {
            pattern: 'daily',
            _pattern: 'none',
            interval: 1,
            days_of_week: [],
            start: date,
            end: date,
        };
    }
    const details: RecurrenceDetails = {
        _pattern: r._custom ? 'custom_display' : r.type,
        pattern: r.type,
        interval: r.interval,
        days_of_week: [],
        start: date,
        end: r.end_type === 'date' && r.end_date ? r.end_date : date,
    };
    if ((r.type === 'weekly' || r.type === 'monthly') && r.weekdays) {
        details.days_of_week = Array.from(r.weekdays);
    }
    return details;
}

function fromBookingRecurrence(r: BookingRecurrence): Recurrence {
    if (!r.recurrence_type || r.recurrence_type === 'none') {
        return {
            _custom: r.recurrence_custom,
            type: 'none',
            interval: 1,
            end_type: 'never',
        };
    }
    const recurr: Recurrence = {
        _custom: r.recurrence_custom,
        type: r.recurrence_type,
        interval: r.recurrence_interval || 1,
        end_type: r.recurrence_end ? 'date' : 'never',
    };
    if (r.recurrence_end) {
        recurr.end_date = r.recurrence_end * 1000; // Convert from seconds to milliseconds
    }

    if (r.recurrence_type === 'weekly' && r.recurrence_days) {
        const weekdays = new Set<DayIndex>();
        // Convert bit flags to day indices (0-6)
        for (let i = 0; i < 7; i++) {
            if (r.recurrence_days & (1 << (6 - i))) {
                weekdays.add(i as DayIndex);
            }
        }
        recurr.weekdays = weekdays;
    }

    if (r.recurrence_type === 'monthly') {
        recurr.monthly_type = 'day_of_week';
        if (r.recurrence_days) {
            const weekdays = new Set<DayIndex>();
            // Convert bit flags to day indices (0-6)
            for (let i = 0; i < 7; i++) {
                if (r.recurrence_days & (1 << (6 - i))) {
                    weekdays.add(i as DayIndex);
                }
            }
            recurr.weekdays = weekdays;
        }
        if (r.recurrence_nth_of_month) {
            recurr.week = r.recurrence_nth_of_month as WeekIndex;
        }
    }

    return recurr;
}

function toBookingRecurrence(r: Recurrence): BookingRecurrence {
    if (r.type === 'none') return { recurrence_type: 'none' };

    const booking: BookingRecurrence = {
        recurrence_custom: r._custom,
        recurrence_type: r.type === 'yearly' ? 'monthly' : r.type,
        recurrence_interval: r.type === 'yearly' ? r.interval * 12 : r.interval,
    };

    if (r.end_type === 'date' && r.end_date) {
        booking.recurrence_end = Math.floor(r.end_date / 1000); // Convert from milliseconds to seconds
    }

    if (r.type === 'weekly' && r.weekdays) {
        let days = 0;
        // Convert day indices (0-6) to bit flags
        r.weekdays.forEach((day) => {
            days |= 1 << (6 - day);
        });
        booking.recurrence_days = days;
    }

    if ((r.type === 'monthly' || r.type === 'yearly') && r.weekdays) {
        let days = 0;
        // Convert day indices (0-6) to bit flags
        r.weekdays.forEach((day) => {
            days |= 1 << (6 - day);
        });
        booking.recurrence_days = days;
    }

    if ((r.type === 'monthly' || r.type === 'yearly') && r.week) {
        booking.recurrence_nth_of_month = r.week;
    }

    return booking;
}

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
                <mat-option value="weekly">
                    {{
                        'FORM.RECURRENCE_WEEKLY_ON'
                            | translate: { day: date | date: 'EEEE' }
                    }}
                </mat-option>
                <mat-option value="monthly">
                    {{
                        'FORM.RECURRENCE_MONTH_INSTANCE'
                            | translate
                                : {
                                      index: instance_of_month,
                                      day: date | date: 'EEEE',
                                  }
                    }}
                </mat-option>
                @if (false) {
                    <mat-option value="yearly">
                        Anually on {{ date | date: 'LLLL dd' }}
                    </mat-option>
                }
                <mat-option *ngIf="value?._custom" value="custom_display">
                    {{ formatted_value }}
                </mat-option>
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
    standalone: false,
})
export class RecurrenceFieldComponent
    implements ControlValueAccessor, OnChanges
{
    @Input() public type: 'event' | 'booking' = 'booking';
    @Input() public date = Date.now();
    public prev_type = 'none';
    public recurr_type = 'none';
    public iom = 0;
    public instance_of_month: string;
    public value: Recurrence = NO_RECURR;

    /** Form control on change handler */
    private _onChange: (_: RecurrenceDetails | BookingRecurrence) => void;
    /** Form control on touch handler */
    private _onTouch: (_: RecurrenceDetails | BookingRecurrence) => void;

    constructor(
        private _dialog: MatDialog,
        private _settings: SettingsService,
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date && this.date) {
            const date = new Date(this.date).getDate();
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
        return !this.value
            ? ''
            : formatRecurrence(toEventRecurrence(this.value));
    }

    public toRaw(data: Recurrence) {
        return this.type === 'event'
            ? toEventRecurrence(data)
            : toBookingRecurrence(data);
    }

    public fromRaw(data: RecurrenceDetails | BookingRecurrence) {
        return this.type === 'event'
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
            data: { value: this.value },
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
        const day_of_week = new Date(this.date).getDay();
        const default_recurrence =
            this._settings.get('app.default_recurrence_period') || 180;
        const end_date = endOfDay(
            addDays(this.date, default_recurrence),
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
                end_date: addYears(this.date, 7).valueOf(),
            });
            this.prev_type = this.recurr_type;
        }
    }
}
