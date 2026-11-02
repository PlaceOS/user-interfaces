import { Component, computed, input } from '@angular/core';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TIMEZONES_IANA } from '@placeos/common/timezones';
import { IconComponent, TranslatePipe } from '@placeos/components';

/**
 * Timezone input with a list of IANA timezones that match the typed text.
 * The input gets the id `field_id`.
 *
 * `<timezone-field field_id="room-modal-timezone" [field]="form.timezone" />`
 */
@Component({
    selector: 'timezone-field',
    template: `
        <label [attr.for]="field_id()">{{
            'COMMON.TIMEZONE' | translate
        }}</label>
        <mat-form-field appearance="outline">
            <icon matPrefix class="text-2xl">search</icon>
            <input
                [id]="field_id()"
                matInput
                [formField]="field()"
                [placeholder]="'COMMON.TIMEZONE' | translate"
                [matAutocomplete]="auto"
            />
        </mat-form-field>
        <mat-autocomplete #auto="matAutocomplete">
            @for (tz of filtered_timezones(); track tz) {
                <mat-option [value]="tz">{{ tz }}</mat-option>
            }
            @if (!filtered_timezones().length) {
                <mat-option [disabled]="true">
                    {{ 'COMMON.TIMEZONE_EMPTY' | translate }}
                </mat-option>
            }
        </mat-autocomplete>
    `,
    host: { class: 'flex flex-col' },
    imports: [
        FormField,
        IconComponent,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatInputModule,
        TranslatePipe,
    ],
})
export class TimezoneFieldComponent {
    /** Id of the input. The label points to it. */
    public readonly field_id = input.required<string>();
    /** Signal forms field that holds the IANA timezone name. */
    public readonly field = input.required<FieldTree<string>>();

    /** Timezones that contain the typed text, ignoring case */
    public readonly filtered_timezones = computed(() => {
        const text = (this.field()().value() || '').toLowerCase();
        return TIMEZONES_IANA.filter((tz) => tz.toLowerCase().includes(text));
    });
}
