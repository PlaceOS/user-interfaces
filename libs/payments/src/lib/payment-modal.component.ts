import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Observable } from 'rxjs';
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
    loading: Observable<string>
    makePayment: (_?: PaymentCardDetails) => Promise<void>;
}

@Component({
    selector: 'payment-modal',
    template: `
        <div class="relative max-h-[100vh] overflow-auto" *ngIf="!loading; else load_state">
            <main
                class="px-4 pt-8 w-[24rem] space-y-2 flex flex-col items-center relative"
            >
                <h2 class="text-2xl font-medium">Booking Payment</h2>
                <img src="assets/icons/cost.svg" class="w-1/2" />
                <p class="text-sm text-center pb-2">
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
                <p class="text-sm">You booking will cost:</p>
                <p class="text-lg font-medium text-center">
                    <strong>{{ details.amount / 100 | currency }}</strong>
                </p>
                <card-input-field
                    class="w-full"
                    [(ngModel)]="card_details"
                ></card-input-field>
            </main>
            <footer class="p-4">
                <button mat-button class="w-full" (click)="processPayment()">
                    Make Payment
                </button>
            </footer>
            <button
                mat-icon-button
                mat-dialog-close
                class="absolute top-1 left-1"
            >
                <i class="material-icons text-2xl">close</i>
            </button>
        </div>
        <ng-template #load_state>
            <div class="w-full h-full flex flex-col items-center justify-center p-8">
                <mat-spinner diameter="32"></mat-spinner>
                <p>{{ loading | async }}</p>
            </div>
        </ng-template>
        <ng-template #success_state>

        <ng-template>

    `,
    styles: [``],
})
export class PaymentModalComponent {
    @Output() public readonly event = new EventEmitter();
    public readonly details = this._data;
    public readonly loading = this._data.loading;
    public card_details?: PaymentCardDetails;
    public success = false;

    constructor(@Inject(MAT_DIALOG_DATA) private _data: PaymentData) {}

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
