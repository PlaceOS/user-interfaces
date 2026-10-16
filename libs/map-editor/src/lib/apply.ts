import {
    ANCHOR_ATTR,
    DEFAULT_ID_PREFIX,
    isAllowedAttributeName,
    MAX_DUPLICATE_COUNT,
    MAX_REPLACEMENT_MARKUP_BYTES,
    MAX_TRANSFORM_TARGETS,
    SHAPE_GEOMETRY_ATTRS,
    SHAPE_KINDS,
    STYLE_PROPERTY_ALLOW_LIST,
    SVG_NS,
    TEXT_TAGS,
} from './constants';
import { GeometryProvider } from './geometry';
import {
    escapeRegExp,
    expandIdPattern,
    generateId,
    highestInPattern,
    idIssue,
    idsIn,
    referencesTo,
    rewriteReferences,
} from './ids';
import {
    canvasExpansionIssue,
    MapDocument,
    stripEditorAttributes,
    Target,
} from './map-document';
import {
    changeOfBasis,
    composeTransform,
    formatTransform,
    invert,
    isIdentity,
    Matrix,
    translation,
} from './matrix';
import {
    DeleteOp,
    DuplicateOp,
    GroupOp,
    InsertShapeOp,
    MapOp,
    ReorderOp,
    ReplaceElementOp,
    ReplacePathOp,
    SetAttrOp,
    SetIdOp,
    SetStyleRuleOp,
    SetTextOp,
    targetsOf,
    TransformOp,
    UngroupOp,
} from './ops';
import { checkPathData } from './path-data';
import { isUnsafeCssValue, purifyMarkup } from './sanitise';
import {
    formatDeclarations,
    inlineStyleValue,
    isValidSelector,
} from './style-resolution';
import { attributeValueIssue, geometryValueIssue } from './value-syntax';

export interface AppliedOp {
    index: number;
    op: MapOp;
    /** Anchors of the elements the op named. */
    anchors: string[];
    /** Anchors of elements the op created. */
    created: string[];
    /** Every anchor the op wrote to, named or not. */
    touched: string[];
    note?: string;
}

export interface RejectedOp {
    index: number;
    op: MapOp;
    reason: string;
}

export interface ApplyResult {
    applied: AppliedOp[];
    rejected: RejectedOp[];
    touched: string[];
}

export interface ApplyOptions {
    geometry?: GeometryProvider;
    /** Indices of ops to leave out, such as rows the person unticked. */
    skip?: ReadonlySet<number>;
}

type Outcome =
    | {
          ok: true;
          anchors: string[];
          created?: string[];
          touched?: string[];
          note?: string;
      }
    | { ok: false; reason: string };

const PAINT_STYLE_ATTRS = new Set([
    'fill',
    'stroke',
    'opacity',
    'fill-opacity',
    'stroke-opacity',
]);
const BOOKING_OVERLAY_ID = /^area-.+-status$/i;
const BOOKING_OVERLAY_FILL_OPACITY = '0.3';

/** Apply ops in order through the DOM API; a rejected op leaves the document as it was. */
export function applyOps(
    doc: MapDocument,
    ops: readonly MapOp[],
    options: ApplyOptions = {},
): ApplyResult {
    const geometry = options.geometry || doc.geometry;
    const result: ApplyResult = { applied: [], rejected: [], touched: [] };
    const touched = new Set<string>();
    ops.forEach((op, index) => {
        if (options.skip?.has(index)) return;
        const outcome = applyOne(doc, op, geometry);
        if (outcome.ok === false) {
            result.rejected.push({ index, op, reason: outcome.reason });
            return;
        }
        doc.markChanged();
        const op_touched = [
            ...new Set([
                ...outcome.anchors,
                ...(outcome.created || []),
                ...(outcome.touched || []),
            ]),
        ];
        for (const anchor of op_touched) touched.add(anchor);
        result.applied.push({
            index,
            op,
            anchors: outcome.anchors,
            created: outcome.created || [],
            touched: op_touched,
            ...(outcome.note ? { note: outcome.note } : {}),
        });
    });
    result.touched = [...touched];
    return result;
}

