import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FAV_DESK_KEY } from '@placeos/bookings';
import { SettingsService } from '@placeos/common';
import { Desk } from '@placeos/organisation';

@Component({
    selector: 'new-desk-select-modal',
    styles: [],
    template: `
        <div
            class="absolute inset-0 sm:relative sm:inset-none bg-white dark:bg-neutral-700 flex flex-col"
        >
            <header class="flex items-center space-x-4 w-full">
                <button mat-icon-button mat-dialog-close class="bg-black/20">
                    <app-icon>close</app-icon>
                </button>
                <h3>Find Desk</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-gray-200 min-h-[65vh] h-[65vh] w-full"
            >
                <div class="flex flex-col items-center flex-1 w-1/2 h-full">
                    <desk-filters-display
                        class="w-full border-b border-gray-200"
                        [(view)]="view"
                    ></desk-filters-display>
                    <desk-list
                        *ngIf="view === 'list'; else mapView"
                        class="flex-1 h-1/2"
                        [favorites]="favorites"
                        (onSelect)="displayed = $event"
                        (toggleFav)="toggleFavourite($event)"
                    ></desk-list>
                </div>
                <desk-details
                    *ngIf="displayed"
                    [desk]="displayed"
                    class="h-full w-full sm:w-auto absolute sm:relative sm:block z-20 inset-0"
                    [fav]="displayed && favorites.includes(displayed?.id)"
                    (toggleFav)="toggleFavourite(displayed)"
                    (onSelect)="selectDesk(displayed)"
                    (close)="displayed = null"
                ></desk-details>
            </main>
        </div>
        <ng-template #mapView>
            <desk-map
                class="flex-1 h-1/2 w-full"
                [is_displayed]="!!displayed"
                (onSelect)="displayed = $event"
            ></desk-map>
        </ng-template>
    `,
})
export class NewDeskSelectModalComponent {
    public displayed?: Desk;
    public selectedDesk: Desk;
    public view = 'list';

    public get favorites() {
        return this._settings.get<string[]>(FAV_DESK_KEY) || [];
    }

    constructor(
        public dialogRef: MatDialogRef<NewDeskSelectModalComponent>,
        private _settings: SettingsService
    ) {}

    public selectDesk(desk: Desk) {
        this.dialogRef.close(desk);
    }

    public toggleFavourite(desk: Desk) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(desk.id);
        if (new_state) {
            this._settings.saveUserSetting(FAV_DESK_KEY, [
                ...fav_list,
                desk.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_DESK_KEY,
                fav_list.filter((_) => _ !== desk.id)
            );
        }
    }
}
