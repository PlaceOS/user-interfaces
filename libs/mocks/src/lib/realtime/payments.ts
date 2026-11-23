import type {
    BillingDetails,
    CheckoutRequest,
    CheckoutSession,
    HostedSession,
    Invoice,
    InvoiceCreateRequest,
    InvoiceQuery,
    Payment,
    PaymentConfig,
    PaymentDriver,
    PaymentLineItem,
    PaymentLineItemRequest,
    PaymentMethod,
    PaymentPage,
    PaymentProduct,
    PaymentProductInput,
    PaymentQuery,
    PaymentQuote,
    PaymentReference,
    ProductQuery,
} from 'libs/payments/src/lib/payment.types';

import { HashMap, randomString } from '@placeos/common';
import { MOCK_ASSETS } from '../api/assets.data';
import { MOCK_MENU } from '../api/catering.data';
import { linkedPaymentReference } from '../api/payments.data';
import { ACTIVE_USER } from '../api/users.data';
import { MOCK_LEVELS } from '../api/zone.data';

/** Mock methods have a `$` prefix. The type keeps the mock in sync with the driver contract */
type MockDriver<T> = { [K in keyof T as `$${K & string}`]: T[K] };

const CURRENCY = 'AUD';
/** Seconds after which the mock hosted page counts as paid */
const HOSTED_PAY_DELAY = 4;
const MAX_PAGE_SIZE = 100;

const now = () => Math.floor(Date.now() / 1000);

function product(
    data: Partial<PaymentProduct> & Pick<PaymentProduct, 'name' | 'unit'>,
): PaymentProduct {
    return {
        id: `prod-${randomString(8)}`,
        description: '',
        active: true,
        resource_type: 'service',
        resource_ids: [],
        zone_ids: [],
        unit_amount: 0,
        currency: CURRENCY,
        created_at: now() - 90 * 24 * 60 * 60,
        updated_at: now() - 90 * 24 * 60 * 60,
        ...data,
    };
}

function page<T>(list: T[], limit = 20, cursor?: string): PaymentPage<T> {
    const size = Math.min(Math.max(limit, 1), MAX_PAGE_SIZE);
    const start = Number(cursor) || 0;
    const items = list.slice(start, start + size);
    return {
        items,
        next_cursor: start + size < list.length ? `${start + size}` : undefined,
    };
}

interface MockCateringItem {
    id: string;
    name: string;
    unit_price: number;
    options?: { id: string; name: string; unit_price?: number }[];
}

/**
 * Catering item of the ID. The meeting form orders the catering assets of
 * the zone. The old menu in zone metadata is the fallback.
 */
function cateringItem(id = ''): MockCateringItem | undefined {
    const asset = MOCK_ASSETS.find(
        (_) => _.id === id && `${_.asset_type_id}`.startsWith('_catering_'),
    );
    if (asset) {
        return {
            id: asset.id,
            name: asset.name,
            unit_price: +asset.other_data?.unit_price || 0,
            options: asset.other_data?.options || [],
        };
    }
    return MOCK_MENU.find((_) => _.id === id);
}

/** The zone of a resource and the building of the zone */
function zoneScope(zone_id = '') {
    const level = MOCK_LEVELS.find((_) => _.id === zone_id);
    return [zone_id, level?.parent_id].filter((_): _ is string => !!_);
}

