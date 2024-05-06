import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import {
    addDays,
    addMonths,
    endOfDay,
    isAfter,
    isBefore,
    isSameDay,
    isSameMonth,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';

@Component({
    selector: `date-range-calendar`,
    template: `
        <div class="flex items-center justify-between">
            <div month class="font-medium px-2">
                {{ month | date: 'MMMM yyyy' }}
            </div>
            <div class="flex items-center space-x-2">
                <button icon matRipple (click)="previousMonth()">
                    <app-icon>chevron_left</app-icon>
                </button>
                <button icon matRipple (click)="nextMonth()">
                    <app-icon>chevron_right</app-icon>
                </button>
            </div>
        </div>
        <div
            class="grid grid-cols-7 grid-rows-7 gap-1 w-[17.25rem] h-[17.25rem]"
        >
            <div
                class="col-span-full grid grid-cols-7 border-b border-base-200"
            >
                <div
                    weekday
                    *ngFor="let weekday of weekdays"
                    class="relative flex items-center justify-center text-sm opacity-60"
                >
                    {{ weekday | date: 'EEE' }}
                </div>
            </div>
            <button
                *ngFor="let day of month_days; trackBy: trackByFn"
                class="relative h-9 w-9 hover:bg-base-200 rounded-full"
                [class.text-secondary-content]="day.is_start || day.is_end"
                [disabled]="day.disabled"
                (click)="selectDate(day.id)"
                (mouseenter)="setHoveredDate(day.id)"
            >
                <div
                    *ngIf="day.is_selected && !day.is_start && !day.is_end"
                    class="absolute inset-y-0 -inset-x-0.5 border-y border-base-content border-dashed bg-base-200"
                ></div>
                <div
                    *ngIf="day.is_start && end_after_start"
                    class="absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-base-content border-dashed bg-base-200"
                ></div>
                <div
                    *ngIf="day.is_end && end_after_start"
                    class="absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-base-content border-dashed bg-base-200"
                ></div>
                <div
                    *ngIf="day.is_start || day.is_end"
                    class="absolute inset-0 flex items-center justify-center bg-secondary rounded-full z-10"
                ></div>
                <div
                    matRipple
                    class="absolute inset-0 flex items-center justify-center rounded-full z-20"
                    [class.opacity-30]="!day.is_month"
                >
                    {{ day.id | date: 'd' }}
                </div>
                <div
                    *ngIf="day.is_today"
                    class="absolute -inset-[3px] flex items-center justify-center border border-secondary rounded-full z-10"
                ></div>
            </button>
        </div>
    `,
    styles: [``],
})
export class DateRangeCalendarComponent {
    /** Earliest date available the user is allowed to pick */
    @Input('from') public from_date: number = startOfDay(Date.now()).valueOf();
    /** Latest date available the user is allowed to pick */
    @Input('to') public to_date: number;
    /** Index of the day to start the week on when displaying the calendar */
    @Input() public offset_weekday: number = 0;
    /** Start date of the selected range */
    @Input() public start: number;
    /** End date of the selected range */
    @Input() public end: number;
    /** Month to display the calendar for */
    @Input() public month = startOfDay(Date.now()).valueOf();
    /** Emitter for when the start date changes */
    @Output() public startChange = new EventEmitter<number>();
    /** Emitter for when the end date changes */
    @Output() public endChange = new EventEmitter<number>();

    public hovered_date = null;

    public weekdays = [];
    public month_days = [];

    public get end_after_start() {
        return (
            this.end &&
            this.end > this.start &&
            !isSameDay(this.end, this.start)
        );
    }

    public ngOnInit() {
        this._setWeekdays();
        this._setMonthDays();
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.offset_weekday) {
            this._setWeekdays();
            this._setMonthDays();
        }
        if (changes.start) {
            this._setMonthDays();
            this.month = this.start || Date.now();
        }
        if (changes.month) {
            this._setMonthDays();
        }
        if (changes.end) this._setMonthDays();
    }

    public selectDate(date: number) {
        if (!this.start || date < this.start) {
            this.start = date;
            this.startChange.emit(date);
        } else {
            this.end = date;
            this.endChange.emit(date);
        }
        this._setMonthDays();
    }

    public setHoveredDate(date: number) {
        if (!this.start) return;
        this.end = date;
        this._setMonthDays();
    }

    public trackByFn(index: number, day: any) {
        return day.id;
    }

    public nextMonth() {
        this.month = addMonths(this.month, 1).valueOf();
        this._setMonthDays();
    }

    public previousMonth() {
        this.month = addMonths(this.month, -1).valueOf();
        this._setMonthDays();
    }

    private _setMonthDays() {
        const start = startOfWeek(startOfMonth(this.month), {
            weekStartsOn: this.offset_weekday as any,
        });
        this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
            const date = addDays(start, i).valueOf();
            return {
                id: date,
                disabled:
                    (this.from_date && isBefore(date, this.from_date)) ||
                    (this.to_date && isAfter(date, this.to_date)),
                is_today: isSameDay(date, Date.now()),
                is_start: isSameDay(date, this.start),
                is_end: isSameDay(date, this.end),
                is_month: isSameMonth(date, this.month),
                is_selected:
                    this.end &&
                    date >= startOfDay(this.start).valueOf() &&
                    date <= endOfDay(this.end).valueOf(),
            };
        });
    }

    private _setWeekdays() {
        const start = startOfWeek(Date.now(), {
            weekStartsOn: this.offset_weekday as any,
        });
        this.weekdays = Array.from(Array(7).keys()).map((i) =>
            addDays(start, i)
        );
    }
}
