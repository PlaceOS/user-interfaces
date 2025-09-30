import {
  SharedCateringModule
} from "./chunk-ZBOQP3JB.js";
import "./chunk-7G4R745F.js";
import "./chunk-7TLT2YB6.js";
import {
  SharedUsersModule,
  UserPipe
} from "./chunk-IPLJBDCQ.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AssetListFieldComponent,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BehaviorSubject,
  BuildingPipe,
  CateringListFieldComponent,
  CateringOrderStateService,
  CommonModule,
  DateFieldComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  DurationFieldComponent,
  EventDetailsModalComponent,
  EventEmitter,
  EventFormService,
  EventsStateService,
  FormControlName,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
  MatSelectTrigger,
  MatSlideToggle,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  SetupBreakdownModalComponent,
  SharedSpacesModule,
  SidebarComponent,
  Space,
  SpaceListFieldComponent,
  SpacePipe,
  TimeFieldComponent,
  TranslatePipe,
  UIModule,
  UserListFieldComponent,
  UserSearchFieldComponent,
  ViewEventDetailsComponent,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  addHours,
  addMinutes,
  catchError,
  combineLatest,
  debounceTime,
  declineEvent,
  differenceInMinutes,
  filter,
  first,
  format,
  getModule,
  getTimezoneDifferenceInHours,
  getTimezoneOffsetInMinutes,
  getTimezoneOffsetString,
  isSameDay,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryEvents,
  querySystems,
  setHours,
  shareReplay,
  startOfDay,
  startOfMinute,
  startOfWeek,
  startWith,
  switchMap,
  take,
  tap,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵdeclareLet,
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
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-TTHABZPK.js";

// node_modules/date-fns/isSameWeek.mjs
function isSameWeek(dateLeft, dateRight, options) {
  const dateLeftStartOfWeek = startOfWeek(dateLeft, options);
  const dateRightStartOfWeek = startOfWeek(dateRight, options);
  return +dateLeftStartOfWeek === +dateRightStartOfWeek;
}

// apps/concierge/src/app/day-view/dayview-topbar.component.ts
var _c0 = () => ({ class: "material-icons", content: "add" });
function DayviewTopbarComponent_mat_option_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
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
function DayviewTopbarComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12);
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
function DayviewTopbarComponent_mat_slide_toggle_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-slide-toggle", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_mat_slide_toggle_15_Template_mat_slide_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275elementStart(2, "div", 14);
    \u0275\u0275text(3, "Setup / Breakdown");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r3.ui_options)) == null ? null : tmp_1_0.show_overflow);
  }
}
var _DayviewTopbarComponent = class _DayviewTopbarComponent extends AsyncHandler {
  updateUIOptions(options) {
    this._state.setUIOptions(options);
  }
  get allow_setup_breakdown() {
    return this._settings.get("app.events.allow_setup_breakdown");
  }
  constructor(_state, _org, _route, _router, _settings) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._settings = _settings;
    this.zones = [];
    this.types = [
      { id: "internal", name: "Internal" },
      { id: "external", name: "External" },
      { id: "cancelled", name: "Cancelled" }
    ];
    this.type_list = this.types.map((i) => `${i.id}`);
    this.levels = this._org.active_levels;
    this.ui_options = this._state.options;
    this.setDate = (d) => this._state.setDate(d);
    this.newBooking = (d) => this._state.newBooking(d);
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
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
            this.zones = zones;
            const level = this._org.levelWithID(zones);
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
      }));
      this.updateTypes(this.type_list);
    });
  }
};
_DayviewTopbarComponent.\u0275fac = function DayviewTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayviewTopbarComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(SettingsService));
};
_DayviewTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewTopbarComponent, selectors: [["dayview-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 18, vars: 9, consts: [[1, "flex", "items-center", "px-4", "h-20", "bg-base-100", "border-b", "border-base-200"], ["btn", "", "matRipple", "", "new", "", 1, "w-12", "xl:w-auto", "overflow-hidden", 3, "click"], [1, "flex", "items-center"], [1, "mr-2", 3, "icon"], [1, "hidden", "xl:block"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["multiple", "", "placeholder", "No Events", 3, "ngModelChange", "ngModel"], ["class", "m-2", 3, "ngModel", "ngModelChange", 4, "ngIf"], [1, "flex-1", "w-0"], [3, "dateChange"], [3, "value"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"]], template: function DayviewTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
    \u0275\u0275listener("click", function DayviewTopbarComponent_Template_button_click_1_listener() {
      return ctx.newBooking();
    });
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275element(3, "app-icon", 3);
    \u0275\u0275elementStart(4, "div", 4);
    \u0275\u0275text(5, "New Booking");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-form-field", 5)(7, "mat-select", 6);
    \u0275\u0275twoWayListener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_7_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(8, DayviewTopbarComponent_mat_option_8_Template, 2, 2, "mat-option", 7);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "mat-form-field", 5)(11, "mat-select", 8);
    \u0275\u0275twoWayListener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.type_list, $event) || (ctx.type_list = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function DayviewTopbarComponent_Template_mat_select_ngModelChange_11_listener($event) {
      return ctx.updateTypes($event);
    });
    \u0275\u0275elementStart(12, "mat-select-trigger");
    \u0275\u0275text(13, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, DayviewTopbarComponent_mat_option_14_Template, 2, 2, "mat-option", 7);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, DayviewTopbarComponent_mat_slide_toggle_15_Template, 4, 3, "mat-slide-toggle", 9);
    \u0275\u0275element(16, "div", 10);
    \u0275\u0275elementStart(17, "date-options", 11);
    \u0275\u0275listener("dateChange", function DayviewTopbarComponent_Template_date_options_dateChange_17_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(8, _c0));
    \u0275\u0275advance(4);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 6, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", ctx.type_list);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.types);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.allow_setup_breakdown);
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, MatFormField, MatSelect, MatSelectTrigger, MatOption, MatSlideToggle, MatRipple, IconComponent, AsyncPipe], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n  margin-left: 1em;\n}\nmat-slide-toggle[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  width: 5.5em;\n  white-space: initial;\n  line-height: 1.2em;\n}\n/*# sourceMappingURL=dayview-topbar.component.css.map */"] });
var DayviewTopbarComponent = _DayviewTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewTopbarComponent, { className: "DayviewTopbarComponent", filePath: "apps/concierge/src/app/day-view/dayview-topbar.component.ts", lineNumber: 92 });
})();

// apps/concierge/src/app/day-view/dayview-event.component.ts
function DayviewEventComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("overflow-block absolute rounded overflow-hidden w-full " + ctx_r0.type);
    \u0275\u0275styleProp("top", ctx_r0.overflow_top * 100 + "%")("height", ctx_r0.overflow_height * 100 + "%");
  }
}
function DayviewEventComponent_div_2_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "title");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event.title, " ");
  }
}
function DayviewEventComponent_div_2_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.time, " ");
  }
}
function DayviewEventComponent_div_2_div_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "app-icon", 7);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", ctx_r0.event.attendees.length, " Attendee", ctx_r0.event.attendees.length === 1 ? "" : "s", " ");
  }
}
function DayviewEventComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275listener("click", function DayviewEventComponent_div_2_Template_div_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.view(ctx_r0.event));
    });
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, DayviewEventComponent_div_2_div_3_Template, 4, 1, "div", 5)(4, DayviewEventComponent_div_2_div_4_Template, 4, 1, "div", 5)(5, DayviewEventComponent_div_2_div_5_Template, 4, 2, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("absolute rounded overflow-hidden text-sm border border-base-200 shadow-sm z-10 hover:z-30 " + ctx_r0.type);
    \u0275\u0275styleProp("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event.organiser == null ? null : ctx_r0.event.organiser.name);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.duration > 30);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.duration > 60);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.event.duration > 90);
  }
}
function DayviewEventComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "div")(2, "app-icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r0.top * 100 + "%")("height", ctx_r0.height * 100 + "%");
    \u0275\u0275advance();
    \u0275\u0275classMap("icon flex items-center justify-center mr-2 text-3xl rounded h-12 w-12 text-pending " + ctx_r0.event.ext("cleaning_status"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event.ext("cleaning_status") === "done" ? "done" : "warning");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", ctx_r0.event.ext("cleaning_status") === "done" ? "Finished" : "Scheduled to", " clean at ", \u0275\u0275pipeBind2(6, 9, ctx_r0.event.ext("cleaning_time") || ctx_r0.event.event_end * 1e3, ctx_r0.time_format), " ");
  }
}
var DAY_IN_MINUTES = 24 * 60;
var _DayviewEventComponent = class _DayviewEventComponent {
  get time() {
    const date = new Date(this.event.date);
    return format(date, this.time_format) + " - " + format(addMinutes(date, this.event.duration), this.time_format);
  }
  get type() {
    return this.event.guests.length ? "external" : this.event.status === "declined" ? "cancelled" : "internal";
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.top = -999;
    this.height = 0;
    this.overflow_top = -999;
    this.overflow_height = 0;
    this.ui_options = this._state.options;
    this.view = (e) => this._state.setEvent(e);
  }
  ngOnChanges(changes) {
    if (changes.event && this.event) {
      const start = startOfDay(new Date(this.event.date));
      const diff = differenceInMinutes(new Date(this.event.date), start);
      this.top = diff / DAY_IN_MINUTES;
      this.height = this.event.duration / DAY_IN_MINUTES;
      this.overflow_top = (diff - (this.event.setup_time || 0)) / DAY_IN_MINUTES;
      this.overflow_height = (this.event.duration + (this.event.setup_time || 0) + (this.event.breakdown_time || 0)) / DAY_IN_MINUTES;
    }
  }
};
_DayviewEventComponent.\u0275fac = function DayviewEventComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayviewEventComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(SettingsService));
};
_DayviewEventComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewEventComponent, selectors: [["dayview-event"]], inputs: { event: "event" }, features: [\u0275\u0275NgOnChangesFeature], decls: 5, vars: 7, consts: [[3, "class", "top", "height", 4, "ngIf"], ["event", "", "matRipple", "", 3, "class", "top", "height", "click", 4, "ngIf"], ["cleaning", "", "class", "absolute rounded overflow-hidden flex w-full shadow p-2 bg-base-100 z-20 hover:!h-48", 3, "top", "height", 4, "ngIf"], ["event", "", "matRipple", "", 3, "click"], [1, "px-2", "py-1", "font-medium"], ["class", "py-1 flex items-center", 4, "ngIf"], [1, "py-1", "flex", "items-center"], [1, "mx-2"], ["cleaning", "", 1, "absolute", "rounded", "overflow-hidden", "flex", "w-full", "shadow", "p-2", "bg-base-100", "z-20", "hover:!h-48"], [1, "flex-1", "w-1/2"]], template: function DayviewEventComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DayviewEventComponent_div_0_Template, 1, 6, "div", 0);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, DayviewEventComponent_div_2_Template, 6, 10, "div", 1)(3, DayviewEventComponent_div_3_Template, 7, 12, "div", 2);
    \u0275\u0275pipe(4, "async");
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_2_0;
    \u0275\u0275property("ngIf", (tmp_0_0 = \u0275\u0275pipeBind1(1, 3, ctx.ui_options)) == null ? null : tmp_0_0.show_overflow);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.event);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.event && ((tmp_2_0 = \u0275\u0275pipeBind1(4, 5, ctx.ui_options)) == null ? null : tmp_2_0.show_cleaning));
  }
}, dependencies: [NgIf, MatRipple, IconComponent, AsyncPipe, DatePipe], styles: ["\n\n[event][_ngcontent-%COMP%] {\n  background-color: #ccc;\n  width: 12rem;\n  z-index: 100;\n  transition: box-shadow 200ms;\n}\n[event][_ngcontent-%COMP%]:hover {\n  box-shadow:\n    0 1px 3px 1px rgba(0, 0, 0, 0.2),\n    0 1px 1px 0 rgba(0, 0, 0, 0.14),\n    0 2px 1px -1px rgba(0, 0, 0, 0.12) !important;\n  cursor: pointer;\n}\n.overflow-block[_ngcontent-%COMP%] {\n  opacity: 0.3;\n  width: 12rem;\n}\n.internal[_ngcontent-%COMP%] {\n  background-color: #1565c0;\n  color: #fff;\n}\n.icon[_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n}\n.icon.done[_ngcontent-%COMP%] {\n  color: #21a453;\n}\n.external[_ngcontent-%COMP%] {\n  background-color: #ad1457;\n  color: #fff;\n}\n.cancelled[_ngcontent-%COMP%] {\n  background-color: #ccc;\n}\n/*# sourceMappingURL=dayview-event.component.css.map */"] });
var DayviewEventComponent = _DayviewEventComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewEventComponent, { className: "DayviewEventComponent", filePath: "apps/concierge/src/app/day-view/dayview-event.component.ts", lineNumber: 125 });
})();

