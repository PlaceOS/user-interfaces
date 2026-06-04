import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { toSignal } from '@angular/core/rxjs-interop';
import { MatTooltipModule } from '@angular/material/tooltip';
import { isMobileSafari, SETTING_KEYS, SettingsService } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
} from '../booking-form.service';
import { LockerGridComponent } from '../locker-grid.component';
import { LockerBank } from '../locker.class';
import { LockerBankListComponent } from './locker-bank-list.component';
import { LockerFiltersDisplayComponent } from './locker-filters-display.component';
import { LockerFiltersComponent } from './locker-filters.component';
import { LockerMapComponent } from './locker-map.component';

@Component({
    selector: 'locker-select-modal',
    template: `
        <div
            class="bg-base-100 mb-10 flex h-[calc(100vh-2.5rem)] max-h-[calc(100vh-2.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
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
                    <locker-filters
                        [hide_levels]="view() !== 'list'"
                    ></locker-filters>
                </div>
                <div
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-[20rem] md:w-160 lg:block"
                    [class.hidden]="show_filters()"
                    [class.p-2]="view() === 'list'"
                >
                    @if (!bank()) {
                        @if (view() === 'list') {
                            <locker-filters-display
                                [(view)]="view"
                            ></locker-filters-display>
                        }
                        @if (view() === 'list') {
                            <locker-bank-list
                                [active]="displayed()?.id || ''"
                                [selected]="selected_ids()"
                                [favorites]="favorites()"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank.set($any($event))"
                            ></locker-bank-list>
                        } @else {
                            <locker-map
                                class="h-full min-h-[60vh] w-full"
                                [is_displayed]="!!displayed()"
                                [active]="displayed()?.id || ''"
                                (onSelect)="displayed.set($event)"
                            >
                            </locker-map>
                        }
                    } @else {
                        <div
                            class="bg-base-200 flex h-full w-full flex-col overflow-auto"
                        >
                            <div
                                class="sticky left-0 flex w-full items-center space-x-2"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="border-base-300 bg-base-100 border"
                                    (click)="bank.set(null)"
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="px-2 py-2 font-medium">
                                    {{ bank()?.name }}
                                </div>
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank()"
                                [selected]="displayed()?.id || ''"
                                (clicked)="displayed.set($event)"
                            >
                            </locker-grid>
                        </div>
                    }
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
                class="bg-base-200 flex w-full items-center justify-between space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    name="locker-return"
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
                    name="toggle-locker"
                    [disabled]="!displayed()"
                    [class.inverse]="isSelected(displayed()?.id)"
                    (click)="
                        setSelected(displayed(), !isSelected(displayed()?.id))
                    "
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            isSelected(displayed()?.id) ? 'remove' : 'add'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                (isSelected(displayed()?.id)
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
        MatTooltipModule,
        LockerBankListComponent,
        LockerFiltersComponent,
        LockerMapComponent,
        LockerFiltersDisplayComponent,
        LockerGridComponent,
    ],
})
export class LockerSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<LockerSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        items: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    private readonly _options = toSignal(this._event_form.options, {
        initialValue: null,
    });

    public readonly show_filters = signal(false);
    public readonly displayed = signal<BookingAsset | null>(null);
    public readonly selected = signal<BookingAsset[]>([]);
    public readonly view = signal<'list' | 'map'>('list');
    public readonly bank = signal<LockerBank | null>(null);
    public readonly is_safari = signal(isMobileSafari());
    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );
    public readonly favorites = signal<string[]>(
        this._settings.get<string[]>(SETTING_KEYS.FAVORITE_LOCKERS) || [],
    );

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.items || [])]);
        this._event_form.setOptions(_data.options);
        effect(() => {
            this._options();
            this.displayed.set(null);
            this.bank.set(null);
        });
    }

    public isSelected(id?: string | null) {
        return !!id && this.selected().some((item) => item.id === id);
    }

    public setSelected(item: BookingAsset | null, state: boolean) {
        if (!item) return;
        const list = this.selected().filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected.set(list);
        if (!this._data.options.group && state) this._dialog_ref.close([item]);
    }

    public toggleFavourite(item: BookingAsset | null) {
        if (!item?.id) return;
        const fav_list = this.favorites();
        const new_state = !fav_list.includes(item.id);
        const next_favs = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);
        this.favorites.set(next_favs);
        this._settings.saveUserSetting(
            SETTING_KEYS.FAVORITE_LOCKERS,
            next_favs,
        );
    }
}
