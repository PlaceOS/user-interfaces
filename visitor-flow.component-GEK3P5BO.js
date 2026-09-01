import {
  UserListFieldComponent
} from "./chunk-YV3TXXBL.js";
import "./chunk-JFIBKOX5.js";
import {
  BookingFormService
} from "./chunk-KR3ENBTV.js";
import {
  HostSelectFieldComponent
} from "./chunk-4VXIXX3R.js";
import {
  DurationFieldComponent
} from "./chunk-UXO4UAIX.js";
import {
  DateFieldComponent,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteTrigger,
  UserSearchFieldComponent
} from "./chunk-EV6UNXLG.js";
import "./chunk-FTN2E3EY.js";
import "./chunk-5LPLTHC6.js";
import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink
} from "./chunk-XT3FCF7B.js";
import "./chunk-I4LF72KZ.js";
import "./chunk-LVPYA6GN.js";
import {
  TimeFieldComponent
} from "./chunk-3SWFUPEY.js";
import {
  MatCheckbox,
  MatCheckboxModule
} from "./chunk-F6HLMSGY.js";
import "./chunk-7B6GKRRT.js";
import "./chunk-D2OXQSQX.js";
import {
  Booking,
  FormField,
  IconComponent,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SafePipe,
  SanitizePipe,
  SettingsService,
  User,
  bookingHostUser,
  currentUser
} from "./chunk-I3HIYV2O.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Injector,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgForm,
  NgModel,
  Output,
  Router,
  TranslatePipe,
  alignDateToBookableHours,
  computed,
  effect,
  getInvalidSignalFields,
  i18n,
  inject,
  input,
  linkedSignal,
  notifyError,
  notifySuccess,
  onFieldChange,
  output,
  setClassMetadata,
  signal,
  unique,
  ɵNgNoValidate,
  ɵsetClassDebugInfo,
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
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction2,
  ɵɵpureFunction3,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-7MJI2IHH.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/invite-visitor-form.component.ts
