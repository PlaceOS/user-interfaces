import type { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError } from '@placeos/common';
import type { BulkMediaUploadItem } from '../shared/bulk-media-upload.util';
import {
    PdfImportModalComponent,
    type PdfImportModalData,
    type PdfImportModalResult,
} from '../shared/pdf-import-modal.component';
import { dialogClosed } from '../signage-service.util';
import {
    canEncodeWebp,
    MAX_PDF_PAGES,
    type PdfDocumentHandle,
} from './pdf-import.util';

export interface PdfPageImport {
    /** Pages to upload. Each renders when it uploads. */
    items: BulkMediaUploadItem[];
    /** Close the PDFs, once their pages are uploaded */
    close(): Promise<void>;
}

/**
 * Open each PDF in the import modal in turn, to pick and set up its pages.
 * Resolves with the pages of every PDF, which render as they upload, so the
 * PDFs they come from stay open until `close` is called. A PDF that cannot be
 * read shows an error naming it, and a PDF the user cancels is skipped.
 *
 * Loaded on first use, with the modal, so only a PDF upload pays for it.
 */
export async function importPdfPages(
    dialog: MatDialog,
    files: File[],
    openDocument: (file: File) => Promise<PdfDocumentHandle>,
): Promise<PdfPageImport> {
    const items: BulkMediaUploadItem[] = [];
    const documents: PdfDocumentHandle[] = [];
    for (const [index, file] of files.entries()) {
        const position =
            files.length > 1
                ? { current: index + 1, total: files.length }
                : undefined;
        const result = await importPdf(dialog, file, position, openDocument);
        if (!result) continue;
        items.push(...result.items);
        documents.push(result.document);
    }
    return {
        items,
        close: async () => {
            await Promise.all(
                documents.map((item) => item.destroy().catch(() => undefined)),
            );
        },
    };
}

/** Message for a PDF that did not open, by `PdfOpenError` reason. Any other
 * error means pdf.js did not load, so the file itself can be valid. */
function openErrorKey(error: unknown) {
    const reason = (error as { reason?: string } | null)?.reason;
    if (reason === 'password') return 'SIGNAGE_MANAGER.PDF_IMPORT_ERR_PASSWORD';
    if (reason === 'invalid') return 'SIGNAGE_MANAGER.PDF_IMPORT_ERR_INVALID';
    return 'SIGNAGE_MANAGER.PDF_IMPORT_ERR_LOAD';
}

/** Pages picked from one PDF, and the open PDF they render from. Undefined
 * when it cannot be read, has too many pages or the user cancels, with the
 * PDF closed. */
async function importPdf(
    dialog: MatDialog,
    file: File,
    position: PdfImportModalData['position'],
    openDocument: (file: File) => Promise<PdfDocumentHandle>,
) {
    let pdf_document: PdfDocumentHandle;
    try {
        pdf_document = await openDocument(file);
    } catch (error) {
        notifyError(i18n(openErrorKey(error), { name: file.name }));
        return undefined;
    }
    if (pdf_document.page_count > MAX_PDF_PAGES) {
        notifyError(
            i18n('SIGNAGE_MANAGER.PDF_IMPORT_ERR_TOO_MANY_PAGES', {
                name: file.name,
                count: pdf_document.page_count,
                max: MAX_PDF_PAGES,
            }),
        );
        await pdf_document.destroy().catch(() => undefined);
        return undefined;
    }
    let items: PdfImportModalResult;
    try {
        const data: PdfImportModalData = {
            file_name: file.name,
            document: pdf_document,
            webp_supported: canEncodeWebp(),
            position,
        };
        const ref = dialog.open(PdfImportModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
            ariaLabelledBy: 'pdf-import-title',
        });
        items = await dialogClosed<PdfImportModalResult>(ref);
    } finally {
        if (!items?.length) {
            await pdf_document.destroy().catch(() => undefined);
        }
    }
    return items?.length ? { items, document: pdf_document } : undefined;
}
