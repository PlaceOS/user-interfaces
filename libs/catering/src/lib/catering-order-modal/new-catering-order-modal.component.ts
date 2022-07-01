import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { CateringItem } from '../catering-item.class';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'new-catering-order-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none bg-white flex flex-col"
        >
            <header class="flex items-center space-x-4 w-full">
                <button mat-icon-button mat-dialog-close class="bg-black/20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Add Catering</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
            >
                <catering-item-filters
                    class="h-full hidden sm:block"
                ></catering-item-filters>
                <div class="flex flex-col items-center flex-1 w-1/2 h-full">
                    <catering-item-filters
                        class="h-full sm:hidden block"
                    ></catering-item-filters>
                    <catering-item-list
                        [selected]="selected_ids"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="flex-1 h-1/2 w-full overflow-hidden"
                    ></catering-item-list>
                </div>
                <catering-item-details
                    [item]="displayed!"
                    class="h-full w-full sm:w-auto absolute sm:relative sm:block z-20"
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
                ></catering-item-details>
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
        </div>
    `,
    styles: [``],
})
export class NewCateringOrderModalComponent {
    public displayed: CateringItem | null = null;
    public selected: CateringItem[] = [];

    public get favorites() {
        return (
            this._settings.get<string[]>('favourite_menu_items') || EMPTY_FAVS
        );
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    constructor(private _settings: SettingsService) {}

    public setSelected(item: CateringItem, state: boolean) {
        const list = this.selected.filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected = list;
    }

    public toggleFavourite(item: CateringItem) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_menu_items', [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_menu_items',
                fav_list.filter((_) => _ !== item.id)
            );
        }
    }
}
