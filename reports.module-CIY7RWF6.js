import "./chunk-EHPZVR7C.js";
import "./chunk-3V22R2IZ.js";
import "./chunk-LKZSZ7A2.js";
import {
  SharedUsersModule
} from "./chunk-PJ4JAIG3.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  CalendarEvent,
  CommonModule,
  CurrencyPipe,
  DatePipe,
  DateRangeFieldComponent,
  DefaultValueAccessor,
  DurationPipe,
  EventEmitter,
  FormsModule,
  IconComponent,
  MatFormField,
  MatOption,
  MatPaginatorModule,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  SharedSpacesModule,
  SidebarComponent,
  SimpleTableComponent,
  SpacePipe,
  StaffUser,
  Subject,
  UIModule,
  UserSearchFieldComponent,
  __async,
  __objRest,
  __spreadProps,
  __spreadValues,
  addDays,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInCalendarDays,
  differenceInDays,
  distinctUntilChanged,
  downloadFile,
  endOfDay,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  formatDuration,
  getModule,
  getUnixTime,
  isBefore,
  isSameDay,
  isValid,
  jsonToCsv,
  map,
  notifyError,
  notifyWarn,
  of,
  parse,
  queryAllBookings,
  queryAllEvents,
  queryAssetGroupsExtended,
  queryAssetPurchaseOrders,
  queryBookings,
  requestSpacesForZone,
  searchStaff,
  setDay,
  shareReplay,
  showMetadata,
  startOfDay,
  startWith,
  switchMap,
  take,
  tap,
  timePeriodsIntersect,
  toDate,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeResourceUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-5OFBRWDR.js";

// node_modules/date-fns/isWeekend.mjs
function isWeekend(date) {
  const day = toDate(date).getDay();
  return day === 0 || day === 6;
}

// node_modules/date-fns/differenceInBusinessDays.mjs
function differenceInBusinessDays(dateLeft, dateRight) {
  const _dateLeft = toDate(dateLeft);
  let _dateRight = toDate(dateRight);
  if (!isValid(_dateLeft) || !isValid(_dateRight)) return NaN;
  const calendarDifference = differenceInCalendarDays(_dateLeft, _dateRight);
  const sign = calendarDifference < 0 ? -1 : 1;
  const weeks = Math.trunc(calendarDifference / 7);
  let result = weeks * 5;
  _dateRight = addDays(_dateRight, weeks * 7);
  while (!isSameDay(_dateLeft, _dateRight)) {
    result += isWeekend(_dateRight) ? 0 : sign;
    _dateRight = addDays(_dateRight, sign);
  }
  return result === 0 ? 0 : result;
}

// apps/concierge/src/app/reports/reports-menu.component.ts
var _c0 = () => ["/reports", "desks"];
var _c1 = () => ["/reports", "bookings"];
var _c2 = () => ["/reports", "catering"];
var _c3 = () => ["/reports", "contact-tracing"];
var _c4 = (a0) => ["/reports", a0];
function ReportsMenuComponent_a_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "app-icon", 5);
    \u0275\u0275text(2, "room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4, "Desks");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-icon", 8);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c0));
  }
}
function ReportsMenuComponent_a_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "app-icon", 5);
    \u0275\u0275text(2, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4, "Rooms");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-icon", 8);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c1));
  }
}
function ReportsMenuComponent_a_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "app-icon", 5);
    \u0275\u0275text(2, "room_service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4, "Catering");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-icon", 8);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c2));
  }
}
function ReportsMenuComponent_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "app-icon", 5);
    \u0275\u0275text(2, "connect_without_contact");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4, "Contact Tracing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-icon", 8);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c3));
  }
}
function ReportsMenuComponent_a_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 4)(1, "app-icon", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 7)(6, "p");
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "app-icon", 8);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c4, report_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r1.name);
  }
}
var DEFAULT_FEATURES = ["desks", "spaces", "catering", "contact-tracing"];
var _ReportsMenuComponent = class _ReportsMenuComponent {
  get custom_reports() {
    return this._settings.get("app.custom_reports") || [];
  }
  get features() {
    return this._settings.get("app.reports.features") || DEFAULT_FEATURES;
  }
  constructor(_settings) {
    this._settings = _settings;
  }
};
_ReportsMenuComponent.\u0275fac = function ReportsMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsMenuComponent)(\u0275\u0275directiveInject(SettingsService));
};
_ReportsMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsMenuComponent, selectors: [["reports-menu"], ["", "reports-menu", ""]], decls: 7, vars: 5, consts: [[1, "absolute", "inset-0", "flex", "items-center", "justify-center", "bg-base-200", "overflow-auto"], [1, "grid", "w-full", "justify-items-center"], ["matRipple", "", "class", "h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200", 3, "routerLink", 4, "ngIf"], ["matRipple", "", "class", "h-64 w-64 p-4 flex flex-col items-center justify-center bg-base-100 rounded shadow hover:opacity-80 border border-base-200", 3, "routerLink", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "h-64", "w-64", "p-4", "flex", "flex-col", "items-center", "justify-center", "bg-base-100", "rounded", "shadow", "hover:opacity-80", "border", "border-base-200", 3, "routerLink"], [1, "text-8xl"], [1, "text-xl", "font-bold", "mb-4"], [1, "flex", "items-center"], [1, "ml-2"]], template: function ReportsMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275template(2, ReportsMenuComponent_a_2_Template, 10, 2, "a", 2)(3, ReportsMenuComponent_a_3_Template, 10, 2, "a", 2)(4, ReportsMenuComponent_a_4_Template, 10, 2, "a", 2)(5, ReportsMenuComponent_a_5_Template, 10, 2, "a", 2)(6, ReportsMenuComponent_a_6_Template, 10, 5, "a", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.features.includes("desks"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.features.includes("spaces"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.features.includes("catering"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.features.includes("contact-tracing"));
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.custom_reports);
  }
}, dependencies: [NgForOf, NgIf, MatRipple, IconComponent, RouterLink], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n  justify-content: center;\n  background: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  gap: 1rem;\n}\n/*# sourceMappingURL=reports-menu.component.css.map */"] });
var ReportsMenuComponent = _ReportsMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsMenuComponent, { className: "ReportsMenuComponent", filePath: "apps/concierge/src/app/reports/reports-menu.component.ts", lineNumber: 104 });
})();

// apps/concierge/src/app/reports/reports.component.ts
var _c02 = ["app-reports", ""];
function ReportsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
var _ReportsComponent = class _ReportsComponent {
  get path() {
    const parts = this._router.url.split("/");
    return parts[parts.length - 1];
  }
  constructor(_router) {
    this._router = _router;
  }
};
_ReportsComponent.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsComponent)(\u0275\u0275directiveInject(Router));
};
_ReportsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["", "app-reports", ""]], attrs: _c02, decls: 4, vars: 1, consts: [[1, "h-full", "screen-only"], [1, "relative", "overflow-hidden", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "bg-base-200"], ["reports-menu", "", "class", "absolute inset-0 screen-only", 4, "ngIf"], ["reports-menu", "", 1, "absolute", "inset-0", "screen-only"]], template: function ReportsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar", 0);
    \u0275\u0275elementStart(1, "main", 1);
    \u0275\u0275element(2, "router-outlet");
    \u0275\u0275template(3, ReportsComponent_div_3_Template, 1, 0, "div", 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.path === "reports");
  }
}, dependencies: [NgIf, SidebarComponent, RouterOutlet, ReportsMenuComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
var ReportsComponent = _ReportsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "apps/concierge/src/app/reports/reports.component.ts", lineNumber: 36 });
})();

// apps/concierge/src/app/reports/reports-options.component.ts
function ReportsOptionsComponent_mat_option_3_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_5_0;
    const level_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_5_0 = \u0275\u0275pipeBind1(2, 1, level_r2.parent_id)) == null ? null : tmp_5_0.display_name, " ");
  }
}
function ReportsOptionsComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 15);
    \u0275\u0275template(2, ReportsOptionsComponent_mat_option_3_div_2_Template, 5, 3, "div", 16);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r2.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r2.display_name || level_r2.name);
  }
}
function ReportsOptionsComponent_mat_spinner_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 19);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ReportsOptionsComponent_p_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1, "Generate Report");
    \u0275\u0275elementEnd();
  }
}
var _ReportsOptionsComponent = class _ReportsOptionsComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  constructor(_org, _settings, _route, _router) {
    super();
    this._org = _org;
    this._settings = _settings;
    this._route = _route;
    this._router = _router;
    this.loading = false;
    this.has_data = false;
    this.printing = new EventEmitter();
    this.generate = new EventEmitter();
    this.download = new EventEmitter();
    this.zones = [];
    this.start = startOfDay(Date.now()).getTime();
    this.end = endOfDay(Date.now()).getTime();
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.page = "";
    this.setStartDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { start: date },
        queryParamsHandling: "merge"
      });
    };
    this.setEndDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { end: endOfDay(date).valueOf() },
        queryParamsHandling: "merge"
      });
    };
    this.setZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.page = this._router.url;
      this.subscription("routing", this._router.events.subscribe(() => {
        this.page = this._router.url;
      }));
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
        if (params.has("start"))
          this.start = +params.get("start");
        if (params.has("end"))
          this.end = +params.get("end");
      }));
    });
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
};
_ReportsOptionsComponent.\u0275fac = function ReportsOptionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsOptionsComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_ReportsOptionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsOptionsComponent, selectors: [["reports-options"]], inputs: { loading: "loading", has_data: "has_data" }, outputs: { printing: "printing", generate: "generate", download: "download" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 12, consts: [["startDate", ""], ["endDate", ""], [1, "bg-base-100", "h-20", "w-full", "flex", "items-center", "space-x-2", "p-4", "z-20", "border-b", "border-base-200", "print:hidden"], ["appearance", "outline", 1, "w-60", "no-subscript"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "week_start"], [3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [3, "diameter", 4, "ngIf"], [4, "ngIf"], [1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Report Data", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "diameter"]], template: function ReportsOptionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "mat-select", 4);
    \u0275\u0275twoWayListener("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setZones($event));
    });
    \u0275\u0275template(3, ReportsOptionsComponent_mat_option_3_Template, 5, 3, "mat-option", 5);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "date-range-field", 6)(6, "input", 7, 0);
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setStartDate($event) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "input", 7, 1);
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setEndDate($event) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "button", 8);
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_10_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generate.emit());
    });
    \u0275\u0275template(11, ReportsOptionsComponent_mat_spinner_11_Template, 1, 1, "mat-spinner", 9)(12, ReportsOptionsComponent_p_12_Template, 2, 0, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275element(13, "div", 11);
    \u0275\u0275elementStart(14, "button", 12);
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.download.emit());
    });
    \u0275\u0275elementStart(15, "app-icon");
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "button", 13);
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.print());
    });
    \u0275\u0275elementStart(18, "app-icon");
    \u0275\u0275text(19, "print");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 10, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("week_start", ctx.week_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx.start);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.end);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !!ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.has_data);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !ctx.has_data);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatTooltip, MatProgressSpinner, MatRipple, DateRangeFieldComponent, IconComponent, AsyncPipe, BuildingPipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--n) !important;\n}\nmat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=reports-options.component.css.map */"] });
var ReportsOptionsComponent = _ReportsOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsOptionsComponent, { className: "ReportsOptionsComponent", filePath: "apps/concierge/src/app/reports/reports-options.component.ts", lineNumber: 101 });
})();

// apps/concierge/src/app/reports/reports.utilities.ts
function generateReportForDeskBookings(bookings, util_period = 1, counts = {}) {
  util_period = Math.max(1, util_period);
  let total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  total = Math.max(1, total);
  const utilisation = Math.floor(bookings.length / total / util_period * 1e4) / 1e4;
  return {
    total,
    count: bookings.length,
    utilisation,
    events: bookings
  };
}
function generateReportForBookings(bookings, util_period = 8, counts = {}) {
  util_period = Math.max(1, util_period);
  const total_users = bookings.reduce((c, i) => c + i.attendees.length, 0);
  const total_capacity = bookings.reduce((c, i) => c + Math.max(1, i.system?.capacity), 0);
  const utilisation = Math.floor(bookings.reduce((c, i) => c + i.duration, 0) / (util_period * 60) * 100) / 100;
  const occupancy = Math.floor(total_users / total_capacity * 100) / 100;
  const total = Object.keys(counts).reduce((c, i) => c + (counts[i] || 0), 0);
  return {
    count: bookings.length,
    avg_length: Math.floor(bookings.reduce((c, i) => c + i.duration, 0) / bookings.length * 100) / 100,
    efficiency: Math.floor((utilisation + occupancy) / 2 * 100) / 100,
    total,
    total_users,
    total_capacity,
    occupancy,
    utilisation,
    events: bookings
  };
}

