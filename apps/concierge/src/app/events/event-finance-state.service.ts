import { inject, Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, combineLatest, firstValueFrom, Subscription } from 'rxjs';
import { map, pairwise, startWith } from 'rxjs/operators';
import { notifySuccess } from '@placeos/common';

import {
    ApprovalCategory,
    EventRole,
    MOCK_APPROVAL_EVENTS,
    ROLE_PERMISSIONS,
} from './event-approvals-mock.data';
import {
    BillableCategory,
    BILLABLE_CATEGORY_DISPLAY,
    DEPOSIT_PERCENT,
    FinanceAction,
    FinanceAuditEntry,
    FinancialDocStatus,
    FinancialDocument,
    FinancialLineItem,
    FINANCE_ROLE_PERMISSIONS,
    MOCK_FINANCE_AUDIT_LOG,
    MOCK_FINANCIAL_DOCUMENTS,
    ROLE_MOCK_ORGANISERS,
    documentCategories,
    generateDocNumber,
} from './event-finance-mock.data';
import {
    SendQuoteDialogComponent,
    SendQuoteDialogData,
} from './send-quote-dialog.component';
import { EventApprovalStateService } from './event-approval-state.service';
import { EventSyncService } from './event-sync.service';

export interface FinanceFilters {
    status: 'all' | FinancialDocStatus;
    vendor_department: string;
    search: string;
}

/** Venue pricing table mirrored from eventmocks PaymentService for fallback calculation */
const VENUE_PRICING: Record<string, { name: string; base_price: number; per_hour: number }> = {
    venue_1:   { name: 'Grand Horizon & Terrace',        base_price: 3000, per_hour: 450 },
    venue_9:   { name: 'Palisades Ballroom',             base_price: 3000, per_hour: 450 },
    venue_15:  { name: 'Plaza Room',                      base_price: 2100, per_hour: 300 },
    venue_23:  { name: 'Sierra',                          base_price: 500,  per_hour: 85 },
    venue_27:  { name: 'Morrison Room',                   base_price: 2000, per_hour: 340 },
    venue_28:  { name: 'Main Dining Room',                base_price: 4400, per_hour: 750 },
    venue_33:  { name: 'Centennial Ballroom',             base_price: 5000, per_hour: 750 },
    venue_39:  { name: 'Ackerman Grand Ballroom',         base_price: 5000, per_hour: 800 },
    venue_41:  { name: 'Charles E. Young Grand Salon',    base_price: 2500, per_hour: 400 },
    venue_44:  { name: 'Bruin Plaza',                     base_price: 3000, per_hour: 500 },
    venue_45:  { name: 'Korn Convocation Hall',           base_price: 3000, per_hour: 500 },
    venue_55:  { name: 'Royce Hall Main Auditorium',      base_price: 8000, per_hour: 1500 },
    venue_64:  { name: 'Billy Wilder Theater',            base_price: 3500, per_hour: 600 },
    venue_71:  { name: 'Schoenberg Hall',                 base_price: 4500, per_hour: 800 },
    venue_74:  { name: 'Freud Playhouse',                 base_price: 6000, per_hour: 1000 },
    venue_122: { name: 'Drake Stadium',                   base_price: 10000, per_hour: 2000 },
    venue_123: { name: 'Los Angeles Tennis Center',       base_price: 12000, per_hour: 2500 },
    venue_125: { name: 'Sunset Canyon Recreation Center', base_price: 2500, per_hour: 400 },
    venue_127: { name: 'Wilson Plaza',                    base_price: 3000, per_hour: 500 },
};

const PROCESSING_FEE_RATE = 0.03;

@Injectable({
    providedIn: 'root',
})
export class EventFinanceStateService {
    private _dialog = inject(MatDialog);
    private _approval_state = inject(EventApprovalStateService);
    private _sync = inject(EventSyncService);

    private _documents = new BehaviorSubject<FinancialDocument[]>(
        [...MOCK_FINANCIAL_DOCUMENTS],
    );
    private _overdue_timer: ReturnType<typeof setInterval>;
    private _cached_all_events: import('./event-approvals-mock.data').MockApprovalEvent[] =
        MOCK_APPROVAL_EVENTS;

    private _approval_sub: Subscription;

