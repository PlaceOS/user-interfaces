import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';
import { combineLatest } from 'rxjs';

@Component({
    selector: 'app-asset-item-list',
    template: `
        <div
            class="overflow-auto pb-2 w-full h-full"
            *ngIf="
                (categories | async)?.length && (products | async)?._count;
                else empty_state
            "
        >
            <ng-container *ngFor="let group of categories | async">
                <div class="" *ngIf="(products | async)[group.id]?.length">
                    <h2 class="py-2">
                        <span class="font-medium">{{ group?.name }}</span>
                        <span class="text-xs">
                            ({{ (products | async)[group.id]?.length }} item{{
                                (products | async)[group.id]?.length === 1
                                    ? ''
                                    : 's'
                            }})
                        </span>
                    </h2>
                    <ng-container [ngSwitch]="(options | async).view">
                        <ng-container *ngSwitchCase="'list'">
                            <div
                                class="rounded overflow-hidden bg-base-100 border border-base-200 divide-y divide-base-200"
                            >
                                <a
                                    matRipple
                                    class="flex items-center text-left space-x-4 p-4 border border-base-200 hover:border-indigo-400 rounded"
                                    *ngFor="
                                        let asset of (products | async)[
                                            group.id
                                        ]
                                    "
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id
                                    ]"
                                >
                                    <div
                                        class="h-12 w-12 flex items-center justify-center border border-base-200 bg-base-200 overflow-hidden"
                                    >
                                        <img
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            auth
                                            [source]="asset.images[0]"
                                            class="min-w-full min-h-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="flex-1 flex flex-col justify-center"
                                    >
                                        <div class="truncate">
                                            {{ asset.name }}
                                        </div>
                                        <div
                                            class="text-xs opacity-60"
                                            *ngIf="
                                                asset.asset_count ||
                                                asset.assets?.length
                                            "
                                        >
                                            Assets:
                                            {{
                                                asset.asset_count ||
                                                    asset.assets?.length ||
                                                    0
                                            }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </ng-container>
                        <ng-container *ngSwitchDefault>
                            <div
                                class="flex items-center overflow-hidden flex-wrap -mx-2 w-full"
                            >
                                <a
                                    matRipple
                                    class="bg-base-100 rounded shadow w-40 h-44 text-left m-2 border border-base-200 hover:border-indigo-400 flex flex-col"
                                    *ngFor="
                                        let asset of (products | async)[
                                            group.id
                                        ]
                                    "
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id
                                    ]"
                                >
                                    <div
                                        class="w-full h-32 flex items-center justify-center bg-base-200 overflow-hidden"
                                    >
                                        <img
                                            auth
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            [source]="asset.images[0]"
                                            class="min-w-full min-h-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto w-16"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="border-t border-base-200 w-full px-3 py-1 flex-1 flex flex-col justify-center"
                                    >
                                        <div class="truncate">
                                            {{ asset.name }}
                                        </div>
                                        <div
                                            class="text-xs opacity-60"
                                            *ngIf="
                                                asset.asset_count ||
                                                asset.assets?.length
                                            "
                                        >
                                            Assets:
                                            {{
                                                asset.asset_count ||
                                                    asset.assets?.length ||
                                                    0
                                            }}
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </ng-container>
                    </ng-container>
                </div>
            </ng-container>
        </div>
        <mat-progress-bar
            *ngIf="loading | async"
            mode="indeterminate"
        ></mat-progress-bar>
        <ng-template #empty_state>
            <div
                class="flex flex-col items-center justify-center p-8 space-y-4 h-full w-full"
            >
                <p class="opacity-40">
                    {{
                        (options | async)?.search
                            ? 'No matching assets found'
                            : 'No assets available. Create a new asset with the button below'
                    }}
                </p>
                <a
                    btn
                    matRipple
                    *ngIf="!(options | async)?.search"
                    [routerLink]="[base_route, 'manage', 'group']"
                >
                    Create New Product
                </a>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                display: block;
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class AssetItemListComponent {
    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly categories = this._state.categories;
    public readonly products = this._state.product_mapping;

    public get base_route() {
        return this._state.base_route;
    }

    constructor(private _state: AssetManagerStateService) {}
}
