import {
    Component,
    forwardRef,
    Input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { getTimezoneOffsetInMinutes } from '@placeos/common';
import { addMinutes, formatDuration } from 'date-fns';
import { padLength } from 'libs/components/src/lib/media-duration.pipe';

export interface DurationOption {
    id: number;
    name: string;
    date?: number;
}

@Component({
    selector: 'a-duration-field',
    template: `
        <div class="duration-field" [attr.disabled]="disabled">
            <mat-form-field appearance="outline">
                <mat-select
                    #select
                    [value]="duration"
                    [disabled]="disabled"
                    [placeholder]="duration + ' minutes'"
                    (valueChange)="setValue($event)"
                >
                    <mat-select-trigger>
                        <div
                            class="flex flex-col leading-tight absolute -translate-y-1/2 top-2"
                        >
                            <div>
                                {{
                                    selected?.date
                                        ? (selected?.date
                                              | date
                                                  : (selected.id >= 24 * 60
                                                        ? 'mediumDate'
                                                        : time_format)) + ' ('
                                        : ''
                                }}{{ selected?.name
                                }}{{ selected?.date ? ')' : '' }}
                            </div>
                            <div class="text-xs opacity-30" *ngIf="timezone">
                                {{
                                    selected?.date
                                        | date: time_format + ' (z)' : tz
                                }}
                            </div>
                        </div>
                    </mat-select-trigger>
                    <mat-option
                        *ngFor="let option of duration_options"
                        [value]="option.id"
                    >
                        <ng-container *ngIf="!force">
                            <div class="flex flex-col leading-tight">
                                <div>
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
                                <div
                                    class="text-xs opacity-30"
                                    *ngIf="timezone"
                                >
                                    {{
                                        option.date
                                            | date: time_format + ' (z)' : tz
                                    }}
                                </div>
                            </div>
                        </ng-container>
                        {{ force }}
                    </mat-option>
                </mat-select>
                <mat-error><ng-content></ng-content></mat-error>
            </mat-form-field>
        </div>
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
})
export class DurationFieldComponent
    implements OnInit, OnChanges, ControlValueAccessor
{
    /** Maximum duration option available */
    @Input() public max = 240;
    /** Minimum duration option available */
    @Input() public min = 30;
    /** Step value between options */
    @Input() public step = 15;
    /** Reference time for displaying next to durations */
    @Input() public time: number;
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Special case prepopulation i.e. out of step options */
    @Input() public custom_options: number[] = [];
    /** Force the display duration value */
    @Input() public force: string;
    /** Whether to use 24 hour time when formatting displayed time */
    @Input() public use_24hr = false;
    /** Display extra information for displayed times for timezone */
    @Input() public timezone: string = '';

    public duration = 60;
    /** List of available duration options */
    public duration_options: DurationOption[] = [];

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    public get time_format() {
        return this.use_24hr ? 'HH : mm' : 'h : mm a';
    }

    public get selected() {
        return this.duration_options.find((_) => _.id === this.duration);
    }

    public get tz() {
        // Get Timezone as +/-HHMM
        const tz = this.timezone;
        if (!tz) return '';
        const offset = getTimezoneOffsetInMinutes(tz);
        const hours = Math.floor(Math.abs(offset) / 60);
        const minutes = Math.abs(offset) % 60;
        return `${offset > 0 ? '+' : '-'}${padLength(hours, 2)}${padLength(minutes, 2)}`;
    }

    public ngOnInit(): void {
        this.duration_options = this.generateDurationOptions(
            this.max,
            this.min,
            this.step,
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
                this.max,
                this.min,
                this.step,
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
        this.disabled = disabled;
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
        const date = this.time ? this.time : null;

        // Add special cases
        for (const option of this.custom_options) {
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
                                hours: Math.floor(time / 60),
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
        if (idx < 0) this.setValue(this.min);
    }
}
