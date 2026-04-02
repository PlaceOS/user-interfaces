import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    forwardRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { AsyncHandler, SettingsService } from '@placeos/common';
import {
    addDays,
    addMonths,
    differenceInMonths,
    isBefore,
    isSameMonth,
    set,
    startOfDay,
    startOfMonth,
    startOfWeek,
} from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';

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
                <button
                    class="pr-2 pl-1.5 font-medium"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ display_date() | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="displayed_dates()[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="displayed_dates()[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="border-base-200 mb-2 flex items-center border-b pb-2 text-sm"
            >
                @for (day of displayed_dates() | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of displayed_dates(); track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-200]="day.id !== active_date()"
                        [class.text-base-300!]="!day.is_month"
                        [class.text-secondary-content]="
                            day.id === active_date()
                        "
                        [class.text-base-content]="day.id !== active_date()"
                        [class.bg-secondary]="day.id === active_date()"
                        [class.font-normal]="day.id !== active_date()"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="border-secondary absolute -inset-0.5 z-20 overflow-hidden rounded-full border"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
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
    imports: [CommonModule, IconComponent, MatRippleModule],
})
export class DateCalendarComponent
    extends AsyncHandler
    implements ControlValueAccessor, OnChanges, OnInit
{
    private _settings = inject(SettingsService);

    public readonly from = input(0);
    public readonly to = input(Date.now() * 10);
    public readonly offset_weekday = input(0);
    public readonly today = startOfDay(Date.now()).valueOf();
    public readonly date = signal(Date.now());
    public readonly active_date = signal(startOfDay(Date.now()).valueOf());
    public readonly offset = signal(0);
    public readonly date_list = signal<DateItem[]>([]);
    public readonly displayed_dates = this.date_list.asReadonly();
    public readonly display_date = computed(
        () => this.displayed_dates()[6]?.id || this.date(),
    );

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    constructor() {
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
        if (new_value < this.from() || new_value >= this.to()) return;
        const date = new Date(new_value);
        this.date.set(
            set(this.date(), {
                date: date.getDate(),
                month: date.getMonth(),
                year: date.getFullYear(),
            }).valueOf(),
        );
        this.active_date.set(startOfDay(this.date()).valueOf());
        if (this._onChange) this._onChange(new_value);
    }

    public writeValue(value: number) {
        this.date.set(value);
        this.active_date.set(startOfDay(value).valueOf());
        this.offset.set(0);
        this.generateDates();
    }

    public changeMonth(change: number) {
        this.offset.update((value) => value + change);
        this.generateDates();
    }

    public setMonthToCurrent() {
        const diff = differenceInMonths(this.date(), startOfMonth(Date.now()));
        this.offset.set(-diff);
        this.generateDates();
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    public generateDates() {
        const offset =
            this._settings.get('app.week_start') || this.offset_weekday();
        const date = addMonths(this.date(), this.offset());
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
        this.date_list.set(list);
    }
}
