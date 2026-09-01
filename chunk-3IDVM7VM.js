import {
  SelectMapItemModalComponent
} from "./chunk-LQH6KIR2.js";
import {
  BookingHistoryModalComponent
} from "./chunk-2YITT5UG.js";
import {
  ItemListFieldComponent
} from "./chunk-FED6RXSM.js";
import {
  deleteDeskAsset,
  deskFromAsset,
  queryDeskAssets,
  queryDeskAssetsForZones,
  saveDeskAsset
} from "./chunk-ZGBKANJ2.js";
import {
  openConfirmModal
} from "./chunk-QAUCXQ2Q.js";
import {
  UserSearchFieldComponent
} from "./chunk-3OI27TRU.js";
import {
  showStaff
} from "./chunk-GMWZIDEY.js";
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
} from "./chunk-FV4M7ABR.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  SettingsToggleComponent
} from "./chunk-PIUHOCXA.js";
import {
  subDays
} from "./chunk-CRWJTK7M.js";
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
  MatOption,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-VR5QVDIH.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/desks/desk-modal.component.ts
var _c0 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function DeskModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskModalComponent_Conditional_6_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 35);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const level_r2 = ctx.$implicit;
    \u0275\u0275property("value", level_r2.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", level_r2.display_name || level_r2.name, " ");
  }
}
function DeskModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 33);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-form-field", 30)(6, "mat-select", 34);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, DeskModalComponent_Conditional_6_Conditional_1_For_9_Template, 2, 2, "mat-option", 35, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, "RESOURCE.LEVEL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r2.form.zone_id)("placeholder", \u0275\u0275pipeBind1(7, 6, "COMMON.LEVEL_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.levels);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 8, "APP.CONCIERGE.ROOMS_LEVEL_REQUIRED"));
  }
}
function DeskModalComponent_Conditional_6_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24)(1, "icon", 36);
    \u0275\u0275text(2, "warning");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 27);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "APP.CONCIERGE.ASSIGNED_FUTURE_DESK_BOOKINGS", \u0275\u0275pureFunction1(5, _c0, ctx_r2.future_bookings().length), ctx_r2.future_bookings().length), " ");
  }
}
function DeskModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 4);
    \u0275\u0275conditionalCreate(1, DeskModalComponent_Conditional_6_Conditional_1_Template, 13, 10);
    \u0275\u0275elementStart(2, "div", 8)(3, "label", 9);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "mat-form-field", 10);
    \u0275\u0275element(9, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(10, "mat-error");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 12)(14, "div", 13)(15, "label", 14);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 10);
    \u0275\u0275element(21, "input", 15);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(25, "div", 13)(26, "label", 16);
    \u0275\u0275text(27);
    \u0275\u0275pipe(28, "translate");
    \u0275\u0275elementStart(29, "span");
    \u0275\u0275text(30, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "div", 12)(32, "mat-form-field", 10);
    \u0275\u0275element(33, "input", 17);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(35, "mat-error");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "button", 18);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_38_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.selectItemfromMap());
    });
    \u0275\u0275elementStart(40, "icon");
    \u0275\u0275text(41, "place");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(42, "label", 19);
    \u0275\u0275text(43);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 20);
    \u0275\u0275element(46, "a-user-search-field", 21);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(47, "button", 22);
    \u0275\u0275pipe(48, "translate");
    \u0275\u0275listener("click", function DeskModalComponent_Conditional_6_Template_button_click_47_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(49, "icon", 23);
    \u0275\u0275text(50, " person_cancel ");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(51, DeskModalComponent_Conditional_6_Conditional_51_Template, 6, 7, "div", 24);
    \u0275\u0275elementStart(52, "div", 25);
    \u0275\u0275element(53, "settings-toggle", 26);
    \u0275\u0275pipe(54, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275element(55, "div", 27);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(56, "label", 28);
    \u0275\u0275text(57);
    \u0275\u0275pipe(58, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(59, "item-list-field", 29);
    \u0275\u0275pipe(60, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(61, "label", 28);
    \u0275\u0275text(62);
    \u0275\u0275pipe(63, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(64, "item-list-field", 29);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(66, "label", 28);
    \u0275\u0275text(67);
    \u0275\u0275pipe(68, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(69, "mat-form-field", 30);
    \u0275\u0275element(70, "textarea", 31);
    \u0275\u0275pipe(71, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(72, "label", 32);
    \u0275\u0275text(73);
    \u0275\u0275pipe(74, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(75, "mat-form-field", 10);
    \u0275\u0275element(76, "input", 31);
    \u0275\u0275pipe(77, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.is_new ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 30, "APP.CONCIERGE.DESKS_ID"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r2.form.id);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 32, "FORM.ID_REQUIRED"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 34, "APP.CONCIERGE.DESKS_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r2.form.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(24, 36, "FORM.NAME_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 38, "EXPLORE.MAP_ID"));
    \u0275\u0275advance(6);
    \u0275\u0275property("formField", ctx_r2.form.map_id)("placeholder", \u0275\u0275pipeBind1(34, 40, "APP.CONCIERGE.DESKS_MAP_ID_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(37, 42, "EXPLORE.MAP_ID_REQUIRED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(39, 44, "APP.CONCIERGE.POI_MAP_SELECT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(44, 46, "APP.CONCIERGE.USER_ASSIGNED"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form.assigned_user);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(48, 48, "APP.CONCIERGE.USER_CLEAR"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.future_bookings().length ? 51 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r2.form.bookable)("label", \u0275\u0275pipeBind1(54, 50, "COMMON.BOOKABLE"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 52, "COMMON.GROUPS"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(60, 54, "BOOKINGS.GROUPS"))("formField", ctx_r2.form.groups);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 56, "COMMON.FEATURES"));
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(65, 58, "COMMON.FEATURES"))("formField", ctx_r2.form.features);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(68, 60, "FORM.NOTES"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(71, 62, "FORM.NOTES"))("formField", ctx_r2.form.notes);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(74, 64, "APP.CONCIERGE.DESKS_SECURITY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(77, 66, "APP.CONCIERGE.DESKS_SECURITY"))("formField", ctx_r2.form.security);
    \u0275\u0275control();
  }
}
function DeskModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 37);
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
    this.is_new = !this._data?.desk?.id;
    this.levels = this._data?.levels || [];
    this.model = signal(
      {
        id: ``,
        name: "",
        map_id: "",
        groups: [],
        features: [],
        bookable: false,
        notes: "",
        assigned_user: null,
        assigned_to: "",
        assigned_name: "",
        security: "",
        zone_id: this._data?.zone_id || ""
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model, (p) => {
      required(p.name);
      required(p.map_id);
      if (this.is_new)
        required(p.zone_id);
    });
    const desk = this._data?.desk;
    if (desk) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        id: desk.id ?? m.id,
        name: desk.name ?? m.name,
        map_id: desk.map_id ?? m.map_id,
        groups: desk.groups ?? m.groups,
        features: desk.features ?? m.features,
        bookable: desk.bookable ?? m.bookable,
        notes: desk.notes ?? m.notes,
        assigned_to: desk.assigned_to ?? m.assigned_to,
        assigned_name: desk.assigned_name ?? m.assigned_name,
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskModalComponent, selectors: [["desk-modal"]], outputs: { event: "event" }, decls: 12, vars: 8, consts: [[1, "w-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "flex", "max-h-[65vh]", "flex-col", "overflow-auto", "p-4"], [1, "flex", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "border-base-300", "flex", "items-center", "justify-end", "space-x-2", "border-t", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "click"], [1, "w-full"], ["for", "id"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "placeholder", "desk-10.123", 3, "formField"], [1, "flex", "space-x-2"], [1, "w-1/3", "flex-1"], ["for", "name"], ["matInput", "", "placeholder", "e.g. Office Desk", 3, "formField"], ["for", "map-id"], ["matInput", "", 3, "formField", "placeholder"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "min-w-12", "rounded-sm", "border", 3, "click", "matTooltip"], ["for", "user"], [1, "mb-4", "flex", "space-x-2"], [1, "flex-1", 3, "formField"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "min-w-12", "rounded-sm", 3, "click", "matTooltip"], ["className", "material-symbols-outlined"], [1, "bg-warning/10", "border-warning", "text-warning-content", "mb-4", "flex", "items-start", "space-x-2", "rounded-sm", "border", "p-2", "text-sm"], [1, "flex", "space-x-4", "pb-4"], [1, "flex-1", 3, "formField", "label"], [1, "flex-1"], ["for", "notes"], [1, "w-full", 3, "placeholder", "formField"], ["appearance", "outline"], ["matInput", "", 3, "placeholder", "formField"], ["for", "security"], ["for", "level"], [3, "formField", "placeholder"], [3, "value"], [1, "text-warning"], ["diameter", "32"]], template: function DeskModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, DeskModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, DeskModalComponent_Conditional_6_Template, 78, 68, "main", 4)(7, DeskModalComponent_Conditional_7_Template, 5, 3, "main", 5);
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
      MatSelectModule,
      MatSelect,
      MatOption,
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
                    @if (is_new) {
                        <label for="level">
                            {{ 'RESOURCE.LEVEL' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline">
                            <mat-select
                                [formField]="form.zone_id"
                                [placeholder]="
                                    'COMMON.LEVEL_SELECT' | translate
                                "
                            >
                                @for (level of levels; track level.id) {
                                    <mat-option [value]="level.id">
                                        {{ level.display_name || level.name }}
                                    </mat-option>
                                }
                            </mat-select>
                            <mat-error>{{
                                'APP.CONCIERGE.ROOMS_LEVEL_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    }
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
                                            : {
                                                  count: future_bookings()
                                                      .length,
                                              }
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
                    <label for="notes">{{ 'FORM.NOTES' | translate }}</label>
                    <mat-form-field appearance="outline">
                        <textarea
                            matInput
                            [placeholder]="'FORM.NOTES' | translate"
                            [formField]="form.notes"
                        ></textarea>
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
      MatSelectModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskModalComponent, { className: "DeskModalComponent", filePath: "apps/concierge/src/app/desks/desk-modal.component.ts", lineNumber: 297 });
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
      region: this._org.active_region()?.id,
      use_assets: !!this._settings.get("app.desks.use_assets")
    }), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_params" } : (
      /* istanbul ignore next */
      {}
    )), { equal: (a, b) => a.view === b.view && a.change === b.change && a.building === b.building && a.region === b.region && a.use_assets === b.use_assets && a.zones.join(",") === b.zones.join(",") }));
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
          if (params.use_assets) {
            const level_ids = zones.length && !params.zones.includes("All") ? zones : this._currentLevelList().map((level) => level.id);
            const levels = new Map(this._currentLevelList().map((level) => [
              level.id,
              level
            ]));
            const assets = await queryDeskAssetsForZones(level_ids);
            return assets.map((asset) => deskFromAsset(asset, levels.get(asset.zone_id))).sort((a, b) => a.name.localeCompare(b.name));
          }
          let list = [];
          if (zones.length && !params.zones.includes("All")) {
            const metadata = await Promise.all(zones.map(async (zone) => ({
              zone,
              details: await Vu(zone, "desks").then((item) => item.details instanceof Array ? item.details : []).catch(() => [])
            })));
            list = metadata.flatMap(({ zone, details }) => details.map((item) => __spreadProps(__spreadValues({}, item), {
              zone: { id: zone }
            })));
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
      params: () => ({
        levels: this._org.active_levels(),
        use_assets: !!this._settings.get("app.desks.use_assets")
      }),
      defaultValue: [],
      loader: async ({ params: { levels, use_assets } }) => {
        if (!levels.length)
          return [];
        const results = await Promise.all(levels.map(async (level) => {
          if (use_assets) {
            const desks = await queryDeskAssets(level.id).catch(() => []);
            return {
              level,
              has_bookable: desks.some((desk) => desk.bookable)
            };
          }
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
      limit: 200
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
    const has_next = list.length > 0 && !!next;
    this._next_page_fn = has_next ? next : null;
    this._bookings_state.update((acc) => reset ? { list, total, has_next: list.length < total && has_next } : { list: [...acc.list, ...list], total, has_next });
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
        features: ["Standing Desk", "Dual Monitor"]
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
      if (this._settings.get("app.desks.use_assets")) {
        const asset_zones = this._deskAssetZones(zone);
        await Promise.all(desks.map((desk) => saveDeskAsset(desk, zone, asset_zones)));
        continue;
      }
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
  /** Remove one desk from the configured resource store. */
  async removeDesk(desk, zone_id) {
    if (this._settings.get("app.desks.use_assets")) {
      await deleteDeskAsset(desk.id);
    } else {
      const updated_desks = this.desks().filter((_) => (_.zone?.id || zone_id) === zone_id && _.id !== desk.id);
      await Xu(zone_id, {
        name: "desks",
        description: "desks",
        details: updated_desks
      });
    }
    this._change.set(Date.now());
  }
  async editDesk(desk = new Desk()) {
    const levels = this._currentLevelList();
    const selected_zones = this._getSelectedZones();
    const zone_id = desk.zone?.id || selected_zones[0] || levels[0]?.id || "";
    const ref = this._dialog.open(DeskModalComponent, {
      data: { desk, levels, zone_id }
    });
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
    const _a = state.metadata, { zone_id: selected_zone_id } = _a, desk_metadata = __objRest(_a, ["zone_id"]);
    const zone = desk.zone?.id || selected_zone_id || zone_id;
    if (!zone) {
      notifyError(i18n("APP.CONCIERGE.DESKS_SELECT_LEVEL"));
      return;
    }
    const use_assets = this._settings.get("app.desks.use_assets");
    let new_desk = new Desk(__spreadProps(__spreadValues(__spreadValues({}, use_assets ? desk : {}), desk_metadata), {
      id: (use_assets && desk["asset_type_id"] ? desk.id : desk_metadata.id) || `desk-${zone.slice(-3)}.${randomInt(999999)}`,
      zone: this._org.levelWithID([zone])
    }));
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
      if (use_assets) {
        const saved = await saveDeskAsset(new_desk, zone, this._deskAssetZones(zone));
        new_desk = deskFromAsset(saved, this._org.levelWithID([zone]));
      } else {
        await Xu(zone, {
          name: "desks",
          details: desk_list,
          description: "List of available desks"
        });
      }
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
        await this._rollbackDeskSave(zone, original_desk_list, desk, new_desk);
        notifyError(i18n("APP.CONCIERGE.DESKS_SAVE_ERROR", { error: e }));
        ref.componentInstance.loading.set(false);
        throw e;
      }
      recreate = true;
    }
    if ((desk.assigned_to !== new_desk.assigned_to || recreate) && new_desk.assigned_to) {
      const created = await saveBooking(this._createAssignedBooking(new_desk, zone).toJSON()).catch(async (e) => {
        await this._rollbackDeskSave(zone, original_desk_list, desk, new_desk);
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
    const levels = this._currentLevelList();
    const desks = this._settings.get("app.desks.use_assets") ? await queryDeskAssetsForZones(levels.map((level) => level.id)) : (await Promise.all(levels.map((level) => Vu(level.id, "desks").then((metadata) => metadata.details instanceof Array ? metadata.details : []).catch(() => [])))).flat();
    const assigned_count = desks.filter((item) => item.id !== current_desk_id && item.assigned_to?.toLowerCase() === email).length;
    if (assigned_count >= max_assigned_count) {
      const key = "APP.CONCIERGE.DESKS_ASSIGN_LIMIT_ERROR";
      const message = i18n(key, { count: max_assigned_count }, max_assigned_count);
      throw !message || message === key ? `Users can only have ${max_assigned_count} assigned desk${max_assigned_count === 1 ? "" : "s"} at a time.` : message;
    }
  }
  async _rollbackDeskSave(zone, original_desk_list, original_desk, saved_desk) {
    if (!this._settings.get("app.desks.use_assets")) {
      return this._rollbackMetadata(zone, original_desk_list);
    }
    try {
      if (original_desk["asset_type_id"]) {
        await saveDeskAsset(original_desk, zone, this._deskAssetZones(zone));
      } else if (saved_desk.id) {
        await deleteDeskAsset(saved_desk.id);
      }
    } catch (rollback_err) {
      console.error("Failed to rollback desk asset after error", rollback_err);
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
  /** Build the complete zone path required for asset scope queries. */
  _deskAssetZones(level_id) {
    const level = this._org.levels?.find((item) => item.id === level_id);
    const building = this._org.buildings?.find((item) => item.id === level?.parent_id) || (this._org.building?.id === level?.parent_id ? this._org.building : void 0);
    return unique([
      this._org.organisation?.id,
      building?.parent_id || this._org.region?.id,
      building?.id || level?.parent_id,
      level_id
    ]).filter((id) => !!id);
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
//# sourceMappingURL=chunk-3IDVM7VM.js.map
