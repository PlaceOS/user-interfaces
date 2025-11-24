import "./chunk-EFGU63AF.js";
import {
  SharedUsersModule
} from "./chunk-GOLRZLQR.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  DateOptionsComponent,
  DatePipe,
  EventsStateService,
  FormsModule,
  IconComponent,
  MatFormField,
  MatOption,
  MatProgressBar,
  MatRipple,
  MatSelect,
  MatSlideToggle,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  SharedSpacesModule,
  SidebarComponent,
  UIModule,
  ViewEventDetailsComponent,
  __async,
  addDays,
  combineLatest,
  endOfDay,
  first,
  map,
  startOfWeek,
  timePeriodsIntersect,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
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
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/week-view/week-view-topbar.component.ts
function WeekViewTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
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
var _WeekViewTopbarComponent = class _WeekViewTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.levels = this._org.active_levels;
    this.options = this._state.options;
    this.setDate = (d) => this._state.setDate(d);
    this.setWeekends = (d) => this._state.setUIOptions({ show_weekends: d });
    this.newBooking = (d) => this._state.newBooking(d);
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            const level = this._org.levelWithID(zones);
            this.zones = zones;
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
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
    });
  }
};
_WeekViewTopbarComponent.\u0275fac = function WeekViewTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewTopbarComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_WeekViewTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekViewTopbarComponent, selectors: [["week-view-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 7, consts: [["btn", "", "matRipple", "", "new", "", 1, "w-12", "xl:w-auto", 3, "click"], [1, "flex", "items-center"], [1, "mr-2"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "flex-1", "w-0"], [3, "dateChange"], [3, "value"]], template: function WeekViewTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 0);
    \u0275\u0275listener("click", function WeekViewTopbarComponent_Template_button_click_0_listener() {
      return ctx.newBooking();
    });
    \u0275\u0275elementStart(1, "div", 1)(2, "app-icon", 2);
    \u0275\u0275text(3, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 3);
    \u0275\u0275text(5, "New Booking");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-form-field", 4)(7, "mat-select", 5);
    \u0275\u0275twoWayListener("ngModelChange", function WeekViewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function WeekViewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(8, WeekViewTopbarComponent_mat_option_8_Template, 2, 2, "mat-option", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-slide-toggle", 7);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("ngModelChange", function WeekViewTopbarComponent_Template_mat_slide_toggle_ngModelChange_10_listener($event) {
      return ctx.setWeekends($event);
    });
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275text(13, "Show weekends");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "div", 9);
    \u0275\u0275elementStart(15, "date-options", 10);
    \u0275\u0275listener("dateChange", function WeekViewTopbarComponent_Template_date_options_dateChange_15_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 3, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(11, 5, ctx.options)) == null ? null : tmp_2_0.show_weekends);
  }
}, dependencies: [NgForOf, NgControlStatus, NgModel, DateOptionsComponent, MatFormField, MatSelect, MatOption, MatSlideToggle, MatRipple, IconComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  background-color: var(--b1);\n  height: 5em;\n  padding: 0 1em;\n}\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\n/*# sourceMappingURL=week-view-topbar.component.css.map */"] });
var WeekViewTopbarComponent = _WeekViewTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekViewTopbarComponent, { className: "WeekViewTopbarComponent", filePath: "apps/concierge/src/app/week-view/week-view-topbar.component.ts", lineNumber: 67 });
})();

