import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import { AssetGroup } from '../asset.class';
import { AssetStateService } from '../asset-state.service';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: 'asset-select-modal',
    template: `
        <div
            class="w-[100vw] h-[100vh] sm:relative sm:w-auto sm:h-auto flex flex-col bg-base-100"
        >
            <header class="flex items-center space-x-4 w-full">
                <button icon mat-dialog-close class="bg-base-200">
                    <app-icon>close</app-icon>
                </button>
                <h3>Add Assets</h3>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-base-200 min-h-[65vh] h-[65vh] sm:max-h-[65vh] sm:max-w-[95vw] w-full overflow-hidden"
            >
                <div
                    class="flex flex-col items-center flex-1 w-1/2 h-full sm:h-[65vh]"
                >
                    <asset-filters
                        class="h-full hidden sm:block"
                        [(at_time)]="exact_time"
                        [(offset)]="offset"
                        [(offset_day)]="offset_day"
                    ></asset-filters>
                </div>
                <div
                    class="flex flex-col items-center flex-1 w-1/2 h-full sm:min-w-[20rem] sm:h-[65vh]"
                >
                    <asset-filters-display
                        class="w-full border-b border-base-200"
                    ></asset-filters-display>
                    <asset-list
                        [selected]="selected_ids"
                        [favorites]="favorites"
                        [selected_items]="selected"
                        [requested]="requested"
                        (toggleFav)="toggleFavourite($event)"
                        (onSelect)="displayed = $event"
                        class="flex-1 h-1/2 w-full overflow-hidden"
                    ></asset-list>
                </div>
                <asset-details
                    [item]="displayed!"
                    class="h-full w-full sm:h-[65vh] absolute sm:relative sm:flex sm:max-w-[20rem] bg-base-100  z-20"
                    [class.hidden]="!displayed"
                    [class.inset-0]="displayed"
                    [active]="selected_ids.includes(displayed?.id || '')"
                    (activeChange)="setSelected(displayed!, $event)"
                    (countChange)="updateSelectedCount($event)"
                    [fav]="
                        !!displayed &&
                        this.favorites.includes(displayed?.id || '')
                    "
                    (toggleFav)="toggleFavourite(displayed!)"
                    (close)="displayed = null"
                ></asset-details>
            </main>
            <footer
                class="flex sm:hidden flex-col-reverse items-center justify-end p-2 border-t border-base-200"
            >
                <button
                    btn
                    matRipple
                    back-btn
                    class="inverse sm:hidden w-full sm:w-auto"
                    *ngIf="displayed"
                    (click)="displayed = null"
                >
                    Back
                </button>
                <button
                    btn
                    matRipple
                    save
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:w-auto sm:mb-0"
                >
                    View List
                </button>
            </footer>
            <footer
                class="hidden sm:flex items-center justify-between p-2 border-t border-base-200 w-full"
            >
                <button
                    btn
                    matRipple
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">arrow_back</app-icon>
                        <div class="mr-1 underline">Back to form</div>
                    </div>
                </button>
                <p class="opacity-60 text-sm">{{ count }} asset(s) added</p>
                <button
                    btn
                    matRipple
                    [disabled]="!displayed"
                    [class.inverse]="isSelected(displayed?.id)"
                    (click)="setSelected(displayed, !isSelected(displayed?.id))"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">
                            {{ isSelected(displayed?.id) ? 'remove' : 'add' }}
                        </app-icon>
                        <div class="mr-1">
                            {{
                                isSelected(displayed?.id)
                                    ? 'Remove from Booking'
                                    : 'Add to booking'
                            }}
                        </div>
                    </div>
                </button>
            </footer>
        </div>
    `,
    styles: [``],
})
export class AssetSelectModalComponent {
    public displayed: AssetGroup | null = null;
    public selected: AssetGroup[] = [...(this._data.items || [])];
    public exact_time = this._data.exact_time ?? false;
    public requested = this._data.requested;
    public offset: number;
    public offset_day: number;

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get count() {
        return this.selected.reduce((t, i: any) => t + i.quantity, 0);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    constructor(
        private _settings: SettingsService,
        private _state: AssetStateService,
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            items: AssetGroup[];
            details: any;
            exact_time?: boolean;
            offset?: number;
            offset_day?: number;
            requested: Record<string, number>;
        }
    ) {
        const { duration } = this._data.details;
        this._state.setOptions(this._data.details);
        this.offset = Math.min(
            Math.max(
                this._settings.get('app.assets.min_offset'),
                this._data.offset || 0
            ),
            (duration || 60) - this._settings.get('app.assets.end_offset')
        );
        this.offset_day = this._data.offset_day || 0;
    }

    public setSelected(group: AssetGroup, state: boolean) {
        const list = this.selected.filter((_) => _.id !== group.id);
        if (state) list.push(group);
        this.selected = [...list];
    }

    public updateSelectedCount(count: number) {
        if (!this.displayed) return;
        const item = this.selected.find((_) => _.id === this.displayed.id);
        if (item) {
            item.quantity = count;
            item.assets = this.displayed.assets;
        }
    }

    public toggleFavourite(asset: AssetGroup) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(asset.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_assets', [
                ...fav_list,
                asset.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_assets',
                fav_list.filter((_) => _ !== asset.id)
            );
        }
    }
}
