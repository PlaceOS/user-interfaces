import { CateringItem, CateringOrder } from '@placeos/common';

import { bookingLineItems, cateringLineItems } from '../lib/payment-line-items';

describe('bookingLineItems', () => {
    it('makes one item for each resource of a payable booking', () => {
        const items = bookingLineItems({
            type: 'desk',
            date: 1_700_000_000_000,
            duration: 480,
            resources: [
                { id: 'desk-1', name: 'Desk 1', zone_id: 'lvl-1' },
                { id: '' },
            ],
        });
        expect(items).toEqual([
            {
                resource_type: 'desk',
                resource_id: 'desk-1',
                zone_id: 'lvl-1',
                name: 'Desk 1',
                start: 1_700_000_000,
                duration: 480,
                quantity: 1,
            },
        ]);
    });

    it('has no items for booking types without a price', () => {
        const items = bookingLineItems({
            type: 'visitor',
            date: Date.now(),
            duration: 60,
            resources: [{ id: 'visitor@example.com' }],
        });
        expect(items).toEqual([]);
    });
});

describe('cateringLineItems', () => {
    it('lists ordered items with their selected options', () => {
        const order = new CateringOrder({
            items: [
                new CateringItem({
                    id: 'coffee',
                    name: 'Coffee',
                    quantity: 2,
                    options: [
                        { id: 'oat', name: 'Oat', active: true } as any,
                        { id: 'soy', name: 'Soy', active: false } as any,
                    ],
                }),
                new CateringItem({ id: 'tea', name: 'Tea', quantity: 0 }),
            ],
        });
        expect(cateringLineItems([order], 'bld-1')).toEqual([
            {
                resource_type: 'catering',
                resource_id: 'coffee',
                zone_id: 'bld-1',
                name: 'Coffee',
                quantity: 2,
                option_ids: ['oat'],
            },
        ]);
    });
});
