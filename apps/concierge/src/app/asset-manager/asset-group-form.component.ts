import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { generateAssetGroupForm } from '@placeos/assets';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { AssetCategoryFormComponent } from './asset-category-form.component';

// export class AssetGroup {
//     id: string;
//     category_id: string;
//     brand: string;
//     name: string;
//     in_use: number;
//     description: string;
//     assets?: Asset[];
// }

@Component({
    selector: 'asset-group-form',
    template: `
        <div class="absolute inset-0 bg-white">
            <div class="h-full max-w-[32rem] mx-auto flex flex-col">
                <header class="p-4">
                    <h2 class="text-center text-xl font-medium">
                        {{ form.value.id ? 'Edit' : 'Add' }} Product
                    </h2>
                </header>
                <main class="flex-1 h-1/2 overflow-auto p-2" [formGroup]="form">
                    <div class="flex flex-col space-y-2">
                        <label for="name">Name<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="name"
                                placeholder="Name of the product"
                                formControlName="name"
                            />
                            <mat-error>Name is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="name">Category<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                formControlName="category_id"
                                placeholder="Category of Product"
                            >
                                <mat-option
                                    *ngFor="let category of categories | async"
                                    [value]="category.id"
                                >
                                    {{ category.name }}
                                </mat-option>
                                <mat-option (click)="newCategory()">
                                    <div class="flex items-center space-x-2">
                                        <app-icon>add</app-icon>
                                        <p>New Category</p>
                                    </div>
                                </mat-option>
                            </mat-select>
                            <mat-error>Category is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="brand">Brand<span>*</span></label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="brand"
                                placeholder="Brand of the product"
                                formControlName="brand"
                            />
                            <mat-error>Brand is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="description">Description</label>
                        <mat-form-field appearance="outline">
                            <textarea
                                matInput
                                name="description"
                                placeholder="Description of the product"
                                formControlName="description"
                            ></textarea>
                            <mat-error>Description is required</mat-error>
                        </mat-form-field>
                    </div>
                </main>
                <footer
                    class="flex justify-end space-x-2 p-2 border-t border-gray-100"
                >
                    <a
                        btn
                        matRipple
                        class="w-32 inverse"
                        [routerLink]="['/asset-manager']"
                        >Cancel</a
                    >
                    <button btn matRipple class="w-32">Save</button>
                </footer>
            </div>
        </div>
    `,
    styles: [``],
})
export class AssetGroupFormComponent {
    public readonly form = generateAssetGroupForm();
    public readonly categories = this._state.categories;

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _dialog: MatDialog
    ) {}

    public newCategory() {
        this._dialog.open(AssetCategoryFormComponent);
    }
}
