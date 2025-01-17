import "./chunk-DBMZBDCA.js";
import "./chunk-OCNVS36S.js";
import "./chunk-YJIFACNB.js";
import "./chunk-4Q6FM26T.js";
import {
  ActionIconComponent,
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Clipboard,
  CommonModule,
  CustomTooltipComponent,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  LevelPipe,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatOption,
  MatPrefix,
  MatProgressBar,
  MatProgressSpinner,
  MatRipple,
  MatSelect,
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
  SearchbarComponent,
  SidebarComponent,
  SimpleTableComponent,
  UIModule,
  UserAvatarComponent,
  UserSearchFieldComponent,
  __async,
  __spreadProps,
  __spreadValues,
  checkinBooking,
  combineLatest,
  endOfDay,
  filter,
  first,
  getUnixTime,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  queryBookings,
  randomString,
  saveBooking,
  searchStaff,
  shareReplay,
  showMetadata,
  startOfDay,
  switchMap,
  take,
  timePeriodsIntersect,
  updateMetadata,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction4,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-LCTDH2CE.js";

// apps/concierge/src/app/staff/staff-state.service.ts
var _StaffStateService = class _StaffStateService extends AsyncHandler {
  constructor(_org) {
    super();
    this._org = _org;
    this._onsite = {};
    this._events = {};
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this._users = new BehaviorSubject([]);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.users = this._filters.asObservable();
    this.filtered_users = combineLatest([
      this._search,
      this._users,
      this._filters
    ]).pipe(map((details) => {
      const [filter2, users, options] = details;
      return users.filter((i) => (!filter2 || i.name.toLowerCase().includes(filter2) || i.email.toLowerCase().includes(filter2)) && (!options.only_onsite || this._onsite[i.email]));
    }));
    this.user_events = combineLatest([this._filters]).pipe(switchMap((_) => __async(this, null, function* () {
      this._loading.next(true);
      const bookings = yield queryBookings({
        period_start: getUnixTime(startOfDay(Date.now())),
        period_end: getUnixTime(endOfDay(Date.now())),
        type: "staff"
      }).toPromise();
      const checkin_map = {};
      const now = (/* @__PURE__ */ new Date()).valueOf();
      for (const bkn of bookings) {
        if (timePeriodsIntersect(now, now, bkn.date, bkn.date + bkn.duration * 60 * 1e3)) {
          checkin_map[bkn.asset_id] = bkn.checked_in;
          this._events[bkn.asset_id] = bkn;
        }
      }
      this._onsite = checkin_map;
      this._loading.next(false);
      return checkin_map;
    })), shareReplay(1));
    this.loadUsers();
    this.user_events.subscribe();
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  startPolling(delay = 30 * 1e3) {
    this.setFilters(this._filters.getValue());
    this.interval("poll", () => this.setFilters(this._filters.getValue()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  checkin(user) {
    return __async(this, null, function* () {
      const result = yield saveBooking({
        booking_start: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3),
        booking_end: Math.floor(endOfDay(/* @__PURE__ */ new Date()).valueOf() / 1e3),
        asset_id: user.email,
        title: "Checked-in Onsite",
        description: this._org.building.display_name || this._org.building.name,
        zones: [this._org.building.id],
        booking_type: "staff"
      }).toPromise();
      yield checkinBooking(result.id, true).toPromise();
      this._events[user.email] = result;
      this._onsite[user.email] = true;
    });
  }
  checkout(user) {
    return __async(this, null, function* () {
      const event = this._events[user.email];
      if (event) {
        const result = yield saveBooking(__spreadProps(__spreadValues({}, event.toJSON()), {
          booking_end: Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3)
        })).toPromise();
        yield checkinBooking(result.id, false).toPromise();
        this._events[user.email] = result;
        this._onsite[user.email] = false;
      }
    });
  }
  loadUsers() {
    return __async(this, null, function* () {
      const user_list = yield searchStaff("").toPromise();
      user_list.sort((a, b) => a.name.localeCompare(b.name));
      this._users.next(user_list);
    });
  }
};
_StaffStateService.\u0275fac = function StaffStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffStateService)(\u0275\u0275inject(OrganisationService));
};
_StaffStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _StaffStateService, factory: _StaffStateService.\u0275fac, providedIn: "root" });
var StaffStateService = _StaffStateService;

