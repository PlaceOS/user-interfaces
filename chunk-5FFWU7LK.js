import {
  setAuthCookie
} from "./chunk-PIUHOCXA.js";
import {
  It,
  Ve,
  X,
  isMobileSafari,
  randomString
} from "./chunk-VR5QVDIH.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/map-viewer.class.ts
var MAX_ZOOM = 10;
var MIN_ZOOM = 1;
var VIEW_PADDING = 0.05;
var DESKTOP_TEXTURE_MEGAPIXELS = 16;
var MOBILE_TEXTURE_MEGAPIXELS = 4;
var FIXED_TEXTURE_CONTAINER_MULTIPLIER = 2;
var MAX_TEXTURE_DIMENSION = 8192;
function isMobileDevice() {
  if (typeof window === "undefined" || !window.matchMedia)
    return false;
  const coarse_pointer = window.matchMedia("(pointer: coarse)").matches;
  const small_viewport = window.matchMedia("(max-width: 1024px)").matches;
  return coarse_pointer && small_viewport;
}
function cleanCssSelector(selector) {
  const escaped = selector.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, "\\$&");
  return escaped.split(" ").map((part) => part.replace(/^\\/, "")).join(" ");
}
function getSvgDimensions(svg_element) {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  const view_box = svg_element.getAttribute("viewBox");
  if (view_box) {
    const parts = view_box.split(/[\s,]+/).map(parseFloat);
    if (parts.length >= 4) {
      x = parts[0] || 0;
      y = parts[1] || 0;
      width = parts[2];
      height = parts[3];
    }
  }
  if (!width || !height) {
    const width_attr = svg_element.getAttribute("width");
    const height_attr = svg_element.getAttribute("height");
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
    }
  }
  return { x, y, width: width || 1, height: height || 1 };
}
function getElementBoundsInSvgSpace(element, svg_inverse_ctm) {
  const bbox = element.getBBox();
  const ctm = svg_inverse_ctm && element.getScreenCTM?.();
  if (!ctm)
    return bbox;
  const matrix = svg_inverse_ctm.multiply(ctm);
  const corners = [
    { x: bbox.x, y: bbox.y },
    { x: bbox.x + bbox.width, y: bbox.y },
    { x: bbox.x, y: bbox.y + bbox.height },
    { x: bbox.x + bbox.width, y: bbox.y + bbox.height }
  ].map((p) => ({
    x: matrix.a * p.x + matrix.c * p.y + matrix.e,
    y: matrix.b * p.x + matrix.d * p.y + matrix.f
  }));
  const min_x = Math.min(...corners.map((p) => p.x));
  const min_y = Math.min(...corners.map((p) => p.y));
  return {
    x: min_x,
    y: min_y,
    width: Math.max(...corners.map((p) => p.x)) - min_x,
    height: Math.max(...corners.map((p) => p.y)) - min_y
  };
}
function generateElementBounds(data) {
  const bounds_map = /* @__PURE__ */ new Map();
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.visibility = "hidden";
  container.style.pointerEvents = "none";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.innerHTML = data;
  document.body.appendChild(container);
  const svg_element = container.querySelector("svg");
  if (!svg_element) {
    document.body.removeChild(container);
    return { bounds: bounds_map, aspect_ratio: 1 };
  }
  const { x: svg_x, y: svg_y, width: svg_width, height: svg_height } = getSvgDimensions(svg_element);
  const aspect_ratio = svg_width / svg_height;
  const svg_ctm = svg_element.getScreenCTM?.();
  const svg_inverse_ctm = svg_ctm ? svg_ctm.inverse() : null;
  const elements_with_id = svg_element.querySelectorAll("[id]");
  elements_with_id.forEach((element) => {
    const id = element.getAttribute("id");
    if (!id)
      return;
    if (typeof element.getBBox === "function") {
      try {
        const bbox = getElementBoundsInSvgSpace(element, svg_inverse_ctm);
        bounds_map.set(id, {
          x: (bbox.x - svg_x) / svg_width,
          y: (bbox.y - svg_y) / svg_height,
          w: bbox.width / svg_width,
          h: bbox.height / svg_height
        });
      } catch {
      }
    }
  });
  document.body.removeChild(container);
  return { bounds: bounds_map, aspect_ratio };
}
var MapStore = class {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  get(path) {
    if (!this.store.has(path)) {
      const details = this._load(path);
      details.catch(() => this.store.delete(path));
      this.store.set(path, details);
    }
    return this.store.get(path);
  }
  async _load(path) {
    while (!It()) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    const options = {};
    const tkn = X();
    const is_same_origin = new URL(path, location.origin).origin === location.origin;
    if (tkn && is_same_origin) {
      if (!isMobileSafari()) {
        options.headers = tkn === "x-api-key" ? { "x-api-key": Ve() } : { Authorization: `Bearer ${tkn}` };
      } else {
        setAuthCookie("/");
      }
    }
    const response = await fetch(path, options);
    if (!response.ok)
      throw new Error("Failed to load map");
    const data = await response.text();
    const { bounds, aspect_ratio } = generateElementBounds(data);
    return { raw_data: data, element_bounds: bounds, aspect_ratio };
  }
};
var STORE = new MapStore();
function getMapDetails(url) {
  return STORE.get(url);
}
var MapViewer = class {
  constructor(el) {
    this.map_image = null;
    this.styles_string = "";
    this.center = { x: 0.5, y: 0.5 };
    this.zoom = 1;
    this.fixed_resolution_megapixels = 0;
    this.disable_zoom = false;
    this.disable_pan = false;
    this.onViewChange = null;
    this.debug = false;
    this.debug_info = {
      /** Pointer position in normalised map coordinates */
      pointer: null,
      /** ID of the smallest map element under the pointer */
      hover_id: "",
      /** ID of the map element explicitly highlighted from debug controls */
      highlight_id: "",
      /** Duration of the last map draw in milliseconds */
      last_draw_ms: 0,
      /** Number of map draws over the last second */
      draws_last_second: 0
    };
    this._map_path = "";
    this._image_generation = 0;
    this._texture_width = 0;
    this._texture_height = 0;
    this._image_frame_id = null;
    this._draw_frame_id = null;
    this._notify_frame_id = null;
    this._debug_draw_count = 0;
    this._debug_count_start = 0;
    this._events = /* @__PURE__ */ new Map();
    this._resize_observer = null;
    this._pointers = /* @__PURE__ */ new Map();
    this._is_panning = false;
    this._pinch_distance = null;
    this._pan_start_time = null;
    this._pan_exceeded_threshold = false;
    this._overlay_instances = [];
    this._actions = [];
    this._action_event_handlers = /* @__PURE__ */ new Map();
    this._action_pointerdown_pos = null;
    this._action_last_triggered = /* @__PURE__ */ new Map();
    this.container = el;
    this.id = `m_view-${randomString(8, "0123456789ABCDEF")}`;
    this.container.innerHTML = "";
    this.container.style.overflow = "hidden";
    this.container.style.touchAction = "none";
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position: absolute; inset: 0; pointer-events: none;";
    this._ctx = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
    this.overlays = document.createElement("div");
    this.overlays.id = `${this.id}-overlays`;
    this.overlays.style.cssText = "position: absolute; inset: 0; z-index: 0; pointer-events: none;";
    this.container.appendChild(this.overlays);
    this._resize_observer = new ResizeObserver(() => this._onResize());
    this._resize_observer.observe(this.container);
    this._events.set("wheel", (e) => this._onWheel(e));
    this.container.addEventListener("wheel", this._events.get("wheel"), {
      passive: false
    });
    this._events.set("pointerdown", (e) => this._onPointerDown(e));
    this._events.set("pointermove", (e) => this._onPointerMove(e));
    this._events.set("pointerup", (e) => this._onPointerUp(e));
    this.container.addEventListener("pointerdown", this._events.get("pointerdown"));
    window.addEventListener("pointermove", this._events.get("pointermove"));
    window.addEventListener("pointerup", this._events.get("pointerup"));
    window.addEventListener("pointercancel", this._events.get("pointerup"));
  }
  async setMap(path) {
    this._map_path = path;
    const map = await STORE.get(path);
    if (this._map_path !== path)
      return;
    this.map = map;
    this._renderMapImage();
  }
  setCenter(point) {
    const center = this._clampCenter(point);
    if (center.x === this.center.x && center.y === this.center.y)
      return;
    this.center = center;
    this._renderMap();
  }
  setZoom(new_zoom) {
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === this.zoom)
      return;
    this.zoom = new_zoom;
    this._renderMap();
  }
  /**
   * Override the texture budget for fixed (zoom-disabled) maps, in
   * megapixels. Pass 0 to restore the default of twice the container pixels.
   */
  setFixedResolution(megapixels) {
    const value = megapixels > 0 ? megapixels : 0;
    if (this.fixed_resolution_megapixels === value)
      return;
    this.fixed_resolution_megapixels = value;
    if (this.disable_zoom)
      this._renderMapImage();
  }
  setOptions(options) {
    const was_zoom_disabled = this.disable_zoom;
    this.disable_zoom = !!options?.disable_zoom;
    this.disable_pan = !!options?.disable_pan;
    if (was_zoom_disabled !== this.disable_zoom)
      this._renderMapImage();
  }
  /** Number of overlays currently attached to the map */
  get overlay_count() {
    return this._overlay_instances.length;
  }
  /** Human-readable description of the current texture sizing mode, for debug */
  get texture_mode() {
    if (this.disable_zoom) {
      return this.fixed_resolution_megapixels ? `fixed ${this.fixed_resolution_megapixels}MP` : `fixed ${FIXED_TEXTURE_CONTAINER_MULTIPLIER}\xD7 container`;
    }
    return isMobileDevice() ? `mobile ${MOBILE_TEXTURE_MEGAPIXELS}MP` : `desktop ${DESKTOP_TEXTURE_MEGAPIXELS}MP`;
  }
  /** Toggle rendering of debugging info over the map */
  setDebug(enabled) {
    if (this.debug === enabled)
      return;
    this.debug = enabled;
    if (enabled) {
      const move = (e) => {
        this.debug_info.pointer = this._eventToMap(e);
        this.debug_info.hover_id = this._elementAt(this.debug_info.pointer);
        this._renderMap();
      };
      const leave = () => {
        this.debug_info.pointer = null;
        this.debug_info.hover_id = "";
        this._renderMap();
      };
      const click = (e) => {
        const point = this._eventToMap(e);
        console.log(`[MAP][DEBUG] Click at { x: ${point.x.toFixed(4)}, y: ${point.y.toFixed(4)} } on "${this._elementAt(point) || "no element"}"`);
      };
      this._events.set("debug_move", move);
      this._events.set("debug_leave", leave);
      this._events.set("debug_click", click);
      this.container.addEventListener("pointermove", move);
      this.container.addEventListener("pointerleave", leave);
      this.container.addEventListener("click", click);
    } else {
      for (const name of ["debug_move", "debug_leave", "debug_click"]) {
        const handler = this._events.get(name);
        if (!handler)
          continue;
        const event_name = name === "debug_move" ? "pointermove" : name === "debug_leave" ? "pointerleave" : "click";
        this.container.removeEventListener(event_name, handler);
        this._events.delete(name);
      }
      this.debug_info.pointer = null;
      this.debug_info.hover_id = "";
      this.debug_info.highlight_id = "";
    }
    this._applyOverlayOutlines();
    this._renderMap();
  }
  /** Highlight a map element while debug mode is active */
  setDebugHighlight(ref) {
    if (this.debug_info.highlight_id === ref)
      return;
    this.debug_info.highlight_id = ref;
    if (this.debug)
      this._renderMap();
  }
  /** Center the view on the map element with the given ID */
  focusOn(ref) {
    const bounds = this.map?.element_bounds.get(ref);
    if (!bounds)
      return;
    this.setCenter({
      x: bounds.x + bounds.w / 2,
      y: bounds.y + bounds.h / 2
    });
    this._notifyViewChange();
  }
  setOverlays(overlays) {
    for (const instance of this._overlay_instances) {
      instance.element.remove();
    }
    this._overlay_instances = [];
    for (const overlay of overlays) {
      const element = document.createElement("div");
      element.style.cssText = "position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;";
      if (overlay.z_index != null) {
        element.style.zIndex = `${overlay.z_index}`;
      }
      if (overlay.hover) {
        element.classList.add("map-overlay-hover");
      }
      if (typeof overlay.contents === "string") {
        element.innerHTML = overlay.contents;
      } else {
        element.appendChild(overlay.contents);
      }
      this.overlays.appendChild(element);
      this._overlay_instances.push({ overlay, element });
    }
    this._applyOverlayOutlines();
    this._updateOverlayPositions();
  }
  /** Outline overlay elements while debug mode is active */
  _applyOverlayOutlines() {
    for (const { element } of this._overlay_instances) {
      element.style.outline = this.debug ? "1px dashed #f0f" : "";
    }
  }
  /** ID of the smallest map element containing the given point */
  _elementAt(point) {
    let best = "";
    let best_area = Number.POSITIVE_INFINITY;
    for (const [id, bounds] of this.map?.element_bounds || []) {
      if (point.x < bounds.x || point.x > bounds.x + bounds.w || point.y < bounds.y || point.y > bounds.y + bounds.h) {
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
  setActions(actions) {
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = actions;
    const event_names = new Set(actions.flatMap((_) => _.events));
    for (const event_name of event_names) {
      const handler = (e) => this._handleActionEvent(event_name, e);
      this._action_event_handlers.set(event_name, handler);
      this.container.addEventListener(event_name, handler);
    }
    if (!this._events.has("action_pointerdown")) {
      const handler = (e) => {
        this._action_pointerdown_pos = { x: e.clientX, y: e.clientY };
      };
      this._events.set("action_pointerdown", handler);
      this.container.addEventListener("pointerdown", handler);
    }
  }
  /** Apply CSS to the map's SVG elements. Mapping of CSS selector to style declaration */
  setStyles(styles) {
    let style_content = "";
    for (const [selector, css_text] of Object.entries(styles)) {
      if (css_text) {
        style_content += `svg ${cleanCssSelector(selector)} { ${css_text} }
`;
      }
    }
    if (style_content !== this.styles_string) {
      this.styles_string = style_content;
      this._renderMapImage();
    }
  }
  destroy() {
    this.setDebug(false);
    this._resize_observer?.disconnect();
    this._resize_observer = null;
    this.container.removeEventListener("wheel", this._events.get("wheel"));
    this.container.removeEventListener("pointerdown", this._events.get("pointerdown"));
    window.removeEventListener("pointermove", this._events.get("pointermove"));
    window.removeEventListener("pointerup", this._events.get("pointerup"));
    window.removeEventListener("pointercancel", this._events.get("pointerup"));
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = [];
    if (this._events.has("action_pointerdown")) {
      const handler = this._events.get("action_pointerdown");
      this.container.removeEventListener("pointerdown", handler);
      this._events.delete("action_pointerdown");
    }
    this._action_pointerdown_pos = null;
    this._image_generation++;
    this._map_path = "";
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
    for (const instance of this._overlay_instances) {
      instance.element.remove();
    }
    this._overlay_instances = [];
    this.map_image = null;
    this.container.innerHTML = "";
  }
  /**
   * Pixels per normalised map unit on each axis at the given zoom level.
   * At zoom 1 the whole map image fits within the view.
   */
  _viewScale(zoom = this.zoom) {
    const aspect = this.map?.aspect_ratio || 1;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const fit_height = Math.min(height, width / aspect) * (1 - VIEW_PADDING * 2) * zoom;
    return { x: fit_height * aspect, y: fit_height };
  }
  /** Convert a pointer event position to normalised map coordinates (0-1) */
  _eventToMap(e, rect = this.container.getBoundingClientRect()) {
    const scale = this._viewScale();
    return {
      x: (e.clientX - rect.left - rect.width / 2) / scale.x + this.center.x,
      y: (e.clientY - rect.top - rect.height / 2) / scale.y + this.center.y
    };
  }
  _clampCenter(point) {
    return {
      x: Math.max(0, Math.min(1, point.x)),
      y: Math.max(0, Math.min(1, point.y))
    };
  }
  /** Zoom about a fixed screen position so the point under it stays in place */
  _zoomAboutPoint(new_zoom, position) {
    const old_zoom = this.zoom;
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === old_zoom)
      return;
    const rect = this.container.getBoundingClientRect();
    const fixed_point = this._eventToMap({ clientX: position.x, clientY: position.y }, rect);
    const new_scale = this._viewScale(new_zoom);
    const new_center = {
      x: fixed_point.x - (position.x - rect.left - rect.width / 2) / new_scale.x,
      y: fixed_point.y - (position.y - rect.top - rect.height / 2) / new_scale.y
    };
    this.zoom = new_zoom;
    this.center = this._clampCenter(new_center);
    this._renderMap();
    this._notifyViewChange();
  }
  _onWheel(e) {
    e.preventDefault();
    if (this.disable_zoom || !this.map_image)
      return;
    const zoom_delta = e.deltaY > 0 ? 0.97 : 1.03;
    this._zoomAboutPoint(this.zoom * zoom_delta, {
      x: e.clientX,
      y: e.clientY
    });
  }
  _onPointerDown(e) {
    if (!this.map_image)
      return;
    if (e.button !== 0)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2) {
      this._is_panning = false;
      const [p1, p2] = [...this._pointers.values()];
      this._pinch_distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      return;
    }
    if (this.disable_pan)
      return;
    this._is_panning = true;
    this._pan_start_time = Date.now();
    this._pan_exceeded_threshold = false;
    this.container.style.cursor = "grabbing";
  }
  _onPointerMove(e) {
    const last = this._pointers.get(e.pointerId);
    if (!last)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2 && this._pinch_distance) {
      if (this.disable_zoom)
        return;
      const [p1, p2] = [...this._pointers.values()];
      const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      if (distance > 0) {
        this._zoomAboutPoint(this.zoom * (distance / this._pinch_distance), { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 });
        this._pinch_distance = distance;
      }
      return;
    }
    if (!this._is_panning)
      return;
    if (this._pan_start_time && !this._pan_exceeded_threshold && Date.now() - this._pan_start_time > 200) {
      this._pan_exceeded_threshold = true;
    }
    const scale = this._viewScale();
    this.center = this._clampCenter({
      x: this.center.x - (e.clientX - last.x) / scale.x,
      y: this.center.y - (e.clientY - last.y) / scale.y
    });
    this._renderMap();
    this._notifyViewChange();
  }
  _onPointerUp(e) {
    this._pointers.delete(e.pointerId);
    if (this._pointers.size < 2) {
      this._pinch_distance = null;
    }
    if (this._is_panning && this._pointers.size === 0) {
      this._is_panning = false;
      this.container.style.cursor = "";
    }
  }
  _onResize() {
    this._renderMap();
    if (this.disable_zoom && !this.fixed_resolution_megapixels) {
      const { width, height } = this._textureDimensions();
      if (width !== this._texture_width || height !== this._texture_height) {
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
  _targetTexturePixels() {
    if (this.disable_zoom) {
      if (this.fixed_resolution_megapixels > 0) {
        return this.fixed_resolution_megapixels * 1e6;
      }
      const container_pixels = (this.container.clientWidth || 1) * (this.container.clientHeight || 1);
      return container_pixels * FIXED_TEXTURE_CONTAINER_MULTIPLIER;
    }
    const megapixels = isMobileDevice() ? MOBILE_TEXTURE_MEGAPIXELS : DESKTOP_TEXTURE_MEGAPIXELS;
    return megapixels * 1e6;
  }
  /**
   * Texture dimensions matching the SVG's aspect ratio with a total area of
   * `_targetTexturePixels()`. Each side is clamped to the maximum canvas
   * dimension, so very wide or tall maps render slightly below the budget.
   */
  _textureDimensions() {
    const aspect = this.map?.aspect_ratio || 1;
    const target_pixels = this._targetTexturePixels();
    const height = Math.sqrt(target_pixels / aspect);
    const width = height * aspect;
    return {
      width: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(width))),
      height: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(height)))
    };
  }
  _renderMapImage() {
    if (this._image_frame_id !== null) {
      cancelAnimationFrame(this._image_frame_id);
    }
    this._image_frame_id = requestAnimationFrame(() => {
      this._image_frame_id = null;
      this._doRenderMapImage();
    });
  }
  _doRenderMapImage() {
    if (!this.map?.raw_data)
      return;
    const generation = ++this._image_generation;
    const parser = new DOMParser();
    const doc = parser.parseFromString(this.map.raw_data, "image/svg+xml");
    const svg_element = doc.querySelector("svg");
    if (!svg_element)
      return;
    const { width, height } = this._textureDimensions();
    this._texture_width = width;
    this._texture_height = height;
    if (!svg_element.getAttribute("viewBox")) {
      const attr_width = parseFloat(svg_element.getAttribute("width") || "");
      const attr_height = parseFloat(svg_element.getAttribute("height") || "");
      if (attr_width > 0 && attr_height > 0) {
        svg_element.setAttribute("viewBox", `0 0 ${attr_width} ${attr_height}`);
      }
    }
    if (svg_element.getAttribute("viewBox")) {
      svg_element.setAttribute("width", `${width}`);
      svg_element.setAttribute("height", `${height}`);
    }
    if (this.styles_string) {
      const style_element = doc.createElementNS("http://www.w3.org/2000/svg", "style");
      style_element.textContent = this.styles_string;
      svg_element.appendChild(style_element);
    }
    const serializer = new XMLSerializer();
    const svg_string = serializer.serializeToString(svg_element);
    const svg_blob = new Blob([svg_string], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg_blob);
    const svg_image = new Image();
    svg_image.onload = () => {
      URL.revokeObjectURL(url);
      if (generation !== this._image_generation)
        return;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }
      ctx.drawImage(svg_image, 0, 0, width, height);
      this.map_image = canvas;
      this._renderMap();
    };
    svg_image.onerror = () => {
      URL.revokeObjectURL(url);
      console.error("Failed to load map image");
    };
    svg_image.src = url;
  }
  _renderMap() {
    if (this._draw_frame_id !== null)
      return;
    this._draw_frame_id = requestAnimationFrame(() => {
      this._draw_frame_id = null;
      this._drawMap();
    });
  }
  _drawMap() {
    if (!this.map_image)
      return;
    const draw_start = this.debug ? performance.now() : 0;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const dpr = window.devicePixelRatio || 1;
    if (this.canvas.width !== Math.round(width * dpr) || this.canvas.height !== Math.round(height * dpr)) {
      this.canvas.width = Math.round(width * dpr);
      this.canvas.height = Math.round(height * dpr);
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
    }
    const scale = this._viewScale();
    const view_left = this.center.x - width / 2 / scale.x;
    const view_top = this.center.y - height / 2 / scale.y;
    const sx0 = Math.max(0, view_left);
    const sy0 = Math.max(0, view_top);
    const sx1 = Math.min(1, view_left + width / scale.x);
    const sy1 = Math.min(1, view_top + height / scale.y);
    this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._ctx.clearRect(0, 0, width, height);
    if (sx1 > sx0 && sy1 > sy0) {
      this._ctx.imageSmoothingEnabled = true;
      this._ctx.imageSmoothingQuality = "high";
      const img_w = this.map_image.width;
      const img_h = this.map_image.height;
      this._ctx.drawImage(this.map_image, sx0 * img_w, sy0 * img_h, (sx1 - sx0) * img_w, (sy1 - sy0) * img_h, (sx0 - view_left) * scale.x, (sy0 - view_top) * scale.y, (sx1 - sx0) * scale.x, (sy1 - sy0) * scale.y);
    }
    if (this.debug) {
      this._drawDebugInfo(scale, view_left, view_top);
      const now = performance.now();
      this.debug_info.last_draw_ms = now - draw_start;
      this._debug_draw_count++;
      if (now - this._debug_count_start >= 1e3) {
        this.debug_info.draws_last_second = this._debug_draw_count;
        this._debug_draw_count = 0;
        this._debug_count_start = now;
      }
    }
    this._updateOverlayPositions();
  }
  /** Draw element bounds, map border and view crosshair over the map */
  _drawDebugInfo(scale, view_left, view_top) {
    if (!this.map)
      return;
    const ctx = this._ctx;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const toScreenX = (x) => (x - view_left) * scale.x;
    const toScreenY = (y) => (y - view_top) * scale.y;
    ctx.strokeStyle = "#f0f";
    ctx.lineWidth = 2;
    ctx.strokeRect(toScreenX(0), toScreenY(0), scale.x, scale.y);
    ctx.strokeStyle = "rgba(0, 200, 255, 0.6)";
    ctx.lineWidth = 1;
    for (const [, bounds] of this.map.element_bounds) {
      const x = toScreenX(bounds.x);
      const y = toScreenY(bounds.y);
      const w = bounds.w * scale.x;
      const h = bounds.h * scale.y;
      if (x + w < 0 || y + h < 0 || x > width || y > height)
        continue;
      ctx.strokeRect(x, y, w, h);
    }
    const highlight_id = this.debug_info.highlight_id || this.debug_info.hover_id;
    const hover_bounds = highlight_id ? this.map.element_bounds.get(highlight_id) : null;
    if (hover_bounds) {
      const x = toScreenX(hover_bounds.x);
      const y = toScreenY(hover_bounds.y);
      ctx.fillStyle = "rgba(255, 0, 255, 0.25)";
      ctx.fillRect(x, y, hover_bounds.w * scale.x, hover_bounds.h * scale.y);
      const label = `#${highlight_id}`;
      ctx.font = "12px monospace";
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(x, y - 16, ctx.measureText(label).width + 8, 16);
      ctx.fillStyle = "#fff";
      ctx.fillText(label, x + 4, y - 4);
    }
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 8, height / 2);
    ctx.lineTo(width / 2 + 8, height / 2);
    ctx.moveTo(width / 2, height / 2 - 8);
    ctx.lineTo(width / 2, height / 2 + 8);
    ctx.stroke();
  }
  _updateOverlayPositions() {
    if (!this.map?.element_bounds)
      return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const scale = this._viewScale();
    const mapToScreen = (point) => ({
      x: (point.x - this.center.x) * scale.x + width / 2,
      y: (point.y - this.center.y) * scale.y + height / 2
    });
    const setDisplay = (instance, value) => {
      if (instance.last_display === value)
        return;
      instance.last_display = value;
      instance.element.style.display = value;
    };
    const setTransform = (instance, value) => {
      if (instance.last_transform === value)
        return;
      instance.last_transform = value;
      instance.element.style.transform = value;
    };
    const setSize = (instance, w, h) => {
      const size = `${w} ${h}`;
      if (instance.last_size === size)
        return;
      instance.last_size = size;
      instance.element.style.width = w;
      instance.element.style.height = h;
    };
    for (const instance of this._overlay_instances) {
      const { overlay } = instance;
      if (overlay.min_zoom && this.zoom < overlay.min_zoom) {
        setDisplay(instance, "none");
        continue;
      }
      let bounds;
      if (typeof overlay.ref === "string") {
        bounds = this.map.element_bounds.get(overlay.ref);
        if (!bounds) {
          setDisplay(instance, "none");
          continue;
        }
      } else {
        bounds = __spreadValues({ w: 0, h: 0 }, overlay.ref);
      }
      setDisplay(instance, "");
      if (overlay.type === "box" && bounds.w > 0 && bounds.h > 0) {
        const top_left = mapToScreen({ x: bounds.x, y: bounds.y });
        setTransform(instance, `translate(${top_left.x}px, ${top_left.y}px)`);
        setSize(instance, `${bounds.w * scale.x}px`, `${bounds.h * scale.y}px`);
      } else {
        const screen_pos = mapToScreen({
          x: bounds.x + bounds.w / 2,
          y: bounds.y + bounds.h / 2
        });
        setSize(instance, "", "");
        setTransform(instance, overlay.scale_with_zoom ? `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%) scale(${this.zoom})` : `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%)`);
      }
    }
  }
  /**
   * Handle action events (click, pointer events, etc.) on the map.
   * Only the best matching action is triggered, where the best match is the
   * highest priority action with the smallest map element under the event.
   */
  _handleActionEvent(event_name, e) {
    if (!this.map_image || !this.map?.element_bounds)
      return;
    if (this._pan_exceeded_threshold)
      return;
    if (event_name === "click" && this._action_pointerdown_pos) {
      const dx = e.clientX - this._action_pointerdown_pos.x;
      const dy = e.clientY - this._action_pointerdown_pos.y;
      if (Math.hypot(dx, dy) > 5)
        return;
    }
    const norm = this._eventToMap(e);
    if (norm.x < 0 || norm.x > 1 || norm.y < 0 || norm.y > 1)
      return;
    let best = null;
    let best_area = Number.POSITIVE_INFINITY;
    for (const action of this._actions) {
      if (!action.events.includes(event_name))
        continue;
      if (action.ref === "*") {
        if (!best)
          best = action;
        continue;
      }
      const bounds = this.map.element_bounds.get(action.ref);
      if (!bounds)
        continue;
      if (norm.x < bounds.x || norm.x > bounds.x + bounds.w || norm.y < bounds.y || norm.y > bounds.y + bounds.h) {
        continue;
      }
      const area = bounds.w * bounds.h;
      if (!best || best.ref === "*" || (action.priority || 0) > (best.priority || 0) || (action.priority || 0) === (best.priority || 0) && area < best_area) {
        best = action;
        best_area = area;
      }
    }
    if (!best)
      return;
    const now = Date.now();
    const debounce_key = `${best.ref}:${event_name}`;
    const last_triggered = this._action_last_triggered.get(debounce_key) || 0;
    if (now - last_triggered < 300)
      return;
    this._action_last_triggered.set(debounce_key, now);
    best.callback(norm);
  }
  /**
   * Notify listeners of view changes from user interaction. Notifications
   * are coalesced to one per animation frame as pointer events can fire
   * more often than the display refreshes and listeners may be expensive
   */
  _notifyViewChange() {
    if (!this.onViewChange || this._notify_frame_id !== null)
      return;
    this._notify_frame_id = requestAnimationFrame(() => {
      this._notify_frame_id = null;
      this.onViewChange?.({
        zoom: this.zoom,
        center: __spreadValues({}, this.center)
      });
    });
  }
};

export {
  getMapDetails,
  MapViewer
};
//# sourceMappingURL=chunk-5FFWU7LK.js.map
