import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler, unique } from '@placeos/common';
import { CustomTooltipComponent, openConfirmModal } from '@placeos/components';
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
import { combineLatest } from 'rxjs';

@Component({
    selector: 'asset-view',
    template: `
        <div
            class="h-full w-full flex flex-col"
            *ngIf="!loading && (item | async); else loading_state"
        >
            <div class="w-full pr-8 pl-4 pt-8 pb-4 bg-base-100 flex space-x-2">
                <a
                    icon
                    matRipple
                    [routerLink]="['/book/assets', 'new', 'list', 'items']"
                >
                    <app-icon>arrow_back</app-icon>
                </a>
                <div class="flex flex-col">
                    <h2 class="text-2xl font-medium">
                        {{ 'APP.CONCIERGE.ASSETS_MANAGE_HEADER' | translate }}
                    </h2>
                    <div>{{ (item | async)?.name }}</div>
                </div>
                <div class="flex-1"></div>
                <a
                    btn
                    matRipple
                    class="h-12 w-32 "
                    [routerLink]="[base_route, 'manage', 'group']"
                    [queryParams]="{ id: (item | async)?.id }"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl">edit</app-icon>
                        <div class="pr-2">{{ 'COMMON.EDIT' | translate }}</div>
                    </div>
                </a>
                <button
                    btn
                    matRipple
                    customTooltip
                    class="h-12 w-32 bg-base-100 border-error text-error"
                    [content]="delete_tooltip"
                >
                    <div class="flex items-center space-x-2">
                        <app-icon class="text-xl">delete</app-icon>
                        <div class="pr-2">
                            {{ 'COMMON.DELETE' | translate }}
                        </div>
                    </div>
                </button>
            </div>
            <div class="flex items-center px-8 space-x-4 mb-4">
                <div
                    class="bg-base-200 flex-1 h-64 w-[24rem] rounded-xl overflow-hidden"
                >
                    <image-carousel
                        [images]="(item | async)?.images || []"
                    ></image-carousel>
                </div>
                <div
                    class="w-1/2 flex-1 p-4 flex flex-col space-y-4 h-64 rounded-lg border border-base-300"
                >
                    <div class="w-full flex-1 h-1/2 overflow-auto">
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
                            <span class="opacity-30">{{
                                'COMMON.DESCRIPTION_EMPTY' | translate
                            }}</span>
                        </ng-template>
                    </div>
                    <div
                        class="rounded bg-base-100 border border-base-200 w-full divide-y divide-base-200"
                    >
                        <div class="flex items-center justify-between p-2 h-16">
                            <div class="pl-2">
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_AVAILABLE'
                                        | translate
                                            : {
                                                  count:
                                                      (asset_list | async)
                                                          .length -
                                                          (requests | async)
                                                              ?.length || 0,
                                              }
                                }}
                            </div>
                            <!-- <button
                                btn
                                matRipple
                                [disabled]="
                                    (asset_list | async).length -
                                        (requests | async)?.length ===
                                    0
                                "
                            >
                                Assign to Location
                            </button> -->
                        </div>
                        <div class="flex items-center justify-between p-2 h-16">
                            <div class="pl-2">
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_IN_USE'
                                        | translate
                                            : {
                                                  count:
                                                      (requests | async)
                                                          ?.length || 0,
                                              }
                                }}
                            </div>
                            <button
                                btn
                                matRipple
                                (click)="viewLocations()"
                                [disabled]="
                                    (asset_list | async).length -
                                        (requests | async)?.length !==
                                    0
                                "
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_VIEW_LOCATIONS'
                                        | translate
                                }}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <mat-tab-group class="flex-1 h-px">
                <mat-tab
                    [label]="'APP.CONCIERGE.ASSETS_ITEM_TAB_ASSETS' | translate"
                >
                    <div class="max-w-[768px] mx-auto px-8 py-4">
                        <div class="flex w-full items-center space-x-2 mb-2">
                            <a
                                btn
                                matRipple
                                class="flex-1"
                                [routerLink]="[base_route, 'manage', 'asset']"
                                [queryParams]="{ group_id: (item | async)?.id }"
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_ADD'
                                        | translate
                                }}
                            </a>
                            <a
                                btn
                                matRipple
                                class="flex-1"
                                [routerLink]="[
                                    base_route,
                                    'manage',
                                    'asset-bulk',
                                ]"
                                [queryParams]="{ group_id: (item | async)?.id }"
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD'
                                        | translate
                                }}
                            </a>
                        </div>
                        <simple-table
                            class="min-w-[40rem] block text-sm"
                            [data]="asset_list"
                            [columns]="[
                                {
                                    key: 'id',
                                    name:
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_ID'
                                        | translate,
                                },
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
                                    size: '5.5rem',
                                    sortable: false,
                                },
                            ]"
                            [empty_message]="
                                'APP.CONCIERGE.ASSETS_ITEM_ASSET_EMPTY'
                                    | translate
                            "
                            [sortable]="true"
                        ></simple-table>

                        <ng-template #action_template let-row="row">
                            <div
                                class="flex w-full items-center justify-end p-2"
                            >
                                <a
                                    icon
                                    matRipple
                                    [routerLink]="[
                                        base_route,
                                        'manage',
                                        'asset',
                                    ]"
                                    [queryParams]="{
                                        id: row.id,
                                        group_id: (item | async)?.id,
                                    }"
                                    [matTooltip]="
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_EDIT'
                                            | translate
                                    "
                                >
                                    <app-icon>edit</app-icon>
                                </a>
                                <button
                                    icon
                                    matRipple
                                    class="text-error"
                                    (click)="removeAsset(row)"
                                    [matTooltip]="
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_REMOVE'
                                            | translate
                                    "
                                >
                                    <app-icon>delete</app-icon>
                                </button>
                            </div>
                        </ng-template>
                    </div>
                </mat-tab>
                <mat-tab
                    [label]="'APP.CONCIERGE.ASSETS_ITEM_TAB_SPECS' | translate"
                >
                    <div class="max-w-[768px] mx-auto px-8 py-4">
                        <h3 class="p-2">
                            {{
                                'APP.CONCIERGE.ASSETS_ITEM_GENERAL' | translate
                            }}
                        </h3>
                        <div
                            data-table
                            class="bg-base-100 border border-base-200"
                        >
                            <div
                                class="flex items-center justify-between p-2 even:bg-base-200"
                            >
                                <div class="w-32 flex-1 text-sm font-medium">
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_BRAND'
                                            | translate
                                    }}
                                </div>
                                <div>
                                    {{ (item | async)?.brand || '~None~' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </mat-tab>
                <mat-tab
                    [label]="
                        'APP.CONCIERGE.ASSETS_ITEM_TAB_PURCHASE_INFO'
                            | translate
                    "
                >
                    <div class="max-w-[768px] mx-auto px-8 py-4">
                        <a
                            btn
                            matRipple
                            class="mb-2"
                            [routerLink]="[
                                base_route,
                                'manage',
                                'purchase-order',
                            ]"
                            [queryParams]="{ group_id: (item | async)?.id }"
                        >
                            {{
                                'APP.CONCIERGE.ASSETS_PURCHASE_ADD' | translate
                            }}
                        </a>
                        <simple-table
                            class="min-w-[40rem] block text-sm"
                            asset-purchases
                            [data]="(item | async)?.purchase_orders"
                            [columns]="[
                                {
                                    key: 'purchase_order_number',
                                    name:
                                        'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER'
                                        | translate,
                                },
                                {
                                    key: 'invoice_number',
                                    name:
                                        'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE'
                                        | translate,
                                },
                                {
                                    key: 'expected_service_start_date',
                                    name:
                                        'APP.CONCIERGE.ASSETS_PURCHASE_START'
                                        | translate,
                                    content: date_template,
                                },
                                {
                                    key: 'expected_service_end_date',
                                    name:
                                        'APP.CONCIERGE.ASSETS_PURCHASE_END'
                                        | translate,
                                    content: date_template,
                                },
                                {
                                    key: 'actions',
                                    name: ' ',
                                    content: po_action_template,
                                    size: '5.5rem',
                                    sortable: false,
                                },
                            ]"
                            [empty_message]="
                                'APP.CONCIERGE.ASSETS_ITEM_PURCHASES_EMPTY'
                                    | translate
                            "
                            [sortable]="true"
                        ></simple-table>

                        <ng-template #po_action_template let-row="row">
                            <div
                                class="flex w-full items-center justify-end p-2"
                            >
                                <a
                                    icon
                                    matRipple
                                    [routerLink]="[
                                        base_route,
                                        'manage',
                                        'purchase-order',
                                    ]"
                                    [queryParams]="{
                                        id: row.id,
                                        group_id: row?.id,
                                    }"
                                >
                                    <app-icon class="text-lg">edit</app-icon>
                                </a>
                                <button
                                    icon
                                    matRipple
                                    class="text-error"
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
                <p>{{ 'APP.CONCIERGE.ASSETS_ITEM_LOADING' | translate }}</p>
            </div>
        </ng-template>
        <ng-template #date_template let-data="data">
            <div class="p-4">
                {{ data * 1000 | date: 'mediumDate' }}
                <span *ngIf="!data" class="opacity-30">
                    {{ 'COMMON.DATE_EMPTY' | translate }}
                </span>
            </div>
        </ng-template>
        <ng-template #delete_tooltip>
            <div
                class="p-4 bg-base-100 rounded my-2 text-center w-[18rem]"
                *ngIf="!deleting; else delete_loading"
            >
                <p>{{ 'APP.CONCIERGE.ASSETS_ITEM_DELETE_MSG' | translate }}</p>
                <div class="flex items-center space-x-2 mt-6">
                    <button
                        btn
                        matRipple
                        class="inverse flex-1 w-24"
                        (click)="closeTooltip()"
                    >
                        {{ 'COMMON.FALSE' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="error flex-1 w-24"
                        (click)="deleteAsset()"
                    >
                        {{
                            'APP.CONCIERGE.ASSETS_ITEM_DELETE_ACTION'
                                | translate
                        }}
                    </button>
                </div>
            </div>
            <ng-template #delete_loading>
                <div
                    class="p-4 bg-base-100 rounded my-2 w-64 h-36 flex
                    l  flex-col items-center justify-center space-y-2"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.ASSETS_ITEM_DELETE_LOADING'
                                | translate
                        }}
                    </p>
                </div>
            </ng-template>
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    standalone: false
})
export class AssetViewComponent extends AsyncHandler {
    public loading = false;
    public deleting = false;
    public readonly item = this._state.active_product;
    public readonly asset_list = combineLatest([
        this.item,
        this._state.extra_assets,
    ]).pipe(
        map(([item, assets]) => {
            if (!item) return [];
            return unique(
                [
                    ...item.assets,
                    ...assets.filter((_) => _.type_id === item.id),
                ],
                'id',
            );
        }),
    );
    public readonly requests = this._state.active_product_requests.pipe(
        map((req) =>
            req.filter(
                (_) =>
                    _.date <= Date.now() &&
                    addMinutes(_.date, _.duration).valueOf() >= Date.now(),
            ),
        ),
    );

    @ViewChild(CustomTooltipComponent)
    public _tooltip_el: CustomTooltipComponent;

    public async deleteAsset() {
        this.deleting = true;
        await this._state.deleteActiveProduct();
        this.deleting = false;
        this._router.navigate([this._state.base_route, 'list', 'items']);
        this.closeTooltip();
    }

    public closeTooltip() {
        this._tooltip_el?.close();
    }

    public get code() {
        return this._org.currency_code;
    }

    public get base_route() {
        return this._state.base_route;
    }

    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _state: AssetManagerStateService,
        private _dialog: MatDialog,
        private _org: OrganisationService,
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
            }),
        );
        this.timeout(
            'no_asset',
            () => this._router.navigate([this._state.base_route]),
            1000,
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
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading('Deleting asset...');
        await deleteAsset(asset.id).toPromise();
        await removeAssetRequests(asset.id);
        const item = await this._state.active_product.pipe(first()).toPromise();
        this._state.setOptions({ active_item: '' });
        setTimeout(
            () => this._state.setOptions({ active_item: item.id }),
            1000,
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
            this._dialog,
        );
        if (resp.reason !== 'done') return;
        resp.loading('Deleting purchase order...');
        await deleteAssetPurchaseOrder(asset.id).toPromise();
        const item = await this._state.active_product.pipe(first()).toPromise();
        this._state.setOptions({ active_item: '' });
        setTimeout(
            () => this._state.setOptions({ active_item: item.id }),
            1000,
        );
        resp.close();
    }
}
