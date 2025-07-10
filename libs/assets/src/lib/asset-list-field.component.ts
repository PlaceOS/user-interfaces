import {
    Component,
    SimpleChanges,
    forwardRef,
    inject,
    input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    i18n,
    notifyError,
    randomInt,
    randomString,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { AssetItem, AssetRequest } from './asset-request.class';
import { AssetStateService } from './asset-state.service';
import { NewAssetSelectModalComponent } from './new-asset-select-modal/new-asset-select-modal.component';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `asset-list-field`,
    template: `
        <div list class="space-y-2">
            @for (request of asset_requests; track request) {
                <div
                    request
                    class="overflow-hidden rounded-xl border bg-base-100 shadow"
                    [class.border-error]="end_time < request.deliver_at"
                    [class.border-base-300]="end_time >= request.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-4">
                        <div class="flex-1">
                            <div class="flex items-center space-x-4">
                                <div>
                                    {{
                                        'FORM.ASSETS_REQUESTED_FOR_DATE'
                                            | translate
                                                : {
                                                      date:
                                                          request.deliver_at_time
                                                          | date: 'mediumDate',
                                                      time:
                                                          request.deliver_at_time
                                                          | date: time_format,
                                                  }
                                    }}
                                </div>
                                @if (
                                    end_time <= request.deliver_at ||
                                    rejected_ids().includes(request.id) ||
                                    request.conflict
                                ) {
                                    <div
                                        class="flex h-6 w-6 items-center justify-center rounded-full bg-error text-error-content"
                                        [matTooltip]="err_tooltip(request)"
                                    >
                                        <icon>priority_high</icon>
                                    </div>
                                }
                            </div>
                        </div>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_DUPLICATE' | translate"
                            (click)="duplicateRequest(request)"
                        >
                            <icon>content_copy</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_EDIT' | translate"
                            (click)="editRequest(request)"
                        >
                            <icon>edit</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="'FORM.ASSETS_REMOVE' | translate"
                            class="text-error"
                            (click)="removeRequest(request)"
                        >
                            <icon>delete</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                (show_request[request.id]
                                    ? 'FORM.ASSETS_HIDE'
                                    : 'FORM.ASSETS_SHOW'
                                ) | translate
                            "
                            (click)="
                                show_request[request.id] =
                                    !show_request[request.id]
                            "
                        >
                            <icon>
                                {{
                                    show_request[request.id]
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}
                            </icon>
                        </button>
                    </div>
                    <div
                        class="flex flex-col divide-y divide-base-100 bg-base-200"
                        [@show]="show_request[request.id] ? 'show' : 'hide'"
                    >
                        @for (item of request.items; track item) {
                            <div
                                class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                            >
                                <div class="flex flex-1 items-center">
                                    {{ item.name || 'Item' }}
                                </div>
                                <div
                                    class="rounded bg-success px-2 py-1 text-xs text-success-content"
                                >
                                    x{{ item.quantity }}
                                </div>
                                <button
                                    icon
                                    matRipple
                                    [matTooltip]="
                                        'FORM.ASSETS_REMOVE_ITEM' | translate
                                    "
                                    class="text-error"
                                    (click)="removeRequestItem(request, item)"
                                >
                                    <icon>delete</icon>
                                </button>
                                <button
                                    icon
                                    matRipple
                                    name="toggle-catering-item-favourite"
                                    [matTooltip]="
                                        (favorites.includes(item.id)
                                            ? 'COMMON.FAVOURITES_REMOVE'
                                            : 'COMMON.FAVOURITES_ADD'
                                        ) | translate
                                    "
                                    [class.text-info]="
                                        favorites.includes(item.id)
                                    "
                                    (click)="toggleFavourite(item)"
                                >
                                    <icon
                                        [className]="
                                            favorites.includes(item.id)
                                                ? 'material-symbols-rounded'
                                                : 'material-symbols-outlined'
                                        "
                                        >favorite</icon
                                    >
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
        <button
            btn
            matRipple
            add-space
            class="inverse mt-2 w-full"
            [disabled]="disabled"
            (click)="editRequest()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>{{ 'FORM.ASSETS_ADD' | translate }}</span>
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
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
    ],
})
export class AssetListFieldComponent implements ControlValueAccessor {
    private _settings = inject(SettingsService);
    private _dialog = inject(MatDialog);
    private _state = inject(AssetStateService);

    public readonly options = input<{
        date?: number;
        duration?: number;
        all_day?: boolean;
        zone_id?: string;
    }>({});
    public readonly rejected_ids = input<string[]>([]);
    public asset_requests: AssetRequest[] = [];
    public disabled = false;
    public show_request: Record<string, boolean> = {};
    public err_tooltip(request: AssetRequest) {
        return this.rejected_ids().includes(request.id) || request.conflict
            ? i18n('FORM.ASSETS_CLASH_ERROR')
            : i18n('FORM.ASSETS_TIME_ERROR');
    }

    private _onChange: (_: AssetRequest[]) => void;
    private _onTouch: (_: AssetRequest[]) => void;
    public selected: AssetRequest[] = [];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get end_time() {
        const time =
            (this.options().date || Date.now()) +
            (this.options().duration || 30) * 60 * 1000;
        return this.options().all_day ? endOfDay(time).valueOf() : time;
    }

    public get time_format() {
        return this._settings.time_format || 'shortTime';
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.options) {
            this.asset_requests = (this.asset_requests || []).map(
                (_) => new AssetRequest({ ..._, event: this.options() as any }),
            );
            this._state.setOptions({
                date: this.options().date,
                duration: this.options().duration,
            });
        }
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: AssetRequest[]) {
        this.asset_requests = new_value;
        if (this._onChange) this._onChange(this.asset_requests);
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: AssetRequest[]) {
        this.asset_requests = (value || []).map(
            (_) =>
                new AssetRequest({
                    ..._,
                    event: this.options() as any,
                    state: _.state,
                }),
        );
    }

    public readonly registerOnChange = (fn: (_: AssetRequest[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: AssetRequest[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public editRequest(order: AssetRequest = new AssetRequest()) {
        const order_list = this.asset_requests.filter((_) => _.id !== order.id);
        const requested: Record<string, number> = {};
        for (const order of order_list) {
            for (const item of order.items) {
                requested[item.id] =
                    (requested[item.id] || 0) + item?.quantity || 0;
            }
        }
        const options = this.options();
        const optionsValue = this.options();
        const ref = this._dialog.open(NewAssetSelectModalComponent, {
            data: {
                items: order.items,
                details: {
                    ...this.options(),
                    date: options.all_day
                        ? startOfDay(options.date).valueOf()
                        : options.date,
                    duration: optionsValue.all_day
                        ? Math.max(24 * 60, optionsValue.duration)
                        : optionsValue.duration,
                },
                exact_time: !!order.deliver_time,
                offset: order.deliver_offset,
                offset_day: order.deliver_day_offset,
                requested,
            },
        });
        ref.afterClosed().subscribe((items?: AssetItem[]) => {
            const orders = this.asset_requests.filter((_) => _.id !== order.id);
            if (!items?.length) return;
            for (const item of items) {
                if ((item as any).assets?.length) {
                    const list = [];
                    item.item_ids = new Array(item.quantity)
                        .fill(0)
                        .map((_) => {
                            let id = '';
                            let count = 0;
                            while (
                                (!id || list.includes(id)) &&
                                count < (item as any).assets.length
                            ) {
                                id = (item as any).assets[
                                    randomInt((item as any).assets.length)
                                ].id;
                            }
                            list.push(id);
                            return id;
                        });
                }
            }
            const time = new Date(this.options().date);
            const new_order = new AssetRequest({
                ...order,
                conflict: false,
                _changed:
                    order._changed ||
                    order.items.find(
                        (_) =>
                            items.find((__) => __.id === _.id)?.quantity !==
                            _.quantity,
                    ),
                items: items.map((_) => ({ ..._ })),
                event: this.options() as any,
                deliver_offset: ref.componentInstance.offset,
                deliver_time: ref.componentInstance.exact_time
                    ? time.getHours() + time.getMinutes() / 60
                    : null,
                deliver_day_offset: ref.componentInstance.offset_day || 0,
            });
            for (const item of new_order.items) {
                const total = orders.reduce(
                    (t, c) =>
                        (t +=
                            c.items.find((_) => _.id === item.id)?.quantity ||
                            0),
                    0,
                );
                if (total + item.quantity > (item as any).assets.length) {
                    notifyError(
                        i18n('FORM.ASSETS_QUANTITY_ERROR', { name: item.name }),
                        undefined,
                        undefined,
                        { duration: 5000 },
                    );
                    return;
                }
            }
            if (new_order.item_count <= 0) return;
            this.setValue([...orders, new_order]);
        });
    }

    public removeRequest(request: AssetRequest) {
        const updated_list = this.asset_requests.filter(
            (_) => _.id !== request.id,
        );
        this.setValue(updated_list);
    }

    public duplicateRequest(order: AssetRequest) {
        const new_order = new AssetRequest({
            ...order,
            id: `order-${randomString(8)}`,
        });
        this.setValue([...this.asset_requests, new_order]);
    }

    public removeRequestItem(order: AssetRequest, item: AssetItem) {
        const new_order = new AssetRequest({
            ...order,
            items: order.items.filter((_) => _.id !== item.id),
        });
        const updated_list = this.asset_requests.filter(
            (_) => _.id !== order.id,
        );
        if (new_order.items.length > 0) {
            this.setValue([...updated_list, new_order]);
        } else this.setValue(updated_list);
    }

    public toggleFavourite(asset: AssetItem) {
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
                fav_list.filter((_) => _ !== asset.id),
            );
        }
    }
}
