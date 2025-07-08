import { CommonModule } from '@angular/common';
import {
    Component,
    forwardRef,
    input,
    model,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { formatDuration, getTimezoneOffsetString } from '@placeos/common';
import { addMinutes } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';

export interface DurationOption {
    id: number;
    name: string;
    date?: number;
}

@Component({
    selector: 'a-duration-field',
    template: `
        <button
            duration-field
            class="flex h-12 w-full items-center justify-between rounded border border-neutral px-2"
            [disabled]="disabled()"
            [class.opacity-30]="disabled()"
            matRipple
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{
                        selected?.date
                            ? (selected?.date
                                  | date
                                      : (selected.id >= 24 * 60
                                            ? 'mediumDate'
                                            : time_format)) + ' ('
                            : ''
                    }}{{ selected?.name }}{{ selected?.date ? ')' : '' }}
                </div>
                @if (timezone() && tz) {
                    <div class="truncate text-xs opacity-30">
                        {{ selected?.date | date: time_format + ' (z)' : tz }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-[15rem] min-w-[18rem]">
            @for (option of duration_options; track option.id) {
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
                                                            : time_format)) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone() && tz) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format + ' (z)'
                                                    : tz
                                        }}
                                    </div>
                                }
                            </div>
                        }
                        <div>{{ force() }}</div>
                        @if (selected?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
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

    public duration = 60;
    /** List of available duration options */
    public duration_options: DurationOption[] = [];

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    public get time_format() {
        return this.use_24hr() ? 'HH : mm' : 'h : mm a';
    }

    public get selected() {
        return this.duration_options.find((_) => _.id === this.duration);
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
        this.duration_options = this.generateDurationOptions(
            this.max(),
            this.min(),
            this.step(),
        );
        this._updateOption();
    }

    public ngOnChanges(changes: SimpleChanges): void {
        /* istanbul ignore else */
        if (
            changes.max ||
            changes.min ||
            changes.step ||
            changes.time ||
            changes.custom_options
        ) {
            this.duration_options = this.generateDurationOptions(
                this.max(),
                this.min(),
                this.step(),
            );
            this._updateOption();
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        this.duration = new_value;
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
        this.duration = value;
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

        while (time <= max) {
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
        return blocks;
    }

    private _updateOption() {
        if (!this.duration_options?.length) return;
        const idx = this.duration_options.findIndex(
            (_) => _.id === this.duration,
        );
        if (idx < 0) this.setValue(this.min());
    }
}