// apps/concierge/src/app/day-view/dayview-space.component.ts
function DayviewSpaceComponent_ng_container_0_dayview_event_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "dayview-event", 2);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275property("event", event_r1);
  }
}
function DayviewSpaceComponent_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, DayviewSpaceComponent_ng_container_0_dayview_event_1_Template, 1, 1, "dayview-event", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.events));
  }
}
var _DayviewSpaceComponent = class _DayviewSpaceComponent extends AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.events = this._state.filtered.pipe(map((bookings) => {
      return bookings.filter((bkn) => bkn.resources.find((space) => this.space.email === space.email));
    }));
  }
  ngOnInit() {
    this.subscription("events", this._state.filtered.subscribe());
  }
};
_DayviewSpaceComponent.\u0275fac = function DayviewSpaceComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayviewSpaceComponent)(\u0275\u0275directiveInject(EventsStateService));
};
_DayviewSpaceComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewSpaceComponent, selectors: [["dayview-space"]], inputs: { space: "space" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [[4, "ngIf"], [3, "event", 4, "ngFor", "ngForOf"], [3, "event"]], template: function DayviewSpaceComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DayviewSpaceComponent_ng_container_0_Template, 3, 3, "ng-container", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.space);
  }
}, dependencies: [NgForOf, NgIf, DayviewEventComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=dayview-space.component.css.map */"] });
var DayviewSpaceComponent = _DayviewSpaceComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewSpaceComponent, { className: "DayviewSpaceComponent", filePath: "apps/concierge/src/app/day-view/dayview-space.component.ts", lineNumber: 27 });
})();

// apps/concierge/src/app/day-view/dayview-timeline.component.ts
function DayviewTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const time_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateY(-" + ctx_r2.scroll.y + "px)");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", time_r2, " ");
  }
}
function DayviewTimelineComponent_div_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 19);
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("transform", "translateX(-" + ctx_r2.scroll.x + "px)");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", space_r4.display_name || space_r4.name, " ");
  }
}
function DayviewTimelineComponent_dayview_space_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "dayview-space", 21);
  }
  if (rf & 2) {
    const space_r5 = ctx.$implicit;
    \u0275\u0275property("space", space_r5);
  }
}
function DayviewTimelineComponent_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 22);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    let tmp_4_0;
    const i_r6 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("width", ((tmp_4_0 = \u0275\u0275pipeBind1(1, 4, ctx_r2.space_list)) == null ? null : tmp_4_0.length) * 12 + "rem")("top", i_r6 * 4 + "rem");
  }
}
function DayviewTimelineComponent_mat_progress_bar_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 23);
  }
}
function DayviewTimelineComponent_view_event_details_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "view-event-details", 24);
    \u0275\u0275pipe(1, "async");
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("event", \u0275\u0275pipeBind1(1, 1, ctx_r2.event));
  }
}
var HOUR_BLOCKS = new Array(24).fill(0).map((_, idx) => {
  return (idx % 12 === 0 ? 12 : idx % 12) + (idx >= 12 ? " PM" : " AM");
});
var _DayviewTimelineComponent = class _DayviewTimelineComponent extends AsyncHandler {
  constructor(_org, _state) {
    super();
    this._org = _org;
    this._state = _state;
    this.blocks = HOUR_BLOCKS;
    this.scroll = { x: 0, y: 0 };
    this.loading = this._state.loading;
    this.event = this._state.event;
    this.spaces = this._org.active_building.pipe(filter((_) => !!_), switchMap(({ id }) => querySystems({ zone_id: id, limit: 1e3 }).pipe(catchError(() => of({ data: [] })))), map(({ data }) => data.map((_) => new Space(__spreadProps(__spreadValues({}, _), {
      level: this._org.levelWithID(_.zones)
    })))), shareReplay(1));
    this.space_list = combineLatest([
      this.spaces,
      this._state.zones
    ]).pipe(map(([spaces, zones]) => spaces.filter((space) => !zones?.length || space.zones.find((z) => zones.includes(z))) || []));
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
  onScroll(e) {
    requestAnimationFrame(() => this.scroll = {
      x: e.srcElement.scrollLeft,
      y: e.srcElement.scrollTop
    });
  }
};
_DayviewTimelineComponent.\u0275fac = function DayviewTimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayviewTimelineComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EventsStateService));
};
_DayviewTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayviewTimelineComponent, selectors: [["dayview-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 14, consts: [["scroll_el", ""], [1, "absolute", "inset-0", "flex"], [1, "time", "h-full", "w-24", "overflow-hidden", "bg-base-100", "relative"], ["header", "", 1, "relative", "h-16", "z-50"], [1, "bg-base-100", "absolute", "top-0", "left-0", "right-0", "bottom-8"], ["change-transform", "", "class", "relative h-16 border-r border-base-300 z-10", 3, "transform", 4, "ngFor", "ngForOf"], [1, "absolute", "h-8", "w-px", "top-8", "right-0", "bg-base-300"], [1, "h-full", "flex-1", "flex", "flex-col", "w-1/2"], ["header", "", 1, "flex", "relative", "overflow-hidden", "border-b", "border-base-300", "border-opacity-50", "bg-base-100", "h-16", "w-full"], ["change-transform", "", "class", "relative h-16 w-48 min-w-[12rem]", 3, "transform", 4, "ngFor", "ngForOf"], ["content", "", 1, "relative", "flex", "flex-1", "overflow-auto", 3, "scroll"], ["class", "w-48 min-w-[12rem] h-[96rem] border-r border-base-300", 3, "space", 4, "ngFor", "ngForOf"], ["class", "absolute bg-base-300 h-px min-w-full left-0", 3, "width", "top", 4, "ngFor", "ngForOf"], ["mode", "indeterminate", "class", "absolute bottom-0 left-0 right-0", 4, "ngIf"], [3, "event", 4, "ngIf"], ["change-transform", "", 1, "relative", "h-16", "border-r", "border-base-300", "z-10"], [1, "absolute", "text-center", "w-full", "text-xs", "top-0", "transform", "-translate-y-1/2", "opacity-40"], [1, "absolute", "h-px", "w-2", "top-0", "right-0", "bg-base-300"], ["change-transform", "", 1, "relative", "h-16", "w-48", "min-w-[12rem]"], ["bar", "", 1, "absolute", "h-8", "w-px", "bottom-0", "-left-px", "bg-base-300"], [1, "name", "m-2", "text-center"], [1, "w-48", "min-w-[12rem]", "h-[96rem]", "border-r", "border-base-300", 3, "space"], [1, "absolute", "bg-base-300", "h-px", "min-w-full", "left-0"], ["mode", "indeterminate", 1, "absolute", "bottom-0", "left-0", "right-0"], [3, "event"]], template: function DayviewTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DayviewTimelineComponent_div_4_Template, 4, 3, "div", 5);
    \u0275\u0275element(5, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 7)(7, "div", 8);
    \u0275\u0275template(8, DayviewTimelineComponent_div_8_Template, 4, 3, "div", 9);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 10, 0);
    \u0275\u0275listener("scroll", function DayviewTimelineComponent_Template_div_scroll_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll($event));
    });
    \u0275\u0275template(12, DayviewTimelineComponent_dayview_space_12_Template, 1, 1, "dayview-space", 11);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275template(14, DayviewTimelineComponent_div_14_Template, 2, 6, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, DayviewTimelineComponent_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 13);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275template(17, DayviewTimelineComponent_view_event_details_17_Template, 2, 3, "view-event-details", 14);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", ctx.blocks);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(9, 6, ctx.space_list));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 8, ctx.space_list));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.blocks);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 10, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(18, 12, ctx.event));
  }
}, dependencies: [NgForOf, NgIf, ViewEventDetailsComponent, MatProgressBar, DayviewSpaceComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n[change-transform][_ngcontent-%COMP%] {\n  will-change: transform;\n}\n/*# sourceMappingURL=dayview-timeline.component.css.map */"] });
var DayviewTimelineComponent = _DayviewTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayviewTimelineComponent, { className: "DayviewTimelineComponent", filePath: "apps/concierge/src/app/day-view/dayview-timeline.component.ts", lineNumber: 114 });
})();

// apps/concierge/src/app/day-view/day-view.component.ts
var _c02 = ["app-dayview", ""];
var _DayViewComponent = class _DayViewComponent {
  get links() {
    return this._settings.get("app.general.menu") || [];
  }
  constructor(_settings, _router) {
    this._settings = _settings;
    this._router = _router;
  }
  ngOnInit() {
    if (!this.links.find((_) => _.route.includes("day-view"))) {
      this._router.navigate([`/${this.links[0].route}`]);
    }
  }
};
_DayViewComponent.\u0275fac = function DayViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewComponent)(\u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(Router));
};
_DayViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DayViewComponent, selectors: [["", "app-dayview", ""]], attrs: _c02, decls: 4, vars: 0, consts: [[1, "h-full"], [1, "relative", "overflow-hidden", "flex", "flex-col", "flex-1", "w-1/2", "h-full", "bg-base-200"]], template: function DayViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar", 0);
    \u0275\u0275elementStart(1, "main", 1);
    \u0275\u0275element(2, "dayview-topbar")(3, "dayview-timeline");
    \u0275\u0275elementEnd();
  }
}, dependencies: [SidebarComponent, DayviewTopbarComponent, DayviewTimelineComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=day-view.component.css.map */"] });
var DayViewComponent = _DayViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DayViewComponent, { className: "DayViewComponent", filePath: "apps/concierge/src/app/day-view/day-view.component.ts", lineNumber: 26 });
})();

