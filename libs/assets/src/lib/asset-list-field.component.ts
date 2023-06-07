import { Component, Input, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { AssetSelectModalComponent } from 'libs/assets/src/lib/asset-select-modal/asset-select-modal.component';
import { AssetGroup } from 'libs/assets/src/lib/asset.class';
import { AssetStateService } from './asset-state.service';

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
                <div
                    class="w-16 h-16 rounded-xl bg-black/20 mr-4 overflow-hidden flex items-center justify-center"
                >
                    <img
                        *ngIf="asset.images?.length; else placeholder"
                        [src]="asset.images[0]"
                        class="min-h-full object-cover"
                    />
                    <ng-template #placeholder>
                        <img
                            class="m-auto"
                            src="assets/icons/asset-placeholder.svg"
                        />
                    </ng-template>
                </div>
                <div class="pb-4">
                    <div class="font-medium">
                        {{
                            (asset.id | assetgroup | async)?.name ||
                                'AssetGroup'
                        }}
                    </div>
                    <div i18n>{{ asset.amount }} requested</div>
                    <div
                        class="absolute bottom-0 right-0 flex items-center justify-end text-xs"
                    >
                        <button
                            btn
                            matRipple
                            edit-space
                            class="clear"
                            (click)="addAssetGroups(asset)"
                        >
                            <div class="flex items-center space-x-2" i18n>
                                <app-icon>edit</app-icon>
                                Change
                            </div>
                        </button>
                        <button
                            btn
                            matRipple
                            remove-space
                            class="clear"
                            (click)="removeAssetGroup(asset)"
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
            btn
            matRipple
            add-space
            class="w-full inverse mt-2"
            [disabled]="disabled"
            (click)="addAssetGroups()"
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
    @Input() public date = Date.now();
    @Input() public duration = 30;
    public items: AssetGroup[] = [];
    public disabled = false;

    private _onChange: (_: AssetGroup[]) => void;
    private _onTouch: (_: AssetGroup[]) => void;
    public selected: AssetGroup[] = [];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog,
        private _state: AssetStateService
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.date || changes.duration) {
            this._state.setOptions({
                date: this.date,
                duration: this.duration,
            });
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: AssetGroup[]) {
        this.items = new_value;
        if (this._onChange) this._onChange(this.items);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: AssetGroup[]) {
        this.items = value || [];
    }

    public readonly registerOnChange = (fn: (_: AssetGroup[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: AssetGroup[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public removeAssetGroup(asset: AssetGroup) {
        const updated_list = this.items.filter((_) => _.id !== asset.id);
        this.setValue(updated_list);
    }

    public addAssetGroups(asset?: AssetGroup) {
        const ref = this._dialog.open(AssetSelectModalComponent, {
            data: this.items,
        });
        ref.afterClosed().subscribe((items?: AssetGroup[]) => {
            if (!items) items = ref.componentInstance.selected;
            items = items.map((item) => ({ ...item }));
            for (const item of items) {
                item.assets = item.assets.slice(0, item.amount);
            }
            this.setValue(items);
        });
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
