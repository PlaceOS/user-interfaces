import { Component, computed, input } from '@angular/core';

import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import { InvoiceStatus, PaymentStatus } from './payment.types';

/*
 * A tint of the status colour behind the text colour of the theme. The text
 * has more than 4.5:1 contrast in the light and the dark themes, which the
 * full status colours do not have with their content colours.
 */
const INFO = 'bg-info/15 border-info';
const SUCCESS = 'bg-success/15 border-success';
const WARNING = 'bg-warning/20 border-warning';
const ERROR = 'bg-error/15 border-error';
const NEUTRAL = 'bg-base-200 border-base-300';

const STATUS_CLASSES: Record<PaymentStatus | InvoiceStatus, string> = {
    pending: NEUTRAL,
    requires_action: WARNING,
    authorized: INFO,
    succeeded: SUCCESS,
    partially_refunded: WARNING,
    refunded: NEUTRAL,
    cancelled: NEUTRAL,
    failed: ERROR,
    requested: WARNING,
    draft: NEUTRAL,
    open: INFO,
    paid: SUCCESS,
    void: NEUTRAL,
};

/** Coloured label for the status of a payment or an invoice */
@Component({
    selector: 'payment-status',
    template: `
        <span
            class="text-base-content inline-block rounded-full border px-2 py-0.5 text-xs whitespace-nowrap"
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
        () => STATUS_CLASSES[this.status()] || NEUTRAL,
    );
}
