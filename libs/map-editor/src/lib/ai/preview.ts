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
    }));
    const counts = COUNTED.map((category) => ({
        category,
        count: rows.filter((row) => row.category === category).length,
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
        title: format(strings.proposal_title, { count: rows.length }),
        note: strings.outcomes.previewing,
        counts,
        markers,
    };
}