// apps/concierge/src/app/reports/reports-state.service.ts
var DAYS_OF_WEEK_INDEX = {
  0: "sunday",
  1: "monday",
  2: "tuesday",
  3: "wednesday",
  4: "thurday",
  5: "friday",
  6: "saturday"
};
var _ReportsStateService = class _ReportsStateService {
  get _ignore_days() {
    const day_list = this._settings.get("app.reports.ignore_days") || [];
    return day_list?.map((_) => typeof _ === "string" ? _?.toLowerCase() : format(setDay(/* @__PURE__ */ new Date(), _), "eeee")?.toLowerCase()).filter((_) => !!_);
  }
  get duration() {
    const opts = this._options.getValue();
    let start = startOfDay(opts.start);
    const end = endOfDay(opts.end).valueOf();
    let count = 1;
    while (start.valueOf() < end) {
      if (!this._ignore_days.includes(DAYS_OF_WEEK_INDEX[start.getDay()])) {
        count++;
      }
      start = addDays(start, 1);
    }
    return Math.max(1, count);
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._space_pipe = new SpacePipe(this._org);
    this._generate = new Subject();
    this._loading = new BehaviorSubject("");
    this._active_bookings = new BehaviorSubject([]);
    this._options = new BehaviorSubject({
      start: /* @__PURE__ */ new Date(),
      end: /* @__PURE__ */ new Date(),
      zones: []
    });
    this._bookings_list = this._generate.pipe(debounceTime(500), switchMap((_) => {
      const options = this._options.getValue();
      this._loading.next("Loading report details...");
      if (!options?.type && !options?.zones?.length)
        return of([]);
      const start = startOfDay(options.start || Date.now());
      const end = endOfDay(options.end || start);
      let zones = options?.zones ? options.zones.filter((z) => z !== "All").join(",") : "";
      if (!zones) {
        zones = this._settings.get("app.use_region") ? this._org.region.id : this._org.building.id;
      }
      const query = {
        period_start: getUnixTime(start),
        period_end: getUnixTime(end)
      };
      switch (options.type) {
        case "desks":
          return queryAllBookings(__spreadProps(__spreadValues({}, query), {
            zones,
            type: "desk",
            limit: 1e3
          }));
        case "parking":
          return queryAllBookings(__spreadProps(__spreadValues({}, query), {
            zones,
            type: "parking",
            limit: 1e3
          }));
        case "events":
          return queryAllEvents(__spreadProps(__spreadValues({}, query), {
            zone_ids: zones,
            limit: 1e3
          })).pipe(catchError((_2) => of([])));
      }
    }), map((list) => {
      this._loading.next("");
      if (!list?.length) {
        notifyError("No bookings for the selected levels and period");
      }
      list = list.filter((bkn) => !this._ignore_days.includes(DAYS_OF_WEEK_INDEX[new Date(bkn.date).getDay()]));
      this._active_bookings.next(list || []);
      return list;
    }), shareReplay(1));
    this.loading = this._loading.asObservable();
    this.options = this._options.asObservable();
    this.bookings = this._active_bookings.asObservable();
    this.spaces = this._options.pipe(switchMap(({ zones }) => {
      const use_region = this._settings.get("app.use_region");
      if (!zones?.length) {
        zones = [
          (use_region ? this._org.building?.parent_id : this._org.building?.id) || this._org.building?.id
        ];
      }
      return forkJoin(zones.map((id) => requestSpacesForZone(id).pipe(catchError(() => of([])))));
    }), map((l) => flatten(l)), shareReplay(1));
    this.counts = this._options.pipe(debounceTime(500), switchMap((filters) => {
      let zones = (filters.zones || []).filter((z) => z !== -1 && z !== "All");
      if (!zones.length) {
        zones = this._settings.get("app.use_region") ? this._org.levelsForRegion().map((_) => _.id) : this._org.levelsForBuilding().map((_) => _.id);
      }
      if (filters.type === "events") {
        return this.spaces.pipe(map((_) => zones.map((z) => [
          z,
          _.filter((s) => s.zones.includes(z)).length
        ])));
      }
      return Promise.all(zones.map((z) => showMetadata(z, "desks").pipe(catchError(() => of({ details: [] })), map((m) => [z, m.details.length])).toPromise()));
    }), map((list) => {
      const map2 = {};
      this._active_bookings.next([]);
      list.forEach(([id, count]) => map2[id] = count || 0);
      return map2;
    }), shareReplay(1));
    this.stats = combineLatest([
      this.counts,
      this.bookings
    ]).pipe(debounceTime(300), switchMap((_0) => __async(this, [_0], function* ([counts, list]) {
      if (list[0] instanceof CalendarEvent) {
        return generateReportForBookings(list, this.duration * 8, counts);
      }
      return generateReportForDeskBookings(list || [], this.duration, counts);
    })), shareReplay(1));
    this.day_list = combineLatest([this.options, this.stats]).pipe(map(([options, stats]) => {
      const { start } = options;
      let date = startOfDay(start);
      const end = endOfDay(options.end || date);
      const dates = [];
      while (isBefore(date, end)) {
        if (this._ignore_days.includes(DAYS_OF_WEEK_INDEX[date.getDay()])) {
          date = addDays(date, 1);
          continue;
        }
        const s = startOfDay(date).valueOf();
        const e = endOfDay(s).valueOf();
        const events = stats.events?.filter((bkn) => timePeriodsIntersect(s, e, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) || [];
        const usage = options.type === "desks" ? unique(events, "system_id").length : unique(events, "asset_id").length;
        dates.push({
          date: s,
          total: stats.total || 0,
          usage,
          free: (stats.total || 0) - events.length,
          approved: events.reduce((c, e2) => c + (e2.approved || e2.status === "approved" ? 1 : 0), 0) || "0",
          count: events.length || 0,
          utilisation: (events.length / Math.max(1, stats.total) * 100).toFixed(1)
        });
        date = addDays(date, 1);
      }
      return dates;
    }), shareReplay(1));
    this._bookings_list.subscribe((_) => _);
  }
  generateReport() {
    this._generate.next((/* @__PURE__ */ new Date()).valueOf());
  }
  setOptions(options) {
    if (options.zones?.includes("All")) {
      options.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (options.zones && this._options.getValue()?.zones?.includes("All")) {
      options.zones = [];
    }
    if (options.start?.valueOf() === this._options.getValue().start?.valueOf() || options.end?.valueOf() === this._options.getValue().end?.valueOf())
      return;
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  downloadReport() {
    const options = this._options.getValue();
    const bookings = this._active_bookings.getValue();
    downloadFile(`report+${options.type}+${format(options.start, "yyyy-MM-dd")}+${format(options.end, "yyyy-MM-dd")}.tsv`, jsonToCsv(bookings.map((bkn) => {
      const details = bkn.toJSON();
      delete details.zones;
      delete details.server_names;
      delete details.extension_data;
      return details;
    }), "	"));
  }
};
_ReportsStateService.\u0275fac = function ReportsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_ReportsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsStateService, factory: _ReportsStateService.\u0275fac, providedIn: "root" });
var ReportsStateService = _ReportsStateService;

// apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts
function ReportSpacesOverallComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "h3");
    \u0275\u0275text(3, "No show count");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 4)(8, "h3");
    \u0275\u0275text(9, "% of No show Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 4)(14, "h3");
    \u0275\u0275text(15, "Total in-room attendance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx_r0.no_shows) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(12, 5, ctx_r0.no_show_percent) || 0, "%");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 7, ctx_r0.attendance) || 0);
  }
}
var _ReportSpacesOverallComponent = class _ReportSpacesOverallComponent {
  constructor(_state) {
    this._state = _state;
    this.business_days = this._state.options.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 2, startOfDay(start || Date.now())) || 1));
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.avg_length = this._state.stats.pipe(map((i) => formatDuration({ minutes: Math.floor(i.avg_length || 0) })));
    this.attendance = this._state.stats.pipe(map(({ events }) => events.reduce((c, { extension_data }) => c + (+extension_data?.people_count?.max || 0), 0)));
    this.no_shows = this._state.stats.pipe(map(({ events }) => events.reduce((c, { extension_data }) => c + +extension_data?.people_count?.max ? 1 : 0, 0)));
    this.no_show_percent = this._state.stats.pipe(map(({ events }) => Math.floor(events.reduce((c, { extension_data }) => c + +extension_data?.people_count?.max ? 1 : 0, 0) / events.length * 1e4) / 100));
    this.has_attendance = this._state.stats.pipe(map(({ events }) => !!events.find(({ extension_data }) => !!extension_data?.people_count)));
  }
};
_ReportSpacesOverallComponent.\u0275fac = function ReportSpacesOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesOverallComponent)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportSpacesOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallComponent, selectors: [["report-spaces-overall"]], decls: 21, vars: 12, consts: [[1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], ["class", "m-4 p-4 rounded bg-base-100 flex justify-center items-center space-x-2", 4, "ngIf"], [1, "m-4", "p-4", "rounded", "bg-base-100", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex-1", "flex", "flex-col", "items-center", "justify-center"]], template: function ReportSpacesOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
    \u0275\u0275text(3, "Business Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 1)(8, "h3");
    \u0275\u0275text(9, "Total Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "h3");
    \u0275\u0275text(15, "Average Booking Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(19, ReportSpacesOverallComponent_div_19_Template, 19, 9, "div", 2);
    \u0275\u0275pipe(20, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, ctx.business_days) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 6, ctx.total_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 8, ctx.avg_length) || "None");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(20, 10, ctx.has_attendance));
  }
}, dependencies: [NgIf, AsyncPipe], styles: ["\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\np[_ngcontent-%COMP%]:not([simple]) {\n  font-size: 1.75rem;\n}\n/*# sourceMappingURL=report-spaces-overall.component.css.map */"] });
var ReportSpacesOverallComponent = _ReportSpacesOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallComponent, { className: "ReportSpacesOverallComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts
var _c03 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c12 = () => ({ key: "approved", name: "Approved Bookings" });
var _c22 = () => ({ key: "count", name: "Total Requests" });
var _c32 = (a0) => ({ key: "utilisation", name: "Utilisation", content: a0 });
var _c42 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportSpacesOverallListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ReportSpacesOverallListComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ReportSpacesOverallListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, data_r3, "mediumDate"));
  }
}
function ReportSpacesOverallListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r4 || "0", "%");
  }
}
var _ReportSpacesOverallListComponent = class _ReportSpacesOverallListComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.day_list = this._state.day_list;
    this.download = () => __async(this, null, function* () {
      let data = yield this.day_list.pipe(take(1)).toPromise();
      data = data.map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMMM d, y(EEE)")
      }));
      downloadFile("spaces-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportSpacesOverallListComponent.\u0275fac = function ReportSpacesOverallListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesOverallListComponent)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportSpacesOverallListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallListComponent, selectors: [["report-spaces-overall-list"]], inputs: { print: "print" }, decls: 11, vars: 16, consts: [["date_template", ""], ["percent_template", ""], [1, "w-full"], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Daily Utilisation", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", "matTooltip", "Download Daily Utilisation", 3, "click"], [1, "p-4"]], template: function ReportSpacesOverallListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
    \u0275\u0275text(4, "Daily Utilisation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReportSpacesOverallListComponent_button_5_Template, 3, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 7);
    \u0275\u0275template(7, ReportSpacesOverallListComponent_ng_template_7_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ReportSpacesOverallListComponent_ng_template_9_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(8);
    const percent_template_r6 = \u0275\u0275reference(10);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.day_list)("columns", \u0275\u0275pureFunction4(11, _c42, \u0275\u0275pureFunction1(5, _c03, date_template_r5), \u0275\u0275pureFunction0(7, _c12), \u0275\u0275pureFunction0(8, _c22), \u0275\u0275pureFunction1(9, _c32, percent_template_r6)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, DatePipe], encapsulation: 2 });
var ReportSpacesOverallListComponent = _ReportSpacesOverallListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallListComponent, { className: "ReportSpacesOverallListComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts", lineNumber: 54 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts
var _c04 = () => ({ key: "name", name: "Name" });
var _c13 = (a0) => ({ key: "capacity", name: "Capacity", content: a0 });
var _c23 = () => ({ key: "booking_count", name: "Bookings" });
var _c33 = () => ({ key: "utilisation", name: "Utilisation" });
var _c43 = () => ({ key: "avg_attendees", name: "Avg. Invitees per Booking" });
var _c5 = (a0) => ({ key: "no_shows", name: "No Shows", show: a0 });
var _c6 = (a0) => ({ key: "min_attendance", name: "Min. In-Room Attendance", show: a0 });
var _c7 = (a0) => ({ key: "max_attendance", name: "Max. In-Room Attendance", show: a0 });
var _c8 = () => ({ key: "occupancy", name: "Occupancy %" });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function ReportSpacesSpaceListing_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ReportSpacesSpaceListing_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ReportSpacesSpaceListing_ng_template_9_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "Not set");
    \u0275\u0275elementEnd();
  }
}
function ReportSpacesSpaceListing_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ReportSpacesSpaceListing_ng_template_9_span_2_Template, 2, 0, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 < 1 ? "" : data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r3 < 1);
  }
}
var _ReportSpacesSpaceListing = class _ReportSpacesSpaceListing {
  constructor(_reports) {
    this._reports = _reports;
    this.print = false;
    this._space_pipe = new SpacePipe();
    this.space_list = combineLatest([
      this._reports.stats,
      this._reports.options
    ]).pipe(debounceTime(300), switchMap((_0) => __async(this, [_0], function* ([stats, { start, end }]) {
      let list = [];
      let has_attendance = false;
      for (const booking of stats.events) {
        let space_list = unique(booking.resources, "email") || [booking.system];
        let resources = [];
        for (const space of space_list) {
          const details = yield this._space_pipe.transform(space.email || space.id);
          resources.push(details);
        }
        for (const space of resources) {
          let details = list.find((_) => _.id === space.id || _.id?.toLowerCase() === space.email.toLowerCase());
          if (!details) {
            details = {
              id: space.id || space.email,
              name: space.display_name || space.name,
              capacity: space.capacity,
              booking_count: 0,
              attendance: 0,
              avg_attendance: 0,
              min_attendance: 99,
              max_attendance: 0,
              attendees: 0,
              avg_attendees: 0,
              usage: 0,
              no_shows: 0,
              utilisation: 0,
              occupancy: 0
            };
            if (!details.id || !details.name)
              continue;
            list.push(details);
          }
          if (booking.extension_data?.people_count?.max === 0) {
            details.no_shows += 1;
          }
          details.booking_count += 1;
          details.attendance += booking.extension_data?.people_count?.max ?? 0;
          details.avg_attendance += booking.extension_data?.people_count?.avg ?? 0;
          details.min_attendance = Math.min(details.max_attendance, booking.extension_data?.people_count?.max ?? 99);
          details.max_attendance = Math.max(details.max_attendance, booking.extension_data?.people_count?.max ?? 0);
          details.usage += booking.duration;
          details.attendees += booking.attendees.length;
          has_attendance = has_attendance || !!booking.extension_data.people_count;
        }
      }
      const period_in_days = Math.max(1, differenceInDays(end, start) + 1);
      for (const space of list) {
        space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
        space.avg_attendance = Math.floor(space.attendance / space.booking_count * 100) / 100;
        space.utilisation = `${Math.floor(space.usage / 60 / 8 / period_in_days * 100)}%`;
        space.min_attendance = space.min_attendance === 99 ? "?" : space.min_attendance;
        space.occupancy = `${Math.floor(space.avg_attendees / Math.max(1, space.capacity) * 1e3) / 10}%`;
        if (space.attendance < 0 || !has_attendance) {
          space.attendance = "?";
          space.avg_attendance = "?";
        }
      }
      return list;
    })));
    this.has_attendance = this.space_list.pipe(map((_) => !!_.find(({ attendance }) => attendance !== "?")));
    this.download = () => __async(this, null, function* () {
      const data = yield this.space_list.pipe(take(1)).toPromise();
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.no_shows;
        delete item.min_attendance;
        delete item.max_attendance;
      }
      downloadFile("report-spaces-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportSpacesSpaceListing.\u0275fac = function ReportSpacesSpaceListing_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesSpaceListing)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportSpacesSpaceListing.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesSpaceListing, selectors: [["report-spaces-space-listing"]], inputs: { print: "print" }, decls: 11, vars: 34, consts: [["capacity_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"]], template: function ReportSpacesSpaceListing_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Room Utilisation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReportSpacesSpaceListing_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, ReportSpacesSpaceListing_ng_template_9_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const capacity_template_r4 = \u0275\u0275reference(10);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.space_list)("columns", \u0275\u0275pureFunctionV(24, _c9, [\u0275\u0275pureFunction0(11, _c04), \u0275\u0275pureFunction1(12, _c13, capacity_template_r4), \u0275\u0275pureFunction0(14, _c23), \u0275\u0275pureFunction0(15, _c33), \u0275\u0275pureFunction0(16, _c43), \u0275\u0275pureFunction1(17, _c5, \u0275\u0275pipeBind1(6, 5, ctx.has_attendance)), \u0275\u0275pureFunction1(19, _c6, \u0275\u0275pipeBind1(7, 7, ctx.has_attendance)), \u0275\u0275pureFunction1(21, _c7, \u0275\u0275pipeBind1(8, 9, ctx.has_attendance)), \u0275\u0275pureFunction0(23, _c8)]))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe] });
var ReportSpacesSpaceListing = _ReportSpacesSpaceListing;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesSpaceListing, { className: "ReportSpacesSpaceListing", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts", lineNumber: 65 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts
var _c05 = () => ({ key: "name", name: "Name" });
var _c14 = () => ({ key: "booking_count", name: "Bookings" });
var _c24 = () => ({ key: "avg_attendees", name: "Avg. Invitees per Booking" });
var _c34 = () => ({ key: "total_time", name: "Total Booked Time" });
var _c44 = () => ({ key: "entity", name: "Entity" });
var _c52 = () => ({ key: "no_shows", name: "No Shows" });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ReportSpacesUserListingComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ReportSpacesUserListingComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
var _ReportSpacesUserListingComponent = class _ReportSpacesUserListingComponent {
  constructor(_reports) {
    this._reports = _reports;
    this.print = false;
    this.user_list = combineLatest([this._reports.stats]).pipe(debounceTime(300), map(([stats]) => {
      let list = [];
      for (const booking of stats.events) {
        const host = booking.attendees?.find((_) => _.email === booking.extension_data?.host_override || _.email === booking.host);
        if (!host)
          continue;
        const capacity = Math.max(booking.resources.reduce((c, s) => c + s.capacity, 0) || 1, 1);
        let details = list.find((_) => _.id?.toLowerCase() === host.email.toLowerCase());
        if (!details) {
          details = {
            id: host.email,
            name: host.name,
            entity: booking.extension_data?.host_entity,
            capacity,
            booking_count: 0,
            attendees: 0,
            avg_attendees: 0,
            no_shows: 0,
            occupancy: 0,
            total_time: 0
          };
          list.push(details);
        }
        if (booking.extension_data?.people_count?.max === 0) {
          details.no_shows += 1;
        }
        if (booking.extension_data.host_entity) {
          details.entity = booking.extension_data?.host_entity;
        }
        details.booking_count += 1;
        details.attendees += booking.attendees.length;
        details.total_time += booking.duration || 15;
      }
      for (const space of list) {
        space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
        space.occupancy = Math.floor(space.avg_attendees / space.capacity * 100) / 100;
        space.total_time = formatDuration({
          hours: Math.floor(space.total_time / 60),
          minutes: space.total_time % 60
        });
      }
      return list;
    }), shareReplay(1));
    this.download = () => __async(this, null, function* () {
      const data = yield this.user_list.pipe(take(1)).toPromise();
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy;
      }
      downloadFile("report-space-attendee-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportSpacesUserListingComponent.\u0275fac = function ReportSpacesUserListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesUserListingComponent)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportSpacesUserListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesUserListingComponent, selectors: [["report-spaces-user-listing"]], inputs: { print: "print" }, decls: 6, vars: 18, consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]], template: function ReportSpacesUserListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Meeting Organisers");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReportSpacesUserListingComponent_button_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.user_list)("columns", \u0275\u0275pureFunction6(11, _c62, \u0275\u0275pureFunction0(5, _c05), \u0275\u0275pureFunction0(6, _c14), \u0275\u0275pureFunction0(7, _c24), \u0275\u0275pureFunction0(8, _c34), \u0275\u0275pureFunction0(9, _c44), \u0275\u0275pureFunction0(10, _c52)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent] });
var ReportSpacesUserListingComponent = _ReportSpacesUserListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesUserListingComponent, { className: "ReportSpacesUserListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-entity-listing.component.ts
var _c06 = () => ({ key: "name", name: "Name" });
var _c15 = () => ({ key: "booking_count", name: "Bookings" });
var _c25 = () => ({ key: "avg_attendees", name: "Avg. Invitees per Booking" });
var _c35 = () => ({ key: "total_time", name: "Total Booked Time" });
var _c45 = () => ({ key: "no_shows", name: "No Shows" });
var _c53 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportSpacesEntityListingComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function ReportSpacesEntityListingComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
var _ReportSpacesEntityListingComponent = class _ReportSpacesEntityListingComponent {
  constructor(_reports) {
    this._reports = _reports;
    this.print = false;
    this.entity_list = combineLatest([this._reports.stats]).pipe(debounceTime(300), map(([stats]) => {
      let list = [];
      for (const booking of stats.events) {
        const entity = booking.extension_data?.visitor_entity;
        if (!entity)
          continue;
        const capacity = Math.max(booking.resources.reduce((c, s) => c + s.capacity, 0) || 1, 1);
        let details = list.find((_) => _.id?.toLowerCase() === entity.toLowerCase());
        if (!details) {
          details = {
            id: entity,
            name: entity,
            capacity,
            booking_count: 0,
            attendees: 0,
            avg_attendees: 0,
            no_shows: 0,
            occupancy: 0,
            total_time: 0
          };
          list.push(details);
        }
        if (booking.extension_data?.people_count?.max === 0) {
          details.no_shows += 1;
        }
        details.booking_count += 1;
        details.attendees += booking.attendees.length;
        details.total_time += booking.duration || 15;
      }
      for (const space of list) {
        space.avg_attendees = Math.floor(space.attendees / space.booking_count * 100) / 100;
        space.occupancy = Math.floor(space.avg_attendees / space.capacity * 100) / 100;
        space.total_time = formatDuration({
          hours: Math.floor(space.total_time / 60),
          minutes: space.total_time % 60
        });
      }
      return list;
    }), shareReplay(1));
    this.download = () => __async(this, null, function* () {
      const data = yield this.entity_list.pipe(take(1)).toPromise();
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy;
      }
      downloadFile("report-space-attendee-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportSpacesEntityListingComponent.\u0275fac = function ReportSpacesEntityListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesEntityListingComponent)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportSpacesEntityListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesEntityListingComponent, selectors: [["report-spaces-entity-listing"]], inputs: { print: "print" }, decls: 6, vars: 16, consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]], template: function ReportSpacesEntityListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Visitor Entities");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ReportSpacesEntityListingComponent_button_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.entity_list)("columns", \u0275\u0275pureFunction5(10, _c53, \u0275\u0275pureFunction0(5, _c06), \u0275\u0275pureFunction0(6, _c15), \u0275\u0275pureFunction0(7, _c25), \u0275\u0275pureFunction0(8, _c35), \u0275\u0275pureFunction0(9, _c45)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent] });
var ReportSpacesEntityListingComponent = _ReportSpacesEntityListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesEntityListingComponent, { className: "ReportSpacesEntityListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-entity-listing.component.ts", lineNumber: 38 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces.component.ts
var _c07 = ["report-spaces", ""];
function ReportSpacesComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "report-spaces-overall")(2, "report-spaces-overall-list", 10)(3, "report-spaces-space-listing", 10)(4, "report-spaces-user-listing", 10)(5, "report-spaces-entity-listing", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function ReportSpacesComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReportSpacesComponent_ng_container_12_ng_container_1_Template, 6, 4, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function ReportSpacesComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function ReportSpacesComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 13);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _ReportSpacesComponent = class _ReportSpacesComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this._state.setOptions({ type: "events" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const id_list = params.get("zones") || params.get("zone_ids");
        const zones = id_list.split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_ReportSpacesComponent.\u0275fac = function ReportSpacesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesComponent)(\u0275\u0275directiveInject(ReportsStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_ReportSpacesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesComponent, selectors: [["", "report-spaces", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c07, decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function ReportSpacesComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ReportSpacesComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function ReportSpacesComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function ReportSpacesComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Rooms Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ReportSpacesComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ReportSpacesComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ReportSpacesComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, ReportSpacesOverallComponent, ReportSpacesOverallListComponent, ReportSpacesSpaceListing, ReportSpacesUserListingComponent, ReportSpacesEntityListingComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */"] });
var ReportSpacesComponent = _ReportSpacesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesComponent, { className: "ReportSpacesComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces.component.ts", lineNumber: 77 });
})();

// apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts
var _c08 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c16 = () => ({ key: "approved", name: "Approved Bookings" });
var _c26 = () => ({ key: "count", name: "Total Requests" });
var _c36 = (a0) => ({ key: "utilisation", name: "Utilisation", content: a0 });
var _c46 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportDesksOverallListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ReportDesksOverallListComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ReportDesksOverallListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, data_r3, "mediumDate"));
  }
}
function ReportDesksOverallListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r4 || "0", "%");
  }
}
var _ReportDesksOverallListComponent = class _ReportDesksOverallListComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.day_list = this._state.day_list;
    this.download = () => __async(this, null, function* () {
      let data = yield this.day_list.pipe(take(1)).toPromise();
      data = data.map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMMM d, y(EEE)")
      }));
      downloadFile("desks-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportDesksOverallListComponent.\u0275fac = function ReportDesksOverallListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksOverallListComponent)(\u0275\u0275directiveInject(ReportsStateService));
};
_ReportDesksOverallListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksOverallListComponent, selectors: [["report-desks-overall-list"]], inputs: { print: "print" }, decls: 11, vars: 16, consts: [["date_template", ""], ["percent_template", ""], [1, "pb-2", "w-full"], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], [1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function ReportDesksOverallListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
    \u0275\u0275text(4, "Daily Utilisation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReportDesksOverallListComponent_button_5_Template, 3, 0, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 7);
    \u0275\u0275template(7, ReportDesksOverallListComponent_ng_template_7_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ReportDesksOverallListComponent_ng_template_9_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(8);
    const percent_template_r6 = \u0275\u0275reference(10);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.day_list)("columns", \u0275\u0275pureFunction4(11, _c46, \u0275\u0275pureFunction1(5, _c08, date_template_r5), \u0275\u0275pureFunction0(7, _c16), \u0275\u0275pureFunction0(8, _c26), \u0275\u0275pureFunction1(9, _c36, percent_template_r6)))("page_size", ctx.print ? 0 : 10)("sortable", true);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe], encapsulation: 2 });
var ReportDesksOverallListComponent = _ReportDesksOverallListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksOverallListComponent, { className: "ReportDesksOverallListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts", lineNumber: 48 });
})();

// apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts
var _c09 = () => ({ key: "name", name: "Level" });
var _c17 = () => ({ key: "avg_usage", name: "Avg. Used Desks" });
var _c27 = () => ({ key: "approved", name: "Approved Bookings" });
var _c37 = () => ({ key: "count", name: "Total Requests" });
var _c47 = (a0) => ({ key: "utilisation", name: "Utilisation", content: a0 });
var _c54 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportDesksLevelListComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ReportDesksLevelListComponent_button_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ReportDesksLevelListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", data_r3 || "0", "%");
  }
}
var _ReportDesksLevelListComponent = class _ReportDesksLevelListComponent {
  constructor(_state, _org, _settings) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.print = false;
    this.level_list = combineLatest([
      this._state.options,
      this._state.stats,
      this._state.counts
    ]).pipe(map(([options, stats, counts]) => {
      let { start, end, zones } = options;
      const duration = differenceInDays(end, start) || 1;
      if (!zones.length) {
        zones = this._settings.get("app.use_region") ? this._org.levelsForRegion().map((_) => _.id) : this._org.levelsForBuilding().map((_) => _.id);
      }
      const levels = [];
      for (const zone of zones) {
        if (zone === "All")
          continue;
        const lvl = this._org.levelWithID([zone]);
        const count = counts[zone] || 0;
        const events = stats.events.filter((bkn) => bkn.zones.includes(zone));
        let free = (count * duration - events.length) / duration;
        if (free % 1 !== 0) {
          free = free.toFixed(2);
        }
        levels.push({
          name: lvl?.display_name || lvl?.name,
          free,
          approved: events.filter((_) => _.approved).length || 0,
          avg_usage: (events.length / duration || 0).toFixed(2),
          total: count,
          count: events.length,
          utilisation: (events.length / ((count || 1) * duration) * 100 || 0).toFixed(2)
        });
      }
      return levels;
    }), shareReplay(1));
    this.download = () => __async(this, null, function* () {
      let data = yield this.level_list.pipe(take(1)).toPromise();
      downloadFile("desks-levels-usage.csv", jsonToCsv(data));
    });
  }
};
_ReportDesksLevelListComponent.\u0275fac = function ReportDesksLevelListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksLevelListComponent)(\u0275\u0275directiveInject(ReportsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_ReportDesksLevelListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksLevelListComponent, selectors: [["report-desks-levels-list"]], inputs: { print: "print" }, decls: 9, vars: 17, consts: [["percent_view", ""], [1, "px-4", "pb-2", "w-full"], [1, "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden", "w-full"], [1, "border-b", "border-base-200", "p-4", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], [1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function ReportDesksLevelListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4, "Level Utilisation");
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ReportDesksLevelListComponent_button_5_Template, 3, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 6);
    \u0275\u0275template(7, ReportDesksLevelListComponent_ng_template_7_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const percent_view_r4 = \u0275\u0275reference(8);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.level_list)("columns", \u0275\u0275pureFunction5(11, _c54, \u0275\u0275pureFunction0(5, _c09), \u0275\u0275pureFunction0(6, _c17), \u0275\u0275pureFunction0(7, _c27), \u0275\u0275pureFunction0(8, _c37), \u0275\u0275pureFunction1(9, _c47, percent_view_r4)))("page_size", ctx.print ? 0 : 10)("sortable", true);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent], encapsulation: 2 });
var ReportDesksLevelListComponent = _ReportDesksLevelListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksLevelListComponent, { className: "ReportDesksLevelListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts", lineNumber: 48 });
})();

