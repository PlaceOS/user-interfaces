import {
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    computed,
    DestroyRef,
    effect,
    ElementRef,
    inject,
    input,
    model,
    signal,
    untracked,
    viewChild,
} from '@angular/core';
import {
    annotationCandidates,
    AnnotationTool,
    drawAnnotations,
} from '../ai/annotations';
import { PreviewMarker, PreviewSummary } from '../ai/preview';
import { MapAIAnnotation } from '../ai/types';
import { SVG_NS } from '../constants';
import { MapIndex } from '../map-index';
import { MapEditorSession } from '../session';
import {
    boundIdLabels,
    deleteOps,
    dragDelta,
    exceedsThreshold,
    moveOps,
} from './edits';
import { candidatesFor, pickTarget } from './hit-test';
import {
    BrowserNotifier,
    DEFAULT_MAP_EDITOR_STRINGS,
    formatString,
    MapEditorNotifier,
    MapEditorStrings,
    resolveStrings,
} from './ports';
import {
    BUTTON_ZOOM,
    fitView,
    panBy,
    ViewState,
    viewTransform,
    WHEEL_ZOOM_IN,
    WHEEL_ZOOM_OUT,
    zoomAt,
} from './view';

interface DragState {
    anchors: string[];
    start: [number, number];
    current: [number, number];
    moved: boolean;
}

interface PanState {
    start: [number, number];
    origin: ViewState;
    moved: boolean;
    clear_on_release: boolean;
}

const HOVER_INTERVAL_MS = 40;
const PRIMARY = 'var(--primary, #2563eb)';
const PREVIEW_COLOURS: Record<string, string> = {
    added: 'var(--success, #16a34a)',
    changed: 'var(--info, #2563eb)',
    removed: 'var(--error, #dc2626)',
};
const removed_dash = (marker: PreviewMarker) =>
    marker.category === 'removed' ? 'stroke-dasharray:4 3;' : '';
const NUDGE_UNITS = 1;
const NUDGE_UNITS_FAST = 10;

const SHADOW_STYLE = `
.map-wrapper { position: absolute; left: 0; top: 0; transform-origin: 0 0; }
.map-wrapper > svg { display: block; }
.map-wrapper > svg.map-editor-overlay { position: absolute; left: 0; top: 0; pointer-events: none; overflow: visible; }
.map-editor-overlay * { pointer-events: none !important; }
`;

type ShadowWithPoints = ShadowRoot & {
    elementsFromPoint?: (x: number, y: number) => Element[];
};

/**
 * The level map inline inside a shadow root with an overlay for hover,
 * selection and drag outlines. Zoom and pan move a wrapper; the map's own
 * attributes are never touched.
 */
