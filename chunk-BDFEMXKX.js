import {
  SelectMapItemModalComponent
} from "./chunk-IJJ7QVUD.js";
import {
  BookingHistoryModalComponent
} from "./chunk-4MA6WQW6.js";
import {
  ItemListFieldComponent
} from "./chunk-G26YIFAG.js";
import {
  openConfirmModal
} from "./chunk-YYNQUF4U.js";
import {
  UserSearchFieldComponent
} from "./chunk-C3OJ6TPY.js";
import {
  showStaff
} from "./chunk-MW5L6XB7.js";
import {
  approveBooking,
  cancelOverlappingRecurringBookings,
  queryBookings,
  queryPagedBookings,
  rejectBooking,
  rejectBookingInstance,
  removeBooking,
  saveBooking,
  setBookingCheckedIn,
  updateBooking
} from "./chunk-RFY2Q4RB.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  SettingsToggleComponent
} from "./chunk-H5FMDY3A.js";
import {
  subDays
} from "./chunk-X4FVLD5M.js";
import {
  AsyncHandler,
  Booking,
  Component,
  Desk,
  FormField,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  OrganisationService,
  Output,
  RecurrenceDays,
  SettingsService,
  TranslatePipe,
  Vu,
  Xu,
  addHours,
  addMinutes,
  addMonths,
  computed,
  debounced,
  downloadFile,
  effect,
  endOfDay,
  form,
  getTimezoneDifferenceInHours,
  getUnixTime,
  i18n,
  inject,
  jsonToCsv,
  nc,
  nextValueFrom,
  notifyError,
  notifyInfo,
  notifySuccess,
  output,
  randomInt,
  randomString,
  required,
  resource,
  setClassMetadata,
  setTimeInTimezone,
  signal,
  startOfDay,
  unique,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-OAKJKJVS.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/desks/desk-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
function DeskModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_Conditional_6_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 35);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "APP.CONCIERGE.ASSIGNED_FUTURE_DESK_BOOKINGS", \u0275\u0275pureFunction1(5, _c0, ctx_r1.future_bookings().length), ctx_r1.future_bookings().length), " ");
  }
}
function DeskModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(12, "div", 12)(13, "div", 13)(14, "label", 14);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 10);
    \u0275\u0275element(20, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(21, "mat-error");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(24, "div", 13)(25, "label", 16);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementStart(28, "span");
    \u0275\u0275text(29, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "div", 12)(31, "mat-form-field", 10);
    \u0275\u0275element(32, "input", 17);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(34, "mat-error");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 18);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_37_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.selectItemfromMap());
    });
    \u0275\u0275elementStart(39, "icon");
    \u0275\u0275text(40, "place");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(41, "label", 19);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div", 20);
    \u0275\u0275element(45, "a-user-search-field", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(46, "button", 22);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_46_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearUser());
    });
    \u0275\u0275elementStart(48, "icon", 23);
    \u0275\u0275text(49, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(50, DeskModalComponent_Conditional_6_Conditional_50_Template, 6, 7, "div", 24);
    \u0275\u0275elementStart(51, "div", 25);
    \u0275\u0275element(52, "settings-toggle", 26);
    \u0275\u0275pipe(53, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(54, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(55, "label", 28);
    \u0275\u0275text(56);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(58, "item-list-field", 29);
    \u0275\u0275pipe(59, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(60, "label", 28);
    \u0275\u0275text(61);
    \u0275\u0275pipe(62, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(63, "item-list-field", 29);
    \u0275\u0275pipe(64, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(65, "label", 30);
    \u0275\u0275text(66);
    \u0275\u0275pipe(67, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(68, "item-list-field", 29);
    \u0275\u0275pipe(69, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(70, "label", 28);
    \u0275\u0275text(71);
    \u0275\u0275pipe(72, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(73, "mat-form-field", 31);
    \u0275\u0275element(74, "textarea", 32);
    \u0275\u0275pipe(75, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(76, "label", 33);
    \u0275\u0275text(77);
    \u0275\u0275pipe(78, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(79, "mat-form-field", 10);
    \u0275\u0275element(80, "input", 32);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "label", 34);
    \u0275\u0275text(83);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(85, "mat-form-field", 10);
    \u0275\u0275element(86, "input", 32);
    \u0275\u0275pipe(87, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 35, "APP.CONCIERGE.DESKS_ID"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 37, "FORM.ID_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 39, "APP.CONCIERGE.DESKS_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 41, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 43, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r1.form.map_id)("placeholder", \u0275\u0275pipeBind1(33, 45, "APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 47, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(38, 49, "APP.CONCIERGE.POI_MAP_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(43, 51, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.assigned_user);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(47, 53, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.future_bookings().length ? 50 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.bookable)("label", \u0275\u0275pipeBind1(53, 55, "COMMON.BOOKABLE"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(57, 57, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(59, 59, "BOOKINGS.GROUPS"))("formField", ctx_r1.form.groups);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(62, 61, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(64, 63, "COMMON.FEATURES"))("formField", ctx_r1.form.features);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(67, 65, "COMMON.TAGS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(69, 67, "COMMON.TAGS"))("formField", ctx_r1.form.tags);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(72, 69, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(75, 71, "FORM.NOTES"))("formField", ctx_r1.form.notes);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(78, 73, "APP.CONCIERGE.DESKS_HOMEBASE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(81, 75, "APP.CONCIERGE.DESKS_HOMEBASE"))("formField", ctx_r1.form.homebase);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(84, 77, "APP.CONCIERGE.DESKS_SECURITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(87, 79, "APP.CONCIERGE.DESKS_SECURITY"))("formField", ctx_r1.form.security);
    \u0275\u0275control();
  }
}
function DeskModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 36);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.DESKS_SAVING"));
  }
}
var CHARS = "0123456789ABCDEF";
var DeskModalComponent = class _DeskModalComponent {
  get id() {
    return this._data?.desk?.id || "";
  }
  get desk() {
    return this._data?.desk;
  }
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.event = output();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.future_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "future_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._assigned_email = computed(
      () => this.model().assigned_to,
      ...ngDevMode ? [{ debugName: "_assigned_email" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.model = signal(
      {
        id: ``,
        name: "",
        map_id: "",
        groups: [],
        features: [],
        tags: [],
        bookable: false,
        notes: "",
        assigned_user: null,
        assigned_to: "",
        assigned_name: "",
        homebase: "",
        security: ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.map_id);
    });
    const desk = this._data?.desk;
    if (desk) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: desk.id ?? m.id,
        name: desk.name ?? m.name,
        map_id: desk.map_id ?? m.map_id,
        groups: desk.groups ?? m.groups,
        features: desk.features ?? m.features,
        tags: desk.tags ?? m.tags,
        bookable: desk.bookable ?? m.bookable,
        notes: desk.notes ?? m.notes,
        assigned_to: desk.assigned_to ?? m.assigned_to,
        assigned_name: desk.assigned_name ?? m.assigned_name,
        homebase: desk.homebase ?? m.homebase,
        security: desk.security ?? m.security
      }));
    }
    if (!this.model().id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: `desk-${randomString(3, CHARS)}_${randomString(5, CHARS)}`
      }));
    }
    effect(() => this._checkFutureBookings(this._assigned_email()));
  }
  /**
   * Warn when the assigned user already has upcoming desk bookings. The
   * desk being edited is excluded so its own assignment booking does not
   * trigger the warning.
   */
  async _checkFutureBookings(email) {
    if (!email) {
      this.future_bookings.set([]);
      return;
    }
    const now = Date.now();
    const bookings = await queryBookings({
      period_start: getUnixTime(now),
      period_end: getUnixTime(addMonths(now, 12)),
      type: "desk",
      email,
      include_checked_out: true
    });
    if (this._assigned_email() !== email)
      return;
    this.future_bookings.set(bookings.filter((booking) => booking.asset_id !== this.id));
  }
  async ngOnInit() {
    if (this.desk?.assigned_to) {
      const user = await showStaff(this.desk.assigned_to);
      if (user) {
        this.model.update((m) => __spreadProps(__spreadValues({}, m), {
          assigned_user: user,
          assigned_to: user.email,
          assigned_name: user.name
        }));
      }
    }
  }
  clearUser() {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      assigned_user: null,
      assigned_to: "",
      assigned_name: ""
    }));
  }
  postForm() {
    this.form().markAsTouched();
    if (!this.form().valid())
      return;
    this.loading.set(true);
    const value = __spreadValues({}, this.model());
    if (value.assigned_user) {
      value.assigned_to = value.assigned_user?.email || value.assigned_to;
      value.assigned_name = value.assigned_user?.name || value.assigned_name;
    } else {
      delete value.assigned_to;
      delete value.assigned_name;
    }
    delete value.assigned_user;
    this._dialog_ref.disableClose = true;
    const has_changes = Object.keys(this.desk).some((key) => value[key] !== this.desk[key]);
    if (has_changes) {
      this.event.emit({ reason: "done", metadata: value });
    } else {
      this._dialog_ref.disableClose = false;
      notifyInfo("No changes were made.");
      this._dialog_ref.close();
    }
  }
  selectItemfromMap() {
    let level = this.desk.zone;
    const ref = this._dialog.open(SelectMapItemModalComponent, {
      data: {
        location: this.model().map_id,
        level_id: this.form
      }
    });
    ref.afterClosed().subscribe((d) => {
      if (!d)
        return;
      level = ref.componentInstance.level || level;
      const zones = unique([
        this._org.organisation.id,
        this._org.building.parent_id,
        this._org.building.id,
        level?.id
      ]);
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { map_id: d }));
    });
  }
  static {
    this.\u0275fac = function DeskModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [[1, "w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full"], ["for", "id"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "desk-10.123", 3, "formField"], [1, "flex", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "name"], ["matInput", "", "placeholder", "e.g. Office Desk", 3, "formField"], ["for", "map-id"], ["matInput", "", 3, "formField", "placeholder"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "min-w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], [1, "flex-1", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "bg-warning/10", "border-warning", "text-warning-content", "mb-4", "flex", "items-start", "space-x-2", "rounded-sm", "border", "p-2", "text-sm"], [1, "flex", "space-x-4", "pb-4"], [1, "flex-1", 3, "formField", "label"], [1, "flex-1"], ["for", "notes"], [1, "w-full", 3, "placeholder", "formField"], ["for", "tags"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "homebase"], ["for", "security"], [1, "text-warning"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, DeskModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, DeskModalComponent_Conditional_6_Template, 88, 81, "main", 4)(7, DeskModalComponent_Conditional_7_Template, 5, 3, "main", 5);
        \u0275\u0275elementStart(8, "footer", 6)(9, "button", 7);
        \u0275\u0275listener("click", function DeskModalComponent_Template_button_click_9_listener() {
          return ctx.postForm();
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx.id ? "APP.CONCIERGE.DESKS_EDIT" : "APP.CONCIERGE.DESKS_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskModalComponent, [{
    type: Component,
    args: [{ selector: "desk-modal", template: `
        <div class="w-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
            >
                <h2 class="px-2 text-xl font-medium">
                    {{
                        (id
                            ? 'APP.CONCIERGE.DESKS_EDIT'
                            : 'APP.CONCIERGE.DESKS_NEW'
                        ) | translate
                    }}
                </h2>
                @if (!loading()) {
                    <button icon matRipple mat-dialog-close>
                        <icon>close</icon>
                    </button>
                }
            </header>
            @if (!loading()) {
                <main class="flex max-h-[65vh] flex-col overflow-auto p-4">
                    <div class="w-full">
                        <label for="id">
                            {{ 'APP.CONCIERGE.DESKS_ID' | translate }}
                            <span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.id"
                                placeholder="desk-10.123"
                            />
                            <mat-error>{{
                                'FORM.ID_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    <div class="flex space-x-2">
                        <div class="w-1/3 flex-1">
                            <label for="name">
                                {{ 'APP.CONCIERGE.DESKS_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.name"
                                    placeholder="e.g. Office Desk"
                                />
                                <mat-error>{{
                                    'FORM.NAME_REQUIRED' | translate
                                }}</mat-error>
                            </mat-form-field>
                        </div>
                        <div class="w-1/3 flex-1">
                            <label for="map-id">
                                {{ 'EXPLORE.MAP_ID' | translate }}<span>*</span>
                            </label>
                            <div class="flex space-x-2">
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        [formField]="form.map_id"
                                        [placeholder]="
                                            'APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                    <mat-error>
                                        {{
                                            'EXPLORE.MAP_ID_REQUIRED'
                                                | translate
                                        }}
                                    </mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-secondary text-secondary h-12 w-12 min-w-12 rounded-sm border"
                                    [matTooltip]="
                                        'APP.CONCIERGE.POI_MAP_SELECT'
                                            | translate
                                    "
                                    (click)="selectItemfromMap()"
                                >
                                    <icon>place</icon>
                                </button>
                            </div>
                        </div>
                    </div>
                    <label for="user">{{
                        'APP.CONCIERGE.USER_ASSIGNED' | translate
                    }}</label>
                    <div class="mb-4 flex space-x-2">
                        <a-user-search-field
                            [formField]="form.assigned_user"
                            class="flex-1"
                        ></a-user-search-field>
                        <button
                            icon
                            matRipple
                            class="bg-secondary text-secondary-content h-12 w-12 min-w-12 rounded-sm"
                            [matTooltip]="
                                'APP.CONCIERGE.USER_CLEAR' | translate
                            "
                            (click)="clearUser()"
                        >
                            <icon className="material-symbols-outlined">
                                person_cancel
                            </icon>
                        </button>
                    </div>
                    @if (future_bookings().length) {
                        <div
                            class="bg-warning/10 border-warning text-warning-content mb-4 flex items-start space-x-2 rounded-sm border p-2 text-sm"
                        >
                            <icon class="text-warning">warning</icon>
                            <p class="flex-1">
                                {{
                                    'APP.CONCIERGE.ASSIGNED_FUTURE_DESK_BOOKINGS'
                                        | translate
                                            : { count: future_bookings().length }
                                            : future_bookings().length
                                }}
                            </p>
                        </div>
                    }
                    <div class="flex space-x-4 pb-4">
                        <settings-toggle
                            [formField]="form.bookable"
                            class="flex-1"
                            [label]="'COMMON.BOOKABLE' | translate"
                        >
                        </settings-toggle>
                        <div class="flex-1"></div>
                    </div>
                    <label for="notes">{{ 'COMMON.GROUPS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'BOOKINGS.GROUPS' | translate"
                        [formField]="form.groups"
                    ></item-list-field>
                    <label for="notes">{{
                        'COMMON.FEATURES' | translate
                    }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.FEATURES' | translate"
                        [formField]="form.features"
                    ></item-list-field>
                    <label for="tags">{{ 'COMMON.TAGS' | translate }}</label>
                    <item-list-field
                        class="w-full"
                        [placeholder]="'COMMON.TAGS' | translate"
                        [formField]="form.tags"
                    ></item-list-field>
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="'FORM.NOTES' | translate"
                            [formField]="form.notes"
                        ></textarea>
                    </mat-form-field>
                    <label for="homebase">
                        {{ 'APP.CONCIERGE.DESKS_HOMEBASE' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_HOMEBASE' | translate
                            "
                            [formField]="form.homebase"
                        />
                    </mat-form-field>
                    <label for="security">
                        {{ 'APP.CONCIERGE.DESKS_SECURITY' | translate }}
                    </label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [placeholder]="
                                'APP.CONCIERGE.DESKS_SECURITY' | translate
                            "
                            [formField]="form.security"
                        />
                    </mat-form-field>
                </main>
            } @else {
                <main
                    class="flex flex-col items-center justify-center space-y-2 p-8"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.CONCIERGE.DESKS_SAVING' | translate }}</p>
                </main>
            }
            <footer
                class="border-base-300 flex items-center justify-end space-x-2 border-t px-4 py-2"
            >
                <button btn matRipple class="w-32" (click)="postForm()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      MatDialogModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      MatProgressSpinnerModule,
      ItemListFieldComponent,
      SettingsToggleComponent,
      UserSearchFieldComponent,
      MatTooltipModule
    ] }]
  }], () => [], { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 275 });
})();

// apps/concierge/src/app/desks/desks-state.service.ts
var DesksStateService = class _DesksStateService extends AsyncHandler {
  get tz_offset() {
    const tz = this._settings.get("app.bookings.use_building_timezone") ? this._org.building.timezone : "";
    const current_tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return !tz ? 0 : getTimezoneDifferenceInHours(current_tz, tz);
  }
  nextPage() {
    this._loadPage(false);
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this._filters = signal(
      {},
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_status = signal(
      {},
      ...ngDevMode ? [{ debugName: "_booking_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._loading.asReadonly();
    this.filters = this._filters.asReadonly();
    this.print_desk = signal(
      null,
      ...ngDevMode ? [{ debugName: "print_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_params = computed(() => ({
      view: this._filters().view,
      zones: this._filters().zones || [],
      change: this._change(),
      building: this._org.active_building()?.id,
      region: this._org.active_region()?.id
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.view === b.view && a.change === b.change && a.building === b.building && a.region === b.region && a.zones.join(",") === b.zones.join(",") }));
    this._desk_params_debounced = debounced(this._desk_params, 300);
    this._desks = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desks" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._desk_params_debounced.value(),
      defaultValue: [],
      loader: async ({ params }) => {
        if (params.view !== "manage" && params.view !== "events")
          return [];
        this._loading.set(true);
        try {
          const zones = this._getActiveZones(params.zones);
          const all_zones = params.zones.includes("All");
          let list = [];
          if (zones.length && !all_zones) {
            const metadata = await Vu(zones[0], "desks").catch(() => ({ details: [] }));
            list = (metadata.details instanceof Array ? metadata.details : []).map((i) => __spreadProps(__spreadValues({}, i), { zone: { id: zones[0] } }));
          } else {
            const metadata = await nc(this._org.building?.id, { name: "desks" }).catch(() => []);
            list = metadata.map((item) => (item.metadata?.desks?.details instanceof Array ? item.metadata.desks.details : []).map((i) => __spreadProps(__spreadValues({}, i), { zone: item.zone }))).reduce((c, i) => [...c, ...i], []);
          }
          if (!(list instanceof Array))
            list = [];
          list.sort((a, b) => a.name?.localeCompare(b.name));
          return list.map((i) => new Desk(__spreadProps(__spreadValues({}, i), { qr_code: "" })));
        } finally {
          this._loading.set(false);
        }
      }
    }));
    this.desks = this._desks.value;
    this._levels = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_levels" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._org.active_levels(),
      defaultValue: [],
      loader: async ({ params: levels }) => {
        if (!levels.length)
          return [];
        const results = await Promise.all(levels.map(async (level) => {
          const metadata = await Vu(level.id, "desks").catch(() => null);
          return {
            level,
            has_bookable: metadata?.details instanceof Array && metadata.details.some((desk) => desk.bookable)
          };
        }));
        return results.filter((item) => item.has_bookable).map((item) => item.level);
      }
    }));
    this.levels = this._levels.value;
    this._bookings_state = signal(
      { list: [], total: 0, has_next: false },
      ...ngDevMode ? [{ debugName: "_bookings_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.paged_bookings = this._bookings_state.asReadonly();
    this.has_more_pages = computed(
      () => this.paged_bookings().has_next,
      ...ngDevMode ? [{ debugName: "has_more_pages" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = computed(
      () => {
        const desks = new Map(this.desks().map((desk) => [desk.id, desk]));
        const bookings = this.paged_bookings().list;
        for (const booking of bookings) {
          Object.assign(booking, {
            asset_name: desks.get(booking.asset_id)?.name || booking.asset_id
          });
        }
        return [...bookings];
      },
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._last_updated = signal(
      0,
      ...ngDevMode ? [{ debugName: "_last_updated" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_updated = this._last_updated.asReadonly();
    this._first_page = null;
    this._next_page_fn = null;
    this._load_token = 0;
    this._all_zones_keys = ["All", -1, "-1", ""];
    this._bookings_params = computed(() => ({
      filters: this._filters(),
      loaded: this._org.initialised(),
      building: this._org.active_building()?.id,
      region: this._org.active_region()?.id
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_bookings_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.loaded === b.loaded && a.building === b.building && a.region === b.region && a.filters.view === b.filters.view && a.filters.date === b.filters.date && (a.filters.zones || []).join(",") === (b.filters.zones || []).join(",") }));
    this._bookings_params_debounced = debounced(this._bookings_params, 500);
    effect(() => {
      const { filters, loaded } = this._bookings_params_debounced.value();
      if (!loaded || filters.view !== "events")
        return;
      this._first_page = this._buildFirstPage(filters);
      this._next_page_fn = this._first_page;
      this._loadPage(true);
    });
  }
  /** Build the first page query function for the given filters */
  _buildFirstPage(filters) {
    const date = filters.date || Date.now();
    const period_start = addMinutes(startOfDay(date), this.tz_offset * 60);
    const period_end = addMinutes(endOfDay(date), this.tz_offset * 60);
    const active_zones = this._getActiveZones(filters.zones);
    const all_zones = !active_zones.length || filters.zones?.includes("All");
    const zones = all_zones ? this._settings.get("app.use_region") ? this._org.buildingsForRegion().map((_) => _.id) : [this._org.building.id] : active_zones;
    return () => queryPagedBookings({
      period_start: getUnixTime(period_start),
      period_end: getUnixTime(period_end),
      type: "desk",
      zones: zones.join(","),
      include_checked_out: true,
      include_deleted: true,
      limit: 500
    });
  }
  /**
   * Load a page of desk bookings, either resetting the list or appending the
   * next page. Stale responses are discarded if a newer load has started.
   */
  async _loadPage(reset) {
    const fetch = reset ? this._first_page : this._next_page_fn;
    if (!fetch) {
      if (reset) {
        this._bookings_state.set({
          list: [],
          total: 0,
          has_next: false
        });
      }
      return;
    }
    const token = ++this._load_token;
    this._loading.set(true);
    const resp = await Promise.resolve(fetch()).catch(() => ({
      data: [],
      total: 0,
      next: null
    }));
    if (token !== this._load_token)
      return;
    const { data = [], total = 0, next = null } = resp || {};
    const list = data.map((booking) => this._normaliseBooking(booking));
    this._next_page_fn = next;
    this._bookings_state.update((acc) => reset ? { list, total, has_next: list.length < total && !!next } : { list: [...acc.list, ...list], total, has_next: !!next });
    this._loading.set(false);
    this._last_updated.set(Date.now());
  }
  _normaliseBooking(booking) {
    const status = this._booking_status()[this._bookingKey(booking)] || (booking?.rejected ? "declined" : "");
    if (!status)
      return booking;
    return new Booking(__spreadProps(__spreadValues({}, booking), {
      approved: status === "approved",
      rejected: status === "declined",
      status
    }));
  }
  setFilters(filters) {
    if (filters.zones?.includes("All")) {
      filters.zones = [
        "All",
        ...this._org.levelsForBuilding(this._org.building).map((lvl) => lvl.id)
      ];
    } else if (filters.zones && this._filters()?.zones?.includes("All")) {
      filters.zones = [];
    }
    if (filters.zones !== void 0 || filters.date !== void 0) {
      this._loading.set(true);
    }
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  refresh() {
    this._loading.set(true);
    this._next_page_fn = this._first_page;
    this._loadPage(true);
  }
  /** Download the current desk list as a CSV file */
  downloadDesksCSV() {
    const desks = this.desks();
    const rows = (desks.length ? desks : [
      new Desk({
        id: "desk-123",
        name: "Test Desk",
        bookable: true,
        groups: ["test-desk-group", "desk-bookers"],
        features: ["Standing Desk", "Dual Monitor"],
        tags: ["engineering", "level-3"],
        homebase: "Sydney HQ"
      })
    ]).map((desk) => {
      const row = desk.toJSON();
      delete row.images;
      return row;
    });
    downloadFile("desks.csv", jsonToCsv(rows));
  }
  async addDesks(list) {
    const selected_zones = this._getSelectedZones();
    const all_zones = this._filters().zones?.includes("All");
    const fallback_zone = !all_zones && selected_zones.length ? selected_zones[0] : "";
    const groups = /* @__PURE__ */ new Map();
    for (const desk of list) {
      const zone = desk.zone?.id || fallback_zone;
      if (!zone) {
        notifyError(i18n("APP.CONCIERGE.DESKS_SELECT_LEVEL"));
        return;
      }
      groups.set(zone, [...groups.get(zone) || [], desk]);
    }
    for (const [zone, desks] of groups) {
      const desk_list = this.desks().filter((_) => (_.zone?.id || fallback_zone) === zone);
      for (const desk of desks) {
        const idx = desk_list.findIndex((_) => _.id === desk.id);
        if (idx >= 0)
          desk_list[idx] = desk;
        else
          desk_list.push(desk);
      }
      await Xu(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      });
    }
    this._change.set(Date.now());
  }
  async editDesk(desk = new Desk()) {
    const ref = this._dialog.open(DeskModalComponent, { data: { desk } });
    const state = await Promise.race([
      nextValueFrom(ref.afterClosed()),
      new Promise((resolve) => {
        const sub = ref.componentInstance.event.subscribe((event) => {
          if (event?.reason !== "done")
            return;
          sub.unsubscribe();
          resolve(event);
        });
      })
    ]);
    if (state?.reason !== "done")
      return;
    const selected_zones = this._getSelectedZones();
    const all_zones = this._filters().zones?.includes("All");
    const zone = desk.zone?.id || (!all_zones && selected_zones.length ? selected_zones[0] : "");
    if (!zone) {
      notifyError(i18n("APP.CONCIERGE.DESKS_SELECT_LEVEL"));
      return;
    }
    const new_desk = __spreadProps(__spreadValues({}, state.metadata), {
      id: state.metadata.id || `desk-${zone.slice(-3)}.${randomInt(999999)}`
    });
    const original_desk_list = this.desks().filter((_) => (_.zone?.id || zone) === zone);
    const desk_list = [...original_desk_list];
    const idx = desk_list.findIndex((_) => _.id === desk.id);
    if (idx >= 0)
      desk_list[idx] = new_desk;
    else
      desk_list.push(new_desk);
    if (new_desk.assigned_to && (desk.assigned_to !== new_desk.assigned_to || desk.id !== new_desk.id)) {
      try {
        await this._checkAssignedDeskLimit(new_desk.assigned_to, desk.id);
      } catch (error) {
        notifyError(error instanceof Error ? error.message : `${error}`);
        ref.componentInstance.loading.set(false);
        ref.close();
        throw error;
      }
    }
    try {
      await Xu(zone, {
        name: "desks",
        details: desk_list,
        description: "List of available desks"
      });
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
      ref.componentInstance.loading.set(false);
      throw e;
    }
    let recreate = false;
    if (desk.assigned_to && (desk.assigned_to !== new_desk.assigned_to || desk.id !== new_desk.id)) {
      try {
        await this._clearAssignedBooking(desk);
      } catch (e) {
        await this._rollbackMetadata(zone, original_desk_list);
        notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
        ref.componentInstance.loading.set(false);
        throw e;
      }
      recreate = true;
    }
    if ((desk.assigned_to !== new_desk.assigned_to || recreate) && new_desk.assigned_to) {
      const created = await saveBooking(this._createAssignedBooking(new_desk, zone).toJSON()).catch(async (e) => {
        await this._rollbackMetadata(zone, original_desk_list);
        if (recreate) {
          await this._restoreAssignedBooking(desk, zone).catch((restore_err) => console.error("Failed to restore assigned booking during rollback", restore_err));
        }
        if (e?.status === 409) {
          notifyError(i18n("APP.CONCIERGE.DESKS_ASSIGN_CONFLICT_ERROR"));
        } else {
          notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", {
            error: e
          }));
        }
        ref.componentInstance.loading.set(false);
        throw e;
      });
      if (created?.id) {
        await cancelOverlappingRecurringBookings(created, "desk").catch(() => []);
      }
    }
    this._change.set(Date.now());
    ref.close();
  }
  async checkinDesk(desk, state = true) {
    const status = await setBookingCheckedIn(desk, state ?? true).catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      notifyError(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_ERROR" : "APP.CONCIERGE.DESKS_CHECKOUT_ERROR", { error: status.error }));
      throw status.error;
    }
    notifySuccess(i18n(state ? "APP.CONCIERGE.DESKS_CHECKIN_SUCCESS" : "APP.CONCIERGE.DESKS_CHECKOUT_SUCCESS"));
  }
  async approveDesk(desk) {
    const status = await approveBooking(desk.id).catch((_) => ({
      failed: true,
      error: _
    }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_APPROVE_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_APPROVE_SUCCESS"));
    desk.approved = true;
    desk.rejected = false;
    desk.status = "approved";
    this._setBookingStatus(desk, "approved");
    this.setFilters({});
  }
  async rejectDesk(desk) {
    const status = await this._rejectDeskBooking(desk).catch((_) => ({
      failed: true,
      error: _
    }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_SUCCESS"));
    desk.approved = false;
    desk.rejected = true;
    desk.status = "declined";
    this._setBookingStatus(desk, "declined");
    this.setFilters({});
  }
  async cancelBooking(booking, series = false) {
    const result = await openConfirmModal({
      title: i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_TITLE" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_TITLE"),
      content: i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_CONTENT" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_CONTENT"),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (result.reason !== "done")
      return;
    result.loading(i18n(series ? "APP.CONCIERGE.DESKS_BOOKING_DELETE_SERIES_LOADING" : "APP.CONCIERGE.DESKS_BOOKING_DELETE_LOADING"));
    const query = !series && booking.instance ? { instance: true, start_time: booking.instance } : {};
    const booking_id = series ? booking.parent_id || booking.id : booking.id;
    await removeBooking(booking_id, query).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_ERROR", { error: e }));
      result.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.DESKS_BOOKING_DELETE_SUCCESS"));
    result.close();
    this._bookings_state.update((state) => __spreadProps(__spreadValues({}, state), {
      list: state.list.map((item) => {
        const is_deleted = series ? item.id === booking_id || item.parent_id === booking_id : this._bookingKey(item) === this._bookingKey(booking);
        return is_deleted ? new Booking(__spreadProps(__spreadValues({}, item), {
          deleted: true,
          status: "cancelled"
        })) : item;
      })
    }));
  }
  viewBookingHistory(booking) {
    if (!booking)
      return;
    this._dialog.open(BookingHistoryModalComponent, {
      data: { booking },
      width: "32rem",
      maxWidth: "100vw"
    });
  }
  async giveAccess(desk) {
    const status = await saveBooking(new Booking(__spreadProps(__spreadValues({}, desk), { access: true })).toJSON()).catch((_) => ({ failed: true, error: _ }));
    if (status.failed) {
      return notifyError(i18n("APP.CONCIERGE.DESKS_ACCESS_ERROR", {
        error: status.error
      }));
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_ACCESS_SUCCESS"));
    this.setFilters({});
  }
  async rejectAllDesks() {
    const list = this.bookings().filter((desk) => desk.status === "approved" || desk.status === "tentative");
    if (list.length <= 0)
      return notifyInfo("No desks to reject for the selected date");
    const resp = await openConfirmModal({
      title: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_TITLE"),
      content: i18n("APP.CONCIERGE.DESKS_REJECT_ALL_MSG"),
      icon: {
        type: "icon",
        class: "material-symbols-rounded",
        content: "delete"
      }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_LOADING"));
    try {
      await Promise.all(list.map((desk) => this._rejectDeskBooking(desk)));
      list.forEach((desk) => {
        desk.approved = false;
        desk.rejected = true;
        desk.status = "declined";
        this._setBookingStatus(desk, "declined");
      });
    } catch (e) {
      notifyError(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_ERROR", { error: e }));
      throw e;
    } finally {
      resp.close();
    }
    notifySuccess(i18n("APP.CONCIERGE.DESKS_REJECT_ALL_SUCCESS"));
    this.refresh();
  }
  _rejectDeskBooking(desk) {
    return desk.instance ? rejectBookingInstance(desk.id, desk.instance) : rejectBooking(desk.id);
  }
  _setBookingStatus(booking, status) {
    this._booking_status.update((map) => __spreadProps(__spreadValues({}, map), {
      [this._bookingKey(booking)]: status
    }));
  }
  _bookingKey(booking) {
    return `${booking.id}:${booking.instance || ""}`;
  }
  async _checkAssignedDeskLimit(user_email, current_desk_id) {
    const max_assigned_count = Math.max(Number(this._settings.get("app.desks.max_assigned_count")) || 0, 0);
    if (!max_assigned_count || !user_email)
      return;
    const email = user_email.toLowerCase();
    const assigned_count = (await Promise.all(this._currentLevelList().map((level) => Vu(level.id, "desks").then((metadata) => metadata.details instanceof Array ? metadata.details : []).catch(() => [])))).flat().filter((item) => item.id !== current_desk_id && item.assigned_to?.toLowerCase() === email).length;
    if (assigned_count >= max_assigned_count) {
      const key = "APP.CONCIERGE.DESKS_ASSIGN_LIMIT_ERROR";
      const message = i18n(key, { count: max_assigned_count }, max_assigned_count);
      throw !message || message === key ? `Users can only have ${max_assigned_count} assigned desk${max_assigned_count === 1 ? "" : "s"} at a time.` : message;
    }
  }
  async _rollbackMetadata(zone, original_desk_list) {
    try {
      await Xu(zone, {
        name: "desks",
        details: original_desk_list,
        description: "List of available desks"
      });
    } catch (rollback_err) {
      console.error("Failed to rollback desk metadata after error", rollback_err);
    }
  }
  _createAssignedBooking(desk, zone) {
    const timezone = this._settings.get("app.bookings.use_building_timezone") ? this._org.building?.timezone : "";
    const date = setTimeInTimezone(Date.now(), 1, 0, timezone);
    return new Booking({
      user_id: desk.assigned_to,
      user_email: desk.assigned_to,
      user_name: desk["assigned_name"],
      booking_start: getUnixTime(date),
      booking_end: getUnixTime(addHours(date, 22)),
      type: "desk",
      booking_type: "desk",
      asset_id: desk.id,
      asset_name: desk.name,
      recurrence_type: "daily",
      recurrence_days: RecurrenceDays.MONDAY | RecurrenceDays.TUESDAY | RecurrenceDays.WEDNESDAY | RecurrenceDays.THURSDAY | RecurrenceDays.FRIDAY | RecurrenceDays.SATURDAY | RecurrenceDays.SUNDAY,
      zones: unique([
        this._org.organisation.id,
        this._org.region?.id,
        this._org.building?.id,
        desk.zone?.id,
        desk.zone,
        ...desk["zones"] || [],
        zone
      ]).filter((_) => !!_),
      extension_data: {
        asset_name: desk.name,
        is_assigned: true
      }
    });
  }
  async _restoreAssignedBooking(desk, zone) {
    if (!desk.assigned_to)
      return;
    await saveBooking(this._createAssignedBooking(desk, zone).toJSON());
  }
  async _clearAssignedBooking(desk) {
    const today = Date.now();
    const booking_list = await queryBookings({
      period_start: getUnixTime(startOfDay(today)),
      period_end: getUnixTime(endOfDay(today)),
      type: "desk",
      email: desk.assigned_to,
      include_checked_out: true
    });
    const filtered = booking_list.filter((_) => _.asset_id === desk.id);
    const today_start = getUnixTime(startOfDay(today));
    for (const booking of filtered) {
      const is_recurring = booking.instance;
      const series_starts_today = getUnixTime(startOfDay(booking.booking_start * 1e3)) === today_start;
      if (is_recurring && !series_starts_today) {
        const yesterday_end = getUnixTime(endOfDay(subDays(today, 1)));
        await updateBooking(booking.id, { recurrence_end: yesterday_end }, "patch");
      } else {
        await removeBooking(booking.parent_id || booking.id);
      }
    }
  }
  /** Selected zone filters with the "all levels" sentinel keys stripped */
  _getSelectedZones() {
    return (this._filters().zones || []).filter((zone) => !this._all_zones_keys.includes(zone));
  }
  _getActiveZones(zones = []) {
    const level_list = this._currentLevelList();
    const level_ids = new Set(level_list.map((level) => level.id));
    return (zones || []).filter((zone) => !this._all_zones_keys.includes(zone) && level_ids.has(zone));
  }
  _currentLevelList() {
    return this._settings.get("app.use_region") ? this._org.levelsForRegion(this._org.region) : this._org.levelsForBuilding(this._org.building);
  }
  static {
    this.\u0275fac = function DesksStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksStateService, factory: _DesksStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  DesksStateService
};
//# sourceMappingURL=chunk-BDFEMXKX.js.map
