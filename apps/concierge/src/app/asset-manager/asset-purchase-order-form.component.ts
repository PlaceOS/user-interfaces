import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import {
    AssetPurchaseOrder,
    generateAssetPurchaseOrderForm,
    queryAssetGroups,
    queryAssets,
    saveAssetPurchaseOrder,
    showAssetPurchaseOrder,
} from '@placeos/assets';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, notifyError, notifySuccess } from '@placeos/common';
import { addYears, getUnixTime } from 'date-fns';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { filter, shareReplay, switchMap } from 'rxjs/operators';
import { OrganisationService } from '@placeos/organisation';

@Component({
    selector: 'asset-purchase-order-form',
    template: `
        <div class="absolute inset-0 bg-base-100">
            <div
                class="h-full max-w-[32rem] mx-auto flex flex-col"
                *ngIf="!loading; else load_state"
            >
                <header class="p-4">
                    <h2 class="text-center text-xl font-medium">
                        {{ form.value.id ? 'Edit' : 'Add' }} Purchase Order
                    </h2>
                </header>
                <main class="flex-1 h-1/2 overflow-auto" [formGroup]="form">
                    <div class="flex flex-col space-y-2">
                        <label for="order-number">
                            Order Number<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="order-number"
                                placeholder="Order Number"
                                formControlName="order_number"
                            />
                            <mat-error>Order number is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex flex-col space-y-2">
                        <label for="invoice-number"> Invoice Number </label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                name="invoice-number"
                                placeholder="Invoice Number"
                                formControlName="invoice_number"
                            />
                            <mat-error>Invoice number is required</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex-1 flex flex-col space-y-2">
                            <label for="purchase-date"> Purchase Date </label>
                            <a-date-field
                                name="purchase-date"
                                [from]="from"
                                formControlName="purchase_date"
                            ></a-date-field>
                        </div>
                        <div class="flex-1 flex flex-col space-y-2">
                            <label for="unit-price"> Purchase Price </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <div matPrefix>$</div>
                                <input
                                    matInput
                                    name="unit-price"
                                    [from]="from"
                                    formControlName="unit_price"
                                />
                            </mat-form-field>
                        </div>
                    </div>
                    <div class="flex space-x-2">
                        <div class="flex flex-col space-y-2">
                            <label for="depreciation-start-date">
                                Expected Service Start Date
                            </label>
                            <a-date-field
                                name="depreciation-start-date"
                                [from]="from"
                                formControlName="expected_service_start_date"
                            ></a-date-field>
                        </div>
                        <div class="flex flex-col space-y-2">
                            <label for="depreciation-end-date">
                                Expected Service End Date
                            </label>
                            <a-date-field
                                name="depreciation-end-date"
                                formControlName="expected_service_end_date"
                            ></a-date-field>
                        </div>
                    </div>
                    <h3 *ngIf="item?.id" class="font-medium mb-2">
                        Associated Assets ({{
                            (asset_list | async)?.length || '0'
                        }})
                    </h3>
                    <simple-table
                        class="w-full block text-sm"
                        *ngIf="item?.id"
                        [data]="(asset_list | async) || []"
                        [columns]="[
                            { key: 'name', name: 'Name' },
                            { key: 'identifier', name: 'Label/Friendly Name' },
                            { key: 'serial_number', name: 'Serial Number' },
                            {
                                key: 'actions',
                                name: ' ',
                                content: action_template
                            }
                        ]"
                        empty_message="No assets for this purchase order"
                    ></simple-table>
                </main>
                <footer
                    class="flex justify-end space-x-2 p-2 border-t border-base-200"
                >
                    <a
                        btn
                        matRipple
                        class="w-32 inverse"
                        [routerLink]="
                            product_id
                                ? [base_route, 'view', product_id]
                                : [base_route, 'list', 'purchase-orders']
                        "
                    >
                        Cancel
                    </a>
                    <button btn matRipple class="w-32" (click)="save()">
                        Save
                    </button>
                </footer>
            </div>
        </div>
        <ng-template #load_state>
            <div
                class="absolute inset-0 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ loading }}</p>
            </div>
        </ng-template>
    `,
    styles: [``],
})
export class AssetPurchaseOrderFormComponent extends AsyncHandler {
    public readonly form = generateAssetPurchaseOrderForm();
    public loading: string = '';
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
        shareReplay(1)
    );

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _state: AssetManagerStateService,
        private _route: ActivatedRoute,
        private _router: Router,
        private _org: OrganisationService
    ) {
        super();
    }

    public ngOnInit() {
        this.subscription(
            'route.query',
            this._route.queryParamMap.subscribe(async (params) => {
                if (params.get('id')) {
                    this.loading = 'Loading purchase order details...';
                    const asset = await showAssetPurchaseOrder(params.get('id'))
                        .toPromise()
                        .catch(() => null);
                    if (!asset) {
                        notifyError('Unable to load purchase order details.');
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
            })
        );
        this._state.setOptions({ active_item: null });
    }

    public async save() {
        if (!this.form.valid) return;
        this.loading = 'Saving Product...';
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
        const item = await saveAssetPurchaseOrder(data as any)
            .toPromise()
            .catch((e) => {
                this.loading = '';
                notifyError(`Error saving purchase order.: ${e.message}`);
                throw e;
            });
        this.form.reset();
        notifySuccess('Successfully saved purchase order.');
        this._state.postChange();
        if (this.product_id) {
            this._router.navigate([this.base_route, 'view', this.product_id]);
        } else {
            this._router.navigate([this.base_route, 'list', 'purchase-orders']);
        }
        this.loading = '';
    }
}
