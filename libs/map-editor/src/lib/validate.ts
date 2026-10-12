import { applyOps, ApplyOptions, ApplyResult } from './apply';
import {
    isAllowedAttributeName,
    MAX_BYTE_GROWTH,
    MAX_ELEMENT_GROWTH,
    MAX_OPS_PER_PROPOSAL,
    MAX_REPLACEMENT_MARKUP_BYTES,
    OFF_CANVAS_TOLERANCE,
    REFERENCE_ATTRS,
    REPLACEMENT_DENIED_TAGS,
    SHAPE_GEOMETRY_ATTRS,
    SHAPE_KINDS,
    STYLE_PROPERTY_ALLOW_LIST,
    SVG_NS,
    TEXT_TAGS,
    XLINK_NS,
} from './constants';
import { BBox, GeometryProvider } from './geometry';
import { idIssue, idsIn, referencesTo, styleReferencesTo } from './ids';
import { MapDocument, Target } from './map-document';
import {
    isOpKind,
    MapOp,
    OP_BOOKKEEPING_FIELDS,
    OpKind,
    targetsOf,
} from './ops';
import { OPS_SCHEMA, OpVariantSchema } from './ops-schema';
import { checkPathData } from './path-data';
import { ProtectedIdSet } from './protected-ids';
import { RenderCheck } from './render-check';
import { isUnsafeCssValue, purifyMarkup } from './sanitise';
import {
    elementsMatching,
    isValidSelector,
    StyleResolver,
} from './style-resolution';
import { attributeValueIssue, geometryValueIssue } from './value-syntax';

export type IssueLevel = 'error' | 'warning' | 'info';

export interface ValidationIssue {
    level: IssueLevel;
    code: string;
    message: string;
}

export interface OpValidation {
    index: number;
    op: MapOp;
    issues: ValidationIssue[];
    /** Something to tick at all; false for no_change and ask. */
    actionable: boolean;
    /** Ticked in the review by default: no errors and no warnings. */
    checked_by_default: boolean;
    /** Cannot be ticked: an error, or a protected id without an unlock. */
    locked: boolean;
    /** Applied in the trial document. */
    applied: boolean;
    /** Elements a style rule reaches. */
    affected?: number;
    note?: string;
}

/**
 * Per-op issues plus the batch checks for the accepted set as given. The
 * batch checks reflect `accepted`, not `checked_by_default`; re-validate
 * with the person's selection before applying it.
 */
export interface ValidationResult {
    ops: OpValidation[];
    issues: ValidationIssue[];
    blocking: boolean;
    element_delta: number;
    byte_delta: number;
    touched: string[];
    trial: MapDocument | null;
}

export interface ValidationContext {
    protected?: ProtectedIdSet;
    /** Protected ids the person has explicitly unlocked for delete or rename. */
    unlocked?: Iterable<string>;
    /** Indices of ops to include in the trial; every op when absent. */
    accepted?: ReadonlySet<number>;
    render_check?: RenderCheck;
    geometry?: GeometryProvider;
    max_ops?: number;
    /** The applier used for the dry run; `applyOps` unless a test substitutes one. */
    apply?: (
        doc: MapDocument,
        ops: readonly MapOp[],
        options?: ApplyOptions,
    ) => ApplyResult;
}

const ROOT_INVARIANT_ATTRS = [
    'viewBox',
    'width',
    'height',
    'preserveAspectRatio',
    'xmlns',
];
const PAINT_PROPERTIES = new Set([
    'fill',
    'stroke',
    'stroke-width',
    'stroke-dasharray',
    'fill-opacity',
    'stroke-opacity',
    'opacity',
    'font-size',
    'font-family',
    'font-weight',
]);
const INLINE_STYLE_PROPERTIES = new Set(['fill', 'stroke']);

function issue(
    level: IssueLevel,
    code: string,
    message: string,
): ValidationIssue {
    return { level, code, message };
}

type Variant = OpVariantSchema;
type PropertySchema = {
    type?: string | string[];
    enum?: unknown[];
    anyOf?: PropertySchema[];
    $ref?: string;
    items?: PropertySchema;
    properties?: Record<string, PropertySchema>;
};

function variantFor(kind: OpKind): Variant | undefined {
    return OPS_SCHEMA.properties.ops.items.anyOf.find(
        (candidate) => candidate.properties.op.enum[0] === kind,
    );
}

function allowsNull(schema: PropertySchema): boolean {
    if (Array.isArray(schema.type)) return schema.type.includes('null');
    if (schema.type === 'null') return true;
    return !!schema.anyOf?.some((option) => allowsNull(option));
}

function definitionFor(ref: string): PropertySchema | null {
    const definition = OPS_SCHEMA.$defs[ref.replace('#/$defs/', '')];
    return definition ? (definition as unknown as PropertySchema) : null;
}

/** A closed object: no unknown keys, members null only where allowed. */
function objectMatches(value: unknown, schema: PropertySchema): boolean {
    if (typeof value !== 'object' || value === null || Array.isArray(value))
        return false;
    const properties = schema.properties || {};
    const record = value as Record<string, unknown>;
    if (Object.keys(record).some((key) => !(key in properties))) return false;
    return Object.entries(properties).every(([key, property]) => {
        const member = record[key];
        if (member === undefined || member === null)
            return allowsNull(property);
        return typeMatches(member, property);
    });
}

