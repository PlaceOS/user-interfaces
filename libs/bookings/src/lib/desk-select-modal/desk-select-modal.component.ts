import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { SETTING_KEYS, SettingsService } from '@placeos/common';
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
                class="divide-base-200 flex h-[65vh] w-[calc(100vw-4rem)] items-center divide-x overflow-hidden"
            >
                <desk-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [hide_levels]="view !== 'list'"
                ></desk-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <desk-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></desk-filters-display>
                    @if (view === 'list') {
                        <desk-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="bg-base-200 h-1/2 flex-1"
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
                    class="bg-base-100 absolute z-20 block h-full w-full sm:relative sm:flex sm:h-[65vh] sm:max-w-[20rem]"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    [single_select]="!allow_multiple"
                    [hide_map]="view === 'map'"
                    (activeChange)="toggleDisplayedDesk()"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></desk-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
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
                class="border-base-200 hidden w-full items-center justify-between border-t p-2 sm:flex"
            >
                @if (allow_multiple) {
                    <button
                        btn
                        matRipple
                        name="desk-return"
                        [mat-dialog-close]="selected"
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
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-desk"
                    [disabled]="!displayed"
                    [class.inverse]="allow_multiple && isSelected(displayed?.id)"
                    (click)="toggleDisplayedDesk()"
                >
                    <div class="flex items-center">
                        <icon class="text-xl">{{
                            allow_multiple
                                ? isSelected(displayed?.id)
                                    ? 'remove'
                                    : 'add'
                                : 'done'
                        }}</icon>
                        <div class="mr-1">
                            {{
                                allow_multiple
                                    ? ((isSelected(displayed?.id)
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

    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view: 'map' | 'list' = 'list';

    private _favorites_cache: string[] | null = null;

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        // Return cache if available for instant updates
        if (this._favorites_cache !== null) return this._favorites_cache;
        return this._settings.get<string[]>(SETTING_KEYS.FAVORITE_DESKS) || [];
    }

    public get allow_multiple() {
        return !!this._data.options?.group;
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

    public toggleDisplayedDesk() {
        if (!this.displayed) return;
        this.setSelected(
            this.displayed,
            this.allow_multiple ? !this.isSelected(this.displayed?.id) : true,
        );
    }

    public toggleFavourite(item: BookingAsset) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        const updated = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);

        // Optimistically update cache for instant UI update
        this._favorites_cache = updated;

        // Save to settings in background
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, updated);
    }
}
