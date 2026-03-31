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
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import {
    formatDuration,
    getTimeInTimezone,
    getTimezoneOffsetString,
} from '@placeos/common';
import { addMinutes } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';

export interface DurationOption {
    id: number;
    name: string;
    date?: number;
}

@Component({
    selector: 'a-duration-field,duration-field',
    template: `
        <button
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
                            : ''
                    }}{{ selected()?.name }}{{ selected()?.date ? ')' : '' }}
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
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @for (option of duration_options(); track option.id) {
                <button
                    mat-menu-item
                    class="text-left"
                    (click)="setValue(option.id)"
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
    ],
    imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent],
})
export class DurationFieldComponent
    implements OnInit, OnChanges, ControlValueAccessor
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

    public readonly duration = signal(60);
    /** List of available duration options */
    public readonly duration_options = signal<DurationOption[]>([]);
    /** Whether there are no available duration options */
    public readonly no_options = signal(false);

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

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
        this.duration_options.set(
            this.generateDurationOptions(this.max(), this.min(), this.step()),
        );
        this._updateNoOptions();
        this._updateOption();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        /* istanbul ignore else */
        if (
            changes.max ||
            changes.min ||
            changes.step ||
            changes.time ||
            changes.custom_options ||
            changes.end_time
        ) {
            this.duration_options.set(
                this.generateDurationOptions(
                    this.max(),
                    this.min(),
                    this.step(),
                ),
            );
            this._updateNoOptions();
            this._updateOption();
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        this.duration.set(new_value);
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(+new_value);
        }
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.duration.set(value);
        this._updateOption();
    }

    public setDisabledState(disabled: boolean) {
        this.disabled.set(disabled);
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

    private generateDurationOptions(max: number, min: number, step: number) {
        const blocks: DurationOption[] = [];
        let time = min;
        const timeValue = this.time();
        const date = timeValue ? timeValue : null;
        const effective_max = this._effectiveMax(max, timeValue);

        // Add special cases
        for (const option of this.custom_options()) {
            blocks.push({
                id: option,
                date: date ? addMinutes(date, option).valueOf() : undefined,
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
                date: date ? addMinutes(date, time).valueOf() : undefined,
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
                option.id >= min &&
                option.id <= effective_max,
        );
    }

    /** Update whether the field should show as disabled due to no options */
    private _updateNoOptions(): void {
        this.no_options.set(
            !this.disabled() &&
                (!this.duration_options() ||
                    this.duration_options().length === 0),
        );
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
