import {
    Component,
    DestroyRef,
    ElementRef,
    afterNextRender,
    computed,
    effect,
    inject,
    input,
    linkedSignal,
    signal,
    untracked,
    viewChild,
} from '@angular/core';

import { IconComponent } from '@placeos/components';

import { AvailabilityState, Floorplan, MapObject } from '../data/types';
import { STATE_COLORS } from '../editor/availability';
import { composeSourceSvg, importedObject } from '../editor/source-svg';
import { computeHeatmap } from './heatmap';

/** Non-colour cue for each state, so states read without colour vision */
export const STATE_SYMBOLS: Record<AvailabilityState, string> = {
    free: '✓',
    available: '✓',
    pending: '◔',
    booked: '◐',
    'checked-in': '●',
    occupied: '✕',
    'out-of-service': '⊘',
    unavailable: '⊘',
    restricted: '▲',
};

/** Human label for a state, e.g. "out of service" */
export const stateLabel = (state: AvailabilityState) =>
    state.replace(/-/g, ' ');

/** `#rrggbb` to `rgba()` so fills share the legend palette */
function withAlpha(hex: string, alpha: number) {
    const value = parseInt(hex.slice(1), 16);
    return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
}

const DEFAULT_FILL = 'rgba(100, 116, 139, 0.2)';
/** Desks with no state yet stay neutral rather than looking free */
const DEFAULT_DESK_FILL = 'rgba(100, 116, 139, 0.45)';
const DEFAULT_STROKE = '#475569';

/** Smallest on-screen size, in CSS px, a label may render at */
const MIN_LABEL_PX = 15;
/** Average glyph width as a share of the font size, to guess text width */
const CHAR_WIDTH = 0.6;
const MAX_ZOOM = 8;
/** Pointer travel, in CSS px, that turns a tap into a drag */
const TAP_SLOP_PX = 8;

interface ViewBox {
    x: number;
    y: number;
    w: number;
    h: number;
}

interface Bounds extends ViewBox {
    cx: number;
    cy: number;
}

interface ShapeText {
    x: number;
    y: number;
    size: number;
    text: string;
}

/** Text drawn on a shape; anything that cannot fit is left out */
interface ShapeLayout {
    label: ShapeText | null;
    status: ShapeText | null;
    /** State symbol alone, for shapes too small for words */
    mark: ShapeText | null;
}

const clamp = (value: number, min: number, max: number) =>
    Math.min(max, Math.max(min, value));

/** Box around a rect or polygon, centred on the polygon's average point */
function boundsOf(object: MapObject): Bounds | null {
    const g = object.geometry;
    if (g.type === 'rect') {
        const x = g.x ?? 0;
        const y = g.y ?? 0;
        const w = g.width ?? 50;
        const h = g.height ?? 50;
        return { x, y, w, h, cx: x + w / 2, cy: y + h / 2 };
    }
    if (g.type !== 'polygon' || !g.points?.length) return null;
    const xs = g.points.map((p) => p.x);
    const ys = g.points.map((p) => p.y);
    const x = Math.min(...xs);
    const y = Math.min(...ys);
    return {
        x,
        y,
        w: Math.max(...xs) - x,
        h: Math.max(...ys) - y,
        cx: xs.reduce((sum, v) => sum + v, 0) / xs.length,
        cy: ys.reduce((sum, v) => sum + v, 0) / ys.length,
    };
}

/** Map object id under a pointer event target, if any */
function objectIdOf(target: EventTarget | null) {
    if (!(target instanceof Element)) return null;
    return target.closest('[data-object-id]')?.getAttribute('data-object-id');
}

