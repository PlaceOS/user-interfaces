import { Component, inject, input, signal } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatDialog } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTooltipModule } from '@angular/material/tooltip';

import { errorMessage, i18n, notifyError } from '@placeos/common';
import { IconComponent } from 'libs/components/src/lib/icon.component';
import { TranslatePipe } from 'libs/components/src/lib/translate.pipe';
import {
    PaymentDetailsData,
    PaymentDetailsModalComponent,
} from './payment-details-modal.component';
import { Payment, PaymentReference } from './payment.types';
import { PaymentsService } from './payments.service';

/**
 * Shows that a booking or an event has a payment, for a row of a booking
 * list. Select it to load the payment and open its details. Shows nothing
 * when payments are not enabled or the booking has no payment.
 *
 * The list does not load the payments, so that a long list does not send one
 * driver request for each row.
 */
@Component({
    selector: 'booking-payment',
    template: `
        @if (payment_id() && enabled()) {
            <button
                icon
                matRipple
                name="view-payment"
                class="text-success"
                [matTooltip]="'PAYMENTS.VIEW_PAYMENT' | translate"
                [attr.aria-label]="'PAYMENTS.VIEW_PAYMENT' | translate"
                [disabled]="loading()"
                (click)="open(); $event.stopPropagation()"
            >
                @if (loading()) {
                    <mat-spinner diameter="20" aria-hidden="true"></mat-spinner>
                } @else {
                    <icon>paid</icon>
                }
            </button>
        }
    `,
    imports: [
        IconComponent,
        MatProgressSpinnerModule,
        MatRippleModule,
        MatTooltipModule,
        TranslatePipe,
    ],
})
export class BookingPaymentComponent {
    private _payments = inject(PaymentsService);
    private _dialog = inject(MatDialog);

    /** `extension_data.payment_id` of the booking or the event */
    public readonly payment_id = input<string | undefined>('');
    /** The booking or the event of the row, so staff can take its payment */
    public readonly reference = input<PaymentReference>();
    /**
     * Rooms of the event of the row. Take payment does not take the rooms
     * of the payment that are not accepted here
     */
    public readonly resources = input<readonly EventResource[]>();
    public readonly enabled = this._payments.is_enabled;
    public readonly loading = signal(false);

    public async open() {
        const id = this.payment_id();
        if (!id || this.loading()) return;
        this.loading.set(true);
        try {
            const payment = await this._payments.call('get_payment', id);
            this._dialog.open<PaymentDetailsModalComponent, PaymentDetailsData>(
                PaymentDetailsModalComponent,
                {
                    data: {
                        payment,
                        reference: this.reference(),
                        exclude_resource_ids: declinedRooms(
                            payment,
                            this.resources(),
                        ),
                    },
                },
            );
        } catch (e) {
            notifyError(
                i18n('PAYMENTS.LOAD_ERROR', { error: errorMessage(e) || e }),
            );
        } finally {
            this.loading.set(false);
        }
    }
}

/** Room of an event, with the response of the room */
interface EventResource {
    id: string;
    response_status?: string;
}

/** IDs of the rooms of the payment that the event does not have as accepted */
function declinedRooms(
    payment: Payment,
    resources: readonly EventResource[] | undefined,
): string[] {
    if (!resources) return [];
    const accepted = new Set(
        resources
            .filter((_) => _.response_status !== 'declined')
            .map((_) => _.id),
    );
    return payment.items
        .filter(
            (_) => _.resource_type === 'room' && !accepted.has(_.resource_id),
        )
        .map((_) => _.resource_id);
}
