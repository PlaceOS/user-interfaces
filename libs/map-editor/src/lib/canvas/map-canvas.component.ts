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
    signal,
    untracked,
    viewChild,
} from '@angular/core';
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
            [class.grab]="space_held() && !panning()"
            (pointerdown)="onPointerDown($event)"
            (pointermove)="onPointerMove($event)"
            (pointerup)="onPointerUp($event)"
            (pointercancel)="onPointerUp($event)"
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
                background-color: var(--map-editor-canvas, #e5e7eb);
                background-image:
                    linear-gradient(
                        45deg,
                        rgba(0, 0, 0, 0.04) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        -45deg,
                        rgba(0, 0, 0, 0.04) 25%,
                        transparent 25%
                    ),
                    linear-gradient(
                        45deg,
                        transparent 75%,
                        rgba(0, 0, 0, 0.04) 75%
                    ),
                    linear-gradient(
                        -45deg,
                        transparent 75%,
                        rgba(0, 0, 0, 0.04) 75%
                    );
                background-size: 24px 24px;
                background-position:
                    0 0,
                    0 12px,
                    12px -12px,
                    -12px 0;
            }

            .viewport:focus-visible {
                box-shadow: inset 0 0 0 2px var(--primary, #2563eb);
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
        if (this._mounted_session !== session) {
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
        const index = session.index();
        const selection = session.selection();
        const hover = session.hover();
        if (hover && !selection.includes(hover)) {
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
                ? '#ffb020'
                : kind === 'ghost'
                  ? '#2563eb'
                  : '#00a3ff';
        rect.setAttribute(
            'style',
            `fill:${kind === 'ghost' ? 'rgba(37,99,235,0.12)' : 'none'};stroke:${colour};stroke-width:2;vector-effect:non-scaling-stroke;${kind === 'ghost' ? 'stroke-dasharray:6 4;' : ''}pointer-events:none`,
        );
        overlay.appendChild(rect);
    }
}
