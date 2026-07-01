import { Component, computed, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';
import { isMobileSafari, SETTING_KEYS, SettingsService } from '@placeos/common';

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

@Component({
    selector: 'desk-select-modal',
    template: `
        <div
            class="bg-base-100 mb-18 flex h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.DESK_FIND' | translate }}
                </h2>
                <div
                    class="divide-secondary border-secondary flex divide-x rounded-sm border"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view() !== 'list'"
                        [class.bg-secondary]="view() === 'list'"
                        [class.text-secondary-content]="view() === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view.set('list')"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view() !== 'map'"
                        [class.bg-secondary]="view() === 'map'"
                        [class.text-secondary-content]="view() === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view.set('map')"
                    >
                        <icon>map</icon>
                    </button>
                </div>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main
                class="relative flex h-1/2 max-h-[calc(100vh-7rem)] flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters()"
                >
                    <desk-filters
                        [hide_levels]="view() !== 'list'"
                    ></desk-filters>
                </div>
                <div
                    list
                    class="border-base-300 bg-base-200 h-full w-full min-w-[20rem] overflow-auto rounded-sm border sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters() || displayed()"
                    [class.sm:hidden]="displayed()"
                    [class.md:block]="!displayed()"
                    [class.p-2]="view() === 'list'"
                    [style.width]="
                        view() !== 'list'
                            ? displayed()
                                ? 'calc(100vw - 44rem)'
                                : 'calc(100vw - 24rem)'
                            : ''
                    "
                >
                    @if (view() === 'list') {
                        <desk-filters-display
                            [(view)]="view"
                        ></desk-filters-display>
                    }
                    @if (view() === 'list') {
                        <desk-list
                            [active]="displayed()?.id"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></desk-list>
                    } @else {
                        <desk-map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </desk-map>
                    }
                </div>
                <div
                    class="border-base-300 relative h-full w-full overflow-auto rounded-sm border shadow-sm sm:w-[20rem]"
                    [class.hidden]="show_filters() || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                    [class.lg:block]="view() === 'list'"
                >
                    @if (displayed()) {
                        <button
                            icon
                            matRipple
                            class="border-base-300 bg-base-100 absolute top-2 left-2 z-20 hidden border md:flex"
                            (click)="displayed.set(null)"
                        >
                            <icon>close</icon>
                        </button>
                    }
                    <desk-details
                        [desk]="displayed()"
                        [active]="selected_ids().includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="
                            setSelected(
                                displayed(),
                                !isSelected(displayed()?.id)
                            )
                        "
                        [fav]="
                            displayed() &&
                            this.favorites().includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></desk-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="show_filters.set(!show_filters())"
                    >
                        <icon>{{
                            show_filters() ? 'close' : 'filter_list'
                        }}</icon>
                    </button>
                }
            </main>
            <footer
                class="bg-base-200 flex w-full items-center space-x-2 rounded-sm border-none p-2"
                [class.justify-between]="allow_multiple()"
                [class.justify-end]="!allow_multiple()"
            >
                @if (allow_multiple()) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
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
                }
                <button
                    btn
                    matRipple
                    name="toggle-desk"
                    [disabled]="!displayed()"
                    [class.inverse]="
                        allow_multiple() && isSelected(displayed()?.id)
                    "
                    (click)="toggleDisplayedDesk()"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            allow_multiple()
                                ? isSelected(displayed()?.id)
                                    ? 'remove'
                                    : 'add'
                                : 'done'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                allow_multiple()
                                    ? ((isSelected(displayed()?.id)
                                          ? 'COMMON.REMOVE_FROM'
                                          : 'COMMON.ADD_TO'
                                      ) | translate)
                                    : 'Select Desk'
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    styles: [
        `
            @media screen and (max-width: 640px) {
                [list] {
                    width: 100% !important;
                }
            }
        `,
    ],
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatTooltipModule,
        DeskListComponent,
        DeskDetailsComponent,
        DeskFiltersComponent,
        DeskMapComponent,
        DeskFiltersDisplayComponent,
    ],
})
export class DeskSelectModalComponent {
    private _data = inject<{
        items: BookingAsset[] | (() => BookingAsset[]);
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _dialog_ref =
        inject<MatDialogRef<DeskSelectModalComponent>>(MatDialogRef);

    public readonly selected = signal<BookingAsset[]>([]);
    public readonly view = signal<'list' | 'map'>('list');
    public readonly displayed = signal<BookingAsset | null>(null);
    public readonly show_filters = signal(false);
    public readonly is_safari = signal(isMobileSafari());
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
        this._settings.get<string[]>(SETTING_KEYS.FAVORITE_DESKS) || [],
    );

    public readonly allow_multiple = computed(
        () => !!this._data.options?.group,
    );

    constructor() {
        const selected_desks =
            typeof this._data?.items === 'function'
                ? this._data.items()
                : this._data?.items || [];
        this.selected.set([...selected_desks]);
        this._event_form.setOptions(this._data?.options || {});
        this.view.set(this._default_select_as_map() ? 'map' : 'list');
    }

    public isSelected(id: string) {
        return !!id && this.selected().some((item) => item.id === id);
    }

    public setSelected(item: BookingAsset, state: boolean) {
        const list = this.selected().filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected.set(list);
        if (!this._data.options.group && state) {
            this.displayed.set(null);
            setTimeout(() => this._dialog_ref.close([item]), 50);
        }
    }

    public toggleDisplayedDesk() {
        if (!this.displayed()) return;
        this.setSelected(
            this.displayed(),
            this.allow_multiple()
                ? !this.isSelected(this.displayed()?.id)
                : true,
        );
    }

    public toggleFavourite(item: BookingAsset | null) {
        if (!item?.id) return;
        const fav_list =
            this._settings.get<string[]>(SETTING_KEYS.FAVORITE_DESKS) ||
            this.favorites();
        const new_state = !fav_list.includes(item.id);
        const next_favs = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);
        this.favorites.set(next_favs);
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, next_favs);
    }
}
