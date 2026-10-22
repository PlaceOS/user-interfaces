import {
  LevelPipe
} from "./chunk-GBJOW3S7.js";
import {
  BuildingPipe
} from "./chunk-522KCILF.js";
import {
  UserAvatarComponent
} from "./chunk-D3VYGJ6G.js";
import {
  BookingFormService
} from "./chunk-56C27J3X.js";
import {
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  showBooking
} from "./chunk-IVWYWRG7.js";
import {
  SanitizePipe
} from "./chunk-DVFRHLZI.js";
import {
  TranslatePipe
} from "./chunk-VZSWYXPT.js";
import {
  Building,
  BuildingLevel,
  OrganisationService,
  SettingsService,
  currentUser,
  formatRecurrence,
  fromBookingRecurrence
} from "./chunk-KTADYPHH.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-3ZDLFGP6.js";
import {
  i18n,
  unique
} from "./chunk-LSVIIU5S.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-FFDIHN6G.js";
import {
  RouterLink,
  RouterModule
} from "./chunk-ZTX66HDZ.js";
import {
  CommonModule,
  Component,
  DatePipe,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵsetClassDebugInfo,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵreadContextLet,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-6OEACKVR.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/book/desk-flow-new/desk-flow-success.component.ts
var _c0 = () => ["/"];
var _c1 = (a0) => ({ name: a0 });
var _c2 = (a0, a1, a2, a3, a4, a5) => ({ date: a0, time: a1, size: a2, booked: a3, failed: a4, location: a5 });
var _c3 = (a0, a1) => ({ name: a0, email: a1 });
var _c4 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function NewDeskFlowSuccessComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h2", 2);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ITEM_BOOKED", \u0275\u0275pureFunction1(4, _c1, ctx_r0.last_event()?.asset_name || ctx_r0.last_event()?.asset_id)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.DESK_GROUP_RESULTS_ERROR"), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP_PARTIAL", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_GROUP", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_1_Template, 2, 4)(2, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Conditional_2_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.group_failures().length ? 0 : ctx_r0.last_event()?.all_day ? 1 : 2);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE_ALLDAY", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const details_r2 = \u0275\u0275readContextLet(1);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, "BOOKINGS.DESK_SUCCESS_LONE", details_r2), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Conditional_0_Template, 2, 4)(1, NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Conditional_1_Template, 2, 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.last_event()?.all_day ? 0 : 1);
  }
}
function NewDeskFlowSuccessComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 4);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_4_Conditional_5_Template, 2, 3)(6, NewDeskFlowSuccessComponent_Conditional_4_Conditional_6_Template, 3, 1)(7, NewDeskFlowSuccessComponent_Conditional_4_Conditional_7_Template, 2, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275storeLet(\u0275\u0275pureFunction6(11, _c2, \u0275\u0275pipeBind2(2, 1, ctx_r0.last_event()?.date || 0, "mediumDate"), \u0275\u0275pipeBind2(3, 4, ctx_r0.last_event()?.date || 0, ctx_r0.time_format) + " - " + \u0275\u0275pipeBind2(4, 7, ctx_r0.last_event().date + ctx_r0.last_event().duration * 60 * 1e3, ctx_r0.time_format), ctx_r0.group_size(), ctx_r0.group_bookings().length, ctx_r0.group_failures().length, ctx_r0.location()));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.is_group() && ctx_r0.group_load_error() ? 5 : ctx_r0.is_group() ? 6 : 7);
  }
}
function NewDeskFlowSuccessComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 13);
    \u0275\u0275text(2, "update");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.formatted_recurrence());
  }
}
function NewDeskFlowSuccessComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.DESK_BOOKED_FOR", \u0275\u0275pureFunction1(4, _c1, ctx_r0.booked_for_name())), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 22);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r3.error, " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 23);
    \u0275\u0275text(1, " error ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 24);
    \u0275\u0275text(1, " check_circle ");
    \u0275\u0275elementEnd();
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275element(1, "a-user-avatar", 18);
    \u0275\u0275elementStart(2, "div", 19)(3, "span", 20);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 21);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_7_Template, 2, 1, "span", 22);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_8_Template, 2, 0, "icon", 23)(9, NewDeskFlowSuccessComponent_Conditional_7_For_9_Conditional_9_Template, 2, 0, "icon", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r3 = ctx.$implicit;
    \u0275\u0275classProp("border-error", item_r3.failed);
    \u0275\u0275advance();
    \u0275\u0275property("user", \u0275\u0275pureFunction2(7, _c3, item_r3.name, item_r3.email));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r3.name || item_r3.email);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", item_r3.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r3.failed ? 8 : 9);
  }
}
function NewDeskFlowSuccessComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "h3", 14)(2, "icon", 13);
    \u0275\u0275text(3, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275repeaterCreate(8, NewDeskFlowSuccessComponent_Conditional_7_For_9_Template, 10, 10, "div", 16, _forTrack0);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.DESK_GROUP_BOOKINGS"));
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.group_booking_items());
  }
}
function NewDeskFlowSuccessComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, "BOOKINGS.ASSETS_BOOKED", \u0275\u0275pureFunction1(4, _c4, ctx_r0.last_event()?.extension_data?.assets?.length)), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "BOOKINGS.SUCCESS_WAIT_APPROVED"), " ");
  }
}
function NewDeskFlowSuccessComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 25);
    \u0275\u0275pipe(2, "sanitize");
    \u0275\u0275element(3, "img", 26);
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "a", 27);
    \u0275\u0275pipe(8, "sanitize");
    \u0275\u0275element(9, "img", 28);
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "a", 29);
    \u0275\u0275pipe(14, "safe");
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
var NewDeskFlowSuccessComponent = class _NewDeskFlowSuccessComponent {
  constructor() {
    this._org = inject(OrganisationService);
    this._state = inject(BookingFormService);
    this._settings = inject(SettingsService);
    this._level_pipe = inject(LevelPipe);
    this._building_pipe = inject(BuildingPipe);
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = signal(
      new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
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
    this.group_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "group_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_load_error = signal(
      false,
      ...ngDevMode ? [{ debugName: "group_load_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_failures = signal(
      [],
      ...ngDevMode ? [{ debugName: "group_failures" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_names = signal(
      /* @__PURE__ */ new Map(),
      ...ngDevMode ? [{ debugName: "_desk_names" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.location = computed(
      () => [
        this.building()?.display_name || this.building()?.name,
        this.level()?.display_name || this.level()?.name
      ].filter((_) => _).join(", "),
      ...ngDevMode ? [{ debugName: "location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_event = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_members = computed(
      () => {
        return unique(this.last_event()?.extension_data?.group_members || [], "email");
      },
      ...ngDevMode ? [{ debugName: "group_members" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_group = computed(
      () => this.group_members().length > 1,
      ...ngDevMode ? [{ debugName: "is_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_size = computed(
      () => {
        const members = this.group_members();
        return members?.length || this.group_bookings().length || 1;
      },
      ...ngDevMode ? [{ debugName: "group_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_booking_items = computed(
      () => {
        const desk_names = this._desk_names();
        const items = this.group_bookings().map((booking) => ({
          id: booking.id,
          name: booking.user_name || booking.user_email,
          email: booking.user_email,
          asset_name: desk_names.get(booking.asset_id) || booking.asset_id,
          failed: false
        }));
        const booked_emails = new Set(items.map((_) => _.email));
        const failed = this.group_failures().filter((_) => !booked_emails.has(_.email)).map((failure) => ({
          id: `failed-${failure.email}`,
          name: failure.name || failure.email,
          email: failure.email,
          asset_name: failure.asset_id ? desk_names.get(failure.asset_id) || failure.asset_id : i18n("BOOKINGS.DESK_NOT_ASSIGNED"),
          failed: true,
          error: failure.error
        }));
        return [...items, ...failed];
      },
      ...ngDevMode ? [{ debugName: "group_booking_items" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_for_name = computed(
      () => {
        return this.last_event()?.user_name || this.last_event()?.user_email || "";
      },
      ...ngDevMode ? [{ debugName: "booked_for_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_booked_for = computed(
      () => {
        if (!this.booked_for_name())
          return false;
        const current_email = currentUser()?.email?.toLowerCase() || "";
        const booked_for_email = this.last_event()?.user_email?.toLowerCase() || "";
        if (!booked_for_email || !current_email)
          return false;
        return booked_for_email !== current_email;
      },
      ...ngDevMode ? [{ debugName: "show_booked_for" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatted_recurrence = computed(
      () => {
        const event = this.last_event();
        const recurrence = fromBookingRecurrence(event);
        if (!recurrence.type || recurrence.type == "none")
          return "";
        return formatRecurrence(recurrence);
      },
      ...ngDevMode ? [{ debugName: "formatted_recurrence" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.viewCalendarLinks = () => this._state.openBookingLinkModal();
  }
  get show_links() {
    return this._settings.get("app.desks.show_calendar_links");
  }
  get time_format() {
    return this._settings.time_format;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.last_event.set(this._state.last_success);
    if (this.is_group()) {
      const stored_errors = localStorage.getItem("PLACEOS.last_group_booking_errors");
      this.group_failures.set(stored_errors ? JSON.parse(stored_errors) : []);
    }
    const event = __spreadProps(__spreadValues({}, this.last_event()), {
      location: `${this.location()}, ${this.last_event()?.asset_name || ""}`
    });
    this.outlook_link.set(generateMicrosoftCalendarLink(event));
    this.google_link.set(generateGoogleCalendarLink(event));
    this.ical_link.set(generateCalendarFileLink(event));
    this.level.set(this._level_pipe.transform(event.zones));
    this.building.set(this._building_pipe.transform(event.zones));
    this._group_bookings_timer = setTimeout(async () => {
      if (this.is_group())
        await this._loadGroupBookings();
    }, 100);
  }
  ngOnDestroy() {
    clearTimeout(this._group_bookings_timer);
  }
  async _loadGroupBookings() {
    const stored_ids = localStorage.getItem("PLACEOS.last_group_booking_ids");
    const booking_ids = stored_ids ? JSON.parse(stored_ids) : [];
    const stored_errors = localStorage.getItem("PLACEOS.last_group_booking_errors");
    this.group_failures.set(stored_errors ? JSON.parse(stored_errors) : []);
    if (booking_ids.length <= 1) {
      this.group_loading.set(false);
      return;
    }
    try {
      const [bookings, desks] = await Promise.all([
        Promise.all(booking_ids.map((id) => showBooking(id))),
        this._state.listResources()
      ]);
      this._desk_names.set(new Map(desks.map((desk) => [desk.id, desk.name || desk.id])));
      this.group_bookings.set(bookings.filter((_) => _.booking_type !== "group"));
    } catch (e) {
      this.group_load_error.set(true);
      console.error("Failed to load group bookings", e);
    } finally {
      this.group_loading.set(false);
    }
  }
  static {
    this.\u0275fac = function NewDeskFlowSuccessComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _NewDeskFlowSuccessComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _NewDeskFlowSuccessComponent, selectors: [["desk-flow-success"]], features: [\u0275\u0275ProvidersFeature([LevelPipe, BuildingPipe])], decls: 15, vars: 13, consts: [[1, "bg-base-100", "absolute", "inset-0", "z-50", "flex", "flex-col", "overflow-auto"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8"], [1, "text-center", "text-2xl", "font-medium"], ["src", "assets/icons/success.svg"], [1, "max-w-160", "text-center"], [1, "bg-base-200", "flex", "items-center", "space-x-2", "rounded-lg", "px-4", "py-2"], [1, "text-sm"], [1, "border-base-300", "bg-base-100", "mt-4", "w-full", "max-w-lg", "rounded-lg", "border", "p-4"], ["assets", ""], ["approval", ""], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], [1, "border-base-200", "bg-base-100", "sticky", "bottom-0", "mt-4", "flex", "w-full", "items-center", "justify-center", "border-t", "p-2"], ["btn", "", "name", "desk-confirm-continue", "matRipple", "", 1, "mx-auto", "w-full", "max-w-lg", 3, "routerLink"], [1, "text-xl"], [1, "mb-3", "flex", "items-center", "space-x-2", "font-medium"], [1, "flex", "flex-col", "space-y-2"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2", 3, "border-error"], [1, "bg-base-200/50", "border-base-200", "flex", "items-center", "space-x-3", "rounded", "border", "p-2"], [3, "user"], [1, "flex", "flex-1", "flex-col"], [1, "font-medium"], [1, "text-sm", "opacity-60"], [1, "text-error", "text-xs"], [1, "text-error", "text-2xl"], [1, "text-success", "text-2xl"], ["btn", "", "matRipple", "", "name", "desk-outlook-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-google-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/gcal.svg", 1, "w-6"], ["btn", "", "matRipple", "", "name", "desk-ical-link", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"]], template: function NewDeskFlowSuccessComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "main", 1);
        \u0275\u0275conditionalCreate(2, NewDeskFlowSuccessComponent_Conditional_2_Template, 3, 6, "h2", 2);
        \u0275\u0275element(3, "img", 3);
        \u0275\u0275conditionalCreate(4, NewDeskFlowSuccessComponent_Conditional_4_Template, 8, 18, "p", 4);
        \u0275\u0275conditionalCreate(5, NewDeskFlowSuccessComponent_Conditional_5_Template, 5, 1, "div", 5);
        \u0275\u0275conditionalCreate(6, NewDeskFlowSuccessComponent_Conditional_6_Template, 3, 6, "p", 6);
        \u0275\u0275conditionalCreate(7, NewDeskFlowSuccessComponent_Conditional_7_Template, 10, 3, "div", 7);
        \u0275\u0275conditionalCreate(8, NewDeskFlowSuccessComponent_Conditional_8_Template, 3, 6, "p", 8);
        \u0275\u0275conditionalCreate(9, NewDeskFlowSuccessComponent_Conditional_9_Template, 3, 3, "p", 9);
        \u0275\u0275conditionalCreate(10, NewDeskFlowSuccessComponent_Conditional_10_Template, 20, 21, "div", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "footer", 11)(12, "a", 12);
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_group() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.last_event() && (!ctx.is_group() || !ctx.group_loading()) ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.recurrence_type && ctx.last_event()?.recurrence_type !== "none" ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_booked_for() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_group() && ctx.group_booking_items().length > 0 ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.extension_data?.assets?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.last_event()?.status === "tentative" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_links ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 10, "APP.WORKPLACE.BOOKING_FINISHED"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      RouterModule,
      RouterLink,
      UserAvatarComponent,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      SafePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NewDeskFlowSuccessComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-success", template: `
        <div
            class="bg-base-100 absolute inset-0 z-50 flex flex-col overflow-auto"
        >
            <main
                class="flex flex-1 flex-col items-center justify-center space-y-2 p-8"
            >
                @if (!is_group()) {
                    <h2 class="text-center text-2xl font-medium">
                        {{
                            'BOOKINGS.ITEM_BOOKED'
                                | translate
                                    : {
                                          name:
                                              last_event()?.asset_name ||
                                              last_event()?.asset_id,
                                      }
                        }}
                    </h2>
                }
                <img src="assets/icons/success.svg" />
                @if (last_event() && (!is_group() || !group_loading())) {
                    <p class="max-w-160 text-center">
                        @let details =
                            {
                                date:
                                    last_event()?.date || 0
                                    | date: 'mediumDate',
                                time:
                                    (last_event()?.date || 0
                                        | date: time_format) +
                                    ' - ' +
                                    (last_event().date +
                                        last_event().duration * 60 * 1000
                                        | date: time_format),
                                size: group_size(),
                                booked: group_bookings().length,
                                failed: group_failures().length,
                                location: location(),
                            };
                        @if (is_group() && group_load_error()) {
                            {{
                                'BOOKINGS.DESK_GROUP_RESULTS_ERROR' | translate
                            }}
                        } @else if (is_group()) {
                            @if (group_failures().length) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP_PARTIAL'
                                        | translate: details
                                }}
                            } @else if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_GROUP'
                                        | translate: details
                                }}
                            }
                        } @else {
                            @if (last_event()?.all_day) {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE_ALLDAY'
                                        | translate: details
                                }}
                            } @else {
                                {{
                                    'BOOKINGS.DESK_SUCCESS_LONE'
                                        | translate: details
                                }}
                            }
                        }
                    </p>
                }
                @if (
                    last_event()?.recurrence_type &&
                    last_event()?.recurrence_type !== 'none'
                ) {
                    <div
                        class="bg-base-200 flex items-center space-x-2 rounded-lg px-4 py-2"
                    >
                        <icon class="text-xl">update</icon>
                        <div class="text-sm">{{ formatted_recurrence() }}</div>
                    </div>
                }
                @if (show_booked_for()) {
                    <p class="text-sm">
                        {{
                            'BOOKINGS.DESK_BOOKED_FOR'
                                | translate: { name: booked_for_name() }
                        }}
                    </p>
                }
                @if (is_group() && group_booking_items().length > 0) {
                    <div
                        class="border-base-300 bg-base-100 mt-4 w-full max-w-lg rounded-lg border p-4"
                    >
                        <h3
                            class="mb-3 flex items-center space-x-2 font-medium"
                        >
                            <icon class="text-xl">group</icon>
                            <span>{{
                                'BOOKINGS.DESK_GROUP_BOOKINGS' | translate
                            }}</span>
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                item of group_booking_items();
                                track item.id
                            ) {
                                <div
                                    class="bg-base-200/50 border-base-200 flex items-center space-x-3 rounded border p-2"
                                    [class.border-error]="item.failed"
                                >
                                    <a-user-avatar
                                        [user]="
                                            $any({
                                                name: item.name,
                                                email: item.email,
                                            })
                                        "
                                    />
                                    <div class="flex flex-1 flex-col">
                                        <span class="font-medium">{{
                                            item.name || item.email
                                        }}</span>
                                        <span class="text-sm opacity-60">
                                            {{ item.asset_name }}
                                        </span>
                                        @if (item.failed) {
                                            <span class="text-error text-xs">
                                                {{ item.error }}
                                            </span>
                                        }
                                    </div>
                                    @if (item.failed) {
                                        <icon class="text-error text-2xl">
                                            error
                                        </icon>
                                    } @else {
                                        <icon class="text-success text-2xl">
                                            check_circle
                                        </icon>
                                    }
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (last_event()?.extension_data?.assets?.length) {
                    <p assets>
                        {{
                            'BOOKINGS.ASSETS_BOOKED'
                                | translate
                                    : {
                                          count: last_event()?.extension_data
                                              ?.assets?.length,
                                      }
                        }}
                    </p>
                }
                <!-- A booking that is not approved yet has the tentative status -->
                @if (last_event()?.status === 'tentative') {
                    <p approval>
                        {{ 'BOOKINGS.SUCCESS_WAIT_APPROVED' | translate }}
                    </p>
                }
                @if (show_links) {
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
                            <img src="assets/icons/outlook.svg" class="w-6" />
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
                            <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
                        </a>
                    </div>
                }
            </main>
            <footer
                class="border-base-200 bg-base-100 sticky bottom-0 mt-4 flex w-full items-center justify-center border-t p-2"
            >
                <a
                    btn
                    name="desk-confirm-continue"
                    matRipple
                    class="mx-auto w-full max-w-lg"
                    [routerLink]="['/']"
                >
                    {{ 'APP.WORKPLACE.BOOKING_FINISHED' | translate }}
                </a>
            </footer>
        </div>
    `, providers: [LevelPipe, BuildingPipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      RouterModule,
      SanitizePipe,
      SafePipe,
      UserAvatarComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(NewDeskFlowSuccessComponent, { className: "NewDeskFlowSuccessComponent", filePath: "apps/workplace/src/app/book/desk-flow-new/desk-flow-success.component.ts", lineNumber: 299 });
})();

export {
  NewDeskFlowSuccessComponent
};
//# debugId=df487fe5-154f-570f-81b4-310e42a2a534
//# sourceMappingURL=chunk-T225X67C.js.map
