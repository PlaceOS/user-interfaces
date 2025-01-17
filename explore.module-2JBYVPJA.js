import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BookingFormService,
  CommonModule,
  ComponentsModule,
  CustomTooltipComponent,
  DEFAULT_COLOURS,
  DateFieldComponent,
  DatePipe,
  DefaultValueAccessor,
  Desk,
  DurationFieldComponent,
  ElementRef,
  ExploreBookingModalComponent,
  ExploreDeskInfoComponent,
  ExploreIconComponent,
  ExploreLockerBankInfoComponent,
  ExploreSpaceInfoComponent,
  ExploreSpacesService,
  ExploreStateService,
  FormControl,
  FormControlName,
  FormFieldsModule,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
  LockersService,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapCanvasComponent,
  MapLocation,
  MapPinComponent,
  MapRadiusComponent,
  MapsPeopleService,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSlideToggle,
  MatSlideToggleModule,
  MatSlider,
  MatSliderThumb,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  OverlayModule,
  ParkingService,
  PortalModule,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SharedBookingsModule,
  SharedComponentsModule,
  SharedSpacesModule,
  SlicePipe,
  Space,
  SpacePipe,
  SpacesService,
  TimeFieldComponent,
  UserSearchFieldComponent,
  VirtualKeyboardComponent,
  addDays,
  authority,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInMinutes,
  endOfDay,
  endOfMinute,
  filter,
  first,
  flatten,
  forkJoin,
  formatDistanceToNow,
  getModule,
  getUnixTime,
  isSameDay,
  listChildMetadata,
  log,
  map,
  moduleFromMetadata,
  notifyError,
  notifySuccess,
  of,
  queryBookings,
  querySystems,
  queryUsers,
  rulesForResource,
  searchStaff,
  setHours,
  shareReplay,
  showMetadata,
  showStaff,
  startOfDay,
  startOfMinute,
  switchMap,
  take,
  tap,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsetComponentScope,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-FJJWYB32.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// libs/explore/src/lib/explore-map-control.component.ts
function ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_mat_form_field_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-select", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_mat_form_field_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275template(3, ExploreMapControlComponent_mat_form_field_1_mat_option_3_Template, 2, 2, "mat-option", 5);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(2, 2, ctx_r1.building));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 4, ctx_r1.buildings));
  }
}
function ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_mat_form_field_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275elementStart(2, "mat-select", 8);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_mat_form_field_3_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275template(4, ExploreMapControlComponent_mat_form_field_3_mat_option_4_Template, 2, 2, "mat-option", 5);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 3, ctx_r1.buildings)) == null ? null : tmp_1_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 5, ctx_r1.level));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 7, ctx_r1.levels));
  }
}
var _ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor(_org, _state, _router, _route) {
    super();
    this._org = _org;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => {
      this._state.setFeatures("_located", []);
      this.timeout("set_level", () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone: lvl.id }
      }), 201);
    };
    this.setBuilding = (bld) => this._org.building = bld;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
    });
  }
};
_ExploreMapControlComponent.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapControlComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_ExploreMapControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 6, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_1533056789917995243$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_0 = goog.getMsg("Select Building...");
    i18n_0 = MSG_EXTERNAL_1533056789917995243$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟dea1f8bc2b32584fadf07ef815709b946d3726ff␟1533056789917995243:Select Building...`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_7854898325453225869$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_1 = goog.getMsg("Select Level...");
    i18n_1 = MSG_EXTERNAL_7854898325453225869$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_CONTROL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟025373b97845a8c2b54d2eb17d9c479f64207b11␟7854898325453225869:Select Level...`;
  }
  return [[1, "flex", "space-x-2", "w-full"], ["overlay", "", "buildings", "", "class", "flex-1 min-w-[10.5rem] no-subscript", "has-bld", "true", "appearance", "outline", 4, "ngIf"], ["overlay", "", "levels", "", "class", "flex-1 min-w-[10.25rem] no-subscript", "appearance", "outline", 4, "ngIf"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "flex-1", "min-w-[10.5rem]", "no-subscript"], ["placeholder", i18n_0, 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["overlay", "", "levels", "", "appearance", "outline", 1, "flex-1", "min-w-[10.25rem]", "no-subscript"], ["placeholder", i18n_1, 3, "ngModelChange", "ngModel"]];
}, template: function ExploreMapControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ExploreMapControlComponent_mat_form_field_1_Template, 5, 6, "mat-form-field", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ExploreMapControlComponent_mat_form_field_3_Template, 6, 9, "mat-form-field", 2);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ((tmp_0_0 = \u0275\u0275pipeBind1(2, 2, ctx.buildings)) == null ? null : tmp_0_0.length) > 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_1_0 = \u0275\u0275pipeBind1(4, 4, ctx.levels)) == null ? null : tmp_1_0.length);
  }
}, dependencies: [NgForOf, NgIf, MatOption, MatFormField, MatSelect, NgControlStatus, NgModel, AsyncPipe], styles: ["\n\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
var ExploreMapControlComponent = _ExploreMapControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 71 });
})();

// libs/explore/src/lib/explore-sensor-info.component.ts
function ExploreSensorInfoComponent_ng_template_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "app-icon");
    \u0275\u0275text(2, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.temp, "\u02DA", ctx_r0.temp_unit, "");
  }
}
function ExploreSensorInfoComponent_ng_template_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "app-icon");
    \u0275\u0275text(2, "opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.humidity, "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "app-icon", 8);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, ExploreSensorInfoComponent_ng_template_3_div_1_Template, 5, 2, "div", 3)(2, ExploreSensorInfoComponent_ng_template_3_div_2_Template, 5, 1, "div", 3)(3, ExploreSensorInfoComponent_ng_template_3_div_3_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.temp);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.humidity);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.temp > 82);
  }
}
var shown_id = "";
var _ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  get show() {
    return shown_id === this._details.id;
  }
  set show(value) {
    this.timeout("show", () => shown_id = value ? this._details.id : "");
  }
  constructor(_details) {
    super();
    this._details = _details;
    this.temp = this._details.temp || 0;
    this.temp_unit = this._details.temp_unit || "C";
    this.humidity = this._details.humidity || 0;
  }
};
_ExploreSensorInfoComponent.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSensorInfoComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA));
};
_ExploreSensorInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "absolute", "top-1/2", "left-1/2", "w-7", "h-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "shadow", "pointer-events-auto", 3, "content"], [1, "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "bg-base-100", "rounded-lg", "border", "border-base-200", "p-2", "text-xl"], ["class", "flex items-center space-x-2 whitespace-nowrap pr-2", 4, "ngIf"], ["class", "absolute top-0 right-0 rounded-full translate-x-1/2 -translate-y-1/2 bg-base-100 border border-base-200", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "whitespace-nowrap", "pr-2"], [1, ""], [1, "absolute", "top-0", "right-0", "rounded-full", "translate-x-1/2", "-translate-y-1/2", "bg-base-100", "border", "border-base-200"], [1, "text-error", "text-xl"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "app-icon");
    \u0275\u0275text(2, " visibility ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const stats_r2 = \u0275\u0275reference(4);
    \u0275\u0275property("content", stats_r2);
  }
}, dependencies: [NgIf, IconComponent, CustomTooltipComponent, MatRipple] });
var ExploreSensorInfoComponent = _ExploreSensorInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSensorInfoComponent, { className: "ExploreSensorInfoComponent", filePath: "libs/explore/src/lib/explore-sensor-info.component.ts", lineNumber: 57 });
})();

