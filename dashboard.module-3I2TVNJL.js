import {
  ScheduleStateService
} from "./chunk-MY5EBCNK.js";
import {
  CalendarService
} from "./chunk-PYTR4IDO.js";
import {
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  Booking,
  CommonModule,
  DatePipe,
  DefaultValueAccessor,
  EventEmitter,
  EventFormService,
  FooterMenuComponent,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  IconComponent,
  MapLocateModalComponent,
  MatDialog,
  MatDialogClose,
  MatError,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatRipple,
  MatSelect,
  MatTooltip,
  NgControlStatus,
  NgControlStatusGroup,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  ReactiveFormsModule,
  RouterLink,
  RouterModule,
  ScrollingModule,
  SettingsService,
  SharedComponentModule,
  SlicePipe,
  TopbarComponent,
  User,
  UserAvatarComponent,
  Validators,
  addMonths,
  catchError,
  currentUser,
  debounceTime,
  differenceInMinutes,
  endOfDay,
  filter,
  first,
  getModule,
  isAfter,
  map,
  newCalendarEventFromBooking,
  of,
  queryBookings,
  queryEvents,
  searchStaff,
  shareReplay,
  showMetadata,
  switchMap,
  take,
  unique,
  updateMetadata,
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
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
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
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-W3HSAJDS.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/dashboard/dashboard-state.service.ts
var _DashboardStateService = class _DashboardStateService extends AsyncHandler {
  constructor(_settings, _calendar, _org, _event_form) {
    super();
    this._settings = _settings;
    this._calendar = _calendar;
    this._org = _org;
    this._event_form = _event_form;
    this._options = new BehaviorSubject({});
    this._free_spaces = new BehaviorSubject([]);
    this._upcoming_events = new BehaviorSubject([]);
    this._contacts = new BehaviorSubject([]);
    this._level_occupancy = new BehaviorSubject([]);
    this.free_spaces = this._free_spaces.asObservable();
    this.upcoming_events = this._upcoming_events.asObservable();
    this.contacts = this._contacts.asObservable();
    this.options = this._options.asObservable();
    this.search_results = this._options.pipe(debounceTime(500), switchMap(({ search }) => search ? searchStaff(search) : of([])), catchError((_) => []), shareReplay(1));
    this.level_occupancy = this._level_occupancy.asObservable();
    this.init();
  }
  init() {
    return __async(this, null, function* () {
      yield this._org.initialised.pipe(first((_) => _)).toPromise();
      this.subscription("building", this._org.active_building.pipe(filter((bld) => !!bld)).subscribe(() => this.updateBuildingMetadata()));
      let sys_id = this._org.binding("contact_tracing");
      if (!sys_id)
        return;
      const binding = getModule(sys_id, "AreaManagement").binding("overview");
      binding.listen().subscribe((d) => this.updateOccupancy(d || {}));
      binding.bind();
    });
  }
  setOptions(options) {
    this._options.next(__spreadValues(__spreadValues({}, this._options.getValue()), options));
  }
  pollFreeSpaces(delay = 10 * 1e3) {
    this.updateFreeSpaces();
    this.interval("free_spaces", () => this.updateFreeSpaces(), delay);
  }
  stopPollingFreeSpaces() {
    this.clearInterval("free_spaces");
  }
  pollUpcomingEvents(delay = 10 * 1e3) {
    this.updateUpcomingEvents();
    this.interval("upcoming_events", () => this.updateUpcomingEvents(), delay);
  }
  stopPollingUpcomingEvents() {
    this.clearInterval("upcoming_events");
  }
  updateContacts() {
    return __async(this, null, function* () {
      const metadata = yield showMetadata(currentUser().id, "contacts").toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      this._contacts.next(list.map((i) => new User(i)));
    });
  }
  addContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users.push(user);
      users = unique(users, "email");
      const metadata = yield updateMetadata(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      this._contacts.next(list.map((i) => new User(i)));
    });
  }
  removeContact(user) {
    return __async(this, null, function* () {
      let users = [...this._contacts.getValue()];
      users = users.filter((u) => u.email !== user.email);
      const metadata = yield updateMetadata(currentUser().id, {
        name: "contacts",
        description: "Contacts for the User",
        details: users
      }).toPromise();
      const list = metadata.details instanceof Array ? metadata.details : [];
      this._contacts.next(list.map((i) => new User(i)));
    });
  }
  updateOccupancy(map2) {
    return __async(this, null, function* () {
      const levels = [...this._org.levels];
      levels.sort((a, b) => map2[a.id]?.recommendation - map2[b.id]?.recommendation);
      this._level_occupancy.next(levels);
    });
  }
  updateFreeSpaces() {
    return __async(this, null, function* () {
      if (!this._org.building)
        return;
      const mins = Math.abs(differenceInMinutes(Date.now(), endOfDay(Date.now())));
      this._event_form.setOptions({
        zone_ids: [],
        capacity: 0,
        features: [],
        show_fav: false
      });
      this._event_form.form.patchValue({ date: Date.now(), duration: mins });
      const list = yield this._event_form.available_spaces.pipe(take(1)).toPromise();
      list.sort((a, b) => a.capacity - b.capacity);
      this._free_spaces.next(list);
    });
  }
  updateUpcomingEvents() {
    return __async(this, null, function* () {
      const period_start = Math.floor((/* @__PURE__ */ new Date()).valueOf() / 1e3);
      const period_end = Math.floor(endOfDay(/* @__PURE__ */ new Date()).valueOf() / 1e3);
      const events = yield (this._settings.get("app.events.use_bookings") ? queryBookings({
        period_start,
        period_end,
        type: "room",
        email: currentUser().email
      }).pipe(map((_) => _.map((i) => newCalendarEventFromBooking(i)))) : queryEvents({
        period_start,
        period_end,
        calendars: currentUser().email
      })).toPromise().catch((_) => []);
      const bookings = yield queryBookings({
        period_start,
        period_end,
        type: "desk",
        user: currentUser().email
      }).toPromise().catch((_) => []);
      const event_list = [...events, ...bookings].sort((a, b) => a.date - b.date);
      this._upcoming_events.next(event_list);
    });
  }
  updateBuildingMetadata() {
    return __async(this, null, function* () {
      const building = this._org.building;
      const metadata = yield showMetadata(building.id, "bindings").toPromise();
      if (!metadata.details.occupancy)
        return;
      const details = metadata.details.occupancy;
      const module = getModule(details.sys, details.module, details.index);
      if (!module)
        return;
      if (this._occupancy_binding) {
        this._occupancy_binding.unbind();
      }
      this._occupancy_binding = module.binding("occupancy");
      this._occupancy_binding.bind();
      this.subscription("occupancy_binding", this._occupancy_binding.listen().subscribe((value) => {
        const levels = Object.keys(value).map((key) => __spreadValues({
          id: key
        }, value[key]));
        levels.sort((a, b) => a.recommendation_factor - b.recommendation_factor);
        this._level_occupancy.next(levels.map((i) => this._org.levelWithID([i.id])));
      }));
    });
  }
};
_DashboardStateService.\u0275fac = function DashboardStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardStateService)(\u0275\u0275inject(SettingsService), \u0275\u0275inject(CalendarService), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(EventFormService));
};
_DashboardStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DashboardStateService, factory: _DashboardStateService.\u0275fac, providedIn: "root" });
var DashboardStateService = _DashboardStateService;

