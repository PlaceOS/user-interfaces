import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { CateringItem } from '../catering-item.class';
import { CateringOrderStateService } from './catering-order-state.service';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'new-catering-order-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none flex flex-col bg-white dark:bg-neutral-700"
        >
            <header class="flex items-center space-x-4 w-full">
                <button
                    icon
                    matRipple
                    [mat-dialog-close]="selected"
                    class="bg-black/20"
                >
                    <app-icon>close</app-icon>
                </button>
                <h3 i18n>Add Catering</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 dark:divide-neutral-500 min-h-[65vh] h-[65vh] sm:max-h-[65vh] sm:max-w-[95vw] w-full overflow-hidden"
            >
                <catering-item-filters
                    class="h-full hidden sm:block sm:max-w-[12rem] sm:h-[65vh] sm:max-h-full"
                ></catering-item-filters>
                <div
                    class="flex flex-col items-center flex-1 w-1/2 h-full sm:h-[65vh]"
                >
                    <catering-item-filters
                        class="w-full border-b border-gray-200 dark:border-neutral-500"
                        [search]="true"
                    ></catering-item-filters>
                    <catering-item-list
                        [active]="displayed?.custom_id"
                        [selected]="selected_ids"
                        [selected_items]="selected"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="flex-1 h-1/2 w-full overflow-hidden"
                    ></catering-item-list>
                </div>
                <catering-item-details
                    [item]="displayed!"
                    class="h-full w-full sm:h-[65vh] absolute sm:relative sm:flex sm:max-w-[16rem] z-20 bg-white dark:bg-neutral-700"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.custom_id || '')"
                    (activeChange)="setSelected(displayed!, $event)"
                    [code]="code"
                    [fav]="
                        !!displayed &&
                        this.favorites.includes(displayed?.id || '')
                    "
                    (toggleFav)="toggleFavourite(displayed!)"
                    (close)="displayed = null"
                ></catering-item-details>
            </main>
            <footer
                class="flex sm:hidden flex-col-reverse items-center justify-end p-2 border-t border-gray-200 dark:border-neutral-500 w-full"
            >
                <button
                    btn
                    matRipple
                    back-btn
                    class="inverse sm:hidden w-full sm:w-auto"
                    *ngIf="displayed"
                    (click)="displayed = null"
                    i18n
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
                    i18n
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
                        <div class="mr-1 underline" i18n>Back to form</div>
                    </div>
                </button>
                <p class="opacity-60 text-sm" i18n>
                    {{ count }} items(s) added
                </p>
                <button
                    btn
                    matRipple
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.custom_id)"
                    (click)="
                        setSelected(
                            displayed,
                            !isSelected(displayed?.custom_id)
                        )
                    "
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">{{
                            isSelected(displayed?.custom_id) ? 'remove' : 'add'
                        }}</app-icon>
                        <div class="mr-1">
                            {{
                                isSelected(displayed?.custom_id)
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
export class NewCateringOrderModalComponent {
    public displayed: CateringItem | null = null;
    public selected: CateringItem[] = [...(this._data[0] || [])];

    public get favorites() {
        return (
            this._settings.get<string[]>('favourite_menu_items') || EMPTY_FAVS
        );
    }

    public get selected_ids() {
        return this.selected.map((_) => _.custom_id).join(',');
    }

    public get count() {
        return this.selected.reduce((t, i) => t + i.quantity, 0);
    }

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        private _settings: SettingsService,
        private _order: CateringOrderStateService,
        private _org: OrganisationService,
        @Inject(MAT_DIALOG_DATA) private _data: [CateringItem[], any]
    ) {
        this._order.setFilters(this._data[1]);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: CateringItem, state: boolean) {
        const list = this.selected.filter(
            (_) => _.custom_id !== item.custom_id
        );
        if (state) {
            const new_item = new CateringItem(item);
            list.push(new_item);
            this.displayed = new_item;
        }
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
