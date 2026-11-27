import {
    assignAnnotation,
    BASE_ATTR,
    clearAnnotation,
    clearAnnotations,
    DEFAULT_HEIGHTS,
    effectiveAnnotation,
    FLOOR_KINDS,
    HEIGHT_ATTR,
    HIDDEN_ATTR,
    KIND_ATTR,
    Map3DKind,
    MAP_3D_KINDS,
    mapUnit,
    MAX_HEIGHT,
    ownAnnotation,
    setAnnotation,
    setMapUnit,
    UNIT_ATTR,
} from './annotations';
import { detectMap3D, DetectOptions, DetectResult } from './detect';
import { MapShape, ParsedMap, parseMap } from './shapes';

/** A group of the map, listed so its contents can be given a kind together */
export interface Map3DLayer {
    element: Element;
    name: string;
    /** Nesting below the root, from 0 */
    depth: number;
    /** Drawn elements inside the group */
    count: number;
    /** The kind of everything inside, or `mixed` */
    kind: Map3DKind | 'mixed';
    /** Whether the group is hidden in the preview */
    hidden: boolean;
    has_children: boolean;
}

type Snapshot = [Element, string | null, string | null, string | null][];

const ANNOTATED = `[${KIND_ATTR}],[${HEIGHT_ATTR}],[${BASE_ATTR}]`;
const MAX_HISTORY = 100;

function layerName(element: Element): string {
    return (
        element.getAttribute('data-name') ||
        element.getAttribute('inkscape:label') ||
        element.getAttribute('id') ||
        ''
    );
}

/**
 * The 3D annotations of one map while they are being edited: detection,
 * assignment, undo and redo, and the SVG text to save.
 */
export class Map3DSession {
    public readonly map: ParsedMap;
    /** Result of the latest detection, or `null` for a map opened with a 3D view */
    public detected: DetectResult | null = null;
    /** Called after every change to the annotations */
    public onChange: (() => void) | null = null;

    private _saved: string;
    private _saved_unit: number;
    /** The annotations and scale the map had when it was last serialised */
    private _serialised: { state: string; unit: number } | null = null;
    private _undo: Snapshot[] = [];
    private _redo: Snapshot[] = [];
    private _shape_by_element = new Map<Element, MapShape>();

    constructor(
        svg_text: string,
        private _options: DetectOptions = {},
    ) {
        this.map = parseMap(svg_text);
        for (const shape of this.map.shapes) {
            this._shape_by_element.set(shape.element, shape);
        }
        this._saved = this._state();
        this._saved_unit = this.unit;
    }

    /** Whether the map had a 3D view when it was opened or last saved */
    public get has_saved_3d(): boolean {
        return this._saved_unit > 0;
    }

    public get unit(): number {
        return mapUnit(this.map.svg);
    }

    /** Width of the map in metres at the current scale */
    public get width_metres(): number {
        return this.unit ? this.map.view_box.width / this.unit : 0;
    }

    public get dirty(): boolean {
        return this._state() !== this._saved;
    }

    public get can_undo(): boolean {
        return this._undo.length > 0;
    }

    public get can_redo(): boolean {
        return this._redo.length > 0;
    }

    /** Replace every annotation with what detection works out. */
    public detect(): DetectResult {
        return this._change(() => {
            this.detected = detectMap3D(this.map, {
                ...this._options,
                heights: this._heights(),
            });
            return this.detected;
        });
    }

    /** Give elements a kind. Without a height they take the height in use for that kind. */
    public assign(
        elements: readonly Element[],
        kind: Map3DKind,
        height?: number,
    ) {
        if (!elements.length) return;
        this._change(() =>
            assignAnnotation(elements, {
                kind,
                height: height ?? this.kindHeight(kind),
            }),
        );
    }

    /** Set the scale from the real width of the map in metres. */
    public setWidthMetres(metres: number) {
        if (!(metres > 0)) return;
        this._change(() =>
            setMapUnit(this.map.svg, this.map.view_box.width / metres),
        );
    }

    /** The height in metres most elements of a kind have. */
    public kindHeight(kind: Map3DKind): number {
        if (FLOOR_KINDS.has(kind)) return 0;
        const tally = new Map<number, number>();
        for (const element of this._annotated()) {
            const annotation = ownAnnotation(element);
            if (annotation?.kind !== kind) continue;
            tally.set(
                annotation.height,
                (tally.get(annotation.height) || 0) + 1,
            );
        }
        let height = DEFAULT_HEIGHTS[kind];
        let most = 0;
        for (const [value, count] of tally) {
            if (count > most) {
                height = value;
                most = count;
            }
        }
        return height;
    }

