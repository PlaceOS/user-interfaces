import {
  ExploreZoomControlComponent,
  SharedExploreModule
} from "./chunk-NT65YUZH.js";
import "./chunk-7G4R745F.js";
import "./chunk-LW6KYDNR.js";
import "./chunk-IPLJBDCQ.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  CommonModule,
  EventsStateService,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatFormField,
  MatOption,
  MatSelect,
  MatSelectTrigger,
  NgControlStatus,
  NgForOf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SearchbarComponent,
  SidebarComponent,
  UIModule,
  __async,
  first,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-TTHABZPK.js";

// apps/concierge/src/app/facilities/facilities-topbar.component.ts
function FacilitiesTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function FacilitiesTopbarComponent_mat_option_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 7);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r2 = ctx.$implicit;
    \u0275\u0275property("value", type_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r2.name, " ");
  }
}
var _FacilitiesTopbarComponent = class _FacilitiesTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this.setDate = (d) => this._state.setDate(d);
    this.levels = this._org.active_levels;
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateTypes = (types) => this._state.setFilters({
      hide_type: this.types.reduce((list, item) => {
        !types.includes(item.id) ? list.push(item) : "";
        return list;
      }, [])
    });
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            if (!level) {
              return;
            }
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
            this.zones = zones;
          }
        }
      }));
      this.subscription("levels", this._org.active_levels.subscribe((levels) => {
        this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
        if (!this.zones.length && levels.length) {
          this.zones.push(levels[0].id);
        }
        this.updateZones(this.zones);
      }));
      this.updateTypes(this.type_list);
    });
  }
};
_FacilitiesTopbarComponent.\u0275fac = function FacilitiesTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesTopbarComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_FacilitiesTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesTopbarComponent, selectors: [["facilities-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 6, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], [1, "flex-full"], [1, "mr-2"], [3, "value"]], template: function FacilitiesTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(3, FacilitiesTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 1)(6, "mat-select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.type_list, $event) || (ctx.type_list = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) {
      return ctx.updateTypes($event);
    });
    \u0275\u0275elementStart(7, "mat-select-trigger");
    \u0275\u0275text(8, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275template(9, FacilitiesTopbarComponent_mat_option_9_Template, 2, 2, "mat-option", 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "div", 5)(11, "searchbar", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.type_list);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.types);
  }
}, dependencies: [NgForOf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatSelectTrigger, MatOption, AsyncPipe], styles: ["\n\n.flex-full[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */"] });
var FacilitiesTopbarComponent = _FacilitiesTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesTopbarComponent, { className: "FacilitiesTopbarComponent", filePath: "apps/concierge/src/app/facilities/facilities-topbar.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/facilities/facilities-status.component.ts
var _c0 = () => ({ class: "material-icons", content: "sentiment_very_satisfied" });
var _FacilitiesStatusComponent = class _FacilitiesStatusComponent {
};
_FacilitiesStatusComponent.\u0275fac = function FacilitiesStatusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesStatusComponent)();
};
_FacilitiesStatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesStatusComponent, selectors: [["facilities-status"]], decls: 24, vars: 6, consts: [[1, "rounded-lg", "flex-1", "w-full", "shadow-sm", "p-6", "bg-base-100"], [1, "mt-0", "mb-4"], [1, "w-full", "flex", "items-center", "border", "border-base-200", "mb-2", "rounded-lg"], ["name", "status", 1, "rounded-full"], [1, "flex-1", "text-bold", "text-xs"], [1, "text-bold", "p-4"], [1, "text-right", "text-bold", "mr-4"], [1, "rounded", "w-full", "shadow-sm", "p-6", "bg-base-100"], [1, "mt-0", "mb-2"], ["name", "mood", 1, "flex", "items-center", "w-full", "border", "border-base-200", "rounded-lg", "overflow-hidden"], [1, "bg-light", "text-2xl", "px-1", 3, "icon"], [1, "px-4", "text-sm", "text-bold"]], template: function FacilitiesStatusComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "People Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "app-icon");
    \u0275\u0275text(6, "account_circle");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 6);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 7)(14, "h3", 8);
    \u0275\u0275text(15, "Mood");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 9);
    \u0275\u0275element(17, "app-icon", 10);
    \u0275\u0275elementStart(18, "div", 11);
    \u0275\u0275text(19, "4/5 Satisfied");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "h4");
    \u0275\u0275text(21, "Feedback:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "p");
    \u0275\u0275text(23);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", "Admin Services", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate("24");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("Total: ", ctx.total || 0, "");
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.feedback);
  }
}, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood][_ngcontent-%COMP%]   app-icon[_ngcontent-%COMP%] {\n}\n[name=status][_ngcontent-%COMP%] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */"] });
var FacilitiesStatusComponent = _FacilitiesStatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesStatusComponent, { className: "FacilitiesStatusComponent", filePath: "apps/concierge/src/app/facilities/facilities-status.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/facilities/facilities-map.component.ts
var _FacilitiesMapComponent = class _FacilitiesMapComponent extends AsyncHandler {
  constructor(_explore, _state) {
    super();
    this._explore = _explore;
    this._state = _state;
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.positions = this._explore.map_positions;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
  }
  ngOnInit() {
    this.subscription("active_zone", this._state.zones.subscribe((z) => this._explore.setLevel(z[0])));
  }
};
_FacilitiesMapComponent.\u0275fac = function FacilitiesMapComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesMapComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(EventsStateService));
};
_FacilitiesMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesMapComponent, selectors: [["facilities-map"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "bottom-2", "right-2"]], template: function FacilitiesMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275element(7, "explore-zoom-controls", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 6, ctx.url))("zoom", \u0275\u0275pipeBind1(2, 8, ctx.positions).zoom)("center", \u0275\u0275pipeBind1(3, 10, ctx.positions).center)("styles", \u0275\u0275pipeBind1(4, 12, ctx.styles))("features", \u0275\u0275pipeBind1(5, 14, ctx.features))("actions", \u0275\u0275pipeBind1(6, 16, ctx.actions));
  }
}, dependencies: [InteractiveMapComponent, ExploreZoomControlComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */"] });
var FacilitiesMapComponent = _FacilitiesMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesMapComponent, { className: "FacilitiesMapComponent", filePath: "apps/concierge/src/app/facilities/facilities-map.component.ts", lineNumber: 32 });
})();

