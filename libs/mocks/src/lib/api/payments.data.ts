import type { PaymentReference } from 'libs/payments/src/lib/payment.types';

/** Prefix of the IDs of payments that mock bookings and events link to */
const LINKED_PREFIX = 'pay-linked';

/** Whether the mock payment driver is on. Set `PLACEOS.mock_payments` to `true` in local storage */
export function mockPaymentsEnabled() {
    try {
        return localStorage.getItem('PLACEOS.mock_payments') === 'true';
    } catch {
        return false;
    }
}

/**
 * Payment ID for every third mock booking or event when the mock payment
 * driver is on, so that the booking lists show payments. The mock driver
 * makes the payment when the app first reads it.
 */
export function mockLinkedPaymentId(
    type: 'booking' | 'event',
    id: string | number,
    index: number,
): string | undefined {
    if (index % 3 !== 0 || !mockPaymentsEnabled()) return undefined;
    return `${LINKED_PREFIX}:${type}:${id}`;
}

/** Reference of a payment ID from `mockLinkedPaymentId`, else `null` */
export function linkedPaymentReference(id: string): PaymentReference | null {
    const [prefix, type, ...ref] = id.split(':');
    if (prefix !== LINKED_PREFIX || (type !== 'booking' && type !== 'event')) {
        return null;
    }
    return { type, id: ref.join(':') };
}
