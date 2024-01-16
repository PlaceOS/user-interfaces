import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';

import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import { PaymentCardDetails } from './card-input-field.component';

export interface PaymentData {
    type: string; // Resource Type
    resource_name: string;
    date: number;
    duration: number;
    all_day: boolean;
    has_payment_method: boolean;
    rate: string;
    amount: number; // Number in cents
    loading: Observable<string>;
    makePayment: (_?: PaymentCardDetails) => Promise<void>;
}

@Component({
    selector: 'payment-modal',
    template: `
        <div
            class="relative max-h-[100vh] overflow-auto"
            *ngIf="!(loading | async); else load_state"
        >
            <ng-container *ngIf="!success; else success_state">
                <main
                    class="px-4 pt-8 w-[24rem] space-y-2 flex flex-col items-center relative"
                >
                    <h2 class="text-2xl font-medium" i18n>Booking Payment</h2>
                    <img src="assets/icons/cost.svg" class="w-1/2" />
                    <p class="text-sm text-center pb-2" i18n>
                        You are requesting a {{ details.type }} booking in
                        {{ details.resource_name }} for
                        {{ details.date | date: 'mediumDate' }}
                        <ng-container *ngIf="!details.all_day">
                            between {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </ng-container>
                    </p>
                    <p class="text-sm" i18n>You booking will cost:</p>
                    <p class="text-lg font-medium text-center">
                        <strong>{{
                            details.amount / 100 | currency: code
                        }}</strong>
                    </p>
                    <card-input-field
                        class="w-full"
                        [(ngModel)]="card_details"
                    ></card-input-field>
                </main>
                <footer class="p-4">
                    <button
                        matRipple
                        class="w-full"
                        (click)="processPayment()"
                        i18n
                    >
                        Make Payment
                    </button>
                </footer>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-1 left-1"
                >
                    <i class="material-icons text-2xl">close</i>
                </button>
            </ng-container>
        </div>
        <ng-template #load_state>
            <div
                class="w-full h-full flex flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        </ng-template>
        <ng-template #success_state>
            <main class="px-8 pt-8 w-[24rem] flex flex-col relative">
                <h2 class="text-2xl font-medium" i18n>Payment Successful</h2>
                <h3 class="text-xl font-medium mb-2">
                    Ref #{{ transaction_id }}
                </h3>
                <p i18n>{{ details.amount / 100 | currency: code }} paid.</p>
                <p i18n>{{ details.resource_name }} booked.</p>
                <p>{{ details.date | date: 'mediumDate' }}</p>
                <p i18n>
                    {{ details.date | date: 'shortTime' }} and
                    {{
                        details.date + details.duration * 60 * 1000
                            | date: 'shortTime'
                    }}
                </p>
            </main>
            <img src="assets/icons/payment-confirmed.svg" class="w-full" />
            <footer class="p-4 border-t border-base-200">
                <button btn matRipple mat-dialog-close class="w-full" i18n>
                    Great, thanks.
                </button>
            </footer>
        </ng-template>
    `,
    styles: [``],
})
export class PaymentModalComponent {
    @Output() public readonly event = new EventEmitter();
    public readonly details = this._data;
    public readonly loading = this._data.loading;
    public card_details?: PaymentCardDetails;
    public success = false;
    public transaction_id = '12345678';

    public get code() {
        return this._org.currency_code;
    }

    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: PaymentData,
        private _org: OrganisationService
    ) {}

    public async processPayment() {
        if (!this.card_details || !this._validCardDetails()) return;
        this.event.emit(this.card_details);
        await this._data.makePayment(this.card_details);
        this.success = true;
    }

    private _validCardDetails() {
        return (
            (this.card_details?.cardholder.length || 0) > 0 &&
            (this.card_details?.cvv.length || 0) >= 3
        );
    }
}