@Component({
    selector: 'map-studio-floor-plan-2d',
    imports: [IconComponent],
    template: `
        <div class="relative h-full w-full overflow-hidden bg-[#0d1117]">
            <svg
                #svg
                [attr.viewBox]="viewBoxAttr()"
                preserveAspectRatio="xMidYMid meet"
                class="block h-full w-full touch-none select-none"
                (pointerdown)="onPointerDown($event)"
                (pointerup)="onPointerUp($event)"
                (pointercancel)="onPointerCancel($event)"
                (wheel)="onWheel($event)"
            >
                <rect
                    x="0"
                    y="0"
                    [attr.width]="width()"
                    [attr.height]="height()"
                    [attr.fill]="background()"
                />

                @if (sourceImage(); as href) {
                    <image
                        [attr.href]="href"
                        x="0"
                        y="0"
                        [attr.width]="width()"
                        [attr.height]="height()"
                        class="pointer-events-none"
                    />
                }

                @if (!floorplan().svg_source && image_url(); as href) {
                    <image
                        [attr.href]="href"
                        x="0"
                        y="0"
                        [attr.width]="width()"
                        [attr.height]="height()"
                        opacity="0.35"
                        class="pointer-events-none"
                    />
                }

                @if (heatmap().length) {
                    <defs>
                        <filter id="kiosk-heatmap-blur">
                            <feGaussianBlur
                                [attr.stdDeviation]="width() / 40"
                            />
                        </filter>
                    </defs>
                    <g
                        filter="url(#kiosk-heatmap-blur)"
                        class="pointer-events-none"
                    >
                        @for (cell of heatmap(); track $index) {
                            <rect
                                [attr.x]="cell.x"
                                [attr.y]="cell.y"
                                [attr.width]="cell.w"
                                [attr.height]="cell.h"
                                [attr.fill]="cell.color"
                                [attr.opacity]="cell.opacity"
                            />
                        }
                    </g>
                }

                <!-- Walls sit under everything else -->
                @for (object of walls(); track object.id) {
                    @if (object.geometry.type === 'polygon') {
                        <polygon
                            [attr.points]="pointsOf(object)"
                            fill="#374151"
                            stroke="#1f2937"
                            stroke-width="1"
                            opacity="0.85"
                            class="pointer-events-none"
                        />
                    } @else {
                        <rect
                            [attr.x]="object.geometry.x ?? 0"
                            [attr.y]="object.geometry.y ?? 0"
                            [attr.width]="object.geometry.width ?? 10"
                            [attr.height]="object.geometry.height ?? 10"
                            fill="#374151"
                            stroke="#1f2937"
                            stroke-width="1"
                            opacity="0.85"
                            class="pointer-events-none"
                        />
                    }
                }

                <!-- Back to front. Imported rooms and desks are drawn in the source
                     image, so they get invisible targets under the drawn shapes of
                     their kind: a zone never covers them, and a desk added on top wins. -->
                @for (item of drawOrder(); track item.object.id) {
                    @let object = item.object;
                    @if (item.target) {
                        <g
                            class="cursor-pointer"
                            fill="#000"
                            fill-opacity="0"
                            [attr.data-object-id]="object.id"
                            (pointerenter)="onHover($event, object.id)"
                            (pointerleave)="onHover($event, null)"
                        >
                            @switch (object.geometry.type) {
                                @case ('polygon') {
                                    <polygon [attr.points]="pointsOf(object)" />
                                }
                                @case ('circle') {
                                    <circle
                                        [attr.cx]="object.geometry.x ?? 0"
                                        [attr.cy]="object.geometry.y ?? 0"
                                        [attr.r]="object.geometry.r ?? 12"
                                    />
                                }
                                @case ('path') {
                                    <path [attr.d]="object.geometry.d" />
                                }
                                @default {
                                    <rect
                                        [attr.x]="object.geometry.x ?? 0"
                                        [attr.y]="object.geometry.y ?? 0"
                                        [attr.width]="
                                            object.geometry.width ?? 0
                                        "
                                        [attr.height]="
                                            object.geometry.height ?? 0
                                        "
                                    />
                                }
                            }
                        </g>
                    } @else {
                        <g
                            class="cursor-pointer"
                            [attr.data-object-id]="object.id"
                            (pointerenter)="onHover($event, object.id)"
                            (pointerleave)="onHover($event, null)"
                        >
                            @switch (object.geometry.type) {
                                @case ('rect') {
                                    <rect
                                        [attr.x]="object.geometry.x ?? 0"
                                        [attr.y]="object.geometry.y ?? 0"
                                        [attr.width]="
                                            object.geometry.width ?? 50
                                        "
                                        [attr.height]="
                                            object.geometry.height ?? 50
                                        "
                                        [attr.fill]="fillOf(object)"
                                        [attr.stroke]="strokeOf(object)"
                                        [attr.stroke-width]="
                                            strokeWidthOf(object)
                                        "
                                        rx="2"
                                        [attr.opacity]="
                                            object.id === emphasis() ? 1 : 0.9
                                        "
                                    />
                                }
                                @case ('polygon') {
                                    <polygon
                                        [attr.points]="pointsOf(object)"
                                        [attr.fill]="fillOf(object)"
                                        [attr.stroke]="strokeOf(object)"
                                        [attr.stroke-width]="
                                            strokeWidthOf(object)
                                        "
                                        [attr.opacity]="
                                            object.id === emphasis() ? 1 : 0.9
                                        "
                                    />
                                }
                                @case ('circle') {
                                    <circle
                                        [attr.cx]="object.geometry.x ?? 0"
                                        [attr.cy]="object.geometry.y ?? 0"
                                        [attr.r]="object.geometry.r ?? 12"
                                        [attr.fill]="fillOf(object)"
                                        [attr.stroke]="strokeOf(object)"
                                        [attr.stroke-width]="
                                            strokeWidthOf(object)
                                        "
                                    />
                                }
                            }
                            @if (layouts().get(object.id); as layout) {
                                @if (layout.label; as text) {
                                    <text
                                        [attr.x]="text.x"
                                        [attr.y]="text.y"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#e6edf3"
                                        [attr.font-size]="text.size"
                                        font-weight="600"
                                        class="pointer-events-none"
                                    >
                                        {{ text.text }}
                                    </text>
                                }
                                @if (layout.status; as text) {
                                    <text
                                        [attr.x]="text.x"
                                        [attr.y]="text.y"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        [attr.fill]="strokeOf(object)"
                                        [attr.font-size]="text.size"
                                        font-weight="700"
                                        letter-spacing="0.5"
                                        class="pointer-events-none"
                                    >
                                        {{ text.text }}
                                    </text>
                                }
                                @if (layout.mark; as text) {
                                    <text
                                        [attr.x]="text.x"
                                        [attr.y]="text.y"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#ffffff"
                                        stroke="#0d1117"
                                        [attr.stroke-width]="text.size * 0.15"
                                        paint-order="stroke"
                                        [attr.font-size]="text.size"
                                        font-weight="700"
                                        class="pointer-events-none"
                                    >
                                        {{ text.text }}
                                    </text>
                                }
                            }
                        </g>
                    }
                }

                <!-- Amenities render on top as pins -->
                @for (object of amenities(); track object.id) {
                    <g
                        class="cursor-pointer"
                        [attr.data-object-id]="object.id"
                        (pointerenter)="onHover($event, object.id)"
                        (pointerleave)="onHover($event, null)"
                    >
                        <circle
                            [attr.cx]="object.geometry.x ?? 0"
                            [attr.cy]="object.geometry.y ?? 0"
                            [attr.r]="amenityRadius()"
                            fill="#0ea5e9"
                            stroke="#fff"
                            stroke-width="1.5"
                            opacity="0.9"
                        />
                        @if (object.id === emphasis() && object.label) {
                            <text
                                [attr.x]="object.geometry.x ?? 0"
                                [attr.y]="
                                    (object.geometry.y ?? 0) -
                                    amenityRadius() -
                                    fontSize()
                                "
                                text-anchor="middle"
                                dominant-baseline="central"
                                fill="#e6edf3"
                                stroke="#0d1117"
                                [attr.stroke-width]="fontSize() * 0.2"
                                paint-order="stroke"
                                [attr.font-size]="fontSize()"
                                font-weight="600"
                                class="pointer-events-none"
                            >
                                {{ object.label }}
                            </text>
                        }
                    </g>
                }

                <!-- Pulsing ring around the space the kiosk called out -->
                @if (highlight_ring(); as ring) {
                    <rect
                        [attr.x]="ring.x"
                        [attr.y]="ring.y"
                        [attr.width]="ring.w"
                        [attr.height]="ring.h"
                        [attr.rx]="ring.stroke * 2"
                        fill="none"
                        stroke="#facc15"
                        [attr.stroke-width]="ring.stroke"
                        class="highlight-ring pointer-events-none"
                    />
                }
            </svg>

            @if (details(); as info) {
                <div
                    class="bg-base-200 border-base-300 text-base-content absolute bottom-4 left-4 z-10 flex max-w-sm items-start gap-3 rounded-lg border p-4 shadow-lg"
                    role="status"
                >
                    <div class="min-w-0 flex-1">
                        <div class="truncate text-xl font-bold">
                            {{ info.label }}
                        </div>
                        <div class="text-base-content/70 text-base capitalize">
                            {{ info.type }}
                            @if (info.capacity) {
                                · {{ info.capacity }} seats
                            }
                        </div>
                        @if (info.state) {
                            <div
                                class="mt-1 flex items-center gap-2 text-lg font-semibold capitalize"
                                [style.color]="info.color"
                            >
                                <span aria-hidden="true">{{
                                    info.symbol
                                }}</span>
                                {{ info.state }}
                            </div>
                        }
                    </div>
                    @if (selected()) {
                        <button
                            class="text-base-content/70 hover:text-base-content -mt-2 -mr-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-2xl"
                            aria-label="Close details"
                            (click)="selected.set(null)"
                        >
                            <icon>close</icon>
                        </button>
                    }
                </div>
            }

            <button
                class="bg-base-200 border-base-300 text-base-content absolute right-4 bottom-4 z-10 flex min-h-11 items-center gap-2 rounded-lg border px-4 text-base font-semibold shadow-lg disabled:opacity-50"
                [disabled]="!view()"
                (click)="resetView()"
            >
                <icon aria-hidden="true">fit_screen</icon>
                Reset view
            </button>
        </div>
    `,
    styles: [
        `
            :host {
                display: block;
                height: 100%;
                width: 100%;
            }

            .highlight-ring {
                animation: highlight-pulse 1.2s ease-in-out infinite;
            }

            @keyframes highlight-pulse {
                50% {
                    opacity: 0.3;
                }
            }

            @media (prefers-reduced-motion: reduce) {
                .highlight-ring {
                    animation: none;
                }
            }
        `,
    ],
})
export class FloorPlan2dComponent {
    public readonly floorplan = input.required<Floorplan>();
    public readonly objects = input.required<MapObject[]>();
    public readonly availability =
        input.required<Record<string, AvailabilityState>>();
    public readonly heatmap_enabled = input(false);
    public readonly image_url = input<string | null>(null);
    /** Object the kiosk wants called out, e.g. a search hit */
    public readonly highlight = input<string | null>(null);

