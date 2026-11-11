import { CateringItem, CateringOrder } from '@placeos/common';

import {
    deliveryRuns,
    diffOrders,
    ordersToCsvRows,
    prepSummary,
} from '../lib/catering-order-tools';

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

    it('should put ready orders with no known level in one run', () => {
        const at = (id: string, hour: number) =>
            new CateringOrder({
                id,
                status: 'ready',
                event: { date: new Date(2026, 0, 1, hour).valueOf() } as any,
            });

        const runs = deliveryRuns([at('late', 11), at('early', 9)], () => null);

        expect(runs).toHaveLength(1);
        expect(runs[0].id).toBe('');
        expect(runs[0].orders.map((o) => o.id)).toEqual(['early', 'late']);
    });

    it('should find new and cancelled orders', () => {
        const previous = [
            order('1', 'accepted', []),
            order('2', 'ready', []),
            order('4', 'cancelled', []),
        ];
        const next = [
            order('1', 'cancelled', []),
            order('2', 'ready', []),
            order('3', 'pending', []),
            // Already cancelled before, or cancelled before it was seen
            order('4', 'cancelled', []),
            order('5', 'cancelled', []),
        ];

        const changes = diffOrders(previous, next);

        expect(changes.added.map((o) => o.id)).toEqual(['3']);
        expect(changes.cancelled.map((o) => o.id)).toEqual(['1']);
    });

    it('should list order items in CSV rows', () => {
        const [row] = ordersToCsvRows([
            order('1', 'accepted', [item('Coffee', 2, ['Oat milk'])]),
        ]);

        expect(row['CATERING.ORDER_SELECTED_HEADER']).toBe(
            '2× Coffee (Oat milk)',
        );
        expect(row['COMMON.STATUS']).toBe('CATERING.STATUS_ACCEPTED');
    });
});
