import {
    Component,
    ElementRef,
    HostListener,
    computed,
    inject,
    signal,
    viewChild,
} from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

import { MapObject } from '../data/types';
import { getAvailabilityColor } from './availability';
import {
    AMENITY_ICONS,
    FURNITURE_ASSETS,
    HANDLES,
    HANDLE_CURSORS,
    Handle,
    TYPE_COLORS,
} from './constants';
import { EditorStateService } from './editor-state.service';
import {
    Point,
    SnapGuide,
    boundsOf,
    closestPointOnSegment,
    computeSnap,
    getHandlePos,
} from './geometry';

interface DragState {
    id: string;
    offsetX: number;
    offsetY: number;
}

interface ResizeState {
    id: string;
    handle: Handle;
    origX: number;
    origY: number;
    origW: number;
    origH: number;
}

interface RotateState {
    id: string;
    centerX: number;
    centerY: number;
    startAngle: number;
    startRotation: number;
}

interface GroupTransformState {
    bounds: { x: number; y: number; width: number; height: number };
    objects: MapObject[];
}

interface GroupResizeState extends GroupTransformState {
    handle: Handle;
}

interface GroupRotateState extends GroupTransformState {
    centerX: number;
    centerY: number;
    startAngle: number;
}

interface RectDrawState {
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
}

interface SelectionBox {
    startX: number;
    startY: number;
    currentX: number;
    currentY: number;
}

interface EdgeHover {
    id: string;
    edgeIdx: number;
    px: number;
    py: number;
}

interface PanState {
    x: number;
    y: number;
    scrollLeft: number;
    scrollTop: number;
    /** Set when the pan started on empty space with the select tool */
    deselect: boolean;
    moved: boolean;
}

/** Wheel zoom steps, matching <dynamic-map> */
const ZOOM_STEP_IN = 1.03;
const ZOOM_STEP_OUT = 0.97;
/** Pointer travel, in px, before a click counts as a drag — as <dynamic-map> */
const DRAG_THRESHOLD = 5;

const clamp01 = (value: number) => Math.max(0, Math.min(1, value));

