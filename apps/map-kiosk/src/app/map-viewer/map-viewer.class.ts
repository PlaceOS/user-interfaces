import { randomString } from '@placeos/common';
import * as THREE from 'three';

export interface Rect {
    x: number;
    y: number;
    width: number;
    height: number;
}

export interface Vec2 {
    x: number;
    y: number;
}

export interface MapDetails {
    raw_data: string;
    element_bounds: Map<string, Rect>;
    /** Aspect ratio of the SVG (width / height) */
    aspect_ratio: number;
    loaded_at: number;
}

export interface MapOverlay {
    /** ID of the reference element or point on the map to render the overlay */
    ref: string | Vec2;
    /** How the overlay should be positioned and sized. `point` is 0x0 on the center of the ref and `box` is mapped to the bounds of the ref */
    type: 'point' | 'box';
    contents: HTMLElement | string;
    /** Whether to scale the overlay with zoom (default: false for point, true for box) */
    scale_with_zoom?: boolean;
    /** Scale factor for box overlays relative to the reference bounds. 1 = 100%, 0.5 = 50%, 2 = 200%. Default is 1. */
    box_scale?: number;
}

export interface MapAction {
    /** ID of the reference element */
    ref: string;
    /** List of event name to listen for */
    events: string[];
    /** Callback when the event occurs */
    callback: (p: Vec2) => void;
}

export interface MapViewChangeEvent {
    zoom: number;
    center: Vec2;
    rotation: number;
}

export type MapViewerMode = '2d' | '3d';

interface OverlayInstance {
    overlay: MapOverlay;
    element: HTMLDivElement;
}

const MAX_ZOOM = 10;
const MIN_ZOOM = 0.5;
const FEATURE_BOUNDS_SCALE_3D = 0.8;
const MAX_CENTER: Vec2 = { x: 1, y: 1 };
const MIN_CENTER: Vec2 = { x: -1, y: -1 };

interface ElementBoundsResult {
    bounds: Map<string, Rect>;
    aspect_ratio: number;
}

/** Take SVG image as a string render in place and generate normalised bounds for each element with an ID */
function generateElementBounds(data: string): ElementBoundsResult {
    const bounds_map = new Map<string, Rect>();

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

    // Get the SVG's dimensions from viewBox or width/height attributes
    let svg_width = 0;
    let svg_height = 0;
    const view_box = svg_element.getAttribute('viewBox');

    if (view_box) {
        const parts = view_box.split(/[\s,]+/).map(parseFloat);
        if (parts.length >= 4) {
            svg_width = parts[2];
            svg_height = parts[3];
        }
    }

    // Fall back to width/height attributes or bounding box
    if (!svg_width || !svg_height) {
        const width_attr = svg_element.getAttribute('width');
        const height_attr = svg_element.getAttribute('height');
        svg_width = width_attr ? parseFloat(width_attr) : 0;
        svg_height = height_attr ? parseFloat(height_attr) : 0;
    }

    if (!svg_width || !svg_height) {
        const bbox = svg_element.getBBox();
        svg_width = bbox.width || 1;
        svg_height = bbox.height || 1;
    }

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
                const rect: Rect = {
                    x: bbox.x / svg_width,
                    y: bbox.y / svg_height,
                    width: bbox.width / svg_width,
                    height: bbox.height / svg_height,
                };
                bounds_map.set(id, rect);
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
    store: Map<string, MapDetails> = new Map();
    auth_type: 'cookie' | 'header' = 'cookie';
    token = '';
    auth_key = '';

    public setAuthToken(token: string, type: 'cookie' | 'header' = 'cookie') {
        this.token = token;
        this.auth_type = type;
    }

    public setAuthKey(key: string, type: 'cookie' | 'header' = 'cookie') {
        this.token = 'api-key';
        this.auth_key = key;
        this.auth_type = type;
    }

    public async get(path: string) {
        if (this.store.has(path)) {
            return this.store.get(path);
        }
        return this._load(path);
    }

    public remove(path: string) {
        this.store.delete(path);
    }

    private async _load(path: string) {
        const options: RequestInit = {};
        if (this.token) {
            if (this.auth_type === 'header') {
                options.headers = {
                    Authorization: `Bearer ${this.token}`,
                };
            } else {
                const cookie_path = '/';
                document.cookie = `${
                    this.token === 'api-key'
                        ? 'api-key=' + encodeURIComponent(this.auth_key)
                        : 'bearer_token=' + encodeURIComponent(this.token)
                };max-age=30;path=${cookie_path};samesite=strict;${
                    location.protocol === 'https:' ? 'secure;' : ''
                }`;
            }
        }
        const response = await fetch(path, options);
        if (!response.ok) throw new Error('Failed to load map');
        const data = await response.text();
        const { bounds, aspect_ratio } = generateElementBounds(data);
        const map: MapDetails = {
            raw_data: data,
            element_bounds: bounds,
            aspect_ratio,
            loaded_at: Date.now(),
        };
        this.store.set(path, map);
        return map;
    }
}

const STORE = new MapStore();

