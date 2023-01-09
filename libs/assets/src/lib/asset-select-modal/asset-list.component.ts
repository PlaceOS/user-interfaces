import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AssetStateService } from '../asset-state.service';
import { Asset } from '../asset.class';

@Component({
    selector: 'asset-list',
    template: `
        <div
            class="w-full h-full overflow-auto py-2 bg-black/5 dark:bg-white/10 dark:border-neutral-500"
        >
            <h3 class="font-bold px-2">Results</h3>
            <p count class="text-sm opacity-60 mb-4 px-2">
                {{ (assets | async)?.length || 0 }} result(s) found
            </p>
            <ng-container *ngIf="!(loading | async); else load_state">
                <ul
                    class="list-style-none space-y-2 p-2"
                    *ngIf="(assets | async)?.length; else empty_state"
                >
                    <li
                        asset
                        *ngFor="let asset of assets | async"
                        class="relative p-2 rounded-lg w-full shadow border bg-white dark:bg-neutral-700 border-gray-200 dark:border-neutral-500"
                    >
                        <button
                            matRipple
                            select
                            class="w-full h-full flex items-center pr-10"
                            (click)="selectAsset(asset)"
                        >
                            <div
                                class="relative w-16 h-16 rounded-xl bg-black/20 mr-4"
                            >
                                <div
                                    class="absolute top-1 left-1 border border-white bg-black/50 rounded-full h-6 w-6 flex items-center justify-center text-white"
                                    *ngIf="selected.includes(asset.id)"
                                >
                                    <span class="text-xs">{{
                                        asset.amount || 1
                                    }}</span>
                                </div>
                            </div>
                            <div class="space-y-2 text-left flex-1">
                                <div
                                    class="font-medium flex items-center justify-between"
                                >
                                    <div>{{ asset.name || 'Asset' }}</div>
                                    <div class="opacity-60 text-xs">
                                        {{ asset.category }}
                                    </div>
                                </div>
                                <div
                                    class="flex items-center text-sm space-x-2"
                                >
                                    <p>
                                        {{ asset.count < 1 ? 2 : asset.count }}
                                        Available
                                    </p>
                                </div>
                            </div>
                        </button>
                        <button
                            icon
                            matRipple
                            fav
                            class="absolute top-1 right-1"
                            [class.text-blue-400]="isFavourite(asset.id)"
                            (click)="toggleFav.emit(asset)"
                        >
                            <app-icon>{{
                                isFavourite(asset.id)
                                    ? 'favorite'
                                    : 'favorite_border'
                            }}</app-icon>
                        </button>
                    </li>
                </ul>
            </ng-container>
        </div>
        <ng-template #empty_state>
            <div
                empty
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <p class="opacity-30 text-center">
                    No available assets for selected time and/or filters
                </p>
            </div>
        </ng-template>
        <ng-template #load_state>
            <div
                loading
                class="p-16 flex flex-col items-center justify-center space-y-2"
            >
                <mat-spinner [diameter]="32"></mat-spinner>
                <p class="opacity-30">Finding available assets...</p>
            </div>
        </ng-template>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
})
export class AssetListComponent {
    @Input() public selected: string = '';
    @Input() public favorites: string[] = [];
    @Output() public toggleFav = new EventEmitter<Asset>();
    @Output() public onSelect = new EventEmitter<Asset>();

    public readonly loading = this._asset_state.loading;
    public readonly assets = this._asset_state.filtered_assets;

    constructor(private _asset_state: AssetStateService) {}

    public isFavourite(asset_id: string) {
        return this.favorites.includes(asset_id);
    }

    public selectAsset(asset: Asset) {
        this.onSelect.emit(asset);
    }
}