// apps/concierge/src/app/staff/staff-topbar.component.ts
function StaffTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
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
var _StaffTopbarComponent = class _StaffTopbarComponent extends AsyncHandler {
  constructor(_state, _org, _route, _router) {
    super();
    this._state = _state;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this.zones = [];
    this.levels = this._org.active_levels;
    this.filters = this._state.filters;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (filters) => this._state.setFilters(filters);
    this.setSearch = (str) => this._state.setSearchString(str);
    this.updateZones = (zones) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: zones.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ zones });
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
      this.setSearch("");
    });
  }
};
_StaffTopbarComponent.\u0275fac = function StaffTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffTopbarComponent)(\u0275\u0275directiveInject(StaffStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_StaffTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffTopbarComponent, selectors: [["staff-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 7, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2", 3, "ngModelChange", "ngModel"], [1, "text-xs"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "value"]], template: function StaffTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275twoWayListener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(3, StaffTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-slide-toggle", 4);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275listener("ngModelChange", function StaffTopbarComponent_Template_mat_slide_toggle_ngModelChange_5_listener($event) {
      return ctx.setFilters({ only_onsite: $event });
    });
    \u0275\u0275elementStart(7, "div", 5);
    \u0275\u0275text(8, "Onsite Only");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "div", 6);
    \u0275\u0275elementStart(10, "searchbar", 7);
    \u0275\u0275listener("modelChange", function StaffTopbarComponent_Template_searchbar_modelChange_10_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 3, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_2_0 = \u0275\u0275pipeBind1(6, 5, ctx.filters)) == null ? null : tmp_2_0.only_onsite);
  }
}, dependencies: [NgForOf, NgControlStatus, NgModel, SearchbarComponent, MatFormField, MatSelect, MatOption, MatSlideToggle, AsyncPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=staff-topbar.component.css.map */"] });
var StaffTopbarComponent = _StaffTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffTopbarComponent, { className: "StaffTopbarComponent", filePath: "apps/concierge/src/app/staff/staff-topbar.component.ts", lineNumber: 52 });
})();

// apps/concierge/src/app/staff/staff-details.component.ts
function StaffDetailsComponent_div_0_div_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1, "Onsite");
    \u0275\u0275elementEnd();
  }
}
function StaffDetailsComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "a-user-avatar", 2);
    \u0275\u0275elementStart(2, "div", 3)(3, "div", 4);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 5);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(7, StaffDetailsComponent_div_0_div_7_Template, 2, 0, "div", 6);
    \u0275\u0275elementStart(8, "div", 7)(9, "action-icon", 8);
    \u0275\u0275listener("click", function StaffDetailsComponent_div_0_Template_action_icon_click_9_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onsite ? ctx_r1.checkout() : ctx_r1.checkin());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "a", 9)(11, "app-icon");
    \u0275\u0275text(12, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 10)(14, "app-icon");
    \u0275\u0275text(15, "call");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("user", ctx_r1.user);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.user == null ? null : ctx_r1.user.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.user == null ? null : ctx_r1.user.email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.onsite);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ctx_r1.onsite ? "Checkout Staff" : "Checkin Staff")("loading", ctx_r1.loading)("content", ctx_r1.onsite ? "event_busy" : "event_available");
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + (ctx_r1.user == null ? null : ctx_r1.user.email), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.email));
    \u0275\u0275advance(3);
    \u0275\u0275property("href", "tel:" + (ctx_r1.user == null ? null : ctx_r1.user.phone), \u0275\u0275sanitizeUrl);
    \u0275\u0275attribute("disabled", !(ctx_r1.user == null ? null : ctx_r1.user.phone));
  }
}
var _StaffDetailsComponent = class _StaffDetailsComponent {
  constructor(_state) {
    this._state = _state;
    this.checkin = () => __async(this, null, function* () {
      this.loading = true;
      yield this._state.checkin(this.user).catch((e) => notifyError("Error checking in Staff member"));
      this.loading = false;
    });
    this.checkout = () => __async(this, null, function* () {
      this.loading = true;
      yield this._state.checkout(this.user).catch((e) => notifyError("Error checking out Staff member"));
      this.loading = false;
    });
  }
};
_StaffDetailsComponent.\u0275fac = function StaffDetailsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffDetailsComponent)(\u0275\u0275directiveInject(StaffStateService));
};
_StaffDetailsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffDetailsComponent, selectors: [["staff-details"]], inputs: { user: "user", onsite: "onsite" }, decls: 1, vars: 1, consts: [["class", "w-full flex items-center px-4 py-2 bg-base-100 border-b border-base-200 hover:opacity-80", "details", "", 4, "ngIf"], ["details", "", 1, "w-full", "flex", "items-center", "px-4", "py-2", "bg-base-100", "border-b", "border-base-200", "hover:opacity-80"], [3, "user"], [1, "flex", "flex-col", "flex-1"], [1, "px-2"], [1, "px-2", "text-xs", "text-opacity-50"], ["class", "text-xs opacity-50 px-4", 4, "ngIf"], [1, "flex", "items-center"], [3, "click", "matTooltip", "loading", "content"], ["icon", "", "matRipple", "", "matTooltip", "Email Staff", 3, "href"], ["icon", "", "matRipple", "", "matTooltip", "Phone Staff", 3, "href"], [1, "text-xs", "opacity-50", "px-4"]], template: function StaffDetailsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, StaffDetailsComponent_div_0_Template, 16, 11, "div", 0);
  }
  if (rf & 2) {
    \u0275\u0275property("ngIf", ctx.user);
  }
}, dependencies: [NgIf, MatTooltip, MatRipple, ActionIconComponent, IconComponent, UserAvatarComponent] });
var StaffDetailsComponent = _StaffDetailsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffDetailsComponent, { className: "StaffDetailsComponent", filePath: "apps/concierge/src/app/staff/staff-details.component.ts", lineNumber: 54 });
})();

