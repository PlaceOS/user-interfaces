import { Component, Input, SimpleChanges, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SettingsService } from 'libs/common/src/lib/settings.service';

import { AssetSelectModalComponent } from 'libs/assets/src/lib/asset-select-modal/asset-select-modal.component';
import { AssetStateService } from './asset-state.service';
import { AssetItem, AssetRequest } from './asset-request.class';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    notifyError,
    randomInt,
    randomString,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';

const EMPTY_FAVS: string[] = [];

@Component({
    selector: `asset-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                request
                *ngFor="let request of asset_requests"
                class="border shadow bg-base-100 rounded-xl overflow-hidden"
                [class.border-error]="end_time < request.deliver_at"
                [class.border-base-300]="end_time >= request.deliver_at"
            >
                <div class="flex items-center space-x-2 p-4">
                    <div class="flex-1">
                        <div class="flex items-center space-x-4">
                            <div>
                                Request for
                                {{
                                    request.deliver_at_time | date: 'mediumDate'
                                }}
                                at
                                {{
                                    request.deliver_at_time | date: time_format
                                }}
                            </div>
                            <div
                                class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                [matTooltip]="err_tooltip(request)"
                                *ngIf="
                                    end_time <= request.deliver_at ||
                                    rejected_ids.includes(request.id) ||
                                    request.conflict
                                "
                            >
                                <app-icon>priority_high</app-icon>
                            </div>
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        matTooltip="Duplicate Request"
                        (click)="duplicateRequest(request)"
                    >
                        <app-icon>content_copy</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Edit Request"
                        (click)="editRequest(request)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Remove Request"
                        class="text-error"
                        (click)="removeRequest(request)"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            show_request[request.id]
                                ? 'Hide order items'
                                : 'Show order items'
                        "
                        (click)="
                            show_request[request.id] = !show_request[request.id]
                        "
                    >
                        <app-icon>
                            {{
                                show_request[request.id]
                                    ? 'expand_less'
                                    : 'expand_more'
                            }}
                        </app-icon>
                    </button>
                </div>
                <div
                    class="flex flex-col bg-base-200 divide-y divide-base-100"
                    [@show]="show_request[request.id] ? 'show' : 'hide'"
                >
                    <div
                        class="flex items-center px-4 py-1 space-x-2 hover:opacity-90"
                        *ngFor="let item of request.items"
                    >
                        <div class="flex items-center flex-1">
                            {{ item.name || 'Item' }}
                        </div>
                        <div
                            class="rounded bg-success text-success-content text-xs px-2 py-1"
                        >
                            x{{ item.quantity }}
                        </div>
                        <button
                            icon
                            matRipple
                            matTooltip="Remove Request Item"
                            class="text-error"
                            (click)="removeRequestItem(request, item)"
                        >
                            <app-icon>delete</app-icon>
                        </button>
                        <button
                            icon
                            matRipple
                            name="toggle-catering-item-favourite"
                            [matTooltip]="
                                favorites.includes(item.id)
                                    ? 'Remove from favourites'
                                    : 'Add to favourites'
                            "
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
            </div>
        </div>
        <button
            btn
            matRipple
            add-space
            class="w-full inverse mt-2"
            [disabled]="disabled"
            (click)="editRequest()"
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
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
})
export class AssetListFieldComponent implements ControlValueAccessor {
    @Input() public options: {
        date?: number;
        duration?: number;
        all_day?: boolean;
        zone_id?: string;
    } = {};
    @Input() public rejected_ids: string[] = [];
    public asset_requests: AssetRequest[] = [];
    public disabled = false;
    public show_request: Record<string, boolean> = {};
    public err_tooltip(request: AssetRequest) {
        return this.rejected_ids.includes(request.id) || request.conflict
            ? 'Some of the items are not available for the selected date and time.'
            : 'Delivery time is outside of the event time.\nThis order will be ignored.';
    }

    private _onChange: (_: AssetRequest[]) => void;
    private _onTouch: (_: AssetRequest[]) => void;
    public selected: AssetRequest[] = [];

    public get favorites() {
        return this._settings.get<string[]>('favourite_assets') || EMPTY_FAVS;
    }

    public get end_time() {
        const time =
            (this.options.date || Date.now()) +
            (this.options.duration || 30) * 60 * 1000;
        return this.options.all_day ? endOfDay(time).valueOf() : time;
    }

    public get time_format() {
        return this._settings.time_format || 'shortTime';
    }

    constructor(
        private _settings: SettingsService,
        private _dialog: MatDialog,
        private _state: AssetStateService
    ) {}

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.options) {
            this.asset_requests = (this.asset_requests || []).map(
                (_) => new AssetRequest({ ..._, event: this.options as any })
            );
            this._state.setOptions({
                date: this.options.date,
                duration: this.options.duration,
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
        console.log('Requests:', value);
        this.asset_requests = (value || []).map(
            (_) =>
                new AssetRequest({
                    ..._,
                    event: this.options as any,
                    state: _.state,
                })
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
        const ref = this._dialog.open(AssetSelectModalComponent, {
            data: {
                items: order.items,
                details: {
                    ...this.options,
                    date: this.options.all_day
                        ? startOfDay(this.options.date).valueOf()
                        : this.options.date,
                    duration: this.options.all_day
                        ? Math.max(24 * 60, this.options.duration)
                        : this.options.duration,
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
            const time = new Date(this.options.date);
            const new_order = new AssetRequest({
                ...order,
                conflict: false,
                _changed:
                    order._changed ||
                    order.items.find(
                        (_) =>
                            items.find((__) => __.id === _.id)?.quantity !==
                            _.quantity
                    ),
                items: items.map((_) => ({ ..._ })),
                event: this.options as any,
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
                    0
                );
                if (total + item.quantity > (item as any).assets.length) {
                    notifyError(
                        `Not enough assets available to meet request [${item.name}].
                        Another request for this asset has been made in this meeting.`,
                        undefined,
                        undefined,
                        { duration: 5000 }
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
            (_) => _.id !== request.id
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
            (_) => _.id !== order.id
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
                fav_list.filter((_) => _ !== asset.id)
            );
        }
    }
}
