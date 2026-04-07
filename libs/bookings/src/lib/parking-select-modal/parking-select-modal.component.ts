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
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
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
                        [class.inverse]="view() !== 'map'"
                        (click)="view.set('map')"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-desk-list"
                        class="rounded-l-none rounded-r"
                        [class.inverse]="view() !== 'list'"
                        (click)="view.set('list')"
                    >
                        {{ 'COMMON.LIST' | translate }}
                    </button>
                </div>
            </header>
            <main
                class="divide-base-200 flex h-[65vh] min-h-[65vh] w-full flex-1 items-center divide-x overflow-hidden sm:max-h-[65vh] sm:max-w-[95vw]"
            >
                <parking-space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view() !== 'list'"
                ></parking-space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <parking-space-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></parking-space-filters-display>
                    @if (view() === 'list') {
                        <parking-space-list
                            [active]="displayed()?.id || ''"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                            class="bg-base-200 h-1/2 flex-1"
                        ></parking-space-list>
                    } @else {
                        <parking-space-map
                            class="h-1/2 w-full flex-1"
                            [is_displayed]="!!displayed()"
                            (onSelect)="displayed.set($event)"
                        >
                        </parking-space-map>
                    }
                </div>
                <parking-space-details
                    [space]="displayed()"
                    class="bg-base-100 absolute z-20 block h-full w-full sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed()"
                    [class.inset-0]="displayed()"
                    [active]="isSelected(displayed()?.id)"
                    (activeChange)="setSelected(displayed(), $event)"
                    [fav]="
                        displayed()
                            ? favorites().includes(displayed()?.id)
                            : false
                    "
                    (toggleFav)="toggleFavourite(displayed())"
                    (close)="displayed.set(null)"
                    [map_open]="view() === 'map'"
                ></parking-space-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t p-2 sm:hidden"
            >
                @if (displayed()) {
                    <button
                        btn
                        matRipple
                        return
                        class="inverse w-full sm:hidden"
                        (click)="displayed.set(null)"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    save
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
                <button
                    btn
                    matRipple
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
                <p class="text-sm opacity-60">
                    {{
                        'BOOKINGS.PARKING_ADDED_COUNT'
                            | translate: { count: selected().length }
                    }}
                </p>
                <button
                    btn
                    matRipple
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

    public readonly displayed = signal<BookingAsset | null>(null);
    public readonly selected = signal<BookingAsset[]>([]);
    public readonly view = signal<'map' | 'list'>('list');
    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );
    public readonly favorites = signal<string[]>(
        this._settings.get<string[]>(FAV_PARKING_KEY) || [],
    );

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.spaces || [])]);
        this._event_form.setOptions(_data.options);
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
        this._settings.saveUserSetting(FAV_PARKING_KEY, next_favs);
    }
}
