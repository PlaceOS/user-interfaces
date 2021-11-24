import { Component } from '@angular/core';
import { AssetManagerStateService } from './asset-manager-state.service';

@Component({
    selector: 'app-asset-item-list',
    template: `
        <div class="overflow-auto pb-2 w-full h-full">
            <div class="" *ngFor="let group of categories | async">
                <h2 class="py-2">
                    <span class="font-medium">{{ group }}</span>
                    <span class="text-xs">
                        ({{ (assets | async)[group]?.length }} item{{
                            (assets | async)[group]?.length === 1 ? '' : 's'
                        }})
                    </span>
                </h2>
                <ng-container [ngSwitch]="(options | async).view">
                    <ng-container *ngSwitchCase="'list'">
                        <div
                            class="rounded overflow-hidden bg-white border border-gray-300 divide-y divide-gray-200"
                        >
                            <a
                                matRipple
                                class="flex items-center text-left space-x-4 p-4"
                                *ngFor="let asset of (assets | async)[group]"
                                [routerLink]="[
                                    '/asset-manager',
                                    'view',
                                    asset.id
                                ]"
                            >
                                <div
                                    class="h-12 w-12 flex items-center justify-center border border-gray-200 p-2"
                                >
                                    <img
                                        [src]="
                                            asset.images ? asset.images[0] : ''
                                        "
                                        class="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div>
                                    <div class="truncate">
                                        {{ asset.name }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        In Storage:
                                        {{
                                            (asset.count || 0) -
                                                (asset.locations?.length || 0)
                                        }}/{{ assets.count || 0 }}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </ng-container>
                    <ng-container *ngSwitchDefault>
                        <div
                            class="flex items-center overflow-x-auto space-x-4 py-2"
                        >
                            <a
                                matRipple
                                class="bg-white rounded shadow w-40 h-44 text-left"
                                *ngFor="let asset of (assets | async)[group]"
                                [routerLink]="[
                                    '/asset-manager',
                                    'view',
                                    asset.id
                                ]"
                            >
                                <div
                                    class="w-full h-32 flex items-center justify-center p-2"
                                >
                                    <img
                                        [src]="
                                            asset.images ? asset.images[0] : ''
                                        "
                                        class="max-w-full max-h-full object-contain"
                                    />
                                </div>
                                <div
                                    class="border-t border-gray-200 w-full px-3 py-1"
                                >
                                    <div class="truncate">
                                        {{ asset.name }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        In Storage:
                                        {{
                                            (asset.count || 0) -
                                                (asset.locations?.length || 0)
                                        }}/{{ assets.count || 0 }}
                                    </div>
                                </div>
                            </a>
                        </div>
                    </ng-container>
                </ng-container>
            </div>
        </div>
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
    public readonly options = this._state.options;
    public readonly categories = this._state.asset_categories;
    public readonly assets = this._state.asset_mapping;

    constructor(private _state: AssetManagerStateService) {}
}
