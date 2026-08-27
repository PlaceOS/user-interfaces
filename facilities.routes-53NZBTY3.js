import {
  EventsStateService
} from "./chunk-5P6ASIBL.js";
import "./chunk-QNSAYON3.js";
import "./chunk-T4H5ONTD.js";
import "./chunk-TFJDUVND.js";
import {
  ExploreZoomControlComponent
} from "./chunk-LLRLQDQB.js";
import "./chunk-GUIPN2EP.js";
import "./chunk-RHW7PZTN.js";
import "./chunk-4KLPYDHE.js";
import "./chunk-T6ZTHDXL.js";
import {
  SearchbarComponent
} from "./chunk-JVURRGIR.js";
import "./chunk-Y2BWJEXG.js";
import "./chunk-SDGPHTKV.js";
import {
  toSignal
} from "./chunk-RPJRKZJT.js";
import "./chunk-Y6LKDIFF.js";
import "./chunk-ZRSRAGGE.js";
import "./chunk-4YDQ54KI.js";
import "./chunk-Y6OKJTI4.js";
import "./chunk-ZWMH6XP4.js";
import {
  ExploreStateService,
  InteractiveMapComponent
} from "./chunk-H4PQBLOW.js";
import "./chunk-XGTBQEGY.js";
import "./chunk-XXKQ57QZ.js";
import "./chunk-ME7RZH6V.js";
import "./chunk-7KQRUWEZ.js";
import "./chunk-CVSNXLVU.js";
import "./chunk-BSCNAHO5.js";
import "./chunk-IHAOKHUQ.js";
import "./chunk-ZPOHLJTY.js";
import "./chunk-3PQMPZLI.js";
import "./chunk-PDMRTYMA.js";
import "./chunk-5CGMLSJS.js";
import "./chunk-DG7PFMDR.js";
import "./chunk-5HZYZ5OU.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-76AIUSHB.js";
import "./chunk-YMUVQMIR.js";
import "./chunk-RCB64EP7.js";
import "./chunk-VNIC3PCP.js";
import "./chunk-CBVPNNR3.js";
import "./chunk-EXUEXAPM.js";
import "./chunk-QJWYJFTN.js";
import "./chunk-5NOPK7NX.js";
import {
  ActivatedRoute,
  AsyncHandler,
  Component,
  FormsModule,
  IconComponent,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Router,
  TranslatePipe,
  computed,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
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
  ɵɵtextInterpolate1
} from "./chunk-F7PQS4NK.js";
import "./chunk-653SOEEV.js";

