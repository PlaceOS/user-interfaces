import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';
import {
    BookingAsset,
    BookingFlowOptions,
    BookingFormService,
} from '../booking-form.service';
import { LockerBank } from '../lockers.service';

export const FAV_LOCKER_KEY = 'favourite_lockers';

@Component({
    selector: 'locker-select-modal',
    styles: [],
    template: `
        <div
            class="w-[100vw] h-[100vh] sm:relative sm:w-auto sm:h-auto flex flex-col bg-base-100"
        >
            <header class="flex items-center space-x-4 w-full">
                <button icon mat-dialog-close class="bg-base-200">
                    <app-icon>close</app-icon>
                </button>
                <h3 i18n>Find Locker</h3>
                <div class="hidden sm:flex items-center justify-end flex-1">
                    <button
                        btn
                        matRipple
                        name="view-locker-map"
                        class="rounded-l rounded-r-none"
                        [class.inverse]="view !== 'map'"
                        (click)="view = 'map'"
                    >
                        Map
                    </button>
                    <button
                        btn
                        matRipple
                        name="view-locker-list"
                        class="rounded-r rounded-l-none"
                        [class.inverse]="view !== 'list'"
                        (click)="view = 'list'"
                    >
                        List
                    </button>
                </div>
            </header>
            <main
                class="flex-1 flex items-center divide-x divide-base-200 min-h-[65vh] h-[65vh] sm:max-h-[65vh] sm:max-w-[95vw] w-full overflow-hidden"
            >
                <locker-filters
                    class="h-full hidden sm:flex max-w-[20rem] sm:h-[65vh] sm:max-h-full"
                ></locker-filters>
                <div
                    class="flex flex-col items-center flex-1 w-1/2 h-full sm:h-[65vh]"
                >
                    <locker-filters-display
                        class="w-full border-b border-base-200"
                        [(view)]="view"
                    ></locker-filters-display>
                    <ng-container *ngIf="!bank; else bank_view">
                        <locker-bank-list
                            *ngIf="view === 'list'; else map_view"
                            [active]="displayed?.id"
                            [selected]="selected_ids"
                            [favorites]="favorites"
                            (toggleFav)="toggleFavourite($event)"
                            (onSelect)="bank = $event"
                            class="flex-1 h-1/2 bg-base-200"
                        ></locker-bank-list>
                    </ng-container>
                </div>
            </main>
            <footer
                class="flex sm:hidden flex-col-reverse items-center justify-end px-2 pt-2 pb-[5.5rem] border-t border-base-200 w-full"
            >
                <button
                    btn
                    matRipple
                    name="locker-return"
                    class="inverse sm:hidden w-full"
                    *ngIf="displayed"
                    (click)="displayed = null"
                    i18n
                >
                    Back
                </button>
                <button
                    btn
                    matRipple
                    name="save-lockers"
                    [mat-dialog-close]="selected"
                    [class.mb-2]="displayed"
                    class="w-full sm:w-32 sm:mb-0"
                    i18n
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
                    name="locker-return"
                    [mat-dialog-close]="selected"
                    class="clear text-secondary"
                >
                    <div class="flex items-center">
                        <app-icon class="text-xl">arrow_back</app-icon>
                        <div class="mr-1 underline" i18n>Back to form</div>
                    </div>
                </button>
                <p class="opacity-60 text-sm text-center" i18n>
                    {{ selected.length }} locker(s) added
                </p>
                <div class="flex items-center">
                    <button
                        btn
                        matRipple
                        name="clear-bank"
                        *ngIf="bank"
                        class="inverse mr-2 w-32"
                        (click)="bank = null; displayed = null"
                    >
                        Return
                    </button>
                    <button
                        btn
                        matRipple
                        name="toggle-locker"
                        [disabled]="!displayed"
                        [class.inverse]="isSelected(displayed?.id)"
                        (click)="
                            setSelected(displayed, !isSelected(displayed?.id))
                        "
                    >
                        <div class="flex items-center">
                            <app-icon class="text-xl">{{
                                isSelected(displayed?.id) ? 'remove' : 'add'
                            }}</app-icon>
                            <div class="mr-1" i18n>
                                {{
                                    isSelected(displayed?.id)
                                        ? 'Remove from Booking'
                                        : 'Add to booking'
                                }}
                            </div>
                        </div>
                    </button>
                </div>
            </footer>
        </div>
        <ng-template #map_view>
            <locker-map
                class="flex-1 h-1/2 w-full"
                [is_displayed]="!!displayed"
                (onSelect)="displayed = $event"
            >
            </locker-map>
        </ng-template>
        <ng-template #bank_view>
            <locker-grid
                class="flex-1 h-1/2 bg-base-200"
                [bank]="bank"
                [selected]="displayed?.id"
                (clicked)="displayed = $event"
            >
            </locker-grid>
        </ng-template>
    `,
})
export class LockerSelectModalComponent {
    public displayed?: BookingAsset;
    public selected: BookingAsset[] = [];
    public view = 'list';
    public bank?: LockerBank = null;

    public get selected_ids() {
        return this.selected.map((_) => _.id).join(',');
    }

    public get favorites() {
        return this._settings.get<string[]>(FAV_LOCKER_KEY) || [];
    }

    constructor(
        private _dialog_ref: MatDialogRef<LockerSelectModalComponent>,
        private _settings: SettingsService,
        private _event_form: BookingFormService,
        @Inject(MAT_DIALOG_DATA)
        private _data: {
            items: BookingAsset[];
            options: Partial<BookingFlowOptions>;
        }
    ) {
        this.selected = [...(_data.items || [])];
        this._event_form.setOptions(_data.options);
    }

    public isSelected(id: string) {
        return id && this.selected_ids.includes(id);
    }

    public setSelected(item: BookingAsset, state: boolean) {
        const list = this.selected.filter((_) => _.id !== item.id);
        if (state) list.push(item);
        this.selected = list;
        if (!this._data.options.group && state) this._dialog_ref.close([item]);
    }

    public toggleFavourite(item: BookingAsset) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(item.id);
        if (new_state) {
            this._settings.saveUserSetting(FAV_LOCKER_KEY, [
                ...fav_list,
                item.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_LOCKER_KEY,
                fav_list.filter((_) => _ !== item.id)
            );
        }
    }
}
