import {
  ParkingStateService
} from "./chunk-ATT3BRUZ.js";
import "./chunk-EFGU63AF.js";
import "./chunk-YPSQ4RC3.js";
import {
  InviteVisitorFormComponent,
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
  BuildingPipe,
  CommonModule,
  CustomTooltipComponent,
  DateOptionsComponent,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatFormField,
  MatInput,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
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
  RouterModule,
  SearchbarComponent,
  SettingsService,
  SidebarComponent,
  SimpleTableComponent,
  UIModule,
  User,
  __async,
  __spreadProps,
  __spreadValues,
  addDays,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  debounceTime,
  downloadFile,
  filter,
  first,
  format,
  getTimezoneOffsetString,
  getUnixTime,
  jsonToCsv,
  map,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  rejectBooking,
  saveBooking,
  shareReplay,
  showMetadata,
  startOfDay,
  switchMap,
  take,
  tap,
  updateBooking,
  updateBookingInductionStatus,
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
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunctionV,
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
  ɵɵtwoWayProperty
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/visitors/visitor-induction-modal.component.ts
var _VisitorInductionModalComponent = class _VisitorInductionModalComponent {
  get induction_details() {
    return this._settings.get("app.induction_details");
  }
  get is_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  constructor(_settings) {
    this._settings = _settings;
    this.agree = false;
  }
};
_VisitorInductionModalComponent.\u0275fac = function VisitorInductionModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorInductionModalComponent)(\u0275\u0275directiveInject(SettingsService));
};
_VisitorInductionModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorInductionModalComponent, selectors: [["visitor-induction-modal"]], decls: 12, vars: 5, consts: [[1, "relative", "bg-base-100", "rounded", "shadow", "overflow-hidden", "flex", "flex-col", "items-center", "w-[32rem]", "p-4"], [1, "my-4"], [1, "rounded", "border", "border-base-300", "w-full", "p-4", "opacity-60", "text-sm", "overflow-y-auto", "overflow-x-hidden", "max-h-[50vh]", "whitespace-pre-wrap"], [1, "my-4", 3, "ngModelChange", "ngModel"], [1, "flex", "items-center", "justify-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-32", "clear", "underline", 3, "mat-dialog-close"], ["btn", "", "matRipple", "", 1, "w-32", 3, "disabled", "mat-dialog-close"]], template: function VisitorInductionModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "p", 1);
    \u0275\u0275text(2, " Please read the induction information below before proceeding ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 2);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-checkbox", 3);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorInductionModalComponent_Template_mat_checkbox_ngModelChange_5_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.agree, $event) || (ctx.agree = $event);
      return $event;
    });
    \u0275\u0275text(6, " I agree ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 4)(8, "button", 5);
    \u0275\u0275text(9, " Decline ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "button", 6);
    \u0275\u0275text(11, " Accept ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.induction_details, " ");
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx.agree);
    \u0275\u0275advance(3);
    \u0275\u0275property("mat-dialog-close", false);
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx.agree)("mat-dialog-close", true);
  }
}, dependencies: [NgControlStatus, NgModel, MatCheckbox, MatDialogClose, MatRipple] });
var VisitorInductionModalComponent = _VisitorInductionModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorInductionModalComponent, { className: "VisitorInductionModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-induction-modal.component.ts", lineNumber: 44 });
})();

// apps/concierge/src/app/visitors/visitor-notes-modal.component.ts
function VisitorNotesModalComponent_button_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 5)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function VisitorNotesModalComponent_main_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "mat-form-field", 7)(2, "textarea", 8);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorNotesModalComponent_main_6_Template_textarea_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.notes, $event) || (ctx_r1.notes = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.notes);
  }
}
function VisitorNotesModalComponent_footer_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 9)(1, "button", 10);
    \u0275\u0275listener("click", function VisitorNotesModalComponent_footer_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(2, "Save");
    \u0275\u0275elementEnd()();
  }
}
function VisitorNotesModalComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275element(1, "mat-spinner", 12);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving visitor notes...");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
  }
}
var _VisitorNotesModalComponent = class _VisitorNotesModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.item = this._data.item;
    this.notes = this.item.extension_data?.notes || "";
    this.loading = "";
    this.item = _data.item;
  }
  save() {
    return __async(this, null, function* () {
      this.loading = "Saving...";
      this._dialog_ref.disableClose = true;
      yield updateBooking(this.item.id, __spreadProps(__spreadValues({}, this.item.toJSON()), {
        extension_data: __spreadProps(__spreadValues({}, this.item.extension_data), {
          notes: this.notes
        })
      })).toPromise().catch((_) => {
        notifyError("Error saving visitor notes");
        this._dialog_ref.disableClose = false;
        this.loading = "";
        throw _;
      });
      this.loading = "";
      notifySuccess("Successfully saved visitor notes");
      this._dialog_ref.close();
    });
  }
};
_VisitorNotesModalComponent.\u0275fac = function VisitorNotesModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorNotesModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_VisitorNotesModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorNotesModalComponent, selectors: [["visitor-notes-modal"]], decls: 10, vars: 5, consts: [["loading_template", ""], [1, "font-medium", "px-2", "py-1", "text-sm", "bg-base-200", "rounded", "ml-2"], ["icon", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 w-[36rem] max-h-[65vh] overflow-auto", 4, "ngIf", "ngIfElse"], ["class", "flex justify-end space-x-2 p-2 border-t border-base-200", 4, "ngIf"], ["icon", "", "mat-dialog-close", ""], [1, "p-4", "w-[36rem]", "max-h-[65vh]", "overflow-auto"], ["appearance", "outline", 1, "w-full", "no-subscript"], ["matInput", "", "placeholder", "Notes for visitor", 1, "resize-none", "h-[60vh]", "max-h-[64rem]", 3, "ngModelChange", "ngModel"], [1, "flex", "justify-end", "space-x-2", "p-2", "border-t", "border-base-200"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], ["loading", "", 1, "absolute", "inset-0", "bg-base-100", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], [3, "diameter"]], template: function VisitorNotesModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "header")(1, "h2");
    \u0275\u0275text(2, " Notes for Visitor ");
    \u0275\u0275elementStart(3, "span", 1);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275template(5, VisitorNotesModalComponent_button_5_Template, 3, 0, "button", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, VisitorNotesModalComponent_main_6_Template, 3, 1, "main", 3)(7, VisitorNotesModalComponent_footer_7_Template, 3, 0, "footer", 4)(8, VisitorNotesModalComponent_ng_template_8_Template, 4, 1, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const loading_template_r4 = \u0275\u0275reference(9);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx.item == null ? null : ctx.item.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", loading_template_r4);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgModel, MatFormField, MatInput, MatProgressSpinner, MatDialogClose, MatRipple, IconComponent] });
var VisitorNotesModalComponent = _VisitorNotesModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorNotesModalComponent, { className: "VisitorNotesModalComponent", filePath: "apps/concierge/src/app/visitors/visitor-notes-modal.component.ts", lineNumber: 53 });
})();

