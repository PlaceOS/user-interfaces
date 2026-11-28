import { InjectionToken } from '@angular/core';
import { i18n } from '@placeos/common';
import { Payment, PaymentMethod, PaymentQuote } from './payment.types';

/*
 * Token, errors, options and helpers of a checkout. They are apart from
 * the checkout modal and `PaymentsService`, so that an app can provide the
 * token, and the service can load the modal only when it opens it. Both stay
 * out of the initial bundle.
 */

/**
 * Whether bookings and events made in this app ask the user to pay. Only
 * apps where users book for themselves provide `true`. Booking panels and
 * staff apps keep the default, `false`.
 */
export const PAYMENT_CHECKOUT = new InjectionToken<boolean>(
    'PAYMENT_CHECKOUT',
    { factory: () => false },
);

/** The user cancelled, or the wait timed out, before the payment completed. The payment is cancelled */
export class CheckoutCancelledError extends Error {
    constructor() {
        super('Payment cancelled');
    }
}

/**
 * The payment is still open, e.g. the user closed the hosted page first, or
 * the cancel failed. `reason` is the error to show, if there is one
 */
export class PaymentWindowClosedError extends Error {
    constructor(
        public readonly payment_id: string,
        public readonly reason = '',
    ) {
        super('Payment window closed');
    }
}

/** The payment ended without payment, e.g. it failed or was refunded. A new payment is safe */
export class PaymentEndedError extends Error {
    constructor(message = '') {
        super(message || i18n('PAYMENTS.PAYMENT_FAILED'));
    }
}

export interface PayOptions {
    /** Saved method to charge. Not set for a new method */
    method_id?: string;
    save_method?: boolean;
    /** Window opened in the click handler for the hosted page */
    window?: Window | null;
    signal?: AbortSignal;
    /** Called with the hosted page URL, so the modal can link to it */
    on_url?: (url: string) => void;
}

export type ResumeOptions = Pick<PayOptions, 'window' | 'signal' | 'on_url'>;

export interface PaymentCheckoutData {
    quote: PaymentQuote;
    description: string;
    methods: PaymentMethod[];
    can_save_method: boolean;
    pay: (options: PayOptions) => Promise<Payment>;
    /** Open the hosted page again for an open payment */
    resume: (payment_id: string, options: ResumeOptions) => Promise<Payment>;
    cancel: (payment_id: string) => Promise<unknown>;
}

/**
 * Empty window for a hosted page. `null` when the browser blocks it. The
 * window gets no `opener`, so the hosted page cannot navigate the app.
 */
export function openPaymentWindow() {
    const window_ref = window.open(
        '',
        'placeos-payment',
        'popup,width=520,height=760',
    );
    if (window_ref) window_ref.opener = null;
    return window_ref;
}