/** Price an item from its product, or from the catering menu */
function priceItem(
    products: PaymentProduct[],
    item: PaymentLineItemRequest,
): PaymentLineItem[] {
    const quantity = item.quantity || 1;
    if (item.resource_type === 'catering') {
        const menu_item = cateringItem(item.resource_id);
        if (!menu_item) return [];
        const options = (menu_item.options || []).filter((option) =>
            item.option_ids?.includes(option.id),
        );
        const unit_amount =
            menu_item.unit_price +
            options.reduce((sum, o) => sum + (o.unit_price || 0), 0);
        return [
            {
                product_id: '',
                resource_type: 'catering',
                resource_id: menu_item.id,
                name: menu_item.name,
                description: options.map((o) => o.name).join(', '),
                unit: 'item',
                quantity,
                unit_amount,
                amount: unit_amount * quantity,
            },
        ];
    }
    const match = findProduct(products, item);
    if (!match) return [];
    const minutes = item.duration || 60;
    const units =
        match.unit === 'hour'
            ? Math.ceil(minutes / 60)
            : match.unit === 'day'
              ? Math.ceil(minutes / (24 * 60))
              : 1;
    const count = units * quantity;
    return [
        {
            product_id: match.id,
            resource_type: match.resource_type,
            resource_id: item.resource_id || '',
            name: item.name || match.name,
            description: match.name,
            unit: match.unit,
            quantity: count,
            unit_amount: match.unit_amount,
            amount: match.unit_amount * count,
        },
    ];
}

/** Product of the item. The most specific match wins: resource IDs, then zones, then the type */
function findProduct(products: PaymentProduct[], item: PaymentLineItemRequest) {
    if (item.product_id) {
        return products.find((p) => p.active && p.id === item.product_id);
    }
    const specificity = (p: PaymentProduct) =>
        (p.resource_ids.length ? 2 : 0) + (p.zone_ids.length ? 1 : 0);
    const zones = zoneScope(item.zone_id);
    return products
        .filter(
            (p) =>
                p.active &&
                p.resource_type === item.resource_type &&
                (!p.resource_ids.length ||
                    p.resource_ids.includes(item.resource_id || '')) &&
                (!p.zone_ids.length ||
                    zones.some((zone) => p.zone_ids.includes(zone))),
        )
        .sort((a, b) => specificity(b) - specificity(a))[0];
}

function newPayment(data: Partial<Payment>): Payment {
    return {
        id: `pay-${randomString(10)}`,
        status: 'pending',
        amount: 0,
        amount_refunded: 0,
        currency: CURRENCY,
        description: '',
        items: [],
        user_id: ACTIVE_USER.id,
        user_email: ACTIVE_USER.email,
        user_name: ACTIVE_USER.name,
        created_at: now(),
        updated_at: now(),
        ...data,
    };
}

function findPayment(payments: Payment[], id: string) {
    const payment = payments.find((_) => _.id === id);
    if (!payment) throw 'Payment not found';
    return payment;
}

/**
 * Paid payment for a mock booking or event that links to it. Made on the
 * first read, so that the payment list starts with the seeded history.
 */
function linkedPayment(payments: Payment[], id: string) {
    const reference = linkedPaymentReference(id);
    if (!reference) return findPayment(payments, id);
    const existing = payments.find((_) => _.id === id);
    if (existing) return existing;
    const amount = reference.type === 'event' ? 5000 : 2000;
    const name = reference.type === 'event' ? 'Meeting room' : 'Booking';
    const payment = newPayment({
        id,
        status: 'succeeded',
        amount,
        description: name,
        items: [
            {
                product_id: '',
                resource_type: reference.type === 'event' ? 'room' : 'desk',
                resource_id: '',
                name,
                description: '',
                unit: 'booking',
                quantity: 1,
                unit_amount: amount,
                amount,
            },
        ],
        reference,
        payment_method: { type: 'card', brand: 'visa', last4: '4242' },
    });
    payments.push(payment);
    return payment;
}

function updatePayment(
    payments: Payment[],
    id: string,
    changes: Partial<Payment>,
) {
    const payment = findPayment(payments, id);
    Object.assign(payment, changes, { updated_at: now() });
    return payment;
}

