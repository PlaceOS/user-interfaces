import { CommonModule } from '@angular/common';
import { Component, computed, inject, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { MatRippleModule } from '@angular/material/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { IconComponent } from '@placeos/components';
import { format } from 'date-fns';
import { MOCK_APPROVAL_EVENTS } from './event-approvals-mock.data';
import {
    BillableCategory,
    BILLABLE_CATEGORY_DISPLAY,
    BILLABLE_CATEGORY_ICONS,
    DOC_STATUS_COLOR,
    DOC_STATUS_DISPLAY,
    FinancialDocument,
    FinancialLineItem,
} from './event-finance-mock.data';
import { generateFinancePdf } from './event-finance-pdf.util';
import { EventFinanceStateService } from './event-finance-state.service';

@Component({
    selector: 'event-quote-detail',
    template: `
        @if (document()) {
            <div
                class="fixed inset-0 z-50"
                (click)="_state.selectDocument(null)"
            >
                <div class="absolute inset-0 bg-black opacity-50"></div>
                <div
                    class="bg-base-100 absolute inset-y-0 right-0 w-[480px] overflow-y-auto"
                    (click)="$event.stopPropagation()"
                >
                    <!-- Close button -->
                    <button
                        icon
                        matRipple
                        (click)="_state.selectDocument(null)"
                        class="absolute top-2 right-2 z-10"
                    >
                        <icon>close</icon>
                    </button>

                    <!-- Header -->
                    <div class="border-base-200 border-b px-5 py-4">
                        <div class="flex items-center space-x-2">
                            <span
                                class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                                [class]="
                                    document()!.doc_type === 'quote'
                                        ? 'bg-info/20 text-info'
                                        : 'bg-warning/20 text-warning'
                                "
                            >
                                {{ docTypeLabel() }}
                            </span>
                            <span
                                class="rounded-full px-2.5 py-0.5 text-xs font-medium"
                                [class]="statusColor(document()!.status)"
                            >
                                {{ statusLabel(document()!.status) }}
                            </span>
                        </div>
                        <div class="mt-1 text-lg font-medium">
                            {{ document()!.doc_number }}
                        </div>
                    </div>

                    <!-- Summary -->
                    <div class="border-base-200 space-y-3 border-b px-5 py-4">
                        <h3 class="text-sm font-semibold opacity-70">
                            Event Details
                        </h3>
                        <div class="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                            <div class="opacity-60">Event</div>
                            <div class="font-medium">
                                {{ eventName() }}
                            </div>
                            <div class="opacity-60">Date / Time</div>
                            <div>{{ eventDateTime() }}</div>
                            <div class="opacity-60">Location</div>
                            <div>{{ eventLocation() }}</div>
                            <div class="opacity-60">Requester</div>
                            <div>{{ eventOrganiser() }}</div>
                            <div class="opacity-60">Department</div>
                            <div>{{ document()!.vendor_department }}</div>
                            <div class="opacity-60">Bill To</div>
                            <div>{{ document()!.bill_to }}</div>
                            <div class="opacity-60">Cost Centre</div>
                            <div>{{ document()!.cost_centre }}</div>
                        </div>
                        @if (document()!.refund_deadline) {
                            <div class="mt-3 flex items-center space-x-2 text-sm">
                                <icon class="text-base" [class]="isRefundable() ? 'text-success' : 'text-error'">
                                    {{ isRefundable() ? 'verified' : 'block' }}
                                </icon>
                                <span [class]="isRefundable() ? 'text-success' : 'text-error'" class="font-medium">
                                    {{ isRefundable()
                                        ? 'Refundable until ' + formatDate(document()!.refund_deadline!)
                                        : 'Non-refundable (since ' + formatDate(document()!.refund_deadline!) + ')'
                                    }}
                                </span>
                            </div>
                        }
                    </div>

                    <!-- Line items -->
                    <div class="border-base-200 border-b px-5 py-4">
                        <h3 class="mb-3 text-sm font-semibold opacity-70">
                            Line Items
                        </h3>
                        <div class="space-y-2">
                            @for (
                                item of document()!.line_items;
                                track item.id
                            ) {
                                @if (editing_item_id() === item.id) {
                                    <!-- Inline edit form -->
                                    <div class="rounded border border-info/40 bg-info/5 p-3 space-y-2">
                                        <div class="space-y-2">
                                            <input
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                placeholder="Description"
                                                [ngModel]="edit_form().description"
                                                (ngModelChange)="updateEditField('description', $event)"
                                            />
                                            <select
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                [ngModel]="edit_form().category"
                                                (ngModelChange)="updateEditField('category', $event)"
                                            >
                                                @for (cat of category_entries; track cat.key) {
                                                    <option [value]="cat.key">{{ cat.label }}</option>
                                                }
                                            </select>
                                            <div class="grid grid-cols-3 gap-2">
                                                <div>
                                                    <label class="text-xs opacity-50">Qty</label>
                                                    <input
                                                        type="number"
                                                        class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                        [ngModel]="edit_form().quantity"
                                                        (ngModelChange)="updateEditField('quantity', +$event)"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="text-xs opacity-50">Unit Price</label>
                                                    <input
                                                        type="number"
                                                        class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                        [ngModel]="edit_form().unit_price"
                                                        (ngModelChange)="updateEditField('unit_price', +$event)"
                                                    />
                                                </div>
                                                <div>
                                                    <label class="text-xs opacity-50">Tax %</label>
                                                    <input
                                                        type="number"
                                                        class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                        [ngModel]="edit_form().tax_rate"
                                                        (ngModelChange)="updateEditField('tax_rate', +$event)"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="flex justify-end space-x-2">
                                            <button
                                                icon
                                                matRipple
                                                class="h-7 w-7 text-error"
                                                (click)="cancelEdit()"
                                            >
                                                <icon class="text-base">close</icon>
                                            </button>
                                            <button
                                                icon
                                                matRipple
                                                class="h-7 w-7 text-success"
                                                (click)="saveEdit(item.id)"
                                            >
                                                <icon class="text-base">check</icon>
                                            </button>
                                        </div>
                                    </div>
                                } @else {
                                    <div
                                        class="flex items-start justify-between rounded border border-base-200 p-2.5"
                                    >
                                        <div class="flex-1">
                                            <div
                                                class="flex items-center space-x-2 text-sm font-medium"
                                            >
                                                <span
                                                    class="flex h-7 w-7 shrink-0 items-center justify-center rounded"
                                                    [class]="categoryBadgeColor(item.category)"
                                                >
                                                    <icon class="text-base text-white">{{
                                                        categoryIcon(item.category)
                                                    }}</icon>
                                                </span>
                                                <span>{{
                                                    item.description
                                                }}</span>
                                            </div>
                                            <div
                                                class="mt-0.5 text-xs opacity-50"
                                            >
                                                {{ categoryLabel(item.category) }}
                                                &middot; {{ item.quantity }} x
                                                {{ formatCurrency(item.unit_price) }}
                                                &middot; Tax
                                                {{ item.tax_rate * 100 }}%
                                            </div>
                                        </div>
                                        <div class="flex items-center space-x-2">
                                            <div
                                                class="text-sm font-medium whitespace-nowrap"
                                            >
                                                {{
                                                    formatCurrency(item.line_total)
                                                }}
                                            </div>
                                            @if (canEdit()) {
                                                <button
                                                    icon
                                                    matRipple
                                                    class="h-6 w-6 opacity-50 hover:opacity-100"
                                                    (click)="startEdit(item)"
                                                >
                                                    <icon class="text-sm">edit</icon>
                                                </button>
                                                @if (confirming_delete_id() === item.id) {
                                                    <span class="text-xs text-error font-medium mr-1">Delete?</span>
                                                    <button
                                                        matRipple
                                                        class="rounded bg-error px-2 py-0.5 text-xs font-medium text-white"
                                                        (click)="confirmRemove(item.id)"
                                                    >
                                                        Yes
                                                    </button>
                                                    <button
                                                        matRipple
                                                        class="rounded border border-base-300 px-2 py-0.5 text-xs font-medium"
                                                        (click)="confirming_delete_id.set(null)"
                                                    >
                                                        No
                                                    </button>
                                                } @else {
                                                    <button
                                                        icon
                                                        matRipple
                                                        class="h-6 w-6 opacity-50 hover:opacity-100 hover:text-error"
                                                        (click)="confirming_delete_id.set(item.id)"
                                                    >
                                                        <icon class="text-sm">delete</icon>
                                                    </button>
                                                }
                                            }
                                        </div>
                                    </div>
                                }
                            }
                        </div>

                        <!-- Add new line item form -->
                        @if (adding_new_item()) {
                            <div class="mt-2 rounded border border-success/40 bg-success/5 p-3 space-y-2">
                                <div class="text-sm font-medium">New Line Item</div>
                                <div class="space-y-2">
                                    <input
                                        class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                        placeholder="Description"
                                        [ngModel]="edit_form().description"
                                        (ngModelChange)="updateEditField('description', $event)"
                                    />
                                    <select
                                        class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                        [ngModel]="edit_form().category"
                                        (ngModelChange)="updateEditField('category', $event)"
                                    >
                                        @for (cat of category_entries; track cat.key) {
                                            <option [value]="cat.key">{{ cat.label }}</option>
                                        }
                                    </select>
                                    <div class="grid grid-cols-3 gap-2">
                                        <div>
                                            <label class="text-xs opacity-50">Qty</label>
                                            <input
                                                type="number"
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                [ngModel]="edit_form().quantity"
                                                (ngModelChange)="updateEditField('quantity', +$event)"
                                            />
                                        </div>
                                        <div>
                                            <label class="text-xs opacity-50">Unit Price</label>
                                            <input
                                                type="number"
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                [ngModel]="edit_form().unit_price"
                                                (ngModelChange)="updateEditField('unit_price', +$event)"
                                            />
                                        </div>
                                        <div>
                                            <label class="text-xs opacity-50">Tax %</label>
                                            <input
                                                type="number"
                                                class="w-full rounded border border-base-300 bg-base-100 px-2 py-1 text-sm"
                                                [ngModel]="edit_form().tax_rate"
                                                (ngModelChange)="updateEditField('tax_rate', +$event)"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div class="flex justify-end space-x-2">
                                    <button
                                        icon
                                        matRipple
                                        class="h-7 w-7 text-error"
                                        (click)="adding_new_item.set(false)"
                                    >
                                        <icon class="text-base">close</icon>
                                    </button>
                                    <button
                                        icon
                                        matRipple
                                        class="h-7 w-7 text-success"
                                        (click)="saveAdd()"
                                    >
                                        <icon class="text-base">check</icon>
                                    </button>
                                </div>
                            </div>
                        }

                        <!-- Add line item button -->
                        @if (canEdit() && !adding_new_item() && !editing_item_id()) {
                            <button
                                matRipple
                                class="mt-2 flex w-full items-center justify-center space-x-1 rounded border border-dashed border-base-300 px-3 py-1.5 text-sm opacity-60 hover:opacity-100"
                                (click)="startAdd()"
                            >
                                <icon class="text-base">add</icon>
                                <span>Add Line Item</span>
                            </button>
                        }

                        <!-- Totals -->
                        <div
                            class="mt-3 space-y-1 border-t border-base-200 pt-3 text-sm"
                        >
                            @if (document()!.deposit_percent) {
                                <div
                                    class="mb-1 flex items-center space-x-1 text-xs font-medium opacity-60"
                                >
                                    <icon class="text-sm">info</icon>
                                    <span>
                                        {{
                                            document()!.invoice_type ===
                                            'deposit'
                                                ? 'Deposit — ' +
                                                  document()!.deposit_percent +
                                                  '% of quote total'
                                                : 'Final Balance — ' +
                                                  (100 -
                                                      document()!
                                                          .deposit_percent!) +
                                                  '% remaining'
                                        }}
                                    </span>
                                </div>
                            }
                            <div class="flex justify-between">
                                <span class="opacity-60">Subtotal</span>
                                <span>{{
                                    formatCurrency(document()!.subtotal)
                                }}</span>
                            </div>
                            <div class="flex justify-between">
                                <span class="opacity-60">Tax (GST)</span>
                                <span>{{
                                    formatCurrency(document()!.tax_total)
                                }}</span>
                            </div>
                            <div
                                class="flex justify-between text-base font-semibold"
                            >
                                <span>Total (USD)</span>
                                <span>{{
                                    formatCurrency(document()!.total)
                                }}</span>
                            </div>
                        </div>
                    </div>

                    <!-- Attachments -->
                    @if (document()!.attachment_names.length) {
                        <div class="border-base-200 border-b px-5 py-4">
                            <h3
                                class="mb-2 text-sm font-semibold opacity-70"
                            >
                                Attachments
                            </h3>
                            @for (
                                name of document()!.attachment_names;
                                track name
                            ) {
                                <div
                                    class="flex items-center space-x-2 py-1 text-sm"
                                >
                                    <icon class="text-base opacity-50"
                                        >attach_file</icon
                                    >
                                    <span class="text-info underline">{{
                                        name
                                    }}</span>
                                </div>
                            }
                        </div>
                    }

                    <!-- Notes -->
                    @if (document()!.notes) {
                        <div class="border-base-200 border-b px-5 py-4">
                            <h3
                                class="mb-1 text-sm font-semibold opacity-70"
                            >
                                Notes
                            </h3>
                            <p class="text-sm opacity-80">
                                {{ document()!.notes }}
                            </p>
                        </div>
                    }

                    <!-- Action buttons -->
                    <div class="border-base-200 border-b px-5 py-4 space-y-3">
                        <!-- Workflow status / actions -->
                        <div class="flex flex-wrap gap-2">
                            @if (showAwaitingApprovals()) {
                                <div
                                    class="flex items-center space-x-1.5 rounded border border-base-300 bg-base-200/50 px-3 py-1.5 text-sm opacity-60"
                                >
                                    <icon class="text-lg"
                                        >hourglass_top</icon
                                    >
                                    <span>Awaiting event approvals</span>
                                </div>
                            }
                            @if (showDepositSent()) {
                                <div
                                    class="flex items-center space-x-1.5 rounded border border-success/30 bg-success/10 px-3 py-1.5 text-sm text-success"
                                >
                                    <icon class="text-lg"
                                        >check_circle</icon
                                    >
                                    <span>Deposit invoice sent</span>
                                </div>
                            }
                            @if (canGenerateFinal()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-warning text-warning-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.generateFinalInvoice(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg"
                                        >receipt_long</icon
                                    >
                                    <span>Generate Final Invoice</span>
                                </button>
                            }
                            @if (canSendFinalInvoice()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-info text-info-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.sendInvoice(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg"
                                        >forward_to_inbox</icon
                                    >
                                    <span>Send Final Invoice</span>
                                </button>
                            }
                            @if (canRecordPayment()) {
                                <button
                                    btn
                                    matRipple
                                    class="bg-success text-success-content flex items-center space-x-1 rounded px-3 py-1.5 text-sm"
                                    (click)="
                                        _state.recordPayment(
                                            document()!.id
                                        )
                                    "
                                >
                                    <icon class="text-lg">payments</icon>
                                    <span>Mark Paid</span>
                                </button>
                            }
                        </div>

                        <!-- Download PDF row -->
                        <div class="flex gap-2">
                            <button
                                matRipple
                                class="flex items-center space-x-1 rounded border border-base-300 bg-base-100 px-3 py-1.5 text-sm font-medium text-base-content hover:bg-base-200"
                                (click)="downloadPdf()"
                            >
                                <icon class="text-lg">download</icon>
                                <span>{{
                                    depositInvoice()
                                        ? 'Quote PDF'
                                        : 'PDF'
                                }}</span>
                            </button>
                            @if (depositInvoice()) {
                                <button
                                    matRipple
                                    class="flex items-center space-x-1 rounded border border-base-300 bg-base-100 px-3 py-1.5 text-sm font-medium text-base-content hover:bg-base-200"
                                    (click)="downloadDepositPdf()"
                                >
                                    <icon class="text-lg"
                                        >download</icon
                                    >
                                    <span>Deposit PDF</span>
                                </button>
                            }
                        </div>
                    </div>

                    <!-- Audit log -->
                    @if (show_audit()) {
                        <div class="px-5 py-4">
                            <h3
                                class="mb-3 text-sm font-semibold opacity-70"
                            >
                                Audit Log
                            </h3>
                            @for (
                                entry of audit_entries();
                                track entry.id
                            ) {
                                <div
                                    class="border-base-200 flex items-start space-x-3 border-l-2 py-2 pl-3"
                                >
                                    <div class="min-w-0 flex-1">
                                        <div class="text-sm font-medium">
                                            {{ entry.detail }}
                                        </div>
                                        <div
                                            class="mt-0.5 text-xs opacity-50"
                                        >
                                            {{ formatDateTime(entry.timestamp) }}
                                            &middot; {{ entry.actor }}
                                        </div>
                                    </div>
                                </div>
                            } @empty {
                                <div class="text-sm opacity-40">
                                    No audit entries
                                </div>
                            }
                        </div>
                    }

                    <div class="h-8"></div>
                </div>
            </div>
        }
    `,
    styles: [
        `
            :host {
                display: contents;
            }
        `,
    ],
    imports: [CommonModule, FormsModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, IconComponent],
})
export class EventQuoteDetailComponent {
    readonly _state = inject(EventFinanceStateService);

    readonly document = toSignal(this._state.selected_document$, {
        initialValue: null,
    });
    readonly audit_entries = toSignal(this._state.selected_audit_entries$, {
        initialValue: [],
    });
    readonly role = toSignal(this._state.role$, {
        initialValue: 'global_admin',
    });
    /** Tracks approval changes so computed guards re-evaluate reactively. */
    private readonly _approval_status = toSignal(
        this._state.approval_status$,
        { initialValue: {} },
    );
    /** All documents — used to find linked deposit invoices. */
    private readonly _documents_signal = toSignal(this._state.documents$, {
        initialValue: [],
    });

    // ── Line item editing state ──────────────────────────────────────
    readonly editing_item_id = signal<string | null>(null);
    readonly adding_new_item = signal(false);
    readonly confirming_delete_id = signal<string | null>(null);
    readonly edit_form = signal<{
        description: string;
        category: BillableCategory;
        quantity: number;
        unit_price: number;
        tax_rate: number;
    }>({
        description: '',
        category: 'miscellaneous',
        quantity: 1,
        unit_price: 0,
        tax_rate: 10,
    });

    readonly category_entries = Object.entries(BILLABLE_CATEGORY_DISPLAY).map(
        ([key, label]) => ({ key, label }),
    );

    readonly canEdit = computed(() => {
        const doc = this.document();
        if (!doc) return false;
        const editable_statuses = ['draft', 'sent', 'accepted', 'invoiced'];
        return (
            editable_statuses.includes(doc.status) &&
            this._state.canPerformAction('edit_line_items')
        );
    });

    readonly show_audit = computed(() => {
        return this._state.canPerformAction('view_audit_log');
    });

    private readonly _currency_formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    // ── Header helpers ──────────────────────────────────────────────

    docTypeLabel(): string {
        const doc = this.document();
        if (!doc) return '';
        if (doc.doc_type === 'quote') return 'Quote';
        if (doc.invoice_type === 'deposit') return 'Deposit Invoice';
        if (doc.invoice_type === 'final') return 'Final Invoice';
        return 'Invoice';
    }

    // ── Event lookups ──────────────────────────────────────────────

    eventName(): string {
        const doc = this.document();
        if (!doc) return '';
        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
        return event?.title || 'Unknown Event';
    }

    eventDateTime(): string {
        const doc = this.document();
        if (!doc) return '';
        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
        if (!event) return '';
        return `${format(event.date, 'EEE, d MMM yyyy')} at ${format(event.date, 'h:mm a')}`;
    }

    eventLocation(): string {
        const doc = this.document();
        if (!doc) return '';
        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
        return event?.location || '';
    }

    eventOrganiser(): string {
        const doc = this.document();
        if (!doc) return '';
        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
        return event?.organiser || '';
    }

    // ── Action guards (reactive) ────────────────────────────────────

    /** Quote is draft and approvals not yet done */
    readonly showAwaitingApprovals = computed(() => {
        const doc = this.document();
        this._approval_status();
        return (
            !!doc &&
            doc.doc_type === 'quote' &&
            doc.status === 'draft' &&
            !this._state.allApprovalsAccepted(doc.event_id)
        );
    });

    /** Quote is accepted (deposit sent) but event hasn't happened yet */
    readonly showDepositSent = computed(() => {
        const doc = this.document();
        this._approval_status();
        return (
            !!doc &&
            doc.doc_type === 'quote' &&
            doc.status === 'accepted' &&
            !this._state.canGenerateFinalInvoice(doc)
        );
    });

    /** Quote is accepted, event passed, deposit exists, no final yet */
    readonly canGenerateFinal = computed(() => {
        const doc = this.document();
        this._approval_status();
        return (
            !!doc &&
            doc.doc_type === 'quote' &&
            this._state.canGenerateFinalInvoice(doc)
        );
    });

    /** Final invoice is draft — can be sent manually */
    readonly canSendFinalInvoice = computed(() => {
        const doc = this.document();
        return (
            !!doc &&
            doc.doc_type === 'invoice' &&
            doc.invoice_type === 'final' &&
            doc.status === 'draft' &&
            this._state.canPerformAction('send_quote')
        );
    });

    readonly canRecordPayment = computed(() => {
        const doc = this.document();
        return (
            !!doc &&
            doc.doc_type === 'invoice' &&
            (doc.status === 'invoiced' || doc.status === 'overdue') &&
            this._state.canPerformAction('record_payment')
        );
    });

    /** The deposit invoice linked to the current quote (if any). */
    readonly depositInvoice = computed(() => {
        const doc = this.document();
        if (!doc || doc.doc_type !== 'quote' || doc.status !== 'accepted')
            return null;
        const docs = this._documents_signal();
        return docs.find(
            (d) =>
                d.converted_from === doc.id &&
                d.invoice_type === 'deposit',
        ) || null;
    });

    // ── Line item editing methods ────────────────────────────────────

    startEdit(item: FinancialLineItem): void {
        this.editing_item_id.set(item.id);
        this.edit_form.set({
            description: item.description,
            category: item.category,
            quantity: item.quantity,
            unit_price: item.unit_price,
            tax_rate: item.tax_rate * 100,
        });
    }

    cancelEdit(): void {
        this.editing_item_id.set(null);
    }

    saveEdit(item_id: string): void {
        const doc = this.document();
        if (!doc) return;
        const form = this.edit_form();
        this._state.updateLineItem(doc.id, item_id, {
            description: form.description,
            category: form.category,
            quantity: form.quantity,
            unit_price: form.unit_price,
            tax_rate: form.tax_rate / 100,
        });
        this.cancelEdit();
    }

    removeItem(item_id: string): void {
        const doc = this.document();
        if (!doc) return;
        this._state.removeLineItem(doc.id, item_id);
    }

    confirmRemove(item_id: string): void {
        this.removeItem(item_id);
        this.confirming_delete_id.set(null);
    }

    startAdd(): void {
        this.adding_new_item.set(true);
        this.edit_form.set({
            description: '',
            category: 'miscellaneous',
            quantity: 1,
            unit_price: 0,
            tax_rate: 10,
        });
    }

    saveAdd(): void {
        const doc = this.document();
        if (!doc) return;
        const form = this.edit_form();
        this._state.addLineItem(doc.id, {
            description: form.description,
            category: form.category,
            quantity: form.quantity,
            unit_price: form.unit_price,
            tax_rate: form.tax_rate / 100,
        });
        this.adding_new_item.set(false);
    }

    // ── PDF Download ──────────────────────────────────────────────

    downloadPdf(): void {
        const doc = this.document();
        if (!doc) return;
        generateFinancePdf(doc);
    }

    downloadDepositPdf(): void {
        const deposit = this.depositInvoice();
        if (!deposit) return;
        generateFinancePdf(deposit);
    }

    // ── Formatters ─────────────────────────────────────────────────

    formatCurrency(value: number): string {
        return this._currency_formatter.format(value);
    }

    formatDateTime(ts: number): string {
        return format(ts, 'd MMM yyyy, h:mm a');
    }

    statusLabel(status: string): string {
        return DOC_STATUS_DISPLAY[status as keyof typeof DOC_STATUS_DISPLAY] || status;
    }

    statusColor(status: string): string {
        return DOC_STATUS_COLOR[status as keyof typeof DOC_STATUS_COLOR] || '';
    }

    categoryLabel(category: string): string {
        return BILLABLE_CATEGORY_DISPLAY[category as keyof typeof BILLABLE_CATEGORY_DISPLAY] || category;
    }

    categoryIcon(category: string): string {
        return BILLABLE_CATEGORY_ICONS[category as keyof typeof BILLABLE_CATEGORY_ICONS] || 'receipt';
    }

    private readonly _category_badge_colors: Record<string, string> = {
        venue_hire: 'bg-blue-600',
        catering: 'bg-amber-600',
        av_equipment: 'bg-purple-600',
        staffing: 'bg-teal-600',
        security: 'bg-red-600',
        cleaning: 'bg-green-600',
        miscellaneous: 'bg-gray-500',
    };

    categoryBadgeColor(category: string): string {
        return this._category_badge_colors[category] || 'bg-gray-500';
    }

    isRefundable(): boolean {
        const doc = this.document();
        return !!doc?.refund_deadline && Date.now() < doc.refund_deadline;
    }

    formatDate(ts: number): string {
        return format(ts, 'd MMM yyyy');
    }

    updateEditField(field: string, value: any): void {
        this.edit_form.set({ ...this.edit_form(), [field]: value });
    }
}
