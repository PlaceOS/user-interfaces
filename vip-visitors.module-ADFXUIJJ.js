import {
  SearchbarComponent
} from "./chunk-ICOPWFS4.js";
import {
  toObservable
} from "./chunk-BMZSXPTG.js";
import {
  openConfirmModal
} from "./chunk-DDOFBVTS.js";
import {
  DateRangeFieldComponent
} from "./chunk-WNMNOHYX.js";
import {
  BuildingPipe
} from "./chunk-ZMMWV44N.js";
import {
  SimpleTableComponent
} from "./chunk-D4U7HH45.js";
import {
  approveBooking,
  checkinBooking,
  queryBookings,
  rejectBooking,
  updateBooking
} from "./chunk-2VXYVHS5.js";
import "./chunk-JI4AOIJR.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatSelect,
  MatSelectModule
} from "./chunk-NFBIMHGB.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-XC7NYAXD.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injectable,
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatFormField,
  MatFormFieldModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  TitleCasePipe,
  TranslatePipe,
  catchError,
  combineLatest,
  debounceTime,
  endOfDay,
  filter,
  from,
  getTimezoneOffsetString,
  getUnixTime,
  i18n,
  inject,
  map,
  notifyError,
  notifySuccess,
  of,
  setClassMetadata,
  shareReplay,
  startOfDay,
  switchMap,
  tap,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction7,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UP5N7EI7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/vip-visitors/vip-visitor-details-modal.component.ts
function VipVisitorDetailsModalComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VIP_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vip_title, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VIP_CONTACT_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vip_contact_number, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_71_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.VIP_VISITOR_REASON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.title, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div")(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "div", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 5, "BOOKINGS.VIP_ASSISTANT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 7, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vip_assistant_name || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 9, "FORM.EMAIL"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vip_assistant_email || "-", " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_93_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.assistant_name, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_93_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.CONTACT_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.assistant_contact_number, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_93_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "support_agent");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, VipVisitorDetailsModalComponent_Conditional_93_Conditional_8_Template, 6, 4, "div");
    \u0275\u0275conditionalCreate(9, VipVisitorDetailsModalComponent_Conditional_93_Conditional_9_Template, 6, 4, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.VIP_ASSISTANT_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.assistant_name ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.assistant_contact_number ? 9 : -1);
  }
}
function VipVisitorDetailsModalComponent_Conditional_94_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.protocol_officer_name, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_94_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.CONTACT_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.protocol_officer_contact_number, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_94_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "badge");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, VipVisitorDetailsModalComponent_Conditional_94_Conditional_8_Template, 6, 4, "div");
    \u0275\u0275conditionalCreate(9, VipVisitorDetailsModalComponent_Conditional_94_Conditional_9_Template, 6, 4, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.VIP_PROTOCOL_OFFICER"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.protocol_officer_name ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.protocol_officer_contact_number ? 9 : -1);
  }
}
function VipVisitorDetailsModalComponent_Conditional_95_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VIP_VEHICLE_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vehicle_plate_number, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_95_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VIP_VEHICLE_PLATE_TYPE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.vehicle_plate_type, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_95_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8);
    \u0275\u0275conditionalCreate(8, VipVisitorDetailsModalComponent_Conditional_95_Conditional_8_Template, 6, 4, "div");
    \u0275\u0275conditionalCreate(9, VipVisitorDetailsModalComponent_Conditional_95_Conditional_9_Template, 6, 4, "div");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "APP.CONCIERGE.VIP_VEHICLE_DETAILS"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.vehicle_plate_number ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.vehicle_plate_type ? 9 : -1);
  }
}
function VipVisitorDetailsModalComponent_Conditional_96_Case_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD"), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_96_Case_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM"), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_96_Case_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_NONE"), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_96_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 10);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.VIP_BEVERAGE_NOTES"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.beverage_notes, " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "local_cafe");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div")(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275conditionalCreate(13, VipVisitorDetailsModalComponent_Conditional_96_Case_13_Template, 2, 3)(14, VipVisitorDetailsModalComponent_Conditional_96_Case_14_Template, 2, 3)(15, VipVisitorDetailsModalComponent_Conditional_96_Case_15_Template, 2, 3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(16, VipVisitorDetailsModalComponent_Conditional_96_Conditional_16_Template, 6, 4, "div", 12);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.VIP_BEVERAGE_PREFERENCE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "APP.CONCIERGE.VIP_BEVERAGE_PREFERENCE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional((tmp_3_0 = ctx_r0.booking.extension_data?.beverage_preference) === "standard" ? 13 : tmp_3_0 === "custom" ? 14 : 15);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking.extension_data?.beverage_preference === "custom" && ctx_r0.booking.extension_data?.beverage_notes ? 16 : -1);
  }
}
function VipVisitorDetailsModalComponent_Case_110_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_MEET_GREET_INTERNAL"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_111_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_112_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_MEET_GREET_NONE"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_118_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_DRIVER_IN_HOUSE"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_119_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_DRIVER_THIRD_PARTY"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_120_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function VipVisitorDetailsModalComponent_Case_166_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_167_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.welcome_beverage_custom || \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM"), " ");
  }
}
function VipVisitorDetailsModalComponent_Case_168_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.VIP_WELCOME_BEVERAGE_NONE"), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_169_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "section", 6)(1, "h3", 7)(2, "icon");
    \u0275\u0275text(3, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 8)(8, "div")(9, "div", 9);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 10);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "div")(15, "div", 9);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 10);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "div", 12)(22, "div", 9);
    \u0275\u0275text(23);
    \u0275\u0275pipe(24, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 10);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 7, "BOOKINGS.VIP_RESTAURANT_RESERVATION"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOOKINGS.VIP_RESTAURANT_NAME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.restaurant_reservation?.name || "-", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(17, 11, "BOOKINGS.VIP_RESTAURANT_TIME"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(20, 13, ctx_r0.booking.extension_data?.restaurant_reservation?.time, ctx_r0.time_format, ctx_r0.tz), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(24, 17, "BOOKINGS.VIP_RESTAURANT_ADDRESS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.booking.extension_data?.restaurant_reservation?.address || "-", " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_183_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, ctx_r0.booking.checked_in_at * 1e3, "medium", ctx_r0.tz), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_184_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_190_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, ctx_r0.booking.checked_out_at * 1e3, "medium", ctx_r0.tz), " ");
  }
}
function VipVisitorDetailsModalComponent_Conditional_191_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " - ");
  }
}
var VipVisitorDetailsModalComponent = class _VipVisitorDetailsModalComponent {
  constructor() {
    this._dialog_ref = inject(MatDialogRef);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.booking = inject(MAT_DIALOG_DATA).booking;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building?.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  static {
    this.\u0275fac = function VipVisitorDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VipVisitorDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VipVisitorDetailsModalComponent, selectors: [["vip-visitor-details-modal"]], decls: 192, vars: 143, consts: [[1, "bg-base-100", "w-xl", "max-w-full", "overflow-hidden", "rounded-lg"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded", "border-none", "p-2"], [1, "flex", "items-center", "space-x-2", "text-lg", "font-medium"], [1, "text-warning"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-h-[70vh]", "space-y-4", "overflow-y-auto", "p-4"], [1, "border-base-300", "rounded-lg", "border", "p-4"], [1, "mb-3", "flex", "items-center", "space-x-2", "font-medium"], [1, "grid", "grid-cols-2", "gap-3", "text-sm"], [1, "opacity-60"], [1, "font-medium"], [1, "rounded", "px-2", "py-0.5", "text-xs"], [1, "col-span-2"]], template: function VipVisitorDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2)(3, "icon", 3);
        \u0275\u0275text(4, "star");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "span");
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 4)(9, "icon");
        \u0275\u0275text(10, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(11, "div", 5)(12, "section", 6)(13, "h3", 7)(14, "icon");
        \u0275\u0275text(15, "person");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "span");
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(19, "div", 8);
        \u0275\u0275conditionalCreate(20, VipVisitorDetailsModalComponent_Conditional_20_Template, 6, 4, "div");
        \u0275\u0275elementStart(21, "div")(22, "div", 9);
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "translate");
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 10);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div")(29, "div", 9);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 10);
        \u0275\u0275text(33);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(34, VipVisitorDetailsModalComponent_Conditional_34_Template, 6, 4, "div");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(35, "section", 6)(36, "h3", 7)(37, "icon");
        \u0275\u0275text(38, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "span");
        \u0275\u0275text(40);
        \u0275\u0275pipe(41, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(42, "div", 8)(43, "div")(44, "div", 9);
        \u0275\u0275text(45);
        \u0275\u0275pipe(46, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(47, "div", 10);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(50, "div")(51, "div", 9);
        \u0275\u0275text(52);
        \u0275\u0275pipe(53, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(54, "div", 10);
        \u0275\u0275text(55);
        \u0275\u0275pipe(56, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(57, "div")(58, "div", 9);
        \u0275\u0275text(59);
        \u0275\u0275pipe(60, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(61, "div", 10);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(63, "div")(64, "div", 9);
        \u0275\u0275text(65);
        \u0275\u0275pipe(66, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(67, "div", 10)(68, "span", 11);
        \u0275\u0275text(69);
        \u0275\u0275pipe(70, "titlecase");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(71, VipVisitorDetailsModalComponent_Conditional_71_Template, 6, 4, "div", 12);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(72, "section", 6)(73, "h3", 7)(74, "icon");
        \u0275\u0275text(75, "edit_calendar");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(76, "span");
        \u0275\u0275text(77);
        \u0275\u0275pipe(78, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(79, "div", 8)(80, "div")(81, "div", 9);
        \u0275\u0275text(82);
        \u0275\u0275pipe(83, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(84, "div", 10);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "div")(87, "div", 9);
        \u0275\u0275text(88);
        \u0275\u0275pipe(89, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(90, "div", 10);
        \u0275\u0275text(91);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(92, VipVisitorDetailsModalComponent_Conditional_92_Template, 20, 11, "section", 6);
        \u0275\u0275conditionalCreate(93, VipVisitorDetailsModalComponent_Conditional_93_Template, 10, 5, "section", 6);
        \u0275\u0275conditionalCreate(94, VipVisitorDetailsModalComponent_Conditional_94_Template, 10, 5, "section", 6);
        \u0275\u0275conditionalCreate(95, VipVisitorDetailsModalComponent_Conditional_95_Template, 10, 5, "section", 6);
        \u0275\u0275conditionalCreate(96, VipVisitorDetailsModalComponent_Conditional_96_Template, 17, 8, "section", 6);
        \u0275\u0275elementStart(97, "section", 6)(98, "h3", 7)(99, "icon");
        \u0275\u0275text(100, "room_service");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(101, "span");
        \u0275\u0275text(102);
        \u0275\u0275pipe(103, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(104, "div", 8)(105, "div")(106, "div", 9);
        \u0275\u0275text(107);
        \u0275\u0275pipe(108, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(109, "div", 10);
        \u0275\u0275conditionalCreate(110, VipVisitorDetailsModalComponent_Case_110_Template, 2, 3)(111, VipVisitorDetailsModalComponent_Case_111_Template, 2, 3)(112, VipVisitorDetailsModalComponent_Case_112_Template, 2, 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(113, "div")(114, "div", 9);
        \u0275\u0275text(115);
        \u0275\u0275pipe(116, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(117, "div", 10);
        \u0275\u0275conditionalCreate(118, VipVisitorDetailsModalComponent_Case_118_Template, 2, 3)(119, VipVisitorDetailsModalComponent_Case_119_Template, 2, 3)(120, VipVisitorDetailsModalComponent_Case_120_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(121, "div")(122, "div", 9);
        \u0275\u0275text(123);
        \u0275\u0275pipe(124, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(125, "div", 10);
        \u0275\u0275text(126);
        \u0275\u0275pipe(127, "translate");
        \u0275\u0275pipe(128, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(129, "div")(130, "div", 9);
        \u0275\u0275text(131);
        \u0275\u0275pipe(132, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(133, "div", 10);
        \u0275\u0275text(134);
        \u0275\u0275pipe(135, "translate");
        \u0275\u0275pipe(136, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(137, "div")(138, "div", 9);
        \u0275\u0275text(139);
        \u0275\u0275pipe(140, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(141, "div", 10);
        \u0275\u0275text(142);
        \u0275\u0275pipe(143, "translate");
        \u0275\u0275pipe(144, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(145, "div")(146, "div", 9);
        \u0275\u0275text(147);
        \u0275\u0275pipe(148, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(149, "div", 10);
        \u0275\u0275text(150);
        \u0275\u0275pipe(151, "translate");
        \u0275\u0275pipe(152, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(153, "div")(154, "div", 9);
        \u0275\u0275text(155);
        \u0275\u0275pipe(156, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(157, "div", 10);
        \u0275\u0275text(158);
        \u0275\u0275pipe(159, "translate");
        \u0275\u0275pipe(160, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(161, "div")(162, "div", 9);
        \u0275\u0275text(163);
        \u0275\u0275pipe(164, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(165, "div", 10);
        \u0275\u0275conditionalCreate(166, VipVisitorDetailsModalComponent_Case_166_Template, 2, 3)(167, VipVisitorDetailsModalComponent_Case_167_Template, 2, 3)(168, VipVisitorDetailsModalComponent_Case_168_Template, 2, 3);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(169, VipVisitorDetailsModalComponent_Conditional_169_Template, 27, 19, "section", 6);
        \u0275\u0275elementStart(170, "section", 6)(171, "h3", 7)(172, "icon");
        \u0275\u0275text(173, "how_to_reg");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(174, "span");
        \u0275\u0275text(175);
        \u0275\u0275pipe(176, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(177, "div", 8)(178, "div")(179, "div", 9);
        \u0275\u0275text(180);
        \u0275\u0275pipe(181, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(182, "div", 10);
        \u0275\u0275conditionalCreate(183, VipVisitorDetailsModalComponent_Conditional_183_Template, 2, 5)(184, VipVisitorDetailsModalComponent_Conditional_184_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(185, "div")(186, "div", 9);
        \u0275\u0275text(187);
        \u0275\u0275pipe(188, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(189, "div", 10);
        \u0275\u0275conditionalCreate(190, VipVisitorDetailsModalComponent_Conditional_190_Template, 2, 5)(191, VipVisitorDetailsModalComponent_Conditional_191_Template, 1, 0);
        \u0275\u0275elementEnd()()()()()();
      }
      if (rf & 2) {
        let tmp_36_0;
        let tmp_38_0;
        let tmp_50_0;
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 63, "APP.CONCIERGE.VIP_DETAILS_TITLE"));
        \u0275\u0275advance(11);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(18, 65, "APP.CONCIERGE.VIP_DETAILS_VISITOR"));
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.booking.extension_data?.vip_title ? 20 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.vip_full_name ? \u0275\u0275pipeBind1(24, 67, "APP.CONCIERGE.VIP_FULL_NAME") : \u0275\u0275pipeBind1(25, 69, "FORM.NAME"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.vip_full_name || ctx.booking.asset_name || "-", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 71, "FORM.EMAIL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.asset_id || "-", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.vip_contact_number ? 34 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(41, 73, "APP.CONCIERGE.VIP_DETAILS_VISIT"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(46, 75, "FORM.DATE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(49, 77, ctx.booking.date, "mediumDate", ctx.tz), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(53, 81, "FORM.TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(56, 83, ctx.booking.date, ctx.time_format, ctx.tz), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(60, 87, "FORM.HOST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.user_name || ctx.booking.user_email || "-", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(66, 89, "COMMON.STATUS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("bg-success", ctx.booking.status === "approved")("text-success-content", ctx.booking.status === "approved")("bg-error", ctx.booking.status === "declined")("text-error-content", ctx.booking.status === "declined")("bg-warning", ctx.booking.status !== "approved" && ctx.booking.status !== "declined")("text-warning-content", ctx.booking.status !== "approved" && ctx.booking.status !== "declined");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(70, 91, ctx.booking.status), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.booking.title ? 71 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(78, 93, "APP.CONCIERGE.VIP_DETAILS_BOOKED_BY"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(83, 95, "FORM.NAME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.booked_by_name || "-", " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(89, 97, "FORM.EMAIL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.booked_by_email || "-", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.vip_assistant_name || ctx.booking.extension_data?.vip_assistant_email ? 92 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.assistant_name || ctx.booking.extension_data?.assistant_contact_number ? 93 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.protocol_officer_name || ctx.booking.extension_data?.protocol_officer_contact_number ? 94 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.vehicle_plate_number || ctx.booking.extension_data?.vehicle_plate_type ? 95 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking.extension_data?.beverage_preference && ctx.booking.extension_data?.beverage_preference !== "none" ? 96 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(103, 99, "BOOKINGS.VIP_SERVICES_HEADER"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(108, 101, "BOOKINGS.VIP_MEET_GREET"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_36_0 = ctx.booking.extension_data?.meet_greet) === "internal" ? 110 : tmp_36_0 === "external_airport" ? 111 : 112);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(116, 103, "BOOKINGS.VIP_DRIVER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_38_0 = ctx.booking.extension_data?.driver) === "in_house" ? 118 : tmp_38_0 === "third_party" ? 119 : 120);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(124, 105, "BOOKINGS.VIP_WALKTHROUGH"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.walkthrough ? \u0275\u0275pipeBind1(127, 107, "COMMON.YES") : \u0275\u0275pipeBind1(128, 109, "COMMON.NO"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(132, 111, "BOOKINGS.VIP_GIVEAWAY_GIFT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.gift ? \u0275\u0275pipeBind1(135, 113, "COMMON.YES") : \u0275\u0275pipeBind1(136, 115, "COMMON.NO"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(140, 117, "BOOKINGS.VIP_PHOTOGRAPHER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.photographer ? \u0275\u0275pipeBind1(143, 119, "COMMON.YES") : \u0275\u0275pipeBind1(144, 121, "COMMON.NO"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(148, 123, "BOOKINGS.VIP_WELCOME_SCREEN"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.welcome_screen ? \u0275\u0275pipeBind1(151, 125, "COMMON.YES") : \u0275\u0275pipeBind1(152, 127, "COMMON.NO"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(156, 129, "BOOKINGS.VIP_PRESENTATION"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.booking.extension_data?.presentation ? \u0275\u0275pipeBind1(159, 131, "COMMON.YES") : \u0275\u0275pipeBind1(160, 133, "COMMON.NO"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(164, 135, "BOOKINGS.VIP_WELCOME_BEVERAGE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional((tmp_50_0 = ctx.booking.extension_data?.welcome_beverage) === "standard" ? 166 : tmp_50_0 === "custom" ? 167 : 168);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.booking.extension_data?.restaurant_reservation ? 169 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(176, 137, "APP.CONCIERGE.VIP_DETAILS_CHECKIN"));
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(181, 139, "COMMON.CHECKED_IN"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.booking.checked_in_at ? 183 : 184);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(188, 141, "COMMON.CHECKED_OUT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.booking.checked_out_at ? 190 : 191);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      TitleCasePipe,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorDetailsModalComponent, [{
    type: Component,
    args: [{
      selector: "vip-visitor-details-modal",
      template: `
        <div class="bg-base-100 w-xl max-w-full overflow-hidden rounded-lg">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded border-none p-2"
            >
                <h2 class="flex items-center space-x-2 text-lg font-medium">
                    <icon class="text-warning">star</icon>
                    <span>{{
                        'APP.CONCIERGE.VIP_DETAILS_TITLE' | translate
                    }}</span>
                </h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <div class="max-h-[70vh] space-y-4 overflow-y-auto p-4">
                <!-- Visitor Info -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>person</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_VISITOR' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        @if (booking.extension_data?.vip_title) {
                            <div>
                                <div class="opacity-60">
                                    {{ 'APP.CONCIERGE.VIP_TITLE' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.extension_data?.vip_title }}
                                </div>
                            </div>
                        }
                        <div>
                            <div class="opacity-60">
                                {{
                                    booking.extension_data?.vip_full_name
                                        ? ('APP.CONCIERGE.VIP_FULL_NAME'
                                          | translate)
                                        : ('FORM.NAME' | translate)
                                }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.vip_full_name ||
                                        booking.asset_name ||
                                        '-'
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.EMAIL' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.asset_id || '-' }}
                            </div>
                        </div>
                        @if (booking.extension_data?.vip_contact_number) {
                            <div>
                                <div class="opacity-60">
                                    {{
                                        'APP.CONCIERGE.VIP_CONTACT_NUMBER'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.vip_contact_number
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                </section>

                <!-- Visit Details -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>event</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_VISIT' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.DATE' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.date | date: 'mediumDate' : tz }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.TIME' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.date | date: time_format : tz }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.HOST' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.user_name ||
                                        booking.user_email ||
                                        '-'
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.STATUS' | translate }}
                            </div>
                            <div class="font-medium">
                                <span
                                    class="rounded px-2 py-0.5 text-xs"
                                    [class.bg-success]="
                                        booking.status === 'approved'
                                    "
                                    [class.text-success-content]="
                                        booking.status === 'approved'
                                    "
                                    [class.bg-error]="
                                        booking.status === 'declined'
                                    "
                                    [class.text-error-content]="
                                        booking.status === 'declined'
                                    "
                                    [class.bg-warning]="
                                        booking.status !== 'approved' &&
                                        booking.status !== 'declined'
                                    "
                                    [class.text-warning-content]="
                                        booking.status !== 'approved' &&
                                        booking.status !== 'declined'
                                    "
                                >
                                    {{ booking.status | titlecase }}
                                </span>
                            </div>
                        </div>
                        @if (booking.title) {
                            <div class="col-span-2">
                                <div class="opacity-60">
                                    {{
                                        'BOOKINGS.VIP_VISITOR_REASON'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    {{ booking.title }}
                                </div>
                            </div>
                        }
                    </div>
                </section>

                <!-- Booked By -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>edit_calendar</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_BOOKED_BY' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.NAME' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.booked_by_name || '-' }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'FORM.EMAIL' | translate }}
                            </div>
                            <div class="font-medium">
                                {{ booking.booked_by_email || '-' }}
                            </div>
                        </div>
                    </div>
                </section>

                <!-- VIP Assistant (from booking form) -->
                @if (
                    booking.extension_data?.vip_assistant_name ||
                    booking.extension_data?.vip_assistant_email
                ) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>support_agent</icon>
                            <span>{{
                                'BOOKINGS.VIP_ASSISTANT' | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <div class="opacity-60">
                                    {{ 'FORM.NAME' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.vip_assistant_name || '-'
                                    }}
                                </div>
                            </div>
                            <div>
                                <div class="opacity-60">
                                    {{ 'FORM.EMAIL' | translate }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.vip_assistant_email || '-'
                                    }}
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <!-- Assistant Details (from VIP guest enrolment) -->
                @if (
                    booking.extension_data?.assistant_name ||
                    booking.extension_data?.assistant_contact_number
                ) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>support_agent</icon>
                            <span>{{
                                'APP.CONCIERGE.VIP_ASSISTANT_DETAILS'
                                    | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            @if (booking.extension_data?.assistant_name) {
                                <div>
                                    <div class="opacity-60">
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.assistant_name
                                        }}
                                    </div>
                                </div>
                            }
                            @if (
                                booking.extension_data?.assistant_contact_number
                            ) {
                                <div>
                                    <div class="opacity-60">
                                        {{
                                            'APP.CONCIERGE.CONTACT_NUMBER'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.assistant_contact_number
                                        }}
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                }

                <!-- Protocol Officer -->
                @if (
                    booking.extension_data?.protocol_officer_name ||
                    booking.extension_data?.protocol_officer_contact_number
                ) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>badge</icon>
                            <span>{{
                                'APP.CONCIERGE.VIP_PROTOCOL_OFFICER' | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            @if (
                                booking.extension_data?.protocol_officer_name
                            ) {
                                <div>
                                    <div class="opacity-60">
                                        {{ 'FORM.NAME' | translate }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.protocol_officer_name
                                        }}
                                    </div>
                                </div>
                            }
                            @if (
                                booking.extension_data
                                    ?.protocol_officer_contact_number
                            ) {
                                <div>
                                    <div class="opacity-60">
                                        {{
                                            'APP.CONCIERGE.CONTACT_NUMBER'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.protocol_officer_contact_number
                                        }}
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                }

                <!-- Vehicle Details -->
                @if (
                    booking.extension_data?.vehicle_plate_number ||
                    booking.extension_data?.vehicle_plate_type
                ) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>directions_car</icon>
                            <span>{{
                                'APP.CONCIERGE.VIP_VEHICLE_DETAILS' | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            @if (booking.extension_data?.vehicle_plate_number) {
                                <div>
                                    <div class="opacity-60">
                                        {{
                                            'APP.CONCIERGE.VIP_VEHICLE_PLATE_NUMBER'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.vehicle_plate_number
                                        }}
                                    </div>
                                </div>
                            }
                            @if (booking.extension_data?.vehicle_plate_type) {
                                <div>
                                    <div class="opacity-60">
                                        {{
                                            'APP.CONCIERGE.VIP_VEHICLE_PLATE_TYPE'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.vehicle_plate_type
                                        }}
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                }

                <!-- Beverage Preference (from VIP guest enrolment) -->
                @if (
                    booking.extension_data?.beverage_preference &&
                    booking.extension_data?.beverage_preference !== 'none'
                ) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>local_cafe</icon>
                            <span>{{
                                'APP.CONCIERGE.VIP_BEVERAGE_PREFERENCE'
                                    | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <div class="opacity-60">
                                    {{
                                        'APP.CONCIERGE.VIP_BEVERAGE_PREFERENCE'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    @switch (
                                        booking.extension_data
                                            ?.beverage_preference
                                    ) {
                                        @case ('standard') {
                                            {{
                                                'BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD'
                                                    | translate
                                            }}
                                        }
                                        @case ('custom') {
                                            {{
                                                'BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM'
                                                    | translate
                                            }}
                                        }
                                        @default {
                                            {{
                                                'BOOKINGS.VIP_WELCOME_BEVERAGE_NONE'
                                                    | translate
                                            }}
                                        }
                                    }
                                </div>
                            </div>
                            @if (
                                booking.extension_data?.beverage_preference ===
                                    'custom' &&
                                booking.extension_data?.beverage_notes
                            ) {
                                <div class="col-span-2">
                                    <div class="opacity-60">
                                        {{
                                            'APP.CONCIERGE.VIP_BEVERAGE_NOTES'
                                                | translate
                                        }}
                                    </div>
                                    <div class="font-medium">
                                        {{
                                            booking.extension_data
                                                ?.beverage_notes
                                        }}
                                    </div>
                                </div>
                            }
                        </div>
                    </section>
                }

                <!-- VIP Services -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>room_service</icon>
                        <span>{{
                            'BOOKINGS.VIP_SERVICES_HEADER' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_MEET_GREET' | translate }}
                            </div>
                            <div class="font-medium">
                                @switch (booking.extension_data?.meet_greet) {
                                    @case ('internal') {
                                        {{
                                            'BOOKINGS.VIP_MEET_GREET_INTERNAL'
                                                | translate
                                        }}
                                    }
                                    @case ('external_airport') {
                                        {{
                                            'BOOKINGS.VIP_MEET_GREET_EXTERNAL_AIRPORT'
                                                | translate
                                        }}
                                    }
                                    @default {
                                        {{
                                            'BOOKINGS.VIP_MEET_GREET_NONE'
                                                | translate
                                        }}
                                    }
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_DRIVER' | translate }}
                            </div>
                            <div class="font-medium">
                                @switch (booking.extension_data?.driver) {
                                    @case ('in_house') {
                                        {{
                                            'BOOKINGS.VIP_DRIVER_IN_HOUSE'
                                                | translate
                                        }}
                                    }
                                    @case ('third_party') {
                                        {{
                                            'BOOKINGS.VIP_DRIVER_THIRD_PARTY'
                                                | translate
                                        }}
                                    }
                                    @default {
                                        -
                                    }
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_WALKTHROUGH' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.walkthrough
                                        ? ('COMMON.YES' | translate)
                                        : ('COMMON.NO' | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_GIVEAWAY_GIFT' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.gift
                                        ? ('COMMON.YES' | translate)
                                        : ('COMMON.NO' | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_PHOTOGRAPHER' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.photographer
                                        ? ('COMMON.YES' | translate)
                                        : ('COMMON.NO' | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_WELCOME_SCREEN' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.welcome_screen
                                        ? ('COMMON.YES' | translate)
                                        : ('COMMON.NO' | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'BOOKINGS.VIP_PRESENTATION' | translate }}
                            </div>
                            <div class="font-medium">
                                {{
                                    booking.extension_data?.presentation
                                        ? ('COMMON.YES' | translate)
                                        : ('COMMON.NO' | translate)
                                }}
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{
                                    'BOOKINGS.VIP_WELCOME_BEVERAGE' | translate
                                }}
                            </div>
                            <div class="font-medium">
                                @switch (
                                    booking.extension_data?.welcome_beverage
                                ) {
                                    @case ('standard') {
                                        {{
                                            'BOOKINGS.VIP_WELCOME_BEVERAGE_STANDARD'
                                                | translate
                                        }}
                                    }
                                    @case ('custom') {
                                        {{
                                            booking.extension_data
                                                ?.welcome_beverage_custom ||
                                                ('BOOKINGS.VIP_WELCOME_BEVERAGE_CUSTOM'
                                                    | translate)
                                        }}
                                    }
                                    @default {
                                        {{
                                            'BOOKINGS.VIP_WELCOME_BEVERAGE_NONE'
                                                | translate
                                        }}
                                    }
                                }
                            </div>
                        </div>
                    </div>
                </section>

                <!-- Restaurant Reservation -->
                @if (booking.extension_data?.restaurant_reservation) {
                    <section class="border-base-300 rounded-lg border p-4">
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon>restaurant</icon>
                            <span>{{
                                'BOOKINGS.VIP_RESTAURANT_RESERVATION'
                                    | translate
                            }}</span>
                        </h3>
                        <div class="grid grid-cols-2 gap-3 text-sm">
                            <div>
                                <div class="opacity-60">
                                    {{
                                        'BOOKINGS.VIP_RESTAURANT_NAME'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.restaurant_reservation?.name ||
                                            '-'
                                    }}
                                </div>
                            </div>
                            <div>
                                <div class="opacity-60">
                                    {{
                                        'BOOKINGS.VIP_RESTAURANT_TIME'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.restaurant_reservation?.time
                                            | date: time_format : tz
                                    }}
                                </div>
                            </div>
                            <div class="col-span-2">
                                <div class="opacity-60">
                                    {{
                                        'BOOKINGS.VIP_RESTAURANT_ADDRESS'
                                            | translate
                                    }}
                                </div>
                                <div class="font-medium">
                                    {{
                                        booking.extension_data
                                            ?.restaurant_reservation?.address ||
                                            '-'
                                    }}
                                </div>
                            </div>
                        </div>
                    </section>
                }

                <!-- Check-in Status -->
                <section class="border-base-300 rounded-lg border p-4">
                    <h3 class="mb-3 flex items-center space-x-2 font-medium">
                        <icon>how_to_reg</icon>
                        <span>{{
                            'APP.CONCIERGE.VIP_DETAILS_CHECKIN' | translate
                        }}</span>
                    </h3>
                    <div class="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.CHECKED_IN' | translate }}
                            </div>
                            <div class="font-medium">
                                @if (booking.checked_in_at) {
                                    {{
                                        booking.checked_in_at * 1000
                                            | date: 'medium' : tz
                                    }}
                                } @else {
                                    -
                                }
                            </div>
                        </div>
                        <div>
                            <div class="opacity-60">
                                {{ 'COMMON.CHECKED_OUT' | translate }}
                            </div>
                            <div class="font-medium">
                                @if (booking.checked_out_at) {
                                    {{
                                        booking.checked_out_at * 1000
                                            | date: 'medium' : tz
                                    }}
                                } @else {
                                    -
                                }
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    `,
      imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        TranslatePipe,
        MatDialogModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VipVisitorDetailsModalComponent, { className: "VipVisitorDetailsModalComponent", filePath: "apps/concierge/src/app/vip-visitors/vip-visitor-details-modal.component.ts", lineNumber: 750 });
})();

// apps/concierge/src/app/vip-visitors/vip-visitors-state.service.ts
var VipVisitorsStateService = class _VipVisitorsStateService extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._poll = new BehaviorSubject(0);
    this._filters = new BehaviorSubject({});
    this._search = new BehaviorSubject("");
    this._loading = new BehaviorSubject(false);
    this.loading = this._loading.asObservable();
    this.filters = this._filters.asObservable();
    this.bookings = combineLatest([
      toObservable(this._org.active_building),
      this._filters,
      this._poll
    ]).pipe(filter(([building]) => !!building), debounceTime(150), switchMap(([bld, filters]) => {
      this._loading.next(true);
      const start = filters.start_date ? startOfDay(new Date(filters.start_date)) : startOfDay(/* @__PURE__ */ new Date());
      const end = filters.end_date ? endOfDay(new Date(filters.end_date)) : endOfDay(start);
      return from(queryBookings({
        type: "vip-visitor",
        period_start: getUnixTime(start),
        period_end: getUnixTime(end),
        zones: (filters.zones || []).join(",") || bld.id,
        include_checked_out: true,
        limit: 1e3
      })).pipe(catchError((_) => of([])));
    }), tap(() => this._loading.next(false)), shareReplay(1));
    this.filtered_bookings = combineLatest([
      this._search,
      this.bookings
    ]).pipe(map(([search, guest_list]) => {
      const search_filter = search.toLowerCase();
      const out = guest_list.filter((_) => _.asset_name?.toLowerCase().includes(search_filter) || _.user_name?.toLowerCase().includes(search_filter) || _.user_email?.toLowerCase().includes(search_filter) || _.asset_id?.toLowerCase().includes(search_filter)).sort((a, b) => a.date - b.date);
      return out;
    }));
  }
  get search() {
    return this._search.getValue();
  }
  get time_format() {
    return this._settings.time_format;
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
  async setExt(guest, field, value) {
    const extension_data = __spreadValues({}, guest.extension_data);
    extension_data[field] = value;
    await updateBooking(guest.id, __spreadProps(__spreadValues({}, guest.toJSON()), {
      extension_data
    }));
    this._poll.next(Date.now());
  }
  async approveVisitor(item) {
    const details = await openConfirmModal({
      title: i18n("APP.CONCIERGE.VIP_APPROVE_TITLE"),
      content: i18n("APP.CONCIERGE.VIP_APPROVE_CONTENT", {
        name: item.asset_name || item.asset_id
      }),
      icon: { content: "event_available" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading(i18n("APP.CONCIERGE.VIP_UPDATING"));
    await approveBooking(item.id).catch((e) => {
      notifyError(`Error approving VIP visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.VIP_APPROVED_SUCCESS"));
    this._poll.next(Date.now());
    details.close();
  }
  async declineVisitor(item) {
    const details = await openConfirmModal({
      title: i18n("APP.CONCIERGE.VIP_DECLINE_TITLE"),
      content: i18n("APP.CONCIERGE.VIP_DECLINE_CONTENT", {
        name: item.asset_name || item.asset_id
      }),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (details.reason !== "done")
      return details.close();
    details.loading(i18n("APP.CONCIERGE.VIP_UPDATING"));
    await rejectBooking(item.id).catch((e) => {
      notifyError(`Error declining VIP visitor: ${e.message || e.error || e}`);
      details.close();
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.VIP_DECLINED_SUCCESS"));
    this._poll.next(Date.now());
    details.close();
  }
  async setCheckinState(item, state = true) {
    if (item.rejected)
      throw i18n("APP.CONCIERGE.VIP_CHECKIN_REJECTED_ERROR");
    if (!item.approved && state === true) {
      await approveBooking(item.id);
    }
    await checkinBooking(item.id, state).catch((e) => {
      notifyError(i18n("APP.CONCIERGE.VIP_CHECKIN_ERROR", {
        action: state ? "in" : "out",
        name: item.asset_name || item.asset_id
      }));
      throw e;
    });
    notifySuccess(i18n("APP.CONCIERGE.VIP_CHECKIN_SUCCESS", {
      action: state ? "in" : "out",
      name: item.asset_name || item.asset_id
    }));
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VipVisitorsStateService_BaseFactory;
      return function VipVisitorsStateService_Factory(__ngFactoryType__) {
        return (\u0275VipVisitorsStateService_BaseFactory || (\u0275VipVisitorsStateService_BaseFactory = \u0275\u0275getInheritedFactory(_VipVisitorsStateService)))(__ngFactoryType__ || _VipVisitorsStateService);
      };
    })();
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VipVisitorsStateService, factory: _VipVisitorsStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// apps/concierge/src/app/vip-visitors/vip-visitor-listing.component.ts
var _c0 = (a0, a1) => ({ key: "date", name: a0, content: a1, size: "8rem" });
var _c1 = (a0, a1) => ({ key: "time", name: a0, content: a1, size: "6rem" });
var _c2 = (a0, a1) => ({ key: "asset_name", name: a0, content: a1 });
var _c3 = (a0, a1) => ({ key: "vip_assistant", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "booked_by", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c6 = (a0) => ({ key: "actions", name: " ", content: a0, size: "10.5rem", sortable: false });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function VipVisitorListingComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r1.date, "mediumDate", ctx_r1.tz), " ");
  }
}
function VipVisitorListingComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, row_r3.date, ctx_r1.time_format, ctx_r1.tz), " ");
  }
}
function VipVisitorListingComponent_ng_template_11_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.asset_id, " ");
  }
}
function VipVisitorListingComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "span");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(4, VipVisitorListingComponent_ng_template_11_Conditional_4_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(row_r4.asset_name || row_r4.asset_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.asset_name && row_r4.asset_id ? 4 : -1);
  }
}
function VipVisitorListingComponent_ng_template_13_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const email_r5 = \u0275\u0275readContextLet(0);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", email_r5, " ");
  }
}
function VipVisitorListingComponent_ng_template_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, VipVisitorListingComponent_ng_template_13_Conditional_1_Conditional_3_Template, 2, 1, "div", 13);
  }
  if (rf & 2) {
    const row_r6 = \u0275\u0275nextContext().row;
    const name_r7 = row_r6.extension_data.vip_assistant_name;
    const email_r8 = \u0275\u0275storeLet(row_r6.extension_data.vip_assistant_email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(name_r7 || email_r8);
    \u0275\u0275advance();
    \u0275\u0275conditional(name_r7 && email_r8 ? 3 : -1);
  }
}
function VipVisitorListingComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275text(1, "-");
    \u0275\u0275elementEnd();
  }
}
function VipVisitorListingComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, VipVisitorListingComponent_ng_template_13_Conditional_1_Template, 4, 3)(2, VipVisitorListingComponent_ng_template_13_Conditional_2_Template, 2, 0, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r6.extension_data?.vip_assistant_name ? 1 : 2);
  }
}
function VipVisitorListingComponent_ng_template_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9.booked_by_email, " ");
  }
}
function VipVisitorListingComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, VipVisitorListingComponent_ng_template_15_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.booked_by_name || row_r9.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.booked_by_name && row_r9.booked_by_email ? 3 : -1);
  }
}
function VipVisitorListingComponent_ng_template_17_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 18);
    \u0275\u0275text(1, " arrow_drop_down ");
    \u0275\u0275elementEnd();
  }
}
function VipVisitorListingComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 15)(2, "div", 16)(3, "div", 17);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, VipVisitorListingComponent_ng_template_17_Conditional_6_Template, 2, 0, "icon", 18);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 7)(9, "button", 19);
    \u0275\u0275listener("click", function VipVisitorListingComponent_ng_template_17_Template_button_click_9_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approveVisitor(row_r11));
    });
    \u0275\u0275elementStart(10, "div", 20)(11, "icon", 18);
    \u0275\u0275text(12, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 21);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(16, "button", 19);
    \u0275\u0275listener("click", function VipVisitorListingComponent_ng_template_17_Template_button_click_16_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.declineVisitor(row_r11));
    });
    \u0275\u0275elementStart(17, "div", 20)(18, "icon", 22);
    \u0275\u0275text(19, " event_busy ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const menu_r12 = \u0275\u0275reference(8);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", row_r11?.status === "approved")("bg-success", row_r11?.status === "approved")("text-error-content", row_r11?.status === "declined")("bg-error", row_r11?.status === "declined")("text-neutral-content", row_r11?.status === "ended")("bg-neutral", row_r11?.status === "ended")("text-warning-content", row_r11?.status !== "ended" && row_r11?.status !== "approved" && row_r11?.status !== "declined")("bg-warning", row_r11?.status !== "ended" && row_r11?.status !== "approved" && row_r11?.status !== "declined")("opacity-30", row_r11?.status === "ended");
    \u0275\u0275property("matMenuTriggerFor", menu_r12)("disabled", row_r11?.status === "ended" || row_r11.checked_in && !row_r11.checked_out_at);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 24, row_r11?.status === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : row_r11?.status === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : row_r11?.status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!(row_r11?.status === "ended" || row_r11.checked_in && !row_r11.checked_out_at) ? 6 : -1);
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 26, "APP.CONCIERGE.VISITORS_ACTION_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 28, "APP.CONCIERGE.VISITORS_ACTION_DECLINE"), " ");
  }
}
function VipVisitorListingComponent_ng_template_19_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "support_agent");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().row;
    \u0275\u0275property("href", "mailto:" + row_r14.extension_data.vip_assistant_email, \u0275\u0275sanitizeUrl)("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.VIP_EMAIL_ASSISTANT"));
  }
}
function VipVisitorListingComponent_ng_template_19_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function VipVisitorListingComponent_ng_template_19_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const row_r14 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(row_r14.checked_in ? ctx_r1.checkout(row_r14) : ctx_r1.checkin(row_r14));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().row;
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 2, row_r14.checked_in ? "APP.CONCIERGE.VISITORS_ACTION_CHECKOUT" : "APP.CONCIERGE.VISITORS_ACTION_CHECKIN"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", row_r14.checked_in ? "event_busy" : "event_available", " ");
  }
}
function VipVisitorListingComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 23)(1, "button", 24);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function VipVisitorListingComponent_ng_template_19_Template_button_click_1_listener() {
      const row_r14 = \u0275\u0275restoreView(_r13).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails(row_r14));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "visibility");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 25);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "email");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, VipVisitorListingComponent_ng_template_19_Conditional_9_Template, 4, 4, "a", 25);
    \u0275\u0275conditionalCreate(10, VipVisitorListingComponent_ng_template_19_Conditional_10_Template, 4, 4, "button", 26);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 5, "APP.CONCIERGE.VIP_VIEW_DETAILS"));
    \u0275\u0275advance(4);
    \u0275\u0275property("href", "mailto:" + row_r14?.asset_id, \u0275\u0275sanitizeUrl)("matTooltip", \u0275\u0275pipeBind1(6, 7, "APP.CONCIERGE.VISITORS_ACTION_EMAIL"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(row_r14.extension_data?.vip_assistant_email ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r14.checked_out_at ? 10 : -1);
  }
}
var VipVisitorListingComponent = class _VipVisitorListingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VipVisitorsStateService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.visitors = this._state.filtered_bookings;
    this.search = this._state.search;
    this.approveVisitor = (u) => this._state.approveVisitor(u);
    this.declineVisitor = (u) => this._state.declineVisitor(u);
    this.checkin = async (item) => {
      await this._state.setCheckinState(item, true).catch((e) => {
        notifyError(e);
      });
      this._state.poll();
    };
    this.checkout = async (item) => {
      await this._state.setCheckinState(item, false).catch((_) => null);
      this._state.poll();
    };
  }
  get timezone() {
    const use_tz = this._settings.get("app.bookings.use_building_timezone");
    const bld_tz = this._org.building?.timezone;
    return use_tz && bld_tz !== Intl.DateTimeFormat().resolvedOptions().timeZone ? bld_tz : "";
  }
  get tz() {
    const tz = this.timezone;
    if (!tz)
      return "";
    return getTimezoneOffsetString(tz);
  }
  get time_format() {
    return this._settings.time_format;
  }
  viewDetails(booking) {
    this._dialog.open(VipVisitorDetailsModalComponent, {
      data: { booking }
    });
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VipVisitorListingComponent_BaseFactory;
      return function VipVisitorListingComponent_Factory(__ngFactoryType__) {
        return (\u0275VipVisitorListingComponent_BaseFactory || (\u0275VipVisitorListingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VipVisitorListingComponent)))(__ngFactoryType__ || _VipVisitorListingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VipVisitorListingComponent, selectors: [["vip-visitor-listings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 44, consts: [["date_template", ""], ["time_template", ""], ["visitor_template", ""], ["assistant_template", ""], ["booked_by_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "z-0", "block", "min-w-320", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-8", "w-full"], [1, "px-4"], [1, "px-4", "py-2"], [1, "flex", "items-center", "space-x-1"], [1, "text-xs", "opacity-30", "select-all"], [1, "opacity-30"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "flex", "w-full", "items-center", "justify-end", "space-x-1", "px-2"], ["icon", "", "matRipple", "", 1, "rounded", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded", 3, "href", "matTooltip"], ["icon", "", "matRipple", "", 1, "rounded", 3, "matTooltip"]], template: function VipVisitorListingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "simple-table", 8);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275template(7, VipVisitorListingComponent_ng_template_7_Template, 3, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, VipVisitorListingComponent_ng_template_9_Template, 3, 5, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, VipVisitorListingComponent_ng_template_11_Template, 5, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, VipVisitorListingComponent_ng_template_13_Template, 3, 1, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(15, VipVisitorListingComponent_ng_template_15_Template, 4, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(17, VipVisitorListingComponent_ng_template_17_Template, 23, 30, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(19, VipVisitorListingComponent_ng_template_19_Template, 11, 9, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(21, "div", 9);
      }
      if (rf & 2) {
        const date_template_r16 = \u0275\u0275reference(8);
        const time_template_r17 = \u0275\u0275reference(10);
        const visitor_template_r18 = \u0275\u0275reference(12);
        const assistant_template_r19 = \u0275\u0275reference(14);
        const booked_by_template_r20 = \u0275\u0275reference(16);
        const status_template_r21 = \u0275\u0275reference(18);
        const action_template_r22 = \u0275\u0275reference(20);
        \u0275\u0275property("data", ctx.visitors)("columns", \u0275\u0275pureFunction7(36, _c7, \u0275\u0275pureFunction2(16, _c0, \u0275\u0275pipeBind1(1, 4, "FORM.DATE"), date_template_r16), \u0275\u0275pureFunction2(19, _c1, \u0275\u0275pipeBind1(2, 6, "FORM.TIME"), time_template_r17), \u0275\u0275pureFunction2(22, _c2, \u0275\u0275pipeBind1(3, 8, "RESOURCE.VIP_VISITOR"), visitor_template_r18), \u0275\u0275pureFunction2(25, _c3, \u0275\u0275pipeBind1(4, 10, "BOOKINGS.VIP_ASSISTANT"), assistant_template_r19), \u0275\u0275pureFunction2(28, _c4, \u0275\u0275pipeBind1(5, 12, "APP.CONCIERGE.VIP_BOOKED_BY"), booked_by_template_r20), \u0275\u0275pureFunction2(31, _c5, \u0275\u0275pipeBind1(6, 14, "COMMON.STATUS"), status_template_r21), \u0275\u0275pureFunction1(34, _c6, action_template_r22)))("filter", ctx.search)("sortable", true);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      SimpleTableComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorListingComponent, [{
    type: Component,
    args: [{ selector: "vip-visitor-listings", template: `
        <simple-table
            class="z-0 block min-w-320 text-sm"
            [data]="visitors"
            [columns]="[
                {
                    key: 'date',
                    name: 'FORM.DATE' | translate,
                    content: date_template,
                    size: '8rem',
                },
                {
                    key: 'time',
                    name: 'FORM.TIME' | translate,
                    content: time_template,
                    size: '6rem',
                },
                {
                    key: 'asset_name',
                    name: 'RESOURCE.VIP_VISITOR' | translate,
                    content: visitor_template,
                },
                {
                    key: 'vip_assistant',
                    name: 'BOOKINGS.VIP_ASSISTANT' | translate,
                    content: assistant_template,
                },
                {
                    key: 'booked_by',
                    name: 'APP.CONCIERGE.VIP_BOOKED_BY' | translate,
                    content: booked_by_template,
                },
                {
                    key: 'status',
                    name: 'COMMON.STATUS' | translate,
                    content: status_template,
                    size: '9.5rem',
                },
                {
                    key: 'actions',
                    name: ' ',
                    content: action_template,
                    size: '10.5rem',
                    sortable: false,
                },
            ]"
            [filter]="search"
            [sortable]="true"
        />
        <ng-template #date_template let-row="row">
            <div class="px-4">
                {{ row.date | date: 'mediumDate' : tz }}
            </div>
        </ng-template>
        <ng-template #time_template let-row="row">
            <div class="px-4">
                {{ row.date | date: time_format : tz }}
            </div>
        </ng-template>
        <ng-template #visitor_template let-row="row">
            <div class="px-4 py-2">
                <div class="flex items-center space-x-1">
                    <span>{{ row.asset_name || row.asset_id }}</span>
                </div>
                @if (row.asset_name && row.asset_id) {
                    <div class="text-xs opacity-30 select-all">
                        {{ row.asset_id }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #assistant_template let-row="row">
            <div class="px-4 py-2">
                @if (row.extension_data?.vip_assistant_name) {
                    @let name = row.extension_data.vip_assistant_name;
                    @let email = row.extension_data.vip_assistant_email;
                    <div>{{ name || email }}</div>
                    @if (name && email) {
                        <div class="text-xs opacity-30 select-all">
                            {{ email }}
                        </div>
                    }
                } @else {
                    <span class="opacity-30">-</span>
                }
            </div>
        </ng-template>
        <ng-template #booked_by_template let-row="row">
            <div class="px-4 py-2">
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
                @if (row.booked_by_name && row.booked_by_email) {
                    <div class="text-xs opacity-30 select-all">
                        {{ row.booked_by_email }}
                    </div>
                }
            </div>
        </ng-template>
        <ng-template #status_template let-row="row">
            <div class="px-4">
                <button
                    matRipple
                    class="h-10 w-30 rounded-3xl border-none"
                    [class.text-success-content]="row?.status === 'approved'"
                    [class.bg-success]="row?.status === 'approved'"
                    [class.text-error-content]="row?.status === 'declined'"
                    [class.bg-error]="row?.status === 'declined'"
                    [class.text-neutral-content]="row?.status === 'ended'"
                    [class.bg-neutral]="row?.status === 'ended'"
                    [class.text-warning-content]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.bg-warning]="
                        row?.status !== 'ended' &&
                        row?.status !== 'approved' &&
                        row?.status !== 'declined'
                    "
                    [class.opacity-30]="row?.status === 'ended'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="
                        row?.status === 'ended' ||
                        (row.checked_in && !row.checked_out_at)
                    "
                >
                    <div class="flex items-center space-x-2 pr-2 pl-4">
                        <div class="flex-1 text-left">
                            {{
                                (row?.status === 'ended'
                                    ? 'APP.CONCIERGE.BOOKING_STATUS_ENDED'
                                    : row?.status === 'approved'
                                      ? 'APP.CONCIERGE.BOOKING_STATUS_APPROVED'
                                      : row?.status === 'declined'
                                        ? 'APP.CONCIERGE.BOOKING_STATUS_DECLINED'
                                        : 'APP.CONCIERGE.BOOKING_STATUS_PENDING'
                                ) | translate
                            }}
                        </div>
                        @if (
                            !(
                                row?.status === 'ended' ||
                                (row.checked_in && !row.checked_out_at)
                            )
                        ) {
                            <icon class="text-2xl"> arrow_drop_down </icon>
                        }
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approveVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_APPROVE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="declineVisitor(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-error text-2xl"> event_busy </icon>
                        <div class="pr-2">
                            {{
                                'APP.CONCIERGE.VISITORS_ACTION_DECLINE'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="flex w-full items-center justify-end space-x-1 px-2">
                <button
                    icon
                    matRipple
                    class="rounded"
                    (click)="viewDetails(row)"
                    [matTooltip]="'APP.CONCIERGE.VIP_VIEW_DETAILS' | translate"
                >
                    <icon>visibility</icon>
                </button>
                <a
                    icon
                    matRipple
                    class="rounded"
                    [href]="'mailto:' + row?.asset_id"
                    [matTooltip]="
                        'APP.CONCIERGE.VISITORS_ACTION_EMAIL'
                            | translate
                    "
                >
                    <icon>email</icon>
                </a>
                @if (row.extension_data?.vip_assistant_email) {
                    <a
                        icon
                        matRipple
                        class="rounded"
                        [href]="
                            'mailto:' + row.extension_data.vip_assistant_email
                        "
                        [matTooltip]="
                            'APP.CONCIERGE.VIP_EMAIL_ASSISTANT' | translate
                        "
                    >
                        <icon>support_agent</icon>
                    </a>
                }
                @if (!row.checked_out_at) {
                    <button
                        icon
                        matRipple
                        class="rounded"
                        (click)="row.checked_in ? checkout(row) : checkin(row)"
                        [matTooltip]="
                            (row.checked_in
                                ? 'APP.CONCIERGE.VISITORS_ACTION_CHECKOUT'
                                : 'APP.CONCIERGE.VISITORS_ACTION_CHECKIN'
                            ) | translate
                        "
                    >
                        <icon>
                            {{
                                row.checked_in
                                    ? 'event_busy'
                                    : 'event_available'
                            }}
                        </icon>
                    </button>
                }
            </div>
        </ng-template>
        <div class="h-8 w-full"></div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatTooltipModule,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      SimpleTableComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VipVisitorListingComponent, { className: "VipVisitorListingComponent", filePath: "apps/concierge/src/app/vip-visitors/vip-visitor-listing.component.ts", lineNumber: 275 });
})();

// apps/concierge/src/app/vip-visitors/vip-visitors.component.ts
function VipVisitorsComponent_For_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 20);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r1.parent_id)?.display_name, " ");
  }
}
function VipVisitorsComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13)(1, "div", 18);
    \u0275\u0275conditionalCreate(2, VipVisitorsComponent_For_20_Conditional_2_Template, 5, 3, "div", 19);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r1.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r1.display_name || level_r1.name, " ");
  }
}
function VipVisitorsComponent_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 17);
  }
}
var VipVisitorsComponent = class _VipVisitorsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(VipVisitorsStateService);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this._settings = inject(SettingsService);
    this.loading = this._state.loading;
    this.filters = this._state.filters;
    this.zones = [];
    this.start = startOfDay(Date.now()).getTime();
    this.end = endOfDay(Date.now()).getTime();
    this.levels = combineLatest([
      toObservable(this._org.active_building),
      toObservable(this._org.active_region)
    ]).pipe(map(([bld, region]) => this._settings.get("app.use_region") ? this._org.levelsForRegion(region) : this._org.levelsForBuilding(bld)));
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
    this.setStartDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this.start = date;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { start: date },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ start_date: date });
    };
    this.setEndDate = (date) => {
      if (date instanceof Date)
        date = date.valueOf();
      this.end = endOfDay(date).valueOf();
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { end: endOfDay(date).valueOf() },
        queryParamsHandling: "merge"
      });
      this._state.setFilters({ end_date: endOfDay(date).valueOf() });
    };
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get week_start() {
    return this._settings.get("app.week_start");
  }
  ngOnInit() {
    this._state.startPolling();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("start")) {
        this.start = +params.get("start");
        this._state.setFilters({ start_date: this.start });
      }
      if (params.has("end")) {
        this.end = +params.get("end");
        this._state.setFilters({ end_date: this.end });
      }
    }));
  }
  ngOnDestroy() {
    super.ngOnDestroy();
    this._state.stopPolling();
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275VipVisitorsComponent_BaseFactory;
      return function VipVisitorsComponent_Factory(__ngFactoryType__) {
        return (\u0275VipVisitorsComponent_BaseFactory || (\u0275VipVisitorsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_VipVisitorsComponent)))(__ngFactoryType__ || _VipVisitorsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _VipVisitorsComponent, selectors: [["", "app-vip-visitors", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 32, vars: 18, consts: [["startDate", ""], ["endDate", ""], [1, "print:hidden"], [1, "flex", "h-px", "flex-1", "print:hidden"], [1, "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "flex", "items-center", "space-x-2", "px-8", "py-4"], [1, "flex", "items-center", "space-x-2", "text-2xl", "font-medium"], [1, "text-warning"], [1, "w-2", "flex-1"], [1, "mr-2", 3, "modelChange"], [1, "flex", "items-center", "px-8", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-60"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [3, "week_start", "from"], [3, "ngModelChange", "ngModel"], [1, "mx-8", "h-1/2", "flex-1", "overflow-auto"], ["mode", "indeterminate", 1, "w-full"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"]], template: function VipVisitorsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 4)(4, "div", 5)(5, "h2", 6)(6, "span", 7)(7, "icon");
        \u0275\u0275text(8, "star");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(12, "div", 8);
        \u0275\u0275elementStart(13, "searchbar", 9);
        \u0275\u0275listener("modelChange", function VipVisitorsComponent_Template_searchbar_modelChange_13_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 10)(15, "mat-form-field", 11)(16, "mat-select", 12);
        \u0275\u0275pipe(17, "async");
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275listener("ngModelChange", function VipVisitorsComponent_Template_mat_select_ngModelChange_16_listener($event) {
          return ctx.updateZones($event);
        });
        \u0275\u0275repeaterCreate(19, VipVisitorsComponent_For_20_Template, 5, 3, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275pipe(21, "async");
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275element(22, "div", 8);
        \u0275\u0275elementStart(23, "date-range-field", 14)(24, "input", 15, 0);
        \u0275\u0275listener("ngModelChange", function VipVisitorsComponent_Template_input_ngModelChange_24_listener($event) {
          return $event ? ctx.setStartDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementStart(26, "input", 15, 1);
        \u0275\u0275listener("ngModelChange", function VipVisitorsComponent_Template_input_ngModelChange_26_listener($event) {
          return $event ? ctx.setEndDate($event) : "";
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "div", 16);
        \u0275\u0275element(29, "vip-visitor-listings");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(30, VipVisitorsComponent_Conditional_30_Template, 1, 0, "mat-progress-bar", 17);
        \u0275\u0275pipe(31, "async");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(10);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 8, "BOOKINGS.VIP_VISITORS"));
        \u0275\u0275advance(6);
        \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(17, 10, ctx.filters)?.zones)("placeholder", \u0275\u0275pipeBind1(18, 12, "COMMON.LEVEL_ALL"));
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275repeater(\u0275\u0275pipeBind1(21, 14, ctx.levels));
        \u0275\u0275advance(4);
        \u0275\u0275property("week_start", ctx.week_start)("from", 0);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.start);
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.end);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275conditional(\u0275\u0275pipeBind1(31, 16, ctx.loading) ? 30 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressBarModule,
      MatProgressBar,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateRangeFieldComponent,
      VipVisitorListingComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      SearchbarComponent,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      IconComponent,
      AsyncPipe,
      TranslatePipe,
      BuildingPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=vip-visitors.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorsComponent, [{
    type: Component,
    args: [{ selector: "[app-vip-visitors]", template: `
        <app-topbar class="print:hidden"></app-topbar>
        <div class="flex h-px flex-1 print:hidden">
            <app-sidebar></app-sidebar>
            <main class="flex h-full w-1/2 flex-1 flex-col">
                <div class="flex items-center space-x-2 px-8 py-4">
                    <h2
                        class="flex items-center space-x-2 text-2xl font-medium"
                    >
                        <span class="text-warning">
                            <icon>star</icon>
                        </span>
                        <span>{{ 'BOOKINGS.VIP_VISITORS' | translate }}</span>
                    </h2>
                    <div class="w-2 flex-1"></div>
                    <searchbar
                        class="mr-2"
                        (modelChange)="setSearch($event)"
                    ></searchbar>
                </div>
                <div class="flex items-center px-8 pb-4">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-60"
                    >
                        <mat-select
                            [ngModel]="(filters | async)?.zones"
                            (ngModelChange)="updateZones($event)"
                            [placeholder]="'COMMON.LEVEL_ALL' | translate"
                            multiple
                        >
                            @for (level of levels | async; track level) {
                                <mat-option [value]="level.id">
                                    <div class="flex flex-col-reverse">
                                        @if (use_region) {
                                            <div class="text-xs opacity-30">
                                                {{
                                                    (level.parent_id | building)
                                                        ?.display_name
                                                }}
                                                <span class="opacity-0">
                                                    -
                                                </span>
                                            </div>
                                        }
                                        <div>
                                            {{
                                                level.display_name || level.name
                                            }}
                                        </div>
                                    </div>
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                    <div class="w-2 flex-1"></div>
                    <date-range-field [week_start]="week_start" [from]="0">
                        <input
                            #startDate
                            [ngModel]="start"
                            (ngModelChange)="$event ? setStartDate($event) : ''"
                        />
                        <input
                            #endDate
                            [ngModel]="end"
                            (ngModelChange)="$event ? setEndDate($event) : ''"
                        />
                    </date-range-field>
                </div>
                <div class="mx-8 h-1/2 flex-1 overflow-auto">
                    <vip-visitor-listings></vip-visitor-listings>
                </div>
                @if (loading | async) {
                    <mat-progress-bar
                        class="w-full"
                        mode="indeterminate"
                    ></mat-progress-bar>
                }
            </main>
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      DateRangeFieldComponent,
      VipVisitorListingComponent,
      FormsModule,
      MatRippleModule,
      SearchbarComponent,
      ApplicationSidebarComponent,
      ApplicationTopbarComponent,
      TranslatePipe,
      BuildingPipe,
      IconComponent
    ], styles: ["/* angular:styles/component:css;8c4a04aa555db379bf6f094c3ef1278e1f19da8fa9947c76cf85d1411aeb75c3;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/vip-visitors/vip-visitors.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\n/*# sourceMappingURL=vip-visitors.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(VipVisitorsComponent, { className: "VipVisitorsComponent", filePath: "apps/concierge/src/app/vip-visitors/vip-visitors.component.ts", lineNumber: 141 });
})();

// apps/concierge/src/app/vip-visitors/vip-visitors.module.ts
var ROUTES = [{ path: "", component: VipVisitorsComponent }];
var VipVisitorsModule = class _VipVisitorsModule {
  static {
    this.\u0275fac = function VipVisitorsModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _VipVisitorsModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _VipVisitorsModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [VipVisitorsComponent, RouterModule.forChild(ROUTES)] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VipVisitorsModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [VipVisitorsComponent, RouterModule.forChild(ROUTES)]
    }]
  }], null, null);
})();
export {
  VipVisitorsModule
};
//# sourceMappingURL=vip-visitors.module-ADFXUIJJ.js.map
