import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { Space } from '../space.class';

@Component({
    selector: 'new-space-select-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none bg-white flex flex-col"
        >
            <header class="flex items-center space-x-4 w-full">
                <button mat-icon-button mat-dialog-close class="bg-black/20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Find Space</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
            >
                <space-filters class="h-full hidden sm:block"></space-filters>
                <div class="flex flex-col items-center flex-1 w-1/2 h-full">
                    <space-filters-display
                        class="w-full border-b border-gray-200"
                        [(view)]="view"
                    ></space-filters-display>
                    <space-list
                        *ngIf="view === 'list'; else map_view"
                        [selected]="selected_ids"
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="flex-1 h-1/2"
                    ></space-list>
                </div>
                <space-details
                    [space]="displayed"
                    class="h-full w-full sm:w-auto absolute sm:relative sm:block z-20 inset-0"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id)"
                    (activeChange)="setSelected(displayed, $event)"
                    [fav]="displayed && this.favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (close)="displayed = null"
                ></space-details>
            </main>
            <footer
                class="flex flex-col-reverse sm:flex-row items-center justify-end p-2 sm:space-x-2 border-t border-gray-200 w-full"
            >
                <button
                    mat-button
                    return
                    class="inverse sm:hidden w-full sm:w-auto"
                    *ngIf="displayed"
                    (click)="displayed = null"
                >
                    Back
                </button>
                <button
                    mat-button
                    save
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:w-auto sm:mb-0"
                >
                    View List
                </button>
            </footer>
        </div>
        <ng-template #map_view>
            <space-map
                class="flex-1 h-1/2 w-full"
                [selected]="selected_ids"
                [is_displayed]="!!displayed"
                (onSelect)="displayed = $event"
            >
            </space-map>
        </ng-template>
    `,
    styles: [``],
})
export class NewSpaceSelectModalComponent {
    public displayed?: Space;
    public selected: Space[] = [];
    public view = 'list';

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>('favourite_spaces') || [];
    }

    constructor(
        private _settings: SettingsService,
        @Inject(MAT_DIALOG_DATA) _spaces: Space[]
    ) {
        this.selected = [...(_spaces || [])];
    }

    public setSelected(space: Space, state: boolean) {
        const list = this.selected.filter((_) => _.id !== space.id);
        if (state) list.push(space);
        this.selected = list;
    }

    public toggleFavourite(space: Space) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(space.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_spaces', [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_spaces',
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
