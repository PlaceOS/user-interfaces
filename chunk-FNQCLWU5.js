import {
  BookingDetailsModalComponent,
  EventDetailsModalComponent,
  StatusPillComponent
} from "./chunk-H4ZM3COD.js";
import {
  GroupEventDetailsModalComponent
} from "./chunk-VLENIUQF.js";
import {
  ParkingService
} from "./chunk-SWF2FTYD.js";
import {
  takeUntilDestroyed
} from "./chunk-QLEMKVFT.js";
import {
  UserAvatarComponent
} from "./chunk-A4ULKLG5.js";
import {
  MatDialog,
  bookingLocationString,
  formatEmailName,
  parkingRequestStatus,
  visitorDisplayNameFor
} from "./chunk-2EHUPV2S.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-LMAIQ4DZ.js";
import {
  SpacePipe
} from "./chunk-DLMEBJIG.js";
import {
  TranslatePipe
} from "./chunk-QGI2HD4I.js";
import {
  BOOKING_TYPE_COLORS,
  OrganisationService,
  SettingsService,
  currentUser,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  settingSignal
} from "./chunk-GRXVKFOQ.js";
import {
  IconComponent
} from "./chunk-ABUJTHF5.js";
import {
  AsyncHandler
} from "./chunk-NCRUSG7A.js";
import {
  addMinutes,
  format,
  formatDuration,
  getTimezoneOffsetString,
  i18n,
  isSameDay
} from "./chunk-WSQPQHCZ.js";
import {
  MatRippleModule
} from "./chunk-JJMLMF3T.js";
import {
  ActivatedRoute,
  RouterLink,
  RouterModule
} from "./chunk-CJAQVJ62.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DestroyRef,
  Input,
  SlicePipe,
  computed,
  effect,
  inject,
  input,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
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
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-UL33YUHR.js";