// apps/workplace/src/app/dashboard/dashboard-availability.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ level: a0 });
var _c2 = (a0) => ({ space: a0 });
function DashboardAvailabilityComponent_a_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r1 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0))("queryParams", \u0275\u0275pureFunction1(4, _c1, lvl_r1.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r1.display_name || lvl_r1.name, " ");
  }
}
function DashboardAvailabilityComponent_span_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1, "No free spaces in building");
    \u0275\u0275elementEnd();
  }
}
function DashboardAvailabilityComponent_div_12_a_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const space_r2 = ctx.$implicit;
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0))("queryParams", \u0275\u0275pureFunction1(4, _c2, space_r2.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", space_r2.display_name || space_r2.name, " ");
  }
}
function DashboardAvailabilityComponent_div_12_span_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1, "No free spaces");
    \u0275\u0275elementEnd();
  }
}
function DashboardAvailabilityComponent_div_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 2)(2, "div");
    \u0275\u0275text(3, "Spaces");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275template(5, DashboardAvailabilityComponent_div_12_a_5_Template, 3, 6, "a", 4);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275pipe(7, "slice");
    \u0275\u0275template(8, DashboardAvailabilityComponent_div_12_span_8_Template, 2, 0, "span", 12);
    \u0275\u0275pipe(9, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(7, 4, \u0275\u0275pipeBind1(6, 2, ctx_r2.space_list), 0, 3));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(9, 8, ctx_r2.space_list).length);
  }
}
var _DashboardAvailabilityComponent = class _DashboardAvailabilityComponent {
  constructor(_state) {
    this._state = _state;
    this.space_list = this._state.free_spaces;
    this.levels_free = this._state.level_occupancy;
  }
  ngOnInit() {
    return __async(this, null, function* () {
      this._state.pollFreeSpaces();
    });
  }
  ngOnDestroy() {
    this._state.stopPollingFreeSpaces();
  }
};
_DashboardAvailabilityComponent.\u0275fac = function DashboardAvailabilityComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardAvailabilityComponent)(\u0275\u0275directiveInject(DashboardStateService));
};
_DashboardAvailabilityComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardAvailabilityComponent, selectors: [["a-dashboard-availability"]], decls: 14, vars: 13, consts: [[1, "m-0", "font-medium", "text-xl"], [1, "flex", "flex-col", "items-center", "p-2", "bg-base-100", "shadow", "my-4", "rounded-lg"], [1, "flex", "items-center", "w-full", "mb-2"], ["free-levels", "", 1, "items", "space-y-2", "w-full"], ["btn", "", "matRipple", "", "class", "w-full", 3, "routerLink", "queryParams", 4, "ngFor", "ngForOf"], ["class", "text-black/30/30 text-sm mb-2", 4, "ngIf"], ["free-spaces", "", "class", "flex items-center flex-col rounded-lg bg-base-100 shadow my-4 p-2", 4, "ngIf"], ["btn", "", "matRipple", "", 1, "w-full", 3, "routerLink", "queryParams"], [1, "max-w-full", "truncate"], [1, "text-black/30/30", "text-sm", "mb-2"], ["free-spaces", "", 1, "flex", "items-center", "flex-col", "rounded-lg", "bg-base-100", "shadow", "my-4", "p-2"], [1, "items", "space-y-2", "w-full"], ["class", "text-dark-fade text-sm mb-2", 4, "ngIf"], [1, "text-dark-fade", "text-sm", "mb-2"]], template: function DashboardAvailabilityComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1, "Available Now");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 1)(3, "div", 2)(4, "div");
    \u0275\u0275text(5, "Building Levels");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 3);
    \u0275\u0275template(7, DashboardAvailabilityComponent_a_7_Template, 3, 6, "a", 4);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "slice");
    \u0275\u0275template(10, DashboardAvailabilityComponent_span_10_Template, 2, 0, "span", 5);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(12, DashboardAvailabilityComponent_div_12_Template, 10, 10, "div", 6);
    \u0275\u0275pipe(13, "async");
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(7);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(9, 5, \u0275\u0275pipeBind1(8, 3, ctx.levels_free), 0, 2));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", !\u0275\u0275pipeBind1(11, 9, ctx.levels_free).length);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (tmp_2_0 = \u0275\u0275pipeBind1(13, 11, ctx.space_list)) == null ? null : tmp_2_0.length);
  }
}, dependencies: [NgForOf, NgIf, MatRipple, RouterLink, AsyncPipe, SlicePipe], styles: ["\n\n[_nghost-%COMP%] {\n  padding: 1em;\n  min-width: 16rem;\n}\n/*# sourceMappingURL=dashboard-availability.component.css.map */"] });
var DashboardAvailabilityComponent = _DashboardAvailabilityComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardAvailabilityComponent, { className: "DashboardAvailabilityComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-availability.component.ts", lineNumber: 73 });
})();

