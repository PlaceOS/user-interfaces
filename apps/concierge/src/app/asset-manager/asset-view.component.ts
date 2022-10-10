import { Component, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { BaseClass } from '@placeos/common';
import { CustomTooltipComponent } from '@placeos/components';
import { OrganisationService } from '@placeos/organisation';
import { first } from 'rxjs/operators';
import { AssetLocationModalComponent } from './asset-location-modal.component';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'asset-view',
    template: `
        <div
            class="h-full w-full"
            *ngIf="!loading && (asset | async); else loading_state"
        >
            <div class="flex items-center space-x-4 p-2">
                <a
                    button
                    mat-button
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
                    <span>{{ (asset | async)?.category }}</span>
                    <span>
                        <app-icon class="text-2xl">chevron_right</app-icon>
                    </span>
                    <span>{{ (asset | async)?.name }}</span>
                </div>
            </div>
            <div class="flex items-center">
                <div class="bg-white dark:bg-neutral-700 flex-1 w-1/2 h-[360px]">
                    <image-carousel
                        [images]="(asset | async)?.images || []"
                    ></image-carousel>
                </div>
                <div class="w-[512px] h-[360px] px-4 flex flex-col">
                    <div
                        class="w-full flex items-center justify-between border-b border-gray-300 dark:border-neutral-500"
                    >
                        <div class="font-medium">
                            {{ (asset | async)?.name }}
                        </div>
                        <div class="flex items-center text-sm ">
                            <a
                                button
                                mat-button
                                class="clear"
                                [routerLink]="[
                                    '/asset-manager',
                                    'manage',
                                    'details'
                                ]"
                            >
                                <div class="flex items-center text-secondary">
                                    <app-icon class="text-lg">edit</app-icon>
                                    <div class="mr-2">Edit</div>
                                </div>
                            </a>
                            <div class="w-px h-4 bg-gray-300"></div>
                            <button mat-button class="clear">
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
                        {{ (asset | async)?.description || '~No Description~' }}
                    </div>
                    <div
                        class="rounded bg-white dark:bg-neutral-700 shadow border border-gray-300 dark:border-neutral-500 w-full divide-y divide-gray-200 dark:divide-neutral-500"
                    >
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                Available:
                                {{
                                    (asset | async)?.count -
                                        (asset | async)?.locations?.length || 0
                                }}
                            </div>
                            <button mat-button>Assign to Location</button>
                        </div>
                        <div class="flex items-center justify-between p-3">
                            <div class="pl-2">
                                In Use:
                                {{ (asset | async)?.locations?.length || 0 }}
                            </div>
                            <button mat-button (click)="viewLocations()">
                                View Locations
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <mat-tab-group>
                <mat-tab label="Specifications">
                    <div class="p-8">
                        <h3 class="p-2">General</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                        >
                            <div class="flex items-center p-2">
                                <label>Barcode</label>
                                <div>
                                    {{ (asset | async)?.barcode || '~None~' }}
                                </div>
                            </div>
                            <div class="flex items-center p-2">
                                <label>Brand</label>
                                <div>
                                    {{ (asset | async)?.brand || '~None~' }}
                                </div>
                            </div>
                        </div>
                        <h3
                            class="p-2"
                            *ngIf="(asset | async)?.general_details?.length"
                        >
                            Other
                        </h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                            *ngIf="(asset | async)?.general_details?.length"
                        >
                            <div
                                class="flex items-center"
                                *ngFor="
                                    let item of (asset | async)
                                        ?.general_details || []
                                "
                            >
                                <label>{{ item.name }}</label>
                                <div>{{ item.value || 'None' }}</div>
                            </div>
                        </div>
                    </div>
                </mat-tab>
                <mat-tab label="Purchase information">
                    <div class="p-8">
                        <h3 class="p-2">Timeline</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                        >
                            <div class="flex items-center p-2">
                                <label>Purchase Date</label>
                                <div>
                                    {{
                                        (asset | async)?.purchase_date
                                            | date: 'mediumDate'
                                    }}
                                </div>
                            </div>
                            <div class="flex items-center p-2">
                                <label>Good Until</label>
                                <div>
                                    {{
                                        (asset | async)?.good_until
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
                                (asset | async)?.invoices?.length;
                                else empty_invoices
                            "
                        >
                            <div
                                class="flex items-center p-2"
                                *ngFor="
                                    let item of (asset | async)?.invoices || []
                                "
                            >
                                <label>{{ item.name }}</label>
                                <div>{{ item.price | currency:code }}</div>
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
                <mat-tab label="Consumable assets">
                    <div class="p-8">
                        <h3 class="p-2">Items</h3>
                        <div
                            data-table
                            class="bg-white dark:bg-neutral-700 border border-gray-300 dark:border-neutral-500"
                            *ngIf="
                                (asset | async)?.consumables?.length;
                                else empty_items
                            "
                        >
                            <div
                                class="flex items-center p-2"
                                *ngFor="
                                    let item of (asset | async)?.consumables ||
                                        []
                                "
                            >
                                <label>{{ item.name }}</label>
                                <div>{{ item.value }}</div>
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
                <p>Loading asset details...</p>
            </div>
        </ng-template>
        <ng-template #delete_tooltip>
            <div
                class="p-4 bg-white dark:bg-neutral-700 rounded my-2 w-64 h-36 text-center"
                *ngIf="!deleting; else delete_loading"
            >
                <p>Are you sure you want to permanently delete this asset?</p>
                <div class="flex items-center space-x-2 mt-6">
                    <button
                        mat-button
                        class="inverse flex-1"
                        (click)="closeTooltip()"
                    >
                        No
                    </button>
                    <button
                        mat-button
                        class="error flex-1"
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
                    <p>Deleting asset details...</p>
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
export class AssetViewComponent extends BaseClass {
    public loading = false;
    public deleting = false;
    public readonly asset = this._state.active_asset;

    @ViewChild(CustomTooltipComponent)
    public _tooltip_el: CustomTooltipComponent;

    public async deleteAsset() {
        this.deleting = true;
        await this._state.deleteActiveAsset();
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
                    this._state.setOptions({ active_asset: params.get('id') });
                }
            })
        );
        this.timeout(
            'no_asset',
            () => this._router.navigate(['/asset-mananger']),
            1000
        );
        this._state.active_asset.pipe(first((_) => !!_)).subscribe(() => {
            this.clearTimeout('no_asset');
            this.loading = false;
        });
    }
}
