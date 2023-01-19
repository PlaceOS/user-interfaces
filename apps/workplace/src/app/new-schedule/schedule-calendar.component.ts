import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    addDays,
    addMonths,
    isBefore,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

@Component({
    selector: 'schedule-calendar',
    template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <div class="px-2 font-medium">
                    {{ date_list[6]?.id || active_date | date: 'LLLL YYYY' }}
                </div>
                <div class="flex items-center">
                    <button icon matRipple (click)="changeMonth(-1)">
                        <app-icon>chevron_left</app-icon>
                    </button>
                    <button icon matRipple (click)="changeMonth(1)">
                        <app-icon>chevron_right</app-icon>
                    </button>
                </div>
            </div>
            <div class="flex items-center text-sm">
                <div
                    class="flex-1 opacity-60 text-center"
                    *ngFor="let day of date_list | slice: 0:7"
                >
                    {{ day.id | date: 'EE' }}
                </div>
            </div>
            <div class="flex items-center flex-wrap">
                <button
                    icon
                    class="min-w-[14%] flex-1 relative overflow-visible"
                    *ngFor="let day of date_list"
                    [class.hover:bg-blue-600]="day.id !== active_date"
                    [class.hover:bg-opacity-20]="day.id !== active_date"
                    [class.text-opacity-30]="!day.is_month"
                    [class.text-white]="day.id === active_date"
                    [class.text-black]="day.id !== active_date"
                    [class.dark:text-white]="day.id !== active_date"
                    [class.dark:text-opacity-30]="!day.is_month"
                    [class.bg-primary]="day.id === active_date"
                    [class.font-normal]="day.id !== active_date"
                    (click)="setValue(day.id)"
                >
                    {{ day.id | date: 'd' }}
                    <div
                        class="absolute -inset-[2px] border border-primary rounded-full overflow-hidden"
                        matRipple
                        *ngIf="today === day.id"
                    ></div>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ScheduleCalendarComponent),
            multi: true,
        },
    ],
})
export class ScheduleCalendarComponent implements OnInit, ControlValueAccessor {
    public active_date = startOfDay(Date.now()).valueOf();
    public today = startOfDay(Date.now()).valueOf();
    public offset = 0;
    public date_list = [];

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    public ngOnInit() {
        this.generateDates();
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        this.active_date = startOfDay(new_value).valueOf();
        this.offset = 0;
        this.generateDates();
        if (this._onChange) {
            this._onChange(new_value);
        }
    }
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.active_date = startOfDay(value).valueOf();
        this.offset = 0;
        this.generateDates();
    }

    public changeMonth(change: number) {
        this.offset += change;
        this.generateDates();
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn) => (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    public generateDates() {
        const date = addMonths(this.active_date, this.offset);
        let start = startOfWeek(startOfMonth(date));
        const now = startOfDay(Date.now());
        const list = [];
        while (list.length < 42) {
            list.push({
                id: start.valueOf(),
                is_past: isBefore(start, now),
                is_month: isSameMonth(start, date),
            });
            start = addDays(start, 1);
        }
        this.date_list = list;
    }
}