// apps/workplace/src/app/dashboard/dashboard-delivery-modal.component.ts
var _DashboardDeliveryModalComponent = class _DashboardDeliveryModalComponent {
  constructor() {
    this.events = new EventEmitter();
    this.form = new FormGroup({
      name: new FormControl("", [Validators.required]),
      description: new FormControl(""),
      sender: new FormControl(""),
      priority: new FormControl("")
    });
  }
  register() {
    this.form.markAllAsTouched();
    if (!this.form.valid)
      return;
    this.events.emit({ reason: "done", metadata: this.form.value });
  }
};
_DashboardDeliveryModalComponent.\u0275fac = function DashboardDeliveryModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardDeliveryModalComponent)();
};
_DashboardDeliveryModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardDeliveryModalComponent, selectors: [["dashboard-delivery-modal"]], outputs: { events: "events" }, decls: 47, vars: 1, consts: [[1, "flex", "items-center", "justify-between"], ["icon", "", "mat-dialog-close", ""], [1, "p-2", "w-[24rem]", 3, "formGroup"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "Name of items being delivered", "formControlName", "name"], ["matInput", "", "placeholder", "Description of items being delivered", "formControlName", "description"], ["matInput", "", "placeholder", "Name of sender", "formControlName", "sender"], ["placeholder", "Low", "formControlName", "priority"], [1, "p-2", "flex", "items-center", "justify-center", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"]], template: function DashboardDeliveryModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header", 0)(1, "h3");
    \u0275\u0275text(2, "Register Delivery");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 1)(4, "app-icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "main", 2)(7, "div")(8, "label");
    \u0275\u0275text(9, "Name");
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(12, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-form-field", 3);
    \u0275\u0275element(14, "input", 4);
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "Name is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "div")(18, "label");
    \u0275\u0275text(19, "Description:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 3);
    \u0275\u0275element(21, "textarea", 5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div")(23, "label");
    \u0275\u0275text(24, "Sender:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "mat-form-field", 3);
    \u0275\u0275element(26, "input", 6);
    \u0275\u0275elementStart(27, "mat-error");
    \u0275\u0275text(28, "Sender is required");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(29, "div")(30, "label");
    \u0275\u0275text(31, "Priority:");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-form-field", 3)(33, "mat-select", 7)(34, "mat-option");
    \u0275\u0275text(35, "Very Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "mat-option");
    \u0275\u0275text(37, "Low");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-option");
    \u0275\u0275text(39, "Normal");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "mat-option");
    \u0275\u0275text(41, "High");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-option");
    \u0275\u0275text(43, "Very Height");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(44, "footer", 8)(45, "button", 9);
    \u0275\u0275listener("click", function DashboardDeliveryModalComponent_Template_button_click_45_listener() {
      return ctx.register();
    });
    \u0275\u0275text(46, " Register ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275property("formGroup", ctx.form);
  }
}, dependencies: [DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, IconComponent, MatOption, MatFormField, MatError, MatSelect, MatRipple, MatDialogClose, MatInput, FormGroupDirective, FormControlName] });
var DashboardDeliveryModalComponent = _DashboardDeliveryModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardDeliveryModalComponent, { className: "DashboardDeliveryModalComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-delivery-modal.component.ts", lineNumber: 70 });
})();