// node_modules/chartist/dist/index.js
var namespaces = {
  svg: "http://www.w3.org/2000/svg",
  xmlns: "http://www.w3.org/2000/xmlns/",
  xhtml: "http://www.w3.org/1999/xhtml",
  xlink: "http://www.w3.org/1999/xlink",
  ct: "http://gionkunz.github.com/chartist-js/ct"
};
var precision = 8;
var escapingMap = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#039;"
};
function ensureUnit(value, unit) {
  if (typeof value === "number") {
    return value + unit;
  }
  return value;
}
function quantity(input) {
  if (typeof input === "string") {
    const match = /^(\d+)\s*(.*)$/g.exec(input);
    return {
      value: match ? +match[1] : 0,
      unit: (match === null || match === void 0 ? void 0 : match[2]) || void 0
    };
  }
  return {
    value: Number(input)
  };
}
function alphaNumerate(n) {
  return String.fromCharCode(97 + n % 26);
}
var EPSILON = 2221e-19;
function orderOfMagnitude(value) {
  return Math.floor(Math.log(Math.abs(value)) / Math.LN10);
}
function projectLength(axisLength, length, bounds) {
  return length / bounds.range * axisLength;
}
function roundWithPrecision(value, digits) {
  const precision$1 = Math.pow(10, digits || precision);
  return Math.round(value * precision$1) / precision$1;
}
function rho(num) {
  if (num === 1) {
    return num;
  }
  function gcd(p, q) {
    if (p % q === 0) {
      return q;
    } else {
      return gcd(q, p % q);
    }
  }
  function f(x) {
    return x * x + 1;
  }
  let x1 = 2;
  let x2 = 2;
  let divisor;
  if (num % 2 === 0) {
    return 2;
  }
  do {
    x1 = f(x1) % num;
    x2 = f(f(x2)) % num;
    divisor = gcd(Math.abs(x1 - x2), num);
  } while (divisor === 1);
  return divisor;
}
function polarToCartesian(centerX, centerY, radius, angleInDegrees) {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180;
  return {
    x: centerX + radius * Math.cos(angleInRadians),
    y: centerY + radius * Math.sin(angleInRadians)
  };
}
function getBounds(axisLength, highLow, scaleMinSpace) {
  let onlyInteger = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
  const bounds = {
    high: highLow.high,
    low: highLow.low,
    valueRange: 0,
    oom: 0,
    step: 0,
    min: 0,
    max: 0,
    range: 0,
    numberOfSteps: 0,
    values: []
  };
  bounds.valueRange = bounds.high - bounds.low;
  bounds.oom = orderOfMagnitude(bounds.valueRange);
  bounds.step = Math.pow(10, bounds.oom);
  bounds.min = Math.floor(bounds.low / bounds.step) * bounds.step;
  bounds.max = Math.ceil(bounds.high / bounds.step) * bounds.step;
  bounds.range = bounds.max - bounds.min;
  bounds.numberOfSteps = Math.round(bounds.range / bounds.step);
  const length = projectLength(axisLength, bounds.step, bounds);
  const scaleUp = length < scaleMinSpace;
  const smallestFactor = onlyInteger ? rho(bounds.range) : 0;
  if (onlyInteger && projectLength(axisLength, 1, bounds) >= scaleMinSpace) {
    bounds.step = 1;
  } else if (onlyInteger && smallestFactor < bounds.step && projectLength(axisLength, smallestFactor, bounds) >= scaleMinSpace) {
    bounds.step = smallestFactor;
  } else {
    let optimizationCounter = 0;
    for (; ; ) {
      if (scaleUp && projectLength(axisLength, bounds.step, bounds) <= scaleMinSpace) {
        bounds.step *= 2;
      } else if (!scaleUp && projectLength(axisLength, bounds.step / 2, bounds) >= scaleMinSpace) {
        bounds.step /= 2;
        if (onlyInteger && bounds.step % 1 !== 0) {
          bounds.step *= 2;
          break;
        }
      } else {
        break;
      }
      if (optimizationCounter++ > 1e3) {
        throw new Error("Exceeded maximum number of iterations while optimizing scale step!");
      }
    }
  }
  bounds.step = Math.max(bounds.step, EPSILON);
  function safeIncrement(value, increment) {
    if (value === (value += increment)) {
      value *= 1 + (increment > 0 ? EPSILON : -EPSILON);
    }
    return value;
  }
  let newMin = bounds.min;
  let newMax = bounds.max;
  while (newMin + bounds.step <= bounds.low) {
    newMin = safeIncrement(newMin, bounds.step);
  }
  while (newMax - bounds.step >= bounds.high) {
    newMax = safeIncrement(newMax, -bounds.step);
  }
  bounds.min = newMin;
  bounds.max = newMax;
  bounds.range = bounds.max - bounds.min;
  const values = [];
  for (let i = bounds.min; i <= bounds.max; i = safeIncrement(i, bounds.step)) {
    const value = roundWithPrecision(i);
    if (value !== values[values.length - 1]) {
      values.push(value);
    }
  }
  bounds.values = values;
  return bounds;
}
function extend() {
  let target = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  for (var _len = arguments.length, sources = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    sources[_key - 1] = arguments[_key];
  }
  for (let i = 0; i < sources.length; i++) {
    const source = sources[i];
    for (const prop in source) {
      const sourceProp = source[prop];
      if (typeof sourceProp === "object" && sourceProp !== null && !(sourceProp instanceof Array)) {
        target[prop] = extend(target[prop], sourceProp);
      } else {
        target[prop] = sourceProp;
      }
    }
  }
  return target;
}
var noop = (n) => n;
function times(length, filler) {
  return Array.from({
    length
  }, filler ? (_, i) => filler(i) : () => void 0);
}
var sum = (previous, current) => previous + (current ? current : 0);
function safeHasProperty(target, property) {
  return target !== null && typeof target === "object" && Reflect.has(target, property);
}
function isNumeric(value) {
  return value !== null && isFinite(value);
}
function isFalseyButZero(value) {
  return !value && value !== 0;
}
function getNumberOrUndefined(value) {
  return isNumeric(value) ? Number(value) : void 0;
}
function isArrayOfArrays(data) {
  if (!Array.isArray(data)) {
    return false;
  }
  return data.every(Array.isArray);
}
function each(list, callback) {
  let reverse = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  let index = 0;
  list[reverse ? "reduceRight" : "reduce"]((_, item, itemIndex) => callback(item, index++, itemIndex), void 0);
}
function getMetaData(seriesData, index) {
  const value = Array.isArray(seriesData) ? seriesData[index] : safeHasProperty(seriesData, "data") ? seriesData.data[index] : null;
  return safeHasProperty(value, "meta") ? value.meta : void 0;
}
function isDataHoleValue(value) {
  return value === null || value === void 0 || typeof value === "number" && isNaN(value);
}
function isArrayOfSeries(value) {
  return Array.isArray(value) && value.every((_) => Array.isArray(_) || safeHasProperty(_, "data"));
}
function isMultiValue(value) {
  return typeof value === "object" && value !== null && (Reflect.has(value, "x") || Reflect.has(value, "y"));
}
function getMultiValue(value) {
  let dimension = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "y";
  if (isMultiValue(value) && safeHasProperty(value, dimension)) {
    return getNumberOrUndefined(value[dimension]);
  } else {
    return getNumberOrUndefined(value);
  }
}
function getHighLow(data, options, dimension) {
  options = __spreadValues(__spreadValues({}, options), dimension ? dimension === "x" ? options.axisX : options.axisY : {});
  const highLow = {
    high: options.high === void 0 ? -Number.MAX_VALUE : +options.high,
    low: options.low === void 0 ? Number.MAX_VALUE : +options.low
  };
  const findHigh = options.high === void 0;
  const findLow = options.low === void 0;
  function recursiveHighLow(sourceData) {
    if (isDataHoleValue(sourceData)) {
      return;
    } else if (Array.isArray(sourceData)) {
      for (let i = 0; i < sourceData.length; i++) {
        recursiveHighLow(sourceData[i]);
      }
    } else {
      const value = Number(dimension && safeHasProperty(sourceData, dimension) ? sourceData[dimension] : sourceData);
      if (findHigh && value > highLow.high) {
        highLow.high = value;
      }
      if (findLow && value < highLow.low) {
        highLow.low = value;
      }
    }
  }
  if (findHigh || findLow) {
    recursiveHighLow(data);
  }
  if (options.referenceValue || options.referenceValue === 0) {
    highLow.high = Math.max(options.referenceValue, highLow.high);
    highLow.low = Math.min(options.referenceValue, highLow.low);
  }
  if (highLow.high <= highLow.low) {
    if (highLow.low === 0) {
      highLow.high = 1;
    } else if (highLow.low < 0) {
      highLow.high = 0;
    } else if (highLow.high > 0) {
      highLow.low = 0;
    } else {
      highLow.high = 1;
      highLow.low = 0;
    }
  }
  return highLow;
}
function normalizeData(data) {
  let reverse = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, multi = arguments.length > 2 ? arguments[2] : void 0, distributed = arguments.length > 3 ? arguments[3] : void 0;
  let labelCount;
  const normalized = {
    labels: (data.labels || []).slice(),
    series: normalizeSeries(data.series, multi, distributed)
  };
  const inputLabelCount = normalized.labels.length;
  if (isArrayOfArrays(normalized.series)) {
    labelCount = Math.max(inputLabelCount, ...normalized.series.map((series) => series.length));
    normalized.series.forEach((series) => {
      series.push(...times(Math.max(0, labelCount - series.length)));
    });
  } else {
    labelCount = normalized.series.length;
  }
  normalized.labels.push(...times(Math.max(0, labelCount - inputLabelCount), () => ""));
  if (reverse) {
    reverseData(normalized);
  }
  return normalized;
}
function reverseData(data) {
  var ref;
  (ref = data.labels) === null || ref === void 0 ? void 0 : ref.reverse();
  data.series.reverse();
  for (const series of data.series) {
    if (safeHasProperty(series, "data")) {
      series.data.reverse();
    } else if (Array.isArray(series)) {
      series.reverse();
    }
  }
}
function normalizeMulti(value, multi) {
  let x;
  let y;
  if (typeof value !== "object") {
    const num = getNumberOrUndefined(value);
    if (multi === "x") {
      x = num;
    } else {
      y = num;
    }
  } else {
    if (safeHasProperty(value, "x")) {
      x = getNumberOrUndefined(value.x);
    }
    if (safeHasProperty(value, "y")) {
      y = getNumberOrUndefined(value.y);
    }
  }
  if (x === void 0 && y === void 0) {
    return void 0;
  }
  return {
    x,
    y
  };
}
function normalizePrimitive(value, multi) {
  if (isDataHoleValue(value)) {
    return void 0;
  }
  if (multi) {
    return normalizeMulti(value, multi);
  }
  return getNumberOrUndefined(value);
}
function normalizeSingleSeries(series, multi) {
  if (!Array.isArray(series)) {
    return normalizeSingleSeries(series.data, multi);
  }
  return series.map((value) => {
    if (safeHasProperty(value, "value")) {
      return normalizePrimitive(value.value, multi);
    }
    return normalizePrimitive(value, multi);
  });
}
function normalizeSeries(series, multi, distributed) {
  if (isArrayOfSeries(series)) {
    return series.map((_) => normalizeSingleSeries(_, multi));
  }
  const normalizedSeries = normalizeSingleSeries(series, multi);
  if (distributed) {
    return normalizedSeries.map((value) => [value]);
  }
  return normalizedSeries;
}
function splitIntoSegments(pathCoordinates, valueData, options) {
  const finalOptions = __spreadValues({
    increasingX: false,
    fillHoles: false
  }, options);
  const segments = [];
  let hole = true;
  for (let i = 0; i < pathCoordinates.length; i += 2) {
    if (getMultiValue(valueData[i / 2].value) === void 0) {
      if (!finalOptions.fillHoles) {
        hole = true;
      }
    } else {
      if (finalOptions.increasingX && i >= 2 && pathCoordinates[i] <= pathCoordinates[i - 2]) {
        hole = true;
      }
      if (hole) {
        segments.push({
          pathCoordinates: [],
          valueData: []
        });
        hole = false;
      }
      segments[segments.length - 1].pathCoordinates.push(pathCoordinates[i], pathCoordinates[i + 1]);
      segments[segments.length - 1].valueData.push(valueData[i / 2]);
    }
  }
  return segments;
}
function serialize(data) {
  let serialized = "";
  if (data === null || data === void 0) {
    return data;
  } else if (typeof data === "number") {
    serialized = "" + data;
  } else if (typeof data === "object") {
    serialized = JSON.stringify({
      data
    });
  } else {
    serialized = String(data);
  }
  return Object.keys(escapingMap).reduce((result, key) => result.replaceAll(key, escapingMap[key]), serialized);
}
var SvgList = class {
  call(method, args) {
    this.svgElements.forEach((element2) => Reflect.apply(element2[method], element2, args));
    return this;
  }
  attr() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("attr", args);
  }
  elem() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("elem", args);
  }
  root() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("root", args);
  }
  getNode() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("getNode", args);
  }
  foreignObject() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("foreignObject", args);
  }
  text() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("text", args);
  }
  empty() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("empty", args);
  }
  remove() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("remove", args);
  }
  addClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("addClass", args);
  }
  removeClass() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeClass", args);
  }
  removeAllClasses() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("removeAllClasses", args);
  }
  animate() {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    return this.call("animate", args);
  }
  /**
  * @param nodeList An Array of SVG DOM nodes or a SVG DOM NodeList (as returned by document.querySelectorAll)
  */
  constructor(nodeList) {
    this.svgElements = [];
    for (let i = 0; i < nodeList.length; i++) {
      this.svgElements.push(new Svg(nodeList[i]));
    }
  }
};
var easings = {
  easeInSine: [0.47, 0, 0.745, 0.715],
  easeOutSine: [0.39, 0.575, 0.565, 1],
  easeInOutSine: [0.445, 0.05, 0.55, 0.95],
  easeInQuad: [0.55, 0.085, 0.68, 0.53],
  easeOutQuad: [0.25, 0.46, 0.45, 0.94],
  easeInOutQuad: [0.455, 0.03, 0.515, 0.955],
  easeInCubic: [0.55, 0.055, 0.675, 0.19],
  easeOutCubic: [0.215, 0.61, 0.355, 1],
  easeInOutCubic: [0.645, 0.045, 0.355, 1],
  easeInQuart: [0.895, 0.03, 0.685, 0.22],
  easeOutQuart: [0.165, 0.84, 0.44, 1],
  easeInOutQuart: [0.77, 0, 0.175, 1],
  easeInQuint: [0.755, 0.05, 0.855, 0.06],
  easeOutQuint: [0.23, 1, 0.32, 1],
  easeInOutQuint: [0.86, 0, 0.07, 1],
  easeInExpo: [0.95, 0.05, 0.795, 0.035],
  easeOutExpo: [0.19, 1, 0.22, 1],
  easeInOutExpo: [1, 0, 0, 1],
  easeInCirc: [0.6, 0.04, 0.98, 0.335],
  easeOutCirc: [0.075, 0.82, 0.165, 1],
  easeInOutCirc: [0.785, 0.135, 0.15, 0.86],
  easeInBack: [0.6, -0.28, 0.735, 0.045],
  easeOutBack: [0.175, 0.885, 0.32, 1.275],
  easeInOutBack: [0.68, -0.55, 0.265, 1.55]
};
function createAnimation(element2, attribute, animationDefinition) {
  let createGuided = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, eventEmitter = arguments.length > 4 ? arguments[4] : void 0;
  const _a = animationDefinition, {
    easing
  } = _a, def = __objRest(_a, [
    "easing"
  ]);
  const attributeProperties = {};
  let animationEasing;
  let timeout;
  if (easing) {
    animationEasing = Array.isArray(easing) ? easing : easings[easing];
  }
  def.begin = ensureUnit(def.begin, "ms");
  def.dur = ensureUnit(def.dur, "ms");
  if (animationEasing) {
    def.calcMode = "spline";
    def.keySplines = animationEasing.join(" ");
    def.keyTimes = "0;1";
  }
  if (createGuided) {
    def.fill = "freeze";
    attributeProperties[attribute] = def.from;
    element2.attr(attributeProperties);
    timeout = quantity(def.begin || 0).value;
    def.begin = "indefinite";
  }
  const animate = element2.elem("animate", __spreadValues({
    attributeName: attribute
  }, def));
  if (createGuided) {
    setTimeout(() => {
      try {
        animate._node.beginElement();
      } catch (err) {
        attributeProperties[attribute] = def.to;
        element2.attr(attributeProperties);
        animate.remove();
      }
    }, timeout);
  }
  const animateNode = animate.getNode();
  if (eventEmitter) {
    animateNode.addEventListener("beginEvent", () => eventEmitter.emit("animationBegin", {
      element: element2,
      animate: animateNode,
      params: animationDefinition
    }));
  }
  animateNode.addEventListener("endEvent", () => {
    if (eventEmitter) {
      eventEmitter.emit("animationEnd", {
        element: element2,
        animate: animateNode,
        params: animationDefinition
      });
    }
    if (createGuided) {
      attributeProperties[attribute] = def.to;
      element2.attr(attributeProperties);
      animate.remove();
    }
  });
}
var Svg = class _Svg {
  attr(attributes, ns) {
    if (typeof attributes === "string") {
      if (ns) {
        return this._node.getAttributeNS(ns, attributes);
      } else {
        return this._node.getAttribute(attributes);
      }
    }
    Object.keys(attributes).forEach((key) => {
      if (attributes[key] === void 0) {
        return;
      }
      if (key.indexOf(":") !== -1) {
        const namespacedAttribute = key.split(":");
        this._node.setAttributeNS(namespaces[namespacedAttribute[0]], key, String(attributes[key]));
      } else {
        this._node.setAttribute(key, String(attributes[key]));
      }
    });
    return this;
  }
  /**
  * Create a new SVG element whose wrapper object will be selected for further operations. This way you can also create nested groups easily.
  * @param name The name of the SVG element that should be created as child element of the currently selected element wrapper
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  * @return Returns a Svg wrapper object that can be used to modify the containing SVG data
  */
  elem(name, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    return new _Svg(name, attributes, className, this, insertFirst);
  }
  /**
  * Returns the parent Chartist.SVG wrapper object
  * @return Returns a Svg wrapper around the parent node of the current node. If the parent node is not existing or it's not an SVG node then this function will return null.
  */
  parent() {
    return this._node.parentNode instanceof SVGElement ? new _Svg(this._node.parentNode) : null;
  }
  /**
  * This method returns a Svg wrapper around the root SVG element of the current tree.
  * @return The root SVG element wrapped in a Svg element
  */
  root() {
    let node = this._node;
    while (node.nodeName !== "svg") {
      if (node.parentElement) {
        node = node.parentElement;
      } else {
        break;
      }
    }
    return new _Svg(node);
  }
  /**
  * Find the first child SVG element of the current element that matches a CSS selector. The returned object is a Svg wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper for the element found or null if no element was found
  */
  querySelector(selector) {
    const foundNode = this._node.querySelector(selector);
    return foundNode ? new _Svg(foundNode) : null;
  }
  /**
  * Find the all child SVG elements of the current element that match a CSS selector. The returned object is a Svg.List wrapper.
  * @param selector A CSS selector that is used to query for child SVG elements
  * @return The SVG wrapper list for the element found or null if no element was found
  */
  querySelectorAll(selector) {
    const foundNodes = this._node.querySelectorAll(selector);
    return new SvgList(foundNodes);
  }
  /**
  * Returns the underlying SVG node for the current element.
  */
  getNode() {
    return this._node;
  }
  /**
  * This method creates a foreignObject (see https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject) that allows to embed HTML content into a SVG graphic. With the help of foreignObjects you can enable the usage of regular HTML elements inside of SVG where they are subject for SVG positioning and transformation but the Browser will use the HTML rendering capabilities for the containing DOM.
  * @param content The DOM Node, or HTML string that will be converted to a DOM Node, that is then placed into and wrapped by the foreignObject
  * @param attributes An object with properties that will be added as attributes to the foreignObject element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param insertFirst Specifies if the foreignObject should be inserted as first child
  * @return New wrapper object that wraps the foreignObject element
  */
  foreignObject(content, attributes, className) {
    let insertFirst = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false;
    let contentNode;
    if (typeof content === "string") {
      const container = document.createElement("div");
      container.innerHTML = content;
      contentNode = container.firstChild;
    } else {
      contentNode = content;
    }
    if (contentNode instanceof Element) {
      contentNode.setAttribute("xmlns", namespaces.xmlns);
    }
    const fnObj = this.elem("foreignObject", attributes, className, insertFirst);
    fnObj._node.appendChild(contentNode);
    return fnObj;
  }
  /**
  * This method adds a new text element to the current Svg wrapper.
  * @param t The text that should be added to the text element that is created
  * @return The same wrapper object that was used to add the newly created element
  */
  text(t) {
    this._node.appendChild(document.createTextNode(t));
    return this;
  }
  /**
  * This method will clear all child nodes of the current wrapper object.
  * @return The same wrapper object that got emptied
  */
  empty() {
    while (this._node.firstChild) {
      this._node.removeChild(this._node.firstChild);
    }
    return this;
  }
  /**
  * This method will cause the current wrapper to remove itself from its parent wrapper. Use this method if you'd like to get rid of an element in a given DOM structure.
  * @return The parent wrapper object of the element that got removed
  */
  remove() {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.removeChild(this._node);
    return this.parent();
  }
  /**
  * This method will replace the element with a new element that can be created outside of the current DOM.
  * @param newElement The new Svg object that will be used to replace the current wrapper object
  * @return The wrapper of the new element
  */
  replace(newElement) {
    var ref;
    (ref = this._node.parentNode) === null || ref === void 0 ? void 0 : ref.replaceChild(newElement._node, this._node);
    return newElement;
  }
  /**
  * This method will append an element to the current element as a child.
  * @param element The Svg element that should be added as a child
  * @param insertFirst Specifies if the element should be inserted as first child
  * @return The wrapper of the appended object
  */
  append(element2) {
    let insertFirst = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
    if (insertFirst && this._node.firstChild) {
      this._node.insertBefore(element2._node, this._node.firstChild);
    } else {
      this._node.appendChild(element2._node);
    }
    return this;
  }
  /**
  * Returns an array of class names that are attached to the current wrapper element. This method can not be chained further.
  * @return A list of classes or an empty array if there are no classes on the current element
  */
  classes() {
    const classNames = this._node.getAttribute("class");
    return classNames ? classNames.trim().split(/\s+/) : [];
  }
  /**
  * Adds one or a space separated list of classes to the current element and ensures the classes are only existing once.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  addClass(names) {
    this._node.setAttribute("class", this.classes().concat(names.trim().split(/\s+/)).filter(function(elem, pos, self) {
      return self.indexOf(elem) === pos;
    }).join(" "));
    return this;
  }
  /**
  * Removes one or a space separated list of classes from the current element.
  * @param names A white space separated list of class names
  * @return The wrapper of the current element
  */
  removeClass(names) {
    const removedClasses = names.trim().split(/\s+/);
    this._node.setAttribute("class", this.classes().filter((name) => removedClasses.indexOf(name) === -1).join(" "));
    return this;
  }
  /**
  * Removes all classes from the current element.
  * @return The wrapper of the current element
  */
  removeAllClasses() {
    this._node.setAttribute("class", "");
    return this;
  }
  /**
  * Get element height using `getBoundingClientRect`
  * @return The elements height in pixels
  */
  height() {
    return this._node.getBoundingClientRect().height;
  }
  /**
  * Get element width using `getBoundingClientRect`
  * @return The elements width in pixels
  */
  width() {
    return this._node.getBoundingClientRect().width;
  }
  /**
  * The animate function lets you animate the current element with SMIL animations. You can add animations for multiple attributes at the same time by using an animation definition object. This object should contain SMIL animation attributes. Please refer to http://www.w3.org/TR/SVG/animate.html for a detailed specification about the available animation attributes. Additionally an easing property can be passed in the animation definition object. This can be a string with a name of an easing function in `Svg.Easing` or an array with four numbers specifying a cubic Bézier curve.
  * **An animations object could look like this:**
  * ```javascript
  * element.animate({
  *   opacity: {
  *     dur: 1000,
  *     from: 0,
  *     to: 1
  *   },
  *   x1: {
  *     dur: '1000ms',
  *     from: 100,
  *     to: 200,
  *     easing: 'easeOutQuart'
  *   },
  *   y1: {
  *     dur: '2s',
  *     from: 0,
  *     to: 100
  *   }
  * });
  * ```
  * **Automatic unit conversion**
  * For the `dur` and the `begin` animate attribute you can also omit a unit by passing a number. The number will automatically be converted to milli seconds.
  * **Guided mode**
  * The default behavior of SMIL animations with offset using the `begin` attribute is that the attribute will keep it's original value until the animation starts. Mostly this behavior is not desired as you'd like to have your element attributes already initialized with the animation `from` value even before the animation starts. Also if you don't specify `fill="freeze"` on an animate element or if you delete the animation after it's done (which is done in guided mode) the attribute will switch back to the initial value. This behavior is also not desired when performing simple one-time animations. For one-time animations you'd want to trigger animations immediately instead of relative to the document begin time. That's why in guided mode Svg will also use the `begin` property to schedule a timeout and manually start the animation after the timeout. If you're using multiple SMIL definition objects for an attribute (in an array), guided mode will be disabled for this attribute, even if you explicitly enabled it.
  * If guided mode is enabled the following behavior is added:
  * - Before the animation starts (even when delayed with `begin`) the animated attribute will be set already to the `from` value of the animation
  * - `begin` is explicitly set to `indefinite` so it can be started manually without relying on document begin time (creation)
  * - The animate element will be forced to use `fill="freeze"`
  * - The animation will be triggered with `beginElement()` in a timeout where `begin` of the definition object is interpreted in milli seconds. If no `begin` was specified the timeout is triggered immediately.
  * - After the animation the element attribute value will be set to the `to` value of the animation
  * - The animate element is deleted from the DOM
  * @param animations An animations object where the property keys are the attributes you'd like to animate. The properties should be objects again that contain the SMIL animation attributes (usually begin, dur, from, and to). The property begin and dur is auto converted (see Automatic unit conversion). You can also schedule multiple animations for the same attribute by passing an Array of SMIL definition objects. Attributes that contain an array of SMIL definition objects will not be executed in guided mode.
  * @param guided Specify if guided mode should be activated for this animation (see Guided mode). If not otherwise specified, guided mode will be activated.
  * @param eventEmitter If specified, this event emitter will be notified when an animation starts or ends.
  * @return The current element where the animation was added
  */
  animate(animations) {
    let guided = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : true, eventEmitter = arguments.length > 2 ? arguments[2] : void 0;
    Object.keys(animations).forEach((attribute) => {
      const attributeAnimation = animations[attribute];
      if (Array.isArray(attributeAnimation)) {
        attributeAnimation.forEach((animationDefinition) => createAnimation(this, attribute, animationDefinition, false, eventEmitter));
      } else {
        createAnimation(this, attribute, attributeAnimation, guided, eventEmitter);
      }
    });
    return this;
  }
  /**
  * @param name The name of the SVG element to create or an SVG dom element which should be wrapped into Svg
  * @param attributes An object with properties that will be added as attributes to the SVG element that is created. Attributes with undefined values will not be added.
  * @param className This class or class list will be added to the SVG element
  * @param parent The parent SVG wrapper object where this newly created wrapper and it's element will be attached to as child
  * @param insertFirst If this param is set to true in conjunction with a parent element the newly created element will be added as first child element in the parent element
  */
  constructor(name, attributes, className, parent, insertFirst = false) {
    if (name instanceof Element) {
      this._node = name;
    } else {
      this._node = document.createElementNS(namespaces.svg, name);
      if (name === "svg") {
        this.attr({
          "xmlns:ct": namespaces.ct
        });
      }
    }
    if (attributes) {
      this.attr(attributes);
    }
    if (className) {
      this.addClass(className);
    }
    if (parent) {
      if (insertFirst && parent._node.firstChild) {
        parent._node.insertBefore(this._node, parent._node.firstChild);
      } else {
        parent._node.appendChild(this._node);
      }
    }
  }
};
Svg.Easing = easings;
function createSvg(container) {
  let width = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "100%", height = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "100%", className = arguments.length > 3 ? arguments[3] : void 0;
  Array.from(container.querySelectorAll("svg")).filter((svg) => svg.getAttributeNS(namespaces.xmlns, "ct")).forEach((svg) => container.removeChild(svg));
  const svg1 = new Svg("svg").attr({
    width,
    height
  }).attr({
    // TODO: Check better solution (browser support) and remove inline styles due to CSP
    style: "width: ".concat(width, "; height: ").concat(height, ";")
  });
  if (className) {
    svg1.addClass(className);
  }
  container.appendChild(svg1.getNode());
  return svg1;
}
function normalizePadding(padding) {
  return typeof padding === "number" ? {
    top: padding,
    right: padding,
    bottom: padding,
    left: padding
  } : padding === void 0 ? {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  } : {
    top: typeof padding.top === "number" ? padding.top : 0,
    right: typeof padding.right === "number" ? padding.right : 0,
    bottom: typeof padding.bottom === "number" ? padding.bottom : 0,
    left: typeof padding.left === "number" ? padding.left : 0
  };
}
function createChartRect(svg, options) {
  var ref, ref1, ref2, ref3;
  const hasAxis = Boolean(options.axisX || options.axisY);
  const yAxisOffset = ((ref = options.axisY) === null || ref === void 0 ? void 0 : ref.offset) || 0;
  const xAxisOffset = ((ref1 = options.axisX) === null || ref1 === void 0 ? void 0 : ref1.offset) || 0;
  const yAxisPosition = (ref2 = options.axisY) === null || ref2 === void 0 ? void 0 : ref2.position;
  const xAxisPosition = (ref3 = options.axisX) === null || ref3 === void 0 ? void 0 : ref3.position;
  let width = svg.width() || quantity(options.width).value || 0;
  let height = svg.height() || quantity(options.height).value || 0;
  const normalizedPadding = normalizePadding(options.chartPadding);
  width = Math.max(width, yAxisOffset + normalizedPadding.left + normalizedPadding.right);
  height = Math.max(height, xAxisOffset + normalizedPadding.top + normalizedPadding.bottom);
  const chartRect = {
    x1: 0,
    x2: 0,
    y1: 0,
    y2: 0,
    padding: normalizedPadding,
    width() {
      return this.x2 - this.x1;
    },
    height() {
      return this.y1 - this.y2;
    }
  };
  if (hasAxis) {
    if (xAxisPosition === "start") {
      chartRect.y2 = normalizedPadding.top + xAxisOffset;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
    } else {
      chartRect.y2 = normalizedPadding.top;
      chartRect.y1 = Math.max(height - normalizedPadding.bottom - xAxisOffset, chartRect.y2 + 1);
    }
    if (yAxisPosition === "start") {
      chartRect.x1 = normalizedPadding.left + yAxisOffset;
      chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    } else {
      chartRect.x1 = normalizedPadding.left;
      chartRect.x2 = Math.max(width - normalizedPadding.right - yAxisOffset, chartRect.x1 + 1);
    }
  } else {
    chartRect.x1 = normalizedPadding.left;
    chartRect.x2 = Math.max(width - normalizedPadding.right, chartRect.x1 + 1);
    chartRect.y2 = normalizedPadding.top;
    chartRect.y1 = Math.max(height - normalizedPadding.bottom, chartRect.y2 + 1);
  }
  return chartRect;
}
function createGrid(position, index, axis, offset, length, group, classes, eventEmitter) {
  const positionalData = {
    ["".concat(axis.units.pos, "1")]: position,
    ["".concat(axis.units.pos, "2")]: position,
    ["".concat(axis.counterUnits.pos, "1")]: offset,
    ["".concat(axis.counterUnits.pos, "2")]: offset + length
  };
  const gridElement = group.elem("line", positionalData, classes.join(" "));
  eventEmitter.emit("draw", __spreadValues({
    type: "grid",
    axis,
    index,
    group,
    element: gridElement
  }, positionalData));
}
function createGridBackground(gridGroup, chartRect, className, eventEmitter) {
  const gridBackground = gridGroup.elem("rect", {
    x: chartRect.x1,
    y: chartRect.y2,
    width: chartRect.width(),
    height: chartRect.height()
  }, className, true);
  eventEmitter.emit("draw", {
    type: "gridBackground",
    group: gridGroup,
    element: gridBackground
  });
}
function createLabel(position, length, index, label, axis, axisOffset, labelOffset, group, classes, eventEmitter) {
  const positionalData = {
    [axis.units.pos]: position + labelOffset[axis.units.pos],
    [axis.counterUnits.pos]: labelOffset[axis.counterUnits.pos],
    [axis.units.len]: length,
    [axis.counterUnits.len]: Math.max(0, axisOffset - 10)
  };
  const stepLength = Math.round(positionalData[axis.units.len]);
  const stepCounterLength = Math.round(positionalData[axis.counterUnits.len]);
  const content = document.createElement("span");
  content.className = classes.join(" ");
  content.style[axis.units.len] = stepLength + "px";
  content.style[axis.counterUnits.len] = stepCounterLength + "px";
  content.textContent = String(label);
  const labelElement = group.foreignObject(content, __spreadValues({
    style: "overflow: visible;"
  }, positionalData));
  eventEmitter.emit("draw", __spreadValues({
    type: "label",
    axis,
    index,
    group,
    element: labelElement,
    text: label
  }, positionalData));
}
function optionsProvider(options, responsiveOptions, eventEmitter) {
  let currentOptions;
  const mediaQueryListeners = [];
  function updateCurrentOptions(mediaEvent) {
    const previousOptions = currentOptions;
    currentOptions = extend({}, options);
    if (responsiveOptions) {
      responsiveOptions.forEach((responsiveOption) => {
        const mql = window.matchMedia(responsiveOption[0]);
        if (mql.matches) {
          currentOptions = extend(currentOptions, responsiveOption[1]);
        }
      });
    }
    if (eventEmitter && mediaEvent) {
      eventEmitter.emit("optionsChanged", {
        previousOptions,
        currentOptions
      });
    }
  }
  function removeMediaQueryListeners() {
    mediaQueryListeners.forEach((mql) => mql.removeEventListener("change", updateCurrentOptions));
  }
  if (!window.matchMedia) {
    throw new Error("window.matchMedia not found! Make sure you're using a polyfill.");
  } else if (responsiveOptions) {
    responsiveOptions.forEach((responsiveOption) => {
      const mql = window.matchMedia(responsiveOption[0]);
      mql.addEventListener("change", updateCurrentOptions);
      mediaQueryListeners.push(mql);
    });
  }
  updateCurrentOptions();
  return {
    removeMediaQueryListeners,
    getCurrentOptions() {
      return currentOptions;
    }
  };
}
var elementDescriptions = {
  m: ["x", "y"],
  l: ["x", "y"],
  c: ["x1", "y1", "x2", "y2", "x", "y"],
  a: ["rx", "ry", "xAr", "lAf", "sf", "x", "y"]
};
var defaultOptions$3 = {
  // The accuracy in digit count after the decimal point. This will be used to round numbers in the SVG path. If this option is set to false then no rounding will be performed.
  accuracy: 3
};
function element(command, params, pathElements, pos, relative, data) {
  const pathElement = __spreadValues(__spreadValues({
    command: relative ? command.toLowerCase() : command.toUpperCase()
  }, params), data ? {
    data
  } : {});
  pathElements.splice(pos, 0, pathElement);
}
function forEachParam(pathElements, cb) {
  pathElements.forEach((pathElement, pathElementIndex) => {
    elementDescriptions[pathElement.command.toLowerCase()].forEach((paramName, paramIndex) => {
      cb(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
    });
  });
}
var SvgPath = class _SvgPath {
  /**
  * This static function on `SvgPath` is joining multiple paths together into one paths.
  * @param paths A list of paths to be joined together. The order is important.
  * @param close If the newly created path should be a closed path
  * @param options Path options for the newly created path.
  */
  static join(paths) {
    let close = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false, options = arguments.length > 2 ? arguments[2] : void 0;
    const joinedPath = new _SvgPath(close, options);
    for (let i = 0; i < paths.length; i++) {
      const path = paths[i];
      for (let j = 0; j < path.pathElements.length; j++) {
        joinedPath.pathElements.push(path.pathElements[j]);
      }
    }
    return joinedPath;
  }
  position(pos) {
    if (pos !== void 0) {
      this.pos = Math.max(0, Math.min(this.pathElements.length, pos));
      return this;
    } else {
      return this.pos;
    }
  }
  /**
  * Removes elements from the path starting at the current position.
  * @param count Number of path elements that should be removed from the current position.
  * @return The current path object for easy call chaining.
  */
  remove(count) {
    this.pathElements.splice(this.pos, count);
    return this;
  }
  /**
  * Use this function to add a new move SVG path element.
  * @param x The x coordinate for the move element.
  * @param y The y coordinate for the move element.
  * @param relative If set to true the move element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  move(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data = arguments.length > 3 ? arguments[3] : void 0;
    element("M", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new line SVG path element.
  * @param x The x coordinate for the line element.
  * @param y The y coordinate for the line element.
  * @param relative If set to true the line element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  line(x, y) {
    let relative = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false, data = arguments.length > 3 ? arguments[3] : void 0;
    element("L", {
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new curve SVG path element.
  * @param x1 The x coordinate for the first control point of the bezier curve.
  * @param y1 The y coordinate for the first control point of the bezier curve.
  * @param x2 The x coordinate for the second control point of the bezier curve.
  * @param y2 The y coordinate for the second control point of the bezier curve.
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  curve(x1, y1, x2, y2, x, y) {
    let relative = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : false, data = arguments.length > 7 ? arguments[7] : void 0;
    element("C", {
      x1: +x1,
      y1: +y1,
      x2: +x2,
      y2: +y2,
      x: +x,
      y: +y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Use this function to add a new non-bezier curve SVG path element.
  * @param rx The radius to be used for the x-axis of the arc.
  * @param ry The radius to be used for the y-axis of the arc.
  * @param xAr Defines the orientation of the arc
  * @param lAf Large arc flag
  * @param sf Sweep flag
  * @param x The x coordinate for the target point of the curve element.
  * @param y The y coordinate for the target point of the curve element.
  * @param relative If set to true the curve element will be created with relative coordinates (lowercase letter)
  * @param data Any data that should be stored with the element object that will be accessible in pathElement
  * @return The current path object for easy call chaining.
  */
  arc(rx, ry, xAr, lAf, sf, x, y) {
    let relative = arguments.length > 7 && arguments[7] !== void 0 ? arguments[7] : false, data = arguments.length > 8 ? arguments[8] : void 0;
    element("A", {
      rx,
      ry,
      xAr,
      lAf,
      sf,
      x,
      y
    }, this.pathElements, this.pos++, relative, data);
    return this;
  }
  /**
  * Parses an SVG path seen in the d attribute of path elements, and inserts the parsed elements into the existing path object at the current cursor position. Any closing path indicators (Z at the end of the path) will be ignored by the parser as this is provided by the close option in the options of the path object.
  * @param path Any SVG path that contains move (m), line (l) or curve (c) components.
  * @return The current path object for easy call chaining.
  */
  parse(path) {
    const chunks = path.replace(/([A-Za-z])(-?[0-9])/g, "$1 $2").replace(/([0-9])([A-Za-z])/g, "$1 $2").split(/[\s,]+/).reduce((result, pathElement) => {
      if (pathElement.match(/[A-Za-z]/)) {
        result.push([]);
      }
      result[result.length - 1].push(pathElement);
      return result;
    }, []);
    if (chunks[chunks.length - 1][0].toUpperCase() === "Z") {
      chunks.pop();
    }
    const elements = chunks.map((chunk) => {
      const command = chunk.shift();
      const description = elementDescriptions[command.toLowerCase()];
      return __spreadValues({
        command
      }, description.reduce((result, paramName, index) => {
        result[paramName] = +chunk[index];
        return result;
      }, {}));
    });
    this.pathElements.splice(this.pos, 0, ...elements);
    this.pos += elements.length;
    return this;
  }
  /**
  * This function renders to current SVG path object into a final SVG string that can be used in the d attribute of SVG path elements. It uses the accuracy option to round big decimals. If the close parameter was set in the constructor of this path object then a path closing Z will be appended to the output string.
  */
  stringify() {
    const accuracyMultiplier = Math.pow(10, this.options.accuracy);
    return this.pathElements.reduce((path, pathElement) => {
      const params = elementDescriptions[pathElement.command.toLowerCase()].map((paramName) => {
        const value = pathElement[paramName];
        return this.options.accuracy ? Math.round(value * accuracyMultiplier) / accuracyMultiplier : value;
      });
      return path + pathElement.command + params.join(",");
    }, "") + (this.close ? "Z" : "");
  }
  /**
  * Scales all elements in the current SVG path object. There is an individual parameter for each coordinate. Scaling will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to scale the x, x1 and x2 of all path elements.
  * @param y The number which will be used to scale the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  scale(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] *= paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * Translates all elements in the current SVG path object. The translation is relative and there is an individual parameter for each coordinate. Translation will also be done for control points of curves, affecting the given coordinate.
  * @param x The number which will be used to translate the x, x1 and x2 of all path elements.
  * @param y The number which will be used to translate the y, y1 and y2 of all path elements.
  * @return The current path object for easy call chaining.
  */
  translate(x, y) {
    forEachParam(this.pathElements, (pathElement, paramName) => {
      pathElement[paramName] += paramName[0] === "x" ? x : y;
    });
    return this;
  }
  /**
  * This function will run over all existing path elements and then loop over their attributes. The callback function will be called for every path element attribute that exists in the current path.
  * The method signature of the callback function looks like this:
  * ```javascript
  * function(pathElement, paramName, pathElementIndex, paramIndex, pathElements)
  * ```
  * If something else than undefined is returned by the callback function, this value will be used to replace the old value. This allows you to build custom transformations of path objects that can't be achieved using the basic transformation functions scale and translate.
  * @param transformFnc The callback function for the transformation. Check the signature in the function description.
  * @return The current path object for easy call chaining.
  */
  transform(transformFnc) {
    forEachParam(this.pathElements, (pathElement, paramName, pathElementIndex, paramIndex, pathElements) => {
      const transformed = transformFnc(pathElement, paramName, pathElementIndex, paramIndex, pathElements);
      if (transformed || transformed === 0) {
        pathElement[paramName] = transformed;
      }
    });
    return this;
  }
  /**
  * This function clones a whole path object with all its properties. This is a deep clone and path element objects will also be cloned.
  * @param close Optional option to set the new cloned path to closed. If not specified or false, the original path close option will be used.
  */
  clone() {
    let close = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false;
    const clone = new _SvgPath(close || this.close);
    clone.pos = this.pos;
    clone.pathElements = this.pathElements.slice().map((pathElement) => __spreadValues({}, pathElement));
    clone.options = __spreadValues({}, this.options);
    return clone;
  }
  /**
  * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
  * @param command The command you'd like to use to split the path
  */
  splitByCommand(command) {
    const split = [new _SvgPath()];
    this.pathElements.forEach((pathElement) => {
      if (pathElement.command === command.toUpperCase() && split[split.length - 1].pathElements.length !== 0) {
        split.push(new _SvgPath());
      }
      split[split.length - 1].pathElements.push(pathElement);
    });
    return split;
  }
  /**
  * Used to construct a new path object.
  * @param close If set to true then this path will be closed when stringified (with a Z at the end)
  * @param options Options object that overrides the default objects. See default options for more details.
  */
  constructor(close = false, options) {
    this.close = close;
    this.pathElements = [];
    this.pos = 0;
    this.options = __spreadValues(__spreadValues({}, defaultOptions$3), options);
  }
};
function none(options) {
  const finalOptions = __spreadValues({
    fillHoles: false
  }, options);
  return function noneInterpolation(pathCoordinates, valueData) {
    const path = new SvgPath();
    let hole = true;
    for (let i = 0; i < pathCoordinates.length; i += 2) {
      const currX = pathCoordinates[i];
      const currY = pathCoordinates[i + 1];
      const currData = valueData[i / 2];
      if (getMultiValue(currData.value) !== void 0) {
        if (hole) {
          path.move(currX, currY, false, currData);
        } else {
          path.line(currX, currY, false, currData);
        }
        hole = false;
      } else if (!finalOptions.fillHoles) {
        hole = true;
      }
    }
    return path;
  };
}
function monotoneCubic(options) {
  const finalOptions = __spreadValues({
    fillHoles: false
  }, options);
  return function monotoneCubicInterpolation(pathCoordinates, valueData) {
    const segments = splitIntoSegments(pathCoordinates, valueData, {
      fillHoles: finalOptions.fillHoles,
      increasingX: true
    });
    if (!segments.length) {
      return none()([], []);
    } else if (segments.length > 1) {
      return SvgPath.join(segments.map((segment) => monotoneCubicInterpolation(segment.pathCoordinates, segment.valueData)));
    } else {
      pathCoordinates = segments[0].pathCoordinates;
      valueData = segments[0].valueData;
      if (pathCoordinates.length <= 4) {
        return none()(pathCoordinates, valueData);
      }
      const xs = [];
      const ys = [];
      const n = pathCoordinates.length / 2;
      const ms = [];
      const ds = [];
      const dys = [];
      const dxs = [];
      for (let i = 0; i < n; i++) {
        xs[i] = pathCoordinates[i * 2];
        ys[i] = pathCoordinates[i * 2 + 1];
      }
      for (let i1 = 0; i1 < n - 1; i1++) {
        dys[i1] = ys[i1 + 1] - ys[i1];
        dxs[i1] = xs[i1 + 1] - xs[i1];
        ds[i1] = dys[i1] / dxs[i1];
      }
      ms[0] = ds[0];
      ms[n - 1] = ds[n - 2];
      for (let i2 = 1; i2 < n - 1; i2++) {
        if (ds[i2] === 0 || ds[i2 - 1] === 0 || ds[i2 - 1] > 0 !== ds[i2] > 0) {
          ms[i2] = 0;
        } else {
          ms[i2] = 3 * (dxs[i2 - 1] + dxs[i2]) / ((2 * dxs[i2] + dxs[i2 - 1]) / ds[i2 - 1] + (dxs[i2] + 2 * dxs[i2 - 1]) / ds[i2]);
          if (!isFinite(ms[i2])) {
            ms[i2] = 0;
          }
        }
      }
      const path = new SvgPath().move(xs[0], ys[0], false, valueData[0]);
      for (let i3 = 0; i3 < n - 1; i3++) {
        path.curve(
          // First control point
          xs[i3] + dxs[i3] / 3,
          ys[i3] + ms[i3] * dxs[i3] / 3,
          // Second control point
          xs[i3 + 1] - dxs[i3] / 3,
          ys[i3 + 1] - ms[i3 + 1] * dxs[i3] / 3,
          // End point
          xs[i3 + 1],
          ys[i3 + 1],
          false,
          valueData[i3 + 1]
        );
      }
      return path;
    }
  };
}
var EventEmitter2 = class {
  on(event, listener) {
    const {
      allListeners,
      listeners
    } = this;
    if (event === "*") {
      allListeners.add(listener);
    } else {
      if (!listeners.has(event)) {
        listeners.set(event, /* @__PURE__ */ new Set());
      }
      listeners.get(event).add(listener);
    }
  }
  off(event, listener) {
    const {
      allListeners,
      listeners
    } = this;
    if (event === "*") {
      if (listener) {
        allListeners.delete(listener);
      } else {
        allListeners.clear();
      }
    } else if (listeners.has(event)) {
      const eventListeners = listeners.get(event);
      if (listener) {
        eventListeners.delete(listener);
      } else {
        eventListeners.clear();
      }
      if (!eventListeners.size) {
        listeners.delete(event);
      }
    }
  }
  /**
  * Use this function to emit an event. All handlers that are listening for this event will be triggered with the data parameter.
  * @param event The event name that should be triggered
  * @param data Arbitrary data that will be passed to the event handler callback functions
  */
  emit(event, data) {
    const {
      allListeners,
      listeners
    } = this;
    if (listeners.has(event)) {
      listeners.get(event).forEach((listener) => listener(data));
    }
    allListeners.forEach((listener) => listener(event, data));
  }
  constructor() {
    this.listeners = /* @__PURE__ */ new Map();
    this.allListeners = /* @__PURE__ */ new Set();
  }
};
var instances = /* @__PURE__ */ new WeakMap();
var BaseChart = class {
  // TODO: Currently we need to re-draw the chart on window resize. This is usually very bad and will affect performance.
  // This is done because we can't work with relative coordinates when drawing the chart because SVG Path does not
  // work with relative positions yet. We need to check if we can do a viewBox hack to switch to percentage.
  // See http://mozilla.6506.n7.nabble.com/Specyfing-paths-with-percentages-unit-td247474.html
  // Update: can be done using the above method tested here: http://codepen.io/gionkunz/pen/KDvLj
  // The problem is with the label offsets that can't be converted into percentage and affecting the chart container
  /**
  * Updates the chart which currently does a full reconstruction of the SVG DOM
  * @param data Optional data you'd like to set for the chart before it will update. If not specified the update method will use the data that is already configured with the chart.
  * @param options Optional options you'd like to add to the previous options for the chart before it will update. If not specified the update method will use the options that have been already configured with the chart.
  * @param override If set to true, the passed options will be used to extend the options that have been configured already. Otherwise the chart default options will be used as the base
  */
  update(data, options) {
    let override = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
    if (data) {
      this.data = data || {};
      this.data.labels = this.data.labels || [];
      this.data.series = this.data.series || [];
      this.eventEmitter.emit("data", {
        type: "update",
        data: this.data
      });
    }
    if (options) {
      this.options = extend({}, override ? this.options : this.defaultOptions, options);
      if (!this.initializeTimeoutId) {
        var ref;
        (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
        this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
      }
    }
    if (!this.initializeTimeoutId && this.optionsProvider) {
      this.createChart(this.optionsProvider.getCurrentOptions());
    }
    return this;
  }
  /**
  * This method can be called on the API object of each chart and will un-register all event listeners that were added to other components. This currently includes a window.resize listener as well as media query listeners if any responsive options have been provided. Use this function if you need to destroy and recreate Chartist charts dynamically.
  */
  detach() {
    if (!this.initializeTimeoutId) {
      var ref;
      window.removeEventListener("resize", this.resizeListener);
      (ref = this.optionsProvider) === null || ref === void 0 ? void 0 : ref.removeMediaQueryListeners();
    } else {
      window.clearTimeout(this.initializeTimeoutId);
    }
    instances.delete(this.container);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  on(event, listener) {
    this.eventEmitter.on(event, listener);
    return this;
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  off(event, listener) {
    this.eventEmitter.off(event, listener);
    return this;
  }
  initialize() {
    window.addEventListener("resize", this.resizeListener);
    this.optionsProvider = optionsProvider(this.options, this.responsiveOptions, this.eventEmitter);
    this.eventEmitter.on("optionsChanged", () => this.update());
    if (this.options.plugins) {
      this.options.plugins.forEach((plugin) => {
        if (Array.isArray(plugin)) {
          plugin[0](this, plugin[1]);
        } else {
          plugin(this);
        }
      });
    }
    this.eventEmitter.emit("data", {
      type: "initial",
      data: this.data
    });
    this.createChart(this.optionsProvider.getCurrentOptions());
    this.initializeTimeoutId = null;
  }
  constructor(query, data, defaultOptions2, options, responsiveOptions) {
    this.data = data;
    this.defaultOptions = defaultOptions2;
    this.options = options;
    this.responsiveOptions = responsiveOptions;
    this.eventEmitter = new EventEmitter2();
    this.resizeListener = () => this.update();
    this.initializeTimeoutId = setTimeout(() => this.initialize(), 0);
    const container = typeof query === "string" ? document.querySelector(query) : query;
    if (!container) {
      throw new Error("Target element is not found");
    }
    this.container = container;
    const prevInstance = instances.get(container);
    if (prevInstance) {
      prevInstance.detach();
    }
    instances.set(container, this);
  }
};
var axisUnits = {
  x: {
    pos: "x",
    len: "width",
    dir: "horizontal",
    rectStart: "x1",
    rectEnd: "x2",
    rectOffset: "y2"
  },
  y: {
    pos: "y",
    len: "height",
    dir: "vertical",
    rectStart: "y2",
    rectEnd: "y1",
    rectOffset: "x1"
  }
};
var Axis = class {
  createGridAndLabels(gridGroup, labelGroup, chartOptions, eventEmitter) {
    const axisOptions = this.units.pos === "x" ? chartOptions.axisX : chartOptions.axisY;
    const projectedValues = this.ticks.map((tick, i) => this.projectValue(tick, i));
    const labelValues = this.ticks.map(axisOptions.labelInterpolationFnc);
    projectedValues.forEach((projectedValue, index) => {
      const labelValue = labelValues[index];
      const labelOffset = {
        x: 0,
        y: 0
      };
      let labelLength;
      if (projectedValues[index + 1]) {
        labelLength = projectedValues[index + 1] - projectedValue;
      } else {
        labelLength = Math.max(this.axisLength - projectedValue, this.axisLength / this.ticks.length);
      }
      if (labelValue !== "" && isFalseyButZero(labelValue)) {
        return;
      }
      if (this.units.pos === "x") {
        projectedValue = this.chartRect.x1 + projectedValue;
        labelOffset.x = chartOptions.axisX.labelOffset.x;
        if (chartOptions.axisX.position === "start") {
          labelOffset.y = this.chartRect.padding.top + chartOptions.axisX.labelOffset.y + 5;
        } else {
          labelOffset.y = this.chartRect.y1 + chartOptions.axisX.labelOffset.y + 5;
        }
      } else {
        projectedValue = this.chartRect.y1 - projectedValue;
        labelOffset.y = chartOptions.axisY.labelOffset.y - labelLength;
        if (chartOptions.axisY.position === "start") {
          labelOffset.x = this.chartRect.padding.left + chartOptions.axisY.labelOffset.x;
        } else {
          labelOffset.x = this.chartRect.x2 + chartOptions.axisY.labelOffset.x + 10;
        }
      }
      if (axisOptions.showGrid) {
        createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [chartOptions.classNames.grid, chartOptions.classNames[this.units.dir]], eventEmitter);
      }
      if (axisOptions.showLabel) {
        createLabel(projectedValue, labelLength, index, labelValue, this, axisOptions.offset, labelOffset, labelGroup, [chartOptions.classNames.label, chartOptions.classNames[this.units.dir], axisOptions.position === "start" ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames.end], eventEmitter);
      }
    });
  }
  constructor(units, chartRect, ticks) {
    this.units = units;
    this.chartRect = chartRect;
    this.ticks = ticks;
    this.counterUnits = units === axisUnits.x ? axisUnits.y : axisUnits.x;
    this.axisLength = chartRect[this.units.rectEnd] - chartRect[this.units.rectStart];
    this.gridOffset = chartRect[this.units.rectOffset];
  }
};
var AutoScaleAxis = class extends Axis {
  projectValue(value) {
    const finalValue = Number(getMultiValue(value, this.units.pos));
    return this.axisLength * (finalValue - this.bounds.min) / this.bounds.range;
  }
  constructor(axisUnit, data, chartRect, options) {
    const highLow = options.highLow || getHighLow(data, options, axisUnit.pos);
    const bounds = getBounds(chartRect[axisUnit.rectEnd] - chartRect[axisUnit.rectStart], highLow, options.scaleMinSpace || 20, options.onlyInteger);
    const range = {
      min: bounds.min,
      max: bounds.max
    };
    super(axisUnit, chartRect, bounds.values);
    this.bounds = bounds;
    this.range = range;
  }
};
var StepAxis = class extends Axis {
  projectValue(_value, index) {
    return this.stepLength * index;
  }
  constructor(axisUnit, _data, chartRect, options) {
    const ticks = options.ticks || [];
    super(axisUnit, chartRect, ticks);
    const calc = Math.max(1, ticks.length - (options.stretch ? 1 : 0));
    this.stepLength = this.axisLength / calc;
    this.stretch = Boolean(options.stretch);
  }
};
function getSeriesOption(series, options, key) {
  var ref;
  if (safeHasProperty(series, "name") && series.name && ((ref = options.series) === null || ref === void 0 ? void 0 : ref[series.name])) {
    const seriesOptions = options === null || options === void 0 ? void 0 : options.series[series.name];
    const value = seriesOptions[key];
    const result = value === void 0 ? options[key] : value;
    return result;
  } else {
    return options[key];
  }
}
var defaultOptions$2 = {
  // Options for X-Axis
  axisX: {
    // The offset of the labels to the chart area
    offset: 30,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "end",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.StepAxis will be used for the X-Axis, where the ticks option will be set to the labels in the data and the stretch option will be set to the global fullWidth option. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: void 0
  },
  // Options for Y-Axis
  axisY: {
    // The offset of the labels to the chart area
    offset: 40,
    // Position where labels are placed. Can be set to `start` or `end` where `start` is equivalent to left or top on vertical axis and `end` is equivalent to right or bottom on horizontal axis.
    position: "start",
    // Allows you to correct label positioning on this axis by positive or negative x and y offset.
    labelOffset: {
      x: 0,
      y: 0
    },
    // If labels should be shown or not
    showLabel: true,
    // If the axis grid should be drawn or not
    showGrid: true,
    // Interpolation function that allows you to intercept the value from the axis label
    labelInterpolationFnc: noop,
    // Set the axis type to be used to project values on this axis. If not defined, Chartist.AutoScaleAxis will be used for the Y-Axis, where the high and low options will be set to the global high and low options. This type can be changed to any axis constructor available (e.g. Chartist.FixedScaleAxis), where all axis options should be present here.
    type: void 0,
    // This value specifies the minimum height in pixel of the scale steps
    scaleMinSpace: 20,
    // Use only integer values (whole numbers) for the scale steps
    onlyInteger: false
  },
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: void 0,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: void 0,
  // If the line should be drawn or not
  showLine: true,
  // If dots should be drawn or not
  showPoint: true,
  // If the line chart should draw an area
  showArea: false,
  // The base for the area chart that will be used to close the area shape (is normally 0)
  areaBase: 0,
  // Specify if the lines should be smoothed. This value can be true or false where true will result in smoothing using the default smoothing interpolation function Chartist.Interpolation.cardinal and false results in Chartist.Interpolation.none. You can also choose other smoothing / interpolation functions available in the Chartist.Interpolation module, or write your own interpolation function. Check the examples for a brief description.
  lineSmooth: true,
  // If the line chart should add a background fill to the .ct-grids group.
  showGridBackground: false,
  // Overriding the natural low of the chart allows you to zoom in or limit the charts lowest displayed value
  low: void 0,
  // Overriding the natural high of the chart allows you to zoom in or limit the charts highest displayed value
  high: void 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: {
    top: 15,
    right: 15,
    bottom: 5,
    left: 10
  },
  // When set to true, the last grid line on the x-axis is not drawn and the chart elements will expand to the full available width of the chart. For the last label to be drawn correctly you might need to add chart padding or offset the last label with a draw event handler.
  fullWidth: false,
  // If true the whole data is reversed including labels, the series order as well as the whole series data arrays.
  reverseData: false,
  // Override the class names that get used to generate the SVG structure of the chart
  classNames: {
    chart: "ct-chart-line",
    label: "ct-label",
    labelGroup: "ct-labels",
    series: "ct-series",
    line: "ct-line",
    point: "ct-point",
    area: "ct-area",
    grid: "ct-grid",
    gridGroup: "ct-grids",
    gridBackground: "ct-grid-background",
    vertical: "ct-vertical",
    horizontal: "ct-horizontal",
    start: "ct-start",
    end: "ct-end"
  }
};
var LineChart = class extends BaseChart {
  /**
  * Creates a new chart
  */
  createChart(options) {
    const {
      data
    } = this;
    const normalizedData = normalizeData(data, options.reverseData, true);
    const svg = createSvg(this.container, options.width, options.height, options.classNames.chart);
    this.svg = svg;
    const gridGroup = svg.elem("g").addClass(options.classNames.gridGroup);
    const seriesGroup = svg.elem("g");
    const labelGroup = svg.elem("g").addClass(options.classNames.labelGroup);
    const chartRect = createChartRect(svg, options);
    let axisX;
    let axisY;
    if (options.axisX.type === void 0) {
      axisX = new StepAxis(axisUnits.x, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisX), {
        ticks: normalizedData.labels,
        stretch: options.fullWidth
      }));
    } else {
      axisX = new options.axisX.type(axisUnits.x, normalizedData.series, chartRect, options.axisX);
    }
    if (options.axisY.type === void 0) {
      axisY = new AutoScaleAxis(axisUnits.y, normalizedData.series, chartRect, __spreadProps(__spreadValues({}, options.axisY), {
        high: isNumeric(options.high) ? options.high : options.axisY.high,
        low: isNumeric(options.low) ? options.low : options.axisY.low
      }));
    } else {
      axisY = new options.axisY.type(axisUnits.y, normalizedData.series, chartRect, options.axisY);
    }
    axisX.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    axisY.createGridAndLabels(gridGroup, labelGroup, options, this.eventEmitter);
    if (options.showGridBackground) {
      createGridBackground(gridGroup, chartRect, options.classNames.gridBackground, this.eventEmitter);
    }
    each(data.series, (series, seriesIndex) => {
      const seriesElement = seriesGroup.elem("g");
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : void 0;
      if (seriesName) {
        seriesElement.attr({
          "ct:series-name": seriesName
        });
      }
      if (seriesMeta) {
        seriesElement.attr({
          "ct:meta": serialize(seriesMeta)
        });
      }
      seriesElement.addClass([options.classNames.series, seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))].join(" "));
      const pathCoordinates = [];
      const pathData = [];
      normalizedData.series[seriesIndex].forEach((value, valueIndex) => {
        const p = {
          x: chartRect.x1 + axisX.projectValue(value, valueIndex, normalizedData.series[seriesIndex]),
          y: chartRect.y1 - axisY.projectValue(value, valueIndex, normalizedData.series[seriesIndex])
        };
        pathCoordinates.push(p.x, p.y);
        pathData.push({
          value,
          valueIndex,
          meta: getMetaData(series, valueIndex)
        });
      });
      const seriesOptions = {
        lineSmooth: getSeriesOption(series, options, "lineSmooth"),
        showPoint: getSeriesOption(series, options, "showPoint"),
        showLine: getSeriesOption(series, options, "showLine"),
        showArea: getSeriesOption(series, options, "showArea"),
        areaBase: getSeriesOption(series, options, "areaBase")
      };
      let smoothing;
      if (typeof seriesOptions.lineSmooth === "function") {
        smoothing = seriesOptions.lineSmooth;
      } else {
        smoothing = seriesOptions.lineSmooth ? monotoneCubic() : none();
      }
      const path = smoothing(pathCoordinates, pathData);
      if (seriesOptions.showPoint) {
        path.pathElements.forEach((pathElement) => {
          const {
            data: pathElementData
          } = pathElement;
          const point = seriesElement.elem("line", {
            x1: pathElement.x,
            y1: pathElement.y,
            x2: pathElement.x + 0.01,
            y2: pathElement.y
          }, options.classNames.point);
          if (pathElementData) {
            let x;
            let y;
            if (safeHasProperty(pathElementData.value, "x")) {
              x = pathElementData.value.x;
            }
            if (safeHasProperty(pathElementData.value, "y")) {
              y = pathElementData.value.y;
            }
            point.attr({
              "ct:value": [x, y].filter(isNumeric).join(","),
              "ct:meta": serialize(pathElementData.meta)
            });
          }
          this.eventEmitter.emit("draw", {
            type: "point",
            value: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.value,
            index: (pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.valueIndex) || 0,
            meta: pathElementData === null || pathElementData === void 0 ? void 0 : pathElementData.meta,
            series,
            seriesIndex,
            axisX,
            axisY,
            group: seriesElement,
            element: point,
            x: pathElement.x,
            y: pathElement.y,
            chartRect
          });
        });
      }
      if (seriesOptions.showLine) {
        const line = seriesElement.elem("path", {
          d: path.stringify()
        }, options.classNames.line, true);
        this.eventEmitter.emit("draw", {
          type: "line",
          values: normalizedData.series[seriesIndex],
          path: path.clone(),
          chartRect,
          // TODO: Remove redundant
          index: seriesIndex,
          series,
          seriesIndex,
          meta: seriesMeta,
          axisX,
          axisY,
          group: seriesElement,
          element: line
        });
      }
      if (seriesOptions.showArea && axisY.range) {
        const areaBase = Math.max(Math.min(seriesOptions.areaBase, axisY.range.max), axisY.range.min);
        const areaBaseProjected = chartRect.y1 - axisY.projectValue(areaBase);
        path.splitByCommand("M").filter((pathSegment) => pathSegment.pathElements.length > 1).map((solidPathSegments) => {
          const firstElement = solidPathSegments.pathElements[0];
          const lastElement = solidPathSegments.pathElements[solidPathSegments.pathElements.length - 1];
          return solidPathSegments.clone(true).position(0).remove(1).move(firstElement.x, areaBaseProjected).line(firstElement.x, firstElement.y).position(solidPathSegments.pathElements.length + 1).line(lastElement.x, areaBaseProjected);
        }).forEach((areaPath) => {
          const area = seriesElement.elem("path", {
            d: areaPath.stringify()
          }, options.classNames.area, true);
          this.eventEmitter.emit("draw", {
            type: "area",
            values: normalizedData.series[seriesIndex],
            path: areaPath.clone(),
            series,
            seriesIndex,
            axisX,
            axisY,
            chartRect,
            // TODO: Remove redundant
            index: seriesIndex,
            group: seriesElement,
            element: area,
            meta: seriesMeta
          });
        });
      }
    }, options.reverseData);
    this.eventEmitter.emit("created", {
      chartRect,
      axisX,
      axisY,
      svg,
      options
    });
  }
  /**
  * This method creates a new line chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object that needs to consist of a labels and a series array
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  * @return An object which exposes the API for the created chart
  *
  * @example
  * ```ts
  * // Create a simple line chart
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // As options we currently only set a static size of 300x200 px
  * const options = {
  *   width: '300px',
  *   height: '200px'
  * };
  *
  * // In the global name space Chartist we call the Line function to initialize a line chart. As a first parameter we pass in a selector where we would like to get our chart created. Second parameter is the actual data object and as a third parameter we pass in our options
  * new LineChart('.ct-chart', data, options);
  * ```
  *
  * @example
  * ```ts
  * // Use specific interpolation function with configuration from the Chartist.Interpolation module
  *
  * const chart = new LineChart('.ct-chart', {
  *   labels: [1, 2, 3, 4, 5],
  *   series: [
  *     [1, 1, 8, 1, 7]
  *   ]
  * }, {
  *   lineSmooth: Chartist.Interpolation.cardinal({
  *     tension: 0.2
  *   })
  * });
  * ```
  *
  * @example
  * ```ts
  * // Create a line chart with responsive options
  *
  * const data = {
  *   // A labels array that can contain any sort of values
  *   labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
  *   // Our series array that contains series objects or in this case series data arrays
  *   series: [
  *     [5, 2, 4, 2, 0]
  *   ]
  * };
  *
  * // In addition to the regular options we specify responsive option overrides that will override the default configutation based on the matching media queries.
  * const responsiveOptions = [
  *   ['screen and (min-width: 641px) and (max-width: 1024px)', {
  *     showPoint: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return Mon, Tue, Wed etc. on medium screens
  *         return value.slice(0, 3);
  *       }
  *     }
  *   }],
  *   ['screen and (max-width: 640px)', {
  *     showLine: false,
  *     axisX: {
  *       labelInterpolationFnc: function(value) {
  *         // Will return M, T, W etc. on small screens
  *         return value[0];
  *       }
  *     }
  *   }]
  * ];
  *
  * new LineChart('.ct-chart', data, null, responsiveOptions);
  * ```
  */
  constructor(query, data, options, responsiveOptions) {
    super(query, data, defaultOptions$2, extend({}, defaultOptions$2, options), responsiveOptions);
    this.data = data;
  }
};
var defaultOptions = {
  // Specify a fixed width for the chart as a string (i.e. '100px' or '50%')
  width: void 0,
  // Specify a fixed height for the chart as a string (i.e. '100px' or '50%')
  height: void 0,
  // Padding of the chart drawing area to the container element and labels as a number or padding object {top: 5, right: 5, bottom: 5, left: 5}
  chartPadding: 5,
  // Override the class names that are used to generate the SVG structure of the chart
  classNames: {
    chartPie: "ct-chart-pie",
    chartDonut: "ct-chart-donut",
    series: "ct-series",
    slicePie: "ct-slice-pie",
    sliceDonut: "ct-slice-donut",
    label: "ct-label"
  },
  // The start angle of the pie chart in degrees where 0 points north. A higher value offsets the start angle clockwise.
  startAngle: 0,
  // An optional total you can specify. By specifying a total value, the sum of the values in the series must be this total in order to draw a full pie. You can use this parameter to draw only parts of a pie or gauge charts.
  total: void 0,
  // If specified the donut CSS classes will be used and strokes will be drawn instead of pie slices.
  donut: false,
  // Specify the donut stroke width, currently done in javascript for convenience. May move to CSS styles in the future.
  // This option can be set as number or string to specify a relative width (i.e. 100 or '30%').
  donutWidth: 60,
  // If a label should be shown or not
  showLabel: true,
  // Label position offset from the standard position which is half distance of the radius. This value can be either positive or negative. Positive values will position the label away from the center.
  labelOffset: 0,
  // This option can be set to 'inside', 'outside' or 'center'. Positioned with 'inside' the labels will be placed on half the distance of the radius to the border of the Pie by respecting the 'labelOffset'. The 'outside' option will place the labels at the border of the pie and 'center' will place the labels in the absolute center point of the chart. The 'center' option only makes sense in conjunction with the 'labelOffset' option.
  labelPosition: "inside",
  // An interpolation function for the label value
  labelInterpolationFnc: noop,
  // Label direction can be 'neutral', 'explode' or 'implode'. The labels anchor will be positioned based on those settings as well as the fact if the labels are on the right or left side of the center of the chart. Usually explode is useful when labels are positioned far away from the center.
  labelDirection: "neutral",
  // If true empty values will be ignored to avoid drawing unnecessary slices and labels
  ignoreEmptyValues: false
};
function determineAnchorPosition(center, label, direction) {
  const toTheRight = label.x > center.x;
  if (toTheRight && direction === "explode" || !toTheRight && direction === "implode") {
    return "start";
  } else if (toTheRight && direction === "implode" || !toTheRight && direction === "explode") {
    return "end";
  } else {
    return "middle";
  }
}
var PieChart = class extends BaseChart {
  /**
  * Creates the pie chart
  *
  * @param options
  */
  createChart(options) {
    const {
      data
    } = this;
    const normalizedData = normalizeData(data);
    const seriesGroups = [];
    let labelsGroup;
    let labelRadius;
    let startAngle = options.startAngle;
    const svg = createSvg(this.container, options.width, options.height, options.donut ? options.classNames.chartDonut : options.classNames.chartPie);
    this.svg = svg;
    const chartRect = createChartRect(svg, options);
    let radius = Math.min(chartRect.width() / 2, chartRect.height() / 2);
    const totalDataSum = options.total || normalizedData.series.reduce(sum, 0);
    const donutWidth = quantity(options.donutWidth);
    if (donutWidth.unit === "%") {
      donutWidth.value *= radius / 100;
    }
    radius -= options.donut ? donutWidth.value / 2 : 0;
    if (options.labelPosition === "outside" || options.donut) {
      labelRadius = radius;
    } else if (options.labelPosition === "center") {
      labelRadius = 0;
    } else {
      labelRadius = radius / 2;
    }
    if (options.labelOffset) {
      labelRadius += options.labelOffset;
    }
    const center = {
      x: chartRect.x1 + chartRect.width() / 2,
      y: chartRect.y2 + chartRect.height() / 2
    };
    const hasSingleValInSeries = data.series.filter((val) => safeHasProperty(val, "value") ? val.value !== 0 : val !== 0).length === 1;
    data.series.forEach((_, index) => seriesGroups[index] = svg.elem("g"));
    if (options.showLabel) {
      labelsGroup = svg.elem("g");
    }
    data.series.forEach((series, index) => {
      var ref, ref1;
      if (normalizedData.series[index] === 0 && options.ignoreEmptyValues) {
        return;
      }
      const seriesName = safeHasProperty(series, "name") && series.name;
      const seriesClassName = safeHasProperty(series, "className") && series.className;
      const seriesMeta = safeHasProperty(series, "meta") ? series.meta : void 0;
      if (seriesName) {
        seriesGroups[index].attr({
          "ct:series-name": seriesName
        });
      }
      seriesGroups[index].addClass([(ref = options.classNames) === null || ref === void 0 ? void 0 : ref.series, seriesClassName || "".concat((ref1 = options.classNames) === null || ref1 === void 0 ? void 0 : ref1.series, "-").concat(alphaNumerate(index))].join(" "));
      let endAngle = totalDataSum > 0 ? startAngle + normalizedData.series[index] / totalDataSum * 360 : 0;
      const overlappigStartAngle = Math.max(0, startAngle - (index === 0 || hasSingleValInSeries ? 0 : 0.2));
      if (endAngle - overlappigStartAngle >= 359.99) {
        endAngle = overlappigStartAngle + 359.99;
      }
      const start = polarToCartesian(center.x, center.y, radius, overlappigStartAngle);
      const end = polarToCartesian(center.x, center.y, radius, endAngle);
      const path = new SvgPath(!options.donut).move(end.x, end.y).arc(radius, radius, 0, Number(endAngle - startAngle > 180), 0, start.x, start.y);
      if (!options.donut) {
        path.line(center.x, center.y);
      }
      const pathElement = seriesGroups[index].elem("path", {
        d: path.stringify()
      }, options.donut ? options.classNames.sliceDonut : options.classNames.slicePie);
      pathElement.attr({
        "ct:value": normalizedData.series[index],
        "ct:meta": serialize(seriesMeta)
      });
      if (options.donut) {
        pathElement.attr({
          style: "stroke-width: " + donutWidth.value + "px"
        });
      }
      this.eventEmitter.emit("draw", {
        type: "slice",
        value: normalizedData.series[index],
        totalDataSum,
        index,
        meta: seriesMeta,
        series,
        group: seriesGroups[index],
        element: pathElement,
        path: path.clone(),
        center,
        radius,
        startAngle,
        endAngle,
        chartRect
      });
      if (options.showLabel) {
        let labelPosition;
        if (data.series.length === 1) {
          labelPosition = {
            x: center.x,
            y: center.y
          };
        } else {
          labelPosition = polarToCartesian(center.x, center.y, labelRadius, startAngle + (endAngle - startAngle) / 2);
        }
        let rawValue;
        if (normalizedData.labels && !isFalseyButZero(normalizedData.labels[index])) {
          rawValue = normalizedData.labels[index];
        } else {
          rawValue = normalizedData.series[index];
        }
        const interpolatedValue = options.labelInterpolationFnc(rawValue, index);
        if (interpolatedValue || interpolatedValue === 0) {
          const labelElement = labelsGroup.elem("text", {
            dx: labelPosition.x,
            dy: labelPosition.y,
            "text-anchor": determineAnchorPosition(center, labelPosition, options.labelDirection)
          }, options.classNames.label).text(String(interpolatedValue));
          this.eventEmitter.emit("draw", __spreadValues({
            type: "label",
            index,
            group: labelsGroup,
            element: labelElement,
            text: "" + interpolatedValue,
            chartRect,
            series,
            meta: seriesMeta
          }, labelPosition));
        }
      }
      startAngle = endAngle;
    });
    this.eventEmitter.emit("created", {
      chartRect,
      svg,
      options
    });
  }
  /**
  * This method creates a new pie chart and returns an object that can be used to redraw the chart.
  * @param query A selector query string or directly a DOM element
  * @param data The data object in the pie chart needs to have a series property with a one dimensional data array. The values will be normalized against each other and don't necessarily need to be in percentage. The series property can also be an array of value objects that contain a value property and a className property to override the CSS class name for the series group.
  * @param options The options object with options that override the default options. Check the examples for a detailed list.
  * @param responsiveOptions Specify an array of responsive option arrays which are a media query and options object pair => [[mediaQueryString, optionsObject],[more...]]
  *
  * @example
  * ```ts
  * // Simple pie chart example with four series
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a donut chart
  * new PieChart('.ct-chart', {
  *   series: [10, 2, 4, 3]
  * }, {
  *   donut: true
  * });
  * ```
  *
  * @example
  * ```ts
  * // Using donut, startAngle and total to draw a gauge chart
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   donut: true,
  *   donutWidth: 20,
  *   startAngle: 270,
  *   total: 200
  * });
  * ```
  *
  * @example
  * ```ts
  * // Drawing a pie chart with padding and labels that are outside the pie
  * new PieChart('.ct-chart', {
  *   series: [20, 10, 30, 40]
  * }, {
  *   chartPadding: 30,
  *   labelOffset: 50,
  *   labelDirection: 'explode'
  * });
  * ```
  *
  * @example
  * ```ts
  * // Overriding the class names for individual series as well as a name and meta data.
  * // The name will be written as ct:series-name attribute and the meta data will be serialized and written
  * // to a ct:meta attribute.
  * new PieChart('.ct-chart', {
  *   series: [{
  *     value: 20,
  *     name: 'Series 1',
  *     className: 'my-custom-class-one',
  *     meta: 'Meta One'
  *   }, {
  *     value: 10,
  *     name: 'Series 2',
  *     className: 'my-custom-class-two',
  *     meta: 'Meta Two'
  *   }, {
  *     value: 70,
  *     name: 'Series 3',
  *     className: 'my-custom-class-three',
  *     meta: 'Meta Three'
  *   }]
  * });
  * ```
  */
  constructor(query, data, options, responsiveOptions) {
    super(query, data, defaultOptions, extend({}, defaultOptions, options), responsiveOptions);
    this.data = data;
  }
};

