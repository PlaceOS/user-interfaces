import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { OrganisationService } from '@placeos/organisation';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringItem } from '../catering-item.class';
import { CateringItemDetailsComponent } from './catering-item-details.component';
import { CateringItemFiltersComponent } from './catering-item-filters.component';
import { CateringItemListComponent } from './catering-item-list.component';
import { CateringOrderStateService } from './catering-order-state.service';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'new-catering-order-modal',
    template: `
        <div
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center justify-between space-x-4">
                <h3>{{ 'CATERING.ORDER' | translate }}</h3>
                <button icon matRipple [mat-dialog-close]="selected">
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x divide-base-200 overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <catering-item-filters
                    class="hidden h-full sm:block sm:h-[65vh] sm:max-h-full sm:max-w-[12rem]"
                    [(at_time)]="exact_time"
                    [(offset)]="offset"
                    [(offset_day)]="offset_day"
                ></catering-item-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <catering-item-filters
                        class="w-full border-b border-base-200"
                        [search]="true"
                    ></catering-item-filters>
                    <catering-item-list
                        [active]="displayed?.custom_id"
                        [selected]="selected_ids"
                        [selected_items]="selected"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="h-1/2 w-full flex-1 overflow-hidden"
                    ></catering-item-list>
                </div>
                <catering-item-details
                    [item]="displayed!"
                    class="absolute z-20 h-full w-full bg-base-100 sm:relative sm:flex sm:h-[65vh] sm:max-w-[16rem]"
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
                class="flex w-full flex-col-reverse items-center justify-end border-t border-base-200 px-2 pb-[5.5rem] pt-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="catering-item-return"
                        class="inverse w-full sm:hidden sm:w-auto"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-catering-item"
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
                    name="catering-item-return"
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">arrow_back</icon>
                        <div class="mr-1 underline">
                            {{ 'COMMON.BACK_TO_FORM' | translate }}
                        </div>
                    </div>
                </button>
                <p class="text-sm opacity-60">
                    {{
                        'CATERING.ORDER_ITEM_COUNT'
                            | translate: { count: count }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-catering-item"
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
                        <icon class="text-xl">{{
                            isSelected(displayed?.custom_id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed?.custom_id)
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
        CateringItemDetailsComponent,
        CateringItemListComponent,
        CateringItemFiltersComponent,
    ],
})
export class NewCateringOrderModalComponent {
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
                fav_list.filter((_) => _ !== item.id),
            );
        }
    }
}
