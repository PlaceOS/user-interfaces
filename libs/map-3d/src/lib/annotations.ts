/** Root attribute: SVG user units per metre. Its presence marks a map as having a 3D view. */
export const UNIT_ATTR = 'data-3d-unit';
/** What an element is. Set on an element or a group; descendants inherit it. */
export const KIND_ATTR = 'data-3d-kind';
/** Height in metres above the element's base. Set with the kind. */
export const HEIGHT_ATTR = 'data-3d-height';
/** Metres between the floor and the bottom of the element. Optional. */
export const BASE_ATTR = 'data-3d-base';

/** Marks an element as hidden while its map is edited. Never saved. */
export const HIDDEN_ATTR = 'data-3d-hidden';

export const MAP_3D_KINDS = [
    'wall',
    'glass',
    'partition',
    'desk',
    'seat',
    'furniture',
    'space',
    'label',
    'flat',
] as const;
export type Map3DKind = (typeof MAP_3D_KINDS)[number];

/** Height in metres given to each kind unless the user sets another. */
export const DEFAULT_HEIGHTS: Readonly<Record<Map3DKind, number>> = {
    wall: 1.2,
    glass: 1.2,
    partition: 0.6,
    desk: 0.74,
    seat: 0.45,
    furniture: 0.5,
    space: 0,
    label: 0,
    flat: 0,
};

/** Kinds that stay on the floor */
export const FLOOR_KINDS: ReadonlySet<Map3DKind> = new Set([
    'space',
    'label',
    'flat',
]);

/** Kinds drawn from their stroke when they have no fill. */
export const LINEAR_KINDS: ReadonlySet<Map3DKind> = new Set([
    'wall',
    'glass',
    'partition',
]);

export const MAX_HEIGHT = 20;

export interface Map3DAnnotation {
    kind: Map3DKind;
    /** Metres */
    height: number;
    /** Metres */
    base: number;
}

export function isMap3DKind(value: unknown): value is Map3DKind {
    return MAP_3D_KINDS.includes(value as Map3DKind);
}

function metres(value: string | null, fallback: number): number {
    const number = parseFloat(value || '');
    if (!Number.isFinite(number)) return fallback;
    return Math.max(0, Math.min(MAX_HEIGHT, number));
}

/** The annotation set on this element itself, or `null` without one. */
export function ownAnnotation(element: Element): Map3DAnnotation | null {
    const kind_value = element.getAttribute(KIND_ATTR);
    const height_value = element.getAttribute(HEIGHT_ATTR);
    if (kind_value === null && height_value === null) return null;
    const kind: Map3DKind = isMap3DKind(kind_value)
        ? kind_value
        : metres(height_value, 0) > 0
          ? 'furniture'
          : 'flat';
    return {
        kind,
        height: FLOOR_KINDS.has(kind)
            ? 0
            : metres(height_value, DEFAULT_HEIGHTS[kind]),
        base: metres(element.getAttribute(BASE_ATTR), 0),
    };
}

/** The annotation that applies to an element: its own, or the nearest ancestor's. */
export function effectiveAnnotation(element: Element): Map3DAnnotation | null {
    let current: Element | null = element;
    while (current) {
        const annotation = ownAnnotation(current);
        if (annotation) return annotation;
        current = current.parentElement;
    }
    return null;
}

export function setAnnotation(
    element: Element,
    annotation: Pick<Map3DAnnotation, 'kind'> & Partial<Map3DAnnotation>,
) {
    const { kind } = annotation;
    const height = FLOOR_KINDS.has(kind)
        ? 0
        : (annotation.height ?? DEFAULT_HEIGHTS[kind]);
    element.setAttribute(KIND_ATTR, kind);
    element.setAttribute(HEIGHT_ATTR, formatMetres(height));
    if (annotation.base) {
        element.setAttribute(BASE_ATTR, formatMetres(annotation.base));
    } else {
        element.removeAttribute(BASE_ATTR);
    }
}

export function clearAnnotation(element: Element) {
    element.removeAttribute(KIND_ATTR);
    element.removeAttribute(HEIGHT_ATTR);
    element.removeAttribute(BASE_ATTR);
}

/** Remove every annotation below (and optionally on) an element. */
export function clearAnnotations(root: Element, include_root = true) {
    if (include_root) clearAnnotation(root);
    const selector = `[${KIND_ATTR}],[${HEIGHT_ATTR}],[${BASE_ATTR}]`;
    for (const element of Array.from(root.querySelectorAll(selector))) {
        clearAnnotation(element);
    }
}

/**
 * Give elements an annotation that applies to everything inside them, so
 * annotations set earlier on their descendants are removed.
 */
export function assignAnnotation(
    elements: readonly Element[],
    annotation: Pick<Map3DAnnotation, 'kind'> & Partial<Map3DAnnotation>,
) {
    for (const element of elements) {
        clearAnnotations(element, false);
        setAnnotation(element, annotation);
    }
}

/** Whether an element, or a group around it, is hidden while the map is edited. */
export function isHidden(element: Element): boolean {
    return !!element.closest(`[${HIDDEN_ATTR}]`);
}

/** SVG user units per metre, or 0 when the map has no 3D view. */
export function mapUnit(svg: Element | null | undefined): number {
    const unit = parseFloat(svg?.getAttribute(UNIT_ATTR) || '');
    return Number.isFinite(unit) && unit > 0 ? unit : 0;
}

export function setMapUnit(svg: Element, unit: number) {
    svg.setAttribute(UNIT_ATTR, formatNumber(unit, 4));
}

/** Remove the 3D view from a map: the unit and every annotation. */
export function removeMap3D(svg: Element) {
    svg.removeAttribute(UNIT_ATTR);
    clearAnnotations(svg);
}

const ROOT_TAG = /<svg[\s>][^>]*>/i;
const UNIT_IN_TAG = new RegExp(`\\s${UNIT_ATTR}\\s*=\\s*["']\\s*([0-9.eE+-]+)`);

/** Whether SVG text has a 3D view, read from its root tag without parsing. */
export function hasMap3D(svg_text: string | null | undefined): boolean {
    const root = (svg_text || '').match(ROOT_TAG)?.[0];
    const unit = parseFloat(root?.match(UNIT_IN_TAG)?.[1] || '');
    return Number.isFinite(unit) && unit > 0;
}

export function formatNumber(value: number, places: number): string {
    return `${parseFloat(value.toFixed(places))}`;
}

export function formatMetres(value: number): string {
    return formatNumber(value, 2);
}
