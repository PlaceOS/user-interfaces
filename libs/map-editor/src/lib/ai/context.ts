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
    /** The instruction; elements whose ids it names join the shortlist. */
    instruction?: string;
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

/** Entries whose box can contain others: bookables and zones with a non-empty box, smallest first. */
export function containerEntries(index: MapIndex): MapIndexEntry[] {
    return index.entries
        .filter(
            (entry) =>
                (entry.kind === 'bookable' || entry.kind === 'zone') &&
                !!entry.bbox &&
                entry.bbox[2] > 0 &&
                entry.bbox[3] > 0,
        )
        .sort((a, b) => bboxArea(a) - bboxArea(b));
}

const CONTAINMENT_TOLERANCE = 0.5;

/** The smallest container whose box holds the entry's box, by anchor; entries outside every container are absent. */
export function containerIndex(index: MapIndex): Map<string, MapIndexEntry> {
    const containers = containerEntries(index);
    const result = new Map<string, MapIndexEntry>();
    for (const entry of index.entries) {
        if (
            !entry.bbox ||
            entry.kind === 'root' ||
            entry.kind === 'non-rendered'
        )
            continue;
        const [x, y, w, h] = entry.bbox;
        for (const container of containers) {
            if (container === entry) continue;
            const [cx, cy, cw, ch] = container.bbox as [
                number,
                number,
                number,
                number,
            ];
            if (cw * ch <= w * h) continue;
            if (
                x >= cx - CONTAINMENT_TOLERANCE &&
                y >= cy - CONTAINMENT_TOLERANCE &&
                x + w <= cx + cw + CONTAINMENT_TOLERANCE &&
                y + h <= cy + ch + CONTAINMENT_TOLERANCE
            ) {
                result.set(entry.anchor, container);
                break;
            }
        }
    }
    return result;
}

const GLYPH_MAX_HEIGHT_RATIO = 0.2;
const GLYPH_MAX_WIDTH_RATIO = 0.35;

/** An anonymous path small enough to be one letter of an outlined label inside its container. */
export function isGlyphEntry(
    entry: MapIndexEntry,
    container: MapIndexEntry | undefined,
): boolean {
    if (!container?.bbox || !entry.bbox) return false;
    if (entry.id || entry.label || entry.protected) return false;
    if (entry.tag !== 'path' && entry.tag !== 'polygon') return false;
    if (entry.parent === container.anchor) return false;
    const [, , w, h] = entry.bbox;
    const [, , cw, ch] = container.bbox;
    return (
        h > 0 &&
        h <= ch * GLYPH_MAX_HEIGHT_RATIO &&
        w <= cw * GLYPH_MAX_WIDTH_RATIO
    );
}

const MENTION = /[A-Za-z0-9.]*\d[A-Za-z0-9.]*/g;
const ID_SEPARATOR = /[-_.\s]+/;
const MAX_MENTIONS = 12;

/** Tokens of the instruction that carry a digit, such as 1.03, 01.004, G.02 or 100. */
export function mentionedTokens(instruction: string): string[] {
    const tokens = (instruction.match(MENTION) || [])
        .map((token) => token.replace(/^\.+|\.+$/g, ''))
        .filter((token) => token.length >= 2 || /^\d+$/.test(token));
    return unique(tokens);
}

function idParts(value: string): string[] {
    return value
        .toLowerCase()
        .split(ID_SEPARATOR)
        .filter((part) => !!part);
}

/** Whether the id carries the token's parts in sequence, so 1.03 names area-1.03-status but not table-01.003. */
export function idMentions(id: string, token: string): boolean {
    const needle = idParts(token);
    const haystack = idParts(id);
    if (!needle.length || needle.length > haystack.length) return false;
    for (let start = 0; start + needle.length <= haystack.length; start++) {
        if (needle.every((part, offset) => haystack[start + offset] === part))
            return true;
    }
    return false;
}

/** Id'd entries the instruction names by number, in document order, at most MAX_MENTIONS. */
export function mentionedEntries(
    index: MapIndex,
    instruction: string | undefined,
): MapIndexEntry[] {
    if (!instruction) return [];
    const tokens = mentionedTokens(instruction);
    if (!tokens.length) return [];
    const found = index.entries.filter(
        (entry) =>
            !!entry.id &&
            tokens.some((token) => idMentions(entry.id as string, token)),
    );
    return found.slice(0, MAX_MENTIONS);
}

export function contextEntry(
    entry: MapIndexEntry,
    root_anchor: string | null,
    container?: MapIndexEntry,
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
        kind: isGlyphEntry(entry, container) ? 'glyph' : entry.kind,
        prot: entry.protected,
        h: entry.hash,
        fill: entry.fill,
        in: container ? container.id || container.anchor : null,
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
    const mentioned = mentionedEntries(index, options.instruction).map(
        (entry) => entry.anchor,
    );
    const shortlist = unique([
        ...selection,
        ...(options.shortlist || []),
        ...mentioned,
    ]);
    const size =
        options.snapshot || snapshotSize(doc.view_box, options.long_side);

    const ordered = orderEntries(index);
    const containers = containerIndex(index);
    const entries = ordered.map((entry) =>
        contextEntry(entry, root_anchor, containers.get(entry.anchor)),
    );
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
