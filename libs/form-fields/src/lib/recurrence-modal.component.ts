import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import {
    AsyncHandler,
    DayIndex,
    MonthlyType,
    Recurrence,
    RecurrEndType,
    RecurrType,
} from '@placeos/common';
import { addDays, addMonths, endOfDay, startOfWeek } from 'date-fns';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CompactCounterComponent } from './compact-counter.component';
import { DateFieldComponent } from './date-field.component';

@Component({
    selector: 'recurrence-modal',
    template: `
        <header
            class="m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded border-none bg-base-200 px-4 py-2"
        >
            <h3 class="text-xl font-medium">
                {{ 'FORM.RECURRENCE_CUSTOM_HEADER' | translate }}
            </h3>
        </header>
        <main
            class="flex min-w-[24rem] flex-col space-y-2 px-4"
            [formGroup]="form"
        >
            <label class="w-auto">{{
                'FORM.RECURRENCE_REPEAT_EVERY' | translate
            }}</label>
            <div class="mt-2 flex items-center space-x-4 pb-4">
                <compact-counter
                    formControlName="interval"
                    [min]="1"
                    [max]="form.value.type === 'daily' ? 7 : 12"
                    [step]="1"
                ></compact-counter>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript flex-1"
                >
                    <mat-select formControlName="type">
                        <mat-option value="daily">{{
                            (form.value.interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        @if (available_days >= 14) {
                            <mat-option value="weekly">{{
                                (form.value.interval === 1
                                    ? 'FORM.RECURRENCE_WEEK'
                                    : 'FORM.RECURRENCE_WEEKS'
                                ) | translate
                            }}</mat-option>
                        }
                        @if (available_days >= 28) {
                            <mat-option value="monthly">{{
                                (form.value.interval === 1
                                    ? 'FORM.RECURRENCE_MONTH'
                                    : 'FORM.RECURRENCE_MONTHS'
                                ) | translate
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            @if (form.value.type === 'weekly') {
                <label class="w-auto">{{
                    'FORM.RECURRENCE_REPEAT_ON' | translate
                }}</label>
                <div class="flex items-center space-x-2 pb-4">
                    @for (day of weekdays; track day[1]) {
                        @let has_date = hasDate(day[1]);
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded border border-secondary"
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
            @if (form.value.type === 'monthly') {
                <mat-form-field appearance="outline">
                    <mat-select formControlName="monthly_type">
                        <mat-option value="day_of_month"
                            >Monthly on day {{ date | date: 'd' }}</mat-option
                        >
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
                <mat-radio-group formControlName="end_type">
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
                            formControlName="end_date"
                            [to]="end_date"
                        ></a-date-field>
                    </div>
                    <div class="mt-2 flex items-center">
                        <mat-radio-button value="instances">{{
                            'FORM.RECURRENCE_ENDS_AFTER' | translate
                        }}</mat-radio-button>
                        <compact-counter
                            class="flex-1"
                            formControlName="end_instances"
                            [render_fn]="instance_fn"
                            [min]="1"
                            [max]="53"
                        ></compact-counter>
                    </div>
                </mat-radio-group>
            </div>
        </main>
        <footer
            class="flex items-center justify-end space-x-2 border-t border-base-200 px-4 py-2"
        >
            <button btn matRipple class="inverse w-32" mat-dialog-close>
                {{ 'COMMON.CANCEL' | translate }}
            </button>
            <button btn matRipple class="w-32" [mat-dialog-close]="form.value">
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
        ReactiveFormsModule,
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

    public readonly instance_fn = (v) => `${v} instances`;
    public readonly date = this._data.date || Date.now();
    public readonly week = this._data.iom ?? 1;
    public readonly available_days = this._data.available_days;
    public readonly end_date = endOfDay(
        addDays(this.date, this.available_days),
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
    public readonly weekdays = new Array(7).fill(0).map((_, idx) => {
        const date = addDays(startOfWeek(Date.now()), idx);
        return [date.valueOf(), date.getDay()];
    });

    public readonly form = new FormGroup({
        _custom: new FormControl(true),
        type: new FormControl<RecurrType>('daily'),
        interval: new FormControl(1),
        weekdays: new FormControl(
            new Set<DayIndex>([new Date(this.date).getDay() as any]),
        ),
        week: new FormControl(0),
        monthly_type: new FormControl<MonthlyType>('day_of_month'),
        end_type: new FormControl<RecurrEndType>('never'),
        end_date: new FormControl(addMonths(Date.now(), 3)),
        end_instances: new FormControl(13),
    });

    constructor() {
        super();
    }

    public ngOnInit() {
        if (this.form.value.end_date > this.end_date) {
            this.form.patchValue({ end_date: this.end_date });
        }
        this.subscription(
            'end_type',
            this.form.controls.end_type.valueChanges.subscribe((type) =>
                this._onEndTypeChange(type),
            ),
        );
        this.subscription(
            'month_type',
            this.form.controls.monthly_type.valueChanges.subscribe((type) =>
                this._onMonthlyTypeChange(type),
            ),
        );
        this.form.patchValue({ ...this._data.value, _custom: true });
        if (!this.form.value.type || this.form.value.type === 'none') {
            this.form.patchValue({ type: 'daily' });
        }
        this._onEndTypeChange(this.form.value.end_type);
        if (this.form.value.type === 'monthly' && this.form.value.week) {
            const set = this.form.value.weekdays;
            set.clear();
            set.add(new Date(this.date).getDay() as any);
            this.form.patchValue({ weekdays: set });
        }
        if (this.available_days < 14) {
            this.form.controls.type.disable();
        }
    }

    public hasDate(idx: DayIndex) {
        return this.form.value.weekdays.has(idx);
    }

    public toggleDate(idx: DayIndex) {
        const set = this.form.value.weekdays;
        set.has(idx) ? set.delete(idx) : set.add(idx);
        this.form.patchValue({ weekdays: set });
    }

    private _onEndTypeChange(type: RecurrEndType) {
        type !== 'date'
            ? this.form.controls.end_date.disable()
            : this.form.controls.end_date.enable();
        type !== 'instances'
            ? this.form.controls.end_instances.disable()
            : this.form.controls.end_instances.enable();
    }

    private _onMonthlyTypeChange(type: 'day_of_month' | 'day_of_week') {
        if (type === 'day_of_month') {
            this.form.patchValue({ week: 0 });
        } else {
            const set = this.form.value.weekdays;
            set.clear();
            set.add(new Date(this.date).getDay() as any);
            this.form.patchValue({ week: this.week, weekdays: set });
        }
    }
}
