import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    computed,
    ElementRef,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {
    AsyncHandler,
    endOfDayInTimezone,
    formatTimeInTimezone,
    getTimeInTimezone,
    getTimezoneOffsetString,
    markUserDateChange,
    provideValueAccessor,
    setTimeInTimezone,
    startOfDayInTimezone,
} from '@placeos/common';
import {
    endOfDay,
    format,
    isBefore,
    startOfDay,
    startOfMinute,
} from 'date-fns';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

/** Upper bound on time options in one day (a 25 hour day at a 1 minute step) */
const MAX_TIME_OPTIONS = 25 * 60 + 1;

export interface TimeFieldRange {
    /** Earliest allowed hour of the day (0–24). For example, `8` means 8:00 AM. */
    start: number;
    /** Latest allowed hour of the day (0–24). For example, `17` means 5:00 PM. */
    end: number;
}

/** Coerce a configured hour of the day to a number, or `null` when unusable */
function toHourOfDay(value: unknown): number | null {
    if (value === null || value === undefined || value === '') return null;
    const hour = Number(value);
    return Number.isFinite(hour) ? hour : null;
}

@Component({
    selector: 'a-time-field,time-field',
    template: `
        @if (allow_time_entry()) {
            <div
                class="border-neutral flex h-12 w-full items-center rounded-sm border"
                [class.opacity-30]="disabled() || no_options()"
            >
                <input
                    #time_input
                    type="time"
                    class="h-full min-w-0 flex-1 border-0 bg-transparent px-4"
                    [attr.aria-label]="'FORM.TIME' | translate"
                    [value]="time()"
                    [disabled]="disabled() || no_options()"
                    [attr.aria-invalid]="!!time_entry_error()"
                    (change)="setTypedTime(time_input.value)"
                />
                <button
                    type="button"
                    time-options
                    class="flex h-full w-12 shrink-0 items-center justify-center"
                    [attr.aria-label]="'FORM.TIME_CHOOSE' | translate"
                    [disabled]="disabled() || no_options()"
                    [matMenuTriggerFor]="menu"
                >
                    <icon class="text-2xl">arrow_drop_down</icon>
                </button>
            </div>
            @if (time_entry_error()) {
                <div role="alert" class="text-error text-sm">
                    {{ 'FORM.TIME_ENTRY_ERROR' | translate }}
                </div>
            }
        } @else {
            <button
                type="button"
                time-field
                matRipple
                class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
                [disabled]="disabled() || no_options()"
                [class.opacity-30]="disabled() || no_options()"
                [matMenuTriggerFor]="menu"
            >
                <div
                    class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                >
                    <div class="truncate">
                        {{ active_time() | date: time_format() }}
                    </div>
                    @if (timezone() && tz()) {
                        <div class="truncate text-xs opacity-30">
                            {{
                                active_time()
                                    | date: time_format() + ' (z)' : tz()
                            }}
                        </div>
                    }
                </div>
                <icon class="text-2xl">arrow_drop_down</icon>
            </button>
        }
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            <!-- Lazy content: the options only render while the menu is open -->
            <ng-template matMenuContent>
                @for (option of time_options(); track option.id) {
                    <button
                        type="button"
                        mat-menu-item
                        [attr.data-time]="option.id"
                        [value]="option.id"
                        class="text-left"
                        (click)="setValue(option.id)"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col leading-tight">
                                <div class="">
                                    {{ option.date | date: time_format() }}
                                    {{ extra_info_fn()(option.date) }}
                                </div>
                                @if (timezone() && tz()) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format() + ' (z)'
                                                    : tz()
                                        }}
                                    </div>
                                }
                            </div>
                            @if (active_time() === option.date) {
                                <icon
                                    class="ml-2 text-2xl"
                                    [label]="'COMMON.SELECTED' | translate"
                                >
                                    done
                                </icon>
                            }
                        </div>
                    </button>
                } @empty {
                    <div mat-menu-item disabled>
                        {{ 'FORM.TIME_EMPTY' | translate }}
                    </div>
                }
            </ng-template>
        </mat-menu>
        @if (!no_error()) {
            <mat-error><ng-content /></mat-error>
        }
    `,
    styles: [
        `
            mat-form-field {
                width: 100%;
            }
        `,
    ],
    providers: [provideValueAccessor(() => TimeFieldComponent)],
    imports: [
        CommonModule,
        MatMenuModule,
        MatFormFieldModule,
        IconComponent,
        TranslatePipe,
    ],
})
export class TimeFieldComponent
    extends AsyncHandler
    implements OnInit, OnChanges, AfterViewInit, ControlValueAccessor
{
    /** Time step between each allowed time option */
    public readonly step = input(15);
    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Whether past times are allowed */
    public readonly no_past_times = input(true);
    public readonly use_24hr = input(false);
    public readonly no_error = input<boolean>(undefined);
    public readonly extra_info_fn = input<(t?: number) => string>(
        (_t?: number) => '',
    );
    /** Prevent times before */
    public readonly from = input<number>(startOfDay(Date.now()).valueOf());
    /** Limit selectable times by hour of the day (0–24) */
    public readonly range = input<TimeFieldRange>(undefined);
    /**
     * The bookable hours settings come from zone metadata, so the bounds can be
     * blank (`null`/`''`), non-numeric or empty (`end <= start`). Any of those
     * mean "no restriction" — without this check `null * 60` reads as a
     * 00:00–00:00 window and the only selectable time becomes midnight.
     */
    private readonly _range = computed(() => {
        const range = this.range();
        if (!range) return undefined;
        const start = toHourOfDay(range.start);
        const end = toHourOfDay(range.end);
        if (start === null || end === null || end <= start) return undefined;
        return { start, end };
    });
    /** Minimum booking duration in minutes. When set together with `range`,
     *  the effective end of the selectable window is reduced by this amount
     *  so that only start times that leave room for at least one minimum-
     *  length booking are offered. */
    public readonly min_duration = input(0);
    public readonly timezone = input<string>('');
    /** Allow typing a time, as well as picking one from the list */
    public readonly allow_time_entry = input(false);
    /** Whether the typed time is outside the allowed times */
    public readonly time_entry_error = signal(false);
    /** String representing the currently set time */
    public readonly date = signal(new Date().valueOf());
    /** String representing the currently set time */
    public readonly time = signal(format(new Date(), 'HH:mm'));
    /** Available time blocks for the selected date */
    public readonly _time_options = signal<{ date: number; id: string }[]>([]);
    /** Whether select field should be shown */
    public readonly show_select = signal(false);

    public readonly active_time = signal(Date.now());
    /** Whether there are no available time options */
    public readonly no_options = signal(false);
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** Menu trigger for the time selection dropdown */
    private readonly _menu_trigger = viewChild(MatMenuTrigger);
    /** Typed time input, shown with `allow_time_entry` */
    private readonly _time_input =
        viewChild<ElementRef<HTMLInputElement>>('time_input');

    public readonly time_format = computed(() =>
        this.use_24hr() ? 'HH : mm' : 'h : mm a',
    );

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public readonly tz = computed(() => {
        const tz = this.timezone();
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    });

    public ngOnInit(): void {
        this.show_select.set(true);
        this._time_options.set(
            this.generateAvailableTimes(
                this.date(),
                !this.no_past_times(),
                this.step(),
            ),
        );
        this._updateNoOptions();
        this.timeout('hide', () => this.show_select.set(false));
        const tz = this.timezone() || undefined;
        this.active_time.set(
            this._time_options().find(
                (_) => _.id === formatTimeInTimezone(this.date(), tz),
            )?.date || this.active_time(),
        );
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (
            changes.no_past_times ||
            changes.step ||
            changes.from ||
            changes.range ||
            changes.min_duration
        ) {
            this._time_options.set(
                this.generateAvailableTimes(
                    this.date(),
                    !this.no_past_times(),
                    this.step(),
                ),
            );
            this._updateNoOptions();
        }
    }

    public ngAfterViewInit(): void {
        const trigger = this._menu_trigger();
        if (trigger) {
            this.subscription(
                'menu_opened',
                trigger.menuOpened.subscribe(() => {
                    this._scrollToSelectedTime();
                }),
            );
        }
    }

    /** Scroll the menu to the selected or nearest time option */
    private _scrollToSelectedTime(): void {
        // Use requestAnimationFrame for immediate execution after render
        requestAnimationFrame(() => {
            const trigger = this._menu_trigger();
            if (!trigger?.menu) return;

            const panel = document.querySelector('.mat-mdc-menu-panel');
            if (!panel) return;

            // Find the selected time, or fallback to the nearest time
            const tz = this.timezone() || undefined;
            const target_time =
                this.time() || formatTimeInTimezone(new Date(), tz);
            let target_element = panel.querySelector(
                `[data-time="${target_time}"]`,
            );

            // If exact time not found, find the nearest option
            if (!target_element && this._time_options().length) {
                const current_minutes = this._timeToMinutes(target_time);
                let closest_option = this._time_options()[0];
                let closest_diff = Infinity;

                for (const option of this._time_options()) {
                    const option_minutes = this._timeToMinutes(option.id);
                    const diff = Math.abs(option_minutes - current_minutes);
                    if (diff < closest_diff) {
                        closest_diff = diff;
                        closest_option = option;
                    }
                }

                target_element = panel.querySelector(
                    `[data-time="${closest_option.id}"]`,
                );
            }

            if (target_element) {
                if (typeof target_element.scrollIntoView !== 'function') {
                    return;
                }
                target_element.scrollIntoView({
                    block: 'center',
                    behavior: 'instant',
                });
            }
        });
    }

    /** Convert time string (HH:mm) to minutes since midnight */
    private _timeToMinutes(time_str: string): number {
        const [hours, minutes] = time_str.split(':').map(Number);
        return hours * 60 + minutes;
    }

    /** Available time blocks for the selected date, with the current time when it is off step */
    public readonly time_options = computed(() => {
        const tz = this.timezone() || undefined;
        const time = (this.time() || '00:00').split(':');
        const date_value = setTimeInTimezone(
            this.date(),
            +time[0],
            +time[1],
            tz,
        );
        const { minutes } = getTimeInTimezone(date_value, tz);
        const time_str = formatTimeInTimezone(date_value, tz);
        const time_options = [...this._time_options()];
        if (
            minutes % this.step() !== 0 &&
            this._isWithinRange(date_value) &&
            !time_options.find((t) => t.id === time_str)
        ) {
            time_options.push({
                date: date_value,
                id: time_str,
            });
            time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
        }
        return time_options;
    });

    /**
     * Set the value from a typed `HH:mm` time in the field's timezone. A time
     * outside the allowed times shows an error and does not change the value.
     */
    public setTypedTime(value: string) {
        const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
        const tz = this.timezone() || undefined;
        const date = match
            ? setTimeInTimezone(this.date(), +match[1], +match[2], tz)
            : NaN;
        const too_early =
            this.no_past_times() && date < startOfMinute(Date.now()).valueOf();
        if (!match || too_early || !this._isWithinRange(date)) {
            this.time_entry_error.set(true);
            return;
        }
        this.setValue(value);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this.time_entry_error.set(false);
        this.time.set(new_value);
        // The binding does not update when the time is the same, which leaves
        // a rejected typed time in the input
        const input = this._time_input()?.nativeElement;
        if (input) input.value = new_value;
        const tz = this.timezone() || undefined;
        if (this._onChange) {
            const time = (this.time() || '00:00').split(':');
            const date_value = setTimeInTimezone(
                this.date(),
                +time[0],
                +time[1],
                tz,
            );
            markUserDateChange();
            this._onChange(date_value);
        }

        const time = this.time() || '00:00';
        const time_parts = time.split(':');
        const date_value = setTimeInTimezone(
            this.date(),
            +time_parts[0],
            +time_parts[1],
            tz,
        );
        this.active_time.set(
            this._time_options().find((_) => _.id === time)?.date || date_value,
        );
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date.set(value || this.date());
        const tz = this.timezone() || undefined;
        // Show the written time as it is. An off-step time gets its own option
        const date = startOfMinute(this.date());
        this.time.set(formatTimeInTimezone(date, tz));
        this._time_options.set(
            this.generateAvailableTimes(
                this.date(),
                !this.no_past_times(),
                this.step(),
            ),
        );
        this._updateNoOptions();
        this.active_time.set(
            this._time_options().find((_) => _.id === this.time())?.date ||
                date.valueOf(),
        );
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
        this._time_options.set(
            this.generateAvailableTimes(
                this.date(),
                !this.no_past_times() || disabled,
                this.step(),
            ),
        );
        this._updateNoOptions();
    }

    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    /** Update whether the field should show as disabled due to no options */
    private _updateNoOptions(): void {
        this.no_options.set(
            !this.disabled() &&
                (!this._time_options() || this._time_options().length === 0),
        );
    }

    /**
     * Generate a list of time options for the given date
     * @param datestamp Date to generate options for
     * @param show_past Whether past times should be options
     */
    private generateAvailableTimes(
        datestamp: number,
        show_past: boolean,
        step: number = 15,
    ): { date: number; id: string }[] {
        const min_date = show_past
            ? this.from()
            : Math.max(this.from(), Date.now());
        const blocks = [];
        const time_range = this._range();
        const tz = this.timezone() || undefined;

        // Use timezone-aware day boundaries when a building timezone is set
        const day_start = tz
            ? startOfDayInTimezone(datestamp, tz)
            : startOfDay(datestamp).valueOf();
        const day_end = tz
            ? endOfDayInTimezone(datestamp, tz)
            : endOfDay(datestamp).valueOf();
        const min_dur = this.min_duration() || 0;
        const start_minutes = time_range ? time_range.start * 60 : undefined;
        const end_minutes = time_range ? time_range.end * 60 : undefined;
        const effective_end =
            end_minutes != null && min_dur > 0
                ? end_minutes - min_dur
                : end_minutes;
        const range_start = Math.max(
            day_start,
            min_date,
            start_minutes != null
                ? day_start + start_minutes * 60 * 1000
                : day_start,
        );
        const range_end = Math.min(
            day_end,
            effective_end != null
                ? day_start + effective_end * 60 * 1000
                : day_end,
        );

        if (range_start > range_end) {
            return blocks;
        }

        // Options sit on whole steps from the start of the day
        const step_ms = step * 60 * 1000;
        const first = Math.ceil((range_start - day_start) / step_ms);
        const last = Math.floor((range_end - day_start) / step_ms);
        for (
            let i = first;
            i <= last && blocks.length < MAX_TIME_OPTIONS;
            i++
        ) {
            const date = day_start + i * step_ms;
            blocks.push({ date, id: formatTimeInTimezone(date, tz) });
        }
        return blocks;
    }

    private _isWithinRange(date: Date | number): boolean {
        if (isBefore(date, this.from())) {
            return false;
        }
        const time_range = this._range();
        if (!time_range) {
            return true;
        }
        const start_minutes = time_range.start * 60;
        const end_minutes = time_range.end * 60;
        const min_dur = this.min_duration() || 0;
        const effective_end = min_dur > 0 ? end_minutes - min_dur : end_minutes;
        const tz = this.timezone() || undefined;
        const { hours, minutes } = getTimeInTimezone(date, tz);
        const mins = hours * 60 + minutes;
        if (mins < start_minutes || mins > effective_end) {
            return false;
        }
        return true;
    }
}
