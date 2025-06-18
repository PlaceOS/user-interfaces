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
import { ParkingSpaceDetailsComponent } from './parking-details.component';
import { ParkingSpaceFiltersDisplayComponent } from './parking-filters-display.component';
import { ParkingSpaceFiltersComponent } from './parking-filters.component';
import { ParkingSpaceListComponent } from './parking-list.component';
import { ParkingSpaceMapComponent } from './parking-map.component';

export const FAV_PARKING_KEY = 'favourite_parking_spaces';

@Component({
    selector: 'parking-space-select-modal',
    template: `
        <div
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'BOOKINGS.PARKING_FIND' | translate }}</h3>
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
                class="flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x divide-base-200 overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <parking-space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></parking-space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <parking-space-filters-display
                        class="w-full border-b border-base-200"
                        [(view)]="view"
                    ></parking-space-filters-display>
                    @if (view === 'list') {
                        <parking-space-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="h-1/2 flex-1 bg-base-200"
                        ></parking-space-list>
                    } @else {
                        <parking-space-map
                            class="h-1/2 w-full flex-1"
                            [selected]="selected_ids"
                            [is_displayed]="!!displayed"
                            (onSelect)="displayed = $event"
                        >
                        </parking-space-map>
                    }
                </div>
                <parking-space-details
                    [space]="displayed"
                    class="absolute z-20 block h-full w-full bg-base-100 sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                    [map_open]="view === 'map'"
                ></parking-space-details>
            </main>
            <footer
                class="flex w-full flex-col-reverse items-center justify-end border-t border-base-200 p-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        return
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    save
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
                        'BOOKINGS.PARKING_ADDED_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
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
        ParkingSpaceMapComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        ParkingSpaceDetailsComponent,
        ParkingSpaceListComponent,
        ParkingSpaceFiltersComponent,
        ParkingSpaceFiltersDisplayComponent,
    ],
})
export class ParkingSpaceSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<ParkingSpaceSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(BookingFormService);
    private _data = inject<{
        spaces: BookingAsset[];
        options: Partial<BookingFlowOptions>;
    }>(MAT_DIALOG_DATA);

    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view = 'list';

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>(FAV_PARKING_KEY) || [];
    }

    constructor() {
        const _data = this._data;

        this.selected = [...(_data.spaces || [])];
        this._event_form.setOptions(_data.options);
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
            this._settings.saveUserSetting(FAV_PARKING_KEY, [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_PARKING_KEY,
                fav_list.filter((_) => _ !== item.id),
            );
        }
    }
}