// apps/concierge/src/app/visitors/visitors-state.service.ts
var _VisitorsStateService = class _VisitorsStateService extends AsyncHandler {
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
  }
  get is_induction_enabled() {
    return this._settings.get("app.induction_enabled") && this._settings.get("app.induction_details");
  }
  constructor(_dialog, _org, _settings) {
    super();
    this._dialog = _dialog;
    this._org = _org;
    this._settings = _settings;
    this._poll = new BehaviorSubject(0);
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = combineLatest([
      this._org.active_building,
      this._filters,
      this._poll
    ]).pipe(filter(([building]) => !!building), debounceTime(150), switchMap(([bld, filters]) => {
      this._loading.next(true);
      const date = filters.date ? new Date(filters.date) : /* @__PURE__ */ new Date();
      const start = startOfDay(date);
      const end = addDays(start, filters.period || 1);
      return queryBookings({
        type: "visitor",
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        zones: (filters.zones || []).join(",") || bld.id,
        include_checked_out: true,
        limit: 1e3
      }).pipe(catchError((_) => of([])));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered_bookings = combineLatest([
      this._search,
      this.bookings
    ]).pipe(map(([search, guest_list]) => {
      const filter2 = search.toLowerCase();
      const out = guest_list.filter((_) => _.asset_name?.toLowerCase().includes(filter2) || _.user_name?.toLowerCase().includes(filter2) || _.user_email?.toLowerCase().includes(filter2) || _.asset_id?.toLowerCase().includes(filter2)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  setFilters(filters) {
    this._filters.next(__spreadValues(__spreadValues({}, this._filters.getValue()), filters));
  }
  setSearchString(search) {
    this._search.next(search);
  }
  poll() {
    this._poll.next(Date.now());
  }
  startPolling(delay = 30 * 1e3) {
    this.interval("poll", () => this._poll.next(Date.now()), delay);
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setExt(guest, field, value) {
    return __async(this, null, function* () {
      const extension_data = __spreadValues({}, guest.extension_data);
      extension_data[field] = value;
      yield updateBooking(guest.id, __spreadProps(__spreadValues({}, guest.toJSON()), {
        extension_data
      })).toPromise();
      this._poll.next(Date.now());
    });
  }
  approveVisitor(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Approve Visitor",
        content: `Approve attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details.reason !== "done")
        return details.close();
      details.loading("Updating guest details");
      yield approveBooking(item.id).toPromise().catch((e) => {
        notifyError(`Error approving visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      notifySuccess(`Successfully approved visitor`);
      this._poll.next(Date.now());
      details.close();
    });
  }
  declineVisitor(item) {
    return __async(this, null, function* () {
      const details = yield openConfirmModal({
        title: "Decline Visitor",
        content: `Decline attendance of ${item.asset_name || item.asset_id} to their meeting?`,
        icon: { content: "event_available" }
      }, this._dialog);
      if (details.reason !== "done")
        return details.close();
      details.loading("Updating guest details");
      yield rejectBooking(item.id).toPromise().catch((e) => {
        notifyError(`Error declining visitor: ${e.message || e.error || e}`);
        details.close();
        throw e;
      });
      notifySuccess(`Successfully declining visitor`);
      this._poll.next(Date.now());
      details.close();
    });
  }
  requestInduction(item) {
    return __async(this, null, function* () {
      if (!this.is_induction_enabled)
        return true;
      const ref = this._dialog.open(VisitorInductionModalComponent, {
        data: { item }
      });
      const result = yield ref.afterClosed().toPromise();
      if (result === false) {
        yield updateBookingInductionStatus(item.id, "declined").toPromise();
      }
      if (!result)
        throw "User declined";
      yield updateBookingInductionStatus(item.id, "accepted").toPromise();
      return true;
    });
  }
  setCheckinState(item, state = true) {
    return __async(this, null, function* () {
      if (item.rejected)
        throw "You cannot check-in a rejected meeting";
      if (state === true)
        yield this.requestInduction(item);
      if (!item.approved && state === true) {
        yield approveBooking(item.id).toPromise();
      }
      const new_user = yield checkinBooking(item.id, state).toPromise().catch((e) => {
        notifyError(`Error checking ${state ? "in" : "out"} ${item.asset_name || item.asset_id} for ${item.user_name}'s meeting`);
        throw e;
      });
      notifySuccess(`Successfully checked ${state ? "in" : "out"} ${item.asset_name || item.asset_id} from ${item.user_name}'s meeting`);
    });
  }
  setCheckinStateForEvent(event_id, state = true) {
    return __async(this, null, function* () {
      if (!event_id)
        return;
      const bookings = yield this.bookings.pipe(take(1)).toPromise();
      const event_bookings = bookings.filter((_) => _.parent_id === event_id || _.extension_data.parent_id === event_id || _.linked_event?.id === event_id || _.linked_event?.event_id === event_id);
      if (!event_bookings.length)
        return;
      yield Promise.all(event_bookings.map((_) => checkinBooking(_.id, state).toPromise().catch((e) => {
        notifyError(`Error checking ${state ? "in" : "out"} ${_.asset_name || _.asset_id} for ${_.user_name}'s meeting`);
        throw e;
      })));
      notifySuccess(`Successfully checked ${state ? "in" : "out"} all visitors from ${event_bookings[0].user_name}'s meeting`);
      this._poll.next(Date.now());
    });
  }
  downloadVisitorsList() {
    return __async(this, null, function* () {
      const bookings = yield this.filtered_bookings.pipe(take(1)).toPromise();
      if (!bookings.length)
        return;
      const { date } = this._filters.getValue();
      const list = bookings.map((_) => ({
        Name: _.asset_name,
        Email: _.asset_id,
        "Checked In": _.checked_in,
        Host: _.user_email || "",
        Status: _.status,
        Date: format(_.date, "dd MMM " + this.time_format)
      }));
      const data = jsonToCsv(list);
      downloadFile(`visitor-list-${format(date || Date.now(), "MMM-dd")}.csv`, data);
    });
  }
  editVisitorNotes(item) {
    const ref = this._dialog.open(VisitorNotesModalComponent, {
      data: { item }
    });
    ref.afterClosed().subscribe(() => this.poll());
  }
};
_VisitorsStateService.\u0275fac = function VisitorsStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsStateService)(\u0275\u0275inject(MatDialog), \u0275\u0275inject(OrganisationService), \u0275\u0275inject(SettingsService));
};
_VisitorsStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VisitorsStateService, factory: _VisitorsStateService.\u0275fac, providedIn: "root" });
var VisitorsStateService = _VisitorsStateService;

// apps/concierge/src/app/visitors/visitors-topbar.component.ts
function VisitorsTopbarComponent_mat_option_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
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
var _VisitorsTopbarComponent = class _VisitorsTopbarComponent extends AsyncHandler {
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
      this.setSearch("");
    });
  }
};
_VisitorsTopbarComponent.\u0275fac = function VisitorsTopbarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsTopbarComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(Router));
};
_VisitorsTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsTopbarComponent, selectors: [["visitors-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 10, consts: [[1, "flex", "items-center", "bg-base-100", "h-20", "px-4", "border-b", "border-base-200", "space-x-2"], ["appearance", "outline"], ["multiple", "", "placeholder", "All Levels", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], ["placeholder", "Viewing Period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], [3, "dateChange"]], template: function VisitorsTopbarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "mat-form-field", 1)(2, "mat-select", 2);
    \u0275\u0275twoWayListener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_2_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(3, VisitorsTopbarComponent_mat_option_3_Template, 2, 2, "mat-option", 3);
    \u0275\u0275pipe(4, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 1)(6, "mat-select", 4);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275listener("ngModelChange", function VisitorsTopbarComponent_Template_mat_select_ngModelChange_6_listener($event) {
      return ctx.setFilters({ period: $event });
    });
    \u0275\u0275elementStart(8, "mat-option", 5);
    \u0275\u0275text(9, "Show Day");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-option", 5);
    \u0275\u0275text(11, "Show Week");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 5);
    \u0275\u0275text(13, "Show Month");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(14, "div", 6);
    \u0275\u0275elementStart(15, "searchbar", 7);
    \u0275\u0275listener("modelChange", function VisitorsTopbarComponent_Template_searchbar_modelChange_15_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "date-options", 8);
    \u0275\u0275listener("dateChange", function VisitorsTopbarComponent_Template_date_options_dateChange_16_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(4, 6, ctx.levels));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ((tmp_2_0 = \u0275\u0275pipeBind1(7, 8, ctx.filters)) == null ? null : tmp_2_0.period) || 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 1);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 7);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", 30);
  }
}, dependencies: [NgForOf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, MatFormField, MatSelect, MatOption, AsyncPipe], styles: ["\n\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=visitors-topbar.component.css.map */"] });
var VisitorsTopbarComponent = _VisitorsTopbarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsTopbarComponent, { className: "VisitorsTopbarComponent", filePath: "apps/concierge/src/app/visitors/visitors-topbar.component.ts", lineNumber: 58 });
})();