export class MapViewer {
    public readonly id: string;
    public readonly container: Element;
    public readonly scene: THREE.Scene;
    public readonly camera: THREE.OrthographicCamera;
    public readonly renderer: THREE.WebGLRenderer;
    public readonly overlays: Element;
    public map: MapDetails;
    public map_image: HTMLImageElement;
    public styles_string = '';
    /** Target point for the camera on the image of the map. { 0,0 } is the center of the map image */
    public center: Vec2 = { x: 0, y: 0 };
    /** Zoom level of the map. 1 represents the map quad fitting the screen */
    public zoom = 1;
    /** Rotation around the Z/Up axis */
    public rotation = 0;
    /** View mode: '2d' for top-down view, '3d' for isometric view */
    public mode: MapViewerMode = '3d';
    /** Whether to render the map texture at double resolution (8192×8192) if supported */
    public high_resolution = false;
    /** Callback invoked when view changes from user interaction */
    public onViewChange: ((event: MapViewChangeEvent) => void) | null = null;

    private _render_frame_id: number | null = null;
    private _texture: THREE.Texture | null = null;
    private _texture_image: HTMLImageElement | null = null;
    private _quad: THREE.Mesh | null = null;
    private _events = new Map<string, (e) => void>();
    private _is_panning = false;
    private _pan_start: THREE.Vector3 | null = null;
    private _pan_start_time: number | null = null;
    private _pan_exceeded_threshold = false;
    private _overlay_instances: OverlayInstance[] = [];
    private _actions: MapAction[] = [];
    private _action_event_handlers = new Map<string, (e: Event) => void>();
    private _action_pointerdown_pos: Vec2 | null = null;
    private _action_last_triggered = new Map<string, number>();
    private _is_rotating = false;
    private _rotate_start_x: number | null = null;
    private _rotate_start_rotation: number = 0;

