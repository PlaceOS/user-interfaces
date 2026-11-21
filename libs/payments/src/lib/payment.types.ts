/**
 * Contract between the apps and a PlaceOS payment driver. A driver for any
 * provider (Stripe, Adyen, Square...) implements `PaymentDriver`. See
 * `docs/payments.md` for the behaviour each method must have.
 *
 * - Amounts are integers in the minor unit of the currency, e.g. cents.
 * - Currencies are ISO 4217 codes, e.g. `AUD`.
 * - Timestamps are unix seconds, like other PlaceOS APIs.
 */

/** State of a payment. `FINAL_PAYMENT_STATES` lists the states that do not change without action */
export type PaymentStatus =
    | 'pending'
    | 'requires_action'
    | 'authorized'
    | 'succeeded'
    | 'partially_refunded'
    | 'refunded'
    | 'cancelled'
    | 'failed';

/** Things that a payment can pay for */
export type PaymentResourceType =
    | 'room'
    | 'desk'
    | 'parking'
    | 'locker'
    | 'catering'
    | 'asset'
    | 'service';

/** How the price of a product is multiplied */
export type PaymentUnit = 'booking' | 'hour' | 'day' | 'item';

/** Optional features of a driver. The apps hide the actions of missing features */
export type PaymentCapability =
    | 'saved_methods'
    | 'refunds'
    | 'invoices'
    | 'manual_capture';

export type InvoiceStatus = 'requested' | 'draft' | 'open' | 'paid' | 'void';

/** Settings of the driver for the current user */
export interface PaymentConfig {
    /** Name of the payment provider, e.g. `stripe` */
    provider: string;
    /** Default currency of the driver */
    currency: string;
    /** Whether the current user can manage the payments, invoices and products of other users */
    privileged: boolean;
    capabilities: PaymentCapability[];
}

/** Something to pay for. The driver finds the product and calculates the price */
export interface PaymentLineItemRequest {
    resource_type: PaymentResourceType;
    /** Product to charge. Without it, the driver finds the product for the resource */
    product_id?: string;
    /** ID of the resource, e.g. a space, desk or catering item */
    resource_id?: string;
    /** Building or level of the resource */
    zone_id?: string;
    /** Start of the booking */
    start?: number;
    /** Length of the booking in minutes */
    duration?: number;
    /** Number of units. Defaults to 1 */
    quantity?: number;
    /** Selected catering options of the item */
    option_ids?: string[];
    /** Name of the item to show when the driver has none, e.g. the resource name */
    name?: string;
}

/** Line item with the price that the driver calculated */
export interface PaymentLineItem {
    product_id: string;
    resource_type: PaymentResourceType;
    resource_id: string;
    name: string;
    description: string;
    unit: PaymentUnit;
    quantity: number;
    unit_amount: number;
    /** `unit_amount` multiplied by `quantity` */
    amount: number;
}

/** Price that the driver calculated for a list of line items */
export interface PaymentQuote {
    currency: string;
    items: PaymentLineItem[];
    subtotal: number;
    tax: number;
    total: number;
}

/** What a payment pays for */
export interface PaymentReference {
    type: 'booking' | 'event' | 'invoice' | 'other';
    id: string;
    zone_id?: string;
}

export interface CheckoutRequest {
    /**
     * Unique key of the checkout attempt. A retry after an unknown result,
     * e.g. a lost response, sends the same key. The driver must then return
     * the session of the first request and not start a second payment
     */
    idempotency_key: string;
    items: PaymentLineItemRequest[];
    /** Total of the quote that the user accepted. The driver must reject the request when its total is different */
    expected_total: number;
    description: string;
    /** Saved payment method to charge. Without it, the driver returns the URL of a hosted payment page */
    payment_method_id?: string;
    /** Save the new payment method for later payments */
    save_method?: boolean;
    /** Page that the hosted payment page opens after a payment */
    return_url: string;
    /** Page that the hosted payment page opens after the user cancels */
    cancel_url: string;
}

export interface CheckoutSession {
    payment_id: string;
    status: PaymentStatus;
    /** Hosted page that the user must open to pay or to confirm the payment */
    url?: string;
    /** Time after which the hosted page stops accepting the payment */
    expires_at: number;
}

/** Hosted page, e.g. to add a payment method */
export interface HostedSession {
    id: string;
    url: string;
    expires_at: number;
}

export interface PaymentMethod {
    id: string;
    /** Type of method, e.g. `card` */
    type: string;
    /** Brand of the card, e.g. `visa` */
    brand: string;
    last4: string;
    exp_month: number;
    exp_year: number;
    is_default: boolean;
}

export interface Payment {
    id: string;
    status: PaymentStatus;
    amount: number;
    amount_refunded: number;
    currency: string;
    description: string;
    items: PaymentLineItem[];
    user_id: string;
    user_email: string;
    user_name: string;
    reference?: PaymentReference;
    payment_method?: Pick<PaymentMethod, 'type' | 'brand' | 'last4'>;
    /** Receipt page of the provider */
    receipt_url?: string;
    /** Last invoice of the payment */
    invoice_id?: string;
    created_at: number;
    updated_at: number;
}

