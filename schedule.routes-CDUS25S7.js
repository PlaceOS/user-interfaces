import {
  BookingCardComponent,
  EventCardComponent
} from "./chunk-E2WHXTWU.js";
import "./chunk-6NXLSRLS.js";
import "./chunk-NSON4GVW.js";
import "./chunk-QR3VFRWI.js";
import {
  BookingFormService
} from "./chunk-UEHTNZVE.js";
import {
  MatBottomSheet,
  MatBottomSheetRef
} from "./chunk-N6VANVNJ.js";
import "./chunk-W47CI4GG.js";
import "./chunk-3FAGAFEL.js";
import "./chunk-U2NMECJN.js";
import {
  DateCalendarComponent,
  isSameMonth,
  startOfMonth
} from "./chunk-IQ5YKLIN.js";
import {
  EventFormService
} from "./chunk-WPKFCFBW.js";
import "./chunk-EGW53QGF.js";
import "./chunk-BJCFGM7Y.js";
import "./chunk-3NTZ4I6Y.js";
import {
  MatProgressBar,
  MatProgressBarModule
} from "./chunk-7BVIDO5K.js";
import {
  FooterMenuComponent,
  ScheduleStateService,
  TopbarComponent,
  parse
} from "./chunk-KMIU5C2E.js";
import "./chunk-OEPM4MMI.js";
import "./chunk-3GVGHKEA.js";
import "./chunk-S3HIXA4G.js";
import "./chunk-PHAXUJDF.js";
import "./chunk-HUC7VMCA.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-6HFJDHLH.js";
import {
  queryEvents,
  removeEvent
} from "./chunk-22T7R5QI.js";
import "./chunk-KJTUY4N4.js";
import "./chunk-JC2LAWYU.js";
import {
  AsyncHandler,
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
  checkinBooking,
  checkinBookingInstance,
  currentUser,
  isBefore,
  openConfirmModal,
  removeBooking
} from "./chunk-AM5MUWVH.js";
import {
  CommonModule,
  Component,
  DatePipe,
  FormsModule,
  MatOption,
  MatRipple,
  MatRippleModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Router,
  SlicePipe,
  TranslatePipe,
  addDays,
  computed,
  effect,
  format,
  forwardRef,
  i18n,
  inject,
  isSameDay,
  notifyError,
  notifySuccess,
  setClassMetadata,
  signal,
  startOfDay,
  startOfWeek,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
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
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2
} from "./chunk-NUJFPPHE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// apps/workplace/src/app/schedule/schedule-filter-card.component.ts
function ScheduleFilterCardComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_9_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event"));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "RESOURCE.ROOMS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("event"));
    \u0275\u0275control();
  }
}
function ScheduleFilterCardComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk"));
    });
    \u0275\u0275elementStart(1, "div", 12);
    \u0275\u0275element(2, "img", 18);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13)(4, "div", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 3, "RESOURCE.DESKS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "APP.WORKPLACE.SCHEDULE_FILTER_DESKS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("desk"));
    \u0275\u0275control();
  }
}
function ScheduleFilterCardComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_11_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking"));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "drive_eta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 3, "RESOURCE.PARKING"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_PARKING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("parking"));
    \u0275\u0275control();
  }
}
function ScheduleFilterCardComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 20);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_12_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor"));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_VISITORS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("visitor"));
    \u0275\u0275control();
  }
}
function ScheduleFilterCardComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker"));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.LOCKERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("locker"));
    \u0275\u0275control();
  }
}
function ScheduleFilterCardComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 21);
    \u0275\u0275listener("click", function ScheduleFilterCardComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event"));
    });
    \u0275\u0275elementStart(1, "div", 12)(2, "icon");
    \u0275\u0275text(3, "door_back");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 13)(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 15);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 16);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.EVENTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_EVENTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("group-event"));
    \u0275\u0275control();
  }
}
var ScheduleFilterCardComponent = class _ScheduleFilterCardComponent {
  constructor() {
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this._sheet_ref = inject(MatBottomSheetRef);
    this.filters = this._state.filters;
    this.toggleType = (t) => this._state.toggleType(t);
    this.dismiss = () => this._sheet_ref.dismiss();
  }
  hasFeature(feature) {
    return this._settings.get("app.features")?.includes(feature);
  }
  static {
    this.\u0275fac = function ScheduleFilterCardComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFilterCardComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFilterCardComponent, selectors: [["schedule-filter-card"]], decls: 19, vars: 12, consts: [[1, "border-base-200", "mb-4", "flex", "items-center", "space-x-2", "border-b", "text-xl"], ["icon", "", "matRipple", "", 3, "click"], [1, "w-1/2", "flex-1", "text-center"], [1, "border-base-200", "mb-4", "space-y-4", "border-b", "px-2", "pb-4"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], [1, "px-2", "pb-2"], ["btn", "", "matRipple", "", "name", "schedule-apply-filter", 1, "w-full", 3, "click"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"]], template: function ScheduleFilterCardComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(9, ScheduleFilterCardComponent_Conditional_9_Template, 12, 7, "button", 4);
        \u0275\u0275conditionalCreate(10, ScheduleFilterCardComponent_Conditional_10_Template, 11, 7, "button", 5);
        \u0275\u0275conditionalCreate(11, ScheduleFilterCardComponent_Conditional_11_Template, 12, 7, "button", 6);
        \u0275\u0275conditionalCreate(12, ScheduleFilterCardComponent_Conditional_12_Template, 12, 7, "button", 7);
        \u0275\u0275conditionalCreate(13, ScheduleFilterCardComponent_Conditional_13_Template, 12, 7, "button", 8);
        \u0275\u0275conditionalCreate(14, ScheduleFilterCardComponent_Conditional_14_Template, 12, 7, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 9)(16, "button", 10);
        \u0275\u0275listener("click", function ScheduleFilterCardComponent_Template_button_click_16_listener() {
          return ctx.dismiss();
        });
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.hasFeature("spaces") ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("desks") ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("parking") || ctx.hasFeature("parking-requests") ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("visitor-invite") ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("lockers") ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("group-events") ? 14 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 10, "COMMON.APPLY"), " ");
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
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
        <div class="border-base-200 mb-4 space-y-4 border-b px-2 pb-4">
            @if (hasFeature('spaces')) {
                <button
                    matRipple
                    name="schedule-toggle-event-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('event')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>place</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.ROOMS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('event')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('desks')) {
                <button
                    matRipple
                    name="schedule-toggle-desk-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('desk')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <img src="assets/icons/desk-outline.svg" class="w-6" />
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.DESKS' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_DESKS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('desk')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('parking') || hasFeature('parking-requests')) {
                <button
                    matRipple
                    name="schedule-toggle-parking-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('parking')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>drive_eta</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">{{ 'RESOURCE.PARKING' | translate }}</div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_PARKING'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('parking')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('visitor-invite')) {
                <button
                    matRipple
                    name="schedule-toggle-visitor-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('visitor')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>people</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_VISITORS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('visitor')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('lockers')) {
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('locker')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>door_back</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="filters().shown_types?.includes('locker')"
                    ></mat-checkbox>
                </button>
            }
            @if (hasFeature('group-events')) {
                <button
                    matRipple
                    name="schedule-toggle-locker-filter"
                    class="flex w-full items-center space-x-2 text-left"
                    (click)="toggleType('group-event')"
                >
                    <div
                        class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                    >
                        <icon>door_back</icon>
                    </div>
                    <div class="flex-1">
                        <div class="">
                            {{ 'RESOURCE.EVENTS' | translate }}
                        </div>
                        <div class="text-sm opacity-60">
                            {{
                                'APP.WORKPLACE.SCHEDULE_FILTER_EVENTS'
                                    | translate
                            }}
                        </div>
                    </div>
                    <mat-checkbox
                        [ngModel]="
                            filters().shown_types?.includes('group-event')
                        "
                    ></mat-checkbox>
                </button>
            }
        </div>
        <div class="px-2 pb-2">
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
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-filter-card.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-filter-card.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFilterCardComponent, { className: "ScheduleFilterCardComponent", filePath: "apps/workplace/src/app/schedule/schedule-filter-card.component.ts", lineNumber: 219 });
})();

