import {
    ChangeDetectionStrategy,
    Component,
    computed,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ReactiveFormsModule } from '@angular/forms';
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
    unique,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    IconComponent,
    TranslatePipe,
} from '@placeos/components';
import { ImageListFieldComponent } from '@placeos/form-fields';
import { showAssetType } from '@placeos/ts-client';
import { lastValueFrom } from 'rxjs';
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
            [loading]="loading()"
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
                            (click)="
                                current_category.set(form.value.category_id)
                            "
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        FullscreenModalShellComponent,
        ImageListFieldComponent,
        MatFormFieldModule,
        ReactiveFormsModule,
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

    public readonly form = generateAssetGroupForm();
    public readonly categories_list = toSignal(this._state.categories, {
        initialValue: [],
    });
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
                    this.form.patchValue(product);
                    this.loading.set('');
                }
            }),
        );
    }

    public async newCategory() {
        this.form.patchValue({ category_id: this.current_category() });
        const category = await this._state.editCategory();
        if (!category) return;
        this.new_category.set(category);
        this.form.patchValue({ category_id: category.id });
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading.set('Saving Product...');
        const data = this.form.value;
        const item = await lastValueFrom(saveAssetType(data as any)).catch(
            (e) => {
                this.loading.set('');
                notifyError(`Error saving Product: ${e.message}`);
                throw e;
            },
        );
        this.form.reset();
        this.loading.set('');
        this._state.postChange();
        this._router.navigate([this.base_route, 'view', item.id]);
    }
}