@Component({
    selector: 'map-studio-canvas',
    template: `
        <div
            #container
            class="bg-base-200 relative flex h-full w-full overflow-auto p-4"
            (wheel)="onWheel($event)"
        >
            <svg
                #canvas
                [attr.viewBox]="'0 0 ' + width() + ' ' + height()"
                preserveAspectRatio="xMidYMid meet"
                [style.width.%]="state.zoom() * 100"
                [style.cursor]="cursor()"
                class="m-auto block shrink-0"
                (mousedown)="onMouseDown($event)"
                (mousemove)="onMouseMove($event)"
                (mouseup)="onMouseUp()"
                (dblclick)="onDoubleClick($event)"
            >
                @if (state.grid_enabled()) {
                    <defs>
                        <pattern
                            id="editor-grid"
                            [attr.width]="state.grid_size()"
                            [attr.height]="state.grid_size()"
                            patternUnits="userSpaceOnUse"
                        >
                            <path
                                [attr.d]="gridPath()"
                                fill="none"
                                stroke="rgba(0,0,0,0.08)"
                                stroke-width="0.5"
                            />
                        </pattern>
                    </defs>
                }

                <rect
                    x="0"
                    y="0"
                    [attr.width]="width()"
                    [attr.height]="height()"
                    [attr.fill]="backgroundColor()"
                    stroke="#cbd5e1"
                    stroke-width="1"
                    stroke-dasharray="4 4"
                    class="pointer-events-none"
                />

                @if (guideImage(); as href) {
                    <image
                        [attr.href]="href"
                        x="0"
                        y="0"
                        [attr.width]="width()"
                        [attr.height]="height()"
                        [attr.opacity]="guideOpacity()"
                        class="pointer-events-none"
                    />
                }

                @if (state.grid_enabled()) {
                    <rect
                        x="0"
                        y="0"
                        [attr.width]="width()"
                        [attr.height]="height()"
                        fill="url(#editor-grid)"
                        class="pointer-events-none"
                    />
                }

                <!-- Room wall outlines, drawn beneath the fills -->
                @for (object of roomOutlines(); track object.id) {
                    @if (object.geometry.type === 'rect') {
                        <rect
                            [attr.x]="object.geometry.x ?? 0"
                            [attr.y]="object.geometry.y ?? 0"
                            [attr.width]="object.geometry.width ?? 50"
                            [attr.height]="object.geometry.height ?? 50"
                            fill="none"
                            stroke="#1a1a1a"
                            [attr.stroke-width]="wallStroke()"
                            stroke-linejoin="miter"
                            class="pointer-events-none"
                        />
                    } @else {
                        <polygon
                            [attr.points]="pointsOf(object)"
                            fill="none"
                            stroke="#1a1a1a"
                            [attr.stroke-width]="wallStroke()"
                            stroke-linejoin="miter"
                            class="pointer-events-none"
                        />
                    }
                }

                @for (object of state.visible_objects(); track object.id) {
                    @switch (object.geometry.type) {
                        @case ('rect') {
                            <g
                                [attr.data-object-id]="object.id"
                                [attr.opacity]="opacityOf(object)"
                                [attr.transform]="rotationOf(object)"
                            >
                                <rect
                                    [attr.x]="object.geometry.x ?? 0"
                                    [attr.y]="object.geometry.y ?? 0"
                                    [attr.width]="object.geometry.width ?? 50"
                                    [attr.height]="object.geometry.height ?? 50"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                    rx="4"
                                />
                                @if (furnitureArt(object); as art) {
                                    <g
                                        [attr.transform]="
                                            furnitureTransform(object)
                                        "
                                        class="pointer-events-none"
                                        [innerHTML]="art"
                                    ></g>
                                }
                                @if (object.label) {
                                    <text
                                        [attr.x]="centerX(object)"
                                        [attr.y]="centerY(object)"
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#fff"
                                        [attr.font-size]="labelSize(object)"
                                        font-family="Arial, sans-serif"
                                        font-weight="600"
                                        class="pointer-events-none select-none"
                                    >
                                        {{ labelText(object) }}
                                    </text>
                                }
                                @if (availabilityLabel(object); as badge) {
                                    <text
                                        [attr.x]="centerX(object)"
                                        [attr.y]="
                                            centerY(object) +
                                            labelSize(object) * 0.85
                                        "
                                        text-anchor="middle"
                                        dominant-baseline="central"
                                        fill="#fff"
                                        [attr.font-size]="
                                            labelSize(object) * 0.7
                                        "
                                        font-family="Arial, sans-serif"
                                        font-weight="700"
                                        opacity="0.9"
                                        class="pointer-events-none select-none"
                                    >
                                        {{ badge }}
                                    </text>
                                }
                                @if (isMultiSelected(object)) {
                                    <rect
                                        [attr.x]="(object.geometry.x ?? 0) - 2"
                                        [attr.y]="(object.geometry.y ?? 0) - 2"
                                        [attr.width]="
                                            (object.geometry.width ?? 0) + 4
                                        "
                                        [attr.height]="
                                            (object.geometry.height ?? 0) + 4
                                        "
                                        fill="none"
                                        stroke="#3b82f6"
                                        stroke-width="1.5"
                                        stroke-dasharray="4 2"
                                        rx="3"
                                        class="pointer-events-none"
                                    />
                                }
                                @if (
                                    object.id === state.selected_id() &&
                                    state.multi_select().length < 2
                                ) {
                                    @for (handle of handles; track handle) {
                                        <circle
                                            [attr.cx]="handleX(object, handle)"
                                            [attr.cy]="handleY(object, handle)"
                                            [attr.r]="state.handle_radius()"
                                            fill="#f59e0b"
                                            stroke="#fff"
                                            [attr.stroke-width]="
                                                state.stroke_width() * 0.75
                                            "
                                            [style.cursor]="cursorFor(handle)"
                                        />
                                    }
                                    <line
                                        [attr.x1]="centerX(object)"
                                        [attr.y1]="object.geometry.y ?? 0"
                                        [attr.x2]="centerX(object)"
                                        [attr.y2]="rotateHandleY(object)"
                                        stroke="#f59e0b"
                                        [attr.stroke-width]="
                                            state.stroke_width() * 0.5
                                        "
                                        class="pointer-events-none"
                                    />
                                    <circle
                                        [attr.cx]="centerX(object)"
                                        [attr.cy]="rotateHandleY(object)"
                                        [attr.r]="state.handle_radius() * 0.8"
                                        fill="#f59e0b"
                                        stroke="#fff"
                                        [attr.stroke-width]="
                                            state.stroke_width() * 0.5
                                        "
                                        class="cursor-grab"
                                        (mousedown)="
                                            startRotate($event, object)
                                        "
                                    />
                                }
                            </g>
                        }
                        @case ('circle') {
                            <g [attr.data-object-id]="object.id">
                                <circle
                                    [attr.cx]="object.geometry.x ?? 0"
                                    [attr.cy]="object.geometry.y ?? 0"
                                    [attr.r]="object.geometry.r ?? 12"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                    [attr.opacity]="opacityOf(object)"
                                />
                                @if (amenityArt(object); as art) {
                                    <g
                                        [attr.transform]="
                                            amenityTransform(object)
                                        "
                                        class="pointer-events-none"
                                        [innerHTML]="art"
                                    ></g>
                                }
                                @if (object.label) {
                                    <text
                                        [attr.x]="object.geometry.x ?? 0"
                                        [attr.y]="
                                            (object.geometry.y ?? 0) +
                                            (object.geometry.r ?? 12) +
                                            10
                                        "
                                        text-anchor="middle"
                                        font-size="8"
                                        font-weight="500"
                                        [attr.fill]="strokeOf(object)"
                                        class="pointer-events-none select-none"
                                    >
                                        {{ object.label }}
                                    </text>
                                }
                            </g>
                        }
                        @case ('polygon') {
                            <g>
                                <polygon
                                    [attr.points]="pointsOf(object)"
                                    [attr.fill]="fillOf(object)"
                                    [attr.stroke]="strokeOf(object)"
                                    [attr.stroke-width]="strokeWidthOf(object)"
                                    [attr.opacity]="opacityOf(object)"
                                    class="cursor-pointer"
                                />
                                @if (isPolygonEditable(object)) {
                                    @for (
                                        point of object.geometry.points ?? [];
                                        track $index
                                    ) {
                                        <circle
                                            [attr.cx]="point.x"
                                            [attr.cy]="point.y"
                                            [attr.r]="vertexRadius()"
                                            fill="white"
                                            stroke="#f59e0b"
                                            stroke-width="2"
                                            class="cursor-move"
                                            (mousedown)="
                                                onVertexDown(
                                                    $event,
                                                    object,
                                                    $index
                                                )
                                            "
                                        />
                                    }
                                    @if (edgeHoverFor(object); as hover) {
                                        <circle
                                            [attr.cx]="hover.px"
                                            [attr.cy]="hover.py"
                                            [attr.r]="vertexRadius() * 0.8"
                                            fill="#22c55e"
                                            stroke="white"
                                            stroke-width="1.5"
                                            class="pointer-events-none"
                                        />
                                    }
                                }
                            </g>
                        }
                        @case ('path') {
                            <path
                                [attr.d]="object.geometry.d"
                                [attr.fill]="object.fill_color ?? 'none'"
                                [attr.stroke]="strokeOf(object)"
                                [attr.stroke-width]="strokeWidthOf(object)"
                                [attr.opacity]="opacityOf(object)"
                            />
                        }
                    }
                }

                @if (groupBounds(); as group) {
                    <g>
                        <rect
                            [attr.x]="group.x"
                            [attr.y]="group.y"
                            [attr.width]="group.width"
                            [attr.height]="group.height"
                            fill="none"
                            stroke="#3b82f6"
                            [attr.stroke-width]="state.stroke_width()"
                            stroke-dasharray="6 3"
                            class="pointer-events-none"
                        />
                        @for (handle of handles; track handle) {
                            <circle
                                [attr.cx]="groupHandleX(group, handle)"
                                [attr.cy]="groupHandleY(group, handle)"
                                [attr.r]="state.handle_radius()"
                                fill="#3b82f6"
                                stroke="#fff"
                                [attr.stroke-width]="
                                    state.stroke_width() * 0.75
                                "
                                [style.cursor]="cursorFor(handle)"
                            />
                        }
                        <line
                            [attr.x1]="group.x + group.width / 2"
                            [attr.y1]="group.y"
                            [attr.x2]="group.x + group.width / 2"
                            [attr.y2]="groupRotateY(group)"
                            stroke="#3b82f6"
                            [attr.stroke-width]="state.stroke_width() * 0.5"
                            class="pointer-events-none"
                        />
                        <circle
                            [attr.cx]="group.x + group.width / 2"
                            [attr.cy]="groupRotateY(group)"
                            [attr.r]="state.handle_radius() * 0.8"
                            fill="#3b82f6"
                            stroke="#fff"
                            [attr.stroke-width]="state.stroke_width() * 0.5"
                            class="cursor-grab"
                            (mousedown)="startGroupRotate($event, group)"
                        />
                    </g>
                }

                @if (selection_box(); as box) {
                    <rect
                        [attr.x]="min(box.startX, box.currentX)"
                        [attr.y]="min(box.startY, box.currentY)"
                        [attr.width]="abs(box.currentX - box.startX)"
                        [attr.height]="abs(box.currentY - box.startY)"
                        fill="rgba(59,130,246,0.12)"
                        stroke="#3b82f6"
                        [attr.stroke-width]="state.stroke_width()"
                        stroke-dasharray="6 3"
                        class="pointer-events-none"
                    />
                }

                @if (selectedRect(); as sel) {
                    <rect
                        [attr.x]="sel.x - 2"
                        [attr.y]="sel.y - 2"
                        [attr.width]="sel.width + 4"
                        [attr.height]="sel.height + 4"
                        fill="none"
                        stroke="#f59e0b"
                        stroke-width="1"
                        stroke-dasharray="4 2"
                        class="pointer-events-none"
                    />
                }

                @if (rect_draw(); as draw) {
                    <rect
                        [attr.x]="min(draw.startX, draw.currentX)"
                        [attr.y]="min(draw.startY, draw.currentY)"
                        [attr.width]="abs(draw.currentX - draw.startX)"
                        [attr.height]="abs(draw.currentY - draw.startY)"
                        fill="rgba(59,130,246,0.15)"
                        stroke="#3b82f6"
                        stroke-width="2"
                        stroke-dasharray="6 3"
                        class="pointer-events-none"
                    />
                }

                @if (wall_start(); as start) {
                    <g class="pointer-events-none">
                        @if (wall_preview(); as preview) {
                            <line
                                [attr.x1]="start.x"
                                [attr.y1]="start.y"
                                [attr.x2]="preview.x"
                                [attr.y2]="preview.y"
                                stroke="#374151"
                                [attr.stroke-width]="wall_thickness()"
                                stroke-linecap="round"
                                opacity="0.6"
                            />
                            <circle
                                [attr.cx]="preview.x"
                                [attr.cy]="preview.y"
                                r="4"
                                fill="#374151"
                                stroke="#fff"
                                stroke-width="1"
                            />
                            <rect
                                [attr.x]="wallLabelX(start, preview) - 35"
                                [attr.y]="wallLabelY(start, preview) - 9"
                                width="70"
                                height="18"
                                rx="4"
                                fill="rgba(55,65,81,0.9)"
                            />
                            <text
                                [attr.x]="wallLabelX(start, preview)"
                                [attr.y]="wallLabelY(start, preview) + 1"
                                text-anchor="middle"
                                dominant-baseline="central"
                                font-size="9"
                                fill="#fff"
                                font-family="Arial"
                                font-weight="600"
                            >
                                {{ wallLabel(start, preview) }}
                            </text>
                        }
                        <circle
                            [attr.cx]="start.x"
                            [attr.cy]="start.y"
                            r="4"
                            fill="#374151"
                        />
                    </g>
                }

                @if (
                    state.active_tool() === 'polygon' && outline_points().length
                ) {
                    <g class="pointer-events-none">
                        <polyline
                            [attr.points]="outlinePointsAttr()"
                            fill="none"
                            stroke="#7c3aed"
                            stroke-width="2"
                            stroke-dasharray="6 3"
                        />
                        @for (point of outline_points(); track $index) {
                            <circle
                                [attr.cx]="point.x"
                                [attr.cy]="point.y"
                                r="4"
                                [attr.fill]="
                                    $index === 0 ? '#22c55e' : '#7c3aed'
                                "
                                stroke="white"
                                stroke-width="1"
                            />
                        }
                        @if (outline_points().length >= 3) {
                            <circle
                                [attr.cx]="outline_points()[0].x"
                                [attr.cy]="outline_points()[0].y"
                                r="8"
                                fill="rgba(34,197,94,0.3)"
                                stroke="#22c55e"
                                stroke-width="2"
                            />
                        }
                    </g>
                }

                @for (guide of snap_guides(); track $index) {
                    <line
                        [attr.x1]="guide.type === 'v' ? guide.pos : 0"
                        [attr.y1]="guide.type === 'v' ? 0 : guide.pos"
                        [attr.x2]="guide.type === 'v' ? guide.pos : width()"
                        [attr.y2]="guide.type === 'v' ? height() : guide.pos"
                        stroke="#ff3366"
                        stroke-width="1"
                        stroke-dasharray="4 4"
                        class="pointer-events-none"
                    />
                }
            </svg>

            @if (editing(); as edit) {
                <input
                    class="border-primary absolute z-20 -translate-x-1/2 -translate-y-1/2 rounded border bg-white px-2 py-1 text-sm shadow"
                    [value]="edit.value"
                    [style.left.px]="edit.left"
                    [style.top.px]="edit.top"
                    (input)="onRenameInput($event)"
                    (blur)="finishEditing()"
                    (keydown.enter)="finishEditing()"
                    (keydown.escape)="editing.set(null)"
                    #renameInput
                />
            }
        </div>
    `,
})
export class CanvasComponent {
    public readonly state = inject(EditorStateService);
    private readonly _sanitizer = inject(DomSanitizer);

