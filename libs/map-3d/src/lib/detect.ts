import { numberValue } from 'libs/map-editor/src/lib/style-resolution';
import {
    clearAnnotations,
    FLOOR_KINDS,
    LINEAR_KINDS,
    Map3DKind,
    MAP_3D_KINDS,
    setAnnotation,
    setMapUnit,
} from './annotations';

import { MapShape, ParsedMap } from './shapes';

export interface DetectOptions {
    /** Map element IDs PlaceOS books as desks */
    desk_ids?: readonly string[];
    /** Map element IDs PlaceOS books as rooms */
    space_ids?: readonly string[];
    /** Map element IDs of parking spaces and other areas that stay flat */
    area_ids?: readonly string[];
    /** Height in metres for each kind, in place of the defaults */
    heights?: Partial<Record<Map3DKind, number>>;
}

export interface DetectResult {
    /** SVG user units per metre */
    unit: number;
    /** What the scale was worked out from */
    unit_source: 'desks' | 'seats' | 'size';
    /** Drawn elements of each kind */
    counts: Record<Map3DKind, number>;
}

/** Kinds a layer or element name can suggest */
type NamedKind = Exclude<Map3DKind, 'flat' | 'space'>;

const WORDS: Readonly<Record<NamedKind, readonly string[]>> = {
    label: [
        'label',
        'labels',
        'name',
        'names',
        'text',
        'texts',
        'signage',
        'signages',
        'sigange',
        'signanges',
        'sign',
        'signs',
        'icon',
        'icons',
        'tag',
        'tags',
        'title',
        'titles',
        'words',
        'annotation',
        'annotations',
        'legend',
        'logo',
    ],
    wall: [
        'wall',
        'walls',
        'skeleton',
        'outline',
        'outlines',
        'outliine',
        'boundary',
        'boundry',
        'boundaries',
        'perimeter',
        'structure',
        'column',
        'columns',
        'pillar',
        'pillars',
        'stroke',
        'strokes',
        'core',
        'shell',
        'facade',
    ],
    glass: ['glass', 'glazing', 'window', 'windows'],
    partition: ['partition', 'partitions', 'divider', 'dividers'],
    desk: [
        'desk',
        'desks',
        'table',
        'tables',
        'workstation',
        'workstations',
        'workpoint',
        'workpoints',
        'bench',
        'benches',
    ],
    seat: [
        'chair',
        'chairs',
        'seat',
        'seats',
        'seating',
        'stool',
        'stools',
        'sofa',
        'sofas',
        'couch',
        'couches',
        'lounge',
        'lounges',
        'armchair',
        'armchairs',
        'ottoman',
        'ottomans',
        'booth',
        'booths',
    ],
    furniture: [
        'furniture',
        'furn',
        'storage',
        'cabinet',
        'cabinets',
        'cupboard',
        'cupboards',
        'locker',
        'lockers',
        'shelf',
        'shelves',
        'shelving',
        'joinery',
        'kitchen',
        'kitchenette',
        'counter',
        'counters',
        'plant',
        'plants',
        'planter',
        'planters',
        'rack',
        'racks',
        'appliance',
        'appliances',
        'fixtures',
        'equipment',
        'printer',
        'printers',
        'fridge',
    ],
};

const FLAT_WORDS: readonly string[] = [
    'base',
    'background',
    'bg',
    'floor',
    'flooring',
    'blank',
    'blanks',
    'highlight',
    'highlights',
    'higlights',
    'zone',
    'zones',
    'booking',
    'bookings',
    'area',
    'areas',
    'space',
    'spaces',
    'room',
    'rooms',
    'rm',
    'status',
    'shadow',
    'shadows',
    'neighbourhood',
    'neighbourhoods',
    'neighborhood',
    'neighborhoods',
    'carpet',
    'parking',
    'stair',
    'stairs',
    'lift',
    'lifts',
    'elevator',
    'elevators',
    'void',
    'atrium',
    'grass',
    'road',
    'roads',
];

