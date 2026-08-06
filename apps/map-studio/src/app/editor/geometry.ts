import { Handle } from './constants';

export interface Point {
    x: number;
    y: number;
}

export interface Rect {
    x: number;
    y: number;
    w: number;
    h: number;
}

export type SnapGuide = { type: 'h' | 'v'; pos: number };

/** Ray-casting test for a point inside an arbitrary polygon */
export function pointInPolygon(px: number, py: number, poly: Point[]): boolean {
    let inside = false;
    for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i].x;
        const yi = poly[i].y;
        const xj = poly[j].x;
        const yj = poly[j].y;
        if (
            yi > py !== yj > py &&
            px < ((xj - xi) * (py - yi)) / (yj - yi) + xi
        ) {
            inside = !inside;
        }
    }
    return inside;
}

export function rectCornersInsidePolygon(
    x: number,
    y: number,
    width: number,
    height: number,
    poly: Point[],
): boolean {
    return (
        pointInPolygon(x, y, poly) &&
        pointInPolygon(x + width, y, poly) &&
        pointInPolygon(x, y + height, poly) &&
        pointInPolygon(x + width, y + height, poly)
    );
}

/**
 * Shrinks a rectangle until every corner sits inside the outline polygon.
 *
 * ponytail: iterative 1px inset, capped at 200 passes — matches the reference
 * behaviour. Swap for a real polygon clip if rooms ever need exact edges.
 */
export function clipRoomRectToOutline(
    room: { x: number; y: number; width: number; height: number },
    outline: Point[],
    min_size = 20,
): { x: number; y: number; width: number; height: number } | null {
    const minX = Math.min(...outline.map((p) => p.x));
    const minY = Math.min(...outline.map((p) => p.y));
    const maxX = Math.max(...outline.map((p) => p.x));
    const maxY = Math.max(...outline.map((p) => p.y));

    let left = Math.max(room.x, minX);
    let top = Math.max(room.y, minY);
    let right = Math.min(room.x + room.width, maxX);
    let bottom = Math.min(room.y + room.height, maxY);

    if (right - left < min_size || bottom - top < min_size) return null;

    for (let i = 0; i < 200; i++) {
        const width = right - left;
        const height = bottom - top;
        if (width < min_size || height < min_size) return null;
        if (rectCornersInsidePolygon(left, top, width, height, outline)) {
            return { x: left, y: top, width, height };
        }

        const tl = pointInPolygon(left, top, outline);
        const tr = pointInPolygon(right, top, outline);
        const bl = pointInPolygon(left, bottom, outline);
        const br = pointInPolygon(right, bottom, outline);

        if (!tl || !bl) left += 1;
        if (!tr || !br) right -= 1;
        if (!tl || !tr) top += 1;
        if (!bl || !br) bottom -= 1;
    }

    return null;
}

export function closestPointOnSegment(
    px: number,
    py: number,
    ax: number,
    ay: number,
    bx: number,
    by: number,
): { dist: number; cx: number; cy: number } {
    const dx = bx - ax;
    const dy = by - ay;
    const len2 = dx * dx + dy * dy;
    if (len2 === 0)
        return { dist: Math.hypot(px - ax, py - ay), cx: ax, cy: ay };
    const t = Math.max(
        0,
        Math.min(1, ((px - ax) * dx + (py - ay) * dy) / len2),
    );
    const cx = ax + t * dx;
    const cy = ay + t * dy;
    return { dist: Math.hypot(px - cx, py - cy), cx, cy };
}

/** Canvas position of a resize handle on the given bounding box */
export function getHandlePos(
    handle: Handle,
    x: number,
    y: number,
    w: number,
    h: number,
): [number, number] {
    const mx = x + w / 2;
    const my = y + h / 2;
    switch (handle) {
        case 'nw':
            return [x, y];
        case 'n':
            return [mx, y];
        case 'ne':
            return [x + w, y];
        case 'e':
            return [x + w, my];
        case 'se':
            return [x + w, y + h];
        case 's':
            return [mx, y + h];
        case 'sw':
            return [x, y + h];
        case 'w':
            return [x, my];
    }
}

/** Bounding box of a set of points, in geometry field order */
export function boundsOf(points: Point[]) {
    const xs = points.map((p) => p.x);
    const ys = points.map((p) => p.y);
    return {
        x: Math.min(...xs),
        y: Math.min(...ys),
        width: Math.max(...xs) - Math.min(...xs),
        height: Math.max(...ys) - Math.min(...ys),
    };
}

/**
 * Aligns a dragged rectangle to the edges and centres of its neighbours.
 * Returns the snapped origin plus the guides that should be drawn.
 */
export function computeSnap(
    dragged: Rect,
    others: Rect[],
    threshold = 5,
): { snappedX: number; snappedY: number; guides: SnapGuide[] } {
    let snappedX = dragged.x;
    let snappedY = dragged.y;
    let guideV: SnapGuide | null = null;
    let guideH: SnapGuide | null = null;

    const dragCx = dragged.x + dragged.w / 2;
    const dragCy = dragged.y + dragged.h / 2;
    const dragRight = dragged.x + dragged.w;
    const dragBottom = dragged.y + dragged.h;

    let bestDx = threshold + 1;
    let bestDy = threshold + 1;

    for (const other of others) {
        const otherCx = other.x + other.w / 2;
        const otherCy = other.y + other.h / 2;
        const otherRight = other.x + other.w;
        const otherBottom = other.y + other.h;

        for (const { drag, target } of [
            { drag: dragged.x, target: other.x },
            { drag: dragged.x, target: otherRight },
            { drag: dragRight, target: other.x },
            { drag: dragRight, target: otherRight },
            { drag: dragCx, target: otherCx },
        ]) {
            const diff = Math.abs(drag - target);
            if (diff < threshold && diff < bestDx) {
                bestDx = diff;
                snappedX = dragged.x + (target - drag);
                guideV = { type: 'v', pos: target };
            }
        }

        for (const { drag, target } of [
            { drag: dragged.y, target: other.y },
            { drag: dragged.y, target: otherBottom },
            { drag: dragBottom, target: other.y },
            { drag: dragBottom, target: otherBottom },
            { drag: dragCy, target: otherCy },
        ]) {
            const diff = Math.abs(drag - target);
            if (diff < threshold && diff < bestDy) {
                bestDy = diff;
                snappedY = dragged.y + (target - drag);
                guideH = { type: 'h', pos: target };
            }
        }
    }

    const guides: SnapGuide[] = [];
    if (guideV) guides.push(guideV);
    if (guideH) guides.push(guideH);
    return { snappedX, snappedY, guides };
}
