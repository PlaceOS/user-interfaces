import { addDays, setHours, setMinutes } from 'date-fns';

import { EventRole, MOCK_APPROVAL_EVENTS } from './event-approvals-mock.data';

// ── Types ──────────────────────────────────────────────────────────

export type FinancialDocStatus =
    | 'draft'
    | 'sent'
    | 'accepted'
    | 'declined'
    | 'invoiced'
    | 'paid'
    | 'overdue'
    | 'cancelled';

export type FinancialDocType = 'quote' | 'invoice';

export type BillableCategory =
    | 'venue_hire'
    | 'catering'
    | 'av_equipment'
    | 'staffing'
    | 'security'
    | 'cleaning'
    | 'miscellaneous';

// ── Interfaces ─────────────────────────────────────────────────────

export interface FinancialLineItem {
    id: string;
    description: string;
    category: BillableCategory;
    quantity: number;
    unit_price: number;
    tax_rate: number;
    line_total: number;
}

export type InvoiceType = 'deposit' | 'final';

/** Deposit invoices are 50% of the quote total. */
export const DEPOSIT_PERCENT = 50;

export interface FinancialDocument {
    id: string;
    doc_type: FinancialDocType;
    doc_number: string;
    event_id: string;
    status: FinancialDocStatus;
    vendor_department: string;
    bill_to: string;
    cost_centre: string;
    line_items: FinancialLineItem[];
    subtotal: number;
    tax_total: number;
    total: number;
    issued_date: number;
    due_date: number;
    last_updated: number;
    notes: string;
    attachment_names: string[];
    converted_from?: string;
    /** Tracks which billable categories the admin has approved. */
    approved_categories?: BillableCategory[];
    /** Whether this invoice is a deposit or final balance. Quotes have no invoice_type. */
    invoice_type?: InvoiceType;
    /** The deposit percentage used (e.g. 50). Set on both deposit and final invoices. */
    deposit_percent?: number;
}

/** Returns the unique billable categories present in a document's line items. */
export function documentCategories(doc: FinancialDocument): BillableCategory[] {
    return [...new Set(doc.line_items.map((li) => li.category))];
}

export interface FinanceAuditEntry {
    id: string;
    document_id: string;
    timestamp: number;
    actor: string;
    action: string;
    detail: string;
}

// ── Display maps ───────────────────────────────────────────────────

export const DOC_STATUS_DISPLAY: Record<FinancialDocStatus, string> = {
    draft: 'Draft',
    sent: 'Sent',
    accepted: 'Accepted',
    declined: 'Declined',
    invoiced: 'Invoiced',
    paid: 'Paid',
    overdue: 'Overdue',
    cancelled: 'Cancelled',
};

export const DOC_STATUS_COLOR: Record<FinancialDocStatus, string> = {
    draft: 'bg-base-200 text-base-content',
    sent: 'bg-info/20 text-info',
    accepted: 'bg-success/20 text-success',
    declined: 'bg-error/20 text-error',
    invoiced: 'bg-warning/20 text-warning',
    paid: 'bg-success/20 text-success',
    overdue: 'bg-error/20 text-error',
    cancelled: 'bg-base-200 text-base-content opacity-60',
};

export const BILLABLE_CATEGORY_DISPLAY: Record<BillableCategory, string> = {
    venue_hire: 'Venue Hire',
    catering: 'Catering',
    av_equipment: 'AV Equipment',
    staffing: 'Staffing',
    security: 'Security',
    cleaning: 'Cleaning',
    miscellaneous: 'Miscellaneous',
};

export const BILLABLE_CATEGORY_ICONS: Record<BillableCategory, string> = {
    venue_hire: 'meeting_room',
    catering: 'restaurant',
    av_equipment: 'settings_input_hdmi',
    staffing: 'people',
    security: 'shield',
    cleaning: 'cleaning_services',
    miscellaneous: 'more_horiz',
};

// ── Role permissions ───────────────────────────────────────────────

export type FinanceAction =
    | 'view_all'
    | 'view_own'
    | 'create_quote'
    | 'send_quote'
    | 'accept_quote'
    | 'convert_to_invoice'
    | 'record_payment'
    | 'view_audit_log'
    | 'export';

export interface FinanceRolePermission {
    allowed_actions: FinanceAction[];
    category_filter: BillableCategory[] | 'all';
}

