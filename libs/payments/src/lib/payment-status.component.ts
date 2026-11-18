import { Component, computed, input } from '@angular/core';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { InvoiceStatus, PaymentStatus } from './payment.types';

const STATUS_CLASSES: Record<PaymentStatus | InvoiceStatus, string> = {
    pending: 'bg-base-200',
    requires_action: 'bg-warning text-warning-content',
    authorized: 'bg-info text-info-content',
    succeeded: 'bg-success text-success-content',
    partially_refunded: 'bg-warning text-warning-content',
    refunded: 'bg-base-300',
    cancelled: 'bg-base-300',
    failed: 'bg-error text-error-content',
    requested: 'bg-warning text-warning-content',
    draft: 'bg-base-200',
    open: 'bg-info text-info-content',
    paid: 'bg-success text-success-content',
    void: 'bg-base-300',
};

/** Coloured label for the status of a payment or an invoice */
@Component({
    selector: 'payment-status',
    template: `
        <span
            class="inline-block rounded-full px-2 py-0.5 text-xs whitespace-nowrap"
            [class]="classes()"
        >
            {{ label() | translate }}
        </span>
    `,
    imports: [TranslatePipe],
})
export class PaymentStatusComponent {
    public readonly status = input.required<PaymentStatus | InvoiceStatus>();
    public readonly label = computed(
        () => `PAYMENTS.STATUS_${this.status().toUpperCase()}`,
    );
    public readonly classes = computed(
        () => STATUS_CLASSES[this.status()] || 'bg-base-200',
    );
}