    private readonly _canvas =
        viewChild.required<ElementRef<SVGSVGElement>>('canvas');
    private readonly _container =
        viewChild<ElementRef<HTMLDivElement>>('container');

    public readonly handles = HANDLES;

    public readonly rect_draw = signal<RectDrawState | null>(null);
    public readonly selection_box = signal<SelectionBox | null>(null);
    public readonly outline_points = signal<Point[]>([]);
    public readonly wall_start = signal<Point | null>(null);
    public readonly wall_preview = signal<Point | null>(null);
    public readonly wall_thickness = signal(6);
    public readonly snap_guides = signal<SnapGuide[]>([]);
    public readonly cursor_coords = signal<Point | null>(null);
    public readonly editing = signal<{
        id: string;
        value: string;
        left: number;
        top: number;
    } | null>(null);

    private readonly _dragging = signal<DragState | null>(null);
    private readonly _resizing = signal<ResizeState | null>(null);
    private readonly _rotating = signal<RotateState | null>(null);
    private readonly _group_resizing = signal<GroupResizeState | null>(null);
    private readonly _group_rotating = signal<GroupRotateState | null>(null);
    private readonly _vertex_drag = signal<{ id: string; idx: number } | null>(
        null,
    );
    private readonly _edge_hover = signal<EdgeHover | null>(null);
    private readonly _panning = signal(false);

    private readonly _space_held = signal(false);
    private _pan_start: PanState | null = null;

    public readonly width = this.state.canvas_width;
    public readonly height = this.state.canvas_height;

    /** The scrolling element, for the minimap to read and drive */
    public readonly containerEl = computed(
        () => this._container()?.nativeElement,
    );

    /** Same element, for internal use where it is known to exist */
    private _containerEl(): HTMLDivElement {
        return this._container()?.nativeElement as HTMLDivElement;
    }

    /** Centre an object in the viewport — used when picking it from a list */
    public scrollIntoView(object: MapObject) {
        const container = this._containerEl();
        if (!container) return;
        const svg = this._canvas().nativeElement;
        const rect = svg.getBoundingClientRect();
        const bounds = container.getBoundingClientRect();
        const scale = rect.width / svg.viewBox.baseVal.width;
        container.scrollTo({
            left:
                container.scrollLeft +
                rect.left -
                bounds.left +
                this.centerX(object) * scale -
                container.clientWidth / 2,
            top:
                container.scrollTop +
                rect.top -
                bounds.top +
                this.centerY(object) * scale -
                container.clientHeight / 2,
            behavior: 'smooth',
        });
    }

    public readonly min = Math.min;
    public readonly abs = Math.abs;

    public readonly cursor = computed(() => {
        if (this._panning()) return 'grabbing';
        if (this._space_held()) return 'grab';
        if (this._dragging()) return 'grabbing';
        const resizing = this._resizing();
        if (resizing) return HANDLE_CURSORS[resizing.handle];
        if (this.state.active_tool() === 'select') return 'default';
        return 'crosshair';
    });

    public readonly gridPath = computed(() => {
        const size = this.state.grid_size();
        return `M ${size} 0 L 0 0 0 ${size}`;
    });

    public readonly backgroundColor = computed(
        () => this.state.floorplan()?.background_color || '#ffffff',
    );

    public readonly guideImage = computed(() => {
        const layer = this.state.layers().find((l) => l.id === 'guide');
        return layer?.visible === false ? null : this.state.image_url();
    });

    public readonly guideOpacity = computed(
        () => this.state.layers().find((l) => l.id === 'guide')?.opacity ?? 0.5,
    );

    public readonly wallStroke = computed(() =>
        Math.max(3, this.state.stroke_width() * 2.5),
    );

    public readonly vertexRadius = computed(() =>
        Math.max(5, Math.max(this.width(), this.height()) * 0.004),
    );

    public readonly roomOutlines = computed(() =>
        this.state.visible_objects().filter((o) => o.object_type === 'room'),
    );

    public readonly selectedRect = computed(() => {
        if (this.state.multi_select().length > 1) return null;
        const selected = this.state.selected();
        if (!selected || selected.geometry.type !== 'rect') return null;
        return {
            x: selected.geometry.x ?? 0,
            y: selected.geometry.y ?? 0,
            width: selected.geometry.width ?? 50,
            height: selected.geometry.height ?? 50,
        };
    });

    public readonly groupBounds = computed(() => {
        const ids = this.state.multi_select();
        if (ids.length < 2) return null;
        const objects = this.state
            .objects()
            .filter((object) => ids.includes(object.id));
        if (objects.length < 2) return null;
        const bounds = objects.map((object) => this._objectBounds(object));
        const x = Math.min(...bounds.map((item) => item.x));
        const y = Math.min(...bounds.map((item) => item.y));
        const right = Math.max(...bounds.map((item) => item.x + item.width));
        const bottom = Math.max(...bounds.map((item) => item.y + item.height));
        return { x, y, width: right - x, height: bottom - y };
    });

    public readonly outlinePointsAttr = computed(() =>
        this.outline_points()
            .map((p) => `${p.x},${p.y}`)
            .join(' '),
    );

