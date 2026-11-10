import type * as PdfJs from 'pdfjs-dist';

const get_document = vi.fn();
const worker_options = { workerSrc: '' };

vi.mock('pdfjs-dist', () => ({
    getDocument: get_document,
    GlobalWorkerOptions: worker_options,
}));

/** A fresh copy of the module, as it keeps pdf.js once loaded */
async function loadModule() {
    vi.resetModules();
    return import('../../app/media/pdf-document');
}

/** A PDF file. jsdom has no `File.arrayBuffer`, so it is added here. */
function pdfFile() {
    const file = new File(['%PDF'], 'deck.pdf', { type: 'application/pdf' });
    return Object.assign(file, {
        arrayBuffer: async () => new ArrayBuffer(4),
    });
}

/** A loading task that resolves or rejects like `getDocument` does */
function loadingTask(result: () => Promise<Partial<PdfJs.PDFDocumentProxy>>) {
    return {
        get promise() {
            return result();
        },
        destroy: vi.fn().mockResolvedValue(undefined),
    };
}

describe('openPdfDocument', () => {
    let fetch_worker: ReturnType<typeof vi.fn>;

    beforeEach(() => {
        get_document.mockReset();
        fetch_worker = vi.fn().mockResolvedValue(new Response('worker'));
        vi.stubGlobal('fetch', fetch_worker);
    });

    afterEach(() => vi.unstubAllGlobals());

    it('downloads the worker again after a failed download', async () => {
        const { openPdfDocument } = await loadModule();
        fetch_worker.mockResolvedValueOnce(new Response('', { status: 503 }));
        get_document.mockReturnValue(
            loadingTask(() => Promise.resolve({ numPages: 2 })),
        );

        await expect(openPdfDocument(pdfFile())).rejects.not.toHaveProperty(
            'reason',
        );
        expect(get_document).not.toHaveBeenCalled();

        const pdf = await openPdfDocument(pdfFile());
        expect(pdf.page_count).toBe(2);
        expect(fetch_worker).toHaveBeenCalledTimes(2);
        expect(worker_options.workerSrc).toMatch(/pdf\.worker\.min\.mjs$/);
    });

    it.each([
        [
            'a worker that did not start as a load error',
            new Error('Setting up fake worker failed: "Failed to fetch".'),
            undefined,
        ],
        [
            'a damaged file as invalid',
            Object.assign(new Error('Invalid PDF structure.'), {
                name: 'InvalidPDFException',
            }),
            'invalid',
        ],
        [
            'a locked file as password protected',
            Object.assign(new Error('No password given'), {
                name: 'PasswordException',
            }),
            'password',
        ],
    ])('reports %s', async (_name, error, reason) => {
        const { openPdfDocument } = await loadModule();
        const task = loadingTask(() => Promise.reject(error));
        get_document.mockReturnValue(task);

        const result = await openPdfDocument(pdfFile()).catch((e) => e);

        expect((result as { reason?: string }).reason).toBe(reason);
        expect(task.destroy).toHaveBeenCalled();
    });
});
