import { COMMA, ENTER } from '@angular/cdk/keycodes';

import { Component, forwardRef, input, signal } from '@angular/core';
import {
    ControlValueAccessor,
    FormControl,
    NG_VALUE_ACCESSOR,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { IconComponent } from 'libs/components/src/lib/icon.component';

interface ChipListControl<T> {
    value: T[];
    setValue(value: T[]): void;
}

/**
 * Add a tag to the list of tags for the item
 * @param event Input event
 */
export function addChipItem<T = string>(
    control: ChipListControl<T> | FormControl<T[]>,
    event: MatChipInputEvent,
): void {
    if (!control) return;
    const input = event.input;
    const item_list = uniqueChipItems(control.value || []);
    const new_items = `${event.value || ''}`
        .split(',')
        .map((item) => item.trim())
        .filter((item) => !!item) as T[];

    for (const item of new_items) {
        if (!item_list.includes(item)) {
            item_list.push(item);
        }
    }
    control.setValue(item_list);

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
    control: ChipListControl<T> | FormControl<T[]>,
    item: T,
    item_index?: number,
): void {
    if (!control) {
        return;
    }
    const item_list = [...(control.value || [])];
    const index = item_index ?? item_list.indexOf(item);

    if (index >= 0 && index < item_list.length) {
        item_list.splice(index, 1);
        control.setValue(item_list);
    }
}

export function uniqueChipItems<T = string>(items: T[]): T[] {
    return [...new Set(items)];
}

@Component({
    selector: 'item-list-field',
    template: `
        <mat-form-field appearance="outline" class="w-full">
            <mat-chip-grid #chipList aria-label="Zone Tags">
                @for (item of value(); track $index; let i = $index) {
                    <mat-chip-row (removed)="remove(item, i)">
                        <span class="max-w-md truncate">{{ item }}</span>
                        <button
                            matChipRemove
                            [attr.aria-label]="'Remove ' + item"
                        >
                            <icon>cancel</icon>
                        </button>
                    </mat-chip-row>
                }
            </mat-chip-grid>
            <input
                [placeholder]="placeholder() || 'User groups...'"
                [matChipInputFor]="chipList"
                [matChipInputSeparatorKeyCodes]="separators()"
                [matChipInputAddOnBlur]="true"
                (matChipInputTokenEnd)="add($event)"
            />
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
    imports: [MatFormFieldModule, MatChipsModule, IconComponent],
})
export class ItemListFieldComponent<
    T = string,
> implements ControlValueAccessor {
    public readonly separators = input<number[]>([ENTER, COMMA]);

    public readonly placeholder = input('');
    /** List of items stored */
    public readonly value = signal<T[]>([]);

    /** Form control on change handler */
    private _onChange: (_: T[]) => void;
    /** Form control on touch handler */
    private _onTouch: (_: T[]) => void;

    /**
     * Add the `step` to the current value
     */
    public readonly add = (e: MatChipInputEvent) =>
        addChipItem(
            { value: this.value(), setValue: (i) => this.setValue(i) },
            e,
        );

    /** Remove the `step` from the current value */
    public readonly remove = (item: T, index?: number) =>
        removeChipItem(
            { value: this.value(), setValue: (i) => this.setValue(i) },
            item,
            index,
        );

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: T[]): void {
        const value = uniqueChipItems(new_value || []);
        this.value.set(value);
        /* istanbul ignore else */
        if (this._onChange) {
            this._onChange(value);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: T[]) {
        this.value.set(uniqueChipItems(value || []));
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
