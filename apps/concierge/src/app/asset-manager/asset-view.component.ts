import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, flatten, openConfirmModal } from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { first, map } from 'rxjs/operators';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';
import {
    Asset,
    AssetPurchaseOrder,
    deleteAsset,
    deleteAssetPurchaseOrder,
    removeAssetRequests,
} from '@placeos/assets';
import { addMinutes } from 'date-fns';

@Component({
    selector: 'asset-view',
    template: `
        <div
            class="h-full w-full flex flex-col"
            *ngIf="!loading && (item | async); else loading_state"
        >
            <div
                class="flex items-center space-x-4 p-2 bg-white border-b border-gray-200"
            >
                <a
                    btn
                    matRipple
                    class="inverse"
                    [routerLink]="['/asset-manager', 'list', 'items']"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">arrow_back</app-icon>
                        <div class="mr-2">Back</div>
                    </div>
                </a>
                <div class="flex items-center space-x-2 font-medium">
                    <span>Assets</span>
                    <span>
                        <app-icon class="text-2xl">chevron_right</app-icon>
                    </span>
                    <span>{{ (item | async)?.category?.name }}</span>
                    <span>
                        <app-icon class="text-2xl">chevron_right</app-icon>
                    </span>
                    <span>{{ (item | async)?.name }}</span>
                </div>
            </div>
            <div class="flex items-center">
                <div
                    class="bg-white dark:bg-neutral-700 flex-1 w-1/2 h-[22.5rem]"
                >
                    <image-carousel
                        [images]="(item | async)?.images || []"
                    ></image-carousel>
                </div>
                <div class="w-[32rem] h-[22.5rem] px-4 flex flex-col">
                    <div
                        class="w-full flex items-center justify-between border-b border-gray-300 dark:border-neutral-500"
                    >
                        <div class="font-medium">
                            {{ (item | async)?.name }}
                        </div>
                        <div class="flex items-center text-sm ">
                            <a
                                button
                                btn
                                matRipple
                                class="clear"
                                [routerLink]="[
                                    '/asset-manager',
                                    'manage',
                                    'group'
                                ]"
                                [queryParams]="{ id: (item | async)?.id }"
                            >
                                <div
                                    class="flex items-center text-blue-600 hover:text-blue-900"
                                >
                                    <app-icon class="text-lg">edit</app-icon>
                                    <div class="mr-2 underline">Edit</div>
                                </div>
                            </a>
                            <div class="w-px h-4 bg-gray-300"></div>
                            <button btn matRipple class="clear">
                                <div
                                    class="flex items-center text-blue-600 hover:text-blue-900"
                                    customTooltip
                                    [content]="delete_tooltip"
                                >
                                    <app-icon class="text-lg">delete</app-icon>
                                    <div class="mr-2 underline">Delete</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="py-4 w-full flex-1 h-1/2 overflow-auto">
                        <ng-container
                            *ngIf="
                                (item | async)?.description;
                                else no_desc_state
                            "
                        >
                            {{
                                (item | async)?.description ||
                                    '~No Description~'
                            }}
                        </ng-container>
                        <ng-template #no_desc_state>
                            <span class="opacity-30">No Description</span>
                        </ng-template>
                    </div>
                    <div
                        class="rounded bg-white dark:bg-neutral-700 shadow border border-gray-300 dark:border-neutral-500 w-full divide-y divide-gray-200 dark:divide-neutral-500"
                    >
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                Available:
                                {{
                                    (item | async)?.assets.length -
                                        (requests | async)?.length || 0
                                }}
                            </div>
                            <!-- <button
                                btn
                                matRipple
                                [disabled]="
                                    (item | async)?.assets.length -
                                        (requests | async)?.length ===
                                    0
                                "
                            >
                                Assign to Location
                            </button> -->
                        </div>
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                In Use:
                                {{ (requests | async)?.length || 0 }}
                            </div>
                            <button
                                btn
                                matRipple
                                (click)="viewLocations()"
                                [disabled]="
                                    (item | async)?.assets.length -
                                        (requests | async)?.length !==
                                    0
                                "
                            >
                                View Locations
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <mat-tab-group class="flex-1 h-px">
                <mat-tab label="Assets">
                    <div class="max-w-[768px] mx-auto p-4">
                        <h3 class="p-2">Assets</h3>
                        <div class="flex w-full items-center space-x-2 mb-2">
                            <a
                                btn
                                matRipple
                                class="flex-1"
                                [routerLink]="[
                                    '/asset-manager',
                                    'manage',
                                    'asset'
                                ]"
                                [queryParams]="{ group_id: (item | async)?.id }"
                            >
                                Add Asset
                            </a>
                            <a
                                btn
                                matRipple
                                class="flex-1"
                                [routerLink]="[
                                    '/asset-manager',
                                    'manage',
                                    'asset-bulk'
                                ]"
                                [queryParams]="{ group_id: (item | async)?.id }"
                            >
                                Bulk Add Asset
                            </a>
                        </div>
                        <custom-table
                            asset-view
                            class="w-full block text-sm"
                            [dataSource]="(item | async)?.assets || []"
                            [columns]="[
                                'id',
                                'identifier',
                                'serial_number',
                                'actions'
                            ]"
                            [display_column]="[
                                'ID',
                                'Label/Friendly Name',
                                'Serial Number',
                                ' '
                            ]"
                            [column_size]="['10r', '14r', '8r', 'flex']"
                            [template]="{
                                actions: action_template,
                            }"
                            empty="No assets for this product"
                        >
                        </custom-table>
                        <ng-template #action_template let-row="row">
                            <div class="flex w-full items-center justify-end">
                                <a
                                    btn
                                    icon
                                    matRipple
                                    [routerLink]="[
                                        '/asset-manager',
                                        'manage',
                                        'asset'
                                    ]"
                                    [queryParams]="{
                                        id: row.id,
                                        group_id: (item | async)?.id
                                    }"
                                    class="clear"
                                >
                                    <app-icon class="text-lg">edit</app-icon>
                                </a>
                                <button
                                    btn
                                    icon
                                    matRipple
                                    (click)="removeAsset(row)"
                                >
                                    <app-icon class="text-lg">delete</app-icon>
                                </button>
                            </div>
                        </ng-template>
                    </div>
                </mat-tab>
                <mat-tab label="Specifications">
                    <div class="max-w-[768px] mx-auto p-4">
                        <h3 class="p-2">General</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                        >
                            <div class="flex items-center p-2">
                                <label>Brand</label>
                                <div>
                                    {{ (item | async)?.brand || '~None~' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </mat-tab>
                <mat-tab label="Purchase information">
                    <div class="max-w-[768px] mx-auto p-4">
                        <h3 class="p-2">Purchase Orders</h3>
                        <a
                            btn
                            matRipple
                            class="mb-2"
                            [routerLink]="[
                                '/asset-manager',
                                'manage',
                                'purchase-order'
                            ]"
                            [queryParams]="{ group_id: (item | async)?.id }"
                        >
                            Add Purchase Order
                        </a>

                        <custom-table
                            asset-view
                            class="w-full block text-sm"
                            [dataSource]="(item | async)?.purchase_orders || []"
                            [columns]="[
                                'purchase_order_number',
                                'invoice_number',
                                'expected_service_start_date',
                                'expected_service_end_date',
                                'actions'
                            ]"
                            [display_column]="[
                                'Order Number',
                                'Invoice Number',
                                'Service Start',
                                'Service End',
                                ' '
                            ]"
                            [column_size]="['10r', '10r', '10r', '10r', 'flex']"
                            [template]="{
                                actions: po_action_template,
                                expected_service_start_date: date_template,
                                expected_service_end_date: date_template
                            }"
                            empty="No assets for this product"
                        >
                        </custom-table>
                        <ng-template #po_action_template let-row="row">
                            <div class="flex w-full items-center justify-end">
                                <a
                                    btn
                                    icon
                                    matRipple
                                    [routerLink]="[
                                        '/asset-manager',
                                        'manage',
                                        'purchase-order'
                                    ]"
                                    [queryParams]="{
                                        id: row.id,
                                        group_id: row?.id
                                    }"
                                    class="clear"
                                >
                                    <app-icon class="text-lg">edit</app-icon>
                                </a>
                                <button
                                    btn
                                    icon
                                    matRipple
                                    (click)="removePurchaseOrder(row)"
                                >
                                    <app-icon class="text-lg">delete</app-icon>
                                </button>
                            </div>
                        </ng-template>
                    </div>
                </mat-tab>
            </mat-tab-group>
        </div>
        <ng-template #loading_state>
            <div
                class="h-full w-full flex flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>Loading product details...</p>
            </div>
        </ng-template>
        <ng-template #date_template let-data="data">
            {{ data * 1000 | date: 'mediumDate' }}
            <span *ngIf="!data" class="opacity-30"> No Date </span>
        </ng-template>
        <ng-template #delete_tooltip>
            <div
                class="p-4 bg-white dark:bg-neutral-700 rounded my-2 text-center w-[18rem]"
                *ngIf="!deleting; else delete_loading"
            >
                <p>Are you sure you want to permanently delete this product?</p>
                <div class="flex items-center space-x-2 mt-6">
                    <button
                        btn
                        matRipple
                        class="inverse flex-1 w-24"
                        (click)="closeTooltip()"
                    >
                        No
                    </button>
                    <button
                        btn
                        matRipple
                        class="error flex-1 w-24"
                        (click)="deleteAsset()"
                    >
                        Yes, delete
                    </button>
                </div>
            </div>
            <ng-template #delete_loading>
                <div
                    class="p-4 bg-white dark:bg-neutral-700 rounded my-2 w-64 h-36 flex flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>Deleting product details...</p>
                </div>
            </ng-template>
        </ng-template>
        <ng-template #empty_invoices>
            <div class="p-2 opacity-30">No purchase orders</div>
        </ng-template>
        <ng-template #empty_items>
            <div class="p-2 opacity-30">No assets</div>
        </ng-template>
    `,
    styles: [
        `
            [data-table] > div:nth-child(2n) {
                background: #0001;
            }

            label {
                width: 10rem;
                min-width: 0;
            }
        `,
    ],
})
export class AssetViewComponent extends AsyncHandler {
    public loading = false;
    public deleting = false;
    public readonly item = this._state.active_product;
    public readonly requests = this._state.active_product_requests.pipe(
        map((req) =>
            req.filter(
                (_) =>
                    _.date <= Date.now() &&
                    addMinutes(_.date, _.duration).valueOf() >= Date.now()
            )
        )
    );