/** A name with words for several kinds takes the first of these it has */
const WORD_PRIORITY: readonly NamedKind[] = [
    'label',
    'glass',
    'partition',
    'wall',
    'desk',
    'seat',
    'furniture',
];

const WORD_KIND = new Map<string, NamedKind | 'flat'>();
for (const word of FLAT_WORDS) WORD_KIND.set(word, 'flat');
for (const kind of [...WORD_PRIORITY].reverse()) {
    for (const word of WORDS[kind]) WORD_KIND.set(word, kind);
}

/** The ID PlaceOS maps give the area of a bookable room, such as area-1.02-status */
const SPACE_ID = /^area-.+-status$/i;
/** "furniture" as layer names misspell it: furniature, furnaiture, fuirnature */
const FURNITURE_MISSPELT = /^fu[a-z]{3,7}ture$/;

/** Real size in metres the scale is worked out from */
const DESK_LENGTH = 1.6;
const SEAT_SIZE = 0.55;
/** Metres across assumed for a map with nothing to measure */
const FALLBACK_SPAN = 45;
/** Furthest a measured scale may be from the assumed one, as a ratio */
const MAX_CUE_RATIO = 2.5;
/** Share of the wall length ignored at each side when measuring the building */
const BUILDING_TRIM = 0.01;
/** Shortest and longest a map may be in metres once scaled */
const MIN_SPAN = 8;
const MAX_SPAN = 600;
/** Elements more see-through than this are tints and shadows, which stay flat */
const MIN_OPACITY = 0.5;
/** A filled element covering more of the map than this is floor */
const FLOOR_COVERAGE = 0.4;
/** Longest a label is, as a fraction of the map's diagonal */
const LABEL_SPAN = 0.12;
/** How many times the size of the largest label beside it a mark drawn with labels may be */
const MARK_SIZE_RANGE = 4;

/** The kind a layer or element name suggests, or `null`. */
export function kindFromName(
    name: string | null | undefined,
): Map3DKind | null {
    if (!name) return null;
    const words = name
        .replace(/([a-z])([A-Z])/g, '$1 $2')
        .toLowerCase()
        .split(/[^a-z]+/)
        .filter(Boolean);
    let found: NamedKind | 'flat' | null = null;
    for (const word of words) {
        const kind = WORD_KIND.get(
            FURNITURE_MISSPELT.test(word) ? 'furniture' : word,
        );
        if (!kind) continue;
        if (
            !found ||
            found === 'flat' ||
            (kind !== 'flat' &&
                WORD_PRIORITY.indexOf(kind) < WORD_PRIORITY.indexOf(found))
        ) {
            found = kind;
        }
    }
    return found;
}

function namesOf(element: Element): string[] {
    return [
        element.getAttribute('id'),
        element.getAttribute('data-name'),
        element.getAttribute('inkscape:label'),
        element.getAttribute('aria-label'),
    ].filter((_): _ is string => !!_);
}

function median(values: number[]): number {
    if (!values.length) return 0;
    const sorted = [...values].sort((a, b) => a - b);
    return sorted[Math.floor(sorted.length / 2)];
}

function overlaps(a: MapShape, b: MapShape): boolean {
    return (
        a.bbox[0] < b.bbox[2] &&
        a.bbox[2] > b.bbox[0] &&
        a.bbox[1] < b.bbox[3] &&
        a.bbox[3] > b.bbox[1]
    );
}

/** Whether the middle of one element's bounding box is inside another's. */
function covers(outer: MapShape, inner: MapShape): boolean {
    const x = (inner.bbox[0] + inner.bbox[2]) / 2;
    const y = (inner.bbox[1] + inner.bbox[3]) / 2;
    return (
        x > outer.bbox[0] &&
        x < outer.bbox[2] &&
        y > outer.bbox[1] &&
        y < outer.bbox[3]
    );
}

function boxArea(shape: MapShape): number {
    return (shape.bbox[2] - shape.bbox[0]) * (shape.bbox[3] - shape.bbox[1]);
}