// apps/concierge/src/app/staff/staff-listing.component.ts
var _c0 = ["container"];
function StaffListingComponent_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function StaffListingComponent_div_1_Template_div_click_0_listener() {
      const group_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.scrollTo(group_r3));
    });
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const group_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("disabled", \u0275\u0275pipeBind1(1, 5, ctx_r3.user_list)[group_r3].length <= 0)("active", group_r3 === ctx_r3.active_group);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", group_r3, " ");
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "staff-details", 12);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const i_r6 = ctx.index;
    const group_r7 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275property("id", "letter-" + group_r7 + "-" + i_r6)("user", user_r5)("onsite", \u0275\u0275pipeBind1(1, 3, ctx_r3.events) ? \u0275\u0275pipeBind1(2, 5, ctx_r3.events)[user_r5.email] : false);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_staff_details_3_Template, 3, 7, "staff-details", 11);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("id", "letter-" + (group_r7 === "#" ? "0" : group_r7));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", group_r7, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 3, ctx_r3.user_list)[group_r7]);
  }
}
function StaffListingComponent_ng_container_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StaffListingComponent_ng_container_4_ng_container_1_ng_container_1_Template, 5, 5, "ng-container", 9);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const group_r7 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(2, 1, ctx_r3.user_list)[group_r7].length);
  }
}
function StaffListingComponent_ng_container_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, StaffListingComponent_ng_container_4_ng_container_1_Template, 3, 3, "ng-container", 8);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r3.groups);
  }
}
function StaffListingComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 13);
  }
}
function StaffListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "p");
    \u0275\u0275text(2, "No matching staff members");
    \u0275\u0275elementEnd()();
  }
}
var CHARS = "#abcdefghijklmnopqrstuvwxyz".split("");
var _StaffListingComponent = class _StaffListingComponent extends AsyncHandler {
  constructor(_state) {
    super();
    this._state = _state;
    this.active_group = "#";
    this.groups = CHARS;
    this.events = this._state.user_events;
    this.loading = this._state.loading;
    this.user_count = this._state.filtered_users.pipe(map((list) => list.length));
    this.user_list = this._state.filtered_users.pipe(map((list) => {
      const user_map = {};
      for (const char of CHARS) {
        user_map[char] = (list || []).filter((user) => user.name.toLowerCase()[0].startsWith(char) || char === "#" && !CHARS.includes(user.name.toLowerCase()[0]));
      }
      this.timeout("scroll", () => this.onScroll({}), 30);
      return user_map;
    }));
  }
  onScroll(_) {
    const scroll_top = this._el.nativeElement.scrollTop;
    for (const group of CHARS) {
      const el = document.querySelector(`#letter-${group === "#" ? "0" : group}`);
      if (el) {
        if (el.offsetTop - scroll_top > 0) {
          break;
        }
        this.active_group = group;
      }
    }
  }
  scrollTo(group) {
    const el = document.querySelector(`#letter-${group}-0`);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
      this.active_group = group;
    }
  }
};
_StaffListingComponent.\u0275fac = function StaffListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffListingComponent)(\u0275\u0275directiveInject(StaffStateService));
};
_StaffListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffListingComponent, selectors: [["staff-listings"]], viewQuery: function StaffListingComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c0, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 8, consts: [["container", ""], ["empty_state", ""], [1, "w-full", "p-2", "flex", "items-center", "justify-center"], ["letter", "", "class", "capitalize h-6 w-6 flex items-center justify-center text-xs cursor-pointer", 3, "disabled", "active", "click", 4, "ngFor", "ngForOf"], [1, "flex-1", "overflow-auto", "w-full", "relative", "bg-base-200", 2, "height", "50%", 3, "scroll"], [4, "ngIf", "ngIfElse"], ["mode", "indeterminate", 4, "ngIf"], ["letter", "", 1, "capitalize", "h-6", "w-6", "flex", "items-center", "justify-center", "text-xs", "cursor-pointer", 3, "click"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["group", "", 1, "capitalize", "bg-base-200", "border-b", "text-sm", "font-medium", "sticky", "top-0", "z-10", 3, "id"], [3, "id", "user", "onsite", 4, "ngFor", "ngForOf"], [3, "id", "user", "onsite"], ["mode", "indeterminate"], [1, "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center"]], template: function StaffListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275template(1, StaffListingComponent_div_1_Template, 3, 7, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 4, 0);
    \u0275\u0275listener("scroll", function StaffListingComponent_Template_div_scroll_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.onScroll($event));
    });
    \u0275\u0275template(4, StaffListingComponent_ng_container_4_Template, 2, 1, "ng-container", 5);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, StaffListingComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275template(8, StaffListingComponent_ng_template_8_Template, 3, 0, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const empty_state_r8 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx.groups);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 4, ctx.user_count))("ngIfElse", empty_state_r8);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 6, ctx.loading));
  }
}, dependencies: [NgForOf, NgIf, MatProgressBar, StaffDetailsComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 50%;\n}\n[letter][_ngcontent-%COMP%] {\n  transition: font-size 200ms, color 200ms;\n}\n[group][_ngcontent-%COMP%] {\n  border-color: #ccc;\n  padding: 0.5rem 1.65rem;\n}\n.disabled[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  pointer-events: none;\n}\n.active[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  opacity: 1;\n  color: #d81b60;\n}\n/*# sourceMappingURL=staff-listing.component.css.map */"] });
var StaffListingComponent = _StaffListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffListingComponent, { className: "StaffListingComponent", filePath: "apps/concierge/src/app/staff/staff-listing.component.ts", lineNumber: 100 });
})();

