import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { IconComponent } from '@placeos/components';

import { FinancialDocument } from './event-finance-mock.data';

export interface SendQuoteDialogData {
    document: FinancialDocument;
    event_name: string;
    recipient_name: string;
}

/** Map bill_to names to mock email addresses. */
const MOCK_EMAILS: Record<string, string> = {
    'R&D Division': 'rd.finance@placeos.com',
    'Executive Office': 'exec.office@placeos.com',
    'Board Secretary': 'board.secretary@placeos.com',
    'People & Culture': 'people.culture@placeos.com',
    'Events Coordinator': 'events@placeos.com',
    'HR Team': 'hr.team@placeos.com',
    'EHS Department': 'ehs@placeos.com',
};

function mockEmailFor(bill_to: string): string {
    return (
        MOCK_EMAILS[bill_to] ||
        `${bill_to.toLowerCase().replace(/[^a-z0-9]+/g, '.')}@placeos.com`
    );
}

@Component({
    selector: 'send-quote-dialog',
    template: `
        <div class="w-[480px]">
            <!-- Header -->
            <div
                class="flex items-center justify-between border-b border-base-200 px-6 py-4"
            >
                <div class="flex items-center space-x-2">
                    <icon class="text-info text-2xl">mail</icon>
                    <h2 class="text-lg font-semibold">{{ is_invoice ? 'Send Invoice' : 'Send Quote' }}</h2>
                </div>
                <button
                    icon
                    matRipple
                    (click)="dialogRef.close(false)"
                    class="h-8 w-8"
                >
                    <icon>close</icon>
                </button>
            </div>

            <!-- Email preview -->
            <div class="space-y-4 px-6 py-5">
                <!-- To -->
                <div class="space-y-1">
                    <label class="text-xs font-semibold opacity-60">To</label>
                    <div
                        class="flex items-center space-x-2 rounded border border-base-200 bg-base-200/30 px-3 py-2 text-sm"
                    >
                        <icon class="text-base opacity-50">person</icon>
                        <span class="font-medium">{{ data.recipient_name }}</span>
                        <span class="opacity-50"
                            >&lt;{{ recipient_email }}&gt;</span
                        >
                    </div>
                </div>

                <!-- Subject -->
                <div class="space-y-1">
                    <label class="text-xs font-semibold opacity-60"
                        >Subject</label
                    >
                    <div
                        class="rounded border border-base-200 bg-base-200/30 px-3 py-2 text-sm"
                    >
                        {{ email_subject }}
                    </div>
                </div>

                <!-- Body preview -->
                <div class="space-y-1">
                    <label class="text-xs font-semibold opacity-60"
                        >Message Preview</label
                    >
                    <div
                        class="rounded border border-base-200 bg-base-200/30 px-4 py-3 text-sm leading-relaxed"
                    >
                        <p>Dear {{ data.recipient_name }},</p>
                        <br />
                        <p>
                            Please find attached the {{ is_invoice ? 'invoice' : 'quote' }}
                            <strong>{{ data.document.doc_number }}</strong> for
                            the event
                            <strong>{{ data.event_name }}</strong
                            >.
                        </p>
                        <br />
                        <p>
                            <strong>Amount:</strong>
                            {{ formatted_total }}
                        </p>
                        <p>
                            <strong>Cost Centre:</strong>
                            {{ data.document.cost_centre }}
                        </p>
                        <br />
                        <p>
                            Please review and respond at your earliest
                            convenience.
                        </p>
                        <br />
                        <p class="opacity-50">
                            — PlaceOS Events Team
                        </p>
                    </div>
                </div>

                <!-- Optional message -->
                <div class="space-y-1">
                    <label class="text-xs font-semibold opacity-60"
                        >Additional Message (optional)</label
                    >
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <textarea
                            matInput
                            [(ngModel)]="additional_message"
                            rows="2"
                            placeholder="Add a personal note..."
                        ></textarea>
                    </mat-form-field>
                </div>
            </div>

            <!-- Footer -->
            <div
                class="flex items-center justify-end space-x-2 border-t border-base-200 px-6 py-4"
            >
                <button
                    btn
                    matRipple
                    class="rounded border border-base-300 px-4 py-2 text-sm"
                    (click)="dialogRef.close(false)"
                >
                    Cancel
                </button>
                <button
                    btn
                    matRipple
                    class="bg-info text-info-content flex items-center space-x-1 rounded px-4 py-2 text-sm font-medium"
                    [disabled]="sending"
                    (click)="send()"
                >
                    @if (sending) {
                        <icon class="animate-spin text-lg">progress_activity</icon>
                        <span>Sending...</span>
                    } @else {
                        <icon class="text-lg">send</icon>
                        <span>{{ is_invoice ? 'Send Invoice' : 'Send Quote' }}</span>
                    }
                </button>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatRippleModule,
        IconComponent,
    ],
})
export class SendQuoteDialogComponent {
    readonly dialogRef = inject(MatDialogRef<SendQuoteDialogComponent>);
    readonly data: SendQuoteDialogData = inject(MAT_DIALOG_DATA);

    readonly is_invoice = this.data.document.doc_type === 'invoice';
    readonly recipient_email = mockEmailFor(this.data.document.bill_to);
    readonly email_subject = `${this.is_invoice ? 'Invoice' : 'Quote'} ${this.data.document.doc_number} — ${this.data.event_name}`;
    readonly formatted_total = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(this.data.document.total);

    additional_message = '';
    sending = false;

    send(): void {
        this.sending = true;
        // Simulate network delay
        setTimeout(() => {
            this.dialogRef.close(true);
        }, 1500);
    }
}
