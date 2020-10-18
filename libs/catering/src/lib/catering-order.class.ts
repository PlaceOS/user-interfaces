import { randomInt } from '@user-interfaces/common';
import { CalendarEvent } from '@user-interfaces/events';

import { CateringItem } from './catering-item.class';
import { CateringOrderStatus } from './catering.interfaces';

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
    /** Unix epoch in seconds of order delivery time */
    public readonly deliver_at: number;
    /** Current status of the order */
    public readonly status: CateringOrderStatus;
    /** Event associated with the order */
    public readonly event: CalendarEvent | null;

    constructor(data: Partial<CateringOrder> = {}) {
        this.id = data.id || `order-${randomInt(9_999_999, 1_000_000)}`;
        this.event_id = data.event_id || data.event?.id || '';
        this.items = (data.items || []).map(i => new CateringItem(i));
        this.system_id = data.system_id;
        this.item_count = this.items.reduce((amount, item) => amount + item.quantity, 0);
        this.total_cost = this.items.reduce(
            (amount, item) => amount + (item.total_cost || 0),
            0
        );
        this.charge_code = data.charge_code || '';
        this.status = data.status || 'accepted';
        this.invoice_number = data.invoice_number || '';
        this.event = data.event || null;
        this.deliver_at = data.deliver_at || (data as any).date || this.event?.date || new Date().getTime();
    }
}
