import { Component, inject, output } from '@angular/core';
import { Observable } from 'rxjs';

import { MatRippleModule } from '@angular/material/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { CommonModule } from '@angular/common';
import { OrganisationService } from 'libs/organisation/src/lib/organisation.service';
import {
    CardInputFieldComponent,
    PaymentCardDetails,
} from './card-input-field.component';

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
        @if (!(loading | async)) {
            <div class="relative max-h-[100vh] overflow-auto">
                @if (!success) {
                    <main
                        class="relative flex w-[24rem] flex-col items-center space-y-2 px-4 pt-8"
                    >
                        <h2 class="text-2xl font-medium">Booking Payment</h2>
                        <img src="assets/icons/cost.svg" class="w-1/2" />
                        <p class="pb-2 text-center text-sm">
                            You are requesting a {{ details.type }} booking in
                            {{ details.resource_name }} for
                            {{ details.date | date: 'mediumDate' }}
                            @if (!details.all_day) {
                                between
                                {{ details.date | date: 'shortTime' }} and
                                {{
                                    details.date + details.duration * 60 * 1000
                                        | date: 'shortTime'
                                }}
                            }
                        </p>
                        <p class="text-sm">You booking will cost:</p>
                        <p class="text-center text-lg font-medium">
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
                        >
                            Make Payment
                        </button>
                    </footer>
                    <button
                        icon
                        matRipple
                        mat-dialog-close
                        class="absolute left-1 top-1"
                    >
                        <i class="material-symbols-rounded text-2xl">close</i>
                    </button>
                } @else {
                    <main class="relative flex w-[24rem] flex-col px-8 pt-8">
                        <h2 class="text-2xl font-medium">Payment Successful</h2>
                        <h3 class="mb-2 text-xl font-medium">
                            Ref #{{ transaction_id }}
                        </h3>
                        <p>{{ details.amount / 100 | currency: code }} paid.</p>
                        <p>{{ details.resource_name }} booked.</p>
                        <p>{{ details.date | date: 'mediumDate' }}</p>
                        <p>
                            {{ details.date | date: 'shortTime' }} and
                            {{
                                details.date + details.duration * 60 * 1000
                                    | date: 'shortTime'
                            }}
                        </p>
                    </main>
                    <img
                        src="assets/icons/payment-confirmed.svg"
                        class="w-full"
                    />
                    <footer class="border-t border-base-200 p-4">
                        <button btn matRipple mat-dialog-close class="w-full">
                            Great, thanks.
                        </button>
                    </footer>
                }
            </div>
        } @else {
            <div
                class="flex h-full w-full flex-col items-center justify-center p-8"
            >
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        }
    `,
    styles: [``],
    imports: [
        CommonModule,
        CardInputFieldComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
    ],
})
export class PaymentModalComponent {
    private _data = inject<PaymentData>(MAT_DIALOG_DATA);
    private _org = inject(OrganisationService);

    public readonly event = output<PaymentCardDetails>();
    public readonly details = this._data;
    public readonly loading = this._data.loading;
    public card_details?: PaymentCardDetails;
    public success = false;
    public transaction_id = '12345678';

    public get code() {
        return this._org.currency_code;
    }

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