    constructor() {
        this._checkOverdueInvoices();
        this._overdue_timer = setInterval(() => this._checkOverdueInvoices(), 60_000);

        // Auto-sync: when approvals change, generate deposit invoices and update notes
        this._approval_sub = this._approval_state.status$
            .pipe(startWith({}), pairwise())
            .subscribe(([_prev, curr]) => {
                this._syncWithApprovals(curr);
            });

        // React to service cancellations from eventmocks — check refund eligibility
        this._sync.cancellation$.subscribe((cancellation) => {
            if (!cancellation) return;
            this._handleCancellationRefund(cancellation);
        });

        // Auto-generate quotes for synced parent events that don't have one yet,
        // and update existing $0 quotes when pricing data becomes available.
        this._approval_state.all_events$.subscribe((all) => {
            this._cached_all_events = all;
            let docs = this._documents.getValue();
            const existing_event_ids = new Set(docs.map((d) => d.event_id));
            const new_quotes: FinancialDocument[] = [];
            let updated_existing = false;

            for (const evt of all) {
                if (!evt.id.startsWith('sync-')) continue;
                if (evt.parent_event) continue; // only generate for root events

                const original_id = evt.id.replace('sync-', '');
                const raw_event = this._sync.getRawSyncEvent(original_id);
                const line_items = this._buildSyncLineItems(evt, raw_event);
                const totals = this._recalcTotals(line_items);

                // Check if there's an existing $0 quote that needs updating
                if (existing_event_ids.has(evt.id)) {
                    if (totals.total > 0) {
                        const existing_quote = docs.find(
                            (d) => d.event_id === evt.id && d.doc_type === 'quote' && d.total === 0,
                        );
                        if (existing_quote) {
                            docs = docs.map((d) =>
                                d.id === existing_quote.id
                                    ? { ...d, line_items, ...totals, last_updated: Date.now() }
                                    : d,
                            );
                            updated_existing = true;
                        }
                    }
                    continue;
                }

                const doc_number = generateDocNumber('quote');
                const quote: FinancialDocument = {
                    id: `fin-sync-${evt.id}-${Date.now()}`,
                    doc_type: 'quote',
                    doc_number,
                    event_id: evt.id,
                    status: 'draft',
                    vendor_department: 'Events Team',
                    bill_to: evt.organiser || 'TBD',
                    cost_centre: 'CC-SYNC',
                    line_items,
                    subtotal: totals.subtotal,
                    tax_total: totals.tax_total,
                    total: totals.total,
                    issued_date: Date.now(),
                    due_date: Date.now() + 14 * 24 * 60 * 60 * 1000,
                    last_updated: Date.now(),
                    notes: `Auto-generated quote for synced event "${evt.title}". Awaiting all event approvals before sending.`,
                    attachment_names: [],
                    refund_deadline: evt.refund_deadline,
                };
                new_quotes.push(quote);
                existing_event_ids.add(evt.id);
            }

            if (new_quotes.length || updated_existing) {
                this._documents.next([...docs, ...new_quotes]);
            }
        });
    }
    private _audit_log = new BehaviorSubject<FinanceAuditEntry[]>(
        [...MOCK_FINANCE_AUDIT_LOG],
    );
    private _role = new BehaviorSubject<EventRole>('global_admin');
    private _filters = new BehaviorSubject<FinanceFilters>({
        status: 'all',
        vendor_department: '',
        search: '',
    });
    private _selected_id = new BehaviorSubject<string | null>(null);

    public readonly documents$ = this._documents.asObservable();
    public readonly audit_log$ = this._audit_log.asObservable();
    public readonly role$ = this._role.asObservable();
    public readonly filters$ = this._filters.asObservable();
    public readonly selected_id$ = this._selected_id.asObservable();

    /** Expose approval status stream so dependent observables re-emit on approval changes. */
    public readonly approval_status$ = this._approval_state.status$;

    public readonly filtered_documents$ = combineLatest([
        this._documents,
        this._role,
        this._filters,
        this._approval_state.status$,
        this._approval_state.all_events$,
    ]).pipe(
        map(([docs, role, filters, _approval_statuses, _all_events]) => {
            let result = this._applyRoleVisibility(docs, role);

            if (filters.status !== 'all') {
                result = result.filter((d) => d.status === filters.status);
            }
            if (filters.vendor_department) {
                result = result.filter(
                    (d) => d.vendor_department === filters.vendor_department,
                );
            }
            if (filters.search) {
                const term = filters.search.toLowerCase();
                result = result.filter(
                    (d) =>
                        d.doc_number.toLowerCase().includes(term) ||
                        d.vendor_department.toLowerCase().includes(term) ||
                        d.bill_to.toLowerCase().includes(term) ||
                        d.notes.toLowerCase().includes(term),
                );
            }

            return result;
        }),
    );

    public readonly selected_document$ = combineLatest([
        this._documents,
        this._selected_id,
        this._approval_state.status$,
    ]).pipe(
        map(([docs, id, _approval_statuses]) =>
            id ? docs.find((d) => d.id === id) || null : null,
        ),
    );

