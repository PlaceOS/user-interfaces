import "./chunk-RSB53MCB.js";
import "./chunk-DCC25PBS.js";
import "./chunk-ORXW5ROT.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  DateRangeFieldComponent,
  DurationPipe,
  UserSearchFieldComponent
} from "./chunk-2TMQ6H3Q.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  CalendarEvent,
  CateringOrder,
  CommonModule,
  Component,
  CurrencyPipe,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injectable,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Pipe,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SafePipe,
  SettingsService,
  SimpleTableComponent,
  SpacePipe,
  StaffUser,
  Subject,
  TranslatePipe,
  UserPipe,
  Xu,
  __objRest,
  __spreadProps,
  __spreadValues,
  addDays,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInCalendarDays,
  distinctUntilChanged,
  downloadFile,
  endOfDay,
  filter,
  first,
  flatten,
  forkJoin,
  format,
  formatDate,
  formatDuration,
  getUnixTime,
  i18n,
  inject,
  input,
  isBefore,
  isSameDay,
  isValid,
  jsonToCsv,
  kh,
  map,
  nextValueFrom,
  normalizeDates,
  notifyError,
  notifyWarn,
  of,
  output,
  parse,
  queryAllBookings,
  queryAllEvents,
  queryAssetGroupsExtended,
  queryAssetPurchaseOrders,
  queryBookings,
  requestSpacesForZone,
  searchStaff,
  setClassMetadata,
  setDay,
  shareReplay,
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
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵpureFunction4,
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
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
} from "./chunk-B2WI2KLR.js";

// node_modules/date-fns/isWeekend.js
function isWeekend(date, options) {
  const day = toDate(date, options?.in).getDay();
  return day === 0 || day === 6;
}

// node_modules/date-fns/differenceInBusinessDays.js
function differenceInBusinessDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  if (!isValid(laterDate_) || !isValid(earlierDate_)) return NaN;
  const diff = differenceInCalendarDays(laterDate_, earlierDate_);
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);
  let result = weeks * 5;
  let movingDate = addDays(earlierDate_, weeks * 7);
  while (!isSameDay(laterDate_, movingDate)) {
    result += isWeekend(movingDate, options) ? 0 : sign;
    movingDate = addDays(movingDate, sign);
  }
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}