// apps/concierge/src/app/reports/desks/report-desks-charts.component.ts
var _ReportDesksChartsComponent = class _ReportDesksChartsComponent extends AsyncHandler {
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.print = false;
    this.day_list = this._state.day_list;
    this.stats = combineLatest([
      this._state.options,
      this._state.counts
    ]);
  }
  ngOnInit() {
    this.subscription("charts", combineLatest([this.day_list, this.stats]).subscribe(() => this.updateCharts()));
  }
  ngOnChanges(changes) {
    if (changes.print && changes.print.currentValue !== changes.print.previousValue) {
      this.updateCharts();
    }
  }
  updateCharts() {
    this.timeout("update_charts", () => __async(this, null, function* () {
      const day_list = yield this.day_list.pipe(take(1)).toPromise();
      this.updateDailyChart(day_list);
      const [mappings, counts] = yield this.stats.pipe(take(1)).toPromise();
      this.updateLevelChart(mappings, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }), 50);
  }
  updateDailyChart(list) {
    const data = {
      labels: list.map((_) => format(_.date, "dd MMM")),
      series: [list.map((_) => +_.utilisation)]
    };
    this._day_chart = new LineChart("#daily-chart", data);
  }
  updateLevelChart(mapping, count) {
    let { zones } = mapping || { zones: [] };
    if (!zones.length) {
      zones = this._settings.get("app.use_region") ? this._org.levelsForRegion().map((_) => _.id) : this._org.levelsForBuilding().map((_) => _.id);
    }
    const zone_list = (zones || []).filter((_) => (count[_] || 0) > 0);
    const data = {
      labels: zone_list.map((_) => {
        const level = this._org.levelWithID([_]);
        return level?.display_name || level.name || "";
      }),
      series: zone_list.map((_) => count[_] || 0)
    };
    this._level_chart = new PieChart("#level-chart", data);
  }
};
_ReportDesksChartsComponent.\u0275fac = function ReportDesksChartsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksChartsComponent)(\u0275\u0275directiveInject(ReportsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_ReportDesksChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksChartsComponent, selectors: [["report-desks-charts"]], inputs: { print: "print" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 9, vars: 2, consts: [[1, "flex", "items-center", "space-x-4", "w-full", "px-4", 3, "resize"], [1, "bg-base-100", "border", "border-base-200", "rounded", "flex-1", "h-[18rem]"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-full", "h-56", "mx-auto"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-[24rem]", "h-56", "mx-auto"]], template: function ReportDesksChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function ReportDesksChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, " Daily Utilisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 1)(6, "div", 2);
    \u0275\u0275text(7, " Level Utilisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-desks-charts.component.css.map */"] });
var ReportDesksChartsComponent = _ReportDesksChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksChartsComponent, { className: "ReportDesksChartsComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-charts.component.ts", lineNumber: 55 });
})();

