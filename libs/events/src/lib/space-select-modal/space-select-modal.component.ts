import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import {
    SETTING_KEYS,
    settingSignal,
    SettingsService,
    Space,
} from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    EventFormOptions,
    EventFormService,
} from 'libs/events/src/lib/new-event-form.service';
import { SpaceDetailsComponent } from './space-details.component';
import { SpaceFiltersDisplayComponent } from './space-filters-display.component';
import { SpaceFiltersComponent } from './space-filters.component';
import { SpaceListComponent } from './space-list.component';
import { SpaceSelectMapComponent } from './space-map.component';

@Component({
    selector: 'space-select-modal',
    template: `
        <div
            class="bg-base-100 flex h-screen w-screen flex-col sm:relative sm:h-auto sm:w-auto"
        >
            <header class="flex w-full items-center space-x-4">
                <button icon matRipple mat-dialog-close class="bg-base-200">
                    <icon>close</icon>
                </button>
                <h3>{{ 'CALENDAR_EVENT.SPACE_SELECT_FIND' | translate }}</h3>
                <div class="hidden flex-1 items-center justify-end sm:flex">
                    <button
                        btn
                        matRipple
                        map
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view() !== 'map'"
                        (click)="view.set('map')"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        list
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
                <space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [multiday]="multiday"
                    [hide_levels]="view() !== 'list'"
                    [viewing_map]="view() === 'map'"
                ></space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <space-filters-display
                        class="border-base-200 w-full border-b"
                        [(view)]="view"
                    ></space-filters-display>

                    @if (view() === 'list') {
                        <space-list
                            [active]="displayed()?.id"
                            [selected]="selected_ids()"
                            [favorites]="favorites()"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed.set($event)"
                            class="bg-base-200 h-1/2 flex-1"
                        ></space-list>
                    } @else {
                        <space-map
                            class="h-1/2 w-full flex-1"
                            [selected]="selected_ids_list()"
                            [is_displayed]="!!displayed()"
                            [active]="displayed()?.id"
                            (onSelect)="displayed.set($event)"
                        >
                        </space-map>
                    }
                </div>
                <space-details
                    [space]="displayed()"
                    [alert]="room_alerts()[displayed()?.id]"
                    class="bg-base-100 absolute z-20 flex h-full w-full min-w-[20rem] sm:relative sm:h-[65vh] sm:max-w-[20rem] sm:flex-col"
                    [class.hidden]="!displayed()"
                    [class.inset-0]="displayed()"
                    [hide_map]="view() === 'map'"
                    [active]="selected_ids().includes(displayed()?.id)"
                    [single_select]="!allow_multiple()"
                    (activeChange)="setSelected(displayed(), $event)"
                    [fav]="displayed() && favorites().includes(displayed()?.id)"
                    (toggleFav)="toggleFavourite(displayed())"
                    (close)="displayed.set(null)"
                ></space-details>
            </main>
            <footer
                class="border-base-200 flex w-full flex-col-reverse items-center justify-end border-t px-2 pt-2 pb-22 sm:hidden"
            >
                @if (displayed()) {
                    <button
                        btn
                        matRipple
                        name="spaces-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed.set(null)"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-spaces"
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
                @if (allow_multiple()) {
                    <button
                        btn
                        matRipple
                        name="spaces-return"
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
                }
                <p class="text-sm opacity-60">
                    {{
                        'CALENDAR_EVENT.SPACE_SELECT_COUNT'
                            | translate: { count: selected().length }
                    }}
                </p>
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
    styles: [``],
    imports: [
        MatRippleModule,
        TranslatePipe,
        SpaceDetailsComponent,
        SpaceListComponent,
        SpaceFiltersComponent,
        SpaceFiltersDisplayComponent,
        IconComponent,
        MatDialogModule,
        SpaceSelectMapComponent,
    ],
})
export class SpaceSelectModalComponent {
    private _dialog_ref =
        inject<MatDialogRef<SpaceSelectModalComponent>>(MatDialogRef);
    private _settings = inject(SettingsService);
    private _event_form = inject(EventFormService);
    private _data = inject<{
        spaces: Space[];
        options: Partial<EventFormOptions>;
        multiday?: boolean;
    }>(MAT_DIALOG_DATA);

    public readonly displayed = signal<Space | null>(null);
    public readonly selected = signal<Space[]>([]);
    public readonly view = signal<'map' | 'list'>('list');
    public readonly multiday = !!this._data.multiday;
    public readonly room_alerts = toSignal(this._event_form.room_alerts, {
        initialValue: {} as Record<string, [string, string]>,
    });

    public readonly selected_ids = computed(() =>
        this.selected()
            .map((_) => _.id)
            .join(','),
    );

    public readonly selected_ids_list = computed<string[]>(() =>
        this.selected().map((_) => _.id),
    );

    public readonly favorites = settingSignal<string[]>(
        SETTING_KEYS.FAVORITE_ROOMS,
        [],
        true,
    );

    public readonly allow_multiple = settingSignal<boolean>(
        'events.allow_multiple_spaces',
        false,
    );

    constructor() {
        const _data = this._data;

        this.selected.set([...(_data.spaces || [])]);
        this._event_form.setOptions(_data.options);
        this._event_form.setFilters(_data.options as any);
    }

    public isSelected(id: string) {
        return id && this.selected_ids().includes(id);
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
        const current = this.displayed();
        if (!current) return;
        this.setSelected(
            current,
            this.allow_multiple() ? !this.isSelected(current.id) : true,
        );
    }

    public toggleFavourite(item: Space) {
        const fav_list = this.favorites();
        const new_state = !fav_list.includes(item.id);
        const updated = new_state
            ? [...fav_list, item.id]
            : fav_list.filter((_) => _ !== item.id);
        this.favorites.set(updated);
        this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_ROOMS, updated);
    }
}