// apps/workplace/src/app/dashboard/dashboard-deliveries.component.ts
function DashboardDeliveriesComponent_div_3_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "div", 9);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(7, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (item_r2 == null ? null : item_r2.name) || "Untitled Delivery", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r2 && item_r2.received ? \u0275\u0275pipeBind2(6, 6, item_r2.received, "medium") : "Not received", " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-warning", !item_r2.received)("bg-success", item_r2.received);
  }
}
function DashboardDeliveriesComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275template(1, DashboardDeliveriesComponent_div_3_div_1_Template, 8, 9, "div", 5);
    \u0275\u0275elementStart(2, "button", 6);
    \u0275\u0275listener("click", function DashboardDeliveriesComponent_div_3_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.registerDelivery());
    });
    \u0275\u0275text(3, " Register Delivery ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", ctx_r2.deliveries);
  }
}
function DashboardDeliveriesComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " No registered deliveries ");
    \u0275\u0275elementEnd();
  }
}
var _DashboardDeliveriesComponent = class _DashboardDeliveriesComponent {
  constructor(_dialog) {
    this._dialog = _dialog;
    this.deliveries = [
      { name: "USB-C Cables", received: Date.now() },
      { name: "Desk Fan" }
    ];
  }
  registerDelivery() {
    return __async(this, null, function* () {
      const ref = this._dialog.open(DashboardDeliveryModalComponent);
      const details = yield Promise.race([
        ref.componentInstance.events.pipe(first((_) => _.reason === "done")).toPromise(),
        ref.afterClosed().toPromise()
      ]);
      if (details.reason !== "done")
        return;
      this.deliveries.push(details.metadata);
      ref.close();
    });
  }
};
_DashboardDeliveriesComponent.\u0275fac = function DashboardDeliveriesComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardDeliveriesComponent)(\u0275\u0275directiveInject(MatDialog));
};
_DashboardDeliveriesComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardDeliveriesComponent, selectors: [["dashboard-deliveries"]], decls: 6, vars: 2, consts: [["empty_state", ""], [1, "m-0", "my-2", "font-medium", "text-xl"], [1, "bg-base-100", "shadow", "p-2", "rounded"], ["class", "divide-y", 4, "ngIf", "ngIfElse"], [1, "divide-y"], ["class", "flex items-center py-2", 4, "ngFor", "ngForOf"], ["matRipple", "", 1, "w-full", "mt-2", 3, "click"], [1, "flex", "items-center", "py-2"], [1, "flex-1", "pl-2"], [1, ""], [1, "text-xs", "opacity-60"], [1, "m-4", "h-2", "w-2", "rounded-full"], [1, "p-8", "flex", "items-center", "justify-center", "opacity-40"]], template: function DashboardDeliveriesComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 1);
    \u0275\u0275text(1, "Deliveries");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 2);
    \u0275\u0275template(3, DashboardDeliveriesComponent_div_3_Template, 4, 1, "div", 3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DashboardDeliveriesComponent_ng_template_4_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const empty_state_r4 = \u0275\u0275reference(5);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.deliveries == null ? null : ctx.deliveries.length)("ngIfElse", empty_state_r4);
  }
}, dependencies: [NgForOf, NgIf, MatRipple, DatePipe] });
var DashboardDeliveriesComponent = _DashboardDeliveriesComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardDeliveriesComponent, { className: "DashboardDeliveriesComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-deliveries.component.ts", lineNumber: 51 });
})();