export const FINANCE_ROLE_PERMISSIONS: Record<EventRole, FinanceRolePermission> = {
    global_admin: {
        allowed_actions: [
            'view_all', 'create_quote', 'send_quote', 'accept_quote',
            'convert_to_invoice', 'record_payment', 'view_audit_log', 'export',
        ],
        category_filter: 'all',
    },
    campus_admin: {
        allowed_actions: [
            'view_all', 'create_quote', 'send_quote', 'accept_quote',
            'convert_to_invoice', 'record_payment', 'view_audit_log', 'export',
        ],
        category_filter: 'all',
    },
    venue_manager: {
        allowed_actions: ['view_all', 'create_quote', 'send_quote', 'export'],
        category_filter: ['venue_hire', 'cleaning', 'staffing'],
    },
    campus_it_av_manager: {
        allowed_actions: ['view_all', 'create_quote', 'send_quote', 'export'],
        category_filter: ['av_equipment'],
    },
    campus_it_av_ic: {
        allowed_actions: ['view_all', 'send_quote'],
        category_filter: ['av_equipment'],
    },
    event_owner: {
        allowed_actions: ['view_own', 'accept_quote'],
        category_filter: 'all',
    },
    faculty_sponsor: {
        allowed_actions: ['view_own'],
        category_filter: 'all',
    },
    dining_manager: {
        allowed_actions: ['view_all', 'create_quote', 'send_quote', 'export'],
        category_filter: ['catering'],
    },
    catering_manager: {
        allowed_actions: ['view_all', 'create_quote', 'send_quote', 'export'],
        category_filter: ['catering'],
    },
    security: {
        allowed_actions: ['view_all'],
        category_filter: ['security'],
    },
    auditor: {
        allowed_actions: ['view_all', 'view_audit_log', 'export'],
        category_filter: 'all',
    },
    mrs_captain: {
        allowed_actions: ['view_own'],
        category_filter: ['security'],
    },
};

/**
 * Maps each role to the mock organiser name(s) they "own".
 * Used to enforce `view_own` — roles not listed here have no ownership filter.
 */
export const ROLE_MOCK_ORGANISERS: Partial<Record<EventRole, string[]>> = {
    event_owner: ['Sarah Chen'],
    faculty_sponsor: ['Mark Thompson'],
    mrs_captain: ['Safety Officer'],
};

// ── Helpers ────────────────────────────────────────────────────────

let _quote_counter = 100;
let _invoice_counter = 100;

export function generateDocNumber(doc_type: FinancialDocType): string {
    if (doc_type === 'quote') {
        _quote_counter++;
        return `QUO-2026-${String(_quote_counter).padStart(3, '0')}`;
    }
    _invoice_counter++;
    return `INV-2026-${String(_invoice_counter).padStart(3, '0')}`;
}

function _makeDate(days_offset: number, hour: number, minute: number): number {
    return setMinutes(
        setHours(addDays(Date.now(), days_offset), hour),
        minute,
    ).valueOf();
}

// ── Mock data ──────────────────────────────────────────────────────

function _lineItem(
    id: string,
    description: string,
    category: BillableCategory,
    quantity: number,
    unit_price: number,
    tax_rate: number,
): FinancialLineItem {
    const line_total = quantity * unit_price * (1 + tax_rate);
    return { id, description, category, quantity, unit_price, tax_rate, line_total };
}

function _totals(items: FinancialLineItem[]) {
    const subtotal = items.reduce((s, i) => s + i.quantity * i.unit_price, 0);
    const tax_total = items.reduce(
        (s, i) => s + i.quantity * i.unit_price * i.tax_rate,
        0,
    );
    return { subtotal, tax_total, total: subtotal + tax_total };
}

const _q1_items: FinancialLineItem[] = [
    _lineItem('li-001', 'Main Auditorium — Full Day Hire', 'venue_hire', 1, 2500, 0.1),
    _lineItem('li-002', 'Morning Tea — 200 pax', 'catering', 200, 12.5, 0.1),
    _lineItem('li-003', 'PA System & 2x Lapel Mics', 'av_equipment', 1, 850, 0.1),
    _lineItem('li-004', 'Lectern & Confidence Monitor', 'av_equipment', 1, 400, 0.1),
];

