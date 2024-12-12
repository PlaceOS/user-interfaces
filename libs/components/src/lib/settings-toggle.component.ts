import { Component, forwardRef, Input, OnChanges, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
    selector: 'settings-toggle',
    template: `
        <button
            matRipple
            class="flex items-center space-x-2 p-2 border border-base-300 rounded flex-1"
            (click)="setValue(!value)"
        >
            <div class="ml-2 flex-1 text-left flex items-center space-x-2">
                <div>{{ name }}</div>
                <app-icon *ngIf="info" [matTooltip]="info">info</app-icon>
            </div>
            <mat-checkbox
                [(ngModel)]="value"
                class="pointer-events-none"
            ></mat-checkbox>
        </button>
    `,
    styles: [
        `
            :host {
                display: flex;
            }
        `,
    ],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => SettingsToggleComponent),
            multi: true,
        },
    ],
})
export class SettingsToggleComponent implements ControlValueAccessor {
    @Input() public name: string;
    @Input() public info: string;

    public value: boolean;

    /** Form control on change handler */
    private _onChange: (_: boolean) => void;
    /** Form control on touch handler */
    private _onTouch: (_: boolean) => void;

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: boolean): void {
        this.value = new_value;
        /* istanbul ignore else */
        if (this._onChange) this._onChange(new_value);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: boolean) {
        this.value = value;
    }
}
