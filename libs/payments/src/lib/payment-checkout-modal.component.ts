import {
    Component,
    effect,
    ElementRef,
    inject,
    OnDestroy,
    signal,
    viewChild,
} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatRadioModule } from '@angular/material/radio';

import { errorMessage, i18n } from '@placeos/common';
import { AnnounceDirective } from 'libs/components/src/lib/announce.directive';
import { DIALOG_TITLE_STYLES } from 'libs/components/src/lib/confirm-modal.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { PaymentAmountPipe, unitKey } from './payment-amount.pipe';
import { Payment, PaymentMethod, PaymentQuote } from './payment.types';

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

type CheckoutView = 'review' | 'processing' | 'closed';

/** Value of the new payment method option */
const NEW_METHOD = '';

/**
 * Shows the price of a checkout and lets the user pick how to pay. Closes
 * with the payment when it is authorized, or with no value on cancel.
 */
@Component({
    selector: 'payment-checkout-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'PAYMENTS.CHECKOUT_TITLE' | translate }}
            </h2>
        </header>
        @if (view() === 'review') {
            <main class="w-md max-w-[85vw] space-y-4 p-4">
                <p class="text-sm opacity-70">{{ data.description }}</p>
                <ul class="divide-base-200 divide-y text-sm">
                    @for (item of data.quote.items; track $index) {
                        <li class="flex items-center gap-2 py-2">
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="text-xs opacity-70">
                                    {{ item.quantity }} ×
                                    {{
                                        item.unit_amount
                                            | amount: data.quote.currency
                                    }}
                                    {{ unit_key(item.unit) | translate }}
                                </div>
                            </div>
                            <div>
                                {{ item.amount | amount: data.quote.currency }}
                            </div>
                        </li>
                    }
                </ul>
                <dl class="border-base-200 space-y-1 border-t pt-2 text-sm">
                    @if (data.quote.tax > 0) {
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.SUBTOTAL' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.subtotal
                                        | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.TAX' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.tax | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                    }
                    <div class="flex justify-between text-base font-medium">
                        <dt>{{ 'PAYMENTS.TOTAL' | translate }}</dt>
                        <dd total>
                            {{ data.quote.total | amount: data.quote.currency }}
                        </dd>
                    </div>
                </dl>
                @if (data.methods.length) {
                    <fieldset>
                        <legend class="mb-1 text-sm font-medium">
                            {{ 'PAYMENTS.PAY_WITH' | translate }}
                        </legend>
                        <mat-radio-group
                            class="flex flex-col"
                            [(ngModel)]="method_id"
                        >
                            @for (method of data.methods; track method.id) {
                                <mat-radio-button [value]="method.id">
                                    <span class="capitalize">{{
                                        method.brand || method.type
                                    }}</span>
                                    •••• {{ method.last4 }}
                                    <span class="text-xs opacity-70">
                                        {{ method.exp_month }}/{{
                                            method.exp_year
                                        }}
                                    </span>
                                </mat-radio-button>
                            }
                            <mat-radio-button [value]="new_method">
                                {{ 'PAYMENTS.NEW_METHOD' | translate }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </fieldset>
                }
                @if (data.can_save_method && method_id() === new_method) {
                    <mat-checkbox [(ngModel)]="save_method">
                        {{ 'PAYMENTS.SAVE_METHOD' | translate }}
                    </mat-checkbox>
                }
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    (click)="close()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    #pay_button
                    btn
                    matRipple
                    name="pay"
                    class="flex-1"
                    (click)="pay()"
                >
                    {{
                        'PAYMENTS.PAY_AMOUNT'
                            | translate
                                : {
                                      amount:
                                          data.quote.total
                                          | amount: data.quote.currency,
                                  }
                    }}
                </button>
            </footer>
        } @else if (view() === 'closed') {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <icon class="text-5xl opacity-60">tab_close</icon>
                <p announce>{{ 'PAYMENTS.WINDOW_CLOSED' | translate }}</p>
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
                <button
                    #reopen_button
                    btn
                    matRipple
                    name="reopen"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="reopen()"
                >
                    {{ 'PAYMENTS.REOPEN_PAYMENT_PAGE' | translate }}
                    <icon class="ml-2 text-xl">open_in_new</icon>
                </button>
                <button
                    btn
                    matRipple
                    name="cancel-payment"
                    class="clear"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="cancelPayment()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        } @else {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                @if (hosted_url()) {
                    <p announce>
                        {{ 'PAYMENTS.COMPLETE_IN_WINDOW' | translate }}
                    </p>
                    <a
                        btn
                        matRipple
                        class="inverse"
                        target="_blank"
                        rel="noopener"
                        [href]="hosted_url()"
                    >
                        {{ 'PAYMENTS.OPEN_PAYMENT_PAGE' | translate }}
                        <icon class="ml-2 text-xl">open_in_new</icon>
                    </a>
                } @else {
                    <p announce>{{ 'PAYMENTS.PROCESSING' | translate }}</p>
                }
                <button
                    #stop_button
                    btn
                    matRipple
                    class="clear"
                    (click)="stop()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        }
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [
        AnnounceDirective,
        FormsModule,
        IconComponent,
        MatCheckboxModule,
        MatDialogModule,
        MatProgressSpinnerModule,
        MatRadioModule,
        MatRippleModule,
        PaymentAmountPipe,
        TranslatePipe,
    ],
})
export class PaymentCheckoutModalComponent implements OnDestroy {
    private _ref =
        inject<MatDialogRef<PaymentCheckoutModalComponent, Payment>>(
            MatDialogRef,
        );
    private _abort?: AbortController;
    /** Payment that is open after the user closed the hosted page */
    private _open_payment_id = '';

    public readonly data = inject<PaymentCheckoutData>(MAT_DIALOG_DATA);
    public readonly new_method = NEW_METHOD;
    public readonly unit_key = unitKey;
    public readonly method_id = signal(
        this.data.methods.find((_) => _.is_default)?.id ??
            this.data.methods[0]?.id ??
            NEW_METHOD,
    );
    public readonly save_method = signal(false);
    public readonly view = signal<CheckoutView>('review');
    public readonly hosted_url = signal('');
    public readonly error = signal('');
    public readonly cancelling = signal(false);

    private readonly _pay_button =
        viewChild<ElementRef<HTMLButtonElement>>('pay_button');
    private readonly _reopen_button =
        viewChild<ElementRef<HTMLButtonElement>>('reopen_button');
    private readonly _stop_button =
        viewChild<ElementRef<HTMLButtonElement>>('stop_button');

    constructor() {
        // A view change removes the focused button. Move the focus to the
        // main action of the new view
        effect(() => this._pay_button()?.nativeElement.focus());
        effect(() => this._reopen_button()?.nativeElement.focus());
        effect(() => this._stop_button()?.nativeElement.focus());
    }

    public async pay() {
        const method_id = this.method_id() || undefined;
        // Open the window in the click handler, or the browser blocks it
        const window_ref = method_id ? null : openPaymentWindow();
        if (!method_id && !window_ref) return this._popupBlocked();
        await this._run(window_ref, (options) =>
            this.data.pay({
                ...options,
                method_id,
                save_method: !method_id && this.save_method(),
            }),
        );
    }

    /** Open the hosted page again with a new link from the driver */
    public async reopen() {
        const id = this._open_payment_id;
        if (!id || this.cancelling()) return;
        const window_ref = openPaymentWindow();
        if (!window_ref) return this._popupBlocked();
        await this._run(window_ref, (options) => this.data.resume(id, options));
    }

    /**
     * Cancel the open payment and go back to the review. Stays on the open
     * payment when the cancel fails, so the user cannot pay twice.
     */
    public async cancelPayment() {
        const id = this._open_payment_id;
        if (!id || this.cancelling()) return;
        this.cancelling.set(true);
        this.error.set('');
        try {
            await this.data.cancel(id);
            this._open_payment_id = '';
            this.view.set('review');
        } catch (e) {
            this.error.set(errorMessage(e) || i18n('PAYMENTS.PAYMENT_FAILED'));
        } finally {
            this.cancelling.set(false);
        }
    }

    /** Stop waiting for the hosted page. The service cancels the payment */
    public stop() {
        this._abort?.abort();
    }

    public close() {
        this._ref.close();
    }

    public ngOnDestroy() {
        // The service cancels the payment that it waits for
        if (this.view() === 'processing') return this._abort?.abort();
        // Do not leave an open payment when the modal goes away
        if (this._open_payment_id && !this.cancelling()) {
            this.data.cancel(this._open_payment_id).catch(() => null);
        }
    }

    /** Wait for a payment, then close with it or show what went wrong */
    private async _run(
        window_ref: Window | null,
        action: (options: ResumeOptions) => Promise<Payment>,
    ) {
        this._abort = new AbortController();
        this.error.set('');
        this.hosted_url.set('');
        this.view.set('processing');
        try {
            const payment = await action({
                window: window_ref,
                signal: this._abort.signal,
                on_url: (url) => this.hosted_url.set(url),
            });
            this._open_payment_id = '';
            this._ref.close(payment);
        } catch (e) {
            window_ref?.close();
            if (e instanceof PaymentWindowClosedError) {
                this._open_payment_id = e.payment_id;
                this.view.set('closed');
                this.error.set(e.reason);
                return;
            }
            // A failed reopen stays on the open payment, so the user cannot
            // pay twice. They can reopen it again or cancel it
            if (
                this._open_payment_id &&
                !(e instanceof CheckoutCancelledError) &&
                !(e instanceof PaymentEndedError)
            ) {
                this.view.set('closed');
                this.error.set(
                    errorMessage(e) || i18n('PAYMENTS.PAYMENT_FAILED'),
                );
                return;
            }
            this._open_payment_id = '';
            this.view.set('review');
            if (!(e instanceof CheckoutCancelledError)) {
                this.error.set(
                    errorMessage(e) || i18n('PAYMENTS.PAYMENT_FAILED'),
                );
            }
        }
    }

    private _popupBlocked() {
        this.error.set(i18n('PAYMENTS.POPUP_BLOCKED'));
    }
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
