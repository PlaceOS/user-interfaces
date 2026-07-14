import {
    isMobileSafari,
    MapElementBounds,
    Point,
    randomString,
} from '@placeos/common';
import { apiKey, authority, token } from '@placeos/ts-client';

import { setAuthCookie } from './authenticated-image.pipe';

export interface MapDetails {
    raw_data: string;
    element_bounds: Map<string, MapElementBounds>;
    /** Aspect ratio of the SVG (width / height) */
    aspect_ratio: number;
}

export interface MapOverlay {
    /** ID of the reference element or point on the map to render the overlay */
    ref: string | Point | MapElementBounds;
    /** How the overlay should be positioned and sized. `point` is 0x0 on the center of the ref and `box` is mapped to the bounds of the ref */
    type: 'point' | 'box';
    contents: HTMLElement | string;
    /** Whether to scale the overlay with zoom (default: false for point, true for box) */
    scale_with_zoom?: boolean;
    /** Whether contents should only be visible while the overlay is hovered */
    hover?: boolean;
    /** Minimum zoom level at which to show the overlay */
    min_zoom?: number;
    /** Z index to apply to the overlay element */
    z_index?: string | number;
}

export interface MapAction {
    /** ID of the reference element, or `*` to match anywhere on the map */
    ref: string;
    /** List of event name to listen for */
    events: string[];
    /** Priority of the action when multiple actions match an event */
    priority?: number;
    /** Callback when the event occurs */
    callback: (p: Point) => void;
}

export interface MapViewChangeEvent {
    zoom: number;
    center: Point;
}

interface OverlayInstance {
    overlay: MapOverlay;
    element: HTMLDivElement;
    /** Cached style values to avoid redundant style writes while panning */
    last_display?: string;
    last_transform?: string;
    last_size?: string;
}

const MAX_ZOOM = 10;
const MIN_ZOOM = 1;
/** Fraction of the view reserved as padding around the map at 100% zoom */
const VIEW_PADDING = 0.05;
/** Total texture pixel budget on desktop, independent of aspect ratio */
const DESKTOP_TEXTURE_MEGAPIXELS = 16;
/** Total texture pixel budget on mobile, independent of aspect ratio */
const MOBILE_TEXTURE_MEGAPIXELS = 4;
/** Multiple of the container's pixel count to render fixed (zoom-disabled) maps at */
const FIXED_TEXTURE_CONTAINER_MULTIPLIER = 2;
/**
 * Upper bound on either texture dimension. Browsers cap canvas size (the
 * limit is lowest on mobile Safari), so extreme aspect ratios are clamped
 * here rather than allowed to silently fail to rasterise.
 */
const MAX_TEXTURE_DIMENSION = 8192;

/**
 * Whether the current device should use the reduced mobile texture budget.
 * A coarse pointer on a small viewport indicates a phone-class device with
 * limited GPU memory, where a 16MP texture is wasteful and can fail to load.
 */
function isMobileDevice(): boolean {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    const coarse_pointer = window.matchMedia('(pointer: coarse)').matches;
    const small_viewport = window.matchMedia('(max-width: 1024px)').matches;
    return coarse_pointer && small_viewport;
}

interface ElementBoundsResult {
    bounds: Map<string, MapElementBounds>;
    aspect_ratio: number;
}

/**
 * Escape CSS special characters in selectors so that map element IDs
 * containing characters like `.` from CAD exports still match. Leaves `:`
 * untouched so pseudo-selectors keep working, and preserves the leading
 * `#`/`.` of each selector part.
 */
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

/** Get the coordinate space of an SVG element from its viewBox or width/height attributes */
function getSvgDimensions(svg_element: SVGSVGElement): {
    x: number;
    y: number;
    width: number;
    height: number;
} {
    let x = 0;
    let y = 0;
    let width = 0;
    let height = 0;
    const view_box = svg_element.getAttribute('viewBox');

    if (view_box) {
        const parts = view_box.split(/[\s,]+/).map(parseFloat);
        if (parts.length >= 4) {
            x = parts[0] || 0;
            y = parts[1] || 0;
            width = parts[2];
            height = parts[3];
        }
    }

    // Fall back to width/height attributes or bounding box
    if (!width || !height) {
        const width_attr = svg_element.getAttribute('width');
        const height_attr = svg_element.getAttribute('height');
        width = width_attr ? parseFloat(width_attr) : 0;
        height = height_attr ? parseFloat(height_attr) : 0;
    }

    if (!width || !height) {
        try {
            const bbox = svg_element.getBBox();
            x = bbox.x;
            y = bbox.y;
            width = bbox.width;
            height = bbox.height;
        } catch {
            // getBBox throws for SVGs that are not rendered
        }
    }

    return { x, y, width: width || 1, height: height || 1 };
}

/**
 * Axis-aligned bounds of an element in the root SVG's user (viewBox)
 * coordinate space. getBBox() alone is in the element's local space and
 * ignores its own and ancestor transforms, which the canvas render applies,
 * so the bbox corners are mapped through the element's screen CTM and back
 * through the inverse of the root SVG's screen CTM.
 */
