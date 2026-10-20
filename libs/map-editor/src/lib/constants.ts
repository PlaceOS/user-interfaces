export const SVG_NS = 'http://www.w3.org/2000/svg';
export const XLINK_NS = 'http://www.w3.org/1999/xlink';

/** Session anchor attribute; stripped from every element on serialise. */
export const ANCHOR_ATTR = 'data-map-editor-anchor';
/** Every attribute with this prefix is editor state, never saved. */
export const EDITOR_ATTR_PREFIX = 'data-map-editor-';

export const ID_PATTERN = /^[A-Za-z][A-Za-z0-9_.-]*$/;
export const DEFAULT_ID_PREFIX = 'ai-';

/** Attributes `set_attr` may touch; `data-*` is allowed by prefix. */
export const ATTR_ALLOW_LIST: ReadonlySet<string> = new Set([
    'fill',
    'stroke',
    'stroke-width',
    'stroke-dasharray',
    'fill-opacity',
    'stroke-opacity',
    'opacity',
    'class',
    'visibility',
    'rx',
    'ry',
    'font-size',
    'font-family',
    'font-weight',
    'text-anchor',
]);

/** Properties `set_style_rule` declarations may carry. */
export const STYLE_PROPERTY_ALLOW_LIST: ReadonlySet<string> = ATTR_ALLOW_LIST;

/** Attributes that are never set through `set_attr`, whatever the value. */
export const ATTR_DENY_LIST: ReadonlySet<string> = new Set([
    'id',
    'transform',
    'href',
    'xlink:href',
    'style',
    'src',
]);

const DATA_ATTR = /^data-[a-z][a-z0-9_-]*$/i;

/** Names `set_attr` and `insert_shape` may write: the allow-list, or `data-*` outside the editor prefix. */
export function isAllowedAttributeName(name: string): boolean {
    if (ATTR_ALLOW_LIST.has(name)) return true;
    return (
        DATA_ATTR.test(name) &&
        !name.toLowerCase().startsWith(EDITOR_ATTR_PREFIX)
    );
}

export const SHAPE_KINDS = [
    'rect',
    'circle',
    'ellipse',
    'line',
    'polygon',
    'polyline',
    'path',
    'text',
    'g',
] as const;
export type ShapeKind = (typeof SHAPE_KINDS)[number];

/** Geometry attributes each shape kind accepts, beyond the paint allow-list. */
export const SHAPE_GEOMETRY_ATTRS: Readonly<
    Record<ShapeKind, readonly string[]>
> = {
    rect: ['x', 'y', 'width', 'height', 'rx', 'ry'],
    circle: ['cx', 'cy', 'r'],
    ellipse: ['cx', 'cy', 'rx', 'ry'],
    line: ['x1', 'y1', 'x2', 'y2'],
    polygon: ['points'],
    polyline: ['points'],
    path: ['d'],
    text: ['x', 'y', 'dx', 'dy'],
    g: [],
};

export const TEXT_TAGS: ReadonlySet<string> = new Set(['text', 'tspan']);
export const CONTAINER_TAGS: ReadonlySet<string> = new Set(['a', 'g']);
export const LINE_TAGS: ReadonlySet<string> = new Set(['line']);
export const REFERENCE_TAGS: ReadonlySet<string> = new Set(['image', 'use']);

/** Tags that never paint; compared lower-cased. */
export const NON_RENDERED_TAGS: ReadonlySet<string> = new Set([
    'clippath',
    'defs',
    'desc',
    'filter',
    'lineargradient',
    'marker',
    'mask',
    'metadata',
    'pattern',
    'radialgradient',
    'script',
    'style',
    'symbol',
    'title',
]);

/** Elements removed by the sanitiser wherever they appear; compared lower-cased. */
export const DENIED_TAGS: ReadonlySet<string> = new Set([
    'script',
    'foreignobject',
    'handler',
    'iframe',
    'embed',
    'object',
    'animate',
    'animatecolor',
    'animatemotion',
    'animatetransform',
    'set',
    'discard',
    'mpath',
]);

/**
 * Tags replacement markup may contain; compared lower-cased. `purifyMarkup`
 * removes every other element, so unknown or new SVG elements do not pass.
 */
export const MARKUP_ALLOWED_TAGS: ReadonlySet<string> = new Set([
    'a',
    'circle',
    'clippath',
    'defs',
    'desc',
    'ellipse',
    'feblend',
    'fecolormatrix',
    'fecomponenttransfer',
    'fecomposite',
    'feconvolvematrix',
    'fediffuselighting',
    'fedisplacementmap',
    'fedistantlight',
    'fedropshadow',
    'feflood',
    'fefunca',
    'fefuncb',
    'fefuncg',
    'fefuncr',
    'fegaussianblur',
    'femerge',
    'femergenode',
    'femorphology',
    'feoffset',
    'fepointlight',
    'fespecularlighting',
    'fespotlight',
    'fetile',
    'feturbulence',
    'filter',
    'g',
    'image',
    'line',
    'lineargradient',
    'marker',
    'mask',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialgradient',
    'rect',
    'stop',
    'style',
    'symbol',
    'text',
    'textpath',
    'title',
    'tspan',
]);

/** Tags refused in replacement markup on top of the deny-list. */
export const REPLACEMENT_DENIED_TAGS: ReadonlySet<string> = new Set([
    ...DENIED_TAGS,
    'style',
    'use',
]);

/** Attributes whose value is a reference and must stay inside the document. */
export const REFERENCE_ATTRS: ReadonlySet<string> = new Set([
    'href',
    'xlink:href',
    'src',
]);

export const MAX_OPS_PER_PROPOSAL = 80;
export const MAX_REPLACEMENT_MARKUP_BYTES = 16 * 1024;
export const MAX_TRANSFORM_TARGETS = 200;
export const MAX_DUPLICATE_COUNT = 40;
export const MAX_ELEMENT_GROWTH = 300;
/** Fraction of the document's byte size a proposal may add. */
export const MAX_BYTE_GROWTH = 0.25;
/** Fraction of the viewBox size geometry may leave the canvas by. */
export const OFF_CANVAS_TOLERANCE = 0.02;

export const HISTORY_DEPTH = 50;
export const HISTORY_BYTE_BUDGET = 64 * 1024 * 1024;

export const CONTENT_HASH_LENGTH = 8;
