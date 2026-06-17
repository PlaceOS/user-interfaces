import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { RouterModule } from '@angular/router';
import {
    AuthenticatedImageDirective,
    TranslatePipe,
} from '@placeos/components';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-item-list',
    template: `
        <div
            class="h-full w-full overflow-auto pb-2"
            *ngIf="categories().length && products()._count; else empty_state"
        >
            <ng-container *ngFor="let group of categories()">
                <div class="" *ngIf="products()[group.id]?.length">
                    <h2 class="py-2">
                        <span class="font-medium">{{ group?.name }}</span>
                        <span class="text-xs">
                            ({{
                                'COMMON.ITEM_COUNT'
                                    | translate
                                        : {
                                              count: products()[group.id]
                                                  ?.length,
                                          }
                            }})
                        </span>
                    </h2>
                    <ng-container [ngSwitch]="options().view">
                        <ng-container *ngSwitchCase="'list'">
                            <div
                                class="divide-base-200 border-base-200 bg-base-100 divide-y overflow-hidden rounded-sm border"
                            >
                                <a
                                    matRipple
                                    class="border-base-200 flex items-center space-x-4 rounded-sm border p-4 text-left hover:border-indigo-400"
                                    *ngFor="let asset of products()[group.id]"
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="border-base-200 bg-base-200 flex h-12 w-12 items-center justify-center overflow-hidden border"
                                    >
                                        <img
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            auth
                                            [source]="asset.images[0]"
                                            class="min-h-full min-w-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="flex flex-1 flex-col justify-center"
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
                                class="-mx-2 flex w-full flex-wrap items-center overflow-hidden"
                            >
                                <a
                                    matRipple
                                    class="border-base-200 bg-base-100 m-2 flex h-44 w-40 flex-col rounded-sm border text-left shadow-sm hover:border-indigo-400"
                                    *ngFor="let asset of products()[group.id]"
                                    [routerLink]="[
                                        base_route,
                                        'view',
                                        asset.id,
                                    ]"
                                >
                                    <div
                                        class="bg-base-200 flex h-32 w-full items-center justify-center overflow-hidden"
                                    >
                                        <img
                                            auth
                                            *ngIf="
                                                asset.images?.length;
                                                else placeholder
                                            "
                                            [source]="asset.images[0]"
                                            class="min-h-full min-w-full object-cover"
                                        />
                                        <ng-template #placeholder>
                                            <img
                                                class="m-auto w-16"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        </ng-template>
                                    </div>
                                    <div
                                        class="border-base-200 flex w-full flex-1 flex-col justify-center border-t px-3 py-1"
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
        <mat-progress-bar *ngIf="loading()" mode="indeterminate" />
        <ng-template #empty_state>
            <div
                class="flex h-full w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <p class="opacity-40">
                    {{
                        options().search
                            ? 'No matching assets found'
                            : 'No assets available. Create a new asset with the button below'
                    }}
                </p>
                <a
                    btn
                    matRipple
                    *ngIf="!options().search"
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
    changeDetection: ChangeDetectionStrategy.Eager,
    imports: [
        CommonModule,
        MatProgressBarModule,
        MatRippleModule,
        RouterModule,
        TranslatePipe,
        AuthenticatedImageDirective,
    ],
})
export class AssetItemListComponent {
    private _state = inject(AssetManagerStateService);

    public readonly loading = this._state.loading;
    public readonly options = this._state.options;
    public readonly categories = this._state.categories;
    public readonly products = this._state.product_mapping;

    public get base_route() {
        return this._state.base_route;
    }
}
