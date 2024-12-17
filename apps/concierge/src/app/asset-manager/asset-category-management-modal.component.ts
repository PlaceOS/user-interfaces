import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AssetCategory, deleteAssetCategory } from '@placeos/assets';
import { Observable } from 'rxjs';

@Component({
    selector: 'asset-category-management-modal',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{ 'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <app-icon>close</app-icon>
            </button>
        </header>
        <main class="min-w-[28rem] max-h-[65vh] h-[32rem]">
            @for (category of list | async; track category) {
                <div
                    class="flex items-center space-x-2 hover:bg-base-200:bg-base-300 p-2 m-2 rounded border border-base-200"
                    *ngIf="category.id"
                >
                    <div class="flex-1 truncate px-2">{{ category.name }}</div>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.ASSETS_CATEGORY_EDIT' | translate
                        "
                        class="border border-secondary text-secondary rounded h-12 w-12"
                        (click)="edit(category)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.ASSETS_CATEGORY_REMOVE' | translate
                        "
                        class="border border-error text-error rounded h-12 w-12"
                        (click)="remove(category)"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                </div>
            }
        </main>
        <button
            btn
            matRipple
            class="flex items-center justify-center space-x-2 w-[calc(100%-1rem)] m-2"
            (click)="edit()"
        >
            <div class="truncate pl-2">
                {{ 'APP.CONCIERGE.ASSETS_CATEGORY_NEW' | translate }}
            </div>
            <app-icon class="text-2xl">add</app-icon>
        </button>
    `,
    styles: [``],
})
export class AssetCategoryManagementModalComponent {
    public readonly changed = new EventEmitter();
    public readonly list = this._data.list;
    public readonly edit = this._data.edit;

    public readonly remove = async (category: AssetCategory) => {
        await deleteAssetCategory(category.id).toPromise();
        this.changed.emit();
    };

    constructor(
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            list: Observable<AssetCategory[]>;
            edit: (i?) => any;
        },
        private _dialog_ref: MatDialogRef<AssetCategoryManagementModalComponent>,
    ) {}
}