/** Past payments of the current user and of other users */
function seedHistory(): Payment[] {
    const day = 24 * 60 * 60;
    const users = [
        ACTIVE_USER,
        {
            id: 'user-2',
            name: 'James Wilson',
            email: 'james.wilson@place.tech',
        },
        {
            id: 'user-3',
            name: 'Priya Patel',
            email: 'priya.patel@place.tech',
        },
    ];
    const history: [number, string, number, Payment['status']][] = [
        [1, 'Hot desk', 1500, 'succeeded'],
        [3, 'Meeting room', 5000, 'succeeded'],
        [6, 'Parking space', 2000, 'refunded'],
        [9, 'Meeting room', 7500, 'succeeded'],
        [14, 'Hot desk', 1500, 'partially_refunded'],
        [20, 'Parking space', 2000, 'failed'],
        [2, 'AV technician', 16000, 'pending'],
    ];
    return history.map(([days, name, amount, status], index) => {
        const user = users[index % users.length];
        const created_at = now() - days * day;
        return newPayment({
            status,
            amount,
            amount_refunded:
                status === 'refunded'
                    ? amount
                    : status === 'partially_refunded'
                      ? amount / 2
                      : 0,
            description: name,
            items: [
                {
                    product_id: '',
                    resource_type: 'service',
                    resource_id: '',
                    name,
                    description: '',
                    unit: 'booking',
                    quantity: 1,
                    unit_amount: amount,
                    amount,
                },
            ],
            user_id: user.id,
            user_email: user.email,
            user_name: user.name,
            reference: { type: 'booking', id: `booking-${index}` },
            payment_method: {
                type: 'card',
                brand: 'visa',
                last4: '4242',
            },
            created_at,
            updated_at: created_at,
        });
    });
}

/**
 * In-memory payment driver for mock mode. The current user is privileged,
 * so all pages work. A hosted page counts as paid a few seconds after it
 * opens.
 */
class PaymentsModule implements MockDriver<PaymentDriver> {
    private _products: PaymentProduct[] = [
        product({
            name: 'Meeting room',
            description: 'Hourly rate for meeting rooms',
            resource_type: 'room',
            unit: 'hour',
            unit_amount: 2500,
        }),
        product({
            name: 'Hot desk',
            description: 'Daily rate for desks',
            resource_type: 'desk',
            unit: 'day',
            unit_amount: 1500,
        }),
        product({
            name: 'Parking space',
            resource_type: 'parking',
            unit: 'day',
            unit_amount: 2000,
        }),
        product({
            name: 'AV technician',
            description: 'On-site support for events',
            resource_type: 'service',
            unit: 'hour',
            unit_amount: 8000,
        }),
        product({
            name: 'Room cleaning',
            resource_type: 'service',
            unit: 'item',
            unit_amount: 4000,
        }),
    ];
    private _methods: PaymentMethod[] = [
        {
            id: 'pm-visa',
            type: 'card',
            brand: 'visa',
            last4: '4242',
            exp_month: 8,
            exp_year: new Date().getFullYear() + 2,
            is_default: true,
        },
    ];
    private _payments: Payment[] = seedHistory();
    private _invoices: Invoice[] = [];
    /** Sessions of `create_checkout` by idempotency key */
    private _checkouts = new Map<string, CheckoutSession>();
    /** `request_id` values of the refunds that are done, by payment */
    private _refunds = new Set<string>();

    constructor(_: HashMap) {}

    $get_config(): PaymentConfig {
        return {
            provider: 'mock',
            currency: CURRENCY,
            privileged: true,
            capabilities: [
                'saved_methods',
                'refunds',
                'invoices',
                'manual_capture',
            ],
        };
    }

    $quote(items: PaymentLineItemRequest[]): PaymentQuote {
        const line_items = items.flatMap((item) =>
            priceItem(this._products, item),
        );
        const subtotal = line_items.reduce((sum, i) => sum + i.amount, 0);
        const tax = Math.round(subtotal / 11);
        return {
            currency: CURRENCY,
            items: line_items,
            subtotal: subtotal - tax,
            tax,
            total: subtotal,
        };
    }