function applyOne(
    doc: MapDocument,
    op: MapOp,
    geometry: GeometryProvider,
): Outcome {
    switch (op.op) {
        case 'set_attr':
            return setAttr(doc, op);
        case 'set_style_rule':
            return setStyleRule(doc, op);
        case 'set_text':
            return setText(doc, op);
        case 'transform':
            return transform(doc, op, geometry);
        case 'delete':
            return remove(doc, op);
        case 'duplicate':
            return duplicate(doc, op, geometry);
        case 'insert_shape':
            return insertShape(doc, op, geometry);
        case 'set_id':
            return setId(doc, op);
        case 'reorder':
            return reorder(doc, op);
        case 'group':
            return group(doc, op);
        case 'ungroup':
            return ungroup(doc, op);
        case 'replace_element':
            return replaceElement(doc, op);
        case 'replace_path':
            return replacePath(doc, op);
        case 'no_change':
        case 'ask':
            return { ok: true, anchors: [] };
        default:
            return {
                ok: false,
                reason: `unknown op "${(op as { op: string }).op}"`,
            };
    }
}

function resolveAll(
    doc: MapDocument,
    targets: readonly Target[],
): { elements: Element[] } | { error: string } {
    const elements: Element[] = [];
    for (const target of targets) {
        const resolution = doc.resolve(target);
        if (resolution.ok === false) return { error: resolution.error };
        if (!elements.includes(resolution.element))
            elements.push(resolution.element);
    }
    return { elements };
}

function isRoot(doc: MapDocument, element: Element): boolean {
    return element === doc.root;
}

function prependTransform(element: Element, matrix: Matrix): void {
    const existing = element.getAttribute('transform') || '';
    element.setAttribute(
        'transform',
        `${formatTransform(matrix)} ${existing}`.trim(),
    );
}

/**
 * Express a root-space matrix in the element's parent space, so prepending it
 * to the element's own transform moves the element as the matrix says.
 */
function toParentSpace(
    element: Element,
    root_space: Matrix,
    geometry: GeometryProvider,
    doc: MapDocument,
): { matrix: Matrix; converted: boolean } {
    const parent = element.parentElement;
    if (!parent || isRoot(doc, parent))
        return { matrix: root_space, converted: true };
    const parent_ctm = geometry.ctmOf(parent);
    if (!parent_ctm) return { matrix: root_space, converted: false };
    if (isIdentity(parent_ctm)) return { matrix: root_space, converted: true };
    const converted = changeOfBasis(root_space, parent_ctm);
    return converted
        ? { matrix: converted, converted: true }
        : { matrix: root_space, converted: false };
}

function setAttr(doc: MapDocument, op: SetAttrOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    const name = (op.name || '').trim();
    if (name === 'viewBox') {
        if (!isRoot(doc, element))
            return {
                ok: false,
                reason: 'canvas bounds can only be changed on the SVG root',
            };
        const reason = canvasExpansionIssue(doc.view_box, op.value);
        if (reason) return { ok: false, reason };
        element.setAttribute('viewBox', op.value || '');
        return { ok: true, anchors: [doc.anchorOf(element)] };
    }
    if (!isAllowedAttributeName(name)) {
        return { ok: false, reason: `attribute "${name}" is not editable` };
    }
    const style = (element as SVGElement).style;
    if (op.value === null || op.value === undefined) {
        element.removeAttribute(name);
        if (PAINT_STYLE_ATTRS.has(name) && style) {
            style.removeProperty(name);
            if (!style.length) element.removeAttribute('style');
        }
    } else {
        const value = `${op.value}`;
        const issue = attributeValueIssue(name, value);
        if (issue) return { ok: false, reason: issue };
        element.setAttribute(name, value);
        if (
            PAINT_STYLE_ATTRS.has(name) &&
            style &&
            (inlineStyleValue(element, name) ||
                ruleDeclares(doc, element, name))
        ) {
            style.setProperty(name, value);
        }
    }
    return { ok: true, anchors: [doc.anchorOf(element)] };
}