// apps/concierge/src/app/facilities/facilities.component.ts
var _c02 = ["app-facilities", ""];
var _FacilitiesComponent = class _FacilitiesComponent {
};
_FacilitiesComponent.\u0275fac = function FacilitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesComponent)();
};
_FacilitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesComponent, selectors: [["", "app-facilities", ""]], attrs: _c02, decls: 6, vars: 0, consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "flex", "flex-1"], [1, "flex-1", "h-full"], [1, "h-full", "space-y-4"]], template: function FacilitiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "facilities-topbar");
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "facilities-map", 2)(5, "facilities-status", 3);
    \u0275\u0275elementEnd()();
  }
}, dependencies: [SidebarComponent, FacilitiesTopbarComponent, FacilitiesStatusComponent, FacilitiesMapComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nfacilities-map[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n/*# sourceMappingURL=facilities.component.css.map */"] });
var FacilitiesComponent = _FacilitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesComponent, { className: "FacilitiesComponent", filePath: "apps/concierge/src/app/facilities/facilities.component.ts", lineNumber: 29 });
})();

// apps/concierge/src/app/facilities/new-facilities.component.ts
var _c03 = ["app-new-facilities", ""];
var _NewFacilitiesComponent = class _NewFacilitiesComponent {
};
_NewFacilitiesComponent.\u0275fac = function NewFacilitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewFacilitiesComponent)();
};
_NewFacilitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewFacilitiesComponent, selectors: [["", "app-new-facilities", ""]], attrs: _c03, decls: 8, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "flex-1"], [1, "flex-1", "h-full"], [1, "h-full", "space-y-4"]], template: function NewFacilitiesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "facilities-topbar");
    \u0275\u0275elementStart(5, "div", 2);
    \u0275\u0275element(6, "facilities-map", 3)(7, "facilities-status", 4);
    \u0275\u0275elementEnd()()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, FacilitiesTopbarComponent, FacilitiesStatusComponent, FacilitiesMapComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nfacilities-map[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n/*# sourceMappingURL=new-facilities.component.css.map */"] });
var NewFacilitiesComponent = _NewFacilitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewFacilitiesComponent, { className: "NewFacilitiesComponent", filePath: "apps/concierge/src/app/facilities/new-facilities.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/facilities/facilities.module.ts
var ROUTES = [
  { path: "", component: FacilitiesComponent },
  { path: "new", component: NewFacilitiesComponent }
];
var _FacilitiesModule = class _FacilitiesModule {
};
_FacilitiesModule.\u0275fac = function FacilitiesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesModule)();
};
_FacilitiesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FacilitiesModule });
_FacilitiesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedExploreModule,
  RouterModule.forChild(ROUTES)
] });
var FacilitiesModule = _FacilitiesModule;
export {
  FacilitiesModule
};
//# sourceMappingURL=facilities.module-HKHXX7VK.js.map
