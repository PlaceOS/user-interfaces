import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'a-counter',
    template: `
        <div
            counter
            class="flex items-center text-base"
            (window:keydown.shift)="shift_key = true"
            (window:keydown.control)="ctrl_key = true"
            (window:keydown.meta)="ctrl_key = true"
            (window:keyup.shift)="shift_key = false"
            (window:keyup.control)="ctrl_key = false"
            (window:keyup.meta)="ctrl_key = false"
        >
            <button
                mat-icon-button
                name="remove"
                type="button"
                [disabled]="!value || value === min"
                (click)="remove()"
            >
                <app-icon>remove</app-icon>
            </button>
            <div value class="p-1 text-center">{{ (render_fn ? render_fn(value) : value) || '0' }}</div>
            <button
                mat-icon-button
                name="add"
                type="button"
                [disabled]="value === max"
                (click)="add()"
            >
                <app-icon>add</app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            [value] {
                min-width: 3em;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => CounterComponent),
            multi: true,
        },
    ],
})
export class CounterComponent implements ControlValueAccessor {
    /** Size of a single step */
    @Input() public step = 1;
    /** Maximum amount for the counter */
    @Input() public max = 10;
    /** Minimum amount for the counter */
    @Input() public min = 0;
    /** Custom function for rendering the counter value */
    @Input() public render_fn: (v: number) => string;
    /** Current value of the counter */
    public value: number;
    /** Whether shift key is being held by the user */
    public shift_key: boolean;
    /** Whether control key is being held by the user */
    public ctrl_key: boolean;

    /** Form control on change handler */
    private _onChange: (_: number) => void;
    /** Form control on touch handler */
    private _onTouch: (_: number) => void;

    /**
     * Add the `step` to the current value
     */
    public add() {
        if (!this.value) {
            this.value = this.min || 0;
        }
        const step = this.ctrl_key ? 100 * this.step : this.shift_key ? 10 * this.step : this.step || 1;
        this.value += step;
        if (this.value > this.max) {
            this.value = this.max || 10;
        }
        this.setValue(this.value);
    }

    /** Remove the `step` from the current value */
    public remove() {
        if (!this.value) {
            this.value = this.min || 0;
        }
        const step = this.ctrl_key ? 100 * this.step : this.shift_key ? 10 * this.step : this.step || 1;
        this.value -= step;
        if (this.value < this.min) {
            this.value = this.min || 0;
        }
        this.setValue(this.value);
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: number): void {
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(new_value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: number) {
        this.value = value;
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
}