/** Whether a stylesheet rule, which would beat the attribute, sets the property on the element. */
function ruleDeclares(
    doc: MapDocument,
    element: Element,
    name: string,
): boolean {
    for (const rule of doc.styleRules()) {
        if (!(name in rule.declarations)) continue;
        for (const selector of rule.selectors) {
            try {
                if (element.matches(selector)) return true;
            } catch {
                // an invalid selector matches nothing
            }
        }
    }
    return false;
}

export function styleElementOf(doc: MapDocument): Element | null {
    return doc.root.querySelector('style');
}

/** The rule's declarations as written, `!important` kept, overridden by the new ones. */
function mergeDeclarations(
    body: string,
    declarations: Readonly<Record<string, string>>,
): string {
    const merged = new Map<string, string>();
    for (const part of body.split(';')) {
        const index = part.indexOf(':');
        if (index < 0) continue;
        const name = part.slice(0, index).trim();
        const value = part.slice(index + 1).trim();
        if (name && value) merged.set(name, value);
    }
    for (const [name, value] of Object.entries(declarations)) {
        merged.set(name, value);
    }
    return [...merged].map(([name, value]) => `${name}:${value}`).join(';');
}

/** Merge declarations into the rule whose whole selector is this one, or append a rule. */
export function upsertStyleRule(
    css: string,
    selector: string,
    declarations: Readonly<Record<string, string>>,
): string {
    const pattern = new RegExp(
        `(^|[};])(\\s*)(${escapeRegExp(selector)})\\s*\\{([^{}]*)\\}`,
    );
    const match = css.match(pattern);
    if (match && match.index !== undefined) {
        const block = `${match[1]}${match[2]}${selector}{${mergeDeclarations(match[4], declarations)}}`;
        return (
            css.slice(0, match.index) +
            block +
            css.slice(match.index + match[0].length)
        );
    }
    const block = `${selector}{${formatDeclarations(declarations)}}`;
    return css.trim() ? `${css.replace(/\s+$/, '')}\n${block}` : block;
}

function setStyleRule(doc: MapDocument, op: SetStyleRuleOp): Outcome {
    const selector = (op.selector || '').trim();
    if (
        !selector ||
        selector === '*' ||
        isUnsafeCssValue(selector) ||
        selector.includes(',')
    ) {
        return { ok: false, reason: `selector "${selector}" is not allowed` };
    }
    if (!isValidSelector(doc.root, selector)) {
        return { ok: false, reason: `selector "${selector}" does not parse` };
    }
    if (!Array.isArray(op.declarations) || !op.declarations.length) {
        return { ok: false, reason: 'no declarations' };
    }
    const declarations: Record<string, string> = {};
    for (const { name, value } of op.declarations) {
        const property = typeof name === 'string' ? name.trim() : '';
        if (!STYLE_PROPERTY_ALLOW_LIST.has(property)) {
            return {
                ok: false,
                reason: `property "${property}" is not editable`,
            };
        }
        if (typeof value !== 'string' || isUnsafeCssValue(value)) {
            return {
                ok: false,
                reason: `value for "${property}" is not allowed`,
            };
        }
        const issue = attributeValueIssue(property, value);
        if (issue) return { ok: false, reason: issue };
        declarations[property] = value.trim();
    }
    let style = styleElementOf(doc);
    const created: string[] = [];
    if (!style) {
        style = doc.root.ownerDocument.createElementNS(SVG_NS, 'style');
        doc.root.insertBefore(style, doc.root.firstChild);
        created.push(...doc.assignAnchors(style));
    }
    style.textContent = upsertStyleRule(
        style.textContent || '',
        selector,
        declarations,
    );
    return { ok: true, anchors: [doc.anchorOf(style)], created };
}

