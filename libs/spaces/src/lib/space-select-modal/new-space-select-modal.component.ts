import { Component } from '@angular/core';
import { SettingsService } from '@placeos/common';
import { Space } from '../space.class';

@Component({
    selector: 'new-space-select-modal',
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none bg-white flex flex-col"
        >
            <header class="flex items-center space-x-4 w-full">
                <button mat-icon-button mat-dialog-close class="z-20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Find Space</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
            >
                <space-filters class="h-full"></space-filters>
                <div class="flex flex-col items-center flex-1 w-1/2 h-full">
                    <space-filters-display class="w-full border-b border-gray-200"></space-filters-display>
                    <space-list
                        [favorites]="favorites"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="flex-1 h-1/2"
                    ></space-list>
                </div>
                <space-details
                    [space]="displayed"
                    class="h-full sm:relative sm:block"
                    [class.hidden]="!displayed"
                    [class.absolute]="displayed"
                    [class.inset-x-0]="displayed"
                    [class.top-0]="displayed"
                    [class.bottom-20]="displayed"
                    (toggleFav)="toggleFavourite(displayed)"
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
    `,
    styles: [``],
})
export class NewSpaceSelectModalComponent {
    public displayed?: Space;
    public selected: Space[] = [];

    public get favorites() {
        return this._settings.get<string[]>('user.favourite_spaces') || [];
    }

    constructor(private _settings: SettingsService) {}

    public toggleFavourite(space: Space) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(space.id);
        if (new_state) {
            this._settings.saveUserSetting('user.favourite_spaces', [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'user.favourite_spaces',
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