    /** Change the height of every element of a kind that has the kind's usual height. */
    public setKindHeight(kind: Map3DKind, height: number) {
        if (FLOOR_KINDS.has(kind) || !(height > 0)) return;
        height = Math.min(MAX_HEIGHT, height);
        const current = this.kindHeight(kind);
        const usual = this._annotated().filter((element) => {
            const annotation = ownAnnotation(element);
            return annotation?.kind === kind && annotation.height === current;
        });
        if (!usual.length || height === current) return;
        this._change(() => {
            for (const element of usual) {
                setAnnotation(element, { ...ownAnnotation(element)!, height });
            }
        });
    }

    /** Drawn elements of each kind */
    public counts(): Record<Map3DKind, number> {
        const counts = Object.fromEntries(
            MAP_3D_KINDS.map((kind) => [kind, 0]),
        ) as Record<Map3DKind, number>;
        for (const shape of this.map.shapes) {
            counts[effectiveAnnotation(shape.element)?.kind || 'flat']++;
        }
        return counts;
    }

    public kindOf(element: Element): Map3DKind {
        return effectiveAnnotation(element)?.kind || 'flat';
    }

    public heightOf(element: Element): number {
        return effectiveAnnotation(element)?.height || 0;
    }

    /** The drawn elements inside an element, or the element itself when it is one. */
    public shapesIn(element: Element): MapShape[] {
        const own = this._shape_by_element.get(element);
        if (own) return [own];
        return this.map.shapes.filter((shape) =>
            element.contains(shape.element),
        );
    }

    /**
     * Groups of the map from the root down: named groups, and unnamed ones
     * directly below the root.
     */
    public layers(): Map3DLayer[] {
        const counts = new Map<Element, Map<Map3DKind, number>>();
        for (const shape of this.map.shapes) {
            const kind = this.kindOf(shape.element);
            let current = shape.element.parentElement;
            while (current && current !== this.map.svg) {
                let tally = counts.get(current);
                if (!tally) counts.set(current, (tally = new Map()));
                tally.set(kind, (tally.get(kind) || 0) + 1);
                current = current.parentElement;
            }
        }
        const layers: Map3DLayer[] = [];
        const visit = (parent: Element, depth: number) => {
            for (const element of Array.from(parent.children)) {
                const tally = counts.get(element);
                if (!tally || element.localName !== 'g') continue;
                const name = layerName(element);
                if (!name && depth > 0) {
                    visit(element, depth);
                    continue;
                }
                const layer: Map3DLayer = {
                    element,
                    name,
                    depth,
                    count: [...tally.values()].reduce((a, b) => a + b, 0),
                    kind: tally.size === 1 ? [...tally.keys()][0] : 'mixed',
                    hidden: element.hasAttribute(HIDDEN_ATTR),
                    has_children: false,
                };
                layers.push(layer);
                const before = layers.length;
                visit(element, depth + 1);
                layer.has_children = layers.length > before;
            }
        };
        visit(this.map.svg, 0);
        return layers;
    }

    /** Named groups an element is inside, outermost first. */
    public ancestors(element: Element): Element[] {
        const list: Element[] = [];
        let current = element.parentElement;
        while (current && current !== this.map.svg) {
            if (current.localName === 'g') list.unshift(current);
            current = current.parentElement;
        }
        return list;
    }

    /** Drawn elements that look like the given one: same tag, class and paint. */
    public similar(shape: MapShape): MapShape[] {
        const signature = this._signature(shape);
        return this.map.shapes.filter(
            (other) => this._signature(other) === signature,
        );
    }

    public undo() {
        const snapshot = this._undo.pop();
        if (!snapshot) return;
        this._redo.push(this._snapshot());
        this._restore(snapshot);
    }

    public redo() {
        const snapshot = this._redo.pop();
        if (!snapshot) return;
        this._undo.push(this._snapshot());
        this._restore(snapshot);
    }

    /** Take the 3D view off the map. */
    public remove() {
        this._change(() => {
            this.map.svg.removeAttribute(UNIT_ATTR);
            clearAnnotations(this.map.svg);
        });
    }

    /** Hide or show an element in the preview. Not saved and not undone. */
    public setHidden(element: Element, hidden: boolean) {
        if (hidden) element.setAttribute(HIDDEN_ATTR, '');
        else element.removeAttribute(HIDDEN_ATTR);
        this.onChange?.();
    }

