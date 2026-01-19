import {
  ParkingStateService
} from "./chunk-U44LZ5ZW.js";
import {
  MatTabLink,
  MatTabNav,
  MatTabNavPanel,
  MatTabsModule
} from "./chunk-4SS3LFP6.js";
import {
  ExploreParkingService
} from "./chunk-R6W3WT55.js";
import "./chunk-A3646WW3.js";
import {
  BookingRulesModalComponent
} from "./chunk-W4URU5H4.js";
import {
  SearchbarComponent
} from "./chunk-OUWZYLHO.js";
import {
  DateOptionsComponent
} from "./chunk-EX7JNH7T.js";
import "./chunk-MUXKGVFB.js";
import "./chunk-5CUJW7WB.js";
import "./chunk-II7VWOSY.js";
import "./chunk-K53BEZPB.js";
import {
  ApplicationSidebarComponent,
  ApplicationTopbarComponent
} from "./chunk-FZK62I25.js";
import "./chunk-DLQIRHBA.js";
import {
  ActivatedRoute,
  AsyncHandler,
  AsyncPipe,
  BehaviorSubject,
  BuildingPipe,
  Clipboard,
  CommonModule,
  Component,
  DatePipe,
  DecimalPipe,
  ExploreStateService,
  FormsModule,
  IconComponent,
  InteractiveMapComponent,
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
  combineLatest,
  debounceTime,
  first,
  firstTruthyValueFrom,
  i18n,
  inject,
  lastValueFrom,
  map,
  nextValueFrom,
  notifySuccess,
  setClassMetadata,
  signal,
  timer,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵconditional,
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
  ɵɵpureFunction5,
  ɵɵpureFunction6,
  ɵɵpureFunction8,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty
} from "./chunk-APXD2SKZ.js";