    // ── Render helpers ──────────────────────────────────────────────────────

    public pointsOf(object: MapObject) {
        return (object.geometry.points ?? [])
            .map((p) => `${p.x},${p.y}`)
            .join(' ');
    }

    public opacityOf(object: MapObject) {
        return (
            object.opacity * (this.state.layer_opacity().get(object.layer) ?? 1)
        );
    }

    /** Objects without explicit colours fall back to their type's palette */
    private _typeColor(object: MapObject) {
        return TYPE_COLORS[object.object_type] ?? '#4b5563';
    }

    /** Preview colour for an object, when availability preview is on */
    public availabilityColor(object: MapObject): string | undefined {
        if (!this.state.availability_enabled()) return undefined;
        return getAvailabilityColor(
            this.state.availability_states()[object.id],
        );
    }

    public availabilityLabel(object: MapObject): string {
        return (
            this.state.availability_states()[object.id]?.replace(/-/g, ' ') ??
            ''
        ).toUpperCase();
    }

    public isMultiSelected(object: MapObject) {
        return this.state.multi_select().includes(object.id);
    }

    public fillOf(object: MapObject) {
        const availability = this.availabilityColor(object);
        if (availability) return availability;
        if (object.svg_id === 'floor-outline') {
            return (
                this.state.floorplan()?.background_color ||
                object.fill_color ||
                'rgba(107,114,128,0.15)'
            );
        }
        return object.fill_color || `${this._typeColor(object)}55`;
    }

    public strokeOf(object: MapObject) {
        return object.id === this.state.selected_id()
            ? '#f59e0b'
            : object.stroke_color || this._typeColor(object);
    }

    public strokeWidthOf(object: MapObject) {
        const base = this.state.stroke_width();
        return object.id === this.state.selected_id() ? base * 1.5 : base;
    }

    public rotationOf(object: MapObject) {
        const { rotation, x, y, width, height } = object.geometry;
        if (!rotation) return null;
        return `rotate(${rotation} ${(x ?? 0) + (width ?? 0) / 2} ${(y ?? 0) + (height ?? 0) / 2})`;
    }

    public centerX(object: MapObject) {
        const points = object.geometry.points;
        if (object.geometry.type === 'polygon' && points?.length)
            return points.reduce((sum, p) => sum + p.x, 0) / points.length;
        return (object.geometry.x ?? 0) + (object.geometry.width ?? 0) / 2;
    }

    public centerY(object: MapObject) {
        const points = object.geometry.points;
        if (object.geometry.type === 'polygon' && points?.length)
            return points.reduce((sum, p) => sum + p.y, 0) / points.length;
        return (object.geometry.y ?? 0) + (object.geometry.height ?? 0) / 2;
    }

    /**
     * Clip the label to what the shape can hold. Arial's average glyph runs a
     * little over half the font size, which is close enough to keep text inside
     * the box without measuring it.
     */
    public labelText(object: MapObject) {
        const label = object.label ?? '';
        const fits = Math.floor(
            (object.geometry.width ?? 0) / (this.labelSize(object) * 0.55),
        );
        return label.length > fits
            ? `${label.slice(0, Math.max(1, fits - 1))}…`
            : label;
    }

    public labelSize(object: MapObject) {
        const w = object.geometry.width ?? 50;
        const h = object.geometry.height ?? 50;
        return Math.max(8, Math.min(w / 6, h / 3, 24));
    }

    public rotateHandleY(object: MapObject) {
        return (object.geometry.y ?? 0) - 25 / (this.state.stroke_width() / 2);
    }

    public handleX(object: MapObject, handle: Handle) {
        return getHandlePos(
            handle,
            object.geometry.x ?? 0,
            object.geometry.y ?? 0,
            object.geometry.width ?? 50,
            object.geometry.height ?? 50,
        )[0];
    }

    public handleY(object: MapObject, handle: Handle) {
        return getHandlePos(
            handle,
            object.geometry.x ?? 0,
            object.geometry.y ?? 0,
            object.geometry.width ?? 50,
            object.geometry.height ?? 50,
        )[1];
    }

    public cursorFor(handle: Handle) {
        return HANDLE_CURSORS[handle];
    }

    public groupHandleX(group: GroupTransformState['bounds'], handle: Handle) {
        return getHandlePos(
            handle,
            group.x,
            group.y,
            group.width,
            group.height,
        )[0];
    }

    public groupHandleY(group: GroupTransformState['bounds'], handle: Handle) {
        return getHandlePos(
            handle,
            group.x,
            group.y,
            group.width,
            group.height,
        )[1];
    }

    public groupRotateY(group: GroupTransformState['bounds']) {
        return group.y - 25 / (this.state.stroke_width() / 2);
    }

    public furnitureArt(object: MapObject): SafeHtml | null {
        const type = (object.metadata as Record<string, unknown> | null)?.[
            'furnitureType'
        ] as string | undefined;
        const asset = type
            ? FURNITURE_ASSETS.find((a) => a.id === type)
            : undefined;
        if (!asset) return null;
        return this._sanitizer.bypassSecurityTrustHtml(
            asset.svg.replace(/currentColor/g, object.stroke_color ?? '#333'),
        );
    }

    public furnitureTransform(object: MapObject) {
        const w = object.geometry.width ?? 24;
        const h = object.geometry.height ?? 24;
        return `translate(${object.geometry.x ?? 0}, ${object.geometry.y ?? 0}) scale(${w / 24}, ${h / 24})`;
    }

    public amenityArt(object: MapObject): SafeHtml | null {
        const icon = (object.metadata as Record<string, unknown> | null)?.[
            'icon'
        ] as string | undefined;
        const asset = icon
            ? AMENITY_ICONS.find((a) => a.id === icon)
            : undefined;
        if (!asset) return null;
        return this._sanitizer.bypassSecurityTrustHtml(
            asset.svg
                .replace(/currentColor/g, 'white')
                .replace(/fill="#[^"]+"/g, 'fill="white"'),
        );
    }

    public amenityTransform(object: MapObject) {
        const r = object.geometry.r ?? 12;
        const cx = object.geometry.x ?? 0;
        const cy = object.geometry.y ?? 0;
        return `translate(${cx - r * 0.6}, ${cy - r * 0.6}) scale(${(r * 1.2) / 24})`;
    }

    public isPolygonEditable(object: MapObject) {
        return (
            object.id === this.state.selected_id() &&
            this.state.active_tool() === 'select' &&
            this.state.mode() === 'design'
        );
    }

    public edgeHoverFor(object: MapObject) {
        const hover = this._edge_hover();
        return hover?.id === object.id ? hover : null;
    }

    public wallLabelX(start: Point, end: Point) {
        return (start.x + end.x) / 2;
    }

    public wallLabelY(start: Point, end: Point) {
        return (start.y + end.y) / 2 - 12;
    }

    public wallLabel(start: Point, end: Point) {
        const dx = end.x - start.x;
        const dy = end.y - start.y;
        const length = Math.round(Math.hypot(dx, dy));
        const angle = Math.round((Math.atan2(-dy, dx) * 180) / Math.PI);
        return `${length}px · ${angle}°`;
    }

    // ── Coordinates ─────────────────────────────────────────────────────────

    /** Client point converted into canvas user units */
    private _toCanvas(clientX: number, clientY: number): Point {
        const svg = this._canvas().nativeElement;
        const rect = svg.getBoundingClientRect();
        if (!rect.width || !rect.height) return { x: 0, y: 0 };
        const scale = rect.width / svg.viewBox.baseVal.width;
        return {
            x: Math.round((clientX - rect.left) / scale),
            y: Math.round((clientY - rect.top) / scale),
        };
    }