function typeMatches(value: unknown, schema: PropertySchema): boolean {
    if (schema.$ref) {
        const definition = definitionFor(schema.$ref);
        return definition
            ? objectMatches(value, definition)
            : typeof value === 'object' &&
                  value !== null &&
                  !Array.isArray(value);
    }
    if (schema.anyOf)
        return schema.anyOf.some((option) => typeMatches(value, option));
    const types = Array.isArray(schema.type)
        ? schema.type
        : schema.type
          ? [schema.type]
          : [];
    if (schema.enum && !schema.enum.includes(value)) return false;
    if (!types.length) return true;
    return types.some((type) => {
        switch (type) {
            case 'string':
                return typeof value === 'string';
            case 'number':
                return typeof value === 'number' && Number.isFinite(value);
            case 'integer':
                return Number.isInteger(value);
            case 'boolean':
                return typeof value === 'boolean';
            case 'array':
                return (
                    Array.isArray(value) &&
                    (!schema.items ||
                        value.every((item) =>
                            typeMatches(item, schema.items as PropertySchema),
                        ))
                );
            case 'object':
                return schema.properties
                    ? objectMatches(value, schema)
                    : typeof value === 'object' &&
                          value !== null &&
                          !Array.isArray(value);
            case 'null':
                return value === null;
            default:
                return false;
        }
    });
}

/** Shape check against the op's variant in ops-schema.json. */
export function schemaIssues(op: unknown): ValidationIssue[] {
    if (typeof op !== 'object' || op === null || Array.isArray(op)) {
        return [issue('error', 'schema', 'op is not an object')];
    }
    const record = op as Record<string, unknown>;
    if (!isOpKind(record['op'])) {
        return [
            issue(
                'error',
                'unknown_op',
                `"${String(record['op'])}" is not an operation`,
            ),
        ];
    }
    const variant = variantFor(record['op']);
    if (!variant)
        return [
            issue('error', 'unknown_op', `"${record['op']}" has no schema`),
        ];
    const issues: ValidationIssue[] = [];
    if (record['id'] !== undefined && typeof record['id'] !== 'string') {
        issues.push(
            issue('error', 'schema', `${record['op']}.id has the wrong type`),
        );
    }
    if (
        record['server_issue'] != null &&
        typeof record['server_issue'] !== 'string'
    ) {
        issues.push(
            issue(
                'error',
                'schema',
                `${record['op']}.server_issue has the wrong type`,
            ),
        );
    }
    for (const name of Object.keys(record)) {
        if (OP_BOOKKEEPING_FIELDS.has(name)) continue;
        if (!(name in variant.properties)) {
            issues.push(
                issue(
                    'error',
                    'schema',
                    `${record['op']} has no field "${name}"`,
                ),
            );
        }
    }
    for (const [name, schema] of Object.entries(variant.properties)) {
        if (name === 'op') continue;
        const value = record[name];
        const property = schema as PropertySchema;
        if (value === undefined || value === null) {
            if (!allowsNull(property)) {
                issues.push(
                    issue('error', 'schema', `${record['op']} needs "${name}"`),
                );
            }
            continue;
        }
        if (!typeMatches(value, property)) {
            issues.push(
                issue(
                    'error',
                    'schema',
                    `${record['op']}.${name} has the wrong type`,
                ),
            );
        }
    }
    return issues;
}

function subtreeSize(element: Element): number {
    return 1 + element.querySelectorAll('*').length;
}

function protectedIdsIn(
    element: Element,
    protected_ids: ProtectedIdSet,
): string[] {
    return [...idsIn(element)].filter((id) => protected_ids.has(id));
}

function outsideViewBox(bbox: BBox | null, doc: MapDocument): boolean {
    if (!bbox) return false;
    const { x, y, width, height } = doc.view_box;
    const tolerance_x = width * OFF_CANVAS_TOLERANCE;
    const tolerance_y = height * OFF_CANVAS_TOLERANCE;
    const [bx, by, bw, bh] = bbox;
    return (
        bx < x - tolerance_x ||
        by < y - tolerance_y ||
        bx + bw > x + width + tolerance_x ||
        by + bh > y + height + tolerance_y
    );
}

/** Whether a presentation value stops an element from showing. */
function hidesElement(name: string, value: string): boolean {
    const trimmed = value.trim();
    if (name === 'visibility') return trimmed !== 'visible';
    if (name === 'opacity' || name === 'fill-opacity')
        return parseFloat(trimmed) === 0;
    return false;
}

/** Deny-list scan of raw markup, before any sanitiser touches it. */
export function markupDenyListIssue(markup: string): string | null {
    const wrapped = `<svg xmlns="${SVG_NS}" xmlns:xlink="${XLINK_NS}">${markup}</svg>`;
    const doc = new DOMParser().parseFromString(wrapped, 'image/svg+xml');
    if (
        doc.querySelector('parsererror') ||
        doc.documentElement.localName !== 'svg'
    ) {
        return 'markup is not well-formed XML';
    }
    for (const element of Array.from(
        doc.documentElement.querySelectorAll('*'),
    )) {
        const tag = element.localName.toLowerCase();
        if (REPLACEMENT_DENIED_TAGS.has(tag))
            return `<${element.localName}> is not allowed`;
        if (element.namespaceURI !== SVG_NS)
            return `<${element.tagName}> is outside the SVG namespace`;
        for (const name of element.getAttributeNames()) {
            const lower = name.toLowerCase();
            const value = (element.getAttribute(name) || '').trim();
            if (lower.startsWith('on'))
                return `attribute ${name} is not allowed`;
            if (REFERENCE_ATTRS.has(lower) || lower.endsWith(':href')) {
                const data_image =
                    tag === 'image' && /^data:image\//i.test(value);
                if (!value.startsWith('#') && !data_image) {
                    return `${name} must reference an id in the document`;
                }
            }
            if (lower === 'style' && isUnsafeCssValue(value))
                return 'style contains an unsafe value';
        }
    }
    return null;
}