// apps/concierge/src/app/staff/staff.component.ts
var _c02 = ["app-staff", ""];
function StaffComponent_mat_progress_bar_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var _StaffComponent = class _StaffComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_StaffComponent.\u0275fac = function StaffComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffComponent)(\u0275\u0275directiveInject(StaffStateService));
};
_StaffComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StaffComponent, selectors: [["", "app-staff", ""]], attrs: _c02, decls: 6, vars: 3, consts: [[1, "relative", "overflow-hidden", "flex-1", "flex", "flex-col"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function StaffComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "staff-topbar", 1)(3, "staff-listings", 2);
    \u0275\u0275template(4, StaffComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 1, ctx.loading));
  }
}, dependencies: [NgIf, SidebarComponent, MatProgressBar, StaffTopbarComponent, StaffListingComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  background: var(--b1);\n}\n/*# sourceMappingURL=staff.component.css.map */"] });
var StaffComponent = _StaffComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StaffComponent, { className: "StaffComponent", filePath: "apps/concierge/src/app/staff/staff.component.ts", lineNumber: 30 });
})();

// apps/concierge/src/app/staff/new-staff.component.ts
var _c03 = ["app-new-staff", ""];
function NewStaffComponent_mat_progress_bar_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 5);
  }
}
var _NewStaffComponent = class _NewStaffComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_NewStaffComponent.\u0275fac = function NewStaffComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewStaffComponent)(\u0275\u0275directiveInject(StaffStateService));
};
_NewStaffComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewStaffComponent, selectors: [["", "app-new-staff", ""]], attrs: _c03, decls: 8, vars: 3, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function NewStaffComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1);
    \u0275\u0275element(4, "staff-topbar", 2)(5, "staff-listings", 3);
    \u0275\u0275template(6, NewStaffComponent_mat_progress_bar_6_Template, 1, 0, "mat-progress-bar", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(7, 1, ctx.loading));
  }
}, dependencies: [NgIf, ApplicationTopbarComponent, ApplicationSidebarComponent, MatProgressBar, StaffTopbarComponent, StaffListingComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-staff.component.css.map */"] });
var NewStaffComponent = _NewStaffComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewStaffComponent, { className: "NewStaffComponent", filePath: "apps/concierge/src/app/staff/new-staff.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/staff/emergency-contact-modal.component.ts
var _c04 = () => ({ standalone: true });
var _c1 = () => [];
function EmergencyContactModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_main_5_mat_option_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r3 = ctx.$implicit;
    \u0275\u0275property("value", level_r3.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r3.display_name || level_r3.name, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_34_mat_option_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("value", role_r4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r4, " ");
  }
}
function EmergencyContactModalComponent_main_5_ng_container_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, EmergencyContactModalComponent_main_5_ng_container_34_mat_option_1_Template, 2, 2, "mat-option", 28);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r4 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", role_r4);
  }
}
function EmergencyContactModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 7)(1, "form", 8)(2, "a-user-search-field", 9);
    \u0275\u0275listener("ngModelChange", function EmergencyContactModalComponent_main_5_Template_a_user_search_field_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setUser($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10)(4, "label", 11);
    \u0275\u0275text(5, "Name:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12);
    \u0275\u0275element(7, "input", 13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 14)(9, "div", 15)(10, "label", 16);
    \u0275\u0275text(11, "Email:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 12);
    \u0275\u0275element(13, "input", 17);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 15)(15, "label", 16);
    \u0275\u0275text(16, "Phone:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "mat-form-field", 12);
    \u0275\u0275element(18, "input", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(19, "div", 10)(20, "label", 11);
    \u0275\u0275text(21, "Level:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-form-field", 12)(23, "mat-select", 19)(24, "mat-option", 20);
    \u0275\u0275text(25, "All Levels");
    \u0275\u0275elementEnd();
    \u0275\u0275template(26, EmergencyContactModalComponent_main_5_mat_option_26_Template, 2, 2, "mat-option", 21);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(28, "div", 10)(29, "label", 16);
    \u0275\u0275text(30, "Roles:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 14)(32, "mat-form-field", 22)(33, "mat-select", 23);
    \u0275\u0275template(34, EmergencyContactModalComponent_main_5_ng_container_34_Template, 2, 1, "ng-container", 24);
    \u0275\u0275pipe(35, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 25)(37, "app-icon");
    \u0275\u0275text(38, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(39, "div", 26);
    \u0275\u0275text(40, "Add New Role");
    \u0275\u0275elementEnd()()()()()();
  }
  if (rf & 2) {
    let tmp_6_0;
    const ctx_r1 = \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(10);
    \u0275\u0275advance();
    \u0275\u0275property("formGroup", ctx_r1.form);
    \u0275\u0275advance();
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(9, _c04));
    \u0275\u0275advance(24);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(27, 5, ctx_r1.levels));
    \u0275\u0275advance(8);
    \u0275\u0275property("ngForOf", ((tmp_6_0 = \u0275\u0275pipeBind1(35, 7, ctx_r1.data)) == null ? null : tmp_6_0.roles) || \u0275\u0275pureFunction0(10, _c1));
    \u0275\u0275advance(2);
    \u0275\u0275property("content", role_form_r5);
  }
}
function EmergencyContactModalComponent_footer_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 29)(1, "button", 30);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_footer_6_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function EmergencyContactModalComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 31);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving contact details...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
  }
}
function EmergencyContactModalComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "mat-form-field", 12)(2, "input", 34);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactModalComponent_ng_template_9_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.role_name, $event) || (ctx_r1.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 35);
    \u0275\u0275listener("click", function EmergencyContactModalComponent_ng_template_9_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.addRole());
    });
    \u0275\u0275text(4, " Save Role ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.role_name);
  }
}
var _EmergencyContactModalComponent = class _EmergencyContactModalComponent {
  constructor(_data, _dialog_ref, _org) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this._org = _org;
    this._changes = new BehaviorSubject(0);
    this.loading = false;
    this.contact = this._data;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => showMetadata(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.form = new FormGroup({
      id: new FormControl(this._data?.id || `ecntct-${randomString(8)}`),
      name: new FormControl(this._data?.name || ""),
      email: new FormControl(this._data?.email || ""),
      phone: new FormControl(this._data?.phone || ""),
      zone: new FormControl(this._data?.zone || ""),
      roles: new FormControl(this._data?.roles || [])
    });
    this.levels = this._org.active_levels;
  }
  addRole() {
    return __async(this, null, function* () {
      if (!this.role_name)
        return;
      this._tooltip.close();
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield this.data.pipe(take(1)).toPromise();
      yield updateMetadata(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [...data.roles || [], this.role_name].filter((_) => !!_),
          contacts: data.contacts
        }
      }).toPromise();
      this._changes.next(0);
      this.form.patchValue({
        roles: [...this.form.value.roles || [], this.role_name]
      });
      this.role_name = "";
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  setUser(user) {
    this.form.patchValue({
      name: user?.name,
      email: user?.email,
      phone: user?.phone
    });
  }
  save() {
    return __async(this, null, function* () {
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield this.data.pipe(take(1)).toPromise();
      const contacts = data?.contacts || [];
      const new_contacts = [
        ...contacts.filter((_) => _.id !== this.contact?.id),
        this.form.value
      ].sort((a, b) => a.name.localeCompare(b.name));
      yield updateMetadata(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: { roles: data.roles || [], contacts: new_contacts }
      }).toPromise();
      this._dialog_ref.disableClose = true;
      notifySuccess("Successfully updated emergency contacts.");
      this.loading = false;
      this._dialog_ref.close();
    });
  }
};
_EmergencyContactModalComponent.\u0275fac = function EmergencyContactModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef), \u0275\u0275directiveInject(OrganisationService));
};
_EmergencyContactModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactModalComponent, selectors: [["emergency-contact-modal"]], viewQuery: function EmergencyContactModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
  }
}, decls: 11, vars: 5, consts: [["load_state", ""], ["role_form", ""], [1, "flex-1", "w-0"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 w-[36rem]", 4, "ngIf", "ngIfElse"], ["class", "flex justify-center items-center p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "w-[36rem]"], [1, "space-y-4", 3, "formGroup"], ["ngModel", "", 1, "mb-4", 3, "ngModelChange", "ngModelOptions"], [1, "flex", "flex-col"], ["for", "name"], ["appearance", "outline"], ["matInput", "", "formControlName", "name", "placeholder", "Full name"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "flex-col", "flex-1"], ["for", "email"], ["matInput", "", "formControlName", "email", "type", "email", "placeholder", "Email address"], ["matInput", "", "formControlName", "phone", "type", "tel", "placeholder", "Emergency contact number"], ["formControlName", "zone", "placeholder", "All Levels"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["multiple", "", "formControlName", "roles", "placeholder", "Select roles"], [4, "ngFor", "ngForOf"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "space-x-2", 3, "content"], [1, "pr-2"], [3, "value"], [3, "value", 4, "ngIf"], [1, "flex", "justify-center", "items-center", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "h-64", "flex", "flex-col", "items-center", "justify-center"], [1, "mb-4", 3, "diameter"], [1, "bg-base-100", "p-4", "rounded"], ["matInput", "", "placeholder", "Role name", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function EmergencyContactModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275element(3, "div", 2);
    \u0275\u0275template(4, EmergencyContactModalComponent_button_4_Template, 3, 0, "button", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, EmergencyContactModalComponent_main_5_Template, 41, 11, "main", 4)(6, EmergencyContactModalComponent_footer_6_Template, 3, 0, "footer", 5)(7, EmergencyContactModalComponent_ng_template_7_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, EmergencyContactModalComponent_ng_template_9_Template, 5, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx.contact ? "Edit" : "New", " Emergency Contact");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r8);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgForOf, NgIf, \u0275NgNoValidate, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, NgModel, MatFormField, MatInput, MatSelect, MatOption, MatProgressSpinner, MatDialogClose, MatRipple, FormGroupDirective, FormControlName, UserSearchFieldComponent, IconComponent, CustomTooltipComponent, AsyncPipe] });