    /** Applies grid snapping and shift-constraint used by the wall tool */
    private _snapWallPoint(point: Point, shift: boolean): Point {
        let { x, y } = point;
        const start = this.wall_start();
        if (shift && start) {
            if (Math.abs(x - start.x) > Math.abs(y - start.y)) y = start.y;
            else x = start.x;
        }
        if (this.state.snap_enabled() && this.state.grid_size()) {
            const size = this.state.grid_size();
            x = Math.round(x / size) * size;
            y = Math.round(y / size) * size;
        }
        // Prefer existing wall endpoints, then room corners and edge midpoints
        const threshold = 10;
        for (const object of this.state.objects()) {
            if (
                object.layer === 'walls' &&
                object.geometry.type === 'polygon' &&
                object.geometry.points
            ) {
                for (const point of object.geometry.points) {
                    if (
                        Math.abs(point.x - x) < threshold &&
                        Math.abs(point.y - y) < threshold
                    )
                        return { x: point.x, y: point.y };
                }
            }
            if (
                (object.object_type === 'room' ||
                    object.object_type === 'area') &&
                object.geometry.type === 'rect'
            ) {
                const rx = object.geometry.x ?? 0;
                const ry = object.geometry.y ?? 0;
                const rw = object.geometry.width ?? 0;
                const rh = object.geometry.height ?? 0;
                const anchors = [
                    { x: rx, y: ry },
                    { x: rx + rw, y: ry },
                    { x: rx + rw, y: ry + rh },
                    { x: rx, y: ry + rh },
                    { x: rx + rw / 2, y: ry },
                    { x: rx + rw, y: ry + rh / 2 },
                    { x: rx + rw / 2, y: ry + rh },
                    { x: rx, y: ry + rh / 2 },
                ];
                for (const anchor of anchors) {
                    if (
                        Math.abs(anchor.x - x) < threshold &&
                        Math.abs(anchor.y - y) < threshold
                    )
                        return anchor;
                }
            }
        }
        return { x, y };
    }

    // ── Pointer interaction ─────────────────────────────────────────────────

    public onMouseDown(event: MouseEvent) {
        // Middle button and space+drag pan from anywhere, as <dynamic-map> does
        if (event.button === 1 || (event.button === 0 && this._space_held())) {
            this._startPan(event, false);
            event.preventDefault();
            return;
        }
        if (event.button !== 0) return;

        const { x, y } = this._toCanvas(event.clientX, event.clientY);
        const tool = this.state.active_tool();

        // An armed asset picker consumes the click
        if (this.state.placing()) {
            this.state.placeAt(x, y);
            event.preventDefault();
            return;
        }

        if (tool === 'wall') {
            this._onWallClick({ x, y }, event.shiftKey);
            event.preventDefault();
            return;
        }

        if (tool === 'polygon') {
            this._onPolygonClick({ x, y }, event.shiftKey);
            event.preventDefault();
            return;
        }

        if (tool === 'rect') {
            this.rect_draw.set({
                startX: x,
                startY: y,
                currentX: x,
                currentY: y,
            });
            event.preventDefault();
            return;
        }

        if (tool === 'pen') {
            const { width, height } = this.state.place_size();
            const layer = this.state
                .layers()
                .find((l) => l.id === this.state.active_layer_id());
            if (layer && !layer.locked) {
                this.state.createOnActiveLayer({
                    type: 'rect',
                    x: x - width / 2,
                    y: y - height / 2,
                    width,
                    height,
                });
            }
            event.preventDefault();
            return;
        }

        // Select tool
        const hover = this._edge_hover();
        if (hover && hover.id === this.state.selected_id()) {
            this._insertVertex(hover);
            event.preventDefault();
            return;
        }

        if (this._startGroupResize(x, y) || this._startResize(x, y)) {
            event.preventDefault();
            return;
        }

        const hit = this._hitTest(x, y);
        if (hit) {
            // In preview mode a click cycles the availability state instead
            if (
                this.state.availability_enabled() &&
                (hit.object_type === 'room' || hit.object_type === 'desk')
            ) {
                this.state.select(hit.id);
                this.state.cycleAvailability(hit);
                event.preventDefault();
                return;
            }
            if (event.shiftKey || event.ctrlKey || event.metaKey) {
                this.state.toggleMultiSelect(hit.id);
                const selection = this.state.multi_select();
                this.state.select(selection.at(-1) ?? null);
                event.preventDefault();
                return;
            }
            if (!this.state.multi_select().includes(hit.id))
                this.state.clearMultiSelect();
            this.state.select(hit.id);
            if (!hit.locked) {
                this.state.pushHistory();
                this._dragging.set({
                    id: hit.id,
                    offsetX: x - (hit.geometry.x ?? 0),
                    offsetY: y - (hit.geometry.y ?? 0),
                });
            }
            event.preventDefault();
            return;
        }
        // Empty space: drag pans, a click without travel clears the selection
        if (event.shiftKey) {
            this.selection_box.set({
                startX: x,
                startY: y,
                currentX: x,
                currentY: y,
            });
            event.preventDefault();
            return;
        }
        this._startPan(event, true);
    }

    private _startPan(event: MouseEvent, deselect: boolean) {
        const container = this._containerEl();
        this._panning.set(true);
        this._pan_start = {
            x: event.clientX,
            y: event.clientY,
            scrollLeft: container.scrollLeft,
            scrollTop: container.scrollTop,
            deselect,
            moved: false,
        };
    }

    public onMouseMove(event: MouseEvent) {
        const pan = this._pan_start;
        if (this._panning() && pan) {
            const dx = event.clientX - pan.x;
            const dy = event.clientY - pan.y;
            if (Math.abs(dx) > DRAG_THRESHOLD || Math.abs(dy) > DRAG_THRESHOLD)
                pan.moved = true;
            const container = this._containerEl();
            container.scrollLeft = pan.scrollLeft - dx;
            container.scrollTop = pan.scrollTop - dy;
            return;
        }

        const { x, y } = this._toCanvas(event.clientX, event.clientY);
        this.cursor_coords.set({ x, y });

        const rotating = this._rotating();
        if (rotating) {
            const angle =
                (Math.atan2(y - rotating.centerY, x - rotating.centerX) * 180) /
                Math.PI;
            let rotation =
                rotating.startRotation + (angle - rotating.startAngle);
            if (event.shiftKey) rotation = Math.round(rotation / 15) * 15;
            rotation = ((rotation % 360) + 360) % 360;
            const object = this.state
                .objects()
                .find((o) => o.id === rotating.id);
            if (object)
                this.state.patchLocal(rotating.id, {
                    geometry: { ...object.geometry, rotation },
                });
            return;
        }

        const groupRotating = this._group_rotating();
        if (groupRotating) {
            this._applyGroupRotate(groupRotating, x, y, event.shiftKey);
            return;
        }

        const dragging = this._dragging();
        if (dragging) {
            this._applyDrag(dragging, x, y);
            return;
        }

        const resizing = this._resizing();
        if (resizing) {
            this._applyResize(resizing, x, y);
            return;
        }

        const groupResizing = this._group_resizing();
        if (groupResizing) {
            this._applyGroupResize(groupResizing, x, y);
            return;
        }

        const vertex = this._vertex_drag();
        if (vertex) {
            this._applyVertexDrag(vertex, x, y);
            return;
        }

        const draw = this.rect_draw();
        if (draw) {
            this.rect_draw.set({ ...draw, currentX: x, currentY: y });
            return;
        }

        const selection = this.selection_box();
        if (selection) {
            this.selection_box.set({ ...selection, currentX: x, currentY: y });
            return;
        }

        if (this.state.active_tool() === 'wall' && this.wall_start()) {
            this.wall_preview.set(
                this._snapWallPoint({ x, y }, event.shiftKey),
            );
            return;
        }

        this._updateEdgeHover(x, y);
    }

