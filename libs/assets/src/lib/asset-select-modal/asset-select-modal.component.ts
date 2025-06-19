import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { AssetStateService } from '../asset-state.service';
import { AssetGroup } from '../asset.class';
import { AssetDetailsComponent } from './asset-details.component';
import { AssetFiltersDisplayComponent } from './asset-filters-display.component';
import { AssetFiltersComponent } from './asset-filters.component';
import { AssetListComponent } from './asset-list.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'asset-select-modal',
    template: `
        <div
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.ASSETS_ADD_HEADER' | translate }}</h3>
            </header>
            <main
                class="flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x divide-base-200 overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <asset-filters
                        class="hidden h-full sm:block"
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></asset-filters>
                </div>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh] sm:min-w-[20rem]"
                >
                    <asset-filters-display
                        class="w-full border-b border-base-200"
                    ></asset-filters-display>
                    <asset-list
                        [selected]="selected_ids"
                        [favorites]="favorites"
                        [selected_items]="selected"
                        [requested]="requested"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="h-1/2 w-full flex-1 overflow-hidden"
                    ></asset-list>
                </div>
                <asset-details
                    [item]="displayed!"
                    class="absolute z-20 h-full w-full bg-base-100 sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id || '')"
                    (activeChange)="setSelected(displayed!, $event)"
                    (countChange)="updateSelectedCount($event)"
                    [fav]="
                        !!displayed &&
                        this.favorites.includes(displayed?.id || '')
                    "
                    (toggleFav)="toggleFavourite(displayed!)"
                    (close)="displayed = null"
                ></asset-details>
            </main>
            <footer
                class="flex flex-col-reverse items-center justify-end border-t border-base-200 p-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        back-btn
                        class="inverse w-full sm:hidden sm:w-auto"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    save
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-auto"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="hidden w-full items-center justify-between border-t border-base-200 p-2 sm:flex"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">Back to form</div>
                    </div>
                </button>
                <p class="text-sm opacity-60">{{ count }} asset(s) added</p>
                <button
                    btn
                    matRipple
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">
                            {{ isSelected(displayed?.id) ? 'remove' : 'add' }}
                        </icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
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
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        AssetDetailsComponent,
        AssetListComponent,
        AssetFiltersComponent,
        AssetFiltersDisplayComponent,
        AssetDetailsComponent,
        TranslatePipe,
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

    public displayed: AssetGroup | null = null;
    public selected: AssetGroup[] = [...(this._data.items || [])];
    public exact_time = this._data.exact_time ?? false;
    public requested = this._data.requested;
    public offset: number;
    public offset_day: number;

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get count() {
        return this.selected.reduce((t, i: any) => t + i.quantity, 0);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    constructor() {
        const { duration } = this._data.details;
        this._state.setOptions(this._data.details);
        this.offset = Math.min(
            Math.max(
                this._settings.get('app.assets.min_offset'),
                this._data.offset || 0,
            ),
            (duration || 60) - this._settings.get('app.assets.end_offset'),
        );
        this.offset_day = this._data.offset_day || 0;
    }

    public setSelected(group: AssetGroup, state: boolean) {
        const list = this.selected.filter((_) => _.id !== group.id);
        if (state) list.push(group);
        this.selected = [...list];
    }

    public updateSelectedCount(count: number) {
        if (!this.displayed) return;
        const item = this.selected.find((_) => _.id === this.displayed.id);
        if (item) {
            item.quantity = count;
            item.assets = this.displayed.assets;
        }
    }

    public toggleFavourite(asset: AssetGroup) {
        const fav_list = this.favorites;
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