function setText(doc: MapDocument, op: SetTextOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    if (!TEXT_TAGS.has(element.localName)) {
        return {
            ok: false,
            reason: `set_text needs a text or tspan element, not <${element.localName}>`,
        };
    }
    if (typeof op.text !== 'string')
        return { ok: false, reason: 'text must be a string' };
    const removed = MapDocument.subtree(element)
        .slice(1)
        .map((line) => doc.anchorOf(line));
    const spans = writeTextLines(element, op.text);
    const created = spans.flatMap((span) => doc.assignAnchors(span));
    return {
        ok: true,
        anchors: [doc.anchorOf(element)],
        created,
        touched: removed,
    };
}

function isPoint(value: unknown): value is [number, number] {
    return (
        Array.isArray(value) &&
        value.length === 2 &&
        value.every((n) => typeof n === 'number' && Number.isFinite(n))
    );
}

function transform(
    doc: MapDocument,
    op: TransformOp,
    geometry: GeometryProvider,
): Outcome {
    const targets = targetsOf(op);
    if (!targets.length)
        return { ok: false, reason: 'transform names no target' };
    if (targets.length > MAX_TRANSFORM_TARGETS) {
        return {
            ok: false,
            reason: `transform names more than ${MAX_TRANSFORM_TARGETS} targets`,
        };
    }
    if (op.translate != null && !isPoint(op.translate)) {
        return { ok: false, reason: 'translate must be [dx, dy]' };
    }
    if (
        op.scale != null &&
        (!isPoint(op.scale) || !op.scale[0] || !op.scale[1])
    ) {
        return {
            ok: false,
            reason: 'scale must be [sx, sy] with non-zero factors',
        };
    }
    if (op.rotate != null && !Number.isFinite(op.rotate)) {
        return { ok: false, reason: 'rotate must be a number of degrees' };
    }
    if (op.origin != null && !isPoint(op.origin)) {
        return { ok: false, reason: 'origin must be [x, y]' };
    }
    if (!op.translate && !op.scale && !op.rotate) {
        return {
            ok: false,
            reason: 'transform has no translate, scale or rotate',
        };
    }
    const resolved = resolveAll(doc, targets);
    if ('error' in resolved) return { ok: false, reason: resolved.error };
    if (resolved.elements.some((element) => isRoot(doc, element))) {
        return { ok: false, reason: 'the root cannot be transformed' };
    }
    const root_space = composeTransform(op);
    const notes: string[] = [];
    for (const element of resolved.elements) {
        const { matrix, converted } = toParentSpace(
            element,
            root_space,
            geometry,
            doc,
        );
        prependTransform(element, matrix);
        if (!converted) notes.push(doc.anchorOf(element));
    }
    return {
        ok: true,
        anchors: resolved.elements.map((element) => doc.anchorOf(element)),
        ...(notes.length
            ? {
                  note: `applied in the element's own space, parent transform unknown: ${notes.join(', ')}`,
              }
            : {}),
    };
}

function remove(doc: MapDocument, op: DeleteOp): Outcome {
    const targets = targetsOf(op);
    if (!targets.length) return { ok: false, reason: 'delete names no target' };
    const resolved = resolveAll(doc, targets);
    if ('error' in resolved) return { ok: false, reason: resolved.error };
    const style_count = doc.root.querySelectorAll('style').length;
    for (const element of resolved.elements) {
        if (isRoot(doc, element))
            return { ok: false, reason: 'the root cannot be deleted' };
        if (element.localName === 'defs')
            return { ok: false, reason: '<defs> cannot be deleted' };
        if (element.localName === 'style' && style_count === 1) {
            return { ok: false, reason: 'the only <style> cannot be deleted' };
        }
    }
    const removed: string[] = [];
    for (const element of resolved.elements) {
        const parent = element.parentElement;
        if (parent) {
            doc.removed_positions.set(doc.anchorOf(element), {
                parent,
                next: element.nextElementSibling,
            });
        }
    }
    for (const element of resolved.elements) {
        for (const descendant of MapDocument.subtree(element)) {
            removed.push(doc.anchorOf(descendant));
        }
        element.remove();
    }
    return {
        ok: true,
        anchors: resolved.elements.map((element) => doc.anchorOf(element)),
        touched: removed,
    };
}