// libs/explore/src/lib/explore-zones.service.ts
var _ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._area_list = [];
    this._statuses = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._features = [];
    this._polygons$ = new BehaviorSubject([]);
    this._bind = combineLatest([
      this._org.active_building,
      this._state.level,
      this._state.options
    ]).pipe(filter(([bld, lvl, { is_public }]) => !!bld && !!lvl && !is_public), map(([_, lvl]) => {
      this._statuses = {};
      let system_id = this._org.binding("area_management");
      if (!system_id)
        return;
      const bind_areas = getModule(system_id, "AreaManagement").binding(`${lvl.id}:areas`);
      const bind_zone = getModule(system_id, "AreaManagement").binding(`${lvl.id}`);
      const zones = combineLatest([
        bind_areas.listen(),
        bind_zone.listen()
      ]).pipe(debounceTime(100), map(([a, z]) => [
        ...a?.value || [],
        ...(z?.value || []).filter((_2) => _2.location === "area")
      ]));
      this.subscription(`zones-status`, zones.subscribe((l) => this.parseData(l)));
      this.subscription("binding", bind_areas.bind());
      this.subscription("zone-binding", bind_zone.bind());
    }));
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const zone_metadata = yield Promise.all(this._org.levels.map((bld) => showMetadata(bld.id, "map_regions").toPromise()));
      this._area_list = [];
      for (const zone of zone_metadata) {
        const areas = zone?.details?.areas;
        if (!areas)
          continue;
        for (const area of areas) {
          const { capacity, hide_label, label_location, draw_polygon, area_count_key } = area.properties || {};
          const { coordinates } = area.geometry || {};
          this._capacity[area.id] = capacity || 100;
          this._count_key[area.id] = area_count_key || "";
          this._location[area.id] = coordinates?.length ? getCenterPoint(coordinates) : null;
          this._label_location[area.id] = hide_label === false ? label_location || this._location[area.id] : null;
          this._draw[area.id] = !!draw_polygon || this._settings.get("app.explore.use_zone_polygons");
          this._points[area.id] = coordinates || [];
          this._area_list.push(area.map_id || area.id);
        }
      }
      this._state.setFeatures("zones-canvas", [
        {
          track_id: "zones-canvas",
          location: { x: 0.5, y: 0.5 },
          content: MapCanvasComponent,
          data: {
            polygons$: this._polygons$,
            draw_points: false,
            draw_labels: false
          }
        }
      ]);
      this.updateStatus();
      this.subscription("bind", this._bind.subscribe());
    });
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = zone[this._count_key[id] || this._settings.get("app.explore.area_count_key") || "count"] || 0;
      const filled = count / capacity;
      this._statuses[id] = zone.at_location ? "busy" : filled < 0.4 ? "free" : filled < 0.75 ? "pending" : "busy";
      if (!this._location[id])
        continue;
      let content = "";
      if (zone.count) {
        content += `${zone.count || 0} User Device${zone.count === 1 ? "" : "s"}
`;
      }
      if (zone.temperature)
        content += `Temperature: ${zone.temperature} \u02DAC
`;
      if (zone.people_count > 0)
        content += `${zone.people_count_sum} ${zone.people_count_sum === 1 ? "Person" : "People"}
`;
      if (zone.humidity)
        content += `Humidity: ${zone.humidity}%
`;
      if (zone.queue_size)
        content += `Queue Size: ${zone.queue_size}%
`;
      if (zone.counter)
        content += `Count: ${zone.counter}
`;
      if (this._label_location[id] && !this._settings.get("app.explore.show_zone_labels")) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (this._settings.get("app.explore.show_zone_sensor_info") && (zone.temperature || zone.humidity)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature || 10,
            temp_unit: this._settings.get("app.use_imperial_units") ? "F" : "C",
            humidity: zone.humidity || 10
          },
          z_index: 98
        });
      }
    }
    this._features = features;
    this._state.setLabels("zones", labels);
    this.updateStatus();
  }
  updateStatus() {
    const style_map = {};
    const features = [];
    const colours = this._settings.get("app.explore.colors") || {};
    const polygons = [];
    for (const zone_id in this._statuses) {
      const colour = colours[`zone-${this._statuses[zone_id]}`] || colours[`${this._statuses[zone_id]}`] || DEFAULT_COLOURS[`${this._statuses[zone_id]}`];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else {
        if (this._state.has("style", zone_id, ["zones", "zones-styles"])) {
          features.push({
            location: zone_id,
            content: ExploreIconComponent,
            data: {
              icon: { content: "pin_drop" }
            },
            full_size: true,
            z_index: 98
          });
        } else {
          style_map[`#${zone_id}`] = {
            fill: colour,
            opacity: 0.6
          };
        }
      }
    }
    this._polygons$.next(polygons);
    this._state.setFeatures("zones", [...features, ...this._features]);
    this._state.setStyles("zones-styles", style_map);
  }
};
_ExploreZonesService.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZonesService)(\u0275\u0275inject(ExploreStateService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_ExploreZonesService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
var ExploreZonesService = _ExploreZonesService;
function getCenterPoint(points) {
  const diff = (points || []).reduce((m, [x, y]) => ({
    x_min: x < m.x_min ? x : m.x_min,
    x_max: x > m.x_max ? x : m.x_max,
    y_min: y < m.y_min ? y : m.y_min,
    y_max: y > m.y_max ? y : m.y_max
  }), {
    x_min: 100,
    x_max: -100,
    y_min: 100,
    y_max: -100
  });
  return {
    x: diff.x_min + (diff.x_max - diff.x_min) / 2,
    y: diff.y_min + (diff.y_max - diff.y_min) / 2
  };
}

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c0 = () => ({ standalone: true });
function SetDatetimeModalComponent_main_6_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 13)(2, "label");
    \u0275\u0275text(3, "Resource:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.resource.name || ctx_r1.resource.map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_main_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "label");
    \u0275\u0275text(3, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 15);
    \u0275\u0275elementEnd()();
  }
}
function SetDatetimeModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275template(1, SetDatetimeModalComponent_main_6_div_1_Template, 6, 1, "div", 6)(2, SetDatetimeModalComponent_main_6_div_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 7)(4, "div", 8)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 9);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 10)(11, "label");
    \u0275\u0275text(12, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "a-time-field", 11);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_main_6_Template_a_time_field_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 10)(15, "label");
    \u0275\u0275text(16, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "a-duration-field", 12);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.resource);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.host);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r1.book_until);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", ctx_r1.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(12, _c0))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance(4);
    \u0275\u0275property("time", (tmp_8_0 = ctx_r1.form.get("date")) == null ? null : tmp_8_0.value)("max", 10 * 60)("min", 60)("step", 60)("use_24hr", ctx_r1.use_24hr_time);
  }
}
var _SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_data, _settings) {
    this._data = _data;
    this._settings = _settings;
    this.host = this._data.host;
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration)
    });
    this.book_until = this._data.until;
    this.resource = this._data.resource;
  }
};
_SetDatetimeModalComponent.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SetDatetimeModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(SettingsService));
};
_SetDatetimeModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 10, vars: 2, consts: [["classs", "flex items-center justify-between"], ["icon", "", "mat-dialog-close", ""], ["class", "w-[24rem] max-w-[85vw] pt-4", 3, "formGroup", 4, "ngIf"], [1, "w-full", "p-2", "border-t", "border-base-200", "flex", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "w-[24rem]", "max-w-[85vw]", "pt-4", 3, "formGroup"], ["class", "flex flex-col sm:flex-row space-x-0 sm:space-x-2 w-[640px] max-w-[calc(100%-2rem)] mx-auto", 4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "space-x-0", "sm:space-x-2", "w-[640px]", "max-w-[calc(100%-2rem)]", "mx-auto"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "use_24hr"], [1, "flex", "flex-col", "flex-1", "w-full", "sm:w-1/4", "mb-2"], [1, "px-4", "py-3", "border", "border-base-200", "rounded", "w-full", "mb-4"], ["formControlName", "user", 1, "mb-4"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h2");
    \u0275\u0275text(2, "Set date and time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(6, SetDatetimeModalComponent_main_6_Template, 18, 13, "main", 2);
    \u0275\u0275elementStart(7, "footer", 3)(8, "button", 4);
    \u0275\u0275text(9, " Continue ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("mat-dialog-close", ctx.form.value);
  }
}, dependencies: [NgIf, IconComponent, MatRipple, MatDialogClose, NgControlStatus, NgControlStatusGroup, NgModel, FormGroupDirective, FormControlName, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserSearchFieldComponent] });
var SetDatetimeModalComponent = _SetDatetimeModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 97 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
var _c02 = ["explore-device-info", ""];
function ExploreDeviceInfoComponent_ng_template_5_p_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 23)(1, "label");
    \u0275\u0275i18n(2, 4);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.mac, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 24)(1, "label");
    \u0275\u0275i18n(2, 5);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.manufacturer, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 25)(1, "label");
    \u0275\u0275i18n(2, 6);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.os, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 26)(1, "label");
    \u0275\u0275i18n(2, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.ssid, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 27)(1, "label");
    \u0275\u0275i18n(2, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r2.user == null ? null : ctx_r2.user.name) || (ctx_r2.user == null ? null : ctx_r2.user.username) || ctx_r2.username, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_p_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28)(1, "label");
    \u0275\u0275i18n(2, 9);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.user.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275listener("mouseleave", function ExploreDeviceInfoComponent_ng_template_5_Template_div_mouseleave_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16);
    \u0275\u0275template(3, ExploreDeviceInfoComponent_ng_template_5_p_3_Template, 4, 1, "p", 17);
    \u0275\u0275elementStart(4, "p")(5, "label");
    \u0275\u0275i18n(6, 2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p")(9, "label");
    \u0275\u0275i18n(10, 3);
    \u0275\u0275elementEnd();
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ExploreDeviceInfoComponent_ng_template_5_p_12_Template, 4, 1, "p", 18)(13, ExploreDeviceInfoComponent_ng_template_5_p_13_Template, 4, 1, "p", 19)(14, ExploreDeviceInfoComponent_ng_template_5_p_14_Template, 4, 1, "p", 20)(15, ExploreDeviceInfoComponent_ng_template_5_p_15_Template, 4, 1, "p", 21)(16, ExploreDeviceInfoComponent_ng_template_5_p_16_Template, 4, 1, "p", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.mac && !ctx_r2.hide_fields.includes("mac"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.variance, "m");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r2.last_seen, "");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.manufacturer && !ctx_r2.hide_fields.includes("manufacturer"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.os && !ctx_r2.hide_fields.includes("os"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.ssid && !ctx_r2.hide_fields.includes("ssid"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.username && !ctx_r2.hide_fields.includes("username"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.user && !ctx_r2.hide_fields.includes("user"));
  }
}
var EMPTY = [];
var _ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent extends AsyncHandler {
  get hide_fields() {
    return this._settings.get("app.explore.hide_device_fields") || EMPTY;
  }
  /** Time of the last update */
  get last_seen() {
    return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
      addSuffix: true
    });
  }
  /** Diameter of the radius circle */
  get diameter() {
    return this._details.variance * 100 * this.zoom;
  }
  get distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get distance_color() {
    return this.distance < 10 ? "#43a047" : this.distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor(_details, _settings, _element) {
    super();
    this._details = _details;
    this._settings = _settings;
    this._element = _element;
    this.username = "";
    this.user = this._details.user;
    this.mac = this._details.mac;
    this.manufacturer = this._details.manufacturer;
    this.os = this._details.os;
    this.ssid = this._details.ssid;
    this.variance = this._details.variance?.toFixed(2);
    this.bg_color = this._details.bg_color || this.distance_color;
    this.zoom = 1;
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos = position.y >= 0.5 ? "bottom" : "top";
      this.x_pos = position.x >= 0.5 ? "end" : "start";
      this.subscription("zoom", this._details.zoom$.subscribe((_) => this.zoom = _));
    }, 200);
  }
  loadUser() {
    return __async(this, null, function* () {
      if (this.username)
        return;
      const mod = getModule(this._details.system, "LocationServices");
      if (!mod)
        return;
      this.username = "Loading...";
      const details = yield mod.execute("check_ownership_of", [this.mac]).catch((_) => null);
      this.username = details && details.assigned_to ? details.assigned_to : "";
    });
  }
};
_ExploreDeviceInfoComponent.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ElementRef));
};
_ExploreDeviceInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 7, vars: 9, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_1921442792032576180$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_0 = goog.getMsg("Accuracy:");
    i18n_0 = MSG_EXTERNAL_1921442792032576180$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟4e79bc7b2a23c2e4e80d256c8167411cf124bd20␟1921442792032576180:Accuracy:`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_5291488112436395082$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_1 = goog.getMsg("Last Seen:");
    i18n_1 = MSG_EXTERNAL_5291488112436395082$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟1c564bebf178f9c70f2c66a80393137bfa0d2ea8␟5291488112436395082:Last Seen:`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_5080596488336446120$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_2 = goog.getMsg("MAC:");
    i18n_2 = MSG_EXTERNAL_5080596488336446120$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟14802d5580219b4522c9c50e1a9f401aee191e1e␟5080596488336446120:MAC:`;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_6296767522110275448$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_3 = goog.getMsg("Manufacturer:");
    i18n_3 = MSG_EXTERNAL_6296767522110275448$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟a082daef9c0b66268ce56dfa8d96d47a04d2c4b1␟6296767522110275448:Manufacturer:`;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_2346706060395913038$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_4 = goog.getMsg("OS:");
    i18n_4 = MSG_EXTERNAL_2346706060395913038$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟5544405b325c518c94412239610d44250d5a223a␟2346706060395913038:OS:`;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_4345272263810420547$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_5 = goog.getMsg("SSID:");
    i18n_5 = MSG_EXTERNAL_4345272263810420547$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`:␟afd0fc7b37f54299537ba2abc9babf749adf383e␟4345272263810420547:SSID:`;
  }
  let i18n_6;
  if (false) {
    const MSG_EXTERNAL_140822705245800362$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_6 = goog.getMsg("Username:");
    i18n_6 = MSG_EXTERNAL_140822705245800362$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_6;
  } else {
    i18n_6 = $localize`:␟67fc3fe0566f8700b84a908c35497759db78addc␟140822705245800362:Username:`;
  }
  let i18n_7;
  if (false) {
    const MSG_EXTERNAL_2736556170366900089$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_7 = goog.getMsg("Type:");
    i18n_7 = MSG_EXTERNAL_2736556170366900089$$LIBS_EXPLORE_SRC_LIB_EXPLORE_DEVICE_INFO_COMPONENT_TS_7;
  } else {
    i18n_7 = $localize`:␟e78c0d60ac39787f62c9159646fe0b3c1ed55a1d␟2736556170366900089:Type:`;
  }
  return [["dot", ""], ["device_tooltip", ""], i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, i18n_7, ["name", "radius", 1, "radius", "absolute", "center", "bg-info", "bg-opacity-25", "border-8", "border-dashed", "border-blue-600", "rounded-full"], ["shadow", "", 1, "absolute", "center", "bg-neutral", "h-8", "w-8", "rounded-full"], ["name", "dot", 1, "h-3", "w-3", "absolute", "center", "rounded-full", "shadow", "border-2", "border-white"], ["customTooltip", "", 1, "absolute", "inset-0", "pointer-events-auto", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "device-info", 1, "w-64", "rounded", "bg-base-100", "p-4", "top-0", "left-0", "shadow", "pointer-events-none", "mx-2", 3, "mouseleave"], [1, "arrow"], [1, "details"], ["class", "break-words", 4, "ngIf"], ["type", "", 4, "ngIf"], ["os", "", 4, "ngIf"], ["ssid", "", 4, "ngIf"], ["username", "", 4, "ngIf"], ["user", "", 4, "ngIf"], [1, "break-words"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]];
}, template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "div", 10)(1, "div", 11)(2, "div", 12, 0);
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.loadUser());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 17, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const device_tooltip_r4 = \u0275\u0275reference(6);
    \u0275\u0275styleMap("height: " + ctx.diameter + "%; width: " + ctx.diameter + "%;");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx.bg_color);
    \u0275\u0275advance(2);
    \u0275\u0275property("content", device_tooltip_r4)("backdrop", false)("xPosition", ctx.x_pos)("yPosition", ctx.y_pos)("hover", true);
  }
}, dependencies: [NgIf, CustomTooltipComponent], styles: ["\n\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
var ExploreDeviceInfoComponent = _ExploreDeviceInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 120 });
})();

// libs/explore/src/lib/explore-desks.service.ts
var _ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  constructor(_state, _org, _settings, _bookings, _dialog) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._bookings = _bookings;
    this._dialog = _dialog;
    this._in_use = new BehaviorSubject([]);
    this._options = new BehaviorSubject({});
    this._presence = new BehaviorSubject([]);
    this._signs_of_life = new BehaviorSubject([]);
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._checked_in = new BehaviorSubject([]);
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => showMetadata(bld.id, `desk_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.desk_list = this._state.level.pipe(debounceTime(50), switchMap((lvl) => showMetadata(lvl.id, "desks").pipe(catchError(() => of({ details: [] })), map((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl })))))), catchError((e) => []), shareReplay(1));
    this._bind = combineLatest([
      this._state.level,
      this._state.options
    ]).pipe(debounceTime(300), filter(([_, { is_public }]) => !!_ && !is_public), map(([lvl]) => {
      this._statuses = {};
      const system_id = this._org.binding("area_management");
      if (!system_id)
        return;
      let binding = getModule(system_id, "AreaManagement")?.binding(lvl.id);
      if (!binding)
        return;
      this.subscription(`lvl-in_use`, binding.listen().subscribe((d) => this.processBindingChange(d || {}, system_id)));
      this.subscription("lvl-in_use_bind", binding.bind());
    }));
    this._booking_list = combineLatest([
      this._options,
      this._state.level
    ]).pipe(filter(([_, lvl]) => (_.use_api || _.date > endOfDay(Date.now()).valueOf()) && !!lvl), switchMap(([_, level]) => {
      return queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(_.date || Date.now())),
        period_end: getUnixTime(endOfDay(_.date || Date.now())),
        zones: level.id
      });
    }), debounceTime(200), tap((bookings) => {
      this._in_use.next(bookings.map((_) => _.asset_id));
      this._checked_in.next(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
    }), shareReplay(1));
    this._state_change = combineLatest([
      this.desk_list,
      this._in_use,
      this._presence,
      this._checked_in,
      this._signs_of_life,
      this.booking_rules,
      this._options
    ]).pipe(debounceTime(50), map((_0) => __async(this, [_0], function* ([desks, in_use, presence, checked_in, signs, restrictions]) {
      this._statuses = {};
      const level = yield this._state.level.pipe(take(1)).toPromise();
      for (const { id, bookable } of desks) {
        const is_used = in_use.some((i) => id === i);
        const has_presence = presence.some((i) => id === i);
        const has_signs = signs.some((i) => id === i);
        const is_checked_in = checked_in.some((i) => id === i) || is_used && this._settings.get(`app.desks.auto_checkin`);
        const is_restricted = rulesForResource({
          date: Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id,
            zones: [level.parent_id, level.id]
          }
        }, restrictions)?.hidden;
        this._statuses[id] = bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable";
      }
      this.processDesks(desks);
    })));
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.setOptions({
        enable_booking: this._settings.get("app.desks.enable_maps") !== false
      });
      this.subscription("bookings", this._booking_list.subscribe());
      this.subscription("bind", this._bind.subscribe());
      this.subscription("booking_rules", this.booking_rules.subscribe());
      this.subscription("changes", this._state_change.subscribe());
      this.subscription("desks", this.desk_list.subscribe((desks) => this.processDesks(desks)));
    });
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options.getValue().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options.getValue().use_api) {
      this._in_use.next(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.next(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.next(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.next(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      this._users[desk.map_id || desk.asset_id] = desk.staff_name;
      this._departments[desk.map_id || desk.asset_id] = departments[desk.department] || "";
    }
    this.processDevices(devices, system_id);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id])
        continue;
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${this._statuses[desk_id]}`] || colours[`${this._statuses[desk_id]}`] || DEFAULT_COLOURS[`${this._statuses[desk_id]}`]
      };
    }
    this._state.setStyles("desks", style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes("right") ? 1 - x : x,
          y: device.coordinates_from?.includes("bottom") ? 1 - y : y
        },
        content: ExploreDeviceInfoComponent,
        z_index: 20,
        data: __spreadProps(__spreadValues({}, device), { system: system_id })
      });
    }
    this._state.setFeatures("devices", list);
  }
  processDesks(desks) {
    const list = [];
    const actions = [];
    const options = this._options.getValue();
    for (const desk of desks) {
      list.push({
        track_id: `desk:hover:${desk.map_id || desk.id}`,
        location: desk.id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: desk.map_id || desk.id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._users[desk.map_id] || desk.staff_name,
          status: this._statuses[desk.map_id],
          department: this._departments[desk.map_id] || ""
        },
        z_index: 20
      });
      if (!desk.bookable)
        continue;
      let can_book = true;
      const book_fn = () => __async(this, null, function* () {
        if (!can_book)
          return;
        yield this._bookDesk(desk, options);
      });
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: desk.id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: desk.id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options.getValue().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    return __async(this, null, function* () {
      let user = null;
      if (!!this._settings.get("app.desks.allow_time_changes")) {
        const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
        const ref = this._dialog.open(SetDatetimeModalComponent, {
          data: { date, duration, until, host, resource }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details)
          throw "User cancelled";
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return { date, duration, user };
    });
  }
  _bookDesk(desk, options) {
    return __async(this, null, function* () {
      if (this._statuses[desk.id] !== "free") {
        return notifyError(`${desk.name || "Desk"} is unavailable at this time.`);
      }
      if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
        return notifyError(`You are not allowed to book ${desk.name}.`);
      }
      this._bookings.newForm();
      this._bookings.setOptions({ type: "desk" });
      if (options.date) {
        this._bookings.form.patchValue({
          date: options.date
        });
        this._bookings.form.patchValue({
          all_day: !!options.all_day
        });
      }
      let { date, duration, user } = yield this._setBookingTime(this._bookings.form.value.date, this._bookings.form.value.duration, this._options.getValue()?.custom ?? false, desk);
      user = user || options.host || currentUser();
      const user_email = user?.email;
      this._bookings.form.patchValue({
        resources: [desk],
        asset_id: desk.id,
        asset_name: desk.name,
        date,
        duration: options.all_day ? 12 * 60 : duration,
        map_id: desk?.map_id || desk?.id,
        description: desk.name,
        user,
        user_email,
        booking_type: "desk",
        zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
      });
      const restrictions = yield this.booking_rules.pipe(take(1)).toPromise();
      const is_restricted = rulesForResource({
        date,
        duration,
        host: currentUser(),
        resource: {
          id: desk.id,
          zones: [desk.zone?.parent_id, desk.zone?.id]
        }
      }, restrictions)?.hidden;
      if (is_restricted) {
        return notifyError(`You are not allowed to book ${desk.name} at this time.`);
      }
      yield this._bookings.confirmPost().catch((e) => {
        console.log(e);
        notifyError(`Failed to book desk ${desk.name || desk.id}. ${e.message || e.error || e}`);
        throw e;
      });
      this._users[desk.map_id] = (options.host || currentUser())?.name;
      notifySuccess(`Successfully booked desk ${desk.name || desk.id}`);
    });
  }
};
_ExploreDesksService.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreDesksService)(\u0275\u0275inject(ExploreStateService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService), \u0275\u0275inject(BookingFormService), \u0275\u0275inject(MatDialog));
};
_ExploreDesksService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
var ExploreDesksService = _ExploreDesksService;

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2, " Plate Number ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number || "ABC3", " ");
  }
}
var _ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
  constructor(_data, _element, _settings) {
    this._data = _data;
    this._element = _element;
    this._settings = _settings;
    this.status = this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status;
    this.user = this._data.user;
    this.name = this._data.name;
    this.map_id = this._data.map_id;
    this.plate_number = this._data.plate_number;
  }
};
_ExploreParkingInfoComponent.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingInfoComponent)(\u0275\u0275directiveInject(MAP_FEATURE_DATA), \u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(SettingsService));
};
_ExploreParkingInfoComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 9, vars: 15, consts: [[1, "absolute", "bg-base-300", "p-2", "rounded-lg", "!rounded-tl-none", "shadow", "top-1/2", "left-1/2", "text-left"], [1, "absolute", "top-0.5", "left-0.5", "triangle"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "leading-tight", "min-w-24", "pl-1"], [1, "whitespace-nowrap"], [1, "capitalize", "text-sm", "font-medium"], ["class", "flex flex-col relative h-full px-2 rounded bg-base-100 text-base-content shadow leading-tight", 4, "ngIf"], [1, "flex", "flex-col", "relative", "h-full", "px-2", "rounded", "bg-base-100", "text-base-content", "shadow", "leading-tight"], [1, "text-[0.625rem]", "w-full", "text-center", "pt-1", "whitespace-nowrap", "font-medium"], [1, "font-mono", "pb-1", "w-full", "text-center", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "div", 1);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 5);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, ExploreParkingInfoComponent_div_8_Template, 5, 1, "div", 6);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("!bg-error", ctx.status === "busy")("!text-error-content", ctx.status === "busy")("!bg-warning", ctx.status === "reserved")("!text-warning-content", ctx.status === "reserved")("!bg-success", ctx.status === "free")("!text-success-content", ctx.status === "free");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx.status, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.is_concierge && ctx.plate_number);
  }
}, dependencies: [NgIf], styles: ["\n\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
var ExploreParkingInfoComponent = _ExploreParkingInfoComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 62 });
})();

// libs/explore/src/lib/explore-parking.service.ts
var _ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor(_org, _state, _settings, _bookings, _parking, _dialog) {
    super();
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this._bookings = _bookings;
    this._parking = _parking;
    this._dialog = _dialog;
    this._options = new BehaviorSubject({});
    this._poll = new BehaviorSubject(0);
    this.options = this._options.asObservable();
    this.on_book = null;
    this.levels = this._org.active_levels.pipe(map((l) => l.filter((_) => _.tags.includes("parking"))));
    this.booking_rules = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => showMetadata(bld.id, `parking_booking_rules`).pipe(catchError(() => of({ details: [] })))), map((_) => _?.details instanceof Array ? _.details : []), shareReplay(1));
    this.events = combineLatest([
      this._org.active_building,
      this._options,
      this._poll,
      this._state.options
    ]).pipe(debounceTime(300), switchMap(([bld, _, __, { is_public }]) => is_public ? of([]) : queryBookings({
      period_start: getUnixTime(startOfMinute(_.date || Date.now())),
      period_end: getUnixTime(endOfMinute(_.date || Date.now())),
      type: "parking",
      zones: this._settings.get("app.use_region") ? bld?.parent_id : bld?.id,
      rejected: false
    })), shareReplay(1));
    this.user_events = combineLatest([this._options]).pipe(switchMap(([_]) => queryBookings({
      period_start: getUnixTime(startOfDay(_.date || Date.now())),
      period_end: getUnixTime(endOfDay(_.date || Date.now())),
      type: "parking",
      email: _?.user || currentUser()?.email
    })), shareReplay(1));
    this.spaces = this.levels.pipe(switchMap((_) => forkJoin(_.map((l) => showMetadata(l.id, "parking-spaces").pipe(map((d) => (d.details instanceof Array ? d.details : []).map((s) => __spreadProps(__spreadValues({}, s), { zone_id: l.id }))))))), map((_) => flatten(_)), shareReplay(1));
    this.active_spaces = combineLatest([
      this.spaces,
      this._state.level
    ]).pipe(map(([spaces, level]) => spaces.filter((_) => _.zone_id === level.id)));
    this._users = {};
    this._plate_numbers = {};
    this.available_spaces = combineLatest([
      this.events,
      this.active_spaces,
      this._parking.users,
      this.booking_rules,
      this._options
    ]).pipe(map(([events, spaces, users, rules, { date }]) => {
      const available = spaces.filter((space) => {
        const event = events.find((e) => e.asset_id === space.id && !e.rejected);
        const level = this._org.levelWithID([space.zone_id]);
        const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
        const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
        const is_restricted = rulesForResource({
          date: date || Date.now(),
          duration: 60,
          host: currentUser(),
          resource: {
            id: space.id,
            zones: [level.parent_id, level.id]
          }
        }, rules)?.hidden;
        this._users[space.id] = assigned;
        this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
        return !event && !is_restricted;
      });
      this._updateParkingSpaces(spaces, available);
      return available;
    }));
    this.subscription("spaces", this.available_spaces.subscribe());
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.next(Date.now()), 10 * 1e3);
    this._poll.next(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  _updateParkingSpaces(spaces, available) {
    return __async(this, null, function* () {
      const styles = {};
      const features = [];
      const actions = [];
      const colours = this._settings.get("app.explore.colors") || {};
      let options = this._options.getValue();
      const assigned_space = yield this._parking.assigned_space.pipe(take(1)).toPromise();
      const deny_parking_access = yield this._parking.deny_parking_access.pipe(take(1)).toPromise();
      const booked_space = yield this._parking.booked_space.pipe(take(1)).toPromise();
      for (const space of spaces) {
        const can_book = !!available.find((_) => _.id === space.id);
        const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
        const is_assigned = is_workplace ? false : !!space.assigned_to;
        const id = space.map_id || space.id;
        const status = is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
        styles[`#${id}`] = {
          fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
          opacity: 0.6
        };
        features.push({
          location: `${id}`,
          content: ExploreParkingInfoComponent,
          z_index: 20,
          hover: true,
          data: __spreadProps(__spreadValues({}, space), {
            user: this._users[space.id],
            plate_number: this._plate_numbers[space.id],
            status: status === "pending" && is_assigned ? "reserved" : status
          })
        });
        if (!can_book)
          continue;
        const book_fn = () => __async(this, null, function* () {
          if (this.on_book) {
            yield this.on_book(space);
            this._poll.next(Date.now());
            return;
          }
          if (deny_parking_access) {
            return notifyError(`Your user account has been denied parking access to ${space.zone?.display_name || space.zone?.name}.`);
          }
          console.log("Booked Space:", booked_space);
          if (assigned_space && booked_space) {
            return notifyError(`You are already assigned to parking space "${space.name || space.id}".`);
          }
          if (booked_space) {
            return notifyError(`You already have a parking space booked for the selected time.`);
          }
          if (status !== "free") {
            return notifyError(`${space.name || "Parking Space"} is unavailable at this time.`);
          }
          if (space.groups?.length && !space.groups.find((_) => currentUser().groups.includes(_))) {
            return notifyError(`You are not allowed to book ${space.name}.`);
          }
          this._bookings.newForm();
          this._bookings.setOptions({ type: "parking" });
          options = this._options.getValue();
          let user = options.host || currentUser();
          const user_email = user?.email;
          const zone = this._org.levelWithID([
            space.zone_id || space.zone
          ]) || this._state.active_level;
          const date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
          this._bookings.form.patchValue({
            resources: [space],
            asset_id: space.id,
            asset_name: space.name,
            date,
            duration: 11 * 60,
            all_day: true,
            map_id: space?.map_id || space?.id,
            description: space.name,
            user,
            user_email,
            booking_type: "parking",
            zones: [
              this._org.organisation.id,
              this._org.region?.id,
              zone.parent_id,
              zone.id
            ]
          });
          yield this._bookings.confirmPost().catch((e) => {
            if (e === "User cancelled")
              throw e;
            notifyError(`Failed to book parking space ${space.name || space.id}. ${e.message || e.error || e}`);
            throw e;
          });
          notifySuccess(`Successfully booked parking space ${space.name || space.id}`);
          this.timeout("poll", () => this._poll.next(Date.now()), 1e3);
        });
        actions.push({
          id,
          action: "click",
          priority: 10,
          callback: book_fn
        });
      }
      this._state.setActions("parking", options.enable_booking ? actions : []);
      this._state.setStyles("parking", styles);
      this._state.setFeatures("parking", features);
    });
  }
  _setBookingTime(date, duration, host = false, resource = null) {
    return __async(this, null, function* () {
      let user = null;
      if (!!this._settings.get("app.parking.allow_time_changes")) {
        const until = endOfDay(addDays(Date.now(), this._settings.get("app.parking.available_period") || 90));
        const ref = this._dialog.open(SetDatetimeModalComponent, {
          data: { date, duration, until, host, resource }
        });
        const details = yield ref.afterClosed().toPromise();
        if (!details)
          throw "User cancelled";
        date = details.date;
        duration = details.duration;
        user = details.user;
      }
      return { date, duration, user };
    });
  }
};
_ExploreParkingService.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreParkingService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(ExploreStateService), \u0275\u0275inject(SettingsService), \u0275\u0275inject(BookingFormService), \u0275\u0275inject(ParkingService), \u0275\u0275inject(MatDialog));
};
_ExploreParkingService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
var ExploreParkingService = _ExploreParkingService;