function getElementBoundsInSvgSpace(
    element: SVGGraphicsElement,
    svg_inverse_ctm: DOMMatrix | null,
): { x: number; y: number; width: number; height: number } {
    const bbox = element.getBBox();
    const ctm = svg_inverse_ctm && element.getScreenCTM?.();
    if (!ctm) return bbox;
    const matrix = svg_inverse_ctm.multiply(ctm);
    const corners = [
        { x: bbox.x, y: bbox.y },
        { x: bbox.x + bbox.width, y: bbox.y },
        { x: bbox.x, y: bbox.y + bbox.height },
        { x: bbox.x + bbox.width, y: bbox.y + bbox.height },
    ].map((p) => ({
        x: matrix.a * p.x + matrix.c * p.y + matrix.e,
        y: matrix.b * p.x + matrix.d * p.y + matrix.f,
    }));
    const min_x = Math.min(...corners.map((p) => p.x));
    const min_y = Math.min(...corners.map((p) => p.y));
    return {
        x: min_x,
        y: min_y,
        width: Math.max(...corners.map((p) => p.x)) - min_x,
        height: Math.max(...corners.map((p) => p.y)) - min_y,
    };
}

/** Take SVG image as a string render in place and generate normalised bounds for each element with an ID */
function generateElementBounds(data: string): ElementBoundsResult {
    const bounds_map = new Map<string, MapElementBounds>();

    // Create a temporary container to render the SVG
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.visibility = 'hidden';
    container.style.pointerEvents = 'none';
    container.style.left = '-9999px';
    container.style.top = '-9999px';
    container.innerHTML = data;
    document.body.appendChild(container);

    const svg_element = container.querySelector('svg');
    if (!svg_element) {
        document.body.removeChild(container);
        return { bounds: bounds_map, aspect_ratio: 1 };
    }

    const {
        x: svg_x,
        y: svg_y,
        width: svg_width,
        height: svg_height,
    } = getSvgDimensions(svg_element);
    const aspect_ratio = svg_width / svg_height;

    // Inverse of the root SVG's screen transform, used to map element
    // bounds (own + ancestor transforms included) into viewBox space
    const svg_ctm = svg_element.getScreenCTM?.();
    const svg_inverse_ctm = svg_ctm ? svg_ctm.inverse() : null;

    // Find all elements with an ID and calculate their bounds
    const elements_with_id = svg_element.querySelectorAll('[id]');
    elements_with_id.forEach((element) => {
        const id = element.getAttribute('id');
        if (!id) return;

        // SVG elements have getBBox() for accurate geometry bounds
        if (typeof (element as SVGGraphicsElement).getBBox === 'function') {
            try {
                const bbox = getElementBoundsInSvgSpace(
                    element as SVGGraphicsElement,
                    svg_inverse_ctm,
                );
                // Normalize bounds relative to the SVG coordinate space (0 to
                // 1 range), offset by the viewBox origin which may be non-zero
                bounds_map.set(id, {
                    x: (bbox.x - svg_x) / svg_width,
                    y: (bbox.y - svg_y) / svg_height,
                    w: bbox.width / svg_width,
                    h: bbox.height / svg_height,
                });
            } catch {
                // getBBox can throw for elements not yet rendered or with no geometry
            }
        }
    });

    // Clean up the temporary container
    document.body.removeChild(container);

    return { bounds: bounds_map, aspect_ratio };
}

class MapStore {
    store: Map<string, Promise<MapDetails>> = new Map();

    public get(path: string): Promise<MapDetails> {
        if (!this.store.has(path)) {
            const details = this._load(path);
            // Allow failed loads to be retried
            details.catch(() => this.store.delete(path));
            this.store.set(path, details);
        }
        return this.store.get(path);
    }

    private async _load(path: string) {
        // Wait until the PlaceOS client is initialised so auth tokens are available
        while (!authority()) {
            await new Promise((resolve) => setTimeout(resolve, 300));
        }
        const options: RequestInit = {};
        const tkn = token();
        // Only authenticate local requests, credentials on cross-origin
        // requests break CORS for externally hosted maps
        const is_same_origin =
            new URL(path, location.origin).origin === location.origin;
        if (tkn && is_same_origin) {
            // Mobile Safari can mangle custom headers, fall back to cookie auth there
            if (!isMobileSafari()) {
                options.headers =
                    tkn === 'x-api-key'
                        ? { 'x-api-key': apiKey() }
                        : { Authorization: `Bearer ${tkn}` };
            } else {
                setAuthCookie('/');
            }
        }
        const response = await fetch(path, options);
        if (!response.ok) throw new Error('Failed to load map');
        const data = await response.text();
        const { bounds, aspect_ratio } = generateElementBounds(data);
        return { raw_data: data, element_bounds: bounds, aspect_ratio };
    }
}

const STORE = new MapStore();

/** Load (or retrieve from cache) the details for the map at the given URL */
export function getMapDetails(url: string): Promise<MapDetails> {
    return STORE.get(url);
}