// apps/concierge/src/app/day-view/event-form.component.ts
var _c03 = () => [5, 10];
var _c1 = () => ({ standalone: true });
var _c2 = (a0, a1, a2, a3) => ({ date: a0, duration: a1, all_day: a2, zone_id: a3 });
function EventFormComponent_form_0_mat_checkbox_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 32);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.ALL_DAY"), " ");
  }
}
function EventFormComponent_form_0_div_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 12)(2, "label", 33);
    \u0275\u0275text(3, "Start Time");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-time-field", 34);
    \u0275\u0275listener("ngModelChange", function EventFormComponent_form_0_div_19_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 12)(9, "label", 35);
    \u0275\u0275text(10, "Duration");
    \u0275\u0275elementStart(11, "span");
    \u0275\u0275text(12, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(13, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "a-duration-field", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275property("ngModel", ctx_r1.form.get("date").value)("ngModelOptions", \u0275\u0275pureFunction0(5, _c1))("use_24hr", ctx_r1.use_24hr_time);
    \u0275\u0275advance(7);
    \u0275\u0275property("time", ctx_r1.form.controls == null ? null : ctx_r1.form.controls.date == null ? null : ctx_r1.form.controls.date.value)("use_24hr", ctx_r1.use_24hr_time);
  }
}
function EventFormComponent_form_0_div_57_mat_form_field_4_mat_option_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 47);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const code_r4 = ctx.$implicit;
    \u0275\u0275property("value", code_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", code_r4, " ");
  }
}
function EventFormComponent_form_0_div_57_mat_form_field_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 42);
    \u0275\u0275listener("openedChange", function EventFormComponent_form_0_div_57_mat_form_field_4_Template_mat_form_field_openedChange_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.focusInput());
    });
    \u0275\u0275elementStart(1, "mat-select", 43)(2, "input", 44, 0);
    \u0275\u0275listener("ngModelChange", function EventFormComponent_form_0_div_57_mat_form_field_4_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.code_filter.next($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "mat-option", 45);
    \u0275\u0275template(5, EventFormComponent_form_0_div_57_mat_form_field_4_mat_option_5_Template, 2, 2, "mat-option", 46);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-error");
    \u0275\u0275text(8, " Catering charge code is required ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.code_filter.getValue())("ngModelOptions", \u0275\u0275pureFunction0(5, _c1));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(6, 3, ctx_r1.filtered_codes));
  }
}
function EventFormComponent_form_0_div_57_mat_form_field_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "textarea", 48);
    \u0275\u0275elementStart(3, "mat-error");
    \u0275\u0275text(4, " Catering Order notes are required ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("mt-2", !\u0275\u0275pipeBind1(1, 2, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
  }
}
function EventFormComponent_form_0_div_57_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label", 38);
    \u0275\u0275text(2, "Catering:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "catering-list-field", 39);
    \u0275\u0275template(4, EventFormComponent_form_0_div_57_mat_form_field_4_Template, 9, 6, "mat-form-field", 40);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275template(6, EventFormComponent_form_0_div_57_mat_form_field_6_Template, 5, 4, "mat-form-field", 41);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("options", \u0275\u0275pureFunction4(5, _c2, ctx_r1.form.value.date, ctx_r1.form.value.duration, ctx_r1.form.value.all_day, ctx_r1.form.value.resources[0] == null ? null : ctx_r1.form.value.resources[0].level == null ? null : ctx_r1.form.value.resources[0].level.parent_id));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 3, (ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length) && ctx_r1.has_codes));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.form.value.catering == null ? null : ctx_r1.form.value.catering.length);
  }
}
function EventFormComponent_form_0_div_59_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49)(1, "label", 22);
    \u0275\u0275text(2, "Assets:");
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "asset-list-field", 50);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275property("date", ctx_r1.form.value.date)("duration", ctx_r1.form.value.duration);
  }
}
function EventFormComponent_form_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 2)(1, "div", 3)(2, "label", 4);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 5);
    \u0275\u0275element(8, "input", 6);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10, "A valid title is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 7)(12, "label", 8);
    \u0275\u0275text(13, "Date");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(16, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(17, "a-date-field", 9);
    \u0275\u0275template(18, EventFormComponent_form_0_mat_checkbox_18_Template, 3, 3, "mat-checkbox", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, EventFormComponent_form_0_div_19_Template, 15, 6, "div", 11);
    \u0275\u0275elementStart(20, "div", 12)(21, "label", 13);
    \u0275\u0275text(22, "Handler");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(25, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(26, "a-user-search-field", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 12)(28, "label", 15);
    \u0275\u0275text(29, "Host's Entity");
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(32, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 16);
    \u0275\u0275element(34, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 12)(36, "label", 18);
    \u0275\u0275text(37, "Attendees");
    \u0275\u0275elementStart(38, "span");
    \u0275\u0275text(39, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(40, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(41, "a-user-list-field", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 12)(43, "label", 20);
    \u0275\u0275text(44, "Vistor's Entity");
    \u0275\u0275elementStart(45, "span");
    \u0275\u0275text(46, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(47, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "mat-form-field", 16);
    \u0275\u0275element(49, "input", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(50, "div", 12)(51, "label", 22);
    \u0275\u0275text(52, "Space");
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(55, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(56, "space-list-field", 23);
    \u0275\u0275elementEnd();
    \u0275\u0275template(57, EventFormComponent_form_0_div_57_Template, 7, 10, "div", 24);
    \u0275\u0275pipe(58, "async");
    \u0275\u0275template(59, EventFormComponent_form_0_div_59_Template, 4, 2, "div", 25);
    \u0275\u0275elementStart(60, "div", 26)(61, "div", 27)(62, "label", 28);
    \u0275\u0275text(63, "Setup Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "a-duration-field", 29);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(65, "div", 27)(66, "label", 30);
    \u0275\u0275text(67, "Breakdown Duration");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "a-duration-field", 31);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance(18);
    \u0275\u0275property("ngIf", ctx_r1.allow_all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r1.form.value.all_day);
    \u0275\u0275advance(38);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(58, 9, ctx_r1.has_catering) && ctx_r1.form.contains("catering"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.has_assets);
    \u0275\u0275advance(5);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(11, _c03));
    \u0275\u0275advance(4);
    \u0275\u0275property("min", 0)("custom_options", \u0275\u0275pureFunction0(12, _c03));
  }
}
var _EventFormComponent = class _EventFormComponent {
  get allow_all_day() {
    return !!this._settings.get("app.events.allow_all_day");
  }
  get has_assets() {
    return !!this._settings.get("app.events.has_assets");
  }
  get use_24hr_time() {
    return this._settings.get("app.use_24_hour_time");
  }
  constructor(_dialog, _settings, _catering) {
    this._dialog = _dialog;
    this._settings = _settings;
    this._catering = _catering;
    this.code_filter = new BehaviorSubject("");
    this.has_catering = this._catering.available_menu.pipe(map((l) => l.length > 0));
    this.has_codes = this._catering.charge_codes.pipe(map((l) => l.length > 0), tap((has_codes) => {
      if (!has_codes) {
        this.form.get("catering_charge_code").setValidators([]);
        this.form.updateValueAndValidity();
      }
    }));
    this.filtered_codes = combineLatest([
      this.code_filter,
      this._catering.charge_codes
    ]).pipe(map(([s, l]) => l.filter((_) => _.toLowerCase().includes(s.toLowerCase()))));
  }
};
_EventFormComponent.\u0275fac = function EventFormComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EventFormComponent)(\u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(CateringOrderStateService));
};
_EventFormComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventFormComponent, selectors: [["event-form"]], inputs: { form: "form" }, decls: 1, vars: 1, consts: [["input", ""], [3, "formGroup", 4, "ngIf"], [3, "formGroup"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["matInput", "", "name", "title", "formControlName", "title", "placeholder", "Meeting Title"], [1, "flex", "flex-col", "relative"], ["for", "date"], ["name", "date", "formControlName", "date"], ["formControlName", "all_day", "class", "absolute -top-2 right-0", 4, "ngIf"], ["class", "flex space-x-2", 4, "ngIf"], [1, "flex", "flex-col", "flex-1"], ["for", "organiser"], ["name", "organiser", "formControlName", "organiser", 1, "mb-4"], ["for", "host_entity"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "host_entity", "formControlName", "host_entity", "placeholder", "Organizational Entity of the Host"], ["for", "attendees"], ["name", "attendees", "formControlName", "attendees"], ["for", "visitor_entity"], ["matInput", "", "name", "visitor_entity", "formControlName", "visitor_entity", "placeholder", "Organizational Entity of the Visitor"], ["for", "space"], ["formControlName", "resources", 1, "w-full"], ["class", "py-2", 4, "ngIf"], ["class", "flex flex-col flex-1 mb-4", 4, "ngIf"], [1, "flex", "space-x-2"], [1, "flex", "flex-col", "space-y-2", "flex-1"], ["for", "setup"], ["name", "setup", "formControlName", "setup_time", 3, "min", "custom_options"], ["for", "breakdown"], ["name", "breakdown", "formControlName", "breakdown_time", 3, "min", "custom_options"], ["formControlName", "all_day", 1, "absolute", "-top-2", "right-0"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["for", "duration"], ["name", "duration", "formControlName", "duration", 3, "time", "use_24hr"], [1, "py-2"], ["for", "catering"], ["name", "catering", "formControlName", "catering", 3, "options"], ["appearance", "outline", "class", "w-full mt-2", 3, "openedChange", 4, "ngIf"], ["appearance", "outline", "class", "w-full", 3, "mt-2", 4, "ngIf"], ["appearance", "outline", 1, "w-full", "mt-2", 3, "openedChange"], ["formControlName", "catering_charge_code", "placeholder", "Charge Code"], ["placeholder", "Search charge codes...", 1, "sticky", "top-0", "bg-base-100", "px-4", "py-3", "text-base", "border-x-0", "border-t-0", "border-b", "focus:border-b", "border-base-200", "w-full", "rounded-none", "z-50", 3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "hidden"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], ["matInput", "", "formControlName", "catering_notes", "placeholder", "Extra catering details..."], [1, "flex", "flex-col", "flex-1", "mb-4"], ["formControlName", "assets", 3, "date", "duration"]], template: function EventFormComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, EventFormComponent_form_0_Template, 69, 13, "form", 1);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.form);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatError, MatInput, MatSelect, MatOption, MatCheckbox, FormGroupDirective, FormControlName, DateFieldComponent, DurationFieldComponent, TimeFieldComponent, UserListFieldComponent, UserSearchFieldComponent, SpaceListFieldComponent, AssetListFieldComponent, CateringListFieldComponent, AsyncPipe, TranslatePipe] });
var EventFormComponent = _EventFormComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventFormComponent, { className: "EventFormComponent", filePath: "apps/concierge/src/app/day-view/event-form.component.ts", lineNumber: 194 });
})();