// apps/concierge/src/app/reports/desks/report-desks.component.ts
var _c010 = ["report-desks", ""];
function ReportDesksComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "h3");
    \u0275\u0275text(4, "Total Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 11)(9, "h3");
    \u0275\u0275text(10, "Utilisation");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "p");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "report-desks-charts", 12)(15, "report-desks-overall-list", 12)(16, "report-desks-levels-list", 12);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, ctx_r1.total_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 7, ctx_r1.utilisation) || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function ReportDesksComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ReportDesksComponent_ng_container_12_ng_container_1_Template, 17, 9, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function ReportDesksComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "mat-spinner", 14);
    \u0275\u0275elementStart(2, "p", 15);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function ReportDesksComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "p", 15);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _ReportDesksComponent = class _ReportDesksComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.utilisation = this._state.stats.pipe(map((i) => ((i.utilisation || 0) * 100).toFixed(1)));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  print() {
    this.printing = true;
    setTimeout(() => {
      window.print();
      this.printing = false;
    }, 300);
  }
  ngOnInit() {
    this._state.setOptions({ type: "desks" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const id_list = params.get("zones") || params.get("zone_ids");
        const zones = id_list.split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_ReportDesksComponent.\u0275fac = function ReportDesksComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksComponent)(\u0275\u0275directiveInject(ReportsStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_ReportDesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksComponent, selectors: [["", "report-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c010, decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function ReportDesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ReportDesksComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function ReportDesksComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function ReportDesksComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Desks Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ReportDesksComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275template(14, ReportDesksComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ReportDesksComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, ReportDesksOverallListComponent, ReportDesksLevelListComponent, ReportDesksChartsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */"] });
var ReportDesksComponent = _ReportDesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksComponent, { className: "ReportDesksComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks.component.ts", lineNumber: 89 });
})();

