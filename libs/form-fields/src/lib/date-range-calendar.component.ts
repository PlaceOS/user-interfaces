import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    input,
    linkedSignal,
    model,
    OnChanges,
    OnInit,
    output,
    signal,
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
            (mouseleave)="clearHoveredDate()"
        >
            <div
                class="border-base-200 col-span-full grid grid-cols-7 border-b"
            >
                @for (weekday of weekdays(); track weekday) {
                    <div
                        weekday
                        class="relative flex items-center justify-center text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEE' }}
                    </div>
                }
            </div>
            @for (day of month_days(); track trackByFn($index, day)) {
                <button
                    class="hover:bg-base-200 relative h-9 w-9 rounded-full"
                    [class.text-secondary-content]="day.is_start || day.is_end"
                    [disabled]="day.disabled"
                    (click)="selectDate(day.id)"
                    (mouseenter)="setHoveredDate(day.id)"
                >
                    @if (day.is_selected && !day.is_start && !day.is_end) {
                        <div
                            class="border-base-content bg-base-200 absolute -inset-x-0.5 inset-y-0 border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_end && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start || day.is_end) {
                        <div
                            class="bg-secondary absolute inset-0 z-10 flex items-center justify-center rounded-full"
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
                            class="border-secondary absolute -inset-[3px] z-10 flex items-center justify-center rounded-full border"
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
    /** Maximum number of days allowed in the selected range (default: 31 days / ~1 month) */
    public readonly max_range_days = input(31);
    /** Start date of the selected range */
    public readonly startInput = input<number>(undefined, { alias: 'start' });
    public readonly start = linkedSignal(this.startInput);
    /** End date of the selected range */
    public readonly endInput = input<number>(undefined, { alias: 'end' });
    public readonly end = linkedSignal(this.endInput);
    /** Month to display the calendar for */
    public readonly month = model(startOfDay(Date.now()).valueOf());
    /** Emitter for when the start date changes */
    public readonly startChange = output<number>();
    /** Emitter for when the end date changes */
    public readonly endChange = output<number>();

    /** Whether user is actively selecting end date (after clicking start) */
    private _selecting_end = false;
    /** Hovered date for preview during end selection */
    public readonly hovered_date = signal<number | null>(null);

    public readonly weekdays = signal<Date[]>([]);
    public readonly month_days = signal<any[]>([]);

    public readonly end_after_start = computed(() => {
        const start = this.start();
        const end = this._selecting_end ? this.hovered_date() : this.end();
        return !!start && !!end && end > start && !isSameDay(end, start);
    });

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
        if (changes.end) {
            if (!this._selecting_end) {
                this._setMonthDays();
            }
        }
    }

    public selectDate(date: number) {
        const start = this.start();
        const max_days = this.max_range_days();

        if (this._selecting_end) {
            if (date >= start) {
                let end_date = date;
                if (max_days > 0) {
                    const max_end_date = addDays(start, max_days - 1).valueOf();
                    end_date = Math.min(date, max_end_date);
                }
                this.end.set(end_date);
                this.endChange.emit(end_date);
            } else {
                this.start.set(date);
                this.startChange.emit(date);
                this.end.set(null);
            }
            this._selecting_end = false;
            this.hovered_date.set(null);
        } else {
            this.start.set(date);
            this.startChange.emit(date);
            this.end.set(null);
            this._selecting_end = true;
        }
        this._setMonthDays();
    }

    public setHoveredDate(date: number) {
        if (!this._selecting_end) return;
        const start = this.start();
        const max_days = this.max_range_days();

        if (start && max_days > 0) {
            const max_end_date = addDays(start, max_days - 1).valueOf();
            this.hovered_date.set(Math.min(date, max_end_date));
        } else {
            this.hovered_date.set(date);
        }
        this._setMonthDays();
    }

    public clearHoveredDate() {
        if (!this._selecting_end) return;
        this.hovered_date.set(null);
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
        const week_start = startOfWeek(startOfMonth(this.month()), {
            weekStartsOn: this.offset_weekday() as any,
        });
        const range_start = this.start();
        const range_end = this._selecting_end
            ? this.hovered_date()
            : this.end();
        const from_date = this.from_date();
        const to_date = this.to_date();
        const max_days = this.max_range_days();

        const max_end_date =
            this._selecting_end && range_start && max_days > 0
                ? addDays(range_start, max_days - 1).valueOf()
                : null;

        this.month_days.set(
            Array.from(Array(7 * 6).keys()).map((i) => {
                const date = addDays(week_start, i).valueOf();
                const is_start = range_start && isSameDay(date, range_start);

                const exceeds_max_range =
                    this._selecting_end &&
                    range_start &&
                    max_end_date &&
                    date > max_end_date;

                const is_end =
                    range_end &&
                    range_start &&
                    range_end >= range_start &&
                    isSameDay(date, range_end);
                const is_selected =
                    range_end &&
                    range_start &&
                    range_end >= range_start &&
                    date >= startOfDay(range_start).valueOf() &&
                    date <= endOfDay(range_end).valueOf();

                return {
                    id: date,
                    disabled:
                        (from_date && isBefore(date, from_date)) ||
                        (to_date && isAfter(date, to_date)) ||
                        exceeds_max_range,
                    is_today: isSameDay(date, Date.now()),
                    is_start,
                    is_end,
                    is_month: isSameMonth(date, this.month()),
                    is_selected,
                };
            }),
        );
    }

    private _setWeekdays() {
        const start = startOfWeek(Date.now(), {
            weekStartsOn: this.offset_weekday() as any,
        });
        this.weekdays.set(
            Array.from(Array(7).keys()).map((i) => addDays(start, i)),
        );
    }
}