function spanOf(shape: MapShape): number {
    return Math.max(
        shape.bbox[2] - shape.bbox[0],
        shape.bbox[3] - shape.bbox[1],
    );
}

/**
 * Work out which elements of a map are walls, furniture, labels and floor,
 * and its scale, then write that to the map as annotations. Annotations
 * already on the map are replaced.
 */
export function detectMap3D(
    map: ParsedMap,
    options: DetectOptions = {},
): DetectResult {
    const { svg, shapes, view_box } = map;
    clearAnnotations(svg);
    const desk_ids = new Set(options.desk_ids || []);
    const space_ids = new Set(options.space_ids || []);
    const area_ids = new Set(options.area_ids || []);
    const map_area = view_box.width * view_box.height;
    const diagonal = Math.hypot(view_box.width, view_box.height);

    const named = new Map<Element, Map3DKind | null>();
    const nameKind = (element: Element): Map3DKind | null => {
        let current: Element | null = element;
        while (current && current !== svg) {
            let kind = named.get(current);
            if (kind === undefined) {
                kind = null;
                const id = current.getAttribute('id') || '';
                if (desk_ids.has(id)) kind = 'desk';
                else if (space_ids.has(id) || SPACE_ID.test(id)) kind = 'space';
                else if (area_ids.has(id)) kind = 'flat';
                else {
                    for (const name of namesOf(current)) {
                        kind = kindFromName(name);
                        if (kind) break;
                    }
                }
                named.set(current, kind);
            }
            if (kind) return kind;
            current = current.parentElement;
        }
        return null;
    };

    const kinds = new Map<Element, Map3DKind>();
    /** Elements named as something raised that are drawn in a way that keeps them flat */
    const parts = new Set<Element>();
    for (const shape of shapes) {
        const named = nameKind(shape.element) || 'flat';
        let kind = named;
        const coverage = shape.area / map_area;
        const is_tint = kind !== 'label' && kind !== 'space';
        if (is_tint && shape.opacity < MIN_OPACITY) kind = 'flat';
        else if (LINEAR_KINDS.has(kind)) {
            if (shape.has_fill && coverage > FLOOR_COVERAGE) kind = 'flat';
        } else if (!FLOOR_KINDS.has(kind)) {
            const is_block =
                shape.polygons.length > 0 &&
                (shape.has_fill || shape.subpaths.every((_) => _.closed));
            if (!is_block || coverage > FLOOR_COVERAGE) kind = 'flat';
        }
        if (kind !== named) parts.add(shape.element);
        kinds.set(shape.element, kind);
    }

    if (![...kinds.values()].some((kind) => kind === 'wall')) {
        for (const shape of wallsByStroke(shapes, diagonal)) {
            if (kinds.get(shape.element) === 'flat') {
                kinds.set(shape.element, 'wall');
            }
        }
    }

    // Small solid elements painted over a raised one no smaller than
    // themselves are labels and icons, which go to the label layer. So do
    // the rest of the marks drawn with them, such as the other letters of a name.
    // A see-through element painted over raised ones it is larger than is
    // the area of a space.
    const raised: MapShape[] = [];
    const isOverlay = (shape: MapShape) =>
        kinds.get(shape.element) === 'flat' &&
        !parts.has(shape.element) &&
        shape.has_fill &&
        shape.polygons.length > 0 &&
        !area_ids.has(shape.element.getAttribute('id') || '') &&
        shape.opacity *
            (numberValue(
                map.styles.inherited(shape.element, 'fill-opacity', '1'),
            ) ?? 1) <
            1;
    /** Bounding box area of the largest label found in each parent */
    const label_parents = new Map<Element | null, number>();
    const isMark = (shape: MapShape) =>
        kinds.get(shape.element) === 'flat' &&
        shape.has_fill &&
        shape.opacity >= MIN_OPACITY &&
        spanOf(shape) < diagonal * LABEL_SPAN &&
        !area_ids.has(shape.element.getAttribute('id') || '');
    for (const shape of shapes) {
        const kind = kinds.get(shape.element);
        if (kind && !FLOOR_KINDS.has(kind)) {
            if (!LINEAR_KINDS.has(kind)) raised.push(shape);
            continue;
        }
        const size = boxArea(shape);
        if (
            isOverlay(shape) &&
            raised.some(
                (other) => size > boxArea(other) && covers(shape, other),
            )
        ) {
            kinds.set(shape.element, 'space');
            continue;
        }
        if (!isMark(shape)) continue;
        if (
            raised.some(
                (other) => overlaps(shape, other) && size <= boxArea(other),
            )
        ) {
            kinds.set(shape.element, 'label');
            const parent = shape.element.parentElement;
            label_parents.set(
                parent,
                Math.max(label_parents.get(parent) || 0, size),
            );
        }
    }
    for (const shape of shapes) {
        const largest = label_parents.get(shape.element.parentElement);
        if (
            largest &&
            isMark(shape) &&
            boxArea(shape) <= largest * MARK_SIZE_RANGE
        ) {
            kinds.set(shape.element, 'label');
        }
    }
    for (const text of Array.from(svg.querySelectorAll('text'))) {
        kinds.set(text, 'label');
    }

    const { unit, unit_source } = estimateUnit(map, kinds, desk_ids);
    setMapUnit(svg, unit);

    // Annotate each group with what most of it is, and only the exceptions below it
    const tally = new Map<Element, Map<Map3DKind, number>>();
    for (const [element, kind] of kinds) {
        let current: Element | null = element;
        while (current && current !== svg) {
            let counts = tally.get(current);
            if (!counts) tally.set(current, (counts = new Map()));
            counts.set(kind, (counts.get(kind) || 0) + 1);
            current = current.parentElement;
        }
    }
    const heights = options.heights || {};
    const annotate = (element: Element, inherited: Map3DKind) => {
        const own = kinds.get(element);
        if (own) {
            if (own !== inherited) {
                setAnnotation(element, { kind: own, height: heights[own] });
            }
            return;
        }
        const counts = tally.get(element);
        if (!counts) return;
        let major = inherited;
        let total = 0;
        for (const [kind, count] of counts) {
            total += count;
            if (count > (counts.get(major) || 0)) major = kind;
        }
        // A group is annotated only with the kind of more than half of it
        if ((counts.get(major) || 0) * 2 <= total) major = inherited;
        if (major !== inherited) {
            setAnnotation(element, { kind: major, height: heights[major] });
        }
        for (const child of Array.from(element.children)) {
            annotate(child, major);
        }
    };
    for (const child of Array.from(svg.children)) annotate(child, 'flat');

    const counts = Object.fromEntries(
        MAP_3D_KINDS.map((kind) => [kind, 0]),
    ) as Record<Map3DKind, number>;
    for (const kind of kinds.values()) counts[kind]++;
    return { unit, unit_source, counts };
}