// libs/explore/src/lib/explore-lockers.service.ts
var _ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor(_lockers, _explore, _org, _settings) {
    super();
    this._lockers = _lockers;
    this._explore = _explore;
    this._org = _org;
    this._settings = _settings;
    this._status = new BehaviorSubject([]);
    this.lockers$ = this._lockers.filtered_lockers$;
    this.status = combineLatest([
      this._explore.level,
      this._explore.options,
      this._org.active_building
    ]).pipe(map(([lvl, { is_public }]) => {
      if (!lvl || is_public)
        return [];
      const sys_id = this._org.binding("area_management");
      if (!sys_id)
        return of({});
      let binding = getModule(sys_id, "AreaManagement").binding(lvl.id);
      this.subscription(`lvl-in_use`, binding.listen().subscribe((data) => this._status.next(data?.value?.filter((_) => _.location === "locker") || [])));
      this.subscription("lvl-in_use_bind", binding.bind());
    }));
    this.locker_status = combineLatest([
      this._explore.level,
      this._lockers.lockers_banks$,
      this.lockers$,
      this._status
    ]).pipe(map(([lvl, locker_banks, lockers, status]) => {
      if (!lvl)
        return [];
      const features = [];
      const map_status = {};
      const colours = this._settings.get("app.explore.colors") || {};
      const banks = unique(locker_banks.filter((_) => _.level_id === lvl.id).map((_) => _.id));
      for (const bank of banks) {
        const bank_lockers = lockers.filter((_) => _.bank_id === bank);
        let in_use_count = 0;
        for (const locker of bank_lockers) {
          const in_use = status.find((_) => _.locker_id === locker.id && _.allocated);
          in_use_count += in_use ? 1 : 0;
        }
        const bank_info = locker_banks.find((_) => _.id === bank);
        features.push({
          location: bank_info.map_id,
          content: ExploreLockerBankInfoComponent,
          full_size: true,
          no_scale: true,
          z_index: 20,
          data: {
            bank: bank_info,
            lockers,
            in_use_count,
            locker_count: bank_lockers.length,
            system: this._org.binding("area_management")
          }
        });
        const in_use_percent = in_use_count / bank_lockers.length;
        const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
        map_status[`#${bank_info.map_id}`] = {
          fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
        };
      }
      this._explore.setStyles("lockers", map_status);
      this._explore.setFeatures("lockers", features);
    }));
    this.subscription("level", this._explore.level.pipe(filter((_) => !!_)).subscribe((level) => this._lockers.setLevel(level.id)));
    this.subscription("status", this.status.subscribe());
    this.subscription("locker_status", this.locker_status.subscribe());
  }
};
_ExploreLockersService.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLockersService)(\u0275\u0275inject(LockersService), \u0275\u0275inject(ExploreStateService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_ExploreLockersService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
var ExploreLockersService = _ExploreLockersService;

// libs/explore/src/lib/explore-map-view.component.ts
var _c03 = () => ({ controls: true });
function ExploreMapViewComponent_div_6_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "mat-slide-toggle", 8);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_div_6_div_2_Template_mat_slide_toggle_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleZones($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "label", 9);
    \u0275\u0275i18n(4, 0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", !((tmp_2_0 = \u0275\u0275pipeBind1(2, 1, ctx_r1.options)) == null ? null : tmp_2_0.disable == null ? null : tmp_2_0.disable.includes("zones")));
  }
}
function ExploreMapViewComponent_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275template(2, ExploreMapViewComponent_div_6_div_2_Template, 5, 3, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx_r1.hide_zones);
  }
}
function ExploreMapViewComponent_div_8_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 13);
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r3[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r3[0]);
  }
}
function ExploreMapViewComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "h3", 11);
    \u0275\u0275i18n(2, 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, ExploreMapViewComponent_div_8_div_3_Template, 4, 3, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx_r1.legend);
  }
}
var EMPTY2 = [];
var _ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  toggleZones(enabled) {
    return __async(this, null, function* () {
      const options = yield this.options.pipe(take(1)).toPromise();
      const disable = !enabled ? unique([...options.disable || [], "zones", "devices"]) : options.disable?.filter((_) => _ !== "zones" && _ !== "devices") || [];
      this.setOptions({ disable });
    });
  }
  get show_legend() {
    return !!this._settings.get("app.explore.show_legend");
  }
  get hide_zones() {
    return !!this._settings.get("app.explore.hide_zones");
  }
  get legend() {
    return this._settings.get("app.explore.legend") || EMPTY2;
  }
  constructor(_state, _s, _desks, _zones, _parking, _lockers, _route, _router, _spaces, _org, _settings, _space_pipe, _maps) {
    super();
    this._state = _state;
    this._s = _s;
    this._desks = _desks;
    this._zones = _zones;
    this._parking = _parking;
    this._lockers = _lockers;
    this._route = _route;
    this._router = _router;
    this._spaces = _spaces;
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = _space_pipe;
    this._maps = _maps;
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.message = this._state.message;
    this.setOptions = (o) => this._state.setOptions(o);
    this.locate = "";
    this.use_mapsindoors$ = this._maps.available$;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._state.reset();
      yield this._spaces.initialised.pipe(first((_) => _)).toPromise();
      this.toggleZones(false);
      this.subscription("parking_poll", this._parking.startPolling());
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("level") || params.has("zone")) {
          this._state.setLevel(params.get("level") || params.get("zone"));
        }
        this._state.setFeatures("_located", []);
        if (params.has("space")) {
          this.locateSpace(params.get("space"));
        } else if (params.has("user")) {
          let user = this._settings.value("last_search");
          if (!user || params.get("user") !== user.email) {
            user = null;
            user = yield showStaff(params.get("user")).toPromise();
          }
          if (!user)
            return notifyError(`Unable to user details for ${params.get("user")}`);
          this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
            notifyError(`Unable to locate ${params.get("user")}`);
            this._router.navigate([], {
              relativeTo: this._route,
              queryParams: {}
            });
          });
        } else if (params.has("locate")) {
          this._locateFeature(params.get("locate"), params.get("name"));
        } else {
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", []);
          });
        }
      })));
    });
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  _locateFeature(id, name = "") {
    const has_coordinates = id.includes(",");
    const parts = id.split(",");
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) } : id,
      content: MapPinComponent,
      z_index: 99,
      data: { message: name }
    };
    this.locate = id;
    this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
  }
  locateSpace(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return notifyError("Unable to load space details.");
      this._state.setLevel(this._org.levelWithID(space.zones)?.id);
      const feature = {
        track_id: `locate-${space.id}`,
        location: space.map_id,
        content: MapPinComponent,
        z_index: 99,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      };
      this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
    });
  }
  locateUser(user) {
    return __async(this, null, function* () {
      let locate_details = this._org.binding("location_services");
      if (!locate_details)
        throw "Location services is not setup for this application.";
      if (typeof locate_details === "string") {
        locate_details = {
          system_id: locate_details,
          module: "LocationServices",
          priority: []
        };
      }
      const mod = getModule(locate_details.system_id, locate_details.module);
      const locations = (yield mod.execute("locate_user", [
        user.email,
        user.username || user.id
      ])).map((i) => new MapLocation(i));
      locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
      if (!locations?.length) {
        throw "No locations for the given user";
      }
      this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
      const pos = locations[0].position;
      const { coordinates_from } = locations[0];
      const feature = {
        track_id: `locate-${user.id}`,
        location: locations[0].type === "wireless" ? {
          x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
          y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
        } : pos,
        content: locations[0].type === "wireless" ? MapRadiusComponent : MapPinComponent,
        z_index: 99,
        data: {
          message: `${user.name} is here`,
          radius: locations[0].variance,
          last_seen: locations[0].last_seen
        }
      };
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", [feature]);
      });
    });
  }
};
_ExploreMapViewComponent.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreMapViewComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(ExploreSpacesService), \u0275\u0275directiveInject(ExploreDesksService), \u0275\u0275directiveInject(ExploreZonesService), \u0275\u0275directiveInject(ExploreParkingService), \u0275\u0275directiveInject(ExploreLockersService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(MapsPeopleService));
};
_ExploreMapViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
  ExploreDesksService,
  ExploreSpacesService,
  ExploreZonesService,
  ExploreParkingService,
  ExploreLockersService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], decls: 9, vars: 22, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_3570584475835614001$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_0 = goog.getMsg("Areas");
    i18n_0 = MSG_EXTERNAL_3570584475835614001$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟f4dd1ee1bc2352a04258a004fd5dd45bff957730␟3570584475835614001:Areas`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_7297822327994766046$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_1 = goog.getMsg("Legend");
    i18n_1 = MSG_EXTERNAL_7297822327994766046$$LIBS_EXPLORE_SRC_LIB_EXPLORE_MAP_VIEW_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟5c5419db944ed6a96f9515a2ac0ee390ec8cf3b5␟7297822327994766046:Legend`;
  }
  return [i18n_0, i18n_1, [3, "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", "class", "absolute top-2 left-2 max-w-[calc(100vw-1rem)] bg-base-100 border border-base-200 rounded p-2 space-y-2 overflow-hidden", 4, "ngIf"], ["legend", "", "class", "absolute bottom-2 left-2 p-2 rounded bg-base-100 border border-base-200", 4, "ngIf"], ["controls", "", 1, "absolute", "top-2", "left-2", "max-w-[calc(100vw-1rem)]", "bg-base-100", "border", "border-base-200", "rounded", "p-2", "space-y-2", "overflow-hidden"], ["class", "flex items-center space-x-2", 4, "ngIf"], [1, "flex", "items-center", "space-x-2"], ["name", "zones", 1, "ml-2", 3, "ngModelChange", "ngModel"], ["for", "zones", 1, "mb-0"], ["legend", "", 1, "absolute", "bottom-2", "left-2", "p-2", "rounded", "bg-base-100", "border", "border-base-200"], [1, "mb-2", "font-medium"], ["class", "flex items-center space-x-2", 4, "ngFor", "ngForOf"], [1, "w-3", "h-3", "rounded-full", "border", "border-base-200"], [1, "text-sm"]];
}, template: function ExploreMapViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, ExploreMapViewComponent_div_6_Template, 3, 1, "div", 3);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, ExploreMapViewComponent_div_8_Template, 4, 1, "div", 4);
  }
  if (rf & 2) {
    \u0275\u0275property("src", \u0275\u0275pipeBind1(1, 9, ctx.url))("styles", \u0275\u0275pipeBind1(2, 11, ctx.styles))("features", \u0275\u0275pipeBind1(3, 13, ctx.features))("actions", \u0275\u0275pipeBind1(4, 15, ctx.actions))("labels", \u0275\u0275pipeBind1(5, 17, ctx.labels))("focus", ctx.locate)("options", \u0275\u0275pureFunction0(21, _c03));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(7, 19, ctx.use_mapsindoors$));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.show_legend && ctx.legend.length);
  }
}, dependencies: [NgForOf, NgIf, InteractiveMapComponent, MatSlideToggle, NgControlStatus, NgModel, ExploreMapControlComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
var ExploreMapViewComponent = _ExploreMapViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 98 });
})();

