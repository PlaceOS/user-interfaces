import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
} from '../booking-form.service';
import { DeskDetailsComponent } from './desk-details.component';
import { DeskFiltersDisplayComponent } from './desk-filters-display.component';
import { DeskFiltersComponent } from './desk-filters.component';
import { DeskListComponent } from './desk-list.component';
import { DeskMapComponent } from './desk-map.component';

export const FAV_DESK_KEY = 'favourite_desks';

@Component({
    selector: 'desk-select-modal',
    styles: [],
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.DESK_FIND' | translate }}</h3>
                <div class="hidden flex-1 items-center justify-end sm:flex">
                    <button
                        btn
                        matRipple
                        name="view-desk-map"
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view_state() !== 'map'"
                        (click)="view_state.set('map')"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-desk-list"
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view_state() !== 'list'"
                        (click)="view_state.set('list')"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="divide-base-200 flex h-[65vh] w-[calc(100vw-4rem)] items-center divide-x overflow-hidden"
            >
                <desk-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view_state() !== 'list'"
                ></desk-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <desk-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view_state"
                    ></desk-filters-display>
                    @if (view_state() === 'list') {
                        <desk-list
                            [active]="displayed()?.id || ''"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                            class="bg-base-200 h-1/2 flex-1"
                        ></desk-list>
                    } @else {
                        <desk-map
                            class="h-1/2 w-full flex-1"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id || ''"
                            (onSelect)="displayed.set($event)"
                        >
                        </desk-map>
                    }
                </div>
                <desk-details
                    [desk]="displayed()"
                    class="bg-base-100 absolute z-20 block h-full w-full sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed()"
                    [class.inset-0]="displayed()"
                    [active]="isSelected(displayed()?.id)"
                    [single_select]="!allow_multiple"
                    [hide_map]="view_state() === 'map'"
                    (activeChange)="toggleDisplayedDesk()"
                    [fav]="
                        displayed()
                            ? favorites().includes(displayed()?.id)
                            : false
                    "
                    (toggleFav)="toggleFavourite(displayed())"
                    (close)="displayed.set(null)"
                ></desk-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed()) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed.set(null)"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-desks"
                    [mat-dialog-close]="selected()"
                    [class.mb-2]="displayed()"
                    class="w-full sm:mb-0 sm:w-32"
                >
                    {{ 'COMMON.VIEW_LIST' | translate }}
                </button>
            </footer>
            <footer
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                @if (allow_multiple) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
                        [mat-dialog-close]="selected()"
                        class="clear text-secondary"
                    >
                        <div class="flex items-center">
                            <icon class="text-xl">done</icon>
                            <div class="mr-1 underline">
                                {{ 'COMMON.CONFIRM_SELECTION' | translate }}
                            </div>
                        </div>
                    </button>
                }
                <p class="text-sm opacity-60">
                    {{
                        'BOOKINGS.DESK_ADDED_COUNT'
                            | translate: { count: selected().length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-desk"
                    [disabled]="!displayed()"
                    [class.inverse]="
                        allow_multiple && isSelected(displayed()?.id)
                    "
                    (click)="toggleDisplayedDesk()"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            allow_multiple
                                ? isSelected(displayed()?.id)
                                    ? 'remove'
                                    : 'add'
                                : 'done'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                allow_multiple
                                    ? ((isSelected(displayed()?.id)
                                          ? 'COMMON.REMOVE_FROM'
                                          : 'COMMON.ADD_TO'
                                      ) | translate)
                                    : 'Select Item'
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    imports: [
        DeskMapComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        DeskDetailsComponent,
        DeskListComponent,
        DeskFiltersComponent,
        DeskFiltersDisplayComponent,
    ],
})
export class DeskSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<DeskSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        items: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    public readonly displayed = signal<BookingAsset | null>(null);
    public readonly selected = signal<BookingAsset[]>([]);
    public readonly view_state = signal<'map' | 'list'>('list');
    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );
    private readonly _default_select_as_map = this._settings.signal(
        'desks.default_select_as_map',
        false,
    );
    public readonly favorites = signal<string[]>(
        this._settings.get<string[]>(FAV_DESK_KEY) || [],
    );

    public get allow_multiple() {
        return !!this._data.options?.group;
    }

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.items || [])]);
        this._event_form.setOptions(_data.options);
        this.view_state.set(this._default_select_as_map() ? 'map' : 'list');
    }

    public get view() {
        return this.view_state();
    }

    public set view(value: 'map' | 'list') {
        this.view_state.set(value);
    }

    public isSelected(id?: string | null) {
        return !!id && this.selected().some((item) => item.id === id);
    }

    public setSelected(item: BookingAsset, state: boolean) {
        if (!item) return;
        const list = this.selected().filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected.set(list);
        if (!this._data.options.group && state) {
            this.displayed.set(null);
            setTimeout(() => this._dialog_ref.close([item]), 50);
        }
    }

    public toggleDisplayedDesk() {
        const displayed = this.displayed();
        if (!displayed) return;
        this.setSelected(
            displayed,
            this.allow_multiple ? !this.isSelected(displayed.id) : true,
        );
    }

    public toggleFavourite(item: BookingAsset | null) {
        if (!item?.id) return;
        const fav_list =
            this._settings.get<string[]>(FAV_DESK_KEY) || this.favorites();
        const new_state = !fav_list.includes(item.id);
        const next_favs = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);
        this.favorites.set(next_favs);
        this._settings.saveUserSetting(FAV_DESK_KEY, next_favs);
    }
}
