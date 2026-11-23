import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { BookingPaymentComponent } from '../lib/booking-payment.component';
import { PaymentDetailsModalComponent } from '../lib/payment-details-modal.component';
import type { Payment } from '../lib/payment.types';
import { PaymentsService } from '../lib/payments.service';

describe('BookingPaymentComponent', () => {
    let spectator: Spectator<BookingPaymentComponent>;
    const payment = { id: 'pay-1', status: 'succeeded' } as Payment;
    const enabled = signal(true);
    const call = vi.fn(async () => payment);
    const open = vi.fn();

    const createComponent = createComponentFactory({
        component: BookingPaymentComponent,
        providers: [
            MockProvider(PaymentsService, {
                is_enabled: enabled,
                call: call as unknown as PaymentsService['call'],
            }),
            MockProvider(MatDialog, {
                open: open as unknown as MatDialog['open'],
            }),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        enabled.set(true);
        call.mockClear();
        open.mockClear();
        spectator = createComponent();
    });

    it('shows nothing without a payment or without a payment driver', () => {
        spectator.detectChanges();
        expect(spectator.query('button')).toBeFalsy();

        spectator.setInput('payment_id', 'pay-1');
        enabled.set(false);
        spectator.detectChanges();
        expect(spectator.query('button')).toBeFalsy();
    });

    it('loads the payment and opens its details with the booking of the row', async () => {
        const reference = { type: 'booking' as const, id: 'booking-1' };
        spectator.setInput('payment_id', 'pay-1');
        spectator.setInput('reference', reference);
        spectator.detectChanges();

        spectator.click('button[name="view-payment"]');
        await spectator.fixture.whenStable();

        expect(call).toHaveBeenCalledWith('get_payment', 'pay-1');
        expect(open).toHaveBeenCalledWith(PaymentDetailsModalComponent, {
            data: { payment, reference, exclude_resource_ids: [] },
        });
    });

    it('leaves out the rooms of the payment that the event does not have as accepted', async () => {
        const item = (resource_type: string, resource_id: string) => ({
            resource_type,
            resource_id,
        });
        call.mockResolvedValueOnce({
            ...payment,
            items: [
                item('room', 'room-1'),
                item('room', 'room-2'),
                item('room', 'room-3'),
                item('catering', 'coffee'),
            ],
        } as Payment);
        spectator.setInput('payment_id', 'pay-1');
        spectator.setInput('resources', [
            { id: 'room-1', response_status: 'accepted' },
            { id: 'room-2', response_status: 'declined' },
        ]);
        spectator.detectChanges();

        spectator.click('button[name="view-payment"]');
        await spectator.fixture.whenStable();

        const [, { data }] = open.mock.calls[0];
        expect(data.exclude_resource_ids).toEqual(['room-2', 'room-3']);
    });
});
