import {
  ScheduleStateService
} from "./chunk-BAH4YINJ.js";
import {
  AsyncHandler,
  AsyncPipe,
  BookingCardComponent,
  BookingFormService,
  CalendarEvent,
  CommonModule,
  DateCalendarComponent,
  DatePipe,
  EventCardComponent,
  EventFormService,
  FooterMenuComponent,
  FormsModule,
  IconComponent,
  MatBottomSheet,
  MatBottomSheetModule,
  MatBottomSheetRef,
  MatCheckbox,
  MatDialog,
  MatFormField,
  MatOption,
  MatProgressBar,
  MatRipple,
  MatSelect,
  MatTooltip,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgForOf,
  NgIf,
  NgModel,
  OrganisationService,
  Router,
  RouterModule,
  SettingsService,
  SharedComponentModule,
  SlicePipe,
  TopbarComponent,
  TranslatePipe,
  addDays,
  addMonths,
  checkinBooking,
  checkinBookingInstance,
  combineLatest,
  currentUser,
  debounceTime,
  filter,
  format,
  forwardRef,
  isBefore,
  isSameDay,
  isSameMonth,
  map,
  notifyError,
  notifySuccess,
  openConfirmModal,
  parse,
  queryEvents,
  removeBooking,
  removeEvent,
  startOfDay,
  startOfMonth,
  startOfWeek,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵclassProp,
  ɵɵdefineComponent,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵi18n,
  ɵɵi18nApply,
  ɵɵi18nExp,
  ɵɵlistener,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵreference,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-OTXONO57.js";
import {
  __async
} from "./chunk-4MWRP73S.js";

// apps/workplace/src/app/new-schedule/schedule-filter-card.component.ts
function ScheduleFilterCardComponent_button_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event"));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "app-icon");
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 22);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "WPA.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_ROOM_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("event"));
  }
}
function ScheduleFilterCardComponent_button_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk"));
    });
    \u0275\u0275elementStart(1, "div", 18);
    \u0275\u0275element(2, "img", 24);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 19)(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 21);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-checkbox", 22);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "WPA.DESK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "WPA.SCHEDULE_DESK_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(11, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("desk"));
  }
}
function ScheduleFilterCardComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 25);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking"));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "app-icon");
    \u0275\u0275text(3, "drive_eta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 22);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "WPA.PARKING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_PARKING_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking"));
  }
}
function ScheduleFilterCardComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor"));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "app-icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275i18n(6, 0);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275i18n(9, 1);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 22);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.VISITORS"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_VISITOR_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("visitor"));
  }
}
function ScheduleFilterCardComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker"));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "app-icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275i18n(6, 2);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275i18n(9, 3);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 22);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.LOCKERS"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_LOCKER_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker"));
  }
}
function ScheduleFilterCardComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event"));
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "app-icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 19)(5, "div", 20);
    \u0275\u0275i18n(6, 4);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 21);
    \u0275\u0275i18n(9, 5);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 22);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.GROUP_EVENT"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_GROUP_EVENT_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("group-event"));
  }
}
var _ScheduleFilterCardComponent = class _ScheduleFilterCardComponent {
  hasFeature(feature) {
    return this._settings.get("app.features")?.includes(feature);
  }
  constructor(_state, _settings, _sheet_ref) {
    this._state = _state;
    this._settings = _settings;
    this._sheet_ref = _sheet_ref;
    this.filters = this._state.filters;
    this.toggleType = (t) => this._state.toggleType(t);
    this.dismiss = () => this._sheet_ref.dismiss();
  }
};
_ScheduleFilterCardComponent.\u0275fac = function ScheduleFilterCardComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleFilterCardComponent)(\u0275\u0275directiveInject(ScheduleStateService), \u0275\u0275directiveInject(SettingsService), \u0275\u0275directiveInject(MatBottomSheetRef));
};
_ScheduleFilterCardComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFilterCardComponent, selectors: [["schedule-filter-card"]], decls: 19, vars: 12, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_939697261836969798$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_0 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.VISITORS' | translate }}" } });
    i18n_0 = MSG_EXTERNAL_939697261836969798$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟9fcb038849eab8d830223dd228152df6054cf4aa␟939697261836969798: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_5206845892282891167$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}" } });
    i18n_1 = MSG_EXTERNAL_5206845892282891167$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟8623e29e5a6b1d4fafbe137daaaa530d7b981170␟5206845892282891167: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_1641774232295752417$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.LOCKERS' | translate }}" } });
    i18n_2 = MSG_EXTERNAL_1641774232295752417$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟bdc83ff78fa7b20c0a6da999cd8be30049ffb968␟1641774232295752417: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_8446653337428936370$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}" } });
    i18n_3 = MSG_EXTERNAL_8446653337428936370$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟79586ebafc0539512135209e7a859ebdbd0c3d92␟8446653337428936370: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_8612736343132991713$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.GROUP_EVENT' | translate }}" } });
    i18n_4 = MSG_EXTERNAL_8612736343132991713$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟393f0f5ecbcef157e087a7fdb7d97607f1d6a684␟8612736343132991713: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_7608261914493025487$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}" } });
    i18n_5 = MSG_EXTERNAL_7608261914493025487$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_FILTER_CARD_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`:␟fcb042bec7d0cb7c7f6f9fba759557f32c63fd3a␟7608261914493025487: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, [1, "flex", "items-center", "border-b", "border-base-200", "space-x-2", "mb-4", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "flex-1", "w-1/2", "text-center"], [1, "space-y-4", "border-b", "border-base-200", "mb-4", "pb-4", "px-2"], ["matRipple", "", "name", "schedule-toggle-event-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-desk-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-parking-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-locker-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], [1, "px-2", "pb-2"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "bg-base-200", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"]];
}, template: function ScheduleFilterCardComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "button", 7);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_1_listener() {
      return ctx.dismiss();
    });
    \u0275\u0275elementStart(2, "app-icon");
    \u0275\u0275text(3, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "h2", 8);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "app-icon");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 9);
    \u0275\u0275template(9, ScheduleFilterCardComponent_button_9_Template, 13, 9, "button", 10)(10, ScheduleFilterCardComponent_button_10_Template, 12, 9, "button", 11)(11, ScheduleFilterCardComponent_button_11_Template, 13, 9, "button", 12)(12, ScheduleFilterCardComponent_button_12_Template, 13, 9, "button", 13)(13, ScheduleFilterCardComponent_button_13_Template, 13, 9, "button", 14)(14, ScheduleFilterCardComponent_button_14_Template, 13, 9, "button", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "div", 15)(16, "button", 16);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_16_listener() {
      return ctx.dismiss();
    });
    \u0275\u0275text(17);
    \u0275\u0275pipe(18, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "WPA.BOOKING_TYPES"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.hasFeature("spaces"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("desks"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("parking"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("visitor-invite"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("lockers"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("group-events"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "WPA.FILTERS_APPLY"), " ");
  }
}, dependencies: [NgIf, IconComponent, MatRipple, MatCheckbox, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */"] });
var ScheduleFilterCardComponent = _ScheduleFilterCardComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFilterCardComponent, { className: "ScheduleFilterCardComponent", filePath: "apps/workplace/src/app/new-schedule/schedule-filter-card.component.ts", lineNumber: 190 });
})();

// apps/workplace/src/app/new-schedule/schedule-filters.component.ts
function ScheduleFiltersComponent_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.ROOMS"));
  }
}
function ScheduleFiltersComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.DESKS"));
  }
}
function ScheduleFiltersComponent_div_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.PARKING"));
  }
}
function ScheduleFiltersComponent_div_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_11_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.VISITORS"));
  }
}
function ScheduleFiltersComponent_div_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_13_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.LOCKERS"));
  }
}
function ScheduleFiltersComponent_div_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_15_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.GROUP_EVENT"));
  }
}
function ScheduleFiltersComponent_div_22_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_22_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.ROOMS"));
  }
}
function ScheduleFiltersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_24_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.DESKS"));
  }
}
function ScheduleFiltersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_26_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.PARKING"));
  }
}
function ScheduleFiltersComponent_div_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 20);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_28_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.VISITORS"));
  }
}
function ScheduleFiltersComponent_div_30_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_30_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.LOCKERS"));
  }
}
function ScheduleFiltersComponent_div_32_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 16)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 21);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_div_32_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event", true));
    });
    \u0275\u0275elementStart(5, "app-icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "WPA.GROUP_EVENTS"));
  }
}
var _ScheduleFiltersComponent = class _ScheduleFiltersComponent {
  hasFeature(feature) {
    return this._settings.get("app.features")?.includes(feature);
  }
  constructor(_sheet, _state, _settings) {
    this._sheet = _sheet;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.toggleType = (t, c = false) => this._state.toggleType(t, c);
  }
  openFilters() {
    this._sheet.open(ScheduleFilterCardComponent);
  }
};
_ScheduleFiltersComponent.\u0275fac = function ScheduleFiltersComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleFiltersComponent)(\u0275\u0275directiveInject(MatBottomSheet), \u0275\u0275directiveInject(ScheduleStateService), \u0275\u0275directiveInject(SettingsService));
};
_ScheduleFiltersComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFiltersComponent, selectors: [["schedule-filters"]], decls: 34, vars: 39, consts: [[1, "hidden", "sm:block", "bg-base-100", "border", "border-base-200", "rounded", "p-2"], [1, "font-medium", "mb-2"], [1, "flex", "flex-wrap", "space-x-2"], ["class", "flex items-center rounded-3xl border border-base-200", 4, "ngIf"], [1, "sm:hidden", "flex", "items-center", "space-x-2", "overflow-auto"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "min-w-12", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], ["class", "flex items-center rounded-3xl border border-base-200 bg-base-100 text-sm pl-2", 4, "ngIf"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200"], [1, "px-2"], ["icon", "", "name", "schedule-remove-event-filter", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-parking-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-visitor-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-locker-filter", 3, "click"], [1, "flex", "items-center", "rounded-3xl", "border", "border-base-200", "bg-base-100", "text-sm", "pl-2"], ["icon", "", "name", "schedule-remove-event-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-desk-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-parking-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-visitor-filter-mobile", 3, "click"], ["icon", "", "name", "schedule-remove-locker-filter-mobile", 3, "click"]], template: function ScheduleFiltersComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 2);
    \u0275\u0275template(5, ScheduleFiltersComponent_div_5_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(6, "async");
    \u0275\u0275template(7, ScheduleFiltersComponent_div_7_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(8, "async");
    \u0275\u0275template(9, ScheduleFiltersComponent_div_9_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(10, "async");
    \u0275\u0275template(11, ScheduleFiltersComponent_div_11_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275template(13, ScheduleFiltersComponent_div_13_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275template(15, ScheduleFiltersComponent_div_15_Template, 7, 3, "div", 3);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(17, "div", 4)(18, "button", 5);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Template_button_click_18_listener() {
      return ctx.openFilters();
    });
    \u0275\u0275elementStart(19, "div", 6)(20, "app-icon", 7);
    \u0275\u0275text(21, "filter_list");
    \u0275\u0275elementEnd()()();
    \u0275\u0275template(22, ScheduleFiltersComponent_div_22_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(23, "async");
    \u0275\u0275template(24, ScheduleFiltersComponent_div_24_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(25, "async");
    \u0275\u0275template(26, ScheduleFiltersComponent_div_26_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(27, "async");
    \u0275\u0275template(28, ScheduleFiltersComponent_div_28_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(29, "async");
    \u0275\u0275template(30, ScheduleFiltersComponent_div_30_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(31, "async");
    \u0275\u0275template(32, ScheduleFiltersComponent_div_32_Template, 7, 3, "div", 8);
    \u0275\u0275pipe(33, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_1_0;
    let tmp_2_0;
    let tmp_3_0;
    let tmp_4_0;
    let tmp_5_0;
    let tmp_6_0;
    let tmp_7_0;
    let tmp_8_0;
    let tmp_9_0;
    let tmp_10_0;
    let tmp_11_0;
    let tmp_12_0;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "WPA.SCHEDULE_CAT_FILTERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", ((tmp_1_0 = \u0275\u0275pipeBind1(6, 15, ctx.filters)) == null ? null : tmp_1_0.shown_types == null ? null : tmp_1_0.shown_types.includes("event")) && ctx.hasFeature("spaces"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_2_0 = \u0275\u0275pipeBind1(8, 17, ctx.filters)) == null ? null : tmp_2_0.shown_types == null ? null : tmp_2_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_3_0 = \u0275\u0275pipeBind1(10, 19, ctx.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_4_0 = \u0275\u0275pipeBind1(12, 21, ctx.filters)) == null ? null : tmp_4_0.shown_types == null ? null : tmp_4_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_5_0 = \u0275\u0275pipeBind1(14, 23, ctx.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_6_0 = \u0275\u0275pipeBind1(16, 25, ctx.filters)) == null ? null : tmp_6_0.shown_types == null ? null : tmp_6_0.shown_types.includes("group-evnet")) && ctx.hasFeature("group-events"));
    \u0275\u0275advance(7);
    \u0275\u0275property("ngIf", ((tmp_7_0 = \u0275\u0275pipeBind1(23, 27, ctx.filters)) == null ? null : tmp_7_0.shown_types == null ? null : tmp_7_0.shown_types.includes("event")) && ctx.hasFeature("spaces"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_8_0 = \u0275\u0275pipeBind1(25, 29, ctx.filters)) == null ? null : tmp_8_0.shown_types == null ? null : tmp_8_0.shown_types.includes("desk")) && ctx.hasFeature("desks"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_9_0 = \u0275\u0275pipeBind1(27, 31, ctx.filters)) == null ? null : tmp_9_0.shown_types == null ? null : tmp_9_0.shown_types.includes("parking")) && ctx.hasFeature("parking"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_10_0 = \u0275\u0275pipeBind1(29, 33, ctx.filters)) == null ? null : tmp_10_0.shown_types == null ? null : tmp_10_0.shown_types.includes("visitor")) && ctx.hasFeature("visitor-invite"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_11_0 = \u0275\u0275pipeBind1(31, 35, ctx.filters)) == null ? null : tmp_11_0.shown_types == null ? null : tmp_11_0.shown_types.includes("locker")) && ctx.hasFeature("lockers"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ((tmp_12_0 = \u0275\u0275pipeBind1(33, 37, ctx.filters)) == null ? null : tmp_12_0.shown_types == null ? null : tmp_12_0.shown_types.includes("group-event")) && ctx.hasFeature("group-events"));
  }
}, dependencies: [NgIf, IconComponent, MatRipple, AsyncPipe, TranslatePipe] });
var ScheduleFiltersComponent = _ScheduleFiltersComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFiltersComponent, { className: "ScheduleFiltersComponent", filePath: "apps/workplace/src/app/new-schedule/schedule-filters.component.ts", lineNumber: 233 });
})();

// apps/workplace/src/app/new-schedule/schedule-sidebar.component.ts
function ScheduleSidebarComponent_date_calendar_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-calendar", 19);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_date_calendar_6_Template_date_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(1, 2, ctx_r1.date))("offset_weekday", ctx_r1.offset_weekday);
  }
}
function ScheduleSidebarComponent_div_7_mat_option_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 26);
    \u0275\u0275text(1, "(C)");
    \u0275\u0275elementEnd();
  }
}
function ScheduleSidebarComponent_div_7_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ScheduleSidebarComponent_div_7_mat_option_4_span_2_Template, 2, 0, "span", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r4.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r4.this_week);
  }
}
function ScheduleSidebarComponent_div_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20)(1, "mat-form-field", 21)(2, "mat-select", 22);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_div_7_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275template(4, ScheduleSidebarComponent_div_7_mat_option_4_Template, 3, 3, "mat-option", 23);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 2, ctx_r1.week_date));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r1.week_options));
  }
}
function ScheduleSidebarComponent_button_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event"));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "app-icon");
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 32);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "WPA.ROOM"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_ROOM_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("event"));
  }
}
function ScheduleSidebarComponent_button_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 33);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk"));
    });
    \u0275\u0275elementStart(1, "div", 28);
    \u0275\u0275element(2, "img", 34);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 29)(4, "div", 30);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 31);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-checkbox", 32);
    \u0275\u0275pipe(11, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "WPA.DESK"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "WPA.SCHEDULE_DESK_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(11, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("desk"));
  }
}
function ScheduleSidebarComponent_button_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 35);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking"));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "app-icon");
    \u0275\u0275text(3, "drive_eta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 32);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_3_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "WPA.PARKING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_PARKING_FILTER"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", (tmp_3_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_3_0.shown_types == null ? null : tmp_3_0.shown_types.includes("parking"));
  }
}
function ScheduleSidebarComponent_button_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 36);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor"));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "app-icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275i18n(6, 1);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275i18n(9, 2);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 32);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.VISITORS"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_VISITOR_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("visitor"));
  }
}
function ScheduleSidebarComponent_button_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker"));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "app-icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275i18n(6, 3);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275i18n(9, 4);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 32);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.LOCKERS"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_LOCKER_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("locker"));
  }
}
function ScheduleSidebarComponent_button_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 37);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_button_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event"));
    });
    \u0275\u0275elementStart(1, "div", 28)(2, "app-icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 29)(5, "div", 30);
    \u0275\u0275i18n(6, 5);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 31);
    \u0275\u0275i18n(9, 6);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 32);
    \u0275\u0275pipe(12, "async");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    let tmp_5_0;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(7);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(7, 3, "WPA.GROUP_EVENT"));
    \u0275\u0275i18nApply(6);
    \u0275\u0275advance(3);
    \u0275\u0275i18nExp(\u0275\u0275pipeBind1(10, 5, "WPA.SCHEDULE_GROUP_EVENT_FILTER"));
    \u0275\u0275i18nApply(9);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", (tmp_5_0 = \u0275\u0275pipeBind1(12, 7, ctx_r1.filters)) == null ? null : tmp_5_0.shown_types == null ? null : tmp_5_0.shown_types.includes("group-event"));
  }
}
var _ScheduleSidebarComponent = class _ScheduleSidebarComponent extends AsyncHandler {
  get period() {
    return this._state.getOptions()?.period;
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  hasFeature(feature) {
    return (this._settings.get("app.features") || []).includes(feature);
  }
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  constructor(_org, _state, _settings) {
    super();
    this._org = _org;
    this._state = _state;
    this._settings = _settings;
    this.filters = this._state.filters;
    this.date = this._state.date.pipe(map((_) => startOfDay(_)));
    this.toggleType = (t) => this._state.toggleType(t);
    this.setDate = (d) => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
  }
  ngOnInit() {
    this.subscription("building", this._org.active_building.pipe(filter((_) => !!_), debounceTime(1e3)).subscribe((_) => {
      this._state.setType("event", this.hasFeature("spaces"));
      this._state.setType("desk", this.hasFeature("desks"));
      this._state.setType("parking", this.hasFeature("parking"));
      this._state.setType("visitor", this.hasFeature("visitor-invite"));
      this._state.setType("locker", this.hasFeature("lockers"));
      this._state.setType("group-event", this.hasFeature("group-events"));
    }));
  }
};
_ScheduleSidebarComponent.\u0275fac = function ScheduleSidebarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleSidebarComponent)(\u0275\u0275directiveInject(OrganisationService), \u0275\u0275directiveInject(ScheduleStateService), \u0275\u0275directiveInject(SettingsService));
};
_ScheduleSidebarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSidebarComponent, selectors: [["schedule-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 12, consts: () => {
  let i18n_0;
  if (false) {
    const MSG_EXTERNAL_4163272119298020373$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_0 = goog.getMsg("Filters");
    i18n_0 = MSG_EXTERNAL_4163272119298020373$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_0;
  } else {
    i18n_0 = $localize`:␟1298c1d2bbbb7415f5494e800f6775fdb70f4df6␟4163272119298020373:Filters`;
  }
  let i18n_1;
  if (false) {
    const MSG_EXTERNAL_1215297419226013896$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.VISITORS' | translate }}" } });
    i18n_1 = MSG_EXTERNAL_1215297419226013896$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_1;
  } else {
    i18n_1 = $localize`:␟59151f596eb603224ad9b858fdf5e3e6dfb3a4dc␟1215297419226013896: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_2;
  if (false) {
    const MSG_EXTERNAL_5823422811675104879$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_2 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_VISITOR_FILTER' | translate }}" } });
    i18n_2 = MSG_EXTERNAL_5823422811675104879$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_2;
  } else {
    i18n_2 = $localize`:␟6c8f5c27706957b7df521a06b88ba1df1f7a31e9␟5823422811675104879: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_3;
  if (false) {
    const MSG_EXTERNAL_2481958659371886477$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_3 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.LOCKERS' | translate }}" } });
    i18n_3 = MSG_EXTERNAL_2481958659371886477$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_3;
  } else {
    i18n_3 = $localize`:␟613617f03056b686e8959e951f278e3518947bd7␟2481958659371886477: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_4;
  if (false) {
    const MSG_EXTERNAL_8248636682633599470$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_4 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_LOCKER_FILTER' | translate }}" } });
    i18n_4 = MSG_EXTERNAL_8248636682633599470$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_4;
  } else {
    i18n_4 = $localize`:␟6a370310350e3781c551d62b37abc16c1515a657␟8248636682633599470: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_5;
  if (false) {
    const MSG_EXTERNAL_2082215832043440591$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_5 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.GROUP_EVENT' | translate }}" } });
    i18n_5 = MSG_EXTERNAL_2082215832043440591$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_5;
  } else {
    i18n_5 = $localize`:␟8e8a186e6f6bf074d0c8cd68ecf385cb3b46fba4␟2082215832043440591: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  let i18n_6;
  if (false) {
    const MSG_EXTERNAL_7788094696937337857$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_6 = goog.getMsg(" {$interpolation} ", { "interpolation": "\uFFFD0\uFFFD" }, { original_code: { "interpolation": "{{ 'WPA.SCHEDULE_GROUP_EVENT_FILTER' | translate }}" } });
    i18n_6 = MSG_EXTERNAL_7788094696937337857$$APPS_WORKPLACE_SRC_APP_NEW_SCHEDULE_SCHEDULE_SIDEBAR_COMPONENT_TS_6;
  } else {
    i18n_6 = $localize`:␟c0572e59dd4e3290349c620fe79926580977d70d␟7788094696937337857: ${"\uFFFD0\uFFFD"}:INTERPOLATION: `;
  }
  return [i18n_0, i18n_1, i18n_2, i18n_3, i18n_4, i18n_5, i18n_6, [1, "flex", "flex-col", "w-[18rem]", "h-full", "overflow-hidden", "bg-base-100[#1F2021]", "border-r", "border-base-200"], [1, "flex", "items-center", "space-x-4", "p-4"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], ["class", "border-b border-base-200", 3, "ngModel", "offset_weekday", "ngModelChange", 4, "ngIf"], ["class", "px-4 w-full", 4, "ngIf"], [1, "mx-4", "mt-4", "font-medium"], [1, "p-4", "space-y-4", "flex-1", "h-1/2", "overflow-auto"], ["matRipple", "", "name", "schedule-toggle-event-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-desk-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-parking-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], ["matRipple", "", "name", "schedule-toggle-locker-filter", "class", "flex items-center space-x-2 w-full text-left", 3, "click", 4, "ngIf"], [1, "border-b", "border-base-200", 3, "ngModelChange", "ngModel", "offset_weekday"], [1, "px-4", "w-full"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], ["class", "leading-tight", 3, "value", 4, "ngFor", "ngForOf"], [1, "leading-tight", 3, "value"], ["class", "text-xs text-info px-1", "matTooltip", "This Week", 4, "ngIf"], ["matTooltip", "This Week", 1, "text-xs", "text-info", "px-1"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], [1, "h-10", "w-10", "rounded-full", "flex", "items-center", "justify-center", "bg-base-200", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "items-center", "space-x-2", "w-full", "text-left", 3, "click"]];
}, template: function ScheduleSidebarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 8)(2, "button", 9);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Template_button_click_2_listener() {
      return ctx.setOptions({ period: "day" });
    });
    \u0275\u0275text(3, " Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 9);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Template_button_click_4_listener() {
      return ctx.setOptions({ period: "week" });
    });
    \u0275\u0275text(5, " Week ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(6, ScheduleSidebarComponent_date_calendar_6_Template, 2, 4, "date-calendar", 10)(7, ScheduleSidebarComponent_div_7_Template, 6, 6, "div", 11);
    \u0275\u0275elementStart(8, "h3", 12);
    \u0275\u0275i18n(9, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "div", 13);
    \u0275\u0275template(11, ScheduleSidebarComponent_button_11_Template, 13, 9, "button", 14)(12, ScheduleSidebarComponent_button_12_Template, 12, 9, "button", 15)(13, ScheduleSidebarComponent_button_13_Template, 13, 9, "button", 16)(14, ScheduleSidebarComponent_button_14_Template, 13, 9, "button", 17)(15, ScheduleSidebarComponent_button_15_Template, 13, 9, "button", 18)(16, ScheduleSidebarComponent_button_16_Template, 13, 9, "button", 18);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.period !== "day");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.period !== "week");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.period === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.period === "week");
    \u0275\u0275advance(4);
    \u0275\u0275property("ngIf", ctx.hasFeature("spaces"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("desks"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("parking"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("visitor-invite"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("lockers"));
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.hasFeature("group-events"));
  }
}, dependencies: [NgForOf, NgIf, IconComponent, MatOption, MatFormField, MatSelect, MatRipple, MatTooltip, MatCheckbox, DateCalendarComponent, NgControlStatus, NgModel, AsyncPipe, TranslatePipe], styles: ["\n\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */"] });
var ScheduleSidebarComponent = _ScheduleSidebarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSidebarComponent, { className: "ScheduleSidebarComponent", filePath: "apps/workplace/src/app/new-schedule/schedule-sidebar.component.ts", lineNumber: 244 });
})();