interface Step {
    index: number;
    op: MapOp;
    validation: OpValidation;
    /** Anchors of the targets, resolved before the op ran. */
    anchors: string[];
    /** Anchors removed from the document by this op (original anchors only). */
    removed: string[];
    /** Existing anchors the op may change. */
    changed: string[];
    adds: boolean;
    expected_delta: number;
    created: string[];
}

class Validator {
    public readonly steps: Step[] = [];
    private readonly _protected: ProtectedIdSet;
    private readonly _unlocked: Set<string>;
    private readonly _accepted: ReadonlySet<number> | null;
    private readonly _geometry: GeometryProvider;
    private readonly _original_hashes = new Map<string, string>();
    private _resolver: StyleResolver | null = null;
    private _resolver_version = -1;

    constructor(
        private readonly _doc: MapDocument,
        public readonly trial: MapDocument,
        private readonly _context: ValidationContext,
    ) {
        this._protected = _context.protected || _doc.protected;
        this._unlocked = new Set(_context.unlocked || []);
        this._accepted = _context.accepted || null;
        this._geometry = _context.geometry || _doc.geometry;
        for (const element of _doc.elements()) {
            this._original_hashes.set(
                _doc.anchorOf(element),
                _doc.hashOf(element),
            );
        }
    }

    public run(ops: readonly MapOp[]): void {
        ops.forEach((op, index) => this._step(op, index));
    }

    private _resolverFor(doc: MapDocument): StyleResolver {
        if (!this._resolver || this._resolver_version !== doc.version) {
            this._resolver = new StyleResolver(doc.root, doc.styleRules());
            this._resolver_version = doc.version;
        }
        return this._resolver;
    }

    private _step(op: MapOp, index: number): void {
        const issues = schemaIssues(op);
        const step: Step = {
            index,
            op,
            validation: {
                index,
                op,
                issues,
                actionable: op.op !== 'no_change' && op.op !== 'ask',
                checked_by_default: false,
                locked: false,
                applied: false,
            },
            anchors: [],
            removed: [],
            changed: [],
            adds: false,
            expected_delta: 0,
            created: [],
        };
        this.steps.push(step);
        const malformed = issues.length > 0;
        if (typeof op.server_issue === 'string' && op.server_issue.trim()) {
            step.validation.issues.push(
                issue('warning', 'server_issue', op.server_issue.trim()),
            );
        }
        if (!malformed && step.validation.actionable) this._policy(step);
        const errors = step.validation.issues.filter(
            (i) => i.level === 'error',
        );
        const warnings = step.validation.issues.filter(
            (i) => i.level === 'warning',
        );
        step.validation.locked = step.validation.locked || errors.length > 0;
        step.validation.checked_by_default =
            step.validation.actionable &&
            !step.validation.locked &&
            !warnings.length;
        const accepted = this._accepted ? this._accepted.has(index) : true;
        if (!step.validation.actionable || step.validation.locked || !accepted)
            return;
        this._apply(step);
    }

    private _resolveTargets(
        step: Step,
        targets: readonly Target[],
    ): Element[] | null {
        const elements: Element[] = [];
        for (const target of targets) {
            const resolution = this.trial.resolve(target);
            if (!resolution.ok) {
                step.validation.issues.push(
                    issue('error', 'unknown_target', resolution.error),
                );
                return null;
            }
            const element = resolution.element;
            const anchor = this.trial.anchorOf(element);
            if (target.h) {
                const original = this._original_hashes.get(anchor);
                const current = this.trial.hashOf(element);
                if (target.h !== original && target.h !== current) {
                    step.validation.issues.push(
                        issue(
                            'error',
                            'stale_hash',
                            `${anchor} has changed since the index was built (hash ${target.h} is stale)`,
                        ),
                    );
                    return null;
                }
            }
            if (!elements.includes(element)) elements.push(element);
        }
        step.anchors = elements.map((element) => this.trial.anchorOf(element));
        return elements;
    }

    private _lockUnlessUnlocked(
        step: Step,
        ids: string[],
        code: string,
        message: string,
    ): void {
        step.validation.issues.push(issue('warning', code, message));
        if (!ids.every((id) => this._unlocked.has(id)))
            step.validation.locked = true;
    }