    public readonly selected_audit_entries$ = combineLatest([
        this._audit_log,
        this._selected_id,
    ]).pipe(
        map(([log, id]) =>
            id
                ? log
                      .filter((e) => e.document_id === id)
                      .sort((a, b) => b.timestamp - a.timestamp)
                : [],
        ),
    );

    /** Departments derived from role-visible documents (ignoring vendor filter). */
    public readonly vendor_departments$ = combineLatest([
        this._documents,
        this._role,
        this._approval_state.all_events$,
    ]).pipe(
        map(([docs, role, _all_events]) => {
            const visible = this._applyRoleVisibility(docs, role);
            return [...new Set(visible.map((d) => d.vendor_department))].sort();
        }),
    );

    // ── Getters ────────────────────────────────────────────────────

    public get role(): EventRole {
        return this._role.getValue();
    }

    public get filters(): FinanceFilters {
        return this._filters.getValue();
    }

    // ── Mutations ──────────────────────────────────────────────────

    public setRole(role: EventRole): void {
        this._role.next(role);
        this._filters.next({
            ...this._filters.getValue(),
            vendor_department: '',
        });
    }

    public setFilters(partial: Partial<FinanceFilters>): void {
        this._filters.next({ ...this._filters.getValue(), ...partial });
    }

    public selectDocument(id: string | null): void {
        this._selected_id.next(id);
    }

    public updateDocumentStatus(
        doc_id: string,
        new_status: FinancialDocStatus,
    ): void {
        const docs = this._documents.getValue().map((d) =>
            d.id === doc_id
                ? { ...d, status: new_status, last_updated: Date.now() }
                : d,
        );
        this._documents.next(docs);
        this._appendAudit(
            doc_id,
            new_status,
            `Status changed to ${new_status}`,
        );
    }

    public recordPayment(doc_id: string): void {
        const docs = this._documents.getValue();
        const doc = docs.find((d) => d.id === doc_id);
        if (!doc) return;

        const updated = docs.map((d) =>
            d.id === doc_id
                ? { ...d, status: 'paid' as FinancialDocStatus, last_updated: Date.now() }
                : d,
        );
        this._documents.next(updated);

        const formatted = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(doc.total);
        this._appendAudit(
            doc_id,
            'paid',
            `Payment of ${formatted} recorded`,
        );
    }

    // ── Line item mutations ────────────────────────────────────────

    public updateLineItem(
        doc_id: string,
        item_id: string,
        changes: Partial<FinancialLineItem>,
    ): void {
        const docs = this._documents.getValue().map((d) => {
            if (d.id !== doc_id) return d;
            const line_items = d.line_items.map((li) => {
                if (li.id !== item_id) return li;
                const updated = { ...li, ...changes };
                updated.line_total =
                    updated.quantity * updated.unit_price * (1 + updated.tax_rate);
                return updated;
            });
            return { ...d, line_items, ...this._recalcTotals(line_items), last_updated: Date.now() };
        });
        this._documents.next(docs);
        const item = docs
            .find((d) => d.id === doc_id)
            ?.line_items.find((li) => li.id === item_id);
        this._appendAudit(
            doc_id,
            'updated',
            `Line item updated: ${item?.description || item_id}`,
        );
    }

    private readonly _billable_to_approval: Record<string, ApprovalCategory[]> = {
        venue_hire: ['venue'],
        catering: ['dining'],
        av_equipment: ['av_tech'],
        security: ['safety'],
        setup: ['setup'],
        staffing: ['av_tech', 'services'],
        miscellaneous: ['services', 'parking', 'events'],
        cleaning: ['services'],
    };