// apps/workplace/src/app/new-schedule/schedule-mobile-calendar.component.ts
function ScheduleMobileCalendarComponent_div_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1.id, "EE"), " ");
  }
}
function ScheduleMobileCalendarComponent_button_18_div_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function ScheduleMobileCalendarComponent_button_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_button_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275template(1, ScheduleMobileCalendarComponent_button_18_div_1_Template, 1, 0, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-opacity-30", !day_r3.is_month)("text-white", day_r3.id === ctx_r3.active_date)("text-black", day_r3.id !== ctx_r3.active_date)("bg-primary", day_r3.id === ctx_r3.active_date)("font-normal", day_r3.id !== ctx_r3.active_date);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", day_r3.is_today);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 12, day_r3.id, "d"), " ");
  }
}
var _ScheduleMobileCalendarComponent = class _ScheduleMobileCalendarComponent {
  constructor() {
    this.active_date = startOfDay(Date.now()).valueOf();
    this.offset = 0;
    this.date_list = [];
    this.short_list = [];
    this.show_shortlist = true;
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  get list() {
    return this.show_shortlist ? this.short_list : this.date_list;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_date = startOfDay(new_value).valueOf();
    this.offset = 0;
    if (this._onChange) {
      this._onChange(new_value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.active_date = startOfDay(value).valueOf();
    this.offset = 0;
    this.generateDates();
  }
  resetMonth() {
    this.changeMonth(-this.offset);
  }
  changeMonth(change) {
    this.offset += change;
    this.generateDates();
  }
  generateDates() {
    const date = addMonths(this.active_date, this.offset);
    let start = startOfWeek(startOfMonth(date));
    const now = startOfDay(Date.now());
    let list = [];
    while (list.length < 7 * 6) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date),
        is_today: isSameDay(Date.now(), start)
      });
      start = addDays(start, 1);
    }
    this.date_list = list;
    start = this.offset === 0 ? startOfWeek(date) : startOfWeek(startOfMonth(date));
    list = [];
    while (list.length < 7) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date),
        is_today: isSameDay(Date.now(), start)
      });
      start = addDays(start, 1);
    }
    this.short_list = list;
  }
};
_ScheduleMobileCalendarComponent.\u0275fac = function ScheduleMobileCalendarComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleMobileCalendarComponent)();
};
_ScheduleMobileCalendarComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleMobileCalendarComponent, selectors: [["schedule-mobile-calendar"]], features: [\u0275\u0275ProvidersFeature([
  {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => _ScheduleMobileCalendarComponent),
    multi: true
  }
])], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], ["btn", "", "matRipple", "", 1, "clear", "font-medium", 3, "click"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "grid", "grid-cols-7", "gap-2", "mb-2"], ["class", "opacity-60 text-center w-10 mx-2", 4, "ngFor", "ngForOf"], ["icon", "", "matRipple", "", "class", "min-w-[calc(14%-1rem)] flex-1 mx-2 h-9 overflow-visible", 3, "text-opacity-30", "text-white", "text-black", "bg-primary", "font-normal", "click", 4, "ngFor", "ngForOf"], [1, "opacity-60", "text-center", "w-10", "mx-2"], ["icon", "", "matRipple", "", 1, "min-w-[calc(14%-1rem)]", "flex-1", "mx-2", "h-9", "overflow-visible", 3, "click"], ["class", "absolute -inset-0.5 border border-primary rounded-full", 4, "ngIf"], [1, "absolute", "-inset-0.5", "border", "border-primary", "rounded-full"]], template: function ScheduleMobileCalendarComponent_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_2_listener() {
      return ctx.resetMonth();
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_6_listener() {
      return ctx.changeMonth(-1);
    });
    \u0275\u0275elementStart(7, "app-icon");
    \u0275\u0275text(8, "chevron_left");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "button", 4);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_9_listener() {
      return ctx.changeMonth(1);
    });
    \u0275\u0275elementStart(10, "app-icon");
    \u0275\u0275text(11, "chevron_right");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(12, "button", 4);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_12_listener() {
      return ctx.show_shortlist = !ctx.show_shortlist;
    });
    \u0275\u0275elementStart(13, "app-icon");
    \u0275\u0275text(14, "arrow_drop_down");
    \u0275\u0275elementEnd()()()();
    \u0275\u0275elementStart(15, "div", 5);
    \u0275\u0275template(16, ScheduleMobileCalendarComponent_div_16_Template, 3, 4, "div", 6);
    \u0275\u0275pipe(17, "slice");
    \u0275\u0275template(18, ScheduleMobileCalendarComponent_button_18_Template, 4, 15, "button", 7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, (ctx.date_list[6] == null ? null : ctx.date_list[6].id) || ctx.active_date, "LLLL YYYY"), " ");
    \u0275\u0275advance(13);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind3(17, 6, ctx.date_list, 0, 7));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", ctx.list);
  }
}, dependencies: [NgForOf, NgIf, IconComponent, MatRipple, SlicePipe, DatePipe] });
var ScheduleMobileCalendarComponent = _ScheduleMobileCalendarComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleMobileCalendarComponent, { className: "ScheduleMobileCalendarComponent", filePath: "apps/workplace/src/app/new-schedule/schedule-mobile-calendar.component.ts", lineNumber: 80 });
})();

