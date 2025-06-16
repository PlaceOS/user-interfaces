import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AssetGroup,
    addAssetsInBulk,
    generateAssetForm,
    showAsset,
    showAssetGroup,
} from '@placeos/assets';
import {
    AsyncHandler,
    getInvalidFields,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-bulk-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_BULK_EDIT'
                    : 'APP.CONCIERGE.ASSETS_BULK_ADD'
                ) | translate
            "
            [close]="product ? [base_route, 'view', product.id] : [base_route]"
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-1 flex-col space-y-2">
                    <label for="name">{{
                        'APP.CONCIERGE.ASSETS_PRODUCT' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [ngModel]="product?.name || 'No Product'"
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
                                [(ngModel)]="count"
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
                            name="identifier"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate
                            "
                            formControlName="identifier"
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
                            formControlName="purchase_order_id"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_ORDER_SELECT' | translate
                            "
                        >
                            @for (
                                order of purchase_orders | async;
                                track order
                            ) {
                                <mat-option [value]="order.id">
                                    {{
                                        order.purchase_order_number ||
                                            order.invoice_number
                                    }}
                                </mat-option>
                            }
                            @if (!(purchase_orders | async)?.length) {
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
    standalone: false,
})
export class AssetBulkFormComponent extends AsyncHandler implements OnInit {
    public readonly form = generateAssetForm();
    public readonly purchase_orders = this._state.purchase_orders;
    public product: AssetGroup;
    public count = 2;
    public loading = '';

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService,
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading = i18n(
                        'APP.CONCIERGE.ASSETS_BULK_ASSET_LOADING',
                    );
                    const asset = await showAsset(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!asset) {
                        notifyError('Unable to load asset details.');
                        this._router.navigate([this.base_route]);
                    }
                    this.form.patchValue(asset);
                    this.loading = '';
                }
                if (params.get('group_id')) {
                    this.loading = i18n(
                        'APP.CONCIERGE.ASSETS_BULK_PRODUCT_LOADING',
                    );
                    const product = await showAssetGroup(params.get('group_id'))
                        .toPromise()
                        .catch(() => null);
                    if (!product) {
                        notifyError(
                            'Unable to load associated product details.',
                        );
                        this._router.navigate([this.base_route]);
                    }
                    this.product = product;
                    this.form.patchValue({ type_id: product.id });
                    this.loading = '';
                }
            }),
        );
        this._state.setOptions({ active_item: null });
        this.count = 2;
    }

    public async save() {
        if (!this.count && this.count < 1) {
            return notifyError(i18n('APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR'));
        }
        if (!this.form.valid) {
            return notifyError(
                i18n('FORM.INVALID_FIELDS', {
                    field_list: getInvalidFields(this.form),
                }),
            );
        }
        this.loading = i18n('APP.CONCIERGE.ASSETS_BULK_SAVING');
        const data = this.form.value;
        const list = await addAssetsInBulk(
            new Array(this.count).fill({
                ...data,
                zone_id: this._org.building.id,
            }),
        )
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(
                    i18n('APP.CONCIERGE.ASSETS_BULK_COUNT_ERROR', {
                        error: e.message,
                    }),
                );
                throw e;
            });
        this._state.setExtraAssets(
            list.map((d) => ({ ...d, type_id: this.product.id })),
        );
        this.form.reset();
        this._state.postChange();
        notifySuccess(
            i18n('APP.CONCIERGE.ASSETS_BULK_SAVE_SUCCESS', {
                count: list.length,
            }),
        );
        this._router.navigate([this.base_route, 'view', this.product?.id]);
        this.loading = '';
    }
}
