import { randomInt } from '@placeos/common';
import { CalendarEvent } from '@placeos/events';

import { CateringItem } from './catering-item.class';
import { CateringOrderStatus } from './catering.interfaces';
import { addDays, addMinutes, set, startOfDay, startOfMinute } from 'date-fns';

function deliverAtTime(order: CateringOrder) {
    let date = order.event?.date || (order as any)._time;
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
        this.items = (data.items || []).map((i) =>
            i instanceof CateringItem ? i : new CateringItem(i)
        );
        this.item_count = this.items.reduce(
            (amount, item) => amount + item.quantity,
            0
        );
        this.total_cost = this.items.reduce(
            (amount, item) => amount + (item.total_cost || 0),
            0
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
}