// apps/concierge/src/app/day-view/booking-modal.component.ts
function BookingModalComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "mat-spinner", 7);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, ctx_r0.loading));
  }
}
function BookingModalComponent_footer_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 8)(1, "button", 9);
    \u0275\u0275listener("click", function BookingModalComponent_footer_13_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
var _BookingModalComponent = class _BookingModalComponent {
  get form() {
    return this._service.form;
  }
  constructor(_data, _service, _dialog_ref, _settings) {
    this._data = _data;
    this._service = _service;
    this._dialog_ref = _dialog_ref;
    this._settings = _settings;
    this.event = new EventEmitter();
    this.loading = this._service.loading;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      let event = this._data.event;
      if (event?.creator !== event?.mailbox) {
        event = (yield queryEvents({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find((_) => _.ical_uid === event.ical_uid) || event;
      }
      if (event && !event.id) {
        event.all_day = this._settings.get("app.events.all_day_default") ?? event.all_day;
      }
      this._service.newForm(event);
    });
  }
  save() {
    return __async(this, null, function* () {
      const event = yield this._service.postForm().catch((_) => {
        notifyError(_);
        throw _;
      });
      this.event.emit({ reason: "done", metadata: event });
      notifySuccess("Successfully created booking");
      this._dialog_ref.close();
    });
  }
};
_BookingModalComponent.\u0275fac = function BookingModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _BookingModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(SettingsService));
};
_BookingModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingModalComponent, selectors: [["booking-modal"]], outputs: { event: "event" }, decls: 15, vars: 16, consts: [[1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", ""], [1, "relative", "p-4"], [3, "form"], ["loading", "", "class", "absolute inset-0 flex flex-col items-center justify-center", 4, "ngIf"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], ["loading", "", 1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function BookingModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 0);
    \u0275\u0275elementStart(4, "button", 1)(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "main", 2);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275element(9, "event-form", 3);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275template(11, BookingModalComponent_div_11_Template, 5, 4, "div", 4);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, BookingModalComponent_footer_13_Template, 3, 0, "footer", 5);
    \u0275\u0275pipe(14, "async");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", (ctx.form == null ? null : ctx.form.value.id) ? "Edit" : "New", " Booking");
    \u0275\u0275advance(5);
    \u0275\u0275classProp("overflow-auto", !\u0275\u0275pipeBind1(8, 8, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("pointer-events-none", \u0275\u0275pipeBind1(10, 10, ctx.loading));
    \u0275\u0275property("form", ctx.form);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(12, 12, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(14, 14, ctx.loading));
  }
}, dependencies: [NgIf, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent, EventFormComponent, AsyncPipe], styles: ["\n\nmain[_ngcontent-%COMP%] {\n  width: 32rem;\n  max-height: 65vh;\n  max-width: calc(100vw - 4rem);\n}\n/*# sourceMappingURL=booking-modal.component.css.map */"] });
var BookingModalComponent = _BookingModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingModalComponent, { className: "BookingModalComponent", filePath: "apps/concierge/src/app/day-view/booking-modal.component.ts", lineNumber: 57 });
})();

// apps/concierge/src/app/day-view/room-booking-search.component.ts
var _c04 = ["input_el"];
function RoomBookingSearchComponent_app_icon_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon", 6);
    \u0275\u0275text(1, " search ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingSearchComponent_div_7_div_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r1.events).length ? "No matching events found." : "No events for the currently selected date and zone", " ");
  }
}
function RoomBookingSearchComponent_div_7_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_div_7_button_9_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.selected.next(event_r4));
    });
    \u0275\u0275element(1, "div", 15);
    \u0275\u0275elementStart(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "div", 21);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 9);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 22);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 22);
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "user");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 11, event_r4.date, "dd"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 14, event_r4.date, "MMM"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(15, 17, event_r4.date, ctx_r1.time_format), " \u2013 ", \u0275\u0275pipeBind2(16, 20, event_r4.date_end, ctx_r1.time_format), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = \u0275\u0275pipeBind1(21, 23, event_r4.host)) == null ? null : tmp_11_0.name) || event_r4.host, " ");
  }
}
function RoomBookingSearchComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, RoomBookingSearchComponent_div_7_div_6_Template, 3, 3, "div", 10);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275template(9, RoomBookingSearchComponent_div_7_button_9_Template, 22, 25, "button", 12);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", (tmp_2_0 = \u0275\u0275pipeBind1(4, 4, ctx_r1.filtered)) == null ? null : tmp_2_0.length, " of ", (tmp_2_0 = \u0275\u0275pipeBind1(5, 6, ctx_r1.events)) == null ? null : tmp_2_0.length, " Event(s) ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(7, 8, ctx_r1.filtered).length);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(10, 10, ctx_r1.filtered));
  }
}
var _RoomBookingSearchComponent = class _RoomBookingSearchComponent extends AsyncHandler {
  get time_format() {
    return this._settings.time_format;
  }
  typeColor(event) {
    const type = this.types.find((_) => _.id === event.type);
    return type?.color || "#EEE";
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.selected = new EventEmitter();
    this.show = false;
    this.search = new BehaviorSubject("");
    this.events = this._state.filtered;
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.filtered = combineLatest([this.search, this.events]).pipe(map(([search, event_list]) => {
      search = search.toLowerCase();
      return event_list.filter((e) => {
        return !e.is_system_event && (e.title.toLowerCase().includes(search) || e.organiser?.name.toLowerCase().includes(search) || e.host.toLowerCase().includes(search) || e.system?.display_name.toLowerCase().includes(search) || e.system?.name.toLowerCase().includes(search) || e.resources[0]?.display_name.toLowerCase()?.includes(search) || e.resources[0]?.name.toLowerCase()?.includes(search) || e.resources[0]?.email.toLowerCase()?.includes(search) || e.extension_data.host_entity?.toLowerCase()?.includes(search) || e.extension_data.visitor_entity?.toLowerCase()?.includes(search) || e.attendees.find((user) => user.name?.toLowerCase().includes(search) || user?.email?.toLowerCase().includes(search)));
      });
    }));
  }
  showSearch() {
    this.show = true;
    this._input_element.nativeElement.focus();
  }
  hideSearch() {
    if (!this.show)
      return;
    this.timeout("hide", () => this.show = false);
  }
};
_RoomBookingSearchComponent.\u0275fac = function RoomBookingSearchComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingSearchComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(SettingsService));
};
_RoomBookingSearchComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingSearchComponent, selectors: [["room-booking-search"]], viewQuery: function RoomBookingSearchComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c04, 7);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_element = _t.first);
  }
}, outputs: { selected: "selected" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 8, vars: 7, consts: [["input_el", ""], [1, "relative"], ["icon", "", "matRipple", "", 3, "click"], ["placeholder", "Search day's events...", 1, "absolute", "top-1/2", "-translate-y-1/2", "w-[20rem]", "right-0", "rounded-full", "pl-10", "pr-4", "py-3", "border", "border-base-300", "shadow", "bg-base-100", 3, "ngModelChange", "blur", "ngModel"], ["class", "text-2xl absolute top-1/2 -translate-y-1/2 right-[17.5rem]", 4, "ngIf"], ["class", "absolute top-full translate-y-2 w-[18rem] right-4 rounded border border-base-300 bg-base-100 max-h-[65vh] overflow-auto shadow", 4, "ngIf"], [1, "text-2xl", "absolute", "top-1/2", "-translate-y-1/2", "right-[17.5rem]"], [1, "absolute", "top-full", "translate-y-2", "w-[18rem]", "right-4", "rounded", "border", "border-base-300", "bg-base-100", "max-h-[65vh]", "overflow-auto", "shadow"], [1, "sticky", "top-0", "p-4", "bg-base-100", "rounded", "z-10"], [1, "opacity-60", "text-xs"], ["class", "opacity-30 p-4 flex items-center justify-center text-sm text-center", 4, "ngIf"], [1, "px-2", "pb-2", "-mt-2"], ["matRipple", "", "class", "relative flex items-center p-2 hover:bg-base-200 rounded w-full text-left space-x-2 z-0", 3, "click", 4, "ngFor", "ngForOf"], [1, "opacity-30", "p-4", "flex", "items-center", "justify-center", "text-sm", "text-center"], ["matRipple", "", 1, "relative", "flex", "items-center", "p-2", "hover:bg-base-200", "rounded", "w-full", "text-left", "space-x-2", "z-0", 3, "click"], [1, "h-10", "w-1", "rounded-full"], ["date", "", 1, "leading-tight"], [1, "text-2xl", "mx-auto"], [1, "font-medium", "text-sm", "uppercase", "mx-auto", "-mt-1"], [1, "flex-1", "w-1/2"], [1, "flex", "items-center", "space-x-2", "w-full"], [1, "text-sm", "flex-1", "truncate"], [1, "text-xs", "opacity-30", "truncate"]], template: function RoomBookingSearchComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "button", 2);
    \u0275\u0275listener("click", function RoomBookingSearchComponent_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.showSearch());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "search");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "input", 3, 0);
    \u0275\u0275listener("ngModelChange", function RoomBookingSearchComponent_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.search.next($event));
    })("blur", function RoomBookingSearchComponent_Template_input_blur_4_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.hideSearch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, RoomBookingSearchComponent_app_icon_6_Template, 2, 0, "app-icon", 4)(7, RoomBookingSearchComponent_div_7_Template, 11, 12, "div", 5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-0", !ctx.show)("pointer-events-none", !ctx.show);
    \u0275\u0275property("ngModel", ctx.search.getValue());
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.show);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.show);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatRipple, IconComponent, AsyncPipe, DatePipe, UserPipe] });
var RoomBookingSearchComponent = _RoomBookingSearchComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingSearchComponent, { className: "RoomBookingSearchComponent", filePath: "apps/concierge/src/app/day-view/room-booking-search.component.ts", lineNumber: 108 });
})();

