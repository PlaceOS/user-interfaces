import { NON_RENDERED_TAGS, TEXT_TAGS } from './constants';
import { BBox, GeometryProvider } from './geometry';
import { duplicateIds } from './ids';
import { MapDocument, ViewBox } from './map-document';
import { ProtectedIdSet } from './protected-ids';
import { ownText } from './signature';
import { StyleResolver, StyleRule } from './style-resolution';

export type ElementKind =
    | 'root'
    | 'non-rendered'
    | 'bookable'
    | 'zone'
    | 'layer-group'
    | 'group'
    | 'text'
    | 'art';

export interface MapIndexEntry {
    anchor: string;
    id: string | null;
    tag: string;
    classes: string[];
    label: string | null;
    /** Root-space x, y, width, height; null when the geometry provider cannot say. */
    bbox: BBox | null;
    parent: string | null;
    depth: number;
    /** Paint order among rendered elements; null for non-rendered ones. */
    z: number | null;
    visible: boolean;
    fill: string | null;
    stroke: string | null;
    protected: boolean;
    kind: ElementKind;
    hash: string;
    text: string | null;
    /** Anonymous, non-group children by tag, for groups. */
    children: Record<string, number>;
}

export interface MapIndexStats {
    elements: number;
    ids: number;
    bytes: number;
}

export interface MapIndex {
    view_box: ViewBox;
    entries: MapIndexEntry[];
    by_anchor: Map<string, MapIndexEntry>;
    style_rules: StyleRule[];
    duplicate_ids: string[];
    stats: MapIndexStats;
}

export interface IndexOptions {
    geometry?: GeometryProvider;
    protected?: ProtectedIdSet;
    /** Compute bounding boxes (the slow part). Default true. */
    bbox?: boolean;
}

const BOOKABLE_ID =
    /^(?:desk|table|room|area|park|bay|locker|space|seat|meeting)[-_.]/i;
const ZONE_ID = /^zone/i;
const ZONES_GROUP = /^zones$/i;

export function elementLabel(element: Element): string | null {
    for (const child of Array.from(element.children)) {
        if (child.localName === 'title') {
            const title = (child.textContent || '').trim();
            if (title) return title;
        }
    }
    const named =
        element.getAttribute('data-name') ||
        element.getAttribute('aria-label') ||
        element.getAttribute('inkscape:label');
    if (named?.trim()) return named.trim();
    if (TEXT_TAGS.has(element.localName)) {
        const text = (element.textContent || '').trim();
        if (text) return text;
    }
    const own = ownText(element);
    return own || null;
}

function isInsideNonRendered(element: Element): boolean {
    let current: Element | null = element;
    while (current) {
        if (NON_RENDERED_TAGS.has(current.localName.toLowerCase())) return true;
        current = current.parentElement;
    }
    return false;
}

function guessKind(
    element: Element,
    is_protected: boolean,
    parent_kind: ElementKind | null,
): ElementKind {
    const tag = element.localName;
    if (tag === 'svg' && !element.parentElement) return 'root';
    if (isInsideNonRendered(element)) return 'non-rendered';
    const id = element.getAttribute('id') || '';
    if (is_protected) return 'bookable';
    if (TEXT_TAGS.has(tag)) return 'text';
    if (ZONE_ID.test(id) || (parent_kind === 'zone' && tag !== 'g'))
        return 'zone';
    if (tag === 'g' && ZONES_GROUP.test(id)) return 'zone';
    if (BOOKABLE_ID.test(id)) return 'bookable';
    if (tag === 'g' || tag === 'a') {
        return id && (parent_kind === 'root' || parent_kind === 'layer-group')
            ? 'layer-group'
            : 'group';
    }
    return 'art';
}

/**
 * One record per element in document order, plus the parsed style rules and
 * the duplicate ids the source already carries.
 */
