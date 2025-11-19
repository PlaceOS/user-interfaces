import {
  ParkingUsersListComponent
} from "./chunk-PYFUTJNC.js";
import {
  ParkingSpaceListComponent
} from "./chunk-WM346FKF.js";
import {
  ParkingBookingsListComponent
} from "./chunk-4COUZEKF.js";
import {
  ParkingStateService
} from "./chunk-CMVPSXBK.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-XL3MDWA6.js";
import {
  ExploreParkingService
} from "./chunk-SNSNG7QQ.js";
import "./chunk-YV7CLCVO.js";
import {
  BookingRulesModalComponent
} from "./chunk-YUTBF2L5.js";
import {
  DateOptionsComponent
} from "./chunk-TOCDSBS2.js";
import "./chunk-WNTCVLQI.js";
import {
  SearchbarComponent
} from "./chunk-AGB55ATH.js";
import "./chunk-YIO5MOBF.js";
import "./chunk-M6Q7N2W7.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-67VYHWAM.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BuildingPipe,
  CommonModule,
  Component,
  DecimalPipe,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  debounceTime,
  first,
  firstTruthyValueFrom,
  inject,
  lastValueFrom,
  nextValueFrom,
  setClassMetadata,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-I4HSLPYT.js";

// apps/concierge/src/app/parking/parking-map.component.ts
var _c0 = () => ({ controls: true });
var _ParkingMapComponent = class _ParkingMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._explore = inject(ExploreStateService);
    this._ex_parking = inject(ExploreParkingService);
    this._parking = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.locate = "";
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("parking_level", this._parking.options.subscribe((_) => {
      const level_list = this._org.levelsForBuilding();
      const zone = _.zones[0] || level_list.find((_2) => _2.tags.includes("parking"))?.id;
      this._explore.setLevel(zone);
    }));
    this.subscription("parking_poll", this._ex_parking.startPolling());
    this.subscription("parking_options", this._parking.options.subscribe((_) => {
      this._ex_parking.setOptions(_);
    }));
    this._ex_parking.on_book = async (space) => {
      const options = await nextValueFrom(this._parking.options);
      await this._parking.editReservation(void 0, {
        space: __spreadProps(__spreadValues({}, space), {
          zone: this._org.levelWithID([space.zone_id || space.zone])
        }),
        date: options.date
      });
    };
  }
};
_ParkingMapComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingMapComponent_BaseFactory;
  return function ParkingMapComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingMapComponent_BaseFactory || (\u0275ParkingMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingMapComponent)))(__ngFactoryType__ || _ParkingMapComponent);
  };
})();
_ParkingMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-map"]], features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 18, consts: [[1, "relative", "my-2", "h-[calc(100%-1.5rem)]", "w-full", "rounded-xl", "bg-base-200", "shadow"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]], template: function ParkingMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("styles", \u0275\u0275pipeBind1(3, 9, ctx.styles))("features", \u0275\u0275pipeBind1(4, 11, ctx.features))("actions", \u0275\u0275pipeBind1(5, 13, ctx.actions))("labels", \u0275\u0275pipeBind1(6, 15, ctx.labels))("options", \u0275\u0275pureFunction0(17, _c0))("focus", ctx.locate);
  }
}, dependencies: [CommonModule, AsyncPipe, InteractiveMapComponent], encapsulation: 2 });
var ParkingMapComponent = _ParkingMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingMapComponent, [{
    type: Component,
    args: [{ selector: "parking-map", template: `
        <div
            class="relative my-2 h-[calc(100%-1.5rem)] w-full rounded-xl bg-base-200 shadow"
        >
            <interactive-map
                [src]="url | async"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [labels]="labels | async"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `, providers: [ExploreParkingService], imports: [CommonModule, InteractiveMapComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "apps/concierge/src/app/parking/parking-map.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/parking/parking-topbar.component.ts
var _c02 = () => ["events", "list"];
var _c1 = () => ["events", "map"];
function ParkingTopbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingSpace());
    });
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.PARKING_SPACE_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingUser());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_USER_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReservation());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 21);
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 21);
    \u0275\u0275text(8, "map");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "list");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c02))("matTooltip", \u0275\u0275pipeBind1(2, 8, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c1))("matTooltip", \u0275\u0275pipeBind1(6, 10, "COMMON.MAP"));
  }
}
function ParkingTopbarComponent_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function ParkingTopbarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, ParkingTopbarComponent_For_18_Conditional_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function ParkingTopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_BOOKING_RULES"));
  }
}
function ParkingTopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "icon", 27);
    \u0275\u0275text(5, "car_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "span", 28);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 15, ctx_r1.bookings)) == null ? null : tmp_1_0.length) || 0, " of ", ((tmp_1_0 = \u0275\u0275pipeBind1(3, 17, ctx_r1.spaces)) == null ? null : tmp_1_0.length) || "", " ");
    const percent_r7 = (((tmp_2_0 = \u0275\u0275pipeBind1(7, 19, ctx_r1.bookings)) == null ? null : tmp_2_0.length) || 0) / (((tmp_2_0 = \u0275\u0275pipeBind1(8, 21, ctx_r1.spaces)) == null ? null : tmp_2_0.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bg-error", percent_r7 === 100)("text-error-content", percent_r7 === 100)("bg-warning", percent_r7 > 50 && percent_r7 < 100)("text-warning-content", percent_r7 > 50 && percent_r7 < 100)("bg-success", percent_r7 < 50)("text-success-content", percent_r7 < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 23, percent_r7 * 100, "2.0-0"), "%");
  }
}
function ParkingTopbarComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 29);
    \u0275\u0275listener("dateChange", function ParkingTopbarComponent_Conditional_23_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _ParkingTopbarComponent = class _ParkingTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.section = signal("events");
    this.view = signal("list");
    this.zones = [];
    this.levels = this._state.levels;
    this.options = this._state.options;
    this.spaces = this._state.spaces;
    this.bookings = this._state.bookings;
    this.setDate = (d) => this._state.setOptions({ date: d });
    this.setSearch = (str) => this._state.setOptions({ search: str });
    this.updateZones = (z) => {
      if (!this._router.url.includes("parking"))
        return;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setOptions({ zones: z });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get disable_reservations() {
    return !!this._settings.get("app.parking.disable_bookings");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "parking" }
    });
  }
  async ngOnInit() {
    this._updatePath();
    await firstTruthyValueFrom(this._org.initialised);
    await lastValueFrom(timer(1e3));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("zone_ids") && this._router.url.includes("parking")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          this.zones = zones;
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this._state.setOptions({ zones });
        }
      }
    }));
    this.subscription("levels", this._state.levels.pipe(debounceTime(100)).subscribe((levels) => {
      if (this.use_region)
        return;
      this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!this.zones.length && levels.length) {
        this.zones.push(levels[0].id);
      }
      this.updateZones(this.zones);
    }));
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  newParkingSpace() {
    this._state.editSpace();
  }
  newParkingUser() {
    this._state.editUser();
  }
  async newReservation() {
    const { date } = await nextValueFrom(this.options);
    this._state.editReservation(void 0, {
      date: date || Date.now(),
      allow_time_changes: true
    });
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    const [section, view] = parts.slice(-2);
    this.section.set(section);
    this.view.set(view.split("?")[0]);
  }
};
_ParkingTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingTopbarComponent_BaseFactory;
  return function ParkingTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingTopbarComponent_BaseFactory || (\u0275ParkingTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingTopbarComponent)))(__ngFactoryType__ || _ParkingTopbarComponent);
  };
})();
_ParkingTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingTopbarComponent, selectors: [["parking-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 22, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], [1, "mb-2", "flex", "h-14", "items-center", "bg-base-100", "px-8"], [1, "mr-2", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-px", "min-w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "matTooltip"], ["matTooltip", "Parking Spaces Occupied", 1, "mr-2", "flex", "items-center", "space-x-2", "rounded-md", "border", "border-base-300", "py-1", "pl-3", "pr-1", "text-sm"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "routerLink", "matTooltip"], [1, "text-2xl"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "routerLink", "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "matTooltip"], [1, "!ml-1", "text-lg"], [1, "rounded", "px-2", "py-1", "font-mono", "text-xs"], [3, "dateChange"]], template: function ParkingTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 2);
    \u0275\u0275elementStart(5, "searchbar", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalCreate(9, ParkingTopbarComponent_Conditional_9_Template, 7, 6, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ParkingTopbarComponent_Conditional_10_Template, 6, 3, "button", 6);
    \u0275\u0275conditionalCreate(11, ParkingTopbarComponent_Conditional_11_Template, 6, 3, "button", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275conditionalCreate(13, ParkingTopbarComponent_Conditional_13_Template, 9, 14, "div", 9);
    \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "mat-select", 11);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_15_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(17, ParkingTopbarComponent_For_18_Template, 5, 3, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 13);
    \u0275\u0275conditionalCreate(21, ParkingTopbarComponent_Conditional_21_Template, 4, 3, "button", 14);
    \u0275\u0275conditionalCreate(22, ParkingTopbarComponent_Conditional_22_Template, 12, 26, "div", 15);
    \u0275\u0275conditionalCreate(23, ParkingTopbarComponent_Conditional_23_Template, 1, 0, "date-options");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, ctx.section() !== "events" ? "APP.CONCIERGE.PARKING_HEADER" : "APP.CONCIERGE.PARKING_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(6, 14, ctx.options)) == null ? null : tmp_1_0.search);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ((tmp_2_0 = \u0275\u0275pipeBind1(8, 16, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "Select a level to add a space");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.view() === "spaces" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "users" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.section() === "events" && !ctx.disable_reservations ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.section() === "events" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 18, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 20, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.view() !== "list" && ctx.view() !== "map" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.section() === "events" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" || ctx.view() === "map" ? 23 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DecimalPipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  DateOptionsComponent,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple,
  IconComponent,
  BuildingPipe,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  SearchbarComponent,
  TranslatePipe,
  RouterModule,
  RouterLink
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */"] });
var ParkingTopbarComponent = _ParkingTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingTopbarComponent, [{
    type: Component,
    args: [{ selector: "parking-topbar", template: `
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (section() !== 'events'
                        ? 'APP.CONCIERGE.PARKING_HEADER'
                        : 'APP.CONCIERGE.PARKING_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="(options | async)?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    (options | async)?.zones?.length
                        ? ''
                        : 'Select a level to add a space'
                "
            >
                @if (view() === 'spaces') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newParkingSpace()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                }
            </div>
            @if (view() === 'users') {
                <button
                    btn
                    matRipple
                    class="w-40 space-x-2"
                    (click)="newParkingUser()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_USER_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (section() === 'events' && !disable_reservations) {
                <button
                    btn
                    matRipple
                    class="w-48 space-x-2"
                    (click)="newReservation()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
        </div>
        <div class="mb-2 flex h-14 items-center bg-base-100 px-8">
            @if (section() === 'events') {
                <div class="mr-2 flex items-center">
                    <a
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="view() !== 'list'"
                        [routerLink]="['events', 'list']"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </a>
                    <a
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="view() !== 'map'"
                        [routerLink]="['events', 'map']"
                        [matTooltip]="'COMMON.MAP' | translate"
                    >
                        <icon class="text-2xl">map</icon>
                    </a>
                </div>
            }
            <mat-form-field appearance="outline" class="no-subscript w-56">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="updateZones($event)"
                    [placeholder]="'COMMON.LEVEL_ALL' | translate"
                    multiple
                >
                    @for (level of levels | async; track level) {
                        <mat-option [value]="level.id">
                            <div class="flex flex-col-reverse">
                                @if (use_region) {
                                    <div class="text-xs opacity-30">
                                        {{
                                            (level.parent_id | building)
                                                ?.display_name
                                        }}
                                        <span class="opacity-0"> - </span>
                                    </div>
                                }
                                <div>
                                    {{ level.display_name || level.name }}
                                </div>
                            </div>
                        </mat-option>
                    }
                </mat-select>
            </mat-form-field>
            <div class="w-px min-w-2 flex-1"></div>
            @if (view() !== 'list' && view() !== 'map') {
                <button
                    icon
                    matRipple
                    class="h-12 w-12 rounded bg-secondary text-secondary-content"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (section() === 'events') {
                <div
                    class="mr-2 flex items-center space-x-2 rounded-md border border-base-300 py-1 pl-3 pr-1 text-sm"
                    matTooltip="Parking Spaces Occupied"
                >
                    {{ (bookings | async)?.length || 0 }} of
                    {{ (spaces | async)?.length || '' }}
                    <icon class="!ml-1 text-lg">car_lock</icon>
                    @let percent =
                        ((bookings | async)?.length || 0) /
                        ((spaces | async)?.length || 0);
                    <span
                        class="rounded px-2 py-1 font-mono text-xs"
                        [class.bg-error]="percent === 100"
                        [class.text-error-content]="percent === 100"
                        [class.bg-warning]="percent > 50 && percent < 100"
                        [class.text-warning-content]="
                            percent > 50 && percent < 100
                        "
                        [class.bg-success]="percent < 50"
                        [class.text-success-content]="percent < 50"
                        >{{ percent * 100 | number: '2.0-0' }}%</span
                    >
                </div>
            }
            @if (view() === 'list' || view() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
            }
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      DateOptionsComponent,
      MatTooltipModule,
      MatRippleModule,
      IconComponent,
      BuildingPipe,
      MatFormFieldModule,
      MatSelectModule,
      FormsModule,
      SearchbarComponent,
      TranslatePipe,
      RouterModule
    ], styles: ["/* angular:styles/component:css;4bb26a1eb5035846e32fdbd8af6a308e831b6910e15ebdbaee0887184c668792;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingTopbarComponent, { className: "ParkingTopbarComponent", filePath: "apps/concierge/src/app/parking/parking-topbar.component.ts", lineNumber: 230 });
})();

// apps/concierge/src/app/parking/parking.component.ts
var _c03 = () => ["/book", "parking", "manage", "spaces"];
var _c12 = () => ["/book", "parking", "manage", "users"];
var _c2 = () => ["/book", "parking", "manage", "map"];
function ParkingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "nav", 7)(2, "a", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-tab-nav-panel", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tabPanel_r1 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabPanel", tabPanel_r1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c03))("active", ctx_r1.view() === "spaces");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_TAB_SPACES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c12))("active", ctx_r1.view() === "users");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "APP.CONCIERGE.PARKING_TAB_USERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c2))("active", ctx_r1.view() === "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "APP.CONCIERGE.PARKING_TAB_MAP"), " ");
  }
}
function ParkingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_UNAVAILABLE"), " ");
  }
}
var _ParkingComponent = class _ParkingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._router = inject(Router);
    this.levels = this._state.levels;
    this.section = signal("events");
    this.view = signal("list");
  }
  ngOnInit() {
    this.subscription("poll_bookings", () => this._state.startPolling());
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    const [section, view] = parts.slice(-2);
    this.section.set(section);
    this.view.set(view.split("?")[0]);
  }
};
_ParkingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingComponent_BaseFactory;
  return function ParkingComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingComponent_BaseFactory || (\u0275ParkingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingComponent)))(__ngFactoryType__ || _ParkingComponent);
  };
})();
_ParkingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 4, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "px-8", "pb-2"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "h-full", "w-full", "overflow-auto"], [1, "absolute", "inset-0", "z-50", "flex", "flex-col", "items-center", "justify-center"], ["mat-tab-nav-bar", "", 1, "overflow-hidden", "rounded", "bg-base-200", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "absolute", "inset-0", "z-0", "bg-base-100", "opacity-80"], [1, "z-10", "opacity-60"]], template: function ParkingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2);
    \u0275\u0275element(4, "parking-topbar");
    \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Template, 13, 19, "div", 3);
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
    \u0275\u0275element(8, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ParkingComponent_Conditional_9_Template, 5, 3, "div", 6);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.section() !== "events" ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!((tmp_1_0 = \u0275\u0275pipeBind1(10, 2, ctx.levels)) == null ? null : tmp_1_0.length) ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  MatTabsModule,
  MatTabNav,
  MatTabNavPanel,
  MatTabLink,
  RouterModule,
  RouterOutlet,
  RouterLink,
  ParkingTopbarComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */"] });
var ParkingComponent = _ParkingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingComponent, [{
    type: Component,
    args: [{ selector: "app-parking", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <parking-topbar></parking-topbar>
                @if (section() !== 'events') {
                    <div class="px-8 pb-2">
                        <nav
                            mat-tab-nav-bar
                            class="overflow-hidden rounded bg-base-200"
                            [tabPanel]="tabPanel"
                        >
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'spaces',
                                ]"
                                [active]="view() === 'spaces'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_SPACES'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'users',
                                ]"
                                [active]="view() === 'users'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_USERS'
                                        | translate
                                }}
                            </a>
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'map',
                                ]"
                                [active]="view() === 'map'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_MAP' | translate
                                }}
                            </a>
                        </nav>
                        <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
                    </div>
                }
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if (!(levels | async)?.length) {
                    <div
                        class="absolute inset-0 z-50 flex flex-col items-center justify-center"
                    >
                        <div
                            class="absolute inset-0 z-0 bg-base-100 opacity-80"
                        ></div>
                        <p class="z-10 opacity-60">
                            {{
                                'APP.CONCIERGE.PARKING_UNAVAILABLE' | translate
                            }}
                        </p>
                    </div>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      RouterModule,
      ParkingTopbarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;c3c4e43489fa049a08c22bf31fd7fb879b1769192f7684fb69867d5e4ca38a37;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/concierge/src/app/parking/parking.component.ts", lineNumber: 130 });
})();

// apps/concierge/src/app/parking/parking.module.ts
var ROUTES = [
  {
    path: "",
    component: ParkingComponent,
    children: [
      {
        path: "events",
        children: [
          { path: "map", component: ParkingMapComponent },
          { path: "list", component: ParkingBookingsListComponent },
          { path: "**", redirectTo: "list" }
        ]
      },
      {
        path: "manage",
        children: [
          { path: "users", component: ParkingUsersListComponent },
          { path: "map", component: ParkingMapComponent },
          { path: "spaces", component: ParkingSpaceListComponent },
          { path: "**", redirectTo: "spaces" }
        ]
      },
      { path: "**", redirectTo: "events" }
    ]
  },
  { path: "**", redirectTo: "" }
];
var _AppParkingModule = class _AppParkingModule {
};
_AppParkingModule.\u0275fac = function AppParkingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppParkingModule)();
};
_AppParkingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppParkingModule });
_AppParkingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ParkingComponent,
  ParkingBookingsListComponent,
  ParkingSpaceListComponent,
  ParkingUsersListComponent,
  ParkingMapComponent,
  RouterModule.forChild(ROUTES)
] });
var AppParkingModule = _AppParkingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppParkingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ParkingComponent,
        ParkingBookingsListComponent,
        ParkingSpaceListComponent,
        ParkingUsersListComponent,
        ParkingMapComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  AppParkingModule
};
//# sourceMappingURL=parking.module-3S4DJ5WD.js.map
