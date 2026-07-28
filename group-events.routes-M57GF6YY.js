import {
  GroupEventDetailsModalComponent
} from "./chunk-OC2U3YBZ.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-KCNEHSPA.js";
import "./chunk-PLWZCKRF.js";
import "./chunk-A6GQ36Y7.js";
import "./chunk-RE27RORJ.js";
import {
  DateCalendarComponent,
  startOfMonth
} from "./chunk-UPR6U4BX.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-4GZCSMZ5.js";
import "./chunk-3GVN3SRV.js";
import "./chunk-6P23I325.js";
import "./chunk-PPDUKJDA.js";
import "./chunk-G26ZPPTY.js";
import "./chunk-HXYKLH6Y.js";
import {
  SpacePipe,
  queryEvents
} from "./chunk-Z4XHVJCT.js";
import "./chunk-LHGJYJXF.js";
import "./chunk-KQA26GCM.js";
import "./chunk-IU2HDTBW.js";
import "./chunk-UBBP5RSL.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltipModule
} from "./chunk-EAFNATU6.js";
import "./chunk-IMKOGBT6.js";
import {
  AsyncHandler,
  IconComponent,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SettingsService,
  Space,
  addMonths,
  currentUser,
  getUnixTime,
  settingSignal
} from "./chunk-KOONX7IH.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  Injectable,
  Input,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgModel,
  RouterModule,
  TranslatePipe,
  addDays,
  computed,
  differenceInCalendarDays,
  effect,
  endOfDay,
  format,
  inject,
  input,
  normalizeDates,
  ra,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  unique,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵadvance,
  ɵɵclassProp,
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
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-6SUTYSMR.js";
import {
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/differenceInDays.js
function differenceInDays(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  const sign = compareLocalAsc(laterDate_, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarDays(laterDate_, earlierDate_)
  );
  laterDate_.setDate(laterDate_.getDate() - sign * difference);
  const isLastDayNotFull = Number(
    compareLocalAsc(laterDate_, earlierDate_) === -sign
  );
  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}
function compareLocalAsc(laterDate, earlierDate) {
  const diff = laterDate.getFullYear() - earlierDate.getFullYear() || laterDate.getMonth() - earlierDate.getMonth() || laterDate.getDate() - earlierDate.getDate() || laterDate.getHours() - earlierDate.getHours() || laterDate.getMinutes() - earlierDate.getMinutes() || laterDate.getSeconds() - earlierDate.getSeconds() || laterDate.getMilliseconds() - earlierDate.getMilliseconds();
  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}

// libs/events/src/lib/group-event-card.component.ts
var _c0 = (a0) => ({ count: a0 });
function GroupEventCardComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.event().images[0]);
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name || "", " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventCardComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 2);
    \u0275\u0275listener("click", function GroupEventCardComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275conditionalCreate(2, GroupEventCardComponent_Conditional_0_Conditional_2_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "h2", 7);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 8)(11, "p", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(13, GroupEventCardComponent_Conditional_0_Conditional_13_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 11)(15, "icon", 12);
    \u0275\u0275text(16, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, GroupEventCardComponent_Conditional_0_Conditional_17_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(18, GroupEventCardComponent_Conditional_0_Conditional_18_Template, 3, 3, "div", 10);
    \u0275\u0275conditionalCreate(19, GroupEventCardComponent_Conditional_0_Conditional_19_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 11)(21, "icon", 12);
    \u0275\u0275text(22, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 13);
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.event().images?.length ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 11, ctx_r1.event().date, "EEE d MMM"), ", ", \u0275\u0275pipeBind2(7, 14, ctx_r1.event().date, ctx_r1.time_format()), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("title", ctx_r1.event().title);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.event().title, " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.raw_description());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.raw_description().trim() ? 13 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_onsite() ? 19 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(25, 17, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(20, _c0, ctx_r1.event().attendees?.length || "0")), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r1.event().images[0]);
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.space().display_name || ctx_r1.space().name || "", " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_33_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventCardComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function GroupEventCardComponent_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275conditionalCreate(2, GroupEventCardComponent_Conditional_1_Conditional_2_Template, 1, 1, "img", 4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16)(4, "icon", 17);
    \u0275\u0275text(5, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 18);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 19)(10, "div", 20)(11, "div", 21);
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 22);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "date");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 23)(18, "h3", 24);
    \u0275\u0275text(19);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 25);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "date");
    \u0275\u0275pipe(23, "date");
    \u0275\u0275pipe(24, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 26)(26, "p", 27);
    \u0275\u0275text(27);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, GroupEventCardComponent_Conditional_1_Conditional_28_Template, 3, 3, "p", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "div", 11)(30, "icon", 12);
    \u0275\u0275text(31, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(32, GroupEventCardComponent_Conditional_1_Conditional_32_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(33, GroupEventCardComponent_Conditional_1_Conditional_33_Template, 3, 3, "div", 10);
    \u0275\u0275conditionalCreate(34, GroupEventCardComponent_Conditional_1_Conditional_34_Template, 3, 3, "div", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(35, "div", 11)(36, "icon", 12);
    \u0275\u0275text(37, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div", 13);
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(41, "div", 28);
    \u0275\u0275text(42);
    \u0275\u0275pipe(43, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.event().images?.length ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 15, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 17, ctx_r1.event().date, "MMM"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 20, ctx_r1.event().date, "d"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.event().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(22, 23, ctx_r1.event().date, "EEEE"), " ", \u0275\u0275pipeBind2(23, 26, ctx_r1.event().date, ctx_r1.time_format()), " - ", \u0275\u0275pipeBind2(24, 29, ctx_r1.event().date + ctx_r1.event().duration * 60 * 1e3, ctx_r1.time_format()), " ");
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r1.raw_description());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.raw_description().trim() ? 28 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r1.is_onsite() && ctx_r1.has_space() ? 32 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.is_onsite() && !ctx_r1.has_space() ? 33 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.is_onsite() ? 34 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(40, 32, "CALENDAR_EVENT.GROUP_ATTENDING", \u0275\u0275pureFunction1(37, _c0, ctx_r1.attendee_count() || "0")), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(43, 35, "COMMON.VIEW_DETAILS"), " ");
  }
}
var GroupEventCardComponent = class _GroupEventCardComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this.event = input(
      void 0,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.featured = input(
      void 0,
      ...ngDevMode ? [{ debugName: "featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_description = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_description" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_onsite = computed(
      () => this.event()?.extension_data.attendance_type !== "ONLINE",
      ...ngDevMode ? [{ debugName: "is_onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.space()?.id,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_online = computed(
      () => !this.is_onsite || this.event()?.extension_data.attendance_type === "ANY",
      ...ngDevMode ? [{ debugName: "is_online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_event_calendar = settingSignal("group_events_calendar");
    this.attendee_count = computed(
      () => this.event()?.attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0,
      ...ngDevMode ? [{ debugName: "attendee_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_24_hour = settingSignal("use_24_hour_time");
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar());
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.raw_description.set(this.removeHtmlTags(this.event().body));
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return doc.body.textContent || "";
  }
  viewDetails() {
    this._dialog.open(GroupEventDetailsModalComponent, {
      data: { event: this.event(), concierge: false }
    });
  }
  static {
    this.\u0275fac = function GroupEventCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventCardComponent, selectors: [["group-event-card"]], inputs: { event: [1, "event"], featured: [1, "featured"] }, decls: 2, vars: 1, consts: [["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "flex", "h-80", "w-60", "flex-col", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-28", "min-h-28", "w-full", "items-center", "justify-between", "overflow-hidden", "border-b"], ["auth", "", 1, "absolute", "top-0", "left-0", "h-full", "w-full", "object-cover", "object-center", 3, "source"], [1, "h-1/2", "w-full", "flex-1", "p-4"], [1, "text-left", "text-sm", "opacity-60"], [1, "mb-2", "w-full", "truncate", "text-left", "text-xl", 3, "title"], [1, "mb-2", "h-18", "flex-1", "overflow-hidden", "text-left", "text-xs", "opacity-60"], [1, "line-clamp-4"], [1, "opacity-30"], [1, "flex", "items-center", "space-x-2", "text-sm"], [1, "text-info"], [1, ""], ["matRipple", "", 1, "border-base-300", "bg-base-100", "hover:border-info", "mx-auto", "flex", "h-56", "w-252", "max-w-full", "overflow-hidden", "rounded-xl", "border", "shadow-sm", "hover:shadow-2xl", 3, "click"], [1, "border-base-200", "bg-base-200", "relative", "flex", "h-full", "w-1/2", "max-w-[18rem]", "items-center", "justify-between", "overflow-hidden", "border-r"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br-xl", "py-2", "pr-4", "pl-2", "text-sm"], [1, "text-base"], [1, "uppercase"], ["details", "", 1, "flex", "w-1/2", "max-w-[calc(100%-18rem)]", "flex-1", "space-x-4", "overflow-hidden", "px-4", "py-4"], [1, "flex", "flex-col", "items-center"], [1, "text-sm", "opacity-30"], [1, "text-lg"], [1, "flex", "w-px", "flex-1", "flex-col", "space-y-2"], [1, "text-left"], ["time", "", 1, "text-left", "text-sm", "opacity-30"], [1, "h-20", "overflow-hidden", "text-left"], [1, "line-clamp-3"], [1, "bg-secondary", "text-secondary-content", "absolute", "top-4", "right-4", "w-32", "truncate", "rounded-sm", "px-4", "py-2", "text-center"]], template: function GroupEventCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, GroupEventCardComponent_Conditional_0_Template, 26, 22, "button", 0)(1, GroupEventCardComponent_Conditional_1_Template, 44, 39, "button", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.featured() ? 0 : 1);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      RouterModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe
    ], styles: ["\nbutton[_ngcontent-%COMP%] {\n  transition: box-shadow 300ms, border 200ms;\n}\n/*# sourceMappingURL=group-event-card.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventCardComponent, [{
    type: Component,
    args: [{ selector: "group-event-card", template: `
        @if (!featured()) {
            <button
                matRipple
                (click)="viewDetails()"
                class="border-base-300 bg-base-100 hover:border-info flex h-80 w-60 flex-col overflow-hidden rounded-xl border shadow-sm hover:shadow-2xl"
            >
                <div
                    class="border-base-200 bg-base-200 relative flex h-28 min-h-28 w-full items-center justify-between overflow-hidden border-b"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute top-0 left-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div class="h-1/2 w-full flex-1 p-4">
                    <div class="text-left text-sm opacity-60">
                        {{ event().date | date: 'EEE d MMM' }},
                        {{ event().date | date: time_format() }}
                    </div>
                    <h2
                        class="mb-2 w-full truncate text-left text-xl"
                        [title]="event().title"
                    >
                        {{ event().title }}
                    </h2>
                    <div
                        class="mb-2 h-18 flex-1 overflow-hidden text-left text-xs opacity-60"
                    >
                        <p class="line-clamp-4">{{ raw_description() }}</p>
                        @if (!raw_description().trim()) {
                            <p class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </p>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">place</icon>
                        @if (is_onsite() && has_space()) {
                            <div>
                                {{ space().display_name || space().name || '' }}
                            </div>
                        }
                        @if (is_onsite() && !has_space()) {
                            <div class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                        | translate
                                }}
                            </div>
                        }
                        @if (!is_onsite()) {
                            <div class="opacity-30">
                                {{ 'CALENDAR_EVENT.GROUP_REMOTE' | translate }}
                            </div>
                        }
                    </div>
                    <div class="flex items-center space-x-2 text-sm">
                        <icon class="text-info">people</icon>
                        <div class="">
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDING'
                                    | translate
                                        : {
                                              count:
                                                  event().attendees?.length ||
                                                  '0',
                                          }
                            }}
                        </div>
                    </div>
                </div>
            </button>
        } @else {
            <button
                matRipple
                (click)="viewDetails()"
                class="border-base-300 bg-base-100 hover:border-info mx-auto flex h-56 w-252 max-w-full overflow-hidden rounded-xl border shadow-sm hover:shadow-2xl"
            >
                <div
                    class="border-base-200 bg-base-200 relative flex h-full w-1/2 max-w-[18rem] items-center justify-between overflow-hidden border-r"
                >
                    @if (event().images?.length) {
                        <img
                            auth
                            [source]="event().images[0]"
                            class="absolute top-0 left-0 h-full w-full object-cover object-center"
                        />
                    }
                </div>
                <div
                    class="bg-info text-info-content absolute top-0 left-0 flex items-center space-x-2 rounded-br-xl py-2 pr-4 pl-2 text-sm"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
                <div
                    details
                    class="flex w-1/2 max-w-[calc(100%-18rem)] flex-1 space-x-4 overflow-hidden px-4 py-4"
                >
                    <div class="flex flex-col items-center">
                        <div class="text-sm opacity-30">
                            {{ event().date | date: 'MMM' }}
                        </div>
                        <div class="text-lg">
                            {{ event().date | date: 'd' }}
                        </div>
                    </div>
                    <div class="flex w-px flex-1 flex-col space-y-2">
                        <h3 class="text-left">{{ event().title }}</h3>
                        <div time class="text-left text-sm opacity-30">
                            {{ event().date | date: 'EEEE' }}
                            {{ event().date | date: time_format() }} -
                            {{
                                event().date + event().duration * 60 * 1000
                                    | date: time_format()
                            }}
                        </div>
                        <div class="h-20 overflow-hidden text-left">
                            <p class="line-clamp-3">{{ raw_description() }}</p>
                            @if (!raw_description().trim()) {
                                <p class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                            | translate
                                    }}
                                </p>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">place</icon>
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{
                                        space().display_name ||
                                            space().name ||
                                            ''
                                    }}
                                </div>
                            }
                            @if (is_onsite() && !has_space()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_UNCONFIRMED'
                                            | translate
                                    }}
                                </div>
                            }
                            @if (!is_onsite()) {
                                <div class="opacity-30">
                                    {{
                                        'CALENDAR_EVENT.GROUP_REMOTE'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                        <div class="flex items-center space-x-2 text-sm">
                            <icon class="text-info">people</icon>
                            <div class="">
                                {{
                                    'CALENDAR_EVENT.GROUP_ATTENDING'
                                        | translate
                                            : {
                                                  count:
                                                      attendee_count() || '0',
                                              }
                                }}
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    class="bg-secondary text-secondary-content absolute top-4 right-4 w-32 truncate rounded-sm px-4 py-2 text-center"
                >
                    {{ 'COMMON.VIEW_DETAILS' | translate }}
                </div>
            </button>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatRippleModule,
      RouterModule,
      MatTooltipModule,
      IconComponent,
      AuthenticatedImageDirective
    ], styles: ["/* angular:styles/component:css;8c74ff6cf8408fff8ffe57cc48d0258398d7d0d3ddd3849e71b02b24c0576926;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/group-event-card.component.ts */\nbutton {\n  transition: box-shadow 300ms, border 200ms;\n}\n/*# sourceMappingURL=group-event-card.component.css.map */\n"] }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }], featured: [{ type: Input, args: [{ isSignal: true, alias: "featured", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventCardComponent, { className: "GroupEventCardComponent", filePath: "libs/events/src/lib/group-event-card.component.ts", lineNumber: 237 });
})();

// apps/workplace/src/app/events/group-events-state.service.ts
var GroupEventsStateService = class _GroupEventsStateService {
  get calendar() {
    return this._settings.get("app.group_events_calendar");
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._options = signal(
      {
        date: Date.now()
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        categories: [],
        tags: []
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._tag_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_tag_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = signal(
      [],
      ...ngDevMode ? [{ debugName: "_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filters = this._filters.asReadonly();
    this.tags = this._tag_list.asReadonly();
    this.events = this._events.asReadonly();
    this.filtered_events = computed(
      () => {
        const tag_list = this._filters().tags.map((_) => _.toLowerCase());
        return this._events().filter((event) => {
          const event_tags = (event.extension_data.tags || []).map((_) => _.toLowerCase());
          return tag_list.every((tag) => event_tags.includes(tag)) && event.date_end > Date.now();
        });
      },
      ...ngDevMode ? [{ debugName: "filtered_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    effect(async () => {
      const building = this._org.active_building();
      const options = this._options();
      if (!building) {
        this._events.set([]);
        return;
      }
      const sys = await ra({ in: this.calendar }).then((r) => r.data?.[0]).catch(() => null);
      if (!sys) {
        this._events.set([]);
        return;
      }
      const list = await queryEvents({
        period_start: getUnixTime(startOfDay(options.date)),
        period_end: getUnixTime(endOfDay(options.end || options.date || Date.now())),
        system_ids: sys.id
      }).catch(() => []);
      const events = list.filter((_) => (_.permission !== "private" || currentUser()?.email === _.creator || currentUser()?.email === _.host || currentUser()?.email === _.mailbox) && _.extension_data.shared_event).sort((a, b) => a.date - b.date);
      this._events.set(events);
      const tags = events.map((event) => event.extension_data.tags || []).flat();
      this._tag_list.set(unique([...this._tag_list(), ...tags]));
    });
  }
  setOptions(options) {
    this._options.update((old_options) => __spreadValues(__spreadValues({}, old_options), options));
  }
  setFilters(filters) {
    this._filters.update((old_filters) => __spreadValues(__spreadValues({}, old_filters), filters));
  }
  static {
    this.\u0275fac = function GroupEventsStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventsStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GroupEventsStateService, factory: _GroupEventsStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/workplace/src/app/events/group-events-filters-list.component.ts
var _c02 = () => [];
function GroupEventsFiltersListComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 6);
    \u0275\u0275listener("click", function GroupEventsFiltersListComponent_For_11_Template_button_click_3_listener() {
      const tag_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.removeTag(tag_r2));
    });
    \u0275\u0275elementStart(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const tag_r2 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(tag_r2);
  }
}
var GroupEventsFiltersListComponent = class _GroupEventsFiltersListComponent {
  constructor() {
    this._state = inject(GroupEventsStateService);
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.this_period = computed(
      () => {
        const { date, end } = this.options();
        return Date.now() >= startOfDay(date).valueOf() && Date.now() < endOfDay(end || date).valueOf();
      },
      ...ngDevMode ? [{ debugName: "this_period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => Math.abs(differenceInDays(this.options().date, this.options().end || Date.now())) > 7 ? "month" : "week",
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  removeTag(tag) {
    const tags = this.filters().tags || [];
    this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
  }
  static {
    this.\u0275fac = function GroupEventsFiltersListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventsFiltersListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsFiltersListComponent, selectors: [["group-events-filters-list"]], decls: 12, vars: 12, consts: [[1, "border-base-300", "bg-base-100", "mx-auto", "my-2", "w-252", "max-w-full", "rounded-sm", "border", "p-4"], [1, "mb-4", "flex", "items-center", "justify-between", "space-x-2"], [1, "flex", "flex-wrap"], [1, "border-base-400", "m-1", "flex", "items-center", "rounded-3xl", "border", "px-4", "py-3", "text-sm"], [1, "border-base-400", "m-1", "flex", "items-center", "rounded-3xl", "border", "pr-1", "pl-4"], [1, "mr-2", "flex-1", "text-sm"], ["icon", "", "matRipple", "", 3, "click"]], template: function GroupEventsFiltersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div");
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "div", 2)(6, "div", 3);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275pipe(9, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, GroupEventsFiltersListComponent_For_11_Template, 6, 1, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, ctx.this_period() ? ctx.period() === "week" ? "COMMON.WEEK_THIS" : "COMMON.MONTH_THIS" : ctx.period() === "week" ? "COMMON.WEEK_UPCOMING" : "COMMON.MONTH_UPCOMING"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(8, 5, ctx.options().date, "MMM d, y"), " \u2013 ", \u0275\u0275pipeBind2(9, 8, ctx.options().end, "MMM d, y"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.filters().tags || \u0275\u0275pureFunction0(11, _c02));
      }
    }, dependencies: [CommonModule, MatRippleModule, MatRipple, IconComponent, DatePipe, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsFiltersListComponent, [{
    type: Component,
    args: [{ selector: "group-events-filters-list", template: `
        <div
            class="border-base-300 bg-base-100 mx-auto my-2 w-252 max-w-full rounded-sm border p-4"
        >
            <div class="mb-4 flex items-center justify-between space-x-2">
                <div>
                    {{
                        (this_period()
                            ? period() === 'week'
                                ? 'COMMON.WEEK_THIS'
                                : 'COMMON.MONTH_THIS'
                            : period() === 'week'
                              ? 'COMMON.WEEK_UPCOMING'
                              : 'COMMON.MONTH_UPCOMING'
                        ) | translate
                    }}
                </div>
            </div>
            <div class="flex flex-wrap">
                <div
                    class="border-base-400 m-1 flex items-center rounded-3xl border px-4 py-3 text-sm"
                >
                    {{ options().date | date: 'MMM d, y' }}
                    &ndash;
                    {{ options().end | date: 'MMM d, y' }}
                </div>
                @for (tag of filters().tags || []; track tag) {
                    <div
                        class="border-base-400 m-1 flex items-center rounded-3xl border pr-1 pl-4"
                    >
                        <div class="mr-2 flex-1 text-sm">{{ tag }}</div>
                        <button icon matRipple (click)="removeTag(tag)">
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
    `, imports: [CommonModule, MatRippleModule, TranslatePipe, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsFiltersListComponent, { className: "GroupEventsFiltersListComponent", filePath: "apps/workplace/src/app/events/group-events-filters-list.component.ts", lineNumber: 52 });
})();

// apps/workplace/src/app/events/group-events-sidebar.component.ts
function GroupEventsSidebarComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const range_r1 = ctx.$implicit;
    \u0275\u0275property("value", range_r1.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", range_r1.display, " ");
  }
}
function GroupEventsSidebarComponent_Conditional_21_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 15);
    \u0275\u0275listener("click", function GroupEventsSidebarComponent_Conditional_21_For_5_Template_button_click_0_listener() {
      const tag_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r3.toggleTag(tag_r3));
    });
    \u0275\u0275elementStart(1, "mat-checkbox", 16);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r3.filters().tags?.includes(tag_r3));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", tag_r3, " ");
  }
}
function GroupEventsSidebarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "h3");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, GroupEventsSidebarComponent_Conditional_21_For_5_Template, 3, 2, "button", 14, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "COMMON.TAGS"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r3.tags());
  }
}
var GroupEventsSidebarComponent = class _GroupEventsSidebarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._state = inject(GroupEventsStateService);
    this.period = signal(
      "week",
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "period_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_range = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "selected_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._state.options;
    this.filters = this._state.filters;
    this.tags = this._state.tags;
  }
  ngOnInit() {
    this._generatePeriods();
    if (this.period_list().length) {
      this.setPeriod(this.period_list()[0].id);
      this.selected_range.set(this.period_list()[0].id);
    }
  }
  toggleTag(tag) {
    const tags = this.filters().tags || [];
    if (tags.includes(tag)) {
      this._state.setFilters({ tags: tags.filter((_) => _ !== tag) });
    } else {
      this._state.setFilters({ tags: [...tags, tag] });
    }
  }
  setPeriodType(period) {
    this.period.set(period);
    this._generatePeriods();
    if (this.period_list().length) {
      this.setPeriod(this.period_list()[0].id);
      this.selected_range.set(this.period_list()[0].id);
    }
  }
  setPeriodFromDate(date) {
    for (const period of this.period_list()) {
      if (date >= period.start && date <= period.end) {
        this.selected_range.set(period.id);
        this.setPeriod(period.id);
        return;
      }
    }
  }
  setPeriod(id) {
    const { start, end } = this.period_list().find((_) => _.id === id);
    this._state.setOptions({ date: start, end });
  }
  _generatePeriods() {
    const periods = [];
    const period_type = this.period();
    let date = Date.now();
    const end_date = addDays(date, 12 * 30).valueOf();
    const week_offset = this._settings.get("app.week_start") || 0;
    if (period_type === "month") {
      date = startOfMonth(date).valueOf();
    } else if (period_type === "week") {
      date = startOfWeek(date, { weekStartsOn: week_offset }).valueOf();
    }
    while (date < end_date) {
      if (period_type === "week") {
        const end = endOfDay(addDays(date, 6)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${format(Math.max(Date.now(), date), "EEE, do MMM")} \u2013 ${format(end, "do MMM")}`
        });
        date = addDays(date, 7).valueOf();
      } else if (period_type === "month") {
        const end = endOfDay(addDays(addMonths(date, 1), -1)).valueOf();
        periods.push({
          id: date,
          start: date,
          end,
          display: `${format(date, "MMMM yyyy")}`
        });
        date = addMonths(date, 1).valueOf();
      } else
        break;
    }
    this.period_list.set(periods);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275GroupEventsSidebarComponent_BaseFactory;
      return function GroupEventsSidebarComponent_Factory(__ngFactoryType__) {
        return (\u0275GroupEventsSidebarComponent_BaseFactory || (\u0275GroupEventsSidebarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupEventsSidebarComponent)))(__ngFactoryType__ || _GroupEventsSidebarComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsSidebarComponent, selectors: [["group-events-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 22, vars: 16, consts: [[1, "bg-base-100", "flex", "flex-col", "sm:h-full", "sm:w-[18rem]"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "flex", "flex-col", "items-center", "space-y-2", "px-2", "pb-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Period", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "border-base-200", "mx-auto", "hidden", "w-[calc(100%-1rem)]", "sm:block"], [1, "hidden", "flex-1", "flex-col", "overflow-auto", "sm:flex"], [3, "ngModelChange", "ngModel"], [1, "border-base-200", "mx-auto", "w-[calc(100%-1rem)]"], [1, "flex", "flex-1", "flex-col", "overflow-auto"], [1, "p-4", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2", "px-4"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "text-left"], ["matRipple", "", 1, "flex", "w-full", "items-center", "rounded-sm", "text-left", 3, "click"], [3, "ngModel"]], template: function GroupEventsSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_2_listener() {
          return ctx.setPeriodType("week");
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function GroupEventsSidebarComponent_Template_button_click_5_listener() {
          return ctx.setPeriodType("month");
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 3)(9, "mat-form-field", 4)(10, "mat-select", 5);
        \u0275\u0275twoWayListener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
          \u0275\u0275twoWayBindingSet(ctx.selected_range, $event) || (ctx.selected_range = $event);
          return $event;
        });
        \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_mat_select_ngModelChange_10_listener($event) {
          return ctx.setPeriod($event);
        });
        \u0275\u0275repeaterCreate(11, GroupEventsSidebarComponent_For_12_Template, 2, 2, "mat-option", 6, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd()();
        \u0275\u0275element(13, "hr", 7);
        \u0275\u0275elementStart(14, "div", 8)(15, "date-calendar", 9);
        \u0275\u0275listener("ngModelChange", function GroupEventsSidebarComponent_Template_date_calendar_ngModelChange_15_listener($event) {
          return ctx.setPeriodFromDate($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275element(16, "hr", 10);
        \u0275\u0275elementStart(17, "div", 11)(18, "h2", 12);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(21, GroupEventsSidebarComponent_Conditional_21_Template, 6, 3, "div", 13);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period() !== "week");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period() !== "month");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "COMMON.MONTH"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275twoWayProperty("ngModel", ctx.selected_range);
        \u0275\u0275control();
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.period_list());
        \u0275\u0275advance(4);
        \u0275\u0275property("ngModel", ctx.options().date);
        \u0275\u0275control();
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 14, "COMMON.FILTERS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tags().length ? 21 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatCheckboxModule,
      MatCheckbox,
      MatRippleModule,
      MatRipple,
      DateCalendarComponent,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsSidebarComponent, [{
    type: Component,
    args: [{ selector: `group-events-sidebar`, template: `
        <div class="bg-base-100 flex flex-col sm:h-full sm:w-[18rem]">
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period() !== 'week'"
                    (click)="setPeriodType('week')"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period() !== 'month'"
                    (click)="setPeriodType('month')"
                >
                    {{ 'COMMON.MONTH' | translate }}
                </button>
            </div>
            <div class="flex flex-col items-center space-y-2 px-2 pb-2">
                <mat-form-field
                    appearance="outline"
                    class="no-subscript w-full"
                >
                    <mat-select
                        [(ngModel)]="selected_range"
                        (ngModelChange)="setPeriod($event)"
                        placeholder="Select Period"
                    >
                        @for (range of period_list(); track range) {
                            <mat-option [value]="range.id">
                                {{ range.display }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            </div>
            <hr
                class="border-base-200 mx-auto hidden w-[calc(100%-1rem)] sm:block"
            />
            <div class="hidden flex-1 flex-col overflow-auto sm:flex">
                <date-calendar
                    [ngModel]="options().date"
                    (ngModelChange)="setPeriodFromDate($event)"
                ></date-calendar>
                <hr class="border-base-200 mx-auto w-[calc(100%-1rem)]" />
                <div class="flex flex-1 flex-col overflow-auto">
                    <h2 class="p-4 text-lg font-medium">
                        {{ 'COMMON.FILTERS' | translate }}
                    </h2>
                    @if (tags().length) {
                        <div class="flex flex-col space-y-2 px-4">
                            <h3>{{ 'COMMON.TAGS' | translate }}</h3>
                            @for (tag of tags(); track tag) {
                                <button
                                    matRipple
                                    class="flex w-full items-center rounded-sm text-left"
                                    (click)="toggleTag(tag)"
                                >
                                    <mat-checkbox
                                        [ngModel]="
                                            filters().tags?.includes(tag)
                                        "
                                    >
                                        {{ tag }}
                                    </mat-checkbox>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      FormsModule,
      MatCheckboxModule,
      MatRippleModule,
      DateCalendarComponent,
      MatFormFieldModule,
      MatSelectModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsSidebarComponent, { className: "GroupEventsSidebarComponent", filePath: "apps/workplace/src/app/events/group-events-sidebar.component.ts", lineNumber: 112 });
})();

// apps/workplace/src/app/events/group-events.component.ts
function GroupEventsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 2);
  }
  if (rf & 2) {
    \u0275\u0275property("event", ctx)("featured", true);
  }
}
function GroupEventsComponent_Conditional_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "group-event-card", 5);
  }
  if (rf & 2) {
    const event_r1 = ctx.$implicit;
    \u0275\u0275property("event", event_r1);
  }
}
function GroupEventsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, GroupEventsComponent_Conditional_6_For_2_Template, 1, 1, "group-event-card", 5, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.events_without_featured());
  }
}
function GroupEventsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "img", 6);
    \u0275\u0275elementStart(2, "div", 7);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.EVENTS_EMPTY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 4, "APP.WORKPLACE.EVENTS_RETRY"), " ");
  }
}
var GroupEventsComponent = class _GroupEventsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(GroupEventsStateService);
    this.event_list = this._state.filtered_events;
    this.featured = computed(
      () => this.event_list().find((_) => _.extension_data?.featured || _.featured),
      ...ngDevMode ? [{ debugName: "featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.events_without_featured = computed(
      () => this.event_list().filter((_) => _.id !== this.featured()?.id),
      ...ngDevMode ? [{ debugName: "events_without_featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275GroupEventsComponent_BaseFactory;
      return function GroupEventsComponent_Factory(__ngFactoryType__) {
        return (\u0275GroupEventsComponent_BaseFactory || (\u0275GroupEventsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_GroupEventsComponent)))(__ngFactoryType__ || _GroupEventsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventsComponent, selectors: [["", "group-events", ""]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 2, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col", "sm:flex-row"], [1, "h-full", "w-full", "flex-1", "overflow-auto", "p-2", "sm:w-1/2", "sm:p-4"], [1, "mx-auto", "my-2", "w-5xl", "max-w-full", 3, "event", "featured"], [1, "mx-auto", "mt-2", "flex", "w-5xl", "max-w-full", "flex-wrap"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center", "space-y-2"], [1, "m-2", 3, "event"], ["src", "assets/icons/no-results.svg", 1, "w-32"], [1, "font-medium"], [1, "opacity-30"]], template: function GroupEventsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "topbar");
        \u0275\u0275elementStart(1, "main", 0);
        \u0275\u0275element(2, "group-events-sidebar");
        \u0275\u0275elementStart(3, "div", 1);
        \u0275\u0275element(4, "group-events-filters-list");
        \u0275\u0275conditionalCreate(5, GroupEventsComponent_Conditional_5_Template, 1, 2, "group-event-card", 2);
        \u0275\u0275conditionalCreate(6, GroupEventsComponent_Conditional_6_Template, 3, 0, "div", 3)(7, GroupEventsComponent_Conditional_7_Template, 8, 6, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275element(8, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275element(9, "footer-menu");
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275advance(5);
        \u0275\u0275conditional((tmp_0_0 = ctx.featured()) ? 5 : -1, tmp_0_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event_list().length ? 6 : 7);
      }
    }, dependencies: [
      CommonModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      GroupEventCardComponent,
      GroupEventsFiltersListComponent,
      GroupEventsSidebarComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain[_ngcontent-%COMP%] {\n  min-height: 50%;\n}\n.top[_ngcontent-%COMP%] {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=group-events.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventsComponent, [{
    type: Component,
    args: [{ selector: "[group-events]", template: `
        <topbar />
        <main class="bg-base-200 flex h-1/2 flex-1 flex-col sm:flex-row">
            <group-events-sidebar></group-events-sidebar>
            <div class="h-full w-full flex-1 overflow-auto p-2 sm:w-1/2 sm:p-4">
                <group-events-filters-list></group-events-filters-list>
                @if (featured(); as event) {
                    <group-event-card
                        [event]="event"
                        [featured]="true"
                        class="mx-auto my-2 w-5xl max-w-full"
                    ></group-event-card>
                }
                @if (event_list().length) {
                    <div class="mx-auto mt-2 flex w-5xl max-w-full flex-wrap">
                        @for (event of events_without_featured(); track event) {
                            <group-event-card
                                [event]="event"
                                class="m-2"
                            ></group-event-card>
                        }
                    </div>
                } @else {
                    <div
                        class="flex h-full w-full flex-col items-center justify-center space-y-2"
                    >
                        <img src="assets/icons/no-results.svg" class="w-32" />
                        <div class="font-medium">
                            {{ 'APP.WORKPLACE.EVENTS_EMPTY' | translate }}
                        </div>
                        <div class="opacity-30">
                            {{ 'APP.WORKPLACE.EVENTS_RETRY' | translate }}
                        </div>
                    </div>
                }
            </div>
            <virtual-concierge-button />
        </main>
        <footer-menu />
    `, imports: [
      CommonModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      GroupEventCardComponent,
      GroupEventsFiltersListComponent,
      GroupEventsSidebarComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;3c5c7a9656c05edf563f87210f0959a666a118460bc624ae997afcc143850661;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/events/group-events.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\nmain {\n  min-height: 50%;\n}\n.top {\n  background-color: #007ac8;\n}\n/*# sourceMappingURL=group-events.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventsComponent, { className: "GroupEventsComponent", filePath: "apps/workplace/src/app/events/group-events.component.ts", lineNumber: 88 });
})();

// apps/workplace/src/app/events/group-events.routes.ts
var ROUTES = [
  {
    path: "",
    component: GroupEventsComponent,
    title: "Group Events"
  }
];
export {
  ROUTES
};
//# sourceMappingURL=group-events.routes-M57GF6YY.js.map
