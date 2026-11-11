import type { MatDialog } from '@angular/material/dialog';
import { i18n, notifyError } from '@placeos/common';
import type { BulkMediaUploadItem } from '../shared/bulk-media-upload.util';
import {
    DocumentImportModalComponent,
    type DocumentImportModalData,
    type DocumentImportModalResult,
} from '../shared/document-import-modal.component';
import {
    PptxImportConfirmModalComponent,
    type PptxImportConfirmModalData,
    type PptxImportConfirmModalResult,
} from '../shared/pptx-import-confirm-modal.component';
import { isPptxFile } from '../signage-media-upload.util';
import { dialogClosed } from '../signage-service.util';
import {
    canEncodeWebp,
    type DocumentHandle,
    DocumentOpenError,
    type DocumentOpenErrorReason,
    MAX_DOCUMENT_PAGES,
} from './document-import.util';

export interface DocumentPageImport {
    /** Pages to upload. Each renders when it uploads. */
    items: BulkMediaUploadItem[];
    /** Close the documents, once their pages are uploaded */
    close(): Promise<void>;
}

/**
 * Open each document (a PDF or a PowerPoint file) in the import modal in
 * turn, to pick and set up its pages. A PowerPoint file first asks the user
 * to confirm, as its slides render on a best-effort basis.
 * Resolves with the pages of every document, which render as they upload, so
 * the documents they come from stay open until `close` is called. A document
 * that cannot be read shows an error naming it, and a document the user
 * cancels is skipped.
 *
 * Loaded on first use, with the modal, so only a document upload pays for it.
 */
export async function importDocumentPages(
    dialog: MatDialog,
    files: File[],
    openDocument: (file: File) => Promise<DocumentHandle>,
): Promise<DocumentPageImport> {
    const items: BulkMediaUploadItem[] = [];
    const documents: DocumentHandle[] = [];
    const close = async () => {
        await Promise.all(
            documents.map((item) => item.destroy().catch(() => undefined)),
        );
    };
    try {
        for (const [index, file] of files.entries()) {
            const position =
                files.length > 1
                    ? { current: index + 1, total: files.length }
                    : undefined;
            const result = await importDocument(
                dialog,
                file,
                position,
                openDocument,
            );
            if (!result) continue;
            items.push(...result.items);
            documents.push(result.document);
        }
    } catch (error) {
        // No caller gets `close` then, so close the documents already imported
        await close();
        throw error;
    }
    return { items, close };
}

const OPEN_ERROR_KEYS: Record<DocumentOpenErrorReason, string> = {
    password: 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_PASSWORD',
    invalid: 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_INVALID',
    too_many_pages: 'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_TOO_MANY_PAGES',
};

/** Message for a document that did not open, by `DocumentOpenError` reason.
 * Any other error means its reader did not load, so the file can be valid. */
function openErrorKey(error: unknown) {
    const reason = (error as { reason?: DocumentOpenErrorReason } | null)
        ?.reason;
    return (
        (reason && OPEN_ERROR_KEYS[reason]) ||
        'SIGNAGE_MANAGER.DOCUMENT_IMPORT_ERR_LOAD'
    );
}

/** Open a document, and close it again when it has too many pages to import */
async function openWithinLimit(
    file: File,
    openDocument: (file: File) => Promise<DocumentHandle>,
) {
    const document_handle = await openDocument(file);
    if (document_handle.page_count > MAX_DOCUMENT_PAGES) {
        await document_handle.destroy().catch(() => undefined);
        throw new DocumentOpenError(
            'too_many_pages',
            `More than ${MAX_DOCUMENT_PAGES} pages`,
        );
    }
    return document_handle;
}

/**
 * Warn that PowerPoint slides render on a best-effort basis, with the steps
 * to export images or video from PowerPoint instead.
 * @returns Whether the user continues with the import
 */
async function confirmPptxImport(dialog: MatDialog, file: File) {
    const data: PptxImportConfirmModalData = { file_name: file.name };
    const ref = dialog.open(PptxImportConfirmModalComponent, { data });
    return !!(await dialogClosed<PptxImportConfirmModalResult>(ref));
}

/** Pages picked from one document, and the open document they render from.
 * Undefined when the user does not confirm, the document cannot be read or
 * has too many pages, or the user cancels, with the document closed. */
async function importDocument(
    dialog: MatDialog,
    file: File,
    position: DocumentImportModalData['position'],
    openDocument: (file: File) => Promise<DocumentHandle>,
) {
    if (isPptxFile(file) && !(await confirmPptxImport(dialog, file))) {
        return undefined;
    }
    // The modal opens while the document opens, and shows that it loads
    const opening = openWithinLimit(file, openDocument);
    const opened = opening.catch((error: unknown) => {
        notifyError(
            i18n(openErrorKey(error), {
                name: file.name,
                max: MAX_DOCUMENT_PAGES,
            }),
        );
        return undefined;
    });
    let items: DocumentImportModalResult;
    try {
        const data: DocumentImportModalData = {
            file_name: file.name,
            document: opening,
            webp_supported: canEncodeWebp(),
            position,
        };
        const ref = dialog.open(DocumentImportModalComponent, {
            data,
            panelClass: 'mobile-fullscreen',
            ariaLabelledBy: 'document-import-title',
        });
        items = await dialogClosed<DocumentImportModalResult>(ref);
    } finally {
        // A modal closed before the document opened does not hold up the
        // next files. The document closes once it opens.
        if (!items?.length) {
            void opened.then((handle) =>
                handle?.destroy().catch(() => undefined),
            );
        }
    }
    if (!items?.length) return undefined;
    // The modal imports only from an open document, so this does not wait
    const document_handle = await opened;
    return document_handle ? { items, document: document_handle } : undefined;
}
