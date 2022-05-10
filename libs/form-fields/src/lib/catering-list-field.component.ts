import { Component } from "@angular/core";
import { CateringItem } from "libs/catering/src/lib/catering-item.class";

@Component({
    selector: `catering-list-field`,
    template: ``,
    styles: [``]
})
export class CateringListFieldComponent {
    public items: CateringItem[] = [];
    public disabled = false;

    private _onChange: (_: CateringItem[]) => void;
    private _onTouch: (_: CateringItem[]) => void;

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
     public setValue(new_value: CateringItem[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: CateringItem[]) {
        this.items = value || []
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: CateringItem[]) => void) => this._onChange = fn;
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: CateringItem[]) => void) => this._onTouch = fn;
    public readonly setDisabledState = (s: boolean) => this.disabled = s;
}