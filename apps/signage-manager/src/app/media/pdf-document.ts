import type {
    PDFDocumentLoadingTask,
    PDFDocumentProxy,
    PDFPageProxy,
} from 'pdfjs-dist';
import {
    DocumentHandle,
    DocumentOpenError,
    normalizeRotation,
    PageSize,
    releaseCanvas,
} from './document-import.util';

/** Where the build copies the pdf.js worker and its data files */
const PDFJS_ASSETS = 'assets/pdfjs/';

function assetUrl(path: string) {
    return new URL(`${PDFJS_ASSETS}${path}`, document.baseURI).href;
}

let pdfjs_module: Promise<typeof import('pdfjs-dist')> | undefined;

/**
 * pdf.js and its worker, loaded on first use as they are large and only the
 * PDF import needs them. A failed load is not kept, so the next PDF tries the
 * download again.
 *
 * The worker is downloaded here, before pdf.js uses it. When pdf.js cannot
 * load the worker itself, it keeps that failure until a page reload.
 */
function loadPdfJs() {
    pdfjs_module ??= Promise.all([
        import('pdfjs-dist'),
        fetchWorker(assetUrl('pdf.worker.min.mjs')),
    ]).then(
        ([pdfjs, worker_src]) => {
            pdfjs.GlobalWorkerOptions.workerSrc = worker_src;
            return pdfjs;
        },
        (error: unknown) => {
            pdfjs_module = undefined;
            throw error;
        },
    );
    return pdfjs_module;
}

/** Download the worker into the browser cache, so pdf.js can start it */
async function fetchWorker(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`PDF worker did not load: ${response.status}`);
    }
    await response.arrayBuffer();
    return url;
}

/** pdf.js message when it cannot start its worker */
const WORKER_FAILED = 'Setting up fake worker failed';

/**
 * Open a PDF file. Rejects with a `DocumentOpenError` when the file cannot be
 * read, and with the load error when pdf.js or its worker cannot load.
 */
export async function openPdfDocument(file: File): Promise<DocumentHandle> {
    const pdfjs = await loadPdfJs();
    let loading_task: PDFDocumentLoadingTask | undefined;
    let document_proxy: PDFDocumentProxy;
    try {
        const data = new Uint8Array(await file.arrayBuffer());
        loading_task = pdfjs.getDocument({
            data,
            cMapUrl: assetUrl('cmaps/'),
            cMapPacked: true,
            standardFontDataUrl: assetUrl('standard_fonts/'),
            wasmUrl: assetUrl('wasm/'),
            iccUrl: assetUrl('iccs/'),
        });
        document_proxy = await loading_task.promise;
    } catch (error) {
        await loading_task?.destroy().catch(() => undefined);
        // A worker that did not start is a load error, not a damaged file
        if ((error as Error | null)?.message?.startsWith(WORKER_FAILED)) {
            throw error;
        }
        const name = (error as { name?: string } | null)?.name;
        throw new DocumentOpenError(
            name === 'PasswordException' ? 'password' : 'invalid',
            (error as Error)?.message || 'Could not open PDF',
        );
    }
    if (!document_proxy.numPages) {
        await loading_task.destroy();
        throw new DocumentOpenError('invalid', 'PDF has no pages');
    }
    return new PdfJsDocument(loading_task, document_proxy);
}

class PdfJsDocument implements DocumentHandle {
    constructor(
        private readonly _loading_task: PDFDocumentLoadingTask,
        private readonly _document: PDFDocumentProxy,
    ) {}

    public get page_count() {
        return this._document.numPages;
    }

    public async pageSize(page_number: number) {
        const page = await this._document.getPage(page_number);
        const { width, height } = page.getViewport({ scale: 1 });
        return { width, height };
    }

    public async renderLayer(
        page_number: number,
        rotation: number,
        bounds: PageSize,
        signal?: AbortSignal,
    ) {
        signal?.throwIfAborted();
        const page = await this._document.getPage(page_number);
        try {
            return await renderPage(page, rotation, bounds, signal);
        } finally {
            page.cleanup();
        }
    }

    public destroy() {
        // Destroying the loading task closes the document and its worker
        return this._loading_task.destroy();
    }
}

async function renderPage(
    page: PDFPageProxy,
    rotation: number,
    bounds: PageSize,
    signal?: AbortSignal,
) {
    const turn = normalizeRotation(page.rotate + rotation);
    const unscaled = page.getViewport({ scale: 1, rotation: turn });
    const scale = Math.min(
        bounds.width / unscaled.width,
        bounds.height / unscaled.height,
    );
    const viewport = page.getViewport({ scale, rotation: turn });
    const canvas = document.createElement('canvas');
    canvas.width = Math.max(1, Math.round(viewport.width));
    canvas.height = Math.max(1, Math.round(viewport.height));
    const canvasContext = canvas.getContext('2d');
    if (!canvasContext) throw new Error('Canvas is not available');
    const task = page.render({
        canvas,
        // Given only the canvas, pdf.js opens it without an alpha channel,
        // which leaves no way to keep a page transparent
        canvasContext,
        viewport,
        // pdf.js paints white unless told otherwise. The background is
        // applied afterwards, so transparent pages can stay transparent.
        background: 'rgba(0,0,0,0)',
    });
    const abort = () => task.cancel();
    signal?.addEventListener('abort', abort, { once: true });
    try {
        await task.promise;
    } catch (error) {
        releaseCanvas(canvas);
        throw error;
    } finally {
        signal?.removeEventListener('abort', abort);
    }
    return canvas;
}