    public onMouseUp() {
        if (this._panning()) {
            const pan = this._pan_start;
            this._panning.set(false);
            this._pan_start = null;
            if (pan?.deselect && !pan.moved) {
                this.state.select(null);
                this.state.clearMultiSelect();
            }
            return;
        }
        const rotating = this._rotating();
        if (rotating) {
            this.state.commitGeometry(rotating.id);
            this._rotating.set(null);
            return;
        }
        const groupRotating = this._group_rotating();
        if (groupRotating) {
            for (const object of groupRotating.objects)
                this.state.commitGeometry(object.id);
            this._group_rotating.set(null);
            return;
        }
        const dragging = this._dragging();
        if (dragging) {
            for (const id of this.state.movingIds(dragging.id))
                this.state.commitGeometry(id);
            this._dragging.set(null);
            this.snap_guides.set([]);
        }
        const resizing = this._resizing();
        if (resizing) {
            this.state.commitGeometry(resizing.id);
            this._resizing.set(null);
        }
        const groupResizing = this._group_resizing();
        if (groupResizing) {
            for (const object of groupResizing.objects)
                this.state.commitGeometry(object.id);
            this._group_resizing.set(null);
        }
        const vertex = this._vertex_drag();
        if (vertex) {
            this.state.commitGeometry(vertex.id);
            this._vertex_drag.set(null);
        }
        const draw = this.rect_draw();
        if (draw) {
            this._finishRectDraw(draw);
            this.rect_draw.set(null);
        }
        const selection = this.selection_box();
        if (selection) {
            this._finishSelectionBox(selection);
            this.selection_box.set(null);
        }
    }

    public onDoubleClick(event: MouseEvent) {
        const { x, y } = this._toCanvas(event.clientX, event.clientY);
        const hit = this._hitTest(x, y);
        if (!hit || hit.geometry.type !== 'rect') return;
        this.state.select(hit.id);
        const svg = this._canvas().nativeElement;
        const rect = svg.getBoundingClientRect();
        const scale = rect.width / svg.viewBox.baseVal.width;
        const container = this._containerEl().getBoundingClientRect();
        this.editing.set({
            id: hit.id,
            value: hit.label ?? '',
            left: rect.left - container.left + this.centerX(hit) * scale,
            top: rect.top - container.top + this.centerY(hit) * scale,
        });
        event.preventDefault();
    }

    /**
     * Wheel zooms, anchored at the pointer, matching <dynamic-map>. There is no
     * wheel scrolling — pan by dragging, as the viewer does.
     */
    public onWheel(event: WheelEvent) {
        event.preventDefault();
        const container = this._containerEl();
        const svg = this._canvas().nativeElement;
        const rect = container.getBoundingClientRect();
        const map = svg.getBoundingClientRect();
        const offset_x = event.clientX - rect.left;
        const offset_y = event.clientY - rect.top;
        // Where the cursor sits on the map, as a fraction of it
        const fraction_x = clamp01((event.clientX - map.left) / map.width);
        const fraction_y = clamp01((event.clientY - map.top) / map.height);
        const before = this.state.zoom();
        this.state.zoomBy(event.deltaY > 0 ? ZOOM_STEP_OUT : ZOOM_STEP_IN);
        if (this.state.zoom() === before) return;
        // The canvas resizes on the next frame; scroll once it has.
        requestAnimationFrame(() => {
            const next = svg.getBoundingClientRect();
            const bounds = container.getBoundingClientRect();
            container.scrollLeft +=
                next.left - bounds.left + fraction_x * next.width - offset_x;
            container.scrollTop +=
                next.top - bounds.top + fraction_y * next.height - offset_y;
        });
    }

    public onRenameInput(event: Event) {
        const value = (event.target as HTMLInputElement).value;
        this.editing.update((edit) => (edit ? { ...edit, value } : edit));
    }

    public finishEditing() {
        const edit = this.editing();
        if (!edit) return;
        this.state.updateObject(edit.id, { label: edit.value || 'Untitled' });
        this.editing.set(null);
    }

    public startRotate(event: MouseEvent, object: MapObject) {
        event.stopPropagation();
        event.preventDefault();
        this.state.pushHistory();
        const centerX = this.centerX(object);
        const centerY = this.centerY(object);
        const handleY = this.rotateHandleY(object);
        this._rotating.set({
            id: object.id,
            centerX,
            centerY,
            startAngle: (Math.atan2(handleY - centerY, 0) * 180) / Math.PI,
            startRotation: object.geometry.rotation ?? 0,
        });
    }

    public startGroupRotate(
        event: MouseEvent,
        bounds: GroupTransformState['bounds'],
    ) {
        event.stopPropagation();
        event.preventDefault();
        this.state.pushHistory();
        const centerX = bounds.x + bounds.width / 2;
        const centerY = bounds.y + bounds.height / 2;
        this._group_rotating.set({
            bounds,
            objects: this._selectedSnapshots(),
            centerX,
            centerY,
            startAngle:
                (Math.atan2(this.groupRotateY(bounds) - centerY, 0) * 180) /
                Math.PI,
        });
    }

    public onVertexDown(event: MouseEvent, object: MapObject, index: number) {
        event.stopPropagation();
        event.preventDefault();
        const points = object.geometry.points ?? [];
        if (event.altKey) {
            if (points.length <= 3) return;
            const next = points.filter((_, i) => i !== index);
            this.state.pushHistory();
            this.state.updateObject(object.id, {
                geometry: {
                    ...object.geometry,
                    points: next,
                    ...boundsOf(next),
                },
            });
            return;
        }
        this.state.pushHistory();
        this._vertex_drag.set({ id: object.id, idx: index });
    }

    // ── Interaction internals ───────────────────────────────────────────────

    private _applyDrag(dragging: DragState, x: number, y: number) {
        const object = this.state.objects().find((o) => o.id === dragging.id);
        if (!object) return;
        const moving = new Set(this.state.movingIds(dragging.id));
        const group = moving.size > 1 ? this.groupBounds() : null;
        const currentX = object.geometry.x ?? 0;
        const currentY = object.geometry.y ?? 0;
        const rawX = Math.max(
            currentX - (group?.x ?? currentX),
            x - dragging.offsetX,
        );
        const rawY = Math.max(
            currentY - (group?.y ?? currentY),
            y - dragging.offsetY,
        );
        const others = this.state
            .objects()
            .filter((o) => !moving.has(o.id) && o.visible)
            .map((o) => ({
                x: o.geometry.x ?? 0,
                y: o.geometry.y ?? 0,
                w: o.geometry.width ?? 0,
                h: o.geometry.height ?? 0,
            }));
        const { snappedX, snappedY, guides } = computeSnap(
            {
                x: rawX,
                y: rawY,
                w: object.geometry.width ?? 0,
                h: object.geometry.height ?? 0,
            },
            others,
        );
        this.snap_guides.set(this.state.snap_enabled() ? guides : []);
        const x0 = this.state.snap_enabled() ? snappedX : rawX;
        const y0 = this.state.snap_enabled() ? snappedY : rawY;
        const dx = x0 - (object.geometry.x ?? 0);
        const dy = y0 - (object.geometry.y ?? 0);
        // Everything in the multi-selection moves by the same delta
        for (const id of moving) {
            const target = this.state.objects().find((o) => o.id === id);
            if (!target) continue;
            const nx = id === dragging.id ? x0 : (target.geometry.x ?? 0) + dx;
            const ny = id === dragging.id ? y0 : (target.geometry.y ?? 0) + dy;
            // Polygons carry their own points, which must move with the origin
            const geometry = target.geometry.points
                ? {
                      ...target.geometry,
                      x: nx,
                      y: ny,
                      points: target.geometry.points.map((p) => ({
                          x: p.x + (nx - (target.geometry.x ?? 0)),
                          y: p.y + (ny - (target.geometry.y ?? 0)),
                      })),
                  }
                : { ...target.geometry, x: nx, y: ny };
            this.state.patchLocal(id, { geometry });
        }
    }

