import {
  AsyncHandler,
  BehaviorSubject,
  Booking,
  DefaultValueAccessor,
  Desk,
  EventEmitter,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  IconComponent,
  ItemListFieldComponent,
  MAT_DIALOG_DATA,
  MatCheckbox,
  MatDialog,
  MatDialogClose,
  MatDialogRef,
  MatError,
  MatFormField,
  MatInput,
  MatProgressSpinner,
  MatRipple,
  NgControlStatus,
  NgControlStatusGroup,
  NgIf,
  OrganisationService,
  SettingsService,
  Subject,
  Validators,
  __async,
  __spreadProps,
  __spreadValues,
  approveBooking,
  catchError,
  checkinBooking,
  combineLatest,
  debounceTime,
  distinctUntilChanged,
  endOfDay,
  first,
  format,
  getUnixTime,
  listChildMetadata,
  map,
  notifyError,
  notifyInfo,
  notifySuccess,
  of,
  openConfirmModal,
  queryPagedBookings,
  randomInt,
  rejectBooking,
  saveBooking,
  scan,
  shareReplay,
  showMetadata,
  startOfDay,
  switchMap,
  take,
  tap,
  updateMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵinject,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate1
} from "./chunk-L3HTKRSL.js";

// apps/concierge/src/app/desks/desk-modal.component.ts
function DeskModalComponent_button_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6)(1, "app-icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_main_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 7)(1, "div", 8)(2, "div", 9)(3, "label", 10);
    \u0275\u0275text(4, "Desk Name");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 11);
    \u0275\u0275element(8, "input", 12);
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10, "A name is required for desks");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div", 9)(12, "label", 13);
    \u0275\u0275text(13, "Map ID");
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(16, "mat-form-field", 11);
    \u0275\u0275element(17, "input", 14);
    \u0275\u0275elementStart(18, "mat-error");
    \u0275\u0275text(19, " A Map ID is required for desks ");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(20, "label", 15);
    \u0275\u0275text(21, "Groups");
    \u0275\u0275elementEnd();
    \u0275\u0275element(22, "item-list-field", 16);
    \u0275\u0275elementStart(23, "label", 15);
    \u0275\u0275text(24, "Features");
    \u0275\u0275elementEnd();
    \u0275\u0275element(25, "item-list-field", 17);
    \u0275\u0275elementStart(26, "label", 15);
    \u0275\u0275text(27, "Notes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "mat-form-field", 18);
    \u0275\u0275element(29, "textarea", 19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(30, "div", 20)(31, "mat-checkbox", 21);
    \u0275\u0275text(32, " Bookable ");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(33, "div", 22)(34, "button", 23);
    \u0275\u0275text(35, " Cancel ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(36, "button", 24);
    \u0275\u0275listener("click", function DeskModalComponent_main_5_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.postForm());
    });
    \u0275\u0275text(37, " Save ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r1.form);
  }
}
function DeskModalComponent_ng_template_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 25);
    \u0275\u0275element(1, "mat-spinner", 26);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3, "Saving desk details...");
    \u0275\u0275elementEnd()();
  }
}
var _DeskModalComponent = class _DeskModalComponent {
  get id() {
    return this._data?.desk?.id || "";
  }
  constructor(_data, _dialog_ref) {
    this._data = _data;
    this._dialog_ref = _dialog_ref;
    this.event = new EventEmitter();
    this.form = new FormGroup({
      id: new FormControl(""),
      name: new FormControl("", [Validators.required]),
      map_id: new FormControl("", [Validators.required]),
      groups: new FormControl([]),
      features: new FormControl([]),
      bookable: new FormControl(false),
      notes: new FormControl("")
    });
    if (_data?.desk)
      this.form.patchValue(_data.desk);
  }
  postForm() {
    this.form.markAllAsTouched();
    this.form.updateValueAndValidity();
    if (!this.form.valid)
      return;
    this.loading = true;
    const value = this.form.value;
    this._dialog_ref.disableClose = true;
    this.event.emit({ reason: "done", metadata: value });
  }
};
_DeskModalComponent.\u0275fac = function DeskModalComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DeskModalComponent)(\u0275\u0275directiveInject(MAT_DIALOG_DATA), \u0275\u0275directiveInject(MatDialogRef));
};
_DeskModalComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, decls: 8, vars: 4, consts: [["load_state", ""], [1, "w-[28rem]"], [1, "flex", "items-center", "justify-between", "px-2", "w-full"], [1, "px-2"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 4, "ngIf"], ["class", "p-4 flex flex-col", 3, "formGroup", 4, "ngIf", "ngIfElse"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4", "flex", "flex-col", 3, "formGroup"], [1, "flex", "space-x-2"], [1, "flex-1", "w-1/3"], ["for", "name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "name", "name", "formControlName", "name", "placeholder", "e.g. Office Desk"], ["for", "map-id"], ["matInput", "", "name", "map-id", "formControlName", "map_id", "placeholder", "e.g. table-01.012"], ["for", "notes"], ["placeholder", "Add user groups...", "formControlName", "groups", 1, "w-full"], ["placeholder", "Add features...", "formControlName", "features", 1, "w-full"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "name", "notes", "formControlName", "notes"], [1, "flex", "py-4"], ["formControlName", "bookable"], [1, "flex", "items-center", "justify-end", "space-x-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "w-32", "inverse"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-2"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "header", 2)(2, "h2", 3);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275template(4, DeskModalComponent_button_4_Template, 3, 0, "button", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, DeskModalComponent_main_5_Template, 38, 1, "main", 5);
    \u0275\u0275elementEnd();
    \u0275\u0275template(6, DeskModalComponent_ng_template_6_Template, 4, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    const load_state_r3 = \u0275\u0275reference(7);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx.id ? "Edit" : "New", " Desk");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx.loading)("ngIfElse", load_state_r3);
  }
}, dependencies: [NgIf, DefaultValueAccessor, NgControlStatus, NgControlStatusGroup, FormGroupDirective, FormControlName, MatFormField, MatError, MatInput, MatCheckbox, MatProgressSpinner, MatDialogClose, MatRipple, ItemListFieldComponent, IconComponent] });
var DeskModalComponent = _DeskModalComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 96 });
})();

