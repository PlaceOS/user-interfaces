import { COMMA, ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChipInputEvent } from '@angular/material/chips';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { CateringItem } from './catering-item.class';

import { DialogEvent, randomInt } from '@user-interfaces/common';

export interface CateringItemModalData {
    item: CateringItem;
    categories?: string[];
}

@Component({
    selector: 'catering-item-modal',
    template: `
        <header>
            <h3 mat-dialog-title>{{ item.id ? 'Edit' : 'Add' }} Item</h3>
            <button mat-icon-button mat-dialog-close *ngIf="!loading">
                <app-icon
                    [icon]="{ type: 'icon', class: 'material-icons', content: 'close' }"
                ></app-icon>
            </button>
        </header>
        <form
            class="p-4 overflow-auto"
            *ngIf="form && !loading; else load_state"
            [formGroup]="form"
        >
            <div class="field" *ngIf="form.controls.name">
                <label
                    for="title"
                    [class.error]="form.controls.name.invalid && form.controls.name.touched"
                >
                    Name<span>*</span>:
                </label>
                <mat-form-field appearance="outline">
                    <input matInput name="name" placeholder="Item name" formControlName="name" />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.category">
                <label
                    for="category"
                    [class.error]="form.controls.category.invalid && form.controls.category.touched"
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
            <div class="field" *ngIf="form.controls.tags">
                <label
                    for="tags"
                    [class.error]="form.controls.tags.invalid && form.controls.tags.touched"
                    i18n="@@tagsLabel"
                >
                    Tags:
                </label>
                <mat-form-field appearance="outline">
                    <mat-chip-list #chipList aria-label="Item Tags">
                        <mat-chip
                            *ngFor="let tag of tag_list"
                            [selectable]="true"
                            [removable]="true"
                            (removed)="removeTag(tag)"
                        >
                            {{ tag }}
                            <app-icon
                                matChipRemove
                                [icon]="{ class: 'material-icons', content: 'close' }"
                            ></app-icon>
                        </mat-chip>
                        <input
                            name="tags"
                            placeholder="Zone tags..."
                            i18n-placeholder="@@zoneTagsPlaceholder"
                            [matChipInputFor]="chipList"
                            [matChipInputSeparatorKeyCodes]="separators"
                            [matChipInputAddOnBlur]="true"
                            (matChipInputTokenEnd)="addTag($event)"
                        />
                    </mat-chip-list>
                </mat-form-field>
            </div>
            <div class="field" *ngIf="form.controls.description">
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
            <div class="field" *ngIf="form.controls.unit_price">
                <label
                    for="title"
                    [class.error]="
                        form.controls.unit_price.invalid && form.controls.unit_price.touched
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
        </form>
        <footer
            *ngIf="!loading"
            class="flex p-2 items-center justify-center border-none border-t border-solid border-gray-300"
        >
            <button mat-button [disabled]="!form.dirty" (click)="saveChanges()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="body">
                <div class="info-block">
                    <div class="icon">
                        <mat-spinner diameter="32"></mat-spinner>
                    </div>
                    <div class="text">Saving catering item...</div>
                </div>
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
            .field {
                display: flex;
                flex-wrap: wrap;
            }
        `,
    ],
})
export class CateringItemModalComponent {
    /** Emitter for events on the modal */
    @Output() public event = new EventEmitter<DialogEvent>();
    /** Form fields for item */
    public form: FormGroup;
    /** Whether changes are being saved */
    public loading: boolean = false;
    /** List of separator characters for tags */
    public readonly separators: number[] = [ENTER, COMMA, SPACE];

    /** Current item details */
    public get item(): CateringItem {
        return this._data.item;
    }

    /** List of available categories */
    public get categories(): string[] {
        return this._data.categories || [];
    }

    public get tag_list(): string[] {
        return this.form.controls.tags.value;
    }

    constructor(@Inject(MAT_DIALOG_DATA) private _data: CateringItemModalData) {}

    public ngOnInit(): void {
        this.form = new FormGroup({
            name: new FormControl(this.item.name || '', [Validators.required]),
            description: new FormControl(this.item.description || ''),
            category: new FormControl(this.item.category || '', [Validators.required]),
            unit_price: new FormControl(this.item.unit_price, [Validators.required]),
            tags: new FormControl(this.item.tags || []),
        });
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
        if (input) {
            input.value = '';
        }
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
