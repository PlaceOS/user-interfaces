import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'a-counter',
    template: `
        <div
            class="counter"
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
                [disabled]="!value || value === min"
                (click)="remove()"
            >
                <app-icon [icon]="{ class: 'material-icons', content: 'remove' }"></app-icon>
            </button>
            <div class="value">
                {{ value || '0' }}
            </div>
            <button mat-icon-button name="add" [disabled]="value === max" (click)="add()">
                <app-icon [icon]="{ class: 'material-icons', content: 'add' }"></app-icon>
            </button>
        </div>
    `,
    styles: [
        `
            .counter {
                display: flex;
                align-items: center;
                font-size: 1rem;
            }

            .value {
                padding: 0.25em;
                min-width: 3em;
                text-align: center;
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
    @Input() public step: number = 1;
    /** Maximum amount for the counter */
    @Input() public max: number = 10;
    /** Minimum amount for the counter */
    @Input() public min: number = 0;
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
        const step = this.ctrl_key ? 100 : this.shift_key ? 10 : this.step || 1;
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
        const step = this.ctrl_key ? 100 : this.shift_key ? 10 : this.step || 1;
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
