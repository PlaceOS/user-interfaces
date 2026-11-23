import { signal } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { createServiceFactory, SpectatorService } from '@ngneat/spectator';
import { MockProvider } from 'ng-mocks';
import { of } from 'rxjs';

import type { MatSnackBar } from '@angular/material/snack-bar';
import {
    Building,
    OrganisationService,
    setNotifyOutlet,
} from '@placeos/common';

import {
    CheckoutCancelledError,
    PaymentCheckoutData,
    PaymentEndedError,
    PaymentWindowClosedError,
} from '../lib/payment-checkout-modal.component';
import type { Payment, PaymentQuote } from '../lib/payment.types';
import { isPaymentContext, PaymentsService } from '../lib/payments.service';

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

    it('takes payments only in a secure context or on a local host', () => {
        const page = (isSecureContext: boolean, hostname: string) =>
            isPaymentContext({
                isSecureContext,
                location: { hostname } as Location,
            });
        expect(page(true, 'placeos.example.com')).toBe(true);
        expect(page(false, 'placeos.example.com')).toBe(false);
        expect(page(false, '192.168.1.20')).toBe(false);
        expect(page(false, 'localhost')).toBe(true);
        expect(page(false, '127.0.0.1')).toBe(true);
        expect(page(false, '[::1]')).toBe(true);
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

    it('starts a checkout for the accepted total and shows the hosted page', async () => {
        driver.quote = () => QUOTE;
        driver.create_checkout = vi.fn(() => ({
            payment_id: 'pay-1',
            status: 'pending',
            url: 'https://pay.example.com/cs-1',
        }));
        driver.get_payment = () => payment('authorized');
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        const data: PaymentCheckoutData = dialog_open.mock.calls[0][1].data;
        const window_ref = { closed: false, location: { href: '' } };
        const paid = await data.pay({
            window: window_ref as unknown as Window,
        });
        expect(driver.create_checkout).toHaveBeenCalledWith(
            expect.objectContaining({ expected_total: QUOTE.total }),
        );
        expect(window_ref.location.href).toBe('https://pay.example.com/cs-1');
        expect(paid).toEqual(payment('authorized'));
    });

    /** Open a checkout and get the actions that the modal gets */
    const openCheckout = async (): Promise<PaymentCheckoutData> => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        return dialog_open.mock.calls[0][1].data;
    };

    it('sends the same idempotency key when the user retries a failed checkout', async () => {
        const data = await openCheckout();
        const create = vi
            .fn()
            .mockRejectedValueOnce({ msg: 'Timeout' })
            .mockReturnValue({ payment_id: 'pay-1', status: 'authorized' });
        driver.create_checkout = create;
        driver.get_payment = () => payment('authorized');
        const keys = () => create.mock.calls.map(([_]) => _.idempotency_key);

        await expect(data.pay({ method_id: 'pm-1' })).rejects.toBe('Timeout');
        await data.pay({ method_id: 'pm-1' });
        // The payment exists, so the next attempt is a new payment
        await data.pay({ method_id: 'pm-1' });

        expect(keys()[1]).toBe(keys()[0]);
        expect(keys()[2]).not.toBe(keys()[0]);
    });

    it('sends a new idempotency key when the user picks another method', async () => {
        const data = await openCheckout();
        const create = vi.fn().mockRejectedValue({ msg: 'Timeout' });
        driver.create_checkout = create;

        await expect(data.pay({ method_id: 'pm-1' })).rejects.toBe('Timeout');
        await expect(data.pay({ method_id: 'pm-2' })).rejects.toBe('Timeout');

        const [first, second] = create.mock.calls.map(
            ([_]) => _.idempotency_key,
        );
        expect(second).not.toBe(first);
    });

    it('accepts a reopened payment that completes before the new link', async () => {
        const data = await openCheckout();
        const states: Payment['status'][] = ['pending', 'authorized'];
        driver.get_payment = () => payment(states.shift() || 'authorized');
        driver.get_payment_link = () => Promise.reject({ msg: 'Not open' });
        driver.cancel_payment = vi.fn();

        await expect(data.resume('pay-1', {})).resolves.toEqual(
            payment('authorized'),
        );
        expect(driver.cancel_payment).not.toHaveBeenCalled();
    });

    it('tries a failed capture again, up to 3 times', async () => {
        vi.useFakeTimers();
        const reference = { type: 'booking' as const, id: 'booking-1' };
        driver.capture_payment = vi
            .fn()
            .mockRejectedValueOnce({ msg: 'Timeout' })
            .mockReturnValue(payment('succeeded'));
        const done = spectator.service.capture(
            payment('authorized'),
            reference,
        );
        await vi.advanceTimersByTimeAsync(1_000);
        await expect(done).resolves.toEqual(payment('succeeded'));

        driver.capture_payment = vi.fn().mockRejectedValue({ msg: 'Expired' });
        const failed = spectator.service.capture(
            payment('authorized'),
            reference,
        );
        const result = expect(failed).rejects.toBe('Expired');
        await vi.advanceTimersByTimeAsync(5_000);
        await result;
        expect(driver.capture_payment).toHaveBeenCalledTimes(3);
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

    it('keeps the payment open when the user closes the hosted page', async () => {
        vi.useFakeTimers();
        driver.get_payment = () => payment('pending');
        driver.cancel_payment = vi.fn(() => payment('cancelled'));
        const done = spectator.service.waitForPayment('pay-1', {
            window: { closed: true } as Window,
        });
        const result = expect(done).rejects.toEqual(
            new PaymentWindowClosedError('pay-1'),
        );
        await vi.advanceTimersByTimeAsync(10_000);
        await result;
        expect(driver.cancel_payment).not.toHaveBeenCalled();
    });

    it('cancels the payment when the user stops waiting', async () => {
        vi.useFakeTimers();
        driver.get_payment = () => payment('pending');
        driver.cancel_payment = vi.fn(() => payment('cancelled'));
        const abort = new AbortController();
        const done = spectator.service.waitForPayment('pay-1', {
            signal: abort.signal,
        });
        const result = expect(done).rejects.toBeInstanceOf(
            CheckoutCancelledError,
        );
        abort.abort();
        await vi.advanceTimersByTimeAsync(5_000);
        await result;
        expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
    });

    it('cancels the payment when the user stops while a check runs', async () => {
        const abort = new AbortController();
        driver.get_payment = () => {
            abort.abort();
            return payment('authorized');
        };
        driver.cancel_payment = vi.fn(() => payment('cancelled'));
        await expect(
            spectator.service.waitForPayment('pay-1', { signal: abort.signal }),
        ).rejects.toBeInstanceOf(CheckoutCancelledError);
        expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
    });

    it('cancels a reopened payment when the user stops during the first check', async () => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        const data: PaymentCheckoutData = dialog_open.mock.calls[0][1].data;
        const abort = new AbortController();
        driver.get_payment = () => {
            abort.abort();
            return payment('authorized');
        };
        driver.cancel_payment = vi.fn(() => payment('cancelled'));
        await expect(
            data.resume('pay-1', { signal: abort.signal }),
        ).rejects.toBeInstanceOf(CheckoutCancelledError);
        expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
    });

    it.each([
        ['the first check', 'get_payment'],
        ['the link request', 'get_payment_link'],
    ])(
        'cancels a reopened payment when the user stops and %s fails',
        async (_, method) => {
            driver.quote = () => QUOTE;
            dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
            await spectator.service.checkout({
                description: 'Room 1',
                items: [{ resource_type: 'room', resource_id: 'room-1' }],
            });
            const data: PaymentCheckoutData = dialog_open.mock.calls[0][1].data;
            const abort = new AbortController();
            driver.get_payment = () => payment('pending');
            driver[method] = () => {
                abort.abort();
                return Promise.reject({ msg: 'Network error' });
            };
            driver.cancel_payment = vi.fn(() => payment('cancelled'));
            await expect(
                data.resume('pay-1', { signal: abort.signal }),
            ).rejects.toBeInstanceOf(CheckoutCancelledError);
            expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
        },
    );

    it('cancels the payment and shows the error after 3 failed checks', async () => {
        vi.useFakeTimers();
        // PlaceOS rejects with the error of the driver in `msg`
        driver.get_payment = () =>
            Promise.reject({ code: 7, msg: 'Provider unavailable' });
        const get_payment = vi.spyOn(driver, 'get_payment');
        let checks_before_cancel = 0;
        driver.cancel_payment = vi.fn(() => {
            checks_before_cancel = get_payment.mock.calls.length;
            return payment('cancelled');
        });
        const done = spectator.service.waitForPayment('pay-1');
        // The payment is cancelled, so the user can pay again
        const result = expect(done).rejects.toEqual(
            new PaymentEndedError('Provider unavailable'),
        );
        await vi.advanceTimersByTimeAsync(10_000);
        await result;
        expect(driver.cancel_payment).toHaveBeenCalledWith('pay-1');
        // Not on the first failure, as it can be brief
        expect(checks_before_cancel).toBe(3);
    });

    it('keeps the payment open with the error when the cancel fails', async () => {
        driver.get_payment = () => payment('pending');
        driver.cancel_payment = () => Promise.reject({ msg: 'Network error' });
        const abort = new AbortController();
        abort.abort();
        await expect(
            spectator.service.waitForPayment('pay-1', { signal: abort.signal }),
        ).rejects.toEqual(
            new PaymentWindowClosedError('pay-1', 'Network error'),
        );
    });

    it('does not accept a reopened payment that was refunded', async () => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        const data: PaymentCheckoutData = dialog_open.mock.calls[0][1].data;
        driver.get_payment = () => payment('refunded');
        await expect(data.resume('pay-1', {})).rejects.toBeInstanceOf(
            PaymentEndedError,
        );
    });

    it('keeps a partly refunded payment open, as a part of it is still taken', async () => {
        driver.quote = () => QUOTE;
        dialog_open.mockReturnValue({ afterClosed: () => of(undefined) });
        await spectator.service.checkout({
            description: 'Room 1',
            items: [{ resource_type: 'room', resource_id: 'room-1' }],
        });
        const data: PaymentCheckoutData = dialog_open.mock.calls[0][1].data;
        driver.create_checkout = () => ({
            payment_id: 'pay-1',
            status: 'pending',
        });
        driver.get_payment = () => payment('partially_refunded');
        await expect(data.pay({})).rejects.toEqual(
            new PaymentWindowClosedError('pay-1', 'PAYMENTS.PAYMENT_FAILED'),
        );
    });

    it('does not cancel a payment of a saved booking when the checks fail', async () => {
        vi.useFakeTimers();
        const reference = { type: 'booking' as const, id: 'booking-1' };
        const states: Payment['status'][] = ['pending'];
        // The first check passes, then the provider is unavailable
        driver.get_payment = () => {
            const status = states.shift();
            return status
                ? payment(status)
                : Promise.reject({ msg: 'Provider unavailable' });
        };
        driver.get_payment_link = () => ({
            id: 'cs-1',
            url: 'https://pay.example.com/cs-1',
            expires_at: 0,
        });
        driver.cancel_payment = vi.fn();
        const done = spectator.service.completePayment(
            { ...payment('pending'), reference },
            { closed: false, location: { href: '' } } as unknown as Window,
        );
        const result = expect(done).rejects.toBe('Provider unavailable');
        await vi.advanceTimersByTimeAsync(10_000);
        await result;
        expect(driver.cancel_payment).not.toHaveBeenCalled();
    });

    it('completes an open payment on a new link and captures it for its reference', async () => {
        vi.useFakeTimers();
        const reference = { type: 'booking' as const, id: 'booking-1' };
        const window_ref = { closed: false, location: { href: '' } };
        driver.get_payment_link = vi.fn(() => ({
            id: 'cs-1',
            url: 'https://pay.example.com/cs-1',
            expires_at: 0,
        }));
        const states: Payment['status'][] = ['pending', 'authorized'];
        driver.get_payment = () => payment(states.shift() || 'authorized');
        driver.capture_payment = vi.fn(() => payment('succeeded'));
        const done = spectator.service.completePayment(
            { ...payment('pending'), reference },
            window_ref as unknown as Window,
        );
        await vi.advanceTimersByTimeAsync(5_000);
        await expect(done).resolves.toEqual(payment('succeeded'));
        expect(window_ref.location.href).toBe('https://pay.example.com/cs-1');
        expect(driver.capture_payment).toHaveBeenCalledWith(
            'pay-1',
            reference,
            [],
        );
    });

    it('captures a payment that went through after the page closed, with no new link', async () => {
        const reference = { type: 'booking' as const, id: 'booking-1' };
        const window_ref = { close: vi.fn() };
        driver.get_payment_link = vi.fn();
        driver.get_payment = () => payment('authorized');
        driver.capture_payment = vi.fn(() => payment('succeeded'));
        await expect(
            spectator.service.completePayment(
                { ...payment('pending'), reference },
                window_ref as unknown as Window,
            ),
        ).resolves.toEqual(payment('succeeded'));
        expect(driver.get_payment_link).not.toHaveBeenCalled();
        expect(window_ref.close).toHaveBeenCalled();
    });

    it('shows a payment that is still open when the wait times out, and does not cancel it', async () => {
        vi.useFakeTimers();
        const reference = { type: 'booking' as const, id: 'booking-1' };
        driver.get_payment_link = () => ({
            id: 'cs-1',
            url: 'https://pay.example.com/cs-1',
            expires_at: 0,
        });
        driver.get_payment = () => payment('pending');
        driver.cancel_payment = vi.fn();
        const done = spectator.service.completePayment(
            { ...payment('pending'), reference },
            { closed: false, location: { href: '' } } as unknown as Window,
        );
        await vi.advanceTimersByTimeAsync(15 * 60_000);
        await expect(done).resolves.toEqual(payment('pending'));
        expect(driver.cancel_payment).not.toHaveBeenCalled();
    });

    it('does not complete a payment when the browser blocks the window', async () => {
        const reference = { type: 'booking' as const, id: 'booking-1' };
        driver.get_payment_link = vi.fn();
        await expect(
            spectator.service.completePayment(
                { ...payment('pending'), reference },
                null,
            ),
        ).rejects.toBe('PAYMENTS.POPUP_BLOCKED');
        expect(driver.get_payment_link).not.toHaveBeenCalled();
    });

    it('shows the payment ID when a release fails', async () => {
        const open = vi.fn(() => ({ onAction: () => of(), dismiss: vi.fn() }));
        setNotifyOutlet({ open } as unknown as MatSnackBar, true);
        driver.cancel_payment = () => Promise.reject({ msg: 'Provider down' });

        await spectator.service.release(payment('authorized'));

        setNotifyOutlet(null, true);
        expect(open).toHaveBeenCalledWith(
            'PAYMENTS.RELEASE_FAILED',
            expect.anything(),
            expect.anything(),
        );
    });

    it('does not complete a payment without a reference', async () => {
        driver.get_payment_link = vi.fn();
        await expect(
            spectator.service.completePayment(payment('pending'), null),
        ).rejects.toBe('PAYMENTS.NO_REFERENCE');
        expect(driver.get_payment_link).not.toHaveBeenCalled();
    });
});
