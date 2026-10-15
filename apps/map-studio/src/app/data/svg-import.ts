import {
    invert,
    multiply,
    sanitiseTree,
    translation,
} from '@placeos/map-editor';
import { MapObjectType, ObjectGeometry } from './types';

/**
 * Structural analysis of an uploaded SVG floor plan.
 *
 * The reference application did this server-side with JSDOM; the browser's own
 * DOMParser does the same job, so the import flow needs no backend.
 */

export interface ParsedLayer {
    /** Editor layer this SVG group maps onto */
    id: string;
    /** Human readable name, including the original group id */
    name: string;
    objectCount: number;
}

export interface ParsedObject {
    svgId: string;
    tag: string;
    suggestedType: MapObjectType;
    label: string | null;
    geometry: ObjectGeometry;
    /** Editor layer id — always set, so nothing is silently dropped */
    layer: string;
    groupId?: string | null;
    attributes: Record<string, string>;
    presentation?: {
        fill: string | null;
        stroke: string | null;
        opacity: number;
    };
    parentMatrix?: {
        a: number;
        b: number;
        c: number;
        d: number;
        e: number;
        f: number;
    };
}

export interface SvgIssue {
    message: string;
    severity: 'warning' | 'info';
}

export interface SvgAnalysis {
    sourceSvg?: string;
    width: number;
    height: number;
    viewBox: string | null;
    layers: ParsedLayer[];
    objects: ParsedObject[];
    issues: SvgIssue[];
}

const INTERACTIVE_TAGS = [
    'rect',
    'polygon',
    'circle',
    'path',
    'ellipse',
    'polyline',
    'line',
    'text',
    'use',
    'image',
];

const TYPE_PATTERNS: { pattern: RegExp; type: MapObjectType }[] = [
    { pattern: /^(room|meeting|conf|boardroom)/i, type: 'room' },
    { pattern: /^(desk|workstation|ws)/i, type: 'desk' },
    { pattern: /^(locker)/i, type: 'locker' },
    { pattern: /^(zone|neighbourhood|neighborhood)/i, type: 'zone' },
    {
        pattern:
            /^(amenity|toilet|kitchen|lift|elevator|bathroom|restroom|stairs|lobby)/i,
        type: 'amenity',
    },
];

const ROOM_KEYWORDS =
    /office|training|board|exec|meeting|conf|parent|first.aid|interview|quiet|focus|breakout|huddle|collab|library|lounge|prayer|wellness|mother/i;
const AMENITY_KEYWORDS =
    /kitchen|toilet|bathroom|restroom|shower|wc|water|services|comms|server|store|clean|utility|print|mail/i;

/** SVG group ids mapped onto editor layer ids */
const LAYER_NAME_MAP: Record<string, string> = {
    bookings: 'rooms',
    rooms: 'rooms',
    desks: 'desks',
    furniture: 'background',
    lockers: 'lockers',
    highlights: 'zones',
    neighbourhood: 'zones',
    base: 'background',
    blanks: 'background',
    skeleton: 'walls',
    walls: 'walls',
    labels: 'labels',
    signage: 'amenities',
    amenities: 'amenities',
    icons: 'amenities',
};

/** Objects with no identifiable parent group land here */
export const UNGROUPED_LAYER = 'ungrouped';

const mapLayerName = (group_id: string) =>
    LAYER_NAME_MAP[group_id.toLowerCase()] ?? 'rooms';

function suggestObjectType(id: string): MapObjectType {
    const normalized = id.replace(/[-_]/g, '-');
    for (const { pattern, type } of TYPE_PATTERNS) {
        if (pattern.test(normalized)) return type;
    }
    // "area-" ids carry the real name after the prefix
    if (/^area[-_.]/i.test(id)) {
        const name = id.replace(/^area[-_.]\d+[-_.]/i, '');
        if (ROOM_KEYWORDS.test(name)) return 'room';
        if (AMENITY_KEYWORDS.test(name)) return 'amenity';
        return 'zone';
    }
    return 'decorative';
}

function parseNumber(value: string | null): number | undefined {
    if (value === null) return undefined;
    const num = parseFloat(value);
    return isNaN(num) ? undefined : num;
}

function parsePoints(points: string): { x: number; y: number }[] {
    const parts = points.trim().split(/[\s,]+/);
    const parsed: { x: number; y: number }[] = [];
    for (let i = 0; i < parts.length - 1; i += 2) {
        const x = parseFloat(parts[i]);
        const y = parseFloat(parts[i + 1]);
        if (!isNaN(x) && !isNaN(y)) parsed.push({ x, y });
    }
    return parsed;
}

