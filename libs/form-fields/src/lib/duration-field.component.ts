import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import {
    AbstractControl,
    ControlValueAccessor,
    NG_VALIDATORS,
    NG_VALUE_ACCESSOR,
    ValidationErrors,
    Validator,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {
    formatDuration,
    getTimeInTimezone,
    getTimezoneOffsetString,
} from '@placeos/common';
import { addMinutes, differenceInMinutes, format, set } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';

export interface DurationOption {
    id: number;
    name: string;
    date?: number;
}

@Component({
    selector: 'a-duration-field,duration-field',
    template: `
        @if (allow_end_time() && time() != null && !force()) {
            <div
                class="border-neutral flex h-12 w-full items-center rounded-sm border"
                [class.opacity-30]="disabled() || no_options()"
            >
                <input
                    #end_input
                    type="time"
                    aria-label="End time"
                    class="h-full min-w-0 flex-1 border-0 bg-transparent px-4"
                    [value]="end_time_value()"
                    [disabled]="disabled() || no_options()"
                    [attr.aria-invalid]="!!end_time_error()"
                    (change)="setEndTime(end_input.value)"
                    (blur)="touch()"
                />
                <button
                    type="button"
                    end-time-options
                    aria-label="Choose duration"
                    class="flex h-full w-12 shrink-0 items-center justify-center"
                    [disabled]="disabled() || no_options()"
                    [matMenuTriggerFor]="menu"
                >
                    <icon class="text-2xl">arrow_drop_down</icon>
                </button>
            </div>
            @if (timezone() && tz()) {
                <div class="text-xs opacity-30">
                    {{
                        time() + duration() * 60000
                            | date: time_format() + ' (z)' : tz()
                    }}
                </div>
            }
            @if (end_time_error()) {
                <div role="alert" class="text-error text-sm">
                    {{ end_time_error() }}
                </div>
            }
        } @else {
            <button
                type="button"
                duration-field
                class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
                [disabled]="disabled() || no_options()"
                [class.opacity-30]="disabled() || no_options()"
                matRipple
                [matMenuTriggerFor]="menu"
            >
                <div
                    class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                >
                    <div class="truncate">
                        {{
                            selected()?.date
                                ? (selected()?.date
                                      | date
                                          : (selected().id >= 24 * 60
                                                ? 'mediumDate'
                                                : time_format())) + ' ('
                                : duration_options()?.length
                                  ? ''
                                  : 'No duration options available'
                        }}{{ selected()?.name
                        }}{{ selected()?.date ? ')' : '' }}
                    </div>
                    @if (timezone() && tz()) {
                        <div class="truncate text-xs opacity-30">
                            {{
                                selected()?.date
                                    | date: time_format() + ' (z)' : tz()
                            }}
                        </div>
                    }
                </div>
                <icon class="text-2xl">arrow_drop_down</icon>
            </button>
        }
        <mat-menu
            #menu="matMenu"
            xPosition="before"
            class="max-h-60 min-w-[18rem]"
        >
            @for (option of duration_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    class="text-left"
                    [attr.data-duration]="option.id"
                    (click)="setValue(option.id); touch()"
                >
                    <div class="flex items-center justify-between">
                        @if (!force()) {
                            <div class="flex flex-col leading-tight">
                                <div class="truncate">
                                    {{
                                        option.date
                                            ? (option.date
                                                  | date
                                                      : (option.id >= 24 * 60
                                                            ? 'mediumDate'
                                                            : time_format())) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone() && tz()) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format() + ' (z)'
                                                    : tz()
                                        }}
                                    </div>
                                }
                            </div>
                        }
                        <div>{{ force() }}</div>
                        @if (selected()?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No duration options to select</div>
            }
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `,
    styles: [
        `
            :host {
                width: 100%;
            }

            :host.no-subscript {
                mat-error {
                    display: none;
                }
            }

            mat-form-field {
                width: 100%;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DurationFieldComponent),
            multi: true,
        },
        {
            provide: NG_VALIDATORS,
            useExisting: forwardRef(() => DurationFieldComponent),
            multi: true,
        },
    ],
    imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent],
})
export class DurationFieldComponent
    implements OnInit, OnChanges, ControlValueAccessor, Validator
{
    /** Maximum duration option available */
    public readonly max = input(240);
    /** Minimum duration option available */
    public readonly min = input(30);
    /** Step value between options */
    public readonly step = input(15);
    /** Reference time for displaying next to durations */
    public readonly time = input<number>(undefined);
    /** Whether form field is disabled */
    public readonly disabled = model<boolean>(undefined);
    /** Special case prepopulation i.e. out of step options */
    public readonly custom_options = input<number[]>([]);
    /** Force the display duration value */
    public readonly force = input<string>(undefined);
    /** Whether to use 24 hour time when formatting displayed time */
    public readonly use_24hr = input(false);
    /** Display extra information for displayed times for timezone */
    public readonly timezone = input('');
    /** Latest selectable end time as hour of the day (0–24) */
    public readonly end_time = input<number>(undefined);

    /** Allow direct end-time entry on the reference date, in local time. */
    public readonly allow_end_time = input(false);
    public readonly end_time_error = signal('');
    public readonly end_time_value = computed(() =>
        this.time() != null
            ? format(addMinutes(this.time(), this.duration()), 'HH:mm')
            : '',
    );

    public readonly duration = signal(60);
    /** List of available duration options */
    public readonly duration_options = signal<DurationOption[]>([]);
    /** Whether there are no available duration options */
    public readonly no_options = signal(false);

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;
    /** Form control validator change handler */
    private _onValidatorChange: () => void;

    public readonly time_format = computed(() =>
        this.use_24hr() ? 'HH : mm' : 'h : mm a',
    );

    public readonly selected = computed(() =>
        this.duration_options().find((_) => _.id === this.duration()),
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
        this._setDurationOptions();
        this._updateNoOptions();
        this._updateOption();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this._clearEndTimeError();
        /* istanbul ignore else */
        if (
            changes.max ||
            changes.min ||
            changes.step ||
            changes.time ||
            changes.custom_options ||
            changes.end_time ||
            changes.timezone
        ) {
            this._setDurationOptions();
            this._updateNoOptions();
            this._updateOption();
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        this._clearEndTimeError();
        this.duration.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(+new_value);
        }
    }

    public touch(): void {
        this._onTouch?.(this.duration());
    }

    /** Convert a local end time on the reference date to a duration in minutes. */
    public setEndTime(value: string): void {
        const start = this.time();
        if (
            !this.allow_end_time() ||
            start == null ||
            this.disabled() ||
            this.no_options()
        )
            return;
        const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
        const end = match
            ? set(start, {
                  hours: +match[1],
                  minutes: +match[2],
                  seconds: 0,
                  milliseconds: 0,
              })
            : undefined;
        const duration = end ? differenceInMinutes(end, start) : NaN;
        if (
            !Number.isFinite(duration) ||
            duration <= 0 ||
            duration < this.min() ||
            duration > this._effectiveMax(this.max(), start)
        ) {
            this.end_time_error.set(
                'Enter an end time after the start time and within the allowed duration.',
            );
            this._onValidatorChange?.();
            this.touch();
            return;
        }
        this.setValue(duration);
        this._setDurationOptions();
        this._updateNoOptions();
        this.touch();
    }

    private _clearEndTimeError(): void {
        if (!this.end_time_error()) return;
        this.end_time_error.set('');
        this._onValidatorChange?.();
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this._clearEndTimeError();
        this.duration.set(value);
        this._setDurationOptions();
        this._updateNoOptions();
        this._updateOption();
    }

    private _setDurationOptions() {
        this.duration_options.set(
            this.generateDurationOptions(this.max(), this.min(), this.step()),
        );
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
        this._updateNoOptions();
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: number) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: number) => void): void {
        this._onTouch = fn;
    }

    /** Mark the control invalid when the selected date has no valid durations. */
    public validate(_: AbstractControl): ValidationErrors | null {
        if (this.no_options()) return { no_duration_options: true };
        return this.end_time_error() ? { invalid_end_time: true } : null;
    }

    public registerOnValidatorChange(fn: () => void): void {
        this._onValidatorChange = fn;
    }

    private generateDurationOptions(max: number, min: number, step: number) {
        const blocks: DurationOption[] = [];
        let time = min;
        const timeValue = this.time();
        const date = timeValue ? timeValue : null;
        const effective_max = this._effectiveMax(max, timeValue);
        const latest_end_max = this._effectiveMax(
            Number.POSITIVE_INFINITY,
            timeValue,
        );
        const custom_option_ids = new Set(
            [...this.custom_options(), this.duration()]
                .map((_) => Math.round(+_ || 0))
                .filter((_) => _ > 0),
        );

        // Add special cases
        for (const option of custom_option_ids) {
            blocks.push({
                id: option,
                date:
                    date && option < 24 * 60
                        ? addMinutes(date, option).valueOf()
                        : undefined,
                name:
                    option >= 24 * 60
                        ? `${formatDuration({
                              days: Math.floor(option / (24 * 60)),
                          })}`
                        : `${formatDuration({
                              hours: Math.floor(option / 60),
                              minutes: option % 60,
                          })}`,
            });
        }

        while (time <= effective_max) {
            blocks.push({
                id: time,
                date:
                    date && time < 24 * 60
                        ? addMinutes(date, time).valueOf()
                        : undefined,
                name:
                    time === 0
                        ? formatDuration({ minutes: 0 }, { zero: true })
                        : time >= 24 * 60
                          ? `${formatDuration({
                                days: Math.floor(time / (24 * 60)),
                            })}`
                          : `${formatDuration({
                                hours: Math.floor(Math.abs(time) / 60),
                                minutes: time % 60,
                            })}`,
            });
            time += step;
        }
        blocks.sort((a, b) => a.id - b.id);
        return blocks.filter(
            (option, index, options) =>
                (index === 0 || options[index - 1].id !== option.id) &&
                option.id > 0 &&
                (custom_option_ids.has(option.id)
                    ? option.id <= latest_end_max
                    : option.id >= min && option.id <= effective_max),
        );
    }

    /** Update whether the field should show as disabled due to no options */
    private _updateNoOptions(): void {
        const next_no_options =
            !this.disabled() &&
            (!this.duration_options() || this.duration_options().length === 0);
        if (this.no_options() === next_no_options) return;
        this.no_options.set(next_no_options);
        this._onValidatorChange?.();
    }

    private _updateOption() {
        const duration_options = this.duration_options();
        if (!duration_options?.length) return;
        const idx = duration_options.findIndex((_) => _.id === this.duration());
        if (idx < 0) this.setValue(duration_options[0]?.id ?? this.min());
    }

    private _effectiveMax(max: number, time_value?: number): number {
        const end_time = this.end_time();
        if (end_time === undefined || end_time === null || !time_value) {
            return max;
        }
        // Convert end_time from hour-of-day to minutes-since-midnight,
        // then compute the remaining minutes from the current start time
        const end_time_minutes = end_time * 60;
        const tz = this.timezone() || undefined;
        const { hours, minutes } = getTimeInTimezone(time_value, tz);
        const start_minutes = hours * 60 + minutes;
        return Math.max(0, Math.min(max, end_time_minutes - start_minutes));
    }
}