function duplicate(
    doc: MapDocument,
    op: DuplicateOp,
    geometry: GeometryProvider,
): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const source = resolution.element;
    if (isRoot(doc, source))
        return { ok: false, reason: 'the root cannot be duplicated' };
    if (!source.parentElement)
        return { ok: false, reason: 'the target has no parent' };
    const count = op.count ?? 1;
    if (!Number.isInteger(count) || count < 1 || count > MAX_DUPLICATE_COUNT) {
        return {
            ok: false,
            reason: `count must be 1 to ${MAX_DUPLICATE_COUNT}`,
        };
    }
    if (!isPoint(op.translate))
        return { ok: false, reason: 'translate must be [dx, dy]' };
    const existing = idsIn(doc.root);
    const source_id = source.getAttribute('id');
    const ids: (string | null)[] = [];
    let next_number = op.id_pattern
        ? highestInPattern(existing, op.id_pattern) + 1
        : 0;
    for (let k = 0; k < count; k++) {
        let id: string | null = null;
        if (op.id_pattern) {
            id = expandIdPattern(op.id_pattern, next_number++);
            while (existing.has(id))
                id = expandIdPattern(op.id_pattern, next_number++);
        } else if (op.new_id) {
            id = k === 0 ? op.new_id : `${op.new_id}-${k + 1}`;
        } else if (source_id) {
            id = generateId(existing, DEFAULT_ID_PREFIX);
        }
        if (id !== null) {
            const issue = idIssue(id);
            if (issue) return { ok: false, reason: issue };
            if (existing.has(id))
                return { ok: false, reason: `id "${id}" already exists` };
            existing.add(id);
        }
        ids.push(id);
    }
    const created: string[] = [];
    let previous: Element = source;
    const [dx, dy] = op.translate;
    for (let k = 0; k < count; k++) {
        const clone = source.cloneNode(true) as Element;
        for (const descendant of Array.from(clone.querySelectorAll('[id]'))) {
            descendant.removeAttribute('id');
        }
        stripEditorAttributes(clone);
        const id = ids[k];
        if (id) clone.setAttribute('id', id);
        else clone.removeAttribute('id');
        if (dx || dy) {
            const { matrix } = toParentSpace(
                source,
                translation(dx * (k + 1), dy * (k + 1)),
                geometry,
                doc,
            );
            prependTransform(clone, matrix);
        }
        previous.after(clone);
        previous = clone;
        created.push(...doc.assignAnchors(clone));
    }
    return { ok: true, anchors: [doc.anchorOf(source)], created };
}

