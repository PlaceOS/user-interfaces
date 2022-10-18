import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { BookingAsset } from './booking-form.service';
import {
    DeskSelectModalComponent,
    FAV_DESK_KEY,
} from './desk-select-modal/desk-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `desk-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                desk
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                *ngFor="let space of items"
            >
                <div *ngIf="features?.length" class="flex flex-col">
                    <label for="title">Type</label>
                    <div features class="flex items-center flex-wrap space-x-2">
                        <mat-checkbox
                            *ngFor="let opt of features"
                            [ngModel]="(selected_features || []).includes(opt)"
                            (ngModelChange)="setFeature(opt, $event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            {{ opt }}
                        </mat-checkbox>
                    </div>
                </div>
                <div
                    class="w-24 h-24 rounded-xl bg-black/20 mr-4 overflow-hidden"
                >
                    <img
                        *ngIf="space.images?.length"
                        [src]="space.images[0]"
                        class="min-h-full object-cover"
                    />
                </div>
                <div class="space-y-2 pb-4">
                    <div class="font-medium">
                        {{ space.name || 'Desk' }}
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
                            edit-desk
                            class="clear"
                            (click)="changeResources(space)"
                        >
                            <div class="flex items-center space-x-2">
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            mat-button
                            remove-desk
                            class="clear"
                            (click)="removeResource(space)"
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
            add-desk
            class="w-full inverse mt-2"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Desk</span>
            </div>
        </button>
        <div class="flex items-center flex-wrap sm:space-x-2 mb-2">
            <div class="flex-1 min-w-[256px] space-y-2"></div>
        </div>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            useExisting: forwardRef(() => DeskListFieldComponent),
            multi: true,
        },
    ],
})
export class DeskListFieldComponent implements ControlValueAccessor {
    @Input() public features: string[] = [];
    public room_size = 3;
    public items: BookingAsset[] = [];
    public disabled = false;
    public selected_features: string[] = [];

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    public get favorites() {
        return this._settings.get<string[]>(FAV_DESK_KEY) || EMPTY_FAVS;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /** Add or edit selected items */
    public changeResources() {
        const ref = this._dialog.open(DeskSelectModalComponent, {
            data: {
                items: this.items,
                options: { capacity: this.room_size },
            },
        });
        ref.afterClosed().subscribe((items?: BookingAsset[]) => {
            if (!items) items = ref.componentInstance.selected;
            this.setValue(items);
        });
    }

    /** Remove the selected space from the list */
    public removeResource(space: BookingAsset) {
        this.setValue(this.items.filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: BookingAsset[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: BookingAsset[]) {
        this.items = value || [];
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
            this._settings.saveUserSetting(FAV_DESK_KEY, [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_DESK_KEY,
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
