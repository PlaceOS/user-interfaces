import {
  UserListFieldComponent
} from "./chunk-ICGX4TO2.js";
import "./chunk-J2FXMR2O.js";
import {
  HostSelectFieldComponent
} from "./chunk-TCWVX53U.js";
import {
  DurationFieldComponent
} from "./chunk-2W3B4JH5.js";
import {
  DateFieldComponent
} from "./chunk-JVDDMRY6.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  UserSearchFieldComponent
} from "./chunk-4NMHZVK6.js";
import "./chunk-N27MLFSL.js";
import "./chunk-IKIBURHT.js";
import {
  TimeFieldComponent
} from "./chunk-O7BNIRKX.js";
import "./chunk-AHHLME4O.js";
import {
  BookingFormService
} from "./chunk-DRLQLJVX.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-TUTUI3EM.js";
import "./chunk-LRIUS7CU.js";
import {
  AsyncHandler,
  Booking,
  CdkScrollable,
  FormField,
  IconComponent,
  MatDialog,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelect,
  MatSelectModule,
  MatSelectTrigger,
  OrganisationService,
  SanitizePipe,
  SettingsService,
  User,
  currentUser,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  openConfirmModal,
  settingSignal
} from "./chunk-LH7TRF2T.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  FormsModule,
  Injector,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Router,
  SlicePipe,
  TranslatePipe,
  addHours,
  addMinutes,
  computed,
  effect,
  getInvalidSignalFields,
  i18n,
  inject,
  notifyError,
  notifySuccess,
  onFieldChange,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-XUPR3QCE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts
var _c0 = () => ({ standalone: true });
function VisitorFlowDetailsComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12)(1, "mat-form-field", 13)(2, "mat-select", 14);
    \u0275\u0275listener("ngModelChange", function VisitorFlowDetailsComponent_Conditional_1_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveForm($event));
    });
    \u0275\u0275elementStart(3, "mat-select-trigger")(4, "div", 15)(5, "icon", 16);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(10, "mat-option", 17)(11, "div", 15)(12, "icon", 16);
    \u0275\u0275text(13, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "span");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "mat-option", 18)(18, "div", 15)(19, "icon", 16);
    \u0275\u0275text(20, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "span");
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 19)(25, "button", 20);
    \u0275\u0275listener("click", function VisitorFlowDetailsComponent_Conditional_1_Template_button_click_25_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveForm("single"));
    });
    \u0275\u0275elementStart(26, "icon", 16);
    \u0275\u0275text(27, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(28, "div");
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(31, "button", 20);
    \u0275\u0275listener("click", function VisitorFlowDetailsComponent_Conditional_1_Template_button_click_31_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setActiveForm("group"));
    });
    \u0275\u0275elementStart(32, "icon", 16);
    \u0275\u0275text(33, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "div");
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.active_form())("ngModelOptions", \u0275\u0275pureFunction0(22, _c0));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.form_type_config()[ctx_r1.active_form()].icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 12, ctx_r1.form_type_config()[ctx_r1.active_form()].label));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(16, 14, "BOOKINGS.VISITOR_SINGLE"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 16, "BOOKINGS.VISITOR_MULTIPLE"));
    \u0275\u0275advance(3);
    \u0275\u0275classProp("clear", ctx_r1.active_form() !== "single");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(30, 18, "BOOKINGS.VISITOR_SINGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275classProp("clear", ctx_r1.active_form() !== "group");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(36, 20, "BOOKINGS.VISITOR_MULTIPLE"));
  }
}
function VisitorFlowDetailsComponent_Conditional_3_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    \u0275\u0275property("value", bld_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r4.display_name || bld_r4.name, " ");
  }
}
function VisitorFlowDetailsComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "label", 21);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 10)(7, "mat-select", 22);
    \u0275\u0275listener("ngModelChange", function VisitorFlowDetailsComponent_Conditional_3_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(8, VisitorFlowDetailsComponent_Conditional_3_For_9_Template, 2, 2, "mat-option", 23, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r1.selected_building_id())("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function VisitorFlowDetailsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-checkbox", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.ALL_DAY"), " ");
  }
}
function VisitorFlowDetailsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 24)(2, "label", 25);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 26);
    \u0275\u0275listener("ngModelChange", function VisitorFlowDetailsComponent_Conditional_12_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 24)(9, "label", 27);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 18, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.model().date)("ngModelOptions", \u0275\u0275pureFunction0(22, _c0))("disabled", ctx_r1.is_edit_in_progress())("range", ctx_r1.effective_bookable_hours())("min_duration", ctx_r1.effective_min_duration())("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 20, "FORM.DURATION"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration())("min", ctx_r1.min_duration())("step", ctx_r1.duration_step())("custom_options", ctx_r1.custom_duration_options())("end_time", ctx_r1.effective_bookable_hours()?.end)("use_24hr", ctx_r1.use_24hr())("timezone", ctx_r1.timezone);
    \u0275\u0275control();
  }
}
function VisitorFlowDetailsComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.user);
    \u0275\u0275control();
  }
}
function VisitorFlowDetailsComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 5);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.user);
    \u0275\u0275control();
  }
}
var VisitorFlowDetailsComponent = class _VisitorFlowDetailsComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = this._booking_form.options;
    this._sync_group = effect(
      () => {
        const is_group = this._options()?.group === true;
        if (is_group && this.active_form() !== "group") {
          this.active_form.set("group");
        }
      },
      ...ngDevMode ? [{ debugName: "_sync_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_form = signal(
      "single",
      ...ngDevMode ? [{ debugName: "active_form" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_type_config = signal(
      {
        single: { icon: "person", label: "BOOKINGS.VISITOR_SINGLE" },
        group: { icon: "group", label: "BOOKINGS.VISITOR_MULTIPLE" }
      },
      ...ngDevMode ? [{ debugName: "form_type_config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_edit = computed(
      () => !!this.model()?.id,
      ...ngDevMode ? [{ debugName: "is_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_building_id = computed(
      () => {
        return this._resolveSelectedBuildingId(this.model()?.zones || []);
      },
      ...ngDevMode ? [{ debugName: "selected_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_step = computed(
      () => settingSignal("visitors.duration_step")() || settingSignal("bookings.duration_step", 15)(),
      ...ngDevMode ? [{ debugName: "duration_step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = computed(
      () => settingSignal("visitors.min_duration")() || settingSignal("bookings.min_duration", 30)(),
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => settingSignal("visitors.max_duration")() || settingSignal("bookings.max_duration", 180)(),
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_duration_options = computed(
      () => settingSignal("visitors.custom_duration_options")() || settingSignal("bookings.custom_duration_options", [])(),
      ...ngDevMode ? [{ debugName: "custom_duration_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.effective_min_duration = computed(
      () => Math.min(this.min_duration(), ...this.custom_duration_options()),
      ...ngDevMode ? [{ debugName: "effective_min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookable_hours = settingSignal("visitors.bookable_hours", void 0);
    this._fallback_bookable_hours = settingSignal("bookings.bookable_hours", void 0);
    this.effective_bookable_hours = computed(
      () => this.bookable_hours() ?? this._fallback_bookable_hours(),
      ...ngDevMode ? [{ debugName: "effective_bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = settingSignal("visitors.allow_all_day", false);
    this.is_all_day = computed(
      () => this.allow_all_day() && !!this.model()?.all_day,
      ...ngDevMode ? [{ debugName: "is_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_edit_in_progress = computed(
      () => {
        if (!this.is_edit())
          return false;
        const booking_date = Number(this.model()?.date || 0);
        if (!booking_date)
          return false;
        const duration = Number(this.model()?.duration || 0);
        const end_date = this.is_all_day() ? addHours(booking_date, 24).valueOf() : addMinutes(booking_date, duration).valueOf();
        return Date.now() >= booking_date && Date.now() < end_date;
      },
      ...ngDevMode ? [{ debugName: "is_edit_in_progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_others = computed(
      () => {
        return settingSignal("visitors.can_book_for_others")() ?? settingSignal("bookings.can_book_for_others")();
      },
      ...ngDevMode ? [{ debugName: "can_book_for_others" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_anyone = computed(
      () => {
        return settingSignal("visitors.can_book_for_anyone")() ?? settingSignal("bookings.can_book_for_anyone")();
      },
      ...ngDevMode ? [{ debugName: "can_book_for_anyone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.buildings = this._org.active_buildings;
  }
  get form() {
    return this._booking_form.form;
  }
  get model() {
    return this._booking_form.model;
  }
  get timezone() {
    return this._settings.get("app.bookings.use_building_timezone") || this._settings.get("app.visitors.use_building_timezone") ? this._org.building.timezone : "";
  }
  ngOnInit() {
    const value = this.model();
    if (value.all_day && !this.allow_all_day()) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { all_day: false }));
    }
    const has_assets = Array.isArray(value.assets) && value.assets.length;
    const is_group = !!value.asset_id && (value.asset_id === "multiple@place.tech" || has_assets > 1);
    this.active_form.set(is_group ? "group" : "single");
    this._booking_form.setOptions({ group: is_group });
    const zones = this.model()?.zones || [];
    if (!this.model().id)
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { title: "Visit" }));
    if (!this.model()?.user_email) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { user: currentUser() }));
    }
    if (!zones.length && this._org.building?.id) {
      const default_zones = [
        this._org.organisation?.id,
        this._org.region?.id,
        this._org.building.id
      ].filter((_) => _);
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { zones: default_zones }));
      return;
    }
    const building = this._org.buildings.find((bld) => bld.id === this.selected_building_id());
    if (building && building.id !== this._org.building?.id) {
      this._org.building = building;
    }
  }
  setActiveForm(form) {
    if (this.is_edit() || this.active_form() === form)
      return;
    this.active_form.set(form);
    this._booking_form.setOptions({ group: form === "group" });
    const value = this.model();
    if (form === "single") {
      const [visitor] = value.assets || [];
      const use_selected_visitor = !!visitor?.email && (!value.asset_id || value.asset_id === "multiple@place.tech");
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user: currentUser(),
        assets: [],
        asset_id: use_selected_visitor ? visitor.email : value.asset_id === "multiple@place.tech" ? "" : value.asset_id,
        asset_name: use_selected_visitor ? visitor.name || visitor.email : value.asset_name || "",
        company: use_selected_visitor ? visitor.company || visitor.organisation || "" : value.company || "",
        phone: use_selected_visitor ? visitor.phone || value.phone || "" : value.phone || ""
      }));
    } else {
      const assets = [...value.assets || []];
      if (value.asset_id && value.asset_id !== "multiple@place.tech") {
        assets.unshift(new User({
          name: value.asset_name || value.asset_id,
          email: value.asset_id,
          organisation: value.company || "",
          phone: value.phone || ""
        }));
      }
      const unique_assets = assets.filter((item, index, list) => !!item?.email && list.findIndex((_) => _.email === item.email) === index);
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        user: currentUser(),
        asset_id: "multiple@place.tech",
        assets: unique_assets
      }));
    }
  }
  setBuilding(building_id) {
    if (!building_id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { zones: [] }));
      return;
    }
    const building = this._org.find(building_id);
    if (building && building.id !== this._org.building?.id) {
      this._org.building = building;
    }
    const zones = [
      this._org.organisation?.id,
      building?.parent_id,
      building_id
    ].filter((_) => _);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { zones }));
  }
  _resolveSelectedBuildingId(zone_list) {
    const level = this._org.levelWithID(zone_list);
    const building = this._org.buildings.find((bld) => zone_list.includes(bld.id)) || this._org.buildings.find((bld) => level?.parent_id === bld.id);
    return building?.id || this._org.building?.id || zone_list[0] || "";
  }
  static {
    this.\u0275fac = function VisitorFlowDetailsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorFlowDetailsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowDetailsComponent, selectors: [["visitor-flow-details"]], decls: 22, vars: 16, consts: [[1, "w-full", "p-4"], [1, "mt-4"], [1, "flex", "flex-col"], [1, "relative", "flex", "flex-col"], ["for", "date"], [3, "formField"], [1, "absolute", "-top-2", "right-2", 3, "formField"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex", "w-full", "flex-col"], ["for", "reason"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "formField", "placeholder"], [1, "mb-4", "flex", "w-full", "sm:hidden"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "ngModel", "ngModelOptions"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], ["value", "single"], ["value", "group"], [1, "bg-base-200", "hidden", "w-full", "items-center", "space-x-1", "rounded-lg", "p-1", "sm:flex"], ["btn", "", "matRipple", "", 1, "border-base-300", "hover:bg-base-300", "flex-1", "space-x-2", "border", 3, "click"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "flex-1"], ["for", "time"], ["name", "time", 3, "ngModelChange", "ngModel", "ngModelOptions", "disabled", "range", "min_duration", "use_24hr", "timezone"], ["for", "duration"], [3, "formField", "time", "max", "min", "step", "custom_options", "end_time", "use_24hr", "timezone"], ["for", "host"], [1, "mb-4", 3, "formField"]], template: function VisitorFlowDetailsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, VisitorFlowDetailsComponent_Conditional_1_Template, 37, 23);
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275conditionalCreate(3, VisitorFlowDetailsComponent_Conditional_3_Template, 10, 6, "div", 2);
        \u0275\u0275elementStart(4, "div", 3)(5, "label", 4);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9, "*");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(10, "a-date-field", 5);
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(11, VisitorFlowDetailsComponent_Conditional_11_Template, 3, 4, "mat-checkbox", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, VisitorFlowDetailsComponent_Conditional_12_Template, 15, 23, "div", 7);
        \u0275\u0275conditionalCreate(13, VisitorFlowDetailsComponent_Conditional_13_Template, 7, 4, "div", 8)(14, VisitorFlowDetailsComponent_Conditional_14_Template, 7, 4, "div", 8);
        \u0275\u0275elementStart(15, "div", 2)(16, "label", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "mat-form-field", 10);
        \u0275\u0275element(20, "input", 11);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_edit() ? 1 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.buildings()?.length > 1 ? 3 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 10, "FORM.DATE"));
        \u0275\u0275advance(4);
        \u0275\u0275property("formField", ctx.form.date);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.allow_all_day() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_all_day() ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_book_for_anyone() ? 13 : ctx.can_book_for_others() ? 14 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 12, "BOOKINGS.VISITOR_REASON"));
        \u0275\u0275advance(3);
        \u0275\u0275property("formField", ctx.form.title)("placeholder", \u0275\u0275pipeBind1(21, 14, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
        \u0275\u0275control();
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      FormField,
      IconComponent,
      UserSearchFieldComponent,
      HostSelectFieldComponent,
      MatCheckboxModule,
      MatCheckbox,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowDetailsComponent, [{
    type: Component,
    args: [{ selector: "visitor-flow-details", template: `
        <div class="w-full p-4">
            <!-- Mobile select dropdown -->
            @if (!is_edit()) {
                <div class="mb-4 flex w-full sm:hidden">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="active_form()"
                            (ngModelChange)="setActiveForm($event)"
                            [ngModelOptions]="{ standalone: true }"
                        >
                            <mat-select-trigger>
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">{{
                                        form_type_config()[active_form()].icon
                                    }}</icon>
                                    <span>{{
                                        form_type_config()[active_form()].label
                                            | translate
                                    }}</span>
                                </div>
                            </mat-select-trigger>
                            <mat-option value="single">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">person</icon>
                                    <span>{{
                                        'BOOKINGS.VISITOR_SINGLE' | translate
                                    }}</span>
                                </div>
                            </mat-option>
                            <mat-option value="group">
                                <div class="flex items-center space-x-2">
                                    <icon class="text-xl">group</icon>
                                    <span>{{
                                        'BOOKINGS.VISITOR_MULTIPLE' | translate
                                    }}</span>
                                </div>
                            </mat-option>
                        </mat-select>
                    </mat-form-field>
                </div>
                <!-- Desktop button toggle -->
                <div
                    class="bg-base-200 hidden w-full items-center space-x-1 rounded-lg p-1 sm:flex"
                >
                    <button
                        btn
                        matRipple
                        class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                        [class.clear]="active_form() !== 'single'"
                        (click)="setActiveForm('single')"
                    >
                        <icon class="text-xl">person</icon>
                        <div>{{ 'BOOKINGS.VISITOR_SINGLE' | translate }}</div>
                    </button>
                    <button
                        btn
                        matRipple
                        class="border-base-300 hover:bg-base-300 flex-1 space-x-2 border"
                        [class.clear]="active_form() !== 'group'"
                        (click)="setActiveForm('group')"
                    >
                        <icon class="text-xl">group</icon>
                        <div>{{ 'BOOKINGS.VISITOR_MULTIPLE' | translate }}</div>
                    </button>
                </div>
            }
            <div class="mt-4">
                @if (buildings()?.length > 1) {
                    <div class="flex flex-col">
                        <label for="building">
                            {{ 'RESOURCE.BUILDING' | translate }}<span>*</span>
                        </label>
                        <mat-form-field appearance="outline" class="w-full">
                            <mat-select
                                [ngModel]="selected_building_id()"
                                (ngModelChange)="setBuilding($event)"
                                [ngModelOptions]="{
                                    standalone: true,
                                }"
                                name="building"
                                placeholder="Select building"
                            >
                                @for (bld of buildings(); track bld) {
                                    <mat-option [value]="bld.id">
                                        {{ bld.display_name || bld.name }}
                                    </mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    </div>
                }
                <div class="relative flex flex-col">
                    <label for="date">
                        {{ 'FORM.DATE' | translate }}<span>*</span>
                    </label>
                    <a-date-field [formField]="form.date"></a-date-field>
                    @if (allow_all_day()) {
                        <mat-checkbox
                            [formField]="form.all_day"
                            class="absolute -top-2 right-2"
                        >
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    }
                </div>
                @if (!is_all_day()) {
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex-1">
                            <label for="time">
                                {{ 'FORM.TIME_START' | translate
                                }}<span>*</span>
                            </label>
                            <a-time-field
                                name="time"
                                [ngModel]="model().date"
                                (ngModelChange)="
                                    model.update((m) => ({
                                        ...m,
                                        date: $event,
                                    }))
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [disabled]="is_edit_in_progress()"
                                [range]="effective_bookable_hours()"
                                [min_duration]="effective_min_duration()"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                        <div class="flex-1">
                            <label for="duration">
                                {{ 'FORM.DURATION' | translate }}<span>*</span>
                            </label>
                            <a-duration-field
                                [formField]="form.duration"
                                [time]="model().date"
                                [max]="max_duration()"
                                [min]="min_duration()"
                                [step]="duration_step()"
                                [custom_options]="custom_duration_options()"
                                [end_time]="effective_bookable_hours()?.end"
                                [use_24hr]="use_24hr()"
                                [timezone]="timezone"
                            />
                        </div>
                    </div>
                }
                @if (can_book_for_anyone()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <a-user-search-field
                            class="mb-4"
                            [formField]="form.user"
                        ></a-user-search-field>
                    </div>
                } @else if (can_book_for_others()) {
                    <div class="flex w-full flex-col">
                        <label for="host">
                            {{ 'FORM.HOST' | translate }}<span>*</span>
                        </label>
                        <host-select-field
                            [formField]="form.user"
                        ></host-select-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label for="reason">{{
                        'BOOKINGS.VISITOR_REASON' | translate
                    }}</label>
                    <mat-form-field appearance="outline" class="w-full">
                        <input
                            matInput
                            [formField]="form.title"
                            [placeholder]="
                                'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                    | translate
                            "
                        />
                    </mat-form-field>
                </div>
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      FormsModule,
      FormField,
      TranslatePipe,
      IconComponent,
      UserSearchFieldComponent,
      HostSelectFieldComponent,
      MatCheckboxModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowDetailsComponent, { className: "VisitorFlowDetailsComponent", filePath: "apps/workplace/src/app/book/visitor-flow-new/visitor-flow-details.component.ts", lineNumber: 247 });
})();

// apps/workplace/src/app/book/visitor-flow-new/visitor-flow-invites.component.ts
function VisitorFlowInvitesComponent_Conditional_2_For_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275listener("click", function VisitorFlowInvitesComponent_Conditional_2_For_13_Template_mat_option_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setVisitor(item_r4));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r4 = ctx.$implicit;
    \u0275\u0275property("value", item_r4.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r4.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r4.email, " ", item_r4.organisation ? "| " + item_r4.organisation : "", " ");
  }
}
function VisitorFlowInvitesComponent_Conditional_2_For_29_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275listener("click", function VisitorFlowInvitesComponent_Conditional_2_For_29_Template_mat_option_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setVisitor(item_r6));
    });
    \u0275\u0275elementStart(1, "div", 17)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 18);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r6.email, " ", item_r6.organisation ? "| " + item_r6.organisation : "", " ");
  }
}
function VisitorFlowInvitesComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5)(2, "label", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "mat-form-field", 7)(8, "input", 8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275listener("focus", function VisitorFlowInvitesComponent_Conditional_2_Template_input_focus_8_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search_term.set(ctx_r1.model().asset_name || ""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(12, VisitorFlowInvitesComponent_Conditional_2_For_13_Template, 6, 4, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div", 5)(15, "label", 10);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementStart(18, "span");
    \u0275\u0275text(19, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(20, "mat-form-field", 7)(21, "input", 11);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("focus", function VisitorFlowInvitesComponent_Conditional_2_Template_input_focus_21_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.search_term.set(ctx_r1.model().asset_id || ""));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(28, VisitorFlowInvitesComponent_Conditional_2_For_29_Template, 6, 4, "mat-option", 9, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(30, "div", 4)(31, "div", 5)(32, "label", 12);
    \u0275\u0275text(33);
    \u0275\u0275pipe(34, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "mat-form-field", 7);
    \u0275\u0275element(36, "input", 13);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(38, "div", 5)(39, "label", 14);
    \u0275\u0275text(40);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "mat-form-field", 7);
    \u0275\u0275element(43, "input", 15);
    \u0275\u0275pipe(44, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const name_auto_r7 = \u0275\u0275reference(11);
    const email_auto_r8 = \u0275\u0275reference(27);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, "BOOKINGS.VISITOR_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.asset_name)("placeholder", \u0275\u0275pipeBind1(9, 17, "BOOKINGS.VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r7);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 19, "BOOKINGS.VISITOR_EMAIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.asset_id)("placeholder", \u0275\u0275pipeBind1(22, 21, "BOOKINGS.VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r8);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 23, "FORM.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.filtered_visitors());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 25, "COMMON.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.company)("placeholder", \u0275\u0275pipeBind1(37, 27, "COMMON.ORGANISATION"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 29, "BOOKINGS.VISITOR_PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.phone)("placeholder", \u0275\u0275pipeBind1(44, 31, "BOOKINGS.VISITOR_PHONE_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function VisitorFlowInvitesComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 6);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-list-field", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_LIST"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.form.assets)("guests_only", true);
    \u0275\u0275control();
  }
}
function VisitorFlowInvitesComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "label", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 7);
    \u0275\u0275element(5, "input", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "BOOKINGS.VISITOR_PASS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.pass_number)("placeholder", \u0275\u0275pipeBind1(6, 5, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
var VisitorFlowInvitesComponent = class _VisitorFlowInvitesComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._booking_form.options;
    this.is_single = computed(
      () => {
        const is_group_mode = this.options()?.group === true;
        return !is_group_mode;
      },
      ...ngDevMode ? [{ debugName: "is_single" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_visitors = computed(
      () => {
        const s = this.search_term().toLowerCase();
        return this.visitors().filter(({ email, name, company }) => email?.toLowerCase()?.includes(s) || name?.toLowerCase()?.includes(s) || company?.toLowerCase()?.includes(s));
      },
      ...ngDevMode ? [{ debugName: "filtered_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_pass_number = settingSignal("visitors.allow_pass_number", false);
    this.multiple = settingSignal("bookings.multiple_visitors", false);
  }
  get form() {
    return this._booking_form.form;
  }
  get model() {
    return this._booking_form.model;
  }
  ngOnInit() {
    const visitors = this._settings.get("visitor-invitees") || [];
    this.visitors.set(this.parseRecentVisitors(visitors));
    this.search_term.set("");
    const email_handle = onFieldChange(this.model, (m) => m.asset_id, (_) => this.search_term.set(_ || ""), this._injector);
    this.subscription("email", () => email_handle.destroy());
    const name_handle = onFieldChange(this.model, (m) => m.asset_name, (_) => this.search_term.set(_ || ""), this._injector);
    this.subscription("name", () => name_handle.destroy());
    if (!this.model().id && !this.model().title && !this.model().description) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        title: "Visit",
        description: "Visit"
      }));
    }
    const is_group = this.options()?.group === true;
    if (is_group && !this.model().asset_id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: "multiple@place.tech"
      }));
    }
  }
  setVisitor(item) {
    const asset_id = this.normalizeEmail(item?.asset_id || item?.email);
    const asset_name = item?.asset_name || item?.name || asset_id;
    const company = item?.company || item?.organisation || "";
    if (!asset_id)
      return;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      asset_id,
      asset_name,
      company,
      phone: item.phone
    }));
    const visitor_details = `${asset_id}|${asset_name}|${company}|${item.phone || ""}`;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    const old_visitor_records = this.parseRecentVisitors(old_visitors).filter((visitor) => visitor.email !== asset_id).map((visitor) => {
      return `${visitor.email}|${visitor.name || ""}|${visitor.company || ""}|${visitor.phone || ""}`;
    });
    this._settings.saveUserSetting("visitor-invitees", [
      ...old_visitor_records,
      visitor_details
    ]);
  }
  toSafeValue(value) {
    if (!value || value === "null" || value === "undefined")
      return "";
    return `${value}`.trim();
  }
  normalizeEmail(value) {
    const email = this.toSafeValue(value).replace(/^mailto:/i, "").replace(/[<>"']/g, "");
    return email.toLowerCase();
  }
  parseRecentVisitors(visitor_history) {
    const unique_visitors = /* @__PURE__ */ new Map();
    for (let index = visitor_history.length - 1; index >= 0; index--) {
      const item = visitor_history[index];
      if (typeof item !== "string")
        continue;
      const [email, name, company, phone] = item.split("|");
      const parsed_visitor = {
        email: this.normalizeEmail(email),
        name: this.toSafeValue(name),
        company: this.toSafeValue(company),
        phone: this.toSafeValue(phone)
      };
      const email_key = parsed_visitor.email;
      if (!email_key || unique_visitors.has(email_key))
        continue;
      unique_visitors.set(email_key, parsed_visitor);
    }
    return [...unique_visitors.values()].reverse();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VisitorFlowInvitesComponent_BaseFactory;
      return function VisitorFlowInvitesComponent_Factory(__ngFactoryType__) {
        return (\u0275VisitorFlowInvitesComponent_BaseFactory || (\u0275VisitorFlowInvitesComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorFlowInvitesComponent)))(__ngFactoryType__ || _VisitorFlowInvitesComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowInvitesComponent, selectors: [["visitor-flow-invites"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 2, consts: [["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], [1, "w-full", "px-4", "pt-4"], [1, "flex", "flex-col"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["for", "visitor-name"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "focus", "formField", "placeholder", "matAutocomplete"], [3, "value"], ["for", "visitor-email"], ["matInput", "", "type", "email", 3, "focus", "formField", "placeholder", "matAutocomplete"], ["for", "company"], ["matInput", "", 3, "formField", "placeholder"], ["for", "phone"], ["matInput", "", "type", "tel", 3, "formField", "placeholder"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], [3, "formField", "guests_only"], ["for", "pass"]], template: function VisitorFlowInvitesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div");
        \u0275\u0275conditionalCreate(2, VisitorFlowInvitesComponent_Conditional_2_Template, 45, 33)(3, VisitorFlowInvitesComponent_Conditional_3_Template, 7, 5, "div", 3);
        \u0275\u0275conditionalCreate(4, VisitorFlowInvitesComponent_Conditional_4_Template, 7, 7, "div", 3);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_single() ? 2 : 3);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.allow_pass_number() ? 4 : -1);
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatOption,
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger,
      MatRippleModule,
      UserListFieldComponent,
      FormField,
      FormsModule,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowInvitesComponent, [{
    type: Component,
    args: [{ selector: "visitor-flow-invites", template: `
        <div class="w-full px-4 pt-4">
            <div>
                @if (is_single()) {
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="visitor-name">
                                {{ 'BOOKINGS.VISITOR_NAME' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.asset_name"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="
                                        search_term.set(model().asset_name || '')
                                    "
                                    [matAutocomplete]="name_auto"
                                />
                            </mat-form-field>
                            <mat-autocomplete #name_auto="matAutocomplete">
                                @for (item of filtered_visitors(); track item) {
                                    <mat-option
                                        [value]="item.name"
                                        (click)="setVisitor(item)"
                                    >
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.organisation
                                                        ? '| ' +
                                                          item.organisation
                                                        : ''
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="visitor-email">
                                {{ 'BOOKINGS.VISITOR_EMAIL' | translate }}
                                <span>*</span>
                            </label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    type="email"
                                    [formField]="form.asset_id"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                            | translate
                                    "
                                    (focus)="
                                        search_term.set(model().asset_id || '')
                                    "
                                    [matAutocomplete]="email_auto"
                                />
                                <mat-error>
                                    {{ 'FORM.EMAIL_REQUIRED' | translate }}
                                </mat-error>
                            </mat-form-field>
                            <mat-autocomplete #email_auto="matAutocomplete">
                                @for (item of filtered_visitors(); track item) {
                                    <mat-option
                                        [value]="item.email"
                                        (click)="setVisitor(item)"
                                    >
                                        <div
                                            class="flex flex-col leading-tight"
                                        >
                                            <div>{{ item.name }}</div>
                                            <div class="text-xs opacity-60">
                                                {{ item.email }}
                                                {{
                                                    item.organisation
                                                        ? '| ' +
                                                          item.organisation
                                                        : ''
                                                }}
                                            </div>
                                        </div>
                                    </mat-option>
                                }
                            </mat-autocomplete>
                        </div>
                    </div>
                    <div
                        class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                    >
                        <div class="flex flex-1 flex-col">
                            <label for="company">{{
                                'COMMON.ORGANISATION' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [formField]="form.company"
                                    [placeholder]="
                                        'COMMON.ORGANISATION' | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-1 flex-col">
                            <label for="phone">{{
                                'BOOKINGS.VISITOR_PHONE' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    type="tel"
                                    [formField]="form.phone"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PHONE_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                    </div>
                } @else {
                    <div class="flex flex-col">
                        <label for="visitor-name">
                            {{ 'BOOKINGS.VISITOR_LIST' | translate }}
                            <span>*</span>
                        </label>
                        <a-user-list-field
                            [formField]="form.assets"
                            [guests_only]="true"
                        ></a-user-list-field>
                    </div>
                }
                @if (allow_pass_number()) {
                    <div class="flex flex-col">
                        <label for="pass">{{
                            'BOOKINGS.VISITOR_PASS' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [formField]="form.pass_number"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatRippleModule,
      UserListFieldComponent,
      TranslatePipe,
      FormField,
      FormsModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowInvitesComponent, { className: "VisitorFlowInvitesComponent", filePath: "apps/workplace/src/app/book/visitor-flow-new/visitor-flow-invites.component.ts", lineNumber: 206 });
})();

// apps/workplace/src/app/book/visitor-flow-new/visitor-flow-recent.component.ts
var _forTrack0 = ($index, $item) => $item.email;
function VisitorFlowRecentComponent_Conditional_0_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Quickly re-invite visitors you've previously booked. ");
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " Select visitors to invite. Click to toggle. ");
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "person");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "check_circle");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 11);
    \u0275\u0275text(1, "radio_button_unchecked");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Conditional_0_Template, 2, 0, "icon", 11)(1, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Conditional_1_Template, 2, 0, "icon", 11);
  }
  if (rf & 2) {
    const visitor_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r2.isVisitorSelected(visitor_r2) ? 0 : 1);
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const visitor_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", visitor_r2.email, " ");
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Template_button_click_0_listener() {
      const visitor_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.selectVisitor(visitor_r2));
    });
    \u0275\u0275conditionalCreate(1, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_1_Template, 2, 0, "icon", 11)(2, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_2_Template, 2, 1);
    \u0275\u0275elementStart(3, "div", 12)(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Conditional_6_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const visitor_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap("flex min-w-48 items-center space-x-2 rounded-lg border p-2 text-sm transition-all hover:bg-white/20 " + (ctx_r2.isVisitorSelected(visitor_r2) ? "border-white bg-white/30 shadow-lg" : "border-white/20 bg-white/10"));
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.is_single() ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", visitor_r2.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(visitor_r2.email ? 6 : -1);
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, VisitorFlowRecentComponent_Conditional_0_Conditional_18_For_2_Template, 7, 5, "button", 9, _forTrack0);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 0, ctx_r2.recent_visitors(), 0, 4));
  }
}
function VisitorFlowRecentComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "icon", 15);
    \u0275\u0275text(2, "person_search");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5, " No recent visitors ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 14);
    \u0275\u0275text(7, " Your visitor history will appear here ");
    \u0275\u0275elementEnd()()();
  }
}
function VisitorFlowRecentComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div", 2);
    \u0275\u0275element(3, "div", 3);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "Quick Action");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 4)(7, "icon");
    \u0275\u0275text(8, "history");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 5);
    \u0275\u0275text(10, "Recent Visitors");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(11, "div")(12, "h3", 6);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "p", 5);
    \u0275\u0275conditionalCreate(16, VisitorFlowRecentComponent_Conditional_0_Conditional_16_Template, 1, 0)(17, VisitorFlowRecentComponent_Conditional_0_Conditional_17_Template, 1, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(18, VisitorFlowRecentComponent_Conditional_0_Conditional_18_Template, 4, 4, "div", 7)(19, VisitorFlowRecentComponent_Conditional_0_Conditional_19_Template, 8, 0, "div", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(13);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 3, "BOOKINGS.VISITOR_RECENT"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.is_single() ? 16 : 17);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.recent_visitors().length > 0 ? 18 : 19);
  }
}
var VisitorFlowRecentComponent = class _VisitorFlowRecentComponent {
  constructor() {
    this._booking_form = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this.visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._booking_form.options;
    this.is_edit = computed(
      () => !!this._model()?.id,
      ...ngDevMode ? [{ debugName: "is_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_single = computed(
      () => {
        const is_group_mode = this.options()?.group === true;
        return !is_group_mode;
      },
      ...ngDevMode ? [{ debugName: "is_single" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recent_visitors = computed(
      () => {
        return this.visitors().slice(0, 5).map((visitor) => {
          return this.enrichVisitorData(visitor);
        });
      },
      ...ngDevMode ? [{ debugName: "recent_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_visitors = computed(
      () => {
        const assets = this._model()?.assets || [];
        return new Set(assets.map((a) => a.email));
      },
      ...ngDevMode ? [{ debugName: "selected_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get _model() {
    return this._booking_form.model;
  }
  ngOnInit() {
    const visitor_history = this._settings.get("visitor-invitees") || [];
    this.visitors.set(this.parseRecentVisitors(visitor_history));
  }
  isVisitorSelected(visitor) {
    if (this.is_single()) {
      return this._model()?.asset_id === visitor.email;
    }
    return this.selected_visitors().has(visitor.email);
  }
  extractNameFromEmail(email) {
    const localPart = email.split("@")[0];
    const name = localPart.replace(/[._-]/g, " ");
    return name.split(" ").map((word) => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");
  }
  extractCompanyFromEmail(email) {
    const domain = email.split("@")[1];
    if (!domain)
      return "";
    const companyName = domain.split(".")[0];
    return companyName.charAt(0).toUpperCase() + companyName.slice(1);
  }
  toSafeValue(value) {
    if (!value || value === "null" || value === "undefined")
      return "";
    return `${value}`.trim();
  }
  normalizeEmail(value) {
    const email = this.toSafeValue(value).replace(/^mailto:/i, "").replace(/[<>"']/g, "");
    return email.toLowerCase();
  }
  parseRecentVisitors(visitor_history) {
    const unique_visitors = /* @__PURE__ */ new Map();
    for (let index = visitor_history.length - 1; index >= 0; index--) {
      const item = visitor_history[index];
      if (typeof item !== "string")
        continue;
      const [email, name, company, phone] = item.split("|");
      const parsed_visitor = {
        email: this.normalizeEmail(email),
        name: this.toSafeValue(name),
        company: this.toSafeValue(company),
        phone: this.toSafeValue(phone)
      };
      const email_key = parsed_visitor.email;
      if (!email_key || unique_visitors.has(email_key))
        continue;
      unique_visitors.set(email_key, parsed_visitor);
    }
    return [...unique_visitors.values()];
  }
  enrichVisitorData(visitor) {
    const enriched = __spreadValues({}, visitor);
    if ((!enriched.name || enriched.name === "null" || enriched.name === "undefined") && enriched.email) {
      enriched.name = this.extractNameFromEmail(enriched.email);
    }
    if ((!enriched.company || enriched.company === "null" || enriched.company === "undefined") && enriched.email) {
      enriched.company = this.extractCompanyFromEmail(enriched.email);
    }
    return enriched;
  }
  selectVisitor(visitor) {
    const is_group = this.options()?.group === true;
    const enriched = this.enrichVisitorData(visitor);
    if (is_group) {
      const current_assets = [...this._model()?.assets || []];
      const index = current_assets.findIndex((a) => a.email === visitor.email);
      if (index >= 0) {
        current_assets.splice(index, 1);
      } else {
        current_assets.push({
          email: enriched.email,
          name: enriched.name,
          company: enriched.company,
          phone: enriched.phone
        });
      }
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        assets: current_assets
      }));
    } else {
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        asset_id: enriched.email,
        asset_name: enriched.name,
        company: enriched.company,
        phone: enriched.phone
      }));
    }
  }
  static {
    this.\u0275fac = function VisitorFlowRecentComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorFlowRecentComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowRecentComponent, selectors: [["visitor-flow-recent"]], decls: 1, vars: 1, consts: [[1, "bg-grad", "border-base-300", "relative", "mx-auto", "mb-4", "w-full", "max-w-full", "space-y-2", "rounded-xl", "border", "p-4", "text-white", "shadow"], [1, "flex", "items-center", "justify-between", "pb-2"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "bg-brand-content", "absolute", "inset-0", "opacity-20"], [1, "flex", "items-center", "space-x-2"], [1, "text-sm"], [1, "mb-1", "text-2xl", "font-medium"], [1, "flex", "flex-wrap", "gap-2", "pt-2"], [1, "flex", "items-center", "justify-center", "space-x-3", "rounded-lg", "border", "border-white/20", "bg-white/5", "py-2"], ["type", "button", 3, "class"], ["type", "button", 3, "click"], [1, "text-2xl"], [1, "flex", "flex-col", "items-start", "pr-2", "leading-tight"], [1, "font-medium"], [1, "text-xs", "opacity-80"], [1, "text-4xl", "opacity-60"], [1, ""], [1, "text-sm", "font-medium"]], template: function VisitorFlowRecentComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, VisitorFlowRecentComponent_Conditional_0_Template, 20, 5, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.is_edit() ? 0 : -1);
      }
    }, dependencies: [IconComponent, TranslatePipe, SlicePipe], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=visitor-flow-recent.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowRecentComponent, [{
    type: Component,
    args: [{ selector: "visitor-flow-recent", template: `
        @if (!is_edit()) {
            <div
                class="bg-grad border-base-300 relative mx-auto mb-4 w-full max-w-full space-y-2 rounded-xl border p-4 text-white shadow"
            >
                <div class="flex items-center justify-between pb-2">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="bg-brand-content absolute inset-0 opacity-20"
                        ></div>
                        <div>Quick Action</div>
                    </div>
                    <div class="flex items-center space-x-2">
                        <icon>history</icon>
                        <div class="text-sm">Recent Visitors</div>
                    </div>
                </div>
                <div>
                    <h3 class="mb-1 text-2xl font-medium">
                        {{ 'BOOKINGS.VISITOR_RECENT' | translate }}
                    </h3>
                    <p class="text-sm">
                        @if (is_single()) {
                            Quickly re-invite visitors you've previously booked.
                        } @else {
                            Select visitors to invite. Click to toggle.
                        }
                    </p>
                </div>
                @if (recent_visitors().length > 0) {
                    <div class="flex flex-wrap gap-2 pt-2">
                        @for (
                            visitor of recent_visitors() | slice: 0 : 4;
                            track visitor.email
                        ) {
                            <button
                                type="button"
                                [class]="
                                    'flex min-w-48 items-center space-x-2 rounded-lg border p-2 text-sm transition-all hover:bg-white/20 ' +
                                    (isVisitorSelected(visitor)
                                        ? 'border-white bg-white/30 shadow-lg'
                                        : 'border-white/20 bg-white/10')
                                "
                                (click)="selectVisitor(visitor)"
                            >
                                @if (is_single()) {
                                    <icon class="text-2xl">person</icon>
                                } @else {
                                    @if (isVisitorSelected(visitor)) {
                                        <icon class="text-2xl">check_circle</icon>
                                    } @else {
                                        <icon class="text-2xl"
                                            >radio_button_unchecked</icon
                                        >
                                    }
                                }
                                <div
                                    class="flex flex-col items-start pr-2 leading-tight"
                                >
                                    <div class="font-medium">
                                        {{ visitor.name }}
                                    </div>
                                    @if (visitor.email) {
                                        <div class="text-xs opacity-80">
                                            {{ visitor.email }}
                                        </div>
                                    }
                                </div>
                            </button>
                        }
                    </div>
                } @else {
                    <div
                        class="flex items-center justify-center space-x-3 rounded-lg border border-white/20 bg-white/5 py-2"
                    >
                        <icon class="text-4xl opacity-60">person_search</icon>
                        <div class="">
                            <div class="text-sm font-medium">
                                No recent visitors
                            </div>
                            <div class="text-xs opacity-80">
                                Your visitor history will appear here
                            </div>
                        </div>
                    </div>
                }
            </div>
        }
    `, imports: [IconComponent, TranslatePipe, SlicePipe], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/visitor-flow-new/visitor-flow-recent.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=visitor-flow-recent.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowRecentComponent, { className: "VisitorFlowRecentComponent", filePath: "apps/workplace/src/app/book/visitor-flow-new/visitor-flow-recent.component.ts", lineNumber: 113 });
})();

// apps/workplace/src/app/book/visitor-flow-new/visitor-flow-success.component.ts
var _c02 = (a0, a1) => ({ name: a0, count: a1 });
var _c1 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
function VisitorFlowSuccessComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "a", 8);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 9);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 10);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 11);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 12);
    \u0275\u0275pipe(14, "sanitize");
    \u0275\u0275elementStart(15, "icon", 13);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r0.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r0.google_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r0.ical_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
var VisitorFlowSuccessComponent = class _VisitorFlowSuccessComponent {
  constructor() {
    this._form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this.multiple = settingSignal("bookings.multiple_visitors", false);
    this.show_links = settingSignal("visitors.show_calendar_links", false);
    this.last_success = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.count = signal(
      1,
      ...ngDevMode ? [{ debugName: "count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => !this.last_success() ? this._org.building : this._org.buildings.find((b) => this.last_success().zones.includes(b.id)),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cal_event = computed(
      () => {
        if (!this.last_success())
          return null;
        const event = __spreadProps(__spreadValues({}, this.last_success()), {
          host: this.last_success().user_email,
          organiser: {
            name: this.last_success().user_name,
            email: this.last_success().user_email
          },
          attendees: this.last_success().attendees.map((_) => _.email),
          body: this.last_success().description,
          location: this.building()?.display_name || this.building()?.name
        });
        event.attendees.push(this.last_success().asset_id);
        return event;
      },
      ...ngDevMode ? [{ debugName: "cal_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.outlook_link = computed(
      () => this.cal_event() ? generateMicrosoftCalendarLink(this.cal_event()) : "",
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = computed(
      () => this.cal_event() ? generateGoogleCalendarLink(this.cal_event()) : "",
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = computed(
      () => this.cal_event() ? generateCalendarFileLink(this.cal_event()) : "",
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    const last = this._form.last_success;
    if (last) {
      this.last_success.set(last);
    }
    this.count.set(this._form.last_count || 1);
  }
  done() {
    this._router.navigate(["/"]);
  }
  bookAnother() {
    this._form.clearForm();
    this._router.navigate(["/book/visitor/form"]);
  }
  static {
    this.\u0275fac = function VisitorFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowSuccessComponent, selectors: [["visitor-flow-success"]], decls: 20, vars: 28, consts: [[1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "bg-base-100", "text-center"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-[32rem]", "flex-1", "space-y-2", "overflow-auto"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "z-10", "w-full", "border-t", "border-base-200", "bg-base-100", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-[32rem]", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "visitor-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "visitor-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "visitor-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function VisitorFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "p");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, VisitorFlowSuccessComponent_Conditional_11_Template, 20, 21, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "button", 7);
        \u0275\u0275listener("click", function VisitorFlowSuccessComponent_Template_button_click_14_listener() {
          return ctx.done();
        });
        \u0275\u0275text(15);
        \u0275\u0275pipe(16, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "button", 7);
        \u0275\u0275listener("click", function VisitorFlowSuccessComponent_Template_button_click_17_listener() {
          return ctx.bookAnother();
        });
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx.multiple() ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c02, ctx.last_success()?.asset_name || ctx.last_success()?.asset_id, ctx.count())), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, ctx.multiple() && ctx.count() > 1 ? "BOOKINGS.VISITOR_SENT_MSG_MULTIPLE" : "BOOKINGS.VISITOR_SENT_MSG", \u0275\u0275pureFunction3(24, _c1, ctx.building()?.display_name || ctx.building()?.name, \u0275\u0275pipeBind2(8, 8, ctx.last_success()?.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, ctx.last_success()?.date, ctx.time_format))), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show_links() ? 11 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, ctx.multiple() && ctx.count() > 1 ? "BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE" : "BOOKINGS.VISITOR_BOOK_ANOTHER"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      TranslatePipe,
      DatePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=visitor-flow-success.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "visitor-flow-success", template: `
        <div
            class="flex h-full w-full flex-col items-center justify-center bg-base-100 text-center"
        >
            <div
                class="z-0 m-8 h-1/2 w-full max-w-[32rem] flex-1 space-y-2 overflow-auto"
            >
                <h2 class="text-3xl">
                    {{
                        (multiple()
                            ? 'BOOKINGS.VISITOR_SENT_MULTIPLE'
                            : 'BOOKINGS.VISITOR_SENT_SINGLE'
                        )
                            | translate
                                : {
                                      name:
                                          last_success()?.asset_name ||
                                          last_success()?.asset_id,
                                      count: count(),
                                  }
                    }}
                </h2>
                <img class="mx-auto" src="assets/icons/sent.svg" />
                <p>
                    {{
                        (multiple() && count() > 1
                            ? 'BOOKINGS.VISITOR_SENT_MSG_MULTIPLE'
                            : 'BOOKINGS.VISITOR_SENT_MSG'
                        )
                            | translate
                                : {
                                      location:
                                          building()?.display_name ||
                                          building()?.name,
                                      date:
                                          last_success()?.date | date: 'mediumDate',
                                      time:
                                          last_success()?.date | date: time_format,
                                  }
                    }}
                </p>
                @if (show_links()) {
                    <div
                        class="relative flex flex-col items-center space-y-4 p-4"
                    >
                        <a
                            btn
                            matRipple
                            name="visitor-outlook-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="outlook_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/outlook.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_OUTLOOK' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="visitor-google-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="google_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <img src="assets/icons/gcal.svg" class="w-6" />
                            <span>{{
                                'BOOKINGS.LINK_GOOGLE' | translate
                            }}</span>
                        </a>
                        <a
                            btn
                            matRipple
                            name="visitor-ical-link"
                            class="inverse flex w-64 items-center space-x-2 rounded p-2 pr-4"
                            [href]="ical_link() | sanitize: 'url'"
                            target="_blank"
                            rel="noopener noreferer"
                        >
                            <icon class="text-xl">download</icon>
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </div>
            <div class="z-10 w-full border-t border-base-200 bg-base-100 p-2">
                <div
                    class="mx-auto flex w-full max-w-[32rem] items-center space-x-2"
                >
                    <button btn matRipple class="flex-1" (click)="done()">
                        {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        (click)="bookAnother()"
                    >
                        {{
                            (multiple() && count() > 1
                                ? 'BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE'
                                : 'BOOKINGS.VISITOR_BOOK_ANOTHER'
                            ) | translate
                        }}
                    </button>
                </div>
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      DatePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;1a86fe953ac4699a7233eba07c73d4f08a6d86f7f3505df7b6b4c6605938d0ed;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/visitor-flow-new/visitor-flow-success.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=visitor-flow-success.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowSuccessComponent, { className: "VisitorFlowSuccessComponent", filePath: "apps/workplace/src/app/book/visitor-flow-new/visitor-flow-success.component.ts", lineNumber: 154 });
})();

// apps/workplace/src/app/book/visitor-flow-new/visitor-flow.component.ts
function VisitorFlowNewComponent_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 7);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowNewComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowNewComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 8);
    \u0275\u0275text(1, "keyboard_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function VisitorFlowNewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
    \u0275\u0275element(2, "visitor-flow-recent");
    \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "icon");
    \u0275\u0275text(6, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "visitor-flow-details");
    \u0275\u0275elementStart(11, "div", 3)(12, "icon");
    \u0275\u0275text(13, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "visitor-flow-invites");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 4);
    \u0275\u0275element(19, "div");
    \u0275\u0275elementStart(20, "button", 5);
    \u0275\u0275listener("click", function VisitorFlowNewComponent_Conditional_0_Template_button_click_20_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.confirmBooking());
    });
    \u0275\u0275elementStart(21, "div", 6);
    \u0275\u0275conditionalCreate(22, VisitorFlowNewComponent_Conditional_0_Conditional_22_Template, 2, 0, "icon", 7)(23, VisitorFlowNewComponent_Conditional_0_Conditional_23_Template, 2, 0, "icon", 8);
    \u0275\u0275elementStart(24, "div", 9);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, VisitorFlowNewComponent_Conditional_0_Conditional_28_Template, 2, 0, "icon", 8);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, ctx_r1.visit_heading()), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 8, "BOOKINGS.VISITOR_DETAILS_HEADER"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("disabled", ctx_r1.loading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.loading() ? 22 : 23);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.loading() ? \u0275\u0275pipeBind1(26, 10, "COMMON.CONFIRMING") : \u0275\u0275pipeBind1(27, 12, "COMMON.CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r1.loading() ? 28 : -1);
  }
}
function VisitorFlowNewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "visitor-flow-success");
  }
}
var VisitorFlowNewComponent = class _VisitorFlowNewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._dialog = inject(MatDialog);
    this._existing_siblings = [];
    this.view = this._booking_form.view;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_multiple = computed(
      () => !!this._model()?.assets?.length,
      ...ngDevMode ? [{ debugName: "is_multiple" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visit_heading = computed(
      () => this._model()?.id ? "BOOKINGS.EDIT_VISITOR_DETAILS" : "BOOKINGS.VISITOR_TIME_HEADER",
      ...ngDevMode ? [{ debugName: "visit_heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get _form() {
    return this._booking_form.form;
  }
  get _model() {
    return this._booking_form.model;
  }
  ngOnInit() {
    const { id, booking_type } = this._model();
    if (!id || booking_type !== "visitor")
      this._booking_form.newForm("visitor");
    this._model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "visitor" }));
    this._booking_form.setOptions({ type: "visitor" });
    this.subscription("route.params", this._route.paramMap.subscribe((param) => {
      if (param.has("step"))
        this._booking_form.setView(param.get("step"));
    }));
    this._loadGroupVisitors();
  }
  async _loadGroupVisitors() {
    const value = this._model();
    if (!value.id)
      return;
    const booking = this._booking_form.booking;
    const is_group = !!booking?.parent_id || !!booking?.group || !!booking?.extension_data?.group_members?.length;
    if (!is_group)
      return;
    const siblings = await this._booking_form.loadGroupSiblings(booking);
    if (!siblings?.length)
      return;
    this._existing_siblings = siblings;
    const visitors = siblings.map((s) => new User({
      name: s.asset_name,
      email: s.asset_id,
      organisation: s.extension_data?.company,
      phone: s.extension_data?.phone
    }));
    this._model.update((m) => __spreadProps(__spreadValues({}, m), {
      assets: visitors,
      asset_id: "multiple@place.tech"
    }));
    this._booking_form.setOptions({ group: true });
  }
  async confirmBooking() {
    this._form().markAsTouched();
    const is_multiple = this.is_multiple();
    const visitor_reason = this._model()?.title || this._model()?.description || "Visit";
    if (!this._form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this._form, this._model).join(", ").replace("asset_id", i18n("BOOKINGS.VISITOR"))
      }));
    }
    if (is_multiple && !this._model()?.assets?.length) {
      return notifyError(i18n("BOOKINGS.VISITOR_REQUIRED"));
    }
    this.loading.set(true);
    try {
      const asset_name = this._model()?.asset_name;
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        title: visitor_reason,
        description: visitor_reason
      }));
      this._booking_form.last_count = is_multiple ? this._model()?.assets?.length || 1 : 1;
      this._saveRecentVisitors(is_multiple);
      await (is_multiple ? this._bookForMany() : this._bookForOne());
      const name = is_multiple ? i18n("BOOKINGS.VISITORS") : asset_name;
      notifySuccess(i18n(is_multiple ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", { name, count: this._booking_form.last_count }));
      this._router.navigate(["/book/visitor/success"]);
    } catch (e) {
      notifyError(typeof e === "string" ? e : i18n(`BOOKINGS.VISITOR_BOOKING_ERROR`));
    } finally {
      this.loading.set(false);
    }
  }
  async canDeactivate() {
    const value = this._model();
    if (!value.id || !this._form().dirty())
      return true;
    const result = await openConfirmModal({
      title: "Unsaved changes",
      content: "You have unsaved visitor invite changes. Discard these changes and leave this form?",
      confirm_text: "Discard changes",
      icon: { content: "warning" }
    }, this._dialog);
    if (result.reason !== "done")
      return false;
    result.close();
    this._booking_form.clearForm();
    return true;
  }
  _saveRecentVisitors(is_multiple) {
    const old_visitors = this._settings.get("visitor-invitees") || [];
    const value = this._model();
    const toEntry = (email, name = "", org = "", phone = "") => `${email}|${name}|${org}|${phone}`;
    if (is_multiple && value.assets?.length) {
      const emails = new Set(value.assets.map((a) => a.email).filter(Boolean));
      this._settings.saveUserSetting("visitor-invitees", [
        ...old_visitors.filter((v) => !emails.has(`${v}`.split("|")[0])),
        ...value.assets.filter((a) => !!a.email).map((a) => toEntry(a.email, a.name, a.organisation, a.phone || ""))
      ]);
    } else {
      const { asset_id, asset_name, company, phone } = value;
      this._settings.saveUserSetting("visitor-invitees", [
        ...old_visitors.filter((v) => `${v}`.split("|")[0] !== asset_id),
        toEntry(asset_id, asset_name, company, phone)
      ]);
    }
  }
  async _bookForOne() {
    const value = this._model();
    this._model.update((m) => __spreadProps(__spreadValues({}, m), {
      name: value.asset_name,
      attendees: [
        new User({
          name: value.asset_name,
          email: value.asset_id,
          organisation: value.company,
          phone: value.phone
        })
      ]
    }));
    await this._booking_form.postForm();
  }
  async _bookForMany() {
    const value = this._model();
    const visitor_reason = value.title || value.description || "Visit";
    const assets = value.assets || [];
    const visitor_members = assets.filter((_) => !!_.email).map((user) => new User(__spreadProps(__spreadValues({}, user), {
      name: user.name || user.email
    })));
    this._booking_form.setOptions({
      type: "visitor",
      group: true,
      members: visitor_members
    });
    if (value.id) {
      let existing_siblings = this._existing_siblings;
      if (!existing_siblings.length) {
        existing_siblings = await this._booking_form.loadGroupSiblings(new Booking(value));
      }
      if (!existing_siblings.length) {
        existing_siblings = [new Booking(value)];
      }
      this._existing_siblings = existing_siblings;
      await this._booking_form.editFormForGroup(existing_siblings);
    } else {
      await this._booking_form.postFormForVisitorGroup();
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VisitorFlowNewComponent_BaseFactory;
      return function VisitorFlowNewComponent_Factory(__ngFactoryType__) {
        return (\u0275VisitorFlowNewComponent_BaseFactory || (\u0275VisitorFlowNewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorFlowNewComponent)))(__ngFactoryType__ || _VisitorFlowNewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowNewComponent, selectors: [["visitor-flow-new"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["cdkScrollable", "", 1, "relative", "z-0", "h-full", "w-full", "overflow-auto", "bg-base-200"], [1, "mx-auto", "flex", "min-h-full", "w-[80rem]", "max-w-full", "flex-col", "px-4", "pt-4"], [1, "mb-4", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border", "border-base-300", "bg-base-100"], [1, "gradient", "relative", "flex", "items-center", "space-x-2", "border-l-8", "border-base-content", "px-4", "py-3", "text-xl", "font-medium"], [1, "sticky", "bottom-0", "z-20", "mt-auto", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "border-base-300", "bg-base-100", "p-3"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "animate-spin", "text-2xl"], [1, "text-2xl"], [1, "flex-1", "pr-4"]], template: function VisitorFlowNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, VisitorFlowNewComponent_Conditional_0_Template, 29, 14, "div", 0)(1, VisitorFlowNewComponent_Conditional_1_Template, 1, 0, "visitor-flow-success");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.view() !== "success" ? 0 : 1);
      }
    }, dependencies: [
      CdkScrollable,
      IconComponent,
      MatRippleModule,
      MatRipple,
      VisitorFlowDetailsComponent,
      VisitorFlowInvitesComponent,
      VisitorFlowRecentComponent,
      VisitorFlowSuccessComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-400) 0%,\n      var(--brand-500) 100%);\n}\n/*# sourceMappingURL=visitor-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowNewComponent, [{
    type: Component,
    args: [{ selector: "visitor-flow-new", template: `
        @if (view() !== 'success') {
            <div
                cdkScrollable
                class="relative z-0 h-full w-full overflow-auto bg-base-200"
            >
                <div
                    class="mx-auto flex min-h-full w-[80rem] max-w-full flex-col px-4 pt-4"
                >
                    <visitor-flow-recent />
                    <div
                        class="mb-4 flex w-full flex-col overflow-hidden rounded-xl border border-base-300 bg-base-100"
                    >
                        <div
                            class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ visit_heading() | translate }}
                            </div>
                        </div>
                        <visitor-flow-details />
                        <div
                            class="gradient relative flex items-center space-x-2 border-l-8 border-base-content px-4 py-3 text-xl font-medium"
                        >
                            <icon>info</icon>
                            <div>
                                {{ 'BOOKINGS.VISITOR_DETAILS_HEADER' | translate }}
                            </div>
                        </div>
                        <visitor-flow-invites />
                    </div>
                    <div
                        class="sticky bottom-0 z-20 mt-auto flex justify-between rounded-t-xl border-x border-t border-base-300 bg-base-100 p-3"
                    >
                        <div></div>
                        <button
                            btn
                            matRipple
                            (click)="confirmBooking()"
                            [disabled]="loading()"
                        >
                            <div class="flex items-center space-x-2">
                                @if (loading()) {
                                    <icon class="animate-spin text-2xl"
                                        >progress_activity</icon
                                    >
                                } @else {
                                    <icon class="text-2xl">task_alt</icon>
                                }
                                <div class="flex-1 pr-4">
                                    {{
                                        loading()
                                            ? ('COMMON.CONFIRMING' | translate)
                                            : ('COMMON.CONFIRM' | translate)
                                    }}
                                </div>
                                @if (!loading()) {
                                    <icon class="text-2xl"
                                        >keyboard_arrow_right</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        } @else {
            <visitor-flow-success />
        }
    `, imports: [
      CdkScrollable,
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      VisitorFlowDetailsComponent,
      VisitorFlowInvitesComponent,
      VisitorFlowRecentComponent,
      VisitorFlowSuccessComponent
    ], styles: ["/* angular:styles/component:css;892ada4bef8217e919b72158c9078491ce67045a9a8233fbf58d1e1c059cddcb;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/visitor-flow-new/visitor-flow.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-400) 0%,\n      var(--brand-500) 100%);\n}\n/*# sourceMappingURL=visitor-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowNewComponent, { className: "VisitorFlowNewComponent", filePath: "apps/workplace/src/app/book/visitor-flow-new/visitor-flow.component.ts", lineNumber: 136 });
})();
export {
  VisitorFlowNewComponent
};
//# sourceMappingURL=visitor-flow.component-JYQTJAUE.js.map
