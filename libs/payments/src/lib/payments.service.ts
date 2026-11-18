import { computed, inject, Injectable, resource } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { errorMessage, i18n, OrganisationService } from '@placeos/common';
import {
    CheckoutCancelledError,
    PaymentCheckoutData,
    PaymentCheckoutModalComponent,
} from './payment-checkout-modal.component';
import {
    FINAL_PAYMENT_STATES,
    Payment,
    PaymentCapability,
    PaymentDriver,
    PaymentDriverMethod,
    PaymentLineItemRequest,
    PaymentQuote,
    PaymentReference,
} from './payment.types';

/** Zone binding of the payment driver. Set `mod` on the binding to use another module name */
export const PAYMENT_BINDING = 'payments';
export const PAYMENT_MODULE = 'Payments';

/** Time between checks of a payment while the user pays on the hosted page */
const POLL_INTERVAL_MS = 2_000;
/** Upper bound of checks for one payment. 450 checks are 15 minutes */
const MAX_POLLS = 450;

/** Result of a checkout */
export type CheckoutResult =
    /** Nothing to pay. The items have no price */
    | { status: 'free' }
    /** The user cancelled the payment */
    | { status: 'cancelled' }
    /** Payment is authorized or taken. Call `capture` after the booking saves */
    | { status: 'paid'; payment: Payment };

export interface CheckoutDetails {
    items: PaymentLineItemRequest[];
    /** What the payment is for, e.g. the name of the booked desk */
    description: string;
}

/** Options to wait for the result of a payment */
interface WaitOptions {
    /** Hosted payment window. The wait ends early when the user closes it */
    window?: Window | null;
    /** Stops the wait, e.g. when the user cancels in the app */
    signal?: AbortSignal;
}

/**
 * Typed access to the payment driver of the active building, and the
 * checkout flow that bookings and events use. All methods throw when no
 * payment driver is bound, so check `enabled` first.
 */
@Injectable({
    providedIn: 'root',
})
export class PaymentsService {
    private _org = inject(OrganisationService);
    private _dialog = inject(MatDialog);

    /** Whether the active building or the organisation has a payment driver */
    public get enabled(): boolean {
        return !!this._org.module?.(PAYMENT_BINDING, PAYMENT_MODULE);
    }

    /** `enabled` as a signal that updates when the active building changes */
    public readonly is_enabled = computed(() => {
        this._org.active_building();
        return this._org.initialised() && this.enabled;
    });

    private readonly _config = resource({
        params: () =>
            this.is_enabled()
                ? { building: this._org.active_building()?.id }
                : undefined,
        loader: () => this.call('get_config'),
    });

    /** Settings of the driver for the current user. `null` until it loads */
    public readonly config = computed(() =>
        this._config.hasValue() ? this._config.value() : null,
    );

    /** Message of the error when the driver settings fail to load */
    public readonly config_error = computed(() => {
        const error = this._config.error();
        return error ? errorMessage(error) || `${error}` : '';
    });

    /** Whether the current user can manage the payments of all users */
    public readonly privileged = computed(() => !!this.config()?.privileged);

    /** Currency of the driver, else the currency of the building */
    public readonly currency = computed(
        () => this.config()?.currency || this._org.currency_code,
    );

    /** Whether the driver supports the optional feature */
    public hasCapability(capability: PaymentCapability) {
        return !!this.config()?.capabilities?.includes(capability);
    }

    /** Call a method of the payment driver with type checked arguments */
    public async call<M extends PaymentDriverMethod>(
        method: M,
        ...args: Parameters<PaymentDriver[M]>
    ): Promise<ReturnType<PaymentDriver[M]>> {
        const mod = this._org.module(PAYMENT_BINDING, PAYMENT_MODULE);
        if (!mod) throw i18n('PAYMENTS.NOT_ENABLED');
        return mod.execute<ReturnType<PaymentDriver[M]>>(method, args);
    }

    /**
     * Show the price of the items and ask the user to pay. Resolves when the
     * payment is authorized, the user cancels or the items are free.
     * Rejects when the driver fails.
     */
    public async checkout(details: CheckoutDetails): Promise<CheckoutResult> {
        if (!details.items.length) return { status: 'free' };
        const quote = await this.call('quote', details.items);
        if (quote.total <= 0) return { status: 'free' };
        const methods = this.hasCapability('saved_methods')
            ? await this.call('list_payment_methods').catch(() => [])
            : [];
        const data: PaymentCheckoutData = {
            quote,
            description: details.description,
            methods,
            can_save_method: this.hasCapability('saved_methods'),
            pay: (options) => this._pay(details, quote, options),
        };
        const ref = this._dialog.open<
            PaymentCheckoutModalComponent,
            PaymentCheckoutData,
            Payment | undefined
        >(PaymentCheckoutModalComponent, { data, disableClose: true });
        const payment = await new Promise<Payment | undefined>((resolve) =>
            ref.afterClosed().subscribe((result) => resolve(result)),
        );
        return payment ? { status: 'paid', payment } : { status: 'cancelled' };
    }