    private _policy(step: Step): void {
        const op = step.op;
        const push = (level: IssueLevel, code: string, message: string) =>
            step.validation.issues.push(issue(level, code, message));
        switch (op.op) {
            case 'set_attr': {
                const name = (op.name || '').trim();
                if (!isAllowedAttributeName(name)) {
                    push(
                        'error',
                        'forbidden_attribute',
                        `attribute "${name}" cannot be set`,
                    );
                    return;
                }
                if (op.value != null) {
                    const value_issue = attributeValueIssue(
                        name,
                        `${op.value}`,
                    );
                    if (value_issue) {
                        push('error', 'bad_value', value_issue);
                        return;
                    }
                }
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                const element = elements[0];
                step.changed = [...step.anchors];
                const id = element.getAttribute('id') || '';
                if (op.value != null && hidesElement(name, `${op.value}`)) {
                    const hidden = protectedIdsIn(element, this._protected);
                    if (hidden.length) {
                        this._lockUnlessUnlocked(
                            step,
                            hidden,
                            'protected_hidden',
                            `hides ${hidden.map((h) => this._protected.labelOf(h)).join(', ')}, which bookings bind to`,
                        );
                    }
                }
                if (PAINT_PROPERTIES.has(name) && op.value != null)
                    this._effectiveStyle(step, element, name);
                if (id && this._protected.has(id) && name === 'class') {
                    push(
                        'info',
                        'protected_class',
                        `changes the class of bound element ${this._protected.labelOf(id)}`,
                    );
                }
                return;
            }
            case 'set_style_rule': {
                const selector = (op.selector || '').trim();
                if (
                    !selector ||
                    selector === '*' ||
                    selector.includes(',') ||
                    isUnsafeCssValue(selector)
                ) {
                    push(
                        'error',
                        'bad_selector',
                        `selector "${selector}" is not allowed`,
                    );
                    return;
                }
                if (!isValidSelector(this.trial.root, selector)) {
                    push(
                        'error',
                        'bad_selector',
                        `selector "${selector}" does not parse`,
                    );
                    return;
                }
                for (const { name, value } of op.declarations || []) {
                    const property =
                        typeof name === 'string' ? name.trim() : '';
                    if (!STYLE_PROPERTY_ALLOW_LIST.has(property)) {
                        push(
                            'error',
                            'forbidden_property',
                            `property "${property}" cannot be set`,
                        );
                        return;
                    }
                    if (typeof value !== 'string' || isUnsafeCssValue(value)) {
                        push(
                            'error',
                            'bad_value',
                            `value for "${property}" is not allowed`,
                        );
                        return;
                    }
                    const value_issue = attributeValueIssue(property, value);
                    if (value_issue) {
                        push('error', 'bad_value', value_issue);
                        return;
                    }
                }
                const matched = elementsMatching(this.trial.root, selector);
                step.validation.affected = matched.length;
                push(
                    'info',
                    'affects',
                    `affects ${matched.length} element${matched.length === 1 ? '' : 's'}`,
                );
                const hides = (op.declarations || []).some(({ name, value }) =>
                    hidesElement(name.trim(), value),
                );
                if (hides) {
                    const hidden = [
                        ...new Set(
                            matched.flatMap((element) =>
                                protectedIdsIn(element, this._protected),
                            ),
                        ),
                    ];
                    if (hidden.length) {
                        this._lockUnlessUnlocked(
                            step,
                            hidden,
                            'protected_hidden',
                            `hides ${hidden.length} bound element(s)`,
                        );
                    }
                }
                const styles = Array.from(
                    this.trial.root.querySelectorAll('style'),
                );
                step.changed = styles.map((style) =>
                    this.trial.anchorOf(style),
                );
                step.adds = styles.length === 0;
                step.expected_delta = styles.length === 0 ? 1 : 0;
                return;
            }
            case 'set_text': {
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                if (!TEXT_TAGS.has(elements[0].localName)) {
                    push(
                        'error',
                        'not_text',
                        `${step.anchors[0]} is a <${elements[0].localName}>, not text`,
                    );
                    return;
                }
                step.changed = [...step.anchors];
                const lines = MapDocument.subtree(elements[0]).slice(1);
                if (lines.length) {
                    step.removed = lines.map((line) =>
                        this.trial.anchorOf(line),
                    );
                    step.expected_delta = -lines.length;
                    push(
                        'info',
                        'replaces_lines',
                        `replaces ${lines.length} <tspan> line${lines.length === 1 ? '' : 's'} with one run of text`,
                    );
                }
                push(
                    'info',
                    'text_hidden_in_explore',
                    'explore views hide text by default',
                );
                return;
            }
            case 'transform': {
                const targets = targetsOf(op);
                if (!targets.length) {
                    push('error', 'schema', 'transform names no target');
                    return;
                }
                const elements = this._resolveTargets(step, targets);
                if (!elements) return;
                if (elements.some((element) => element === this.trial.root)) {
                    push('error', 'root', 'the root cannot be transformed');
                    return;
                }
                step.changed = [...step.anchors];
                return;
            }
            case 'delete': {
                const targets = targetsOf(op);
                if (!targets.length) {
                    push('error', 'schema', 'delete names no target');
                    return;
                }
                const elements = this._resolveTargets(step, targets);
                if (!elements) return;
                const bound: string[] = [];
                for (const element of elements) {
                    if (element === this.trial.root) {
                        push('error', 'root', 'the root cannot be deleted');
                        return;
                    }
                    bound.push(...protectedIdsIn(element, this._protected));
                    for (const descendant of MapDocument.subtree(element)) {
                        step.removed.push(this.trial.anchorOf(descendant));
                    }
                    step.expected_delta -= subtreeSize(element);
                }
                step.changed = [...step.removed];
                if (bound.length) {
                    this._lockUnlessUnlocked(
                        step,
                        bound,
                        'protected_delete',
                        `breaks the booking link for ${bound.map((id) => this._protected.labelOf(id)).join(', ')}`,
                    );
                }
                this._danglingWarning(step, elements);
                return;
            }
            case 'duplicate': {
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                if (op.new_id) {
                    const id_issue = idIssue(op.new_id);
                    if (id_issue) {
                        push('error', 'bad_id', id_issue);
                        return;
                    }
                    if (this.trial.byId(op.new_id)) {
                        push(
                            'error',
                            'duplicate_id',
                            `id "${op.new_id}" already exists`,
                        );
                        return;
                    }
                    if (this._protected.has(op.new_id)) {
                        push(
                            'warning',
                            'takes_protected_id',
                            `"${op.new_id}" is a bound id`,
                        );
                    }
                }
                step.adds = true;
                step.expected_delta =
                    (op.count ?? 1) * subtreeSize(elements[0]);
                return;
            }
            case 'insert_shape': {
                if (!(SHAPE_KINDS as readonly string[]).includes(op.kind)) {
                    push(
                        'error',
                        'bad_kind',
                        `kind "${op.kind}" cannot be inserted`,
                    );
                    return;
                }
                const geometry_attrs = SHAPE_GEOMETRY_ATTRS[op.kind];
                for (const pair of op.attrs || []) {
                    const name =
                        typeof pair?.name === 'string' ? pair.name.trim() : '';
                    const value = `${pair?.value ?? ''}`;
                    let value_issue: string | null | undefined;
                    if (geometry_attrs.includes(name)) {
                        value_issue =
                            name === 'd'
                                ? checkPathData(value).error
                                : geometryValueIssue(name, value);
                    } else if (isAllowedAttributeName(name)) {
                        value_issue = attributeValueIssue(name, value);
                    } else {
                        value_issue = `attribute "${name}" is not allowed on a ${op.kind}`;
                    }
                    if (value_issue) {
                        push('error', 'bad_value', value_issue);
                        return;
                    }
                }
                if (op.new_id) {
                    const id_issue = idIssue(op.new_id);
                    if (id_issue) {
                        push('error', 'bad_id', id_issue);
                        return;
                    }
                    if (this.trial.byId(op.new_id)) {
                        push(
                            'error',
                            'duplicate_id',
                            `id "${op.new_id}" already exists`,
                        );
                        return;
                    }
                    if (this._protected.has(op.new_id)) {
                        push(
                            'warning',
                            'takes_protected_id',
                            `"${op.new_id}" is a bound id`,
                        );
                    }
                }
                if (op.parent) {
                    const parents = this._resolveTargets(step, [op.parent]);
                    if (!parents) return;
                    if (
                        parents[0] !== this.trial.root &&
                        parents[0].localName !== 'g'
                    ) {
                        push(
                            'error',
                            'bad_parent',
                            `parent must be the root or a <g>`,
                        );
                        return;
                    }
                }
                if (op.after && !this._resolveTargets(step, [op.after])) return;
                step.anchors = [];
                step.adds = true;
                step.expected_delta = 1;
                return;
            }
            case 'set_id': {
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                const element = elements[0];
                const old_id = element.getAttribute('id') || '';
                step.changed = [...step.anchors];
                if (op.new_id != null) {
                    const id_issue = idIssue(op.new_id);
                    if (id_issue) {
                        push('error', 'bad_id', id_issue);
                        return;
                    }
                    const holder = this.trial.byId(op.new_id);
                    if (holder && holder !== element) {
                        push(
                            'error',
                            'duplicate_id',
                            `id "${op.new_id}" already exists`,
                        );
                        return;
                    }
                    if (
                        this._protected.has(op.new_id) &&
                        op.new_id !== old_id
                    ) {
                        push(
                            'warning',
                            'takes_protected_id',
                            `"${op.new_id}" is bound to ${this._protected.labelOf(op.new_id)}`,
                        );
                    }
                }
                if (old_id) {
                    step.changed.push(
                        ...referencesTo(this.trial.root, old_id).map((ref) =>
                            this.trial.anchorOf(ref),
                        ),
                    );
                    const in_styles = styleReferencesTo(
                        this.trial.root,
                        old_id,
                    );
                    if (in_styles && op.new_id !== old_id) {
                        push(
                            'info',
                            'style_reference',
                            `${in_styles} url(#${old_id}) reference${in_styles === 1 ? '' : 's'} in <style> rules ${in_styles === 1 ? 'is' : 'are'} not rewritten`,
                        );
                    }
                    if (this._protected.has(old_id) && op.new_id !== old_id) {
                        this._lockUnlessUnlocked(
                            step,
                            [old_id],
                            'protected_rename',
                            `breaks the booking link for ${this._protected.labelOf(old_id)}`,
                        );
                    }
                }
                if (element.localName === 'g' && op.new_id)
                    this._groupFillWarning(step, element, op.new_id);
                return;
            }
            case 'reorder': {
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                const modes = [op.before, op.after, op.position].filter(
                    (v) => v != null,
                ).length;
                if (modes !== 1) {
                    push(
                        'error',
                        'schema',
                        'reorder needs exactly one of before, after or position',
                    );
                    return;
                }
                const sibling_target = op.before || op.after;
                if (sibling_target) {
                    const sibling = this.trial.resolve(sibling_target);
                    if (!sibling.ok) {
                        push('error', 'unknown_target', sibling.error);
                        return;
                    }
                    if (
                        sibling.element.parentElement !==
                        elements[0].parentElement
                    ) {
                        push(
                            'error',
                            'not_sibling',
                            'reorder only moves among siblings',
                        );
                        return;
                    }
                }
                return;
            }
            case 'group': {
                const elements = this._resolveTargets(step, op.targets || []);
                if (!elements || !elements.length) {
                    if (elements)
                        push('error', 'schema', 'group names no targets');
                    return;
                }
                const parent = elements[0].parentElement;
                if (
                    !parent ||
                    elements.some((element) => element.parentElement !== parent)
                ) {
                    push(
                        'error',
                        'not_sibling',
                        'group targets must share one parent',
                    );
                    return;
                }
                if (op.new_id) {
                    const id_issue = idIssue(op.new_id);
                    if (id_issue) {
                        push('error', 'bad_id', id_issue);
                        return;
                    }
                    if (this.trial.byId(op.new_id)) {
                        push(
                            'error',
                            'duplicate_id',
                            `id "${op.new_id}" already exists`,
                        );
                        return;
                    }
                }
                step.changed = [...step.anchors];
                step.adds = true;
                step.expected_delta = 1;
                return;
            }
            case 'ungroup': {
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                const element = elements[0];
                if (element.localName !== 'g') {
                    push(
                        'error',
                        'not_group',
                        `${step.anchors[0]} is a <${element.localName}>, not a group`,
                    );
                    return;
                }
                step.removed = [...step.anchors];
                step.changed = Array.from(element.children).map((child) =>
                    this.trial.anchorOf(child),
                );
                step.expected_delta = -1;
                const id = element.getAttribute('id') || '';
                if (id && this._protected.has(id)) {
                    this._lockUnlessUnlocked(
                        step,
                        [id],
                        'protected_ungroup',
                        `removes ${this._protected.labelOf(id)}, which bookings bind to`,
                    );
                }
                if (id) {
                    const kept = idsIn(element);
                    kept.delete(id);
                    this._danglingWarning(step, [element], kept);
                }
                return;
            }
            case 'replace_element': {
                if (typeof op.markup !== 'string' || !op.markup.trim()) {
                    push('error', 'bad_markup', 'markup is empty');
                    return;
                }
                if (
                    new TextEncoder().encode(op.markup).length >
                    MAX_REPLACEMENT_MARKUP_BYTES
                ) {
                    push(
                        'error',
                        'bad_markup',
                        `markup is over ${MAX_REPLACEMENT_MARKUP_BYTES / 1024} KB`,
                    );
                    return;
                }
                const denied = markupDenyListIssue(op.markup);
                if (denied) {
                    push('error', 'denied_markup', denied);
                    return;
                }
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                const element = elements[0];
                if (element === this.trial.root) {
                    push('error', 'root', 'the root cannot be replaced');
                    return;
                }
                const purified = purifyMarkup(op.markup);
                if (!purified.element) {
                    push(
                        'error',
                        'bad_markup',
                        purified.error || 'markup rejected',
                    );
                    return;
                }
                step.changed = [...step.anchors];
                step.removed = MapDocument.subtree(element)
                    .slice(1)
                    .map((descendant) => this.trial.anchorOf(descendant));
                step.adds = true;
                step.expected_delta =
                    subtreeSize(purified.element) - subtreeSize(element);
                const bound = protectedIdsIn(element, this._protected).filter(
                    (id) => id !== element.getAttribute('id'),
                );
                if (bound.length) {
                    this._lockUnlessUnlocked(
                        step,
                        bound,
                        'protected_delete',
                        `removes ${bound.map((id) => this._protected.labelOf(id)).join(', ')}, which bookings bind to`,
                    );
                }
                const kept = idsIn(purified.element);
                const own_id = element.getAttribute('id');
                if (own_id) kept.add(own_id);
                this._danglingWarning(step, [element], kept);
                return;
            }
            case 'replace_path': {
                const check = checkPathData(op.d);
                if (!check.ok) {
                    push(
                        'error',
                        'bad_path',
                        check.error || 'path data is invalid',
                    );
                    return;
                }
                const elements = this._resolveTargets(step, [op.target]);
                if (!elements) return;
                if (elements[0].localName !== 'path') {
                    push(
                        'error',
                        'not_path',
                        `${step.anchors[0]} is a <${elements[0].localName}>, not a path`,
                    );
                    return;
                }
                step.changed = [...step.anchors];
                return;
            }
            default:
                return;
        }
    }