    private readonly _svg =
        viewChild.required<ElementRef<SVGSVGElement>>('svg');
    /** Rendered size of the SVG element in CSS px */
    private readonly _px = signal({ w: 0, h: 0 });
    /** Pointers that are down on the plan, by pointer id, in client px */
    private readonly _pointers = new Map<number, { x: number; y: number }>();
    /** Where a possible tap started; cleared once the pointer drags */
    private _tap: { id: string | null; x: number; y: number } | null = null;

    /** Mouse hover preview */
    public readonly hover = signal<string | null>(null);
    /** Object opened by a tap or click; cleared when the floor changes */
    public readonly selected = linkedSignal<Floorplan, string | null>({
        source: this.floorplan,
        computation: () => null,
    });
    /** Zoomed part of the canvas; null fits the whole floor */
    public readonly view = linkedSignal<Floorplan, ViewBox | null>({
        source: this.floorplan,
        computation: () => null,
    });

    /** Selection wins, then pointer, then whatever the kiosk called out */
    public readonly emphasis = computed(
        () => this.selected() ?? this.hover() ?? this.highlight(),
    );

    public readonly width = computed(
        () => this.floorplan().canvas_width ?? 1000,
    );
    public readonly height = computed(
        () => this.floorplan().canvas_height ?? 800,
    );
    public readonly background = computed(
        () => this.floorplan().background_color || '#161b22',
    );

