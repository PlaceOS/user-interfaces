import { CommonModule } from '@angular/common';
import { Component, EventEmitter, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AssetCategory } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { removeAssetCategory } from '@placeos/ts-client';
import { Observable } from 'rxjs';

@Component({
    selector: 'asset-category-management-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'APP.CONCIERGE.ASSETS_MANAGE_CATEGORIES' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-128 max-h-[65vh] min-w-md">
            @for (category of list | async; track category) {
                @if (category.id) {
                    <div
                        class="hover:bg-base-200:bg-base-300 border-base-200 m-2 flex items-center space-x-2 rounded-sm border p-2"
                    >
                        <div class="flex-1 truncate px-2">
                            {{ category.name }}
                        </div>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_EDIT' | translate
                            "
                            class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                            (click)="edit(category)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_REMOVE'
                                    | translate
                            "
                            class="border-error text-error h-12 w-12 rounded-sm border"
                            (click)="remove(category)"
                        >
                            <icon>delete</icon>
                        </button>
                    </div>
                }
            }
        </main>
        <button
            btn
            matRipple
            class="m-2 flex w-[calc(100%-1rem)] items-center justify-center space-x-2"
            (click)="edit()"
        >
            <div class="truncate pl-2">
                {{ 'APP.CONCIERGE.ASSETS_CATEGORY_NEW' | translate }}
            </div>
            <icon class="text-2xl">add</icon>
        </button>
    `,
    styles: [``],
    imports: [
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
        MatTooltipModule,
        MatDialogModule,
    ],
})
export class AssetCategoryManagementModalComponent {
    private _data = inject<{
        list: Observable<AssetCategory[]>;
        edit: (i?) => any;
    }>(MAT_DIALOG_DATA);
    private _dialog_ref =
        inject<MatDialogRef<AssetCategoryManagementModalComponent>>(
            MatDialogRef,
        );

    public readonly changed = new EventEmitter();
    public readonly list = this._data.list;
    public readonly edit = this._data.edit;

    public readonly remove = async (category: AssetCategory) => {
        await removeAssetCategory(category.id).toPromise();
        this.changed.emit();
    };
}
