import { CommonModule } from '@angular/common';
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
    EventFormOptions,
    EventFormService,
} from 'libs/events/src/lib/new-event-form.service';
import { Space } from '../space.class';
import { SpaceDetailsComponent } from './space-details.component';
import { SpaceFiltersDisplayComponent } from './space-filters-display.component';
import { SpaceFiltersComponent } from './space-filters.component';
import { SpaceListComponent } from './space-list.component';

@Component({
    selector: 'space-select-modal',
    template: `
        <div
            class="flex h-[100vh] w-[100vw] flex-col bg-base-100 sm:relative sm:h-auto sm:w-auto"
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
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        {{ 'COMMON.MAP' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        list
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
                <space-filters
                    class="hidden h-full max-w-[20rem] sm:flex sm:h-[65vh] sm:max-h-full"
                    [multiday]="multiday"
                    [hide_levels]="view !== 'list'"
                    [viewing_map]="view === 'map'"
                ></space-filters>
                <div
                    class="flex h-full w-1/2 flex-1 flex-col items-center sm:h-[65vh]"
                >
                    <space-filters-display
                        class="w-full border-b border-base-200"
                        [(view)]="view"
                    ></space-filters-display>
                    @if (view === 'list') {
                        <space-list
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="displayed = $event"
                            class="h-1/2 flex-1 bg-base-200"
                        ></space-list>
                    } @else {
                        <space-map
                            class="h-1/2 w-full flex-1"
                            [selected]="selected_ids"
                            [is_displayed]="!!displayed"
                            [active]="displayed?.id"
                            (onSelect)="displayed = $event"
                        >
                        </space-map>
                    }
                </div>
                <space-details
                    [space]="displayed"
                    [alert]="(room_alerts | async)[displayed?.id]"
                    class="absolute z-20 flex h-full w-full min-w-[20rem] bg-base-100 sm:relative sm:h-[65vh] sm:max-w-[20rem] sm:flex-col"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [hide_map]="view === 'map'"
                    [active]="selected_ids.includes(displayed?.id)"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></space-details>
            </main>
            <footer
                class="flex w-full flex-col-reverse items-center justify-end border-t border-base-200 px-2 pb-[5.5rem] pt-2 sm:hidden"
            >
                @if (displayed) {
                    <button
                        btn
                        matRipple
                        name="spaces-return"
                        class="inverse w-full sm:hidden"
                        (click)="displayed = null"
                    >
                        {{ 'COMMON.BACK' | translate }}
                    </button>
                }
                <button
                    btn
                    matRipple
                    name="save-spaces"
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
                    name="spaces-return"
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
                        'CALENDAR_EVENT.SPACE_SELECT_COUNT'
                            | translate: { count: selected.length }
                    }}
                </p>
                <button
                    btn
                    matRipple
                    name="toggle-space"
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
        CommonModule,
        MatRippleModule,
        TranslatePipe,
        SpaceDetailsComponent,
        SpaceListComponent,
        SpaceFiltersComponent,
        SpaceFiltersDisplayComponent,
        IconComponent,
        MatDialogModule,
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

    public displayed?: Space;
    public selected: Space[] = [];
    public view = 'list';
    public readonly multiday = !!this._data.multiday;
    public readonly room_alerts = this._event_form.room_alerts;

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
