import { booleanAttribute, Component, input } from '@angular/core';
import { Field, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { SelectOption } from './settings-option.constants';

/**
 * Labelled select over a list of options, used by the App Settings modals.
 * The label gets the id `<field_id>-label` and names the select.
 *
 * ```html
 * <settings-select
 *     field_id="x-max-duration"
 *     label="Max Duration"
 *     [field]="form.events.max_duration"
 *     [options]="MAX_DURATION_FULL"
 *     hint="Max duration for single day bookings"
 * />
 * ```
 */
@Component({
    selector: 'settings-select',
    template: `
        <label [attr.for]="field_id()" [id]="field_id() + '-label'">
            {{ label() }}
        </label>
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [aria-labelledby]="field_id() + '-label'"
                [formField]="field()"
                [placeholder]="placeholder()"
                [multiple]="multiple()"
            >
                @if (null_option()) {
                    <mat-option [value]="null">{{ null_option() }}</mat-option>
                }
                @for (opt of options(); track opt.value) {
                    <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                }
            </mat-select>
            @if (hint()) {
                <mat-hint>{{ hint() }}</mat-hint>
            }
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [FormField, MatFormFieldModule, MatSelectModule],
})
export class SettingsSelectComponent {
    /** Base id. The label gets `<field_id>-label`. */
    public readonly field_id = input.required<string>();
    public readonly label = input.required<string>();
    /** Signal forms field that the select edits. */
    public readonly field = input.required<Field<unknown>>();
    public readonly options = input.required<readonly SelectOption[]>();
    public readonly hint = input('');
    public readonly placeholder = input('');
    /** Label of a first option with the value `null`. No option when empty. */
    public readonly null_option = input('');
    /** Select many values. Set it once; Material cannot change it later. */
    public readonly multiple = input(false, { transform: booleanAttribute });
}
