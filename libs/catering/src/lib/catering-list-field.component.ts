import {
    Component,
    forwardRef,
    inject,
    input,
    OnChanges,
    OnInit,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    i18n,
    randomString,
    SettingsService,
} from '@placeos/common';

import { CommonModule } from '@angular/common';
import { MatRippleModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { OrganisationService } from '@placeos/organisation';
import { endOfDay, startOfDay } from 'date-fns';
import { CateringItem } from 'libs/catering/src/lib/catering-item.class';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOrder } from './catering-order.class';
import { NewCateringSelectModalComponent } from './new-catering-order-modal/new-catering-select-modal.component';

const EMPTY_FAVS = [];

@Component({
    selector: `catering-list-field`,
    template: `
        <div list class="space-y-2">
            @for (order of orders; track order.id) {
                <div
                    order
                    class="overflow-hidden rounded-xl border bg-base-100 shadow"
                    [class.border-error]="end_time < order.deliver_at"
                    [class.border-base-300]="end_time >= order.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-4">
                        <div class="flex-1">
                            <div class="flex items-center space-x-4">
                                <div>
                                    {{
                                        'CALENDAR_EVENT.CATERING_ORDER_AT_DATE'
                                            | translate
                                                : {
                                                      date:
                                                          order.deliver_at_time
                                                          | date: 'mediumDate',
                                                      time:
                                                          order.deliver_at_time
                                                          | date: time_format,
                                                  }
                                    }}
                                </div>
                                @if (end_time < order.deliver_at) {
                                    <div
                                        class="flex h-6 w-6 items-center justify-center rounded-full bg-error text-error-content"
                                        [matTooltip]="err_tooltip"
                                    >
                                        <icon>priority_high</icon>
                                    </div>
                                }
                            </div>
                            <div class="text-xs opacity-60">
                                {{
                                    'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                        | translate
                                            : {
                                                  count: order.item_count,
                                                  cost:
                                                      order.total_cost / 100
                                                      | currency: currency_code,
                                              }
                                }}
                            </div>
                        </div>
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'CALENDAR_EVENT.CATERING_ORDER_DUPLICATE'
                                        | translate
                                "
                                (click)="duplicateOrder(order)"
                            >
                                <icon>content_copy</icon>
                            </button>
                        }
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                [matTooltip]="
                                    'CALENDAR_EVENT.CATERING_ORDER_EDIT'
                                        | translate
                                "
                                (click)="editOrder(order)"
                            >
                                <icon>edit</icon>
                            </button>
                        }
                        @if (!disabled) {
                            <button
                                icon
                                matRipple
                                matTooltip="Remove Order"
                                class="text-error"
                                (click)="removeOrder(order)"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                (show_order[order.id]
                                    ? 'CALENDAR_EVENT.CATERING_ORDER_HIDE'
                                    : 'CALENDAR_EVENT.CATERING_ORDER_SHOW'
                                ) | translate
                            "
                            (click)="
                                show_order[order.id] = !show_order[order.id]
                            "
                        >
                            <icon>
                                {{
                                    show_order[order.id]
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}
                            </icon>
                        </button>
                    </div>
                    <div
                        class="flex flex-col divide-y divide-base-100 bg-base-200"
                        [@show]="show_order[order.id] ? 'show' : 'hide'"
                    >
                        @for (item of order.items; track item.custom_id) {
                            <div
                                class="flex items-center space-x-2 px-4 py-1 hover:opacity-90"
                            >
                                <div class="flex flex-1 items-center">
                                    {{ item.name || 'Item' }}
                                    @if (item.option_list?.length) {
                                        <span
                                            class="ml-4 text-xs font-normal opacity-60"
                                            [matTooltip]="optionList(item)"
                                        >
                                            {{
                                                'CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT'
                                                    | translate
                                                        : {
                                                              count:
                                                                  item
                                                                      .option_list
                                                                      ?.length ||
                                                                  '0',
                                                          }
                                            }}
                                        </span>
                                    }
                                </div>
                                <div
                                    class="rounded bg-success px-2 py-1 text-xs text-success-content"
                                >
                                    x{{ item.quantity }}
                                </div>
                                <div
                                    class="rounded bg-info px-2 py-1 text-xs text-info-content"
                                >
                                    {{
                                        item.unit_price_with_options / 100
                                            | currency: currency_code
                                    }}
                                    ea
                                </div>
                                @if (!disabled) {
                                    <button
                                        icon
                                        matRipple
                                        matTooltip="Remove Order Item"
                                        class="text-error"
                                        (click)="removeOrderItem(order, item)"
                                    >
                                        <icon>delete</icon>
                                    </button>
                                }
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
            name="add-catering-item"
            class="inverse mt-2 w-full"
            [disabled]="disabled"
            (click)="editOrder()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>
                    {{ 'CALENDAR_EVENT.CATERING_ORDER_ADD' | translate }}
                </span>
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
    imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        MatRippleModule,
        MatTooltipModule,
        MatDialogModule,
    ],
})
export class CateringListFieldComponent
    implements ControlValueAccessor, OnInit, OnChanges
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    public readonly options = input<{
        date?: number;
        duration?: number;
        all_day?: boolean;
        zone_id?: string;
    }>({});
    public orders: CateringOrder[] = [];
    public show_order: Record<string, boolean> = {};
    public disabled = false;
    public err_tooltip = '';

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
            (this.options().date || Date.now()) +
            (this.options().duration || 30) * 60 * 1000;
        return this.options().all_day ? endOfDay(time).valueOf() : time;
    }

    public get time_format() {
        return this._settings.time_format || 'shortTime';
    }

    public get currency_code() {
        return this._org.building?.currency || 'USD';
    }

    public ngOnInit() {
        this.err_tooltip = i18n('CALENDAR_EVENT.CATERING_ORDER_ERROR');
    }

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
                (_) =>
                    new CateringOrder({ ..._, event: this.options() as any }),
            );
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: CateringOrder[]) {
        this.orders = (value || []).map(
            (_) => new CateringOrder({ ..._, event: this.options() as any }),
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
        const options = this.options();
        const optionsValue = this.options();
        const ref = this._dialog.open(NewCateringSelectModalComponent, {
            data: {
                caterer: order.items[0]?.caterer,
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
            },
        });
        ref.afterClosed().subscribe((items?: CateringItem[]) => {
            const orders = this.orders.filter((_) => _.id !== order.id);
            if (!items?.length) return;
            const time = new Date(this.options().date);
            for (const item of items) {
                (item as any).options = [
                    ...item.options.map((_) => ({ ..._ })),
                ];
                for (const option of item.options) {
                    const opt = item.option_list.find(
                        (_) => _.id === option.id,
                    );
                    option.active = !!opt;
                }
            }
            const new_order = new CateringOrder({
                ...order,
                items,
                caterer: items[0].caterer,
                event: this.options() as any,
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
                fav_list.filter((_) => _ !== cateringitem.id),
            );
        }
    }
}
