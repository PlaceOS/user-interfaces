import { jsPDF } from 'jspdf';
import { format } from 'date-fns';

import { MOCK_APPROVAL_EVENTS } from './event-approvals-mock.data';
import {
    BILLABLE_CATEGORY_DISPLAY,
    DOC_STATUS_DISPLAY,
    FinancialDocument,
} from './event-finance-mock.data';

const _currency_formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
});

function _formatCurrency(value: number): string {
    return _currency_formatter.format(value);
}

function _categoryLabel(category: string): string {
    return (
        BILLABLE_CATEGORY_DISPLAY[
            category as keyof typeof BILLABLE_CATEGORY_DISPLAY
        ] || category
    );
}

function _statusLabel(status: string): string {
    return (
        DOC_STATUS_DISPLAY[status as keyof typeof DOC_STATUS_DISPLAY] || status
    );
}

function _lookupEvent(event_id: string) {
    return MOCK_APPROVAL_EVENTS.find((e) => e.id === event_id);
}

export function generateFinancePdf(doc: FinancialDocument): void {
    const pdf = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });
    const page_width = pdf.internal.pageSize.getWidth();
    const margin = 20;
    const content_width = page_width - margin * 2;
    let y = margin;

    const event = _lookupEvent(doc.event_id);

    const _addPageIfNeeded = (needed: number) => {
        if (y + needed > pdf.internal.pageSize.getHeight() - margin) {
            pdf.addPage();
            y = margin;
        }
    };

    // ── Header ──
    pdf.setFontSize(18);
    pdf.setFont('helvetica', 'bold');
    let type_label = doc.doc_type === 'quote' ? 'Quote' : 'Invoice';
    if (doc.invoice_type === 'deposit') type_label = 'Deposit Invoice';
    if (doc.invoice_type === 'final') type_label = 'Final Invoice';
    pdf.text(`${type_label}: ${doc.doc_number}`, margin, y);
    y += 8;

    pdf.setFontSize(10);
    pdf.setFont('helvetica', 'normal');
    pdf.text(`Status: ${_statusLabel(doc.status)}`, margin, y);
    pdf.text(
        `Issued: ${format(doc.issued_date, 'd MMM yyyy')}`,
        page_width - margin,
        y,
        { align: 'right' },
    );
    y += 5;
    pdf.text(
        `Due: ${format(doc.due_date, 'd MMM yyyy')}`,
        page_width - margin,
        y,
        { align: 'right' },
    );
    y += 8;

    // ── Divider ──
    pdf.setDrawColor(200);
    pdf.line(margin, y, page_width - margin, y);
    y += 8;

    // ── Event details ──
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Event Details', margin, y);
    y += 6;

    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');
    const event_name = event?.title || 'Unknown Event';
    const event_date_time = event
        ? `${format(event.date, 'EEE, d MMM yyyy')} at ${format(event.date, 'h:mm a')}`
        : '';
    const event_location = event?.location || '';
    const event_organiser = event?.organiser || '';

    const detail_rows: [string, string][] = [
        ['Event', event_name],
        ['Date / Time', event_date_time],
        ['Location', event_location],
        ['Requester', event_organiser],
        ['Department', doc.vendor_department],
        ['Bill To', doc.bill_to],
        ['Cost Centre', doc.cost_centre],
    ];
    for (const [label, value] of detail_rows) {
        pdf.setFont('helvetica', 'bold');
        pdf.text(`${label}:`, margin, y);
        pdf.setFont('helvetica', 'normal');
        pdf.text(value, margin + 35, y);
        y += 5;
    }
    y += 4;

    // ── Divider ──
    pdf.setDrawColor(200);
    pdf.line(margin, y, page_width - margin, y);
    y += 8;

    // ── Line items table ──
    pdf.setFontSize(11);
    pdf.setFont('helvetica', 'bold');
    pdf.text('Line Items', margin, y);
    y += 7;

    // Table header
    const col_desc = margin;
    const col_cat = margin + 75;
    const col_qty = margin + 110;
    const col_unit = margin + 125;
    const col_tax = margin + 145;
    const col_total = page_width - margin;

    pdf.setFontSize(8);
    pdf.setFont('helvetica', 'bold');
    pdf.setFillColor(245, 245, 245);
    pdf.rect(margin, y - 3.5, content_width, 6, 'F');
    pdf.text('Description', col_desc, y);
    pdf.text('Category', col_cat, y);
    pdf.text('Qty', col_qty, y);
    pdf.text('Unit Price', col_unit, y);
    pdf.text('Tax', col_tax, y);
    pdf.text('Total', col_total, y, { align: 'right' });
    y += 6;

    // Table rows
    pdf.setFont('helvetica', 'normal');
    for (const item of doc.line_items) {
        _addPageIfNeeded(8);
        pdf.text(item.description, col_desc, y, { maxWidth: 72 });
        pdf.text(_categoryLabel(item.category), col_cat, y, { maxWidth: 32 });
        pdf.text(String(item.quantity), col_qty, y);
        pdf.text(_formatCurrency(item.unit_price), col_unit, y);
        pdf.text(`${item.tax_rate * 100}%`, col_tax, y);
        pdf.text(_formatCurrency(item.line_total), col_total, y, {
            align: 'right',
        });
        y += 6;
    }

    y += 2;
    pdf.setDrawColor(200);
    pdf.line(margin, y, page_width - margin, y);
    y += 6;

    // ── Totals ──
    pdf.setFontSize(9);
    pdf.setFont('helvetica', 'normal');

    if (doc.deposit_percent) {
        const pct_label =
            doc.invoice_type === 'deposit'
                ? `Deposit — ${doc.deposit_percent}% of quote total`
                : `Final Balance — ${100 - doc.deposit_percent}% remaining`;
        pdf.setFont('helvetica', 'italic');
        pdf.text(pct_label, col_tax - 10, y);
        pdf.setFont('helvetica', 'normal');
        y += 5;
    }

    pdf.text('Subtotal:', col_tax - 10, y);
    pdf.text(_formatCurrency(doc.subtotal), col_total, y, { align: 'right' });
    y += 5;
    pdf.text('Tax (GST):', col_tax - 10, y);
    pdf.text(_formatCurrency(doc.tax_total), col_total, y, { align: 'right' });
    y += 6;
    pdf.setFont('helvetica', 'bold');
    pdf.setFontSize(10);
    pdf.text('Total (USD):', col_tax - 10, y);
    pdf.text(_formatCurrency(doc.total), col_total, y, { align: 'right' });
    y += 10;

    // ── Notes ──
    if (doc.notes) {
        _addPageIfNeeded(15);
        pdf.setDrawColor(200);
        pdf.line(margin, y, page_width - margin, y);
        y += 6;
        pdf.setFontSize(11);
        pdf.setFont('helvetica', 'bold');
        pdf.text('Notes', margin, y);
        y += 5;
        pdf.setFontSize(9);
        pdf.setFont('helvetica', 'normal');
        const note_lines = pdf.splitTextToSize(doc.notes, content_width);
        pdf.text(note_lines, margin, y);
        y += note_lines.length * 4 + 4;
    }

    // ── Footer ──
    const page_count = pdf.getNumberOfPages();
    for (let i = 1; i <= page_count; i++) {
        pdf.setPage(i);
        pdf.setFontSize(8);
        pdf.setFont('helvetica', 'normal');
        pdf.setTextColor(150);
        pdf.text(
            `Generated ${format(Date.now(), 'd MMM yyyy, h:mm a')}  —  Page ${i} of ${page_count}`,
            page_width / 2,
            pdf.internal.pageSize.getHeight() - 10,
            { align: 'center' },
        );
        pdf.setTextColor(0);
    }

    pdf.save(`${doc.doc_number}.pdf`);
}
