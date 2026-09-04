import { Component, OnInit, inject, resource, signal } from '@angular/core';
import { FormField } from '@angular/forms/signals';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import {
    generateAssetPurchaseOrderForm,
    queryAssetTypes,
    queryAssets,
    saveAssetPurchaseOrder,
} from '@placeos/assets';
import {
    AssetPurchaseOrder,
    AsyncHandler,
    OrganisationService,
    i18n,
    notifyError,
    notifySuccess,
    patchSignalModel,
} from '@placeos/common';
import {
    FullscreenModalShellComponent,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { DateFieldComponent } from '@placeos/form-fields';
import { showAssetPurchaseOrder } from '@placeos/ts-client';
import { addYears, getUnixTime } from 'date-fns';
import { queryAllPages } from '../query-all-pages';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-purchase-order-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (model().id
                    ? 'APP.CONCIERGE.ASSETS_PURCHASE_EDIT'
                    : 'APP.CONCIERGE.ASSETS_PURCHASE_NEW'
                ) | translate
            "
            [close]="
                product_id
                    ? [base_route, 'view', product_id()]
                    : [base_route, 'list', 'purchase-orders']
            "
            [loading]="loading()"
            (confirm)="save()"
        >
            <form>
                <div class="flex flex-col space-y-2">
                    <label for="order-number">
                        {{ 'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate
                        }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                    | translate
                            "
                            [formField]="form.purchase_order_number"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex flex-col space-y-2">
                    <label for="invoice-number">{{
                        'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate
                    }}</label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                    | translate
                            "
                            [formField]="form.invoice_number"
                        />
                        <mat-error>{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE_REQUIRED'
                                | translate
                        }}</mat-error>
                    </mat-form-field>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="purchase-date">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate
                        }}</label>
                        <a-date-field
                            [from]="from.valueOf()"
                            [formField]="form.purchase_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="unit-price">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <div matPrefix>$</div>
                            <input matInput [formField]="form.unit_price" />
                        </mat-form-field>
                    </div>
                </div>
                <div class="flex space-x-2">
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-start-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                    | translate
                            }}
                        </label>
                        <a-date-field
                            [from]="from.valueOf()"
                            [formField]="form.expected_service_start_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-end-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate
                            }}
                        </label>
                        <a-date-field
                            [formField]="form.expected_service_end_date"
                        ></a-date-field>
                    </div>
                </div>
                @if (item()?.id) {
                    <h3 class="mb-2 font-medium">
                        {{
                            'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS'
                                | translate
                                    : {
                                          count: asset_list().length || '0',
                                      }
                        }}
                    </h3>
                }
                @if (item()?.id) {
                    <simple-table
                        class="block w-full text-sm"
                        [data]="asset_list()"
                        [columns]="[
                            { key: 'name', name: 'FORM.NAME' | translate },
                            {
                                key: 'identifier',
                                name:
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_NAME'
                                    | translate,
                            },
                            {
                                key: 'serial_number',
                                name:
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_SERIAL'
                                    | translate,
                            },
                        ]"
                        [empty_message]="
                            'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS_EMPTY'
                                | translate
                        "
                    ></simple-table>
                }
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    imports: [
        FullscreenModalShellComponent,
        SimpleTableComponent,
        TranslatePipe,
        DateFieldComponent,
        MatFormFieldModule,
        MatInputModule,
        FormField,
    ],
})
export class AssetPurchaseOrderFormComponent
    extends AsyncHandler
    implements OnInit
{
    private _state = inject(AssetManagerStateService);
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _org = inject(OrganisationService);

    private readonly _form_ref = generateAssetPurchaseOrderForm();
    public readonly form = this._form_ref.form;
    public readonly model = this._form_ref.model;
    public readonly loading = signal('');
    public readonly product_id = signal('');
    public readonly _id = signal('');
    public readonly item = signal<AssetPurchaseOrder | null>(null);
    public readonly from = addYears(Date.now(), -5);
    private readonly _asset_list = resource({
        params: () => ({
            id: this._id(),
            building: this._org.active_building()?.id,
        }),
        defaultValue: [] as any[],
        loader: async ({ params }) => {
            if (!params.id || !params.building) return [];
            const [asset_list, groups] = await Promise.all([
                queryAssets({ order_id: params.id }),
                queryAllPages(
                    queryAssetTypes({
                        zone_id: this._org.building.id,
                        limit: 200,
                    }),
                ),
            ]);
            return asset_list.data.map((asset) => ({
                ...asset,
                name:
                    groups.find(
                        (_) => _.id === (asset as any).asset_type_id,
                    )?.name || asset.id,
            }));
        },
    });
    public readonly asset_list = this._asset_list.value;

    public get base_route() {
        return this._state.base_route;
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading.set(
                        i18n('APP.CONCIERGE.ASSETS_PURCHASE_LOADING'),
                    );
                    const asset = await showAssetPurchaseOrder(
                        params.get('id'),
                    ).catch(() => null);
                    if (!asset) {
                        notifyError(
                            i18n('APP.CONCIERGE.ASSETS_PURCHASE_LOAD_ERROR'),
                        );
                        this._router.navigate([this.base_route]);
                    }
                    patchSignalModel(this.model, {
                        ...asset,
                        purchase_date: asset.purchase_date * 1000,
                        expected_service_end_date:
                            asset.expected_service_end_date * 1000,
                        expected_service_start_date:
                            asset.expected_service_start_date * 1000,
                    });
                    this.item.set(asset);
                    this._id.set(asset.id);
                    this.loading.set('');
                }
                if (params.get('group_id')) {
                    this.product_id.set(params.get('group_id'));
                }
            }),
        );
        this._state.setOptions({ active_item: null });
    }

    public async save() {
        if (!this.form().valid()) return;
        this.loading.set(i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVING'));
        const data = { ...this.model() };
        data.purchase_date = getUnixTime(data.purchase_date) || null;
        data.expected_service_start_date =
            getUnixTime(data.expected_service_start_date) ||
            this.item()?.expected_service_start_date ||
            null;
        data.expected_service_end_date =
            getUnixTime(data.expected_service_end_date) ||
            this.item()?.expected_service_end_date ||
            null;
        data.unit_price = +data.unit_price;
        const item = await saveAssetPurchaseOrder(data as any).catch((e) => {
            this.loading.set('');
            notifyError(
                i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVE_ERROR', {
                    error: e.message || e,
                }),
            );
            throw e;
        });
        this.form().reset();
        notifySuccess(i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVE_SUCCESS'));
        this._state.postChange();
        if (this.product_id()) {
            this._router.navigate([this.base_route, 'view', this.product_id()]);
        } else {
            this._router.navigate([this.base_route, 'list', 'purchase-orders']);
        }
        this.loading.set('');
    }
}
