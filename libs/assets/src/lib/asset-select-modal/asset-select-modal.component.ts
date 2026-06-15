import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { AssetGroup, isMobileSafari, SettingsService } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { AssetStateService } from '../asset-state.service';
import { AssetDetailsComponent } from './asset-details.component';
import { AssetFiltersDisplayComponent } from './asset-filters-display.component';
import { AssetFiltersComponent } from './asset-filters.component';
import { AssetListComponent } from './asset-list.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'asset-select-modal',
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.ASSETS_ADD_HEADER' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <asset-filters
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></asset-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border p-2 sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                >
                    <asset-filters-display></asset-filters-display>
                    <asset-list
                        [selected]="selected_ids()"
                        [favorites]="favorites()"
                        [selected_items]="selected()"
                        [requested]="requested()"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed.set($event)"
                    ></asset-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                >
                    <asset-details
                        [item]="displayed()"
                        [active]="
                            selected_ids().includes(displayed()?.id || '')
                        "
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            !!displayed() &&
                            favorites().includes(displayed()?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></asset-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.update((value) => !value)"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="asset-return"
                    [mat-dialog-close]="selected()"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">done</icon>
                        <div class="pr-2">
                            {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-asset"
                    [disabled]="!displayed()"
                    [class.inverse]="isSelected(displayed()?.id)"
                    (click)="
                        setSelected(displayed(), !isSelected(displayed()?.id))
                    "
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed()?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed()?.id)
                                    ? 'COMMON.REMOVE_FROM'
                                    : 'COMMON.ADD_TO'
                                ) | translate
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    styles: [``],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        AssetListComponent,
        AssetDetailsComponent,
        AssetFiltersComponent,
        AssetFiltersDisplayComponent,
    ],
})
export class AssetSelectModalComponent {
    private _settings = inject(SettingsService);
    private _state = inject(AssetStateService);
    private _data = inject<{
        items: AssetGroup[];
        details: any;
        exact_time?: boolean;
        offset?: number;
        offset_day?: number;
        requested: Record<string, number>;
    }>(MAT_DIALOG_DATA);

    public readonly show_filters = signal(false);
    public readonly displayed = signal<AssetGroup | null>(null);
    public readonly selected = signal<AssetGroup[]>([
        ...(this._data.items || []),
    ]);
    public readonly exact_time = signal(this._data.exact_time ?? false);
    public readonly requested = signal(this._data.requested);
    public readonly offset = signal(0);
    public readonly offset_day = signal(0);
    private readonly _min_offset = this._settings.signal(
        'assets.min_offset',
        0,
    );
    private readonly _end_offset = this._settings.signal(
        'assets.end_offset',
        0,
    );
    private readonly _favorites = this._settings.signal<string[]>(
        'favourite_assets',
        EMPTY_FAVS,
        true,
    );

    public readonly is_safari = computed(() => isMobileSafari());

    public readonly favorites = computed(() => this._favorites());

    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );

    public readonly count = computed(() =>
        this.selected().reduce((t, i: any) => t + i.quantity, 0),
    );

    public isSelected(id?: string) {
        return id && this.selected_ids().includes(id);
    }

    constructor() {
        const { duration } = this._data.details;
        this._state.setOptions(this._data.details);
        this.offset.set(
            Math.min(
                Math.max(this._min_offset(), this._data.offset || 0),
                (duration || 60) - this._end_offset(),
            ),
        );
        this.offset_day.set(this._data.offset_day || 0);
    }

    public setSelected(group: AssetGroup | null, state: boolean) {
        if (!group) return;
        const list = this.selected().filter((_) => _.id !== group.id);
        if (state) list.push(group);
        this.selected.set([...list]);
    }

    public updateSelectedCount(count: number) {
        const displayed = this.displayed();
        if (!displayed) return;
        const item = this.selected().find((_) => _.id === displayed.id);
        if (item) {
            item.quantity = count;
            item.assets = displayed.assets;
        }
    }

    public toggleFavourite(asset: AssetGroup | null) {
        if (!asset) return;
        const fav_list = this.favorites();
        const new_state = !fav_list.includes(asset.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_assets', [
                ...fav_list,
                asset.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_assets',
                fav_list.filter((_) => _ !== asset.id),
            );
        }
    }
}