export class MapViewer {
    public readonly id: string;
    public readonly container: HTMLElement;
    public readonly canvas: HTMLCanvasElement;
    public readonly overlays: HTMLElement;
    public map: MapDetails;
    /** Canvas matching the SVG's aspect ratio with the styled SVG rendered on it */
    public map_image: HTMLCanvasElement | null = null;
    /** CSS to apply to the SVG before it is rendered */
    public styles_string = '';
    /** Target point for the view on the map image, normalised 0-1 on each axis. { 0.5, 0.5 } is the center of the map image */
    public center: Point = { x: 0.5, y: 0.5 };
    /** Zoom level of the map. 1 represents the whole map image fitting within the view */
    public zoom = 1;
    /**
     * Megapixel budget for fixed (zoom-disabled) maps. When greater than 0
     * this overrides the default of twice the container's pixel count, for
     * maps rendered at a small fixed size where the default is wasteful.
     */
    public fixed_resolution_megapixels = 0;
    /** Whether user zoom interactions are disabled */
    public disable_zoom = false;
    /** Whether user pan interactions are disabled */
    public disable_pan = false;
    /** Callback invoked when view changes from user interaction */
    public onViewChange: ((event: MapViewChangeEvent) => void) | null = null;
    /** Whether to render debugging info (element bounds, overlay outlines, draw stats) */
    public debug = false;
    /** Live debugging details, populated while debug mode is active */
    public debug_info = {
        /** Pointer position in normalised map coordinates */
        pointer: null as Point | null,
        /** ID of the smallest map element under the pointer */
        hover_id: '',
        /** ID of the map element explicitly highlighted from debug controls */
        highlight_id: '',
        /** Duration of the last map draw in milliseconds */
        last_draw_ms: 0,
        /** Number of map draws over the last second */
        draws_last_second: 0,
    };

    /** URL of the most recently requested map, used to discard stale loads */
    private _map_path = '';
    /** Generation counter for map image renders, used to discard stale renders */
    private _image_generation = 0;
    /** Dimensions of the most recently rendered map texture, in pixels */
    private _texture_width = 0;
    private _texture_height = 0;
    private _image_frame_id: number | null = null;
    private _draw_frame_id: number | null = null;
    private _notify_frame_id: number | null = null;
    private _debug_draw_count = 0;
    private _debug_count_start = 0;
    private _ctx: CanvasRenderingContext2D;
    private _events = new Map<string, (e) => void>();
    private _resize_observer: ResizeObserver | null = null;
    /** Positions of currently active pointers, for pan and pinch tracking */
    private _pointers = new Map<number, Point>();
    private _is_panning = false;
    private _pinch_distance: number | null = null;
    private _pan_start_time: number | null = null;
    private _pan_exceeded_threshold = false;
    private _overlay_instances: OverlayInstance[] = [];
    private _actions: MapAction[] = [];
    private _action_event_handlers = new Map<string, (e: Event) => void>();
    private _action_pointerdown_pos: Point | null = null;
    private _action_last_triggered = new Map<string, number>();

    constructor(el: Element) {
        this.container = el as HTMLElement;
        this.id = `m_view-${randomString(8, '0123456789ABCDEF')}`;
        this.container.innerHTML = '';
        this.container.style.overflow = 'hidden';
        this.container.style.touchAction = 'none';
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText =
            'position: absolute; inset: 0; pointer-events: none;';
        this._ctx = this.canvas.getContext('2d');
        this.container.appendChild(this.canvas);
        this.overlays = document.createElement('div');
        this.overlays.id = `${this.id}-overlays`;
        this.overlays.style.cssText =
            'position: absolute; inset: 0; pointer-events: none;';
        this.container.appendChild(this.overlays);

        this._resize_observer = new ResizeObserver(() => this._onResize());
        this._resize_observer.observe(this.container);

        // Interaction events are handled on the container so they apply over
        // both the map canvas and any overlay content rendered above it
        this._events.set('wheel', (e: WheelEvent) => this._onWheel(e));
        this.container.addEventListener('wheel', this._events.get('wheel'), {
            passive: false,
        });

        this._events.set('pointerdown', (e: PointerEvent) =>
            this._onPointerDown(e),
        );
        this._events.set('pointermove', (e: PointerEvent) =>
            this._onPointerMove(e),
        );
        this._events.set('pointerup', (e: PointerEvent) =>
            this._onPointerUp(e),
        );
        this.container.addEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        window.addEventListener('pointermove', this._events.get('pointermove'));
        window.addEventListener('pointerup', this._events.get('pointerup'));
        window.addEventListener('pointercancel', this._events.get('pointerup'));
    }

    public async setMap(path: string) {
        this._map_path = path;
        const map = await STORE.get(path);
        // Ignore out of order resolutions when the map has changed again
        if (this._map_path !== path) return;
        this.map = map;
        this._renderMapImage();
    }

    public setCenter(point: Point) {
        const center = this._clampCenter(point);
        if (center.x === this.center.x && center.y === this.center.y) return;
        this.center = center;
        this._renderMap();
    }

    public setZoom(new_zoom: number) {
        new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
        if (new_zoom === this.zoom) return;
        this.zoom = new_zoom;
        this._renderMap();
    }

    /**
     * Override the texture budget for fixed (zoom-disabled) maps, in
     * megapixels. Pass 0 to restore the default of twice the container pixels.
     */
    public setFixedResolution(megapixels: number) {
        const value = megapixels > 0 ? megapixels : 0;
        if (this.fixed_resolution_megapixels === value) return;
        this.fixed_resolution_megapixels = value;
        // Only affects fixed maps, so a re-render is needed only when zooming
        // is disabled
        if (this.disable_zoom) this._renderMapImage();
    }

