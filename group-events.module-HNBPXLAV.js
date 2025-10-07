import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DateCalendarComponent,
  DatePipe,
  FooterMenuComponent,
  FormFieldsModule,
  FormsModule,
  GroupEventCardComponent,
  IconComponent,
  MatCheckbox,
  MatFormField,
  MatOption,
  MatRipple,
  MatSelect,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  RouterModule,
  SettingsService,
  SharedBookingsModule,
  SharedComponentModule,
  TopbarComponent,
  addDays,
  addMonths,
  combineLatest,
  differenceInDays,
  endOfDay,
  filter,
  format,
  getUnixTime,
  map,
  queryEvents,
  shareReplay,
  startOfDay,
  startOfMonth,
  startOfWeek,
  switchMap,
  take,
  tap,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-OTXONO57.js";
import {
  __async,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/events/group-events-state.service.ts
var _GroupEventsStateService = class _GroupEventsStateService {
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  constructor(_org, _settings) {
    this._org = _org;
    this._settings = _settings;
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
    this.events = combineLatest([
      this._org.active_building,
      this._options
    ]).pipe(filter(([building]) => !!building), switchMap(([building, options]) => queryEvents({
      period_start: getUnixTime(startOfDay(options.date)),
      period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
      calendars: this.calendar
    })), map((list) => list.filter((_) => _.extension_data.view_access !== "PRIVATE" && _.extension_data.shared_event).sort((a, b) => a.date - b.date)), tap((list) => {
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
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.value), options));
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.value), filters));
  }
};
_GroupEventsStateService.\u0275fac = function GroupEventsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_GroupEventsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GroupEventsStateService, factory: _GroupEventsStateService.\u0275fac, providedIn: "root" });
var GroupEventsStateService = _GroupEventsStateService;

// apps/workplace/src/app/events/group-events-sidebar.component.ts
function GroupEventsSidebarComponent_mat_option_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14);
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
function GroupEventsSidebarComponent_div_20_button_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_div_20_button_3_Template_button_click_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleTag(tag_r3));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 18);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const tag_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(2, 2, ctx_r3.filters)) == null ? null : tmp_3_0.tags == null ? null : tmp_3_0.tags.includes(tag_r3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function GroupEventsSidebarComponent_div_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "h3");
    \u0275\u0275text(2, "Tags");
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GroupEventsSidebarComponent_div_20_button_3_Template, 4, 4, "button", 16);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 1, ctx_r3.tags));
  }
}
var _GroupEventsSidebarComponent = class _GroupEventsSidebarComponent extends AsyncHandler {
  constructor(_settings, _state) {
    super();
    this._settings = _settings;
    this._state = _state;
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
  toggleTag(tag) {
    return __async(this, null, function* () {
      const tags = (yield this.filters.pipe(take(1)).toPromise())?.tags || [];
      if (tags.includes(tag)) {
        this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
      } else {
        this._state.setFilters({ tags: [...tags, tag] });
      }
    });
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
_GroupEventsSidebarComponent.\u0275fac = function GroupEventsSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsSidebarComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(GroupEventsStateService));
};
_GroupEventsSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsSidebarComponent, selectors: [["group-events-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 16, consts: [[1, "flex", "flex-col", "bg-base-100", "sm:w-[18rem]", "sm:h-full"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", "rounded-3xl", 3, "click"], [1, "flex", "flex-col", "items-center", "space-y-2", "pb-2", "px-2"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["placeholder", "Select Period", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "border-base-200", "w-[calc(100%-1rem)]", "mx-auto", "hidden", "sm:block"], [1, "flex-col", "flex-1", "overflow-auto", "hidden", "sm:flex"], [3, "ngModelChange", "ngModel"], [1, "border-base-200", "w-[calc(100%-1rem)]", "mx-auto"], [1, "flex", "flex-col", "flex-1", "overflow-auto"], [1, "text-lg", "font-medium", "p-4"], ["class", "flex flex-col space-y-2 px-4", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col", "space-y-2", "px-4"], ["matRipple", "", "class", "flex items-center rounded w-full text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "items-center", "rounded", "w-full", "text-left", 3, "click"], [3, "ngModel"]], template: function GroupEventsSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_2_listener() {
      return ctx.period.next("week");
    });
    \u0275\u0275text(4, " Week ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "button", 2);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_5_listener() {
      return ctx.period.next("month");
    });
    \u0275\u0275text(7, " Month ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 3)(9, "mat-form-field", 4)(10, "mat-select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
      return ctx.setPeriod($event);
    });
    \u0275\u0275template(11, GroupEventsSidebarComponent_mat_option_11_Template, 2, 2, "mat-option", 6);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(12, "hr", 7);
    \u0275\u0275elementStart(13, "div", 8)(14, "date-calendar", 9);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_date_calendar_ngModelChange_14_listener($event) {
      return ctx.setPeriodFromDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "hr", 10);
    \u0275\u0275elementStart(17, "div", 11)(18, "h2", 12);
    \u0275\u0275text(19, "Filters");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, GroupEventsSidebarComponent_div_20_Template, 5, 3, "div", 13);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_5_0;
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(3, 8, ctx.period) !== "week");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("inverse", \u0275\u0275pipeBind1(6, 10, ctx.period) !== "month");
    \u0275\u0275advance(5);
    \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.period_list);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(15, 12, ctx.options).date);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", (tmp_5_0 = \u0275\u0275pipeBind1(21, 14, ctx.tags)) == null ? null : tmp_5_0.length);
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatOption, MatFormField, MatSelect, MatRipple, MatCheckbox, DateCalendarComponent, AsyncPipe] });
var GroupEventsSidebarComponent = _GroupEventsSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsSidebarComponent, { className: "GroupEventsSidebarComponent", filePath: "apps/workplace/src/app/events/group-events-sidebar.component.ts", lineNumber: 95 });
})();

