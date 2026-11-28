import {
    BufferAttribute,
    BufferGeometry,
    CanvasTexture,
    DoubleSide,
    LinearFilter,
    LinearMipmapLinearFilter,
    LineBasicMaterial,
    LineSegments,
    Mesh,
    MeshBasicMaterial,
    MOUSE,
    PerspectiveCamera,
    Raycaster,
    Scene,
    ShapeUtils,
    SRGBColorSpace,
    TOUCH,
    Vector2,
    Vector3,
    WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

import {
    HIDDEN_ATTR,
    isHidden,
    KIND_ATTR,
    Map3DKind,
    MAP_3D_KINDS,
    mapUnit,
    MAX_HEIGHT,
} from './annotations';
import {
    buildMesh,
    Footprint,
    footprintAtIndex,
    footprintsOf,
    MeshData,
} from './mesh';
import { MapShape, ParsedMap, parseMap, Point2 } from './shapes';

export interface Map3DPoint {
    readonly x: number;
    readonly y: number;
}

export interface Map3DBounds extends Map3DPoint {
    readonly w: number;
    readonly h: number;
}

/** A loaded map, as the 2D map viewer's store returns it */
export interface Map3DDetails {
    raw_data: string;
    element_bounds: Map<string, Map3DBounds>;
    aspect_ratio: number;
}

/** Same shape as the 2D viewer's overlay */
export interface Map3DOverlay {
    ref: string | Map3DPoint | Map3DBounds;
    type: 'point' | 'box';
    contents: HTMLElement | string;
    scale_with_zoom?: boolean;
    hover?: boolean;
    min_zoom?: number;
    z_index?: string | number;
}

/** Same shape as the 2D viewer's action */
export interface Map3DAction {
    ref: string;
    events: string[];
    priority?: number;
    callback: (p: Map3DPoint) => void;
}

export interface Map3DViewChange {
    zoom: number;
    center: Map3DPoint;
}

/** What is under a click or the pointer on the map */
export interface Map3DPick {
    /** Position on the map, 0 to 1 on each axis */
    point: Map3DPoint;
    /** The drawn element at that position, raised or flat */
    shape: MapShape | null;
    event: PointerEvent | MouseEvent;
}

export interface Map3DViewerOptions {
    /** Loads the map for a URL. Needed for `setMap`. */
    load?: (path: string) => Promise<Map3DDetails>;
}

interface OverlayInstance {
    overlay: Map3DOverlay;
    element: HTMLDivElement;
    last_display?: string;
    last_transform?: string;
    last_size?: string;
}

const MAX_ZOOM = 20;
const MIN_ZOOM = 0.5;
/** Fraction of the view left as padding around the map at 100% zoom */
const VIEW_PADDING = 0.05;
/** Extra distance at 100% zoom, as the near edge of a tilted map is wider on screen */
const TILT_MARGIN = 1.12;
/** Lowest the camera goes above the floor, in metres */
const MIN_CAMERA_HEIGHT = 0.1;
/** Vertical field of view in degrees */
const FIELD_OF_VIEW = 30;
/** Darkest a vertical face is drawn before shading, as a linear colour value */
const MIN_SIDE_COLOUR = 0.09;
/** Degrees from straight down the camera starts at */
export const DEFAULT_TILT = 48;
/**
 * The isometric view: degrees from straight down at which the three axes
 * are drawn at equal angles, seen from a corner of the map
 */
const ISOMETRIC_TILT = 54.736;
const ISOMETRIC_BEARING = 45;
/** Field of view in degrees narrow enough to leave no visible perspective */
const ISOMETRIC_FIELD_OF_VIEW = 2;
/** Milliseconds a turn of the view takes */
const TURN_DURATION = 300;
/** Furthest the camera tilts from straight down, in degrees */
const MAX_TILT = 78;
/** Longest side of the map texture in pixels */
const DESKTOP_TEXTURE_SIZE = 4096;
const MOBILE_TEXTURE_SIZE = 2048;
/** Metres across assumed for a map with no 3D view */
const FALLBACK_SPAN = 45;
const GLASS_OPACITY = 0.42;
const SELECT_COLOUR = 0x2563eb;
const HOVER_COLOUR = 0xf59e0b;
const SVG_NS = 'http://www.w3.org/2000/svg';
/** Groups inside groups that the layer styles follow an annotation through */
const ANNOTATION_DEPTH = 4;
const HIDDEN_CSS = `svg [${HIDDEN_ATTR}] { display: none !important; }`;

/**
 * CSS that leaves only some kinds of element showing when the map is drawn.
 * An element takes the kind of the nearest annotation at or above it.
 * @param shown Whether elements of a kind show
 * @param unannotated Whether elements with no annotation show
 */
function layerCss(
    shown: (kind: Map3DKind) => boolean,
    unannotated: boolean,
): string {
    const rules = unannotated
        ? []
        : ['svg * { visibility: hidden !important; }'];
    for (let depth = 0; depth < ANNOTATION_DEPTH; depth++) {
        const above = `svg ${`[${KIND_ATTR}] `.repeat(depth)}`;
        for (const show of [true, false]) {
            const selectors = MAP_3D_KINDS.filter(
                (kind) => shown(kind) === show,
            )
                .map((kind) => `${above}[${KIND_ATTR}="${kind}"]`)
                .flatMap((selector) => [selector, `${selector} *`]);
            if (!selectors.length) continue;
            rules.push(
                `${selectors.join(', ')} { visibility: ${show ? 'visible' : 'hidden'} !important; }`,
            );
        }
    }
    return `${rules.join('\n')}\n${HIDDEN_CSS}`;
}

/** The floor, which the raised elements take their colour from */
const FLOOR_CSS = layerCss(
    (kind) => kind !== 'label' && kind !== 'space',
    true,
);
const LABEL_CSS = layerCss((kind) => kind === 'label', false);
const SPACE_CSS = layerCss((kind) => kind === 'space', false);

/** Action events that end a press, which a drag must not trigger */
const RELEASE_EVENTS = new Set(['click', 'mouseup', 'pointerup', 'touchend']);

/** The bearing in degrees of the corner of the map nearest to a bearing */
function nearestCorner(bearing: number): number {
    return (
        Math.round((bearing - ISOMETRIC_BEARING) / 90) * 90 + ISOMETRIC_BEARING
    );
}

/**
 * The bearing in degrees a turn ends on. An isometric view turns the way
 * it was asked to as far as the next corner of the map.
 */
export function turnTarget(
    bearing: number,
    degrees: number,
    isometric: boolean,
): number {
    if (!isometric) return bearing + degrees;
    const quarters = (bearing - ISOMETRIC_BEARING) / 90;
    const next =
        degrees > 0
            ? Math.floor(quarters + 1e-6) + 1
            : Math.ceil(quarters - 1e-6) - 1;
    return next * 90 + ISOMETRIC_BEARING;
}

/**
 * Where a point on the floor is once the view has turned about a centre.
 * @param degrees Change in the bearing of the view, clockwise
 */
export function turnAbout(
    point: readonly [number, number],
    centre: readonly [number, number],
    degrees: number,
): [number, number] {
    const angle = (-degrees * Math.PI) / 180;
    const x = point[0] - centre[0];
    const z = point[1] - centre[1];
    return [
        centre[0] + x * Math.cos(angle) + z * Math.sin(angle),
        centre[1] - x * Math.sin(angle) + z * Math.cos(angle),
    ];
}

function reducedMotion(): boolean {
    return (
        typeof window !== 'undefined' &&
        !!window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    );
}

function isMobileDevice(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return (
        window.matchMedia('(pointer: coarse)').matches &&
        window.matchMedia('(max-width: 1024px)').matches
    );
}

function cleanCssSelector(selector: string): string {
    const escaped = selector.replace(
        /[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g,
        '\\$&',
    );
    return escaped
        .split(' ')
        .map((part) => part.replace(/^\\/, ''))
        .join(' ');
}

function pointInRing(x: number, y: number, ring: readonly Point2[]): boolean {
    let inside = false;
    for (let i = 0, j = ring.length - 1; i < ring.length; j = i++) {
        const [xi, yi] = ring[i];
        const [xj, yj] = ring[j];
        if (yi > y !== yj > y && x < ((xj - xi) * (y - yi)) / (yj - yi) + xi) {
            inside = !inside;
        }
    }
    return inside;
}

function distanceToSegment(x: number, y: number, a: Point2, b: Point2): number {
    const dx = b[0] - a[0];
    const dy = b[1] - a[1];
    const length = dx * dx + dy * dy;
    const t = length
        ? Math.max(0, Math.min(1, ((x - a[0]) * dx + (y - a[1]) * dy) / length))
        : 0;
    return Math.hypot(x - (a[0] + dx * t), y - (a[1] + dy * t));
}

/** Whether a point in SVG user units is on a drawn element. */
export function shapeContains(
    shape: MapShape,
    x: number,
    y: number,
    tolerance: number,
): boolean {
    const [min_x, min_y, max_x, max_y] = shape.bbox;
    const reach = tolerance + shape.stroke_width / 2;
    if (
        x < min_x - reach ||
        x > max_x + reach ||
        y < min_y - reach ||
        y > max_y + reach
    ) {
        return false;
    }
    if (shape.has_fill) {
        for (const polygon of shape.polygons) {
            if (
                pointInRing(x, y, polygon.outer) &&
                !polygon.holes.some((hole) => pointInRing(x, y, hole))
            ) {
                return true;
            }
        }
    }
    if (!shape.has_stroke && shape.has_fill) return false;
    for (const sub of shape.subpaths) {
        const count = sub.points.length;
        const segments = sub.closed ? count : count - 1;
        for (let i = 0; i < segments; i++) {
            const distance = distanceToSegment(
                x,
                y,
                sub.points[i],
                sub.points[(i + 1) % count],
            );
            if (distance <= reach) return true;
        }
    }
    return false;
}

/**
 * Draws a map in 3D: the SVG as the floor, with the elements it marks as
 * raised standing on it. Takes the same calls as the 2D `MapViewer`, so a
 * host can use either.
 */
export class Map3DViewer {
    public readonly container: HTMLElement;
    public readonly canvas: HTMLCanvasElement;
    public readonly overlays: HTMLElement;
    public map: Map3DDetails | null = null;
    /** The parsed map. Annotations changed on it show after `refresh()`. */
    public parsed: ParsedMap | null = null;
    public footprints: Footprint[] = [];
    public map_image: HTMLCanvasElement | null = null;
    public styles_string = '';
    /** Target of the view on the map, 0 to 1 on each axis */
    public center: Map3DPoint = { x: 0.5, y: 0.5 };
    /** 1 fits the whole map in the view */
    public zoom = 1;
    public disable_zoom = false;
    public disable_pan = false;
    /** Whether the view is locked to the isometric one */
    public isometric = false;
    public onViewChange: ((event: Map3DViewChange) => void) | null = null;
    /** Called for a click that was not a drag */
    public onPick: ((pick: Map3DPick) => void) | null = null;
    /** Called when the element under the pointer changes. Set to track hover. */
    public onHover: ((shape: MapShape | null) => void) | null = null;
    public debug = false;
    public debug_info = {
        pointer: null as Map3DPoint | null,
        hover_id: '',
        highlight_id: '',
        last_draw_ms: 0,
        draws_last_second: 0,
    };
    public readonly texture_mode = '3d';

    private _renderer: WebGLRenderer;
    private _scene = new Scene();
    private _camera = new PerspectiveCamera(FIELD_OF_VIEW, 1, 0.1, 5000);
    private _controls: OrbitControls;
    private _raycaster = new Raycaster();
    private _texture: CanvasTexture | null = null;
    private _label_texture: CanvasTexture | null = null;
    private _space_texture: CanvasTexture | null = null;
    private _floor: Mesh<BufferGeometry, MeshBasicMaterial>;
    /** Labels, drawn on the floor over everything else */
    private _labels: Mesh<BufferGeometry, MeshBasicMaterial>;
    private _solid: Mesh<BufferGeometry, MeshBasicMaterial>;
    private _glass: Mesh<BufferGeometry, MeshBasicMaterial>;
    /**
     * The glass again, writing depth and no colour once it has been drawn,
     * so the areas of spaces are hidden behind glass as they are behind walls
     */
    private _glass_depth: Mesh<BufferGeometry, MeshBasicMaterial>;
    /**
     * Areas of bookable spaces, drawn on the floor apart from the rest of it
     * so what stands in a space keeps its own colour
     */
    private _spaces: Mesh<BufferGeometry, MeshBasicMaterial>;
    private _selection: LineSegments<BufferGeometry, LineBasicMaterial>;
    private _selection_fill: Mesh<BufferGeometry, MeshBasicMaterial>;
    private _hover: LineSegments<BufferGeometry, LineBasicMaterial>;
    private _hover_fill: Mesh<BufferGeometry, MeshBasicMaterial>;
    private _meshes: { solid: MeshData; glass: MeshData } | null = null;
    /** Map size in metres */
    private _width = 1;
    private _depth = 1;
    /** SVG user units per metre */
    private _unit = 1;
    private _load?: (path: string) => Promise<Map3DDetails>;
    private _map_path = '';
    private _image_generation = 0;
    private _image_frame_id: number | null = null;
    private _draw_frame_id: number | null = null;
    private _notify_frame_id: number | null = null;
    private _resize_observer: ResizeObserver | null = null;
    private _overlay_instances: OverlayInstance[] = [];
    private _actions: Map3DAction[] = [];
    private _action_handlers = new Map<string, (e: Event) => void>();
    private _action_last_triggered = new Map<string, number>();
    private _pointer_down: Map3DPoint | null = null;
    /** Set once the press moves more than 5px or adds a finger, so its release is not an action */
    private _dragged = false;
    /** Pointers pressed on the map now */
    private _pointers = new Set<number>();
    private _hover_shape: MapShape | null = null;
    /** Height in metres of the top of each raised element, by element ID */
    private _top_by_id = new Map<string, number>();
    private _top_by_shape = new Map<number, number>();
    /** The turn being animated: angles in degrees and when it started */
    private _turn: {
        tilt: number;
        from: number;
        to: number;
        start: number;
    } | null = null;
    private _turn_frame_id: number | null = null;
    /** Bearing in degrees the view had when its centre was last set */
    private _pivot_bearing = 0;
    private _destroyed = false;
    private _listeners: [EventTarget, string, EventListener][] = [];

    constructor(el: Element, options: Map3DViewerOptions = {}) {
        this.container = el as HTMLElement;
        this._load = options.load;
        this.container.innerHTML = '';
        this.container.style.overflow = 'hidden';
        this.container.style.touchAction = 'none';

        this._renderer = new WebGLRenderer({ antialias: true, alpha: true });
        this._renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
        this._renderer.outputColorSpace = SRGBColorSpace;
        this.canvas = this._renderer.domElement;
        this.canvas.style.cssText =
            'position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none;';
        this.container.appendChild(this.canvas);
        this.overlays = document.createElement('div');
        this.overlays.style.cssText =
            'position: absolute; inset: 0; z-index: 0; pointer-events: none;';
        this.container.appendChild(this.overlays);

        this._floor = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({ transparent: true }),
        );
        const solid = new MeshBasicMaterial({
            vertexColors: true,
            side: DoubleSide,
        });
        // Vertical faces carry a vertex shade below 1. Ones darker than
        // MIN_SIDE_COLOUR are drawn at it, so the faces of black walls show.
        solid.onBeforeCompile = (shader) => {
            shader.fragmentShader = shader.fragmentShader.replace(
                '#include <color_fragment>',
                `if (vColor.r < 0.99) diffuseColor.rgb = max(diffuseColor.rgb, vec3(${MIN_SIDE_COLOUR.toFixed(3)}));
                #include <color_fragment>`,
            );
        };
        this._solid = new Mesh(new BufferGeometry(), solid);
        this._glass = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({
                vertexColors: true,
                side: DoubleSide,
                transparent: true,
                opacity: GLASS_OPACITY,
                depthWrite: false,
            }),
        );
        this._spaces = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({
                transparent: true,
                premultipliedAlpha: true,
                depthWrite: false,
                // Lies in the plane of the floor and is drawn over it
                polygonOffset: true,
                polygonOffsetFactor: -2,
                polygonOffsetUnits: -2,
            }),
        );
        this._glass_depth = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({
                transparent: true,
                colorWrite: false,
                side: DoubleSide,
            }),
        );
        this._floor.renderOrder = -4;
        this._glass.renderOrder = -3;
        this._glass_depth.renderOrder = -2;
        this._spaces.renderOrder = -1;
        this._spaces.visible = false;
        this._labels = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({
                transparent: true,
                premultipliedAlpha: true,
                depthTest: false,
                depthWrite: false,
            }),
        );
        this._labels.renderOrder = 5;
        this._labels.visible = false;
        this._selection = this._outline(SELECT_COLOUR);
        this._selection_fill = this._tint(SELECT_COLOUR, 0.4);
        this._hover = this._outline(HOVER_COLOUR);
        this._hover_fill = this._tint(HOVER_COLOUR, 0.25);
        this._floor.visible = false;
        this._scene.add(
            this._floor,
            this._solid,
            this._glass,
            this._glass_depth,
            this._spaces,
            this._labels,
            this._hover_fill,
            this._selection_fill,
            this._hover,
            this._selection,
        );

        this._controls = new OrbitControls(this._camera, this.container);
        this._controls.screenSpacePanning = false;
        this._controls.zoomToCursor = true;
        this._controls.minPolarAngle = 0;
        this._controls.maxPolarAngle = (MAX_TILT * Math.PI) / 180;
        this._controls.mouseButtons = {
            LEFT: MOUSE.PAN,
            MIDDLE: MOUSE.DOLLY,
            RIGHT: MOUSE.ROTATE,
        };
        this._controls.touches = { ONE: TOUCH.PAN, TWO: TOUCH.DOLLY_ROTATE };
        this._controls.addEventListener('change', () => this._onControls());

        this._resize_observer = new ResizeObserver(() => this._onResize());
        this._resize_observer.observe(this.container);

        this._listen(this.container, 'pointerdown', (e) => {
            const event = e as PointerEvent;
            this._cancelTurn();
            // A primary pointer starts a new gesture, which also drops a release
            // that never arrived. A second finger makes it a pinch.
            if (event.isPrimary) this._pointers.clear();
            this._dragged = this._pointers.size > 0;
            this._pointers.add(event.pointerId);
            this._pointer_down = { x: event.clientX, y: event.clientY };
            // The controls have captured the pointer, which sends the click
            // to the container and not to content placed over the map
            if (
                this.overlays.contains(event.target as Node) &&
                this.container.hasPointerCapture(event.pointerId)
            ) {
                this.container.releasePointerCapture(event.pointerId);
            }
        });
        for (const name of ['pointerup', 'pointercancel']) {
            this._listen(this.container, name, (e) =>
                this._pointers.delete((e as PointerEvent).pointerId),
            );
        }
        this._listen(this.container, 'click', (e) => this._onClick(e));
        this._listen(this.container, 'pointermove', (e) =>
            this._onPointerMove(e as PointerEvent),
        );
        this._listen(this.container, 'pointerleave', () =>
            this._setHover(null),
        );
        this._listen(this.canvas, 'webglcontextrestored', () => {
            for (const texture of [
                this._texture,
                this._label_texture,
                this._space_texture,
            ]) {
                if (texture) texture.needsUpdate = true;
            }
            this._invalidate();
        });
        this._onResize();
        this._placeCamera(DEFAULT_TILT, 0);
    }

    /** Degrees the camera is tilted from straight down */
    public get tilt(): number {
        const offset = this._camera.position.clone().sub(this._controls.target);
        return (
            (Math.atan2(Math.hypot(offset.x, offset.z), offset.y) * 180) /
            Math.PI
        );
    }

    /** Degrees the view is rotated clockwise from the map's own orientation */
    public get bearing(): number {
        const offset = this._camera.position.clone().sub(this._controls.target);
        return (-Math.atan2(offset.x, offset.z) * 180) / Math.PI;
    }

    public get overlay_count(): number {
        return this._overlay_instances.length;
    }

    /** Width over depth of the map on show */
    public get aspect(): number {
        return this._width / this._depth || 1;
    }

    /** SVG user units per metre of the map on show */
    public get unit(): number {
        return this._unit;
    }

    public async setMap(path: string) {
        if (!this._load) throw new Error('No map loader');
        this._map_path = path;
        const map = await this._load(path);
        if (this._map_path !== path || this._destroyed) return;
        this.setMapData(map);
    }

    /**
     * Show a map that is already loaded.
     * @param parsed The map already parsed, to share it with an editing session
     */
    public setMapData(map: Map3DDetails, parsed?: ParsedMap) {
        this.map = map;
        this.parsed = parsed || parseMap(map.raw_data);
        this.refresh();
    }

    /**
     * Rebuild the raised elements from the annotations on the parsed map.
     * Call after changing them.
     */
    public refresh() {
        if (!this.parsed) return;
        const { view_box, svg } = this.parsed;
        const span = Math.max(view_box.width, view_box.height);
        const { tilt, bearing } = this;
        this._unit = mapUnit(svg) || span / FALLBACK_SPAN;
        this._width = view_box.width / this._unit;
        this._depth = view_box.height / this._unit;
        this.footprints = footprintsOf(this.parsed, mapUnit(svg));

        const texture_size = this._textureSize();
        this._meshes = buildMesh(this.footprints, {
            width: this._width,
            depth: this._depth,
            texel: this._width / texture_size.width,
        });
        this._setGeometry(this._solid, this._meshes.solid);
        this._setGeometry(this._glass, this._meshes.glass);
        this._glass_depth.geometry = this._glass.geometry;
        this._glass_depth.visible = this._glass.visible;

        const floor = new BufferGeometry();
        floor.setAttribute(
            'position',
            new BufferAttribute(
                new Float32Array([
                    0,
                    0,
                    0,
                    this._width,
                    0,
                    0,
                    this._width,
                    0,
                    this._depth,
                    0,
                    0,
                    this._depth,
                ]),
                3,
            ),
        );
        floor.setAttribute(
            'uv',
            new BufferAttribute(new Float32Array([0, 1, 1, 1, 1, 0, 0, 0]), 2),
        );
        floor.setIndex([0, 2, 1, 0, 3, 2]);
        this._floor.geometry.dispose();
        this._floor.geometry = floor;
        this._labels.geometry = floor;
        this._spaces.geometry = floor;

        this._top_by_id.clear();
        this._top_by_shape.clear();
        for (const footprint of this.footprints) {
            this._top_by_shape.set(footprint.shape, footprint.top);
            let current: Element | null = footprint.element;
            while (current) {
                const id = current.getAttribute('id');
                if (id) {
                    this._top_by_id.set(
                        id,
                        Math.max(this._top_by_id.get(id) || 0, footprint.top),
                    );
                }
                current = current.parentElement;
            }
        }
        this._placeCamera(tilt, bearing);
        this._renderMapImage();
        this._invalidate();
    }

    public setCenter(point: Map3DPoint) {
        const center = {
            x: Math.max(0, Math.min(1, point.x)),
            y: Math.max(0, Math.min(1, point.y)),
        };
        if (
            Math.abs(center.x - this.center.x) < 1e-6 &&
            Math.abs(center.y - this.center.y) < 1e-6
        ) {
            return;
        }
        this.center = center;
        const target = this._controls.target;
        const dx = center.x * this._width - target.x;
        const dz = center.y * this._depth - target.z;
        target.x += dx;
        target.z += dz;
        this._camera.position.x += dx;
        this._camera.position.z += dz;
        this._invalidate();
    }

    public setZoom(new_zoom: number) {
        new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
        if (Math.abs(new_zoom - this.zoom) < 1e-6) return;
        this.zoom = new_zoom;
        const offset = this._camera.position.clone().sub(this._controls.target);
        offset.setLength(this._fitDistance() / new_zoom);
        this._camera.position.copy(this._controls.target).add(offset);
        this._invalidate();
    }

    /**
     * Set the camera angles in degrees, keeping the zoom. An isometric view
     * keeps its tilt and turns about the middle of the map.
     */
    public setAngles(tilt: number, bearing: number) {
        this._cancelTurn();
        if (this.isometric) tilt = ISOMETRIC_TILT;
        this._placeCamera(tilt, bearing);
        this._invalidate();
        // An isometric turn can move the centre, which hosts keep in step with
        this._notifyViewChange();
    }

    /**
     * Turn the map on screen as a short animation, by an angle in degrees
     * clockwise. An isometric view turns the same way to the next corner of
     * the map, about the middle of the map.
     */
    public turnBy(degrees: number) {
        // The bearing is the camera's, which goes round the other way to the map
        degrees = -degrees;
        const tilt = this.isometric ? ISOMETRIC_TILT : this.tilt;
        const from = this.bearing;
        // A turn asked for during another carries on from where that one was going
        let target = this._turn ? this._turn.to : from;
        // The bearing is read back between -180 and 180
        target += Math.round((from - target) / 360) * 360;
        const to = turnTarget(target, degrees, this.isometric);
        this._cancelTurn();
        if (reducedMotion()) return this.setAngles(tilt, to);
        this._turn = { tilt, from, to, start: performance.now() };
        this._stepTurn();
    }

    /** Whole map in view from the default angle */
    public resetView() {
        this._cancelTurn();
        this.zoom = 1;
        this.center = { x: 0.5, y: 0.5 };
        if (this.isometric)
            this._placeCamera(ISOMETRIC_TILT, ISOMETRIC_BEARING);
        else this._placeCamera(DEFAULT_TILT, 0);
        this._invalidate();
    }

    /**
     * Lock the view to an isometric one, or free it again. Locked, the tilt
     * is fixed and there is no perspective. The map can be moved, zoomed
     * and turned, and it turns about its middle.
     */
    public setIsometric(isometric: boolean) {
        if (isometric === this.isometric) return;
        this._cancelTurn();
        const bearing = isometric ? nearestCorner(this.bearing) : this.bearing;
        this.isometric = isometric;
        this._camera.fov = isometric ? ISOMETRIC_FIELD_OF_VIEW : FIELD_OF_VIEW;
        this._camera.updateProjectionMatrix();
        const tilt = (ISOMETRIC_TILT * Math.PI) / 180;
        this._controls.minPolarAngle = isometric ? tilt : 0;
        this._controls.maxPolarAngle = isometric
            ? tilt
            : (MAX_TILT * Math.PI) / 180;
        // The view goes to its corner where it is, not about the middle of the map
        this._pivot_bearing = bearing;
        this._placeCamera(isometric ? ISOMETRIC_TILT : DEFAULT_TILT, bearing);
        this._invalidate();
        this._notifyViewChange();
    }

    public setFixedResolution(_megapixels: number) {}

    public setOptions(options: {
        disable_zoom?: boolean;
        disable_pan?: boolean;
    }) {
        this.disable_zoom = !!options?.disable_zoom;
        this.disable_pan = !!options?.disable_pan;
        this._controls.enableZoom = !this.disable_zoom;
        this._controls.enablePan = !this.disable_pan;
        this._controls.enableRotate = this._canRotate();
    }

    public setDebug(enabled: boolean) {
        this.debug = enabled;
    }

    public setDebugHighlight(ref: string) {
        this.debug_info.highlight_id = ref;
    }

    public focusOn(ref: string) {
        const bounds = this.map?.element_bounds.get(ref);
        if (!bounds) return;
        this.setCenter({
            x: bounds.x + bounds.w / 2,
            y: bounds.y + bounds.h / 2,
        });
        this._notifyViewChange();
    }

    /** Outline drawn elements as selected, and clear the hovered one. */
    public setHighlight(selected: readonly MapShape[]) {
        this._setOutline(this._selection, this._selection_fill, selected);
        this.setHover(null);
    }

    /** Outline one drawn element as hovered, or none. */
    public setHover(hover: MapShape | null) {
        this._setOutline(this._hover, this._hover_fill, hover ? [hover] : []);
        this._invalidate();
    }

    public setOverlays(overlays: Map3DOverlay[]) {
        const old_wrappers = new Map<Node, HTMLDivElement>();
        for (const { overlay, element } of this._overlay_instances) {
            if (typeof overlay.contents === 'string') element.remove();
            else old_wrappers.set(overlay.contents, element);
        }
        this._overlay_instances = [];

        const wrappers: HTMLDivElement[] = [];
        for (const overlay of overlays) {
            const reused =
                typeof overlay.contents === 'string'
                    ? undefined
                    : old_wrappers.get(overlay.contents);
            if (reused) old_wrappers.delete(overlay.contents as Node);
            const element = reused || document.createElement('div');
            element.style.cssText =
                'position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;';
            if (overlay.z_index != null) {
                element.style.zIndex = `${overlay.z_index}`;
            }
            element.classList.toggle('map-overlay-hover', !!overlay.hover);
            if (typeof overlay.contents === 'string') {
                element.innerHTML = overlay.contents;
            } else if (overlay.contents.parentNode !== element) {
                element.appendChild(overlay.contents);
            }
            wrappers.push(element);
            this._overlay_instances.push({ overlay, element });
        }
        for (const element of old_wrappers.values()) element.remove();

        let expected = this.overlays.firstChild;
        for (const element of wrappers) {
            if (element === expected) {
                expected = element.nextSibling;
            } else {
                this.overlays.insertBefore(element, expected);
            }
        }
        this._updateOverlayPositions();
    }

    public setActions(actions: Map3DAction[]) {
        for (const [event_name, handler] of this._action_handlers) {
            this.container.removeEventListener(event_name, handler);
        }
        this._action_handlers.clear();
        this._action_last_triggered.clear();
        this._actions = actions;
        const event_names = new Set(actions.flatMap((_) => _.events));
        for (const event_name of event_names) {
            const handler = (e: Event) =>
                this._handleActionEvent(
                    event_name,
                    e as PointerEvent | TouchEvent,
                );
            this._action_handlers.set(event_name, handler);
            this.container.addEventListener(event_name, handler);
        }
    }

    /** Apply CSS to the map's SVG elements. Mapping of CSS selector to declarations. */
    public setStyles(styles: Record<string, string>) {
        let style_content = '';
        for (const [selector, css_text] of Object.entries(styles)) {
            if (css_text) {
                style_content += `svg ${cleanCssSelector(selector)} { ${css_text} }\n`;
            }
        }
        if (style_content !== this.styles_string) {
            this.styles_string = style_content;
            this._renderMapImage();
        }
    }

    public destroy() {
        this._destroyed = true;
        this._map_path = '';
        this._image_generation++;
        this._resize_observer?.disconnect();
        this._resize_observer = null;
        for (const [target, name, handler] of this._listeners) {
            target.removeEventListener(name, handler);
        }
        this._listeners = [];
        for (const [event_name, handler] of this._action_handlers) {
            this.container.removeEventListener(event_name, handler);
        }
        this._action_handlers.clear();
        this._actions = [];
        for (const id of [
            this._image_frame_id,
            this._draw_frame_id,
            this._notify_frame_id,
            this._turn_frame_id,
        ]) {
            if (id !== null) cancelAnimationFrame(id);
        }
        for (const instance of this._overlay_instances) {
            instance.element.remove();
        }
        this._overlay_instances = [];
        this._controls.dispose();
        for (const object of [
            this._floor,
            this._solid,
            this._glass,
            this._glass_depth,
            this._spaces,
            this._labels,
            this._selection,
            this._selection_fill,
            this._hover,
            this._hover_fill,
        ]) {
            object.geometry.dispose();
            object.material.dispose();
        }
        this._texture?.dispose();
        this._label_texture?.dispose();
        this._space_texture?.dispose();
        this._renderer.dispose();
        this._renderer.forceContextLoss();
        this.map_image = null;
        this.container.innerHTML = '';
    }

    private _stepTurn() {
        const turn = this._turn;
        if (!turn || this._destroyed) return;
        const progress = Math.min(
            1,
            (performance.now() - turn.start) / TURN_DURATION,
        );
        const eased = 1 - Math.pow(1 - progress, 3);
        this._placeCamera(turn.tilt, turn.from + (turn.to - turn.from) * eased);
        this._invalidate();
        this._notifyViewChange();
        if (progress >= 1) {
            this._turn = null;
            return;
        }
        this._turn_frame_id = requestAnimationFrame(() => {
            this._turn_frame_id = null;
            this._stepTurn();
        });
    }

    private _cancelTurn() {
        if (this._turn_frame_id !== null) {
            cancelAnimationFrame(this._turn_frame_id);
        }
        this._turn_frame_id = null;
        this._turn = null;
    }

    private _canRotate(): boolean {
        return !(this.disable_zoom && this.disable_pan);
    }

    private _listen(target: EventTarget, name: string, handler: EventListener) {
        target.addEventListener(name, handler);
        this._listeners.push([target, name, handler]);
    }

    private _outline(colour: number) {
        const lines = new LineSegments(
            new BufferGeometry(),
            new LineBasicMaterial({
                color: colour,
                depthTest: false,
                transparent: true,
            }),
        );
        lines.renderOrder = 10;
        lines.frustumCulled = false;
        return lines;
    }

    /** A see-through colour drawn over elements to mark them */
    private _tint(colour: number, opacity: number) {
        const mesh = new Mesh(
            new BufferGeometry(),
            new MeshBasicMaterial({
                color: colour,
                opacity,
                transparent: true,
                depthTest: false,
                depthWrite: false,
                side: DoubleSide,
            }),
        );
        mesh.renderOrder = 9;
        mesh.frustumCulled = false;
        mesh.visible = false;
        return mesh;
    }

    private _setGeometry(mesh: Mesh<BufferGeometry>, data: MeshData) {
        const geometry = new BufferGeometry();
        geometry.setAttribute(
            'position',
            new BufferAttribute(data.positions, 3),
        );
        geometry.setAttribute('uv', new BufferAttribute(data.uvs, 2));
        geometry.setAttribute('color', new BufferAttribute(data.colors, 3));
        geometry.setIndex(new BufferAttribute(data.indices, 1));
        geometry.computeBoundingSphere();
        mesh.geometry.dispose();
        mesh.geometry = geometry;
        mesh.visible = data.indices.length > 0;
    }

    /** Outline drawn elements at the height of their tops, and tint the areas they fill. */
    private _setOutline(
        lines: LineSegments<BufferGeometry>,
        fill: Mesh<BufferGeometry>,
        shapes: readonly MapShape[],
    ) {
        const positions: number[] = [];
        const fill_positions: number[] = [];
        const fill_indices: number[] = [];
        const view_box = this.parsed?.view_box;
        if (view_box) {
            const x = (point: Point2) => (point[0] - view_box.x) / this._unit;
            const z = (point: Point2) => (point[1] - view_box.y) / this._unit;
            for (const shape of shapes) {
                const y = (this._top_by_shape.get(shape.index) || 0) + 0.03;
                for (const sub of shape.subpaths) {
                    const count = sub.points.length;
                    const segments = sub.closed ? count : count - 1;
                    for (let i = 0; i < segments; i++) {
                        const a = sub.points[i];
                        const b = sub.points[(i + 1) % count];
                        positions.push(x(a), y, z(a), x(b), y, z(b));
                    }
                }
                if (!shape.has_fill) continue;
                for (const polygon of shape.polygons) {
                    const first = fill_positions.length / 3;
                    for (const ring of [polygon.outer, ...polygon.holes]) {
                        for (const point of ring) {
                            fill_positions.push(x(point), y, z(point));
                        }
                    }
                    try {
                        const faces = ShapeUtils.triangulateShape(
                            polygon.outer.map((p) => new Vector2(p[0], p[1])),
                            polygon.holes.map((hole) =>
                                hole.map((p) => new Vector2(p[0], p[1])),
                            ),
                        );
                        for (const [a, b, c] of faces) {
                            fill_indices.push(first + a, first + b, first + c);
                        }
                    } catch {
                        // The outline still marks an area that cannot be triangulated
                    }
                }
            }
        }
        const geometry = new BufferGeometry();
        geometry.setAttribute(
            'position',
            new BufferAttribute(new Float32Array(positions), 3),
        );
        lines.geometry.dispose();
        lines.geometry = geometry;
        lines.visible = positions.length > 0;

        const fill_geometry = new BufferGeometry();
        fill_geometry.setAttribute(
            'position',
            new BufferAttribute(new Float32Array(fill_positions), 3),
        );
        fill_geometry.setIndex(fill_indices);
        fill.geometry.dispose();
        fill.geometry = fill_geometry;
        fill.visible = fill_indices.length > 0;
    }

    /** Distance from the target at which the whole map fits the view */
    private _fitDistance(): number {
        const half_fov = (this._camera.fov * Math.PI) / 360;
        const aspect = this._camera.aspect || 1;
        let across = this._width;
        let up = this._depth;
        let margin = TILT_MARGIN;
        if (this.isometric) {
            // Seen from a corner, the diagonals of the map lie across and up the view
            across = (this._width + this._depth) / Math.SQRT2;
            up = across * Math.cos((ISOMETRIC_TILT * Math.PI) / 180);
            margin = 1;
        }
        const by_height = up / 2 / Math.tan(half_fov);
        const by_width = across / 2 / (Math.tan(half_fov) * aspect);
        return (
            (Math.max(by_height, by_width) * margin) / (1 - VIEW_PADDING * 2)
        );
    }

    /** Keep the near and far planes close around the map, for depth precision at any distance */
    private _fitClipPlanes() {
        const distance = this._camera.position.distanceTo(
            this._controls.target,
        );
        const reach = Math.hypot(this._width, this._depth) + MAX_HEIGHT;
        const far = distance + reach;
        const near = Math.max(far / 20000, distance - reach);
        if (near === this._camera.near && far === this._camera.far) return;
        this._camera.near = near;
        this._camera.far = far;
        this._camera.updateProjectionMatrix();
    }

    private _applyLimits() {
        const fit = this._fitDistance();
        this._controls.minDistance = fit / MAX_ZOOM;
        this._controls.maxDistance = fit / MIN_ZOOM;
    }

    private _placeCamera(tilt: number, bearing: number) {
        const polar =
            (Math.max(0.01, Math.min(MAX_TILT, tilt)) * Math.PI) / 180;
        const azimuth = (-bearing * Math.PI) / 180;
        const distance = this._fitDistance() / this.zoom;
        this._pivot(bearing);
        const target = this._controls.target.set(
            this.center.x * this._width,
            0,
            this.center.y * this._depth,
        );
        this._camera.position.set(
            target.x + distance * Math.sin(polar) * Math.sin(azimuth),
            distance * Math.cos(polar),
            target.z + distance * Math.sin(polar) * Math.cos(azimuth),
        );
        this._camera.lookAt(target);
        this._applyLimits();
    }

    /**
     * Move the centre of an isometric view for a turn to a bearing, so the
     * map turns about its middle and not about the centre of the view.
     */
    private _pivot(bearing: number) {
        let turned = bearing - this._pivot_bearing;
        turned -= Math.round(turned / 360) * 360;
        this._pivot_bearing = bearing;
        if (!this.isometric || Math.abs(turned) < 1e-6) return;
        const [x, z] = turnAbout(
            [this.center.x * this._width, this.center.y * this._depth],
            [this._width / 2, this._depth / 2],
            turned,
        );
        this.center = {
            x: Math.max(0, Math.min(1, x / this._width)),
            y: Math.max(0, Math.min(1, z / this._depth)),
        };
    }

    private _onControls() {
        const target = this._controls.target;
        if (this.isometric) {
            // The controls turned the camera about the centre of the view
            const offset = this._camera.position.clone().sub(target);
            this.center = {
                x: target.x / this._width,
                y: target.z / this._depth,
            };
            this._pivot(this.bearing);
            target.set(
                this.center.x * this._width,
                0,
                this.center.y * this._depth,
            );
            this._camera.position.copy(target).add(offset);
        } else this._pivot_bearing = this.bearing;
        // Keep the point the camera turns about on the floor and on the map
        const x = Math.max(0, Math.min(this._width, target.x));
        const z = Math.max(0, Math.min(this._depth, target.z));
        if (x !== target.x || z !== target.z || target.y !== 0) {
            this._camera.position.x += x - target.x;
            this._camera.position.z += z - target.z;
            this._camera.position.y = Math.max(
                MIN_CAMERA_HEIGHT,
                this._camera.position.y - target.y,
            );
            target.set(x, 0, z);
        }
        this.center = { x: x / this._width, y: z / this._depth };
        this.zoom =
            this._fitDistance() /
            (this._camera.position.distanceTo(target) || 1);
        this._invalidate();
        this._notifyViewChange();
    }

    private _onResize() {
        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        this._renderer.setSize(width, height, false);
        this._camera.aspect = width / height;
        this._camera.updateProjectionMatrix();
        // Keep the zoom level, which is relative to the size of the view
        const offset = this._camera.position.clone().sub(this._controls.target);
        if (offset.lengthSq() > 0) {
            offset.setLength(this._fitDistance() / this.zoom);
            this._camera.position.copy(this._controls.target).add(offset);
        }
        this._applyLimits();
        this._invalidate();
    }

    private _textureSize(): { width: number; height: number } {
        const aspect = this.map?.aspect_ratio || this._width / this._depth || 1;
        const limit = Math.min(
            isMobileDevice() ? MOBILE_TEXTURE_SIZE : DESKTOP_TEXTURE_SIZE,
            this._renderer.capabilities.maxTextureSize || MOBILE_TEXTURE_SIZE,
        );
        return aspect >= 1
            ? { width: limit, height: Math.max(1, Math.round(limit / aspect)) }
            : { width: Math.max(1, Math.round(limit * aspect)), height: limit };
    }

    private _renderMapImage() {
        if (this._image_frame_id !== null) {
            cancelAnimationFrame(this._image_frame_id);
        }
        this._image_frame_id = requestAnimationFrame(() => {
            this._image_frame_id = null;
            this._doRenderMapImage();
        });
    }

    private async _doRenderMapImage() {
        if (!this.map?.raw_data || !this.parsed) return;
        const generation = ++this._image_generation;
        const { width, height } = this._textureSize();
        const has_labels = !!this.parsed.svg.querySelector(
            `[${KIND_ATTR}="label"]`,
        );
        const has_spaces = !!this.parsed.svg.querySelector(
            `[${KIND_ATTR}="space"]`,
        );
        const svg_text = new XMLSerializer().serializeToString(this.parsed.svg);
        const [floor, labels, spaces] = await Promise.all([
            this._rasterise(svg_text, width, height, FLOOR_CSS),
            has_labels
                ? this._rasterise(svg_text, width, height, LABEL_CSS)
                : null,
            has_spaces
                ? this._rasterise(svg_text, width, height, SPACE_CSS)
                : null,
        ]);
        if (generation !== this._image_generation || this._destroyed) return;
        if (!floor) return console.error('Failed to load map image');

        this.map_image = floor;
        this._texture?.dispose();
        this._texture = this._textureOf(floor);
        for (const mesh of [this._floor, this._solid, this._glass]) {
            mesh.material.map = this._texture;
            mesh.material.needsUpdate = true;
        }
        this._floor.visible = true;

        this._space_texture?.dispose();
        this._space_texture = null;
        if (spaces) {
            this._space_texture = this._textureOf(spaces);
            this._space_texture.premultiplyAlpha = true;
        }
        this._spaces.material.map = this._space_texture;
        this._spaces.material.needsUpdate = true;
        this._spaces.visible = !!spaces;

        this._label_texture?.dispose();
        this._label_texture = null;
        if (labels) {
            this._label_texture = this._textureOf(labels);
            this._label_texture.premultiplyAlpha = true;
        }
        this._labels.material.map = this._label_texture;
        this._labels.material.needsUpdate = true;
        this._labels.visible = !!labels;
        this._invalidate();
    }

    private _textureOf(canvas: HTMLCanvasElement): CanvasTexture {
        const texture = new CanvasTexture(canvas);
        texture.colorSpace = SRGBColorSpace;
        texture.anisotropy = this._renderer.capabilities.getMaxAnisotropy();
        texture.minFilter = LinearMipmapLinearFilter;
        texture.magFilter = LinearFilter;
        return texture;
    }

    /**
     * Draw SVG text to a canvas of the given size with the applied styles and
     * extra CSS. Resolves `null` when the browser cannot draw it.
     */
    private _rasterise(
        svg_text: string,
        width: number,
        height: number,
        css: string,
    ): Promise<HTMLCanvasElement | null> {
        const doc = new DOMParser().parseFromString(svg_text, 'image/svg+xml');
        const svg_element = doc.querySelector('svg');
        if (!svg_element) return Promise.resolve(null);
        if (!svg_element.getAttribute('viewBox')) {
            const attr_width = parseFloat(
                svg_element.getAttribute('width') || '',
            );
            const attr_height = parseFloat(
                svg_element.getAttribute('height') || '',
            );
            if (attr_width > 0 && attr_height > 0) {
                svg_element.setAttribute(
                    'viewBox',
                    `0 0 ${attr_width} ${attr_height}`,
                );
            }
        }
        if (svg_element.getAttribute('viewBox')) {
            svg_element.setAttribute('width', `${width}`);
            svg_element.setAttribute('height', `${height}`);
            svg_element.setAttribute('preserveAspectRatio', 'none');
        }
        const style = doc.createElementNS(SVG_NS, 'style');
        style.textContent = `${this.styles_string}\n${css}`;
        svg_element.appendChild(style);
        const url = URL.createObjectURL(
            new Blob([new XMLSerializer().serializeToString(svg_element)], {
                type: 'image/svg+xml',
            }),
        );
        return new Promise((resolve) => {
            const image = new Image();
            image.onload = () => {
                URL.revokeObjectURL(url);
                const canvas = document.createElement('canvas');
                canvas.width = width;
                canvas.height = height;
                const ctx = canvas.getContext('2d');
                if (!ctx) return resolve(null);
                ctx.drawImage(image, 0, 0, width, height);
                resolve(canvas);
            };
            image.onerror = () => {
                URL.revokeObjectURL(url);
                resolve(null);
            };
            image.src = url;
        });
    }

    private _invalidate() {
        if (this._draw_frame_id !== null || this._destroyed) return;
        this._draw_frame_id = requestAnimationFrame(() => {
            this._draw_frame_id = null;
            this._fitClipPlanes();
            this._renderer.render(this._scene, this._camera);
            this._updateOverlayPositions();
        });
    }

    /**
     * Screen position in CSS pixels of a point on the map at a height in metres.
     * @param view Size of the container in CSS pixels
     */
    private _project(
        x: number,
        y: number,
        height: number,
        view: { width: number; height: number },
        out: Vector3,
    ) {
        out.set(x * this._width, height, y * this._depth).project(this._camera);
        const { width, height: view_height } = view;
        const visible = out.z > -1 && out.z < 1;
        out.set(
            ((out.x + 1) / 2) * width,
            ((1 - out.y) / 2) * view_height,
            visible ? 1 : 0,
        );
        return out;
    }

    private _updateOverlayPositions() {
        if (!this.map?.element_bounds) return;
        this._camera.updateMatrixWorld();
        const point = new Vector3();
        // Read before the loop writes styles, so the layout is read once
        const view = {
            width: this.container.clientWidth || 1,
            height: this.container.clientHeight || 1,
        };
        const setDisplay = (instance: OverlayInstance, value: string) => {
            if (instance.last_display === value) return;
            instance.last_display = value;
            instance.element.style.display = value;
        };
        const setTransform = (instance: OverlayInstance, value: string) => {
            if (instance.last_transform === value) return;
            instance.last_transform = value;
            instance.element.style.transform = value;
        };
        const setSize = (instance: OverlayInstance, w: string, h: string) => {
            const size = `${w} ${h}`;
            if (instance.last_size === size) return;
            instance.last_size = size;
            instance.element.style.width = w;
            instance.element.style.height = h;
        };

        for (const instance of this._overlay_instances) {
            const { overlay } = instance;
            if (overlay.min_zoom && this.zoom < overlay.min_zoom) {
                setDisplay(instance, 'none');
                continue;
            }
            let bounds: Map3DBounds | undefined;
            let top = 0;
            if (typeof overlay.ref === 'string') {
                bounds = this.map.element_bounds.get(overlay.ref);
                top = this._top_by_id.get(overlay.ref) || 0;
            } else {
                bounds = { w: 0, h: 0, ...overlay.ref };
            }
            if (!bounds) {
                setDisplay(instance, 'none');
                continue;
            }

            if (overlay.type === 'box' && bounds.w > 0 && bounds.h > 0) {
                // The box covers the element on screen, from floor to top
                let min_x = Infinity;
                let min_y = Infinity;
                let max_x = -Infinity;
                let max_y = -Infinity;
                let visible = true;
                for (const height of top ? [0, top] : [0]) {
                    for (const [dx, dy] of [
                        [0, 0],
                        [1, 0],
                        [1, 1],
                        [0, 1],
                    ]) {
                        this._project(
                            bounds.x + bounds.w * dx,
                            bounds.y + bounds.h * dy,
                            height,
                            view,
                            point,
                        );
                        if (!point.z) visible = false;
                        min_x = Math.min(min_x, point.x);
                        min_y = Math.min(min_y, point.y);
                        max_x = Math.max(max_x, point.x);
                        max_y = Math.max(max_y, point.y);
                    }
                }
                if (!visible) {
                    setDisplay(instance, 'none');
                    continue;
                }
                setDisplay(instance, '');
                setTransform(instance, `translate(${min_x}px, ${min_y}px)`);
                setSize(instance, `${max_x - min_x}px`, `${max_y - min_y}px`);
            } else {
                this._project(
                    bounds.x + bounds.w / 2,
                    bounds.y + bounds.h / 2,
                    top,
                    view,
                    point,
                );
                if (!point.z) {
                    setDisplay(instance, 'none');
                    continue;
                }
                setDisplay(instance, '');
                setSize(instance, '', '');
                setTransform(
                    instance,
                    overlay.scale_with_zoom
                        ? `translate(${point.x}px, ${point.y}px) translate(-50%, -50%) scale(${this.zoom})`
                        : `translate(${point.x}px, ${point.y}px) translate(-50%, -50%)`,
                );
            }
        }
    }

    /** What the pointer is over: where on the map, and which raised element. */
    private _hit(e: { clientX: number; clientY: number }): {
        point: Map3DPoint;
        footprint: Footprint | null;
    } | null {
        const rect = this.container.getBoundingClientRect();
        if (!rect.width || !rect.height) return null;
        const pointer = new Vector2(
            ((e.clientX - rect.left) / rect.width) * 2 - 1,
            -((e.clientY - rect.top) / rect.height) * 2 + 1,
        );
        this._camera.updateMatrixWorld();
        this._raycaster.setFromCamera(pointer, this._camera);
        const [hit] = this._raycaster.intersectObjects(
            [this._floor, this._solid, this._glass],
            false,
        );
        if (!hit) return null;
        let footprint: Footprint | null = null;
        if (
            hit.object !== this._floor &&
            this._meshes &&
            hit.faceIndex != null
        ) {
            const mesh =
                hit.object === this._glass
                    ? this._meshes.glass
                    : this._meshes.solid;
            footprint =
                this.footprints[footprintAtIndex(mesh, hit.faceIndex * 3)] ||
                null;
        }
        return {
            point: {
                x: hit.point.x / this._width,
                y: hit.point.z / this._depth,
            },
            footprint,
        };
    }

    /** The drawn element at a position: the raised one hit, or the top one painted there. */
    private _shapeAt(hit: {
        point: Map3DPoint;
        footprint: Footprint | null;
    }): MapShape | null {
        if (!this.parsed) return null;
        const { shapes, view_box } = this.parsed;
        if (hit.footprint) return shapes[hit.footprint.shape] || null;
        const x = view_box.x + hit.point.x * view_box.width;
        const y = view_box.y + hit.point.y * view_box.height;
        const tolerance = (this._unit * 0.15) / Math.max(1, this.zoom);
        for (let i = shapes.length - 1; i >= 0; i--) {
            if (
                shapeContains(shapes[i], x, y, tolerance) &&
                !isHidden(shapes[i].element)
            ) {
                return shapes[i];
            }
        }
        return null;
    }

    private _onClick(e: Event) {
        const event = e as MouseEvent;
        if (!this.onPick || this._dragged) return;
        const hit = this._hit(event);
        if (!hit) return;
        this.onPick({ point: hit.point, shape: this._shapeAt(hit), event });
    }

    private _onPointerMove(e: PointerEvent) {
        const down = this._pointer_down;
        if (
            e.buttons &&
            down &&
            Math.hypot(e.clientX - down.x, e.clientY - down.y) > 5
        ) {
            this._dragged = true;
        }
        if (!this.onHover || e.buttons) return;
        const hit = this._hit(e);
        this._setHover(hit ? this._shapeAt(hit) : null);
    }

    private _setHover(shape: MapShape | null) {
        if (shape === this._hover_shape) return;
        this._hover_shape = shape;
        this.onHover?.(shape);
    }

    private _handleActionEvent(
        event_name: string,
        e: PointerEvent | TouchEvent,
    ) {
        if (!this.map?.element_bounds) return;
        // A press that moved the map is a drag, so its release is not an action
        if (RELEASE_EVENTS.has(event_name) && this._dragged) return;
        // A touch event has its position on the touch that changed
        const position = 'changedTouches' in e ? e.changedTouches[0] : e;
        if (!position) return;
        const hit = this._hit(position);
        if (!hit) return;
        const norm = hit.point;

        let best: Map3DAction | null = null;
        let best_area = Number.POSITIVE_INFINITY;
        for (const action of this._actions) {
            if (!action.events.includes(event_name)) continue;
            if (action.ref === '*') {
                if (!best) best = action;
                continue;
            }
            const bounds = this.map.element_bounds.get(action.ref);
            if (!bounds) continue;
            if (
                norm.x < bounds.x ||
                norm.x > bounds.x + bounds.w ||
                norm.y < bounds.y ||
                norm.y > bounds.y + bounds.h
            ) {
                continue;
            }
            const area = bounds.w * bounds.h;
            if (
                !best ||
                best.ref === '*' ||
                (action.priority || 0) > (best.priority || 0) ||
                ((action.priority || 0) === (best.priority || 0) &&
                    area < best_area)
            ) {
                best = action;
                best_area = area;
            }
        }
        if (!best) return;

        const now = Date.now();
        const debounce_key = `${best.ref}:${event_name}`;
        if (now - (this._action_last_triggered.get(debounce_key) || 0) < 300) {
            return;
        }
        this._action_last_triggered.set(debounce_key, now);
        best.callback(norm);
    }

    private _notifyViewChange() {
        if (!this.onViewChange || this._notify_frame_id !== null) return;
        this._notify_frame_id = requestAnimationFrame(() => {
            this._notify_frame_id = null;
            this.onViewChange?.({
                zoom: this.zoom,
                center: { ...this.center },
            });
        });
    }
}