    public removeLineItem(doc_id: string, item_id: string): void {
        let removed_description = '';
        let removed_category: BillableCategory | '' = '';
        const doc = this._documents.getValue().find((d) => d.id === doc_id);
        const docs = this._documents.getValue().map((d) => {
            if (d.id !== doc_id) return d;
            const removed = d.line_items.find((li) => li.id === item_id);
            removed_description = removed?.description || item_id;
            removed_category = removed?.category || '';
            const line_items = d.line_items.filter((li) => li.id !== item_id);
            return { ...d, line_items, ...this._recalcTotals(line_items), last_updated: Date.now() };
        });
        this._documents.next(docs);
        this._appendAudit(
            doc_id,
            'updated',
            `Line item removed: ${removed_description}`,
        );

        if (!doc) return;

        // Auto-decline matching ad-hoc service when its invoice line is removed
        if (removed_description.endsWith('(Ad-hoc)')) {
            const adhoc_title = removed_description.replace(/\s*\(Ad-hoc\)$/, '');
            const all = this._cached_all_events;
            const adhoc_event = all.find(
                (e) =>
                    e.is_adhoc &&
                    e.title === adhoc_title &&
                    (e.parent_event === doc.event_id || e.id === doc.event_id),
            );
            if (adhoc_event) {
                this._approval_state.setStatus(adhoc_event.id, 'declined');
            }
            return;
        }

        // Auto-decline child service when all line items of that category are removed
        if (removed_category) {
            const updated_doc = docs.find((d) => d.id === doc_id);
            const still_has_category = updated_doc?.line_items.some(
                (li) => li.category === removed_category,
            );
            if (!still_has_category) {
                const approval_categories = this._billable_to_approval[removed_category] || [];
                const parent_id = doc.event_id;
                const all = this._cached_all_events;
                for (const approval_cat of approval_categories) {
                    const child_event = all.find(
                        (e) =>
                            e.category === approval_cat &&
                            (e.parent_event === parent_id || e.id === parent_id),
                    );
                    if (child_event) {
                        this._approval_state.setStatus(child_event.id, 'declined');
                    }
                }
            }
        }
    }

    public addLineItem(
        doc_id: string,
        item: Omit<FinancialLineItem, 'id' | 'line_total'>,
    ): void {
        const new_item: FinancialLineItem = {
            ...item,
            id: 'li-' + Date.now(),
            line_total: item.quantity * item.unit_price * (1 + item.tax_rate),
        };
        const docs = this._documents.getValue().map((d) => {
            if (d.id !== doc_id) return d;
            const line_items = [...d.line_items, new_item];
            return { ...d, line_items, ...this._recalcTotals(line_items), last_updated: Date.now() };
        });
        this._documents.next(docs);
        this._appendAudit(
            doc_id,
            'updated',
            `Line item added: ${item.description}`,
        );
    }

    /** Build line items for a synced event, using quote data or venue pricing fallback. */
    private _buildSyncLineItems(
        evt: import('./event-approvals-mock.data').MockApprovalEvent,
        raw_event: any,
    ): FinancialLineItem[] {
        const eventmocks_quote = raw_event?.quote;
        const line_items: FinancialLineItem[] = [];

        if (eventmocks_quote?.lineItems?.length) {
            // Use actual quote data from eventmocks
            const category_map: Record<string, BillableCategory> = {
                venue: 'venue_hire',
                service: 'miscellaneous',
            };
            for (const item of eventmocks_quote.lineItems) {
                const cat = category_map[item.category] || 'miscellaneous';
                line_items.push({
                    id: `li-sync-${evt.id}-${Date.now()}-${Math.random().toString(36).slice(2, 6)}`,
                    description: `${item.name}${item.description ? ' — ' + item.description : ''}`,
                    category: cat,
                    quantity: 1,
                    unit_price: item.total || 0,
                    tax_rate: 0.1,
                    line_total: (item.total || 0) * 1.1,
                });
            }
            if (eventmocks_quote.fees?.length) {
                for (const fee of eventmocks_quote.fees) {
                    line_items.push({
                        id: `li-sync-${evt.id}-fee-${Date.now()}`,
                        description: fee.name || 'Processing Fee',
                        category: 'miscellaneous' as BillableCategory,
                        quantity: 1,
                        unit_price: fee.amount || 0,
                        tax_rate: 0.1,
                        line_total: (fee.amount || 0) * 1.1,
                    });
                }
            }
        } else {
            // Fallback: calculate from venue_id + duration
            const venue_id = raw_event?.venue_id;
            const duration_hours = (raw_event?.duration_minutes || 120) / 60;
            const venue = venue_id ? VENUE_PRICING[venue_id] : null;

            if (venue) {
                const venue_total = venue.base_price + venue.per_hour * duration_hours;
                line_items.push({
                    id: `li-sync-${evt.id}-venue`,
                    description: `${venue.name} Rental — Base fee + ${duration_hours} hours`,
                    category: 'venue_hire' as BillableCategory,
                    quantity: 1,
                    unit_price: venue_total,
                    tax_rate: 0.1,
                    line_total: venue_total * 1.1,
                });
                // Add processing fee
                const processing_fee = Math.round(venue_total * PROCESSING_FEE_RATE * 100) / 100;
                line_items.push({
                    id: `li-sync-${evt.id}-proc`,
                    description: `Processing Fee (${PROCESSING_FEE_RATE * 100}%)`,
                    category: 'miscellaneous' as BillableCategory,
                    quantity: 1,
                    unit_price: processing_fee,
                    tax_rate: 0.1,
                    line_total: processing_fee * 1.1,
                });
            } else {
                // No pricing data at all — placeholder
                line_items.push({
                    id: `li-sync-${evt.id}-venue`,
                    description: `Venue hire — ${evt.location}`,
                    category: 'venue_hire' as BillableCategory,
                    quantity: 1,
                    unit_price: 0,
                    tax_rate: 0.1,
                    line_total: 0,
                });
            }
        }
        return line_items;
    }