    private _applyResize(resizing: ResizeState, x: number, y: number) {
        const { handle, origX, origY, origW, origH } = resizing;
        let nx = origX;
        let ny = origY;
        let nw = origW;
        let nh = origH;
        if (handle.includes('w')) {
            nx = Math.min(x, origX + origW - 20);
            nw = origX + origW - nx;
        }
        if (handle.includes('e')) nw = Math.max(20, x - origX);
        if (handle.includes('n')) {
            ny = Math.min(y, origY + origH - 20);
            nh = origY + origH - ny;
        }
        if (handle.includes('s')) nh = Math.max(20, y - origY);
        const object = this.state.objects().find((o) => o.id === resizing.id);
        if (!object) return;
        this.state.patchLocal(resizing.id, {
            geometry: {
                ...object.geometry,
                x: nx,
                y: ny,
                width: nw,
                height: nh,
            },
        });
    }

    private _applyGroupResize(
        resizing: GroupResizeState,
        x: number,
        y: number,
    ) {
        const { bounds, handle } = resizing;
        let left = bounds.x;
        let top = bounds.y;
        let right = bounds.x + bounds.width;
        let bottom = bounds.y + bounds.height;
        if (handle.includes('w')) left = Math.min(x, right - 20);
        if (handle.includes('e')) right = Math.max(x, left + 20);
        if (handle.includes('n')) top = Math.min(y, bottom - 20);
        if (handle.includes('s')) bottom = Math.max(y, top + 20);
        const sx = (right - left) / bounds.width;
        const sy = (bottom - top) / bounds.height;
        for (const object of resizing.objects) {
            const geometry = structuredClone(object.geometry);
            if (geometry.points) {
                geometry.points = geometry.points.map((point) => ({
                    x: left + (point.x - bounds.x) * sx,
                    y: top + (point.y - bounds.y) * sy,
                }));
                Object.assign(geometry, boundsOf(geometry.points));
            } else if (geometry.type === 'circle') {
                geometry.x = left + ((geometry.x ?? 0) - bounds.x) * sx;
                geometry.y = top + ((geometry.y ?? 0) - bounds.y) * sy;
                geometry.r =
                    ((geometry.r ?? 12) * (Math.abs(sx) + Math.abs(sy))) / 2;
            } else {
                geometry.x = left + ((geometry.x ?? 0) - bounds.x) * sx;
                geometry.y = top + ((geometry.y ?? 0) - bounds.y) * sy;
                if (geometry.width != null) geometry.width *= sx;
                if (geometry.height != null) geometry.height *= sy;
            }
            this.state.patchLocal(object.id, { geometry });
        }
    }

    private _applyGroupRotate(
        rotating: GroupRotateState,
        x: number,
        y: number,
        snap: boolean,
    ) {
        const angle =
            (Math.atan2(y - rotating.centerY, x - rotating.centerX) * 180) /
            Math.PI;
        let delta = angle - rotating.startAngle;
        if (snap) delta = Math.round(delta / 15) * 15;
        const radians = (delta * Math.PI) / 180;
        const transform = (point: Point): Point => ({
            x:
                rotating.centerX +
                (point.x - rotating.centerX) * Math.cos(radians) -
                (point.y - rotating.centerY) * Math.sin(radians),
            y:
                rotating.centerY +
                (point.x - rotating.centerX) * Math.sin(radians) +
                (point.y - rotating.centerY) * Math.cos(radians),
        });
        for (const object of rotating.objects) {
            const geometry = structuredClone(object.geometry);
            if (geometry.points) {
                geometry.points = geometry.points.map(transform);
                Object.assign(geometry, boundsOf(geometry.points));
            } else {
                const bounds = this._objectBounds(object);
                const center = transform({
                    x: bounds.x + bounds.width / 2,
                    y: bounds.y + bounds.height / 2,
                });
                if (geometry.type === 'circle') {
                    geometry.x = center.x;
                    geometry.y = center.y;
                } else {
                    geometry.x = center.x - bounds.width / 2;
                    geometry.y = center.y - bounds.height / 2;
                    geometry.rotation =
                        ((geometry.rotation ?? 0) + delta + 360) % 360;
                }
            }
            this.state.patchLocal(object.id, { geometry });
        }
    }

    private _startGroupResize(x: number, y: number): boolean {
        const bounds = this.groupBounds();
        if (!bounds) return false;
        const tolerance = Math.max(
            15,
            Math.max(this.width(), this.height()) * 0.008,
        );
        for (const handle of HANDLES) {
            const [hx, hy] = getHandlePos(
                handle,
                bounds.x,
                bounds.y,
                bounds.width,
                bounds.height,
            );
            if (Math.abs(x - hx) < tolerance && Math.abs(y - hy) < tolerance) {
                this.state.pushHistory();
                this._group_resizing.set({
                    bounds,
                    handle,
                    objects: this._selectedSnapshots(),
                });
                return true;
            }
        }
        return false;
    }

    private _finishSelectionBox(box: SelectionBox) {
        const left = Math.min(box.startX, box.currentX);
        const top = Math.min(box.startY, box.currentY);
        const right = Math.max(box.startX, box.currentX);
        const bottom = Math.max(box.startY, box.currentY);
        if (right - left < 4 && bottom - top < 4) return;
        const activeLayer = this.state.active_layer_id();
        const ids = this.state
            .visible_objects()
            .filter((object) => {
                if (object.layer !== activeLayer || object.locked) return false;
                const bounds = this._objectBounds(object);
                return (
                    bounds.x >= left &&
                    bounds.y >= top &&
                    bounds.x + bounds.width <= right &&
                    bounds.y + bounds.height <= bottom
                );
            })
            .map((object) => object.id);
        this.state.setMultiSelect(ids);
    }

    private _selectedSnapshots(): MapObject[] {
        const ids = this.state.multi_select();
        return this.state
            .objects()
            .filter((object) => ids.includes(object.id))
            .map((object) => structuredClone(object));
    }

    private _objectBounds(object: MapObject) {
        const geometry = object.geometry;
        if (geometry.points?.length) return boundsOf(geometry.points);
        if (geometry.type === 'circle') {
            const r = geometry.r ?? 12;
            return {
                x: (geometry.x ?? 0) - r,
                y: (geometry.y ?? 0) - r,
                width: r * 2,
                height: r * 2,
            };
        }
        return {
            x: geometry.x ?? 0,
            y: geometry.y ?? 0,
            width: geometry.width ?? 0,
            height: geometry.height ?? 0,
        };
    }

    private _applyVertexDrag(
        vertex: { id: string; idx: number },
        x: number,
        y: number,
    ) {
        const object = this.state.objects().find((o) => o.id === vertex.id);
        if (!object?.geometry.points) return;
        const points = object.geometry.points.map((p, i) =>
            i === vertex.idx ? { x, y } : p,
        );
        this.state.patchLocal(vertex.id, {
            geometry: { ...object.geometry, points, ...boundsOf(points) },
        });
    }

    private _startResize(x: number, y: number): boolean {
        const selected = this.state.selected();
        if (!selected || selected.geometry.type !== 'rect') return false;
        const sx = selected.geometry.x ?? 0;
        const sy = selected.geometry.y ?? 0;
        const sw = selected.geometry.width ?? 100;
        const sh = selected.geometry.height ?? 100;
        const tolerance = Math.max(
            15,
            Math.max(this.width(), this.height()) * 0.008,
        );
        for (const handle of HANDLES) {
            const [hx, hy] = getHandlePos(handle, sx, sy, sw, sh);
            if (Math.abs(x - hx) < tolerance && Math.abs(y - hy) < tolerance) {
                this.state.pushHistory();
                this._resizing.set({
                    id: selected.id,
                    handle,
                    origX: sx,
                    origY: sy,
                    origW: sw,
                    origH: sh,
                });
                return true;
            }
        }
        return false;
    }

