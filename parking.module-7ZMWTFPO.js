import {
  ParkingStateService
} from "./chunk-R2M3FZNK.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-VVG677PC.js";
import {
  ExploreParkingService
} from "./chunk-3EHGU3S4.js";
import {
  BookingRulesModalComponent
} from "./chunk-PCTWXLA5.js";
import "./chunk-4GE6FW4S.js";
import {
  SearchbarComponent
} from "./chunk-FZPE2YSK.js";
import {
  DateOptionsComponent
} from "./chunk-J55DB2VV.js";
import "./chunk-WU4ZQASG.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-5O7QTLTR.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BuildingPipe,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  ExploreStateService,
  FormsModule,
  FullscreenModalShellComponent,
  IconComponent,
  Input,
  InteractiveMapComponent,
  MAT_DIALOG_DATA,
  MatDialog,
  MatFormField,
  MatFormFieldModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatOption,
  MatProgressBar,
  MatProgressBarModule,
  MatRipple,
  MatRippleModule,
  MatSelect,
  MatSelectModule,
  MatTooltip,
  MatTooltipModule,
  NavigationEnd,
  NgControlStatus,
  NgModel,
  NgModule,
  OrganisationService,
  Router,
  RouterLink,
  RouterModule,
  RouterOutlet,
  SettingsService,
  SimpleTableComponent,
  TranslatePipe,
  __spreadProps,
  __spreadValues,
  addDays,
  combineLatest,
  computed,
  currentUser,
  debounceTime,
  effect,
  firstTruthyValueFrom,
  format,
  i18n,
  inject,
  input,
  isSameDay,
  lastValueFrom,
  map,
  nextValueFrom,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfWeek,
  timer,
  toSignal,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalBranchCreate,
  ɵɵconditionalCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
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
  ɵɵpipeBind2,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵpureFunction6,
  ɵɵpureFunction7,
  ɵɵpureFunction8,
  ɵɵpureFunctionV,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-32WFR5TQ.js";

