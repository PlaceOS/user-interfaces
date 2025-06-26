import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AssetCategory,
    generateAssetGroupForm,
    saveAssetGroup,
    showAssetGroup,
} from '@placeos/assets';
import { AsyncHandler, notifyError, unique } from '@placeos/common';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-group-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_ITEM_EDIT'
                    : 'APP.CONCIERGE.ASSETS_ITEM_NEW'
                ) | translate
            "
            [close]="
                form.value.id
                    ? [base_route, 'view', form.value.id]
                    : [base_route, 'list', 'items']
            "
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
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
                            'FORM.NAME_REQUIED' | translate
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
                            formControlName="category_id"
                            [placeholder]="'COMMON.CATEGORY' | translate"
                            (click)="current_category = form.value.category_id"
                        >
                            @for (
                                category of categories | async;
                                track category
                            ) {
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
                            name="brand"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_BRAND' | translate
                            "
                            formControlName="brand"
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
                            name="description"
                            placeholder="Description of the product"
                            formControlName="description"
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
                        name="images"
                        formControlName="images"
                    ></image-list-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class AssetGroupFormComponent extends AsyncHandler {
    private _state = inject(AssetManagerStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _dialog = inject(MatDialog);

    public readonly form = generateAssetGroupForm();
    public readonly new_category = new BehaviorSubject<AssetCategory>(null);
    public readonly categories = combineLatest([
        this._state.categories,
        this.new_category,
    ]).pipe(
        map(([list, item]) => (item ? unique([...list, item], 'id') : list)),
    );
    public loading = '';
    public current_category: string;

    public get base_route() {
        return this._state.base_route;
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading = 'Loading Product Details...';
                    const product = await showAssetGroup(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!product) {
                        notifyError('Unable to load product details.');
                        this._router.navigate([this.base_route]);
                    }
                    this.form.patchValue(product);
                    this.loading = '';
                }
            }),
        );
    }

    public async newCategory() {
        this.form.patchValue({ category_id: this.current_category });
        const category = await this._state.editCategory();
        if (!category) return;
        this.new_category.next(category);
        this.form.patchValue({ category_id: category.id });
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading = 'Saving Product...';
        const data = this.form.value;
        const item = await saveAssetGroup(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving Product: ${e.message}`);
                throw e;
            });
        this.form.reset();
        this.loading = '';
        this._state.postChange();
        this._router.navigate([this.base_route, 'view', item.id]);
    }
}
