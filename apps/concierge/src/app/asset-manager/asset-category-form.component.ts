import { Component, Inject } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import {
    AssetCategory,
    generateAssetCategoryForm,
    saveAssetCategory,
} from '@placeos/assets';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { notifyError } from '@placeos/common';

@Component({
    selector: 'asset-category-form',
    template: `
        <header class="flex items-center p-2">
            <h2 class="text-center text-xl font-medium">
                {{ form.value.id ? 'Edit' : 'Add' }} Category
            </h2>
            <button btn icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex-1 h-1/2 overflow-auto p-2 w-[20rem] max-w-[80vw]"
            [formGroup]="form"
            *ngIf="!loading; else load_state"
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
                        formControlName="parent_category_id"
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
        <footer
            class="flex justify-end space-x-2 p-2 border-t border-base-200"
            *ngIf="!loading"
        >
            <a btn matRipple class="w-32 inverse" mat-dialog-close>Cancel</a>
            <button btn matRipple class="w-32" (click)="save()">Save</button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">Saving Category...</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AssetCategoryFormComponent {
    public loading = false;
    public readonly form = generateAssetCategoryForm();
    public readonly categories = this._state.categories.pipe(
        map((list) =>
            list.filter((_) => _.parent_category_id !== this.form.value.id)
        )
    );

    constructor(
        @Inject(MAT_DIALOG_DATA) _data: { category?: AssetCategory },
        private _state: AssetManagerStateService,
        private _dialog_ref: MatDialogRef<AssetCategoryFormComponent>
    ) {
        if (_data?.category) this.form.patchValue(_data.category);
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading = true;
        this._dialog_ref.disableClose = true;
        const data = this.form.value;
        const item = await saveAssetCategory(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = false;
                this._dialog_ref.disableClose = false;
                notifyError(`Error saving category: ${e.message}`);
                throw e;
            });
        this.form.reset();
        this.loading = false;
        this._dialog_ref.close(item);
    }
}