    $create_checkout(request: CheckoutRequest): CheckoutSession {
        // A retry with the same key gets the first session, with no new payment
        const existing = this._checkouts.get(request.idempotency_key);
        if (existing) return existing;
        const quote = this.$quote(request.items);
        if (quote.total !== request.expected_total) {
            throw 'The price changed. Check the new price and try again.';
        }
        const method = this._methods.find(
            (_) => _.id === request.payment_method_id,
        );
        const payment = newPayment({
            amount: quote.total,
            description: request.description,
            items: quote.items,
            status: method ? 'authorized' : 'pending',
            payment_method: method && {
                type: method.type,
                brand: method.brand,
                last4: method.last4,
            },
        });
        this._payments.unshift(payment);
        const session: CheckoutSession = {
            payment_id: payment.id,
            status: payment.status,
            url: method ? undefined : request.return_url,
            expires_at: now() + 30 * 60,
        };
        this._checkouts.set(request.idempotency_key, session);
        return session;
    }

    $get_payment(id: string): Payment {
        const payment = linkedPayment(this._payments, id);
        // Counts from the last link to the hosted page
        if (
            payment.status === 'pending' &&
            now() - payment.updated_at >= HOSTED_PAY_DELAY
        ) {
            updatePayment(this._payments, id, {
                status: 'authorized',
                payment_method: { type: 'card', brand: 'visa', last4: '4242' },
            });
        }
        return findPayment(this._payments, id);
    }

    $get_payment_link(id: string, return_url: string): HostedSession {
        const payment = findPayment(this._payments, id);
        if (!['pending', 'requires_action'].includes(payment.status)) {
            throw `Payment is ${payment.status}`;
        }
        updatePayment(this._payments, id, { status: 'pending' });
        return {
            id: `cs-${randomString(8)}`,
            url: return_url,
            expires_at: now() + 30 * 60,
        };
    }

    $capture_payment(
        id: string,
        reference: PaymentReference,
        exclude_resource_ids: string[],
    ): Payment {
        const payment = findPayment(this._payments, id);
        const same =
            payment.reference?.type === reference.type &&
            payment.reference?.id === reference.id;
        // A repeated capture for the same reference returns the payment
        if (payment.status === 'succeeded' && same) return payment;
        // A payment that is already taken is linked, with no new charge
        if (payment.status === 'succeeded' && !payment.reference) {
            return updatePayment(this._payments, id, { reference });
        }
        if (payment.status !== 'authorized') {
            throw `Payment is ${payment.status}`;
        }
        // Take only the items that are not excluded
        const items = payment.items.filter(
            (item) => !exclude_resource_ids.includes(item.resource_id),
        );
        const amount = items.reduce((sum, item) => sum + item.amount, 0);
        return updatePayment(this._payments, id, {
            status: amount > 0 ? 'succeeded' : 'cancelled',
            amount,
            items,
            reference,
            receipt_url: undefined,
        });
    }

    $cancel_payment(id: string): Payment {
        const payment = findPayment(this._payments, id);
        if (
            payment.status === 'succeeded' ||
            payment.status === 'partially_refunded'
        ) {
            return this.$refund_payment(id, null, 'Cancelled');
        }
        return updatePayment(this._payments, id, { status: 'cancelled' });
    }

    $list_payments(query: PaymentQuery): PaymentPage<Payment> {
        const list = this._payments.filter(
            (p) =>
                (!query.user_email || p.user_email === query.user_email) &&
                (!query.status || p.status === query.status) &&
                (!query.reference_id ||
                    p.reference?.id === query.reference_id) &&
                (!query.period_start || p.created_at >= query.period_start) &&
                (!query.period_end || p.created_at < query.period_end),
        );
        return page(list, query.limit, query.cursor);
    }

    $list_payment_methods(): PaymentMethod[] {
        return this._methods;
    }

    $create_setup_session(return_url: string): HostedSession {
        this._methods.push({
            id: `pm-${randomString(6)}`,
            type: 'card',
            brand: 'mastercard',
            last4: `${1000 + Math.floor(Math.random() * 9000)}`,
            exp_month: 3,
            exp_year: new Date().getFullYear() + 3,
            is_default: false,
        });
        return {
            id: `seti-${randomString(8)}`,
            url: return_url,
            expires_at: now() + 30 * 60,
        };
    }