function insertShape(
    doc: MapDocument,
    op: InsertShapeOp,
    geometry: GeometryProvider,
): Outcome {
    let parent: Element = doc.root;
    if (op.parent) {
        const resolution = doc.resolve(op.parent);
        if (resolution.ok === false)
            return { ok: false, reason: resolution.error };
        parent = resolution.element;
    }
    if (!isRoot(doc, parent) && parent.localName !== 'g') {
        return {
            ok: false,
            reason: `parent must be the root or a <g>, not <${parent.localName}>`,
        };
    }
    let after: Element | null = null;
    let before: Element | null = null;
    let placement_note: string | undefined;
    if (op.after) {
        const resolution = doc.resolve(op.after);
        const former =
            resolution.ok === false && op.after.a
                ? doc.positionOfRemoved(op.after.a)
                : null;
        if (former) {
            parent = former.parent;
            before = former.next;
            placement_note =
                'placed where an element removed by an earlier change was';
        } else if (resolution.ok === false) {
            return { ok: false, reason: resolution.error };
        } else {
            after = resolution.element;
            if (after.parentElement !== parent) {
                return {
                    ok: false,
                    reason: 'after must be a child of the parent',
                };
            }
        }
    }
    if (!(SHAPE_KINDS as readonly string[]).includes(op.kind)) {
        return { ok: false, reason: `kind "${op.kind}" cannot be inserted` };
    }
    const geometry_attrs = SHAPE_GEOMETRY_ATTRS[op.kind];
    const attrs: [string, string][] = [];
    for (const pair of op.attrs || []) {
        const name = typeof pair?.name === 'string' ? pair.name.trim() : '';
        const value = `${pair?.value ?? ''}`;
        if (geometry_attrs.includes(name)) {
            const issue =
                name === 'd'
                    ? checkPathData(value).error
                    : geometryValueIssue(name, value);
            if (issue) return { ok: false, reason: issue };
        } else if (isAllowedAttributeName(name)) {
            const issue = attributeValueIssue(name, value);
            if (issue) return { ok: false, reason: issue };
        } else {
            return {
                ok: false,
                reason: `attribute "${name}" is not allowed on a ${op.kind}`,
            };
        }
        attrs.push([name, value]);
    }
    if (op.kind === 'path' && !attrs.some(([name]) => name === 'd')) {
        return { ok: false, reason: 'a path needs d' };
    }
    const existing = idsIn(doc.root);
    const id = op.new_id || generateId(existing, DEFAULT_ID_PREFIX);
    const issue = idIssue(id);
    if (issue) return { ok: false, reason: issue };
    if (existing.has(id))
        return { ok: false, reason: `id "${id}" already exists` };
    const element = doc.root.ownerDocument.createElementNS(SVG_NS, op.kind);
    for (const [name, value] of attrs) element.setAttribute(name, value);
    element.setAttribute('id', id);
    for (const name of ['opacity', 'fill-opacity', 'stroke-opacity']) {
        const value = element.getAttribute(name);
        if (value !== null) element.style.setProperty(name, value);
    }
    if (
        BOOKING_OVERLAY_ID.test(id) &&
        ['rect', 'path', 'polygon'].includes(op.kind) &&
        !element.hasAttribute('opacity') &&
        !element.hasAttribute('fill-opacity')
    ) {
        element.setAttribute('fill-opacity', BOOKING_OVERLAY_FILL_OPACITY);
        element.style.setProperty('fill-opacity', BOOKING_OVERLAY_FILL_OPACITY);
    }
    if (op.kind === 'text' && typeof op.text === 'string')
        writeTextLines(element, op.text);
    let note: string | undefined = placement_note;
    if (!isRoot(doc, parent)) {
        const parent_ctm = geometry.ctmOf(parent);
        if (!parent_ctm)
            note =
                'parent transform unknown; coordinates taken as parent space';
        else if (!isIdentity(parent_ctm)) {
            const inverse = invert(parent_ctm);
            if (inverse) {
                element.setAttribute('transform', formatTransform(inverse));
                note =
                    'parent is transformed; the shape carries the inverse so its numbers stay in root units';
            }
        }
    }
    if (after) after.after(element);
    else if (before) parent.insertBefore(element, before);
    else parent.appendChild(element);
    const created = doc.assignAnchors(element);
    return { ok: true, anchors: created, created, ...(note ? { note } : {}) };
}

const LINE_HEIGHT = '1.2em';

/**
 * Lines of a text: one line is the element's text; several become one
 * <tspan> each, stacked below the first at the element's x.
 */
export function textLines(text: string): string[] {
    const lines = text.split(/\r?\n/);
    while (lines.length > 1 && !lines[lines.length - 1].trim()) lines.pop();
    return lines;
}

export function writeTextLines(element: Element, text: string): Element[] {
    const lines = textLines(text);
    if (lines.length <= 1 || element.localName !== 'text') {
        element.textContent = text;
        return [];
    }
    element.textContent = '';
    const x = element.getAttribute('x');
    const owner = element.ownerDocument;
    const spans: Element[] = [];
    lines.forEach((line, index) => {
        const span = owner.createElementNS(SVG_NS, 'tspan');
        if (x !== null) span.setAttribute('x', x);
        if (index > 0) span.setAttribute('dy', LINE_HEIGHT);
        span.textContent = line;
        element.appendChild(span);
        spans.push(span);
    });
    return spans;
}

