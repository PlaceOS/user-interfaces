import { Component, forwardRef, inject, input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { SettingsService } from 'libs/common/src/lib/settings.service';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from './booking-form.service';
import { FAV_LOCKER_KEY } from './locker-select-modal/locker-select-modal.component';
import { NewLockerSelectModalComponent } from './new-locker-select-modal/new-locker-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `locker-list-field`,
    template: `
        <div list class="space-y-2">
            @for (item of items; track item) {
                <div
                    locker
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
                    @if (features()?.length) {
                        <div class="flex flex-col">
                            <label for="title">{{
                                'COMMON.TYPE' | translate
                            }}</label>
                            <div
                                features
                                class="flex flex-wrap items-center space-x-2"
                            >
                                @for (opt of features(); track opt) {
                                    <mat-checkbox
                                        [ngModel]="
                                            (selected_features || []).includes(
                                                opt
                                            )
                                        "
                                        (ngModelChange)="
                                            setFeatures(opt, $event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [aria-label]="opt"
                                    >
                                        {{ opt }}
                                    </mat-checkbox>
                                }
                            </div>
                        </div>
                    }
                    <div
                        class="bg-base-200 mr-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-xl"
                    >
                        @if (item.images?.length) {
                            <img
                                auth
                                [source]="item.images[0]"
                                class="min-h-full object-cover"
                            />
                        } @else {
                            <img
                                class="m-auto"
                                src="assets/icons/locker-placeholder.svg"
                            />
                        }
                    </div>
                    <div class="space-y-2 pb-4">
                        <div class="font-medium">
                            {{ item.name || 'Locker' }}
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-base text-blue-500">place</icon>
                            <p>
                                {{
                                    (item?.zone?.id | level)?.display_name ||
                                        (item?.zone?.id | level)?.name
                                }}
                            </p>
                        </div>
                        @if ($any(item).accessible) {
                            <div class="flex items-center space-x-2 text-sm">
                                <icon class="text-info text-base"
                                    >accessible</icon
                                >
                                <p>
                                    {{
                                        'BOOKINGS.LOCKER_ACCESSIBLE' | translate
                                    }}
                                </p>
                            </div>
                        }
                        <div
                            class="absolute right-0 bottom-0 flex items-center justify-end text-xs"
                        >
                            <button
                                btn
                                matRipple
                                name="edit-locker"
                                class="clear"
                                (click)="changeResources()"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>edit</icon>
                                    {{ 'COMMON.CHANGE' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRipple
                                name="remove-locker"
                                class="clear"
                                (click)="removeResource(item)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon>close</icon>
                                    {{ 'COMMON.REMOVE' | translate }}
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            name="add-locker"
            class="inverse mt-2 w-full"
            (click)="changeResources()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'BOOKINGS.LOCKER_ADD' | translate }}</span>
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
            useExisting: forwardRef(() => LockerListFieldComponent),
            multi: true,
        },
    ],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        AuthenticatedImageDirective,
        MatCheckboxModule,
        LevelPipe,
        FormsModule,
    ],
})
export class LockerListFieldComponent implements ControlValueAccessor {
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);

    public readonly features = input<string[]>([]);
    public room_size = 3;
    public items: BookingAsset[] = [];
    public disabled = false;
    public selected_features: string[] = [];

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    public get favorites() {
        return this._settings.get<string[]>(FAV_LOCKER_KEY) || EMPTY_FAVS;
    }

    /** Add or edit selected items */
    public changeResources() {
        const ref = this._dialog.open(NewLockerSelectModalComponent, {
            data: {
                items: this.items,
                options: { capacity: this.room_size },
            },
        });
        ref.afterClosed().subscribe((items?: BookingAsset[]) => {
            if (!items) items = ref.componentInstance.selected;
            console.log('Items:', items);
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

    public setFeatures(opt: string, value: boolean) {
        const features = this.selected_features || [];
        if (value) {
            this.selected_features = [...features, opt];
        } else {
            this.selected_features = features.filter((f) => f !== opt);
        }
    }

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
                fav_list.filter((_) => _ !== space.id),
            );
        }
    }
}