// apps/workplace/src/app/dashboard/dashboard-contacts.component.ts
var _c02 = ["input"];
var _c12 = () => ({ class: "material-icons", content: "person_add" });
var _c22 = () => ({ class: "material-icons", content: "close" });
function DashboardContactsComponent_div_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275element(1, "a-user-avatar", 16);
    \u0275\u0275elementStart(2, "div", 17);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function DashboardContactsComponent_div_3_Template_button_click_4_listener() {
      const user_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.removeUser(user_r3));
    });
    \u0275\u0275element(5, "app-icon", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r3.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(3, _c22));
  }
}
function DashboardContactsComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", !ctx_r3.search_str ? "Type to search for users..." : 'No matches for "' + ctx_r3.search_str + '"', " ");
  }
}
function DashboardContactsComponent_button_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function DashboardContactsComponent_button_17_Template_button_click_0_listener() {
      const user_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.addUser(user_r6));
    });
    \u0275\u0275elementStart(1, "div", 22);
    \u0275\u0275element(2, "a-user-avatar", 23);
    \u0275\u0275elementStart(3, "div", 24)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 25);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r6.email, " ");
  }
}
function DashboardContactsComponent_dashboard_deliveries_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "dashboard-deliveries");
  }
}
var _DashboardContactsComponent = class _DashboardContactsComponent extends AsyncHandler {
  get can_deliver() {
    return !!this._settings.get("app.can_deliver");
  }
  constructor(_state, _settings) {
    super();
    this._state = _state;
    this._settings = _settings;
    this.contacts = this._state.contacts;
    this.search_results = this._state.search_results;
    this.addUser = (u) => this._state.addContact(u);
    this.removeUser = (u) => this._state.removeContact(u);
    this.updateSearch = (s) => this._state.setOptions({ search: s });
    this.search_str = "";
  }
  ngOnInit() {
    this._state.updateContacts();
  }
  focusInput() {
    this.timeout("focus", () => {
      if (this._input_el) {
        this._input_el.nativeElement.focus();
      }
    });
  }
  clearInput() {
    this.search_str = "";
    this._state.setOptions({ search: "" });
  }
};
_DashboardContactsComponent.\u0275fac = function DashboardContactsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardContactsComponent)(\u0275\u0275directiveInject(DashboardStateService), \u0275\u0275directiveInject(SettingsService));
};
_DashboardContactsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardContactsComponent, selectors: [["a-dashboard-contacts"]], viewQuery: function DashboardContactsComponent_Query(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275viewQuery(_c02, 5);
  }
  if (rf & 2) {
    let _t;
    \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input_el = _t.first);
  }
}, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 18, consts: [["menu", "matMenu"], ["input", ""], [1, "m-0", "mb-2", "font-medium", "text-xl"], ["name", "contact-list", 1, "bg-base-300", "border", "border-base-200", "shadow", "rounded-lg", "p-2", "pl-0", "space-y-2", "flex", "flex-wrap"], ["name", "contact", "class", "bg-base-100 rounded-lg flex-1 flex flex-col items-center p-2 relative", 4, "ngFor", "ngForOf"], ["name", "contact", "btn", "", "matRipple", "", 1, "rounded-lg", "flex-1", "w-full", 3, "menuOpened", "menuClosed", "matMenuTriggerFor"], [1, "flex", "flex-col", "items-center", "p-4", "text-black", "w-full"], [1, "text-2xl", 3, "icon"], [1, "w-full", "leading-tight", "whitespace-normal"], ["xPosition", "before"], ["mat-menu-item", "", 1, "p-0", 3, "click"], ["placeholder", "Search for user...", 1, "w-full", "p-2", "text-base", 3, "ngModelChange", "ngModel"], ["mat-menu-item", "", 4, "ngIf"], ["mat-menu-item", "", 3, "click", 4, "ngFor", "ngForOf"], [4, "ngIf"], ["name", "contact", 1, "bg-base-100", "rounded-lg", "flex-1", "flex", "flex-col", "items-center", "p-2", "relative"], [1, "text-2xl", "mb-2", 3, "user"], ["name", "contact-name", 1, "text-sm", "mb-2"], ["icon", "", "name", "close", 3, "click"], [3, "icon"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "leading-tight"], [1, "text-xl", "mr-2", 3, "user"], [1, "flex-1"], [1, "text-xs", "text-dark-fade"]], template: function DashboardContactsComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "h3", 2);
    \u0275\u0275text(1, "Colleagues");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 3);
    \u0275\u0275template(3, DashboardContactsComponent_div_3_Template, 6, 4, "div", 4);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementStart(5, "button", 5);
    \u0275\u0275listener("menuOpened", function DashboardContactsComponent_Template_button_menuOpened_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.focusInput());
    })("menuClosed", function DashboardContactsComponent_Template_button_menuClosed_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.clearInput());
    });
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275element(7, "app-icon", 7);
    \u0275\u0275elementStart(8, "span", 8);
    \u0275\u0275text(9, "Click to add a person to contacts");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(10, "mat-menu", 9, 0)(12, "div", 10);
    \u0275\u0275listener("click", function DashboardContactsComponent_Template_div_click_12_listener($event) {
      \u0275\u0275restoreView(_r1);
      $event.stopPropagation();
      return \u0275\u0275resetView($event.preventDefault());
    });
    \u0275\u0275elementStart(13, "input", 11, 1);
    \u0275\u0275twoWayListener("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r1);
      \u0275\u0275twoWayBindingSet(ctx.search_str, $event) || (ctx.search_str = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function DashboardContactsComponent_Template_input_ngModelChange_13_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.updateSearch(ctx.search_str));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275template(15, DashboardContactsComponent_button_15_Template, 2, 1, "button", 12);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275template(17, DashboardContactsComponent_button_17_Template, 8, 3, "button", 13);
    \u0275\u0275pipe(18, "async");
    \u0275\u0275pipe(19, "slice");
    \u0275\u0275elementEnd();
    \u0275\u0275template(20, DashboardContactsComponent_dashboard_deliveries_20_Template, 1, 0, "dashboard-deliveries", 14);
  }
  if (rf & 2) {
    let tmp_6_0;
    const menu_r7 = \u0275\u0275reference(11);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 7, ctx.contacts));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r7);
    \u0275\u0275advance(2);
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(17, _c12));
    \u0275\u0275advance(6);
    \u0275\u0275twoWayProperty("ngModel", ctx.search_str);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !((tmp_6_0 = \u0275\u0275pipeBind1(16, 9, ctx.search_results)) == null ? null : tmp_6_0.length));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(19, 13, \u0275\u0275pipeBind1(18, 11, ctx.search_results), 0, 8));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx.can_deliver);
  }
}, dependencies: [NgForOf, NgIf, DefaultValueAccessor, NgControlStatus, NgModel, IconComponent, UserAvatarComponent, MatMenu, MatMenuItem, MatMenuTrigger, MatRipple, DashboardDeliveriesComponent, AsyncPipe, SlicePipe], styles: ["\n\n[_nghost-%COMP%] {\n  padding: 1em;\n  min-width: 16rem;\n}\n[name=contact-list][_ngcontent-%COMP%] {\n  padding: 0 0.5rem 0.5rem 0;\n}\n[name=contact][_ngcontent-%COMP%] {\n  min-width: 8rem;\n  width: 8rem;\n  margin-left: 0.5rem;\n  margin-top: 0.5rem;\n}\n[name=contact-name][_ngcontent-%COMP%] {\n  font-weight: 400;\n}\n[name=dot][_ngcontent-%COMP%] {\n  height: 8px;\n  width: 8px;\n  border-radius: 8px;\n  background-color: #22992e;\n}\nbutton[name=close][_ngcontent-%COMP%] {\n  position: absolute;\n  display: none;\n  top: 0.25rem;\n  right: 0.25rem;\n}\n[name=contact][_ngcontent-%COMP%]:hover   button[name=close][_ngcontent-%COMP%] {\n  display: initial;\n}\nbutton[name=contact][_ngcontent-%COMP%] {\n  background-color: #f0f0f0;\n  border: none;\n  min-width: calc(100% - 0.5rem) !important;\n}\n/*# sourceMappingURL=dashboard-contacts.component.css.map */"] });
var DashboardContactsComponent = _DashboardContactsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardContactsComponent, { className: "DashboardContactsComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-contacts.component.ts", lineNumber: 149 });
})();