// apps/concierge/src/app/visitors/guest-listing.component.ts
var _c0 = (a0) => ({ key: "state", name: "Checked In", content: a0, size: "6.5rem", sortable: false });
var _c1 = (a0) => ({ key: "date", name: "Time", content: a0, size: "6rem" });
var _c2 = (a0) => ({ key: "asset_name", name: "Visitor", content: a0 });
var _c3 = (a0) => ({ key: "user_name", name: "Host", content: a0 });
var _c4 = (a0) => ({ key: "status", name: "State", content: a0, size: "9.5rem" });
var _c5 = (a0, a1) => ({ key: "induction", name: "Inducted", content: a0, show: a1, size: "5.5rem" });
var _c6 = (a0, a1) => ({ key: "parking_space", name: "Parking", content: a0, show: a1, size: "5.5rem" });
var _c7 = (a0) => ({ key: "notes", name: "Notes", content: a0, sortable: false, size: "4.5rem" });
var _c8 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.25rem", sortable: false });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
function GuestListingComponent_ng_template_2_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", "Checked out at:\n" + \u0275\u0275pipeBind3(1, 1, row_r1.checked_out_at * 1e3, ctx_r1.time_format, ctx_r1.tz));
  }
}
function GuestListingComponent_ng_template_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20)(1, "app-icon");
    \u0275\u0275text(2, "question_mark");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_2_div_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", "Checked in at:\n" + \u0275\u0275pipeBind3(1, 1, row_r1.checked_in_at * 1e3, ctx_r1.time_format, ctx_r1.tz));
  }
}
function GuestListingComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GuestListingComponent_ng_template_2_div_0_Template, 4, 5, "div", 16)(1, GuestListingComponent_ng_template_2_div_1_Template, 3, 0, "div", 17)(2, GuestListingComponent_ng_template_2_div_2_Template, 4, 5, "div", 18);
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    \u0275\u0275property("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && row_r1.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !(row_r1 == null ? null : row_r1.checked_in) && !row_r1.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r1 == null ? null : row_r1.checked_in);
  }
}
function GuestListingComponent_ng_template_4_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.asset_id, " ");
  }
}
function GuestListingComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GuestListingComponent_ng_template_4_div_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.asset_name || row_r3.asset_id);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r3.asset_name && row_r3.asset_id);
  }
}
function GuestListingComponent_ng_template_6_div_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.user_email, " ");
  }
}
function GuestListingComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(3, GuestListingComponent_ng_template_6_div_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.user_name || row_r4.user_email);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r4.user_name && row_r4.user_email);
  }
}
function GuestListingComponent_ng_template_8_button_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) ? "Confirmed" : (row_r5.extension_data == null ? null : row_r5.extension_data.id_confirmed) === false ? "Rejected" : "Submitted", " ");
  }
}
function GuestListingComponent_ng_template_8_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "button", 30);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_8_ng_template_2_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", true));
    });
    \u0275\u0275text(3, " Confirm ID ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 31);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_8_ng_template_2_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const row_r5 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r5, "id_confirmed", false));
    });
    \u0275\u0275text(5, " Reject ID ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275property("src", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url, \u0275\u0275sanitizeUrl);
  }
}
function GuestListingComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275template(1, GuestListingComponent_ng_template_8_button_1_Template, 2, 1, "button", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275template(2, GuestListingComponent_ng_template_8_ng_template_2_Template, 6, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    const id_confirmation_r7 = \u0275\u0275reference(3);
    \u0275\u0275property("content", id_confirmation_r7);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r5.extension_data == null ? null : row_r5.extension_data.id_data == null ? null : row_r5.extension_data.id_data.url);
  }
}
function GuestListingComponent_ng_template_10_div_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "app-icon");
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, GuestListingComponent_ng_template_10_div_0_Template, 3, 0, "div", 32);
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    \u0275\u0275property("ngIf", row_r8.extension_data.parking_booking_id);
  }
}
function GuestListingComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 34)(1, "app-icon");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const data_r9 = ctx.data;
    \u0275\u0275classProp("bg-success", data_r9 === "accepted")("text-success-content", data_r9 === "accepted")("bg-warning", data_r9 !== "accepted" && data_r9 !== "declined")("text-warning-content", data_r9 !== "accepted" && data_r9 !== "declined")("bg-error", data_r9 === "declined")("text-error-content", data_r9 === "declined");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", data_r9 === "accepted" ? "done" : data_r9 === "declined" ? "close" : "question_mark", " ");
  }
}
function GuestListingComponent_ng_template_14_app_icon_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "app-icon", 42);
    \u0275\u0275text(1, " arrow_drop_down ");
    \u0275\u0275elementEnd();
  }
}
function GuestListingComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 35)(1, "button", 36)(2, "div", 37)(3, "div", 38);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, GuestListingComponent_ng_template_14_app_icon_5_Template, 2, 0, "app-icon", 39);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(6, "mat-menu", null, 11)(8, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_14_Template_button_click_8_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveVisitor(row_r11));
    });
    \u0275\u0275elementStart(9, "div", 41)(10, "app-icon", 42);
    \u0275\u0275text(11, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 43);
    \u0275\u0275text(13, "Approve Visitor");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_14_Template_button_click_14_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.declineVisitor(row_r11));
    });
    \u0275\u0275elementStart(15, "div", 41)(16, "app-icon", 44);
    \u0275\u0275text(17, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 43);
    \u0275\u0275text(19, "Decline Visitor");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(7);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r11 == null ? null : row_r11.status) === "approved")("bg-success", (row_r11 == null ? null : row_r11.status) === "approved")("text-error-content", (row_r11 == null ? null : row_r11.status) === "declined")("bg-error", (row_r11 == null ? null : row_r11.status) === "declined")("text-neutral-content", (row_r11 == null ? null : row_r11.status) === "ended")("bg-neutral", (row_r11 == null ? null : row_r11.status) === "ended")("text-warning-content", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("bg-warning", (row_r11 == null ? null : row_r11.status) !== "ended" && (row_r11 == null ? null : row_r11.status) !== "approved" && (row_r11 == null ? null : row_r11.status) !== "declined")("opacity-30", (row_r11 == null ? null : row_r11.status) === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r12)("disabled", (row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (row_r11 == null ? null : row_r11.status) === "ended" ? "Ended" : (row_r11 == null ? null : row_r11.status) === "approved" ? "Approved" : (row_r11 == null ? null : row_r11.status) === "declined" ? "Declined" : "Pending", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !((row_r11 == null ? null : row_r11.status) === "ended" || row_r11.checked_in && !row_r11.checked_out_at));
  }
}
function GuestListingComponent_ng_template_16_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 46);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r13.date, "z", ctx_r1.tz), " ");
  }
}
function GuestListingComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, GuestListingComponent_ng_template_16_span_4_Template, 3, 5, "span", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_12_0;
    const row_r13 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(3, 4, row_r13.date, ((tmp_12_0 = \u0275\u0275pipeBind1(2, 2, ctx_r1.filters)) == null ? null : tmp_12_0.period) > 1 ? "MMM d, " + ctx_r1.time_format : ctx_r1.time_format, ctx_r1.tz), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ctx_r1.timezone);
  }
}
function GuestListingComponent_ng_template_18_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reserveParking(row_r16));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "app-icon", 42);
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "Reserve Parking Space");
    \u0275\u0275elementEnd()()();
  }
}
function GuestListingComponent_ng_template_18_a_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 52);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r17 = ctx.$implicit;
    \u0275\u0275property("href", item_r17.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r17.name, " ");
  }
}
function GuestListingComponent_ng_template_18_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r18);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.printQRCode());
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "app-icon", 42);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "Print QR Code");
    \u0275\u0275elementEnd()()();
  }
}
function GuestListingComponent_ng_template_18_button_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r19 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_button_29_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r19);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(row_r16.checked_in ? ctx_r1.checkout(row_r16) : ctx_r1.checkin(row_r16));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "app-icon", 42);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r16 = \u0275\u0275nextContext().row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r16.checked_in ? "event_busy" : "event_available", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r16.checked_in ? "Checkout" : "Checkin", " Guest ");
  }
}
function GuestListingComponent_ng_template_18_ng_container_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_container_30_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkinAllVisitors(row_r16));
    });
    \u0275\u0275elementStart(2, "div", 41)(3, "app-icon", 42);
    \u0275\u0275text(4, " event_available ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6, "Checkin all for Meeting");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_ng_container_30_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r16 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkoutAllVisitors(row_r16));
    });
    \u0275\u0275elementStart(8, "div", 41)(9, "app-icon", 44);
    \u0275\u0275text(10, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12, "Checkout all for Meeting");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementContainerEnd();
  }
}
function GuestListingComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 47)(1, "button", 48)(2, "app-icon");
    \u0275\u0275text(3, "more_horiz");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "mat-menu", null, 12)(6, "button", 49)(7, "div", 41)(8, "app-icon", 42);
    \u0275\u0275text(9, "attachment");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div");
    \u0275\u0275text(11, "View Attachments");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(12, GuestListingComponent_ng_template_18_button_12_Template, 6, 0, "button", 50);
    \u0275\u0275elementStart(13, "mat-menu", null, 11);
    \u0275\u0275template(15, GuestListingComponent_ng_template_18_a_15_Template, 2, 2, "a", 51);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 40);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_18_Template_button_click_16_listener() {
      const row_r16 = \u0275\u0275restoreView(_r14).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setExt(row_r16, "remote", true));
    });
    \u0275\u0275elementStart(17, "div", 41)(18, "app-icon", 42);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div");
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, GuestListingComponent_ng_template_18_button_22_Template, 6, 0, "button", 50);
    \u0275\u0275elementStart(23, "a", 52)(24, "div", 41)(25, "app-icon", 42);
    \u0275\u0275text(26, "email");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div");
    \u0275\u0275text(28);
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(29, GuestListingComponent_ng_template_18_button_29_Template, 6, 2, "button", 50)(30, GuestListingComponent_ng_template_18_ng_container_30_Template, 13, 0, "ng-container", 53);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    const guest_menu_r21 = \u0275\u0275reference(5);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", guest_menu_r21);
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", !(row_r16.attachment == null ? null : row_r16.attachment.length))("matMenuTriggerFor", ctx_r1.attachment_menu);
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", ctx_r1.has_parking && !row_r16.extension_data.parking_booking_id);
    \u0275\u0275advance(3);
    \u0275\u0275property("ngForOf", row_r16.attachments);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", row_r16.extension_data.remote ? "business" : "laptop", " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" Set as ", row_r16.extension_data.remote ? "Onsite" : "Remote", " Visitor ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r1.can_print);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + (row_r16 == null ? null : row_r16.asset_id), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" Email ", (row_r16 == null ? null : row_r16.user_email) === (row_r16 == null ? null : row_r16.asset_id) ? "Host" : "Guest", " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !row_r16.checked_out_at);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", row_r16.linked_event);
  }
}
function GuestListingComponent_ng_template_20_div_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 57)(1, "app-icon", 58);
    \u0275\u0275text(2, " info_i ");
    \u0275\u0275elementEnd()();
  }
}
function GuestListingComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 54)(1, "button", 55);
    \u0275\u0275listener("click", function GuestListingComponent_ng_template_20_Template_button_click_1_listener() {
      const row_r23 = \u0275\u0275restoreView(_r22).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editVisitorNotes(row_r23));
    });
    \u0275\u0275elementStart(2, "app-icon", 42);
    \u0275\u0275text(3, "edit_square");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(4, GuestListingComponent_ng_template_20_div_4_Template, 3, 0, "div", 56);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r23 = ctx.row;
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", row_r23.extension_data == null ? null : row_r23.extension_data.notes == null ? null : row_r23.extension_data.notes.length);
  }
}
function GuestListingComponent_button_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 59);
    \u0275\u0275listener("click", function GuestListingComponent_button_22_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r24);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.downloadVisitorList());
    });
    \u0275\u0275elementStart(1, "app-icon");
    \u0275\u0275text(2, "download");
    \u0275\u0275elementEnd()();
  }
}
var _GuestListingComponent = class _GuestListingComponent extends AsyncHandler {
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get has_parking() {
    return this._settings.get("app.features")?.includes("parking") && this._settings.get("app.visitors.has_parking");
  }
  get time_format() {
    return this._settings.time_format;
  }
  inducted(item) {
    if (item.checked_in)
      return true;
    return item.process_state.includes("declined") ? false : item.process_state.includes("inducted") || item.induction ? true : null;
  }
  constructor(_state, _parking, _settings, _org) {
    super();
    this._state = _state;
    this._parking = _parking;
    this._settings = _settings;
    this._org = _org;
    this.guests = this._state.filtered_bookings;
    this.search = this._state.search;
    this.filters = this._state.filters;
    this.inductions_enabled = false;
    this.downloadVisitorList = () => this._state.downloadVisitorsList();
    this.approveVisitor = (u) => this._state.approveVisitor(u);
    this.declineVisitor = (u) => this._state.declineVisitor(u);
    this.checkinAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, true);
    this.checkoutAllVisitors = (u) => this._state.setCheckinStateForEvent(u.linked_event?.id, false);
    this.setExt = (u, f, v) => this._state.setExt(u, f, v);
    this.editVisitorNotes = (u) => this._state.editVisitorNotes(u);
    this.checkin = (item) => __async(this, null, function* () {
      yield this._state.setCheckinState(item, true).catch((e) => {
        if (e !== "User declined")
          notifyError(e);
      });
      this._state.poll();
    });
    this.checkout = (item) => __async(this, null, function* () {
      yield this._state.setCheckinState(item, false).catch((_) => null);
      this._state.poll();
    });
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.subscribe((bld) => __async(this, null, function* () {
      if (!bld)
        return;
      const visitor_kiosk_app = this._settings.get("app.visitor_kiosk_app") || "visitor-kiosk_app";
      const metadata = yield showMetadata(bld.id, visitor_kiosk_app).toPromise();
      this.inductions_enabled = metadata.details?.induction_enabled && metadata.details?.induction_details;
    })));
  }
  reserveParking(item) {
    return __async(this, null, function* () {
      const id = yield this._parking.editReservation(void 0, {
        parent_id: item.id,
        user: new User({ email: item.asset_id, name: item.asset_name }),
        link_id: item.id,
        date: item.date,
        external_user: true
      });
      if (id) {
        yield saveBooking(new Booking(__spreadProps(__spreadValues({}, item), { parking_booking_id: id }))).toPromise();
        this._state.poll();
      }
    });
  }
};
_GuestListingComponent.\u0275fac = function GuestListingComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _GuestListingComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(ParkingStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(OrganisationService));
};
_GuestListingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GuestListingComponent, selectors: [["guest-listings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 25, vars: 39, consts: [["state_template", ""], ["person_template", ""], ["host_template", ""], ["id_template", ""], ["parking_template", ""], ["induction_template", ""], ["status_template", ""], ["date_template", ""], ["action_template", ""], ["notes_template", ""], ["id_confirmation", ""], ["menu", "matMenu"], ["guest_menu", "matMenu"], [1, "min-w-[72rem]", "block", "text-sm", "z-0", 3, "data", "columns", "filter", "sortable"], ["class", "bg-secondary hover:shadow-lg shadow absolute bottom-4 right-4 text-white h-12 w-12 z-20", "matTooltip", "Download Visitor List", "matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click", 4, "ngIf"], [1, "w-full", "h-8"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-base-400 text-neutral-content mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-warning text-warning-content mx-auto", "matTooltip", "Not checked in", "matTooltipPosition", "right", 4, "ngIf"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", "matTooltipPosition", "right", 3, "matTooltip", 4, "ngIf"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-base-400", "text-neutral-content", "mx-auto", 3, "matTooltip"], ["matTooltip", "Not checked in", "matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-warning", "text-warning-content", "mx-auto"], ["matTooltipPosition", "right", 1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto", 3, "matTooltip"], [1, "px-4", "py-2"], ["class", "opacity-30 text-xs", 4, "ngIf"], [1, "opacity-30", "text-xs"], ["customTooltip", "", 3, "content"], ["matRipple", "", "class", "bg-success rounded-3xl px-4 py-2 text-white", 4, "ngIf"], ["matRipple", "", 1, "bg-success", "rounded-3xl", "px-4", "py-2", "text-white"], [1, "bg-base-100", "rounded", "p-2", "flex", "flex-col", "space-y-2", "my-2", "w-[20rem]"], [1, "max-w-[20rem]", "max-h-[20rem]", "object-contain", 3, "src"], ["matRipple", "", 3, "click"], ["matRipple", "", 1, "inverse", "mt-2", 3, "click"], ["class", "rounded h-8 w-8 flex items-center justify-center text-2xl bg-success text-success-content mx-auto", 4, "ngIf"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "bg-success", "text-success-content", "mx-auto"], [1, "rounded", "h-8", "w-8", "flex", "items-center", "justify-center", "text-2xl", "mx-auto"], [1, "px-4"], ["matRipple", "", 1, "rounded-3xl", "border-none", "w-[7.5rem]", "h-10", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "pl-4", "pr-2", "space-x-2"], [1, "flex-1", "text-left"], ["class", "text-2xl", 4, "ngIf"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], [1, "text-2xl", "text-error"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "flex", "items-center", "justify-end", "px-2"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "disabled", "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click", 4, "ngIf"], ["mat-menu-item", "", 3, "href", 4, "ngFor", "ngForOf"], ["mat-menu-item", "", 3, "href"], [4, "ngIf"], [1, "relative", "p-4", "mx-auto"], ["matTooltip", "Edit Visitor Notes", "matTooltipPosition", "left", "icon", "", "matRipple", "", 3, "click"], ["class", "absolute top-1 right-1 bg-info text-info-content rounded-full h-4 w-4 flex items-center justify-center", "matTooltip", "Visitor Notes Available", 4, "ngIf"], ["matTooltip", "Visitor Notes Available", 1, "absolute", "top-1", "right-1", "bg-info", "text-info-content", "rounded-full", "h-4", "w-4", "flex", "items-center", "justify-center"], ["className", "material-symbols-rounded", 1, "text-sm"], ["matTooltip", "Download Visitor List", "matTooltipPosition", "left", "icon", "", "matRipple", "", 1, "bg-secondary", "hover:shadow-lg", "shadow", "absolute", "bottom-4", "right-4", "text-white", "h-12", "w-12", "z-20", 3, "click"]], template: function GuestListingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275template(2, GuestListingComponent_ng_template_2_Template, 3, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(4, GuestListingComponent_ng_template_4_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(6, GuestListingComponent_ng_template_6_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(8, GuestListingComponent_ng_template_8_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(10, GuestListingComponent_ng_template_10_Template, 1, 1, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(12, GuestListingComponent_ng_template_12_Template, 3, 13, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(14, GuestListingComponent_ng_template_14_Template, 20, 22, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(16, GuestListingComponent_ng_template_16_Template, 5, 8, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(18, GuestListingComponent_ng_template_18_Template, 31, 12, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(20, GuestListingComponent_ng_template_20_Template, 5, 1, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(22, GuestListingComponent_button_22_Template, 3, 0, "button", 14);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275element(24, "div", 15);
  }
  if (rf & 2) {
    let tmp_14_0;
    const state_template_r25 = \u0275\u0275reference(3);
    const person_template_r26 = \u0275\u0275reference(5);
    const host_template_r27 = \u0275\u0275reference(7);
    const parking_template_r28 = \u0275\u0275reference(11);
    const induction_template_r29 = \u0275\u0275reference(13);
    const status_template_r30 = \u0275\u0275reference(15);
    const date_template_r31 = \u0275\u0275reference(17);
    const action_template_r32 = \u0275\u0275reference(19);
    const notes_template_r33 = \u0275\u0275reference(21);
    \u0275\u0275property("data", ctx.guests)("columns", \u0275\u0275pureFunctionV(29, _c9, [\u0275\u0275pureFunction1(9, _c0, state_template_r25), \u0275\u0275pureFunction1(11, _c1, date_template_r31), \u0275\u0275pureFunction1(13, _c2, person_template_r26), \u0275\u0275pureFunction1(15, _c3, host_template_r27), \u0275\u0275pureFunction1(17, _c4, status_template_r30), \u0275\u0275pureFunction2(19, _c5, induction_template_r29, !!ctx.inductions_enabled), \u0275\u0275pureFunction2(22, _c6, parking_template_r28, !!ctx.has_parking), \u0275\u0275pureFunction1(25, _c7, notes_template_r33), \u0275\u0275pureFunction1(27, _c8, action_template_r32)]))("filter", \u0275\u0275pipeBind1(1, 5, ctx.search))("sortable", true);
    \u0275\u0275advance(22);
    \u0275\u0275property("ngIf", (tmp_14_0 = \u0275\u0275pipeBind1(23, 7, ctx.guests)) == null ? null : tmp_14_0.length);
  }
}, dependencies: [NgForOf, NgIf, MatMenu, MatMenuItem, MatMenuTrigger, MatTooltip, MatRipple, IconComponent, CustomTooltipComponent, SimpleTableComponent, AsyncPipe, DatePipe] });
var GuestListingComponent = _GuestListingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GuestListingComponent, { className: "GuestListingComponent", filePath: "apps/concierge/src/app/visitors/guest-listing.component.ts", lineNumber: 456 });
})();