    public readonly viewBox = computed<ViewBox>(
        () => this.view() ?? { x: 0, y: 0, w: this.width(), h: this.height() },
    );
    public readonly viewBoxAttr = computed(() => {
        const { x, y, w, h } = this.viewBox();
        return `${x} ${y} ${w} ${h}`;
    });

    /** Canvas units per CSS px at the current zoom */
    public readonly unitsPerPx = computed(() => {
        const { w, h } = this._px();
        const box = this.viewBox();
        if (!w || !h) return box.w / 1000;
        // "meet" scales by whichever axis is tighter
        return Math.max(box.w / w, box.h / h);
    });

    /** Label size in canvas units, never below MIN_LABEL_PX on screen */
    public readonly fontSize = computed(() =>
        Math.max(
            MIN_LABEL_PX * this.unitsPerPx(),
            Math.min(this.width() / 80, 14),
        ),
    );

    public readonly amenityRadius = computed(() =>
        Math.max(6, this.width() / 120),
    );

    public readonly sourceImage = computed(() => {
        const floor = this.floorplan();
        if (!floor.svg_source) return null;
        const objects = this.objects().map((object) =>
            this.availability()[object.id]
                ? {
                      ...object,
                      fill_color: this.fillOf(object),
                      stroke_color: this.strokeOf(object),
                  }
                : object,
        );
        return `data:image/svg+xml,${encodeURIComponent(composeSourceSvg(floor.svg_source, objects, floor.svg_source_ids))}`;
    });

