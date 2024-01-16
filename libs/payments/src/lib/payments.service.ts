import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { getModule } from '@placeos/ts-client';
import { BehaviorSubject, of } from 'rxjs';
import { shareReplay, switchMap, tap } from 'rxjs/operators';

import { SettingsService } from 'libs/common/src/lib/settings.service';
import { currentUser } from 'libs/common/src/lib/user-state';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
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
const STRIPE_MODULE = 'Payment';

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
        private _settings: SettingsService,
        private _dialog: MatDialog
    ) {}

    public async makePayment(
        details: PaymentDetails
    ): Promise<PaymentResult | undefined> {
        if (!this.payment_module) throw 'Payments not enabled';
        const [cost, period] = await this._getCostOfProduct(
            details?.type
        ).catch((_) => [0, 60]);
        console.log('Cost:', cost, period);
        if (cost <= 0) return;
        let customer_id = this._settings.get('STRIPE_Customer_ID');
        if (!customer_id) customer_id = await this._newCustomerID();
        this._settings.saveUserSetting('STRIPE_Customer_ID', customer_id);
        const amount = cost * (details.duration / period);
        let result = undefined;
        const makePayment = async (c: any) => {
            result = await this._processPayment(amount, customer_id, c).catch(
                (e) => {
                    this._loading.next('');
                    throw e;
                }
            );
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

    private async _addPaymentMethod(card: PaymentCardDetails): Promise<string> {
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) throw 'Unable to load module';
        const payment_method = await mod.execute('add_payment_method', [
            'card',
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            null,
            card,
        ]);
        return payment_method.id || payment_method;
    }

    private async _getCostOfProduct(type: string) {
        let price: [number, number] = [0, 60];
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) return price;
        const product_list = await mod.execute('get_product_prices', [
            null,
            null,
            type,
        ]);
        if (!product_list.length) return price;
        return product_list;
    }

    private async _processPayment(
        amount: number,
        customer_id: string,
        card_details?: PaymentCardDetails
    ) {
        this._loading.next('Checking payment method...');
        console.log('Getting payment method...');
        const source = card_details
            ? await this._addPaymentMethod(card_details)
            : this._active_card.getValue();
        if (!source) throw 'No payment source selected';
        this._loading.next('Processing payment...');
        console.log('Processing payment...');
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) throw 'Unable to load module';
        const id = await mod.execute<string>('create_payment_intent', [
            amount,
            this._org.building.currency || 'USD',
            null,
            null,
            customer_id,
            null,
            null,
            null,
            currentUser()?.email,
        ]);
        if (!id) throw 'Failed to create payment';
        console.log('Confirming payment...');
        await mod.execute('confirm_payment_intent', [id, source]);
        this._loading.next('');
        return {
            success: true,
            state: 'approved',
            invoice_id: id,
            amount: amount,
            created_at: Date.now(),
            updated_at: Date.now(),
        };
    }

    private async _newCustomerID() {
        const mod = getModule(this.payment_module, STRIPE_MODULE);
        if (!mod) throw 'Unable to load module';
        const user = currentUser();
        const id = await mod.execute<string>('create_customer', [
            0,
            null,
            null,
            null,
            `${user.id}|${user.name}|FromPlaceOS`,
            user.email,
        ]);
        return id;
    }
}
