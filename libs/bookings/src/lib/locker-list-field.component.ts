import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { BookingAsset } from './booking-form.service';
import {
    LockerSelectModalComponent,
    FAV_LOCKER_KEY,
} from './locker-select-modal/locker-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `locker-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                locker
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-base-200"
                *ngFor="let item of items"
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
                    class="w-20 h-20 rounded-xl bg-base-200 mr-4 overflow-hidden flex items-center justify-center"
                >
                    <img
                        auth
                        *ngIf="item.images?.length; else placeholder"
                        [source]="item.images[0]"
                        class="min-h-full object-cover"
                    />
                    <ng-template #placeholder>
                        <img
                            class="m-auto"
                            src="assets/icons/locker-placeholder.svg"
                        />
                    </ng-template>
                </div>
                <div class="space-y-2 pb-4">
                    <div class="font-medium">
                        {{ item.name || 'Locker' }}
                    </div>
                    <div class="flex items-center text-sm space-x-2">
                        <app-icon class="text-blue-500 text-base"
                            >place</app-icon
                        >
                        <p>{{ item.zone?.display_name || item.zone?.name }}</p>
                    </div>
                    <div
                        class="flex items-center text-sm space-x-2"
                        *ngIf="item.accessible"
                    >
                        <app-icon class="text-blue-500 text-base"
                            >accessible</app-icon
                        >
                        <p>Disability Accessible</p>
                    </div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            btn
                            matRipple
                            name="edit-locker"
                            class="clear"
                            (click)="changeResources(item)"
                        >
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            name="remove-locker"
                            class="clear"
                            (click)="removeResource(item)"
                        >
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>close</app-icon>
                                Remove
                            </div>
                        </button>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    name="toggle-locker-favourite"
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
            btn
            matRipple
            name="add-locker"
            class="w-full inverse mt-2"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span i18n>Add Locker</span>
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
            useExisting: forwardRef(() => LockerListFieldComponent),
            multi: true,
        },
    ],
})
export class LockerListFieldComponent implements ControlValueAccessor {
    @Input() public features: string[] = [];
    public room_size = 3;
    public items: BookingAsset[] = [];
    public disabled = false;
    public selected_features: string[] = [];

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    public get favorites() {
        return this._settings.get<string[]>(FAV_LOCKER_KEY) || EMPTY_FAVS;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /** Add or edit selected items */
    public changeResources() {
        const ref = this._dialog.open(LockerSelectModalComponent, {
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
            this._settings.saveUserSetting(FAV_LOCKER_KEY, [
                ...fav_list,
                space.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                FAV_LOCKER_KEY,
                fav_list.filter((_) => _ !== space.id)
            );
        }
    }
}
