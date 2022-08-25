import { HashMap, randomInt } from '@placeos/common';

class PaymentsModule {
    
    $list_payment_methods(type: string) {
        
    }

    $add_payment_method(type: string, details: any) {

    }

    $get_product_price(id: string, period) {

    }

    $create_payment_intent(amount: number, source: string) {

    }

    $confirm_payment_intent(id: string) {
        
    }

    $cancel_payment_intent(id: string) {
        
    }

    constructor(_) {}
}

export const createPaymentsModule = (space: HashMap, overrides: HashMap = {}) =>
    new PaymentsModule({ ...space, ...overrides });
