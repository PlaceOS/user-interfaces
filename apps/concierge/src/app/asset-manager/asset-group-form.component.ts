import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { generateAssetGroupForm, saveAssetType } from '@placeos/assets';
import {
    AssetCategory,
    AsyncHandler,
    notifyError,
    patchSignalModel,
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { ImageListFieldComponent } from '@placeos/form-fields';
import { showAssetType } from '@placeos/ts-client';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-group-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_ITEM_EDIT'
                    : 'APP.CONCIERGE.ASSETS_ITEM_NEW'
                ) | translate
            "
            [close]="
                model().id
                    ? [base_route, 'view', model().id]
                    : [base_route, 'list', 'items']
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'FORM.NAME' | translate }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="'FORM.NAME' | translate"
                            [formField]="form.name"
                        />
                        <mat-error>{{
                            'FORM.NAME_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="name"
                        >{{ 'COMMON.CATEGORY' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.category_id"
                            [placeholder]="'COMMON.CATEGORY' | translate"
                            (click)="current_category.set(model().category_id)"
                        >
                            @for (category of categories(); track category) {
                                <mat-option [value]="category.id">
                                    {{ category.name }}
                                </mat-option>
                            }
                            <mat-option
                                (click)="newCategory()"
                                class="relative"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>add</icon>
                                    <p>
                                        {{ 'COMMON.CATEGORY_NEW' | translate }}
                                    </p>
                                </div>
                            </mat-option>
                        </mat-select>
                        <mat-error>{{
                            'COMMON.CATEGORY_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="brand"
                        >{{ 'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                        }}<span>*</span></label
                    >
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                            "
                            [formField]="form.brand"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ITEM_BRAND_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="description">{{
                        'COMMON.DESCRIPTION' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            placeholder="Description of the product"
                            [formField]="form.description"
                        ></textarea>
                        <mat-error>{{
                            'COMMON.DESCRIPTION_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="images">{{
                        'COMMON.IMAGES' | translate
                    }}</label>
                    <image-list-field
                        [formField]="form.images"
                    ></image-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        ImageListFieldComponent,
        MatFormFieldModule,
        FormField,
        MatInputModule,
        MatSelectModule,
        TranslatePipe,
        IconComponent,
    ],
})
export class AssetGroupFormComponent extends AsyncHandler implements OnInit {
    private _state = inject(AssetManagerStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);

    private readonly _form_ref = generateAssetGroupForm();
    public readonly form = this._form_ref.form;
    public readonly model = this._form_ref.model;
    public readonly categories_list = this._state.categories;
    public readonly new_category = signal<AssetCategory | null>(null);
    public readonly categories = computed(() => {
        const list = this.categories_list();
        const item = this.new_category();
        return item ? unique([...list, item], 'id') : list;
    });
    public readonly loading = signal('');
    public readonly current_category = signal('');

    public get base_route() {
        return this._state.base_route;
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading.set('Loading Product Details...');
                    const product = await showAssetType(params.get('id')).catch(
                        () => null,
                    );
                    if (!product) {
                        notifyError('Unable to load product details.');
                        this._router.navigate([this.base_route]);
                    }
                    patchSignalModel(this.model, product);
                    this.loading.set('');
                }
            }),
        );
    }

    public async newCategory() {
        patchSignalModel(this.model, { category_id: this.current_category() });
        const category = await this._state.editCategory();
        if (!category) return;
        this.new_category.set(category);
        patchSignalModel(this.model, { category_id: category.id });
    }

    public async save() {
        if (!this.form().valid()) return;
        this.loading.set('Saving Product...');
        const data = this.model();
        const item = await saveAssetType(data as any).catch((e) => {
            this.loading.set('');
            notifyError(`Error saving Product: ${e.message}`);
            throw e;
        });
        this.form().reset();
        this.loading.set('');
        this._state.postChange();
        this._router.navigate([this.base_route, 'view', item.id]);
    }
}