    /** Take an authorized payment and link it to the saved booking or event */
    public capture(payment: Payment, reference: PaymentReference) {
        return this.call('capture_payment', payment.id, reference);
    }

    /** Release or refund a payment, e.g. when the booking fails to save */
    public cancel(payment: Payment) {
        return this.call('cancel_payment', payment.id);
    }

    /**
     * Open the hosted page to add a payment method. Resolves when the user
     * closes the page.
     */
    public async addPaymentMethod(window_ref = this.openWindow()) {
        const session = await this.call(
            'create_setup_session',
            completeUrl('setup'),
        ).catch((e) => {
            window_ref?.close();
            throw e;
        });
        if (window_ref) window_ref.location.href = session.url;
        else window.open(session.url, '_blank', 'noopener');
        await waitForClose(window_ref);
    }

    /**
     * Open an empty window for a hosted page. Call it in a click handler, so
     * the browser does not block it. `null` when the browser blocks it.
     */
    public openWindow() {
        return window.open('', 'placeos-payment', 'popup,width=520,height=760');
    }

    /**
     * Wait for a payment to reach a final or authorized state. Throws
     * `CheckoutCancelledError` when the user closes the hosted page or
     * cancels before the payment completes.
     */
    public async waitForPayment(
        id: string,
        { window: window_ref, signal }: WaitOptions = {},
    ): Promise<Payment> {
        let closed_checks = 0;
        for (let i = 0; i < MAX_POLLS; i++) {
            if (signal?.aborted) break;
            const payment = await this.call('get_payment', id);
            if (isComplete(payment)) return payment;
            // Check again after the window closes, as the provider can be
            // slow to update the payment.
            if (window_ref?.closed && ++closed_checks > 2) break;
            await delay(POLL_INTERVAL_MS, signal);
        }
        await this.call('cancel_payment', id).catch(() => null);
        throw new CheckoutCancelledError();
    }

    private async _pay(
        details: CheckoutDetails,
        quote: PaymentQuote,
        options: {
            method_id?: string;
            save_method?: boolean;
            window?: Window | null;
            signal?: AbortSignal;
            on_url?: (url: string) => void;
        },
    ) {
        const session = await this.call('create_checkout', {
            items: details.items,
            expected_total: quote.total,
            description: details.description,
            payment_method_id: options.method_id,
            save_method: options.save_method,
            return_url: completeUrl('success'),
            cancel_url: completeUrl('cancel'),
        }).catch((e) => {
            options.window?.close();
            throw e;
        });
        if (session.url) {
            if (options.window) options.window.location.href = session.url;
            options.on_url?.(session.url);
        } else options.window?.close();
        const payment = await this.waitForPayment(session.payment_id, {
            window: options.window,
            signal: options.signal,
        });
        if (payment.status === 'failed' || payment.status === 'cancelled') {
            throw i18n('PAYMENTS.PAYMENT_FAILED');
        }
        return payment;
    }
}

/** Whether the payment can no longer change without action from the app */
function isComplete(payment: Payment) {
    return (
        payment.status === 'authorized' ||
        FINAL_PAYMENT_STATES.includes(payment.status)
    );
}

/** Page that the hosted payment page opens when it is done */
function completeUrl(state: 'success' | 'cancel' | 'setup') {
    const url = new URL('assets/payment-complete.html', document.baseURI);
    url.searchParams.set('state', state);
    return url.href;
}

/** Resolve after `ms`, or early when the signal aborts */
function delay(ms: number, signal?: AbortSignal) {
    return new Promise<void>((resolve) => {
        const timer = setTimeout(resolve, ms);
        signal?.addEventListener('abort', () => {
            clearTimeout(timer);
            resolve();
        });
    });
}

/** Resolve when the window closes. Checks for 30 minutes at most */
async function waitForClose(window_ref: Window | null) {
    if (!window_ref) return;
    for (let i = 0; i < 1_800 && !window_ref.closed; i++) {
        await delay(1_000);
    }
}
