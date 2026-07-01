import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { CurrencyPipe } from '@angular/common';
import {
    Component,
    EventEmitter,
    Output,
    computed,
    inject,
    signal,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField, form, required } from '@angular/forms/signals';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatChipInputEvent, MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { CateringItem, DialogEvent } from '@placeos/common';

import { OrganisationService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { SettingsToggleComponent } from 'libs/components/src/lib/settings-toggle.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CounterComponent } from 'libs/form-fields/src/lib/counter.component';
import { ImageListFieldComponent } from 'libs/form-fields/src/lib/image-list-field.component';

export interface CateringItemModalData {
    item: CateringItem;
    categories?: string[];
    caterers?: string[];
}

@Component({
    selector: 'catering-item-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (item().id ? 'CATERING.ITEM_EDIT' : 'CATERING.ITEM_NEW')
                        | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <form class="max-h-[65vh] max-w-xl overflow-auto px-4">
                <div class="flex w-full items-center space-x-2">
                    @if (form.name) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.name().invalid() &&
                                    form.name().touched()
                                "
                            >
                                {{ 'FORM.NAME' | translate }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="'FORM.NAME' | translate"
                                    [formField]="form.name"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex w-full items-center space-x-2">
                    @if (form.category) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="category"
                                [class.error]="
                                    form.category().invalid() &&
                                    form.category().touched()
                                "
                            >
                                {{ 'COMMON.CATEGORY' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'COMMON.CATEGORY' | translate
                                    "
                                    [formField]="form.category"
                                    [matAutocomplete]="auto"
                                />
                                <mat-error>{{
                                    'COMMON.CATEGORY_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                    }
                    @if (form.caterer) {
                        <div class="flex flex-1 flex-col">
                            <label for="caterer">
                                {{ 'CATERING.CATERER' | translate
                                }}<span>*</span>:
                            </label>
                            <mat-form-field appearance="outline">
                                <input
                                    matInput
                                    [placeholder]="
                                        'CATERING.CATERER' | translate
                                    "
                                    [formField]="form.caterer"
                                    [matAutocomplete]="caterer_auto"
                                />
                            </mat-form-field>
                        </div>
                    }
                </div>
                <div class="flex space-x-4">
                    @if (form.unit_price) {
                        <div class="flex flex-1 flex-col">
                            <label
                                for="title"
                                [class.error]="
                                    form.unit_price().invalid() &&
                                    form.unit_price().touched()
                                "
                            >
                                {{ 'CATERING.ITEM_PRICE' | translate
                                }}<span>*</span>
                            </label>
                            <a-counter
                                [formField]="form.unit_price"
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
                            [label]="'CATERING.ITEM_POINTS' | translate"
                            [formField]="form.accept_points"
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
                            [formField]="form.discount_cap"
                            [min]="0"
                            [max]="100"
                            [step]="5"
                            [render_fn]="renderPercent"
                        ></a-counter>
                    </div>
                </div>
                @if (form.description) {
                    <div class="flex flex-col">
                        <label for="description">{{
                            'COMMON.DESCRIPTION' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                [placeholder]="'COMMON.DESCRIPTION' | translate"
                                [formField]="form.description"
                            ></textarea>
                        </mat-form-field>
                    </div>
                }
                @if (form.tags) {
                    <div class="flex flex-col">
                        <label
                            for="tags"
                            [class.error]="
                                form.tags().invalid() && form.tags().touched()
                            "
                        >
                            {{ 'COMMON.TAGS' | translate }}
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-chip-grid #chipList aria-label="Item Tags">
                                @for (item of tag_list(); track item) {
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
                        [label]="'CATERING.TAG_GLUTEN_FREE' | translate"
                        [ngModel]="hasTag('Gluten Free')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Gluten Free' }))
                                : removeTag('Gluten Free')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [label]="'CATERING.TAG_VEGAN' | translate"
                        [ngModel]="hasTag('Vegan')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Vegan' }))
                                : removeTag('Vegan')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [label]="'CATERING.TAG_VEGETARIAN' | translate"
                        [ngModel]="hasTag('Vegetarian')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Vegetarian' }))
                                : removeTag('Vegetarian')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="min-w-[40%] flex-1 p-2"
                        [label]="'CATERING.TAG_DAIRY' | translate"
                        [ngModel]="hasTag('Contains Dairy')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Contains Dairy' }))
                                : removeTag('Contains Dairy')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                    <settings-toggle
                        class="w-1/2 min-w-[40%] p-2"
                        [label]="'CATERING.TAG_NUTS' | translate"
                        [ngModel]="hasTag('Contains Nuts')"
                        (ngModelChange)="
                            $event
                                ? addTag($any({ value: 'Contains Nuts' }))
                                : removeTag('Contains Nuts')
                        "
                        [ngModelOptions]="{ standalone: true }"
                    >
                    </settings-toggle>
                </div>
                @if (form.images) {
                    <div class="flex flex-col">
                        <label for="images">{{
                            'COMMON.IMAGES' | translate
                        }}</label>
                        <image-list-field
                            [formField]="form.images"
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
        @if (!loading()) {
            <footer
                class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
            >
                <button
                    btn
                    matRipple
                    class="w-32"
                    [disabled]="!form().dirty()"
                    (click)="saveChanges()"
                >
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
        <mat-autocomplete #auto="matAutocomplete">
            @for (option of categories(); track option) {
                <mat-option [value]="option">
                    {{ option }}
                </mat-option>
            }
        </mat-autocomplete>
        <mat-autocomplete #caterer_auto="matAutocomplete">
            @for (option of caterers(); track option) {
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
        FormField,
        FormsModule,
    ],
})
export class CateringItemModalComponent {
    private _data = inject<CateringItemModalData>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Current item details */
    public readonly item = computed(
        () => this._data.item || new CateringItem(),
    );
    /** List of available categories */
    public readonly categories = computed(() => this._data.categories || []);
    /** List of available caterers */
    public readonly caterers = computed(() => this._data.caterers || []);
    /** Form fields for item */
    public readonly model = signal({
        name: this.item().name || '',
        description: this.item().description || '',
        category: this.item().category || '',
        caterer: this.item().caterer || '',
        unit_price: this.item().unit_price,
        tags: this.item().tags || [],
        accept_points: this.item().accept_points || false,
        discount_cap: this.item().discount_cap || 0,
        images: this.item().images || [],
    });
    public readonly form = form(this.model, (p) => {
        required(p.name);
        required(p.category);
        required(p.unit_price);
    });
    /** Whether changes are being saved */
    public readonly loading = signal(false);
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    public readonly tag_list = computed(() => this.model().tags || []);

    public renderPercent(value = 0) {
        return `${value}%`;
    }

    private _currency_pipe = new CurrencyPipe('en');

    public renderPrice = (v) => this._renderPrice(v);

    public _renderPrice(value = 0): string {
        this._org.active_building();
        return (
            this._currency_pipe?.transform(
                value / 100,
                this._org.currency_code,
            ) || String(value)
        );
    }

    public hasTag(tag: string) {
        return this.tag_list().includes(tag);
    }

    /**
     * Add a tag to the list of tags for the item
     * @param event Input event
     */
    public addTag(event: MatChipInputEvent): void {
        const input = event.input;
        const value = (event.value || '').trim();
        if (value) {
            this.model.update((m) => ({
                ...m,
                tags: [...(m.tags || []), value],
            }));
        }

        // Reset the input value
        if (input) input.value = '';
    }

    /**
     * Remove tag from the list
     * @param existing_tag Tag to remove
     */
    public removeTag(existing_tag: string): void {
        this.model.update((m) => ({
            ...m,
            tags: (m.tags || []).filter((tag) => tag !== existing_tag),
        }));
    }

    public saveChanges() {
        this.loading.set(true);
        this.event.emit({
            reason: 'done',
            metadata: {
                item: new CateringItem({
                    ...this.item(),
                    ...this.model(),
                }),
            },
        });
    }
}