    $remove_payment_method(id: string): void {
        this._methods = this._methods.filter((_) => _.id !== id);
    }

    $request_invoice(payment_id: string, billing: BillingDetails): Invoice {
        const payment = findPayment(this._payments, payment_id);
        const invoice: Invoice = {
            id: `inv-${randomString(8)}`,
            number: '',
            status: 'requested',
            payment_id,
            user_email: payment.user_email,
            user_name: payment.user_name,
            amount: payment.amount,
            currency: payment.currency,
            items: payment.items,
            billing,
            memo: '',
            created_at: now(),
        };
        this._invoices.unshift(invoice);
        updatePayment(this._payments, payment_id, { invoice_id: invoice.id });
        return invoice;
    }

    $list_invoices(query: InvoiceQuery): PaymentPage<Invoice> {
        const list = this._invoices.filter(
            (i) =>
                (!query.user_email || i.user_email === query.user_email) &&
                (!query.status || i.status === query.status) &&
                (!query.payment_id || i.payment_id === query.payment_id),
        );
        return page(list, query.limit, query.cursor);
    }

    $refund_payment(
        id: string,
        amount: number | null,
        _reason: string,
        request_id?: string | null,
    ) {
        const payment = findPayment(this._payments, id);
        const key = request_id ? `${id}:${request_id}` : '';
        if (key && this._refunds.has(key)) return payment;
        const refundable = payment.amount - payment.amount_refunded;
        const refund = amount === null ? refundable : amount;
        if (refund <= 0 || refund > refundable) throw 'Invalid refund amount';
        const amount_refunded = payment.amount_refunded + refund;
        if (key) this._refunds.add(key);
        return updatePayment(this._payments, id, {
            amount_refunded,
            status:
                amount_refunded >= payment.amount
                    ? 'refunded'
                    : 'partially_refunded',
        });
    }

    $send_invoice(id: string, email: string | null): Invoice {
        const invoice = this._invoices.find((_) => _.id === id);
        if (!invoice) throw 'Invoice not found';
        const paid = !!invoice.payment_id;
        Object.assign(invoice, {
            number:
                invoice.number ||
                `INV-${`${this._invoices.length}`.padStart(4, '0')}`,
            status: paid ? 'paid' : 'open',
            sent_at: now(),
            billing: email
                ? { ...invoice.billing, email, name: invoice.user_name }
                : invoice.billing,
        });
        return invoice;
    }

    $create_invoice(request: InvoiceCreateRequest): Invoice {
        const quote = this.$quote(request.items);
        const invoice: Invoice = {
            id: `inv-${randomString(8)}`,
            number: '',
            status: 'draft',
            user_email: request.user_email,
            user_name: request.user_name || request.user_email,
            amount: quote.total,
            currency: quote.currency,
            items: quote.items,
            memo: request.memo || '',
            created_at: now(),
            due_at: now() + request.due_days * 24 * 60 * 60,
        };
        this._invoices.unshift(invoice);
        return request.send ? this.$send_invoice(invoice.id, null) : invoice;
    }

    $list_products(query: ProductQuery): PaymentProduct[] {
        return this._products.filter(
            (p) =>
                (query.include_inactive || p.active) &&
                (!query.resource_type ||
                    p.resource_type === query.resource_type),
        );
    }

    $save_product(input: PaymentProductInput): PaymentProduct {
        const existing = this._products.find((_) => _.id === input.id);
        if (existing) {
            Object.assign(existing, input, { updated_at: now() });
            return existing;
        }
        const item = product({ ...input, id: `prod-${randomString(8)}` });
        this._products.push(item);
        return item;
    }
}

export const createPaymentsModule = (space: HashMap, overrides: HashMap = {}) =>
    new PaymentsModule({ ...space, ...overrides });
