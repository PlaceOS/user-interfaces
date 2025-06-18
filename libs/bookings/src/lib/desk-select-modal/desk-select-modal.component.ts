import { Component, inject } from '@angular/core';
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
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
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
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-desk-list"
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view !== 'list'"
                        (click)="view = 'list'"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="flex h-[65vh] w-[calc(100vw-4rem)] items-center divide-x divide-base-200 overflow-hidden"
            >
                <desk-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></desk-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <desk-filters-display
                        class="w-full border-b border-base-200"
                        [(view)]="view"
                    ></desk-filters-display>
                    @if (view === 'list') {
                        <desk-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="h-1/2 flex-1 bg-base-200"
                        ></desk-list>
                    } @else {
                        <desk-map
                            class="h-1/2 w-full flex-1"
                            [is_displayed]="!!displayed"
                            [active]="displayed?.id"
                            (onSelect)="displayed = $event"
                        >
                        </desk-map>
                    }
                </div>
                <desk-details
                    [desk]="displayed"
                    class="absolute z-20 block h-full w-full bg-base-100 sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    [hide_map]="view === 'map'"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></desk-details>
            </main>
            <footer
                class="flex w-full flex-col-reverse items-center justify-end border-t border-base-200 px-2 pb-[5.5rem] pt-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-desks"
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
                    name="desk-return"
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
                        'BOOKINGS.DESK_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-desk"
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

    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view = 'list';

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>(FAV_DESK_KEY) || [];
    }

    constructor() {
        const _data = this._data;

        this.selected = [...(_data.items || [])];
        this._event_form.setOptions(_data.options);
        this.view = this._settings.get('app.desks.default_select_as_map')
            ? 'map'
            : 'list';
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: BookingAsset, state: boolean) {
        const list = this.selected.filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected = list;
        if (!this._data.options.group && state) {
            this.displayed = null;
            setTimeout(() => this._dialog_ref.close([item]), 50);
        }
    }

    public toggleFavourite(item: BookingAsset) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        if (new_state) {
            this._settings.saveUserSetting(FAV_DESK_KEY, [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_DESK_KEY,
                fav_list.filter((_) => _ !== item.id),
            );
        }
    }
}