    @ViewChild(CustomTooltipComponent)
    public _tooltip_el: CustomTooltipComponent;

    public async deleteAsset() {
        this.deleting = true;
        await this._state.deleteActiveProduct();
        this.deleting = false;
        this._router.navigate(['/asset-manager', 'list', 'items']);
        this.closeTooltip();
    }

    public closeTooltip() {
        this._tooltip_el?.close();
    }

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _state: AssetManagerStateService,
        private _dialog: MatDialog,
        private _org: OrganisationService
    ) {
        super();
    }

    public viewLocations() {
        this._dialog.open(AssetLocationModalComponent);
    }

    public ngOnInit() {
        this.loading = true;
        this.subscription(
            'route.params',
            this._route.paramMap.subscribe((params) => {
                if (params.has('id')) {
                    this._state.setOptions({ active_item: params.get('id') });
                }
            })
        );
        this.timeout(
            'no_asset',
            () => this._router.navigate(['/asset-mananger']),
            1000
        );
        this._state.active_product.pipe(first((_) => !!_)).subscribe(() => {
            this.clearTimeout('no_asset');
            this.loading = false;
        });
    }

    public async removeAsset(asset: Asset) {
        const resp = await openConfirmModal(
            {
                title: 'Delete asset',
                content: `Are you sure you want to delete this asset?`,
                confirm_text: 'Delete',
                icon: { content: 'delete' },
            },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Deleting asset...');
        await deleteAsset(asset.id).toPromise();
        await removeAssetRequests(asset.id);
        const item = await this._state.active_product.pipe(first()).toPromise();
        this._state.setOptions({ active_item: '' });
        setTimeout(
            () => this._state.setOptions({ active_item: item.id }),
            1000
        );
        resp.close();
    }

    public async removePurchaseOrder(asset: AssetPurchaseOrder) {
        const resp = await openConfirmModal(
            {
                title: 'Delete purchase order',
                content: `Are you sure you want to delete this purchase order?`,
                confirm_text: 'Delete',
                icon: { content: 'delete' },
            },
            this._dialog
        );
        if (resp.reason !== 'done') return;
        resp.loading('Deleting purchase order...');
        await deleteAssetPurchaseOrder(asset.id).toPromise();
        const item = await this._state.active_product.pipe(first()).toPromise();
        this._state.setOptions({ active_item: '' });
        setTimeout(
            () => this._state.setOptions({ active_item: item.id }),
            1000
        );
        resp.close();
    }
}
