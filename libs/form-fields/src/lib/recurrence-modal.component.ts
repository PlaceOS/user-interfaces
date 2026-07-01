import { CommonModule } from '@angular/common';
import { Component, inject, Injector, OnInit, signal } from '@angular/core';
import { disabled, form, FormField } from '@angular/forms/signals';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    DayIndex,
    MonthlyType,
    onFieldChange,
    Recurrence,
    recurrenceEndDate,
    RecurrEndType,
    RecurrType,
} from '@placeos/common';
import { addDays, endOfDay, startOfWeek } from 'date-fns';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CompactCounterComponent } from './compact-counter.component';
import { DateFieldComponent } from './date-field.component';

@Component({
    selector: 'recurrence-modal',
    template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'FORM.RECURRENCE_CUSTOM_HEADER' | translate }}
            </h3>
        </header>
        <main class="flex min-w-[24rem] flex-col space-y-2 px-4">
            <label class="w-auto">{{
                'FORM.RECURRENCE_REPEAT_EVERY' | translate
            }}</label>
            <div class="mt-2 flex items-center space-x-4 pb-4">
                <compact-counter
                    [formField]="form.interval"
                    [min]="1"
                    [max]="model().type === 'daily' ? 7 : 12"
                    [step]="1"
                ></compact-counter>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select [formField]="form.type">
                        <mat-option value="daily">{{
                            (model().interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        @if (available_days >= 14) {
                            <mat-option value="weekly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_WEEK'
                                    : 'FORM.RECURRENCE_WEEKS'
                                ) | translate
                            }}</mat-option>
                        }
                        @if (available_days >= 28) {
                            <mat-option value="monthly">{{
                                (model().interval === 1
                                    ? 'FORM.RECURRENCE_MONTH'
                                    : 'FORM.RECURRENCE_MONTHS'
                                ) | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (model().type === 'weekly') {
                <label class="w-auto">{{
                    'FORM.RECURRENCE_REPEAT_ON' | translate
                }}</label>
                <div class="flex items-center space-x-2 pb-4">
                    @for (day of weekdays; track day[1]) {
                        @let has_date = hasDate(day[1]);
                        <button
                            icon
                            matRipple
                            class="border-secondary h-12 w-12 rounded-sm border"
                            [class.bg-secondary]="has_date"
                            [class.text-secondary]="!has_date"
                            [class.text-base-200]="has_date"
                            (click)="toggleDate(day[1])"
                        >
                            {{ day[0] | date: 'EEEEE' }}
                        </button>
                    }
                </div>
            }
            @if (model().type === 'monthly') {
                <mat-form-field appearance="outline">
                    <mat-select [formField]="form.monthly_type">
                        <mat-option value="day_of_week"
                            >Monthly on {{ month_instance }}
                            {{ date | date: 'EEEE' }}</mat-option
                        >
                    </mat-select>
                </mat-form-field>
            }
            <label class="w-auto">{{
                'FORM.RECURRENCE_ENDS' | translate
            }}</label>
            <div class="pb-4">
                <mat-radio-group [formField]="form.end_type">
                    <div class="flex items-center">
                        <mat-radio-button value="never">{{
                            'FORM.RECURRENCE_ENDS_NEVER' | translate
                        }}</mat-radio-button>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="date">{{
                            'FORM.RECURRENCE_ENDS_ON' | translate
                        }}</mat-radio-button>
                        <a-date-field
                            [formField]="form.end_date"
                            [from]="date"
                            [to]="end_date"
                        ></a-date-field>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="instances">{{
                            'FORM.RECURRENCE_ENDS_AFTER' | translate
                        }}</mat-radio-button>
                        <compact-counter
                            class="flex-1"
                            [formField]="form.end_instances"
                            [render_fn]="instance_fn"
                            [min]="1"
                            [max]="maxInstances()"
                        ></compact-counter>
                    </div>
                </mat-radio-group>
            </div>
        </main>
        <footer
            class="border-base-200 flex items-center justify-end space-x-2 border-t px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button
                btn
                matRipple
                class="w-32"
                [mat-dialog-close]="confirmValue()"
            >
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `,
    styles: [
        `
            mat-form-field,
            a-date-field {
                height: 3.25rem;
            }

            mat-radio-button {
                width: 8rem;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormField,
        MatFormFieldModule,
        MatRadioModule,
        MatSelectModule,
        MatDialogModule,
        CompactCounterComponent,
        DateFieldComponent,
        TranslatePipe,
    ],
})
export class RecurrenceModalComponent extends AsyncHandler implements OnInit {
    private _data = inject<{
        value: Recurrence;
        iom: number;
        date: number;
        available_days: number;
    }>(MAT_DIALOG_DATA);

    public readonly instance_fn = (v) => `${v ?? 13} instances`;
    public readonly date = this._data.date || Date.now();
    public readonly week = this._data.iom ?? 1;
    public readonly available_days = this._data.available_days;
    public readonly end_date = endOfDay(
        addDays(Date.now(), this.available_days),
    ).valueOf();
    public readonly month_instance =
        this.week === -1
            ? 'Last'
            : this.week === 1
              ? '1st'
              : this.week === 2
                ? '2nd'
                : this.week === 3
                  ? '3rd'
                  : `${this.week}th`;
    public readonly weekdays: [number, DayIndex][] = new Array(7)
        .fill(0)
        .map((_, idx) => {
            const date = addDays(startOfWeek(Date.now()), idx);
            return [date.valueOf(), date.getDay() as DayIndex];
        });

    private _injector = inject(Injector);

    public readonly model = signal({
        _custom: true,
        type: 'daily' as RecurrType,
        interval: 1,
        weekdays: new Set<DayIndex>([new Date(this.date).getDay() as DayIndex]),
        week: 0,
        monthly_type: 'day_of_week' as MonthlyType,
        end_type: 'never' as RecurrEndType,
        end_date: this._defaultEndDate(),
        end_instances: 13,
    });

    public readonly form = form(this.model, (p) => {
        disabled(p.end_date, {
            when: () => this.model().end_type !== 'date',
        });
        disabled(p.end_instances, {
            when: () => this.model().end_type !== 'instances',
        });
        disabled(p.type, { when: () => this.available_days < 14 });
    });

    constructor() {
        super();
        onFieldChange(
            this.model,
            (m) => m.type,
            (type) => this._onTypeChange(type),
            this._injector,
        );
        onFieldChange(
            this.model,
            (m) => m,
            () => this._clampEndInstances(),
            this._injector,
        );
    }

    public ngOnInit() {
        this.model.update((m) => ({
            ...m,
            ...(this._data.value as any),
            _custom: true,
        }));
        if (!this.model().type || (this.model().type as string) === 'none') {
            this.model.update((m) => ({ ...m, type: 'daily' }));
        }
        // Restore defaults when end_date / end_instances are missing
        const default_end_date = this._defaultEndDate();
        if (!this.model().end_date) {
            this.model.update((m) => ({ ...m, end_date: default_end_date }));
        }
        if (!this.model().end_instances) {
            this.model.update((m) => ({ ...m, end_instances: 13 }));
        }
        // Clamp end_date to valid range after loading the saved value
        if (this.model().end_date < this.date) {
            this.model.update((m) => ({ ...m, end_date: this.date }));
        } else if (this.model().end_date > this.end_date) {
            this.model.update((m) => ({ ...m, end_date: this.end_date }));
        }
        if (this.model().type === 'monthly') {
            this._setMonthlyWeekday();
        }
        this._clampEndInstances();
    }

    public hasDate(idx: DayIndex) {
        return this.model().weekdays.has(idx);
    }

    public toggleDate(idx: DayIndex) {
        this.model.update((m) => {
            const set = new Set(m.weekdays);
            set.has(idx) ? set.delete(idx) : set.add(idx);
            return { ...m, weekdays: set };
        });
    }

    public confirmValue(): Recurrence {
        const value = { ...this.model() } as any as Recurrence;
        value.end_date = value.end_date || this._defaultEndDate();

        if (value.end_type === 'instances' && value.end_instances) {
            value.end_date = recurrenceEndDate(value, this.date);
            while (value.end_instances > 1 && value.end_date > this.end_date) {
                value.end_instances--;
                value.end_date = recurrenceEndDate(value, this.date);
            }
            value.end_date = Math.min(value.end_date, this.end_date);
        }

        if (value.end_type !== 'instances') {
            value.end_instances = undefined;
        }

        if (value.end_type !== 'date') {
            value.end_date =
                value.end_type === 'instances' ? value.end_date : undefined;
        }

        return value;
    }

    public maxInstances(): number {
        const value = this.model() as any as Recurrence;
        let max_instances = 1;
        for (let count = 1; count <= 53; count++) {
            const end_date = recurrenceEndDate(
                { ...value, end_instances: count },
                this.date,
            );
            if (end_date > this.end_date) break;
            max_instances = count;
        }
        return max_instances;
    }

    private _onTypeChange(type: RecurrType) {
        if (type === 'monthly') this._setMonthlyWeekday();
    }

    private _setMonthlyWeekday() {
        const set = new Set<DayIndex>();
        set.add(new Date(this.date).getDay() as DayIndex);
        this.model.update((m) => ({
            ...m,
            monthly_type: 'day_of_week',
            week: this.week,
            weekdays: set,
        }));
    }

    private _clampEndInstances() {
        if (this.model().end_type !== 'instances') return;
        const max_instances = this.maxInstances();
        if (this.model().end_instances <= max_instances) return;
        this.model.update((m) => ({ ...m, end_instances: max_instances }));
    }

    private _defaultEndDate() {
        return this.end_date;
    }
}