const _offsite_items: FinancialLineItem[] = [
    _lineItem('li-005', 'Conference Centre A — Full Day', 'venue_hire', 1, 4200, 0.1),
    _lineItem('li-006', 'Working Lunch — 40 pax', 'catering', 40, 35, 0.1),
    _lineItem('li-007', 'AV Package — Projector + Audio', 'av_equipment', 1, 1200, 0.1),
    _lineItem('li-008', 'Facilitator x 2 (8 hrs)', 'staffing', 2, 900, 0.1),
];

const _dinner_items: FinancialLineItem[] = [
    _lineItem('li-009', '3-Course Dinner — 30 pax', 'catering', 30, 95, 0.1),
    _lineItem('li-010', 'Beverage Package — Premium', 'catering', 30, 55, 0.1),
    _lineItem('li-011', 'Wait Staff x 4 (5 hrs)', 'staffing', 4, 250, 0.1),
];

const _awards_items: FinancialLineItem[] = [
    _lineItem('li-012', 'Main Auditorium — Evening', 'venue_hire', 1, 3500, 0.1),
    _lineItem('li-013', 'Stage Lighting Package', 'av_equipment', 1, 1800, 0.1),
    _lineItem('li-014', 'Sound System — Full Production', 'av_equipment', 1, 2200, 0.1),
    _lineItem('li-015', 'Canape Service — 300 pax', 'catering', 300, 18, 0.1),
    _lineItem('li-016', 'Security Staff x 3 (6 hrs)', 'security', 3, 350, 0.1),
];

const _community_items: FinancialLineItem[] = [
    _lineItem('li-017', 'Campus Grounds — Full Day', 'venue_hire', 1, 1500, 0.1),
    _lineItem('li-018', 'BBQ Catering — 500 pax', 'catering', 500, 15, 0.1),
    _lineItem('li-019', 'Portable PA System', 'av_equipment', 2, 300, 0.1),
    _lineItem('li-020', 'Post-Event Grounds Clean', 'cleaning', 1, 850, 0.1),
];

const _lunch_items: FinancialLineItem[] = [
    _lineItem('li-021', 'Dining Hall B — 2 hrs', 'venue_hire', 1, 600, 0.1),
    _lineItem('li-022', 'Buffet Lunch — 25 pax', 'catering', 25, 28, 0.1),
];

const _firedrill_items: FinancialLineItem[] = [
    _lineItem('li-023', 'Safety Marshal x 6 (2 hrs)', 'staffing', 6, 120, 0.1),
    _lineItem('li-024', 'First Aid Station', 'miscellaneous', 1, 200, 0.1),
];

const _hazmat_items: FinancialLineItem[] = [
    _lineItem('li-025', 'Training Room 2 — Half Day', 'venue_hire', 1, 350, 0.1),
    _lineItem('li-026', 'EHS Trainer — 4 hrs', 'staffing', 1, 600, 0.1),
];

const q1 = _totals(_q1_items);
const offsite = _totals(_offsite_items);
const dinner = _totals(_dinner_items);
const awards = _totals(_awards_items);
const community = _totals(_community_items);
const lunch = _totals(_lunch_items);
const firedrill = _totals(_firedrill_items);
const hazmat = _totals(_hazmat_items);

