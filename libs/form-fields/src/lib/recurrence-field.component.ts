import {
    Component,
    computed,
    effect,
    forwardRef,
    inject,
    input,
    output,
    signal,
    untracked,
} from '@angular/core';
import {
    ControlValueAccessor,
    FormsModule,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    BookingRecurrence,
    firstRecurrenceInstance,
    formatRecurrence,
    fromBookingRecurrence,
    fromEventRecurrence,
    NO_RECURR,
    Recurrence,
    recurrenceEndDate,
    recurrenceInstanceCount,
    toBookingRecurrence,
    toEventRecurrence,
} from '@placeos/common';
import { addDays, addYears, endOfDay, startOfDay } from 'date-fns';

import { CommonModule } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { RecurrenceDetails } from 'libs/events/src/lib/event.interfaces';
import { RecurrenceModalComponent } from './recurrence-modal.component';

@Component({
    selector: 'recurrence-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [ngModel]="recurr_type()"
                (ngModelChange)="setSimple($event)"
                [placeholder]="'FORM.RECURRENCE_NONE' | translate"
            >
                <mat-select-trigger>
                    @if (value()?._custom) {
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
                    } @else if (recurr_type() === 'daily') {
                        {{ 'FORM.RECURRENCE_DAILY' | translate }}
                    } @else if (recurr_type() === 'weekly') {
                        {{
                            'FORM.RECURRENCE_WEEKLY_ON'
                                | translate: { day: date() | date: 'EEEE' }
                        }}
                    } @else if (recurr_type() === 'monthly') {
                        {{
                            'FORM.RECURRENCE_MONTH_INSTANCE'
                                | translate
                                    : {
                                          index: instance_of_month(),
                                          day: date() | date: 'EEEE',
                                      }
                        }}
                    } @else {
                        {{ 'FORM.RECURRENCE_NONE' | translate }}
                    }
                </mat-select-trigger>
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
                                          index: instance_of_month(),
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
                @if (value()?._custom) {
                    <mat-option value="custom_display">
                        <div class="flex w-full">
                            <div class="w-1/2 flex-1 truncate">
                                {{ formatted_value() }}
                            </div>
                            <div
                                class="bg-base-200 border-base-300/30 mr-2 rounded border px-2 py-1 text-xs uppercase"
                            >
                                {{ 'FORM.RECURRENCE_CUSTOM' | translate }}
                            </div>
                        </div>
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
export class RecurrenceFieldComponent implements ControlValueAccessor {
    private _dialog = inject(MatDialog);

    public readonly type = input<'event' | 'booking'>('booking');
    public readonly date = input(Date.now());
    public readonly available_days = input(180);
    public readonly first_instance = output<number>();

    public readonly prev_type = signal('none');
    public readonly recurr_type = signal('none');
    public readonly iom = signal(0);
    public readonly instance_of_month = signal('');
    public readonly value = signal<Recurrence>(NO_RECURR);

    private readonly _custom_cache = signal<Recurrence | undefined>(undefined);
    private _prev_date: number | undefined;

    /** Form control on change handler */
    private _onChange: (_: RecurrenceDetails | BookingRecurrence) => void;
    /** Form control on touch handler */
    private _onTouch: (_: RecurrenceDetails | BookingRecurrence) => void;

    /**
     * Formatted display string for the current recurrence value.
     * For instance-based recurrences the end date is always recomputed
     * from the current date() so the display stays in sync.
     */
    public readonly formatted_value = computed(() => {
        const val = this.value();
        if (!val) return '';
        if (
            val.end_type === 'instances' &&
            recurrenceInstanceCount(val.end_instances)
        ) {
            return formatRecurrence(
                {
                    ...val,
                    end_date: recurrenceEndDate(val, this.date()),
                },
                this.date(),
            );
        }
        return formatRecurrence(val, this.date());
    });

    constructor() {
        effect(() => {
            const date_value = this.date();
            if (!date_value) return;
            untracked(() => this._onDateChange(date_value));
        });
    }

    public toRaw(data: Recurrence) {
        return this.type() === 'event'
            ? toEventRecurrence(data, this.date())
            : toBookingRecurrence(data, this.date());
    }

    public fromRaw(data: RecurrenceDetails | BookingRecurrence) {
        return this.type() === 'event'
            ? fromEventRecurrence(data as RecurrenceDetails)
            : fromBookingRecurrence(data as BookingRecurrence);
    }

    /** Update the form field value. */
    public setValue(new_value: Recurrence): void {
        new_value = this._clampValueEnd(new_value);
        this.value.set(new_value);
        this._custom_cache.set(
            new_value?._custom ? { ...new_value } : undefined,
        );
        this._emitFirstInstance(new_value);
        if (this._onChange) this._onChange(this.toRaw(new_value));
    }

    /** Update local value when form control value is changed externally. */
    public writeValue(value: RecurrenceDetails | BookingRecurrence) {
        if (!value) {
            this.value.set(NO_RECURR);
            this._custom_cache.set(undefined);
            this.recurr_type.set('none');
            this.prev_type.set('none');
            return;
        }
        const next_value = this.fromRaw(value || ({} as any));
        const restored_value = this._restoreCustomEnd(next_value);
        this.value.set(restored_value);
        this._custom_cache.set(
            restored_value?._custom ? { ...restored_value } : undefined,
        );
        this.recurr_type.set(
            this.value()._custom ? 'custom_display' : this.value().type,
        );
        this.prev_type.set(this.recurr_type());
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    public openCustomRecurrenceModal() {
        const ref = this._dialog.open(RecurrenceModalComponent, {
            data: {
                value: this.value(),
                iom: this.iom(),
                date: this.date(),
                available_days: this.available_days(),
            },
        });
        ref.afterClosed().subscribe((d?) =>
            setTimeout(() => {
                d ? this.setValue({ ...d }) : '';
                this.recurr_type.set(d ? 'custom_display' : this.prev_type());
            }, 10),
        );
    }

    public setSimple(pattern: string) {
        const day_of_week = new Date(this.date()).getDay();
        const end_date = endOfDay(
            addDays(Date.now(), this.available_days()),
        ).valueOf();
        if (pattern === 'none') {
            this.setValue(NO_RECURR);
        } else if (pattern === 'daily') {
            this.setValue({
                _custom: false,
                type: 'daily',
                interval: 1,
                end_type: 'date',
                end_date,
            });
        } else if (pattern === 'weekly') {
            this.setValue({
                _custom: false,
                type: 'weekly',
                interval: 1,
                weekdays: new Set<any>([day_of_week]),
                end_type: 'date',
                end_date,
            });
        } else if (pattern === 'monthly') {
            this.setValue({
                _custom: false,
                type: 'monthly',
                interval: 1,
                weekdays: new Set<any>([day_of_week]),
                monthly_type: 'day_of_week',
                week: this.iom() as any,
                end_type: 'date',
                end_date,
            });
        } else if (pattern === 'yearly') {
            this.setValue({
                _custom: false,
                type: 'yearly',
                interval: 1,
                end_type: 'date',
                end_date: addYears(this.date(), 7).valueOf(),
            });
        }
        this.recurr_type.set(
            pattern === 'custom' || pattern === 'custom_display'
                ? this.recurr_type()
                : pattern,
        );
        this.prev_type.set(this.recurr_type());
    }

    // -----------------------------------------------------------------------
    // Private helpers
    // -----------------------------------------------------------------------

    /** React to a date change from either the signal input or the parent form. */
    private _onDateChange(date_value: number): void {
        const day = new Date(date_value).getDate();
        let week = Math.floor(day / 7) + (day % 7 ? 1 : 0);
        let label = `${week}${week === 2 ? 'nd' : week === 3 ? 'rd' : 'th'}`;
        if ((week === 4 && day >= 25) || week === 5) {
            label = 'Last';
            week = -1;
        }
        if (week === 1) label = 'First';
        this.instance_of_month.set(label);
        this.iom.set(week);
        if (this._prev_date && this._prev_date !== date_value) {
            this._recalculateValue(date_value, week);
        }
        this._prev_date = date_value;
    }

    /**
     * Recalculate the stored recurrence value to match the new date.
     * Updates weekday, week-of-month, and instance-based end dates.
     * Multi-day custom weekly selections are preserved.
     */
    private _recalculateValue(date_value: number, week: number): void {
        const current = this.value();
        if (!current || current.type === 'none') return;
        const day_of_week = new Date(date_value).getDay();
        const updated: Partial<Recurrence> = {};
        const has_multi_day_custom =
            current._custom && current.weekdays?.size > 1;
        if (
            !has_multi_day_custom &&
            (current.type === 'weekly' ||
                (current.type === 'monthly' &&
                    current.monthly_type === 'day_of_week'))
        ) {
            updated.weekdays = new Set<any>([day_of_week]);
        }
        if (
            current.type === 'monthly' &&
            current.monthly_type === 'day_of_week'
        ) {
            updated.week = week as any;
        }
        if (current.end_type === 'instances' && current.end_instances) {
            updated.end_date = recurrenceEndDate(current, date_value);
        } else if (
            current.end_type === 'date' &&
            current.end_date &&
            // end_date is always stored as endOfDay(), so this comparison
            // is effectively a day-boundary check: reset only when
            // the entire end day is before the new booking date.
            current.end_date < date_value
        ) {
            updated.end_date = this._allowedEndDate();
        }
        if (Object.keys(updated).length) {
            this.setValue({ ...current, ...updated });
        }
    }

    private _emitFirstInstance(value: Recurrence): void {
        if (!value || value.type === 'none') return;
        const date_value = this.date();
        if (!date_value) return;
        const first_instance = firstRecurrenceInstance(value, date_value);
        if (
            startOfDay(first_instance).valueOf() ===
            startOfDay(date_value).valueOf()
        ) {
            return;
        }
        this.first_instance.emit(first_instance);
    }

    private _clampValueEnd(value: Recurrence): Recurrence {
        if (!value || value.type === 'none') return value;
        const max_end_date = this._allowedEndDate();
        if (value.end_type === 'date' && value.end_date > max_end_date) {
            return { ...value, end_date: max_end_date };
        }
        if (value.end_type !== 'instances' || !value.end_instances) {
            return value;
        }
        const updated = { ...value };
        while (
            updated.end_instances > 1 &&
            recurrenceEndDate(updated, this.date()) > max_end_date
        ) {
            updated.end_instances--;
        }
        updated.end_date = Math.min(
            recurrenceEndDate(updated, this.date()),
            max_end_date,
        );
        return updated;
    }

    private _allowedEndDate(): number {
        return endOfDay(addDays(Date.now(), this.available_days())).valueOf();
    }

    /**
     * When a round-tripped value comes back through writeValue, the
     * serialisation/deserialisation may lose the end_instances fields.
     * Restore them from the cached custom value when the pattern matches.
     */
    private _restoreCustomEnd(next_value: Recurrence): Recurrence {
        const custom_value = this._custom_cache() || this.value();
        if (
            !next_value?._custom ||
            next_value.end_instances ||
            !custom_value?._custom ||
            custom_value.end_type !== 'instances' ||
            !this._samePattern(next_value, custom_value)
        ) {
            return next_value;
        }
        return {
            ...next_value,
            end_type: 'instances' as const,
            end_instances: custom_value.end_instances,
            end_date: custom_value.end_date || next_value.end_date,
        };
    }

    private _samePattern(a: Recurrence, b: Recurrence) {
        const same_days =
            a.type === 'weekly'
                ? this._sameWeekdays(a.weekdays, b.weekdays)
                : a.type === 'monthly' && a.monthly_type === 'day_of_week'
                  ? this._sameWeekdays(a.weekdays, b.weekdays)
                  : true;
        return (
            a.type === b.type &&
            a.interval === b.interval &&
            a.week === b.week &&
            a.monthly_type === b.monthly_type &&
            same_days
        );
    }

    private _sameWeekdays(a?: Set<number>, b?: Set<number>) {
        if (!a?.size && !b?.size) return true;
        if (!a || !b || a.size !== b.size) return false;
        return Array.from(a).every((day) => b.has(day));
    }
}
