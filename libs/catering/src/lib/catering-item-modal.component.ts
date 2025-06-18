import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Output, inject } from '@angular/core';
import {
    FormControl,
    FormGroup,
    FormsModule,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { DialogEvent, randomInt } from '@placeos/common';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { ImageListFieldComponent } from 'libs/form-fields/src/lib/image-list-field.component';
import { CateringItem } from './catering-item.class';

export interface CateringItemModalData {
    item: CateringItem;
    categories?: string[];
    caterers?: string[];
}

@Component({
    selector: 'catering-item-modal',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (item.id ? 'CATERING.ITEM_EDIT' : 'CATERING.ITEM_NEW')
                        | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (form && !loading) {
            <form
                class="max-h-[65vh] max-w-xl overflow-auto px-4"
                [formGroup]="form"
            >
                <div class="flex w-full items-center space-x-2">
                    @if (form.controls.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.controls.name.invalid &&
                                    form.controls.name.touched
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="name"
                                    [placeholder]="'FORM.NAME' | translate"
                                    formControlName="name"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex w-full items-center space-x-2">
                    @if (form.controls.category) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="category"
                                [class.error]="
                                    form.controls.category.invalid &&
                                    form.controls.category.touched
                                "
                            >
                                {{ 'COMMON.CATEGORY' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="category"
                                    [placeholder]="
                                        'COMMON.CATEGORY' | translate
                                    "
                                    formControlName="category"
                                    [matAutocomplete]="auto"
                                />
                                <mat-error>{{
                                    'COMMON.CATEGORY_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.controls.caterer) {
                        <div class="flex flex-1 flex-col">
                            <label for="caterer">
                                {{ 'CATERING.CATERER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    name="caterer"
                                    [placeholder]="
                                        'CATERING.CATERER' | translate
                                    "
                                    formControlName="caterer"
                                    [matAutocomplete]="caterer_auto"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-4">
                    @if (form.controls.unit_price) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.controls.unit_price.invalid &&
                                    form.controls.unit_price.touched
                                "
                            >
                                {{ 'CATERING.ITEM_PRICE' | translate
                                }}<span>*</span>
                            </label>
                            <a-counter
                                formControlName="unit_price"
                                [min]="0"
                                [max]="100000"
                                [step]="10"
                                [render_fn]="renderPrice"
                            ></a-counter>
                        </div>
                    }
                    <div class="flex flex-1 items-center py-4">
                        <settings-toggle
                            class="w-full"
                            [name]="'CATERING.ITEM_POINTS' | translate"
                            formControlName="accept_points"
                        >
                        </settings-toggle>
                    </div>
                </div>
                <div class="mb-4 space-y-2">
                    <label class="w-24 min-w-0 flex-1">{{
                        'CATERING.ITEM_DISCOUNT' | translate
                    }}</label>
                    <div class="max-w-[calc(50%-0.5rem)]">
                        <a-counter
                            formControlName="discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                @if (form.controls.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                formControlName="description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.controls.tags) {
                    <div class="flex flex-col">
                        <label
                            for="tags"
                            [class.error]="
                                form.controls.tags.invalid &&
                                form.controls.tags.touched
                            "
                        >
                            {{ 'COMMON.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid #chipList aria-label="Item Tags">
                                @for (item of tag_list; track item) {
                                    <mat-chip-row (removed)="removeTag(item)">
                                        {{ item }}
                                        <button
                                            matChipRemove
                                            [attr.aria-label]="
                                                'COMMON.REMOVE_ITEM'
                                                    | translate: { item: item }
                                            "
                                        >
                                            <icon>cancel</icon>
                                        </button>
                                    </mat-chip-row>
                                }
                            </mat-chip-grid>
                            <input
                                name="tags"
                                placeholder="Item tags e.g. Gluten Free, Vegan etc."
                                [matChipInputFor]="chipList"
                                [matChipInputSeparatorKeyCodes]="separators"
                                [matChipInputAddOnBlur]="true"
                                (matChipInputTokenEnd)="addTag($event)"
                            />
                        </mat-form-field>
                    </div>
                }
                <label>{{ 'CATERING.TAGS' | translate }}</label>
                <div class="-mx-2 flex flex-wrap items-center pb-2" list>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_GLUTEN_FREE' | translate"
                        [ngModel]="hasTag('Gluten Free')"
                        (ngModelChange)="
                            $event
                                ? addTag({ value: 'Gluten Free' })
                                : removeTag('Gluten Free')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_VEGAN' | translate"
                        [ngModel]="hasTag('Vegan')"
                        (ngModelChange)="
                            $event
                                ? addTag({ value: 'Vegan' })
                                : removeTag('Vegan')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_VEGETARIAN' | translate"
                        [ngModel]="hasTag('Vegetarian')"
                        (ngModelChange)="
                            $event
                                ? addTag({ value: 'Vegetarian' })
                                : removeTag('Vegetarian')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [name]="'CATERING.TAG_DAIRY' | translate"
                        [ngModel]="hasTag('Contains Dairy')"
                        (ngModelChange)="
                            $event
                                ? addTag({ value: 'Contains Dairy' })
                                : removeTag('Contains Dairy')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="w-1/2 min-w-[40%] p-2"
                        [name]="'CATERING.TAG_NUTS' | translate"
                        [ngModel]="hasTag('Contains Nuts')"
                        (ngModelChange)="
                            $event
                                ? addTag({ value: 'Contains Nuts' })
                                : removeTag('Contains Nuts')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                </div>
                @if (form.controls.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            name="images"
                            formControlName="images"
                        ></image-list-field>
                    </div>
                }
            </form>
        } @else {
            <div class="flex w-64 flex-col items-center space-y-2 p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ 'CATERING.ITEM_SAVING' | translate }}</p>
            </div>
        }
        @if (!loading) {
            <footer
                class="flex items-center justify-end border-t border-solid border-base-200 px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form.dirty"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of categories; track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
        <mat-autocomplete #caterer_auto="matAutocomplete">
            @for (option of caterers; track option) {
                <mat-option [value]="option">
                    {{ option }}
                    @if (!option) {
                        <i>{{ 'CATERING.CATERER_EMPTY' | translate }}</i>
                    }
                </mat-option>
            }
        </mat-autocomplete>
    `,
    styles: [
        `
            [list] mat-checkbox {
                margin: 0.5rem;
            }
        `,
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatAutocompleteModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatInputModule,
        CounterComponent,
        ImageListFieldComponent,
        SettingsToggleComponent,
        MatChipsModule,
        ReactiveFormsModule,
        FormsModule,
    ],
})
export class CateringItemModalComponent {
    private _data = inject<CateringItemModalData>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for item */
    public form = new FormGroup({
        name: new FormControl(this.item.name || '', [Validators.required]),
        description: new FormControl(this.item.description || ''),
        category: new FormControl(this.item.category || '', [
            Validators.required,
        ]),
        caterer: new FormControl(this.item.caterer || ''),
        unit_price: new FormControl(this.item.unit_price, [
            Validators.required,
        ]),
        tags: new FormControl(this.item.tags || []),
        accept_points: new FormControl(this.item.accept_points || false),
        discount_cap: new FormControl(this.item.discount_cap || 0),
        images: new FormControl(this.item.images || []),
    });
    /** Whether changes are being saved */
    public loading = false;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    /** Current item details */
    public get item(): CateringItem {
        return this._data.item || new CateringItem();
    }

    /** List of available categories */
    public get categories(): string[] {
        return this._data.categories || [];
    }

    /** List of available caterers */
    public get caterers(): string[] {
        return this._data.caterers || [];
    }

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    public renderPercent(value = 0) {
        return `${value}%`;
    }

    private _currency_pipe = new CurrencyPipe('en');

    public renderPrice = (v) => this._renderPrice(v);

    public _renderPrice(value = 0) {
        return (
            this._currency_pipe?.transform(
                value / 100,
                this._org.currency_code,
            ) || value
        );
    }

    public hasTag(tag: string) {
        return this.tag_list.includes(tag);
    }

    /**
     * Add a tag to the list of tags for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        if (!this.form || !this.form.controls.tags) return;
        this.form.controls.tags.markAsDirty();
        const input = event.input;
        const value = event.value;
        const tag_list = this.tag_list;
        if ((value || '').trim()) {
            tag_list.push(value);
            this.form.controls.tags.setValue(tag_list);
        }

        // Reset the input value
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Tag to remove
     */
    public removeTag(existing_tag: string): void {
        if (!this.form || !this.form.controls.tags) return;
        const tag_list = this.tag_list;
        this.form.controls.tags.markAsDirty();
        const index = tag_list.indexOf(existing_tag);

        if (index >= 0) {
            tag_list.splice(index, 1);
            this.form.controls.tags.setValue(tag_list);
        }
    }

    public saveChanges() {
        this.loading = true;
        this.event.emit({
            reason: 'done',
            metadata: {
                item: new CateringItem({
                    ...this.item,
                    id: this.item.id || `item-${randomInt(9999_9999)}`,
                    ...this.form.value,
                }),
            },
        });
    }
}
