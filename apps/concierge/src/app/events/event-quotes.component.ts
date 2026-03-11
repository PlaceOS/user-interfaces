import { CommonModule } from '@angular/common';
import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatRippleModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent, SimpleTableComponent } from '@placeos/components';
import { isMock } from '@placeos/ts-client';
import { format } from 'date-fns';
import { map } from 'rxjs/operators';

import {
    EventRole,
    MOCK_APPROVAL_EVENTS,
    ROLE_DISPLAY_NAMES,
} from './event-approvals-mock.data';
import { EventApprovalStateService } from './event-approval-state.service';
import {
    DOC_STATUS_COLOR,
    DOC_STATUS_DISPLAY,
    FinancialDocStatus,
    FinancialDocument,
} from './event-finance-mock.data';
import { generateFinancePdf } from './event-finance-pdf.util';
import { EventFinanceStateService } from './event-finance-state.service';
import { EventQuoteDetailComponent } from './event-quote-detail.component';

@Component({
    selector: 'event-quotes',
    template: `
        <!-- Filter bar -->
        <div class="mb-4 flex flex-wrap items-center gap-2">
            <mat-form-field appearance="outline" class="no-subscript w-44">
                <mat-label>Status</mat-label>
                <mat-select
                    [(ngModel)]="status_filter"
                    (ngModelChange)="onStatusChange($event)"
                >
                    <mat-option value="all">All Statuses</mat-option>
                    @for (s of status_options; track s.value) {
                        <mat-option [value]="s.value">{{
                            s.label
                        }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-52">
                <mat-label>Department</mat-label>
                <mat-select
                    [(ngModel)]="vendor_filter"
                    (ngModelChange)="onVendorChange($event)"
                >
                    <mat-option value="all">All Departments</mat-option>
                    @for (dept of departments(); track dept) {
                        <mat-option [value]="dept">{{ dept }}</mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline" class="no-subscript w-52">
                <mat-label>Search</mat-label>
                <input
                    matInput
                    [(ngModel)]="search_filter"
                    (ngModelChange)="onSearchChange($event)"
                    placeholder="Search docs..."
                />
            </mat-form-field>
            @if (is_mock) {
                <mat-form-field appearance="outline" class="no-subscript w-52">
                    <mat-label>Role</mat-label>
                    <mat-select
                        [(ngModel)]="active_role"
                        (ngModelChange)="onRoleChange($event)"
                    >
                        @for (r of role_list; track r.value) {
                            <mat-option [value]="r.value">{{
                                r.label
                            }}</mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>

        <!-- Quotes section -->
        <h3 class="mb-2 text-base font-semibold">Quotes</h3>
        <div class="w-full overflow-x-auto">
            <simple-table
                class="block w-full min-w-4xl text-sm"
                [data]="filtered_quotes$"
                empty_message="No quotes found"
                [columns]="[
                    { key: 'event_id', name: 'Event', content: event_template },
                    { key: 'doc_number', name: 'Doc #', content: docnum_template, size: '9rem' },
                    { key: 'vendor_department', name: 'Vendor / Dept', content: vendor_template, size: '10rem' },
                    { key: 'total', name: 'Total', content: total_template, size: '8rem' },
                    { key: 'status', name: 'Status', content: status_template, size: '7rem', sortable: false },
                    { key: 'due_date', name: 'Due Date', content: due_template, size: '8rem' },
                    { key: 'last_updated', name: 'Updated', content: updated_template, size: '8rem' },
                    { key: 'actions', name: ' ', content: actions_template, size: '4rem', sortable: false },
                ]"
                [sortable]="true"
            />
        </div>

        <!-- Invoices section -->
        <h3 class="mb-2 mt-8 text-base font-semibold">Invoices</h3>
        <div class="w-full overflow-x-auto">
            <simple-table
                class="block w-full min-w-4xl text-sm"
                [data]="filtered_invoices$"
                empty_message="No invoices found"
                [columns]="[
                    { key: 'event_id', name: 'Event', content: event_template },
                    { key: 'doc_type', name: 'Type', content: type_template, size: '6rem', sortable: false },
                    { key: 'doc_number', name: 'Doc #', content: docnum_template, size: '9rem' },
                    { key: 'vendor_department', name: 'Vendor / Dept', content: vendor_template, size: '10rem' },
                    { key: 'total', name: 'Total', content: total_template, size: '8rem' },
                    { key: 'status', name: 'Status', content: status_template, size: '7rem', sortable: false },
                    { key: 'due_date', name: 'Due Date', content: due_template, size: '8rem' },
                    { key: 'last_updated', name: 'Updated', content: updated_template, size: '8rem' },
                    { key: 'actions', name: ' ', content: actions_template, size: '4rem', sortable: false },
                ]"
                [sortable]="true"
            />
        </div>
        <div class="h-20 w-full"></div>

        <!-- Event column -->
        <ng-template #event_template let-row="row">
            <div
                class="cursor-pointer px-3 py-2 text-sm font-medium hover:underline"
                (click)="_state.selectDocument(row.id)"
            >
                <span>{{ eventName(row.event_id) }}</span>
                @if (isEventCancelled(row.event_id)) {
                    <div class="mt-0.5 flex items-center space-x-1">
                        <icon class="text-error text-xs">cancel</icon>
                        <span class="text-[10px] font-semibold text-error">
                            Event Cancelled
                        </span>
                    </div>
                }
            </div>
        </ng-template>

        <!-- Type column -->
        <ng-template #type_template let-row="row">
            <div class="px-3 py-2">
                <span
                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                    [class]="
                        row.doc_type === 'quote'
                            ? 'bg-info/20 text-info'
                            : 'bg-warning/20 text-warning'
                    "
                >
                    {{ docTypeLabel(row) }}
                </span>
            </div>
        </ng-template>

        <!-- Doc # column -->
        <ng-template #docnum_template let-row="row">
            <div class="px-3 py-2 text-sm font-mono">
                {{ row.doc_number }}
            </div>
        </ng-template>

        <!-- Vendor column -->
        <ng-template #vendor_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ row.vendor_department }}
            </div>
        </ng-template>

        <!-- Total column -->
        <ng-template #total_template let-row="row">
            <div class="px-3 py-2 text-sm font-medium">
                {{ formatCurrency(row.total) }}
            </div>
        </ng-template>

        <!-- Status column -->
        <ng-template #status_template let-row="row">
            <div class="px-3 py-2">
                <span
                    class="rounded-full px-2 py-0.5 text-xs font-medium"
                    [class]="statusColor(row.status)"
                >
                    {{ statusLabel(row.status) }}
                </span>
            </div>
        </ng-template>

        <!-- Due date column -->
        <ng-template #due_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ formatDate(row.due_date) }}
            </div>
        </ng-template>

        <!-- Updated column -->
        <ng-template #updated_template let-row="row">
            <div class="px-3 py-2 text-sm">
                {{ formatDate(row.last_updated) }}
            </div>
        </ng-template>

        <!-- Actions column -->
        <ng-template #actions_template let-row="row">
            <button
                icon
                matRipple
                class="mx-2 h-12 w-12 rounded-sm"
                [matMenuTriggerFor]="menu"
                aria-label="More options"
            >
                <icon>more_vert</icon>
            </button>
            <mat-menu #menu="matMenu">
                <button
                    mat-menu-item
                    (click)="_state.selectDocument(row.id)"
                >
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">visibility</icon>
                        <div class="mr-2">View Details</div>
                    </div>
                </button>
                @if (
                    row.doc_type === 'quote' &&
                    canGenerateFinalForRow(row)
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.generateFinalInvoice(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">receipt_long</icon>
                            <div class="mr-2">Generate Final Invoice</div>
                        </div>
                    </button>
                }
                @if (
                    row.doc_type === 'invoice' &&
                    row.invoice_type === 'final' &&
                    row.status === 'draft' &&
                    canSendFinalForRow(row)
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.sendInvoice(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">forward_to_inbox</icon>
                            <div class="mr-2">Send Final Invoice</div>
                        </div>
                    </button>
                }
                @if (
                    row.doc_type === 'invoice' &&
                    (row.status === 'invoiced' || row.status === 'overdue') &&
                    can_record_payment()
                ) {
                    <button
                        mat-menu-item
                        (click)="_state.recordPayment(row.id)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">payments</icon>
                            <div class="mr-2">Mark Paid</div>
                        </div>
                    </button>
                }
                @if (can_export()) {
                    <button
                        mat-menu-item
                        (click)="exportPdf(row)"
                    >
                        <div class="flex items-center space-x-2">
                            <icon class="text-2xl">download</icon>
                            <div class="mr-2">Download PDF</div>
                        </div>
                    </button>
                }
            </mat-menu>
        </ng-template>

        <!-- Detail panel -->
        <event-quote-detail />
    `,
    styles: [
        `
            :host {
                display: block;
            }
        `,
    ],
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatMenuModule,
        MatRippleModule,
        SimpleTableComponent,
        IconComponent,
        EventQuoteDetailComponent,
    ],
})
export class EventQuotesComponent {
    readonly _state = inject(EventFinanceStateService);
    private _approval_state = inject(EventApprovalStateService);
    private _all_events = toSignal(this._approval_state.all_events$, {
        initialValue: MOCK_APPROVAL_EVENTS,
    });
    readonly is_mock = isMock();