// apps/concierge/src/app/visitors/visitors.component.ts
var _c02 = ["app-visitors", ""];
function VisitorsComponent_mat_progress_bar_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
  }
}
var _VisitorsComponent = class _VisitorsComponent {
  constructor(_state) {
    this._state = _state;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_VisitorsComponent.\u0275fac = function VisitorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsComponent)(\u0275\u0275directiveInject(VisitorsStateService));
};
_VisitorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorsComponent, selectors: [["", "app-visitors", ""]], attrs: _c02, decls: 6, vars: 3, consts: [[1, "relative", "w-full", "flex", "flex-col", "bg-base-200"], [1, "w-full"], [1, "w-full", "flex-1", "h-0"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate", 1, "w-full"]], template: function VisitorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "sidebar");
    \u0275\u0275elementStart(1, "main", 0);
    \u0275\u0275element(2, "visitors-topbar", 1)(3, "guest-listings", 2);
    \u0275\u0275template(4, VisitorsComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 3);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(5, 1, ctx.loading));
  }
}, dependencies: [NgIf, SidebarComponent, MatProgressBar, VisitorsTopbarComponent, GuestListingComponent, AsyncPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=visitors.component.css.map */"] });
var VisitorsComponent = _VisitorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorsComponent, { className: "VisitorsComponent", filePath: "apps/concierge/src/app/visitors/visitors.component.ts", lineNumber: 28 });
})();

