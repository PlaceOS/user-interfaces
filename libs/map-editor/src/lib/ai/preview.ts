import { BBox } from '../geometry';
import { MapIndex } from '../map-index';
import { OpCategory } from './describe';
import { Proposal } from './proposal';
import { format, MapEditorAiStrings } from './strings';

/** One numbered change previewed on the map. */
export interface PreviewMarker {
    /** 1-based position of the row in the proposal. */
    n: number;
    anchors: string[];
    category: OpCategory;
    /** Ticked, so applied to the map; an unticked row keeps its number but no outline. */
    applied: boolean;
    /** Where the elements stood before the preview, used once the preview has removed them. */
    box_before?: BBox | null;
}

export interface PreviewCount {
    category: OpCategory;
    label: string;
    count: number;
}

/** What the canvas shows for a proposal previewed on the map. */
export interface PreviewSummary {
    title: string;
    note: string;
    counts: PreviewCount[];
    markers: PreviewMarker[];
}

/** The box around every listed element in the index; null when none of them has one. */
export function unionBox(
    index: MapIndex,
    anchors: readonly string[],
): BBox | null {
    let box: BBox | null = null;
    for (const anchor of anchors) {
        const bbox = index.by_anchor.get(anchor)?.bbox;
        if (!bbox) continue;
        if (!box) {
            box = [...bbox] as BBox;
            continue;
        }
        const x = Math.min(box[0], bbox[0]);
        const y = Math.min(box[1], bbox[1]);
        const x2 = Math.max(box[0] + box[2], bbox[0] + bbox[2]);
        const y2 = Math.max(box[1] + box[3], bbox[1] + bbox[3]);
        box = [x, y, x2 - x, y2 - y];
    }
    return box;
}

const COUNTED: readonly OpCategory[] = ['added', 'changed', 'removed'];

/** The markers and counts for the proposal's actionable rows; null when there are none. */
export function previewSummary(
    proposal: Proposal,
    strings: MapEditorAiStrings,
): PreviewSummary | null {
    const rows = proposal.rows.filter((row) => row.actionable);
    if (!rows.length) return null;
    const markers = rows.map((row) => ({
        n: row.index + 1,
        anchors: [...row.anchors],
        category: row.category,
        applied: row.checked && !row.locked,
        box_before: row.box_before ?? null,
    }));
    const on_map = rows.filter((row) => row.checked && !row.locked);
    const counts = COUNTED.map((category) => ({
        category,
        count: on_map.filter((row) => row.category === category).length,
        label: '',
    }))
        .filter((entry) => entry.count > 0)
        .map((entry) => ({
            ...entry,
            label: format(strings.group_label, {
                count: entry.count,
                kind: strings.categories[entry.category],
            }),
        }));
    return {
        title:
            on_map.length === rows.length
                ? format(strings.proposal_title, { count: rows.length })
                : format(strings.preview_partial_title, {
                      applied: on_map.length,
                      count: rows.length,
                  }),
        note: strings.outcomes.previewing,
        counts,
        markers,
    };
}