// apps/workplace/src/app/new-schedule/schedule.component.ts
function ScheduleComponent_topbar_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ScheduleComponent_schedule_mobile_calendar_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "schedule-mobile-calendar", 13);
    \u0275\u0275pipe(1, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleComponent_schedule_mobile_calendar_9_Template_schedule_mobile_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDate($event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(1, 1, ctx_r2.date));
  }
}
function ScheduleComponent_div_10_mat_option_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 20);
    \u0275\u0275text(1, "(C)");
    \u0275\u0275elementEnd();
  }
}
function ScheduleComponent_div_10_mat_option_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 18);
    \u0275\u0275text(1);
    \u0275\u0275template(2, ScheduleComponent_div_10_mat_option_4_span_2_Template, 2, 0, "span", 19);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", option_r5.this_week);
  }
}
function ScheduleComponent_div_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 14)(1, "mat-form-field", 15)(2, "mat-select", 16);
    \u0275\u0275pipe(3, "async");
    \u0275\u0275listener("ngModelChange", function ScheduleComponent_div_10_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setDate($event));
    });
    \u0275\u0275template(4, ScheduleComponent_div_10_mat_option_4_Template, 3, 3, "mat-option", 17);
    \u0275\u0275pipe(5, "async");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", \u0275\u0275pipeBind1(3, 2, ctx_r2.week_date));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(5, 4, ctx_r2.week_options));
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_span_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1("(", \u0275\u0275pipeBind1(2, 1, "COMMON.TODAY"), ")");
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "event-card", 25);
    \u0275\u0275listener("edit", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template_event_card_edit_0_listener() {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.edit(item_r7));
    })("remove", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template_event_card_remove_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.remove(item_r7, $event));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("event", item_r7);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "booking-card", 26);
    \u0275\u0275listener("edit", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_edit_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.editBooking(item_r7));
    })("remove", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_remove_0_listener($event) {
      \u0275\u0275restoreView(_r8);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.remove(item_r7, $event));
    })("end", function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template_booking_card_end_0_listener() {
      \u0275\u0275restoreView(_r8);
      const item_r7 = \u0275\u0275nextContext().$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.end(item_r7));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r7 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("booking", item_r7);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_event_card_1_Template, 1, 1, "event-card", 24)(2, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_ng_template_2_Template, 1, 1, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    const booking_card_r9 = \u0275\u0275reference(3);
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r2.isEvent(item_r7))("ngIfElse", booking_card_r9);
  }
}
function ScheduleComponent_ng_container_13_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275elementStart(1, "h3", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275template(4, ScheduleComponent_ng_container_13_ng_container_1_span_4_Template, 3, 3, "span", 2);
    \u0275\u0275elementEnd();
    \u0275\u0275template(5, ScheduleComponent_ng_container_13_ng_container_1_ng_container_5_Template, 4, 2, "ng-container", 23);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const date_block_r10 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 4, date_block_r10.date, "EEE dd LLL yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", date_block_r10.is_today);
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", date_block_r10.bookings)("ngForTrackBy", ctx_r2.trackByFn);
  }
}
function ScheduleComponent_ng_container_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, ScheduleComponent_ng_container_13_ng_container_1_Template, 6, 7, "ng-container", 21);
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngForOf", \u0275\u0275pipeBind1(2, 1, ctx_r2.booking_dates));
  }
}
function ScheduleComponent_mat_progress_bar_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 27);
  }
}
function ScheduleComponent_footer_menu_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
function ScheduleComponent_ng_template_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275element(1, "img", 29);
    \u0275\u0275elementStart(2, "p", 30);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "async");
    \u0275\u0275pipe(6, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 2, "WPA.SCHEDULE_EMPTY"), " ", \u0275\u0275pipeBind2(6, 6, \u0275\u0275pipeBind1(5, 4, ctx_r2.date), "EEEE, dd LLL yyyy"), " ");
  }
}
var _ScheduleComponent = class _ScheduleComponent extends AsyncHandler {
  get period() {
    return this._state.getOptions().period;
  }
  isEvent(item) {
    return item instanceof CalendarEvent;
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  constructor(_state, _event_form, _booking_form, _router, _dialog, _settings) {
    super();
    this._state = _state;
    this._event_form = _event_form;
    this._booking_form = _booking_form;
    this._router = _router;
    this._dialog = _dialog;
    this._settings = _settings;
    this.booking_dates = combineLatest([
      this._state.filtered_bookings,
      this._state.loading
    ]).pipe(map(([bookings, loading]) => loading ? [] : bookings), map((bookings) => {
      const sorted = bookings.sort((a, b) => a.date - b.date);
      const dates = /* @__PURE__ */ new Set();
      for (const booking of sorted) {
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
          bookings: sorted.filter((booking) => isSameDay(booking.date, day)),
          is_today: isSameDay(day, Date.now())
        });
      }
      return list;
    }));
    this.date = this._state.date;
    this.loading = this._state.loading;
    this.setDate = (d) => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
  }
  ngOnInit() {
    this._state.triggerPoll();
    this.subscription("poll", this._state.startPolling());
  }
  trackByFn(index, item) {
    return item?.id;
  }
  setOptions(options) {
    this._state.setOptions(options);
  }
  edit(event) {
    return __async(this, null, function* () {
      this._router.navigate(["/book", "meeting", "form"]);
      if (event.creator !== event.mailbox) {
        event = (yield queryEvents({
          period_start: event.event_start,
          period_end: event.event_end,
          ical_uid: event.ical_uid
        }).toPromise()).find((_) => _.ical_uid === event.ical_uid) || event;
      }
      this._event_form.newForm(event);
    });
  }
  editBooking(event) {
    this._router.navigate(["/book", `new-${event.type}`]);
    this._booking_form.newForm(event);
    setTimeout(() => {
      this._booking_form.form.patchValue({
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      });
    }, 100);
  }
  remove(item, remove_series = false) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item instanceof CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
      const content = `Delete the ${remove_series ? "recurring series of " : ""}booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({
        title: `Delete booking ${remove_series ? "series" : ""}`,
        content,
        icon: { content: "delete" }
      }, this._dialog);
      if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
        item = (yield queryEvents({
          period_start: item.event_start,
          period_end: item.event_end,
          ical_uid: item.ical_uid
        }).toPromise()).find((_) => _.ical_uid === item.ical_uid) || item;
      }
      if (resp.reason !== "done")
        return;
      resp.loading("Requesting booking deletion...");
      yield (item instanceof CalendarEvent ? removeEvent : removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
        calendar: this._settings.get("app.no_user_calendar") ? null : item.calendar || currentUser()?.email,
        system_id: item.system?.id,
        instance: remove_series ? void 0 : !!item.instance,
        start_time: !!item.instance ? item.instance : void 0
      }).toPromise().catch((e) => {
        notifyError(`Unable to delete booking. ${e}`);
        resp.close();
        throw e;
      });
      notifySuccess("Successfully deleted booking.");
      this._state.removeItem(item);
      this._dialog.closeAll();
    });
  }
  end(item) {
    return __async(this, null, function* () {
      const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
      const resource_name = item.asset_name || item.asset_id;
      const content = `End the booking for ${resource_name} at ${time}`;
      const resp = yield openConfirmModal({ title: `End booking`, content, icon: { content: "delete" } }, this._dialog);
      if (resp.reason !== "done")
        return;
      resp.loading("Ending booking...");
      const promise = (item.instance ? checkinBookingInstance(item.id, item.instance, false) : checkinBooking(item.id, false)).toPromise().catch((e) => {
        notifyError(`Unable to end booking. ${e}`);
        resp.close();
        throw e;
      });
      yield promise;
      notifySuccess("Successfully ended booking.");
      this._state.removeItem(item);
      this._dialog.closeAll();
    });
  }
};
_ScheduleComponent.\u0275fac = function ScheduleComponent_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _ScheduleComponent)(\u0275\u0275directiveInject(ScheduleStateService), \u0275\u0275directiveInject(EventFormService), \u0275\u0275directiveInject(BookingFormService), \u0275\u0275directiveInject(Router), \u0275\u0275directiveInject(MatDialog), \u0275\u0275directiveInject(SettingsService));
};
_ScheduleComponent.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 20, vars: 15, consts: [["empty_state", ""], ["booking_card", ""], [4, "ngIf"], [1, "flex", "flex-col", "sm:flex-row", "flex-1", "h-1/2", "bg-base-200", "relative"], [1, "hidden", "sm:block", "bg-base-100"], [1, "w-full", "bg-base-100", "border-b", "border-neutral", "sm:hidden"], [1, "flex", "items-center", "space-x-2", "px-2", "pt-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [3, "ngModel", "ngModelChange", 4, "ngIf"], ["class", "px-2 w-full my-2", 4, "ngIf"], [1, "flex-1", "h-full", "p-4", "overflow-auto", "space-y-2"], [4, "ngIf", "ngIfElse"], ["class", "absolute inset-x-0 bottom-0", "mode", "indeterminate", 4, "ngIf"], [3, "ngModelChange", "ngModel"], [1, "px-2", "w-full", "my-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], ["class", "leading-tight", 3, "value", 4, "ngFor", "ngForOf"], [1, "leading-tight", 3, "value"], ["class", "text-xs text-info px-1", "matTooltip", "This Week", 4, "ngIf"], ["matTooltip", "This Week", 1, "text-xs", "text-info", "px-1"], [4, "ngFor", "ngForOf"], [1, "font-medium", "my-2"], [4, "ngFor", "ngForOf", "ngForTrackBy"], [3, "event", "edit", "remove", 4, "ngIf", "ngIfElse"], [3, "edit", "remove", "event"], [3, "edit", "remove", "end", "booking"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [1, "w-full", "p-8", "flex", "flex-col", "items-center", "justify-center", "space-y-4"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function ScheduleComponent_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275template(0, ScheduleComponent_topbar_0_Template, 1, 0, "topbar", 2);
    \u0275\u0275elementStart(1, "div", 3);
    \u0275\u0275element(2, "schedule-sidebar", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "button", 7);
    \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_5_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setOptions({ period: "day" }));
    });
    \u0275\u0275text(6, " Day ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "button", 7);
    \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r1);
      return \u0275\u0275resetView(ctx.setOptions({ period: "week" }));
    });
    \u0275\u0275text(8, " Week ");
    \u0275\u0275elementEnd()();
    \u0275\u0275template(9, ScheduleComponent_schedule_mobile_calendar_9_Template, 2, 3, "schedule-mobile-calendar", 8)(10, ScheduleComponent_div_10_Template, 6, 6, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "div", 10);
    \u0275\u0275element(12, "schedule-filters");
    \u0275\u0275template(13, ScheduleComponent_ng_container_13_Template, 3, 3, "ng-container", 11);
    \u0275\u0275pipe(14, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(15, ScheduleComponent_mat_progress_bar_15_Template, 1, 0, "mat-progress-bar", 12);
    \u0275\u0275pipe(16, "async");
    \u0275\u0275elementEnd();
    \u0275\u0275template(17, ScheduleComponent_footer_menu_17_Template, 1, 0, "footer-menu", 2)(18, ScheduleComponent_ng_template_18_Template, 7, 9, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
  if (rf & 2) {
    let tmp_6_0;
    const empty_state_r11 = \u0275\u0275reference(19);
    \u0275\u0275property("ngIf", !ctx.hide_nav);
    \u0275\u0275advance(5);
    \u0275\u0275classProp("inverse", ctx.period !== "day");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("inverse", ctx.period !== "week");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", ctx.period === "day");
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx.period === "week");
    \u0275\u0275advance(3);
    \u0275\u0275property("ngIf", (tmp_6_0 = \u0275\u0275pipeBind1(14, 11, ctx.booking_dates)) == null ? null : tmp_6_0.length)("ngIfElse", empty_state_r11);
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", \u0275\u0275pipeBind1(16, 13, ctx.loading));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngIf", !ctx.hide_nav);
  }
}, dependencies: [NgForOf, NgIf, TopbarComponent, FooterMenuComponent, MatOption, MatFormField, MatSelect, MatRipple, MatTooltip, EventCardComponent, BookingCardComponent, MatProgressBar, NgControlStatus, NgModel, ScheduleSidebarComponent, ScheduleFiltersComponent, ScheduleMobileCalendarComponent, AsyncPipe, DatePipe, TranslatePipe], styles: ["\n\n[_nghost-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */"] });
var ScheduleComponent = _ScheduleComponent;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "apps/workplace/src/app/new-schedule/schedule.component.ts", lineNumber: 164 });
})();

// apps/workplace/src/app/new-schedule/schedule.module.ts
var ROUTES = [
  { path: "", component: ScheduleComponent },
  { path: "**", redirectTo: "" }
];
var _AppScheduleModule = class _AppScheduleModule {
};
_AppScheduleModule.\u0275fac = function AppScheduleModule_Factory(__ngFactoryType__) {
  return new (__ngFactoryType__ || _AppScheduleModule)();
};
_AppScheduleModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _AppScheduleModule });
_AppScheduleModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({ imports: [
  CommonModule,
  SharedComponentModule,
  FormsModule,
  MatBottomSheetModule,
  RouterModule.forChild(ROUTES)
] });
var AppScheduleModule = _AppScheduleModule;
export {
  AppScheduleModule
};
//# sourceMappingURL=schedule.module-JCJI4MCQ.js.map
