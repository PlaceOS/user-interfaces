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

export interface FinanceFilters {
    status: 'all' | FinancialDocStatus;
    vendor_department: string;
    search: string;
}

@Injectable({
    providedIn: 'root',
})
export class EventFinanceStateService {
    private _dialog = inject(MatDialog);
    private _approval_state = inject(EventApprovalStateService);

    private _documents = new BehaviorSubject<FinancialDocument[]>(
        [...MOCK_FINANCIAL_DOCUMENTS],
    );
    private _overdue_timer: ReturnType<typeof setInterval>;

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
    ]).pipe(
        map(([docs, role, filters, _approval_statuses]) => {
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
    ]).pipe(
        map(([docs, role]) => {
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
            const adhoc_event = MOCK_APPROVAL_EVENTS.find(
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
                for (const approval_cat of approval_categories) {
                    const child_event = MOCK_APPROVAL_EVENTS.find(
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

        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === doc.event_id);
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
        const event = MOCK_APPROVAL_EVENTS.find((e) => e.id === event_id && !e.parent_event);
        if (!event) {
            const child = MOCK_APPROVAL_EVENTS.find((e) => e.id === event_id);
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
        const parent_event = MOCK_APPROVAL_EVENTS.find(
            (e) => e.id === event_id && !e.parent_event,
        );
        if (!parent_event) {
            const child = MOCK_APPROVAL_EVENTS.find(
                (e) => e.id === event_id,
            );
            if (child?.parent_event) {
                return this._getEventFamily(child.parent_event);
            }
            return MOCK_APPROVAL_EVENTS.filter((e) => e.id === event_id);
        }
        const children = MOCK_APPROVAL_EVENTS.filter(
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

        const visible_event_ids = new Set(
            MOCK_APPROVAL_EVENTS
                .filter((e) => visible_categories.has(e.category))
                .map((e) => e.id),
        );

        let result = docs.filter((d) => visible_event_ids.has(d.event_id));

        const has_view_all = finance_perms.allowed_actions.includes('view_all');
        if (!has_view_all) {
            const owner_names = ROLE_MOCK_ORGANISERS[role];
            if (owner_names?.length) {
                const owned_event_ids = new Set(
                    MOCK_APPROVAL_EVENTS
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
