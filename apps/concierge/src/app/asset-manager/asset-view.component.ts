import { Component, inject, viewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import {
    Asset,
    AssetPurchaseOrder,
    deleteAsset,
    deleteAssetPurchaseOrder,
    removeAssetRequests,
} from '@placeos/assets';
import { AsyncHandler, unique } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { addMinutes } from 'date-fns';
import { openConfirmModal } from 'libs/components/src/lib/confirm-modal.component';
import { CustomTooltipComponent } from 'libs/components/src/lib/custom-tooltip.component';
import { combineLatest } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-view',
    template: `
        @if (!loading && (item | async)) {
            <div class="flex h-full w-full flex-col">
                <div
                    class="flex w-full space-x-2 bg-base-100 pb-4 pl-4 pr-8 pt-8"
                >
                    <a
                        icon
                        matRipple
                        [routerLink]="['/book/assets', 'list', 'items']"
                    >
                        <icon>arrow_back</icon>
                    </a>
                    <div class="flex flex-col">
                        <h2 class="text-2xl font-medium">
                            {{
                                'APP.CONCIERGE.ASSETS_MANAGE_HEADER' | translate
                            }}
                        </h2>
                        <div>{{ (item | async)?.name }}</div>
                    </div>
                    <div class="flex-1"></div>
                    <a
                        btn
                        matRipple
                        class="h-12 w-32"
                        [routerLink]="[base_route, 'manage', 'group']"
                        [queryParams]="{ id: (item | async)?.id }"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">edit</icon>
                            <div class="pr-2">
                                {{ 'COMMON.EDIT' | translate }}
                            </div>
                        </div>
                    </a>
                    <button
                        btn
                        matRipple
                        customTooltip
                        class="h-12 w-32 border-error bg-base-100 text-error"
                        [content]="delete_tooltip"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">delete</icon>
                            <div class="pr-2">
                                {{ 'COMMON.DELETE' | translate }}
                            </div>
                        </div>
                    </button>
                </div>
                <div class="mb-4 flex items-center space-x-4 px-8">
                    <div
                        class="h-64 w-[24rem] flex-1 overflow-hidden rounded-xl bg-base-200"
                    >
                        <image-carousel
                            [images]="(item | async)?.images || []"
                        ></image-carousel>
                    </div>
                    <div
                        class="flex h-64 w-1/2 flex-1 flex-col space-y-4 rounded-lg border border-base-300 p-4"
                    >
                        <div class="h-1/2 w-full flex-1 overflow-auto">
                            @if ((item | async)?.description) {
                                {{
                                    (item | async)?.description ||
                                        '~No Description~'
                                }}
                            } @else {
                                <span class="opacity-30">{{
                                    'COMMON.DESCRIPTION_EMPTY' | translate
                                }}</span>
                            }
                        </div>
                        <div
                            class="w-full divide-y divide-base-200 rounded border border-base-200 bg-base-100"
                        >
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
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
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
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
                <mat-tab-group class="h-px flex-1">
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.ASSETS_ITEM_TAB_ASSETS' | translate
                        "
                    >
                        <div class="mx-auto max-w-[768px] px-8 py-4">
                            <div
                                class="mb-2 flex w-full items-center space-x-2"
                            >
                                <a
                                    btn
                                    matRipple
                                    class="flex-1"
                                    [routerLink]="[
                                        base_route,
                                        'manage',
                                        'asset',
                                    ]"
                                    [queryParams]="{
                                        group_id: (item | async)?.id,
                                    }"
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
                                    [queryParams]="{
                                        group_id: (item | async)?.id,
                                    }"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD'
                                            | translate
                                    }}
                                </a>
                            </div>
                            <simple-table
                                class="block min-w-[40rem] text-sm"
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
                                        <icon>edit</icon>
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
                                        <icon>delete</icon>
                                    </button>
                                </div>
                            </ng-template>
                        </div>
                    </mat-tab>
                    <mat-tab
                        [label]="
                            'APP.CONCIERGE.ASSETS_ITEM_TAB_SPECS' | translate
                        "
                    >
                        <div class="mx-auto max-w-[768px] px-8 py-4">
                            <h3 class="p-2">
                                {{
                                    'APP.CONCIERGE.ASSETS_ITEM_GENERAL'
                                        | translate
                                }}
                            </h3>
                            <div
                                data-table
                                class="border border-base-200 bg-base-100"
                            >
                                <div
                                    class="flex items-center justify-between p-2 even:bg-base-200"
                                >
                                    <div
                                        class="w-32 flex-1 text-sm font-medium"
                                    >
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
                        <div class="mx-auto max-w-[768px] px-8 py-4">
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
                                    'APP.CONCIERGE.ASSETS_PURCHASE_ADD'
                                        | translate
                                }}
                            </a>
                            <simple-table
                                class="block min-w-[40rem] text-sm"
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
                                        <icon class="text-lg">edit</icon>
                                    </a>
                                    <button
                                        icon
                                        matRipple
                                        class="text-error"
                                        (click)="removePurchaseOrder(row)"
                                    >
                                        <icon class="text-lg">delete</icon>
                                    </button>
                                </div>
                            </ng-template>
                        </div>
                    </mat-tab>
                </mat-tab-group>
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p>{{ 'APP.CONCIERGE.ASSETS_ITEM_LOADING' | translate }}</p>
            </div>
        }
        <ng-template #date_template let-data="data">
            <div class="p-4">
                {{ data * 1000 | date: 'mediumDate' }}
                @if (!data) {
                    <span class="opacity-30">
                        {{ 'COMMON.DATE_EMPTY' | translate }}
                    </span>
                }
            </div>
        </ng-template>
        <ng-template #delete_tooltip>
            @if (!deleting) {
                <div class="my-2 w-[18rem] rounded bg-base-100 p-4 text-center">
                    <p>
                        {{ 'APP.CONCIERGE.ASSETS_ITEM_DELETE_MSG' | translate }}
                    </p>
                    <div class="mt-6 flex items-center space-x-2">
                        <button
                            btn
                            matRipple
                            class="inverse w-24 flex-1"
                            (click)="closeTooltip()"
                        >
                            {{ 'COMMON.FALSE' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="error w-24 flex-1"
                            (click)="deleteAsset()"
                        >
                            {{
                                'APP.CONCIERGE.ASSETS_ITEM_DELETE_ACTION'
                                    | translate
                            }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    class="l my-2 flex h-36 w-64 flex-col items-center justify-center space-y-2 rounded bg-base-100 p-4"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>
                        {{
                            'APP.CONCIERGE.ASSETS_ITEM_DELETE_LOADING'
                                | translate
                        }}
                    </p>
                </div>
            }
        </ng-template>
    `,
    styles: [
        `
            :host {
                height: 100%;
            }
        `,
    ],
    standalone: false,
})
export class AssetViewComponent extends AsyncHandler {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _state = inject(AssetManagerStateService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);

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

    public readonly _tooltip_el = viewChild(CustomTooltipComponent);

    public async deleteAsset() {
        this.deleting = true;
        await this._state.deleteActiveProduct();
        this.deleting = false;
        this._router.navigate([this._state.base_route, 'list', 'items']);
        this.closeTooltip();
    }

    public closeTooltip() {
        this._tooltip_el()?.close();
    }

    public get code() {
        return this._org.currency_code;
    }

    public get base_route() {
        return this._state.base_route;
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