    /** Warn when a paint property set on the element cannot show. */
    private _effectiveStyle(step: Step, element: Element, name: string): void {
        const resolver = this._resolverFor(this.trial);
        const leaves = Array.from(element.querySelectorAll('*')).filter(
            (leaf) => leaf.children.length === 0,
        );
        if (!leaves.length) {
            if (
                !INLINE_STYLE_PROPERTIES.has(name) &&
                resolver.cssValue(element, name)
            ) {
                step.validation.issues.push(
                    issue(
                        'warning',
                        'no_visible_effect',
                        `a <style> rule already sets ${name} on ${step.anchors[0]}, so the attribute will not show`,
                    ),
                );
            }
            return;
        }
        const blocked = leaves.filter((leaf) => {
            let current: Element | null = leaf;
            while (current && current !== element) {
                if (resolver.own(current, name)) return true;
                current = current.parentElement;
            }
            return false;
        });
        if (blocked.length === leaves.length) {
            step.validation.issues.push(
                issue(
                    'warning',
                    'no_visible_effect',
                    `every child of ${step.anchors[0]} sets its own ${name}, so the change will not show`,
                ),
            );
        } else if (blocked.length) {
            step.validation.issues.push(
                issue(
                    'info',
                    'partial_effect',
                    `${blocked.length} of ${leaves.length} children set their own ${name} and keep it`,
                ),
            );
        }
    }

