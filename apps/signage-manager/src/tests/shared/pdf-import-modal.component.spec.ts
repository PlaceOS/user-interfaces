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
            canvas.toDataURL = () =>
                `data:image/png;page=${page_number};r=${rotation}`;
            return canvas;
        }),
        destroy: vi.fn().mockResolvedValue(undefined),
    };
}

/** Stands in for the full size page render */
const render_page = vi.fn<typeof renderPdfPageImage>();

describe('PdfImportModalComponent', () => {
    const dialog_ref = { close: vi.fn(), disableClose: false };
    let data: PdfImportModalData;

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
        setNotifyOutlet({ open: notify_open } as any, true);
        dialog_ref.disableClose = false;
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
        expect(component.pages().map((page) => page.preview)).toEqual([
            'data:image/png;page=1;r=0',
            'data:image/png;page=2;r=0',
        ]);

        component.rotatePage(component.pages()[1], 90);
        await vi.waitFor(() =>
            expect(component.pages()[1].preview).toBe(
                'data:image/png;page=2;r=90',
            ),
        );
        expect(data.document.renderLayer).toHaveBeenCalledTimes(3);
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
        expect(component.pages()[1].preview).toBe('data:image/png;page=2;r=0');
    });

    it('renders the selected pages with the options and closes with them', async () => {
        const component = await createComponent();
        component.togglePage(component.pages()[1]);
        component.rotatePage(component.pages()[2], 90);
        component.name.set('  Q3  ');
        component.fit.set('landscape');
        component.background_mode.set('custom');
        component.custom_colour.set('#336699');
        component.format.set('png');
        component.resolution.set('hd');

        await component.importPages();

        expect(render_page).toHaveBeenCalledTimes(4);
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
            'Q3 - page 3',
            expect.any(AbortSignal),
        );
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
                width: 3840,
                height: 2160,
                is_landscape: true,
                duration: 0,
            },
        });
        expect(items[0].file.name).toBe('Q3 - page 1.png');
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('keeps a transparent background transparent', async () => {
        const component = await createComponent({ document: fakeDocument(1) });
        component.background_mode.set('transparent');

        await component.importPages();

        expect(render_page.mock.calls[0][2].background).toBe('transparent');
    });

    it('leaves out a page that fails and names it in an error', async () => {
        render_page.mockRejectedValueOnce(new Error('render failed'));
        const component = await createComponent({ document: fakeDocument(2) });

        await component.importPages();

        expect(notify_open).toHaveBeenCalledWith(
            'Could not render page 1 of Quarterly results.pdf.',
            expect.anything(),
            expect.objectContaining({ panelClass: ['error'] }),
        );
        const [items] = dialog_ref.close.mock.calls[0];
        expect(items.map((item) => item.name)).toEqual([
            'Quarterly results - page 2',
        ]);
    });

    it('stays open when the import is cancelled', async () => {
        const component = await createComponent();
        render_page.mockImplementation(
            async (_document, page_number, _options, name) => {
                if (page_number === 2) component.stop();
                return {
                    file: new File(['page'], `${name}.webp`),
                    width: 1,
                    height: 1,
                };
            },
        );

        await component.importPages();

        expect(render_page).toHaveBeenCalledTimes(2);
        expect(dialog_ref.close).not.toHaveBeenCalled();
        expect(component.importing()).toBe(false);
        expect(dialog_ref.disableClose).toBe(false);
    });

    it('does not import without a name or any page', async () => {
        const component = await createComponent();
        component.name.set('   ');
        await component.importPages();
        component.name.set('deck');
        component.selectAll(false);
        await component.importPages();

        expect(render_page).not.toHaveBeenCalled();
        expect(dialog_ref.close).not.toHaveBeenCalled();
    });
});
