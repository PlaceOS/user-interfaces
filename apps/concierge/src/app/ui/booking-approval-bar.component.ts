import { Component, input, output } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { BulkActionsBarComponent, TranslatePipe } from '@placeos/components';

/** Bulk actions bar with approve and reject actions for selected bookings */
@Component({
    selector: 'booking-approval-bar',
    template: `
        <bulk-actions-bar [count]="count()" (clear)="clear.emit()">
            <button
                btn
                matRipple
                class="inverse"
                [disabled]="busy()"
                (click)="setApproval.emit(true)"
            >
                {{ 'APP.CONCIERGE.BULK_APPROVE' | translate }}
            </button>
            <button
                btn
                matRipple
                class="inverse"
                [disabled]="busy()"
                (click)="setApproval.emit(false)"
            >
                {{ 'APP.CONCIERGE.BULK_REJECT' | translate }}
            </button>
        </bulk-actions-bar>
    `,
    imports: [BulkActionsBarComponent, MatRippleModule, TranslatePipe],
})
export class BookingApprovalBarComponent {
    /** Number of selected bookings */
    public readonly count = input(0);
    /** Disables the actions while a bulk action runs */
    public readonly busy = input(false);
    /** Emits `true` to approve and `false` to reject */
    public readonly setApproval = output<boolean>();
    public readonly clear = output<void>();
}
