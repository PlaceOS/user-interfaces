import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {
    CateringItem,
    OrganisationService,
    SETTING_KEYS,
    SettingsService,
} from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOrderStateService } from '../catering-order-modal/catering-order-state.service';
import { CateringItemDetailsComponent } from './catering-item-details.component';
import { CateringItemFiltersComponent } from './catering-item-filters.component';
import { CateringItemListComponent } from './catering-item-list.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'catering-select-modal',
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col space-y-2 overflow-hidden p-2 sm:h-auto sm:w-auto"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
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
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <catering-item-filters
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></catering-item-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                >
                    <catering-item-list
                        [active]="displayed()?.custom_id"
                        [selected]="selected_keys()"
                        [selected_items]="selected()"
                        [favorites]="favorites()"
                        (toggleFav)="toggleFavourite($event.id)"
                        (onSelect)="displayed.set($event)"
                    ></catering-item-list>
                </div>
                <div
                    class="border-base-300 h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                >
                    <catering-item-details
                        [item]="displayed()!"
                        [active]="displayed()?.in_order"
                        (activeChange)="setSelected(displayed()!, $event)"
                        [code]="code()"
                        [fav]="
                            !!displayed() &&
                            favorites().includes(displayed()?.id || '')
                        "
                        (toggleFav)="toggleFavourite(displayed()!.id)"
                        (close)="displayed.set(null)"
                    ></catering-item-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.update((_) => !_)"
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
                    name="catering-return"
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
                    name="toggle-catering"
                    [disabled]="!displayed()"
                    [class.inverse]="displayed()?.in_order"
                    (click)="setSelected(displayed(), !displayed()?.in_order)"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            displayed()?.in_order ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (displayed()?.in_order
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
        CateringItemListComponent,
        CateringItemDetailsComponent,
        CateringItemFiltersComponent,
    ],
})
export class CateringSelectModalComponent {
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

    public readonly displayed = signal<CateringItem | null>(null);
    public readonly selected = signal<CateringItem[]>([
        ...(this._data.items || []),
    ]);
    public readonly exact_time = signal(this._data.exact_time ?? false);
    public readonly offset = signal(0);
    public readonly offset_day = signal(0);
    private readonly _min_offset = this._settings.signal(
        'catering.min_offset',
        0,
    );
    private readonly _end_offset = this._settings.signal(
        'catering.end_offset',
        0,
    );
    public readonly show_filters = signal(false);

    public readonly favorites = computed(() => {
        return (
            this._settings.signal<string[]>(
                SETTING_KEYS.FAVORITE_DESKS,
                EMPTY_FAVS,
                true,
            )() || EMPTY_FAVS
        );
    });

    public readonly selected_keys = computed(() =>
        this.selected().map((_) => this.selectionKey(_)),
    );

    public readonly count = computed(() =>
        this.selected().reduce((t, i) => t + i.quantity, 0),
    );

    public readonly code = computed(() => {
        this._org.building_signal?.();
        return this._org.currency_code;
    });

    constructor() {
        const { duration } = this._data.details;
        this._order.setFilters(this._data.details);
        this.offset.set(
            Math.min(
                Math.max(this._min_offset(), this._data.offset || 0),
                (duration || 60) - this._end_offset(),
            ),
        );
        this.offset_day.set(this._data.offset_day || 0);
        if (this._data.caterer) {
            this._order.setFilters({ caterer: this._data.caterer });
        }
    }

    public itemSelectionId(item?: CateringItem | null) {
        return item?.custom_id?.replace(/menu$/, '') || '';
    }

    public selectionKey(item?: CateringItem | null) {
        return `${item?.caterer || ''}::${this.itemSelectionId(item)}`;
    }

    public setSelected(item: CateringItem, state: boolean) {
        if (!item) return;
        const selection_key = this.selectionKey(item);
        const selected = this.selected();
        const existing_index = selected.findIndex(
            (_) => this.selectionKey(_) === selection_key,
        );
        const existing = selected.find(
            (_) => this.selectionKey(_) === selection_key,
        );
        const list = selected.filter(
            (_) => this.selectionKey(_) !== selection_key,
        );
        if (!state) {
            if (
                this.displayed() &&
                this.selectionKey(this.displayed()) === selection_key
            ) {
                this.displayed.set(null);
            }
            this.selected.set(list);
            return;
        }
        if (item.in_order) {
            const new_item = new CateringItem({ ...item, in_order: true });
            this.insertSelection(list, new_item, existing_index);
            this.displayed.set(new_item);
            this.selected.set(list);
            return;
        }
        const new_item = new CateringItem({
            ...item,
            quantity: (existing?.quantity || 0) + (item.quantity || 1),
            in_order: true,
        });
        this.insertSelection(list, new_item, existing_index);
        this.resetMenuItem(item);
        this.displayed.set(new_item);
        this.selected.set(list);
    }

    public insertSelection(
        list: CateringItem[],
        item: CateringItem,
        existing_index: number,
    ) {
        if (existing_index < 0 || existing_index >= list.length) {
            list.push(item);
            return;
        }
        list.splice(existing_index, 0, item);
    }

    public resetMenuItem(item: CateringItem) {
        (item as any).quantity = 1;
        for (const option of item.options || []) {
            delete option.active;
        }
    }

    public toggleFavourite(item: string) {
        const fav_list = this.favorites();
        const new_state = !fav_list.includes(item);
        if (new_state) {
            this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, [
                ...fav_list,
                item,
            ]);
        } else {
            this._settings.saveUserSetting(
                SETTING_KEYS.FAVORITE_DESKS,
                fav_list.filter((_) => _ !== item),
            );
        }
    }
}
