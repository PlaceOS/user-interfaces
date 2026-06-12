import {
  AddColleaguesModalComponent,
  FullscreenEmbedComponent,
  TeamScheduleService
} from "./chunk-CIMONDXP.js";
import {
  AutoAssignedDeskModalComponent
} from "./chunk-5TOZ6ZOG.js";
import {
  LandingStateService
} from "./chunk-DAYVQTQW.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent
} from "./chunk-ZLUBY3U3.js";
import {
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  Booking,
  BookingDetailsModalComponent,
  BookingFormService,
  BuildingPipe,
  CalendarEvent,
  CommonModule,
  Component,
  EventDetailsModalComponent,
  EventFormService,
  ExploreSpacesService,
  GroupEventDetailsModalComponent,
  IconComponent,
  LevelPipe,
  MapLocateModalComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatDialog,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatRipple,
  MatRippleModule,
  MatTooltip,
  MatTooltipModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  SETTING_KEYS,
  SettingsService,
  TranslatePipe,
  UserAvatarComponent,
  __spreadValues,
  addDays,
  addWeeks,
  catchError,
  checkinBooking,
  computed,
  differenceInMinutes,
  endOfWeek,
  filter,
  format,
  getUnixTime,
  i18n,
  inject,
  isBefore,
  isSameDay,
  notifyError,
  notifySuccess,
  of,
  openConfirmModal,
  queryBookings,
  setClassMetadata,
  settingSignal,
  shareReplay,
  signal,
  startOfDay,
  startOfWeek,
  startWith,
  switchMap,
  tap,
  toObservable,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
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
  ɵɵtextInterpolate1
} from "./chunk-S4NKVKWG.js";