    /**
     * Handle a cancellation event from eventmocks.
     * Checks refund eligibility and adjusts invoicing accordingly.
     */
    private _handleCancellationRefund(cancellation: {
        event_id: string;
        stage: string;
        cancel_id: string;
        refund_issued: number;
        cancelled_at: number;
    }): void {
        const parent_event_id = `sync-${cancellation.event_id}`;
        const docs = this._documents.getValue();

        // Find the quote for this event
        const quote = docs.find(
            (d) => d.event_id === parent_event_id && d.doc_type === 'quote',
        );
        if (!quote) return;

        const now = Date.now();
        const is_refundable = cancellation.refund_issued > 0;
        const refund_amount = cancellation.refund_issued;
        const stage_display = cancellation.stage.charAt(0).toUpperCase()
            + cancellation.stage.slice(1).replace(/_/g, ' ');

        if (is_refundable) {
            // Refundable — generate a credit note and adjust the quote
            const credit_id = `fin-credit-${Date.now()}-${cancellation.cancel_id}`;
            const credit_number = generateDocNumber('invoice');
            const credit_line: FinancialLineItem = {
                id: `li-credit-${cancellation.cancel_id}`,
                description: `Refund — ${stage_display} cancellation`,
                category: 'miscellaneous' as BillableCategory,
                quantity: 1,
                unit_price: -refund_amount,
                tax_rate: 0.1,
                line_total: -refund_amount * 1.1,
            };

            const credit_note: FinancialDocument = {
                id: credit_id,
                doc_type: 'invoice',
                doc_number: credit_number,
                event_id: parent_event_id,
                status: 'invoiced',
                vendor_department: quote.vendor_department,
                bill_to: quote.bill_to,
                cost_centre: quote.cost_centre,
                line_items: [credit_line],
                subtotal: -refund_amount,
                tax_total: -refund_amount * 0.1,
                total: -refund_amount * 1.1,
                issued_date: now,
                due_date: now + 14 * 24 * 60 * 60 * 1000,
                last_updated: now,
                notes: `Credit note for ${stage_display} cancellation — $${refund_amount.toFixed(2)} refund issued (cancelled before refund deadline).`,
                attachment_names: [],
                converted_from: quote.id,
            };

            this._documents.next([...docs, credit_note]);
            this._appendAudit(
                credit_id,
                'created',
                `Credit note ${credit_number} — $${refund_amount.toFixed(2)} refund for ${stage_display} cancellation`,
            );
            this._appendAudit(
                quote.id,
                'updated',
                `${stage_display} cancelled — $${refund_amount.toFixed(2)} refund issued (credit note ${credit_number})`,
            );
            notifySuccess(
                `${stage_display} cancelled — $${refund_amount.toFixed(2)} refund credit note generated`,
            );
        } else {
            // Non-refundable — keep the charge, add an audit note
            this._appendAudit(
                quote.id,
                'updated',
                `${stage_display} cancelled — non-refundable (past refund deadline). Charges retained.`,
            );
        }
    }

    private _recalcTotals(items: FinancialLineItem[]): {
        subtotal: number;
        tax_total: number;
        total: number;
    } {
        const subtotal = items.reduce((s, i) => s + i.quantity * i.unit_price, 0);
        const tax_total = items.reduce(
            (s, i) => s + i.quantity * i.unit_price * i.tax_rate,
            0,
        );
        return { subtotal, tax_total, total: subtotal + tax_total };
    }

    /** Send a final invoice via email dialog. */
    public async sendInvoice(doc_id: string): Promise<void> {
        const docs = this._documents.getValue();
        const doc = docs.find((d) => d.id === doc_id);
        if (!doc || doc.doc_type !== 'invoice' || doc.status !== 'draft') return;

        const event = this._cached_all_events.find((e) => e.id === doc.event_id);
        const event_name = event?.title || 'Unknown Event';

        const ref = this._dialog.open(SendQuoteDialogComponent, {
            data: {
                document: doc,
                event_name,
                recipient_name: doc.bill_to,
            } as SendQuoteDialogData,
            autoFocus: false,
        });

        const sent = await firstValueFrom(ref.afterClosed());
        if (sent) {
            this.updateDocumentStatus(doc_id, 'invoiced');
            this._appendAudit(
                doc_id,
                'emailed',
                `Invoice emailed to ${doc.bill_to}`,
            );
            notifySuccess(`Invoice ${doc.doc_number} sent to ${doc.bill_to}`);
        }
    }