// libs/explore/src/lib/explore-search.service.ts
var TYPES = ["space", "contact", "feature", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
var _ExploreSearchService = class _ExploreSearchService {
  constructor(_org, _settings, _maps_people) {
    this._org = _org;
    this._settings = _settings;
    this._maps_people = _maps_people;
    this._emergency_contacts = new BehaviorSubject([]);
    this._filter = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.emergency_contacts = this._emergency_contacts.asObservable();
    this._role_assigned_contacts = this._org.active_building.pipe(filter((bld) => !!bld), switchMap((bld) => showMetadata(bld.id, "emergency_contacts")), map(({ details }) => details?.contacts || []), shareReplay(1));
    this._user_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? this.search_fn(q).pipe(catchError(() => of([]))) : of([])), shareReplay(1));
    this._space_search = this._filter.pipe(debounceTime(400), tap(() => this._loading.next(true)), switchMap((q) => q?.length > 2 ? querySystems({ q, zone_id: this._org.organisation.id }).pipe(map(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    }))))) : of([])), catchError(() => []));
    this._maps_people_search = combineLatest([
      this._maps_people.available$,
      this._filter,
      this._org.active_building
    ]).pipe(debounceTime(1e3), switchMap(([available, q]) => available && q.length > 2 ? mapsindoors?.services.LocationsService.getLocations({ q }) : of([])), map((list) => {
      return list.map((_) => ({
        id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
        map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
        type: "feature",
        name: _.properties?.name || "",
        description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
      }));
    }), shareReplay(1));
    this._map_features = this._org.active_building.pipe(filter((bld) => !!bld), switchMap(() => listChildMetadata(this._org.building.id, {
      name: "map_features"
    }).pipe(catchError(() => of({ details: [] })))), map((data) => {
      const list = [];
      for (const item of data) {
        const metadata = item.metadata.map_features;
        if (!metadata)
          continue;
        const feature_list = metadata.details instanceof Array ? metadata.details : [];
        for (const feature of feature_list) {
          list.push({
            id: feature.id,
            type: "feature",
            name: feature.name,
            description: "",
            zone: item.zone
          });
        }
      }
      return list;
    }));
    this._poi_metadata = this._org.initialised.pipe(filter((_) => _), switchMap(() => showMetadata(this._org.organisation.id, "points-of-interest").pipe(catchError((_) => of({ details: {} })))), shareReplay(1));
    this._poi_list = combineLatest([
      this._org.active_building,
      this._poi_metadata
    ]).pipe(filter(([bld]) => !!bld.id), map(([bld, metadata]) => {
      const mapping = metadata.details || {};
      const levels = this._org.levelsForBuilding(bld);
      const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
      return list.filter((_) => _.can_search);
    }));
    this._points_of_interest = this._poi_list.pipe(map((poi_list) => {
      return poi_list.map((item) => ({
        id: item.id || item.location,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      }));
    }));
    this.search_results = combineLatest([
      this._filter,
      this._space_search,
      this._user_search,
      this._emergency_contacts,
      this._role_assigned_contacts,
      this._map_features,
      this._maps_people_search,
      this._points_of_interest
    ]).pipe(map(([filter2, spaces, users, contacts, roled_contacts, features, mapspeople_items, points_of_interest]) => {
      const search = filter2.toLowerCase();
      const results = [
        ...mapspeople_items,
        ...spaces.filter((_) => _.email.toLowerCase().includes(search) || _.name.toLowerCase().includes(search) || _.display_name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "space",
          name: s.display_name || s.name,
          description: `Capacity: ${s.capacity} `
        })),
        ...flatten(roled_contacts.map((u) => u.roles.map((role) => ({
          id: u.email,
          type: role || "contact",
          is_role: true,
          name: u.name,
          description: u.email
        })))).filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || _.type.toLowerCase().includes(search)),
        ...features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
          id: s.id,
          type: "feature",
          name: s.name,
          description: "",
          zone: s.zone?.id
        })),
        ...points_of_interest.filter((_) => _.name.toLowerCase().includes(search)),
        ...contacts.map((u) => ({
          id: u.email,
          type: u.type || "contact",
          is_role: true,
          name: u.name,
          description: u.email
        })).filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || _.type.toLowerCase().includes(search)),
        ...users.map((u) => ({
          id: u.email,
          type: "user",
          name: u.name,
          description: u.email
        }))
      ];
      results.sort((a, b) => typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name));
      return results;
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? queryUsers({ q, authority_id: authority()?.id }).pipe(map((_) => _.data)) : searchStaff(q);
    this.search_results.subscribe();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const mod = moduleFromMetadata(this._org.binding("location_services"), "LocationServices");
      if (mod) {
        const binding = mod.binding("emergency_contacts");
        binding.listen().subscribe((contacts_map) => {
          const list = [];
          for (const type in contacts_map) {
            for (const user of contacts_map[type]) {
              list.push(__spreadProps(__spreadValues({}, user), { type }));
            }
          }
          this._emergency_contacts.next(list);
        });
        binding.bind();
      }
    });
  }
  setFilter(str) {
    this._filter.next(str);
  }
};
_ExploreSearchService.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService), \u0275\u0275inject(MapsPeopleService));
};
_ExploreSearchService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
var ExploreSearchService = _ExploreSearchService;

