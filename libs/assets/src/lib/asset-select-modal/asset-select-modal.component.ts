import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { Asset } from '../asset.class';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'asset-select-modal',
    template: ` <div
        class="absolute inset-0 sm:relative sm:inset-none bg-white flex flex-col"
    >
        <header class="flex items-center space-x-4 w-full">
            <button mat-icon-button mat-dialog-close class="bg-black/20">
                <app-icon>close</app-icon>
            </button>
            <h3>Find Asset</h3>
        </header>
        <main
            class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
        >
            <asset-filters class="h-full hidden sm:block"></asset-filters>
            <div class="flex flex-col items-center flex-1 w-1/2 h-full">
                <asset-filters-display
                    class="w-full border-b border-gray-200"
                ></asset-filters-display>
                <asset-list
                    [selected]="selected_ids"
                    [favorites]="favorites"
                    (toggleFav)="toggleFavourite($event)"
                    (onSelect)="displayed = $event"
                    class="flex-1 h-1/2 w-full overflow-hidden"
                ></asset-list>
            </div>
            <asset-details
                [item]="displayed!"
                class="h-full w-full sm:w-auto absolute sm:relative sm:block z-20"
                [class.hidden]="!displayed"
                [class.inset-0]="displayed"
                [active]="selected_ids.includes(displayed?.id || '')"
                (activeChange)="setSelected(displayed!, $event)"
                [fav]="
                    !!displayed && this.favorites.includes(displayed?.id || '')
                "
                (toggleFav)="toggleFavourite(displayed!)"
                (close)="displayed = null"
            ></asset-details>
        </main>
        <footer
            class="flex flex-col-reverse sm:flex-row items-center justify-end p-2 sm:space-x-2 border-t border-gray-200 w-full"
        >
            <button
                mat-button
                back-btn
                class="inverse sm:hidden w-full sm:w-auto"
                *ngIf="displayed"
                (click)="displayed = null"
            >
                Back
            </button>
            <button
                mat-button
                save
                [mat-dialog-close]="selected"
                [class.mb-2]="displayed"
                class="w-full sm:w-auto sm:mb-0"
            >
                View List
            </button>
        </footer>
    </div>`,
    styles: [``],
})
export class AssetSelectModalComponent {
    public displayed: Asset | null = null;
    public selected: Asset[] = [];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    constructor(private _settings: SettingsService) {}

    public setSelected(asset: Asset, state: boolean) {
        const list = this.selected.filter((_) => _.id !== asset.id);
        if (state) list.push(asset);
        this.selected = list;
    }

    public toggleFavourite(asset: Asset) {
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
                fav_list.filter((_) => _ !== asset.id)
            );
        }
    }
}