var _c0 = () => ({ standalone: true });
var _c1 = (a0, a1) => ({ name: a0, count: a1 });
var _c2 = (a0, a1, a2) => ({ location: a0, date: a1, time: a2 });
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 21);
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
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 19);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 17)(7, "mat-select", 20);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template_mat_select_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(8, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_For_9_Template, 2, 2, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "RESOURCE.BUILDING"));
    \u0275\u0275advance(5);
    \u0275\u0275property("ngModel", ctx_r2.selected_building_id())("ngModelOptions", \u0275\u0275pureFunction0(5, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.buildings());
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 12);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r2.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 22)(2, "label", 23);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementStart(5, "span");
    \u0275\u0275text(6, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a-time-field", 24);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_10_Template_a_time_field_ngModelChange_7_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.model.update((m) => __spreadProps(__spreadValues({}, m), { date: $event })));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22)(9, "label", 25);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementStart(12, "span");
    \u0275\u0275text(13, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(14, "a-duration-field", 26);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 15, "FORM.TIME_START"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.form_date())("disabled", ctx_r2.is_start_time_disabled())("ngModelOptions", \u0275\u0275pureFunction0(19, _c0))("use_24hr", ctx_r2.use_24hr())("range", ctx_r2.bookable_hours())("min_duration", ctx_r2.min_duration())("timezone", ctx_r2.timezone());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 17, "FORM.TIME_END"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r2.form.duration)("time", ctx_r2.form_date())("max", ctx_r2.max_duration())("use_24hr", ctx_r2.use_24hr())("end_time", ctx_r2.bookable_hours()?.end)("timezone", ctx_r2.timezone());
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-search-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r2.form.user);
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label", 27);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "host-select-field", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r2.form.user);
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_12_Template_mat_option_click_0_listener() {
      const item_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r8));
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r8 = ctx.$implicit;
    \u0275\u0275property("value", item_r8.name);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r8.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r8.email, " ", item_r8.company ? "| " + item_r8.company : "", " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 33);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_28_Template_mat_option_click_0_listener() {
      const item_r10 = \u0275\u0275restoreView(_r9).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(5);
      return \u0275\u0275resetView(ctx_r2.setVisitor(item_r10));
    });
    \u0275\u0275elementStart(1, "div", 34)(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 35);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275property("value", item_r10.email);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r10.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", item_r10.email, " ", item_r10.company ? "| " + item_r10.company : "", " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "mat-form-field", 17)(7, "input", 30);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_Template_input_focus_7_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.filterVisitors(ctx_r2.model().asset_name));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "mat-autocomplete", null, 0);
    \u0275\u0275repeaterCreate(11, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_12_Template, 6, 4, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "div", 10)(14, "label", 31);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-form-field", 17)(20, "input", 32);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275listener("focus", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_Template_input_focus_20_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.filterVisitors(ctx_r2.model().asset_id));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(22, "mat-error");
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "mat-autocomplete", null, 1);
    \u0275\u0275repeaterCreate(27, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_For_28_Template, 6, 4, "mat-option", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 10)(30, "label", 29);
    \u0275\u0275text(31);
    \u0275\u0275pipe(32, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "mat-form-field", 17);
    \u0275\u0275element(34, "input", 18);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const name_auto_r11 = \u0275\u0275reference(10);
    const email_auto_r12 = \u0275\u0275reference(26);
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, "BOOKINGS.VISITOR_NAME"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r2.form.asset_name)("placeholder", \u0275\u0275pipeBind1(8, 14, "BOOKINGS.VISITOR_NAME_PLACEHOLDER"))("matAutocomplete", name_auto_r11);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 16, "BOOKINGS.VISITOR_EMAIL"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r2.form.asset_id)("placeholder", \u0275\u0275pipeBind1(21, 18, "BOOKINGS.VISITOR_EMAIL_PLACEHOLDER"))("matAutocomplete", email_auto_r12);
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 20, "FORM.EMAIL_REQUIRED"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.filtered_visitors());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(32, 22, "BOOKINGS.VISITOR_COMPANY"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form.company)("placeholder", \u0275\u0275pipeBind1(35, 24, "BOOKINGS.VISITOR_COMPANY"));
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Conditional_7_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 40);
    \u0275\u0275listener("ngModelChange", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Conditional_7_For_5_Template_mat_checkbox_ngModelChange_0_listener($event) {
      const item_r14 = \u0275\u0275restoreView(_r13).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(6);
      return \u0275\u0275resetView(ctx_r2.setVisitorInternational(item_r14, $event));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r14 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(6);
    \u0275\u0275property("ngModel", ctx_r2.visitor_international()[item_r14.email || item_r14.id] || false)("ngModelOptions", \u0275\u0275pureFunction0(3, _c0));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r14.name || item_r14.email, " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "label");
    \u0275\u0275text(2, "International Visitors");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 38);
    \u0275\u0275repeaterCreate(4, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Conditional_7_For_5_Template, 2, 4, "mat-checkbox", 39, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(5);
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r2.model().assets);
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 29);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(6, "a-user-list-field", 36);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Conditional_7_Template, 6, 0, "div", 37);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r2.form.assets)("guests_only", true);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_international && ctx_r2.model().assets?.length ? 7 : -1);
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "label", 41);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 17);
    \u0275\u0275element(5, "input", 18);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "BOOKINGS.PASS_NUMBER"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form.pass_number)("placeholder", \u0275\u0275pipeBind1(6, 5, "BOOKINGS.VISITOR_PASS_PLACEHOLDER"));
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 12);
    \u0275\u0275text(2, " International Visitor ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r2.form.international);
    \u0275\u0275control();
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "form", 7);
    \u0275\u0275conditionalCreate(1, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_1_Template, 10, 6, "div", 10);
    \u0275\u0275elementStart(2, "div", 10)(3, "label", 11);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(8, "a-date-field", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_9_Template, 4, 4, "div", 13);
    \u0275\u0275conditionalCreate(10, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_10_Template, 15, 20, "div", 14);
    \u0275\u0275conditionalCreate(11, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_11_Template, 7, 4, "div", 15)(12, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_12_Template, 7, 4, "div", 15);
    \u0275\u0275conditionalCreate(13, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_13_Template, 36, 26)(14, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_14_Template, 8, 6);
    \u0275\u0275elementStart(15, "div", 10)(16, "label", 16);
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "mat-form-field", 17);
    \u0275\u0275element(20, "input", 18);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(22, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_22_Template, 7, 7, "div", 10);
    \u0275\u0275conditionalCreate(23, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Conditional_23_Template, 3, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.buildings()?.length > 1 ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 12, "FORM.DATE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r2.form.date);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_all_day() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r2.model().all_day ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_book_for_anyone() ? 11 : ctx_r2.can_book_for_others() ? 12 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.multiple() ? 13 : 14);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 14, "BOOKINGS.VISITOR_REASON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r2.form.title)("placeholder", \u0275\u0275pipeBind1(21, 16, "BOOKINGS.VISITOR_REASON_PLACEHOLDER"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.allow_pass_number() ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.allow_international() && !ctx_r2.multiple() ? 23 : -1);
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 5)(2, "h2", 6);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(5, InviteVisitorFormComponent_Conditional_0_Conditional_0_Conditional_5_Template, 24, 18, "form", 7);
    \u0275\u0275elementStart(6, "div", 8)(7, "button", 9);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_0_Conditional_0_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.sendInvite());
    });
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, ctx_r2.is_edit() ? "BOOKINGS.VISITOR_EDIT_TITLE" : "BOOKINGS.VISITOR_INVITE_TITLE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.form ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, ctx_r2.is_edit() ? "BOOKINGS.VISITOR_UPDATE" : "BOOKINGS.VISITOR_SEND"), " ");
  }
}
function InviteVisitorFormComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 42);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "BOOKINGS.VISITOR_SENDING"));
  }
}
function InviteVisitorFormComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, InviteVisitorFormComponent_Conditional_0_Conditional_0_Template, 10, 7, "div", 3)(1, InviteVisitorFormComponent_Conditional_0_Conditional_1_Template, 5, 4, "div", 4);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.loading() && !ctx_r2.loading_many() ? 0 : 1);
  }
}
function InviteVisitorFormComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 46)(1, "a", 50);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 51);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 52);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 53);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 54);
    \u0275\u0275pipe(14, "safe");
    \u0275\u0275elementStart(15, "icon", 55);
    \u0275\u0275text(16, "download");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("href", \u0275\u0275pipeBind2(2, 6, ctx_r2.outlook_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 9, "BOOKINGS.LINK_OUTLOOK"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(8, 11, ctx_r2.google_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 14, "BOOKINGS.LINK_GOOGLE"));
    \u0275\u0275advance(2);
    \u0275\u0275property("href", \u0275\u0275pipeBind2(14, 16, ctx_r2.ical_link(), "url"), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 19, "BOOKINGS.LINK_ICAL"));
  }
}
function InviteVisitorFormComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 43)(2, "h2", 44);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "img", 45);
    \u0275\u0275elementStart(6, "p");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "date");
    \u0275\u0275pipe(9, "date");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, InviteVisitorFormComponent_Conditional_1_Conditional_11_Template, 20, 21, "div", 46);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 47)(13, "div", 48)(14, "button", 49);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_1_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.onDone());
    });
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 49);
    \u0275\u0275listener("click", function InviteVisitorFormComponent_Conditional_1_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.sent.set(false));
    });
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 5, ctx_r2.multiple() ? "BOOKINGS.VISITOR_SENT_MULTIPLE" : "BOOKINGS.VISITOR_SENT_SINGLE", \u0275\u0275pureFunction2(21, _c1, ctx_r2.last_success()?.asset_name || ctx_r2.last_success()?.asset_id, ctx_r2.last_count() || 1)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 14, ctx_r2.multiple() && ctx_r2.last_count() > 1 ? "BOOKINGS.VISITOR_SENT_MSG_MULTIPLE" : "BOOKINGS.VISITOR_SENT_MSG", \u0275\u0275pureFunction3(24, _c2, ctx_r2.building()?.display_name || ctx_r2.building()?.name, \u0275\u0275pipeBind2(8, 8, ctx_r2.last_success()?.date, "mediumDate"), \u0275\u0275pipeBind2(9, 11, ctx_r2.last_success()?.date, ctx_r2.time_format()))), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.show_links() ? 11 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 17, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 19, ctx_r2.multiple() && ctx_r2.last_count() > 1 ? "BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE" : "BOOKINGS.VISITOR_BOOK_ANOTHER"), " ");
  }
}
var InviteVisitorFormComponent = class _InviteVisitorFormComponent {
  constructor() {
    this._service = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._injector = inject(Injector);
    this._existing_siblings = [];
    this._loaded_visitors = null;
    this.date = input(
      void 0,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.done = output();
    this.outlook_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "outlook_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.google_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "google_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ical_link = signal(
      "",
      ...ngDevMode ? [{ debugName: "ical_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.sent = signal(
      false,
      ...ngDevMode ? [{ debugName: "sent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._service.loading;
    this.loading_many = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading_many" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.buildings = this._org.building_list;
    this.last_success = signal(
      this._service.last_success,
      ...ngDevMode ? [{ debugName: "last_success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_count = signal(
      0,
      ...ngDevMode ? [{ debugName: "last_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitors = [];
    this.filtered_visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "filtered_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_international = signal(
      {},
      ...ngDevMode ? [{ debugName: "visitor_international" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._visitor_bookable_hours = this._settings.signal("visitors.bookable_hours", null);
    this._booking_bookable_hours = this._settings.signal("bookings.bookable_hours", null);
    this._visitor_max_duration = this._settings.signal("visitors.max_duration", null);
    this._booking_max_duration = this._settings.signal("bookings.max_duration", null);
    this._allow_pass_number = this._settings.signal("visitors.allow_pass_number", false);
    this._allow_international = this._settings.signal("visitors.allow_international", false);
    this._visitor_allow_all_day = this._settings.signal("visitors.allow_all_day", void 0);
    this._booking_allow_all_day = this._settings.signal("bookings.allow_all_day", false);
    this._multiple = this._settings.signal("bookings.multiple_visitors", false);
    this._visitor_can_book_for_others = this._settings.signal("visitors.can_book_for_others", void 0);
    this._booking_can_book_for_others = this._settings.signal("bookings.can_book_for_others", false);
    this._visitor_can_book_for_anyone = this._settings.signal("visitors.can_book_for_anyone", void 0);
    this._booking_can_book_for_anyone = this._settings.signal("bookings.can_book_for_anyone", false);
    this._show_links = this._settings.signal("visitors.show_calendar_links", false);
    this._use_region = this._settings.signal("use_region", false);
    this._use_24hr = this._settings.signal("use_24_hour_time", false);
    this._booking_use_building_timezone = this._settings.signal("bookings.use_building_timezone", false);
    this._visitor_use_building_timezone = this._settings.signal("visitors.use_building_timezone", false);
    this._visitor_min_duration = this._settings.signal("visitors.min_duration", null);
    this._booking_min_duration = this._settings.signal("bookings.min_duration", null);
    this.bookable_hours = computed(
      () => this._visitor_bookable_hours() || this._booking_bookable_hours(),
      ...ngDevMode ? [{ debugName: "bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = computed(
      () => this._visitor_max_duration() || this._booking_max_duration() || 4 * 60,
      ...ngDevMode ? [{ debugName: "max_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_pass_number = this._allow_pass_number;
    this.allow_international = this._allow_international;
    this.allow_all_day = computed(
      () => this._visitor_allow_all_day() ?? this._booking_allow_all_day(),
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.multiple = this._multiple;
    this.can_book_for_others = computed(
      () => this._visitor_can_book_for_others() ?? this._booking_can_book_for_others(),
      ...ngDevMode ? [{ debugName: "can_book_for_others" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_book_for_anyone = computed(
      () => this._visitor_can_book_for_anyone() ?? this._booking_can_book_for_anyone(),
      ...ngDevMode ? [{ debugName: "can_book_for_anyone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_links = this._show_links;
    this.building = computed(
      () => this._use_region() ? this._org.region : this._org.building,
      ...ngDevMode ? [{ debugName: "building" }] : (
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
    this.time_format = this._settings.time_format_signal;
    this.use_24hr = this._use_24hr;
    this.timezone = computed(
      () => this._booking_use_building_timezone() || this._visitor_use_building_timezone() ? this._org.building?.timezone || "" : "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = computed(
      () => this._visitor_min_duration() || this._booking_min_duration() || 30,
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form_date = linkedSignal(
      () => this.model()?.date || Date.now(),
      ...ngDevMode ? [{ debugName: "form_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_start_time_disabled = computed(
      () => this.form.date().disabled() || false,
      ...ngDevMode ? [{ debugName: "is_start_time_disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_building_id = computed(
      () => {
        const zone_list = this.model()?.zones || [];
        const level = this._org.levelWithID(zone_list);
        const building = this._org.buildings.find((bld) => zone_list.includes(bld.id) || zone_list.includes(bld.zone_id)) || this._org.buildings.find((bld) => level?.parent_id === bld.id);
        if (building?.id)
          return building.id;
        if (this.model()?.id)
          return zone_list[0] || "";
        return this._org.building?.id || zone_list[0] || "";
      },
      ...ngDevMode ? [{ debugName: "selected_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._multipleVisitorEffect = effect(
      () => {
        const { id, asset_id } = this.model();
        if (!this.multiple() || id || asset_id)
          return;
        this.model.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: "multiple@place.tech" }));
      },
      ...ngDevMode ? [{ debugName: "_multipleVisitorEffect" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._dateEffect = effect(
      () => {
        const date = this.date();
        if (date) {
          const aligned_date = alignDateToBookableHours(date, this.bookable_hours(), this.model().date);
          this.model.update((m) => __spreadProps(__spreadValues({}, m), { date: aligned_date }));
        }
      },
      ...ngDevMode ? [{ debugName: "_dateEffect" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get form() {
    return this._service.form;
  }
  get model() {
    return this._service.model;
  }
  async ngOnInit() {
    this.sent.set(false);
    this._service.clearOldState();
    await this.initFormZone();
    this.form_date.set(this.model().date);
    const visitors = this._settings.get("visitor-invitees") || [];
    for (const item of visitors) {
      if (typeof item !== "string")
        continue;
      const [email, name, company, international] = item.split("|");
      this.visitors.push({
        email,
        name,
        company,
        international: international === "1"
      });
    }
    this.filterVisitors("");
    onFieldChange(this.model, (m) => m.asset_id, (_) => this.filterVisitors(_), this._injector);
    onFieldChange(this.model, (m) => m.asset_name, (_) => this.filterVisitors(_), this._injector);
    this.syncVisitorInternational(this.model().assets || []);
    onFieldChange(this.model, (m) => m.assets, (_) => this.syncVisitorInternational(_ || []), this._injector);
    if (!this.model().id)
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { title: "Visit" }));
  }
  setVisitor(item) {
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      asset_id: item.email,
      asset_name: item.name,
      company: item.company,
      phone: item.phone,
      international: !!item.international
    }));
  }
  setBuilding(building_id) {
    if (!building_id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { zones: [] }));
      return;
    }
    const building = this._org.find(building_id);
    const zones = [
      this._org.organisation?.id,
      building?.parent_id,
      building_id
    ].filter((_) => _);
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { zones }));
  }
  setVisitorInternational(item, international) {
    const key = item.email || item.id;
    if (!key)
      return;
    this.visitor_international.set(__spreadProps(__spreadValues({}, this.visitor_international()), {
      [key]: !!international
    }));
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      assets: (m.assets || []).map((user) => {
        const user_key = user.email || user.id;
        return user_key !== key ? user : new User(__spreadProps(__spreadValues({}, user), {
          international: !!international,
          extension_data: __spreadProps(__spreadValues({}, user.extension_data || {}), {
            international: !!international
          })
        }));
      })
    }));
  }
  filterVisitors(filter) {
    const s = (filter || "").toLowerCase();
    this.filtered_visitors.set(this.visitors.filter(({ email, name, company }) => email.toLowerCase().includes(s) || name.toLowerCase().includes(s) || `${company || ""}`.toLowerCase().includes(s)));
  }
  onDone() {
    this.done.emit();
    this.sent.set(false);
  }
  async sendInvite() {
    this.form().markAsTouched();
    const form_data = this.model();
    if (!this.form().valid() || this.multiple() && !form_data.assets?.length) {
      return notifyError(`Some fields are invalid. [${getInvalidSignalFields(this.form, this.model).join(", ") || "visitors"}]`);
    }
    if (!this.model().user_email || !this.can_book_for_others() && !this.model().id) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), { user: currentUser() }));
    }
    const visitor_reason = form_data.title || form_data.description || "Visit";
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { title: visitor_reason }));
    const old_visitors = this._settings.get("visitor-invitees") || [];
    const { asset_id, asset_name, company, international, assets } = this.model();
    if (this.multiple() && assets?.length) {
      const asset_ids = assets.map((_) => _.email).filter((_) => !!_);
      this._settings.saveUserSetting("visitor-invitees", [
        ...old_visitors.filter((_) => {
          const visitor_id = `${_}`.split("|")[0];
          return !asset_ids.includes(visitor_id);
        }),
        ...assets.filter((_) => !!_.email).map((item) => {
          return `${item.email}|${item.name || item.email}|${item.company || item.organisation || ""}|${this.getVisitorInternational(item) ? "1" : "0"}`;
        })
      ]);
    } else {
      const visitor_details = `${asset_id}|${asset_name}|${company}|${international ? "1" : "0"}`;
      this._settings.saveUserSetting("visitor-invitees", [
        ...old_visitors.filter((_) => !_.includes(asset_id)),
        visitor_details
      ]);
    }
    const is_editing = this.is_edit();
    await (this.multiple() ? this._bookForMany() : this._bookForOne());
    if (is_editing) {
      notifySuccess(i18n("BOOKINGS.VISITOR_UPDATED"));
      this.done.emit();
      return;
    }
    this.last_success.set(this._service.last_success);
    if (this.last_success())
      this._generateLinks();
    await this.initFormZone();
    this.sent.set(true);
  }
  async initFormZone() {
    await this._org.waitUntilInitialised();
    const form_snapshot = this.model();
    const booking_snapshot = this._service.booking;
    const is_visitor_booking = (booking) => booking?.booking_type === "visitor" || booking?.type === "visitor";
    const keep_preloaded_edit = (!!form_snapshot.id || !!booking_snapshot?.id) && (is_visitor_booking(form_snapshot) || is_visitor_booking(booking_snapshot));
    if (keep_preloaded_edit && !form_snapshot?.id && booking_snapshot?.id) {
      const booking = new Booking(booking_snapshot);
      this.model.set(__spreadProps(__spreadValues(__spreadValues(__spreadValues({
        booked_by: currentUser()
      }, booking_snapshot), booking), booking.extension_data || {}), {
        // Rebuilt from the booking's `user_*` fields so a delegate
        // booking keeps its host instead of falling back to whoever
        // opened the form.
        user: bookingHostUser(booking),
        _in_progress: booking_snapshot.state === "started" || booking_snapshot.state === "in_progress"
      }));
      this.form().reset();
    } else if (!keep_preloaded_edit) {
      this._service.loadForm("visitor");
    }
    this._service.setOptions({ type: "visitor" });
    if (!this.model().id)
      this._service.newForm("visitor");
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { booking_type: "visitor" }));
    this.form_date.set(this.model().date);
    if (!this.model().id && !this.model().zones?.length) {
      this.model.update((m) => __spreadProps(__spreadValues({}, m), {
        zones: [this._org.building?.id]
      }));
    }
    if (this.model().id) {
      const booking_ref = this._service.booking;
      if (this.multiple()) {
        const extension_visitors = this._visitorsFromGroupMembers(booking_ref?.extension_data?.group_members || []);
        if (extension_visitors.length) {
          this._setLoadedVisitors(extension_visitors);
        }
        this._loadSiblingVisitors(booking_ref?.id ? booking_ref : new Booking(this.model())).catch(() => null);
      }
      if (!this.model().assets?.length) {
        const attendees = this.model().attendees || [];
        if (attendees.length) {
          this._setLoadedVisitors(attendees);
        } else if (this.model().asset_id) {
          this._setLoadedVisitors([
            new User({
              name: this.model().asset_name,
              email: this.model().asset_id,
              organisation: this.model().company
            })
          ]);
        }
      }
      if (!this.multiple() && this.model().assets?.length) {
        const [visitor] = this.model().assets;
        if (visitor?.email) {
          this.model.update((m) => __spreadProps(__spreadValues({}, m), {
            asset_id: visitor.email,
            asset_name: visitor.name || visitor.email,
            company: visitor.company || visitor.organisation || m.company,
            phone: visitor.phone || m.phone
          }));
        }
      }
    }
  }
  /** Seed the visitor list from booking data, recording it so a later load
   * can tell whether the user has since edited the list. */
  _setLoadedVisitors(visitors) {
    const list = unique(visitors, "email");
    this._loaded_visitors = list;
    this.model.update((m) => __spreadProps(__spreadValues({}, m), { assets: list }));
    this.syncVisitorInternational(list);
  }
  async _loadSiblingVisitors(booking_ref) {
    this._existing_siblings = await this._service.loadGroupSiblings(booking_ref);
    if (!this._existing_siblings.length)
      return;
    const visitors = this._existing_siblings.map((s) => {
      const group_member = (s.extension_data?.group_members || []).find((member) => member?.email === s.asset_id);
      return new User({
        name: group_member?.name || s.asset_name || s.asset_id,
        email: s.asset_id,
        organisation: group_member?.company || s.extension_data?.company,
        phone: group_member?.phone || s.extension_data?.phone,
        extension_data: {
          international: !!(group_member?.international || s.extension_data?.international)
        }
      });
    });
    const current = this.model().assets;
    if (this._loaded_visitors && current !== this._loaded_visitors)
      return;
    this._setLoadedVisitors(visitors);
  }
  _visitorsFromGroupMembers(members = []) {
    return (members || []).filter((member) => !!member?.email).map((member) => new User({
      name: member.name || member.email,
      email: member.email,
      organisation: member.company || "",
      phone: member.phone || "",
      extension_data: {
        international: !!member.international
      }
    }));
  }
  async _bookForOne() {
    const value = this.model();
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      name: value.asset_name || value.asset_id,
      attendees: [
        new User({
          name: value.asset_name || value.asset_id,
          email: value.asset_id,
          organisation: value.company,
          phone: value.phone
        })
      ]
    }));
    await this._service.postForm().catch((e) => {
      notifyError(e);
      throw e;
    });
  }
  async _bookForMany() {
    this.loading_many.set(true);
    const assets = this.model().assets || [];
    this.last_count.set(assets.length);
    const visitor_members = assets.filter((_) => !!_.email).map((user) => new User(__spreadProps(__spreadValues({}, user), {
      name: user.name || user.email,
      international: this.getVisitorInternational(user),
      extension_data: __spreadProps(__spreadValues({}, user.extension_data || {}), {
        international: this.getVisitorInternational(user)
      })
    })));
    this._service.setOptions({
      type: "visitor",
      group: true,
      members: visitor_members
    });
    if (this.is_edit()) {
      let existing_siblings = this._existing_siblings;
      if (!existing_siblings.length) {
        const booking_ref = this._service.booking;
        existing_siblings = await this._service.loadGroupSiblings(booking_ref?.id ? booking_ref : new Booking(this.model()));
      }
      if (!existing_siblings.length) {
        existing_siblings = [new Booking(this.model())];
      }
      this._existing_siblings = existing_siblings;
      await this._service.editFormForGroup(existing_siblings).catch((e) => {
        notifyError(e);
        this.loading_many.set(false);
        throw e;
      });
    } else {
      await this._service.postFormForVisitorGroup().catch((e) => {
        notifyError(e);
        this.loading_many.set(false);
        throw e;
      });
    }
    this.loading_many.set(false);
  }
  syncVisitorInternational(assets = []) {
    const map_data = {};
    for (const item of assets || []) {
      const key = item.email || item.id;
      if (!key)
        continue;
      map_data[key] = this.getVisitorInternational(item);
    }
    this.visitor_international.set(map_data);
  }
  getVisitorInternational(item) {
    const key = item?.email || item?.id;
    if (!key)
      return false;
    if (key in this.visitor_international()) {
      return !!this.visitor_international()[key];
    }
    return !!item.international || !!item?.extension_data?.international;
  }
  _generateLinks() {
    const last_success = this.last_success();
    const event = __spreadProps(__spreadValues({}, last_success), {
      host: last_success.user_email,
      organiser: {
        name: last_success.user_name,
        email: last_success.user_email
      },
      attendees: last_success.attendees.map((_) => _.email),
      body: last_success.description,
      location: this._org.building.display_name || this._org.building.name
    });
    event.attendees.push(last_success.asset_id);
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
  }
  static {
    this.\u0275fac = function InviteVisitorFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _InviteVisitorFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _InviteVisitorFormComponent, selectors: [["invite-visitor-form"]], inputs: { date: [1, "date"] }, outputs: { done: "done" }, decls: 2, vars: 1, consts: [["name_auto", "matAutocomplete"], ["email_auto", "matAutocomplete"], ["sent", "", 1, "bg-base-100", "absolute", "inset-0", "flex", "flex-col", "items-center", "justify-center", "text-center"], [1, "bg-base-100", "relative", "flex", "max-h-full", "flex-col", "overflow-auto"], ["loading", "", 1, "relative", "flex", "h-full", "min-h-72", "w-full", "flex-col", "items-center", "justify-center", "overflow-hidden", "rounded-sm"], [1, "border-base-200", "w-full", "border-b", "px-4", "py-4", "sm:px-16"], [1, "text-2xl", "font-medium"], [1, "px-4", "py-4", "sm:px-16"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "border-t", "px-4", "py-4", "sm:px-16"], ["btn", "", "matRipple", "", "send", "", 1, "w-full", "sm:w-auto", 3, "click"], [1, "flex", "flex-col"], ["for", "date"], [3, "formField"], [1, "-mt-2", "mb-2", "flex", "justify-end"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col"], ["for", "reason"], ["appearance", "outline"], ["matInput", "", 3, "formField", "placeholder"], ["for", "building"], ["name", "building", "placeholder", "Select building", 3, "ngModelChange", "ngModel", "ngModelOptions"], [3, "value"], [1, "flex", "w-1/3", "flex-1", "flex-col"], ["for", "start-time"], ["name", "start-time", 3, "ngModelChange", "ngModel", "disabled", "ngModelOptions", "use_24hr", "range", "min_duration", "timezone"], ["for", "end-time"], [3, "formField", "time", "max", "use_24hr", "end_time", "timezone"], ["for", "host"], [1, "mb-4", 3, "formField"], ["for", "visitor-name"], ["matInput", "", "id", "visitor-name", 3, "focus", "formField", "placeholder", "matAutocomplete"], ["for", "visitor-email"], ["matInput", "", "type", "email", "id", "visitor-email", 3, "focus", "formField", "placeholder", "matAutocomplete"], [3, "click", "value"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-60"], [3, "formField", "guests_only"], [1, "mb-2", "flex", "flex-col"], [1, "flex", "flex-wrap", "gap-x-4", "gap-y-2"], [3, "ngModel", "ngModelOptions"], [3, "ngModelChange", "ngModel", "ngModelOptions"], ["for", "pass"], [3, "diameter"], [1, "z-0", "m-8", "h-1/2", "w-full", "max-w-lg", "flex-1", "space-y-2", "overflow-auto"], [1, "text-3xl"], ["src", "assets/icons/sent.svg", 1, "mx-auto"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "z-10", "w-full", "border-t", "p-2"], [1, "mx-auto", "flex", "w-full", "max-w-lg", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], [1, "text-xl"]], template: function InviteVisitorFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, InviteVisitorFormComponent_Conditional_0_Template, 2, 1)(1, InviteVisitorFormComponent_Conditional_1_Template, 20, 28, "div", 2);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.sent() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatCheckboxModule,
      MatCheckbox,
      UserListFieldComponent,
      FormField,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      UserSearchFieldComponent,
      HostSelectFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatSelectModule,
      MatSelect,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      FormsModule,
      \u0275NgNoValidate,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      NgForm,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InviteVisitorFormComponent, [{
    type: Component,
    args: [{ selector: `invite-visitor-form`, template: `
        @if (!sent()) {
            @if (!loading() && !loading_many()) {
                <div
                    class="bg-base-100 relative flex max-h-full flex-col overflow-auto"
                >
                    <div
                        class="border-base-200 w-full border-b px-4 py-4 sm:px-16"
                    >
                        <h2 class="text-2xl font-medium">
                            {{
                                (is_edit()
                                    ? 'BOOKINGS.VISITOR_EDIT_TITLE'
                                    : 'BOOKINGS.VISITOR_INVITE_TITLE'
                                ) | translate
                            }}
                        </h2>
                    </div>
                    @if (form) {
                        <form class="px-4 py-4 sm:px-16">
                            @if (buildings()?.length > 1) {
                                <div class="flex flex-col">
                                    <label for="building">
                                        {{ 'RESOURCE.BUILDING' | translate
                                        }}<span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <mat-select
                                            [ngModel]="selected_building_id()"
                                            (ngModelChange)="
                                                setBuilding($event)
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            name="building"
                                            placeholder="Select building"
                                        >
                                            @for (
                                                bld of buildings();
                                                track bld
                                            ) {
                                                <mat-option [value]="bld.id">
                                                    {{
                                                        bld.display_name ||
                                                            bld.name
                                                    }}
                                                </mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            }
                            <div class="flex flex-col">
                                <label for="date">
                                    {{ 'FORM.DATE' | translate }}<span>*</span>
                                </label>
                                <a-date-field
                                    [formField]="form.date"
                                ></a-date-field>
                            </div>
                            @if (allow_all_day()) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox [formField]="form.all_day">
                                        {{ 'COMMON.ALL_DAY' | translate }}
                                    </mat-checkbox>
                                </div>
                            }
                            @if (!model().all_day) {
                                <div class="flex items-center space-x-2">
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="start-time">
                                            {{ 'FORM.TIME_START' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-time-field
                                            name="start-time"
                                            [ngModel]="form_date()"
                                            [disabled]="
                                                is_start_time_disabled()
                                            "
                                            (ngModelChange)="
                                                model.update((m) => ({
                                                    ...m,
                                                    date: $event,
                                                }))
                                            "
                                            [ngModelOptions]="{
                                                standalone: true,
                                            }"
                                            [use_24hr]="use_24hr()"
                                            [range]="bookable_hours()"
                                            [min_duration]="min_duration()"
                                            [timezone]="timezone()"
                                        ></a-time-field>
                                    </div>
                                    <div class="flex w-1/3 flex-1 flex-col">
                                        <label for="end-time">
                                            {{ 'FORM.TIME_END' | translate }}
                                            <span>*</span>
                                        </label>
                                        <a-duration-field
                                            [formField]="form.duration"
                                            [time]="form_date()"
                                            [max]="max_duration()"
                                            [use_24hr]="use_24hr()"
                                            [end_time]="bookable_hours()?.end"
                                            [timezone]="timezone()"
                                        ></a-duration-field>
                                    </div>
                                </div>
                            }
                            @if (can_book_for_anyone()) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <a-user-search-field
                                        class="mb-4"
                                        [formField]="form.user"
                                    ></a-user-search-field>
                                </div>
                            } @else if (can_book_for_others()) {
                                <div class="flex w-full flex-col">
                                    <label for="host">
                                        {{ 'FORM.HOST' | translate
                                        }}<span>*</span>
                                    </label>
                                    <host-select-field
                                        [formField]="form.user"
                                    ></host-select-field>
                                </div>
                            }
                            @if (!multiple()) {
                                <div class="flex flex-col">
                                    <label for="visitor-name">
                                        {{
                                            'BOOKINGS.VISITOR_NAME' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            id="visitor-name"
                                            [formField]="form.asset_name"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_NAME_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(
                                                    model().asset_name
                                                )
                                            "
                                            [matAutocomplete]="name_auto"
                                        />
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #name_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item
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
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-email">
                                        {{
                                            'BOOKINGS.VISITOR_EMAIL' | translate
                                        }}
                                        <span>*</span>
                                    </label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            type="email"
                                            id="visitor-email"
                                            [formField]="form.asset_id"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_EMAIL_PLACEHOLDER'
                                                    | translate
                                            "
                                            (focus)="
                                                filterVisitors(model().asset_id)
                                            "
                                            [matAutocomplete]="email_auto"
                                        />
                                        <mat-error>
                                            {{
                                                'FORM.EMAIL_REQUIRED'
                                                    | translate
                                            }}
                                        </mat-error>
                                    </mat-form-field>
                                    <mat-autocomplete
                                        #email_auto="matAutocomplete"
                                    >
                                        @for (
                                            item of filtered_visitors();
                                            track item
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
                                                        {{
                                                            item.company
                                                                ? '| ' +
                                                                  item.company
                                                                : ''
                                                        }}
                                                    </div>
                                                </div>
                                            </mat-option>
                                        }
                                    </mat-autocomplete>
                                </div>
                                <div class="flex flex-col">
                                    <label for="visitor-name">{{
                                        'BOOKINGS.VISITOR_COMPANY' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
                                        <input
                                            matInput
                                            [formField]="form.company"
                                            [placeholder]="
                                                'BOOKINGS.VISITOR_COMPANY'
                                                    | translate
                                            "
                                        />
                                    </mat-form-field>
                                </div>
                            } @else {
                                <div class="flex flex-col">
                                    <label for="visitor-name">
                                        {{ 'RESOURCE.VISITORS' | translate }}
                                        <span>*</span>
                                    </label>
                                    <a-user-list-field
                                        [formField]="form.assets"
                                        [guests_only]="true"
                                    ></a-user-list-field>
                                </div>
                                @if (
                                    allow_international &&
                                    model().assets?.length
                                ) {
                                    <div class="mb-2 flex flex-col">
                                        <label>International Visitors</label>
                                        <div
                                            class="flex flex-wrap gap-x-4 gap-y-2"
                                        >
                                            @for (
                                                item of model().assets;
                                                track $index
                                            ) {
                                                <mat-checkbox
                                                    [ngModel]="
                                                        visitor_international()[
                                                            item.email ||
                                                                item.id
                                                        ] || false
                                                    "
                                                    (ngModelChange)="
                                                        setVisitorInternational(
                                                            item,
                                                            $event
                                                        )
                                                    "
                                                    [ngModelOptions]="{
                                                        standalone: true,
                                                    }"
                                                >
                                                    {{
                                                        item.name || item.email
                                                    }}
                                                </mat-checkbox>
                                            }
                                        </div>
                                    </div>
                                }
                            }
                            <div class="flex flex-col">
                                <label for="reason">{{
                                    'BOOKINGS.VISITOR_REASON' | translate
                                }}</label>
                                <mat-form-field appearance="outline">
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
                            @if (allow_pass_number()) {
                                <div class="flex flex-col">
                                    <label for="pass">{{
                                        'BOOKINGS.PASS_NUMBER' | translate
                                    }}</label>
                                    <mat-form-field appearance="outline">
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
                            @if (allow_international() && !multiple()) {
                                <div class="-mt-2 mb-2 flex justify-end">
                                    <mat-checkbox
                                        [formField]="form.international"
                                    >
                                        International Visitor
                                    </mat-checkbox>
                                </div>
                            }
                        </form>
                    }
                    <div
                        class="border-base-200 bg-base-100 sticky bottom-0 border-t px-4 py-4 sm:px-16"
                    >
                        <button
                            btn
                            matRipple
                            send
                            class="w-full sm:w-auto"
                            (click)="sendInvite()"
                        >
                            {{
                                (is_edit()
                                    ? 'BOOKINGS.VISITOR_UPDATE'
                                    : 'BOOKINGS.VISITOR_SEND'
                                ) | translate
                            }}
                        </button>
                    </div>
                </div>
            } @else {
                <div
                    loading
                    class="relative flex h-full min-h-72 w-full flex-col items-center justify-center overflow-hidden rounded-sm"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>{{ 'BOOKINGS.VISITOR_SENDING' | translate }}</p>
                </div>
            }
        } @else {
            <div
                sent
                class="bg-base-100 absolute inset-0 flex flex-col items-center justify-center text-center"
            >
                <div
                    class="z-0 m-8 h-1/2 w-full max-w-lg flex-1 space-y-2 overflow-auto"
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
                                          count: last_count() || 1,
                                      }
                        }}
                    </h2>
                    <img class="mx-auto" src="assets/icons/sent.svg" />
                    <p>
                        {{
                            (multiple() && last_count() > 1
                                ? 'BOOKINGS.VISITOR_SENT_MSG_MULTIPLE'
                                : 'BOOKINGS.VISITOR_SENT_MSG'
                            )
                                | translate
                                    : {
                                          location:
                                              building()?.display_name ||
                                              building()?.name,
                                          date:
                                              last_success()?.date
                                              | date: 'mediumDate',
                                          time:
                                              last_success()?.date
                                              | date: time_format(),
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
                                name="desk-outlook-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="outlook_link() | sanitize: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <img
                                    src="assets/icons/outlook.svg"
                                    class="w-6"
                                />
                                <span>{{
                                    'BOOKINGS.LINK_OUTLOOK' | translate
                                }}</span>
                            </a>
                            <a
                                btn
                                matRipple
                                name="desk-google-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
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
                                name="desk-ical-link"
                                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                                [href]="ical_link() | safe: 'url'"
                                target="_blank"
                                rel="noopener noreferer"
                            >
                                <icon class="text-xl">download</icon>
                                <span>{{
                                    'BOOKINGS.LINK_ICAL' | translate
                                }}</span>
                            </a>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 bg-base-100 z-10 w-full border-t p-2"
                >
                    <div
                        class="mx-auto flex w-full max-w-lg items-center space-x-2"
                    >
                        <button btn matRipple class="flex-1" (click)="onDone()">
                            {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                        </button>
                        <button
                            btn
                            matRipple
                            class="flex-1"
                            (click)="sent.set(false)"
                        >
                            {{
                                (multiple() && last_count() > 1
                                    ? 'BOOKINGS.VISITOR_BOOK_ANOTHER_MULTIPLE'
                                    : 'BOOKINGS.VISITOR_BOOK_ANOTHER'
                                ) | translate
                            }}
                        </button>
                    </div>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatCheckboxModule,
      UserListFieldComponent,
      FormField,
      MatFormFieldModule,
      MatInputModule,
      MatAutocompleteModule,
      UserSearchFieldComponent,
      HostSelectFieldComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      MatSelectModule,
      MatProgressSpinnerModule,
      FormsModule,
      SanitizePipe,
      SafePipe
    ] }]
  }], null, { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], done: [{ type: Output, args: ["done"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(InviteVisitorFormComponent, { className: "InviteVisitorFormComponent", filePath: "libs/bookings/src/lib/invite-visitor-form.component.ts", lineNumber: 592 });
})();

// apps/workplace/src/app/book/visitor-flow.component.ts
var VisitorFlowComponent = class _VisitorFlowComponent {
  constructor() {
    this._router = inject(Router);
  }
  onDone() {
    this._router.navigate(["/"]);
  }
  static {
    this.\u0275fac = function VisitorFlowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VisitorFlowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VisitorFlowComponent, selectors: [["placeos-book-space-flow"]], decls: 3, vars: 0, consts: [[1, "bg-base-200", "h-full", "w-full", "overflow-auto"], [1, "border-base-200", "bg-base-100", "mx-auto", "h-full", "w-full", "max-w-3xl", "overflow-hidden", "border", "shadow-sm", "sm:my-4", "sm:h-auto"], [3, "done"]], template: function VisitorFlowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "invite-visitor-form", 2);
        \u0275\u0275listener("done", function VisitorFlowComponent_Template_invite_visitor_form_done_2_listener() {
          return ctx.onDone();
        });
        \u0275\u0275elementEnd()()();
      }
    }, dependencies: [InviteVisitorFormComponent], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=visitor-flow.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VisitorFlowComponent, [{
    type: Component,
    args: [{ selector: "placeos-book-space-flow", template: `
        <div class="bg-base-200 h-full w-full overflow-auto">
            <div
                class="border-base-200 bg-base-100 mx-auto h-full w-full max-w-3xl overflow-hidden border shadow-sm sm:my-4 sm:h-auto"
            >
                <invite-visitor-form (done)="onDone()"></invite-visitor-form>
            </div>
        </div>
    `, imports: [InviteVisitorFormComponent], styles: ["/* angular:styles/component:css;f26b881f8eefd87319c7388ff7bb3cecb37d07a0db8d3a808d3cfede99235935;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/book/visitor-flow.component.ts */\n:host {\n  position: relative;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=visitor-flow.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VisitorFlowComponent, { className: "VisitorFlowComponent", filePath: "apps/workplace/src/app/book/visitor-flow.component.ts", lineNumber: 27 });
})();
export {
  VisitorFlowComponent
};
//# sourceMappingURL=visitor-flow.component-GEK3P5BO.js.map