export const MOCK_FINANCIAL_DOCUMENTS: FinancialDocument[] = [
    // ── Q1 Town Hall (appr-001) — quote accepted, event already occurred ──
    {
        id: 'fin-001',
        doc_type: 'quote',
        doc_number: 'QUO-2026-001',
        event_id: 'appr-001',
        status: 'accepted',
        vendor_department: 'Facilities',
        bill_to: 'R&D Division',
        cost_centre: 'CC-4010',
        line_items: _q1_items,
        ...q1,
        issued_date: _makeDate(-5, 9, 0),
        due_date: _makeDate(2, 17, 0),
        last_updated: _makeDate(-2, 14, 0),
        notes: 'Includes set-up and pack-down. All event approvals accepted. Deposit invoice INV-2026-101 sent.',
        attachment_names: ['Q1_TownHall_Quote.pdf'],
        converted_from: undefined,
        approved_categories: ['venue_hire', 'catering', 'av_equipment'],
    },
    // ── Q1 Town Hall — deposit invoice (50%), already paid ──
    {
        id: 'fin-dep-001',
        doc_type: 'invoice',
        doc_number: 'INV-2026-101',
        event_id: 'appr-001',
        status: 'paid',
        vendor_department: 'Facilities',
        bill_to: 'R&D Division',
        cost_centre: 'CC-4010',
        invoice_type: 'deposit',
        deposit_percent: DEPOSIT_PERCENT,
        line_items: _q1_items.map((li) => ({
            ...li,
            unit_price: Math.round(li.unit_price * 0.5 * 100) / 100,
            line_total: Math.round(li.line_total * 0.5 * 100) / 100,
        })),
        subtotal: Math.round(q1.subtotal * 0.5 * 100) / 100,
        tax_total: Math.round(q1.tax_total * 0.5 * 100) / 100,
        total: Math.round(q1.total * 0.5 * 100) / 100,
        issued_date: _makeDate(-3, 10, 0),
        due_date: _makeDate(-1, 17, 0),
        last_updated: _makeDate(-1, 11, 0),
        notes: 'Deposit invoice (50%) for QUO-2026-001. Payment received.',
        attachment_names: [],
        converted_from: 'fin-001',
    },
    // ── Leadership Offsite (appr-002) — quote draft, awaiting approvals ──
    {
        id: 'fin-002',
        doc_type: 'quote',
        doc_number: 'QUO-2026-002',
        event_id: 'appr-002',
        status: 'draft',
        vendor_department: 'Events Team',
        bill_to: 'Executive Office',
        cost_centre: 'CC-1000',
        line_items: _offsite_items,
        ...offsite,
        issued_date: _makeDate(-3, 11, 0),
        due_date: _makeDate(4, 17, 0),
        last_updated: _makeDate(-3, 11, 0),
        notes: 'Awaiting all event approvals before sending.',
        attachment_names: ['Leadership_Offsite_Quote.pdf'],
        converted_from: undefined,
    },
    // ── Welcome Lunch (appr-003) — quote draft, awaiting approvals ──
    {
        id: 'fin-003',
        doc_type: 'quote',
        doc_number: 'QUO-2026-003',
        event_id: 'appr-003',
        status: 'draft',
        vendor_department: 'Dining Services',
        bill_to: 'HR Team',
        cost_centre: 'CC-2000',
        line_items: _lunch_items,
        ...lunch,
        issued_date: _makeDate(-12, 9, 0),
        due_date: _makeDate(-8, 17, 0),
        last_updated: _makeDate(-8, 9, 0),
        notes: 'Awaiting all event approvals before sending.',
        attachment_names: ['Welcome_Lunch_Quote.pdf'],
        converted_from: undefined,
    },
    // ── Board Dinner (appr-004) — quote draft, awaiting approvals ──
    {
        id: 'fin-005',
        doc_type: 'quote',
        doc_number: 'QUO-2026-004',
        event_id: 'appr-004',
        status: 'draft',
        vendor_department: 'Dining Services',
        bill_to: 'Board Secretary',
        cost_centre: 'CC-1010',
        line_items: _dinner_items,
        ...dinner,
        issued_date: _makeDate(-7, 15, 0),
        due_date: _makeDate(5, 17, 0),
        last_updated: _makeDate(-2, 10, 0),
        notes: 'Dietary requirements confirmed. Awaiting all event approvals before sending.',
        attachment_names: ['Board_Dinner_Quote.pdf', 'Menu_Options.pdf'],
        converted_from: undefined,
    },
    // ── Awards Night (appr-010) — quote draft ──
    {
        id: 'fin-007',
        doc_type: 'quote',
        doc_number: 'QUO-2026-005',
        event_id: 'appr-010',
        status: 'draft',
        vendor_department: 'Events Team',
        bill_to: 'People & Culture',
        cost_centre: 'CC-3000',
        line_items: _awards_items,
        ...awards,
        issued_date: _makeDate(-1, 16, 0),
        due_date: _makeDate(10, 17, 0),
        last_updated: _makeDate(-1, 16, 0),
        notes: 'Draft — awaiting final AV costs. Awaiting all event approvals before sending.',
        attachment_names: [],
        converted_from: undefined,
    },
    // ── Community Day (appr-009) — quote draft, awaiting approvals ──
    {
        id: 'fin-008',
        doc_type: 'quote',
        doc_number: 'QUO-2026-006',
        event_id: 'appr-009',
        status: 'draft',
        vendor_department: 'Facilities',
        bill_to: 'Events Coordinator',
        cost_centre: 'CC-5000',
        line_items: _community_items,
        ...community,
        issued_date: _makeDate(-2, 10, 0),
        due_date: _makeDate(7, 17, 0),
        last_updated: _makeDate(-2, 10, 0),
        notes: 'Includes grounds restoration. Awaiting all event approvals before sending.',
        attachment_names: ['Community_Day_Quote.pdf'],
        converted_from: undefined,
    },
    // ── Fire Drill (appr-007) — quote draft, awaiting approvals ──
    {
        id: 'fin-009',
        doc_type: 'quote',
        doc_number: 'QUO-2026-007',
        event_id: 'appr-007',
        status: 'draft',
        vendor_department: 'Safety & Compliance',
        bill_to: 'EHS Department',
        cost_centre: 'CC-6000',
        line_items: _firedrill_items,
        ...firedrill,
        issued_date: _makeDate(-4, 14, 0),
        due_date: _makeDate(3, 17, 0),
        last_updated: _makeDate(-2, 9, 0),
        notes: 'Marshals confirmed. Awaiting all event approvals before sending.',
        attachment_names: ['Fire_Drill_Quote.pdf'],
        converted_from: undefined,
    },
    // ── Hazmat Briefing (appr-008) — quote draft, awaiting approvals ──
    {
        id: 'fin-010',
        doc_type: 'quote',
        doc_number: 'QUO-2026-008',
        event_id: 'appr-008',
        status: 'draft',
        vendor_department: 'Safety & Compliance',
        bill_to: 'EHS Department',
        cost_centre: 'CC-6000',
        line_items: _hazmat_items,
        ...hazmat,
        issued_date: _makeDate(-6, 10, 0),
        due_date: _makeDate(1, 17, 0),
        last_updated: _makeDate(-4, 15, 30),
        notes: 'Awaiting all event approvals before sending.',
        attachment_names: ['Hazmat_Quote.pdf'],
        converted_from: undefined,
    },
];