function setId(doc: MapDocument, op: SetIdOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    const old_id = element.getAttribute('id');
    const anchor = doc.anchorOf(element);
    if (op.new_id === null || op.new_id === undefined) {
        if (!old_id) return { ok: true, anchors: [anchor] };
        const dangling = referencesTo(doc.root, old_id).length;
        element.removeAttribute('id');
        return {
            ok: true,
            anchors: [anchor],
            ...(dangling
                ? { note: `${dangling} reference(s) to #${old_id} now dangle` }
                : {}),
        };
    }
    const new_id = `${op.new_id}`;
    const issue = idIssue(new_id);
    if (issue) return { ok: false, reason: issue };
    if (new_id === old_id) return { ok: true, anchors: [anchor] };
    const holder = doc.byId(new_id);
    if (holder && holder !== element)
        return { ok: false, reason: `id "${new_id}" already exists` };
    element.setAttribute('id', new_id);
    const touched = old_id
        ? rewriteReferences(doc.root, old_id, new_id).map((changed) =>
              doc.anchorOf(changed),
          )
        : [];
    return { ok: true, anchors: [anchor], touched };
}

function reorder(doc: MapDocument, op: ReorderOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    if (isRoot(doc, element))
        return { ok: false, reason: 'the root cannot be reordered' };
    const parent = element.parentElement;
    if (!parent) return { ok: false, reason: 'the target has no parent' };
    const modes = [op.before, op.after, op.position].filter(
        (v) => v != null,
    ).length;
    if (modes !== 1)
        return {
            ok: false,
            reason: 'reorder needs exactly one of before, after or position',
        };
    if (op.position) {
        if (op.position === 'first')
            parent.insertBefore(element, parent.firstChild);
        else if (op.position === 'last') parent.appendChild(element);
        else
            return {
                ok: false,
                reason: `position "${op.position}" is not first or last`,
            };
        return { ok: true, anchors: [doc.anchorOf(element)] };
    }
    const sibling_target = (op.before || op.after) as Target;
    const sibling = doc.resolve(sibling_target);
    if (sibling.ok === false) return { ok: false, reason: sibling.error };
    if (sibling.element === element)
        return { ok: false, reason: 'cannot reorder relative to itself' };
    if (sibling.element.parentElement !== parent) {
        return { ok: false, reason: 'reorder only moves among siblings' };
    }
    if (op.before) parent.insertBefore(element, sibling.element);
    else sibling.element.after(element);
    return {
        ok: true,
        anchors: [doc.anchorOf(element)],
        touched: [doc.anchorOf(sibling.element)],
    };
}

function documentOrder(elements: Element[]): Element[] {
    return [...elements].sort((a, b) =>
        a === b
            ? 0
            : a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING
              ? -1
              : 1,
    );
}

function group(doc: MapDocument, op: GroupOp): Outcome {
    if (!Array.isArray(op.targets) || !op.targets.length) {
        return { ok: false, reason: 'group names no targets' };
    }
    const resolved = resolveAll(doc, op.targets);
    if ('error' in resolved) return { ok: false, reason: resolved.error };
    const elements = documentOrder(resolved.elements);
    if (elements.some((element) => isRoot(doc, element))) {
        return { ok: false, reason: 'the root cannot be grouped' };
    }
    const parent = elements[0].parentElement;
    if (
        !parent ||
        elements.some((element) => element.parentElement !== parent)
    ) {
        return { ok: false, reason: 'group targets must share one parent' };
    }
    const existing = idsIn(doc.root);
    const id = op.new_id || generateId(existing, DEFAULT_ID_PREFIX);
    const issue = idIssue(id);
    if (issue) return { ok: false, reason: issue };
    if (existing.has(id))
        return { ok: false, reason: `id "${id}" already exists` };
    const wrapper = doc.root.ownerDocument.createElementNS(SVG_NS, 'g');
    wrapper.setAttribute('id', id);
    parent.insertBefore(wrapper, elements[0]);
    for (const element of elements) wrapper.appendChild(element);
    const created = [doc.assignAnchor(wrapper)];
    return {
        ok: true,
        anchors: elements.map((element) => doc.anchorOf(element)),
        created,
    };
}

