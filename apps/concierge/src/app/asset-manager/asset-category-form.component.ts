import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {
    AssetCategory,
    generateAssetCategoryForm,
    saveAssetCategory,
} from '@placeos/assets';
import { i18n, notifyError } from '@placeos/common';
import { map } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-category-form',
    template: `
        <header
            class="sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded border-none bg-base-200 p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (form.value.id
                        ? 'APP.CONCIERGE.ASSETS_CATEGORY_EDIT'
                        : 'APP.CONCIERGE.ASSETS_CATEGORY_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading) {
            <main
                class="h-1/2 w-[24rem] max-w-[80vw] flex-1 overflow-auto p-2"
                [formGroup]="form"
            >
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
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
                <div class="flex flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_CATEGORY_PARENT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            formControlName="parent_category_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_CATEGORY_PARENT_EMPTY'
                                    | translate
                            "
                            [disabled]="!(categories | async)?.length"
                        >
                            @for (
                                category of categories | async;
                                track category
                            ) {
                                <mat-option [value]="category.id">
                                    {{ category.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            </main>
        } @else {
            <div class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ASSETS_CATEGORY_SAVING' | translate }}
                </p>
            </div>
        }
        @if (!loading) {
            <footer
                class="flex justify-end space-x-2 border-t border-base-200 p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    standalone: false,
})
export class AssetCategoryFormComponent {
    public loading = false;
    public readonly form = generateAssetCategoryForm();
    public readonly categories = this._state.categories.pipe(
        map((list) =>
            list.filter((_) => _.parent_category_id !== this.form.value.id),
        ),
    );

    constructor(
        @Inject(MAT_DIALOG_DATA) _data: { category?: AssetCategory },
        private _state: AssetManagerStateService,
        private _dialog_ref: MatDialogRef<AssetCategoryFormComponent>,
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
                notifyError(
                    i18n('APP.CONCIERGE.ASSETS_CATEGORY_SAVE_ERROR', {
                        error: e.message,
                    }),
                );
                throw e;
            });
        this.form.reset();
        this.loading = false;
        this._dialog_ref.close(item);
    }
}