var EmergencyContactModalComponent = _EmergencyContactModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactModalComponent, { className: "EmergencyContactModalComponent", filePath: "apps/concierge/src/app/staff/emergency-contact-modal.component.ts", lineNumber: 150 });
})();

// apps/concierge/src/app/staff/role-management-modal.component.ts
function RoleManagementModalComponent_ng_container_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 8);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_container_12_Template_button_click_4_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      ctx_r3.active = role_r3;
      return \u0275\u0275resetView(ctx_r3.role_name = role_r3);
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 9);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_container_12_Template_button_click_7_listener() {
      const role_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeRole(role_r3));
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const role_r3 = ctx.$implicit;
    \u0275\u0275nextContext();
    const role_form_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(role_r3);
    \u0275\u0275advance();
    \u0275\u0275property("content", role_form_r5);
  }
}
function RoleManagementModalComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "mat-form-field", 11)(2, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function RoleManagementModalComponent_ng_template_14_Template_input_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r3.role_name, $event) || (ctx_r3.role_name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 13);
    \u0275\u0275listener("click", function RoleManagementModalComponent_ng_template_14_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.updateRoles());
    });
    \u0275\u0275text(4, " Save Role ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r3.role_name);
  }
}
var _RoleManagementModalComponent = class _RoleManagementModalComponent {
  removeRole(role) {
    return __async(this, null, function* () {
      if (!role)
        return;
      this.loading = true;
      this._dialog_ref.disableClose = true;
      const data = yield this.data.pipe(take(1)).toPromise();
      yield updateMetadata(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [...data.roles.filter((_) => _ !== role)].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts.map((_) => __spreadProps(__spreadValues({}, _), {
            roles: _.roles.filter((r) => r !== role)
          }))
        }
      }).toPromise();
      this._changes.next(0);
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  updateRoles() {
    return __async(this, null, function* () {
      if (!this.role_name)
        return;
      this.loading = true;
      this._tooltip.close();
      this._dialog_ref.disableClose = true;
      const data = yield this.data.pipe(take(1)).toPromise();
      yield updateMetadata(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: {
          roles: [
            ...data.roles.filter((_) => _ !== this.active),
            this.role_name
          ].filter((_) => !!_).sort((a, b) => a.localeCompare(b)),
          contacts: data.contacts
        }
      }).toPromise();
      this._changes.next(0);
      this.role_name = "";
      this.active = "";
      this.loading = false;
      this._dialog_ref.disableClose = false;
    });
  }
  constructor(_org, _dialog_ref) {
    this._org = _org;
    this._dialog_ref = _dialog_ref;
    this._changes = new BehaviorSubject(0);
    this.loading = false;
    this.data = combineLatest([
      this._org.active_building,
      this._changes
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => showMetadata(bld.id, "emergency_contacts")), map(({ details }) => {
      const value = details || { roles: [], contacts: [] };
      if (!value.roles)
        value.roles = [];
      if (!value.contacts)
        value.contacts = [];
      return value;
    }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _.roles));
  }
};
_RoleManagementModalComponent.\u0275fac = function RoleManagementModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _RoleManagementModalComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialogRef));
};
_RoleManagementModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RoleManagementModalComponent, selectors: [["role-management-modal"]], viewQuery: function RoleManagementModalComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(CustomTooltipComponent, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._tooltip = _t.first);
  }
}, decls: 16, vars: 4, consts: [["role_form", ""], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "overflow-y-auto", "min-w-[20rem]", "divide-y", "divide-base-200", "max-h-[65vh]"], ["btn", "", "matRipple", "", "customTooltip", "", 1, "flex", "items-center", "justify-center", "space-x-2", "w-[calc(100%-1rem)]", "m-2", 3, "click", "content"], [1, "truncate"], [4, "ngFor", "ngForOf"], [1, "flex", "items-center", "space-x-2", "hover:bg-base-200:bg-base-300", "p-2"], [1, "flex-1", "truncate"], ["btn", "", "icon", "", "matRipple", "", "customTooltip", "", 3, "click", "content"], ["btn", "", "icon", "", "matRipple", "", 3, "click"], [1, "bg-base-100", "p-4", "rounded"], ["appearance", "outline"], ["matInput", "", "placeholder", "Role name", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"]], template: function RoleManagementModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, "Manage Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2)(7, "button", 3);
    \u0275\u0275listener("click", function RoleManagementModalComponent_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      ctx.active = "";
      return \u0275\u0275resetView(ctx.role_name = "");
    });
    \u0275\u0275elementStart(8, "div", 4);
    \u0275\u0275text(9, "New Role");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "app-icon");
    \u0275\u0275text(11, "add");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, RoleManagementModalComponent_ng_container_12_Template, 10, 2, "ng-container", 5);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(14, RoleManagementModalComponent_ng_template_14_Template, 5, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const role_form_r5 = \u0275\u0275reference(15);
    \u0275\u0275advance(7);
    \u0275\u0275property("content", role_form_r5);
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(13, 2, ctx.roles));
  }
}, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatDialogClose, MatRipple, IconComponent, CustomTooltipComponent, AsyncPipe] });
var RoleManagementModalComponent = _RoleManagementModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RoleManagementModalComponent, { className: "RoleManagementModalComponent", filePath: "apps/concierge/src/app/staff/role-management-modal.component.ts", lineNumber: 70 });
})();

