import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import {
    addDays,
    addMonths,
    isBefore,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

@Component({
    selector: 'schedule-mobile-calendar',
    template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    btn
                    matRipple
                    class="clear font-medium"
                    (click)="resetMonth()"
                >
                    {{ date_list[6]?.id || active_date | date: 'LLLL YYYY' }}
                </button>
                <div class="flex items-center">
                    <button icon matRipple (click)="changeMonth(-1)">
                        <app-icon>chevron_left</app-icon>
                    </button>
                    <button icon matRipple (click)="changeMonth(1)">
                        <app-icon>chevron_right</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="show_shortlist = !show_shortlist"
                    >
                        <app-icon>arrow_drop_down</app-icon>
                    </button>
                </div>
            </div>
            <div class="flex items-center justify-center text-sm mb-2">
                <div
                    class="opacity-60 text-center w-10 mx-2"
                    *ngFor="let day of date_list | slice: 0:7"
                >
                    {{ day.id | date: 'EE' }}
                </div>
            </div>
            <div class="flex items-center justify-between flex-wrap">
                <button
                    icon
                    matRipple
                    class="min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible"
                    *ngFor="let day of list"
                    [class.text-opacity-30]="!day.is_month"
                    [class.text-white]="day.id === active_date"
                    [class.text-black]="day.id !== active_date"
                    [class.dark:text-white]="day.id !== active_date"
                    [class.dark:text-opacity-30]="!day.is_month"
                    [class.bg-primary]="day.id === active_date"
                    [class.font-normal]="day.id !== active_date"
                    (click)="setValue(day.id)"
                >
                    <div
                        class="absolute -inset-0.5 border border-primary rounded-full"
                        *ngIf="day.is_today"
                    ></div>
                    {{ day.id | date: 'd' }}
                </button>
            </div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ScheduleMobileCalendarComponent),
            multi: true,
        },
    ],
})
export class ScheduleMobileCalendarComponent
    implements OnInit, ControlValueAccessor
{
    public active_date = startOfDay(Date.now()).valueOf();
    public offset = 0;
    public date_list = [];
    public short_list = [];
    public show_shortlist = true;

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    public ngOnInit() {
        this.generateDates();
    }

    public get list() {
        return this.show_shortlist ? this.short_list : this.date_list;
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number) {
        this.active_date = startOfDay(new_value).valueOf();
        this.offset = 0;
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

    public resetMonth() {
        this.changeMonth(-this.offset);
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
        let list = [];
        while (list.length < 7 * 6) {
            list.push({
                id: start.valueOf(),
                is_past: isBefore(start, now),
                is_month: isSameMonth(start, date),
                is_today: isSameDay(Date.now(), start),
            });
            start = addDays(start, 1);
        }
        this.date_list = list;
        start =
            this.offset === 0
                ? startOfWeek(date)
                : startOfWeek(startOfMonth(date));
        list = [];
        while (list.length < 7) {
            list.push({
                id: start.valueOf(),
                is_past: isBefore(start, now),
                is_month: isSameMonth(start, date),
                is_today: isSameDay(Date.now(), start),
            });
            start = addDays(start, 1);
        }
        this.short_list = list;
    }
}