    private readonly _visible = computed(() =>
        this.objects().filter(
            (o) =>
                o.visible &&
                (!this.floorplan().svg_source || !importedObject(o)),
        ),
    );

    public readonly walls = computed(() =>
        this._visible().filter(
            (o) => o.object_type === 'decorative' && o.layer === 'walls',
        ),
    );

    public readonly amenities = computed(() =>
        this._visible().filter((o) => o.object_type === 'amenity'),
    );

    /** Zones, then rooms, then desks, then anything else — back to front */
    public readonly shapes = computed(() => {
        const visible = this._visible();
        const isWall = (o: MapObject) =>
            o.object_type === 'decorative' && o.layer === 'walls';
        const zones = visible.filter(
            (o) => o.object_type === 'zone' || o.object_type === 'area',
        );
        const rooms = visible.filter((o) => o.object_type === 'room');
        const desks = visible.filter((o) => o.object_type === 'desk');
        const other = visible.filter(
            (o) =>
                !['room', 'desk', 'amenity', 'zone', 'area'].includes(
                    o.object_type,
                ) && !isWall(o),
        );
        return [...zones, ...rooms, ...desks, ...other];
    });

    /**
     * What takes taps, back to front: zones, rooms, desks, then the rest.
     * Imported rooms and desks live in the source image, so they come as
     * invisible targets under the drawn shapes of their kind.
     */
    public readonly drawOrder = computed(() => {
        const drawn = this.shapes();
        const imported = this.floorplan().svg_source
            ? this.objects().filter((o) => o.visible && importedObject(o))
            : [];
        const ofType = (list: MapObject[], ...types: string[]) =>
            list.filter((o) => types.includes(o.object_type));
        const shape = (object: MapObject) => ({ object, target: false });
        const target = (object: MapObject) => ({ object, target: true });
        return [
            ...ofType(drawn, 'zone', 'area').map(shape),
            ...ofType(imported, 'room').map(target),
            ...ofType(drawn, 'room').map(shape),
            ...ofType(imported, 'desk').map(target),
            ...ofType(drawn, 'desk').map(shape),
            ...drawn
                .filter(
                    (o) =>
                        !['zone', 'area', 'room', 'desk'].includes(
                            o.object_type,
                        ),
                )
                .map(shape),
        ];
    });

