import {
  DynamicMapComponent,
  ExploreParkingService,
  ExploreStateService,
  MapZoomControlsComponent,
  MatDialog,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  SpacesService
} from "./chunk-T377XONA.js";
import "./chunk-G3YUKAFQ.js";
import {
  VirtualKeyboardComponent,
  toSignal
} from "./chunk-NFLHXXO5.js";
import "./chunk-FUD3Y65A.js";
import "./chunk-AVRTYA3O.js";
import "./chunk-OBHG2ELS.js";
import "./chunk-WHSGQKIT.js";
import "./chunk-QIOXUOTK.js";
import "./chunk-HMAYPEWY.js";
import "./chunk-72RR6XQN.js";
import {
  TranslatePipe
} from "./chunk-Q5RDUBRY.js";
import {
  MapService,
  MapsPeopleService,
  OrganisationService
} from "./chunk-JKPYEVXO.js";
import {
  AsyncHandler,
  IconComponent,
  SettingsService,
  calculateDistance,
  i18n,
  log,
  notifyError,
  notifyWarn,
  randomString
} from "./chunk-THBAIIJV.js";
import "./chunk-2OUUYRFN.js";
import "./chunk-VXW7ALNE.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FIG6YNBB.js";
import "./chunk-HEQGBL5L.js";
import {
  ActivatedRoute,
  Router
} from "./chunk-TTMVHCFS.js";
import {
  Component,
  Input,
  Output,
  ViewChild,
  computed,
  effect,
  inject,
  input,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵqueryAdvance,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-5QOLI3H3.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/cisco-map.component.ts
var _c0 = ["map_container"];
function CiscoMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_FAILED_TO_LOAD"), " ");
  }
}
var DEFAULT_ZOOM = 18.5;
var MAX_INIT_ATTEMPTS = 30;
var CiscoMapComponent = class _CiscoMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.zone = input(
      void 0,
      ...ngDevMode ? [{ debugName: "zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metadata = input(
      void 0,
      ...ngDevMode ? [{ debugName: "metadata" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focus = input(
      void 0,
      ...ngDevMode ? [{ debugName: "focus" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = input(
      DEFAULT_ZOOM,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset = input(
      void 0,
      ...ngDevMode ? [{ debugName: "reset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoomChange = output();
    this.zoneChange = output();
    this.error = signal(
      false,
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._mapContainer = viewChild.required(
      "map_container",
      ...ngDevMode ? [{ debugName: "_mapContainer" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._injectScript();
    this.timeout("init", () => this._initialiseMap());
  }
  _injectScript() {
    if (document.getElementById("cisco-spaces-maps-script"))
      return;
    const script = document.createElement("script");
    script.id = "cisco-spaces-maps-script";
    script.src = this._settings.get("app.explore.cisco_maps.script");
    document.body.appendChild(script);
  }
  /**
   * Start the map. Waits up to 30 seconds for the Cisco Spaces script, and
   * shows an error if a step fails.
   */
  async _initialiseMap(attempt = 1) {
    if (typeof SpacesDigitalMap !== "function") {
      if (attempt >= MAX_INIT_ATTEMPTS) {
        console.error("Cisco Spaces namespace is not defined");
        this.error.set(true);
        return;
      }
      this.timeout("init", () => this._initialiseMap(attempt + 1), 1e3);
      return;
    }
    try {
      const config = this._settings.get("app.explore.cisco_maps");
      const api_endpoint = config.api_endpoint;
      const headers = { "x-api-key": config.access_token };
      const b_resp = await fetch(`${api_endpoint}/buildings`, {
        method: "POST",
        headers
      });
      if (!b_resp.ok)
        throw new Error("Failed to load buildings");
      const { result } = await b_resp.json();
      const bld = result?.buildings?.[0];
      if (!bld)
        throw new Error("No building found");
      const query = new URLSearchParams({ building_id: bld.id });
      const resp = await fetch(`${api_endpoint}/sessionKey?${query}`, {
        method: "GET",
        headers
      });
      if (!resp.ok)
        throw new Error("Failed to load session key");
      const { session_key } = await resp.json();
      this._map = new SpacesDigitalMap({
        mapContainer: "cisco-map-container",
        sessionKey: session_key,
        tenantId: result.hashed_tenant_id,
        locationId: bld.hashed_id,
        defaultFloor: bld.floors?.[0]?.levelIndex,
        initialPos: bld.coordinates,
        initialZoom: 20,
        initialPitch: 65,
        initialBearing: 118,
        poiLegendHolder: "poi-switch"
      });
      console.log("Map initialized", this._map);
    } catch (e) {
      console.error("[CISCO] Failed to initialise map.", e);
      this.error.set(true);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275CiscoMapComponent_BaseFactory;
      return function CiscoMapComponent_Factory(__ngFactoryType__) {
        return (\u0275CiscoMapComponent_BaseFactory || (\u0275CiscoMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CiscoMapComponent)))(__ngFactoryType__ || _CiscoMapComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CiscoMapComponent, selectors: [["cisco-map"]], viewQuery: function CiscoMapComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._mapContainer, _c0, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { zone: [1, "zone"], metadata: [1, "metadata"], options: [1, "options"], focus: [1, "focus"], zoom: [1, "zoom"], reset: [1, "reset"] }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 1, consts: [["map_container", ""], ["id", "cisco-map-container", 1, "absolute", "inset-0", "z-0"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [1, "opacity-30"]], template: function CiscoMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "div", 1, 0);
        \u0275\u0275conditionalCreate(2, CiscoMapComponent_Conditional_2_Template, 4, 3, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 2 : -1);
      }
    }, dependencies: [TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CiscoMapComponent, [{
    type: Component,
    args: [{ selector: "cisco-map", template: `
        <div
            #map_container
            id="cisco-map-container"
            class="absolute inset-0 z-0"
        ></div>
        @if (error()) {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                </div>
            </div>
        }
    `, imports: [TranslatePipe] }]
  }], null, { zone: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], metadata: [{ type: Input, args: [{ isSignal: true, alias: "metadata", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }], zoomChange: [{ type: Output, args: ["zoomChange"] }], zoneChange: [{ type: Output, args: ["zoneChange"] }], _mapContainer: [{ type: ViewChild, args: ["map_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CiscoMapComponent, { className: "CiscoMapComponent", filePath: "libs/components/src/lib/cisco-map.component.ts", lineNumber: 47 });
})();

// libs/components/src/lib/bulk-actions.ts
var BULK_CONCURRENCY = 5;
async function runBulk(items, action, concurrency = BULK_CONCURRENCY) {
  const failed = [];
  let next = 0;
  const worker = async () => {
    while (next < items.length) {
      const item = items[next++];
      try {
        await action(item);
      } catch {
        failed.push(item);
      }
    }
  };
  const workers = Math.max(1, Math.min(concurrency, items.length));
  await Promise.all(Array.from({ length: workers }, worker));
  return failed;
}

// libs/components/src/lib/maps-indoors.component.ts
var _c02 = ["map_container"];
function MapsIndoorsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_FAILED_TO_LOAD"), " ");
  }
}
function MapsIndoorsComponent_Conditional_3_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
}
function MapsIndoorsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function MapsIndoorsComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDirections());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, MapsIndoorsComponent_Conditional_3_Conditional_5_Template, 1, 0, "mat-spinner", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.viewing_directions() ? "Hide" : "Show", " Directions ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.loading_directions() ? 5 : -1);
  }
}
var DEFAULT_ZOOM2 = 18.5;
var DEFAULT_LOCATION = "-33.8567844,151.2152967";
var STYLE_SEARCH_CONCURRENCY = 6;
var MAX_INIT_ATTEMPTS2 = 60;
var RESOURCE_MAP = {};
var MapsIndoorsComponent = class _MapsIndoorsComponent extends AsyncHandler {
  constructor() {
    super();
    this._maps_people = inject(MapsPeopleService);
    this._org = inject(OrganisationService);
    this.zoneInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "zoneInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "zone" }));
    this.zone = linkedSignal(
      this.zoneInput,
      ...ngDevMode ? [{ debugName: "zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.metadata = input(
      void 0,
      ...ngDevMode ? [{ debugName: "metadata" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focus = input(
      void 0,
      ...ngDevMode ? [{ debugName: "focus" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoomInput = input(DEFAULT_ZOOM2, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "zoomInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "zoom" }));
    this.zoom = linkedSignal(
      this.zoomInput,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset = input(
      void 0,
      ...ngDevMode ? [{ debugName: "reset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoomChange = output();
    this.zoneChange = output();
    this.show_directions = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_directions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewing_directions = signal(
      false,
      ...ngDevMode ? [{ debugName: "viewing_directions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading_directions = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading_directions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ignore_zoom = signal(
      false,
      ...ngDevMode ? [{ debugName: "ignore_zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      false,
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._floor_list = [];
    this._styled_resources = /* @__PURE__ */ new Map();
    this._styling_run = 0;
    this._zoom_reported = false;
    this._pending_changes = {};
    this._container = viewChild(
      "map_container",
      ...ngDevMode ? [{ debugName: "_container" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._added_floor_selector = false;
    const data = sessionStorage.getItem("PLACEOS.mapsindoors.resources") || "{}";
    const value = JSON.parse(data);
    for (const key in value) {
      if (value.hasOwnProperty(key)) {
        RESOURCE_MAP[key] = value[key];
      }
    }
  }
  ngOnInit() {
    this.id = randomString(8);
    this._initialised.next(false);
    this._initialiseServices();
  }
  ngOnChanges(changes) {
    changes = __spreadValues(__spreadValues({}, this._pending_changes), changes);
    if (!this.is_initialised) {
      if (this.error())
        return;
      this._pending_changes = changes;
      return this.timeout("on_changes", () => this.ngOnChanges({}));
    }
    this._pending_changes = {};
    if (changes.zoneInput && this.zone()) {
      this._centerOnZone();
      this._setFloorFromZone();
    }
    if (changes.focus && this.focus()) {
      this._focusOnLocation();
    }
    if (changes.metadata) {
      this._updateMapStyling();
    }
    const zoom = this.zoom();
    if (changes.zoomInput && this._zoom_reported && zoom && !this.ignore_zoom()) {
      this._services?.mapsindoors.setZoom(zoom);
    }
    if (changes.reset) {
      this._services?.map?.setZoom(DEFAULT_ZOOM2);
      this._centerOnZone();
    }
    if (changes.options) {
      this._addFloorSelector();
    }
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._styling_run++;
    this._services?.mapsindoors.deallocate();
  }
  _setResource(id, resource) {
    RESOURCE_MAP[id] = resource;
    this.timeout("set_resource", () => {
      sessionStorage.setItem("PLACEOS.mapsindoors.resources", JSON.stringify(RESOURCE_MAP));
    });
  }
  /**
   * Start the map view. Waits up to a minute for the MapsIndoors SDK, then
   * shows an error.
   */
  _initialiseServices(attempt = 1) {
    if (!this._maps_people.is_ready || !window.mapsindoors) {
      if (attempt >= MAX_INIT_ATTEMPTS2) {
        this.error.set(true);
        return;
      }
      this.timeout("init", () => this._initialiseServices(attempt + 1), 1e3);
      return;
    }
    const [lat, long] = (this._org.building?.location || DEFAULT_LOCATION).split(",");
    const view_options = {
      element: this._container().nativeElement,
      center: { lat: parseFloat(lat), lng: parseFloat(long) },
      zoom: DEFAULT_ZOOM2,
      maxZoom: 24
    };
    let view_instance = null;
    switch (this._maps_people.map_service) {
      case MapService.GoogleMaps:
        log("MapsIndoors", "Using Google Maps API");
        view_instance = new mapsindoors.mapView.GoogleMapsView(view_options);
        break;
      case MapService.Mapbox:
        view_options.accessToken = this._maps_people.map_token;
        log("MapsIndoors", "Using Mapbox API");
        view_instance = new mapsindoors.mapView.MapboxView(view_options);
        break;
    }
    if (!view_instance) {
      notifyWarn(i18n("EXPLORE.MAPSINDOORS_INIT_FAILED"));
      this.error.set(true);
      return;
    }
    const provider = this._maps_people.map_service === MapService.GoogleMaps ? new mapsindoors.directions.GoogleMapsProvider() : new mapsindoors.directions.MapboxProvider(this._maps_people.map_token);
    const maps_indoors = new mapsindoors.MapsIndoors({
      mapView: view_instance
    });
    this._services = {
      mapsindoors: maps_indoors,
      view: view_instance,
      map: view_instance.getMap(),
      directions: new mapsindoors.services.DirectionsService(provider),
      directions_renderer: new mapsindoors.directions.DirectionsRenderer({
        mapsIndoors: maps_indoors
      })
    };
    this._initialised.next(true);
    if (this.zone()) {
      this._services.map.setZoom(DEFAULT_ZOOM2);
      this._centerOnZone();
    }
    this._addFloorSelector();
    this._services.mapsindoors.addListener("building_changed", (e) => this._handleBuildingChange(e));
    this._services.mapsindoors.addListener("floor_changed", (e) => this._handleLevelChange(e));
    this._services.mapsindoors.addListener("zoom_changed", (e) => this._handleZoomChange(e));
    this._services.mapsindoors.addListener("click", (e) => this._handleUserClick(e));
    this.timeout("resize", () => window.dispatchEvent(new Event("resize")), 100);
    this.timeout("focus", () => this._focusOnLocation());
    this.timeout("init_zoom", () => this._handleZoomChange(DEFAULT_ZOOM2));
  }
  clearDirections() {
    this._services.directions_renderer.setRoute(null);
    this.viewing_directions.set(false);
  }
  async toggleDirections() {
    if (this.viewing_directions()) {
      this.clearDirections();
      this._focusOnLocation();
      return;
    }
    const focus = this.focus();
    if (!focus)
      return;
    const items = await this._search(focus);
    if (!items?.length) {
      notifyError(i18n("EXPLORE.LOCATE_FAILED", { name: focus }));
      return;
    }
    this.loading_directions.set(true);
    const destination = this._coordinates(items[0]);
    const options = { timeout: 1e4, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(async (position) => {
      this._last_position = position;
      this.setDirectionsFromLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }, destination);
    }, () => {
      if (this._last_position) {
        this.setDirectionsFromLocation({
          lat: this._last_position.coords.latitude,
          lng: this._last_position.coords.longitude
        }, destination);
        return;
      }
      this.loading_directions.set(false);
      notifyError(i18n("EXPLORE.LOCATE_CURRENT_FAILED"));
    }, options);
  }
  /**
   * Coordinates of a MapsIndoors location. Uses its GeoJSON anchor, which
   * is [lng, lat], or else the zone's building location, which is "lat,lng".
   */
  _coordinates(item) {
    const anchor = item.properties?.anchor?.coordinates;
    if (anchor)
      return { lat: anchor[1], lng: anchor[0] };
    const bld = this._org.buildings.find((bld2) => bld2.id === this.zone()?.parent_id);
    const [lat, lng] = (bld?.location || DEFAULT_LOCATION).split(",").map(parseFloat);
    return { lat, lng };
  }
  async setDirectionsFromLocation(from, to) {
    const distance = calculateDistance(to.lat, to.lng, from.lat, from.lng);
    const routeParameters = {
      origin: {
        lat: from.lat,
        lng: from.lng
      },
      destination: { lat: to.lat, lng: to.lng },
      travelMode: distance < 2 ? "WALKING" : "DRIVING"
    };
    const result = await this._services.directions.getRoute(routeParameters).catch((e) => {
      log("MapsIndoors", "Error fetching route: ", e.message || e, "warn");
      const origin_error = e instanceof TypeError && e.message?.includes("origin");
      if (!origin_error)
        return;
      notifyError(i18n("EXPLORE.LOCATE_ROUTE_FAILED", {
        error: i18n("EXPLORE.LOCATE_ORIGIN_ERROR")
      }));
    });
    this.loading_directions.set(false);
    if (!result)
      return;
    this._services.directions_renderer.setRoute(result);
    this.viewing_directions.set(true);
  }
  _handleZoomChange(level) {
    this.timeout("zoom_change", () => {
      this.ignore_zoom.set(true);
      this.zoom.set(level);
      this.zoomChange.emit(level);
      this._zoom_reported = true;
      this.timeout("reset_ignore_zoom", () => this.ignore_zoom.set(false), 50);
    }, 100);
  }
  _handleBuildingChange(building) {
    const id = building.externalId || building.id;
    log("MapsIndoors", `Building switched to "${id}"`);
    const floors = building.floors || {};
    this._floor_list = Object.keys(floors).map((key) => __spreadValues({
      index: key
    }, floors[key]));
    log("MapsIndoors", "Floor List:", this._floor_list);
    if (!this._services)
      return;
    const bld = this._org.buildings.find((_) => _.id === id || _.map_id === id);
    this.timeout("set_floor", () => {
      const has_set_floor = this._setFloorFromZone();
      if (!has_set_floor && building.defaultFloor) {
        this._handleLevelChange(building.defaultFloor);
      }
    });
    if (!bld)
      return;
    this._org.building = bld;
    this._last_building = bld.id;
  }
  async _handleLevelChange(index) {
    log("MapsIndoors", `Level switched to "${index}"`);
    const floor = this._floor_list.find((_) => _.index === index);
    const id = floor?.externalId || floor?.id;
    if (!this._services)
      return;
    const levels = this._org.active_levels();
    if (!levels)
      return;
    const new_level = levels.find((_) => _.map_id === id || _.id === id);
    if (!new_level)
      return;
    this.zone.set(new_level);
    this.zoneChange.emit(new_level);
  }
  _handleUserClick(event) {
    log("MapsIndoors", `Click occurred`, event);
    const id = event.properties?.externalId || event.properties?.roomId || event.id;
    const actions = this.metadata()?.actions || [];
    log("MapsIndoors", `Registered Actions`, actions);
    const ignore_actions = ["mousedown", "touchstart", "enter", "leave"];
    for (const action of actions) {
      if ((action.id === id || action.id === "*") && !ignore_actions.includes(action.action)) {
        action.callback(event);
        break;
      }
    }
  }
  async _search(query) {
    if (!this._services)
      return;
    return mapsindoors?.services.LocationsService.getLocations({
      q: query
    });
  }
  /**
   * Apply metadata fill colours to MapsIndoors locations. Locations that are
   * not cached are looked up a few at a time, not one after another.
   */
  async _updateMapStyling() {
    if (!this._services)
      return;
    const run = ++this._styling_run;
    const styles = this.metadata()?.styles || {};
    for (const [style_id, resource_id] of this._styled_resources) {
      if (styles[style_id]?.fill)
        continue;
      this._services.mapsindoors.setDisplayRule(resource_id, null);
      this._styled_resources.delete(style_id);
    }
    const ids = Object.keys(styles).filter((id) => styles[id].fill);
    await runBulk(ids.filter((id) => !RESOURCE_MAP[id]), async (id) => {
      const id_simple = id.replace(/#/, "");
      const list = await this._search(id_simple) || [];
      const resource = list.find((_) => _.properties?.externalId === id_simple || _.properties?.roomId === id_simple || _.id === id_simple);
      if (resource)
        this._setResource(id, resource);
    }, STYLE_SEARCH_CONCURRENCY);
    if (run !== this._styling_run || !this._services)
      return;
    for (const id of ids) {
      const resource = RESOURCE_MAP[id];
      if (!resource)
        continue;
      const value = {
        extrusionHeight: 0,
        extrusionVisible: false,
        polygonVisible: true,
        polygonFillColor: styles[id].fill
      };
      this._services.mapsindoors.setDisplayRule(resource.id, value);
      this._styled_resources.set(id, resource.id);
    }
  }
  async _focusOnLocation() {
    const focus = this.focus();
    if (!focus)
      return;
    const items = await this._search(focus);
    this.clearDirections();
    if (!items?.length) {
      notifyError(i18n("EXPLORE.LOCATE_FAILED", { name: focus }));
      return;
    }
    const item = items.find((_) => _.properties?.externalId === this.focus()) || items[0];
    this._services.map.setZoom(DEFAULT_ZOOM2);
    this._services.map.setCenter(this._coordinates(item));
    this._services.mapsindoors.setFloor(item.properties?.floor);
    this._services.mapsindoors.highlight([item.id]);
  }
  _centerOnZone() {
    const zone = this.zone();
    if (!this._services || !zone || zone.parent_id === this._last_building || zone.id === this._last_building)
      return;
    this.timeout("set_center", () => {
      const bld = this._org.buildings.find((bld2) => bld2.id === this.zone().parent_id);
      if (!bld)
        return;
      const [lat, long] = bld?.location.split(",") || ["0", "0"];
      if (!this.focus()) {
        this._services.map.setCenter({
          lat: parseFloat(lat),
          lng: parseFloat(long)
        });
      }
      this._setFloorFromZone();
      this._last_building = this.zone().id;
    });
  }
  _setFloorFromZone() {
    const zone = this.zone();
    if (!zone.map_id || !this._services)
      return false;
    const map_id = zone.map_id;
    const floor = this._floor_list.find((_) => _.index === map_id || _.externalId === map_id || _.id === map_id);
    if (!floor)
      return false;
    this._services.mapsindoors.setFloor(floor.index);
    return true;
  }
  _addFloorSelector() {
    if (!this.options()?.controls || this._added_floor_selector)
      return;
    const element = document.createElement("div");
    new mapsindoors.FloorSelector(element, this._services.mapsindoors);
    if (this._maps_people.map_service === MapService.GoogleMaps) {
      this._services.map.controls[google.maps.ControlPosition.RIGHT_TOP].push(element);
    } else {
      this._services.map.addControl({
        onAdd: () => element,
        onRemove: () => null
      });
    }
    this._added_floor_selector = true;
  }
  static {
    this.\u0275fac = function MapsIndoorsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapsIndoorsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapsIndoorsComponent, selectors: [["maps-indoors"]], viewQuery: function MapsIndoorsComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._container, _c02, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { zoneInput: [1, "zone", "zoneInput"], metadata: [1, "metadata"], options: [1, "options"], focus: [1, "focus"], zoomInput: [1, "zoom", "zoomInput"], reset: [1, "reset"] }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 4, vars: 2, consts: [["map_container", ""], [1, "absolute", "inset-0", "z-0"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "text-base-content", "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "shadow-sm"], [1, "opacity-30"], ["btn", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "text-base-content", "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "shadow-sm", 3, "click"], [1, "pr-2"], ["diameter", "24"]], template: function MapsIndoorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1, 0);
        \u0275\u0275conditionalCreate(2, MapsIndoorsComponent_Conditional_2_Template, 4, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, MapsIndoorsComponent_Conditional_3_Template, 6, 2, "button", 3);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.error() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.focus() && !ctx.show_directions() && ctx.options()?.controls ? 3 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsIndoorsComponent, [{
    type: Component,
    args: [{ selector: "maps-indoors", template: `
        <div #map_container class="absolute inset-0 z-0"></div>
        @if (error()) {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                </div>
            </div>
        }
        @if (focus() && !show_directions() && options()?.controls) {
            <button
                btn
                matRipple
                class="border-base-200 bg-base-100 text-base-content absolute bottom-2 left-2 z-10 space-x-2 shadow-sm"
                (click)="toggleDirections()"
            >
                <icon>place</icon>
                <div class="pr-2">
                    {{ viewing_directions() ? 'Hide' : 'Show' }} Directions
                </div>
                @if (loading_directions()) {
                    <mat-spinner diameter="24"></mat-spinner>
                }
            </button>
        }
    `, imports: [
      MatRippleModule,
      MatProgressSpinnerModule,
      IconComponent,
      TranslatePipe
    ] }]
  }], () => [], { zoneInput: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], metadata: [{ type: Input, args: [{ isSignal: true, alias: "metadata", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], zoomInput: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }], zoomChange: [{ type: Output, args: ["zoomChange"] }], zoneChange: [{ type: Output, args: ["zoneChange"] }], _container: [{ type: ViewChild, args: ["map_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapsIndoorsComponent, { className: "MapsIndoorsComponent", filePath: "libs/components/src/lib/maps-indoors.component.ts", lineNumber: 92 });
})();

// libs/components/src/lib/interactive-map.component.ts
var _c03 = ["*", "*", "*"];
function InteractiveMapComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "maps-indoors", 3);
    \u0275\u0275listener("zoneChange", function InteractiveMapComponent_Conditional_0_Template_maps_indoors_zoneChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onLevelChange($event));
    })("zoomChange", function InteractiveMapComponent_Conditional_0_Template_maps_indoors_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set($event));
    });
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("zone", ctx_r1.location())("zoom", ctx_r1.zoom())("options", ctx_r1.options())("reset", ctx_r1.reset())("focus", ctx_r1.focus())("metadata", ctx_r1.metadata());
  }
}
function InteractiveMapComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "cisco-map");
    \u0275\u0275projection(1, 1);
    \u0275\u0275elementEnd();
  }
}
function InteractiveMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "dynamic-map", 4);
    \u0275\u0275listener("zoomChange", function InteractiveMapComponent_Conditional_2_Template_dynamic_map_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.zoom.set($event));
    })("centerChange", function InteractiveMapComponent_Conditional_2_Template_dynamic_map_centerChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.center.set($event));
    })("mapInfo", function InteractiveMapComponent_Conditional_2_Template_dynamic_map_mapInfo_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.mapInfo.emit($event));
    });
    \u0275\u0275projection(1, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.src())("zoom", ctx_r1.zoom())("center", ctx_r1.center())("reset", ctx_r1.reset())("styles", ctx_r1.styles())("features", ctx_r1.features())("actions", ctx_r1.actions())("labels", ctx_r1.labels())("options", ctx_r1.renderer_options())("focus", ctx_r1.focus())("fixedResolution", ctx_r1.fixedResolution());
  }
}
function InteractiveMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "map-zoom-controls", 5);
    \u0275\u0275twoWayListener("zoomChange", function InteractiveMapComponent_Conditional_3_Template_map_zoom_controls_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.zoom, $event) || (ctx_r1.zoom = $event);
      return \u0275\u0275resetView($event);
    })("resetChange", function InteractiveMapComponent_Conditional_3_Template_map_zoom_controls_resetChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.reset, $event) || (ctx_r1.reset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("zoom", ctx_r1.zoom)("reset", ctx_r1.reset);
  }
}
var InteractiveMapComponent = class _InteractiveMapComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this._mapspeople = inject(MapsPeopleService);
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this.src = input(
      "",
      ...ngDevMode ? [{ debugName: "src" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = model(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.center = model(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset = model(
      0,
      ...ngDevMode ? [{ debugName: "reset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = input(
      {},
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = input(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.labels = input(
      [],
      ...ngDevMode ? [{ debugName: "labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = input(
      [],
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focus = input(
      "",
      ...ngDevMode ? [{ debugName: "focus" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fixedResolution = input(
      0,
      ...ngDevMode ? [{ debugName: "fixedResolution" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mapInfo = output();
    this.use_mapsindoors = this._mapspeople.available;
    this.metadata = computed(
      () => ({
        actions: this.actions() || [],
        labels: this.labels() || [],
        styles: this.styles() || {},
        features: this.features() || []
      }),
      ...ngDevMode ? [{ debugName: "metadata" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => this._org.levels.find((_) => _.map_id === this.src()),
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.renderer_options = computed(
      () => __spreadProps(__spreadValues({}, this.options() || {}), {
        controls: false
      }),
      ...ngDevMode ? [{ debugName: "renderer_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_cisco_maps = this._settings.signal("explore.cisco_maps.enabled", false);
  }
  get use_cisco_maps() {
    return this._use_cisco_maps();
  }
  onLevelChange(zone) {
    log("Map", "Level changed to:", zone?.display_name || zone?.name || zone);
    this._explore.setLevel(zone.id);
  }
  static {
    this.\u0275fac = function InteractiveMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InteractiveMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InteractiveMapComponent, selectors: [["interactive-map"]], inputs: { src: [1, "src"], zoom: [1, "zoom"], center: [1, "center"], reset: [1, "reset"], styles: [1, "styles"], features: [1, "features"], labels: [1, "labels"], actions: [1, "actions"], options: [1, "options"], focus: [1, "focus"], fixedResolution: [1, "fixedResolution"] }, outputs: { zoom: "zoomChange", center: "centerChange", reset: "resetChange", mapInfo: "mapInfo" }, ngContentSelectors: _c03, decls: 4, vars: 2, consts: [[3, "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "src", "zoom", "center", "reset", "styles", "features", "actions", "labels", "options", "focus", "fixedResolution"], [3, "zoom", "reset"], [3, "zoneChange", "zoomChange", "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "zoomChange", "centerChange", "mapInfo", "src", "zoom", "center", "reset", "styles", "features", "actions", "labels", "options", "focus", "fixedResolution"], [3, "zoomChange", "resetChange", "zoom", "reset"]], template: function InteractiveMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c03);
        \u0275\u0275conditionalCreate(0, InteractiveMapComponent_Conditional_0_Template, 2, 6, "maps-indoors", 0)(1, InteractiveMapComponent_Conditional_1_Template, 2, 0, "cisco-map")(2, InteractiveMapComponent_Conditional_2_Template, 2, 11, "dynamic-map", 1);
        \u0275\u0275conditionalCreate(3, InteractiveMapComponent_Conditional_3_Template, 1, 2, "map-zoom-controls", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.use_mapsindoors() ? 0 : ctx.use_cisco_maps ? 1 : 2);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.options()?.controls ? 3 : -1);
      }
    }, dependencies: [
      MapsIndoorsComponent,
      DynamicMapComponent,
      CiscoMapComponent,
      MapZoomControlsComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InteractiveMapComponent, [{
    type: Component,
    args: [{ selector: "interactive-map", template: `
        @if (use_mapsindoors()) {
            <maps-indoors
                [zone]="location()"
                (zoneChange)="onLevelChange($event)"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [options]="options()"
                [reset]="reset()"
                [focus]="focus()"
                [metadata]="metadata()"
            >
                <ng-content />
            </maps-indoors>
        } @else if (use_cisco_maps) {
            <cisco-map>
                <ng-content />
            </cisco-map>
        } @else {
            <dynamic-map
                [src]="src()"
                [zoom]="zoom()"
                (zoomChange)="zoom.set($event)"
                [center]="center()"
                (centerChange)="center.set($event)"
                [reset]="reset()"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [labels]="labels()"
                [options]="renderer_options()"
                [focus]="focus()"
                [fixedResolution]="fixedResolution()"
                (mapInfo)="mapInfo.emit($event)"
            >
                <ng-content />
            </dynamic-map>
        }
        @if (options()?.controls) {
            <map-zoom-controls [(zoom)]="zoom" [(reset)]="reset" />
        }
    `, imports: [
      MapsIndoorsComponent,
      DynamicMapComponent,
      CiscoMapComponent,
      MapZoomControlsComponent
    ] }]
  }], null, { src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }, { type: Output, args: ["resetChange"] }], styles: [{ type: Input, args: [{ isSignal: true, alias: "styles", required: false }] }], features: [{ type: Input, args: [{ isSignal: true, alias: "features", required: false }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }], actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], fixedResolution: [{ type: Input, args: [{ isSignal: true, alias: "fixedResolution", required: false }] }], mapInfo: [{ type: Output, args: ["mapInfo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InteractiveMapComponent, { className: "InteractiveMapComponent", filePath: "libs/components/src/lib/interactive-map.component.ts", lineNumber: 83 });
})();

// apps/map-kiosk/src/app/parking.component.ts
var ParkingComponent = class _ParkingComponent {
  constructor() {
    this._explore = inject(ExploreStateService);
    this._parking = inject(ExploreParkingService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._query_params = toSignal(this._route.queryParamMap);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_query_params = effect(
      () => {
        if (!this._ready())
          return;
        const params = this._query_params();
        if (!params)
          return;
        untracked(() => this.handleQueryParams(params));
      },
      ...ngDevMode ? [{ debugName: "_handle_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.positions = this._explore.map_positions;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.options = this._explore.options;
    this.active_spaces = this._parking.active_spaces;
    this.available_spaces = this._parking.available_spaces;
    this.counts = computed(
      () => {
        const spaces = this.active_spaces();
        const available = this.available_spaces();
        return {
          total: spaces.length,
          free: available.length,
          busy: spaces.length - available.length,
          percent: available.length / spaces.length * 100
        };
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    if (location.hash.includes("public=true") || location.search.includes("public=true")) {
      this._explore.setOptions({ is_public: true });
    }
    while (!this._spaces.initialised()) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    this.resetKiosk(false);
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this._ready.set(true);
  }
  /** React to changes in the route query parameters */
  handleQueryParams(params) {
    if (params.has("level")) {
      log("Explore", "Level changed to:", params.get("level"));
      this._explore.setLevel(params.get("level"));
      const level = this._org.levelWithID([params.get("level")]);
      if (!level)
        return;
      const bld = this._org.buildings.find((_) => level.parent_id === _.id);
      if (!bld)
        return;
      this._org.building = bld;
    }
    this._explore.setFeatures("_located", []);
  }
  updateZoom(zoom) {
    this._explore.setPositions(zoom, this._explore.positions.center);
  }
  updateCenter(center) {
    this._explore.setPositions(this._explore.positions.zoom, center);
  }
  resetKiosk(navigate = true) {
    if (document.activeElement?.blur)
      document.activeElement?.blur();
    const level = localStorage.getItem("KIOSK.level");
    this._explore.setPositions(1, { x: 0.5, y: 0.5 });
    if (level)
      this._explore.setLevel(level);
    this._dialog.closeAll();
    if (navigate)
      this._router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function ParkingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["parking-kiosk-view"]], features: [\u0275\u0275ProvidersFeature([ExploreStateService, ExploreParkingService])], decls: 18, vars: 11, consts: [[1, "bg-base-200", "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "bg-base-100", "flex", "w-full", "items-center", "justify-center", "space-x-2", "p-4", "text-2xl"], [1, "border-info", "text-info", "rounded-sm", "border-2"], [1, "pl-2"], [1, "text-info", "text-2xl"], [1, "border-base-300", "pointer-events-none", "relative", "w-full", "flex-1", "border-y"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels"], [1, "bg-base-100", "flex", "w-full", "flex-col", "items-center", "p-2", "leading-tight"], [1, "text-3xl"], [1, "mb-2", "opacity-30"], [1, "bg-base-300", "h-4", "w-[50vw]", "rounded-full"], [1, "bg-success", "h-full", "rounded-full"]], template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "div", 2)(3, "icon");
        \u0275\u0275text(4, "local_parking");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6, "Parking Available");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "icon", 4);
        \u0275\u0275text(8, "arrow_forward");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "main", 5)(10, "interactive-map", 6);
        \u0275\u0275listener("zoomChange", function ParkingComponent_Template_interactive_map_zoomChange_10_listener($event) {
          return ctx.updateZoom($event);
        })("centerChange", function ParkingComponent_Template_interactive_map_centerChange_10_listener($event) {
          return ctx.updateCenter($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "footer", 7)(12, "div", 8);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 9);
        \u0275\u0275text(15);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 10);
        \u0275\u0275element(17, "div", 11);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275property("src", ctx.url())("zoom", ctx.positions()?.zoom)("center", ctx.positions()?.center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1("Free Spaces: ", ctx.counts().free);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" Total Capacity: ", ctx.counts().total, " spaces ");
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.counts().percent + "%");
      }
    }, dependencies: [InteractiveMapComponent, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingComponent, [{
    type: Component,
    args: [{ selector: "parking-kiosk-view", template: `
        <div class="bg-base-200 absolute inset-0 flex flex-col overflow-hidden">
            <header
                class="bg-base-100 flex w-full items-center justify-center space-x-2 p-4 text-2xl"
            >
                <div class="border-info text-info rounded-sm border-2">
                    <icon>local_parking</icon>
                </div>
                <div class="pl-2">Parking Available</div>
                <icon class="text-info text-2xl">arrow_forward</icon>
            </header>
            <main
                class="border-base-300 pointer-events-none relative w-full flex-1 border-y"
            >
                <interactive-map
                    [src]="url()"
                    [zoom]="positions()?.zoom"
                    [center]="positions()?.center"
                    (zoomChange)="updateZoom($event)"
                    (centerChange)="updateCenter($event)"
                    [styles]="styles()"
                    [features]="features()"
                    [actions]="actions()"
                    [labels]="labels()"
                ></interactive-map>
            </main>
            <footer
                class="bg-base-100 flex w-full flex-col items-center p-2 leading-tight"
            >
                <div class="text-3xl">Free Spaces: {{ counts().free }}</div>
                <div class="mb-2 opacity-30">
                    Total Capacity: {{ counts().total }} spaces
                </div>
                <div class="bg-base-300 h-4 w-[50vw] rounded-full">
                    <div
                        class="bg-success h-full rounded-full"
                        [style.width]="counts().percent + '%'"
                    ></div>
                </div>
            </footer>
        </div>
    `, providers: [ExploreStateService, ExploreParkingService], imports: [InteractiveMapComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/map-kiosk/src/app/parking.component.ts", lineNumber: 71 });
})();
export {
  ParkingComponent
};
//# debugId=d7745915-08f5-5adb-baec-bda23246bec5
//# sourceMappingURL=parking.component-FB36PTFN.js.map
