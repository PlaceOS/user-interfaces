import {
  ExploreStateService
} from "./chunk-O3XPA2S3.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-5URWLHVZ.js";
import {
  AsyncHandler,
  HotkeysService,
  IconComponent,
  MAP_FEATURE_DATA,
  MapService,
  MapViewer,
  MapsPeopleService,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  OrganisationService,
  SanitizePipe,
  SettingsService
} from "./chunk-QOLUT6QZ.js";
import {
  CommonModule,
  Component,
  DefaultValueAccessor,
  FormsModule,
  Injector,
  Input,
  MatRipple,
  MatRippleModule,
  NgComponentOutlet,
  NgControlStatus,
  NgModel,
  NgTemplateOutlet,
  NgZone,
  Output,
  TemplateRef,
  TranslatePipe,
  ViewChild,
  ViewChildren,
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
  unique,
  untracked,
  viewChild,
  viewChildren,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-P3URBYOL.js";
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
    this._mapContainer = viewChild.required("map_container");
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

// libs/components/src/lib/map-zoom-controls.component.ts
var MapZoomControlsComponent = class _MapZoomControlsComponent {
  constructor() {
    this.zoom = model(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
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
  }
  static {
    this.\u0275fac = function MapZoomControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapZoomControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapZoomControlsComponent, selectors: [["map-zoom-controls"]], inputs: { zoom: [1, "zoom"], reset: [1, "reset"] }, outputs: { zoom: "zoomChange", reset: "resetChange" }, decls: 13, vars: 9, consts: [[1, "bg-base-100", "divide-base-300", "border-base-300", "absolute", "right-2", "bottom-16", "flex", "flex-col", "divide-y", "overflow-hidden", "rounded-lg", "border", "shadow-md"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "hover:bg-base-200", 3, "click", "matTooltip"]], template: function MapZoomControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_1_listener($event) {
          ctx.zoom.set(ctx.zoom() * 1.1);
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(3, "icon");
        \u0275\u0275text(4, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "button", 1);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_5_listener($event) {
          ctx.zoom.set(ctx.zoom() * (10 / 11));
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 1);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_9_listener($event) {
          ctx.reset.set(ctx.reset() + 1);
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12, "refresh");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "EXPLORE.ZOOM_RESET"));
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, TranslatePipe], styles: ["\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=map-zoom-controls.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapZoomControlsComponent, [{
    type: Component,
    args: [{ selector: "map-zoom-controls", template: `
        <div
            class="bg-base-100 divide-base-300 border-base-300 absolute right-2 bottom-16 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
        >
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * 1.1); $event.stopPropagation()"
            >
                <icon>add</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * (10 / 11)); $event.stopPropagation()"
            >
                <icon>remove</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="reset.set(reset() + 1); $event.stopPropagation()"
            >
                <icon>refresh</icon>
            </button>
        </div>
    `, imports: [IconComponent, TranslatePipe, MatRippleModule, MatTooltipModule], styles: ["/* angular:styles/component:css;3acd8ef39876159d073e8897fa9cab043ba04b0b5279b833ba6e69fa287e4f39;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-zoom-controls.component.ts */\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=map-zoom-controls.component.css.map */\n"] }]
  }], null, { zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }, { type: Output, args: ["resetChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapZoomControlsComponent, { className: "MapZoomControlsComponent", filePath: "libs/components/src/lib/map-zoom-controls.component.ts", lineNumber: 55 });
})();

// libs/components/src/lib/dynamic-map.component.ts
var _c02 = ["mapContainer"];
var _c1 = ["feature"];
var _c2 = ["*"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.selector;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.text;
var _forTrack4 = ($index, $item) => $item.track_id || $index;
function DynamicMapComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 48);
  }
}
function DynamicMapComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_FAILED_TO_LOAD"), " ");
  }
}
function DynamicMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicMapComponent_Conditional_2_Conditional_0_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275conditionalCreate(1, DynamicMapComponent_Conditional_2_Conditional_1_Template, 4, 3, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loading() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error() ? 1 : -1);
  }
}
function DynamicMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_EMPTY"), " ");
  }
}
function DynamicMapComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "map-zoom-controls", 9);
    \u0275\u0275twoWayListener("zoomChange", function DynamicMapComponent_Conditional_5_Template_map_zoom_controls_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.zoom, $event) || (ctx_r0.zoom = $event);
      return \u0275\u0275resetView($event);
    })("resetChange", function DynamicMapComponent_Conditional_5_Template_map_zoom_controls_resetChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reset, $event) || (ctx_r0.reset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("zoom", ctx_r0.zoom)("reset", ctx_r0.reset);
  }
}
function DynamicMapComponent_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DynamicMapComponent_Conditional_6_For_5_Template_button_click_0_listener() {
      const section_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugSection(section_r4.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-white/30", ctx_r0.debug_section() === section_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", section_r4.key, " (", section_r4.count, ") ");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
  if (rf & 2) {
    const prop_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", prop_r6.color);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Conditional_3_Template, 1, 2, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(" " + prop_r6.name + ": " + prop_r6.value + ";");
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r6.color ? 3 : -1);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Template, 4, 2, "div", 16, _forTrack2);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r7.selector + " {");
    \u0275\u0275advance();
    \u0275\u0275repeater(block_r7.props);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("}");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.debug_filter().trim() ? "No matches" : "No styles");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_Template, 6, 2, null, null, _forTrack1, false, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_ForEmpty_2_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.debug_style_blocks());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, " [missing on map] ");
    \u0275\u0275elementEnd();
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("mouseenter", function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template_div_mouseenter_0_listener() {
      const entry_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.highlightDebugEntry(entry_r9));
    })("mouseleave", function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template_div_mouseleave_0_listener() {
      const entry_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.clearDebugHighlight(entry_r9));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Conditional_3_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    \u0275\u0275classProp("bg-red-500/20", entry_r9.missing)("text-red-200", entry_r9.missing)("cursor-default", entry_r9.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r9.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.missing ? 3 : -1);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.debug_detail_empty_text());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template, 4, 8, "div", 19, _forTrack3, false, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_ForEmpty_2_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.debug_detail_entries());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function DynamicMapComponent_Conditional_6_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.debug_filter, $event) || (ctx_r0.debug_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275conditionalCreate(2, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_Template, 3, 1)(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.debug_filter);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.debug_section() === "styles" ? 2 : 3);
  }
}
function DynamicMapComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275repeaterCreate(4, DynamicMapComponent_Conditional_6_For_5_Template, 2, 4, "button", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DynamicMapComponent_Conditional_6_Conditional_6_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_text(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.debug_sections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.debug_section() ? 6 : -1);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_ng_container_0_Template, 1, 0, "ng-container", 24);
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    const element_r11 = ctx_r9.$implicit;
    const \u0275$index_81_r12 = ctx_r9.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", element_r11.content)("ngComponentOutletInjector", ctx_r0.injectors()[\u0275$index_81_r12]);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const element_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, element_r11.content), \u0275\u0275sanitizeHtml);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_ng_container_0_Template, 1, 0, "ng-container", 25);
  }
  if (rf & 2) {
    const element_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngTemplateOutlet", element_r11.content)("ngTemplateOutletContext", element_r11.data);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 22, 1);
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_Template, 1, 2, "ng-container")(4, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_4_Template, 2, 3, "div", 23)(5, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const element_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("el-id", element_r11.location)("track-id", element_r11.track_id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r0.contentType(element_r11.content)) === "component" ? 3 : tmp_17_0 === "html" ? 4 : 5);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Template, 6, 3, "div");
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275conditional(element_r11 ? 0 : -1);
  }
}
function DynamicMapComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, DynamicMapComponent_Conditional_7_For_2_Template, 1, 1, null, null, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.features());
  }
}
var DynamicMapComponent = class _DynamicMapComponent {
  toggleDebugSection(section) {
    this.debug_section.update((current) => current === section ? null : section);
  }
  highlightDebugEntry(entry) {
    if (!entry.ref || entry.missing)
      return;
    this._map_viewer?.setDebugHighlight(entry.ref);
  }
  clearDebugHighlight(entry) {
    if (!entry.ref || entry.missing)
      return;
    this._map_viewer?.setDebugHighlight("");
  }
  constructor() {
    this._injector = inject(Injector);
    this._zone = inject(NgZone);
    this._map_viewer = null;
    this._last_src = "";
    this._map_container = viewChild(
      "mapContainer",
      ...ngDevMode ? [{ debugName: "_map_container" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._feature_elements = viewChildren("feature", __spreadValues({}, ngDevMode ? { debugName: "_feature_elements" } : (
      /* istanbul ignore next */
      {}
    )));
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
    this.fixedResolution = input(
      0,
      ...ngDevMode ? [{ debugName: "fixedResolution" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug = model(
      false,
      ...ngDevMode ? [{ debugName: "debug" }] : (
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
    this.mapInfo = output();
    this.injectors = signal(
      [],
      ...ngDevMode ? [{ debugName: "injectors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
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
    this._element_mappings = signal(
      null,
      ...ngDevMode ? [{ debugName: "_element_mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._hotkey_sub = inject(HotkeysService).listen(["Control", "Alt", "Shift", "KeyG"], () => this.debug.update((state) => !state));
    this._debug_state = signal(
      null,
      ...ngDevMode ? [{ debugName: "_debug_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_text = computed(
      () => {
        const state = this._debug_state();
        if (!state)
          return "";
        const center = this.center();
        const status = this.error() ? "error" : this.loading() ? "loading" : this.src() ? "ready" : "no map";
        return [
          "MAP DEBUG (Ctrl+Alt+Shift+G)",
          `src:      ${this._middleTruncate(this.src().split("/").pop() || "\u2014", 36)}`,
          `status:   ${status}`,
          `texture:  ${state.texture} (${state.texture_mode})`,
          `aspect:   ${state.aspect}`,
          `view:     ${state.view}`,
          `zoom:     ${this.zoom().toFixed(2)}`,
          `center:   ${center.x.toFixed(3)}, ${center.y.toFixed(3)}`,
          `pointer:  ${state.pointer}`,
          `hover:    ${state.hover}`,
          `elements: ${state.elements}`,
          `overlays: ${state.overlays}`,
          `draw:     ${state.draw}`
        ].join("\n");
      },
      ...ngDevMode ? [{ debugName: "debug_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_section = signal(
      null,
      ...ngDevMode ? [{ debugName: "debug_section" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "debug_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_sections = computed(
      () => [
        { key: "styles", count: Object.keys(this.styles() || {}).length },
        { key: "features", count: (this.features() || []).length },
        { key: "labels", count: (this.labels() || []).length },
        { key: "actions", count: (this.actions() || []).length }
      ],
      ...ngDevMode ? [{ debugName: "debug_sections" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_style_blocks = computed(
      () => {
        if (this.debug_section() !== "styles")
          return [];
        const blocks = Object.entries(this.styles() || {}).map(([selector, style]) => ({
          selector,
          props: Object.entries(style).map(([name, value]) => {
            const value_text = `${value}`;
            const color = value_text.replace("!important", "").trim();
            return {
              name,
              value: value_text,
              color: typeof CSS !== "undefined" && CSS.supports("color", color) ? color : ""
            };
          })
        }));
        const filter = this.debug_filter().trim().toLowerCase();
        if (!filter)
          return blocks;
        return blocks.filter(({ selector, props }) => selector.toLowerCase().includes(filter) || props.some((prop) => `${prop.name}: ${prop.value}`.toLowerCase().includes(filter)));
      },
      ...ngDevMode ? [{ debugName: "debug_style_blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_detail_entries = computed(
      () => {
        const section = this.debug_section();
        let entries;
        switch (section) {
          case "features":
            entries = this._describeFeatures();
            break;
          case "labels":
            entries = this._describeLabels();
            break;
          case "actions":
            entries = this._describeActions();
            break;
          default:
            return [];
        }
        const filter = this.debug_filter().trim().toLowerCase();
        if (filter) {
          entries = entries.filter((entry) => entry.text.toLowerCase().includes(filter));
        }
        return entries;
      },
      ...ngDevMode ? [{ debugName: "debug_detail_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_detail_empty_text = computed(
      () => {
        const section = this.debug_section();
        const filter = this.debug_filter().trim();
        return filter ? "No matches" : `No ${section}`;
      },
      ...ngDevMode ? [{ debugName: "debug_detail_empty_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const src = this.src();
      if (src && this._map_viewer) {
        if (this._last_src && this._last_src !== src) {
          this.zoom.set(1);
          this.center.set({ x: 0.5, y: 0.5 });
        }
        this._last_src = src;
        this._loadMap(src);
      }
    });
    effect(() => {
      const styles = this.styles() || {};
      if (this._map_viewer) {
        this._applyStyles(styles);
      }
    });
    effect(() => {
      const features = this.features() || [];
      const labels = this.labels() || [];
      const feature_elements = this._feature_elements();
      if (this._map_viewer) {
        this._applyOverlays(features, labels, feature_elements);
      }
    });
    effect(() => {
      this.features();
      this._updateInjectors();
    });
    effect(() => {
      const actions = this.actions() || [];
      if (this._map_viewer) {
        this._applyActions(actions);
      }
    });
    effect(() => {
      const zoom_val = this.zoom() ?? 1;
      this._map_viewer?.setZoom(zoom_val);
    });
    effect(() => {
      const center_val = this.center() ?? { x: 0.5, y: 0.5 };
      this._map_viewer?.setCenter(__spreadValues({}, center_val));
    });
    effect(() => {
      const megapixels = this.fixedResolution() ?? 0;
      this._map_viewer?.setFixedResolution(megapixels);
    });
    effect(() => {
      const options = this.options();
      this._map_viewer?.setOptions(options || {});
    });
    effect(() => {
      if (this.reset() > 0) {
        this.zoom.set(1);
        this.center.set({ x: 0.5, y: 0.5 });
      }
    });
    effect(() => {
      const focus = this.focus();
      if (focus && this._element_mappings()) {
        this._map_viewer?.focusOn(focus);
      }
    });
    effect((onCleanup) => {
      this._map_viewer?.setDebug(this.debug());
      if (!this.debug()) {
        this._debug_state.set(null);
        this.debug_section.set(null);
        this.debug_filter.set("");
        return;
      }
      const update = () => {
        const viewer = this._map_viewer;
        if (!viewer)
          return;
        const image = viewer.map_image;
        const info = viewer.debug_info;
        this._debug_state.set({
          texture: image ? `${image.width}\xD7${image.height}` : "none",
          texture_mode: viewer.texture_mode,
          aspect: (viewer.map?.aspect_ratio || 1).toFixed(3),
          view: `${viewer.container.clientWidth}\xD7${viewer.container.clientHeight}`,
          pointer: info.pointer ? `${info.pointer.x.toFixed(3)}, ${info.pointer.y.toFixed(3)}` : "\u2014",
          hover: info.hover_id ? `#${info.hover_id}` : "\u2014",
          elements: viewer.map?.element_bounds.size || 0,
          overlays: viewer.overlay_count,
          draw: `${info.last_draw_ms.toFixed(1)}ms \xB7 ${info.draws_last_second}/s`
        });
      };
      update();
      const interval = setInterval(update, 250);
      onCleanup(() => clearInterval(interval));
    });
  }
  ngOnInit() {
    const container = this._map_container()?.nativeElement;
    if (!container)
      return;
    this._map_viewer = this._zone.runOutsideAngular(() => new MapViewer(container));
    this._map_viewer.onViewChange = (event) => this._zone.run(() => {
      this.zoom.set(event.zoom);
      this.center.set(event.center);
    });
  }
  ngOnDestroy() {
    this._hotkey_sub.unsubscribe();
    this._map_viewer?.destroy();
    this._map_viewer = null;
  }
  /**
   * Determine the type of content for rendering in template
   */
  contentType(content) {
    return typeof content === "string" ? "html" : content instanceof TemplateRef ? "template" : "component";
  }
  _loadMap(src) {
    const simp_url = src.toLowerCase();
    if (!simp_url.includes("svg") && !simp_url.includes("upload"))
      return;
    this.loading.set(true);
    this.error.set(false);
    this._map_viewer.setMap(src).then(() => {
      if (this.src() !== src || !this._map_viewer)
        return;
      this.loading.set(false);
      const mappings = Object.fromEntries(this._map_viewer.map?.element_bounds || []);
      this._element_mappings.set(mappings);
      this.mapInfo.emit(mappings);
    }).catch((e) => {
      console.warn("[MAP] Failed to load map.", e);
      if (this.src() !== src)
        return;
      this.loading.set(false);
      this.error.set(true);
    });
  }
  _applyStyles(styles) {
    if (!this._map_viewer)
      return;
    const style_map = {};
    for (const [selector, style_obj] of Object.entries(styles)) {
      style_map[selector] = this._objectToCssText(style_obj);
    }
    this._map_viewer.setStyles(style_map);
  }
  _objectToCssText(style_obj) {
    return Object.entries(style_obj).map(([prop, value]) => {
      const kebab_prop = prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      const important = `${value}`.includes("!important") ? "" : " !important";
      return `${kebab_prop}: ${value}${important}`;
    }).join("; ");
  }
  _applyOverlays(features, labels, feature_elements) {
    if (!this._map_viewer)
      return;
    const overlays = [];
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      if (!feature.location)
        continue;
      let contents;
      const content_type = this.contentType(feature.content);
      if (content_type === "component" || content_type === "template") {
        const rendered_el = feature_elements[i]?.nativeElement;
        if (!rendered_el)
          continue;
        contents = rendered_el;
      } else if (feature.content instanceof HTMLElement) {
        contents = feature.content;
      } else if (typeof feature.content === "string") {
        contents = feature.content;
      } else {
        continue;
      }
      const fill_bounds = feature.hover || feature.full_size;
      overlays.push({
        ref: feature.location,
        type: fill_bounds ? "box" : "point",
        contents,
        scale_with_zoom: !fill_bounds,
        hover: feature.hover,
        z_index: feature.z_index
      });
    }
    for (const label of labels) {
      if (!label.location || !label.content)
        continue;
      const classes = ["map-label", ...label.css_class || []].join(" ");
      overlays.push({
        ref: label.location,
        type: "point",
        contents: `<label class="${classes}">${label.content}</label>`,
        scale_with_zoom: true,
        min_zoom: label.zoom_level,
        z_index: label.z_index
      });
    }
    this._map_viewer.setOverlays(overlays);
  }
  _applyActions(actions) {
    if (!this._map_viewer)
      return;
    const map_actions = [];
    for (const action of actions) {
      if (!action.id)
        continue;
      const events = this._convertActionTypes(action.action);
      if (events.length === 0)
        continue;
      const callback = (p) => {
        const synthetic_event = new CustomEvent("mapaction", {
          detail: { point: p }
        });
        action.callback(synthetic_event, { x: p.x, y: p.y });
      };
      map_actions.push({
        ref: action.id,
        events,
        priority: action.priority,
        callback
      });
    }
    this._map_viewer.setActions(map_actions);
  }
  _convertActionTypes(action_types) {
    const types = Array.isArray(action_types) ? action_types : [action_types];
    const events = [];
    for (const type of types) {
      switch (type) {
        case "click":
          events.push("click");
          break;
        case "mousedown":
        case "touchstart":
          events.push("pointerdown");
          break;
        case "mouseup":
        case "touchend":
          events.push("pointerup");
          break;
        case "enter":
          events.push("pointerenter");
          break;
        case "leave":
          events.push("pointerleave");
          break;
        case "*":
          events.push("click", "pointerdown", "pointerup", "pointerenter", "pointerleave");
          break;
        default:
          events.push(type);
      }
    }
    return unique(events);
  }
  /** Truncate the middle of a string with "..." to fit the given length */
  _middleTruncate(value, max_length) {
    if (value.length <= max_length)
      return value;
    const keep = max_length - 3;
    const front = Math.ceil(keep / 2);
    const back = keep - front;
    return `${value.slice(0, front)}...${value.slice(value.length - back)}`;
  }
  _formatLocation(location) {
    return typeof location === "string" ? `#${location}` : `${location.x.toFixed(3)}, ${location.y.toFixed(3)}`;
  }
  _debugRef(ref) {
    if (typeof ref !== "string") {
      return { location: this._formatLocation(ref), missing: false };
    }
    return {
      ref,
      location: this._formatLocation(ref),
      missing: !!this._element_mappings() && !this._element_mappings()?.[ref]
    };
  }
  _describeFeatures() {
    return (this.features() || []).map((feature, index) => {
      const target = this._debugRef(feature.location);
      const content = feature.content instanceof HTMLElement ? "element" : feature.content ? this.contentType(feature.content) : "none";
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          feature.track_id ? `track: ${feature.track_id}` : "",
          `content: ${content}`,
          feature.hover ? "hover" : "",
          feature.full_size ? "full-size" : "",
          feature.z_index != null ? `z: ${feature.z_index}` : "",
          feature.data && Object.keys(feature.data).length ? `data: ${Object.keys(feature.data).join(", ")}` : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _describeLabels() {
    return (this.labels() || []).map((label, index) => {
      const target = this._debugRef(label.location);
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          `"${label.content}"`,
          label.zoom_level != null ? `zoom \u2265 ${label.zoom_level}` : "",
          label.css_class?.length ? `class: ${label.css_class.join(" ")}` : "",
          label.z_index != null ? `z: ${label.z_index}` : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _describeActions() {
    return (this.actions() || []).map((action, index) => {
      const types = Array.isArray(action.action) ? action.action : [action.action];
      const target = this._debugRef(action.id);
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          types.join(", "),
          action.priority != null ? `priority: ${action.priority}` : "",
          action.zone ? "zone" : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _updateInjectors() {
    const old_injectors = new Map(untracked(() => this.injectors()).map((injector) => [
      injector.get(MAP_FEATURE_DATA)?.track_id,
      injector
    ]));
    this.injectors.set((this.features() || []).map((f) => f.track_id && old_injectors.get(f.track_id) || Injector.create({
      providers: [
        {
          provide: MAP_FEATURE_DATA,
          useValue: __spreadValues({
            track_id: f.track_id
          }, f.data)
        }
      ],
      parent: this._injector
    })));
  }
  static {
    this.\u0275fac = function DynamicMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicMapComponent, selectors: [["dynamic-map"]], viewQuery: function DynamicMapComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._map_container, _c02, 5)(ctx._feature_elements, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { src: [1, "src"], zoom: [1, "zoom"], center: [1, "center"], fixedResolution: [1, "fixedResolution"], debug: [1, "debug"], reset: [1, "reset"], styles: [1, "styles"], features: [1, "features"], labels: [1, "labels"], actions: [1, "actions"], options: [1, "options"], focus: [1, "focus"] }, outputs: { zoom: "zoomChange", center: "centerChange", debug: "debugChange", reset: "resetChange", mapInfo: "mapInfo" }, ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["mapContainer", ""], ["feature", ""], ["tabindex", "0", "role", "map", 1, "absolute", "inset-0"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [3, "zoom", "reset"], [1, "absolute", "top-2", "right-2", "z-40", "flex", "max-h-[80%]", "max-w-[32rem]", "flex-col", "rounded", "bg-black/80", "font-mono", "text-[11px]", "leading-4", "text-white"], ["hidden", ""], [1, "absolute", "z-30", 3, "diameter"], [1, "opacity-30"], [3, "zoomChange", "resetChange", "zoom", "reset"], [1, "pointer-events-none", "p-2", "whitespace-pre"], [1, "flex", "gap-1", "px-2", "pb-2"], [1, "rounded", "border", "border-white/30", "px-1", "hover:bg-white/20", 3, "bg-white/30"], [1, "rounded", "border", "border-white/30", "px-1", "hover:bg-white/20", 3, "click"], ["placeholder", "Filter...", 1, "mx-2", "mb-2", "rounded", "border", "border-white/30", "bg-white/10", "px-1", "outline-none", "placeholder:text-white/40", 3, "ngModelChange", "ngModel"], [1, "overflow-auto", "border-t", "border-white/20", "p-2", "whitespace-pre", "select-text"], [1, "flex", "items-center"], [1, "ml-1.5", "inline-block", "h-2.5", "w-2.5", "rounded-sm", "border", "border-white/40", 3, "background"], [1, "ml-1.5", "inline-block", "h-2.5", "w-2.5", "rounded-sm", "border", "border-white/40"], [1, "rounded", "px-1", 3, "bg-red-500/20", "text-red-200", "cursor-default"], [1, "rounded", "px-1", 3, "mouseenter", "mouseleave"], [1, "ml-1", "text-red-300"], [1, "pointer-events-none", "h-full", "w-full"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DynamicMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "div", 2, 0);
        \u0275\u0275conditionalCreate(2, DynamicMapComponent_Conditional_2_Template, 2, 2)(3, DynamicMapComponent_Conditional_3_Template, 4, 3, "div", 3);
        \u0275\u0275projection(4);
        \u0275\u0275conditionalCreate(5, DynamicMapComponent_Conditional_5_Template, 1, 2, "map-zoom-controls", 4);
        \u0275\u0275conditionalCreate(6, DynamicMapComponent_Conditional_6_Template, 7, 2, "div", 5);
        \u0275\u0275conditionalCreate(7, DynamicMapComponent_Conditional_7_Template, 3, 0, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", !ctx.src());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.src() ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.options()?.controls ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.debug() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.injectors().length ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgComponentOutlet,
      NgTemplateOutlet,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MapZoomControlsComponent,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=dynamic-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicMapComponent, [{
    type: Component,
    args: [{ selector: "dynamic-map", template: `
        <div
            #mapContainer
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src()"
        ></div>
        @if (src()) {
            @if (loading()) {
                <mat-spinner class="absolute z-30" [diameter]="48" />
            }
            @if (error()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="opacity-30">
                        {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                    </div>
                </div>
            }
        } @else {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_EMPTY' | translate }}
                </div>
            </div>
        }
        <ng-content />
        @if (options()?.controls) {
            <map-zoom-controls [(zoom)]="zoom" [(reset)]="reset" />
        }
        @if (debug()) {
            <div
                class="absolute top-2 right-2 z-40 flex max-h-[80%] max-w-[32rem] flex-col rounded bg-black/80 font-mono text-[11px] leading-4 text-white"
            >
                <div class="pointer-events-none p-2 whitespace-pre">
                    {{ debug_text() }}
                </div>
                <div class="flex gap-1 px-2 pb-2">
                    @for (section of debug_sections(); track section.key) {
                        <button
                            class="rounded border border-white/30 px-1 hover:bg-white/20"
                            [class.bg-white/30]="
                                debug_section() === section.key
                            "
                            (click)="toggleDebugSection(section.key)"
                        >
                            {{ section.key }} ({{ section.count }})
                        </button>
                    }
                </div>
                @if (debug_section()) {
                    <input
                        class="mx-2 mb-2 rounded border border-white/30 bg-white/10 px-1 outline-none placeholder:text-white/40"
                        placeholder="Filter..."
                        [(ngModel)]="debug_filter"
                    />
                    <div
                        class="overflow-auto border-t border-white/20 p-2 whitespace-pre select-text"
                    >
                        @if (debug_section() === 'styles') {
                            @for (
                                block of debug_style_blocks();
                                track block.selector
                            ) {
                                <div>{{ block.selector + ' {' }}</div>
                                @for (prop of block.props; track prop.name) {
                                    <div class="flex items-center">
                                        <span>{{
                                            '  ' +
                                                prop.name +
                                                ': ' +
                                                prop.value +
                                                ';'
                                        }}</span>
                                        @if (prop.color) {
                                            <span
                                                class="ml-1.5 inline-block h-2.5 w-2.5 rounded-sm border border-white/40"
                                                [style.background]="prop.color"
                                            ></span>
                                        }
                                    </div>
                                }
                                <div>{{ '}' }}</div>
                            } @empty {
                                <span>{{
                                    debug_filter().trim()
                                        ? 'No matches'
                                        : 'No styles'
                                }}</span>
                            }
                        } @else {
                            @for (
                                entry of debug_detail_entries();
                                track entry.text
                            ) {
                                <div
                                    class="rounded px-1"
                                    [class.bg-red-500/20]="entry.missing"
                                    [class.text-red-200]="entry.missing"
                                    [class.cursor-default]="entry.ref"
                                    (mouseenter)="highlightDebugEntry(entry)"
                                    (mouseleave)="clearDebugHighlight(entry)"
                                >
                                    <span>{{ entry.text }}</span>
                                    @if (entry.missing) {
                                        <span class="ml-1 text-red-300">
                                            [missing on map]
                                        </span>
                                    }
                                </div>
                            } @empty {
                                <span>{{ debug_detail_empty_text() }}</span>
                            }
                        }
                    </div>
                }
            </div>
        }
        @if (injectors().length) {
            <div hidden>
                @for (
                    element of features();
                    track $any(element).track_id || $index;
                    let i = $index
                ) {
                    @if (element) {
                        <div>
                            <div
                                #feature
                                class="pointer-events-none h-full w-full"
                                [attr.el-id]="element.location"
                                [attr.track-id]="$any(element).track_id"
                            >
                                @switch (contentType(element.content)) {
                                    @case ('component') {
                                        <ng-container
                                            *ngComponentOutlet="
                                                $any(element.content);
                                                injector: injectors()[i]
                                            "
                                        ></ng-container>
                                    }
                                    @case ('html') {
                                        <div
                                            [innerHTML]="
                                                element.content | sanitize
                                            "
                                        ></div>
                                    }
                                    @default {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                $any(element.content);
                                                context: $any(element).data
                                            "
                                        ></ng-container>
                                    }
                                }
                            </div>
                        </div>
                    }
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      SanitizePipe,
      MatProgressSpinnerModule,
      MapZoomControlsComponent
    ], styles: ["/* angular:styles/component:css;e76799c5a4b056820df2f2f8571cac7c4ed809c9aa76d565965bc043e79b2d5d;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/dynamic-map.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nmat-spinner {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=dynamic-map.component.css.map */\n"] }]
  }], () => [], { _map_container: [{ type: ViewChild, args: ["mapContainer", { isSignal: true }] }], _feature_elements: [{ type: ViewChildren, args: ["feature", __spreadProps(__spreadValues({}, {}), { isSignal: true })] }], src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }], fixedResolution: [{ type: Input, args: [{ isSignal: true, alias: "fixedResolution", required: false }] }], debug: [{ type: Input, args: [{ isSignal: true, alias: "debug", required: false }] }, { type: Output, args: ["debugChange"] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }, { type: Output, args: ["resetChange"] }], styles: [{ type: Input, args: [{ isSignal: true, alias: "styles", required: false }] }], features: [{ type: Input, args: [{ isSignal: true, alias: "features", required: false }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }], actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], mapInfo: [{ type: Output, args: ["mapInfo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicMapComponent, { className: "DynamicMapComponent", filePath: "libs/components/src/lib/dynamic-map.component.ts", lineNumber: 247 });
})();

// libs/components/src/lib/maps-indoors.component.ts
var _c03 = ["map_container"];
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
        \u0275\u0275viewQuerySignal(ctx._container, _c03, 5);
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
var _c04 = ["*", "*", "*"];
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InteractiveMapComponent, selectors: [["interactive-map"]], inputs: { src: [1, "src"], zoom: [1, "zoom"], center: [1, "center"], reset: [1, "reset"], styles: [1, "styles"], features: [1, "features"], labels: [1, "labels"], actions: [1, "actions"], options: [1, "options"], focus: [1, "focus"], fixedResolution: [1, "fixedResolution"] }, outputs: { zoom: "zoomChange", center: "centerChange", reset: "resetChange", mapInfo: "mapInfo" }, ngContentSelectors: _c04, decls: 4, vars: 2, consts: [[3, "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "src", "zoom", "center", "reset", "styles", "features", "actions", "labels", "options", "focus", "fixedResolution"], [3, "zoom", "reset"], [3, "zoneChange", "zoomChange", "zone", "zoom", "options", "reset", "focus", "metadata"], [3, "zoomChange", "centerChange", "mapInfo", "src", "zoom", "center", "reset", "styles", "features", "actions", "labels", "options", "focus", "fixedResolution"], [3, "zoomChange", "resetChange", "zoom", "reset"]], template: function InteractiveMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c04);
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

export {
  InteractiveMapComponent
};
//# sourceMappingURL=chunk-G4YM3N3T.js.map