// apps/workplace/src/app/dashboard/dashboard-schedule-item.component.ts
var _c03 = ["scheduled-item", ""];
var _c13 = (a0, a1) => ["/schedule", "view", a0, a1];
function DashboardScheduledItemComponent_div_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "app-icon", 9);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "slice");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, (ctx_r0.item == null ? null : ctx_r0.item.location) || (ctx_r0.item == null ? null : ctx_r0.item.description), 0, 255), " ");
  }
}
var _DashboardScheduledItemComponent = class _DashboardScheduledItemComponent {
  get type() {
    return this.item instanceof Booking ? "booking" : "event";
  }
  get has_ended() {
    return !this.item || this.item.id === "date" || isAfter(/* @__PURE__ */ new Date(), this.item.date + this.item.duration * 60 * 1e3);
  }
  get icon() {
    if (this.status === "declined")
      return "cancel";
    if (this.item.asset_id) {
      switch (this.item.booking_type) {
        case "desk":
          return "view_quilt";
        case "parking":
          return "local_parking";
      }
    }
    return "event";
  }
  get status() {
    if (!this.item || this.item.id === "date")
      return "declined";
    return this.item.status;
  }
};
_DashboardScheduledItemComponent.\u0275fac = function DashboardScheduledItemComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardScheduledItemComponent)();
};
_DashboardScheduledItemComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardScheduledItemComponent, selectors: [["", "scheduled-item", ""]], inputs: { item: "item" }, attrs: _c03, decls: 20, vars: 24, consts: [["btn", "", "matRipple", "", 1, "rounded-none", "my-1", "mx-4", "w-[calc(100%-2rem)]", "h-24", "bg-base-100", "hover:shadow", "p-0", 3, "routerLink"], [1, "flex", "items-center", "border", "border-base-200", "rounded-lg"], ["status", "", 1, "h-24", "w-20", "flex", "flex-col", "items-center", "justify-center", "text-white", "leading-tight"], [1, "text-2xl"], [1, "font-normal"], [1, "capitalize", "text-xs", "font-medium"], [1, "flex-1", "flex", "flex-col", "text-left", "p-2"], [1, "text-xl", "pl-1"], [1, "flex", "items-center", "font-normal", "leading-normal", "space-x-1"], [1, "text-lg"], [1, "text-sm"], ["class", "flex items-center font-normal leading-normal space-x-1", 4, "ngIf"]], template: function DashboardScheduledItemComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 0)(1, "div", 1)(2, "div", 2)(3, "app-icon", 3);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 6)(11, "div", 7);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 8)(14, "app-icon", 9);
    \u0275\u0275text(15, "today");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "span", 10);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(19, DashboardScheduledItemComponent_div_19_Template, 6, 5, "div", 11);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275classProp("opacity-50", ctx.has_ended);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction2(21, _c13, ctx.item == null ? null : ctx.item.id, ctx.type));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", ctx.status === "approved")("bg-warning", ctx.status === "tentative")("bg-error", ctx.status === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", (ctx.item == null ? null : ctx.item.all_day) ? "All Day" : \u0275\u0275pipeBind2(7, 15, ctx.item == null ? null : ctx.item.date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" (", ctx.status, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx.item == null ? null : ctx.item.title) || "Untitled Event", " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(18, 18, ctx.item == null ? null : ctx.item.date, "MMMM d"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", (ctx.item == null ? null : ctx.item.location) || (ctx.item == null ? null : ctx.item.description));
  }
}, dependencies: [NgIf, IconComponent, MatRipple, RouterLink, SlicePipe, DatePipe], encapsulation: 2 });
var DashboardScheduledItemComponent = _DashboardScheduledItemComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardScheduledItemComponent, { className: "DashboardScheduledItemComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-schedule-item.component.ts", lineNumber: 66 });
})();

