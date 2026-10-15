import { NON_RENDERED_TAGS } from '../constants';
import { MapIndex } from '../map-index';

/** One element under the pointer, or an ancestor of one. */
export interface HitCandidate {
    anchor: string;
    id: string | null;
    /** Root-space bounding box area; null when the geometry is unknown. */
    area: number | null;
    depth: number;
}

/** An id'd candidate wins over a smaller anonymous one up to this area ratio. */
export const ID_AREA_TOLERANCE = 3;

/**
 * Smallest bounding box first, an id'd element preferred while it is no more
 * than a few times larger than the smallest hit, deeper elements on ties.
 */
export function pickTarget(candidates: readonly HitCandidate[]): string | null {
    if (!candidates.length) return null;
    const sized = candidates.filter((c) => c.area !== null);
    const pool = sized.length ? sized : candidates;
    const by_size = [...pool].sort(
        (a, b) =>
            (a.area ?? 0) - (b.area ?? 0) ||
            Number(!!b.id) - Number(!!a.id) ||
            b.depth - a.depth,
    );
    const smallest = by_size[0];
    const limit = (smallest.area ?? 0) * ID_AREA_TOLERANCE + 1;
    const named = by_size.find((c) => !!c.id && (c.area ?? 0) <= limit);
    return (named || smallest).anchor;
}

function isInsideNonRendered(element: Element, root: Element): boolean {
    let current: Element | null = element;
    while (current && current !== root) {
        if (NON_RENDERED_TAGS.has(current.localName.toLowerCase())) return true;
        current = current.parentElement;
    }
    return false;
}

/**
 * The elements worth selecting among those under a point: each hit that is
 * a rendered part of the map, plus its ancestors below the root, once each.
 */
export function candidatesFor(
    hits: readonly Element[],
    root: Element,
    index: MapIndex,
    anchorOf: (element: Element) => string,
): HitCandidate[] {
    const seen = new Set<string>();
    const out: HitCandidate[] = [];
    for (const hit of hits) {
        if (hit === root || !root.contains(hit)) continue;
        if (isInsideNonRendered(hit, root)) continue;
        let current: Element | null = hit;
        while (current && current !== root) {
            const anchor = anchorOf(current);
            const entry = anchor ? index.by_anchor.get(anchor) : undefined;
            if (entry && !seen.has(anchor)) {
                seen.add(anchor);
                out.push({
                    anchor,
                    id: entry.id,
                    area: entry.bbox
                        ? Math.max(0, entry.bbox[2]) *
                          Math.max(0, entry.bbox[3])
                        : null,
                    depth: entry.depth,
                });
            }
            current = current.parentElement;
        }
    }
    return out;
}