// libs/events/src/lib/event-card.component.ts
var _c0 = () => ["./"];
var _c1 = (a0) => ({ event: a0 });
var _c2 = (a0) => ({ count: a0 });
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c0))("queryParams", \u0275\u0275pureFunction1(29, _c1, ctx_r0.event()?.id));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 25, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(31, _c2, ctx_r0.event()?.attendees?.length || 0)), " ");
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
      (_d) => null,
      ...ngDevMode ? [{ debugName: "edit_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remove_fn = input(
      (_d, _t) => null,
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

// libs/bookings/src/lib/booking-card.component.ts
var _c02 = [[["", "booking-status", ""]]];
var _c12 = ["[booking-status]"];
var _c22 = () => ["./"];
var _c3 = (a0) => ({ booking: a0, event: null });
var _c4 = (a0) => ({ name: a0 });
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
function BookingCardComponent_Conditional_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.TYPE_CANCELLED"), " \xB7 ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_13_Template(rf, ctx) {
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "BOOKINGS.BOOKED_FOR", \u0275\u0275pureFunction1(4, _c4, ctx_r0.booked_for_label())), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_Conditional_21_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_Conditional_24_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const badge_r3 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, badge_r3), " ");
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
    \u0275\u0275conditionalCreate(10, BookingCardComponent_Conditional_1_Conditional_10_Template, 2, 3);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275projection(12);
    \u0275\u0275conditionalCreate(13, BookingCardComponent_Conditional_1_Conditional_13_Template, 6, 6, "div", 11);
    \u0275\u0275conditionalCreate(14, BookingCardComponent_Conditional_1_Conditional_14_Template, 2, 1, "icon", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 13)(16, "div", 14)(17, "icon");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div", 15);
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(21, BookingCardComponent_Conditional_1_Conditional_21_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "icon", 17);
    \u0275\u0275text(23, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(24, BookingCardComponent_Conditional_1_Conditional_24_Template, 6, 3, "div", 18);
    \u0275\u0275repeaterCreate(25, BookingCardComponent_Conditional_1_For_26_Template, 3, 3, "div", 19, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(23, _c22))("queryParams", \u0275\u0275pureFunction1(24, _c3, ctx_r0.booking()?.id));
    \u0275\u0275attribute("cancelled", ctx_r0.is_cancelled() ? "" : null);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", ctx_r0.is_cancelled());
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.typeColors[0])("color", ctx_r0.typeColors[1]);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 21, ctx_r0.typeLabel));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.typeIcon, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.booking()?.title);
    \u0275\u0275advance(2);
    \u0275\u0275property("status", ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_cancelled() ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.period(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.for_current_user() && ctx_r0.booked_for_label() ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking().instance ? 14 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.type_icon().icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource_label(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.location() ? 21 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking()?.checked_in && !ctx_r0.booking()?.is_done ? 24 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.warning_badges());
  }
}
var TYPE_ICONS = /* @__PURE__ */ new Map([
  ["desk", { icon: "desk", tooltip: "RESOURCE.DESK" }],
  ["locker", { icon: "lock", tooltip: "RESOURCE.LOCKER" }],
  ["parking", { icon: "drive_eta", tooltip: "RESOURCE.PARKING" }],
  ["visitor", { icon: "people", tooltip: "RESOURCE.VISITOR" }]
]);
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
      (_i) => null,
      ...ngDevMode ? [{ debugName: "edit_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.remove_fn = input(
      (_i, _s) => null,
      ...ngDevMode ? [{ debugName: "remove_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_fn = input(
      (_i) => null,
      ...ngDevMode ? [{ debugName: "end_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.refresh_fn = input(
      ...ngDevMode ? [void 0, { debugName: "refresh_fn" }] : (
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
    this.is_cancelled = computed(
      () => this.booking()?.status === "cancelled",
      ...ngDevMode ? [{ debugName: "is_cancelled" }] : (
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
        return `${booking.user_name || ""}`.trim() || formatEmailName(`${booking.user_email || ""}`.trim());
      },
      ...ngDevMode ? [{ debugName: "booked_for_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_waitlist = this._settings.signal("parking.show_waitlist", true);
    this._hide_selected_parking_space = this._settings.signal("parking.hide_selected_space", false);
    this.hide_selected_parking_space = computed(
      () => this.booking()?.booking_type === "parking" && this._hide_selected_parking_space(),
      ...ngDevMode ? [{ debugName: "hide_selected_parking_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._parking_status = computed(
      () => {
        const booking = this.booking();
        const is_parking_request = booking?.booking_type === "parking" && booking?.status === "tentative";
        return is_parking_request ? parkingRequestStatus(booking) : "pending";
      },
      ...ngDevMode ? [{ debugName: "_parking_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
    this.status = computed(
      () => {
        const booking = this.booking();
        if (this.is_cancelled())
          return "error";
        if (booking?.is_done)
          return "neutral";
        if (booking?.status === "approved")
          return "success";
        if (booking?.status === "declined")
          return "error";
        if (booking?.status === "tentative") {
          if (this._parking_status() === "waitlist" && this.show_waitlist())
            return "info";
          if (this._parking_status() === "approval_required")
            return "approval";
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
    this.type_icon = computed(
      () => TYPE_ICONS.get(this.type()) ?? { icon: "book", tooltip: "" },
      ...ngDevMode ? [{ debugName: "type_icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.warning_badges = computed(
      () => {
        const booking = this.booking();
        if (!booking || booking.checked_in)
          return [];
        const is_group_event = booking.booking_type === "group-event";
        const badges = [];
        if (!this.for_current_user() && !is_group_event) {
          badges.push("BOOKINGS.ASSOCIATE");
        }
        if (is_group_event)
          badges.push("RESOURCE.EVENT");
        if (this.is_reserved_parking_space()) {
          badges.push(booking.status !== "declined" ? "COMMON.STATUS_RESERVED" : "BOOKINGS.RELEASED");
        }
        return badges;
      },
      ...ngDevMode ? [{ debugName: "warning_badges" }] : (
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
      () => bookingLocationString(this.booking(), this._org, this._hide_selected_parking_space()),
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
        if (this.hide_selected_parking_space()) {
          return i18n("RESOURCE.PARKING");
        }
        if (booking.booking_type !== "visitor") {
          const label = this.raw_description() || booking.asset_name || booking.asset_id || "";
          if (label.startsWith("unallocated")) {
            return booking.booking_type === "parking" ? i18n("RESOURCE.PARKING") : "";
          }
          return label;
        }
        return visitorDisplayNameFor(booking);
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
        end_fn: this.end_fn(),
        refresh_fn: this.refresh_fn()
      };
      this._dialog.open(view_component, { data });
    }, 300);
  }
  static {
    this.\u0275fac = function BookingCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: [1, "booking"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"], end_fn: [1, "end_fn"], refresh_fn: [1, "refresh_fn"] }, ngContentSelectors: _c12, decls: 2, vars: 2, consts: [[1, "mb-2", "flex", "items-center", "px-2"], ["name", "view-booking-details", "queryParamsHandling", "merge", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-booking-details", "queryParamsHandling", "merge", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "bg-base-300", "absolute", "top-2", "right-2", "rounded-full", "p-1", "text-2xl"], ["matTooltipPosition", "left", 3, "matTooltip"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], ["booked-for", "", 1, "text-base-content/70", "flex", "min-w-0", "items-center", "space-x-1", "text-sm"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "max-w-[33%]", "items-center", "px-4"], [1, "mx-2", "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "px-4"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], ["checked-in-badge", "", 1, "bg-success", "text-success-content", "absolute", "top-2", "right-2", "flex", "items-center", "space-x-1", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-warning/50", "absolute", "top-14", "right-2", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text-lg"], [1, "truncate"], [1, "mx-2", "truncate"], [1, "text-sm"]], template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c02);
        \u0275\u0275conditionalCreate(0, BookingCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
        \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_1_Template, 27, 26, "a", 1);
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
                [attr.cancelled]="is_cancelled() ? '' : null"
                [routerLink]="['./']"
                [queryParams]="{
                    booking: booking()?.id,
                    event: null,
                }"
                queryParamsHandling="merge"
                (click)="viewDetails()"
            >
                <div
                    class="border-base-300 bg-base-100 relative w-full rounded-xl border py-4 shadow-sm"
                    [class.opacity-60]="is_cancelled()"
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
                        <status-pill [status]="status()">
                            @if (is_cancelled()) {
                                {{ 'COMMON.TYPE_CANCELLED' | translate }} \xB7
                            }
                            {{ period() }}
                        </status-pill>
                        <ng-content select="[booking-status]" />
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
                            <icon>{{ type_icon().icon }}</icon>
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
                    @for (badge of warning_badges(); track badge) {
                        <div
                            class="bg-warning/50 absolute top-14 right-2 rounded-xl px-2 py-1 text-xs"
                        >
                            {{ badge | translate }}
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
  }], () => [], { booking: [{ type: Input, args: [{ isSignal: true, alias: "booking", required: false }] }], show_day: [{ type: Input, args: [{ isSignal: true, alias: "show_day", required: false }] }], edit_fn: [{ type: Input, args: [{ isSignal: true, alias: "edit_fn", required: false }] }], remove_fn: [{ type: Input, args: [{ isSignal: true, alias: "remove_fn", required: false }] }], end_fn: [{ type: Input, args: [{ isSignal: true, alias: "end_fn", required: false }] }], refresh_fn: [{ type: Input, args: [{ isSignal: true, alias: "refresh_fn", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 177 });
})();

export {
  EventCardComponent,
  BookingCardComponent
};
//# debugId=58bfe369-d852-57dd-91b7-a5c0e75df691
//# sourceMappingURL=chunk-FNQCLWU5.js.map
