import { randomInt } from '@placeos/common';

import { addDays, addMinutes, set, startOfDay, startOfMinute } from 'date-fns';
import { Booking } from 'libs/bookings/src/lib/booking.class';

export type AssetStatus =
    | 'in_storage'
    | 'in_transit'
    | 'delivered'
    | 'returned'
    | 'cancelled';

export interface AssetItem {
    id: string; // ID of the group
    name: string; // Name of the group
    quantity: number; // Number of items from the group
    item_ids: string[]; // List of physical item IDs
}

function deliverAtTime(request: AssetRequest) {
    let date = request.event?.date || (request as any)._time;
    if (request.deliver_time) {
        date = set(date, {
            hours: Math.floor(request.deliver_time),
            minutes: (request.deliver_time % 1) * 60,
        }).valueOf();
    }
    if (request.deliver_day_offset > 0 || request.event?.all_day) {
        date = addDays(startOfDay(date), request.deliver_day_offset).valueOf();
    }
    return addMinutes(date, request.deliver_offset).valueOf();
}

export class AssetRequest {
    /** ID of the order */
    public readonly id: string;
    /** ID of the space the order is associated */
    public readonly system_id: string;
    /** ID of the event the order is associated */
    public readonly event_id: string;
    /** List of items associated with the order */
    public readonly items: readonly AssetItem[];
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
    /** Event associated with the order */
    public readonly event: Booking | null;
    public readonly deliver_at_time: number;
    public readonly ref_id: string;
    public readonly state: string;
    public conflict = false;
    public _changed = false;
    public _booking: Booking | null;
    /** Current status of the order */
    private _status: AssetStatus;
    private _time = startOfMinute(Date.now()).valueOf();

    public get deliver_at() {
        return deliverAtTime(this);
    }

    public get status() {
        return this._status;
    }

    public set status(value: AssetStatus) {
        this._status = value;
        this[`${this.event_id}_status`] = value;
    }

    constructor(data: any = {} as any) {
        this.id = data.id || `order-${randomInt(9_999_999, 1_000_000)}`;
        this.event_id = data.event_id || data.parent_id || '';
        this.items =
            data.items ||
            data.asset_ids?.map((_) => ({ id: _, quantity: 1 })) ||
            [];
        this.item_count = this.items.reduce(
            (amount, item) => amount + item.quantity,
            0
        );
        this._status =
            data[`${this.event_id}_status`] ||
            data.status ||
            (data.extension_data || {})[`${this.event_id}_status`] ||
            data.extension_data?.status ||
            'in_storage';
        this.event = data.event || data || null;
        const booking = this.event?.linked_bookings?.find(
            (_) => _.extension_data.request_id === this.id
        );
        this._booking = booking || data.booking || null;
        this._changed = !!data._changed || !booking;
        this.notes = data.notes || data.description || '';
        this.deliver_time =
            data.deliver_time || data.extension_data?.deliver_time || undefined;
        this.deliver_offset =
            data.deliver_offset || data.extension_data?.deliver_offset || 0;
        this.deliver_day_offset =
            data.deliver_day_offset ||
            data.extension_data?.deliver_day_offset ||
            0;
        this.deliver_at_time = deliverAtTime(this);
        this.conflict = !!data.conflict;
        this.ref_id = `${this.deliver_at_time}|${this.items
            .map((_) => `${_.id}:${_.quantity}`)
            .join('|')}`;
    }

    public toJSON() {
        const blob = { ...this } as any;
        delete blob.event;
        delete blob._changed;
        delete blob._status;
        delete blob._time;
        delete blob.deliver_at_time;
        delete blob.deliver_at;
        blob.items = blob.items.map((_) => ({
            id: _.id,
            category_id: _.category_id,
            quantity: _.quantity,
            name: _.name,
            item_ids: _.item_ids,
        }));
        return blob;
    }
}