// apps/concierge/src/app/parking/parking-bookings-list.component.ts
var _c0 = (a0, a1) => ({ key: "state", name: a0, content: a1, size: "4.75rem", sortable: false });
var _c1 = (a0, a1) => ({ key: "date", name: a0, content: a1 });
var _c2 = (a0) => ({ key: "asset_name", name: a0 });
var _c3 = (a0, a1) => ({ key: "user_name", name: a0, content: a1 });
var _c4 = (a0, a1) => ({ key: "booked_by_name", name: a0, content: a1 });
var _c5 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1, size: "10rem", sortable: false });
var _c6 = (a0, a1) => ({ key: "status", name: a0, content: a1, size: "9.5rem" });
var _c7 = (a0) => ({ key: "actions", name: " ", content: a0, size: "3.5rem", sortable: false });
var _c8 = (a0, a1, a2, a3, a4, a5, a6, a7) => [a0, a1, a2, a3, a4, a5, a6, a7];
var _c9 = (a0) => ({ time: a0 });
function ParkingBookingsListComponent_ng_template_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275pipe(3, "date");
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r1.all_day || row_r1.duration > 12 * 60 ? \u0275\u0275pipeBind1(2, 1, "COMMON.ALL_DAY") : \u0275\u0275pipeBind2(3, 3, row_r1.date, ctx_r1.time_format) + " - " + \u0275\u0275pipeBind2(4, 6, row_r1.date_end, ctx_r1.time_format), " ");
  }
}
function ParkingBookingsListComponent_ng_template_14_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r3 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r3.user_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_14_Conditional_3_Template, 2, 1, "div", 12);
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
function ParkingBookingsListComponent_ng_template_16_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = \u0275\u0275nextContext().row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r4.booked_by_email, " ");
  }
}
function ParkingBookingsListComponent_ng_template_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingBookingsListComponent_ng_template_16_Conditional_3_Template, 2, 1, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r4 = ctx.row;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(row_r4.booked_by_name || row_r4.booked_by_email);
    \u0275\u0275advance();
    \u0275\u0275conditional(row_r4.booked_by_name && row_r4.booked_by_email ? 3 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_18_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275pipe(1, "date");
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r5 = \u0275\u0275nextContext().row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind2(2, 4, "APP.CONCIERGE.PARKING_CHECKED_OUT_AT", \u0275\u0275pureFunction1(7, _c9, \u0275\u0275pipeBind2(1, 1, row_r5.checked_out_at * 1e3, ctx_r1.time_format))));
  }
}
function ParkingBookingsListComponent_ng_template_18_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "question_mark");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_NOT_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "done");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "APP.CONCIERGE.PARKING_CHECKED_IN"));
  }
}
function ParkingBookingsListComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingBookingsListComponent_ng_template_18_Conditional_0_Template, 5, 9, "div", 13);
    \u0275\u0275conditionalCreate(1, ParkingBookingsListComponent_ng_template_18_Conditional_1_Template, 4, 3, "div", 14);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_18_Conditional_2_Template, 4, 3, "div", 15);
  }
  if (rf & 2) {
    const row_r5 = ctx.row;
    \u0275\u0275conditional(!(row_r5 == null ? null : row_r5.checked_in) && row_r5.checked_out_at ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r5 == null ? null : row_r5.checked_in) && !row_r5.checked_out_at ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional((row_r5 == null ? null : row_r5.checked_in) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_20_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.EMPTY"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingBookingsListComponent_ng_template_20_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const row_r6 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(!(row_r6 == null ? null : row_r6.extension_data == null ? null : row_r6.extension_data.plate_number) ? 2 : -1);
  }
}
function ParkingBookingsListComponent_ng_template_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 18)(1, "button", 19)(2, "div", 20)(3, "div", 21);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 22);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(8, "mat-menu", null, 7)(10, "button", 23);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_22_Template_button_click_10_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.approve(row_r8));
    });
    \u0275\u0275elementStart(11, "div", 24)(12, "icon", 22);
    \u0275\u0275text(13, "event_available");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 25);
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(17, "button", 23);
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_22_Template_button_click_17_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.reject(row_r8));
    });
    \u0275\u0275elementStart(18, "div", 24)(19, "icon", 22);
    \u0275\u0275text(20, "event_busy");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "div", 25);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const row_r8 = ctx.row;
    const menu_r9 = \u0275\u0275reference(9);
    \u0275\u0275advance();
    \u0275\u0275classProp("text-success-content", (row_r8 == null ? null : row_r8.status) === "approved")("bg-success", (row_r8 == null ? null : row_r8.status) === "approved")("text-error-content", (row_r8 == null ? null : row_r8.status) === "declined")("bg-error", (row_r8 == null ? null : row_r8.status) === "declined")("text-neutral-content", (row_r8 == null ? null : row_r8.status) === "ended")("bg-neutral", (row_r8 == null ? null : row_r8.status) === "ended")("opacity-30", (row_r8 == null ? null : row_r8.status) === "ended")("text-warning-content", (row_r8 == null ? null : row_r8.status) === "tentative")("bg-warning", (row_r8 == null ? null : row_r8.status) === "tentative");
    \u0275\u0275property("matMenuTriggerFor", menu_r9)("disabled", (row_r8 == null ? null : row_r8.status) === "ended");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 23, (row_r8 == null ? null : row_r8.status) === "ended" ? "APP.CONCIERGE.BOOKING_STATUS_ENDED" : (row_r8 == null ? null : row_r8.status) === "approved" ? "APP.CONCIERGE.BOOKING_STATUS_APPROVED" : (row_r8 == null ? null : row_r8.status) === "declined" ? "APP.CONCIERGE.BOOKING_STATUS_DECLINED" : "APP.CONCIERGE.BOOKING_STATUS_PENDING"), " ");
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(16, 25, "APP.CONCIERGE.PARKING_APPROVE"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(23, 27, "APP.CONCIERGE.PARKING_DECLINE"), " ");
  }
}
function ParkingBookingsListComponent_ng_template_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 26)(1, "button", 27);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingBookingsListComponent_ng_template_24_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editReservation(row_r11));
    });
    \u0275\u0275elementStart(3, "icon", 22);
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const row_r11 = ctx.row;
    \u0275\u0275advance();
    \u0275\u0275property("disabled", row_r11.checked_in || row_r11.state === "in_progress" || row_r11.status === "ended" || row_r11.instance)("matTooltip", \u0275\u0275pipeBind1(2, 2, "APP.CONCIERGE.PARKING_EDIT"));
  }
}
var _ParkingBookingsListComponent = class _ParkingBookingsListComponent extends AsyncHandler {
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
      const s = search.toLowerCase();
      return !s ? booking_list : booking_list.filter((b) => b.user_name.toLowerCase().includes(s) || b.user_email.toLowerCase().includes(s) || b.booked_by_name.toLowerCase().includes(s) || b.booked_by_email.toLowerCase().includes(s) || b.asset_name.toLowerCase().includes(s));
    }));
    this.reject = (e) => this._state.rejectBooking(e);
    this.approve = (e) => this._state.approveBooking(e);
    this.editReservation = (e) => this._state.editReservation(e);
  }
  get time_format() {
    return this._settings.time_format;
  }
  ngOnInit() {
    this.subscription("poll", this._state.startPolling());
  }
};
_ParkingBookingsListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingBookingsListComponent_BaseFactory;
  return function ParkingBookingsListComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingBookingsListComponent_BaseFactory || (\u0275ParkingBookingsListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingBookingsListComponent)))(__ngFactoryType__ || _ParkingBookingsListComponent);
  };
})();
_ParkingBookingsListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingBookingsListComponent, selectors: [["parking-bookings-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 27, vars: 58, consts: [["date_template", ""], ["person_template", ""], ["host_template", ""], ["state_template", ""], ["plate_template", ""], ["status_template", ""], ["action_template", ""], ["menu", "matMenu"], [1, "sticky", "left-0", "w-full"], [1, "block", "min-w-304", "text-sm", 3, "data", "columns", "filter", "sortable", "empty_message"], [1, "h-20", "w-full"], [1, "px-4", "py-2"], [1, "text-xs", "opacity-30"], ["matTooltipPosition", "right", 1, "bg-base-300", "text-base-100", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-warning", "text-warning-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], ["matTooltipPosition", "right", 1, "bg-success", "text-success-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl", 3, "matTooltip"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "px-4"], ["matRipple", "", 1, "h-10", "w-30", "rounded-3xl", "border-none", 3, "matMenuTriggerFor", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "pl-4"], [1, "flex-1", "text-left"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "pr-2"], [1, "mx-auto", "flex", "items-center", "justify-end", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "disabled", "matTooltip"]], template: function ParkingBookingsListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 8);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 9);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275pipe(10, "async");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275template(12, ParkingBookingsListComponent_ng_template_12_Template, 5, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(14, ParkingBookingsListComponent_ng_template_14_Template, 4, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(16, ParkingBookingsListComponent_ng_template_16_Template, 4, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(18, ParkingBookingsListComponent_ng_template_18_Template, 3, 3, "ng-template", null, 3, \u0275\u0275templateRefExtractor)(20, ParkingBookingsListComponent_ng_template_20_Template, 3, 2, "ng-template", null, 4, \u0275\u0275templateRefExtractor)(22, ParkingBookingsListComponent_ng_template_22_Template, 24, 29, "ng-template", null, 5, \u0275\u0275templateRefExtractor)(24, ParkingBookingsListComponent_ng_template_24_Template, 5, 4, "ng-template", null, 6, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(26, "div", 10);
  }
  if (rf & 2) {
    let tmp_7_0;
    let tmp_10_0;
    const date_template_r12 = \u0275\u0275reference(13);
    const person_template_r13 = \u0275\u0275reference(15);
    const host_template_r14 = \u0275\u0275reference(17);
    const state_template_r15 = \u0275\u0275reference(19);
    const plate_template_r16 = \u0275\u0275reference(21);
    const status_template_r17 = \u0275\u0275reference(23);
    const action_template_r18 = \u0275\u0275reference(25);
    \u0275\u0275classProp("opacity-0", !((tmp_7_0 = \u0275\u0275pipeBind1(1, 7, ctx.loading)) == null ? null : tmp_7_0.includes("bookings")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.filtered_events)("columns", \u0275\u0275pureFunction8(49, _c8, \u0275\u0275pureFunction2(27, _c0, \u0275\u0275pipeBind1(3, 9, "COMMON.STATUS_BUSY"), state_template_r15), \u0275\u0275pureFunction2(30, _c1, \u0275\u0275pipeBind1(4, 11, "FORM.TIME"), date_template_r12), \u0275\u0275pureFunction1(33, _c2, \u0275\u0275pipeBind1(5, 13, "APP.CONCIERGE.PARKING_BAY_NUMBER")), \u0275\u0275pureFunction2(35, _c3, \u0275\u0275pipeBind1(6, 15, "APP.CONCIERGE.PARKING_RESERVED_FOR"), person_template_r13), \u0275\u0275pureFunction2(38, _c4, \u0275\u0275pipeBind1(7, 17, "APP.CONCIERGE.PARKING_RESERVED_BY"), host_template_r14), \u0275\u0275pureFunction2(41, _c5, \u0275\u0275pipeBind1(8, 19, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r16), \u0275\u0275pureFunction2(44, _c6, \u0275\u0275pipeBind1(9, 21, "COMMON.STATUS"), status_template_r17), \u0275\u0275pureFunction1(47, _c7, action_template_r18)))("filter", (tmp_10_0 = \u0275\u0275pipeBind1(10, 23, ctx.options)) == null ? null : tmp_10_0.search)("sortable", true)("empty_message", \u0275\u0275pipeBind1(11, 25, "APP.CONCIERGE.PARKING_BOOKINGS_EMPTY"));
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DatePipe,
  MatProgressBarModule,
  MatProgressBar,
  SimpleTableComponent,
  TranslatePipe,
  MatRippleModule,
  MatRipple,
  IconComponent,
  MatMenuModule,
  MatMenu,
  MatMenuItem,
  MatMenuTrigger,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingBookingsListComponent = _ParkingBookingsListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingBookingsListComponent, [{
    type: Component,
    args: [{ selector: "parking-bookings-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('bookings')"
            class="sticky left-0 w-full"
        />
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
            [empty_message]="'APP.CONCIERGE.PARKING_BOOKINGS_EMPTY' | translate"
        />
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
      IconComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingBookingsListComponent, { className: "ParkingBookingsListComponent", filePath: "apps/concierge/src/app/parking/parking-bookings-list.component.ts", lineNumber: 246 });
})();

// apps/concierge/src/app/parking/parking-map.component.ts
var _c02 = () => ({ controls: true });
var _ParkingMapComponent = class _ParkingMapComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._explore = inject(ExploreStateService);
    this._ex_parking = inject(ExploreParkingService);
    this._parking = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this.url = this._explore.map_url;
    this.styles = this._explore.map_styles;
    this.features = this._explore.map_features;
    this.actions = this._explore.map_actions;
    this.labels = this._explore.map_labels;
    this.locate = "";
  }
  async ngOnInit() {
    await this._org.initialised.pipe(first((_) => _)).toPromise();
    this.subscription("parking_level", this._parking.options.subscribe((_) => {
      const level_list = this._org.levelsForBuilding();
      const zone = _.zones[0] || level_list.find((_2) => _2.tags.includes("parking"))?.id;
      this._explore.setLevel(zone);
    }));
    this.subscription("parking_poll", this._ex_parking.startPolling());
    this.subscription("parking_options", this._parking.options.subscribe((_) => {
      this._ex_parking.setOptions(_);
    }));
    this._ex_parking.on_book = async (space) => {
      const options = await nextValueFrom(this._parking.options);
      await this._parking.editReservation(void 0, {
        space: __spreadProps(__spreadValues({}, space), {
          zone: this._org.levelWithID([space.zone_id || space.zone])
        }),
        date: options.date
      });
    };
  }
};
_ParkingMapComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingMapComponent_BaseFactory;
  return function ParkingMapComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingMapComponent_BaseFactory || (\u0275ParkingMapComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingMapComponent)))(__ngFactoryType__ || _ParkingMapComponent);
  };
})();
_ParkingMapComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingMapComponent, selectors: [["parking-map"]], features: [\u0275\u0275ProvidersFeature([ExploreParkingService]), \u0275\u0275InheritDefinitionFeature], decls: 7, vars: 18, consts: [[1, "bg-base-200", "relative", "my-2", "h-[calc(100%-1.5rem)]", "w-full", "rounded-xl", "shadow-sm"], [3, "src", "styles", "features", "actions", "labels", "options", "focus"]], template: function ParkingMapComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0);
    \u0275\u0275element(1, "interactive-map", 1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275pipe(4, "async");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("src", \u0275\u0275pipeBind1(2, 7, ctx.url))("styles", \u0275\u0275pipeBind1(3, 9, ctx.styles))("features", \u0275\u0275pipeBind1(4, 11, ctx.features))("actions", \u0275\u0275pipeBind1(5, 13, ctx.actions))("labels", \u0275\u0275pipeBind1(6, 15, ctx.labels))("options", \u0275\u0275pureFunction0(17, _c02))("focus", ctx.locate);
  }
}, dependencies: [CommonModule, AsyncPipe, InteractiveMapComponent], encapsulation: 2 });
var ParkingMapComponent = _ParkingMapComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingMapComponent, [{
    type: Component,
    args: [{ selector: "parking-map", template: `
        <div
            class="bg-base-200 relative my-2 h-[calc(100%-1.5rem)] w-full rounded-xl shadow-sm"
        >
            <interactive-map
                [src]="url | async"
                [styles]="styles | async"
                [features]="features | async"
                [actions]="actions | async"
                [labels]="labels | async"
                [options]="{ controls: true }"
                [focus]="locate"
            ></interactive-map>
        </div>
    `, providers: [ExploreParkingService], imports: [CommonModule, InteractiveMapComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingMapComponent, { className: "ParkingMapComponent", filePath: "apps/concierge/src/app/parking/parking-map.component.ts", lineNumber: 34 });
})();

// apps/concierge/src/app/parking/parking-space-list.component.ts
var _c03 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c12 = (a0) => ({ key: "assigned_to", name: "Assigned", content: a0 });
var _c22 = (a0) => ({ key: "notes", name: a0 });
var _c32 = (a0, a1) => ({ key: "status", name: a0, content: a1, sortable: false, size: "4.5rem" });
var _c42 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c52 = (a0, a1, a2, a3, a4) => [a0, a1, a2, a3, a4];
function ParkingSpaceListComponent_ng_template_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon", 8);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const row_r1 = ctx.row;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-warning", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("text-warning-content", !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free")) && !(ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy")))("bg-success", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("text-success-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("free"))("bg-error", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"))("text-error-content", ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("busy"));
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 14, ctx_r1.statusTooltip(ctx_r1.space_status[row_r1.id])));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("assigned")) ? "person" : (ctx_r1.space_status[row_r1.id] == null ? null : ctx_r1.space_status[row_r1.id].includes("reuse")) ? "event_available" : "question_mark", " ");
  }
}
function ParkingSpaceListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_9_Template_button_click_0_listener() {
      const row_r4 = \u0275\u0275restoreView(_r3).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(row_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
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
    \u0275\u0275elementStart(0, "div", 12);
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
    \u0275\u0275elementStart(0, "div", 11);
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
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_11_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const data_r7 = \u0275\u0275nextContext().data;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.copyToClipboard(data_r7, "assigned"));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, ParkingSpaceListComponent_ng_template_11_Conditional_1_Conditional_3_Template, 2, 1, "div", 11);
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
    \u0275\u0275conditionalCreate(0, ParkingSpaceListComponent_ng_template_11_Conditional_0_Template, 3, 3, "div", 12);
    \u0275\u0275conditionalCreate(1, ParkingSpaceListComponent_ng_template_11_Conditional_1_Template, 4, 2, "button", 13);
  }
  if (rf & 2) {
    const data_r7 = ctx.data;
    \u0275\u0275conditional(!data_r7 ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(data_r7 ? 1 : -1);
  }
}
function ParkingSpaceListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "button", 15);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_13_Template_button_click_1_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.editSpace(row_r11));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 16);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingSpaceListComponent_ng_template_13_Template_button_click_5_listener() {
      const row_r11 = \u0275\u0275restoreView(_r10).row;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.removeSpace(row_r11));
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
var _ParkingSpaceListComponent = class _ParkingSpaceListComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.spaces = this._state.spaces;
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.bookings = this._state.bookings;
    this.space_status = {};
    this.editSpace = (s) => this._state.editSpace(s);
    this.removeSpace = (s) => this._state.removeSpace(s);
  }
  ngOnInit() {
    this.subscription("bookings", combineLatest([this.spaces, this.bookings]).subscribe(([spaces, bookings]) => this._updateStatusList(spaces, bookings)));
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
  _updateStatusList(spaces, bookings) {
    for (const space of spaces) {
      const booking = bookings.find((_) => _.asset_id === space.id && _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended");
      if (space.assigned_to && !booking) {
        this.space_status[space.id] = "assigned_free";
      } else if (space.assigned_to && booking && booking.user_email === space.assigned_to) {
        this.space_status[space.id] = "assigned_busy";
      } else if (space.assigned_to && booking && booking.user_email !== space.assigned_to) {
        this.space_status[space.id] = "reuse_busy";
      } else if (!space.assigned_to && booking) {
        this.space_status[space.id] = "busy";
      } else {
        this.space_status[space.id] = "free";
      }
    }
  }
};
_ParkingSpaceListComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingSpaceListComponent_BaseFactory;
  return function ParkingSpaceListComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingSpaceListComponent_BaseFactory || (\u0275ParkingSpaceListComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingSpaceListComponent)))(__ngFactoryType__ || _ParkingSpaceListComponent);
  };
})();
_ParkingSpaceListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingSpaceListComponent, selectors: [["parking-space-list"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 34, consts: [["status_template", ""], ["name_template", ""], ["assigned_template", ""], ["action_template", ""], [1, "w-full"], [1, "block", "min-w-208", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], ["matTooltipPosition", "left", 1, "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", 3, "matTooltip"], [1, "text-2xl"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "p-4", "opacity-30"], [1, "px-4", "py-2", "text-left", "leading-tight"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", "matRipple", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingSpaceListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, ParkingSpaceListComponent_ng_template_7_Template, 4, 16, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(9, ParkingSpaceListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(11, ParkingSpaceListComponent_ng_template_11_Template, 2, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(13, ParkingSpaceListComponent_ng_template_13_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(15, "div", 6);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const status_template_r12 = \u0275\u0275reference(8);
    const name_template_r13 = \u0275\u0275reference(10);
    const assigned_template_r14 = \u0275\u0275reference(12);
    const action_template_r15 = \u0275\u0275reference(14);
    \u0275\u0275classProp("opacity-0", !((tmp_4_0 = \u0275\u0275pipeBind1(1, 6, ctx.loading)) == null ? null : tmp_4_0.includes("spaces")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.spaces)("columns", \u0275\u0275pureFunction5(28, _c52, \u0275\u0275pureFunction2(16, _c03, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_BAY"), name_template_r13), \u0275\u0275pureFunction1(19, _c12, assigned_template_r14), \u0275\u0275pureFunction1(21, _c22, \u0275\u0275pipeBind1(4, 10, "FORM.NOTES")), \u0275\u0275pureFunction2(23, _c32, \u0275\u0275pipeBind1(5, 12, "COMMON.STATUS"), status_template_r12), \u0275\u0275pureFunction1(26, _c42, action_template_r15)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(6, 14, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
var ParkingSpaceListComponent = _ParkingSpaceListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingSpaceListComponent, [{
    type: Component,
    args: [{ selector: "parking-space-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('spaces')"
            class="w-full"
        />
        <simple-table
            class="block min-w-208 text-sm"
            [data]="spaces"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.PARKING_BAY' | translate,
                    content: name_template,
                },
                {
                    key: 'assigned_to',
                    name: 'Assigned',
                    content: assigned_template,
                },
                { key: 'notes', name: 'FORM.NOTES' | translate },
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
            [filter]="(options | async)?.search"
            [sortable]="true"
        />
        <ng-template #status_template let-row="row">
            <div
                class="mx-auto flex h-8 w-8 items-center justify-center rounded-sm"
                [class.bg-warning]="
                    !space_status[row.id]?.includes('free') &&
                    !space_status[row.id]?.includes('busy')
                "
                [class.text-warning-content]="
                    !space_status[row.id]?.includes('free') &&
                    !space_status[row.id]?.includes('busy')
                "
                [class.bg-success]="space_status[row.id]?.includes('free')"
                [class.text-success-content]="
                    space_status[row.id]?.includes('free')
                "
                [class.bg-error]="space_status[row.id]?.includes('busy')"
                [class.text-error-content]="
                    space_status[row.id]?.includes('busy')
                "
                [matTooltip]="statusTooltip(space_status[row.id]) | translate"
                matTooltipPosition="left"
            >
                <icon class="text-2xl">
                    {{
                        space_status[row.id]?.includes('assigned')
                            ? 'person'
                            : space_status[row.id]?.includes('reuse')
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
        <div class="h-20 w-full"></div>
    `, imports: [
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingSpaceListComponent, { className: "ParkingSpaceListComponent", filePath: "apps/concierge/src/app/parking/parking-space-list.component.ts", lineNumber: 159 });
})();

// apps/concierge/src/app/parking/parking-users-list.component.ts
var _c04 = (a0, a1) => ({ key: "name", name: a0, content: a1 });
var _c13 = (a0) => ({ key: "car_color", name: a0 });
var _c23 = (a0, a1) => ({ key: "plate_number", name: a0, content: a1 });
var _c33 = (a0) => ({ key: "notes", name: a0 });
var _c43 = (a0, a1) => ({ key: "deny", name: a0, size: "4.5rem", content: a1 });
var _c53 = (a0) => ({ key: "actions", name: " ", content: a0, sortable: false, size: "6.5rem" });
var _c62 = (a0, a1, a2, a3, a4, a5) => [a0, a1, a2, a3, a4, a5];
function ParkingUsersListComponent_ng_template_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 7);
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_9_Template_button_click_0_listener() {
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
function ParkingUsersListComponent_ng_template_11_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ParkingUsersListComponent_ng_template_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ParkingUsersListComponent_ng_template_11_Conditional_0_Template, 3, 0, "div", 10);
  }
  if (rf & 2) {
    const data_r5 = ctx.data;
    \u0275\u0275conditional(data_r5 ? 0 : -1);
  }
}
function ParkingUsersListComponent_ng_template_13_Conditional_2_Template(rf, ctx) {
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
function ParkingUsersListComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ParkingUsersListComponent_ng_template_13_Conditional_2_Template, 3, 3, "span", 12);
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
function ParkingUsersListComponent_ng_template_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 13)(1, "button", 14);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_1_listener() {
      const row_r8 = \u0275\u0275restoreView(_r7).row;
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.editUser(row_r8));
    });
    \u0275\u0275elementStart(3, "icon");
    \u0275\u0275text(4, "edit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "button", 15);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275listener("click", function ParkingUsersListComponent_ng_template_15_Template_button_click_5_listener() {
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
var _ParkingUsersListComponent = class _ParkingUsersListComponent {
  constructor() {
    this._state = inject(ParkingStateService);
    this._clipboard = inject(Clipboard);
    this.options = this._state.options;
    this.loading = this._state.loading;
    this.new_items = new BehaviorSubject([]);
    this.user_list = this._state.users;
    this.editUser = (u) => this._state.editUser(u);
    this.removeUser = (u) => this._state.removeUser(u);
  }
  copyToClipboard(id) {
    const success = this._clipboard.copy(id);
    if (success)
      notifySuccess(i18n("APP.CONCIERGE.PARKING_COPIED_USER"));
  }
};
_ParkingUsersListComponent.\u0275fac = function ParkingUsersListComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ParkingUsersListComponent)();
};
_ParkingUsersListComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingUsersListComponent, selectors: [["parking-users-list"]], decls: 18, vars: 42, consts: [["name_template", ""], ["denied_template", ""], ["plate_template", ""], ["action_template", ""], [1, "w-full"], [1, "block", "min-w-272", "text-sm", 3, "data", "columns", "filter", "sortable"], [1, "h-20", "w-full"], [1, "px-4", "py-2", "text-left", "leading-tight", 3, "click"], [1, ""], [1, "font-mono", "text-[0.625rem]", "opacity-30"], [1, "bg-error", "text-error-content", "mx-auto", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-sm", "text-2xl"], [1, "p-4", "font-mono", "text-sm", "uppercase"], [1, "opacity-30"], [1, "mx-auto", "flex", "items-center", "space-x-2"], ["icon", "", "matRipple", "", 3, "click", "matTooltip"], ["icon", "", 1, "text-error", 3, "click", "matTooltip"]], template: function ParkingUsersListComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 4);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275element(2, "simple-table", 5);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, ParkingUsersListComponent_ng_template_9_Template, 5, 2, "ng-template", null, 0, \u0275\u0275templateRefExtractor)(11, ParkingUsersListComponent_ng_template_11_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor)(13, ParkingUsersListComponent_ng_template_13_Template, 3, 2, "ng-template", null, 2, \u0275\u0275templateRefExtractor)(15, ParkingUsersListComponent_ng_template_15_Template, 9, 6, "ng-template", null, 3, \u0275\u0275templateRefExtractor);
    \u0275\u0275element(17, "div", 6);
  }
  if (rf & 2) {
    let tmp_4_0;
    let tmp_7_0;
    const name_template_r9 = \u0275\u0275reference(10);
    const denied_template_r10 = \u0275\u0275reference(12);
    const plate_template_r11 = \u0275\u0275reference(14);
    const action_template_r12 = \u0275\u0275reference(16);
    \u0275\u0275classProp("opacity-0", !((tmp_4_0 = \u0275\u0275pipeBind1(1, 6, ctx.loading)) == null ? null : tmp_4_0.includes("users")));
    \u0275\u0275advance(2);
    \u0275\u0275property("data", ctx.user_list)("columns", \u0275\u0275pureFunction6(35, _c62, \u0275\u0275pureFunction2(20, _c04, \u0275\u0275pipeBind1(3, 8, "APP.CONCIERGE.PARKING_USER"), name_template_r9), \u0275\u0275pureFunction1(23, _c13, \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_CAR_COLOUR")), \u0275\u0275pureFunction2(25, _c23, \u0275\u0275pipeBind1(5, 12, "EXPLORE.PARKING_PLATE_NUMBER"), plate_template_r11), \u0275\u0275pureFunction1(28, _c33, \u0275\u0275pipeBind1(6, 14, "FORM.NOTES")), \u0275\u0275pureFunction2(30, _c43, \u0275\u0275pipeBind1(7, 16, "APP.CONCIERGE.PARKING_USER_DENY"), denied_template_r10), \u0275\u0275pureFunction1(33, _c53, action_template_r12)))("filter", (tmp_7_0 = \u0275\u0275pipeBind1(8, 18, ctx.options)) == null ? null : tmp_7_0.search)("sortable", true);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  MatProgressBarModule,
  MatProgressBar,
  SimpleTableComponent,
  IconComponent,
  TranslatePipe,
  MatTooltipModule,
  MatTooltip
], encapsulation: 2 });
var ParkingUsersListComponent = _ParkingUsersListComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingUsersListComponent, [{
    type: Component,
    args: [{ selector: "parking-users-list", template: `
        <mat-progress-bar
            [class.opacity-0]="!(loading | async)?.includes('users')"
            class="w-full"
        />
        <simple-table
            class="block min-w-272 text-sm"
            [data]="user_list"
            [columns]="[
                {
                    key: 'name',
                    name: 'APP.CONCIERGE.PARKING_USER' | translate,
                    content: name_template,
                },
                {
                    key: 'car_color',
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
            [filter]="(options | async)?.search"
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
      CommonModule,
      MatProgressBarModule,
      SimpleTableComponent,
      IconComponent,
      TranslatePipe,
      SimpleTableComponent,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingUsersListComponent, { className: "ParkingUsersListComponent", filePath: "apps/concierge/src/app/parking/parking-users-list.component.ts", lineNumber: 124 });
})();

// apps/concierge/src/app/parking/parking-topbar.component.ts
var _c05 = () => ["events", "list"];
var _c14 = () => ["events", "map"];
function ParkingTopbarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingSpace());
    });
    \u0275\u0275elementStart(2, "div", 17);
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
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newParkingUser());
    });
    \u0275\u0275elementStart(1, "div", 17);
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
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.newReservation());
    });
    \u0275\u0275elementStart(1, "div", 17);
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
function ParkingTopbarComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "a", 20);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementStart(3, "icon", 21);
    \u0275\u0275text(4, "list");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "a", 22);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementStart(7, "icon", 21);
    \u0275\u0275text(8, "map");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "list");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c05))("matTooltip", \u0275\u0275pipeBind1(2, 8, "COMMON.LIST"));
    \u0275\u0275advance(4);
    \u0275\u0275classProp("inverse", ctx_r1.view() !== "map");
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c14))("matTooltip", \u0275\u0275pipeBind1(6, 10, "COMMON.MAP"));
  }
}
function ParkingTopbarComponent_For_18_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "building");
    \u0275\u0275elementStart(3, "span", 25);
    \u0275\u0275text(4, " - ");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_11_0;
    const level_r5 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", (tmp_11_0 = \u0275\u0275pipeBind1(2, 1, level_r5.parent_id)) == null ? null : tmp_11_0.display_name, " ");
  }
}
function ParkingTopbarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 12)(1, "div", 23);
    \u0275\u0275conditionalCreate(2, ParkingTopbarComponent_For_18_Conditional_2_Template, 5, 3, "div", 24);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const level_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("value", level_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.use_region ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", level_r5.display_name || level_r5.name, " ");
  }
}
function ParkingTopbarComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function ParkingTopbarComponent_Conditional_21_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
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
function ParkingTopbarComponent_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275elementStart(4, "icon", 27);
    \u0275\u0275text(5, "car_lock");
    \u0275\u0275elementEnd();
    \u0275\u0275declareLet(6);
    \u0275\u0275pipe(7, "async");
    \u0275\u0275pipe(8, "async");
    \u0275\u0275elementStart(9, "span", 28);
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
    const percent_r7 = (((tmp_2_0 = \u0275\u0275pipeBind1(7, 19, ctx_r1.bookings)) == null ? null : tmp_2_0.length) || 0) / (((tmp_2_0 = \u0275\u0275pipeBind1(8, 21, ctx_r1.spaces)) == null ? null : tmp_2_0.length) || 0);
    \u0275\u0275advance(8);
    \u0275\u0275classProp("bg-error", percent_r7 === 100)("text-error-content", percent_r7 === 100)("bg-warning", percent_r7 > 50 && percent_r7 < 100)("text-warning-content", percent_r7 > 50 && percent_r7 < 100)("bg-success", percent_r7 < 50)("text-success-content", percent_r7 < 50);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind2(11, 23, percent_r7 * 100, "2.0-0"), "%");
  }
}
function ParkingTopbarComponent_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-options", 29);
    \u0275\u0275listener("dateChange", function ParkingTopbarComponent_Conditional_23_Template_date_options_dateChange_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
}
var _ParkingTopbarComponent = class _ParkingTopbarComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._org = inject(OrganisationService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.section = signal("events");
    this.view = signal("list");
    this.zones = [];
    this.levels = this._state.levels;
    this.options = this._state.options;
    this.spaces = this._state.spaces;
    this.bookings = this._state.bookings;
    this.setDate = (d) => this._state.setOptions({ date: d });
    this.setSearch = (str) => this._state.setOptions({ search: str });
    this.updateZones = (z) => {
      if (!this._router.url.includes("parking"))
        return;
      this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone_ids: z.join(",") },
        queryParamsHandling: "merge"
      });
      this._state.setOptions({ zones: z });
    };
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
  }
};
_ParkingTopbarComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingTopbarComponent_BaseFactory;
  return function ParkingTopbarComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingTopbarComponent_BaseFactory || (\u0275ParkingTopbarComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingTopbarComponent)))(__ngFactoryType__ || _ParkingTopbarComponent);
  };
})();
_ParkingTopbarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingTopbarComponent, selectors: [["parking-topbar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 24, vars: 22, consts: [[1, "flex", "w-full", "items-center", "space-x-2", "px-8", "py-4"], [1, "text-2xl", "font-medium"], [1, "w-px", "flex-1"], [1, "mr-2", 3, "modelChange", "model"], [3, "matTooltip"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "disabled"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2"], [1, "bg-base-100", "mb-2", "flex", "h-14", "items-center", "px-8"], [1, "mr-2", "flex", "items-center"], ["appearance", "outline", 1, "no-subscript", "w-56"], ["multiple", "", 3, "ngModelChange", "ngModel", "placeholder"], [3, "value"], [1, "w-px", "min-w-2", "flex-1"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "matTooltip"], ["matTooltip", "Parking Spaces Occupied", 1, "border-base-300", "mr-2", "flex", "items-center", "space-x-2", "rounded-md", "border", "py-1", "pr-1", "pl-3", "text-sm"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click", "disabled"], [1, "pl-2"], ["btn", "", "matRipple", "", 1, "w-40", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", 1, "w-48", "space-x-2", 3, "click"], ["btn", "", "matRipple", "", "name", "deals-list", 1, "rounded-l", "rounded-r-none", "px-2", 3, "routerLink", "matTooltip"], [1, "text-2xl"], ["btn", "", "matRipple", "", "name", "deals-grid", 1, "rounded-l-none", "rounded-r", "px-2", 3, "routerLink", "matTooltip"], [1, "flex", "flex-col-reverse"], [1, "text-xs", "opacity-30"], [1, "opacity-0"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click", "matTooltip"], [1, "ml-1!", "text-lg"], [1, "rounded-sm", "px-2", "py-1", "font-mono", "text-xs"], [3, "dateChange"]], template: function ParkingTopbarComponent_Template(rf, ctx) {
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
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 8);
    \u0275\u0275conditionalCreate(13, ParkingTopbarComponent_Conditional_13_Template, 9, 14, "div", 9);
    \u0275\u0275elementStart(14, "mat-form-field", 10)(15, "mat-select", 11);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_15_listener($event) {
      \u0275\u0275twoWayBindingSet(ctx.zones, $event) || (ctx.zones = $event);
      return $event;
    });
    \u0275\u0275listener("ngModelChange", function ParkingTopbarComponent_Template_mat_select_ngModelChange_15_listener($event) {
      return ctx.updateZones($event);
    });
    \u0275\u0275repeaterCreate(17, ParkingTopbarComponent_For_18_Template, 5, 3, "mat-option", 12, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275pipe(19, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(20, "div", 13);
    \u0275\u0275conditionalCreate(21, ParkingTopbarComponent_Conditional_21_Template, 4, 3, "button", 14);
    \u0275\u0275conditionalCreate(22, ParkingTopbarComponent_Conditional_22_Template, 12, 26, "div", 15);
    \u0275\u0275conditionalCreate(23, ParkingTopbarComponent_Conditional_23_Template, 1, 0, "date-options");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 12, ctx.section() !== "events" ? "APP.CONCIERGE.PARKING_HEADER" : "APP.CONCIERGE.PARKING_BOOK_HEADER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("model", (tmp_1_0 = \u0275\u0275pipeBind1(6, 14, ctx.options)) == null ? null : tmp_1_0.search);
    \u0275\u0275advance(2);
    \u0275\u0275property("matTooltip", ((tmp_2_0 = \u0275\u0275pipeBind1(8, 16, ctx.options)) == null ? null : tmp_2_0.zones == null ? null : tmp_2_0.zones.length) ? "" : "Select a level to add a space");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.view() === "spaces" ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "users" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.section() === "events" && !ctx.disable_reservations ? 11 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx.section() === "events" ? 13 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx.zones);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(16, 18, "COMMON.LEVEL_ALL"));
    \u0275\u0275advance(2);
    \u0275\u0275repeater(\u0275\u0275pipeBind1(19, 20, ctx.levels));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx.view() !== "list" && ctx.view() !== "map" ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.section() === "events" ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx.view() === "list" || ctx.view() === "map" ? 23 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
  DecimalPipe,
  FormsModule,
  NgControlStatus,
  NgModel,
  DateOptionsComponent,
  MatTooltipModule,
  MatTooltip,
  MatRippleModule,
  MatRipple,
  IconComponent,
  BuildingPipe,
  MatFormFieldModule,
  MatFormField,
  MatSelectModule,
  MatSelect,
  MatOption,
  SearchbarComponent,
  TranslatePipe,
  RouterModule,
  RouterLink
], styles: ["\n\nbutton[_ngcontent-%COMP%] {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */"] });
var ParkingTopbarComponent = _ParkingTopbarComponent;
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
                        [class.inverse]="view() !== 'list'"
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
            <mat-form-field appearance="outline" class="no-subscript w-56">
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
            <div class="w-px min-w-2 flex-1"></div>
            @if (view() !== 'list' && view() !== 'map') {
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
            @if (view() === 'list' || view() === 'map') {
                <date-options (dateChange)="setDate($event)"></date-options>
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
      FormsModule,
      SearchbarComponent,
      TranslatePipe,
      RouterModule
    ], styles: ["/* angular:styles/component:css;4bb26a1eb5035846e32fdbd8af6a308e831b6910e15ebdbaee0887184c668792;/home/runner/work/user-interfaces/user-interfaces/apps/concierge/src/app/parking/parking-topbar.component.ts */\nbutton {\n  min-width: 0;\n  padding: 0 0.85rem;\n}\nmat-form-field {\n  height: 3.25em;\n  width: 8em;\n}\n/*# sourceMappingURL=parking-topbar.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingTopbarComponent, { className: "ParkingTopbarComponent", filePath: "apps/concierge/src/app/parking/parking-topbar.component.ts", lineNumber: 230 });
})();

