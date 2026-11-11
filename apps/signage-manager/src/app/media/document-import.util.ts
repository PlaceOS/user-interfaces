/**
 * Options and layout for turning document pages into signage images. A
 * document is a PDF, or a PowerPoint file with each slide as a page.
 * Everything here is plain arithmetic and canvas drawing, so it runs without
 * pdf.js or pptx-glimpse.
 */

/** How a page sits in the image: at its own size, or centred on a screen */
export type DocumentPageFit = 'page' | 'landscape' | 'portrait';
/** A CSS colour, or `transparent` to keep the page's own transparency */
export type DocumentPageBackground = string;
export type DocumentImageFormat = 'webp' | 'png';
export type DocumentResolution = '4k' | 'hd';

export interface DocumentPageRenderOptions {
    /** Turn applied on top of the page's own rotation, in degrees */
    rotation: number;
    fit: DocumentPageFit;
    background: DocumentPageBackground;
    format: DocumentImageFormat;
    resolution: DocumentResolution;
}

export interface PageSize {
    width: number;
    height: number;
}

export interface PagePlacement extends PageSize {
    x: number;
    y: number;
}

export const TRANSPARENT_BACKGROUND = 'transparent';

/** Why a document could not be opened */
export type DocumentOpenErrorReason = 'password' | 'invalid' | 'too_many_pages';

export class DocumentOpenError extends Error {
    constructor(
        public readonly reason: DocumentOpenErrorReason,
        message: string,
    ) {
        super(message);
        this.name = 'DocumentOpenError';
    }
}

/**
 * Most pages a document can have to be imported. The modal keeps a preview of each
 * page (about 50 KB of PNG, so about 10 MB at the limit), and each imported
 * page becomes one row of the bulk upload.
 */
export const MAX_DOCUMENT_PAGES = 200;
/** WebP quality, the same as other converted images */
const WEBP_QUALITY = 0.92;

/** Long and short side of each resolution */
const RESOLUTION_BOUNDS: Record<DocumentResolution, [number, number]> = {
    '4k': [3840, 2160],
    hd: [1920, 1080],
};

/** Name of a document file without its extension, used as the tag of its
 * pages */
export function documentBaseName(file_name: string) {
    const name = (file_name || '')
        .trim()
        .replace(/\.(pdf|pptx)$/i, '')
        .trim();
    return name || 'Document';
}

/** Media name of a page, such as "Quarterly results - page 3" */
export function documentPageName(base_name: string, page_number: number) {
    return `${base_name} - page ${page_number}`;
}

/** A rotation in degrees as one of 0, 90, 180 or 270 */
export function normalizeRotation(rotation: number) {
    return (((Math.round(rotation / 90) * 90) % 360) + 360) % 360;
}

/** Size of a page after a turn. A quarter turn swaps width and height. */
export function rotatedSize(size: PageSize, rotation: number): PageSize {
    return normalizeRotation(rotation) % 180
        ? { width: size.height, height: size.width }
        : { ...size };
}

/**
 * Size of the image a page renders to. A page kept at its own size fills
 * as much of the resolution as it can, in its own orientation. A page fitted
 * to a screen gets the full screen.
 */
export function pageOutputSize(
    page: PageSize,
    fit: DocumentPageFit,
    resolution: DocumentResolution,
): PageSize {
    const [long_side, short_side] = RESOLUTION_BOUNDS[resolution];
    if (fit === 'landscape') return { width: long_side, height: short_side };
    if (fit === 'portrait') return { width: short_side, height: long_side };
    const [max_width, max_height] =
        page.width >= page.height
            ? [long_side, short_side]
            : [short_side, long_side];
    const scale = Math.min(max_width / page.width, max_height / page.height);
    return {
        width: Math.max(1, Math.round(page.width * scale)),
        height: Math.max(1, Math.round(page.height * scale)),
    };
}

/**
 * Size of the image a page renders to with the import options, from its size
 * at its own rotation. Known before the page renders.
 */
export function pageImageSize(
    page_size: PageSize,
    options: Pick<DocumentPageRenderOptions, 'rotation' | 'fit' | 'resolution'>,
) {
    return pageOutputSize(
        rotatedSize(page_size, options.rotation),
        options.fit,
        options.resolution,
    );
}

