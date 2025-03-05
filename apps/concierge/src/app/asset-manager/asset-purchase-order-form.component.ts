import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {
    AssetPurchaseOrder,
    generateAssetPurchaseOrderForm,
    queryAssetGroups,
    queryAssets,
    saveAssetPurchaseOrder,
    showAssetPurchaseOrder,
} from '@placeos/assets';
import {
    AsyncHandler,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addYears, getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-purchase-order-form',
    template: `
        <fullscreen-modal-shell
            [heading]="
                (form.value.id
                    ? 'APP.CONCIERGE.ASSETS_PURCHASE_EDIT'
                    : 'APP.CONCIERGE.ASSETS_PURCHASE_NEW'
                ) | translate
            "
            [close]="
                product_id
                    ? [base_route, 'view', product_id]
                    : [base_route, 'list', 'purchase-orders']
            "
            [loading]="loading"
            (confirm)="save()"
        >
            <form [formGroup]="form">
                <div class="flex flex-col space-y-2">
                    <label for="order-number">
                        {{ 'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate
                        }}<span>*</span>
                    </label>
                    <mat-form-field appearance="outline">
                        <input
                            matInput
                            name="order-number"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                    | translate
                            "
                            formControlName="order_number"
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
                            name="invoice-number"
                            [placeholder]="
                                'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                    | translate
                            "
                            formControlName="invoice_number"
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
                            name="purchase-date"
                            [from]="from"
                            formControlName="purchase_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="unit-price">{{
                            'APP.CONCIERGE.ASSETS_PURCHASE_PRICE' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <div matPrefix>$</div>
                            <input
                                matInput
                                name="unit-price"
                                formControlName="unit_price"
                            />
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
                            name="depreciation-start-date"
                            [from]="from"
                            formControlName="expected_service_start_date"
                        ></a-date-field>
                    </div>
                    <div class="flex flex-1 flex-col space-y-2">
                        <label for="depreciation-end-date">
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate
                            }}
                        </label>
                        <a-date-field
                            name="depreciation-end-date"
                            formControlName="expected_service_end_date"
                        ></a-date-field>
                    </div>
                </div>
                <h3 *ngIf="item?.id" class="mb-2 font-medium">
                    {{
                        'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS'
                            | translate
                                : { count: (asset_list | async)?.length || '0' }
                    }}
                </h3>
                <simple-table
                    class="block w-full text-sm"
                    *ngIf="item?.id"
                    [data]="(asset_list | async) || []"
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
                        {
                            key: 'actions',
                            name: ' ',
                            content: action_template,
                        },
                    ]"
                    [empty_message]="
                        'APP.CONCIERGE.ASSETS_PURCHASE_ASSETS_EMPTY' | translate
                    "
                ></simple-table>
            </form>
        </fullscreen-modal-shell>
    `,
    styles: [``],
    standalone: false,
})
export class AssetPurchaseOrderFormComponent
    extends AsyncHandler
    implements OnInit
{
    public readonly form = generateAssetPurchaseOrderForm();
    public loading = '';
    public product_id: string;
    public readonly _id = new BehaviorSubject('');
    public item: AssetPurchaseOrder;
    public readonly from = addYears(Date.now(), -5);
    public readonly asset_list = combineLatest([
        this._id,
        this._org.active_building,
    ]).pipe(
        filter(([_, bld]) => !!_ && !!bld),
        switchMap(([id]) => queryAssets({ order_id: id })),
        switchMap(async (asset_list) => {
            const groups = await queryAssetGroups({
                zone_id: this._org.building.id,
                limit: 500,
            }).toPromise();
            return asset_list.map((asset) => ({
                ...asset,
                name:
                    groups.find((_) => _.id === (asset as any).asset_type_id)
                        ?.name || asset.id,
            }));
        }),
        shareReplay(1),
    );

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
                        'APP.CONCIERGE.ASSETS_PURCHASE_LOADING',
                    );
                    const asset = await showAssetPurchaseOrder(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!asset) {
                        notifyError(
                            i18n('APP.CONCIERGE.ASSETS_PURCHASE_LOAD_ERROR'),
                        );
                        this._router.navigate([this.base_route]);
                    }
                    this.form.patchValue({
                        ...asset,
                        order_number: asset.purchase_order_number,
                        purchase_date: asset.purchase_date * 1000,
                        expected_service_end_date:
                            asset.expected_service_end_date * 1000,
                        expected_service_start_date:
                            asset.expected_service_start_date * 1000,
                    });
                    this.item = asset;
                    this._id.next(asset.id);
                    this.loading = '';
                }
                if (params.get('group_id')) {
                    this.product_id = params.get('group_id');
                }
            }),
        );
        this._state.setOptions({ active_item: null });
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading = i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVING');
        const data = this.form.value;
        data.purchase_date = getUnixTime(data.purchase_date) || null;
        data.expected_service_start_date =
            getUnixTime(data.expected_service_start_date) ||
            this.item?.expected_service_start_date ||
            null;
        data.expected_service_end_date =
            getUnixTime(data.expected_service_end_date) ||
            this.item?.expected_service_end_date ||
            null;
        data.unit_price = +data.unit_price;
        const item = await saveAssetPurchaseOrder(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(
                    i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVE_ERROR', {
                        error: e.message || e,
                    }),
                );
                throw e;
            });
        this.form.reset();
        notifySuccess(i18n('APP.CONCIERGE.ASSETS_PURCHASE_SAVE_SUCCESS'));
        this._state.postChange();
        if (this.product_id) {
            this._router.navigate([this.base_route, 'view', this.product_id]);
        } else {
            this._router.navigate([this.base_route, 'list', 'purchase-orders']);
        }
        this.loading = '';
    }
}
