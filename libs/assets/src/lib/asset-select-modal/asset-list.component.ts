import { CommonModule } from '@angular/common';
import { Component, SimpleChanges, inject, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { AssetStateService } from '../asset-state.service';
import { AssetGroup } from '../asset.class';

@Component({
    selector: 'asset-list',
    template: `
        <div class="h-full w-full overflow-auto bg-base-200 py-2">
            <h3 class="px-2 font-bold">Results</h3>
            <p count class="mb-4 px-2 text-sm opacity-60">
                {{ (assets | async)?.length || 0 }} result(s) found
            </p>
            @if (!(loading | async)) {
                @if ((assets | async)?.length) {
                    <ul class="list-style-none space-y-2 p-2">
                        @for (asset of assets | async; track asset.id) {
                            <li
                                asset
                                matRipple
                                class="relative w-full rounded-lg border border-base-200 bg-base-100 p-2 shadow"
                            >
                                <button
                                    select
                                    class="flex h-full w-full items-center pr-10"
                                    (click)="selectAsset(asset)"
                                >
                                    <div
                                        class="relative mr-4 flex h-16 w-16 items-center justify-center overflow-hidden rounded-xl border border-base-200 bg-base-200"
                                    >
                                        @if (selected().includes(asset.id)) {
                                            <div
                                                class="absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full border border-base-300 bg-base-200"
                                            >
                                                <span class="text-xs">
                                                    {{ asset.quantity || 1 }}
                                                </span>
                                            </div>
                                        }
                                        @if (asset.images?.length) {
                                            <img
                                                auth
                                                class="h-full object-cover"
                                                [source]="asset.images[0]"
                                            />
                                        } @else {
                                            <img
                                                class="m-auto"
                                                src="assets/icons/asset-placeholder.svg"
                                            />
                                        }
                                    </div>
                                    <div class="flex-1 space-y-2 text-left">
                                        <div
                                            class="flex items-center justify-between font-medium"
                                        >
                                            <div>
                                                {{ asset.name || 'Asset' }}
                                            </div>
                                            <div class="text-xs opacity-60">
                                                {{ asset.category }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex items-center space-x-2 text-sm"
                                        >
                                            <p>
                                                {{
                                                    'BOOKINGS.ASSETS_AVAILABLE'
                                                        | translate
                                                            : {
                                                                  count:
                                                                      asset.available ||
                                                                      asset
                                                                          .assets
                                                                          ?.length ||
                                                                      '0',
                                                              }
                                                }}
                                            </p>
                                        </div>
                                    </div>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    fav
                                    class="absolute right-1 top-1"
                                    [class.text-info]="isFavourite(asset.id)"
                                    (click)="toggleFav.emit(asset)"
                                >
                                    <icon
                                        [className]="
                                            isFavourite(asset.id)
                                                ? 'material-symbols-rounded'
                                                : 'material-symbols-outlined'
                                        "
                                        >favorite</icon
                                    >
                                </button>
                            </li>
                        }
                    </ul>
                } @else {
                    <div
                        empty
                        class="flex flex-col items-center justify-center space-y-2 p-16"
                    >
                        <p class="text-center opacity-30">
                            {{ 'BOOKINGS.ASSETS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div
                    loading
                    class="flex flex-col items-center justify-center space-y-2 p-16"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'BOOKINGS.ASSETS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
    styles: [
        `
            :host {
                width: 100%;
                height: 100%;
            }
        `,
    ],
    imports: [
        CommonModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        TranslatePipe,
        IconComponent,
    ],
})
export class AssetListComponent {
    private _asset_state = inject(AssetStateService);

    public readonly selected = input('');
    public readonly favorites = input<string[]>([]);
    public readonly selected_items = input<AssetGroup[]>([]);
    public readonly requested = input<Record<string, number>>({});
    public readonly toggleFav = output<AssetGroup>();
    public readonly onSelect = output<AssetGroup>();

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
                const selected = this.selected_items().find(
                    (i) => i.id === item.id,
                );
                if (selected) selected.assets = item.assets;
                if (requested[item.id] !== undefined) {
                    (item as any).available = Math.max(
                        (item.assets?.length || 0) - requested[item.id],
                        0,
                    );
                }
            }
            return assets.filter(
                (_: any) =>
                    (_.available != null && _.available > 0) ||
                    (_.available == null && _.assets?.length > 0),
            );
        }),
    );

    public ngOnChanges(changes: SimpleChanges) {
        const selected_items = this.selected_items();
        if (changes.selected_items && selected_items?.length) {
            const counts = {};
            for (const item of selected_items) {
                counts[item.id] = item.quantity;
            }
            this.counts.next(counts);
        }
        if (changes.requested) {
            this._requested_items.next(this.requested());
        }
    }

    public isFavourite(asset_id: string) {
        return this.favorites().includes(asset_id);
    }

    public selectAsset(asset: AssetGroup) {
        this.onSelect.emit(asset);
    }
}