// apps/concierge/src/app/reports/catering/catering-report-state.service.ts
var _CateringReportStateService = class _CateringReportStateService {
  constructor(_reports) {
    this._reports = _reports;
    this.catering_orders = combineLatest([
      this._reports.options,
      this._reports.bookings
    ]).pipe(map(([{ start, end }, list]) => {
      const start_date = startOfDay(start).valueOf();
      const end_date = endOfDay(end).valueOf();
      const orders = flatten(list.map((_) => _.valid_catering || []));
      const out = orders.filter((_) => _.deliver_at_time >= start_date && _.deliver_at_time < end_date && _.status !== "cancelled").sort((a, b) => a.event?.date - b.event?.date);
      return out;
    }), shareReplay(1));
    this.catering_items = this.catering_orders.pipe(map((orders) => {
      const items = [];
      for (const order of orders) {
        for (const item of order?.items || []) {
          const existing = items.find((_) => item.custom_id === _.custom_id);
          if (existing) {
            existing.quantity += item.quantity;
          } else {
            items.push(item);
          }
        }
      }
      return items.sort((a, b) => b.quantity - a.quantity);
    }), shareReplay(1));
    this.stats = combineLatest([
      this.catering_orders,
      this.catering_items
    ]).pipe(map(([orders, items]) => {
      const total_cost = orders.reduce((c, i) => c + i.total_cost, 0);
      return {
        order_count: orders.length,
        unique_items: items.length,
        item_count: orders.reduce((c, i) => c + i.item_count, 0),
        total_cost,
        avg_cost: total_cost / orders.length
      };
    }));
  }
  downloadOrders() {
    return __async(this, null, function* () {
      const orders = yield this.catering_orders.pipe(take(1)).toPromise();
      const csv_data = jsonToCsv(orders);
      return downloadFile("catering-orders.csv", csv_data);
    });
  }
};
_CateringReportStateService.\u0275fac = function CateringReportStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportStateService)(\u0275\u0275inject(ReportsStateService));
};
_CateringReportStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringReportStateService, factory: _CateringReportStateService.\u0275fac, providedIn: "root" });
var CateringReportStateService = _CateringReportStateService;

// apps/concierge/src/app/reports/catering/catering-report-overall.component.ts
var _CateringReportOverallComponent = class _CateringReportOverallComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_report, _org) {
    this._report = _report;
    this._org = _org;
    this.stats = this._report.stats;
  }
};
_CateringReportOverallComponent.\u0275fac = function CateringReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportOverallComponent)(\u0275\u0275directiveInject(CateringReportStateService), \u0275\u0275directiveInject(OrganisationService));
};
_CateringReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOverallComponent, selectors: [["catering-report-overall"]], decls: 32, vars: 21, consts: [["item", "", 1, "flex", "flex-col", "flex-1", "items-center", "justify-center"], ["count", "", 1, "text-3xl"], [1, "print:text-sm"], ["unique", "", 1, "text-3xl"], ["items", "", 1, "text-3xl"], ["total", "", 1, "text-3xl"], ["average", "", 1, "text-3xl"]], template: function CateringReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5, "Orders");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 0)(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 2);
    \u0275\u0275text(11, "Unique Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "div", 0)(13, "div", 4);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 2);
    \u0275\u0275text(17, "Ordered Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "div", 0)(19, "div", 5);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 2);
    \u0275\u0275text(24, "Total");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 0)(26, "div", 6);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "async");
    \u0275\u0275pipe(29, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 2);
    \u0275\u0275text(31, "Order Average");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = \u0275\u0275pipeBind1(3, 5, ctx.stats)) == null ? null : tmp_0_0.order_count) || "0", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ((tmp_1_0 = \u0275\u0275pipeBind1(9, 7, ctx.stats)) == null ? null : tmp_1_0.unique_items) || "0", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(15, 9, ctx.stats)) == null ? null : tmp_2_0.item_count) || "0", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(22, 13, ((tmp_3_0 = \u0275\u0275pipeBind1(21, 11, ctx.stats)) == null ? null : tmp_3_0.total_cost) / 100 || 0, ctx.code), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(29, 18, ((tmp_4_0 = \u0275\u0275pipeBind1(28, 16, ctx.stats)) == null ? null : tmp_4_0.avg_cost) / 100 || 0, ctx.code), " ");
  }
}, dependencies: [AsyncPipe, CurrencyPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n[item][_ngcontent-%COMP%] {\n  border: 1px solid var(--b2);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  height: 6rem;\n  width: 12rem;\n  min-width: 7rem;\n}\n/*# sourceMappingURL=catering-report-overall.component.css.map */"] });
var CateringReportOverallComponent = _CateringReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOverallComponent, { className: "CateringReportOverallComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-overall.component.ts", lineNumber: 63 });
})();

// apps/concierge/src/app/reports/catering/catering-report-orders.component.ts
var _c011 = (a0) => ({ key: "deliver_at", name: "Deliver At", content: a0 });
var _c18 = () => ({ key: "item_count", name: "Items" });
var _c28 = (a0) => ({ key: "total_cost", name: "Total Cost", content: a0 });
var _c38 = (a0, a1, a2) => [a0, a1, a2];
function CateringReportOrdersComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r2 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, data_r2), " at ", \u0275\u0275pipeBind2(3, 4, data_r2, ctx_r2.time_format), " ");
  }
}
function CateringReportOrdersComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, data_r4 / 100, ctx_r2.code), " ");
  }
}
var _CateringReportOrdersComponent = class _CateringReportOrdersComponent {
  get code() {
    return this._org.currency_code;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_report, _org, _settings) {
    this._report = _report;
    this._org = _org;
    this._settings = _settings;
    this.print = false;
    this.orders = this._report.catering_orders;
    this.download = () => this._report.downloadOrders();
  }
};
_CateringReportOrdersComponent.\u0275fac = function CateringReportOrdersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportOrdersComponent)(\u0275\u0275directiveInject(CateringReportStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_CateringReportOrdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOrdersComponent, selectors: [["catering-report-orders"]], inputs: { print: "print" }, decls: 12, vars: 13, consts: [["date_template", ""], ["cost_template", ""], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "rounded", "overflow-hidden", "bg-base-100", "border", "border-base-200", "mx-auto", "my-2"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["matRipple-icon", "", "matTooltip", "Download list", 1, "print:hidden", 3, "click"], ["empty_message", "No orders for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"]], template: function CateringReportOrdersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3, "Orders");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 5);
    \u0275\u0275listener("click", function CateringReportOrdersComponent_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.download());
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "download");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "simple-table", 6);
    \u0275\u0275template(8, CateringReportOrdersComponent_ng_template_8_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, CateringReportOrdersComponent_ng_template_10_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(9);
    const cost_template_r6 = \u0275\u0275reference(11);
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.orders)("columns", \u0275\u0275pureFunction3(9, _c38, \u0275\u0275pureFunction1(4, _c011, date_template_r5), \u0275\u0275pureFunction0(6, _c18), \u0275\u0275pureFunction1(7, _c28, cost_template_r6)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [MatTooltip, IconComponent, SimpleTableComponent, CurrencyPipe, DatePipe] });
var CateringReportOrdersComponent = _CateringReportOrdersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOrdersComponent, { className: "CateringReportOrdersComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-orders.component.ts", lineNumber: 60 });
})();

// apps/concierge/src/app/reports/catering/catering-report-items.component.ts
var _c012 = () => ({ key: "name", name: "Name" });
var _c19 = (a0) => ({ key: "options", name: "Options", content: a0 });
var _c29 = () => ({ key: "caterer", name: "Caterer" });
var _c39 = () => ({ key: "quantity", name: "Quantity" });
var _c48 = (a0) => ({ key: "unit_price", name: "Unit Price", content: a0 });
var _c55 = (a0) => ({ key: "total_cost", name: "Total Cost", content: a0 });
var _c63 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function CateringReportItemsComponent_ng_template_5_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.options(data_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (data_r1 == null ? null : data_r1.length) || 0, " option(s) ");
  }
}
function CateringReportItemsComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275template(1, CateringReportItemsComponent_ng_template_5_span_1_Template, 2, 2, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", data_r1.length);
  }
}
function CateringReportItemsComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "currency");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, (data_r3 || 0) / 100, ctx_r1.code));
  }
}
var _CateringReportItemsComponent = class _CateringReportItemsComponent {
  get code() {
    return this._org.currency_code;
  }
  constructor(_report, _org) {
    this._report = _report;
    this._org = _org;
    this.print = false;
    this.items = this._report.catering_items;
  }
  options(opts) {
    return opts.map((_) => _.name).join("\n");
  }
};
_CateringReportItemsComponent.\u0275fac = function CateringReportItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportItemsComponent)(\u0275\u0275directiveInject(CateringReportStateService), \u0275\u0275directiveInject(OrganisationService));
};
_CateringReportItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportItemsComponent, selectors: [["catering-report-items"]], inputs: { print: "print" }, decls: 9, vars: 20, consts: [["option_template", ""], ["cost_template", ""], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "rounded", "overflow-hidden", "bg-base-100", "border", "border-base-200", "mx-auto", "my-2"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["empty_message", "No orders for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "page_size", "sortable"], [1, "p-4"], ["class", "text-xs px-2 py-1 rounded bg-base-200", 3, "matTooltip", 4, "ngIf"], [1, "text-xs", "px-2", "py-1", "rounded", "bg-base-200", 3, "matTooltip"]], template: function CateringReportItemsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3, "Ordered Items");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "simple-table", 5);
    \u0275\u0275template(5, CateringReportItemsComponent_ng_template_5_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, CateringReportItemsComponent_ng_template_7_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_template_r4 = \u0275\u0275reference(6);
    const cost_template_r5 = \u0275\u0275reference(8);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx.items)("columns", \u0275\u0275pureFunction6(13, _c63, \u0275\u0275pureFunction0(4, _c012), \u0275\u0275pureFunction1(5, _c19, option_template_r4), \u0275\u0275pureFunction0(7, _c29), \u0275\u0275pureFunction0(8, _c39), \u0275\u0275pureFunction1(9, _c48, cost_template_r5), \u0275\u0275pureFunction1(11, _c55, cost_template_r5)))("page_size", ctx.print ? 0 : 10)("sortable", true);
  }
}, dependencies: [NgIf, MatTooltip, SimpleTableComponent, CurrencyPipe] });
var CateringReportItemsComponent = _CateringReportItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportItemsComponent, { className: "CateringReportItemsComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-items.component.ts", lineNumber: 68 });
})();

// apps/concierge/src/app/reports/catering/catering-report.component.ts
function CateringReportComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "catering-report-overall")(2, "catering-report-orders", 10)(3, "catering-report-items", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function CateringReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, CateringReportComponent_ng_container_12_ng_container_1_Template, 4, 2, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function CateringReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function CateringReportComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 13);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _CateringReportComponent = class _CateringReportComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this._state.setOptions({ type: "events" });
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const id_list = params.get("zones") || params.get("zone_ids");
        const zones = id_list.split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_CateringReportComponent.\u0275fac = function CateringReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportComponent)(\u0275\u0275directiveInject(ReportsStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_CateringReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportComponent, selectors: [["catering-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200", "overflow-hidden"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function CateringReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function CateringReportComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function CateringReportComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function CateringReportComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Catering Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, CateringReportComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275template(14, CateringReportComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, CateringReportComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, CateringReportOverallComponent, CateringReportOrdersComponent, CateringReportItemsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=catering-report.component.css.map */"] });
var CateringReportComponent = _CateringReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportComponent, { className: "CateringReportComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report.component.ts", lineNumber: 72 });
})();

// apps/concierge/src/app/reports/contact-tracing/get-user.pipe.ts
var USER_LIST = {};
var _GetUserPipe = class _GetUserPipe {
  /**
   * Get staff memeber details
   * @param id ID, Email or Staff ID of the user
   */
  transform(id) {
    if (!id)
      return of(null);
    if (!USER_LIST[id]) {
      USER_LIST[id] = searchStaff(id).pipe(map((_) => _[0] || new StaffUser({ id, name: id })), catchError((_) => of(new StaffUser({ id, name: id }))), shareReplay(1));
    }
    return USER_LIST[id];
  }
  static addUser(user) {
    USER_LIST[user.id] = of(user).pipe(shareReplay(1));
  }
};
_GetUserPipe.\u0275fac = function GetUserPipe_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GetUserPipe)();
};
_GetUserPipe.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _GetUserPipe, pure: true });
var GetUserPipe = _GetUserPipe;

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service.ts
var _ContactTracingStateService = class _ContactTracingStateService {
  get system_id() {
    return this._org.binding("contact_tracing");
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_org, _reports, _settings) {
    this._org = _org;
    this._reports = _reports;
    this._settings = _settings;
    this._loading = new BehaviorSubject("");
    this._generate = new BehaviorSubject(0);
    this._options = new BehaviorSubject({
      start: startOfDay(Date.now()),
      end: endOfDay(Date.now())
    });
    this.events = combineLatest([
      this._options,
      this._generate
    ]).pipe(distinctUntilChanged((a, b) => a[1] === b[1]), filter(([_, gen]) => !!gen), switchMap(([{ start, end, user }]) => {
      if (!user)
        return of([]);
      this._loading.next("Loading contact events...");
      const mod = getModule(this.system_id, "ContactTracing");
      user = user || currentUser();
      GetUserPipe.addUser(user);
      return this.system_id && mod ? mod.execute("close_contacts", [
        user.email,
        user.username,
        getUnixTime(start),
        getUnixTime(end)
      ]).catch((err) => {
        notifyError(`${err?.msg || JSON.stringify(err)}`);
        return [];
      }) : of([]);
    }), map((list) => {
      const user = this._options.getValue().user || currentUser();
      return list.map((_) => ({
        mac_address: _.mac_address,
        date: _.contact_time * 1e3,
        duration: Math.floor(_.duration / 60) || 0,
        user_id: user.id,
        user: user.name,
        contact_id: _.username,
        distance: 1
      }));
    }), tap((_) => this._loading.next("")), startWith([]), shareReplay(1));
    this.options = this._options.asObservable();
    this.loading = this._loading.asObservable();
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  downloadReport() {
    return __async(this, null, function* () {
      const { start, end } = yield this._reports.options.pipe(take(1)).toPromise();
      const events = yield this.events.pipe(take(1)).toPromise();
      const pipe = new GetUserPipe();
      const processed_events = yield Promise.all(events.map((_) => __async(this, null, function* () {
        return {
          "MAC Address": _.mac_address,
          Date: format(_.date, "dd MMM yyyy, " + this.time_format),
          "User Name": _.user,
          "Contact Name": (yield pipe.transform(_.contact_id).toPromise())?.name || (_.contact_id !== "null" ? _.contact_id : null) || _.mac_address,
          Duration: `${Math.floor(_.duration / 60) ? Math.floor(_.duration / 60) + "h " : ""}${Math.floor(_.duration % 60) + "m"}`,
          Distance: _.distance
        };
      })));
      if (!processed_events?.length) {
        return notifyWarn("No events to download.");
      }
      downloadFile(`report+contact-tracing+${format(start, "yyyy-MM-dd")}+${format(end, "yyyy-MM-dd")}.csv`, jsonToCsv(processed_events));
    });
  }
};
_ContactTracingStateService.\u0275fac = function ContactTracingStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactTracingStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(ReportsStateService), \u0275\u0275inject(SettingsService));
};
_ContactTracingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactTracingStateService, factory: _ContactTracingStateService.\u0275fac, providedIn: "root" });
var ContactTracingStateService = _ContactTracingStateService;

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts
var _ContactTracingOptionsComponent = class _ContactTracingOptionsComponent {
  get week_start() {
    return this._settings.get("app.week_start");
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.printing = new EventEmitter();
    this.download = new EventEmitter();
    this.options = this._state.options;
    this.setOptions = (_) => this._state.setOptions(_);
    this.generate = () => this._state.generateReport();
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
};
_ContactTracingOptionsComponent.\u0275fac = function ContactTracingOptionsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactTracingOptionsComponent)(\u0275\u0275directiveInject(ContactTracingStateService), \u0275\u0275directiveInject(SettingsService));
};
_ContactTracingOptionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingOptionsComponent, selectors: [["contact-tracing-options"]], outputs: { printing: "printing", download: "download" }, decls: 19, vars: 16, consts: [["startDate", ""], ["endDate", ""], [1, "flex", "items-center", "space-x-2", "w-full", "p-4", "bg-base-100", "shadow"], [3, "week_start"], [3, "ngModelChange", "ngModel"], ["placeholder", "Search for user to trace...", 1, "w-64", 3, "ngModelChange", "ngModel"], [1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", 1, "h-12", "w-12", "rounded", "bg-secondary", "text-secondary-content", 3, "click", "disabled"]], template: function ContactTracingOptionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "date-range-field", 3)(2, "input", 4, 0);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setOptions({ start: $event, user: null }) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "input", 4, 1);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setOptions({ end: $event, user: null }) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "a-user-search-field", 5);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("ngModelChange", function ContactTracingOptionsComponent_Template_a_user_search_field_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setOptions({ user: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 6);
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275listener("click", function ContactTracingOptionsComponent_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.download.emit());
    });
    \u0275\u0275elementStart(13, "app-icon");
    \u0275\u0275text(14, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275listener("click", function ContactTracingOptionsComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.print());
    });
    \u0275\u0275elementStart(17, "app-icon");
    \u0275\u0275text(18, "print");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    \u0275\u0275advance();
    \u0275\u0275property("week_start", ctx.week_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(4, 6, ctx.options)) == null ? null : tmp_3_0.start);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", (tmp_4_0 = \u0275\u0275pipeBind1(7, 8, ctx.options)) == null ? null : tmp_4_0.end);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(9, 10, ctx.options)) == null ? null : tmp_5_0.user);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", !((tmp_6_0 = \u0275\u0275pipeBind1(12, 12, ctx.options)) == null ? null : tmp_6_0.user));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !((tmp_7_0 = \u0275\u0275pipeBind1(16, 14, ctx.options)) == null ? null : tmp_7_0.user));
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatRipple, DateRangeFieldComponent, UserSearchFieldComponent, IconComponent, AsyncPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--n) !important;\n}\n/*# sourceMappingURL=contact-tracing-options.component.css.map */"] });
var ContactTracingOptionsComponent = _ContactTracingOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingOptionsComponent, { className: "ContactTracingOptionsComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts", lineNumber: 66 });
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts
var _c013 = (a0) => ({ key: "date", name: "Time of Contact", content: a0 });
var _c110 = (a0) => ({ key: "user_id", name: "Person", content: a0 });
var _c210 = (a0) => ({ key: "contact_id", name: "Close Contact", content: a0 });
var _c310 = (a0) => ({ key: "duration", name: "Duration", content: a0 });
var _c49 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_10_0;
    const data_r2 = ctx.data;
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_10_0 = \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, data_r2))) == null ? null : tmp_10_0.name) || row_r3.mac_address, " ");
  }
}
function ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r4 = ctx.data;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, data_r4, "mediumDate"), ", ", \u0275\u0275pipeBind2(3, 5, data_r4, ctx_r4.time_format), " ");
  }
}
function ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    const ctx_r4 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r4.formatDuration(data_r6 || 0) || "Less than a minute", " ");
  }
}
function ContactTracingReportComponent_ng_container_10_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 13)(2, "div", 14)(3, "h2", 15);
    \u0275\u0275text(4, " Contact Events ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "simple-table", 16);
    \u0275\u0275template(6, ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_6_Template, 4, 5, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_8_Template, 4, 8, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, ContactTracingReportComponent_ng_container_10_ng_container_1_ng_template_10_Template, 2, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const user_template_r7 = \u0275\u0275reference(7);
    const date_template_r8 = \u0275\u0275reference(9);
    const duration_template_r9 = \u0275\u0275reference(11);
    const ctx_r4 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(5);
    \u0275\u0275property("data", ctx_r4.tracing_events)("columns", \u0275\u0275pureFunction4(12, _c49, \u0275\u0275pureFunction1(4, _c013, date_template_r8), \u0275\u0275pureFunction1(6, _c110, user_template_r7), \u0275\u0275pureFunction1(8, _c210, user_template_r7), \u0275\u0275pureFunction1(10, _c310, duration_template_r9)))("sortable", true)("page_size", ctx_r4.print ? 0 : 30);
  }
}
function ContactTracingReportComponent_ng_container_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ContactTracingReportComponent_ng_container_10_ng_container_1_Template, 12, 17, "ng-container", 12);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r4 = \u0275\u0275nextContext();
    const empty_state_r10 = \u0275\u0275reference(15);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r4.options)) == null ? null : tmp_3_0.user)("ngIfElse", empty_state_r10);
  }
}
function ContactTracingReportComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "map-spinner", 19);
    \u0275\u0275elementStart(2, "p", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r4.loading));
  }
}
function ContactTracingReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "p", 20);
    \u0275\u0275text(2, "Select a user from the topbar to begin");
    \u0275\u0275elementEnd()();
  }
}
var _ContactTracingReportComponent = class _ContactTracingReportComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings, _org) {
    this._state = _state;
    this._settings = _settings;
    this._org = _org;
    this.printing = false;
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.tracing_events = this._state.events;
    this.setOptions = (_) => this._state.setOptions(_);
    this.downloadReport = () => this._state.downloadReport();
    this.formatDuration = (d) => formatDuration({ hours: Math.floor(d / 60), minutes: d % 60 });
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
};
_ContactTracingReportComponent.\u0275fac = function ContactTracingReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactTracingReportComponent)(\u0275\u0275directiveInject(ContactTracingStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_ContactTracingReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingReportComponent, selectors: [["app-contact-tracing-report"]], decls: 16, vars: 9, consts: [["load_state", ""], ["empty_state", ""], ["user_template", ""], ["date_template", ""], ["duration_template", ""], [1, "print:hidden", 3, "printing", "download"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200", "overflow-hidden"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [1, "w-[64rem]", "max-w-[calc(100%-2rem)]", "mx-auto", "my-2", "rounded-lg", "border", "border-base-200"], [1, "border-b", "border-base-200", "flex", "items-center", "justify-between", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["empty_message", "No contact tracing events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"], [1, "opacity-30"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "screen-only"]], template: function ContactTracingReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "contact-tracing-options", 5);
    \u0275\u0275listener("printing", function ContactTracingReportComponent_Template_contact_tracing_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function ContactTracingReportComponent_Template_contact_tracing_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "div", 8);
    \u0275\u0275element(4, "img", 9);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275element(7, "div", 10);
    \u0275\u0275elementStart(8, "h2", 11);
    \u0275\u0275text(9, " Contact Tracing Report ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(10, ContactTracingReportComponent_ng_container_10_Template, 3, 4, "ng-container", 12);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(12, ContactTracingReportComponent_ng_template_12_Template, 5, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, ContactTracingReportComponent_ng_template_14_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    const load_state_r11 = \u0275\u0275reference(13);
    \u0275\u0275advance(4);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(5, 3, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(6, 5, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(11, 7, ctx.loading))("ngIfElse", load_state_r11);
  }
}, dependencies: [NgIf, SimpleTableComponent, AuthenticatedImageDirective, ContactTracingOptionsComponent, AsyncPipe, DatePipe, GetUserPipe], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=contact-tracing-report.component.css.map */"] });
var ContactTracingReportComponent = _ContactTracingReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingReportComponent, { className: "ContactTracingReportComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts", lineNumber: 133 });
})();

// apps/concierge/src/app/reports/custom-report.component.ts
function CustomReportComponent_iframe_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 1);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.report_url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var EMPTY = {};
var _CustomReportComponent = class _CustomReportComponent extends AsyncHandler {
  get report_url() {
    let report = (this._settings.get("app.custom_reports") || []).find((_) => _.id === this.id) || EMPTY;
    if (!report.url)
      return "";
    const url = report.url + (report.url.includes("?") ? "&" : "?") + `kiosk=tv`;
    return url + (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : "");
  }
  constructor(_settings, _route) {
    super();
    this._settings = _settings;
    this._route = _route;
    this.id = "";
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.id = params.get("id") || ""));
  }
};
_CustomReportComponent.\u0275fac = function CustomReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CustomReportComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute));
};
_CustomReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomReportComponent, selectors: [["custom-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["class", "w-full h-full", 3, "src", 4, "ngIf"], [1, "w-full", "h-full", 3, "src"]], template: function CustomReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, CustomReportComponent_iframe_0_Template, 2, 4, "iframe", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.id);
  }
}, dependencies: [NgIf, SafePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=custom-report.component.css.map */"] });
var CustomReportComponent = _CustomReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomReportComponent, { className: "CustomReportComponent", filePath: "apps/concierge/src/app/reports/custom-report.component.ts", lineNumber: 25 });
})();