// apps/concierge/src/app/day-view/room-timeline.component.ts
var _c05 = () => [];
function RoomBookingsTimelineComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275text(1, " Timezone of the building is displayed and is different from your local timezone. ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingsTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " Today ");
    \u0275\u0275elementEnd();
  }
}
function RoomBookingsTimelineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const space_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r1.display_name || space_r1.name, " ");
  }
}
function RoomBookingsTimelineComponent_div_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const hour_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.formatHour(hour_r2), " ");
  }
}
function RoomBookingsTimelineComponent_div_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275element(1, "div", 27);
    \u0275\u0275template(2, RoomBookingsTimelineComponent_div_21_div_2_Template, 2, 1, "div", 28);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const i_r4 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", i_r4 !== 0);
  }
}
function RoomBookingsTimelineComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 30);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", "calc(" + ctx_r2.timeToOffset(ctx_r2.now) + "% + 1px)");
  }
}
function RoomBookingsTimelineComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 31);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("height", ctx_r2.block_height + "rem");
  }
}
function RoomBookingsTimelineComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 32);
  }
  if (rf & 2) {
    const i_r5 = ctx.index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", "calc(" + i_r5 * ctx_r2.block_width + "rem - 1px)");
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 37);
    \u0275\u0275elementContainerEnd();
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275element(1, "div", 38);
    \u0275\u0275elementStart(2, "p", 24);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "p", 24);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-secondary", event_r7.status !== "cancelled")("bg-error", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", event_r7.all_day ? "All Day" : \u0275\u0275pipeBind3(4, 11, event_r7.date, ctx_r2.time_format, ctx_r2.tz), " \u2013 ", event_r7.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-60", event_r7.status === "cancelled");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (event_r7.organiser == null ? null : event_r7.organiser.name) || event_r7.host, " ");
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const event_r7 = \u0275\u0275nextContext().$implicit;
      const space_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewEvent(event_r7, space_r8.id));
    });
    \u0275\u0275elementStart(1, "div", 35);
    \u0275\u0275template(2, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_2_Template, 2, 0, "ng-container", 36)(3, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_ng_container_3_Template, 7, 15, "ng-container", 36);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const event_r7 = \u0275\u0275nextContext().$implicit;
    const i_r9 = \u0275\u0275nextContext().index;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("left", i_r9 * ctx_r2.block_width + 0.25 + "rem")("top", ctx_r2.timeToOffset(event_r7.date) + "%")("height", ctx_r2.endToOffset(event_r7.duration) + "%");
    \u0275\u0275property("matTooltip", ctx_r2.eventTooltip(event_r7));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", event_r7.state === "done")("!rounded-none", event_r7.is_system_event)("!border-secondary", event_r7.is_system_event);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r7.is_system_event);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r7.is_system_event);
  }
}
function RoomBookingsTimelineComponent_ng_container_28_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_button_1_Template, 4, 15, "button", 33);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const event_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !event_r7.is_system_event || \u0275\u0275pipeBind1(2, 1, ctx_r2.ui_options).show_overflow);
  }
}
function RoomBookingsTimelineComponent_ng_container_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RoomBookingsTimelineComponent_ng_container_28_ng_container_1_Template, 3, 3, "ng-container", 19);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const space_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.events)[space_r8.id] || \u0275\u0275pureFunction0(3, _c05));
  }
}
function RoomBookingsTimelineComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 39);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r2.timeToOffset(ctx_r2.now) + "%");
  }
}
var _RoomBookingsTimelineComponent = class _RoomBookingsTimelineComponent extends AsyncHandler {
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get block_start() {
    return +this._settings.get("app.events.block_start") || 0;
  }
  get block_end() {
    return +this._settings.get("app.events.block_end") || 24;
  }
  get block_range() {
    return Math.min(24, Math.max(this.block_end - this.block_start, 1));
  }
  get block_height() {
    return +this._settings.get("app.events.block_height") || 3;
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _dialog, _settings, _org) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._settings = _settings;
    this._org = _org;
    this.block_width = 14;
    this.ui_options = this._state.options;
    this.spaces = this._state.spaces;
    this.date = this._state.date;
    this.is_today = this.date.pipe(map((d) => isSameDay(d, Date.now())));
    this.show_time = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => {
      const today = isSameDay(d, Date.now());
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(Date.now()), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(Date.now()), this.block_end), -offset).valueOf();
      return today && Date.now() >= start && Date.now() <= end;
    }));
    this.events = combineLatest([
      this._state.spaces,
      this._state.filtered,
      this.date
    ]).pipe(debounceTime(300), map(([spaces, events, date]) => {
      const map2 = {};
      const offset = this.timezone ? getTimezoneDifferenceInHours(this.timezone) : 0;
      const start = addHours(setHours(startOfDay(date), this.block_start), -offset).valueOf();
      const end = addHours(setHours(startOfDay(date), this.block_end), -offset).valueOf();
      for (const space of spaces) {
        map2[space.id] = events.filter((event) => event.resources.find((item) => item.id === space.id || item.email === space.email) || event.system?.id === space.id || event.system?.email === space.email).filter((event) => event.date_end >= start && event.date <= end);
      }
      return map2;
    }), startWith({}), shareReplay(1));
    this._hour_list = Array.from({ length: 24 }, (_, i) => i);
    this.hours = [];
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._date_pipe = new DatePipe("en");
  }
  formatHour(hour) {
    const date = setHours(Date.now(), hour);
    return this._settings.get("app.use_24_hour_time") ? format(date, "HH:00") : format(date, "h a");
  }
  eventTooltip(event) {
    const tooltip = `Start: ${event.all_day ? "All Day" : this._date_pipe.transform(event.date, this.time_format)}
Title:  ${event.title}
Host:  ${event.organiser?.name || event.host}`;
    return tooltip;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
    this.subscription("hour_list", this._org.active_building.subscribe(() => {
      this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    }));
    this.hours = this._hour_list.filter((h) => h >= this.block_start && h < this.block_end);
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(current_tz, this.timezone);
  }
  timeToOffset(date) {
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const offset = !this.timezone ? 0 : getTimezoneDifferenceInHours(this.timezone, current_tz);
    const start_time = setHours(startOfDay(this._state.getDate()), this.block_start - offset);
    const diff = differenceInMinutes(date, start_time);
    return Math.max(0, diff / 60) / this.block_range * 100;
  }
  endToOffset(duration) {
    return Math.min(this.block_range, duration / 60) / this.block_range * 100;
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: event
    });
    ref.componentInstance.hide_edit = !this._settings.get("app.events.allow_edit");
    this.subscription("remove", ref.componentInstance.remove.subscribe(() => this.remove(event, space_id)));
    this.subscription("edit", ref.componentInstance.edit.subscribe(() => this.edit(event)));
    this.subscription("actions", ref.componentInstance.action.subscribe((action) => __async(this, null, function* () {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = yield ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    })));
  }
  remove(item, space_id) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy " + this.time_format)}`;
      const resource_name = item.space?.display_name;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `Delete booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Requesting booking deletion...");
      yield declineEvent(item.id, {
        calendar: item.calendar || item.mailbox || item.host,
        system_id: space_id
      }).toPromise().catch((e) => {
        notifyError(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully deleted booking.");
      this._dialog.closeAll();
    });
  }
};
_RoomBookingsTimelineComponent.\u0275fac = function RoomBookingsTimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingsTimelineComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_RoomBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsTimelineComponent, selectors: [["room-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 39, consts: [["class", "mx-2 mt-2 p-2 w-[calc(100%-1rem)] bg-info text-info-content rounded-lg text-center text-xs", 4, "ngIf"], [1, "relative", "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-b", "border-base-200", "z-20"], [3, "dateChange", "date", "is_new", "hide_today"], ["class", "absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm", 4, "ngIf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "right-8"], [3, "selected"], ["timeline", "", 1, "grid", "overflow-auto", "w-full", "h-1/2", "flex-1", "z-0"], ["timezone", "", 1, "sticky", "top-0", "left-0", "z-30", "bg-base-100", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "absolute", "h-2", "w-px", "right-0", "bottom-0", "bg-base-300"], [1, "absolute", "w-2", "h-px", "right-0", "bottom-0", "bg-base-300"], ["space-headers", "", 1, "sticky", "top-0", "z-20", "border-b", "border-base-300", "flex", "items-center", "bg-base-100"], ["class", "relative h-full w-56 flex items-center justify-center", 4, "ngFor", "ngForOf"], ["hour-blocks", "", 1, "sticky", "left-0", "z-10", "border-r", "border-base-300", "bg-base-100", "overflow-visible"], ["class", "relative w-full", 3, "height", 4, "ngFor", "ngForOf"], ["class", "absolute bg-secondary right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full", 3, "top", 4, "ngIf"], ["space-blocks", "", 1, "relative", "overflow-hidden"], ["class", "relative w-full border-b border-base-200", 3, "height", 4, "ngFor", "ngForOf"], ["class", "absolute w-px h-full bg-base-200 top-0", 3, "left", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["class", "absolute inset-x-0 h-[2px] bg-secondary", 3, "top", 4, "ngIf"], [1, "mx-2", "mt-2", "p-2", "w-[calc(100%-1rem)]", "bg-info", "text-info-content", "rounded-lg", "text-center", "text-xs"], [1, "absolute", "top-1/2", "-translate-y-1/2", "left-4", "text-info", "text-sm"], [1, "relative", "h-full", "w-56", "flex", "items-center", "justify-center"], [1, "truncate"], [1, "absolute", "h-2", "w-px", "-left-px", "bottom-0", "bg-base-300"], [1, "relative", "w-full"], [1, "absolute", "-top-px", "right-0", "w-2", "h-px", "bg-base-300"], ["class", "absolute -top-px right-3 -translate-y-1/2 text-xs opacity-60", 4, "ngIf"], [1, "absolute", "-top-px", "right-3", "-translate-y-1/2", "text-xs", "opacity-60"], [1, "absolute", "bg-secondary", "right-0", "translate-x-1/2", "-translate-y-1/2", "h-2", "w-2", "rounded-full"], [1, "relative", "w-full", "border-b", "border-base-200"], [1, "absolute", "w-px", "h-full", "bg-base-200", "top-0"], ["event", "", "matRipple", "", "class", "absolute w-52 hover:opacity-90 text-left", 3, "left", "top", "height", "matTooltip", "click", 4, "ngIf"], ["event", "", "matRipple", "", 1, "absolute", "w-52", "hover:opacity-90", "text-left", 3, "click", "matTooltip"], [1, "relative", "w-full", "h-full", "shadow", "bg-base-100", "border", "border-base-200", "hover:bg-base-200", "rounded-lg", "overflow-hidden", "px-3", "py-1", "text-xs"], [4, "ngIf"], [1, "absolute", "-inset-px", "bg-secondary", "opacity-30"], [1, "absolute", "left-0", "inset-y-0", "w-1"], [1, "absolute", "inset-x-0", "h-[2px]", "bg-secondary"]], template: function RoomBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RoomBookingsTimelineComponent_div_0_Template, 2, 0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RoomBookingsTimelineComponent_div_4_Template, 2, 0, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275template(18, RoomBookingsTimelineComponent_div_18_Template, 4, 1, "div", 12);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 13);
    \u0275\u0275template(21, RoomBookingsTimelineComponent_div_21_Template, 3, 3, "div", 14)(22, RoomBookingsTimelineComponent_div_22_Template, 1, 2, "div", 15);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 16);
    \u0275\u0275template(25, RoomBookingsTimelineComponent_div_25_Template, 1, 2, "div", 17)(26, RoomBookingsTimelineComponent_div_26_Template, 1, 2, "div", 18);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275template(28, RoomBookingsTimelineComponent_ng_container_28_Template, 3, 4, "ng-container", 19);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275template(30, RoomBookingsTimelineComponent_div_30_Template, 1, 2, "div", 20);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_6_0;
    \u0275\u0275property("ngIf", ctx.timezone && ctx.tz);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 17, ctx.date))("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 19, ctx.is_today));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 23, \u0275\u0275pipeBind1(12, 21, ctx.date), "z", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_6_0 = \u0275\u0275pipeBind1(17, 27, ctx.spaces)) == null ? null : tmp_6_0.length) * ctx.block_width + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 29, ctx.spaces));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", ctx.block_range * ctx.block_height + "rem");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.hours);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(23, 31, ctx.show_time) && ctx.timeToOffset(ctx.now) < 100);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", ctx.hours);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(27, 33, ctx.spaces));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(29, 35, ctx.spaces));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(31, 37, ctx.show_time));
  }
}, dependencies: [NgForOf, NgIf, DateOptionsComponent, MatTooltip, MatRipple, RoomBookingSearchComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-timeline.component.css.map */"] });
var RoomBookingsTimelineComponent = _RoomBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsTimelineComponent, { className: "RoomBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-timeline.component.ts", lineNumber: 230 });
})();

// apps/concierge/src/app/day-view/room-approvals.component.ts
function RoomBookingsApprovalsComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "img", 13);
    \u0275\u0275elementStart(2, "p", 14);
    \u0275\u0275text(3, "No pending requests");
    \u0275\u0275elementEnd()();
  }
}
function RoomBookingsApprovalsComponent_div_17_span_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r2.date, "z", ctx_r2.tz));
  }
}
function RoomBookingsApprovalsComponent_div_17_img_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 29);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const space_r4 = \u0275\u0275readContextLet(1);
    \u0275\u0275property("source", space_r4 == null ? null : space_r4.images[0]);
  }
}
function RoomBookingsApprovalsComponent_div_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "space");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "space");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "p", 16);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275template(12, RoomBookingsApprovalsComponent_div_17_span_12_Template, 3, 5, "span", 17);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 18);
    \u0275\u0275template(14, RoomBookingsApprovalsComponent_div_17_img_14_Template, 1, 1, "img", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 20)(16, "div", 21)(17, "app-icon", 22);
    \u0275\u0275text(18, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 23);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 20)(22, "div", 21)(23, "app-icon", 22);
    \u0275\u0275text(24, "person");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 23);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(27, "div", 24)(28, "button", 25);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_div_17_Template_button_click_28_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(event_r2));
    });
    \u0275\u0275elementStart(29, "div");
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "app-icon", 26);
    \u0275\u0275text(32, "done");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "button", 27);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_div_17_Template_button_click_33_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(event_r2));
    });
    \u0275\u0275elementStart(34, "div");
    \u0275\u0275text(35);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "app-icon", 28);
    \u0275\u0275text(37, "close");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    const space_r5 = \u0275\u0275storeLet((event_r2.resources.length ? \u0275\u0275pipeBind1(3, 13, \u0275\u0275pipeBind1(2, 11, event_r2.resources[0] == null ? null : event_r2.resources[0].email)) : \u0275\u0275pipeBind1(5, 17, \u0275\u0275pipeBind1(4, 15, event_r2.mailbox))) || event_r2.system);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(event_r2.title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(10, 20, event_r2.date, "mediumDate", ctx_r2.tz), " ", \u0275\u0275pipeBind3(11, 24, event_r2.date, ctx_r2.time_format, ctx_r2.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r2.tz);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", space_r5);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (space_r5 == null ? null : space_r5.display_name) || (space_r5 == null ? null : space_r5.name) || "No Location", " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", (event_r2.organiser == null ? null : event_r2.organiser.name) || event_r2.host, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.status[event_r2.id] === "accept");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.status[event_r2.id] === "accept" ? "Approved" : "Approve", " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.status[event_r2.id] === "decline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r2.status[event_r2.id] === "decline" ? "Declined" : "Decline", " ");
  }
}
function RoomBookingsApprovalsComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275element(1, "div", 31)(2, "mat-spinner", 32);
    \u0275\u0275elementStart(3, "p", 33);
    \u0275\u0275text(4, "Processing...");
    \u0275\u0275elementEnd()();
  }
}
function RoomBookingsApprovalsComponent_button_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_button_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show = !ctx_r2.show);
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "chevron_left");
    \u0275\u0275elementEnd()();
  }
}
var _RoomBookingsApprovalsComponent = class _RoomBookingsApprovalsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  set show(value) {
    this._show = value;
    sessionStorage.setItem("PlaceOS.Concierge.show_room_approvals", `${value}`);
  }
  get show() {
    return this._show;
  }
  constructor(_state, _org, _settings) {
    this._state = _state;
    this._org = _org;
    this._settings = _settings;
    this._show = true;
    this.loading = false;
    this.status = {};
    this.search = new BehaviorSubject("");
    this.pending = this._state.pending;
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.filtered_pending = combineLatest([
      this._state.pending,
      this.search
    ]).pipe(map(([list, search]) => list.filter((event) => event.title.toLowerCase().includes(search.toLowerCase()) || event.host.toLowerCase().includes(search.toLowerCase()) || event.organiser?.name.toLowerCase().includes(search.toLowerCase()))));
  }
  ngOnInit() {
    this._show = sessionStorage.getItem("PlaceOS.Concierge.show_room_approvals") !== "false";
  }
  approve(event) {
    return __async(this, null, function* () {
      const system_id = this._org.binding("approvals");
      if (!system_id)
        return;
      const mod = getModule(system_id, "RoomBookingApproval", 1);
      if (!mod)
        return;
      this.loading = true;
      yield mod.execute("accept_event", [event.mailbox, event.id]).catch();
      this.loading = false;
      this.status[event.id] = "accept";
    });
  }
  reject(event) {
    return __async(this, null, function* () {
      const system_id = this._org.binding("approvals");
      if (!system_id)
        return;
      const mod = getModule(system_id, "RoomBookingApproval", 1);
      if (!mod)
        return;
      this.loading = true;
      yield mod.execute("decline_event", [event.mailbox, event.id]).catch();
      this.loading = false;
      this.status[event.id] = "decline";
    });
  }
};
_RoomBookingsApprovalsComponent.\u0275fac = function RoomBookingsApprovalsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingsApprovalsComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(SettingsService));
};
_RoomBookingsApprovalsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsApprovalsComponent, selectors: [["room-bookings-approvals"]], decls: 21, vars: 19, consts: [[1, "flex", "flex-col", "h-full", "overflow-hidden", "border-l", "border-base-200", "w-[20rem]"], [1, "flex", "items-center", "p-2", "justify-center", "border-b", "border-base-200", "space-x-2", "relative"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Hide Pending Approvals", "matTooltipPosition", "left", 1, "absolute", "top-3", "left-2", "bg-base-200", 3, "click"], [1, "flex-1", "py-3", "text-center"], [1, "border-b", "border-base-200", "relative", "-mt-px"], ["type", "text", "placeholder", "Search...", 1, "w-full", "py-4", "pr-4", "pl-10", 3, "ngModelChange", "ngModel"], [1, "absolute", "top-1/2", "left-2", "-translate-y-1/2", "text-2xl", "pointer-events-none"], [1, "flex-1", "overflow-auto", "p-3", "space-y-2"], ["class", "w-full h-full flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["class", "relative border border-base-300 p-2 w-full rounded", 4, "ngFor", "ngForOf"], ["class", "absolute bottom-0 left-0 right-0 top-14 p-2 flex flex-col items-center justify-center space-y-2", 4, "ngIf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-warning absolute top-3 -left-8 shadow text-warning-content", "matTooltip", "Show Pending Approvals", "matTooltipPosition", "left", 3, "click", 4, "ngIf"], [1, "w-full", "h-full", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["src", "assets/icons/no-pending.svg"], [1, "opacity-30"], [1, "relative", "border", "border-base-300", "p-2", "w-full", "rounded"], [1, "opacity-30", "text-xs", "mb-2"], [4, "ngIf"], [1, "w-64", "h-32", "overflow-hidden", "mb-2", "bg-base-200"], ["auth", "", "class", "object-cover min-w-full min-h-full", 3, "source", 4, "ngIf"], [1, "flex", "items-center", "space-x-2", "mb-2"], [1, "h-8", "w-8", "bg-base-200", "rounded-full", "flex", "items-center", "justify-center"], [1, "text-xl"], [1, "flex-1", "text-xs"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "border-success", "bg-success-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "click", "disabled"], [1, "text-success"], ["btn", "", "matRipple", "", 1, "border-error", "bg-error-light", "text-black", "flex", "flex-1", "items-center", "space-x-2", 3, "click", "disabled"], [1, "text-error"], ["auth", "", 1, "object-cover", "min-w-full", "min-h-full", 3, "source"], [1, "absolute", "bottom-0", "left-0", "right-0", "top-14", "p-2", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "absolute", "inset-0", "bg-base-100", "opacity-80", "z-0"], ["diameter", "32"], [1, "relative", "z-10"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Show Pending Approvals", "matTooltipPosition", "left", 1, "bg-warning", "absolute", "top-3", "-left-8", "shadow", "text-warning-content", 3, "click"]], template: function RoomBookingsApprovalsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function RoomBookingsApprovalsComponent_Template_button_click_2_listener() {
      return ctx.show = !ctx.show;
    });
    \u0275\u0275elementStart(3, "app-icon");
    \u0275\u0275text(4, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h3", 3);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 4)(10, "input", 5);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsApprovalsComponent_Template_input_ngModelChange_10_listener($event) {
      return ctx.search.next($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "app-icon", 6);
    \u0275\u0275text(13, " search ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 7);
    \u0275\u0275template(15, RoomBookingsApprovalsComponent_div_15_Template, 4, 0, "div", 8);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275template(17, RoomBookingsApprovalsComponent_div_17_Template, 38, 28, "div", 9);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(19, RoomBookingsApprovalsComponent_div_19_Template, 5, 0, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, RoomBookingsApprovalsComponent_button_20_Template, 3, 0, "button", 11);
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_3_0;
    \u0275\u0275styleProp("width", ctx.show ? "" : "0px");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate2(" Pending Approval (", ((tmp_1_0 = \u0275\u0275pipeBind1(7, 9, ctx.filtered_pending)) == null ? null : tmp_1_0.length) || "0", " of ", ((tmp_1_0 = \u0275\u0275pipeBind1(8, 11, ctx.pending)) == null ? null : tmp_1_0.length) || "0", ") ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(11, 13, ctx.search));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngIf", !((tmp_3_0 = \u0275\u0275pipeBind1(16, 15, ctx.filtered_pending)) == null ? null : tmp_3_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(18, 17, ctx.filtered_pending));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.show);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatTooltip, MatProgressSpinner, MatRipple, IconComponent, AuthenticatedImageDirective, AsyncPipe, DatePipe, SpacePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  height: 100%;\n}\n/*# sourceMappingURL=room-approvals.component.css.map */"] });
var RoomBookingsApprovalsComponent = _RoomBookingsApprovalsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsApprovalsComponent, { className: "RoomBookingsApprovalsComponent", filePath: "apps/concierge/src/app/day-view/room-approvals.component.ts", lineNumber: 177 });
})();

// apps/concierge/src/app/day-view/room-week-timeline.component.ts
var _c06 = () => [];
function RoomWeekBookingsTimelineComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1, " Timezone of the building is displayed and is different from your local timezone. ");
    \u0275\u0275elementEnd();
  }
}
function RoomWeekBookingsTimelineComponent_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1, " This Week ");
    \u0275\u0275elementEnd();
  }
}
function RoomWeekBookingsTimelineComponent_div_18_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1, " Today ");
    \u0275\u0275elementEnd();
  }
}
function RoomWeekBookingsTimelineComponent_div_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RoomWeekBookingsTimelineComponent_div_18_div_4_Template, 2, 0, "div", 20);
    \u0275\u0275element(5, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 2, date_r1, "EEE, MMM d", ctx_r1.tz), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.isToday(date_r1));
  }
}
function RoomWeekBookingsTimelineComponent_div_25_button_1_span_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(2, 1, event_r4.date_end, "z", ctx_r1.tz));
  }
}
function RoomWeekBookingsTimelineComponent_div_25_button_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function RoomWeekBookingsTimelineComponent_div_25_button_1_Template_button_click_0_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewEvent(event_r4));
    });
    \u0275\u0275element(1, "div", 26);
    \u0275\u0275elementStart(2, "div", 27)(3, "div", 28);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 29);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275pipe(8, "date");
    \u0275\u0275template(9, RoomWeekBookingsTimelineComponent_div_25_button_1_span_9_Template, 3, 5, "span", 30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 31);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 31);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "user");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r1.typeColor(event_r4.type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", event_r4.state === "done");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.title, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind3(7, 10, event_r4.date, ctx_r1.time_format, ctx_r1.tz), " \u2013 ", \u0275\u0275pipeBind3(8, 14, event_r4.date_end, ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.tz);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4.system == null ? null : event_r4.system.display_name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ((tmp_11_0 = \u0275\u0275pipeBind1(14, 18, event_r4.host)) == null ? null : tmp_11_0.name) || event_r4.host, " ");
  }
}
function RoomWeekBookingsTimelineComponent_div_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275template(1, RoomWeekBookingsTimelineComponent_div_25_button_1_Template, 15, 20, "button", 24);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r1.events)[date_r5] || \u0275\u0275pureFunction0(3, _c06));
  }
}
var _RoomWeekBookingsTimelineComponent = class _RoomWeekBookingsTimelineComponent extends AsyncHandler {
  get _week_start() {
    return this._settings.get("app.week_start");
  }
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building.timezone : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    const tz_offset = getTimezoneOffsetString(tz);
    return tz_offset === this._local_tz ? "" : tz_offset;
  }
  get timezone_offset() {
    return getTimezoneOffsetInMinutes(this.timezone || Intl.DateTimeFormat().resolvedOptions().timeZone);
  }
  get now() {
    return startOfMinute(Date.now()).valueOf();
  }
  isToday(date) {
    return isSameDay(date, Date.now());
  }
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _dialog, _settings, _org) {
    super();
    this._state = _state;
    this._dialog = _dialog;
    this._settings = _settings;
    this._org = _org;
    this.hours = Array.from({ length: 24 }, (_, i) => i);
    this.ui_options = this._state.options;
    this.date = this._state.date;
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
    this.days = combineLatest([
      this.date,
      this._org.active_building
    ]).pipe(map(([d]) => new Array(7).fill(0).map((_, idx) => addDays(setHours(startOfWeek(d, { weekStartsOn: this._week_start }), 12 - Math.floor(this.timezone_offset / 60)), idx).valueOf())));
    this.this_week = this.date.pipe(map((d) => isSameWeek(d, Date.now())));
    this._data_pipe = new DatePipe("en");
    this.events = combineLatest([
      this.days,
      this._state.filtered,
      this._state.zones
    ]).pipe(map(([day_list, events, zones]) => {
      if (zones.length) {
        events = events.filter((_) => _.system?.zones.find((_2) => zones.includes(_2)));
      }
      const map2 = {};
      for (const date of day_list) {
        const date_value = this._data_pipe.transform(date, "yyyy-MM-dd", this.tz);
        map2[date] = events.filter((event) => {
          const event_date_value = this._data_pipe.transform(event.date, "yyyy-MM-dd", this.tz);
          return date_value === event_date_value && !event.is_system_event;
        });
      }
      return map2;
    }), shareReplay(1));
    this.event_max_count = this.events.pipe(map((e) => {
      let length = 0;
      for (const date in e) {
        if (e[date].length > length)
          length = e[date].length;
      }
      return length;
    }));
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.edit = (e) => this._state.newBooking(e);
    this.setDate = (d) => this._state.setDate(d);
  }
  ngOnInit() {
    this.subscription("poll", this._state.poll());
  }
  typeColor(type) {
    return this.types.find((_) => _.id === type)?.color || "#EEE";
  }
  viewEvent(event, space_id, scroll_to = false) {
    if (event.is_system_event)
      return;
    const ref = this._dialog.open(EventDetailsModalComponent, {
      data: event
    });
    ref.componentInstance.hide_edit = !this._settings.get("app.events.allow_edit");
    this.subscription("remove", ref.componentInstance.remove.subscribe(() => this.remove(event, space_id)));
    this.subscription("edit", ref.componentInstance.edit.subscribe(() => this.edit(event)));
    this.subscription("actions", ref.componentInstance.action.subscribe((action) => __async(this, null, function* () {
      if (!action.includes("breakdown"))
        return;
      const ref2 = this._dialog.open(SetupBreakdownModalComponent, {
        data: event
      });
      const data = yield ref2.afterClosed().toPromise();
      if (data)
        this._state.replace(data);
    })));
  }
  remove(item, space_id) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy " + this.time_format)}`;
      const resource_name = item.space?.display_name;
      const content = `Delete the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `Delete booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Requesting booking deletion...");
      yield declineEvent(item.id, {
        calendar: item.calendar || item.mailbox || item.host,
        system_id: space_id
      }).toPromise().catch((e) => {
        notifyError(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully deleted booking.");
      this._dialog.closeAll();
    });
  }
};
_RoomWeekBookingsTimelineComponent.\u0275fac = function RoomWeekBookingsTimelineComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomWeekBookingsTimelineComponent)(\u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_RoomWeekBookingsTimelineComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomWeekBookingsTimelineComponent, selectors: [["room-week-bookings-timeline"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 37, consts: [["class", "mx-2 mt-2 p-2 w-[calc(100%-1rem)] bg-info text-info-content rounded-lg text-center text-xs", 4, "ngIf"], [1, "relative", "flex", "items-center", "justify-center", "p-2", "space-x-2", "border-b", "border-base-200", "z-20"], [3, "dateChange", "date", "step", "is_new", "hide_today"], ["class", "absolute top-1/2 -translate-y-1/2 left-4 text-info text-sm", 4, "ngIf"], [1, "absolute", "top-1/2", "-translate-y-1/2", "right-8"], [3, "selected"], ["timeline", "", 1, "grid", "overflow-auto", "w-full", "h-1/2", "flex-1", "z-0"], ["timezone", "", 1, "sticky", "top-0", "left-0", "z-30", "bg-base-100", "flex", "items-center", "justify-center"], [1, "text-xs", "opacity-30"], [1, "absolute", "h-2", "w-px", "right-0", "bottom-0", "bg-base-300"], [1, "absolute", "w-2", "h-px", "right-0", "bottom-0", "bg-base-300"], ["day-headers", "", 1, "sticky", "top-0", "z-20", "border-b", "border-base-300", "flex", "items-center", "bg-base-100", "min-w-[calc(100%-3rem)]"], ["class", "relative flex-1 h-full min-w-48 flex flex-col items-center justify-center leading-tight", 4, "ngFor", "ngForOf"], ["empty-block", "", 1, "sticky", "left-0", "z-10", "border-r", "border-base-300", "bg-base-100", "min-h-full"], ["date-blocks", "", 1, "relative", "overflow-hidden", "min-w-[calc(100%-3rem)]", "flex"], ["class", "flex-1 min-w-48 overflow-hidden p-2 border-r border-base-200", 4, "ngFor", "ngForOf"], [1, "mx-2", "mt-2", "p-2", "w-[calc(100%-1rem)]", "bg-info", "text-info-content", "rounded-lg", "text-center", "text-xs"], [1, "absolute", "top-1/2", "-translate-y-1/2", "left-4", "text-info", "text-sm"], [1, "relative", "flex-1", "h-full", "min-w-48", "flex", "flex-col", "items-center", "justify-center", "leading-tight"], [1, "truncate"], ["class", "text-info text-xs absolute bottom-1 left-1/2 -translate-x-1/2", 4, "ngIf"], [1, "absolute", "h-2", "w-px", "-left-px", "bottom-0", "bg-base-300"], [1, "text-info", "text-xs", "absolute", "bottom-1", "left-1/2", "-translate-x-1/2"], [1, "flex-1", "min-w-48", "overflow-hidden", "p-2", "border-r", "border-base-200"], ["matRipple", "", "class", "flex p-2 w-full space-x-2 hover:bg-base-200 rounded text-left", 3, "click", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "flex", "p-2", "w-full", "space-x-2", "hover:bg-base-200", "rounded", "text-left", 3, "click"], [1, "h-2", "w-2", "rounded-full", "my-1.5"], [1, "flex-1", "w-1/2"], [1, "text-sm", "truncate"], [1, "text-xs", "opacity-60", "flex-1"], [4, "ngIf"], [1, "text-xs", "truncate", "opacity-30"]], template: function RoomWeekBookingsTimelineComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RoomWeekBookingsTimelineComponent_div_0_Template, 2, 0, "div", 0);
    \u0275\u0275elementStart(1, "div", 1)(2, "date-options", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("dateChange", function RoomWeekBookingsTimelineComponent_Template_date_options_dateChange_2_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, RoomWeekBookingsTimelineComponent_div_4_Template, 2, 0, "div", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementStart(6, "div", 4)(7, "room-booking-search", 5);
    \u0275\u0275listener("selected", function RoomWeekBookingsTimelineComponent_Template_room_booking_search_selected_7_listener($event) {
      return ctx.viewEvent($event, $event.system == null ? null : $event.system.id, true);
    });
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 6)(9, "div", 7)(10, "div", 8);
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "div", 9)(15, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 11);
    \u0275\u0275pipe(17, "async");
    \u0275\u0275template(18, RoomWeekBookingsTimelineComponent_div_18_Template, 6, 6, "div", 12);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275element(20, "div", 13);
    \u0275\u0275pipe(21, "async");
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementStart(23, "div", 14);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275template(25, RoomWeekBookingsTimelineComponent_div_25_Template, 3, 4, "div", 15);
    \u0275\u0275pipe(26, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    \u0275\u0275property("ngIf", ctx.timezone && ctx.tz);
    \u0275\u0275advance(2);
    \u0275\u0275property("date", \u0275\u0275pipeBind1(3, 15, ctx.date))("step", 7)("is_new", true)("hide_today", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 17, ctx.this_week));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(13, 21, \u0275\u0275pipeBind1(12, 19, ctx.date), "z", ctx.tz), " ");
    \u0275\u0275advance(5);
    \u0275\u0275styleProp("width", ((tmp_7_0 = \u0275\u0275pipeBind1(17, 25, ctx.days)) == null ? null : tmp_7_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(19, 27, ctx.days));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", \u0275\u0275pipeBind1(21, 29, ctx.event_max_count) ? \u0275\u0275pipeBind1(22, 31, ctx.event_max_count) * 5.375 + "rem" : "");
    \u0275\u0275advance(3);
    \u0275\u0275styleProp("width", ((tmp_10_0 = \u0275\u0275pipeBind1(24, 33, ctx.days)) == null ? null : tmp_10_0.length) * 12 + "rem");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(26, 35, ctx.days));
  }
}, dependencies: [NgForOf, NgIf, DateOptionsComponent, MatRipple, RoomBookingSearchComponent, AsyncPipe, DatePipe, UserPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  max-width: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-columns: 4rem auto;\n  grid-template-rows: 3.5rem auto;\n}\n/*# sourceMappingURL=room-week-timeline.component.css.map */"] });
var RoomWeekBookingsTimelineComponent = _RoomWeekBookingsTimelineComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomWeekBookingsTimelineComponent, { className: "RoomWeekBookingsTimelineComponent", filePath: "apps/concierge/src/app/day-view/room-week-timeline.component.ts", lineNumber: 173 });
})();