// apps/concierge/src/app/week-view/week-view-event.component.ts
function WeekViewEventComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275listener("click", function WeekViewEventComponent_div_0_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.view(ctx_r1.event));
    });
    \u0275\u0275elementStart(1, "div", 2);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap("m-2 p-2 bg-base-100 shadow rounded border-2 text-black text-left font-normal " + ((ctx_r1.event == null ? null : ctx_r1.event.state) === "done" ? "done" : ctx_r1.event == null ? null : ctx_r1.event.type));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.event == null ? null : ctx_r1.event.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(5, 6, ctx_r1.event == null ? null : ctx_r1.event.date, ctx_r1.time_format));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r1.event == null ? null : ctx_r1.event.attendees.length, " Attendee", (ctx_r1.event == null ? null : ctx_r1.event.attendees.length) === 1 ? "" : "s", " ");
  }
}
var _WeekViewEventComponent = class _WeekViewEventComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.view = (e) => this._state.setEvent(e);
  }
};
_WeekViewEventComponent.\u0275fac = function WeekViewEventComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewEventComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(SettingsService));
};
_WeekViewEventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekViewEventComponent, selectors: [["week-view-event"]], inputs: { event: "event" }, decls: 1, vars: 1, consts: [["content", "", "matRipple", "", 3, "class", "click", 4, "ngIf"], ["content", "", "matRipple", "", 3, "click"], [1, "text-base"], [1, "text-sm"]], template: function WeekViewEventComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, WeekViewEventComponent_div_0_Template, 8, 9, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.event);
  }
}, dependencies: [NgIf, MatRipple, DatePipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  background: none !important;\n  border: none !important;\n}\n[content][_ngcontent-%COMP%] {\n  width: calc(100% - 1rem);\n}\n.done[_ngcontent-%COMP%] {\n  opacity: 0.5;\n}\n.done[_ngcontent-%COMP%]:hover {\n  opacity: 1;\n}\n.cancelled[_ngcontent-%COMP%] {\n  border-color: #626262;\n}\n.external[_ngcontent-%COMP%] {\n  border-color: #d85be0;\n}\n.internal[_ngcontent-%COMP%] {\n  border-color: #00a4c7;\n}\n/*# sourceMappingURL=week-view-event.component.css.map */"] });
var WeekViewEventComponent = _WeekViewEventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekViewEventComponent, { className: "WeekViewEventComponent", filePath: "apps/concierge/src/app/week-view/week-view-event.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/week-view/week-view-day.component.ts
function WeekViewDayComponent_ng_container_5_week_view_event_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "week-view-event", 5);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275property("event", event_r1);
  }
}
function WeekViewDayComponent_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WeekViewDayComponent_ng_container_5_week_view_event_1_Template, 1, 1, "week-view-event", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.events));
  }
}
function WeekViewDayComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1, "No events");
    \u0275\u0275elementEnd();
  }
}
var _WeekViewDayComponent = class _WeekViewDayComponent {
  constructor(_state) {
    this._state = _state;
    this._index = new BehaviorSubject(0);
    this.date = this._state.date.pipe(map((date) => addDays(startOfWeek(date), this.index).valueOf()));
    this.events = combineLatest([
      this._state.filtered,
      this._state.date,
      this._index
    ]).pipe(map(([events, date, index]) => {
      const start = addDays(startOfWeek(date), index).valueOf();
      const end = endOfDay(start).valueOf();
      return events.filter((bkn) => timePeriodsIntersect(start, end, bkn.date, bkn.date + bkn.duration * 60 * 1e3));
    }));
  }
  ngOnChanges(changes) {
    if (changes.index) {
      this._index.next(this.index);
    }
  }
};
_WeekViewDayComponent.\u0275fac = function WeekViewDayComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewDayComponent)(\u0275\u0275directiveInject(EventsStateService));
};
_WeekViewDayComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekViewDayComponent, selectors: [["week-view-day"]], inputs: { index: "index" }, features: [\u0275\u0275NgOnChangesFeature], decls: 9, vars: 10, consts: [["empty_state", ""], [1, "flex", "items-center", "justify-center", "border-b", "border-base-200", "bg-base-300", "w-full", "py-3", "text-white"], [1, "flex-1", "h-1/2", "overflow-auto", "w-full"], [4, "ngIf", "ngIfElse"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"], [1, "text-center", "p-2"]], template: function WeekViewDayComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275template(5, WeekViewDayComponent_ng_container_5_Template, 3, 3, "ng-container", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(7, WeekViewDayComponent_ng_template_7_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_2_0;
    const empty_state_r3 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, \u0275\u0275pipeBind1(2, 3, ctx.date), "EEE, MMM d, y"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(6, 8, ctx.events)) == null ? null : tmp_2_0.length)("ngIfElse", empty_state_r3);
  }
}, dependencies: [NgForOf, NgIf, WeekViewEventComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  height: 100%;\n}\n/*# sourceMappingURL=week-view-day.component.css.map */"] });
var WeekViewDayComponent = _WeekViewDayComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekViewDayComponent, { className: "WeekViewDayComponent", filePath: "apps/concierge/src/app/week-view/week-view-day.component.ts", lineNumber: 39 });
})();

