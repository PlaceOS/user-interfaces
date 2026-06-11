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
    ref: string | Point;
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
}

const MAX_ZOOM = 10;
const MIN_ZOOM = 1;
/** Fraction of the view height reserved as padding on each side of the map at 100% zoom */
const VIEW_PADDING = 0.05;
const BASE_TEXTURE_SIZE = 4096;
const HIGH_RES_TEXTURE_SIZE = 8192;

interface ElementBoundsResult {
    bounds: Map<string, MapElementBounds>;
    aspect_ratio: number;
}

/** Get the dimensions of an SVG element from its viewBox or width/height attributes */
function getSvgDimensions(svg_element: SVGSVGElement): {
    width: number;
    height: number;
} {
    let width = 0;
    let height = 0;
    const view_box = svg_element.getAttribute('viewBox');

    if (view_box) {
        const parts = view_box.split(/[\s,]+/).map(parseFloat);
        if (parts.length >= 4) {
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
            width = bbox.width;
            height = bbox.height;
        } catch {
            // getBBox throws for SVGs that are not rendered
        }
    }

    return { width: width || 1, height: height || 1 };
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

    const { width: svg_width, height: svg_height } =
        getSvgDimensions(svg_element);
    const aspect_ratio = svg_width / svg_height;

    // Find all elements with an ID and calculate their bounds
    const elements_with_id = svg_element.querySelectorAll('[id]');
    elements_with_id.forEach((element) => {
        const id = element.getAttribute('id');
        if (!id) return;

        // SVG elements have getBBox() for accurate geometry bounds
        if (typeof (element as SVGGraphicsElement).getBBox === 'function') {
            try {
                const bbox = (element as SVGGraphicsElement).getBBox();
                // Normalize bounds relative to SVG dimensions (0 to 1 range)
                bounds_map.set(id, {
                    x: bbox.x / svg_width,
                    y: bbox.y / svg_height,
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
    /** Square canvas with the styled SVG rendered centered on it */
    public map_image: HTMLCanvasElement | null = null;
    /** CSS to apply to the SVG before it is rendered */
    public styles_string = '';
    /** Target point for the view on the map texture. { 0.5, 0.5 } is the center of the map image */
    public center: Point = { x: 0.5, y: 0.5 };
    /** Zoom level of the map. 1 represents the map texture height fitting the view height */
    public zoom = 1;
    /** Whether to render the map texture at double resolution (8192×8192) */
    public high_resolution = false;
    /** Whether user zoom interactions are disabled */
    public disable_zoom = false;
    /** Whether user pan interactions are disabled */
    public disable_pan = false;
    /** Callback invoked when view changes from user interaction */
    public onViewChange: ((event: MapViewChangeEvent) => void) | null = null;

    private _image_frame_id: number | null = null;
    private _draw_frame_id: number | null = null;
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

        this._resize_observer = new ResizeObserver(() => this._renderMap());
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
        this.map = await STORE.get(path);
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

    public setHighResolution(enabled: boolean) {
        if (this.high_resolution === enabled) return;
        this.high_resolution = enabled;
        // Re-render the map image at the new resolution
        this._renderMapImage();
    }

    public setOptions(options: {
        disable_zoom?: boolean;
        disable_pan?: boolean;
    }) {
        this.disable_zoom = !!options?.disable_zoom;
        this.disable_pan = !!options?.disable_pan;
    }

    /** Center the view on the map element with the given ID */
    public focusOn(ref: string) {
        const bounds = this.map?.element_bounds.get(ref);
        if (!bounds) return;
        this.setCenter(
            this.normToTexture({
                x: bounds.x + bounds.w / 2,
                y: bounds.y + bounds.h / 2,
            }),
        );
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
            // pass through, contents can opt-in with their own styles
            element.style.cssText =
                'position: absolute; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;';
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

        // Update positions
        this._updateOverlayPositions();
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
                style_content += `${selector} { ${css_text} }\n`;
            }
        }

        // Only re-render if styles have changed
        if (style_content !== this.styles_string) {
            this.styles_string = style_content;
            this._renderMapImage();
        }
    }

    /** Convert normalised SVG coordinates (0-1) to map texture coordinates (0-1) */
    public normToTexture(point: Point): Point {
        const aspect = this.map?.aspect_ratio ?? 1;
        if (aspect >= 1) {
            // Wider than tall: SVG fills width, centered vertically
            const v_offset = (1 - 1 / aspect) / 2;
            return { x: point.x, y: v_offset + point.y / aspect };
        }
        // Taller than wide: SVG fills height, centered horizontally
        const u_offset = (1 - aspect) / 2;
        return { x: u_offset + point.x * aspect, y: point.y };
    }

    public destroy() {
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

        if (this._image_frame_id !== null) {
            cancelAnimationFrame(this._image_frame_id);
            this._image_frame_id = null;
        }
        if (this._draw_frame_id !== null) {
            cancelAnimationFrame(this._draw_frame_id);
            this._draw_frame_id = null;
        }
        // Clean up overlay instances
        for (const instance of this._overlay_instances) {
            instance.element.remove();
        }
        this._overlay_instances = [];
        this.map_image = null;
        this.container.innerHTML = '';
    }

    /** Pixels per map texture unit at the given zoom level */
    private _viewScale(zoom = this.zoom): number {
        return (
            (this.container.clientHeight || 1) * (1 - VIEW_PADDING * 2) * zoom
        );
    }

    /** Convert a pointer event position to map texture coordinates (0-1) */
    private _eventToTexture(
        e: { clientX: number; clientY: number },
        rect = this.container.getBoundingClientRect(),
    ): Point {
        const scale = this._viewScale();
        return {
            x: (e.clientX - rect.left - rect.width / 2) / scale + this.center.x,
            y: (e.clientY - rect.top - rect.height / 2) / scale + this.center.y,
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
        const fixed_point = this._eventToTexture(
            { clientX: position.x, clientY: position.y },
            rect,
        );
        const new_scale = this._viewScale(new_zoom);
        const new_center = {
            x:
                fixed_point.x -
                (position.x - rect.left - rect.width / 2) / new_scale,
            y:
                fixed_point.y -
                (position.y - rect.top - rect.height / 2) / new_scale,
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
            x: this.center.x - (e.clientX - last.x) / scale,
            y: this.center.y - (e.clientY - last.y) / scale,
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

        // Parse the SVG and inject styles
        const parser = new DOMParser();
        const doc = parser.parseFromString(this.map.raw_data, 'image/svg+xml');
        const svg_element = doc.querySelector('svg');
        if (!svg_element) return;

        // Inject the styles at the beginning of the SVG
        if (this.styles_string) {
            // Create style element in SVG namespace so it works when serialized
            const style_element = doc.createElementNS(
                'http://www.w3.org/2000/svg',
                'style',
            );
            style_element.textContent = this.styles_string;
            svg_element.insertBefore(style_element, svg_element.firstChild);
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

            const target_size = this.high_resolution
                ? HIGH_RES_TEXTURE_SIZE
                : BASE_TEXTURE_SIZE;
            const canvas = document.createElement('canvas');
            canvas.width = target_size;
            canvas.height = target_size;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.error('Failed to get canvas context');
                return;
            }

            // Fit the SVG within the square texture maintaining aspect ratio
            const aspect = this.map.aspect_ratio;
            const scaled_width =
                aspect >= 1 ? target_size : target_size * aspect;
            const scaled_height =
                aspect >= 1 ? target_size / aspect : target_size;

            // Center the image on the canvas
            const offset_x = (target_size - scaled_width) / 2;
            const offset_y = (target_size - scaled_height) / 2;

            ctx.drawImage(
                svg_image,
                offset_x,
                offset_y,
                scaled_width,
                scaled_height,
            );

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

        // Draw the map texture with the current pan/zoom transform
        const scale = this._viewScale();
        const offset_x = width / 2 - this.center.x * scale;
        const offset_y = height / 2 - this.center.y * scale;

        this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
        this._ctx.clearRect(0, 0, width, height);
        this._ctx.imageSmoothingEnabled = true;
        this._ctx.imageSmoothingQuality = 'high';
        this._ctx.drawImage(this.map_image, offset_x, offset_y, scale, scale);

        // Update overlay positions after rendering
        this._updateOverlayPositions();
    }

    private _updateOverlayPositions() {
        if (!this.map?.element_bounds) return;

        const width = this.container.clientWidth || 1;
        const height = this.container.clientHeight || 1;
        const scale = this._viewScale();
        const textureToScreen = (point: Point): Point => ({
            x: (point.x - this.center.x) * scale + width / 2,
            y: (point.y - this.center.y) * scale + height / 2,
        });

        for (const instance of this._overlay_instances) {
            const { overlay, element } = instance;

            if (overlay.min_zoom && this.zoom < overlay.min_zoom) {
                element.style.display = 'none';
                continue;
            }

            // Get the normalized bounds (0-1) on the map
            let bounds: MapElementBounds;
            if (typeof overlay.ref === 'string') {
                bounds = this.map.element_bounds.get(overlay.ref);
                if (!bounds) {
                    element.style.display = 'none';
                    continue;
                }
            } else {
                bounds = { ...overlay.ref, w: 0, h: 0 };
            }

            element.style.display = '';

            if (overlay.type === 'box' && bounds.w > 0 && bounds.h > 0) {
                // For box overlays, position and size to match the element bounds
                const top_left = textureToScreen(
                    this.normToTexture({ x: bounds.x, y: bounds.y }),
                );
                const bottom_right = textureToScreen(
                    this.normToTexture({
                        x: bounds.x + bounds.w,
                        y: bounds.y + bounds.h,
                    }),
                );

                element.style.left = `${top_left.x}px`;
                element.style.top = `${top_left.y}px`;
                element.style.width = `${bottom_right.x - top_left.x}px`;
                element.style.height = `${bottom_right.y - top_left.y}px`;
                element.style.transform = '';
            } else {
                // For point overlays, just position at the center of the bounds
                const screen_pos = textureToScreen(
                    this.normToTexture({
                        x: bounds.x + bounds.w / 2,
                        y: bounds.y + bounds.h / 2,
                    }),
                );

                element.style.left = `${screen_pos.x}px`;
                element.style.top = `${screen_pos.y}px`;
                element.style.width = '';
                element.style.height = '';
                // Apply zoom scaling if requested
                element.style.transform = overlay.scale_with_zoom
                    ? `translate(-50%, -50%) scale(${this.zoom})`
                    : 'translate(-50%, -50%)';
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
        const norm = this._textureToNormalized(this._eventToTexture(e));
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

    /** Convert map texture coordinates (0-1) to normalised SVG coordinates (0-1) */
    private _textureToNormalized(point: Point): Point {
        const aspect = this.map?.aspect_ratio ?? 1;
        if (aspect >= 1) {
            // Wider than tall: SVG fills width, centered vertically
            const v_offset = (1 - 1 / aspect) / 2;
            return { x: point.x, y: (point.y - v_offset) * aspect };
        }
        // Taller than wide: SVG fills height, centered horizontally
        const u_offset = (1 - aspect) / 2;
        return { x: (point.x - u_offset) / aspect, y: point.y };
    }

    /** Notify listeners of view changes from user interaction */
    private _notifyViewChange() {
        if (this.onViewChange) {
            this.onViewChange({
                zoom: this.zoom,
                center: { ...this.center },
            });
        }
    }
}
