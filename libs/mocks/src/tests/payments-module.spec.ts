import { MockPlaceWebsocketModule } from '@placeos/ts-client';

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

    it('authorizes a saved method, then captures it with the reference', () => {
        const mod = createModule();
        const { total } = mod.call('quote', [
            [{ resource_type: 'desk', resource_id: 'desk-1', duration: 60 }],
        ]);
        const session = mod.call('create_checkout', [
            {
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
        ]);
        expect(payment.status).toBe('succeeded');
        expect(payment.reference.id).toBe('booking-1');
    });

    it('refuses a checkout when the total changed', () => {
        expect(() =>
            createModule().call('create_checkout', [
                {
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
});
