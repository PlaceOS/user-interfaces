import {
    Component,
    EventEmitter,
    Input,
    Output,
    SimpleChanges,
} from '@angular/core';
import { AssetStateService } from '../asset-state.service';
import { AssetGroup } from '../asset.class';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
    selector: 'asset-list',
    template: `
        <div class="w-full h-full overflow-auto py-2 bg-base-200">
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
                        matRipple
                        class="relative p-2 rounded-lg w-full shadow border bg-base-100 border-base-200"
                    >
                        <button
                            select
                            class="w-full h-full flex items-center pr-10"
                            (click)="selectAsset(asset)"
                        >
                            <div
                                class="relative w-16 h-16 rounded-xl bg-base-200 mr-4 flex items-center justify-center overflow-hidden border border-base-200"
                            >
                                <div
                                    class="absolute top-1 left-1 border border-base-300 bg-base-200 rounded-full h-6 w-6 flex items-center justify-center"
                                    *ngIf="selected.includes(asset.id)"
                                >
                                    <span class="text-xs">
                                        {{ asset.quantity || 1 }}
                                    </span>
                                </div>
                                <img
                                    auth
                                    *ngIf="
                                        asset.images?.length;
                                        else placeholder
                                    "
                                    class="object-cover h-full"
                                    [source]="asset.images[0]"
                                />
                                <ng-template #placeholder>
                                    <img
                                        class="m-auto"
                                        src="assets/icons/asset-placeholder.svg"
                                    />
                                </ng-template>
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
                                        {{
                                            asset.available ||
                                                asset.assets?.length ||
                                                '0'
                                        }}
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
                            [class.text-info]="isFavourite(asset.id)"
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
    @Input() public selected_items: AssetGroup[] = [];
    @Input() public requested: Record<string, number> = {};
    @Output() public toggleFav = new EventEmitter<AssetGroup>();
    @Output() public onSelect = new EventEmitter<AssetGroup>();

    private _requested_items = new BehaviorSubject<Record<string, number>>({});

    public readonly counts = new BehaviorSubject<Record<string, number>>({});

    public readonly loading = this._asset_state.loading;
    public readonly assets = combineLatest([
        this.counts,
        this._asset_state.filtered_assets,
        this._requested_items,
    ]).pipe(
        map(([counts, assets, requested]) => {
            for (const item of assets) {
                item.quantity = counts[item.id] || 0;
                const selected = this.selected_items.find(
                    (i) => i.id === item.id
                );
                if (selected) selected.assets = item.assets;
                if (requested[item.id] !== undefined) {
                    (item as any).available = Math.max(
                        (item.assets?.length || 0) - requested[item.id],
                        0
                    );
                }
            }
            return assets.filter(
                (_: any) =>
                    (_.available != null && _.available > 0) ||
                    (_.available == null && _.assets?.length > 0)
            );
        })
    );

    constructor(private _asset_state: AssetStateService) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.selected_items && this.selected_items?.length) {
            const counts = {};
            for (const item of this.selected_items) {
                counts[item.id] = item.quantity;
            }
            this.counts.next(counts);
        }
        if (changes.requested) {
            this._requested_items.next(this.requested);
        }
    }

    public isFavourite(asset_id: string) {
        return this.favorites.includes(asset_id);
    }

    public selectAsset(asset: AssetGroup) {
        this.onSelect.emit(asset);
    }
}