    /** Text for each shape, sized for the current zoom */
    public readonly layouts = computed(() => {
        const states = this.availability();
        const font = this.fontSize();
        const layouts = new Map<string, ShapeLayout>();
        for (const object of this.shapes()) {
            const bounds = boundsOf(object);
            const state = states[object.id];
            const layout = bounds && this._layout(object, bounds, font, state);
            if (layout) layouts.set(object.id, layout);
        }
        return layouts;
    });

    public readonly heatmap = computed(() =>
        this.heatmap_enabled()
            ? computeHeatmap(
                  this.objects(),
                  this.availability(),
                  this.width(),
                  this.height(),
              )
            : [],
    );

    /** Details card for the selected space, or the hovered one as a preview */
    public readonly details = computed(() => {
        const id = this.selected() ?? this.hover();
        const object = this.objects().find((o) => o.id === id);
        if (!object || !this._selectable(object)) return null;
        const state = this.availability()[object.id];
        return {
            label: object.label || object.svg_id || '',
            type: object.object_type,
            capacity: object.capacity,
            state: state ? stateLabel(state) : '',
            symbol: state ? STATE_SYMBOLS[state] : '',
            color: state ? STATE_COLORS[state] : '',
        };
    });

    public readonly highlight_ring = computed(() => {
        const id = this.highlight();
        const object = id && this.objects().find((o) => o.id === id);
        const bounds = object && boundsOf(object);
        if (!bounds) return null;
        const stroke = 4 * this.unitsPerPx();
        const pad = stroke * 2;
        return {
            x: bounds.x - pad,
            y: bounds.y - pad,
            w: bounds.w + pad * 2,
            h: bounds.h + pad * 2,
            stroke,
        };
    });

    constructor() {
        const observer = new ResizeObserver(([entry]) =>
            this._px.set({
                w: entry.contentRect.width,
                h: entry.contentRect.height,
            }),
        );
        // A template listener would re-check every shape on each mouse move,
        // even a hover with no pointer down. The signals written here still
        // refresh whatever reads them.
        const onMove = (event: PointerEvent) => this.onPointerMove(event);
        let svg: SVGSVGElement | undefined;
        afterNextRender(() => {
            svg = this._svg().nativeElement;
            observer.observe(svg);
            svg.addEventListener('pointermove', onMove);
        });
        inject(DestroyRef).onDestroy(() => {
            observer.disconnect();
            svg?.removeEventListener('pointermove', onMove);
        });

        // Zoom to a search hit as soon as it is on this floor
        effect(() => {
            const id = this.highlight();
            const object = id && this.objects().find((o) => o.id === id);
            const bounds = object && boundsOf(object);
            if (bounds) untracked(() => this._focus(bounds));
        });
    }

    /** Back to the whole floor */
    public resetView() {
        this.view.set(null);
    }

    public clearSelection() {
        this.selected.set(null);
        this.hover.set(null);
    }

    // ── Pointer input ───────────────────────────────────────────────────────

    /** Hover preview is for mice only; touch would leave it stuck open */
    public onHover(event: PointerEvent, id: string | null) {
        if (event.pointerType === 'mouse' && !this._pointers.size)
            this.hover.set(id);
    }

