import {
  BindingDirective,
  BookingDetailsModalComponent,
  EventDetailsModalComponent,
  canEditBooking
} from "./chunk-AHTTWUHQ.js";
import {
  GroupEventDetailsModalComponent,
  MapLocateModalComponent
} from "./chunk-URAVHZJ5.js";
import {
  AddColleaguesModalComponent,
  TeamScheduleService
} from "./chunk-3LKFJCN3.js";
import {
  LandingStateService
} from "./chunk-A452ZNQ2.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-ZNINYCY7.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent
} from "./chunk-SQ2X3YT7.js";
import "./chunk-XCUPWMUH.js";
import "./chunk-3GYVJIXI.js";
import "./chunk-YSWG4FHE.js";
import {
  AutoAssignedDeskModalComponent
} from "./chunk-FNIVA7ZC.js";
import "./chunk-MBRTQ2ZR.js";
import {
  BuildingPipe
} from "./chunk-ICPLDUUG.js";
import "./chunk-QCHTDVX3.js";
import {
  toObservable,
  toSignal
} from "./chunk-VCKYILU3.js";
import {
  LevelPipe
} from "./chunk-5BN6VB2Y.js";
import {
  ExploreSpacesService
} from "./chunk-HZA7CRQQ.js";
import "./chunk-ZYDA73FA.js";
import "./chunk-JILIKYLL.js";
import "./chunk-RGX6GM7B.js";
import "./chunk-5L5XRPMA.js";
import "./chunk-RN7OCLEN.js";
import "./chunk-55SKRL7D.js";
import "./chunk-ZSZLWVJ2.js";
import "./chunk-UX57GCXD.js";
import {
  AuthenticatedImageDirective,
  MatCheckbox,
  MatCheckboxModule,
  UserAvatarComponent
} from "./chunk-PH5DPZII.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-C62XJZOQ.js";
import "./chunk-Q6D73ACL.js";
import {
  EventFormService
} from "./chunk-UIZ4VTTC.js";
import "./chunk-GSFXYOVK.js";
import {
  BookingFormService
} from "./chunk-KHQIHG3M.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  bookedResourceList,
  checkinEventGuest,
  loadLockerResources,
  openConfirmModal,
  queryBookings,
  setBookingCheckedIn
} from "./chunk-ILXQ74FK.js";
import {
  MatDialog
} from "./chunk-6RESVZPV.js";
import "./chunk-OLNALHEI.js";
import "./chunk-MPXVFQMO.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-3MHAGFSK.js";
import "./chunk-F2BAFCPK.js";
import "./chunk-CJOPIBOG.js";
import "./chunk-UGXCNYLO.js";
import {
  SpacePipe
} from "./chunk-IO6HMBKB.js";
import "./chunk-6QPTEWNF.js";
import "./chunk-K764B4V2.js";
import "./chunk-TMPWPIRC.js";
import {
  TranslatePipe
} from "./chunk-LX74DR62.js";
import {
  Booking,
  CalendarEvent,
  OrganisationService,
  SETTING_KEYS,
  SettingsService,
  addWeeks,
  currentUser,
  endOfWeek,
  getUnixTime,
  isBefore,
  rulesForResource,
  settingSignal,
  userSignal
} from "./chunk-6TCBJM3R.js";
import {
  AsyncHandler,
  IconComponent
} from "./chunk-LKUFAFOQ.js";
import {
  Gp,
  ac,
  addDays,
  addMinutes,
  differenceInMinutes,
  endOfDay,
  format,
  i18n,
  isSameDay,
  notifyError,
  notifySuccess,
  startOfDay,
  startOfWeek
} from "./chunk-CVWHMO6R.js";
import "./chunk-HNLSWNR2.js";
import "./chunk-MMACJISK.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-B6DAJTHO.js";
import "./chunk-KI7LYHXH.js";
import "./chunk-TVFY52KD.js";
import {
  Router,
  RouterLink,
  RouterModule
} from "./chunk-4ZWAZXKT.js";
import {
  CommonModule,
  Component,
  computed,
  debounce,
  distinctUntilChanged,
  effect,
  inject,
  resource,
  setClassMetadata,
  signal,
  timer,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
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
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-U7ZY5HJM.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-GOMI4DH3.js";

// apps/workplace/src/app/landing-new/landing-features.ts
function landingFeatures() {
  const feature_list = settingSignal("features", []);
  const feature_groups = settingSignal("feature_groups", {});
  const user = userSignal();
  return computed(() => {
    const groups = user()?.groups || [];
    const limits = feature_groups() || {};
    return (feature_list() || []).filter((name) => !limits[name]?.length || limits[name].some((_) => groups.includes(_)));
  });
}
function availableNowTabs(features, hide_spaces, hide_rooms) {
  const tabs = [];
  if (!hide_spaces && features.includes("desks"))
    tabs.push("desks");
  if (!hide_rooms && features.includes("spaces"))
    tabs.push("rooms");
  if (!hide_spaces && features.includes("lockers"))
    tabs.push("lockers");
  return tabs;
}
var QUICK_LINKS = [
  {
    feature: "desks",
    route: ["/book", "desk"],
    icon: "desk",
    name: "APP.WORKPLACE.QUICK_LINK_DESKS"
  },
  {
    feature: "spaces",
    route: ["/book", "meeting"],
    icon: "meeting_room",
    name: "APP.WORKPLACE.QUICK_LINK_ROOMS"
  },
  {
    feature: "parking",
    route: ["/book", "parking"],
    icon: "directions_car",
    name: "APP.WORKPLACE.QUICK_LINK_PARKING"
  },
  {
    feature: "lockers",
    route: ["/book", "locker"],
    icon: "lock",
    name: "APP.WORKPLACE.QUICK_LINK_LOCKERS"
  }
];
function hasQuickActions(features, show_quick_book, show_quick_links) {
  return show_quick_book && features.includes("desks") || show_quick_links && QUICK_LINKS.some((link) => features.includes(link.feature));
}

// apps/workplace/src/app/landing-new/landing-available-now.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ zone: a0 });
var _c2 = (a0) => ({ count: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function LandingAvailableNowComponent_Conditional_5_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function LandingAvailableNowComponent_Conditional_5_For_2_Template_button_click_0_listener() {
      const tab_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.selected_tab.set(tab_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tab_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clear", ctx_r2.active_tab() !== tab_r2);
    \u0275\u0275attribute("name", "tab-" + tab_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r2.tab_details[tab_r2].name), " ");
  }
}
function LandingAvailableNowComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275repeaterCreate(1, LandingAvailableNowComponent_Conditional_5_For_2_Template, 3, 6, "button", 6, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.tabs());
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "mat-spinner", 9);
    \u0275\u0275elementStart(2, "div", 10);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext();
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 32);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, ctx_r2.tab_details[tab_r4].loading), " ");
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const bld_r5 = \u0275\u0275readContextLet(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r5.display_name || bld_r5.name, " ");
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 13);
    \u0275\u0275text(1, "chevron_right");
    \u0275\u0275elementEnd();
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "icon", 13);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 14);
    \u0275\u0275declareLet(4);
    \u0275\u0275pipe(5, "building");
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Conditional_8_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 16);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(12, LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Conditional_12_Template, 2, 0, "icon", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r6 = ctx.$implicit;
    const tab_r4 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", ctx_r2.has_explore() ? \u0275\u0275pureFunction0(13, _c0) : null)("queryParams", \u0275\u0275pureFunction1(14, _c1, lvl_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.tab_details[tab_r4].icon);
    \u0275\u0275advance(2);
    const bld_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(5, 7, lvl_r6.parent_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", lvl_r6.display_name || lvl_r6.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(bld_r7 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 10, "APP.WORKPLACE.AVAILABLE_NOW_FREE", \u0275\u0275pureFunction1(16, _c2, ctx_r2.free_by_level()[lvl_r6.id])), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.has_explore() ? 12 : -1);
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_2_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const tab_r4 = \u0275\u0275nextContext(2);
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.tab_details[tab_r4].icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 2, ctx_r2.tab_details[tab_r4].empty), " ");
  }
}
function LandingAvailableNowComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingAvailableNowComponent_Conditional_6_Conditional_2_For_1_Template, 13, 18, "a", 11, _forTrack0, false, LandingAvailableNowComponent_Conditional_6_Conditional_2_ForEmpty_2_Template, 6, 4, "div", 12);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2.filtered_levels());
  }
}
function LandingAvailableNowComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275conditionalCreate(1, LandingAvailableNowComponent_Conditional_6_Conditional_1_Template, 5, 4, "div", 8)(2, LandingAvailableNowComponent_Conditional_6_Conditional_2_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.loading() ? 1 : 2);
  }
}
function LandingAvailableNowComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c0));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 2, "APP.WORKPLACE.AVAILABLE_NOW_VIEW_MAP"));
  }
}
var AVAILABLE_WINDOW = 60;
var TAB_DETAILS = {
  desks: {
    name: "RESOURCE.DESKS",
    icon: "desk",
    empty: "APP.WORKPLACE.AVAILABLE_NOW_DESKS_EMPTY",
    loading: "BOOKINGS.DESKS_LOADING",
    type: "desk"
  },
  rooms: {
    name: "RESOURCE.ROOMS",
    icon: "meeting_room",
    empty: "APP.WORKPLACE.AVAILABLE_LIST_ROOMS_EMPTY",
    loading: ""
  },
  lockers: {
    name: "RESOURCE.LOCKERS",
    icon: "lock",
    empty: "APP.WORKPLACE.AVAILABLE_NOW_LOCKERS_EMPTY",
    loading: "BOOKINGS.LOCKERS_LOADING",
    type: "locker"
  }
};
var LandingAvailableNowComponent = class _LandingAvailableNowComponent {
  constructor() {
    this._state = inject(LandingStateService);
    this._booking_form = inject(BookingFormService);
    this._org = inject(OrganisationService);
    this.tab_details = TAB_DETAILS;
    this.features = landingFeatures();
    this.hide_spaces = settingSignal("hide_landing_spaces");
    this.hide_rooms = settingSignal("hide_landing_rooms");
    this.has_explore = computed(
      () => this.features().includes("explore"),
      ...ngDevMode ? [{ debugName: "has_explore" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.tabs = computed(
      () => availableNowTabs(this.features(), !!this.hide_spaces(), !!this.hide_rooms()),
      ...ngDevMode ? [{ debugName: "tabs" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_tab = signal(
      null,
      ...ngDevMode ? [{ debugName: "selected_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_tab = computed(
      () => {
        const tabs = this.tabs();
        const selected = this.selected_tab();
        return tabs.includes(selected) ? selected : tabs[0] ?? null;
      },
      ...ngDevMode ? [{ debugName: "active_tab" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = this._state.level_occupancy;
    this.free_spaces = this._state.free_space_list;
    this._available = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const type = this.tab_details[this.active_tab()]?.type;
        const building_id = this._org.active_building()?.id;
        return type && building_id ? { type, building_id } : void 0;
      },
      loader: ({ params: { type, building_id } }) => this._loadAvailable(type, building_id).catch(() => [])
    }));
    this.available_resources = computed(
      () => this._available.value() ?? [],
      ...ngDevMode ? [{ debugName: "available_resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._available.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.free_by_level = computed(
      () => {
        const zone_lists = this.active_tab() === "rooms" ? this.free_spaces().map((space) => space.zones) : this.available_resources().map((item) => [item.zone?.id]);
        const mapping = {};
        for (const zones of zone_lists) {
          const lvl = this._org.levelWithID(zones);
          if (lvl)
            mapping[lvl.id] = (mapping[lvl.id] || 0) + 1;
        }
        return mapping;
      },
      ...ngDevMode ? [{ debugName: "free_by_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_levels = computed(
      () => {
        const counts = this.free_by_level();
        return this.levels().filter((lvl) => counts[lvl.id] > 0);
      },
      ...ngDevMode ? [{ debugName: "filtered_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * List the desks or lockers of the building that are free for
   * `AVAILABLE_WINDOW` minutes from now.
   * Requests: the resource list, then the booking rules and the booked
   * resources of the building. The count does not grow with the number of
   * desks or levels.
   */
  async _loadAvailable(type, building_id) {
    const date = Date.now();
    const resources = type === "desk" ? await this._booking_form.loadResourceList("desks") : await loadLockerResources(this._org, building_id);
    if (!resources.length)
      return [];
    const [rules, booked_ids] = await Promise.all([
      ac(building_id, `${type}_booking_rules`).then((metadata) => metadata.details instanceof Array ? metadata.details : []).catch(() => []),
      bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, AVAILABLE_WINDOW)),
        type,
        zones: building_id
      }, resources.length)
    ]);
    const host = currentUser();
    const groups = host?.groups || [];
    return resources.filter((asset) => asset.bookable !== false && !booked_ids.includes(asset.id) && (!asset.groups?.length || asset.groups.some((group) => groups.includes(group))) && !rulesForResource({ date, duration: AVAILABLE_WINDOW, resource: asset, host }, rules).hidden);
  }
  static {
    this.\u0275fac = function LandingAvailableNowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingAvailableNowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailableNowComponent, selectors: [["landing-available-now"]], decls: 8, vars: 6, consts: [[1, "border-base-300", "bg-base-100", "space-y-2", "rounded-lg", "border", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "px-2", "text-lg", "font-medium"], [1, "bg-base-200", "flex", "w-full", "items-center", "space-x-1", "rounded", "p-1"], [1, "flex", "flex-col", "space-y-2", "pt-2"], ["btn", "", "matRipple", "", "name", "view-map", 1, "clear", "w-full", "underline", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "flex-1", 3, "clear"], ["btn", "", "matRipple", "", 1, "hover:bg-base-300", "flex-1", 3, "click"], [1, "bg-base-200", "flex", "min-h-40", "flex-col", "items-center", "justify-center", "rounded-xl", "py-12", "text-center"], [3, "diameter"], [1, "mt-3", "text-sm", "opacity-60"], ["btn", "", "matRipple", "", "name", "available-level", 1, "inverse", "h-14", "w-full", "space-x-4", "text-left", 3, "routerLink", "queryParams"], ["empty", "", 1, "bg-base-200", "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "py-12", "text-center"], [1, "text-xl"], [1, "flex-1"], [1, "text-base-content", "text-xs", "opacity-50"], ["count", "", 1, "bg-secondary", "text-secondary-content", "rounded", "px-2", "py-1", "text-xs"], [1, "text-4xl", "opacity-30"], [1, "mt-2", "text-sm", "opacity-60"]], template: function LandingAvailableNowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(5, LandingAvailableNowComponent_Conditional_5_Template, 3, 0, "div", 3);
        \u0275\u0275conditionalCreate(6, LandingAvailableNowComponent_Conditional_6_Template, 3, 1, "div", 4);
        \u0275\u0275conditionalCreate(7, LandingAvailableNowComponent_Conditional_7_Template, 3, 5, "a", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_2_0;
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.WORKPLACE.AVAILABLE_LIST_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.tabs().length > 0 ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_2_0 = ctx.active_tab()) ? 6 : -1, tmp_2_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_explore() ? 7 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      RouterLink,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      BuildingPipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingAvailableNowComponent, [{
    type: Component,
    args: [{
      selector: "landing-available-now",
      template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">
                    {{ 'APP.WORKPLACE.AVAILABLE_LIST_HEADER' | translate }}
                </h3>
            </div>
            @if (tabs().length > 0) {
                <div
                    class="bg-base-200 flex w-full items-center space-x-1 rounded p-1"
                >
                    @for (tab of tabs(); track tab) {
                        <button
                            btn
                            matRipple
                            [attr.name]="'tab-' + tab"
                            class="hover:bg-base-300 flex-1"
                            [class.clear]="active_tab() !== tab"
                            (click)="selected_tab.set(tab)"
                        >
                            {{ tab_details[tab].name | translate }}
                        </button>
                    }
                </div>
            }
            @if (active_tab(); as tab) {
                <div class="flex flex-col space-y-2 pt-2">
                    @if (loading()) {
                        <div
                            class="bg-base-200 flex min-h-40 flex-col items-center justify-center rounded-xl py-12 text-center"
                        >
                            <mat-spinner [diameter]="32"></mat-spinner>
                            <div class="mt-3 text-sm opacity-60">
                                {{ tab_details[tab].loading | translate }}
                            </div>
                        </div>
                    } @else {
                        @for (lvl of filtered_levels(); track lvl.id) {
                            <a
                                btn
                                matRipple
                                name="available-level"
                                [routerLink]="has_explore() ? ['/explore'] : null"
                                [queryParams]="{ zone: lvl.id }"
                                class="inverse h-14 w-full space-x-4 text-left"
                            >
                                <icon class="text-xl">{{
                                    tab_details[tab].icon
                                }}</icon>
                                <div class="flex-1">
                                    @let bld = lvl.parent_id | building;
                                    <div>
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                    @if (bld) {
                                        <div
                                            class="text-base-content text-xs opacity-50"
                                        >
                                            {{ bld.display_name || bld.name }}
                                        </div>
                                    }
                                </div>
                                <div
                                    count
                                    class="bg-secondary text-secondary-content rounded px-2 py-1 text-xs"
                                >
                                    {{
                                        'APP.WORKPLACE.AVAILABLE_NOW_FREE'
                                            | translate
                                                : {
                                                      count: free_by_level()[
                                                          lvl.id
                                                      ],
                                                  }
                                    }}
                                </div>
                                @if (has_explore()) {
                                    <icon class="text-xl">chevron_right</icon>
                                }
                            </a>
                        } @empty {
                            <div
                                empty
                                class="bg-base-200 flex flex-col items-center justify-center rounded-xl py-12 text-center"
                            >
                                <icon class="text-4xl opacity-30">{{
                                    tab_details[tab].icon
                                }}</icon>
                                <div class="mt-2 text-sm opacity-60">
                                    {{ tab_details[tab].empty | translate }}
                                </div>
                            </div>
                        }
                    }
                </div>
            }
            @if (has_explore()) {
                <a
                    btn
                    matRipple
                    name="view-map"
                    class="clear w-full underline"
                    [routerLink]="['/explore']"
                    >{{ 'APP.WORKPLACE.AVAILABLE_NOW_VIEW_MAP' | translate }}</a
                >
            }
        </div>
    `,
      imports: [
        MatRippleModule,
        IconComponent,
        RouterLink,
        BuildingPipe,
        TranslatePipe,
        MatProgressSpinnerModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailableNowComponent, { className: "LandingAvailableNowComponent", filePath: "apps/workplace/src/app/landing-new/landing-available-now.component.ts", lineNumber: 195 });
})();

// apps/workplace/src/app/landing-new/landing-colleagues-new.component.ts
var _c02 = (a0) => ({ count: a0 });
function LandingColleaguesNewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(3, " \u2022 ");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind2(2, 1, "COMMON.SELECTED_COUNT", \u0275\u0275pureFunction1(4, _c02, ctx_r0.selected_users().length)));
  }
}
function LandingColleaguesNewComponent_Conditional_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 12);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_11_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookDeskWithSelected());
    });
    \u0275\u0275elementStart(1, "icon", 13);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.WORKPLACE.COLLEAGUES_BOOK_DESK"));
  }
}
function LandingColleaguesNewComponent_Conditional_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 14);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_11_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookMeetingWithSelected());
    });
    \u0275\u0275elementStart(1, "icon", 13);
    \u0275\u0275text(2, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "APP.WORKPLACE.COLLEAGUES_BOOK_ROOM"));
  }
}
function LandingColleaguesNewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275conditionalCreate(1, LandingColleaguesNewComponent_Conditional_11_Conditional_1_Template, 6, 3, "button", 10);
    \u0275\u0275conditionalCreate(2, LandingColleaguesNewComponent_Conditional_11_Conditional_2_Template, 6, 3, "button", 11);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_book_group_desk() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.features().includes("spaces") ? 2 : -1);
  }
}
function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookMeeting(user_r5));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "icon", 28);
    \u0275\u0275text(3, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "APP.WORKPLACE.COLLEAGUES_BOOK_MEETING"), " ");
  }
}
function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleFavorite(user_r5));
    });
    \u0275\u0275elementStart(1, "div", 25)(2, "icon", 28);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(7, "button", 24);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_14_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const user_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTeamMember(user_r5));
    });
    \u0275\u0275elementStart(8, "div", 25)(9, "icon", 28);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.isFavorite(user_r5) ? "star" : "star_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 4, ctx_r0.isFavorite(user_r5) ? "APP.WORKPLACE.COLLEAGUES_REMOVE_FAVORITE" : "APP.WORKPLACE.COLLEAGUES_ADD_FAVORITE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.isTeamMember(user_r5) ? "group_remove" : "group_add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 6, ctx_r0.isTeamMember(user_r5) ? "APP.WORKPLACE.COLLEAGUES_REMOVE_TEAM" : "APP.WORKPLACE.COLLEAGUES_ADD_TEAM"), " ");
  }
}
function LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 27);
  }
}
function LandingColleaguesNewComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "mat-checkbox", 17);
    \u0275\u0275listener("change", function LandingColleaguesNewComponent_Conditional_12_For_2_Template_mat_checkbox_change_1_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelection(user_r5));
    })("click", function LandingColleaguesNewComponent_Conditional_12_For_2_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "a-user-avatar", 18);
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 21);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 22)(9, "icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", null, 0);
    \u0275\u0275conditionalCreate(13, LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_13_Template, 7, 3, "button", 23);
    \u0275\u0275conditionalCreate(14, LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_14_Template, 14, 8);
    \u0275\u0275elementStart(15, "button", 24);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_For_2_Template_button_click_15_listener() {
      const user_r5 = \u0275\u0275restoreView(_r4).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeColleague(user_r5));
    });
    \u0275\u0275elementStart(16, "div", 25)(17, "icon", 26);
    \u0275\u0275text(18, "person_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(19, "div");
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(22, LandingColleaguesNewComponent_Conditional_12_For_2_Conditional_22_Template, 1, 0, "div", 27);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r5 = ctx.$implicit;
    const menu_r8 = \u0275\u0275reference(12);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-secondary", ctx_r0.isSelected(user_r5));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isSelected(user_r5));
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r5.name);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + user_r5.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r5.email);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r8);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r0.features().includes("spaces") ? 13 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.has_team_schedule() ? 14 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 12, "APP.WORKPLACE.COLLEAGUES_REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isSelected(user_r5) ? 22 : -1);
  }
}
function LandingColleaguesNewComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, LandingColleaguesNewComponent_Conditional_12_For_2_Template, 23, 14, "div", 15, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contact_list_r9 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275repeater(contact_list_r9);
  }
}
function LandingColleaguesNewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.COLLEAGUES_EMPTY"), " ");
  }
}
var LandingColleaguesNewComponent = class _LandingColleaguesNewComponent {
  constructor() {
    this._state = inject(LandingStateService);
    this._dialog = inject(MatDialog);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._team_schedule = inject(TeamScheduleService);
    this.contacts = this._state.contacts;
    this.features = landingFeatures();
    this.has_team_schedule = computed(
      () => this.features().includes("team-schedule"),
      ...ngDevMode ? [{ debugName: "has_team_schedule" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_users = signal(
      [],
      ...ngDevMode ? [{ debugName: "selected_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._allow_desk_groups = settingSignal("desks.allow_groups", false);
    this.can_book_group_desk = computed(
      () => this.features().includes("desks") && this._allow_desk_groups(),
      ...ngDevMode ? [{ debugName: "can_book_group_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  openAddColleaguesModal() {
    const dialog_ref = this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
    dialog_ref.afterClosed().subscribe((added) => {
      if (added)
        this._team_schedule.refresh();
    });
  }
  isSelected(user) {
    return this.selected_users().some((u) => u.email === user.email);
  }
  toggleSelection(user) {
    const current = this.selected_users();
    if (this.isSelected(user)) {
      this.selected_users.set(current.filter((u) => u.email !== user.email));
    } else {
      this.selected_users.set([...current, user]);
    }
  }
  clearSelection() {
    this.selected_users.set([]);
  }
  async bookMeeting(user) {
    this._router.navigate(["/book", "meeting", "form"]);
    const event = new CalendarEvent({
      attendees: [user]
    });
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  async bookMeetingWithSelected() {
    const attendees = this.selected_users();
    if (attendees.length === 0)
      return;
    this._router.navigate(["/book", "meeting", "form"]);
    const event = new CalendarEvent({
      attendees
    });
    setTimeout(() => {
      this._event_form.newForm(event);
      this.clearSelection();
    }, 300);
  }
  async bookDeskWithSelected() {
    const members = this.selected_users();
    if (members.length === 0)
      return;
    this._router.navigate(["/book", "desk", "form"]);
    setTimeout(() => {
      this._booking_form.newForm("desk", new Booking({ booking_type: "desk" }));
      this._booking_form.setOptions({ group: true, members });
      this.clearSelection();
    }, 300);
  }
  async removeColleague(user) {
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.COLLEAGUES_REMOVE_TITLE"),
      content: i18n("APP.WORKPLACE.COLLEAGUES_REMOVE_MSG", {
        name: user.name
      }),
      icon: { content: "person_remove" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.COLLEAGUES_REMOVE_LOADING"));
    await this._state.removeContact(user);
    this._team_schedule.refresh();
    if (this.isSelected(user)) {
      this.selected_users.set(this.selected_users().filter((u) => u.email !== user.email));
    }
    notifySuccess(i18n("APP.WORKPLACE.COLLEAGUES_REMOVE_SUCCESS"));
    this._dialog.closeAll();
  }
  isFavorite(user) {
    return this._team_schedule.isFavorite(user);
  }
  isTeamMember(user) {
    return this._team_schedule.isTeamMember(user);
  }
  toggleFavorite(user) {
    this._team_schedule.toggleFavoriteByUser(user);
  }
  toggleTeamMember(user) {
    this._team_schedule.toggleTeamMemberByUser(user);
  }
  static {
    this.\u0275fac = function LandingColleaguesNewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingColleaguesNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesNewComponent, selectors: [["landing-colleagues-new"]], decls: 20, vars: 17, consts: [["menu", "matMenu"], [1, "border-base-300", "bg-base-100", "rounded-lg", "border", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], [1, "rounded", "px-2", "py-1", "text-xs", "opacity-60"], [1, "mt-2", "flex", "space-x-2"], [1, "mt-2", "flex", "w-full", "flex-col", "space-y-2"], [1, "bg-base-200", "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-xl", "p-8"], ["btn", "", "matRipple", "", 1, "mt-4", "w-full", 3, "click"], [1, "text-xl"], ["btn", "", "matRipple", "", "name", "book-desk-selected", 1, "flex-1", "space-x-2", "text-sm"], ["btn", "", "matRipple", "", "name", "book-room-selected", 1, "flex-1", "space-x-2", "text-sm"], ["btn", "", "matRipple", "", "name", "book-desk-selected", 1, "flex-1", "space-x-2", "text-sm", 3, "click"], [1, "text-lg"], ["btn", "", "matRipple", "", "name", "book-room-selected", 1, "flex-1", "space-x-2", "text-sm", 3, "click"], [1, "border-base-300", "relative", "flex", "items-center", "space-x-2", "overflow-hidden", "rounded", "border", "p-2", 3, "border-secondary"], [1, "border-base-300", "relative", "flex", "items-center", "space-x-2", "overflow-hidden", "rounded", "border", "p-2"], [1, "-mx-1", 3, "change", "click", "checked"], [3, "user"], [1, "flex", "w-16", "flex-1", "flex-col", "leading-tight"], [1, "truncate"], ["target", "_blank", "rel", "noopener noreferrer", 1, "truncate", "text-xs", "underline", "opacity-60", 3, "href"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-error", "text-2xl"], [1, "bg-secondary", "absolute", "inset-0", "!m-0", "opacity-10"], [1, "text-2xl"], ["src", "assets/icons/no-contacts.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingColleaguesNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275declareLet(1);
        \u0275\u0275elementStart(2, "div", 2)(3, "h3", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 4);
        \u0275\u0275conditionalCreate(7, LandingColleaguesNewComponent_Conditional_7_Template, 4, 6);
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(11, LandingColleaguesNewComponent_Conditional_11_Template, 3, 2, "div", 5);
        \u0275\u0275conditionalCreate(12, LandingColleaguesNewComponent_Conditional_12_Template, 3, 0, "div", 6)(13, LandingColleaguesNewComponent_Conditional_13_Template, 5, 3, "div", 7);
        \u0275\u0275elementStart(14, "button", 8);
        \u0275\u0275listener("click", function LandingColleaguesNewComponent_Template_button_click_14_listener() {
          return ctx.openAddColleaguesModal();
        });
        \u0275\u0275elementStart(15, "icon", 9);
        \u0275\u0275text(16, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(17, "div");
        \u0275\u0275text(18);
        \u0275\u0275pipe(19, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        const contact_list_r10 = \u0275\u0275storeLet(ctx.contacts());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.WORKPLACE.COLLEAGUES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_users().length > 0 ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(10, 9, "APP.WORKPLACE.COLLEAGUES_COUNT", \u0275\u0275pureFunction1(15, _c02, contact_list_r10?.length), contact_list_r10?.length));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_users().length > 0 ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(contact_list_r10?.length ? 12 : 13);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(19, 13, "APP.WORKPLACE.COLLEAGUES_ADD"));
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatCheckboxModule,
      MatCheckbox,
      IconComponent,
      UserAvatarComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingColleaguesNewComponent, [{
    type: Component,
    args: [{
      selector: "landing-colleagues-new",
      template: `
        <div class="border-base-300 bg-base-100 rounded-lg border p-4">
            @let contact_list = contacts();
            <div class="mb-2 flex items-center justify-between">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.COLLEAGUES' | translate }}
                </h3>
                <div class="rounded px-2 py-1 text-xs opacity-60">
                    @if (selected_users().length > 0) {
                        <span>{{
                            'COMMON.SELECTED_COUNT'
                                | translate: { count: selected_users().length }
                        }}</span>
                        \u2022
                    }
                    <span>{{
                        'APP.WORKPLACE.COLLEAGUES_COUNT'
                            | translate
                                : {
                                      count: contact_list?.length,
                                  }
                                : contact_list?.length
                    }}</span>
                </div>
            </div>
            @if (selected_users().length > 0) {
                <div class="mt-2 flex space-x-2">
                    @if (can_book_group_desk()) {
                        <button
                            btn
                            matRipple
                            name="book-desk-selected"
                            class="flex-1 space-x-2 text-sm"
                            (click)="bookDeskWithSelected()"
                        >
                            <icon class="text-lg">desk</icon>
                            <span>{{
                                'APP.WORKPLACE.COLLEAGUES_BOOK_DESK' | translate
                            }}</span>
                        </button>
                    }
                    @if (features().includes('spaces')) {
                        <button
                            btn
                            matRipple
                            name="book-room-selected"
                            class="flex-1 space-x-2 text-sm"
                            (click)="bookMeetingWithSelected()"
                        >
                            <icon class="text-lg">event</icon>
                            <span>{{
                                'APP.WORKPLACE.COLLEAGUES_BOOK_ROOM' | translate
                            }}</span>
                        </button>
                    }
                </div>
            }
            @if (contact_list?.length) {
                <div class="mt-2 flex w-full flex-col space-y-2">
                    @for (user of contact_list; track user) {
                        <div
                            class="border-base-300 relative flex items-center space-x-2 overflow-hidden rounded border p-2"
                            [class.border-secondary]="isSelected(user)"
                        >
                            <mat-checkbox
                                [checked]="isSelected(user)"
                                (change)="toggleSelection(user)"
                                (click)="$event.stopPropagation()"
                                class="-mx-1"
                            ></mat-checkbox>
                            <a-user-avatar [user]="user" />
                            <div
                                class="flex w-16 flex-1 flex-col leading-tight"
                            >
                                <div class="truncate">{{ user.name }}</div>
                                <a
                                    [href]="'mailto:' + user.email"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="truncate text-xs underline opacity-60"
                                    >{{ user.email }}</a
                                >
                            </div>
                            <button icon matRipple [matMenuTriggerFor]="menu">
                                <icon>more_vert</icon>
                            </button>
                            <mat-menu #menu="matMenu">
                                @if (features().includes('spaces')) {
                                    <button
                                        mat-menu-item
                                        (click)="bookMeeting(user)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">event</icon>
                                            <div>
                                                {{
                                                    'APP.WORKPLACE.COLLEAGUES_BOOK_MEETING'
                                                        | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                                @if (has_team_schedule()) {
                                    <button
                                        mat-menu-item
                                        (click)="toggleFavorite(user)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">{{
                                                isFavorite(user)
                                                    ? 'star'
                                                    : 'star_outline'
                                            }}</icon>
                                            <div>
                                                {{
                                                    (isFavorite(user)
                                                        ? 'APP.WORKPLACE.COLLEAGUES_REMOVE_FAVORITE'
                                                        : 'APP.WORKPLACE.COLLEAGUES_ADD_FAVORITE'
                                                    ) | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                    <button
                                        mat-menu-item
                                        (click)="toggleTeamMember(user)"
                                    >
                                        <div
                                            class="flex items-center space-x-2"
                                        >
                                            <icon class="text-2xl">{{
                                                isTeamMember(user)
                                                    ? 'group_remove'
                                                    : 'group_add'
                                            }}</icon>
                                            <div>
                                                {{
                                                    (isTeamMember(user)
                                                        ? 'APP.WORKPLACE.COLLEAGUES_REMOVE_TEAM'
                                                        : 'APP.WORKPLACE.COLLEAGUES_ADD_TEAM'
                                                    ) | translate
                                                }}
                                            </div>
                                        </div>
                                    </button>
                                }
                                <button
                                    mat-menu-item
                                    (click)="removeColleague(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-error text-2xl"
                                            >person_remove</icon
                                        >
                                        <div>
                                            {{
                                                'APP.WORKPLACE.COLLEAGUES_REMOVE'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            </mat-menu>
                            @if (isSelected(user)) {
                                <div
                                    class="bg-secondary absolute inset-0 !m-0 opacity-10"
                                ></div>
                            }
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="bg-base-200 flex h-48 w-full flex-col items-center justify-center space-y-2 rounded-xl p-8"
                >
                    <img src="assets/icons/no-contacts.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.COLLEAGUES_EMPTY' | translate }}
                    </p>
                </div>
            }
            <button
                btn
                matRipple
                class="mt-4 w-full"
                (click)="openAddColleaguesModal()"
            >
                <icon class="text-xl">person_add</icon>
                <div>{{ 'APP.WORKPLACE.COLLEAGUES_ADD' | translate }}</div>
            </button>
        </div>
    `,
      imports: [
        CommonModule,
        MatRippleModule,
        MatMenuModule,
        MatCheckboxModule,
        IconComponent,
        TranslatePipe,
        UserAvatarComponent
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesNewComponent, { className: "LandingColleaguesNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-colleagues-new.component.ts", lineNumber: 238 });
})();

// apps/workplace/src/app/landing-new/landing-desk-week.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function LandingDeskWeekComponent_For_26_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_26_Conditional_10_For_1_Template_button_click_0_listener() {
      const booking_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewBooking(booking_r2));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "icon", 25);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "icon", 25);
    \u0275\u0275text(8, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r2.bookingTooltip(booking_r2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.buildingName(booking_r2));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.deskName(booking_r2));
  }
}
function LandingDeskWeekComponent_For_26_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingDeskWeekComponent_For_26_Conditional_10_For_1_Template, 11, 3, "button", 23, _forTrack02);
  }
  if (rf & 2) {
    const day_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.bookings_by_date()[day_r4.id]);
  }
}
function LandingDeskWeekComponent_For_26_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_26_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const day_r4 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookDesk(day_r4.date));
    });
    \u0275\u0275elementStart(1, "icon", 28);
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.BOOK_DESK"));
  }
}
function LandingDeskWeekComponent_For_26_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 22)(1, "icon", 30);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd()();
  }
}
function LandingDeskWeekComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 15)(2, "div", 16)(3, "icon", 17);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 20);
    \u0275\u0275conditionalCreate(10, LandingDeskWeekComponent_For_26_Conditional_10_Template, 2, 0)(11, LandingDeskWeekComponent_For_26_Conditional_11_Template, 6, 3, "button", 21)(12, LandingDeskWeekComponent_For_26_Conditional_12_Template, 3, 0, "div", 22);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_19_0;
    const day_r4 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r4.is_bookable);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("opacity-40", day_r4.is_weekend);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(day_r4.is_weekend ? "star" : "event_note");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(day_r4.day_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", day_r4.is_today)("text-info-content", day_r4.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r4.day_number, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r4.is_bookable)("bg-base-200", day_r4.is_weekend);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = ctx_r2.bookings_by_date()[day_r4.id]?.length) ? 10 : day_r4.is_bookable ? 11 : 12, tmp_19_0);
  }
}
function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_10_For_1_Template_button_click_0_listener() {
      const booking_r7 = \u0275\u0275restoreView(_r6).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r2.viewBooking(booking_r7));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "icon", 25);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "icon", 25);
    \u0275\u0275text(8, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r7 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(4);
    \u0275\u0275property("matTooltip", ctx_r2.bookingTooltip(booking_r7));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.buildingName(booking_r7));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.deskName(booking_r7));
  }
}
function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingDeskWeekComponent_For_29_Conditional_0_Conditional_10_For_1_Template, 11, 3, "button", 23, _forTrack02);
  }
  if (rf & 2) {
    const day_r8 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.bookings_by_date()[day_r8.id]);
  }
}
function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 34);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const day_r8 = \u0275\u0275nextContext(2).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookDesk(day_r8.date));
    });
    \u0275\u0275elementStart(1, "icon", 28);
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.BOOK_DESK"));
  }
}
function LandingDeskWeekComponent_For_29_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "icon", 30);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd()();
  }
}
function LandingDeskWeekComponent_For_29_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div", 15)(2, "div", 16)(3, "icon", 17);
    \u0275\u0275text(4, "event_note");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 31);
    \u0275\u0275conditionalCreate(10, LandingDeskWeekComponent_For_29_Conditional_0_Conditional_10_Template, 2, 0)(11, LandingDeskWeekComponent_For_29_Conditional_0_Conditional_11_Template, 6, 3, "button", 32)(12, LandingDeskWeekComponent_For_29_Conditional_0_Conditional_12_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const day_r8 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r8.is_bookable);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(day_r8.day_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", day_r8.is_today)("text-info-content", day_r8.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r8.day_number, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r8.is_bookable);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = ctx_r2.bookings_by_date()[day_r8.id]?.length) ? 10 : day_r8.is_bookable ? 11 : 12, tmp_17_0);
  }
}
function LandingDeskWeekComponent_For_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, LandingDeskWeekComponent_For_29_Conditional_0_Template, 13, 11, "div", 11);
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    \u0275\u0275conditional(!day_r8.is_weekend ? 0 : -1);
  }
}
function LandingDeskWeekComponent_For_32_Conditional_10_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_32_Conditional_10_For_1_Template_button_click_0_listener() {
      const booking_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.viewBooking(booking_r11));
    });
    \u0275\u0275elementStart(1, "div", 16)(2, "icon", 25);
    \u0275\u0275text(3, "location_on");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span", 26);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 16)(7, "icon", 25);
    \u0275\u0275text(8, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "span", 26);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const booking_r11 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r2.bookingTooltip(booking_r11));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.buildingName(booking_r11));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.deskName(booking_r11));
  }
}
function LandingDeskWeekComponent_For_32_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, LandingDeskWeekComponent_For_32_Conditional_10_For_1_Template, 11, 3, "button", 23, _forTrack02);
  }
  if (rf & 2) {
    const day_r12 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.bookings_by_date()[day_r12.id]);
  }
}
function LandingDeskWeekComponent_For_32_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 38);
    \u0275\u0275listener("click", function LandingDeskWeekComponent_For_32_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const day_r12 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.bookDesk(day_r12.date));
    });
    \u0275\u0275elementStart(1, "icon", 28);
    \u0275\u0275text(2, "add_circle_outline");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 1, "COMMON.BOOK_DESK"));
  }
}
function LandingDeskWeekComponent_For_32_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 33)(1, "icon", 30);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd()();
  }
}
function LandingDeskWeekComponent_For_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16)(3, "icon", 35);
    \u0275\u0275text(4, "sunny");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "span", 18);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "span", 19);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "div", 36);
    \u0275\u0275conditionalCreate(10, LandingDeskWeekComponent_For_32_Conditional_10_Template, 2, 0)(11, LandingDeskWeekComponent_For_32_Conditional_11_Template, 6, 3, "button", 37)(12, LandingDeskWeekComponent_For_32_Conditional_12_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const day_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r12.is_bookable);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(day_r12.day_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", day_r12.is_today)("text-info-content", day_r12.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r12.day_number, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", !day_r12.is_bookable);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = ctx_r2.bookings_by_date()[day_r12.id]?.length) ? 10 : day_r12.is_bookable ? 11 : 12, tmp_16_0);
  }
}
var LandingDeskWeekComponent = class _LandingDeskWeekComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._booking_form = inject(BookingFormService);
    this._schedule = inject(ScheduleStateService);
    this.selected_date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "selected_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_weekday = settingSignal("week_start", 0);
    this.available_days = settingSignal("desks.available_period", 90);
    this.end_date = computed(
      () => endOfDay(addDays(Date.now(), this.available_days())).valueOf(),
      ...ngDevMode ? [{ debugName: "end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekdays = computed(
      () => {
        const days = [];
        const week_start = startOfWeek(this.selected_date(), {
          weekStartsOn: this.offset_weekday()
        });
        const today = Date.now();
        const today_start = startOfDay(today);
        const end_date = this.end_date();
        for (let i = 0; i < 7; i++) {
          const date = addDays(week_start, i);
          const date_value = date.valueOf();
          const day_of_week = date.getDay();
          const is_past = isBefore(date, today_start);
          days.push({
            id: format(date, "yyyy-MM-dd"),
            date: date_value,
            day_name: format(date, "EEE"),
            day_number: date.getDate(),
            is_past,
            is_bookable: !is_past && date_value <= end_date,
            is_today: isSameDay(date, today),
            is_weekend: day_of_week === 0 || day_of_week === 6
          });
        }
        return days;
      },
      ...ngDevMode ? [{ debugName: "weekdays" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekend_days = computed(
      () => this.weekdays().filter((day) => day.is_weekend),
      ...ngDevMode ? [{ debugName: "weekend_days" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_range = computed(
      () => {
        const week_start = startOfWeek(this.selected_date(), {
          weekStartsOn: this.offset_weekday()
        });
        const week_end = endOfWeek(this.selected_date(), {
          weekStartsOn: this.offset_weekday()
        });
        return `${format(week_start, "dd MMM")} - ${format(week_end, "dd MMM yyyy")}`;
      },
      ...ngDevMode ? [{ debugName: "week_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_current_week = computed(
      () => {
        const today = Date.now();
        const current_week_start = startOfWeek(today, {
          weekStartsOn: this.offset_weekday()
        });
        const selected_week_start = startOfWeek(this.selected_date(), {
          weekStartsOn: this.offset_weekday()
        });
        return isSameDay(current_week_start, selected_week_start);
      },
      ...ngDevMode ? [{ debugName: "is_current_week" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_go_previous_week = computed(
      () => this._weekHasBookableDay(addWeeks(this.selected_date(), -1).valueOf()),
      ...ngDevMode ? [{ debugName: "can_go_previous_week" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_go_next_week = computed(
      () => this._weekHasBookableDay(addWeeks(this.selected_date(), 1).valueOf()),
      ...ngDevMode ? [{ debugName: "can_go_next_week" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_go_next_monday = computed(
      () => this._weekHasBookableDay(this._nextMonday().valueOf()),
      ...ngDevMode ? [{ debugName: "can_go_next_monday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_bookings_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_bookings_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        date: this.selected_date(),
        week_start: this.offset_weekday()
      }),
      loader: ({ params: { date, week_start } }) => {
        const start = startOfWeek(date, { weekStartsOn: week_start });
        const end = endOfWeek(date, { weekStartsOn: week_start });
        return queryBookings({
          period_start: getUnixTime(start),
          period_end: getUnixTime(end),
          type: "desk",
          include_checked_out: true
        }).catch(() => []);
      }
    }));
    this.desk_bookings = computed(
      () => this._desk_bookings_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "desk_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._desk_bookings_resource.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings_by_date = computed(
      () => {
        const bookings = this.desk_bookings();
        const date_map = {};
        for (const booking of bookings || []) {
          const date_key = format(booking.date, "yyyy-MM-dd");
          if (!date_map[date_key])
            date_map[date_key] = [];
          date_map[date_key].push(booking);
        }
        return date_map;
      },
      ...ngDevMode ? [{ debugName: "bookings_by_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.interval("poll_bookings", () => this._desk_bookings_resource.reload(), 2 * 60 * 1e3);
  }
  goToToday() {
    this.selected_date.set(Date.now());
  }
  goToNextMonday() {
    if (!this.can_go_next_monday())
      return;
    this.selected_date.set(this._nextMonday().valueOf());
  }
  previousWeek() {
    if (!this.can_go_previous_week())
      return;
    this.selected_date.set(addWeeks(this.selected_date(), -1).valueOf());
  }
  nextWeek() {
    if (!this.can_go_next_week())
      return;
    this.selected_date.set(addWeeks(this.selected_date(), 1).valueOf());
  }
  buildingName(booking) {
    const level = this._org.levelWithID(booking.zones);
    const building = level ? this._org.buildings.find((b) => b.id === level.parent_id) : null;
    return building?.display_name || building?.name || i18n("COMMON.WORK_OFFICE");
  }
  deskName(booking) {
    return booking.asset_name || booking.description || i18n("COMMON.DESK");
  }
  bookingTooltip(booking) {
    const location = this.buildingName(booking);
    const desk = this.deskName(booking);
    const time = booking.all_day ? i18n("COMMON.ALL_DAY") : `${format(booking.date, "h:mm a")} - ${format(booking.date_end, "h:mm a")}`;
    return `${desk}
${location}
${time}`;
  }
  viewBooking(booking) {
    this._dialog.open(BookingDetailsModalComponent, {
      data: {
        booking,
        edit_fn: (b) => this._schedule.editBooking(b),
        // Reload only. The week in view must stay, also when the
        // user cancels the delete prompt.
        remove_fn: async (b, s) => {
          await this._schedule.remove(b, s);
          this._desk_bookings_resource.reload();
        },
        end_fn: (b) => this._schedule.end(b)
      }
    });
  }
  bookDesk(date) {
    if (date > this.end_date())
      return;
    this._router.navigate(["/book", "desk", "form"]);
    setTimeout(() => this._booking_form.newForm("desk", new Booking({ date, booking_type: "desk" })), 300);
  }
  _weekHasBookableDay(date) {
    const week_start = startOfWeek(date, {
      weekStartsOn: this.offset_weekday()
    }).valueOf();
    const week_end = endOfWeek(date, {
      weekStartsOn: this.offset_weekday()
    }).valueOf();
    return week_end >= startOfDay(Date.now()).valueOf() && week_start <= this.end_date();
  }
  _nextMonday() {
    const today = /* @__PURE__ */ new Date();
    const day_of_week = today.getDay();
    const days_until_monday = day_of_week === 0 ? 1 : 8 - day_of_week;
    return addDays(today, days_until_monday);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingDeskWeekComponent_BaseFactory;
      return function LandingDeskWeekComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingDeskWeekComponent_BaseFactory || (\u0275LandingDeskWeekComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingDeskWeekComponent)))(__ngFactoryType__ || _LandingDeskWeekComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingDeskWeekComponent, selectors: [["landing-desk-week"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 26, consts: [[1, "border-base-300", "bg-base-100", "space-y-2", "rounded-lg", "border", "p-4"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "px-2", "text-lg", "font-medium"], [1, "px-2", "text-sm", "opacity-60"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "h-8", "text-sm", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "h-8", "text-sm", 3, "click", "disabled"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "h-12", "w-12", "rounded-lg", 3, "click", "matTooltip", "disabled"], [1, "text-2xl"], [1, "flex", "flex-col", "gap-2", "pt-2", "md:hidden"], [1, "flex", "flex-col"], [1, "hidden", "gap-2", "pt-2", "md:grid", "md:grid-cols-6"], [1, "flex", "flex-col", "space-y-1"], [1, "flex", "flex-1", "flex-col"], [1, "mb-1", "flex", "items-center", "justify-center", "space-x-2", "text-sm"], [1, "flex", "items-center", "space-x-1"], [1, "text-base"], [1, "font-medium", "uppercase"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "text-xs"], [1, "border-base-300", "min-h-16", "flex-1", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "space-x-2", "border-2", "border-dashed"], [1, "flex", "h-full", "min-h-10", "w-full", "items-center", "justify-center"], ["matRipple", "", 1, "bg-secondary", "text-secondary-content", "mb-2", "w-full", "rounded-lg", "p-2", "text-left", "last:mb-0", 3, "matTooltip"], ["matRipple", "", 1, "bg-secondary", "text-secondary-content", "mb-2", "w-full", "rounded-lg", "p-2", "text-left", "last:mb-0", 3, "click", "matTooltip"], [1, "text-sm"], [1, "truncate", "text-xs"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "space-x-2", "border-2", "border-dashed", 3, "click"], [1, "text-xl", "opacity-60"], [1, "text-xs", "opacity-60"], [1, "text-xl", "opacity-30"], [1, "border-base-300", "flex", "min-h-24", "flex-1", "flex-col", "space-y-2", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "flex-col", "space-y-1", "border-2", "border-dashed"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "flex-col", "space-y-1", "border-2", "border-dashed", 3, "click"], [1, "text-base", "opacity-40"], [1, "border-base-300", "bg-base-200", "flex", "min-h-12", "flex-1", "flex-col", "space-y-2", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "gap-2", "border-2", "border-dashed", "px-0"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "gap-2", "border-2", "border-dashed", "px-0", 3, "click"], [1, "pr-2", "text-xs", "opacity-60"]], template: function LandingDeskWeekComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "div")(3, "h3", 2);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "p", 3);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "div", 4)(9, "button", 5);
        \u0275\u0275listener("click", function LandingDeskWeekComponent_Template_button_click_9_listener() {
          return ctx.goToToday();
        });
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "button", 6);
        \u0275\u0275listener("click", function LandingDeskWeekComponent_Template_button_click_12_listener() {
          return ctx.goToNextMonday();
        });
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 7)(16, "button", 8);
        \u0275\u0275pipe(17, "translate");
        \u0275\u0275listener("click", function LandingDeskWeekComponent_Template_button_click_16_listener() {
          return ctx.previousWeek();
        });
        \u0275\u0275elementStart(18, "icon", 9);
        \u0275\u0275text(19, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "button", 8);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275listener("click", function LandingDeskWeekComponent_Template_button_click_20_listener() {
          return ctx.nextWeek();
        });
        \u0275\u0275elementStart(22, "icon", 9);
        \u0275\u0275text(23, "chevron_right");
        \u0275\u0275elementEnd()()()()();
        \u0275\u0275elementStart(24, "div", 10);
        \u0275\u0275repeaterCreate(25, LandingDeskWeekComponent_For_26_Template, 13, 16, "div", 11, _forTrack02);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(27, "div", 12);
        \u0275\u0275repeaterCreate(28, LandingDeskWeekComponent_For_29_Template, 1, 1, null, null, _forTrack02);
        \u0275\u0275elementStart(30, "div", 13);
        \u0275\u0275repeaterCreate(31, LandingDeskWeekComponent_For_32_Template, 13, 11, "div", 14, _forTrack02);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 16, "APP.WORKPLACE.DESK_WEEK_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.week_range());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", !ctx.is_current_week());
        \u0275\u0275property("disabled", ctx.is_current_week());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 18, "COMMON.TODAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.is_current_week() || !ctx.can_go_next_monday());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 20, "APP.WORKPLACE.DESK_WEEK_NEXT_MONDAY"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 22, "APP.WORKPLACE.DESK_WEEK_PREVIOUS"))("disabled", !ctx.can_go_previous_week());
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 24, "APP.WORKPLACE.DESK_WEEK_NEXT"))("disabled", !ctx.can_go_next_week());
        \u0275\u0275advance(4);
        \u0275\u0275classProp("opacity-60", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("opacity-60", ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.weekdays());
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.weekend_days());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingDeskWeekComponent, [{
    type: Component,
    args: [{ selector: "landing-desk-week", template: `
        <div
            class="border-base-300 bg-base-100 space-y-2 rounded-lg border p-4"
        >
            <div
                class="flex flex-col gap-2 md:flex-row md:items-center md:justify-between"
            >
                <div>
                    <h3 class="px-2 text-lg font-medium">
                        {{ 'APP.WORKPLACE.DESK_WEEK_TITLE' | translate }}
                    </h3>
                    <p class="px-2 text-sm opacity-60">{{ week_range() }}</p>
                </div>
                <div class="flex items-center space-x-2">
                    <button
                        btn
                        matRipple
                        class="h-8 text-sm"
                        [class.inverse]="!is_current_week()"
                        [disabled]="is_current_week()"
                        (click)="goToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="inverse h-8 text-sm"
                        [disabled]="!is_current_week() || !can_go_next_monday()"
                        (click)="goToNextMonday()"
                    >
                        {{ 'APP.WORKPLACE.DESK_WEEK_NEXT_MONDAY' | translate }}
                    </button>
                    <div class="flex items-center">
                        <button
                            icon
                            matRipple
                            class="hover:bg-base-200 h-12 w-12 rounded-lg"
                            [matTooltip]="
                                'APP.WORKPLACE.DESK_WEEK_PREVIOUS' | translate
                            "
                            [disabled]="!can_go_previous_week()"
                            (click)="previousWeek()"
                        >
                            <icon class="text-2xl">chevron_left</icon>
                        </button>
                        <button
                            icon
                            matRipple
                            class="hover:bg-base-200 h-12 w-12 rounded-lg"
                            [matTooltip]="
                                'APP.WORKPLACE.DESK_WEEK_NEXT' | translate
                            "
                            [disabled]="!can_go_next_week()"
                            (click)="nextWeek()"
                        >
                            <icon class="text-2xl">chevron_right</icon>
                        </button>
                    </div>
                </div>
            </div>
            <!-- Mobile: All days stacked -->
            <div
                class="flex flex-col gap-2 pt-2 md:hidden"
                [class.opacity-60]="loading()"
            >
                @for (day of weekdays(); track day.id) {
                    <div class="flex flex-col">
                        <div
                            class="mb-1 flex items-center justify-center space-x-2 text-sm"
                            [class.opacity-40]="!day.is_bookable"
                        >
                            <div class="flex items-center space-x-1">
                                <icon
                                    class="text-base"
                                    [class.opacity-40]="day.is_weekend"
                                    >{{
                                        day.is_weekend ? 'star' : 'event_note'
                                    }}</icon
                                >
                                <span class="font-medium uppercase">{{
                                    day.day_name
                                }}</span>
                            </div>
                            <span
                                class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                [class.bg-info]="day.is_today"
                                [class.text-info-content]="day.is_today"
                            >
                                {{ day.day_number }}
                            </span>
                        </div>
                        <div
                            class="border-base-300 min-h-16 flex-1 rounded-lg border p-2"
                            [class.opacity-40]="!day.is_bookable"
                            [class.bg-base-200]="day.is_weekend"
                        >
                            @if (bookings_by_date()[day.id]?.length; as count) {
                                @for (
                                    booking of bookings_by_date()[day.id];
                                    track booking.id
                                ) {
                                    <button
                                        matRipple
                                        class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                        (click)="viewBooking(booking)"
                                        [matTooltip]="bookingTooltip(booking)"
                                    >
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <icon class="text-sm"
                                                >location_on</icon
                                            >
                                            <span class="truncate text-xs">{{
                                                buildingName(booking)
                                            }}</span>
                                        </div>
                                        <div
                                            class="flex items-center space-x-1"
                                        >
                                            <icon class="text-sm">desk</icon>
                                            <span class="truncate text-xs">{{
                                                deskName(booking)
                                            }}</span>
                                        </div>
                                    </button>
                                }
                            } @else if (day.is_bookable) {
                                <button
                                    btn
                                    matRipple
                                    class="inverse border-base-300 h-full w-full space-x-2 border-2 border-dashed"
                                    (click)="bookDesk(day.date)"
                                >
                                    <icon class="text-xl opacity-60"
                                        >add_circle_outline</icon
                                    >
                                    <span class="text-xs opacity-60">{{
                                        'COMMON.BOOK_DESK' | translate
                                    }}</span>
                                </button>
                            } @else {
                                <div
                                    class="flex h-full min-h-10 w-full items-center justify-center"
                                >
                                    <icon class="text-xl opacity-30">desk</icon>
                                </div>
                            }
                        </div>
                    </div>
                }
            </div>
            <!-- Desktop: 6 columns with stacked weekend -->
            <div
                class="hidden gap-2 pt-2 md:grid md:grid-cols-6"
                [class.opacity-60]="loading()"
            >
                <!-- Weekdays (Mon-Fri) -->
                @for (day of weekdays(); track day.id) {
                    @if (!day.is_weekend) {
                        <div class="flex flex-col">
                            <div
                                class="mb-1 flex items-center justify-center space-x-2 text-sm"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                <div class="flex items-center space-x-1">
                                    <icon class="text-base">event_note</icon>
                                    <span class="font-medium uppercase">{{
                                        day.day_name
                                    }}</span>
                                </div>
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                    [class.bg-info]="day.is_today"
                                    [class.text-info-content]="day.is_today"
                                >
                                    {{ day.day_number }}
                                </span>
                            </div>
                            <div
                                class="border-base-300 flex min-h-24 flex-1 flex-col space-y-2 rounded-lg border p-2"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                @if (
                                    bookings_by_date()[day.id]?.length;
                                    as count
                                ) {
                                    @for (
                                        booking of bookings_by_date()[day.id];
                                        track booking.id
                                    ) {
                                        <button
                                            matRipple
                                            class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                            (click)="viewBooking(booking)"
                                            [matTooltip]="
                                                bookingTooltip(booking)
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >location_on</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        buildingName(booking)
                                                    }}</span
                                                >
                                            </div>
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >desk</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        deskName(booking)
                                                    }}</span
                                                >
                                            </div>
                                        </button>
                                    }
                                } @else if (day.is_bookable) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse border-base-300 h-full w-full flex-col space-y-1 border-2 border-dashed"
                                        (click)="bookDesk(day.date)"
                                    >
                                        <icon class="text-xl opacity-60"
                                            >add_circle_outline</icon
                                        >
                                        <span class="text-xs opacity-60">{{
                                            'COMMON.BOOK_DESK' | translate
                                        }}</span>
                                    </button>
                                } @else {
                                    <div
                                        class="flex h-full w-full flex-col items-center justify-center"
                                    >
                                        <icon class="text-xl opacity-30"
                                            >desk</icon
                                        >
                                    </div>
                                }
                            </div>
                        </div>
                    }
                }
                <!-- Weekend (Sat & Sun stacked) -->
                <div class="flex flex-col space-y-1">
                    @for (day of weekend_days(); track day.id) {
                        <div class="flex flex-1 flex-col">
                            <div
                                class="mb-1 flex items-center justify-center space-x-2 text-sm"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                <div class="flex items-center space-x-1">
                                    <icon class="text-base opacity-40"
                                        >sunny</icon
                                    >
                                    <span class="font-medium uppercase">{{
                                        day.day_name
                                    }}</span>
                                </div>
                                <span
                                    class="flex h-6 w-6 items-center justify-center rounded-full text-xs"
                                    [class.bg-info]="day.is_today"
                                    [class.text-info-content]="day.is_today"
                                >
                                    {{ day.day_number }}
                                </span>
                            </div>
                            <div
                                class="border-base-300 bg-base-200 flex min-h-12 flex-1 flex-col space-y-2 rounded-lg border p-2"
                                [class.opacity-40]="!day.is_bookable"
                            >
                                @if (
                                    bookings_by_date()[day.id]?.length;
                                    as count
                                ) {
                                    @for (
                                        booking of bookings_by_date()[day.id];
                                        track booking.id
                                    ) {
                                        <button
                                            matRipple
                                            class="bg-secondary text-secondary-content mb-2 w-full rounded-lg p-2 text-left last:mb-0"
                                            (click)="viewBooking(booking)"
                                            [matTooltip]="
                                                bookingTooltip(booking)
                                            "
                                        >
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >location_on</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        buildingName(booking)
                                                    }}</span
                                                >
                                            </div>
                                            <div
                                                class="flex items-center space-x-1"
                                            >
                                                <icon class="text-sm"
                                                    >desk</icon
                                                >
                                                <span
                                                    class="truncate text-xs"
                                                    >{{
                                                        deskName(booking)
                                                    }}</span
                                                >
                                            </div>
                                        </button>
                                    }
                                } @else if (day.is_bookable) {
                                    <button
                                        btn
                                        matRipple
                                        class="inverse border-base-300 h-full w-full gap-2 border-2 border-dashed px-0"
                                        (click)="bookDesk(day.date)"
                                    >
                                        <icon class="text-xl opacity-60"
                                            >add_circle_outline</icon
                                        >
                                        <span class="pr-2 text-xs opacity-60">{{
                                            'COMMON.BOOK_DESK' | translate
                                        }}</span>
                                    </button>
                                } @else {
                                    <div
                                        class="flex h-full w-full flex-col items-center justify-center"
                                    >
                                        <icon class="text-xl opacity-30"
                                            >desk</icon
                                        >
                                    </div>
                                }
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingDeskWeekComponent, { className: "LandingDeskWeekComponent", filePath: "apps/workplace/src/app/landing-new/landing-desk-week.component.ts", lineNumber: 424 });
})();

// apps/workplace/src/app/landing-new/landing-favourites-new.component.ts
var _c03 = (a0) => ({ count: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 9);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("source", item_r2.images[0]);
  }
}
function LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 10);
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("src", "assets/icons/" + item_r2.type + "-placeholder.svg", \u0275\u0275sanitizeUrl);
  }
}
function LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon", 14);
    \u0275\u0275text(2, " people ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "APP.WORKPLACE.CAPACITY", \u0275\u0275pureFunction1(4, _c03, item_r2.capacity)), " ");
  }
}
function LandingFavouritesNewComponent_Conditional_8_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "div", 8);
    \u0275\u0275conditionalCreate(3, LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_3_Template, 1, 1, "img", 9)(4, LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_4_Template, 1, 1, "img", 10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 11)(6, "div", 12);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 13)(9, "icon", 14);
    \u0275\u0275text(10, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 15);
    \u0275\u0275declareLet(12);
    \u0275\u0275pipe(13, "level");
    \u0275\u0275text(14);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(15, LandingFavouritesNewComponent_Conditional_8_For_2_Conditional_15_Template, 6, 6, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "button", 17);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275listener("click", function LandingFavouritesNewComponent_Conditional_8_For_2_Template_button_click_16_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.removeFavourite(item_r2));
    });
    \u0275\u0275elementStart(18, "icon", 18);
    \u0275\u0275text(19, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 19);
    \u0275\u0275listener("click", function LandingFavouritesNewComponent_Conditional_8_For_2_Template_button_click_20_listener() {
      const item_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.bookResource(item_r2));
    });
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275conditional(item_r2.images?.length ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    const lvl_r4 = \u0275\u0275pipeBind1(13, 6, item_r2.zones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", lvl_r4?.display_name || lvl_r4?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r2.capacity ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 8, "APP.WORKPLACE.FAVOURITES_REMOVE"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 10, "COMMON.BOOK"), " ");
  }
}
function LandingFavouritesNewComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, LandingFavouritesNewComponent_Conditional_8_For_2_Template, 23, 12, "div", 6, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.favourites());
  }
}
function LandingFavouritesNewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "img", 20);
    \u0275\u0275elementStart(2, "p", 21);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 1, "APP.WORKPLACE.FAVOURITES_EMPTY"), " ");
  }
}
var LandingFavouritesNewComponent = class _LandingFavouritesNewComponent {
  constructor() {
    this._explore = inject(ExploreSpacesService);
    this._state = inject(LandingStateService);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.fav_space_ids = settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true);
    this.fav_parking_ids = settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true);
    this.fav_desk_ids = settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true);
    this.fav_locker_ids = settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true);
    this.features = landingFeatures();
    this.all_spaces = computed(
      () => this.features().includes("spaces") ? this._state.space_list().filter((s) => s.email && !s.room_booking_url) : [],
      ...ngDevMode ? [{ debugName: "all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desks_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desks_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._buildingWithFeature("desks"),
      loader: () => this._booking_form.loadResourceList("desks")
    }));
    this.all_desks = computed(
      () => this._desks_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "all_desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._parking_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_parking_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._buildingWithFeature("parking"),
      loader: () => this._booking_form.loadResourceList("parking-spaces")
    }));
    this.all_parking = computed(
      () => this._parking_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "all_parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_lockers_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._buildingWithFeature("lockers"),
      loader: () => this._booking_form.loadResourceList("lockers")
    }));
    this.all_lockers = computed(
      () => this._lockers_resource.value() ?? [],
      ...ngDevMode ? [{ debugName: "all_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.favourites = computed(
      () => {
        let list = [];
        const fav_space_ids = this.fav_space_ids();
        const spaces = this.all_spaces().filter((s) => fav_space_ids.includes(s.id));
        list = list.concat(spaces.map((s) => ({
          type: "room",
          id: s.id,
          name: s.display_name || s.name,
          zones: s.zones || [],
          images: s.images,
          capacity: s.capacity
        })));
        const fav_parking_ids = this.fav_parking_ids();
        const parking = this.all_parking().filter((p) => fav_parking_ids.includes(p.id));
        list = list.concat(parking.map((p) => ({
          type: "parking",
          id: p.id,
          name: p.name,
          zones: p.zones || []
        })));
        const fav_desk_ids = this.fav_desk_ids();
        const desks = this.all_desks().filter((d) => fav_desk_ids.includes(d.id));
        list = list.concat(desks.map((d) => ({
          type: "desk",
          id: d.id,
          name: d.name,
          zones: [d.zone?.id]
        })));
        const fav_locker_ids = this.fav_locker_ids();
        const lockers = this.all_lockers().filter((l) => fav_locker_ids.includes(l.id));
        list = list.concat(lockers.map((l) => ({
          type: "locker",
          id: l.id,
          name: l.name,
          zones: l.zones
        })));
        return list;
      },
      ...ngDevMode ? [{ debugName: "favourites" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** ID of the active building when the feature is enabled */
  _buildingWithFeature(feature) {
    return this.features().includes(feature) ? this._org.active_building()?.id || void 0 : void 0;
  }
  removeFavourite(item) {
    let fav_list = [];
    let key = "";
    const updated_list = (list) => list.filter((id) => id !== item.id);
    switch (item.type) {
      case "room":
        fav_list = this.fav_space_ids();
        key = SETTING_KEYS.FAVORITE_ROOMS;
        this.fav_space_ids.set(updated_list(fav_list));
        break;
      case "desk":
        fav_list = this.fav_desk_ids();
        key = SETTING_KEYS.FAVORITE_DESKS;
        this.fav_desk_ids.set(updated_list(fav_list));
        break;
      case "parking":
        fav_list = this.fav_parking_ids();
        key = SETTING_KEYS.FAVORITE_PARKING_SPACES;
        this.fav_parking_ids.set(updated_list(fav_list));
        break;
      case "locker":
        fav_list = this.fav_locker_ids();
        key = SETTING_KEYS.FAVORITE_LOCKERS;
        this.fav_locker_ids.set(updated_list(fav_list));
        break;
    }
    this._settings.saveUserSetting(key, updated_list(fav_list));
  }
  bookResource(item) {
    const use_new_features = this._settings.get("app.new_features");
    switch (item.type) {
      case "room":
        const space = this.all_spaces().find((s) => s.id === item.id);
        if (!space)
          return;
        this._event_form.newForm();
        if (use_new_features) {
          this._router.navigate(["/book", "meeting"]);
        } else {
          this._router.navigate(["/book", "spaces"]);
        }
        setTimeout(() => {
          this._event_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
            resources: [space]
          }));
        }, 300);
        break;
      case "desk":
        this._router.navigate(["/book", use_new_features ? "desk" : "desks"], { queryParams: { asset_id: item.id } });
        break;
      case "parking":
        const parking = this.all_parking().find((p) => p.id === item.id);
        if (!parking)
          return;
        this._booking_form.newForm("parking");
        this._booking_form.setOptions({ type: "parking" });
        this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
          resources: [parking],
          asset_id: parking.id,
          booking_type: "parking"
        }));
        this._router.navigate(["/book", "parking"]);
        break;
      case "locker":
        const locker = this.all_lockers().find((l) => l.id === item.id);
        if (!locker)
          return;
        this._booking_form.newForm("locker");
        this._booking_form.setOptions({ type: "locker" });
        this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
          resources: [locker],
          asset_id: locker.id,
          booking_type: "locker"
        }));
        this._router.navigate(["/book", "locker"]);
        break;
    }
  }
  static {
    this.\u0275fac = function LandingFavouritesNewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingFavouritesNewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingFavouritesNewComponent, selectors: [["landing-favourites-new"]], features: [\u0275\u0275ProvidersFeature([ExploreSpacesService])], decls: 10, vars: 11, consts: [[1, "flex", "flex-col", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-2"], [1, "text-lg", "font-medium"], [1, "text-sm"], [1, "grid", "min-h-64", "w-full", "grid-cols-1", "gap-2", "sm:grid-cols-2", "lg:grid-cols-3"], [1, "flex", "min-h-64", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-xl", "bg-base-200", "p-8"], [1, "relative", "flex", "h-[8.5rem]", "flex-col", "space-y-2", "rounded", "border", "border-base-300", "bg-base-100", "p-2"], [1, "flex", "space-x-2"], [1, "relative", "flex", "h-16", "w-16", "items-center", "justify-center", "overflow-hidden", "rounded", "bg-base-300"], ["auth", "", 1, "absolute", "left-1/2", "top-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "m-auto", 3, "src"], [1, "flex", "flex-1", "flex-col", "justify-center", "space-y-1", "leading-tight"], [1, "w-full", "truncate", "pr-8"], [1, "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-blue-500"], [1, "flex-1", "truncate"], [1, "flex", "items-center", "space-x-1", "truncate", "text-xs", "opacity-60"], ["icon", "", "matRipple", "", "name", "remove-favourite", 1, "absolute", "right-1", "top-1", 3, "click", "matTooltip"], [1, "text-error"], ["btn", "", "matRipple", "", "name", "book-favourite", 1, "inverse", "w-full", 3, "click"], ["src", "assets/icons/no-favourites.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingFavouritesNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3);
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, LandingFavouritesNewComponent_Conditional_8_Template, 3, 0, "div", 4)(9, LandingFavouritesNewComponent_Conditional_9_Template, 5, 3, "div", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "COMMON.FAVOURITES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(7, 5, "APP.WORKPLACE.FAVOURITES_COUNT", \u0275\u0275pureFunction1(9, _c03, ctx.favourites().length), ctx.favourites().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.favourites().length ? 8 : 9);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AuthenticatedImageDirective,
      TranslatePipe,
      LevelPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingFavouritesNewComponent, [{
    type: Component,
    args: [{
      selector: "landing-favourites-new",
      template: `
        <div
            class="flex flex-col rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2">
                <h3 class="text-lg font-medium">
                    {{ 'COMMON.FAVOURITES' | translate }}
                </h3>
                <div class="text-sm">
                    {{
                        'APP.WORKPLACE.FAVOURITES_COUNT'
                            | translate
                                : { count: favourites().length }
                                : favourites().length
                    }}
                </div>
            </div>
            @if (favourites().length) {
                <div
                    class="grid min-h-64 w-full grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3"
                >
                    @for (item of favourites(); track item.id) {
                        <div
                            class="relative flex h-[8.5rem] flex-col space-y-2 rounded border border-base-300 bg-base-100 p-2"
                        >
                            <div class="flex space-x-2">
                                <div
                                    class="relative flex h-16 w-16 items-center justify-center overflow-hidden rounded bg-base-300"
                                >
                                    @if (item.images?.length) {
                                        <img
                                            auth
                                            class="absolute left-1/2 top-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                                            [source]="item.images[0]"
                                        />
                                    } @else {
                                        <img
                                            class="m-auto"
                                            [src]="
                                                'assets/icons/' +
                                                item.type +
                                                '-placeholder.svg'
                                            "
                                        />
                                    }
                                </div>
                                <div
                                    class="flex flex-1 flex-col justify-center space-y-1 leading-tight"
                                >
                                    <div class="w-full truncate pr-8">
                                        {{ item.name }}
                                    </div>
                                    <div
                                        class="flex items-center space-x-1 text-xs opacity-60"
                                    >
                                        <icon class="text-blue-500">place</icon>
                                        <div class="flex-1 truncate">
                                            @let lvl = item.zones | level;
                                            {{ lvl?.display_name || lvl?.name }}
                                        </div>
                                    </div>
                                    @if (item.capacity) {
                                        <div
                                            class="flex items-center space-x-1 truncate text-xs opacity-60"
                                        >
                                            <icon class="text-blue-500">
                                                people
                                            </icon>
                                            <div>
                                                {{
                                                    'APP.WORKPLACE.CAPACITY'
                                                        | translate
                                                            : {
                                                                  count: item.capacity,
                                                              }
                                                }}
                                            </div>
                                        </div>
                                    }
                                </div>
                                <button
                                    icon
                                    matRipple
                                    name="remove-favourite"
                                    class="absolute right-1 top-1"
                                    [matTooltip]="
                                        'APP.WORKPLACE.FAVOURITES_REMOVE'
                                            | translate
                                    "
                                    (click)="removeFavourite(item)"
                                >
                                    <icon class="text-error">delete</icon>
                                </button>
                            </div>
                            <button
                                btn
                                matRipple
                                name="book-favourite"
                                class="inverse w-full"
                                (click)="bookResource(item)"
                            >
                                {{ 'COMMON.BOOK' | translate }}
                            </button>
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex min-h-64 w-full flex-1 flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
                >
                    <img src="assets/icons/no-favourites.svg" />
                    <p class="text-center text-sm opacity-60">
                        {{ 'APP.WORKPLACE.FAVOURITES_EMPTY' | translate }}
                    </p>
                </div>
            }
        </div>
    `,
      providers: [ExploreSpacesService],
      imports: [
        CommonModule,
        IconComponent,
        TranslatePipe,
        LevelPipe,
        MatRippleModule,
        MatTooltipModule,
        AuthenticatedImageDirective
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesNewComponent, { className: "LandingFavouritesNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-favourites-new.component.ts", lineNumber: 164 });
})();

// apps/workplace/src/app/landing-new/landing-quick-actions.component.ts
var _forTrack04 = ($index, $item) => $item.feature;
function LandingQuickActionsComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 4);
    \u0275\u0275listener("click", function LandingQuickActionsComponent_Conditional_5_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoAssignDesk());
    });
    \u0275\u0275elementStart(1, "div", 5)(2, "div", 6)(3, "icon", 7);
    \u0275\u0275text(4, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 4, "APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK_HINT"), " ");
  }
}
function LandingQuickActionsComponent_Conditional_6_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 11)(1, "icon", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 7);
    \u0275\u0275text(7, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const link_r3 = ctx.$implicit;
    \u0275\u0275property("routerLink", link_r3.route);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(link_r3.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 3, link_r3.name));
  }
}
function LandingQuickActionsComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h4", 10);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(3, LandingQuickActionsComponent_Conditional_6_For_4_Template, 8, 5, "a", 11, _forTrack04);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.WORKPLACE.QUICK_LINKS_HEADER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.links());
  }
}
var LandingQuickActionsComponent = class _LandingQuickActionsComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this.features = landingFeatures();
    this.show_quick_book = settingSignal("show_quick_book");
    this.show_quick_links = settingSignal("show_quick_links");
    this.can_quick_book = computed(
      () => this.show_quick_book() !== false && this.features().includes("desks"),
      ...ngDevMode ? [{ debugName: "can_quick_book" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.links = computed(
      () => this.show_quick_links() !== false ? QUICK_LINKS.filter((link) => this.features().includes(link.feature)) : [],
      ...ngDevMode ? [{ debugName: "links" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.autoAssignDesk = () => {
      const dialog_ref = this._dialog.open(AutoAssignedDeskModalComponent, {
        maxWidth: "100vw",
        maxHeight: "100vh",
        panelClass: "auto-assigned-desk-modal"
      });
      dialog_ref.componentInstance.show_close.set(true);
    };
  }
  static {
    this.\u0275fac = function LandingQuickActionsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingQuickActionsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickActionsComponent, selectors: [["landing-quick-actions"]], decls: 7, vars: 5, consts: [[1, "space-y-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], ["btn", "", "matRipple", "", "name", "auto-assign-desk", 1, "h-16", "w-full"], ["btn", "", "matRipple", "", "name", "auto-assign-desk", 1, "h-16", "w-full", 3, "click"], [1, "space-y-1"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2", "font-medium"], [1, "text-xs"], [1, "font-medium"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", "space-x-4", "text-left", 3, "routerLink"], [1, "flex-1"]], template: function LandingQuickActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(5, LandingQuickActionsComponent_Conditional_5_Template, 11, 6, "button", 3);
        \u0275\u0275conditionalCreate(6, LandingQuickActionsComponent_Conditional_6_Template, 5, 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 3, "APP.WORKPLACE.QUICK_ACTIONS_HEADER"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_quick_book() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.links().length ? 6 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingQuickActionsComponent, [{
    type: Component,
    args: [{
      selector: "landing-quick-actions",
      template: `
        <div
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="text-lg font-medium">
                    {{ 'APP.WORKPLACE.QUICK_ACTIONS_HEADER' | translate }}
                </h3>
            </div>
            @if (can_quick_book()) {
                <button
                    btn
                    matRipple
                    name="auto-assign-desk"
                    class="h-16 w-full"
                    (click)="autoAssignDesk()"
                >
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">bolt</icon>
                            <div class="pr-2 font-medium">
                                {{
                                    'APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK'
                                        | translate
                                }}
                            </div>
                        </div>
                        <div class="text-xs">
                            {{
                                'APP.WORKPLACE.QUICK_ACTIONS_AUTO_DESK_HINT'
                                    | translate
                            }}
                        </div>
                    </div>
                </button>
            }
            @if (links().length) {
                <h4 class="font-medium">
                    {{ 'APP.WORKPLACE.QUICK_LINKS_HEADER' | translate }}
                </h4>
                @for (link of links(); track link.feature) {
                    <a
                        btn
                        matRipple
                        [routerLink]="link.route"
                        class="inverse w-full space-x-4 text-left"
                    >
                        <icon class="text-xl">{{ link.icon }}</icon>
                        <div class="flex-1">{{ link.name | translate }}</div>
                        <icon class="text-xl">chevron_right</icon>
                    </a>
                }
            }
        </div>
    `,
      imports: [MatRippleModule, RouterModule, IconComponent, TranslatePipe]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickActionsComponent, { className: "LandingQuickActionsComponent", filePath: "apps/workplace/src/app/landing-new/landing-quick-actions.component.ts", lineNumber: 69 });
})();

// apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts
var _c04 = () => ["/your-bookings"];
var _c12 = (a0) => ({ minutes: a0 });
var _c22 = (a0) => ({ count: a0 });
var _c3 = () => ["/book", "meeting"];
var _c4 = () => ["/book", "desk"];
function LandingUpcomingBookingComponent_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "i", 22);
    \u0275\u0275twoWayListener("modelChange", function LandingUpcomingBookingComponent_Conditional_0_Conditional_1_Template_i_modelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.room_status, $event) || (ctx_r2.room_status = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(1, "i", 23);
    \u0275\u0275twoWayListener("modelChange", function LandingUpcomingBookingComponent_Conditional_0_Conditional_1_Template_i_modelChange_1_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.room_booking_start, $event) || (ctx_r2.room_booking_start = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const room_id_r4 = ctx;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("model", ctx_r2.room_status);
    \u0275\u0275property("sys", room_id_r4);
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("model", ctx_r2.room_booking_start);
    \u0275\u0275property("sys", room_id_r4);
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "APP.WORKPLACE.UPCOMING_ENDS_IN", \u0275\u0275pureFunction1(4, _c12, ctx_r2.minutesUntilEnd())), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon");
    \u0275\u0275text(2, "timelapse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 1, "APP.WORKPLACE.UPCOMING_STARTS_IN", \u0275\u0275pureFunction1(4, _c12, ctx_r2.minutesUntilStart())), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon", 11);
    \u0275\u0275text(2, "distance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r2.eventLocation());
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "icon", 11);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const count_r5 = ctx;
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "CALENDAR_EVENT.ATTENDEES_COUNT", \u0275\u0275pureFunction1(5, _c22, count_r5), count_r5), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Conditional_23_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.checkIn());
    });
    \u0275\u0275elementStart(1, "icon", 17);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("white", !ctx_r2.isCheckedIn())("bg-success", ctx_r2.isCheckedIn())("text-success-content", ctx_r2.isCheckedIn());
    \u0275\u0275property("disabled", ctx_r2.checkinDisabled());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.isCheckedIn() ? "done" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 9, ctx_r2.isCheckedIn() ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EDIT"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275conditionalCreate(1, LandingUpcomingBookingComponent_Conditional_0_Conditional_1_Template, 2, 4);
    \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
    \u0275\u0275element(4, "div", 4);
    \u0275\u0275elementStart(5, "div");
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, LandingUpcomingBookingComponent_Conditional_0_Conditional_8_Template, 6, 6, "div", 5)(9, LandingUpcomingBookingComponent_Conditional_0_Conditional_9_Template, 6, 6, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 7)(11, "div", 8)(12, "h2", 9);
    \u0275\u0275text(13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 10)(15, "icon", 11);
    \u0275\u0275text(16, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(19, LandingUpcomingBookingComponent_Conditional_0_Conditional_19_Template, 5, 1, "div", 10);
    \u0275\u0275conditionalCreate(20, LandingUpcomingBookingComponent_Conditional_0_Conditional_20_Template, 6, 7, "div", 12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 13)(22, "div", 14);
    \u0275\u0275conditionalCreate(23, LandingUpcomingBookingComponent_Conditional_0_Conditional_23_Template, 6, 11, "button", 15);
    \u0275\u0275elementStart(24, "button", 16);
    \u0275\u0275pipe(25, "translate");
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.edit());
    });
    \u0275\u0275elementStart(26, "icon", 17);
    \u0275\u0275text(27, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, LandingUpcomingBookingComponent_Conditional_0_Conditional_28_Template, 3, 3, "div", 18);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "div", 14)(30, "button", 19);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.viewDetails());
    });
    \u0275\u0275elementStart(31, "icon", 17);
    \u0275\u0275text(32, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(33, "div", 18);
    \u0275\u0275text(34);
    \u0275\u0275pipe(35, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(36, "button", 20);
    \u0275\u0275pipe(37, "translate");
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_36_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.remove());
    });
    \u0275\u0275elementStart(38, "icon", 17);
    \u0275\u0275text(39, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(40, "a", 21)(41, "icon", 17);
    \u0275\u0275text(42, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(43, "div", 18);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_2_0;
    let tmp_8_0;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_2_0 = ctx_r2.room_system_id()) ? 1 : -1, tmp_2_0);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 22, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.isInProgress() ? 8 : ctx_r2.minutesUntilStart() >= 0 ? 9 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r2.eventTitle(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r2.eventTimeDisplay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.eventLocation() ? 19 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r2.attendeeCount()) ? 20 : -1, tmp_8_0);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.showCheckin() ? 23 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("w-12", ctx_r2.showCheckin())("flex-1", !ctx_r2.showCheckin())("space-x-2", !ctx_r2.showCheckin());
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(25, 24, "BOOKINGS.ACTION_EDIT"))("disabled", !ctx_r2.canEdit());
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!ctx_r2.showCheckin() ? 28 : -1);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 26, "COMMON.VIEW_DETAILS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(37, 28, "BOOKINGS.ACTION_DELETE"))("disabled", ctx_r2.deleteDisabled());
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(32, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 30, "APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_1_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 31)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c3));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.WORKPLACE.QUICK_LINK_ROOMS"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_1_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 32)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(4, _c4));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "APP.WORKPLACE.QUICK_LINK_DESKS"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 25);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 26);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "h2", 27);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "p", 28);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 29)(13, "div", 30);
    \u0275\u0275conditionalCreate(14, LandingUpcomingBookingComponent_Conditional_1_Conditional_14_Template, 4, 5, "a", 31);
    \u0275\u0275conditionalCreate(15, LandingUpcomingBookingComponent_Conditional_1_Conditional_15_Template, 4, 5, "a", 32);
    \u0275\u0275elementEnd();
    \u0275\u0275element(16, "div", 33);
    \u0275\u0275elementStart(17, "a", 34)(18, "icon", 17);
    \u0275\u0275text(19, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 18);
    \u0275\u0275text(21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 7, "APP.WORKPLACE.UPCOMING_NONE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 9, "APP.WORKPLACE.UPCOMING_CLEAR_TITLE"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 11, "APP.WORKPLACE.UPCOMING_CLEAR_MSG"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.features().includes("spaces") ? 14 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.features().includes("desks") ? 15 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(15, _c04));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(22, 13, "APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS"), " ");
  }
}
var LandingUpcomingBookingComponent = class _LandingUpcomingBookingComponent extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(LandingStateService);
    this._schedule = inject(ScheduleStateService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this._space_pipe = new SpacePipe(this._org);
    this.features = landingFeatures();
    this.upcomingEvents = this._state.upcoming_events;
    this.room_status = signal(
      "",
      ...ngDevMode ? [{ debugName: "room_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_booking_start = signal(
      0,
      ...ngDevMode ? [{ debugName: "room_booking_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_system_id = signal(
      "",
      ...ngDevMode ? [{ debugName: "room_system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_event_key = signal(
      "",
      ...ngDevMode ? [{ debugName: "_room_event_key" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._current_time_tick = toSignal(timer(0, 1e3), {
      initialValue: 0
    });
    this.edit_fn = (i) => this._schedule.edit(i);
    this.edit_booking_fn = (i) => this._schedule.editBooking(i);
    this.remove_fn = (i, s) => this._schedule.remove(i, s);
    this.end_fn = (i) => this._schedule.end(i);
    this.nextEvent = computed(
      () => {
        const events = this.upcomingEvents();
        return events?.[0];
      },
      ...ngDevMode ? [{ debugName: "nextEvent" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showCheckin = computed(
      () => {
        const event = this.nextEvent();
        return !(event instanceof Booking && event.booking_type === "parking" && event.asset_id.startsWith("unallocated"));
      },
      ...ngDevMode ? [{ debugName: "showCheckin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.canCheckin = computed(
      () => {
        const event = this.nextEvent();
        const can_checkin = event instanceof Booking ? !event.checked_out_at : event?.extension_data?.shared_event ? event?.can_check_in : event?.can_check_in;
        return this.showCheckin() && can_checkin && (event instanceof Booking || event?.extension_data?.shared_event || this.room_status() && this.room_status() !== "free") && (event.state === "upcoming" || event.state === "started" || event.state === "in_progress") && event.status !== "declined";
      },
      ...ngDevMode ? [{ debugName: "canCheckin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checkinDisabled = computed(
      () => !this.canCheckin() || this.isCheckedIn(),
      ...ngDevMode ? [{ debugName: "checkinDisabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.canEdit = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return false;
        if (event instanceof Booking)
          return canEditBooking(event);
        return !event.extension_data?.shared_event;
      },
      ...ngDevMode ? [{ debugName: "canEdit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deleteDisabled = computed(
      () => {
        this._current_time_tick();
        const event = this.nextEvent();
        if (!event)
          return true;
        if (event instanceof Booking)
          return event.has_ended;
        return Date.now() >= event.date_end;
      },
      ...ngDevMode ? [{ debugName: "deleteDisabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.eventTitle = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return "";
        if (event instanceof Booking) {
          return event.title || event.description || event.asset_name || i18n("RESOURCE.BOOKING");
        }
        return event.title || i18n("RESOURCE.EVENT");
      },
      ...ngDevMode ? [{ debugName: "eventTitle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.eventLocation = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return "";
        if (event instanceof Booking) {
          return event.asset_name || "";
        }
        return event.resources?.[0]?.display_name || event.location || "";
      },
      ...ngDevMode ? [{ debugName: "eventLocation" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.eventTimeDisplay = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return "";
        const start = format(event.date, "h:mm a");
        const end = format(event.date + event.duration * 60 * 1e3, "h:mm a");
        const day = isSameDay(event.date, Date.now()) ? i18n("COMMON.TODAY") : format(event.date, "MMM d");
        return `${start} - ${end} \xB7 ${day}`;
      },
      ...ngDevMode ? [{ debugName: "eventTimeDisplay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isInProgress = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return false;
        const now = Date.now();
        return now >= event.date && now < event.date_end;
      },
      ...ngDevMode ? [{ debugName: "isInProgress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minutesUntilStart = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return 0;
        return differenceInMinutes(event.date, Date.now());
      },
      ...ngDevMode ? [{ debugName: "minutesUntilStart" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.minutesUntilEnd = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return 0;
        const end_time = event.date + event.duration * 60 * 1e3;
        return differenceInMinutes(end_time, Date.now());
      },
      ...ngDevMode ? [{ debugName: "minutesUntilEnd" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._checked_in = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return true;
        if (event instanceof Booking)
          return event.checked_in;
        if (!event.extension_data?.shared_event) {
          return this.room_status() !== "pending" && this.room_status() !== "free" && this._roomBookingMatchesEventStart(event);
        }
        const user_email = currentUser()?.email?.toLowerCase();
        if (!user_email)
          return false;
        const { checked_in } = event.extension_data;
        return (checked_in || []).some((email) => `${email}`.toLowerCase() === user_email);
      },
      ...ngDevMode ? [{ debugName: "_checked_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.isCheckedIn = toSignal(toObservable(this._checked_in).pipe(distinctUntilChanged(), debounce((checked_in) => timer(checked_in ? 0 : 300))), {
      initialValue: this._checked_in()
    });
    this.attendeeCount = computed(
      () => {
        const event = this.nextEvent();
        if (!event)
          return 0;
        if (event instanceof CalendarEvent) {
          return event.attendees?.length || 0;
        }
        return 0;
      },
      ...ngDevMode ? [{ debugName: "attendeeCount" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const events = this._state.upcoming_events();
      const event = events?.[0];
      if (!(event instanceof CalendarEvent) || event.extension_data?.shared_event) {
        untracked(() => {
          this._room_event_key.set("");
          this.room_status.set("");
          this.room_booking_start.set(0);
          this.room_system_id.set("");
        });
        return;
      }
      const event_key = event.id;
      untracked(() => {
        const same_event = this._room_event_key() === event_key;
        this._room_event_key.set(event_key);
        if (!same_event) {
          this.room_status.set("");
          this.room_booking_start.set(0);
          this.room_system_id.set("");
        }
        if (!same_event || !this.room_system_id()) {
          this._resolveRoomSystem(event);
        }
      });
    });
  }
  async checkIn() {
    const event = this.nextEvent();
    if (!event)
      return;
    try {
      if (event instanceof Booking) {
        await setBookingCheckedIn(event, true);
      } else if (event.extension_data?.shared_event) {
        const user_email = currentUser()?.email;
        if (!user_email)
          throw new Error("Missing current user email");
        await checkinEventGuest(event.id, user_email, true, {
          system_id: event.system?.id
        });
      } else {
        const room_id = this.room_system_id() || event.space?.id || event.system?.id;
        const mod = Gp(room_id, "Bookings");
        if (!mod)
          throw new Error("Missing bookings module");
        await mod.execute("checkin", [Math.floor(event.date / 1e3)]);
      }
      notifySuccess(i18n("BOOKINGS.CHECK_IN_SUCCESS"));
      this._state.refreshUpcomingEvents();
    } catch (error) {
      notifyError(i18n("BOOKINGS.CHECK_IN_ERROR"));
    }
  }
  viewDetails() {
    this.timeout("view_details", () => {
      const event = this.nextEvent();
      if (!event)
        return;
      if (event instanceof Booking) {
        const view_component = event.booking_type === "group-event" ? GroupEventDetailsModalComponent : BookingDetailsModalComponent;
        const data = {
          booking: event.booking_type === "group-event" ? { booking: event, concierge: false } : event,
          edit_fn: this.edit_booking_fn,
          remove_fn: this.remove_fn,
          end_fn: this.end_fn,
          refresh_fn: () => this._state.refreshUpcomingEvents()
        };
        this._dialog.open(view_component, { data });
      } else if (event instanceof CalendarEvent) {
        if (event.extension_data?.shared_event) {
          this._dialog.open(GroupEventDetailsModalComponent, {
            data: {
              event,
              edit_fn: this.edit_fn,
              remove_fn: this.remove_fn,
              concierge: false
            }
          });
          return;
        }
        this._dialog.open(EventDetailsModalComponent, {
          data: {
            event,
            edit_fn: this.edit_fn,
            remove_fn: this.remove_fn
          }
        });
      }
    });
  }
  edit() {
    const event = this.nextEvent();
    if (!event || !this.canEdit())
      return;
    event instanceof CalendarEvent ? this.edit_fn(event) : this.edit_booking_fn(event);
  }
  remove() {
    const event = this.nextEvent();
    if (this.deleteDisabled())
      return;
    this.remove_fn(event);
  }
  viewDirections() {
    const event = this.nextEvent();
    if (!event)
      return;
    let itemData;
    let zones = [];
    if (event instanceof Booking) {
      zones = event.zones || [];
      itemData = {
        id: event.asset_id,
        name: event.asset_name || event.description,
        map_id: event.extension_data?.map_id || event.asset_id,
        zones,
        level: this._org.levelWithID([...zones])
      };
    } else if (event instanceof CalendarEvent) {
      const resource2 = __spreadValues(__spreadValues({}, event.resources?.[0] || {}), event.system || {});
      zones = resource2?.zones || [];
      itemData = {
        id: resource2?.id,
        name: resource2?.display_name || resource2?.name || event.title,
        map_id: resource2?.map_id || resource2?.id,
        zones,
        level: this._org.levelWithID([...zones])
      };
    }
    if (itemData && itemData.id) {
      this._dialog.open(MapLocateModalComponent, {
        maxWidth: "95vw",
        maxHeight: "95vh",
        data: { item: itemData }
      });
    } else {
      notifyError(i18n("Unable to validate location for booking."));
    }
  }
  findColleagues() {
    this._router.navigate(["/explore"]);
  }
  async _resolveRoomSystem(event) {
    const lookup_id = event.system?.id || event.system?.email || event.resources?.[0]?.id || event.resources?.[0]?.email || "";
    if (!lookup_id)
      return;
    const space = await this._space_pipe.transform(lookup_id);
    if (this.nextEvent()?.id !== event.id)
      return;
    this.room_system_id.set(space?.id || event.system?.id || "");
  }
  _roomBookingMatchesEventStart(event) {
    const booking_start = this.room_booking_start();
    if (!booking_start)
      return false;
    const booking_start_ms = booking_start < 1e12 ? booking_start * 1e3 : booking_start;
    return Math.abs(booking_start_ms - event.date) <= 60 * 1e3;
  }
  static {
    this.\u0275fac = function LandingUpcomingBookingComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingUpcomingBookingComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingBookingComponent, selectors: [["landing-upcoming-booking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-grad", "border-base-300", "text-brand-content", "col-span-2", "space-y-2", "rounded-lg", "border", "p-4"], [1, "bg-grad", "border-base-300", "text-brand-content", "col-span-2", "flex", "min-h-48", "flex-col", "items-start", "justify-center", "space-y-2", "rounded-lg", "border", "p-4"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "bg-brand-content", "absolute", "inset-0", "opacity-20"], [1, "flex", "w-48", "items-center", "space-x-2", "px-2", "text-center"], [1, "flex", "min-w-48", "items-center", "space-x-2", "px-2", "text-center"], [1, "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-2", "sm:flex-row", "sm:space-y-0"], [1, "w-full", "sm:flex-1"], [1, "text-2xl", "font-medium"], [1, "mb-1", "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col", "items-end", "space-y-2", "sm:flex-1"], [1, "flex", "w-full", "items-center", "space-x-2", "sm:w-56"], ["btn", "", "matRipple", "", 1, "flex-1", "space-x-2", 3, "disabled", "white", "bg-success", "text-success-content"], ["btn", "", "matRiple", "", "name", "edit-booking", "matTooltipPosition", "left", 1, "white", "inverse", "h-12", "px-0", 3, "click", "matTooltip", "disabled"], [1, "text-2xl"], [1, "pr-2"], ["btn", "", "matRipple", "", 1, "inverse", "white", "flex", "flex-1", "space-x-2", 3, "click"], ["btn", "", "matRiple", "", "matTooltipPosition", "left", 1, "white", "inverse", "h-12", "w-12", "px-0", 3, "click", "matTooltip", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "space-x-2", "sm:w-56", 3, "routerLink"], ["binding", "", "mod", "Bookings", "bind", "status", 1, "hidden", 3, "modelChange", "model", "sys"], ["binding", "", "mod", "Bookings", "bind", "last_booking_started", 1, "hidden", 3, "modelChange", "model", "sys"], ["btn", "", "matRipple", "", 1, "flex-1", "space-x-2", 3, "click", "disabled"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm"], [1, "capitalize"], [1, "text-3xl", "font-medium"], [1, "text-base", "opacity-90"], [1, "flex", "w-full", "flex-wrap", "gap-3", "pt-2"], [1, "flex", "w-full", "flex-wrap", "gap-3", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "white", "min-w-48", "flex-1", "space-x-2", "sm:w-48", "sm:flex-0", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "inverse", "white", "min-w-48", "flex-1", "space-x-2", "sm:w-48", "sm:flex-0", 3, "routerLink"], [1, "hidden", "w-px", "flex-1", "sm:block"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "space-x-2", "sm:w-52", 3, "routerLink"]], template: function LandingUpcomingBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LandingUpcomingBookingComponent_Conditional_0_Template, 46, 33, "div", 0)(1, LandingUpcomingBookingComponent_Conditional_1_Template, 23, 16, "div", 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.nextEvent()) ? 0 : 1, tmp_0_0);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      BindingDirective,
      IconComponent,
      RouterLink,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--%NS%brand-100) 0%,\n      var(--%NS%brand-200) 100%);\n}\n/*# sourceMappingURL=landing-upcoming-booking.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingUpcomingBookingComponent, [{
    type: Component,
    args: [{ selector: "landing-upcoming-booking", template: `
        @if (nextEvent(); as event) {
            <div
                class="bg-grad border-base-300 text-brand-content col-span-2 space-y-2 rounded-lg border p-4"
            >
                @if (room_system_id(); as room_id) {
                    <i
                        binding
                        class="hidden"
                        [(model)]="room_status"
                        [sys]="room_id"
                        mod="Bookings"
                        bind="status"
                    ></i>
                    <i
                        binding
                        class="hidden"
                        [(model)]="room_booking_start"
                        [sys]="room_id"
                        mod="Bookings"
                        bind="last_booking_started"
                    ></i>
                }
                <div class="flex w-full items-center justify-between">
                    <div
                        class="relative overflow-hidden rounded px-2 py-1 text-sm capitalize"
                    >
                        <div
                            class="bg-brand-content absolute inset-0 opacity-20"
                        ></div>
                        <div>
                            {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                        </div>
                    </div>
                    @if (isInProgress()) {
                        <div
                            class="flex w-48 items-center space-x-2 px-2 text-center"
                        >
                            <icon>schedule</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.UPCOMING_ENDS_IN'
                                        | translate
                                            : { minutes: minutesUntilEnd() }
                                }}
                            </div>
                        </div>
                    } @else if (minutesUntilStart() >= 0) {
                        <div
                            class="flex min-w-48 items-center space-x-2 px-2 text-center"
                        >
                            <icon>timelapse</icon>
                            <div>
                                {{
                                    'APP.WORKPLACE.UPCOMING_STARTS_IN'
                                        | translate
                                            : { minutes: minutesUntilStart() }
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    class="flex w-full flex-col items-center justify-between space-y-2 sm:flex-row sm:space-y-0"
                >
                    <div class="w-full sm:flex-1">
                        <h2 class="text-2xl font-medium">
                            {{ eventTitle() }}
                        </h2>
                        <div class="mb-1 flex items-center space-x-2">
                            <icon class="text-xl">event</icon>
                            <div>{{ eventTimeDisplay() }}</div>
                        </div>
                        @if (eventLocation()) {
                            <div class="mb-1 flex items-center space-x-2">
                                <icon class="text-xl">distance</icon>
                                <div>{{ eventLocation() }}</div>
                            </div>
                        }
                        @if (attendeeCount(); as count) {
                            <div class="flex items-center space-x-2">
                                <icon class="text-xl">people</icon>
                                <div>
                                    {{
                                        'CALENDAR_EVENT.ATTENDEES_COUNT'
                                            | translate: { count }: count
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                    <div
                        class="flex w-full flex-col items-end space-y-2 sm:flex-1"
                    >
                        <div class="flex w-full items-center space-x-2 sm:w-56">
                            @if (showCheckin()) {
                                <button
                                    btn
                                    matRipple
                                    [disabled]="checkinDisabled()"
                                    class="flex-1 space-x-2"
                                    [class.white]="!isCheckedIn()"
                                    [class.bg-success]="isCheckedIn()"
                                    [class.text-success-content]="isCheckedIn()"
                                    (click)="checkIn()"
                                >
                                    <icon class="text-2xl">{{
                                        isCheckedIn() ? 'done' : 'check_circle'
                                    }}</icon>
                                    <div class="pr-2">
                                        {{
                                            (isCheckedIn()
                                                ? 'COMMON.CHECKED_IN'
                                                : 'COMMON.CHECK_IN'
                                            ) | translate
                                        }}
                                    </div>
                                </button>
                            }
                            <button
                                btn
                                matRiple
                                name="edit-booking"
                                [matTooltip]="'BOOKINGS.ACTION_EDIT' | translate"
                                matTooltipPosition="left"
                                [disabled]="!canEdit()"
                                class="white inverse h-12 px-0"
                                [class.w-12]="showCheckin()"
                                [class.flex-1]="!showCheckin()"
                                [class.space-x-2]="!showCheckin()"
                                (click)="edit()"
                            >
                                <icon class="text-2xl">edit</icon>
                                @if (!showCheckin()) {
                                    <div class="pr-2">
                                        {{ 'COMMON.EDIT' | translate }}
                                    </div>
                                }
                            </button>
                        </div>
                        <div class="flex w-full items-center space-x-2 sm:w-56">
                            <button
                                btn
                                matRipple
                                class="inverse white flex flex-1 space-x-2"
                                (click)="viewDetails()"
                            >
                                <icon class="text-2xl">info</icon>
                                <div class="pr-2">
                                    {{ 'COMMON.VIEW_DETAILS' | translate }}
                                </div>
                            </button>
                            <button
                                btn
                                matRiple
                                [matTooltip]="
                                    'BOOKINGS.ACTION_DELETE' | translate
                                "
                                matTooltipPosition="left"
                                [disabled]="deleteDisabled()"
                                class="white inverse h-12 w-12 px-0"
                                (click)="remove()"
                            >
                                <icon class="text-2xl">delete</icon>
                            </button>
                        </div>
                        <a
                            btn
                            matRipple
                            class="inverse white w-full space-x-2 sm:w-56"
                            [routerLink]="['/your-bookings']"
                        >
                            <icon class="text-2xl">open_in_new</icon>
                            <div class="pr-2">
                                {{
                                    'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                        | translate
                                }}
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        } @else {
            <div
                class="bg-grad border-base-300 text-brand-content col-span-2 flex min-h-48 flex-col items-start justify-center space-y-2 rounded-lg border p-4"
            >
                <div class="relative overflow-hidden rounded px-2 py-1 text-sm">
                    <div
                        class="bg-brand-content absolute inset-0 opacity-20"
                    ></div>
                    <div class="capitalize">
                        {{ 'APP.WORKPLACE.UPCOMING_NONE' | translate }}
                    </div>
                </div>
                <h2 class="text-3xl font-medium">
                    {{ 'APP.WORKPLACE.UPCOMING_CLEAR_TITLE' | translate }}
                </h2>
                <p class="text-base opacity-90">
                    {{ 'APP.WORKPLACE.UPCOMING_CLEAR_MSG' | translate }}
                </p>
                <div class="flex w-full flex-wrap gap-3 pt-2">
                    <div class="flex w-full flex-wrap gap-3 sm:w-auto">
                        @if (features().includes('spaces')) {
                            <a
                                btn
                                matRipple
                                class="white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                                [routerLink]="['/book', 'meeting']"
                            >
                                <div>
                                    {{
                                        'APP.WORKPLACE.QUICK_LINK_ROOMS'
                                            | translate
                                    }}
                                </div>
                            </a>
                        }
                        @if (features().includes('desks')) {
                            <a
                                btn
                                matRipple
                                class="inverse white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                                [routerLink]="['/book', 'desk']"
                            >
                                <div>
                                    {{
                                        'APP.WORKPLACE.QUICK_LINK_DESKS'
                                            | translate
                                    }}
                                </div>
                            </a>
                        }
                    </div>
                    <div class="hidden w-px flex-1 sm:block"></div>
                    <a
                        btn
                        matRipple
                        class="inverse white w-full space-x-2 sm:w-52"
                        [routerLink]="['/your-bookings']"
                    >
                        <icon class="text-2xl">open_in_new</icon>
                        <div class="pr-2">
                            {{
                                'APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS'
                                    | translate
                            }}
                        </div>
                    </a>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      MatRippleModule,
      BindingDirective,
      IconComponent,
      TranslatePipe,
      RouterLink,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=landing-upcoming-booking.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingBookingComponent, { className: "LandingUpcomingBookingComponent", filePath: "apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts", lineNumber: 338 });
})();

// apps/workplace/src/app/landing-new/landing-new.component.ts
function LandingNewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function LandingNewComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-available-now");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("md:col-span-2", ctx_r0.show_quick_actions())("md:col-span-3", !ctx_r0.show_quick_actions());
  }
}
function LandingNewComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-quick-actions");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("md:col-span-1", ctx_r0.show_available_now())("md:col-span-3", !ctx_r0.show_available_now());
  }
}
function LandingNewComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-desk-week", 3);
  }
}
function LandingNewComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "landing-colleagues-new", 6);
  }
}
function LandingNewComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var LandingNewComponent = class _LandingNewComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this.features = landingFeatures();
    this.hide_colleagues = settingSignal("hide_colleagues");
    this.hide_spaces = settingSignal("hide_landing_spaces");
    this.hide_rooms = settingSignal("hide_landing_rooms");
    this.show_quick_links = settingSignal("show_quick_links");
    this.show_quick_book = settingSignal("show_quick_book");
    this.show_available_now = computed(
      () => availableNowTabs(this.features(), !!this.hide_spaces(), !!this.hide_rooms()).length > 0,
      ...ngDevMode ? [{ debugName: "show_available_now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_quick_actions = computed(
      () => hasQuickActions(this.features(), this.show_quick_book() !== false, this.show_quick_links() !== false),
      ...ngDevMode ? [{ debugName: "show_quick_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /** Set from the `hide_nav` URL parameter when the app is embedded */
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this.subscription("poll", this._state.pollUpcomingEvents());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingNewComponent_BaseFactory;
      return function LandingNewComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingNewComponent_BaseFactory || (\u0275LandingNewComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingNewComponent)))(__ngFactoryType__ || _LandingNewComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingNewComponent, selectors: [["landing-new"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 10, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "overflow-auto"], [1, "mx-auto", "grid", "w-[80rem]", "max-w-full", "grid-cols-1", "gap-4", "p-4", "md:grid-cols-3"], [1, "md:col-span-3"], [3, "md:col-span-2", "md:col-span-3"], [3, "md:col-span-1", "md:col-span-3"], [1, "md:col-span-1"], [1, "min-h-2", "w-full", "md:col-span-3"]], template: function LandingNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, LandingNewComponent_Conditional_1_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(2, "div", 1)(3, "div", 2);
        \u0275\u0275element(4, "landing-upcoming-booking", 3);
        \u0275\u0275conditionalCreate(5, LandingNewComponent_Conditional_5_Template, 1, 4, "landing-available-now", 4);
        \u0275\u0275conditionalCreate(6, LandingNewComponent_Conditional_6_Template, 1, 4, "landing-quick-actions", 5);
        \u0275\u0275conditionalCreate(7, LandingNewComponent_Conditional_7_Template, 1, 0, "landing-desk-week", 3);
        \u0275\u0275element(8, "landing-favourites-new");
        \u0275\u0275conditionalCreate(9, LandingNewComponent_Conditional_9_Template, 1, 0, "landing-colleagues-new", 6);
        \u0275\u0275element(10, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275element(11, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, LandingNewComponent_Conditional_12_Template, 1, 0, "footer-menu");
        \u0275\u0275element(13, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav ? 1 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show_available_now() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_quick_actions() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("desks") ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("md:col-span-2", !ctx.hide_colleagues())("md:col-span-3", ctx.hide_colleagues());
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_colleagues() ? 9 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_nav ? 12 : -1);
      }
    }, dependencies: [
      RouterModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      LandingUpcomingBookingComponent,
      // LandingVirtualConciergeComponent,
      LandingAvailableNowComponent,
      LandingQuickActionsComponent,
      LandingDeskWeekComponent,
      LandingFavouritesNewComponent,
      LandingColleaguesNewComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(LandingNewComponent, [{
    type: Component,
    args: [{ selector: "landing-new", template: `
        <div class="absolute inset-0 flex flex-col overflow-hidden">
            @if (!hide_nav) {
                <topbar />
            }
            <div class="bg-base-200 relative flex h-1/2 flex-1 overflow-auto">
                <div
                    class="mx-auto grid w-[80rem] max-w-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
                >
                    <landing-upcoming-booking class="md:col-span-3" />
                    <!-- <landing-virtual-concierge class="md:col-span-3" /> -->

                    @if (show_available_now()) {
                        <landing-available-now
                            [class.md:col-span-2]="show_quick_actions()"
                            [class.md:col-span-3]="!show_quick_actions()"
                        />
                    }
                    @if (show_quick_actions()) {
                        <landing-quick-actions
                            [class.md:col-span-1]="show_available_now()"
                            [class.md:col-span-3]="!show_available_now()"
                        />
                    }
                    @if (features().includes('desks')) {
                        <landing-desk-week class="md:col-span-3" />
                    }
                    <landing-favourites-new
                        [class.md:col-span-2]="!hide_colleagues()"
                        [class.md:col-span-3]="hide_colleagues()"
                    />
                    @if (!hide_colleagues()) {
                        <landing-colleagues-new class="md:col-span-1" />
                    }
                    <div class="min-h-2 w-full md:col-span-3"></div>
                </div>
                <virtual-concierge-button />
            </div>
            @if (!hide_nav) {
                <footer-menu />
            }
            <div></div>
        </div>
    `, imports: [
      RouterModule,
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      LandingUpcomingBookingComponent,
      // LandingVirtualConciergeComponent,
      LandingAvailableNowComponent,
      LandingQuickActionsComponent,
      LandingDeskWeekComponent,
      LandingFavouritesNewComponent,
      LandingColleaguesNewComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingNewComponent, { className: "LandingNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-new.component.ts", lineNumber: 81 });
})();
export {
  LandingNewComponent
};
//# debugId=099a50c2-19f6-5974-ad30-07581c74c32a
//# sourceMappingURL=landing-new.component-OHVHA5NC.js.map
