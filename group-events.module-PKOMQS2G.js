import "./chunk-IO7BDKWI.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-DT2GPSXR.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DateCalendarComponent,
  DatePipe,
  FormsModule,
  GroupEventCardComponent,
  IconComponent,
  Injectable,
  MatCheckbox,
  MatCheckboxModule,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  RouterModule,
  SettingsService,
  TranslatePipe,
  Xc,
  __spreadValues,
  addDays,
  addMonths,
  catchError,
  combineLatest,
  currentUser,
  debounceTime,
  differenceInCalendarDays,
  endOfDay,
  filter,
  format,
  getUnixTime,
  inject,
  map,
  nextValueFrom,
  normalizeDates,
  of,
  queryEvents,
  setClassMetadata,
  shareReplay,
  startOfDay,
  startOfMonth,
  startOfWeek,
  switchMap,
  tap,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
} from "./chunk-5Z4BXNMS.js";

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

// apps/workplace/src/app/events/group-events-state.service.ts
var _GroupEventsStateService = class _GroupEventsStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = new BehaviorSubject({
      date: Date.now()
    });
    this._filters = new BehaviorSubject({
      categories: [],
      tags: []
    });
    this._tag_list = new BehaviorSubject([]);
    this.filters = this._filters.asObservable();
    this.tags = this._tag_list.asObservable();
    this.calendar_system = this._org.active_building.pipe(debounceTime(100), switchMap((bld) => !bld ? of(null) : Xc({ in: this.calendar }).pipe(map((r) => r.data?.[0]), catchError(() => of(null)))), shareReplay(1));
    this.events = combineLatest([
      this._org.active_building,
      this.calendar_system,
      this._options
    ]).pipe(filter(([building, sys]) => !!building && !!sys), switchMap(([building, sys, options]) => queryEvents({
      period_start: getUnixTime(startOfDay(options.date)),
      period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
      system_ids: sys.id
    })), map((list) => list.filter((_) => (_.permission !== "private" || currentUser()?.email === _.creator || currentUser()?.email === _.host || currentUser()?.email === _.mailbox) && _.extension_data.shared_event).sort((a, b) => a.date - b.date)), tap((list) => {
      const old_tags = this._tag_list.getValue();
      const tags = list.map((event) => event.extension_data.tags || []).flat();
      this._tag_list.next(unique([...old_tags, ...tags]));
    }), shareReplay(1));
    this.filtered_events = combineLatest([
      this.events,
      this._filters
    ]).pipe(map(([list, { tags }]) => {
      const tag_list = tags.map((_) => _.toLowerCase());
      return list.filter((event) => {
        const event_tags = (event.extension_data.tags || []).map((_) => _.toLowerCase());
        return tag_list.every((tag) => event_tags.includes(tag)) && event.date_end > Date.now();
      });
    }), shareReplay(1));
    this.options = this._options.asObservable();
  }
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.value), filters));
  }
};
_GroupEventsStateService.\u0275fac = function GroupEventsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsStateService)();
};
_GroupEventsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GroupEventsStateService, factory: _GroupEventsStateService.\u0275fac, providedIn: "root" });
var GroupEventsStateService = _GroupEventsStateService;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/workplace/src/app/events/group-events-filters-list.component.ts
var _c0 = () => [];
function GroupEventsFiltersListComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function GroupEventsFiltersListComponent_For_16_Template_button_click_3_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(tag_r2));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r2);
  }
}
var _GroupEventsFiltersListComponent = class _GroupEventsFiltersListComponent {
  constructor() {
    this._state = inject(GroupEventsStateService);
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.this_period = this._state.options.pipe(map(({ date, end }) => {
      return Date.now() >= startOfDay(date).valueOf() && Date.now() < endOfDay(end || date).valueOf();
    }));
    this.period = this._state.options.pipe(map(({ date, end }) => Math.abs(differenceInDays(date, end || Date.now())) > 7 ? "month" : "week"));
  }
  async removeTag(tag) {
    const tags = (await nextValueFrom(this.filters))?.tags || [];
    this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
  }
};
_GroupEventsFiltersListComponent.\u0275fac = function GroupEventsFiltersListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsFiltersListComponent)();
};
_GroupEventsFiltersListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsFiltersListComponent, selectors: [["group-events-filters-list"]], decls: 18, vars: 24, consts: [[1, "border-base-300", "bg-base-100", "mx-auto", "my-2", "w-252", "max-w-full", "rounded-sm", "border", "p-4"], [1, "mb-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "flex", "flex-wrap"], [1, "border-base-400", "m-1", "flex", "items-center", "rounded-3xl", "border", "px-4", "py-3", "text-sm"], [1, "border-base-400", "m-1", "flex", "items-center", "rounded-3xl", "border", "pr-1", "pl-4"], [1, "mr-2", "flex-1", "text-sm"], ["icon", "", "matRipple", "", 3, "click"]], template: function GroupEventsFiltersListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 2)(9, "div", 3);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275pipe(13, "async");
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(15, GroupEventsFiltersListComponent_For_16_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, \u0275\u0275pipeBind1(4, 3, ctx.this_period) ? \u0275\u0275pipeBind1(5, 5, ctx.period) === "week" ? "COMMON.WEEK_THIS" : "COMMON.MONTH_THIS" : \u0275\u0275pipeBind1(6, 7, ctx.period) === "week" ? "COMMON.WEEK_UPCOMING" : "COMMON.MONTH_UPCOMING"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(12, 13, (tmp_1_0 = \u0275\u0275pipeBind1(11, 11, ctx.options)) == null ? null : tmp_1_0.date, "MMM d, y"), " \u2013 ", \u0275\u0275pipeBind2(14, 18, (tmp_1_0 = \u0275\u0275pipeBind1(13, 16, ctx.options)) == null ? null : tmp_1_0.end, "MMM d, y"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275repeater(((tmp_2_0 = \u0275\u0275pipeBind1(17, 21, ctx.filters)) == null ? null : tmp_2_0.tags) || \u0275\u0275pureFunction0(23, _c0));
  }
}, dependencies: [CommonModule, AsyncPipe, DatePipe, MatRippleModule, MatRipple, TranslatePipe, IconComponent], encapsulation: 2 });
var GroupEventsFiltersListComponent = _GroupEventsFiltersListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsFiltersListComponent, [{
    type: Component,
    args: [{ selector: "group-events-filters-list", template: `
        <div
            class="border-base-300 bg-base-100 mx-auto my-2 w-252 max-w-full rounded-sm border p-4"
        >
            <div class="mb-4 flex items-center justify-between space-x-2">
                <div>
                    {{
                        ((this_period | async)
                            ? (period | async) === 'week'
                                ? 'COMMON.WEEK_THIS'
                                : 'COMMON.MONTH_THIS'
                            : (period | async) === 'week'
                              ? 'COMMON.WEEK_UPCOMING'
                              : 'COMMON.MONTH_UPCOMING'
                        ) | translate
                    }}
                </div>
            </div>
            <div class="flex flex-wrap">
                <div
                    class="border-base-400 m-1 flex items-center rounded-3xl border px-4 py-3 text-sm"
                >
                    {{ (options | async)?.date | date: 'MMM d, y' }}
                    &ndash;
                    {{ (options | async)?.end | date: 'MMM d, y' }}
                </div>
                @for (tag of (filters | async)?.tags || []; track tag) {
                    <div
                        class="border-base-400 m-1 flex items-center rounded-3xl border pr-1 pl-4"
                    >
                        <div class="mr-2 flex-1 text-sm">{{ tag }}</div>
                        <button icon matRipple (click)="removeTag(tag)">
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
    `, imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsFiltersListComponent, { className: "GroupEventsFiltersListComponent", filePath: "apps/workplace/src/app/events/group-events-filters-list.component.ts", lineNumber: 54 });
})();

// apps/workplace/src/app/events/group-events-sidebar.component.ts
function GroupEventsSidebarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.display, " ");
  }
}
function GroupEventsSidebarComponent_Conditional_24_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Conditional_24_For_5_Template_button_click_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleTag(tag_r3));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 16);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const tag_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_11_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.filters)) == null ? null : tmp_11_0.tags == null ? null : tmp_11_0.tags.includes(tag_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function GroupEventsSidebarComponent_Conditional_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GroupEventsSidebarComponent_Conditional_24_For_5_Template, 4, 4, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.TAGS"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(6, 3, ctx_r3.tags));
  }
}
var _GroupEventsSidebarComponent = class _GroupEventsSidebarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._state = inject(GroupEventsStateService);
    this.period = new BehaviorSubject("week");
    this.period_list = [];
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.tags = this._state.tags;
  }
  ngOnInit() {
    this.subscription("period", this.period.subscribe(() => {
      this._generatePeriods();
      if (this.period_list.length) {
        this.setPeriod(this.period_list[0].id);
        this.selected_range = this.period_list[0].id;
      }
    }));
    this._generatePeriods();
    if (this.period_list.length) {
      this.setPeriod(this.period_list[0].id);
      this.selected_range = this.period_list[0].id;
    }
  }
  async toggleTag(tag) {
    const tags = (await nextValueFrom(this.filters))?.tags || [];
    if (tags.includes(tag)) {
      this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    } else {
      this._state.setFilters({ tags: [...tags, tag] });
    }
  }
  setPeriodFromDate(date) {
    for (const period of this.period_list) {
      if (date >= period.start && date <= period.end) {
        this.selected_range = period.id;
        this.setPeriod(period.id);
        return;
      }
    }
  }
  setPeriod(id) {
    const { start, end } = this.period_list.find((_) => _.id === id);
    this._state.setOptions({ date: start, end });
  }
  _generatePeriods() {
    const periods = [];
    const period_type = this.period.value;
    let date = Date.now();
    const end_date = addDays(date, 12 * 30).valueOf();
    const week_offset = this._settings.get("app.week_start") || 0;
    if (period_type === "month") {
      date = startOfMonth(date).valueOf();
    } else if (period_type === "week") {
      date = startOfWeek(date, { weekStartsOn: week_offset }).valueOf();
    }
    while (date < end_date) {
      if (period_type === "week") {
        const end = endOfDay(addDays(date, 6)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${format(Math.max(Date.now(), date), "EEE, do MMM")} \u2013 ${format(end, "do MMM")}`
        });
        date = addDays(date, 7).valueOf();
      } else if (period_type === "month") {
        const end = endOfDay(addDays(addMonths(date, 1), -1)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${format(date, "MMMM yyyy")}`
        });
        date = addMonths(date, 1).valueOf();
      } else
        break;
    }
    this.period_list = periods;
  }
};
_GroupEventsSidebarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GroupEventsSidebarComponent_BaseFactory;
  return function GroupEventsSidebarComponent_Factory(__ngFactoryType__) {
    return (\u0275GroupEventsSidebarComponent_BaseFactory || (\u0275GroupEventsSidebarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupEventsSidebarComponent)))(__ngFactoryType__ || _GroupEventsSidebarComponent);
  };
})();
_GroupEventsSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsSidebarComponent, selectors: [["group-events-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 26, vars: 24, consts: [[1, "bg-base-100", "flex", "flex-col", "sm:h-full", "sm:w-[18rem]"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "flex-col", "items-center", "space-y-2", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "border-base-200", "mx-auto", "hidden", "w-[calc(100%-1rem)]", "sm:block"], [1, "hidden", "flex-1", "flex-col", "overflow-auto", "sm:flex"], [3, "ngModelChange", "ngModel"], [1, "border-base-200", "mx-auto", "w-[calc(100%-1rem)]"], [1, "flex", "flex-1", "flex-col", "overflow-auto"], [1, "p-4", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2", "px-4"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "text-left"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click"], [3, "ngModel"]], template: function GroupEventsSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_2_listener() {
      return ctx.period.next("week");
    });
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 2);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_6_listener() {
      return ctx.period.next("month");
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 3)(11, "mat-form-field", 4)(12, "mat-select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_12_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_12_listener($event) {
      return ctx.setPeriod($event);
    });
    \u0275\u0275repeaterCreate(13, GroupEventsSidebarComponent_For_14_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(15, "hr", 7);
    \u0275\u0275elementStart(16, "div", 8)(17, "date-calendar", 9);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_date_calendar_ngModelChange_17_listener($event) {
      return ctx.setPeriodFromDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(19, "hr", 10);
    \u0275\u0275elementStart(20, "div", 11)(21, "h2", 12);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, GroupEventsSidebarComponent_Conditional_24_Template, 7, 5, "div", 13);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(3, 10, ctx.period) !== "week");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "COMMON.WEEK"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(7, 14, ctx.period) !== "month");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 16, "COMMON.MONTH"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx.period_list);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(18, 18, ctx.options).date);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 20, "COMMON.FILTERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(25, 22, ctx.tags)) == null ? null : tmp_8_0.length) ? 24 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  MatCheckboxModule,
  MatCheckbox,
  MatRippleModule,
  MatRipple,
  DateCalendarComponent,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  TranslatePipe
], encapsulation: 2 });
var GroupEventsSidebarComponent = _GroupEventsSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsSidebarComponent, [{
    type: Component,
    args: [{ selector: `group-events-sidebar`, template: `
        <div class="bg-base-100 flex flex-col sm:h-full sm:w-[18rem]">
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="(period | async) !== 'week'"
                    (click)="period.next('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="(period | async) !== 'month'"
                    (click)="period.next('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
            <div class="flex flex-col items-center space-y-2 px-2 pb-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                        placeholder="Select Period"
                    >
                        @for (range of period_list; track range) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <hr
                class="border-base-200 mx-auto hidden w-[calc(100%-1rem)] sm:block"
            />
            <div class="hidden flex-1 flex-col overflow-auto sm:flex">
                <date-calendar
                    [ngModel]="(options | async).date"
                    (ngModelChange)="setPeriodFromDate($event)"
                ></date-calendar>
                <hr class="border-base-200 mx-auto w-[calc(100%-1rem)]" />
                <div class="flex flex-1 flex-col overflow-auto">
                    <h2 class="p-4 text-lg font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h2>
                    @if ((tags | async)?.length) {
                        <div class="flex flex-col space-y-2 px-4">
                            <h3>{{ 'COMMON.TAGS' | translate }}</h3>
                            @for (tag of tags | async; track tag) {
                                <button
                                    matRipple
                                    class="flex w-full items-center rounded-sm text-left"
                                    (click)="toggleTag(tag)"
                                >
                                    <mat-checkbox
                                        [ngModel]="
                                            (filters | async)?.tags?.includes(
                                                tag
                                            )
                                        "
                                    >
                                        {{ tag }}
                                    </mat-checkbox>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      MatCheckboxModule,
      MatRippleModule,
      DateCalendarComponent,
      MatFormFieldModule,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsSidebarComponent, { className: "GroupEventsSidebarComponent", filePath: "apps/workplace/src/app/events/group-events-sidebar.component.ts", lineNumber: 115 });
})();

// apps/workplace/src/app/events/group-events.component.ts
var _c02 = ["group-events", ""];
function GroupEventsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 2);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("event", \u0275\u0275pipeBind1(1, 2, ctx_r0.featured))("featured", true);
  }
}
function GroupEventsComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 5);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    \u0275\u0275property("event", event_r2);
  }
}
function GroupEventsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, GroupEventsComponent_Conditional_7_For_2_Template, 1, 1, "group-event-card", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind1(3, 0, ctx_r0.events_without_featured));
  }
}
function GroupEventsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.EVENTS_EMPTY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.EVENTS_RETRY"), " ");
  }
}
var _GroupEventsComponent = class _GroupEventsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(GroupEventsStateService);
    this.event_list = this._state.filtered_events;
    this.featured = this.event_list.pipe(map((_) => _.find((_2) => _2.extension_data?.featured || _2.featured)));
    this.events_without_featured = combineLatest([
      this.event_list,
      this.featured
    ]).pipe(map(([list, featured]) => list.filter((_) => _.id !== featured?.id)));
  }
};
_GroupEventsComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275GroupEventsComponent_BaseFactory;
  return function GroupEventsComponent_Factory(__ngFactoryType__) {
    return (\u0275GroupEventsComponent_BaseFactory || (\u0275GroupEventsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupEventsComponent)))(__ngFactoryType__ || _GroupEventsComponent);
  };
})();
_GroupEventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsComponent, selectors: [["", "group-events", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 11, vars: 6, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col", "sm:flex-row"], [1, "h-full", "w-full", "flex-1", "overflow-auto", "p-2", "sm:w-1/2", "sm:p-4"], [1, "mx-auto", "my-2", "w-5xl", "max-w-full", 3, "event", "featured"], [1, "mx-auto", "mt-2", "flex", "w-5xl", "max-w-full", "flex-wrap"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "m-2", 3, "event"], ["src", "assets/icons/no-results.svg", 1, "w-32"], [1, "font-medium"], [1, "opacity-30"]], template: function GroupEventsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "group-events-sidebar");
    \u0275\u0275elementStart(3, "div", 1);
    \u0275\u0275element(4, "group-events-filters-list");
    \u0275\u0275conditionalCreate(5, GroupEventsComponent_Conditional_5_Template, 2, 4, "group-event-card", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275conditionalCreate(7, GroupEventsComponent_Conditional_7_Template, 4, 2, "div", 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275conditionalBranchCreate(9, GroupEventsComponent_Conditional_9_Template, 8, 6, "div", 4);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "footer-menu");
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(\u0275\u0275pipeBind1(6, 2, ctx.featured) ? 5 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(((tmp_1_0 = \u0275\u0275pipeBind1(8, 4, ctx.event_list)) == null ? null : tmp_1_0.length) ? 7 : 9);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  TopbarComponent,
  FooterMenuComponent,
  GroupEventCardComponent,
  GroupEventsFiltersListComponent,
  GroupEventsSidebarComponent,
  TranslatePipe
], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n.top[_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=group-events.component.css.map */"] });
var GroupEventsComponent = _GroupEventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsComponent, [{
    type: Component,
    args: [{ selector: "[group-events]", template: `
        <topbar />
        <main class="bg-base-200 flex h-1/2 flex-1 flex-col sm:flex-row">
            <group-events-sidebar></group-events-sidebar>
            <div class="h-full w-full flex-1 overflow-auto p-2 sm:w-1/2 sm:p-4">
                <group-events-filters-list></group-events-filters-list>
                @if (featured | async) {
                    <group-event-card
                        [event]="featured | async"
                        [featured]="true"
                        class="mx-auto my-2 w-5xl max-w-full"
                    ></group-event-card>
                }
                @if ((event_list | async)?.length) {
                    <div class="mx-auto mt-2 flex w-5xl max-w-full flex-wrap">
                        @for (
                            event of events_without_featured | async;
                            track event
                        ) {
                            <group-event-card
                                [event]="event"
                                class="m-2"
                            ></group-event-card>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-results.svg" class="w-32" />
                        <div class="font-medium">
                            {{ 'APP.WORKPLACE.EVENTS_EMPTY' | translate }}
                        </div>
                        <div class="opacity-30">
                            {{ 'APP.WORKPLACE.EVENTS_RETRY' | translate }}
                        </div>
                    </div>
                }
            </div>
        </main>
        <footer-menu />
    `, imports: [
      CommonModule,
      TopbarComponent,
      FooterMenuComponent,
      GroupEventCardComponent,
      GroupEventsFiltersListComponent,
      GroupEventsSidebarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;3c5c7a9656c05edf563f87210f0959a666a118460bc624ae997afcc143850661;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/events/group-events.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain {\n  min-height: 50%;\n}\n.top {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=group-events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsComponent, { className: "GroupEventsComponent", filePath: "apps/workplace/src/app/events/group-events.component.ts", lineNumber: 90 });
})();

// apps/workplace/src/app/events/group-events.module.ts
var ROUTES = [{ path: "", component: GroupEventsComponent }];
var _GroupEventsModule = class _GroupEventsModule {
};
_GroupEventsModule.\u0275fac = function GroupEventsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsModule)();
};
_GroupEventsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GroupEventsModule });
_GroupEventsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [GroupEventsComponent, RouterModule.forChild(ROUTES)] });
var GroupEventsModule = _GroupEventsModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [GroupEventsComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  GroupEventsModule
};
//# sourceMappingURL=group-events.module-PKOMQS2G.js.map
