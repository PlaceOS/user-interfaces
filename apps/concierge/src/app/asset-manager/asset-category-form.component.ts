import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { generateAssetCategoryForm, saveAssetCategory } from '@placeos/assets';
import { AssetCategory, i18n, notifyError } from '@placeos/common';
import { IconComponent, TranslatePipe } from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-category-form',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{
                    (form.value.id
                        ? 'APP.CONCIERGE.ASSETS_CATEGORY_EDIT'
                        : 'APP.CONCIERGE.ASSETS_CATEGORY_NEW'
                    ) | translate
                }}
            </h2>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
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
                            [disabled]="!categories().length"
                        >
                            @for (category of categories(); track category) {
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
        @if (!loading()) {
            <footer
                class="border-base-200 flex justify-end space-x-2 border-t p-2"
            >
                <button btn matRipple class="w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatDialogModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        MatInputModule,
    ],
})
export class AssetCategoryFormComponent {
    private _state = inject(AssetManagerStateService);
    private _dialog_ref =
        inject<MatDialogRef<AssetCategoryFormComponent>>(MatDialogRef);

    public readonly loading = signal(false);
    public readonly form = generateAssetCategoryForm();
    public readonly categories_list = toSignal(this._state.categories, {
        initialValue: [],
    });
    public readonly categories = computed(() =>
        this.categories_list().filter(
            (_) => _.parent_category_id !== this.form.value.id,
        ),
    );

    constructor() {
        const _data = inject<{
            category?: AssetCategory;
        }>(MAT_DIALOG_DATA);

        if (_data?.category) this.form.patchValue(_data.category);
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading.set(true);
        this._dialog_ref.disableClose = true;
        const data = this.form.value;
        const item = await saveAssetCategory(data as any)
            .toPromise()
            .catch((e) => {
                this.loading.set(false);
                this._dialog_ref.disableClose = false;
                notifyError(
                    i18n('APP.CONCIERGE.ASSETS_CATEGORY_SAVE_ERROR', {
                        error: e.message,
                    }),
                );
                throw e;
            });
        this.form.reset();
        this.loading.set(false);
        this._dialog_ref.close(item);
    }
}
