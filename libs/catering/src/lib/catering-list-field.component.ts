import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from '@placeos/common';

import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { NewCateringOrderModalComponent } from 'libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component';

const EMPTY_FAVS = [];

@Component({
    selector: `catering-list-field`,
    template: ` <div list class="space-y-2">
            <div
                space
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                *ngFor="let item of items"
            >
                <div
                    class="w-16 h-16 rounded-xl bg-black/20 mr-4 overflow-hidden"
                >
                    <img
                        *ngIf="item.images?.length"
                        class="object-cover min-h-full min-w-full"
                        [src]="item.images[0]"
                    />
                </div>
                <div class="pb-4">
                    <div class="font-medium flex items-center">
                        {{ item.name || 'Item' }}
                        <span
                            class="text-xs opacity-60 ml-4 font-normal"
                            *ngIf="item.option_list.length"
                            [matTooltip]="optionList(item)"
                        >
                            {{ item.option_list.length }} option(s)
                        </span>
                    </div>
                    <div>{{ item.quantity }} requested</div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            mat-button
                            edit-space
                            class="clear"
                            (click)="addItems(item)"
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
                            (click)="removeItem(item)"
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
                    [class.text-blue-400]="favorites.includes(item.id)"
                    (click)="toggleFavourite(item)"
                >
                    <app-icon>{{
                        favorites.includes(item.id)
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
            [disabled]="disabled"
            (click)="addItems()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Item</span>
            </div>
        </button>`,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => CateringListFieldComponent),
            multi: true,
        },
    ],
})
export class CateringListFieldComponent implements ControlValueAccessor {
    @Input() public options: {
        date?: number;
        duration?: number;
        zone_id?: string;
    } = {};
    public items: CateringItem[] = [];
    public disabled = false;

    private _onChange: (_: CateringItem[]) => void;
    private _onTouch: (_: CateringItem[]) => void;
    public selected: CateringItem[] = [];

    public get favorites() {
        return (
            this._settings.get<string[]>('favourite_menu_items') || EMPTY_FAVS
        );
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: CateringItem[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: CateringItem[]) {
        this.items = value || [];
    }

    public readonly registerOnChange = (fn: (_: CateringItem[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: CateringItem[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public removeItem(item: CateringItem) {
        const updated_list = this.items.filter((_) => _.id !== item.id);
        this.setValue(updated_list);
    }

    public addItems(item?: CateringItem) {
        const ref = this._dialog.open(NewCateringOrderModalComponent, {
            data: [this.items, this.options],
        });
        ref.afterClosed().subscribe((items?: CateringItem[]) => {
            if (!items) return;
            this.setValue(items);
        });
    }

    public optionList(item: CateringItem) {
        return item.option_list.map((_) => _.name).join('\n');
    }

    public toggleFavourite(cateringitem: CateringItem) {
        const fav_list = this.favorites;
        const new_state = !fav_list.includes(cateringitem.id);
        if (new_state) {
            this._settings.saveUserSetting('favourite_menu_items', [
                ...fav_list,
                cateringitem.id,
            ]);
        } else {
            this._settings.saveUserSetting(
                'favourite_menu_items',
                fav_list.filter((_) => _ !== cateringitem.id)
            );
        }
    }
}
