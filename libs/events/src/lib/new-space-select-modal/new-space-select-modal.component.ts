import { Component, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';
import { isMobileSafari, SettingsService } from '@placeos/common';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';

import { EventFormOptions, EventFormService } from '@placeos/events';
import { Space } from '../space.class';
import { NewSpaceDetailsComponent } from './new-space-details.component';
import { NewSpaceFiltersDisplayComponent } from './new-space-filters-display.component';
import { NewSpaceFiltersComponent } from './new-space-filters.component';
import { NewSpaceListComponent } from './new-space-list.component';
import { NewSpaceMapComponent } from './new-space-map.component';

export const FAV_DESK_KEY = 'favourite_spaces';

@Component({
    selector: 'new-space-select-modal',
    template: `
        <div
            class="flex h-screen w-screen flex-col space-y-2 overflow-hidden bg-base-100 p-2 sm:h-auto sm:w-auto"
            [style.height]="is_safari ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="flex h-14 w-full items-center space-x-2 rounded border-none bg-base-200 p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_FIND' | translate }}
                </h2>
                <div
                    class="flex divide-x divide-secondary rounded border border-secondary"
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
                class="relative flex h-1/2 flex-1 sm:h-[65vh] sm:flex-none sm:space-x-2"
            >
                <div
                    filters
                    class="h-full w-full overflow-y-auto overflow-x-hidden rounded border border-base-300 shadow sm:block sm:w-[20rem]"
                    [class.hidden]="!show_filters"
                >
                    <new-space-filters
                        [hide_levels]="view() !== 'list'"
                    ></new-space-filters>
                </div>
                <div
                    list
                    class="h-full w-full overflow-auto rounded border border-base-300 bg-base-200 sm:w-[20rem] lg:block"
                    [class.hidden]="show_filters || displayed()"
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
                        <new-space-filters-display
                            [(view)]="view"
                        ></new-space-filters-display>
                    }
                    @if (view() === 'list') {
                        <new-space-list
                            list
                            [active]="displayed()?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                        ></new-space-list>
                    } @else {
                        <new-space-map
                            map
                            class="h-full w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </new-space-map>
                    }
                </div>
                <div
                    class="relative h-full w-full overflow-auto rounded border border-base-300 shadow sm:w-[20rem]"
                    [class.hidden]="show_filters || !displayed()"
                    [class.sm:hidden]="!displayed()"
                    [class.md:block]="displayed()"
                    [class.lg:block]="view() === 'list'"
                >
                    @if (displayed()) {
                        <button
                            icon
                            matRipple
                            class="absolute left-2 top-2 z-20 hidden border border-base-300 bg-base-100 md:flex"
                            (click)="displayed.set(null)"
                        >
                            <icon>close</icon>
                        </button>
                    }
                    <new-space-details
                        details
                        [space]="displayed()"
                        [active]="selected_ids.includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            displayed &&
                            this.favorites.includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></new-space-details>
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
                    name="space-return"
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
                    name="toggle-space"
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
        NewSpaceMapComponent,
        NewSpaceListComponent,
        NewSpaceDetailsComponent,
        NewSpaceFiltersComponent,
        NewSpaceFiltersDisplayComponent,
    ],
})
export class NewSpaceSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<NewSpaceSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _data = inject<{
        spaces: Space[];
        options: Partial<EventFormOptions>;
        multiday?: boolean;
    }>(MAT_DIALOG_DATA);

    public show_filters = false;
    public selected: Space[] = [];
    public readonly view = signal<'list' | 'map'>('list');
    public readonly displayed = signal<Space | null>(null);
    public readonly multiday = !!this._data.multiday;
    public readonly room_alerts = this._event_form.room_alerts;

    public get is_safari() {
        return isMobileSafari();
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>('favourite_spaces') || [];
    }

    constructor() {
        const _data = this._data;

        this.selected = [...(_data.spaces || [])];
        this._event_form.setOptions(_data.options);
        this._event_form.setFilters(_data.options as any);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: Space, state: boolean) {
        const list = this.selected.filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected = list;
        if (!this._settings.get('app.events.allow_multiple_spaces') && state) {
            this.selected = [item];
            this._dialog_ref.close([item]);
        }
    }

    public toggleFavourite(item: Space) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_spaces', [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_spaces',
                fav_list.filter((_) => _ !== item.id),
            );
        }
    }
}
