import { CommonModule } from '@angular/common';
import {
    Component,
    OnChanges,
    OnInit,
    SimpleChanges,
    input,
    model,
    output,
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
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: `date-range-calendar`,
    template: `
        <div class="flex items-center justify-between">
            <div month class="px-2 font-medium">
                {{ month() | date: 'MMMM yyyy' }}
            </div>
            <div class="flex items-center space-x-2">
                <button icon matRipple (click)="previousMonth()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextMonth()">
                    <icon>chevron_right</icon>
                </button>
            </div>
        </div>
        <div
            class="grid h-[17.25rem] w-[17.25rem] grid-cols-7 grid-rows-7 gap-1"
        >
            <div
                class="col-span-full grid grid-cols-7 border-b border-base-200"
            >
                @for (weekday of weekdays; track weekday) {
                    <div
                        weekday
                        class="relative flex items-center justify-center text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEE' }}
                    </div>
                }
            </div>
            @for (day of month_days; track trackByFn($index, day)) {
                <button
                    class="relative h-9 w-9 rounded-full hover:bg-base-200"
                    [class.text-secondary-content]="day.is_start || day.is_end"
                    [disabled]="day.disabled"
                    (click)="selectDate(day.id)"
                    (mouseenter)="setHoveredDate(day.id)"
                >
                    @if (day.is_selected && !day.is_start && !day.is_end) {
                        <div
                            class="absolute -inset-x-0.5 inset-y-0 border-y border-dashed border-base-content bg-base-200"
                        ></div>
                    }
                    @if (day.is_start && end_after_start) {
                        <div
                            class="absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-dashed border-base-content bg-base-200"
                        ></div>
                    }
                    @if (day.is_end && end_after_start) {
                        <div
                            class="absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-dashed border-base-content bg-base-200"
                        ></div>
                    }
                    @if (day.is_start || day.is_end) {
                        <div
                            class="absolute inset-0 z-10 flex items-center justify-center rounded-full bg-secondary"
                        ></div>
                    }
                    <div
                        matRipple
                        class="absolute inset-0 z-20 flex items-center justify-center rounded-full"
                        [class.opacity-30]="!day.is_month"
                    >
                        {{ day.id | date: 'd' }}
                    </div>
                    @if (day.is_today) {
                        <div
                            class="absolute -inset-[3px] z-10 flex items-center justify-center rounded-full border border-secondary"
                        ></div>
                    }
                </button>
            }
        </div>
    `,
    styles: [``],
    imports: [CommonModule, IconComponent],
})
export class DateRangeCalendarComponent implements OnInit, OnChanges {
    /** Earliest date available the user is allowed to pick */
    public readonly from_date = input<number>(
        startOfDay(Date.now()).valueOf(),
        { alias: 'from' },
    );
    /** Latest date available the user is allowed to pick */
    public readonly to_date = input<number>(undefined, { alias: 'to' });
    /** Index of the day to start the week on when displaying the calendar */
    public readonly offset_weekday = input(0);
    /** Start date of the selected range */
    public readonly start = model<number>(undefined);
    /** End date of the selected range */
    public readonly end = model<number>(undefined);
    /** Month to display the calendar for */
    public readonly month = model(startOfDay(Date.now()).valueOf());
    /** Emitter for when the start date changes */
    public readonly startChange = output<number>();
    /** Emitter for when the end date changes */
    public readonly endChange = output<number>();

    public hovered_date = null;

    public weekdays = [];
    public month_days = [];

    public get end_after_start() {
        const end = this.end();
        return end && end > this.start() && !isSameDay(end, this.start());
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
            this.month.set(this.start() || Date.now());
        }
        if (changes.month) {
            this._setMonthDays();
        }
        if (changes.end) this._setMonthDays();
    }

    public selectDate(date: number) {
        const start = this.start();
        if (!start || date < start) {
            this.start.set(date);
            this.startChange.emit(date);
        } else {
            this.end.set(date);
            this.endChange.emit(date);
        }
        this._setMonthDays();
    }

    public setHoveredDate(date: number) {
        if (!this.start()) return;
        this.end.set(date);
        this._setMonthDays();
    }

    public trackByFn(index: number, day: { id: string }) {
        return day.id;
    }

    public nextMonth() {
        this.month.set(addMonths(this.month(), 1).valueOf());
        this._setMonthDays();
    }

    public previousMonth() {
        this.month.set(addMonths(this.month(), -1).valueOf());
        this._setMonthDays();
    }

    private _setMonthDays() {
        const start = startOfWeek(startOfMonth(this.month()), {
            weekStartsOn: this.offset_weekday() as any,
        });
        this.month_days = Array.from(Array(7 * 6).keys()).map((i) => {
            const date = addDays(start, i).valueOf();
            const end = this.end();
            const from_date = this.from_date();
            const to_date = this.to_date();
            return {
                id: date,
                disabled:
                    (from_date && isBefore(date, from_date)) ||
                    (to_date && isAfter(date, to_date)),
                is_today: isSameDay(date, Date.now()),
                is_start: isSameDay(date, this.start()),
                is_end: isSameDay(date, this.end()),
                is_month: isSameMonth(date, this.month()),
                is_selected:
                    end &&
                    date >= startOfDay(this.start()).valueOf() &&
                    date <= endOfDay(end).valueOf(),
            };
        });
    }

    private _setWeekdays() {
        const start = startOfWeek(Date.now(), {
            weekStartsOn: this.offset_weekday() as any,
        });
        this.weekdays = Array.from(Array(7).keys()).map((i) =>
            addDays(start, i),
        );
    }
}
