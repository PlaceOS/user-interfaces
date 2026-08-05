import {
  ExploreParkingInfoComponent,
  ParkingService,
  ParkingStateService
} from "./chunk-VFS7KV5D.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-ASIVBYFF.js";
import "./chunk-XWLMQ7WE.js";
import "./chunk-CYR5BRL5.js";
import {
  BookingRulesModalComponent
} from "./chunk-TAK74G4H.js";
import "./chunk-OJMEWAJS.js";
import {
  loadPersistedZones,
  persistZones
} from "./chunk-2IX3MLLC.js";
import {
  BookingFormService
} from "./chunk-Y57B4DBF.js";
import "./chunk-465SURWO.js";
import {
  DEFAULT_COLOURS
} from "./chunk-5EVUE7S3.js";
import "./chunk-B4ONJBRO.js";
import "./chunk-PXZORMMA.js";
import "./chunk-7B2B4W7A.js";
import {
  SearchbarComponent
} from "./chunk-ICOPWFS4.js";
import {
  DateOptionsComponent
} from "./chunk-YN2KJWSS.js";
import "./chunk-4KOEA56W.js";
import "./chunk-FVFVK2PX.js";
import "./chunk-T3Y6WKZ3.js";
import {
  ExploreStateService,
  InteractiveMapComponent
} from "./chunk-KQC2HBFP.js";
import "./chunk-AQFNYGFP.js";
import "./chunk-VDG5HKOT.js";
import {
  toSignal
} from "./chunk-BMZSXPTG.js";
import "./chunk-DDOFBVTS.js";
import {
  ParkingSpacePipe
} from "./chunk-OWMAC2F3.js";
import {
  queryParkingSpacesForZones
} from "./chunk-AFUJH3VI.js";
import "./chunk-XMOUGTI4.js";
import "./chunk-2W2RAKR6.js";
import "./chunk-U7DRWMON.js";
import "./chunk-YQFTDKIN.js";
import "./chunk-AB3FVSKO.js";
import "./chunk-BNPFA6YT.js";
import {
  BuildingPipe
} from "./chunk-ZMMWV44N.js";
import "./chunk-SFJRBLMW.js";
import {
  SimpleTableComponent
} from "./chunk-D4U7HH45.js";
import {
  queryAllBookings,
  queryBookings
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
import "./chunk-ZHQOEMKJ.js";
import "./chunk-WQMV3TRW.js";
import {
  setHours
} from "./chunk-A4MIKUMG.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-XC7NYAXD.js";
import "./chunk-IP35RKR5.js";
import "./chunk-QPKVQ5HV.js";
import "./chunk-JSEKGX6Q.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  Clipboard,
  CommonModule,
  Component,
  CustomTooltipComponent,
  DatePipe,
  DecimalPipe,
  FormsModule,
  IconComponent,
  Injectable,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatLabel,
  MatOption,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  TranslatePipe,
  Wu,
  addDays,
  addMinutes,
  alignDateToBookableHours,
  computed,
  currentUser,
  effect,
  endOfDay,
  getAllDayTimeRange,
  getUnixTime,
  i18n,
  inject,
  isSameDay,
  isWithinBookableHours,
  notifyError,
  notifySuccess,
  resource,
  rulesForResource,
  setClassMetadata,
  settingSignal,
  signal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  toZonedTime,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
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
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunctionV,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-UP5N7EI7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/concierge/src/app/parking/parking.utilities.ts
function isParkingAllDayBooking(booking, timezone) {
  if (booking.all_day)
    return true;
  if (booking.duration <= 12 * 60)
    return false;
  if (!booking.date || !booking.date_end)
    return true;
  const start = timezone ? toZonedTime(booking.date, timezone) : booking.date;
  const end = timezone ? toZonedTime(booking.date_end, timezone) : booking.date_end;
  return isSameDay(start, end);
}

// apps/concierge/src/app/parking/parking-bookings-week-view.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id;
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 28);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 28);
    \u0275\u0275text(2, "done");
    \u0275\u0275elementEnd()();
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext().$implicit;
    const bay_name_r3 = \u0275\u0275readContextLet(12);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bay_name_r3?.identifier || booking_r2.asset_id, " ");
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx, " ");
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
    \u0275\u0275elementStart(1, "icon", 30);
    \u0275\u0275text(2, "arrow_drop_down");
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_41_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_41_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const booking_r2 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.assignSpace(booking_r2));
    });
    \u0275\u0275elementStart(2, "icon", 32);
    \u0275\u0275text(3, "add_location");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("disabled", booking_r2.checked_in || booking_r2.state === "in_progress" || booking_r2.status === "ended")("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.PARKING_ASSIGN_SPACE"));
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_41_Conditional_0_Template, 4, 4, "button", 27);
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(!ctx_r3.hide_assign_space ? 0 : -1);
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_42_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const booking_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.editReservation(booking_r2));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", booking_r2.checked_in || booking_r2.state === "in_progress" || booking_r2.status === "ended" || booking_r2.instance)("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 31);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_43_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const booking_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.removeBooking(booking_r2));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const booking_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("disabled", booking_r2.checked_in || booking_r2.state === "in_progress" || booking_r2.status === "ended")("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.BOOKING_REMOVE_TITLE"));
  }
}
function ParkingBookingsWeekViewComponent_For_3_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "div", 11);
    \u0275\u0275conditionalCreate(2, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_2_Template, 3, 0, "div", 12)(3, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_3_Template, 3, 0, "div", 13)(4, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_4_Template, 1, 0, "div", 14);
    \u0275\u0275elementStart(5, "span", 15);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 16);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(12);
    \u0275\u0275pipe(13, "parkingSpace");
    \u0275\u0275pipe(14, "async");
    \u0275\u0275conditionalCreate(15, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_15_Template, 2, 1, "div", 17);
    \u0275\u0275conditionalCreate(16, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_16_Template, 2, 1, "div", 18);
    \u0275\u0275conditionalCreate(17, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_17_Template, 2, 1, "div", 17);
    \u0275\u0275elementStart(18, "button", 19)(19, "div", 20)(20, "div", 21);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_23_Template, 3, 0);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(24, "div", 22)(25, "mat-menu", null, 0)(27, "button", 23);
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_3_For_10_Template_button_click_27_listener() {
      const booking_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.approve(booking_r2));
    });
    \u0275\u0275elementStart(28, "div", 24)(29, "icon", 25);
    \u0275\u0275text(30, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 26);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 23);
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_3_For_10_Template_button_click_34_listener() {
      const booking_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.reject(booking_r2));
    });
    \u0275\u0275elementStart(35, "div", 24)(36, "icon", 25);
    \u0275\u0275text(37, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 26);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(41, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_41_Template, 1, 1);
    \u0275\u0275conditionalCreate(42, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_42_Template, 4, 4, "button", 27);
    \u0275\u0275conditionalCreate(43, ParkingBookingsWeekViewComponent_For_3_For_10_Conditional_43_Template, 4, 4, "button", 27);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_34_0;
    let tmp_35_0;
    const booking_r2 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(26);
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-success", booking_r2.status === "approved" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("border-secondary", ctx_r3.isAssignedBooking(booking_r2))("border-neutral", ctx_r3.isDeletedBooking(booking_r2))("border-info", booking_r2.status === "tentative" && ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("border-warning", booking_r2.status === "tentative" && !ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("border-error", booking_r2.status === "declined" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("border-base-300", booking_r2.status === "ended" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("opacity-50", booking_r2.status === "ended");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(booking_r2.checked_in ? 2 : booking_r2.checked_out_at ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", booking_r2.user_name || booking_r2.user_email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r3.isAllDayBooking(booking_r2) ? \u0275\u0275pipeBind1(9, 65, "COMMON.ALL_DAY") : \u0275\u0275pipeBind3(10, 67, booking_r2.date, ctx_r3.time_format, ctx_r3.timezone) + " - " + \u0275\u0275pipeBind3(11, 71, booking_r2.date_end, ctx_r3.time_format, ctx_r3.timezone), " ");
    \u0275\u0275advance(4);
    const bay_name_r9 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(14, 77, \u0275\u0275pipeBind1(13, 75, booking_r2.asset_id)));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(bay_name_r9 && !ctx_r3.isRequest(booking_r2) && !ctx_r3.hide_bay_number_column() ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_34_0 = booking_r2.extension_data?.plate_number) ? 16 : -1, tmp_34_0);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_35_0 = ctx_r3.matchedUserGroups(booking_r2)) ? 17 : -1, tmp_35_0);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", booking_r2.status === "approved" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("bg-success", booking_r2.status === "approved" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("text-secondary-content!", ctx_r3.isAssignedBooking(booking_r2))("bg-secondary!", ctx_r3.isAssignedBooking(booking_r2))("text-neutral-content!", ctx_r3.isDeletedBooking(booking_r2))("bg-neutral!", ctx_r3.isDeletedBooking(booking_r2))("text-error-content", booking_r2.status === "declined" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("bg-error", booking_r2.status === "declined" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("text-warning-content", booking_r2.status === "tentative" && !ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("bg-warning", booking_r2.status === "tentative" && !ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("text-info-content", booking_r2.status === "tentative" && ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("bg-info", booking_r2.status === "tentative" && ctx_r3.isVisibleWaitlisted(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("text-neutral-content", booking_r2.status === "ended" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("bg-neutral", booking_r2.status === "ended" && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2))("opacity-30", ctx_r3.isStatusActionDisabled(booking_r2) && !ctx_r3.isAssignedBooking(booking_r2) && !ctx_r3.isDeletedBooking(booking_r2));
    \u0275\u0275property("matMenuTriggerFor", menu_r8)("disabled", ctx_r3.isStatusActionDisabled(booking_r2));
    \u0275\u0275advance();
    \u0275\u0275classProp("justify-center", ctx_r3.isStatusActionDisabled(booking_r2));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 80, ctx_r3.statusLabel(booking_r2)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.isStatusActionDisabled(booking_r2) ? 23 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r3.canApproveBooking(booking_r2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 82, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r3.canApproveBooking(booking_r2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 84, "APP.CONCIERGE.PARKING_DECLINE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.isRequest(booking_r2) ? 41 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.can_edit() ? 42 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r3.can_delete() ? 43 : -1);
  }
}
function ParkingBookingsWeekViewComponent_For_3_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r3.isRequestFilter(ctx_r3.options().request_filter) ? "APP.CONCIERGE.PARKING_REQUESTS_EMPTY" : "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"), " ");
  }
}
function ParkingBookingsWeekViewComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "div", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 6);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 7);
    \u0275\u0275repeaterCreate(9, ParkingBookingsWeekViewComponent_For_3_For_10_Template, 44, 86, "div", 8, _forTrack0);
    \u0275\u0275conditionalCreate(11, ParkingBookingsWeekViewComponent_For_3_Conditional_11_Template, 3, 3, "div", 9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r10 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(4, 5, day_r10, "EEE, MMM d", ctx_r3.timezone), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("invisible", !ctx_r3.isToday(day_r10));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 9, "COMMON.TODAY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r3.grouped_bookings()[day_r10] || \u0275\u0275pureFunction0(11, _c0));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r3.grouped_bookings()[day_r10]?.length ? 11 : -1);
  }
}
var ParkingBookingsWeekViewComponent = class _ParkingBookingsWeekViewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this._date_pipe = new DatePipe("en");
    this.loading = this._state.loading;
    this.options = this._state.options;
    this.bookings = this._state.bookings;
    this.days = computed(
      () => {
        const options = this.options();
        const week_start = this._state.week_start;
        const start = startOfWeek(options.date, {
          weekStartsOn: week_start
        });
        return Array.from({ length: 7 }, (_, i) => addDays(start, i).valueOf());
      },
      ...ngDevMode ? [{ debugName: "days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.grouped_bookings = computed(
      () => {
        const days = this.days();
        const { search, request_filter } = this.options();
        const filtered = this._state.filterEventList(this.bookings(), request_filter);
        const list = this._state.filterEventSearch(filtered, search);
        const grouped = {};
        for (const day of days) {
          grouped[day] = list.filter((b) => {
            const booking_date = this._date_pipe.transform(b.date, "yyyy-MM-dd", this.timezone);
            const day_date = this._date_pipe.transform(day, "yyyy-MM-dd", this.timezone);
            return booking_date === day_date;
          }).sort((a, b) => a.date - b.date);
        }
        return grouped;
      },
      ...ngDevMode ? [{ debugName: "grouped_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_bay_number_column = computed(
      () => {
        const { request_filter } = this.options();
        return this.hide_bay_number || this.isRequestFilter(request_filter);
      },
      ...ngDevMode ? [{ debugName: "hide_bay_number_column" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
    this.assignSpace = (e) => this._state.assignSpace(e);
    this.removeBooking = (e) => this._state.removeBooking(e);
    this.isRequest = (e) => this._state.isRequest(e);
    this.isWaitlisted = (e) => this._state.isWaitlisted(e);
    this.canApproveBooking = (e) => this._state.canApproveBooking(e);
    this.isStatusActionDisabled = (e) => e?.status === "ended" || this.isAssignedBooking(e) || this.isDeletedBooking(e) || !this.canApproveBooking(e);
    this.can_edit = settingSignal("parking.allow_editing", true);
    this.can_delete = settingSignal("parking.allow_deleting", false);
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._state.timezone;
  }
  get hide_assign_space() {
    return !!this._settings.get("app.parking.hide_assign_space");
  }
  get hide_bay_number() {
    return !!this._settings.get("app.parking.hide_bay_number");
  }
  get show_waitlist() {
    return this._settings.get("app.parking.show_waitlist") !== false;
  }
  get show_user_groups() {
    const groups = this._settings.get("app.parking.show_user_groups");
    return Array.isArray(groups) ? groups.filter(Boolean) : [];
  }
  matchedUserGroups(booking) {
    const allowed = this.show_user_groups;
    if (!allowed.length)
      return "";
    const groups = booking?.extension_data?.user_groups;
    if (!Array.isArray(groups))
      return "";
    return groups.filter((group) => allowed.includes(group)).join(", ");
  }
  isVisibleWaitlisted(booking) {
    return this.show_waitlist && this.isWaitlisted(booking);
  }
  isAssignedBooking(booking) {
    return !!booking?.extension_data?.is_assigned;
  }
  isDeletedBooking(booking) {
    return !!booking?.deleted;
  }
  isAllDayBooking(booking) {
    return isParkingAllDayBooking(booking, this.timezone);
  }
  statusLabel(booking) {
    return this.isAssignedBooking(booking) ? "APP.CONCIERGE.BOOKING_STATUS_ASSIGNED" : this.isDeletedBooking(booking) ? "APP.CONCIERGE.BOOKING_STATUS_DELETED" : booking?.status === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : booking?.status === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : booking?.status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : this.isVisibleWaitlisted(booking) ? "APP.CONCIERGE.PARKING_WAITLISTED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING";
  }
  isRequestFilter(filter_type) {
    return ["manual", "pending", "requests", "waitlist"].includes(filter_type || "");
  }
  isToday(date) {
    return isSameDay(date, Date.now());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingBookingsWeekViewComponent_BaseFactory;
      return function ParkingBookingsWeekViewComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingBookingsWeekViewComponent_BaseFactory || (\u0275ParkingBookingsWeekViewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingsWeekViewComponent)))(__ngFactoryType__ || _ParkingBookingsWeekViewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsWeekViewComponent, selectors: [["parking-bookings-week-view"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 2, consts: [["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [1, "flex", "h-full", "min-h-0", "flex-1"], [1, "border-base-200", "flex", "min-w-36", "flex-1", "flex-col", "border-r", "last:border-r-0"], [1, "border-base-200", "bg-base-100", "flex", "h-14", "flex-col", "items-center", "justify-center", "border-b", "px-2", "text-center"], [1, "text-sm", "font-medium"], [1, "text-info", "text-xs"], [1, "flex", "flex-1", "flex-col", "gap-1", "overflow-auto", "p-2"], [1, "hover:bg-base-200", "flex", "flex-col", "rounded-sm", "border", "p-2", "text-xs", 3, "border-success", "border-secondary", "border-neutral", "border-info", "border-warning", "border-error", "border-base-300", "opacity-50"], [1, "p-4", "text-center", "text-xs", "opacity-30"], [1, "hover:bg-base-200", "flex", "flex-col", "rounded-sm", "border", "p-2", "text-xs"], [1, "flex", "items-center", "gap-1"], [1, "bg-success", "text-success-content", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "bg-base-300", "text-base-100", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "bg-warning", "text-warning-content", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "flex-1", "truncate", "font-medium"], [1, "mt-1", "opacity-60"], [1, "mt-0.5", "opacity-40"], [1, "mt-0.5", "font-mono", "uppercase", "opacity-40"], ["matRipple", "", 1, "my-1", "min-h-6", "w-full", "flex-1", "rounded-full", "border-none", "text-left", "text-xs", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center"], [1, "px-4"], [1, "mt-1", "flex", "items-center", "gap-1"], ["mat-menu-item", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "pr-2"], ["icon", "", "default", "", "matRipple", "", 1, "text-xs", 3, "disabled", "matTooltip"], [1, "text-xs"], [1, "flex-1"], [1, "mx-1", "text-xl"], ["icon", "", "default", "", "matRipple", "", 1, "text-xs", 3, "click", "disabled", "matTooltip"], [1, "text-base"]], template: function ParkingBookingsWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 1);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275repeaterCreate(2, ParkingBookingsWeekViewComponent_For_3_Template, 12, 12, "div", 3, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("[BOOKINGS]"));
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [
      CommonModule,
      MatProgressBarModule,
      MatProgressBar,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      ParkingSpacePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-bookings-week-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsWeekViewComponent, [{
    type: Component,
    args: [{ selector: "parking-bookings-week-view", template: `
        <mat-progress-bar
            [class.opacity-0]="!loading().includes('[BOOKINGS]')"
            class="sticky left-0 w-full"
        />
        <div class="flex h-full min-h-0 flex-1">
            @for (day of days(); track day) {
                <div
                    class="border-base-200 flex min-w-36 flex-1 flex-col border-r last:border-r-0"
                >
                    <div
                        class="border-base-200 bg-base-100 flex h-14 flex-col items-center justify-center border-b px-2 text-center"
                    >
                        <div class="text-sm font-medium">
                            {{ day | date: 'EEE, MMM d' : timezone }}
                        </div>
                        <div
                            class="text-info text-xs"
                            [class.invisible]="!isToday(day)"
                        >
                            {{ 'COMMON.TODAY' | translate }}
                        </div>
                    </div>
                    <div class="flex flex-1 flex-col gap-1 overflow-auto p-2">
                        @for (
                            booking of grouped_bookings()[day] || [];
                            track booking.id
                        ) {
                            <div
                                class="hover:bg-base-200 flex flex-col rounded-sm border p-2 text-xs"
                                [class.border-success]="
                                    booking.status === 'approved' &&
                                    !isAssignedBooking(booking) &&
                                    !isDeletedBooking(booking)
                                "
                                [class.border-secondary]="
                                    isAssignedBooking(booking)
                                "
                                [class.border-neutral]="
                                    isDeletedBooking(booking)
                                "
                                [class.border-info]="
                                    booking.status === 'tentative' &&
                                    isVisibleWaitlisted(booking) &&
                                    !isAssignedBooking(booking) &&
                                    !isDeletedBooking(booking)
                                "
                                [class.border-warning]="
                                    booking.status === 'tentative' &&
                                    !isVisibleWaitlisted(booking) &&
                                    !isAssignedBooking(booking) &&
                                    !isDeletedBooking(booking)
                                "
                                [class.border-error]="
                                    booking.status === 'declined' &&
                                    !isAssignedBooking(booking) &&
                                    !isDeletedBooking(booking)
                                "
                                [class.border-base-300]="
                                    booking.status === 'ended' &&
                                    !isAssignedBooking(booking) &&
                                    !isDeletedBooking(booking)
                                "
                                [class.opacity-50]="booking.status === 'ended'"
                            >
                                <div class="flex items-center gap-1">
                                    @if (booking.checked_in) {
                                        <div
                                            class="bg-success text-success-content flex h-5 w-5 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-xs">done</icon>
                                        </div>
                                    } @else if (booking.checked_out_at) {
                                        <div
                                            class="bg-base-300 text-base-100 flex h-5 w-5 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-xs">done</icon>
                                        </div>
                                    } @else {
                                        <div
                                            class="bg-warning text-warning-content flex h-5 w-5 items-center justify-center rounded-full"
                                        ></div>
                                    }
                                    <span class="flex-1 truncate font-medium">
                                        {{
                                            booking.user_name ||
                                                booking.user_email
                                        }}
                                    </span>
                                </div>
                                <div class="mt-1 opacity-60">
                                    {{
                                        isAllDayBooking(booking)
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (booking.date
                                                  | date
                                                      : time_format
                                                      : timezone) +
                                              ' - ' +
                                              (booking.date_end
                                                  | date
                                                      : time_format
                                                      : timezone)
                                    }}
                                </div>
                                @let bay_name =
                                    booking.asset_id | parkingSpace | async;
                                @if (
                                    bay_name &&
                                    !isRequest(booking) &&
                                    !hide_bay_number_column()
                                ) {
                                    <div class="mt-0.5 opacity-40">
                                        {{
                                            bay_name?.identifier ||
                                                booking.asset_id
                                        }}
                                    </div>
                                }
                                @if (
                                    booking.extension_data?.plate_number;
                                    as plate
                                ) {
                                    <div
                                        class="mt-0.5 font-mono uppercase opacity-40"
                                    >
                                        {{ plate }}
                                    </div>
                                }
                                @if (matchedUserGroups(booking); as groups) {
                                    <div class="mt-0.5 opacity-40">
                                        {{ groups }}
                                    </div>
                                }
                                <button
                                    matRipple
                                    class="my-1 min-h-6 w-full flex-1 rounded-full border-none text-left text-xs"
                                    [class.text-success-content]="
                                        booking.status === 'approved' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.bg-success]="
                                        booking.status === 'approved' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.text-secondary-content!]="
                                        isAssignedBooking(booking)
                                    "
                                    [class.bg-secondary!]="
                                        isAssignedBooking(booking)
                                    "
                                    [class.text-neutral-content!]="
                                        isDeletedBooking(booking)
                                    "
                                    [class.bg-neutral!]="
                                        isDeletedBooking(booking)
                                    "
                                    [class.text-error-content]="
                                        booking.status === 'declined' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.bg-error]="
                                        booking.status === 'declined' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.text-warning-content]="
                                        booking.status === 'tentative' &&
                                        !isVisibleWaitlisted(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.bg-warning]="
                                        booking.status === 'tentative' &&
                                        !isVisibleWaitlisted(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.text-info-content]="
                                        booking.status === 'tentative' &&
                                        isVisibleWaitlisted(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.bg-info]="
                                        booking.status === 'tentative' &&
                                        isVisibleWaitlisted(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.text-neutral-content]="
                                        booking.status === 'ended' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.bg-neutral]="
                                        booking.status === 'ended' &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [class.opacity-30]="
                                        isStatusActionDisabled(booking) &&
                                        !isAssignedBooking(booking) &&
                                        !isDeletedBooking(booking)
                                    "
                                    [matMenuTriggerFor]="menu"
                                    [disabled]="isStatusActionDisabled(booking)"
                                >
                                    <div
                                        class="flex items-center"
                                        [class.justify-center]="
                                            isStatusActionDisabled(booking)
                                        "
                                    >
                                        <div class="px-4">
                                            {{
                                                statusLabel(booking) | translate
                                            }}
                                        </div>
                                        @if (!isStatusActionDisabled(booking)) {
                                            <div class="flex-1"></div>
                                            <icon class="mx-1 text-xl"
                                                >arrow_drop_down</icon
                                            >
                                        }
                                    </div>
                                </button>
                                <div class="mt-1 flex items-center gap-1">
                                    <mat-menu #menu="matMenu">
                                        <button
                                            mat-menu-item
                                            [disabled]="
                                                !canApproveBooking(booking)
                                            "
                                            (click)="approve(booking)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >event_available</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'APP.CONCIERGE.PARKING_APPROVE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                        <button
                                            mat-menu-item
                                            [disabled]="
                                                !canApproveBooking(booking)
                                            "
                                            (click)="reject(booking)"
                                        >
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <icon class="text-2xl"
                                                    >event_busy</icon
                                                >
                                                <div class="pr-2">
                                                    {{
                                                        'APP.CONCIERGE.PARKING_DECLINE'
                                                            | translate
                                                    }}
                                                </div>
                                            </div>
                                        </button>
                                    </mat-menu>
                                    @if (isRequest(booking)) {
                                        @if (!hide_assign_space) {
                                            <button
                                                icon
                                                default
                                                matRipple
                                                class="text-xs"
                                                [disabled]="
                                                    booking.checked_in ||
                                                    booking.state ===
                                                        'in_progress' ||
                                                    booking.status === 'ended'
                                                "
                                                [matTooltip]="
                                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                                        | translate
                                                "
                                                (click)="assignSpace(booking)"
                                            >
                                                <icon class="text-base"
                                                    >add_location</icon
                                                >
                                            </button>
                                        }
                                    }
                                    @if (can_edit()) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            class="text-xs"
                                            [disabled]="
                                                booking.checked_in ||
                                                booking.state ===
                                                    'in_progress' ||
                                                booking.status === 'ended' ||
                                                booking.instance
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_EDIT'
                                                    | translate
                                            "
                                            (click)="editReservation(booking)"
                                        >
                                            <icon>edit</icon>
                                        </button>
                                    }
                                    @if (can_delete()) {
                                        <button
                                            icon
                                            default
                                            matRipple
                                            class="text-xs"
                                            [disabled]="
                                                booking.checked_in ||
                                                booking.state ===
                                                    'in_progress' ||
                                                booking.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.BOOKING_REMOVE_TITLE'
                                                    | translate
                                            "
                                            (click)="removeBooking(booking)"
                                        >
                                            <icon>delete</icon>
                                        </button>
                                    }
                                </div>
                            </div>
                        }
                        @if (!grouped_bookings()[day]?.length) {
                            <div class="p-4 text-center text-xs opacity-30">
                                {{
                                    (isRequestFilter(options().request_filter)
                                        ? 'APP.CONCIERGE.PARKING_REQUESTS_EMPTY'
                                        : 'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY'
                                    ) | translate
                                }}
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      MatRippleModule,
      MatMenuModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe,
      ParkingSpacePipe
    ], styles: ["/* angular:styles/component:css;e2e37d3a90c7e7be8044fb0870dfee75b7b5fa826c5430e40400abd9ff858f3c;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-bookings-week-view.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  overflow: auto;\n}\n/*# sourceMappingURL=parking-bookings-week-view.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsWeekViewComponent, { className: "ParkingBookingsWeekViewComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-week-view.component.ts", lineNumber: 403 });
})();

// apps/concierge/src/app/parking/parking-bookings-list.component.ts
var _c02 = (a0) => ({ time: a0 });
var _c1 = (a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21) => ({ state_template: a0, type_template: a1, date_template: a2, bay_template: a3, person_template: a4, host_template: a5, plate_template: a6, notes_template: a7, status_template: a8, requested_at_template: a9, user_groups_template: a10, action_template: a11, status_busy_label: a12, type_label: a13, time_label: a14, bay_number_label: a15, reserved_for_label: a16, reserved_by_label: a17, plate_number_label: a18, notes_label: a19, status_label: a20, user_groups_label: a21 });
var _c2 = (a0) => ({ notes: a0 });
function ParkingBookingsListComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-bookings-week-view");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.isAllDayBooking(row_r1) ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind3(3, 3, row_r1.date, ctx_r1.time_format, ctx_r1.timezone) + " - " + \u0275\u0275pipeBind3(4, 7, row_r1.date_end, ctx_r1.time_format, ctx_r1.timezone), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_15_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.user_email, " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_Conditional_11_ng_template_15_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r3.user_name || row_r3.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r3.user_name && row_r3.user_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_17_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 23);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_Conditional_11_ng_template_17_Conditional_3_Template, 2, 1, "div", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.booked_by_name || row_r4.booked_by_email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.booked_by_name && row_r4.booked_by_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 5, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(8, _c02, \u0275\u0275pipeBind3(1, 1, row_r5.checked_out_at * 1e3, ctx_r1.time_format, ctx_r1.timezone))));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 25);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_0_Template, 5, 10, "div", 24);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_1_Template, 4, 3, "div", 25);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_Conditional_11_ng_template_19_Conditional_2_Template, 4, 3, "div", 26);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(!row_r5?.checked_in && row_r5.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r5?.checked_in && !row_r5.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r5?.checked_in ? 2 : -1);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_21_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "parkingSpace");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const id_r6 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, id_r6))?.identifier || id_r6, " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_21_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275declareLet(1);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_Conditional_11_ng_template_21_Conditional_2_Template, 3, 5)(3, ParkingBookingsListComponent_Conditional_11_ng_template_21_Conditional_3_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r7 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    const id_r8 = \u0275\u0275storeLet(row_r7.asset_id);
    \u0275\u0275advance();
    \u0275\u0275conditional(id_r8 && !ctx_r1.isRequestId(id_r8) ? 2 : 3);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_23_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_Conditional_11_ng_template_23_Conditional_2_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9?.extension_data?.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!row_r9?.extension_data?.plate_number ? 2 : -1);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_25_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 30);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 31);
    \u0275\u0275text(3, "sticky_note_2");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().row;
    \u0275\u0275nextContext();
    const notes_tooltip_r11 = \u0275\u0275reference(28);
    \u0275\u0275property("content", notes_tooltip_r11)("data", \u0275\u0275pureFunction1(9, _c2, row_r10.notes))("hover", true)("backdrop", false)("xPosition", "center")("yPosition", "top");
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 7, "FORM.NOTES") + ": " + row_r10.notes);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_25_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_25_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_Conditional_11_ng_template_25_Conditional_1_Template, 4, 11, "span", 30)(2, ParkingBookingsListComponent_Conditional_11_ng_template_25_Conditional_2_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.notes ? 1 : 2);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const notes_r12 = ctx.notes;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", notes_r12, " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "div", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 35);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, ctx_r1.vehicleTypeLabel(row_r13)));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.vehicleTypeIcon(row_r13));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 35);
    \u0275\u0275text(1, "arrow_drop_down");
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve(row_r15));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "icon", 35);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve(row_r15, true));
    });
    \u0275\u0275elementStart(8, "div", 41)(9, "icon", 35);
    \u0275\u0275text(10, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(14, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template_button_click_14_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject(row_r15));
    });
    \u0275\u0275elementStart(15, "div", 41)(16, "icon", 35);
    \u0275\u0275text(17, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div", 42);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template_button_click_21_listener() {
      \u0275\u0275restoreView(_r14);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject(row_r15, true));
    });
    \u0275\u0275elementStart(22, "div", 41)(23, "icon", 35);
    \u0275\u0275text(24, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 42);
    \u0275\u0275text(26);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "APP.CONCIERGE.PARKING_APPROVE_INSTANCE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 10, "APP.CONCIERGE.PARKING_APPROVE_SERIES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 12, "APP.CONCIERGE.PARKING_DECLINE_INSTANCE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 14, "APP.CONCIERGE.PARKING_DECLINE_SERIES"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve(row_r15));
    });
    \u0275\u0275elementStart(1, "div", 41)(2, "icon", 35);
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 40);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_10_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r16);
      const row_r15 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject(row_r15));
    });
    \u0275\u0275elementStart(8, "div", 41)(9, "icon", 35);
    \u0275\u0275text(10, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 42);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", !ctx_r1.canApproveBooking(row_r15));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 6, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 36)(1, "button", 37)(2, "div", 38)(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_6_Template, 2, 0, "icon", 35);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "mat-menu", null, 13);
    \u0275\u0275conditionalCreate(9, ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_9_Template, 28, 16)(10, ParkingBookingsListComponent_Conditional_11_ng_template_31_Conditional_10_Template, 14, 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const menu_r17 = \u0275\u0275reference(8);
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", row_r15?.status === "approved" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("bg-success", row_r15?.status === "approved" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("text-secondary-content!", ctx_r1.isAssignedBooking(row_r15))("bg-secondary!", ctx_r1.isAssignedBooking(row_r15))("text-neutral-content!", ctx_r1.isDeletedBooking(row_r15))("bg-neutral!", ctx_r1.isDeletedBooking(row_r15))("text-error-content", row_r15?.status === "declined" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("bg-error", row_r15?.status === "declined" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("text-neutral-content", row_r15?.status === "ended" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("bg-neutral", row_r15?.status === "ended" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("opacity-30", ctx_r1.isStatusActionDisabled(row_r15) && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15))("text-warning-content", row_r15?.status === "tentative" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15) && !ctx_r1.isVisibleWaitlisted(row_r15))("bg-warning", row_r15?.status === "tentative" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15) && !ctx_r1.isVisibleWaitlisted(row_r15))("text-info-content", row_r15?.status === "tentative" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15) && ctx_r1.isVisibleWaitlisted(row_r15))("bg-info", row_r15?.status === "tentative" && !ctx_r1.isAssignedBooking(row_r15) && !ctx_r1.isDeletedBooking(row_r15) && ctx_r1.isVisibleWaitlisted(row_r15));
    \u0275\u0275property("matMenuTriggerFor", menu_r17)("disabled", ctx_r1.isStatusActionDisabled(row_r15));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 35, ctx_r1.statusLabel(row_r15)), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.isStatusActionDisabled(row_r15) ? 6 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.isRecurringInstance(row_r15) ? 9 : 10);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_33_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const row_r18 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, row_r18.created_at, "MMM d, " + ctx_r1.time_format, ctx_r1.timezone), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_33_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_Conditional_11_ng_template_33_Conditional_1_Template, 2, 5)(2, ParkingBookingsListComponent_Conditional_11_ng_template_33_Conditional_2_Template, 3, 3, "span", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r18.created_at ? 1 : 2);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r19 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(row_r19.user_groups);
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r20 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r20);
      const row_r21 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assignSpace(row_r21));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "add_location");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().row;
    \u0275\u0275property("disabled", row_r21.checked_in || row_r21.state === "in_progress" || row_r21.status === "ended")("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.PARKING_ASSIGN_SPACE"));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 46);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r22);
      const row_r21 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.editReservation(row_r21));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().row;
    \u0275\u0275property("disabled", row_r21.checked_in || row_r21.state === "in_progress" || row_r21.status === "ended" || row_r21.instance)("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r23 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 47);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r23);
      const row_r21 = \u0275\u0275nextContext().row;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.removeBooking(row_r21));
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r21 = \u0275\u0275nextContext().row;
    \u0275\u0275property("disabled", row_r21.checked_in || row_r21.state === "in_progress" || row_r21.status === "ended")("matTooltip", \u0275\u0275pipeBind1(1, 2, "APP.CONCIERGE.BOOKING_REMOVE_TITLE"));
  }
}
function ParkingBookingsListComponent_Conditional_11_ng_template_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_1_Template, 4, 4, "button", 44);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_2_Template, 4, 4, "button", 44);
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_Conditional_11_ng_template_37_Conditional_3_Template, 4, 4, "button", 45);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r21 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isRequest(row_r21) && !ctx_r1.hide_assign_space ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.canEdit(row_r21) ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.can_delete() ? 3 : -1);
  }
}
function ParkingBookingsListComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 19)(1, "simple-table", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275template(13, ParkingBookingsListComponent_Conditional_11_ng_template_13_Template, 5, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(15, ParkingBookingsListComponent_Conditional_11_ng_template_15_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(17, ParkingBookingsListComponent_Conditional_11_ng_template_17_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(19, ParkingBookingsListComponent_Conditional_11_ng_template_19_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(21, ParkingBookingsListComponent_Conditional_11_ng_template_21_Template, 4, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(23, ParkingBookingsListComponent_Conditional_11_ng_template_23_Template, 3, 2, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(25, ParkingBookingsListComponent_Conditional_11_ng_template_25_Template, 3, 1, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(27, ParkingBookingsListComponent_Conditional_11_ng_template_27_Template, 2, 1, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(29, ParkingBookingsListComponent_Conditional_11_ng_template_29_Template, 5, 4, "ng-template", null, 8, \u0275\u0275templateRefExtractor)(31, ParkingBookingsListComponent_Conditional_11_ng_template_31_Template, 11, 37, "ng-template", null, 9, \u0275\u0275templateRefExtractor)(33, ParkingBookingsListComponent_Conditional_11_ng_template_33_Template, 3, 1, "ng-template", null, 10, \u0275\u0275templateRefExtractor)(35, ParkingBookingsListComponent_Conditional_11_ng_template_35_Template, 2, 1, "ng-template", null, 11, \u0275\u0275templateRefExtractor)(37, ParkingBookingsListComponent_Conditional_11_ng_template_37_Template, 4, 3, "ng-template", null, 12, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(39, "div", 21);
  }
  if (rf & 2) {
    const date_template_r24 = \u0275\u0275reference(14);
    const person_template_r25 = \u0275\u0275reference(16);
    const host_template_r26 = \u0275\u0275reference(18);
    const state_template_r27 = \u0275\u0275reference(20);
    const bay_template_r28 = \u0275\u0275reference(22);
    const plate_template_r29 = \u0275\u0275reference(24);
    const notes_template_r30 = \u0275\u0275reference(26);
    const type_template_r31 = \u0275\u0275reference(30);
    const status_template_r32 = \u0275\u0275reference(32);
    const requested_at_template_r33 = \u0275\u0275reference(34);
    const user_groups_template_r34 = \u0275\u0275reference(36);
    const action_template_r35 = \u0275\u0275reference(38);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-0", !ctx_r1.loading().includes("[BOOKINGS]"));
    \u0275\u0275advance();
    \u0275\u0275property("data", ctx_r1.filtered_events())("columns", ctx_r1.bookingColumns(\u0275\u0275pureFunctionV(29, _c1, [state_template_r27, type_template_r31, date_template_r24, bay_template_r28, person_template_r25, host_template_r26, plate_template_r29, notes_template_r30, status_template_r32, requested_at_template_r33, user_groups_template_r34, action_template_r35, \u0275\u0275pipeBind1(2, 7, "COMMON.STATUS_BUSY"), \u0275\u0275pipeBind1(3, 9, "BOOKINGS.PARKING_VEHICLE_TYPE"), \u0275\u0275pipeBind1(4, 11, "FORM.TIME"), \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.PARKING_BAY_NUMBER"), \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.PARKING_RESERVED_FOR"), \u0275\u0275pipeBind1(7, 17, "APP.CONCIERGE.PARKING_RESERVED_BY"), \u0275\u0275pipeBind1(8, 19, "EXPLORE.PARKING_PLATE_NUMBER"), \u0275\u0275pipeBind1(9, 21, "FORM.NOTES"), \u0275\u0275pipeBind1(10, 23, "COMMON.STATUS"), \u0275\u0275pipeBind1(11, 25, "APP.CONCIERGE.PARKING_USER_GROUPS")])))("filter", ctx_r1.options().search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(12, 27, ctx_r1.isRequestFilter(ctx_r1.options().request_filter) ? "APP.CONCIERGE.PARKING_REQUESTS_EMPTY" : "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"));
  }
}
function ParkingBookingsListComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r36 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 48);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r36);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.loadMore());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "arrow_cool_down");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 49);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.LOAD_MORE"));
  }
}
var ParkingBookingsListComponent = class _ParkingBookingsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this.bookings = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.period = this._state.period;
    this.has_more_pages = this._state.has_more_pages;
    this.last_updated = this._state.last_updated;
    this.loadMore = () => this._state.nextPage();
    this.refresh = () => this._state.refresh();
    this.filtered_events = computed(
      () => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(this.bookings(), request_filter);
        return this._state.filterEventSearch(list, search).map((booking) => __spreadValues(__spreadProps(__spreadValues({}, booking), {
          vehicle_type: this.vehicleType(booking),
          notes: booking.extension_data?.notes || "",
          // Surface plate number as a root field so the table can sort by it
          plate_number: booking.extension_data?.plate_number || "",
          created_at: (booking.created_at || 0) * 1e3,
          // Resolve the human-readable bay identifier onto the row so the
          // table's built-in search matches it (the `asset_id` field only
          // holds the space id, not the bay number/name).
          bay_number: this._state.bayNumber(booking),
          // Intersection of the booking's user groups with the
          // configured `show_user_groups` filter, surfaced for display.
          user_groups: this.matchedUserGroups(booking)
        }), this.customExtensionColumnValues(booking))).sort((a, b) => (a.bay_number || a.asset_name || "").localeCompare(b.bay_number || b.asset_name || ""));
      },
      ...ngDevMode ? [{ debugName: "filtered_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reject = (e, series = false) => this._state.rejectBooking(e, series);
    this.approve = (e, series = false) => this._state.approveBooking(e, series);
    this.editReservation = (e) => this._state.editReservation(e);
    this.assignSpace = (e) => this._state.assignSpace(e);
    this.removeBooking = (e) => this._state.removeBooking(e);
    this.isRequest = (e) => this._state.isRequest(e);
    this.isManualRequest = (e) => this._state.isManualRequest(e);
    this.isWaitlisted = (e) => this._state.isWaitlisted(e);
    this.canApproveBooking = (e) => this._state.canApproveBooking(e);
    this.isStatusActionDisabled = (e) => e?.status === "ended" || this.isAssignedBooking(e) || this.isDeletedBooking(e) || !this.canApproveBooking(e);
    this.hide_bay_number_column = computed(
      () => {
        const { request_filter } = this.options();
        return this.hide_bay_number || this.isRequestFilter(request_filter);
      },
      ...ngDevMode ? [{ debugName: "hide_bay_number_column" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_action_column = computed(
      () => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(this.bookings(), request_filter);
        return this._state.filterEventSearch(list, search).some((booking) => this.action_count(booking) > 0);
      },
      ...ngDevMode ? [{ debugName: "show_action_column" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_notes_column = computed(
      () => {
        const { search, request_filter } = this.options();
        const list = this._state.filterEventList(this.bookings(), request_filter);
        return this._state.filterEventSearch(list, search).some((booking) => !!booking.extension_data?.notes);
      },
      ...ngDevMode ? [{ debugName: "show_notes_column" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = settingSignal("parking.allow_editing", true);
    this.can_edit_allocated = settingSignal("parking.allow_editing_allocated");
    this.can_delete = settingSignal("parking.allow_deleting", false);
  }
  action_count(row) {
    let count = 0;
    if (this.isRequest(row) && !this.hide_assign_space)
      count += 1;
    if (this.canEdit(row))
      count += 1;
    if (this.can_delete())
      count += 1;
    return count;
  }
  canEdit(bkn) {
    const allocated = !bkn?.asset_id?.startsWith("unallocated");
    return allocated ? this.can_edit_allocated() ?? this.can_edit() : this.can_edit();
  }
  get show_request_types() {
    return !!this._settings.get("app.parking.show_requests");
  }
  get hide_bay_number() {
    return !!this._settings.get("app.parking.hide_bay_number");
  }
  get hide_assign_space() {
    return !!this._settings.get("app.parking.hide_assign_space");
  }
  get custom_extension_columns() {
    const columns = this._settings.get("app.parking.custom_booking_columns");
    return Array.isArray(columns) ? columns.filter((column) => !!column?.field) : [];
  }
  get show_user_groups() {
    const groups = this._settings.get("app.parking.show_user_groups");
    return Array.isArray(groups) ? groups.filter(Boolean) : [];
  }
  matchedUserGroups(booking) {
    const allowed = this.show_user_groups;
    if (!allowed.length)
      return "";
    const groups = booking?.extension_data?.user_groups;
    if (!Array.isArray(groups))
      return "";
    return groups.filter((group) => allowed.includes(group)).join(", ");
  }
  get show_waitlist() {
    return this._settings.get("app.parking.show_waitlist") !== false;
  }
  get time_format() {
    return this._settings.time_format;
  }
  get timezone() {
    return this._state.timezone;
  }
  isVisibleWaitlisted(booking) {
    return this.show_waitlist && this.isWaitlisted(booking);
  }
  isRequestFilter(filter_type) {
    return ["manual", "pending", "requests", "waitlist"].includes(filter_type || "");
  }
  isRequestId(id) {
    return !!id?.startsWith("unallocated");
  }
  isAssignedBooking(booking) {
    return !!booking?.extension_data?.is_assigned;
  }
  isDeletedBooking(booking) {
    return !!booking?.deleted;
  }
  isRecurringInstance(booking) {
    return !!booking?.instance;
  }
  isAllDayBooking(booking) {
    return isParkingAllDayBooking(booking, this.timezone);
  }
  statusLabel(booking) {
    return this.isAssignedBooking(booking) ? "APP.CONCIERGE.BOOKING_STATUS_ASSIGNED" : this.isDeletedBooking(booking) ? "APP.CONCIERGE.BOOKING_STATUS_DELETED" : booking?.status === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : booking?.status === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : booking?.status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : this.isVisibleWaitlisted(booking) ? "APP.CONCIERGE.PARKING_WAITLISTED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING";
  }
  bookingColumns(templates) {
    let max_count = 0;
    for (const bkn of this.bookings()) {
      max_count = Math.max(max_count, this.action_count(bkn));
    }
    return [
      {
        key: "state",
        name: templates.status_busy_label,
        content: templates.state_template,
        size: "4.75rem",
        sortable: false
      },
      {
        key: "vehicle_type",
        name: templates.type_label,
        content: templates.type_template,
        size: "5.5rem",
        show: this.show_request_types
      },
      {
        key: "date",
        name: templates.time_label,
        content: templates.date_template
      },
      {
        key: "bay_number",
        name: templates.bay_number_label,
        content: templates.bay_template,
        show: !this.hide_bay_number_column()
      },
      {
        key: "user_name",
        name: templates.reserved_for_label,
        content: templates.person_template
      },
      {
        key: "booked_by_name",
        name: templates.reserved_by_label,
        content: templates.host_template
      },
      {
        key: "plate_number",
        name: templates.plate_number_label,
        content: templates.plate_template,
        size: "10rem"
      },
      {
        key: "notes",
        name: templates.notes_label,
        content: templates.notes_template,
        size: "5rem",
        sortable: false,
        show: this.show_notes_column()
      },
      ...this.custom_extension_columns.map((column) => ({
        key: this.customExtensionColumnKey(column.field),
        name: column.display_name || column.name || column.field,
        size: column.size
      })),
      {
        key: "status",
        name: templates.status_label,
        content: templates.status_template,
        size: "9.5rem"
      },
      {
        key: "created_at",
        name: "Requested at",
        content: templates.requested_at_template,
        size: "10rem"
      },
      {
        key: "user_groups",
        name: templates.user_groups_label,
        content: templates.user_groups_template,
        size: "12rem",
        sortable: false,
        show: this.show_user_groups.length > 0
      },
      {
        key: "actions",
        name: " ",
        content: templates.action_template,
        size: 3.25 + (max_count - 1) * 2.75 + "rem",
        sortable: false,
        show: this.show_action_column()
      }
    ];
  }
  vehicleType(booking) {
    return booking?.extension_data?.vehicle_type || "car";
  }
  vehicleTypeLabel(booking) {
    return `BOOKINGS.PARKING_VEHICLE_${this.vehicleType(booking).toUpperCase()}`;
  }
  vehicleTypeIcon(booking) {
    const icons = {
      bike: "pedal_bike",
      motorcycle: "motorcycle",
      car: "directions_car",
      truck: "local_shipping",
      van: "airport_shuttle"
    };
    return icons[this.vehicleType(booking)] || "category";
  }
  ngOnInit() {
    this._state.refresh();
  }
  customExtensionColumnKey(field) {
    return `extension_data.${field}`;
  }
  customExtensionColumnValues(booking) {
    const values = {};
    for (const column of this.custom_extension_columns) {
      values[this.customExtensionColumnKey(column.field)] = this.formatExtensionValue(this.extensionFieldValue(booking, column.field));
    }
    return values;
  }
  extensionFieldValue(booking, field) {
    return field.split(".").filter(Boolean).reduce((value, key) => value?.[key], booking?.extension_data);
  }
  formatExtensionValue(value) {
    return Array.isArray(value) ? value.join(", ") : value && typeof value === "object" ? JSON.stringify(value) : value;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingBookingsListComponent_BaseFactory;
      return function ParkingBookingsListComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingBookingsListComponent_BaseFactory || (\u0275ParkingBookingsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingsListComponent)))(__ngFactoryType__ || _ParkingBookingsListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsListComponent, selectors: [["", "parking-bookings-list", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 16, consts: [["date_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["bay_template", ""], ["plate_template", ""], ["notes_template", ""], ["notes_tooltip", ""], ["type_template", ""], ["status_template", ""], ["requested_at_template", ""], ["user_groups_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "w-fit", "px-8"], [1, "bg-base-100", "border-base-300", "fixed", "right-8", "bottom-4", "flex", "items-center", "justify-end", "gap-2", "rounded-xl", "border", "px-2", "py-1", "shadow-lg"], [1, "mr-8", "text-xs", "opacity-60"], ["icon", "", "default", "", "matRipple", "", 1, "absolute", "top-1/2", "-right-2", "-translate-y-1/2", 3, "click", "disabled", "matTooltip"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "fixed", "bottom-2", "left-1/2", "flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-2", "text-sm", "shadow-xl"], ["mode", "indeterminate", 1, "sticky", "left-0", "w-full"], [1, "block", "min-w-324", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["matTooltipPosition", "right", 1, "bg-base-300", "text-base-100", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-warning", "text-warning-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], [1, "opacity-30"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "flex", "justify-center", "px-4", "py-2"], ["customTooltip", "", "tabindex", "0", 1, "text-base-content/70", "bg-base-200", "border-base-300", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", 3, "content", "data", "hover", "backdrop", "xPosition", "yPosition"], [1, "text-xl"], [1, "border-base-300", "bg-base-100", "text-base-content", "my-2", "max-w-96", "rounded-lg", "border", "px-4", "py-3", "text-left", "text-sm", "leading-snug", "whitespace-pre-wrap", "shadow-xl"], [1, "mx-auto", "flex", "justify-center", "px-4", "py-2"], ["matTooltipPosition", "right", 1, "bg-base-300", "text-base-content", "inline-flex", "h-8", "w-8", "items-center", "justify-center", "rounded", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], ["mat-menu-item", "", 3, "click", "disabled"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "flex", "w-full", "items-center", "justify-end", "gap-2", "p-2"], ["icon", "", "default", "", "matRipple", "", 3, "disabled", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "disabled", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["icon", "", "default", "", "error", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "fixed", "bottom-2", "left-1/2", "flex", "items-center", "gap-2", "rounded-full", "border", "px-3", "py-2", "text-sm", "shadow-xl", 3, "click"], [1, "pr-1"]], template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "span", 16);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "button", 17);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("click", function ParkingBookingsListComponent_Template_button_click_6_listener() {
          return ctx.refresh();
        });
        \u0275\u0275elementStart(8, "icon");
        \u0275\u0275text(9, "refresh");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, ParkingBookingsListComponent_Conditional_10_Template, 1, 0, "parking-bookings-week-view")(11, ParkingBookingsListComponent_Conditional_11_Template, 40, 52);
        \u0275\u0275conditionalCreate(12, ParkingBookingsListComponent_Conditional_12_Template, 6, 3, "button", 18);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 9, "COMMON.LAST_UPDATED", \u0275\u0275pureFunction1(14, _c02, \u0275\u0275pipeBind3(4, 5, ctx.last_updated(), ctx.time_format, ctx.timezone))), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.loading().includes("[BOOKINGS]"))("matTooltip", \u0275\u0275pipeBind1(7, 12, "COMMON.REFRESH"));
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.period() === "week" ? 10 : 11);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading().includes("[BOOKINGS]") && ctx.has_more_pages() ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatProgressBarModule,
      MatProgressBar,
      SimpleTableComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      CustomTooltipComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      ParkingBookingsWeekViewComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      ParkingSpacePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsListComponent, [{
    type: Component,
    args: [{ selector: "[parking-bookings-list]", template: `
        <div class="w-fit px-8">
            <div
                class="bg-base-100 border-base-300 fixed right-8 bottom-4 flex items-center justify-end gap-2 rounded-xl border px-2 py-1 shadow-lg"
            >
                <span class="mr-8 text-xs opacity-60">
                    {{
                        'COMMON.LAST_UPDATED'
                            | translate
                                : {
                                      time:
                                          (last_updated()
                                          | date: time_format : timezone),
                                  }
                    }}
                </span>
                <button
                    icon
                    default
                    matRipple
                    class="absolute top-1/2 -right-2 -translate-y-1/2"
                    [disabled]="loading().includes('[BOOKINGS]')"
                    [matTooltip]="'COMMON.REFRESH' | translate"
                    (click)="refresh()"
                >
                    <icon>refresh</icon>
                </button>
            </div>
            @if (period() === 'week') {
                <parking-bookings-week-view />
            } @else {
                <mat-progress-bar
                    [class.opacity-0]="!loading().includes('[BOOKINGS]')"
                    mode="indeterminate"
                    class="sticky left-0 w-full"
                />
                <simple-table
                    class="block min-w-324 text-sm"
                    [data]="filtered_events()"
                    [columns]="
                        bookingColumns({
                            state_template,
                            type_template,
                            date_template,
                            bay_template,
                            person_template,
                            host_template,
                            plate_template,
                            notes_template,
                            status_template,
                            requested_at_template,
                            user_groups_template,
                            action_template,
                            status_busy_label: 'COMMON.STATUS_BUSY' | translate,
                            type_label:
                                'BOOKINGS.PARKING_VEHICLE_TYPE' | translate,
                            time_label: 'FORM.TIME' | translate,
                            bay_number_label:
                                'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                            reserved_for_label:
                                'APP.CONCIERGE.PARKING_RESERVED_FOR'
                                | translate,
                            reserved_by_label:
                                'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                            plate_number_label:
                                'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                            notes_label: 'FORM.NOTES' | translate,
                            status_label: 'COMMON.STATUS' | translate,
                            user_groups_label:
                                'APP.CONCIERGE.PARKING_USER_GROUPS' | translate,
                        })
                    "
                    [filter]="options().search"
                    [sortable]="true"
                    [empty_message]="
                        (isRequestFilter(options().request_filter)
                            ? 'APP.CONCIERGE.PARKING_REQUESTS_EMPTY'
                            : 'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY'
                        ) | translate
                    "
                />
                <ng-template #date_template let-row="row">
                    <div class="px-4 py-2">
                        {{
                            isAllDayBooking(row)
                                ? ('COMMON.ALL_DAY' | translate)
                                : (row.date | date: time_format : timezone) +
                                  ' - ' +
                                  (row.date_end | date: time_format : timezone)
                        }}
                    </div>
                </ng-template>
                <ng-template #person_template let-row="row">
                    <div class="px-4 py-2">
                        <div>{{ row.user_name || row.user_email }}</div>
                        @if (row.user_name && row.user_email) {
                            <div class="text-xs opacity-30">
                                {{ row.user_email }}
                            </div>
                        }
                    </div>
                </ng-template>
                <ng-template #host_template let-row="row">
                    <div class="px-4 py-2">
                        <div>
                            {{ row.booked_by_name || row.booked_by_email }}
                        </div>
                        @if (row.booked_by_name && row.booked_by_email) {
                            <div class="text-xs opacity-30">
                                {{ row.booked_by_email }}
                            </div>
                        }
                    </div>
                </ng-template>
                <ng-template #state_template let-row="row">
                    @if (!row?.checked_in && row.checked_out_at) {
                        <div
                            class="bg-base-300 text-base-100 mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CHECKED_OUT_AT'
                                    | translate
                                        : {
                                              time:
                                                  (row.checked_out_at * 1000
                                                  | date
                                                      : time_format
                                                      : timezone),
                                          }
                            "
                            matTooltipPosition="right"
                        >
                            <icon>done</icon>
                        </div>
                    }
                    @if (!row?.checked_in && !row.checked_out_at) {
                        <div
                            class="bg-warning text-warning-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_NOT_CHECKED_IN'
                                    | translate
                            "
                            matTooltipPosition="right"
                        >
                            <icon>question_mark</icon>
                        </div>
                    }
                    @if (row?.checked_in) {
                        <div
                            class="bg-success text-success-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CHECKED_IN' | translate
                            "
                            matTooltipPosition="right"
                        >
                            <icon>done</icon>
                        </div>
                    }
                </ng-template>
                <ng-template #bay_template let-row="row">
                    <div class="px-4 py-2">
                        @let id = row.asset_id;
                        @if (id && !isRequestId(id)) {
                            {{ (id | parkingSpace | async)?.identifier || id }}
                        } @else {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #plate_template let-row="row">
                    <div class="p-4 font-mono text-sm uppercase">
                        {{ row?.extension_data?.plate_number }}
                        @if (!row?.extension_data?.plate_number) {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #notes_template let-row="row">
                    <div class="flex justify-center px-4 py-2">
                        @if (row.notes) {
                            <span
                                class="text-base-content/70 bg-base-200 border-base-300 flex h-8 w-8 items-center justify-center rounded-full border"
                                customTooltip
                                tabindex="0"
                                [content]="notes_tooltip"
                                [data]="{ notes: row.notes }"
                                [hover]="true"
                                [backdrop]="false"
                                [xPosition]="'center'"
                                [yPosition]="'top'"
                                [attr.aria-label]="
                                    ('FORM.NOTES' | translate) +
                                    ': ' +
                                    row.notes
                                "
                            >
                                <icon class="text-xl">sticky_note_2</icon>
                            </span>
                        } @else {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #notes_tooltip let-notes="notes">
                    <div
                        class="border-base-300 bg-base-100 text-base-content my-2 max-w-96 rounded-lg border px-4 py-3 text-left text-sm leading-snug whitespace-pre-wrap shadow-xl"
                    >
                        {{ notes }}
                    </div>
                </ng-template>
                <ng-template #type_template let-row="row">
                    <div class="mx-auto flex justify-center px-4 py-2">
                        <div
                            class="bg-base-300 text-base-content inline-flex h-8 w-8 items-center justify-center rounded"
                            [matTooltip]="vehicleTypeLabel(row) | translate"
                            matTooltipPosition="right"
                        >
                            <icon class="text-2xl">{{
                                vehicleTypeIcon(row)
                            }}</icon>
                        </div>
                    </div>
                </ng-template>
                <ng-template #status_template let-row="row">
                    <div class="px-4">
                        <button
                            matRipple
                            class="h-10 w-30 rounded-3xl border-none"
                            [class.text-success-content]="
                                row?.status === 'approved' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.bg-success]="
                                row?.status === 'approved' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.text-secondary-content!]="
                                isAssignedBooking(row)
                            "
                            [class.bg-secondary!]="isAssignedBooking(row)"
                            [class.text-neutral-content!]="
                                isDeletedBooking(row)
                            "
                            [class.bg-neutral!]="isDeletedBooking(row)"
                            [class.text-error-content]="
                                row?.status === 'declined' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.bg-error]="
                                row?.status === 'declined' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.text-neutral-content]="
                                row?.status === 'ended' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.bg-neutral]="
                                row?.status === 'ended' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.opacity-30]="
                                isStatusActionDisabled(row) &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row)
                            "
                            [class.text-warning-content]="
                                row?.status === 'tentative' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row) &&
                                !isVisibleWaitlisted(row)
                            "
                            [class.bg-warning]="
                                row?.status === 'tentative' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row) &&
                                !isVisibleWaitlisted(row)
                            "
                            [class.text-info-content]="
                                row?.status === 'tentative' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row) &&
                                isVisibleWaitlisted(row)
                            "
                            [class.bg-info]="
                                row?.status === 'tentative' &&
                                !isAssignedBooking(row) &&
                                !isDeletedBooking(row) &&
                                isVisibleWaitlisted(row)
                            "
                            [matMenuTriggerFor]="menu"
                            [disabled]="isStatusActionDisabled(row)"
                        >
                            <div class="flex items-center space-x-2 pr-2 pl-4">
                                <div class="flex-1 text-left">
                                    {{ statusLabel(row) | translate }}
                                </div>
                                @if (!isStatusActionDisabled(row)) {
                                    <icon class="text-2xl"
                                        >arrow_drop_down</icon
                                    >
                                }
                            </div>
                        </button>
                    </div>
                    <mat-menu #menu="matMenu">
                        @if (isRecurringInstance(row)) {
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >event_available</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_APPROVE_INSTANCE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row, true)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >event_available</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_APPROVE_SERIES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="reject(row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">event_busy</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_DECLINE_INSTANCE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="reject(row, true)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">event_busy</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_DECLINE_SERIES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        } @else {
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="approve(row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl"
                                        >event_available</icon
                                    >
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_APPROVE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                [disabled]="!canApproveBooking(row)"
                                (click)="reject(row)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">event_busy</icon>
                                    <div class="pr-2">
                                        {{
                                            'APP.CONCIERGE.PARKING_DECLINE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                </ng-template>
                <ng-template #requested_at_template let-row="row">
                    <div class="px-4 py-2">
                        @if (row.created_at) {
                            {{
                                row.created_at
                                    | date: 'MMM d, ' + time_format : timezone
                            }}
                        } @else {
                            <span class="opacity-30">
                                {{ 'COMMON.EMPTY' | translate }}
                            </span>
                        }
                    </div>
                </ng-template>
                <ng-template #user_groups_template let-row="row">
                    <div class="px-4 py-2">{{ row.user_groups }}</div>
                </ng-template>
                <ng-template #action_template let-row="row">
                    <div class="flex w-full items-center justify-end gap-2 p-2">
                        @if (isRequest(row) && !hide_assign_space) {
                            <button
                                icon
                                default
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended'
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                        | translate
                                "
                                (click)="assignSpace(row)"
                            >
                                <icon>add_location</icon>
                            </button>
                        }
                        @if (canEdit(row)) {
                            <button
                                icon
                                default
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended' ||
                                    row.instance
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.PARKING_EDIT' | translate
                                "
                                (click)="editReservation(row)"
                            >
                                <icon>edit</icon>
                            </button>
                        }
                        @if (can_delete()) {
                            <button
                                icon
                                default
                                error
                                matRipple
                                [disabled]="
                                    row.checked_in ||
                                    row.state === 'in_progress' ||
                                    row.status === 'ended'
                                "
                                [matTooltip]="
                                    'APP.CONCIERGE.BOOKING_REMOVE_TITLE'
                                        | translate
                                "
                                (click)="removeBooking(row)"
                            >
                                <icon>delete</icon>
                            </button>
                        }
                    </div>
                </ng-template>
                <div class="h-20 w-full"></div>
            }
            @if (!loading().includes('[BOOKINGS]') && has_more_pages()) {
                <button
                    matRipple
                    class="border-base-300 bg-base-100 fixed bottom-2 left-1/2 flex items-center gap-2 rounded-full border px-3 py-2 text-sm shadow-xl"
                    (click)="loadMore()"
                >
                    <icon>arrow_cool_down</icon>
                    <div class="pr-1">{{ 'COMMON.LOAD_MORE' | translate }}</div>
                </button>
            }
        </div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      CustomTooltipComponent,
      MatMenuModule,
      MatTooltipModule,
      ParkingBookingsWeekViewComponent,
      ParkingSpacePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsListComponent, { className: "ParkingBookingsListComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-list.component.ts", lineNumber: 590 });
})();

// apps/concierge/src/app/parking/parking-fleet-list.component.ts
var _c03 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "car_model", name: a0 });
var _c22 = (a0) => ({ key: "car_colour", name: a0 });
var _c3 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c4 = (a0) => ({ key: "notes", name: a0 });
var _c5 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c6 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingFleetListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const data_r2 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r1.id, " ");
  }
}
function ParkingFleetListComponent_ng_template_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingFleetListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingFleetListComponent_ng_template_10_Conditional_2_Template, 3, 3, "span", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r3 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r3, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r3 ? 2 : -1);
  }
}
function ParkingFleetListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "button", 12);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingFleetListComponent_ng_template_12_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editFleetVehicle(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 13);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingFleetListComponent_ng_template_12_Template_button_click_5_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.removeFleetVehicle(row_r5));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_FLEET_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_FLEET_REMOVE"));
  }
}
var ParkingFleetListComponent = class _ParkingFleetListComponent {
  constructor() {
    this._state = inject(ParkingStateService);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.fleet_list = this._state.fleet_vehicles;
    this.editFleetVehicle = (vehicle) => this._state.editFleetVehicle(vehicle);
    this.removeFleetVehicle = (vehicle) => this._state.removeFleetVehicle(vehicle);
  }
  static {
    this.\u0275fac = function ParkingFleetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFleetListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFleetListComponent, selectors: [["parking-fleet-list"]], decls: 15, vars: 37, consts: [["name_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-fit", "px-8"], [1, "w-full"], [1, "block", "min-w-272", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", 3, "click", "matTooltip"]], template: function ParkingFleetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3);
        \u0275\u0275element(1, "mat-progress-bar", 4)(2, "simple-table", 5);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275template(8, ParkingFleetListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, ParkingFleetListComponent_ng_template_10_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, ParkingFleetListComponent_ng_template_12_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(14, "div", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const name_template_r7 = \u0275\u0275reference(9);
        const plate_template_r8 = \u0275\u0275reference(11);
        const action_template_r9 = \u0275\u0275reference(13);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("fleet"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.fleet_list())("columns", \u0275\u0275pureFunction6(30, _c6, \u0275\u0275pureFunction2(16, _c03, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.PARKING_FLEET"), name_template_r7), \u0275\u0275pureFunction1(19, _c12, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PARKING_FLEET_MODEL")), \u0275\u0275pureFunction1(21, _c22, \u0275\u0275pipeBind1(5, 10, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(23, _c3, \u0275\u0275pipeBind1(6, 12, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r8), \u0275\u0275pureFunction1(26, _c4, \u0275\u0275pipeBind1(7, 14, "FORM.NOTES")), \u0275\u0275pureFunction1(28, _c5, action_template_r9)))("filter", ctx.options().search)("sortable", true);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressBarModule,
      MatProgressBar,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      SimpleTableComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingFleetListComponent, [{
    type: Component,
    args: [{ selector: "parking-fleet-list", template: `
        <div class="w-fit px-8">
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('fleet')"
                class="w-full"
            />
            <simple-table
                class="block min-w-272 text-sm"
                [data]="fleet_list()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_FLEET' | translate,
                        content: name_template,
                    },
                    {
                        key: 'car_model',
                        name: 'APP.CONCIERGE.PARKING_FLEET_MODEL' | translate,
                    },
                    {
                        key: 'car_colour',
                        name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6rem',
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
            />
            <ng-template #name_template let-row="row" let-data="data">
                <div class="px-4 py-2 leading-tight">
                    <div>{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.id }}
                    </div>
                </div>
            </ng-template>
            <ng-template #plate_template let-data="data">
                <div class="p-4 font-mono text-sm uppercase">
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center gap-2">
                    <button
                        icon
                        default
                        matRipple
                        (click)="editFleetVehicle(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_FLEET_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        error
                        (click)="removeFleetVehicle(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_FLEET_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `, imports: [
      MatRippleModule,
      MatProgressBarModule,
      MatTooltipModule,
      IconComponent,
      SimpleTableComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFleetListComponent, { className: "ParkingFleetListComponent", filePath: "apps/concierge/src/app/parking/parking-fleet-list.component.ts", lineNumber: 111 });
})();

// libs/explore/src/lib/explore-parking.service.ts
var ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building = this._org.active_building;
    this._active_levels = this._org.active_levels;
    this._parking_users = this._parking.users;
    this._assigned_space = this._parking.assigned_space;
    this._deny_parking_access = this._parking.deny_parking_access;
    this._booked_space = this._parking.booked_space;
    this.options = this._options.asReadonly();
    this.on_book = null;
    this.levels = computed(
      () => this._active_levels().filter((_) => _.tags.includes("parking")),
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Wu(bld.id, `parking_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(
      () => this._booking_rules.value() ?? [],
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        is_public: this._state.options().is_public,
        level_id: this._state.level()?.id,
        date: this._options().date,
        all_day: this._options().all_day,
        duration: this._options().duration,
        poll: this._poll()
      }),
      loader: ({ params: { is_public, level_id, date, all_day, duration } }) => {
        const time = date ?? Date.now();
        const bookable_hours = all_day ? this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null : null;
        const all_day_range = getAllDayTimeRange(time, "", bookable_hours?.start, bookable_hours?.end);
        return is_public || !level_id ? Promise.resolve([]) : queryAllBookings({
          period_start: getUnixTime(all_day ? all_day_range.date : duration ? time : addMinutes(time, -15)),
          period_end: getUnixTime(all_day ? all_day_range.date_end : addMinutes(time, duration || 30)),
          type: "parking",
          zones: level_id,
          rejected: false
        }).catch(() => []);
      }
    }));
    this.events = computed(
      () => this._events.value() ?? [],
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        date: this._options().date,
        user: this._options().user
      }),
      loader: ({ params: { date, user } }) => queryBookings({
        period_start: getUnixTime(startOfDay(date || Date.now())),
        period_end: getUnixTime(endOfDay(date || Date.now())),
        type: "parking",
        email: user || currentUser()?.email
      }).catch(() => [])
    }));
    this.user_events = computed(
      () => this._user_events.value() ?? [],
      ...ngDevMode ? [{ debugName: "user_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const levels = this.levels();
        return levels.length ? levels.map((l) => l.id) : void 0;
      },
      loader: ({ params: zones }) => queryParkingSpacesForZones(zones).catch(() => [])
    }));
    this.spaces = computed(
      () => this._spaces.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_spaces = computed(
      () => {
        const level = this._state.level();
        return level ? this.spaces().filter((_) => _.zone_id === level.id) : [];
      },
      ...ngDevMode ? [{ debugName: "active_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users = {};
    this._plate_numbers = {};
    this._available_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_spaces = this._available_spaces.asReadonly();
    effect(() => {
      const events = this.events();
      const spaces = this.active_spaces();
      const users = this._parking_users();
      const rules = this.booking_rules();
      const { date } = this._options();
      untracked(() => {
        const available = spaces.filter((space) => {
          const event = events.find((e) => e.asset_id === space.id && !e.rejected);
          const level = this._org.levelWithID([space.zone_id]);
          const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
          const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
          const is_restricted = rulesForResource({
            date: date || Date.now(),
            duration: 60,
            host: currentUser(),
            resource: {
              id: space.id,
              zones: [level?.parent_id, level?.id]
            }
          }, rules)?.hidden;
          this._users[space.id] = assigned;
          this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
          return !event && !is_restricted && space.bookable !== false;
        });
        this._available_spaces.set(available);
        this._updateParkingSpaces(spaces, available);
      });
    });
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.set(Date.now()), 10 * 1e3);
    this._poll.set(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.update((value) => __spreadValues(__spreadValues({}, value), options));
  }
  _updateParkingSpaces(spaces, available) {
    const styles = {};
    const features = [];
    const actions = [];
    const colours = this._settings.get("app.explore.colors") || {};
    let options = this._options();
    for (const space of spaces) {
      const can_book = !!available.find((_) => _.id === space.id);
      const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
      const is_assigned = is_workplace ? false : !!space.assigned_to;
      const id = space.map_id || space.id;
      const status = space.bookable === false ? "not-bookable" : is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
      styles[`#${id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
      features.push({
        location: `${id}`,
        content: ExploreParkingInfoComponent,
        z_index: 20,
        hover: true,
        data: __spreadProps(__spreadValues({}, space), {
          user: this._users[space.id],
          plate_number: this._plate_numbers[space.id],
          status: status === "pending" && is_assigned ? "reserved" : status
        })
      });
      if (!can_book)
        continue;
      const book_fn = async () => {
        if (this.on_book) {
          await this.on_book(space);
          this._poll.set(Date.now());
          return;
        }
        if (this._deny_parking_access()) {
          const space_zone = this._org.levelWithID([space.zone_id]);
          return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
            name: space_zone?.display_name || space_zone?.name
          }));
        }
        if (this._assigned_space() && this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
            name: space.name || space.id
          }));
        }
        if (this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
        }
        if (status !== "free") {
          return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
            name: space.name || "Parking Space"
          }));
        }
        if (space.place_groups?.length && !space.place_groups.find((_) => currentUser().groups.includes(_))) {
          return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
            name: space.name
          }));
        }
        this._bookings.newForm("parking");
        this._bookings.setOptions({ type: "parking" });
        options = this._options();
        const bookable_hours = this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
        if (bookable_hours && !this._settings.get("app.parking.allow_time_changes") && !isWithinBookableHours(Date.now(), bookable_hours)) {
          return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
        }
        let user = options.host || currentUser();
        const user_email = user?.email;
        const zone = this._org.levelWithID([
          space.zone_id || space.zone
        ]) || this._state.active_level;
        let date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
        if (bookable_hours) {
          date = alignDateToBookableHours(date, bookable_hours);
        }
        this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
          resources: [space],
          asset_id: space.id,
          asset_name: space.name,
          date,
          duration: 11 * 60,
          all_day: true,
          map_id: space?.map_id || space?.id,
          description: space.name,
          user,
          user_email,
          booking_type: "parking",
          zones: [
            this._org.organisation.id,
            this._org.region?.id,
            zone?.parent_id,
            zone?.id
          ]
        }));
        await this._bookings.confirmPost().catch((e) => {
          if (e === "User cancelled")
            throw e;
          notifyError(i18n("EXPLORE.PARKING_BOOKING_ERROR", {
            name: space.name || space.id,
            error: e.message || e.error || e
          }));
          throw e;
        });
        notifySuccess(i18n("EXPLORE.PARKING_BOOKING_SUCCESS", {
          name: space.name || space.id
        }));
        this.timeout("poll", () => this._poll.set(Date.now()), 1e3);
      };
      actions.push({
        id,
        action: "click",
        priority: 10,
        callback: book_fn
      });
    }
    this._state.setActions("parking", options.enable_booking ? actions : []);
    this._state.setStyles("parking", styles);
    this._state.setFeatures("parking", features);
  }
  static {
    this.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// apps/concierge/src/app/parking/parking-map.component.ts
var _c04 = () => ({ controls: true });
var _forTrack02 = ($index, $item) => $item.hour;
function ParkingMapComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r1 = ctx.$implicit;
    \u0275\u0275property("value", option_r1.hour);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, option_r1.date, "h a"), " ");
  }
}
var ParkingMapComponent = class _ParkingMapComponent extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._ex_parking = inject(ExploreParkingService);
    this._parking = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._parking.options;
    this.url = this._explore.map_url;
    this.raw_styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.disable_styles = this._settings.signal("parking.disable_styles", false);
    this.selected_hour = computed(
      () => this.options().all_day === false ? new Date(this.options().date).getHours() : "all_day",
      ...ngDevMode ? [{ debugName: "selected_hour" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hour_options = computed(
      () => {
        const bookable_hours = this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours");
        const start = bookable_hours?.start ?? 0;
        const end = bookable_hours?.end ?? 24;
        const date = new Date(this.options().date);
        return Array.from({ length: end - start }, (_, index) => {
          const hour = start + index;
          const option_date = new Date(date);
          option_date.setHours(hour, 0, 0, 0);
          return { hour, date: option_date.valueOf() };
        });
      },
      ...ngDevMode ? [{ debugName: "hour_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = computed(
      () => {
        const style_map = __spreadValues({}, this.raw_styles());
        if (!this.disable_styles())
          return style_map;
        for (const feature of this.features()) {
          if (feature.location)
            delete style_map[`#${feature.location}`];
        }
        return style_map;
      },
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locate = "";
    this.setAvailabilityHour = (hour) => {
      const date = new Date(this.options().date);
      if (hour !== "all_day")
        date.setHours(hour, 0, 0, 0);
      this._parking.setOptions({
        date: date.valueOf(),
        all_day: hour === "all_day",
        duration: 60
      });
    };
    effect(() => {
      if (!this._ready())
        return;
      const options = this.options();
      const level_list = this._org.levelsForBuilding();
      const zone = options.zones[0] || level_list.find((level) => level.tags.includes("parking"))?.id;
      this._explore.setLevel(zone);
      this._ex_parking.setOptions(options);
    });
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this._ready.set(true);
    this.subscription("parking_poll", this._ex_parking.startPolling());
    this._ex_parking.on_book = async (space) => {
      await this._parking.editReservation(void 0, {
        space: __spreadProps(__spreadValues({}, space), {
          zone: this._org.levelWithID([space.zone_id || space.zone])
        }),
        date: this.options().date
      });
    };
  }
  static {
    this.\u0275fac = function ParkingMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-map"]], features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 13, vars: 15, consts: [[1, "bg-base-200", "relative", "mx-8", "my-2", "h-[calc(100%-1.5rem)]", "w-[calc(100%-4rem)]", "rounded-xl", "shadow-sm"], [1, "bg-base-100", "border-base-300", "absolute", "top-4", "right-4", "z-20", "rounded-lg", "border", "p-2", "shadow-lg"], ["appearance", "outline", 1, "no-subscript", "w-48"], ["aria-label", "Parking availability time", 3, "selectionChange", "value"], ["value", "all_day"], [3, "value"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]], template: function ParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "mat-form-field", 2)(3, "mat-label");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "mat-select", 3);
        \u0275\u0275listener("selectionChange", function ParkingMapComponent_Template_mat_select_selectionChange_6_listener($event) {
          return ctx.setAvailabilityHour($event.value);
        });
        \u0275\u0275elementStart(7, "mat-option", 4);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, ParkingMapComponent_For_11_Template, 3, 5, "mat-option", 5, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275element(12, "interactive-map", 6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 10, "COMMON.AVAILABILITY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("value", ctx.selected_hour());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 12, "COMMON.ALL_DAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.hour_options());
        \u0275\u0275advance(2);
        \u0275\u0275property("src", ctx.url())("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("options", \u0275\u0275pureFunction0(14, _c04))("focus", ctx.locate);
      }
    }, dependencies: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatFormField,
      MatLabel,
      MatSelectModule,
      MatSelect,
      MatOption,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingMapComponent, [{
    type: Component,
    args: [{ selector: "parking-map", template: `
        <div
            class="bg-base-200 relative mx-8 my-2 h-[calc(100%-1.5rem)] w-[calc(100%-4rem)] rounded-xl shadow-sm"
        >
            <div
                class="bg-base-100 border-base-300 absolute top-4 right-4 z-20 rounded-lg border p-2 shadow-lg"
            >
                <mat-form-field appearance="outline" class="no-subscript w-48">
                    <mat-label>
                        {{ 'COMMON.AVAILABILITY' | translate }}
                    </mat-label>
                    <mat-select
                        [value]="selected_hour()"
                        (selectionChange)="setAvailabilityHour($event.value)"
                        aria-label="Parking availability time"
                    >
                        <mat-option value="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-option>
                        @for (option of hour_options(); track option.hour) {
                            <mat-option [value]="option.hour">
                                {{ option.date | date: 'h a' }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <interactive-map
                [src]="url()"
                [styles]="styles()"
                [features]="features()"
                [actions]="actions()"
                [labels]="labels()"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `, providers: [ExploreParkingService], imports: [
      CommonModule,
      InteractiveMapComponent,
      MatFormFieldModule,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "apps/concierge/src/app/parking/parking-map.component.ts", lineNumber: 71 });
})();

// apps/concierge/src/app/parking/parking-space-list.component.ts
var _c05 = (a0, a1) => ({ key: "identifier", name: a0, content: a1 });
var _c13 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c23 = (a0, a1) => ({ key: "features", name: a0, content: a1 });
var _c32 = (a0) => ({ key: "notes", name: a0 });
var _c42 = (a0, a1) => ({ key: "bookable", name: a0, content: a1, size: "5.5rem" });
var _c52 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false, size: "4.5rem" });
var _c62 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c7 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function ParkingSpaceListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-warning", !ctx_r1.space_status()[row_r1.id]?.includes("free") && !ctx_r1.space_status()[row_r1.id]?.includes("busy"))("text-warning-content", !ctx_r1.space_status()[row_r1.id]?.includes("free") && !ctx_r1.space_status()[row_r1.id]?.includes("busy"))("bg-success", ctx_r1.space_status()[row_r1.id]?.includes("free"))("text-success-content", ctx_r1.space_status()[row_r1.id]?.includes("free"))("bg-error", ctx_r1.space_status()[row_r1.id]?.includes("busy"))("text-error-content", ctx_r1.space_status()[row_r1.id]?.includes("busy"));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 14, ctx_r1.statusTooltip(ctx_r1.space_status()[row_r1.id])));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.space_status()[row_r1.id]?.includes("assigned") ? "person" : ctx_r1.space_status()[row_r1.id]?.includes("reuse") ? "event_available" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_10_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(row_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    const data_r5 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r5);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r4.map_id || row_r4.id, " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7, " ");
  }
}
function ParkingSpaceListComponent_ng_template_12_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_12_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r7 = \u0275\u0275nextContext().data;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(data_r7, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingSpaceListComponent_ng_template_12_Conditional_1_Conditional_3_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r7 = \u0275\u0275nextContext();
    const row_r9 = ctx_r7.row;
    const data_r7 = ctx_r7.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r9.assigned_name || data_r7);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r9.assigned_name ? 3 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingSpaceListComponent_ng_template_12_Conditional_0_Template, 3, 3, "div", 15);
    \u0275\u0275conditionalCreate(1, ParkingSpaceListComponent_ng_template_12_Conditional_1_Template, 4, 2, "button", 16);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(!data_r7 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r7 ? 1 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10, " ");
  }
}
function ParkingSpaceListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275repeaterCreate(1, ParkingSpaceListComponent_ng_template_14_For_2_Template, 2, 1, "span", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r11);
  }
}
function ParkingSpaceListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_16_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSpace(row_r13));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 21);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_16_Template_button_click_5_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSpace(row_r13));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_SPACE_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_SPACE_REMOVE"));
  }
}
function ParkingSpaceListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 11);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    \u0275\u0275classProp("bg-success", row_r14.bookable)("text-success-content", row_r14.bookable)("bg-base-300", !row_r14.bookable)("text-base-content", !row_r14.bookable);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r14.bookable ? "done" : "close", " ");
  }
}
var ParkingSpaceListComponent = class _ParkingSpaceListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.space_status = computed(
      () => {
        const status = {};
        for (const space of this.spaces()) {
          const booking = this.bookings().find((_) => _.asset_id === space.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
          if (space.assigned_to && !booking) {
            status[space.id] = "assigned_free";
          } else if (space.assigned_to && booking && booking.user_email === space.assigned_to) {
            status[space.id] = "assigned_busy";
          } else if (space.assigned_to && booking && booking.user_email !== space.assigned_to) {
            status[space.id] = "reuse_busy";
          } else if (!space.assigned_to && booking) {
            status[space.id] = "busy";
          } else {
            status[space.id] = "free";
          }
        }
        return status;
      },
      ...ngDevMode ? [{ debugName: "space_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.editSpace = (s) => this._state.editSpace(s);
    this.removeSpace = (s) => this._state.removeSpace(s);
  }
  copyToClipboard(id, type) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n(type ? "APP.CONCIERGE.PARKING_COPIED_USER" : "APP.CONCIERGE.PARKING_COPIED_ID"));
  }
  statusTooltip(status) {
    switch (status) {
      case "assigned_free":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_FREE";
      case "assigned_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_BUSY";
      case "reuse_busy":
        return "APP.CONCIERGE.PARKING_STATUS_ASSIGNED_OTHER";
      case "busy":
        return "APP.CONCIERGE.PARKING_STATUS_BUSY";
      case "free":
        return "APP.CONCIERGE.PARKING_STATUS_FREE";
    }
    return "APP.CONCIERGE.PARKING_STATUS_FREE";
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingSpaceListComponent_BaseFactory;
      return function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingSpaceListComponent_BaseFactory || (\u0275ParkingSpaceListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingSpaceListComponent)))(__ngFactoryType__ || _ParkingSpaceListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 42, consts: [["status_template", ""], ["name_template", ""], ["assigned_template", ""], ["item_list_template", ""], ["action_template", ""], ["bookable_template", ""], [1, "w-fit", "px-8"], [1, "w-full"], [1, "block", "min-w-220", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], ["matTooltipPosition", "left", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", "error", "", 3, "click", "matTooltip"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 6);
        \u0275\u0275element(1, "mat-progress-bar", 7)(2, "simple-table", 8);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275template(8, ParkingSpaceListComponent_ng_template_8_Template, 4, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, ParkingSpaceListComponent_ng_template_10_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, ParkingSpaceListComponent_ng_template_12_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, ParkingSpaceListComponent_ng_template_14_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(16, ParkingSpaceListComponent_ng_template_16_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(18, ParkingSpaceListComponent_ng_template_18_Template, 3, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(20, "div", 9);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const status_template_r15 = \u0275\u0275reference(9);
        const name_template_r16 = \u0275\u0275reference(11);
        const assigned_template_r17 = \u0275\u0275reference(13);
        const item_list_template_r18 = \u0275\u0275reference(15);
        const action_template_r19 = \u0275\u0275reference(17);
        const bookable_template_r20 = \u0275\u0275reference(19);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("spaces"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.spaces())("columns", \u0275\u0275pureFunction7(34, _c7, \u0275\u0275pureFunction2(16, _c05, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.PARKING_BAY"), name_template_r16), \u0275\u0275pureFunction1(19, _c13, assigned_template_r17), \u0275\u0275pureFunction2(21, _c23, \u0275\u0275pipeBind1(4, 8, "COMMON.FEATURES"), item_list_template_r18), \u0275\u0275pureFunction1(24, _c32, \u0275\u0275pipeBind1(5, 10, "FORM.NOTES")), \u0275\u0275pureFunction2(26, _c42, \u0275\u0275pipeBind1(6, 12, "COMMON.BOOKABLE"), bookable_template_r20), \u0275\u0275pureFunction2(29, _c52, \u0275\u0275pipeBind1(7, 14, "COMMON.STATUS"), status_template_r15), \u0275\u0275pureFunction1(32, _c62, action_template_r19)))("filter", ctx.options().search)("sortable", true);
      }
    }, dependencies: [
      MatProgressBarModule,
      MatProgressBar,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      SimpleTableComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListComponent, [{
    type: Component,
    args: [{ selector: "parking-space-list", template: `
        <div class="w-fit px-8">
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('spaces')"
                class="w-full"
            />
            <simple-table
                class="block min-w-220 text-sm"
                [data]="spaces()"
                [columns]="[
                    {
                        key: 'identifier',
                        name: 'APP.CONCIERGE.PARKING_BAY' | translate,
                        content: name_template,
                    },
                    {
                        key: 'assigned_to',
                        name: 'Assigned',
                        content: assigned_template,
                    },
                    {
                        key: 'features',
                        name: 'COMMON.FEATURES' | translate,
                        content: item_list_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'bookable',
                        name: 'COMMON.BOOKABLE' | translate,
                        content: bookable_template,
                        size: '5.5rem',
                    },
                    {
                        key: 'status',
                        name: 'COMMON.STATUS' | translate,
                        content: status_template,
                        sortable: false,
                        size: '4.5rem',
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6rem',
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
            />
            <ng-template #status_template let-row="row">
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-warning]="
                        !space_status()[row.id]?.includes('free') &&
                        !space_status()[row.id]?.includes('busy')
                    "
                    [class.text-warning-content]="
                        !space_status()[row.id]?.includes('free') &&
                        !space_status()[row.id]?.includes('busy')
                    "
                    [class.bg-success]="
                        space_status()[row.id]?.includes('free')
                    "
                    [class.text-success-content]="
                        space_status()[row.id]?.includes('free')
                    "
                    [class.bg-error]="space_status()[row.id]?.includes('busy')"
                    [class.text-error-content]="
                        space_status()[row.id]?.includes('busy')
                    "
                    [matTooltip]="
                        statusTooltip(space_status()[row.id]) | translate
                    "
                    matTooltipPosition="left"
                >
                    <icon class="text-2xl">
                        {{
                            space_status()[row.id]?.includes('assigned')
                                ? 'person'
                                : space_status()[row.id]?.includes('reuse')
                                  ? 'event_available'
                                  : 'question_mark'
                        }}
                    </icon>
                </div>
            </ng-template>
            <ng-template #name_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.id)"
                >
                    <div class="">{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.map_id || row.id }}
                    </div>
                </button>
            </ng-template>
            <ng-template #assigned_template let-row="row" let-data="data">
                @if (!data) {
                    <div class="p-4 opacity-30">
                        {{ 'APP.CONCIERGE.UNASSIGNED' | translate }}
                    </div>
                }
                @if (data) {
                    <button
                        class="px-4 py-2 text-left leading-tight"
                        (click)="copyToClipboard(data, 'assigned')"
                    >
                        <div class="">{{ row.assigned_name || data }}</div>
                        @if (row.assigned_name) {
                            <div class="font-mono text-[0.625rem] opacity-30">
                                {{ data }}
                            </div>
                        }
                    </button>
                }
            </ng-template>
            <ng-template #item_list_template let-data="data">
                <div class="flex flex-wrap p-2">
                    @for (item of data; track item) {
                        <span
                            class="bg-info text-info-content m-1 rounded-2xl px-2 py-1 font-mono text-xs"
                        >
                            {{ item }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center gap-2">
                    <button
                        icon
                        default
                        matRipple
                        (click)="editSpace(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_SPACE_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        matRipple
                        error
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_SPACE_REMOVE' | translate
                        "
                        (click)="removeSpace(row)"
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <ng-template #bookable_template let-row="row">
                <div
                    class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                    [class.bg-success]="row.bookable"
                    [class.text-success-content]="row.bookable"
                    [class.bg-base-300]="!row.bookable"
                    [class.text-base-content]="!row.bookable"
                >
                    <icon class="text-2xl">
                        {{ row.bookable ? 'done' : 'close' }}
                    </icon>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `, imports: [
      MatProgressBarModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      SimpleTableComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "apps/concierge/src/app/parking/parking-space-list.component.ts", lineNumber: 199 });
})();

// apps/concierge/src/app/parking/parking-users-list.component.ts
var _c06 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c14 = (a0) => ({ key: "car_colour", name: a0 });
var _c24 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c33 = (a0) => ({ key: "notes", name: a0 });
var _c43 = (a0, a1) => ({ key: "deny", name: a0, size: "4.5rem", content: a1 });
var _c53 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6rem" });
var _c63 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingUsersListComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_8_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r2 = ctx.row;
    const data_r4 = ctx.data;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(data_r4);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", row_r2.email, " ");
  }
}
function ParkingUsersListComponent_ng_template_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUsersListComponent_ng_template_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingUsersListComponent_ng_template_10_Conditional_0_Template, 3, 0, "div", 11);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275conditional(data_r5 ? 0 : -1);
  }
}
function ParkingUsersListComponent_ng_template_12_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingUsersListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingUsersListComponent_ng_template_12_Conditional_2_Template, 3, 3, "span", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r6 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r6, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!data_r6 ? 2 : -1);
  }
}
function ParkingUsersListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_14_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_14_Template_button_click_5_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeUser(row_r8));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_USER_EDIT"));
    \u0275\u0275advance(4);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 4, "APP.CONCIERGE.PARKING_USER_REMOVE"));
  }
}
var ParkingUsersListComponent = class _ParkingUsersListComponent {
  constructor() {
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.user_list = this._state.users;
    this.editUser = (u) => this._state.editUser(u);
    this.removeUser = (u) => this._state.removeUser(u);
  }
  copyToClipboard(id) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n("APP.CONCIERGE.PARKING_COPIED_USER"));
  }
  static {
    this.\u0275fac = function ParkingUsersListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingUsersListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUsersListComponent, selectors: [["parking-users-list"]], decls: 17, vars: 38, consts: [["name_template", ""], ["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-fit", "px-8"], [1, "w-full"], [1, "block", "min-w-272", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-error", "text-error-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "gap-2"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "error", "", 3, "click", "matTooltip"]], template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 4);
        \u0275\u0275element(1, "mat-progress-bar", 5)(2, "simple-table", 6);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275template(8, ParkingUsersListComponent_ng_template_8_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(10, ParkingUsersListComponent_ng_template_10_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(12, ParkingUsersListComponent_ng_template_12_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(14, ParkingUsersListComponent_ng_template_14_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(16, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(9);
        const denied_template_r10 = \u0275\u0275reference(11);
        const plate_template_r11 = \u0275\u0275reference(13);
        const action_template_r12 = \u0275\u0275reference(15);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("users"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.user_list())("columns", \u0275\u0275pureFunction6(31, _c63, \u0275\u0275pureFunction2(16, _c06, \u0275\u0275pipeBind1(3, 6, "APP.CONCIERGE.PARKING_USER"), name_template_r9), \u0275\u0275pureFunction1(19, _c14, \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(21, _c24, \u0275\u0275pipeBind1(5, 10, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r11), \u0275\u0275pureFunction1(24, _c33, \u0275\u0275pipeBind1(6, 12, "FORM.NOTES")), \u0275\u0275pureFunction2(26, _c43, \u0275\u0275pipeBind1(7, 14, "APP.CONCIERGE.PARKING_USER_DENY"), denied_template_r10), \u0275\u0275pureFunction1(29, _c53, action_template_r12)))("filter", ctx.options().search)("sortable", true);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressBarModule,
      MatProgressBar,
      IconComponent,
      SimpleTableComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingUsersListComponent, [{
    type: Component,
    args: [{ selector: "parking-users-list", template: `
        <div class="w-fit px-8">
            <mat-progress-bar
                [class.opacity-0]="!loading().includes('users')"
                class="w-full"
            />
            <simple-table
                class="block min-w-272 text-sm"
                [data]="user_list()"
                [columns]="[
                    {
                        key: 'name',
                        name: 'APP.CONCIERGE.PARKING_USER' | translate,
                        content: name_template,
                    },
                    {
                        key: 'car_colour',
                        name: 'APP.CONCIERGE.PARKING_CAR_COLOUR' | translate,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                    },
                    { key: 'notes', name: 'FORM.NOTES' | translate },
                    {
                        key: 'deny',
                        name: 'APP.CONCIERGE.PARKING_USER_DENY' | translate,
                        size: '4.5rem',
                        content: denied_template,
                    },
                    {
                        key: 'actions',
                        name: ' ',
                        content: action_template,
                        sortable: false,
                        size: '6rem',
                    },
                ]"
                [filter]="options().search"
                [sortable]="true"
            />
            <ng-template #name_template let-row="row" let-data="data">
                <button
                    class="px-4 py-2 text-left leading-tight"
                    (click)="copyToClipboard(row.id)"
                >
                    <div class="">{{ data }}</div>
                    <div class="font-mono text-[0.625rem] opacity-30">
                        {{ row.email }}
                    </div>
                </button>
            </ng-template>
            <ng-template #denied_template let-data="data">
                @if (data) {
                    <div
                        class="bg-error text-error-content mx-auto flex h-8 w-8 items-center justify-center rounded-sm text-2xl"
                    >
                        <icon>close</icon>
                    </div>
                }
            </ng-template>
            <ng-template #plate_template let-data="data">
                <div class="p-4 font-mono text-sm uppercase">
                    {{ data }}
                    @if (!data) {
                        <span class="opacity-30">
                            {{ 'COMMON.EMPTY' | translate }}
                        </span>
                    }
                </div>
            </ng-template>
            <ng-template #action_template let-row="row">
                <div class="mx-auto flex items-center gap-2">
                    <button
                        icon
                        default
                        matRipple
                        (click)="editUser(row)"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_USER_EDIT' | translate
                        "
                    >
                        <icon>edit</icon>
                    </button>
                    <button
                        icon
                        default
                        (click)="removeUser(row)"
                        error
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                        "
                    >
                        <icon>delete</icon>
                    </button>
                </div>
            </ng-template>
            <div class="h-20 w-full"></div>
        </div>
    `, imports: [
      MatRippleModule,
      MatProgressBarModule,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUsersListComponent, { className: "ParkingUsersListComponent", filePath: "apps/concierge/src/app/parking/parking-users-list.component.ts", lineNumber: 128 });
})();

// apps/concierge/src/app/parking/parking-topbar.component.ts
var _c07 = () => ["events", "list"];
var _c15 = () => ["events", "map"];
var _forTrack03 = ($index, $item) => $item.value;
function ParkingTopbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 3)(1, "mat-select", 16);
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Conditional_5_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPeriod($event));
    });
    \u0275\u0275elementStart(2, "mat-option", 17);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "mat-option", 18);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.period());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.DAY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 5, "COMMON.WEEK"), " ");
  }
}
function ParkingTopbarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 19);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_7_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingSpace());
    });
    \u0275\u0275elementStart(2, "div", 20);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.options().zones?.length ? "" : "Select a level to add a space");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", !ctx_r1.options().zones?.length);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.CONCIERGE.PARKING_SPACE_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_8_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingUser());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_USER_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newFleetVehicle());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_FLEET_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_10_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newRequest());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "playlist_add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_REQUEST_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_10_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.newReservation());
    });
    \u0275\u0275elementStart(1, "div", 20);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.CONCIERGE.PARKING_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingTopbarComponent_Conditional_10_Conditional_0_Template, 6, 3, "button", 23)(1, ParkingTopbarComponent_Conditional_10_Conditional_1_Template, 6, 3, "button", 24);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.can_view_requests ? 0 : 1);
  }
}
function ParkingTopbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 28);
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 29);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 28);
    \u0275\u0275text(8, "map");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r1.view() === "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c07))("matTooltip", \u0275\u0275pipeBind1(2, 8, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c15))("matTooltip", \u0275\u0275pipeBind1(6, 10, "COMMON.MAP"));
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_1_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r9 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r9.parent_id)?.display_name, " ");
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33)(1, "div", 34);
    \u0275\u0275conditionalCreate(2, ParkingTopbarComponent_Conditional_13_Conditional_1_For_3_Conditional_2_Template, 5, 3, "div", 35);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", level_r9.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r9.display_name || level_r9.name, " ");
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-select", 32);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Conditional_13_Conditional_1_Template_mat_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateSingleZone($event));
    });
    \u0275\u0275repeaterCreate(2, ParkingTopbarComponent_Conditional_13_Conditional_1_For_3_Template, 5, 3, "mat-option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r1.selected_zone())("placeholder", \u0275\u0275pipeBind1(1, 2, "COMMON.LEVEL_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_2_For_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 35);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 36);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const level_r11 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, level_r11.parent_id)?.display_name, " ");
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 33)(1, "div", 34);
    \u0275\u0275conditionalCreate(2, ParkingTopbarComponent_Conditional_13_Conditional_2_For_3_Conditional_2_Template, 5, 3, "div", 35);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("value", level_r11.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r11.display_name || level_r11.name, " ");
  }
}
function ParkingTopbarComponent_Conditional_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-select", 37);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingTopbarComponent_Conditional_13_Conditional_2_Template_mat_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.zones, $event) || (ctx_r1.zones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Conditional_13_Conditional_2_Template_mat_select_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(2, ParkingTopbarComponent_Conditional_13_Conditional_2_For_3_Template, 5, 3, "mat-option", 33, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.zones);
    \u0275\u0275property("disabled", ctx_r1.disable_level_selector_on_booking_list())("placeholder", \u0275\u0275pipeBind1(1, 3, ctx_r1.section() === "manage" ? "COMMON.LEVEL_SELECT" : "COMMON.LEVEL_ALL"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
function ParkingTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-form-field", 10);
    \u0275\u0275conditionalCreate(1, ParkingTopbarComponent_Conditional_13_Conditional_1_Template, 4, 4, "mat-select", 30)(2, ParkingTopbarComponent_Conditional_13_Conditional_2_Template, 4, 5, "mat-select", 31);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "map" ? 1 : 2);
  }
}
function ParkingTopbarComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 39);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "upload");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "input", 40);
    \u0275\u0275listener("change", function ParkingTopbarComponent_Conditional_15_Conditional_1_Template_input_change_4_listener($event) {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.uploadSpacesCSV($event));
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 38);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_15_Conditional_1_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.downloadSpacesCSV());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "download");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 4, "APP.CONCIERGE.PARKING_CSV_UPLOAD"))("disabled", !ctx_r1.options().zones?.length);
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", !ctx_r1.options().zones?.length);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.PARKING_CSV_DOWNLOAD"));
  }
}
function ParkingTopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275conditionalCreate(1, ParkingTopbarComponent_Conditional_15_Conditional_1_Template, 9, 8);
    \u0275\u0275elementStart(2, "button", 38);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_15_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "lock_open");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.view() === "spaces" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(3, 2, "APP.CONCIERGE.PARKING_BOOKING_RULES"));
  }
}
function ParkingTopbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementStart(2, "icon", 41);
    \u0275\u0275text(3, "car_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 42);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const occupied_r14 = ctx_r1.occupied_bookings().length || 0;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", occupied_r14, " of ", ctx_r1.spaces().length || "", " ");
    const percent_r15 = occupied_r14 / (ctx_r1.spaces().length || 0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-error", percent_r15 === 100)("text-error-content", percent_r15 === 100)("bg-warning", percent_r15 > 50 && percent_r15 < 100)("text-warning-content", percent_r15 > 50 && percent_r15 < 100)("bg-success", percent_r15 < 50)("text-success-content", percent_r15 < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(6, 15, percent_r15 * 100, "2.0-0"), "%");
  }
}
function ParkingTopbarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 43);
    \u0275\u0275listener("dateChange", function ParkingTopbarComponent_Conditional_17_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("step", ctx_r1.period() === "week" ? 7 : 1);
  }
}
function ParkingTopbarComponent_Conditional_18_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 45);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_18_For_2_Template_button_click_0_listener() {
      const filter_r18 = \u0275\u0275restoreView(_r17).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.setRequestFilter(filter_r18.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const filter_r18 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("inverse", ctx_r1.options().request_filter !== filter_r18.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, filter_r18.label), " ");
  }
}
function ParkingTopbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275repeaterCreate(1, ParkingTopbarComponent_Conditional_18_For_2_Template, 3, 5, "button", 44, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.filter_options);
  }
}
var ParkingTopbarComponent = class _ParkingTopbarComponent extends AsyncHandler {
  get filter_options() {
    const filter_options = [
      { label: "COMMON.ALL", value: "all" },
      {
        label: "APP.CONCIERGE.PARKING_BOOKING_TYPE_REQUEST",
        value: "requests"
      },
      {
        label: "APP.CONCIERGE.PARKING_BOOKING_TYPE_PENDING_MANUAL",
        value: "manual"
      },
      {
        label: "APP.CONCIERGE.PARKING_BOOKING_TYPE_BOOKED",
        value: "bookings"
      }
    ];
    if (this.show_waitlist) {
      filter_options.splice(3, 0, {
        label: "APP.CONCIERGE.PARKING_BOOKING_TYPE_WAITLISTED",
        value: "waitlist"
      });
    }
    return filter_options;
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get disable_reservations() {
    return !!this._settings.get("app.parking.disable_bookings");
  }
  get show_waitlist() {
    return this._settings.get("app.parking.show_waitlist") !== false;
  }
  get hide_availability_counter() {
    return !!this._settings.get("app.parking.hide_availability_counter");
  }
  get can_view_requests() {
    if (!this._settings.get("app.parking.show_requests"))
      return false;
    const feature_groups = this._settings.get("app.feature_groups") || {};
    const request_groups = feature_groups["parking-requests"] || [];
    const admin_group = this._settings.get("app.admin_group") || "admin";
    const groups = currentUser()?.groups || [];
    return groups.includes(admin_group) || groups.includes("placeos_admin") || groups.includes("placeos_support") || !request_groups.length || groups.some((grp) => request_groups.includes(grp));
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "parking" }
    });
  }
  constructor() {
    super();
    this._state = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params = toSignal(this._route.queryParamMap, {
      initialValue: this._route.snapshot.queryParamMap
    });
    this._route_change = signal(
      null,
      ...ngDevMode ? [{ debugName: "_route_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._previous_route_key = "";
    this.section = signal(
      "events",
      ...ngDevMode ? [{ debugName: "section" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zones = signal(
      [],
      ...ngDevMode ? [{ debugName: "zones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_zone = computed(
      () => this.zones()[0] || "",
      ...ngDevMode ? [{ debugName: "selected_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_levels = this._state.levels;
    this.bookable_levels = this._state.bookable_levels;
    this.levels = computed(
      () => (
        // The map always renders a single level and can display any parking
        // level, so its selector lists every level. The booking list only
        // offers levels that actually have bookable spaces.
        this.section() === "manage" || this.view() === "map" ? this.all_levels() : this.bookable_levels()
      ),
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.spaces = this._state.spaces;
    this.occupied_bookings = computed(
      () => this._state.activeBookings(this._state.bookings()),
      ...ngDevMode ? [{ debugName: "occupied_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = this._state.period;
    this.setDate = (value) => {
      const date = new Date(value).valueOf();
      const hour = this.options().all_day === false ? new Date(this.options().date).getHours() : null;
      const selected_date = new Date(date);
      if (hour !== null)
        selected_date.setHours(hour, 0, 0, 0);
      this._state.setOptions({
        date: selected_date.valueOf()
      });
    };
    this.setPeriod = (p) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period: p },
        queryParamsHandling: "merge"
      });
      this._state.setPeriod(p);
    };
    this.setSearch = (str) => this._state.setOptions({ search: str });
    this.setRequestFilter = (f) => this._state.setOptions({ request_filter: f });
    this.updateZones = (z) => {
      let zones = (z || []).filter((_) => !!_);
      if (!this._router.url.includes("parking"))
        return;
      const selector_inactive = this.hide_level_selector_on_booking_list() || this.disable_level_selector_on_booking_list();
      if (selector_inactive) {
        zones = [];
      } else if (this.section() === "events" && this.view() === "map") {
        zones = zones.slice(0, 1);
      }
      const zone_param = zones.length ? zones.join(",") : null;
      const query_zone_param = this._query_params().get("zone_ids") || null;
      const query_matches = zone_param === query_zone_param;
      const selected_zones_match = this._sameZones(zones, this.zones());
      const option_zones_match = this._sameZones(zones, this.options().zones || []);
      if (query_matches && selected_zones_match && option_zones_match) {
        return;
      }
      if (!query_matches) {
        this._router.navigate([], {
          relativeTo: this._route,
          queryParams: { zone_ids: zone_param },
          queryParamsHandling: "merge"
        });
      }
      if (!selected_zones_match)
        this.zones.set(zones);
      if (!option_zones_match)
        this._state.setOptions({ zones });
      if (!selector_inactive) {
        persistZones(this.section() === "manage" ? "parking-manage" : "parking", this._persistScopeId(), zones);
      }
    };
    this.updateSingleZone = (zone) => {
      this.updateZones(zone ? [zone] : []);
    };
    this._hide_level_selector_setting = this._settings.signal("parking.hide_level_selector_on_booking_list", false);
    this.hide_level_selector_on_booking_list = computed(
      () => this.section() === "events" && this.view() === "list" && !!this._hide_level_selector_setting(),
      ...ngDevMode ? [{ debugName: "hide_level_selector_on_booking_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disable_level_selector_on_booking_list = computed(
      () => {
        const request_filter = this.options().request_filter;
        return this.section() === "events" && this.view() === "list" && request_filter !== "all" && request_filter !== "bookings";
      },
      ...ngDevMode ? [{ debugName: "disable_level_selector_on_booking_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.subscription("router", this._router.events.subscribe((event) => this._route_change.set(event)));
    effect(() => {
      this._route_change();
      this._updatePath();
    });
    effect(() => {
      if (!this._ready() || !this._router.url.includes("parking"))
        return;
      const params = this._query_params();
      if (params.has("period")) {
        this._state.setPeriod(params.get("period") === "week" ? "week" : "day");
      }
      if (this.hide_level_selector_on_booking_list() || this.disable_level_selector_on_booking_list()) {
        if (params.has("zone_ids") || this.zones().length || this.options().zones?.length) {
          this.updateZones([]);
        }
        return;
      }
      if (!params.has("zone_ids"))
        return;
      const zones = (params.get("zone_ids") || "").split(",").filter(Boolean);
      if (this.section() === "events" && this.view() === "map" && zones.length > 1) {
        this.updateZones(zones);
        return;
      }
      this._applyQueryZones(zones);
    });
    effect(() => {
      if (!this._ready() || this.use_region)
        return;
      if (this.hide_level_selector_on_booking_list() || this.disable_level_selector_on_booking_list()) {
        if (this.zones().length || this.options().zones?.length) {
          this.updateZones([]);
        }
        return;
      }
      const levels = this.levels();
      if (!levels.length)
        return;
      let zones = this.zones().filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!zones.length) {
        zones = loadPersistedZones(this.section() === "manage" ? "parking-manage" : "parking", this._persistScopeId()).filter((zone) => levels.find((lvl) => lvl.id === zone));
      }
      if (this._sameZones(zones, this.zones()))
        return;
      this.updateZones(zones);
    });
    effect(() => {
      if (!this._ready())
        return;
      if (this.section() !== "events" || this.view() !== "map")
        return;
      const levels = this.levels();
      if (!levels.length)
        return;
      const has_valid_zone = this.zones().some((zone) => levels.find((lvl) => lvl.id === zone));
      if (has_valid_zone)
        return;
      const persisted = loadPersistedZones("parking", this._persistScopeId()).filter((zone) => levels.find((lvl) => lvl.id === zone));
      this.updateZones([persisted[0] || levels[0].id]);
    });
  }
  _persistScopeId() {
    return this.use_region ? this._org.region?.id || "" : this._org.building?.id || "";
  }
  _applyQueryZones(zones) {
    if (this._sameZones(zones, this.zones()) && this._sameZones(zones, this.options().zones || [])) {
      return;
    }
    this.zones.set(zones);
    if (!zones.length)
      return;
    const level = this._org.levelWithID(zones);
    if (!level)
      return;
    this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
    this._state.setOptions({ zones });
  }
  async ngOnInit() {
    this._updatePath();
    await this._org.waitUntilInitialised();
    await new Promise((resolve) => setTimeout(resolve, 1e3));
    this.setSearch("");
    this._ready.set(true);
    this._updatePath();
  }
  newParkingSpace() {
    this._state.editSpace();
  }
  downloadSpacesCSV() {
    this._state.downloadSpacesCSV();
  }
  uploadSpacesCSV(event) {
    this._state.uploadSpacesCSV(event);
  }
  newParkingUser() {
    this._state.editUser();
  }
  newFleetVehicle() {
    this._state.editFleetVehicle();
  }
  async newReservation() {
    const { date } = this.options();
    this._state.editReservation(void 0, {
      date: date || Date.now(),
      allow_time_changes: true
    });
  }
  async newRequest() {
    const { date } = this.options();
    this._state.requestParking(date || Date.now());
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    const [section = "events", view = "list"] = parts.slice(-2);
    const current_view = (view || "list").split("?")[0];
    const route_key = `${section}/${current_view}`;
    const section_changed = !!this._previous_route_key && this.section() !== section;
    this.section.set(section);
    this.view.set(current_view === "bookings" || current_view === "requests" ? "list" : current_view);
    if (this._previous_route_key && this._previous_route_key !== route_key) {
      this.setSearch("");
    }
    if (section_changed)
      this.zones.set([]);
    this._previous_route_key = route_key;
    if (current_view === "bookings") {
      this.setRequestFilter("bookings");
    } else if (current_view === "requests" && this.can_view_requests) {
      this.setRequestFilter("requests");
    }
    if (this.section() === "events" && (!this.can_view_requests || !this._settings.get("app.parking.show_requests"))) {
      this.setRequestFilter("bookings");
    }
    if (this.section() === "events" && !this.show_waitlist && this.options().request_filter === "waitlist") {
      this.setRequestFilter(this.can_view_requests ? "requests" : "bookings");
    }
    if ((this.hide_level_selector_on_booking_list() || this.disable_level_selector_on_booking_list()) && (this.zones().length || this.options().zones?.length)) {
      this.updateZones([]);
    }
    this.selectDefaultZoneForManage();
  }
  async selectDefaultZoneForManage() {
    if (this.section() !== "manage" || this.use_region || this.zones().length) {
      return;
    }
    const levels = this.levels();
    if (!levels.length)
      return;
    const persisted = loadPersistedZones("parking-manage", this._persistScopeId()).filter((zone) => levels.find((lvl) => lvl.id === zone));
    this.updateZones(persisted.length ? persisted : [levels[0].id]);
  }
  _sameZones(first, second) {
    return first.length === second.length && first.every((zone, index) => zone === second[index]);
  }
  static {
    this.\u0275fac = function ParkingTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingTopbarComponent, selectors: [["parking-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 15, consts: [[1, "flex", "w-full", "items-center", "gap-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], ["appearance", "outline", 1, "no-subscript", "w-32"], [3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-52", "space-x-2"], [1, "bg-base-100", "mb-2", "flex", "h-14", "items-center", "px-8"], [1, "mr-2", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-56"], [1, "w-px", "min-w-2", "flex-1"], [1, "flex", "gap-2"], ["matTooltip", "Parking Spaces Occupied", 1, "border-base-300", "mr-2", "flex", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [3, "step"], [1, "border-base-300", "mx-8", "mb-2", "inline-flex", "w-full", "max-w-[calc(100%-4rem)]", "items-center", "gap-1", "rounded-xl", "border", "p-1"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-52", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-44", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "routerLink", "matTooltip"], [1, "text-2xl"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "routerLink", "matTooltip"], [3, "ngModel", "placeholder"], ["multiple", "", 3, "ngModel", "disabled", "placeholder"], [3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["multiple", "", 3, "ngModelChange", "ngModel", "disabled", "placeholder"], ["icon", "", "default", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "default", "", "matRipple", "", 3, "matTooltip", "disabled"], ["type", "file", "accept", ".csv", 1, "absolute", "inset-0", "opacity-0", 3, "change", "disabled"], [1, "ml-1!", "text-lg"], [1, "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [3, "dateChange", "step"], ["btn", "", "matRipple", "", 1, "h-8", "min-w-24", "flex-1", "rounded-lg", "px-3", 3, "inverse"], ["btn", "", "matRipple", "", 1, "h-8", "min-w-24", "flex-1", "rounded-lg", "px-3", 3, "click"]], template: function ParkingTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275conditionalCreate(5, ParkingTopbarComponent_Conditional_5_Template, 8, 7, "mat-form-field", 3);
        \u0275\u0275elementStart(6, "searchbar", 4);
        \u0275\u0275listener("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_6_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, ParkingTopbarComponent_Conditional_7_Template, 7, 5, "div", 5);
        \u0275\u0275conditionalCreate(8, ParkingTopbarComponent_Conditional_8_Template, 6, 3, "button", 6);
        \u0275\u0275conditionalCreate(9, ParkingTopbarComponent_Conditional_9_Template, 6, 3, "button", 7);
        \u0275\u0275conditionalCreate(10, ParkingTopbarComponent_Conditional_10_Template, 2, 1);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 8);
        \u0275\u0275conditionalCreate(12, ParkingTopbarComponent_Conditional_12_Template, 9, 14, "div", 9);
        \u0275\u0275conditionalCreate(13, ParkingTopbarComponent_Conditional_13_Template, 3, 1, "mat-form-field", 10);
        \u0275\u0275element(14, "div", 11);
        \u0275\u0275conditionalCreate(15, ParkingTopbarComponent_Conditional_15_Template, 6, 4, "div", 12);
        \u0275\u0275conditionalCreate(16, ParkingTopbarComponent_Conditional_16_Template, 7, 18, "div", 13);
        \u0275\u0275conditionalCreate(17, ParkingTopbarComponent_Conditional_17_Template, 1, 1, "date-options", 14);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, ParkingTopbarComponent_Conditional_18_Template, 3, 0, "div", 15);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.section() !== "events" ? "APP.CONCIERGE.PARKING_HEADER" : "APP.CONCIERGE.PARKING_BOOK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.section() === "events" && ctx.view() !== "map" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("model", ctx.options().search);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "spaces" ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "users" ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "fleet" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" && !ctx.disable_reservations ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.section() === "events" ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_level_selector_on_booking_list() ? 13 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.section() === "manage" ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" && !ctx.hide_availability_counter ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "list" || ctx.view() === "map" ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" && ctx.view() === "list" && ctx.can_view_requests ? 18 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DateOptionsComponent,
      MatTooltipModule,
      MatTooltip,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      SearchbarComponent,
      RouterModule,
      RouterLink,
      DecimalPipe,
      BuildingPipe,
      TranslatePipe
    ], styles: ["\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingTopbarComponent, [{
    type: Component,
    args: [{ selector: "parking-topbar", template: `
        <div class="flex w-full items-center gap-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (section() !== 'events'
                        ? 'APP.CONCIERGE.PARKING_HEADER'
                        : 'APP.CONCIERGE.PARKING_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            @if (section() === 'events' && view() !== 'map') {
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="period()"
                        (ngModelChange)="setPeriod($event)"
                    >
                        <mat-option value="day">
                            {{ 'COMMON.DAY' | translate }}
                        </mat-option>
                        <mat-option value="week">
                            {{ 'COMMON.WEEK' | translate }}
                        </mat-option>
                    </mat-select>
                </mat-form-field>
            }
            <searchbar
                [model]="options().search"
                (modelChange)="setSearch($event)"
            ></searchbar>
            @if (view() === 'spaces') {
                <div
                    [matTooltip]="
                        options().zones?.length
                            ? ''
                            : 'Select a level to add a space'
                    "
                >
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newParkingSpace()"
                        [disabled]="!options().zones?.length"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                </div>
            }
            @if (view() === 'users') {
                <button
                    btn
                    matRipple
                    class="w-40 space-x-2"
                    (click)="newParkingUser()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_USER_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (view() === 'fleet') {
                <button
                    btn
                    matRipple
                    class="w-52 space-x-2"
                    (click)="newFleetVehicle()"
                >
                    <div class="pl-2">
                        {{ 'APP.CONCIERGE.PARKING_FLEET_ADD' | translate }}
                    </div>
                    <icon>add</icon>
                </button>
            }
            @if (section() === 'events' && !disable_reservations) {
                @if (can_view_requests) {
                    <button
                        btn
                        matRipple
                        class="w-44 space-x-2"
                        (click)="newRequest()"
                    >
                        <div class="pl-2">
                            {{
                                'APP.CONCIERGE.PARKING_REQUEST_ADD' | translate
                            }}
                        </div>
                        <icon>playlist_add</icon>
                    </button>
                } @else {
                    <button
                        btn
                        matRipple
                        class="w-48 space-x-2"
                        (click)="newReservation()"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                }
            }
        </div>
        <div class="bg-base-100 mb-2 flex h-14 items-center px-8">
            @if (section() === 'events') {
                <div class="mr-2 flex items-center">
                    <a
                        btn
                        matRipple
                        name="deals-list"
                        class="rounded-l rounded-r-none px-2"
                        [class.inverse]="view() === 'map'"
                        [routerLink]="['events', 'list']"
                        [matTooltip]="'COMMON.LIST' | translate"
                    >
                        <icon class="text-2xl">list</icon>
                    </a>
                    <a
                        btn
                        matRipple
                        name="deals-grid"
                        class="rounded-l-none rounded-r px-2"
                        [class.inverse]="view() !== 'map'"
                        [routerLink]="['events', 'map']"
                        [matTooltip]="'COMMON.MAP' | translate"
                    >
                        <icon class="text-2xl">map</icon>
                    </a>
                </div>
            }
            @if (!hide_level_selector_on_booking_list()) {
                <mat-form-field appearance="outline" class="no-subscript w-56">
                    @if (view() === 'map') {
                        <mat-select
                            [ngModel]="selected_zone()"
                            (ngModelChange)="updateSingleZone($event)"
                            [placeholder]="'COMMON.LEVEL_SELECT' | translate"
                        >
                            @for (level of levels(); track level) {
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
                    } @else {
                        <mat-select
                            [(ngModel)]="zones"
                            (ngModelChange)="updateZones($event)"
                            [disabled]="
                                disable_level_selector_on_booking_list()
                            "
                            [placeholder]="
                                (section() === 'manage'
                                    ? 'COMMON.LEVEL_SELECT'
                                    : 'COMMON.LEVEL_ALL'
                                ) | translate
                            "
                            multiple
                        >
                            @for (level of levels(); track level) {
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
                    }
                </mat-form-field>
            }
            <div class="w-px min-w-2 flex-1"></div>
            @if (section() === 'manage') {
                <div class="flex gap-2">
                    @if (view() === 'spaces') {
                        <button
                            icon
                            default
                            matRipple
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CSV_UPLOAD' | translate
                            "
                            [disabled]="!options().zones?.length"
                        >
                            <icon>upload</icon>
                            <input
                                type="file"
                                accept=".csv"
                                class="absolute inset-0 opacity-0"
                                [disabled]="!options().zones?.length"
                                (change)="uploadSpacesCSV($any($event))"
                            />
                        </button>
                        <button
                            icon
                            default
                            matRipple
                            (click)="downloadSpacesCSV()"
                            [matTooltip]="
                                'APP.CONCIERGE.PARKING_CSV_DOWNLOAD' | translate
                            "
                        >
                            <icon>download</icon>
                        </button>
                    }
                    <button
                        icon
                        default
                        matRipple
                        (click)="manageRestrictions()"
                        [matTooltip]="
                            'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                        "
                    >
                        <icon>lock_open</icon>
                    </button>
                </div>
            }
            @if (section() === 'events' && !hide_availability_counter) {
                <div
                    class="border-base-300 mr-2 flex items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                    matTooltip="Parking Spaces Occupied"
                >
                    @let occupied = occupied_bookings().length || 0;
                    {{ occupied }} of
                    {{ spaces().length || '' }}
                    <icon class="ml-1! text-lg">car_lock</icon>
                    @let percent = occupied / (spaces().length || 0);
                    <span
                        class="rounded-sm px-2 py-1 font-mono text-xs"
                        [class.bg-error]="percent === 100"
                        [class.text-error-content]="percent === 100"
                        [class.bg-warning]="percent > 50 && percent < 100"
                        [class.text-warning-content]="
                            percent > 50 && percent < 100
                        "
                        [class.bg-success]="percent < 50"
                        [class.text-success-content]="percent < 50"
                        >{{ percent * 100 | number: '2.0-0' }}%</span
                    >
                </div>
            }
            @if (view() === 'list' || view() === 'map') {
                <date-options
                    [step]="period() === 'week' ? 7 : 1"
                    (dateChange)="setDate($event)"
                ></date-options>
            }
        </div>
        @if (section() === 'events' && view() === 'list' && can_view_requests) {
            <div
                class="border-base-300 mx-8 mb-2 inline-flex w-full max-w-[calc(100%-4rem)] items-center gap-1 rounded-xl border p-1"
            >
                @for (filter of filter_options; track filter.value) {
                    <button
                        btn
                        matRipple
                        class="h-8 min-w-24 flex-1 rounded-lg px-3"
                        [class.inverse]="
                            options().request_filter !== filter.value
                        "
                        (click)="setRequestFilter(filter.value)"
                    >
                        {{ filter.label | translate }}
                    </button>
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      DateOptionsComponent,
      MatTooltipModule,
      MatRippleModule,
      IconComponent,
      BuildingPipe,
      MatFormFieldModule,
      MatSelectModule,
      SearchbarComponent,
      TranslatePipe,
      RouterModule
    ], styles: ["/* angular:styles/component:css;4bb26a1eb5035846e32fdbd8af6a308e831b6910e15ebdbaee0887184c668792;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingTopbarComponent, { className: "ParkingTopbarComponent", filePath: "apps/concierge/src/app/parking/parking-topbar.component.ts", lineNumber: 375 });
})();

// apps/concierge/src/app/parking/parking.component.ts
var _c08 = () => ["/book", "parking", "manage", "spaces"];
var _c16 = () => ["/book", "parking", "manage", "map"];
var _c25 = () => ["/book", "parking", "manage", "users"];
var _c34 = () => ["/book", "parking", "manage", "fleet"];
function ParkingComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c25))("active", ctx_r0.view() === "users");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.PARKING_TAB_USERS"), " ");
  }
}
function ParkingComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(5, _c34))("active", ctx_r0.view() === "fleet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "APP.CONCIERGE.PARKING_TAB_FLEET"), " ");
  }
}
function ParkingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "nav", 6)(2, "a", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Conditional_5_Template, 3, 6, "a", 7);
    \u0275\u0275conditionalCreate(6, ParkingComponent_Conditional_5_Conditional_6_Template, 3, 6, "a", 7);
    \u0275\u0275elementStart(7, "a", 7);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-tab-nav-panel", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tabPanel_r2 = \u0275\u0275reference(11);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabPanel", tabPanel_r2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c08))("active", ctx_r0.view() === "spaces");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 9, "APP.CONCIERGE.PARKING_TAB_SPACES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hide_users ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hide_vehicles ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c16))("active", ctx_r0.view() === "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 11, "APP.CONCIERGE.PARKING_TAB_MAP"), " ");
  }
}
function ParkingComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "p", 9);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.CONCIERGE.PARKING_UNAVAILABLE"), " ");
  }
}
var ParkingComponent = class _ParkingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this.levels = this._state.levels;
    this.org_initialised = this._state.org_initialised;
    this.section = signal(
      "events",
      ...ngDevMode ? [{ debugName: "section" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get show_requests() {
    return !!this._settings.get("app.parking.show_requests");
  }
  get hide_users_and_vehicles() {
    return !!this._settings.get("app.parking.hide_users_and_vehicles");
  }
  get hide_users() {
    return this.hide_users_and_vehicles || !!this._settings.get("app.parking.hide_users");
  }
  get hide_vehicles() {
    return this.hide_users_and_vehicles || !!this._settings.get("app.parking.hide_vehicles");
  }
  get is_admin() {
    const groups = currentUser().groups || [];
    const admin_group = this._settings.get("app.admin_group") || "admin";
    return groups.includes(admin_group) || groups.includes("placeos_admin") || groups.includes("placeos_support");
  }
  get can_view_requests() {
    if (!this.show_requests)
      return false;
    const feature_groups = this._settings.get("app.feature_groups") || {};
    const request_groups = feature_groups["parking-requests"] || [];
    const groups = currentUser().groups || [];
    return this.is_admin || !request_groups.length || groups.some((grp) => request_groups.includes(grp));
  }
  ngOnInit() {
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    const [section = "events", view = "list"] = parts.slice(-2);
    const current_view = view.split("?")[0];
    this.section.set(section);
    if (section === "manage" && (current_view === "users" && this.hide_users || current_view === "fleet" && this.hide_vehicles)) {
      this.view.set("spaces");
      void this._router.navigate(["/book", "parking", "manage", "spaces"], { replaceUrl: true });
      return;
    }
    if (section === "events" && current_view === "requests") {
      if (!this.can_view_requests) {
        this._state.setOptions({ request_filter: "bookings" });
        this.view.set("list");
        void this._router.navigate(["/book", "parking", "events", "list"], { replaceUrl: true });
        return;
      }
      this._state.setOptions({ request_filter: "requests" });
      this.view.set("list");
      void this._router.navigate(["/book", "parking", "events", "list"], {
        replaceUrl: true
      });
      return;
    }
    if (section === "events" && current_view === "bookings") {
      this._state.setOptions({ request_filter: "bookings" });
      this.view.set("list");
      void this._router.navigate(["/book", "parking", "events", "list"], {
        replaceUrl: true
      });
      return;
    }
    if (section === "events" && !this.can_view_requests) {
      this._state.setOptions({ request_filter: "bookings" });
    }
    this.view.set(current_view === "list" ? "list" : current_view);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingComponent_BaseFactory;
      return function ParkingComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingComponent_BaseFactory || (\u0275ParkingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingComponent)))(__ngFactoryType__ || _ParkingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 9, vars: 2, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "px-8", "pb-2"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto"], [1, "absolute", "inset-0", "z-50", "flex", "flex-col", "items-center", "justify-center"], ["mat-tab-nav-bar", "", 1, "bg-base-200", "overflow-hidden", "rounded-sm", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], [1, "z-10", "opacity-60"]], template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2);
        \u0275\u0275element(4, "parking-topbar");
        \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Template, 12, 15, "div", 3);
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275element(7, "router-outlet");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, ParkingComponent_Conditional_8_Template, 5, 3, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.section() === "manage" ? 5 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.org_initialised() && !ctx.levels().length ? 8 : -1);
      }
    }, dependencies: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      MatTabNav,
      MatTabNavPanel,
      MatTabLink,
      RouterModule,
      RouterOutlet,
      RouterLink,
      ParkingTopbarComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingComponent, [{
    type: Component,
    args: [{ selector: "app-parking", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <parking-topbar></parking-topbar>
                @if (section() === 'manage') {
                    <div class="px-8 pb-2">
                        <nav
                            mat-tab-nav-bar
                            class="bg-base-200 overflow-hidden rounded-sm"
                            [tabPanel]="tabPanel"
                        >
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'spaces',
                                ]"
                                [active]="view() === 'spaces'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_SPACES'
                                        | translate
                                }}
                            </a>
                            @if (!hide_users) {
                                <a
                                    mat-tab-link
                                    [routerLink]="[
                                        '/book',
                                        'parking',
                                        'manage',
                                        'users',
                                    ]"
                                    [active]="view() === 'users'"
                                >
                                    {{
                                        'APP.CONCIERGE.PARKING_TAB_USERS'
                                            | translate
                                    }}
                                </a>
                            }
                            @if (!hide_vehicles) {
                                <a
                                    mat-tab-link
                                    [routerLink]="[
                                        '/book',
                                        'parking',
                                        'manage',
                                        'fleet',
                                    ]"
                                    [active]="view() === 'fleet'"
                                >
                                    {{
                                        'APP.CONCIERGE.PARKING_TAB_FLEET'
                                            | translate
                                    }}
                                </a>
                            }
                            <a
                                mat-tab-link
                                [routerLink]="[
                                    '/book',
                                    'parking',
                                    'manage',
                                    'map',
                                ]"
                                [active]="view() === 'map'"
                            >
                                {{
                                    'APP.CONCIERGE.PARKING_TAB_MAP' | translate
                                }}
                            </a>
                        </nav>
                        <mat-tab-nav-panel #tabPanel></mat-tab-nav-panel>
                    </div>
                }
                <div class="relative h-1/2 w-full flex-1 overflow-auto">
                    <router-outlet></router-outlet>
                </div>
                @if (org_initialised() && !levels().length) {
                    <div
                        class="absolute inset-0 z-50 flex flex-col items-center justify-center"
                    >
                        <div
                            class="bg-base-100 absolute inset-0 z-0 opacity-80"
                        ></div>
                        <p class="z-10 opacity-60">
                            {{
                                'APP.CONCIERGE.PARKING_UNAVAILABLE' | translate
                            }}
                        </p>
                    </div>
                }
            </main>
        </div>
    `, imports: [
      ApplicationTopbarComponent,
      ApplicationSidebarComponent,
      MatTabsModule,
      RouterModule,
      ParkingTopbarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;c3c4e43489fa049a08c22bf31fd7fb879b1769192f7684fb69867d5e4ca38a37;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar {\n  height: 100%;\n}\nmain {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/concierge/src/app/parking/parking.component.ts", lineNumber: 145 });
})();

// apps/concierge/src/app/parking/parking.routes.ts
var ROUTES = [
  {
    path: "",
    component: ParkingComponent,
    children: [
      {
        path: "events",
        children: [
          { path: "", pathMatch: "full", redirectTo: "list" },
          {
            path: "map",
            component: ParkingMapComponent,
            title: "Parking Map"
          },
          {
            path: "list",
            component: ParkingBookingsListComponent,
            title: "Parking Bookings"
          },
          {
            path: "requests",
            component: ParkingBookingsListComponent,
            title: "Parking Requests"
          },
          {
            path: "bookings",
            component: ParkingBookingsListComponent,
            title: "Parking Bookings"
          },
          { path: "**", redirectTo: "list" }
        ]
      },
      {
        path: "manage",
        children: [
          {
            path: "fleet",
            component: ParkingFleetListComponent,
            title: "Parking Fleet"
          },
          {
            path: "users",
            component: ParkingUsersListComponent,
            title: "Parking Users"
          },
          {
            path: "map",
            component: ParkingMapComponent,
            title: "Parking Map"
          },
          {
            path: "spaces",
            component: ParkingSpaceListComponent,
            title: "Parking Spaces"
          },
          { path: "**", redirectTo: "spaces" }
        ]
      },
      { path: "**", redirectTo: "events" }
    ]
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=parking.routes-UHMYQSU3.js.map
