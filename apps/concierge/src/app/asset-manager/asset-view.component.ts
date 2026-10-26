import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    effect,
    inject,
    Injector,
    OnInit,
    signal,
    viewChild,
} from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { removeAssetRequests } from '@placeos/assets';
import {
    Asset,
    AssetPurchaseOrder,
    AsyncHandler,
    OrganisationService,
    unique,
} from '@placeos/common';
import {
    CustomTooltipComponent,
    IconComponent,
    ImageCarouselComponent,
    openConfirmModal,
    SimpleTableComponent,
    TranslatePipe,
} from '@placeos/components';
import { removeAsset, removeAssetPurchaseOrder } from '@placeos/ts-client';
import { addMinutes } from 'date-fns';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-view',
    template: `
        @if (!loading() && item()) {
            <div class="flex h-full w-full flex-col">
                <div
                    class="bg-base-100 flex w-full space-x-2 pt-8 pr-8 pb-4 pl-4"
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
                        <div>{{ item()?.name }}</div>
                    </div>
                    <div class="flex-1"></div>
                    <a
                        btn
                        matRipple
                        class="h-12 w-32"
                        [routerLink]="[base_route, 'manage', 'group']"
                        [queryParams]="{
                            id: item()?.id,
                        }"
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
                        class="border-error bg-base-100 text-error h-12 w-32"
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
                        class="bg-base-200 h-64 w-[24rem] flex-1 overflow-hidden rounded-xl"
                    >
                        <image-carousel
                            [images]="item()?.images || []"
                        ></image-carousel>
                    </div>
                    <div
                        class="border-base-300 flex h-64 w-1/2 flex-1 flex-col space-y-4 rounded-lg border p-4"
                    >
                        <div class="h-1/2 w-full flex-1 overflow-auto">
                            @if (item()?.description) {
                                {{ item()?.description || '~No Description~' }}
                            } @else {
                                <span class="opacity-30">{{
                                    'COMMON.NO_DESCRIPTION' | translate
                                }}</span>
                            }
                        </div>
                        <div
                            class="divide-base-200 border-base-200 bg-base-100 w-full divide-y rounded-sm border"
                        >
                            <div
                                class="flex h-16 items-center justify-between p-2"
                            >
                                <div class="pl-2">
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_AVAILABLE'
                                            | translate
                                                : {
                                                      count: available_count(),
                                                  }
                                    }}
                                </div>
                                <!-- <button btn matRipple [disabled]="available_count() === 0">
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
                                                      count: requests().length,
                                                  }
                                    }}
                                </div>
                                <button
                                    btn
                                    matRipple
                                    (click)="viewLocations()"
                                    [disabled]="available_count() !== 0"
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
                                        group_id: item()?.id,
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
                                        group_id: item()?.id,
                                    }"
                                >
                                    {{
                                        'APP.CONCIERGE.ASSETS_ITEM_ASSET_BULK_ADD'
                                            | translate
                                    }}
                                </a>
                            </div>
                            <simple-table
                                class="block min-w-160 text-sm"
                                [data]="asset_list()"
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
                                        default
                                        matRipple
                                        [routerLink]="[
                                            base_route,
                                            'manage',
                                            'asset',
                                        ]"
                                        [queryParams]="{
                                            id: row.id,
                                            group_id: item()?.id,
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
                                        default
                                        matRipple
                                        error
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
                                class="border-base-200 bg-base-100 border"
                            >
                                <div
                                    class="even:bg-base-200 flex items-center justify-between p-2"
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
                                        {{ item()?.brand || '~None~' }}
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
                                [queryParams]="{
                                    group_id: item()?.id,
                                }"
                            >
                                {{
                                    'APP.CONCIERGE.ASSETS_PURCHASE_ADD'
                                        | translate
                                }}
                            </a>
                            <simple-table
                                class="block min-w-160 text-sm"
                                asset-purchases
                                [data]="item()?.purchase_orders || []"
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
                                        default
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
                                        default
                                        matRipple
                                        error
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
                class="flex h-full w-full flex-col items-center justify-center space-y-2"
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
            @if (!deleting()) {
                <div
                    class="bg-base-100 my-2 w-[18rem] rounded-sm p-4 text-center"
                >
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
                            {{ 'COMMON.NO' | translate }}
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
                    class="bg-base-100 my-2 flex h-36 w-64 flex-col items-center justify-center space-y-2 rounded-sm p-4"
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
    imports: [
        CommonModule,
        RouterModule,
        MatProgressSpinnerModule,
        TranslatePipe,
        MatRippleModule,
        SimpleTableComponent,
        MatTabsModule,
        MatTooltipModule,
        ImageCarouselComponent,
        IconComponent,
        CustomTooltipComponent,
    ],
})
export class AssetViewComponent extends AsyncHandler implements OnInit {
    private _route = inject(ActivatedRoute);
    private _router = inject(Router);
    private _state = inject(AssetManagerStateService);
    private _dialog = inject(MatDialog);
    private _org = inject(OrganisationService);
    private _injector = inject(Injector);

    public readonly loading = signal(false);
    public readonly deleting = signal(false);
    public readonly item = this._state.active_product;
    public readonly extra_assets = this._state.extra_assets;
    private readonly _removed_asset_ids = signal<ReadonlySet<string>>(
        new Set(),
    );
    public readonly asset_list = computed(() => {
        const item = this.item();
        if (!item) return [];
        const removed_asset_ids = this._removed_asset_ids();
        return unique(
            [
                ...item.assets,
                ...this.extra_assets().filter(
                    (_) => _.asset_type_id === item.id,
                ),
            ],
            'id',
        ).filter((asset) => !removed_asset_ids.has(asset.id));
    });
    public readonly requests_source = this._state.active_product_requests;
    public readonly requests = computed(() =>
        this.requests_source().filter(
            (_) =>
                _.date <= Date.now() &&
                addMinutes(_.date, _.duration).valueOf() >= Date.now(),
        ),
    );
    public readonly available_count = computed(
        () => this.asset_list().length - this.requests().length,
    );

    public readonly _tooltip_el = viewChild(CustomTooltipComponent);

    public async deleteAsset() {
        this.deleting.set(true);
        await this._state.deleteActiveProduct();
        this.deleting.set(false);
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
        this.loading.set(true);
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
        // Clear the loading state and fallback navigation once the active
        // product has resolved.
        const ref = effect(
            () => {
                if (!this._state.active_product()) return;
                this.clearTimeout('no_asset');
                this.loading.set(false);
                ref.destroy();
            },
            { injector: this._injector },
        );
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
        await removeAsset(asset.id);
        await removeAssetRequests(asset.id);
        this._removed_asset_ids.update(
            (removed_asset_ids) => new Set([...removed_asset_ids, asset.id]),
        );
        this._state.setExtraAssets(
            this.extra_assets().filter((item) => item.id !== asset.id),
        );
        this._state.postChange();
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
        await removeAssetPurchaseOrder(asset.id);
        const item = this._state.active_product();
        this._state.setOptions({ active_item: '' });
        setTimeout(
            () => this._state.setOptions({ active_item: item.id }),
            1000,
        );
        resp.close();
    }
}