export function buildIndex(
    doc: MapDocument,
    options: IndexOptions = {},
): MapIndex {
    const geometry = options.geometry || doc.geometry;
    const protected_ids = options.protected || doc.protected;
    const with_bbox = options.bbox !== false;
    const resolver = new StyleResolver(doc.root, doc.styleRules());
    const entries: MapIndexEntry[] = [];
    const by_anchor = new Map<string, MapIndexEntry>();
    const by_element = new Map<Element, MapIndexEntry>();
    let z = 0;
    let id_count = 0;
    for (const element of doc.elements()) {
        const id = element.getAttribute('id');
        if (id) id_count++;
        const parent_element = element.parentElement;
        const parent_entry = parent_element
            ? by_element.get(parent_element)
            : undefined;
        const is_protected = protected_ids.has(id);
        const kind = guessKind(
            element,
            is_protected,
            parent_entry?.kind || null,
        );
        const rendered =
            kind !== 'non-rendered' &&
            !NON_RENDERED_TAGS.has(element.localName.toLowerCase());
        const tag = element.localName;
        const entry: MapIndexEntry = {
            anchor: doc.anchorOf(element),
            id: id || null,
            tag,
            classes: (element.getAttribute('class') || '')
                .split(/\s+/)
                .filter((c) => !!c),
            label: elementLabel(element),
            bbox: with_bbox && rendered ? geometry.bboxOf(element) : null,
            parent: parent_entry?.anchor || null,
            depth: parent_entry ? parent_entry.depth + 1 : 0,
            z: rendered ? z++ : null,
            visible: rendered && resolver.isVisible(element),
            fill: rendered
                ? resolver.visibleColour(element, 'fill') || null
                : null,
            stroke: rendered
                ? resolver.visibleColour(element, 'stroke') || null
                : null,
            protected: is_protected,
            kind,
            hash: doc.hashOf(element),
            text: TEXT_TAGS.has(tag)
                ? (element.textContent || '').trim() || null
                : null,
            children: {},
        };
        if (entry.bbox)
            entry.bbox = entry.bbox.map((n) => Math.round(n)) as BBox;
        if (parent_entry && !id && tag !== 'g' && rendered) {
            parent_entry.children[tag] = (parent_entry.children[tag] || 0) + 1;
        }
        entries.push(entry);
        by_anchor.set(entry.anchor, entry);
        by_element.set(element, entry);
    }
    return {
        view_box: { ...doc.view_box },
        entries,
        by_anchor,
        style_rules: doc.styleRules(),
        duplicate_ids: duplicateIds(doc.root),
        stats: {
            elements: entries.length,
            ids: id_count,
            bytes: doc.byteSize(),
        },
    };
}

const PROMPT_PROPERTIES = ['fill', 'stroke', 'opacity', 'stroke-width'];

export interface PromptLinesOptions {
    /** List elements without an id, text or children summary. Default false. */
    include_anonymous?: boolean;
}

/** Compact text index for a model: one line per listed element. */
export function promptLines(
    index: MapIndex,
    options: PromptLinesOptions = {},
): string {
    const { x, y, width, height } = index.view_box;
    const lines = [
        `viewBox: ${x} ${y} ${width} ${height} (all coordinates in these user units, origin top-left)`,
    ];
    const classes: string[] = [];
    for (const rule of index.style_rules) {
        const declarations = Object.entries(rule.declarations)
            .filter(([name]) => PROMPT_PROPERTIES.includes(name))
            .map(([name, value]) => `${name}:${value}`)
            .join(', ');
        if (!declarations) continue;
        for (const selector of rule.selectors) {
            if (/^\.[\w-]+$/.test(selector))
                classes.push(`${selector}{${declarations}}`);
        }
    }
    if (classes.length) lines.push(`style classes: ${classes.join('; ')}`);
    if (index.duplicate_ids.length) {
        lines.push(
            `duplicate ids already in the file (not your doing): ${index.duplicate_ids.join(', ')}`,
        );
    }
    lines.push(
        'elements: anchor | id | tag | class | fill | bbox(x y w h) | parent | extra',
    );
    for (const entry of index.entries) {
        if (entry.kind === 'non-rendered' || entry.kind === 'root') continue;
        const has_children = Object.keys(entry.children).length > 0;
        const listed =
            !!entry.id ||
            entry.tag === 'g' ||
            !!entry.text ||
            has_children ||
            options.include_anonymous;
        if (!listed) continue;
        const extra: string[] = [];
        if (entry.text) extra.push(`text="${entry.text}"`);
        if (
            entry.label &&
            entry.label !== entry.text &&
            entry.label !== entry.id
        ) {
            extra.push(`label="${entry.label}"`);
        }
        if (entry.protected) extra.push('protected');
        if (!entry.visible) extra.push('hidden');
        if (has_children) {
            extra.push(
                `anon ${Object.entries(entry.children)
                    .map(([tag, count]) => `${tag}x${count}`)
                    .join(' ')}`,
            );
        }
        const bbox = entry.bbox ? entry.bbox.join(' ') : '-';
        lines.push(
            `${entry.anchor} | ${entry.id || '-'} | ${entry.tag} | ${
                entry.classes.join(' ') || '-'
            } | ${entry.fill || '-'} | ${bbox} | ${entry.parent || 'root'} | ${extra.join(' ')}`.trimEnd(),
        );
    }
    return lines.join('\n');
}