    public setOptions(options: {
        disable_zoom?: boolean;
        disable_pan?: boolean;
    }) {
        const was_zoom_disabled = this.disable_zoom;
        this.disable_zoom = !!options?.disable_zoom;
        this.disable_pan = !!options?.disable_pan;
        // The texture budget differs between zoomable and fixed maps, so the
        // texture must be re-rendered when this toggles
        if (was_zoom_disabled !== this.disable_zoom) this._renderMapImage();
    }

    /** Number of overlays currently attached to the map */
    public get overlay_count(): number {
        return this._overlay_instances.length;
    }

    /** Human-readable description of the current texture sizing mode, for debug */
    public get texture_mode(): string {
        if (this.disable_zoom) {
            return this.fixed_resolution_megapixels
                ? `fixed ${this.fixed_resolution_megapixels}MP`
                : `fixed ${FIXED_TEXTURE_CONTAINER_MULTIPLIER}× container`;
        }
        return isMobileDevice()
            ? `mobile ${MOBILE_TEXTURE_MEGAPIXELS}MP`
            : `desktop ${DESKTOP_TEXTURE_MEGAPIXELS}MP`;
    }

    /** Toggle rendering of debugging info over the map */
    public setDebug(enabled: boolean) {
        if (this.debug === enabled) return;
        this.debug = enabled;
        if (enabled) {
            // Track the pointer to show its map position and hovered element
            const move = (e: PointerEvent) => {
                this.debug_info.pointer = this._eventToMap(e);
                this.debug_info.hover_id = this._elementAt(
                    this.debug_info.pointer,
                );
                this._renderMap();
            };
            const leave = () => {
                this.debug_info.pointer = null;
                this.debug_info.hover_id = '';
                this._renderMap();
            };
            const click = (e: MouseEvent) => {
                const point = this._eventToMap(e);
                console.log(
                    `[MAP][DEBUG] Click at { x: ${point.x.toFixed(4)}, y: ${point.y.toFixed(4)} } on "${this._elementAt(point) || 'no element'}"`,
                );
            };
            this._events.set('debug_move', move);
            this._events.set('debug_leave', leave);
            this._events.set('debug_click', click);
            this.container.addEventListener('pointermove', move);
            this.container.addEventListener('pointerleave', leave);
            this.container.addEventListener('click', click);
        } else {
            for (const name of ['debug_move', 'debug_leave', 'debug_click']) {
                const handler = this._events.get(name);
                if (!handler) continue;
                const event_name =
                    name === 'debug_move'
                        ? 'pointermove'
                        : name === 'debug_leave'
                          ? 'pointerleave'
                          : 'click';
                this.container.removeEventListener(event_name, handler);
                this._events.delete(name);
            }
            this.debug_info.pointer = null;
            this.debug_info.hover_id = '';
            this.debug_info.highlight_id = '';
        }
        this._applyOverlayOutlines();
        this._renderMap();
    }

    /** Highlight a map element while debug mode is active */
    public setDebugHighlight(ref: string) {
        if (this.debug_info.highlight_id === ref) return;
        this.debug_info.highlight_id = ref;
        if (this.debug) this._renderMap();
    }

    /** Center the view on the map element with the given ID */
    public focusOn(ref: string) {
        const bounds = this.map?.element_bounds.get(ref);
        if (!bounds) return;
        this.setCenter({
            x: bounds.x + bounds.w / 2,
            y: bounds.y + bounds.h / 2,
        });
        this._notifyViewChange();
    }

    public setOverlays(overlays: MapOverlay[]) {
        // Clear existing overlay elements
        for (const instance of this._overlay_instances) {
            instance.element.remove();
        }
        this._overlay_instances = [];

        // Create new overlay elements
        for (const overlay of overlays) {
            const element = document.createElement('div');
            // Wrappers ignore pointer events by default so map interactions
            // pass through, contents can opt-in with their own styles.
            // Positioned from 0,0 with transforms so per-frame position
            // updates while panning don't force layout
            element.style.cssText =
                'position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;';
            if (overlay.z_index != null) {
                element.style.zIndex = `${overlay.z_index}`;
            }
            if (overlay.hover) {
                // Contents are only shown while the overlay area is hovered
                element.classList.add('map-overlay-hover');
            }

            if (typeof overlay.contents === 'string') {
                element.innerHTML = overlay.contents;
            } else {
                element.appendChild(overlay.contents);
            }

            this.overlays.appendChild(element);
            this._overlay_instances.push({ overlay, element });
        }

        this._applyOverlayOutlines();

        // Update positions
        this._updateOverlayPositions();
    }

    /** Outline overlay elements while debug mode is active */
    private _applyOverlayOutlines() {
        for (const { element } of this._overlay_instances) {
            element.style.outline = this.debug ? '1px dashed #f0f' : '';
        }
    }

    /** ID of the smallest map element containing the given point */
    private _elementAt(point: Point): string {
        let best = '';
        let best_area = Number.POSITIVE_INFINITY;
        for (const [id, bounds] of this.map?.element_bounds || []) {
            if (
                point.x < bounds.x ||
                point.x > bounds.x + bounds.w ||
                point.y < bounds.y ||
                point.y > bounds.y + bounds.h
            ) {
                continue;
            }
            const area = bounds.w * bounds.h;
            if (area < best_area) {
                best = id;
                best_area = area;
            }
        }
        return best;
    }