// apps/workplace/src/app/dashboard/dashboard-upcoming.component.ts
var _c04 = () => ({ class: "material-icons", content: "group" });
function DashboardUpcomingComponent_div_2_div_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275element(1, "app-icon", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("icon", \u0275\u0275pureFunction0(3, _c04));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", event_r2.guests == null ? null : event_r2.guests.length, " Guest", (event_r2.guests == null ? null : event_r2.guests.length) === 1 ? "" : "s", " ");
  }
}
function DashboardUpcomingComponent_div_2_div_14_a_user_avatar_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 17);
  }
  if (rf & 2) {
    const guest_r4 = ctx.$implicit;
    \u0275\u0275property("user", guest_r4);
  }
}
function DashboardUpcomingComponent_div_2_div_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275template(1, DashboardUpcomingComponent_div_2_div_14_a_user_avatar_1_Template, 1, 1, "a-user-avatar", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", event_r2.guests);
  }
}
function DashboardUpcomingComponent_div_2_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 18);
    \u0275\u0275text(1, "Join Call");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("href", event_r2.meeting_link, \u0275\u0275sanitizeUrl);
  }
}
function DashboardUpcomingComponent_div_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275element(1, "div", 3);
    \u0275\u0275elementStart(2, "div", 4)(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 6);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 7)(9, "app-icon", 8);
    \u0275\u0275text(10, "room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "a", 9);
    \u0275\u0275listener("click", function DashboardUpcomingComponent_div_2_Template_a_click_11_listener() {
      const event_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(event_r2.space || event_r2.asset_id ? ctx_r2.locateSpace(event_r2.space || event_r2) : "");
    });
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(13, DashboardUpcomingComponent_div_2_div_13_Template, 3, 4, "div", 10)(14, DashboardUpcomingComponent_div_2_div_14_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, DashboardUpcomingComponent_div_2_a_15_Template, 2, 1, "a", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const event_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-primary", event_r2.asset_id);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 12, event_r2.date, "shortTime"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", event_r2.title, " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("underline", !!event_r2.space || !!event_r2.asset_id);
    \u0275\u0275property("matTooltip", event_r2.space ? "Locate Space" : "");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", (event_r2.space == null ? null : event_r2.space.display_name) || (event_r2.space == null ? null : event_r2.space.name) || event_r2.asset_name || "<No Location>", " ", (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.display_name) || (event_r2.space == null ? null : event_r2.space.level == null ? null : event_r2.space.level.name) ? ", " + event_r2.space.level.display_name || event_r2.space.level.name : "", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.guests);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.guests);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", event_r2.meeting_link);
  }
}
var _DashboardUpcomingComponent = class _DashboardUpcomingComponent {
  constructor(_org, _state, _schedule, _dialog) {
    this._org = _org;
    this._state = _state;
    this._schedule = _schedule;
    this._dialog = _dialog;
    this.today = /* @__PURE__ */ new Date();
    this.max_date = addMonths(this.today, 4);
    this.upcoming_events = this._state.upcoming_events;
    this.event_list = this._schedule.events.pipe(map((list) => {
      const updated_list = list.filter((_) => _.state !== "done" && _.is_done !== true).map((_) => _.space ? _ : __spreadProps(__spreadValues({}, _), {
        space: {
          name: _.asset_name || _.asset_id,
          map_id: _.asset_id,
          level: this._org.levelWithID(_.zones),
          zones: _.zones
        }
      }));
      return updated_list;
    }));
  }
  ngOnInit() {
    this._state.pollUpcomingEvents();
    this._schedule.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPollingUpcomingEvents();
    this._schedule.stopPolling();
  }
  locateSpace(space) {
    this._dialog.open(MapLocateModalComponent, {
      data: { item: __spreadProps(__spreadValues({}, space), { level: null }) }
    });
  }
  trackByFn(idx, event) {
    return event ? `${event.id}|${event.date}` : void 0;
  }
};
_DashboardUpcomingComponent.\u0275fac = function DashboardUpcomingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardUpcomingComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(DashboardStateService), \u0275\u0275directiveInject(ScheduleStateService), \u0275\u0275directiveInject(MatDialog));
};
_DashboardUpcomingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardUpcomingComponent, selectors: [["a-dashboard-upcoming"]], decls: 5, vars: 7, consts: [[1, "m-0", "mb-4", "font-medium", "text-xl"], ["name", "event", "class", "flex bg-base-100 shadow rounded-lg relative overflow-hidden mb-4", 4, "ngFor", "ngForOf"], ["name", "event", 1, "flex", "bg-base-100", "shadow", "rounded-lg", "relative", "overflow-hidden", "mb-4"], ["name", "status", 1, "absolute", "rounded-lg"], ["name", "details", 1, "flex-1", "mr-2"], ["time", "", 1, "text-primary", "text-sm", "font-bold", "mb-2"], ["name", "title", 1, "text-sm", "font-bold", "mb-2"], ["name", "space", 1, "text-xs", "flex", "items-center", "mb-2"], [1, "mr-2"], [1, "text-black", 3, "click", "matTooltip"], ["name", "attendees", "class", "text-xs flex items-center mb-2", 4, "ngIf"], ["name", "guests", "class", "flex space-x-2 text-sm", 4, "ngIf"], ["btn", "", "matRipple", "", "class", "uppercase h-12", 3, "href", 4, "ngIf"], ["name", "attendees", 1, "text-xs", "flex", "items-center", "mb-2"], [1, "mr-2", 3, "icon"], ["name", "guests", 1, "flex", "space-x-2", "text-sm"], [3, "user", 4, "ngFor", "ngForOf"], [3, "user"], ["btn", "", "matRipple", "", 1, "uppercase", "h-12", 3, "href"]], template: function DashboardUpcomingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 0);
    \u0275\u0275text(1, "Your Bookings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, DashboardUpcomingComponent_div_2_Template, 16, 15, "div", 1);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "slice");
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(4, 3, \u0275\u0275pipeBind1(3, 1, ctx.event_list), 0, 3));
  }
}, dependencies: [NgForOf, NgIf, IconComponent, UserAvatarComponent, MatRipple, MatTooltip, AsyncPipe, SlicePipe, DatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  padding: 1em;\n  min-width: 16rem;\n}\n[name=event][_ngcontent-%COMP%] {\n  padding: 1rem 1rem 1rem 2rem;\n}\n[name=status][_ngcontent-%COMP%] {\n  top: 1rem;\n  left: -0.8rem;\n  height: 2.5rem;\n  width: 1.6rem;\n  background-color: #00529b;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 3em;\n}\napp-icon[_ngcontent-%COMP%] {\n  margin-left: -0.25rem;\n}\n/*# sourceMappingURL=dashboard-upcoming.component.css.map */"] });
var DashboardUpcomingComponent = _DashboardUpcomingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardUpcomingComponent, { className: "DashboardUpcomingComponent", filePath: "apps/workplace/src/app/dashboard/dashboard-upcoming.component.ts", lineNumber: 126 });
})();