    /** Contract warning: an id on a <g> whose children paint themselves cannot show status colours. */
    private _groupFillWarning(step: Step, element: Element, id: string): void {
        const resolver = this._resolverFor(this.trial);
        const children = Array.from(element.children);
        if (
            !children.length ||
            children.some((child) => !resolver.own(child, 'fill'))
        )
            return;
        const bound = this._protected.has(id);
        step.validation.issues.push(
            issue(
                bound ? 'warning' : 'info',
                'group_fill',
                `the children of this group set their own fill, so status colouring on ${bound ? this._protected.labelOf(id) : id} will not show`,
            ),
        );
        if (bound) step.validation.checked_by_default = false;
    }

    /** Warn when ids inside removed elements are still referenced from outside them. */
    private _danglingWarning(
        step: Step,
        removed: Element[],
        kept: ReadonlySet<string> = new Set(),
    ): void {
        const gone = new Set(
            removed.flatMap((element) => MapDocument.subtree(element)),
        );
        const dangling: string[] = [];
        for (const element of removed) {
            for (const id of idsIn(element)) {
                if (kept.has(id)) continue;
                const outside = referencesTo(this.trial.root, id).filter(
                    (ref) => !gone.has(ref),
                );
                if (outside.length) dangling.push(`#${id}`);
            }
        }
        if (!dangling.length) return;
        step.validation.issues.push(
            issue(
                'warning',
                'dangling_reference',
                `other elements reference ${dangling.join(', ')}, which this removes`,
            ),
        );
    }

