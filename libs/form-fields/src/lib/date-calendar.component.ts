import {
    Component,
    Input,
    SimpleChanges,
    forwardRef,
    OnChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    addDays,
    addMonths,
    isBefore,
    isSameMonth,
    set,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

interface DateItem {
    id: number;
    is_past: boolean;
    is_month: boolean;
}

@Component({
    selector: 'date-calendar',
    template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <div class="pl-1.5 pr-2 font-medium">
                    {{ date_list[6]?.id || date | date: 'LLLL YYYY' }}
                </div>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="date_list[0]?.id < from"
                        (click)="changeMonth(-1)"
                    >
                        <app-icon>chevron_left</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="date_list[34]?.id > to"
                        (click)="changeMonth(1)"
                    >
                        <app-icon>chevron_right</app-icon>
                    </button>
                </div>
            </div>
            <div
                class="flex items-center text-sm mb-2 pb-2 border-b border-base-200"
            >
                <div
                    class="flex-1 opacity-60 text-center"
                    *ngFor="let day of date_list | slice: 0:7"
                >
                    {{ day?.id | date: 'EE' }}
                </div>
            </div>
            <div class="flex items-center justify-between flex-wrap">
                <button
                    icon
                    name="schedule-set-date"
                    class="min-w-[14%] w-9 h-9 relative overflow-visible my-0.5"
                    *ngFor="let day of date_list"
                    [class.hover:bg-base-100]="day.id !== active_date"
                    [class.!text-base-300]="!day.is_month"
                    [class.text-secondary-content]="day.id === active_date"
                    [class.text-base-content]="day.id !== active_date"
                    [class.bg-secondary]="day.id === active_date"
                    [class.font-normal]="day.id !== active_date"
                    (click)="setValue(day.id)"
                    [disabled]="day.id < from || day.id > to"
                >
                    {{ day.id | date: 'd' }}
                    <div
                        class="absolute -inset-[2px] border border-secondary rounded-full overflow-hidden"
                        matRipple
                        *ngIf="today === day.id"
                    ></div>
                    <div
                        class="absolute inset-0 overflow-hidden rounded-full"
                        matRipple
                    ></div>
                </button>
            </div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DateCalendarComponent),
            multi: true,
        },
    ],
})
export class DateCalendarComponent
    extends AsyncHandler
    implements ControlValueAccessor, OnChanges
{
    @Input() public from = 0;
    @Input() public to = Date.now() * 10;
    @Input() public offset_weekday = 0;
    public readonly today = startOfDay(Date.now()).valueOf();
    public date: number = Date.now();
    public active_date: number = startOfDay(Date.now()).valueOf();
    public offset = 0;
    public date_list: DateItem[] = [];

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    constructor(private _settings: SettingsService) {
        super();
    }

    public ngOnInit() {
        this.generateDates();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.offset_weekday) {
            this.generateDates();
        }
    }

    public setValue(new_value: number) {
        if (new_value < this.from || new_value >= this.to) return;
        const date = new Date(new_value);
        this.date = set(this.date, {
            date: date.getDate(),
            month: date.getMonth(),
            year: date.getFullYear(),
        }).valueOf();
        this.active_date = startOfDay(this.date).valueOf();
        if (this._onChange) this._onChange(new_value);
    }

    public writeValue(value: number) {
        this.date = value;
        this.active_date = startOfDay(value).valueOf();
        this.offset = 0;
        this.generateDates();
    }

    public changeMonth(change: number) {
        this.offset += change;
        this.generateDates();
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    public generateDates() {
        const offset =
            this._settings.get('app.week_start') || this.offset_weekday;
        const date = addMonths(this.date, this.offset);
        let start = startOfWeek(startOfMonth(date), {
            weekStartsOn: offset as any,
        });
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
