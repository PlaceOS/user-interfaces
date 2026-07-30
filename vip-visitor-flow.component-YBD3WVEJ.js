import {
  toObservable,
  toSignal
} from "./chunk-EQBULE35.js";
import {
  DurationFieldComponent
} from "./chunk-P7RVXA5G.js";
import {
  DateFieldComponent
} from "./chunk-PIWGGXJJ.js";
import {
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  UserSearchFieldComponent
} from "./chunk-HVJVZ3J2.js";
import "./chunk-LXS3FJ67.js";
import {
  TimeFieldComponent
} from "./chunk-DEH2PPSK.js";
import {
  BookingFormService
} from "./chunk-SQRBVI2N.js";
import {
  SettingsToggleComponent
} from "./chunk-3N4VSLGO.js";
import "./chunk-ENRF6FFW.js";
import "./chunk-5HEGA4RG.js";
import {
  AsyncHandler,
  Booking,
  IconComponent,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SettingsService,
  User,
  currentUser,
  saveBooking,
  settingSignal
} from "./chunk-R6V3DERO.js";
import {
  ActivatedRoute,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  ReactiveFormsModule,
  Router,
  TranslatePipe,
  Validators,
  filter,
  getInvalidFields,
  i18n,
  inject,
  input,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
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
  ɵɵpureFunction1,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-CUTJ2QPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/vip-visitor-flow/vip-visitor-flow-services.component.ts
function VipVisitorFlowServicesComponent_Conditional_70_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 17)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 5)(5, "input", 6);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Conditional_70_Template_input_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.update("welcome_beverage_custom", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.data().welcome_beverage_custom)("placeholder", \u0275\u0275pipeBind1(6, 5, "BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function VipVisitorFlowServicesComponent_Conditional_74_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 21)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-form-field", 5)(6, "input", 6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Conditional_74_Template_input_ngModelChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRestaurant("name", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 21)(9, "label");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-form-field", 5)(13, "input", 6);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Conditional_74_Template_input_ngModelChange_13_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRestaurant("address", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(15, "div", 21)(16, "label");
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementStart(19, "span");
    \u0275\u0275text(20, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "time-field", 22);
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Conditional_74_Template_time_field_ngModelChange_21_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRestaurant("time", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 10, "BOOKINGS.VIP_RESTAURANT_NAME"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.data().restaurant_reservation?.name)("placeholder", \u0275\u0275pipeBind1(7, 12, "BOOKINGS.VIP_RESTAURANT_NAME_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 14, "BOOKINGS.VIP_RESTAURANT_ADDRESS"));
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.data().restaurant_reservation?.address)("placeholder", \u0275\u0275pipeBind1(14, 16, "BOOKINGS.VIP_RESTAURANT_ADDRESS_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 18, "BOOKINGS.VIP_RESTAURANT_TIME"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r1.data().restaurant_reservation?.time)("use_24hr", ctx_r1.use_24hr())("no_past_times", false);
    \u0275\u0275control();
  }
}
var VipVisitorFlowServicesComponent = class _VipVisitorFlowServicesComponent {
  constructor() {
    this.vip_data = input.required(
      ...ngDevMode ? [{ debugName: "vip_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = settingSignal("use_24_hour_time", false);
  }
  get data() {
    return this.vip_data();
  }
  update(key, value) {
    this.vip_data().update((d) => __spreadProps(__spreadValues({}, d), { [key]: value }));
  }
  toggleRestaurant(enabled) {
    this.vip_data().update((d) => __spreadProps(__spreadValues({}, d), {
      restaurant_reservation: enabled ? { name: "", address: "", time: 0 } : null
    }));
  }
  updateRestaurant(key, value) {
    this.vip_data().update((d) => __spreadProps(__spreadValues({}, d), {
      restaurant_reservation: d.restaurant_reservation ? __spreadProps(__spreadValues({}, d.restaurant_reservation), { [key]: value }) : null
    }));
  }
  static {
    this.\u0275fac = function VipVisitorFlowServicesComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VipVisitorFlowServicesComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VipVisitorFlowServicesComponent, selectors: [["vip-visitor-flow-services"]], inputs: { vip_data: [1, "vip_data"] }, decls: 90, vars: 79, consts: [[1, "w-full", "space-y-4", "p-4"], [1, "border-base-300", "rounded-lg", "border", "p-4"], [1, "mb-3", "flex", "items-center", "space-x-2", "font-medium"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex", "flex-1", "flex-col"], ["appearance", "outline", 1, "w-full"], ["matInput", "", 3, "ngModelChange", "ngModel", "placeholder"], ["matInput", "", "type", "email", 3, "ngModelChange", "ngModel", "placeholder"], [3, "ngModelChange", "ngModel"], ["value", "none"], ["value", "internal"], ["value", "external_airport"], [1, "grid", "grid-cols-1", "gap-4", "sm:grid-cols-2", "lg:grid-cols-3"], [3, "ngModelChange", "label", "ngModel"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["value", "standard"], ["value", "custom"], [1, "mt-2"], [1, "mt-4", "space-y-2"], ["value", "in_house"], ["value", "third_party"], [1, "flex", "flex-col"], [3, "ngModelChange", "ngModel", "use_24hr", "no_past_times"]], template: function VipVisitorFlowServicesComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h4", 2)(3, "icon");
        \u0275\u0275text(4, "support_agent");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "div", 4)(10, "label");
        \u0275\u0275text(11);
        \u0275\u0275pipe(12, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "mat-form-field", 5)(14, "input", 6);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_input_ngModelChange_14_listener($event) {
          return ctx.update("vip_assistant_name", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 4)(17, "label");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "mat-form-field", 5)(21, "input", 7);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_input_ngModelChange_21_listener($event) {
          return ctx.update("vip_assistant_email", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(23, "div", 1)(24, "h4", 2)(25, "icon");
        \u0275\u0275text(26, "waving_hand");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "span");
        \u0275\u0275text(28);
        \u0275\u0275pipe(29, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "mat-form-field", 5)(31, "mat-select", 8);
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_mat_select_ngModelChange_31_listener($event) {
          return ctx.update("meet_greet", $event);
        });
        \u0275\u0275elementStart(32, "mat-option", 9);
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(35, "mat-option", 10);
        \u0275\u0275text(36);
        \u0275\u0275pipe(37, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(38, "mat-option", 11);
        \u0275\u0275text(39);
        \u0275\u0275pipe(40, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(41, "div", 12)(42, "settings-toggle", 13);
        \u0275\u0275pipe(43, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_42_listener($event) {
          return ctx.update("walkthrough", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(44, "settings-toggle", 13);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_44_listener($event) {
          return ctx.update("gift", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(46, "settings-toggle", 13);
        \u0275\u0275pipe(47, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_46_listener($event) {
          return ctx.update("photographer", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(48, "settings-toggle", 13);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_48_listener($event) {
          return ctx.update("welcome_screen", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(50, "settings-toggle", 13);
        \u0275\u0275pipe(51, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_50_listener($event) {
          return ctx.update("presentation", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(52, "div", 1)(53, "h4", 2)(54, "icon");
        \u0275\u0275text(55, "local_cafe");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(56, "span");
        \u0275\u0275text(57);
        \u0275\u0275pipe(58, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "mat-form-field", 14)(60, "mat-select", 8);
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_mat_select_ngModelChange_60_listener($event) {
          return ctx.update("welcome_beverage", $event);
        });
        \u0275\u0275elementStart(61, "mat-option", 9);
        \u0275\u0275text(62);
        \u0275\u0275pipe(63, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(64, "mat-option", 15);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "mat-option", 16);
        \u0275\u0275text(68);
        \u0275\u0275pipe(69, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(70, VipVisitorFlowServicesComponent_Conditional_70_Template, 7, 7, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(71, "div", 1)(72, "settings-toggle", 13);
        \u0275\u0275pipe(73, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_settings_toggle_ngModelChange_72_listener($event) {
          return ctx.toggleRestaurant($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(74, VipVisitorFlowServicesComponent_Conditional_74_Template, 22, 20, "div", 18);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "div", 1)(76, "h4", 2)(77, "icon");
        \u0275\u0275text(78, "directions_car");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(79, "span");
        \u0275\u0275text(80);
        \u0275\u0275pipe(81, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "mat-form-field", 14)(83, "mat-select", 8);
        \u0275\u0275listener("ngModelChange", function VipVisitorFlowServicesComponent_Template_mat_select_ngModelChange_83_listener($event) {
          return ctx.update("driver", $event);
        });
        \u0275\u0275elementStart(84, "mat-option", 19);
        \u0275\u0275text(85);
        \u0275\u0275pipe(86, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(87, "mat-option", 20);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 35, "BOOKINGS.VIP_ASSISTANT"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 37, "BOOKINGS.VIP_ASSISTANT_NAME"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.data().vip_assistant_name)("placeholder", \u0275\u0275pipeBind1(15, 39, "BOOKINGS.VIP_ASSISTANT_NAME_PLACEHOLDER"));
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 41, "BOOKINGS.VIP_ASSISTANT_EMAIL"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.data().vip_assistant_email)("placeholder", \u0275\u0275pipeBind1(22, 43, "BOOKINGS.VIP_ASSISTANT_EMAIL_PLACEHOLDER"));
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 45, "BOOKINGS.VIP_MEET_GREET"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.data().meet_greet);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(34, 47, "BOOKINGS.VIP_MEET_GREET_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 49, "BOOKINGS.VIP_MEET_GREET_INTERNAL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(40, 51, "BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT"));
        \u0275\u0275advance(3);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(43, 53, "BOOKINGS.VIP_WALKTHROUGH"))("ngModel", ctx.data().walkthrough);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(45, 55, "BOOKINGS.VIP_GIVEAWAY_GIFT"))("ngModel", ctx.data().gift);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(47, 57, "BOOKINGS.VIP_PHOTOGRAPHER"))("ngModel", ctx.data().photographer);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(49, 59, "BOOKINGS.VIP_WELCOME_SCREEN"))("ngModel", ctx.data().welcome_screen);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(51, 61, "BOOKINGS.VIP_PRESENTATION"))("ngModel", ctx.data().presentation);
        \u0275\u0275control();
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(58, 63, "BOOKINGS.VIP_WELCOME_BEVERAGE"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.data().welcome_beverage);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(63, 65, "BOOKINGS.VIP_WELCOME_BEVERAGE_NONE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(66, 67, "BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(69, 69, "BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM"));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data().welcome_beverage === "custom" ? 70 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("label", \u0275\u0275pipeBind1(73, 71, "BOOKINGS.VIP_RESTAURANT_RESERVATION"))("ngModel", !!ctx.data().restaurant_reservation);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.data().restaurant_reservation ? 74 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 73, "BOOKINGS.VIP_DRIVER"));
        \u0275\u0275advance(3);
        \u0275\u0275property("ngModel", ctx.data().driver);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(86, 75, "BOOKINGS.VIP_DRIVER_IN_HOUSE"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(89, 77, "BOOKINGS.VIP_DRIVER_THIRD_PARTY"));
      }
    }, dependencies: [
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      IconComponent,
      SettingsToggleComponent,
      TimeFieldComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorFlowServicesComponent, [{
    type: Component,
    args: [{
      selector: "vip-visitor-flow-services",
      template: `
        <div class="w-full space-y-4 p-4">
            <!-- VIP Assistant -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>support_agent</icon>
                    <span>{{ 'BOOKINGS.VIP_ASSISTANT' | translate }}</span>
                </h4>
                <div
                    class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                >
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'BOOKINGS.VIP_ASSISTANT_NAME' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [ngModel]="data().vip_assistant_name"
                                (ngModelChange)="
                                    update('vip_assistant_name', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_ASSISTANT_NAME_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                    <div class="flex flex-1 flex-col">
                        <label>{{
                            'BOOKINGS.VIP_ASSISTANT_EMAIL' | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                type="email"
                                [ngModel]="data().vip_assistant_email"
                                (ngModelChange)="
                                    update('vip_assistant_email', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_ASSISTANT_EMAIL_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                </div>
            </div>

            <!-- Meet and Greet -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>waving_hand</icon>
                    <span>{{ 'BOOKINGS.VIP_MEET_GREET' | translate }}</span>
                </h4>
                <mat-form-field appearance="outline" class="w-full">
                    <mat-select
                        [ngModel]="data().meet_greet"
                        (ngModelChange)="update('meet_greet', $event)"
                    >
                        <mat-option value="none">{{
                            'BOOKINGS.VIP_MEET_GREET_NONE' | translate
                        }}</mat-option>
                        <mat-option value="internal">{{
                            'BOOKINGS.VIP_MEET_GREET_INTERNAL' | translate
                        }}</mat-option>
                        <mat-option value="external_airport">{{
                            'BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT'
                                | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>

            <!-- Toggle Options Row 1 -->
            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                <settings-toggle
                    [label]="'BOOKINGS.VIP_WALKTHROUGH' | translate"
                    [ngModel]="data().walkthrough"
                    (ngModelChange)="update('walkthrough', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_GIVEAWAY_GIFT' | translate"
                    [ngModel]="data().gift"
                    (ngModelChange)="update('gift', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_PHOTOGRAPHER' | translate"
                    [ngModel]="data().photographer"
                    (ngModelChange)="update('photographer', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_WELCOME_SCREEN' | translate"
                    [ngModel]="data().welcome_screen"
                    (ngModelChange)="update('welcome_screen', $event)"
                ></settings-toggle>
                <settings-toggle
                    [label]="'BOOKINGS.VIP_PRESENTATION' | translate"
                    [ngModel]="data().presentation"
                    (ngModelChange)="update('presentation', $event)"
                ></settings-toggle>
            </div>

            <!-- Welcome Beverage -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>local_cafe</icon>
                    <span>{{
                        'BOOKINGS.VIP_WELCOME_BEVERAGE' | translate
                    }}</span>
                </h4>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="data().welcome_beverage"
                        (ngModelChange)="update('welcome_beverage', $event)"
                    >
                        <mat-option value="none">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_NONE' | translate
                        }}</mat-option>
                        <mat-option value="standard">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD' | translate
                        }}</mat-option>
                        <mat-option value="custom">{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
                @if (data().welcome_beverage === 'custom') {
                    <div class="mt-2">
                        <label>{{
                            'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_DETAILS'
                                | translate
                        }}</label>
                        <mat-form-field appearance="outline" class="w-full">
                            <input
                                matInput
                                [ngModel]="data().welcome_beverage_custom"
                                (ngModelChange)="
                                    update('welcome_beverage_custom', $event)
                                "
                                [placeholder]="
                                    'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM_PLACEHOLDER'
                                        | translate
                                "
                            />
                        </mat-form-field>
                    </div>
                }
            </div>

            <!-- Restaurant Reservation -->
            <div class="border-base-300 rounded-lg border p-4">
                <settings-toggle
                    [label]="
                        'BOOKINGS.VIP_RESTAURANT_RESERVATION' | translate
                    "
                    [ngModel]="!!data().restaurant_reservation"
                    (ngModelChange)="toggleRestaurant($event)"
                ></settings-toggle>
                @if (data().restaurant_reservation) {
                    <div class="mt-4 space-y-2">
                        <div class="flex flex-col">
                            <label>{{
                                'BOOKINGS.VIP_RESTAURANT_NAME' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [ngModel]="
                                        data().restaurant_reservation?.name
                                    "
                                    (ngModelChange)="
                                        updateRestaurant('name', $event)
                                    "
                                    [placeholder]="
                                        'BOOKINGS.VIP_RESTAURANT_NAME_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label>{{
                                'BOOKINGS.VIP_RESTAURANT_ADDRESS' | translate
                            }}</label>
                            <mat-form-field appearance="outline" class="w-full">
                                <input
                                    matInput
                                    [ngModel]="
                                        data().restaurant_reservation?.address
                                    "
                                    (ngModelChange)="
                                        updateRestaurant('address', $event)
                                    "
                                    [placeholder]="
                                        'BOOKINGS.VIP_RESTAURANT_ADDRESS_PLACEHOLDER'
                                            | translate
                                    "
                                />
                            </mat-form-field>
                        </div>
                        <div class="flex flex-col">
                            <label
                                >{{ 'BOOKINGS.VIP_RESTAURANT_TIME' | translate
                                }}<span>*</span></label
                            >
                            <time-field
                                [ngModel]="data().restaurant_reservation?.time"
                                (ngModelChange)="
                                    updateRestaurant('time', $event)
                                "
                                [use_24hr]="use_24hr()"
                                [no_past_times]="false"
                            />
                        </div>
                    </div>
                }
            </div>

            <!-- Driver -->
            <div class="border-base-300 rounded-lg border p-4">
                <h4 class="mb-3 flex items-center space-x-2 font-medium">
                    <icon>directions_car</icon>
                    <span>{{ 'BOOKINGS.VIP_DRIVER' | translate }}</span>
                </h4>
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [ngModel]="data().driver"
                        (ngModelChange)="update('driver', $event)"
                    >
                        <mat-option value="in_house">{{
                            'BOOKINGS.VIP_DRIVER_IN_HOUSE' | translate
                        }}</mat-option>
                        <mat-option value="third_party">{{
                            'BOOKINGS.VIP_DRIVER_THIRD_PARTY' | translate
                        }}</mat-option>
                    </mat-select>
                </mat-form-field>
            </div>
        </div>
    `,
      imports: [
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        FormsModule,
        TranslatePipe,
        IconComponent,
        SettingsToggleComponent,
        TimeFieldComponent
      ]
    }]
  }], null, { vip_data: [{ type: Input, args: [{ isSignal: true, alias: "vip_data", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VipVisitorFlowServicesComponent, { className: "VipVisitorFlowServicesComponent", filePath: "apps/workplace/src/app/book/vip-visitor-flow/vip-visitor-flow-services.component.ts", lineNumber: 295 });
})();

// apps/workplace/src/app/book/vip-visitor-flow/vip-visitor-flow.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
var _forTrack0 = ($index, $item) => $item.email;
function VipVisitorFlowComponent_Conditional_0_Conditional_10_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 19);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r4 = ctx.$implicit;
    \u0275\u0275property("value", bld_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(bld_r4.display_name || bld_r4.name);
  }
}
function VipVisitorFlowComponent_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 15)(7, "mat-select", 29);
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowComponent_Conditional_0_Conditional_10_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ zones: [$event] }));
    });
    \u0275\u0275repeaterCreate(8, VipVisitorFlowComponent_Conditional_0_Conditional_10_For_9_Template, 2, 2, "mat-option", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.form_value().zones?.[0])("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.buildings());
  }
}
function VipVisitorFlowComponent_Conditional_0_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "label");
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
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275control();
  }
}
function VipVisitorFlowComponent_Conditional_0_For_61_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275listener("click", function VipVisitorFlowComponent_Conditional_0_For_61_Template_mat_option_click_0_listener() {
      const item_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r6));
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    \u0275\u0275property("value", item_r6.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r6.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r6.email, " ");
  }
}
function VipVisitorFlowComponent_Conditional_0_For_77_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 31);
    \u0275\u0275listener("click", function VipVisitorFlowComponent_Conditional_0_For_77_Template_mat_option_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 32)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 33);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r8.email, " ");
  }
}
function VipVisitorFlowComponent_Conditional_0_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 26);
    \u0275\u0275text(1, "progress_activity");
    \u0275\u0275elementEnd();
  }
}
function VipVisitorFlowComponent_Conditional_0_Conditional_97_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 27);
    \u0275\u0275text(1, "task_alt");
    \u0275\u0275elementEnd();
  }
}
function VipVisitorFlowComponent_Conditional_0_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 27);
    \u0275\u0275text(1, "keyboard_arrow_right");
    \u0275\u0275elementEnd();
  }
}
function VipVisitorFlowComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 4)(2, "div", 5)(3, "div", 6)(4, "icon");
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 7);
    \u0275\u0275conditionalCreate(10, VipVisitorFlowComponent_Conditional_0_Conditional_10_Template, 10, 6, "div", 8);
    \u0275\u0275elementStart(11, "div", 8)(12, "label");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementStart(15, "span");
    \u0275\u0275text(16, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(17, "date-field", 9);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10)(19, "div", 11)(20, "label");
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementStart(23, "span");
    \u0275\u0275text(24, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "time-field", 12);
    \u0275\u0275listener("ngModelChange", function VipVisitorFlowComponent_Conditional_0_Template_time_field_ngModelChange_25_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "div", 11)(27, "label");
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementStart(30, "span");
    \u0275\u0275text(31, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(32, "duration-field", 13);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(33, VipVisitorFlowComponent_Conditional_0_Conditional_33_Template, 7, 3, "div", 14);
    \u0275\u0275elementStart(34, "div", 8)(35, "label");
    \u0275\u0275text(36);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "mat-form-field", 15);
    \u0275\u0275element(39, "input", 16);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(41, "div", 6)(42, "icon");
    \u0275\u0275text(43, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(44, "div");
    \u0275\u0275text(45);
    \u0275\u0275pipe(46, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(47, "div", 7)(48, "div", 10)(49, "div", 17)(50, "label");
    \u0275\u0275text(51);
    \u0275\u0275pipe(52, "translate");
    \u0275\u0275elementStart(53, "span");
    \u0275\u0275text(54, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(55, "mat-form-field", 15);
    \u0275\u0275element(56, "input", 18);
    \u0275\u0275pipe(57, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(58, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(60, VipVisitorFlowComponent_Conditional_0_For_61_Template, 6, 3, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(62, "div", 17)(63, "label");
    \u0275\u0275text(64);
    \u0275\u0275pipe(65, "translate");
    \u0275\u0275elementStart(66, "span");
    \u0275\u0275text(67, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(68, "mat-form-field", 15);
    \u0275\u0275element(69, "input", 20);
    \u0275\u0275pipe(70, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(71, "mat-error");
    \u0275\u0275text(72);
    \u0275\u0275pipe(73, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(74, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(76, VipVisitorFlowComponent_Conditional_0_For_77_Template, 6, 3, "mat-option", 19, _forTrack0);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(78, "div", 8)(79, "label");
    \u0275\u0275text(80);
    \u0275\u0275pipe(81, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(82, "mat-form-field", 15);
    \u0275\u0275element(83, "input", 21);
    \u0275\u0275pipe(84, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(85, "div", 6)(86, "icon");
    \u0275\u0275text(87, "room_service");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(88, "div");
    \u0275\u0275text(89);
    \u0275\u0275pipe(90, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(91, "vip-visitor-flow-services", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(92, "div", 23);
    \u0275\u0275element(93, "div");
    \u0275\u0275elementStart(94, "button", 24);
    \u0275\u0275listener("click", function VipVisitorFlowComponent_Conditional_0_Template_button_click_94_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirmBooking());
    });
    \u0275\u0275elementStart(95, "div", 25);
    \u0275\u0275conditionalCreate(96, VipVisitorFlowComponent_Conditional_0_Conditional_96_Template, 2, 0, "icon", 26)(97, VipVisitorFlowComponent_Conditional_0_Conditional_97_Template, 2, 0, "icon", 27);
    \u0275\u0275elementStart(98, "div", 28);
    \u0275\u0275text(99);
    \u0275\u0275pipe(100, "translate");
    \u0275\u0275pipe(101, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(102, VipVisitorFlowComponent_Conditional_0_Conditional_102_Template, 2, 0, "icon", 27);
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const name_auto_r9 = \u0275\u0275reference(59);
    const email_auto_r10 = \u0275\u0275reference(75);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 32, "BOOKINGS.VIP_VISITOR_TIME_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.buildings().length > 1 ? 10 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 34, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 36, "FORM.TIME_START"));
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form_value().date)("ngModelOptions", \u0275\u0275pureFunction0(66, _c0))("use_24hr", ctx_r2.use_24hr());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(29, 38, "FORM.DURATION"));
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r2.form_value().date)("max", 480)("use_24hr", ctx_r2.use_24hr());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_book_for_others() ? 33 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(37, 40, "BOOKINGS.VIP_VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(40, 42, "BOOKINGS.VIP_VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 44, "BOOKINGS.VIP_VISITOR_DETAILS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("formGroup", ctx_r2.form);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(52, 46, "BOOKINGS.VIP_VISITOR_NAME"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(57, 48, "BOOKINGS.VIP_VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r9);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(65, 50, "BOOKINGS.VIP_VISITOR_EMAIL"));
    \u0275\u0275advance(5);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(70, 52, "BOOKINGS.VIP_VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r10);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(73, 54, "FORM.EMAIL_REQUIRED"));
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(81, 56, "BOOKINGS.VIP_VISITOR_COMPANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(84, 58, "BOOKINGS.VIP_VISITOR_COMPANY"));
    \u0275\u0275control();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(90, 60, "BOOKINGS.VIP_SERVICES_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("vip_data", ctx_r2.vip_data);
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.loading());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.loading() ? 96 : 97);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.loading() ? \u0275\u0275pipeBind1(100, 62, "COMMON.CONFIRMING") : \u0275\u0275pipeBind1(101, 64, "COMMON.CONFIRM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r2.loading() ? 102 : -1);
  }
}
function VipVisitorFlowComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 34)(2, "div", 35)(3, "icon");
    \u0275\u0275text(4, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 36);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "h2", 37);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(11, "img", 38);
    \u0275\u0275elementStart(12, "p");
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275pipe(15, "date");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 39)(18, "div", 40)(19, "button", 41);
    \u0275\u0275listener("click", function VipVisitorFlowComponent_Conditional_1_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.done());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 41);
    \u0275\u0275listener("click", function VipVisitorFlowComponent_Conditional_1_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookAnother());
    });
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 5, "BOOKINGS.VIP_LABEL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 7, "BOOKINGS.VIP_VISITOR_SENT_SINGLE", \u0275\u0275pureFunction1(23, _c1, ctx_r2.last_booking()?.asset_name)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 16, "BOOKINGS.VIP_VISITOR_SENT_MSG", \u0275\u0275pureFunction3(25, _c2, ctx_r2.building()?.display_name || ctx_r2.building()?.name, \u0275\u0275pipeBind2(14, 10, ctx_r2.last_booking()?.date, "mediumDate"), \u0275\u0275pipeBind2(15, 13, ctx_r2.last_booking()?.date, ctx_r2.time_format))), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 19, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 21, "BOOKINGS.VIP_VISITOR_BOOK_ANOTHER"), " ");
  }
}
var VipVisitorFlowComponent = class _VipVisitorFlowComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this.view = this._booking_form.view;
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
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
    this.last_booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = new FormGroup({
      booking_type: new FormControl("vip-visitor"),
      title: new FormControl("VIP Visit"),
      date: new FormControl(Date.now(), Validators.required),
      duration: new FormControl(60, Validators.required),
      user: new FormControl(currentUser()),
      asset_id: new FormControl("", [Validators.required, Validators.email]),
      asset_name: new FormControl("", Validators.required),
      company: new FormControl(""),
      phone: new FormControl(""),
      zones: new FormControl([])
    });
    this.vip_data = signal(
      {
        vip_assistant_name: "",
        vip_assistant_email: "",
        meet_greet: "none",
        walkthrough: false,
        welcome_beverage: "none",
        welcome_beverage_custom: "",
        gift: false,
        photographer: false,
        restaurant_reservation: null,
        driver: "in_house",
        welcome_screen: false,
        presentation: false
      },
      ...ngDevMode ? [{ debugName: "vip_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_value = toSignal(this.form.valueChanges, { initialValue: this.form.value });
    this.use_24hr = settingSignal("use_24_hour_time", false);
    this.can_book_for_others = settingSignal("bookings.can_book_for_others", false);
    this.buildings = this._org.active_buildings;
    this.filtered_visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "filtered_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = () => this._org.building;
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.form.patchValue({
      booking_type: "vip-visitor",
      title: "VIP Visit",
      user: currentUser()
    });
    this._booking_form.setOptions({ type: "vip-visitor", group: false });
    const history = this._settings.get("visitor-invitees") || [];
    const list = history.map((item) => {
      const [email, name, company] = item.split("|");
      return { email, name, company };
    });
    this.visitors.set(list);
    this.filtered_visitors.set(list);
    this.subscription("name", this.form.get("asset_name")?.valueChanges.subscribe((v) => this._filterVisitors(v)));
    this.subscription("email", this.form.get("asset_id")?.valueChanges.subscribe((v) => this._filterVisitors(v)));
    this.subscription("route", this._route.paramMap.subscribe((p) => {
      if (p.has("step"))
        this._booking_form.setView(p.get("step"));
    }));
    this.subscription("building", toObservable(this._org.active_building).pipe(filter((_) => !!_)).subscribe((bld) => {
      this.form.patchValue({ zones: [bld.id] });
    }));
  }
  _filterVisitors(term) {
    const s = (term || "").toLowerCase();
    this.filtered_visitors.set(this.visitors().filter((v) => v.email?.toLowerCase()?.includes(s) || v.name?.toLowerCase()?.includes(s)));
  }
  setVisitor(item) {
    this.form.patchValue({
      asset_id: item.email,
      asset_name: item.name,
      company: item.company
    });
  }
  async confirmBooking() {
    this.form.markAllAsTouched();
    if (!this.form.valid) {
      return notifyError(i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidFields(this.form).join(", ").replace("asset_id", i18n("BOOKINGS.VISITOR"))
      }));
    }
    const vip = this.vip_data();
    if (vip.restaurant_reservation && !vip.restaurant_reservation?.time) {
      return notifyError(i18n("BOOKINGS.VIP_RESTAURANT_TIME_REQUIRED"));
    }
    this.loading.set(true);
    try {
      const value = this.form.getRawValue();
      const user = currentUser();
      const zones = unique([
        this._org.organisation.id,
        this._org.region?.id,
        ...value.zones || []
      ]).filter((_) => _);
      const booking = new Booking({
        booking_type: "vip-visitor",
        asset_id: value.asset_id,
        asset_name: value.asset_name,
        description: value.asset_name,
        date: value.date,
        duration: value.duration,
        title: value.title,
        user_id: value.user?.id || user?.id,
        user_email: value.user?.email || user?.email,
        user_name: value.user?.name || user?.name,
        booked_by_id: user?.id,
        booked_by_email: user?.email,
        booked_by_name: user?.name,
        zones,
        attendees: [
          new User({
            name: value.asset_name,
            email: value.asset_id,
            organisation: value.company,
            phone: value.phone
          })
        ],
        extension_data: {
          is_vip: true,
          vip_assistant_name: vip.vip_assistant_name,
          vip_assistant_email: vip.vip_assistant_email,
          meet_greet: vip.meet_greet,
          walkthrough: vip.walkthrough,
          welcome_beverage: vip.welcome_beverage,
          welcome_beverage_custom: vip.welcome_beverage === "custom" ? vip.welcome_beverage_custom : "",
          gift: vip.gift,
          photographer: vip.photographer,
          restaurant_reservation: vip.restaurant_reservation,
          driver: vip.driver,
          welcome_screen: vip.welcome_screen,
          presentation: vip.presentation,
          phone: value.phone,
          department: value.user?.department || user?.department
        }
      });
      const result = await saveBooking(booking);
      this._booking_form.last_success = result;
      this.last_booking.set(result);
      notifySuccess(i18n("BOOKINGS.VIP_VISITOR_SENT_SINGLE", {
        name: value.asset_name
      }));
      this._booking_form.setView("success");
      this._router.navigate(["/book/vip-visitor/success"]);
    } catch (e) {
      notifyError(typeof e === "string" ? e : i18n("BOOKINGS.VIP_VISITOR_BOOKING_ERROR"));
    } finally {
      this.loading.set(false);
    }
  }
  done() {
    this._router.navigate(["/"]);
  }
  bookAnother() {
    this._booking_form.clearForm();
    this.vip_data.set({
      vip_assistant_name: "",
      vip_assistant_email: "",
      meet_greet: "none",
      walkthrough: false,
      welcome_beverage: "none",
      welcome_beverage_custom: "",
      gift: false,
      photographer: false,
      restaurant_reservation: null,
      driver: "in_house",
      welcome_screen: false,
      presentation: false
    });
    this._router.navigate(["/book/vip-visitor/form"]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VipVisitorFlowComponent_BaseFactory;
      return function VipVisitorFlowComponent_Factory(__ngFactoryType__) {
        return (\u0275VipVisitorFlowComponent_BaseFactory || (\u0275VipVisitorFlowComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VipVisitorFlowComponent)))(__ngFactoryType__ || _VipVisitorFlowComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VipVisitorFlowComponent, selectors: [["vip-visitor-flow"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], [1, "bg-base-200", "relative", "z-0", "h-full", "w-full", "overflow-auto"], [1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "text-center"], [1, "mx-auto", "flex", "min-h-full", "w-[80rem]", "max-w-full", "flex-col", "px-4", "pt-4"], [1, "border-base-300", "bg-base-100", "mb-4", "flex", "w-full", "flex-col", "overflow-hidden", "rounded-xl", "border"], [1, "gradient", "border-base-400", "relative", "flex", "items-center", "space-x-2", "border-l-8", "px-4", "py-3", "text-xl", "font-medium"], [1, "w-full", "p-4", 3, "formGroup"], [1, "flex", "flex-col"], ["formControlName", "date"], [1, "flex", "flex-col", "space-y-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], [1, "flex-1"], [3, "ngModelChange", "ngModel", "ngModelOptions", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "use_24hr"], [1, "flex", "w-full", "flex-col"], ["appearance", "outline", 1, "w-full"], ["matInput", "", "formControlName", "title", 3, "placeholder"], [1, "flex", "flex-1", "flex-col"], ["matInput", "", "formControlName", "asset_name", 3, "placeholder", "matAutocomplete"], [3, "value"], ["matInput", "", "type", "email", "formControlName", "asset_id", 3, "placeholder", "matAutocomplete"], ["matInput", "", "formControlName", "company", 3, "placeholder"], [3, "vip_data"], [1, "border-base-300", "bg-base-100", "sticky", "bottom-0", "z-20", "mt-auto", "flex", "justify-between", "rounded-t-xl", "border-x", "border-t", "p-3"], ["btn", "", "matRipple", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "animate-spin", "text-2xl"], [1, "text-2xl"], [1, "flex-1", "pr-4"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["formControlName", "user"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-[32rem]", "flex-1", "space-y-2", "overflow-auto"], [1, "bg-warning/20", "text-warning", "mb-4", "inline-flex", "items-center", "space-x-2", "rounded-full", "px-4", "py-2"], [1, "font-medium"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "border-base-200", "bg-base-100", "z-10", "w-full", "border-t", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-[32rem]", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"]], template: function VipVisitorFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, VipVisitorFlowComponent_Conditional_0_Template, 103, 67, "div", 2)(1, VipVisitorFlowComponent_Conditional_1_Template, 25, 29, "div", 3);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.view() !== "success" ? 0 : 1);
      }
    }, dependencies: [
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
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
      MatAutocompleteModule,
      MatAutocomplete,
      MatAutocompleteTrigger,
      IconComponent,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      VipVisitorFlowServicesComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n.gradient[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=vip-visitor-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorFlowComponent, [{
    type: Component,
    args: [{ selector: "vip-visitor-flow", template: `
        @if (view() !== 'success') {
            <div class="bg-base-200 relative z-0 h-full w-full overflow-auto">
                <div
                    class="mx-auto flex min-h-full w-[80rem] max-w-full flex-col px-4 pt-4"
                >
                    <div
                        class="border-base-300 bg-base-100 mb-4 flex w-full flex-col overflow-hidden rounded-xl border"
                    >
                        <!-- Visit Details Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>star</icon>
                            <div>
                                {{
                                    'BOOKINGS.VIP_VISITOR_TIME_HEADER'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="w-full p-4" [formGroup]="form">
                            @if (buildings().length > 1) {
                                <div class="flex flex-col">
                                    <label
                                        >{{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <mat-select
                                            [ngModel]="form_value().zones?.[0]"
                                            (ngModelChange)="
                                                form.patchValue({
                                                    zones: [$event],
                                                })
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                        >
                                            @for (
                                                bld of buildings();
                                                track bld
                                            ) {
                                                <mat-option [value]="bld.id">{{
                                                    bld.display_name || bld.name
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label
                                    >{{ 'FORM.DATE' | translate
                                    }}<span>*</span></label
                                >
                                <date-field formControlName="date"></date-field>
                            </div>
                            <div
                                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                            >
                                <div class="flex-1">
                                    <label
                                        >{{ 'FORM.TIME_START' | translate
                                        }}<span>*</span></label
                                    >
                                    <time-field
                                        [ngModel]="form_value().date"
                                        (ngModelChange)="
                                            form.patchValue({ date: $event })
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                        [use_24hr]="use_24hr()"
                                    />
                                </div>
                                <div class="flex-1">
                                    <label
                                        >{{ 'FORM.DURATION' | translate
                                        }}<span>*</span></label
                                    >
                                    <duration-field
                                        formControlName="duration"
                                        [time]="form_value().date"
                                        [max]="480"
                                        [use_24hr]="use_24hr()"
                                    />
                                </div>
                            </div>
                            @if (can_book_for_others()) {
                                <div class="flex w-full flex-col">
                                    <label
                                        >{{ 'FORM.HOST' | translate
                                        }}<span>*</span></label
                                    >
                                    <a-user-search-field
                                        formControlName="user"
                                    ></a-user-search-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label>{{
                                    'BOOKINGS.VIP_VISITOR_REASON' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        formControlName="title"
                                        [placeholder]="
                                            'BOOKINGS.VIP_VISITOR_REASON_PLACEHOLDER'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- Visitor Details Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>person</icon>
                            <div>
                                {{
                                    'BOOKINGS.VIP_VISITOR_DETAILS_HEADER'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="w-full p-4" [formGroup]="form">
                            <div
                                class="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2"
                            >
                                <div class="flex flex-1 flex-col">
                                    <label
                                        >{{
                                            'BOOKINGS.VIP_VISITOR_NAME'
                                                | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            formControlName="asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VIP_VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            [matAutocomplete]="name_auto"
                                        />
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #name_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item.email
                                        ) {
                                            <mat-option
                                                [value]="item.name"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-1 flex-col">
                                    <label
                                        >{{
                                            'BOOKINGS.VIP_VISITOR_EMAIL'
                                                | translate
                                        }}<span>*</span></label
                                    >
                                    <mat-form-field
                                        appearance="outline"
                                        class="w-full"
                                    >
                                        <input
                                            matInput
                                            type="email"
                                            formControlName="asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VIP_VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            [matAutocomplete]="email_auto"
                                        />
                                        <mat-error>{{
                                            'FORM.EMAIL_REQUIRED' | translate
                                        }}</mat-error>
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #email_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item.email
                                        ) {
                                            <mat-option
                                                [value]="item.email"
                                                (click)="setVisitor(item)"
                                            >
                                                <div
                                                    class="flex flex-col leading-tight"
                                                >
                                                    <div>{{ item.name }}</div>
                                                    <div
                                                        class="text-xs opacity-60"
                                                    >
                                                        {{ item.email }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <label>{{
                                    'BOOKINGS.VIP_VISITOR_COMPANY' | translate
                                }}</label>
                                <mat-form-field
                                    appearance="outline"
                                    class="w-full"
                                >
                                    <input
                                        matInput
                                        formControlName="company"
                                        [placeholder]="
                                            'BOOKINGS.VIP_VISITOR_COMPANY'
                                                | translate
                                        "
                                    />
                                </mat-form-field>
                            </div>
                        </div>

                        <!-- VIP Services Section -->
                        <div
                            class="gradient border-base-400 relative flex items-center space-x-2 border-l-8 px-4 py-3 text-xl font-medium"
                        >
                            <icon>room_service</icon>
                            <div>
                                {{ 'BOOKINGS.VIP_SERVICES_HEADER' | translate }}
                            </div>
                        </div>
                        <vip-visitor-flow-services [vip_data]="vip_data" />
                    </div>
                    <div
                        class="border-base-300 bg-base-100 sticky bottom-0 z-20 mt-auto flex justify-between rounded-t-xl border-x border-t p-3"
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
            <!-- Success View -->
            <div
                class="bg-base-100 flex h-full w-full flex-col items-center justify-center text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-[32rem] flex-1 space-y-2 overflow-auto"
                >
                    <div
                        class="bg-warning/20 text-warning mb-4 inline-flex items-center space-x-2 rounded-full px-4 py-2"
                    >
                        <icon>star</icon>
                        <span class="font-medium">{{
                            'BOOKINGS.VIP_LABEL' | translate
                        }}</span>
                    </div>
                    <h2 class="text-3xl">
                        {{
                            'BOOKINGS.VIP_VISITOR_SENT_SINGLE'
                                | translate
                                    : { name: last_booking()?.asset_name }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            'BOOKINGS.VIP_VISITOR_SENT_MSG'
                                | translate
                                    : {
                                          location:
                                              building()?.display_name ||
                                              building()?.name,
                                          date:
                                              (last_booking()?.date
                                              | date: 'mediumDate'),
                                          time:
                                              (last_booking()?.date
                                              | date: time_format),
                                      }
                        }}
                    </p>
                </div>
                <div
                    class="border-base-200 bg-base-100 z-10 w-full border-t p-2"
                >
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
                                'BOOKINGS.VIP_VISITOR_BOOK_ANOTHER' | translate
                            }}
                        </button>
                    </div>
                </div>
            </div>
        }
    `, imports: [
      DatePipe,
      FormsModule,
      ReactiveFormsModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatAutocompleteModule,
      IconComponent,
      TranslatePipe,
      DateFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      UserSearchFieldComponent,
      VipVisitorFlowServicesComponent
    ], styles: ["/* angular:styles/component:css;44751f17237dac3b1afa4ccf508001aadb8c1519dcdc53ee8f05eea1edf0abb8;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/vip-visitor-flow/vip-visitor-flow.component.ts */\n:host {\n  width: 100%;\n  height: 100%;\n}\n.gradient {\n  background:\n    linear-gradient(\n      105deg,\n      var(--base-200) 0%,\n      var(--base-200) 50%,\n      var(--base-100) 100%);\n}\n/*# sourceMappingURL=vip-visitor-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VipVisitorFlowComponent, { className: "VipVisitorFlowComponent", filePath: "apps/workplace/src/app/book/vip-visitor-flow/vip-visitor-flow.component.ts", lineNumber: 449 });
})();
export {
  VipVisitorFlowComponent
};
//# sourceMappingURL=vip-visitor-flow.component-YBD3WVEJ.js.map
