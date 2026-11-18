import { Component, inject, OnDestroy, signal } from '@angular/core';
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

/** The user closed the hosted page or cancelled before the payment completed */
export class CheckoutCancelledError extends Error {
    constructor() {
        super('Payment cancelled');
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

export interface PaymentCheckoutData {
    quote: PaymentQuote;
    description: string;
    methods: PaymentMethod[];
    can_save_method: boolean;
    pay: (options: PayOptions) => Promise<Payment>;
}

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
        @if (!processing()) {
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
                <button btn matRipple name="pay" class="flex-1" (click)="pay()">
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
                <button btn matRipple class="clear" (click)="stop()">
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

    public readonly data = inject<PaymentCheckoutData>(MAT_DIALOG_DATA);
    public readonly new_method = NEW_METHOD;
    public readonly unit_key = unitKey;
    public readonly method_id = signal(
        this.data.methods.find((_) => _.is_default)?.id ??
            this.data.methods[0]?.id ??
            NEW_METHOD,
    );
    public readonly save_method = signal(false);
    public readonly processing = signal(false);
    public readonly hosted_url = signal('');
    public readonly error = signal('');

    public async pay() {
        const method_id = this.method_id() || undefined;
        // Open the window in the click handler, or the browser blocks it
        const window_ref = method_id
            ? null
            : window.open('', 'placeos-payment', 'popup,width=520,height=760');
        this._abort = new AbortController();
        this.error.set('');
        this.hosted_url.set('');
        this.processing.set(true);
        try {
            const payment = await this.data.pay({
                method_id,
                save_method: !method_id && this.save_method(),
                window: window_ref,
                signal: this._abort.signal,
                on_url: (url) => this.hosted_url.set(url),
            });
            this._ref.close(payment);
        } catch (e) {
            window_ref?.close();
            this.processing.set(false);
            if (!(e instanceof CheckoutCancelledError)) {
                this.error.set(
                    errorMessage(e) || i18n('PAYMENTS.PAYMENT_FAILED'),
                );
            }
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
        this._abort?.abort();
    }
}
