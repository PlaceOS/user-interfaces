import { Component, forwardRef, Input, SimpleChanges } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    randomString,
    SettingsService,
} from '@placeos/common';

import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { NewCateringOrderModalComponent } from 'libs/catering/src/lib/catering-order-modal/new-catering-order-modal.component';
import { CateringOrder } from './catering-order.class';
import { Organisation, OrganisationService } from '@placeos/organisation';
import { endOfDay, format, startOfDay } from 'date-fns';

const EMPTY_FAVS = [];

@Component({
    selector: `catering-list-field`,
    template: `
        <div list class="space-y-2">
            <div
                order
                *ngFor="let order of orders"
                class="border shadow bg-base-100 rounded-xl overflow-hidden"
                [class.border-error]="end_time < order.deliver_at"
                [class.border-base-300]="end_time >= order.deliver_at"
            >
                <div class="flex items-center space-x-2 p-4">
                    <div class="flex-1">
                        <div class="flex items-center space-x-4">
                            <div>
                                Order for
                                {{ order.deliver_at_time | date: 'mediumDate' }}
                                at
                                {{ order.deliver_at_time | date: time_format }}
                            </div>
                            <div
                                class="flex items-center justify-center h-6 w-6 rounded-full bg-error text-error-content"
                                [matTooltip]="err_tooltip"
                                *ngIf="end_time < order.deliver_at"
                            >
                                <app-icon>priority_high</app-icon>
                            </div>
                        </div>
                        <div class="text-xs opacity-60">
                            {{ order.item_count }} item(s) for
                            {{
                                order.total_cost / 100 | currency: currency_code
                            }}
                        </div>
                    </div>
                    <button
                        icon
                        matRipple
                        matTooltip="Duplicate Order"
                        *ngIf="!disabled"
                        (click)="duplicateOrder(order)"
                    >
                        <app-icon>content_copy</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Edit Order"
                        *ngIf="!disabled"
                        (click)="editOrder(order)"
                    >
                        <app-icon>edit</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        matTooltip="Remove Order"
                        class="text-error"
                        *ngIf="!disabled"
                        (click)="removeOrder(order)"
                    >
                        <app-icon>delete</app-icon>
                    </button>
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            show_order[order.id]
                                ? 'Hide order items'
                                : 'Show order items'
                        "
                        (click)="show_order[order.id] = !show_order[order.id]"
                    >
                        <app-icon>
                            {{
                                show_order[order.id]
                                    ? 'expand_less'
                                    : 'expand_more'
                            }}
                        </app-icon>
                    </button>
                </div>
                <div
                    class="flex flex-col bg-base-200 divide-y divide-base-100"
                    [@show]="show_order[order.id] ? 'show' : 'hide'"
                >
                    <div
                        class="flex items-center px-4 py-1 space-x-2 hover:opacity-90"
                        *ngFor="let item of order.items"
                    >
                        <div class="flex items-center flex-1">
                            {{ item.name || 'Item' }}
                            <span
                                class="text-xs opacity-60 ml-4 font-normal"
                                *ngIf="item.option_list?.length"
                                [matTooltip]="optionList(item)"
                            >
                                {{ item.option_list?.length || '0' }} option(s)
                            </span>
                        </div>
                        <div
                            class="rounded bg-success text-success-content text-xs px-2 py-1"
                        >
                            x{{ item.quantity }}
                        </div>
                        <div
                            class="rounded bg-info text-info-content text-xs px-2 py-1"
                        >
                            {{
                                item.unit_price_with_options / 100
                                    | currency: currency_code
                            }}
                            ea
                        </div>
                        <button
                            icon
                            matRipple
                            matTooltip="Remove Order Item"
                            class="text-error"
                            *ngIf="!disabled"
                            (click)="removeOrderItem(order, item)"
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
            name="add-catering-item"
            class="w-full inverse mt-2"
            [disabled]="disabled"
            (click)="editOrder()"
        >
            <div class="flex items-center justify-center space-x-2">
                <app-icon>search</app-icon>
                <span>Add Order</span>
            </div>
        </button>
    `,
    styles: [``],
    animations: [ANIMATION_SHOW_CONTRACT_EXPAND],
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
        all_day?: boolean;
        zone_id?: string;
    } = {};
    public orders: CateringOrder[] = [];
    public show_order: Record<string, boolean> = {};
    public disabled = false;
    public err_tooltip =
        'Delivery time is outside of the event time.\nThis order will be ignored.';

    private _onChange: (_: CateringOrder[]) => void;
    private _onTouch: (_: CateringOrder[]) => void;
    public selected: CateringOrder[] = [];

    public get favorites() {
        return (
            this._settings.get<string[]>('favourite_menu_items') || EMPTY_FAVS
        );
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

    public get currency_code() {
        return this._org.building?.currency || 'USD';
    }

    constructor(
        private _settings: SettingsService,
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: CateringOrder[]) {
        this.orders = new_value;
        if (this._onChange) this._onChange(this.orders);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.options) {
            this.orders = (this.orders || []).map(
                (_) => new CateringOrder({ ..._, event: this.options as any })
            );
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: CateringOrder[]) {
        this.orders = (value || []).map(
            (_) => new CateringOrder({ ..._, event: this.options as any })
        );
    }

    public readonly registerOnChange = (fn: (_: CateringOrder[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: CateringOrder[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => (this.disabled = s);

    public removeOrder(order: CateringItem) {
        const updated_list = this.orders.filter((_) => _.id !== order.id);
        this.setValue(updated_list);
    }

    public duplicateOrder(order: CateringOrder) {
        const new_order = new CateringOrder({
            ...order,
            id: `order-${randomString(8)}`,
        });
        this.setValue([...this.orders, new_order]);
    }

    public removeOrderItem(order: CateringOrder, item: CateringItem) {
        const new_order = new CateringOrder({
            ...order,
            items: order.items.filter((_) => _.custom_id !== item.custom_id),
        });
        const updated_list = this.orders.filter((_) => _.id !== order.id);
        if (new_order.items.length > 0) {
            this.setValue([...updated_list, new_order]);
        } else this.setValue(updated_list);
    }

    public editOrder(order: CateringOrder = new CateringOrder()) {
        const ref = this._dialog.open(NewCateringOrderModalComponent, {
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
            },
        });
        ref.afterClosed().subscribe((items?: CateringItem[]) => {
            const orders = this.orders.filter((_) => _.id !== order.id);
            if (!items?.length) return;
            const time = new Date(this.options.date);
            for (const item of items) {
                (item as any).options = [
                    ...item.options.map((_) => ({ ..._ })),
                ];
                for (const option of item.options) {
                    const opt = item.option_list.find(
                        (_) => _.id === option.id
                    );
                    option.active = !!opt;
                }
            }
            const new_order = new CateringOrder({
                ...order,
                items,
                event: this.options as any,
                deliver_offset: ref.componentInstance.offset,
                deliver_time: ref.componentInstance.exact_time
                    ? time.getHours() + time.getMinutes() / 60
                    : null,
                deliver_day_offset: ref.componentInstance.offset_day || 0,
            });
            if (new_order.item_count <= 0) return;
            this.setValue([...orders, new_order]);
        });
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
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
