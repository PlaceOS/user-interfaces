import { getUnixTime, startOfMinute } from 'date-fns';
import { CateringItem } from '../lib/catering-item.class';

import { CateringOrder } from '../lib/catering-order.class';

describe('CateringOrder', () => {
    let order: CateringOrder;

    beforeEach(() => (order = new CateringOrder()));

    it('should expose properties', () => {
        const date = getUnixTime(startOfMinute(Date.now()));
        expect(order.id).toContain('order-');
        expect(order.system_id).toBe('');
        expect(order.event_id).toBe('');
        expect(order.items).toEqual([]);
        expect(order.item_count).toBe(0);
        expect(order.total_cost).toBe(0);
        expect(order.invoice_number).toBe('');
        expect(order.charge_code).toBe('');
        expect(getUnixTime(order.deliver_at)).toBe(date);
        expect(order.status).toBe('accepted');
        expect(order.event).toBe(null);
        order = new CateringOrder({
            id: 'first-order',
            event_id: 'event-1',
            items: [
                { unit_price: 50, quantity: 10 },
                { unit_price: 200, quantity: 1 },
            ] as any,
            system_id: 'sys-1',
            invoice_number: 'invoice-123',
            charge_code: 'code-123',
            event: {} as any,
            status: 'preparing',
            deliver_at: 1,
        });
        expect(order.id).toBe('first-order');
        expect(order.system_id).toBe('sys-1');
        expect(order.event_id).toBe('event-1');
        expect(order.items).toEqual([
            new CateringItem({ unit_price: 50, quantity: 10 }),
            new CateringItem({ unit_price: 200, quantity: 1 }),
        ]);
        expect(order.item_count).toBe(11);
        expect(order.total_cost).toBe(700);
        expect(order.invoice_number).toBe('invoice-123');
        expect(order.charge_code).toBe('code-123');
        expect(order.deliver_at).toBe(startOfMinute(Date.now()).valueOf());
        expect(order.status).toBe('preparing');
        expect(order.event).toEqual({});
    });
});
