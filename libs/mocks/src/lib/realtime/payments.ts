import { HashMap, randomInt, randomString } from '@placeos/common';

class PaymentsModule {
    $list_payment_methods(_type: string) {}

    $add_payment_method(_type: string, _details: unknown) {}

    $get_product_prices(_id: string, _period) {
        return [12000, 60];
    }

    $create_payment_intent(_amount: number, _source: string) {
        return randomString(12);
    }

    $confirm_payment_intent(_id: string) {}

    $cancel_payment_intent(_id: string) {}

    $create_customer(..._args: any) {
        return `stripe-${randomInt(9_999_999, 1_000_000)}`;
    }

    constructor(_) {}
}

export const createPaymentsModule = (space: HashMap, overrides: HashMap = {}) =>
    new PaymentsModule({ ...space, ...overrides });
