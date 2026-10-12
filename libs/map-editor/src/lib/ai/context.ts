import { MapDocument, stripEditorAttributes, ViewBox } from '../map-document';
import { MapIndex, MapIndexEntry } from '../map-index';
import { formatDeclarations, StyleRule } from '../style-resolution';
import { snapshotSize, SnapshotSize } from './snapshot';
import {
    MAP_AI_CONTEXT_SCHEMA,
    MAP_AI_MARKUP_SCHEMA,
    MapAIContext,
    MapAIContextEntry,
    MapAIViewBox,
} from './types';

/** The server's default `MAP_AI_MAX_CONTEXT_BYTES`. */
export const DEFAULT_MAX_CONTEXT_BYTES = 512 * 1024;
/** The server cuts each subtree at this many bytes. */
export const MAX_SUBTREE_BYTES = 8000;

export interface ContextSource {
    doc: MapDocument;
    index(): MapIndex;
}

export interface BuildContextOptions {
    /** Anchors of the selected elements. */
    selection?: readonly string[];
    /** Anchors near the person's marks, from hit-testing. */
    shortlist?: readonly string[];
    max_bytes?: number;
    max_subtree_bytes?: number;
    /** Size of the snapshot being sent; computed from the viewBox when absent. */
    snapshot?: SnapshotSize | null;
    long_side?: number;
}

export interface ContextDrops {
    subtrees: number;
    anonymous: number;
    named: number;
}

export interface BuiltContext {
    context: MapAIContext;
    /** JSON size in bytes. */
    bytes: number;
    dropped: ContextDrops;
    /** Under the byte budget. */
    fits: boolean;
}

const encoder = new TextEncoder();

function bytesOf(value: unknown): number {
    return encoder.encode(JSON.stringify(value)).length;
}

export function viewBoxTuple(view_box: ViewBox): MapAIViewBox {
    return [view_box.x, view_box.y, view_box.width, view_box.height];
}

/** An element the model can name: it has an id, a label or a booking binding. */
export function isNamedEntry(entry: MapIndexEntry): boolean {
    return !!entry.id || !!entry.label || entry.protected;
}

export function bboxArea(entry: MapIndexEntry): number {
    return entry.bbox ? entry.bbox[2] * entry.bbox[3] : 0;
}

/**
 * The entries worth sending, named ones first in document order, then the
 * anonymous ones largest first so the budget drops the small ones.
 */
export function orderEntries(index: MapIndex): MapIndexEntry[] {
    const listed = index.entries.filter(
        (entry) => entry.kind !== 'root' && entry.kind !== 'non-rendered',
    );
    const named = listed.filter(isNamedEntry);
    const anonymous = listed
        .filter((entry) => !isNamedEntry(entry))
        .map((entry, order) => ({ entry, order, area: bboxArea(entry) }))
        .sort((a, b) => b.area - a.area || a.order - b.order)
        .map((item) => item.entry);
    return [...named, ...anonymous];
}

export function contextEntry(
    entry: MapIndexEntry,
    root_anchor: string | null,
): MapAIContextEntry {
    return {
        a: entry.anchor,
        id: entry.id,
        tag: entry.tag,
        cls: entry.classes.join(' ') || null,
        label: entry.label,
        bbox: entry.bbox ? [...entry.bbox] : null,
        p: entry.parent && entry.parent !== root_anchor ? entry.parent : null,
        z: entry.z,
        kind: entry.kind,
        prot: entry.protected,
        h: entry.hash,
    };
}

/** Each rule as `selector{name:value;...}`, as the prompt prints them. */
export function styleRuleStrings(rules: readonly StyleRule[]): string[] {
    return rules.map(
        (rule) =>
            `${rule.selectors.join(',')}{${formatDeclarations(rule.declarations)}}`,
    );
}

