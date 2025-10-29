import { cleanObject } from '@placeos/ts-client';
import { addDays, addMinutes, set, startOfDay, startOfMinute } from 'date-fns';

import { randomInt } from '../general';
import { CalendarEvent } from './event.class';

// Event catering order interfaces
export type CateringOrderStatus =
    | 'accepted'
    | 'preparing'
    | 'ready'
    | 'delivered'
    | 'cancelled';

export interface CateringOptionGroup {
    name: string;
    multiple: boolean;
    options: CateringOption[];
}

export interface CateringOption {
    /** Unique Identifier of the catering option */
    readonly id: string;
    /** Display name for the catering option */
    readonly name: string;
    /** Name of the group associated with the option */
    readonly group: string;
    /** Whether multiple items in the group can be selected */
    readonly multiple: boolean;
    /** Cost of adding the option to the item */
    readonly unit_price: number;
    /** Whether the catering option is active for the item */
    active?: boolean;
}

function deliverAtTime(order: CateringOrder) {
    let date =
        order.event?.date ||
        order.event?.event_start * 1000 ||
        (order as any)._time;
    if (order.deliver_time) {
        date = set(date, {
            hours: Math.floor(order.deliver_time),
            minutes: (order.deliver_time % 1) * 60,
        }).valueOf();
    }
    if (order.deliver_day_offset > 0 || order.event?.all_day) {
        date = addDays(startOfDay(date), order.deliver_day_offset).valueOf();
    }
    return addMinutes(date, order.deliver_offset).valueOf();
}

export class CateringItem {
    /** ID of the catering item */
    public readonly id: string;
    /** Display name for the catering item */
    public readonly name: string;
    /** Category that this item is associated */
    public readonly category: string;
    /** Caterer that this item is associated */
    public readonly caterer: string;
    /** Description of the contents of the catering item */
    public readonly description: string;
    /** Unit price in cents for the catering item */
    public readonly unit_price: number;
    /** Number of item in the associated order */
    public readonly quantity: number;
    /** List of options for the catering item */
    public readonly options: CateringOption[];
    /** List of attributes assoicated with the catering item */
    public readonly tags: string[];
    /** Whether catering items can be purchased using points */
    public readonly accept_points: boolean;
    /** Max percentage of the cost that can be covered using points */
    public readonly discount_cap: number;
    /** Total cost for the item */
    public readonly total_cost: number;
    /** String list of available options */
    public readonly options_string: string;
    /** List of images for the catering item */
    public readonly images: string[];
    /** List of active options for the item */
    public readonly option_list: CateringOption[];
    /** Price per unit with selected options */
    public readonly unit_price_with_options: number;
    /** Zones in which this item is not allow to be ordered in */
    public readonly hide_for_zones: string[];
    /** Whether item in part of an order */
    public readonly in_order: boolean;

    public get custom_id() {
        const options = this.option_list.map((_) => _.id).join('+');
        return `${this.id}[${options}]${!this.in_order ? 'menu' : ''}`;
    }

    constructor(data: Partial<CateringItem> = {}) {
        this.id = data.id || '';
        this.name = data.name || data.id || '';
        this.category = data.category || '';
        this.caterer = data.caterer || '';
        this.unit_price = data.unit_price || 0;
        this.description = data.description || '';
        this.quantity = data.quantity || 0;
        this.discount_cap = data.discount_cap || 0;
        this.accept_points = !!data.accept_points;
        this.tags = (data.tags instanceof Array ? data.tags : null) || [];
        this.images = data.images || [];
        this.options = data.options || [];
        const has_options = this.options.some((_) => _.active === true);
        this.option_list =
            (has_options
                ? this.options.filter((_) => _.active === true)
                : data.option_list) || [];
        this.hide_for_zones = data.hide_for_zones || [];
        this.unit_price_with_options =
            this.unit_price +
            this.option_list
                .map((i) => i.unit_price || 0)
                .reduce((c, a) => c + a, 0);
        this.total_cost = this.unit_price_with_options * this.quantity;
        this.options_string =
            this.options
                ?.map((_) => _.id || '')
                .sort((a, b) => a.localeCompare(b))
                .join(',') || '';
        this.in_order = data.in_order ?? false;
    }
}

export class CateringOrder {
    /** ID of the order */
    public readonly id: string;
    /** ID of the space the order is associated */
    public readonly system_id: string;
    /** ID of the event the order is associated */
    public readonly event_id: string;
    /** List of items associated with the order */
    public readonly items: readonly CateringItem[];
    /** Number of items in the order */
    public readonly item_count: number;
    /** Total cost of order */
    public readonly total_cost: number;
    /** Invoice number associated with the order */
    public readonly invoice_number: string;
    /** Charge code for the order */
    public readonly charge_code: string;
    /** Minutes from set time to deliver item */
    public readonly deliver_day_offset: number;
    /** Minutes from set time to deliver item */
    public readonly deliver_offset: number;
    /** Hour to from set time to deliver item */
    public readonly deliver_time?: number;
    /** Notes associated with the order */
    public readonly notes: string;
    /** Caterer associated with the order */
    public readonly caterer: string;
    /** Event associated with the order */
    public readonly event: CalendarEvent | null;
    public readonly deliver_at_time: number;
    /** Current status of the order */
    private _status: CateringOrderStatus;
    private _time = startOfMinute(Date.now()).valueOf();

    public get deliver_at() {
        return deliverAtTime(this);
    }

    public get status() {
        return this._status;
    }

    public set status(value: CateringOrderStatus) {
        this._status = value;
        this[`${this.event_id}_status`] = value;
    }

    constructor(data: Partial<CateringOrder> = {}) {
        this.id = data.id || `order-${randomInt(9_999_999, 1_000_000)}`;
        this.system_id = data.system_id || '';
        this.event_id = data.event_id || data.event?.id || '';
        this.caterer = data.caterer || '';
        this.items = (data.items || []).map((i) =>
            i instanceof CateringItem ? i : new CateringItem(i),
        );
        this.items = this.items.filter(
            (i) => i.quantity > 0 && this.caterer === i.caterer,
        );
        this.item_count = this.items.reduce(
            (amount, item) => amount + item.quantity,
            0,
        );
        this.total_cost = this.items.reduce(
            (amount, item) => amount + (item.total_cost || 0),
            0,
        );
        this.charge_code = data.charge_code || '';
        this.status =
            data[`${this.event_id}_status`] || data.status || 'accepted';
        this.invoice_number = data.invoice_number || '';
        this.event = data.event || null;
        this.notes = data.notes || '';
        this.deliver_time = data.deliver_time || undefined;
        this.deliver_offset = data.deliver_offset || 0;
        this.deliver_day_offset = data.deliver_day_offset || 0;
        this.deliver_at_time = deliverAtTime(this);
    }

    public toJSON() {
        const obj: any = cleanObject({ ...this }, ['', null, undefined]);
        obj.status = obj._status;
        delete obj.event;
        delete obj._status;
        delete obj._time;
        return obj;
    }
}