// apps/concierge/src/app/reports/new-reports.component.ts
var _c014 = ["app-new-reports", ""];
function NewReportsComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
var _NewReportsComponent = class _NewReportsComponent {
  get path() {
    const parts = this._router.url.split("/");
    return parts[parts.length - 1];
  }
  constructor(_router) {
    this._router = _router;
  }
};
_NewReportsComponent.\u0275fac = function NewReportsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewReportsComponent)(\u0275\u0275directiveInject(Router));
};
_NewReportsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewReportsComponent, selectors: [["", "app-new-reports", ""]], attrs: _c014, decls: 6, vars: 1, consts: [[1, "screen-only"], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full", "relative"], ["reports-menu", "", "class", "absolute inset-0 screen-only", 4, "ngIf"], ["reports-menu", "", 1, "absolute", "inset-0", "screen-only"]], template: function NewReportsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar", 0);
    \u0275\u0275elementStart(3, "main", 2);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275template(5, NewReportsComponent_div_5_Template, 1, 0, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", ctx.path === "reports");
  }
}, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, RouterOutlet, ReportsMenuComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=new-reports.component.css.map */"] });
var NewReportsComponent = _NewReportsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewReportsComponent, { className: "NewReportsComponent", filePath: "apps/concierge/src/app/reports/new-reports.component.ts", lineNumber: 39 });
})();

// apps/concierge/src/app/reports/assets/assets-report.service.ts
var _AssetsReportService = class _AssetsReportService {
  _processBookingStats(booking_list, products) {
    const booked_assets = booking_list.map((_) => _.asset_ids?.length || [_.asset_id]).flat();
    const unique_events = unique(booking_list.map((_) => _.linked_event || _.linked_bookings[0]).filter((_) => _), "id").map((i) => new CalendarEvent(i));
    return {
      events: unique_events,
      bookings: booking_list,
      products,
      booking_count: booking_list.length,
      event_count: unique_events.length,
      total_booked_items: booking_list.reduce((c, i) => c + i.asset_ids.length, 0),
      unique_items: products.filter((p) => p.assets.find((_) => booked_assets.includes(_.id))).length,
      products_booked: products.filter((p) => p.assets.find((_) => booked_assets.includes(_.id))).map((p) => ({
        name: p.name,
        count: p.assets.filter((_) => booked_assets.includes(_.id)).length
      }))
    };
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
    this._loading = new BehaviorSubject(false);
    this._options = new BehaviorSubject({});
    this._generate = new BehaviorSubject(0);
    this.loading$ = this._loading.asObservable();
    this.options$ = this._options.asObservable();
    this.products$ = this._generate.pipe(filter((gen) => gen > 0), switchMap(() => this._options.pipe(take(1))), debounceTime(300), switchMap((options) => {
      this._loading.next(true);
      return queryAssetGroupsExtended({
        zones: (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
      });
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.bookings$ = this._generate.pipe(filter((gen) => gen > 0), switchMap(() => this._options.pipe(take(1))), debounceTime(300), switchMap((options) => {
      this._loading.next(true);
      const { start, end, zones } = options;
      return queryBookings({
        period_start: getUnixTime(startOfDay(start || Date.now())),
        period_end: getUnixTime(endOfDay(end || start || Date.now())),
        type: "asset-request",
        zones: (zones || [])?.join(",") || (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
      });
    }), tap((_) => {
      if (!_.length) {
        notifyError("No bookings for the selected levels and period");
      }
      this._loading.next(false);
    }), shareReplay(1));
    this.stats$ = combineLatest([
      this.products$,
      this.bookings$
    ]).pipe(map(([products, bookings]) => {
      const data = this._processBookingStats(bookings, products);
      return data;
    }), shareReplay(1));
    this.daily_stats$ = combineLatest([
      this._options,
      this.products$,
      this.bookings$
    ]).pipe(map(([options, products, bookings]) => {
      const stats = {};
      let count = 0;
      let start = startOfDay(options.start);
      const end = endOfDay(options.end);
      while (isBefore(start, end) && count < 365) {
        const date = format(start, "yyyy-MM-dd");
        stats[date] = this._processBookingStats(bookings.filter((_) => isSameDay(_.date, start)), products);
        start = addDays(start, 1);
        count++;
      }
      return stats;
    }), shareReplay(1));
    this.expired_items$ = this._generate.pipe(switchMap(() => {
      this._loading.next(true);
      return combineLatest([queryAssetPurchaseOrders({}), this._options]);
    }), map(([purchase_orders, options]) => {
      return purchase_orders.filter((order) => {
        order.expected_service_end_date < getUnixTime(options.start || Date.now());
      });
    }), tap(() => this._loading.next(false)), shareReplay(1));
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  downloadReport() {
    return __async(this, null, function* () {
      const options = this._options.getValue();
      const bookings = yield this.bookings$.pipe(take(1)).toPromise();
      if (!bookings?.length)
        return;
      const is_same = isSameDay(options.start, options.end);
      const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
      downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((bkn) => {
        const details = bkn.toJSON();
        delete details.zones;
        delete details.server_names;
        delete details.extension_data;
        return details;
      }), "	"));
    });
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
};
_AssetsReportService.\u0275fac = function AssetsReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetsReportService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_AssetsReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetsReportService, factory: _AssetsReportService.\u0275fac, providedIn: "root" });
var AssetsReportService = _AssetsReportService;

// apps/concierge/src/app/reports/assets/asset-report-overall.component.ts
var _AssetReportOverallComponent = class _AssetReportOverallComponent {
  constructor(_state) {
    this._state = _state;
    this.total_count = this._state.stats$.pipe(map((i) => i.booking_count));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.stats$.pipe(map(({ events }) => events.reduce((c, i) => c + i.duration, 0) / events.length));
  }
};
_AssetReportOverallComponent.\u0275fac = function AssetReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportOverallComponent)(\u0275\u0275directiveInject(AssetsReportService));
};
_AssetReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportOverallComponent, selectors: [["asset-report-overall"]], decls: 19, vars: 9, consts: [[1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], [1, "text-sm"], [1, "text-2xl"]], template: function AssetReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Business Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 1)(8, "h3", 2);
    \u0275\u0275text(9, "Total Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 3);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "h3", 2);
    \u0275\u0275text(15, "Average Booking Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 3);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx.business_days) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, ctx.total_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 7, ctx.avg_length) || "0", " mins");
  }
}, dependencies: [AsyncPipe] });
var AssetReportOverallComponent = _AssetReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportOverallComponent, { className: "AssetReportOverallComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-overall.component.ts", lineNumber: 28 });
})();

// apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts
var _c015 = () => ({ key: "name", name: "Name" });
var _c111 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c211 = () => ({ key: "booking_count", name: "Bookings Count" });
var _c311 = () => ({ key: "booked_count", name: "Number Booked" });
var _c410 = () => ({ key: "asset_count", name: "Assets Available" });
var _c56 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetReportDailyUsageComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AssetReportDailyUsageComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function AssetReportDailyUsageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
var _AssetReportDailyUsageComponent = class _AssetReportDailyUsageComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.daily_products = this._state.daily_stats$.pipe(map((days) => {
      let list = [];
      for (const date in days) {
        const { events, bookings, products } = days[date];
        const products_list = (products || []).map((p) => {
          const product_bookings = bookings.filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
          return {
            name: p.name,
            date,
            booking_count: product_bookings.length,
            booked_count: product_bookings.reduce((acc, b) => acc + b.asset_ids.filter((asset_id) => p.assets.find(({ id }) => asset_id === id)).length, 0),
            asset_count: p.assets.length
          };
        });
        list = list.concat(products_list.filter((p) => p.booking_count > 0));
      }
      return list;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.daily_products.pipe(take(1)).toPromise();
      downloadFile("report-assets-daily-usage.csv", jsonToCsv(data));
    });
  }
};
_AssetReportDailyUsageComponent.\u0275fac = function AssetReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportDailyUsageComponent)(\u0275\u0275directiveInject(AssetsReportService));
};
_AssetReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportDailyUsageComponent, selectors: [["asset-report-daily-usage"]], inputs: { print: "print" }, decls: 8, vars: 17, consts: [["date_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function AssetReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Daily Asset Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssetReportDailyUsageComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275template(6, AssetReportDailyUsageComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_products)("columns", \u0275\u0275pureFunction5(11, _c56, \u0275\u0275pureFunction0(5, _c015), \u0275\u0275pureFunction1(6, _c111, date_template_r4), \u0275\u0275pureFunction0(8, _c211), \u0275\u0275pureFunction0(9, _c311), \u0275\u0275pureFunction0(10, _c410)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe] });
var AssetReportDailyUsageComponent = _AssetReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportDailyUsageComponent, { className: "AssetReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts", lineNumber: 41 });
})();

// apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts
var _c016 = () => ({ key: "name", name: "Name" });
var _c112 = () => ({ key: "booking_count", name: "Bookings with Product" });
var _c212 = () => ({ key: "booked_count", name: "Number Booked" });
var _c312 = () => ({ key: "asset_count", name: "Assets Available" });
var _c411 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportProductUsageComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function AssetReportProductUsageComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
var _AssetReportProductUsageComponent = class _AssetReportProductUsageComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.products = this._state.stats$.pipe(map(({ events, bookings, products }) => products.map((p) => {
      const product_bookings = bookings.filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
      return {
        name: p.name,
        booking_count: product_bookings.length,
        booked_count: product_bookings.reduce((acc, b) => acc + b.asset_ids.filter((asset_id) => p.assets.find(({ id }) => asset_id === id)).length, 0),
        asset_count: p.assets.length
      };
    }).filter((p) => p.booking_count > 0)));
    this.download = () => __async(this, null, function* () {
      const data = yield this.products.pipe(take(1)).toPromise();
      downloadFile("report-assets-product-usage.csv", jsonToCsv(data));
    });
  }
};
_AssetReportProductUsageComponent.\u0275fac = function AssetReportProductUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportProductUsageComponent)(\u0275\u0275directiveInject(AssetsReportService));
};
_AssetReportProductUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportProductUsageComponent, selectors: [["asset-report-product-usage"]], inputs: { print: "print" }, decls: 6, vars: 14, consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]], template: function AssetReportProductUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Asset Products Usage");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssetReportProductUsageComponent_button_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.products)("columns", \u0275\u0275pureFunction4(9, _c411, \u0275\u0275pureFunction0(5, _c016), \u0275\u0275pureFunction0(6, _c112), \u0275\u0275pureFunction0(7, _c212), \u0275\u0275pureFunction0(8, _c312)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent] });
var AssetReportProductUsageComponent = _AssetReportProductUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportProductUsageComponent, { className: "AssetReportProductUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/reports/assets/asset-report-users.component.ts
var _c017 = () => ({ key: "name", name: "Name" });
var _c113 = () => ({ key: "booking_count", name: "Bookings" });
var _c213 = () => ({ key: "asset_count", name: "Assets Booked" });
var _c313 = () => ({ key: "asset_types", name: "Asset Types" });
var _c412 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportUsersComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275listener("click", function AssetReportUsersComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
var _AssetReportUsersComponent = class _AssetReportUsersComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.users = this._state.stats$.pipe(map(({ events, bookings, products }) => {
      const data = unique(events, "host").map((user_event) => {
        const host_bookings = bookings.filter((b) => b.booked_by_email === user_event.host);
        const booked_assets = unique(host_bookings.map((_) => _.asset_ids).flat());
        const booked_products = unique(booked_assets.map((i) => products.find((p) => p.assets.find((_) => _.id === i))?.name));
        return {
          name: user_event.organiser?.name || user_event.organiser?.email || user_event.host,
          booking_count: events.filter((event) => event.host === user_event.host).length,
          asset_count: booked_assets.length,
          asset_types: booked_products.length || 0
        };
      });
      return data;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.users.pipe(take(1)).toPromise();
      downloadFile("report-assets-users.csv", jsonToCsv(data));
    });
  }
};
_AssetReportUsersComponent.\u0275fac = function AssetReportUsersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportUsersComponent)(\u0275\u0275directiveInject(AssetsReportService));
};
_AssetReportUsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportUsersComponent, selectors: [["asset-report-users"]], inputs: { print: "print" }, decls: 6, vars: 14, consts: [[1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"]], template: function AssetReportUsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Asset Requestees");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssetReportUsersComponent_button_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.users)("columns", \u0275\u0275pureFunction4(9, _c412, \u0275\u0275pureFunction0(5, _c017), \u0275\u0275pureFunction0(6, _c113), \u0275\u0275pureFunction0(7, _c213), \u0275\u0275pureFunction0(8, _c313)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent] });
var AssetReportUsersComponent = _AssetReportUsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportUsersComponent, { className: "AssetReportUsersComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-users.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts
var _c018 = () => ({ key: "purchase_order_number", name: "PO Number" });
var _c114 = () => ({ key: "invoice_number", name: "Invoice Number" });
var _c214 = (a0) => ({ key: "purchase_date", name: "Purchase Date", content: a0 });
var _c314 = (a0) => ({ key: "expected_service_start_date", name: "Service Start", content: a0 });
var _c413 = (a0) => ({ key: "expected_service_end_date", name: "Service End", content: a0 });
var _c57 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetReportExpiredItemsComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AssetReportExpiredItemsComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function AssetReportExpiredItemsComponent_ng_template_6_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "No Date");
    \u0275\u0275elementEnd();
  }
}
function AssetReportExpiredItemsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275template(1, AssetReportExpiredItemsComponent_ng_template_6_span_1_Template, 2, 0, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !data_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 ? \u0275\u0275pipeBind2(3, 2, data_r3 * 1e3, "mediumDate") : "", " ");
  }
}
var _AssetReportExpiredItemsComponent = class _AssetReportExpiredItemsComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.expired_items = this._state.expired_items$;
    this.download = () => __async(this, null, function* () {
      const data = yield this.expired_items.pipe(take(1)).toPromise();
      downloadFile("report-assets-expired-items.csv", jsonToCsv(data));
    });
  }
};
_AssetReportExpiredItemsComponent.\u0275fac = function AssetReportExpiredItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportExpiredItemsComponent)(\u0275\u0275directiveInject(AssetsReportService));
};
_AssetReportExpiredItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportExpiredItemsComponent, selectors: [["asset-report-expired-items"]], inputs: { print: "print" }, decls: 8, vars: 19, consts: [["date_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No purchase orders expired for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"], ["class", "opacity-30", 4, "ngIf"], [1, "opacity-30"]], template: function AssetReportExpiredItemsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, " Expired Assets Purchase Orders ");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, AssetReportExpiredItemsComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275template(6, AssetReportExpiredItemsComponent_ng_template_6_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.expired_items)("columns", \u0275\u0275pureFunction5(13, _c57, \u0275\u0275pureFunction0(5, _c018), \u0275\u0275pureFunction0(6, _c114), \u0275\u0275pureFunction1(7, _c214, date_template_r4), \u0275\u0275pureFunction1(9, _c314, date_template_r4), \u0275\u0275pureFunction1(11, _c413, date_template_r4)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe] });
var AssetReportExpiredItemsComponent = _AssetReportExpiredItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportExpiredItemsComponent, { className: "AssetReportExpiredItemsComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/reports/assets/assets-report.component.ts
var _c019 = ["report-assets", ""];
function AssetsReportComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "asset-report-overall")(2, "asset-report-daily-usage", 10)(3, "asset-report-product-usage", 10)(4, "asset-report-users", 10)(5, "asset-report-expired-items", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function AssetsReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, AssetsReportComponent_ng_container_12_ng_container_1_Template, 6, 4, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function AssetsReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function AssetsReportComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 13);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _AssetsReportComponent = class _AssetsReportComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.stats$.pipe(map((i) => i.total_booked_items || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const zones = (params.get("zones") || params.get("zone_ids")).split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_AssetsReportComponent.\u0275fac = function AssetsReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetsReportComponent)(\u0275\u0275directiveInject(AssetsReportService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_AssetsReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetsReportComponent, selectors: [["", "report-assets", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c019, decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function AssetsReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function AssetsReportComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function AssetsReportComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function AssetsReportComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Assets Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, AssetsReportComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, AssetsReportComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, AssetsReportComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, AssetReportOverallComponent, AssetReportDailyUsageComponent, AssetReportProductUsageComponent, AssetReportUsersComponent, AssetReportExpiredItemsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=assets-report.component.css.map */"] });
var AssetsReportComponent = _AssetsReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetsReportComponent, { className: "AssetsReportComponent", filePath: "apps/concierge/src/app/reports/assets/assets-report.component.ts", lineNumber: 76 });
})();

// apps/concierge/src/app/reports/visitors/visitors-report.service.ts
var _VisitorsReportService = class _VisitorsReportService {
  constructor(_settings, _org) {
    this._settings = _settings;
    this._org = _org;
    this._loading = new BehaviorSubject(false);
    this._options = new BehaviorSubject({});
    this._generate = new BehaviorSubject(0);
    this.loading$ = this._loading.asObservable();
    this.options$ = this._options.asObservable();
    this.bookings$ = this._generate.pipe(filter((gen) => gen > 0), switchMap(() => this._options.pipe(take(1))), debounceTime(300), switchMap((options) => {
      this._loading.next(true);
      const { start, end, zones } = options;
      return queryBookings({
        period_start: getUnixTime(startOfDay(start || Date.now())),
        period_end: getUnixTime(endOfDay(end || start || Date.now())),
        type: "visitor",
        zones: (zones || [])?.join(",") || (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
      });
    }), tap((_) => {
      if (!_.length) {
        notifyError("No bookings for the selected levels and period");
      }
      this._loading.next(false);
    }), startWith([]), shareReplay(1));
    this.daily_stats$ = combineLatest([
      this.bookings$,
      this._options
    ]).pipe(map(([bookings, options]) => {
      const days = {};
      for (const booking of bookings) {
        const date = format(booking.date, "yyyy-MM-dd");
        if (!days[date]) {
          days[date] = {
            date: booking.date,
            bookings: []
          };
        }
        days[date].bookings.push(booking);
      }
      return days;
    }), shareReplay(1));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  downloadReport() {
    return __async(this, null, function* () {
      const options = this._options.getValue();
      const bookings = yield this.bookings$.pipe(take(1)).toPromise();
      if (!bookings?.length)
        return;
      const is_same = isSameDay(options.start, options.end);
      const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
      downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((bkn) => {
        const details = bkn.toJSON();
        delete details.zones;
        delete details.server_names;
        delete details.extension_data;
        return details;
      }), "	"));
    });
  }
};
_VisitorsReportService.\u0275fac = function VisitorsReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsReportService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService));
};
_VisitorsReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsReportService, factory: _VisitorsReportService.\u0275fac, providedIn: "root" });
var VisitorsReportService = _VisitorsReportService;

// apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts
var _VisitorReportOverallComponent = class _VisitorReportOverallComponent {
  constructor(_state) {
    this._state = _state;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.bookings$.pipe(map((events) => Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length)));
  }
};
_VisitorReportOverallComponent.\u0275fac = function VisitorReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportOverallComponent)(\u0275\u0275directiveInject(VisitorsReportService));
};
_VisitorReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportOverallComponent, selectors: [["visitor-report-overall"]], decls: 19, vars: 9, consts: [[1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], [1, "text-sm"], [1, "text-2xl"]], template: function VisitorReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Business Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 1)(8, "h3", 2);
    \u0275\u0275text(9, "Total Visits");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 3);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "h3", 2);
    \u0275\u0275text(15, "Avg. Booking Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 3);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx.business_days) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, ctx.total_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 7, ctx.avg_length) || "0", " mins");
  }
}, dependencies: [AsyncPipe] });
var VisitorReportOverallComponent = _VisitorReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportOverallComponent, { className: "VisitorReportOverallComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts", lineNumber: 28 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts
var _c020 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c115 = () => ({ key: "booking_count", name: "Unique Visitors" });
var _c215 = () => ({ key: "host_count", name: "Host Count" });
var _c315 = () => ({ key: "booked_count", name: "Booking Count" });
var _c414 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function VisitorReportDailyUsageComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function VisitorReportDailyUsageComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function VisitorReportDailyUsageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
var _VisitorReportDailyUsageComponent = class _VisitorReportDailyUsageComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.daily_stats = this._state.daily_stats$.pipe(map((days) => {
      let list = [];
      for (const date in days) {
        list.push({
          date,
          booking_count: unique(days[date].bookings, "asset_id").length,
          host_count: unique(days[date].bookings, "user_email").length,
          booked_count: days[date].bookings.length
        });
      }
      return list;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.daily_stats.pipe(take(1)).toPromise();
      downloadFile("report-visitors-daily-usage.csv", jsonToCsv(data));
    });
  }
};
_VisitorReportDailyUsageComponent.\u0275fac = function VisitorReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportDailyUsageComponent)(\u0275\u0275directiveInject(VisitorsReportService));
};
_VisitorReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportDailyUsageComponent, selectors: [["visitor-report-daily-usage"]], inputs: { print: "print" }, decls: 8, vars: 15, consts: [["date_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function VisitorReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Daily Visitor Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, VisitorReportDailyUsageComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275template(6, VisitorReportDailyUsageComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_stats)("columns", \u0275\u0275pureFunction4(10, _c414, \u0275\u0275pureFunction1(5, _c020, date_template_r4), \u0275\u0275pureFunction0(7, _c115), \u0275\u0275pureFunction0(8, _c215), \u0275\u0275pureFunction0(9, _c315)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe] });
var VisitorReportDailyUsageComponent = _VisitorReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportDailyUsageComponent, { className: "VisitorReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts
var _c021 = () => ({ key: "visitor_name", name: "Visitor Name" });
var _c116 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c216 = () => ({ key: "host", name: "Host" });
var _c316 = () => ({ key: "checked_in", name: "Checked In" });
var _c415 = () => ({ key: "self_registered", name: "Self Registered" });
var _c58 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function VisitorReportListComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function VisitorReportListComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function VisitorReportListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
var _VisitorReportListComponent = class _VisitorReportListComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.visitor_bookings = this._state.bookings$.pipe(map((bookings) => {
      let list = [];
      for (const booking of bookings) {
        list.push({
          visitor_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
          date: booking.date,
          host: booking.user_name || booking.user_email,
          checked_in: booking.checked_in ? "Yes" : "No",
          self_registered: booking.extension_data?.self_registered ? "Yes" : "No"
        });
      }
      return list;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.visitor_bookings.pipe(take(1)).toPromise();
      downloadFile("report-assets-daily-usage.csv", jsonToCsv(data));
    });
  }
};
_VisitorReportListComponent.\u0275fac = function VisitorReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportListComponent)(\u0275\u0275directiveInject(VisitorsReportService));
};
_VisitorReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportListComponent, selectors: [["visitor-report-list"]], inputs: { print: "print" }, decls: 8, vars: 17, consts: [["date_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function VisitorReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Visitor List");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, VisitorReportListComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275template(6, VisitorReportListComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.visitor_bookings)("columns", \u0275\u0275pureFunction5(11, _c58, \u0275\u0275pureFunction0(5, _c021), \u0275\u0275pureFunction1(6, _c116, date_template_r4), \u0275\u0275pureFunction0(8, _c216), \u0275\u0275pureFunction0(9, _c316), \u0275\u0275pureFunction0(10, _c415)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe] });
var VisitorReportListComponent = _VisitorReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportListComponent, { className: "VisitorReportListComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts", lineNumber: 41 });
})();

// apps/concierge/src/app/reports/visitors/visitors-report.component.ts
var _c022 = ["visitors-report", ""];
function VisitorsReportComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "visitor-report-overall")(2, "visitor-report-daily-usage", 10)(3, "visitor-report-list");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function VisitorsReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, VisitorsReportComponent_ng_container_12_ng_container_1_Template, 4, 1, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function VisitorsReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function VisitorsReportComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 13);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _VisitorsReportComponent = class _VisitorsReportComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const zones = (params.get("zones") || params.get("zone_ids")).split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_VisitorsReportComponent.\u0275fac = function VisitorsReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsReportComponent)(\u0275\u0275directiveInject(VisitorsReportService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_VisitorsReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsReportComponent, selectors: [["", "visitors-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c022, decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function VisitorsReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function VisitorsReportComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function VisitorsReportComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function VisitorsReportComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Visitors Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, VisitorsReportComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, VisitorsReportComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, VisitorsReportComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, VisitorReportOverallComponent, VisitorReportDailyUsageComponent, VisitorReportListComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=visitors-report.component.css.map */"] });
var VisitorsReportComponent = _VisitorsReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsReportComponent, { className: "VisitorsReportComponent", filePath: "apps/concierge/src/app/reports/visitors/visitors-report.component.ts", lineNumber: 68 });
})();

// apps/concierge/src/app/reports/parking/parking-report.service.ts
var _ParkingReportService = class _ParkingReportService {
  constructor(_settings, _org) {
    this._settings = _settings;
    this._org = _org;
    this._loading = new BehaviorSubject(false);
    this._options = new BehaviorSubject({});
    this._generate = new BehaviorSubject(0);
    this.loading$ = this._loading.asObservable();
    this.options$ = this._options.asObservable();
    this.bookings$ = this._generate.pipe(filter((gen) => gen > 0), switchMap(() => this._options.pipe(take(1))), debounceTime(300), switchMap((options) => {
      this._loading.next(true);
      const { start, end, zones } = options;
      return queryBookings({
        period_start: getUnixTime(startOfDay(start || Date.now())),
        period_end: getUnixTime(endOfDay(end || start || Date.now())),
        type: "parking",
        include_checked_out: true,
        zones: (zones || [])?.join(",") || (this._settings.get("app.use_region") ? this._org.region?.id : "") || this._org.building?.id
      });
    }), tap((_) => {
      if (!_.length) {
        notifyError("No bookings for the selected levels and period");
      }
      this._loading.next(false);
    }), startWith([]), shareReplay(1));
    this.daily_stats$ = combineLatest([
      this.bookings$,
      this._options
    ]).pipe(map(([bookings, options]) => {
      const days = {};
      for (const booking of bookings) {
        const date = format(booking.date, "yyyy-MM-dd");
        if (!days[date]) {
          days[date] = {
            date: booking.date,
            bookings: []
          };
        }
        days[date].bookings.push(booking);
      }
      return days;
    }), shareReplay(1));
    this.counts$ = this._options.pipe(debounceTime(500), switchMap((filters) => {
      let zones = (filters.zones || []).filter((z) => z !== -1 && z !== "All");
      if (!zones.length) {
        zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking")).map((_) => _.id);
      }
      return Promise.all(zones.map((z) => showMetadata(z, "parking-spaces").pipe(catchError(() => of({ details: [] })), map((m) => [z, m.details.length])).toPromise()));
    }), map((list) => {
      let mapping = {};
      list.forEach(([id, count]) => mapping[id] = Math.max(count || 0, 1));
      return mapping;
    }), shareReplay(1));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  downloadReport() {
    return __async(this, null, function* () {
      const options = this._options.getValue();
      const bookings = yield this.bookings$.pipe(take(1)).toPromise();
      if (!bookings?.length)
        return;
      const is_same = isSameDay(options.start, options.end);
      const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
      downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((bkn) => {
        const details = bkn.toJSON();
        delete details.zones;
        delete details.server_names;
        delete details.extension_data;
        return details;
      }), "	"));
    });
  }
};
_ParkingReportService.\u0275fac = function ParkingReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(OrganisationService));
};
_ParkingReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingReportService, factory: _ParkingReportService.\u0275fac, providedIn: "root" });
var ParkingReportService = _ParkingReportService;

// apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts
var _c023 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c117 = () => ({ key: "booking_count", name: "Unique Spaces Reserved" });
var _c217 = () => ({ key: "host_count", name: "Reservee Count" });
var _c317 = () => ({ key: "booked_count", name: "Booking Count" });
var _c416 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ParkingReportDailyUsageComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function ParkingReportDailyUsageComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ParkingReportDailyUsageComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
var _ParkingReportDailyUsageComponent = class _ParkingReportDailyUsageComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.daily_stats = this._state.daily_stats$.pipe(map((days) => {
      let list = [];
      for (const date in days) {
        list.push({
          date,
          booking_count: unique(days[date].bookings, "asset_id").length,
          host_count: unique(days[date].bookings, "user_email").length,
          booked_count: days[date].bookings.length
        });
      }
      list.sort((a, b) => a.date.localeCompare(b.date));
      return list;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.daily_stats.pipe(take(1)).toPromise();
      downloadFile("report-parking-daily-usage.csv", jsonToCsv(data));
    });
  }
};
_ParkingReportDailyUsageComponent.\u0275fac = function ParkingReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportDailyUsageComponent)(\u0275\u0275directiveInject(ParkingReportService));
};
_ParkingReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportDailyUsageComponent, selectors: [["parking-report-daily-usage"]], inputs: { print: "print" }, decls: 8, vars: 15, consts: [["date_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function ParkingReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3, "Daily Parking Details");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingReportDailyUsageComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275template(6, ParkingReportDailyUsageComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(7);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_stats)("columns", \u0275\u0275pureFunction4(10, _c416, \u0275\u0275pureFunction1(5, _c023, date_template_r4), \u0275\u0275pureFunction0(7, _c117), \u0275\u0275pureFunction0(8, _c217), \u0275\u0275pureFunction0(9, _c317)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe] });
var ParkingReportDailyUsageComponent = _ParkingReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportDailyUsageComponent, { className: "ParkingReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts", lineNumber: 40 });
})();

// apps/concierge/src/app/reports/parking/parking-report-overall.component.ts
var _ParkingReportOverallComponent = class _ParkingReportOverallComponent {
  constructor(_state) {
    this._state = _state;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.bookings$.pipe(map((events) => Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length)));
  }
};
_ParkingReportOverallComponent.\u0275fac = function ParkingReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportOverallComponent)(\u0275\u0275directiveInject(ParkingReportService));
};
_ParkingReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportOverallComponent, selectors: [["parking-report-overall"]], decls: 19, vars: 9, consts: [[1, "m-4", "p-4", "rounded", "bg-base-100", "border", "border-base-200", "flex", "justify-center", "items-center", "space-x-2"], [1, "flex", "flex-col", "items-center", "flex-1"], [1, "text-sm"], [1, "text-2xl"]], template: function ParkingReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3, "Business Days");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 1)(8, "h3", 2);
    \u0275\u0275text(9, "Total Reservations");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p", 3);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 1)(14, "h3", 2);
    \u0275\u0275text(15, "Avg. Booking Length");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "p", 3);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, ctx.business_days) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 5, ctx.total_count) || 0);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(18, 7, ctx.avg_length) || "0", " mins");
  }
}, dependencies: [AsyncPipe] });
var ParkingReportOverallComponent = _ParkingReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportOverallComponent, { className: "ParkingReportOverallComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-overall.component.ts", lineNumber: 28 });
})();

// apps/concierge/src/app/reports/parking/parking-report-list.component.ts
var _c024 = () => ({ key: "parking_name", name: "Parking Name" });
var _c118 = (a0) => ({ key: "date", name: "Date", content: a0 });
var _c218 = (a0) => ({ key: "duration", name: "Duration", content: a0 });
var _c318 = () => ({ key: "host", name: "Booked For" });
var _c417 = () => ({ key: "checked_in", name: "Checked In" });
var _c59 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingReportListComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ParkingReportListComponent_button_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
function ParkingReportListComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, row_r3.date, "mediumDate"), " ");
  }
}
function ParkingReportListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.duration > 12 * 60 || row_r4.all_day ? "All Day" : \u0275\u0275pipeBind2(2, 1, row_r4.duration, true), " ");
  }
}
var _ParkingReportListComponent = class _ParkingReportListComponent {
  constructor(_state) {
    this._state = _state;
    this.print = false;
    this.parking_bookings = this._state.bookings$.pipe(map((bookings) => {
      let list = [];
      for (const booking of bookings) {
        list.push({
          parking_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
          date: booking.date,
          duration: booking.duration,
          all_day: booking.all_day,
          host: booking.user_name || booking.user_email,
          checked_in: booking.checked_in ? "Yes" : "No",
          self_registered: booking.extension_data?.self_registered ? "Yes" : "No"
        });
      }
      list.sort((a, b) => a.date - b.date);
      return list;
    }));
    this.download = () => __async(this, null, function* () {
      const data = yield this.parking_bookings.pipe(take(1)).toPromise();
      downloadFile("report-assets-daily-usage.csv", jsonToCsv(data));
    });
  }
};
_ParkingReportListComponent.\u0275fac = function ParkingReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportListComponent)(\u0275\u0275directiveInject(ParkingReportService));
};
_ParkingReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportListComponent, selectors: [["parking-report-list"]], inputs: { print: "print" }, decls: 10, vars: 18, consts: [["date_template", ""], ["duration_template", ""], [1, "m-4", "rounded", "bg-base-100", "border", "border-base-200", "overflow-hidden"], [1, "border-b", "border-base-200", "px-4", "py-2", "flex", "items-center"], [1, "font-bold", "text-xl", "flex-1"], ["icon", "", "matRipple", "", 3, "click", 4, "ngIf"], ["empty_message", "No events for selected period", 1, "w-full", "block", "text-sm", 3, "data", "columns", "sortable", "page_size"], ["icon", "", "matRipple", "", 3, "click"], [1, "p-4"]], template: function ParkingReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    \u0275\u0275text(3, "Parking List");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, ParkingReportListComponent_button_4_Template, 3, 0, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "simple-table", 6);
    \u0275\u0275template(6, ParkingReportListComponent_ng_template_6_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(8, ParkingReportListComponent_ng_template_8_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(7);
    const duration_template_r6 = \u0275\u0275reference(9);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.print);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.parking_bookings)("columns", \u0275\u0275pureFunction5(12, _c59, \u0275\u0275pureFunction0(5, _c024), \u0275\u0275pureFunction1(6, _c118, date_template_r5), \u0275\u0275pureFunction1(8, _c218, duration_template_r6), \u0275\u0275pureFunction0(10, _c318), \u0275\u0275pureFunction0(11, _c417)))("sortable", true)("page_size", ctx.print ? 0 : 10);
  }
}, dependencies: [NgIf, MatRipple, IconComponent, SimpleTableComponent, DatePipe, DurationPipe] });
var ParkingReportListComponent = _ParkingReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportListComponent, { className: "ParkingReportListComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-list.component.ts", lineNumber: 54 });
})();

// apps/concierge/src/app/reports/parking/parking-report-charts.component.ts
var _ParkingReportChartsComponent = class _ParkingReportChartsComponent extends AsyncHandler {
  constructor(_state, _org, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this.print = false;
    this.day_list = combineLatest([
      this._state.daily_stats$,
      this._state.counts$
    ]).pipe(map(([days, counts]) => {
      let list = [];
      const total_spaces = Object.values(counts).reduce((c, v) => c + (v || 0), 0);
      for (const date in days) {
        list.push({
          date,
          booking_count: unique(days[date].bookings, "asset_id").length,
          host_count: unique(days[date].bookings, "user_email").length,
          booked_count: days[date].bookings.length,
          utilisation: days[date].bookings.reduce((c, v) => c + v.duration, 0) / total_spaces
        });
      }
      return list.sort((a, b) => a.date.localeCompare(b.date));
    }));
    this.stats = combineLatest([
      this._state.options$,
      this._state.counts$
    ]);
  }
  ngOnInit() {
    this.subscription("charts", combineLatest([this.day_list, this.stats]).subscribe(() => this.updateCharts()));
  }
  ngOnChanges(changes) {
    if (changes.print && changes.print.currentValue !== changes.print.previousValue) {
      this.timeout("update", () => this.updateCharts(), 50);
    }
  }
  updateCharts() {
    this.timeout("update_charts", () => __async(this, null, function* () {
      const day_list = yield this.day_list.pipe(take(1)).toPromise();
      this.updateDailyChart(day_list);
      const [mappings, counts] = yield this.stats.pipe(take(1)).toPromise();
      this.updateLevelChart({ zones: mappings }, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }), 50);
  }
  updateDailyChart(list) {
    console.log("Daily Chart:", list);
    const data = {
      labels: list.map((_) => format(parse(_.date, "yyyy-MM-dd", Date.now()), "dd MMM")),
      series: [list.map((_) => +_.utilisation)]
    };
    this._day_chart = new LineChart("#daily-chart", data);
  }
  updateLevelChart(mapping, count) {
    console.log("Level Chart:", mapping, count);
    let { zones } = mapping || { zones: [] };
    if (!zones.length) {
      zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("parking")).map((_) => _.id);
    }
    const zone_list = (zones || []).filter((_) => (count[_] || 0) > 0);
    const data = {
      labels: zone_list.map((_) => {
        const level = this._org.levelWithID([_]);
        return level?.display_name || level.name || "";
      }),
      series: zone_list.map((_) => count[_] || 0)
    };
    this._level_chart = new PieChart("#level-chart", data);
  }
};
_ParkingReportChartsComponent.\u0275fac = function ParkingReportChartsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportChartsComponent)(\u0275\u0275directiveInject(ParkingReportService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_ParkingReportChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportChartsComponent, selectors: [["parking-report-charts"]], inputs: { print: "print" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 9, vars: 2, consts: [[1, "flex", "items-center", "space-x-4", "w-full", "px-4", 3, "resize"], [1, "bg-base-100", "border", "border-base-200", "rounded", "flex-1", "w-1/2", "h-[18rem]"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-full", "h-56", "mx-auto", "relative", "top-2", "-left-2"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "max-w-full", "w-[24rem]", "h-56", "mx-auto"]], template: function ParkingReportChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function ParkingReportChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, false, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3, " Daily Utilisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 1)(6, "div", 2);
    \u0275\u0275text(7, " Level Utilisation ");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print);
  }
}, styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 20rem !important;\n}\n/*# sourceMappingURL=parking-report-charts.component.css.map */"] });
var ParkingReportChartsComponent = _ParkingReportChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportChartsComponent, { className: "ParkingReportChartsComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-charts.component.ts", lineNumber: 55 });
})();

// apps/concierge/src/app/reports/parking/parking-report.component.ts
var _c025 = ["parking-report", ""];
function ParkingReportComponent_ng_container_12_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "parking-report-overall")(2, "parking-report-charts")(3, "parking-report-daily-usage", 10)(4, "parking-report-list", 10);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("print", ctx_r1.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r1.printing);
  }
}
function ParkingReportComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ParkingReportComponent_ng_container_12_ng_container_1_Template, 5, 2, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const empty_state_r3 = \u0275\u0275reference(17);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 2, ctx_r1.total_count))("ngIfElse", empty_state_r3);
  }
}
function ParkingReportComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p", 13);
    \u0275\u0275text(3, "Loading report data...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
function ParkingReportComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p", 13);
    \u0275\u0275text(2, " Select levels and time period to generate a report. ");
    \u0275\u0275elementEnd()();
  }
}
var _ParkingReportComponent = class _ParkingReportComponent extends AsyncHandler {
  constructor(_state, _settings, _route, _org) {
    super();
    this._state = _state;
    this._settings = _settings;
    this._route = _route;
    this._org = _org;
    this.printing = false;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.get("theme") === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this._state.setOptions({ start: +params.get("start") });
      }
      if (params.has("end")) {
        this._state.setOptions({ end: +params.get("end") });
      }
      if (params.has("zones") || params.has("zone_ids")) {
        const zones = (params.get("zones") || params.get("zone_ids")).split(",");
        if (zones.length)
          this._state.setOptions({ zones });
      }
    }));
  }
};
_ParkingReportComponent.\u0275fac = function ParkingReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportComponent)(\u0275\u0275directiveInject(ParkingReportService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(OrganisationService));
};
_ParkingReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportComponent, selectors: [["", "parking-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c025, decls: 18, vars: 15, consts: [["load_state", ""], ["empty_state", ""], [3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "flex-1", "h-1/2", "w-full", "overflow-auto", "print:overflow-visible", "print:h-auto"], [1, "w-full"], [1, "flex", "items-center", "m-4", "p-4", "rounded", "bg-base-200"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "text-2xl", "font-medium", "px-2"], [4, "ngIf", "ngIfElse"], [3, "print"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8"], [1, "mb-4", 3, "diameter"], [1, "opacity-30"], [1, "h-full", "w-full", "flex", "flex-col", "items-center", "p-8", "screen-only"]], template: function ParkingReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "reports-options", 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ParkingReportComponent_Template_reports_options_printing_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.printing = $event);
    })("download", function ParkingReportComponent_Template_reports_options_download_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.downloadReport());
    })("generate", function ParkingReportComponent_Template_reports_options_generate_0_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generateReport());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3)(4, "div", 4)(5, "div", 5);
    \u0275\u0275element(6, "img", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 7);
    \u0275\u0275elementStart(10, "h2", 8);
    \u0275\u0275text(11, "Parking Report");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, ParkingReportComponent_ng_container_12_Template, 3, 4, "ng-container", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, ParkingReportComponent_ng_template_14_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, ParkingReportComponent_ng_template_16_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_4_0;
    const load_state_r4 = \u0275\u0275reference(15);
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_4_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_4_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(13, 13, ctx.loading))("ngIfElse", load_state_r4);
  }
}, dependencies: [NgIf, MatProgressSpinner, AuthenticatedImageDirective, ReportsOptionsComponent, ParkingReportDailyUsageComponent, ParkingReportOverallComponent, ParkingReportListComponent, ParkingReportChartsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=parking-report.component.css.map */"] });
var ParkingReportComponent = _ParkingReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportComponent, { className: "ParkingReportComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report.component.ts", lineNumber: 71 });
})();

// apps/concierge/src/app/reports/reports.module.ts
var children = [
  { path: "", component: ReportsOptionsComponent },
  { path: "bookings", component: ReportSpacesComponent },
  { path: "desks", component: ReportDesksComponent },
  { path: "parking", component: ParkingReportComponent },
  { path: "catering", component: CateringReportComponent },
  {
    path: "contact-tracing",
    component: ContactTracingReportComponent
  },
  { path: "assets", component: AssetsReportComponent },
  { path: "visitors", component: VisitorsReportComponent },
  { path: ":id", component: CustomReportComponent },
  { path: "**", redirectTo: "desks", pathMatch: "full" }
];
var ROUTES = [
  { path: "new", component: NewReportsComponent, children },
  { path: "", component: ReportsComponent, children }
];
var _ReportsModule = class _ReportsModule {
};
_ReportsModule.\u0275fac = function ReportsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsModule)();
};
_ReportsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
_ReportsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  MatPaginatorModule,
  RouterModule.forChild(ROUTES)
] });
var ReportsModule = _ReportsModule;
export {
  ReportsModule
};
//# sourceMappingURL=reports.module-CIY7RWF6.js.map