    public onPointerDown(event: PointerEvent) {
        if (event.pointerType === 'mouse' && event.button !== 0) return;
        if (this._pointers.size >= 2) return;
        this._svg().nativeElement.setPointerCapture(event.pointerId);
        this._pointers.set(event.pointerId, {
            x: event.clientX,
            y: event.clientY,
        });
        this._tap =
            this._pointers.size === 1
                ? {
                      id: objectIdOf(event.target) ?? null,
                      x: event.clientX,
                      y: event.clientY,
                  }
                : null;
    }

    /** One pointer pans; two pointers pinch-zoom around their midpoint */
    public onPointerMove(event: PointerEvent) {
        const last = this._pointers.get(event.pointerId);
        if (!last) return;
        const next = { x: event.clientX, y: event.clientY };
        if (
            this._tap &&
            Math.hypot(next.x - this._tap.x, next.y - this._tap.y) > TAP_SLOP_PX
        )
            this._tap = null;

        if (this._pointers.size === 1) {
            if (!this._tap) this._pan(next.x - last.x, next.y - last.y);
        } else {
            const other = [...this._pointers].find(
                ([id]) => id !== event.pointerId,
            )?.[1];
            if (other) {
                const before = Math.hypot(last.x - other.x, last.y - other.y);
                const after = Math.hypot(next.x - other.x, next.y - other.y);
                const mid_x = (next.x + other.x) / 2;
                const mid_y = (next.y + other.y) / 2;
                this._pan(
                    mid_x - (last.x + other.x) / 2,
                    mid_y - (last.y + other.y) / 2,
                );
                if (before > 0)
                    this._zoomAt(this._toCanvas(mid_x, mid_y), after / before);
            }
        }
        this._pointers.set(event.pointerId, next);
    }

    /** A pointer that lifts without dragging is a tap */
    public onPointerUp(event: PointerEvent) {
        if (!this._pointers.delete(event.pointerId)) return;
        if (this._tap && !this._pointers.size) this._onTap(this._tap.id);
        this._tap = null;
    }

    public onPointerCancel(event: PointerEvent) {
        this._pointers.delete(event.pointerId);
        this._tap = null;
    }

    public onWheel(event: WheelEvent) {
        event.preventDefault();
        // Line-based deltas (Firefox) are about 40px per line
        const delta = event.deltaY * (event.deltaMode === 1 ? 40 : 1);
        this._zoomAt(
            this._toCanvas(event.clientX, event.clientY),
            Math.exp(-delta * 0.002),
        );
    }

    /** Opens details for a space, or closes them on a second tap or empty space */
    private _onTap(id: string | null) {
        const object = id && this.objects().find((o) => o.id === id);
        const next =
            object && this._selectable(object) && this.selected() !== id
                ? id
                : null;
        this.selected.set(next);
    }

    private _selectable(object: MapObject) {
        return !!object.label || !!this.availability()[object.id];
    }

    // ── View box ────────────────────────────────────────────────────────────

    /** Client px to canvas units, allowing for the "meet" letterbox */
    private _toCanvas(client_x: number, client_y: number) {
        const rect = this._svg().nativeElement.getBoundingClientRect();
        const box = this.viewBox();
        const scale = Math.max(box.w / rect.width, box.h / rect.height) || 1;
        const offset_x = (rect.width - box.w / scale) / 2;
        const offset_y = (rect.height - box.h / scale) / 2;
        return {
            x: box.x + (client_x - rect.left - offset_x) * scale,
            y: box.y + (client_y - rect.top - offset_y) * scale,
        };
    }

    private _pan(dx_px: number, dy_px: number) {
        const box = this.viewBox();
        const scale = this.unitsPerPx();
        this._setView(box.x - dx_px * scale, box.y - dy_px * scale, box.w);
    }