    /** Topmost selectable object under the cursor, preferring the active layer */
    private _hitTest(x: number, y: number): MapObject | null {
        const selectable = new Set(
            this.state
                .layers()
                .filter((l) => l.visible && !l.locked)
                .map((l) => l.id),
        );
        const active = this.state.active_layer_id();
        const hits: { object: MapObject; area: number; onActive: boolean }[] =
            [];
        for (const object of this.state.objects()) {
            if (!object.visible || !selectable.has(object.layer)) continue;
            const g = object.geometry;
            const onActive = object.layer === active;
            if (g.type === 'circle') {
                const r = g.r ?? 12;
                if (Math.hypot(x - (g.x ?? 0), y - (g.y ?? 0)) <= r + 5)
                    hits.push({ object, area: Math.PI * r * r, onActive });
                continue;
            }
            const bx = g.x ?? 0;
            const by = g.y ?? 0;
            const bw = g.width ?? 100;
            const bh = g.height ?? 100;
            if (x >= bx && x <= bx + bw && y >= by && y <= by + bh)
                hits.push({ object, area: bw * bh, onActive });
        }
        if (!hits.length) return null;
        const onActive = hits.filter((h) => h.onActive);
        const pool = onActive.length ? onActive : hits;
        pool.sort((a, b) => a.area - b.area);
        return pool[0].object;
    }

    private _updateEdgeHover(x: number, y: number) {
        const selected = this.state.selected();
        const points = selected?.geometry.points;
        if (
            this.state.active_tool() !== 'select' ||
            !selected ||
            selected.geometry.type !== 'polygon' ||
            !points?.length
        ) {
            this._edge_hover.set(null);
            return;
        }
        const span = Math.max(this.width(), this.height());
        const vertexRadius = Math.max(10, span * 0.006);
        if (points.some((p) => Math.hypot(p.x - x, p.y - y) < vertexRadius)) {
            this._edge_hover.set(null);
            return;
        }
        const threshold = Math.max(8, span * 0.005);
        let best: EdgeHover | null = null;
        let bestDist = threshold;
        for (let i = 0; i < points.length; i++) {
            const next = points[(i + 1) % points.length];
            const { dist, cx, cy } = closestPointOnSegment(
                x,
                y,
                points[i].x,
                points[i].y,
                next.x,
                next.y,
            );
            if (dist < bestDist) {
                bestDist = dist;
                best = { id: selected.id, edgeIdx: i, px: cx, py: cy };
            }
        }
        this._edge_hover.set(best);
    }

    private _insertVertex(hover: EdgeHover) {
        const object = this.state.objects().find((o) => o.id === hover.id);
        if (!object?.geometry.points) return;
        const index = hover.edgeIdx + 1;
        const points = [
            ...object.geometry.points.slice(0, index),
            { x: hover.px, y: hover.py },
            ...object.geometry.points.slice(index),
        ];
        this.state.pushHistory();
        this.state.patchLocal(object.id, {
            geometry: { ...object.geometry, points, ...boundsOf(points) },
        });
        this._vertex_drag.set({ id: object.id, idx: index });
        this._edge_hover.set(null);
    }

    private _finishRectDraw(draw: RectDrawState) {
        const x = Math.min(draw.startX, draw.currentX);
        const y = Math.min(draw.startY, draw.currentY);
        const width = Math.abs(draw.currentX - draw.startX);
        const height = Math.abs(draw.currentY - draw.startY);
        if (width <= 10 || height <= 10) return;
        const layer = this.state
            .layers()
            .find((l) => l.id === this.state.active_layer_id());
        if (!layer || layer.locked) return;
        this.state.createOnActiveLayer({ type: 'rect', x, y, width, height });
    }

    private _onPolygonClick(point: Point, shift: boolean) {
        const points = this.outline_points();
        if (points.length >= 3) {
            const first = points[0];
            const closeThreshold =
                Math.max(this.width(), this.height()) * 0.015;
            if (
                Math.hypot(point.x - first.x, point.y - first.y) <
                closeThreshold
            ) {
                this._closePolygon(points);
                return;
            }
        }
        let { x, y } = point;
        if (shift && points.length) {
            const last = points[points.length - 1];
            if (Math.abs(x - last.x) > Math.abs(y - last.y)) y = last.y;
            else x = last.x;
        }
        this.outline_points.set([...points, { x, y }]);
    }

    private _closePolygon(points: Point[]) {
        this.state.createOnActiveLayer({
            type: 'polygon',
            points,
            ...boundsOf(points),
        });
        this.outline_points.set([]);
        this.state.setTool('select');
    }

    private _onWallClick(point: Point, shift: boolean) {
        const snapped = this._snapWallPoint(point, shift);
        const start = this.wall_start();
        if (!start) {
            this.wall_start.set(snapped);
            return;
        }
        const dx = snapped.x - start.x;
        const dy = snapped.y - start.y;
        const length = Math.hypot(dx, dy);
        if (length > 5) {
            const half = this.wall_thickness() / 2;
            const nx = (-dy / length) * half;
            const ny = (dx / length) * half;
            const points = [
                { x: start.x + nx, y: start.y + ny },
                { x: snapped.x + nx, y: snapped.y + ny },
                { x: snapped.x - nx, y: snapped.y - ny },
                { x: start.x - nx, y: start.y - ny },
            ];
            const count = this.state
                .objects()
                .filter((o) => o.layer === 'walls').length;
            this.state.createObject(
                {
                    object_type: 'decorative',
                    label: `Wall ${count + 1}`,
                    svg_id: `wall-${String(count + 1).padStart(3, '0')}`,
                    geometry: { type: 'polygon', points, ...boundsOf(points) },
                    layer: 'walls',
                    fill_color: '#374151',
                    stroke_color: '#1f2937',
                },
                { select: false },
            );
        }
        this.wall_start.set(null);
        this.wall_preview.set(null);
    }

    /** Clears any in-progress drawing — used by Escape and tool changes */
    public cancelDrawing() {
        this.outline_points.set([]);
        this.wall_start.set(null);
        this.wall_preview.set(null);
        this.rect_draw.set(null);
        this.editing.set(null);
    }

    // ── Drags that leave the canvas ─────────────────────────────────────────

    /** Interaction continues off-canvas, like <dynamic-map>'s window listeners */
    private _interacting() {
        return !!(
            this._panning() ||
            this._dragging() ||
            this._resizing() ||
            this._rotating() ||
            this._group_resizing() ||
            this._group_rotating() ||
            this._vertex_drag() ||
            this.rect_draw() ||
            this.selection_box()
        );
    }

    @HostListener('window:mousemove', ['$event'])
    public onWindowMouseMove(event: MouseEvent) {
        const canvas = this._canvas().nativeElement;
        if (this._interacting() && !canvas.contains(event.target as Node))
            this.onMouseMove(event);
    }

    @HostListener('window:mouseup')
    public onWindowMouseUp() {
        if (this._interacting()) this.onMouseUp();
    }

    // ── Space-bar panning ───────────────────────────────────────────────────

    @HostListener('window:keydown', ['$event'])
    public onKeyDown(event: KeyboardEvent) {
        if (event.code !== 'Space' || event.repeat) return;
        const target = event.target as HTMLElement;
        if (
            target instanceof HTMLInputElement ||
            target instanceof HTMLTextAreaElement
        )
            return;
        event.preventDefault();
        this._space_held.set(true);
    }

    @HostListener('window:keyup', ['$event'])
    public onKeyUp(event: KeyboardEvent) {
        if (event.code !== 'Space') return;
        this._space_held.set(false);
        this._panning.set(false);
        this._pan_start = null;
    }
}
