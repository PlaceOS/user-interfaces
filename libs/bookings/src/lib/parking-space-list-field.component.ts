import { Component, forwardRef, inject, input, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatRippleModule } from '@angular/material/core';
import { SETTING_KEYS } from '@placeos/common';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from './booking-form.service';
import { NewParkingSelectModalComponent } from './new-parking-select-modal/new-parking-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `parking-space-list-field`,
    template: `
        <div list class="space-y-2">
            @for (space of spaces(); track space) {
                <div
                    space
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    <div
                        class="bg-base-200 mr-4 flex h-24 w-24 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (space.images?.length) {
                            <img
                                auth
                                class="h-full object-cover"
                                [source]="space.images[0]"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/car-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ space.name || 'Meeting Resource' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-blue-500">place</icon>
                            <p>
                                {{
                                    space.location ||
                                        space.level?.display_name ||
                                        space.level?.name ||
                                        space.zone?.display_name ||
                                        space.zone?.name
                                }}
                            </p>
                        </div>
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                edit-space
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">edit</icon>
                                    <div>{{ 'COMMON.CHANGE' | translate }}</div>
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                remove-space
                                class="clear"
                                (click)="removeResource(space)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">close</icon>
                                    <div>{{ 'COMMON.REMOVE' | translate }}</div>
                                </div>
                            </button>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        fav
                        class="absolute top-1 right-1"
                        [class.text-info]="favorites.includes(space?.id)"
                        (click)="toggleFavourite(space)"
                    >
                        <icon
                            [className]="
                                favorites.includes(space?.id)
                                    ? 'material-symbols-rounded'
                                    : 'material-symbols-outlined'
                            "
                            >favorite</icon
                        >
                    </button>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            add-space
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon class="text-2xl">search</icon>
                <span>{{ 'BOOKINGS.PARKING_ADD' | translate }}</span>
            </div>
        </button>
        <div class="mb-2 flex flex-wrap items-center sm:space-x-2">
            <div class="min-w-[256px] flex-1 space-y-2"></div>
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
    imports: [
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        AuthenticatedImageDirective,
    ],
})
export class ParkingSpaceListFieldComponent implements ControlValueAccessor {
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly disable_date = input(false);
    public readonly room_size = signal(3);
    public readonly spaces = signal<BookingAsset[]>([]);
    public readonly disabled = signal(false);

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    public get favorites() {
        return this._settings.get<string[]>('favourite_spaces') || EMPTY_FAVS;
    }

    /** Add or edit selected spaces */
    public changeResources() {
        const ref = this._dialog.open(NewParkingSelectModalComponent, {
            data: {
                spaces: this.spaces(),
                options: {
                    capacity: this.room_size(),
                    disable_date: this.disable_date(),
                },
            },
        });
        ref.afterClosed().subscribe((spaces?: BookingAsset[]) => {
            if (!spaces) return;
            this.setValue(spaces);
        });
    }

    /** Remove the selected space from the list */
    public removeResource(space: BookingAsset) {
        this.setValue(this.spaces().filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: BookingAsset[]) {
        this.spaces.set(new_value || []);
        if (this._onChange) this._onChange(this.spaces());
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: BookingAsset[]) {
        this.spaces.set(value || []);
    }

    public readonly registerOnChange = (fn) => (this._onChange = fn);
    public readonly registerOnTouched = (fn) => (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    public toggleFavourite(space: BookingAsset) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(space.id);
        if (new_state) {
            this._settings.saveUserSetting(
                SETTING_KEYS.FAVORITE_PARKING_SPACES,
                [...fav_list, space.id],
            );
        } else {
            this._settings.saveUserSetting(
                SETTING_KEYS.FAVORITE_PARKING_SPACES,
                fav_list.filter((_) => _ !== space.id),
            );
        }
    }
}
