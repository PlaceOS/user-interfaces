import { set } from 'date-fns';

import {
    CateringItem,
    CateringOrder,
} from '../lib/types/catering.class';

describe('CateringItem', () => {
    it('should create with sensible defaults', () => {
        const item = new CateringItem();
        expect(item.unit_price).toBe(0);
        expect(item.quantity).toBe(0);
        expect(item.total_cost).toBe(0);
        expect(item.options).toEqual([]);
    });

    it('should include selected options in unit price', () => {
        const item = new CateringItem({
            unit_price: 1000,
            quantity: 2,
            options: [
                { id: 'opt-1', unit_price: 100, active: true },
                { id: 'opt-2', unit_price: 500, active: false },
            ] as any,
        });
        expect(item.unit_price_with_options).toBe(1100);
        expect(item.total_cost).toBe(2200);
    });

    it('should prefer active options for the option list', () => {
        const item = new CateringItem({
            options: [
                { id: 'opt-1', active: true },
                { id: 'opt-2' },
            ] as any,
        });
        expect(item.option_list.map((_) => _.id)).toEqual(['opt-1']);
    });

    it('should fall back to the given option list when none are active', () => {
        const item = new CateringItem({
            options: [{ id: 'opt-1' }] as any,
            option_list: [{ id: 'opt-2' }] as any,
        });
        expect(item.option_list.map((_) => _.id)).toEqual(['opt-2']);
    });

    it('should generate a custom ID from the item and sorted options', () => {
        const item = new CateringItem({
            id: 'item-1',
            in_order: true,
            options: [
                { id: 'b-opt', active: true },
                { id: 'a-opt', active: true },
            ] as any,
        });
        expect(item.custom_id).toBe('item-1[a-opt+b-opt]');
        expect(new CateringItem({ id: 'item-1' }).custom_id).toBe(
            'item-1[]menu',
        );
    });
});

describe('CateringOrder', () => {
    const items = [
        { id: 'item-1', quantity: 2, unit_price: 100, caterer: 'cafe' },
        { id: 'item-2', quantity: 0, unit_price: 100, caterer: 'cafe' },
        { id: 'item-3', quantity: 1, unit_price: 200, caterer: 'other' },
    ];

    it('should keep items with quantity from the matching caterer', () => {
        const order = new CateringOrder({
            caterer: 'cafe',
            items: items as any,
        });
        expect(order.items.map((_) => _.id)).toEqual(['item-1']);
        expect(order.item_count).toBe(2);
        expect(order.total_cost).toBe(200);
    });

    it('should default status to accepted', () => {
        expect(new CateringOrder().status).toBe('accepted');
    });

    it('should deliver at the event time by default', () => {
        const event_date = new Date(2024, 0, 10, 10, 0).valueOf();
        const order = new CateringOrder({
            event: { date: event_date } as any,
        });
        expect(order.deliver_at).toBe(event_date);
    });

    it('should apply delivery time and offsets', () => {
        const event_date = new Date(2024, 0, 10, 10, 0).valueOf();
        const order = new CateringOrder({
            event: { date: event_date } as any,
            deliver_time: 14.5,
            deliver_offset: 15,
        });
        expect(order.deliver_at).toBe(
            set(event_date, { hours: 14, minutes: 45 }).valueOf(),
        );
    });

    it('should serialise status and remove internal state', () => {
        const order = new CateringOrder({
            id: 'order-1',
            status: 'preparing',
            event: { date: Date.now() } as any,
        });
        const json = order.toJSON();
        expect(json.status).toBe('preparing');
        expect(json.event).toBeUndefined();
        expect(json._status).toBeUndefined();
        expect(json._time).toBeUndefined();
    });
});