// apps/concierge/src/app/desks/desks-state.service.ts
var _DesksStateService = class _DesksStateService extends AsyncHandler {
  nextPage() {
    this._call_next_page.next(`NEXT_${Date.now()}`);
  }
  constructor(_org, _dialog, _settings) {
    super();
    this._org = _org;
    this._dialog = _dialog;
    this._settings = _settings;
    this._filters = new BehaviorSubject({});
    this._desk_bookings = [];
    this._loading = new BehaviorSubject(false);
    this._change = new BehaviorSubject(0);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.desks = combineLatest([
      this._filters,
      this._change
    ]).pipe(debounceTime(500), switchMap(([filters]) => {
      const zones = filters.zones || [];
      return zones && !zones.includes("All") ? showMetadata(zones[0], "desks").pipe(map((m) => m.details instanceof Array ? m.details : []), catchError((_) => of([]))) : listChildMetadata(this._org.building?.id, {
        name: "desks"
      }).pipe(map((m) => m.map((i) => i.metadata?.desks?.details || []).reduce((c, i) => [...c, ...i], [])), catchError((_) => of([])));
    }), map((list) => {
      if (!(list instanceof Array))
        list = [];
      list.sort((a, b) => a.name?.localeCompare(b.name));
      return list.map((i) => new Desk(__spreadProps(__spreadValues({}, i), { qr_code: "" })));
    }), shareReplay(1));
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
      const zones = !filters.zones || filters.zones.some((z) => this._all_zones_keys.includes(z)) ? this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id) : [this._org.building.id] : filters.zones;
      this._next_page.next(() => queryPagedBookings({
        period_start: getUnixTime(startOfDay(date)),
        period_end: getUnixTime(endOfDay(date)),
        type: "desk",
        zones: zones.join(","),
        include_checked_out: true
      }).pipe(catchError((_) => of({ data: [], total: 0, next: null }))));
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
        return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: true })), catchError((_) => of({ data: [], total: 0, next: null })));
      }
      return next_page().pipe(map((data) => __spreadProps(__spreadValues({}, data), { reset: false })), catchError((_) => of({ data: [], total: 0, next: null })));
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
  addDesks(list) {
    return __async(this, null, function* () {
      const zone = this._filters.getValue().zones[0];
      const desk_list = yield this.desks.pipe(take(1)).toPromise();
      for (const desk of list) {
        const idx = desk_list.findIndex((_) => _.id === desk.id);
        if (idx >= 0)
          desk_list[idx] = desk;
        else
          desk_list.push(desk);
      }
      yield updateMetadata(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      }).toPromise();
      this._change.next(Date.now());
    });
  }
  editDesk(desk) {
    return __async(this, null, function* () {
      const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
      const state = yield Promise.race([
        ref.afterClosed().toPromise(),
        ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise()
      ]);
      if (state?.reason !== "done")
        return;
      const zone = this._filters.getValue().zones[0];
      const new_space = __spreadProps(__spreadValues({}, state.metadata), {
        id: state.metadata.id || `parking-${zone}.${randomInt(999999)}`
      });
      const desk_list = yield this.desks.pipe(take(1)).toPromise();
      const idx = desk_list.findIndex((_) => _.id === new_space.id);
      if (idx >= 0)
        desk_list[idx] = new_space;
      else
        desk_list.push(new_space);
      yield updateMetadata(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      }).toPromise();
      this._change.next(Date.now());
      ref.close();
    });
  }
  checkinDesk(desk, state = true) {
    return __async(this, null, function* () {
      const status = yield checkinBooking(desk.id, state ?? true).toPromise().catch((_) => ({ failed: true, error: _ }));
      if (status.failed) {
        notifyError(status.error ? `Error: ${status.error}` : `Error checking ${state ? "in" : "out"} desk booking`);
        throw status.error;
      }
      notifySuccess(`Checked ${state ? "in" : "out"} ${desk.user_name}.`);
    });
  }
  approveDesk(desk) {
    return __async(this, null, function* () {
      const success = yield approveBooking(desk.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError("Error approving in desk booking");
      }
      notifySuccess(`Approved desk booking for ${desk.user_name} on ${format(desk.date, "MMM do")}.`);
      desk.approved = true;
      desk.rejected = false;
    });
  }
  rejectDesk(desk) {
    return __async(this, null, function* () {
      const success = yield rejectBooking(desk.id).toPromise().catch((_) => "failed");
      if (success === "failed") {
        return notifyError("Error rejecting in desk booking");
      }
      notifySuccess(`Rejected desk booking for ${desk.user_name} on ${format(desk.date, "MMM do")}.`);
      desk.approved = false;
      desk.rejected = true;
    });
  }
  giveAccess(desk) {
    return __async(this, null, function* () {
      const success = yield saveBooking(new Booking(__spreadProps(__spreadValues({}, desk), { access: true }))).toPromise().catch((_) => "failed");
      if (success === "failed")
        return notifyError("Error giving building access booking host");
      notifySuccess(`Successfully gave building access to ${desk.user_name} for desk booking.`);
      this._desk_bookings = [...this._desk_bookings, success];
    });
  }
  rejectAllDesks() {
    return __async(this, null, function* () {
      const list = this._desk_bookings || [];
      if (list.length <= 0)
        return notifyInfo("No desks to reject for the selected date");
      const resp = yield openConfirmModal({
        title: "Cancel all desk bookings",
        content: "Are you sure you want to cancel all bookings for the selected date?",
        icon: {
          type: "icon",
          class: "material-icons",
          content: "delete"
        }
      }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Rejecting all desks for selected date...");
      yield Promise.all(list.map((desk) => rejectBooking(desk.id).toPromise()));
      notifySuccess("Successfully rejected all desk bookings for selected date.");
      resp.close();
    });
  }
};
_DesksStateService.\u0275fac = function DesksStateService_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _DesksStateService)(\u0275\u0275inject(OrganisationService), \u0275\u0275inject(MatDialog), \u0275\u0275inject(SettingsService));
};
_DesksStateService.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksStateService, factory: _DesksStateService.\u0275fac, providedIn: "root" });
var DesksStateService = _DesksStateService;

export {
  DesksStateService
};
//# sourceMappingURL=chunk-SKFL7X6J.js.map
