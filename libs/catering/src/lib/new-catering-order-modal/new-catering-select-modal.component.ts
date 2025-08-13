import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';
import { SettingsService } from '@placeos/common';

import { OrganisationService } from '@placeos/organisation';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringItem } from '../catering-item.class';
import { CateringOrderStateService } from '../catering-order-modal/catering-order-state.service';
import { NewCateringItemDetailsComponent } from './new-catering-item-details.component';
import { NewCateringItemFiltersComponent } from './new-catering-item-filters.component';
import { NewCateringItemListComponent } from './new-catering-item-list.component';

const EMPTY_FAVS: string[] = [];
const FAV_KEY = 'favourite_menu_items';

@Component({
    selector: 'new-catering-select-modal',
    template: `
        <div
            class="flex h-screen w-screen flex-col space-y-2 overflow-hidden bg-base-100 p-2 sm:h-auto sm:w-auto"
        >
            <header
                class="flex h-14 w-full items-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CATERING.ORDER' | translate }}
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="h-full w-full overflow-y-auto overflow-x-hidden rounded border border-base-300 shadow sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters"
                >
                    <new-catering-item-filters></new-catering-item-filters>
                </div>
                <div
                    class="h-full w-full overflow-auto rounded border border-base-300 bg-base-200 sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || displayed"
                    [class.sm:hidden]="displayed"
                    [class.md:block]="!displayed"
                >
                    <new-catering-item-list
                        [active]="displayed?.custom_id"
                        [selected]="selected_ids"
                        [selected_items]="selected"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                    ></new-catering-item-list>
                </div>
                <div
                    class="h-full w-full overflow-auto rounded border border-base-300 shadow sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || !displayed"
                    [class.sm:hidden]="!displayed"
                    [class.md:block]="displayed"
                >
                    <new-catering-item-details
                        [item]="displayed!"
                        [active]="
                            selected_ids.includes(displayed?.custom_id || '')
                        "
                        (activeChange)="setSelected(displayed!, $event)"
                        [code]="code"
                        [fav]="
                            !!displayed &&
                            this.favorites.includes(displayed?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed!.id)"
                        (close)="displayed = null"
                    ></new-catering-item-details>
                </div>
                @if (!displayed) {
                    <button
                        icon
                        matRipple
                        class="absolute right-2 top-3 z-20 border border-base-200 bg-base-100 sm:hidden"
                        (click)="show_filters = !show_filters"
                    >
                        <icon>{{
                            show_filters ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="flex w-full items-center justify-between space-x-2 rounded border-none bg-base-200 p-2"
            >
                <button
                    btn
                    matRipple
                    name="catering-return"
                    [mat-dialog-close]="selected"
                    class="inverse bg-base-100 text-secondary"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="pr-2">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <button
                    btn
                    matRipple
                    name="toggle-catering"
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.id)
                                    ? 'CATERING.ORDER_ITEM_REMOVE'
                                    : 'CATERING.ORDER_ITEM_ADD'
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
        MatTooltipModule,
        NewCateringItemListComponent,
        NewCateringItemDetailsComponent,
        NewCateringItemFiltersComponent,
    ],
})
export class NewCateringSelectModalComponent {
    private _settings = inject(SettingsService);
    private _order = inject(CateringOrderStateService);
    private _org = inject(OrganisationService);
    private _data = inject<{
        items: CateringItem[];
        details: any;
        exact_time?: boolean;
        offset?: number;
        offset_day?: number;
        caterer?: string;
    }>(MAT_DIALOG_DATA);

    public displayed: CateringItem | null = null;
    public selected: CateringItem[] = [...(this._data.items || [])];
    public exact_time = this._data.exact_time ?? false;
    public offset: number;
    public offset_day: number;
    public show_filters = false;

    public get favorites() {
        return this._settings.get<string[]>(FAV_KEY) || EMPTY_FAVS;
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

    constructor() {
        const { duration } = this._data.details;
        this._order.setFilters(this._data.details);
        this.offset = Math.min(
            Math.max(
                this._settings.get('app.catering.min_offset'),
                this._data.offset || 0,
            ),
            (duration || 60) - this._settings.get('app.catering.end_offset'),
        );
        this.offset_day = this._data.offset_day || 0;
        if (this._data.caterer) {
            this._order.setFilters({ caterer: this._data.caterer });
        }
        console.log('Favourites:', this.favorites);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: CateringItem, state: boolean) {
        const list = this.selected.filter(
            (_) =>
                _.custom_id !== item.custom_id &&
                (!item.caterer || item.caterer === _.caterer),
        );
        if (state) {
            const new_item = new CateringItem({ ...item, in_order: true });
            list.push(new_item);
            this.displayed = new_item;
        }
        this.selected = list;
    }

    public toggleFavourite(item: string) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item);
        console.log('Favourites:', item, new_state);
        if (new_state) {
            this._settings.saveUserSetting(FAV_KEY, [...fav_list, item]);
        } else {
            this._settings.saveUserSetting(
                FAV_KEY,
                fav_list.filter((_) => _ !== item),
            );
        }
    }
}
