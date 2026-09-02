import { Component, computed, effect, inject, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';

import { MatTooltipModule } from '@angular/material/tooltip';
import {
    isMobileSafari,
    OrganisationService,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { EventFormOptions, EventFormService } from '@placeos/events';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { SpaceDetailsComponent } from './space-details.component';
import { SpaceFiltersDisplayComponent } from './space-filters-display.component';
import { SpaceFiltersComponent } from './space-filters.component';
import { SpaceListComponent } from './space-list.component';
import { SpaceMapComponent } from './space-map.component';

export const FAV_DESK_KEY = 'favourite_spaces';

@Component({
    selector: 'space-select-modal',
    template: `
        <div
            class="bg-base-100 mb-18 flex h-[calc(100vh-4.5rem)] max-h-[calc(100vh-4.5rem)] w-screen flex-col space-y-2 overflow-hidden p-2 sm:m-0 sm:h-auto sm:w-auto"
            [style.height]="is_safari() ? 'calc(100vh - 80px)' : ''"
        >
            <header
                class="bg-base-200 flex h-14 w-full items-center space-x-2 rounded-sm border-none p-2"
            >
                <h2 class="flex-1 px-2 text-xl font-medium capitalize">
                    {{ 'CALENDAR_EVENT.SPACE_SELECT_FIND' | translate }}
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
                    filters
                    class="border-base-300 h-full w-full overflow-x-hidden overflow-y-auto rounded-sm border shadow-sm sm:block sm:w-80"
                    [class.hidden]="!show_filters()"
                >
                    <space-filters
                        [hide_levels]="view() !== 'list'"
                    ></space-filters>
                </div>
                <div
                    list
                    class="border-base-300 bg-base-200 h-full w-full overflow-auto rounded-sm border sm:w-80 md:w-112 lg:block"
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
                        <space-filters-display
                            [(view)]="view"
                        ></space-filters-display>
                    }
                    @if (view() === 'list') {
                        <space-list
                            list
                            [active]="displayed()?.id"
                            [selected]="selected_ids()"
                            [selected_spaces]="
                                allow_multiple() ? selected_locations() : []
                            "
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="selectSpace($event)"
                        ></space-list>
                    } @else {
                        <space-map
                            map
                            class="h-full min-h-[60vh] w-full"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </space-map>
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
                    <space-details
                        details
                        [space]="displayed()"
                        [active]="selected_ids().includes(displayed()?.id)"
                        [hide_map]="view() === 'map'"
                        (activeChange)="setSelected(displayed(), $event)"
                        [fav]="
                            displayed() && favorites().includes(displayed()?.id)
                        "
                        (toggleFav)="toggleFavourite(displayed())"
                        (close)="displayed.set(null)"
                    ></space-details>
                </div>
                @if (!displayed()) {
                    <button
                        icon
                        matRipple
                        class="border-base-200 bg-base-100 absolute top-3 right-2 z-20 border sm:hidden"
                        (click)="toggleFilters()"
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
                        name="space-return"
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
                    name="toggle-space"
                    [disabled]="!displayed()"
                    [class.inverse]="
                        allow_multiple() && isSelected(displayed()?.id)
                    "
                    (click)="toggleDisplayedSpace()"
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
                                    : 'Select Item'
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
        SpaceMapComponent,
        SpaceListComponent,
        SpaceDetailsComponent,
        SpaceFiltersComponent,
        SpaceFiltersDisplayComponent,
    ],
})
export class SpaceSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<SpaceSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _org = inject(OrganisationService);
    private _data = inject<{
        spaces: Space[];
        options: Partial<EventFormOptions>;
        multiday?: boolean;
    }>(MAT_DIALOG_DATA);

    public readonly show_filters = signal(false);
    public readonly selected = signal<Space[]>([]);
    public readonly view = signal<'list' | 'map'>('list');
    public readonly displayed = signal<Space | null>(null);
    public readonly multiday = !!this._data.multiday;
    public readonly room_alerts = this._event_form.room_alerts;

    public readonly is_safari = computed(() => isMobileSafari());

    public readonly selected_ids = computed(() =>
        this.selected().map((_) => _.id),
    );

    public readonly selected_locations = computed(() => {
        const levels = this._org.level_list();
        const buildings = this._org.building_list();
        const regions = this._org.region_list();
        return this.selected().map((space) => {
            const level = levels.find((_) => space.zones.includes(_.id));
            const building = buildings.find(
                (_) => space.zones.includes(_.id) || _.id === level?.parent_id,
            );
            const region = regions.find((_) => _.id === building?.parent_id);
            const location = [region, building, level]
                .map((_) => _?.display_name || _?.name)
                .filter((_) => !!_)
                .join(' / ');
            return { space, level, building, region, location };
        });
    });

    public readonly favorites = settingSignal<string[]>(
        'favourite_spaces',
        [],
        true,
    );

    public readonly allow_multiple = computed(() => {
        this._settings.overrides();
        return (
            this._settings.get('app.events.multiple_spaces') === true ||
            this._settings.get('app.events.allow_multiple_spaces') === true
        );
    });

    private readonly _remove_stale_selections = effect(() => {
        const zone_id = this._event_form.loaded_space_zone();
        const valid_ids = new Set(
            this._event_form.spaces().map((space) => space.id),
        );
        if (!zone_id) return;
        const stale = this.selected().filter(
            (space) =>
                space.zones.includes(zone_id) && !valid_ids.has(space.id),
        );
        if (!stale.length) return;
        const stale_ids = new Set(stale.map((space) => space.id));
        this.selected.update((spaces) =>
            spaces.filter((space) => !stale_ids.has(space.id)),
        );
    });

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.spaces || [])]);
        this._event_form.setOptions(_data.options);
        this._event_form.setFilters(_data.options as any);
    }

    public toggleFilters() {
        this.show_filters.update((v) => !v);
    }

    public isSelected(id: string) {
        return !!id && this.selected().some((space) => space.id === id);
    }

    public setSelected(item: Space, state: boolean) {
        const list = this.selected().filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected.set(list);
        if (!this.allow_multiple() && state) {
            this.selected.set([item]);
            this._dialog_ref.close([item]);
        }
    }

    public toggleDisplayedSpace() {
        if (!this.displayed()) return;
        this.setSelected(
            this.displayed(),
            this.allow_multiple()
                ? !this.isSelected(this.displayed()?.id)
                : true,
        );
    }

    public selectSpace(space: Space) {
        if (this.isSelected(space.id)) {
            void this.returnToSpace(space);
            return;
        }
        this.displayed.set(space);
    }

    public async returnToSpace(space: Space) {
        const item = this.selected_locations().find(
            (_) => _.space.id === space.id,
        );
        if (!item) return;
        if (item.region) await this._org.setRegion(item.region);
        if (item.building) this._org.setBuilding(item.building);
        this._event_form.setOptions({
            zones: item.level?.id ? [item.level.id] : [],
        });
        this.displayed.set(space);
        this.show_filters.set(false);
    }

    public toggleFavourite(item: Space) {
        const fav_list = this.favorites();
        const next_favs = fav_list.includes(item.id)
            ? fav_list.filter((_) => _ !== item.id)
            : [...fav_list, item.id];
        this.favorites.set(next_favs);
        this._settings.saveUserSetting('favourite_spaces', next_favs);
    }
}
