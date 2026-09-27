import { CateringItem, CateringOrder } from '@placeos/common';

import { deliveryRuns, prepSummary } from '../lib/catering-order-tools';

const item = (name: string, quantity: number, options: string[] = []) =>
    new CateringItem({
        name,
        quantity,
        options: options.map((name, i) => ({
            id: `${name}-${i}`,
            name,
            group: '',
            multiple: false,
            unit_price: 0,
            active: true,
        })),
    });

const order = (
    id: string,
    status: CateringOrder['status'],
    items: CateringItem[],
) => new CateringOrder({ id, status, items });

describe('catering order tools', () => {
    it('should add up items to make, without cancelled orders', () => {
        const summary = prepSummary([
            order('1', 'accepted', [item('Coffee', 2, ['Oat milk'])]),
            order('2', 'ready', [item('Coffee', 1), item('Muffin', 3)]),
            order('3', 'cancelled', [item('Coffee', 5)]),
        ]);

        expect(summary).toEqual([
            {
                name: 'Coffee',
                total: 3,
                remaining: 2,
                variants: [
                    { options: 'Oat milk', total: 2 },
                    { options: '', total: 1 },
                ],
            },
            {
                name: 'Muffin',
                total: 3,
                remaining: 0,
                variants: [{ options: '', total: 3 }],
            },
        ]);
    });

    it('should group ready orders by level', () => {
        const orders = [
            order('1', 'ready', []),
            order('2', 'preparing', []),
            order('3', 'ready', []),
        ];
        const levels = { '1': 'L1', '3': 'L2' };
        const runs = deliveryRuns(orders, (o) => ({
            id: levels[o.id],
            name: levels[o.id],
        }));

        expect(runs.map((run) => run.id)).toEqual(['L1', 'L2']);
        expect(runs.flatMap((run) => run.orders.map((o) => o.id))).toEqual([
            '1',
            '3',
        ]);
    });
});
