import { TestBed } from '@angular/core/testing';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { setNotifyOutlet } from '@placeos/common';
import type {
    PdfDocumentHandle,
    renderPdfPageImage,
} from '../../app/media/pdf-import.util';
import {
    PdfImportModalComponent,
    PdfImportModalData,
} from '../../app/shared/pdf-import-modal.component';

const notify_open = vi.fn(() => ({
    onAction: () => ({ subscribe: () => ({ unsubscribe: () => {} }) }),
    dismiss: vi.fn(),
}));

function fakeDocument(page_count: number): PdfDocumentHandle {
    return {
        page_count,
        pageSize: vi.fn().mockResolvedValue({ width: 960, height: 540 }),
        renderLayer: vi.fn(async (page_number: number, rotation: number) => {
            const canvas = document.createElement('canvas');
            // jsdom's Blob cannot be read back, so label it
            canvas.toBlob = (callback) =>
                callback(
                    Object.assign(new Blob(), {
                        label: `page=${page_number};r=${rotation}`,
                    }),
                );
            return canvas;
        }),
        destroy: vi.fn().mockResolvedValue(undefined),
    };
}

/** Stands in for the full size page render */
const render_page = vi.fn<typeof renderPdfPageImage>();

/** Object URLs handed out, by the blob contents they point at */
const object_urls = new Map<string, Blob>();