// apps/concierge/src/app/day-view/room-bookings.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function RoomBookingsComponent_mat_option_21_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 30);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 31);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_4_0;
    const level_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_4_0 = \u0275\u0275pipeBind1(2, 1, level_r2.parent_id)) == null ? null : tmp_4_0.display_name, " ");
  }
}
function RoomBookingsComponent_mat_option_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27)(1, "div", 28);
    \u0275\u0275template(2, RoomBookingsComponent_mat_option_21_div_2_Template, 5, 3, "div", 29);
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
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function RoomBookingsComponent_ng_container_23_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 15);
  }
}
function RoomBookingsComponent_ng_container_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, RoomBookingsComponent_ng_container_23_div_1_Template, 1, 0, "div", 32);
    \u0275\u0275elementStart(2, "mat-slide-toggle", 33);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_ng_container_23_Template_mat_slide_toggle_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.updateUIOptions({ show_overflow: $event }));
    });
    \u0275\u0275elementStart(4, "div", 34);
    \u0275\u0275text(5, "Setup / Breakdown");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r2.use_region);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(3, 2, ctx_r2.ui_options)) == null ? null : tmp_3_0.show_overflow);
  }
}
function RoomBookingsComponent_mat_checkbox_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_mat_checkbox_34_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const type_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(type_r6.id, !$event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", !ctx_r2.type_list.includes(type_r6.id));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r6.name, " ");
  }
}
function RoomBookingsComponent_For_37_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 37);
    \u0275\u0275listener("click", function RoomBookingsComponent_For_37_div_0_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const type_r8 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setFilter(type_r8.id, true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const type_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", type_r8.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(type_r8.name);
  }
}
function RoomBookingsComponent_For_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, RoomBookingsComponent_For_37_div_0_Template, 7, 3, "div", 35);
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngIf", !ctx_r2.type_list.includes(type_r8.id));
  }
}
function RoomBookingsComponent_room_bookings_timeline_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-timeline", 38);
  }
}
function RoomBookingsComponent_room_week_bookings_timeline_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-week-bookings-timeline", 38);
  }
}
function RoomBookingsComponent_room_bookings_approvals_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "room-bookings-approvals", 39);
  }
}
var EMPTY = [];
var _RoomBookingsComponent = class _RoomBookingsComponent extends AsyncHandler {
  get type_list() {
    return this._state.filters.hide_type || EMPTY;
  }
  get has_approvals() {
    return this._org.binding("approvals");
  }
  get allow_setup_breakdown() {
    return this._settings.get("app.events.allow_setup_breakdown");
  }
  get use_region() {
    return this._settings.get("app.use_region");
  }
  constructor(_org, _state, _router, _route, _settings) {
    super();
    this._org = _org;
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._settings = _settings;
    this.zones = this._state.zones;
    this.period = this._state.period;
    this.ui_options = this._state.options;
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this.use_region ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
    this.updateZones = (z) => {
      console.warn("Update Zones:", z);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setZones(z);
    };
    this.updateUIOptions = (o) => this._state.setUIOptions(o);
    this.setPeriod = (p) => {
      console.warn("Set Period:", p);
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: p },
        queryParamsHandling: "merge"
      });
      this._state.setPeriod(p);
    };
    this.newBooking = (d) => this._state.newBooking(d);
    this.types = [
      { id: "internal", name: "Internal", color: "#D81B60" },
      { id: "external", name: "External", color: "#1E88E5" },
      { id: "cancelled", name: "Cancelled", color: "#eeeeee" }
    ];
  }
  ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("period")) {
        this._state.setPeriod(params.get("period") === "day" ? "day" : "week");
      }
      if (this.use_region)
        return;
      if (params.has("zone_ids")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this.updateZones(zones);
        }
      }
    }));
    this.subscription("levels", this._org.active_levels.pipe(debounceTime(300)).subscribe((levels) => __async(this, null, function* () {
      if (this.use_region)
        return;
      const zones = (yield this.zones.pipe(take(1)).toPromise()).filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!zones.length && levels.length) {
        zones.push(levels[0].id);
      }
      this.updateZones(zones);
    })));
    this.subscription("region", this._org.active_region.pipe(filter((_) => !!_)).subscribe((_) => __async(this, null, function* () {
      const zones = yield this.zones.pipe(take(1)).toPromise();
      if (zones.length)
        return;
      this.updateZones([_.id]);
    })));
  }
  setFilter(id, value) {
    const filters = this._state.filters;
    let hide_type = filters.hide_type || [];
    hide_type = hide_type.filter((i) => i !== id);
    if (value)
      hide_type.push(id);
    this._state.setFilters({ hide_type });
  }
};
_RoomBookingsComponent.\u0275fac = function RoomBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoomBookingsComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(EventsStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(SettingsService));
};
_RoomBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoomBookingsComponent, selectors: [["room-bookings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 44, vars: 19, consts: [["menu", "matMenu"], [1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden", "pl-8"], [1, "flex", "items-center", "w-full", "py-4", "pr-8", "space-x-4"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "w-full", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-52"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "border-l", "h-full", "ml-8", "mr-4"], [1, "flex", "items-center", "space-x-2", "max-w-[calc(100%-16rem)]", "flex-1"], ["btn", "", "matRipple", "", 1, "inverse", 3, "matMenuTriggerFor"], [1, "mx-2"], [1, ""], [1, "flex", "flex-col", "space-y-2", "overflow-hidden", "w-48"], [3, "ngModel", "ngModelChange", 4, "ngFor", "ngForOf"], [1, "flex", "items-center", "overflow-x-auto", "flex-1", "w-px", "space-x-2", "px-2"], [1, "flex", "items-center", "border", "border-base-200", "rounded-3xl"], [1, "flex", "w-full", "flex-1", "h-px", "border-t", "mt-4", "border-base-200"], ["class", "relative flex-1 w-1/2 z-0", 4, "ngIf"], ["class", "relative z-10", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["class", "border-l h-full ml-8 mr-4", 4, "ngIf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], ["class", "flex items-center border border-base-200 rounded-3xl", 4, "ngIf"], [1, "h-4", "w-4", "m-2", "rounded-full"], ["icon", "", "matRipple", "", 3, "click"], [1, "relative", "flex-1", "w-1/2", "z-0"], [1, "relative", "z-10"]], template: function RoomBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "h2", 3);
    \u0275\u0275text(3, "Room Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "div", 4);
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "mat-select", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setPeriod($event));
    });
    \u0275\u0275elementStart(8, "mat-option", 7);
    \u0275\u0275text(9, "Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 8);
    \u0275\u0275text(11, "Week");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "button", 9);
    \u0275\u0275listener("click", function RoomBookingsComponent_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.newBooking());
    });
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14, "New Booking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "app-icon");
    \u0275\u0275text(16, "add");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div", 10)(18, "mat-form-field", 11)(19, "mat-select", 12);
    \u0275\u0275pipe(20, "async");
    \u0275\u0275listener("ngModelChange", function RoomBookingsComponent_Template_mat_select_ngModelChange_19_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateZones($event));
    });
    \u0275\u0275template(21, RoomBookingsComponent_mat_option_21_Template, 5, 3, "mat-option", 13);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(23, RoomBookingsComponent_ng_container_23_Template, 6, 4, "ng-container", 14);
    \u0275\u0275element(24, "div", 15);
    \u0275\u0275elementStart(25, "div", 16)(26, "button", 17)(27, "app-icon");
    \u0275\u0275text(28, "filter_list");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 18);
    \u0275\u0275text(30, "Filters");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "mat-menu", 19, 0)(33, "div", 20);
    \u0275\u0275template(34, RoomBookingsComponent_mat_checkbox_34_Template, 2, 2, "mat-checkbox", 21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(35, "div", 22);
    \u0275\u0275repeaterCreate(36, RoomBookingsComponent_For_37_Template, 1, 1, "div", 23, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(38, "div", 24);
    \u0275\u0275template(39, RoomBookingsComponent_room_bookings_timeline_39_Template, 1, 0, "room-bookings-timeline", 25);
    \u0275\u0275pipe(40, "async");
    \u0275\u0275template(41, RoomBookingsComponent_room_week_bookings_timeline_41_Template, 1, 0, "room-week-bookings-timeline", 25);
    \u0275\u0275pipe(42, "async");
    \u0275\u0275template(43, RoomBookingsComponent_room_bookings_approvals_43_Template, 1, 0, "room-bookings-approvals", 26);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const menu_r9 = \u0275\u0275reference(32);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(7, 9, ctx.period));
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(20, 11, ctx.zones));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(22, 13, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.allow_setup_breakdown);
    \u0275\u0275advance(3);
    \u0275\u0275property("matMenuTriggerFor", menu_r9);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ctx.types);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx.types);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(40, 15, ctx.period) === "day");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(42, 17, ctx.period) === "week");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.has_approvals);
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, MatFormField, MatSelect, MatOption, MatCheckbox, MatSlideToggle, MatMenu, MatMenuTrigger, MatRipple, IconComponent, RoomBookingsTimelineComponent, RoomBookingsApprovalsComponent, RoomWeekBookingsTimelineComponent, AsyncPipe, BuildingPipe] });
var RoomBookingsComponent = _RoomBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoomBookingsComponent, { className: "RoomBookingsComponent", filePath: "apps/concierge/src/app/day-view/room-bookings.component.ts", lineNumber: 145 });
})();

