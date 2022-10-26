import { HashMap, randomInt, randomString } from '@placeos/common';

class PaymentsModule {
    
    $list_payment_methods(type: string) {
        
    }

    $add_payment_method(type: string, details: any) {

    }

    $get_product_prices(id: string, period) {
        return [12000, 60];
    }

    $create_payment_intent(amount: number, source: string) {
        return randomString(12);
    }

    $confirm_payment_intent(id: string) {

    }

    $cancel_payment_intent(id: string) {
    }

    $create_customer(...args: any) {
        return `stripe-${randomInt(9_999_999, 1_000_000)}`;
    }

    constructor(_) {}
}

export const createPaymentsModule = (space: HashMap, overrides: HashMap = {}) =>
    new PaymentsModule({ ...space, ...overrides });
