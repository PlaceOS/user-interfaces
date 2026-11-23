import { MockPlaceWebsocketModule } from '@placeos/ts-client';

import type { Payment } from 'libs/payments/src/lib/payment.types';
import { MOCK_LEVELS } from '../lib/api/zone.data';
import { createPaymentsModule } from '../lib/realtime/payments';

describe('Mock payments module', () => {
    /** Module as the mock system wraps it, so only `$` methods and fields are kept */
    const createModule = () =>
        new MockPlaceWebsocketModule(null as never, createPaymentsModule({}));

    it('prices a desk from its product and catering from the menu', () => {
        const quote = createModule().call('quote', [
            [
                { resource_type: 'desk', resource_id: 'desk-1', duration: 480 },
                {
                    resource_type: 'catering',
                    resource_id: 'bev-001',
                    quantity: 2,
                },
            ],
        ]);
        expect(quote.items.map((_) => _.amount)).toEqual([1500, 900]);
        expect(quote.total).toBe(2400);
    });

    it('prices the catering assets that the meeting form orders', () => {
        const quote = createModule().call('quote', [
            [
                {
                    resource_type: 'catering',
                    resource_id: 'catering-coffee',
                    quantity: 2,
                },
            ],
        ]);
        expect(quote.total).toBe(700);
    });

    it('prices a resource on a level with a product of its building', () => {
        const mod = createModule();
        const level = MOCK_LEVELS[0];
        mod.call('save_product', [
            {
                name: 'Building rooms',
                description: '',
                active: true,
                resource_type: 'room',
                resource_ids: [],
                zone_ids: [level.parent_id],
                unit: 'booking',
                unit_amount: 5000,
                currency: 'AUD',
            },
        ]);
        const quote = mod.call('quote', [
            [
                {
                    resource_type: 'room',
                    resource_id: 'room-1',
                    zone_id: level.id,
                },
            ],
        ]);
        expect(quote.total).toBe(5000);
    });

    it('authorizes a saved method, then captures it with the reference', () => {
        const mod = createModule();
        const { total } = mod.call('quote', [
            [{ resource_type: 'desk', resource_id: 'desk-1', duration: 60 }],
        ]);
        const session = mod.call('create_checkout', [
            {
                idempotency_key: 'key-1',
                items: [
                    {
                        resource_type: 'desk',
                        resource_id: 'desk-1',
                        duration: 60,
                    },
                ],
                expected_total: total,
                description: 'Desk 1',
                payment_method_id: 'pm-visa',
                return_url: '',
                cancel_url: '',
            },
        ]);
        expect(session.status).toBe('authorized');
        const payment = mod.call('capture_payment', [
            session.payment_id,
            { type: 'booking', id: 'booking-1' },
            [],
        ]);
        expect(payment.status).toBe('succeeded');
        expect(payment.reference.id).toBe('booking-1');
        // A retry for the same booking returns the payment with no error
        const retry = mod.call('capture_payment', [
            session.payment_id,
            { type: 'booking', id: 'booking-1' },
            [],
        ]);
        expect(retry.status).toBe('succeeded');
        // A cancel after a part refund refunds the rest
        mod.call('refund_payment', [session.payment_id, 100, '']);
        const cancelled = mod.call('cancel_payment', [session.payment_id]);
        expect(cancelled.status).toBe('refunded');
    });

    it('returns the first session for a repeated idempotency key', () => {
        const mod = createModule();
        const request = {
            idempotency_key: 'key-1',
            items: [{ resource_type: 'desk', resource_id: 'desk-1' }],
            expected_total: mod.call('quote', [
                [{ resource_type: 'desk', resource_id: 'desk-1' }],
            ]).total,
            description: '',
            return_url: '',
            cancel_url: '',
        };
        const first = mod.call('create_checkout', [request]);
        const retry = mod.call('create_checkout', [request]);
        expect(retry.payment_id).toBe(first.payment_id);
        const other = mod.call('create_checkout', [
            { ...request, idempotency_key: 'key-2' },
        ]);
        expect(other.payment_id).not.toBe(first.payment_id);
    });

    it.each([
        [['desk-2'], 'succeeded', 1500],
        [['desk-1', 'desk-2'], 'cancelled', 0],
    ])(
        'does not take the excluded items %j on capture',
        (exclude, status, amount) => {
            const mod = createModule();
            const items = ['desk-1', 'desk-2'].map((resource_id) => ({
                resource_type: 'desk',
                resource_id,
                duration: 480,
            }));
            const session = mod.call('create_checkout', [
                {
                    idempotency_key: 'key-1',
                    items,
                    expected_total: mod.call('quote', [items]).total,
                    description: '',
                    payment_method_id: 'pm-visa',
                    return_url: '',
                    cancel_url: '',
                },
            ]);
            const payment = mod.call('capture_payment', [
                session.payment_id,
                { type: 'event', id: 'event-1' },
                exclude,
            ]);
            expect(payment.status).toBe(status);
            expect(payment.amount).toBe(amount);
        },
    );

    it('refuses a checkout when the total changed', () => {
        expect(() =>
            createModule().call('create_checkout', [
                {
                    idempotency_key: 'key-1',
                    items: [{ resource_type: 'desk', resource_id: 'desk-1' }],
                    expected_total: 1,
                    description: '',
                    return_url: '',
                    cancel_url: '',
                },
            ]),
        ).toThrow();
    });

    it('gives a new link only for an open payment', () => {
        const mod = createModule();
        const page = mod.call('list_payments', [{ status: 'pending' }]);
        const open = page.items[0];
        expect(
            mod.call('get_payment_link', [open.id, 'https://app/done']).url,
        ).toBe('https://app/done');
        const paid = mod.call('list_payments', [{ status: 'succeeded' }])
            .items[0];
        expect(() =>
            mod.call('get_payment_link', [paid.id, 'https://app/done']),
        ).toThrow();
    });

    it('makes the payment that a mock booking links to on the first read', () => {
        const mod = createModule();
        const payment = mod.call('get_payment', ['pay-linked:booking:42']);
        expect(payment).toMatchObject({
            id: 'pay-linked:booking:42',
            status: 'succeeded',
            reference: { type: 'booking', id: '42' },
        });
        expect(() => mod.call('get_payment', ['pay-unknown'])).toThrow();
    });

    it('gives each new product its own ID', () => {
        const mod = createModule();
        const input = {
            name: 'Projector',
            description: '',
            active: true,
            resource_type: 'service' as const,
            resource_ids: [],
            zone_ids: [],
            unit: 'booking' as const,
            unit_amount: 1000,
            currency: 'AUD',
        };
        const first = mod.call('save_product', [input]);
        const second = mod.call('save_product', [input]);
        expect(first.id).toMatch(/^prod-/);
        expect(second.id).not.toBe(first.id);
    });

    it('refunds once for a repeated request ID', () => {
        const mod = createModule();
        const [paid] = mod
            .call('list_payments', [{ limit: 100 }])
            .items.filter((_: Payment) => _.status === 'succeeded');
        const before = paid.amount_refunded;
        mod.call('refund_payment', [paid.id, 100, '', 'refund-1']);
        const retry = mod.call('refund_payment', [
            paid.id,
            100,
            '',
            'refund-1',
        ]);
        expect(retry.amount_refunded).toBe(before + 100);
    });
});
