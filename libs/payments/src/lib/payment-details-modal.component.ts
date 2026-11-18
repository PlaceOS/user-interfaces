import { DatePipe } from '@angular/common';
import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import {
    currentUser,
    errorMessage,
    i18n,
    notifyError,
    notifySuccess,
} from '@placeos/common';
import { DIALOG_TITLE_STYLES } from 'libs/components/src/lib/confirm-modal.component';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    PaymentAmountPipe,
    toMajorUnits,
    toMinorUnits,
    unitKey,
} from './payment-amount.pipe';
import { PaymentStatusComponent } from './payment-status.component';
import { BillingDetails, Invoice, Payment } from './payment.types';
import { PaymentsService } from './payments.service';

export interface PaymentDetailsData {
    payment: Payment;
}

type DetailsView = 'details' | 'invoice' | 'refund';

/**
 * Details of a payment. Users can request an invoice. Privileged users can
 * also send the invoice and refund the payment. Reload the payment list after
 * the modal closes, as actions can change the payment.
 */
@Component({
    selector: 'payment-details-modal',
    template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center gap-2 rounded-sm p-2"
        >
            <h2
                mat-dialog-title
                class="flex-1 truncate px-2 text-xl font-medium"
            >
                {{ payment().description || ('PAYMENTS.PAYMENT' | translate) }}
            </h2>
            <payment-status [status]="payment().status" />
            <button
                icon
                matRipple
                mat-dialog-close
                [attr.aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        @if (loading()) {
            <main
                class="flex h-48 w-md max-w-[85vw] flex-col items-center justify-center space-y-4"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        } @else {
            @switch (view()) {
                @case ('invoice') {
                    <main class="w-md max-w-[85vw] space-y-2 p-4">
                        <p class="text-sm">
                            {{ 'PAYMENTS.INVOICE_DETAILS_INFO' | translate }}
                        </p>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{ 'FORM.NAME' | translate }}</mat-label>
                            <input
                                matInput
                                required
                                [(ngModel)]="billing_name"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'FORM.EMAIL' | translate
                            }}</mat-label>
                            <input
                                matInput
                                required
                                type="email"
                                [(ngModel)]="billing_email"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.COMPANY' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="billing_company" />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.TAX_ID' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="billing_tax_id" />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.BILLING_ADDRESS' | translate
                            }}</mat-label>
                            <textarea
                                matInput
                                rows="3"
                                [(ngModel)]="billing_address"
                            ></textarea>
                        </mat-form-field>
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100 flex-1"
                            (click)="view.set('details')"
                        >
                            {{ 'COMMON.BACK' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            name="submit-invoice"
                            class="flex-1"
                            [disabled]="!billing_name() || !billing_email()"
                            (click)="requestInvoice()"
                        >
                            {{
                                (privileged()
                                    ? 'PAYMENTS.SEND_INVOICE'
                                    : 'PAYMENTS.REQUEST_INVOICE'
                                ) | translate
                            }}
                        </button>
                    </footer>
                }
                @case ('refund') {
                    <main class="w-md max-w-[85vw] space-y-2 p-4">
                        <p class="text-sm">
                            {{
                                'PAYMENTS.REFUND_INFO'
                                    | translate
                                        : {
                                              amount:
                                                  refundable()
                                                  | amount: payment().currency,
                                          }
                            }}
                        </p>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.REFUND_AMOUNT' | translate
                            }}</mat-label>
                            <input
                                matInput
                                type="number"
                                min="0"
                                [max]="refundable_major()"
                                [(ngModel)]="refund_amount"
                            />
                        </mat-form-field>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-label>{{
                                'PAYMENTS.REFUND_REASON' | translate
                            }}</mat-label>
                            <input matInput [(ngModel)]="refund_reason" />
                        </mat-form-field>
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex gap-2 rounded-sm p-2"
                    >
                        <button
                            btn
                            matRipple
                            class="inverse bg-base-100 flex-1"
                            (click)="view.set('details')"
                        >
                            {{ 'COMMON.BACK' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            name="submit-refund"
                            class="error flex-1"
                            [disabled]="!valid_refund()"
                            (click)="refund()"
                        >
                            {{ 'PAYMENTS.REFUND' | translate }}
                        </button>
                    </footer>
                }
                @default {
                    <main class="w-md max-w-[85vw] space-y-4 p-4 text-sm">
                        <dl class="grid grid-cols-[auto_1fr] gap-x-4 gap-y-1">
                            <dt class="opacity-70">
                                {{ 'PAYMENTS.AMOUNT' | translate }}
                            </dt>
                            <dd class="font-medium">
                                {{
                                    payment().amount
                                        | amount: payment().currency
                                }}
                            </dd>
                            @if (payment().amount_refunded > 0) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.REFUNDED' | translate }}
                                </dt>
                                <dd>
                                    {{
                                        payment().amount_refunded
                                            | amount: payment().currency
                                    }}
                                </dd>
                            }
                            <dt class="opacity-70">
                                {{ 'PAYMENTS.DATE' | translate }}
                            </dt>
                            <dd>
                                {{
                                    payment().created_at * 1000 | date: 'medium'
                                }}
                            </dd>
                            @if (privileged()) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.USER' | translate }}
                                </dt>
                                <dd class="truncate">
                                    {{ payment().user_name }}
                                    <span class="opacity-70">{{
                                        payment().user_email
                                    }}</span>
                                </dd>
                            }
                            @if (payment().payment_method; as method) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.METHOD' | translate }}
                                </dt>
                                <dd class="capitalize">
                                    {{ method.brand || method.type }} ••••
                                    {{ method.last4 }}
                                </dd>
                            }
                            @if (payment().reference; as ref) {
                                <dt class="opacity-70">
                                    {{ 'PAYMENTS.REFERENCE' | translate }}
                                </dt>
                                <dd class="truncate font-mono text-xs">
                                    {{ ref.type }} {{ ref.id }}
                                </dd>
                            }
                            <dt class="opacity-70">ID</dt>
                            <dd class="truncate font-mono text-xs">
                                {{ payment().id }}
                            </dd>
                        </dl>
                        @if (payment().items.length) {
                            <ul
                                class="border-base-200 divide-base-200 divide-y border-y"
                            >
                                @for (item of payment().items; track $index) {
                                    <li class="flex gap-2 py-2">
                                        <div class="min-w-0 flex-1">
                                            <div class="truncate">
                                                {{ item.name }}
                                            </div>
                                            <div class="text-xs opacity-70">
                                                {{ item.quantity }} ×
                                                {{
                                                    item.unit_amount
                                                        | amount
                                                            : payment().currency
                                                }}
                                                {{
                                                    unit_key(item.unit)
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                        <div>
                                            {{
                                                item.amount
                                                    | amount: payment().currency
                                            }}
                                        </div>
                                    </li>
                                }
                            </ul>
                        }
                        @if (invoice(); as inv) {
                            <div
                                class="bg-base-200 flex items-center gap-2 rounded-sm p-2"
                            >
                                <icon class="text-2xl">receipt_long</icon>
                                <div class="min-w-0 flex-1">
                                    <div class="font-medium">
                                        {{ 'PAYMENTS.INVOICE' | translate }}
                                        {{ inv.number }}
                                    </div>
                                    <div class="text-xs opacity-70">
                                        {{
                                            inv.created_at * 1000
                                                | date: 'mediumDate'
                                        }}
                                    </div>
                                </div>
                                <payment-status [status]="inv.status" />
                                @if (inv.pdf_url || inv.url) {
                                    <a
                                        icon
                                        matRipple
                                        target="_blank"
                                        rel="noopener"
                                        [href]="inv.pdf_url || inv.url"
                                        [attr.aria-label]="
                                            'PAYMENTS.VIEW_INVOICE' | translate
                                        "
                                    >
                                        <icon>open_in_new</icon>
                                    </a>
                                }
                            </div>
                        }
                    </main>
                    <footer
                        class="bg-base-200 sticky bottom-0 m-2 flex flex-wrap gap-2 rounded-sm p-2"
                    >
                        @if (can_complete()) {
                            <button
                                btn
                                matRipple
                                name="complete-payment"
                                class="flex-1"
                                (click)="complete()"
                            >
                                {{ 'PAYMENTS.COMPLETE_PAYMENT' | translate }}
                            </button>
                        }
                        @if (payment().receipt_url) {
                            <a
                                btn
                                matRipple
                                class="inverse bg-base-100 flex-1"
                                target="_blank"
                                rel="noopener"
                                [href]="payment().receipt_url"
                            >
                                {{ 'PAYMENTS.VIEW_RECEIPT' | translate }}
                            </a>
                        }
                        @if (can_send_invoice()) {
                            <button
                                btn
                                matRipple
                                name="send-invoice"
                                class="flex-1"
                                (click)="sendInvoice()"
                            >
                                {{ 'PAYMENTS.SEND_INVOICE' | translate }}
                            </button>
                        } @else if (can_request_invoice()) {
                            <button
                                btn
                                matRipple
                                name="request-invoice"
                                class="flex-1"
                                (click)="view.set('invoice')"
                            >
                                {{
                                    (privileged()
                                        ? 'PAYMENTS.SEND_INVOICE'
                                        : 'PAYMENTS.REQUEST_INVOICE'
                                    ) | translate
                                }}
                            </button>
                        }
                        @if (can_refund()) {
                            <button
                                btn
                                matRipple
                                name="refund"
                                class="error flex-1"
                                (click)="view.set('refund')"
                            >
                                {{ 'PAYMENTS.REFUND' | translate }}
                            </button>
                        }
                    </footer>
                }
            }
        }
    `,
    styles: [DIALOG_TITLE_STYLES],
    imports: [
        DatePipe,
        FormsModule,
        IconComponent,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatProgressSpinnerModule,
        MatRippleModule,
        PaymentAmountPipe,
        PaymentStatusComponent,
        TranslatePipe,
    ],
})
export class PaymentDetailsModalComponent implements OnInit {
    private _payments = inject(PaymentsService);
    private _ref = inject(MatDialogRef<PaymentDetailsModalComponent>);
    private _data = inject<PaymentDetailsData>(MAT_DIALOG_DATA);

    public readonly unit_key = unitKey;
    public readonly payment = signal(this._data.payment);
    public readonly invoice = signal<Invoice | null>(null);
    public readonly view = signal<DetailsView>('details');
    public readonly loading = signal('');
    public readonly privileged = this._payments.privileged;

    public readonly billing_name = signal('');
    public readonly billing_email = signal('');
    public readonly billing_company = signal('');
    public readonly billing_tax_id = signal('');
    public readonly billing_address = signal('');

    public readonly refund_amount = signal<number | null>(null);
    public readonly refund_reason = signal('');

    /** Amount that is not refunded yet, in the minor unit */
    public readonly refundable = computed(
        () => this.payment().amount - this.payment().amount_refunded,
    );
    public readonly refundable_major = computed(() =>
        toMajorUnits(this.refundable(), this.payment().currency),
    );
    public readonly valid_refund = computed(() => {
        const amount = this.refund_amount();
        return (
            amount === null || (amount > 0 && amount <= this.refundable_major())
        );
    });

    public readonly can_request_invoice = computed(
        () =>
            this._payments.hasCapability('invoices') &&
            !this.invoice() &&
            ['succeeded', 'partially_refunded'].includes(this.payment().status),
    );
    public readonly can_send_invoice = computed(() => {
        const status = this.invoice()?.status;
        return (
            this.privileged() && (status === 'requested' || status === 'draft')
        );
    });
    /**
     * Whether the user can finish an open payment of their own. Only for a
     * payment with a reference, so that the payment pays for something.
     */
    public readonly can_complete = computed(() => {
        const payment = this.payment();
        return (
            payment.user_email === currentUser()?.email &&
            !!payment.reference &&
            (payment.status === 'pending' ||
                payment.status === 'requires_action')
        );
    });
    public readonly can_refund = computed(
        () =>
            this.privileged() &&
            this._payments.hasCapability('refunds') &&
            this.refundable() > 0 &&
            ['succeeded', 'partially_refunded'].includes(this.payment().status),
    );

    public async ngOnInit() {
        const payment = this.payment();
        const is_self = payment.user_email === currentUser()?.email;
        this.billing_name.set(is_self ? currentUser().name : payment.user_name);
        this.billing_email.set(payment.user_email);
        if (!this._payments.hasCapability('invoices')) return;
        const page = await this._payments
            .call('list_invoices', { payment_id: payment.id, limit: 1 })
            .catch(() => null);
        this.invoice.set(page?.items[0] ?? null);
    }

    /** Request an invoice. Privileged users also send it */
    public async requestInvoice() {
        const billing: BillingDetails = {
            name: this.billing_name(),
            email: this.billing_email(),
            company: this.billing_company() || undefined,
            tax_id: this.billing_tax_id() || undefined,
            address: this.billing_address() || undefined,
        };
        await this._run('PAYMENTS.REQUESTING_INVOICE', async () => {
            let invoice = await this._payments.call(
                'request_invoice',
                this.payment().id,
                billing,
            );
            if (this.privileged()) {
                invoice = await this._payments.call(
                    'send_invoice',
                    invoice.id,
                    billing.email,
                );
            }
            this.invoice.set(invoice);
            notifySuccess(
                i18n(
                    this.privileged()
                        ? 'PAYMENTS.INVOICE_SENT'
                        : 'PAYMENTS.INVOICE_REQUESTED',
                ),
            );
        });
    }

    public async sendInvoice() {
        const invoice = this.invoice();
        if (!invoice) return;
        await this._run('PAYMENTS.SENDING_INVOICE', async () => {
            this.invoice.set(
                await this._payments.call('send_invoice', invoice.id, null),
            );
            notifySuccess(i18n('PAYMENTS.INVOICE_SENT'));
        });
    }

    /** Pay an open payment on a new link to the hosted page */
    public async complete() {
        // Open the window in the click handler, or the browser blocks it
        const window_ref = this._payments.openWindow();
        await this._run('PAYMENTS.COMPLETING_PAYMENT', async () => {
            this.payment.set(
                await this._payments.completePayment(
                    this.payment(),
                    window_ref,
                ),
            );
        });
    }

    public async refund() {
        if (!this.valid_refund()) return;
        const amount = this.refund_amount();
        await this._run('PAYMENTS.REFUNDING', async () => {
            this.payment.set(
                await this._payments.call(
                    'refund_payment',
                    this.payment().id,
                    amount === null
                        ? null
                        : toMinorUnits(amount, this.payment().currency),
                    this.refund_reason(),
                ),
            );
            notifySuccess(i18n('PAYMENTS.REFUND_SUCCESS'));
        });
    }

    /** Run an action with a loading message, then go back to the details */
    private async _run(message: string, action: () => Promise<void>) {
        this.loading.set(i18n(message));
        this._ref.disableClose = true;
        try {
            await action();
            this.view.set('details');
        } catch (e) {
            notifyError(errorMessage(e) || i18n('PAYMENTS.ACTION_FAILED'));
        } finally {
            this.loading.set('');
            this._ref.disableClose = false;
        }
    }
}