/** Largest box with the page's shape that fits the output, centred in it */
export function pagePlacement(page: PageSize, output: PageSize): PagePlacement {
    const scale = Math.min(
        output.width / page.width,
        output.height / page.height,
    );
    const width = Math.max(
        1,
        Math.min(output.width, Math.round(page.width * scale)),
    );
    const height = Math.max(
        1,
        Math.min(output.height, Math.round(page.height * scale)),
    );
    return {
        width,
        height,
        x: Math.floor((output.width - width) / 2),
        y: Math.floor((output.height - height) / 2),
    };
}

/**
 * Draw a rendered page onto a new canvas the size of the output, over the
 * background colour unless it is transparent.
 */
export function composePage(
    layer: CanvasImageSource,
    output: PageSize,
    placement: PagePlacement,
    background: DocumentPageBackground,
) {
    const canvas = document.createElement('canvas');
    canvas.width = output.width;
    canvas.height = output.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Canvas is not available');
    if (background && background !== TRANSPARENT_BACKGROUND) {
        ctx.fillStyle = background;
        ctx.fillRect(0, 0, output.width, output.height);
    }
    ctx.drawImage(
        layer,
        placement.x,
        placement.y,
        placement.width,
        placement.height,
    );
    return canvas;
}

let webp_supported: boolean | undefined;

/** Whether this browser can write WebP from a canvas. Safari cannot. */
export function canEncodeWebp() {
    if (webp_supported !== undefined) return webp_supported;
    try {
        const canvas = document.createElement('canvas');
        canvas.width = canvas.height = 1;
        webp_supported = canvas
            .toDataURL('image/webp')
            .startsWith('data:image/webp');
    } catch {
        webp_supported = false;
    }
    return webp_supported;
}

/**
 * Image file of a canvas. The extension follows the type the browser wrote,
 * as a browser without a WebP encoder writes PNG instead.
 */
export async function canvasToImageFile(
    canvas: HTMLCanvasElement,
    format: DocumentImageFormat,
    base_name: string,
) {
    const blob = await new Promise<Blob | null>((resolve) =>
        canvas.toBlob(
            resolve,
            format === 'webp' ? 'image/webp' : 'image/png',
            format === 'webp' ? WEBP_QUALITY : undefined,
        ),
    );
    if (!blob) throw new Error('Could not write the page image');
    const type = blob.type || 'image/png';
    const extension = type === 'image/webp' ? 'webp' : 'png';
    return new File([blob], `${base_name}.${extension}`, { type });
}

/** Free the memory a canvas holds, without waiting for garbage collection */
export function releaseCanvas(canvas: HTMLCanvasElement | null | undefined) {
    if (!canvas) return;
    canvas.width = 0;
    canvas.height = 0;
}

/** A rendered page image, ready to upload */
export interface DocumentPageImage {
    file: File;
    width: number;
    height: number;
}

/**
 * An open document: a PDF, or a PowerPoint file with each slide as a page.
 * The import modal only uses this, so tests can hand it a fake without
 * loading pdf.js or pptx-glimpse.
 */
export interface DocumentHandle {
    readonly page_count: number;
    /** Size of a page at its own rotation, in PDF points or slide pixels */
    pageSize(page_number: number): Promise<PageSize>;
    /**
     * Page drawn on a transparent canvas, turned by `rotation` on top of its
     * own rotation, at the largest size that fits the bounds.
     */
    renderLayer(
        page_number: number,
        rotation: number,
        bounds: PageSize,
        signal?: AbortSignal,
    ): Promise<HTMLCanvasElement>;
    /** Close the document and free its worker, if it has one */
    destroy(): Promise<void>;
}

/**
 * Render a page to an image file with the import options: turned, fitted to
 * the output and drawn over the background.
 */
export async function renderPageImage(
    document_handle: DocumentHandle,
    page_number: number,
    options: DocumentPageRenderOptions,
    file_name: string,
    signal?: AbortSignal,
): Promise<DocumentPageImage> {
    const page_size = await document_handle.pageSize(page_number);
    // The same size the import modal sends as the media metadata
    const output = pageImageSize(page_size, options);
    const placement = pagePlacement(
        rotatedSize(page_size, options.rotation),
        output,
    );
    const layer = await document_handle.renderLayer(
        page_number,
        options.rotation,
        placement,
        signal,
    );
    let canvas: HTMLCanvasElement | undefined;
    try {
        canvas = composePage(layer, output, placement, options.background);
        const file = await canvasToImageFile(canvas, options.format, file_name);
        return { file, ...output };
    } finally {
        releaseCanvas(layer);
        releaseCanvas(canvas);
    }
}
