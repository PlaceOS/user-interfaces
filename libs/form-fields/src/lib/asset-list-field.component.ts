import { Component, forwardRef } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

import { Asset } from '@placeos/assets';

@Component({
    selector: `asset-list-field`,
    template: ``,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => AssetListFieldComponent),
            multi: true,
        },
    ],
})
export class AssetListFieldComponent implements ControlValueAccessor {
    public items: Asset[] = [];
    public disabled = false;

    private _onChange: (_: Asset[]) => void;
    private _onTouch: (_: Asset[]) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
     public setValue(new_value: Asset[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Asset[]) {
        this.items = value || []
    }

    public readonly registerOnChange = (fn: (_: Asset[]) => void) => this._onChange = fn;
    public readonly registerOnTouched = (fn: (_: Asset[]) => void) => this._onTouch = fn;
    public readonly setDisabledState = (s: boolean) => this.disabled = s;
}