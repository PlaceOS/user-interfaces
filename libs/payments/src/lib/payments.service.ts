import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OrganisationService } from '@placeos/organisation';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';
import { PaymentCardDetails } from './card-input-field.component';
import { PaymentModalComponent } from './payment-modal.component';

export interface PaymentDetails {
    type: string; // Resource Type
    resource_name: string;
    date: number;
    duration: number;
    all_day: boolean;
}

export interface PaymentResult {
    success: boolean;
    state: 'processing' | 'pending' | 'approved';
    invoice_id: string;
    amount: number;
    created_at: number;
    updated_at: number;
}

export const STRIPE_ID_TOKEN = 'STRIPE+customer_id';
const STRIPE_MODULE = 'StripePayments';

@Injectable({
    providedIn: 'root',
})
export class PaymentsService {
    private _loading = new BehaviorSubject('');
    private _active_card = new BehaviorSubject('');

    public readonly loading = this._loading.asObservable();

    public readonly payment_sources = of(1).pipe(
        switchMap(() => {
            const mod = getModule(this.payment_module, STRIPE_MODULE);
            if (!mod) return of([]);
            return mod.execute('list_payment_methods', ['card']);
        }),
        tap((_) => (_[0] ? this._active_card.next(_[0].id) : '')),
        shareReplay(1)
    );

    public get payment_module() {
        return this._org.binding('payments');
    }

    constructor(
        private _org: OrganisationService,
        private _dialog: MatDialog
    ) {}

    public async makePayment(
        details: PaymentDetails
    ): Promise<PaymentResult | undefined> {
        // if (!this.payment_module) throw 'Payments not enabled';
        const [cost, period] = await this._getCostOfProduct(
            details?.type
        ).catch((_) => [6000, 60]);
        // if (cost <= 0) return;
        const amount = cost * (details.duration / period);
        let result = undefined;
        const makePayment = async (c: any) => {
            result = await this._processPayment(amount, c).catch((e) => {
                this._loading.next('');
                throw e;
            });
        };
        const data = {
            ...details,
            rate: `$${(cost / 100).toFixed(2)} per hour`,
            amount,
            makePayment,
            loading: this.loading,
        };
        const ref = this._dialog.open(PaymentModalComponent, { data });
        await ref.afterClosed().toPromise();
        return result;
    }

    private async _addPaymentMethod(card: PaymentCardDetails) {
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) throw 'Unable to load module';
        await mod.execute('add_payment_method', ['card', card]);
        return card;
    }

    private async _getCostOfProduct(type: string) {
        let price: [number, number] = [0, 60];
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) return price;
        price =
            (await mod.execute('get_product_price', [type, 'hourly'])) || price;
        return price;
    }

    private async _processPayment(
        amount: number,
        card_details?: PaymentCardDetails
    ) {
        this._loading.next('Checking payment method...');
        const source = card_details
            ? await this._addPaymentMethod(card_details)
            : this._active_card.getValue();
        if (!source) throw 'No payment source selected';
        this._loading.next('Processing payment...');
        console.log('Process Payment:', amount, card_details);
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) throw 'Unable to load module';
        const id = await mod.execute<string>('create_payment_intent', [
            amount,
            source,
        ]);
        if (!id) throw 'Failed to create payment';
        await mod.execute('confirm_payment_intent', [id]);
        this._loading.next('');
        return {
            success: true,
            state: 'approved',
            invoice_id: id,
            amount: amount,
            created_at: Date.now(),
            updated_at: Date.now()
        };
    }
}
