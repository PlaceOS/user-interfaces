import {
    DocumentHandle,
    DocumentOpenError,
    MAX_DOCUMENT_PAGES,
    normalizeRotation,
    PageSize,
    releaseCanvas,
    rotatedSize,
} from './document-import.util';

type ConvertPptxToSvg = (typeof import('pptx-glimpse'))['convertPptxToSvg'];

/**
 * Slides converted in one call while the slides are counted. Bounds the
 * memory of a count to the SVG of this many slides.
 */
const COUNT_CHUNK = 10;

/** Width and height of a slide, from the start of its SVG */
const SVG_SIZE = /^<svg\b[^>]*?\swidth="([\d.]+)"[^>]*?\sheight="([\d.]+)"/;

/**
 * Open a PowerPoint file as a document of one page per slide, so the
 * document import modal can import it. Rejects with a `DocumentOpenError` when the file
 * cannot be read, and with the load error when pptx-glimpse cannot load.
 *
 * pptx-glimpse is loaded on first use, as only a PowerPoint import needs it.
 */
export async function openPptxDocument(file: File): Promise<DocumentHandle> {
    const { convertPptxToSvg } = await import('pptx-glimpse');
    try {
        const data = new Uint8Array(await file.arrayBuffer());
        const slides = await readSlides(data, convertPptxToSvg);
        return new PptxDocument(data, slides, convertPptxToSvg);
    } catch (error) {
        throw new DocumentOpenError(
            'invalid',
            (error as Error | null)?.message || 'Could not open presentation',
        );
    }
}

interface PptxSlides {
    /** Slide numbers in the file, in presentation order */
    numbers: number[];
    /** Size of a slide, in pixels. Every slide of a file has the same size. */
    size: PageSize;
}

/**
 * Number and size of the slides that render. pptx-glimpse has no slide count,
 * so slides are converted in chunks until a chunk has none. Stops after the
 * first slide over the import limit, as that file is not imported.
 */
async function readSlides(
    data: Uint8Array,
    convert: ConvertPptxToSvg,
): Promise<PptxSlides> {
    const numbers: number[] = [];
    let size: PageSize | undefined;
    for (let start = 1; start <= MAX_DOCUMENT_PAGES + 1; start += COUNT_CHUNK) {
        const chunk = Array.from(
            { length: Math.min(COUNT_CHUNK, MAX_DOCUMENT_PAGES + 2 - start) },
            (_, index) => start + index,
        );
        const { slides } = await convert(data, { slides: chunk });
        if (!slides.length) break;
        size ??= svgSize(slides[0].svg);
        numbers.push(...slides.map((slide) => slide.slideNumber));
    }
    if (!size) throw new Error('Presentation has no slides');
    return { numbers, size };
}

function svgSize(svg: string): PageSize {
    const [, width, height] = SVG_SIZE.exec(svg) || [];
    const size = { width: Number(width), height: Number(height) };
    if (!(size.width > 0 && size.height > 0)) {
        throw new Error('Slide has no size');
    }
    return size;
}

/**
 * The slide SVG with the pixel size it is drawn at. A browser can rasterise
 * an SVG image at the size the SVG states, which blurs a slide drawn larger.
 */
function resizeSvg(svg: string, size: PageSize) {
    const end = svg.indexOf('>');
    const head = svg
        .slice(0, end)
        .replace(/\swidth="[^"]*"/, ` width="${size.width}"`)
        .replace(/\sheight="[^"]*"/, ` height="${size.height}"`);
    return head + svg.slice(end);
}

function loadImage(url: string) {
    return new Promise<HTMLImageElement>((resolve, reject) => {
        const image = new Image();
        image.onload = () => resolve(image);
        image.onerror = () => reject(new Error('Could not draw the slide'));
        image.src = url;
    });
}

/**
 * A PowerPoint file. Only the file bytes are kept: a slide is converted to
 * SVG each time it renders, so a long file never holds every slide at once.
 */
class PptxDocument implements DocumentHandle {
    constructor(
        private readonly _data: Uint8Array,
        private readonly _slides: PptxSlides,
        private readonly _convert: ConvertPptxToSvg,
    ) {}

    public get page_count() {
        return this._slides.numbers.length;
    }

    public async pageSize() {
        return { ...this._slides.size };
    }

    public async renderLayer(
        page_number: number,
        rotation: number,
        bounds: PageSize,
        signal?: AbortSignal,
    ) {
        signal?.throwIfAborted();
        const { slides } = await this._convert(this._data, {
            slides: [this._slides.numbers[page_number - 1]],
        });
        signal?.throwIfAborted();
        if (!slides.length) throw new Error('Slide did not render');
        const turn = normalizeRotation(rotation);
        const turned = rotatedSize(this._slides.size, turn);
        const scale = Math.min(
            bounds.width / turned.width,
            bounds.height / turned.height,
        );
        // Size of the slide before the turn, and of the canvas after it
        const slide_size = {
            width: Math.max(1, Math.round(this._slides.size.width * scale)),
            height: Math.max(1, Math.round(this._slides.size.height * scale)),
        };
        const canvas_size = rotatedSize(slide_size, turn);
        const url = URL.createObjectURL(
            new Blob([resizeSvg(slides[0].svg, slide_size)], {
                type: 'image/svg+xml',
            }),
        );
        try {
            const image = await loadImage(url);
            signal?.throwIfAborted();
            const canvas = document.createElement('canvas');
            canvas.width = canvas_size.width;
            canvas.height = canvas_size.height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                releaseCanvas(canvas);
                throw new Error('Canvas is not available');
            }
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((turn * Math.PI) / 180);
            ctx.drawImage(
                image,
                -slide_size.width / 2,
                -slide_size.height / 2,
                slide_size.width,
                slide_size.height,
            );
            return canvas;
        } finally {
            URL.revokeObjectURL(url);
        }
    }

    /** Nothing to close: no worker or other resource is held open */
    public async destroy() {}
}
