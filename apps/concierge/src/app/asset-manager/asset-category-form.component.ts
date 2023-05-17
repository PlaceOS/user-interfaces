import { Component, Inject } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { AssetCategory, generateAssetCategoryForm } from '@placeos/assets';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs/operators';

@Component({
    selector: 'asset-category-form',
    template: `
        <header class="flex items-center p-2">
            <h2 class="text-center text-xl font-medium">
                {{ form.value.id ? 'Edit' : 'Add' }} Category
            </h2>
            <button btn icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex-1 h-1/2 overflow-auto p-2 w-[20rem] max-w-[80vw]"
            [formGroup]="form"
        >
            <div class="flex flex-col space-y-2">
                <label for="name">Name<span>*</span></label>
                <mat-form-field appearance="outline">
                    <input
                        matInput
                        name="name"
                        placeholder="Category Name"
                        formControlName="name"
                    />
                    <mat-error>Name is required</mat-error>
                </mat-form-field>
            </div>
            <div class="flex flex-col space-y-2">
                <label for="name">Parent Category</label>
                <mat-form-field appearance="outline">
                    <mat-select
                        formControlName="parent_id"
                        placeholder="No Parent"
                        [disabled]="!(categories | async)?.length"
                    >
                        <mat-option
                            *ngFor="let category of categories | async"
                            [value]="category.id"
                        >
                            {{ category.name }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </main>
        <footer class="flex justify-end space-x-2 p-2 border-t border-gray-100">
            <a btn matRipple class="w-32 inverse" mat-dialog-close>Cancel</a>
            <button btn matRipple class="w-32">Save</button>
        </footer>
    `,
    styles: [``],
})
export class AssetCategoryFormComponent {
    public readonly form = generateAssetCategoryForm();
    public readonly categories = this._state.categories.pipe(
        map((list) => list.filter((_) => _.parent_id !== this.form.value.id))
    );

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: { category?: AssetCategory },
        private _state: AssetManagerStateService
    ) {
        if (_data?.category) this.form.patchValue(_data.category);
    }
}