    // ── Deposit & Final Invoice ─────────────────────────────────────

    /**
     * Generate a final-balance invoice for the remaining amount after deposit.
     * Available only after the event date has passed.
     */
    public generateFinalInvoice(quote_id: string): void {
        const docs = [...this._documents.getValue()];
        const quote = docs.find((d) => d.id === quote_id);
        if (!quote || quote.doc_type !== 'quote') return;
        if (!this.eventDatePassed(quote.event_id)) return;

        // Check a deposit invoice exists and no final invoice yet
        const has_deposit = docs.some(
            (d) =>
                d.converted_from === quote_id &&
                d.invoice_type === 'deposit',
        );
        const has_final = docs.some(
            (d) =>
                d.converted_from === quote_id &&
                d.invoice_type === 'final',
        );
        if (!has_deposit || has_final) return;

        const pct = DEPOSIT_PERCENT;
        const remaining_ratio = (100 - pct) / 100;

        const invoice_id = `fin-final-${Date.now()}`;
        const invoice_number = generateDocNumber('invoice');

        const scaled_items = quote.line_items.map((li) => ({
            ...li,
            unit_price: Math.round(li.unit_price * remaining_ratio * 100) / 100,
            line_total: Math.round(li.line_total * remaining_ratio * 100) / 100,
        }));

        const invoice: FinancialDocument = {
            ...quote,
            id: invoice_id,
            doc_type: 'invoice',
            doc_number: invoice_number,
            invoice_type: 'final',
            deposit_percent: pct,
            status: 'draft',
            line_items: scaled_items,
            subtotal: Math.round(quote.subtotal * remaining_ratio * 100) / 100,
            tax_total: Math.round(quote.tax_total * remaining_ratio * 100) / 100,
            total: Math.round(quote.total * remaining_ratio * 100) / 100,
            issued_date: Date.now(),
            due_date: Date.now() + 14 * 24 * 60 * 60 * 1000,
            last_updated: Date.now(),
            notes: `Final balance (${100 - pct}%) for ${quote.doc_number}. Deposit of ${pct}% already invoiced.`,
            converted_from: quote_id,
            refund_deadline: quote.refund_deadline,
        };

        docs.push(invoice);
        this._documents.next(docs);

        this._appendAudit(
            invoice_id,
            'created',
            `Final invoice ${invoice_number} generated — remaining ${100 - pct}% of ${quote.doc_number}`,
        );

        notifySuccess(`Final invoice ${invoice_number} generated as draft`);
        this._selected_id.next(invoice_id);
    }

    /** Whether a final invoice can be generated for this quote. */
    public canGenerateFinalInvoice(doc: FinancialDocument): boolean {
        if (doc.doc_type !== 'quote' || doc.status !== 'accepted') return false;
        if (!this.eventDatePassed(doc.event_id)) return false;

        const docs = this._documents.getValue();
        const has_deposit = docs.some(
            (d) =>
                d.converted_from === doc.id &&
                d.invoice_type === 'deposit',
        );
        const has_final = docs.some(
            (d) =>
                d.converted_from === doc.id &&
                d.invoice_type === 'final',
        );
        return has_deposit && !has_final;
    }

    /** Whether the event date + duration has passed. */
    public eventDatePassed(event_id: string): boolean {
        const all = this._cached_all_events;
        const event = all.find((e) => e.id === event_id && !e.parent_event);
        if (!event) {
            const child = all.find((e) => e.id === event_id);
            if (child?.parent_event) return this.eventDatePassed(child.parent_event);
            return false;
        }
        const end_time = event.date + event.duration_minutes * 60 * 1000;
        return Date.now() > end_time;
    }

    // ── Approval checks ─────────────────────────────────────────────

    /** Check whether all approval categories for an event have been accepted. */
    public allApprovalsAccepted(event_id: string): boolean {
        const statuses = this._approval_state.status;
        const all_events = this._getEventFamily(event_id);
        return all_events.every((e) => statuses[e.id] === 'approved');
    }

