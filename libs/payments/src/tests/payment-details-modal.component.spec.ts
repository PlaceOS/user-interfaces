import { signal } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { createComponentFactory, Spectator } from '@ngneat/spectator/vitest';
import { MockProvider } from 'ng-mocks';

import { setCurrentUser, StaffUser } from '@placeos/common';
import {
    PaymentDetailsData,
    PaymentDetailsModalComponent,
} from '../lib/payment-details-modal.component';
import type { Invoice, Payment, PaymentCapability } from '../lib/payment.types';
import { PaymentsService } from '../lib/payments.service';

describe('PaymentDetailsModalComponent', () => {
    let spectator: Spectator<PaymentDetailsModalComponent>;
    let data: PaymentDetailsData;
    /** Responses of the driver by method name */
    let driver: Record<
        string,
        ReturnType<typeof vi.fn<(...args: unknown[]) => unknown>>
    >;
    const privileged = signal(true);
    const capabilities: PaymentCapability[] = ['invoices'];
    const capture = vi.fn();

    const payment = (changes: Partial<Payment> = {}) =>
        ({
            id: 'pay-1',
            status: 'succeeded',
            amount: 2500,
            amount_refunded: 0,
            currency: 'AUD',
            description: 'Desk 1',
            items: [],
            user_email: 'payer@test.com',
            user_name: 'Payer',
            created_at: 0,
            ...changes,
        }) as Payment;
    const invoice = (status: Invoice['status']) =>
        ({ id: 'inv-1', number: '', status, created_at: 0 }) as Invoice;

    const createComponent = createComponentFactory({
        component: PaymentDetailsModalComponent,
        providers: [
            { provide: MAT_DIALOG_DATA, useFactory: () => data },
            { provide: MatDialogRef, useValue: { disableClose: false } },
            MockProvider(PaymentsService, {
                privileged,
                hasCapability: (capability: PaymentCapability) =>
                    capabilities.includes(capability),
                call: ((method: string, ...args: unknown[]) =>
                    Promise.resolve(
                        driver[method](...args),
                    )) as unknown as PaymentsService['call'],
                capture: capture as unknown as PaymentsService['capture'],
            }),
        ],
        detectChanges: false,
    });

    beforeEach(() => {
        setCurrentUser(
            new StaffUser({ email: 'staff@test.com', name: 'Staff' }),
        );
        privileged.set(true);
        capabilities.splice(0, capabilities.length, 'invoices');
        capture.mockReset();
        driver = { list_invoices: vi.fn(() => ({ items: [] })) };
    });

    it('sends the same refund ID on a retry, and a new ID for changed values or a new refund', async () => {
        capabilities.push('refunds');
        data = { payment: payment() };
        driver.refund_payment = vi
            .fn()
            .mockRejectedValueOnce('Timeout')
            .mockRejectedValueOnce('Timeout')
            .mockReturnValue(
                payment({ status: 'partially_refunded', amount_refunded: 500 }),
            );
        spectator = createComponent();
        spectator.detectChanges();
        const submit = async () => {
            spectator.click('button[name="submit-refund"]');
            await new Promise((resolve) => setTimeout(resolve));
            spectator.detectChanges();
        };

        spectator.click('button[name="refund"]');
        await submit();
        await submit();
        spectator.component.refund_amount.set(5);
        await submit();
        spectator.click('button[name="refund"]');
        await submit();

        const ids = driver.refund_payment.mock.calls.map((args) => args[3]);
        expect(ids[0]).toEqual(expect.any(String));
        expect(ids[1]).toBe(ids[0]);
        expect(ids[2]).not.toBe(ids[1]);
        expect(ids[3]).not.toBe(ids[2]);
    });

    it('lets staff take an authorized payment for the event of the row', async () => {
        const reference = { type: 'event' as const, id: 'event-1' };
        data = {
            payment: payment({ status: 'authorized' }),
            reference,
            exclude_resource_ids: ['room-2'],
        };
        capture.mockResolvedValue(payment({ reference }));
        spectator = createComponent();
        spectator.detectChanges();

        spectator.click('button[name="capture-payment"]');
        await spectator.fixture.whenStable();

        expect(capture).toHaveBeenCalledWith(data.payment, reference, [
            'room-2',
        ]);
        expect(spectator.component.payment().status).toBe('succeeded');
    });

    it.each([
        ['without the booking of the row', { status: 'authorized' }, false],
        ['for a payment that has a reference', { status: 'authorized' }, true],
        ['for a payment that is not authorized', { status: 'pending' }, true],
    ] as const)('does not offer to take a payment %s', (_, changes, row) => {
        const reference = { type: 'booking' as const, id: 'booking-1' };
        data = {
            payment: payment({
                ...changes,
                reference:
                    row && changes.status === 'authorized'
                        ? reference
                        : undefined,
            }),
            reference: row ? reference : undefined,
        };
        spectator = createComponent();
        spectator.detectChanges();
        expect(spectator.query('button[name="capture-payment"]')).toBeFalsy();
    });

    it('sends the same invoice again when the send fails, with no new request', async () => {
        data = { payment: payment() };
        driver.request_invoice = vi.fn(() => invoice('requested'));
        driver.send_invoice = vi
            .fn()
            .mockRejectedValueOnce('Mail error')
            .mockReturnValue(invoice('open'));
        spectator = createComponent();
        spectator.detectChanges();
        await spectator.fixture.whenStable();

        spectator.component.billing_email.set('billing@test.com');
        await spectator.component.requestInvoice();
        spectator.detectChanges();
        spectator.click('button[name="send-invoice"]');
        await spectator.fixture.whenStable();

        expect(driver.request_invoice).toHaveBeenCalledTimes(1);
        expect(driver.send_invoice.mock.calls).toEqual([
            ['inv-1', 'billing@test.com'],
            // `null` keeps the billing address of the invoice
            ['inv-1', null],
        ]);
        expect(spectator.component.invoice()?.status).toBe('open');
    });
});
