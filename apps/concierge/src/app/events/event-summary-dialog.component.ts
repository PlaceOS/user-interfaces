import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatRippleModule } from '@angular/material/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
    MAT_DIALOG_DATA,
    MatDialogModule,
    MatDialogRef,
} from '@angular/material/dialog';
import { IconComponent } from '@placeos/components';
import { addMinutes, format } from 'date-fns';

import {
    ApprovalCategory,
    CATEGORY_DISPLAY_NAMES,
    CATEGORY_ICONS,
    MOCK_APPROVAL_EVENTS,
    MockApprovalEvent,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';
import { EventFinanceStateService } from './event-finance-state.service';
import {
    FinancialDocument,
    MOCK_FINANCIAL_DOCUMENTS,
} from './event-finance-mock.data';
import { generateFinancePdf } from './event-finance-pdf.util';

export interface EventSummaryData {
    event: MockApprovalEvent;
}

interface ApprovalItem {
    id: string;
    category: ApprovalCategory;
    title: string;
    status: string;
}

@Component({
    selector: 'event-summary-dialog',
    template: `
        <div class="w-[56rem] max-h-[85vh] max-w-full overflow-y-auto">
            <!-- Header -->
            <div
                class="flex items-start justify-between border-b border-base-300 px-6 py-5"
            >
                <div class="flex items-center space-x-3">
                    <span
                        class="flex h-10 w-10 items-center justify-center rounded bg-primary/10 text-primary"
                    >
                        <icon class="text-xl">event</icon>
                    </span>
                    <div>
                        <h3 class="text-lg font-semibold">
                            {{ event.title }}
                        </h3>
                        <div class="text-sm opacity-60">
                            {{ event.organiser }} &middot;
                            {{ formatDateShort(event.date) }}
                        </div>
                    </div>
                </div>
                <button
                    icon
                    matRipple
                    class="h-8 w-8"
                    (click)="dialogRef.close()"
                >
                    <icon class="text-xl">close</icon>
                </button>
            </div>

            <!-- Two-column body -->
            <div class="flex flex-col md:flex-row">
                <!-- Left column -->
                <div
                    class="flex-1 border-r border-base-300 px-6 py-5 space-y-6"
                >
                    <!-- Event Information -->
                    <div>
                        <h4 class="mb-3 text-sm font-semibold opacity-70">
                            Event Information
                        </h4>
                        <div class="space-y-2 text-sm">
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >person</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Organizer</div>
                                    <div class="font-medium">{{ event.organiser }}</div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >mail</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Email</div>
                                    <div class="text-info">{{ organiserEmail() }}</div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >schedule</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Date & Time</div>
                                    <div class="font-medium">
                                        {{ formatDate(event.date) }}
                                    </div>
                                    <div class="text-xs opacity-60">
                                        {{ formatTime(event.date) }} &ndash;
                                        {{ formatTime(addMins(event.date, event.duration_minutes)) }}
                                        ({{ event.duration_minutes }} min)
                                    </div>
                                </div>
                            </div>
                            <div class="flex items-start space-x-3">
                                <icon class="mt-0.5 text-lg opacity-50"
                                    >location_on</icon
                                >
                                <div>
                                    <div class="text-xs opacity-50">Location</div>
                                    <div>{{ event.location }}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Payment & Invoice -->
                    @if (quote) {
                        <div>
                            <h4 class="mb-3 text-sm font-semibold opacity-70">
                                Payment & Invoice
                            </h4>
                            <div class="rounded border border-base-300 p-4 space-y-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-lg opacity-50">receipt</icon>
                                        <span class="text-sm font-medium">{{ quote.doc_number }}</span>
                                    </div>
                                    <span
                                        class="rounded-full px-2 py-0.5 text-xs font-medium"
                                        [class]="quoteStatusClass()"
                                    >
                                        {{ quoteStatusLabel() }}
                                    </span>
                                </div>

                                <!-- Line items -->
                                <div class="space-y-1.5 text-sm">
                                    @for (item of quote.line_items; track item.id) {
                                        <div class="flex justify-between">
                                            <div>
                                                <div class="font-medium">{{ item.description }}</div>
                                            </div>
                                            <div class="font-medium whitespace-nowrap">
                                                {{ formatCurrency(item.line_total) }}
                                            </div>
                                        </div>
                                    }
                                </div>

                                <div class="border-t border-base-300 pt-2 space-y-1 text-sm">
                                    <div class="flex justify-between">
                                        <span class="opacity-60">Subtotal</span>
                                        <span>{{ formatCurrency(quote.subtotal) }}</span>
                                    </div>
                                    <div class="flex justify-between">
                                        <span class="opacity-60">Tax (GST)</span>
                                        <span>{{ formatCurrency(quote.tax_total) }}</span>
                                    </div>
                                    <div class="flex justify-between font-semibold">
                                        <span>Total</span>
                                        <span>{{ formatCurrency(quote.total) }}</span>
                                    </div>
                                </div>

                                @if (deposit) {
                                    <div class="border-t border-base-300 pt-2">
                                        <div class="flex justify-between text-sm">
                                            <div class="flex items-center space-x-1.5">
                                                <icon class="text-base opacity-50">payments</icon>
                                                <span>Deposit ({{ deposit.deposit_percent }}%)</span>
                                            </div>
                                            <div class="flex items-center space-x-2">
                                                <span class="font-medium">{{ formatCurrency(deposit.total) }}</span>
                                                <span
                                                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                                                    [class]="depositStatusClass()"
                                                >
                                                    {{ depositStatusLabel() }}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                }

                                <div class="flex gap-2 pt-1">
                                    <button
                                        matRipple
                                        class="flex items-center space-x-1 rounded border border-base-300 px-3 py-1.5 text-xs font-medium hover:bg-base-200"
                                        (click)="downloadQuotePdf()"
                                    >
                                        <icon class="text-base">download</icon>
                                        <span>Download PDF</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <!-- Right column -->
                <div class="flex-1 px-6 py-5 space-y-6">
                    <!-- Approval Progress -->
                    <div>
                        <div class="flex items-center justify-between mb-2">
                            <h4 class="text-sm font-semibold opacity-70">
                                Approval Progress
                            </h4>
                            <span class="text-sm font-medium">
                                {{ approvalPercent() }}% Complete
                            </span>
                        </div>
                        <mat-progress-bar
                            mode="determinate"
                            [value]="approvalPercent()"
                            class="rounded"
                        />
                        <div class="mt-1 text-xs opacity-50">
                            {{ approvedCount() }} of {{ approval_items.length }} approvals complete
                        </div>
                    </div>

                    <!-- Approval Timeline -->
                    <div>
                        <h4 class="mb-3 text-sm font-semibold opacity-70">
                            Approval Timeline
                        </h4>

                        <!-- Submitted entry -->
                        <div class="flex items-start space-x-3 pb-4">
                            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-info">
                                <icon class="text-sm text-white">send</icon>
                            </span>
                            <div>
                                <div class="text-sm font-medium">Event Submitted</div>
                                <div class="text-xs opacity-50">
                                    {{ formatDateTime(event.date - 7 * 24 * 60 * 60 * 1000) }}
                                </div>
                            </div>
                        </div>

                        <!-- Approval entries -->
                        <div class="space-y-3">
                            @for (item of approval_items; track item.id) {
                                <div class="flex items-start space-x-3">
                                    @switch (item.status) {
                                        @case ('approved') {
                                            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success">
                                                <icon class="text-sm text-white">check_circle</icon>
                                            </span>
                                        }
                                        @case ('declined') {
                                            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-error">
                                                <icon class="text-sm text-white">cancel</icon>
                                            </span>
                                        }
                                        @default {
                                            <span class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-warning">
                                                <icon class="text-sm text-white">schedule</icon>
                                            </span>
                                        }
                                    }
                                    <div class="flex-1 min-w-0">
                                        <div class="flex items-center justify-between">
                                            <div class="text-sm font-medium">
                                                {{ categoryName(item.category) }}
                                            </div>
                                            <span
                                                class="text-xs font-medium"
                                                [class.text-success]="item.status === 'approved'"
                                                [class.text-error]="item.status === 'declined'"
                                                [class.text-warning]="item.status === 'pending'"
                                            >
                                                {{ item.status === 'approved' ? 'Approved' : item.status === 'declined' ? 'Declined' : 'Pending' }}
                                            </span>
                                        </div>
                                        @if (item.status === 'approved') {
                                            <div class="text-xs opacity-50 mt-0.5">
                                                Completed
                                            </div>
                                        }
                                        @if (item.status === 'pending') {
                                            <div class="text-xs text-warning mt-0.5">
                                                Awaiting approval
                                            </div>
                                        }
                                        @if (item.status === 'declined') {
                                            <div class="text-xs text-error mt-0.5">
                                                Action required
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>

                    <!-- Related Services -->
                    @if (child_events.length) {
                        <div>
                            <h4 class="mb-2 text-sm font-semibold opacity-70">
                                Related Services
                            </h4>
                            <div class="space-y-1.5">
                                @for (child of child_events; track child.id) {
                                    <div class="flex items-center space-x-2 text-sm">
                                        <span
                                            class="flex h-6 w-6 shrink-0 items-center justify-center rounded"
                                            [class]="serviceBadgeColor(child.category)"
                                        >
                                            <icon class="text-xs text-white">{{
                                                categoryIcon(child.category)
                                            }}</icon>
                                        </span>
                                        <span>{{ child.title }}</span>
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    `,
    imports: [
        CommonModule,
        IconComponent,
        MatRippleModule,
        MatDialogModule,
        MatProgressBarModule,
    ],
})
export class EventSummaryDialogComponent {
    readonly data = inject<EventSummaryData>(MAT_DIALOG_DATA);
    readonly dialogRef = inject(MatDialogRef);
    private _approval_state = inject(EventApprovalStateService);
    private _finance_state = inject(EventFinanceStateService);

    private readonly _currency_formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    get event(): MockApprovalEvent {
        return this.data.event;
    }

    get parent_event(): MockApprovalEvent | null {
        if (!this.event.parent_event) return null;
        return (
            MOCK_APPROVAL_EVENTS.find(
                (e) => e.id === this.event.parent_event,
            ) || null
        );
    }

    get child_events(): MockApprovalEvent[] {
        return MOCK_APPROVAL_EVENTS.filter(
            (e) => e.parent_event === this.event.id,
        );
    }

    /** Build the approval checklist from the event and its children. */
    get approval_items(): ApprovalItem[] {
        const root = this.parent_event || this.event;
        const children = MOCK_APPROVAL_EVENTS.filter(
            (e) => e.parent_event === root.id,
        );
        return [root, ...children].map((evt) => ({
            id: evt.id,
            category: evt.category,
            title: evt.title,
            status: this.getStatus(evt.id),
        }));
    }

    /** The quote linked to this event (or its parent). */
    get quote(): FinancialDocument | null {
        const root_id = this.parent_event?.id || this.event.id;
        return (
            MOCK_FINANCIAL_DOCUMENTS.find(
                (d) => d.event_id === root_id && d.doc_type === 'quote',
            ) || null
        );
    }

    /** The deposit invoice linked to this event's quote. */
    get deposit(): FinancialDocument | null {
        const q = this.quote;
        if (!q) return null;
        return (
            MOCK_FINANCIAL_DOCUMENTS.find(
                (d) =>
                    d.converted_from === q.id &&
                    d.invoice_type === 'deposit',
            ) || null
        );
    }

    approvedCount(): number {
        return this.approval_items.filter((i) => i.status === 'approved')
            .length;
    }

    approvalPercent(): number {
        const items = this.approval_items;
        if (!items.length) return 0;
        return Math.round((this.approvedCount() / items.length) * 100);
    }

    getStatus(event_id: string): string {
        return this._approval_state.status[event_id] || 'pending';
    }

    categoryIcon(category: string): string {
        return CATEGORY_ICONS[category] || 'event';
    }

    categoryName(category: string): string {
        return CATEGORY_DISPLAY_NAMES[category] || category;
    }

    organiserEmail(): string {
        return (
            this.event.organiser
                .toLowerCase()
                .replace(/[^a-z0-9]/g, '.') + '@ucla.edu'
        );
    }

    quoteStatusLabel(): string {
        const q = this.quote;
        if (!q) return '';
        return q.status.charAt(0).toUpperCase() + q.status.slice(1);
    }

    quoteStatusClass(): string {
        const s = this.quote?.status;
        if (s === 'accepted') return 'bg-success/20 text-success';
        if (s === 'draft') return 'bg-base-200 text-base-content';
        if (s === 'sent') return 'bg-info/20 text-info';
        return 'bg-base-200 text-base-content';
    }

    depositStatusLabel(): string {
        const d = this.deposit;
        if (!d) return '';
        return d.status.charAt(0).toUpperCase() + d.status.slice(1);
    }

    depositStatusClass(): string {
        const s = this.deposit?.status;
        if (s === 'paid') return 'bg-success/20 text-success';
        if (s === 'invoiced') return 'bg-warning/20 text-warning';
        if (s === 'overdue') return 'bg-error/20 text-error';
        return 'bg-base-200 text-base-content';
    }

    private readonly _service_badge_colors: Record<string, string> = {
        venue: 'bg-blue-600',
        dining: 'bg-amber-600',
        av_tech: 'bg-purple-600',
        safety: 'bg-red-600',
        events: 'bg-teal-600',
        parking: 'bg-indigo-600',
    };

    serviceBadgeColor(category: string): string {
        return this._service_badge_colors[category] || 'bg-gray-500';
    }

    formatCurrency(value: number): string {
        return this._currency_formatter.format(value);
    }

    formatDate(ts: number): string {
        return format(ts, 'EEEE, d MMMM yyyy');
    }

    formatDateShort(ts: number): string {
        return format(ts, 'd MMM yyyy');
    }

    formatTime(ts: number): string {
        return format(ts, 'h:mm a');
    }

    formatDateTime(ts: number): string {
        return format(ts, 'd MMM yyyy, h:mm a');
    }

    addMins(ts: number, mins: number): number {
        return addMinutes(ts, mins).valueOf();
    }

    downloadQuotePdf(): void {
        if (this.quote) generateFinancePdf(this.quote);
    }
}
