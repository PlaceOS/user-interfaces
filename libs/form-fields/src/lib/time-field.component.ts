import { CommonModule } from '@angular/common';
import {
    AfterViewInit,
    Component,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    SimpleChanges,
    viewChild,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule, MatMenuTrigger } from '@angular/material/menu';
import {
    AsyncHandler,
    getTimezoneOffsetString,
    Identity,
} from '@placeos/common';
import {
    addMinutes,
    endOfDay,
    format,
    isAfter,
    isSameDay,
    roundToNearestMinutes,
    set,
    startOfDay,
    startOfMinute,
} from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';

@Component({
    selector: 'a-time-field,time-field',
    template: `
        <button
            time-field
            matRipple
            class="flex h-12 w-full items-center justify-between rounded-sm border border-neutral px-2"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time | date: time_format }}
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ active_time | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @if (force_time()) {
                <button
                    mat-menu-item
                    [value]="force_time()"
                    class="text-left"
                    (click)="setValue(force_time())"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time() | date: time_format }}
                            </div>
                            @if (timezone() && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time()
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === force_time()) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options; track option.id) {
                <button
                    mat-menu-item
                    [attr.data-time]="option.id"
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format }}
                                {{ extra_info_fn()(option.date) }}
                            </div>
                            @if (timezone() && tz) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
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
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => TimeFieldComponent),
            multi: true,
        },
    ],
    imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent],
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
    public readonly force_time = input<number>(undefined);
    public readonly no_error = input<boolean>(undefined);
    public readonly extra_info_fn = input((t?: number) => '');
    /** Prevent times before */
    public readonly from = input<number>(startOfDay(Date.now()).valueOf());
    public readonly timezone = input<string>('');
    /** String representing the currently set time */
    public date: number = new Date().valueOf();
    /** String representing the currently set time */
    public time: string = format(new Date(), 'HH:mm');
    /** Available time blocks for the selected date */
    public _time_options: any[];
    /** Whether select field should be shown */
    public show_select: boolean;

    public active_time: number = Date.now();
    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /** Menu trigger for the time selection dropdown */
    private readonly _menu_trigger = viewChild(MatMenuTrigger);

    public get time_format() {
        return this.use_24hr() ? 'HH : mm' : 'h : mm a';
    }

    private _local_tz = getTimezoneOffsetString(
        Intl.DateTimeFormat().resolvedOptions().timeZone,
    );

    public get tz() {
        const tz = this.timezone();
        if (!tz) return '';
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? '' : tz_offset;
    }

    public ngOnInit(): void {
        this.show_select = true;
        this._time_options = this.generateAvailableTimes(
            this.date,
            !this.no_past_times(),
            this.step(),
        );
        this.timeout('hide', () => (this.show_select = false));
        this.active_time =
            this._time_options.find((_) => _.id === format(this.date, 'HH:mm'))
                ?.date || this.active_time;
    }

    public ngOnChanges(changes: SimpleChanges): void {
        if (changes.no_past_times || changes.step || changes.from) {
            this._time_options = this.generateAvailableTimes(
                this.date,
                !this.no_past_times(),
                this.step(),
            );
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
            const target_time = this.time || format(new Date(), 'HH:mm');
            let target_element = panel.querySelector(
                `[data-time="${target_time}"]`,
            );

            // If exact time not found, find the nearest option
            if (!target_element && this._time_options?.length) {
                const current_minutes = this._timeToMinutes(target_time);
                let closest_option = this._time_options[0];
                let closest_diff = Infinity;

                for (const option of this._time_options) {
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

    /** Available time blocks for the selected date */
    public get time_options() {
        const time = (this.time || '00:00').split(':');
        const date = set(this.date, { hours: +time[0], minutes: +time[1] });
        if (
            date.getMinutes() % 15 !== 0 &&
            !this._time_options.find(
                (time) => time.id === format(date, 'HH:mm'),
            )
        ) {
            this._time_options.push({
                date,
                id: format(date, 'HH:mm'),
            });
            this._time_options.sort((a, b) =>
                `${a.id}`.localeCompare(`${b.id}`),
            );
        }
        return this._time_options;
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: string): void {
        this.time = new_value;
        if (this._onChange) {
            const time = (this.time || '00:00').split(':');
            const date = startOfMinute(
                set(this.date, { hours: +time[0], minutes: +time[1] }),
            );
            this._onChange(date.valueOf());
        }

        const time = this.force_time() || this.time;
        const date = startOfMinute(
            set(this.date, { hours: +time[0], minutes: +time[1] }),
        );
        this.active_time =
            this._time_options.find((_) => _.id === time)?.date || date;
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.date = value || this.date;
        let date = startOfMinute(this.date);
        date = roundToNearestMinutes(date, { nearestTo: 5 });
        this.time = format(date, 'HH:mm');
        this._time_options = this.generateAvailableTimes(
            this.date,
            !this.no_past_times(),
            this.step(),
        );
        const time = this.force_time() || this.time;
        this.active_time =
            this._time_options.find((_) => _.id === time)?.date || date;
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
        this._time_options = this.generateAvailableTimes(
            this.date,
            !this.no_past_times() || disabled,
            this.step(),
        );
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

    /**
     * Generate a list of time options for the given date
     * @param datestamp Date to generate options for
     * @param show_past Whether past times should be options
     */
    private generateAvailableTimes(
        datestamp: number,
        show_past: boolean,
        step: number = 15,
    ): Identity[] {
        const now = new Date(Math.max(this.from(), Date.now()));
        let date = new Date(datestamp);
        const blocks = [];
        if (show_past || (!isSameDay(date, now) && isAfter(date, now))) {
            date = startOfDay(date);
        } else if (isAfter(date, now)) {
            date = new Date(now);
        }
        date = roundToNearestMinutes(date, { nearestTo: step as any });
        const end = endOfDay(date);
        // Add options for the rest of the day
        while (isAfter(end, date)) {
            blocks.push({
                date: date.valueOf(),
                id: format(date, 'HH:mm'),
            });
            date = addMinutes(date, step);
        }
        return blocks;
    }
}