// apps/concierge/src/app/parking/parking-bookings-week-view.component.ts
var _c0 = () => [];
var _forTrack0 = ($index, $item) => $item.id + "-" + $item.instance;
function ParkingBookingsWeekViewComponent_For_3_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function ParkingBookingsWeekViewComponent_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 5);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParkingBookingsWeekViewComponent_For_3_Conditional_4_Template, 3, 3, "div", 6);
    \u0275\u0275element(5, "div", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, date_r1, "EEE, MMM d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_today(date_r1) ? 4 : -1);
  }
}
function ParkingBookingsWeekViewComponent_For_6_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 10)(2, "div", 11);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_6_For_2_Template_button_click_4_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.edit_reservation()(event_r4));
    });
    \u0275\u0275elementStart(6, "icon", 13);
    \u0275\u0275text(7, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(8, "div", 14);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275pipe(11, "date");
    \u0275\u0275pipe(12, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "div", 15);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 14);
    \u0275\u0275text(16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 16)(18, "div", 17);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 18)(22, "button", 12);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_6_For_2_Template_button_click_22_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve()(event_r4));
    });
    \u0275\u0275elementStart(24, "icon", 13);
    \u0275\u0275text(25, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(26, "button", 12);
    \u0275\u0275pipe(27, "translate");
    \u0275\u0275listener("click", function ParkingBookingsWeekViewComponent_For_6_For_2_Template_button_click_26_listener() {
      const event_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject()(event_r4));
    });
    \u0275\u0275elementStart(28, "icon", 13);
    \u0275\u0275text(29, "event_busy");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r4 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("line-through", event_r4.status === "ended");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", event_r4.asset_name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("disabled", event_r4.checked_in || event_r4.state === "in_progress" || event_r4.status === "ended" || event_r4.instance)("matTooltip", \u0275\u0275pipeBind1(5, 29, "APP.CONCIERGE.PARKING_EDIT"));
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r4.all_day || event_r4.duration > 12 * 60 ? \u0275\u0275pipeBind1(10, 31, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(11, 33, event_r4.date, ctx_r1.time_format()) + " - " + \u0275\u0275pipeBind2(12, 36, event_r4.date_end, ctx_r1.time_format()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r4.user_name || event_r4.user_email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r4 == null ? null : event_r4.extension_data == null ? null : event_r4.extension_data.plate_number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", (event_r4 == null ? null : event_r4.status) === "approved")("text-success-content", (event_r4 == null ? null : event_r4.status) === "approved")("bg-error", (event_r4 == null ? null : event_r4.status) === "declined")("text-error-content", (event_r4 == null ? null : event_r4.status) === "declined")("bg-neutral", (event_r4 == null ? null : event_r4.status) === "ended")("text-neutral-content", (event_r4 == null ? null : event_r4.status) === "ended")("bg-warning", (event_r4 == null ? null : event_r4.status) === "tentative")("text-warning-content", (event_r4 == null ? null : event_r4.status) === "tentative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 39, ctx_r1.status_label(event_r4 == null ? null : event_r4.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (event_r4 == null ? null : event_r4.status) === "approved" || (event_r4 == null ? null : event_r4.status) === "ended")("matTooltip", \u0275\u0275pipeBind1(23, 41, "APP.CONCIERGE.PARKING_APPROVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", (event_r4 == null ? null : event_r4.status) === "declined" || (event_r4 == null ? null : event_r4.status) === "ended")("matTooltip", \u0275\u0275pipeBind1(27, 43, "APP.CONCIERGE.PARKING_DECLINE"));
  }
}
function ParkingBookingsWeekViewComponent_For_6_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1, " No bookings ");
    \u0275\u0275elementEnd();
  }
}
function ParkingBookingsWeekViewComponent_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ParkingBookingsWeekViewComponent_For_6_For_2_Template, 30, 45, "div", 8, _forTrack0, false, ParkingBookingsWeekViewComponent_For_6_ForEmpty_3_Template, 2, 0, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.events_map()[date_r5] || \u0275\u0275pureFunction0(1, _c0));
  }
}
var ParkingBookingsWeekViewComponent = class _ParkingBookingsWeekViewComponent {
  constructor() {
    this.booking_events = input([], ...ngDevMode ? [{ debugName: "booking_events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.date = input(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.week_start = input(0, ...ngDevMode ? [{ debugName: "week_start" }] : (
      /* istanbul ignore next */
      []
    ));
    this.time_format = input("shortTime", ...ngDevMode ? [{ debugName: "time_format" }] : (
      /* istanbul ignore next */
      []
    ));
    this.approve = input(() => void 0, ...ngDevMode ? [{ debugName: "approve" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reject = input(() => void 0, ...ngDevMode ? [{ debugName: "reject" }] : (
      /* istanbul ignore next */
      []
    ));
    this.edit_reservation = input(() => void 0, ...ngDevMode ? [{ debugName: "edit_reservation" }] : (
      /* istanbul ignore next */
      []
    ));
    this.days = computed(() => new Array(7).fill(0).map((_, index) => addDays(startOfWeek(this.date(), {
      weekStartsOn: this.week_start()
    }), index).valueOf()), ...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events_map = computed(() => {
      const data = {};
      const day_list = this.days();
      const events = this.booking_events();
      for (const day of day_list) {
        const day_key = format(day, "yyyy-MM-dd");
        data[day] = events.filter((event) => format(event.date, "yyyy-MM-dd") === day_key).sort((a, b) => a.date - b.date);
      }
      return data;
    }, ...ngDevMode ? [{ debugName: "events_map" }] : (
      /* istanbul ignore next */
      []
    ));
    this.is_today = (date) => isSameDay(date, Date.now());
    this.status_label = (status) => status === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : status === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING";
  }
  static {
    this.\u0275fac = function ParkingBookingsWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingBookingsWeekViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsWeekViewComponent, selectors: [["parking-bookings-week-view"]], inputs: { booking_events: [1, "booking_events"], date: [1, "date"], week_start: [1, "week_start"], time_format: [1, "time_format"], approve: [1, "approve"], reject: [1, "reject"], edit_reservation: [1, "edit_reservation"] }, decls: 7, vars: 4, consts: [["timeline", "", 1, "z-0", "grid", "h-full", "w-full", "flex-1", "overflow-auto"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-full", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-64", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight"], ["date-blocks", "", 1, "relative", "flex", "min-h-full", "min-w-full", "overflow-hidden"], [1, "border-base-200", "min-w-64", "flex-1", "space-y-2", "overflow-auto", "border-r", "p-2"], [1, "truncate"], [1, "text-info", "absolute", "bottom-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "border-base-300", "bg-base-100", "space-y-1", "rounded-sm", "border", "p-2"], [1, "text-base-content/50", "rounded-sm", "p-4", "text-center", "text-xs", "uppercase"], [1, "flex", "items-start", "justify-between"], [1, "text-sm", "font-medium"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "text-xl"], [1, "text-xs", "opacity-60"], [1, "truncate", "text-xs"], [1, "flex", "items-center", "justify-between"], [1, "rounded-full", "px-2", "py-1", "text-xs"], [1, "flex", "items-center", "space-x-1"]], template: function ParkingBookingsWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275repeaterCreate(2, ParkingBookingsWeekViewComponent_For_3_Template, 6, 5, "div", 2, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 3);
        \u0275\u0275repeaterCreate(5, ParkingBookingsWeekViewComponent_For_6_Template, 4, 2, "div", 4, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275styleProp("width", ctx.days().length * 16 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.days().length * 16 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-rows: 3rem auto;\n}\n/*# sourceMappingURL=parking-bookings-week-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsWeekViewComponent, [{
    type: Component,
    args: [{ selector: "parking-bookings-week-view", template: `
        <div timeline class="z-0 grid h-full w-full flex-1 overflow-auto">
            <div
                day-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-full items-center border-b"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="relative flex h-full min-w-64 flex-1 flex-col items-center justify-center py-2 leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' }}
                        </div>
                        @if (is_today(date)) {
                            <div
                                class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-xs"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                date-blocks
                class="relative flex min-h-full min-w-full overflow-hidden"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="border-base-200 min-w-64 flex-1 space-y-2 overflow-auto border-r p-2"
                    >
                        @for (
                            event of events_map()[date] || [];
                            track event.id + '-' + event.instance
                        ) {
                            <div
                                class="border-base-300 bg-base-100 space-y-1 rounded-sm border p-2"
                            >
                                <div class="flex items-start justify-between">
                                    <div
                                        class="text-sm font-medium"
                                        [class.line-through]="
                                            event.status === 'ended'
                                        "
                                    >
                                        {{ event.asset_name }}
                                    </div>
                                    <button
                                        icon
                                        matRipple
                                        [disabled]="
                                            event.checked_in ||
                                            event.state === 'in_progress' ||
                                            event.status === 'ended' ||
                                            event.instance
                                        "
                                        (click)="edit_reservation()(event)"
                                        [matTooltip]="
                                            'APP.CONCIERGE.PARKING_EDIT'
                                                | translate
                                        "
                                    >
                                        <icon class="text-xl">edit</icon>
                                    </button>
                                </div>
                                <div class="text-xs opacity-60">
                                    {{
                                        event.all_day ||
                                        event.duration > 12 * 60
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (event.date
                                                  | date: time_format()) +
                                              ' - ' +
                                              (event.date_end
                                                  | date: time_format())
                                    }}
                                </div>
                                <div class="truncate text-xs">
                                    {{ event.user_name || event.user_email }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ event?.extension_data?.plate_number }}
                                </div>
                                <div class="flex items-center justify-between">
                                    <div
                                        class="rounded-full px-2 py-1 text-xs"
                                        [class.bg-success]="
                                            event?.status === 'approved'
                                        "
                                        [class.text-success-content]="
                                            event?.status === 'approved'
                                        "
                                        [class.bg-error]="
                                            event?.status === 'declined'
                                        "
                                        [class.text-error-content]="
                                            event?.status === 'declined'
                                        "
                                        [class.bg-neutral]="
                                            event?.status === 'ended'
                                        "
                                        [class.text-neutral-content]="
                                            event?.status === 'ended'
                                        "
                                        [class.bg-warning]="
                                            event?.status === 'tentative'
                                        "
                                        [class.text-warning-content]="
                                            event?.status === 'tentative'
                                        "
                                    >
                                        {{
                                            status_label(event?.status)
                                                | translate
                                        }}
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <button
                                            icon
                                            matRipple
                                            (click)="approve()(event)"
                                            [disabled]="
                                                event?.status === 'approved' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_APPROVE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_available</icon
                                            >
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            (click)="reject()(event)"
                                            [disabled]="
                                                event?.status === 'declined' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_DECLINE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_busy</icon
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        } @empty {
                            <div
                                class="text-base-content/50 rounded-sm p-4 text-center text-xs uppercase"
                            >
                                No bookings
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;e073a610593341187cf71d289da6c136fc8a7598b2f83415c59d19a8e1c34cdf;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-bookings-week-view.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n[timeline] {\n  grid-template-rows: 3rem auto;\n}\n/*# sourceMappingURL=parking-bookings-week-view.component.css.map */\n"] }]
  }], null, { booking_events: [{ type: Input, args: [{ isSignal: true, alias: "booking_events", required: false }] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], time_format: [{ type: Input, args: [{ isSignal: true, alias: "time_format", required: false }] }], approve: [{ type: Input, args: [{ isSignal: true, alias: "approve", required: false }] }], reject: [{ type: Input, args: [{ isSignal: true, alias: "reject", required: false }] }], edit_reservation: [{ type: Input, args: [{ isSignal: true, alias: "edit_reservation", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsWeekViewComponent, { className: "ParkingBookingsWeekViewComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-week-view.component.ts", lineNumber: 202 });
})();

// apps/concierge/src/app/parking/parking-bookings-list.component.ts
var _c02 = () => [];
var _c1 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4.75rem", sortable: false });
var _c2 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c3 = (a0) => ({ key: "asset_name", name: a0 });
var _c4 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "booked_by_name", name: a0, content: a1 });
var _c6 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1, size: "10rem", sortable: false });
var _c7 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c8 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c9 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c10 = (a0) => ({ time: a0 });
function ParkingBookingsListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-bookings-week-view", 9);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_9_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("booking_events", \u0275\u0275pipeBind1(1, 7, ctx_r0.filtered_events) || \u0275\u0275pureFunction0(11, _c02))("date", ((tmp_9_0 = \u0275\u0275pipeBind1(2, 9, ctx_r0.options)) == null ? null : tmp_9_0.date) || 0)("week_start", ctx_r0.week_start)("time_format", ctx_r0.time_format)("approve", ctx_r0.approve)("reject", ctx_r0.reject)("edit_reservation", ctx_r0.editReservation);
  }
}
function ParkingBookingsListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275pipe(9, "translate");
  }
  if (rf & 2) {
    let tmp_10_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const date_template_r2 = \u0275\u0275reference(6);
    const person_template_r3 = \u0275\u0275reference(8);
    const host_template_r4 = \u0275\u0275reference(10);
    const state_template_r5 = \u0275\u0275reference(12);
    const plate_template_r6 = \u0275\u0275reference(14);
    const status_template_r7 = \u0275\u0275reference(16);
    const action_template_r8 = \u0275\u0275reference(18);
    \u0275\u0275property("data", ctx_r0.filtered_events)("columns", \u0275\u0275pureFunction8(45, _c9, \u0275\u0275pureFunction2(23, _c1, \u0275\u0275pipeBind1(1, 5, "COMMON.STATUS_BUSY"), state_template_r5), \u0275\u0275pureFunction2(26, _c2, \u0275\u0275pipeBind1(2, 7, "FORM.TIME"), date_template_r2), \u0275\u0275pureFunction1(29, _c3, \u0275\u0275pipeBind1(3, 9, "APP.CONCIERGE.PARKING_BAY_NUMBER")), \u0275\u0275pureFunction2(31, _c4, \u0275\u0275pipeBind1(4, 11, "APP.CONCIERGE.PARKING_RESERVED_FOR"), person_template_r3), \u0275\u0275pureFunction2(34, _c5, \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.PARKING_RESERVED_BY"), host_template_r4), \u0275\u0275pureFunction2(37, _c6, \u0275\u0275pipeBind1(6, 15, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r6), \u0275\u0275pureFunction2(40, _c7, \u0275\u0275pipeBind1(7, 17, "COMMON.STATUS"), status_template_r7), \u0275\u0275pureFunction1(43, _c8, action_template_r8)))("filter", (tmp_10_0 = \u0275\u0275pipeBind1(8, 19, ctx_r0.options)) == null ? null : tmp_10_0.search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(9, 21, "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"));
  }
}
function ParkingBookingsListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r9 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r9.all_day || row_r9.duration > 12 * 60 ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r9.date, ctx_r0.time_format) + " - " + \u0275\u0275pipeBind2(4, 6, row_r9.date_end, ctx_r0.time_format), " ");
  }
}
function ParkingBookingsListComponent_ng_template_7_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r10.user_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_7_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r10 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r10.user_name || row_r10.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r10.user_name && row_r10.user_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_9_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_9_Conditional_3_Template, 2, 1, "div", 13);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r11.booked_by_name || row_r11.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r11.booked_by_name && row_r11.booked_by_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r12 = \u0275\u0275nextContext().row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 4, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(7, _c10, \u0275\u0275pipeBind2(1, 1, row_r12.checked_out_at * 1e3, ctx_r0.time_format))));
  }
}
function ParkingBookingsListComponent_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingBookingsListComponent_ng_template_11_Conditional_0_Template, 5, 9, "div", 14);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_ng_template_11_Conditional_1_Template, 4, 3, "div", 15);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_11_Conditional_2_Template, 4, 3, "div", 16);
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    \u0275\u0275conditional(!(row_r12 == null ? null : row_r12.checked_in) && row_r12.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r12 == null ? null : row_r12.checked_in) && !row_r12.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r12 == null ? null : row_r12.checked_in) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 18);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_13_Conditional_2_Template, 3, 3, "span", 18);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r13 == null ? null : row_r13.extension_data == null ? null : row_r13.extension_data.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r13 == null ? null : row_r13.extension_data == null ? null : row_r13.extension_data.plate_number) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 19)(1, "button", 20)(2, "div", 21)(3, "div", 22);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 23);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 24);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_15_Template_button_click_10_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.approve(row_r15));
    });
    \u0275\u0275elementStart(11, "div", 25)(12, "icon", 23);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 26);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 24);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_15_Template_button_click_17_listener() {
      const row_r15 = \u0275\u0275restoreView(_r14).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reject(row_r15));
    });
    \u0275\u0275elementStart(18, "div", 25)(19, "icon", 23);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 26);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    const menu_r16 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r15 == null ? null : row_r15.status) === "approved")("bg-success", (row_r15 == null ? null : row_r15.status) === "approved")("text-error-content", (row_r15 == null ? null : row_r15.status) === "declined")("bg-error", (row_r15 == null ? null : row_r15.status) === "declined")("text-neutral-content", (row_r15 == null ? null : row_r15.status) === "ended")("bg-neutral", (row_r15 == null ? null : row_r15.status) === "ended")("opacity-30", (row_r15 == null ? null : row_r15.status) === "ended")("text-warning-content", (row_r15 == null ? null : row_r15.status) === "tentative")("bg-warning", (row_r15 == null ? null : row_r15.status) === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r16)("disabled", (row_r15 == null ? null : row_r15.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, (row_r15 == null ? null : row_r15.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r15 == null ? null : row_r15.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r15 == null ? null : row_r15.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 27)(1, "button", 28);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_17_Template_button_click_1_listener() {
      const row_r18 = \u0275\u0275restoreView(_r17).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.editReservation(row_r18));
    });
    \u0275\u0275elementStart(3, "icon", 23);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r18 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r18.checked_in || row_r18.state === "in_progress" || row_r18.status === "ended" || row_r18.instance)("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
var ParkingBookingsListComponent = class _ParkingBookingsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this.events = this._state.bookings;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.filtered_events = combineLatest([
      this._state.bookings,
      this.options
    ]).pipe(map(([booking_list, { search }]) => {
      const show_requests = !!this._settings.get("app.parking.show_requests");
      const list = show_requests ? booking_list.filter((b) => !b.asset_id?.startsWith("unallocated")) : booking_list;
      const s = search.toLowerCase();
      return !s ? list : list.filter((b) => b.user_name.toLowerCase().includes(s) || b.user_email.toLowerCase().includes(s) || b.booked_by_name.toLowerCase().includes(s) || b.booked_by_email.toLowerCase().includes(s) || b.asset_name.toLowerCase().includes(s));
    }));
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
  }
  get time_format() {
    return this._settings.time_format;
  }
  get week_start() {
    return this._settings.get("app.week_start") || 0;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsListComponent, selectors: [["parking-bookings-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 7, consts: [["date_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [3, "booking_events", "date", "week_start", "time_format", "approve", "reject", "edit_reservation"], [1, "block", "min-w-304", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["matTooltipPosition", "right", 1, "bg-base-300", "text-base-100", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-warning", "text-warning-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"]], template: function ParkingBookingsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 8);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_Conditional_2_Template, 3, 12, "parking-bookings-week-view", 9);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275conditionalBranchCreate(4, ParkingBookingsListComponent_Conditional_4_Template, 10, 54, "simple-table", 10);
        \u0275\u0275template(5, ParkingBookingsListComponent_ng_template_5_Template, 5, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, ParkingBookingsListComponent_ng_template_7_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, ParkingBookingsListComponent_ng_template_9_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, ParkingBookingsListComponent_ng_template_11_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, ParkingBookingsListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(15, ParkingBookingsListComponent_ng_template_15_Template, 24, 29, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(17, ParkingBookingsListComponent_ng_template_17_Template, 5, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(19, "div", 11);
      }
      if (rf & 2) {
        let tmp_7_0;
        let tmp_8_0;
        \u0275\u0275classProp("opacity-0", !((tmp_7_0 = \u0275\u0275pipeBind1(1, 3, ctx.loading)) == null ? null : tmp_7_0.includes("bookings")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_8_0 = \u0275\u0275pipeBind1(3, 5, ctx.options)) == null ? null : tmp_8_0.period) === "week" ? 2 : 4);
      }
    }, dependencies: [
      CommonModule,
      MatProgressBarModule,
      MatProgressBar,
      SimpleTableComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      ParkingBookingsWeekViewComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsListComponent, [{
    type: Component,
    args: [{ selector: "parking-bookings-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('bookings')"
            class="sticky left-0 w-full"
        />
        @if ((options | async)?.period === 'week') {
            <parking-bookings-week-view
                [booking_events]="(filtered_events | async) || []"
                [date]="(options | async)?.date || 0"
                [week_start]="week_start"
                [time_format]="time_format"
                [approve]="approve"
                [reject]="reject"
                [edit_reservation]="editReservation"
            />
        } @else {
            <simple-table
                class="block min-w-304 text-sm"
                [data]="filtered_events"
                [columns]="[
                    {
                        key: 'state',
                        name: 'COMMON.STATUS_BUSY' | translate,
                        content: state_template,
                        size: '4.75rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'asset_name',
                        name: 'APP.CONCIERGE.PARKING_BAY_NUMBER' | translate,
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                        content: person_template,
                    },
                    {
                        key: 'booked_by_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                        content: host_template,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                        size: '10rem',
                        sortable: false,
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
                        size: '3.5rem',
                        sortable: false,
                    },
                ]"
                [filter]="(options | async)?.search"
                [sortable]="true"
                [empty_message]="
                    'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY' | translate
                "
            />
        }
        <ng-template #date_template let-row="row">
            <div class="px-4 py-2">
                {{
                    row.all_day || row.duration > 12 * 60
                        ? ('COMMON.ALL_DAY' | translate)
                        : (row.date | date: time_format) +
                          ' - ' +
                          (row.date_end | date: time_format)
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
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
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
                                          | date: time_format),
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
                        'APP.CONCIERGE.PARKING_NOT_CHECKED_IN' | translate
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
                    [class.opacity-30]="row?.status === 'ended'"
                    [class.text-warning-content]="row?.status === 'tentative'"
                    [class.bg-warning]="row?.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="row?.status === 'ended'"
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
                        <icon class="text-2xl">arrow_drop_down</icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approve(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_APPROVE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="reject(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_DECLINE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div class="mx-auto flex items-center justify-end space-x-2">
                <button
                    icon
                    matRipple
                    [disabled]="
                        row.checked_in ||
                        row.state === 'in_progress' ||
                        row.status === 'ended' ||
                        row.instance
                    "
                    [matTooltip]="'APP.CONCIERGE.PARKING_EDIT' | translate"
                    (click)="editReservation(row)"
                >
                    <icon class="text-2xl">edit</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      IconComponent,
      ParkingBookingsWeekViewComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsListComponent, { className: "ParkingBookingsListComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-list.component.ts", lineNumber: 262 });
})();

// apps/concierge/src/app/parking/parking-fleet-list.component.ts
var _c03 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "car_model", name: a0 });
var _c22 = (a0) => ({ key: "car_colour", name: a0 });
var _c32 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c42 = (a0) => ({ key: "notes", name: a0 });
var _c52 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingFleetListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 7);
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
function ParkingFleetListComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingFleetListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingFleetListComponent_ng_template_9_Conditional_2_Template, 3, 3, "span", 9);
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
function ParkingFleetListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 10)(1, "button", 11);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingFleetListComponent_ng_template_11_Template_button_click_1_listener() {
      const row_r5 = \u0275\u0275restoreView(_r4).row;
      const ctx_r5 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r5.editFleetVehicle(row_r5));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 12);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingFleetListComponent_ng_template_11_Template_button_click_5_listener() {
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
    this._default_options = {
      date: Date.now(),
      search: "",
      zones: [],
      period: "day",
      request_filter: "all"
    };
    this.options = toSignal(this._state.options, {
      initialValue: this._default_options
    });
    this.loading = toSignal(this._state.loading, {
      initialValue: []
    });
    this.fleet_list = toSignal(this._state.fleet_vehicles, {
      initialValue: []
    });
    this.editFleetVehicle = (vehicle) => this._state.editFleetVehicle(vehicle);
    this.removeFleetVehicle = (vehicle) => this._state.removeFleetVehicle(vehicle);
  }
  static {
    this.\u0275fac = function ParkingFleetListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingFleetListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingFleetListComponent, selectors: [["parking-fleet-list"]], decls: 14, vars: 37, consts: [["name_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "block", "min-w-272", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "leading-tight"], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingFleetListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 3)(1, "simple-table", 4);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275template(7, ParkingFleetListComponent_ng_template_7_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ParkingFleetListComponent_ng_template_9_Template, 3, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ParkingFleetListComponent_ng_template_11_Template, 9, 6, "ng-template", null, 2, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(13, "div", 5);
      }
      if (rf & 2) {
        const name_template_r7 = \u0275\u0275reference(8);
        const plate_template_r8 = \u0275\u0275reference(10);
        const action_template_r9 = \u0275\u0275reference(12);
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("fleet"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.fleet_list())("columns", \u0275\u0275pureFunction6(30, _c62, \u0275\u0275pureFunction2(16, _c03, \u0275\u0275pipeBind1(2, 6, "APP.CONCIERGE.PARKING_FLEET"), name_template_r7), \u0275\u0275pureFunction1(19, _c12, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_FLEET_MODEL")), \u0275\u0275pureFunction1(21, _c22, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(23, _c32, \u0275\u0275pipeBind1(5, 12, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r8), \u0275\u0275pureFunction1(26, _c42, \u0275\u0275pipeBind1(6, 14, "FORM.NOTES")), \u0275\u0275pureFunction1(28, _c52, action_template_r9)))("filter", ctx.options().search)("sortable", true);
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
                    size: '6.5rem',
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
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
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
                    class="text-error"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingFleetListComponent, { className: "ParkingFleetListComponent", filePath: "apps/concierge/src/app/parking/parking-fleet-list.component.ts", lineNumber: 108 });
})();

// apps/concierge/src/app/parking/parking-map.component.ts
var _c04 = () => ({ controls: true });
var ParkingMapComponent = class _ParkingMapComponent extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._ex_parking = inject(ExploreParkingService);
    this._parking = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._default_options = {
      date: Date.now(),
      search: "",
      zones: [],
      period: "day",
      request_filter: "all"
    };
    this._ready = signal(false, ...ngDevMode ? [{ debugName: "_ready" }] : (
      /* istanbul ignore next */
      []
    ));
    this.options = toSignal(this._parking.options, {
      initialValue: this._default_options
    });
    this.url = this._explore.map_url;
    this.raw_styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.disable_styles = this._settings.signal("parking.disable_styles", false);
    this.styles = computed(() => {
      const style_map = __spreadValues({}, this.raw_styles());
      if (!this.disable_styles())
        return style_map;
      for (const feature of this.features()) {
        if (feature.location)
          delete style_map[`#${feature.location}`];
      }
      return style_map;
    }, ...ngDevMode ? [{ debugName: "styles" }] : (
      /* istanbul ignore next */
      []
    ));
    this.locate = "";
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
    await firstTruthyValueFrom(this._org.initialised);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-map"]], features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 2, vars: 8, consts: [[1, "bg-base-200", "relative", "my-2", "h-[calc(100%-1.5rem)]", "w-full", "rounded-xl", "shadow-sm"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]], template: function ParkingMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "interactive-map", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("src", ctx.url())("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("options", \u0275\u0275pureFunction0(7, _c04))("focus", ctx.locate);
      }
    }, dependencies: [InteractiveMapComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingMapComponent, [{
    type: Component,
    args: [{ selector: "parking-map", template: `
        <div
            class="bg-base-200 relative my-2 h-[calc(100%-1.5rem)] w-full rounded-xl shadow-sm"
        >
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
    `, providers: [ExploreParkingService], imports: [InteractiveMapComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "apps/concierge/src/app/parking/parking-map.component.ts", lineNumber: 41 });
})();

// apps/concierge/src/app/parking/parking-requests-week-view.component.ts
var _c05 = () => [];
var _forTrack02 = ($index, $item) => $item.id + "-" + $item.instance;
function ParkingRequestsWeekViewComponent_For_19_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), " ");
  }
}
function ParkingRequestsWeekViewComponent_For_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, ParkingRequestsWeekViewComponent_For_19_Conditional_4_Template, 3, 3, "div", 9);
    \u0275\u0275element(5, "div", 10);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, date_r1, "EEE, MMM d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.is_today(date_r1) ? 4 : -1);
  }
}
function ParkingRequestsWeekViewComponent_For_22_For_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingRequestsWeekViewComponent_For_22_For_2_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const event_r5 = \u0275\u0275nextContext().$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.view_special_needs_request()(event_r5));
    });
    \u0275\u0275elementStart(2, "icon", 22);
    \u0275\u0275text(3, "description");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "BOOKINGS.P2_SPECIAL_NEEDS_DETAILS"));
  }
}
function ParkingRequestsWeekViewComponent_For_22_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275conditionalCreate(2, ParkingRequestsWeekViewComponent_For_22_For_2_Conditional_2_Template, 4, 3, "button", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 16);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 17);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 16);
    \u0275\u0275text(11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 18)(13, "div", 19);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(16, "div", 20)(17, "button", 21);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275listener("click", function ParkingRequestsWeekViewComponent_For_22_For_2_Template_button_click_17_listener() {
      const event_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.approve()(event_r5));
    });
    \u0275\u0275elementStart(19, "icon", 22);
    \u0275\u0275text(20, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(21, "button", 21);
    \u0275\u0275pipe(22, "translate");
    \u0275\u0275listener("click", function ParkingRequestsWeekViewComponent_For_22_For_2_Template_button_click_21_listener() {
      const event_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.reject()(event_r5));
    });
    \u0275\u0275elementStart(23, "icon", 22);
    \u0275\u0275text(24, "event_busy");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(25, "button", 21);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275listener("click", function ParkingRequestsWeekViewComponent_For_22_For_2_Template_button_click_25_listener() {
      const event_r5 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.assign_space()(event_r5));
    });
    \u0275\u0275elementStart(27, "icon", 22);
    \u0275\u0275text(28, "add_location");
    \u0275\u0275elementEnd()()()()();
  }
  if (rf & 2) {
    const event_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("border-left-width", 0.35, "rem")("border-left-color", ctx_r1.request_type_color(ctx_r1.request_type(event_r5)));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.request_type(event_r5) === "special" ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r5.all_day || event_r5.duration > 12 * 60 ? \u0275\u0275pipeBind1(5, 31, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(6, 33, event_r5.date, ctx_r1.time_format()) + " - " + \u0275\u0275pipeBind2(7, 36, event_r5.date_end, ctx_r1.time_format()), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", event_r5.user_name || event_r5.user_email, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", event_r5 == null ? null : event_r5.extension_data == null ? null : event_r5.extension_data.plate_number, " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", (event_r5 == null ? null : event_r5.status) === "approved")("text-success-content", (event_r5 == null ? null : event_r5.status) === "approved")("bg-error", (event_r5 == null ? null : event_r5.status) === "declined")("text-error-content", (event_r5 == null ? null : event_r5.status) === "declined")("bg-neutral", (event_r5 == null ? null : event_r5.status) === "ended")("text-neutral-content", (event_r5 == null ? null : event_r5.status) === "ended")("bg-warning", (event_r5 == null ? null : event_r5.status) === "tentative")("text-warning-content", (event_r5 == null ? null : event_r5.status) === "tentative");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 39, ctx_r1.status_label(event_r5 == null ? null : event_r5.status)), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", (event_r5 == null ? null : event_r5.status) === "approved" || (event_r5 == null ? null : event_r5.status) === "ended")("matTooltip", \u0275\u0275pipeBind1(18, 41, "APP.CONCIERGE.PARKING_APPROVE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", (event_r5 == null ? null : event_r5.status) === "declined" || (event_r5 == null ? null : event_r5.status) === "ended")("matTooltip", \u0275\u0275pipeBind1(22, 43, "APP.CONCIERGE.PARKING_DECLINE"));
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", event_r5.checked_in || event_r5.state === "in_progress" || event_r5.status === "ended")("matTooltip", \u0275\u0275pipeBind1(26, 45, "APP.CONCIERGE.PARKING_ASSIGN_SPACE"));
  }
}
function ParkingRequestsWeekViewComponent_For_22_ForEmpty_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1, " No requests ");
    \u0275\u0275elementEnd();
  }
}
function ParkingRequestsWeekViewComponent_For_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275repeaterCreate(1, ParkingRequestsWeekViewComponent_For_22_For_2_Template, 29, 47, "div", 11, _forTrack02, false, ParkingRequestsWeekViewComponent_For_22_ForEmpty_3_Template, 2, 0, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const date_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.events_map()[date_r6] || \u0275\u0275pureFunction0(1, _c05));
  }
}
var ParkingRequestsWeekViewComponent = class _ParkingRequestsWeekViewComponent {
  constructor() {
    this.booking_events = input([], ...ngDevMode ? [{ debugName: "booking_events" }] : (
      /* istanbul ignore next */
      []
    ));
    this.date = input(Date.now(), ...ngDevMode ? [{ debugName: "date" }] : (
      /* istanbul ignore next */
      []
    ));
    this.week_start = input(0, ...ngDevMode ? [{ debugName: "week_start" }] : (
      /* istanbul ignore next */
      []
    ));
    this.time_format = input("shortTime", ...ngDevMode ? [{ debugName: "time_format" }] : (
      /* istanbul ignore next */
      []
    ));
    this.approve = input(() => void 0, ...ngDevMode ? [{ debugName: "approve" }] : (
      /* istanbul ignore next */
      []
    ));
    this.reject = input(() => void 0, ...ngDevMode ? [{ debugName: "reject" }] : (
      /* istanbul ignore next */
      []
    ));
    this.assign_space = input(() => void 0, ...ngDevMode ? [{ debugName: "assign_space" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view_special_needs_request = input(() => void 0, ...ngDevMode ? [{ debugName: "view_special_needs_request" }] : (
      /* istanbul ignore next */
      []
    ));
    this.days = computed(() => new Array(7).fill(0).map((_, index) => addDays(startOfWeek(this.date(), {
      weekStartsOn: this.week_start()
    }), index).valueOf()), ...ngDevMode ? [{ debugName: "days" }] : (
      /* istanbul ignore next */
      []
    ));
    this.events_map = computed(() => {
      const data = {};
      const day_list = this.days();
      const events = this.booking_events();
      for (const day of day_list) {
        const day_key = format(day, "yyyy-MM-dd");
        data[day] = events.filter((event) => format(event.date, "yyyy-MM-dd") === day_key).sort((a, b) => a.date - b.date);
      }
      return data;
    }, ...ngDevMode ? [{ debugName: "events_map" }] : (
      /* istanbul ignore next */
      []
    ));
    this.is_today = (date) => isSameDay(date, Date.now());
    this.request_type = (booking) => booking?.extension_data?.request_type || "";
    this.request_type_color = (request_type) => request_type === "special" ? "#ef4444" : request_type === "after_hours" ? "#f59e0b" : "#3b82f6";
    this._request_type_labels = {
      standard: "Standard",
      special: "P2",
      after_hours: "After-hours"
    };
    this.request_type_label = (request_type) => this._request_type_labels[request_type] || "COMMON.EMPTY";
    this.status_label = (status) => status === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : status === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : status === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING";
  }
  static {
    this.\u0275fac = function ParkingRequestsWeekViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingRequestsWeekViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestsWeekViewComponent, selectors: [["parking-requests-week-view"]], inputs: { booking_events: [1, "booking_events"], date: [1, "date"], week_start: [1, "week_start"], time_format: [1, "time_format"], approve: [1, "approve"], reject: [1, "reject"], assign_space: [1, "assign_space"], view_special_needs_request: [1, "view_special_needs_request"] }, decls: 23, vars: 19, consts: [[1, "border-base-200", "flex", "items-center", "gap-3", "border-b", "px-3", "py-2"], [1, "flex", "items-center", "gap-2", "text-xs"], [1, "inline-block", "h-2.5", "w-2.5", "rounded-full"], ["timeline", "", 1, "z-0", "grid", "h-full", "w-full", "flex-1", "overflow-auto"], ["day-headers", "", 1, "border-base-300", "bg-base-100", "sticky", "top-0", "z-20", "flex", "min-w-full", "items-center", "border-b"], [1, "relative", "flex", "h-full", "min-w-64", "flex-1", "flex-col", "items-center", "justify-center", "py-2", "leading-tight"], ["date-blocks", "", 1, "relative", "flex", "min-h-full", "min-w-full", "overflow-hidden"], [1, "border-base-200", "min-w-64", "flex-1", "space-y-2", "overflow-auto", "border-r", "p-2"], [1, "truncate"], [1, "text-info", "absolute", "bottom-1", "left-1/2", "-translate-x-1/2", "text-xs"], [1, "bg-base-300", "absolute", "right-0", "bottom-0", "h-2", "w-px"], [1, "border-base-300", "bg-base-100", "relative", "space-y-1", "rounded-sm", "border", "p-2", 3, "border-left-width", "border-left-color"], [1, "text-base-content/30", "w-full", "rounded-sm", "p-4", "text-center", "text-xs", "uppercase"], [1, "border-base-300", "bg-base-100", "relative", "space-y-1", "rounded-sm", "border", "p-2"], [1, "absolute", "top-0", "right-2", "z-20"], ["icon", "", "matRipple", "", 3, "matTooltip"], [1, "text-xs", "opacity-60"], [1, "truncate", "text-xs"], [1, "flex", "items-center", "justify-between"], [1, "rounded-full", "px-2", "py-1", "text-xs"], [1, "flex", "items-center", "space-x-1"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"], [1, "text-xl"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"]], template: function ParkingRequestsWeekViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275element(2, "span", 2);
        \u0275\u0275elementStart(3, "span");
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "div", 1);
        \u0275\u0275element(7, "span", 2);
        \u0275\u0275elementStart(8, "span");
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 1);
        \u0275\u0275element(12, "span", 2);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(16, "div", 3)(17, "div", 4);
        \u0275\u0275repeaterCreate(18, ParkingRequestsWeekViewComponent_For_19_Template, 6, 5, "div", 5, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "div", 6);
        \u0275\u0275repeaterCreate(21, ParkingRequestsWeekViewComponent_For_22_Template, 4, 2, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background-color", ctx.request_type_color("standard"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 13, ctx.request_type_label("standard")));
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background-color", ctx.request_type_color("after_hours"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 15, ctx.request_type_label("after_hours")));
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("background-color", ctx.request_type_color("special"));
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 17, ctx.request_type_label("special")));
        \u0275\u0275advance(3);
        \u0275\u0275styleProp("width", ctx.days().length * 16 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("width", ctx.days().length * 16 + "rem");
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.days());
      }
    }, dependencies: [
      CommonModule,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  height: 100%;\n}\n[timeline][_ngcontent-%COMP%] {\n  grid-template-rows: 3rem auto;\n}\n/*# sourceMappingURL=parking-requests-week-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestsWeekViewComponent, [{
    type: Component,
    args: [{ selector: "parking-requests-week-view", template: `
        <div class="border-base-200 flex items-center gap-3 border-b px-3 py-2">
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('standard')"
                ></span>
                <span>{{ request_type_label('standard') | translate }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('after_hours')"
                ></span>
                <span>{{ request_type_label('after_hours') | translate }}</span>
            </div>
            <div class="flex items-center gap-2 text-xs">
                <span
                    class="inline-block h-2.5 w-2.5 rounded-full"
                    [style.background-color]="request_type_color('special')"
                ></span>
                <span>{{ request_type_label('special') | translate }}</span>
            </div>
        </div>
        <div timeline class="z-0 grid h-full w-full flex-1 overflow-auto">
            <div
                day-headers
                class="border-base-300 bg-base-100 sticky top-0 z-20 flex min-w-full items-center border-b"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="relative flex h-full min-w-64 flex-1 flex-col items-center justify-center py-2 leading-tight"
                    >
                        <div class="truncate">
                            {{ date | date: 'EEE, MMM d' }}
                        </div>
                        @if (is_today(date)) {
                            <div
                                class="text-info absolute bottom-1 left-1/2 -translate-x-1/2 text-xs"
                            >
                                {{ 'COMMON.TODAY' | translate }}
                            </div>
                        }
                        <div
                            class="bg-base-300 absolute right-0 bottom-0 h-2 w-px"
                        ></div>
                    </div>
                }
            </div>
            <div
                date-blocks
                class="relative flex min-h-full min-w-full overflow-hidden"
                [style.width]="days().length * 16 + 'rem'"
            >
                @for (date of days(); track date) {
                    <div
                        class="border-base-200 min-w-64 flex-1 space-y-2 overflow-auto border-r p-2"
                    >
                        @for (
                            event of events_map()[date] || [];
                            track event.id + '-' + event.instance
                        ) {
                            <div
                                class="border-base-300 bg-base-100 relative space-y-1 rounded-sm border p-2"
                                [style.border-left-width.rem]="0.35"
                                [style.border-left-color]="
                                    request_type_color(request_type(event))
                                "
                            >
                                <div class="absolute top-0 right-2 z-20">
                                    @if (request_type(event) === 'special') {
                                        <button
                                            icon
                                            matRipple
                                            [matTooltip]="
                                                'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS'
                                                    | translate
                                            "
                                            (click)="
                                                view_special_needs_request()(
                                                    event
                                                )
                                            "
                                        >
                                            <icon class="text-xl"
                                                >description</icon
                                            >
                                        </button>
                                    }
                                </div>
                                <div class="text-xs opacity-60">
                                    {{
                                        event.all_day ||
                                        event.duration > 12 * 60
                                            ? ('COMMON.ALL_DAY' | translate)
                                            : (event.date
                                                  | date: time_format()) +
                                              ' - ' +
                                              (event.date_end
                                                  | date: time_format())
                                    }}
                                </div>
                                <div class="truncate text-xs">
                                    {{ event.user_name || event.user_email }}
                                </div>
                                <div class="text-xs opacity-60">
                                    {{ event?.extension_data?.plate_number }}
                                </div>
                                <div class="flex items-center justify-between">
                                    <div
                                        class="rounded-full px-2 py-1 text-xs"
                                        [class.bg-success]="
                                            event?.status === 'approved'
                                        "
                                        [class.text-success-content]="
                                            event?.status === 'approved'
                                        "
                                        [class.bg-error]="
                                            event?.status === 'declined'
                                        "
                                        [class.text-error-content]="
                                            event?.status === 'declined'
                                        "
                                        [class.bg-neutral]="
                                            event?.status === 'ended'
                                        "
                                        [class.text-neutral-content]="
                                            event?.status === 'ended'
                                        "
                                        [class.bg-warning]="
                                            event?.status === 'tentative'
                                        "
                                        [class.text-warning-content]="
                                            event?.status === 'tentative'
                                        "
                                    >
                                        {{
                                            status_label(event?.status)
                                                | translate
                                        }}
                                    </div>
                                    <div class="flex items-center space-x-1">
                                        <button
                                            icon
                                            matRipple
                                            (click)="approve()(event)"
                                            [disabled]="
                                                event?.status === 'approved' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_APPROVE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_available</icon
                                            >
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            (click)="reject()(event)"
                                            [disabled]="
                                                event?.status === 'declined' ||
                                                event?.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_DECLINE'
                                                    | translate
                                            "
                                        >
                                            <icon class="text-xl"
                                                >event_busy</icon
                                            >
                                        </button>
                                        <button
                                            icon
                                            matRipple
                                            [disabled]="
                                                event.checked_in ||
                                                event.state === 'in_progress' ||
                                                event.status === 'ended'
                                            "
                                            [matTooltip]="
                                                'APP.CONCIERGE.PARKING_ASSIGN_SPACE'
                                                    | translate
                                            "
                                            (click)="assign_space()(event)"
                                        >
                                            <icon class="text-xl"
                                                >add_location</icon
                                            >
                                        </button>
                                    </div>
                                </div>
                            </div>
                        } @empty {
                            <div
                                class="text-base-content/30 w-full rounded-sm p-4 text-center text-xs uppercase"
                            >
                                No requests
                            </div>
                        }
                    </div>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatRippleModule,
      MatTooltipModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;e073a610593341187cf71d289da6c136fc8a7598b2f83415c59d19a8e1c34cdf;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-requests-week-view.component.ts */\n:host {\n  display: block;\n  height: 100%;\n}\n[timeline] {\n  grid-template-rows: 3rem auto;\n}\n/*# sourceMappingURL=parking-requests-week-view.component.css.map */\n"] }]
  }], null, { booking_events: [{ type: Input, args: [{ isSignal: true, alias: "booking_events", required: false }] }], date: [{ type: Input, args: [{ isSignal: true, alias: "date", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], time_format: [{ type: Input, args: [{ isSignal: true, alias: "time_format", required: false }] }], approve: [{ type: Input, args: [{ isSignal: true, alias: "approve", required: false }] }], reject: [{ type: Input, args: [{ isSignal: true, alias: "reject", required: false }] }], assign_space: [{ type: Input, args: [{ isSignal: true, alias: "assign_space", required: false }] }], view_special_needs_request: [{ type: Input, args: [{ isSignal: true, alias: "view_special_needs_request", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestsWeekViewComponent, { className: "ParkingRequestsWeekViewComponent", filePath: "apps/concierge/src/app/parking/parking-requests-week-view.component.ts", lineNumber: 241 });
})();

// apps/concierge/src/app/parking/parking-special-request-modal.component.ts
var _forTrack03 = ($index, $item) => $item.url;
function ParkingSpecialRequestModalComponent_Conditional_14_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 5)(1, "icon");
    \u0275\u0275text(2, "attach_file");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const file_r1 = ctx.$implicit;
    \u0275\u0275property("href", file_r1.url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", file_r1.name, " ");
  }
}
function ParkingSpecialRequestModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275repeaterCreate(1, ParkingSpecialRequestModalComponent_Conditional_14_For_2_Template, 5, 2, "a", 5, _forTrack03);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.attachments);
  }
}
function ParkingSpecialRequestModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
var ParkingSpecialRequestModalComponent = class _ParkingSpecialRequestModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.request_notes = `${this._data.booking?.extension_data?.notes || this._data.booking?.description || ""}`.trim();
    this.attachments = (() => {
      const urls = (this._data.booking?.extension_data?.attachments || []).filter((url) => !!url);
      const names = this._data.booking?.extension_data?.p2_document_names || [];
      return urls.map((url, index) => ({
        url,
        name: names[index] || this._fileNameFromUrl(url)
      }));
    })();
  }
  _fileNameFromUrl(url) {
    const last_part = `${url || ""}`.split("/").pop() || "";
    return decodeURIComponent(last_part || "Uploaded file");
  }
  static {
    this.\u0275fac = function ParkingSpecialRequestModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingSpecialRequestModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpecialRequestModalComponent, selectors: [["parking-special-request-modal"]], decls: 16, vars: 14, consts: [[3, "heading", "hide_confirm"], [1, "space-y-6", "p-4"], [1, "mb-2", "text-sm", "font-medium"], [1, "border-base-300", "rounded-lg", "border", "p-4", "text-sm"], [1, "space-y-2"], ["target", "_blank", "rel", "noopener noreferrer", 1, "border-base-300", "hover:border-info", "flex", "items-center", "gap-3", "rounded-lg", "border", "px-4", "py-3", "transition-colors", 3, "href"], [1, "truncate", "text-sm"]], template: function ParkingSpecialRequestModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "fullscreen-modal-shell", 0);
        \u0275\u0275pipe(1, "translate");
        \u0275\u0275elementStart(2, "div", 1)(3, "div")(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 3);
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "div")(11, "div", 2);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, ParkingSpecialRequestModalComponent_Conditional_14_Template, 3, 0, "div", 4)(15, ParkingSpecialRequestModalComponent_Conditional_15_Template, 3, 3, "div", 3);
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275property("heading", \u0275\u0275pipeBind1(1, 6, "BOOKINGS.P2_SPECIAL_NEEDS_DETAILS"))("hide_confirm", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "BOOKINGS.P2_REASON_FOR_REQUEST"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.request_notes || \u0275\u0275pipeBind1(9, 10, "COMMON.EMPTY"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 12, "BOOKINGS.P2_ATTACH_SUPPORTING_DOCS"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.attachments.length ? 14 : 15);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      FullscreenModalShellComponent,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpecialRequestModalComponent, [{
    type: Component,
    args: [{ selector: "parking-special-request-modal", template: `
        <fullscreen-modal-shell
            [heading]="'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate"
            [hide_confirm]="true"
        >
            <div class="space-y-6 p-4">
                <div>
                    <div class="mb-2 text-sm font-medium">
                        {{ 'BOOKINGS.P2_REASON_FOR_REQUEST' | translate }}
                    </div>
                    <div class="border-base-300 rounded-lg border p-4 text-sm">
                        {{
                            request_notes ||
                                ('COMMON.EMPTY' | translate)
                        }}
                    </div>
                </div>

                <div>
                    <div class="mb-2 text-sm font-medium">
                        {{ 'BOOKINGS.P2_ATTACH_SUPPORTING_DOCS' | translate }}
                    </div>
                    @if (attachments.length) {
                        <div class="space-y-2">
                            @for (file of attachments; track file.url) {
                                <a
                                    class="border-base-300 hover:border-info flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors"
                                    [href]="file.url"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <icon>attach_file</icon>
                                    <span class="truncate text-sm">
                                        {{ file.name }}
                                    </span>
                                </a>
                            }
                        </div>
                    } @else {
                        <div class="border-base-300 rounded-lg border p-4 text-sm">
                            {{ 'COMMON.EMPTY' | translate }}
                        </div>
                    }
                </div>
            </div>
        </fullscreen-modal-shell>
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      FullscreenModalShellComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpecialRequestModalComponent, { className: "ParkingSpecialRequestModalComponent", filePath: "apps/concierge/src/app/parking/parking-special-request-modal.component.ts", lineNumber: 68 });
})();

// apps/concierge/src/app/parking/parking-requests-list.component.ts
var _c06 = () => [];
var _c13 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4.75rem", sortable: false });
var _c23 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c33 = (a0, a1) => ({ key: "request_type", name: a0, content: a1, size: "9rem" });
var _c43 = (a0, a1) => ({ key: "submission_date", name: a0, content: a1, size: "9rem", sortable: false });
var _c53 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c63 = (a0, a1) => ({ key: "booked_by_name", name: a0, content: a1 });
var _c72 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1, size: "10rem", sortable: false });
var _c82 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c92 = (a0) => ({ key: "actions", name: " ", content: a0, size: "6rem", sortable: false });
var _c102 = (a0, a1, a2, a3, a4, a5, a6, a7, a8) => [a0, a1, a2, a3, a4, a5, a6, a7, a8];
var _c11 = (a0) => ({ time: a0 });
function ParkingRequestsListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "parking-requests-week-view", 11);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275pipe(2, "async");
  }
  if (rf & 2) {
    let tmp_11_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("booking_events", \u0275\u0275pipeBind1(1, 8, ctx_r0.filtered_events) || \u0275\u0275pureFunction0(12, _c06))("date", ((tmp_11_0 = \u0275\u0275pipeBind1(2, 10, ctx_r0.options)) == null ? null : tmp_11_0.date) || 0)("week_start", ctx_r0.week_start)("time_format", ctx_r0.time_format)("approve", ctx_r0.approve)("reject", ctx_r0.reject)("assign_space", ctx_r0.assignSpace)("view_special_needs_request", ctx_r0.viewSpecialNeedsRequest);
  }
}
function ParkingRequestsListComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "simple-table", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "async");
    \u0275\u0275pipe(10, "translate");
  }
  if (rf & 2) {
    let tmp_12_0;
    const ctx_r0 = \u0275\u0275nextContext();
    const date_template_r2 = \u0275\u0275reference(6);
    const request_type_template_r3 = \u0275\u0275reference(8);
    const submission_template_r4 = \u0275\u0275reference(10);
    const person_template_r5 = \u0275\u0275reference(12);
    const host_template_r6 = \u0275\u0275reference(14);
    const state_template_r7 = \u0275\u0275reference(16);
    const plate_template_r8 = \u0275\u0275reference(18);
    const status_template_r9 = \u0275\u0275reference(20);
    const action_template_r10 = \u0275\u0275reference(22);
    \u0275\u0275property("data", ctx_r0.filtered_events)("columns", \u0275\u0275pureFunctionV(51, _c102, [\u0275\u0275pureFunction2(25, _c13, \u0275\u0275pipeBind1(1, 5, "COMMON.STATUS_BUSY"), state_template_r7), \u0275\u0275pureFunction2(28, _c23, \u0275\u0275pipeBind1(2, 7, "FORM.TIME"), date_template_r2), \u0275\u0275pureFunction2(31, _c33, \u0275\u0275pipeBind1(3, 9, "BOOKINGS.PARKING_REQUEST_TYPE"), request_type_template_r3), \u0275\u0275pureFunction2(34, _c43, \u0275\u0275pipeBind1(4, 11, "COMMON.CREATED_AT"), submission_template_r4), \u0275\u0275pureFunction2(37, _c53, \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.PARKING_RESERVED_FOR"), person_template_r5), \u0275\u0275pureFunction2(40, _c63, \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.PARKING_RESERVED_BY"), host_template_r6), \u0275\u0275pureFunction2(43, _c72, \u0275\u0275pipeBind1(7, 17, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r8), \u0275\u0275pureFunction2(46, _c82, \u0275\u0275pipeBind1(8, 19, "COMMON.STATUS"), status_template_r9), \u0275\u0275pureFunction1(49, _c92, action_template_r10)]))("filter", (tmp_12_0 = \u0275\u0275pipeBind1(9, 21, ctx_r0.options)) == null ? null : tmp_12_0.search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(10, 23, "APP.CONCIERGE.PARKING_REQUESTS_EMPTY"));
  }
}
function ParkingRequestsListComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r11.all_day || row_r11.duration > 12 * 60 ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r11.date, ctx_r0.time_format) + " - " + \u0275\u0275pipeBind2(4, 6, row_r11.date_end, ctx_r0.time_format), " ");
  }
}
function ParkingRequestsListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r12 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.request_type_label(ctx_r0.request_type(row_r12))), " ");
  }
}
function ParkingRequestsListComponent_ng_template_9_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const row_r13 = \u0275\u0275nextContext().row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.request_submitted_at(row_r13), "MMM d, " + ctx_r0.time_format), " ");
  }
}
function ParkingRequestsListComponent_ng_template_9_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingRequestsListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275conditionalCreate(1, ParkingRequestsListComponent_ng_template_9_Conditional_1_Template, 2, 4)(2, ParkingRequestsListComponent_ng_template_9_Conditional_2_Template, 2, 3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r13 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.request_submitted_at(row_r13) ? 1 : 2);
  }
}
function ParkingRequestsListComponent_ng_template_11_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r14.user_email, " ");
  }
}
function ParkingRequestsListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingRequestsListComponent_ng_template_11_Conditional_3_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r14 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r14.user_name || row_r14.user_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r14.user_name && row_r14.user_email ? 3 : -1);
  }
}
function ParkingRequestsListComponent_ng_template_13_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r15.booked_by_email, " ");
  }
}
function ParkingRequestsListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingRequestsListComponent_ng_template_13_Conditional_3_Template, 2, 1, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r15 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r15.booked_by_name || row_r15.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r15.booked_by_name && row_r15.booked_by_email ? 3 : -1);
  }
}
function ParkingRequestsListComponent_ng_template_15_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r16 = \u0275\u0275nextContext().row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 4, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(7, _c11, \u0275\u0275pipeBind2(1, 1, row_r16.checked_out_at * 1e3, ctx_r0.time_format))));
  }
}
function ParkingRequestsListComponent_ng_template_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingRequestsListComponent_ng_template_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingRequestsListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingRequestsListComponent_ng_template_15_Conditional_0_Template, 5, 9, "div", 16);
    \u0275\u0275conditionalCreate(1, ParkingRequestsListComponent_ng_template_15_Conditional_1_Template, 4, 3, "div", 17);
    \u0275\u0275conditionalCreate(2, ParkingRequestsListComponent_ng_template_15_Conditional_2_Template, 4, 3, "div", 18);
  }
  if (rf & 2) {
    const row_r16 = ctx.row;
    \u0275\u0275conditional(!(row_r16 == null ? null : row_r16.checked_in) && row_r16.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r16 == null ? null : row_r16.checked_in) && !row_r16.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r16 == null ? null : row_r16.checked_in) ? 2 : -1);
  }
}
function ParkingRequestsListComponent_ng_template_17_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingRequestsListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingRequestsListComponent_ng_template_17_Conditional_2_Template, 3, 3, "span", 20);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r17 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r17 == null ? null : row_r17.extension_data == null ? null : row_r17.extension_data.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r17 == null ? null : row_r17.extension_data == null ? null : row_r17.extension_data.plate_number) ? 2 : -1);
  }
}
function ParkingRequestsListComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21)(1, "button", 22)(2, "div", 23)(3, "div", 24);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 25);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 9)(10, "button", 26);
    \u0275\u0275listener("click", function ParkingRequestsListComponent_ng_template_19_Template_button_click_10_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.approve(row_r19));
    });
    \u0275\u0275elementStart(11, "div", 27)(12, "icon", 25);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 28);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 26);
    \u0275\u0275listener("click", function ParkingRequestsListComponent_ng_template_19_Template_button_click_17_listener() {
      const row_r19 = \u0275\u0275restoreView(_r18).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.reject(row_r19));
    });
    \u0275\u0275elementStart(18, "div", 27)(19, "icon", 25);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 28);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r19 = ctx.row;
    const menu_r20 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r19 == null ? null : row_r19.status) === "approved")("bg-success", (row_r19 == null ? null : row_r19.status) === "approved")("text-error-content", (row_r19 == null ? null : row_r19.status) === "declined")("bg-error", (row_r19 == null ? null : row_r19.status) === "declined")("text-neutral-content", (row_r19 == null ? null : row_r19.status) === "ended")("bg-neutral", (row_r19 == null ? null : row_r19.status) === "ended")("opacity-30", (row_r19 == null ? null : row_r19.status) === "ended")("text-warning-content", (row_r19 == null ? null : row_r19.status) === "tentative")("bg-warning", (row_r19 == null ? null : row_r19.status) === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r20)("disabled", (row_r19 == null ? null : row_r19.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, (row_r19 == null ? null : row_r19.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r19 == null ? null : row_r19.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r19 == null ? null : row_r19.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingRequestsListComponent_ng_template_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r21 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 29)(1, "button", 30);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingRequestsListComponent_ng_template_21_Template_button_click_1_listener() {
      const row_r22 = \u0275\u0275restoreView(_r21).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewSpecialNeedsRequest(row_r22));
    });
    \u0275\u0275elementStart(3, "icon", 25);
    \u0275\u0275text(4, "description");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 31);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingRequestsListComponent_ng_template_21_Template_button_click_5_listener() {
      const row_r22 = \u0275\u0275restoreView(_r21).row;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.assignSpace(row_r22));
    });
    \u0275\u0275elementStart(7, "icon", 25);
    \u0275\u0275text(8, "add_location");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r22 = ctx.row;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 4, "BOOKINGS.P2_SPECIAL_NEEDS_DETAILS"))("disabled", ctx_r0.request_type(row_r22) !== "special");
    \u0275\u0275advance(4);
    \u0275\u0275property("disabled", row_r22.checked_in || row_r22.state === "in_progress" || row_r22.status === "ended")("matTooltip", \u0275\u0275pipeBind1(6, 6, "APP.CONCIERGE.PARKING_ASSIGN_SPACE"));
  }
}
var ParkingRequestsListComponent = class _ParkingRequestsListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.filtered_events = combineLatest([
      this._state.bookings,
      this.options
    ]).pipe(map(([booking_list, { search }]) => {
      const user_groups = currentUser()?.groups || [];
      const unallocated = booking_list.filter((b) => {
        if (!b.asset_id?.startsWith("unallocated"))
          return false;
        const approver_group = b.extension_data?.approver_group;
        if (approver_group && !user_groups.includes(approver_group))
          return false;
        return true;
      });
      const s = search.toLowerCase();
      const type_index = (i) => this.request_type(i) == "special" ? 2 : this.request_type(i) == "after_hours" ? 1 : 0;
      unallocated.sort((a, b) => {
        const type_diff = type_index(a) - type_index(b);
        if (type_diff !== 0)
          return type_diff;
        const submitted_a = this.request_submitted_at(a);
        const submitted_b = this.request_submitted_at(b);
        if (submitted_a !== submitted_b)
          return submitted_b - submitted_a;
        return b.date - a.date;
      });
      return !s ? unallocated : unallocated.filter((b) => b.user_name.toLowerCase().includes(s) || b.user_email.toLowerCase().includes(s) || b.booked_by_name.toLowerCase().includes(s) || b.booked_by_email.toLowerCase().includes(s) || b.asset_name.toLowerCase().includes(s));
    }));
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
    this.assignSpace = (e) => this._state.assignSpace(e);
    this.viewSpecialNeedsRequest = (booking) => this._dialog.open(ParkingSpecialRequestModalComponent, {
      data: { booking }
    });
    this.request_type = (booking) => booking?.extension_data?.request_type || "";
    this.request_submitted_at = (booking) => {
      const value = booking?.extension_data?.submitted_at || booking?.extension_data?.submission_date || booking?.extension_data?.created_at || booking?.extension_data?.created || 0;
      if (!value)
        return 0;
      if (typeof value === "string") {
        const parsed_value = Date.parse(value);
        return Number.isFinite(parsed_value) ? parsed_value : 0;
      }
      if (typeof value === "number") {
        return value < 1e12 ? value * 1e3 : value;
      }
      return 0;
    };
    this._request_type_labels = {
      standard: "Standard",
      special: "P2",
      after_hours: "After-hours"
    };
    this.request_type_label = (request_type) => this._request_type_labels[request_type] || "COMMON.EMPTY";
  }
  get time_format() {
    return this._settings.time_format;
  }
  get week_start() {
    return this._settings.get("app.week_start") || 0;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingRequestsListComponent_BaseFactory;
      return function ParkingRequestsListComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingRequestsListComponent_BaseFactory || (\u0275ParkingRequestsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingRequestsListComponent)))(__ngFactoryType__ || _ParkingRequestsListComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingRequestsListComponent, selectors: [["parking-requests-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 7, consts: [["date_template", ""], ["request_type_template", ""], ["submission_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [3, "booking_events", "date", "week_start", "time_format", "approve", "reject", "assign_space", "view_special_needs_request"], [1, "block", "min-w-360", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["matTooltipPosition", "right", 1, "bg-base-300", "text-base-100", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-warning", "text-warning-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mx-auto", "flex", "w-full", "items-center", "justify-end", "space-x-2", "px-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip", "disabled"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"]], template: function ParkingRequestsListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 10);
        \u0275\u0275pipe(1, "async");
        \u0275\u0275conditionalCreate(2, ParkingRequestsListComponent_Conditional_2_Template, 3, 13, "parking-requests-week-view", 11);
        \u0275\u0275pipe(3, "async");
        \u0275\u0275conditionalBranchCreate(4, ParkingRequestsListComponent_Conditional_4_Template, 11, 61, "simple-table", 12);
        \u0275\u0275template(5, ParkingRequestsListComponent_ng_template_5_Template, 5, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(7, ParkingRequestsListComponent_ng_template_7_Template, 3, 3, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(9, ParkingRequestsListComponent_ng_template_9_Template, 3, 1, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(11, ParkingRequestsListComponent_ng_template_11_Template, 4, 2, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(13, ParkingRequestsListComponent_ng_template_13_Template, 4, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(15, ParkingRequestsListComponent_ng_template_15_Template, 3, 3, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(17, ParkingRequestsListComponent_ng_template_17_Template, 3, 2, "ng-template", null, 6, \u0275\u0275templateRefExtractor)(19, ParkingRequestsListComponent_ng_template_19_Template, 24, 29, "ng-template", null, 7, \u0275\u0275templateRefExtractor)(21, ParkingRequestsListComponent_ng_template_21_Template, 9, 8, "ng-template", null, 8, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(23, "div", 13);
      }
      if (rf & 2) {
        let tmp_9_0;
        let tmp_10_0;
        \u0275\u0275classProp("opacity-0", !((tmp_9_0 = \u0275\u0275pipeBind1(1, 3, ctx.loading)) == null ? null : tmp_9_0.includes("bookings")));
        \u0275\u0275advance(2);
        \u0275\u0275conditional(((tmp_10_0 = \u0275\u0275pipeBind1(3, 5, ctx.options)) == null ? null : tmp_10_0.period) === "week" ? 2 : 4);
      }
    }, dependencies: [
      CommonModule,
      MatProgressBarModule,
      MatProgressBar,
      SimpleTableComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatTooltipModule,
      MatTooltip,
      ParkingRequestsWeekViewComponent,
      AsyncPipe,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingRequestsListComponent, [{
    type: Component,
    args: [{ selector: "parking-requests-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('bookings')"
            class="sticky left-0 w-full"
        />
        @if ((options | async)?.period === 'week') {
            <parking-requests-week-view
                [booking_events]="(filtered_events | async) || []"
                [date]="(options | async)?.date || 0"
                [week_start]="week_start"
                [time_format]="time_format"
                [approve]="approve"
                [reject]="reject"
                [assign_space]="assignSpace"
                [view_special_needs_request]="viewSpecialNeedsRequest"
            />
        } @else {
            <simple-table
                class="block min-w-360 text-sm"
                [data]="filtered_events"
                [columns]="[
                    {
                        key: 'state',
                        name: 'COMMON.STATUS_BUSY' | translate,
                        content: state_template,
                        size: '4.75rem',
                        sortable: false,
                    },
                    {
                        key: 'date',
                        name: 'FORM.TIME' | translate,
                        content: date_template,
                    },
                    {
                        key: 'request_type',
                        name: 'BOOKINGS.PARKING_REQUEST_TYPE' | translate,
                        content: request_type_template,
                        size: '9rem',
                    },
                    {
                        key: 'submission_date',
                        name: 'COMMON.CREATED_AT' | translate,
                        content: submission_template,
                        size: '9rem',
                        sortable: false,
                    },
                    {
                        key: 'user_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_FOR' | translate,
                        content: person_template,
                    },
                    {
                        key: 'booked_by_name',
                        name: 'APP.CONCIERGE.PARKING_RESERVED_BY' | translate,
                        content: host_template,
                    },
                    {
                        key: 'plate_number',
                        name: 'EXPLORE.PARKING_PLATE_NUMBER' | translate,
                        content: plate_template,
                        size: '10rem',
                        sortable: false,
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
                        size: '6rem',
                        sortable: false,
                    },
                ]"
                [filter]="(options | async)?.search"
                [sortable]="true"
                [empty_message]="
                    'APP.CONCIERGE.PARKING_REQUESTS_EMPTY' | translate
                "
            />
        }
        <ng-template #date_template let-row="row">
            <div class="px-4 py-2">
                {{
                    row.all_day || row.duration > 12 * 60
                        ? ('COMMON.ALL_DAY' | translate)
                        : (row.date | date: time_format) +
                          ' - ' +
                          (row.date_end | date: time_format)
                }}
            </div>
        </ng-template>
        <ng-template #request_type_template let-row="row">
            <div class="px-4 py-2">
                {{ request_type_label(request_type(row)) | translate }}
            </div>
        </ng-template>
        <ng-template #submission_template let-row="row">
            <div class="px-4 py-2">
                @if (request_submitted_at(row)) {
                    {{
                        request_submitted_at(row)
                            | date: 'MMM d, ' + time_format
                    }}
                } @else {
                    {{ 'COMMON.EMPTY' | translate }}
                }
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
                <div>{{ row.booked_by_name || row.booked_by_email }}</div>
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
                                          | date: time_format),
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
                        'APP.CONCIERGE.PARKING_NOT_CHECKED_IN' | translate
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
                    [class.opacity-30]="row?.status === 'ended'"
                    [class.text-warning-content]="row?.status === 'tentative'"
                    [class.bg-warning]="row?.status === 'tentative'"
                    [matMenuTriggerFor]="menu"
                    [disabled]="row?.status === 'ended'"
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
                        <icon class="text-2xl">arrow_drop_down</icon>
                    </div>
                </button>
            </div>
            <mat-menu #menu="matMenu">
                <button mat-menu-item (click)="approve(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_available</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_APPROVE' | translate }}
                        </div>
                    </div>
                </button>
                <button mat-menu-item (click)="reject(row)">
                    <div class="flex items-center space-x-2">
                        <icon class="text-2xl">event_busy</icon>
                        <div class="pr-2">
                            {{ 'APP.CONCIERGE.PARKING_DECLINE' | translate }}
                        </div>
                    </div>
                </button>
            </mat-menu>
        </ng-template>
        <ng-template #action_template let-row="row">
            <div
                class="mx-auto flex w-full items-center justify-end space-x-2 px-2"
            >
                <button
                    icon
                    matRipple
                    [matTooltip]="
                        'BOOKINGS.P2_SPECIAL_NEEDS_DETAILS' | translate
                    "
                    [disabled]="request_type(row) !== 'special'"
                    (click)="viewSpecialNeedsRequest(row)"
                >
                    <icon class="text-2xl">description</icon>
                </button>
                <button
                    icon
                    matRipple
                    [disabled]="
                        row.checked_in ||
                        row.state === 'in_progress' ||
                        row.status === 'ended'
                    "
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_ASSIGN_SPACE' | translate
                    "
                    (click)="assignSpace(row)"
                >
                    <icon class="text-2xl">add_location</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
    `, imports: [
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      MatMenuModule,
      MatTooltipModule,
      IconComponent,
      ParkingRequestsWeekViewComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingRequestsListComponent, { className: "ParkingRequestsListComponent", filePath: "apps/concierge/src/app/parking/parking-requests-list.component.ts", lineNumber: 305 });
})();

// apps/concierge/src/app/parking/parking-space-list.component.ts
var _c07 = (a0, a1) => ({ key: "identifier", name: a0, content: a1 });
var _c14 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c24 = (a0, a1) => ({ key: "features", name: a0, content: a1 });
var _c34 = (a0) => ({ key: "notes", name: a0 });
var _c44 = (a0, a1) => ({ key: "bookable", name: a0, content: a1, size: "5.5rem" });
var _c54 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false, size: "4.5rem" });
var _c64 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c73 = (a0, a1, a2, a3, a4, a5, a6) => [a0, a1, a2, a3, a4, a5, a6];
function ParkingSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 10);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    let tmp_13_0;
    let tmp_15_0;
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-warning", !((tmp_8_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_8_0.includes("free")) && !((tmp_8_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_8_0.includes("busy")))("text-warning-content", !((tmp_9_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_9_0.includes("free")) && !((tmp_9_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_9_0.includes("busy")))("bg-success", (tmp_10_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_10_0.includes("free"))("text-success-content", (tmp_11_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_11_0.includes("free"))("bg-error", (tmp_12_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_12_0.includes("busy"))("text-error-content", (tmp_13_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_13_0.includes("busy"));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 14, ctx_r1.statusTooltip(ctx_r1.space_status()[row_r1.id])));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ((tmp_15_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_15_0.includes("assigned")) ? "person" : ((tmp_15_0 = ctx_r1.space_status()[row_r1.id]) == null ? null : tmp_15_0.includes("reuse")) ? "event_available" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_9_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(row_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
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
function ParkingSpaceListComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "APP.CONCIERGE.UNASSIGNED"), " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_Conditional_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r7 = \u0275\u0275nextContext(2).data;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", data_r7, " ");
  }
}
function ParkingSpaceListComponent_ng_template_11_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_11_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r7 = \u0275\u0275nextContext().data;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(data_r7, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingSpaceListComponent_ng_template_11_Conditional_1_Conditional_3_Template, 2, 1, "div", 13);
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
function ParkingSpaceListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingSpaceListComponent_ng_template_11_Conditional_0_Template, 3, 3, "div", 14);
    \u0275\u0275conditionalCreate(1, ParkingSpaceListComponent_ng_template_11_Conditional_1_Template, 4, 2, "button", 15);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(!data_r7 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r7 ? 1 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_13_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r10 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", item_r10, " ");
  }
}
function ParkingSpaceListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275repeaterCreate(1, ParkingSpaceListComponent_ng_template_13_For_2_Template, 2, 1, "span", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const data_r11 = ctx.data;
    \u0275\u0275advance();
    \u0275\u0275repeater(data_r11);
  }
}
function ParkingSpaceListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r13 = \u0275\u0275restoreView(_r12).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSpace(row_r13));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 20);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_15_Template_button_click_5_listener() {
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
function ParkingSpaceListComponent_ng_template_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "icon", 10);
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
    this._default_options = {
      date: Date.now(),
      search: "",
      zones: [],
      period: "day",
      request_filter: "all"
    };
    this.spaces = toSignal(this._state.spaces, { initialValue: [] });
    this.options = toSignal(this._state.options, {
      initialValue: this._default_options
    });
    this.loading = toSignal(this._state.loading, {
      initialValue: []
    });
    this.bookings = toSignal(this._state.bookings, {
      initialValue: []
    });
    this.space_status = computed(() => {
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
    }, ...ngDevMode ? [{ debugName: "space_status" }] : (
      /* istanbul ignore next */
      []
    ));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 42, consts: [["status_template", ""], ["name_template", ""], ["assigned_template", ""], ["item_list_template", ""], ["action_template", ""], ["bookable_template", ""], [1, "w-full"], [1, "block", "min-w-220", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], ["matTooltipPosition", "left", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "flex", "flex-wrap", "p-2"], [1, "bg-info", "text-info-content", "m-1", "rounded-2xl", "px-2", "py-1", "font-mono", "text-xs"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"], [1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 6)(1, "simple-table", 7);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275template(7, ParkingSpaceListComponent_ng_template_7_Template, 4, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ParkingSpaceListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ParkingSpaceListComponent_ng_template_11_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, ParkingSpaceListComponent_ng_template_13_Template, 3, 0, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(15, ParkingSpaceListComponent_ng_template_15_Template, 9, 6, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(17, ParkingSpaceListComponent_ng_template_17_Template, 3, 9, "ng-template", null, 5, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(19, "div", 8);
      }
      if (rf & 2) {
        const status_template_r15 = \u0275\u0275reference(8);
        const name_template_r16 = \u0275\u0275reference(10);
        const assigned_template_r17 = \u0275\u0275reference(12);
        const item_list_template_r18 = \u0275\u0275reference(14);
        const action_template_r19 = \u0275\u0275reference(16);
        const bookable_template_r20 = \u0275\u0275reference(18);
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("spaces"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.spaces())("columns", \u0275\u0275pureFunction7(34, _c73, \u0275\u0275pureFunction2(16, _c07, \u0275\u0275pipeBind1(2, 6, "APP.CONCIERGE.PARKING_BAY"), name_template_r16), \u0275\u0275pureFunction1(19, _c14, assigned_template_r17), \u0275\u0275pureFunction2(21, _c24, \u0275\u0275pipeBind1(3, 8, "COMMON.FEATURES"), item_list_template_r18), \u0275\u0275pureFunction1(24, _c34, \u0275\u0275pipeBind1(4, 10, "FORM.NOTES")), \u0275\u0275pureFunction2(26, _c44, \u0275\u0275pipeBind1(5, 12, "COMMON.BOOKABLE"), bookable_template_r20), \u0275\u0275pureFunction2(29, _c54, \u0275\u0275pipeBind1(6, 14, "COMMON.STATUS"), status_template_r15), \u0275\u0275pureFunction1(32, _c64, action_template_r19)))("filter", ctx.options().search)("sortable", true);
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
                    size: '6.5rem',
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
                [class.bg-success]="space_status()[row.id]?.includes('free')"
                [class.text-success-content]="
                    space_status()[row.id]?.includes('free')
                "
                [class.bg-error]="space_status()[row.id]?.includes('busy')"
                [class.text-error-content]="
                    space_status()[row.id]?.includes('busy')
                "
                [matTooltip]="statusTooltip(space_status()[row.id]) | translate"
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
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
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
                    matRipple
                    class="text-error"
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "apps/concierge/src/app/parking/parking-space-list.component.ts", lineNumber: 192 });
})();

