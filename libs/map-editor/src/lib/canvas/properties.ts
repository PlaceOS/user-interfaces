import { TEXT_TAGS } from '../constants';
import { MapDocument } from '../map-document';
import { elementLabel } from '../map-index';
import { MapOp, SetAttrOp, SetIdOp, SetTextOp } from '../ops';
import { ProtectedIdSet } from '../protected-ids';
import { inlineStyleValue, StyleResolver } from '../style-resolution';

export type PaintSource =
    | 'attribute'
    | 'inline'
    | 'stylesheet'
    | 'inherited'
    | 'default';

export interface PaintValue {
    /** What the element itself says: its attribute, else its inline style. */
    own: string;
    /** What paints, after inline styles, rules and inheritance. */
    effective: string;
    source: PaintSource;
}

export interface SingleSelectionView {
    kind: 'single';
    anchor: string;
    tag: string;
    id: string;
    label: string;
    is_text: boolean;
    text: string;
    fill: PaintValue;
    stroke: PaintValue;
    changed: boolean;
    protected: boolean;
}

export interface MultiSelectionView {
    kind: 'multi';
    count: number;
    anchors: readonly string[];
    /** The own fill when every selected element agrees, else empty. */
    fill: string;
    stroke: string;
    changed: boolean;
}

export interface NoSelectionView {
    kind: 'none';
}

export type SelectionView =
    | NoSelectionView
    | SingleSelectionView
    | MultiSelectionView;

export interface SelectionSource {
    doc: MapDocument;
    protected: ProtectedIdSet;
    isChanged(anchor: string): boolean;
    originalOf(anchor: string): Element | null;
}

const PAINT_NAMES = ['fill', 'stroke'] as const;
export type PaintName = (typeof PAINT_NAMES)[number];

export function paintValue(
    element: Element,
    name: PaintName,
    resolver: StyleResolver,
): PaintValue {
    const attribute = (element.getAttribute(name) || '').trim();
    const inline = inlineStyleValue(element, name);
    const rule = resolver.cssValue(element, name);
    const effective = resolver.visibleColour(element, name);
    let source: PaintSource = 'default';
    if (inline && inline !== attribute) source = 'inline';
    else if (inline) source = 'attribute';
    else if (rule) source = 'stylesheet';
    else if (attribute) source = 'attribute';
    else if (effective && effective !== (name === 'fill' ? 'black' : ''))
        source = 'inherited';
    return { own: attribute || inline, effective, source };
}

export function describeSelection(
    source: SelectionSource,
    anchors: readonly string[],
    resolver: StyleResolver,
): SelectionView {
    const elements = anchors
        .map((anchor) => ({ anchor, element: source.doc.byAnchor(anchor) }))
        .filter(
            (entry): entry is { anchor: string; element: Element } =>
                !!entry.element,
        );
    if (!elements.length) return { kind: 'none' };
    if (elements.length === 1) {
        const { anchor, element } = elements[0];
        const id = element.getAttribute('id') || '';
        const is_text = TEXT_TAGS.has(element.localName);
        return {
            kind: 'single',
            anchor,
            tag: element.localName,
            id,
            label: elementLabel(element) || '',
            is_text,
            text: is_text ? textLinesOf(element) : '',
            fill: paintValue(element, 'fill', resolver),
            stroke: paintValue(element, 'stroke', resolver),
            changed: source.isChanged(anchor),
            protected: source.protected.has(id),
        };
    }
    const shared = (name: PaintName) => {
        const values = new Set(
            elements.map(
                ({ element }) => paintValue(element, name, resolver).own,
            ),
        );
        return values.size === 1 ? [...values][0] : '';
    };
    return {
        kind: 'multi',
        count: elements.length,
        anchors: elements.map(({ anchor }) => anchor),
        fill: shared('fill'),
        stroke: shared('stroke'),
        changed: elements.some(({ anchor }) => source.isChanged(anchor)),
    };
}

/** A fill or stroke change on each element; an empty value removes the attribute. */
export function paintOps(
    anchors: readonly string[],
    name: PaintName,
    value: string,
    why: string,
): SetAttrOp[] {
    const trimmed = value.trim();
    return [...new Set(anchors)].map((anchor) => ({
        op: 'set_attr',
        target: { a: anchor },
        name,
        value: trimmed || null,
        why,
    }));
}

/** A text element's content as lines: one per <tspan> when it has them, else its text. */
export function textLinesOf(element: Element): string {
    const spans = Array.from(element.children).filter(
        (child) => child.localName === 'tspan',
    );
    if (!spans.length) return element.textContent || '';
    return spans.map((span) => span.textContent || '').join('\n');
}

/** Turns a typed backslash-n into a line break and trims line ends. */
export function normaliseTextInput(value: string): string {
    return value
        .replace(/\\n/g, '\n')
        .split('\n')
        .map((line) => line.replace(/\s+$/, ''))
        .join('\n');
}

export function textOp(anchor: string, text: string, why: string): SetTextOp {
    return { op: 'set_text', target: { a: anchor }, text, why };
}

export function idOp(anchor: string, id: string, why: string): SetIdOp {
    return {
        op: 'set_id',
        target: { a: anchor },
        new_id: id.trim() || null,
        why,
    };
}

/** Ops that take the element back to how it loaded: id, fill, stroke and text. */
export function resetOps(
    source: SelectionSource,
    anchor: string,
    why: string,
): MapOp[] {
    const element = source.doc.byAnchor(anchor);
    const original = source.originalOf(anchor);
    if (!element || !original) return [];
    const ops: MapOp[] = [];
    const original_id = original.getAttribute('id') || '';
    if ((element.getAttribute('id') || '') !== original_id) {
        ops.push(idOp(anchor, original_id, why));
    }
    for (const name of PAINT_NAMES) {
        const was = (original.getAttribute(name) || '').trim();
        const was_inline = inlineStyleValue(original, name);
        const now = (element.getAttribute(name) || '').trim();
        const now_inline = inlineStyleValue(element, name);
        if (was !== now || was_inline !== now_inline) {
            ops.push(...paintOps([anchor], name, was || was_inline, why));
        }
    }
    if (
        TEXT_TAGS.has(element.localName) &&
        (element.textContent || '') !== (original.textContent || '')
    ) {
        ops.push(textOp(anchor, original.textContent || '', why));
    }
    return ops;
}

/** A six-digit hex for a colour input, or black when the value is not one. */
export function colourInputValue(value: string): string {
    const colour = value.replace('!important', '').trim();
    if (/^#[0-9a-f]{6}$/i.test(colour)) return colour.toLowerCase();
    if (/^#[0-9a-f]{3}$/i.test(colour)) {
        return `#${colour[1]}${colour[1]}${colour[2]}${colour[2]}${colour[3]}${colour[3]}`.toLowerCase();
    }
    return '#000000';
}