/** Filters for a list of payments. Users who are not privileged get only their own payments */
export interface PaymentQuery {
    user_email?: string;
    status?: PaymentStatus;
    reference_id?: string;
    period_start?: number;
    period_end?: number;
    /** Page size, 1 to 100 */
    limit?: number;
    /** `next_cursor` of the previous page */
    cursor?: string;
}

/** One page of a list */
export interface PaymentPage<T> {
    items: T[];
    /** Cursor of the next page. Not set on the last page */
    next_cursor?: string;
}

export interface BillingDetails {
    name: string;
    email: string;
    company?: string;
    tax_id?: string;
    address?: string;
}

export interface Invoice {
    id: string;
    /** Number from the provider. Empty until the invoice is sent */
    number: string;
    status: InvoiceStatus;
    payment_id?: string;
    user_email: string;
    user_name: string;
    amount: number;
    currency: string;
    items: PaymentLineItem[];
    billing?: BillingDetails;
    memo: string;
    /** Hosted page of the invoice, where the user can see or pay it */
    url?: string;
    pdf_url?: string;
    created_at: number;
    sent_at?: number;
    due_at?: number;
}

/** Filters for a list of invoices. Users who are not privileged get only their own invoices */
export interface InvoiceQuery {
    user_email?: string;
    status?: InvoiceStatus;
    payment_id?: string;
    /** Page size, 1 to 100 */
    limit?: number;
    cursor?: string;
}

/** New invoice for products or services that a user must pay */
export interface InvoiceCreateRequest {
    user_email: string;
    user_name?: string;
    items: PaymentLineItemRequest[];
    memo?: string;
    /** Number of days that the user has to pay the invoice */
    due_days: number;
    /** Send the invoice to the user now. Otherwise it stays a draft */
    send: boolean;
}

export interface PaymentProduct {
    id: string;
    name: string;
    description: string;
    active: boolean;
    resource_type: PaymentResourceType;
    /** Resources that the price applies to. Empty applies to all resources of the type */
    resource_ids: string[];
    /** Zones that the price applies to. Empty applies to all zones */
    zone_ids: string[];
    unit: PaymentUnit;
    unit_amount: number;
    currency: string;
    created_at: number;
    updated_at: number;
}

/** Product to save. Without an `id`, the driver makes a new product */
export type PaymentProductInput = Omit<
    PaymentProduct,
    'id' | 'created_at' | 'updated_at'
> & { id?: string };

export interface ProductQuery {
    resource_type?: PaymentResourceType;
    include_inactive?: boolean;
}

/**
 * Methods of a payment driver. Each method takes positional arguments in the
 * order given. Methods marked privileged must fail for users without
 * `PaymentConfig.privileged`.
 */
export interface PaymentDriver {
    get_config(): PaymentConfig;
    quote(items: PaymentLineItemRequest[]): PaymentQuote;
    create_checkout(request: CheckoutRequest): CheckoutSession;
    get_payment(id: string): Payment;
    /**
     * Take an authorized payment and link it to what it paid for. The items
     * of `exclude_resource_ids` are not taken, e.g. rooms that declined the
     * meeting. With nothing left to take, the driver releases the payment
     */
    capture_payment(
        id: string,
        reference: PaymentReference,
        exclude_resource_ids: string[],
    ): Payment;
    /**
     * New link to the hosted page of a payment that is `pending` or
     * `requires_action`, e.g. after the user closed the page. The payment ID
     * stays the same. Fails for payments in other states.
     */
    get_payment_link(id: string, return_url: string): HostedSession;
    /** Cancel a payment that is not taken yet. Refunds a taken payment */
    cancel_payment(id: string): Payment;
    list_payments(query: PaymentQuery): PaymentPage<Payment>;
    list_payment_methods(): PaymentMethod[];
    create_setup_session(return_url: string): HostedSession;
    remove_payment_method(id: string): void;
    request_invoice(payment_id: string, billing: BillingDetails): Invoice;
    list_invoices(query: InvoiceQuery): PaymentPage<Invoice>;
    /** Privileged. Refund all of a payment when `amount` is `null` */
    refund_payment(id: string, amount: number | null, reason: string): Payment;
    /** Privileged. Send a requested or draft invoice. `email` replaces the address of the user */
    send_invoice(id: string, email: string | null): Invoice;
    /** Privileged */
    create_invoice(request: InvoiceCreateRequest): Invoice;
    list_products(query: ProductQuery): PaymentProduct[];
    /** Privileged */
    save_product(product: PaymentProductInput): PaymentProduct;
}

export type PaymentDriverMethod = keyof PaymentDriver;

/** Payment states that do not change again without a refund */
export const FINAL_PAYMENT_STATES: readonly PaymentStatus[] = [
    'succeeded',
    'partially_refunded',
    'refunded',
    'cancelled',
    'failed',
];