// apps/concierge/src/app/parking/parking-users-list.component.ts
var _c08 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c15 = (a0) => ({ key: "car_colour", name: a0 });
var _c25 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c35 = (a0) => ({ key: "notes", name: a0 });
var _c45 = (a0, a1) => ({ key: "deny", name: a0, size: "4.5rem", content: a1 });
var _c55 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c65 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingUsersListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_7_Template_button_click_0_listener() {
      const row_r2 = \u0275\u0275restoreView(_r1).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.copyToClipboard(row_r2.id));
    });
    \u0275\u0275elementStart(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 9);
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
function ParkingUsersListComponent_ng_template_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUsersListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingUsersListComponent_ng_template_9_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275conditional(data_r5 ? 0 : -1);
  }
}
function ParkingUsersListComponent_ng_template_11_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingUsersListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingUsersListComponent_ng_template_11_Conditional_2_Template, 3, 3, "span", 12);
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
function ParkingUsersListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_13_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_13_Template_button_click_5_listener() {
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
    this._default_options = {
      date: Date.now(),
      search: "",
      zones: [],
      period: "day",
      request_filter: "all"
    };
    this.options = toSignal(this._state.options, {
      initialValue: this._default_options
    });
    this.loading = toSignal(this._state.loading, {
      initialValue: []
    });
    this.user_list = toSignal(this._state.users, {
      initialValue: []
    });
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUsersListComponent, selectors: [["parking-users-list"]], decls: 16, vars: 38, consts: [["name_template", ""], ["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "block", "min-w-272", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-error", "text-error-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingUsersListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "mat-progress-bar", 4)(1, "simple-table", 5);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275template(7, ParkingUsersListComponent_ng_template_7_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ParkingUsersListComponent_ng_template_9_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ParkingUsersListComponent_ng_template_11_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, ParkingUsersListComponent_ng_template_13_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
        \u0275\u0275element(15, "div", 6);
      }
      if (rf & 2) {
        const name_template_r9 = \u0275\u0275reference(8);
        const denied_template_r10 = \u0275\u0275reference(10);
        const plate_template_r11 = \u0275\u0275reference(12);
        const action_template_r12 = \u0275\u0275reference(14);
        \u0275\u0275classProp("opacity-0", !ctx.loading().includes("users"));
        \u0275\u0275advance();
        \u0275\u0275property("data", ctx.user_list())("columns", \u0275\u0275pureFunction6(31, _c65, \u0275\u0275pureFunction2(16, _c08, \u0275\u0275pipeBind1(2, 6, "APP.CONCIERGE.PARKING_USER"), name_template_r9), \u0275\u0275pureFunction1(19, _c15, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(21, _c25, \u0275\u0275pipeBind1(4, 10, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r11), \u0275\u0275pureFunction1(24, _c35, \u0275\u0275pipeBind1(5, 12, "FORM.NOTES")), \u0275\u0275pureFunction2(26, _c45, \u0275\u0275pipeBind1(6, 14, "APP.CONCIERGE.PARKING_USER_DENY"), denied_template_r10), \u0275\u0275pureFunction1(29, _c55, action_template_r12)))("filter", ctx.options().search)("sortable", true);
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
                    size: '6.5rem',
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
            <div class="mx-auto flex items-center space-x-2">
                <button
                    icon
                    matRipple
                    (click)="editUser(row)"
                    [matTooltip]="'APP.CONCIERGE.PARKING_USER_EDIT' | translate"
                >
                    <icon>edit</icon>
                </button>
                <button
                    icon
                    (click)="removeUser(row)"
                    class="text-error"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_USER_REMOVE' | translate
                    "
                >
                    <icon>delete</icon>
                </button>
            </div>
        </ng-template>
        <div class="h-20 w-full"></div>
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUsersListComponent, { className: "ParkingUsersListComponent", filePath: "apps/concierge/src/app/parking/parking-users-list.component.ts", lineNumber: 123 });
})();

// apps/concierge/src/app/parking/parking-topbar.component.ts
var _c09 = () => ["events", "bookings"];
var _c16 = () => ["events", "map"];
function ParkingTopbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingSpace());
    });
    \u0275\u0275elementStart(2, "div", 18);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "add");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", !((tmp_1_0 = \u0275\u0275pipeBind1(1, 2, ctx_r1.options)) == null ? null : tmp_1_0.zones == null ? null : tmp_1_0.zones.length));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, "APP.CONCIERGE.PARKING_SPACE_ADD"), " ");
  }
}
function ParkingTopbarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingUser());
    });
    \u0275\u0275elementStart(1, "div", 18);
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
function ParkingTopbarComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newFleetVehicle());
    });
    \u0275\u0275elementStart(1, "div", 18);
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
function ParkingTopbarComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReservation());
    });
    \u0275\u0275elementStart(1, "div", 18);
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
function ParkingTopbarComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "a", 22);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 23);
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 24);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 23);
    \u0275\u0275text(8, "map");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r1.view() === "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c09))("matTooltip", \u0275\u0275pipeBind1(2, 8, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c16))("matTooltip", \u0275\u0275pipeBind1(6, 10, "COMMON.MAP"));
  }
}
function ParkingTopbarComponent_Conditional_15_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 29);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_12_0;
    const level_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_12_0 = \u0275\u0275pipeBind1(2, 1, level_r7.parent_id)) == null ? null : tmp_12_0.display_name, " ");
  }
}
function ParkingTopbarComponent_Conditional_15_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 26)(1, "div", 27);
    \u0275\u0275conditionalCreate(2, ParkingTopbarComponent_Conditional_15_For_4_Conditional_2_Template, 5, 3, "div", 28);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("value", level_r7.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r7.display_name || level_r7.name, " ");
  }
}
function ParkingTopbarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 11)(1, "mat-select", 25);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingTopbarComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r1.zones, $event) || (ctx_r1.zones = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Conditional_15_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateZones($event));
    });
    \u0275\u0275repeaterCreate(3, ParkingTopbarComponent_Conditional_15_For_4_Template, 5, 3, "mat-option", 26, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(2, 2, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(5, 4, ctx_r1.levels));
  }
}
function ParkingTopbarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 12)(1, "mat-select", 30);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Conditional_16_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPeriod($event));
    });
    \u0275\u0275elementStart(3, "mat-option", 31);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-option", 32);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 3, ctx_r1.options)) == null ? null : tmp_1_0.period) || "day");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "COMMON.DAY"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 7, "COMMON.WEEK"), " ");
  }
}
function ParkingTopbarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.manageRestrictions());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "lock_open");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_BOOKING_RULES"));
  }
}
function ParkingTopbarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "icon", 34);
    \u0275\u0275text(5, "car_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "span", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "number");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ((tmp_1_0 = \u0275\u0275pipeBind1(2, 15, ctx_r1.bookings)) == null ? null : tmp_1_0.length) || 0, " of ", ((tmp_1_0 = \u0275\u0275pipeBind1(3, 17, ctx_r1.spaces)) == null ? null : tmp_1_0.length) || "", " ");
    const percent_r10 = (((tmp_2_0 = \u0275\u0275pipeBind1(7, 19, ctx_r1.bookings)) == null ? null : tmp_2_0.length) || 0) / (((tmp_2_0 = \u0275\u0275pipeBind1(8, 21, ctx_r1.spaces)) == null ? null : tmp_2_0.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bg-error", percent_r10 === 100)("text-error-content", percent_r10 === 100)("bg-warning", percent_r10 > 50 && percent_r10 < 100)("text-warning-content", percent_r10 > 50 && percent_r10 < 100)("bg-success", percent_r10 < 50)("text-success-content", percent_r10 < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 23, percent_r10 * 100, "2.0-0"), "%");
  }
}
function ParkingTopbarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 36);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("dateChange", function ParkingTopbarComponent_Conditional_20_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("step", ((tmp_1_0 = \u0275\u0275pipeBind1(1, 1, ctx_r1.options)) == null ? null : tmp_1_0.period) === "week" ? 7 : 1);
  }
}
var ParkingTopbarComponent = class _ParkingTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.section = signal("events", ...ngDevMode ? [{ debugName: "section" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = signal("requests", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
    this.zones = [];
    this.levels = this._state.levels;
    this.options = this._state.options;
    this.spaces = this._state.spaces;
    this.bookings = this._state.bookings;
    this.setDate = (d) => this._state.setOptions({ date: d });
    this.setPeriod = (period) => {
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { period },
        queryParamsHandling: "merge"
      });
      this._state.setOptions({ period });
    };
    this.setSearch = (str) => this._state.setOptions({ search: str });
    this.updateZones = (z) => {
      if (!this._router.url.includes("parking"))
        return;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.length ? z.join(",") : null },
        queryParamsHandling: "merge"
      });
      this._state.setOptions({ zones: z });
    };
    this.is_requests_view = () => this.section() === "events" && this.view() === "requests";
  }
  get use_region() {
    return !!this._settings.get("app.use_region");
  }
  get disable_reservations() {
    return !!this._settings.get("app.parking.disable_bookings");
  }
  manageRestrictions() {
    this._dialog.open(BookingRulesModalComponent, {
      data: { type: "parking" }
    });
  }
  async ngOnInit() {
    this._updatePath();
    await firstTruthyValueFrom(this._org.initialised);
    await lastValueFrom(timer(1e3));
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => {
      if (params.has("period")) {
        this._state.setOptions({
          period: params.get("period") === "week" ? "week" : "day"
        });
      }
      if (this.is_requests_view()) {
        this.clearZones();
        return;
      }
      if (params.has("zone_ids") && this._router.url.includes("parking")) {
        const zones = params.get("zone_ids").split(",");
        if (zones.length) {
          const level = this._org.levelWithID(zones);
          this.zones = zones;
          if (!level)
            return;
          this._org.building = this._org.buildings.find((bld) => bld.id === level.parent_id);
          this._state.setOptions({ zones });
        }
      }
    }));
    this.subscription("levels", this._state.levels.pipe(debounceTime(100)).subscribe((levels) => {
      if (this.use_region)
        return;
      if (this.is_requests_view()) {
        this.clearZones();
        return;
      }
      this.zones = this.zones.filter((zone) => levels.find((lvl) => lvl.id === zone));
      if (!this.zones.length && levels.length) {
        this.zones.push(levels[0].id);
      }
      this.updateZones(this.zones);
    }));
    this.subscription("router.events", this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd)
        this._updatePath();
    }));
    this._updatePath();
  }
  newParkingSpace() {
    this._state.editSpace();
  }
  newParkingUser() {
    this._state.editUser();
  }
  newFleetVehicle() {
    this._state.editFleetVehicle();
  }
  async newReservation() {
    const { date } = await nextValueFrom(this.options);
    this._state.editReservation(void 0, {
      date: date || Date.now(),
      allow_time_changes: true
    });
  }
  _updatePath() {
    const parts = this._router.url?.split("/") || [""];
    const [section, view] = parts.slice(-2);
    this.section.set(section);
    this.view.set(view.split("?")[0]);
    if (this.is_requests_view()) {
      this.clearZones();
      return;
    }
    this.selectDefaultZoneForManage();
  }
  clearZones() {
    const has_query_param = this._route.snapshot.queryParamMap.has("zone_ids");
    if (!this.zones.length && !has_query_param) {
      this._state.setOptions({ zones: [] });
      return;
    }
    this.zones = [];
    this.updateZones([]);
  }
  async selectDefaultZoneForManage() {
    if (this.section() !== "manage" || this.use_region || this.zones.length) {
      return;
    }
    const levels = await nextValueFrom(this.levels);
    const first_level = levels[0]?.id;
    if (!first_level)
      return;
    this.zones = [first_level];
    this.updateZones(this.zones);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ParkingTopbarComponent_BaseFactory;
      return function ParkingTopbarComponent_Factory(__ngFactoryType__) {
        return (\u0275ParkingTopbarComponent_BaseFactory || (\u0275ParkingTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingTopbarComponent)))(__ngFactoryType__ || _ParkingTopbarComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingTopbarComponent, selectors: [["parking-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 19, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-52", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], [1, "bg-base-100", "mb-2", "flex", "h-14", "items-center", "px-8"], [1, "mr-2", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "mr-2", "w-56"], ["appearance", "outline", 1, "no-subscript", "w-32"], [1, "w-px", "min-w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["matTooltip", "Parking Spaces Occupied", 1, "border-base-300", "mr-2", "flex", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], [3, "step"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-52", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "routerLink", "matTooltip"], [1, "text-2xl"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "routerLink", "matTooltip"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], [3, "ngModelChange", "ngModel"], ["value", "day"], ["value", "week"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [1, "ml-1!", "text-lg"], [1, "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [3, "dateChange", "step"]], template: function ParkingTopbarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275elementStart(5, "searchbar", 3);
        \u0275\u0275pipe(6, "async");
        \u0275\u0275listener("modelChange", function ParkingTopbarComponent_Template_searchbar_modelChange_5_listener($event) {
          return ctx.setSearch($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 4);
        \u0275\u0275pipe(8, "async");
        \u0275\u0275conditionalCreate(9, ParkingTopbarComponent_Conditional_9_Template, 7, 6, "button", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(10, ParkingTopbarComponent_Conditional_10_Template, 6, 3, "button", 6);
        \u0275\u0275conditionalCreate(11, ParkingTopbarComponent_Conditional_11_Template, 6, 3, "button", 7);
        \u0275\u0275conditionalCreate(12, ParkingTopbarComponent_Conditional_12_Template, 6, 3, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 9);
        \u0275\u0275conditionalCreate(14, ParkingTopbarComponent_Conditional_14_Template, 9, 14, "div", 10);
        \u0275\u0275conditionalCreate(15, ParkingTopbarComponent_Conditional_15_Template, 6, 6, "mat-form-field", 11);
        \u0275\u0275conditionalCreate(16, ParkingTopbarComponent_Conditional_16_Template, 9, 9, "mat-form-field", 12);
        \u0275\u0275element(17, "div", 13);
        \u0275\u0275conditionalCreate(18, ParkingTopbarComponent_Conditional_18_Template, 4, 3, "button", 14);
        \u0275\u0275conditionalCreate(19, ParkingTopbarComponent_Conditional_19_Template, 12, 26, "div", 15);
        \u0275\u0275conditionalCreate(20, ParkingTopbarComponent_Conditional_20_Template, 2, 3, "date-options", 16);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_1_0;
        let tmp_2_0;
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, ctx.section() !== "events" ? "APP.CONCIERGE.PARKING_HEADER" : "APP.CONCIERGE.PARKING_BOOK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(6, 15, ctx.options)) == null ? null : tmp_1_0.search);
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", ((tmp_2_0 = \u0275\u0275pipeBind1(8, 17, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "Select a level to add a space");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "spaces" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "users" ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "fleet" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" && !ctx.disable_reservations ? 12 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.section() === "events" ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_requests_view() ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" && ctx.view() !== "map" ? 16 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.section() === "manage" ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.section() === "events" ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.view() === "requests" || ctx.view() === "bookings" || ctx.view() === "map" ? 20 : -1);
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
      AsyncPipe,
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
        <div class="flex w-full items-center space-x-2 px-8 py-4">
            <h2 class="text-2xl font-medium">
                {{
                    (section() !== 'events'
                        ? 'APP.CONCIERGE.PARKING_HEADER'
                        : 'APP.CONCIERGE.PARKING_BOOK_HEADER'
                    ) | translate
                }}
            </h2>
            <div class="w-px flex-1"></div>
            <searchbar
                class="mr-2"
                [model]="(options | async)?.search"
                (modelChange)="setSearch($event)"
            ></searchbar>
            <div
                [matTooltip]="
                    (options | async)?.zones?.length
                        ? ''
                        : 'Select a level to add a space'
                "
            >
                @if (view() === 'spaces') {
                    <button
                        btn
                        matRipple
                        class="w-40 space-x-2"
                        (click)="newParkingSpace()"
                        [disabled]="!(options | async)?.zones?.length"
                    >
                        <div class="pl-2">
                            {{ 'APP.CONCIERGE.PARKING_SPACE_ADD' | translate }}
                        </div>
                        <icon>add</icon>
                    </button>
                }
            </div>
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
                        [routerLink]="['events', 'bookings']"
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
            @if (!is_requests_view()) {
                <mat-form-field
                    appearance="outline"
                    class="no-subscript mr-2 w-56"
                >
                    <mat-select
                        [(ngModel)]="zones"
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
                                            <span class="opacity-0"> - </span>
                                        </div>
                                    }
                                    <div>
                                        {{ level.display_name || level.name }}
                                    </div>
                                </div>
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (section() === 'events' && view() !== 'map') {
                <mat-form-field appearance="outline" class="no-subscript w-32">
                    <mat-select
                        [ngModel]="(options | async)?.period || 'day'"
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
            <div class="w-px min-w-2 flex-1"></div>
            @if (section() === 'manage') {
                <button
                    icon
                    matRipple
                    class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                    (click)="manageRestrictions()"
                    [matTooltip]="
                        'APP.CONCIERGE.PARKING_BOOKING_RULES' | translate
                    "
                >
                    <icon>lock_open</icon>
                </button>
            }
            @if (section() === 'events') {
                <div
                    class="border-base-300 mr-2 flex items-center space-x-2 rounded-md border py-1 pr-1 pl-3 text-sm"
                    matTooltip="Parking Spaces Occupied"
                >
                    {{ (bookings | async)?.length || 0 }} of
                    {{ (spaces | async)?.length || '' }}
                    <icon class="ml-1! text-lg">car_lock</icon>
                    @let percent =
                        ((bookings | async)?.length || 0) /
                        ((spaces | async)?.length || 0);
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
            @if (
                view() === 'requests' ||
                view() === 'bookings' ||
                view() === 'map'
            ) {
                <date-options
                    [step]="(options | async)?.period === 'week' ? 7 : 1"
                    (dateChange)="setDate($event)"
                ></date-options>
            }
        </div>
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
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingTopbarComponent, { className: "ParkingTopbarComponent", filePath: "apps/concierge/src/app/parking/parking-topbar.component.ts", lineNumber: 269 });
})();

// apps/concierge/src/app/parking/parking.component.ts
var _c010 = () => ["/book", "parking", "manage", "spaces"];
var _c17 = () => ["/book", "parking", "manage", "map"];
var _c26 = () => ["/book", "parking", "manage", "users"];
var _c36 = () => ["/book", "parking", "manage", "fleet"];
function ParkingComponent_Conditional_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 8);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c26))("active", ctx_r0.view() === "users");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 6, "APP.CONCIERGE.PARKING_TAB_USERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c36))("active", ctx_r0.view() === "fleet");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "APP.CONCIERGE.PARKING_TAB_FLEET"), " ");
  }
}
function ParkingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "nav", 7)(2, "a", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Conditional_5_Template, 6, 12);
    \u0275\u0275elementStart(6, "a", 8);
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(9, "mat-tab-nav-panel", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tabPanel_r2 = \u0275\u0275reference(10);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabPanel", tabPanel_r2);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c010))("active", ctx_r0.view() === "spaces");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 8, "APP.CONCIERGE.PARKING_TAB_SPACES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.hide_users_and_vehicles ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c17))("active", ctx_r0.view() === "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(8, 10, "APP.CONCIERGE.PARKING_TAB_MAP"), " ");
  }
}
function ParkingComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275element(1, "div", 9);
    \u0275\u0275elementStart(2, "p", 10);
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
    this.levels = toSignal(this._state.levels, { initialValue: [] });
    this.section = signal("events", ...ngDevMode ? [{ debugName: "section" }] : (
      /* istanbul ignore next */
      []
    ));
    this.view = signal("list", ...ngDevMode ? [{ debugName: "view" }] : (
      /* istanbul ignore next */
      []
    ));
  }
  get show_requests() {
    return !!this._settings.get("app.parking.show_requests");
  }
  get hide_users_and_vehicles() {
    return !!this._settings.get("app.parking.hide_users_and_vehicles");
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
    this.subscription("poll_bookings", () => this._state.startPolling());
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
    if (section === "manage" && this.hide_users_and_vehicles && ["fleet", "users"].includes(current_view)) {
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 10, vars: 2, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "px-8", "pb-2"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "h-full", "w-full", "overflow-auto"], [1, "absolute", "inset-0", "z-50", "flex", "flex-col", "items-center", "justify-center"], ["mat-tab-nav-bar", "", 1, "bg-base-200", "overflow-hidden", "rounded-sm", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], [1, "z-10", "opacity-60"]], template: function ParkingComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275element(0, "app-topbar");
        \u0275\u0275elementStart(1, "div", 1);
        \u0275\u0275element(2, "app-sidebar");
        \u0275\u0275elementStart(3, "main", 2);
        \u0275\u0275element(4, "parking-topbar");
        \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Template, 11, 14, "div", 3);
        \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
        \u0275\u0275element(8, "router-outlet");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(9, ParkingComponent_Conditional_9_Template, 5, 3, "div", 6);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.section() === "manage" ? 5 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.levels().length ? 9 : -1);
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
                            @if (!hide_users_and_vehicles) {
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
                <div class="relative h-1/2 w-full flex-1 overflow-auto px-8">
                    <div class="h-full w-full overflow-auto">
                        <router-outlet></router-outlet>
                    </div>
                </div>
                @if (!levels().length) {
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/concierge/src/app/parking/parking.component.ts", lineNumber: 146 });
})();