    constructor(el: Element) {
        this.container = el;
        this.id = `m_view-${randomString(8, '0123456789ABCDEF')}`;
        this.container.innerHTML = '';
        this.scene = new THREE.Scene();
        this.camera = new THREE.OrthographicCamera(
            -100,
            100,
            100,
            -100,
            0.1,
            1000,
        );
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true,
        });
        this.renderer.setClearColor(0x000000, 0);
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(
            this.container.clientWidth,
            this.container.clientHeight,
        );
        this.container.appendChild(this.renderer.domElement);
        this.overlays = document.createElement('div');
        this.overlays.id = `${this.id}-overlays`;
        (this.overlays as HTMLElement).style.cssText =
            'position: absolute; inset: 0; pointer-events: auto; overflow: hidden;';
        this.container.appendChild(this.overlays);

        this._events.set('resize', () => this._renderMap());
        window.addEventListener('resize', this._events.get('resize'));

        this._events.set('wheel', (e: WheelEvent) => this._onWheel(e));
        this.renderer.domElement.addEventListener(
            'wheel',
            this._events.get('wheel'),
            {
                passive: false,
            },
        );
        // Also listen on overlays for wheel events
        (this.overlays as HTMLElement).addEventListener(
            'wheel',
            this._events.get('wheel'),
            {
                passive: false,
            },
        );

        this._events.set('pointerdown', (e: PointerEvent) =>
            this._onPointerDown(e),
        );
        this._events.set('pointermove', (e: PointerEvent) =>
            this._onPointerMove(e),
        );
        this._events.set('pointerup', (e: PointerEvent) =>
            this._onPointerUp(e),
        );
        this.renderer.domElement.addEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        this.renderer.domElement.addEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        this.renderer.domElement.addEventListener(
            'pointerup',
            this._events.get('pointerup'),
        );
        // Also listen on overlays for pointer events (for pan/zoom over overlays)
        (this.overlays as HTMLElement).addEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        (this.overlays as HTMLElement).addEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        (this.overlays as HTMLElement).addEventListener(
            'pointerup',
            this._events.get('pointerup'),
        );
        window.addEventListener('pointermove', this._events.get('pointermove'));
        window.addEventListener('pointerup', this._events.get('pointerup'));

        // Prevent context menu on right-click (for rotation)
        this._events.set('contextmenu', (e: Event) => e.preventDefault());
        this.renderer.domElement.addEventListener(
            'contextmenu',
            this._events.get('contextmenu'),
        );
        (this.overlays as HTMLElement).addEventListener(
            'contextmenu',
            this._events.get('contextmenu'),
        );
    }

    public async setMap(path: string) {
        this.map = await STORE.get(path);
        this._renderMapImage();
    }

    public setCenter(point: Vec2) {
        const clamped_x = Math.max(
            MIN_CENTER.x,
            Math.min(MAX_CENTER.x, point.x),
        );
        const clamped_y = Math.max(
            MIN_CENTER.y,
            Math.min(MAX_CENTER.y, point.y),
        );
        this.center = { x: clamped_x, y: clamped_y };
        this._renderMap();
    }

    public setZoom(new_zoom: number) {
        this.zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
        this._renderMap();
    }

    public setRotation(new_rotation: number) {
        this.rotation = new_rotation;
        this._renderMap();
    }

    public setMode(new_mode: MapViewerMode) {
        if (this.mode === new_mode) return;
        this.mode = new_mode;
        this._renderMap();
    }

    public setHighResolution(enabled: boolean) {
        if (this.high_resolution === enabled) return;
        this.high_resolution = enabled;
        // Re-render the map image at the new resolution
        this._renderMapImage();
    }

    /** Get the maximum texture size supported by the device */
    public getMaxTextureSize(): number {
        return this.renderer.capabilities.maxTextureSize;
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
            // Allow pointer events on wrapper so child interactions work
            // Pan/zoom still works because our handlers are on the overlay container
            // and events bubble up from children
            element.style.cssText =
                'position: absolute; transform-origin: center center; pointer-events: auto;';

            // Set content
            if (typeof overlay.contents === 'string') {
                element.innerHTML = overlay.contents;
            } else {
                // Move the HTMLElement directly (don't clone) to preserve Angular bindings
                overlay.contents.classList.remove('pointer-events-none');
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
            this.renderer.domElement.removeEventListener(event_name, handler);
            (this.overlays as HTMLElement).removeEventListener(
                event_name,
                handler,
            );
        }
        this._action_event_handlers.clear();
        this._action_last_triggered.clear();

        // Store new actions
        this._actions = actions;

        // Collect all unique event names
        const event_names = new Set<string>();
        for (const action of actions) {
            for (const event_name of action.events) {
                event_names.add(event_name);
            }
        }

        // Add event listeners for each unique event
        for (const event_name of event_names) {
            const handler = (e: Event) =>
                this._handleActionEvent(event_name, e as PointerEvent);
            this._action_event_handlers.set(event_name, handler);
            this.renderer.domElement.addEventListener(event_name, handler);
            (this.overlays as HTMLElement).addEventListener(
                event_name,
                handler,
            );
        }

        // Track pointerdown position for drag detection (to ignore clicks after dragging)
        if (!this._events.has('action_pointerdown')) {
            const handler = (e: PointerEvent) => {
                this._action_pointerdown_pos = { x: e.clientX, y: e.clientY };
            };
            this._events.set('action_pointerdown', handler);
            this.renderer.domElement.addEventListener('pointerdown', handler);
            (this.overlays as HTMLElement).addEventListener(
                'pointerdown',
                handler,
            );
        }
    }

    public setStyles(styles: Map<string, CSSStyleDeclaration>) {
        // Build style element content string
        let style_content = '';
        styles.forEach((style, selector) => {
            const css_text = style.cssText;
            if (css_text) {
                // Selector is already a valid CSS selector (e.g., "#element-id")
                style_content += `${selector} { ${css_text} }\n`;
            }
        });

        const new_styles_string = `<style>${style_content}</style>`;

        // Only re-render if styles have changed
        if (new_styles_string !== this.styles_string) {
            this.styles_string = new_styles_string;
            this._renderMapImage();
        }
    }

    public destroy() {
        window.removeEventListener('resize', this._events.get('resize'));
        this.renderer.domElement.removeEventListener(
            'wheel',
            this._events.get('wheel'),
        );
        this.renderer.domElement.removeEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        this.renderer.domElement.removeEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        this.renderer.domElement.removeEventListener(
            'pointerup',
            this._events.get('pointerup'),
        );
        // Clean up overlay event listeners
        (this.overlays as HTMLElement).removeEventListener(
            'wheel',
            this._events.get('wheel'),
        );
        (this.overlays as HTMLElement).removeEventListener(
            'pointerdown',
            this._events.get('pointerdown'),
        );
        (this.overlays as HTMLElement).removeEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        (this.overlays as HTMLElement).removeEventListener(
            'pointerup',
            this._events.get('pointerup'),
        );
        window.removeEventListener(
            'pointermove',
            this._events.get('pointermove'),
        );
        window.removeEventListener('pointerup', this._events.get('pointerup'));
        // Clean up context menu listeners
        this.renderer.domElement.removeEventListener(
            'contextmenu',
            this._events.get('contextmenu'),
        );
        (this.overlays as HTMLElement).removeEventListener(
            'contextmenu',
            this._events.get('contextmenu'),
        );

        // Clean up action event listeners
        for (const [event_name, handler] of this._action_event_handlers) {
            this.renderer.domElement.removeEventListener(event_name, handler);
            (this.overlays as HTMLElement).removeEventListener(
                event_name,
                handler,
            );
        }
        this._action_event_handlers.clear();
        this._action_last_triggered.clear();
        this._actions = [];
        if (this._events.has('action_pointerdown')) {
            const handler = this._events.get('action_pointerdown');
            this.renderer.domElement.removeEventListener(
                'pointerdown',
                handler,
            );
            (this.overlays as HTMLElement).removeEventListener(
                'pointerdown',
                handler,
            );
            this._events.delete('action_pointerdown');
        }
        this._action_pointerdown_pos = null;

        if (this._render_frame_id !== null) {
            cancelAnimationFrame(this._render_frame_id);
            this._render_frame_id = null;
        }
        // Clean up overlay instances
        for (const instance of this._overlay_instances) {
            instance.element.remove();
        }
        this._overlay_instances = [];
        if (this._quad) {
            this._quad.geometry.dispose();
            (this._quad.material as THREE.MeshBasicMaterial).dispose();
            this._quad = null;
        }
        if (this._texture) {
            this._texture.dispose();
            this._texture = null;
        }
        this._texture_image = null;
        this.renderer.dispose();
        this.container.innerHTML = '';
    }

    private _onWheel(e: WheelEvent) {
        e.preventDefault();

        if (!this._quad) return;

        const rect = this.renderer.domElement.getBoundingClientRect();
        const quad_size = 100;

        // Convert cursor to normalized device coordinates (-1 to 1)
        const ndc_x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ndc_y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        // Raycast to find the world position under cursor
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(ndc_x, ndc_y), this.camera);

        const intersects = raycaster.intersectObject(this._quad);
        if (intersects.length === 0) return;

        // Get world position of intersection
        const world_point = intersects[0].point;

        // Calculate zoom factor (smaller values = less sensitive)
        const zoom_delta = e.deltaY > 0 ? 0.97 : 1.03;
        const old_zoom = this.zoom;
        const new_zoom = Math.max(
            MIN_ZOOM,
            Math.min(MAX_ZOOM, old_zoom * zoom_delta),
        );

        if (new_zoom === old_zoom) return;

        // The world point under cursor should stay at the same screen position after zoom
        // Current camera target is at (center.x * quad_size, 0, center.y * quad_size)
        // After zoom, we need new center such that world_point projects to same NDC

        // For orthographic camera, the offset from camera target to world point in screen space
        // scales with the frustum size. To keep the point at the same NDC after zoom change,
        // we need to adjust the center.

        // Vector from current camera target to world point
        const target_x = this.center.x * quad_size;
        const target_z = this.center.y * quad_size;
        const offset_x = world_point.x - target_x;
        const offset_z = world_point.z - target_z;

        // The frustum size changes by factor (old_zoom / new_zoom)
        // To keep the point at same screen position, adjust center proportionally
        const scale = 1 - old_zoom / new_zoom;

        const new_center_x = this.center.x + (offset_x * scale) / quad_size;
        const new_center_y = this.center.y + (offset_z * scale) / quad_size;

        // Clamp center based on zoom level so the view stays within map bounds
        const max_offset = this._getMaxCenterOffset(new_zoom);
        this.center.x = Math.max(
            -max_offset.x,
            Math.min(max_offset.x, new_center_x),
        );
        this.center.y = Math.max(
            -max_offset.y,
            Math.min(max_offset.y, new_center_y),
        );
        this.zoom = new_zoom;

        this._renderMap();
        this._notifyViewChange();
    }

    private _onPointerDown(e: PointerEvent) {
        if (!this._quad) return;

        // Right-click for rotation (only in 3D mode)
        if (e.button === 2 && this.mode === '3d') {
            this._is_rotating = true;
            this._rotate_start_x = e.clientX;
            this._rotate_start_rotation = this.rotation;
            this.renderer.domElement.style.cursor = 'ew-resize';
            return;
        }

        // Left-click for panning
        if (e.button !== 0) return;

        const rect = this.renderer.domElement.getBoundingClientRect();
        const ndc_x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ndc_y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(ndc_x, ndc_y), this.camera);

        const intersects = raycaster.intersectObject(this._quad);
        if (intersects.length === 0) return;

        this._is_panning = true;
        // Store the world point on the quad - this point should follow the cursor
        this._pan_start = intersects[0].point.clone();
        this._pan_start_time = Date.now();
        this._pan_exceeded_threshold = false;
        this.renderer.domElement.style.cursor = 'grabbing';
    }

    private _onPointerMove(e: PointerEvent) {
        // Handle rotation
        if (this._is_rotating && this._rotate_start_x !== null) {
            const delta_x = e.clientX - this._rotate_start_x;
            // Convert pixel movement to radians (500 pixels = full rotation)
            const rotation_sensitivity = (Math.PI * 2) / 500;
            this.rotation =
                this._rotate_start_rotation + delta_x * rotation_sensitivity;
            this._renderMap();
            this._notifyViewChange();
            return;
        }

        if (!this._is_panning || !this._pan_start) return;

        // Check if pan duration exceeds threshold (200ms)
        if (
            this._pan_start_time &&
            !this._pan_exceeded_threshold &&
            Date.now() - this._pan_start_time > 200
        ) {
            this._pan_exceeded_threshold = true;
        }

        const rect = this.renderer.domElement.getBoundingClientRect();
        const ndc_x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ndc_y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        // Raycast against the Y=0 ground plane to find where cursor points
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(ndc_x, ndc_y), this.camera);

        const ground_plane = new THREE.Plane(new THREE.Vector3(0, 1, 0), 0);
        const cursor_world = new THREE.Vector3();
        raycaster.ray.intersectPlane(ground_plane, cursor_world);

        if (!cursor_world) return;

        const quad_size = 100;

        // Move center so that _pan_start appears at cursor position
        // If cursor points to cursor_world and we want _pan_start there:
        // new_center = old_center - (cursor_world - _pan_start) / quad_size
        const delta_x = (cursor_world.x - this._pan_start.x) / quad_size;
        const delta_z = (cursor_world.z - this._pan_start.z) / quad_size;

        const new_center_x = this.center.x - delta_x;
        const new_center_y = this.center.y - delta_z;

        // Clamp center
        const max_offset = this._getMaxCenterOffset(this.zoom);
        this.center.x = Math.max(
            -max_offset.x,
            Math.min(max_offset.x, new_center_x),
        );
        this.center.y = Math.max(
            -max_offset.y,
            Math.min(max_offset.y, new_center_y),
        );

        this._renderMap();
        this._notifyViewChange();
    }

    private _onPointerUp(_e: PointerEvent) {
        if (this._is_panning) {
            this._is_panning = false;
            this._pan_start = null;
            this.renderer.domElement.style.cursor = '';
        }
        if (this._is_rotating) {
            this._is_rotating = false;
            this._rotate_start_x = null;
            this.renderer.domElement.style.cursor = '';
        }
    }

    private _getMaxCenterOffset(zoom: number): Vec2 {
        // Calculate how much the center can move while keeping the view within map bounds
        const container_width = this.container.clientWidth || 1;
        const container_height = this.container.clientHeight || 1;
        const aspect = container_width / container_height;
        const quad_size = 100;

        // In 3D mode, the quad is rotated 45°, so it extends to ±(quad_size/2 * √2) in world X and Z
        // In center units (divided by quad_size), the map half-extent is √2/2 ≈ 0.707
        // In 2D mode, no 45° rotation, so map half-extent is simply 0.5
        const map_half_extent = this.mode === '3d' ? Math.SQRT2 / 2 : 0.5;

        // Frustum size in world units
        const frustum_height = quad_size / zoom;
        const frustum_width = frustum_height * aspect;

        // Convert frustum to center units
        const view_half_width = frustum_width / 2 / quad_size;
        const view_half_height = frustum_height / 2 / quad_size;

        // Max offset allows the edge of map to reach edge of view
        const max_x = Math.max(0, map_half_extent - view_half_width);
        const max_y = Math.max(0, map_half_extent - view_half_height);

        return { x: max_x, y: max_y };
    }

    private _renderMapImage() {
        // Cancel any pending render frame
        if (this._render_frame_id !== null) {
            cancelAnimationFrame(this._render_frame_id);
        }

        // Debounce to the next animation frame
        this._render_frame_id = requestAnimationFrame(() => {
            this._render_frame_id = null;
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

        // Remove any existing injected styles
        const existing_style = svg_element.querySelector(
            'style[data-injected]',
        );
        if (existing_style) {
            existing_style.remove();
        }

        // Inject the new styles at the beginning of the SVG
        if (this.styles_string) {
            // Extract CSS content from styles_string (which is "<style>...</style>")
            const style_content = this.styles_string
                .replace('<style>', '')
                .replace('</style>', '');

            // Create style element in SVG namespace so it works when serialized
            const style_element = doc.createElementNS(
                'http://www.w3.org/2000/svg',
                'style',
            );
            style_element.setAttribute('data-injected', 'true');
            style_element.textContent = style_content;
            svg_element.insertBefore(style_element, svg_element.firstChild);
        }

        // Get SVG dimensions for aspect ratio calculation
        let svg_width = 0;
        let svg_height = 0;
        const view_box = svg_element.getAttribute('viewBox');

        if (view_box) {
            const parts = view_box.split(/[\s,]+/).map(parseFloat);
            if (parts.length >= 4) {
                svg_width = parts[2];
                svg_height = parts[3];
            }
        }

        if (!svg_width || !svg_height) {
            const width_attr = svg_element.getAttribute('width');
            const height_attr = svg_element.getAttribute('height');
            svg_width = width_attr ? parseFloat(width_attr) : 0;
            svg_height = height_attr ? parseFloat(height_attr) : 0;
        }

        // Default to 1:1 if we can't determine dimensions
        if (!svg_width || !svg_height) {
            svg_width = 1;
            svg_height = 1;
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

            // Use 8192 if high resolution is enabled and device supports it, otherwise 4096
            const max_texture_size = this.renderer.capabilities.maxTextureSize;
            const base_size = 4096;
            const high_res_size = 8192;
            const target_size =
                this.high_resolution && max_texture_size >= high_res_size
                    ? high_res_size
                    : base_size;
            const canvas = document.createElement('canvas');
            canvas.width = target_size;
            canvas.height = target_size;
            const ctx = canvas.getContext('2d');
            if (!ctx) {
                console.error('Failed to get canvas context');
                return;
            }

            // Calculate scale to fit within 4096x4096 while maintaining aspect ratio
            const scale = Math.min(
                target_size / svg_width,
                target_size / svg_height,
            );
            const scaled_width = svg_width * scale;
            const scaled_height = svg_height * scale;

            // Center the image on the canvas
            const offset_x = (target_size - scaled_width) / 2;
            const offset_y = (target_size - scaled_height) / 2;

            // Clear canvas and draw the SVG centered
            ctx.clearRect(0, 0, target_size, target_size);
            ctx.drawImage(
                svg_image,
                offset_x,
                offset_y,
                scaled_width,
                scaled_height,
            );

            // Create final image from canvas
            const final_image = new Image();
            final_image.onload = () => {
                this.map_image = final_image;
                this._renderMap();
            };
            final_image.onerror = () => {
                console.error('Failed to create final map image');
            };
            final_image.src = canvas.toDataURL('image/png');
        };
        svg_image.onerror = () => {
            URL.revokeObjectURL(url);
            console.error('Failed to load map image');
        };
        svg_image.src = url;
    }

    private _renderMap() {
        if (!this.map_image) return;

        const quad_size = 100;

        // Only recreate texture and quad when the image changes
        if (this.map_image !== this._texture_image) {
            // Dispose old resources
            if (this._quad) {
                this.scene.remove(this._quad);
                this._quad.geometry.dispose();
                const material = this._quad.material as THREE.MeshBasicMaterial;
                material.dispose();
            }
            if (this._texture) {
                this._texture.dispose();
            }

            // Create new texture from the map image
            this._texture = new THREE.Texture(this.map_image);
            this._texture.needsUpdate = true;
            this._texture.generateMipmaps = true;
            this._texture.minFilter = THREE.LinearMipmapLinearFilter; // Trilinear filtering
            this._texture.magFilter = THREE.LinearFilter;
            this._texture.colorSpace = THREE.SRGBColorSpace;
            this._texture_image = this.map_image;

            // Create a plane geometry for the map quad
            const geometry = new THREE.PlaneGeometry(quad_size, quad_size);
            const material = new THREE.MeshBasicMaterial({
                map: this._texture,
                side: THREE.DoubleSide,
                transparent: true,
            });
            this._quad = new THREE.Mesh(geometry, material);

            // Rotate quad to lie flat on XZ plane using quaternion for clarity
            // First rotate -90° around X to lay flat, then optionally 45° around Y for diamond (3D mode)
            this._applyQuadRotation();

            this.scene.add(this._quad);
        }

        if (!this._quad) return;

        // Apply rotation around Y axis (world up)
        this._applyQuadRotation();

        const container_width = this.container.clientWidth || 1;
        const container_height = this.container.clientHeight || 1;
        const aspect = container_width / container_height;

        // Calculate frustum size based on zoom
        const frustum_height = quad_size / this.zoom;
        const frustum_width = frustum_height * aspect;

        this.camera.left = -frustum_width / 2;
        this.camera.right = frustum_width / 2;
        this.camera.top = frustum_height / 2;
        this.camera.bottom = -frustum_height / 2;
        this.camera.updateProjectionMatrix();

        // Convert center offset to world space
        const center_x = this.center.x * quad_size;
        const center_z = this.center.y * quad_size;
        const camera_distance = 500;

        if (this.mode === '2d') {
            // 2D mode: camera looks straight down
            this.camera.position.set(center_x, camera_distance, center_z);
            this.camera.lookAt(center_x, 0, center_z);
        } else {
            // 3D mode: Set up orthographic camera for 2:1 isometric projection
            // 2:1 isometric angle: arctan(0.5) ≈ 26.565°
            const iso_angle = Math.atan(0.5);

            // Camera position: elevated and back from the target point
            this.camera.position.set(
                center_x,
                camera_distance * Math.sin(iso_angle),
                center_z + camera_distance * Math.cos(iso_angle),
            );

            // Look at the center point on the ground
            this.camera.lookAt(center_x, 0, center_z);
        }

        // Update renderer size if container changed
        if (
            this.renderer.domElement.width !== container_width ||
            this.renderer.domElement.height !== container_height
        ) {
            this.renderer.setSize(container_width, container_height);
        }

        // Render the scene
        this.renderer.render(this.scene, this.camera);

        // Update overlay positions after rendering
        this._updateOverlayPositions();
    }

    /**
     * Apply rotation to the quad based on current mode and rotation angle.
     * In 2D mode: no rotation applied (top-down view)
     * In 3D mode: applies 45° diamond offset plus user rotation
     */
    private _applyQuadRotation() {
        if (!this._quad) return;

        // Rotate -90° around X to lay flat on XZ plane
        const quat_x = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            -Math.PI / 2,
        );

        // In 3D mode, add 45° diamond offset plus user rotation; in 2D mode, no Y rotation
        const y_rotation = this.mode === '3d' ? Math.PI / 4 + this.rotation : 0;
        const quat_y = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            y_rotation,
        );

        this._quad.quaternion.copy(quat_x).premultiply(quat_y);
    }

    private _updateOverlayPositions() {
        if (!this._quad || !this.map?.element_bounds) return;

        const container_width = this.container.clientWidth || 1;
        const container_height = this.container.clientHeight || 1;
        const quad_size = 100;

        for (const instance of this._overlay_instances) {
            const { overlay, element } = instance;

            // Get the normalized position (0-1) on the map
            let norm_x: number;
            let norm_y: number;
            let norm_width = 0;
            let norm_height = 0;

            if (typeof overlay.ref === 'string') {
                // Reference is an element ID - look up bounds
                const bounds = this.map.element_bounds.get(overlay.ref);
                if (!bounds) {
                    element.style.display = 'none';
                    continue;
                }
                if (overlay.type === 'box') {
                    // Apply box_scale to adjust size relative to reference (default 1 = 100%)
                    // In 3D mode, also apply FEATURE_BOUNDS_SCALE_3D to account for isometric projection
                    const base_scale = overlay.box_scale ?? 1;
                    const scale =
                        this.mode === '3d'
                            ? base_scale * FEATURE_BOUNDS_SCALE_3D
                            : base_scale;
                    const scaled_width = bounds.width * scale;
                    const scaled_height = bounds.height * scale;
                    // Center the scaled box on the original bounds center
                    const center_x = bounds.x + bounds.width / 2;
                    const center_y = bounds.y + bounds.height / 2;
                    norm_x = center_x - scaled_width / 2;
                    norm_y = center_y - scaled_height / 2;
                    norm_width = scaled_width;
                    norm_height = scaled_height;
                } else {
                    // Point type - center of the element
                    norm_x = bounds.x + bounds.width / 2;
                    norm_y = bounds.y + bounds.height / 2;
                }
            } else {
                // Reference is a Vec2 coordinate (0-1 range)
                norm_x = overlay.ref.x;
                norm_y = overlay.ref.y;
            }

            element.style.display = '';

            // Convert normalized coordinates to world space on the quad
            // The quad is centered at origin, so (0,0) in norm space maps to (-quad_size/2, -quad_size/2)
            // and (1,1) maps to (quad_size/2, quad_size/2)
            // Then the quad is rotated 45° around Y axis

            // Get the world position(s) we need to project
            const world_positions = this._normToWorldPositions(
                norm_x,
                norm_y,
                norm_width,
                norm_height,
                quad_size,
            );

            if (overlay.type === 'box' && norm_width > 0 && norm_height > 0) {
                // For box overlays, position and size to match the element bounds
                const screen_positions = world_positions.map((wp) =>
                    this._worldToScreen(wp, container_width, container_height),
                );

                // Find bounding box of projected corners
                const min_x = Math.min(...screen_positions.map((p) => p.x));
                const max_x = Math.max(...screen_positions.map((p) => p.x));
                const min_y = Math.min(...screen_positions.map((p) => p.y));
                const max_y = Math.max(...screen_positions.map((p) => p.y));

                const screen_width = max_x - min_x;
                const screen_height = max_y - min_y;

                element.style.left = `${min_x}px`;
                element.style.top = `${min_y}px`;
                element.style.width = `${screen_width}px`;
                element.style.height = `${screen_height}px`;
                element.style.transform = '';
            } else {
                // For point overlays, just position at the center
                const screen_pos = this._worldToScreen(
                    world_positions[0],
                    container_width,
                    container_height,
                );

                element.style.left = `${screen_pos.x}px`;
                element.style.top = `${screen_pos.y}px`;
                element.style.width = '';
                element.style.height = '';
                element.style.transform = 'translate(-50%, -50%)';

                // Apply zoom scaling if requested
                if (overlay.scale_with_zoom) {
                    element.style.transform = `translate(-50%, -50%) scale(${this.zoom})`;
                }
            }
        }
    }

    /**
     * Convert normalized map coordinates to world positions on the rotated quad.
     * Returns an array of positions - single point for point type, 4 corners for box type.
     */
    private _normToWorldPositions(
        norm_x: number,
        norm_y: number,
        norm_width: number,
        norm_height: number,
        quad_size: number,
    ): THREE.Vector3[] {
        // The texture is applied to a quad that lies on the XZ plane (after rotation)
        // The quad's local coordinates before rotation:
        // - X: -quad_size/2 to quad_size/2 (maps to texture U: 0 to 1)
        // - Y: -quad_size/2 to quad_size/2 (maps to texture V: 0 to 1, but inverted)
        // After rotation: the quad is rotated -90° around X, then 45° around Y

        const positions: THREE.Vector3[] = [];

        if (norm_width > 0 && norm_height > 0) {
            // Box type - return 4 corners
            const corners = [
                { x: norm_x, y: norm_y }, // top-left
                { x: norm_x + norm_width, y: norm_y }, // top-right
                { x: norm_x + norm_width, y: norm_y + norm_height }, // bottom-right
                { x: norm_x, y: norm_y + norm_height }, // bottom-left
            ];
            for (const corner of corners) {
                positions.push(
                    this._normToSingleWorldPos(corner.x, corner.y, quad_size),
                );
            }
        } else {
            // Point type - single position
            positions.push(
                this._normToSingleWorldPos(norm_x, norm_y, quad_size),
            );
        }

        return positions;
    }

    private _normToSingleWorldPos(
        norm_x: number,
        norm_y: number,
        quad_size: number,
    ): THREE.Vector3 {
        // Convert SVG normalized coords (0-1) to texture coords (0-1)
        // The SVG is rendered centered on a square texture, so we need to account for aspect ratio
        const aspect = this.map?.aspect_ratio ?? 1;
        let texture_u: number;
        let texture_v: number;

        if (aspect >= 1) {
            // Wider than tall: SVG fills width, centered vertically
            texture_u = norm_x;
            const v_offset = (1 - 1 / aspect) / 2;
            texture_v = v_offset + norm_y / aspect;
        } else {
            // Taller than wide: SVG fills height, centered horizontally
            const u_offset = (1 - aspect) / 2;
            texture_u = u_offset + norm_x * aspect;
            texture_v = norm_y;
        }

        // Convert texture coords to local quad coords
        // Note: texture V is inverted relative to Y, so we flip Y
        const local_x = (texture_u - 0.5) * quad_size;
        const local_y = (0.5 - texture_v) * quad_size;

        // Create a point in local quad space (on XY plane before rotation)
        const local_point = new THREE.Vector3(local_x, local_y, 0);

        // Apply the same rotation as the quad
        const quat_x = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(1, 0, 0),
            -Math.PI / 2,
        );
        // In 3D mode, add 45° diamond offset plus user rotation; in 2D mode, no Y rotation
        const y_rotation = this.mode === '3d' ? Math.PI / 4 + this.rotation : 0;
        const quat_y = new THREE.Quaternion().setFromAxisAngle(
            new THREE.Vector3(0, 1, 0),
            y_rotation,
        );
        const combined_quat = quat_x.clone().premultiply(quat_y);

        local_point.applyQuaternion(combined_quat);

        return local_point;
    }

    /**
     * Project a world position to screen coordinates.
     */
    private _worldToScreen(
        world_pos: THREE.Vector3,
        container_width: number,
        container_height: number,
    ): Vec2 {
        // Clone to avoid modifying original
        const pos = world_pos.clone();

        // Project to normalized device coordinates
        pos.project(this.camera);

        // Convert from NDC (-1 to 1) to screen coordinates
        const screen_x = ((pos.x + 1) / 2) * container_width;
        const screen_y = ((-pos.y + 1) / 2) * container_height;

        return { x: screen_x, y: screen_y };
    }

    /**
     * Handle action events (click, pointer events, etc.) on the map.
     */
    private _handleActionEvent(event_name: string, e: PointerEvent) {
        if (!this._quad || !this.map?.element_bounds) return;

        // Ignore actions if user was panning for more than 200ms
        if (this._pan_exceeded_threshold) return;

        // For click events, ignore if user was dragging (moved more than 5 pixels)
        if (event_name === 'click' && this._action_pointerdown_pos) {
            const dx = e.clientX - this._action_pointerdown_pos.x;
            const dy = e.clientY - this._action_pointerdown_pos.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            if (distance > 5) return;
        }

        const rect = this.renderer.domElement.getBoundingClientRect();
        const ndc_x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
        const ndc_y = -((e.clientY - rect.top) / rect.height) * 2 + 1;

        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(ndc_x, ndc_y), this.camera);

        const intersects = raycaster.intersectObject(this._quad);
        if (intersects.length === 0) return;

        // Get the UV coordinates of the intersection
        const uv = intersects[0].uv;
        if (!uv) return;

        // Convert UV to normalized map coordinates
        const norm = this._uvToNormalized(uv.x, uv.y);

        const now = Date.now();
        const debounce_ms = 300;

        // Check which actions should be triggered
        for (const action of this._actions) {
            if (!action.events.includes(event_name)) continue;

            const bounds = this.map.element_bounds.get(action.ref);
            if (!bounds) continue;

            // Check if the event position is within the element's bounds
            if (
                norm.x >= bounds.x &&
                norm.x <= bounds.x + bounds.width &&
                norm.y >= bounds.y &&
                norm.y <= bounds.y + bounds.height
            ) {
                // Debounce: skip if callback was triggered within 300ms
                const debounce_key = `${action.ref}:${event_name}`;
                const last_triggered =
                    this._action_last_triggered.get(debounce_key) || 0;
                if (now - last_triggered < debounce_ms) continue;

                this._action_last_triggered.set(debounce_key, now);
                action.callback(norm);
            }
        }
    }

    /**
     * Convert THREE.js UV coordinates to normalized map coordinates (0-1 range).
     * Accounts for aspect ratio and texture coordinate conventions.
     */
    private _uvToNormalized(u: number, v: number): Vec2 {
        const aspect = this.map?.aspect_ratio ?? 1;

        // Convert THREE.js UV to texture/image coordinates
        // THREE.js v: 0 = bottom of geometry, 1 = top of geometry
        // With flipY (default), geometry top maps to image top
        // Image/canvas y: 0 = top, 1 = bottom (normalized)
        const texture_u = u;
        const texture_v = 1 - v;

        let norm_x: number;
        let norm_y: number;

        if (aspect >= 1) {
            // Wider than tall: SVG fills width, centered vertically
            norm_x = texture_u;
            const v_offset = (1 - 1 / aspect) / 2;
            norm_y = (texture_v - v_offset) * aspect;
        } else {
            // Taller than wide: SVG fills height, centered horizontally
            const u_offset = (1 - aspect) / 2;
            norm_x = (texture_u - u_offset) / aspect;
            norm_y = texture_v;
        }

        return { x: norm_x, y: norm_y };
    }

    /** Notify listeners of view changes from user interaction */
    private _notifyViewChange() {
        if (this.onViewChange) {
            this.onViewChange({
                zoom: this.zoom,
                center: { ...this.center },
                rotation: this.rotation,
            });
        }
    }
}