// apps/workplace/src/app/dashboard/dashboard.component.ts
var _c05 = ["dashboard", ""];
function DashboardComponent_a_dashboard_availability_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-dashboard-availability", 4);
  }
}
function DashboardComponent_a_dashboard_contacts_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-dashboard-contacts", 4);
  }
}
var _DashboardComponent = class _DashboardComponent {
  constructor(_settings) {
    this._settings = _settings;
  }
  get hide_availability() {
    return this._settings.get("app.hide_availability") !== false;
  }
  get hide_contacts() {
    return this._settings.get("app.hide_contacts") !== false;
  }
};
_DashboardComponent.\u0275fac = function DashboardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardComponent)(\u0275\u0275directiveInject(SettingsService));
};
_DashboardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DashboardComponent, selectors: [["", "dashboard", ""]], attrs: _c05, decls: 8, vars: 2, consts: [[1, "flex-1", "flex", "sm:flex-row", "flex-col-reverse", "h-1/2", "bg-base-200"], [1, "relative", "z-0", "flex", "flex-col", "flex-1", "h-1/2", "sm:h-auto", "overflow-hidden"], [1, "flex", "flex-1", "px-0", "sm:px-8", "flex-wrap", "overflow-auto", "h-px", "sm:h-auto"], ["class", "flex-1 min-w-64", 4, "ngIf"], [1, "flex-1", "min-w-64"]], template: function DashboardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
    \u0275\u0275elementStart(1, "div", 0)(2, "div", 1)(3, "main", 2);
    \u0275\u0275template(4, DashboardComponent_a_dashboard_availability_4_Template, 1, 0, "a-dashboard-availability", 3);
    \u0275\u0275element(5, "a-dashboard-upcoming", 4);
    \u0275\u0275template(6, DashboardComponent_a_dashboard_contacts_6_Template, 1, 0, "a-dashboard-contacts", 3);
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(7, "footer-menu");
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", !ctx.hide_availability);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.hide_contacts);
  }
}, dependencies: [NgIf, TopbarComponent, FooterMenuComponent, DashboardAvailabilityComponent, DashboardUpcomingComponent, DashboardContactsComponent], styles: ["\n\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n.top[_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\na[button].tile[_ngcontent-%COMP%] {\n  flex: 1;\n  border-radius: 0;\n  background-color: #fff;\n  color: rgba(0, 0, 0, 0.85);\n  border: none;\n  border-right: 1px solid #ccc;\n}\na[button].tile[_ngcontent-%COMP%]:last-child {\n  border: none;\n}\n/*# sourceMappingURL=dashboard.component.css.map */"] });
var DashboardComponent = _DashboardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DashboardComponent, { className: "DashboardComponent", filePath: "apps/workplace/src/app/dashboard/dashboard.component.ts", lineNumber: 67 });
})();

// apps/workplace/src/app/dashboard/dashboard.module.ts
var ROUTES = [{ path: "", component: DashboardComponent }];
var _DashboardModule = class _DashboardModule {
};
_DashboardModule.\u0275fac = function DashboardModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DashboardModule)();
};
_DashboardModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _DashboardModule });
_DashboardModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  SharedComponentModule,
  ReactiveFormsModule,
  ScrollingModule,
  RouterModule.forChild(ROUTES)
] });
var DashboardModule = _DashboardModule;
export {
  DashboardModule
};
//# sourceMappingURL=dashboard.module-3I2TVNJL.js.map
