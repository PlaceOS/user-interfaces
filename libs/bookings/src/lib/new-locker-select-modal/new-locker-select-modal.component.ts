import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';
import { AsyncHandler, isMobileSafari, SettingsService } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
} from '../booking-form.service';
import { LockerGridComponent } from '../locker-grid.component';
import { LockerBank } from '../locker.class';
import { NewLockerBankListComponent } from './new-locker-bank-list.component';
import { NewLockerFiltersDisplayComponent } from './new-locker-filters-display.component';
import { NewLockerFiltersComponent } from './new-locker-filters.component';
import { NewLockerMapComponent } from './new-locker-map.component';

export const FAV_LOCKER_KEY = 'favourite_lockers';

@Component({
    selector: 'new-locker-select-modal',
    template: `
        <div
            class="flex h-screen w-screen flex-col space-y-2 overflow-hidden bg-base-100 p-2 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="flex h-14 w-full items-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'BOOKINGS.DESK_FIND' | translate }}
                </h2>
                <div
                    class="flex divide-x divide-secondary rounded border border-secondary"
                >
                    <button
                        icon
                        matRipple
                        class="rounded-l rounded-r-none"
                        [class.bg-base-100]="view !== 'list'"
                        [class.bg-secondary]="view === 'list'"
                        [class.text-secondary-content]="view === 'list'"
                        [matTooltip]="'COMMON.LIST' | translate"
                        (click)="view = 'list'"
                    >
                        <icon>list</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        class="rounded-l-none rounded-r"
                        [class.bg-base-100]="view !== 'map'"
                        [class.bg-secondary]="view === 'map'"
                        [class.text-secondary-content]="view === 'map'"
                        [matTooltip]="'COMMON.MAP' | translate"
                        (click)="view = 'map'"
                    >
                        <icon>map</icon>
                    </button>
                </div>
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
                    <new-locker-filters
                        [hide_levels]="view !== 'list'"
                    ></new-locker-filters>
                </div>
                <div
                    class="h-full w-full overflow-auto rounded border border-base-300 bg-base-200 sm:w-[20rem] md:w-[40rem] lg:block"
                    [class.hidden]="show_filters"
                    [class.p-2]="view === 'list'"
                >
                    @if (!bank) {
                        @if (view === 'list') {
                            <new-locker-filters-display
                                [(view)]="view"
                            ></new-locker-filters-display>
                        }
                        @if (view === 'list') {
                            <new-locker-bank-list
                                [active]="displayed?.id"
                                [selected]="selected_ids"
                                [favorites]="favorites"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank = $event"
                            ></new-locker-bank-list>
                        } @else {
                            <new-locker-map
                                class="h-full w-full"
                                [is_displayed]="!!displayed"
                                [active]="displayed?.id"
                                (onSelect)="displayed = $event"
                            >
                            </new-locker-map>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-col overflow-auto bg-base-200"
                        >
                            <div
                                class="sticky left-0 flex w-full items-center space-x-2"
                            >
                                <button
                                    icon
                                    matRipple
                                    class="border border-base-300 bg-base-100"
                                    (click)="bank = null"
                                >
                                    <icon>arrow_back</icon>
                                </button>
                                <div class="px-2 py-2 font-medium">
                                    {{ bank.name }}
                                </div>
                            </div>
                            <locker-grid
                                class="h-1/2 w-full flex-1"
                                [bank]="bank"
                                [selected]="displayed?.id"
                                (clicked)="displayed = $event"
                            >
                            </locker-grid>
                        </div>
                    }
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
                    name="locker-return"
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
                    name="toggle-locker"
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
        NewLockerBankListComponent,
        NewLockerFiltersComponent,
        NewLockerMapComponent,
        NewLockerFiltersDisplayComponent,
        LockerGridComponent,
    ],
})
export class NewLockerSelectModalComponent extends AsyncHandler {
    private _dialog_ref =
        inject<MatDialogRef<NewLockerSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        items: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    public show_filters = false;
    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view = 'list';
    public bank?: LockerBank = null;

    public get is_safari() {
        return isMobileSafari();
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>(FAV_LOCKER_KEY) || [];
    }

    constructor() {
        super();
        const _data = this._data;

        this.selected = [...(_data.items || [])];
        this._event_form.setOptions(_data.options);
    }

    public ngOnInit() {
        this._event_form.options.subscribe(() => {
            this.displayed = null;
            this.bank = null;
        });
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: BookingAsset, state: boolean) {
        const list = this.selected.filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected = list;
        if (!this._data.options.group && state) this._dialog_ref.close([item]);
    }

    public toggleFavourite(item: BookingAsset) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        if (new_state) {
            this._settings.saveUserSetting(FAV_LOCKER_KEY, [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_LOCKER_KEY,
                fav_list.filter((_) => _ !== item.id),
            );
        }
    }
}