// ── Audit log ──────────────────────────────────────────────────────

export const MOCK_FINANCE_AUDIT_LOG: FinanceAuditEntry[] = [
    // fin-001: Q1 Town Hall quote — accepted
    { id: 'aud-001', document_id: 'fin-001', timestamp: _makeDate(-5, 9, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-001 created (draft)' },
    { id: 'aud-001b', document_id: 'fin-001', timestamp: _makeDate(-3, 10, 0), actor: 'System', action: 'accepted', detail: 'All approvals accepted — deposit invoice INV-2026-101 sent' },

    // fin-dep-001: Q1 Town Hall deposit — paid
    { id: 'aud-001c', document_id: 'fin-dep-001', timestamp: _makeDate(-3, 10, 0), actor: 'System', action: 'created', detail: 'Deposit invoice INV-2026-101 auto-generated (50% of QUO-2026-001)' },
    { id: 'aud-001d', document_id: 'fin-dep-001', timestamp: _makeDate(-1, 11, 0), actor: 'Current User', action: 'paid', detail: 'Payment of $3,437.50 recorded' },

    // fin-002: Leadership Offsite quote — draft
    { id: 'aud-002', document_id: 'fin-002', timestamp: _makeDate(-3, 11, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-002 created (draft)' },

    // fin-003: Welcome Lunch quote — draft
    { id: 'aud-004', document_id: 'fin-003', timestamp: _makeDate(-12, 9, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-003 created (draft)' },

    // fin-005: Board Dinner quote — draft
    { id: 'aud-012', document_id: 'fin-005', timestamp: _makeDate(-7, 15, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-004 created (draft)' },

    // fin-007: Awards Night quote — draft
    { id: 'aud-017', document_id: 'fin-007', timestamp: _makeDate(-1, 16, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-005 created (draft)' },

    // fin-008: Community Day quote — draft
    { id: 'aud-018', document_id: 'fin-008', timestamp: _makeDate(-2, 10, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-006 created (draft)' },

    // fin-009: Fire Drill quote — draft
    { id: 'aud-020', document_id: 'fin-009', timestamp: _makeDate(-4, 14, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-007 created (draft)' },

    // fin-010: Hazmat Briefing quote — draft
    { id: 'aud-022', document_id: 'fin-010', timestamp: _makeDate(-6, 10, 0), actor: 'System', action: 'created', detail: 'Quote QUO-2026-008 created (draft)' },
];
