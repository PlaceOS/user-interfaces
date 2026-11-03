import { Component, computed, input, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FieldTree, FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { buildCurrencyOptions } from '@placeos/common';

/**
 * Currency select with a search box, used by the Concierge and Workplace
 * App Settings modals. The label gets the id `<field_id>-label`.
 *
 * `<settings-currency-select field_id="x-currency" [field]="form.currency" />`
 */
@Component({
    selector: 'settings-currency-select',
    template: `
        <label [attr.for]="field_id()" [id]="field_id() + '-label'"
            >Currency</label
        >
        <mat-form-field appearance="outline" class="w-full">
            <mat-select
                [aria-labelledby]="field_id() + '-label'"
                [formField]="field()"
                placeholder="Select currency code"
                (openedChange)="onOpenedChange($event)"
            >
                <mat-option disabled class="!h-auto !py-2">
                    <input
                        matInput
                        placeholder="Search currency code or name"
                        [(ngModel)]="filter"
                        [ngModelOptions]="{ standalone: true }"
                        (click)="$event.stopPropagation()"
                        (keydown)="$event.stopPropagation()"
                    />
                </mat-option>
                @for (option of filtered_options(); track option.code) {
                    <mat-option [value]="option.code">
                        {{ option.display_name }}
                    </mat-option>
                }
                @if (!filtered_options().length) {
                    <mat-option disabled>
                        No currencies match your search
                    </mat-option>
                }
            </mat-select>
            <mat-hint>ISO 4217 currency code for pricing</mat-hint>
        </mat-form-field>
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [
        FormField,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
    ],
})
export class SettingsCurrencySelectComponent {
    /** Base id. The label gets `<field_id>-label`. */
    public readonly field_id = input.required<string>();
    /** Signal forms field that holds the ISO 4217 currency code. */
    public readonly field = input.required<FieldTree<string>>();

    public readonly filter = signal('');
    public readonly options = buildCurrencyOptions();
    public readonly filtered_options = computed(() => {
        const filter_text = this.filter().trim().toLowerCase();
        if (!filter_text) return this.options;
        return this.options.filter((option) =>
            option.search_text.includes(filter_text),
        );
    });

    /** Clear the search when the select panel closes. */
    public onOpenedChange(is_open: boolean) {
        if (!is_open) this.filter.set('');
    }
}