    /** Split filtered documents into quotes and invoices */
    readonly filtered_quotes$ = this._state.filtered_documents$.pipe(
        map((docs) => docs.filter((d) => d.doc_type === 'quote')),
    );
    readonly filtered_invoices$ = this._state.filtered_documents$.pipe(
        map((docs) => docs.filter((d) => d.doc_type === 'invoice')),
    );

    readonly departments = toSignal(this._state.vendor_departments$, {
        initialValue: [],
    });

    /** Local filter state for two-way binding */
    status_filter = 'all';
    vendor_filter = 'all';
    search_filter = '';
    active_role: EventRole = 'global_admin';

    readonly can_record_payment = computed(() => {
        this._role_signal();
        return this._state.canPerformAction('record_payment');
    });
    readonly can_export = computed(() => {
        this._role_signal();
        return this._state.canPerformAction('export');
    });

    /** Whether the final invoice can be generated for a given quote row. */
    canGenerateFinalForRow(row: FinancialDocument): boolean {
        this._approval_signal();
        return this._state.canGenerateFinalInvoice(row);
    }

    /** Whether a draft final invoice can be sent for this row. */
    canSendFinalForRow(row: FinancialDocument): boolean {
        return (
            this._state.canPerformAction('send_quote') &&
            this._state.allApprovalsAccepted(row.event_id)
        );
    }

