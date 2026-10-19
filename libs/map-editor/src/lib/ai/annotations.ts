import { SVG_NS } from '../constants';
import { MapIndex } from '../map-index';
import { MapAIAnnotation } from './types';

export type AnnotationTool = 'select' | 'ellipse' | 'box' | 'path' | 'arrow';

export const ANNOTATION_COLOURS = [
    { name: 'red', value: '#dc2626' },
    { name: 'blue', value: '#2563eb' },
    { name: 'green', value: '#15803d' },
    { name: 'orange', value: '#c2410c' },
    { name: 'purple', value: '#9333ea' },
] as const;

export function annotationColour(mark: MapAIAnnotation): string {
    return (
        ANNOTATION_COLOURS.find((colour) => colour.name === mark.colour)
            ?.value || ANNOTATION_COLOURS[0].value
    );
}

/** Every point a mark covers in viewBox units: its path, its box corners and an arrow's tip. */
export function annotationPoints(mark: MapAIAnnotation): [number, number][] {
    const points: [number, number][] = [...(mark.points || [])];
    if (mark.x !== undefined && mark.y !== undefined) {
        points.push([mark.x, mark.y]);
        // An arrow's width and height are absolute deltas, so only boxes and ellipses have this corner
        if (mark.kind === 'box' || mark.kind === 'ellipse')
            points.push([
                mark.x + (mark.width || 0),
                mark.y + (mark.height || 0),
            ]);
    }
    if (mark.x2 !== undefined && mark.y2 !== undefined)
        points.push([mark.x2, mark.y2]);
    return points.filter(([x, y]) => Number.isFinite(x) && Number.isFinite(y));
}

/** The same marks on the canvas overlay and the uploaded snapshot, in viewBox units. */
export function drawAnnotations(
    overlay: SVGElement,
    marks: readonly MapAIAnnotation[],
    units_per_px: number,
): void {
    const owner = overlay.ownerDocument;
    const stroke = Math.max(0.1, units_per_px * 3);
    for (const mark of marks) {
        const colour = annotationColour(mark);
        const group = owner.createElementNS(SVG_NS, 'g');
        group.setAttribute('data-annotation', String(mark.n));
        const x = mark.x ?? mark.points?.[0]?.[0] ?? 0;
        const y = mark.y ?? mark.points?.[0]?.[1] ?? 0;
        let shape: SVGElement;
        if (mark.kind === 'ellipse') {
            shape = owner.createElementNS(SVG_NS, 'ellipse');
            shape.setAttribute('cx', String(x + (mark.width || 0) / 2));
            shape.setAttribute('cy', String(y + (mark.height || 0) / 2));
            shape.setAttribute('rx', String((mark.width || 0) / 2));
            shape.setAttribute('ry', String((mark.height || 0) / 2));
        } else if (mark.kind === 'box') {
            shape = owner.createElementNS(SVG_NS, 'rect');
            shape.setAttribute('x', String(x));
            shape.setAttribute('y', String(y));
            shape.setAttribute('width', String(mark.width || 0));
            shape.setAttribute('height', String(mark.height || 0));
        } else {
            shape = owner.createElementNS(SVG_NS, 'path');
            let d = '';
            if (mark.kind === 'arrow') {
                const end_x = mark.x2 ?? x;
                const end_y = mark.y2 ?? y;
                const angle = Math.atan2(end_y - y, end_x - x);
                const head = units_per_px * 12;
                const wing = (side: number) =>
                    `${end_x - head * Math.cos(angle + (side * Math.PI) / 6)} ${end_y - head * Math.sin(angle + (side * Math.PI) / 6)}`;
                d = `M${x} ${y}L${end_x} ${end_y}M${wing(-1)}L${end_x} ${end_y}L${wing(1)}`;
            } else {
                d = (mark.points || [])
                    .map(([px, py], index) => `${index ? 'L' : 'M'}${px} ${py}`)
                    .join('');
            }
            shape.setAttribute('d', d);
        }
        shape.setAttribute(
            'style',
            `fill:none;stroke:${colour};stroke-width:${stroke};stroke-linecap:round;stroke-linejoin:round;pointer-events:none`,
        );
        group.appendChild(shape);
        if (!mark.n) {
            overlay.appendChild(group);
            continue;
        }
        const badge = owner.createElementNS(SVG_NS, 'text');
        badge.setAttribute('x', String(x));
        badge.setAttribute('y', String(y - units_per_px * 5));
        badge.setAttribute(
            'style',
            `font:700 ${units_per_px * 13}px sans-serif;fill:${colour};stroke:#fff;stroke-width:${units_per_px * 3};paint-order:stroke;pointer-events:none`,
        );
        badge.textContent = String(mark.n);
        group.appendChild(badge);
        overlay.appendChild(group);
    }
}

function insidePolygon(
    point: [number, number],
    points: readonly [number, number][],
): boolean {
    let inside = false;
    for (let i = 0, j = points.length - 1; i < points.length; j = i++) {
        const [xi, yi] = points[i];
        const [xj, yj] = points[j];
        if (
            yi > point[1] !== yj > point[1] &&
            point[0] < ((xj - xi) * (point[1] - yi)) / (yj - yi) + xi
        )
            inside = !inside;
    }
    return inside;
}

/** Candidates inside a circled area, or under an arrow tip, smallest first. */
export function annotationCandidates(
    index: MapIndex,
    mark: MapAIAnnotation,
): string[] {
    return index.entries
        .filter((entry) => {
            if (
                !entry.bbox ||
                !entry.visible ||
                entry.kind === 'root' ||
                entry.kind === 'non-rendered' ||
                (entry.tag === 'g' &&
                    entry.kind !== 'bookable' &&
                    entry.kind !== 'zone')
            )
                return false;
            const [x, y, width, height] = entry.bbox;
            if (mark.kind === 'arrow') {
                const px = mark.x2 ?? 0;
                const py = mark.y2 ?? 0;
                return (
                    px >= x && px <= x + width && py >= y && py <= y + height
                );
            }
            if (
                !entry.id &&
                width * height > (mark.width || 0) * (mark.height || 0) * 4
            )
                return false;
            const centre: [number, number] = [x + width / 2, y + height / 2];
            if (mark.kind === 'box')
                return (
                    centre[0] >= (mark.x || 0) &&
                    centre[0] <= (mark.x || 0) + (mark.width || 0) &&
                    centre[1] >= (mark.y || 0) &&
                    centre[1] <= (mark.y || 0) + (mark.height || 0)
                );
            if (mark.kind === 'ellipse') {
                const rx = (mark.width || 0) / 2;
                const ry = (mark.height || 0) / 2;
                return (
                    rx > 0 &&
                    ry > 0 &&
                    ((centre[0] - (mark.x || 0) - rx) / rx) ** 2 +
                        ((centre[1] - (mark.y || 0) - ry) / ry) ** 2 <=
                        1
                );
            }
            return (
                mark.kind === 'path' && insidePolygon(centre, mark.points || [])
            );
        })
        .sort((a, b) => {
            const named = Number(!!b.id) - Number(!!a.id);
            if (named) return named;
            const aa = a.bbox!;
            const bb = b.bbox!;
            return aa[2] * aa[3] - bb[2] * bb[3];
        })
        .slice(0, 32)
        .map((entry) => entry.anchor);
}