// apps/concierge/src/app/facilities/facilities-map.component.ts
var FacilitiesMapComponent = class _FacilitiesMapComponent extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._state = inject(EventsStateService);
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.positions = this._explore.map_positions;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this._zones = this._state.zones;
    effect(() => {
      const [zone] = this._zones();
      if (zone)
        this._explore.setLevel(zone);
    });
  }
  static {
    this.\u0275fac = function FacilitiesMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesMapComponent, selectors: [["facilities-map"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 6, consts: [[3, "src", "zoom", "center", "styles", "features", "actions"], [1, "absolute", "right-2", "bottom-2"]], template: function FacilitiesMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "interactive-map", 0)(1, "explore-zoom-controls", 1);
      }
      if (rf & 2) {
        \u0275\u0275property("src", ctx.url())("zoom", ctx.positions().zoom)("center", ctx.positions().center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions());
      }
    }, dependencies: [InteractiveMapComponent, ExploreZoomControlComponent], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesMapComponent, [{
    type: Component,
    args: [{ selector: "facilities-map", template: `
        <interactive-map
            [src]="url()"
            [zoom]="positions().zoom"
            [center]="positions().center"
            [styles]="styles()"
            [features]="features()"
            [actions]="actions()"
        />
        <explore-zoom-controls class="absolute right-2 bottom-2" />
    `, imports: [InteractiveMapComponent, ExploreZoomControlComponent], styles: ["/* angular:styles/component:css;f26b881f8eefd87319c7388ff7bb3cecb37d07a0db8d3a808d3cfede99235935;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-map.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=facilities-map.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesMapComponent, { className: "FacilitiesMapComponent", filePath: "apps/concierge/src/app/facilities/facilities-map.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/facilities/facilities-status.component.ts
var _c0 = () => ({ class: "material-symbols-rounded", content: "sentiment_very_satisfied" });
var FacilitiesStatusComponent = class _FacilitiesStatusComponent {
  constructor() {
    this.feedback = signal(
      "",
      ...ngDevMode ? [{ debugName: "feedback" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.total = signal(
      0,
      ...ngDevMode ? [{ debugName: "total" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function FacilitiesStatusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesStatusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesStatusComponent, selectors: [["facilities-status"]], decls: 24, vars: 6, consts: [[1, "bg-base-100", "w-full", "flex-1", "rounded-lg", "p-6", "shadow-xs"], [1, "mt-0", "mb-4"], [1, "border-base-200", "mb-2", "flex", "w-full", "items-center", "rounded-lg", "border"], ["name", "status", 1, "rounded-full"], [1, "text-bold", "flex-1", "text-xs"], [1, "text-bold", "p-4"], [1, "text-bold", "mr-4", "text-right"], [1, "bg-base-100", "w-full", "rounded-sm", "p-6", "shadow-xs"], [1, "mt-0", "mb-2"], ["name", "mood", 1, "border-base-200", "flex", "w-full", "items-center", "overflow-hidden", "rounded-lg", "border"], [1, "bg-light", "px-1", "text-2xl", 3, "icon"], [1, "text-bold", "px-4", "text-sm"]], template: function FacilitiesStatusComponent_Template(rf, ctx) {
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
        \u0275\u0275textInterpolate1("Total: ", ctx.total());
        \u0275\u0275advance(5);
        \u0275\u0275property("icon", \u0275\u0275pureFunction0(5, _c0));
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.feedback());
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light[_ngcontent-%COMP%] {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood][_ngcontent-%COMP%]   icon[_ngcontent-%COMP%] {\n}\n[name=status][_ngcontent-%COMP%] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */"] });
  }
};
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
            <div class="text-bold mr-4 text-right">Total: {{ total() }}</div>
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
            <p>{{ feedback() }}</p>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;9fae360829942384ed13a86c99ce5c9b2d20808b1bdb920654071bb7f7a7c122;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-status.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 20em;\n  padding: 2em;\n}\n.bg-light {\n  background-color: rgba(0, 0, 0, 0.05);\n}\n[name=mood] icon {\n}\n[name=status] {\n  margin: 0.5em;\n  border: 4px solid #21a453;\n  border-radius: 100%;\n}\n/*# sourceMappingURL=facilities-status.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesStatusComponent, { className: "FacilitiesStatusComponent", filePath: "apps/concierge/src/app/facilities/facilities-status.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/facilities/facilities-topbar.component.ts
function FacilitiesTopbarComponent_For_5_Template(rf, ctx) {
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
function FacilitiesTopbarComponent_For_11_Template(rf, ctx) {
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
var FacilitiesTopbarComponent = class _FacilitiesTopbarComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(EventsStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params = toSignal(this._route.queryParamMap);
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = signal(
      this.types.map((i) => `${i.id}`),
      ...ngDevMode ? [{ debugName: "type_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setDate = (d) => this._state.setDate(d);
    this.levels = this._org.active_levels;
    this.updateZones = (z) => {
      this.zones.set(z);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateTypes = (types) => {
      this.type_list.set(types);
      this._state.setFilters({
        hide_type: this.types.reduce((list, item) => {
          !types.includes(item.id) ? list.push(item) : "";
          return list;
        }, [])
      });
    };
    effect(() => {
      if (!this._ready())
        return;
      const params = this._query_params();
      if (!params?.has("zone_ids"))
        return;
      const zones = (params.get("zone_ids") || "").split(",").filter(Boolean);
      if (!zones.length)
        return;
      const level = this._org.levelWithID(zones);
      if (!level)
        return;
      this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
      this.zones.set(zones);
    });
    effect(() => {
      if (!this._ready())
        return;
      const levels = this.levels();
      if (!levels.length)
        return;
      const zones = this.zones().filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!zones.length) {
        zones.push(levels[0].id);
      }
      if (this._same_zones(zones, this.zones()))
        return;
      this.updateZones(zones);
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._ready.set(true);
    this.updateTypes(this.type_list());
  }
  _same_zones(left, right) {
    return left.length === right.length && left.every((zone, index) => zone === right[index]);
  }
  static {
    this.\u0275fac = function FacilitiesTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesTopbarComponent, selectors: [["facilities-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 5, consts: [[1, "border-base-200", "bg-base-100", "flex", "h-20", "items-center", "space-x-2", "border-b", "px-4"], ["appearance", "outline"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], [1, "flex-full"], [1, "mr-2"]], template: function FacilitiesTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(4, FacilitiesTopbarComponent_For_5_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-form-field", 1)(7, "mat-select", 4);
        \u0275\u0275listener("ngModelChange", function FacilitiesTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
          return ctx.updateTypes($event);
        });
        \u0275\u0275elementStart(8, "mat-select-trigger");
        \u0275\u0275text(9, "Legend");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, FacilitiesTopbarComponent_For_11_Template, 2, 2, "mat-option", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(12, "div", 5)(13, "searchbar", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.zones())("placeholder", \u0275\u0275pipeBind1(3, 3, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.levels());
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.type_list());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.types);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      SearchbarComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\n.flex-full[_ngcontent-%COMP%] {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FacilitiesTopbarComponent, [{
    type: Component,
    args: [{ selector: "facilities-topbar", template: `
        <div
            class="border-base-200 bg-base-100 flex h-20 items-center space-x-2 border-b px-4"
        >
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [ngModel]="zones()"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                >
                    @for (level of levels(); track level) {
                        <mat-option [value]="level.id">
                            {{ level.display_name || level.name }}
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <mat-form-field appearance="outline">
                <mat-select
                    multiple
                    [ngModel]="type_list()"
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
      MatFormFieldModule,
      MatSelectModule,
      SearchbarComponent,
      FormsModule,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;b448d51f834330ddc6a6175ecfaf37bbbf1883194676e13ab13b8e1daf564bfd;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/facilities/facilities-topbar.component.ts */\n.flex-full {\n  flex: 1;\n  width: 0.5em;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=facilities-topbar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesTopbarComponent, { className: "FacilitiesTopbarComponent", filePath: "apps/concierge/src/app/facilities/facilities-topbar.component.ts", lineNumber: 74 });
})();

// apps/concierge/src/app/facilities/facilities.component.ts
var FacilitiesComponent = class _FacilitiesComponent extends AsyncHandler {
  constructor() {
    super();
    this._router = inject(Router);
    this._url = signal(
      null,
      ...ngDevMode ? [{ debugName: "_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.path = computed(
      () => {
        this._url();
        const parts = this._router.url.split("/");
        return parts[parts.length - 1].split("?")[0];
      },
      ...ngDevMode ? [{ debugName: "path" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._url.set(event)));
  }
  static {
    this.\u0275fac = function FacilitiesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _FacilitiesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _FacilitiesComponent, selectors: [["", "app-new-facilities", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 0, consts: [[1, "flex", "h-px", "flex-1"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "flex-1"], [1, "h-full", "flex-1"], [1, "h-full", "space-y-4"]], template: function FacilitiesComponent_Template(rf, ctx) {
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
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nfacilities-map[_ngcontent-%COMP%] {\n  min-width: 50%;\n}\n/*# sourceMappingURL=facilities.component.css.map */"] });
  }
};
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
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(FacilitiesComponent, { className: "FacilitiesComponent", filePath: "apps/concierge/src/app/facilities/facilities.component.ts", lineNumber: 50 });
})();

// apps/concierge/src/app/facilities/facilities.routes.ts
var ROUTES = [
  { path: "", component: FacilitiesComponent, title: "Facilities" }
];
export {
  ROUTES
};
//# sourceMappingURL=facilities.routes-53NZBTY3.js.map
