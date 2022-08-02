
export interface StripeCustomer {
    id?: string;
    name: string;
    email: string;
}

export interface StripeCard {
    id: string;
    brand: string;
    exp_month: string;
    exp_year: string;
    last4: string;
}

export interface StripeNewCard {
    object: 'card';
    number: string;
    name: string;
    cvv: string;
    exp_month: string;
    exp_year: string;
}

export interface StripePrice {
    id: string;
    product: string;
    currency: string;
    unit_amount: number;
}

export interface StripeInvoice {
    id: string;
    customer: string;
    lines: {
        object: 'list';
        data: StripeInvoiceLineItem[];
    };
}

export interface StripeInvoiceLineItem {
    price: StripePrice;
    quantity: number;
}
