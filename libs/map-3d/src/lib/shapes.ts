import { ShapePath } from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

import { NON_RENDERED_TAGS } from 'libs/map-editor/src/lib/constants';
import {
    numberValue,
    StyleResolver,
} from 'libs/map-editor/src/lib/style-resolution';

/** A point in SVG user units, or in metres once scaled */
export type Point2 = [number, number];

export interface ViewBox {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface SubPath {
    points: Point2[];
    closed: boolean;
}

/** One drawn element of a map with its outline in root user units */
export interface MapShape {
    element: Element;
    /** Position among the drawn elements of the map */
    index: number;
    has_fill: boolean;
    has_stroke: boolean;
    /** Stroke width in root user units */
    stroke_width: number;
    /** Opacity of the element and its ancestors multiplied together */
    opacity: number;
    subpaths: SubPath[];
    /** Outer rings with their holes, for elements that enclose an area */
    polygons: { outer: Point2[]; holes: Point2[][] }[];
    /** [min x, min y, max x, max y] */
    bbox: [number, number, number, number];
    /** Enclosed area in square user units */
    area: number;
    /** Total length of the subpaths in user units */
    length: number;
}

export interface ParsedMap {
    svg: Element;
    view_box: ViewBox;
    shapes: MapShape[];
    styles: StyleResolver;
}

/** Segments each curve of a path is divided into */
const CURVE_DIVISIONS = 8;

export function parseViewBox(svg: Element): ViewBox {
    const parts = (svg.getAttribute('viewBox') || '')
        .split(/[\s,]+/)
        .map(parseFloat);
    if (parts.length >= 4 && parts[2] > 0 && parts[3] > 0) {
        return { x: parts[0], y: parts[1], width: parts[2], height: parts[3] };
    }
    const width = parseFloat(svg.getAttribute('width') || '');
    const height = parseFloat(svg.getAttribute('height') || '');
    return { x: 0, y: 0, width: width || 1, height: height || 1 };
}

export function ringArea(points: readonly Point2[]): number {
    let area = 0;
    for (let i = 0; i < points.length; i++) {
        const [x1, y1] = points[i];
        const [x2, y2] = points[(i + 1) % points.length];
        area += x1 * y2 - x2 * y1;
    }
    return area / 2;
}

/** Drop repeated points and points on a straight run between their neighbours. */
export function simplifyRing(
    points: readonly Point2[],
    closed: boolean,
    tolerance: number,
): Point2[] {
    const spaced: Point2[] = [];
    for (const point of points) {
        const last = spaced[spaced.length - 1];
        if (
            last &&
            Math.hypot(point[0] - last[0], point[1] - last[1]) < tolerance
        ) {
            continue;
        }
        spaced.push(point);
    }
    if (closed && spaced.length > 1) {
        const first = spaced[0];
        const last = spaced[spaced.length - 1];
        if (Math.hypot(first[0] - last[0], first[1] - last[1]) < tolerance) {
            spaced.pop();
        }
    }
    if (spaced.length < 3) return spaced;
    const result: Point2[] = [];
    const count = spaced.length;
    for (let i = 0; i < count; i++) {
        const is_end = !closed && (i === 0 || i === count - 1);
        if (is_end) {
            result.push(spaced[i]);
            continue;
        }
        const previous = result.length
            ? result[result.length - 1]
            : spaced[(i - 1 + count) % count];
        const next = spaced[(i + 1) % count];
        const current = spaced[i];
        const span = Math.hypot(next[0] - previous[0], next[1] - previous[1]);
        const offset = span
            ? Math.abs(
                  (next[0] - previous[0]) * (previous[1] - current[1]) -
                      (previous[0] - current[0]) * (next[1] - previous[1]),
              ) / span
            : Math.hypot(current[0] - previous[0], current[1] - previous[1]);
        if (offset >= tolerance / 4) result.push(current);
    }
    return result.length >= (closed ? 3 : 2) ? result : spaced;
}

function opacityOf(element: Element, styles: StyleResolver): number {
    let opacity = 1;
    let current: Element | null = element;
    while (current) {
        const own = numberValue(styles.own(current, 'opacity'));
        if (own !== null) opacity *= Math.max(0, Math.min(1, own));
        current = current.parentElement;
    }
    return opacity;
}

function hasNonRenderedAncestor(element: Element): boolean {
    let current: Element | null = element;
    while (current) {
        if (NON_RENDERED_TAGS.has(current.localName.toLowerCase())) return true;
        current = current.parentElement;
    }
    return false;
}

function transformScale(path: ShapePath): number {
    const data = path.userData as { transform?: { elements?: number[] } };
    const e = data?.transform?.elements;
    if (!e) return 1;
    return Math.sqrt(Math.abs(e[0] * e[4] - e[1] * e[3])) || 1;
}

/**
 * Parse SVG text into the outlines of its drawn elements. Elements inside
 * `<defs>` and other containers that never paint, hidden elements and text are
 * left out.
 */
export function parseMap(svg_text: string): ParsedMap {
    const data = new SVGLoader().parse(svg_text);
    const svg = data.xml as unknown as Element;
    const styles = new StyleResolver(svg);
    const view_box = parseViewBox(svg);
    const tolerance = Math.max(view_box.width, view_box.height) / 20000;
    const shapes: MapShape[] = [];
    for (const path of data.paths) {
        const element = (path.userData as { node?: Element })?.node;
        if (!element || !svg.contains(element)) continue;
        if (hasNonRenderedAncestor(element)) continue;
        if (styles.hasHiddenAncestor(element)) continue;
        const has_fill =
            element.localName !== 'line' && styles.hasVisibleFill(element);
        const has_stroke = styles.hasVisibleStroke(element);
        if (!has_fill && !has_stroke) continue;

        const subpaths: SubPath[] = [];
        const bbox: MapShape['bbox'] = [
            Infinity,
            Infinity,
            -Infinity,
            -Infinity,
        ];
        let length = 0;
        for (const sub of path.subPaths) {
            const raw = sub
                .getPoints(CURVE_DIVISIONS)
                .map((p): Point2 => [p.x, p.y]);
            if (raw.length < 2) continue;
            const first = raw[0];
            const last = raw[raw.length - 1];
            const closed =
                sub.autoClose ||
                (raw.length > 2 &&
                    Math.hypot(first[0] - last[0], first[1] - last[1]) <
                        tolerance);
            const points = simplifyRing(raw, closed, tolerance);
            if (points.length < 2) continue;
            for (let i = 0; i < points.length; i++) {
                const [x, y] = points[i];
                bbox[0] = Math.min(bbox[0], x);
                bbox[1] = Math.min(bbox[1], y);
                bbox[2] = Math.max(bbox[2], x);
                bbox[3] = Math.max(bbox[3], y);
                const next = points[i + 1] || (closed ? points[0] : null);
                if (next) length += Math.hypot(next[0] - x, next[1] - y);
            }
            subpaths.push({ points, closed });
        }
        if (!subpaths.length || !Number.isFinite(bbox[0])) continue;

        const polygons: MapShape['polygons'] = [];
        let area = 0;
        if (has_fill || subpaths.some((_) => _.closed)) {
            const data = (path.userData || {}) as Record<string, unknown>;
            path.userData = {
                ...data,
                style: {
                    ...(data['style'] as Record<string, unknown>),
                    fillRule: styles.inherited(element, 'fill-rule', 'nonzero'),
                },
            };
            try {
                for (const shape of path.toShapes()) {
                    const outer = simplifyRing(
                        shape
                            .getPoints(CURVE_DIVISIONS)
                            .map((p): Point2 => [p.x, p.y]),
                        true,
                        tolerance,
                    );
                    if (outer.length < 3) continue;
                    const holes = shape.holes
                        .map((hole) =>
                            simplifyRing(
                                hole
                                    .getPoints(CURVE_DIVISIONS)
                                    .map((p): Point2 => [p.x, p.y]),
                                true,
                                tolerance,
                            ),
                        )
                        .filter((hole) => hole.length >= 3);
                    area +=
                        Math.abs(ringArea(outer)) -
                        holes.reduce(
                            (sum, hole) => sum + Math.abs(ringArea(hole)),
                            0,
                        );
                    polygons.push({ outer, holes });
                }
            } catch {
                // A path three cannot turn into shapes keeps its subpaths only
            }
        }

        const stroke_width = has_stroke
            ? (numberValue(styles.inherited(element, 'stroke-width', '1')) ??
                  1) * transformScale(path)
            : 0;
        shapes.push({
            element,
            index: shapes.length,
            has_fill,
            has_stroke,
            stroke_width,
            opacity: opacityOf(element, styles),
            subpaths,
            polygons,
            bbox,
            area: Math.max(0, area),
            length,
        });
    }
    return { svg, view_box, shapes, styles };
}
