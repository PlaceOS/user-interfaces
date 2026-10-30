import {
  InteractiveMapComponent
} from "./chunk-F6NQGILC.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-WZBYY54Y.js";
import {
  MAT_DIALOG_DATA,
  MatDialogClose,
  MatDialogModule
} from "./chunk-2K5G7CFD.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5GXWVSSG.js";
import {
  MatFormField,
  MatFormFieldModule,
  MatPrefix
} from "./chunk-54KE5JKV.js";
import {
  MatOption
} from "./chunk-G7ZLBZI3.js";
import {
  TranslatePipe
} from "./chunk-IGQY3INR.js";
import {
  BuildingLevel,
  DefaultValueAccessor,
  FormsModule,
  MAP_FEATURE_DATA,
  MapsPeopleService,
  NgControlStatus,
  NgModel,
  OrganisationService
} from "./chunk-ACYV7NM4.js";
import {
  IconComponent
} from "./chunk-QVU2YYRL.js";
import {
  AsyncHandler,
  unique
} from "./chunk-JYQPCPCB.js";
import {
  MatRippleModule
} from "./chunk-3WBJTYSG.js";
import {
  MatRipple
} from "./chunk-QSD4JXRO.js";
import {
  CommonModule,
  Component,
  SlicePipe,
  computed,
  effect,
  inject,
  resource,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-QAVCSYNX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/poi-manager/map-show-element.component.ts
var MapShowElementComponent = class _MapShowElementComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this.hover = signal(
      !!this._data?.hover,
      ...ngDevMode ? [{ debugName: "hover" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function MapShowElementComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapShowElementComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapShowElementComponent, selectors: [["map-show-element"]], decls: 2, vars: 8, consts: [[1, "relative", "h-full", "w-full", "border-4"], [1, "absolute", "inset-0", "opacity-40"]], template: function MapShowElementComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-warning", ctx.hover())("border-success", !ctx.hover());
        \u0275\u0275advance();
        \u0275\u0275classProp("bg-warning", ctx.hover())("bg-success", !ctx.hover());
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapShowElementComponent, [{
    type: Component,
    args: [{ selector: "map-show-element", template: `
        <div
            class="relative h-full w-full border-4"
            [class.border-warning]="hover()"
            [class.border-success]="!hover()"
        >
            <div
                class="absolute inset-0 opacity-40"
                [class.bg-warning]="hover()"
                [class.bg-success]="!hover()"
            ></div>
        </div>
    `, imports: [] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapShowElementComponent, { className: "MapShowElementComponent", filePath: "apps/concierge/src/app/poi-manager/map-show-element.component.ts", lineNumber: 22 });
})();

// apps/concierge/src/app/ui/select-map-item-modal.component.ts
var _c0 = () => ({ controls: true });
var _c1 = (a0) => ({ count: a0 });
function SelectMapItemModalComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
  }
}
function SelectMapItemModalComponent_Conditional_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r1.page() * 100 + 1, " - ", ctx_r1.search_results().length > ctx_r1.page() * 100 + 100 ? ctx_r1.page() * 100 + 100 : ctx_r1.search_results().length, " ");
  }
}
function SelectMapItemModalComponent_Conditional_26_For_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const poi_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-70", poi_r4.id !== ctx_r1.selected());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", poi_r4.location, " ");
  }
}
function SelectMapItemModalComponent_Conditional_26_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_26_For_1_Template_button_click_0_listener() {
      const poi_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected.set(poi_r4.id));
    })("mouseover", function SelectMapItemModalComponent_Conditional_26_For_1_Template_button_mouseover_0_listener() {
      const poi_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hovered.set(poi_r4.id));
    })("focus", function SelectMapItemModalComponent_Conditional_26_For_1_Template_button_focus_0_listener() {
      const poi_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.hovered.set(poi_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 23)(2, "div", 24);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, SelectMapItemModalComponent_Conditional_26_For_1_Conditional_4_Template, 2, 3, "div", 25);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const poi_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-primary!", poi_r4.id === ctx_r1.selected())("text-primary-content!", poi_r4.id === ctx_r1.selected());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(poi_r4.name || poi_r4.id);
    \u0275\u0275advance();
    \u0275\u0275conditional(poi_r4.location ? 4 : -1);
  }
}
function SelectMapItemModalComponent_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, SelectMapItemModalComponent_Conditional_26_For_1_Template, 5, 6, "button", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(2, "slice");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(2, 0, ctx_r1.search_results(), ctx_r1.page() * 100, ctx_r1.page() * 100 + 100));
  }
}
function SelectMapItemModalComponent_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "img", 27);
    \u0275\u0275elementStart(2, "div", 28);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY"), " ");
  }
}
function SelectMapItemModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 29);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_28_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.page() - 1));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 30);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_28_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(0));
    });
    \u0275\u0275text(6, " 1 ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31)(8, "icon");
    \u0275\u0275text(9, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 32);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31)(13, "icon");
    \u0275\u0275text(14, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 33);
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_28_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.last_page()));
    });
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 29);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function SelectMapItemModalComponent_Conditional_28_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.page.set(ctx_r1.page() + 1));
    });
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === 0);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(2, 24, "COMMON.PREVIOUS"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("bg-secondary!", ctx_r1.page() === 0)("text-secondary-content", ctx_r1.page() === 0)("rounded-full!", ctx_r1.page() === 0);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-0", ctx_r1.page() < 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("opacity-0", ctx_r1.page() == 0 || ctx_r1.page() == ctx_r1.last_page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.page() + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-0", ctx_r1.page() > ctx_r1.last_page() - 2);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-secondary!", ctx_r1.page() === ctx_r1.last_page())("text-secondary-content", ctx_r1.page() === ctx_r1.last_page())("rounded-full!", ctx_r1.page() === ctx_r1.last_page());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.last_page() + 1, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", ctx_r1.page() === ctx_r1.last_page());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(18, 26, "COMMON.NEXT"));
  }
}
var SelectMapItemModalComponent = class _SelectMapItemModalComponent extends AsyncHandler {
  itemFromMapsIndoorsItem(item) {
    return {
      id: item.properties.externalId || item.properties.roomId || item.id,
      name: item.properties.name,
      location: item.properties.building ? `${item.properties.building}, Level ${item.properties.floorName}` : "",
      area: Math.abs(item.geometry.bbox[0] - item.geometry.bbox[2]) * Math.abs(item.geometry.bbox[1] - item.geometry.bbox[3])
    };
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._maps_people = inject(MapsPeopleService);
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_info = signal(
      {},
      ...ngDevMode ? [{ debugName: "map_info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.page = signal(
      0,
      ...ngDevMode ? [{ debugName: "page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_page = signal(
      0,
      ...ngDevMode ? [{ debugName: "last_page" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = signal(
      "",
      ...ngDevMode ? [{ debugName: "selected" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hovered = signal(
      "",
      ...ngDevMode ? [{ debugName: "hovered" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = signal(
      "",
      ...ngDevMode ? [{ debugName: "search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.changed = signal(
      0,
      ...ngDevMode ? [{ debugName: "changed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_debounced = signal(
      "",
      ...ngDevMode ? [{ debugName: "_search_debounced" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_list = this._org.active_levels;
    this.actions = [
      { id: "*", action: "click", callback: (e, p) => this.selectID(p || e) }
    ];
    this.features = computed(
      () => unique([
        {
          location: this.selected(),
          content: MapShowElementComponent,
          full_size: true,
          no_scale: true
        },
        {
          location: this.hovered(),
          content: MapShowElementComponent,
          data: { hover: true },
          full_size: true,
          no_scale: true
        }
      ].filter((_) => _.location), "location"),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search_results = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_search_results" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        q: this._search_debounced(),
        available: this._maps_people.available(),
        changed: this.changed(),
        map_info: this.map_info()
      }),
      defaultValue: [],
      loader: async ({ params }) => {
        const { q, available } = params;
        let list = [];
        if (available) {
          if (q.length > 2) {
            const l = await mapsindoors?.services.LocationsService.getLocations({ q }) || [];
            list = l.map((i) => this.itemFromMapsIndoorsItem(i));
            if (this.selected_item) {
              list.unshift(this.itemFromMapsIndoorsItem(this.selected_item));
            }
          } else {
            list = this.selected_item ? [this.itemFromMapsIndoorsItem(this.selected_item)] : [];
          }
        } else {
          list = Object.entries(params.map_info).map(([id, bbox]) => ({
            id,
            area: bbox.w * bbox.h
          })).filter(({ id, area }) => id.toLowerCase().includes(q.toLowerCase()) && area < 0.5).sort((a, b) => b.area - a.area);
        }
        this.page.set(0);
        this.last_page.set(Math.floor(list.length / 100));
        return list;
      }
    }));
    this.search_results = this._search_results.value;
    this.setMapInfo = (info) => this.map_info.set(info);
    effect(() => {
      const q = this.search();
      this.timeout("search", () => this._search_debounced.set(q), 300);
    });
  }
  async ngOnInit() {
    if (this._data?.location && typeof this._data.location === "string") {
      this.selected.set(this._data.location);
    }
    const levels = this._org.active_levels();
    if (levels.length) {
      let level = levels[0];
      if (this._data?.level_id) {
        level = levels.find((_) => _.id === this._data.level_id) || level;
      }
      this.level.set(level);
    }
  }
  onChange() {
    this.changed.set(Date.now());
  }
  selectID(e) {
    this.timeout("select_id", async () => {
      const use_maps_indoors = this._maps_people.available();
      if (!use_maps_indoors) {
        const pos = e;
        const short_list = [];
        for (const [id, bbox] of Object.entries(this.map_info())) {
          if (bbox.x <= pos.x && pos.x <= bbox.x + bbox.w && bbox.y <= pos.y && pos.y <= bbox.y + bbox.h) {
            short_list.push([id, bbox.h * bbox.w]);
          }
        }
        const [smallest] = short_list.filter(([, area]) => area <= 0.5).sort((a, b) => a[1] - b[1]);
        if (smallest)
          this.selected.set(smallest[0]);
      } else {
        const id = e.properties?.externalId || e.properties?.roomId || e.id;
        this.selected_item = e;
        if (id)
          this.selected.set(id);
        this.changed.set(Date.now());
      }
    });
  }
  static {
    this.\u0275fac = function SelectMapItemModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SelectMapItemModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SelectMapItemModalComponent, selectors: [["select-map-item-modal"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 28, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mt-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 3, "aria-label"], [1, "flex", "h-[75vh]", "max-h-[75vh]", "max-w-[calc(100vw-2rem)]", "min-w-[80vw]", "space-x-2", "overflow-hidden", "p-2", "sm:max-w-5xl"], ["map", "", 1, "bg-base-200", "relative", "h-full", "w-1/2", "flex-1", "rounded-lg"], [3, "mapInfo", "src", "actions", "features", "options", "focus"], ["poi-list", "", 1, "border-base-300", "relative", "flex", "h-full", "w-[20rem]", "flex-col", "rounded-lg", "border"], ["search", "", 1, "border-base-200", "flex", "flex-col", "border-b", "p-2"], ["appearance", "outline", 1, "no-subscript", "mb-2", "w-full"], ["name", "level", 3, "ngModelChange", "ngModel"], [3, "value"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["matInput", "", "name", "search", "placeholder", "Search", 3, "ngModelChange", "ngModel"], ["matPrefix", "", 1, "text-2xl"], ["list", "", 1, "flex", "h-1/2", "flex-1", "flex-col", "space-y-2", "overflow-auto", "px-2"], [1, "bg-base-100", "sticky", "top-0", "z-10", "w-full", "px-1", "py-3", "text-sm"], [1, "border-info", "bg-info-light", "rounded-full", "border", "px-2", "py-1", "text-xs"], [1, "flex", "h-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], ["pagination", "", 1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-10", "-mx-2", "flex", "w-[calc(100%+1rem)]", "items-center", "justify-center", "space-x-1", "border-t", "p-2"], ["actions", "", 1, "border-base-200", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "w-full", 3, "disabled", "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "bg-primary!", "text-primary-content!"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click", "mouseover", "focus"], [1, "flex", "w-full", "flex-col", "font-mono", "text-sm"], [1, ""], [1, "text-xs", 3, "opacity-70"], [1, "text-xs"], ["alt", "", "src", "assets/icons/no-results.svg", 1, "w-36"], [1, "text-center", "opacity-70"], ["icon", "", "matRipple", "", 1, "border-base-200", "rounded-sm", "border", 3, "click", "disabled"], ["icon", "", "matRipple", "", 3, "click"], ["aria-hidden", "true", 1, "flex", "h-10", "w-10", "items-center", "justify-center"], ["icon", "", "matRipple", "", 1, "bg-secondary!", "text-secondary-content"], ["icon", "", "matRipple", "", 1, "border-base-200", "rounded-sm", "border", 3, "click"]], template: function SelectMapItemModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3)(9, "div", 4)(10, "interactive-map", 5);
        \u0275\u0275listener("mapInfo", function SelectMapItemModalComponent_Template_interactive_map_mapInfo_10_listener($event) {
          return ctx.setMapInfo($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "mat-form-field", 8)(14, "mat-select", 9);
        \u0275\u0275twoWayListener("ngModelChange", function SelectMapItemModalComponent_Template_mat_select_ngModelChange_14_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.level, $event) || (ctx.level = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function SelectMapItemModalComponent_Template_mat_select_ngModelChange_14_listener() {
          return ctx.onChange();
        });
        \u0275\u0275repeaterCreate(15, SelectMapItemModalComponent_For_16_Template, 2, 2, "mat-option", 10, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "mat-form-field", 11)(18, "input", 12);
        \u0275\u0275twoWayListener("ngModelChange", function SelectMapItemModalComponent_Template_input_ngModelChange_18_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
          return $event;
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(19, "icon", 13);
        \u0275\u0275text(20, "search");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "div", 14)(22, "div", 15);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275conditionalCreate(25, SelectMapItemModalComponent_Conditional_25_Template, 2, 2, "span", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(26, SelectMapItemModalComponent_Conditional_26_Template, 3, 4)(27, SelectMapItemModalComponent_Conditional_27_Template, 5, 3, "div", 17);
        \u0275\u0275conditionalCreate(28, SelectMapItemModalComponent_Conditional_28_Template, 21, 28, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(29, "div", 19)(30, "button", 20);
        \u0275\u0275text(31);
        \u0275\u0275pipe(32, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 16, "APP.CONCIERGE.POI_MAP_SELECT_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(5, 18, "COMMON.CLOSE"));
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.level()?.map_id)("actions", ctx.actions)("features", ctx.features())("options", \u0275\u0275pureFunction0(25, _c0))("focus", ctx.selected());
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.level);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.level_list());
        \u0275\u0275advance(3);
        \u0275\u0275twoWayProperty("ngModel", ctx.search);
        \u0275\u0275control();
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 20, "APP.CONCIERGE.POI_MAP_SELECT_RESULTS", \u0275\u0275pureFunction1(26, _c1, ctx.search_results().length || 0)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.last_page() ? 25 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.search_results().length ? 26 : 27);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.last_page() > 0 ? 28 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.selected())("mat-dialog-close", ctx.selected());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(32, 23, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      IconComponent,
      CommonModule,
      MatFormFieldModule,
      MatFormField,
      MatPrefix,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      InteractiveMapComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe,
      SlicePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectMapItemModalComponent, [{
    type: Component,
    args: [{ selector: "select-map-item-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 mx-auto mt-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
        >
            <h2 class="text-xl font-medium capitalize">
                {{ 'APP.CONCIERGE.POI_MAP_SELECT_HEADER' | translate }}
            </h2>
            <button
                icon
                matRipple
                mat-dialog-close
                [aria-label]="'COMMON.CLOSE' | translate"
            >
                <icon>close</icon>
            </button>
        </header>
        <main
            class="flex h-[75vh] max-h-[75vh] max-w-[calc(100vw-2rem)] min-w-[80vw] space-x-2 overflow-hidden p-2 sm:max-w-5xl"
        >
            <div
                map
                class="bg-base-200 relative h-full w-1/2 flex-1 rounded-lg"
            >
                <interactive-map
                    [src]="level()?.map_id"
                    [actions]="actions"
                    [features]="features()"
                    [options]="{ controls: true }"
                    [focus]="selected()"
                    (mapInfo)="setMapInfo($any($event))"
                ></interactive-map>
            </div>
            <div
                poi-list
                class="border-base-300 relative flex h-full w-[20rem] flex-col rounded-lg border"
            >
                <div search class="border-base-200 flex flex-col border-b p-2">
                    <mat-form-field
                        class="no-subscript mb-2 w-full"
                        appearance="outline"
                    >
                        <mat-select
                            name="level"
                            [(ngModel)]="level"
                            (ngModelChange)="onChange()"
                        >
                            @for (lvl of level_list(); track lvl) {
                                <mat-option [value]="lvl">
                                    {{ lvl.display_name || lvl.name }}
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <mat-form-field
                        class="no-subscript w-full"
                        appearance="outline"
                    >
                        <input
                            matInput
                            name="search"
                            placeholder="Search"
                            [(ngModel)]="search"
                        />
                        <icon matPrefix class="text-2xl">search</icon>
                    </mat-form-field>
                </div>
                <div
                    list
                    class="flex h-1/2 flex-1 flex-col space-y-2 overflow-auto px-2"
                >
                    <div
                        class="bg-base-100 sticky top-0 z-10 w-full px-1 py-3 text-sm"
                    >
                        {{
                            'APP.CONCIERGE.POI_MAP_SELECT_RESULTS'
                                | translate
                                    : {
                                          count: search_results().length || 0,
                                      }
                        }}
                        @if (last_page()) {
                            <span
                                class="border-info bg-info-light rounded-full border px-2 py-1 text-xs"
                            >
                                {{ page() * 100 + 1 }} -
                                {{
                                    search_results().length > page() * 100 + 100
                                        ? page() * 100 + 100
                                        : search_results().length
                                }}
                            </span>
                        }
                    </div>
                    @if (search_results().length) {
                        @for (
                            poi of search_results()
                                | slice: page() * 100 : page() * 100 + 100;
                            track poi
                        ) {
                            <button
                                btn
                                matRipple
                                class="clear hover:bg-base-200 flex w-full items-center rounded-sm text-left"
                                [class.bg-primary!]="poi.id === selected()"
                                [class.text-primary-content!]="
                                    poi.id === selected()
                                "
                                (click)="selected.set(poi.id)"
                                (mouseover)="hovered.set(poi.id)"
                                (focus)="hovered.set(poi.id)"
                            >
                                <div
                                    class="flex w-full flex-col font-mono text-sm"
                                >
                                    <div class="">{{ poi.name || poi.id }}</div>
                                    @if (poi.location) {
                                        <!-- 70% fails on the selected primary background -->
                                        <div
                                            class="text-xs"
                                            [class.opacity-70]="
                                                poi.id !== selected()
                                            "
                                        >
                                            {{ poi.location }}
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    } @else {
                        <div
                            class="flex h-full flex-1 flex-col items-center justify-center space-y-4"
                        >
                            <img
                                alt=""
                                src="assets/icons/no-results.svg"
                                class="w-36"
                            />
                            <div class="text-center opacity-70">
                                {{
                                    'APP.CONCIERGE.POI_MAP_SELECT_RESULTS_EMPTY'
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                    @if (last_page() > 0) {
                        <div
                            pagination
                            class="border-base-300 bg-base-100 sticky bottom-0 z-10 -mx-2 flex w-[calc(100%+1rem)] items-center justify-center space-x-1 border-t p-2"
                        >
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [disabled]="page() === 0"
                                (click)="page.set(page() - 1)"
                                [attr.aria-label]="
                                    'COMMON.PREVIOUS' | translate
                                "
                            >
                                <icon>chevron_left</icon>
                            </button>
                            <button
                                icon
                                matRipple
                                [class.bg-secondary!]="page() === 0"
                                [class.text-secondary-content]="page() === 0"
                                [class.rounded-full!]="page() === 0"
                                (click)="page.set(0)"
                            >
                                1
                            </button>
                            <div
                                aria-hidden="true"
                                class="flex h-10 w-10 items-center justify-center"
                                [class.opacity-0]="page() < 2"
                            >
                                <icon>more_horiz</icon>
                            </div>
                            <button
                                icon
                                matRipple
                                class="bg-secondary! text-secondary-content"
                                [class.opacity-0]="
                                    page() == 0 || page() == last_page()
                                "
                            >
                                {{ page() + 1 }}
                            </button>
                            <div
                                aria-hidden="true"
                                class="flex h-10 w-10 items-center justify-center"
                                [class.opacity-0]="page() > last_page() - 2"
                            >
                                <icon>more_horiz</icon>
                            </div>
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [class.bg-secondary!]="page() === last_page()"
                                [class.text-secondary-content]="
                                    page() === last_page()
                                "
                                [class.rounded-full!]="page() === last_page()"
                                (click)="page.set(last_page())"
                            >
                                {{ last_page() + 1 }}
                            </button>
                            <button
                                icon
                                matRipple
                                class="border-base-200 rounded-sm border"
                                [disabled]="page() === last_page()"
                                (click)="page.set(page() + 1)"
                                [attr.aria-label]="'COMMON.NEXT' | translate"
                            >
                                <icon>chevron_right</icon>
                            </button>
                        </div>
                    }
                </div>
                <div actions class="border-base-200 border-t p-2">
                    <button
                        btn
                        matRipple
                        [disabled]="!selected()"
                        class="w-full"
                        [mat-dialog-close]="selected()"
                    >
                        {{ 'COMMON.SAVE' | translate }}
                    </button>
                </div>
            </div>
        </main>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      CommonModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      InteractiveMapComponent,
      FormsModule
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SelectMapItemModalComponent, { className: "SelectMapItemModalComponent", filePath: "apps/concierge/src/app/ui/select-map-item-modal.component.ts", lineNumber: 290 });
})();

export {
  SelectMapItemModalComponent
};
//# debugId=82739a6d-2e3c-5a90-b0f7-64808ec5ab61
//# sourceMappingURL=chunk-GT7W337S.js.map