// apps/workplace/src/app/events/group-events-filters-list.component.ts
var _c0 = () => [];
function GroupEventsFiltersListComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 6);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function GroupEventsFiltersListComponent_div_13_Template_button_click_3_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(tag_r2));
    });
    \u0275\u0275elementStart(4, "app-icon");
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
  constructor(_state) {
    this._state = _state;
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.this_period = this._state.options.pipe(map(({ date, end }) => {
      return Date.now() >= startOfDay(date).valueOf() && Date.now() < endOfDay(end || date).valueOf();
    }));
    this.period = this._state.options.pipe(map(({ date, end }) => Math.abs(differenceInDays(date, end || Date.now())) > 7 ? "month" : "week"));
  }
  removeTag(tag) {
    return __async(this, null, function* () {
      const tags = (yield this.filters.pipe(take(1)).toPromise())?.tags || [];
      this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    });
  }
};
_GroupEventsFiltersListComponent.\u0275fac = function GroupEventsFiltersListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsFiltersListComponent)(\u0275\u0275directiveInject(GroupEventsStateService));
};
_GroupEventsFiltersListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsFiltersListComponent, selectors: [["group-events-filters-list"]], decls: 15, vars: 22, consts: [[1, "my-2", "w-[63rem]", "max-w-full", "mx-auto", "border", "border-base-300", "p-4", "bg-base-100", "rounded"], [1, "flex", "items-center", "justify-between", "space-x-2", "mb-4"], [1, "flex", "flex-wrap"], [1, "flex", "items-center", "px-4", "py-3", "rounded-3xl", "border", "border-base-400", "m-1", "text-sm"], ["class", "flex items-center pl-4 pr-1 rounded-3xl border border-base-400 m-1", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "pl-4", "pr-1", "rounded-3xl", "border", "border-base-400", "m-1"], [1, "mr-2", "flex-1", "text-sm"], ["icon", "", "matRipple", "", 3, "click"]], template: function GroupEventsFiltersListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 2)(7, "div", 3);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "async");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, GroupEventsFiltersListComponent_div_13_Template, 6, 1, "div", 4);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 5, ctx.this_period) ? "This" : "Upcoming", " ", \u0275\u0275pipeBind1(5, 7, ctx.period) === "week" ? "Week" : "Month", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(10, 11, (tmp_1_0 = \u0275\u0275pipeBind1(9, 9, ctx.options)) == null ? null : tmp_1_0.date, "MMM d, y"), " \u2013 ", \u0275\u0275pipeBind2(12, 16, (tmp_1_0 = \u0275\u0275pipeBind1(11, 14, ctx.options)) == null ? null : tmp_1_0.end, "MMM d, y"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", ((tmp_2_0 = \u0275\u0275pipeBind1(14, 19, ctx.filters)) == null ? null : tmp_2_0.tags) || \u0275\u0275pureFunction0(21, _c0));
  }
}, dependencies: [NgForOf, IconComponent, MatRipple, AsyncPipe, DatePipe] });
var GroupEventsFiltersListComponent = _GroupEventsFiltersListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsFiltersListComponent, { className: "GroupEventsFiltersListComponent", filePath: "apps/workplace/src/app/events/group-events-filters-list.component.ts", lineNumber: 40 });
})();