@Component({
    selector: 'map-editor-canvas',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div
            #viewport
            class="viewport"
            tabindex="0"
            role="application"
            [attr.aria-label]="strings().canvas_label"
            [class.panning]="panning()"
            [class.drawing]="annotation_tool() !== 'select'"
            [class.grab]="space_held() && !panning()"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerCancel($event)"
            (pointerleave)="onPointerLeave()"
            (wheel)="onWheel($event)"
            (keydown)="onKeyDown($event)"
            (keyup)="onKeyUp($event)"
            (contextmenu)="$event.preventDefault()"
        ></div>
    `,
    styles: [
        `
            :host {
                display: block;
                position: relative;
                overflow: hidden;
                min-height: 0;
                min-width: 0;
            }

            .viewport {
                position: absolute;
                inset: 0;
                outline: none;
                touch-action: none;
                user-select: none;
                background-color: var(--base-200, #e5e7eb);
                background-image: radial-gradient(
                    color-mix(in srgb, var(--base-300, #d4d4d8) 70%, transparent)
                        1px,
                    transparent 1.2px
                );
                background-size: 16px 16px;
            }

            .viewport:focus-visible {
                box-shadow: inset 0 0 0 2px var(--primary, #2563eb);
            }

            .viewport.drawing {
                cursor: crosshair;
            }

            .viewport.grab {
                cursor: grab;
            }

            .viewport.panning {
                cursor: grabbing;
            }
        `,
    ],
})
export class MapEditorCanvasComponent implements AfterViewInit {
    public readonly session = input.required<MapEditorSession>();
    public readonly strings = input<
        MapEditorStrings,
        Partial<MapEditorStrings>
    >(DEFAULT_MAP_EDITOR_STRINGS, { transform: resolveStrings });
    public readonly notifier = input<MapEditorNotifier>(new BrowserNotifier());

    public readonly annotation_tool = model<AnnotationTool>('select');
    public readonly annotations_visible = model(true);
    public readonly annotation_colour = input('red');
    private readonly _mark = signal<MapAIAnnotation | null>(null);
    private _mark_pointer: number | null = null;

    public readonly view = signal<ViewState>({ scale: 1, tx: 0, ty: 0 });
    public readonly zoom_percent = computed(() =>
        Math.round(this.view().scale * 100),
    );
    public readonly panning = signal(false);
    public readonly space_held = signal(false);
    public readonly dragging = computed(() => !!this._drag()?.moved);

    private readonly _viewport =
        viewChild.required<ElementRef<HTMLDivElement>>('viewport');
    private readonly _destroy = inject(DestroyRef);
    private readonly _ready = signal(false);
    private readonly _drag = signal<DragState | null>(null);
    private _shadow: ShadowWithPoints | null = null;
    private _style: HTMLStyleElement | null = null;
    private _wrapper: HTMLDivElement | null = null;
    private _overlay: SVGSVGElement | null = null;
    private _mounted_root: Element | null = null;
    private _mounted_session: MapEditorSession | null = null;
    private _mounted_view_box = '';
    private _fitted = false;
    private _pan: PanState | null = null;
    private _hover_at = 0;
    private _resize: ResizeObserver | null = null;

    constructor() {
        effect(() => {
            if (!this._ready()) return;
            const session = this.session();
            session.version();
            untracked(() => this._syncMount(session));
        });
        effect(() => {
            if (!this._ready()) return;
            const session = this.session();
            session.version();
            session.selection();
            session.hover();
            const drag = this._drag();
            session.annotations();
            session.preview();
            this.annotations_visible();
            this._mark();
            this.view();
            untracked(() => this._drawOverlay(session, drag));
        });
        effect(() => {
            const view = this.view();
            if (this._wrapper)
                this._wrapper.style.transform = viewTransform(view);
        });
        this._destroy.onDestroy(() => {
            this._resize?.disconnect();
            this._resize = null;
        });
    }

    public ngAfterViewInit(): void {
        const host = this._viewport().nativeElement;
        const shadow = host.attachShadow({ mode: 'open' }) as ShadowWithPoints;
        this._style = document.createElement('style');
        this._style.textContent = SHADOW_STYLE;
        this._wrapper = document.createElement('div');
        this._wrapper.className = 'map-wrapper';
        this._overlay = document.createElementNS(SVG_NS, 'svg');
        this._overlay.setAttribute('class', 'map-editor-overlay');
        this._overlay.setAttribute('aria-hidden', 'true');
        this._wrapper.appendChild(this._overlay);
        shadow.append(this._style, this._wrapper);
        this._shadow = shadow;
        if (typeof ResizeObserver !== 'undefined') {
            this._resize = new ResizeObserver(() => {
                if (!this._fitted) this.fit();
            });
            this._resize.observe(host);
        }
        this._ready.set(true);
    }

    public zoomIn(): void {
        this.view.set(zoomAt(this.view(), BUTTON_ZOOM, this._centre()));
    }

    public zoomOut(): void {
        this.view.set(zoomAt(this.view(), 1 / BUTTON_ZOOM, this._centre()));
    }

    /** Show the whole map centred in the viewport. */
    public fit(): void {
        const rect = this._viewport().nativeElement.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        this._fitted = true;
        this.view.set(
            fitView(this.session().doc.view_box, {
                width: rect.width,
                height: rect.height,
            }),
        );
    }

    /** Delete the selection; a bound id needs the person's confirmation first. */
    public async deleteSelection(): Promise<boolean> {
        const session = this.session();
        const anchors = session.selection();
        if (!anchors.length) return false;
        const strings = this.strings();
        const bound = boundIdLabels(session, anchors);
        if (bound.length) {
            const ok = await this.notifier().confirm(
                strings.delete_protected_title,
                formatString(strings.delete_protected_message, {
                    ids: bound.join(', '),
                }),
                strings.confirm_delete,
            );
            if (!ok) return false;
        }
        const result = session.apply(
            deleteOps(anchors, strings.delete_label),
            strings.delete_label,
        );
        return result.applied.length > 0;
    }

    public onPointerDown(event: PointerEvent): void {
        const host = this._viewport().nativeElement;
        host.focus({ preventScroll: true });
        const point: [number, number] = [event.clientX, event.clientY];
        if (event.button === 1 || (event.button === 0 && this.space_held())) {
            this._startPan(event, point, false);
            return;
        }
        if (event.button !== 0) return;
        const session = this.session();
        if (this.annotation_tool() !== 'select') {
            if (session.annotations().length >= 20) return;
            this.annotations_visible.set(true);
            const [x, y] = this._mapPoint(event);
            const kind = this.annotation_tool() as
                | 'ellipse'
                | 'box'
                | 'path'
                | 'arrow';
            this._mark.set({
                n: 0,
                kind,
                colour: this.annotation_colour(),
                text: `${this.annotation_colour()} ${kind === 'ellipse' ? 'circle' : kind === 'box' ? 'rectangle' : kind === 'path' ? 'freehand mark' : 'arrow'}`,
                x,
                y,
                x2: x,
                y2: y,
                width: 0,
                height: 0,
                points: [[x, y]],
            });
            this._mark_pointer = event.pointerId;
            session.select([]);
            session.setHover(null);
            this._capture(event);
            event.preventDefault();
            return;
        }
        const anchor = this._hitAt(event.clientX, event.clientY);
        if (!anchor) {
            this._startPan(event, point, !event.shiftKey);
            return;
        }
        if (event.shiftKey) session.toggleSelected(anchor);
        else if (!session.selection().includes(anchor))
            session.select([anchor]);
        const anchors = session.selection();
        if (!anchors.length) return;
        this._drag.set({
            anchors: [...anchors],
            start: point,
            current: point,
            moved: false,
        });
        this._capture(event);
        event.preventDefault();
    }

    public onPointerMove(event: PointerEvent): void {
        const point: [number, number] = [event.clientX, event.clientY];
        if (this._pan) {
            const pan = this._pan;
            pan.moved = pan.moved || exceedsThreshold(pan.start, point);
            this.view.set(
                panBy(
                    pan.origin,
                    point[0] - pan.start[0],
                    point[1] - pan.start[1],
                ),
            );
            return;
        }
        if (this._mark()) {
            if (event.pointerId === this._mark_pointer) this._updateMark(event);
            return;
        }
        if (this.annotation_tool() !== 'select') return;
        const drag = this._drag();
        if (drag) {
            this._drag.set({
                ...drag,
                current: point,
                moved: drag.moved || exceedsThreshold(drag.start, point),
            });
            return;
        }
        const now = performance.now();
        if (now - this._hover_at < HOVER_INTERVAL_MS) return;
        this._hover_at = now;
        this.session().setHover(this._hitAt(event.clientX, event.clientY));
    }

    public onPointerUp(event: PointerEvent): void {
        if (this._mark()) {
            if (event.pointerId !== this._mark_pointer) return;
            this._updateMark(event);
            const mark = this._normalisedMark(this._mark()!);
            this._mark.set(null);
            this._mark_pointer = null;
            this._release(event);
            const points = mark.points || [];
            const extent =
                mark.kind === 'ellipse' || mark.kind === 'box'
                    ? Math.min(mark.width || 0, mark.height || 0)
                    : mark.kind === 'arrow'
                      ? Math.hypot(
                            (mark.x2 || 0) - (mark.x || 0),
                            (mark.y2 || 0) - (mark.y || 0),
                        )
                      : points.length > 1
                        ? Math.max(...points.map(([x]) => x)) -
                          Math.min(...points.map(([x]) => x)) +
                          Math.max(...points.map(([, y]) => y)) -
                          Math.min(...points.map(([, y]) => y))
                        : 0;
            if (extent * this.view().scale >= 5) {
                this.session().addAnnotation({
                    ...mark,
                    hits: annotationCandidates(this.session().index(), mark),
                });
            }
            return;
        }
        if (this._pan) {
            const pan = this._pan;
            this._pan = null;
            this.panning.set(false);
            this._release(event);
            if (!pan.moved && pan.clear_on_release) this.session().select([]);
            return;
        }
        const drag = this._drag();
        if (!drag) return;
        this._drag.set(null);
        this._release(event);
        if (!drag.moved) return;
        const strings = this.strings();
        const [dx, dy] = dragDelta(drag.start, drag.current, this.view().scale);
        const ops = moveOps(drag.anchors, dx, dy, strings.move_label);
        if (ops.length) this.session().apply(ops, strings.move_label);
    }

    public onPointerCancel(event: PointerEvent): void {
        this._mark.set(null);
        this._mark_pointer = null;
        this._drag.set(null);
        this._pan = null;
        this.panning.set(false);
        this._release(event);
    }

    private _normalisedMark(mark: MapAIAnnotation): MapAIAnnotation {
        if (mark.kind === 'ellipse' || mark.kind === 'box')
            return {
                ...mark,
                x: Math.min(mark.x || 0, mark.x2 || 0),
                y: Math.min(mark.y || 0, mark.y2 || 0),
            };
        if (mark.kind !== 'path' || !mark.points?.length) return mark;
        const points = mark.points;
        const xs = points.map(([x]) => x);
        const ys = points.map(([, y]) => y);
        const x = Math.min(...xs);
        const y = Math.min(...ys);
        const sampled =
            points.length > 40
                ? Array.from(
                      { length: 40 },
                      (_, i) =>
                          points[Math.round((i * (points.length - 1)) / 39)],
                  )
                : points;
        return {
            ...mark,
            x,
            y,
            width: Math.max(...xs) - x,
            height: Math.max(...ys) - y,
            points: sampled,
        };
    }

    private _mapPoint(event: PointerEvent): [number, number] {
        const rect = this._viewport().nativeElement.getBoundingClientRect();
        const view = this.view();
        const box = this.session().doc.view_box;
        return [
            box.x + (event.clientX - rect.left - view.tx) / view.scale,
            box.y + (event.clientY - rect.top - view.ty) / view.scale,
        ];
    }

    private _updateMark(event: PointerEvent): void {
        const mark = this._mark();
        if (!mark) return;
        const [x, y] = this._mapPoint(event);
        if (mark.kind === 'path') {
            const points = mark.points || [];
            const last = points[points.length - 1];
            if (
                last &&
                Math.hypot(x - last[0], y - last[1]) * this.view().scale < 2
            )
                return;
            const sampled =
                points.length >= 200
                    ? points.filter((_, i) => i % 2 === 0)
                    : points;
            this._mark.set({ ...mark, points: [...sampled, [x, y]] });
        } else
            this._mark.set({
                ...mark,
                x2: x,
                y2: y,
                width: Math.abs(x - (mark.x || 0)),
                height: Math.abs(y - (mark.y || 0)),
            });
    }

    public onPointerLeave(): void {
        if (!this._pan && !this._drag()) this.session().setHover(null);
    }

    public onWheel(event: WheelEvent): void {
        event.preventDefault();
        const rect = this._viewport().nativeElement.getBoundingClientRect();
        const factor = event.deltaY > 0 ? WHEEL_ZOOM_OUT : WHEEL_ZOOM_IN;
        this.view.set(
            zoomAt(this.view(), factor, [
                event.clientX - rect.left,
                event.clientY - rect.top,
            ]),
        );
    }

    public onKeyDown(event: KeyboardEvent): void {
        const session = this.session();
        const strings = this.strings();
        const modifier = event.metaKey || event.ctrlKey;
        let handled = true;
        switch (event.key) {
            case 'Delete':
            case 'Backspace':
                void this.deleteSelection();
                break;
            case 'Escape':
                this._mark.set(null);
                this._mark_pointer = null;
                this.annotation_tool.set('select');
                session.select([]);
                session.setHover(null);
                break;
            case '+':
            case '=':
                this.zoomIn();
                break;
            case '-':
            case '_':
                this.zoomOut();
                break;
            case '0':
                this.fit();
                break;
            case ' ':
                if (!event.repeat) this.space_held.set(true);
                break;
            case 'ArrowUp':
            case 'ArrowDown':
            case 'ArrowLeft':
            case 'ArrowRight': {
                const step = event.shiftKey ? NUDGE_UNITS_FAST : NUDGE_UNITS;
                const dx =
                    event.key === 'ArrowLeft'
                        ? -step
                        : event.key === 'ArrowRight'
                          ? step
                          : 0;
                const dy =
                    event.key === 'ArrowUp'
                        ? -step
                        : event.key === 'ArrowDown'
                          ? step
                          : 0;
                const ops = moveOps(
                    session.selection(),
                    dx,
                    dy,
                    strings.nudge_label,
                );
                if (ops.length) session.apply(ops, strings.nudge_label);
                else handled = false;
                break;
            }
            case 'z':
            case 'Z':
                if (!modifier) handled = false;
                else if (event.shiftKey) session.redo();
                else if (
                    this.annotation_tool() !== 'select' &&
                    session.annotations().length
                )
                    session.undoAnnotation();
                else session.undo();
                break;
            case 'y':
            case 'Y':
                if (modifier) session.redo();
                else handled = false;
                break;
            default:
                handled = false;
        }
        if (handled) {
            event.preventDefault();
            event.stopPropagation();
        }
    }

    public onKeyUp(event: KeyboardEvent): void {
        if (event.key !== ' ') return;
        this.space_held.set(false);
        if (this._pan && !this._drag()) {
            this._pan = null;
            this.panning.set(false);
        }
    }

    private _startPan(
        event: PointerEvent,
        point: [number, number],
        clear_on_release: boolean,
    ): void {
        this._pan = {
            start: point,
            origin: this.view(),
            moved: false,
            clear_on_release,
        };
        this.panning.set(true);
        this._capture(event);
        event.preventDefault();
    }

    private _capture(event: PointerEvent): void {
        try {
            this._viewport().nativeElement.setPointerCapture(event.pointerId);
        } catch {
            // pointer capture is unavailable in some test environments
        }
    }

    private _release(event: PointerEvent): void {
        try {
            this._viewport().nativeElement.releasePointerCapture(
                event.pointerId,
            );
        } catch {
            // nothing was captured
        }
    }

    private _centre(): [number, number] {
        const rect = this._viewport().nativeElement.getBoundingClientRect();
        return [rect.width / 2, rect.height / 2];
    }

    private _hitAt(x: number, y: number): string | null {
        const shadow = this._shadow;
        const session = this.session();
        if (!shadow || typeof shadow.elementsFromPoint !== 'function')
            return null;
        const hits = shadow.elementsFromPoint(x, y);
        const candidates = candidatesFor(
            hits,
            session.doc.root,
            session.index(),
            (element) => session.doc.anchorOf(element),
        );
        return pickTarget(candidates);
    }

    private _syncMount(session: MapEditorSession): void {
        const wrapper = this._wrapper;
        const overlay = this._overlay;
        const style = this._style;
        if (!wrapper || !overlay || !style) return;
        const root = session.doc.root;
        const box = session.doc.view_box;
        const box_key = `${box.x} ${box.y} ${box.width} ${box.height}`;
        if (
            this._mounted_session !== session ||
            this._mounted_view_box !== box_key
        ) {
            this._mounted_view_box = box_key;
            this._mounted_session = session;
            this._fitted = false;
            const { x, y, width, height } = session.doc.view_box;
            style.textContent = `${SHADOW_STYLE}\n.map-wrapper, .map-wrapper > svg { width: ${width}px; height: ${height}px; }`;
            overlay.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
            overlay.setAttribute('width', `${width}`);
            overlay.setAttribute('height', `${height}`);
        }
        if (this._mounted_root !== root) {
            if (
                this._mounted_root &&
                this._mounted_root.parentNode === wrapper &&
                this._mounted_root !== root
            ) {
                wrapper.removeChild(this._mounted_root);
            }
            if (root.parentNode !== wrapper)
                wrapper.insertBefore(root, overlay);
            this._mounted_root = root;
        }
        if (!this._fitted) this.fit();
    }

    private _drawOverlay(
        session: MapEditorSession,
        drag: DragState | null,
    ): void {
        const overlay = this._overlay;
        if (!overlay) return;
        while (overlay.firstChild) overlay.removeChild(overlay.firstChild);
        const pending = this._mark();
        drawAnnotations(
            overlay,
            [
                ...(this.annotations_visible() ? session.annotations() : []),
                ...(pending ? [this._normalisedMark(pending)] : []),
            ],
            1 / this.view().scale,
        );
        const index = session.index();
        const selection = session.selection();
        const hover = session.hover();
        const preview = session.preview();
        const hot_marker = hover
            ? preview?.markers.find((marker) => marker.anchors.includes(hover))
            : undefined;
        if (hover && !selection.includes(hover) && !hot_marker) {
            this._outline(overlay, index, hover, 'hover', [0, 0]);
        }
        for (const anchor of selection) {
            this._outline(overlay, index, anchor, 'selected', [0, 0]);
        }
        if (drag?.moved) {
            const delta = dragDelta(
                drag.start,
                drag.current,
                this.view().scale,
            );
            for (const anchor of drag.anchors) {
                this._outline(overlay, index, anchor, 'ghost', delta);
            }
        }
        if (preview) this._drawPreview(overlay, index, preview, hover);
    }

    /** Category outlines and numbered pins for the proposal previewed on the map. */
    private _drawPreview(
        overlay: SVGSVGElement,
        index: MapIndex,
        preview: PreviewSummary,
        hover: string | null,
    ): void {
        const units_per_px = 1 / this.view().scale;
        for (const marker of preview.markers) {
            const box = this._unionBox(index, marker);
            if (!box) continue;
            const [x, y, width, height] = box;
            const hot = !!hover && marker.anchors.includes(hover);
            const colour = PREVIEW_COLOURS[marker.category] || PREVIEW_COLOURS.changed;
            const stroke = hot ? PRIMARY : colour;
            const group = document.createElementNS(SVG_NS, 'g');
            group.setAttribute('data-preview', String(marker.n));
            group.setAttribute('data-category', marker.category);
            if (hot) group.setAttribute('data-hot', 'true');
            if (marker.applied || marker.category === 'removed') {
                const removed = marker.category === 'removed';
                const outline = document.createElementNS(SVG_NS, 'rect');
                outline.setAttribute('x', `${x}`);
                outline.setAttribute('y', `${y}`);
                outline.setAttribute('width', `${Math.max(width, 0.5)}`);
                outline.setAttribute('height', `${Math.max(height, 0.5)}`);
                const radius = removed
                    ? Math.min(width, height) / 2
                    : units_per_px * 3;
                outline.setAttribute('rx', `${radius}`);
                outline.setAttribute(
                    'style',
                    `fill:none;stroke:${hot ? PRIMARY : colour};stroke-width:${hot ? 3 : 2};vector-effect:non-scaling-stroke;${removed ? 'stroke-dasharray:6 4;' : ''}pointer-events:none`,
                );
                if (hot) {
                    const halo = outline.cloneNode() as SVGRectElement;
                    halo.setAttribute(
                        'style',
                        `fill:none;stroke:${PRIMARY};stroke-opacity:0.18;stroke-width:9;vector-effect:non-scaling-stroke;pointer-events:none`,
                    );
                    group.appendChild(halo);
                }
                group.appendChild(outline);
            }
            const radius = units_per_px * 11;
            const pin = document.createElementNS(SVG_NS, 'circle');
            pin.setAttribute('cx', `${x}`);
            pin.setAttribute('cy', `${y}`);
            pin.setAttribute('r', `${radius}`);
            pin.setAttribute(
                'style',
                `fill:${hot ? PRIMARY : 'var(--base-100, #fff)'};stroke:${stroke};stroke-width:2;vector-effect:non-scaling-stroke;${removed_dash(marker)}pointer-events:none`,
            );
            const label = document.createElementNS(SVG_NS, 'text');
            label.setAttribute('x', `${x}`);
            label.setAttribute('y', `${y}`);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('dominant-baseline', 'central');
            label.setAttribute(
                'style',
                `font:700 ${units_per_px * 12}px Roboto, sans-serif;fill:${hot ? 'var(--primary-content, #fff)' : 'var(--base-content, #111)'};pointer-events:none`,
            );
            label.textContent = String(marker.n);
            group.append(pin, label);
            overlay.appendChild(group);
        }
    }

    /** The box around every element a marker touches; null when none is in the map. */
    private _unionBox(
        index: MapIndex,
        marker: PreviewMarker,
    ): [number, number, number, number] | null {
        let box: [number, number, number, number] | null = null;
        for (const anchor of marker.anchors) {
            const bbox = index.by_anchor.get(anchor)?.bbox;
            if (!bbox) continue;
            if (!box) {
                box = [...bbox] as [number, number, number, number];
                continue;
            }
            const x = Math.min(box[0], bbox[0]);
            const y = Math.min(box[1], bbox[1]);
            const x2 = Math.max(box[0] + box[2], bbox[0] + bbox[2]);
            const y2 = Math.max(box[1] + box[3], bbox[1] + bbox[3]);
            box = [x, y, x2 - x, y2 - y];
        }
        return box;
    }

    private _outline(
        overlay: SVGSVGElement,
        index: MapIndex,
        anchor: string,
        kind: 'hover' | 'selected' | 'ghost',
        offset: readonly [number, number],
    ): void {
        const bbox = index.by_anchor.get(anchor)?.bbox;
        if (!bbox) return;
        const rect = document.createElementNS(SVG_NS, 'rect');
        rect.setAttribute('x', `${bbox[0] + offset[0]}`);
        rect.setAttribute('y', `${bbox[1] + offset[1]}`);
        rect.setAttribute('width', `${Math.max(bbox[2], 0.5)}`);
        rect.setAttribute('height', `${Math.max(bbox[3], 0.5)}`);
        rect.setAttribute('data-outline', kind);
        const colour =
            kind === 'hover'
                ? 'var(--warn, #ffb020)'
                : kind === 'ghost'
                  ? 'var(--info, #2563eb)'
                  : PRIMARY;
        rect.setAttribute(
            'style',
            `fill:${kind === 'ghost' ? 'color-mix(in srgb, var(--info, #2563eb) 12%, transparent)' : 'none'};stroke:${colour};stroke-width:2;vector-effect:non-scaling-stroke;${kind === 'ghost' ? 'stroke-dasharray:6 4;' : ''}pointer-events:none`,
        );
        overlay.appendChild(rect);
    }
}