// apps/workplace/src/app/schedule/schedule-filters.component.ts
function ScheduleFiltersComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 10);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_5_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.ROOMS"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 11);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.DESKS"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_7_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.PARKING"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 13);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_8_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.VISITORS"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_9_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.LOCKERS"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 14);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_10_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.EVENTS"), " ");
  }
}
function ScheduleFiltersComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 15);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_16_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.ROOMS"));
  }
}
function ScheduleFiltersComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 16);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_17_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.DESKS"));
  }
}
function ScheduleFiltersComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 17);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_18_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.PARKING"));
  }
}
function ScheduleFiltersComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 18);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_19_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.VISITORS"));
  }
}
function ScheduleFiltersComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_20_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.LOCKERS"));
  }
}
function ScheduleFiltersComponent_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 19);
    \u0275\u0275listener("click", function ScheduleFiltersComponent_Conditional_21_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event", true));
    });
    \u0275\u0275elementStart(5, "icon");
    \u0275\u0275text(6, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 1, "RESOURCE.EVENTS"));
  }
}
var ScheduleFiltersComponent = class _ScheduleFiltersComponent {
  constructor() {
    this._sheet = inject(MatBottomSheet);
    this._state = inject(ScheduleStateService);
    this._settings = inject(SettingsService);
    this.filters = this._state.filters;
    this.toggleType = (t, c = false) => this._state.toggleType(t, c);
  }
  hasFeature(feature) {
    return this._settings.get("app.features")?.includes(feature);
  }
  openFilters() {
    this._sheet.open(ScheduleFilterCardComponent);
  }
  static {
    this.\u0275fac = function ScheduleFiltersComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleFiltersComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleFiltersComponent, selectors: [["schedule-filters"]], decls: 22, vars: 15, consts: [[1, "border-base-200", "bg-base-100", "hidden", "rounded-sm", "border", "p-2", "sm:block"], [1, "mb-2", "font-medium"], [1, "flex", "flex-wrap"], [1, "border-base-200", "m-1", "flex", "items-center", "rounded-3xl", "border"], [1, "flex", "items-center", "space-x-2", "overflow-auto", "sm:hidden"], ["btn", "", "matRipple", "", "name", "schedule-open-filter-edit", 1, "min-w-12", "sm:w-24", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-xl"], [1, "border-base-200", "bg-base-100", "flex", "items-center", "rounded-3xl", "border", "pl-2", "text-sm"], [1, "px-2"], ["icon", "", "matRipple", "", "name", "schedule-remove-event-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-desk-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-parking-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-visitor-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-locker-filter", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-event-filter-mobile", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-desk-filter-mobile", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-parking-filter-mobile", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-visitor-filter-mobile", 3, "click"], ["icon", "", "matRipple", "", "name", "schedule-remove-locker-filter-mobile", 3, "click"]], template: function ScheduleFiltersComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "h3", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275conditionalCreate(5, ScheduleFiltersComponent_Conditional_5_Template, 7, 3, "div", 3);
        \u0275\u0275conditionalCreate(6, ScheduleFiltersComponent_Conditional_6_Template, 7, 3, "div", 3);
        \u0275\u0275conditionalCreate(7, ScheduleFiltersComponent_Conditional_7_Template, 7, 3, "div", 3);
        \u0275\u0275conditionalCreate(8, ScheduleFiltersComponent_Conditional_8_Template, 7, 3, "div", 3);
        \u0275\u0275conditionalCreate(9, ScheduleFiltersComponent_Conditional_9_Template, 7, 3, "div", 3);
        \u0275\u0275conditionalCreate(10, ScheduleFiltersComponent_Conditional_10_Template, 7, 3, "div", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "div", 4)(12, "button", 5);
        \u0275\u0275listener("click", function ScheduleFiltersComponent_Template_button_click_12_listener() {
          return ctx.openFilters();
        });
        \u0275\u0275elementStart(13, "div", 6)(14, "icon", 7);
        \u0275\u0275text(15, "filter_list");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(16, ScheduleFiltersComponent_Conditional_16_Template, 7, 3, "div", 8);
        \u0275\u0275conditionalCreate(17, ScheduleFiltersComponent_Conditional_17_Template, 7, 3, "div", 8);
        \u0275\u0275conditionalCreate(18, ScheduleFiltersComponent_Conditional_18_Template, 7, 3, "div", 8);
        \u0275\u0275conditionalCreate(19, ScheduleFiltersComponent_Conditional_19_Template, 7, 3, "div", 8);
        \u0275\u0275conditionalCreate(20, ScheduleFiltersComponent_Conditional_20_Template, 7, 3, "div", 8);
        \u0275\u0275conditionalCreate(21, ScheduleFiltersComponent_Conditional_21_Template, 7, 3, "div", 8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "APP.WORKPLACE.SCHEDULE_FILTERS_DISPLAY_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("event") && ctx.hasFeature("spaces") ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("desk") && ctx.hasFeature("desks") ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("parking") && (ctx.hasFeature("parking") || ctx.hasFeature("parking-requests")) ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("visitor") && ctx.hasFeature("visitor-invite") ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("locker") && ctx.hasFeature("lockers") ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("group-event") && ctx.hasFeature("group-events") ? 10 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("event") && ctx.hasFeature("spaces") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("desk") && ctx.hasFeature("desks") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("parking") && (ctx.hasFeature("parking") || ctx.hasFeature("parking-requests")) ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("visitor") && ctx.hasFeature("visitor-invite") ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("locker") && ctx.hasFeature("lockers") ? 20 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.filters().shown_types?.includes("group-event") && ctx.hasFeature("group-events") ? 21 : -1);
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleFiltersComponent, [{
    type: Component,
    args: [{ selector: "schedule-filters", template: `
        <div
            class="border-base-200 bg-base-100 hidden rounded-sm border p-2 sm:block"
        >
            <h3 class="mb-2 font-medium">
                {{
                    'APP.WORKPLACE.SCHEDULE_FILTERS_DISPLAY_HEADER' | translate
                }}
            </h3>
            <div class="flex flex-wrap">
                @if (
                    filters().shown_types?.includes('event') &&
                    hasFeature('spaces')
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.ROOMS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-event-filter"
                            (click)="toggleType('event', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    filters().shown_types?.includes('desk') &&
                    hasFeature('desks')
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.DESKS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-desk-filter"
                            (click)="toggleType('desk', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    filters().shown_types?.includes('parking') &&
                    (hasFeature('parking') || hasFeature('parking-requests'))
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.PARKING' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-parking-filter"
                            (click)="toggleType('parking', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    filters().shown_types?.includes('visitor') &&
                    hasFeature('visitor-invite')
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.VISITORS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-visitor-filter"
                            (click)="toggleType('visitor', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    filters().shown_types?.includes('locker') &&
                    hasFeature('lockers')
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.LOCKERS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-locker-filter"
                            (click)="toggleType('locker', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
                @if (
                    filters().shown_types?.includes('group-event') &&
                    hasFeature('group-events')
                ) {
                    <div
                        class="border-base-200 m-1 flex items-center rounded-3xl border"
                    >
                        <div class="px-2">
                            {{ 'RESOURCE.EVENTS' | translate }}
                        </div>
                        <button
                            icon
                            matRipple
                            name="schedule-remove-locker-filter"
                            (click)="toggleType('group-event', true)"
                        >
                            <icon>close</icon>
                        </button>
                    </div>
                }
            </div>
        </div>
        <div class="flex items-center space-x-2 overflow-auto sm:hidden">
            <button
                btn
                matRipple
                name="schedule-open-filter-edit"
                class="min-w-12 sm:w-24"
                (click)="openFilters()"
            >
                <div class="flex items-center justify-center space-x-2">
                    <icon class="text-xl">filter_list</icon>
                    <!-- <div class="mr-2">{{ "APP.WORKPLACE.FILTERS" | translate }}</div> -->
                </div>
            </button>
            @if (
                filters().shown_types?.includes('event') && hasFeature('spaces')
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.ROOMS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-event-filter-mobile"
                        (click)="toggleType('event', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (
                filters().shown_types?.includes('desk') && hasFeature('desks')
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.DESKS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-desk-filter-mobile"
                        (click)="toggleType('desk', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (
                filters().shown_types?.includes('parking') &&
                (hasFeature('parking') || hasFeature('parking-requests'))
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.PARKING' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-parking-filter-mobile"
                        (click)="toggleType('parking', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (
                filters().shown_types?.includes('visitor') &&
                hasFeature('visitor-invite')
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.VISITORS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-visitor-filter-mobile"
                        (click)="toggleType('visitor', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (
                filters().shown_types?.includes('locker') &&
                hasFeature('lockers')
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.LOCKERS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter-mobile"
                        (click)="toggleType('locker', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
            @if (
                filters().shown_types?.includes('group-event') &&
                hasFeature('group-events')
            ) {
                <div
                    class="border-base-200 bg-base-100 flex items-center rounded-3xl border pl-2 text-sm"
                >
                    <div>{{ 'RESOURCE.EVENTS' | translate }}</div>
                    <button
                        icon
                        matRipple
                        name="schedule-remove-locker-filter-mobile"
                        (click)="toggleType('group-event', true)"
                    >
                        <icon>close</icon>
                    </button>
                </div>
            }
        </div>
    `, imports: [CommonModule, TranslatePipe, IconComponent, MatRippleModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleFiltersComponent, { className: "ScheduleFiltersComponent", filePath: "apps/workplace/src/app/schedule/schedule-filters.component.ts", lineNumber: 268 });
})();

// apps/workplace/src/app/schedule/schedule-mobile-calendar.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ScheduleMobileCalendarComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
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
function ScheduleMobileCalendarComponent_For_20_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 9);
  }
}
function ScheduleMobileCalendarComponent_For_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 8);
    \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_For_20_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275conditionalCreate(1, ScheduleMobileCalendarComponent_For_20_Conditional_1_Template, 1, 0, "div", 9);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("text-opacity-30", !day_r3.is_month)("text-white", day_r3.id === ctx_r3.active_date())("text-black", day_r3.id !== ctx_r3.active_date())("bg-primary", day_r3.id === ctx_r3.active_date())("font-normal", day_r3.id !== ctx_r3.active_date());
    \u0275\u0275advance();
    \u0275\u0275conditional(day_r3.is_today ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 12, day_r3.id, "d"), " ");
  }
}
var ScheduleMobileCalendarComponent = class _ScheduleMobileCalendarComponent {
  constructor() {
    this.active_date = signal(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "active_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = 0;
    this.date_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "date_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.short_list = [];
    this.show_shortlist = signal(
      true,
      ...ngDevMode ? [{ debugName: "show_shortlist" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  ngOnInit() {
    this.generateDates();
  }
  get list() {
    return this.show_shortlist() ? this.short_list : this.date_list();
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.active_date.set(startOfDay(new_value).valueOf());
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
    this.active_date.set(startOfDay(value).valueOf());
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
    const date = addMonths(this.active_date(), this.offset);
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
    this.date_list.set(list);
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
  static {
    this.\u0275fac = function ScheduleMobileCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleMobileCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleMobileCalendarComponent, selectors: [["schedule-mobile-calendar"]], features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _ScheduleMobileCalendarComponent),
        multi: true
      }
    ])], decls: 21, vars: 8, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], ["btn", "", "matRipple", "", 1, "clear", "font-medium", 3, "click"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", 3, "click"], [1, "mb-2", "grid", "grid-cols-7", "gap-2"], [1, "mx-2", "w-10", "text-center", "opacity-60"], ["icon", "", "matRipple", "", 1, "mx-2", "h-9", "min-w-[calc(14%-1rem)]", "flex-1", "overflow-visible", 3, "text-opacity-30", "text-white", "text-black", "bg-primary", "font-normal"], ["icon", "", "matRipple", "", 1, "mx-2", "h-9", "min-w-[calc(14%-1rem)]", "flex-1", "overflow-visible", 3, "click"], [1, "border-primary", "absolute", "-inset-0.5", "rounded-full", "border"]], template: function ScheduleMobileCalendarComponent_Template(rf, ctx) {
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
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 4);
        \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_9_listener() {
          return ctx.changeMonth(1);
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "chevron_right");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "button", 4);
        \u0275\u0275listener("click", function ScheduleMobileCalendarComponent_Template_button_click_12_listener() {
          return ctx.show_shortlist.set(!ctx.show_shortlist());
        });
        \u0275\u0275elementStart(13, "icon");
        \u0275\u0275text(14, "arrow_drop_down");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(15, "div", 5);
        \u0275\u0275repeaterCreate(16, ScheduleMobileCalendarComponent_For_17_Template, 3, 4, "div", 6, _forTrack0);
        \u0275\u0275pipe(18, "slice");
        \u0275\u0275repeaterCreate(19, ScheduleMobileCalendarComponent_For_20_Template, 4, 15, "button", 7, _forTrack0);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 1, ctx.date_list()[6]?.id || ctx.active_date(), "LLLL yyyy"), " ");
        \u0275\u0275advance(13);
        \u0275\u0275repeater(\u0275\u0275pipeBind3(18, 4, ctx.date_list(), 0, 7));
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.list);
      }
    }, dependencies: [CommonModule, MatRipple, IconComponent, SlicePipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleMobileCalendarComponent, [{
    type: Component,
    args: [{ selector: "schedule-mobile-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    btn
                    matRipple
                    class="clear font-medium"
                    (click)="resetMonth()"
                >
                    {{ date_list()[6]?.id || active_date() | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button icon matRipple (click)="changeMonth(-1)">
                        <icon>chevron_left</icon>
                    </button>
                    <button icon matRipple (click)="changeMonth(1)">
                        <icon>chevron_right</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        (click)="show_shortlist.set(!show_shortlist())"
                    >
                        <icon>arrow_drop_down</icon>
                    </button>
                </div>
            </div>
            <div class="mb-2 grid grid-cols-7 gap-2">
                @for (day of date_list() | slice: 0 : 7; track day.id) {
                    <div class="mx-2 w-10 text-center opacity-60">
                        {{ day.id | date: 'EE' }}
                    </div>
                }
                @for (day of list; track day.id) {
                    <button
                        icon
                        matRipple
                        class="mx-2 h-9 min-w-[calc(14%-1rem)] flex-1 overflow-visible"
                        [class.text-opacity-30]="!day.is_month"
                        [class.text-white]="day.id === active_date()"
                        [class.text-black]="day.id !== active_date()"
                        [class.bg-primary]="day.id === active_date()"
                        [class.font-normal]="day.id !== active_date()"
                        (click)="setValue(day.id)"
                    >
                        @if (day.is_today) {
                            <div
                                class="border-primary absolute -inset-0.5 rounded-full border"
                            ></div>
                        }
                        {{ day.id | date: 'd' }}
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ScheduleMobileCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, MatRipple, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleMobileCalendarComponent, { className: "ScheduleMobileCalendarComponent", filePath: "apps/workplace/src/app/schedule/schedule-mobile-calendar.component.ts", lineNumber: 85 });
})();

// apps/workplace/src/app/schedule/schedule-sidebar.component.ts
function ScheduleSidebarComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "button", 12);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_8_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDateToToday());
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.TODAY"), " ");
  }
}
function ScheduleSidebarComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "date-calendar", 13);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_9_Template_date_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
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
function ScheduleSidebarComponent_Conditional_10_For_4_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 17);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, "(C)");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(1, 1, "COMMON.WEEK_THIS"));
  }
}
function ScheduleSidebarComponent_Conditional_10_For_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 16);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleSidebarComponent_Conditional_10_For_4_Conditional_2_Template, 3, 3, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r5 = ctx.$implicit;
    \u0275\u0275property("value", option_r5.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", option_r5.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(option_r5.this_week ? 2 : -1);
  }
}
function ScheduleSidebarComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 3)(1, "mat-form-field", 14)(2, "mat-select", 15);
    \u0275\u0275listener("ngModelChange", function ScheduleSidebarComponent_Conditional_10_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275repeaterCreate(3, ScheduleSidebarComponent_Conditional_10_For_4_Template, 3, 3, "mat-option", 16, \u0275\u0275repeaterTrackByIdentity);
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
function ScheduleSidebarComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_15_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("event"));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "icon");
    \u0275\u0275text(3, "place");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.ROOMS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_ROOMS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("event"));
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 24);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_16_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("desk"));
    });
    \u0275\u0275elementStart(1, "div", 19);
    \u0275\u0275element(2, "img", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 20)(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 22);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(10, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "RESOURCE.DESKS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 5, "APP.WORKPLACE.SCHEDULE_FILTER_DESKS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("desk"));
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 26);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_17_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("parking"));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "icon");
    \u0275\u0275text(3, "drive_eta");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.PARKING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_PARKING"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("parking"));
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 27);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("visitor"));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "icon");
    \u0275\u0275text(3, "people");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.VISITORS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_VISITORS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("visitor"));
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_19_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("locker"));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "icon");
    \u0275\u0275text(3, "lock");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.LOCKERS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("locker"));
    \u0275\u0275control();
  }
}
function ScheduleSidebarComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ScheduleSidebarComponent_Conditional_20_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.toggleType("group-event"));
    });
    \u0275\u0275elementStart(1, "div", 19)(2, "icon");
    \u0275\u0275text(3, "event_available");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 20)(5, "div", 21);
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 22);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "mat-checkbox", 23);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 3, "RESOURCE.EVENTS"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 5, "APP.WORKPLACE.SCHEDULE_FILTER_EVENTS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.filters().shown_types?.includes("group-event"));
    \u0275\u0275control();
  }
}
var ScheduleSidebarComponent = class _ScheduleSidebarComponent extends AsyncHandler {
  get period() {
    return this._state.getOptions()?.period;
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
    return (this._settings.get("app.features") || []).includes(feature);
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
    this.toggleType = (t) => this._state.toggleType(t);
    this.setDate = (d) => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
    effect((onCleanup) => {
      const bld = this._org.active_building();
      if (!bld)
        return;
      const timeout = setTimeout(() => {
        this._state.setType("event", this.hasFeature("spaces"));
        this._state.setType("desk", this.hasFeature("desks"));
        this._state.setType("parking", this.hasFeature("parking") || this.hasFeature("parking-requests"));
        this._state.setType("visitor", this.hasFeature("visitor-invite"));
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleSidebarComponent, selectors: [["schedule-sidebar"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 21, vars: 22, consts: [[1, "bg-base-100[#1F2021]", "border-base-200", "flex", "h-full", "w-[18rem]", "flex-col", "overflow-hidden", "border-r"], [1, "flex", "items-center", "space-x-2", "p-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "w-full", "px-2"], [1, "border-base-200", "border-b", 3, "ngModel", "offset_weekday"], [1, "mx-4", "mt-4", "font-medium"], [1, "h-1/2", "flex-1", "space-y-4", "overflow-auto", "p-4"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left"], ["btn", "", "matRipple", "", 1, "inverse", "w-full", 3, "click"], [1, "border-base-200", "border-b", 3, "ngModelChange", "ngModel", "offset_weekday"], ["appearance", "outline", 1, "no-subscript", "w-full"], ["placeholder", "Select Week...", 3, "ngModelChange", "ngModel"], [1, "leading-tight", 3, "value"], [1, "text-info", "px-1", "text-xs", 3, "matTooltip"], ["matRipple", "", "name", "schedule-toggle-event-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full", "text-2xl"], [1, "flex-1"], [1, ""], [1, "text-sm", "opacity-60"], [3, "ngModel"], ["matRipple", "", "name", "schedule-toggle-desk-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["src", "assets/icons/desk-outline.svg", 1, "w-6"], ["matRipple", "", "name", "schedule-toggle-parking-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-visitor-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"], ["matRipple", "", "name", "schedule-toggle-locker-filter", 1, "flex", "w-full", "items-center", "space-x-2", "text-left", 3, "click"]], template: function ScheduleSidebarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("click", function ScheduleSidebarComponent_Template_button_click_2_listener() {
          return ctx.setOptions({ period: "day" });
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "button", 2);
        \u0275\u0275listener("click", function ScheduleSidebarComponent_Template_button_click_5_listener() {
          return ctx.setOptions({ period: "week" });
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(8, ScheduleSidebarComponent_Conditional_8_Template, 4, 3, "div", 3);
        \u0275\u0275conditionalCreate(9, ScheduleSidebarComponent_Conditional_9_Template, 1, 2, "date-calendar", 4);
        \u0275\u0275conditionalCreate(10, ScheduleSidebarComponent_Conditional_10_Template, 5, 1, "div", 3);
        \u0275\u0275elementStart(11, "h3", 5);
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(14, "div", 6);
        \u0275\u0275conditionalCreate(15, ScheduleSidebarComponent_Conditional_15_Template, 12, 7, "button", 7);
        \u0275\u0275conditionalCreate(16, ScheduleSidebarComponent_Conditional_16_Template, 11, 7, "button", 8);
        \u0275\u0275conditionalCreate(17, ScheduleSidebarComponent_Conditional_17_Template, 12, 7, "button", 9);
        \u0275\u0275conditionalCreate(18, ScheduleSidebarComponent_Conditional_18_Template, 12, 7, "button", 10);
        \u0275\u0275conditionalCreate(19, ScheduleSidebarComponent_Conditional_19_Template, 12, 7, "button", 11);
        \u0275\u0275conditionalCreate(20, ScheduleSidebarComponent_Conditional_20_Template, 12, 7, "button", 11);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period !== "day");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 16, "COMMON.DAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period !== "week");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 18, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.is_today ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "day" ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "week" ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(13, 20, "APP.WORKPLACE.SCHEDULE_FILTERS"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.hasFeature("spaces") ? 15 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("desks") ? 16 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("parking") || ctx.hasFeature("parking-requests") ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("visitor-invite") ? 18 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("lockers") ? 19 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.hasFeature("group-events") ? 20 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatCheckboxModule,
      MatCheckbox,
      IconComponent,
      MatRippleModule,
      MatRipple,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      DateCalendarComponent,
      TranslatePipe
    ], styles: ["\nmat-checkbox[_ngcontent-%COMP%] {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleSidebarComponent, [{
    type: Component,
    args: [{ selector: "schedule-sidebar", template: `
        <div
            class="bg-base-100[#1F2021] border-base-200 flex h-full w-[18rem] flex-col overflow-hidden border-r"
        >
            <div class="flex items-center space-x-2 p-2">
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'day'"
                    (click)="setOptions({ period: 'day' })"
                >
                    {{ 'COMMON.DAY' | translate }}
                </button>
                <button
                    btn
                    matRipple
                    class="flex-1"
                    [class.inverse]="period !== 'week'"
                    (click)="setOptions({ period: 'week' })"
                >
                    {{ 'COMMON.WEEK' | translate }}
                </button>
            </div>
            @if (!is_today) {
                <div class="w-full px-2">
                    <button
                        btn
                        matRipple
                        class="inverse w-full"
                        (click)="setDateToToday()"
                    >
                        {{ 'COMMON.TODAY' | translate }}
                    </button>
                </div>
            }
            @if (period === 'day') {
                <date-calendar
                    class="border-base-200 border-b"
                    [ngModel]="date()"
                    (ngModelChange)="setDate($event)"
                    [offset_weekday]="offset_weekday"
                ></date-calendar>
            }
            @if (period === 'week') {
                <div class="w-full px-2">
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
            <h3 class="mx-4 mt-4 font-medium">
                {{ 'APP.WORKPLACE.SCHEDULE_FILTERS' | translate }}
            </h3>
            <div class="h-1/2 flex-1 space-y-4 overflow-auto p-4">
                @if (hasFeature('spaces')) {
                    <button
                        matRipple
                        name="schedule-toggle-event-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('event')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.ROOMS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_ROOMS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="filters().shown_types?.includes('event')"
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('desks')) {
                    <button
                        matRipple
                        name="schedule-toggle-desk-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('desk')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <img
                                src="assets/icons/desk-outline.svg"
                                class="w-6"
                            />
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.DESKS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_DESKS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="filters().shown_types?.includes('desk')"
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('parking') || hasFeature('parking-requests')) {
                    <button
                        matRipple
                        name="schedule-toggle-parking-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('parking')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>drive_eta</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.PARKING' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_PARKING'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="
                                filters().shown_types?.includes('parking')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('visitor-invite')) {
                    <button
                        matRipple
                        name="schedule-toggle-visitor-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('visitor')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>people</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.VISITORS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_VISITORS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="
                                filters().shown_types?.includes('visitor')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('lockers')) {
                    <button
                        matRipple
                        name="schedule-toggle-locker-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('locker')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>lock</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.LOCKERS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_LOCKERS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="
                                filters().shown_types?.includes('locker')
                            "
                        ></mat-checkbox>
                    </button>
                }
                @if (hasFeature('group-events')) {
                    <button
                        matRipple
                        name="schedule-toggle-locker-filter"
                        class="flex w-full items-center space-x-2 text-left"
                        (click)="toggleType('group-event')"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full text-2xl"
                        >
                            <icon>event_available</icon>
                        </div>
                        <div class="flex-1">
                            <div class="">
                                {{ 'RESOURCE.EVENTS' | translate }}
                            </div>
                            <div class="text-sm opacity-60">
                                {{
                                    'APP.WORKPLACE.SCHEDULE_FILTER_EVENTS'
                                        | translate
                                }}
                            </div>
                        </div>
                        <mat-checkbox
                            [ngModel]="
                                filters().shown_types?.includes('group-event')
                            "
                        ></mat-checkbox>
                    </button>
                }
            </div>
        </div>
    `, imports: [
      CommonModule,
      MatCheckboxModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatTooltipModule,
      DateCalendarComponent
    ], styles: ["/* angular:styles/component:css;c8f9d18253326e4ed43aff56311c0651df3afa940b60387869cba90c71ede5e2;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule-sidebar.component.ts */\nmat-checkbox {\n  pointer-events: none;\n}\n/*# sourceMappingURL=schedule-sidebar.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleSidebarComponent, { className: "ScheduleSidebarComponent", filePath: "apps/workplace/src/app/schedule/schedule-sidebar.component.ts", lineNumber: 306 });
})();

// apps/workplace/src/app/schedule/schedule.component.ts
var _forTrack02 = ($index, $item) => $item.date;
var _forTrack1 = ($index, $item) => $item.id;
function ScheduleComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ScheduleComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "schedule-mobile-calendar", 10);
    \u0275\u0275listener("ngModelChange", function ScheduleComponent_Conditional_11_Template_schedule_mobile_calendar_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.date());
    \u0275\u0275control();
  }
}
function ScheduleComponent_Conditional_12_For_5_Conditional_2_Template(rf, ctx) {
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
function ScheduleComponent_Conditional_12_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 13);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, ScheduleComponent_Conditional_12_For_5_Conditional_2_Template, 3, 3, "span", 14);
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
function ScheduleComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "mat-form-field", 11)(2, "mat-select", 12);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("ngModelChange", function ScheduleComponent_Conditional_12_Template_mat_select_ngModelChange_2_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDate($event));
    });
    \u0275\u0275repeaterCreate(4, ScheduleComponent_Conditional_12_For_5_Template, 3, 3, "mat-option", 13, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r1.week_date())("placeholder", \u0275\u0275pipeBind1(3, 2, "COMMON.WEEK_SELECT"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.week_options());
  }
}
function ScheduleComponent_Conditional_15_For_1_Conditional_3_Template(rf, ctx) {
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
function ScheduleComponent_Conditional_15_For_1_For_5_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 16);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("event", item_r5)("edit_fn", ctx_r1.edit_fn)("remove_fn", ctx_r1.remove_fn);
  }
}
function ScheduleComponent_Conditional_15_For_1_For_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 17);
  }
  if (rf & 2) {
    const item_r5 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("booking", item_r5)("edit_fn", ctx_r1.edit_booking_fn)("remove_fn", ctx_r1.remove_fn)("end_fn", ctx_r1.end_fn)("refresh_fn", ctx_r1.refresh_fn);
  }
}
function ScheduleComponent_Conditional_15_For_1_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ScheduleComponent_Conditional_15_For_1_For_5_Conditional_0_Template, 1, 3, "event-card", 16)(1, ScheduleComponent_Conditional_15_For_1_For_5_Conditional_1_Template, 1, 5, "booking-card", 17);
  }
  if (rf & 2) {
    const item_r5 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275conditional(ctx_r1.isEvent(item_r5) ? 0 : 1);
  }
}
function ScheduleComponent_Conditional_15_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, ScheduleComponent_Conditional_15_For_1_Conditional_3_Template, 3, 3, "span");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(4, ScheduleComponent_Conditional_15_For_1_For_5_Template, 2, 1, null, null, _forTrack1);
  }
  if (rf & 2) {
    const date_block_r6 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, date_block_r6.date, "EEE dd LLL yyyy"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(date_block_r6.is_today ? 3 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(date_block_r6.bookings);
  }
}
function ScheduleComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, ScheduleComponent_Conditional_15_For_1_Template, 6, 5, null, null, _forTrack02);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r1.booking_dates());
  }
}
function ScheduleComponent_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275element(1, "img", 18);
    \u0275\u0275elementStart(2, "p", 19);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(4, 2, "APP.WORKPLACE.SCHEDULE_EMPTY"), " ", \u0275\u0275pipeBind2(5, 4, ctx_r1.date(), "EEEE, dd LLL yyyy"), " ");
  }
}
function ScheduleComponent_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-progress-bar", 9);
  }
}
function ScheduleComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ScheduleComponent = class _ScheduleComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ScheduleStateService);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._dialog = inject(MatDialog);
    this._settings = inject(SettingsService);
    this.booking_dates = computed(
      () => {
        const bookings = this._state.loading() ? [] : [...this._state.filtered_bookings()];
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
      },
      ...ngDevMode ? [{ debugName: "booking_dates" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = this._state.date;
    this.loading = this._state.loading;
    this.setDate = (d) => this._state.setDate(d);
    this.week_date = this._state.week_date;
    this.week_options = this._state.week_options;
    this.edit_fn = (i) => this.edit(i);
    this.edit_booking_fn = (i) => this.editBooking(i);
    this.remove_fn = (i, t) => this.remove(i, t);
    this.end_fn = (i) => this.end(i);
    this.refresh_fn = () => this._state.triggerPoll();
  }
  get period() {
    return this._state.getOptions().period;
  }
  isEvent(item) {
    return item instanceof CalendarEvent;
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
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
  async edit(event) {
    this._router.navigate(["/book", "meeting", "form"]);
    if (event.creator !== event.mailbox) {
      event = (await queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      })).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(event.booking_type, event);
    if (event.booking_type === "visitor")
      return;
    setTimeout(() => {
      this._booking_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
        resources: [
          {
            id: event.asset_id,
            name: event.asset_name || event.description
          }
        ],
        asset_id: event.asset_id
      }));
    }, 100);
  }
  async remove(item, remove_series = false) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item instanceof CalendarEvent ? item.space?.display_name : item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE" : "APP.WORKPLACE.SCHEDULE_REMOVE_TITLE", { name: resource_name, time }),
      content: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG" : "APP.WORKPLACE.SCHEDULE_REMOVE_MSG", { name: resource_name, time }),
      icon: { content: "delete" }
    }, this._dialog);
    if (item instanceof CalendarEvent && item.creator !== item.mailbox) {
      item = (await queryEvents({
        period_start: item.event_start,
        period_end: item.event_end,
        ical_uid: item.ical_uid
      })).find((_) => _.ical_uid === item.ical_uid) || item;
    }
    if (resp.reason !== "done")
      return;
    resp.loading(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING" : "APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
    const remove_result = (item instanceof CalendarEvent ? removeEvent : removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : item.calendar || currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.instance : void 0
    });
    await (remove_result?.then instanceof Function ? remove_result : remove_result.toPromise()).catch((e) => {
      notifyError(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR" : "APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS" : "APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
    this._state.removeItem(item);
    this._dialog.closeAll();
  }
  async end(item) {
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
    const resource_name = item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n("APP.WORKPLACE.SCHEDULE_END_TITLE"),
      content: i18n("APP.WORKPLACE.SCHEDULE_END_MSG", {
        name: resource_name,
        time
      }),
      icon: { content: "event_busy" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    resp.loading(i18n("APP.WORKPLACE.SCHEDULE_END_LOADING"));
    const promise = (item.instance ? checkinBookingInstance(item.id, item.instance, false) : checkinBooking(item.id, false)).catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    await promise;
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this._state.triggerPoll();
    this._dialog.closeAll();
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ScheduleComponent, selectors: [["app-schedule"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 19, vars: 16, consts: [[1, "bg-base-200", "relative", "flex", "h-1/2", "flex-1", "flex-col", "sm:flex-row"], [1, "bg-base-100", "hidden", "sm:block"], [1, "border-neutral", "bg-base-100", "w-full", "border-b", "sm:hidden"], [1, "flex", "items-center", "space-x-2", "px-2", "pt-2"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [3, "ngModel"], [1, "my-2", "w-full", "px-2"], [1, "h-full", "flex-1", "space-y-2", "overflow-auto", "p-4"], [1, "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-4", "p-8"], ["mode", "indeterminate", 1, "absolute", "inset-x-0", "bottom-0"], [3, "ngModelChange", "ngModel"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "ngModelChange", "ngModel", "placeholder"], [1, "leading-tight", 3, "value"], [1, "text-info", "px-1", "text-xs", 3, "matTooltip"], [1, "my-2", "font-medium"], [3, "event", "edit_fn", "remove_fn"], [3, "booking", "edit_fn", "remove_fn", "end_fn", "refresh_fn"], ["src", "assets/img/no-events.svg", 1, "mr-4"], [1, "opacity-30"]], template: function ScheduleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ScheduleComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0);
        \u0275\u0275element(2, "schedule-sidebar", 1);
        \u0275\u0275elementStart(3, "div", 2)(4, "div", 3)(5, "button", 4);
        \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_5_listener() {
          return ctx.setOptions({ period: "day" });
        });
        \u0275\u0275text(6);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "button", 4);
        \u0275\u0275listener("click", function ScheduleComponent_Template_button_click_8_listener() {
          return ctx.setOptions({ period: "week" });
        });
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(11, ScheduleComponent_Conditional_11_Template, 1, 1, "schedule-mobile-calendar", 5);
        \u0275\u0275conditionalCreate(12, ScheduleComponent_Conditional_12_Template, 6, 4, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275element(14, "schedule-filters");
        \u0275\u0275conditionalCreate(15, ScheduleComponent_Conditional_15_Template, 2, 0)(16, ScheduleComponent_Conditional_16_Template, 6, 7, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(17, ScheduleComponent_Conditional_17_Template, 1, 0, "mat-progress-bar", 9);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(18, ScheduleComponent_Conditional_18_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("inverse", ctx.period !== "day");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 12, "COMMON.DAY"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("inverse", ctx.period !== "week");
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 14, "COMMON.WEEK"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.period === "day" ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.period === "week" ? 12 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.booking_dates().length ? 15 : 16);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.loading() ? 17 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hide_nav ? 18 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      MatRippleModule,
      MatRipple,
      MatProgressBarModule,
      MatProgressBar,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      FooterMenuComponent,
      BookingCardComponent,
      EventCardComponent,
      ScheduleFiltersComponent,
      ScheduleMobileCalendarComponent,
      ScheduleSidebarComponent,
      TopbarComponent,
      DatePipe,
      TranslatePipe
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
        <div
            class="bg-base-200 relative flex h-1/2 flex-1 flex-col sm:flex-row"
        >
            <schedule-sidebar
                class="bg-base-100 hidden sm:block"
            ></schedule-sidebar>
            <div class="border-neutral bg-base-100 w-full border-b sm:hidden">
                <div class="flex items-center space-x-2 px-2 pt-2">
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        [class.inverse]="period !== 'day'"
                        (click)="setOptions({ period: 'day' })"
                    >
                        {{ 'COMMON.DAY' | translate }}
                    </button>
                    <button
                        btn
                        matRipple
                        class="flex-1"
                        [class.inverse]="period !== 'week'"
                        (click)="setOptions({ period: 'week' })"
                    >
                        {{ 'COMMON.WEEK' | translate }}
                    </button>
                </div>
                @if (period === 'day') {
                    <schedule-mobile-calendar
                        [ngModel]="date()"
                        (ngModelChange)="setDate($event)"
                    ></schedule-mobile-calendar>
                }
                @if (period === 'week') {
                    <div class="my-2 w-full px-2">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                [ngModel]="week_date()"
                                (ngModelChange)="setDate($event)"
                                [placeholder]="'COMMON.WEEK_SELECT' | translate"
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
                                                    'COMMON.WEEK_THIS'
                                                        | translate
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
            </div>
            <div class="h-full flex-1 space-y-2 overflow-auto p-4">
                <schedule-filters></schedule-filters>
                @if (booking_dates().length) {
                    @for (
                        date_block of booking_dates();
                        track date_block.date
                    ) {
                        <h3 class="my-2 font-medium">
                            {{ date_block.date | date: 'EEE dd LLL yyyy' }}
                            @if (date_block.is_today) {
                                <span>
                                    ({{ 'COMMON.TODAY' | translate }})
                                </span>
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
                                    [refresh_fn]="refresh_fn"
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
                            {{ date() | date: 'EEEE, dd LLL yyyy' }}
                        </p>
                    </div>
                }
            </div>
            @if (loading()) {
                <mat-progress-bar
                    class="absolute inset-x-0 bottom-0"
                    mode="indeterminate"
                ></mat-progress-bar>
            }
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
      MatTooltipModule,
      TranslatePipe,
      FooterMenuComponent,
      BookingCardComponent,
      EventCardComponent,
      ScheduleFiltersComponent,
      ScheduleMobileCalendarComponent,
      ScheduleSidebarComponent,
      TopbarComponent
    ], styles: ["/* angular:styles/component:css;2c590c9e56511a088a1469fe4b227d8190323c208f95620a03712f1a8f5bae8d;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/schedule/schedule.component.ts */\n:host {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=schedule.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ScheduleComponent, { className: "ScheduleComponent", filePath: "apps/workplace/src/app/schedule/schedule.component.ts", lineNumber: 203 });
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
//# sourceMappingURL=schedule.routes-CDUS25S7.js.map