// apps/concierge/src/app/day-view/new-dayview.component.ts
var _c07 = ["app-new-dayview", ""];
var _NewDayViewComponent = class _NewDayViewComponent {
};
_NewDayViewComponent.\u0275fac = function NewDayViewComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewDayViewComponent)();
};
_NewDayViewComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDayViewComponent, selectors: [["", "app-new-dayview", ""]], attrs: _c07, decls: 5, vars: 0, consts: [[1, "flex", "flex-1", "h-px"], [1, "relative", "flex", "flex-col", "flex-1", "w-1/2", "h-full"]], template: function NewDayViewComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "room-bookings");
    \u0275\u0275elementEnd()();
  }
}, dependencies: [ApplicationTopbarComponent, ApplicationSidebarComponent, RoomBookingsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n@media print {\n  [_nghost-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=new-dayview.component.css.map */"] });
var NewDayViewComponent = _NewDayViewComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDayViewComponent, { className: "NewDayViewComponent", filePath: "apps/concierge/src/app/day-view/new-dayview.component.ts", lineNumber: 32 });
})();

// apps/concierge/src/app/day-view/day-view.module.ts
var ROUTES = [
  { path: "", component: DayViewComponent },
  { path: "new", component: NewDayViewComponent }
];
var _DayViewModule = class _DayViewModule {
};
_DayViewModule.\u0275fac = function DayViewModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DayViewModule)();
};
_DayViewModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DayViewModule });
_DayViewModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedSpacesModule,
  SharedUsersModule,
  SharedCateringModule,
  RouterModule.forChild(ROUTES)
] });
var DayViewModule = _DayViewModule;
export {
  DayViewModule
};
//# sourceMappingURL=day-view.module-5IN5XSRN.js.map