    /** Label for Type column: Quote, Deposit, Final, or Invoice. */
    docTypeLabel(row: FinancialDocument): string {
        if (row.doc_type === 'quote') return 'Quote';
        if (row.invoice_type === 'deposit') return 'Deposit';
        if (row.invoice_type === 'final') return 'Final';
        return 'Invoice';
    }

    private readonly _role_signal = toSignal(this._state.role$, {
        initialValue: 'global_admin' as EventRole,
    });
    /** Track approval changes so table action guards re-evaluate. */
    private readonly _approval_signal = toSignal(
        this._state.approval_status$,
        { initialValue: {} },
    );

    readonly status_options: { value: FinancialDocStatus; label: string }[] = [
        { value: 'draft', label: 'Draft' },
        { value: 'sent', label: 'Sent' },
        { value: 'accepted', label: 'Accepted' },
        { value: 'declined', label: 'Declined' },
        { value: 'invoiced', label: 'Invoiced' },
        { value: 'paid', label: 'Paid' },
        { value: 'overdue', label: 'Overdue' },
        { value: 'cancelled', label: 'Cancelled' },
    ];

    readonly role_list = (
        Object.keys(ROLE_DISPLAY_NAMES) as EventRole[]
    ).map((value) => ({
        value,
        label: ROLE_DISPLAY_NAMES[value],
    }));

    private readonly _currency_formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    onRoleChange(role: EventRole): void {
        this._state.setRole(role);
        this.vendor_filter = 'all';
    }

    onStatusChange(value: string): void {
        this._state.setFilters({ status: value as 'all' | FinancialDocStatus });
    }

    onVendorChange(value: string): void {
        this._state.setFilters({
            vendor_department: value === 'all' ? '' : value,
        });
    }

    onSearchChange(value: string): void {
        this._state.setFilters({ search: value });
    }

    eventName(event_id: string): string {
        const all = this._all_events();
        const event = all.find((e) => e.id === event_id);
        return event?.title || 'Unknown Event';
    }

    /** Check if all approvals for an event are declined (fully cancelled). */
    isEventCancelled(event_id: string): boolean {
        return this._state.allApprovalsDeclined(event_id);
    }

    formatCurrency(value: number): string {
        return this._currency_formatter.format(value);
    }

    formatDate(ts: number): string {
        return format(ts, 'd MMM yyyy');
    }

    statusLabel(status: string): string {
        return DOC_STATUS_DISPLAY[status as FinancialDocStatus] || status;
    }

    statusColor(status: string): string {
        return DOC_STATUS_COLOR[status as FinancialDocStatus] || '';
    }

    exportPdf(row: FinancialDocument): void {
        generateFinancePdf(row);
    }
}
