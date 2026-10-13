import { SVG_NS } from '../constants';
import { MapDocument, stripEditorAttributes, ViewBox } from '../map-document';

export const SNAPSHOT_LONG_SIDE = 2048;
export const SNAPSHOT_OUTLINE_COLOUR = '#d946ef';
export const SNAPSHOT_TAG_COLOUR = '#c2410c';
const DEFAULT_RENDER_TIMEOUT_MS = 15_000;

export interface SnapshotSize {
    /** Width and height in pixels. */
    image_px: [number, number];
    /** User units per pixel, to four places. */
    units_per_px: number;
}

/** Pixel size at the viewBox aspect ratio with the long side at `long_side`. */
export function snapshotSize(
    view_box: ViewBox,
    long_side: number = SNAPSHOT_LONG_SIDE,
): SnapshotSize {
    const { width, height } = view_box;
    const landscape = width >= height;
    const long = Math.max(1, Math.round(long_side));
    const short = Math.max(
        1,
        Math.round(
            (long * (landscape ? height : width)) /
                (landscape ? width : height),
        ),
    );
    const image_px: [number, number] = landscape
        ? [long, short]
        : [short, long];
    const units_per_px = Math.round((width / image_px[0]) * 10_000) / 10_000;
    return { image_px, units_per_px };
}

export interface SnapshotMarkupOptions {
    /** Anchors to outline, with their ids as labels. */
    selection?: readonly string[];
    /** Anchors to mark with a small id tag at the top left of their box. */
    tags?: readonly string[];
    long_side?: number;
    colour?: string;
}

export interface SnapshotMarkup extends SnapshotSize {
    /** The map sized in pixels with the outlines drawn on top, anchors stripped. */
    markup: string;
    /** Anchors that were outlined; the rest had no bounding box. */
    outlined: string[];
}

/**
 * The document as it will be rasterised: a clone with explicit pixel width
 * and height, the selection outlined in a group appended last so it paints
 * above everything, and no editor attributes.
 */
export function snapshotMarkup(
    doc: MapDocument,
    options: SnapshotMarkupOptions = {},
): SnapshotMarkup {
    const size = snapshotSize(doc.view_box, options.long_side);
    const clone = doc.root.cloneNode(true) as SVGSVGElement;
    const owner = clone.ownerDocument;
    const colour = options.colour || SNAPSHOT_OUTLINE_COLOUR;
    const { width, height } = doc.view_box;
    const stroke_width = Math.max(0.5, Math.max(width, height) * 0.0025);
    const font_size = Math.max(8 * stroke_width, 6);
    const outlined: string[] = [];
    const overlay = owner.createElementNS(SVG_NS, 'g');
    for (const anchor of options.selection || []) {
        const element = doc.byAnchor(anchor);
        if (!element) continue;
        const bbox = doc.geometry.bboxOf(element);
        if (!bbox) continue;
        const [x, y, w, h] = bbox;
        const rect = owner.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x', String(x));
        rect.setAttribute('y', String(y));
        rect.setAttribute('width', String(w));
        rect.setAttribute('height', String(h));
        rect.setAttribute('fill', 'none');
        rect.setAttribute('stroke', colour);
        rect.setAttribute('stroke-width', String(stroke_width));
        overlay.appendChild(rect);
        const text = owner.createElementNS(SVG_NS, 'text');
        text.setAttribute('x', String(x));
        text.setAttribute('y', String(y - stroke_width * 2));
        text.setAttribute('font-size', String(font_size));
        text.setAttribute('font-family', 'sans-serif');
        text.setAttribute('fill', colour);
        text.setAttribute('stroke', '#ffffff');
        text.setAttribute('stroke-width', String(stroke_width));
        text.setAttribute('paint-order', 'stroke');
        text.textContent = element.getAttribute('id') || anchor;
        overlay.appendChild(text);
        outlined.push(anchor);
    }
    const tagged = new Set(outlined);
    const tag_size = Math.max(font_size * 0.6, 5);
    for (const anchor of options.tags || []) {
        if (tagged.has(anchor)) continue;
        const element = doc.byAnchor(anchor);
        const id = element?.getAttribute('id');
        if (!element || !id) continue;
        const bbox = doc.geometry.bboxOf(element);
        if (!bbox) continue;
        const [x, y] = bbox;
        const text = owner.createElementNS(SVG_NS, 'text');
        text.setAttribute('x', String(x + stroke_width));
        text.setAttribute('y', String(y + tag_size + stroke_width));
        text.setAttribute('font-size', String(tag_size));
        text.setAttribute('font-family', 'sans-serif');
        text.setAttribute('fill', SNAPSHOT_TAG_COLOUR);
        text.setAttribute('stroke', '#ffffff');
        text.setAttribute('stroke-width', String(stroke_width * 0.6));
        text.setAttribute('paint-order', 'stroke');
        text.textContent = id;
        overlay.appendChild(text);
        tagged.add(anchor);
    }
    if (overlay.childNodes.length) clone.appendChild(overlay);
    clone.setAttribute('width', String(size.image_px[0]));
    clone.setAttribute('height', String(size.image_px[1]));
    stripEditorAttributes(clone);
    return {
        ...size,
        markup: new XMLSerializer().serializeToString(clone),
        outlined,
    };
}

export interface RasteriseOptions {
    /** `image/png` by default. */
    type?: string;
    quality?: number;
    background?: string;
    timeout_ms?: number;
}

/** Draws SVG markup through an Image onto a canvas of the given pixel size. Browser only. */
export function rasterise(
    markup: string,
    [width, height]: [number, number],
    options: RasteriseOptions = {},
): Promise<Blob> {
    const url = URL.createObjectURL(
        new Blob([markup], { type: 'image/svg+xml' }),
    );
    return new Promise<Blob>((resolve, reject) => {
        const image = new Image();
        let settled = false;
        const finish = (error: Error | null, blob?: Blob) => {
            if (settled) return;
            settled = true;
            clearTimeout(timer);
            URL.revokeObjectURL(url);
            if (error || !blob) reject(error || new Error('no snapshot'));
            else resolve(blob);
        };
        const timer = setTimeout(
            () => finish(new Error('the map did not finish rendering in time')),
            options.timeout_ms ?? DEFAULT_RENDER_TIMEOUT_MS,
        );
        image.onload = () => {
            try {
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const context = canvas.getContext('2d');
                if (!context) throw new Error('no 2d canvas context');
                context.fillStyle = options.background || '#ffffff';
                context.fillRect(0, 0, width, height);
                context.drawImage(image, 0, 0, width, height);
                canvas.toBlob(
                    (blob) =>
                        finish(
                            blob
                                ? null
                                : new Error(
                                      'the snapshot could not be encoded',
                                  ),
                            blob || undefined,
                        ),
                    options.type || 'image/png',
                    options.quality,
                );
            } catch (error) {
                finish(
                    error instanceof Error ? error : new Error(String(error)),
                );
            }
        };
        image.onerror = () =>
            finish(new Error('the browser could not draw the map'));
        image.src = url;
    });
}

export interface RenderSnapshotOptions
    extends SnapshotMarkupOptions, RasteriseOptions {}

export interface Snapshot extends SnapshotMarkup {
    blob: Blob;
}

/** The marked up map as an image the server can send to the model. Browser only. */
export async function renderSnapshot(
    doc: MapDocument,
    options: RenderSnapshotOptions = {},
): Promise<Snapshot> {
    const prepared = snapshotMarkup(doc, options);
    const blob = await rasterise(prepared.markup, prepared.image_px, options);
    return { ...prepared, blob };
}