// apps/workplace/src/app/events/group-events.component.ts
var _c02 = ["group-events", ""];
function GroupEventsComponent_group_event_card_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 5);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("event", \u0275\u0275pipeBind1(1, 2, ctx_r0.featured))("featured", true);
  }
}
function GroupEventsComponent_ng_container_7_group_event_card_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 8);
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    \u0275\u0275property("event", event_r2);
  }
}
function GroupEventsComponent_ng_container_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6);
    \u0275\u0275template(2, GroupEventsComponent_ng_container_7_group_event_card_2_Template, 1, 1, "group-event-card", 7);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(3, 1, ctx_r0.events_without_featured));
  }
}
function GroupEventsComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementStart(2, "div", 11);
    \u0275\u0275text(3, " No events for the selected time period ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 12);
    \u0275\u0275text(5, " Expand you search or try again ");
    \u0275\u0275elementEnd()();
  }
}
var _GroupEventsComponent = class _GroupEventsComponent extends AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.event_list = this._state.filtered_events;
    this.featured = this.event_list.pipe(map((_) => _.find((_2) => _2.extension_data?.featured || _2.featured)));
    this.events_without_featured = combineLatest([
      this.event_list,
      this.featured
    ]).pipe(map(([list, featured]) => list.filter((_) => _.id !== featured?.id)));
  }
};
_GroupEventsComponent.\u0275fac = function GroupEventsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsComponent)(\u0275\u0275directiveInject(GroupEventsStateService));
};
_GroupEventsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsComponent, selectors: [["", "group-events", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c02, decls: 12, vars: 7, consts: [["no_events", ""], [1, "flex", "flex-col", "sm:flex-row", "flex-1", "h-1/2", "bg-base-200"], [1, "w-full", "sm:w-1/2", "flex-1", "h-full", "overflow-auto", "p-2", "sm:p-4"], ["class", "my-2 mx-auto w-[64rem] max-w-full", 3, "event", "featured", 4, "ngIf"], [4, "ngIf", "ngIfElse"], [1, "my-2", "mx-auto", "w-[64rem]", "max-w-full", 3, "event", "featured"], [1, "flex", "flex-wrap", "mt-2", "w-[64rem]", "max-w-full", "mx-auto"], ["class", "m-2", 3, "event", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "event"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "h-full", "space-y-2"], ["src", "assets/icons/no-results.svg", 1, "w-32"], [1, "font-medium"], [1, "opacity-30"]], template: function GroupEventsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "main", 1);
    \u0275\u0275element(2, "group-events-sidebar");
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275element(4, "group-events-filters-list");
    \u0275\u0275template(5, GroupEventsComponent_group_event_card_5_Template, 2, 4, "group-event-card", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, GroupEventsComponent_ng_container_7_Template, 4, 3, "ng-container", 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, GroupEventsComponent_ng_template_9_Template, 6, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "footer-menu");
  }
  if (rf & 2) {
    let tmp_2_0;
    const no_events_r3 = \u0275\u0275reference(10);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(6, 3, ctx.featured));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(8, 5, ctx.event_list)) == null ? null : tmp_2_0.length)("ngIfElse", no_events_r3);
  }
}, dependencies: [NgForOf, NgIf, TopbarComponent, FooterMenuComponent, GroupEventCardComponent, GroupEventsSidebarComponent, GroupEventsFiltersListComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n.top[_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=group-events.component.css.map */"] });
var GroupEventsComponent = _GroupEventsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsComponent, { className: "GroupEventsComponent", filePath: "apps/workplace/src/app/events/group-events.component.ts", lineNumber: 76 });
})();

// apps/workplace/src/app/events/group-events.module.ts
var ROUTES = [{ path: "", component: GroupEventsComponent }];
var _GroupEventsModule = class _GroupEventsModule {
};
_GroupEventsModule.\u0275fac = function GroupEventsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GroupEventsModule)();
};
_GroupEventsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _GroupEventsModule });
_GroupEventsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  SharedComponentModule,
  SharedBookingsModule,
  FormFieldsModule,
  RouterModule.forChild(ROUTES)
] });
var GroupEventsModule = _GroupEventsModule;
export {
  GroupEventsModule
};
//# sourceMappingURL=group-events.module-HNBPXLAV.js.map