// apps/concierge/src/app/week-view/week-view-timeline.component.ts
function WeekViewTimelineComponent_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "week-view-day", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("index", i_r1);
  }
}
function WeekViewTimelineComponent_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, WeekViewTimelineComponent_ng_container_1_ng_container_1_Template, 2, 1, "ng-container", 4);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const i_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", i_r1 !== 0 && i_r1 !== 6 || \u0275\u0275pipeBind1(2, 1, ctx_r1.options).show_weekends);
  }
}
function WeekViewTimelineComponent_mat_progress_bar_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 6);
  }
}
function WeekViewTimelineComponent_view_event_details_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "view-event-details", 7);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("event", \u0275\u0275pipeBind1(1, 1, ctx_r1.event));
  }
}
var _WeekViewTimelineComponent = class _WeekViewTimelineComponent {
  constructor(_state) {
    this._state = _state;
    this.weekdays = [0, 1, 2, 3, 4, 5, 6];
    this.options = this._state.options;
    this.event = this._state.event;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling("week");
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_WeekViewTimelineComponent.\u0275fac = function WeekViewTimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewTimelineComponent)(\u0275\u0275directiveInject(EventsStateService));
};
_WeekViewTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekViewTimelineComponent, selectors: [["week-view-timeline"]], decls: 6, vars: 7, consts: [[1, "flex", "divide-x", "border-base-200", "h-full"], [4, "ngFor", "ngForOf"], ["mode", "indeterminate", 4, "ngIf"], [3, "event", 4, "ngIf"], [4, "ngIf"], [1, "h-full", "flex-1", 3, "index"], ["mode", "indeterminate"], [3, "event"]], template: function WeekViewTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275template(1, WeekViewTimelineComponent_ng_container_1_Template, 3, 3, "ng-container", 1);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, WeekViewTimelineComponent_mat_progress_bar_2_Template, 1, 0, "mat-progress-bar", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, WeekViewTimelineComponent_view_event_details_4_Template, 2, 3, "view-event-details", 3);
    \u0275\u0275pipe(5, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.weekdays);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(3, 3, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 5, ctx.event));
  }
}, dependencies: [NgForOf, NgIf, ViewEventDetailsComponent, MatProgressBar, WeekViewDayComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  overflow: hidden;\n}\n/*# sourceMappingURL=week-view-timeline.component.css.map */"] });
var WeekViewTimelineComponent = _WeekViewTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekViewTimelineComponent, { className: "WeekViewTimelineComponent", filePath: "apps/concierge/src/app/week-view/week-view-timeline.component.ts", lineNumber: 41 });
})();

// apps/concierge/src/app/week-view/week-view.component.ts
var _c0 = ["app-weekview", ""];
var _WeekViewComponent = class _WeekViewComponent {
};
_WeekViewComponent.\u0275fac = function WeekViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewComponent)();
};
_WeekViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _WeekViewComponent, selectors: [["", "app-weekview", ""]], attrs: _c0, decls: 4, vars: 0, consts: [[1, "relative", "overflow-hidden"]], template: function WeekViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "week-view-topbar")(3, "week-view-timeline");
    \u0275\u0275elementEnd();
  }
}, dependencies: [SidebarComponent, WeekViewTopbarComponent, WeekViewTimelineComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background: var(--b1);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=week-view.component.css.map */"] });
var WeekViewComponent = _WeekViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(WeekViewComponent, { className: "WeekViewComponent", filePath: "apps/concierge/src/app/week-view/week-view.component.ts", lineNumber: 35 });
})();

// apps/concierge/src/app/week-view/week-view.module.ts
var ROUTES = [
  { path: "", component: WeekViewComponent },
  { path: "new", component: WeekViewComponent }
];
var _WeekViewModule = class _WeekViewModule {
};
_WeekViewModule.\u0275fac = function WeekViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _WeekViewModule)();
};
_WeekViewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _WeekViewModule });
_WeekViewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  RouterModule.forChild(ROUTES)
] });
var WeekViewModule = _WeekViewModule;
export {
  WeekViewModule
};
//# sourceMappingURL=week-view.module-I6LD4A2V.js.map