    /** Check whether all approvals have been actioned (approved or declined). */
    public allApprovalsActioned(event_id: string): boolean {
        const statuses = this._approval_state.status;
        const all_events = this._getEventFamily(event_id);
        return all_events.every(
            (e) =>
                statuses[e.id] === 'approved' ||
                statuses[e.id] === 'declined',
        );
    }

    /** Check whether ALL approvals for an event are declined. */
    public allApprovalsDeclined(event_id: string): boolean {
        const statuses = this._approval_state.status;
        const all_events = this._getEventFamily(event_id);
        return all_events.every((e) => statuses[e.id] === 'declined');
    }

    /** Get parent + children events for a given event ID. */
    private _getEventFamily(event_id: string): typeof MOCK_APPROVAL_EVENTS {
        const all = this._cached_all_events;
        const parent_event = all.find(
            (e) => e.id === event_id && !e.parent_event,
        );
        if (!parent_event) {
            const child = all.find(
                (e) => e.id === event_id,
            );
            if (child?.parent_event) {
                return this._getEventFamily(child.parent_event);
            }
            return all.filter((e) => e.id === event_id);
        }
        const children = all.filter(
            (e) => e.parent_event === parent_event.id,
        );
        return [parent_event, ...children];
    }

    /** Approve a single billable category on a sent quote. Auto-accepts when all categories approved. */
    public approveCategory(doc_id: string, category: BillableCategory): void {
        const docs = this._documents.getValue();
        const doc = docs.find((d) => d.id === doc_id);
        if (!doc || doc.doc_type !== 'quote' || doc.status !== 'sent') return;

        const already = doc.approved_categories || [];
        if (already.includes(category)) return;

        const updated_approved = [...already, category];
        const required = documentCategories(doc);
        const all_approved = required.every((c) => updated_approved.includes(c));

        const updated = docs.map((d) =>
            d.id === doc_id
                ? {
                      ...d,
                      approved_categories: updated_approved,
                      status: (all_approved ? 'accepted' : 'sent') as FinancialDocStatus,
                      last_updated: Date.now(),
                  }
                : d,
        );
        this._documents.next(updated);

        const label = BILLABLE_CATEGORY_DISPLAY[category] || category;
        this._appendAudit(doc_id, 'approved', `${label} approved`);

        if (all_approved) {
            this._appendAudit(doc_id, 'accepted', 'All categories approved — quote accepted');
            notifySuccess(`All categories approved — ${doc.doc_number} accepted`);
        } else {
            notifySuccess(`${label} approved on ${doc.doc_number}`);
        }
    }

    // ── Permission checks ──────────────────────────────────────────

    public canPerformAction(action: FinanceAction): boolean {
        const perms = FINANCE_ROLE_PERMISSIONS[this._role.getValue()];
        return perms.allowed_actions.includes(action);
    }

    // ── Private ────────────────────────────────────────────────────