// apps/concierge/src/app/reports/reports-options.component.ts
function ReportsOptionsComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 14);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_13_0;
    const level_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_13_0 = \u0275\u0275pipeBind1(2, 1, level_r2.parent_id)) == null ? null : tmp_13_0.display_name, " ");
  }
}
function ReportsOptionsComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5)(1, "div", 12);
    \u0275\u0275conditionalCreate(2, ReportsOptionsComponent_For_5_Conditional_2_Template, 5, 3, "div", 13);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function ReportsOptionsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 9);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ReportsOptionsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.REPORTS_GENERATE"), " ");
  }
}
var _ReportsOptionsComponent = class _ReportsOptionsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this.loading = input(false);
    this.has_data = input(false);
    this.printing = output();
    this.generate = output();
    this.download = output();
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
      const q = __spreadValues({}, this._route.snapshot.queryParams);
      q.zone_ids = zones.join(",");
      if (!q.zone_ids)
        delete q.zone_ids;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: q
      });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
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
  }
  print() {
    this.printing.emit(true);
    setTimeout(() => {
      window.print();
      this.printing.emit(false);
    }, 300);
  }
};
_ReportsOptionsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ReportsOptionsComponent_BaseFactory;
  return function ReportsOptionsComponent_Factory(__ngFactoryType__) {
    return (\u0275ReportsOptionsComponent_BaseFactory || (\u0275ReportsOptionsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportsOptionsComponent)))(__ngFactoryType__ || _ReportsOptionsComponent);
  };
})();
_ReportsOptionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsOptionsComponent, selectors: [["reports-options"]], inputs: { loading: [1, "loading"], has_data: [1, "has_data"] }, outputs: { printing: "printing", generate: "generate", download: "download" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 20, consts: [["startDate", ""], ["endDate", ""], [1, "z-20", "flex", "h-20", "w-full", "items-center", "space-x-2", "border-b", "border-base-200", "bg-base-100", "p-4", "print:hidden"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "week_start"], [3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [3, "diameter"], [1, "flex-1"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "disabled", "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function ReportsOptionsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "mat-select", 4);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setZones($event));
    });
    \u0275\u0275repeaterCreate(4, ReportsOptionsComponent_For_5_Template, 5, 3, "mat-option", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "date-range-field", 6)(8, "input", 7, 0);
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_8_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setStartDate($event) : "");
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "input", 7, 1);
    \u0275\u0275listener("ngModelChange", function ReportsOptionsComponent_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView($event ? ctx.setEndDate($event) : "");
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 8);
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.generate.emit());
    });
    \u0275\u0275conditionalCreate(13, ReportsOptionsComponent_Conditional_13_Template, 1, 1, "mat-spinner", 9);
    \u0275\u0275conditionalCreate(14, ReportsOptionsComponent_Conditional_14_Template, 3, 3, "p");
    \u0275\u0275elementEnd();
    \u0275\u0275element(15, "div", 10);
    \u0275\u0275elementStart(16, "button", 11);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_16_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.download.emit());
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "button", 11);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("click", function ReportsOptionsComponent_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.print());
    });
    \u0275\u0275elementStart(22, "icon");
    \u0275\u0275text(23, "print");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(3, 12, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 14, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275property("week_start", ctx.week_start);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx.start);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx.end);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !!ctx.loading());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.loading() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx.loading() ? 14 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.has_data())("matTooltip", \u0275\u0275pipeBind1(17, 16, "APP.CONCIERGE.REPORTS_DOWNLOAD"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx.has_data())("matTooltip", \u0275\u0275pipeBind1(21, 18, "APP.CONCIERGE.REPORTS_PRINT"));
  }
}, dependencies: [
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  DateRangeFieldComponent,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel,
  IconComponent,
  TranslatePipe,
  CommonModule,
  AsyncPipe
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--neutral) !important;\n}\nmat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=reports-options.component.css.map */"] });
var ReportsOptionsComponent = _ReportsOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsOptionsComponent, [{
    type: Component,
    args: [{ selector: "reports-options", template: `
        <div
            class="z-20 flex h-20 w-full items-center space-x-2 border-b border-base-200 bg-base-100 p-4 print:hidden"
        >
            <mat-form-field appearance="outline" class="no-subscript w-60">
                <mat-select
                    [(ngModel)]="zones"
                    (ngModelChange)="setZones($event)"
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
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="start"
                    (ngModelChange)="$event ? setStartDate($event) : ''"
                />
                <input
                    #endDate
                    [ngModel]="end"
                    (ngModelChange)="$event ? setEndDate($event) : ''"
                />
            </date-range-field>
            <button
                btn
                matRipple
                [disabled]="!!loading()"
                (click)="generate.emit()"
            >
                @if (loading()) {
                    <mat-spinner [diameter]="32"></mat-spinner>
                }
                @if (!loading()) {
                    <p>
                        {{ 'APP.CONCIERGE.REPORTS_GENERATE' | translate }}
                    </p>
                }
            </button>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_DOWNLOAD' | translate"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                [disabled]="!has_data()"
                [matTooltip]="'APP.CONCIERGE.REPORTS_PRINT' | translate"
                (click)="print()"
            >
                <icon>print</icon>
            </button>
        </div>
    `, imports: [
      MatFormFieldModule,
      MatSelectModule,
      DateRangeFieldComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatTooltipModule,
      FormsModule,
      IconComponent,
      TranslatePipe,
      CommonModule
    ], styles: ["/* angular:styles/component:css;5beef9fc17361dba7103fc63eb6b8000bb9bd367cf9540d850dd274e91b56384;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports-options.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nbutton[icon][disabled] {\n  background-color: var(--neutral) !important;\n}\nmat-slide-toggle div {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=reports-options.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsOptionsComponent, { className: "ReportsOptionsComponent", filePath: "apps/concierge/src/app/reports/reports-options.component.ts", lineNumber: 137 });
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
var REMOVE_KEYS = [
  "zones",
  "server_names",
  "extension_data",
  "event_start",
  "event_end",
  "booking_start",
  "booking_end",
  "system",
  "old_system",
  "date",
  "date_end",
  "_valid_asset_cache",
  "_valid_cache_expiry"
];
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
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
      this._loading.next(i18n("APP.CONCIERGE.REPORTS_LOADING"));
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
        case "lockers":
          return queryAllBookings(__spreadProps(__spreadValues({}, query), {
            zones,
            type: "locker",
            limit: 1e3
          }));
        case "assets":
          return queryAllBookings(__spreadProps(__spreadValues({}, query), {
            zones,
            type: "asset-request",
            limit: 1e3
          }));
        case "catering":
          return queryAllBookings(__spreadProps(__spreadValues({}, query), {
            zones,
            type: "catering-order",
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
      return Promise.all(zones.map((z) => Xu(z, "desks").pipe(catchError(() => of({ details: [] })), map((m) => [z, m.details.length])).toPromise()));
    }), map((list) => {
      const map2 = {};
      this._active_bookings.next([]);
      list.forEach(([id, count]) => map2[id] = count);
      return map2;
    }), shareReplay(1));
    this.stats = combineLatest([
      this.counts,
      this.bookings
    ]).pipe(debounceTime(300), switchMap(async ([counts, list]) => {
      if (list[0] instanceof CalendarEvent) {
        return generateReportForBookings(list, this.duration * 8, counts);
      }
      return generateReportForDeskBookings(list || [], this.duration, counts);
    }), shareReplay(1));
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
          total: stats.total,
          usage,
          free: stats.total - events.length,
          approved: events.reduce((c, e2) => c + (e2.approved || e2.status === "approved" ? 1 : 0), 0),
          count: events.length,
          utilisation: (events.length / Math.max(events.length || 1, stats.total) * 100).toFixed(1)
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
      details.start = formatDate((details.event_start || details.booking_start) * 1e3, "MMM d, y, h:mm a", "en");
      details.end = formatDate((details.event_end || details.booking_end) * 1e3, "MMM d, y, h:mm a", "en");
      for (const key of REMOVE_KEYS)
        delete details[key];
      return details;
    }), "	"));
  }
};
_ReportsStateService.\u0275fac = function ReportsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsStateService)();
};
_ReportsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ReportsStateService, factory: _ReportsStateService.\u0275fac, providedIn: "root" });
var ReportsStateService = _ReportsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/concierge/src/app/reports/assets/assets-report.service.ts
var _AssetsReportService = class _AssetsReportService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
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
        notifyError(i18n("APP.CONCIERGE.REPORTS_LOAD_ERROR"));
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
  generateReport() {
    this._generate.next(Date.now());
  }
  async downloadReport() {
    const options = this._options.getValue();
    const bookings = await nextValueFrom(this.bookings$);
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
};
_AssetsReportService.\u0275fac = function AssetsReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetsReportService)();
};
_AssetsReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetsReportService, factory: _AssetsReportService.\u0275fac, providedIn: "root" });
var AssetsReportService = _AssetsReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts
var _c0 = (a0) => ({ key: "name", name: a0 });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "booking_count", name: a0 });
var _c3 = (a0) => ({ key: "booked_count", name: a0 });
var _c4 = (a0) => ({ key: "asset_count", name: a0 });
var _c5 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function AssetReportDailyUsageComponent_ng_template_13_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(false);
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
    this.download = async () => {
      const data = await nextValueFrom(this.daily_products);
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-assets-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_AssetReportDailyUsageComponent.\u0275fac = function AssetReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportDailyUsageComponent)();
};
_AssetReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportDailyUsageComponent, selectors: [["asset-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 15, vars: 38, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function AssetReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssetReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, AssetReportDailyUsageComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_products)("columns", \u0275\u0275pureFunction5(32, _c5, \u0275\u0275pureFunction1(21, _c0, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction2(23, _c1, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(26, _c2, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER")), \u0275\u0275pureFunction1(28, _c3, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_TOTAL_BOOKED")), \u0275\u0275pureFunction1(30, _c4, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AssetReportDailyUsageComponent = _AssetReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "asset-report-daily-usage", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="daily_products"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'booked_count',
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_BOOKED' | translate,
                    },
                    {
                        key: 'asset_count',
                        name:
                            'APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportDailyUsageComponent, { className: "AssetReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-daily-usage.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts
var _c02 = (a0) => ({ key: "purchase_order_number", name: a0 });
var _c12 = (a0) => ({ key: "invoice_number", name: a0 });
var _c22 = (a0, a1) => ({ key: "purchase_date", name: a0, content: a1 });
var _c32 = (a0, a1) => ({ key: "expected_service_start_date", name: a0, content: a1 });
var _c42 = (a0, a1) => ({ key: "expected_service_end_date", name: a0, content: a1 });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function AssetReportExpiredItemsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportExpiredItemsComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function AssetReportExpiredItemsComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.DATE_EMPTY"));
  }
}
function AssetReportExpiredItemsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275conditionalCreate(1, AssetReportExpiredItemsComponent_ng_template_13_Conditional_1_Template, 3, 3, "span", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 ? \u0275\u0275pipeBind2(3, 2, data_r3 * 1e3, "mediumDate") : "", " ");
  }
}
var _AssetReportExpiredItemsComponent = class _AssetReportExpiredItemsComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(false);
    this.expired_items = this._state.expired_items$;
    this.download = async () => {
      const data = await nextValueFrom(this.expired_items);
      downloadFile("report-assets-expired-items.csv", jsonToCsv(data));
    };
  }
};
_AssetReportExpiredItemsComponent.\u0275fac = function AssetReportExpiredItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportExpiredItemsComponent)();
};
_AssetReportExpiredItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportExpiredItemsComponent, selectors: [["asset-report-expired-items"]], inputs: { print: [1, "print"] }, decls: 15, vars: 40, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-30"]], template: function AssetReportExpiredItemsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssetReportExpiredItemsComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, AssetReportExpiredItemsComponent_ng_template_13_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.expired_items)("columns", \u0275\u0275pureFunction5(34, _c52, \u0275\u0275pureFunction1(21, _c02, \u0275\u0275pipeBind1(7, 9, "APP.CONCIERGE.ASSETS_PURCHASE_NUMBER")), \u0275\u0275pureFunction1(23, _c12, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.ASSETS_PURCHASE_INVOICE")), \u0275\u0275pureFunction2(25, _c22, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.ASSETS_PURCHASE_DATE"), date_template_r4), \u0275\u0275pureFunction2(28, _c32, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.ASSETS_PURCHASE_START"), date_template_r4), \u0275\u0275pureFunction2(31, _c42, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.ASSETS_PURCHASE_END"), date_template_r4)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AssetReportExpiredItemsComponent = _AssetReportExpiredItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportExpiredItemsComponent, [{
    type: Component,
    args: [{ selector: "asset-report-expired-items", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_HEADER'
                            | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="expired_items"
                [columns]="[
                    {
                        key: 'purchase_order_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_NUMBER' | translate,
                    },
                    {
                        key: 'invoice_number',
                        name:
                            'APP.CONCIERGE.ASSETS_PURCHASE_INVOICE' | translate,
                    },
                    {
                        key: 'purchase_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_start_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_START' | translate,
                        content: date_template,
                    },
                    {
                        key: 'expected_service_end_date',
                        name: 'APP.CONCIERGE.ASSETS_PURCHASE_END' | translate,
                        content: date_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_ASSETS_EXPIRED_PO_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-data="data">
                <div class="p-4">
                    @if (!data) {
                        <span class="opacity-30">{{
                            'COMMON.DATE_EMPTY' | translate
                        }}</span>
                    }
                    {{ data ? (data * 1000 | date: 'mediumDate') : '' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportExpiredItemsComponent, { className: "AssetReportExpiredItemsComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-expired-items.component.ts", lineNumber: 97 });
})();

// apps/concierge/src/app/reports/assets/asset-report-overall.component.ts
var _AssetReportOverallComponent = class _AssetReportOverallComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.total_count = this._state.stats$.pipe(map((i) => i.booking_count));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.stats$.pipe(map(({ events }) => formatDuration({
      minutes: events.reduce((c, i) => c + i.duration, 0) / (events.length || 1)
    })));
  }
};
_AssetReportOverallComponent.\u0275fac = function AssetReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportOverallComponent)();
};
_AssetReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportOverallComponent, selectors: [["asset-report-overall"]], decls: 22, vars: 18, consts: [[1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function AssetReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h3", 2);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 3);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 1)(16, "h3", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 3);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, ctx.business_days) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, ctx.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, ctx.avg_length) || "0");
  }
}, dependencies: [CommonModule, AsyncPipe, TranslatePipe], encapsulation: 2 });
var AssetReportOverallComponent = _AssetReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportOverallComponent, [{
    type: Component,
    args: [{ selector: "asset-report-overall", template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportOverallComponent, { className: "AssetReportOverallComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-overall.component.ts", lineNumber: 38 });
})();

// apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts
var _c03 = (a0) => ({ key: "name", name: a0 });
var _c13 = (a0) => ({ key: "booking_count", name: a0 });
var _c23 = (a0) => ({ key: "booked_count", name: a0 });
var _c33 = (a0) => ({ key: "asset_count", name: a0 });
var _c43 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportProductUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportProductUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
var _AssetReportProductUsageComponent = class _AssetReportProductUsageComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(false);
    this.products = this._state.stats$.pipe(map(({ events, bookings, products }) => products.map((p) => {
      const product_bookings = bookings.filter((b) => p.assets.find(({ id }) => b.asset_ids.includes(id)));
      return {
        name: p.name,
        booking_count: product_bookings.length,
        booked_count: product_bookings.reduce((acc, b) => acc + b.asset_ids.filter((asset_id) => p.assets.find(({ id }) => asset_id === id)).length, 0),
        asset_count: p.assets.length
      };
    }).filter((p) => p.booking_count > 0)));
    this.download = async () => {
      const data = await nextValueFrom(this.products);
      downloadFile("report-assets-product-usage.csv", jsonToCsv(data));
    };
  }
};
_AssetReportProductUsageComponent.\u0275fac = function AssetReportProductUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportProductUsageComponent)();
};
_AssetReportProductUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportProductUsageComponent, selectors: [["asset-report-product-usage"]], inputs: { print: [1, "print"] }, decls: 12, vars: 32, consts: [[1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AssetReportProductUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssetReportProductUsageComponent_Conditional_5_Template, 4, 3, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_ASSETS_PRDOUCTS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.products)("columns", \u0275\u0275pureFunction4(27, _c43, \u0275\u0275pureFunction1(19, _c03, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction1(21, _c13, \u0275\u0275pipeBind1(8, 11, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(23, _c23, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_ASSETS_BOOKED")), \u0275\u0275pureFunction1(25, _c33, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AssetReportProductUsageComponent = _AssetReportProductUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportProductUsageComponent, [{
    type: Component,
    args: [{ selector: "asset-report-product-usage", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_ASSETS_PRDOUCTS_HEADER'
                            | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="products"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'booked_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_count',
                        name:
                            'APP.CONCIERGE.REPORTS_ASSETS_AVAILABLE'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportProductUsageComponent, { className: "AssetReportProductUsageComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-product-usage.component.ts", lineNumber: 76 });
})();

// apps/concierge/src/app/reports/assets/asset-report-users.component.ts
var _c04 = (a0) => ({ key: "name", name: a0 });
var _c14 = (a0) => ({ key: "booking_count", name: a0 });
var _c24 = (a0) => ({ key: "asset_count", name: a0 });
var _c34 = (a0) => ({ key: "asset_types", name: a0 });
var _c44 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function AssetReportUsersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function AssetReportUsersComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
var _AssetReportUsersComponent = class _AssetReportUsersComponent {
  constructor() {
    this._state = inject(AssetsReportService);
    this.print = input(false);
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
    this.download = async () => {
      const data = await nextValueFrom(this.users);
      downloadFile("report-assets-users.csv", jsonToCsv(data));
    };
  }
};
_AssetReportUsersComponent.\u0275fac = function AssetReportUsersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AssetReportUsersComponent)();
};
_AssetReportUsersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetReportUsersComponent, selectors: [["asset-report-users"]], inputs: { print: [1, "print"] }, decls: 12, vars: 32, consts: [[1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"]], template: function AssetReportUsersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, AssetReportUsersComponent_Conditional_5_Template, 4, 3, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.users)("columns", \u0275\u0275pureFunction4(27, _c44, \u0275\u0275pureFunction1(19, _c04, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction1(21, _c14, \u0275\u0275pipeBind1(8, 11, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(23, _c24, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_ASSETS_BOOKED")), \u0275\u0275pureFunction1(25, _c34, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_ASSETS_TYPES"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var AssetReportUsersComponent = _AssetReportUsersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetReportUsersComponent, [{
    type: Component,
    args: [{ selector: "asset-report-users", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ASSETS_REQUESTEES' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="users"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'asset_count',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_BOOKED' | translate,
                    },
                    {
                        key: 'asset_types',
                        name: 'APP.CONCIERGE.REPORTS_ASSETS_TYPES' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetReportUsersComponent, { className: "AssetReportUsersComponent", filePath: "apps/concierge/src/app/reports/assets/asset-report-users.component.ts", lineNumber: 76 });
})();

// apps/concierge/src/app/reports/assets/assets-report.component.ts
var _c05 = ["report-assets", ""];
function AssetsReportComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "asset-report-overall")(1, "asset-report-daily-usage", 9)(2, "asset-report-product-usage", 9)(3, "asset-report-users", 9)(4, "asset-report-expired-items", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function AssetsReportComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function AssetsReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AssetsReportComponent_Conditional_13_Conditional_0_Template, 5, 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, AssetsReportComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function AssetsReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _AssetsReportComponent = class _AssetsReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(AssetsReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.stats$.pipe(map((i) => i.total_booked_items || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_AssetsReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275AssetsReportComponent_BaseFactory;
  return function AssetsReportComponent_Factory(__ngFactoryType__) {
    return (\u0275AssetsReportComponent_BaseFactory || (\u0275AssetsReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AssetsReportComponent)))(__ngFactoryType__ || _AssetsReportComponent);
  };
})();
_AssetsReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AssetsReportComponent, selectors: [["", "report-assets", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c05, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function AssetsReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function AssetsReportComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function AssetsReportComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function AssetsReportComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, AssetsReportComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, AssetsReportComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_ASSETS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  AuthenticatedImageDirective,
  ReportsOptionsComponent,
  AssetReportDailyUsageComponent,
  AssetReportExpiredItemsComponent,
  AssetReportOverallComponent,
  AssetReportProductUsageComponent,
  AssetReportUsersComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=assets-report.component.css.map */"] });
var AssetsReportComponent = _AssetsReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetsReportComponent, [{
    type: Component,
    args: [{ selector: "[report-assets]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_ASSETS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <asset-report-overall></asset-report-overall>
                    <asset-report-daily-usage
                        [print]="printing"
                    ></asset-report-daily-usage>
                    <asset-report-product-usage
                        [print]="printing"
                    ></asset-report-product-usage>
                    <asset-report-users [print]="printing"></asset-report-users>
                    <asset-report-expired-items
                        [print]="printing"
                    ></asset-report-expired-items>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      AuthenticatedImageDirective,
      ReportsOptionsComponent,
      AssetReportDailyUsageComponent,
      AssetReportExpiredItemsComponent,
      AssetReportOverallComponent,
      AssetReportProductUsageComponent,
      AssetReportUsersComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/assets/assets-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=assets-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AssetsReportComponent, { className: "AssetsReportComponent", filePath: "apps/concierge/src/app/reports/assets/assets-report.component.ts", lineNumber: 104 });
})();

// apps/concierge/src/app/reports/catering/catering-report-state.service.ts
var _CateringReportStateService = class _CateringReportStateService {
  constructor() {
    this._reports = inject(ReportsStateService);
    this.catering_orders = combineLatest([
      this._reports.options,
      this._reports.bookings
    ]).pipe(map(([{ start, end }, list]) => {
      const start_date = startOfDay(start).valueOf();
      const end_date = endOfDay(end).valueOf();
      const orders = flatten(list.map((_) => _ instanceof CalendarEvent ? _.valid_catering || [] : [
        new CateringOrder(__spreadProps(__spreadValues({}, _.extension_data.details), {
          event: _.linked_event
        }))
      ]));
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
  async downloadOrders() {
    const orders = await nextValueFrom(this.catering_orders);
    const data = orders.map((_) => __spreadValues({}, _));
    for (const bkn of data) {
      bkn.date = format(bkn._time, "yyyy-MM-dd HH:mm");
      delete bkn._time;
    }
    const csv_data = jsonToCsv(data, "	");
    return downloadFile("catering-orders.tsv", csv_data);
  }
};
_CateringReportStateService.\u0275fac = function CateringReportStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportStateService)();
};
_CateringReportStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CateringReportStateService, factory: _CateringReportStateService.\u0275fac, providedIn: "root" });
var CateringReportStateService = _CateringReportStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/catering/catering-report-items.component.ts
var _c06 = (a0) => ({ key: "name", name: a0 });
var _c15 = (a0, a1) => ({ key: "options", name: a0, content: a1 });
var _c25 = (a0) => ({ key: "caterer", name: a0 });
var _c35 = (a0) => ({ key: "quantity", name: a0 });
var _c45 = (a0, a1) => ({ key: "unit_price", name: a0, content: a1 });
var _c53 = (a0, a1) => ({ key: "total_cost", name: a0, content: a1 });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
var _c7 = (a0) => ({ count: a0 });
function CateringReportItemsComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = \u0275\u0275nextContext().data;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.options(data_r1));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "APP.CONCIERGE.REPORTS_CATERING_OPTIONS", \u0275\u0275pureFunction1(5, _c7, (data_r1 == null ? null : data_r1.length) || 0)), " ");
  }
}
function CateringReportItemsComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, CateringReportItemsComponent_ng_template_13_Conditional_1_Template, 3, 7, "span", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r1 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r1.length ? 1 : -1);
  }
}
function CateringReportItemsComponent_ng_template_15_Template(rf, ctx) {
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
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this.print = input(false);
    this.items = this._report.catering_items;
  }
  get code() {
    return this._org.currency_code;
  }
  options(opts) {
    return opts.map((_) => _.name).join("\n");
  }
};
_CateringReportItemsComponent.\u0275fac = function CateringReportItemsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportItemsComponent)();
};
_CateringReportItemsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportItemsComponent, selectors: [["catering-report-items"]], inputs: { print: [1, "print"] }, decls: 17, vars: 44, consts: [["option_template", ""], ["cost_template", ""], [1, "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-4"], [1, "py-2", "text-xl", "font-medium"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "empty_message", "sortable"], [1, "p-4"], [1, "rounded-sm", "bg-base-200", "px-2", "py-1", "text-xs", 3, "matTooltip"]], template: function CateringReportItemsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(5, "simple-table", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, CateringReportItemsComponent_ng_template_13_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, CateringReportItemsComponent_ng_template_15_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_template_r4 = \u0275\u0275reference(14);
    const cost_template_r5 = \u0275\u0275reference(16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.items)("columns", \u0275\u0275pureFunction6(37, _c6, \u0275\u0275pureFunction1(22, _c06, \u0275\u0275pipeBind1(6, 8, "FORM.NAME")), \u0275\u0275pureFunction2(24, _c15, \u0275\u0275pipeBind1(7, 10, "APP.CONCIERGE.REPORTS_CATERING_OPTIONS"), option_template_r4), \u0275\u0275pureFunction1(27, _c25, \u0275\u0275pipeBind1(8, 12, "CATERING.CATERER")), \u0275\u0275pureFunction1(29, _c35, \u0275\u0275pipeBind1(9, 14, "CATERING.QUANTITY")), \u0275\u0275pureFunction2(31, _c45, \u0275\u0275pipeBind1(10, 16, "COMMON.ITEM_PRICE"), cost_template_r5), \u0275\u0275pureFunction2(34, _c53, \u0275\u0275pipeBind1(11, 18, "CATERING.TOTAL_COST"), cost_template_r5)))("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 20, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY"))("sortable", true);
  }
}, dependencies: [CommonModule, CurrencyPipe, SimpleTableComponent, TranslatePipe], encapsulation: 2 });
var CateringReportItemsComponent = _CateringReportItemsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportItemsComponent, [{
    type: Component,
    args: [{ selector: "catering-report-items", template: `
        <div
            class="mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div
                class="flex items-center justify-between border-b border-base-200 px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER'
                            | translate
                    }}
                </h2>
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="items"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'options',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_OPTIONS'
                            | translate,
                        content: option_template,
                    },
                    {
                        key: 'caterer',
                        name: 'CATERING.CATERER' | translate,
                    },
                    {
                        key: 'quantity',
                        name: 'CATERING.QUANTITY' | translate,
                    },
                    {
                        key: 'unit_price',
                        name: 'COMMON.ITEM_PRICE' | translate,
                        content: cost_template,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
                [sortable]="true"
            ></simple-table>
            <ng-template #option_template let-data="data">
                <div class="p-4">
                    @if (data.length) {
                        <span
                            class="rounded-sm bg-base-200 px-2 py-1 text-xs"
                            [matTooltip]="options(data)"
                        >
                            {{
                                'APP.CONCIERGE.REPORTS_CATERING_OPTIONS'
                                    | translate: { count: data?.length || 0 }
                            }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">{{ (data || 0) / 100 | currency: code }}</div>
            </ng-template>
        </div>
    `, imports: [CommonModule, SimpleTableComponent, TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportItemsComponent, { className: "CateringReportItemsComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-items.component.ts", lineNumber: 83 });
})();

// apps/concierge/src/app/reports/catering/catering-report-orders.component.ts
var _c07 = (a0, a1) => ({ key: "deliver_at", name: a0, content: a1 });
var _c16 = (a0) => ({ key: "item_count", name: a0 });
var _c26 = (a0, a1) => ({ key: "total_cost", name: a0, content: a1 });
var _c36 = (a0, a1, a2) => [a0, a1, a2];
function CateringReportOrdersComponent_ng_template_14_Template(rf, ctx) {
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
function CateringReportOrdersComponent_ng_template_16_Template(rf, ctx) {
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
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
    this.orders = this._report.catering_orders;
    this.download = () => this._report.downloadOrders();
  }
  get code() {
    return this._org.currency_code;
  }
  get time_format() {
    return this._settings.time_format;
  }
};
_CateringReportOrdersComponent.\u0275fac = function CateringReportOrdersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportOrdersComponent)();
};
_CateringReportOrdersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOrdersComponent, selectors: [["catering-report-orders"]], inputs: { print: [1, "print"] }, decls: 18, vars: 31, consts: [["date_template", ""], ["cost_template", ""], [1, "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", 1, "print:hidden", 3, "click", "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], [1, "p-4"]], template: function CateringReportOrdersComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h2", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function CateringReportOrdersComponent_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.download());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(9, "simple-table", 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, CateringReportOrdersComponent_ng_template_14_Template, 4, 7, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, CateringReportOrdersComponent_ng_template_16_Template, 3, 4, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(15);
    const cost_template_r6 = \u0275\u0275reference(17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 9, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx.orders)("columns", \u0275\u0275pureFunction3(27, _c36, \u0275\u0275pureFunction2(19, _c07, \u0275\u0275pipeBind1(10, 11, "APP.CONCIERGE.ASSETS_REQUESTS_TIME"), date_template_r5), \u0275\u0275pureFunction1(22, _c16, \u0275\u0275pipeBind1(11, 13, "APP.CONCIERGE.REPORTS_CATERING_ITEMS")), \u0275\u0275pureFunction2(24, _c26, \u0275\u0275pipeBind1(12, 15, "CATERING.TOTAL_COST"), cost_template_r6)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 17, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  CurrencyPipe,
  DatePipe,
  TranslatePipe,
  SimpleTableComponent,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple,
  IconComponent
], encapsulation: 2 });
var CateringReportOrdersComponent = _CateringReportOrdersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportOrdersComponent, [{
    type: Component,
    args: [{ selector: "catering-report-orders", template: `
        <div
            class="mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div
                class="flex items-center justify-between border-b border-base-200 px-4"
            >
                <h2 class="py-2 text-xl font-medium">
                    {{
                        'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER'
                            | translate
                    }}
                </h2>
                <button
                    icon
                    matRipple
                    (click)="download()"
                    class="print:hidden"
                    [matTooltip]="
                        'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                    "
                >
                    <icon>download</icon>
                </button>
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="orders"
                [columns]="[
                    {
                        key: 'deliver_at',
                        name: 'APP.CONCIERGE.ASSETS_REQUESTS_TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'item_count',
                        name:
                            'APP.CONCIERGE.REPORTS_CATERING_ITEMS' | translate,
                    },
                    {
                        key: 'total_cost',
                        name: 'CATERING.TOTAL_COST' | translate,
                        content: cost_template,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_EMPTY' | translate
                "
            ></simple-table>

            <ng-template #date_template let-data="data">
                <div class="p-4">
                    {{ data | date }} at {{ data | date: time_format }}
                </div>
            </ng-template>
            <ng-template #cost_template let-data="data">
                <div class="p-4">
                    {{ data / 100 | currency: code }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      SimpleTableComponent,
      MatTooltipModule,
      MatRippleModule,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOrdersComponent, { className: "CateringReportOrdersComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-orders.component.ts", lineNumber: 89 });
})();

// apps/concierge/src/app/reports/catering/catering-report-overall.component.ts
var _CateringReportOverallComponent = class _CateringReportOverallComponent {
  constructor() {
    this._report = inject(CateringReportStateService);
    this._org = inject(OrganisationService);
    this.stats = this._report.stats;
  }
  get code() {
    return this._org.currency_code;
  }
};
_CateringReportOverallComponent.\u0275fac = function CateringReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _CateringReportOverallComponent)();
};
_CateringReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportOverallComponent, selectors: [["catering-report-overall"]], decls: 37, vars: 36, consts: [["item", "", 1, "flex", "flex-1", "flex-col", "items-center", "justify-center"], ["count", "", 1, "text-3xl"], [1, "text-sm"], ["unique", "", 1, "text-3xl"], ["items", "", 1, "text-3xl"], ["total", "", 1, "text-3xl"], ["average", "", 1, "text-3xl"]], template: function CateringReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 0)(8, "div", 3);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 2);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 0)(15, "div", 4);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 2);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 0)(22, "div", 5);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275pipe(25, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 2);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 0)(30, "div", 6);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "async");
    \u0275\u0275pipe(33, "currency");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div", 2);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    let tmp_4_0;
    let tmp_6_0;
    let tmp_8_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_0_0 = \u0275\u0275pipeBind1(3, 10, ctx.stats)) == null ? null : tmp_0_0.order_count) || "0", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 12, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_2_0 = \u0275\u0275pipeBind1(10, 14, ctx.stats)) == null ? null : tmp_2_0.unique_items) || "0", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 16, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_UNIQUE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ((tmp_4_0 = \u0275\u0275pipeBind1(17, 18, ctx.stats)) == null ? null : tmp_4_0.item_count) || "0", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 20, "APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 24, ((tmp_6_0 = \u0275\u0275pipeBind1(24, 22, ctx.stats)) == null ? null : tmp_6_0.total_cost) / 100 || 0, ctx.code), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 27, "CATERING.TOTAL_COST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 31, ((tmp_8_0 = \u0275\u0275pipeBind1(32, 29, ctx.stats)) == null ? null : tmp_8_0.avg_cost) / 100 || 0, ctx.code), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 34, "APP.CONCIERGE.REPORTS_CATERING_ORDERS_AVERAGE"), " ");
  }
}, dependencies: [CommonModule, AsyncPipe, CurrencyPipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n[item][_ngcontent-%COMP%] {\n  border: 1px solid var(--base-200);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  height: 6rem;\n  width: 12rem;\n  min-width: 7rem;\n}\n/*# sourceMappingURL=catering-report-overall.component.css.map */"] });
var CateringReportOverallComponent = _CateringReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportOverallComponent, [{
    type: Component,
    args: [{ selector: "catering-report-overall", template: `
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div count class="text-3xl">
                {{ (stats | async)?.order_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ORDERS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div unique class="text-3xl">
                {{ (stats | async)?.unique_items || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_UNIQUE' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div items class="text-3xl">
                {{ (stats | async)?.item_count || '0' }}
            </div>
            <div class="text-sm">
                {{ 'APP.CONCIERGE.REPORTS_CATERING_ITEMS_HEADER' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div total class="text-3xl">
                {{ (stats | async)?.total_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{ 'CATERING.TOTAL_COST' | translate }}
            </div>
        </div>
        <div item class="flex flex-1 flex-col items-center justify-center">
            <div average class="text-3xl">
                {{ (stats | async)?.avg_cost / 100 || 0 | currency: code }}
            </div>
            <div class="text-sm">
                {{
                    'APP.CONCIERGE.REPORTS_CATERING_ORDERS_AVERAGE' | translate
                }}
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe], styles: ["/* angular:styles/component:css;6a270b40a6f5e0e10ead12768846f2c5828b349a3726bb5f045ed4d5c748816d;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/catering/catering-report-overall.component.ts */\n:host {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  max-width: 64rem;\n  margin: 0 auto;\n}\n[item] {\n  border: 1px solid var(--base-200);\n  border-radius: 0.5rem;\n  padding: 1rem;\n  margin: 0.5rem;\n  height: 6rem;\n  width: 12rem;\n  min-width: 7rem;\n}\n/*# sourceMappingURL=catering-report-overall.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportOverallComponent, { className: "CateringReportOverallComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report-overall.component.ts", lineNumber: 78 });
})();

// apps/concierge/src/app/reports/catering/catering-report.component.ts
function CateringReportComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "catering-report-overall")(1, "catering-report-orders", 9)(2, "catering-report-items", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function CateringReportComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function CateringReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CateringReportComponent_Conditional_13_Conditional_0_Template, 3, 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, CateringReportComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function CateringReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _CateringReportComponent = class _CateringReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  get using_bookings() {
    return this._settings.get("app.catering.use_bookings") == true;
  }
  ngOnInit() {
    this.subscription("bld", this._org.active_building.subscribe(() => {
      this._state.setOptions({
        type: this.using_bookings ? "catering" : "events"
      });
    }));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
    this._state.setOptions({
      type: this.using_bookings ? "catering" : "events"
    });
  }
};
_CateringReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CateringReportComponent_BaseFactory;
  return function CateringReportComponent_Factory(__ngFactoryType__) {
    return (\u0275CateringReportComponent_BaseFactory || (\u0275CateringReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CateringReportComponent)))(__ngFactoryType__ || _CateringReportComponent);
  };
})();
_CateringReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CateringReportComponent, selectors: [["catering-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "overflow-hidden", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function CateringReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function CateringReportComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function CateringReportComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function CateringReportComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, CateringReportComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, CateringReportComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_CATERING_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ReportsOptionsComponent,
  CateringReportItemsComponent,
  CateringReportOrdersComponent,
  CateringReportOverallComponent,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=catering-report.component.css.map */"] });
var CateringReportComponent = _CateringReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CateringReportComponent, [{
    type: Component,
    args: [{ selector: "catering-report", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div
                    class="m-4 flex items-center overflow-hidden rounded-sm bg-base-200 p-4"
                >
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CATERING_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <catering-report-overall></catering-report-overall>
                    <catering-report-orders
                        [print]="printing"
                    ></catering-report-orders>
                    <catering-report-items
                        [print]="printing"
                    ></catering-report-items>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      ReportsOptionsComponent,
      CateringReportItemsComponent,
      CateringReportOrdersComponent,
      CateringReportOverallComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/catering/catering-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=catering-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CateringReportComponent, { className: "CateringReportComponent", filePath: "apps/concierge/src/app/reports/catering/catering-report.component.ts", lineNumber: 99 });
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
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetUserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-state.service.ts
var _ContactTracingStateService = class _ContactTracingStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._reports = inject(ReportsStateService);
    this._settings = inject(SettingsService);
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
      const mod = kh(this.system_id, "ContactTracing");
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
  get system_id() {
    const binding = this._org.binding("contact_tracing");
    const system_id = binding instanceof Object ? binding.id : binding;
    return system_id;
  }
  get time_format() {
    return this._settings.time_format;
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  generateReport() {
    this._generate.next(Date.now());
  }
  async downloadReport() {
    const { start, end } = await nextValueFrom(this._reports.options);
    const events = await nextValueFrom(this.events);
    const pipe = new GetUserPipe();
    const processed_events = await Promise.all(events.map(async (_) => ({
      "MAC Address": _.mac_address,
      Date: format(_.date, "dd MMM yyyy, " + this.time_format),
      "User Name": _.user,
      "Contact Name": (await pipe.transform(_.contact_id).toPromise())?.name || (_.contact_id !== "null" ? _.contact_id : null) || _.mac_address,
      Duration: `${Math.floor(_.duration / 60) ? Math.floor(_.duration / 60) + "h " : ""}${Math.floor(_.duration % 60) + "m"}`,
      Distance: _.distance
    })));
    if (!processed_events?.length) {
      return notifyWarn("No events to download.");
    }
    downloadFile(`report+contact-tracing+${format(start, "yyyy-MM-dd")}+${format(end, "yyyy-MM-dd")}.csv`, jsonToCsv(processed_events));
  }
};
_ContactTracingStateService.\u0275fac = function ContactTracingStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactTracingStateService)();
};
_ContactTracingStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ContactTracingStateService, factory: _ContactTracingStateService.\u0275fac, providedIn: "root" });
var ContactTracingStateService = _ContactTracingStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts
var _ContactTracingOptionsComponent = class _ContactTracingOptionsComponent {
  constructor() {
    this._state = inject(ContactTracingStateService);
    this._settings = inject(SettingsService);
    this.printing = output();
    this.download = output();
    this.options = this._state.options;
    this.setOptions = (_) => this._state.setOptions(_);
    this.generate = () => this._state.generateReport();
  }
  get week_start() {
    return this._settings.get("app.week_start");
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
  return new (__ngFactoryType__ || _ContactTracingOptionsComponent)();
};
_ContactTracingOptionsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingOptionsComponent, selectors: [["contact-tracing-options"]], outputs: { printing: "printing", download: "download" }, decls: 19, vars: 16, consts: [["startDate", ""], ["endDate", ""], [1, "flex", "w-full", "items-center", "space-x-2", "bg-base-100", "p-4", "shadow-sm"], [3, "week_start"], [3, "ngModelChange", "ngModel"], ["placeholder", "Search for user to trace...", 1, "w-64", 3, "ngModelChange", "ngModel"], [1, "flex-1"], ["icon", "", "matRipple", "", "matTooltip", "Download Report", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "disabled"], ["icon", "", "matRipple", "", "matTooltip", "Print Report", 1, "h-12", "w-12", "rounded-sm", "bg-secondary", "text-secondary-content", 3, "click", "disabled"]], template: function ContactTracingOptionsComponent_Template(rf, ctx) {
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
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "download");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "button", 8);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275listener("click", function ContactTracingOptionsComponent_Template_button_click_15_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.print());
    });
    \u0275\u0275elementStart(17, "icon");
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
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DateRangeFieldComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip,
  IconComponent,
  UserSearchFieldComponent,
  FormsModule,
  DefaultValueAccessor,
  NgControlStatus,
  NgModel
], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25rem;\n}\nbutton[icon][disabled][_ngcontent-%COMP%] {\n  background-color: var(--neutral) !important;\n}\n/*# sourceMappingURL=contact-tracing-options.component.css.map */"] });
var ContactTracingOptionsComponent = _ContactTracingOptionsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingOptionsComponent, [{
    type: Component,
    args: [{ selector: "contact-tracing-options", template: `
        <div class="flex w-full items-center space-x-2 bg-base-100 p-4 shadow-sm">
            <date-range-field [week_start]="week_start">
                <input
                    #startDate
                    [ngModel]="(options | async)?.start"
                    (ngModelChange)="
                        $event ? setOptions({ start: $event, user: null }) : ''
                    "
                />
                <input
                    #endDate
                    [ngModel]="(options | async)?.end"
                    (ngModelChange)="
                        $event ? setOptions({ end: $event, user: null }) : ''
                    "
                />
            </date-range-field>
            <a-user-search-field
                class="w-64"
                placeholder="Search for user to trace..."
                [ngModel]="(options | async)?.user"
                (ngModelChange)="setOptions({ user: $event })"
            ></a-user-search-field>
            <div class="flex-1"></div>
            <button
                icon
                matRipple
                matTooltip="Download Report"
                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                [disabled]="!(options | async)?.user"
                (click)="download.emit()"
            >
                <icon>download</icon>
            </button>
            <button
                icon
                matRipple
                class="h-12 w-12 rounded-sm bg-secondary text-secondary-content"
                [disabled]="!(options | async)?.user"
                matTooltip="Print Report"
                (click)="print()"
            >
                <icon>print</icon>
            </button>
        </div>
    `, imports: [
      CommonModule,
      DateRangeFieldComponent,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      UserSearchFieldComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;47494ff02c77eb9d536fd6ec6e1602c07578491dfbe00a5af890b7e488087270;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts */\nmat-form-field {\n  height: 3.25rem;\n}\nbutton[icon][disabled] {\n  background-color: var(--neutral) !important;\n}\n/*# sourceMappingURL=contact-tracing-options.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingOptionsComponent, { className: "ContactTracingOptionsComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-options.component.ts", lineNumber: 84 });
})();

// apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts
var _c08 = (a0) => ({ key: "date", name: "Time of Contact", content: a0 });
var _c17 = (a0) => ({ key: "user_id", name: "Person", content: a0 });
var _c27 = (a0) => ({ key: "contact_id", name: "Close Contact", content: a0 });
var _c37 = (a0) => ({ key: "duration", name: "Duration", content: a0 });
var _c46 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_8_0;
    const data_r1 = ctx.data;
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ((tmp_8_0 = \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, data_r1))) == null ? null : tmp_8_0.name) || row_r2.mac_address, " ");
  }
}
function ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, data_r3, "mediumDate"), ", ", \u0275\u0275pipeBind2(3, 5, data_r3, ctx_r3.time_format), " ");
  }
}
function ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r3.formatDuration(data_r5 || 0) || "Less than a minute", " ");
  }
}
function ContactTracingReportComponent_Conditional_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 13)(2, "h2", 14);
    \u0275\u0275text(3, " Contact Events ");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(4, "simple-table", 15);
    \u0275\u0275template(5, ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_5_Template, 4, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_7_Template, 4, 8, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, ContactTracingReportComponent_Conditional_11_Conditional_0_ng_template_9_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_template_r6 = \u0275\u0275reference(6);
    const date_template_r7 = \u0275\u0275reference(8);
    const duration_template_r8 = \u0275\u0275reference(10);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("data", ctx_r3.tracing_events)("columns", \u0275\u0275pureFunction4(12, _c46, \u0275\u0275pureFunction1(4, _c08, date_template_r7), \u0275\u0275pureFunction1(6, _c17, user_template_r6), \u0275\u0275pureFunction1(8, _c27, user_template_r6), \u0275\u0275pureFunction1(10, _c37, duration_template_r8)))("sortable", true)("page_size", ctx_r3.print ? 0 : 30);
  }
}
function ContactTracingReportComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "p", 17);
    \u0275\u0275text(2, " Select a user from the topbar to begin ");
    \u0275\u0275elementEnd()();
  }
}
function ContactTracingReportComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ContactTracingReportComponent_Conditional_11_Conditional_0_Template, 11, 17, "div", 11);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, ContactTracingReportComponent_Conditional_11_Conditional_2_Template, 3, 0, "div", 12);
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.options)) == null ? null : tmp_1_0.user) ? 0 : 2);
  }
}
function ContactTracingReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275element(1, "map-spinner", 18);
    \u0275\u0275elementStart(2, "p", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, ctx_r3.loading));
  }
}
var _ContactTracingReportComponent = class _ContactTracingReportComponent {
  constructor() {
    this._state = inject(ContactTracingStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.tracing_events = this._state.events;
    this.setOptions = (_) => this._state.setOptions(_);
    this.downloadReport = () => this._state.downloadReport();
    this.formatDuration = (d) => formatDuration({ hours: Math.floor(d / 60), minutes: d % 60 });
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
  }
  get time_format() {
    return this._settings.time_format;
  }
};
_ContactTracingReportComponent.\u0275fac = function ContactTracingReportComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ContactTracingReportComponent)();
};
_ContactTracingReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ContactTracingReportComponent, selectors: [["app-contact-tracing-report"]], decls: 14, vars: 11, consts: [["user_template", ""], ["date_template", ""], ["duration_template", ""], [1, "print:hidden", 3, "printing", "download"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "overflow-hidden", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "mx-auto", "my-2", "w-5xl", "max-w-[calc(100%-2rem)]", "rounded-lg", "border", "border-base-200"], [1, "screen-only", "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "flex", "items-center", "justify-between", "border-b", "border-base-200", "px-4"], [1, "py-2", "text-xl", "font-medium"], ["empty_message", "No contact tracing events for selected period", 1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size"], [1, "p-4"], [1, "opacity-30"], ["diameter", "32"]], template: function ContactTracingReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "contact-tracing-options", 3);
    \u0275\u0275listener("printing", function ContactTracingReportComponent_Template_contact_tracing_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function ContactTracingReportComponent_Template_contact_tracing_options_download_0_listener() {
      return ctx.downloadReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 4)(2, "div", 5)(3, "div", 6);
    \u0275\u0275element(4, "img", 7);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275element(7, "div", 8);
    \u0275\u0275elementStart(8, "h2", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(11, ContactTracingReportComponent_Conditional_11_Template, 3, 3);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275conditionalBranchCreate(13, ContactTracingReportComponent_Conditional_13_Template, 5, 3, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(4);
    \u0275\u0275property("source", ((tmp_0_0 = \u0275\u0275pipeBind1(5, 3, ctx.logo)) == null ? null : tmp_0_0.src) || \u0275\u0275pipeBind1(6, 5, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 7, "APP.CONCIERGE.REPORTS_CONTACTS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(12, 9, ctx.loading) ? 11 : 13);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  ContactTracingOptionsComponent,
  MatProgressSpinnerModule,
  UserPipe,
  SimpleTableComponent,
  AuthenticatedImageDirective,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=contact-tracing-report.component.css.map */"] });
var ContactTracingReportComponent = _ContactTracingReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContactTracingReportComponent, [{
    type: Component,
    args: [{ selector: "app-contact-tracing-report", template: `
        <contact-tracing-options
            (printing)="printing = $event"
            (download)="downloadReport()"
            class="print:hidden"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div
                    class="m-4 flex items-center overflow-hidden rounded-sm bg-base-200 p-4"
                >
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_CONTACTS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if ((options | async)?.user) {
                    <div
                        class="mx-auto my-2 w-5xl max-w-[calc(100%-2rem)] rounded-lg border border-base-200"
                    >
                        <div
                            class="flex items-center justify-between border-b border-base-200 px-4"
                        >
                            <h2 class="py-2 text-xl font-medium">
                                Contact Events
                            </h2>
                        </div>
                        <simple-table
                            class="block w-full text-sm"
                            [data]="tracing_events"
                            [columns]="[
                                {
                                    key: 'date',
                                    name: 'Time of Contact',
                                    content: date_template,
                                },
                                {
                                    key: 'user_id',
                                    name: 'Person',
                                    content: user_template,
                                },
                                {
                                    key: 'contact_id',
                                    name: 'Close Contact',
                                    content: user_template,
                                },
                                {
                                    key: 'duration',
                                    name: 'Duration',
                                    content: duration_template,
                                },
                            ]"
                            [sortable]="true"
                            [page_size]="print ? 0 : 30"
                            empty_message="No contact tracing events for selected period"
                        ></simple-table>
                        <ng-template
                            #user_template
                            let-data="data"
                            let-row="row"
                        >
                            <div class="p-4">
                                {{
                                    (data | user | async)?.name ||
                                        row.mac_address
                                }}
                            </div>
                        </ng-template>
                        <ng-template #date_template let-data="data">
                            <div class="p-4">
                                {{ data | date: 'mediumDate' }},
                                {{ data | date: time_format }}
                            </div>
                        </ng-template>
                        <ng-template #duration_template let-data="data">
                            <div class="p-4">
                                {{
                                    formatDuration(data || 0) ||
                                        'Less than a minute'
                                }}
                            </div>
                        </ng-template>
                    </div>
                } @else {
                    <div
                        class="screen-only flex flex-col items-center justify-center space-y-2 p-8"
                    >
                        <p class="opacity-30">
                            Select a user from the topbar to begin
                        </p>
                    </div>
                }
            } @else {
                <div
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <map-spinner diameter="32"></map-spinner>
                    <p class="opacity-30">{{ loading | async }}</p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      ContactTracingOptionsComponent,
      MatProgressSpinnerModule,
      UserPipe,
      SimpleTableComponent,
      AuthenticatedImageDirective,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;b5ddbd83b4b573db467eee0aab1ad053104c11d8d0d5679573f22afeb56e112e;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=contact-tracing-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ContactTracingReportComponent, { className: "ContactTracingReportComponent", filePath: "apps/concierge/src/app/reports/contact-tracing/contact-tracing-report.component.ts", lineNumber: 154 });
})();

// apps/concierge/src/app/reports/custom-report.component.ts
function CustomReportComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "iframe", 0);
    \u0275\u0275pipe(1, "safe");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", \u0275\u0275pipeBind2(1, 1, ctx_r0.report_url, "resource"), \u0275\u0275sanitizeResourceUrl);
  }
}
var EMPTY = {};
var _CustomReportComponent = class _CustomReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this.id = "";
  }
  get report_url() {
    const report = (this._settings.get("app.custom_reports") || []).find((_) => _.id === this.id) || EMPTY;
    if (!report.url)
      return "";
    const url = report.url + (report.url.includes("?") ? "&" : "?") + `kiosk=tv`;
    return url + (report.api_key ? `&key=${encodeURIComponent(report.api_key)}` : "");
  }
  ngOnInit() {
    this.subscription("route.params", this._route.paramMap.subscribe((params) => this.id = params.get("id") || ""));
  }
};
_CustomReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275CustomReportComponent_BaseFactory;
  return function CustomReportComponent_Factory(__ngFactoryType__) {
    return (\u0275CustomReportComponent_BaseFactory || (\u0275CustomReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_CustomReportComponent)))(__ngFactoryType__ || _CustomReportComponent);
  };
})();
_CustomReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _CustomReportComponent, selectors: [["custom-report"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[1, "h-full", "w-full", 3, "src"]], template: function CustomReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, CustomReportComponent_Conditional_0_Template, 2, 4, "iframe", 0);
  }
  if (rf & 2) {
    \u0275\u0275conditional(ctx.id ? 0 : -1);
  }
}, dependencies: [SafePipe], styles: ["\n\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=custom-report.component.css.map */"] });
var CustomReportComponent = _CustomReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CustomReportComponent, [{
    type: Component,
    args: [{ selector: "custom-report", template: `
        @if (id) {
            <iframe
                class="h-full w-full"
                [src]="report_url | safe: 'resource'"
            ></iframe>
        }
    `, imports: [SafePipe], styles: ["/* angular:styles/component:css;8f663144e307d97d7c6361d75534b712825c70421a65c587eccbcb19333fd199;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/custom-report.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=custom-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(CustomReportComponent, { className: "CustomReportComponent", filePath: "apps/concierge/src/app/reports/custom-report.component.ts", lineNumber: 28 });
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
function quantity(input2) {
  if (typeof input2 === "string") {
    const match = /^(\d+)\s*(.*)$/g.exec(input2);
    return {
      value: match ? +match[1] : 0,
      unit: (match === null || match === void 0 ? void 0 : match[2]) || void 0
    };
  }
  return {
    value: Number(input2)
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
    const targetProto = Object.getPrototypeOf(target);
    for (const prop in source) {
      if (targetProto !== null && prop in targetProto) {
        continue;
      }
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
  return Array.from(
    {
      length
    },
    filler ? (_, i) => filler(i) : () => void 0
  );
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
  list[reverse ? "reduceRight" : "reduce"](
    (_, item, itemIndex) => callback(item, index++, itemIndex),
    void 0
  );
}
function getMetaData(seriesData, index) {
  const value = Array.isArray(seriesData) ? seriesData[index] : safeHasProperty(seriesData, "data") ? seriesData.data[index] : null;
  return safeHasProperty(value, "meta") ? value.meta : void 0;
}
function isDataHoleValue(value) {
  return value === null || value === void 0 || typeof value === "number" && isNaN(value);
}
function isArrayOfSeries(value) {
  return Array.isArray(value) && value.every(
    (_) => Array.isArray(_) || safeHasProperty(_, "data")
  );
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
    labelCount = Math.max(inputLabelCount, ...normalized.series.map(
      (series) => series.length
    ));
    normalized.series.forEach((series) => {
      series.push(...times(Math.max(0, labelCount - series.length)));
    });
  } else {
    labelCount = normalized.series.length;
  }
  normalized.labels.push(...times(
    Math.max(0, labelCount - inputLabelCount),
    () => ""
  ));
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
    return series.map(
      (_) => normalizeSingleSeries(_, multi)
    );
  }
  const normalizedSeries = normalizeSingleSeries(series, multi);
  if (distributed) {
    return normalizedSeries.map(
      (value) => [
        value
      ]
    );
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
  return Object.keys(escapingMap).reduce(
    (result, key) => result.replaceAll(key, escapingMap[key]),
    serialized
  );
}
var SvgList = class {
  call(method, args) {
    this.svgElements.forEach(
      (element2) => Reflect.apply(element2[method], element2, args)
    );
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
  easeInSine: [
    0.47,
    0,
    0.745,
    0.715
  ],
  easeOutSine: [
    0.39,
    0.575,
    0.565,
    1
  ],
  easeInOutSine: [
    0.445,
    0.05,
    0.55,
    0.95
  ],
  easeInQuad: [
    0.55,
    0.085,
    0.68,
    0.53
  ],
  easeOutQuad: [
    0.25,
    0.46,
    0.45,
    0.94
  ],
  easeInOutQuad: [
    0.455,
    0.03,
    0.515,
    0.955
  ],
  easeInCubic: [
    0.55,
    0.055,
    0.675,
    0.19
  ],
  easeOutCubic: [
    0.215,
    0.61,
    0.355,
    1
  ],
  easeInOutCubic: [
    0.645,
    0.045,
    0.355,
    1
  ],
  easeInQuart: [
    0.895,
    0.03,
    0.685,
    0.22
  ],
  easeOutQuart: [
    0.165,
    0.84,
    0.44,
    1
  ],
  easeInOutQuart: [
    0.77,
    0,
    0.175,
    1
  ],
  easeInQuint: [
    0.755,
    0.05,
    0.855,
    0.06
  ],
  easeOutQuint: [
    0.23,
    1,
    0.32,
    1
  ],
  easeInOutQuint: [
    0.86,
    0,
    0.07,
    1
  ],
  easeInExpo: [
    0.95,
    0.05,
    0.795,
    0.035
  ],
  easeOutExpo: [
    0.19,
    1,
    0.22,
    1
  ],
  easeInOutExpo: [
    1,
    0,
    0,
    1
  ],
  easeInCirc: [
    0.6,
    0.04,
    0.98,
    0.335
  ],
  easeOutCirc: [
    0.075,
    0.82,
    0.165,
    1
  ],
  easeInOutCirc: [
    0.785,
    0.135,
    0.15,
    0.86
  ],
  easeInBack: [
    0.6,
    -0.28,
    0.735,
    0.045
  ],
  easeOutBack: [
    0.175,
    0.885,
    0.32,
    1.275
  ],
  easeInOutBack: [
    0.68,
    -0.55,
    0.265,
    1.55
  ]
};
function createAnimation(element2, attribute, animationDefinition) {
  let createGuided = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : false, eventEmitter = arguments.length > 4 ? arguments[4] : void 0;
  const _a = animationDefinition, { easing } = _a, def = __objRest(_a, ["easing"]);
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
    animateNode.addEventListener(
      "beginEvent",
      () => eventEmitter.emit("animationBegin", {
        element: element2,
        animate: animateNode,
        params: animationDefinition
      })
    );
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
    this._node.setAttribute("class", this.classes().filter(
      (name) => removedClasses.indexOf(name) === -1
    ).join(" "));
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
  * Get element height using `clientHeight`
  * @return The elements height in pixels
  */
  height() {
    return this._node.clientHeight;
  }
  /**
  * Get element width using `clientWidth`
  * @return The elements width in pixels
  */
  width() {
    return this._node.clientWidth;
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
        attributeAnimation.forEach(
          (animationDefinition) => createAnimation(this, attribute, animationDefinition, false, eventEmitter)
        );
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
  if (!container) {
    throw new Error("Container element is not found");
  }
  Array.from(container.querySelectorAll("svg")).filter(
    (svg) => svg.getAttributeNS(namespaces.xmlns, "ct")
  ).forEach(
    (svg) => container.removeChild(svg)
  );
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
          currentOptions = extend({}, currentOptions, responsiveOption[1]);
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
    mediaQueryListeners.forEach(
      (mql) => mql.removeEventListener("change", updateCurrentOptions)
    );
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
  m: [
    "x",
    "y"
  ],
  l: [
    "x",
    "y"
  ],
  c: [
    "x1",
    "y1",
    "x2",
    "y2",
    "x",
    "y"
  ],
  a: [
    "rx",
    "ry",
    "xAr",
    "lAf",
    "sf",
    "x",
    "y"
  ]
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
    clone.pathElements = this.pathElements.slice().map(
      (pathElement) => __spreadValues({}, pathElement)
    );
    clone.options = __spreadValues({}, this.options);
    return clone;
  }
  /**
  * Split a Svg.Path object by a specific command in the path chain. The path chain will be split and an array of newly created paths objects will be returned. This is useful if you'd like to split an SVG path by it's move commands, for example, in order to isolate chunks of drawings.
  * @param command The command you'd like to use to split the path
  */
  splitByCommand(command) {
    const split = [
      new _SvgPath()
    ];
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
      return SvgPath.join(segments.map(
        (segment) => monotoneCubicInterpolation(segment.pathCoordinates, segment.valueData)
      ));
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
var EventEmitter = class {
  on(event, listener) {
    const { allListeners, listeners } = this;
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
    const { allListeners, listeners } = this;
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
    const { allListeners, listeners } = this;
    if (listeners.has(event)) {
      listeners.get(event).forEach(
        (listener) => listener(data)
      );
    }
    allListeners.forEach(
      (listener) => listener(event, data)
    );
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
    this.eventEmitter.on(
      "optionsChanged",
      () => this.update()
    );
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
    this.eventEmitter = new EventEmitter();
    this.resizeListener = () => this.update();
    this.initializeTimeoutId = setTimeout(
      () => this.initialize(),
      0
    );
    const container = typeof query === "string" ? document.querySelector(query) : query;
    if (!container) {
      throw new Error("Target element ".concat(typeof query === "string" ? '"'.concat(query, '"') : "", " is not found"));
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
    const projectedValues = this.ticks.map(
      (tick, i) => this.projectValue(tick, i)
    );
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
        createGrid(projectedValue, index, this, this.gridOffset, this.chartRect[this.counterUnits.len](), gridGroup, [
          chartOptions.classNames.grid,
          chartOptions.classNames[this.units.dir]
        ], eventEmitter);
      }
      if (axisOptions.showLabel) {
        createLabel(projectedValue, labelLength, index, labelValue, this, axisOptions.offset, labelOffset, labelGroup, [
          chartOptions.classNames.label,
          chartOptions.classNames[this.units.dir],
          axisOptions.position === "start" ? chartOptions.classNames[axisOptions.position] : chartOptions.classNames.end
        ], eventEmitter);
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
    const { data } = this;
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
      seriesElement.addClass([
        options.classNames.series,
        seriesClassName || "".concat(options.classNames.series, "-").concat(alphaNumerate(seriesIndex))
      ].join(" "));
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
          const { data: pathElementData } = pathElement;
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
              "ct:value": [
                x,
                y
              ].filter(isNumeric).join(","),
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
        path.splitByCommand("M").filter(
          (pathSegment) => pathSegment.pathElements.length > 1
        ).map((solidPathSegments) => {
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
  ignoreEmptyValues: false,
  // If Nonzero check if a label has overlapping text then move it the number of pixels up and left (Should be half of label font size + 1 but you can tweak it as you prefer)
  preventOverlappingLabelOffset: 0
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
  * Check if a label has overlapping text then move it the number of pixels up and left based on textSize.
  * @param labelPos - Label position that chartist will be checking does not overlap with the list of LabelPositions.
  * @param existingLabelPos - Label position that has already been placed that chartist will check against.
  * @param textOffset - this is configured with preventOverlappingLabelOffset option.
  * @param length - How many characters long the label is.
  */
  moveLabel(labelPos, existingLabelPos, textOffset, length) {
    if (labelPos.y > existingLabelPos.y - textOffset && labelPos.y < existingLabelPos.y + textOffset && labelPos.x > existingLabelPos.x - length * textOffset && labelPos.x < existingLabelPos.x + length * textOffset) {
      labelPos.y -= textOffset;
      labelPos.x -= textOffset;
      this.moveLabel(labelPos, existingLabelPos, textOffset, length);
    }
  }
  /**
  * Creates the pie chart
  *
  * @param options
  */
  createChart(options) {
    const { data } = this;
    const normalizedData = normalizeData(data);
    const seriesGroups = [];
    let labelsGroup;
    const labelPositions = [];
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
    const hasSingleValInSeries = data.series.filter(
      (val) => safeHasProperty(val, "value") ? val.value !== 0 : val !== 0
    ).length === 1;
    data.series.forEach(
      (_, index) => seriesGroups[index] = svg.elem("g")
    );
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
      seriesGroups[index].addClass([
        (ref = options.classNames) === null || ref === void 0 ? void 0 : ref.series,
        seriesClassName || "".concat((ref1 = options.classNames) === null || ref1 === void 0 ? void 0 : ref1.series, "-").concat(alphaNumerate(index))
      ].join(" "));
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
          if (options.preventOverlappingLabelOffset) {
            const textOffset = options.preventOverlappingLabelOffset;
            const length = String(normalizedData.labels[index]).length;
            labelPositions.forEach((item) => {
              this.moveLabel(labelPosition, item, textOffset, length);
            });
            labelPositions.push(labelPosition);
          }
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
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
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
    this.timeout("update_charts", async () => {
      const day_list = await nextValueFrom(this.day_list);
      this.updateDailyChart(day_list);
      const [mappings, counts] = await nextValueFrom(this.stats);
      this.updateLevelChart(mappings, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }, 50);
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
_ReportDesksChartsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ReportDesksChartsComponent_BaseFactory;
  return function ReportDesksChartsComponent_Factory(__ngFactoryType__) {
    return (\u0275ReportDesksChartsComponent_BaseFactory || (\u0275ReportDesksChartsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportDesksChartsComponent)))(__ngFactoryType__ || _ReportDesksChartsComponent);
  };
})();
_ReportDesksChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksChartsComponent, selectors: [["report-desks-charts"]], inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "h-72", "flex-1", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-full", "max-w-full"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-[24rem]", "max-w-full"]], template: function ReportDesksChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function ReportDesksChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 1)(7, "div", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-desks-charts.component.css.map */"] });
var ReportDesksChartsComponent = _ReportDesksChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksChartsComponent, [{
    type: Component,
    args: [{ selector: "report-desks-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-72 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-72 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-[24rem] max-w-full"
                ></div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;5abc8ee09e0d36f5d60b2d76883f59bf6f99a5316bb94318311e1579b21e749b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/desks/report-desks-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print .ct-chart {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-desks-charts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksChartsComponent, { className: "ReportDesksChartsComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-charts.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts
var _c09 = (a0) => ({ key: "name", name: a0 });
var _c18 = (a0) => ({ key: "avg_usage", name: a0 });
var _c28 = (a0) => ({ key: "approved", name: a0 });
var _c38 = (a0) => ({ key: "count", name: a0 });
var _c47 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c54 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportDesksLevelListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportDesksLevelListComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportDesksLevelListComponent_ng_template_14_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(ReportsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
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
    this.download = async () => {
      const data = await nextValueFrom(this.level_list);
      downloadFile("desks-levels-usage.csv", jsonToCsv(data));
    };
  }
};
_ReportDesksLevelListComponent.\u0275fac = function ReportDesksLevelListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksLevelListComponent)();
};
_ReportDesksLevelListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksLevelListComponent, selectors: [["report-desks-levels-list"]], inputs: { print: [1, "print"] }, decls: 16, vars: 38, consts: [["percent_view", ""], [1, "w-full", "px-4", "pb-2"], [1, "w-full", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "sortable", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportDesksLevelListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3)(3, "h3", 4);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ReportDesksLevelListComponent_Conditional_6_Template, 4, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "simple-table", 6);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, ReportDesksLevelListComponent_ng_template_14_Template, 2, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const percent_view_r4 = \u0275\u0275reference(15);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.level_list)("columns", \u0275\u0275pureFunction5(32, _c54, \u0275\u0275pureFunction1(21, _c09, \u0275\u0275pipeBind1(8, 9, "RESOURCE.LEVEL")), \u0275\u0275pureFunction1(23, _c18, \u0275\u0275pipeBind1(9, 11, "APP.CONCIERGE.REPORTS_AVG_DESKS")), \u0275\u0275pureFunction1(25, _c28, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(27, _c38, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction2(29, _c47, \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_view_r4)))("page_size", ctx.print() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(13, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ReportDesksLevelListComponent = _ReportDesksLevelListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksLevelListComponent, [{
    type: Component,
    args: [{
      selector: "report-desks-levels-list",
      template: `
        <div class="w-full px-4 pb-2">
            <div
                class="w-full overflow-hidden rounded-sm border border-base-200 bg-base-100"
            >
                <div class="flex items-center border-b border-base-200 p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{
                            'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER'
                                | translate
                        }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                        >
                            <icon>download</icon>
                        </button>
                    }
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="level_list"
                    [columns]="[
                        { key: 'name', name: 'RESOURCE.LEVEL' | translate },
                        {
                            key: 'avg_usage',
                            name: 'APP.CONCIERGE.REPORTS_AVG_DESKS' | translate,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_view,
                        },
                    ]"
                    [page_size]="print() ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
                <ng-template #percent_view let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
      imports: [
        SimpleTableComponent,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksLevelListComponent, { className: "ReportDesksLevelListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-level-list.component.ts", lineNumber: 97 });
})();

// apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts
var _c010 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c19 = (a0) => ({ key: "approved", name: a0 });
var _c29 = (a0) => ({ key: "count", name: a0 });
var _c39 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c48 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportDesksOverallListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportDesksOverallListComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportDesksOverallListComponent_ng_template_13_Template(rf, ctx) {
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
function ReportDesksOverallListComponent_ng_template_15_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(ReportsStateService);
    this.print = input(false);
    this.day_list = this._state.day_list;
    this.download = async () => {
      let data = await nextValueFrom(this.day_list);
      data = data.map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMM d, y(EEE)")
      }));
      downloadFile("desks-usage.csv", jsonToCsv(data));
    };
  }
};
_ReportDesksOverallListComponent.\u0275fac = function ReportDesksOverallListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportDesksOverallListComponent)();
};
_ReportDesksOverallListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksOverallListComponent, selectors: [["report-desks-overall-list"]], inputs: { print: [1, "print"] }, decls: 17, vars: 34, consts: [["date_template", ""], ["percent_template", ""], [1, "w-full", "pb-2"], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "page_size", "sortable", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportDesksOverallListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ReportDesksOverallListComponent_Conditional_6_Template, 4, 3, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "simple-table", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, ReportDesksOverallListComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ReportDesksOverallListComponent_ng_template_15_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(14);
    const percent_template_r6 = \u0275\u0275reference(16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.day_list)("columns", \u0275\u0275pureFunction4(29, _c48, \u0275\u0275pureFunction2(19, _c010, \u0275\u0275pipeBind1(8, 9, "FORM.DATE"), date_template_r5), \u0275\u0275pureFunction1(22, _c19, \u0275\u0275pipeBind1(9, 11, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(24, _c29, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction2(26, _c39, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_template_r6)))("page_size", ctx.print() ? 0 : 10)("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ReportDesksOverallListComponent = _ReportDesksOverallListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksOverallListComponent, [{
    type: Component,
    args: [{
      selector: "report-desks-overall-list",
      template: `
        <div class="w-full pb-2">
            <div
                class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
            >
                <div class="flex items-center border-b border-base-200 p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                        >
                            <icon>download</icon>
                        </button>
                    }
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="day_list"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_template,
                        },
                    ]"
                    [page_size]="print() ? 0 : 10"
                    [sortable]="true"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                >
                </simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
      imports: [
        SimpleTableComponent,
        CommonModule,
        TranslatePipe,
        IconComponent,
        MatRippleModule,
        MatTooltipModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksOverallListComponent, { className: "ReportDesksOverallListComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks-overall-list.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/reports/desks/report-desks.component.ts
var _c011 = ["report-desks", ""];
function ReportDesksComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 10)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "report-desks-charts", 11)(16, "report-desks-overall-list", 11)(17, "report-desks-levels-list", 11);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, ctx_r0.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "APP.CONCIERGE.REPORTS_UTILISATION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 13, ctx_r0.utilisation) || 0, "%");
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function ReportDesksComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function ReportDesksComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReportDesksComponent_Conditional_13_Conditional_0_Template, 18, 15);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, ReportDesksComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function ReportDesksComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 13);
    \u0275\u0275elementStart(2, "p", 12);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _ReportDesksComponent = class _ReportDesksComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.utilisation = this._state.stats.pipe(map((i) => ((i.utilisation || 0) * 100).toFixed(1)));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
        const zones = id_list.split(",").filter((_) => _);
        if (zones.length)
          this._state.setOptions({ zones });
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_ReportDesksComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ReportDesksComponent_BaseFactory;
  return function ReportDesksComponent_Factory(__ngFactoryType__) {
    return (\u0275ReportDesksComponent_BaseFactory || (\u0275ReportDesksComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportDesksComponent)))(__ngFactoryType__ || _ReportDesksComponent);
  };
})();
_ReportDesksComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportDesksComponent, selectors: [["", "report-desks", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c011, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function ReportDesksComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ReportDesksComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function ReportDesksComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function ReportDesksComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, ReportDesksComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, ReportDesksComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_DESKS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TranslatePipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  ReportsOptionsComponent,
  ReportDesksChartsComponent,
  ReportDesksLevelListComponent,
  ReportDesksOverallListComponent,
  AuthenticatedImageDirective
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */"] });
var ReportDesksComponent = _ReportDesksComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportDesksComponent, [{
    type: Component,
    args: [{ selector: "[report-desks]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_DESKS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <div
                        class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
                    >
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS'
                                        | translate
                                }}
                            </h3>
                            <p>{{ (total_count | async) || 0 }}</p>
                        </div>
                        <div class="flex flex-1 flex-col items-center">
                            <h3>
                                {{
                                    'APP.CONCIERGE.REPORTS_UTILISATION'
                                        | translate
                                }}
                            </h3>
                            <p>{{ (utilisation | async) || 0 }}%</p>
                        </div>
                    </div>
                    <report-desks-charts
                        [print]="printing"
                    ></report-desks-charts>
                    <report-desks-overall-list
                        [print]="printing"
                    ></report-desks-overall-list>
                    <report-desks-levels-list
                        [print]="printing"
                    ></report-desks-levels-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      ReportsOptionsComponent,
      ReportDesksChartsComponent,
      ReportDesksLevelListComponent,
      ReportDesksOverallListComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;a2acccb33bf7e03dd7b433f5322d3eebbac39652744132c78c2980c29c63579a;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/desks/report-desks.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\nh3 {\n  font-weight: 500;\n}\n/*# sourceMappingURL=report-desks.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportDesksComponent, { className: "ReportDesksComponent", filePath: "apps/concierge/src/app/reports/desks/report-desks.component.ts", lineNumber: 124 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report.service.ts
var _LockersReportService = class _LockersReportService {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._report = inject(ReportsStateService);
    this._options = new BehaviorSubject({});
    this.loading$ = this._report.loading;
    this.options$ = this._options.asObservable();
    this.bookings$ = this._report.bookings.pipe(map((_) => _));
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
        zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("lockers")).map((_) => _.id);
      }
      return Promise.all(zones.map((z) => Xu(z, "lockers-spaces").pipe(catchError(() => of({ details: [] })), map((m) => [z, m.details.length])).toPromise()));
    }), map((list) => {
      const mapping = {};
      list.forEach(([id, count]) => mapping[id] = Math.max(count || 0, 1));
      return mapping;
    }), shareReplay(1));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
    this._report.setOptions(options);
  }
  generateReport() {
    this._report.setOptions({ type: "lockers" });
    this._report.generateReport();
  }
  async downloadReport() {
    const options = this._options.getValue();
    const bookings = await nextValueFrom(this.bookings$);
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
};
_LockersReportService.\u0275fac = function LockersReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersReportService)();
};
_LockersReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockersReportService, factory: _LockersReportService.\u0275fac, providedIn: "root" });
var LockersReportService = _LockersReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts
var _LockersReportChartsComponent = class _LockersReportChartsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockersReportService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
    this.day_list = combineLatest([
      this._state.daily_stats$,
      this._state.counts$
    ]).pipe(map(([days, counts]) => {
      const list = [];
      const total_spaces = Object.values(counts).reduce((c, v) => c + (v || 0), 0);
      for (const date in days) {
        list.push({
          date,
          booking_count: unique(days[date].bookings, "asset_id").length,
          host_count: unique(days[date].bookings, "user_email").length,
          booked_count: days[date].bookings.length,
          utilisation: days[date].bookings.reduce((c, v) => c + v.duration, 0) / (total_spaces || 1) / (8 * 60)
        });
      }
      return list.sort((a, b) => a.date.localeCompare(b.date));
    }));
    this.stats = combineLatest([this._state.bookings$]).pipe(map(([bookings]) => {
      const mapping = unique(flatten(bookings.map((_) => _.zones))).filter((id) => this._org.levels.find((_) => _.id === id));
      return [
        mapping,
        mapping.reduce((counts, id) => {
          const list = bookings.filter((_) => _.zones.includes(id));
          counts[id] = list.length || 0;
          return counts;
        }, {})
      ];
    }));
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
    this.timeout("update_charts", async () => {
      const day_list = await nextValueFrom(this.day_list);
      this.updateDailyChart(day_list);
      const [mappings, counts] = await nextValueFrom(this.stats);
      this.updateLevelChart({ zones: mappings }, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }, 50);
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
      zones = (this._settings.get("app.use_region") ? this._org.levelsForRegion() : this._org.levelsForBuilding()).filter((_) => _.tags.includes("lockers")).map((_) => _.id);
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
_LockersReportChartsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersReportChartsComponent_BaseFactory;
  return function LockersReportChartsComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersReportChartsComponent_BaseFactory || (\u0275LockersReportChartsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersReportChartsComponent)))(__ngFactoryType__ || _LockersReportChartsComponent);
  };
})();
_LockersReportChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportChartsComponent, selectors: [["lockers-report-charts"]], inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "h-72", "w-1/2", "flex-1", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "relative", "-left-2", "top-2", "mx-auto", "h-56", "w-full", "max-w-full"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-[24rem]", "max-w-full"]], template: function LockersReportChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function LockersReportChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 1)(7, "div", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=lockers-report-charts.component.css.map */"] });
var LockersReportChartsComponent = _LockersReportChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportChartsComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-72 w-1/2 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave relative -left-2 top-2 mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-72 w-1/2 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-[24rem] max-w-full"
                ></div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;5abc8ee09e0d36f5d60b2d76883f59bf6f99a5316bb94318311e1579b21e749b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print .ct-chart {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=lockers-report-charts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportChartsComponent, { className: "LockersReportChartsComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-charts.component.ts", lineNumber: 70 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component.ts
var _c012 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c110 = (a0) => ({ key: "booking_count", name: a0 });
var _c210 = (a0) => ({ key: "host_count", name: a0 });
var _c310 = (a0) => ({ key: "booked_count", name: a0 });
var _c49 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function LockersReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function LockersReportDailyUsageComponent_ng_template_12_Template(rf, ctx) {
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
var _LockersReportDailyUsageComponent = class _LockersReportDailyUsageComponent {
  constructor() {
    this._state = inject(LockersReportService);
    this.print = input(false);
    this.daily_stats = this._state.daily_stats$.pipe(map((days) => {
      const list = [];
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
    this.download = async () => {
      const data = await nextValueFrom(this.daily_stats);
      downloadFile("report-lockers-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_LockersReportDailyUsageComponent.\u0275fac = function LockersReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersReportDailyUsageComponent)();
};
_LockersReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportDailyUsageComponent, selectors: [["lockers-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 14, vars: 33, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function LockersReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LockersReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, LockersReportDailyUsageComponent_ng_template_12_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_stats)("columns", \u0275\u0275pureFunction4(28, _c49, \u0275\u0275pureFunction2(19, _c012, \u0275\u0275pipeBind1(7, 9, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(22, _c110, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.REPORTS_UNIQUE_HEADER")), \u0275\u0275pureFunction1(24, _c210, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER")), \u0275\u0275pureFunction1(26, _c310, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var LockersReportDailyUsageComponent = _LockersReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-daily-usage", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="daily_stats"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'APP.CONCIERGE.REPORTS_UNIQUE_HEADER' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      SimpleTableComponent,
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportDailyUsageComponent, { className: "LockersReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-daily-usage.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-list.component.ts
var _c013 = (a0) => ({ key: "lockers_name", name: a0 });
var _c111 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c211 = (a0, a1) => ({ key: "duration", name: a0, content: a1 });
var _c311 = (a0) => ({ key: "type", name: a0 });
var _c410 = (a0) => ({ key: "host", name: a0 });
var _c55 = (a0) => ({ key: "checked_in", name: a0 });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function LockersReportListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function LockersReportListComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function LockersReportListComponent_ng_template_14_Template(rf, ctx) {
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
function LockersReportListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.duration > 12 * 60 || row_r4.all_day ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r4.duration, true), " ");
  }
}
var _LockersReportListComponent = class _LockersReportListComponent {
  constructor() {
    this._state = inject(LockersReportService);
    this.print = input(false);
    this.lockers_bookings = this._state.bookings$.pipe(map((bookings) => {
      const list = [];
      for (const booking of bookings) {
        list.push({
          lockers_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
          date: booking.date,
          duration: booking.duration,
          all_day: booking.all_day,
          host: booking.user_name || booking.user_email,
          checked_in: i18n(booking.checked_in ? "COMMON.TRUE" : "COMMON.FALSE"),
          self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.TRUE" : "COMMON.FALSE"),
          type: booking.extension_data?.tags?.[0] || booking.tags?.[0] || ""
        });
      }
      list.sort((a, b) => a.date - b.date);
      return list;
    }));
    this.download = async () => {
      const data = await nextValueFrom(this.lockers_bookings);
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-lockers-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_LockersReportListComponent.\u0275fac = function LockersReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersReportListComponent)();
};
_LockersReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportListComponent, selectors: [["lockers-report-list"]], inputs: { print: [1, "print"] }, decls: 18, vars: 44, consts: [["date_template", ""], ["duration_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function LockersReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, LockersReportListComponent_Conditional_5_Template, 4, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275template(14, LockersReportListComponent_ng_template_14_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(16, LockersReportListComponent_ng_template_16_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(15);
    const duration_template_r6 = \u0275\u0275reference(17);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.lockers_bookings)("columns", \u0275\u0275pureFunction6(37, _c62, \u0275\u0275pureFunction1(23, _c013, \u0275\u0275pipeBind1(7, 9, "RESOURCE.LOCKER")), \u0275\u0275pureFunction2(25, _c111, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r5), \u0275\u0275pureFunction2(28, _c211, \u0275\u0275pipeBind1(9, 13, "FORM.DURATION"), duration_template_r6), \u0275\u0275pureFunction1(31, _c311, \u0275\u0275pipeBind1(10, 15, "COMMON.TYPE")), \u0275\u0275pureFunction1(33, _c410, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.BOOKED_FOR")), \u0275\u0275pureFunction1(35, _c55, \u0275\u0275pipeBind1(12, 19, "COMMON.CHECKED_IN"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(13, 21, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  DurationPipe,
  TranslatePipe,
  SimpleTableComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var LockersReportListComponent = _LockersReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportListComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-list", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_LOCKERS_UTIL_HEADER' | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="lockers_bookings"
                [columns]="[
                    {
                        key: 'lockers_name',
                        name: 'RESOURCE.LOCKER' | translate,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'duration',
                        name: 'FORM.DURATION' | translate,
                        content: duration_template,
                    },
                    {
                        key: 'type',
                        name: 'COMMON.TYPE' | translate,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.BOOKED_FOR' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      DurationPipe,
      TranslatePipe,
      SimpleTableComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportListComponent, { className: "LockersReportListComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-list.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report-overall.component.ts
var _LockersReportOverallComponent = class _LockersReportOverallComponent {
  constructor() {
    this._state = inject(LockersReportService);
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.bookings$.pipe(map((events) => formatDuration({
      minutes: Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length) || 0
    })));
  }
};
_LockersReportOverallComponent.\u0275fac = function LockersReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersReportOverallComponent)();
};
_LockersReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportOverallComponent, selectors: [["lockers-report-overall"]], decls: 22, vars: 18, consts: [[1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function LockersReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h3", 2);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 3);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 1)(16, "h3", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 3);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, ctx.business_days) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, ctx.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, ctx.avg_length) || "0");
  }
}, dependencies: [CommonModule, AsyncPipe, TranslatePipe], encapsulation: 2 });
var LockersReportOverallComponent = _LockersReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportOverallComponent, [{
    type: Component,
    args: [{ selector: "lockers-report-overall", template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportOverallComponent, { className: "LockersReportOverallComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report-overall.component.ts", lineNumber: 38 });
})();

// apps/concierge/src/app/reports/lockers/lockers-report.component.ts
var _c014 = ["lockers-report", ""];
function LockersReportComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "lockers-report-overall")(1, "lockers-report-charts")(2, "lockers-report-daily-usage", 9)(3, "lockers-report-list", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function LockersReportComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function LockersReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LockersReportComponent_Conditional_13_Conditional_0_Template, 4, 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, LockersReportComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function LockersReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _LockersReportComponent = class _LockersReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LockersReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_LockersReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275LockersReportComponent_BaseFactory;
  return function LockersReportComponent_Factory(__ngFactoryType__) {
    return (\u0275LockersReportComponent_BaseFactory || (\u0275LockersReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LockersReportComponent)))(__ngFactoryType__ || _LockersReportComponent);
  };
})();
_LockersReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersReportComponent, selectors: [["", "lockers-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c014, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function LockersReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function LockersReportComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function LockersReportComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function LockersReportComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, LockersReportComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, LockersReportComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_LOCKERS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  LockersReportChartsComponent,
  LockersReportOverallComponent,
  LockersReportDailyUsageComponent,
  LockersReportListComponent,
  AuthenticatedImageDirective,
  ReportsOptionsComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=lockers-report.component.css.map */"] });
var LockersReportComponent = _LockersReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LockersReportComponent, [{
    type: Component,
    args: [{ selector: "[lockers-report]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_LOCKERS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <lockers-report-overall></lockers-report-overall>
                    <lockers-report-charts></lockers-report-charts>
                    <lockers-report-daily-usage
                        [print]="printing"
                    ></lockers-report-daily-usage>
                    <lockers-report-list
                        [print]="printing"
                    ></lockers-report-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      LockersReportChartsComponent,
      LockersReportOverallComponent,
      LockersReportDailyUsageComponent,
      LockersReportListComponent,
      AuthenticatedImageDirective,
      ReportsOptionsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/lockers/lockers-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=lockers-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersReportComponent, { className: "LockersReportComponent", filePath: "apps/concierge/src/app/reports/lockers/lockers-report.component.ts", lineNumber: 99 });
})();

// apps/concierge/src/app/reports/parking/parking-report.service.ts
var _ParkingReportService = class _ParkingReportService {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._report = inject(ReportsStateService);
    this._options = new BehaviorSubject({});
    this.loading$ = this._report.loading;
    this.options$ = this._options.asObservable();
    this.bookings$ = this._report.bookings.pipe(map((_) => _));
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
      return Promise.all(zones.map((z) => Xu(z, "parking-spaces").pipe(catchError(() => of({ details: [] })), map((m) => [z, m.details.length])).toPromise()));
    }), map((list) => {
      const mapping = {};
      list.forEach(([id, count]) => mapping[id] = Math.max(count || 0, 1));
      return mapping;
    }), shareReplay(1));
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
    this._report.setOptions(options);
  }
  generateReport() {
    this._report.setOptions({ type: "parking" });
    this._report.generateReport();
  }
  async downloadReport() {
    const options = this._options.getValue();
    const bookings = await nextValueFrom(this.bookings$);
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start, "yyyy-MM-dd") : `${format(options.start, "yyyy-MM-dd")}-${format(options.end, "yyyy-MM-dd")}`;
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
};
_ParkingReportService.\u0275fac = function ParkingReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportService)();
};
_ParkingReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingReportService, factory: _ParkingReportService.\u0275fac, providedIn: "root" });
var ParkingReportService = _ParkingReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/parking/parking-report-charts.component.ts
var _ParkingReportChartsComponent = class _ParkingReportChartsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingReportService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
    this.day_list = combineLatest([
      this._state.daily_stats$,
      this._state.counts$
    ]).pipe(map(([days, counts]) => {
      const list = [];
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
    this.timeout("update_charts", async () => {
      const day_list = await nextValueFrom(this.day_list);
      this.updateDailyChart(day_list);
      const [mappings, counts] = await nextValueFrom(this.stats);
      this.updateLevelChart({ zones: mappings }, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }, 50);
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
_ParkingReportChartsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingReportChartsComponent_BaseFactory;
  return function ParkingReportChartsComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingReportChartsComponent_BaseFactory || (\u0275ParkingReportChartsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingReportChartsComponent)))(__ngFactoryType__ || _ParkingReportChartsComponent);
  };
})();
_ParkingReportChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportChartsComponent, selectors: [["parking-report-charts"]], inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "h-72", "w-1/2", "flex-1", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "relative", "-left-2", "top-2", "mx-auto", "h-56", "w-full", "max-w-full"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-[24rem]", "max-w-full"]], template: function ParkingReportChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function ParkingReportChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 1)(7, "div", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 20rem !important;\n}\n/*# sourceMappingURL=parking-report-charts.component.css.map */"] });
var ParkingReportChartsComponent = _ParkingReportChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportChartsComponent, [{
    type: Component,
    args: [{ selector: "parking-report-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-72 w-1/2 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave relative -left-2 top-2 mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-72 w-1/2 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-[24rem] max-w-full"
                ></div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;ac63e55dad7d0a2c941e4ae7736b361d69b7ce3e3f6f48e7ce092e1347b3dc1f;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/parking/parking-report-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print .ct-chart {\n  width: 20rem !important;\n}\n/*# sourceMappingURL=parking-report-charts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportChartsComponent, { className: "ParkingReportChartsComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-charts.component.ts", lineNumber: 69 });
})();

// apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts
var _c015 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c112 = (a0) => ({ key: "booking_count", name: a0 });
var _c212 = (a0) => ({ key: "host_count", name: a0 });
var _c312 = (a0) => ({ key: "booked_count", name: a0 });
var _c411 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ParkingReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ParkingReportDailyUsageComponent_ng_template_12_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(ParkingReportService);
    this.print = input(false);
    this.daily_stats = this._state.daily_stats$.pipe(map((days) => {
      const list = [];
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
    this.download = async () => {
      const data = await nextValueFrom(this.daily_stats);
      downloadFile("report-parking-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_ParkingReportDailyUsageComponent.\u0275fac = function ParkingReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportDailyUsageComponent)();
};
_ParkingReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportDailyUsageComponent, selectors: [["parking-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 14, vars: 33, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ParkingReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, ParkingReportDailyUsageComponent_ng_template_12_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_stats)("columns", \u0275\u0275pureFunction4(28, _c411, \u0275\u0275pureFunction2(19, _c015, \u0275\u0275pipeBind1(7, 9, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(22, _c112, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.REPORTS_UNIQUE_HEADER")), \u0275\u0275pureFunction1(24, _c212, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER")), \u0275\u0275pureFunction1(26, _c312, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  TranslatePipe,
  SimpleTableComponent,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingReportDailyUsageComponent = _ParkingReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "parking-report-daily-usage", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="daily_stats"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'APP.CONCIERGE.REPORTS_UNIQUE_HEADER' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_HOST_COUNT_HEADER'
                            | translate,
                    },
                    {
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      SimpleTableComponent,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportDailyUsageComponent, { className: "ParkingReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-daily-usage.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/reports/parking/parking-report-list.component.ts
var _c016 = (a0) => ({ key: "parking_name", name: a0 });
var _c113 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c213 = (a0, a1) => ({ key: "duration", name: a0, content: a1 });
var _c313 = (a0) => ({ key: "host", name: a0 });
var _c412 = (a0) => ({ key: "checked_in", name: a0 });
var _c56 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingReportListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingReportListComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ParkingReportListComponent_ng_template_13_Template(rf, ctx) {
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
function ParkingReportListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "duration");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.duration > 12 * 60 || row_r4.all_day ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r4.duration, true), " ");
  }
}
var _ParkingReportListComponent = class _ParkingReportListComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this.print = input(false);
    this.parking_bookings = this._state.bookings$.pipe(map((bookings) => {
      const list = [];
      for (const booking of bookings) {
        list.push({
          parking_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
          date: booking.date,
          duration: booking.duration,
          all_day: booking.all_day,
          host: booking.user_name || booking.user_email,
          checked_in: i18n(booking.checked_in ? "COMMON.TRUE" : "COMMON.FALSE"),
          self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.TRUE" : "COMMON.FALSE")
        });
      }
      list.sort((a, b) => a.date - b.date);
      return list;
    }));
    this.download = async () => {
      const data = await nextValueFrom(this.parking_bookings);
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-parking-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_ParkingReportListComponent.\u0275fac = function ParkingReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportListComponent)();
};
_ParkingReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportListComponent, selectors: [["parking-report-list"]], inputs: { print: [1, "print"] }, decls: 17, vars: 39, consts: [["date_template", ""], ["duration_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ParkingReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3", 4);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingReportListComponent_Conditional_5_Template, 4, 3, "button", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, ParkingReportListComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ParkingReportListComponent_ng_template_15_Template, 4, 6, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(14);
    const duration_template_r6 = \u0275\u0275reference(16);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_PARKING_UTIL_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.parking_bookings)("columns", \u0275\u0275pureFunction5(33, _c56, \u0275\u0275pureFunction1(21, _c016, \u0275\u0275pipeBind1(7, 9, "RESOURCE.PARKING_SPACE")), \u0275\u0275pureFunction2(23, _c113, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r5), \u0275\u0275pureFunction2(26, _c213, \u0275\u0275pipeBind1(9, 13, "FORM.DURATION"), duration_template_r6), \u0275\u0275pureFunction1(29, _c313, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.PARKING_RESERVED_FOR")), \u0275\u0275pureFunction1(31, _c412, \u0275\u0275pipeBind1(11, 17, "COMMON.CHECKED_IN"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  SimpleTableComponent,
  DurationPipe,
  TranslatePipe,
  IconComponent
], encapsulation: 2 });
var ParkingReportListComponent = _ParkingReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportListComponent, [{
    type: Component,
    args: [{ selector: "parking-report-list", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_PARKING_UTIL_HEADER' | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="parking_bookings"
                [columns]="[
                    {
                        key: 'parking_name',
                        name: 'RESOURCE.PARKING_SPACE' | translate,
                    },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'duration',
                        name: 'FORM.DURATION' | translate,
                        content: duration_template,
                    },
                    {
                        key: 'host',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                    },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
            <ng-template #duration_template let-row="row">
                <div class="p-4">
                    {{
                        row.duration > 12 * 60 || row.all_day
                            ? ('COMMON.ALL_DAY' | translate)
                            : (row.duration | duration: true)
                    }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      DurationPipe,
      TranslatePipe,
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportListComponent, { className: "ParkingReportListComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-list.component.ts", lineNumber: 97 });
})();

// apps/concierge/src/app/reports/parking/parking-report-overall.component.ts
var _ParkingReportOverallComponent = class _ParkingReportOverallComponent {
  constructor() {
    this._state = inject(ParkingReportService);
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.bookings$.pipe(map((events) => formatDuration({
      minutes: Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length) || 0
    })));
  }
};
_ParkingReportOverallComponent.\u0275fac = function ParkingReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingReportOverallComponent)();
};
_ParkingReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportOverallComponent, selectors: [["parking-report-overall"]], decls: 22, vars: 18, consts: [[1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function ParkingReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h3", 2);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 3);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 1)(16, "h3", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 3);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, ctx.business_days) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, ctx.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, ctx.avg_length) || "0");
  }
}, dependencies: [CommonModule, AsyncPipe, TranslatePipe], encapsulation: 2 });
var ParkingReportOverallComponent = _ParkingReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportOverallComponent, [{
    type: Component,
    args: [{ selector: "parking-report-overall", template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_RESERVATIONS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportOverallComponent, { className: "ParkingReportOverallComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report-overall.component.ts", lineNumber: 38 });
})();

// apps/concierge/src/app/reports/parking/parking-report.component.ts
var _c017 = ["parking-report", ""];
function ParkingReportComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-report-overall")(1, "parking-report-charts")(2, "parking-report-daily-usage", 9)(3, "parking-report-list", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function ParkingReportComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function ParkingReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingReportComponent_Conditional_13_Conditional_0_Template, 4, 2);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, ParkingReportComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function ParkingReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _ParkingReportComponent = class _ParkingReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_ParkingReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingReportComponent_BaseFactory;
  return function ParkingReportComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingReportComponent_BaseFactory || (\u0275ParkingReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingReportComponent)))(__ngFactoryType__ || _ParkingReportComponent);
  };
})();
_ParkingReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingReportComponent, selectors: [["", "parking-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c017, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function ParkingReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ParkingReportComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function ParkingReportComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function ParkingReportComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, ParkingReportComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, ParkingReportComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_PARKING_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  AuthenticatedImageDirective,
  ParkingReportOverallComponent,
  ParkingReportDailyUsageComponent,
  ParkingReportChartsComponent,
  ParkingReportListComponent,
  ReportsOptionsComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=parking-report.component.css.map */"] });
var ParkingReportComponent = _ParkingReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingReportComponent, [{
    type: Component,
    args: [{ selector: "[parking-report]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_PARKING_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <parking-report-overall></parking-report-overall>
                    <parking-report-charts></parking-report-charts>
                    <parking-report-daily-usage
                        [print]="printing"
                    ></parking-report-daily-usage>
                    <parking-report-list
                        [print]="printing"
                    ></parking-report-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      AuthenticatedImageDirective,
      ParkingReportOverallComponent,
      ParkingReportDailyUsageComponent,
      ParkingReportChartsComponent,
      ParkingReportListComponent,
      ReportsOptionsComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/parking/parking-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=parking-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingReportComponent, { className: "ParkingReportComponent", filePath: "apps/concierge/src/app/reports/parking/parking-report.component.ts", lineNumber: 99 });
})();

// apps/concierge/src/app/reports/reports-menu.component.ts
var _c018 = (a0) => ["/reports", a0];
var _forTrack0 = ($index, $item) => $item.id;
function ReportsMenuComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 10);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c018, report_r1.route));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r1.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", report_r1.name, " ");
  }
}
function ReportsMenuComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "h3", 7);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8)(6, "p", 9);
    \u0275\u0275text(7, "View Report");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "icon", 10);
    \u0275\u0275text(9, "chevron_right");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const report_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction1(3, _c018, report_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(report_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", report_r2.name, " ");
  }
}
var DEFAULT_FEATURES = [
  "desks",
  "spaces",
  "parking",
  "lockers",
  "catering",
  "contact-tracing",
  "assets",
  "visitors"
];
var REPORT_CONFIGS = [
  { id: "desks", route: "desks", icon: "room", name: "Desks" },
  { id: "spaces", route: "bookings", icon: "meeting_room", name: "Rooms" },
  {
    id: "catering",
    route: "catering",
    icon: "room_service",
    name: "Catering"
  },
  {
    id: "contact-tracing",
    route: "contact-tracing",
    icon: "connect_without_contact",
    name: "Contact Tracing"
  },
  {
    id: "parking",
    route: "parking",
    icon: "local_parking",
    name: "Parking"
  },
  { id: "lockers", route: "lockers", icon: "lock", name: "Lockers" },
  { id: "assets", route: "assets", icon: "inventory_2", name: "Assets" },
  { id: "visitors", route: "visitors", icon: "badge", name: "Visitors" }
];
var _ReportsMenuComponent = class _ReportsMenuComponent {
  constructor() {
    this._settings = inject(SettingsService);
  }
  get custom_reports() {
    return this._settings.get("app.custom_reports") || [];
  }
  get features() {
    return this._settings.get("app.reports.features") || DEFAULT_FEATURES;
  }
  get available_reports() {
    return REPORT_CONFIGS.filter((report) => this.features.includes(report.id));
  }
};
_ReportsMenuComponent.\u0275fac = function ReportsMenuComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsMenuComponent)();
};
_ReportsMenuComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsMenuComponent, selectors: [["reports-menu"], ["", "reports-menu", ""]], decls: 13, vars: 6, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-auto", "bg-base-200"], [1, "p-8"], [1, "mb-2", "text-3xl", "font-bold"], [1, "text-base-content/60"], [1, "grid", "w-full", "p-8", "pt-0"], ["matRipple", "", 1, "flex", "h-64", "min-w-64", "flex-col", "items-center", "justify-center", "rounded-xl", "border", "border-base-300", "bg-base-100", "p-4", "shadow", "hover:border-info", 3, "routerLink"], [1, "text-8xl"], [1, "mb-4", "text-xl", "font-bold"], [1, "flex", "items-center"], [1, "underline"], [1, "text-2xl"]], template: function ReportsMenuComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h1", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275repeaterCreate(9, ReportsMenuComponent_For_10_Template, 10, 5, "a", 5, _forTrack0);
    \u0275\u0275repeaterCreate(11, ReportsMenuComponent_For_12_Template, 10, 5, "a", 5, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.MENU_REPORTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.CONCIERGE.REPORTS_DESCRIPTION"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx.available_reports);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.custom_reports);
  }
}, dependencies: [RouterModule, RouterLink, IconComponent, MatRippleModule, MatRipple, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n  justify-content: center;\n  background: inherit;\n}\n.grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  gap: 0.75rem;\n  max-width: 100%;\n}\n/*# sourceMappingURL=reports-menu.component.css.map */"] });
var ReportsMenuComponent = _ReportsMenuComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsMenuComponent, [{
    type: Component,
    args: [{ selector: "reports-menu,[reports-menu]", template: `
        <div class="absolute inset-0 flex flex-col overflow-auto bg-base-200">
            <div class="p-8">
                <h1 class="mb-2 text-3xl font-bold">
                    {{ 'APP.CONCIERGE.MENU_REPORTS' | translate }}
                </h1>
                <p class="text-base-content/60">
                    {{ 'APP.CONCIERGE.REPORTS_DESCRIPTION' | translate }}
                </p>
            </div>
            <div class="grid w-full p-8 pt-0">
                @for (report of available_reports; track report.id) {
                    <a
                        [routerLink]="['/reports', report.route]"
                        matRipple
                        class="flex h-64 min-w-64 flex-col items-center justify-center rounded-xl border border-base-300 bg-base-100 p-4 shadow hover:border-info"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">
                            {{ report.name }}
                        </h3>
                        <div class="flex items-center">
                            <p class="underline">View Report</p>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                }
                @for (report of custom_reports; track report.id) {
                    <a
                        [routerLink]="['/reports', report.id]"
                        matRipple
                        class="flex h-64 min-w-64 flex-col items-center justify-center rounded-xl border border-base-300 bg-base-100 p-4 shadow hover:border-info"
                    >
                        <icon class="text-8xl">{{ report.icon }}</icon>
                        <h3 class="mb-4 text-xl font-bold">
                            {{ report.name }}
                        </h3>
                        <div class="flex items-center">
                            <p class="underline">View Report</p>
                            <icon class="text-2xl">chevron_right</icon>
                        </div>
                    </a>
                }
            </div>
        </div>
    `, imports: [RouterModule, IconComponent, MatRippleModule, TranslatePipe], styles: ["/* angular:styles/component:css;fe3a41582605cf3009de7b680c40c834e0a9798f0c55a7c36913274cd6e0228c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports-menu.component.ts */\n:host {\n  display: flex;\n  flex-direction: row !important;\n  align-items: center;\n  justify-content: center;\n  background: inherit;\n}\n.grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(16rem, 1fr));\n  gap: 0.75rem;\n  max-width: 100%;\n}\n/*# sourceMappingURL=reports-menu.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsMenuComponent, { className: "ReportsMenuComponent", filePath: "apps/concierge/src/app/reports/reports-menu.component.ts", lineNumber: 114 });
})();

// apps/concierge/src/app/reports/reports.component.ts
var _c019 = ["app-new-reports", ""];
function ReportsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
var _ReportsComponent = class _ReportsComponent {
  constructor() {
    this._router = inject(Router);
  }
  get path() {
    const parts = this._router.url.split("/");
    return parts[parts.length - 1];
  }
};
_ReportsComponent.\u0275fac = function ReportsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsComponent)();
};
_ReportsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportsComponent, selectors: [["", "app-new-reports", ""]], attrs: _c019, decls: 6, vars: 1, consts: [[1, "screen-only"], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], ["reports-menu", "", 1, "screen-only", "absolute", "inset-0"]], template: function ReportsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar", 0);
    \u0275\u0275elementStart(3, "main", 2);
    \u0275\u0275element(4, "router-outlet");
    \u0275\u0275conditionalCreate(5, ReportsComponent_Conditional_5_Template, 1, 0, "div", 3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.path === "reports" ? 5 : -1);
  }
}, dependencies: [
  ApplicationTopbarComponent,
  ApplicationSidebarComponent,
  RouterModule,
  RouterOutlet,
  ReportsMenuComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nmain[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%]:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */"] });
var ReportsComponent = _ReportsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsComponent, [{
    type: Component,
    args: [{ selector: "[app-new-reports]", template: `
        <app-topbar class="screen-only" />
        <div class="flex h-px flex-1">
            <app-sidebar class="screen-only"></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <router-outlet></router-outlet>
                @if (path === 'reports') {
                    <div
                        reports-menu
                        class="screen-only absolute inset-0"
                    ></div>
                }
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      RouterModule,
      ReportsMenuComponent
    ], styles: ["/* angular:styles/component:css;44e11ff46627a3b2bfefe3a1edd6f5469f436fdf5d9b15ce617acb04266d4e63;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/reports.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nmain > *:not(router-outlet) {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=reports.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportsComponent, { className: "ReportsComponent", filePath: "apps/concierge/src/app/reports/reports.component.ts", lineNumber: 49 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts
var _ReportSpacesChartsComponent = class _ReportSpacesChartsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.print = input(false);
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
    this.timeout("update_charts", async () => {
      const day_list = await nextValueFrom(this.day_list);
      this.updateDailyChart(day_list);
      const [mappings, counts] = await nextValueFrom(this.stats);
      this.updateLevelChart(mappings, counts);
      this.timeout("update_charts", () => this.updateDailyChart(day_list), 500);
    }, 50);
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
_ReportSpacesChartsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ReportSpacesChartsComponent_BaseFactory;
  return function ReportSpacesChartsComponent_Factory(__ngFactoryType__) {
    return (\u0275ReportSpacesChartsComponent_BaseFactory || (\u0275ReportSpacesChartsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportSpacesChartsComponent)))(__ngFactoryType__ || _ReportSpacesChartsComponent);
  };
})();
_ReportSpacesChartsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesChartsComponent, selectors: [["report-spaces-charts"]], inputs: { print: [1, "print"] }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 11, vars: 8, consts: [[1, "flex", "w-full", "items-center", "space-x-4", "px-4", 3, "resize"], [1, "h-72", "flex-1", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "border-b", "border-base-200", "p-4", "text-xl", "font-bold"], ["id", "daily-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-full", "max-w-full"], ["id", "level-chart", 1, "ct-chart", "ct-octave", "mx-auto", "h-56", "w-[24rem]", "max-w-full"]], template: function ReportSpacesChartsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275listener("resize", function ReportSpacesChartsComponent_Template_div_resize_0_listener() {
      return ctx.updateCharts();
    }, \u0275\u0275resolveWindow);
    \u0275\u0275elementStart(1, "div", 1)(2, "div", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 1)(7, "div", 2);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "div", 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("is-print", ctx.print());
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER"), " ");
  }
}, dependencies: [TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n}\n.is-print[_ngcontent-%COMP%]   .ct-chart[_ngcontent-%COMP%] {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-spaces-charts.component.css.map */"] });
var ReportSpacesChartsComponent = _ReportSpacesChartsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesChartsComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-charts", template: `
        <div
            class="flex w-full items-center space-x-4 px-4"
            [class.is-print]="print()"
            (window:resize)="updateCharts()"
        >
            <div
                class="h-72 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                </div>
                <div
                    id="daily-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-full max-w-full"
                ></div>
            </div>
            <div
                class="h-72 flex-1 rounded-sm border border-base-200 bg-base-100"
            >
                <div class="border-b border-base-200 p-4 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_LEVEL_UTIL_HEADER' | translate }}
                </div>
                <div
                    id="level-chart"
                    class="ct-chart ct-octave mx-auto h-56 w-[24rem] max-w-full"
                ></div>
            </div>
        </div>
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;5abc8ee09e0d36f5d60b2d76883f59bf6f99a5316bb94318311e1579b21e749b;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts */\n:host {\n  display: block;\n}\n.is-print .ct-chart {\n  width: 8cm !important;\n}\n/*# sourceMappingURL=report-spaces-charts.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesChartsComponent, { className: "ReportSpacesChartsComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-charts.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts
var _c020 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c114 = (a0) => ({ key: "approved", name: a0 });
var _c214 = (a0) => ({ key: "count", name: a0 });
var _c314 = (a0, a1) => ({ key: "utilisation", name: a0, content: a1 });
var _c413 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function ReportSpacesOverallListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesOverallListComponent_Conditional_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportSpacesOverallListComponent_ng_template_13_Template(rf, ctx) {
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
function ReportSpacesOverallListComponent_ng_template_15_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(ReportsStateService);
    this.print = input(false);
    this.day_list = this._state.day_list;
    this.download = async () => {
      let data = await nextValueFrom(this.day_list);
      data = data.map((d) => __spreadProps(__spreadValues({}, d), {
        date: format(d.date, "MMMM d, y(EEE)")
      }));
      downloadFile("spaces-usage.csv", jsonToCsv(data));
    };
  }
};
_ReportSpacesOverallListComponent.\u0275fac = function ReportSpacesOverallListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesOverallListComponent)();
};
_ReportSpacesOverallListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallListComponent, selectors: [["report-spaces-overall-list"]], inputs: { print: [1, "print"] }, decls: 17, vars: 34, consts: [["date_template", ""], ["percent_template", ""], [1, "w-full"], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "p-4"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function ReportSpacesOverallListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4)(3, "h3", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ReportSpacesOverallListComponent_Conditional_6_Template, 4, 3, "button", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "simple-table", 7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, ReportSpacesOverallListComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ReportSpacesOverallListComponent_ng_template_15_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_template_r5 = \u0275\u0275reference(14);
    const percent_template_r6 = \u0275\u0275reference(16);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.CONCIERGE.REPORTS_DAILY_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.day_list)("columns", \u0275\u0275pureFunction4(29, _c413, \u0275\u0275pureFunction2(19, _c020, \u0275\u0275pipeBind1(8, 9, "FORM.DATE"), date_template_r5), \u0275\u0275pureFunction1(22, _c114, \u0275\u0275pipeBind1(9, 11, "APP.CONCIERGE.REPORTS_APPROVED")), \u0275\u0275pureFunction1(24, _c214, \u0275\u0275pipeBind1(10, 13, "APP.CONCIERGE.REPORTS_TOTAL_REQUESTS")), \u0275\u0275pureFunction2(26, _c314, \u0275\u0275pipeBind1(11, 15, "APP.CONCIERGE.REPORTS_UTILISATION"), percent_template_r6)))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [CommonModule, DatePipe, TranslatePipe, IconComponent, SimpleTableComponent], encapsulation: 2 });
var ReportSpacesOverallListComponent = _ReportSpacesOverallListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesOverallListComponent, [{
    type: Component,
    args: [{
      selector: "report-spaces-overall-list",
      template: `
        <div class="w-full">
            <div
                class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
            >
                <div class="flex items-center border-b border-base-200 p-4">
                    <h3 class="flex-1 text-xl font-bold">
                        {{ 'APP.CONCIERGE.REPORTS_DAILY_HEADER' | translate }}
                    </h3>
                    @if (!print()) {
                        <button
                            icon
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE'
                                    | translate
                            "
                            (click)="download()"
                        >
                            <icon>download</icon>
                        </button>
                    }
                </div>
                <simple-table
                    class="block w-full text-sm"
                    [data]="day_list"
                    [columns]="[
                        {
                            key: 'date',
                            name: 'FORM.DATE' | translate,
                            content: date_template,
                        },
                        {
                            key: 'approved',
                            name: 'APP.CONCIERGE.REPORTS_APPROVED' | translate,
                        },
                        {
                            key: 'count',
                            name:
                                'APP.CONCIERGE.REPORTS_TOTAL_REQUESTS'
                                | translate,
                        },
                        {
                            key: 'utilisation',
                            name:
                                'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                            content: percent_template,
                        },
                    ]"
                    [sortable]="true"
                    [page_size]="print() ? 0 : 10"
                    [empty_message]="
                        'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                    "
                ></simple-table>
                <ng-template #date_template let-data="data">
                    <div class="p-4">{{ data | date: 'mediumDate' }}</div>
                </ng-template>
                <ng-template #percent_template let-data="data">
                    <div class="p-4">{{ data || '0' }}%</div>
                </ng-template>
            </div>
        </div>
    `,
      imports: [CommonModule, TranslatePipe, IconComponent, SimpleTableComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallListComponent, { className: "ReportSpacesOverallListComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall-list.component.ts", lineNumber: 81 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts
function ReportSpacesOverallComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 3)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 3)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_NO_SHOWS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, ctx_r0.no_shows) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(14, 12, ctx_r0.no_show_percent) || 0, "%");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, ctx_r0.attendance) || 0);
  }
}
var _ReportSpacesOverallComponent = class _ReportSpacesOverallComponent {
  constructor() {
    this._state = inject(ReportsStateService);
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
  return new (__ngFactoryType__ || _ReportSpacesOverallComponent)();
};
_ReportSpacesOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesOverallComponent, selectors: [["report-spaces-overall"]], decls: 24, vars: 21, consts: [[1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center"]], template: function ReportSpacesOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h3");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 1)(16, "h3");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(22, ReportSpacesOverallComponent_Conditional_22_Template, 22, 18, "div", 2);
    \u0275\u0275pipe(23, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 9, ctx.business_days) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 13, ctx.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 15, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 17, ctx.avg_length) || "None");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(23, 19, ctx.has_attendance) ? 22 : -1);
  }
}, dependencies: [CommonModule, AsyncPipe, TranslatePipe], styles: ["\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\np[_ngcontent-%COMP%]:not([simple]) {\n  font-size: 1.75rem;\n}\n/*# sourceMappingURL=report-spaces-overall.component.css.map */"] });
var ReportSpacesOverallComponent = _ReportSpacesOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesOverallComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-overall", template: ` <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3>{{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}</h3>
                <p>{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_BOOKINGS' | translate }}
                </h3>
                <p>{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3>
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p>{{ (avg_length | async) || 'None' }}</p>
            </div>
        </div>
        @if (has_attendance | async) {
            <div
                class="m-4 flex items-center justify-center space-x-2 rounded-sm bg-base-100 p-4"
            >
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>{{ 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate }}</h3>
                    <p>{{ (no_shows | async) || 0 }}</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_NO_SHOWS_PERCENT' | translate
                        }}
                    </h3>
                    <p>{{ (no_show_percent | async) || 0 }}%</p>
                </div>
                <div class="flex flex-1 flex-col items-center justify-center">
                    <h3>
                        {{
                            'APP.CONCIERGE.REPORTS_TOTAL_ATTENDEES' | translate
                        }}
                    </h3>
                    <p>{{ (attendance | async) || 0 }}</p>
                </div>
            </div>
        }`, imports: [CommonModule, TranslatePipe], styles: ["/* angular:styles/component:css;5784da58046fe51e566546051a5c06ba941c3fccb5ef3905c439eccf92edf994;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts */\nh3 {\n  font-weight: 500;\n}\np:not([simple]) {\n  font-size: 1.75rem;\n}\n/*# sourceMappingURL=report-spaces-overall.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesOverallComponent, { className: "ReportSpacesOverallComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-overall.component.ts", lineNumber: 70 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts
var _c021 = (a0) => ({ key: "name", name: a0 });
var _c115 = (a0, a1) => ({ key: "capacity", name: a0, content: a1 });
var _c215 = (a0) => ({ key: "booking_count", name: a0 });
var _c315 = (a0) => ({ key: "utilisation", name: a0 });
var _c414 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c57 = (a0, a1) => ({ key: "no_shows", name: a0, show: a1 });
var _c63 = (a0, a1) => ({ key: "min_attendance", name: a0, show: a1 });
var _c72 = (a0, a1) => ({ key: "max_attendance", name: a0, show: a1 });
var _c8 = (a0) => ({ key: "occupancy", name: a0 });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function ReportSpacesSpaceListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesSpaceListingComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function ReportSpacesSpaceListingComponent_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.CAPACITY_EMPTY"));
  }
}
function ReportSpacesSpaceListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ReportSpacesSpaceListingComponent_ng_template_20_Conditional_2_Template, 3, 3, "span", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3 < 1 ? "" : data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r3 < 1 ? 2 : -1);
  }
}
var _ReportSpacesSpaceListingComponent = class _ReportSpacesSpaceListingComponent {
  constructor() {
    this._reports = inject(ReportsStateService);
    this.print = input(false);
    this._space_pipe = new SpacePipe();
    this.space_list = combineLatest([
      this._reports.stats,
      this._reports.options
    ]).pipe(debounceTime(300), switchMap(async ([stats, { start, end }]) => {
      const list = [];
      let has_attendance = false;
      for (const booking of stats.events) {
        const space_list = unique(booking.resources, "email") || [booking.system];
        const resources = [];
        for (const space of space_list) {
          const details = await this._space_pipe.transform(space.email || space.id);
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
    }));
    this.has_attendance = this.space_list.pipe(map((_) => !!_.find(({ attendance }) => attendance !== "?")));
    this.download = async () => {
      const data = await nextValueFrom(this.space_list);
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.no_shows;
        delete item.min_attendance;
        delete item.max_attendance;
      }
      downloadFile("report-spaces-usage.csv", jsonToCsv(data));
    };
  }
};
_ReportSpacesSpaceListingComponent.\u0275fac = function ReportSpacesSpaceListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesSpaceListingComponent)();
};
_ReportSpacesSpaceListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesSpaceListingComponent, selectors: [["report-spaces-space-listing"]], inputs: { print: [1, "print"] }, decls: 22, vars: 67, consts: [["capacity_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"], [1, "opacity-30"]], template: function ReportSpacesSpaceListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ReportSpacesSpaceListingComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275pipe(15, "async");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275pipe(17, "async");
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275template(20, ReportSpacesSpaceListingComponent_ng_template_20_Template, 3, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const capacity_template_r4 = \u0275\u0275reference(21);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_ROOMS_UTIL_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.space_list)("columns", \u0275\u0275pureFunctionV(57, _c9, [\u0275\u0275pureFunction1(35, _c021, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction2(37, _c115, \u0275\u0275pipeBind1(8, 11, "COMMON.CAPACITY"), capacity_template_r4), \u0275\u0275pureFunction1(40, _c215, \u0275\u0275pipeBind1(9, 13, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(42, _c315, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_UTILISATION")), \u0275\u0275pureFunction1(44, _c414, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction2(46, _c57, \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_NO_SHOWS"), \u0275\u0275pipeBind1(13, 21, ctx.has_attendance)), \u0275\u0275pureFunction2(49, _c63, \u0275\u0275pipeBind1(14, 23, "APP.CONCIERGE.REPORTS_MIN_ATTENDANCE"), \u0275\u0275pipeBind1(15, 25, ctx.has_attendance)), \u0275\u0275pureFunction2(52, _c72, \u0275\u0275pipeBind1(16, 27, "APP.CONCIERGE.REPORTS_MAX_ATTENDANCE"), \u0275\u0275pipeBind1(17, 29, ctx.has_attendance)), \u0275\u0275pureFunction1(55, _c8, \u0275\u0275pipeBind1(18, 31, "APP.CONCIERGE.REPORTS_OCCUPANCY"))]))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(19, 33, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ReportSpacesSpaceListingComponent = _ReportSpacesSpaceListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesSpaceListingComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-space-listing", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_UTIL_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="space_list"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'capacity',
                        name: 'COMMON.CAPACITY' | translate,
                        content: capacity_template,
                    },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'utilisation',
                        name: 'APP.CONCIERGE.REPORTS_UTILISATION' | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                        show: has_attendance | async,
                    },
                    {
                        key: 'min_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MIN_ATTENDANCE' | translate,
                        show: has_attendance | async,
                    },
                    {
                        key: 'max_attendance',
                        name:
                            'APP.CONCIERGE.REPORTS_MAX_ATTENDANCE' | translate,
                        show: has_attendance | async,
                    },
                    {
                        key: 'occupancy',
                        name: 'APP.CONCIERGE.REPORTS_OCCUPANCY' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #capacity_template let-data="data">
                <div class="p-4">
                    {{ data < 1 ? '' : data }}
                    @if (data < 1) {
                        <span class="opacity-30">{{
                            'COMMON.CAPACITY_EMPTY' | translate
                        }}</span>
                    }
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesSpaceListingComponent, { className: "ReportSpacesSpaceListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-space-listing.component.ts", lineNumber: 120 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts
var _c022 = (a0) => ({ key: "name", name: a0 });
var _c116 = (a0) => ({ key: "booking_count", name: a0 });
var _c216 = (a0) => ({ key: "avg_attendees", name: a0 });
var _c316 = (a0) => ({ key: "total_time", name: a0 });
var _c415 = (a0) => ({ key: "no_shows", name: a0 });
var _c58 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ReportSpacesUserListingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 5);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ReportSpacesUserListingComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
var _ReportSpacesUserListingComponent = class _ReportSpacesUserListingComponent {
  constructor() {
    this._reports = inject(ReportsStateService);
    this.print = input(false);
    this.user_list = combineLatest([this._reports.stats]).pipe(debounceTime(300), map(([stats]) => {
      const list = [];
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
    this.download = async () => {
      const data = await nextValueFrom(this.user_list);
      for (const item of data) {
        delete item.attendance;
        delete item.avg_attendance;
        delete item.min_attendance;
        delete item.max_attendance;
        delete item.occupancy;
      }
      downloadFile("report-space-attendee-usage.csv", jsonToCsv(data));
    };
  }
};
_ReportSpacesUserListingComponent.\u0275fac = function ReportSpacesUserListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportSpacesUserListingComponent)();
};
_ReportSpacesUserListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesUserListingComponent, selectors: [["report-spaces-user-listing"]], inputs: { print: [1, "print"] }, decls: 13, vars: 37, consts: [[1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ReportSpacesUserListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ReportSpacesUserListingComponent_Conditional_5_Template, 4, 3, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_ROOMS_HOST_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.user_list)("columns", \u0275\u0275pureFunction5(31, _c58, \u0275\u0275pureFunction1(21, _c022, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction1(23, _c116, \u0275\u0275pipeBind1(8, 11, "RESOURCE.BOOKINGS")), \u0275\u0275pureFunction1(25, _c216, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES")), \u0275\u0275pureFunction1(27, _c316, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_TOTAL_TIME")), \u0275\u0275pureFunction1(29, _c415, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_NO_SHOWS"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatRippleModule,
  MatRipple,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ReportSpacesUserListingComponent = _ReportSpacesUserListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesUserListingComponent, [{
    type: Component,
    args: [{ selector: "report-spaces-user-listing", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_ROOMS_HOST_HEADER' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="user_list"
                [columns]="[
                    { key: 'name', name: 'FORM.NAME' | translate },
                    {
                        key: 'booking_count',
                        name: 'RESOURCE.BOOKINGS' | translate,
                    },
                    {
                        key: 'avg_attendees',
                        name:
                            'APP.CONCIERGE.REPORTS_AVG_BOOKING_INVITES'
                            | translate,
                    },
                    {
                        key: 'total_time',
                        name: 'APP.CONCIERGE.REPORTS_TOTAL_TIME' | translate,
                    },
                    {
                        key: 'no_shows',
                        name: 'APP.CONCIERGE.REPORTS_NO_SHOWS' | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
        </div>
    `, imports: [
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesUserListingComponent, { className: "ReportSpacesUserListingComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces-user-listing.component.ts", lineNumber: 83 });
})();

// apps/concierge/src/app/reports/spaces/report-spaces.component.ts
var _c023 = ["report-spaces", ""];
function ReportSpacesComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "report-spaces-overall")(1, "report-spaces-charts", 9)(2, "report-spaces-overall-list", 9)(3, "report-spaces-space-listing", 9)(4, "report-spaces-user-listing", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function ReportSpacesComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function ReportSpacesComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ReportSpacesComponent_Conditional_13_Conditional_0_Template, 5, 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, ReportSpacesComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function ReportSpacesComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _ReportSpacesComponent = class _ReportSpacesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ReportsStateService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.stats.pipe(map((i) => i.count || 0));
    this.loading = this._state.loading;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_ReportSpacesComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ReportSpacesComponent_BaseFactory;
  return function ReportSpacesComponent_Factory(__ngFactoryType__) {
    return (\u0275ReportSpacesComponent_BaseFactory || (\u0275ReportSpacesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ReportSpacesComponent)))(__ngFactoryType__ || _ReportSpacesComponent);
  };
})();
_ReportSpacesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ReportSpacesComponent, selectors: [["", "report-spaces", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c023, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function ReportSpacesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function ReportSpacesComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function ReportSpacesComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function ReportSpacesComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, ReportSpacesComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, ReportSpacesComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_ROOMS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  TranslatePipe,
  ReportsOptionsComponent,
  AuthenticatedImageDirective,
  ReportSpacesChartsComponent,
  ReportSpacesOverallComponent,
  ReportSpacesOverallListComponent,
  ReportSpacesSpaceListingComponent,
  ReportSpacesUserListingComponent
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */"] });
var ReportSpacesComponent = _ReportSpacesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportSpacesComponent, [{
    type: Component,
    args: [{ selector: "[report-spaces]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{ 'APP.CONCIERGE.REPORTS_ROOMS_HEADER' | translate }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <report-spaces-overall></report-spaces-overall>
                    <report-spaces-charts
                        [print]="printing"
                    ></report-spaces-charts>
                    <report-spaces-overall-list
                        [print]="printing"
                    ></report-spaces-overall-list>
                    <report-spaces-space-listing
                        [print]="printing"
                    ></report-spaces-space-listing>
                    <report-spaces-user-listing
                        [print]="printing"
                    ></report-spaces-user-listing>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressSpinnerModule,
      TranslatePipe,
      ReportsOptionsComponent,
      AuthenticatedImageDirective,
      ReportSpacesChartsComponent,
      ReportSpacesOverallComponent,
      ReportSpacesOverallListComponent,
      ReportSpacesSpaceListingComponent,
      ReportSpacesUserListingComponent
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/spaces/report-spaces.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=report-spaces.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ReportSpacesComponent, { className: "ReportSpacesComponent", filePath: "apps/concierge/src/app/reports/spaces/report-spaces.component.ts", lineNumber: 106 });
})();

// apps/concierge/src/app/reports/visitors/visitors-report.service.ts
var _VisitorsReportService = class _VisitorsReportService {
  constructor() {
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
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
        notifyError(i18n("APP.CONCIERGE.REPORTS_LOAD_ERROR"));
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
  async downloadReport() {
    const options = this._options.getValue();
    const bookings = await nextValueFrom(this.bookings$);
    if (!bookings?.length)
      return;
    const is_same = isSameDay(options.start, options.end);
    const date = is_same ? format(options.start || startOfDay(Date.now()), "yyyy-MM-dd") : `${format(options.start || startOfDay(Date.now()), "yyyy-MM-dd")}-${format(options.end || endOfDay(Date.now()), "yyyy-MM-dd")}`;
    console.log("Bookings:", bookings);
    downloadFile(`report+assets+${date}.tsv`, jsonToCsv(bookings.map((booking) => {
      const b = booking.toJSON();
      const fmt_str = "MMM d, y, h:mm a";
      b.start = formatDate(b.booking_start * 1e3, fmt_str, "en");
      b.end = formatDate(b.booking_end * 1e3, fmt_str, "en");
      for (const key of REMOVE_KEYS)
        delete b[key];
      return b;
    }), "	"));
  }
};
_VisitorsReportService.\u0275fac = function VisitorsReportService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsReportService)();
};
_VisitorsReportService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsReportService, factory: _VisitorsReportService.\u0275fac, providedIn: "root" });
var VisitorsReportService = _VisitorsReportService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsReportService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts
var _c024 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c117 = (a0) => ({ key: "booking_count", name: a0 });
var _c217 = (a0) => ({ key: "host_count", name: a0 });
var _c317 = (a0) => ({ key: "booked_count", name: a0 });
var _c416 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function VisitorReportDailyUsageComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function VisitorReportDailyUsageComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function VisitorReportDailyUsageComponent_ng_template_12_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(VisitorsReportService);
    this.print = input(false);
    this.daily_stats = this._state.daily_stats$.pipe(map((days) => {
      const list = [];
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
    this.download = async () => {
      const data = await nextValueFrom(this.daily_stats);
      downloadFile("report-visitors-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_VisitorReportDailyUsageComponent.\u0275fac = function VisitorReportDailyUsageComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportDailyUsageComponent)();
};
_VisitorReportDailyUsageComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportDailyUsageComponent, selectors: [["visitor-report-daily-usage"]], inputs: { print: [1, "print"] }, decls: 14, vars: 33, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function VisitorReportDailyUsageComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VisitorReportDailyUsageComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, VisitorReportDailyUsageComponent_ng_template_12_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(13);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_VISITORS_DAILY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.daily_stats)("columns", \u0275\u0275pureFunction4(28, _c416, \u0275\u0275pureFunction2(19, _c024, \u0275\u0275pipeBind1(7, 9, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(22, _c117, \u0275\u0275pipeBind1(8, 11, "APP.CONCIERGE.REPORTS_VISITORS_UNIQUE")), \u0275\u0275pureFunction1(24, _c217, \u0275\u0275pipeBind1(9, 13, "APP.CONCIERGE.REPORTS_VISITORS_HOSTS")), \u0275\u0275pureFunction1(26, _c317, \u0275\u0275pipeBind1(10, 15, "APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  DatePipe,
  SimpleTableComponent,
  TranslatePipe,
  IconComponent,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple
], encapsulation: 2 });
var VisitorReportDailyUsageComponent = _VisitorReportDailyUsageComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportDailyUsageComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-daily-usage", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{ 'APP.CONCIERGE.REPORTS_VISITORS_DAILY' | translate }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="daily_stats"
                [columns]="[
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    {
                        key: 'booking_count',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_UNIQUE' | translate,
                    },
                    {
                        key: 'host_count',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_HOSTS' | translate,
                    },
                    {
                        key: 'booked_count',
                        name:
                            'APP.CONCIERGE.REPORTS_BOOKING_COUNT_HEADER'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      CommonModule,
      SimpleTableComponent,
      TranslatePipe,
      IconComponent,
      MatTooltipModule,
      MatRippleModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportDailyUsageComponent, { className: "VisitorReportDailyUsageComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-daily-usage.component.ts", lineNumber: 91 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts
var _c025 = (a0) => ({ key: "visitor_name", name: a0 });
var _c118 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c218 = (a0) => ({ key: "host", name: a0 });
var _c318 = (a0) => ({ key: "checked_in", name: a0 });
var _c417 = (a0) => ({ key: "self_registered", name: a0 });
var _c59 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function VisitorReportListComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function VisitorReportListComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.download());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE"));
  }
}
function VisitorReportListComponent_ng_template_13_Template(rf, ctx) {
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
  constructor() {
    this._state = inject(VisitorsReportService);
    this.print = input(false);
    this.visitor_bookings = this._state.bookings$.pipe(map((bookings) => {
      const list = [];
      for (const booking of bookings) {
        list.push({
          visitor_name: booking.asset_name || booking.extension_data?.asset_name || booking.description || booking.asset_id,
          date: booking.date,
          host: booking.user_name || booking.user_email,
          checked_in: i18n(booking.checked_in ? "COMMON.TRUE" : "COMMON.FALSE"),
          self_registered: i18n(booking.extension_data?.self_registered ? "COMMON.TRUE" : "COMMON.FALSE")
        });
      }
      return list;
    }));
    this.download = async () => {
      const data = await nextValueFrom(this.visitor_bookings);
      for (const bkn of data) {
        bkn.date = format(bkn.date, "yyyy-MM-dd HH:mm");
      }
      downloadFile("report-visitor-daily-usage.csv", jsonToCsv(data));
    };
  }
};
_VisitorReportListComponent.\u0275fac = function VisitorReportListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportListComponent)();
};
_VisitorReportListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportListComponent, selectors: [["visitor-report-list"]], inputs: { print: [1, "print"] }, decls: 15, vars: 38, consts: [["date_template", ""], [1, "m-4", "overflow-hidden", "rounded-sm", "border", "border-base-200", "bg-base-100"], [1, "flex", "items-center", "border-b", "border-base-200", "px-4", "py-2"], [1, "flex-1", "text-xl", "font-bold"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "block", "w-full", "text-sm", 3, "data", "columns", "sortable", "page_size", "empty_message"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], [1, "p-4"]], template: function VisitorReportListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h3", 3);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, VisitorReportListComponent_Conditional_5_Template, 4, 3, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275element(6, "simple-table", 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, VisitorReportListComponent_ng_template_13_Template, 3, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_template_r4 = \u0275\u0275reference(14);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx.print() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx.visitor_bookings)("columns", \u0275\u0275pureFunction5(32, _c59, \u0275\u0275pureFunction1(21, _c025, \u0275\u0275pipeBind1(7, 9, "FORM.NAME")), \u0275\u0275pureFunction2(23, _c118, \u0275\u0275pipeBind1(8, 11, "FORM.DATE"), date_template_r4), \u0275\u0275pureFunction1(26, _c218, \u0275\u0275pipeBind1(9, 13, "FORM.HOST")), \u0275\u0275pureFunction1(28, _c318, \u0275\u0275pipeBind1(10, 15, "COMMON.CHECKED_IN")), \u0275\u0275pureFunction1(30, _c417, \u0275\u0275pipeBind1(11, 17, "APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED"))))("sortable", true)("page_size", ctx.print() ? 0 : 10)("empty_message", \u0275\u0275pipeBind1(12, 19, "APP.CONCIERGE.REPORTS_DAILY_EMPTY"));
  }
}, dependencies: [
  SimpleTableComponent,
  CommonModule,
  DatePipe,
  TranslatePipe,
  IconComponent,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var VisitorReportListComponent = _VisitorReportListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportListComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-list", template: `
        <div
            class="m-4 overflow-hidden rounded-sm border border-base-200 bg-base-100"
        >
            <div class="flex items-center border-b border-base-200 px-4 py-2">
                <h3 class="flex-1 text-xl font-bold">
                    {{
                        'APP.CONCIERGE.REPORTS_VISITORS_LIST_HEADER' | translate
                    }}
                </h3>
                @if (!print()) {
                    <button
                        icon
                        matRipple
                        [matTooltip]="
                            'APP.CONCIERGE.REPORTS_DOWNLOAD_TABLE' | translate
                        "
                        (click)="download()"
                    >
                        <icon>download</icon>
                    </button>
                }
            </div>
            <simple-table
                class="block w-full text-sm"
                [data]="visitor_bookings"
                [columns]="[
                    { key: 'visitor_name', name: 'FORM.NAME' | translate },
                    {
                        key: 'date',
                        name: 'FORM.DATE' | translate,
                        content: date_template,
                    },
                    { key: 'host', name: 'FORM.HOST' | translate },
                    {
                        key: 'checked_in',
                        name: 'COMMON.CHECKED_IN' | translate,
                    },
                    {
                        key: 'self_registered',
                        name:
                            'APP.CONCIERGE.REPORTS_VISITORS_SELF_REGISTERED'
                            | translate,
                    },
                ]"
                [sortable]="true"
                [page_size]="print() ? 0 : 10"
                [empty_message]="
                    'APP.CONCIERGE.REPORTS_DAILY_EMPTY' | translate
                "
            ></simple-table>
            <ng-template #date_template let-row="row">
                <div class="p-4">
                    {{ row.date | date: 'mediumDate' }}
                </div>
            </ng-template>
        </div>
    `, imports: [
      SimpleTableComponent,
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportListComponent, { className: "VisitorReportListComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-list.component.ts", lineNumber: 83 });
})();

// apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts
var _VisitorReportOverallComponent = class _VisitorReportOverallComponent {
  constructor() {
    this._state = inject(VisitorsReportService);
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.business_days = this._state.options$.pipe(map(({ start, end }) => differenceInBusinessDays(endOfDay(end || Date.now()).valueOf() + 1, startOfDay(start || Date.now())) || 1));
    this.avg_length = this._state.bookings$.pipe(map((events) => formatDuration({
      minutes: Math.floor(events.reduce((c, i) => c + i.duration, 0) / events.length) || 0
    })));
  }
};
_VisitorReportOverallComponent.\u0275fac = function VisitorReportOverallComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorReportOverallComponent)();
};
_VisitorReportOverallComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorReportOverallComponent, selectors: [["visitor-report-overall"]], decls: 22, vars: 18, consts: [[1, "m-4", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border", "border-base-200", "bg-base-100", "p-4"], [1, "flex", "flex-1", "flex-col", "items-center"], [1, "text-sm"], [1, "text-2xl"]], template: function VisitorReportOverallComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 1)(9, "h3", 2);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "p", 3);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 1)(16, "h3", 2);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "p", 3);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 6, "APP.CONCIERGE.REPORTS_BUSINESS_DAYS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 8, ctx.business_days) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 10, "APP.CONCIERGE.REPORTS_TOTAL_VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 12, ctx.total_count) || 0);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 14, "APP.CONCIERGE.REPORTS_AVERAGE_LENGTH"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(21, 16, ctx.avg_length) || "0");
  }
}, dependencies: [CommonModule, AsyncPipe, TranslatePipe], encapsulation: 2 });
var VisitorReportOverallComponent = _VisitorReportOverallComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorReportOverallComponent, [{
    type: Component,
    args: [{ selector: "visitor-report-overall", template: `
        <div
            class="m-4 flex items-center justify-center space-x-2 rounded-sm border border-base-200 bg-base-100 p-4"
        >
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_BUSINESS_DAYS' | translate }}
                </h3>
                <p class="text-2xl">{{ (business_days | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_TOTAL_VISITORS' | translate }}
                </h3>
                <p class="text-2xl">{{ (total_count | async) || 0 }}</p>
            </div>
            <div class="flex flex-1 flex-col items-center">
                <h3 class="text-sm">
                    {{ 'APP.CONCIERGE.REPORTS_AVERAGE_LENGTH' | translate }}
                </h3>
                <p class="text-2xl">{{ (avg_length | async) || '0' }}</p>
            </div>
        </div>
    `, imports: [CommonModule, TranslatePipe] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorReportOverallComponent, { className: "VisitorReportOverallComponent", filePath: "apps/concierge/src/app/reports/visitors/visitor-report-overall.component.ts", lineNumber: 38 });
})();

// apps/concierge/src/app/reports/visitors/visitors-report.component.ts
var _c026 = ["visitors-report", ""];
function VisitorsReportComponent_Conditional_13_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "visitor-report-overall")(1, "visitor-report-daily-usage", 9)(2, "visitor-report-list");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("print", ctx_r0.printing);
  }
}
function VisitorsReportComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "p", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.REPORTS_EMPTY"), " ");
  }
}
function VisitorsReportComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VisitorsReportComponent_Conditional_13_Conditional_0_Template, 3, 1);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275conditionalBranchCreate(2, VisitorsReportComponent_Conditional_13_Conditional_2_Template, 4, 3, "div", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(\u0275\u0275pipeBind1(1, 1, ctx_r0.total_count) ? 0 : 2);
  }
}
function VisitorsReportComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "mat-spinner", 11);
    \u0275\u0275elementStart(2, "p", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.CONCIERGE.REPORTS_LOADING"), " ");
  }
}
var _VisitorsReportComponent = class _VisitorsReportComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VisitorsReportService);
    this._settings = inject(SettingsService);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this.printing = false;
    this.total_count = this._state.bookings$.pipe(map((i) => i.length || 0));
    this.loading = this._state.loading$;
    this.downloadReport = () => this._state.downloadReport();
    this.generateReport = () => this._state.generateReport();
    this.logo = this._org.active_building.pipe(debounceTime(500), map(() => (this._settings.theme === "dark" ? this._settings.get("app.logo_dark") : this._settings.get("app.logo_light")) || {}));
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
      } else
        this._state.setOptions({ zones: [] });
    }));
  }
};
_VisitorsReportComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275VisitorsReportComponent_BaseFactory;
  return function VisitorsReportComponent_Factory(__ngFactoryType__) {
    return (\u0275VisitorsReportComponent_BaseFactory || (\u0275VisitorsReportComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorsReportComponent)))(__ngFactoryType__ || _VisitorsReportComponent);
  };
})();
_VisitorsReportComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsReportComponent, selectors: [["", "visitors-report", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c026, decls: 16, vars: 17, consts: [[3, "printing", "download", "generate", "loading", "has_data"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "print:h-auto", "print:overflow-visible"], [1, "w-full"], [1, "m-4", "flex", "items-center", "rounded-sm", "bg-base-200", "p-4"], ["auth", "", 1, "h-12", 3, "source"], [1, "flex-1"], [1, "px-2", "text-2xl", "font-medium"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [1, "screen-only", "flex", "h-full", "w-full", "flex-col", "items-center", "p-8"], [3, "print"], [1, "opacity-30"], [1, "mb-4", 3, "diameter"]], template: function VisitorsReportComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "reports-options", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("printing", function VisitorsReportComponent_Template_reports_options_printing_0_listener($event) {
      return ctx.printing = $event;
    })("download", function VisitorsReportComponent_Template_reports_options_download_0_listener() {
      return ctx.downloadReport();
    })("generate", function VisitorsReportComponent_Template_reports_options_generate_0_listener() {
      return ctx.generateReport();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 1)(4, "div", 2)(5, "div", 3);
    \u0275\u0275element(6, "img", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "div", 5);
    \u0275\u0275elementStart(10, "h2", 6);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(13, VisitorsReportComponent_Conditional_13_Template, 3, 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalBranchCreate(15, VisitorsReportComponent_Conditional_15_Template, 5, 4, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275property("loading", \u0275\u0275pipeBind1(1, 5, ctx.loading))("has_data", \u0275\u0275pipeBind1(2, 7, ctx.total_count));
    \u0275\u0275advance(6);
    \u0275\u0275property("source", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 9, ctx.logo)) == null ? null : tmp_2_0.src) || \u0275\u0275pipeBind1(8, 11, ctx.logo));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(12, 13, "APP.CONCIERGE.REPORTS_VISITORS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!\u0275\u0275pipeBind1(14, 15, ctx.loading) ? 13 : 15);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  ReportsOptionsComponent,
  AuthenticatedImageDirective,
  MatProgressSpinnerModule,
  MatProgressSpinner,
  VisitorReportOverallComponent,
  VisitorReportDailyUsageComponent,
  VisitorReportListComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=visitors-report.component.css.map */"] });
var VisitorsReportComponent = _VisitorsReportComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorsReportComponent, [{
    type: Component,
    args: [{ selector: "[visitors-report]", template: `
        <reports-options
            (printing)="printing = $event"
            [loading]="loading | async"
            [has_data]="total_count | async"
            (download)="downloadReport()"
            (generate)="generateReport()"
        />
        <div
            class="relative h-1/2 w-full flex-1 overflow-auto print:h-auto print:overflow-visible"
        >
            <div class="w-full">
                <div class="m-4 flex items-center rounded-sm bg-base-200 p-4">
                    <img
                        auth
                        class="h-12"
                        [source]="(logo | async)?.src || (logo | async)"
                    />
                    <div class="flex-1"></div>
                    <h2 class="px-2 text-2xl font-medium">
                        {{
                            'APP.CONCIERGE.REPORTS_VISITORS_HEADER' | translate
                        }}
                    </h2>
                </div>
            </div>
            @if (!(loading | async)) {
                @if (total_count | async) {
                    <visitor-report-overall></visitor-report-overall>
                    <visitor-report-daily-usage
                        [print]="printing"
                    ></visitor-report-daily-usage>
                    <visitor-report-list></visitor-report-list>
                } @else {
                    <div
                        class="screen-only flex h-full w-full flex-col items-center p-8"
                    >
                        <p class="opacity-30">
                            {{ 'APP.CONCIERGE.REPORTS_EMPTY' | translate }}
                        </p>
                    </div>
                }
            } @else {
                <div class="flex h-full w-full flex-col items-center p-8">
                    <mat-spinner [diameter]="32" class="mb-4"></mat-spinner>
                    <p class="opacity-30">
                        {{ 'APP.CONCIERGE.REPORTS_LOADING' | translate }}
                    </p>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      ReportsOptionsComponent,
      AuthenticatedImageDirective,
      MatProgressSpinnerModule,
      VisitorReportOverallComponent,
      VisitorReportDailyUsageComponent,
      VisitorReportListComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;62f1948e80f1d37fbfc7dd0fe5a3ff76993e7e5f074002a0c62e64986fc743cb;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/reports/visitors/visitors-report.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n/*# sourceMappingURL=visitors-report.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsReportComponent, { className: "VisitorsReportComponent", filePath: "apps/concierge/src/app/reports/visitors/visitors-report.component.ts", lineNumber: 95 });
})();

// apps/concierge/src/app/reports/reports.module.ts
var children = [
  { path: "", component: ReportsMenuComponent },
  { path: "bookings", component: ReportSpacesComponent },
  { path: "desks", component: ReportDesksComponent },
  { path: "parking", component: ParkingReportComponent },
  { path: "lockers", component: LockersReportComponent },
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
var ROUTES = [{ path: "", component: ReportsComponent, children }];
var _ReportsModule = class _ReportsModule {
};
_ReportsModule.\u0275fac = function ReportsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ReportsModule)();
};
_ReportsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ReportsModule });
_ReportsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ReportsComponent,
  ReportSpacesComponent,
  ReportDesksComponent,
  ParkingReportComponent,
  LockersReportComponent,
  CateringReportComponent,
  AssetsReportComponent,
  VisitorsReportComponent,
  ContactTracingReportComponent,
  ReportsMenuComponent,
  ReportsOptionsComponent,
  RouterModule.forChild(ROUTES)
] });
var ReportsModule = _ReportsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ReportsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ReportsComponent,
        ReportSpacesComponent,
        ReportDesksComponent,
        ParkingReportComponent,
        LockersReportComponent,
        CateringReportComponent,
        AssetsReportComponent,
        VisitorsReportComponent,
        ContactTracingReportComponent,
        CustomReportComponent,
        ReportsMenuComponent,
        ReportsOptionsComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  ReportsModule
};
//# sourceMappingURL=reports.module-JKIVXDY2.js.map
