import { NON_RENDERED_TAGS } from './constants';
import {
    applyToPoint,
    IDENTITY,
    Matrix,
    multiply,
    parseTransform,
    Point,
} from './matrix';
import { pathPoints, pointsIn } from './path-data';

/** Axis-aligned box in root user units: x, y, width, height. */
export type BBox = [number, number, number, number];

/**
 * Where the editor gets geometry from. The browser provider needs the document
 * attached and rendered; the attribute provider works on a detached DOM.
 */
export interface GeometryProvider {
    /** Bounding box of the element in root user space, or null when unknown. */
    bboxOf(element: Element): BBox | null;
    /** Matrix from the element's own space to root user space, or null when unknown. */
    ctmOf(element: Element): Matrix | null;
}

/** A provider that knows nothing; ops fall back to element-space maths. */
export class NoGeometryProvider implements GeometryProvider {
    public bboxOf(): BBox | null {
        return null;
    }

    public ctmOf(): Matrix | null {
        return null;
    }
}

function isGraphics(element: Element): element is SVGGraphicsElement {
    return typeof (element as SVGGraphicsElement).getBBox === 'function';
}

function toMatrix(m: DOMMatrix): Matrix {
    return { a: m.a, b: m.b, c: m.c, d: m.d, e: m.e, f: m.f };
}

/**
 * Geometry from the rendered DOM: getBBox mapped through the element's screen
 * CTM and the inverse of the root's, the viewer's getElementBoundsInSvgSpace
 * maths. Returns null for anything not rendered.
 */
export class BrowserGeometryProvider implements GeometryProvider {
    constructor(private readonly _root: SVGSVGElement) {}

    public bboxOf(element: Element): BBox | null {
        if (!isGraphics(element)) return null;
        let bbox: DOMRect;
        try {
            bbox = element.getBBox();
        } catch {
            return null;
        }
        const ctm = this.ctmOf(element);
        if (!ctm) return [bbox.x, bbox.y, bbox.width, bbox.height];
        const corners: Point[] = [
            [bbox.x, bbox.y],
            [bbox.x + bbox.width, bbox.y],
            [bbox.x, bbox.y + bbox.height],
            [bbox.x + bbox.width, bbox.y + bbox.height],
        ].map((p) => applyToPoint(ctm, p as Point));
        const xs = corners.map((p) => p[0]);
        const ys = corners.map((p) => p[1]);
        const min_x = Math.min(...xs);
        const min_y = Math.min(...ys);
        return [min_x, min_y, Math.max(...xs) - min_x, Math.max(...ys) - min_y];
    }

    public ctmOf(element: Element): Matrix | null {
        if (
            !isGraphics(element) ||
            typeof element.getScreenCTM !== 'function'
        ) {
            return null;
        }
        const root_ctm = this._root.getScreenCTM?.();
        const element_ctm = element.getScreenCTM();
        if (!root_ctm || !element_ctm) return null;
        return toMatrix(root_ctm.inverse().multiply(element_ctm));
    }
}

function numberAttr(element: Element, name: string, fallback = 0): number {
    const value = parseFloat(element.getAttribute(name) || '');
    return Number.isFinite(value) ? value : fallback;
}

/** Points in the element's own space from its geometry attributes. */
export function localPoints(element: Element): Point[] {
    const tag = element.localName;
    switch (tag) {
        case 'rect': {
            const x = numberAttr(element, 'x');
            const y = numberAttr(element, 'y');
            const w = numberAttr(element, 'width');
            const h = numberAttr(element, 'height');
            return [
                [x, y],
                [x + w, y],
                [x, y + h],
                [x + w, y + h],
            ];
        }
        case 'circle': {
            const cx = numberAttr(element, 'cx');
            const cy = numberAttr(element, 'cy');
            const r = numberAttr(element, 'r');
            return [
                [cx - r, cy - r],
                [cx + r, cy + r],
            ];
        }
        case 'ellipse': {
            const cx = numberAttr(element, 'cx');
            const cy = numberAttr(element, 'cy');
            const rx = numberAttr(element, 'rx');
            const ry = numberAttr(element, 'ry');
            return [
                [cx - rx, cy - ry],
                [cx + rx, cy + ry],
            ];
        }
        case 'line':
            return [
                [numberAttr(element, 'x1'), numberAttr(element, 'y1')],
                [numberAttr(element, 'x2'), numberAttr(element, 'y2')],
            ];
        case 'polygon':
        case 'polyline':
            return pointsIn(element.getAttribute('points'));
        case 'path':
            return pathPoints(element.getAttribute('d'));
        case 'text':
        case 'tspan':
            return element.hasAttribute('x') || element.hasAttribute('y')
                ? [[numberAttr(element, 'x'), numberAttr(element, 'y')]]
                : [];
        case 'use':
        case 'image': {
            const x = numberAttr(element, 'x');
            const y = numberAttr(element, 'y');
            const w = numberAttr(element, 'width');
            const h = numberAttr(element, 'height');
            return w || h
                ? [
                      [x, y],
                      [x + w, y + h],
                  ]
                : [[x, y]];
        }
        default:
            return [];
    }
}

/**
 * Geometry from attributes and parsed transforms, for a detached DOM. Path
 * boxes use command end and control points; text boxes are the anchor point.
 */
export class AttributeGeometryProvider implements GeometryProvider {
    public bboxOf(element: Element): BBox | null {
        const ctm = this.ctmOf(element);
        if (!ctm) return null;
        const box = this._box(element, ctm);
        return box ? [box[0], box[1], box[2] - box[0], box[3] - box[1]] : null;
    }

    public ctmOf(element: Element): Matrix | null {
        const chain: Element[] = [];
        let current: Element | null = element;
        while (current && current.localName !== 'svg') {
            chain.unshift(current);
            current = current.parentElement;
        }
        if (!current) return null;
        let m: Matrix = { ...IDENTITY };
        for (const el of chain) {
            m = multiply(m, parseTransform(el.getAttribute('transform')));
        }
        return m;
    }

    /** min x, min y, max x, max y */
    private _box(
        element: Element,
        ctm: Matrix,
    ): [number, number, number, number] | null {
        if (NON_RENDERED_TAGS.has(element.localName.toLowerCase())) return null;
        let box: [number, number, number, number] | null = null;
        const merge = (points: Point[]) => {
            for (const [x, y] of points) {
                if (!box) box = [x, y, x, y];
                else {
                    box[0] = Math.min(box[0], x);
                    box[1] = Math.min(box[1], y);
                    box[2] = Math.max(box[2], x);
                    box[3] = Math.max(box[3], y);
                }
            }
        };
        merge(localPoints(element).map((p) => applyToPoint(ctm, p)));
        for (const child of Array.from(element.children)) {
            const child_ctm = multiply(
                ctm,
                parseTransform(child.getAttribute('transform')),
            );
            const child_box = this._box(child, child_ctm);
            if (child_box) {
                merge([
                    [child_box[0], child_box[1]],
                    [child_box[2], child_box[3]],
                ]);
            }
        }
        return box;
    }
}