// apps/concierge/src/app/staff/emergency-contacts.component.ts
var _c05 = ["app-emergency-contacts", ""];
var _c12 = () => [];
var _c2 = (a0) => ({ key: "name", name: "Person", content: a0 });
var _c3 = (a0) => ({ key: "roles", name: "Roles", content: a0, sortable: false });
var _c4 = (a0) => ({ key: "zone", name: "Zone", content: a0, size: "8rem", sortable: false });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c6 = (a0, a1, a2, a3) => [a0, a1, a2, a3];
function EmergencyContactsComponent_mat_option_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r2 = ctx.$implicit;
    \u0275\u0275property("value", role_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r2, " ");
  }
}
function EmergencyContactsComponent_ng_template_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_32_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.copyToClipboard(row_r4.email));
    });
    \u0275\u0275elementStart(1, "div", 26);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 27);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.email, " ");
  }
}
function EmergencyContactsComponent_ng_template_34_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const role_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", role_r6, " ");
  }
}
function EmergencyContactsComponent_ng_template_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275template(1, EmergencyContactsComponent_ng_template_34_span_1_Template, 2, 1, "span", 29);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", data_r7);
  }
}
function EmergencyContactsComponent_ng_template_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 31);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "level");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_6_0;
    const data_r8 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r8 ? (tmp_6_0 = \u0275\u0275pipeBind1(2, 1, data_r8)) == null ? null : tmp_6_0.display_name : "All", " ");
  }
}
function EmergencyContactsComponent_ng_template_38_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "button", 33);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_38_Template_button_click_1_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.editContact(row_r10));
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "button", 34);
    \u0275\u0275listener("click", function EmergencyContactsComponent_ng_template_38_Template_button_click_4_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.removeContact(row_r10));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "delete");
    \u0275\u0275elementEnd()()();
  }
}
var _EmergencyContactsComponent = class _EmergencyContactsComponent {
  constructor(_org, _dialog, _clipboard) {
    this._org = _org;
    this._dialog = _dialog;
    this._clipboard = _clipboard;
    this._change = new BehaviorSubject(0);
    this.search = "";
    this.role_filter = new BehaviorSubject("");
    this.data = combineLatest([
      this._org.active_building,
      this._change
    ]).pipe(filter(([bld]) => !!bld), switchMap(([bld]) => showMetadata(bld.id, "emergency_contacts")), map(({ details }) => details || { roles: [], contacts: [] }), shareReplay(1));
    this.roles = this.data.pipe(map((_) => _?.roles || []));
    this.contacts = this.data.pipe(map((_) => _?.contacts || []));
    this.filtered_contacts = combineLatest([
      this.contacts,
      this.role_filter
    ]).pipe(map(([list, role]) => list.filter((_) => !role || _.roles.includes(role))));
    this.copyToClipboard = (id) => {
      const success = this._clipboard.copy(id);
      if (success)
        notifySuccess("User's email copied to clipboard.");
    };
  }
  ngOnInit() {
  }
  manageRoles() {
    const ref = this._dialog.open(RoleManagementModalComponent, {});
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  editContact(contact) {
    const ref = this._dialog.open(EmergencyContactModalComponent, {
      data: contact
    });
    ref.afterClosed().subscribe(() => this._change.next(Date.now()));
  }
  removeContact(contact) {
    return __async(this, null, function* () {
      const result = yield openConfirmModal({
        title: "Remove Emergency Contact",
        content: `Are you sure you want to remove ${contact.name} from the emergency contacts?`,
        icon: { content: "delete" }
      }, this._dialog);
      if (result.reason !== "done")
        return;
      result.loading("Removing contact...");
      const data = yield this.data.pipe(take(1)).toPromise();
      const new_contacts = (data?.contacts || []).filter((_) => _.id !== contact.id);
      yield updateMetadata(this._org.building.id, {
        name: "emergency_contacts",
        description: "Emergency Contacts",
        details: { roles: data.roles, contacts: new_contacts }
      }).toPromise();
      result.close();
      this._change.next(Date.now());
      notifySuccess("Successfully removed emergency contact.");
    });
  }
};
_EmergencyContactsComponent.\u0275fac = function EmergencyContactsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _EmergencyContactsComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(Clipboard));
};
_EmergencyContactsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EmergencyContactsComponent, selectors: [["", "app-emergency-contacts", ""]], attrs: _c05, decls: 40, vars: 24, consts: [["person_template", ""], ["roles_template", ""], ["zone_template", ""], ["actions_template", ""], [1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], ["topbar", "", 1, "px-8", "py-4", "flex", "flex-col"], [1, "flex", "items-center", "justify-between"], [1, "text-2xl", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript"], ["matPrefix", "", 1, "text-2xl"], ["matInput", "", "placeholder", "Filter contacts...", 3, "ngModelChange", "ngModel"], ["btn", "", "matRipple", "", 1, "space-x-2", 3, "click"], [1, "text-2xl"], [1, "pr-2"], [1, "flex", "items-center", "justify-between", "py-2", "mt-2"], ["placeholder", "All Roles", 3, "ngModelChange", "ngModel"], ["value", ""], [3, "value", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "matTooltip", "Manage Roles", 1, "h-12", "w-12", "bg-secondary", "text-secondary-content", "rounded", 3, "click"], [1, "w-full", "h-1/2", "flex-1", "overflow-auto", "px-8"], [1, "min-w-[52rem]", "block", "text-sm", 3, "data", "filter", "empty_message", "columns", "sortable"], [1, "w-full", "h-12"], [3, "value"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "text-[0.625rem]", "opacity-30", "font-mono"], [1, "flex", "flex-wrap", "p-2"], ["class", "m-1 py-1 px-2 rounded-2xl text-xs font-mono bg-info text-info-content", 4, "ngFor", "ngForOf"], [1, "m-1", "py-1", "px-2", "rounded-2xl", "text-xs", "font-mono", "bg-info", "text-info-content"], [1, "p-4"], [1, "flex", "items-center", "justify-end", "w-full", "space-x-2", "p-2"], ["icon", "", "matRipple", "", "matTooltip", "Edit Emergency Contact", 3, "click"], ["icon", "", "matRipple", "", "matTooltip", "Remove Emergency Contact", 1, "text-error", 3, "click"]], template: function EmergencyContactsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 4);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 5)(4, "section", 6)(5, "div", 7)(6, "h2", 8);
    \u0275\u0275text(7, "Emergency Contacts");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "mat-form-field", 10)(10, "app-icon", 11);
    \u0275\u0275text(11, " search ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "input", 12);
    \u0275\u0275twoWayListener("ngModelChange", function EmergencyContactsComponent_Template_input_ngModelChange_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search, $event) || (ctx.search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 13);
    \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.editContact());
    });
    \u0275\u0275elementStart(14, "app-icon", 14);
    \u0275\u0275text(15, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 15);
    \u0275\u0275text(17, "Add Contact");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(18, "div", 16)(19, "mat-form-field", 10)(20, "mat-select", 17);
    \u0275\u0275listener("ngModelChange", function EmergencyContactsComponent_Template_mat_select_ngModelChange_20_listener($event) {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.role_filter.next($event));
    });
    \u0275\u0275elementStart(21, "mat-option", 18);
    \u0275\u0275text(22, "All Roles");
    \u0275\u0275elementEnd();
    \u0275\u0275template(23, EmergencyContactsComponent_mat_option_23_Template, 2, 2, "mat-option", 19);
    \u0275\u0275pipe(24, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "div", 9)(26, "button", 20);
    \u0275\u0275listener("click", function EmergencyContactsComponent_Template_button_click_26_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.manageRoles());
    });
    \u0275\u0275elementStart(27, "app-icon");
    \u0275\u0275text(28, "list_alt");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(29, "section", 21);
    \u0275\u0275element(30, "simple-table", 22)(31, "div", 23);
    \u0275\u0275template(32, EmergencyContactsComponent_ng_template_32_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(34, EmergencyContactsComponent_ng_template_34_Template, 2, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(36, EmergencyContactsComponent_ng_template_36_Template, 3, 3, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(38, EmergencyContactsComponent_ng_template_38_Template, 7, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const person_template_r11 = \u0275\u0275reference(33);
    const roles_template_r12 = \u0275\u0275reference(35);
    const zone_template_r13 = \u0275\u0275reference(37);
    const actions_template_r14 = \u0275\u0275reference(39);
    \u0275\u0275advance(12);
    \u0275\u0275twoWayProperty("ngModel", ctx.search);
    \u0275\u0275advance(8);
    \u0275\u0275property("ngModel", ctx.role_filter.getValue());
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(24, 8, ctx.roles) || \u0275\u0275pureFunction0(10, _c12));
    \u0275\u0275advance(7);
    \u0275\u0275property("data", ctx.filtered_contacts)("filter", ctx.search)("empty_message", ctx.search ? "No matching contacts" : "No emergency contacts for this building")("columns", \u0275\u0275pureFunction4(19, _c6, \u0275\u0275pureFunction1(11, _c2, person_template_r11), \u0275\u0275pureFunction1(13, _c3, roles_template_r12), \u0275\u0275pureFunction1(15, _c4, zone_template_r13), \u0275\u0275pureFunction1(17, _c5, actions_template_r14)))("sortable", true);
  }
}, dependencies: [NgForOf, DefaultValueAccessor, NgControlStatus, NgModel, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatPrefix, MatInput, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, LevelPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=emergency-contacts.component.css.map */"] });
var EmergencyContactsComponent = _EmergencyContactsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EmergencyContactsComponent, { className: "EmergencyContactsComponent", filePath: "apps/concierge/src/app/staff/emergency-contacts.component.ts", lineNumber: 198 });
})();

// apps/concierge/src/app/staff/staff.module.ts
var ROUTES = [
  { path: "", component: StaffComponent },
  { path: "new", component: NewStaffComponent },
  { path: "emergency-contacts", component: EmergencyContactsComponent }
];
var COMPONENTS = [
  NewStaffComponent,
  StaffComponent,
  StaffTopbarComponent,
  StaffListingComponent,
  StaffDetailsComponent,
  EmergencyContactsComponent,
  EmergencyContactModalComponent,
  RoleManagementModalComponent
];
var _StaffModule = class _StaffModule {
};
_StaffModule.\u0275fac = function StaffModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _StaffModule)();
};
_StaffModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _StaffModule });
_StaffModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  RouterModule.forChild(ROUTES)
] });
var StaffModule = _StaffModule;
export {
  COMPONENTS,
  StaffModule
};
//# sourceMappingURL=staff.module-AXNM6SXK.js.map