    public setActions(actions: MapAction[]) {
        // Remove old action event listeners
        for (const [event_name, handler] of this._action_event_handlers) {
            this.container.removeEventListener(event_name, handler);
        }
        this._action_event_handlers.clear();
        this._action_last_triggered.clear();

        // Store new actions
        this._actions = actions;

        // Add event listeners for each unique event
        const event_names = new Set(actions.flatMap((_) => _.events));
        for (const event_name of event_names) {
            const handler = (e: Event) =>
                this._handleActionEvent(event_name, e as PointerEvent);
            this._action_event_handlers.set(event_name, handler);
            this.container.addEventListener(event_name, handler);
        }

        // Track pointerdown position for drag detection (to ignore clicks after dragging)
        if (!this._events.has('action_pointerdown')) {
            const handler = (e: PointerEvent) => {
                this._action_pointerdown_pos = { x: e.clientX, y: e.clientY };
            };
            this._events.set('action_pointerdown', handler);
            this.container.addEventListener('pointerdown', handler);
        }
    }

    /** Apply CSS to the map's SVG elements. Mapping of CSS selector to style declaration */
    public setStyles(styles: Record<string, string>) {
        let style_content = '';
        for (const [selector, css_text] of Object.entries(styles)) {
            if (css_text) {
                // Prefix with `svg` so applied styles take specificity
                // precedence over rules in the SVG's own stylesheets
                style_content += `svg ${cleanCssSelector(selector)} { ${css_text} }\n`;
            }
        }

        // Only re-render if styles have changed
        if (style_content !== this.styles_string) {
            this.styles_string = style_content;
            this._renderMapImage();
        }
    }

    public destroy() {
        this.setDebug(false);
        this._resize_observer?.disconnect();
        this._resize_observer = null;
        this.container.removeEventListener('wheel', this._events.get('wheel'));
        this.container.removeEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        window.removeEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        window.removeEventListener('pointerup', this._events.get('pointerup'));
        window.removeEventListener(
            'pointercancel',
            this._events.get('pointerup'),
        );

        // Clean up action event listeners
        for (const [event_name, handler] of this._action_event_handlers) {
            this.container.removeEventListener(event_name, handler);
        }
        this._action_event_handlers.clear();
        this._action_last_triggered.clear();
        this._actions = [];
        if (this._events.has('action_pointerdown')) {
            const handler = this._events.get('action_pointerdown');
            this.container.removeEventListener('pointerdown', handler);
            this._events.delete('action_pointerdown');
        }
        this._action_pointerdown_pos = null;

        // Invalidate any in-flight map image render
        this._image_generation++;
        this._map_path = '';
        if (this._image_frame_id !== null) {
            cancelAnimationFrame(this._image_frame_id);
            this._image_frame_id = null;
        }
        if (this._draw_frame_id !== null) {
            cancelAnimationFrame(this._draw_frame_id);
            this._draw_frame_id = null;
        }
        if (this._notify_frame_id !== null) {
            cancelAnimationFrame(this._notify_frame_id);
            this._notify_frame_id = null;
        }
        // Clean up overlay instances
        for (const instance of this._overlay_instances) {
            instance.element.remove();
        }
        this._overlay_instances = [];
        this.map_image = null;
        this.container.innerHTML = '';
    }

    /**
     * Pixels per normalised map unit on each axis at the given zoom level.
     * At zoom 1 the whole map image fits within the view.
     */
    private _viewScale(zoom = this.zoom): Point {
        const aspect = this.map?.aspect_ratio || 1;
        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        const fit_height =
            Math.min(height, width / aspect) * (1 - VIEW_PADDING * 2) * zoom;
        return { x: fit_height * aspect, y: fit_height };
    }

    /** Convert a pointer event position to normalised map coordinates (0-1) */
    private _eventToMap(
        e: { clientX: number; clientY: number },
        rect = this.container.getBoundingClientRect(),
    ): Point {
        const scale = this._viewScale();
        return {
            x:
                (e.clientX - rect.left - rect.width / 2) / scale.x +
                this.center.x,
            y:
                (e.clientY - rect.top - rect.height / 2) / scale.y +
                this.center.y,
        };
    }

    private _clampCenter(point: Point): Point {
        // Any point on the map can be panned to the center of the view
        return {
            x: Math.max(0, Math.min(1, point.x)),
            y: Math.max(0, Math.min(1, point.y)),
        };
    }

    /** Zoom about a fixed screen position so the point under it stays in place */
    private _zoomAboutPoint(new_zoom: number, position: Point) {
        const old_zoom = this.zoom;
        new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
        if (new_zoom === old_zoom) return;

        const rect = this.container.getBoundingClientRect();
        const fixed_point = this._eventToMap(
            { clientX: position.x, clientY: position.y },
            rect,
        );
        const new_scale = this._viewScale(new_zoom);
        const new_center = {
            x:
                fixed_point.x -
                (position.x - rect.left - rect.width / 2) / new_scale.x,
            y:
                fixed_point.y -
                (position.y - rect.top - rect.height / 2) / new_scale.y,
        };

        this.zoom = new_zoom;
        this.center = this._clampCenter(new_center);

        this._renderMap();
        this._notifyViewChange();
    }

    private _onWheel(e: WheelEvent) {
        e.preventDefault();
        if (this.disable_zoom || !this.map_image) return;

        // Calculate zoom factor (smaller values = less sensitive)
        const zoom_delta = e.deltaY > 0 ? 0.97 : 1.03;
        this._zoomAboutPoint(this.zoom * zoom_delta, {
            x: e.clientX,
            y: e.clientY,
        });
    }