    /** Zooms by `factor` (above 1 zooms in) keeping `point` still */
    private _zoomAt(point: { x: number; y: number }, factor: number) {
        const box = this.viewBox();
        const w = clamp(box.w / factor, this.width() / MAX_ZOOM, this.width());
        const ratio = w / box.w;
        this._setView(
            point.x - (point.x - box.x) * ratio,
            point.y - (point.y - box.y) * ratio,
            w,
        );
    }

    /** Centres a space with some room around it, at up to 4x zoom */
    private _focus(bounds: Bounds) {
        const aspect = this.width() / this.height();
        const w = clamp(
            Math.max(bounds.w, bounds.h * aspect) * 4,
            this.width() / 4,
            this.width(),
        );
        this._setView(bounds.cx - w / 2, bounds.cy - w / aspect / 2, w);
    }

    /** Sets the view, clamped to the zoom range and kept on the canvas */
    private _setView(x: number, y: number, w: number) {
        const width = this.width();
        const height = this.height();
        const next_w = clamp(w, width / MAX_ZOOM, width);
        const next_h = (next_w * height) / width;
        this.view.set({
            x: clamp(x, 0, width - next_w),
            y: clamp(y, 0, height - next_h),
            w: next_w,
            h: next_h,
        });
    }

    // ── Per-object styling ──────────────────────────────────────────────────

    public fillOf(object: MapObject): string {
        const desk = object.object_type === 'desk';
        // Under the heatmap, rooms and desks fade so the colours read through
        if (this.heatmap_enabled() && (desk || object.object_type === 'room'))
            return 'rgba(255, 255, 255, 0.08)';
        const state = this.availability()[object.id];
        // Desks read better on a dark plan when their fill is more solid
        if (state) return withAlpha(STATE_COLORS[state], desk ? 0.7 : 0.55);
        return desk ? DEFAULT_DESK_FILL : DEFAULT_FILL;
    }

    public strokeOf(object: MapObject): string {
        if (
            this.heatmap_enabled() &&
            (object.object_type === 'room' || object.object_type === 'desk')
        )
            return 'rgba(255, 255, 255, 0.2)';
        const state = this.availability()[object.id];
        return state ? STATE_COLORS[state] : DEFAULT_STROKE;
    }

    public strokeWidthOf(object: MapObject): number {
        const base = Math.max(1, this.width() / 600);
        return object.id === this.emphasis() ? base * 2 : base;
    }

    public readonly pointsOf = (object: MapObject) =>
        (object.geometry.points ?? []).map((p) => `${p.x},${p.y}`).join(' ');

    /**
     * Label and status on two lines when both fit, else the label with the
     * state symbol, else the symbol alone. Text that cannot fit is dropped.
     */
    private _layout(
        object: MapObject,
        bounds: Bounds,
        font: number,
        state: AvailabilityState | undefined,
    ): ShapeLayout | null {
        const fits = (text: string, size: number, lines: number) =>
            text.length * size * CHAR_WIDTH <= bounds.w * 0.9 &&
            size * 1.3 * lines <= bounds.h;
        const at = (text: string, size: number, y = bounds.cy) => ({
            x: bounds.cx,
            y,
            size,
            text,
        });
        const label = object.label ?? '';
        const symbol = state ? STATE_SYMBOLS[state] : '';

        if (label && state) {
            const status = `${symbol} ${stateLabel(state).toUpperCase()}`;
            const small = font * 0.8;
            if (fits(label, font, 2) && fits(status, small, 2)) {
                return {
                    label: at(label, font, bounds.cy - small * 0.6),
                    status: at(status, small, bounds.cy + font * 0.6),
                    mark: null,
                };
            }
        }
        const text = symbol && label ? `${symbol} ${label}` : label;
        if (text && fits(text, font, 1))
            return { label: at(text, font), status: null, mark: null };
        if (symbol) {
            const size = Math.min(bounds.w, bounds.h) * 0.7;
            return { label: null, status: null, mark: at(symbol, size) };
        }
        return null;
    }
}
