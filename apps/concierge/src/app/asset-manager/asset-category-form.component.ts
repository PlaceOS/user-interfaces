import { Component, Inject } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import {
    AssetCategory,
    generateAssetCategoryForm,
    saveAssetCategory,
} from '@placeos/assets';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { map } from 'rxjs/operators';
import { i18n, notifyError } from '@placeos/common';

@Component({
    selector: 'asset-category-form',
    template: `
        <header
            class="sticky top-0 p-2 m-2 w-[calc(100%-1rem)] border-none z-10 bg-base-200 rounded"
        >
            <h2 class="text-xl font-medium px-2">
                {{
                    (form.value.id
                        ? 'APP.CONCIERGE.ASSETS_CATEGORY_EDIT'
                        : 'APP.CONCIERGE.ASSETS_CATEGORY_NEW'
                    ) | translate
                }}
            </h2>
            <button icon matRipple mat-dialog-close *ngIf="!loading">
                <app-icon>close</app-icon>
            </button>
        </header>
        <main
            class="flex-1 h-1/2 overflow-auto p-2 w-[24rem] max-w-[80vw]"
            [formGroup]="form"
            *ngIf="!loading; else load_state"
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
            <button btn matRipple class="w-32" (click)="save()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
        <ng-template #load_state>
            <div class="flex flex-col items-center justify-center p-8">
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="mt-4">
                    {{ 'APP.CONCIERGE.ASSETS_CATEGORY_SAVING' | translate }}
                </p>
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
