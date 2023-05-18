import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { AsyncHandler } from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';

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
                                <div class="flex items-center text-secondary">
                                    <app-icon class="text-lg">edit</app-icon>
                                    <div class="mr-2">Edit</div>
                                </div>
                            </a>
                            <div class="w-px h-4 bg-gray-300"></div>
                            <button btn matRipple class="clear">
                                <div
                                    class="flex items-center text-secondary"
                                    customTooltip
                                    [content]="delete_tooltip"
                                >
                                    <app-icon class="text-lg">delete</app-icon>
                                    <div class="mr-2">Delete</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div class="py-4 w-full flex-1 h-1/2 overflow-auto">
                        {{ (item | async)?.description || '~No Description~' }}
                    </div>
                    <div
                        class="rounded bg-white dark:bg-neutral-700 shadow border border-gray-300 dark:border-neutral-500 w-full divide-y divide-gray-200 dark:divide-neutral-500"
                    >
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                Available:
                                {{
                                    (asset | async)?.count -
                                        (asset | async)?.assets?.length || 0
                                }}
                            </div>
                            <button btn matRipple>Assign to Location</button>
                        </div>
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                In Use:
                                {{ (item | async)?.assets?.length || 0 }}
                            </div>
                            <button btn matRipple (click)="viewLocations()">
                                View Locations
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <mat-tab-group class="flex-1 h-px">
                <mat-tab label="Specifications">
                    <div class="max-w-[768px] mx-auto p-4">
                        <h3 class="p-2">General</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                        >
                            <div class="flex items-center p-2">
                                <label>Barcode</label>
                                <div>
                                    {{ (item | async)?.barcode || '~None~' }}
                                </div>
                            </div>
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
                        <h3 class="p-2">Timeline</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                        >
                            <div class="flex items-center p-2">
                                <label>Purchase Date</label>
                                <div>
                                    {{
                                        (item | async)?.purchase_date
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                            <div class="flex items-center p-2">
                                <label>Good Until</label>
                                <div>
                                    {{
                                        (item | async)?.assets[0]
                                            ?.end_of_life_date * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        </div>
                        <h3 class="p-2">Invoices</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                            *ngIf="
                                (asset | async)?.purchase_orders?.length;
                                else empty_invoices
                            "
                        >
                            <div
                                class="flex items-center p-2"
                                *ngFor="
                                    let item of (item | async)
                                        ?.purchase_orders || []
                                "
                            >
                                <label>{{ item.name }}</label>
                                <div>{{ item.price | currency: code }}</div>
                                <a
                                    class="underline"
                                    [href]="invoice.url | safe"
                                    target="_blank"
                                    ref="noreferer noopener"
                                >
                                    Download
                                </a>
                            </div>
                        </div>
                    </div>
                </mat-tab>
                <mat-tab label="Assets">
                    <div class="max-w-[768px] mx-auto p-4">
                        <h3 class="p-2">Items</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                            *ngIf="
                                (item | async)?.assets?.length;
                                else empty_items
                            "
                        >
                            <div
                                class="flex items-center p-2"
                                *ngFor="
                                    let item of (item | async)?.assets || []
                                "
                            >
                                <label>{{ item.name }}</label>
                                <div class="flex-1">
                                    {{ item.serial_number }}
                                </div>
                                <div>
                                    {{
                                        item.end_of_life_date * 1000
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                        </div>
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
            <div class="p-2 opacity-30">No Invoices</div>
        </ng-template>
        <ng-template #empty_items>
            <div class="p-2 opacity-30">No consumables</div>
        </ng-template>
    `,
    styles: [
        `
            [data-table] > div:nth-child(2n) {
                background: #0001;
            }

            label {
                width: 15rem;
                min-width: 0;
            }
        `,
    ],
})
export class AssetViewComponent extends AsyncHandler {
    public loading = false;
    public deleting = false;
    public readonly item = this._state.active_product;

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
}