/**
 * Lines likely to be walls on a map whose layers are not named: stroked
 * outlines noticeably thicker than most, long enough to span a room.
 */
function wallsByStroke(shapes: readonly MapShape[], diagonal: number) {
    const lines = shapes.filter(
        (shape) =>
            !shape.has_fill &&
            shape.has_stroke &&
            shape.opacity >= MIN_OPACITY &&
            shape.length > diagonal * 0.01,
    );
    if (lines.length < 4) return [];
    const widths: number[] = [];
    for (const line of lines) {
        const weight = Math.max(1, Math.round(line.length / (diagonal * 0.01)));
        for (let i = 0; i < Math.min(weight, 200); i++) {
            widths.push(line.stroke_width);
        }
    }
    const typical = median(widths);
    const widest = Math.max(...lines.map((_) => _.stroke_width));
    if (!(widest >= typical * 1.5)) return [];
    const threshold = Math.max(typical * 1.5, widest * 0.5);
    return lines.filter((line) => line.stroke_width >= threshold);
}

function estimateUnit(
    map: ParsedMap,
    kinds: ReadonlyMap<Element, Map3DKind>,
    desk_ids: ReadonlySet<string>,
): Pick<DetectResult, 'unit' | 'unit_source'> {
    const { svg, shapes, view_box } = map;
    const span = Math.max(view_box.width, view_box.height);
    const clamp = (unit: number) =>
        Math.max(span / MAX_SPAN, Math.min(span / MIN_SPAN, unit));
    const by_kind = (kind: Map3DKind) =>
        shapes.filter((shape) => kinds.get(shape.element) === kind);
    const building =
        buildingSpan(
            shapes.filter((shape) =>
                LINEAR_KINDS.has(kinds.get(shape.element) || 'flat'),
            ),
        ) || span;

    // A desk is the element or group PlaceOS books, or one named as a desk
    const desk_spans = new Map<Element, [number, number, number, number]>();
    for (const shape of by_kind('desk')) {
        let owner: Element = shape.element;
        let current: Element | null = shape.element;
        while (current && current !== svg) {
            const id = current.getAttribute('id') || '';
            if (desk_ids.has(id) || /^(desk|table)[-_.]/i.test(id)) {
                owner = current;
                break;
            }
            current = current.parentElement;
        }
        const box = desk_spans.get(owner);
        if (!box) desk_spans.set(owner, [...shape.bbox]);
        else {
            box[0] = Math.min(box[0], shape.bbox[0]);
            box[1] = Math.min(box[1], shape.bbox[1]);
            box[2] = Math.max(box[2], shape.bbox[2]);
            box[3] = Math.max(box[3], shape.bbox[3]);
        }
    }
    // The scale between a measured one and the assumed one, at most
    // MAX_CUE_RATIO from the assumed one
    const fallback = building / FALLBACK_SPAN;
    const blend = (cue: number) =>
        clamp(
            Math.max(
                fallback / MAX_CUE_RATIO,
                Math.min(fallback * MAX_CUE_RATIO, Math.sqrt(cue * fallback)),
            ),
        );
    const seats = by_kind('seat').map(spanOf);
    if (seats.length >= 4) {
        return { unit: blend(median(seats) / SEAT_SIZE), unit_source: 'seats' };
    }
    const desk_lengths = [...desk_spans.values()].map((box) =>
        Math.max(box[2] - box[0], box[3] - box[1]),
    );
    if (desk_lengths.length >= 3) {
        return {
            unit: blend(median(desk_lengths) / DESK_LENGTH),
            unit_source: 'desks',
        };
    }
    return { unit: clamp(fallback), unit_source: 'size' };
}

