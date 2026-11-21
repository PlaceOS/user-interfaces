import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';

import {
    PaymentCheckoutData,
    PaymentCheckoutModalComponent,
    PaymentWindowClosedError,
} from '../lib/payment-checkout-modal.component';
import type { Payment } from '../lib/payment.types';

describe('PaymentCheckoutModalComponent', () => {
    let spectator: Spectator<PaymentCheckoutModalComponent>;
    let data: PaymentCheckoutData;
    const close = vi.fn();
    /** Payment window that the browser did not block */
    const popup = () =>
        ({ close: vi.fn(), opener: window }) as unknown as Window;

    const createComponent = createComponentFactory({
        component: PaymentCheckoutModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            { provide: MatDialogRef, useValue: { close } },
        ],
    });

    beforeEach(() => {
        close.mockReset();
        data = {
            quote: {
                currency: 'AUD',
                items: [],
                subtotal: 2500,
                tax: 0,
                total: 2500,
            },
            description: 'Room 1',
            methods: [
                {
                    id: 'pm-1',
                    type: 'card',
                    brand: 'visa',
                    last4: '4242',
                    exp_month: 1,
                    exp_year: 2030,
                    is_default: true,
                },
            ],
            can_save_method: true,
            pay: vi.fn(async () => ({ id: 'pay-1' }) as Payment),
            resume: vi.fn(async () => ({ id: 'pay-1' }) as Payment),
            cancel: vi.fn(async () => null),
        };
        spectator = createComponent();
    });

    it('charges the default saved method without a payment window', async () => {
        const open = vi.spyOn(window, 'open');
        await spectator.component.pay();
        expect(open).not.toHaveBeenCalled();
        expect(data.pay).toHaveBeenCalledWith(
            expect.objectContaining({ method_id: 'pm-1', window: null }),
        );
        expect(close).toHaveBeenCalledWith({ id: 'pay-1' });
    });

    it('shows the error and stays open when the payment fails', async () => {
        data.pay = vi.fn(async () => {
            throw 'Card declined';
        });
        await spectator.component.pay();
        spectator.detectChanges();
        expect(close).not.toHaveBeenCalled();
        expect(spectator.component.error()).toBe('Card declined');
        expect(spectator.query('[name="pay"]')).toBeTruthy();
    });

    it('offers to reopen or cancel when the user closes the payment window', async () => {
        vi.spyOn(window, 'open').mockReturnValue(popup());
        data.pay = vi.fn(async () => {
            throw new PaymentWindowClosedError('pay-1');
        });
        await spectator.component.pay();
        spectator.detectChanges();
        expect(spectator.component.view()).toBe('closed');
        expect(close).not.toHaveBeenCalled();

        await spectator.component.reopen();
        expect(data.resume).toHaveBeenCalledWith('pay-1', expect.anything());
        expect(close).toHaveBeenCalledWith({ id: 'pay-1' });
    });

    it('cancels the open payment and goes back to the review', async () => {
        vi.spyOn(window, 'open').mockReturnValue(null);
        data.pay = vi.fn(async () => {
            throw new PaymentWindowClosedError('pay-1');
        });
        await spectator.component.pay();
        await spectator.component.cancelPayment();
        expect(data.cancel).toHaveBeenCalledWith('pay-1');
        expect(spectator.component.view()).toBe('review');
    });

    it('does not start a payment with a new method when the browser blocks the window', async () => {
        vi.spyOn(window, 'open').mockReturnValue(null);
        spectator.component.method_id.set('');
        await spectator.component.pay();
        expect(data.pay).not.toHaveBeenCalled();
        expect(spectator.component.error()).toBe('PAYMENTS.POPUP_BLOCKED');
    });

    it('stays on the open payment when the cancel fails', async () => {
        data.pay = vi.fn(async () => {
            throw new PaymentWindowClosedError('pay-1');
        });
        data.cancel = vi.fn(async () => {
            throw 'Network error';
        });
        await spectator.component.pay();
        await spectator.component.cancelPayment();
        expect(spectator.component.view()).toBe('closed');
        expect(spectator.component.error()).toBe('Network error');
    });

    it('stays on the open payment with the error when its cancel fails', async () => {
        data.pay = vi.fn(async () => {
            throw new PaymentWindowClosedError('pay-1', 'Network error');
        });
        await spectator.component.pay();
        expect(spectator.component.view()).toBe('closed');
        expect(spectator.component.error()).toBe('Network error');
    });

    it('stays on the open payment when it fails to reopen', async () => {
        vi.spyOn(window, 'open').mockReturnValue(popup());
        data.pay = vi.fn(async () => {
            throw new PaymentWindowClosedError('pay-1');
        });
        data.resume = vi.fn(async () => {
            throw 'Link expired';
        });
        await spectator.component.pay();
        await spectator.component.reopen();
        // The user can reopen or cancel it, but cannot pay a second time
        expect(data.cancel).not.toHaveBeenCalled();
        expect(spectator.component.view()).toBe('closed');
        expect(spectator.component.error()).toBe('Link expired');
    });
});
