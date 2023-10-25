import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogEvent, randomInt } from '@placeos/common';
import { CateringItem } from './catering-item.class';

export interface CateringItemModalData {
    item: CateringItem;
    categories?: string[];
}

@Component({
    selector: 'catering-item-modal',
    template: `
        <header>
            <h3>{{ item.id ? 'Edit' : 'Add' }} Item</h3>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <form
            class="p-4 overflow-auto max-h-[65vh]"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="flex items-center space-x-2">
                <div class="flex flex-col" *ngIf="form.controls.name">
                    <label
                        for="title"
                        [class.error]="
                            form.controls.name.invalid &&
                            form.controls.name.touched
                        "
                    >
                        Name<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="name"
                            placeholder="Item name"
                            formControlName="name"
                        />
                        <mat-error>Name is required</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col" *ngIf="form.controls.category">
                    <label
                        for="category"
                        [class.error]="
                            form.controls.category.invalid &&
                            form.controls.category.touched
                        "
                    >
                        Category<span>*</span>:
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="category"
                            placeholder="Category"
                            formControlName="category"
                            [matAutocomplete]="auto"
                        />
                        <mat-error>Category is required</mat-error>
                    </mat-form-field>
                </div>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.tags">
                <label
                    for="tags"
                    [class.error]="
                        form.controls.tags.invalid && form.controls.tags.touched
                    "
                    i18n="@@tagsLabel"
                >
                    Tags:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-grid #chipList aria-label="Item Tags">
                        <mat-chip-row
                            *ngFor="let item of tag_list"
                            (removed)="removeTag(item)"
                        >
                            {{ item }}
                            <button
                                matChipRemove
                                [attr.aria-label]="'Remove ' + item"
                            >
                                <app-icon>cancel</app-icon>
                            </button>
                        </mat-chip-row>
                    </mat-chip-grid>
                    <input
                        name="tags"
                        placeholder="Item tags e.g. Gluten Free, Vegan etc."
                        i18n-placeholder="@@zoneTagsPlaceholder"
                        [matChipInputFor]="chipList"
                        [matChipInputSeparatorKeyCodes]="separators"
                        [matChipInputAddOnBlur]="true"
                        (matChipInputTokenEnd)="addTag($event)"
                    />
                </mat-form-field>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.description">
                <label for="description">Description:</label>
                <mat-form-field appearance="outline">
                    <textarea
                        matInput
                        name="description"
                        placeholder="Item Description"
                        formControlName="description"
                    ></textarea>
                </mat-form-field>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.unit_price">
                <label
                    for="title"
                    [class.error]="
                        form.controls.unit_price.invalid &&
                        form.controls.unit_price.touched
                    "
                >
                    Unit Price<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="unit-price"
                        type="number"
                        placeholder="Unit Price"
                        formControlName="unit_price"
                    />
                    <mat-error>Unit Price is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex items-center">
                <label class="flex-none w-28 min-w-0">Accept Points?</label>
                <mat-checkbox formControlName="accept_points">{{
                    form.get('accept_points')?.value ? 'No' : 'Yes'
                }}</mat-checkbox>
            </div>
            <div class="flex items-center flex-wrap max-w-lg" list>
                <mat-checkbox
                    [ngModel]="hasTag('Gluten Free')"
                    (ngModelChange)="
                        $event
                            ? addTag({ value: 'Gluten Free' })
                            : removeTag('Gluten Free')
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Gluten Free (GF)
                </mat-checkbox>
                <mat-checkbox
                    [ngModel]="hasTag('Vegan')"
                    (ngModelChange)="
                        $event ? addTag({ value: 'Vegan' }) : removeTag('Vegan')
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Vegan (VG)
                </mat-checkbox>
                <mat-checkbox
                    [ngModel]="hasTag('Vegetarian')"
                    (ngModelChange)="
                        $event
                            ? addTag({ value: 'Vegetarian' })
                            : removeTag('Vegetarian')
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Vegetarian (V)
                </mat-checkbox>
                <mat-checkbox
                    [ngModel]="hasTag('Contains Dairy')"
                    (ngModelChange)="
                        $event
                            ? addTag({ value: 'Contains Dairy' })
                            : removeTag('Contains Dairy')
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Contains Dairy (D)
                </mat-checkbox>
                <mat-checkbox
                    [ngModel]="hasTag('Contains Nuts')"
                    (ngModelChange)="
                        $event
                            ? addTag({ value: 'Contains Nuts' })
                            : removeTag('Contains Nuts')
                    "
                    [ngModelOptions]="{ standalone: true }"
                >
                    Contains Nuts (N)
                </mat-checkbox>
            </div>
            <div class="flex items-center">
                <label class="flex-1 w-24 min-w-0">Discount Cap</label>
                <a-counter
                    class="border border-base-200 rounded"
                    formControlName="discount_cap"
                    [min]="0"
                    [max]="100"
                    [step]="5"
                    [render_fn]="renderPercent"
                ></a-counter>
            </div>
            <div class="flex flex-col" *ngIf="form.controls.images">
                <label for="images" i18n="@@imagesLabel">Images:</label>
                <image-list-field
                    name="images"
                    formControlName="images"
                ></image-list-field>
            </div>
        </form>
        <footer
            *ngIf="!loading"
            class="flex p-2 items-center justify-center border-t border-solid border-base-200"
        >
            <button
                btn
                matRipple
                [disabled]="!form.dirty"
                (click)="saveChanges()"
            >
                Save
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center p-8 space-y-2 w-64">
                <mat-spinner diameter="32"></mat-spinner>
                <p>Saving catering item...</p>
            </div>
        </ng-template>
        <mat-autocomplete #auto="matAutocomplete">
            <mat-option *ngFor="let option of categories" [value]="option">
                {{ option }}
            </mat-option>
        </mat-autocomplete>
    `,
    styles: [
        `
            [list] mat-checkbox {
                margin: 0.5rem;
            }
        `,
    ],
})
export class CateringItemModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for item */
    public form = new FormGroup({
        name: new FormControl(this.item.name || '', [Validators.required]),
        description: new FormControl(this.item.description || ''),
        category: new FormControl(this.item.category || '', [
            Validators.required,
        ]),
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

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    public renderPercent(value: number = 0) {
        return `${value}%`;
    }

    public hasTag(tag: string) {
        return this.tag_list.includes(tag);
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: CateringItemModalData
    ) {}

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