    /** The map as SVG text with its annotations */
    public serialise(): string {
        const svg = this.map.svg.cloneNode(true) as Element;
        for (const element of Array.from(
            svg.querySelectorAll(`[${HIDDEN_ATTR}]`),
        )) {
            element.removeAttribute(HIDDEN_ATTR);
        }
        this._serialised = { state: this._state(), unit: this.unit };
        return new XMLSerializer().serializeToString(svg);
    }

    /**
     * Record the map as saved, as it was when it was last serialised.
     * Changes made since then stay unsaved.
     */
    public markSaved() {
        const { state, unit } = this._serialised || {
            state: this._state(),
            unit: this.unit,
        };
        this._saved = state;
        this._saved_unit = unit;
    }

    /** Put the annotations back to how they were when opened or last saved. */
    public revert() {
        if (!this.dirty) return;
        const saved = this._saved;
        this._change(() => {
            clearAnnotations(this.map.svg);
            this.map.svg.removeAttribute(UNIT_ATTR);
            const elements = Array.from(this.map.svg.querySelectorAll('*'));
            for (const part of saved.split(';')) {
                const [index, kind, height, base] = part.split(',');
                if (index.startsWith('unit:')) {
                    const unit = index.slice(5);
                    if (parseFloat(unit) > 0) {
                        this.map.svg.setAttribute(UNIT_ATTR, unit);
                    }
                    continue;
                }
                const element = elements[parseInt(index, 10)];
                if (!element) continue;
                if (kind) element.setAttribute(KIND_ATTR, kind);
                if (height) element.setAttribute(HEIGHT_ATTR, height);
                if (base) element.setAttribute(BASE_ATTR, base);
            }
        });
    }

    private _annotated(): Element[] {
        return Array.from(this.map.svg.querySelectorAll(ANNOTATED));
    }

    private _heights(): Partial<Record<Map3DKind, number>> {
        const heights: Partial<Record<Map3DKind, number>> = {};
        for (const kind of MAP_3D_KINDS) heights[kind] = this.kindHeight(kind);
        return heights;
    }

    private _signature(shape: MapShape): string {
        const { styles } = this.map;
        const element = shape.element;
        return [
            element.localName,
            element.getAttribute('class') || '',
            shape.has_fill
                ? styles.inherited(element, 'fill', 'black')
                : 'none',
            shape.has_stroke ? styles.inherited(element, 'stroke', '') : 'none',
            shape.has_stroke ? shape.stroke_width.toFixed(2) : '',
            shape.opacity.toFixed(2),
        ].join('|');
    }

    private _snapshot(): Snapshot {
        const snapshot: Snapshot = [
            [this.map.svg, this.map.svg.getAttribute(UNIT_ATTR), null, null],
        ];
        for (const element of this._annotated()) {
            snapshot.push([
                element,
                element.getAttribute(KIND_ATTR),
                element.getAttribute(HEIGHT_ATTR),
                element.getAttribute(BASE_ATTR),
            ]);
        }
        return snapshot;
    }

    private _restore(snapshot: Snapshot) {
        clearAnnotations(this.map.svg);
        for (const [element, first, height, base] of snapshot) {
            if (element === this.map.svg) {
                if (first) element.setAttribute(UNIT_ATTR, first);
                else element.removeAttribute(UNIT_ATTR);
                continue;
            }
            clearAnnotation(element);
            if (first !== null) element.setAttribute(KIND_ATTR, first);
            if (height !== null) element.setAttribute(HEIGHT_ATTR, height);
            if (base !== null) element.setAttribute(BASE_ATTR, base);
        }
        this.onChange?.();
    }

    /** Annotations as text, to tell whether anything differs from the saved map */
    private _state(): string {
        const elements = Array.from(this.map.svg.querySelectorAll('*'));
        const index = new Map(elements.map((element, i) => [element, i]));
        const parts = [`unit:${this.unit}`];
        for (const element of this._annotated()) {
            parts.push(
                [
                    index.get(element),
                    element.getAttribute(KIND_ATTR) || '',
                    element.getAttribute(HEIGHT_ATTR) || '',
                    element.getAttribute(BASE_ATTR) || '',
                ].join(','),
            );
        }
        return parts.join(';');
    }

    private _change<T>(change: () => T): T {
        const before = this._snapshot();
        const result = change();
        this._undo.push(before);
        if (this._undo.length > MAX_HISTORY) this._undo.shift();
        this._redo = [];
        this.onChange?.();
        return result;
    }
}