// libs/explore/src/lib/explore-search.component.ts
var _c04 = ["input"];
var _c1 = ["button"];
function ExploreSearchComponent_mat_spinner_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 10);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_ng_container_12_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275i18n(1, 4);
    \u0275\u0275elementEnd();
  }
}
function ExploreSearchComponent_ng_container_12_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 14);
    \u0275\u0275listener("click", function ExploreSearchComponent_ng_container_12_mat_option_3_Template_mat_option_click_0_listener() {
      const option_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.select(option_r3));
    });
    \u0275\u0275elementStart(1, "div", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    \u0275\u0275property("value", option_r3.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(option_r3.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(option_r3.description);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r3.type, " ");
  }
}
function ExploreSearchComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ExploreSearchComponent_ng_container_12_mat_option_1_Template, 2, 0, "mat-option", 11);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275template(3, ExploreSearchComponent_ng_container_12_mat_option_3_Template, 9, 4, "mat-option", 12);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((tmp_5_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.results)) == null ? null : tmp_5_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(5, 6, \u0275\u0275pipeBind1(4, 4, ctx_r3.results), 0, 5));
  }
}
var _ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  constructor(_el, _search, _router, _route) {
    super();
    this._el = _el;
    this._search = _search;
    this._router = _router;
    this._route = _route;
    this.show = false;
    this.search_str = "";
    this.right_size = false;
    this.results = this._search.search_results;
    this.loading = this._search.loading;
    this.setFilter = (s) => this._search.setFilter(s);
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show = false;
      this.search_str = "";
      this.setFilter("");
    });
  }
  cancelClear() {
    this.clearTimeout("clear");
  }
  focusInput() {
    if (this._input_el?.nativeElement) {
      this.timeout("focus", () => this._input_el.nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show = true;
    this.focusInput();
  }
  closeSearch(e) {
    this.show = false;
    this.search_str = "";
    this.setFilter("");
    if (this._input_el?.nativeElement) {
      this._input_el.nativeElement.focus();
      this._input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str = item.name;
    const query = {};
    const type = item.type === "space" ? "space" : item.type === "feature" ? "locate" : "user";
    query[type] = item.id;
    if (type === "locate") {
      query.name = item.name;
      query.zone = item.zone;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
    this.focusInput();
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el.nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size = x_center > window_width / 2;
  }
};
_ExploreSearchComponent.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreSearchComponent)(\u0275\u0275directiveInject(ElementRef), \u0275\u0275directiveInject(ExploreSearchService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute));
};
_ExploreSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 5);
    \u0275\u0275viewQuery(_c1, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_el = _t.first);
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._button_el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 20, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_6939663044582448373$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_0 = goog.getMsg("Search for...");
    i18n_0 = MSG_EXTERNAL_6939663044582448373$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟7a428104a6c33787961fda306f9c518f89fb0261␟6939663044582448373:Search for...`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_3411517965707112535$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_1 = goog.getMsg(" No matches found ");
    i18n_1 = MSG_EXTERNAL_3411517965707112535$$LIBS_EXPLORE_SRC_LIB_EXPLORE_SEARCH_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟0c720c4e60410fcfcd8582a32297bdd397620830␟3411517965707112535: No matches found `;
  }
  return [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], i18n_1, ["icon", "", "matRipple", "", 1, "bg-base-200", "m-2", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "absolute", "top-1/2", "-translate-y-1/2", "bg-base-100", "flex", "items-center", "z-10", "overflow-hidden", "outline-none", "px-4", "max-w-[calc(100vw-7rem)]", 3, "click"], ["keyboard", "", "placeholder", i18n_0, 1, "flex-1", "text-base", "border-none", "outline-none", 3, "ngModelChange", "focus", "blur", "ngModel", "matAutocomplete", "matAutocompleteConnectedTo"], ["class", "mr-2", 3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "mr-2", 3, "diameter"], ["class", "pointer-events-none", 4, "ngIf"], [3, "value", "click", 4, "ngFor", "ngForOf"], [1, "pointer-events-none"], [3, "click", "value"], [1, "flex", "items-center", "leading-tight", "w-[22rem]", "max-w-[calc(100vw-2rem)]"], [1, "flex-1", "w-1/2", "overflow-hidden"], [1, "truncate", "w-full"], [1, "text-xs"], [1, "text-xs", "font-bold", "p-2", "capitalize", "text-white", "bg-base-300", "rounded"]];
}, template: function ExploreSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5, 0);
    \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.checkButtonPosition());
    }, false, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show ? ctx.closeSearch($event) : ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 6, 1);
    \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    });
    \u0275\u0275elementStart(6, "input", 7, 2);
    \u0275\u0275twoWayListener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setFilter($event));
    })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.cancelClear());
    })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clear());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(8, ExploreSearchComponent_mat_spinner_8_Template, 1, 1, "mat-spinner", 8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 3);
    \u0275\u0275template(12, ExploreSearchComponent_ng_container_12_Template, 6, 10, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const origin_r5 = \u0275\u0275reference(5);
    const auto_r6 = \u0275\u0275reference(11);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx.show || ctx.search_str ? "close" : "search");
    \u0275\u0275advance();
    \u0275\u0275classProp("right-0", ctx.right_size)("-translate-x-14", ctx.right_size)("left-0", !ctx.right_size)("translate-x-14", !ctx.right_size)("show", ctx.show || ctx.search_str);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275property("matAutocomplete", auto_r6)("matAutocompleteConnectedTo", origin_r5);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(9, 16, ctx.loading));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(13, 18, ctx.loading) !== true && (ctx.show || ctx.search_str));
  }
}, dependencies: [NgForOf, NgIf, IconComponent, VirtualKeyboardComponent, MatAutocomplete, MatOption, MatAutocompleteTrigger, MatAutocompleteOrigin, MatRipple, MatProgressSpinner, DefaultValueAccessor, NgControlStatus, NgModel, AsyncPipe, SlicePipe], styles: ["\n\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--b3);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
var ExploreSearchComponent = _ExploreSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 111 });
})();

