import { Component, OnInit, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { AsyncHandler, SettingsService } from '@placeos/common';
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

export const FAV_LOCKER_KEY = 'favourite_lockers';

@Component({
    selector: 'locker-select-modal',
    styles: [],
    template: `
        <div
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.LOCKER_FIND' | translate }}</h3>
                <!-- <div class="hidden flex-1 items-center justify-end sm:flex">
            <button
              btn
              matRipple
              name="view-locker-map"
              class="rounded-l rounded-r-none"
              [class.inverse]="view !== 'map'"
              (click)="view = 'map'"
              >
              {{ 'COMMON.MAP' | translate }}
            </button>
            <button
              btn
              matRipple
              name="view-locker-list"
              class="rounded-l-none rounded-r"
              [class.inverse]="view !== 'list'"
              (click)="view = 'list'"
              >
              {{ 'COMMON.LIST' | translate }}
            </button>
          </div> -->
            </header>
            <main
                class="flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x divide-base-200 overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <locker-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></locker-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <locker-filters-display
                        class="w-full border-b border-base-200"
                        [(view)]="view"
                    ></locker-filters-display>
                    @if (!bank) {
                        @if (view === 'list') {
                            <locker-bank-list
                                [active]="displayed?.id"
                                [selected]="selected_ids"
                                [favorites]="favorites"
                                (toggleFav)="toggleFavourite($event)"
                                (onSelect)="bank = $event"
                                class="h-1/2 flex-1 bg-base-200"
                            ></locker-bank-list>
                        } @else {
                            <locker-map
                                class="h-1/2 w-full flex-1"
                                [is_displayed]="!!displayed"
                                (onSelect)="bank = $event"
                            >
                            </locker-map>
                        }
                    } @else {
                        <div
                            class="flex h-full w-full flex-col overflow-auto bg-base-200"
                        >
                            <div
                                class="sticky left-0 w-full px-2 py-2 font-medium"
                            >
                                {{ bank.name }}
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
            </main>
            <footer
                class="flex w-full flex-col-reverse items-center justify-end border-t border-base-200 px-2 pb-[5.5rem] pt-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="locker-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-lockers"
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:mb-0 sm:w-32"
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
                    name="locker-return"
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
                <p class="text-center text-sm opacity-60">
                    {{
                        'BOOKINGS.LOCKER_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <div class="flex items-center">
                    @if (bank) {
                        <button
                            btn
                            matRipple
                            name="clear-bank"
                            class="inverse mr-2 w-32"
                            (click)="bank = null; displayed = null"
                        >
                            {{ 'COMMON.RETURN' | translate }}
                        </button>
                    }
                    <button
                        btn
                        matRipple
                        name="toggle-locker"
                        [disabled]="!displayed"
                        [class.inverse]="isSelected(displayed?.id)"
                        (click)="
                            setSelected(displayed, !isSelected(displayed?.id))
                        "
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
                </div>
            </footer>
        </div>
    `,
    imports: [
        LockerGridComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        LockerBankListComponent,
        LockerFiltersComponent,
        LockerFiltersDisplayComponent,
    ],
})
export class LockerSelectModalComponent extends AsyncHandler implements OnInit {
    private _dialog_ref =
        inject<MatDialogRef<LockerSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        items: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view = 'list';
    public bank?: LockerBank = null;

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
