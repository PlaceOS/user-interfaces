import { MapDocument } from '../map-document';
import { DeleteOp, TransformOp } from '../ops';
import { ProtectedIdSet } from '../protected-ids';

function round(value: number, places = 2): number {
    const factor = 10 ** places;
    const rounded = Math.round(value * factor) / factor;
    return rounded === 0 ? 0 : rounded;
}

/** One translate op per element, in root units; nothing when the move is zero. */
export function moveOps(
    anchors: readonly string[],
    dx: number,
    dy: number,
    why: string,
): TransformOp[] {
    const x = round(dx);
    const y = round(dy);
    if (!x && !y) return [];
    return [...new Set(anchors)].map((anchor) => ({
        op: 'transform',
        target: { a: anchor },
        translate: [x, y],
        why,
    }));
}

export function deleteOps(anchors: readonly string[], why: string): DeleteOp[] {
    return [...new Set(anchors)].map((anchor) => ({
        op: 'delete',
        target: { a: anchor },
        why,
    }));
}

/** Root-unit travel of a pointer drag at the current zoom. */
export function dragDelta(
    start: readonly [number, number],
    current: readonly [number, number],
    scale: number,
): [number, number] {
    return [(current[0] - start[0]) / scale, (current[1] - start[1]) / scale];
}

/** Whether the pointer has travelled far enough for a press to count as a drag. */
export function exceedsThreshold(
    start: readonly [number, number],
    current: readonly [number, number],
    threshold = 4,
): boolean {
    return Math.hypot(current[0] - start[0], current[1] - start[1]) > threshold;
}

export interface BoundIdSource {
    doc: MapDocument;
    protected: ProtectedIdSet;
}

/** Labels of the protected ids inside the elements, each once, in map order. */
export function boundIdLabels(
    source: BoundIdSource,
    anchors: readonly string[],
): string[] {
    const labels: string[] = [];
    const seen = new Set<string>();
    for (const anchor of anchors) {
        const element = source.doc.byAnchor(anchor);
        if (!element) continue;
        for (const node of MapDocument.subtree(element)) {
            const id = node.getAttribute('id');
            if (!id || seen.has(id) || !source.protected.has(id)) continue;
            seen.add(id);
            labels.push(source.protected.labelOf(id));
        }
    }
    return labels;
}