// apps/concierge/src/app/parking/parking.component.ts
var _c06 = () => ["/book", "parking", "manage", "spaces"];
var _c15 = () => ["/book", "parking", "manage", "users"];
var _c24 = () => ["/book", "parking", "manage", "map"];
function ParkingComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "nav", 7)(2, "a", 8);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a", 8);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "a", 8);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-tab-nav-panel", null, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tabPanel_r1 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("tabPanel", tabPanel_r1);
    \u0275\u0275advance();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(16, _c06))("active", ctx_r1.view() === "spaces");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 10, "APP.CONCIERGE.PARKING_TAB_SPACES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(17, _c15))("active", ctx_r1.view() === "users");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "APP.CONCIERGE.PARKING_TAB_USERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(18, _c24))("active", ctx_r1.view() === "map");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "APP.CONCIERGE.PARKING_TAB_MAP"), " ");
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
var _ParkingComponent = class _ParkingComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ParkingStateService);
    this._router = inject(Router);
    this.levels = this._state.levels;
    this.section = signal("events");
    this.view = signal("list");
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
    const [section, view] = parts.slice(-2);
    this.section.set(section);
    this.view.set(view.split("?")[0]);
  }
};
_ParkingComponent.\u0275fac = /* @__PURE__ */ (() => {
  let \u0275ParkingComponent_BaseFactory;
  return function ParkingComponent_Factory(__ngFactoryType__) {
    return (\u0275ParkingComponent_BaseFactory || (\u0275ParkingComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ParkingComponent)))(__ngFactoryType__ || _ParkingComponent);
  };
})();
_ParkingComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ParkingComponent, selectors: [["app-parking"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 11, vars: 4, consts: [["tabPanel", ""], [1, "flex", "h-px", "flex-1"], [1, "relative", "flex", "h-full", "w-1/2", "flex-1", "flex-col"], [1, "px-8", "pb-2"], [1, "relative", "h-1/2", "w-full", "flex-1", "overflow-auto", "px-8"], [1, "h-full", "w-full", "overflow-auto"], [1, "absolute", "inset-0", "z-50", "flex", "flex-col", "items-center", "justify-center"], ["mat-tab-nav-bar", "", 1, "bg-base-200", "overflow-hidden", "rounded-sm", 3, "tabPanel"], ["mat-tab-link", "", 3, "routerLink", "active"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-80"], [1, "z-10", "opacity-60"]], template: function ParkingComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "app-topbar");
    \u0275\u0275elementStart(1, "div", 1);
    \u0275\u0275element(2, "app-sidebar");
    \u0275\u0275elementStart(3, "main", 2);
    \u0275\u0275element(4, "parking-topbar");
    \u0275\u0275conditionalCreate(5, ParkingComponent_Conditional_5_Template, 13, 19, "div", 3);
    \u0275\u0275elementStart(6, "div", 4)(7, "div", 5);
    \u0275\u0275element(8, "router-outlet");
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, ParkingComponent_Conditional_9_Template, 5, 3, "div", 6);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_1_0;
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx.section() !== "events" ? 5 : -1);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(!((tmp_1_0 = \u0275\u0275pipeBind1(10, 2, ctx.levels)) == null ? null : tmp_1_0.length) ? 9 : -1);
  }
}, dependencies: [
  CommonModule,
  AsyncPipe,
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
], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n  background-color: var(--base-100);\n}\nsidebar[_ngcontent-%COMP%] {\n  height: 100%;\n}\nmain[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 50%;\n  height: 100%;\n}\n/*# sourceMappingURL=parking.component.css.map */"] });
var ParkingComponent = _ParkingComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingComponent, [{
    type: Component,
    args: [{ selector: "app-parking", template: `
        <app-topbar />
        <div class="flex h-px flex-1">
            <app-sidebar></app-sidebar>
            <main class="relative flex h-full w-1/2 flex-1 flex-col">
                <parking-topbar></parking-topbar>
                @if (section() !== 'events') {
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
                @if (!(levels | async)?.length) {
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
      CommonModule,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ParkingComponent, { className: "ParkingComponent", filePath: "apps/concierge/src/app/parking/parking.component.ts", lineNumber: 130 });
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
          { path: "list", component: ParkingBookingsListComponent },
          { path: "**", redirectTo: "list" }
        ]
      },
      {
        path: "manage",
        children: [
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
var _AppParkingModule = class _AppParkingModule {
};
_AppParkingModule.\u0275fac = function AppParkingModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppParkingModule)();
};
_AppParkingModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppParkingModule });
_AppParkingModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  ParkingComponent,
  ParkingBookingsListComponent,
  ParkingSpaceListComponent,
  ParkingUsersListComponent,
  ParkingMapComponent,
  RouterModule.forChild(ROUTES)
] });
var AppParkingModule = _AppParkingModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AppParkingModule, [{
    type: NgModule,
    args: [{
      declarations: [],
      imports: [
        ParkingComponent,
        ParkingBookingsListComponent,
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
//# sourceMappingURL=parking.module-QB423CSL.js.map