    private _apply(step: Step): void {
        const apply = this._context.apply || applyOps;
        const result = apply(this.trial, [step.op], {
            geometry: this._geometry,
        });
        if (result.rejected.length) {
            step.validation.issues.push(
                issue('error', 'rejected', result.rejected[0].reason),
            );
            step.validation.locked = true;
            step.validation.checked_by_default = false;
            return;
        }
        const applied = result.applied[0];
        step.validation.applied = true;
        step.created = applied.created;
        if (applied.note) step.validation.note = applied.note;
        this._afterApply(step, applied.anchors, applied.created);
    }

    private _afterApply(
        step: Step,
        anchors: string[],
        created: string[],
    ): void {
        const op = step.op;
        if (op.op === 'replace_element') {
            const element = this.trial.byAnchor(anchors[0]);
            const id = element?.getAttribute('id');
            if (element && id && element.localName === 'g')
                this._groupFillWarning(step, element, id);
        }
        const moved =
            op.op === 'transform' ||
            op.op === 'replace_path' ||
            op.op === 'replace_element'
                ? anchors
                : op.op === 'duplicate' || op.op === 'insert_shape'
                  ? created
                  : [];
        if (!moved.length) return;
        const off: string[] = [];
        const bound: string[] = [];
        for (const anchor of moved) {
            const element = this.trial.byAnchor(anchor);
            if (!element || element.parentElement?.localName === 'defs')
                continue;
            if (outsideViewBox(this._geometry.bboxOf(element), this.trial)) {
                off.push(anchor);
                bound.push(...protectedIdsIn(element, this._protected));
            }
        }
        if (!off.length) return;
        step.validation.issues.push(
            issue(
                'warning',
                bound.length ? 'protected_off_canvas' : 'off_canvas',
                bound.length
                    ? `moves ${bound.map((id) => this._protected.labelOf(id)).join(', ')} off the canvas`
                    : `${off.join(', ')} ends up outside the viewBox`,
            ),
        );
        step.validation.checked_by_default = false;
    }
}