// apps/concierge/src/app/visitors/invite-visitor-modal.component.ts
var _InviteVisitorModalComponent = class _InviteVisitorModalComponent {
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.date = this._data.date;
  }
  onDone() {
    this._dialog_ref.close();
  }
};
_InviteVisitorModalComponent.\u0275fac = function InviteVisitorModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _InviteVisitorModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_InviteVisitorModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorModalComponent, selectors: [["invite-visitor-modal"]], decls: 2, vars: 1, consts: [[1, "relative", "min-w-[40rem]", "min-h-[40rem]"], [3, "done", "date"]], template: function InviteVisitorModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 0)(1, "invite-visitor-form", 1);
    \u0275\u0275listener("done", function InviteVisitorModalComponent_Template_invite_visitor_form_done_1_listener() {
      return ctx.onDone();
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("date", ctx.date);
  }
}, dependencies: [InviteVisitorFormComponent] });
var InviteVisitorModalComponent = _InviteVisitorModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorModalComponent, { className: "InviteVisitorModalComponent", filePath: "apps/concierge/src/app/visitors/invite-visitor-modal.component.ts", lineNumber: 16 });
})();

// apps/concierge/src/app/visitors/new-visitors.component.ts
var _c03 = ["app-new-visitors", ""];
function NewVisitorsComponent_mat_option_15_div_2_Template(rf, ctx) {
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
function NewVisitorsComponent_mat_option_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 14)(1, "div", 15);
    \u0275\u0275template(2, NewVisitorsComponent_mat_option_15_div_2_Template, 5, 3, "div", 16);
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
function NewVisitorsComponent_mat_progress_bar_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19);
  }
}
var _NewVisitorsComponent = class _NewVisitorsComponent {
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  constructor(_state, _org, _router, _route, _dialog, _settings) {
    this._state = _state;
    this._org = _org;
    this._router = _router;
    this._route = _route;
    this._dialog = _dialog;
    this._settings = _settings;
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.levels = combineLatest([
      this._org.active_building,
      this._org.active_region
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
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
  inviteVisitor() {
    return __async(this, null, function* () {
      this._dialog.open(InviteVisitorModalComponent, {
        data: {
          date: yield this._state.filters.pipe(take(1), map((f) => f.date || Date.now())).toPromise()
        }
      });
    });
  }
  ngOnInit() {
    this._state.startPolling();
  }
  ngOnDestroy() {
    this._state.stopPolling();
  }
};
_NewVisitorsComponent.\u0275fac = function NewVisitorsComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _NewVisitorsComponent)(\u0275\u0275directiveInject(VisitorsStateService), \u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(ActivatedRoute), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_NewVisitorsComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewVisitorsComponent, selectors: [["", "app-new-visitors", ""]], attrs: _c03, decls: 23, vars: 9, consts: [[1, "flex", "flex-1", "h-px"], [1, "flex", "flex-col", "flex-1", "w-1/2", "h-full"], [1, "flex", "items-center", "px-8", "py-4", "space-x-2"], [1, "text-2xl", "font-medium"], [1, "flex-1", "w-2"], [1, "mr-2", 3, "modelChange"], ["btn", "", "matRipple", "", 3, "click"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["placeholder", "All Levels", "multiple", "", 3, "ngModelChange", "ngModel"], [3, "value", 4, "ngFor", "ngForOf"], [3, "dateChange"], [1, "mx-8", "flex-1", "h-1/2", "overflow-auto"], ["class", "w-full", "mode", "indeterminate", 4, "ngIf"], [3, "value"], [1, "flex", "flex-col-reverse"], ["class", "text-xs opacity-30", 4, "ngIf"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["mode", "indeterminate", 1, "w-full"]], template: function NewVisitorsComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 0);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 1)(4, "div", 2)(5, "h2", 3);
    \u0275\u0275text(6, "Visitors");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "div", 4);
    \u0275\u0275elementStart(8, "searchbar", 5);
    \u0275\u0275listener("modelChange", function NewVisitorsComponent_Template_searchbar_modelChange_8_listener($event) {
      return ctx.setSearch($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "button", 6);
    \u0275\u0275listener("click", function NewVisitorsComponent_Template_button_click_9_listener() {
      return ctx.inviteVisitor();
    });
    \u0275\u0275text(10, " Invite Visitor ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "div", 7)(12, "mat-form-field", 8)(13, "mat-select", 9);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275listener("ngModelChange", function NewVisitorsComponent_Template_mat_select_ngModelChange_13_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275template(15, NewVisitorsComponent_mat_option_15_Template, 5, 3, "mat-option", 10);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "div", 4);
    \u0275\u0275elementStart(18, "date-options", 11);
    \u0275\u0275listener("dateChange", function NewVisitorsComponent_Template_date_options_dateChange_18_listener($event) {
      return ctx.setDate($event);
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "div", 12);
    \u0275\u0275element(20, "guest-listings");
    \u0275\u0275elementEnd();
    \u0275\u0275template(21, NewVisitorsComponent_mat_progress_bar_21_Template, 1, 0, "mat-progress-bar", 13);
    \u0275\u0275pipe(22, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_0_0;
    \u0275\u0275advance(13);
    \u0275\u0275property("ngModel", (tmp_0_0 = \u0275\u0275pipeBind1(14, 3, ctx.filters)) == null ? null : tmp_0_0.zones);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(16, 5, ctx.levels));
    \u0275\u0275advance(6);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(22, 7, ctx.loading));
  }
}, dependencies: [NgForOf, NgIf, NgControlStatus, NgModel, DateOptionsComponent, SearchbarComponent, ApplicationTopbarComponent, ApplicationSidebarComponent, MatFormField, MatSelect, MatOption, MatProgressBar, MatRipple, GuestListingComponent, AsyncPipe, BuildingPipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--b1);\n}\n/*# sourceMappingURL=new-visitors.component.css.map */"] });
var NewVisitorsComponent = _NewVisitorsComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewVisitorsComponent, { className: "NewVisitorsComponent", filePath: "apps/concierge/src/app/visitors/new-visitors.component.ts", lineNumber: 88 });
})();

// apps/concierge/src/app/visitors/visitors.module.ts
var ROUTES = [
  { path: "", component: VisitorsComponent },
  { path: "new", component: NewVisitorsComponent }
];
var _VisitorsModule = class _VisitorsModule {
};
_VisitorsModule.\u0275fac = function VisitorsModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _VisitorsModule)();
};
_VisitorsModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VisitorsModule });
_VisitorsModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  FormsModule,
  UIModule,
  SharedBookingsModule,
  RouterModule.forChild(ROUTES)
] });
var VisitorsModule = _VisitorsModule;
export {
  VisitorsModule
};
//# sourceMappingURL=visitors.module-EMT7IAAQ.js.map
