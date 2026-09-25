import {
  DynamicMapComponent,
  ExploreParkingService,
  ExploreStateService,
  MapZoomControlsComponent,
  MatDialog,
  SpacesService
} from "./chunk-XCTWUCJG.js";
import "./chunk-IKEERJPP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  VirtualKeyboardComponent,
  toSignal
} from "./chunk-5KP76DVV.js";
import "./chunk-3OHS5Q6J.js";
import "./chunk-MJDWVFNB.js";
import "./chunk-XNCONQPV.js";
import {
  ActivatedRoute,
  AsyncHandler,
  Component,
  IconComponent,
  Input,
  MapService,
  MapsPeopleService,
  MatRipple,
  MatRippleModule,
  OrganisationService,
  Output,
  Router,
  SettingsService,
  ViewChild,
  calculateDistance,
  computed,
  effect,
  i18n,
  inject,
  input,
  linkedSignal,
  log,
  model,
  notifyError,
  notifyWarn,
  output,
  randomString,
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
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
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
} from "./chunk-LVXZ33CU.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/cisco-map.component.ts
var _c0 = ["map_container"];
var DEFAULT_ZOOM = 18.5;
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
  async _initialiseMap() {
    try {
      SpacesDigitalMap;
    } catch {
      console.error("Cisco Spaces namespace is not defined");
      this.timeout("init", () => this._initialiseMap(), 1e3);
      return;
    }
    if (!SpacesDigitalMap) {
      console.error("Cisco Spaces namespace is not defined");
      this.timeout("init", () => this._initialiseMap(), 1e3);
      return;
    }
    const config = this._settings.get("app.explore.cisco_maps");
    const api_endpoint = config.api_endpoint;
    const b_resp = await fetch(`${api_endpoint}/buildings`, {
      method: "POST",
      headers: { "x-api-key": config.access_token }
    });
    const { result } = await b_resp.json();
    const { hashed_tenant_id, buildings } = result;
    const bld = buildings[0] || {};
    const resp = await fetch(`${api_endpoint}/sessionKey`, {
      method: "GET",
      headers: { "x-api-key": config.access_token },
      body: JSON.stringify({ building_id: bld.id })
    });
    const { session_key } = await resp.json();
    this._map = new SpacesDigitalMap({
      mapContainer: "cisco-map-container",
      sessionKey: session_key,
      tenantId: hashed_tenant_id,
      locationId: bld?.hashed_id,
      defaultFloor: bld?.floors[0]?.levelIndex,
      initialPos: bld?.coordinates,
      initialZoom: 20,
      initialPitch: 65,
      initialBearing: 118,
      poiLegendHolder: "poi-switch"
    });
    console.log("Map initialized", this._map);
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
    }, inputs: { zone: [1, "zone"], metadata: [1, "metadata"], options: [1, "options"], focus: [1, "focus"], zoom: [1, "zoom"], reset: [1, "reset"] }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 0, consts: [["map_container", ""], ["id", "cisco-map-container", 1, "absolute", "inset-0", "z-0"]], template: function CiscoMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "div", 1, 0);
      }
    }, encapsulation: 2 });
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
    ` }]
  }], null, { zone: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], metadata: [{ type: Input, args: [{ isSignal: true, alias: "metadata", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }], zoomChange: [{ type: Output, args: ["zoomChange"] }], zoneChange: [{ type: Output, args: ["zoneChange"] }], _mapContainer: [{ type: ViewChild, args: ["map_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CiscoMapComponent, { className: "CiscoMapComponent", filePath: "libs/components/src/lib/cisco-map.component.ts", lineNumber: 33 });
})();

// libs/components/src/lib/maps-indoors.component.ts
var _c02 = ["map_container"];
function MapsIndoorsComponent_Conditional_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 5);
  }
}
function MapsIndoorsComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275listener("click", function MapsIndoorsComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleDirections());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, MapsIndoorsComponent_Conditional_2_Conditional_5_Template, 1, 0, "mat-spinner", 5);
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
    this._floor_list = [];
    this._styled_resources = /* @__PURE__ */ new Map();
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
    if (!this.is_initialised) {
      return this.timeout("on_changes", () => this.ngOnChanges(changes));
    }
    if (changes.zone && this.zone()) {
      this._centerOnZone();
    }
    if (changes.focus && this.focus()) {
      this._focusOnLocation();
    }
    if (changes.metadata) {
      this._updateMapStyling();
    }
    const zoom = this.zoom();
    if (changes.zoom && zoom && !this.ignore_zoom()) {
      this._services?.map?.setZoom(zoom);
    }
    if (changes.reset) {
      this._services?.map?.setZoom(DEFAULT_ZOOM2);
      this._centerOnZone();
    }
    if (changes.options) {
      this._addFloorSelector();
    }
  }
  _setResource(id, resource) {
    RESOURCE_MAP[id] = resource;
    this.timeout("set_resource", () => {
      sessionStorage.setItem("PLACEOS.mapsindoors.resources", JSON.stringify(RESOURCE_MAP));
    });
  }
  _initialiseServices() {
    if (!this._maps_people.is_ready || !window.mapsindoors) {
      this.timeout("init", () => this._initialiseServices(), 1e3);
      return;
    }
    const [lat, long] = (this._org.building?.location || `-33.8567844,151.2152967`).split(",");
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
    window.maps_indoors = this._services;
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
    const item = items[0];
    const bld = this._org.buildings.find((bld2) => bld2.id === this.zone().parent_id);
    const [d_lng, d_lat] = item.properties?.anchor?.coordinates || bld?.location.split(",") || [37.8136, 144.9631];
    const options = { timeout: 1e4, enableHighAccuracy: true };
    navigator.geolocation.getCurrentPosition(async (position) => {
      this._last_position = position;
      this.setDirectionsFromLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude
      }, { lat: d_lat, lng: d_lng });
    }, () => {
      if (this._last_position) {
        this.setDirectionsFromLocation({
          lat: this._last_position.coords.latitude,
          lng: this._last_position.coords.longitude
        }, { lat: d_lat, lng: d_lng });
      } else
        notifyError(i18n("EXPLORE.LOCATE_CURRENT_FAILED"));
    }, options);
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
      this.loading_directions.set(false);
      if (!origin_error)
        return;
      notifyError(i18n("EXPLORE.LOCATE_ROUTE_FAILED", {
        error: i18n("EXPLORE.LOCATE_ORIGIN_ERROR")
      }));
    });
    if (!result)
      return;
    this._services.directions_renderer.setRoute(result);
    this.viewing_directions.set(true);
    this.loading_directions.set(false);
  }
  _handleZoomChange(level) {
    this.timeout("zoom_change", () => {
      this.ignore_zoom.set(true);
      this.zoom.set(level);
      this.zoomChange.emit(level);
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
  async _updateMapStyling() {
    if (!this._services)
      return;
    const styles = this.metadata()?.styles || {};
    for (const [style_id, resource_id] of this._styled_resources) {
      if (styles[style_id]?.fill)
        continue;
      this._services.mapsindoors.setDisplayRule(resource_id, null);
      this._styled_resources.delete(style_id);
    }
    for (const id in styles) {
      if (!styles[id].fill)
        continue;
      let resource = RESOURCE_MAP[id];
      if (!resource) {
        const id_simple = id.replace(/#/, "");
        const list = await this._search(id_simple);
        if (!list.length)
          continue;
        resource = list.find((_) => _.properties?.externalId === id_simple || _.properties?.roomId === id_simple || _.id === id_simple);
        if (resource)
          this._setResource(id, resource);
      }
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
    const bld = this._org.buildings.find((bld2) => bld2.id === this.zone().parent_id);
    const [lng, lat] = item.properties?.anchor?.coordinates || bld?.location.split(",") || [37.8136, 144.9631];
    this._services.map.setZoom(DEFAULT_ZOOM2);
    this._services.map.setCenter({ lat, lng });
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
    }, inputs: { zoneInput: [1, "zone", "zoneInput"], metadata: [1, "metadata"], options: [1, "options"], focus: [1, "focus"], zoomInput: [1, "zoom", "zoomInput"], reset: [1, "reset"] }, outputs: { zoomChange: "zoomChange", zoneChange: "zoneChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 3, vars: 1, consts: [["map_container", ""], [1, "absolute", "inset-0", "z-0"], ["btn", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "text-base-content", "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "shadow-sm"], ["btn", "", "matRipple", "", 1, "border-base-200", "bg-base-100", "text-base-content", "absolute", "bottom-2", "left-2", "z-10", "space-x-2", "shadow-sm", 3, "click"], [1, "pr-2"], ["diameter", "24"]], template: function MapsIndoorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "div", 1, 0);
        \u0275\u0275conditionalCreate(2, MapsIndoorsComponent_Conditional_2_Template, 6, 2, "button", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.focus() && !ctx.show_directions() && ctx.options()?.controls ? 2 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatProgressSpinnerModule, MatProgressSpinner, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapsIndoorsComponent, [{
    type: Component,
    args: [{ selector: "maps-indoors", template: `
        <div #map_container class="absolute inset-0 z-0"></div>
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
    `, imports: [MatRippleModule, MatProgressSpinnerModule, IconComponent] }]
  }], () => [], { zoneInput: [{ type: Input, args: [{ isSignal: true, alias: "zone", required: false }] }], metadata: [{ type: Input, args: [{ isSignal: true, alias: "metadata", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], zoomInput: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }], zoomChange: [{ type: Output, args: ["zoomChange"] }], zoneChange: [{ type: Output, args: ["zoneChange"] }], _container: [{ type: ViewChild, args: ["map_container", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapsIndoorsComponent, { className: "MapsIndoorsComponent", filePath: "libs/components/src/lib/maps-indoors.component.ts", lineNumber: 71 });
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
    this._settings = inject(SettingsService);
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
    this.reset_delay = 180;
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
    this.reset_delay = this._settings.get("app.inactivity_timeout_secs") || 180;
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/map-kiosk/src/app/parking.component.ts", lineNumber: 76 });
})();
export {
  ParkingComponent
};
//# debugId=40029ac7-3a83-53eb-805c-14fd9410ec75
//# sourceMappingURL=parking.component-6U5RABQX.js.map