// apps/workplace/src/app/landing-new/landing-available-now.component.ts
var _c0 = () => ["/explore"];
var _c1 = (a0) => ({ zone: a0 });
var _forTrack0 = ($index, $item) => $item.id;
function LandingAvailableNowComponent_Conditional_4_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LandingAvailableNowComponent_Conditional_4_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.active_tab.set("desks");
      return \u0275\u0275resetView(ctx_r1.setBookingType("desk"));
    });
    \u0275\u0275text(1, " Desks ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clear", ctx_r1.active_tab() !== "desks");
  }
}
function LandingAvailableNowComponent_Conditional_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LandingAvailableNowComponent_Conditional_4_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.active_tab.set("rooms"));
    });
    \u0275\u0275text(1, " Rooms ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clear", ctx_r1.active_tab() !== "rooms");
  }
}
function LandingAvailableNowComponent_Conditional_4_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LandingAvailableNowComponent_Conditional_4_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.active_tab.set("lockers");
      return \u0275\u0275resetView(ctx_r1.setBookingType("locker"));
    });
    \u0275\u0275text(1, " Lockers ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("clear", ctx_r1.active_tab() !== "lockers");
  }
}
function LandingAvailableNowComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275conditionalCreate(1, LandingAvailableNowComponent_Conditional_4_Conditional_1_Template, 2, 2, "button", 8);
    \u0275\u0275conditionalCreate(2, LandingAvailableNowComponent_Conditional_4_Conditional_2_Template, 2, 2, "button", 8);
    \u0275\u0275conditionalCreate(3, LandingAvailableNowComponent_Conditional_4_Conditional_3_Template, 2, 2, "button", 8);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("desks") ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("spaces") ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.features().includes("lockers") ? 3 : -1);
  }
}
function LandingAvailableNowComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active_tab() === "desks" ? "desk" : ctx_r1.active_tab() === "lockers" ? "lock" : "meeting_room");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" No ", ctx_r1.active_tab() === "rooms" ? "rooms" : ctx_r1.active_tab(), " available at the moment ");
  }
}
function LandingAvailableNowComponent_For_8_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
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
function LandingAvailableNowComponent_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 6)(1, "icon", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275declareLet(4);
    \u0275\u0275pipe(5, "building");
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, LandingAvailableNowComponent_For_8_Conditional_8_Template, 2, 1, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 15);
    \u0275\u0275text(10);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "icon", 12);
    \u0275\u0275text(12, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0))("queryParams", \u0275\u0275pureFunction1(10, _c1, lvl_r6.id));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.active_tab() === "desks" ? "desk" : ctx_r1.active_tab() === "lockers" ? "lock" : "meeting_room");
    \u0275\u0275advance(2);
    const bld_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(5, 6, lvl_r6.parent_id));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(lvl_r6.display_name || lvl_r6.name);
    \u0275\u0275advance();
    \u0275\u0275conditional(bld_r7 ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.active_tab() === "rooms" ? ctx_r1.spaces_by_level()[lvl_r6.id] || 0 : ctx_r1.resources_by_level()[lvl_r6.id] || 0, " free ");
  }
}
var LandingAvailableNowComponent = class _LandingAvailableNowComponent {
  constructor() {
    this._state = inject(LandingStateService);
    this._booking_form = inject(BookingFormService);
    this._event_form = inject(EventFormService);
    this._org = inject(OrganisationService);
    this.active_tab = signal("desks", ...ngDevMode ? [{ debugName: "active_tab" }] : (
      /* istanbul ignore next */
      []
    ));
    this.active_filter = signal("nearest", ...ngDevMode ? [{ debugName: "active_filter" }] : (
      /* istanbul ignore next */
      []
    ));
    this.levels_free = this._state.level_occupancy;
    this.features = settingSignal("features", []);
    this.feature_count = computed(() => (this.features().includes("desks") ? 1 : 0) + (this.features().includes("lockers") ? 1 : 0) + (this.features().includes("spaces") ? 1 : 0), ...ngDevMode ? [{ debugName: "feature_count" }] : (
      /* istanbul ignore next */
      []
    ));
    this.all_levels = toSignal(this.levels_free, {
      initialValue: []
    });
    this.available_spaces = toSignal(this._event_form.available_spaces, { initialValue: [] });
    this.available_resources = toSignal(this._booking_form.available_resources, { initialValue: [] });
    this.spaces_by_level = computed(() => {
      const spaces = this.available_spaces();
      const mapping = {};
      for (const space of spaces) {
        const lvl = this._org.levelWithID(space.zones);
        if (lvl) {
          if (!mapping[lvl.id])
            mapping[lvl.id] = 0;
          mapping[lvl.id] += 1;
        }
      }
      return mapping;
    }, ...ngDevMode ? [{ debugName: "spaces_by_level" }] : (
      /* istanbul ignore next */
      []
    ));
    this.resources_by_level = computed(() => {
      const items = this.available_resources();
      const mapping = {};
      for (const item of items) {
        const lvl = this._org.levelWithID([item.zone.id]);
        if (lvl) {
          if (!mapping[lvl.id])
            mapping[lvl.id] = 0;
          mapping[lvl.id] += 1;
        }
      }
      return mapping;
    }, ...ngDevMode ? [{ debugName: "resources_by_level" }] : (
      /* istanbul ignore next */
      []
    ));
    this.filtered_levels = computed(() => {
      const levels = this.all_levels();
      const tab = this.active_tab();
      const spaces_map = this.spaces_by_level();
      const resources_map = this.resources_by_level();
      return levels.filter((lvl) => {
        const count = tab === "rooms" ? spaces_map[lvl.id] || 0 : resources_map[lvl.id] || 0;
        return count > 0;
      });
    }, ...ngDevMode ? [{ debugName: "filtered_levels" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  setBookingType(type) {
    this._booking_form.setOptions({ type });
  }
  static {
    this.\u0275fac = function LandingAvailableNowComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _LandingAvailableNowComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingAvailableNowComponent, selectors: [["landing-available-now"]], decls: 11, vars: 4, consts: [[1, "space-y-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "px-2", "text-lg", "font-medium"], [1, "flex", "w-full", "items-center", "space-x-1", "rounded", "bg-base-200", "p-1"], [1, "flex", "flex-col", "space-y-2", "pt-2"], [1, "flex", "flex-col", "items-center", "justify-center", "rounded-xl", "bg-base-200", "py-12", "text-center"], ["btn", "", "matRipple", "", 1, "inverse", "h-14", "w-full", "space-x-4", "text-left", 3, "routerLink", "queryParams"], ["btn", "", "matRipple", "", 1, "clear", "w-full", "underline", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "flex-1", "hover:bg-base-300", 3, "clear"], ["btn", "", "matRipple", "", 1, "flex-1", "hover:bg-base-300", 3, "click"], [1, "text-4xl", "opacity-30"], [1, "mt-2", "text-sm", "opacity-60"], [1, "text-xl"], [1, "flex-1"], [1, "text-xs", "text-base-content", "opacity-50"], [1, "rounded", "bg-secondary", "px-2", "py-1", "text-xs", "text-secondary-content"]], template: function LandingAvailableNowComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3, "Available Now");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, LandingAvailableNowComponent_Conditional_4_Template, 4, 3, "div", 3);
        \u0275\u0275elementStart(5, "div", 4);
        \u0275\u0275conditionalCreate(6, LandingAvailableNowComponent_Conditional_6_Template, 5, 2, "div", 5);
        \u0275\u0275repeaterCreate(7, LandingAvailableNowComponent_For_8_Template, 13, 12, "a", 6, _forTrack0);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "a", 7);
        \u0275\u0275text(10, "View Live Map");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.feature_count() > 0 ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.filtered_levels().length <= 0 ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.filtered_levels());
        \u0275\u0275advance(2);
        \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(3, _c0));
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      RouterLink,
      MatMenuModule,
      BuildingPipe
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
            class="space-y-2 rounded-lg border border-base-300 bg-base-100 p-4"
        >
            <div class="mb-2 flex items-center justify-between">
                <h3 class="px-2 text-lg font-medium">Available Now</h3>
            </div>
            @if (feature_count() > 0) {
                <div
                    class="flex w-full items-center space-x-1 rounded bg-base-200 p-1"
                >
                    @if (features().includes('desks')) {
                        <button
                            btn
                            matRipple
                            class="flex-1 hover:bg-base-300"
                            [class.clear]="active_tab() !== 'desks'"
                            (click)="
                                active_tab.set('desks'); setBookingType('desk')
                            "
                        >
                            Desks
                        </button>
                    }
                    @if (features().includes('spaces')) {
                        <button
                            btn
                            matRipple
                            class="flex-1 hover:bg-base-300"
                            [class.clear]="active_tab() !== 'rooms'"
                            (click)="active_tab.set('rooms')"
                        >
                            Rooms
                        </button>
                    }
                    @if (features().includes('lockers')) {
                        <button
                            btn
                            matRipple
                            class="flex-1 hover:bg-base-300"
                            [class.clear]="active_tab() !== 'lockers'"
                            (click)="
                                active_tab.set('lockers');
                                setBookingType('locker')
                            "
                        >
                            Lockers
                        </button>
                    }
                </div>
            }
            <div class="flex flex-col space-y-2 pt-2">
                @if (filtered_levels().length <= 0) {
                    <div
                        class="flex flex-col items-center justify-center rounded-xl bg-base-200 py-12 text-center"
                    >
                        <icon class="text-4xl opacity-30">{{
                            active_tab() === 'desks'
                                ? 'desk'
                                : active_tab() === 'lockers'
                                  ? 'lock'
                                  : 'meeting_room'
                        }}</icon>
                        <div class="mt-2 text-sm opacity-60">
                            No
                            {{
                                active_tab() === 'rooms'
                                    ? 'rooms'
                                    : active_tab()
                            }}
                            available at the moment
                        </div>
                    </div>
                }
                @for (lvl of filtered_levels(); track lvl.id) {
                    <a
                        btn
                        matRipple
                        [routerLink]="['/explore']"
                        [queryParams]="{ zone: lvl.id }"
                        class="inverse h-14 w-full space-x-4 text-left"
                    >
                        <icon class="text-xl">{{
                            active_tab() === 'desks'
                                ? 'desk'
                                : active_tab() === 'lockers'
                                  ? 'lock'
                                  : 'meeting_room'
                        }}</icon>
                        <div class="flex-1">
                            @let bld = lvl.parent_id | building;
                            <div>{{ lvl.display_name || lvl.name }}</div>
                            @if (bld) {
                                <div
                                    class="text-xs text-base-content opacity-50"
                                >
                                    {{ bld.display_name || bld.name }}
                                </div>
                            }
                        </div>
                        <div
                            class="rounded bg-secondary px-2 py-1 text-xs text-secondary-content"
                        >
                            {{
                                active_tab() === 'rooms'
                                    ? spaces_by_level()[lvl.id] || 0
                                    : resources_by_level()[lvl.id] || 0
                            }}
                            free
                        </div>
                        <icon class="text-xl">chevron_right</icon>
                    </a>
                }
            </div>
            <a
                btn
                matRipple
                class="clear w-full underline"
                [routerLink]="['/explore']"
                >View Live Map</a
            >
        </div>
    `,
      imports: [
        CommonModule,
        MatRippleModule,
        IconComponent,
        RouterLink,
        BuildingPipe,
        MatMenuModule
      ]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingAvailableNowComponent, { className: "LandingAvailableNowComponent", filePath: "apps/workplace/src/app/landing-new/landing-available-now.component.ts", lineNumber: 151 });
})();

// apps/workplace/src/app/landing-new/landing-colleagues-new.component.ts
var _c02 = (a0) => ({ count: a0 });
function LandingColleaguesNewComponent_Conditional_8_Template(rf, ctx) {
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
function LandingColleaguesNewComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "button", 10);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bookDeskWithSelected());
    });
    \u0275\u0275elementStart(2, "icon", 11);
    \u0275\u0275text(3, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 10);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_12_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.bookMeetingWithSelected());
    });
    \u0275\u0275elementStart(8, "icon", 11);
    \u0275\u0275text(9, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "span");
    \u0275\u0275text(11);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 2, "APP.WORKPLACE.COLLEAGUES_BOOK_DESK"));
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(12, 4, "APP.WORKPLACE.COLLEAGUES_BOOK_ROOM"));
  }
}
function LandingColleaguesNewComponent_Conditional_13_For_2_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 24);
  }
}
function LandingColleaguesNewComponent_Conditional_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 14);
    \u0275\u0275listener("change", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_mat_checkbox_change_1_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleSelection(user_r4));
    })("click", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_mat_checkbox_click_1_listener($event) {
      return $event.stopPropagation();
    });
    \u0275\u0275elementEnd();
    \u0275\u0275element(2, "a-user-avatar", 15);
    \u0275\u0275elementStart(3, "div", 16)(4, "div", 17);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "a", 18);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "button", 19)(9, "icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 20);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_button_click_13_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.bookMeeting(user_r4));
    });
    \u0275\u0275elementStart(14, "div", 21)(15, "icon", 22);
    \u0275\u0275text(16, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 20);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_button_click_20_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleFavorite(user_r4));
    });
    \u0275\u0275elementStart(21, "div", 21)(22, "icon", 22);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 20);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_button_click_27_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleTeamMember(user_r4));
    });
    \u0275\u0275elementStart(28, "div", 21)(29, "icon", 22);
    \u0275\u0275text(30);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(34, "button", 20);
    \u0275\u0275listener("click", function LandingColleaguesNewComponent_Conditional_13_For_2_Template_button_click_34_listener() {
      const user_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.removeColleague(user_r4));
    });
    \u0275\u0275elementStart(35, "div", 21)(36, "icon", 23);
    \u0275\u0275text(37, "person_remove");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(38, "div");
    \u0275\u0275text(39);
    \u0275\u0275pipe(40, "translate");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275conditionalCreate(41, LandingColleaguesNewComponent_Conditional_13_For_2_Conditional_41_Template, 1, 0, "div", 24);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const user_r4 = ctx.$implicit;
    const menu_r5 = \u0275\u0275reference(12);
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("border-secondary", ctx_r0.isSelected(user_r4));
    \u0275\u0275advance();
    \u0275\u0275property("checked", ctx_r0.isSelected(user_r4));
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r4.name);
    \u0275\u0275advance();
    \u0275\u0275property("href", "mailto:" + user_r4.email, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(user_r4.email);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r5);
    \u0275\u0275advance(10);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 15, "APP.WORKPLACE.COLLEAGUES_BOOK_MEETING"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.isFavorite(user_r4) ? "star" : "star_outline");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 17, ctx_r0.isFavorite(user_r4) ? "APP.WORKPLACE.COLLEAGUES_REMOVE_FAVORITE" : "APP.WORKPLACE.COLLEAGUES_ADD_FAVORITE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r0.isTeamMember(user_r4) ? "group_remove" : "group_add");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 19, ctx_r0.isTeamMember(user_r4) ? "APP.WORKPLACE.COLLEAGUES_REMOVE_TEAM" : "APP.WORKPLACE.COLLEAGUES_ADD_TEAM"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(40, 21, "APP.WORKPLACE.COLLEAGUES_REMOVE"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.isSelected(user_r4) ? 41 : -1);
  }
}
function LandingColleaguesNewComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, LandingColleaguesNewComponent_Conditional_13_For_2_Template, 42, 23, "div", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const contact_list_r6 = \u0275\u0275readContextLet(1);
    \u0275\u0275advance();
    \u0275\u0275repeater(contact_list_r6);
  }
}
function LandingColleaguesNewComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "img", 25);
    \u0275\u0275elementStart(2, "p", 26);
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
    this.selected_users = signal([], ...ngDevMode ? [{ debugName: "selected_users" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  openAddColleaguesModal() {
    const dialog_ref = this._dialog.open(AddColleaguesModalComponent, {
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "panel",
      data: {}
    });
    dialog_ref.afterClosed().subscribe((result) => {
      if (result) {
      }
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
      this._booking_form.newForm("desk", new Booking({}));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingColleaguesNewComponent, selectors: [["landing-colleagues-new"]], decls: 21, vars: 19, consts: [["menu", "matMenu"], [1, "rounded-lg", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], [1, "rounded", "px-2", "py-1", "text-xs", "opacity-60"], [1, "mt-2", "flex", "space-x-2"], [1, "mt-2", "flex", "w-full", "flex-col", "space-y-2"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "rounded-xl", "bg-base-200", "p-8"], ["btn", "", "matRipple", "", 1, "mt-4", "w-full", 3, "click"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "flex-1", "space-x-2", "text-sm", 3, "click"], [1, "text-lg"], [1, "relative", "flex", "items-center", "space-x-2", "overflow-hidden", "rounded", "border", "border-base-300", "p-2", 3, "border-secondary"], [1, "relative", "flex", "items-center", "space-x-2", "overflow-hidden", "rounded", "border", "border-base-300", "p-2"], [1, "-mx-1", 3, "change", "click", "checked"], [3, "user"], [1, "flex", "w-16", "flex-1", "flex-col", "leading-tight"], [1, "truncate"], ["target", "_blank", "rel", "noopener noreferrer", 1, "truncate", "text-xs", "underline", "opacity-60", 3, "href"], ["icon", "", "matRipple", "", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], [1, "text-2xl", "text-error"], [1, "absolute", "inset-0", "!m-0", "bg-secondary", "opacity-10"], ["src", "assets/icons/no-contacts.svg"], [1, "text-center", "text-sm", "opacity-60"]], template: function LandingColleaguesNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275declareLet(1);
        \u0275\u0275pipe(2, "async");
        \u0275\u0275elementStart(3, "div", 2)(4, "h3", 3);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275conditionalCreate(8, LandingColleaguesNewComponent_Conditional_8_Template, 4, 6);
        \u0275\u0275elementStart(9, "span");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(12, LandingColleaguesNewComponent_Conditional_12_Template, 13, 6, "div", 5);
        \u0275\u0275conditionalCreate(13, LandingColleaguesNewComponent_Conditional_13_Template, 3, 0, "div", 6)(14, LandingColleaguesNewComponent_Conditional_14_Template, 5, 3, "div", 7);
        \u0275\u0275elementStart(15, "button", 8);
        \u0275\u0275listener("click", function LandingColleaguesNewComponent_Template_button_click_15_listener() {
          return ctx.openAddColleaguesModal();
        });
        \u0275\u0275elementStart(16, "icon", 9);
        \u0275\u0275text(17, "person_add");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        const contact_list_r7 = \u0275\u0275storeLet(\u0275\u0275pipeBind1(2, 6, ctx.contacts));
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 9, "APP.WORKPLACE.COLLEAGUES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.selected_users().length > 0 ? 8 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind3(11, 11, "APP.WORKPLACE.COLLEAGUES_COUNT", \u0275\u0275pureFunction1(17, _c02, contact_list_r7 == null ? null : contact_list_r7.length), contact_list_r7 == null ? null : contact_list_r7.length));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.selected_users().length > 0 ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((contact_list_r7 == null ? null : contact_list_r7.length) ? 13 : 14);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 15, "APP.WORKPLACE.COLLEAGUES_ADD"));
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
      AsyncPipe,
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
        <div class="rounded-lg border border-base-300 bg-base-100 p-4">
            @let contact_list = contacts | async;
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
                    <button
                        btn
                        matRipple
                        class="flex-1 space-x-2 text-sm"
                        (click)="bookDeskWithSelected()"
                    >
                        <icon class="text-lg">desk</icon>
                        <span>{{
                            'APP.WORKPLACE.COLLEAGUES_BOOK_DESK' | translate
                        }}</span>
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1 space-x-2 text-sm"
                        (click)="bookMeetingWithSelected()"
                    >
                        <icon class="text-lg">event</icon>
                        <span>{{
                            'APP.WORKPLACE.COLLEAGUES_BOOK_ROOM' | translate
                        }}</span>
                    </button>
                </div>
            }
            @if (contact_list?.length) {
                <div class="mt-2 flex w-full flex-col space-y-2">
                    @for (user of contact_list; track user) {
                        <div
                            class="relative flex items-center space-x-2 overflow-hidden rounded border border-base-300 p-2"
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
                                <button
                                    mat-menu-item
                                    (click)="bookMeeting(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">event</icon>
                                        <div>
                                            {{
                                                'APP.WORKPLACE.COLLEAGUES_BOOK_MEETING'
                                                    | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                                <button
                                    mat-menu-item
                                    (click)="toggleFavorite(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">{{
                                            isFavorite(user) ? 'star' : 'star_outline'
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
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl">{{
                                            isTeamMember(user) ? 'group_remove' : 'group_add'
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
                                <button
                                    mat-menu-item
                                    (click)="removeColleague(user)"
                                >
                                    <div class="flex items-center space-x-2">
                                        <icon class="text-2xl text-error"
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
                                    class="absolute inset-0 !m-0 bg-secondary opacity-10"
                                ></div>
                            }
                        </div>
                    }
                </div>
            } @else {
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-2 rounded-xl bg-base-200 p-8"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingColleaguesNewComponent, { className: "LandingColleaguesNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-colleagues-new.component.ts", lineNumber: 216 });
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
    \u0275\u0275classProp("opacity-40", day_r4.is_past);
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
    \u0275\u0275classProp("opacity-40", day_r4.is_past)("bg-base-200", day_r4.is_weekend);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_19_0 = (tmp_19_0 = ctx_r2.bookings_by_date()[day_r4.id]) == null ? null : tmp_19_0.length) ? 10 : !day_r4.is_past && !day_r4.is_weekend ? 11 : 12, tmp_19_0);
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
    \u0275\u0275classProp("opacity-40", day_r8.is_past);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(day_r8.day_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", day_r8.is_today)("text-info-content", day_r8.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r8.day_number, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", day_r8.is_past);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_17_0 = (tmp_17_0 = ctx_r2.bookings_by_date()[day_r8.id]) == null ? null : tmp_17_0.length) ? 10 : !day_r8.is_past ? 11 : 12, tmp_17_0);
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
    \u0275\u0275conditionalCreate(10, LandingDeskWeekComponent_For_32_Conditional_10_Template, 2, 0)(11, LandingDeskWeekComponent_For_32_Conditional_11_Template, 3, 0, "div", 33);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_16_0;
    const day_r12 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", day_r12.is_past);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(day_r12.day_name);
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-info", day_r12.is_today)("text-info-content", day_r12.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", day_r12.day_number, " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-40", day_r12.is_past);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_16_0 = (tmp_16_0 = ctx_r2.bookings_by_date()[day_r12.id]) == null ? null : tmp_16_0.length) ? 10 : 11, tmp_16_0);
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
    this.loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
      /* istanbul ignore next */
      []
    ));
    this.selected_date = signal(Date.now(), ...ngDevMode ? [{ debugName: "selected_date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.offset_weekday = settingSignal("week_start", 0);
    this.weekdays = computed(() => {
      const days = [];
      const week_start = startOfWeek(this.selected_date(), {
        weekStartsOn: this.offset_weekday()
      });
      for (let i = 0; i < 7; i++) {
        const date = addDays(week_start, i);
        const day_of_week = date.getDay();
        days.push({
          id: format(date, "yyyy-MM-dd"),
          date: date.valueOf(),
          day_name: format(date, "EEE"),
          day_number: date.getDate(),
          is_past: isBefore(date, startOfDay(Date.now())),
          is_today: isSameDay(date, Date.now()),
          is_weekend: day_of_week === 0 || day_of_week === 6
        });
      }
      return days;
    }, ...ngDevMode ? [{ debugName: "weekdays" }] : (
      /* istanbul ignore next */
      []
    ));
    this.weekend_days = computed(() => this.weekdays().filter((day) => day.is_weekend), ...ngDevMode ? [{ debugName: "weekend_days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.week_range = computed(() => {
      const week_start = startOfWeek(this.selected_date(), {
        weekStartsOn: this.offset_weekday()
      });
      const week_end = endOfWeek(this.selected_date(), {
        weekStartsOn: this.offset_weekday()
      });
      return `${format(week_start, "dd MMM")} - ${format(week_end, "dd MMM yyyy")}`;
    }, ...ngDevMode ? [{ debugName: "week_range" }] : (
      /* istanbul ignore next */
      []
    ));
    this.is_current_week = computed(() => {
      const today = Date.now();
      const current_week_start = startOfWeek(today, {
        weekStartsOn: this.offset_weekday()
      });
      const selected_week_start = startOfWeek(this.selected_date(), {
        weekStartsOn: this.offset_weekday()
      });
      return isSameDay(current_week_start, selected_week_start);
    }, ...ngDevMode ? [{ debugName: "is_current_week" }] : (
      /* istanbul ignore next */
      []
    ));
    this._desk_bookings$ = toObservable(this.selected_date).pipe(tap(() => this.loading.set(true)), switchMap((date) => {
      const week_start = startOfWeek(date, {
        weekStartsOn: this.offset_weekday()
      });
      const week_end = endOfWeek(date, {
        weekStartsOn: this.offset_weekday()
      });
      return queryBookings({
        period_start: getUnixTime(week_start),
        period_end: getUnixTime(week_end),
        type: "desk",
        include_checked_out: true
      }).pipe(catchError(() => of([])));
    }), tap(() => this.loading.set(false)), shareReplay(1));
    this.desk_bookings = toSignal(this._desk_bookings$, {
      initialValue: []
    });
    this.bookings_by_date = computed(() => {
      const bookings = this.desk_bookings();
      const date_map = {};
      for (const booking of bookings || []) {
        const date_key = format(booking.date, "yyyy-MM-dd");
        if (!date_map[date_key])
          date_map[date_key] = [];
        date_map[date_key].push(booking);
      }
      return date_map;
    }, ...ngDevMode ? [{ debugName: "bookings_by_date" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  ngOnInit() {
    this.interval("poll_bookings", () => this.selected_date.set(this.selected_date()), 2 * 60 * 1e3);
  }
  goToToday() {
    this.selected_date.set(Date.now());
  }
  goToNextMonday() {
    const today = /* @__PURE__ */ new Date();
    const day_of_week = today.getDay();
    const days_until_monday = day_of_week === 0 ? 1 : 8 - day_of_week;
    this.selected_date.set(addDays(today, days_until_monday).valueOf());
  }
  previousWeek() {
    this.selected_date.set(addWeeks(this.selected_date(), -1).valueOf());
  }
  nextWeek() {
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
        remove_fn: async (b, s) => {
          await this._schedule.remove(b, s);
          this.selected_date.set(Date.now());
        },
        end_fn: (b) => this._schedule.end(b)
      }
    });
  }
  bookDesk(date) {
    this._booking_form.newForm("desk", new Booking({ date, booking_type: "desk" }));
    this._router.navigate(["/book", "desk"]);
    this.timeout("set_date", () => this._booking_form.form.patchValue({ date }), 100);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingDeskWeekComponent, selectors: [["landing-desk-week"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 33, vars: 24, consts: [[1, "border-base-300", "bg-base-100", "space-y-2", "rounded-lg", "border", "p-4"], [1, "flex", "flex-col", "gap-2", "md:flex-row", "md:items-center", "md:justify-between"], [1, "px-2", "text-lg", "font-medium"], [1, "px-2", "text-sm", "opacity-60"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "h-8", "text-sm", 3, "click", "disabled"], ["btn", "", "matRipple", "", 1, "inverse", "h-8", "text-sm", 3, "click", "disabled"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 1, "hover:bg-base-200", "h-12", "w-12", "rounded-lg", 3, "click", "matTooltip"], [1, "text-2xl"], [1, "flex", "flex-col", "gap-2", "pt-2", "md:hidden"], [1, "flex", "flex-col"], [1, "hidden", "gap-2", "pt-2", "md:grid", "md:grid-cols-6"], [1, "flex", "flex-col", "space-y-1"], [1, "flex", "flex-1", "flex-col"], [1, "mb-1", "flex", "items-center", "justify-center", "space-x-2", "text-sm"], [1, "flex", "items-center", "space-x-1"], [1, "text-base"], [1, "font-medium", "uppercase"], [1, "flex", "h-6", "w-6", "items-center", "justify-center", "rounded-full", "text-xs"], [1, "border-base-300", "min-h-16", "flex-1", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "space-x-2", "border-2", "border-dashed"], [1, "flex", "h-full", "min-h-10", "w-full", "items-center", "justify-center"], ["matRipple", "", 1, "bg-secondary", "text-secondary-content", "mb-2", "w-full", "rounded-lg", "p-2", "text-left", "last:mb-0", 3, "matTooltip"], ["matRipple", "", 1, "bg-secondary", "text-secondary-content", "mb-2", "w-full", "rounded-lg", "p-2", "text-left", "last:mb-0", 3, "click", "matTooltip"], [1, "text-sm"], [1, "truncate", "text-xs"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "space-x-2", "border-2", "border-dashed", 3, "click"], [1, "text-xl", "opacity-60"], [1, "text-xs", "opacity-60"], [1, "text-xl", "opacity-30"], [1, "border-base-300", "flex", "min-h-24", "flex-1", "flex-col", "space-y-2", "rounded-lg", "border", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "flex-col", "space-y-1", "border-2", "border-dashed"], [1, "flex", "h-full", "w-full", "flex-col", "items-center", "justify-center"], ["btn", "", "matRipple", "", 1, "inverse", "border-base-300", "h-full", "w-full", "flex-col", "space-y-1", "border-2", "border-dashed", 3, "click"], [1, "text-base", "opacity-40"], [1, "border-base-300", "bg-base-200", "flex", "min-h-12", "flex-1", "flex-col", "space-y-2", "rounded-lg", "border", "p-2"]], template: function LandingDeskWeekComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(31, LandingDeskWeekComponent_For_32_Template, 12, 11, "div", 14, _forTrack02);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 14, "APP.WORKPLACE.DESK_WEEK_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.week_range());
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", !ctx.is_current_week());
        \u0275\u0275property("disabled", ctx.is_current_week());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 16, "COMMON.TODAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.is_current_week());
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(14, 18, "APP.WORKPLACE.DESK_WEEK_NEXT_MONDAY"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(17, 20, "APP.WORKPLACE.DESK_WEEK_PREVIOUS"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(21, 22, "APP.WORKPLACE.DESK_WEEK_NEXT"));
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
                        [disabled]="!is_current_week()"
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
                            [class.opacity-40]="day.is_past"
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
                            [class.opacity-40]="day.is_past"
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
                            } @else if (!day.is_past && !day.is_weekend) {
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
                                [class.opacity-40]="day.is_past"
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
                                [class.opacity-40]="day.is_past"
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
                                } @else if (!day.is_past) {
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
                                [class.opacity-40]="day.is_past"
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
                                [class.opacity-40]="day.is_past"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingDeskWeekComponent, { className: "LandingDeskWeekComponent", filePath: "apps/workplace/src/app/landing-new/landing-desk-week.component.ts", lineNumber: 407 });
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
    \u0275\u0275conditional((item_r2.images == null ? null : item_r2.images.length) ? 3 : 4);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    const lvl_r4 = \u0275\u0275pipeBind1(13, 6, item_r2.zones);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", (lvl_r4 == null ? null : lvl_r4.display_name) || (lvl_r4 == null ? null : lvl_r4.name), " ");
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
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this.fav_space_ids = settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true);
    this.fav_parking_ids = settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true);
    this.fav_desk_ids = settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true);
    this.fav_locker_ids = settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true);
    this.all_spaces = toSignal(this._event_form.spaces$, {
      initialValue: []
    });
    this.all_desks = toSignal(this._org.active_building.pipe(filter((building) => !!building), switchMap(() => this._booking_form.loadResourceList("desks")), startWith([])), { initialValue: [] });
    this.all_parking = toSignal(this._org.active_building.pipe(filter((building) => !!building), switchMap(() => this._booking_form.loadResourceList("parking-spaces")), startWith([])), { initialValue: [] });
    this.all_lockers = toSignal(this._org.active_building.pipe(filter((building) => !!building), switchMap(() => this._booking_form.loadResourceList("lockers")), startWith([])), { initialValue: [] });
    this.favourites = computed(() => {
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
    }, ...ngDevMode ? [{ debugName: "favourites" }] : (
      /* istanbul ignore next */
      []
    ));
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
          this._event_form.form.patchValue({ resources: [space] });
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
        this._booking_form.form.patchValue({
          resources: [parking],
          asset_id: parking.id,
          booking_type: "parking"
        });
        this._router.navigate(["/book", "parking"]);
        break;
      case "locker":
        const locker = this.all_lockers().find((l) => l.id === item.id);
        if (!locker)
          return;
        this._booking_form.newForm("locker");
        this._booking_form.setOptions({ type: "locker" });
        this._booking_form.form.patchValue({
          resources: [locker],
          asset_id: locker.id,
          booking_type: "locker"
        });
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingFavouritesNewComponent, { className: "LandingFavouritesNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-favourites-new.component.ts", lineNumber: 165 });
})();

// apps/workplace/src/app/landing-new/landing-quick-actions.component.ts
var _c04 = () => ["/book", "desk"];
var _c12 = () => ["/book", "meeting"];
var _c2 = () => ["/book", "parking"];
var _c3 = () => ["/book", "locker"];
function LandingQuickActionsComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function LandingQuickActionsComponent_Conditional_4_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.autoAssignDesk());
    });
    \u0275\u0275elementStart(1, "div", 7)(2, "div", 8)(3, "icon", 9);
    \u0275\u0275text(4, "bolt");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 10);
    \u0275\u0275text(6, "Auto-assign Desk");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 11);
    \u0275\u0275text(8, " We'll find you a desk for today ");
    \u0275\u0275elementEnd()()();
  }
}
function LandingQuickActionsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 9);
    \u0275\u0275text(2, "desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "Book a desk");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c04));
  }
}
function LandingQuickActionsComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 9);
    \u0275\u0275text(2, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "Book a room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c12));
  }
}
function LandingQuickActionsComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 9);
    \u0275\u0275text(2, "directions_car");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "Book parking");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c2));
  }
}
function LandingQuickActionsComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon", 9);
    \u0275\u0275text(2, "lock");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 12);
    \u0275\u0275text(4, "Book locker");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 9);
    \u0275\u0275text(6, "chevron_right");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(1, _c3));
  }
}
var LandingQuickActionsComponent = class _LandingQuickActionsComponent {
  constructor() {
    this._dialog = inject(MatDialog);
    this._router = inject(Router);
    this.features = settingSignal("features", []);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingQuickActionsComponent, selectors: [["landing-quick-actions"]], decls: 11, vars: 5, consts: [[1, "space-y-2", "rounded-lg", "border", "border-base-300", "bg-base-100", "p-4"], [1, "mb-2", "flex", "items-center", "justify-between"], [1, "text-lg", "font-medium"], ["btn", "", "matRipple", "", 1, "h-16", "w-full"], [1, "font-medium"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", "space-x-4", "text-left", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "h-16", "w-full", 3, "click"], [1, "space-y-1"], [1, "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "pr-2", "font-medium"], [1, "text-xs"], [1, "flex-1"]], template: function LandingQuickActionsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "h3", 2);
        \u0275\u0275text(3, "Quick Actions");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, LandingQuickActionsComponent_Conditional_4_Template, 9, 0, "button", 3);
        \u0275\u0275elementStart(5, "h4", 4);
        \u0275\u0275text(6, "Reserve");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, LandingQuickActionsComponent_Conditional_7_Template, 7, 2, "a", 5);
        \u0275\u0275conditionalCreate(8, LandingQuickActionsComponent_Conditional_8_Template, 7, 2, "a", 5);
        \u0275\u0275conditionalCreate(9, LandingQuickActionsComponent_Conditional_9_Template, 7, 2, "a", 5);
        \u0275\u0275conditionalCreate(10, LandingQuickActionsComponent_Conditional_10_Template, 7, 2, "a", 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.features().includes("desks") ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.features().includes("desks") ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("spaces") ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("parking") ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.features().includes("lockers") ? 10 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, RouterModule, RouterLink, IconComponent], encapsulation: 2 });
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
                <h3 class="text-lg font-medium">Quick Actions</h3>
            </div>
            @if (features().includes('desks')) {
                <button
                    btn
                    matRipple
                    class="h-16 w-full"
                    (click)="autoAssignDesk()"
                >
                    <div class="space-y-1">
                        <div class="flex items-center space-x-2">
                            <icon class="text-xl">bolt</icon>
                            <div class="pr-2 font-medium">Auto-assign Desk</div>
                        </div>
                        <div class="text-xs">
                            We'll find you a desk for today
                        </div>
                    </div>
                </button>
            }
            <h4 class="font-medium">Reserve</h4>
            @if (features().includes('desks')) {
                <a
                    btn
                    matRipple
                    [routerLink]="['/book', 'desk']"
                    class="inverse w-full space-x-4 text-left"
                >
                    <icon class="text-xl">desk</icon>
                    <div class="flex-1">Book a desk</div>
                    <icon class="text-xl">chevron_right</icon>
                </a>
            }
            @if (features().includes('spaces')) {
                <a
                    btn
                    matRipple
                    [routerLink]="['/book', 'meeting']"
                    class="inverse w-full space-x-4 text-left"
                >
                    <icon class="text-xl">meeting_room</icon>
                    <div class="flex-1">Book a room</div>
                    <icon class="text-xl">chevron_right</icon>
                </a>
            }
            @if (features().includes('parking')) {
                <a
                    btn
                    matRipple
                    [routerLink]="['/book', 'parking']"
                    class="inverse w-full space-x-4 text-left"
                >
                    <icon class="text-xl">directions_car</icon>
                    <div class="flex-1">Book parking</div>
                    <icon class="text-xl">chevron_right</icon>
                </a>
            }
            @if (features().includes('lockers')) {
                <a
                    btn
                    matRipple
                    [routerLink]="['/book', 'locker']"
                    class="inverse w-full space-x-4 text-left"
                >
                    <icon class="text-xl">lock</icon>
                    <div class="flex-1">Book locker</div>
                    <icon class="text-xl">chevron_right</icon>
                </a>
            }
        </div>
    `,
      imports: [MatRippleModule, RouterModule, IconComponent]
    }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingQuickActionsComponent, { className: "LandingQuickActionsComponent", filePath: "apps/workplace/src/app/landing-new/landing-quick-actions.component.ts", lineNumber: 89 });
})();

// apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts
var _c05 = () => ["/your-bookings"];
var _c13 = () => ["/book", "meeting"];
var _c22 = () => ["/book", "desk"];
function LandingUpcomingBookingComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon");
    \u0275\u0275text(2, "schedule");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("Ends in ", ctx_r1.minutesUntilEnd(), " minutes");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "icon");
    \u0275\u0275text(2, "timelapse");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" Starts in ", ctx_r1.minutesUntilStart(), " minutes ");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "icon", 12);
    \u0275\u0275text(2, "distance");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.eventLocation());
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "icon", 12);
    \u0275\u0275text(2, "people");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx, " attendees");
  }
}
function LandingUpcomingBookingComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2)(2, "div", 3);
    \u0275\u0275element(3, "div", 4);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(7, LandingUpcomingBookingComponent_Conditional_0_Conditional_7_Template, 5, 1, "div", 5)(8, LandingUpcomingBookingComponent_Conditional_0_Conditional_8_Template, 5, 1, "div", 6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 7)(10, "div", 8)(11, "h2", 9);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "h3", 10);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 11)(16, "icon", 12);
    \u0275\u0275text(17, "event");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "div");
    \u0275\u0275text(19);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(20, LandingUpcomingBookingComponent_Conditional_0_Conditional_20_Template, 5, 1, "div", 11);
    \u0275\u0275conditionalCreate(21, LandingUpcomingBookingComponent_Conditional_0_Conditional_21_Template, 5, 1, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 14)(23, "div", 15)(24, "button", 16);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_24_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.checkIn());
    });
    \u0275\u0275elementStart(25, "icon", 17);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(27, "div", 18);
    \u0275\u0275text(28);
    \u0275\u0275pipe(29, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(30, "button", 19);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_30_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit());
    });
    \u0275\u0275elementStart(31, "icon", 17);
    \u0275\u0275text(32, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(33, "div", 15)(34, "button", 20);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_34_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewDetails());
    });
    \u0275\u0275elementStart(35, "icon", 17);
    \u0275\u0275text(36, "info");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(37, "div", 18);
    \u0275\u0275text(38, "View Details");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(39, "button", 21);
    \u0275\u0275listener("click", function LandingUpcomingBookingComponent_Conditional_0_Template_button_click_39_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove());
    });
    \u0275\u0275elementStart(40, "icon", 17);
    \u0275\u0275text(41, "delete");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(42, "a", 22)(43, "icon", 17);
    \u0275\u0275text(44, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(45, "div", 18);
    \u0275\u0275text(46);
    \u0275\u0275pipe(47, "translate");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    let tmp_8_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 18, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.isInProgress() ? 7 : ctx_r1.minutesUntilStart() >= 0 ? 8 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eventTitle(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.eventLocation(), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.eventTimeDisplay());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.eventLocation() ? 20 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((tmp_8_0 = ctx_r1.attendeeCount()) ? 21 : -1, tmp_8_0);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("white", !ctx_r1.isCheckedIn())("bg-success", ctx_r1.isCheckedIn())("text-success-content", ctx_r1.isCheckedIn());
    \u0275\u0275property("disabled", !ctx_r1.canCheckin() || ctx_r1.isCheckedIn());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r1.isCheckedIn() ? "done" : "check_circle");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(29, 20, ctx_r1.isCheckedIn() ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
    \u0275\u0275advance(14);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(24, _c05));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(47, 22, "APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS"), " ");
  }
}
function LandingUpcomingBookingComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1)(1, "div", 23);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 24);
    \u0275\u0275text(4, "No Upcoming Bookings");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "h2", 25);
    \u0275\u0275text(6, "Your schedule is clear");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "p", 26);
    \u0275\u0275text(8, " Ready to plan your day? Book a space or find a colleague. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 27)(10, "div", 28)(11, "a", 29)(12, "div");
    \u0275\u0275text(13, "Book a Space");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(14, "a", 30)(15, "div");
    \u0275\u0275text(16, "Find Desk");
    \u0275\u0275elementEnd()()();
    \u0275\u0275element(17, "div", 31);
    \u0275\u0275elementStart(18, "a", 32)(19, "icon", 17);
    \u0275\u0275text(20, "open_in_new");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(11);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(6, _c13));
    \u0275\u0275advance(3);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(7, _c22));
    \u0275\u0275advance(4);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(8, _c05));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 4, "APP.WORKPLACE.UPCOMING_VIEW_BOOKINGS"), " ");
  }
}
var LandingUpcomingBookingComponent = class _LandingUpcomingBookingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(LandingStateService);
    this._schedule = inject(ScheduleStateService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._router = inject(Router);
    this.upcomingEvents = toSignal(this._state.upcoming_events);
    this.edit_fn = (i) => this._schedule.edit(i);
    this.edit_booking_fn = (i) => this._schedule.editBooking(i);
    this.remove_fn = (i, s) => this._schedule.remove(i, s);
    this.end_fn = (i) => this._schedule.end(i);
    this.nextEvent = computed(() => {
      const events = this.upcomingEvents();
      return events?.[0];
    }, ...ngDevMode ? [{ debugName: "nextEvent" }] : (
      /* istanbul ignore next */
      []
    ));
    this.canCheckin = computed(() => {
      const event = this.nextEvent();
      const can_checkin = event instanceof Booking ? !event.checked_out_at : event?.can_check_in;
      return can_checkin && (event.state === "upcoming" || event.state === "started" || event.state === "in_progress") && event.status !== "declined";
    }, ...ngDevMode ? [{ debugName: "canCheckin" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eventTitle = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return "";
      if (event instanceof Booking) {
        return event.description || event.asset_name || "Booking";
      }
      return event.title || "Event";
    }, ...ngDevMode ? [{ debugName: "eventTitle" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eventLocation = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return "";
      if (event instanceof Booking) {
        return event.asset_name || "";
      }
      return event.resources?.[0]?.display_name || event.location || "";
    }, ...ngDevMode ? [{ debugName: "eventLocation" }] : (
      /* istanbul ignore next */
      []
    ));
    this.eventTimeDisplay = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return "";
      const start = format(event.date, "h:mm a");
      const end = format(event.date + event.duration * 60 * 1e3, "h:mm a");
      const day = isSameDay(event.date, Date.now()) ? "Today" : format(event.date, "MMM d");
      return `${start} - ${end} \xB7 ${day}`;
    }, ...ngDevMode ? [{ debugName: "eventTimeDisplay" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isInProgress = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return false;
      const now = Date.now();
      return now >= event.date && now < event.date_end;
    }, ...ngDevMode ? [{ debugName: "isInProgress" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minutesUntilStart = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return 0;
      return differenceInMinutes(event.date, Date.now());
    }, ...ngDevMode ? [{ debugName: "minutesUntilStart" }] : (
      /* istanbul ignore next */
      []
    ));
    this.minutesUntilEnd = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return 0;
      const end_time = event.date + event.duration * 60 * 1e3;
      return differenceInMinutes(end_time, Date.now());
    }, ...ngDevMode ? [{ debugName: "minutesUntilEnd" }] : (
      /* istanbul ignore next */
      []
    ));
    this.isCheckedIn = computed(() => {
      const event = this.nextEvent();
      if (!event || !(event instanceof Booking))
        return false;
      return event.checked_in;
    }, ...ngDevMode ? [{ debugName: "isCheckedIn" }] : (
      /* istanbul ignore next */
      []
    ));
    this.attendeeCount = computed(() => {
      const event = this.nextEvent();
      if (!event)
        return 0;
      if (event instanceof CalendarEvent) {
        return event.attendees?.length || 0;
      }
      return 0;
    }, ...ngDevMode ? [{ debugName: "attendeeCount" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  async checkIn() {
    const event = this.nextEvent();
    if (!event || !(event instanceof Booking))
      return;
    try {
      await checkinBooking(event.id, true).toPromise();
      notifySuccess("Successfully checked in");
      this._state.refreshUpcomingEvents();
    } catch (error) {
      notifyError("Failed to check in");
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
          end_fn: this.end_fn
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
    event instanceof CalendarEvent ? this.edit_fn(event) : this.edit_booking_fn(event);
  }
  remove() {
    const event = this.nextEvent();
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
      const resource = __spreadValues(__spreadValues({}, event.resources?.[0] || {}), event.system || {});
      zones = resource?.zones || [];
      itemData = {
        id: resource?.id,
        name: resource?.display_name || resource?.name || event.title,
        map_id: resource?.map_id || resource?.id,
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
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275LandingUpcomingBookingComponent_BaseFactory;
      return function LandingUpcomingBookingComponent_Factory(__ngFactoryType__) {
        return (\u0275LandingUpcomingBookingComponent_BaseFactory || (\u0275LandingUpcomingBookingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_LandingUpcomingBookingComponent)))(__ngFactoryType__ || _LandingUpcomingBookingComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingUpcomingBookingComponent, selectors: [["landing-upcoming-booking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 2, vars: 1, consts: [[1, "bg-grad", "border-base-300", "text-brand-content", "col-span-2", "space-y-2", "rounded-lg", "border", "p-4"], [1, "bg-grad", "border-base-300", "text-brand-content", "col-span-2", "flex", "min-h-48", "flex-col", "items-start", "justify-center", "space-y-2", "rounded-lg", "border", "p-4"], [1, "flex", "w-full", "items-center", "justify-between"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm", "capitalize"], [1, "bg-brand-content", "absolute", "inset-0", "opacity-20"], [1, "flex", "w-48", "items-center", "space-x-2", "px-2", "text-center"], [1, "flex", "min-w-48", "items-center", "space-x-2", "px-2", "text-center"], [1, "flex", "w-full", "flex-col", "items-center", "justify-between", "space-y-2", "sm:flex-row", "sm:space-y-0"], [1, "w-full", "sm:flex-1"], [1, "text-2xl", "font-medium"], [1, "mb-2", "text-lg", "font-medium"], [1, "mb-1", "flex", "items-center", "space-x-2"], [1, "text-xl"], [1, "flex", "items-center", "space-x-2"], [1, "flex", "w-full", "flex-col", "items-end", "space-y-2", "sm:flex-1"], [1, "flex", "w-full", "items-center", "space-x-2", "sm:w-56"], ["btn", "", "matRipple", "", 1, "flex-1", "space-x-2", 3, "click", "disabled"], [1, "text-2xl"], [1, "pr-2"], ["btn", "", "matRiple", "", "matTooltip", "Edit Booking", "matTooltipPosition", "left", 1, "white", "inverse", "h-12", "w-12", "px-0", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "white", "flex", "flex-1", "space-x-2", 3, "click"], ["btn", "", "matRiple", "", "matTooltip", "Delete Booking", "matTooltipPosition", "left", 1, "white", "inverse", "h-12", "w-12", "px-0", 3, "click"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "space-x-2", "sm:w-56", 3, "routerLink"], [1, "relative", "overflow-hidden", "rounded", "px-2", "py-1", "text-sm"], [1, "capitalize"], [1, "text-3xl", "font-medium"], [1, "text-base", "opacity-90"], [1, "flex", "w-full", "flex-wrap", "gap-3", "pt-2"], [1, "flex", "w-full", "flex-wrap", "gap-3", "sm:w-auto"], ["btn", "", "matRipple", "", 1, "white", "min-w-48", "flex-1", "space-x-2", "sm:w-48", "sm:flex-0", 3, "routerLink"], ["btn", "", "matRipple", "", 1, "inverse", "white", "min-w-48", "flex-1", "space-x-2", "sm:w-48", "sm:flex-0", 3, "routerLink"], [1, "hidden", "w-px", "flex-1", "sm:block"], ["btn", "", "matRipple", "", 1, "inverse", "white", "w-full", "space-x-2", "sm:w-52", 3, "routerLink"]], template: function LandingUpcomingBookingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, LandingUpcomingBookingComponent_Conditional_0_Template, 48, 25, "div", 0)(1, LandingUpcomingBookingComponent_Conditional_1_Template, 24, 9, "div", 1);
      }
      if (rf & 2) {
        let tmp_0_0;
        \u0275\u0275conditional((tmp_0_0 = ctx.nextEvent()) ? 0 : 1, tmp_0_0);
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      IconComponent,
      RouterLink,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe
    ], styles: ["\n.bg-grad[_ngcontent-%COMP%] {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=landing-upcoming-booking.component.css.map */"] });
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
                            <div>Ends in {{ minutesUntilEnd() }} minutes</div>
                        </div>
                    } @else if (minutesUntilStart() >= 0) {
                        <div
                            class="flex min-w-48 items-center space-x-2 px-2 text-center"
                        >
                            <icon>timelapse</icon>
                            <div>
                                Starts in {{ minutesUntilStart() }} minutes
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
                        <h3 class="mb-2 text-lg font-medium">
                            {{ eventLocation() }}
                        </h3>
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
                                <div>{{ count }} attendees</div>
                            </div>
                        }
                    </div>
                    <div
                        class="flex w-full flex-col items-end space-y-2 sm:flex-1"
                    >
                        <div class="flex w-full items-center space-x-2 sm:w-56">
                            <button
                                btn
                                matRipple
                                [disabled]="!canCheckin() || isCheckedIn()"
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
                            <button
                                btn
                                matRiple
                                matTooltip="Edit Booking"
                                matTooltipPosition="left"
                                class="white inverse h-12 w-12 px-0"
                                (click)="edit()"
                            >
                                <icon class="text-2xl">edit</icon>
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
                                <div class="pr-2">View Details</div>
                            </button>
                            <button
                                btn
                                matRiple
                                matTooltip="Delete Booking"
                                matTooltipPosition="left"
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
                    <div class="capitalize">No Upcoming Bookings</div>
                </div>
                <h2 class="text-3xl font-medium">Your schedule is clear</h2>
                <p class="text-base opacity-90">
                    Ready to plan your day? Book a space or find a colleague.
                </p>
                <div class="flex w-full flex-wrap gap-3 pt-2">
                    <div class="flex w-full flex-wrap gap-3 sm:w-auto">
                        <a
                            btn
                            matRipple
                            class="white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                            [routerLink]="['/book', 'meeting']"
                        >
                            <div>Book a Space</div>
                        </a>
                        <a
                            btn
                            matRipple
                            class="inverse white min-w-48 flex-1 space-x-2 sm:w-48 sm:flex-0"
                            [routerLink]="['/book', 'desk']"
                        >
                            <div>Find Desk</div>
                        </a>
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
      IconComponent,
      TranslatePipe,
      RouterLink,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;c8abda7309ed85adf85fe922798ae661c676d08c3d0155d4e4eb34a85f1a66c1;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts */\n.bg-grad {\n  background:\n    linear-gradient(\n      105deg,\n      var(--brand-100) 0%,\n      var(--brand-200) 100%);\n}\n/*# sourceMappingURL=landing-upcoming-booking.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingUpcomingBookingComponent, { className: "LandingUpcomingBookingComponent", filePath: "apps/workplace/src/app/landing-new/landing-upcoming-booking.component.ts", lineNumber: 244 });
})();

// apps/workplace/src/app/landing-new/landing-new.component.ts
function LandingNewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar", 1);
  }
}
function LandingNewComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function LandingNewComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.viewVirtualConcierge());
    });
    \u0275\u0275element(1, "img", 10);
    \u0275\u0275elementEnd();
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
    this._dialog = inject(MatDialog);
    this.hide_nav = signal(false, ...ngDevMode ? [{ debugName: "hide_nav" }] : (
      /* istanbul ignore next */
      []
    ));
    this.virtual_concierge_url = settingSignal("virtual_concierge_url", "");
  }
  ngOnInit() {
    this.subscription("poll", this._state.pollUpcomingEvents());
  }
  viewVirtualConcierge() {
    this._dialog.open(FullscreenEmbedComponent, {
      data: this.virtual_concierge_url()
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _LandingNewComponent, selectors: [["landing-new"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 14, vars: 3, consts: [[1, "absolute", "inset-0", "flex", "flex-col", "overflow-hidden"], [1, "z-10"], [1, "relative", "flex", "h-1/2", "flex-1", "overflow-auto", "bg-base-200"], [1, "mx-auto", "grid", "w-[80rem]", "max-w-full", "grid-cols-1", "gap-4", "p-4", "md:grid-cols-3"], [1, "md:col-span-3"], [1, "md:col-span-2"], [1, "md:col-span-1"], [1, "min-h-2", "w-full", "md:col-span-3"], ["icon", "", "matRipple", "", 1, "absolute", "left-2", "top-1/2", "h-16", "w-16", "-translate-y-1/2", "bg-secondary"], ["icon", "", "matRipple", "", 1, "absolute", "left-2", "top-1/2", "h-16", "w-16", "-translate-y-1/2", "bg-secondary", 3, "click"], ["src", "assets/icons/ben_icon.svg", 1, "z-10", "h-12"]], template: function LandingNewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, LandingNewComponent_Conditional_1_Template, 1, 0, "topbar", 1);
        \u0275\u0275elementStart(2, "div", 2)(3, "div", 3);
        \u0275\u0275element(4, "landing-upcoming-booking", 4)(5, "landing-available-now", 5)(6, "landing-quick-actions", 6)(7, "landing-desk-week", 4)(8, "landing-favourites-new", 5)(9, "landing-colleagues-new", 6)(10, "div", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, LandingNewComponent_Conditional_11_Template, 2, 0, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, LandingNewComponent_Conditional_12_Template, 1, 0, "footer-menu");
        \u0275\u0275element(13, "div");
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav() ? 1 : -1);
        \u0275\u0275advance(10);
        \u0275\u0275conditional(ctx.virtual_concierge_url() ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav() ? 12 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      RouterModule,
      TopbarComponent,
      FooterMenuComponent,
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
            @if (!hide_nav()) {
                <topbar class="z-10" />
            }
            <div class="relative flex h-1/2 flex-1 overflow-auto bg-base-200">
                <div
                    class="mx-auto grid w-[80rem] max-w-full grid-cols-1 gap-4 p-4 md:grid-cols-3"
                >
                    <landing-upcoming-booking class="md:col-span-3" />
                    <!-- <landing-virtual-concierge class="md:col-span-3" /> -->

                    <landing-available-now class="md:col-span-2" />
                    <landing-quick-actions class="md:col-span-1" />
                    <landing-desk-week class="md:col-span-3" />
                    <landing-favourites-new class="md:col-span-2" />
                    <landing-colleagues-new class="md:col-span-1" />
                    <div class="min-h-2 w-full md:col-span-3"></div>
                </div>
                @if (virtual_concierge_url()) {
                    <button
                        icon
                        matRipple
                        class="absolute left-2 top-1/2 h-16 w-16 -translate-y-1/2 bg-secondary"
                        (click)="viewVirtualConcierge()"
                    >
                        <img
                            class="z-10 h-12"
                            src="assets/icons/ben_icon.svg"
                        />
                    </button>
                }
            </div>
            @if (!hide_nav()) {
                <footer-menu />
            }
            <div></div>
        </div>
    `, imports: [
      MatRippleModule,
      RouterModule,
      TopbarComponent,
      FooterMenuComponent,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(LandingNewComponent, { className: "LandingNewComponent", filePath: "apps/workplace/src/app/landing-new/landing-new.component.ts", lineNumber: 73 });
})();
export {
  LandingNewComponent
};
//# sourceMappingURL=landing-new.component-ZDFHVEE6.js.map
