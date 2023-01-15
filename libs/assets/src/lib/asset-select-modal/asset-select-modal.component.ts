import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { Asset } from '../asset.class';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'asset-select-modal',
    template: `
        <div
            class="w-[100vw] h-[100vh] sm:relative sm:w-auto sm:h-auto flex flex-col bg-white dark:bg-neutral-700"
        >
            <header class="flex items-center space-x-4 w-full">
                <button icon mat-dialog-close class="bg-black/20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Add Assets</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 dark:divide-neutral-500 min-h-[65vh] h-[65vh] sm:max-h-[65vh] sm:max-w-[95vw] w-full overflow-hidden"
            >
                <asset-filters class="h-full hidden sm:block"></asset-filters>
                <div
                    class="flex flex-col items-center flex-1 w-1/2 h-full sm:min-w-[20rem] sm:h-[65vh]"
                >
                    <asset-filters-display
                        class="w-full border-b border-gray-200 dark:border-neutral-500 dark:bg-neutral-700"
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
                    class="h-full w-full sm:h-[65vh] absolute sm:relative sm:flex sm:max-w-[20rem] bg-white  dark:bg-neutral-700 z-20"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id || '')"
                    (activeChange)="setSelected(displayed!, $event)"
                    [fav]="
                        !!displayed &&
                        this.favorites.includes(displayed?.id || '')
                    "
                    (toggleFav)="toggleFavourite(displayed!)"
                    (close)="displayed = null"
                ></asset-details>
            </main>
            <footer
                class="flex sm:hidden flex-col-reverse items-center justify-end p-2 border-t border-gray-200 dark:border-neutral-500w-full"
            >
                <button
                    btn
                    matRipple
                    back-btn
                    class="inverse sm:hidden w-full sm:w-auto"
                    *ngIf="displayed"
                    (click)="displayed = null"
                >
                    Back
                </button>
                <button
                    btn
                    matRipple
                    save
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:w-auto sm:mb-0"
                >
                    View List
                </button>
            </footer>
            <footer
                class="hidden sm:flex items-center justify-between p-2 border-t border-gray-200 dark:border-neutral-500 w-full"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="selected"
                    class="clear text-primary"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">arrow_back</app-icon>
                        <div class="mr-1 underline">Back to form</div>
                    </div>
                </button>
                <p class="opacity-60 text-sm">{{ count }} assets(s) added</p>
                <button
                    btn
                    matRipple
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</app-icon>
                        <div class="mr-1">
                            {{
                                isSelected(displayed?.id)
                                    ? 'Remove from Booking'
                                    : 'Add to booking'
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    styles: [``],
})
export class AssetSelectModalComponent {
    public displayed: Asset | null = null;
    public selected: Asset[] = [...(this._items || [])];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get count() {
        return this.selected.reduce((t, i) => t + i.amount, 0);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    constructor(
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) private _items: Asset[]
    ) {}

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