// apps/concierge/src/app/parking/parking.module.ts
var ROUTES = [
  {
    path: "",
    component: ParkingComponent,
    children: [
      {
        path: "events",
        children: [
          { path: "map", component: ParkingMapComponent },
          {
            path: "requests",
            component: ParkingRequestsListComponent
          },
          {
            path: "bookings",
            component: ParkingBookingsListComponent
          },
          { path: "list", redirectTo: "bookings" },
          { path: "**", redirectTo: "bookings" }
        ]
      },
      {
        path: "manage",
        children: [
          { path: "fleet", component: ParkingFleetListComponent },
          { path: "users", component: ParkingUsersListComponent },
          { path: "map", component: ParkingMapComponent },
          { path: "spaces", component: ParkingSpaceListComponent },
          { path: "**", redirectTo: "spaces" }
        ]
      },
      { path: "**", redirectTo: "events" }
    ]
  },
  { path: "**", redirectTo: "" }
];
var AppParkingModule = class _AppParkingModule {
  static {
    this.\u0275fac = function AppParkingModule_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AppParkingModule)();
    };
  }
  static {
    this.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppParkingModule });
  }
  static {
    this.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
      ParkingComponent,
      ParkingBookingsListComponent,
      ParkingFleetListComponent,
      ParkingRequestsListComponent,
      ParkingSpecialRequestModalComponent,
      ParkingSpaceListComponent,
      ParkingUsersListComponent,
      ParkingMapComponent,
      RouterModule.forChild(ROUTES)
    ] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppParkingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ParkingComponent,
        ParkingBookingsListComponent,
        ParkingFleetListComponent,
        ParkingRequestsListComponent,
        ParkingSpecialRequestModalComponent,
        ParkingSpaceListComponent,
        ParkingUsersListComponent,
        ParkingMapComponent,
        RouterModule.forChild(ROUTES)
      ]
    }]
  }], null, null);
})();
export {
  AppParkingModule
};
//# sourceMappingURL=parking.module-7ZMWTFPO.js.map
