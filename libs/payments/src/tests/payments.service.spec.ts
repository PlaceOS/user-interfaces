import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import { Building, OrganisationService } from '@placeos/common';

import { CheckoutCancelledError } from '../lib/payment-checkout-modal.component';
import type { Payment, PaymentQuote } from '../lib/payment.types';
import { PaymentsService } from '../lib/payments.service';

const QUOTE: PaymentQuote = {
    currency: 'AUD',
    items: [],
    subtotal: 2500,
    tax: 0,
    total: 2500,
};

const dialog_open = vi.fn();

const payment = (status: Payment['status']) =>
    ({ id: 'pay-1', status }) as Payment;

describe('PaymentsService', () => {
    let spectator: SpectatorService<PaymentsService>;
    /** Responses of the driver by method name */
    let driver: Record<string, (...args: unknown[]) => unknown>;
    let module: { execute: ReturnType<typeof vi.fn> } | null;

    const createService = createServiceFactory({
        service: PaymentsService,
        providers: [
            MockProvider(OrganisationService, {
                active_building: signal(new Building({ id: 'bld-1' })),
                initialised: signal(true),
                currency_code: 'AUD',
                module: vi.fn(
                    () => module,
                ) as unknown as OrganisationService['module'],
            }),
            MockProvider(MatDialog, {
                open: dialog_open as unknown as MatDialog['open'],
            }),
        ],
    });

    beforeEach(() => {
        dialog_open.mockReset();
        driver = {
            get_config: () => ({
                provider: 'test',
                currency: 'AUD',
                privileged: false,
                capabilities: [],
            }),
        };
        module = {
            execute: vi.fn(async (method: string, args: unknown[] = []) =>
                driver[method](...args),
            ),
        };
        spectator = createService();
    });

    afterEach(() => vi.useRealTimers());

    it('is disabled and rejects calls without a payment driver', async () => {
        module = null;
        expect(spectator.service.enabled).toBe(false);
        await expect(spectator.service.call('get_config')).rejects.toBe(
            'PAYMENTS.NOT_ENABLED',
        );
    });

    it('passes the arguments to the driver in order', async () => {
        driver.refund_payment = () => payment('refunded');
        await spectator.service.call('refund_payment', 'pay-1', 500, 'Late');
        expect(module?.execute).toHaveBeenCalledWith('refund_payment', [
            'pay-1',
            500,
            'Late',
        ]);
    });

    it('does not ask for payment when the items have no price', async () => {
        driver.quote = () => ({ ...QUOTE, total: 0 });
        const result = await spectator.service.checkout({
            description: 'Desk 1',
            items: [{ resource_type: 'desk', resource_id: 'desk-1' }],
        });
        expect(result).toEqual({ status: 'free' });
        expect(dialog_open).not.toHaveBeenCalled();
    });

    it('resolves with the payment that the checkout modal closes with', async () => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({
            afterClosed: () => of(payment('authorized')),
        });
        const result = await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        expect(result).toEqual({
            status: 'paid',
            payment: payment('authorized'),
        });
        expect(dialog_open.mock.calls[0][1].data.quote).toEqual(QUOTE);
    });

    it('resolves as cancelled when the checkout modal closes without a payment', async () => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        const result = await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        expect(result).toEqual({ status: 'cancelled' });
    });

    it('waits until the payment is authorized', async () => {
        vi.useFakeTimers();
        const states: Payment['status'][] = [
            'pending',
            'pending',
            'authorized',
        ];
        driver.get_payment = () => payment(states.shift() || 'authorized');
        const done = spectator.service.waitForPayment('pay-1');
        await vi.advanceTimersByTimeAsync(5_000);
        await expect(done).resolves.toEqual(payment('authorized'));
    });

    it('cancels the payment when the user closes the hosted page', async () => {
        vi.useFakeTimers();
        driver.get_payment = () => payment('pending');
        driver.cancel_payment = vi.fn(() => payment('cancelled'));
        const window_ref = { closed: true } as Window;
        const done = spectator.service.waitForPayment('pay-1', {
            window: window_ref,
        });
        const result = expect(done).rejects.toBeInstanceOf(
            CheckoutCancelledError,
        );
        await vi.advanceTimersByTimeAsync(10_000);
        await result;
        expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
    });
});