function extractGeometry(el: Element): ObjectGeometry {
    switch (el.tagName.toLowerCase()) {
        case 'rect':
            return {
                type: 'rect',
                x: parseNumber(el.getAttribute('x')) ?? 0,
                y: parseNumber(el.getAttribute('y')) ?? 0,
                width: parseNumber(el.getAttribute('width')),
                height: parseNumber(el.getAttribute('height')),
            };
        case 'circle':
            return {
                type: 'circle',
                x: parseNumber(el.getAttribute('cx')),
                y: parseNumber(el.getAttribute('cy')),
                r: parseNumber(el.getAttribute('r')),
            };
        case 'ellipse': {
            // No native ellipse geometry — carried as a circle on its longest radius
            const rx = parseNumber(el.getAttribute('rx'));
            const ry = parseNumber(el.getAttribute('ry'));
            return {
                type: 'circle',
                x: parseNumber(el.getAttribute('cx')),
                y: parseNumber(el.getAttribute('cy')),
                r: Math.max(rx ?? 0, ry ?? 0) || undefined,
            };
        }
        case 'polygon':
        case 'polyline': {
            const points = el.getAttribute('points');
            return {
                type: 'polygon',
                points: points ? parsePoints(points) : [],
            };
        }
        case 'path':
            return { type: 'path', d: el.getAttribute('d') ?? undefined };
        default:
            return { type: 'rect' };
    }
}

function extractAttributes(el: Element): Record<string, string> {
    return Object.fromEntries(
        Array.from(el.attributes).map((attr) => [attr.name, attr.value]),
    );
}

function extractLabel(el: Element): string | null {
    for (const attr of [
        'inkscape:label',
        'aria-label',
        'data-label',
        'data-name',
    ]) {
        const value = el.getAttribute(attr);
        if (value) return value;
    }
    return (
        el.querySelector('title')?.textContent?.trim() ||
        (el.localName === 'text' ? el.textContent?.trim() : null) ||
        null
    );
}

/** Editor layer of the nearest ancestor group carrying an id */
function findParentLayer(el: Element): string {
    let current = el.parentElement;
    while (current) {
        const id = current.getAttribute('id');
        if (
            current.tagName.toLowerCase() === 'g' &&
            id &&
            LAYER_NAME_MAP[id.toLowerCase()]
        )
            return mapLayerName(id);
        current = current.parentElement;
    }
    return UNGROUPED_LAYER;
}

function findParentGroup(el: Element): string | null {
    let current = el.parentElement;
    while (current) {
        const id = current.getAttribute('id');
        if (current.localName === 'g' && id)
            return LAYER_NAME_MAP[id.toLowerCase()] || /^Layer[_-]/i.test(id)
                ? null
                : id;
        current = current.parentElement;
    }
    return null;
}

function isGeometryValid(geometry: ObjectGeometry): boolean {
    switch (geometry.type) {
        case 'rect':
            return !!geometry.width && !!geometry.height;
        case 'circle':
            return !!geometry.r;
        case 'polygon':
            return (geometry.points?.length ?? 0) >= 3;
        case 'path':
            return !!geometry.d;
        default:
            return false;
    }
}

