import {
    canvasToImageFile,
    composePdfPage,
    normalizeRotation,
    pdfBaseName,
    PdfDocumentHandle,
    pdfOutputSize,
    pdfPageImageSize,
    pdfPageName,
    pdfPagePlacement,
    renderPdfPageImage,
    rotatedSize,
} from '../../app/media/pdf-import.util';

const A4 = { width: 595, height: 842 };
const SLIDE = { width: 960, height: 540 };

/** Canvas 2D calls, recorded, as jsdom has no canvas implementation */
function stubCanvas(blob_type = 'image/webp') {
    const ctx = {
        fillStyle: '',
        fillRect: vi.fn(),
        drawImage: vi.fn(),
    };
    vi.spyOn(HTMLCanvasElement.prototype, 'getContext').mockReturnValue(
        ctx as unknown as CanvasRenderingContext2D,
    );
    const to_blob = vi
        .spyOn(HTMLCanvasElement.prototype, 'toBlob')
        .mockImplementation((callback, type) =>
            callback(
                new Blob(['image'], {
                    type: type === 'image/webp' ? blob_type : type,
                }),
            ),
        );
    return { ctx, to_blob };
}

describe('PDF import utilities', () => {
    afterEach(() => vi.restoreAllMocks());

    it('names pages after the PDF without its extension', () => {
        expect(pdfBaseName('Quarterly Results.PDF')).toBe('Quarterly Results');
        expect(pdfBaseName('  deck.v2.pdf ')).toBe('deck.v2');
        expect(pdfBaseName('Town hall.PPTX')).toBe('Town hall');
        expect(pdfBaseName('.pdf')).toBe('PDF');
        expect(pdfPageName('deck', 3)).toBe('deck - page 3');
    });

    it('normalises rotations to quarter turns', () => {
        expect(normalizeRotation(-90)).toBe(270);
        expect(normalizeRotation(450)).toBe(90);
        expect(normalizeRotation(360)).toBe(0);
        expect(rotatedSize(A4, 90)).toEqual({ width: 842, height: 595 });
        expect(rotatedSize(A4, 180)).toEqual(A4);
    });

    it('scales a page at its own size to fill 4K in its orientation', () => {
        expect(pdfOutputSize(SLIDE, 'page', '4k')).toEqual({
            width: 3840,
            height: 2160,
        });
        expect(pdfOutputSize(A4, 'page', '4k')).toEqual({
            width: 2160,
            height: 3057,
        });
        expect(pdfOutputSize(A4, 'page', 'hd')).toEqual({
            width: 1080,
            height: 1528,
        });
    });

    it('gives a page fitted to a screen the full screen', () => {
        expect(pdfOutputSize(A4, 'landscape', '4k')).toEqual({
            width: 3840,
            height: 2160,
        });
        expect(pdfOutputSize(SLIDE, 'portrait', 'hd')).toEqual({
            width: 1080,
            height: 1920,
        });
    });

    it('sizes a page image from its turn and the options', () => {
        expect(
            pdfPageImageSize(A4, {
                rotation: 90,
                fit: 'page',
                resolution: '4k',
            }),
        ).toEqual({ width: 3057, height: 2160 });
        expect(
            pdfPageImageSize(A4, {
                rotation: 0,
                fit: 'landscape',
                resolution: 'hd',
            }),
        ).toEqual({ width: 1920, height: 1080 });
    });

    it('centres a page in the output', () => {
        expect(pdfPagePlacement(A4, { width: 3840, height: 2160 })).toEqual({
            width: 1526,
            height: 2160,
            x: 1157,
            y: 0,
        });
        expect(pdfPagePlacement(SLIDE, { width: 1080, height: 1920 })).toEqual({
            width: 1080,
            height: 608,
            x: 0,
            y: 656,
        });
    });

    it('paints the background unless it is transparent', () => {
        const { ctx } = stubCanvas();
        const layer = document.createElement('canvas');
        const placement = { width: 10, height: 20, x: 5, y: 0 };

        composePdfPage(layer, { width: 20, height: 20 }, placement, '#123456');
        expect(ctx.fillStyle).toBe('#123456');
        expect(ctx.fillRect).toHaveBeenCalledWith(0, 0, 20, 20);
        expect(ctx.drawImage).toHaveBeenCalledWith(layer, 5, 0, 10, 20);

        ctx.fillRect.mockClear();
        composePdfPage(
            layer,
            { width: 20, height: 20 },
            placement,
            'transparent',
        );
        expect(ctx.fillRect).not.toHaveBeenCalled();
    });

    it('names the image file after the type the browser wrote', async () => {
        stubCanvas('image/png');
        const canvas = document.createElement('canvas');

        const fallback = await canvasToImageFile(
            canvas,
            'webp',
            'deck - page 1',
        );
        expect(fallback.name).toBe('deck - page 1.png');

        stubCanvas('image/webp');
        const webp = await canvasToImageFile(canvas, 'webp', 'deck - page 1');
        expect(webp.name).toBe('deck - page 1.webp');
        expect(webp.type).toBe('image/webp');
    });

    it('renders a turned page fitted to a screen', async () => {
        const { ctx, to_blob } = stubCanvas();
        const layer = document.createElement('canvas');
        const handle: PdfDocumentHandle = {
            page_count: 1,
            pageSize: vi.fn().mockResolvedValue(A4),
            renderLayer: vi.fn().mockResolvedValue(layer),
            destroy: vi.fn(),
        };

        const image = await renderPdfPageImage(
            handle,
            1,
            {
                rotation: 90,
                fit: 'portrait',
                background: '#000000',
                format: 'png',
                resolution: 'hd',
            },
            'deck - page 1',
        );

        // A turned A4 page is landscape, so it sits across a portrait screen
        expect(handle.renderLayer).toHaveBeenCalledWith(
            1,
            90,
            { width: 1080, height: 763, x: 0, y: 578 },
            undefined,
        );
        expect(ctx.fillStyle).toBe('#000000');
        expect(to_blob).toHaveBeenCalledWith(
            expect.any(Function),
            'image/png',
            undefined,
        );
        expect(image).toMatchObject({ width: 1080, height: 1920 });
        expect(image.file.name).toBe('deck - page 1.png');
    });
});
