import { Component, inject, signal } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { MatRippleModule } from '@angular/material/core';
import { provideValueAccessor } from '@placeos/common';
import { AuthenticatedImageDirective } from 'libs/components/src/lib/authenticated-image.directive';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { LevelPipe } from 'libs/components/src/lib/level.pipe';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { BookingAsset } from './booking-form.types';
import { LockerSelectModalComponent } from './locker-select-modal/locker-select-modal.component';

@Component({
    selector: `locker-list-field`,
    template: `
        <div list class="space-y-2">
            @for (item of items(); track item) {
                <div
                    locker
                    class="border-base-200 relative flex w-full items-center rounded-lg border p-2 shadow-sm"
                >
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
    providers: [provideValueAccessor(() => LockerListFieldComponent)],
    imports: [
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        AuthenticatedImageDirective,
        LevelPipe,
    ],
})
export class LockerListFieldComponent implements ControlValueAccessor {
    private _dialog = inject(MatDialog);

    public readonly room_size = signal(3);
    public readonly items = signal<BookingAsset[]>([]);
    public readonly disabled = signal(false);

    private _onChange: (_: BookingAsset[]) => void;
    private _onTouch: (_: BookingAsset[]) => void;

    /** Add or edit selected items */
    public changeResources() {
        const ref = this._dialog.open(LockerSelectModalComponent, {
            data: {
                items: this.items(),
                options: { capacity: this.room_size() },
            },
        });
        ref.afterClosed().subscribe((items?: BookingAsset[]) => {
            if (!items) items = ref.componentInstance.selected();
            this.setValue(items);
        });
    }

    /** Remove the selected space from the list */
    public removeResource(space: BookingAsset) {
        this.setValue(this.items().filter((_) => _.id !== space.id));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: BookingAsset[]) {
        this.items.set(new_value || []);
        if (this._onChange) this._onChange(this.items());
    }

    /* istanbul ignore next */
    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: BookingAsset[]) {
        this.items.set(value || []);
    }

    /* istanbul ignore next */
    public readonly registerOnChange = (fn: (_: BookingAsset[]) => void) =>
        (this._onChange = fn);
    /* istanbul ignore next */
    public readonly registerOnTouched = (fn: (_: BookingAsset[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);
}