// libs/explore/src/lib/explore-zoom-control.component.ts
var _ExploreZoomControlComponent = class _ExploreZoomControlComponent {
  constructor(_state) {
    this._state = _state;
    this.zoomIn = () => this._state.setPositions(Math.min(10, this._state.positions.zoom * 1.2), this._state.positions.center);
    this.zoomOut = () => this._state.setPositions(Math.max(1, this._state.positions.zoom * (1 / 1.2)), this._state.positions.center);
    this.reset = () => this._state.setPositions(1, { x: 0.5, y: 0.5 });
  }
};
_ExploreZoomControlComponent.\u0275fac = function ExploreZoomControlComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreZoomControlComponent)(\u0275\u0275directiveInject(ExploreStateService));
};
_ExploreZoomControlComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreZoomControlComponent, selectors: [["explore-zoom-controls"]], decls: 9, vars: 0, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_1470758907984185227$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_0 = goog.getMsg("Zoom In");
    i18n_0 = MSG_EXTERNAL_1470758907984185227$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟34fb6028a6630cf3a7308084b31e86e89d057965␟1470758907984185227:Zoom In`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_1356460275822781324$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_1 = goog.getMsg("Zoom Out");
    i18n_1 = MSG_EXTERNAL_1356460275822781324$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟677ce9c57b5558cb10f0b39327d5a965bfb21dc5␟1356460275822781324:Zoom Out`;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_5016012668378976433$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_2 = goog.getMsg("Reset Zoom & Center");
    i18n_2 = MSG_EXTERNAL_5016012668378976433$$LIBS_EXPLORE_SRC_LIB_EXPLORE_ZOOM_CONTROL_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟77981432124895c410e5b9157b3deb948831ffc6␟5016012668378976433:Reset Zoom & Center`;
  }
  return [["z-in", "", "icon", "", "matRipple", "", "matTooltip", i18n_0, 1, "bg-base-100", 3, "click"], ["z-out", "", "icon", "", "matRipple", "", "matTooltip", i18n_1, 1, "bg-base-100", 3, "click"], ["reset", "", "icon", "", "matRipple", "", "matTooltip", i18n_2, 1, "bg-base-100", 3, "click"]];
}, template: function ExploreZoomControlComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_0_listener() {
      return ctx.zoomIn();
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 1);
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_3_listener() {
      return ctx.zoomOut();
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "remove");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275listener("click", function ExploreZoomControlComponent_Template_button_click_6_listener() {
      return ctx.reset();
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "autorenew");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [IconComponent, MatRipple, MatTooltip], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\nbutton[_ngcontent-%COMP%] {\n  border: 1px solid #9998;\n  border-radius: 0;\n}\nbutton[_ngcontent-%COMP%]:first-child {\n  border-radius: 0.25rem 0.25rem 0 0;\n  border-bottom: none;\n}\nbutton[_ngcontent-%COMP%]:last-child {\n  border-radius: 0 0 0.25rem 0.25rem;\n  border-top: none;\n}\n/*# sourceMappingURL=explore-zoom-control.component.css.map */"] });
var ExploreZoomControlComponent = _ExploreZoomControlComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreZoomControlComponent, { className: "ExploreZoomControlComponent", filePath: "libs/explore/src/lib/explore-zoom-control.component.ts", lineNumber: 65 });
})();

// libs/explore/src/lib/explore.module.ts
var _SharedExploreModule = class _SharedExploreModule {
};
_SharedExploreModule.\u0275fac = function SharedExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _SharedExploreModule)();
};
_SharedExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _SharedExploreModule });
_SharedExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  ComponentsModule,
  FormsModule,
  ReactiveFormsModule,
  MatSlideToggleModule,
  OverlayModule,
  PortalModule,
  FormFieldsModule,
  SharedBookingsModule
] });
var SharedExploreModule = _SharedExploreModule;
\u0275\u0275setComponentScope(ExploreSpaceInfoComponent, [NgForOf, NgIf, CustomTooltipComponent, AuthenticatedImageDirective], []);
\u0275\u0275setComponentScope(ExploreBookingModalComponent, [NgIf, IconComponent, MatFormField, MatError, MatRipple, MatDialogClose, MatInput, MatProgressSpinner, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, DurationFieldComponent, UserSearchFieldComponent], [AsyncPipe, DatePipe]);

// apps/map-kiosk/src/app/accessibility-controls.component.ts
function AccessibilityControlsComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4);
    \u0275\u0275text(2, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slider", 5)(4, "input", 6);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_div_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.applySetting("font_size", $event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6, "A");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("min", 10)("max", 24)("step", 2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.font_size);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.font_size, "px ");
  }
}
var _AccessibilityControlsComponent = class _AccessibilityControlsComponent extends AsyncHandler {
  constructor(_settings) {
    super();
    this._settings = _settings;
    this.applySetting = (n, v) => this.timeout("apply_setting", () => this._settings.saveUserSetting(n, v), 1e3);
  }
  get dark_mode() {
    return this._settings.get("theme") === "dark";
  }
  get can_change_dark_mode() {
    return !!this._settings.get("app.allow_dark_mode");
  }
  get accessible() {
    return !!this._settings.get("accessible");
  }
  get font_size() {
    return this._settings.get("font_size") || 16;
  }
  setDarkMode(state) {
    this.timeout("dark_mode", () => {
      const theme = this._settings.get("theme");
      if (state && theme !== "dark")
        this._settings.setTheme("dark");
      else if (!state && theme === "dark")
        this._settings.setTheme("light");
    }, 100);
  }
};
_AccessibilityControlsComponent.\u0275fac = function AccessibilityControlsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AccessibilityControlsComponent)(\u0275\u0275directiveInject(SettingsService));
};
_AccessibilityControlsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityControlsComponent, selectors: [["accessibility-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 3, consts: [["matRipple", "", 1, "flex", "items-center", "justify-between", "hover:bg-base-200", "w-full", "p-2", "rounded", 3, "click"], [3, "ngModelChange", "ngModel"], ["class", "flex items-center pl-2 space-x-4", 4, "ngIf"], [1, "flex", "items-center", "pl-2", "space-x-4"], [1, "text-sm"], [1, "flex-1", "w-px", "min-w-0", "text-[16px]", 3, "min", "max", "step"], ["matSliderThumb", "", 1, "text-[16px]", 3, "ngModelChange", "ngModel"], [1, "text-2xl"], [1, "text-base", "py-1", "px-2", "rounded", "bg-base-300", "text-base-content", "my-2"]], template: function AccessibilityControlsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Template_button_click_0_listener() {
      return ctx.setDarkMode(!ctx.dark_mode);
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "Dark Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slide-toggle", 1);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Template_mat_slide_toggle_ngModelChange_3_listener($event) {
      return ctx.setDarkMode($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 0);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Template_button_click_4_listener() {
      return ctx.applySetting("accessible", !ctx.accessible);
    });
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6, "Text Size");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-slide-toggle", 1);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Template_mat_slide_toggle_ngModelChange_7_listener($event) {
      return ctx.applySetting("accessible", $event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(8, AccessibilityControlsComponent_div_8_Template, 9, 5, "div", 2);
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx.dark_mode);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx.accessible);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.accessible);
  }
}, dependencies: [NgIf, MatRipple, MatSlider, MatSliderThumb, MatSlideToggle, DefaultValueAccessor, NgControlStatus, NgModel] });
var AccessibilityControlsComponent = _AccessibilityControlsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityControlsComponent, { className: "AccessibilityControlsComponent", filePath: "apps/map-kiosk/src/app/accessibility-controls.component.ts", lineNumber: 54 });
})();

// apps/map-kiosk/src/app/explore.component.ts
var _c05 = ["app-explore", ""];
var _c12 = () => ({ controls: true });
function ExploreComponent_explore_search_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "explore-search");
  }
}
function ExploreComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "accessibility-controls");
    \u0275\u0275elementEnd();
  }
}
function ExploreComponent_ng_container_12_ng_container_2_button_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ExploreComponent_ng_container_12_ng_container_2_button_8_Template_button_click_0_listener() {
      const lvl_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r3));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r3.display_name || lvl_r3.name, " ");
  }
}
function ExploreComponent_ng_container_12_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 21)(2, "div", 13);
    \u0275\u0275text(3, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 12);
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", null, 1);
    \u0275\u0275template(8, ExploreComponent_ng_container_12_ng_container_2_button_8_Template, 2, 1, "button", 22);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const levelMenu_r5 = \u0275\u0275reference(7);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", levelMenu_r5);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 2, ctx_r3.levels));
  }
}
function ExploreComponent_ng_container_12_ng_container_4_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r6.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r6.name, " ");
  }
}
function ExploreComponent_ng_container_12_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 21)(2, "div", 13);
    \u0275\u0275text(3, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "app-icon", 12);
    \u0275\u0275text(5, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-menu", null, 2);
    \u0275\u0275template(8, ExploreComponent_ng_container_12_ng_container_4_div_8_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const legendMenu_r7 = \u0275\u0275reference(7);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", legendMenu_r7);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", ctx_r3.legend);
  }
}
function ExploreComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275template(2, ExploreComponent_ng_container_12_ng_container_2_Template, 10, 4, "ng-container", 7);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, ExploreComponent_ng_container_12_ng_container_4_Template, 9, 2, "ng-container", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(3, 2, ctx_r3.levels)) == null ? null : tmp_2_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r3.legend.length);
  }
}
function ExploreComponent_ng_container_16_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 29);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreComponent_ng_container_16_button_10_Template_button_click_0_listener() {
      const lvl_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.setLevel(lvl_r10));
    });
    \u0275\u0275elementStart(2, "div", 30);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const lvl_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-30", lvl_r10.id !== ((tmp_4_0 = \u0275\u0275pipeBind1(1, 3, ctx_r3.level)) == null ? null : tmp_4_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", lvl_r10.display_name || lvl_r10.name, " ");
  }
}
function ExploreComponent_ng_container_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_ng_container_16_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_levels = !ctx_r3.show_levels);
    });
    \u0275\u0275elementStart(2, "app-icon", 12);
    \u0275\u0275text(3, "corporate_fare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15);
    \u0275\u0275template(10, ExploreComponent_ng_container_16_button_10_Template, 4, 5, "button", 28);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(12, "hr", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.show_levels ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_levels ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(11, 3, ctx_r3.levels));
  }
}
function ExploreComponent_ng_container_18_div_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r12 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r12.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r12.name, " ");
  }
}
function ExploreComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_ng_container_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.show_legend = !ctx_r3.show_legend);
    });
    \u0275\u0275elementStart(2, "app-icon", 12);
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "app-icon", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15);
    \u0275\u0275template(10, ExploreComponent_ng_container_18_div_10_Template, 4, 3, "div", 24);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr", 16);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r3.show_legend ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx_r3.show_legend ? "show" : "hide");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx_r3.legend);
  }
}
var _ExploreComponent = class _ExploreComponent extends AsyncHandler {
  get time() {
    return startOfMinute(Date.now());
  }
  get legend_visible() {
    return this._settings.get("app.explore.show_legend") !== false;
  }
  get hide_zones() {
    return this._settings.get("app.explore.hide_zones");
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  toggleZones(enabled) {
    return __async(this, null, function* () {
      const options = yield this.options.pipe(take(1)).toPromise();
      const disable = !enabled ? unique([...options.disable || [], "zones", "devices"]) : options.disable.filter((_) => _ !== "zones" && _ !== "devices") || [];
      this.setOptions({ disable });
    });
  }
  get can_search() {
    return !!this._settings.get("app.explore.search_enabled");
  }
  constructor(_state, _s, _desks, _zones, _parking, _settings, _org, _spaces, _dialog, _route, _router, _space_pipe, _maps) {
    super();
    this._state = _state;
    this._s = _s;
    this._desks = _desks;
    this._zones = _zones;
    this._parking = _parking;
    this._settings = _settings;
    this._org = _org;
    this._spaces = _spaces;
    this._dialog = _dialog;
    this._route = _route;
    this._router = _router;
    this._space_pipe = _space_pipe;
    this._maps = _maps;
    this.reset_delay = 180;
    this.show_levels = true;
    this.show_legend = false;
    this.show_accessibility = false;
    this.legend = [
      { id: "free", name: "Space Available", color: "#43a047" },
      { id: "busy", name: "Space In Use", color: "#e53935" },
      { id: "pending", name: "Space Pending", color: "#ffb300" },
      { id: "not-bookable", name: "Space Not-bookable", color: "#ccc" }
    ];
    this.levels = combineLatest([
      this._org.active_region,
      this._org.active_building
    ]).pipe(map(([region, building]) => {
      return (this._settings.get("app.use_region") ? flatten(this._org.buildings.filter((bld) => region.id === bld.parent_id).map((bld) => this._org.levelsForBuilding(bld).map((_) => __spreadProps(__spreadValues({}, _), {
        display_name: `${bld.display_name} - ${_.display_name}`
      })))) : this._org.levelsForBuilding(building)) || [];
    }));
    this.level = this._state.level;
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.locate = "";
    this.onMouse = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.onTouch = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.setOptions = (o) => this._state.setOptions(o);
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
    this.use_mapsindoors$ = this._maps.available$;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      if (location.hash.includes("public=true") || location.search.includes("public=true")) {
        this._state.setOptions({ is_public: true });
      }
      yield this._spaces.initialised.pipe(first((_) => _)).toPromise();
      this._desks.setOptions({ custom: true });
      this.reset_delay = this._settings.get("app.inactivity_timeout_secs") || 180;
      this.resetKiosk(false);
      VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
      this.subscription("level", this._state.level.subscribe(() => this.timeout("update_location", () => {
        this._state.setFeatures("_located", []);
      })));
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => __async(this, null, function* () {
        if (params.has("level")) {
          log("Explore", "Level changed to:", params.get("level"));
          this._state.setLevel(params.get("level"));
          const level = this._org.levelWithID([params.get("level")]);
          if (!level)
            return;
          const bld = this._org.buildings.find((_) => level.parent_id === _.id);
          if (!bld)
            return;
          this._org.building = bld;
        }
        this._state.setFeatures("_located", []);
        if (params.has("space")) {
          log("Explore", "Focusing on space:", params.get("space"));
          this.locateSpace(params.get("space"));
        } else if (params.has("user")) {
          log("Explore", "Focusing on user:", params.get("user"));
          let user = this._settings.value("last_search");
          if (!user || params.get("user") !== user.email) {
            user = null;
            user = yield showStaff(params.get("user")).toPromise();
          }
          if (!user)
            return notifyError(`Unable to user details for ${params.get("user")}`);
          this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
            notifyError(`Unable to locate ${params.get("user")}`);
            this._router.navigate([], {
              relativeTo: this._route,
              queryParams: {}
            });
          });
        } else if (params.has("feature")) {
          log("Explore", "Focusing on feature:", params.get("feature"));
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", [
              {
                location: params.get("feature"),
                content: MapPinComponent,
                data: {}
              }
            ]);
          });
        } else if (params.has("locate")) {
          log("Explore", "Focusing on location:", params.get("locate"));
          this.locate = params.get("locate");
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", [
              {
                location: params.get("locate"),
                content: MapPinComponent,
                data: {}
              }
            ]);
          });
        } else {
          this.timeout("update_location", () => {
            this._state.setFeatures("_located", []);
          });
        }
      })));
    });
  }
  locateSpace(id) {
    return __async(this, null, function* () {
      const space = yield this._space_pipe.transform(id);
      if (!space)
        return;
      this._state.setLevel(this._org.levelWithID(space.zones)?.id);
      const feature = {
        location: space.map_id,
        content: MapPinComponent,
        data: {
          message: `${space.display_name || space.name} is here`
        }
      };
      this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
    });
  }
  locateUser(user) {
    return __async(this, null, function* () {
      let locate_details = this._org.binding("location_services");
      if (!locate_details)
        return;
      if (typeof locate_details === "string") {
        locate_details = {
          system_id: locate_details,
          module: "LocationServices"
        };
      }
      const mod = getModule(locate_details.system_id, locate_details.module);
      const locations = (yield mod.execute("locate_user", [
        user.email,
        user.username || user.id
      ])).map((i) => new MapLocation(i));
      locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
      if (!locations?.length) {
        throw "No locations for the given user";
      }
      this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
      const pos = locations[0].position;
      const { coordinates_from } = locations[0];
      const feature = {
        location: locations[0].type === "wireless" ? {
          x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
          y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
        } : pos,
        content: locations[0].type === "wireless" ? MapRadiusComponent : MapPinComponent,
        z_index: 99,
        data: {
          message: `${user.name} is here`,
          radius: locations[0].variance,
          last_seen: locations[0].last_seen
        }
      };
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", [feature]);
      });
    });
  }
  resetKiosk(navigate = true) {
    if (document.activeElement?.blur)
      document.activeElement?.blur();
    const level = localStorage.getItem("KIOSK.level");
    this._state.setPositions(1, { x: 0.5, y: 0.5 });
    if (level)
      this._state.setLevel(level);
    this._dialog.closeAll();
    if (navigate)
      this._router.navigate(["/"]);
  }
};
_ExploreComponent.\u0275fac = function ExploreComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreComponent)(\u0275\u0275directiveInject(ExploreStateService), \u0275\u0275directiveInject(ExploreSpacesService), \u0275\u0275directiveInject(ExploreDesksService), \u0275\u0275directiveInject(ExploreZonesService), \u0275\u0275directiveInject(ExploreParkingService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SpacesService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SpacePipe), \u0275\u0275directiveInject(MapsPeopleService));
};
_ExploreComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["", "app-explore", ""]], hostBindings: function ExploreComponent_HostBindings(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275listener("mousedown", function ExploreComponent_mousedown_HostBindingHandler() {
      return ctx.onMouse();
    }, false, \u0275\u0275resolveWindow)("touchstart", function ExploreComponent_touchstart_HostBindingHandler() {
      return ctx.onTouch();
    }, false, \u0275\u0275resolveWindow);
  }
}, features: [\u0275\u0275ProvidersFeature([
  ExploreSpacesService,
  ExploreDesksService,
  ExploreZonesService,
  ExploreParkingService,
  SpacePipe
]), \u0275\u0275InheritDefinitionFeature], attrs: _c05, decls: 39, vars: 40, consts: [["accessibility_controls", ""], ["levelMenu", "matMenu"], ["legendMenu", "matMenu"], ["topbar", "", 1, "relative", "flex", "items-center", "justify-between", "px-4", "py-2", "border-b", "border-base-300", "bg-base-100", "text-base-content"], ["matRipple", "", "routerLink", "/", 1, "text-2xl", "rounded", "p-2"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "absolute", "top-1/2", "-translate-y-1/2", "right-2", "flex", "items-center"], [4, "ngIf"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "bg-base-200", "flex", "sm:hidden", 3, "content"], [1, "flex", "flex-1", "h-1/2"], ["sidebar", "", 1, "w-[20rem]", "hidden", "sm:block", "bg-base-100", "text-base-content", "border-r", "border-base-300", "px-2", "py-4"], ["btn", "", "matRipple", "", 1, "flex", "items", "clear", "w-full", "space-x-4", "hover:bg-base-200", 3, "click"], [1, "text-2xl"], [1, "flex-1", "text-left", "font-medium"], [1, "px-8"], [1, "py-4", "space-y-2"], [1, "w-[calc(100%-4rem)]", "mx-auto"], [1, "relative", "flex-1", "h-full"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels", "options", "focus"], [1, "bg-base-100", "rounded", "p-2", "w-[18rem]"], ["options", "", 1, "flex", "sm:hidden", "items-center", "bg-base-content", "text-base-100", "p-2", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "text-base-100", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "click"], ["class", "flex items-center py-2 px-4 rounded hover:bg-base-200 w-full space-x-4", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "py-2", "px-4", "rounded", "hover:bg-base-200", "w-full", "space-x-4"], [1, "h-3", "w-3", "rounded-full"], [1, "text-left", "opacity-60"], ["btn", "", "matRipple", "", "class", "clear hover:bg-base-200 hover:opacity-100 w-full", 3, "opacity-30", "click", 4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "hover:opacity-100", "w-full", 3, "click"], [1, "text-left", "w-full"]], template: function ExploreComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
    \u0275\u0275element(2, "img", 5);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275template(6, ExploreComponent_explore_search_6_Template, 1, 0, "explore-search", 7);
    \u0275\u0275elementStart(7, "button", 8)(8, "app-icon");
    \u0275\u0275text(9, "accessible");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(10, ExploreComponent_ng_template_10_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, ExploreComponent_ng_container_12_Template, 5, 4, "ng-container", 7);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementStart(14, "div", 9)(15, "div", 10);
    \u0275\u0275template(16, ExploreComponent_ng_container_16_Template, 13, 5, "ng-container", 7);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275template(18, ExploreComponent_ng_container_18_Template, 12, 3, "ng-container", 7);
    \u0275\u0275elementStart(19, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.show_accessibility = !ctx.show_accessibility);
    });
    \u0275\u0275elementStart(20, "app-icon", 12);
    \u0275\u0275text(21, "accessible");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 13);
    \u0275\u0275text(23, " Accessibility ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "app-icon", 12);
    \u0275\u0275text(25);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "div", 14)(27, "div", 15);
    \u0275\u0275element(28, "accessibility-controls");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(29, "hr", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 17)(31, "interactive-map", 18);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275pipe(33, "async");
    \u0275\u0275pipe(34, "async");
    \u0275\u0275pipe(35, "async");
    \u0275\u0275pipe(36, "async");
    \u0275\u0275pipe(37, "async");
    \u0275\u0275pipe(38, "async");
    \u0275\u0275listener("zoomChange", function ExploreComponent_Template_interactive_map_zoomChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateZoom($event));
    })("centerChange", function ExploreComponent_Template_interactive_map_centerChange_31_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateCenter($event));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_10_0;
    let tmp_11_0;
    const accessibility_controls_r13 = \u0275\u0275reference(11);
    \u0275\u0275advance(2);
    \u0275\u0275property("source", ((tmp_1_0 = \u0275\u0275pipeBind1(3, 17, ctx.logo)) == null ? null : tmp_1_0.src) || \u0275\u0275pipeBind1(4, 19, ctx.logo));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.can_search);
    \u0275\u0275advance();
    \u0275\u0275property("content", accessibility_controls_r13);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(13, 21, ctx.levels)) == null ? null : tmp_4_0.length) || ctx.legend.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(17, 23, ctx.levels)) == null ? null : tmp_5_0.length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.legend.length && ctx.legend_visible);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx.show_accessibility ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275property("@show", ctx.show_accessibility ? "show" : "hide");
    \u0275\u0275advance(5);
    \u0275\u0275property("src", \u0275\u0275pipeBind1(32, 25, ctx.url))("zoom", (tmp_10_0 = \u0275\u0275pipeBind1(33, 27, ctx.positions)) == null ? null : tmp_10_0.zoom)("center", (tmp_11_0 = \u0275\u0275pipeBind1(34, 29, ctx.positions)) == null ? null : tmp_11_0.center)("styles", \u0275\u0275pipeBind1(35, 31, ctx.styles))("features", \u0275\u0275pipeBind1(36, 33, ctx.features))("actions", \u0275\u0275pipeBind1(37, 35, ctx.actions))("labels", \u0275\u0275pipeBind1(38, 37, ctx.labels))("options", \u0275\u0275pureFunction0(39, _c12))("focus", ctx.locate);
  }
}, dependencies: [NgForOf, NgIf, RouterLink, IconComponent, InteractiveMapComponent, CustomTooltipComponent, AuthenticatedImageDirective, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, ExploreSearchComponent, AccessibilityControlsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--b2);\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
var ExploreComponent = _ExploreComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/map-kiosk/src/app/explore.component.ts", lineNumber: 271 });
})();

// apps/map-kiosk/src/app/explore-level-select.component.ts
function ExploreLevelSelectComponent_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ExploreLevelSelectComponent_button_1_Template_button_click_0_listener() {
      const lvl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setLevel(lvl_r2));
    });
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 4);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const lvl_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275classProp("active", lvl_r2.id === ((tmp_2_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.level)) == null ? null : tmp_2_0.id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lvl_r2.number);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r2.display_name || lvl_r2.name, " ");
  }
}
var _ExploreLevelSelectComponent = class _ExploreLevelSelectComponent {
  constructor(_org, _state) {
    this._org = _org;
    this._state = _state;
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      const levels = yield this._org.active_levels.pipe(take(1)).toPromise();
    });
  }
};
_ExploreLevelSelectComponent.\u0275fac = function ExploreLevelSelectComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ExploreLevelSelectComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ExploreStateService));
};
_ExploreLevelSelectComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLevelSelectComponent, selectors: [["explore-level-select"]], decls: 3, vars: 3, consts: [[1, "m-2", "rounded", "overflow-hidden", "bg-base-100", "shadow", "border", "border-solid", "border-base-300"], ["class", "flex flex-col items-center justify-center h-16 w-16 p-2 border-none", "matRipple", "", 3, "active", "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "flex-col", "items-center", "justify-center", "h-16", "w-16", "p-2", "border-none", 3, "click"], [1, "text-2xl"], [1, "text-sm", "whitespace-nowrap", "m-0"]], template: function ExploreLevelSelectComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, ExploreLevelSelectComponent_button_1_Template, 6, 6, "button", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx.levels));
  }
}, dependencies: [NgForOf, MatRipple, AsyncPipe], styles: ["\n\n.active[_ngcontent-%COMP%] {\n  background: var(--s) !important;\n  color: #fff !important;\n}\nbutton[_ngcontent-%COMP%]:not(:first-child) {\n  border-top: 1px solid var(--b3) !important;\n}\n/*# sourceMappingURL=explore-level-select.component.css.map */"] });
var ExploreLevelSelectComponent = _ExploreLevelSelectComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLevelSelectComponent, { className: "ExploreLevelSelectComponent", filePath: "apps/map-kiosk/src/app/explore-level-select.component.ts", lineNumber: 39 });
})();

// apps/visitor-kiosk/src/app/explore.module.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
var _AppExploreModule = class _AppExploreModule {
};
_AppExploreModule.\u0275fac = function AppExploreModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppExploreModule)();
};
_AppExploreModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppExploreModule });
_AppExploreModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  RouterModule.forChild(ROUTES),
  ComponentsModule,
  SharedSpacesModule,
  SharedComponentsModule,
  FormsModule,
  SharedExploreModule
] });
var AppExploreModule = _AppExploreModule;
export {
  AppExploreModule
};
//# sourceMappingURL=explore.module-2JBYVPJA.js.map