/**
 * The longer side of the area the walls of a map cover, in user units, or 0
 * for a map with no walls. Margins, title blocks and stray lines away from
 * the building are left out: each side is drawn in to where the outermost
 * BUILDING_TRIM of the wall length ends.
 */
function buildingSpan(walls: readonly MapShape[]): number {
    const xs: [number, number][] = [];
    const ys: [number, number][] = [];
    let total = 0;
    for (const wall of walls) {
        for (const { points, closed } of wall.subpaths) {
            const count = closed ? points.length : points.length - 1;
            for (let i = 0; i < count; i++) {
                const a = points[i];
                const b = points[(i + 1) % points.length];
                const length = Math.hypot(b[0] - a[0], b[1] - a[1]);
                if (!length) continue;
                xs.push([(a[0] + b[0]) / 2, length]);
                ys.push([(a[1] + b[1]) / 2, length]);
                total += length;
            }
        }
    }
    if (!total) return 0;
    const extent = (values: [number, number][]) => {
        values.sort((a, b) => a[0] - b[0]);
        const trim = total * BUILDING_TRIM;
        let low = values[0][0];
        let high = values[values.length - 1][0];
        let sum = 0;
        for (const [position, length] of values) {
            sum += length;
            if (sum >= trim) {
                low = position;
                break;
            }
        }
        sum = 0;
        for (let i = values.length - 1; i >= 0; i--) {
            sum += values[i][1];
            if (sum >= trim) {
                high = values[i][0];
                break;
            }
        }
        return high - low;
    };
    return Math.max(extent(xs), extent(ys));
}