describe('PdfImportModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    let data: PdfImportModalData;

    /** Contents of the blob behind a preview URL */
    async function previewText(url: string) {
        return (object_urls.get(url) as Blob & { label?: string })?.label;
    }

    beforeAll(() => {
        // jsdom has no object URLs
        URL.createObjectURL = vi.fn((blob: Blob) => {
            const url = `blob:test/${object_urls.size + 1}`;
            object_urls.set(url, blob);
            return url;
        });
        URL.revokeObjectURL = vi.fn((url: string) => {
            object_urls.delete(url);
        });
    });

    async function createComponent(
        overrides: Partial<PdfImportModalData> = {},
    ) {
        data = {
            file_name: 'Quarterly results.pdf',
            document: fakeDocument(5),
            webp_supported: true,
            ...overrides,
        };
        await TestBed.configureTestingModule({
            imports: [PdfImportModalComponent],
            providers: [
                { provide: MAT_DIALOG_DATA, useValue: data },
                { provide: MatDialogRef, useValue: dialog_ref },
            ],
        })
            .overrideComponent(PdfImportModalComponent, {
                set: { template: '', imports: [] },
            })
            .compileComponents();
        const component = TestBed.createComponent(
            PdfImportModalComponent,
        ).componentInstance;
        (component as unknown as Record<string, unknown>)['_renderPage'] =
            render_page;
        return component;
    }

    beforeEach(() => {
        vi.clearAllMocks();
        object_urls.clear();
        setNotifyOutlet({ open: notify_open } as any, true);
        render_page.mockImplementation(
            async (_document, page_number, options, name) => ({
                file: new File(
                    [`page ${page_number}`],
                    `${name}.${options.format}`,
                    {
                        type: `image/${options.format}`,
                    },
                ),
                width: 3840,
                height: 2160,
            }),
        );
    });

    it('starts with every page selected, named after the file', async () => {
        const component = await createComponent();

        expect(component.pages().map((page) => page.selected)).toEqual([
            true,
            true,
            true,
            true,
            true,
        ]);
        expect(component.name()).toBe('Quarterly results');
        expect(component.example_name()).toBe('Quarterly results - page 1');
        expect(component.fit()).toBe('page');
        expect(component.background()).toBe('#ffffff');
        expect(component.format()).toBe('webp');
        expect(component.resolution()).toBe('4k');
    });

    it('defaults to PNG when the browser cannot write WebP', async () => {
        const component = await createComponent({ webp_supported: false });

        expect(component.format()).toBe('png');
    });

    it('toggles a page, and a range with shift-click', async () => {
        const component = await createComponent();
        const page = (number: number) => component.pages()[number - 1];

        component.togglePage(page(2));
        expect(component.selected_count()).toBe(4);

        component.togglePage(page(4), { shiftKey: true } as MouseEvent);
        expect(component.pages().map((item) => item.selected)).toEqual([
            true,
            false,
            false,
            false,
            true,
        ]);

        component.selectAll(true);
        expect(component.selected_count()).toBe(5);
        component.selectAll(false);
        expect(component.selected_count()).toBe(0);
    });

    it('turns one page or all of them', async () => {
        const component = await createComponent();

        component.rotatePage(component.pages()[0], 90);
        component.rotateAll(-90);

        expect(component.pages().map((page) => page.rotation)).toEqual([
            0, 270, 270, 270, 270,
        ]);
    });

    it('renders a preview of each page, and again after a turn', async () => {
        const component = await createComponent({ document: fakeDocument(2) });

        await component.renderPreviews();
        const [first, second] = component.pages().map((page) => page.preview);
        expect(await previewText(first)).toBe('page=1;r=0');
        expect(await previewText(second)).toBe('page=2;r=0');

        component.rotatePage(component.pages()[1], 90);
        await vi.waitFor(() =>
            expect(component.pages()[1].preview).not.toBe(second),
        );
        expect(await previewText(component.pages()[1].preview)).toBe(
            'page=2;r=90',
        );
        // The preview it replaced is freed
        expect(URL.revokeObjectURL).toHaveBeenCalledWith(second);
        expect(data.document.renderLayer).toHaveBeenCalledTimes(3);
    });

    it('frees the previews when it closes', async () => {
        const component = await createComponent({ document: fakeDocument(2) });
        await component.renderPreviews();
        const previews = component.pages().map((page) => page.preview);

        TestBed.resetTestingModule();

        for (const preview of previews) {
            expect(URL.revokeObjectURL).toHaveBeenCalledWith(preview);
        }
    });

    it('marks a page whose preview fails and keeps going', async () => {
        const document_handle = fakeDocument(2);
        vi.mocked(document_handle.renderLayer).mockRejectedValueOnce(
            new Error('bad page'),
        );
        const component = await createComponent({ document: document_handle });

        await component.renderPreviews();

        expect(component.pages()[0]).toMatchObject({
            preview: '',
            preview_failed: true,
        });
        expect(await previewText(component.pages()[1].preview)).toBe(
            'page=2;r=0',
        );
    });

    it('closes with the selected pages, rendering none of them yet', async () => {
        const component = await createComponent();
        component.togglePage(component.pages()[1]);
        component.rotatePage(component.pages()[2], 90);
        component.name.set('  Q3  ');
        component.fit.set('portrait');
        component.resolution.set('hd');

        await component.importPages();

        expect(render_page).not.toHaveBeenCalled();
        const [items] = dialog_ref.close.mock.calls[0];
        // Pages keep their number in the PDF when some are left out
        expect(items.map((item) => item.name)).toEqual([
            'Q3 - page 1',
            'Q3 - page 3',
            'Q3 - page 4',
            'Q3 - page 5',
        ]);
        expect(items[0]).toMatchObject({
            media_type: 'image',
            tags: ['Q3'],
            metadata: {
                width: 1080,
                height: 1920,
                is_landscape: false,
                duration: 0,
            },
        });
        expect(items[0].file).toBeUndefined();
    });

    it('sizes each page from its own shape and turn', async () => {
        const component = await createComponent({ document: fakeDocument(2) });
        component.rotatePage(component.pages()[1], 90);

        await component.importPages();

        const [items] = dialog_ref.close.mock.calls[0];
        expect(items.map((item) => item.metadata)).toEqual([
            { width: 3840, height: 2160, is_landscape: true, duration: 0 },
            { width: 2160, height: 3840, is_landscape: false, duration: 0 },
        ]);
    });

    it('renders a page with the options when its file is needed', async () => {
        const component = await createComponent();
        component.rotatePage(component.pages()[2], 90);
        component.fit.set('landscape');
        component.background_mode.set('custom');
        component.custom_colour.set('#336699');
        component.format.set('png');
        component.resolution.set('hd');
        await component.importPages();
        const [items] = dialog_ref.close.mock.calls[0];

        const file = await items[2].loadFile();

        expect(render_page).toHaveBeenCalledOnce();
        expect(render_page).toHaveBeenCalledWith(
            data.document,
            3,
            {
                rotation: 90,
                fit: 'landscape',
                background: '#336699',
                format: 'png',
                resolution: 'hd',
            },
            'Quarterly results - page 3',
        );
        expect(file.name).toBe('Quarterly results - page 3.png');
    });

    it('keeps a transparent background transparent', async () => {
        const component = await createComponent({ document: fakeDocument(1) });
        component.background_mode.set('transparent');
        await component.importPages();
        const [items] = dialog_ref.close.mock.calls[0];

        await items[0].loadFile();

        expect(render_page.mock.calls[0][2].background).toBe('transparent');
    });

    it('stays open with an error when the pages cannot be read', async () => {
        const document_handle = fakeDocument(2);
        vi.mocked(document_handle.pageSize).mockRejectedValueOnce(
            new Error('bad page'),
        );
        const component = await createComponent({ document: document_handle });

        await component.importPages();

        expect(notify_open).toHaveBeenCalledWith(
            expect.stringContaining('Could not read Quarterly results.pdf'),
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.importing()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
        // Previews stop for the import, and continue after it fails
        await vi.waitFor(() =>
            expect(component.pages().every((page) => page.preview)).toBe(
                true,
            ),
        );
    });

    it('cannot close while it reads the page sizes', async () => {
        const document_handle = fakeDocument(1);
        let resolve_size: (size: { width: number; height: number }) => void =
            () => {};
        vi.mocked(document_handle.pageSize).mockReturnValueOnce(
            new Promise((resolve) => (resolve_size = resolve)),
        );
        const component = await createComponent({ document: document_handle });

        const done = component.importPages();
        expect(dialog_ref.disableClose).toBe(true);

        resolve_size({ width: 960, height: 540 });
        await done;
        expect(dialog_ref.close).toHaveBeenCalledOnce();
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('does not import without a name or any page', async () => {
        const component = await createComponent();
        component.name.set('   ');
        await component.importPages();
        component.name.set('deck');
        component.selectAll(false);
        await component.importPages();

        expect(data.document.pageSize).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