function ungroup(doc: MapDocument, op: UngroupOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    if (element.localName !== 'g') {
        return {
            ok: false,
            reason: `ungroup needs a <g>, not <${element.localName}>`,
        };
    }
    const parent = element.parentElement;
    if (!parent) return { ok: false, reason: 'the group has no parent' };
    const group_transform = (element.getAttribute('transform') || '').trim();
    const children = Array.from(element.children);
    for (const child of children) {
        if (group_transform) {
            const own = child.getAttribute('transform') || '';
            child.setAttribute('transform', `${group_transform} ${own}`.trim());
        }
        parent.insertBefore(child, element);
    }
    element.remove();
    return {
        ok: true,
        anchors: [doc.anchorOf(element)],
        touched: children.map((child) => doc.anchorOf(child)),
    };
}

function replaceElement(doc: MapDocument, op: ReplaceElementOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const target = resolution.element;
    if (isRoot(doc, target))
        return { ok: false, reason: 'the root cannot be replaced' };
    if (target.localName === 'defs' || target.localName === 'style') {
        return {
            ok: false,
            reason: `<${target.localName}> cannot be replaced`,
        };
    }
    if (typeof op.markup !== 'string' || !op.markup.trim()) {
        return { ok: false, reason: 'markup is empty' };
    }
    if (
        new TextEncoder().encode(op.markup).length >
        MAX_REPLACEMENT_MARKUP_BYTES
    ) {
        return {
            ok: false,
            reason: `markup is over ${MAX_REPLACEMENT_MARKUP_BYTES / 1024} KB`,
        };
    }
    const purified = purifyMarkup(op.markup);
    if (!purified.element)
        return { ok: false, reason: purified.error || 'markup rejected' };
    const replacement = doc.root.ownerDocument.importNode(
        purified.element,
        true,
    );
    const old_id = target.getAttribute('id');
    const markup_id = replacement.getAttribute('id');
    const notes: string[] = [];
    const outgoing = new Set(idsIn(target));
    const existing = new Set(
        [...idsIn(doc.root)].filter((id) => !outgoing.has(id)),
    );
    if (old_id) {
        replacement.setAttribute('id', old_id);
        if (markup_id && markup_id !== old_id) {
            notes.push(
                `markup id "${markup_id}" ignored; the target keeps "${old_id}"`,
            );
        }
    } else if (markup_id) {
        const issue = idIssue(markup_id);
        if (issue) return { ok: false, reason: issue };
        if (existing.has(markup_id))
            return { ok: false, reason: `id "${markup_id}" already exists` };
    }
    for (const descendant of Array.from(replacement.querySelectorAll('[id]'))) {
        const id = descendant.getAttribute('id') || '';
        const issue = idIssue(id);
        if (issue) return { ok: false, reason: issue };
        if (existing.has(id) || id === old_id) {
            return { ok: false, reason: `id "${id}" already exists` };
        }
        existing.add(id);
    }
    const anchor = doc.anchorOf(target);
    const created = doc.assignAnchors(replacement).slice(1);
    replacement.setAttribute(ANCHOR_ATTR, anchor);
    target.replaceWith(replacement);
    if (purified.report.removed.length) {
        notes.push(
            `sanitiser removed ${purified.report.removed
                .map((entry) => entry.name || entry.tag)
                .join(', ')}`,
        );
    }
    return {
        ok: true,
        anchors: [anchor],
        created,
        ...(notes.length ? { note: notes.join('; ') } : {}),
    };
}

function replacePath(doc: MapDocument, op: ReplacePathOp): Outcome {
    const resolution = doc.resolve(op.target);
    if (resolution.ok === false) return { ok: false, reason: resolution.error };
    const element = resolution.element;
    if (element.localName !== 'path') {
        return {
            ok: false,
            reason: `replace_path needs a <path>, not <${element.localName}>`,
        };
    }
    const check = checkPathData(op.d);
    if (!check.ok)
        return { ok: false, reason: check.error || 'path data is invalid' };
    element.setAttribute('d', op.d.trim());
    return { ok: true, anchors: [doc.anchorOf(element)] };
}
