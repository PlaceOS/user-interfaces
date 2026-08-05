import {
  BookingDetailsModalComponent,
  EventDetailsModalComponent,
  StatusPillComponent,
  isSameWeek
} from "./chunk-GLBHWAA3.js";
import {
  GroupEventDetailsModalComponent
} from "./chunk-WBMRPAF2.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-OZLPJTUM.js";
import {
  takeUntilDestroyed
} from "./chunk-EQBULE35.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-RZI33RAN.js";
import "./chunk-HWBYPUYD.js";
import "./chunk-KPYTXRFP.js";
import "./chunk-MZQQQY46.js";
import "./chunk-U6Q4WGCF.js";
import {
  DateCalendarComponent,
  isSameMonth,
  startOfMonth
} from "./chunk-HYFZR3UB.js";
import {
  MatProgressBar,
  MatProgressBarModule,
  subDays
} from "./chunk-55U2OXS4.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent,
  bookedForLabel,
  isBookingForOtherUser,
  parse
} from "./chunk-7M6BP3BE.js";
import "./chunk-GXWLR6K5.js";
import "./chunk-FBGFW2J4.js";
import "./chunk-L5WPS3EK.js";
import "./chunk-YFD3PVWN.js";
import {
  MatMenu,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-DLET3WCQ.js";
import {
  SpacePipe,
  UserPipe,
  setMinutes
} from "./chunk-ACF4YW5X.js";
import "./chunk-YEYZFUVJ.js";
import {
  ParkingService
} from "./chunk-26YTTRZD.js";
import "./chunk-FDSNB4SK.js";
import {
  SettingsToggleComponent
} from "./chunk-BLLSXTZI.js";
import {
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule,
  UserAvatarComponent
} from "./chunk-TUMEKGGU.js";
import "./chunk-RQYEIDUG.js";
import {
  AsyncHandler,
  BOOKING_TYPE_COLORS,
  Booking,
  CalendarEvent,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SettingsService,
  addMonths,
  bookingLocationString,
  currentUser,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  isAfter,
  isBefore,
  setHours,
  settingSignal,
  visitorDisplayNameFor
} from "./chunk-RPPBP432.js";
import {
  ActivatedRoute,
  AsyncPipe,
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  FormsModule,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  Output,
  RouterLink,
  RouterModule,
  SlicePipe,
  TranslatePipe,
  ViewChild,
  addDays,
  addMinutes,
  computed,
  effect,
  endOfDay,
  format,
  formatDuration,
  getTimezoneOffsetString,
  i18n,
  inject,
  input,
  isSameDay,
  linkedSignal,
  model,
  output,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
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
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-CUTJ2QPZ.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/bookings/src/lib/booking-card.component.ts
var _c0 = () => ["./"];
var _c1 = (a0) => ({ booking: a0 });
var _c2 = (a0) => ({ name: a0 });
function BookingCardComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.day(), ",\xA0");
  }
}
function BookingCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_day() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, ctx_r0.booking()?.date, ctx_r0.time_format()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(6, 6, ctx_r0.booking()?.date, "zzzz"), ")");
  }
}
function BookingCardComponent_Conditional_1_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 20);
    \u0275\u0275text(2, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "BOOKINGS.BOOKED_FOR", \u0275\u0275pureFunction1(4, _c2, ctx_r0.booked_for_label())), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip());
  }
}
function BookingCardComponent_Conditional_1_Case_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " desk ");
  }
}
function BookingCardComponent_Conditional_1_Case_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " lock ");
  }
}
function BookingCardComponent_Conditional_1_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " drive_eta ");
  }
}
function BookingCardComponent_Conditional_1_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " people ");
  }
}
function BookingCardComponent_Conditional_1_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " book ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.location(), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "icon", 23);
    \u0275\u0275text(2, "check_circle");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.CHECKED_IN"));
  }
}
function BookingCardComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.ASSOCIATE"), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.EVENT"), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.booking().status !== "declined" ? "BOOKINGS.RESERVED" : "BOOKINGS.RELEASED"), " ");
  }
}
function BookingCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function BookingCardComponent_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "icon", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "status-pill", 10);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, BookingCardComponent_Conditional_1_Conditional_11_Template, 6, 6, "div", 11);
    \u0275\u0275conditionalCreate(12, BookingCardComponent_Conditional_1_Conditional_12_Template, 2, 1, "icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 13)(14, "div", 14)(15, "icon");
    \u0275\u0275conditionalCreate(16, BookingCardComponent_Conditional_1_Case_16_Template, 1, 0)(17, BookingCardComponent_Conditional_1_Case_17_Template, 1, 0)(18, BookingCardComponent_Conditional_1_Case_18_Template, 1, 0)(19, BookingCardComponent_Conditional_1_Case_19_Template, 1, 0)(20, BookingCardComponent_Conditional_1_Case_20_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 15);
    \u0275\u0275text(22);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(23, BookingCardComponent_Conditional_1_Conditional_23_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "icon", 17);
    \u0275\u0275text(25, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(26, BookingCardComponent_Conditional_1_Conditional_26_Template, 6, 3, "div", 18);
    \u0275\u0275conditionalCreate(27, BookingCardComponent_Conditional_1_Conditional_27_Template, 3, 3, "div", 19);
    \u0275\u0275conditionalCreate(28, BookingCardComponent_Conditional_1_Conditional_28_Template, 3, 3, "div", 19);
    \u0275\u0275conditionalCreate(29, BookingCardComponent_Conditional_1_Conditional_29_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(22, _c0))("queryParams", \u0275\u0275pureFunction1(23, _c1, ctx_r0.booking()?.id));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.typeColors[0])("color", ctx_r0.typeColors[1]);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 20, ctx_r0.typeLabel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeIcon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.booking()?.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.period());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.for_current_user() && ctx_r0.booked_for_label() ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking().instance ? 12 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional((tmp_12_0 = ctx_r0.type()) === "desk" ? 16 : tmp_12_0 === "locker" ? 17 : tmp_12_0 === "parking" ? 18 : tmp_12_0 === "visitor" ? 19 : 20);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource_label(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.location() ? 23 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking()?.checked_in && !ctx_r0.booking()?.is_done ? 26 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && !ctx_r0.for_current_user() && ctx_r0.booking()?.booking_type !== "group-event" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && ctx_r0.booking()?.booking_type === "group-event" ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && ctx_r0.is_reserved_parking_space() ? 29 : -1);
  }
}
var BookingCardComponent = class _BookingCardComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._parking = inject(ParkingService);
    this.booking = input(
      void 0,
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_day = input(
      false,
      ...ngDevMode ? [{ debugName: "show_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_fn = input(
      (i) => null,
      ...ngDevMode ? [{ debugName: "edit_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remove_fn = input(
      (i, s) => null,
      ...ngDevMode ? [{ debugName: "remove_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_fn = input(
      (i) => null,
      ...ngDevMode ? [{ debugName: "end_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_description = computed(
      () => this.removeHtmlTags(this.booking()?.description),
      ...ngDevMode ? [{ debugName: "raw_description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_reserved_parking_space = computed(
      () => {
        const space = this._parking.assigned_space();
        return this.booking()?.booking_type === "parking" && !!space && this.booking()?.asset_id === space.id;
      },
      ...ngDevMode ? [{ debugName: "is_reserved_parking_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.for_current_user = computed(
      () => this.booking()?.user_email?.toLowerCase() === currentUser()?.email?.toLowerCase(),
      ...ngDevMode ? [{ debugName: "for_current_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_for_label = computed(
      () => {
        const booking = this.booking();
        if (!booking)
          return "";
        return `${booking.user_name || ""}`.trim() || this._formatEmailName(`${booking.user_email || ""}`.trim());
      },
      ...ngDevMode ? [{ debugName: "booked_for_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_waitlist = this._settings.signal("parking.show_waitlist", true);
    this.hide_selected_parking_space = this._settings.signal("parking.hide_selected_space", false);
    this._is_visible_waitlisted = computed(
      () => {
        const booking = this.booking();
        return this.show_waitlist() && booking?.booking_type === "parking" && booking?.status === "tentative" && booking?.process_state !== "waiting_approval" && !!booking?.asset_id?.startsWith("unallocated") && isSameWeek(Date.now(), booking.date);
      },
      ...ngDevMode ? [{ debugName: "_is_visible_waitlisted" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
    this.status = computed(
      () => {
        const booking = this.booking();
        if (booking?.is_done)
          return "neutral";
        if (booking?.status === "approved")
          return "success";
        if (booking?.status === "declined")
          return "error";
        if (booking?.status === "cancelled")
          return "error";
        if (booking?.status === "tentative") {
          if (this._is_visible_waitlisted()) {
            return "info";
          }
          return "warning";
        }
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurr_tooltip = computed(
      () => formatRecurrence(fromBookingRecurrence(this.booking()), this.booking()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP"),
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.type = computed(
      () => this.booking()?.type,
      ...ngDevMode ? [{ debugName: "type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day = computed(
      () => {
        const date = this.booking()?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? i18n("COMMON.TODAY") : format(date, "EEEE")}`;
      },
      ...ngDevMode ? [{ debugName: "day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => bookingLocationString(this.booking(), this._org),
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => {
        const booking = this.booking();
        if (booking?.is_all_day)
          return i18n("COMMON.ALL_DAY");
        const start = booking?.date || Date.now();
        const duration = booking?.duration || 60;
        const end = addMinutes(start, duration);
        const dur = formatDuration({
          hours: Math.floor(duration / 60),
          minutes: duration % 60
        }).replace(" hour", "hr").replace(" minute", "min");
        return `${format(start, this.time_format())} - ${format(end, this.time_format())} (${dur})`;
      },
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_label = computed(
      () => {
        const booking = this.booking();
        if (!booking)
          return "";
        if (booking.booking_type === "parking" && this.hide_selected_parking_space()) {
          return i18n("RESOURCE.PARKING");
        }
        if (booking.booking_type !== "visitor") {
          const label = this.raw_description() || booking.asset_name || booking.asset_id || "";
          if (label.startsWith("unallocated")) {
            return booking.booking_type === "parking" ? i18n("RESOURCE.PARKING") : "";
          }
          return label;
        }
        return this._visitorDisplayNameFor(booking);
      },
      ...ngDevMode ? [{ debugName: "resource_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const destroy_ref = inject(DestroyRef);
    destroy_ref.onDestroy(() => clearTimeout(this._open_timer));
    this._route.queryParamMap.pipe(takeUntilDestroyed()).subscribe((params) => params.has("booking") && this.booking()?.id === params.get("event") ? this.viewDetails() : "");
  }
  get typeIcon() {
    const type = this.booking()?.booking_type;
    const iconMap = {
      event: "meeting_room",
      desk: "desk",
      parking: "drive_eta",
      visitor: "people",
      locker: "lock",
      "group-event": "event_available"
    };
    return iconMap[type] || "book";
  }
  get typeLabel() {
    const type = this.booking()?.booking_type;
    const labelMap = {
      event: "RESOURCE.ROOM",
      desk: "RESOURCE.DESK",
      parking: "RESOURCE.PARKING",
      visitor: "RESOURCE.VISITOR",
      locker: "RESOURCE.LOCKER",
      "group-event": "RESOURCE.EVENT"
    };
    return labelMap[type] || "RESOURCE.BOOKING";
  }
  get typeColors() {
    const type = this.booking()?.booking_type;
    return BOOKING_TYPE_COLORS[type] || ["#E5E7EB", "#1F2937"];
  }
  removeHtmlTags(html = "") {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  viewDetails() {
    if (!this.booking())
      return;
    clearTimeout(this._open_timer);
    this._open_timer = setTimeout(() => {
      this._dialog.closeAll();
      const view_component = this.booking().booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const booking = this.booking();
      const data = {
        booking: booking.booking_type === "group-event" ? { booking, concierge: false } : booking,
        edit_fn: this.edit_fn(),
        remove_fn: this.remove_fn(),
        end_fn: this.end_fn()
      };
      this._dialog.open(view_component, { data });
    }, 300);
  }
  _visitorDisplayNameFor(booking) {
    const asset_id = `${booking?.asset_id || ""}`.trim();
    const group_member_name = this._visitorGroupMemberName(booking);
    if (group_member_name)
      return group_member_name;
    const attendee_name = this._visitorAttendeeName(booking);
    if (attendee_name)
      return attendee_name;
    const asset_name = `${booking?.extension_data?.visitor_name || booking?.asset_name || ""}`.trim();
    const reason_values = [
      `${booking?.title || ""}`.trim().toLowerCase(),
      `${booking?.description || ""}`.trim().toLowerCase()
    ].filter((_) => !!_);
    if (asset_name && asset_name.toLowerCase() !== asset_id.toLowerCase() && !reason_values.includes(asset_name.toLowerCase())) {
      return asset_name;
    }
    return this._formatEmailName(asset_id || asset_name || "Visitor");
  }
  _visitorGroupMemberName(booking) {
    const member = (booking.extension_data?.group_members || []).find((item) => item?.email === booking.asset_id);
    const name = `${member?.name || ""}`.trim();
    return name || "";
  }
  _visitorAttendeeName(booking) {
    const attendee = (booking.attendees || []).find((item) => item?.email === booking.asset_id) || booking.attendees?.[0];
    const name = `${attendee?.name || ""}`.trim();
    return name || "";
  }
  _formatEmailName(value) {
    if (!value.includes("@"))
      return value;
    const [local_part] = value.split("@");
    const formatted_local = local_part.replace(/[._-]+/g, " ").replace(/\s+/g, " ").trim();
    if (!formatted_local)
      return value;
    return formatted_local.replace(/\b\w/g, (char) => char.toUpperCase());
  }
  static {
    this.\u0275fac = function BookingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: [1, "booking"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"], end_fn: [1, "end_fn"] }, decls: 2, vars: 2, consts: [[1, "mb-2", "flex", "items-center", "px-2"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "bg-base-300", "absolute", "top-2", "right-2", "rounded-full", "p-1", "text-2xl"], ["matTooltipPosition", "left", 3, "matTooltip"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], ["booked-for", "", 1, "text-base-content/70", "flex", "min-w-0", "items-center", "space-x-1", "text-sm"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "max-w-[33%]", "items-center", "px-4"], [1, "mx-2", "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "px-4"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], ["checked-in-badge", "", 1, "bg-success", "text-success-content", "absolute", "top-2", "right-2", "flex", "items-center", "space-x-1", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-warning/50", "absolute", "top-14", "right-2", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text-lg"], [1, "truncate"], [1, "mx-2", "truncate"], [1, "text-sm"]], template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, BookingCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
        \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_1_Template, 30, 25, "a", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.booking() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking() ? 1 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      StatusPillComponent,
      RouterModule,
      RouterLink,
      MatTooltipModule,
      MatTooltip,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingCardComponent, [{
    type: Component,
    args: [{ selector: "booking-card", template: `
        @if (booking()) {
            <h4 class="mb-2 flex items-center px-2">
                @if (show_day()) {
                    <span day>{{ day() }},&nbsp;</span>
                }
                {{ booking()?.date | date: time_format() }}
                <span class="px-2 text-xs"
                    >({{ booking()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (booking()) {
            <a
                name="view-booking-details"
                class="relative w-full cursor-pointer overflow-hidden"
                [routerLink]="['./']"
                [queryParams]="{
                    booking: booking()?.id,
                }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <div
                        class="bg-base-300 absolute top-2 right-2 rounded-full p-1 text-2xl"
                        [style.background-color]="typeColors[0]"
                        [style.color]="typeColors[1]"
                    >
                        <icon
                            [matTooltip]="typeLabel | translate"
                            matTooltipPosition="left"
                        >
                            {{ typeIcon }}
                        </icon>
                    </div>
                    <h4 class="px-4 text-lg">{{ booking()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status()">{{
                            period()
                        }}</status-pill>
                        @if (!for_current_user() && booked_for_label()) {
                            <div
                                booked-for
                                class="text-base-content/70 flex min-w-0 items-center space-x-1 text-sm"
                            >
                                <icon class="text-lg">person</icon>
                                <span class="truncate">
                                    {{
                                        'BOOKINGS.BOOKED_FOR'
                                            | translate
                                                : { name: booked_for_label() }
                                    }}
                                </span>
                            </div>
                        }
                        @if (booking().instance) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex max-w-[33%] items-center px-4">
                            <icon>
                                @switch (type()) {
                                    @case ('desk') {
                                        desk
                                    }
                                    @case ('locker') {
                                        lock
                                    }
                                    @case ('parking') {
                                        drive_eta
                                    }
                                    @case ('visitor') {
                                        people
                                    }
                                    @default {
                                        book
                                    }
                                }
                            </icon>
                            <div class="mx-2 w-1/2 flex-1 truncate">
                                {{ resource_label() }}
                            </div>
                        </div>
                        @if (location()) {
                            <div class="flex items-center px-4">
                                <icon>place</icon>
                                <div class="mx-2 truncate">
                                    {{ location() }}
                                </div>
                            </div>
                        }
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (booking()?.checked_in && !booking()?.is_done) {
                        <div
                            checked-in-badge
                            class="bg-success text-success-content absolute top-2 right-2 flex items-center space-x-1 rounded-xl px-2 py-1 text-xs"
                        >
                            <icon class="text-sm">check_circle</icon>
                            <span>{{ 'COMMON.CHECKED_IN' | translate }}</span>
                        </div>
                    }
                    @if (
                        !booking()?.checked_in &&
                        !for_current_user() &&
                        booking()?.booking_type !== 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute top-14 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.ASSOCIATE' | translate }}
                        </div>
                    }
                    @if (
                        !booking()?.checked_in &&
                        booking()?.booking_type === 'group-event'
                    ) {
                        <div
                            class="bg-warning/50 absolute top-14 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ 'BOOKINGS.EVENT' | translate }}
                        </div>
                    }
                    @if (
                        !booking()?.checked_in && is_reserved_parking_space()
                    ) {
                        <div
                            class="bg-warning/50 absolute top-14 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{
                                (booking().status !== 'declined'
                                    ? 'BOOKINGS.RESERVED'
                                    : 'BOOKINGS.RELEASED'
                                ) | translate
                            }}
                        </div>
                    }
                </div>
            </a>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      StatusPillComponent,
      RouterModule,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;ebed79dbf42ca259394ae075644d04aa29f5856e78e5e954783f57ff9ad7aaa1;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-card.component.ts */\n:host {\n  display: block;\n  width: 100%;\n  position: relative;\n}\n/*# sourceMappingURL=booking-card.component.css.map */\n"] }]
  }], () => [], { booking: [{ type: Input, args: [{ isSignal: true, alias: "booking", required: false }] }], show_day: [{ type: Input, args: [{ isSignal: true, alias: "show_day", required: false }] }], edit_fn: [{ type: Input, args: [{ isSignal: true, alias: "edit_fn", required: false }] }], remove_fn: [{ type: Input, args: [{ isSignal: true, alias: "remove_fn", required: false }] }], end_fn: [{ type: Input, args: [{ isSignal: true, alias: "end_fn", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 202 });
})();

// libs/events/src/lib/event-card.component.ts
var _c02 = () => ["./"];
var _c12 = (a0) => ({ event: a0 });
var _c22 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id || $item.email;
function EventCardComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 2);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", ctx_r0.day(), ",\xA0");
  }
}
function EventCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 0);
    \u0275\u0275conditionalCreate(1, EventCardComponent_Conditional_0_Conditional_1_Template, 2, 1, "span", 2);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementStart(4, "span", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_day() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, ctx_r0.event()?.date, ctx_r0.time_format()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind2(6, 6, ctx_r0.event()?.date, "zzzz"), ")");
  }
}
function EventCardComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.period_tz(), " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip());
  }
}
function EventCardComponent_Conditional_1_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon");
    \u0275\u0275text(2, "restaurant");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.CATERED"), " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_36_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "a-user-avatar", 23);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r3);
  }
}
function EventCardComponent_Conditional_1_Conditional_36_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "div", 24);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" +", ctx_r0.event()?.attendees?.length - 5, " ");
  }
}
function EventCardComponent_Conditional_1_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275repeaterCreate(1, EventCardComponent_Conditional_1_Conditional_36_For_2_Template, 2, 1, "div", 21, _forTrack0);
    \u0275\u0275pipe(3, "slice");
    \u0275\u0275conditionalCreate(4, EventCardComponent_Conditional_1_Conditional_36_Conditional_4_Template, 3, 1, "div", 22);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pipeBind3(3, 1, ctx_r0.event()?.attendees, 0, ctx_r0.event()?.attendees?.length === 6 ? 6 : 5));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.event()?.attendees?.length > 6 ? 4 : -1);
  }
}
function EventCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a", 4);
    \u0275\u0275listener("click", function EventCardComponent_Conditional_1_Template_a_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "icon", 7);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h4", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9)(9, "status-pill", 10)(10, "div", 11)(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, EventCardComponent_Conditional_1_Conditional_13_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(14, EventCardComponent_Conditional_1_Conditional_14_Template, 2, 1, "icon", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14)(16, "div", 15)(17, "icon", 16);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275text(19, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 17);
    \u0275\u0275text(21);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(22, "div", 15)(23, "icon");
    \u0275\u0275text(24, "person_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 18);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(27, EventCardComponent_Conditional_1_Conditional_27_Template, 6, 3, "div", 15);
    \u0275\u0275elementStart(28, "div", 15)(29, "icon");
    \u0275\u0275text(30, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div", 18);
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "icon", 19);
    \u0275\u0275text(35, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(36, EventCardComponent_Conditional_1_Conditional_36_Template, 5, 5, "div", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c02))("queryParams", \u0275\u0275pureFunction1(29, _c12, ctx_r0.event()?.id));
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r0.typeColors[0])("color", ctx_r0.typeColors[1]);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 21, ctx_r0.typeLabel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeIcon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.event()?.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275classProp("pr-4", ctx_r0.timezone() && ctx_r0.tz());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.period());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event().recurring_event_id ? 14 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(18, 23, "RESOURCE.ROOM"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.location(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r0.event()?.organiser?.name || ctx_r0.event()?.organiser?.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.event()?.ext("catering")?.length ? 27 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 25, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(31, _c22, ctx_r0.event()?.attendees?.length || 0)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.event()?.attendees?.length && !ctx_r0.event()?.extension_data?.shared_event ? 36 : -1);
  }
}
var EventCardComponent = class _EventCardComponent extends AsyncHandler {
  formattedTime(tz) {
    const date = this.event().date;
    const date_end = this.event().date_end;
    const all_day = this.event().all_day;
    const tz_format = this._date.transform(date, "zzzz", tz);
    const start_date = this._date.transform(date, "MMM d", tz);
    const start_time = this._date.transform(date, this.time_format(), tz);
    const end_date = this._date.transform(date_end, "MMM d", tz);
    const end_time = this._date.transform(date_end, this.time_format(), tz);
    const is_multiday = this.event()?.duration > 24 * 60;
    if (is_multiday) {
      return `${start_date}${all_day ? "" : ", " + start_time} - ${end_date}${all_day ? "" : ", " + end_time}`;
    } else if (all_day) {
      return i18n("COMMON.ALL_DAY");
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  get typeIcon() {
    return this.event()?.extension_data?.shared_event ? "event_available" : "meeting_room";
  }
  get typeLabel() {
    return this.event()?.extension_data?.shared_event ? "RESOURCE.EVENT" : "RESOURCE.ROOM";
  }
  get typeColors() {
    const type = this.event()?.extension_data?.shared_event ? "group-event" : "event";
    return BOOKING_TYPE_COLORS[type];
  }
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._org = inject(OrganisationService);
    this._space_pipe = inject(SpacePipe);
    this.event = input(
      void 0,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_day = input(
      false,
      ...ngDevMode ? [{ debugName: "show_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.edit_fn = input(
      (d) => null,
      ...ngDevMode ? [{ debugName: "edit_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remove_fn = input(
      (d, t) => null,
      ...ngDevMode ? [{ debugName: "remove_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = signal(
      "",
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this._use_bld_tz = settingSignal("events.use_building_timezone", false);
    this._active_building = this._org.active_building;
    this.timezone = computed(
      () => this._use_bld_tz() ? this._active_building()?.timezone || "" : "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tz = computed(
      () => {
        const tz = this.timezone();
        if (!tz)
          return "";
        const tz_offset = getTimezoneOffsetString(tz);
        return tz_offset === this._local_tz ? "" : tz_offset;
      },
      ...ngDevMode ? [{ debugName: "tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => {
        if (this.event()?.all_day)
          return i18n("COMMON.ALL_DAY");
        return this.formattedTime();
      },
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period_tz = computed(
      () => {
        return this.formattedTime(this.tz());
      },
      ...ngDevMode ? [{ debugName: "period_tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.recurr_tooltip = computed(
      () => {
        return formatRecurrence(fromEventRecurrence(this.event()?.recurrence), this.event()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP");
      },
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = new DatePipe("en");
    this.status = computed(
      () => {
        const event = this.event();
        if (event?.state === "done")
          return "neutral";
        if (event?.status === "approved")
          return "success";
        if (event?.status === "tentative")
          return "warning";
        if (event?.status === "declined")
          return "error";
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.day = computed(
      () => {
        const date = this.event()?.date || Date.now();
        const is_today = isSameDay(Date.now(), date);
        return `${is_today ? i18n("COMMON.TODAY") : format(date, "EEEE")}`;
      },
      ...ngDevMode ? [{ debugName: "day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event_effect = effect(
      () => {
        const event = this.event();
        if (event) {
          this.getLocationString().then((loc) => this.location.set(loc));
        }
      },
      ...ngDevMode ? [{ debugName: "_event_effect" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("event")) {
        this.event()?.id === params.get("event") ? this.viewDetails() : "";
      }
    }));
  }
  async getLocationString() {
    const event = this.event();
    const system = event?.resources[0] || event?.system || event?.space || {};
    const space = await this._space_pipe.transform(system.id || system.email);
    const zone_list = space?.zones || [];
    const zone = this._org.levelWithID(zone_list) || this._org.buildings.find((_) => zone_list.includes(_.id));
    return `${zone ? (zone.display_name || zone.name) + ", " : ""} ${space?.display_name || space?.name}`;
  }
  viewDetails() {
    if (!this.event())
      return;
    this.timeout("open", () => {
      this._dialog.closeAll();
      const event = this.event();
      if (event.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event,
            edit_fn: this.edit_fn(),
            remove_fn: this.remove_fn(),
            concierge: false
          }
        });
        return;
      }
      this._dialog.open(EventDetailsModalComponent, {
        data: {
          event,
          edit_fn: this.edit_fn(),
          remove_fn: this.remove_fn()
        }
      });
    });
  }
  static {
    this.\u0275fac = function EventCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventCardComponent, selectors: [["event-card"]], inputs: { event: [1, "event"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"] }, features: [\u0275\u0275ProvidersFeature([SpacePipe]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 2, consts: [["date", "", 1, "mb-2", "flex", "items-center", "px-2"], ["name", "view-event-details", 1, "relative", "w-full", "cursor-pointer", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-event-details", 1, "relative", "w-full", "cursor-pointer", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "absolute", "right-2", "top-2", "rounded-full", "bg-base-300", "p-1", "text-2xl"], ["matTooltipPosition", "left", 3, "matTooltip"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "items-center", "px-4"], ["matTooltipPosition", "right", 3, "matTooltip"], [1, "mx-2", "truncate"], [1, "mx-2"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], [1, "absolute", "bottom-2", "right-2", "flex", "items-center", "pr-4", "text-sm", "sm:bottom-auto", "sm:right-14", "sm:top-2", "sm:text-base"], [1, "z-10", "h-10", "w-6"], [1, "h-10", "w-6"], [3, "user"], [1, "border-base-100", "bg-secondary", "text-secondary-content", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "border-2"]], template: function EventCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, EventCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
        \u0275\u0275conditionalCreate(1, EventCardComponent_Conditional_1_Template, 37, 33, "a", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.event() ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event() ? 1 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      RouterModule,
      RouterLink,
      MatTooltipModule,
      MatTooltip,
      StatusPillComponent,
      IconComponent,
      UserAvatarComponent,
      SlicePipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=event-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventCardComponent, [{
    type: Component,
    args: [{ selector: "event-card", template: `
        @if (event()) {
            <h4 class="mb-2 flex items-center px-2" date>
                @if (show_day()) {
                    <span day>{{ day() }},&nbsp;</span>
                }
                {{ event()?.date | date: time_format() }}
                <span class="px-2 text-xs"
                    >({{ event()?.date | date: 'zzzz' }})</span
                >
            </h4>
        }
        @if (event()) {
            <a
                name="view-event-details"
                class="relative w-full cursor-pointer"
                [routerLink]="['./']"
                [queryParams]="{ event: event()?.id }"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                >
                    <div
                        class="absolute right-2 top-2 rounded-full bg-base-300 p-1 text-2xl"
                        [style.background-color]="typeColors[0]"
                        [style.color]="typeColors[1]"
                    >
                        <icon
                            [matTooltip]="typeLabel | translate"
                            matTooltipPosition="left"
                        >
                            {{ typeIcon }}
                        </icon>
                    </div>
                    <h4 class="px-4 text-lg">{{ event()?.title }}</h4>
                    <div class="mx-4 my-2 flex items-center space-x-2">
                        <status-pill [status]="status()">
                            <div
                                class="flex flex-col leading-tight"
                                [class.pr-4]="timezone() && tz()"
                            >
                                <div>{{ period() }}</div>
                                @if (timezone() && tz()) {
                                    <div class="text-xs opacity-30">
                                        {{ period_tz() }}
                                    </div>
                                }
                            </div>
                        </status-pill>
                        @if (event().recurring_event_id) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    <div
                        class="divide-base-200-500 flex flex-col flex-wrap space-y-2 py-2 sm:flex-row sm:space-y-0 sm:divide-x"
                    >
                        <div class="flex items-center px-4">
                            <icon
                                [matTooltip]="'RESOURCE.ROOM' | translate"
                                matTooltipPosition="right"
                                >meeting_room</icon
                            >
                            <div class="mx-2 truncate">
                                {{ location() }}
                            </div>
                        </div>
                        <div class="flex items-center px-4">
                            <icon>person_outline</icon>
                            <div class="mx-2">
                                {{
                                    event()?.organiser?.name ||
                                        event()?.organiser?.email
                                }}
                            </div>
                        </div>
                        @if (event()?.ext('catering')?.length) {
                            <div class="flex items-center px-4">
                                <icon>restaurant</icon>
                                <div class="mx-2">
                                    {{ 'CALENDAR_EVENT.CATERED' | translate }}
                                </div>
                            </div>
                        }
                        <div class="flex items-center px-4">
                            <icon>people</icon>
                            <div class="mx-2">
                                {{
                                    'CALENDAR_EVENT.ATTENDEE_COUNT'
                                        | translate
                                            : {
                                                  count:
                                                      event()?.attendees
                                                          ?.length || 0,
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                    <icon
                        class="absolute top-1/2 right-1 -translate-y-1/2 text-4xl"
                    >
                        chevron_right
                    </icon>
                    @if (
                        event()?.attendees?.length &&
                        !event()?.extension_data?.shared_event
                    ) {
                        <div
                            class="absolute bottom-2 right-2 flex items-center pr-4 text-sm sm:bottom-auto sm:right-14 sm:top-2 sm:text-base"
                        >
                            @for (
                                user of event()?.attendees
                                    | slice
                                        : 0
                                        : (event()?.attendees?.length === 6
                                              ? 6
                                              : 5);
                                track user.id || user.email
                            ) {
                                <div class="z-10 h-10 w-6">
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                </div>
                            }
                            @if (event()?.attendees?.length > 6) {
                                <div class="h-10 w-6">
                                    <div
                                        class="border-base-100 bg-secondary text-secondary-content flex h-10 w-10 items-center justify-center rounded-full border-2"
                                    >
                                        +{{ event()?.attendees?.length - 5 }}
                                    </div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </a>
        }
    `, providers: [SpacePipe], imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      RouterModule,
      MatTooltipModule,
      StatusPillComponent,
      IconComponent,
      UserAvatarComponent
    ], styles: ["/* angular:styles/component:css;90c7ea3359a529ac871b05907f35a5977bf5db6008218c40ad219ab280ccfa5d;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-card.component.ts */\n:host {\n  display: block;\n  width: 100%;\n}\n/*# sourceMappingURL=event-card.component.css.map */\n"] }]
  }], () => [], { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }], show_day: [{ type: Input, args: [{ isSignal: true, alias: "show_day", required: false }] }], edit_fn: [{ type: Input, args: [{ isSignal: true, alias: "edit_fn", required: false }] }], remove_fn: [{ type: Input, args: [{ isSignal: true, alias: "remove_fn", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventCardComponent, { className: "EventCardComponent", filePath: "libs/events/src/lib/event-card.component.ts", lineNumber: 203 });
})();

// apps/workplace/src/app/schedule/schedule-day-view.component.ts
var _c03 = ["scrollContainer"];
var _c13 = ["currentTimeMarker"];
var _forTrack02 = ($index, $item) => $item.hour;
var _forTrack1 = ($index, $item) => $item.booking.id;
function ScheduleDayViewComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const slot_r1 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", slot_r1.label, " ");
  }
}
function ScheduleDayViewComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275element(1, "div", 17)(2, "div", 18);
    \u0275\u0275elementEnd();
  }
}
function ScheduleDayViewComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19, 1);
    \u0275\u0275element(2, "div", 20)(3, "div", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", ctx_r1.currentTimePosition(), "%");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.location(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 25);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \xB7 ", ctx_r1.visitorName(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 29);
  }
  if (rf & 2) {
    const status_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("background-color", ctx_r1.statusColor(status_r5));
    \u0275\u0275property("matTooltip", ctx_r1.statusLabel(status_r5));
  }
}
function ScheduleDayViewComponent_For_20_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 27);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, item_r4.booking.date, "shortTime"), " - ", \u0275\u0275pipeBind2(3, 5, item_r4.booking.date_end, "shortTime"), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.visitorName(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, item_r4.booking.host))?.name || item_r4.booking.organiser?.name || item_r4.booking.host, " ");
  }
}
function ScheduleDayViewComponent_For_20_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 28);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Booked by ", item_r4.booking.booked_by_name || \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, item_r4.booking.booked_by_email))?.name || item_r4.booking.booked_by_email, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" for ", ctx_r1.bookedForLabel(item_r4.booking), " ");
  }
}
function ScheduleDayViewComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275listener("click", function ScheduleDayViewComponent_For_20_Template_button_click_0_listener() {
      const item_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewBooking(item_r4.booking));
    });
    \u0275\u0275elementStart(5, "div", 23)(6, "div", 24);
    \u0275\u0275text(7);
    \u0275\u0275conditionalCreate(8, ScheduleDayViewComponent_For_20_Conditional_8_Template, 2, 1, "span", 25);
    \u0275\u0275conditionalCreate(9, ScheduleDayViewComponent_For_20_Conditional_9_Template, 2, 1, "span", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ScheduleDayViewComponent_For_20_Conditional_10_Template, 1, 3, "div", 26);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ScheduleDayViewComponent_For_20_Conditional_11_Template, 4, 8, "div", 27);
    \u0275\u0275conditionalCreate(12, ScheduleDayViewComponent_For_20_Conditional_12_Template, 2, 1, "div", 28);
    \u0275\u0275conditionalCreate(13, ScheduleDayViewComponent_For_20_Conditional_13_Template, 2, 1, "div", 28);
    \u0275\u0275conditionalCreate(14, ScheduleDayViewComponent_For_20_Conditional_14_Template, 4, 5, "div", 28);
    \u0275\u0275conditionalCreate(15, ScheduleDayViewComponent_For_20_Conditional_15_Template, 6, 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_22_0;
    const item_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275styleProp("top", item_r4.top, "%")("height", item_r4.height, "%")("left", item_r4.left, "%")("width", item_r4.width, "%")("border-color", ctx_r1.colors[ctx_r1.type(item_r4.booking)][1])("background-color", ctx_r1.backgroundColor(item_r4.booking))("z-index", 10);
    \u0275\u0275property("matTooltip", item_r4.booking.title + (ctx_r1.location(item_r4.booking) ? "\n" + ctx_r1.location(item_r4.booking) : "") + (ctx_r1.visitorName(item_r4.booking) ? "\n" + ctx_r1.visitorName(item_r4.booking) : "") + (ctx_r1.isBookingForOtherUser(item_r4.booking) ? "\nfor " + ctx_r1.bookedForLabel(item_r4.booking) : "") + "\n" + (item_r4.booking.user_name || \u0275\u0275pipeBind1(2, 26, \u0275\u0275pipeBind1(1, 24, item_r4.booking.host))?.name || item_r4.booking.host) + "\n" + \u0275\u0275pipeBind2(3, 28, item_r4.booking.date, "shortTime") + " - " + \u0275\u0275pipeBind2(4, 31, item_r4.booking.date_end, "shortTime"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", item_r4.booking.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height <= 5 && ctx_r1.location(item_r4.booking) ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height <= 5 && ctx_r1.visitorName(item_r4.booking) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_22_0 = ctx_r1.bookingStatus(item_r4.booking)) ? 10 : -1, tmp_22_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 3 ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 5 && ctx_r1.location(item_r4.booking) ? 12 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 5 && ctx_r1.visitorName(item_r4.booking) ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 7 && item_r4.booking.host ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r4.height > 7 && ctx_r1.isBookingForOtherUser(item_r4.booking) ? 15 : -1);
  }
}
var ScheduleDayViewComponent = class _ScheduleDayViewComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog = inject(MatDialog);
    this._state = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this.date = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = input(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colors = BOOKING_TYPE_COLORS;
    this._changed = signal(
      0,
      ...ngDevMode ? [{ debugName: "_changed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.scrollContainer = viewChild(
      "scrollContainer",
      ...ngDevMode ? [{ debugName: "scrollContainer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentTimeMarker = viewChild(
      "currentTimeMarker",
      ...ngDevMode ? [{ debugName: "currentTimeMarker" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.START_HOUR = 0;
    this.END_HOUR = 23;
    this.HOUR_HEIGHT = 64;
    this.timeSlots = computed(
      () => {
        const slots = [];
        for (let hour = this.START_HOUR; hour <= this.END_HOUR; hour++) {
          const date = setHours(setMinutes(/* @__PURE__ */ new Date(), 0), hour);
          slots.push({
            hour,
            label: format(date, "h a")
          });
        }
        return slots;
      },
      ...ngDevMode ? [{ debugName: "timeSlots" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.gridHeight = computed(
      () => {
        return (this.END_HOUR - this.START_HOUR + 1) * this.HOUR_HEIGHT;
      },
      ...ngDevMode ? [{ debugName: "gridHeight" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isToday = computed(
      () => {
        return isSameDay(this.date(), Date.now());
      },
      ...ngDevMode ? [{ debugName: "isToday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currentTimePosition = computed(
      () => {
        if (!this.isToday())
          return null;
        this._changed();
        const now = Date.now();
        const dayStart = setHours(setMinutes(startOfDay(this.date()), 0), this.START_HOUR).valueOf();
        const dayEnd = setHours(setMinutes(startOfDay(this.date()), 0), this.END_HOUR + 1).valueOf();
        if (now < dayStart || now > dayEnd)
          return null;
        const totalMinutes = (dayEnd - dayStart) / (1e3 * 60);
        const currentOffset = (now - dayStart) / (1e3 * 60);
        const position = currentOffset / totalMinutes * 100;
        return position;
      },
      ...ngDevMode ? [{ debugName: "currentTimePosition" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dayBookings = computed(
      () => {
        const targetDate = this.date();
        return this.bookings().filter((booking) => isSameDay(booking.date, targetDate));
      },
      ...ngDevMode ? [{ debugName: "dayBookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.positionedBookings = computed(
      () => {
        const bookings = this.dayBookings();
        if (!bookings.length)
          return [];
        const sorted = [...bookings].sort((a, b) => {
          if (a.date !== b.date)
            return a.date - b.date;
          return b.duration - a.duration;
        });
        const positioned = [];
        const columns = [];
        for (const booking of sorted) {
          let columnIndex = 0;
          let placed = false;
          while (!placed) {
            if (!columns[columnIndex]) {
              columns[columnIndex] = [];
            }
            const hasOverlap = columns[columnIndex].some((existing) => this.checkOverlap(booking, existing));
            if (!hasOverlap) {
              columns[columnIndex].push(booking);
              placed = true;
            } else {
              columnIndex++;
            }
          }
        }
        for (const booking of sorted) {
          let columnIndex = 0;
          for (let i = 0; i < columns.length; i++) {
            if (columns[i].includes(booking)) {
              columnIndex = i;
              break;
            }
          }
          let totalColumns = 1;
          for (let i = 0; i < columns.length; i++) {
            if (columns[i].some((b) => this.checkOverlap(booking, b) || b === booking)) {
              totalColumns = Math.max(totalColumns, i + 1);
            }
          }
          const position = this.calculatePosition(booking, columnIndex, totalColumns);
          positioned.push(position);
        }
        return positioned;
      },
      ...ngDevMode ? [{ debugName: "positionedBookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isBookingForOtherUser = isBookingForOtherUser;
    this.bookedForLabel = bookedForLabel;
    effect(() => {
      const position = this.currentTimePosition();
      const marker = this.currentTimeMarker()?.nativeElement;
      const container = this.scrollContainer()?.nativeElement;
      if (position !== null && marker && container) {
        setTimeout(() => {
          marker.scrollIntoView({
            behavior: "smooth",
            block: "center"
          });
        }, 100);
      }
    });
  }
  ngOnInit() {
    this.interval("time", () => this._changed.set(Date.now()), 10 * 1e3);
  }
  checkOverlap(a, b) {
    return a.date < b.date_end && a.date_end > b.date;
  }
  calculatePosition(booking, column, totalColumns) {
    const dayStart = setHours(setMinutes(startOfDay(this.date()), 0), this.START_HOUR).valueOf();
    const dayEnd = setHours(setMinutes(startOfDay(this.date()), 0), this.END_HOUR + 1).valueOf();
    const totalMinutes = (dayEnd - dayStart) / (1e3 * 60);
    const bookingStart = Math.max(booking.date, dayStart);
    const bookingEnd = Math.min(booking.date_end, dayEnd);
    const startOffset = (bookingStart - dayStart) / (1e3 * 60);
    const duration = (bookingEnd - bookingStart) / (1e3 * 60);
    const top = startOffset / totalMinutes * 100;
    const height = Math.max(duration / totalMinutes * 100, 1);
    const gap = 0.5;
    const availableWidth = 100 - gap * (totalColumns - 1);
    const columnWidth = availableWidth / totalColumns;
    const left = column * (columnWidth + gap);
    const width = columnWidth;
    return {
      booking,
      top,
      height,
      left,
      width,
      column,
      totalColumns
    };
  }
  type(booking) {
    if (booking instanceof Booking)
      return booking.booking_type;
    return booking.extension_data?.shared_event ? "group-event" : "event";
  }
  bookingStatus(booking) {
    const status = booking.status;
    if (status === "tentative" && booking instanceof Booking && booking.booking_type === "parking" && isSameWeek(Date.now(), booking.date)) {
      return "waitlisted";
    }
    return status === "approved" || status === "tentative" || status === "declined" ? status : null;
  }
  statusLabel(status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  statusColor(status) {
    if (status === "approved")
      return "var(--success)";
    if (status === "waitlisted")
      return "var(--info)";
    if (status === "tentative")
      return "var(--warn)";
    return "var(--error)";
  }
  visitorName(booking) {
    if (booking instanceof Booking && ["visitor", "vip-visitor"].includes(booking.booking_type)) {
      return visitorDisplayNameFor(booking);
    }
    return "";
  }
  location(booking) {
    return bookingLocationString(booking, this._org);
  }
  backgroundColor(booking) {
    const color = this.colors[this.type(booking)][0];
    return this.isBookingForOtherUser(booking) ? `${color}80` : color;
  }
  viewBooking(bkn) {
    this._dialog.closeAll();
    if (bkn instanceof CalendarEvent) {
      if (bkn.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t),
            concierge: false
          }
        });
      } else {
        this._dialog.open(EventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t)
          }
        });
      }
    } else {
      const view_component = bkn.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = {
        booking: bkn.booking_type === "group-event" ? { booking: bkn, concierge: false } : bkn,
        edit_fn: (i) => this._state.editBooking(i),
        remove_fn: (i, t) => this._state.remove(i, t),
        end_fn: (i) => this._state.end(i)
      };
      this._dialog.open(view_component, { data });
    }
  }
  static {
    this.\u0275fac = function ScheduleDayViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleDayViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleDayViewComponent, selectors: [["schedule-day-view"]], viewQuery: function ScheduleDayViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.scrollContainer, _c03, 5)(ctx.currentTimeMarker, _c13, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { date: [1, "date"], bookings: [1, "bookings"], loading: [1, "loading"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 7, consts: [["scrollContainer", ""], ["currentTimeMarker", ""], [1, "h-full", "w-full", "overflow-auto"], [1, "m-2"], [1, "mb-4", "flex", "items-center", "justify-between", "px-4", "py-2"], [1, "text-xl", "font-medium"], [1, "border-base-300", "bg-base-100", "text-base-content", "rounded-md", "border", "px-2", "py-1", "text-sm"], [1, "relative", "flex"], [1, "w-12", "flex-shrink-0", "pr-2"], [1, "text-base-content", "flex", "h-16", "items-start", "justify-end", "text-xs", "opacity-60"], [1, "border-base-300", "bg-base-100", "relative", "flex-1", "overflow-hidden", "rounded-xl", "border-x", "border-b"], [1, "absolute", "inset-0"], [1, "relative", "h-16"], [1, "pointer-events-none", "absolute", "inset-x-0", "z-20", "flex", "items-center", 3, "top"], [1, "relative", "h-full"], ["matRipple", "", 1, "absolute", "overflow-hidden", "rounded-lg", "border", "p-2", "text-left", "text-black", "shadow-sm", "transition-shadow", "hover:shadow-md", 3, "top", "height", "left", "width", "border-color", "background-color", "z-index", "matTooltip"], [1, "relative", "-translate-y-1/2"], [1, "border-base-300", "absolute", "inset-x-0", "top-0", "border-t"], [1, "border-base-300", "absolute", "inset-x-0", "top-8", "border-t", "border-dashed"], [1, "pointer-events-none", "absolute", "inset-x-0", "z-20", "flex", "items-center"], [1, "bg-error", "-ml-1", "h-2", "w-2", "rounded-full"], [1, "border-error", "flex-1", "border-t-2"], ["matRipple", "", 1, "absolute", "overflow-hidden", "rounded-lg", "border", "p-2", "text-left", "text-black", "shadow-sm", "transition-shadow", "hover:shadow-md", 3, "click", "matTooltip"], [1, "flex", "items-start", "justify-between", "gap-2", "text-sm", "font-medium"], [1, "min-w-0", "truncate"], [1, "text-xs", "opacity-60"], [1, "h-2.5", "w-2.5", "flex-shrink-0", "rounded-full", 3, "background-color", "matTooltip"], [1, "text-xs", "opacity-75"], [1, "mt-1", "truncate", "text-xs", "opacity-60"], [1, "h-2.5", "w-2.5", "flex-shrink-0", "rounded-full", 3, "matTooltip"]], template: function ScheduleDayViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4)(4, "h2", 5);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 6);
        \u0275\u0275text(8);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div", 7)(10, "div", 8);
        \u0275\u0275repeaterCreate(11, ScheduleDayViewComponent_For_12_Template, 3, 1, "div", 9, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 10)(14, "div", 11);
        \u0275\u0275repeaterCreate(15, ScheduleDayViewComponent_For_16_Template, 3, 0, "div", 12, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, ScheduleDayViewComponent_Conditional_17_Template, 4, 2, "div", 13);
        \u0275\u0275elementStart(18, "div", 14);
        \u0275\u0275repeaterCreate(19, ScheduleDayViewComponent_For_20_Template, 16, 34, "button", 15, _forTrack1);
        \u0275\u0275elementEnd()()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 4, ctx.date(), "EEEE, MMMM d, yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate2(" ", ctx.bookings()?.length || 0, " booking", ctx.bookings()?.length !== 1 ? "s" : "", " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.timeSlots());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.timeSlots());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.currentTimePosition() !== null ? 17 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.positionedBookings());
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, AsyncPipe, DatePipe, UserPipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleDayViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-day-view`, template: `
        <div class="h-full w-full overflow-auto" #scrollContainer>
            <div class="m-2">
                <div class="mb-4 flex items-center justify-between px-4 py-2">
                    <h2 class="text-xl font-medium">
                        {{ date() | date: 'EEEE, MMMM d, yyyy' }}
                    </h2>
                    <div
                        class="border-base-300 bg-base-100 text-base-content rounded-md border px-2 py-1 text-sm"
                    >
                        {{ bookings()?.length || 0 }} booking{{
                            bookings()?.length !== 1 ? 's' : ''
                        }}
                    </div>
                </div>
                <div class="relative flex">
                    <!-- Time labels -->
                    <div class="w-12 flex-shrink-0 pr-2">
                        @for (slot of timeSlots(); track slot.hour) {
                            <div
                                class="text-base-content flex h-16 items-start justify-end text-xs opacity-60"
                            >
                                <div class="relative -translate-y-1/2">
                                    {{ slot.label }}
                                </div>
                            </div>
                        }
                    </div>

                    <!-- Calendar grid -->
                    <div
                        class="border-base-300 bg-base-100 relative flex-1 overflow-hidden rounded-xl border-x border-b"
                    >
                        <!-- Grid lines -->
                        <div class="absolute inset-0">
                            @for (slot of timeSlots(); track slot.hour) {
                                <div class="relative h-16">
                                    <div
                                        class="border-base-300 absolute inset-x-0 top-0 border-t"
                                    ></div>
                                    <div
                                        class="border-base-300 absolute inset-x-0 top-8 border-t border-dashed"
                                    ></div>
                                </div>
                            }
                        </div>

                        <!-- Current time marker -->
                        @if (currentTimePosition() !== null) {
                            <div
                                #currentTimeMarker
                                class="pointer-events-none absolute inset-x-0 z-20 flex items-center"
                                [style.top.%]="currentTimePosition()"
                            >
                                <div
                                    class="bg-error -ml-1 h-2 w-2 rounded-full"
                                ></div>
                                <div
                                    class="border-error flex-1 border-t-2"
                                ></div>
                            </div>
                        }

                        <!-- Bookings -->
                        <div class="relative h-full">
                            @for (
                                item of positionedBookings();
                                track item.booking.id
                            ) {
                                <button
                                    matRipple
                                    class="absolute overflow-hidden rounded-lg border p-2 text-left text-black shadow-sm transition-shadow hover:shadow-md"
                                    [style.top.%]="item.top"
                                    [style.height.%]="item.height"
                                    [style.left.%]="item.left"
                                    [style.width.%]="item.width"
                                    [style.border-color]="
                                        colors[type(item.booking)][1]
                                    "
                                    [style.background-color]="
                                        backgroundColor(item.booking)
                                    "
                                    [style.z-index]="10"
                                    (click)="viewBooking(item.booking)"
                                    [matTooltip]="
                                        item.booking.title +
                                        (location(item.booking)
                                            ? '
' + location(item.booking)
                                            : '') +
                                        (visitorName(item.booking)
                                            ? '
' + visitorName(item.booking)
                                            : '') +
                                        (isBookingForOtherUser(item.booking)
                                            ? '
for ' + bookedForLabel(item.booking)
                                            : '') +
                                        '
' +
                                        ($any(item.booking).user_name ||
                                            (
                                                $any(item.booking).host
                                                | user
                                                | async
                                            )?.name ||
                                            $any(item.booking).host) +
                                        '
' +
                                        (item.booking.date
                                            | date: 'shortTime') +
                                        ' - ' +
                                        (item.booking.date_end
                                            | date: 'shortTime')
                                    "
                                >
                                    <div
                                        class="flex items-start justify-between gap-2 text-sm font-medium"
                                    >
                                        <div class="min-w-0 truncate">
                                            {{ item.booking.title }}
                                            @if (
                                                item.height <= 5 &&
                                                location(item.booking)
                                            ) {
                                                <span
                                                    class="text-xs opacity-60"
                                                >
                                                    \xB7
                                                    {{ location(item.booking) }}
                                                </span>
                                            }
                                            @if (
                                                item.height <= 5 &&
                                                visitorName(item.booking)
                                            ) {
                                                <span
                                                    class="text-xs opacity-60"
                                                >
                                                    \xB7
                                                    {{
                                                        visitorName(
                                                            item.booking
                                                        )
                                                    }}
                                                </span>
                                            }
                                        </div>
                                        @if (
                                            bookingStatus(item.booking);
                                            as status
                                        ) {
                                            <div
                                                class="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                [style.background-color]="
                                                    statusColor(status)
                                                "
                                                [matTooltip]="
                                                    statusLabel(status)
                                                "
                                            ></div>
                                        }
                                    </div>
                                    @if (item.height > 3) {
                                        <div class="text-xs opacity-75">
                                            {{
                                                item.booking.date
                                                    | date: 'shortTime'
                                            }}
                                            -
                                            {{
                                                item.booking.date_end
                                                    | date: 'shortTime'
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 5 &&
                                        location(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{ location(item.booking) }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 5 &&
                                        visitorName(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{ visitorName(item.booking) }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        $any(item.booking).host
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            {{
                                                (
                                                    $any(item.booking).host
                                                    | user
                                                    | async
                                                )?.name ||
                                                    $any(item.booking).organiser
                                                        ?.name ||
                                                    $any(item.booking).host
                                            }}
                                        </div>
                                    }
                                    @if (
                                        item.height > 7 &&
                                        isBookingForOtherUser(item.booking)
                                    ) {
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                $any(item.booking)
                                                    .booked_by_name ||
                                                    (
                                                        $any(item.booking)
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    $any(item.booking)
                                                        .booked_by_email
                                            }}
                                        </div>
                                        <div
                                            class="mt-1 truncate text-xs opacity-60"
                                        >
                                            for
                                            {{ bookedForLabel(item.booking) }}
                                        </div>
                                    }
                                </button>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `, imports: [CommonModule, MatRippleModule, MatTooltipModule, UserPipe] }]
  }], () => [], { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], scrollContainer: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }], currentTimeMarker: [{ type: ViewChild, args: ["currentTimeMarker", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleDayViewComponent, { className: "ScheduleDayViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-day-view.component.ts", lineNumber: 318 });
})();

// apps/workplace/src/app/schedule/schedule-filter-card.component.ts
var _forTrack03 = ($index, $item) => $item.type;
function ScheduleFilterCardComponent_For_10_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 4);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_For_10_Conditional_0_Template_settings_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r2.type));
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 7);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 8);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r2.filters()?.shown_types?.includes(item_r2.type));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r2.colors[item_r2.type][0])("color", ctx_r2.colors[item_r2.type][1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r2.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, item_r2.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r2.type] || 0, " ");
  }
}
function ScheduleFilterCardComponent_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFilterCardComponent_For_10_Conditional_0_Template, 10, 10, "settings-toggle", 11);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.hasFeature(item_r2.feat) ? 0 : -1);
  }
}
var ScheduleFilterCardComponent = class _ScheduleFilterCardComponent {
  constructor() {
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this._sheet_ref = inject(MatBottomSheetRef);
    this.filters = this._state.filters;
    this.colors = BOOKING_TYPE_COLORS;
    this.bookings = model(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.feature_list = [
      { type: "desk", feat: "desks", icon: "desk", name: "RESOURCE.DESKS" },
      {
        type: "event",
        feat: "spaces",
        icon: "meeting_room",
        name: "RESOURCE.ROOMS"
      },
      {
        type: "parking",
        feat: ["parking", "parking-requests"],
        icon: "drive_eta",
        name: "RESOURCE.PARKING"
      },
      {
        type: "visitor",
        feat: "visitor-invite",
        icon: "people",
        name: "RESOURCE.VISITORS"
      },
      {
        type: "locker",
        feat: "lockers",
        icon: "lock",
        name: "RESOURCE.LOCKERS"
      },
      {
        type: "group-event",
        feat: "group-events",
        icon: "event_available",
        name: "RESOURCE.EVENTS"
      },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        icon: "star",
        name: "BOOKINGS.VIP_VISITORS"
      }
    ];
    this.counts = computed(
      () => {
        const mapping = {};
        const bkn_list = this.bookings() || [];
        for (const bkn of bkn_list) {
          if (bkn instanceof CalendarEvent) {
            const type = bkn.extension_data?.shared_event ? "group-event" : "event";
            mapping[type] = (mapping[type] || 0) + 1;
          } else {
            const type = bkn.booking_type;
            mapping[type] = (mapping[type] || 0) + 1;
            if (isBookingForOtherUser(bkn)) {
              mapping["bookings-for-others"] = (mapping["bookings-for-others"] || 0) + 1;
            }
          }
        }
        return mapping;
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleType = (t) => this._state.toggleType(t);
    this.toggleBookingsForOthers = () => this._state.toggleBookingsForOthers();
    this.dismiss = () => this._sheet_ref.dismiss();
  }
  hasFeature(feature) {
    const features = this._settings.get("app.features") || [];
    if (Array.isArray(feature)) {
      return feature.some((f) => features.includes(f));
    }
    return features.includes(feature);
  }
  static {
    this.\u0275fac = function ScheduleFilterCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFilterCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFilterCardComponent, selectors: [["schedule-filter-card"]], inputs: { bookings: [1, "bookings"] }, outputs: { bookings: "bookingsChange" }, decls: 24, vars: 8, consts: [[1, "border-base-200", "mb-4", "flex", "items-center", "space-x-2", "border-b", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "w-1/2", "flex-1", "text-center"], [1, "border-base-200", "mb-4", "space-y-2", "border-b", "px-4", "pb-4"], [3, "click", "ngModel"], [1, "-my-2", "-ml-2", "flex", "items-center", "space-x-2"], [1, "bg-base-300", "rounded-full", "p-1", "text-2xl"], [1, "flex-1", "font-medium"], [1, "font-mono", "text-xs"], [1, "px-4", "pb-4"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"], [3, "ngModel"]], template: function ScheduleFilterCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_1_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "h2", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(7, "icon");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 3);
        \u0275\u0275repeaterCreate(9, ScheduleFilterCardComponent_For_10_Template, 1, 1, null, null, _forTrack03);
        \u0275\u0275elementStart(11, "settings-toggle", 4);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_settings_toggle_click_11_listener() {
          return ctx.toggleBookingsForOthers();
        });
        \u0275\u0275elementStart(12, "div", 5)(13, "div", 6)(14, "icon");
        \u0275\u0275text(15, "perm_contact_calendar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 7);
        \u0275\u0275text(17, "Bookings for Others");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 9)(21, "button", 10);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_21_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(22);
        \u0275\u0275pipe(23, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.filters()?.show_bookings_for_others);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.counts()["bookings-for-others"] || 0, " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 6, "COMMON.APPLY"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatCheckboxModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleFilterCardComponent, [{
    type: Component,
    args: [{ selector: "schedule-filter-card", template: `
        <div
            class="border-base-200 mb-4 flex items-center space-x-2 border-b text-xl"
        >
            <button icon matRipple (click)="dismiss()">
                <icon>chevron_left</icon>
            </button>
            <h2 class="w-1/2 flex-1 text-center">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h2>
            <icon></icon>
        </div>
        <div class="border-base-200 mb-4 space-y-2 border-b px-4 pb-4">
            @for (item of feature_list; track item.type) {
                @if (hasFeature(item.feat)) {
                    <settings-toggle
                        [ngModel]="filters()?.shown_types?.includes(item.type)"
                        (click)="toggleType(item.type)"
                    >
                        <div class="-my-2 -ml-2 flex items-center space-x-2">
                            <div
                                class="bg-base-300 rounded-full p-1 text-2xl"
                                [style.background-color]="colors[item.type][0]"
                                [style.color]="colors[item.type][1]"
                            >
                                <icon>{{ item.icon }}</icon>
                            </div>
                            <div class="flex-1 font-medium">
                                {{ item.name | translate }}
                            </div>
                            <div class="font-mono text-xs">
                                {{ counts()[item.type] || 0 }}
                            </div>
                        </div>
                    </settings-toggle>
                }
            }
            <settings-toggle
                [ngModel]="filters()?.show_bookings_for_others"
                (click)="toggleBookingsForOthers()"
            >
                <div class="-my-2 -ml-2 flex items-center space-x-2">
                    <div class="bg-base-300 rounded-full p-1 text-2xl">
                        <icon>perm_contact_calendar</icon>
                    </div>
                    <div class="flex-1 font-medium">Bookings for Others</div>
                    <div class="font-mono text-xs">
                        {{ counts()['bookings-for-others'] || 0 }}
                    </div>
                </div>
            </settings-toggle>
        </div>
        <div class="px-4 pb-4">
            <button
                btn
                matRipple
                name="schedule-apply-filter"
                class="w-full"
                (click)="dismiss()"
            >
                {{ 'COMMON.APPLY' | translate }}
            </button>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatCheckboxModule,
      FormsModule,
      MatRippleModule,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-filter-card.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */\n"] }]
  }], null, { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }, { type: Output, args: ["bookingsChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFilterCardComponent, { className: "ScheduleFilterCardComponent", filePath: "apps/workplace/src/app/schedule/schedule-filter-card.component.ts", lineNumber: 106 });
})();

// apps/workplace/src/app/schedule/schedule-filters.component.ts
var _forTrack04 = ($index, $item) => $item.type;
function ScheduleFiltersComponent_For_3_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_For_3_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r1);
      const item_r2 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r2.type, true));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, item_r2.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r2.type] || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("name", "schedule-remove-" + item_r2.type + "-filter-mobile");
  }
}
function ScheduleFiltersComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFiltersComponent_For_3_Conditional_0_Template, 9, 5, "div", 2);
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.filters()?.shown_types?.includes(item_r2.type) && ctx_r2.hasFeature(item_r2.feat) ? 0 : -1);
  }
}
function ScheduleFiltersComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "icon", 11);
    \u0275\u0275text(2, "perm_contact_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4, "Bookings for Others");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 12);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_4_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBookingsForOthers());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()["bookings-for-others"] || 0, " ");
  }
}
function ScheduleFiltersComponent_For_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "button", 10);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_For_11_Conditional_0_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r5);
      const item_r6 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleType(item_r6.type, true));
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, item_r6.name));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()[item_r6.type] || 0, " ");
    \u0275\u0275advance();
    \u0275\u0275property("name", "schedule-remove-" + item_r6.type + "-filter-mobile");
  }
}
function ScheduleFiltersComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleFiltersComponent_For_11_Conditional_0_Template, 9, 5, "div", 7);
  }
  if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r2.filters()?.shown_types?.includes(item_r6.type) && ctx_r2.hasFeature(item_r6.feat) ? 0 : -1);
  }
}
function ScheduleFiltersComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "icon", 11);
    \u0275\u0275text(2, "perm_contact_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8);
    \u0275\u0275text(4, "Bookings for Others");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 9);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 13);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.toggleBookingsForOthers());
    });
    \u0275\u0275elementStart(8, "icon");
    \u0275\u0275text(9, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r2.counts()["bookings-for-others"] || 0, " ");
  }
}
var ScheduleFiltersComponent = class _ScheduleFiltersComponent {
  constructor() {
    this._sheet = inject(MatBottomSheet);
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.bookings = input(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = settingSignal("features", []);
    this.counts = computed(
      () => {
        const mapping = {};
        const bkn_list = this.bookings() || [];
        for (const bkn of bkn_list) {
          if (bkn instanceof CalendarEvent) {
            const type = bkn.extension_data?.shared_event ? "group-event" : "event";
            mapping[type] = (mapping[type] || 0) + 1;
          } else {
            const type = bkn.booking_type;
            mapping[type] = (mapping[type] || 0) + 1;
            if (isBookingForOtherUser(bkn)) {
              mapping["bookings-for-others"] = (mapping["bookings-for-others"] || 0) + 1;
            }
          }
        }
        return mapping;
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.feature_list = [
      { type: "desk", feat: "desks", name: "RESOURCE.DESKS" },
      { type: "event", feat: "spaces", name: "RESOURCE.MEETINGS" },
      {
        type: "parking",
        feat: ["parking", "parking-requests"],
        name: "RESOURCE.PARKING"
      },
      { type: "visitor", feat: "visitor-invite", name: "RESOURCE.VISITORS" },
      { type: "locker", feat: "lockers", name: "RESOURCE.LOCKERS" },
      { type: "group-event", feat: "group-events", name: "RESOURCE.EVENTS" },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        name: "BOOKINGS.VIP_VISITORS"
      }
    ];
    this.toggleType = (t, c = false) => this._state.toggleType(t, c);
    this.toggleBookingsForOthers = () => this._state.toggleBookingsForOthers();
  }
  hasFeature(feature) {
    const features = this.features() || [];
    if (Array.isArray(feature)) {
      return feature.some((f) => features.includes(f));
    }
    return features.includes(feature);
  }
  openFilters() {
    const ref = this._sheet.open(ScheduleFilterCardComponent);
    ref.instance.bookings.set(this.bookings());
  }
  static {
    this.\u0275fac = function ScheduleFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFiltersComponent, selectors: [["schedule-filters"]], inputs: { bookings: [1, "bookings"] }, decls: 13, vars: 2, consts: [[1, "border-base-300", "bg-base-100", "hidden", "border-b", "p-1", "sm:block"], [1, "flex", "flex-wrap"], [1, "border-base-200", "bg-base-100", "m-0.5", "flex", "items-center", "rounded-3xl", "border", "pl-2", "text-sm"], [1, "border-base-300", "bg-base-100", "flex", "items-center", "space-x-2", "overflow-auto", "border-b", "p-2", "sm:hidden"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "h-10", "min-h-10", "min-w-10", "sm:min-h-12", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], [1, "border-base-200", "bg-base-100", "flex", "items-center", "rounded-3xl", "border", "pl-2", "text-sm"], [1, "px-2"], [1, "bg-base-200", "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full", "font-mono", "text-[0.625rem]", "opacity-50"], ["icon", "", "matRipple", "", 3, "click", "name"], [1, "text-base-content/50", "text-xl"], ["icon", "", "matRipple", "", "name", "schedule-remove-bookings-for-others-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-bookings-for-others-filter-mobile", 3, "click"]], template: function ScheduleFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, ScheduleFiltersComponent_For_3_Template, 1, 1, null, null, _forTrack04);
        \u0275\u0275conditionalCreate(4, ScheduleFiltersComponent_Conditional_4_Template, 10, 1, "div", 2);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275listener("click", function ScheduleFiltersComponent_Template_button_click_6_listener() {
          return ctx.openFilters();
        });
        \u0275\u0275elementStart(7, "div", 5)(8, "icon", 6);
        \u0275\u0275text(9, "filter_list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275repeaterCreate(10, ScheduleFiltersComponent_For_11_Template, 1, 1, null, null, _forTrack04);
        \u0275\u0275conditionalCreate(12, ScheduleFiltersComponent_Conditional_12_Template, 10, 1, "div", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filters()?.show_bookings_for_others ? 4 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filters()?.show_bookings_for_others ? 12 : -1);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleFiltersComponent, [{
    type: Component,
    args: [{ selector: "schedule-filters", template: `
        <div class="border-base-300 bg-base-100 hidden border-b p-1 sm:block">
            <div class="flex flex-wrap">
                @for (item of feature_list; track item.type) {
                    @if (
                        filters()?.shown_types?.includes(item.type) &&
                        hasFeature(item.feat)
                    ) {
                        <div
                            class="border-base-200 bg-base-100 m-0.5 flex items-center rounded-3xl border pl-2 text-sm"
                        >
                            <div class="px-2">{{ item.name | translate }}</div>
                            <div
                                class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                            >
                                {{ counts()[item.type] || 0 }}
                            </div>
                            <button
                                icon
                                matRipple
                                [name]="
                                    'schedule-remove-' +
                                    item.type +
                                    '-filter-mobile'
                                "
                                (click)="toggleType(item.type, true)"
                            >
                                <icon>close</icon>
                            </button>
                        </div>
                    }
                }
                @if (filters()?.show_bookings_for_others) {
                    <div
                        class="border-base-200 bg-base-100 m-0.5 flex items-center rounded-3xl border pl-2 text-sm"
                    >
                        <icon class="text-base-content/50 text-xl"
                            >perm_contact_calendar</icon
                        >
                        <div class="px-2">Bookings for Others</div>
                        <div
                            class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                        >
                            {{ counts()['bookings-for-others'] || 0 }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-bookings-for-others-filter"
                            (click)="toggleBookingsForOthers()"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
        <div
            class="border-base-300 bg-base-100 flex items-center space-x-2 overflow-auto border-b p-2 sm:hidden"
        >
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="h-10 min-h-10 min-w-10 sm:min-h-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                </div>
            </button>
            @for (item of feature_list; track item.type) {
                @if (
                    filters()?.shown_types?.includes(item.type) &&
                    hasFeature(item.feat)
                ) {
                    <div
                        class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                    >
                        <div class="px-2">{{ item.name | translate }}</div>
                        <div
                            class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                        >
                            {{ counts()[item.type] || 0 }}
                        </div>
                        <button
                            icon
                            matRipple
                            [name]="
                                'schedule-remove-' +
                                item.type +
                                '-filter-mobile'
                            "
                            (click)="toggleType(item.type, true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            }
            @if (filters()?.show_bookings_for_others) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <icon class="text-base-content/50 text-xl"
                        >perm_contact_calendar</icon
                    >
                    <div class="px-2">Bookings for Others</div>
                    <div
                        class="bg-base-200 flex h-5 w-5 items-center justify-center rounded-full font-mono text-[0.625rem] opacity-50"
                    >
                        {{ counts()['bookings-for-others'] || 0 }}
                    </div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-bookings-for-others-filter-mobile"
                        (click)="toggleBookingsForOthers()"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </div>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule] }]
  }], null, { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFiltersComponent, { className: "ScheduleFiltersComponent", filePath: "apps/workplace/src/app/schedule/schedule-filters.component.ts", lineNumber: 148 });
})();

// apps/workplace/src/app/schedule/schedule-list-view.component.ts
var _forTrack05 = ($index, $item) => $item.date;
var _forTrack12 = ($index, $item) => $item.id;
function ScheduleListViewComponent_Conditional_0_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" (", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), ") ");
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 2);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("event", item_r1)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 3);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("booking", item_r1)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_0_Template, 1, 3, "event-card", 2)(1, ScheduleListViewComponent_Conditional_0_For_1_For_5_Conditional_1_Template, 1, 4, "booking-card", 3);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.isEvent(item_r1) ? 0 : 1);
  }
}
function ScheduleListViewComponent_Conditional_0_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 1);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, ScheduleListViewComponent_Conditional_0_For_1_Conditional_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ScheduleListViewComponent_Conditional_0_For_1_For_5_Template, 2, 1, null, null, _forTrack12);
  }
  if (rf & 2) {
    const date_block_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, date_block_r3.date, "EEE dd LLL yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(date_block_r3.is_today ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(date_block_r3.bookings);
  }
}
function ScheduleListViewComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleListViewComponent_Conditional_0_For_1_Template, 6, 5, null, null, _forTrack05);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.booking_dates());
  }
}
function ScheduleListViewComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(1, 2, ctx_r1.date(), "dd LLL yyyy"), " - ", \u0275\u0275pipeBind2(2, 5, ctx_r1.end_date(), "dd LLL yyyy"), " ");
  }
}
function ScheduleListViewComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r1.date(), "EEEE, dd LLL yyyy"), " ");
  }
}
function ScheduleListViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "img", 4);
    \u0275\u0275elementStart(2, "p", 5);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275conditionalCreate(5, ScheduleListViewComponent_Conditional_1_Conditional_5_Template, 3, 8)(6, ScheduleListViewComponent_Conditional_1_Conditional_6_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.SCHEDULE_EMPTY"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.end_date() && !ctx_r1.isSameDayCheck(ctx_r1.date(), ctx_r1.end_date()) ? 5 : 6);
  }
}
var ScheduleListViewComponent = class _ScheduleListViewComponent {
  constructor() {
    this._state = inject(ScheduleStateService);
    this.date = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = input(
      null,
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = input(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isEvent = (i) => i instanceof CalendarEvent;
    this.isSameDayCheck = (a, b) => isSameDay(a, b);
    this.edit_fn = (i) => this._state.edit(i);
    this.edit_booking_fn = (i) => this._state.editBooking(i);
    this.remove_fn = (i, t) => this._state.remove(i, t);
    this.end_fn = (i) => this._state.end(i);
    this.booking_dates = computed(
      () => {
        if (this.loading())
          return [];
        const sorted = (this.bookings() || []).sort((a, b) => a.date - b.date);
        const start = this.date();
        const end = this.end_date();
        const filtered = sorted.filter((b) => {
          if (end && !isSameDay(start, end)) {
            const booking_date = b.date;
            return (isAfter(booking_date, startOfDay(start)) || isSameDay(booking_date, start)) && (isBefore(booking_date, endOfDay(end)) || isSameDay(booking_date, end));
          }
          return isSameDay(b.date, start);
        });
        const dates = /* @__PURE__ */ new Set();
        for (const booking of filtered) {
          const date = format(booking.date, "yyyy-MM-dd");
          if (!dates.has(date))
            dates.add(date);
        }
        const list = [];
        for (const date of dates) {
          const day = parse(date, "yyyy-MM-dd", 0);
          list.push({
            id: date,
            date: day.valueOf(),
            bookings: filtered.filter((booking) => isSameDay(booking.date, day)),
            is_today: isSameDay(day, Date.now())
          });
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "booking_dates" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ScheduleListViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleListViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleListViewComponent, selectors: [["schedule-list-view"]], inputs: { date: [1, "date"], end_date: [1, "end_date"], bookings: [1, "bookings"], loading: [1, "loading"] }, decls: 2, vars: 1, consts: [[1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], [1, "mb-2", "font-medium"], [3, "event", "edit_fn", "remove_fn"], [3, "booking", "edit_fn", "remove_fn", "end_fn"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function ScheduleListViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ScheduleListViewComponent_Conditional_0_Template, 2, 0)(1, ScheduleListViewComponent_Conditional_1_Template, 7, 4, "div", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.booking_dates()?.length ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      EventCardComponent,
      BookingCardComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleListViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-list-view`, template: `
        @if (booking_dates()?.length) {
            @for (date_block of booking_dates(); track date_block.date) {
                <h3 class="mb-2 font-medium">
                    {{ date_block.date | date: 'EEE dd LLL yyyy' }}
                    @if (date_block.is_today) {
                        <span> ({{ 'COMMON.TODAY' | translate }}) </span>
                    }
                </h3>
                @for (item of date_block.bookings; track item.id) {
                    @if (isEvent(item)) {
                        <event-card
                            [event]="item"
                            [edit_fn]="edit_fn"
                            [remove_fn]="remove_fn"
                        ></event-card>
                    } @else {
                        <booking-card
                            [booking]="item"
                            [edit_fn]="edit_booking_fn"
                            [remove_fn]="remove_fn"
                            [end_fn]="end_fn"
                        ></booking-card>
                    }
                }
            }
        } @else {
            <div
                class="flex w-full flex-col items-center justify-center space-y-4 p-8"
            >
                <img src="assets/img/no-events.svg" class="mr-4" />
                <p class="opacity-30">
                    {{ 'APP.WORKPLACE.SCHEDULE_EMPTY' | translate }}
                    @if (end_date() && !isSameDayCheck(date(), end_date())) {
                        {{ date() | date: 'dd LLL yyyy' }} -
                        {{ end_date() | date: 'dd LLL yyyy' }}
                    } @else {
                        {{ date() | date: 'EEEE, dd LLL yyyy' }}
                    }
                </p>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      EventCardComponent,
      BookingCardComponent
    ] }]
  }], null, { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], end_date: [{ type: Input, args: [{ isSignal: true, alias: "end_date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleListViewComponent, { className: "ScheduleListViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-list-view.component.ts", lineNumber: 71 });
})();

// libs/form-fields/src/lib/date-range-calendar.component.ts
function DateRangeCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const weekday_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, weekday_r1, "EEE"), " ");
  }
}
function DateRangeCalendarComponent_For_16_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 12);
  }
}
function DateRangeCalendarComponent_For_16_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 14);
  }
}
function DateRangeCalendarComponent_For_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function DateRangeCalendarComponent_For_16_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.selectDate(day_r3.id));
    })("mouseenter", function DateRangeCalendarComponent_For_16_Template_button_mouseenter_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setHoveredDate(day_r3.id));
    });
    \u0275\u0275conditionalCreate(1, DateRangeCalendarComponent_For_16_Conditional_1_Template, 1, 0, "div", 9);
    \u0275\u0275conditionalCreate(2, DateRangeCalendarComponent_For_16_Conditional_2_Template, 1, 0, "div", 10);
    \u0275\u0275conditionalCreate(3, DateRangeCalendarComponent_For_16_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275conditionalCreate(4, DateRangeCalendarComponent_For_16_Conditional_4_Template, 1, 0, "div", 12);
    \u0275\u0275elementStart(5, "div", 13);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DateRangeCalendarComponent_For_16_Conditional_8_Template, 1, 0, "div", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-secondary-content", day_r3.is_start || day_r3.is_end);
    \u0275\u0275property("disabled", day_r3.disabled);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_selected && !day_r3.is_start && !day_r3.is_end ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start && ctx_r3.end_after_start() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_end && ctx_r3.end_after_start() ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_start || day_r3.is_end ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-30", !day_r3.is_month);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(7, 11, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(day_r3.is_today ? 8 : -1);
  }
}
var DateRangeCalendarComponent = class _DateRangeCalendarComponent {
  constructor() {
    this.from_date = input(startOfDay(Date.now()).valueOf(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "from_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "from" }));
    this.to_date = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "to_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "to" }));
    this.offset_weekday = input(
      0,
      ...ngDevMode ? [{ debugName: "offset_weekday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_range_days = input(
      31,
      ...ngDevMode ? [{ debugName: "max_range_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.startInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "startInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "start" }));
    this.start = linkedSignal(
      this.startInput,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.endInput = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "endInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "end" }));
    this.end = linkedSignal(
      this.endInput,
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.month = model(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "month" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.startChange = output();
    this.endChange = output();
    this._selecting_end = false;
    this.hovered_date = signal(
      null,
      ...ngDevMode ? [{ debugName: "hovered_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays = signal(
      [],
      ...ngDevMode ? [{ debugName: "weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.month_days = signal(
      [],
      ...ngDevMode ? [{ debugName: "month_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_after_start = computed(
      () => {
        const start = this.start();
        const end = this._selecting_end ? this.hovered_date() : this.end();
        return !!start && !!end && end > start && !isSameDay(end, start);
      },
      ...ngDevMode ? [{ debugName: "end_after_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._setWeekdays();
    this._setMonthDays();
  }
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this._setWeekdays();
      this._setMonthDays();
    }
    if (changes.start) {
      this._setMonthDays();
      this.month.set(this.start() || Date.now());
    }
    if (changes.month) {
      this._setMonthDays();
    }
    if (changes.end) {
      if (!this._selecting_end) {
        this._setMonthDays();
      }
    }
  }
  selectDate(date) {
    const start = this.start();
    const max_days = this.max_range_days();
    if (this._selecting_end) {
      if (date >= start) {
        let end_date = date;
        if (max_days > 0) {
          const max_end_date = addDays(start, max_days - 1).valueOf();
          end_date = Math.min(date, max_end_date);
        }
        this.end.set(end_date);
        this.endChange.emit(end_date);
      } else {
        this.start.set(date);
        this.startChange.emit(date);
        this.end.set(null);
      }
      this._selecting_end = false;
      this.hovered_date.set(null);
    } else {
      this.start.set(date);
      this.startChange.emit(date);
      this.end.set(null);
      this._selecting_end = true;
    }
    this._setMonthDays();
  }
  setHoveredDate(date) {
    if (!this._selecting_end)
      return;
    const start = this.start();
    const max_days = this.max_range_days();
    if (start && max_days > 0) {
      const max_end_date = addDays(start, max_days - 1).valueOf();
      this.hovered_date.set(Math.min(date, max_end_date));
    } else {
      this.hovered_date.set(date);
    }
    this._setMonthDays();
  }
  clearHoveredDate() {
    if (!this._selecting_end)
      return;
    this.hovered_date.set(null);
    this._setMonthDays();
  }
  trackByFn(index, day) {
    return day.id;
  }
  nextMonth() {
    this.month.set(addMonths(this.month(), 1).valueOf());
    this._setMonthDays();
  }
  previousMonth() {
    this.month.set(addMonths(this.month(), -1).valueOf());
    this._setMonthDays();
  }
  _setMonthDays() {
    const week_start = startOfWeek(startOfMonth(this.month()), {
      weekStartsOn: this.offset_weekday()
    });
    const range_start = this.start();
    const range_end = this._selecting_end ? this.hovered_date() : this.end();
    const from_date = this.from_date();
    const to_date = this.to_date();
    const max_days = this.max_range_days();
    const max_end_date = this._selecting_end && range_start && max_days > 0 ? addDays(range_start, max_days - 1).valueOf() : null;
    this.month_days.set(Array.from(Array(7 * 6).keys()).map((i) => {
      const date = addDays(week_start, i).valueOf();
      const is_start = range_start && isSameDay(date, range_start);
      const exceeds_max_range = this._selecting_end && range_start && max_end_date && date > max_end_date;
      const is_end = range_end && range_start && range_end >= range_start && isSameDay(date, range_end);
      const is_selected = range_end && range_start && range_end >= range_start && date >= startOfDay(range_start).valueOf() && date <= endOfDay(range_end).valueOf();
      return {
        id: date,
        disabled: from_date && isBefore(date, from_date) || to_date && isAfter(date, to_date) || exceeds_max_range,
        is_today: isSameDay(date, Date.now()),
        is_start,
        is_end,
        is_month: isSameMonth(date, this.month()),
        is_selected
      };
    }));
  }
  _setWeekdays() {
    const start = startOfWeek(Date.now(), {
      weekStartsOn: this.offset_weekday()
    });
    this.weekdays.set(Array.from(Array(7).keys()).map((i) => addDays(start, i)));
  }
  static {
    this.\u0275fac = function DateRangeCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateRangeCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateRangeCalendarComponent, selectors: [["date-range-calendar"]], inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], offset_weekday: [1, "offset_weekday"], max_range_days: [1, "max_range_days"], startInput: [1, "start", "startInput"], endInput: [1, "end", "endInput"], month: [1, "month"] }, outputs: { month: "monthChange", startChange: "startChange", endChange: "endChange" }, features: [\u0275\u0275NgOnChangesFeature], decls: 17, vars: 4, consts: [[1, "flex", "items-center", "justify-between"], ["month", "", 1, "px-2", "font-medium"], [1, "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click"], [1, "grid", "h-[17.25rem]", "w-[17.25rem]", "grid-cols-7", "grid-rows-7", "gap-1", 3, "mouseleave"], [1, "border-base-200", "col-span-full", "grid", "grid-cols-7", "border-b"], ["weekday", "", 1, "relative", "flex", "items-center", "justify-center", "text-sm", "opacity-60"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "text-secondary-content", "disabled"], [1, "hover:bg-base-200", "relative", "h-9", "w-9", "rounded-full", 3, "click", "mouseenter", "disabled"], [1, "border-base-content", "bg-base-200", "absolute", "-inset-x-0.5", "inset-y-0", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-right-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "border-base-content", "bg-base-200", "absolute", "inset-y-0", "-left-0.5", "w-[calc(50%+2px)]", "border-y", "border-dashed"], [1, "bg-secondary", "absolute", "inset-0", "z-10", "flex", "items-center", "justify-center", "rounded-full"], ["matRipple", "", 1, "absolute", "inset-0", "z-20", "flex", "items-center", "justify-center", "rounded-full"], [1, "border-secondary", "absolute", "-inset-[3px]", "z-10", "flex", "items-center", "justify-center", "rounded-full", "border"]], template: function DateRangeCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2)(5, "button", 3);
        \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_5_listener() {
          return ctx.previousMonth();
        });
        \u0275\u0275elementStart(6, "icon");
        \u0275\u0275text(7, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 3);
        \u0275\u0275listener("click", function DateRangeCalendarComponent_Template_button_click_8_listener() {
          return ctx.nextMonth();
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(11, "div", 4);
        \u0275\u0275listener("mouseleave", function DateRangeCalendarComponent_Template_div_mouseleave_11_listener() {
          return ctx.clearHoveredDate();
        });
        \u0275\u0275elementStart(12, "div", 5);
        \u0275\u0275repeaterCreate(13, DateRangeCalendarComponent_For_14_Template, 3, 4, "div", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(15, DateRangeCalendarComponent_For_16_Template, 9, 14, "button", 7, ctx.trackByFn, true);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 1, ctx.month(), "MMMM yyyy"), " ");
        \u0275\u0275advance(11);
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.month_days());
      }
    }, dependencies: [CommonModule, IconComponent, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateRangeCalendarComponent, [{
    type: Component,
    args: [{ selector: `date-range-calendar`, template: `
        <div class="flex items-center justify-between">
            <div month class="px-2 font-medium">
                {{ month() | date: 'MMMM yyyy' }}
            </div>
            <div class="flex items-center space-x-2">
                <button icon matRipple (click)="previousMonth()">
                    <icon>chevron_left</icon>
                </button>
                <button icon matRipple (click)="nextMonth()">
                    <icon>chevron_right</icon>
                </button>
            </div>
        </div>
        <div
            class="grid h-[17.25rem] w-[17.25rem] grid-cols-7 grid-rows-7 gap-1"
            (mouseleave)="clearHoveredDate()"
        >
            <div
                class="border-base-200 col-span-full grid grid-cols-7 border-b"
            >
                @for (weekday of weekdays(); track weekday) {
                    <div
                        weekday
                        class="relative flex items-center justify-center text-sm opacity-60"
                    >
                        {{ weekday | date: 'EEE' }}
                    </div>
                }
            </div>
            @for (day of month_days(); track trackByFn($index, day)) {
                <button
                    class="hover:bg-base-200 relative h-9 w-9 rounded-full"
                    [class.text-secondary-content]="day.is_start || day.is_end"
                    [disabled]="day.disabled"
                    (click)="selectDate(day.id)"
                    (mouseenter)="setHoveredDate(day.id)"
                >
                    @if (day.is_selected && !day.is_start && !day.is_end) {
                        <div
                            class="border-base-content bg-base-200 absolute -inset-x-0.5 inset-y-0 border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -right-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_end && end_after_start()) {
                        <div
                            class="border-base-content bg-base-200 absolute inset-y-0 -left-0.5 w-[calc(50%+2px)] border-y border-dashed"
                        ></div>
                    }
                    @if (day.is_start || day.is_end) {
                        <div
                            class="bg-secondary absolute inset-0 z-10 flex items-center justify-center rounded-full"
                        ></div>
                    }
                    <div
                        matRipple
                        class="absolute inset-0 z-20 flex items-center justify-center rounded-full"
                        [class.opacity-30]="!day.is_month"
                    >
                        {{ day.id | date: 'd' }}
                    </div>
                    @if (day.is_today) {
                        <div
                            class="border-secondary absolute -inset-[3px] z-10 flex items-center justify-center rounded-full border"
                        ></div>
                    }
                </button>
            }
        </div>
    `, imports: [CommonModule, IconComponent] }]
  }], null, { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }], max_range_days: [{ type: Input, args: [{ isSignal: true, alias: "max_range_days", required: false }] }], startInput: [{ type: Input, args: [{ isSignal: true, alias: "start", required: false }] }], endInput: [{ type: Input, args: [{ isSignal: true, alias: "end", required: false }] }], month: [{ type: Input, args: [{ isSignal: true, alias: "month", required: false }] }, { type: Output, args: ["monthChange"] }], startChange: [{ type: Output, args: ["startChange"] }], endChange: [{ type: Output, args: ["endChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateRangeCalendarComponent, { className: "DateRangeCalendarComponent", filePath: "libs/form-fields/src/lib/date-range-calendar.component.ts", lineNumber: 107 });
})();

// apps/workplace/src/app/schedule/schedule-sidebar.component.ts
var _forTrack06 = ($index, $item) => $item.type;
function ScheduleSidebarComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-calendar", 10);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_1_Template_date_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.date())("offset_weekday", ctx_r1.offset_weekday);
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_2_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "(C)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.WEEK_THIS"));
  }
}
function ScheduleSidebarComponent_Conditional_2_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleSidebarComponent_Conditional_2_For_4_Conditional_2_Template, 3, 3, "span", 14);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r4.this_week ? 2 : -1);
  }
}
function ScheduleSidebarComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 11)(2, "mat-select", 12);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_2_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275repeaterCreate(3, ScheduleSidebarComponent_Conditional_2_For_4_Template, 3, 3, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.week_date());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.week_options());
  }
}
function ScheduleSidebarComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-range-calendar", 15);
    \u0275\u0275listener("startChange", function ScheduleSidebarComponent_Conditional_3_Template_date_range_calendar_startChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartDate($event));
    })("endChange", function ScheduleSidebarComponent_Conditional_3_Template_date_range_calendar_endChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setEndDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "div", 16);
    \u0275\u0275text(2, " Pick a date range selecting the start then end date. ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("from", null)("start", ctx_r1.date()?.valueOf())("end", ctx_r1.end_date()?.valueOf())("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleSidebarComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 5);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_For_9_Conditional_0_Template_settings_toggle_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType(item_r7.type));
    });
    \u0275\u0275elementStart(1, "div", 6)(2, "div", 7)(3, "icon");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()()();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.filters()?.shown_types?.includes(item_r7.type));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("background-color", ctx_r1.colors[item_r7.type][0])("color", ctx_r1.colors[item_r7.type][1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(item_r7.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 8, item_r7.name), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.counts()[item_r7.type] || 0, " ");
  }
}
function ScheduleSidebarComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleSidebarComponent_For_9_Conditional_0_Template, 10, 10, "settings-toggle", 17);
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.hasFeature(item_r7.feat) ? 0 : -1);
  }
}
var ScheduleSidebarComponent = class _ScheduleSidebarComponent extends AsyncHandler {
  get period() {
    const current_view = this.view();
    if (current_view === "list")
      return "list";
    return this._state.getOptions()?.period;
  }
  setStartDate(date) {
    this._state.setDate(date);
    this._state.setEndDate(null);
  }
  setEndDate(date) {
    this._state.setEndDate(date);
  }
  get is_today() {
    return isSameDay(this._state.dateValue, Date.now());
  }
  setDateToToday() {
    this._state.setDate(Date.now());
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  hasFeature(feature) {
    const features = this._settings.get("app.features") || [];
    if (Array.isArray(feature)) {
      return feature.some((f) => features.includes(f));
    }
    return features.includes(feature);
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.date = computed(
      () => startOfDay(this._state.date()),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = computed(
      () => {
        const end = this._state.end_date();
        return end ? endOfDay(end) : null;
      },
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggleType = (t) => this._state.toggleType(t);
    this.toggleBookingsForOthers = () => this._state.toggleBookingsForOthers();
    this.setDate = (d) => this._state.setDate(d);
    this.bookings = input(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = input(
      "day",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colors = BOOKING_TYPE_COLORS;
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
    this.feature_list = [
      { type: "desk", feat: "desks", icon: "desk", name: "RESOURCE.DESKS" },
      {
        type: "event",
        feat: "spaces",
        icon: "meeting_room",
        name: "RESOURCE.MEETINGS"
      },
      {
        type: "parking",
        feat: ["parking", "parking-requests"],
        icon: "drive_eta",
        name: "RESOURCE.PARKING"
      },
      {
        type: "visitor",
        feat: "visitor-invite",
        icon: "people",
        name: "RESOURCE.VISITORS"
      },
      {
        type: "vip-visitor",
        feat: "vip-visitor-invite",
        icon: "star",
        name: "BOOKINGS.VIP_VISITORS"
      },
      {
        type: "locker",
        feat: "lockers",
        icon: "lock",
        name: "RESOURCE.LOCKERS"
      },
      {
        type: "group-event",
        feat: "group-events",
        icon: "event_available",
        name: "RESOURCE.EVENTS"
      }
    ];
    this.counts = computed(
      () => {
        const mapping = {};
        const bkn_list = this.bookings() || [];
        for (const bkn of bkn_list) {
          if (bkn instanceof CalendarEvent) {
            const type = bkn.extension_data?.shared_event ? "group-event" : "event";
            mapping[type] = (mapping[type] || 0) + 1;
          } else {
            const type = bkn.booking_type;
            mapping[type] = (mapping[type] || 0) + 1;
            if (isBookingForOtherUser(bkn)) {
              mapping["bookings-for-others"] = (mapping["bookings-for-others"] || 0) + 1;
            }
          }
        }
        return mapping;
      },
      ...ngDevMode ? [{ debugName: "counts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const bld = this._org.active_building();
      if (!bld)
        return;
      const timeout = setTimeout(() => {
        this._state.setType("event", this.hasFeature("spaces"));
        this._state.setType("desk", this.hasFeature("desks"));
        this._state.setType("parking", this.hasFeature("parking") || this.hasFeature("parking-requests"));
        this._state.setType("visitor", this.hasFeature("visitor-invite"));
        this._state.setType("vip-visitor", this.hasFeature("vip-visitor-invite"));
        this._state.setType("locker", this.hasFeature("lockers"));
        this._state.setType("group-event", this.hasFeature("group-events"));
      }, 1e3);
      onCleanup(() => clearTimeout(timeout));
    });
  }
  ngOnInit() {
  }
  static {
    this.\u0275fac = function ScheduleSidebarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleSidebarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSidebarComponent, selectors: [["schedule-sidebar"]], inputs: { bookings: [1, "bookings"], view: [1, "view"] }, features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 8, consts: [[1, "border-base-300", "bg-base-100", "flex", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r"], [1, "border-base-200", "border-b", 3, "ngModel", "offset_weekday"], [1, "w-full", "p-2"], [1, "mx-4", "mt-4", "pb-2", "font-medium", "uppercase"], [1, "h-1/2", "flex-1", "space-y-1", "overflow-auto", "px-4"], [3, "click", "ngModel"], [1, "-my-2", "-ml-2", "flex", "items-center", "space-x-2"], [1, "bg-base-300", "rounded-full", "p-1", "text-2xl"], [1, "flex-1", "font-medium"], [1, "font-mono", "text-xs"], [1, "border-base-200", "border-b", 3, "ngModelChange", "ngModel", "offset_weekday"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], [1, "leading-tight", 3, "value"], [1, "text-info", "px-1", "text-xs", 3, "matTooltip"], [1, "border-base-200", "border-b", "p-2", 3, "startChange", "endChange", "from", "start", "end", "offset_weekday"], [1, "bg-info", "text-info-content", "m-2", "w-[calc(100%-1rem)]", "rounded", "p-1", "text-center", "text-xs"], [3, "ngModel"]], template: function ScheduleSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, ScheduleSidebarComponent_Conditional_1_Template, 1, 2, "date-calendar", 1);
        \u0275\u0275conditionalCreate(2, ScheduleSidebarComponent_Conditional_2_Template, 5, 1, "div", 2);
        \u0275\u0275conditionalCreate(3, ScheduleSidebarComponent_Conditional_3_Template, 3, 4);
        \u0275\u0275elementStart(4, "h3", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275repeaterCreate(8, ScheduleSidebarComponent_For_9_Template, 1, 1, null, null, _forTrack06);
        \u0275\u0275elementStart(10, "settings-toggle", 5);
        \u0275\u0275listener("click", function ScheduleSidebarComponent_Template_settings_toggle_click_10_listener() {
          return ctx.toggleBookingsForOthers();
        });
        \u0275\u0275elementStart(11, "div", 6)(12, "div", 7)(13, "icon");
        \u0275\u0275text(14, "perm_contact_calendar");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(15, "div", 8);
        \u0275\u0275text(16, " Bookings for Others ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div", 9);
        \u0275\u0275text(18);
        \u0275\u0275elementEnd()()();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "day" ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "week" ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "list" ? 3 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.feature_list);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.filters()?.show_bookings_for_others);
        \u0275\u0275control();
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", ctx.counts()["bookings-for-others"] || 0, " ");
      }
    }, dependencies: [
      CommonModule,
      MatCheckboxModule,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      MatRippleModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      DateCalendarComponent,
      DateRangeCalendarComponent,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleSidebarComponent, [{
    type: Component,
    args: [{ selector: "schedule-sidebar", template: `
        <div
            class="border-base-300 bg-base-100 flex h-full w-[18rem] flex-col overflow-hidden border-r"
        >
            @if (period === 'day') {
                <date-calendar
                    class="border-base-200 border-b"
                    [ngModel]="date()"
                    (ngModelChange)="setDate($event)"
                    [offset_weekday]="offset_weekday"
                ></date-calendar>
            }
            @if (period === 'week') {
                <div class="w-full p-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [ngModel]="week_date()"
                            (ngModelChange)="setDate($event)"
                            placeholder="Select Week..."
                        >
                            @for (option of week_options(); track option) {
                                <mat-option
                                    [value]="option.id"
                                    class="leading-tight"
                                >
                                    {{ option.name }}
                                    @if (option.this_week) {
                                        <span
                                            class="text-info px-1 text-xs"
                                            [matTooltip]="
                                                'COMMON.WEEK_THIS' | translate
                                            "
                                            >(C)</span
                                        >
                                    }
                                </mat-option>
                            }
                        </mat-select>
                    </mat-form-field>
                </div>
            }
            @if (period === 'list') {
                <date-range-calendar
                    class="border-base-200 border-b p-2"
                    [from]="null"
                    [start]="date()?.valueOf()"
                    [end]="end_date()?.valueOf()"
                    [offset_weekday]="offset_weekday"
                    (startChange)="setStartDate($event)"
                    (endChange)="setEndDate($event)"
                ></date-range-calendar>
                <div
                    class="bg-info text-info-content m-2 w-[calc(100%-1rem)] rounded p-1 text-center text-xs"
                >
                    Pick a date range selecting the start then end date.
                </div>
            }
            <h3 class="mx-4 mt-4 pb-2 font-medium uppercase">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h3>
            <div class="h-1/2 flex-1 space-y-1 overflow-auto px-4">
                @for (item of feature_list; track item.type) {
                    @if (hasFeature(item.feat)) {
                        <settings-toggle
                            [ngModel]="
                                filters()?.shown_types?.includes(item.type)
                            "
                            (click)="toggleType(item.type)"
                        >
                            <div
                                class="-my-2 -ml-2 flex items-center space-x-2"
                            >
                                <div
                                    class="bg-base-300 rounded-full p-1 text-2xl"
                                    [style.background-color]="
                                        colors[item.type][0]
                                    "
                                    [style.color]="colors[item.type][1]"
                                >
                                    <icon>{{ item.icon }}</icon>
                                </div>
                                <div class="flex-1 font-medium">
                                    {{ item.name | translate }}
                                </div>
                                <div class="font-mono text-xs">
                                    {{ counts()[item.type] || 0 }}
                                </div>
                            </div>
                        </settings-toggle>
                    }
                }
                <settings-toggle
                    [ngModel]="filters()?.show_bookings_for_others"
                    (click)="toggleBookingsForOthers()"
                >
                    <div class="-my-2 -ml-2 flex items-center space-x-2">
                        <div class="bg-base-300 rounded-full p-1 text-2xl">
                            <icon>perm_contact_calendar</icon>
                        </div>
                        <div class="flex-1 font-medium">
                            Bookings for Others
                        </div>
                        <div class="font-mono text-xs">
                            {{ counts()['bookings-for-others'] || 0 }}
                        </div>
                    </div>
                </settings-toggle>
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatCheckboxModule,
      MatTooltipModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTooltipModule,
      DateCalendarComponent,
      DateRangeCalendarComponent,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-sidebar.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */\n"] }]
  }], () => [], { bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSidebarComponent, { className: "ScheduleSidebarComponent", filePath: "apps/workplace/src/app/schedule/schedule-sidebar.component.ts", lineNumber: 178 });
})();

// apps/workplace/src/app/schedule/schedule-topbar.component.ts
var _c04 = () => [];
var _c14 = () => ({ view: "day" });
var _c23 = () => ({ view: "week" });
var _c3 = () => ({ view: "list" });
function ScheduleTopbarComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ScheduleTopbarComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.previousDate());
    });
    \u0275\u0275elementStart(1, "icon", 8);
    \u0275\u0275text(2, "keyboard_arrow_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "button", 7);
    \u0275\u0275listener("click", function ScheduleTopbarComponent_Conditional_5_Template_button_click_3_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.nextDate());
    });
    \u0275\u0275elementStart(4, "icon", 8);
    \u0275\u0275text(5, "keyboard_arrow_right");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleTopbarComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9)(1, "icon", 8);
    \u0275\u0275text(2, "calendar_month");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(3, "mat-menu", 10, 0)(5, "div", 11);
    \u0275\u0275listener("click", function ScheduleTopbarComponent_Conditional_6_Template_div_click_5_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementStart(6, "date-range-calendar", 12);
    \u0275\u0275listener("startChange", function ScheduleTopbarComponent_Conditional_6_Template_date_range_calendar_startChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setStartDate($event));
    })("endChange", function ScheduleTopbarComponent_Conditional_6_Template_date_range_calendar_endChange_6_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.end_date.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 13);
    \u0275\u0275text(8, " Pick a date range selecting the start then end date. ");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const date_range_menu_r4 = \u0275\u0275reference(4);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matMenuTriggerFor", date_range_menu_r4);
    \u0275\u0275advance(6);
    \u0275\u0275property("from", null)("start", ctx_r1.date()?.valueOf())("end", ctx_r1.end_date()?.valueOf())("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleTopbarComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(2, 2, ctx_r1.date(), "dd MMM"), " - ", \u0275\u0275pipeBind2(3, 5, ctx_r1.end_date(), "dd MMM yyyy"), " ");
  }
}
function ScheduleTopbarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, ctx_r1.date(), "EEE, dd MMM"));
  }
}
var ScheduleTopbarComponent = class _ScheduleTopbarComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.view = model(
      "list",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = model(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_date = model(
      null,
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setStartDate = (d) => {
      this.date.set(d);
      this.end_date.set(null);
    };
    this.has_date_range = computed(
      () => {
        const end = this.end_date();
        const start = this.date();
        return this.view() === "list" && end !== null && !isSameDay(start, end);
      },
      ...ngDevMode ? [{ debugName: "has_date_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resetDate = () => {
      this.date.set(Date.now());
      this.end_date.set(null);
    };
    this.previousDate = () => this.date.set(subDays(this.date(), this.view() === "week" ? 7 : 1).valueOf());
    this.nextDate = () => this.date.set(addDays(this.date(), this.view() === "week" ? 7 : 1).valueOf());
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  static {
    this.\u0275fac = function ScheduleTopbarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleTopbarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleTopbarComponent, selectors: [["schedule-topbar"]], inputs: { view: [1, "view"], date: [1, "date"], end_date: [1, "end_date"] }, outputs: { view: "viewChange", date: "dateChange", end_date: "end_dateChange" }, decls: 22, vars: 36, consts: [["date_range_menu", "matMenu"], [1, "border-base-300", "bg-base-100", "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-2", "border-b", "p-2", "sm:flex-row", "sm:space-y-0", "sm:space-x-2"], ["date", "", 1, "flex", "w-full", "items-center", "space-x-2", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-11", 3, "click"], [1, "border-base-300", "rounded-lg", "border", "px-2", "py-1", "text-xs"], ["view", "", 1, "border-base-300", "bg-base-200", "flex", "w-full", "space-x-1", "rounded-xl", "border", "p-1", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "min-h-10", "flex-1", 3, "click", "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-11", "min-w-11", "p-0", 3, "click"], [1, "text-2xl"], ["btn", "", "matRipple", "", 1, "inverse", "min-h-11", "min-w-11", "p-0", "sm:hidden", 3, "matMenuTriggerFor"], [1, "schedule-date-menu"], [1, "w-72", "space-y-2", "p-2", 3, "click"], [3, "startChange", "endChange", "from", "start", "end", "offset_weekday"], [1, "bg-info", "text-info-content", "rounded", "p-2", "text-center", "text-xs"]], template: function ScheduleTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "button", 3);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_button_click_2_listener() {
          return ctx.resetDate();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, ScheduleTopbarComponent_Conditional_5_Template, 6, 0)(6, ScheduleTopbarComponent_Conditional_6_Template, 9, 5);
        \u0275\u0275conditionalCreate(7, ScheduleTopbarComponent_Conditional_7_Template, 4, 8, "div")(8, ScheduleTopbarComponent_Conditional_8_Template, 3, 4, "div");
        \u0275\u0275elementStart(9, "div", 4);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 5)(13, "a", 6);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_13_listener() {
          return ctx.view.set("day");
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "a", 6);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_16_listener() {
          return ctx.view.set("week");
        });
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "a", 6);
        \u0275\u0275listener("click", function ScheduleTopbarComponent_Template_a_click_19_listener() {
          return ctx.view.set("list");
        });
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 19, "COMMON.TODAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() !== "list" ? 5 : 6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.has_date_range() ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 21, ctx.date(), "z"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275classProp("clear", ctx.view() !== "day");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(30, _c04))("queryParams", \u0275\u0275pureFunction0(31, _c14));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 24, "COMMON.DAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.view() !== "week");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c04))("queryParams", \u0275\u0275pureFunction0(33, _c23));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 26, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("clear", ctx.view() !== "list");
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(34, _c04))("queryParams", \u0275\u0275pureFunction0(35, _c3));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 28, "COMMON.LIST"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      RouterModule,
      RouterLink,
      MatMenuModule,
      MatMenu,
      MatMenuTrigger,
      DateRangeCalendarComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n  .schedule-date-menu.mat-mdc-menu-panel {\n  max-width: none;\n}\n  .schedule-date-menu .mat-mdc-menu-content {\n  padding: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=schedule-topbar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleTopbarComponent, [{
    type: Component,
    args: [{ selector: `schedule-topbar`, template: `
        <div
            class="border-base-300 bg-base-100 flex w-full flex-col items-center justify-between space-y-2 border-b p-2 sm:flex-row sm:space-y-0 sm:space-x-2"
        >
            <div date class="flex w-full items-center space-x-2 sm:w-auto">
                <button
                    btn
                    matRipple
                    class="inverse min-h-11"
                    (click)="resetDate()"
                >
                    {{ 'COMMON.TODAY' | translate }}
                </button>
                @if (view() !== 'list') {
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="previousDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_left</icon>
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0"
                        (click)="nextDate()"
                    >
                        <icon class="text-2xl">keyboard_arrow_right</icon>
                    </button>
                } @else {
                    <button
                        btn
                        matRipple
                        class="inverse min-h-11 min-w-11 p-0 sm:hidden"
                        [matMenuTriggerFor]="date_range_menu"
                    >
                        <icon class="text-2xl">calendar_month</icon>
                    </button>
                    <mat-menu
                        #date_range_menu="matMenu"
                        class="schedule-date-menu"
                    >
                        <div
                            (click)="$event.stopPropagation()"
                            class="w-72 space-y-2 p-2"
                        >
                            <date-range-calendar
                                [from]="null"
                                [start]="date()?.valueOf()"
                                [end]="end_date()?.valueOf()"
                                [offset_weekday]="offset_weekday"
                                (startChange)="setStartDate($event)"
                                (endChange)="end_date.set($event)"
                            ></date-range-calendar>
                            <div
                                class="bg-info text-info-content rounded p-2 text-center text-xs"
                            >
                                Pick a date range selecting the start then end
                                date.
                            </div>
                        </div>
                    </mat-menu>
                }
                @if (has_date_range()) {
                    <div>
                        {{ date() | date: 'dd MMM' }} -
                        {{ end_date() | date: 'dd MMM yyyy' }}
                    </div>
                } @else {
                    <div>{{ date() | date: 'EEE, dd MMM' }}</div>
                }
                <div
                    class="border-base-300 rounded-lg border px-2 py-1 text-xs"
                >
                    {{ date() | date: 'z' }}
                </div>
            </div>
            <div
                view
                class="border-base-300 bg-base-200 flex w-full space-x-1 rounded-xl border p-1 sm:w-auto"
            >
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'day'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'day' }"
                    (click)="view.set('day')"
                >
                    {{ 'COMMON.DAY' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'week'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'week' }"
                    (click)="view.set('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </a>
                <a
                    btn
                    matRipple
                    class="hover:bg-base-300 min-h-10 flex-1"
                    [class.clear]="view() !== 'list'"
                    [routerLink]="[]"
                    [queryParams]="{ view: 'list' }"
                    (click)="view.set('list')"
                >
                    {{ 'COMMON.LIST' | translate }}
                </a>
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      RouterModule,
      MatMenuModule,
      DateRangeCalendarComponent
    ], styles: ["/* angular:styles/component:css;1ac547c83a4bdc537a141bd4e358fae10ed24ae6a9f5e62a6573125791fddf3d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-topbar.component.ts */\n::ng-deep .schedule-date-menu.mat-mdc-menu-panel {\n  max-width: none;\n}\n::ng-deep .schedule-date-menu .mat-mdc-menu-content {\n  padding: 0;\n  overflow: hidden;\n}\n/*# sourceMappingURL=schedule-topbar.component.css.map */\n"] }]
  }], null, { view: [{ type: Input, args: [{ isSignal: true, alias: "view", required: false }] }, { type: Output, args: ["viewChange"] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }, { type: Output, args: ["dateChange"] }], end_date: [{ type: Input, args: [{ isSignal: true, alias: "end_date", required: false }] }, { type: Output, args: ["end_dateChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleTopbarComponent, { className: "ScheduleTopbarComponent", filePath: "apps/workplace/src/app/schedule/schedule-topbar.component.ts", lineNumber: 150 });
})();

// apps/workplace/src/app/schedule/schedule-week-view.component.ts
var _c05 = ["scrollContainer"];
var _c15 = () => [];
var _forTrack07 = ($index, $item) => $item.id;
function ScheduleWeekViewComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5, 1)(2, "div", 7);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 8);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-is-today", day_r1.is_today);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", day_r1.is_today ? "Today" : \u0275\u0275pipeBind2(3, 11, day_r1.date, "fullDate"));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 14, day_r1.date, "EEE, dd"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-300", !day_r1.is_today)("bg-info", day_r1.is_today)("text-info-content", day_r1.is_today);
    \u0275\u0275property("matTooltip", (ctx_r1.bookings_by_date()[day_r1.id]?.length || 0) + " bookings");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.bookings_by_date()[day_r1.id]?.length || 0, " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 19);
  }
  if (rf & 2) {
    const status_r5 = ctx;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275styleProp("background-color", ctx_r1.statusColor(status_r5));
    \u0275\u0275property("matTooltip", ctx_r1.statusLabel(status_r5));
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bkn_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.location(bkn_r4), " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bkn_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.visitorName(bkn_r4), " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bkn_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" Booked by ", bkn_r4.booked_by_name || \u0275\u0275pipeBind1(3, 4, \u0275\u0275pipeBind1(2, 2, bkn_r4.booked_by_email))?.name || bkn_r4.booked_by_email, " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" for ", ctx_r1.bookedForLabel(bkn_r4), " ");
  }
}
function ScheduleWeekViewComponent_For_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275listener("click", function ScheduleWeekViewComponent_For_7_For_2_Template_button_click_0_listener() {
      const bkn_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.viewBooking(bkn_r4));
    });
    \u0275\u0275elementStart(5, "div", 13)(6, "div", 14);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, ScheduleWeekViewComponent_For_7_For_2_Conditional_8_Template, 1, 3, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ScheduleWeekViewComponent_For_7_For_2_Conditional_9_Template, 2, 1, "div", 16);
    \u0275\u0275conditionalCreate(10, ScheduleWeekViewComponent_For_7_For_2_Conditional_10_Template, 2, 1, "div", 17);
    \u0275\u0275conditionalCreate(11, ScheduleWeekViewComponent_For_7_For_2_Conditional_11_Template, 6, 6);
    \u0275\u0275elementStart(12, "div", 18);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_25_0;
    const bkn_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-color", ctx_r1.colors[ctx_r1.type(bkn_r4)][1])("background-color", ctx_r1.backgroundColor(bkn_r4));
    \u0275\u0275property("matTooltip", bkn_r4.title + (ctx_r1.location(bkn_r4) ? "\n" + ctx_r1.location(bkn_r4) : "") + (ctx_r1.visitorName(bkn_r4) ? "\n" + ctx_r1.visitorName(bkn_r4) : "") + (ctx_r1.isBookingForOtherUser(bkn_r4) ? "\nfor " + ctx_r1.bookedForLabel(bkn_r4) : "") + "\n" + (bkn_r4.user_name || \u0275\u0275pipeBind1(2, 13, \u0275\u0275pipeBind1(1, 11, bkn_r4.host))?.name || bkn_r4.host) + "\n" + \u0275\u0275pipeBind2(3, 15, bkn_r4.date, "shortTime") + " - " + \u0275\u0275pipeBind2(4, 18, bkn_r4.date_end, "shortTime"));
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", bkn_r4.title, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_25_0 = ctx_r1.bookingStatus(bkn_r4)) ? 8 : -1, tmp_25_0);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.location(bkn_r4) ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.visitorName(bkn_r4) ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isBookingForOtherUser(bkn_r4) ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 21, bkn_r4.date, "shortTime"), " ");
  }
}
function ScheduleWeekViewComponent_For_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 20);
    \u0275\u0275text(2, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4, "No bookings");
    \u0275\u0275elementEnd()();
  }
}
function ScheduleWeekViewComponent_For_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275repeaterCreate(1, ScheduleWeekViewComponent_For_7_For_2_Template, 15, 24, "button", 10, _forTrack07);
    \u0275\u0275conditionalCreate(3, ScheduleWeekViewComponent_For_7_Conditional_3_Template, 5, 0, "div", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("opacity-30", day_r6.is_past);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.bookings_by_date()[day_r6.id] || \u0275\u0275pureFunction0(3, _c15));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.bookings_by_date()[day_r6.id]?.length ? 3 : -1);
  }
}
var ScheduleWeekViewComponent = class _ScheduleWeekViewComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._state = inject(ScheduleStateService);
    this._org = inject(OrganisationService);
    this.date = input(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = input(
      [],
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = input(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.colors = BOOKING_TYPE_COLORS;
    this._scroll_container = viewChild(
      "scrollContainer",
      ...ngDevMode ? [{ debugName: "_scroll_container" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays = computed(
      () => {
        const days = [];
        const week_start = startOfWeek(this.date(), {
          weekStartsOn: this._state.offset_weekday
        });
        for (let i = 0; i < 7; i++) {
          const date = addDays(week_start, i);
          days.push({
            id: format(date, "yyyy-MM-dd"),
            date: date.valueOf(),
            is_past: isBefore(date, startOfDay(Date.now())),
            is_today: isSameDay(date, Date.now())
          });
        }
        return days;
      },
      ...ngDevMode ? [{ debugName: "weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings_by_date = computed(
      () => {
        const date_map = {};
        for (const bkn of this.bookings() || []) {
          const date = format(bkn.date, "yyyy-MM-dd");
          if (!date_map[date])
            date_map[date] = [];
          date_map[date].push(bkn);
        }
        return date_map;
      },
      ...ngDevMode ? [{ debugName: "bookings_by_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isBookingForOtherUser = isBookingForOtherUser;
    this.bookedForLabel = bookedForLabel;
    effect(() => {
      this.weekdays();
      this._scrollToCurrentDay();
    });
  }
  _scrollToCurrentDay() {
    const container = this._scroll_container()?.nativeElement;
    if (!container)
      return;
    setTimeout(() => {
      const today_column = container.querySelector('[data-is-today="true"]');
      if (!today_column)
        return;
      const container_rect = container.getBoundingClientRect();
      const column_rect = today_column.getBoundingClientRect();
      const current_scroll = container.scrollLeft;
      const column_relative_to_container = column_rect.left - container_rect.left + current_scroll;
      const container_center = container.clientWidth / 2;
      const column_center = column_rect.width / 2;
      const scroll_position = column_relative_to_container - container_center + column_center;
      container.scrollTo({
        left: scroll_position,
        behavior: "smooth"
      });
    }, 0);
  }
  type(booking) {
    if (booking instanceof Booking)
      return booking.booking_type;
    return booking.extension_data?.shared_event ? "group-event" : "event";
  }
  bookingStatus(booking) {
    const status = booking.status;
    if (status === "tentative" && booking instanceof Booking && booking.booking_type === "parking" && isSameWeek(Date.now(), booking.date, {
      weekStartsOn: this._state.offset_weekday
    })) {
      return "waitlisted";
    }
    return status === "approved" || status === "tentative" || status === "declined" ? status : null;
  }
  statusLabel(status) {
    return status.charAt(0).toUpperCase() + status.slice(1);
  }
  statusColor(status) {
    if (status === "approved")
      return "var(--success)";
    if (status === "waitlisted")
      return "var(--info)";
    if (status === "tentative")
      return "var(--warn)";
    return "var(--error)";
  }
  visitorName(booking) {
    if (booking instanceof Booking && ["visitor", "vip-visitor"].includes(booking.booking_type)) {
      return visitorDisplayNameFor(booking);
    }
    return "";
  }
  location(booking) {
    return bookingLocationString(booking, this._org);
  }
  backgroundColor(booking) {
    const color = this.colors[this.type(booking)][0];
    return this.isBookingForOtherUser(booking) ? `${color}80` : color;
  }
  viewBooking(bkn) {
    this._dialog.closeAll();
    if (bkn instanceof CalendarEvent) {
      if (bkn.extension_data?.shared_event) {
        this._dialog.open(GroupEventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t),
            concierge: false
          }
        });
      } else {
        this._dialog.open(EventDetailsModalComponent, {
          data: {
            event: bkn,
            edit_fn: (i) => this._state.edit(i),
            remove_fn: (i, t) => this._state.remove(i, t)
          }
        });
      }
    } else {
      const view_component = bkn.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
      const data = {
        booking: bkn.booking_type === "group-event" ? { booking: bkn, concierge: false } : bkn,
        edit_fn: (i) => this._state.editBooking(i),
        remove_fn: (i, t) => this._state.remove(i, t),
        end_fn: (i) => this._state.end(i)
      };
      this._dialog.open(view_component, { data });
    }
  }
  static {
    this.\u0275fac = function ScheduleWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleWeekViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleWeekViewComponent, selectors: [["schedule-week-view"]], viewQuery: function ScheduleWeekViewComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._scroll_container, _c05, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { date: [1, "date"], bookings: [1, "bookings"], loading: [1, "loading"] }, decls: 8, vars: 0, consts: [["scrollContainer", ""], ["dayColumn", ""], [1, "h-full", "w-full", "snap-x", "snap-mandatory", "overflow-auto"], [1, "m-2"], [1, "grid", "w-full", "min-w-[87.5rem]", "grid-cols-7", "gap-2"], ["header", "", 1, "flex", "snap-start", "items-center", "justify-center", "space-x-2", "py-2"], ["body", "", 1, "border-base-300", "bg-base-100", "flex", "min-h-[calc(100vh-15rem)]", "snap-start", "flex-col", "space-y-2", "rounded-xl", "border", "p-2", 3, "opacity-30"], [3, "matTooltip"], [1, "relative", "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "font-mono", "text-xs", 3, "matTooltip"], ["body", "", 1, "border-base-300", "bg-base-100", "flex", "min-h-[calc(100vh-15rem)]", "snap-start", "flex-col", "space-y-2", "rounded-xl", "border", "p-2"], ["matRipple", "", 1, "bg-base-100", "w-full", "rounded-lg", "border", "p-2", "text-left", "text-black", 3, "border-color", "background-color", "matTooltip"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "opacity-30"], ["matRipple", "", 1, "bg-base-100", "w-full", "rounded-lg", "border", "p-2", "text-left", "text-black", 3, "click", "matTooltip"], [1, "flex", "items-start", "justify-between", "gap-2"], [1, "min-w-0", "truncate", "text-sm"], [1, "h-2.5", "w-2.5", "flex-shrink-0", "rounded-full", 3, "background-color", "matTooltip"], [1, "truncate", "text-xs", "opacity-75"], [1, "truncate", "text-xs", "opacity-60"], [1, "text-xs"], [1, "h-2.5", "w-2.5", "flex-shrink-0", "rounded-full", 3, "matTooltip"], [1, "text-4xl"]], template: function ScheduleWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0)(2, "div", 3)(3, "div", 4);
        \u0275\u0275repeaterCreate(4, ScheduleWeekViewComponent_For_5_Template, 8, 17, "div", 5, _forTrack07);
        \u0275\u0275repeaterCreate(6, ScheduleWeekViewComponent_For_7_Template, 4, 4, "div", 6, _forTrack07);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.weekdays());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      DatePipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleWeekViewComponent, [{
    type: Component,
    args: [{ selector: `schedule-week-view`, template: `
        <div
            #scrollContainer
            class="h-full w-full snap-x snap-mandatory overflow-auto"
        >
            <div class="m-2">
                <div class="grid w-full min-w-[87.5rem] grid-cols-7 gap-2">
                    @for (day of weekdays(); track day.id) {
                        <div
                            #dayColumn
                            header
                            class="flex snap-start items-center justify-center space-x-2 py-2"
                            [attr.data-is-today]="day.is_today"
                        >
                            <div
                                [matTooltip]="
                                    day.is_today
                                        ? 'Today'
                                        : (day.date | date: 'fullDate')
                                "
                            >
                                {{ day.date | date: 'EEE, dd' }}
                            </div>
                            <div
                                class="relative flex h-6 w-6 items-center justify-center rounded-full font-mono text-xs"
                                [class.bg-base-300]="!day.is_today"
                                [class.bg-info]="day.is_today"
                                [class.text-info-content]="day.is_today"
                                [matTooltip]="
                                    (bookings_by_date()[day.id]?.length || 0) +
                                    ' bookings'
                                "
                            >
                                {{ bookings_by_date()[day.id]?.length || 0 }}
                            </div>
                        </div>
                    }
                    @for (day of weekdays(); track day.id) {
                        <div
                            body
                            class="border-base-300 bg-base-100 flex min-h-[calc(100vh-15rem)] snap-start flex-col space-y-2 rounded-xl border p-2"
                            [class.opacity-30]="day.is_past"
                        >
                            @for (
                                bkn of bookings_by_date()[day.id] || [];
                                track bkn.id
                            ) {
                                <button
                                    matRipple
                                    class="bg-base-100 w-full rounded-lg border p-2 text-left text-black"
                                    [style.border-color]="colors[type(bkn)][1]"
                                    [style.background-color]="
                                        backgroundColor(bkn)
                                    "
                                    (click)="viewBooking(bkn)"
                                    [matTooltip]="
                                        bkn.title +
                                        (location(bkn)
                                            ? '
' + location(bkn)
                                            : '') +
                                        (visitorName(bkn)
                                            ? '
' + visitorName(bkn)
                                            : '') +
                                        (isBookingForOtherUser(bkn)
                                            ? '
for ' + bookedForLabel(bkn)
                                            : '') +
                                        '
' +
                                        ($any(bkn).user_name ||
                                            ($any(bkn).host | user | async)
                                                ?.name ||
                                            $any(bkn).host) +
                                        '
' +
                                        (bkn.date | date: 'shortTime') +
                                        ' - ' +
                                        (bkn.date_end | date: 'shortTime')
                                    "
                                >
                                    <div
                                        class="flex items-start justify-between gap-2"
                                    >
                                        <div class="min-w-0 truncate text-sm">
                                            {{ bkn.title }}
                                        </div>
                                        @if (bookingStatus(bkn); as status) {
                                            <div
                                                class="h-2.5 w-2.5 flex-shrink-0 rounded-full"
                                                [style.background-color]="
                                                    statusColor(status)
                                                "
                                                [matTooltip]="
                                                    statusLabel(status)
                                                "
                                            ></div>
                                        }
                                    </div>
                                    @if (location(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-75"
                                        >
                                            {{ location(bkn) }}
                                        </div>
                                    }
                                    @if (visitorName(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            {{ visitorName(bkn) }}
                                        </div>
                                    }
                                    @if (isBookingForOtherUser(bkn)) {
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            Booked by
                                            {{
                                                $any(bkn).booked_by_name ||
                                                    (
                                                        $any(bkn)
                                                            .booked_by_email
                                                        | user
                                                        | async
                                                    )?.name ||
                                                    $any(bkn).booked_by_email
                                            }}
                                        </div>
                                        <div
                                            class="truncate text-xs opacity-60"
                                        >
                                            for {{ bookedForLabel(bkn) }}
                                        </div>
                                    }
                                    <div class="text-xs">
                                        {{ bkn.date | date: 'shortTime' }}
                                    </div>
                                </button>
                            }
                            @if (!bookings_by_date()[day.id]?.length) {
                                <div
                                    class="flex h-full w-full flex-col items-center justify-center opacity-30"
                                >
                                    <icon class="text-4xl">event_busy</icon>
                                    <div>No bookings</div>
                                </div>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatTooltipModule,
      UserPipe
    ] }]
  }], () => [], { date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], bookings: [{ type: Input, args: [{ isSignal: true, alias: "bookings", required: false }] }], loading: [{ type: Input, args: [{ isSignal: true, alias: "loading", required: false }] }], _scroll_container: [{ type: ViewChild, args: ["scrollContainer", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleWeekViewComponent, { className: "ScheduleWeekViewComponent", filePath: "apps/workplace/src/app/schedule/schedule-week-view.component.ts", lineNumber: 219 });
})();

// apps/workplace/src/app/schedule/schedule.component.ts
function ScheduleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ScheduleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-day-view", 5);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r0.date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "schedule-week-view", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("date", ctx_r0.date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "schedule-list-view", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("date", ctx_r0.date())("end_date", ctx_r0.end_date())("bookings", ctx_r0.bookings())("loading", ctx_r0.loading());
  }
}
function ScheduleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 8);
  }
}
function ScheduleComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ScheduleComponent = class _ScheduleComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ScheduleStateService);
    this._route = inject(ActivatedRoute);
    this.b_list = this._state.bookings;
    this.bookings = this._state.filtered_bookings;
    this.loading = this._state.loading;
    this.view = signal(
      "day",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = this._state.date;
    this.end_date = this._state.end_date;
    this.setDate = (d) => this._state.setDate(d);
    this.setEndDate = (d) => this._state.setEndDate(d);
  }
  get period() {
    return this._state.getOptions().period;
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this.setOptions({ period: "day" });
    this._state.triggerPoll();
    this.subscription("poll", this._state.startPolling());
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("view")) {
        this.view.set(params.get("view"));
        if (this.view() === "week") {
          this.setOptions({ period: "week" });
        } else if (this.view() === "list") {
          this.setOptions({ period: "range" });
        } else {
          this.setOptions({ period: "day" });
        }
      }
    }));
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ScheduleComponent_BaseFactory;
      return function ScheduleComponent_Factory(__ngFactoryType__) {
        return (\u0275ScheduleComponent_BaseFactory || (\u0275ScheduleComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ScheduleComponent)))(__ngFactoryType__ || _ScheduleComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 10, consts: [[3, "viewChange", "dateChange", "end_dateChange", "view", "date", "end_date"], [1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "flex-col", "sm:flex-row"], [1, "relative", "z-50", "hidden", "bg-base-100", "sm:block", 3, "bookings", "view"], [1, "flex", "h-full", "flex-1", "flex-col", "overflow-auto"], [1, "sticky", "top-0", "z-20", 3, "bookings"], [1, "relative", "z-10", 3, "date", "bookings", "loading"], [1, "h-1/2", "flex-1", 3, "date", "bookings", "loading"], [1, "p-4"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [1, "space-y-3", 3, "date", "end_date", "bookings", "loading"]], template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ScheduleComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "schedule-topbar", 0);
        \u0275\u0275twoWayListener("viewChange", function ScheduleComponent_Template_schedule_topbar_viewChange_1_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.view, $event) || (ctx.view = $event);
          return $event;
        });
        \u0275\u0275listener("dateChange", function ScheduleComponent_Template_schedule_topbar_dateChange_1_listener($event) {
          return ctx.setDate($event);
        })("end_dateChange", function ScheduleComponent_Template_schedule_topbar_end_dateChange_1_listener($event) {
          return ctx.setEndDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 1);
        \u0275\u0275element(3, "schedule-sidebar", 2);
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275element(5, "schedule-filters", 4);
        \u0275\u0275conditionalCreate(6, ScheduleComponent_Conditional_6_Template, 1, 3, "schedule-day-view", 5)(7, ScheduleComponent_Conditional_7_Template, 1, 3, "schedule-week-view", 6)(8, ScheduleComponent_Conditional_8_Template, 2, 4, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(9, ScheduleComponent_Conditional_9_Template, 1, 0, "mat-progress-bar", 8);
        \u0275\u0275element(10, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, ScheduleComponent_Conditional_11_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance();
        \u0275\u0275twoWayProperty("view", ctx.view);
        \u0275\u0275property("date", ctx.date())("end_date", ctx.end_date());
        \u0275\u0275advance(2);
        \u0275\u0275property("bookings", ctx.b_list())("view", ctx.view());
        \u0275\u0275advance(2);
        \u0275\u0275property("bookings", ctx.b_list());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "day" ? 6 : ctx.view() === "week" ? 7 : 8);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_nav ? 11 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      MatRippleModule,
      MatProgressBarModule,
      MatProgressBar,
      MatFormFieldModule,
      MatSelectModule,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ScheduleFiltersComponent,
      ScheduleSidebarComponent,
      TopbarComponent,
      ScheduleTopbarComponent,
      ScheduleListViewComponent,
      ScheduleWeekViewComponent,
      ScheduleDayViewComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleComponent, [{
    type: Component,
    args: [{ selector: "app-schedule", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <schedule-topbar
            [(view)]="view"
            [date]="date()"
            (dateChange)="setDate($event)"
            [end_date]="end_date()"
            (end_dateChange)="setEndDate($event)"
        />
        <div
            class="bg-base-200 relative flex h-1/2 flex-1 flex-col sm:flex-row"
        >
            <schedule-sidebar
                class="relative z-50 hidden bg-base-100 sm:block"
                [bookings]="b_list()"
                [view]="view()"
            ></schedule-sidebar>
            <div class="flex h-full flex-1 flex-col overflow-auto">
                <schedule-filters
                    class="sticky top-0 z-20"
                    [bookings]="b_list()"
                ></schedule-filters>
                @if (view() === 'day') {
                    <schedule-day-view
                        [date]="date()"
                        [bookings]="bookings()"
                        [loading]="loading()"
                        class="relative z-10"
                    />
                } @else if (view() === 'week') {
                    <schedule-week-view
                        class="h-1/2 flex-1"
                        [date]="date()"
                        [bookings]="bookings()"
                        [loading]="loading()"
                    />
                } @else {
                    <div class="p-4">
                        <schedule-list-view
                            [date]="date()"
                            [end_date]="end_date()"
                            [bookings]="bookings()"
                            [loading]="loading()"
                            class="space-y-3"
                        />
                    </div>
                }
            </div>
            @if (loading()) {
                <mat-progress-bar
                    class="absolute inset-x-0 bottom-0"
                    mode="indeterminate"
                ></mat-progress-bar>
            }
            <virtual-concierge-button />
        </div>
        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [
      CommonModule,
      FormsModule,
      MatRippleModule,
      MatProgressBarModule,
      MatFormFieldModule,
      MatSelectModule,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ScheduleFiltersComponent,
      ScheduleSidebarComponent,
      TopbarComponent,
      ScheduleTopbarComponent,
      ScheduleListViewComponent,
      ScheduleWeekViewComponent,
      ScheduleDayViewComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "apps/workplace/src/app/schedule/schedule.component.ts", lineNumber: 116 });
})();

// apps/workplace/src/app/schedule/schedule.routes.ts
var ROUTES = [
  {
    path: "",
    component: ScheduleComponent,
    title: "Your Bookings"
  },
  { path: "**", redirectTo: "" }
];
export {
  ROUTES
};
//# sourceMappingURL=schedule.routes-FTK5FUXO.js.map
