import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { BookingAsset } from 'libs/bookings/src/lib/booking-form.service';
import { ParkingSpaceSelectModalComponent } from 'libs/bookings/src/lib/parking-select-modal/parking-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `parking-space-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                space
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                *ngFor="let space of spaces"
            >
                <div class="w-24 h-24 rounded-xl bg-black/20 mr-4 overflow-hidden">
                    <img *ngIf="space.images?.length" [src]="space.images[0]" class="min-h-full object-cover" />
                </div>
                <div class="space-y-2 pb-4">
                    <div class="font-medium">
                        {{ space.name || 'Meeting Space' }}
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">place</app-icon>
                        <p>{{ space.location }}</p>
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500">people</app-icon>
                        <p>
                            {{ space.capacity < 1 ? 2 : space.capacity }} People
                        </p>
                    </div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            mat-button
                            edit-space
                            class="clear"
                            (click)="changeSpaces(space)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            mat-button
                            remove-space
                            class="clear"
                            (click)="removeSpace(space)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon>close</app-icon>
                                Remove
                            </div>
                        </button>
                    </div>
                </div>
                <button
                    mat-icon-button
                    fav
                    class="absolute top-1 right-1"
                    [class.text-blue-400]="favorites.includes(asset?.id)"
                    (click)="toggleFavourite(asset)"
                >
                    <app-icon>{{
                        favorites.includes(asset?.id)
                            ? 'favorite'
                            : 'favorite_border'
                    }}</app-icon>
                </button>
            </div>
        </div>
        <button
            mat-button
            add-space
            class="w-full inverse mt-2"
            (click)="changeSpaces()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Parking Space</span>
            </div>
        </button>
        <div class="flex items-center flex-wrap sm:space-x-2 mb-2">
            <div class="flex-1 min-w-[256px] space-y-2">
                
            </div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => ParkingSpaceListFieldComponent),
            multi: true,
        },
    ],
})
export class ParkingSpaceListFieldComponent implements ControlValueAccessor {
    public room_size = 3;
    public spaces: BookingAsset[] = [];
    public disabled = false;

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    public get favorites() {
        return this._settings.get<string[]>('favourite_spaces') || EMPTY_FAVS;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /** Add or edit selected spaces */
    public changeSpaces() {
        const ref = this._dialog.open(ParkingSpaceSelectModalComponent, {
            data: { spaces: this.spaces, options: { capacity: this.room_size } },
        });
        ref.afterClosed().subscribe((spaces?: BookingAsset[]) => {
            if (!spaces) return;
            this.setValue(spaces);
        });
    }

    /** Remove the selected space from the list */
    public removeSpace(space: BookingAsset) {
        this.setValue(this.spaces.filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: BookingAsset[]) {
        this.spaces = new_value;
        if (this._onChange) this._onChange(this.spaces);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: BookingAsset[]) {
        this.spaces = value || [];
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: BookingAsset[]) => void) =>
        (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: BookingAsset[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public toggleFavourite(space: BookingAsset) {
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
