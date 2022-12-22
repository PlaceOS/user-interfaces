import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { AssetSelectModalComponent } from 'libs/assets/src/lib/asset-select-modal/asset-select-modal.component';
import { Asset } from 'libs/assets/src/lib/asset.class';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `asset-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                space
                class="relative p-2 rounded-lg w-full flex items-center shadow border border-gray-200"
                *ngFor="let asset of items"
            >
                <div class="w-16 h-16 rounded-xl bg-black/20 mr-4"></div>
                <div class="pb-4">
                    <div class="font-medium">
                        {{ asset.name || 'Asset' }}
                    </div>
                    <div i18n>{{ asset.amount }} requested</div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            mat-button
                            edit-space
                            class="clear"
                            (click)="addAssets(asset)"
                        >
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            mat-button
                            remove-space
                            class="clear"
                            (click)="removeAsset(asset)"
                        >
                            <div class="flex items-center space-x-2" i18n>
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
                    [class.text-blue-400]="favorites.includes(asset.id)"
                    (click)="toggleFavourite(asset)"
                >
                    <app-icon>{{
                        favorites.includes(asset.id)
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
            (click)="addAssets()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Asset</span>
            </div>
        </button>
    `,
    styles: [``],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            /* istanbul ignore next */
            useExisting: forwardRef(() => AssetListFieldComponent),
            multi: true,
        },
    ],
})
export class AssetListFieldComponent implements ControlValueAccessor {
    public items: Asset[] = [];
    public disabled = false;

    private _onChange: (_: Asset[]) => void;
    private _onTouch: (_: Asset[]) => void;
    public selected: Asset[] = [];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: Asset[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: Asset[]) {
        this.items = value || [];
    }

    public readonly registerOnChange = (fn: (_: Asset[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: Asset[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public removeAsset(asset: Asset) {
        const updated_list = this.items.filter((_) => _.id !== asset.id);
        this.setValue(updated_list);
    }

    public addAssets(asset?: Asset) {
        const ref = this._dialog.open(AssetSelectModalComponent, {
            data: this.items,
        });
        ref.afterClosed().subscribe((assets?: Asset[]) => {
            if (!assets) return;
            this.setValue(assets);
        });
    }

    public toggleFavourite(asset: Asset) {
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
