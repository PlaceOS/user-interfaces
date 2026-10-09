import {
  BookingFormService,
  DurationFieldComponent,
  UserSearchFieldComponent
} from "./chunk-OA4SKBFU.js";
import "./chunk-WMGTAXKI.js";
import {
  CheckinStateService
} from "./chunk-KGEYCT2C.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-WGX2QUU5.js";
import "./chunk-4F7FVYHD.js";
import "./chunk-WL7JK5BP.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-MTDFVNHI.js";
import {
  AuthenticatedImageDirective
} from "./chunk-LQXP7Z5R.js";
import "./chunk-47ND5IYX.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-OXLBIIDW.js";
import {
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-RP6HBPZJ.js";
import "./chunk-OJ55WA47.js";
import "./chunk-WTDLFHSJ.js";
import "./chunk-VUY7HEW6.js";
import "./chunk-4ODYPB7T.js";
import {
  VirtualKeyboardComponent
} from "./chunk-XEFAFLQU.js";
import {
  FormField
} from "./chunk-LCGV4TYK.js";
import {
  TranslatePipe
} from "./chunk-3AREJVC4.js";
import {
  EMPTY_USER,
  OrganisationService,
  User,
  isEmptyUser,
  settingSignal
} from "./chunk-L3IRON44.js";
import {
  AsyncHandler,
  getInvalidSignalFields,
  i18n,
  notifyError,
  startOfMinute,
  unique
} from "./chunk-ZRRK77LZ.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-O5MSQTWT.js";
import {
  FormsModule,
  NgControlStatus,
  NgModel
} from "./chunk-443W5EBO.js";
import {
  IconComponent
} from "./chunk-G3YYUPKW.js";
import "./chunk-XGSYTLXL.js";
import "./chunk-NEPFUHKE.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-OBYE4QH4.js";
import "./chunk-TF6BE37Y.js";
import "./chunk-NE46VC6Y.js";
import "./chunk-CMIHH5YM.js";
import {
  CommonModule,
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-KRDKLUCZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/visitor-kiosk/src/app/visitor-registration.component.ts
var _c0 = () => ["/welcome"];
function VisitorRegistrationComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 2);
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_46_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 21);
    \u0275\u0275element(4, "input", 12);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "BOOKINGS.PASS_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.pass_number)("placeholder", \u0275\u0275pipeBind1(5, 5, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_47_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25)(1, "mat-checkbox", 28);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function VisitorRegistrationComponent_Conditional_3_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, VisitorRegistrationComponent_Conditional_3_Conditional_47_Conditional_0_Template, 4, 4, "div", 25);
    \u0275\u0275elementStart(1, "label", 26);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-duration-field", 27);
    \u0275\u0275listener("ngModelChange", function VisitorRegistrationComponent_Conditional_3_Conditional_47_Template_a_duration_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setDuration($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 0 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 6, "FORM.DURATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.form_value().duration)("time", ctx_r1.form_value().date)("max", ctx_r1.max_duration())("disabled", ctx_r1.form_value().all_day);
    \u0275\u0275control();
  }
}
function VisitorRegistrationComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 6)(2, "h3", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8)(6, "icon");
    \u0275\u0275text(7, "close");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 9)(9, "label", 10);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 11);
    \u0275\u0275element(13, "input", 12);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(15, "mat-error");
    \u0275\u0275text(16, "A valid email is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "label", 13);
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "mat-form-field", 14);
    \u0275\u0275element(21, "input", 12);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(23, "mat-error");
    \u0275\u0275text(24, "A valid email is required");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "label", 15);
    \u0275\u0275text(26, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "a-user-search-field", 16);
    \u0275\u0275listener("ngModelChange", function VisitorRegistrationComponent_Conditional_3_Template_a_user_search_field_ngModelChange_27_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setHost($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(28, "label", 17);
    \u0275\u0275text(29);
    \u0275\u0275pipe(30, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "mat-form-field", 11);
    \u0275\u0275element(32, "input", 18);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(34, "label", 19);
    \u0275\u0275text(35);
    \u0275\u0275pipe(36, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "mat-form-field", 11);
    \u0275\u0275element(38, "input", 12);
    \u0275\u0275pipe(39, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(40, "label", 20);
    \u0275\u0275text(41);
    \u0275\u0275pipe(42, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "mat-form-field", 21);
    \u0275\u0275element(44, "input", 12);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(46, VisitorRegistrationComponent_Conditional_3_Conditional_46_Template, 6, 7);
    \u0275\u0275conditionalCreate(47, VisitorRegistrationComponent_Conditional_3_Conditional_47_Template, 5, 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(48, "div", 22)(49, "button", 23);
    \u0275\u0275listener("click", function VisitorRegistrationComponent_Conditional_3_Template_button_click_49_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.register());
    });
    \u0275\u0275text(50);
    \u0275\u0275pipe(51, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 23, "APP.VISITOR_KIOSK.REGISTRATION"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(47, _c0));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 25, "FORM.NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.asset_name)("placeholder", \u0275\u0275pipeBind1(14, 27, "FORM.NAME"));
    \u0275\u0275control();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 29, "FORM.EMAIL"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.asset_id)("placeholder", \u0275\u0275pipeBind1(22, 31, "FORM.EMAIL"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275classProp("mb-4", !ctx_r1.host());
    \u0275\u0275property("ngModel", ctx_r1.host());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(30, 33, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.phone)("placeholder", \u0275\u0275pipeBind1(33, 35, "APP.VISITOR_KIOSK.PHONE"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(36, 37, "COMMON.ORGANISATION"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.company)("placeholder", \u0275\u0275pipeBind1(39, 39, "COMMON.ORGANISATION"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(42, 41, "BOOKINGS.VISITOR_REASON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.form.title)("placeholder", \u0275\u0275pipeBind1(45, 43, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.allow_pass_number() ? 46 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_registration_time_options() ? 47 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(51, 45, "APP.VISITOR_KIOSK.REGISTER"), " ");
  }
}
function VisitorRegistrationComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 29);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 1, "APP.VISITOR_KIOSK.REGISTERING"));
  }
}
var VisitorRegistrationComponent = class _VisitorRegistrationComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._checkin = inject(CheckinStateService);
    this._router = inject(Router);
    this._org = inject(OrganisationService);
    this._visitor_allow_all_day = settingSignal("visitors.allow_all_day");
    this._booking_allow_all_day = settingSignal("bookings.allow_all_day");
    this._visitor_max_duration = settingSignal("visitors.max_duration");
    this._booking_max_duration = settingSignal("bookings.max_duration");
    this._induction_enabled = settingSignal("induction_enabled", false);
    this._induction_details = settingSignal("induction_details");
    this.form = this._booking_form.form;
    this.form_value = this._booking_form.model;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      startOfMinute(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.background = settingSignal("welcome_background");
    this.allow_registration_time_options = settingSignal("allow_registration_time_options");
    this.allow_pass_number = settingSignal("allow_pass_number", false);
    this.hide_building_image = settingSignal("hide_building_image", false);
    this.induction_after_details = settingSignal("induction_after_details", false);
    this.allow_self_registration = settingSignal("allow_self_registration", false);
    this.is_induction_enabled = computed(
      () => !!(this._induction_enabled() && this._induction_details()),
      ...ngDevMode ? [{ debugName: "is_induction_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = computed(
      () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => this._visitor_max_duration() || this._booking_max_duration() || 180,
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host = computed(
      () => {
        const user = this.form_value().user;
        return isEmptyUser(user) ? null : user;
      },
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  setHost(user) {
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      user: user || EMPTY_USER
    }));
  }
  setDuration(duration) {
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), { duration }));
  }
  ngOnInit() {
    this.interval("time", () => this.now.set(startOfMinute(Date.now()).valueOf()), 30 * 1e3);
    this._booking_form.clearOldState();
    this._booking_form.newForm("visitor");
    this._booking_form.setOptions({ type: "visitor" });
    this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      booking_type: "visitor",
      title: "Visit",
      // Always ask for the host; null is sanitized back to currentUser().
      user: EMPTY_USER
    }));
    setTimeout(() => {
      if (this.allow_self_registration())
        return;
      this._router.navigate(["/welcome"]);
    }, 1e3);
  }
  async register() {
    this.form().markAsTouched();
    if (!this.form().valid()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this.form, this._booking_form.model).join(", ")
      }));
    }
    if (!this.host()) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: i18n("FORM.HOST")
      }));
    }
    this.loading.set(true);
    try {
      const value = this._booking_form.model();
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        booking_type: "visitor",
        self_registered: true,
        name: value.asset_name,
        description: value.description || value.title || "",
        attendees: [
          new User({
            name: value.asset_name,
            email: value.asset_id,
            organisation: value.company,
            phone: value.phone
          })
        ],
        zones: unique([
          this._org.organisation.id,
          this._org.region?.id,
          this._org.building?.id
        ])
      }));
      const result = await this._booking_form.postForm(true);
      this._checkin.setBooking(result, "registered");
      if (result.induction !== "accepted" && this.is_induction_enabled() && !this.induction_after_details()) {
        this._router.navigate(["/checkin", "induction"]);
      } else {
        this._router.navigate(["/checkin", "details"]);
      }
    } catch (e) {
      notifyError(i18n("APP.VISITOR_KIOSK.REGISTRATION_ERROR", {
        error: e?.statusText || e
      }));
    } finally {
      this.loading.set(false);
    }
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VisitorRegistrationComponent_BaseFactory;
      return function VisitorRegistrationComponent_Factory(__ngFactoryType__) {
        return (\u0275VisitorRegistrationComponent_BaseFactory || (\u0275VisitorRegistrationComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VisitorRegistrationComponent)))(__ngFactoryType__ || _VisitorRegistrationComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorRegistrationComponent, selectors: [["visitor-registration"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 11, consts: [[1, "absolute", "inset-0", "flex", "items-center", "p-8"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", 3, "source"], ["src", "assets/img/building.webp", 1, "absolute", "right-0", "bottom-0", "w-[60%]"], [1, "bg-base-100", "absolute", "top-1/2", "left-4", "max-h-[80vh]", "w-lg", "max-w-[calc(100%-2rem)]", "-translate-y-1/2", "overflow-auto", "rounded-sm", "shadow-sm"], [1, "bg-base-100", "absolute", "top-1/2", "left-4", "flex", "w-[24rem]", "-translate-y-1/2", "flex-col", "items-center", "justify-center", "space-y-4", "rounded-sm", "p-16", "shadow-sm"], [1, "absolute", "top-4", "right-4", "text-2xl", "text-white"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-lg", "font-medium"], ["icon", "", "matRipple", "", 3, "routerLink"], [1, "p-4"], ["for", "name"], ["appearance", "outline", 1, "w-full"], ["keyboard", "", "matInput", "", "autocomplete", "off", 3, "formField", "placeholder"], ["for", "email"], ["appearance", "outline", 1, "mb-0", "w-full"], ["for", "user"], ["autocomplete", "off", 3, "ngModelChange", "ngModel"], ["form", "phone"], ["keyboard", "", "matInput", "", "type", "tel", "autocomplete", "off", 3, "formField", "placeholder"], ["form", "org"], ["form", "reason"], ["appearance", "outline", 1, "no-subscript", "mb-4", "w-full"], [1, "bg-base-200", "sticky", "bottom-0", "z-10", "m-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-40", 3, "click"], ["form", "pass"], [1, "relative", "mt-4", "flex", "justify-end"], ["form", "duration"], [1, "text-base", 3, "ngModelChange", "ngModel", "time", "max", "disabled"], [1, "absolute", "-top-2", "right-0", 3, "formField"], ["diameter", "32"]], template: function VisitorRegistrationComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "img", 1);
        \u0275\u0275conditionalCreate(2, VisitorRegistrationComponent_Conditional_2_Template, 1, 0, "img", 2);
        \u0275\u0275conditionalCreate(3, VisitorRegistrationComponent_Conditional_3_Template, 52, 48, "div", 3)(4, VisitorRegistrationComponent_Conditional_4_Template, 5, 3, "div", 4);
        \u0275\u0275elementStart(5, "div", 5);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "date");
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("source", ctx.background());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_building_image() ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 3 : 4);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(7, 5, ctx.now(), "mediumDate"), " ", \u0275\u0275pipeBind2(8, 8, ctx.now(), "shortTime"), " ");
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      UserSearchFieldComponent,
      DurationFieldComponent,
      RouterModule,
      RouterLink,
      AuthenticatedImageDirective,
      VirtualKeyboardComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorRegistrationComponent, [{
    type: Component,
    args: [{ selector: "visitor-registration", template: `
        <div class="absolute inset-0 flex items-center p-8">
            <img
                auth
                [source]="background()"
                class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2"
            />
            @if (!hide_building_image()) {
                <img
                    src="assets/img/building.webp"
                    class="absolute right-0 bottom-0 w-[60%]"
                />
            }
            @if (!loading()) {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 max-h-[80vh] w-lg max-w-[calc(100%-2rem)] -translate-y-1/2 overflow-auto rounded-sm shadow-sm"
                >
                    <div
                        class="bg-base-200 sticky top-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
                    >
                        <h3 class="px-2 text-lg font-medium">
                            {{ 'APP.VISITOR_KIOSK.REGISTRATION' | translate }}
                        </h3>
                        <a icon matRipple [routerLink]="['/welcome']">
                            <icon>close</icon>
                        </a>
                    </div>
                    <div class="p-4">
                        <label for="name"> {{ 'FORM.NAME' | translate }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.asset_name"
                                [placeholder]="'FORM.NAME' | translate"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="email">
                            {{ 'FORM.EMAIL' | translate }}</label
                        >
                        <mat-form-field
                            appearance="outline"
                            class="mb-0 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.asset_id"
                                [placeholder]="'FORM.EMAIL' | translate"
                            />
                            <mat-error>A valid email is required</mat-error>
                        </mat-form-field>
                        <label for="user">Host</label>
                        <a-user-search-field
                            autocomplete="off"
                            [ngModel]="host()"
                            (ngModelChange)="setHost($event)"
                            [class.mb-4]="!host()"
                        ></a-user-search-field>
                        <label form="phone">
                            {{ 'APP.VISITOR_KIOSK.PHONE' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                type="tel"
                                autocomplete="off"
                                [formField]="form.phone"
                                [placeholder]="
                                    'APP.VISITOR_KIOSK.PHONE' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="org">
                            {{ 'COMMON.ORGANISATION' | translate }}</label
                        >
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.company"
                                [placeholder]="
                                    'COMMON.ORGANISATION' | translate
                                "
                            />
                        </mat-form-field>
                        <label form="reason">
                            {{ 'BOOKINGS.VISITOR_REASON' | translate }}
                        </label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript mb-4 w-full"
                        >
                            <input
                                keyboard
                                matInput
                                autocomplete="off"
                                [formField]="form.title"
                                [placeholder]="
                                    'BOOKINGS.VISITOR_REASON_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                        @if (allow_pass_number()) {
                            <label form="pass">
                                {{ 'BOOKINGS.PASS_NUMBER' | translate }}
                            </label>
                            <mat-form-field
                                appearance="outline"
                                class="no-subscript mb-4 w-full"
                            >
                                <input
                                    keyboard
                                    matInput
                                    autocomplete="off"
                                    [formField]="form.pass_number"
                                    [placeholder]="
                                        'BOOKINGS.VISITOR_PASS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        }
                        @if (allow_registration_time_options()) {
                            @if (allow_all_day()) {
                                <div class="relative mt-4 flex justify-end">
                                    <mat-checkbox
                                        class="absolute -top-2 right-0"
                                        [formField]="form.all_day"
                                    >
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            <label form="duration">
                                {{ 'FORM.DURATION' | translate }}
                            </label>
                            <a-duration-field
                                class="text-base"
                                [ngModel]="form_value().duration"
                                (ngModelChange)="setDuration($event)"
                                [time]="form_value().date"
                                [max]="max_duration()"
                                [disabled]="form_value().all_day"
                            ></a-duration-field>
                        }
                    </div>
                    <div
                        class="bg-base-200 sticky bottom-0 z-10 m-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
                    >
                        <button btn matRipple class="w-40" (click)="register()">
                            {{ 'APP.VISITOR_KIOSK.REGISTER' | translate }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    class="bg-base-100 absolute top-1/2 left-4 flex w-[24rem] -translate-y-1/2 flex-col items-center justify-center space-y-4 rounded-sm p-16 shadow-sm"
                >
                    <mat-spinner diameter="32"></mat-spinner>
                    <p>{{ 'APP.VISITOR_KIOSK.REGISTERING' | translate }}</p>
                </div>
            }
            <div class="absolute top-4 right-4 text-2xl text-white">
                {{ now() | date: 'mediumDate' }}
                {{ now() | date: 'shortTime' }}
            </div>
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatCheckboxModule,
      MatProgressSpinnerModule,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      UserSearchFieldComponent,
      DurationFieldComponent,
      RouterModule,
      AuthenticatedImageDirective,
      VirtualKeyboardComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorRegistrationComponent, { className: "VisitorRegistrationComponent", filePath: "apps/visitor-kiosk/src/app/visitor-registration.component.ts", lineNumber: 235 });
})();
export {
  VisitorRegistrationComponent
};
//# debugId=57699920-53b5-5739-b7c4-4c3e8efbdff8
//# sourceMappingURL=visitor-registration.component-YCGUY2TH.js.map
