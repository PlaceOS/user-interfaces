import { Component, OnInit, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ActivatedRoute, Router } from '@angular/router';
import { generateAssetForm, saveAssetsInBulk } from '@placeos/assets';
import {
    AssetGroup,
    AsyncHandler,
    OrganisationService,
    getInvalidSignalFields,
    i18n,
    notifyError,
    notifySuccess,
    patchSignalModel,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    TranslatePipe,
} from '@placeos/components';
import { showAsset, showAssetType } from '@placeos/ts-client';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-bulk-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_BULK_EDIT'
                    : 'APP.CONCIERGE.ASSETS_BULK_ADD'
                ) | translate
            "
            [close]="
                product() ? [base_route, 'view', product()?.id] : [base_route]
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product()?.name || 'No Product'"
                            [ngModelOptions]="{ standalone: true }"
                            [disabled]="true"
                        />
                    </mat-form-field>
                </div>
                <div class="flex items-center space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="count">{{
                            'APP.CONCIERGE.ASSETS_BULK_COUNT' | translate
                        }}</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="count()"
                                (ngModelChange)="count.set(+$event || 0)"
                                name="count"
                                type="number"
                                [placeholder]="
                                    'APP.CONCIERGE.ASSETS_BULK_COUNT'
                                        | translate
                                "
                                [ngModelOptions]="{ standalone: true }"
                            />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="identifier">{{
                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate
                            "
                            [formField]="form.identifier"
                        />
                        <mat-error>
                            {{
                                'APP.CONCIERGE.ASSETS_NAME_REQUIRED' | translate
                            }}
                        </mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="purchase-order-id">{{
                        'APP.CONCIERGE.ASSETS_ORDER_ID' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <mat-select
                            [formField]="form.purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (order of purchase_orders(); track order) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!purchase_orders().length) {
                                <mat-option
                                    class="opacity-60"
                                    [disabled]="true"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ORDER_ID_EMPTY'
                                            | translate
                                    }}
                                </mat-option>
                            }
                        </mat-select>
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_ORDER_ID_REQUIRED' | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        MatFormFieldModule,
        MatSelectModule,
        FormField,
        TranslatePipe,
        MatInputModule,
        FormsModule,
    ],
})
export class AssetBulkFormComponent extends AsyncHandler implements OnInit {
    private _state = inject(AssetManagerStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    private readonly _form_ref = generateAssetForm();
    public readonly form = this._form_ref.form;
    public readonly model = this._form_ref.model;
    public readonly purchase_orders = this._state.purchase_orders;
    public readonly product = signal<AssetGroup | null>(null);
    public readonly count = signal(2);
    public readonly loading = signal('');

    public get base_route() {
        return this._state.base_route;
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading.set(
                        i18n('APP.CONCIERGE.ASSETS_BULK_ASSET_LOADING'),
                    );
                    const asset = await showAsset(params.get('id')).catch(
                        () => null,
                    );
                    if (!asset) {
                        notifyError('Unable to load asset details.');
                        this._router.navigate([this.base_route]);
                    }
                    patchSignalModel(this.model, asset);
                    this.loading.set('');
                }
                if (params.get('group_id')) {
                    this.loading.set(
                        i18n('APP.CONCIERGE.ASSETS_BULK_PRODUCT_LOADING'),
                    );
                    const product = await showAssetType(
                        params.get('group_id'),
                    ).catch(() => null);
                    if (!product) {
                        notifyError(
                            'Unable to load associated product details.',
                        );
                        this._router.navigate([this.base_route]);
                    }
                    this.product.set(product);
                    patchSignalModel(this.model, { asset_type_id: product.id });
                    this.loading.set('');
                }
            }),
        );
        this._state.setOptions({ active_item: null });
        this.count.set(2);
    }

    public async save() {
        if (!this.count() || this.count() < 1) {
            return notifyError(i18n('APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR'));
        }
        if (!this.form().valid()) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidSignalFields(this.form, this.model),
                }),
            );
        }
        this.loading.set(i18n('APP.CONCIERGE.ASSETS_BULK_SAVING'));
        const data = this.model();
        const list = await saveAssetsInBulk(
            new Array(this.count()).fill({
                ...data,
                zone_id: this._org.building.id,
            }),
        ).catch((e) => {
            this.loading.set('');
            notifyError(
                i18n('APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR', {
                    error: e.message,
                }),
            );
            throw e;
        });
        this._state.setExtraAssets(
            list.map((d) => ({ ...d, asset_type_id: this.product()?.id })),
        );
        this.form().reset();
        this._state.postChange();
        notifySuccess(
            i18n('APP.CONCIERGE.ASSETS_BULK_SAVE_SUCCESS', {
                count: list.length,
            }),
        );
        this._router.navigate([this.base_route, 'view', this.product()?.id]);
        this.loading.set('');
    }
}