/** The element's markup without editor attributes, cut at `max_bytes`. */
export function subtreeMarkup(element: Element, max_bytes: number): string {
    const clone = element.cloneNode(true) as Element;
    stripEditorAttributes(clone);
    const markup = new XMLSerializer().serializeToString(clone);
    if (encoder.encode(markup).length <= max_bytes) return markup;
    let cut = markup;
    while (cut.length && encoder.encode(cut).length > max_bytes - 3)
        cut = cut.slice(0, Math.floor(cut.length * 0.9));
    return `${cut}...`;
}

function unique(values: readonly string[]): string[] {
    return [...new Set(values.filter((value) => !!value))];
}

/**
 * The context an edit request carries: the index with named elements first,
 * the markup of the selected and shortlisted elements, the style rules, the
 * protected and duplicate ids and the markup block. Shrinks to the byte
 * budget by dropping subtrees, then anonymous entries, then named entries,
 * and says what went.
 */
export function buildContext(
    source: ContextSource,
    options: BuildContextOptions = {},
): BuiltContext {
    const index = source.index();
    const doc = source.doc;
    const max_bytes = options.max_bytes ?? DEFAULT_MAX_CONTEXT_BYTES;
    const max_subtree = options.max_subtree_bytes ?? MAX_SUBTREE_BYTES;
    const root_entry = index.entries.find((entry) => entry.kind === 'root');
    const root_anchor = root_entry?.anchor || null;
    const selection = unique(options.selection || []);
    const shortlist = unique([...selection, ...(options.shortlist || [])]);
    const size =
        options.snapshot || snapshotSize(doc.view_box, options.long_side);

    const ordered = orderEntries(index);
    const entries = ordered.map((entry) => contextEntry(entry, root_anchor));
    const named_count = ordered.filter(isNamedEntry).length;

    const subtrees: Record<string, string> = {};
    for (const anchor of shortlist) {
        const element = doc.byAnchor(anchor);
        if (element) subtrees[anchor] = subtreeMarkup(element, max_subtree);
    }
    const subtree_keys = Object.keys(subtrees);

    const context: MapAIContext = {
        schema: MAP_AI_CONTEXT_SCHEMA,
        viewBox: viewBoxTuple(doc.view_box),
        image_px: [...size.image_px],
        units_per_px: size.units_per_px,
        protected_ids: ordered
            .filter((entry) => entry.protected && entry.id)
            .map((entry) => entry.id as string),
        duplicate_ids: [...index.duplicate_ids],
        index: entries,
        shortlist: subtree_keys,
        subtrees,
        style_rules: styleRuleStrings(doc.styleRules()),
        markup: {
            schema: MAP_AI_MARKUP_SCHEMA,
            viewBox: viewBoxTuple(doc.view_box),
            annotations: [],
            selected: selection,
        },
        stats: { ...index.stats },
    };

    const dropped: ContextDrops = { subtrees: 0, anonymous: 0, named: 0 };
    let bytes = bytesOf(context);

    while (bytes > max_bytes && context.shortlist.length) {
        const key = context.shortlist[context.shortlist.length - 1];
        bytes -= bytesOf(key) + bytesOf(context.subtrees[key]) + 4;
        context.shortlist = context.shortlist.slice(0, -1);
        delete context.subtrees[key];
        dropped.subtrees += 1;
    }
    if (dropped.subtrees) bytes = bytesOf(context);

    const drop_tail = (floor: number, counter: keyof ContextDrops) => {
        while (bytes > max_bytes && context.index.length > floor) {
            const entry = context.index[context.index.length - 1];
            bytes -= bytesOf(entry) + 1;
            context.index = context.index.slice(0, -1);
            dropped[counter] += 1;
        }
        if (dropped[counter]) bytes = bytesOf(context);
    };
    drop_tail(named_count, 'anonymous');
    drop_tail(named_count, 'anonymous');
    drop_tail(0, 'named');
    drop_tail(0, 'named');

    return { context, bytes, dropped, fits: bytes <= max_bytes };
}
