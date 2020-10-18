import { Component, OnInit, forwardRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';
import { Identity } from '@user-interfaces/common';
import { formatDuration } from 'date-fns';

import * as dayjs from 'dayjs';

@Component({
    selector: 'a-duration-field',
    template: `
        <div class="duration-field" [attr.disabled]="disabled">
            <mat-form-field appearance="outline">
                <mat-select
                    #select
                    [value]="duration"
                    [disabled]="disabled"
                    (valueChange)="setValue($event)"
                >
                    <mat-option *ngFor="let option of duration_options" [value]="option.id">
                        {{ option.name }}
                    </mat-option>
                </mat-select>
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
export class DurationFieldComponent implements OnInit, OnChanges, ControlValueAccessor {
    /** Maximum duration option available */
    @Input() public max: number = 240;
    /** Minimum duration option available */
    @Input() public min: number = 60;
    /** Step value between options */
    @Input() public step: number = 15;
    /** Reference time for displaying next to durations */
    @Input() public time: number;
    /** Whether form field is disabled */
    @Input() public disabled: boolean;
    /** Special case prepopulation i.e. out of step options */
    @Input() public specialPreprops: Array<number> = [];

    public duration: number = 60;
    /** List of available duration options */
    public duration_options: Identity[];

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    public ngOnInit(): void {
        this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
    }

    public ngOnChanges(changes: SimpleChanges): void {
        /* istanbul ignore else */
        if (changes.max || changes.min || changes.step || changes.time) {
            this.duration_options = this.generateDurationOptions(this.max, this.min, this.step);
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

    private generateDurationOptions(max: number, min: number, step: number): Identity[] {
        const blocks: Identity[] = [];
        let time = min;
        let date = this.time ? dayjs(this.time) : null;

        // Add special case for 10min duration/prepropulation
        for (const option of this.specialPreprops) {
            blocks.push({
                id: option,
                name: date
                    ? `${date.add(option, 'm').format('h:mm A')} (${formatDuration({
                          hours: Math.floor(option / 60),
                          minutes: option % 60,
                      })})`
                    : `${formatDuration({ hours: Math.floor(option / 60), minutes: option % 60 })}`,
            });
        }

        while (time <= max) {
            blocks.push({
                id: time,
                name: date
                    ? `${date.add(time, 'm').format('h:mm A')} (${formatDuration({
                          hours: Math.floor(time / 60),
                          minutes: time % 60,
                      })})`
                    : `${formatDuration({ hours: Math.floor(time / 60), minutes: time % 60 })}`,
            });
            time += step;
        }
        return blocks;
    }
}