function batchChecks(
    doc: MapDocument,
    trial: MapDocument,
    steps: readonly Step[],
): { issues: ValidationIssue[]; element_delta: number; byte_delta: number } {
    const issues: ValidationIssue[] = [];
    const applied = steps.filter((step) => step.validation.applied);
    for (const name of ROOT_INVARIANT_ATTRS) {
        if (doc.root.getAttribute(name) !== trial.root.getAttribute(name)) {
            issues.push(
                issue('error', 'root_changed', `the root ${name} changed`),
            );
        }
    }
    const before = doc.signatures();
    const after = trial.signatures();
    const style_rule_applied = applied.some(
        (step) => step.op.op === 'set_style_rule',
    );
    for (const style of Array.from(doc.root.querySelectorAll('style'))) {
        const anchor = doc.anchorOf(style);
        if (!style_rule_applied && before.get(anchor) !== after.get(anchor)) {
            issues.push(
                issue(
                    'error',
                    'style_changed',
                    'the <style> changed without a set_style_rule op',
                ),
            );
            break;
        }
    }
    const original_styles = new Set(
        Array.from(doc.root.querySelectorAll('style')).map((style) =>
            doc.anchorOf(style),
        ),
    );
    const added_styles = Array.from(
        trial.root.querySelectorAll('style'),
    ).filter((style) => !original_styles.has(trial.anchorOf(style))).length;
    const expected_styles = applied.filter(
        (step) => step.op.op === 'set_style_rule' && step.adds,
    ).length;
    if (added_styles !== expected_styles) {
        issues.push(
            issue(
                'error',
                'style_changed',
                `${added_styles} <style> element${added_styles === 1 ? ' was' : 's were'} added without a set_style_rule op`,
            ),
        );
    }
    const element_delta = trial.elementCount() - doc.elementCount();
    const expected_delta = applied.reduce(
        (sum, step) => sum + step.expected_delta,
        0,
    );
    if (element_delta !== expected_delta) {
        issues.push(
            issue(
                'error',
                'element_delta',
                `the element count changed by ${element_delta} but the ops account for ${expected_delta}`,
            ),
        );
    }
    const original_bytes = doc.byteSize();
    const byte_delta = trial.byteSize() - original_bytes;
    if (element_delta > MAX_ELEMENT_GROWTH) {
        issues.push(
            issue(
                'error',
                'growth',
                `adds ${element_delta} elements; the cap is ${MAX_ELEMENT_GROWTH}`,
            ),
        );
    }
    if (byte_delta > original_bytes * MAX_BYTE_GROWTH) {
        issues.push(
            issue(
                'error',
                'growth',
                `grows the map by ${Math.round((byte_delta / original_bytes) * 100)}%; the cap is ${MAX_BYTE_GROWTH * 100}%`,
            ),
        );
    }
    const allowed_changed = new Set<string>();
    const allowed_removed = new Set<string>();
    let may_add = false;
    for (const step of applied) {
        for (const anchor of step.anchors) allowed_changed.add(anchor);
        for (const anchor of step.changed) allowed_changed.add(anchor);
        for (const anchor of step.removed) {
            allowed_removed.add(anchor);
            allowed_changed.add(anchor);
        }
        if (step.adds) may_add = true;
    }
    const unexpected: string[] = [];
    for (const [anchor, signature] of before) {
        const next = after.get(anchor);
        if (next === undefined) {
            if (!allowed_removed.has(anchor))
                unexpected.push(`${anchor} removed`);
        } else if (next !== signature && !allowed_changed.has(anchor)) {
            unexpected.push(`${anchor} changed`);
        }
    }
    if (!may_add) {
        for (const anchor of after.keys()) {
            if (!before.has(anchor)) unexpected.push(`${anchor} added`);
        }
    }
    if (unexpected.length) {
        issues.push(
            issue(
                'error',
                'collateral',
                `elements changed that no op names: ${unexpected.slice(0, 5).join(', ')}${
                    unexpected.length > 5
                        ? ` and ${unexpected.length - 5} more`
                        : ''
                }`,
            ),
        );
    }
    return { issues, element_delta, byte_delta };
}

/**
 * Validate a proposal against the document: schema, references, allow-lists,
 * protected ids, then a dry run of the accepted ops with structural
 * invariants, growth caps, the collateral-change gate and the render check.
 */
export async function validateProposal(
    doc: MapDocument,
    ops: readonly MapOp[],
    context: ValidationContext = {},
): Promise<ValidationResult> {
    const max_ops = context.max_ops ?? MAX_OPS_PER_PROPOSAL;
    if (ops.length > max_ops) {
        return {
            ops: ops.map((op, index) => ({
                index,
                op,
                issues: [],
                actionable: false,
                checked_by_default: false,
                locked: true,
                applied: false,
            })),
            issues: [
                issue(
                    'error',
                    'too_many_ops',
                    `${ops.length} ops; the limit is ${max_ops}`,
                ),
            ],
            blocking: true,
            element_delta: 0,
            byte_delta: 0,
            touched: [],
            trial: null,
        };
    }
    const trial = doc.clone();
    const validator = new Validator(doc, trial, context);
    validator.run(ops);
    const applied = validator.steps.filter((step) => step.validation.applied);
    const batch = applied.length
        ? batchChecks(doc, trial, validator.steps)
        : { issues: [], element_delta: 0, byte_delta: 0 };
    if (
        applied.length &&
        context.render_check &&
        !batch.issues.some((i) => i.level === 'error')
    ) {
        const render = await context.render_check.check(trial.serialise());
        if (!render.ok) {
            batch.issues.push(
                issue(
                    'error',
                    'render',
                    `PlaceOS cannot draw the result: ${render.error || 'render failed'}`,
                ),
            );
        }
    }
    const touched = new Set<string>();
    for (const step of applied) {
        for (const anchor of [
            ...step.anchors,
            ...step.created,
            ...step.changed,
        ])
            touched.add(anchor);
    }
    return {
        ops: validator.steps.map((step) => step.validation),
        issues: batch.issues,
        blocking: batch.issues.some((i) => i.level === 'error'),
        element_delta: batch.element_delta,
        byte_delta: batch.byte_delta,
        touched: [...touched],
        trial: applied.length ? trial : null,
    };
}
