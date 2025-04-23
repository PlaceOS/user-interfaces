import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
    AsyncHandler,
    DayIndex,
    MonthlyType,
    Recurrence,
    RecurrEndType,
    RecurrType,
} from '@placeos/common';
import { addDays, addMonths, startOfWeek } from 'date-fns';

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
                    [max]="60"
                ></compact-counter>
                <mat-form-field appearance="outline" class="no-subscript">
                    <mat-select formControlName="type">
                        <mat-option value="daily">{{
                            (form.value.interval === 1
                                ? 'FORM.RECURRENCE_DAY'
                                : 'FORM.RECURRENCE_DAYS'
                            ) | translate
                        }}</mat-option>
                        <mat-option value="weekly">{{
                            (form.value.interval === 1
                                ? 'FORM.RECURRENCE_WEEK'
                                : 'FORM.RECURRENCE_WEEKS'
                            ) | translate
                        }}</mat-option>
                        <mat-option value="monthly">{{
                            (form.value.interval === 1
                                ? 'FORM.RECURRENCE_MONTH'
                                : 'FORM.RECURRENCE_MONTHS'
                            ) | translate
                        }}</mat-option>
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
                    <mat-select formControlName="monthly_type"> </mat-select>
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
                        <a-date-field formControlName="end_date"></a-date-field>
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
    standalone: false,
})
export class RecurrenceModalComponent extends AsyncHandler implements OnInit {
    public readonly instance_fn = (v) => `${v} instances`;
    public readonly weekdays = new Array(7).fill(0).map((_, idx) => {
        const date = addDays(startOfWeek(Date.now()), idx);
        return [date.valueOf(), date.getDay()];
    });

    public readonly form = new FormGroup({
        _custom: new FormControl(true),
        type: new FormControl<RecurrType>('daily'),
        interval: new FormControl(1),
        weekdays: new FormControl(
            new Set<DayIndex>([new Date().getDay() as any]),
        ),
        monthly_type: new FormControl<MonthlyType>('day_of_month'),
        end_type: new FormControl<RecurrEndType>('never'),
        end_date: new FormControl(addMonths(Date.now(), 3)),
        end_instances: new FormControl(13),
    });

    constructor(@Inject(MAT_DIALOG_DATA) private _data: { value: Recurrence }) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'end_type',
            this.form.controls.end_type.valueChanges.subscribe((type) =>
                this._onEndTypeChange(type),
            ),
        );
        this.form.patchValue({ ...this._data.value, _custom: true });
        if (!this.form.value.type || this.form.value.type === 'none') {
            this.form.patchValue({ type: 'daily' });
        }
        this._onEndTypeChange(this.form.value.end_type);
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
}