/** Parse an SVG floor plan into layers and placeable objects */
export function analyzeSvg(svg_content: string): SvgAnalysis {
    const issues: SvgIssue[] = [];
    let doc = new DOMParser().parseFromString(svg_content, 'image/svg+xml');
    let svg = doc.querySelector('svg');
    if (svg && !svg.namespaceURI) {
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        doc = new DOMParser().parseFromString(
            new XMLSerializer().serializeToString(svg),
            'image/svg+xml',
        );
        svg = doc.querySelector('svg');
    }

    if (!svg || doc.querySelector('parsererror')) {
        return {
            width: 0,
            height: 0,
            viewBox: null,
            layers: [],
            objects: [],
            issues: [
                { message: 'No <svg> root element found', severity: 'warning' },
            ],
        };
    }

    sanitiseTree(svg);
    const viewBox = svg.getAttribute('viewBox');
    let width = parseNumber(svg.getAttribute('width')) ?? 0;
    let height = parseNumber(svg.getAttribute('height')) ?? 0;
    if (viewBox) {
        const parts = viewBox.split(/[\s,]+/).map(Number);
        if (parts.length === 4) {
            width = parts[2] || width;
            height = parts[3] || height;
        }
    }
    if (!width || !height) {
        issues.push({
            message:
                'SVG has no explicit width/height and no viewBox; dimensions unknown',
            severity: 'warning',
        });
    }

    // Objects first — layer counts are derived from where they actually landed,
    // so the review step can never exclude a layer the objects don't share.
    const objects: ParsedObject[] = [];
    let without_id = 0;
    const ids = new Set(
        Array.from(svg.querySelectorAll('[id]')).map((el) => el.id),
    );
    const host = document.createElement('div');
    host.style.cssText =
        'position:fixed;left:-100000px;top:0;visibility:hidden;pointer-events:none';
    const shadow = host.attachShadow({ mode: 'open' });
    const measured = document.importNode(svg, true) as unknown as SVGSVGElement;
    measured.setAttribute('width', String(width));
    measured.setAttribute('height', String(height));
    shadow.appendChild(measured);
    document.body.appendChild(host);
    const viewport = measured.getCTM?.();
    const inverse = viewport ? invert(viewport) : null;
    const origin = viewBox?.split(/[\s,]+/).map(Number) || [0, 0];
    const canvas_matrix = inverse
        ? multiply(translation(-origin[0], -origin[1]), inverse)
        : null;
    const source_elements = Array.from(
        svg.querySelectorAll(INTERACTIVE_TAGS.join(', ')),
    );
    const measured_elements = Array.from(
        measured.querySelectorAll(INTERACTIVE_TAGS.join(', ')),
    );

    for (const [index, el] of source_elements.entries()) {
        if (el.closest('defs, clipPath, mask, pattern, marker, symbol'))
            continue;
        let svg_id = el.getAttribute('id');
        if (!svg_id) {
            do {
                svg_id = `imported-svg-${++without_id}`;
            } while (ids.has(svg_id));
            ids.add(svg_id);
            el.setAttribute('id', svg_id);
        }
        let geometry = extractGeometry(el);
        let parentMatrix: ParsedObject['parentMatrix'];
        let presentation: ParsedObject['presentation'];
        const rendered = measured_elements[index] as SVGGraphicsElement;
        if (typeof rendered.getBBox === 'function') {
            try {
                const style = getComputedStyle(rendered);
                presentation = {
                    fill: style.fill || el.getAttribute('fill'),
                    stroke: style.stroke || el.getAttribute('stroke'),
                    opacity: Number(
                        style.opacity || el.getAttribute('opacity') || 1,
                    ),
                };
                const box = rendered.getBBox();
                const ctm = rendered.getCTM();
                const matrix =
                    ctm && canvas_matrix ? multiply(canvas_matrix, ctm) : ctm;
                const parent =
                    rendered.parentElement as unknown as SVGGraphicsElement;
                const parent_ctm = parent.getCTM?.();
                const pm =
                    parent_ctm && canvas_matrix
                        ? multiply(canvas_matrix, parent_ctm)
                        : parent_ctm;
                if (pm)
                    parentMatrix = {
                        a: pm.a,
                        b: pm.b,
                        c: pm.c,
                        d: pm.d,
                        e: pm.e,
                        f: pm.f,
                    };
                if (matrix && (box.width || box.height)) {
                    const corners = [
                        [box.x, box.y],
                        [box.x + box.width, box.y],
                        [box.x, box.y + box.height],
                        [box.x + box.width, box.y + box.height],
                    ];
                    const xs = corners.map(
                        ([x, y]) => matrix.a * x + matrix.c * y + matrix.e,
                    );
                    const ys = corners.map(
                        ([x, y]) => matrix.b * x + matrix.d * y + matrix.f,
                    );
                    geometry = {
                        type: 'rect',
                        x: Math.min(...xs),
                        y: Math.min(...ys),
                        width: Math.max(...xs) - Math.min(...xs),
                        height: Math.max(...ys) - Math.min(...ys),
                    };
                }
            } catch {
                /* Non-rendering SVG nodes have no bounding box. */
            }
        }
        const tag = el.tagName.toLowerCase();
        if (!isGeometryValid(geometry)) {
            issues.push({
                message: `Element #${svg_id} (${tag}) has invalid or incomplete geometry`,
                severity: 'warning',
            });
        }
        objects.push({
            svgId: svg_id,
            tag,
            suggestedType: suggestObjectType(svg_id),
            label: extractLabel(el),
            geometry,
            layer: findParentLayer(el),
            groupId: findParentGroup(el),
            attributes: extractAttributes(el),
            parentMatrix,
            presentation,
        });
    }

    host.remove();

    if (without_id > 0) {
        issues.push({
            message: `${without_id} SVG element(s) were assigned IDs for editing`,
            severity: 'info',
        });
    }

    // Original group names, so the layer list reads like the source file
    const group_names = new Map<string, Set<string>>();
    for (const group of Array.from(svg.querySelectorAll('g'))) {
        const id = group.getAttribute('id');
        if (!id) continue;
        const mapped = LAYER_NAME_MAP[id.toLowerCase()];
        if (!mapped) continue;
        const names = group_names.get(mapped) ?? new Set<string>();
        names.add(group.getAttribute('inkscape:label') || id);
        group_names.set(mapped, names);
    }

    const counts = new Map<string, number>();
    for (const object of objects) {
        counts.set(object.layer, (counts.get(object.layer) ?? 0) + 1);
    }

    const layers: ParsedLayer[] = [...counts.entries()].map(
        ([id, objectCount]) => {
            const sources = group_names.get(id);
            const title = id.charAt(0).toUpperCase() + id.slice(1);
            return {
                id,
                name: sources ? `${title} (${[...sources].join(', ')})` : title,
                objectCount,
            };
        },
    );

    if (layers.length === 0) {
        issues.push({
            message:
                'No layer groups detected; no objects were found to import',
            severity: 'warning',
        });
    }

    return {
        width,
        height,
        viewBox,
        layers,
        objects,
        issues,
        sourceSvg: new XMLSerializer().serializeToString(svg),
    };
}
