import type { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError } from '@placeos/common';
import type { BulkMediaUploadItem } from '../shared/bulk-media-upload-modal.component';
import {
    PdfImportModalComponent,
    type PdfImportModalData,
    type PdfImportModalResult,
} from '../shared/pdf-import-modal.component';
import { dialogClosed } from '../signage-service.util';
import { canEncodeWebp, type PdfDocumentHandle } from './pdf-import.util';

/**
 * Open each PDF in the import modal in turn, to pick and set up its pages.
 * Resolves with the rendered pages of every PDF. A PDF that cannot be read
 * shows an error naming it, and a PDF the user cancels is skipped.
 *
 * Loaded on first use, with the modal, so only a PDF upload pays for it.
 */
export async function importPdfPages(
    dialog: MatDialog,
    files: File[],
    openDocument: (file: File) => Promise<PdfDocumentHandle>,
) {
    const items: BulkMediaUploadItem[] = [];
    for (const [index, file] of files.entries()) {
        const position =
            files.length > 1
                ? { current: index + 1, total: files.length }
                : undefined;
        items.push(...(await importPdf(dialog, file, position, openDocument)));
    }
    return items;
}

async function importPdf(
    dialog: MatDialog,
    file: File,
    position: PdfImportModalData['position'],
    openDocument: (file: File) => Promise<PdfDocumentHandle>,
): Promise<BulkMediaUploadItem[]> {
    let pdf_document: PdfDocumentHandle;
    try {
        pdf_document = await openDocument(file);
    } catch (error) {
        const reason = (error as { reason?: string } | null)?.reason;
        notifyError(
            i18n(
                reason === 'password'
                    ? 'SIGNAGE_MANAGER.PDF_IMPORT_ERR_PASSWORD'
                    : 'SIGNAGE_MANAGER.PDF_IMPORT_ERR_INVALID',
                { name: file.name },
            ),
        );
        return [];
    }
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
        return (await dialogClosed<PdfImportModalResult>(ref)) || [];
    } finally {
        await pdf_document.destroy().catch(() => undefined);
    }
}
