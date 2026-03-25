import {
  ExploreZoomControlComponent
} from "./chunk-BCHRZ3LK.js";
import "./chunk-B3PLANKJ.js";
import {
  EventsStateService
} from "./chunk-BYXWHGW3.js";
import "./chunk-JABLESH3.js";
import "./chunk-ZNPBJAFH.js";
import "./chunk-KZZWFXRI.js";
import {
  SearchbarComponent
} from "./chunk-A7MJ6YMN.js";
import "./chunk-DBK4IO5Z.js";
import "./chunk-YHB2EXFA.js";
import "./chunk-DC2277VO.js";
import "./chunk-XFUSZ3IX.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-V26IMZTK.js";
import "./chunk-HCOONWZA.js";
import "./chunk-PNVZNC3H.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  CommonModule,
  Component,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  TranslatePipe,
  first,
  inject,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U4YKYOQ5.js";
import "./chunk-KWSTWQNB.js";

// apps/concierge/src/app/facilities/facilities-map.component.ts
var _FacilitiesMapComponent = class _FacilitiesMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._explore = inject(ExploreStateService);
    this._state = inject(EventsStateService);
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
_FacilitiesMapComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FacilitiesMapComponent_BaseFactory;
  return function FacilitiesMapComponent_Factory(__ngFactoryType__) {
    return (\u0275FacilitiesMapComponent_BaseFactory || (\u0275FacilitiesMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FacilitiesMapComponent)))(__ngFactoryType__ || _FacilitiesMapComponent);
  };
})();
_FacilitiesMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesMapComponent, selectors: [["facilities-map"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 18, consts: [[3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "right-2", "bottom-2"]], template: function FacilitiesMapComponent_Template(rf, ctx) {
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
}, dependencies: [
  CommonModule,
  AsyncPipe,
  InteractiveMapComponent,
  ExploreZoomControlComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */"] });
var FacilitiesMapComponent = _FacilitiesMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesMapComponent, [{
    type: Component,
    args: [{ selector: "facilities-map", template: `
        <interactive-map
            [src]="url | async"
            [zoom]="(positions | async).zoom"
            [center]="(positions | async).center"
            [styles]="styles | async"
            [features]="features | async"
            [actions]="actions | async"
        />
        <explore-zoom-controls class="absolute right-2 bottom-2" />
    `, imports: [
      CommonModule,
      InteractiveMapComponent,
      ExploreZoomControlComponent
    ], styles: ["/* angular:styles/component:css;f26b881f8eefd87319c7388ff7bb3cecb37d07a0db8d3a808d3cfede99235935;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-map.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesMapComponent, { className: "FacilitiesMapComponent", filePath: "apps/concierge/src/app/facilities/facilities-map.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/facilities/facilities-status.component.ts
var _c0 = () => ({ class: "material-symbols-rounded", content: "sentiment_very_satisfied" });
var _FacilitiesStatusComponent = class _FacilitiesStatusComponent {
};
_FacilitiesStatusComponent.\u0275fac = function FacilitiesStatusComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesStatusComponent)();
};
_FacilitiesStatusComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesStatusComponent, selectors: [["facilities-status"]], decls: 24, vars: 6, consts: [[1, "bg-base-100", "w-full", "flex-1", "rounded-lg", "p-6", "shadow-xs"], [1, "mt-0", "mb-4"], [1, "border-base-200", "mb-2", "flex", "w-full", "items-center", "rounded-lg", "border"], ["name", "status", 1, "rounded-full"], [1, "text-bold", "flex-1", "text-xs"], [1, "text-bold", "p-4"], [1, "text-bold", "mr-4", "text-right"], [1, "bg-base-100", "w-full", "rounded-sm", "p-6", "shadow-xs"], [1, "mt-0", "mb-2"], ["name", "mood", 1, "border-base-200", "flex", "w-full", "items-center", "overflow-hidden", "rounded-lg", "border"], [1, "bg-light", "px-1", "text-2xl", 3, "icon"], [1, "text-bold", "px-4", "text-sm"]], template: function FacilitiesStatusComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2, "People Count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "icon");
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
    \u0275\u0275element(17, "icon", 10);
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
    \u0275\u0275textInterpolate1("Total: ", ctx.total || 0);
    \u0275\u0275advance(5);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx.feedback);
  }
}, dependencies: [IconComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n}\n[name=status][_ngcontent-%COMP%] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */"] });
var FacilitiesStatusComponent = _FacilitiesStatusComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesStatusComponent, [{
    type: Component,
    args: [{ selector: "facilities-status", template: `
        <div class="bg-base-100 w-full flex-1 rounded-lg p-6 shadow-xs">
            <h3 class="mt-0 mb-4">People Count</h3>
            <div
                class="border-base-200 mb-2 flex w-full items-center rounded-lg border"
            >
                <div name="status" class="rounded-full">
                    <icon>account_circle</icon>
                </div>
                <div class="text-bold flex-1 text-xs">
                    {{ 'Admin Services' }}
                </div>
                <div class="text-bold p-4">{{ '24' }}</div>
            </div>
            <div class="text-bold mr-4 text-right">Total: {{ total || 0 }}</div>
        </div>
        <div class="bg-base-100 w-full rounded-sm p-6 shadow-xs">
            <h3 class="mt-0 mb-2">Mood</h3>
            <div
                name="mood"
                class="border-base-200 flex w-full items-center overflow-hidden rounded-lg border"
            >
                <icon
                    class="bg-light px-1 text-2xl"
                    [icon]="{
                        class: 'material-symbols-rounded',
                        content: 'sentiment_very_satisfied',
                    }"
                ></icon>
                <div class="text-bold px-4 text-sm">4/5 Satisfied</div>
            </div>
            <h4>Feedback:</h4>
            <p>{{ feedback }}</p>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;9fae360829942384ed13a86c99ce5c9b2d20808b1bdb920654071bb7f7a7c122;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-status.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood] icon {\n}\n[name=status] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesStatusComponent, { className: "FacilitiesStatusComponent", filePath: "apps/concierge/src/app/facilities/facilities-status.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/facilities/facilities-topbar.component.ts
function FacilitiesTopbarComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
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
function FacilitiesTopbarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 3);
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
  constructor() {
    super(...arguments);
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
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
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
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
  }
};
_FacilitiesTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275FacilitiesTopbarComponent_BaseFactory;
  return function FacilitiesTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275FacilitiesTopbarComponent_BaseFactory || (\u0275FacilitiesTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_FacilitiesTopbarComponent)))(__ngFactoryType__ || _FacilitiesTopbarComponent);
  };
})();
_FacilitiesTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesTopbarComponent, selectors: [["facilities-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 10, consts: [[1, "border-base-200", "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "border-b", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], [1, "flex-full"], [1, "mr-2"]], template: function FacilitiesTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-select", 2);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_5_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(7, FacilitiesTopbarComponent_For_8_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 1)(11, "mat-label");
    \u0275\u0275text(12, "Events");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_13_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.type_list, $event) || (ctx.type_list = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_13_listener($event) {
      return ctx.updateTypes($event);
    });
    \u0275\u0275elementStart(14, "mat-select-trigger");
    \u0275\u0275text(15, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(16, FacilitiesTopbarComponent_For_17_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(18, "div", 5)(19, "searchbar", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 4, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(6, 6, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(9, 8, ctx.levels));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.type_list);
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.types);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatFormFieldModule,
  MatFormField,
  MatLabel,
  MatSelectModule,
  MatSelect,
  MatSelectTrigger,
  MatOption,
  SearchbarComponent,
  FormsModule,
  NgControlStatus,
  NgModel,
  TranslatePipe
], styles: ["\n\n.flex-full[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */"] });
var FacilitiesTopbarComponent = _FacilitiesTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesTopbarComponent, [{
    type: Component,
    args: [{ selector: "facilities-topbar", template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <mat-form-field appearance="outline">
                <mat-label>{{ 'COMMON.LEVEL_ALL' | translate }}</mat-label>
                <mat-select
                    multiple
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-label>Events</mat-label>
                <mat-select
                    multiple
                    [(ngModel)]="type_list"
                    (ngModelChange)="updateTypes($event)"
                    placeholder="No Events"
                >
                    <mat-select-trigger>Legend</mat-select-trigger>
                    @for (type of types; track type) {
                        <mat-option [value]="type.id">
                            {{ type.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="flex-full"></div>
            <searchbar class="mr-2"></searchbar>
        </div>
    `, imports: [
      CommonModule,
      MatFormFieldModule,
      MatSelectModule,
      SearchbarComponent,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;b448d51f834330ddc6a6175ecfaf37bbbf1883194676e13ab13b8e1daf564bfd;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-topbar.component.ts */\n.flex-full {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesTopbarComponent, { className: "FacilitiesTopbarComponent", filePath: "apps/concierge/src/app/facilities/facilities-topbar.component.ts", lineNumber: 78 });
})();

// apps/concierge/src/app/facilities/facilities.component.ts
var _c02 = ["app-new-facilities", ""];
var _FacilitiesComponent = class _FacilitiesComponent {
};
_FacilitiesComponent.\u0275fac = function FacilitiesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesComponent)();
};
_FacilitiesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesComponent, selectors: [["", "app-new-facilities", ""]], attrs: _c02, decls: 8, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "flex-1"], [1, "h-full", "flex-1"], [1, "h-full", "space-y-4"]], template: function FacilitiesComponent_Template(rf, ctx) {
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
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  FacilitiesTopbarComponent,
  FacilitiesMapComponent,
  FacilitiesStatusComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nfacilities-map[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n/*# sourceMappingURL=facilities.component.css.map */"] });
var FacilitiesComponent = _FacilitiesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesComponent, [{
    type: Component,
    args: [{ selector: "[app-new-facilities]", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <facilities-topbar></facilities-topbar>
                <div class="flex flex-1">
                    <facilities-map class="h-full flex-1"></facilities-map>
                    <facilities-status
                        class="h-full space-y-4"
                    ></facilities-status>
                </div>
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      FacilitiesTopbarComponent,
      FacilitiesMapComponent,
      FacilitiesStatusComponent
    ], styles: ["/* angular:styles/component:css;93502018f9d701276c621ec3fe097044336b49f8d88fa18ae5c0d83bba285ac8;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nfacilities-map {\n  min-width: 50%;\n}\n/*# sourceMappingURL=facilities.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesComponent, { className: "FacilitiesComponent", filePath: "apps/concierge/src/app/facilities/facilities.component.ts", lineNumber: 48 });
})();

// apps/concierge/src/app/facilities/facilities.module.ts
var ROUTES = [{ path: "", component: FacilitiesComponent }];
var _FacilitiesModule = class _FacilitiesModule {
};
_FacilitiesModule.\u0275fac = function FacilitiesModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _FacilitiesModule)();
};
_FacilitiesModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _FacilitiesModule });
_FacilitiesModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [FacilitiesComponent, RouterModule.forChild(ROUTES)] });
var FacilitiesModule = _FacilitiesModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [FacilitiesComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  FacilitiesModule
};
//# sourceMappingURL=facilities.module-J5YCUQLU.js.map