    private _onPointerDown(e: PointerEvent) {
        if (!this.map_image) return;
        // Left-click or touch only
        if (e.button !== 0) return;

        this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        if (this._pointers.size === 2) {
            // Second pointer starts a pinch and ends any panning
            this._is_panning = false;
            const [p1, p2] = [...this._pointers.values()];
            this._pinch_distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            return;
        }

        if (this.disable_pan) return;
        this._is_panning = true;
        this._pan_start_time = Date.now();
        this._pan_exceeded_threshold = false;
        this.container.style.cursor = 'grabbing';
    }

    private _onPointerMove(e: PointerEvent) {
        const last = this._pointers.get(e.pointerId);
        if (!last) return;
        this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });

        // Two pointers active is a pinch zoom about the midpoint
        if (this._pointers.size === 2 && this._pinch_distance) {
            if (this.disable_zoom) return;
            const [p1, p2] = [...this._pointers.values()];
            const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
            if (distance > 0) {
                this._zoomAboutPoint(
                    this.zoom * (distance / this._pinch_distance),
                    { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 },
                );
                this._pinch_distance = distance;
            }
            return;
        }

        if (!this._is_panning) return;

        // Check if pan duration exceeds threshold (200ms)
        if (
            this._pan_start_time &&
            !this._pan_exceeded_threshold &&
            Date.now() - this._pan_start_time > 200
        ) {
            this._pan_exceeded_threshold = true;
        }

        const scale = this._viewScale();
        this.center = this._clampCenter({
            x: this.center.x - (e.clientX - last.x) / scale.x,
            y: this.center.y - (e.clientY - last.y) / scale.y,
        });

        this._renderMap();
        this._notifyViewChange();
    }

    private _onPointerUp(e: PointerEvent) {
        this._pointers.delete(e.pointerId);
        if (this._pointers.size < 2) {
            this._pinch_distance = null;
        }
        if (this._is_panning && this._pointers.size === 0) {
            this._is_panning = false;
            this.container.style.cursor = '';
        }
    }

    private _onResize() {
        this._renderMap();
        // Fixed (zoom-disabled) textures are sized from the on-screen pixel
        // count, so re-rasterise when the container resizes enough to change
        // the texture dimensions. Zoomable maps use a fixed megapixel budget
        // and so are unaffected by container size.
        if (this.disable_zoom && !this.fixed_resolution_megapixels) {
            const { width, height } = this._textureDimensions();
            if (
                width !== this._texture_width ||
                height !== this._texture_height
            ) {
                this._renderMapImage();
            }
        }
    }

    /**
     * Total texture pixel budget for the current map. Zoomable maps use a
     * fixed megapixel budget (reduced on mobile) so the map stays sharp when
     * zoomed in. Fixed maps never scale up, so they only need enough pixels
     * to cover the container, defaulting to twice the container's pixel count.
     */
    private _targetTexturePixels(): number {
        if (this.disable_zoom) {
            if (this.fixed_resolution_megapixels > 0) {
                return this.fixed_resolution_megapixels * 1_000_000;
            }
            const container_pixels =
                (this.container.clientWidth || 1) *
                (this.container.clientHeight || 1);
            return container_pixels * FIXED_TEXTURE_CONTAINER_MULTIPLIER;
        }
        const megapixels = isMobileDevice()
            ? MOBILE_TEXTURE_MEGAPIXELS
            : DESKTOP_TEXTURE_MEGAPIXELS;
        return megapixels * 1_000_000;
    }

    /**
     * Texture dimensions matching the SVG's aspect ratio with a total area of
     * `_targetTexturePixels()`. Each side is clamped to the maximum canvas
     * dimension, so very wide or tall maps render slightly below the budget.
     */
    private _textureDimensions(): { width: number; height: number } {
        const aspect = this.map?.aspect_ratio || 1;
        const target_pixels = this._targetTexturePixels();
        // width * height = target_pixels and width / height = aspect
        const height = Math.sqrt(target_pixels / aspect);
        const width = height * aspect;
        return {
            width: Math.max(
                1,
                Math.min(MAX_TEXTURE_DIMENSION, Math.round(width)),
            ),
            height: Math.max(
                1,
                Math.min(MAX_TEXTURE_DIMENSION, Math.round(height)),
            ),
        };
    }

    private _renderMapImage() {
        // Debounce to the next animation frame
        if (this._image_frame_id !== null) {
            cancelAnimationFrame(this._image_frame_id);
        }
        this._image_frame_id = requestAnimationFrame(() => {
            this._image_frame_id = null;
            this._doRenderMapImage();
        });
    }

    private _doRenderMapImage() {
        if (!this.map?.raw_data) return;
        // Image loading is async and renders can overlap, only the most
        // recently requested render is allowed to apply its result. Without
        // this a slow stale render (e.g. without the latest styles) can
        // complete after a newer one and overwrite it.
        const generation = ++this._image_generation;

        // Parse the SVG and inject styles
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.map.raw_data, 'image/svg+xml');
        const svg_element = doc.querySelector('svg');
        if (!svg_element) return;

        // Size the texture to a total pixel budget while matching the SVG's
        // aspect ratio, so the megapixel target is hit regardless of shape
        const { width, height } = this._textureDimensions();
        this._texture_width = width;
        this._texture_height = height;

        // Without a viewBox, changing width/height crops the drawing
        // instead of scaling it, so derive one from the declared size first
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

        // Force the SVG's intrinsic size to the texture size. Width/height
        // attributes that disagree with the viewBox aspect ratio otherwise
        // letterbox the drawing (preserveAspectRatio), offsetting it from
        // the element bounds which are computed in viewBox space
        if (svg_element.getAttribute('viewBox')) {
            svg_element.setAttribute('width', `${width}`);
            svg_element.setAttribute('height', `${height}`);
        }

        // Inject the styles at the end of the SVG so they are applied after
        // (and win over equal-specificity rules in) the SVG's own stylesheets
        if (this.styles_string) {
            // Create style element in SVG namespace so it works when serialized
            const style_element = doc.createElementNS(
                'http://www.w3.org/2000/svg',
                'style',
            );
            style_element.textContent = this.styles_string;
            svg_element.appendChild(style_element);
        }

        // Serialize the SVG back to a string
        const serializer = new XMLSerializer();
        const svg_string = serializer.serializeToString(svg_element);

        // Create a data URL from the SVG
        const svg_blob = new Blob([svg_string], { type: 'image/svg+xml' });
        const url = URL.createObjectURL(svg_blob);

        // Load the SVG into an image, then render to canvas
        const svg_image = new Image();
        svg_image.onload = () => {
            URL.revokeObjectURL(url);
            if (generation !== this._image_generation) return;

            const canvas = document.createElement('canvas');
            canvas.width = width;
            canvas.height = height;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.error('Failed to get canvas context');
                return;
            }

            ctx.drawImage(svg_image, 0, 0, width, height);

            this.map_image = canvas;
            this._renderMap();
        };
        svg_image.onerror = () => {
            URL.revokeObjectURL(url);
            console.error('Failed to load map image');
        };
        svg_image.src = url;
    }

    private _renderMap() {
        // Batch view updates to once per animation frame
        if (this._draw_frame_id !== null) return;
        this._draw_frame_id = requestAnimationFrame(() => {
            this._draw_frame_id = null;
            this._drawMap();
        });
    }

    private _drawMap() {
        if (!this.map_image) return;
        const draw_start = this.debug ? performance.now() : 0;

        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        const dpr = window.devicePixelRatio || 1;

        // Update canvas size if container changed
        if (
            this.canvas.width !== Math.round(width * dpr) ||
            this.canvas.height !== Math.round(height * dpr)
        ) {
            this.canvas.width = Math.round(width * dpr);
            this.canvas.height = Math.round(height * dpr);
            this.canvas.style.width = `${width}px`;
            this.canvas.style.height = `${height}px`;
        }

        // Map coordinates of the view edges with the current pan/zoom
        const scale = this._viewScale();
        const view_left = this.center.x - width / 2 / scale.x;
        const view_top = this.center.y - height / 2 / scale.y;

        // Only draw the visible portion of the map texture, sampling the
        // whole texture every frame causes hitches when zoomed in
        const sx0 = Math.max(0, view_left);
        const sy0 = Math.max(0, view_top);
        const sx1 = Math.min(1, view_left + width / scale.x);
        const sy1 = Math.min(1, view_top + height / scale.y);

        this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this._ctx.clearRect(0, 0, width, height);
        if (sx1 > sx0 && sy1 > sy0) {
            this._ctx.imageSmoothingEnabled = true;
            this._ctx.imageSmoothingQuality = 'high';
            const img_w = this.map_image.width;
            const img_h = this.map_image.height;
            this._ctx.drawImage(
                this.map_image,
                sx0 * img_w,
                sy0 * img_h,
                (sx1 - sx0) * img_w,
                (sy1 - sy0) * img_h,
                (sx0 - view_left) * scale.x,
                (sy0 - view_top) * scale.y,
                (sx1 - sx0) * scale.x,
                (sy1 - sy0) * scale.y,
            );
        }

        if (this.debug) {
            this._drawDebugInfo(scale, view_left, view_top);
            const now = performance.now();
            this.debug_info.last_draw_ms = now - draw_start;
            this._debug_draw_count++;
            if (now - this._debug_count_start >= 1000) {
                this.debug_info.draws_last_second = this._debug_draw_count;
                this._debug_draw_count = 0;
                this._debug_count_start = now;
            }
        }

        // Update overlay positions after rendering
        this._updateOverlayPositions();
    }

    /** Draw element bounds, map border and view crosshair over the map */
    private _drawDebugInfo(scale: Point, view_left: number, view_top: number) {
        if (!this.map) return;
        const ctx = this._ctx;
        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        const toScreenX = (x: number) => (x - view_left) * scale.x;
        const toScreenY = (y: number) => (y - view_top) * scale.y;

        // Border of the map image
        ctx.strokeStyle = '#f0f';
        ctx.lineWidth = 2;
        ctx.strokeRect(toScreenX(0), toScreenY(0), scale.x, scale.y);

        // Bounds of every mapped element within the view
        ctx.strokeStyle = 'rgba(0, 200, 255, 0.6)';
        ctx.lineWidth = 1;
        for (const [, bounds] of this.map.element_bounds) {
            const x = toScreenX(bounds.x);
            const y = toScreenY(bounds.y);
            const w = bounds.w * scale.x;
            const h = bounds.h * scale.y;
            if (x + w < 0 || y + h < 0 || x > width || y > height) continue;
            ctx.strokeRect(x, y, w, h);
        }

        // Highlight and label the hovered or debug-selected element
        const highlight_id =
            this.debug_info.highlight_id || this.debug_info.hover_id;
        const hover_bounds = highlight_id
            ? this.map.element_bounds.get(highlight_id)
            : null;
        if (hover_bounds) {
            const x = toScreenX(hover_bounds.x);
            const y = toScreenY(hover_bounds.y);
            ctx.fillStyle = 'rgba(255, 0, 255, 0.25)';
            ctx.fillRect(
                x,
                y,
                hover_bounds.w * scale.x,
                hover_bounds.h * scale.y,
            );
            const label = `#${highlight_id}`;
            ctx.font = '12px monospace';
            ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
            ctx.fillRect(x, y - 16, ctx.measureText(label).width + 8, 16);
            ctx.fillStyle = '#fff';
            ctx.fillText(label, x + 4, y - 4);
        }

        // Crosshair marking the view center
        ctx.strokeStyle = '#f00';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(width / 2 - 8, height / 2);
        ctx.lineTo(width / 2 + 8, height / 2);
        ctx.moveTo(width / 2, height / 2 - 8);
        ctx.lineTo(width / 2, height / 2 + 8);
        ctx.stroke();
    }

    private _updateOverlayPositions() {
        if (!this.map?.element_bounds) return;

        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        const scale = this._viewScale();
        const mapToScreen = (point: Point): Point => ({
            x: (point.x - this.center.x) * scale.x + width / 2,
            y: (point.y - this.center.y) * scale.y + height / 2,
        });

        // Style writes are skipped when the value is unchanged so frames
        // that don't move an overlay don't trigger style recalculation
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

            // Get the normalized bounds (0-1) on the map
            let bounds: MapElementBounds;
            if (typeof overlay.ref === 'string') {
                bounds = this.map.element_bounds.get(overlay.ref);
                if (!bounds) {
                    setDisplay(instance, 'none');
                    continue;
                }
            } else {
                bounds = { w: 0, h: 0, ...overlay.ref };
            }

            setDisplay(instance, '');

            if (overlay.type === 'box' && bounds.w > 0 && bounds.h > 0) {
                // For box overlays, position and size to match the element bounds
                const top_left = mapToScreen({ x: bounds.x, y: bounds.y });
                setTransform(
                    instance,
                    `translate(${top_left.x}px, ${top_left.y}px)`,
                );
                setSize(
                    instance,
                    `${bounds.w * scale.x}px`,
                    `${bounds.h * scale.y}px`,
                );
            } else {
                // For point overlays, just position at the center of the bounds
                const screen_pos = mapToScreen({
                    x: bounds.x + bounds.w / 2,
                    y: bounds.y + bounds.h / 2,
                });

                setSize(instance, '', '');
                // Apply zoom scaling if requested
                setTransform(
                    instance,
                    overlay.scale_with_zoom
                        ? `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%) scale(${this.zoom})`
                        : `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%)`,
                );
            }
        }
    }

    /**
     * Handle action events (click, pointer events, etc.) on the map.
     * Only the best matching action is triggered, where the best match is the
     * highest priority action with the smallest map element under the event.
     */
    private _handleActionEvent(event_name: string, e: PointerEvent) {
        if (!this.map_image || !this.map?.element_bounds) return;

        // Ignore actions if user was panning for more than 200ms
        if (this._pan_exceeded_threshold) return;

        // For click events, ignore if user was dragging (moved more than 5 pixels)
        if (event_name === 'click' && this._action_pointerdown_pos) {
            const dx = e.clientX - this._action_pointerdown_pos.x;
            const dy = e.clientY - this._action_pointerdown_pos.y;
            if (Math.hypot(dx, dy) > 5) return;
        }

        // Convert event position to normalized map coordinates
        const norm = this._eventToMap(e);
        if (norm.x < 0 || norm.x > 1 || norm.y < 0 || norm.y > 1) return;

        // Find the best matching action for the event position
        let best: MapAction | null = null;
        let best_area = Number.POSITIVE_INFINITY;
        for (const action of this._actions) {
            if (!action.events.includes(event_name)) continue;

            if (action.ref === '*') {
                if (!best) best = action;
                continue;
            }
            const bounds = this.map.element_bounds.get(action.ref);
            if (!bounds) continue;

            // Check if the event position is within the element's bounds
            if (
                norm.x < bounds.x ||
                norm.x > bounds.x + bounds.w ||
                norm.y < bounds.y ||
                norm.y > bounds.y + bounds.h
            ) {
                continue;
            }

            // Prefer higher priority actions, then smaller (innermost) elements
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

        // Debounce: skip if callback was triggered within 300ms
        const now = Date.now();
        const debounce_key = `${best.ref}:${event_name}`;
        const last_triggered =
            this._action_last_triggered.get(debounce_key) || 0;
        if (now - last_triggered < 300) return;

        this._action_last_triggered.set(debounce_key, now);
        best.callback(norm);
    }

    /**
     * Notify listeners of view changes from user interaction. Notifications
     * are coalesced to one per animation frame as pointer events can fire
     * more often than the display refreshes and listeners may be expensive
     */
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
