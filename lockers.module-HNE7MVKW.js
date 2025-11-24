import {
  SharedExploreModule
} from "./chunk-27NQU33A.js";
import "./chunk-EFGU63AF.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabsModule
} from "./chunk-VQH6R3Y2.js";
import "./chunk-YPSQ4RC3.js";
import {
  SharedBookingsModule
} from "./chunk-JEBZF7PS.js";
import "./chunk-GOLRZLQR.js";
import {
  ActivatedRoute,
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  BookingRulesModalComponent,
  BuildingPipe,
  CommonModule,
  DateOptionsComponent,
  DatePipe,
  FormFieldsModule,
  FormsModule,
  IconComponent,
  MatCheckboxModule,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatInputModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatRadioModule,
  MatRipple,
  MatSelect,
  MatTooltip,
  NavigationEnd,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SearchbarComponent,
  SettingsService,
  SidebarComponent,
  SimpleTableComponent,
  Subject,
  UIModule,
  __async,
  __spreadProps,
  __spreadValues,
  approveBooking,
  checkinBooking,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  endOfDay,
  first,
  format,
  getUnixTime,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryPagedBookings,
  rejectBooking,
  saveBooking,
  scan,
  shareReplay,
  showBooking,
  startOfDay,
  switchMap,
  tap,
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
  ɵɵpureFunction1,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/lockers/locker-state.service.ts
var _LockersStateService = class _LockersStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._filters = new BehaviorSubject({});
    this._locker_bookings = [];
    this._loading = new BehaviorSubject(false);
    this.levels = this._org.level_list.pipe(map((_) => {
      if (!this._settings.get("app.use_region")) {
        const blds = this._org.buildingsForRegion();
        const bld_ids = blds.map((bld) => bld.id);
        const list = _.filter((lvl) => bld_ids.includes(lvl.parent_id));
        list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
          display_name: `${blds.find((_2) => _2.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
        }));
        return list;
      }
      return _.filter((lvl) => lvl.parent_id === this._org.building.id);
    }));
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this._next_page = new Subject();
    this._call_next_page = new Subject();
    this._all_zones_keys = ["All", -1, "-1"];
    this.setup_paging = combineLatest([
      this._filters,
      this._org.initialised
    ]).pipe(debounceTime(500), tap(([filters, loaded]) => {
      if (!loaded)
        return;
      const date = filters.date || Date.now();
      const zones = !filters.zones || filters.zones.some((z) => this._all_zones_keys.includes(z)) ? this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "locker",
        zones: zones.join(","),
        include_checked_out: true
      }));
      this._call_next_page.next(`RESET_${Date.now()}`);
    }));
    this.paged_bookings = combineLatest([
      this._next_page,
      this._call_next_page
    ]).pipe(distinctUntilChanged((a, b) => a[1] === b[1]), switchMap(([next_page, action]) => {
      this._loading.next(true);
      if (!next_page) {
        return of({
          data: [],
          total: 0,
          next: null,
          reset: action.includes("RESET")
        });
      }
      if (action.includes("RESET")) {
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })));
    }), scan((acc, { data, total, next, reset }) => {
      const list = data;
      this._next_page.next(next);
      if (reset)
        return { list, total, has_next: !!next };
      return {
        list: [...acc.list, ...list],
        has_next: !!next,
        total
      };
    }, { list: [], total: 0, has_next: false }), tap((_) => this._loading.next(false)), shareReplay(1));
    this.has_more_pages = this.paged_bookings.pipe(map((_) => _.has_next));
    this.bookings = this.paged_bookings.pipe(map((i) => i.list));
    this.setup_paging.subscribe();
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters.getValue()?.zones?.includes("All")) {
      filters.zones = [];
    }
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  refresh() {
    this._loading.next(true);
    this.timeout("poll", () => this.setFilters(this._filters.getValue()));
  }
  // public addLockers(list: Locker[]) {
  //     this._new_lockers.next(this._new_lockers.getValue().concat(list));
  // }
  // public clearNewLockers() {
  //     this._filters.next(this._filters.getValue());
  //     this._new_lockers.next([]);
  // }
  checkinLocker(locker, state = true) {
    return __async(this, null, function* () {
      const status = yield checkinBooking(locker.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        notifyError(status.error ? `Error: ${status.error}` : `Error checking ${state ? "in" : "out"} locker booking`);
        throw status.error;
      }
      notifySuccess(`Checked ${state ? "in" : "out"} ${locker.user_name}.`);
    });
  }
  approveLocker(locker) {
    return __async(this, null, function* () {
      const success = yield approveBooking(locker.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError("Error approving in locker booking");
      }
      notifySuccess(`Approved locker booking for ${locker.user_name} on ${format(locker.date, "MMM do")}.`);
      locker.approved = true;
      locker.rejected = false;
    });
  }
  rejectLocker(locker) {
    return __async(this, null, function* () {
      const success = yield rejectBooking(locker.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError("Error rejecting in locker booking");
      }
      notifySuccess(`Rejected locker booking for ${locker.user_name} on ${format(locker.date, "MMM do")}.`);
      locker.approved = false;
      locker.rejected = true;
    });
  }
  giveAccess(locker) {
    return __async(this, null, function* () {
      const success = yield saveBooking(new Booking(__spreadProps(__spreadValues({}, locker), { access: true }))).toPromise().catch((_) => "failed");
      if (success === "failed")
        return notifyError("Error giving building access booking host");
      notifySuccess(`Successfully gave building access to ${locker.user_name} for locker booking.`);
      this._locker_bookings = [...this._locker_bookings, success];
    });
  }
  rejectAllLockers() {
    return __async(this, null, function* () {
      const list = this._locker_bookings || [];
      if (list.length <= 0)
        return notifyInfo("No lockers to reject for the selected date");
      const resp = yield openConfirmModal({
        title: "Cancel all locker bookings",
        content: "Are you sure you want to cancel all bookings for the selected date?",
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Rejecting all lockers for selected date...");
      yield Promise.all(list.map((locker) => rejectBooking(locker.id).toPromise()));
      notifySuccess("Successfully rejected all locker bookings for selected date.");
      resp.close();
    });
  }
};
_LockersStateService.\u0275fac = function LockersStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
};
_LockersStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _LockersStateService, factory: _LockersStateService.\u0275fac, providedIn: "root" });
var LockersStateService = _LockersStateService;

// apps/concierge/src/app/lockers/locker-topbar.component.ts
function LockersTopbarComponent_mat_option_4_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 12);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function LockersTopbarComponent_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8)(1, "div", 9);
    \u0275\u0275template(2, LockersTopbarComponent_mat_option_4_div_2_Template, 5, 3, "div", 10);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(level_r1.display_name || level_r1.name);
  }
}
function LockersTopbarComponent_button_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function LockersTopbarComponent_button_6_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "lock_open");
    \u0275\u0275elementEnd()();
  }
}
var _LockersTopbarComponent = class _LockersTopbarComponent extends AsyncHandler {
  get use_region() {
    return this._settings.get("app.use_region");
  }
  constructor(_lockers, _org, _route, _router, _dialog, _settings) {
    super();
    this._lockers = _lockers;
    this._org = _org;
    this._route = _route;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.levels = this._lockers.levels;
    this.filters = this._lockers.filters;
    this.manage = false;
    this.is_map = false;
    this.setDate = (date) => this._lockers.setFilters({ date });
    this.setFilters = (o) => this._lockers.setFilters(o);
    this.updateZones = (z) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._lockers.setFilters({ zones: z });
    };
  }
  ngOnInit() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
        if (params.has("zone_ids")) {
          const zones = params.get("zone_ids").split(",");
          if (zones.length) {
            this.updateZones(zones);
            const level = this._org.levelWithID(zones);
            if (!level)
              return;
            this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          }
        }
        if (params.has("date")) {
          this.setDate(/* @__PURE__ */ new Date(+params.get("date")));
        }
        if (params.has("approve")) {
          this.approve(params.get("approve"));
        } else if (params.has("reject")) {
          this.reject(params.get("reject"));
        }
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.subscription("router.events", this._router.events.subscribe(() => {
        this.manage = this._router.url?.includes("manage");
        this.is_map = this._router.url?.includes("map");
      }));
      this.manage = this._router.url?.includes("manage");
      this.is_map = this._router.url?.includes("map");
    });
  }
  // public newLocker() {
  //     this._lockers.addLockers([
  //         new Locker({ id: `locker-${randomInt(999_999)}` }),
  //     ]);
  //     notifySuccess(
  //         'New locker added to local data. Make sure to save the locker before using it.'
  //     );
  // }
  // public newLockerBooking() {
  //     this._dialog.open(LockerBookModalComponent, {});
  // }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
  // public async loadCSVData(event: InputEvent) {
  //     const data = await loadTextFileFromInputEvent(event).catch(([m, e]) => {
  //         notifyError(m);
  //         throw e;
  //     });
  //     try {
  //         const list = csvToJson(data) || [];
  //         this._lockers.addLockers(
  //             list.map(
  //                 (_) =>
  //                     new Locker({
  //                         ..._,
  //                         id: _.id || `locker-${randomInt(999_999)}`,
  //                     })
  //             )
  //         );
  //     } catch (e) {
  //         console.error(e);
  //     }
  // }
  // public downloadTemplate() {
  //     const locker: any = new Locker({
  //         id: 'locker-123',
  //         name: 'Test Locker',
  //         bookable: true,
  //         groups: ['test-locker-group', 'locker-bookers'],
  //         features: ['Standing Locker', 'Dual Monitor'],
  //     }).toJSON();
  //     const data = jsonToCsv([locker]);
  //     downloadFile('locker-template.csv', data);
  // }
  /**
   * Aprrove a locker booking
   * @param id Booking ID to approve
   */
  approve(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._lockers.approveLocker(booking);
      }
    });
  }
  /**
   * Reject a locker booking
   * @param id Booking ID to reject
   */
  reject(id) {
    return __async(this, null, function* () {
      const booking = yield showBooking(id).toPromise();
      if (booking) {
        this._lockers.rejectLocker(booking);
      }
    });
  }
};
_LockersTopbarComponent.\u0275fac = function LockersTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersTopbarComponent)(\u0275\u0275directiveInject(LockersStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_LockersTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersTopbarComponent, selectors: [["lockers-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 10, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline", 1, "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["btn", "", "icon", "", "matRipple", "", "class", "bg-primary mx-2 text-white rounded", "matTooltip", "Locker Restrictions", 3, "click", 4, "ngIf"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange", "model"], [3, "dateChange"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Locker Restrictions", 1, "bg-primary", "mx-2", "text-white", "rounded", 3, "click"]], template: function LockersTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function LockersTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(4, LockersTopbarComponent_mat_option_4_Template, 5, 3, "mat-option", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, LockersTopbarComponent_button_6_Template, 3, 0, "button", 4);
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "searchbar", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("modelChange", function LockersTopbarComponent_Template_searchbar_modelChange_8_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "date-options", 7);
    \u0275\u0275listener("dateChange", function LockersTopbarComponent_Template_date_options_dateChange_10_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_3_0;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_0_0 = \u0275\u0275pipeBind1(3, 4, ctx.filters)) == null ? null : tmp_0_0.zones);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 6, ctx.levels));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.manage);
    \u0275\u0275advance(2);
    \u0275\u0275property("model", (tmp_3_0 = \u0275\u0275pipeBind1(9, 8, ctx.filters)) == null ? null : tmp_3_0.search);
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatRipple, IconComponent, AsyncPipe, BuildingPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=locker-topbar.component.css.map */"] });
var LockersTopbarComponent = _LockersTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersTopbarComponent, { className: "LockersTopbarComponent", filePath: "apps/concierge/src/app/lockers/locker-topbar.component.ts", lineNumber: 115 });
})();

// apps/concierge/src/app/lockers/lockers.component.ts
var _c0 = ["app-lockers", ""];
var _c1 = () => ["/book", "lockers", "events"];
var _c2 = () => ["/book", "lockers", "map"];
var _c3 = () => ["/book", "lockers", "manage"];
function LockersComponent_mat_progress_bar_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 7);
  }
}
var _LockersComponent = class _LockersComponent extends AsyncHandler {
  constructor(_state, _router) {
    super();
    this._state = _state;
    this._router = _router;
    this.loading = this._state.loading;
  }
  ngOnInit() {
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
};
_LockersComponent.\u0275fac = function LockersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersComponent)(\u0275\u0275directiveInject(LockersStateService), \u0275\u0275directiveInject(Router));
};
_LockersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockersComponent, selectors: [["", "app-lockers", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c0, decls: 15, vars: 12, consts: [[1, "flex-1", "relative", "w-1/2", "flex", "flex-col", "bg-base-200", "overflow-hidden"], [1, "w-full"], [1, "dark"], ["mat-tab-nav-bar", ""], ["mat-tab-link", "", "queryParamsHandling", "merge", 3, "routerLink", "active"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function LockersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "lockers-topbar", 1);
    \u0275\u0275elementStart(3, "div", 2)(4, "nav", 3)(5, "a", 4);
    \u0275\u0275text(6, " Bookings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a", 4);
    \u0275\u0275text(8, " Map View ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "a", 4);
    \u0275\u0275text(10, " Manage Lockers ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 5);
    \u0275\u0275element(12, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(13, LockersComponent_mat_progress_bar_13_Template, 1, 0, "mat-progress-bar", 6);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c1))("active", ctx.path === "events");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c2))("active", ctx.path === "map");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c3))("active", ctx.path === "manage");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(14, 7, ctx.loading));
  }
}, dependencies: [NgIf, MatTabNav, MatTabLink, SidebarComponent, MatProgressBar, RouterOutlet, RouterLink, LockersTopbarComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=lockers.component.css.map */"] });
var LockersComponent = _LockersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockersComponent, { className: "LockersComponent", filePath: "apps/concierge/src/app/lockers/lockers.component.ts", lineNumber: 62 });
})();

// apps/concierge/src/app/lockers/locker-bookings.component.ts
var _c02 = (a0) => ({ key: "date", name: "Date", content: a0, size: "4rem" });
var _c12 = (a0) => ({ key: "period", name: "Period", content: a0, size: "9rem" });
var _c22 = (a0) => ({ key: "user_name", name: "Person", content: a0 });
var _c32 = () => ({ key: "group", name: "Group" });
var _c4 = (a0) => ({ key: "asset_name", name: "Locker", content: a0 });
var _c5 = () => ({ key: "approver_name", name: "Approver" });
var _c6 = (a0) => ({ key: "status", name: "Status", content: a0, size: "11rem" });
var _c7 = (a0) => ({ key: "checked_in", name: "Checked In", content: a0, size: "7rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
function LockerBookingsComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const date_r1 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(3, 2, date_r1, "MMM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(6, 5, date_r1, "dd"));
  }
}
function LockerBookingsComponent_ng_template_6_ng_container_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext(2).row;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, row_r2.date, ctx_r2.time_format), " \u2013 ", \u0275\u0275pipeBind2(3, 5, row_r2.date_end, ctx_r2.time_format), " ");
  }
}
function LockerBookingsComponent_ng_template_6_ng_container_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275text(1, "All Day");
    \u0275\u0275elementContainerEnd();
  }
}
function LockerBookingsComponent_ng_template_6_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275template(2, LockerBookingsComponent_ng_template_6_ng_container_1_ng_container_2_Template, 4, 8, "ng-container", 16)(3, LockerBookingsComponent_ng_template_6_ng_container_1_ng_container_3_Template, 2, 0, "ng-container", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !row_r2.all_day);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.all_day);
  }
}
function LockerBookingsComponent_ng_template_6_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const row_r2 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.status === "ended" ? "Manually Ended" : "Expired", " ");
  }
}
function LockerBookingsComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, LockerBookingsComponent_ng_template_6_ng_container_1_Template, 4, 2, "ng-container", 16)(2, LockerBookingsComponent_ng_template_6_ng_container_2_Template, 3, 1, "ng-container", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.status !== "declined" && !row_r2.deleted && row_r2.status !== "ended");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r2.status === "declined" || row_r2.deleted || row_r2.status === "ended");
  }
}
function LockerBookingsComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.asset_name || row_r4.asset_id, " ");
  }
}
function LockerBookingsComponent_ng_template_10_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r5.user_email, " ");
  }
}
function LockerBookingsComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, LockerBookingsComponent_ng_template_10_div_3_Template, 2, 1, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r5.user_name || row_r5.user_email || row_r5.booked_by_name || row_r5.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.user_name);
  }
}
function LockerBookingsComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon", 27);
    \u0275\u0275text(6, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 6)(9, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_12_Template_button_click_9_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.approve(row_r7));
    });
    \u0275\u0275elementStart(10, "div", 29)(11, "app-icon", 27);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 30);
    \u0275\u0275text(14, "Approve Locker");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_12_Template_button_click_15_listener() {
      const row_r7 = \u0275\u0275restoreView(_r6).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reject(row_r7));
    });
    \u0275\u0275elementStart(16, "div", 29)(17, "app-icon", 27);
    \u0275\u0275text(18, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 30);
    \u0275\u0275text(20, "Decline Locker");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const menu_r8 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("!text-success-content", (row_r7 == null ? null : row_r7.status) === "approved")("!bg-success", (row_r7 == null ? null : row_r7.status) === "approved")("!text-error-content", (row_r7 == null ? null : row_r7.status) === "declined")("!bg-error", (row_r7 == null ? null : row_r7.status) === "declined")("!text-neutral-content", (row_r7 == null ? null : row_r7.status) === "ended")("!bg-neutral", (row_r7 == null ? null : row_r7.status) === "ended")("opacity-30", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", (row_r7 == null ? null : row_r7.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r7 == null ? null : row_r7.status) === "ended" ? "Ended" : (row_r7 == null ? null : row_r7.status) === "approved" ? "Approved" : (row_r7 == null ? null : row_r7.status) === "declined" ? "Declined" : "Pending", " ");
  }
}
function LockerBookingsComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 31)(2, "div", 25)(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "app-icon", 27);
    \u0275\u0275text(6, " arrow_drop_down ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7)(9, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_14_Template_button_click_9_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, true));
    });
    \u0275\u0275elementStart(10, "div", 29)(11, "app-icon", 27);
    \u0275\u0275text(12, "check");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div");
    \u0275\u0275text(14, "Check-in");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(15, "button", 28);
    \u0275\u0275listener("click", function LockerBookingsComponent_ng_template_14_Template_button_click_15_listener() {
      const row_r10 = \u0275\u0275restoreView(_r9).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.checkin(row_r10, false));
    });
    \u0275\u0275elementStart(16, "div", 29)(17, "app-icon", 27);
    \u0275\u0275text(18, "cancel");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20, "Check-out");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    const row_r10 = ctx.row;
    const checkinMenu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("!bg-neutral", !data_r11)("!text-neutral-content", !data_r11)("!bg-success", data_r11)("!text-success-content", data_r11)("opacity-30", row_r10.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", checkinMenu_r12)("disabled", row_r10.status === "ended")("matTooltip", row_r10.status === "ended" ? "Locker booking has ended" : "Check-in or check-out locker");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", data_r11 ? "Yes" : "No", " ");
  }
}
function LockerBookingsComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 32);
    \u0275\u0275listener("click", function LockerBookingsComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.loadMore());
    });
    \u0275\u0275text(1, " Load More ");
    \u0275\u0275elementEnd();
  }
}
var _LockerBookingsComponent = class _LockerBookingsComponent {
  get time_format() {
    return this._settings.time_format;
  }
  constructor(_state, _settings) {
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.has_more_pages = this._state.has_more_pages;
    this.bookings = this._state.bookings.pipe(map((i) => i.map((booking) => __spreadProps(__spreadValues({}, booking), {
      end: booking.date + booking.duration * 60 * 1e3
    }))));
    this.loadMore = () => this._state.nextPage();
    this.checkin = (d, s) => this.runMethod("checkin", () => __async(this, null, function* () {
      yield this._state.checkinLocker(d, s);
      d.checked_in = s ?? true;
    }));
    this.approve = (d) => this.runMethod("approve", () => __async(this, null, function* () {
      return this._state.approveLocker(d);
    }));
    this.reject = (d) => this.runMethod("reject", () => __async(this, null, function* () {
      return this._state.rejectLocker(d);
    }));
  }
  runMethod(name, fn) {
    return __async(this, null, function* () {
      this.loading = name;
      yield fn().catch((i) => null);
      this.loading = "";
    });
  }
};
_LockerBookingsComponent.\u0275fac = function LockerBookingsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockerBookingsComponent)(\u0275\u0275directiveInject(LockersStateService), \u0275\u0275directiveInject(SettingsService));
};
_LockerBookingsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LockerBookingsComponent, selectors: [["locker-bookings"]], decls: 18, vars: 32, consts: [["date_template", ""], ["period_template", ""], ["locker_template", ""], ["user_template", ""], ["status_template", ""], ["option_template", ""], ["menu", "matMenu"], ["checkinMenu", "matMenu"], [1, "w-full", "h-4"], [1, "overflow-auto", "h-full", "w-full", "px-4", "pb-16"], [1, "min-w-[76rem]", "block", "text-sm", "w-full", 3, "data", "columns", "sortable", "empty_message"], ["btn", "", "matRipple", "", "class", "absolute bottom-2 left-4 w-32 z-20", 3, "click", 4, "ngIf"], [1, "flex", "flex-col", "items-center", "justify-center", "w-full", "py-2"], [1, "opacity-60"], [1, "text-xl"], [1, "p-2"], [4, "ngIf"], [1, "text-xs", "py-2", "px-4", "bg-error", "rounded-3xl", "text-white"], [1, "p-4"], [1, "flex", "flex-col", "justify-center", "px-4", "py-2"], [1, "select-all"], ["class", "text-xs opacity-30 select-all", 4, "ngIf"], [1, "text-xs", "opacity-30", "select-all"], [1, "px-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], ["matRipple", "", 1, "rounded-3xl", "bg-warning", "text-warning-content", "border-none", "w-[4.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled", "matTooltip"], ["btn", "", "matRipple", "", 1, "absolute", "bottom-2", "left-4", "w-32", "z-20", 3, "click"]], template: function LockerBookingsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275element(2, "simple-table", 10);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275template(4, LockerBookingsComponent_ng_template_4_Template, 7, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(6, LockerBookingsComponent_ng_template_6_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(8, LockerBookingsComponent_ng_template_8_Template, 2, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(10, LockerBookingsComponent_ng_template_10_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(12, LockerBookingsComponent_ng_template_12_Template, 21, 17, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(14, LockerBookingsComponent_ng_template_14_Template, 21, 14, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementEnd();
    \u0275\u0275template(16, LockerBookingsComponent_button_16_Template, 2, 0, "button", 11);
    \u0275\u0275pipe(17, "async");
  }
  if (rf & 2) {
    let tmp_9_0;
    const date_template_r14 = \u0275\u0275reference(5);
    const period_template_r15 = \u0275\u0275reference(7);
    const locker_template_r16 = \u0275\u0275reference(9);
    const user_template_r17 = \u0275\u0275reference(11);
    const status_template_r18 = \u0275\u0275reference(13);
    const option_template_r19 = \u0275\u0275reference(15);
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.bookings)("columns", \u0275\u0275pureFunction8(23, _c8, \u0275\u0275pureFunction1(9, _c02, date_template_r14), \u0275\u0275pureFunction1(11, _c12, period_template_r15), \u0275\u0275pureFunction1(13, _c22, user_template_r17), \u0275\u0275pureFunction0(15, _c32), \u0275\u0275pureFunction1(16, _c4, locker_template_r16), \u0275\u0275pureFunction0(18, _c5), \u0275\u0275pureFunction1(19, _c6, status_template_r18), \u0275\u0275pureFunction1(21, _c7, option_template_r19)))("sortable", true)("empty_message", ((tmp_9_0 = \u0275\u0275pipeBind1(3, 5, ctx.filters)) == null ? null : tmp_9_0.search) ? "No matching locker bookings" : "There are no locker booking for the currently selected date.");
    \u0275\u0275advance(14);
    \u0275\u0275property("ngIf", !ctx.loading && \u0275\u0275pipeBind1(17, 7, ctx.has_more_pages));
  }
}, dependencies: [NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, SimpleTableComponent, AsyncPipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=locker-bookings.component.css.map */"] });
var LockerBookingsComponent = _LockerBookingsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LockerBookingsComponent, { className: "LockerBookingsComponent", filePath: "apps/concierge/src/app/lockers/locker-bookings.component.ts", lineNumber: 248 });
})();

// apps/concierge/src/app/lockers/new-lockers.component.ts
var _c03 = ["app-new-lockers", ""];
function NewLockersComponent_mat_option_14_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 18);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_3_0 = \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)) == null ? null : tmp_3_0.display_name, " ");
  }
}
function NewLockersComponent_mat_option_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 15);
    \u0275\u0275template(2, NewLockersComponent_mat_option_14_div_2_Template, 5, 3, "div", 16);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx_r1.use_region);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function NewLockersComponent_ng_container_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "date-options", 19);
    \u0275\u0275listener("dateChange", function NewLockersComponent_ng_container_17_Template_date_options_dateChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "button", 20);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("click", function NewLockersComponent_ng_container_17_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.refresh());
    });
    \u0275\u0275elementStart(4, "app-icon");
    \u0275\u0275text(5, "refresh");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "button", 21);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("click", function NewLockersComponent_ng_container_17_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rejectAll());
    });
    \u0275\u0275elementStart(8, "app-icon");
    \u0275\u0275text(9, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(3, 2, ctx_r1.loading));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", \u0275\u0275pipeBind1(7, 4, ctx_r1.loading));
  }
}
function NewLockersComponent_ng_container_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 22);
    \u0275\u0275listener("click", function NewLockersComponent_ng_container_18_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementContainerEnd();
  }
}
function NewLockersComponent_mat_progress_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 23);
  }
}
var _NewLockersComponent = class _NewLockersComponent extends AsyncHandler {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _router, _route, _dialog, _settings) {
    super();
    this._state = _state;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.levels = this._state.levels;
    this.setDate = (date) => this._state.setFilters({ date });
    this.setFilters = (o) => this._state.setFilters(o);
    this.refresh = () => this._state.refresh();
    this.rejectAll = () => this._state.rejectAllLockers();
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
    this._state.refresh();
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        const url_parts = this._router.url?.split("/") || [""];
        this.path = url_parts[parts.length - 1].split("?")[0];
      }
    }));
    const parts = this._router.url?.split("/") || [""];
    this.path = parts[parts.length - 1].split("?")[0];
  }
  ngOnDestroy() {
    super.ngOnDestroy();
  }
  // public newLockerBooking() {
  //     const ref = this._dialog.open(LockerBookModalComponent, {});
  //     ref.afterClosed().subscribe((_) => {
  //         this._state.refresh();
  //     });
  // }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "locker" }
    });
  }
};
_NewLockersComponent.\u0275fac = function NewLockersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewLockersComponent)(\u0275\u0275directiveInject(LockersStateService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_NewLockersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewLockersComponent, selectors: [["", "app-new-lockers", ""]], features: [\u0275\u0275InheritDefinitionFeature], attrs: _c03, decls: 23, vars: 14, consts: [[1, "print:hidden"], [1, "flex", "flex-1", "h-px", "print:hidden"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "w-full", "py-4", "px-8", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-px"], [1, "mr-2", 3, "modelChange", "model"], [1, "w-full", "flex", "items-center", "px-8", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "flex-1", "h-1/2", "w-full", "relative", "overflow-auto", "px-4"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "dateChange"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Refresh List", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "disabled"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Reject All", 1, "ml-2", "rounded", "border", "border-base-200", 3, "click", "disabled"], ["btn", "", "icon", "", "matRipple", "", "matTooltip", "Locker Restrictions", 1, "bg-primary", "text-white", "rounded", 3, "click"], ["mode", "indeterminate", 1, "w-full"]], template: function NewLockersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar", 0);
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2)(4, "div", 3)(5, "h2", 4);
    \u0275\u0275text(6, "Locker Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 5);
    \u0275\u0275elementStart(8, "searchbar", 6);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275listener("modelChange", function NewLockersComponent_Template_searchbar_modelChange_8_listener($event) {
      return ctx.setFilters({ search: $event });
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 7)(11, "mat-form-field", 8)(12, "mat-select", 9);
    \u0275\u0275pipe(13, "async");
    \u0275\u0275listener("ngModelChange", function NewLockersComponent_Template_mat_select_ngModelChange_12_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(14, NewLockersComponent_mat_option_14_Template, 5, 3, "mat-option", 10);
    \u0275\u0275pipe(15, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(16, "div", 5);
    \u0275\u0275template(17, NewLockersComponent_ng_container_17_Template, 10, 6, "ng-container", 11)(18, NewLockersComponent_ng_container_18_Template, 4, 0, "ng-container", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "router-outlet");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, NewLockersComponent_mat_progress_bar_21_Template, 1, 0, "mat-progress-bar", 13);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    let tmp_1_0;
    \u0275\u0275advance(8);
    \u0275\u0275property("model", (tmp_0_0 = \u0275\u0275pipeBind1(9, 6, ctx.filters)) == null ? null : tmp_0_0.search);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", (tmp_1_0 = \u0275\u0275pipeBind1(13, 8, ctx.filters)) == null ? null : tmp_1_0.zones);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(15, 10, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.path === "events");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.path === "manage");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 12, ctx.loading) && ctx.path === "events");
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatTooltip, MatProgressBar, MatRipple, IconComponent, RouterOutlet, AsyncPipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-lockers.component.css.map */"] });
var NewLockersComponent = _NewLockersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewLockersComponent, { className: "NewLockersComponent", filePath: "apps/concierge/src/app/lockers/new-lockers.component.ts", lineNumber: 166 });
})();

// apps/concierge/src/app/lockers/lockers.module.ts
var ROUTES = [
  {
    path: "new",
    component: NewLockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "**", redirectTo: "events" }
    ]
  },
  {
    path: "",
    component: LockersComponent,
    children: [
      { path: "events", component: LockerBookingsComponent },
      { path: "**", redirectTo: "events" }
    ]
  }
];
var _LockersModule = class _LockersModule {
};
_LockersModule.\u0275fac = function LockersModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _LockersModule)();
};
_LockersModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _LockersModule });
_LockersModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  MatTabsModule,
  ReactiveFormsModule,
  UIModule,
  SharedExploreModule,
  SharedBookingsModule,
  FormFieldsModule,
  MatRadioModule,
  MatFormFieldModule,
  MatCheckboxModule,
  MatInputModule,
  RouterModule.forChild(ROUTES)
] });
var LockersModule = _LockersModule;
export {
  LockersModule
};
//# sourceMappingURL=lockers.module-HNE7MVKW.js.map
