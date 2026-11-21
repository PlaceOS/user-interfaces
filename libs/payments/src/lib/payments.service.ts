import {
    computed,
    inject,
    Injectable,
    InjectionToken,
    resource,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { errorMessage, i18n, OrganisationService } from '@placeos/common';
import {
    CheckoutCancelledError,
    openPaymentWindow,
    PaymentCheckoutData,
    PaymentCheckoutModalComponent,
    PaymentEndedError,
    PaymentWindowClosedError,
    PayOptions,
    ResumeOptions,
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

/**
 * Whether bookings and events made in this app ask the user to pay. Only
 * apps where users book for themselves provide `true`. Booking panels and
 * staff apps keep the default, `false`.
 */
export const PAYMENT_CHECKOUT = new InjectionToken<boolean>(
    'PAYMENT_CHECKOUT',
    { factory: () => false },
);

/** Hosts that can take payments over plain HTTP, for local development */
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1', '[::1]']);

/**
 * Whether the page can take payments. Payments need a secure context
 * (HTTPS), so that no other party can change the payment pages. Local hosts
 * are excluded, so that local development works over HTTP.
 */
export function isPaymentContext({
    isSecureContext,
    location,
}: Pick<Window, 'isSecureContext' | 'location'> = window) {
    return isSecureContext || LOCAL_HOSTS.has(location.hostname);
}

/** Time between checks of a payment while the user pays on the hosted page */
const POLL_INTERVAL_MS = 2_000;
/** Upper bound of checks for one payment. 450 checks are 15 minutes */
const MAX_POLLS = 450;
/** Status checks in sequence that can fail before the wait stops */
const MAX_FAILED_CHECKS = 3;
/** Attempts of `capture_payment`. The driver makes a repeated capture safe */
const CAPTURE_ATTEMPTS = 3;
/** Wait before the next capture attempt, times the number of attempts */
const CAPTURE_RETRY_MS = 1_000;

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
    /**
     * Cancel the payment when the wait stops or fails. Default `true`. Use
     * `false` for a payment of a saved booking, so that the booking stays paid.
     */
    cancel?: boolean;
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
    private _checkout = inject(PAYMENT_CHECKOUT);
    private _secure = isPaymentContext();

    /**
     * Whether the active building or the organisation has a payment driver,
     * and the page is in a secure context or on a local host
     */
    public get enabled(): boolean {
        return !!this._module;
    }

    /** Whether new bookings and events in this app take a payment */
    public get can_checkout(): boolean {
        return this._checkout && this.enabled;
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

    /** Payment driver module. `null` without a driver or a secure context */
    private get _module() {
        if (!this._secure) return null;
        return this._org.module?.(PAYMENT_BINDING, PAYMENT_MODULE) ?? null;
    }

    /** Whether the driver supports the optional feature */
    public hasCapability(capability: PaymentCapability) {
        return !!this.config()?.capabilities?.includes(capability);
    }

    /** Call a method of the payment driver with type checked arguments */
    public async call<M extends PaymentDriverMethod>(
        method: M,
        ...args: Parameters<PaymentDriver[M]>
    ): Promise<ReturnType<PaymentDriver[M]>> {
        const mod = this._module;
        if (!mod) throw i18n('PAYMENTS.NOT_ENABLED');
        return mod
            .execute<ReturnType<PaymentDriver[M]>>(method, args)
            .catch((e: unknown) => {
                // PlaceOS rejects with the error of the driver in `msg`
                const msg = (e as { msg?: unknown } | null)?.msg;
                throw typeof msg === 'string' && msg ? msg : e;
            });
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
        const keys = checkoutKeys();
        const data: PaymentCheckoutData = {
            quote,
            description: details.description,
            methods,
            can_save_method: this.hasCapability('saved_methods'),
            pay: (options) => this._pay(details, quote, options, keys),
            resume: (id, options) => this._resume(id, options),
            cancel: (id) => this.call('cancel_payment', id),
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

    /**
     * Take an authorized payment and link it to the saved booking or event.
     * The items of `exclude_resource_ids` are not taken, e.g. rooms that
     * declined. Tries again after a failure, as a repeated capture is safe.
     */
    public async capture(
        payment: Payment,
        reference: PaymentReference,
        exclude_resource_ids: string[] = [],
    ): Promise<Payment> {
        for (let attempt = 1; ; attempt++) {
            try {
                return await this.call(
                    'capture_payment',
                    payment.id,
                    reference,
                    exclude_resource_ids,
                );
            } catch (e) {
                if (attempt >= CAPTURE_ATTEMPTS) throw e;
                await delay(CAPTURE_RETRY_MS * attempt);
            }
        }
    }

    /** Release or refund a payment, e.g. when the booking fails to save */
    public cancel(payment: Payment) {
        return this.call('cancel_payment', payment.id);
    }

    /**
     * Open the hosted page to add a payment method. Resolves when the user
     * closes the page. Throws when the browser blocks the window.
     */
    public async addPaymentMethod(window_ref = this.openWindow()) {
        if (!window_ref) throw i18n('PAYMENTS.POPUP_BLOCKED');
        const session = await this.call(
            'create_setup_session',
            completeUrl('setup'),
        ).catch((e) => {
            window_ref.close();
            throw e;
        });
        window_ref.location.href = session.url;
        await waitForClose(window_ref);
    }

    /**
     * Open an empty window for a hosted page. Call it in a click handler, so
     * the browser does not block it. `null` when the browser blocks it.
     */
    public openWindow() {
        return openPaymentWindow();
    }

    /**
     * Complete an open payment of the user on a new link to the hosted page,
     * then take it for its reference. Only use it for a payment with a
     * `reference`, so that the user does not pay for nothing. Resolves with
     * the latest payment, also when the user closes the page first. Throws
     * when the browser blocks the window, as the user cannot see the page.
     */
    public async completePayment(
        payment: Payment,
        window_ref: Window | null = this.openWindow(),
    ): Promise<Payment> {
        const reference = payment.reference;
        if (!reference) throw i18n('PAYMENTS.NO_REFERENCE');
        if (!window_ref) throw i18n('PAYMENTS.POPUP_BLOCKED');
        const result = await this._resume(payment.id, {
            window: window_ref,
            cancel: false,
        }).catch((e) => {
            // Show the latest state of the payment
            if (
                e instanceof PaymentWindowClosedError ||
                e instanceof PaymentEndedError
            ) {
                return this.call('get_payment', payment.id);
            }
            throw e;
        });
        return result.status === 'authorized'
            ? this.capture(result, reference)
            : result;
    }

    /**
     * Wait for a payment to reach a final or authorized state. Throws
     * `PaymentWindowClosedError` when the user closes the hosted page first,
     * and leaves the payment open. Throws `CheckoutCancelledError` and
     * cancels the payment when the signal aborts or the wait times out.
     * When that cancel fails, throws `PaymentWindowClosedError` with the
     * error, so the user can reopen or cancel the payment again.
     */
    public async waitForPayment(
        id: string,
        { window: window_ref, signal, cancel = true }: WaitOptions = {},
    ): Promise<Payment> {
        const stop = () => this._release(id, cancel);
        let closed_checks = 0;
        let failed_checks = 0;
        for (let i = 0; i < MAX_POLLS; i++) {
            if (signal?.aborted) break;
            const payment = await this.call('get_payment', id).catch(
                async (e) => {
                    // Cancel after some failures, so the user can pay again
                    // without leaving this payment open
                    if (++failed_checks < MAX_FAILED_CHECKS) return null;
                    await stop();
                    // The payment is cancelled, so the user can pay again
                    if (cancel) throw new PaymentEndedError(errorMessage(e));
                    throw e;
                },
            );
            // The user can cancel while the check runs
            if (signal?.aborted) break;
            if (payment) failed_checks = 0;
            if (payment && isComplete(payment)) return payment;
            // Check again after the window closes, as the provider can be
            // slow to update the payment.
            if (window_ref?.closed && ++closed_checks > 2) {
                throw new PaymentWindowClosedError(id);
            }
            await delay(POLL_INTERVAL_MS, signal);
        }
        await stop();
        throw new CheckoutCancelledError();
    }

    private async _pay(
        details: CheckoutDetails,
        quote: PaymentQuote,
        options: PayOptions,
        keys: CheckoutKeys,
    ) {
        const key = keys.next(`${options.method_id}:${!!options.save_method}`);
        const session = await this.call('create_checkout', {
            idempotency_key: key,
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
        // The payment exists, so the next attempt is a new payment
        keys.done(key);
        return this._waitOnHostedPage(session.payment_id, session.url, options);
    }

    /**
     * Get a new link to the hosted page of an open payment and wait for it.
     * The provider can complete the payment after the user closes the page,
     * so a payment that is already complete resolves with no new link.
     */
    private async _resume(
        id: string,
        options: ResumeOptions & Pick<WaitOptions, 'cancel'>,
    ) {
        const close = (e: unknown): never => {
            options.window?.close();
            throw e;
        };
        // The user can cancel while a request runs. A failed request then
        // counts as the cancel
        const settle = <T>(request: Promise<T>) =>
            request.catch((e) => (options.signal?.aborted ? null : close(e)));
        const stopped = async (): Promise<never> => {
            options.window?.close();
            await this._release(id, options.cancel !== false);
            throw new CheckoutCancelledError();
        };
        const current = await settle(this.call('get_payment', id));
        if (options.signal?.aborted || !current) return stopped();
        if (isComplete(current)) {
            options.window?.close();
            return paidOrThrow(current);
        }
        const session = await settle(
            this.call('get_payment_link', id, completeUrl('success')).catch(
                (e) => this._completeOrThrow(id, e),
            ),
        );
        if (options.signal?.aborted || !session) return stopped();
        if ('status' in session) {
            options.window?.close();
            return paidOrThrow(session);
        }
        return this._waitOnHostedPage(id, session.url, options);
    }

    /**
     * The payment when it is complete, else throws `error`. The provider can
     * complete a payment after a check, and then refuses a new link to it.
     */
    private async _completeOrThrow(id: string, error: unknown) {
        const payment = await this.call('get_payment', id).catch(() => null);
        if (payment && isComplete(payment)) return payment;
        throw error;
    }

    /** Show the hosted page when there is one, then wait for the payment */
    private async _waitOnHostedPage(
        id: string,
        url: string | undefined,
        options: ResumeOptions & Pick<WaitOptions, 'cancel'>,
    ) {
        if (url) {
            if (options.window) options.window.location.href = url;
            options.on_url?.(url);
        } else options.window?.close();
        const payment = await this.waitForPayment(id, {
            window: options.window,
            signal: options.signal,
            cancel: options.cancel,
        });
        return paidOrThrow(payment);
    }

    /**
     * Cancel a payment that the app stops waiting for. When the cancel
     * fails, throws `PaymentWindowClosedError`, as the payment is still open.
     */
    private async _release(id: string, cancel: boolean) {
        if (!cancel) return;
        await this.call('cancel_payment', id).catch((e) => {
            throw new PaymentWindowClosedError(
                id,
                errorMessage(e) || i18n('PAYMENTS.PAYMENT_FAILED'),
            );
        });
    }
}

type CheckoutKeys = ReturnType<typeof checkoutKeys>;

/**
 * Idempotency keys for the `create_checkout` requests of one checkout. A
 * retry with the same options after a failed request gets the same key, as
 * the driver can have made the payment before the response was lost. A new
 * key starts when the options change or after the driver made a payment.
 */
function checkoutKeys() {
    let last: { options: string; key: string } | null = null;
    return {
        next(options: string) {
            if (last?.options !== options) {
                last = { options, key: crypto.randomUUID() };
            }
            return last.key;
        },
        done(key: string) {
            if (last?.key === key) last = null;
        },
    };
}

/** The payment when it is authorized or taken, else the error to show */
function paidOrThrow(payment: Payment) {
    if (payment.status === 'authorized' || payment.status === 'succeeded') {
        return payment;
    }
    // A part of the money is still taken, so the payment stays open until
    // the user cancels it
    if (payment.status === 'partially_refunded') {
        throw new PaymentWindowClosedError(
            payment.id,
            i18n('PAYMENTS.PAYMENT_FAILED'),
        );
    }
    throw new PaymentEndedError();
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