    /**
     * When all approvals for an event are actioned (approved/declined):
     * - All declined → cancel the quote
     * - At least one approved → accept quote + generate deposit invoice
     */
    private _syncWithApprovals(
        _statuses: Record<string, string>,
    ): void {
        let docs = this._documents.getValue();
        let changed = false;
        const new_invoices: FinancialDocument[] = [];

        const updated = docs.map((d) => {
            if (d.doc_type !== 'quote') return d;

            const all_actioned = this.allApprovalsActioned(d.event_id);
            const all_declined = this.allApprovalsDeclined(d.event_id);

            // All declined → cancel the quote
            if (d.status === 'draft' && all_actioned && all_declined) {
                changed = true;
                this._appendAudit(
                    d.id,
                    'cancelled',
                    'All approvals declined — quote cancelled',
                );
                return {
                    ...d,
                    status: 'cancelled' as FinancialDocStatus,
                    notes: d.notes.replace(
                        /Awaiting all event approvals before sending\./,
                        'All approvals declined. Event request cancelled.',
                    ),
                    last_updated: Date.now(),
                };
            }

            // All actioned with at least one approved → accept + generate deposit
            if (d.status === 'draft' && all_actioned && !all_declined) {
                const has_deposit = docs.some(
                    (x) =>
                        x.converted_from === d.id &&
                        x.invoice_type === 'deposit',
                );
                if (!has_deposit) {
                    changed = true;

                    const pct = DEPOSIT_PERCENT;
                    const deposit_ratio = pct / 100;
                    const deposit_id = `fin-dep-${Date.now()}-${d.id}`;
                    const deposit_number = generateDocNumber('invoice');

                    const scaled_items = d.line_items.map((li) => ({
                        ...li,
                        unit_price: Math.round(li.unit_price * deposit_ratio * 100) / 100,
                        line_total: Math.round(li.line_total * deposit_ratio * 100) / 100,
                    }));

                    const deposit: FinancialDocument = {
                        ...d,
                        id: deposit_id,
                        doc_type: 'invoice',
                        doc_number: deposit_number,
                        invoice_type: 'deposit',
                        deposit_percent: pct,
                        status: 'invoiced',
                        line_items: scaled_items,
                        subtotal: Math.round(d.subtotal * deposit_ratio * 100) / 100,
                        tax_total: Math.round(d.tax_total * deposit_ratio * 100) / 100,
                        total: Math.round(d.total * deposit_ratio * 100) / 100,
                        issued_date: Date.now(),
                        due_date: Date.now() + 7 * 24 * 60 * 60 * 1000,
                        last_updated: Date.now(),
                        notes: `Deposit invoice (${pct}%) for ${d.doc_number}. Auto-generated upon approval completion.`,
                        attachment_names: [],
                        converted_from: d.id,
                        refund_deadline: d.refund_deadline,
                    };

                    new_invoices.push(deposit);

                    this._appendAudit(
                        deposit_id,
                        'created',
                        `Deposit invoice ${deposit_number} auto-generated (${pct}% of ${d.doc_number})`,
                    );
                    this._appendAudit(
                        d.id,
                        'accepted',
                        `All approvals actioned — deposit invoice ${deposit_number} sent`,
                    );

                    notifySuccess(
                        `Deposit invoice ${deposit_number} auto-sent to ${d.bill_to}`,
                    );

                    return {
                        ...d,
                        status: 'accepted' as FinancialDocStatus,
                        notes: d.notes.replace(
                            /Awaiting all event approvals before sending\./,
                            `Approvals complete. Deposit invoice ${deposit_number} sent.`,
                        ),
                        last_updated: Date.now(),
                    };
                }
            }

            // Revert notes if approvals are removed while still draft
            if (
                d.status === 'draft' &&
                !all_actioned &&
                d.notes.includes('Approvals complete')
            ) {
                changed = true;
                return {
                    ...d,
                    notes: d.notes.replace(
                        /Approvals complete[^.]*\./,
                        'Awaiting all event approvals before sending.',
                    ),
                    last_updated: Date.now(),
                };
            }

            return d;
        });

        if (changed || new_invoices.length) {
            this._documents.next([...updated, ...new_invoices]);
        }
    }

    /** Scans invoices and marks any past-due ones as overdue. */
    private _checkOverdueInvoices(): void {
        const now = Date.now();
        const docs = this._documents.getValue();
        let changed = false;

        const updated = docs.map((d) => {
            if (d.doc_type === 'invoice' && d.status === 'invoiced' && d.due_date < now) {
                changed = true;
                this._appendAudit(d.id, 'overdue', 'Invoice marked overdue — past due date');
                return { ...d, status: 'overdue' as FinancialDocStatus, last_updated: now };
            }
            return d;
        });

        if (changed) {
            this._documents.next(updated);
        }
    }

    private _applyRoleVisibility(
        docs: FinancialDocument[],
        role: EventRole,
    ): FinancialDocument[] {
        const approval_perms = ROLE_PERMISSIONS[role];
        const finance_perms = FINANCE_ROLE_PERMISSIONS[role];

        const visible_categories = new Set<ApprovalCategory>([
            ...approval_perms.can_approve,
            ...approval_perms.can_view,
        ]);
        if (
            approval_perms.reject_safety &&
            !visible_categories.has('safety')
        ) {
            visible_categories.add('safety');
        }

        const all_events = this._cached_all_events;
        const visible_event_ids = new Set(
            all_events
                .filter((e) => visible_categories.has(e.category))
                .map((e) => e.id),
        );

        let result = docs.filter((d) => visible_event_ids.has(d.event_id));

        const has_view_all = finance_perms.allowed_actions.includes('view_all');
        if (!has_view_all) {
            const owner_names = ROLE_MOCK_ORGANISERS[role];
            if (owner_names?.length) {
                const owned_event_ids = new Set(
                    all_events
                        .filter((e) => owner_names.includes(e.organiser))
                        .map((e) => e.id),
                );
                result = result.filter((d) =>
                    owned_event_ids.has(d.event_id),
                );
            }
        }

        return result;
    }

    private _appendAudit(
        document_id: string,
        action: string,
        detail: string,
    ): void {
        const entry: FinanceAuditEntry = {
            id: `aud-${Date.now()}`,
            document_id,
            timestamp: Date.now(),
            actor: 'Current User',
            action,
            detail,
        };
        this._audit_log.next([...this._audit_log.getValue(), entry]);
    }
}
