import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';

/**
 * Add a tag to the list of tags for the item
 * @param event Input event
 */
export function addChipItem(
    control: FormControl,
    event: MatChipInputEvent
): void {
    if (!control) return;
    const input = event.input;
    const value = event.value;
    const item_list = control.value;
    if ((value || '').trim()) {
        item_list.push(value);
        control.setValue(item_list);
    }

    // Reset the input value
    if (input) {
        input.value = '';
    }
}

/**
 * Remove tag from the list
 * @param existing_tag Tag to remove
 */
export function removeChipItem<T = string>(
    control: FormControl,
    item: T
): void {
    if (!control) {
        return;
    }
    const item_list = control.value;
    const index = item_list.indexOf(item);

    if (index >= 0) {
        item_list.splice(index, 1);
        control.setValue(item_list);
    }
}

@Component({
    selector: 'item-list-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-list #chipList aria-label="Zone Tags">
                <mat-chip
                    *ngFor="let item of value"
                    [selectable]="true"
                    [removable]="true"
                    (removed)="remove(item)"
                >
                    {{ item }}
                    <app-icon matChipRemove>close</app-icon>
                </mat-chip>
                <input
                    [placeholder]="placeholder || 'User groups...'"
                    i18n-placeholder="@@userGroupsPlaceholder"
                    [matChipInputFor]="chipList"
                    [matChipInputSeparatorKeyCodes]="separators"
                    [matChipInputAddOnBlur]="true"
                    (matChipInputTokenEnd)="add($event)"
                />
            </mat-chip-list>
        </mat-form-field>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => ItemListFieldComponent),
            multi: true,
        },
    ],
})
export class ItemListFieldComponent<T = any> implements ControlValueAccessor {
    @Input() public separators: number[] = [ENTER, COMMA, SPACE];

    @Input() public placeholder = '';
    /** List of items stored */
    public value: T[] = [];

    /** Form control on change handler */
    private _onChange: (_: T[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: T[]) => void;

    /**
     * Add the `step` to the current value
     */
    public readonly add = (e: MatChipInputEvent) =>
        addChipItem(
            { value: this.value, setValue: (i) => this.setValue(i) } as any,
            e
        );

    /** Remove the `step` from the current value */
    public readonly remove = (item: T) =>
        removeChipItem(
            { value: this.value, setValue: (i) => this.setValue(i) } as any,
            item
        );

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: T[]): void {
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
    public writeValue(value: T[]) {
        this.value = value;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function that is called when the control's value changes in the UI.
     * @param fn The callback function to register
     */
    public registerOnChange(fn: (_: T[]) => void): void {
        this._onChange = fn;
    }

    /* istanbul ignore next */
    /**
     * Registers a callback function is called by the forms API on initialization to update the form model on blur.
     * @param fn The callback function to register
     */
    public registerOnTouched(fn: (_: T[]) => void): void {
        this._onTouch = fn;
    }
}
