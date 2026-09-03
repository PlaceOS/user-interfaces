import { CommonModule } from '@angular/common';
import {
    Component,
    computed,
    forwardRef,
    inject,
    input,
    OnChanges,
    OnInit,
    signal,
    SimpleChanges,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTooltipModule } from '@angular/material/tooltip';
import {
    ANIMATION_SHOW_CONTRACT_EXPAND,
    CateringItem,
    CateringOrder,
    i18n,
    OrganisationService,
    randomString,
    SettingsService,
    Space,
} from '@placeos/common';
import { endOfDay, startOfDay } from 'date-fns';

import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { CateringOrderStateService } from './catering-order-modal/catering-order-state.service';
import { CateringSelectModalComponent } from './catering-select-modal/catering-select-modal.component';

const EMPTY_FAVS = [];

@Component({
    selector: `catering-list-field`,
    template: `
        <div list class="space-y-2">
            @for (order of orders(); track order.id) {
                <div
                    order
                    class="bg-base-100 overflow-hidden rounded-xl border shadow-sm"
                    [class.border-error]="end_time() < order.deliver_at"
                    [class.border-base-300]="end_time() >= order.deliver_at"
                >
                    <div class="flex items-center space-x-2 p-4">
                        <div class="flex-1">
                            <button
                                room
                                class="mb-1 flex items-center space-x-1 text-left text-sm"
                                [disabled]="disabled()"
                                [matMenuTriggerFor]="room_menu"
                            >
                                <icon class="text-lg">meeting_room</icon>
                                <span>{{ roomLabel(order) }}</span>
                                @if (!disabled()) {
                                    <icon class="text-lg">arrow_drop_down</icon>
                                }
                            </button>
                            <mat-menu #room_menu="matMenu">
                                @for (room of rooms(); track room.id) {
                                    <button
                                        mat-menu-item
                                        (click)="editOrder(order, room)"
                                    >
                                        {{ spaceLabel(room) }}
                                    </button>
                                }
                            </mat-menu>
                            <div class="flex items-center space-x-4">
                                <div>
                                    {{
                                        'CALENDAR_EVENT.CATERING_ORDER_AT_DATE'
                                            | translate
                                                : {
                                                      date:
                                                          order.deliver_at
                                                          | date: 'mediumDate',
                                                      time:
                                                          order.deliver_at
                                                          | date: time_format(),
                                                  }
                                    }}
                                </div>
                                @if (end_time() < order.deliver_at) {
                                    <div
                                        class="bg-error text-error-content flex h-6 w-6 items-center justify-center rounded-full"
                                        [matTooltip]="err_tooltip()"
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
                                                      | currency
                                                          : currency_code(),
                                              }
                                }}
                            </div>
                        </div>
                        @if (!disabled()) {
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
                        @if (!disabled()) {
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
                        @if (!disabled()) {
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
                                (show_order()[order.id]
                                    ? 'CALENDAR_EVENT.CATERING_ORDER_HIDE'
                                    : 'CALENDAR_EVENT.CATERING_ORDER_SHOW'
                                ) | translate
                            "
                            (click)="toggleOrder(order.id)"
                        >
                            <icon>
                                {{
                                    show_order()[order.id]
                                        ? 'expand_less'
                                        : 'expand_more'
                                }}
                            </icon>
                        </button>
                    </div>
                    <div
                        class="divide-base-100 bg-base-200 flex flex-col divide-y"
                        [@show]="show_order()[order.id] ? 'show' : 'hide'"
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
                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                >
                                    x{{ item.quantity }}
                                </div>
                                <div
                                    class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                >
                                    {{
                                        item.unit_price_with_options / 100
                                            | currency: currency_code()
                                    }}
                                    ea
                                </div>
                                @if (!disabled()) {
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
                                        (favorites().includes(item.id)
                                            ? 'COMMON.FAVOURITES_REMOVE'
                                            : 'COMMON.FAVOURITES_ADD'
                                        ) | translate
                                    "
                                    [class.text-info]="
                                        favorites().includes(item.id)
                                    "
                                    (click)="toggleFavourite(item)"
                                >
                                    <icon
                                        [className]="
                                            favorites().includes(item.id)
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
            [disabled]="disabled() || !rooms().length"
            [matMenuTriggerFor]="
                requires_room_selection() ? add_room_menu : null
            "
            (click)="addOrder()"
        >
            <div class="flex items-center justify-center space-x-2">
                <icon>search</icon>
                <span>
                    {{ 'CALENDAR_EVENT.CATERING_ORDER_ADD' | translate }}
                </span>
            </div>
        </button>
        <mat-menu #add_room_menu="matMenu">
            @for (room of rooms(); track room.id) {
                <button mat-menu-item (click)="addOrder(room)">
                    {{ spaceLabel(room) }}
                </button>
            }
        </mat-menu>
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
        MatMenuModule,
    ],
})
export class CateringListFieldComponent
    implements ControlValueAccessor, OnInit, OnChanges
{
    private _settings = inject(SettingsService);
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);
    private _state = inject(CateringOrderStateService);

    public readonly options = input<{
        date?: number;
        duration?: number;
        all_day?: boolean;
        zone_id?: string;
        resources?: readonly Space[];
    }>({});
    public readonly rooms = computed(() => this.options().resources || []);
    public readonly multiple_spaces = this._settings.signal<boolean>(
        'events.multiple_spaces',
        false,
    );
    public readonly requires_room_selection = computed(
        () => this.rooms().length > 1 && !!this.multiple_spaces(),
    );
    public readonly orders = signal<CateringOrder[]>([]);
    public readonly show_order = signal<Record<string, boolean>>({});
    public readonly disabled = signal(false);
    public readonly err_tooltip = signal('');
    public readonly end_time = computed(() => {
        const time =
            (this.options().date || Date.now()) +
            (this.options().duration || 30) * 60 * 1000;
        return this.options().all_day ? endOfDay(time).valueOf() : time;
    });

    private _onChange: (_: CateringOrder[]) => void;
    private _onTouch: (_: CateringOrder[]) => void;

    public readonly favorites = computed(() => {
        return (
            this._settings.signal<string[]>(
                'favourite_menu_items',
                EMPTY_FAVS,
                true,
            )() || EMPTY_FAVS
        );
    });

    public readonly time_format = computed(
        () => this._settings.time_format_signal() || 'shortTime',
    );

    public readonly currency_code = computed(() => {
        this._org.active_building();
        return this._org.currency_code;
    });

    public ngOnInit() {
        this.err_tooltip.set(i18n('CALENDAR_EVENT.CATERING_ORDER_ERROR'));
    }

    /**
     * Update the form field value
     * @param new_value New value to set on the form field
     */
    public setValue(new_value: CateringOrder[]) {
        const orders = [...(new_value || [])];
        this.orders.set(orders);
        this.syncExpandedOrders(orders);
        if (this._onChange) this._onChange(orders);
        if (this._onTouch) this._onTouch(orders);
    }

    public ngOnChanges(changes: SimpleChanges) {
        if (changes.options) {
            const options = this.options();
            const room_ids = new Set(
                (options.resources || []).flatMap((_) => [_.id, _.email]),
            );
            const orders = this.orders()
                .filter(
                    (_) =>
                        !('resources' in options) ||
                        !_.system_id ||
                        room_ids.has(_.system_id),
                )
                .map((_) => new CateringOrder({ ..._, event: options as any }));
            if (orders.length !== this.orders().length) this.setValue(orders);
            else this.orders.set(orders);
        }
    }

    /**
     * Update local value when form control value is changed
     * @param value The new value for the component
     */
    public writeValue(value: CateringOrder[]) {
        const orders = (value || []).map(
            (_) => new CateringOrder({ ..._, event: this.options() as any }),
        );
        this.orders.set(orders);
        this.syncExpandedOrders(orders);
    }

    public readonly registerOnChange = (fn: (_: CateringOrder[]) => void) =>
        (this._onChange = fn);
    public readonly registerOnTouched = (fn: (_: CateringOrder[]) => void) =>
        (this._onTouch = fn);
    public readonly setDisabledState = (s: boolean) => this.disabled.set(s);

    public removeOrder(order: CateringOrder) {
        const updated_list = this.orders().filter((_) => _.id !== order.id);
        this.setValue(updated_list);
    }

    public duplicateOrder(order: CateringOrder) {
        const new_order = new CateringOrder({
            ...order,
            id: `order-${randomString(8)}`,
        });
        this.setValue([...this.orders(), new_order]);
    }

    public addOrder(room?: Space) {
        const assigned_room = room || this._defaultRoom();
        if (!assigned_room) return;
        this.editOrder(
            new CateringOrder({ system_id: assigned_room.id }),
            assigned_room,
        );
    }

    public removeOrderItem(order: CateringOrder, item: CateringItem) {
        const new_order = new CateringOrder({
            ...order,
            items: order.items.filter((_) => _.custom_id !== item.custom_id),
        });
        const updated_list = this.orders().filter((_) => _.id !== order.id);
        if (new_order.items.length > 0) {
            this.setValue([...updated_list, new_order]);
        } else this.setValue(updated_list);
    }

    public editOrder(order: CateringOrder = new CateringOrder(), room?: Space) {
        const assigned_room =
            room || this.roomFor(order) || this._defaultRoom();
        if (!assigned_room) return;
        const options = this.options();
        const optionsValue = this.options();
        const location = this._org.locationWithID(assigned_room.zones);
        const zone_id =
            assigned_room.level?.parent_id ||
            this._org.levelWithID(assigned_room.zones)?.parent_id ||
            location.building?.id ||
            options.zone_id;
        this._state.setOptions({
            building: location.building?.id,
            zone: zone_id,
        });
        const ref = this._dialog.open(CateringSelectModalComponent, {
            data: {
                caterer: order.items[0]?.caterer,
                items: order.items,
                details: {
                    ...this.options(),
                    resources: [assigned_room],
                    zone_id,
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
            const orders = this.orders().filter((_) => _.id !== order.id);
            if (!items) return;
            if (!items.length) {
                this.setValue(orders);
                return;
            }
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
            const modal = ref.componentInstance;
            const exact_time = this.readDialogValue(modal.exact_time);
            const offset = this.readDialogValue(modal.offset);
            const offset_day = this.readDialogValue(modal.offset_day);
            const new_order = new CateringOrder({
                ...order,
                system_id: assigned_room.id,
                items,
                caterer: items[0].caterer,
                event: this.options() as any,
                deliver_offset: offset,
                deliver_time: exact_time
                    ? time.getHours() + time.getMinutes() / 60
                    : null,
                deliver_day_offset: offset_day || 0,
            });
            if (new_order.item_count <= 0) {
                this.setValue(orders);
                return;
            }
            this.setValue([...orders, new_order]);
        });
    }

    public roomFor(order: CateringOrder) {
        if (!order.system_id) return undefined;
        return this.rooms().find(
            (_) => _.id === order.system_id || _.email === order.system_id,
        );
    }

    public roomLabel(order: CateringOrder) {
        const room = this.roomFor(order);
        return room
            ? this.spaceLabel(room)
            : i18n('CALENDAR_EVENT.ROOM_REQUIRED');
    }

    public spaceLabel(room: Space) {
        const location = this._org.locationWithID(room.zones)?.label;
        const room_name = room.display_name || room.name;
        return [location, room_name].filter((_) => !!_).join(' / ');
    }

    private _defaultRoom() {
        const rooms = this.rooms();
        return rooms.length === 1 || !this.multiple_spaces()
            ? rooms[0]
            : undefined;
    }

    private readDialogValue<T>(value: T | (() => T)): T {
        return typeof value === 'function' ? (value as () => T)() : value;
    }

    public toggleOrder(order_id: string) {
        this.show_order.update((state) => ({
            ...state,
            [order_id]: !state[order_id],
        }));
    }

    public optionList(item: CateringItem) {
        return item.option_list?.map((_) => _.name).join('\n');
    }

    public toggleFavourite(cateringitem: CateringItem) {
        const fav_list = this.favorites();
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

    private syncExpandedOrders(orders: CateringOrder[]) {
        const order_ids = new Set(orders.map((_) => _.id));
        this.show_order.update((state) =>
            Object.fromEntries(
                Object.entries(state).filter(([id]) => order_ids.has(id)),
            ),
        );
    }
}
