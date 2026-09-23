import {
  BookingFormService,
  queryDeskAssetsForZones,
  queryParkingSpacesForZones,
  queryParkingUsers
} from "./chunk-BMLUJ75W.js";
import {
  ImageCarouselComponent
} from "./chunk-6RVPKXSL.js";
import {
  openConfirmModal
} from "./chunk-YRE7GYH5.js";
import {
  SpacesService
} from "./chunk-AGGEOL25.js";
import {
  InteractiveMapComponent,
  MapPinComponent
} from "./chunk-H34I3OUB.js";
import {
  UserAvatarComponent
} from "./chunk-MZ2P47XI.js";
import {
  takeUntilDestroyed
} from "./chunk-EJJZWVNZ.js";
import {
  AuthenticatedImageDirective
} from "./chunk-XG5RM2MX.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule
} from "./chunk-T7NN6GZ2.js";
import {
  EventFormService,
  SpacePipe,
  UserPipe,
  newCalendarEventFromBooking,
  requestSpacesForZone
} from "./chunk-CYRNF5IR.js";
import {
  addEventGuest,
  bookingLocationString,
  checkinEventGuest,
  getEventMetadata,
  loadLockerResources,
  parkingRequestStatus,
  queryBookings,
  queryEvents,
  removeBooking,
  removeEvent,
  removeEventGuest,
  setBookingCheckedIn,
  setHours,
  visitorDisplayNameFor
} from "./chunk-5VXUUSI7.js";
import "./chunk-BK3RSQJG.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-CT6DVU4Q.js";
import {
  MatFormField,
  MatFormFieldModule
} from "./chunk-BQAGEMR5.js";
import "./chunk-D7ZBEWDE.js";
import "./chunk-BUXLBBSZ.js";
import {
  TranslatePipe
} from "./chunk-IBKNRV7T.js";
import {
  SanitizePipe
} from "./chunk-BYY76PWS.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-KZUOTIU5.js";
import {
  AsyncHandler,
  BOOKING_TYPE_COLORS,
  BidiModule,
  Booking,
  Building,
  BuildingLevel,
  CalendarEvent,
  Clipboard,
  Dd,
  DefaultValueAccessor,
  Desk,
  Directionality,
  FormsModule,
  GuestUser,
  IconComponent,
  MAT_DIALOG_DATA,
  MAT_RIPPLE_GLOBAL_OPTIONS,
  MINUTES,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatOption,
  MatRipple,
  MatRippleModule,
  Mt,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  OrganisationService,
  Platform,
  RippleState,
  SettingsService,
  Space,
  User,
  Zr,
  _CdkPrivateStyleLoader,
  _StructuralStylesLoader,
  _animationsDisabled,
  ac,
  addMinutes,
  addWeeks,
  currentUser,
  differenceInMilliseconds,
  differenceInMinutes,
  endOfDay,
  endOfWeek,
  eo,
  flatten,
  format,
  formatDuration,
  formatRecurrence,
  fromBookingRecurrence,
  fromEventRecurrence,
  getTimezoneOffsetString,
  getUnixTime,
  i18n,
  isAfter,
  isBefore,
  isSameDay,
  notifyError,
  notifyInfo,
  notifySuccess,
  settingSignal,
  startOfDay,
  startOfMinute,
  startOfWeek,
  unique,
  userSignal
} from "./chunk-3OQ2BSWE.js";
import {
  ActivatedRoute,
  AsyncPipe,
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChild,
  ContentChildren,
  CurrencyPipe,
  DatePipe,
  DestroyRef,
  Directive,
  ElementRef,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Output,
  Renderer2,
  Router,
  RouterLink,
  RouterModule,
  SlicePipe,
  Subject,
  UpperCasePipe,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  afterRenderEffect,
  booleanAttribute,
  computed,
  debounced,
  effect,
  forwardRef,
  inject,
  input,
  linkedSignal,
  model,
  numberAttribute,
  output,
  setClassMetadata,
  signal,
  untracked,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
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
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleProp,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery
} from "./chunk-E52RJLI7.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// libs/components/src/lib/status-pill.component.ts
var _c0 = ["*"];
function StatusPillComponent_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " check_circle ");
  }
}
function StatusPillComponent_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " cancel ");
  }
}
function StatusPillComponent_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " block ");
  }
}
function StatusPillComponent_Case_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " info ");
  }
}
function StatusPillComponent_Case_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " gavel ");
  }
}
function StatusPillComponent_Case_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " warning ");
  }
}
var StatusPillComponent = class _StatusPillComponent {
  constructor() {
    this.status = input(
      void 0,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function StatusPillComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _StatusPillComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StatusPillComponent, selectors: [["status-pill"]], inputs: { status: [1, "status"] }, ngContentSelectors: _c0, decls: 11, vars: 29, consts: [[1, "border-base-200", "bg-opacity-30", "flex", "items-center", "space-x-2", "rounded-full", "border", "px-2", "py-1", "text-base", "font-medium", "text-black"], [1, "flex", "h-5", "w-5", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"]], template: function StatusPillComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "icon", 2);
        \u0275\u0275conditionalCreate(3, StatusPillComponent_Case_3_Template, 1, 0)(4, StatusPillComponent_Case_4_Template, 1, 0)(5, StatusPillComponent_Case_5_Template, 1, 0)(6, StatusPillComponent_Case_6_Template, 1, 0)(7, StatusPillComponent_Case_7_Template, 1, 0)(8, StatusPillComponent_Case_8_Template, 1, 0);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "div");
        \u0275\u0275projection(10);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        let tmp_13_0;
        \u0275\u0275classProp("bg-success-light", ctx.status() === "success")("bg-warning-light", ctx.status() === "warning")("bg-approval-light", ctx.status() === "approval")("bg-error-light", ctx.status() === "error")("bg-info-light", ctx.status() === "info")("bg-base-200", ctx.status() === "neutral");
        \u0275\u0275advance();
        \u0275\u0275classProp("text-success", ctx.status() === "success")("text-warning", ctx.status() === "warning")("text-approval", ctx.status() === "approval")("text-error", ctx.status() === "error")("text-info", ctx.status() === "info")("text-base-content", ctx.status() === "neutral")("opacity-40", ctx.status() === "neutral");
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_13_0 = ctx.status()) === "success" ? 3 : tmp_13_0 === "error" ? 4 : tmp_13_0 === "neutral" ? 5 : tmp_13_0 === "info" ? 6 : tmp_13_0 === "approval" ? 7 : 8);
        \u0275\u0275advance(6);
        \u0275\u0275classProp("opacity-40", ctx.status() === "neutral");
      }
    }, dependencies: [IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StatusPillComponent, [{
    type: Component,
    args: [{ selector: "status-pill", template: `
        <div
            class="border-base-200 bg-opacity-30 flex items-center space-x-2 rounded-full border px-2 py-1 text-base font-medium text-black"
            [class.bg-success-light]="status() === 'success'"
            [class.bg-warning-light]="status() === 'warning'"
            [class.bg-approval-light]="status() === 'approval'"
            [class.bg-error-light]="status() === 'error'"
            [class.bg-info-light]="status() === 'info'"
            [class.bg-base-200]="status() === 'neutral'"
        >
            <div
                class="flex h-5 w-5 items-center justify-center rounded-full"
                [class.text-success]="status() === 'success'"
                [class.text-warning]="status() === 'warning'"
                [class.text-approval]="status() === 'approval'"
                [class.text-error]="status() === 'error'"
                [class.text-info]="status() === 'info'"
                [class.text-base-content]="status() === 'neutral'"
                [class.opacity-40]="status() === 'neutral'"
            >
                <icon class="text-2xl">
                    @switch (status()) {
                        @case ('success') {
                            check_circle
                        }
                        @case ('error') {
                            cancel
                        }
                        @case ('neutral') {
                            block
                        }
                        @case ('info') {
                            info
                        }
                        @case ('approval') {
                            gavel
                        }
                        @default {
                            warning
                        }
                    }
                </icon>
            </div>
            <div [class.opacity-40]="status() === 'neutral'">
                <ng-content></ng-content>
            </div>
        </div>
    `, imports: [IconComponent] }]
  }], null, { status: [{ type: Input, args: [{ isSignal: true, alias: "status", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StatusPillComponent, { className: "StatusPillComponent", filePath: "libs/components/src/lib/status-pill.component.ts", lineNumber: 65 });
})();

// libs/components/src/lib/map-locate-modal.component.ts
var _c02 = () => ({ disable_pan: true, disable_zoom: true });
function MapLocateModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7)(1, "interactive-map", 8);
    \u0275\u0275element(2, "mat-spinner", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("src", ctx_r0.level().map_id)("focus", ctx_r0.item().map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(5, _c02));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.level().display_name || ctx_r0.level().name, " ");
  }
}
var MapLocateModalComponent = class _MapLocateModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this.event = output();
    this.item = signal(
      this._data.item,
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.style_map = signal(
      {},
      ...ngDevMode ? [{ debugName: "style_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => this.item().level || this._org.levelWithID(this.item().zones || []),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    console.log("Date:", this._data);
    if (!this.item().level?.id) {
      this.item.update((item) => {
        delete item.level;
        return item;
      });
    }
  }
  ngOnInit() {
    this.timeout("init", () => {
      this.processFeature();
      this.processStyles();
    }, 1e3);
  }
  processStyles() {
    const styles = {};
    if (this.item()?.map_id) {
      styles[`#zones`] = { display: "none" };
      styles[`#Zones`] = { display: "none" };
    }
    this.style_map.set(styles);
  }
  /** Point on map to focus on */
  processFeature() {
    const item = this.item();
    if (!item)
      return null;
    const focus = {
      location: item.map_id,
      track_id: `focus_item`,
      content: MapPinComponent,
      data: {
        name: item.name
      },
      z_index: 99,
      zoom: 100
    };
    this.features.set([focus]);
  }
  static {
    this.\u0275fac = function MapLocateModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapLocateModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapLocateModalComponent, selectors: [["map-locate-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 12, vars: 2, consts: [[1, "h-[calc(100vh-4rem)]", "w-screen", "sm:h-auto", "sm:w-auto"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "space-x-2", "rounded", "border-none", "p-2"], [1, "text-2xl"], [1, "text-xl", "font-medium"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "px-2", "pb-2"], ["body", "", 1, "border-base-300", "relative", "h-[65vh]", "w-full", "overflow-hidden", "rounded-lg", "border", "sm:max-h-[65vh]"], [1, "pointer-events-none", 3, "src", "focus", "features", "options"], ["diameter", "64"], [1, "border-base-300", "bg-base-200", "absolute", "top-2", "right-2", "rounded-xl", "border", "px-4", "py-2", "font-medium"]], template: function MapLocateModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "icon", 2);
        \u0275\u0275text(3, "place");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "h2", 3);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275element(6, "div", 4);
        \u0275\u0275elementStart(7, "button", 5)(8, "icon");
        \u0275\u0275text(9, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(10, "div", 6);
        \u0275\u0275conditionalCreate(11, MapLocateModalComponent_Conditional_11_Template, 5, 6, "div", 7);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", ctx.item().display_name || ctx.item().name, " ");
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.level() ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      InteractiveMapComponent
    ], styles: ["\n[body][_ngcontent-%COMP%] {\n  min-width: 80vw !important;\n}\n[_nghost-%COMP%] {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=map-locate-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapLocateModalComponent, [{
    type: Component,
    args: [{ selector: "map-locate-modal", template: `
        <div class="h-[calc(100vh-4rem)] w-screen sm:h-auto sm:w-auto">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center space-x-2 rounded border-none p-2"
            >
                <icon class="text-2xl">place</icon>
                <h2 class="text-xl font-medium">
                    {{ item().display_name || item().name }}
                </h2>
                <div class="flex-1"></div>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <div class="px-2 pb-2">
                @if (level()) {
                    <div
                        body
                        class="border-base-300 relative h-[65vh] w-full overflow-hidden rounded-lg border sm:max-h-[65vh]"
                    >
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level().map_id"
                            [focus]="item().map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        >
                            <mat-spinner diameter="64"></mat-spinner
                        ></interactive-map>
                        <div
                            class="border-base-300 bg-base-200 absolute top-2 right-2 rounded-xl border px-4 py-2 font-medium"
                        >
                            {{ level().display_name || level().name }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      IconComponent,
      InteractiveMapComponent
    ], styles: ["/* angular:styles/component:css;2baa1fda6ea3b96c7a4270190aaa6f907bbb8cb2cac1deb4c0fa4faa4357c97c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-locate-modal.component.ts */\n[body] {\n  min-width: 80vw !important;\n}\n:host {\n  display: block;\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=map-locate-modal.component.css.map */\n"] }]
  }], () => [], { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapLocateModalComponent, { className: "MapLocateModalComponent", filePath: "libs/components/src/lib/map-locate-modal.component.ts", lineNumber: 96 });
})();

// node_modules/@angular/material/fesm2022/slider.mjs
var _c03 = ["knob"];
var _c1 = ["valueIndicatorContainer"];
function MatSliderVisualThumb_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2, 1)(2, "div", 5)(3, "span", 6);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.valueIndicatorText);
  }
}
var _c2 = ["trackActive"];
var _c3 = ["*"];
function MatSlider_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div");
  }
  if (rf & 2) {
    const tickMark_r1 = ctx.$implicit;
    const \u0275$index_14_r2 = ctx.$index;
    const ctx_r2 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(tickMark_r1 === 0 ? "mdc-slider__tick-mark--active" : "mdc-slider__tick-mark--inactive");
    \u0275\u0275styleProp("transform", ctx_r2._calcTickMarkTransform(\u0275$index_14_r2));
  }
}
function MatSlider_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, MatSlider_Conditional_6_Conditional_2_For_1_Template, 1, 4, "div", 8, \u0275\u0275repeaterTrackByIndex);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275repeater(ctx_r2._tickMarks);
  }
}
function MatSlider_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6, 1);
    \u0275\u0275conditionalCreate(2, MatSlider_Conditional_6_Conditional_2_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2._cachedWidth ? 2 : -1);
  }
}
function MatSlider_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-slider-visual-thumb", 7);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275property("discrete", ctx_r2.discrete)("thumbPosition", 1)("valueIndicatorText", ctx_r2.startValueIndicatorText);
  }
}
var _MatThumb;
(function(_MatThumb2) {
  _MatThumb2[_MatThumb2["START"] = 1] = "START";
  _MatThumb2[_MatThumb2["END"] = 2] = "END";
})(_MatThumb || (_MatThumb = {}));
var _MatTickMark;
(function(_MatTickMark2) {
  _MatTickMark2[_MatTickMark2["ACTIVE"] = 0] = "ACTIVE";
  _MatTickMark2[_MatTickMark2["INACTIVE"] = 1] = "INACTIVE";
})(_MatTickMark || (_MatTickMark = {}));
var MAT_SLIDER = new InjectionToken("_MatSlider");
var MAT_SLIDER_THUMB = new InjectionToken("_MatSliderThumb");
var MAT_SLIDER_RANGE_THUMB = new InjectionToken("_MatSliderRangeThumb");
var MAT_SLIDER_VISUAL_THUMB = new InjectionToken("_MatSliderVisualThumb");
var MatSliderVisualThumb = class _MatSliderVisualThumb {
  _cdr = inject(ChangeDetectorRef);
  _ngZone = inject(NgZone);
  _slider = inject(MAT_SLIDER);
  _renderer = inject(Renderer2);
  _listenerCleanups;
  discrete = false;
  thumbPosition;
  valueIndicatorText;
  _ripple;
  _knob;
  _valueIndicatorContainer;
  _sliderInput;
  _sliderInputEl;
  _hoverRippleRef;
  _focusRippleRef;
  _activeRippleRef;
  _isHovered = false;
  _isActive = false;
  _isValueIndicatorVisible = false;
  _hostElement = inject(ElementRef).nativeElement;
  _platform = inject(Platform);
  ngAfterViewInit() {
    const sliderInput = this._slider._getInput(this.thumbPosition);
    if (!sliderInput) {
      return;
    }
    this._ripple.radius = 24;
    this._sliderInput = sliderInput;
    this._sliderInputEl = this._sliderInput._hostElement;
    this._ngZone.runOutsideAngular(() => {
      const input2 = this._sliderInputEl;
      const renderer = this._renderer;
      this._listenerCleanups = [renderer.listen(input2, "pointermove", this._onPointerMove), renderer.listen(input2, "pointerdown", this._onDragStart), renderer.listen(input2, "pointerup", this._onDragEnd), renderer.listen(input2, "pointerleave", this._onMouseLeave), renderer.listen(input2, "focus", this._onFocus), renderer.listen(input2, "blur", this._onBlur)];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups?.forEach((cleanup) => cleanup());
  }
  _onPointerMove = (event) => {
    if (this._sliderInput._isFocused) {
      return;
    }
    const rect = this._hostElement.getBoundingClientRect();
    const isHovered = this._slider._isCursorOnSliderThumb(event, rect);
    this._isHovered = isHovered;
    if (isHovered) {
      this._showHoverRipple();
    } else {
      this._hideRipple(this._hoverRippleRef);
    }
  };
  _onMouseLeave = () => {
    this._isHovered = false;
    this._hideRipple(this._hoverRippleRef);
  };
  _onFocus = () => {
    this._hideRipple(this._hoverRippleRef);
    this._showFocusRipple();
    this._hostElement.classList.add("mdc-slider__thumb--focused");
  };
  _onBlur = () => {
    if (!this._isActive) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._isHovered) {
      this._showHoverRipple();
    }
    this._hostElement.classList.remove("mdc-slider__thumb--focused");
  };
  _onDragStart = (event) => {
    if (event.button !== 0) {
      return;
    }
    this._isActive = true;
    this._showActiveRipple();
  };
  _onDragEnd = () => {
    this._isActive = false;
    this._hideRipple(this._activeRippleRef);
    if (!this._sliderInput._isFocused) {
      this._hideRipple(this._focusRippleRef);
    }
    if (this._platform.SAFARI) {
      this._showHoverRipple();
    }
  };
  _showHoverRipple() {
    if (!this._isShowingRipple(this._hoverRippleRef)) {
      this._hoverRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      });
      this._hoverRippleRef?.element.classList.add("mat-mdc-slider-hover-ripple");
    }
  }
  _showFocusRipple() {
    if (!this._isShowingRipple(this._focusRippleRef)) {
      this._focusRippleRef = this._showRipple({
        enterDuration: 0,
        exitDuration: 0
      }, true);
      this._focusRippleRef?.element.classList.add("mat-mdc-slider-focus-ripple");
    }
  }
  _showActiveRipple() {
    if (!this._isShowingRipple(this._activeRippleRef)) {
      this._activeRippleRef = this._showRipple({
        enterDuration: 225,
        exitDuration: 400
      });
      this._activeRippleRef?.element.classList.add("mat-mdc-slider-active-ripple");
    }
  }
  _isShowingRipple(rippleRef) {
    return rippleRef?.state === RippleState.FADING_IN || rippleRef?.state === RippleState.VISIBLE;
  }
  _showRipple(animation, ignoreGlobalRippleConfig) {
    if (this._slider.disabled) {
      return;
    }
    this._showValueIndicator();
    if (this._slider._isRange) {
      const sibling = this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
      sibling._showValueIndicator();
    }
    if (this._slider._globalRippleOptions?.disabled && !ignoreGlobalRippleConfig) {
      return;
    }
    return this._ripple.launch({
      animation: this._slider._noopAnimations ? {
        enterDuration: 0,
        exitDuration: 0
      } : animation,
      centered: true,
      persistent: true
    });
  }
  _hideRipple(rippleRef) {
    rippleRef?.fadeOut();
    if (this._isShowingAnyRipple()) {
      return;
    }
    if (!this._slider._isRange) {
      this._hideValueIndicator();
    }
    const sibling = this._getSibling();
    if (!sibling._isShowingAnyRipple()) {
      this._hideValueIndicator();
      sibling._hideValueIndicator();
    }
  }
  _showValueIndicator() {
    this._hostElement.classList.add("mdc-slider__thumb--with-indicator");
  }
  _hideValueIndicator() {
    this._hostElement.classList.remove("mdc-slider__thumb--with-indicator");
  }
  _getSibling() {
    return this._slider._getThumb(this.thumbPosition === _MatThumb.START ? _MatThumb.END : _MatThumb.START);
  }
  _getValueIndicatorContainer() {
    return this._valueIndicatorContainer?.nativeElement;
  }
  _getKnob() {
    return this._knob.nativeElement;
  }
  _isShowingAnyRipple() {
    return this._isShowingRipple(this._hoverRippleRef) || this._isShowingRipple(this._focusRippleRef) || this._isShowingRipple(this._activeRippleRef);
  }
  static \u0275fac = function MatSliderVisualThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderVisualThumb)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSliderVisualThumb,
    selectors: [["mat-slider-visual-thumb"]],
    viewQuery: function MatSliderVisualThumb_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(MatRipple, 5)(_c03, 5)(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._ripple = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._knob = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._valueIndicatorContainer = _t.first);
      }
    },
    hostAttrs: [1, "mdc-slider__thumb", "mat-mdc-slider-visual-thumb"],
    inputs: {
      discrete: "discrete",
      thumbPosition: "thumbPosition",
      valueIndicatorText: "valueIndicatorText"
    },
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER_VISUAL_THUMB,
      useExisting: _MatSliderVisualThumb
    }])],
    decls: 4,
    vars: 2,
    consts: [["knob", ""], ["valueIndicatorContainer", ""], [1, "mdc-slider__value-indicator-container"], [1, "mdc-slider__thumb-knob"], ["matRipple", "", 1, "mat-focus-indicator", 3, "matRippleDisabled"], [1, "mdc-slider__value-indicator"], [1, "mdc-slider__value-indicator-text"]],
    template: function MatSliderVisualThumb_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MatSliderVisualThumb_Conditional_0_Template, 5, 1, "div", 2);
        \u0275\u0275element(1, "div", 3, 0)(3, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.discrete ? 0 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("matRippleDisabled", true);
      }
    },
    dependencies: [MatRipple],
    styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderVisualThumb, [{
    type: Component,
    args: [{
      selector: "mat-slider-visual-thumb",
      host: {
        "class": "mdc-slider__thumb mat-mdc-slider-visual-thumb"
      },
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER_VISUAL_THUMB,
        useExisting: MatSliderVisualThumb
      }],
      imports: [MatRipple],
      template: '@if (discrete) {\n  <div class="mdc-slider__value-indicator-container" #valueIndicatorContainer>\n    <div class="mdc-slider__value-indicator">\n      <span class="mdc-slider__value-indicator-text">{{valueIndicatorText}}</span>\n    </div>\n  </div>\n}\n<div class="mdc-slider__thumb-knob" #knob></div>\n<div matRipple class="mat-focus-indicator" [matRippleDisabled]="true"></div>\n',
      styles: [".mat-mdc-slider-visual-thumb .mat-ripple {\n  height: 100%;\n  width: 100%;\n}\n\n.mat-mdc-slider .mdc-slider__tick-marks {\n  justify-content: start;\n}\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--active,\n.mat-mdc-slider .mdc-slider__tick-marks .mdc-slider__tick-mark--inactive {\n  position: absolute;\n  left: 2px;\n}\n"]
    }]
  }], null, {
    discrete: [{
      type: Input
    }],
    thumbPosition: [{
      type: Input
    }],
    valueIndicatorText: [{
      type: Input
    }],
    _ripple: [{
      type: ViewChild,
      args: [MatRipple]
    }],
    _knob: [{
      type: ViewChild,
      args: ["knob"]
    }],
    _valueIndicatorContainer: [{
      type: ViewChild,
      args: ["valueIndicatorContainer"]
    }]
  });
})();
var MatSlider = class _MatSlider {
  _ngZone = inject(NgZone);
  _cdr = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _globalRippleOptions = inject(MAT_RIPPLE_GLOBAL_OPTIONS, {
    optional: true
  });
  _trackActive;
  _thumbs;
  _input;
  _inputs;
  get disabled() {
    return this._disabled;
  }
  set disabled(v) {
    this._disabled = v;
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    if (endInput) {
      endInput.disabled = this._disabled;
    }
    if (startInput) {
      startInput.disabled = this._disabled;
    }
  }
  _disabled = false;
  get discrete() {
    return this._discrete;
  }
  set discrete(v) {
    this._discrete = v;
    this._updateValueIndicatorUIs();
  }
  _discrete = false;
  get showTickMarks() {
    return this._showTickMarks;
  }
  set showTickMarks(value) {
    this._showTickMarks = value;
    if (this._hasViewInitialized) {
      this._updateTickMarkUI();
      this._updateTickMarkTrackUI();
    }
  }
  _showTickMarks = false;
  get min() {
    return this._min;
  }
  set min(v) {
    const min = v === void 0 || v === null || isNaN(v) ? this._min : v;
    if (this._min !== min) {
      this._updateMin(min);
    }
  }
  _min = 0;
  color;
  disableRipple = false;
  _updateMin(min) {
    const prevMin = this._min;
    this._min = min;
    this._isRange ? this._updateMinRange({
      old: prevMin,
      new: min
    }) : this._updateMinNonRange(min);
    this._onMinMaxOrStepChange();
  }
  _updateMinRange(min) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    startInput.min = min.new;
    endInput.min = Math.max(min.new, startInput.value);
    startInput.max = Math.min(endInput.max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    min.new < min.old ? this._onTranslateXChangeBySideEffect(endInput, startInput) : this._onTranslateXChangeBySideEffect(startInput, endInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMinNonRange(min) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.min = min;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get max() {
    return this._max;
  }
  set max(v) {
    const max = v === void 0 || v === null || isNaN(v) ? this._max : v;
    if (this._max !== max) {
      this._updateMax(max);
    }
  }
  _max = 100;
  _updateMax(max) {
    const prevMax = this._max;
    this._max = max;
    this._isRange ? this._updateMaxRange({
      old: prevMax,
      new: max
    }) : this._updateMaxNonRange(max);
    this._onMinMaxOrStepChange();
  }
  _updateMaxRange(max) {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    endInput.max = max.new;
    startInput.max = Math.min(max.new, endInput.value);
    endInput.min = startInput.value;
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    max.new > max.old ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateMaxNonRange(max) {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.max = max;
      input2._updateThumbUIByValue();
      this._updateTrackUI(input2);
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  get step() {
    return this._step;
  }
  set step(v) {
    const step = isNaN(v) ? this._step : v;
    if (this._step !== step) {
      this._updateStep(step);
    }
  }
  _step = 1;
  _updateStep(step) {
    this._step = step;
    this._isRange ? this._updateStepRange() : this._updateStepNonRange();
    this._onMinMaxOrStepChange();
  }
  _updateStepRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    const oldEndValue = endInput.value;
    const oldStartValue = startInput.value;
    const prevStartValue = startInput.value;
    endInput.min = this._min;
    startInput.max = this._max;
    endInput.step = this._step;
    startInput.step = this._step;
    if (this._platform.SAFARI) {
      endInput.value = endInput.value;
      startInput.value = startInput.value;
    }
    endInput.min = Math.max(this._min, startInput.value);
    startInput.max = Math.min(this._max, endInput.value);
    startInput._updateWidthInactive();
    endInput._updateWidthInactive();
    endInput.value < prevStartValue ? this._onTranslateXChangeBySideEffect(startInput, endInput) : this._onTranslateXChangeBySideEffect(endInput, startInput);
    if (oldEndValue !== endInput.value) {
      this._onValueChange(endInput);
    }
    if (oldStartValue !== startInput.value) {
      this._onValueChange(startInput);
    }
  }
  _updateStepNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    if (input2) {
      const oldValue = input2.value;
      input2.step = this._step;
      if (this._platform.SAFARI) {
        input2.value = input2.value;
      }
      input2._updateThumbUIByValue();
      if (oldValue !== input2.value) {
        this._onValueChange(input2);
      }
    }
  }
  displayWith = (value) => `${value}`;
  _tickMarks;
  _noopAnimations = _animationsDisabled();
  _resizeObserver = null;
  _cachedWidth;
  _cachedLeft;
  _rippleRadius = 24;
  startValueIndicatorText = "";
  endValueIndicatorText = "";
  _endThumbTransform;
  _startThumbTransform;
  _isRange = false;
  _isRtl = computed(() => this._dir?.valueSignal() === "rtl", ...ngDevMode ? [{
    debugName: "_isRtl"
  }] : []);
  _hasViewInitialized = false;
  _tickMarkTrackWidth = 0;
  _hasAnimation = false;
  _resizeTimer = null;
  _platform = inject(Platform);
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    let prevIsRtl = this._isRtl();
    afterRenderEffect(() => {
      const isRtl = this._isRtl();
      if (isRtl !== prevIsRtl) {
        prevIsRtl = isRtl;
        this._isRange ? this._onDirChangeRange() : this._onDirChangeNonRange();
        this._updateTickMarkUI();
      }
    });
  }
  _knobRadius = 8;
  _inputPadding;
  ngAfterViewInit() {
    if (this._platform.isBrowser) {
      this._updateDimensions();
    }
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    this._isRange = !!eInput && !!sInput;
    this._cdr.detectChanges();
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      _validateInputs(this._isRange, this._getInput(_MatThumb.END), this._getInput(_MatThumb.START));
    }
    const thumb = this._getThumb(_MatThumb.END);
    this._rippleRadius = thumb._ripple.radius;
    this._inputPadding = this._rippleRadius - this._knobRadius;
    this._isRange ? this._initUIRange(eInput, sInput) : this._initUINonRange(eInput);
    this._updateTrackUI(eInput);
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._observeHostResize();
    this._cdr.detectChanges();
  }
  _initUINonRange(eInput) {
    eInput.initProps();
    eInput.initUI();
    this._updateValueIndicatorUI(eInput);
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
  }
  _initUIRange(eInput, sInput) {
    eInput.initProps();
    eInput.initUI();
    sInput.initProps();
    sInput.initUI();
    eInput._updateMinMax();
    sInput._updateMinMax();
    eInput._updateStaticStyles();
    sInput._updateStaticStyles();
    this._updateValueIndicatorUIs();
    this._hasViewInitialized = true;
    eInput._updateThumbUIByValue();
    sInput._updateThumbUIByValue();
  }
  ngOnDestroy() {
    this._resizeObserver?.disconnect();
    this._resizeObserver = null;
  }
  _onDirChangeRange() {
    const endInput = this._getInput(_MatThumb.END);
    const startInput = this._getInput(_MatThumb.START);
    endInput._setIsLeftThumb();
    startInput._setIsLeftThumb();
    endInput.translateX = endInput._calcTranslateXByValue();
    startInput.translateX = startInput._calcTranslateXByValue();
    endInput._updateStaticStyles();
    startInput._updateStaticStyles();
    endInput._updateWidthInactive();
    startInput._updateWidthInactive();
    endInput._updateThumbUIByValue();
    startInput._updateThumbUIByValue();
  }
  _onDirChangeNonRange() {
    const input2 = this._getInput(_MatThumb.END);
    input2._updateThumbUIByValue();
  }
  _observeHostResize() {
    if (typeof ResizeObserver === "undefined" || !ResizeObserver) {
      return;
    }
    this._ngZone.runOutsideAngular(() => {
      this._resizeObserver = new ResizeObserver(() => {
        if (this._isActive()) {
          return;
        }
        if (this._resizeTimer) {
          clearTimeout(this._resizeTimer);
        }
        this._onResize();
      });
      this._resizeObserver.observe(this._elementRef.nativeElement);
    });
  }
  _isActive() {
    return this._getThumb(_MatThumb.START)._isActive || this._getThumb(_MatThumb.END)._isActive;
  }
  _getValue(thumbPosition = _MatThumb.END) {
    const input2 = this._getInput(thumbPosition);
    if (!input2) {
      return this.min;
    }
    return input2.value;
  }
  _skipUpdate() {
    return !!(this._getInput(_MatThumb.START)?._skipUIUpdate || this._getInput(_MatThumb.END)?._skipUIUpdate);
  }
  _updateDimensions() {
    this._cachedWidth = this._elementRef.nativeElement.offsetWidth;
    this._cachedLeft = this._elementRef.nativeElement.getBoundingClientRect().left;
  }
  _setTrackActiveStyles(styles) {
    const trackStyle = this._trackActive.nativeElement.style;
    trackStyle.left = styles.left;
    trackStyle.right = styles.right;
    trackStyle.transformOrigin = styles.transformOrigin;
    trackStyle.transform = styles.transform;
  }
  _calcTickMarkTransform(index) {
    const offset = index * (this._tickMarkTrackWidth / (this._tickMarks.length - 1));
    const translateX = this._isRtl() ? this._cachedWidth - 6 - offset : offset;
    return `translateX(${translateX}px)`;
  }
  _onTranslateXChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateThumbUI(source);
    this._updateTrackUI(source);
    this._updateOverlappingThumbUI(source);
  }
  _onTranslateXChangeBySideEffect(input1, input2) {
    if (!this._hasViewInitialized) {
      return;
    }
    input1._updateThumbUIByValue();
    input2._updateThumbUIByValue();
  }
  _onValueChange(source) {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateValueIndicatorUI(source);
    this._updateTickMarkUI();
    this._cdr.detectChanges();
  }
  _onMinMaxOrStepChange() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.markForCheck();
  }
  _onResize() {
    if (!this._hasViewInitialized) {
      return;
    }
    this._updateDimensions();
    if (this._isRange) {
      const eInput = this._getInput(_MatThumb.END);
      const sInput = this._getInput(_MatThumb.START);
      eInput._updateThumbUIByValue();
      sInput._updateThumbUIByValue();
      eInput._updateStaticStyles();
      sInput._updateStaticStyles();
      eInput._updateMinMax();
      sInput._updateMinMax();
      eInput._updateWidthInactive();
      sInput._updateWidthInactive();
    } else {
      const eInput = this._getInput(_MatThumb.END);
      if (eInput) {
        eInput._updateThumbUIByValue();
      }
    }
    this._updateTickMarkUI();
    this._updateTickMarkTrackUI();
    this._cdr.detectChanges();
  }
  _thumbsOverlap = false;
  _areThumbsOverlapping() {
    const startInput = this._getInput(_MatThumb.START);
    const endInput = this._getInput(_MatThumb.END);
    if (!startInput || !endInput) {
      return false;
    }
    return endInput.translateX - startInput.translateX < 20;
  }
  _updateOverlappingThumbClassNames(source) {
    const sibling = source.getSibling();
    const sourceThumb = this._getThumb(source.thumbPosition);
    const siblingThumb = this._getThumb(sibling.thumbPosition);
    siblingThumb._hostElement.classList.remove("mdc-slider__thumb--top");
    sourceThumb._hostElement.classList.toggle("mdc-slider__thumb--top", this._thumbsOverlap);
  }
  _updateOverlappingThumbUI(source) {
    if (!this._isRange || this._skipUpdate()) {
      return;
    }
    if (this._thumbsOverlap !== this._areThumbsOverlapping()) {
      this._thumbsOverlap = !this._thumbsOverlap;
      this._updateOverlappingThumbClassNames(source);
    }
  }
  _updateThumbUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const thumb = this._getThumb(source.thumbPosition === _MatThumb.END ? _MatThumb.END : _MatThumb.START);
    thumb._hostElement.style.transform = `translateX(${source.translateX}px)`;
  }
  _updateValueIndicatorUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    const valuetext = this.displayWith(source.value);
    this._hasViewInitialized ? source._valuetext.set(valuetext) : source._hostElement.setAttribute("aria-valuetext", valuetext);
    if (this.discrete) {
      source.thumbPosition === _MatThumb.START ? this.startValueIndicatorText = valuetext : this.endValueIndicatorText = valuetext;
      const visualThumb = this._getThumb(source.thumbPosition);
      valuetext.length < 3 ? visualThumb._hostElement.classList.add("mdc-slider__thumb--short-value") : visualThumb._hostElement.classList.remove("mdc-slider__thumb--short-value");
    }
  }
  _updateValueIndicatorUIs() {
    const eInput = this._getInput(_MatThumb.END);
    const sInput = this._getInput(_MatThumb.START);
    if (eInput) {
      this._updateValueIndicatorUI(eInput);
    }
    if (sInput) {
      this._updateValueIndicatorUI(sInput);
    }
  }
  _updateTickMarkTrackUI() {
    if (!this.showTickMarks || this._skipUpdate()) {
      return;
    }
    const step = this._step && this._step > 0 ? this._step : 1;
    const maxValue = Math.floor(this.max / step) * step;
    const percentage = (maxValue - this.min) / (this.max - this.min);
    this._tickMarkTrackWidth = (this._cachedWidth - 6) * percentage;
  }
  _updateTrackUI(source) {
    if (this._skipUpdate()) {
      return;
    }
    this._isRange ? this._updateTrackUIRange(source) : this._updateTrackUINonRange(source);
  }
  _updateTrackUIRange(source) {
    const sibling = source.getSibling();
    if (!sibling || !this._cachedWidth) {
      return;
    }
    const activePercentage = Math.abs(sibling.translateX - source.translateX) / this._cachedWidth;
    if (source._isLeftThumb && this._cachedWidth) {
      this._setTrackActiveStyles({
        left: "auto",
        right: `${this._cachedWidth - sibling.translateX}px`,
        transformOrigin: "right",
        transform: `scaleX(${activePercentage})`
      });
    } else {
      this._setTrackActiveStyles({
        left: `${sibling.translateX}px`,
        right: "auto",
        transformOrigin: "left",
        transform: `scaleX(${activePercentage})`
      });
    }
  }
  _updateTrackUINonRange(source) {
    this._isRtl() ? this._setTrackActiveStyles({
      left: "auto",
      right: "0px",
      transformOrigin: "right",
      transform: `scaleX(${1 - source.fillPercentage})`
    }) : this._setTrackActiveStyles({
      left: "0px",
      right: "auto",
      transformOrigin: "left",
      transform: `scaleX(${source.fillPercentage})`
    });
  }
  _updateTickMarkUI() {
    if (!this.showTickMarks || this.step === void 0 || this.min === void 0 || this.max === void 0) {
      return;
    }
    const step = this.step > 0 ? this.step : 1;
    this._isRange ? this._updateTickMarkUIRange(step) : this._updateTickMarkUINonRange(step);
  }
  _updateTickMarkUINonRange(step) {
    const value = this._getValue();
    let numActive = Math.max(Math.round((value - this.min) / step), 0) + 1;
    let numInactive = Math.max(Math.round((this.max - value) / step), 0) - 1;
    this._isRtl() ? numActive++ : numInactive++;
    this._tickMarks = Array(numActive).fill(_MatTickMark.ACTIVE).concat(Array(numInactive).fill(_MatTickMark.INACTIVE));
  }
  _updateTickMarkUIRange(step) {
    const endValue = this._getValue();
    const startValue = this._getValue(_MatThumb.START);
    const numInactiveBeforeStartThumb = Math.max(Math.round((startValue - this.min) / step), 0);
    const numActive = Math.max(Math.round((endValue - startValue) / step) + 1, 0);
    const numInactiveAfterEndThumb = Math.max(Math.round((this.max - endValue) / step), 0);
    this._tickMarks = Array(numInactiveBeforeStartThumb).fill(_MatTickMark.INACTIVE).concat(Array(numActive).fill(_MatTickMark.ACTIVE), Array(numInactiveAfterEndThumb).fill(_MatTickMark.INACTIVE));
  }
  _getInput(thumbPosition) {
    if (thumbPosition === _MatThumb.END && this._input) {
      return this._input;
    }
    if (this._inputs?.length) {
      return thumbPosition === _MatThumb.START ? this._inputs.first : this._inputs.last;
    }
    return;
  }
  _getThumb(thumbPosition) {
    return thumbPosition === _MatThumb.END ? this._thumbs?.last : this._thumbs?.first;
  }
  _setTransition(withAnimation) {
    this._hasAnimation = !this._platform.IOS && withAnimation && !this._noopAnimations;
    this._elementRef.nativeElement.classList.toggle("mat-mdc-slider-with-animation", this._hasAnimation);
  }
  _isCursorOnSliderThumb(event, rect) {
    const radius = rect.width / 2;
    const centerX = rect.x + radius;
    const centerY = rect.y + radius;
    const dx = event.clientX - centerX;
    const dy = event.clientY - centerY;
    return Math.pow(dx, 2) + Math.pow(dy, 2) < Math.pow(radius, 2);
  }
  static \u0275fac = function MatSlider_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlider)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlider,
    selectors: [["mat-slider"]],
    contentQueries: function MatSlider_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MAT_SLIDER_THUMB, 5)(dirIndex, MAT_SLIDER_RANGE_THUMB, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._input = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._inputs = _t);
      }
    },
    viewQuery: function MatSlider_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c2, 5)(MAT_SLIDER_VISUAL_THUMB, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._trackActive = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._thumbs = _t);
      }
    },
    hostAttrs: [1, "mat-mdc-slider", "mdc-slider"],
    hostVars: 12,
    hostBindings: function MatSlider_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275classMap("mat-" + (ctx.color || "primary"));
        \u0275\u0275classProp("mdc-slider--range", ctx._isRange)("mdc-slider--disabled", ctx.disabled)("mdc-slider--discrete", ctx.discrete)("mdc-slider--tick-marks", ctx.showTickMarks)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      disabled: [2, "disabled", "disabled", booleanAttribute],
      discrete: [2, "discrete", "discrete", booleanAttribute],
      showTickMarks: [2, "showTickMarks", "showTickMarks", booleanAttribute],
      min: [2, "min", "min", numberAttribute],
      color: "color",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      max: [2, "max", "max", numberAttribute],
      step: [2, "step", "step", numberAttribute],
      displayWith: "displayWith"
    },
    exportAs: ["matSlider"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_SLIDER,
      useExisting: _MatSlider
    }])],
    ngContentSelectors: _c3,
    decls: 9,
    vars: 5,
    consts: [["trackActive", ""], ["tickMarkContainer", ""], [1, "mdc-slider__track"], [1, "mdc-slider__track--inactive"], [1, "mdc-slider__track--active"], [1, "mdc-slider__track--active_fill"], [1, "mdc-slider__tick-marks"], [3, "discrete", "thumbPosition", "valueIndicatorText"], [3, "class", "transform"]],
    template: function MatSlider_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275projection(0);
        \u0275\u0275elementStart(1, "div", 2);
        \u0275\u0275element(2, "div", 3);
        \u0275\u0275elementStart(3, "div", 4);
        \u0275\u0275element(4, "div", 5, 0);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, MatSlider_Conditional_6_Template, 3, 1, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, MatSlider_Conditional_7_Template, 1, 3, "mat-slider-visual-thumb", 7);
        \u0275\u0275element(8, "mat-slider-visual-thumb", 7);
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.showTickMarks ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx._isRange ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("discrete", ctx.discrete)("thumbPosition", 2)("valueIndicatorText", ctx.endValueIndicatorText);
      }
    },
    dependencies: [MatSliderVisualThumb],
    styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--%NS%mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--%NS%mat-slider-active-track-shape, var(--%NS%mat-sys-corner-full));\n  height: var(--%NS%mat-slider-active-track-height, 4px);\n  top: calc((var(--%NS%mat-slider-inactive-track-height, 4px) - var(--%NS%mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--%NS%mat-slider-active-track-color, var(--%NS%mat-sys-primary));\n  border-top-width: var(--%NS%mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--%NS%mat-slider-disabled-active-track-color, var(--%NS%mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--%NS%mat-slider-inactive-track-color, var(--%NS%mat-sys-surface-variant));\n  height: var(--%NS%mat-slider-inactive-track-height, 4px);\n  border-radius: var(--%NS%mat-slider-inactive-track-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--%NS%mat-slider-disabled-inactive-track-color, var(--%NS%mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--%NS%inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--%NS%inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--%NS%mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--%NS%mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));\n  color: var(--%NS%mat-slider-label-label-text-color, var(--%NS%mat-sys-on-primary));\n  width: var(--%NS%mat-slider-value-indicator-width, 28px);\n  height: var(--%NS%mat-slider-value-indicator-height, 28px);\n  padding: var(--%NS%mat-slider-value-indicator-padding, 0);\n  opacity: var(--%NS%mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--%NS%mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--%NS%mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--%NS%mat-slider-label-container-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--%NS%mat-slider-value-indicator-width, 28px);\n  transform: var(--%NS%mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--%NS%mat-slider-label-label-text-font, var(--%NS%mat-sys-label-medium-font));\n  font-size: var(--%NS%mat-slider-label-label-text-size, var(--%NS%mat-sys-label-medium-size));\n  font-weight: var(--%NS%mat-slider-label-label-text-weight, var(--%NS%mat-sys-label-medium-weight));\n  line-height: var(--%NS%mat-slider-label-label-text-line-height, var(--%NS%mat-sys-label-medium-line-height));\n  letter-spacing: var(--%NS%mat-slider-label-label-text-tracking, var(--%NS%mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--%NS%mat-slider-handle-width, 20px);\n  height: var(--%NS%mat-slider-handle-height, 20px);\n  border-width: calc(var(--%NS%mat-slider-handle-height, 20px) / 2) calc(var(--%NS%mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--%NS%mat-slider-handle-elevation, var(--%NS%mat-sys-level1));\n  background-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-handle-color, var(--%NS%mat-sys-primary));\n  border-radius: var(--%NS%mat-slider-handle-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-hover-handle-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));\n  border-color: var(--%NS%mat-slider-focus-handle-color, var(--%NS%mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));\n  border-color: var(--%NS%mat-slider-disabled-handle-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--%NS%mat-slider-with-overlap-handle-outline-color, var(--%NS%mat-sys-on-primary));\n  border-width: var(--%NS%mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--%NS%mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--%NS%mat-slider-with-tick-marks-container-shape, var(--%NS%mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-inactive-container-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--%NS%mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-disabled-container-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--%NS%mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--%NS%mat-slider-with-tick-marks-active-container-color, var(--%NS%mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--%NS%mat-slider-ripple-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--%NS%mat-slider-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--%NS%mat-slider-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlider, [{
    type: Component,
    args: [{
      selector: "mat-slider",
      host: {
        "class": "mat-mdc-slider mdc-slider",
        "[class]": '"mat-" + (color || "primary")',
        "[class.mdc-slider--range]": "_isRange",
        "[class.mdc-slider--disabled]": "disabled",
        "[class.mdc-slider--discrete]": "discrete",
        "[class.mdc-slider--tick-marks]": "showTickMarks",
        "[class._mat-animation-noopable]": "_noopAnimations"
      },
      exportAs: "matSlider",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: MAT_SLIDER,
        useExisting: MatSlider
      }],
      imports: [MatSliderVisualThumb],
      template: `<!-- Inputs -->
<ng-content></ng-content>

<!-- Track -->
<div class="mdc-slider__track">
  <div class="mdc-slider__track--inactive"></div>
  <div class="mdc-slider__track--active">
    <div #trackActive class="mdc-slider__track--active_fill"></div>
  </div>
  @if (showTickMarks) {
    <div class="mdc-slider__tick-marks" #tickMarkContainer>
      @if (_cachedWidth) {
        @for (tickMark of _tickMarks; track i; let i = $index) {
          <div
            [class]="tickMark === 0 ? 'mdc-slider__tick-mark--active' : 'mdc-slider__tick-mark--inactive'"
            [style.transform]="_calcTickMarkTransform(i)"></div>
        }
      }
    </div>
  }
</div>

<!-- Thumbs -->
@if (_isRange) {
  <mat-slider-visual-thumb
    [discrete]="discrete"
    [thumbPosition]="1"
    [valueIndicatorText]="startValueIndicatorText">
  </mat-slider-visual-thumb>
}

<mat-slider-visual-thumb
  [discrete]="discrete"
  [thumbPosition]="2"
  [valueIndicatorText]="endValueIndicatorText">
</mat-slider-visual-thumb>
`,
      styles: ['.mdc-slider__track {\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  width: 100%;\n  pointer-events: none;\n  height: var(--mat-slider-inactive-track-height, 4px);\n}\n\n.mdc-slider__track--active,\n.mdc-slider__track--inactive {\n  display: flex;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__track--active {\n  overflow: hidden;\n  border-radius: var(--mat-slider-active-track-shape, var(--mat-sys-corner-full));\n  height: var(--mat-slider-active-track-height, 4px);\n  top: calc((var(--mat-slider-inactive-track-height, 4px) - var(--mat-slider-active-track-height, 4px)) / 2);\n}\n\n.mdc-slider__track--active_fill {\n  border-top-style: solid;\n  box-sizing: border-box;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  transform-origin: left;\n  transition: transform 80ms ease;\n  border-color: var(--mat-slider-active-track-color, var(--mat-sys-primary));\n  border-top-width: var(--mat-slider-active-track-height, 4px);\n}\n.mdc-slider--disabled .mdc-slider__track--active_fill {\n  border-color: var(--mat-slider-disabled-active-track-color, var(--mat-sys-on-surface));\n}\n[dir=rtl] .mdc-slider__track--active_fill {\n  -webkit-transform-origin: right;\n  transform-origin: right;\n}\n\n.mdc-slider__track--inactive {\n  left: 0;\n  top: 0;\n  opacity: 0.24;\n  background-color: var(--mat-slider-inactive-track-color, var(--mat-sys-surface-variant));\n  height: var(--mat-slider-inactive-track-height, 4px);\n  border-radius: var(--mat-slider-inactive-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider--disabled .mdc-slider__track--inactive {\n  background-color: var(--mat-slider-disabled-inactive-track-color, var(--mat-sys-on-surface));\n  opacity: 0.24;\n}\n.mdc-slider__track--inactive::before {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__track--inactive::before {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-container {\n  bottom: 44px;\n  left: 50%;\n  pointer-events: none;\n  position: absolute;\n  transform: var(--mat-slider-value-indicator-container-transform, translateX(-50%) rotate(-45deg));\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator-container {\n  pointer-events: auto;\n}\n\n.mdc-slider__value-indicator {\n  display: flex;\n  align-items: center;\n  transform: scale(0);\n  transform-origin: var(--mat-slider-value-indicator-transform-origin, 0 28px);\n  transition: transform 100ms cubic-bezier(0.4, 0, 1, 1);\n  word-break: normal;\n  background-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n  color: var(--mat-slider-label-label-text-color, var(--mat-sys-on-primary));\n  width: var(--mat-slider-value-indicator-width, 28px);\n  height: var(--mat-slider-value-indicator-height, 28px);\n  padding: var(--mat-slider-value-indicator-padding, 0);\n  opacity: var(--mat-slider-value-indicator-opacity, 1);\n  border-radius: var(--mat-slider-value-indicator-border-radius, 50% 50% 50% 0);\n}\n.mdc-slider__thumb--with-indicator .mdc-slider__value-indicator {\n  transition: transform 100ms cubic-bezier(0, 0, 0.2, 1);\n  transform: scale(1);\n}\n.mdc-slider__value-indicator::before {\n  border-left: 6px solid transparent;\n  border-right: 6px solid transparent;\n  border-top: 6px solid;\n  bottom: -5px;\n  content: "";\n  height: 0;\n  left: 50%;\n  position: absolute;\n  transform: translateX(-50%);\n  width: 0;\n  display: var(--mat-slider-value-indicator-caret-display, none);\n  border-top-color: var(--mat-slider-label-container-color, var(--mat-sys-primary));\n}\n.mdc-slider__value-indicator::after {\n  position: absolute;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  border: 1px solid transparent;\n  border-radius: inherit;\n  content: "";\n  pointer-events: none;\n}\n@media (forced-colors: active) {\n  .mdc-slider__value-indicator::after {\n    border-color: CanvasText;\n  }\n}\n\n.mdc-slider__value-indicator-text {\n  text-align: center;\n  width: var(--mat-slider-value-indicator-width, 28px);\n  transform: var(--mat-slider-value-indicator-text-transform, rotate(45deg));\n  font-family: var(--mat-slider-label-label-text-font, var(--mat-sys-label-medium-font));\n  font-size: var(--mat-slider-label-label-text-size, var(--mat-sys-label-medium-size));\n  font-weight: var(--mat-slider-label-label-text-weight, var(--mat-sys-label-medium-weight));\n  line-height: var(--mat-slider-label-label-text-line-height, var(--mat-sys-label-medium-line-height));\n  letter-spacing: var(--mat-slider-label-label-text-tracking, var(--mat-sys-label-medium-tracking));\n}\n\n.mdc-slider__thumb {\n  -webkit-user-select: none;\n  user-select: none;\n  display: flex;\n  left: -24px;\n  outline: none;\n  position: absolute;\n  height: 48px;\n  width: 48px;\n  pointer-events: none;\n}\n.mdc-slider--discrete .mdc-slider__thumb {\n  transition: transform 80ms ease;\n}\n.mdc-slider--disabled .mdc-slider__thumb {\n  pointer-events: none;\n}\n\n.mdc-slider__thumb--top {\n  z-index: 1;\n}\n\n.mdc-slider__thumb-knob {\n  position: absolute;\n  box-sizing: border-box;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  border-style: solid;\n  width: var(--mat-slider-handle-width, 20px);\n  height: var(--mat-slider-handle-height, 20px);\n  border-width: calc(var(--mat-slider-handle-height, 20px) / 2) calc(var(--mat-slider-handle-width, 20px) / 2);\n  box-shadow: var(--mat-slider-handle-elevation, var(--mat-sys-level1));\n  background-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-handle-color, var(--mat-sys-primary));\n  border-radius: var(--mat-slider-handle-shape, var(--mat-sys-corner-full));\n}\n.mdc-slider__thumb:hover .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-hover-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n  border-color: var(--mat-slider-focus-handle-color, var(--mat-sys-primary));\n}\n.mdc-slider--disabled .mdc-slider__thumb-knob {\n  background-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n  border-color: var(--mat-slider-disabled-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-slider__thumb--top .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb:hover .mdc-slider__thumb-knob, .mdc-slider__thumb--top.mdc-slider__thumb--focused .mdc-slider__thumb-knob {\n  border: solid 1px #fff;\n  box-sizing: content-box;\n  border-color: var(--mat-slider-with-overlap-handle-outline-color, var(--mat-sys-on-primary));\n  border-width: var(--mat-slider-with-overlap-handle-outline-width, 1px);\n}\n\n.mdc-slider__tick-marks {\n  align-items: center;\n  box-sizing: border-box;\n  display: flex;\n  height: 100%;\n  justify-content: space-between;\n  padding: 0 1px;\n  position: absolute;\n  width: 100%;\n}\n\n.mdc-slider__tick-mark--active,\n.mdc-slider__tick-mark--inactive {\n  width: var(--mat-slider-with-tick-marks-container-size, 2px);\n  height: var(--mat-slider-with-tick-marks-container-size, 2px);\n  border-radius: var(--mat-slider-with-tick-marks-container-shape, var(--mat-sys-corner-full));\n}\n\n.mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-inactive-container-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-slider--disabled .mdc-slider__tick-mark--inactive {\n  opacity: var(--mat-slider-with-tick-marks-inactive-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-disabled-container-color, var(--mat-sys-on-surface));\n}\n\n.mdc-slider__tick-mark--active {\n  opacity: var(--mat-slider-with-tick-marks-active-container-opacity, 0.38);\n  background-color: var(--mat-slider-with-tick-marks-active-container-color, var(--mat-sys-on-primary));\n}\n\n.mdc-slider__input {\n  cursor: pointer;\n  left: 2px;\n  margin: 0;\n  height: 44px;\n  opacity: 0;\n  position: absolute;\n  top: 2px;\n  width: 44px;\n  box-sizing: content-box;\n}\n.mdc-slider__input.mat-mdc-slider-input-no-pointer-events {\n  pointer-events: none;\n}\n.mdc-slider__input.mat-slider__right-input {\n  left: auto;\n  right: 0;\n}\n\n.mat-mdc-slider {\n  display: inline-block;\n  box-sizing: border-box;\n  outline: none;\n  vertical-align: middle;\n  cursor: pointer;\n  height: 48px;\n  margin: 0 8px;\n  position: relative;\n  touch-action: pan-y;\n  width: auto;\n  min-width: 112px;\n  -webkit-tap-highlight-color: transparent;\n}\n.mat-mdc-slider.mdc-slider--disabled {\n  cursor: auto;\n  opacity: 0.38;\n}\n.mat-mdc-slider.mdc-slider--disabled .mdc-slider__input {\n  cursor: auto;\n}\n.mat-mdc-slider .mdc-slider__thumb,\n.mat-mdc-slider .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__thumb,\n.mat-mdc-slider.mdc-slider--discrete .mdc-slider__track--active_fill {\n  transition-duration: 0ms;\n}\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__thumb,\n.mat-mdc-slider.mat-mdc-slider-with-animation .mdc-slider__track--active_fill {\n  transition-duration: 80ms;\n}\n.mat-mdc-slider .mat-ripple .mat-ripple-element {\n  background-color: var(--mat-slider-ripple-color, var(--mat-sys-primary));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-hover-ripple {\n  background-color: var(--mat-slider-hover-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 5%, transparent));\n}\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-focus-ripple,\n.mat-mdc-slider .mat-ripple .mat-mdc-slider-active-ripple {\n  background-color: var(--mat-slider-focus-state-layer-color, color-mix(in srgb, var(--mat-sys-primary) 20%, transparent));\n}\n.mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__thumb, .mat-mdc-slider._mat-animation-noopable.mdc-slider--discrete .mdc-slider__track--active_fill,\n.mat-mdc-slider._mat-animation-noopable .mdc-slider__value-indicator {\n  transition: none;\n}\n.mat-mdc-slider .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n\n.mdc-slider__thumb--focused .mat-focus-indicator::before {\n  content: "";\n}\n']
    }]
  }], () => [], {
    _trackActive: [{
      type: ViewChild,
      args: ["trackActive"]
    }],
    _thumbs: [{
      type: ViewChildren,
      args: [MAT_SLIDER_VISUAL_THUMB]
    }],
    _input: [{
      type: ContentChild,
      args: [MAT_SLIDER_THUMB]
    }],
    _inputs: [{
      type: ContentChildren,
      args: [MAT_SLIDER_RANGE_THUMB, {
        descendants: false
      }]
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    discrete: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    showTickMarks: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    min: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    max: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    step: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    displayWith: [{
      type: Input
    }]
  });
})();
function _validateInputs(isRange, endInputElement, startInputElement) {
  const startValid = !isRange || startInputElement?._hostElement.hasAttribute("matSliderStartThumb");
  const endValid = endInputElement?._hostElement.hasAttribute(isRange ? "matSliderEndThumb" : "matSliderThumb");
  if (!startValid || !endValid) {
    _throwInvalidInputConfigurationError();
  }
}
function _throwInvalidInputConfigurationError() {
  throw Error(`Invalid slider thumb input configuration!

   Valid configurations are as follows:

     <mat-slider>
       <input matSliderThumb>
     </mat-slider>

     or

     <mat-slider>
       <input matSliderStartThumb>
       <input matSliderEndThumb>
     </mat-slider>
   `);
}
var MAT_SLIDER_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderThumb),
  multi: true
};
var MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatSliderRangeThumb),
  multi: true
};
var MatSliderThumb = class _MatSliderThumb {
  _ngZone = inject(NgZone);
  _elementRef = inject(ElementRef);
  _cdr = inject(ChangeDetectorRef);
  _slider = inject(MAT_SLIDER);
  _platform = inject(Platform);
  _listenerCleanups;
  get value() {
    return numberAttribute(this._hostElement.value, 0);
  }
  set value(value) {
    if (value === null) {
      value = this._getDefaultValue();
    }
    value = isNaN(value) ? 0 : value;
    const stringValue = value + "";
    if (!this._hasSetInitialValue) {
      this._initialValue = stringValue;
      return;
    }
    if (this._isActive) {
      return;
    }
    this._setValue(stringValue);
  }
  _setValue(value) {
    this._hostElement.value = value;
    this._updateThumbUIByValue();
    this._slider._onValueChange(this);
    this._cdr.detectChanges();
    this._slider._cdr.markForCheck();
  }
  valueChange = new EventEmitter();
  dragStart = new EventEmitter();
  dragEnd = new EventEmitter();
  get translateX() {
    if (this._slider.min >= this._slider.max) {
      this._translateX = this._tickMarkOffset;
      return this._translateX;
    }
    if (this._translateX === void 0) {
      this._translateX = this._calcTranslateXByValue();
    }
    return this._translateX;
  }
  set translateX(v) {
    this._translateX = v;
  }
  _translateX;
  thumbPosition = _MatThumb.END;
  get min() {
    return numberAttribute(this._hostElement.min, 0);
  }
  set min(v) {
    this._hostElement.min = v + "";
    this._cdr.detectChanges();
  }
  get max() {
    return numberAttribute(this._hostElement.max, 0);
  }
  set max(v) {
    this._hostElement.max = v + "";
    this._cdr.detectChanges();
  }
  get step() {
    return numberAttribute(this._hostElement.step, 0);
  }
  set step(v) {
    this._hostElement.step = v + "";
    this._cdr.detectChanges();
  }
  get disabled() {
    return booleanAttribute(this._hostElement.disabled);
  }
  set disabled(v) {
    this._hostElement.disabled = v;
    this._cdr.detectChanges();
    if (this._slider.disabled !== this.disabled) {
      this._slider.disabled = this.disabled;
    }
  }
  get percentage() {
    if (this._slider.min >= this._slider.max) {
      return this._slider._isRtl() ? 1 : 0;
    }
    return (this.value - this._slider.min) / (this._slider.max - this._slider.min);
  }
  get fillPercentage() {
    if (!this._slider._cachedWidth) {
      return this._slider._isRtl() ? 1 : 0;
    }
    if (this._translateX === 0) {
      return 0;
    }
    return this.translateX / this._slider._cachedWidth;
  }
  _hostElement = this._elementRef.nativeElement;
  _valuetext = signal("", ...ngDevMode ? [{
    debugName: "_valuetext"
  }] : []);
  _knobRadius = 8;
  _tickMarkOffset = 3;
  _isActive = false;
  _isFocused = false;
  _setIsFocused(v) {
    this._isFocused = v;
  }
  _hasSetInitialValue = false;
  _initialValue;
  _formControl;
  _destroyed = new Subject();
  _skipUIUpdate = false;
  _onChangeFn;
  _onTouchedFn = () => {
  };
  _isControlInitialized = false;
  constructor() {
    const renderer = inject(Renderer2);
    this._ngZone.runOutsideAngular(() => {
      this._listenerCleanups = [renderer.listen(this._hostElement, "pointerdown", this._onPointerDown.bind(this)), renderer.listen(this._hostElement, "pointermove", this._onPointerMove.bind(this)), renderer.listen(this._hostElement, "pointerup", this._onPointerUp.bind(this))];
    });
  }
  ngOnDestroy() {
    this._listenerCleanups.forEach((cleanup) => cleanup());
    this._destroyed.next();
    this._destroyed.complete();
    this.dragStart.complete();
    this.dragEnd.complete();
  }
  initProps() {
    this._updateWidthInactive();
    if (this.disabled !== this._slider.disabled) {
      this._slider.disabled = true;
    }
    this.step = this._slider.step;
    this.min = this._slider.min;
    this.max = this._slider.max;
    this._initValue();
  }
  initUI() {
    this._updateThumbUIByValue();
  }
  _initValue() {
    this._hasSetInitialValue = true;
    if (this._initialValue === void 0) {
      this.value = this._getDefaultValue();
    } else {
      this._hostElement.value = this._initialValue;
      this._updateThumbUIByValue();
      this._slider._onValueChange(this);
      this._cdr.detectChanges();
    }
  }
  _getDefaultValue() {
    return this.min;
  }
  _onBlur() {
    this._setIsFocused(false);
    this._onTouchedFn();
  }
  _onFocus() {
    this._slider._setTransition(false);
    this._slider._updateTrackUI(this);
    this._setIsFocused(true);
  }
  _onChange() {
    this.valueChange.emit(this.value);
    if (this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: true
      });
    }
  }
  _onInput() {
    this._onChangeFn?.(this.value);
    if (this._slider.step || !this._isActive) {
      this._updateThumbUIByValue({
        withAnimation: !this._isActive
      });
    }
    this._slider._onValueChange(this);
  }
  _onNgControlValueChange() {
    if (!this._isActive || !this._isFocused) {
      this._slider._onValueChange(this);
      this._updateThumbUIByValue();
    }
    this._slider.disabled = this._formControl.disabled;
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._platform.IOS) {
      const isCursorOnSliderThumb = this._slider._isCursorOnSliderThumb(event, this._slider._getThumb(this.thumbPosition)._hostElement.getBoundingClientRect());
      this._isActive = isCursorOnSliderThumb;
      this._updateWidthActive();
      this._slider._updateDimensions();
      return;
    }
    this._isActive = true;
    this._setIsFocused(true);
    this._updateWidthActive();
    this._slider._updateDimensions();
    if (!this._slider.step) {
      this._updateThumbUIByPointerEvent(event, {
        withAnimation: true
      });
    }
    if (!this.disabled) {
      this._handleValueCorrection(event);
      this.dragStart.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
    }
  }
  _handleValueCorrection(event) {
    this._skipUIUpdate = true;
    setTimeout(() => {
      this._skipUIUpdate = false;
      this._fixValue(event);
    }, 0);
  }
  _fixValue(event) {
    const xPos = event.clientX - this._slider._cachedLeft;
    const width = this._slider._cachedWidth;
    const step = this._slider.step === 0 ? 1 : this._slider.step;
    const numSteps = Math.floor((this._slider.max - this._slider.min) / step);
    const percentage = this._slider._isRtl() ? 1 - xPos / width : xPos / width;
    const fixedPercentage = Math.round(percentage * numSteps) / numSteps;
    const impreciseValue = fixedPercentage * (this._slider.max - this._slider.min) + this._slider.min;
    const value = Math.round(impreciseValue / step) * step;
    const prevValue = this.value;
    if (value === prevValue) {
      this._slider._onValueChange(this);
      this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
        withAnimation: this._slider._hasAnimation
      });
      return;
    }
    this.value = value;
    this.valueChange.emit(this.value);
    this._onChangeFn?.(this.value);
    this._slider._onValueChange(this);
    this._slider.step > 0 ? this._updateThumbUIByValue() : this._updateThumbUIByPointerEvent(event, {
      withAnimation: this._slider._hasAnimation
    });
  }
  _onPointerMove(event) {
    if (!this._slider.step && this._isActive) {
      this._updateThumbUIByPointerEvent(event);
    }
  }
  _onPointerUp() {
    if (this._isActive) {
      this._isActive = false;
      if (this._platform.SAFARI) {
        this._setIsFocused(false);
      }
      this.dragEnd.emit({
        source: this,
        parent: this._slider,
        value: this.value
      });
      setTimeout(() => this._updateWidthInactive(), this._platform.IOS ? 10 : 0);
    }
  }
  _clamp(v) {
    const min = this._tickMarkOffset;
    const max = this._slider._cachedWidth - this._tickMarkOffset;
    return Math.max(Math.min(v, max), min);
  }
  _calcTranslateXByValue() {
    if (this._slider._isRtl()) {
      return (1 - this.percentage) * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
    }
    return this.percentage * (this._slider._cachedWidth - this._tickMarkOffset * 2) + this._tickMarkOffset;
  }
  _calcTranslateXByPointerEvent(event) {
    return event.clientX - this._slider._cachedLeft;
  }
  _updateWidthActive() {
  }
  _updateWidthInactive() {
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
    this._hostElement.style.width = `calc(100% + ${this._slider._inputPadding - this._tickMarkOffset * 2}px)`;
    this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
  }
  _updateThumbUIByValue(options) {
    this.translateX = this._clamp(this._calcTranslateXByValue());
    this._updateThumbUI(options);
  }
  _updateThumbUIByPointerEvent(event, options) {
    this.translateX = this._clamp(this._calcTranslateXByPointerEvent(event));
    this._updateThumbUI(options);
  }
  _updateThumbUI(options) {
    this._slider._setTransition(!!options?.withAnimation);
    this._slider._onTranslateXChange(this);
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
    }
  }
  registerOnChange(fn) {
    this._onChangeFn = fn;
    this._isControlInitialized = true;
  }
  registerOnTouched(fn) {
    this._onTouchedFn = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
  }
  focus() {
    this._hostElement.focus();
  }
  blur() {
    this._hostElement.blur();
  }
  static \u0275fac = function MatSliderThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderThumb,
    selectors: [["input", "matSliderThumb", ""]],
    hostAttrs: ["type", "range", 1, "mdc-slider__input"],
    hostVars: 1,
    hostBindings: function MatSliderThumb_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("change", function MatSliderThumb_change_HostBindingHandler() {
          return ctx._onChange();
        })("input", function MatSliderThumb_input_HostBindingHandler() {
          return ctx._onInput();
        })("blur", function MatSliderThumb_blur_HostBindingHandler() {
          return ctx._onBlur();
        })("focus", function MatSliderThumb_focus_HostBindingHandler() {
          return ctx._onFocus();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-valuetext", ctx._valuetext());
      }
    },
    inputs: {
      value: [2, "value", "value", numberAttribute]
    },
    outputs: {
      valueChange: "valueChange",
      dragStart: "dragStart",
      dragEnd: "dragEnd"
    },
    exportAs: ["matSliderThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_THUMB,
      useExisting: _MatSliderThumb
    }])]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderThumb]",
      exportAs: "matSliderThumb",
      host: {
        "class": "mdc-slider__input",
        "type": "range",
        "[attr.aria-valuetext]": "_valuetext()",
        "(change)": "_onChange()",
        "(input)": "_onInput()",
        "(blur)": "_onBlur()",
        "(focus)": "_onFocus()"
      },
      providers: [MAT_SLIDER_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_THUMB,
        useExisting: MatSliderThumb
      }]
    }]
  }], () => [], {
    value: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    valueChange: [{
      type: Output
    }],
    dragStart: [{
      type: Output
    }],
    dragEnd: [{
      type: Output
    }]
  });
})();
var MatSliderRangeThumb = class _MatSliderRangeThumb extends MatSliderThumb {
  _cdr = inject(ChangeDetectorRef);
  getSibling() {
    if (!this._sibling) {
      this._sibling = this._slider._getInput(this._isEndThumb ? _MatThumb.START : _MatThumb.END);
    }
    return this._sibling;
  }
  _sibling;
  getMinPos() {
    const sibling = this.getSibling();
    if (!this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._tickMarkOffset;
  }
  getMaxPos() {
    const sibling = this.getSibling();
    if (this._isLeftThumb && sibling) {
      return sibling.translateX;
    }
    return this._slider._cachedWidth - this._tickMarkOffset;
  }
  _setIsLeftThumb() {
    this._isLeftThumb = this._isEndThumb && this._slider._isRtl() || !this._isEndThumb && !this._slider._isRtl();
  }
  _isLeftThumb = false;
  _isEndThumb = false;
  constructor() {
    super();
    this._isEndThumb = this._hostElement.hasAttribute("matSliderEndThumb");
    this._setIsLeftThumb();
    this.thumbPosition = this._isEndThumb ? _MatThumb.END : _MatThumb.START;
  }
  _getDefaultValue() {
    return this._isEndThumb && this._slider._isRange ? this.max : this.min;
  }
  _onInput() {
    super._onInput();
    this._updateSibling();
    if (!this._isActive) {
      this._updateWidthInactive();
    }
  }
  _onNgControlValueChange() {
    super._onNgControlValueChange();
    this.getSibling()?._updateMinMax();
  }
  _onPointerDown(event) {
    if (this.disabled || event.button !== 0) {
      return;
    }
    if (this._sibling) {
      this._sibling._updateWidthActive();
      this._sibling._hostElement.classList.add("mat-mdc-slider-input-no-pointer-events");
    }
    super._onPointerDown(event);
  }
  _onPointerUp() {
    super._onPointerUp();
    if (this._sibling) {
      setTimeout(() => {
        this._sibling._updateWidthInactive();
        this._sibling._hostElement.classList.remove("mat-mdc-slider-input-no-pointer-events");
      });
    }
  }
  _onPointerMove(event) {
    super._onPointerMove(event);
    if (!this._slider.step && this._isActive) {
      this._updateSibling();
    }
  }
  _fixValue(event) {
    super._fixValue(event);
    this._sibling?._updateMinMax();
  }
  _clamp(v) {
    return Math.max(Math.min(v, this.getMaxPos()), this.getMinPos());
  }
  _updateMinMax() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    if (this._isEndThumb) {
      this.min = Math.max(this._slider.min, sibling.value);
      this.max = this._slider.max;
    } else {
      this.min = this._slider.min;
      this.max = Math.min(this._slider.max, sibling.value);
    }
  }
  _updateWidthActive() {
    const minWidth = this._slider._rippleRadius * 2 - this._slider._inputPadding * 2;
    const maxWidth = this._slider._cachedWidth + this._slider._inputPadding - minWidth - this._tickMarkOffset * 2;
    const percentage = this._slider.min < this._slider.max ? (this.max - this.min) / (this._slider.max - this._slider.min) : 1;
    const width = maxWidth * percentage + minWidth;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = `0 ${this._slider._inputPadding}px`;
  }
  _updateWidthInactive() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    const maxWidth = this._slider._cachedWidth - this._tickMarkOffset * 2;
    const midValue = this._isEndThumb ? this.value - (this.value - sibling.value) / 2 : this.value + (sibling.value - this.value) / 2;
    const _percentage = this._isEndThumb ? (this.max - midValue) / (this._slider.max - this._slider.min) : (midValue - this.min) / (this._slider.max - this._slider.min);
    const percentage = this._slider.min < this._slider.max ? _percentage : 1;
    let ripplePadding = this._slider._rippleRadius;
    if (percentage === 1) {
      ripplePadding = 48;
    } else if (percentage === 0) {
      ripplePadding = 0;
    }
    const width = maxWidth * percentage + ripplePadding;
    this._hostElement.style.width = `${width}px`;
    this._hostElement.style.padding = "0px";
    if (this._isLeftThumb) {
      this._hostElement.style.left = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
      this._hostElement.style.right = "auto";
    } else {
      this._hostElement.style.left = "auto";
      this._hostElement.style.right = `-${this._slider._rippleRadius - this._tickMarkOffset}px`;
    }
  }
  _updateStaticStyles() {
    this._hostElement.classList.toggle("mat-slider__right-input", !this._isLeftThumb);
  }
  _updateSibling() {
    const sibling = this.getSibling();
    if (!sibling) {
      return;
    }
    sibling._updateMinMax();
    if (this._isActive) {
      sibling._updateWidthActive();
    } else {
      sibling._updateWidthInactive();
    }
  }
  writeValue(value) {
    if (this._isControlInitialized || value !== null) {
      this.value = value;
      this._updateWidthInactive();
      this._updateSibling();
    }
  }
  _setValue(value) {
    super._setValue(value);
    this._updateWidthInactive();
    this._updateSibling();
  }
  static \u0275fac = function MatSliderRangeThumb_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderRangeThumb)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatSliderRangeThumb,
    selectors: [["input", "matSliderStartThumb", ""], ["input", "matSliderEndThumb", ""]],
    exportAs: ["matSliderRangeThumb"],
    features: [\u0275\u0275ProvidersFeature([MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
      provide: MAT_SLIDER_RANGE_THUMB,
      useExisting: _MatSliderRangeThumb
    }]), \u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderRangeThumb, [{
    type: Directive,
    args: [{
      selector: "input[matSliderStartThumb], input[matSliderEndThumb]",
      exportAs: "matSliderRangeThumb",
      providers: [MAT_SLIDER_RANGE_THUMB_VALUE_ACCESSOR, {
        provide: MAT_SLIDER_RANGE_THUMB,
        useExisting: MatSliderRangeThumb
      }]
    }]
  }], () => [], null);
})();
var MatSliderModule = class _MatSliderModule {
  static \u0275fac = function MatSliderModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSliderModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSliderModule,
    imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
    exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatRippleModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSliderModule, [{
    type: NgModule,
    args: [{
      imports: [MatRippleModule, MatSlider, MatSliderThumb, MatSliderRangeThumb, MatSliderVisualThumb],
      exports: [MatSlider, MatSliderThumb, MatSliderRangeThumb, BidiModule]
    }]
  }], null, null);
})();

// libs/components/src/lib/desk-height-presets.component.ts
function DeskHeightPresetsComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.DESK_HEIGHT_NOT_SET"), " ");
  }
}
function DeskHeightPresetsComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DeskHeightPresetsComponent_Conditional_28_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.onClose());
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SAVE"), " ");
  }
}
var DeskHeightPresetsComponent = class _DeskHeightPresetsComponent {
  constructor() {
    this._settings = inject(SettingsService);
    this.show_close = model(
      false,
      ...ngDevMode ? [{ debugName: "show_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
    this.not_set = signal(
      false,
      ...ngDevMode ? [{ debugName: "not_set" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_sitting_height = signal(
      71,
      ...ngDevMode ? [{ debugName: "desk_sitting_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_standing_height = signal(
      101,
      ...ngDevMode ? [{ debugName: "desk_standing_height" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.not_set.set(!this._settings.get("desk_sitting_height") && !this._settings.get("desk_standing_height"));
    this.desk_sitting_height.set(this._settings.get("desk_sitting_height") || 71);
    this.desk_standing_height.set(this._settings.get("desk_standing_height") || 101);
  }
  onClose() {
    this.saveSetting("desk_sitting_height", this.desk_sitting_height());
    this.saveSetting("desk_standing_height", this.desk_standing_height());
    this.close.emit();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  saveSetting(name, value) {
    this._settings.saveUserSetting(name, value);
  }
  static {
    this.\u0275fac = function DeskHeightPresetsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskHeightPresetsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskHeightPresetsComponent, selectors: [["desk-height-presets"]], inputs: { show_close: [1, "show_close"] }, outputs: { show_close: "show_closeChange", close: "close" }, decls: 29, vars: 23, consts: [[1, "bg-base-100", "relative", "w-[20rem]", "rounded-sm", "p-4", "shadow-sm"], [1, "mb-2", "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "bg-warning", "text-warning-content", "-mx-2", "mb-4", "rounded-sm", "p-2", "text-xs"], [1, "mt-2", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "80", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], [1, "mr-2", "flex", "items-center", "space-x-2"], ["min", "90", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], [1, "mr-2", "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "mt-2", "w-full"], ["btn", "", "matRipple", "", 1, "mt-2", "w-full", 3, "click"]], template: function DeskHeightPresetsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "div", 2);
        \u0275\u0275text(5);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, DeskHeightPresetsComponent_Conditional_7_Template, 3, 3, "div", 3);
        \u0275\u0275elementStart(8, "div", 2);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 4)(12, "label");
        \u0275\u0275text(13);
        \u0275\u0275pipe(14, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(15, "div", 5)(16, "mat-slider", 6)(17, "input", 7);
        \u0275\u0275listener("ngModelChange", function DeskHeightPresetsComponent_Template_input_ngModelChange_17_listener($event) {
          ctx.desk_sitting_height.set($event);
          return ctx.saveSetting("desk_sitting_height", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 8);
        \u0275\u0275text(19);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(20, "label");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(23, "div", 9)(24, "mat-slider", 10)(25, "input", 7);
        \u0275\u0275listener("ngModelChange", function DeskHeightPresetsComponent_Template_input_ngModelChange_25_listener($event) {
          ctx.desk_standing_height.set($event);
          return ctx.saveSetting("desk_standing_height", $event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 11);
        \u0275\u0275text(27);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(28, DeskHeightPresetsComponent_Conditional_28_Template, 3, 3, "button", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 13, "COMMON.DESK_HEIGHT_TITLE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 15, "COMMON.DESK_HEIGHT_MSG"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.not_set() && ctx.show_close() ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 17, "COMMON.DESK_HEIGHT_INFO"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 19, "COMMON.DESK_HEIGHT_SITTING"));
        \u0275\u0275advance(3);
        \u0275\u0275property("displayWith", ctx.formatLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.desk_sitting_height());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.desk_sitting_height().toFixed(1), "cm ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 21, "COMMON.DESK_HEIGHT_STANDING"));
        \u0275\u0275advance(3);
        \u0275\u0275property("displayWith", ctx.formatLabel);
        \u0275\u0275advance();
        \u0275\u0275property("ngModel", ctx.desk_standing_height());
        \u0275\u0275control();
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.desk_standing_height().toFixed(1), "cm ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_close() ? 28 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatSliderModule, MatSlider, MatSliderThumb, FormsModule, DefaultValueAccessor, NgControlStatus, NgModel, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskHeightPresetsComponent, [{
    type: Component,
    args: [{ selector: "desk-height-presets", template: `
        <div class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm">
            <div class="mb-2 text-lg">
                {{ 'COMMON.DESK_HEIGHT_TITLE' | translate }}
            </div>
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_MSG' | translate }}
            </div>
            @if (not_set() && show_close()) {
                <div
                    class="bg-warning text-warning-content -mx-2 mb-4 rounded-sm p-2 text-xs"
                >
                    {{ 'COMMON.DESK_HEIGHT_NOT_SET' | translate }}
                </div>
            }
            <div class="mb-4 text-xs opacity-60">
                {{ 'COMMON.DESK_HEIGHT_INFO' | translate }}
            </div>
            <div class="mt-2 flex flex-col">
                <label>{{ 'COMMON.DESK_HEIGHT_SITTING' | translate }}</label>
                <div class="flex items-center space-x-2">
                    <mat-slider
                        min="60"
                        max="80"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [ngModel]="desk_sitting_height()"
                            (ngModelChange)="
                                desk_sitting_height.set($event);
                                saveSetting('desk_sitting_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="w-12 text-right text-sm">
                        {{ desk_sitting_height().toFixed(1) }}cm
                    </div>
                </div>
                <label>{{ 'COMMON.DESK_HEIGHT_STANDING' | translate }}</label>
                <div class="mr-2 flex items-center space-x-2">
                    <mat-slider
                        min="90"
                        max="120"
                        step="0.5"
                        discrete
                        class="flex-1"
                        [displayWith]="formatLabel"
                    >
                        <input
                            matSliderThumb
                            [ngModel]="desk_standing_height()"
                            (ngModelChange)="
                                desk_standing_height.set($event);
                                saveSetting('desk_standing_height', $event)
                            "
                        />
                    </mat-slider>
                    <div class="mr-2 w-12 text-right text-sm">
                        {{ desk_standing_height().toFixed(1) }}cm
                    </div>
                </div>
            </div>
            @if (show_close()) {
                <button btn matRipple (click)="onClose()" class="mt-2 w-full">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            }
        </div>
    `, imports: [TranslatePipe, MatRippleModule, MatSliderModule, FormsModule] }]
  }], null, { show_close: [{ type: Input, args: [{ isSignal: true, alias: "show_close", required: false }] }, { type: Output, args: ["show_closeChange"] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskHeightPresetsComponent, { className: "DeskHeightPresetsComponent", filePath: "libs/components/src/lib/desk-height-presets.component.ts", lineNumber: 93 });
})();

// libs/components/src/lib/binding.directive.ts
var BindingDirective = class _BindingDirective extends AsyncHandler {
  constructor() {
    super();
    this._element = inject(ElementRef);
    this._renderer = inject(Renderer2);
    this.sys = input(
      "",
      ...ngDevMode ? [{ debugName: "sys" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mod = input(
      "",
      ...ngDevMode ? [{ debugName: "mod" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input(
      1,
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bind = input(
      "",
      ...ngDevMode ? [{ debugName: "bind" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.exec = input(
      "",
      ...ngDevMode ? [{ debugName: "exec" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.delay = input(
      100,
      ...ngDevMode ? [{ debugName: "delay" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.on_event = input("", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "on_event" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "onEvent" }));
    this.params = input(
      null,
      ...ngDevMode ? [{ debugName: "params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ignore = input(
      false,
      ...ngDevMode ? [{ debugName: "ignore" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelInput = input(null, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "modelInput" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "model" }));
    this.model = linkedSignal(
      this.modelInput,
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.modelChange = output();
    this._binding = false;
    this._old_model = null;
  }
  ngOnInit() {
    Zr(eo(), (_) => _).then(() => this.bindVariable());
  }
  ngOnChanges(changes) {
    if (changes.sys || changes.mod || changes.bind) {
      this.bindVariable();
    }
    const model2 = this.model();
    if ((changes.model || changes.modelInput) && this._old_model !== model2 && this.model != null) {
      this._old_model = model2;
      this.execute();
    }
    const on_event = this.on_event();
    if (changes.on_event && on_event) {
      this.subscription("on_event", this._renderer.listen(this._element.nativeElement, on_event, () => this.execute()));
    }
  }
  /** Bind to set status variable */
  bindVariable() {
    if (Mt() && this.bind() && this.sys() && this.mod() && !this._binding) {
      this.timeout("bind", () => {
        const module = Dd(this.sys(), this.mod(), this.index());
        const binding = module.variable(this.bind());
        this._binding = true;
        this.subscription("on_changes", binding.bindThenSubscribe((value) => {
          setTimeout(() => {
            this._binding = false;
            this.clearTimeout("bound");
            if (this.ignore())
              return;
            this._old_model = this.model();
            this.model.set(value);
            this.modelChange.emit(this.model());
          }, 10);
        }));
        this.timeout("bound", () => this._binding = false, 200);
      }, 20);
    }
  }
  /** Excute the set method on the module */
  execute() {
    if (Mt() && this.exec() && this.sys() && this.mod() && !this._timers["execute"]) {
      this.timeout("execute", () => {
        const module = Dd(this.sys(), this.mod(), this.index());
        let params = this.params();
        if (this.bind())
          params = this.params() || [this.model()];
        module.execute(this.exec(), params || []).then((result) => {
          if (!this.bind()) {
            this.model.set(result);
            this._old_model = this.model();
            this.modelChange.emit(this.model());
          }
        });
      }, this.delay());
    }
  }
  static {
    this.\u0275fac = function BindingDirective_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BindingDirective)();
    };
  }
  static {
    this.\u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({ type: _BindingDirective, selectors: [["i", "bind", ""], ["", "binding", ""], ["co-bind"]], inputs: { sys: [1, "sys"], mod: [1, "mod"], index: [1, "index"], bind: [1, "bind"], exec: [1, "exec"], delay: [1, "delay"], on_event: [1, "onEvent", "on_event"], params: [1, "params"], ignore: [1, "ignore"], modelInput: [1, "model", "modelInput"] }, outputs: { modelChange: "modelChange" }, features: [\u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BindingDirective, [{
    type: Directive,
    args: [{
      selector: "i[bind], [binding], co-bind"
    }]
  }], () => [], { sys: [{ type: Input, args: [{ isSignal: true, alias: "sys", required: false }] }], mod: [{ type: Input, args: [{ isSignal: true, alias: "mod", required: false }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: false }] }], bind: [{ type: Input, args: [{ isSignal: true, alias: "bind", required: false }] }], exec: [{ type: Input, args: [{ isSignal: true, alias: "exec", required: false }] }], delay: [{ type: Input, args: [{ isSignal: true, alias: "delay", required: false }] }], on_event: [{ type: Input, args: [{ isSignal: true, alias: "onEvent", required: false }] }], params: [{ type: Input, args: [{ isSignal: true, alias: "params", required: false }] }], ignore: [{ type: Input, args: [{ isSignal: true, alias: "ignore", required: false }] }], modelInput: [{ type: Input, args: [{ isSignal: true, alias: "model", required: false }] }], modelChange: [{ type: Output, args: ["modelChange"] }] });
})();

// libs/events/src/lib/attendee-list.component.ts
var _c04 = (a0) => ({ count: a0 });
function AttendeeListComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275listener("click", function AttendeeListComponent_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.close.emit());
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "arrow_back");
    \u0275\u0275elementEnd()();
  }
}
function AttendeeListComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function AttendeeListComponent_For_9_Conditional_0_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 12);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.HOST"), " ");
  }
}
function AttendeeListComponent_For_9_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275declareLet(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275element(4, "a-user-avatar", 8);
    \u0275\u0275elementStart(5, "div", 9)(6, "div", 10);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 11);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(10, AttendeeListComponent_For_9_Conditional_0_Conditional_10_Template, 3, 3, "div", 12);
    \u0275\u0275elementStart(11, "div", 13);
    \u0275\u0275element(12, "div", 14);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const user_r3 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    const resolved_host_r4 = ctx_r1.host() === user_r3.email && !user_r3.name ? \u0275\u0275pipeBind1(3, 12, \u0275\u0275pipeBind2(2, 9, ctx_r1.host(), "email-prefix")) : null;
    const usr_r5 = resolved_host_r4?.email ? resolved_host_r4 : user_r3;
    \u0275\u0275advance(4);
    \u0275\u0275property("user", usr_r5);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(usr_r5?.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", usr_r5?.email, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.host() === user_r3.email ? 10 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-success", user_r3.checked_in)("bg-pending", !user_r3.checked_in);
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(13, 14, user_r3.checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECKED_IN_NOT"));
  }
}
function AttendeeListComponent_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, AttendeeListComponent_For_9_Conditional_0_Template, 14, 16, "div", 7);
  }
  if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!user_r3.resource && (ctx_r1.host() !== user_r3.email || ctx_r1.show_host()) ? 0 : -1);
  }
}
var AttendeeListComponent = class _AttendeeListComponent {
  constructor() {
    this.host = input(
      "",
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_host = input(
      true,
      ...ngDevMode ? [{ debugName: "show_host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.list = input(
      [],
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.final_list = computed(
      () => {
        const attendee_list = this.list();
        const host = this.host();
        if (!this.show_host()) {
          return attendee_list.filter((user) => user.email !== host);
        }
        if (!host || attendee_list.some((user) => user.email === host)) {
          return attendee_list;
        }
        return [new User({ email: host }), ...attendee_list];
      },
      ...ngDevMode ? [{ debugName: "final_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_close = input(
      false,
      ...ngDevMode ? [{ debugName: "hide_close" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_title = input(
      "",
      ...ngDevMode ? [{ debugName: "custom_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.close = output();
  }
  static {
    this.\u0275fac = function AttendeeListComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttendeeListComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttendeeListComponent, selectors: [["attendee-list"]], inputs: { host: [1, "host"], show_host: [1, "show_host"], list: [1, "list"], hide_close: [1, "hide_close"], custom_title: [1, "custom_title"] }, outputs: { close: "close" }, decls: 10, vars: 9, consts: [[1, "bg-base-100", "flex", "h-full", "w-full", "flex-col", "overflow-hidden"], [1, "border-base-200", "flex", "min-h-12", "items-center", "border-b", "p-2"], ["close", "", "icon", "", "matRipple", ""], [1, "flex-1", "text-center", "font-medium"], [1, "w-12"], [1, "w-full", "flex-1", "overflow-auto"], ["close", "", "icon", "", "matRipple", "", 3, "click"], ["attendee", "", 1, "even:bg-base-200/40", "hover:bg-base-200", "flex", "items-center", "space-x-2", "p-2"], [3, "user"], [1, "w-1/2", "flex-1"], [1, "truncate"], [1, "text-xs", "opacity-60"], [1, "bg-info-light", "rounded", "px-2", "py-1", "font-mono", "text-xs", "shadow"], [1, "p-2"], [1, "h-3", "w-3", "rounded-full", 3, "matTooltip"]], template: function AttendeeListComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1);
        \u0275\u0275conditionalCreate(2, AttendeeListComponent_Conditional_2_Template, 3, 0, "button", 2);
        \u0275\u0275elementStart(3, "div", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, AttendeeListComponent_Conditional_6_Template, 1, 0, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 5);
        \u0275\u0275repeaterCreate(8, AttendeeListComponent_For_9_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_close() ? 2 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.custom_title() ? ctx.custom_title() : \u0275\u0275pipeBind3(5, 3, "CALENDAR_EVENT.ATTENDEES_COUNT", \u0275\u0275pureFunction1(7, _c04, ctx.final_list().length), ctx.final_list().length), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_close() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.final_list());
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      AsyncPipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttendeeListComponent, [{
    type: Component,
    args: [{ selector: "attendee-list", template: `
        <div class="bg-base-100 flex h-full w-full flex-col overflow-hidden">
            <div
                class="border-base-200 flex min-h-12 items-center border-b p-2"
            >
                @if (!hide_close()) {
                    <button close icon matRipple (click)="close.emit()">
                        <icon>arrow_back</icon>
                    </button>
                }
                <div class="flex-1 text-center font-medium">
                    {{
                        custom_title()
                            ? custom_title()
                            : ('CALENDAR_EVENT.ATTENDEES_COUNT'
                              | translate
                                  : { count: final_list().length }
                                  : final_list().length)
                    }}
                </div>
                @if (!hide_close()) {
                    <div class="w-12"></div>
                }
            </div>
            <div class="w-full flex-1 overflow-auto">
                @for (user of final_list(); track user) {
                    @if (
                        !user.resource && (host() !== user.email || show_host())
                    ) {
                        <div
                            attendee
                            class="even:bg-base-200/40 hover:bg-base-200 flex items-center space-x-2 p-2"
                        >
                            @let resolved_host =
                                host() === user.email && !user.name
                                    ? (host() | user: 'email-prefix' | async)
                                    : null;
                            @let usr =
                                resolved_host?.email ? resolved_host : user;
                            <a-user-avatar [user]="usr"></a-user-avatar>
                            <div class="w-1/2 flex-1">
                                <div class="truncate">{{ usr?.name }}</div>
                                <div class="text-xs opacity-60">
                                    {{ usr?.email }}
                                </div>
                            </div>

                            @if (host() === user.email) {
                                <div
                                    class="bg-info-light rounded px-2 py-1 font-mono text-xs shadow"
                                >
                                    {{ 'FORM.HOST' | translate }}
                                </div>
                            }
                            <div class="p-2">
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [class.bg-success]="user.checked_in"
                                    [class.bg-pending]="!user.checked_in"
                                    [matTooltip]="
                                        (user.checked_in
                                            ? 'COMMON.CHECKED_IN'
                                            : 'COMMON.CHECKED_IN_NOT'
                                        ) | translate
                                    "
                                ></div>
                            </div>
                        </div>
                    }
                }
            </div>
        </div>
    `, imports: [
      TranslatePipe,
      MatRippleModule,
      IconComponent,
      UserAvatarComponent,
      MatTooltipModule,
      AsyncPipe,
      UserPipe
    ] }]
  }], null, { host: [{ type: Input, args: [{ isSignal: true, alias: "host", required: false }] }], show_host: [{ type: Input, args: [{ isSignal: true, alias: "show_host", required: false }] }], list: [{ type: Input, args: [{ isSignal: true, alias: "list", required: false }] }], hide_close: [{ type: Input, args: [{ isSignal: true, alias: "hide_close", required: false }] }], custom_title: [{ type: Input, args: [{ isSignal: true, alias: "custom_title", required: false }] }], close: [{ type: Output, args: ["close"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttendeeListComponent, { className: "AttendeeListComponent", filePath: "libs/events/src/lib/attendee-list.component.ts", lineNumber: 98 });
})();

// libs/events/src/lib/group-event-details-modal.component.ts
var _c05 = (a0) => ({ name: a0 });
var _c12 = (a0, a1) => ({ going: a0, interested: a1 });
function GroupEventDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("source", ctx_r0.event().extension_data?.images[0]);
  }
}
function GroupEventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "icon", 34);
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 35);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 1, "CALENDAR_EVENT.GROUP_FEATURED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 6);
    \u0275\u0275element(1, "div", 36);
    \u0275\u0275elementStart(2, "icon", 37);
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
}
function GroupEventDetailsModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 38)(1, "icon");
    \u0275\u0275text(2, "star");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 39);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(6, "div", 38)(7, "icon");
    \u0275\u0275text(8, "help");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 39);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_interested())("text-base-content", !ctx_r0.is_interested())("opacity-30", !ctx_r0.is_interested())("bg-success", ctx_r0.is_interested())("text-success-content", ctx_r0.is_interested())("opacity-100", ctx_r0.is_interested());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 26, ctx_r0.is_interested() ? "CALENDAR_EVENT.GROUP_INTERESTED" : "CALENDAR_EVENT.GROUP_NOT_INTERESTED"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("bg-base-200", !ctx_r0.is_going())("text-base-content", !ctx_r0.is_going())("opacity-30", !ctx_r0.is_going())("bg-success", ctx_r0.is_going())("text-success-content", ctx_r0.is_going())("opacity-100", ctx_r0.is_going());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 28, ctx_r0.is_going() ? "CALENDAR_EVENT.GROUP_GOING" : "CALENDAR_EVENT.GROUP_NOT_GOING"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_36_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.event(), false));
    });
    \u0275\u0275elementStart(1, "div", 9)(2, "icon", 40);
    \u0275\u0275text(3, " delete ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 13);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.GROUP_DELETE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_83_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_84_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_85_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_DESCRIPTION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 43);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.level().map_id)("features", ctx_r0.features())("styles", ctx_r0.styles());
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_UNCONFIRMED"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", ctx_r0.building().display_name || ctx_r0.building().name, ", ", ctx_r0.level().display_name || ctx_r0.level().name, " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "CALENDAR_EVENT.GROUP_NO_LOCATION"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "a", 47);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("underline", ctx_r0.event().meeting_url);
    \u0275\u0275property("href", ctx_r0.event().meeting_url, \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 4, ctx_r0.is_onsite() ? "CALENDAR_EVENT.GROUP_BOTH_LOCATIONS" : "CALENDAR_EVENT.GROUP_REMOTE"), " ");
  }
}
function GroupEventDetailsModalComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 41)(2, "button", 42);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_101_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_101_Conditional_3_Template, 1, 3, "interactive-map", 43);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 44);
    \u0275\u0275conditionalCreate(5, GroupEventDetailsModalComponent_Conditional_101_Conditional_5_Template, 2, 1, "div");
    \u0275\u0275conditionalCreate(6, GroupEventDetailsModalComponent_Conditional_101_Conditional_6_Template, 3, 3, "div", 28);
    \u0275\u0275elementStart(7, "div", 45);
    \u0275\u0275conditionalCreate(8, GroupEventDetailsModalComponent_Conditional_101_Conditional_8_Template, 2, 2, "span");
    \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_101_Conditional_9_Template, 3, 3, "span", 28);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, GroupEventDetailsModalComponent_Conditional_101_Conditional_10_Template, 3, 6, "a", 46);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275conditional(!ctx_r0.showing_map() ? 3 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.is_onsite() && ctx_r0.has_space() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_onsite() && !ctx_r0.has_space() ? 6 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.building() && ctx_r0.level() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.building() || !ctx_r0.level() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.is_online() ? 10 : -1);
  }
}
function GroupEventDetailsModalComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 33)(1, "button", 48);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_button_click_1_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(2, "div", 49)(3, "attendee-list", 50);
    \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Conditional_102_Template_attendee_list_click_3_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("show_host", false)("list", ctx_r0.event().attendees)("host", ctx_r0.event().host)("show_host", false);
  }
}
var GroupEventDetailsModalComponent = class _GroupEventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA, { optional: true });
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._clipboard = inject(Clipboard);
    this._dialog_ref = inject(MatDialogRef, { optional: true });
    this.edit = this._data?.edit_fn;
    this.space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = model(
      this._data?.event,
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_limited = signal(
      !this._data,
      ...ngDevMode ? [{ debugName: "is_limited" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.concierge = signal(
      this._data?.concierge,
      ...ngDevMode ? [{ debugName: "concierge" }] : (
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
    this.level = signal(
      new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = signal(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locate = signal(
      "",
      ...ngDevMode ? [{ debugName: "locate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.showing_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "showing_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_attendees = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = signal(
      {},
      ...ngDevMode ? [{ debugName: "styles" }] : (
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
    this.calendar_space = signal(
      new Space(),
      ...ngDevMode ? [{ debugName: "calendar_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.featured = computed(
      () => this.event().featured || this.event().extension_data?.featured,
      ...ngDevMode ? [{ debugName: "featured" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_space = computed(
      () => !!this.space().id,
      ...ngDevMode ? [{ debugName: "has_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_onsite = computed(
      () => this.event().extension_data.attendance_type !== "ONLINE",
      ...ngDevMode ? [{ debugName: "is_onsite" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_online = computed(
      () => !this.is_onsite() || this.event().extension_data.attendance_type === "ANY",
      ...ngDevMode ? [{ debugName: "is_online" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.body = computed(
      () => {
        if (this.is_online())
          return this.event().body;
        let body = this.event().body;
        const remove_blocks = [
          `<div style="margin-bottom:24px; overflow:hidden; white-space:nowrap">________________________________________________________________________________</div>`,
          `<p>________________________________________________________________________________</p>`
        ];
        for (const block of remove_blocks) {
          const first = body.indexOf(block);
          const last = body.lastIndexOf(block);
          body = body.substring(0, first) + body.substring(last);
        }
        for (const block of remove_blocks) {
          body = body.replace(block, "");
        }
        return body;
      },
      ...ngDevMode ? [{ debugName: "body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendance = computed(
      () => this.event().attendees?.filter((_) => _.checked_in)?.length || 0,
      ...ngDevMode ? [{ debugName: "attendance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.attendees = computed(
      () => this.event().attendees?.filter((user) => user.email !== this.group_event_calendar())?.length || 0,
      ...ngDevMode ? [{ debugName: "attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guest_details = computed(
      () => {
        const user = currentUser();
        return this.event().attendees?.find((_) => _.email === user.email);
      },
      ...ngDevMode ? [{ debugName: "guest_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_interested = computed(
      () => !!this.guest_details(),
      ...ngDevMode ? [{ debugName: "is_interested" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_going = computed(
      () => this.guest_details()?.checked_in,
      ...ngDevMode ? [{ debugName: "is_going" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.system_id = computed(
      () => this.space().id,
      ...ngDevMode ? [{ debugName: "system_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.public_event_link = computed(
      () => {
        const system_id = this.calendar_space().id;
        const event_id = this.event()?.id;
        if (!system_id || !event_id)
          return "";
        const path = `${this.public_url_path() || "/public"}`.replace(/\/$/, "");
        return `${window.location.origin}${path}/#/event/${encodeURIComponent(system_id)}/${encodeURIComponent(event_id)}`;
      },
      ...ngDevMode ? [{ debugName: "public_event_link" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_event_calendar = settingSignal("group_events_calendar", "");
    this.public_url_path = settingSignal("public_url_path", "/public");
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(event, remove_series) {
    if (event?.state === "done")
      return;
    this._data?.remove_fn(event, remove_series);
  }
  async ngOnInit() {
    const space_pipe = new SpacePipe();
    space_pipe.org = this._org;
    const resource = this.event().resources.find((_) => _.email !== this.group_event_calendar());
    this.space.set(await space_pipe.transform(resource?.id || resource?.email));
    this.calendar_space.set(await space_pipe.transform(this.group_event_calendar()));
    const map_id = this.event().extension_data?.map_id;
    const id = this.space()?.map_id || map_id;
    if (id) {
      this.styles.set({ [`#${id}`]: { fill: "green" } });
      this.features.set([
        {
          location: id,
          content: MapPinComponent,
          data: {}
        }
      ]);
    }
    const zones = this.space().zones || [];
    this.level.set(this._org.levelWithID(zones) || this.level());
    this.building.set(this._org.buildings.find((_) => zones.includes(_.id)) || this._org.building);
    this.locate.set(map_id || "");
    this.raw_description.set(this.removeHtmlTags(this.event().body).trim());
  }
  removeHtmlTags(html) {
    const doc = new DOMParser().parseFromString(html, "text/html");
    return (doc.body.textContent || "").trim();
  }
  viewLocation() {
    if (!this.space().map_id) {
      return notifyInfo("Unable to locate space on map.");
    }
    this.showing_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: { item: this.space }
    });
    ref.afterClosed().subscribe(() => this.showing_map.set(false));
  }
  async toggleInterest() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (this.is_interested() && user) {
      await removeEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: (event.attendees || []).filter((_) => _.email !== user.email)
      })));
    } else {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.calendar_space().id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
  }
  copyPublicEventLink() {
    const link = this.public_event_link();
    if (!link)
      return;
    if (this._clipboard.copy(link)) {
      notifyInfo("Copied public event link to clipboard.");
    }
  }
  async toggleAttendance() {
    let user = this.guest_details();
    const _user = new GuestUser(currentUser());
    if (!user) {
      user = await addEventGuest(this.event().id, _user, {
        system_id: this.event().system?.id,
        calendar: this.group_event_calendar()
      });
      this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
        attendees: unique([...event.attendees || [], user], "email")
      })));
    }
    user = __spreadValues(__spreadValues({}, currentUser()), user || {});
    if (!user.email)
      return;
    await checkinEventGuest(this.event().id, user.email, !this.is_going(), {
      system_id: this.event().system?.id
    });
    const guest = this.event().attendees.find((_) => _.email === user.email);
    if (!guest)
      return;
    this.event.update((event) => new CalendarEvent(__spreadProps(__spreadValues({}, event), {
      attendees: event.attendees.map((attendee) => attendee.email === user.email ? __spreadProps(__spreadValues({}, attendee), { checked_in: !this.is_going() }) : attendee)
    })));
  }
  static {
    this.\u0275fac = function GroupEventDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _GroupEventDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _GroupEventDetailsModalComponent, selectors: [["group-event-details-modal"]], inputs: { event: [1, "event"] }, outputs: { event: "eventChange" }, decls: 103, vars: 72, consts: [["concierge_menu", "matMenu"], ["menu", "matMenu"], [1, "relative", "max-h-[80vh]", "w-3xl", "max-w-[calc(100vw-1rem)]", "overflow-hidden"], [1, "bg-base-200", "relative", "flex", "h-52", "w-full", "items-center", "justify-between", "overflow-hidden"], ["auth", "", 1, "absolute", "top-1/2", "left-1/2", "min-h-full", "min-w-full", "-translate-x-1/2", "-translate-y-1/2", "object-cover", 3, "source"], [1, "bg-info", "text-info-content", "absolute", "top-0", "left-0", "flex", "items-center", "space-x-2", "rounded-br", "py-2", "pr-4", "pl-2", "text-sm"], ["icon", "", "mat-dialog-close", "", 1, "absolute", "top-1", "right-1", "overflow-hidden"], [1, "border-base-200", "flex", "items-center", "justify-between", "border-b", "px-8", "py-4"], [1, "text-left", "text-xl"], [1, "flex", "items-center", "space-x-2"], ["btn", "", "matRipple", "", 1, "clear", "bg-base-200", "text-base-content", "w-11", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], ["mat-menu-item", "", 3, "disabled"], [1, "mr-2"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], ["mat-menu-item", "", 3, "click", "disabled"], ["mat-menu-item", ""], ["mat-menu-item", "", 1, "flex", "items-center", "space-x-2", 3, "click"], ["mat-menu-item", "", 3, "click"], [1, "flex", "max-h-[calc(80vh-18rem)]", "flex-1", "space-x-6", "overflow-x-hidden", "overflow-y-auto", "p-8"], [1, "flex", "w-1/3", "flex-1", "flex-col", "space-y-2"], [1, "flex", "items-center", "space-x-4"], [1, "bg-base-200", "flex", "h-10", "w-10", "items-center", "justify-center", "rounded-full"], [1, "pt-4", "font-medium"], [1, "flex", "flex-col"], [1, "text-sm"], [1, "text-sm", "opacity-30"], [1, "flex", "flex-col", "text-sm"], [1, "opacity-30"], ["matRipple", "", 1, "flex", "min-h-12", "items-center", "space-x-4", "rounded-sm", 3, "click"], [1, "pb-4", "text-sm"], ["event-details", "", 3, "innerHTML"], [1, "flex", "w-[20rem]"], [1, "absolute", "inset-0", "z-50"], [1, "text-base"], [1, "uppercase"], [1, "bg-base-100", "absolute", "inset-0", "z-0", "opacity-30"], [1, "z-10"], ["btn", "", 1, "flex", "h-10", "items-center", "space-x-2", "rounded-sm", "px-4"], [1, "pr-2"], [1, "text-error", "text-2xl"], [1, "border-base-300", "w-full", "border"], ["matRipple", "", 1, "bg-base-200", "relative", "h-40", "w-full", 3, "click"], [3, "src", "features", "styles"], [1, "space-y-2", "p-4"], [1, "mt-0!", "text-sm", "opacity-30"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "underline", "href"], ["target", "_blank", "rel", "noopener noreferrer", 1, "mt-4", "opacity-30", 3, "href"], [1, "bg-base-content", "absolute", "inset-0", "opacity-60", 3, "click"], [1, "absolute", "inset-y-8", "left-1/2", "w-[24rem]", "-translate-x-1/2", "overflow-hidden", "rounded-sm", "shadow-sm"], [3, "click", "show_host", "list", "host"]], template: function GroupEventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
        \u0275\u0275conditionalCreate(2, GroupEventDetailsModalComponent_Conditional_2_Template, 1, 1, "img", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, GroupEventDetailsModalComponent_Conditional_3_Template, 6, 3, "div", 5);
        \u0275\u0275conditionalCreate(4, GroupEventDetailsModalComponent_Conditional_4_Template, 4, 0, "button", 6);
        \u0275\u0275elementStart(5, "div", 7)(6, "h3", 8);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(8, "div", 9);
        \u0275\u0275conditionalCreate(9, GroupEventDetailsModalComponent_Conditional_9_Template, 12, 30);
        \u0275\u0275elementStart(10, "button", 10)(11, "icon", 11);
        \u0275\u0275text(12, "more_horiz");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(13, "mat-menu", null, 0)(15, "button", 12)(16, "div", 9)(17, "icon", 11);
        \u0275\u0275text(18, " confirmation_number ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 13);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "button", 14);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_22_listener() {
          return ctx.edit ? ctx.edit(ctx.event()) : "";
        });
        \u0275\u0275elementStart(23, "div", 9)(24, "icon", 11);
        \u0275\u0275text(25, "edit");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 13);
        \u0275\u0275text(27);
        \u0275\u0275pipe(28, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(29, "button", 15);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_29_listener() {
          return ctx.copyPublicEventLink();
        });
        \u0275\u0275elementStart(30, "div", 9)(31, "icon", 11);
        \u0275\u0275text(32, "content_copy");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div", 13);
        \u0275\u0275text(34);
        \u0275\u0275pipe(35, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(36, GroupEventDetailsModalComponent_Conditional_36_Template, 7, 3, "button", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(37, "mat-menu", null, 1)(39, "button", 17);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_39_listener() {
          return ctx.toggleInterest();
        });
        \u0275\u0275elementStart(40, "div", 9)(41, "icon");
        \u0275\u0275text(42, " star ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(43, "span");
        \u0275\u0275text(44);
        \u0275\u0275pipe(45, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(46, "button", 18);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_46_listener() {
          return ctx.toggleAttendance();
        });
        \u0275\u0275elementStart(47, "div", 9)(48, "icon");
        \u0275\u0275text(49, " help ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "span");
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()()()()()();
        \u0275\u0275elementStart(53, "div", 19)(54, "div", 20)(55, "div", 21)(56, "div", 22)(57, "icon");
        \u0275\u0275text(58, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(59, "div");
        \u0275\u0275text(60);
        \u0275\u0275pipe(61, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(62, "h3", 23);
        \u0275\u0275text(63);
        \u0275\u0275pipe(64, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(65, "div", 21)(66, "div", 22)(67, "icon");
        \u0275\u0275text(68, "calendar_today");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(69, "div", 24)(70, "div", 25);
        \u0275\u0275text(71);
        \u0275\u0275pipe(72, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(73, "div", 26);
        \u0275\u0275text(74);
        \u0275\u0275pipe(75, "date");
        \u0275\u0275pipe(76, "date");
        \u0275\u0275pipe(77, "date");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(78, "div", 21)(79, "div", 22)(80, "icon");
        \u0275\u0275text(81, "place");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(82, "div", 27);
        \u0275\u0275conditionalCreate(83, GroupEventDetailsModalComponent_Conditional_83_Template, 2, 1, "div");
        \u0275\u0275conditionalCreate(84, GroupEventDetailsModalComponent_Conditional_84_Template, 3, 3, "div", 28);
        \u0275\u0275conditionalCreate(85, GroupEventDetailsModalComponent_Conditional_85_Template, 3, 3, "div", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(86, "button", 29);
        \u0275\u0275listener("click", function GroupEventDetailsModalComponent_Template_button_click_86_listener() {
          return ctx.show_attendees.set(!ctx.is_limited() && true);
        });
        \u0275\u0275elementStart(87, "div", 22)(88, "icon");
        \u0275\u0275text(89, "person");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(90, "div");
        \u0275\u0275text(91);
        \u0275\u0275pipe(92, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(93, "h3", 23);
        \u0275\u0275text(94);
        \u0275\u0275pipe(95, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(96, "div", 30);
        \u0275\u0275element(97, "span", 31);
        \u0275\u0275pipe(98, "sanitize");
        \u0275\u0275conditionalCreate(99, GroupEventDetailsModalComponent_Conditional_99_Template, 3, 3, "span", 28);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(100, "div");
        \u0275\u0275conditionalCreate(101, GroupEventDetailsModalComponent_Conditional_101_Template, 11, 6, "div", 32);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(102, GroupEventDetailsModalComponent_Conditional_102_Template, 4, 4, "div", 33);
      }
      if (rf & 2) {
        const concierge_menu_r5 = \u0275\u0275reference(14);
        const menu_r6 = \u0275\u0275reference(38);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().extension_data?.images?.length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.featured() ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.is_limited() ? 4 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.event().title, " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.concierge() ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("disabled", ctx.event().state === "done")("matMenuTriggerFor", ctx.concierge() ? concierge_menu_r5 : menu_r6);
        \u0275\u0275advance(5);
        \u0275\u0275property("disabled", true);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 34, "CALENDAR_EVENT.GROUP_PROMOTE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(28, 36, "CALENDAR_EVENT.ACTION_EDIT"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("disabled", !ctx.public_event_link());
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(35, 38, "CALENDAR_EVENT.GROUP_COPY_URL"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.event().state !== "done" ? 36 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275classProp("text-error", ctx.is_interested());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 40, ctx.is_interested() ? "CALENDAR_EVENT.GROUP_INTEREST_REMOVE" : "CALENDAR_EVENT.GROUP_INTEREST_ADD"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275classProp("text-error", ctx.is_going());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 42, ctx.is_going() ? "CALENDAR_EVENT.GROUP_GOING_REMOVE" : "CALENDAR_EVENT.GROUP_GOING_ADD"), " ");
        \u0275\u0275advance(9);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(61, 44, "CALENDAR_EVENT.GROUP_HOST", \u0275\u0275pureFunction1(67, _c05, ctx.event().organiser?.name || ctx.event().host)), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(64, 47, "CALENDAR_EVENT.GROUP_WHEN_WHERE"), " ");
        \u0275\u0275advance(8);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(72, 49, "CALENDAR_EVENT.GROUP_DATE_TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate3(" ", \u0275\u0275pipeBind2(75, 51, ctx.event().date, "EEEE, d MMMM, yyyy"), " . ", \u0275\u0275pipeBind2(76, 54, ctx.event().date, ctx.time_format()), " - ", \u0275\u0275pipeBind2(77, 57, ctx.event().date + ctx.event().duration * 60 * 1e3, ctx.time_format()), " ");
        \u0275\u0275advance(9);
        \u0275\u0275conditional(ctx.is_onsite() && ctx.has_space() ? 83 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_onsite() && !ctx.has_space() ? 84 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_online() ? 85 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(92, 60, "CALENDAR_EVENT.GROUP_ATTENDEES", \u0275\u0275pureFunction2(69, _c12, ctx.attendance(), ctx.attendees())), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(95, 63, "CALENDAR_EVENT.GROUP_ABOUT"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(98, 65, ctx.body()), \u0275\u0275sanitizeHtml);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.raw_description() ? 99 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.level() ? 101 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_attendees() ? 102 : -1);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      AttendeeListComponent,
      InteractiveMapComponent,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AuthenticatedImageDirective,
      DatePipe,
      TranslatePipe,
      SanitizePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GroupEventDetailsModalComponent, [{
    type: Component,
    args: [{ selector: `group-event-details-modal`, template: `
        <div
            class="relative max-h-[80vh] w-3xl max-w-[calc(100vw-1rem)] overflow-hidden"
        >
            <div
                class="bg-base-200 relative flex h-52 w-full items-center justify-between overflow-hidden"
            >
                @if (event().extension_data?.images?.length) {
                    <img
                        auth
                        [source]="event().extension_data?.images[0]"
                        class="absolute top-1/2 left-1/2 min-h-full min-w-full -translate-x-1/2 -translate-y-1/2 object-cover"
                    />
                }
            </div>

            @if (featured()) {
                <div
                    class="bg-info text-info-content absolute top-0 left-0 flex items-center space-x-2 rounded-br py-2 pr-4 pl-2 text-sm"
                >
                    <icon class="text-base">star</icon>
                    <div class="uppercase">
                        {{ 'CALENDAR_EVENT.GROUP_FEATURED' | translate }}
                    </div>
                </div>
            }
            @if (!is_limited()) {
                <button
                    icon
                    mat-dialog-close
                    class="absolute top-1 right-1 overflow-hidden"
                >
                    <div
                        class="bg-base-100 absolute inset-0 z-0 opacity-30"
                    ></div>
                    <icon class="z-10">close</icon>
                </button>
            }
            <div
                class="border-base-200 flex items-center justify-between border-b px-8 py-4"
            >
                <h3 class="text-left text-xl">
                    {{ event().title }}
                </h3>
                <div class="flex items-center space-x-2">
                    @if (!concierge()) {
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_interested()"
                            [class.text-base-content]="!is_interested()"
                            [class.opacity-30]="!is_interested()"
                            [class.bg-success]="is_interested()"
                            [class.text-success-content]="is_interested()"
                            [class.opacity-100]="is_interested()"
                        >
                            <icon>star</icon>
                            <div class="pr-2">
                                {{
                                    (is_interested()
                                        ? 'CALENDAR_EVENT.GROUP_INTERESTED'
                                        : 'CALENDAR_EVENT.GROUP_NOT_INTERESTED'
                                    ) | translate
                                }}
                            </div>
                        </div>
                        <div
                            btn
                            class="flex h-10 items-center space-x-2 rounded-sm px-4"
                            [class.bg-base-200]="!is_going()"
                            [class.text-base-content]="!is_going()"
                            [class.opacity-30]="!is_going()"
                            [class.bg-success]="is_going()"
                            [class.text-success-content]="is_going()"
                            [class.opacity-100]="is_going()"
                        >
                            <icon>help</icon>
                            <div class="pr-2">
                                {{
                                    (is_going()
                                        ? 'CALENDAR_EVENT.GROUP_GOING'
                                        : 'CALENDAR_EVENT.GROUP_NOT_GOING'
                                    ) | translate
                                }}
                            </div>
                        </div>
                    }
                    <button
                        btn
                        matRipple
                        class="clear bg-base-200 text-base-content w-11"
                        [disabled]="event().state === 'done'"
                        [matMenuTriggerFor]="
                            concierge() ? concierge_menu : menu
                        "
                    >
                        <icon class="text-2xl">more_horiz</icon>
                    </button>
                    <mat-menu #concierge_menu="matMenu">
                        <button mat-menu-item [disabled]="true">
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">
                                    confirmation_number
                                </icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_PROMOTE'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            (click)="edit ? edit(event()) : ''"
                            mat-dialog-close
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">edit</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.ACTION_EDIT' | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        <button
                            mat-menu-item
                            [disabled]="!public_event_link()"
                            (click)="copyPublicEventLink()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon class="text-2xl">content_copy</icon>
                                <div class="mr-2">
                                    {{
                                        'CALENDAR_EVENT.GROUP_COPY_URL'
                                            | translate
                                    }}
                                </div>
                            </div>
                        </button>
                        @if (event().state !== 'done') {
                            <button
                                mat-menu-item
                                (click)="remove(event(), false)"
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-error text-2xl">
                                        delete
                                    </icon>
                                    <div class="mr-2">
                                        {{
                                            'CALENDAR_EVENT.GROUP_DELETE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        }
                    </mat-menu>
                    <mat-menu #menu="matMenu">
                        <button
                            mat-menu-item
                            class="flex items-center space-x-2"
                            (click)="toggleInterest()"
                        >
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_interested()">
                                    star
                                </icon>
                                <span>
                                    {{
                                        (is_interested()
                                            ? 'CALENDAR_EVENT.GROUP_INTEREST_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_INTEREST_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                        <button mat-menu-item (click)="toggleAttendance()">
                            <div class="flex items-center space-x-2">
                                <icon [class.text-error]="is_going()">
                                    help
                                </icon>
                                <span>
                                    {{
                                        (is_going()
                                            ? 'CALENDAR_EVENT.GROUP_GOING_REMOVE'
                                            : 'CALENDAR_EVENT.GROUP_GOING_ADD'
                                        ) | translate
                                    }}
                                </span>
                            </div>
                        </button>
                    </mat-menu>
                </div>
            </div>
            <div
                class="flex max-h-[calc(80vh-18rem)] flex-1 space-x-6 overflow-x-hidden overflow-y-auto p-8"
            >
                <div class="flex w-1/3 flex-1 flex-col space-y-2">
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_HOST'
                                    | translate
                                        : {
                                              name:
                                                  event().organiser?.name ||
                                                  event().host,
                                          }
                            }}
                        </div>
                    </div>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_WHEN_WHERE' | translate }}
                    </h3>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>calendar_today</icon>
                        </div>
                        <div class="flex flex-col">
                            <div class="text-sm">
                                {{
                                    'CALENDAR_EVENT.GROUP_DATE_TIME' | translate
                                }}
                            </div>
                            <div class="text-sm opacity-30">
                                {{ event().date | date: 'EEEE, d MMMM, yyyy' }}
                                . {{ event().date | date: time_format() }} -
                                {{
                                    event().date + event().duration * 60 * 1000
                                        | date: time_format()
                                }}
                            </div>
                        </div>
                    </div>
                    <div class="flex items-center space-x-4">
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>place</icon>
                        </div>
                        <div class="flex flex-col text-sm">
                            @if (is_onsite() && has_space()) {
                                <div>
                                    {{ space().display_name }}
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
                            @if (is_online()) {
                                <div class="opacity-30">
                                    {{
                                        (is_onsite()
                                            ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                            : 'CALENDAR_EVENT.GROUP_REMOTE'
                                        ) | translate
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <button
                        matRipple
                        (click)="show_attendees.set(!is_limited() && true)"
                        class="flex min-h-12 items-center space-x-4 rounded-sm"
                    >
                        <div
                            class="bg-base-200 flex h-10 w-10 items-center justify-center rounded-full"
                        >
                            <icon>person</icon>
                        </div>
                        <div>
                            {{
                                'CALENDAR_EVENT.GROUP_ATTENDEES'
                                    | translate
                                        : {
                                              going: attendance(),
                                              interested: attendees(),
                                          }
                            }}
                        </div>
                    </button>
                    <h3 class="pt-4 font-medium">
                        {{ 'CALENDAR_EVENT.GROUP_ABOUT' | translate }}
                    </h3>
                    <div class="pb-4 text-sm">
                        <span
                            event-details
                            [innerHTML]="body() | sanitize"
                        ></span>
                        @if (!raw_description()) {
                            <span class="opacity-30">
                                {{
                                    'CALENDAR_EVENT.GROUP_NO_DESCRIPTION'
                                        | translate
                                }}
                            </span>
                        }
                    </div>
                </div>
                <div>
                    @if (level()) {
                        <div class="flex w-[20rem]">
                            <div class="border-base-300 w-full border">
                                <button
                                    matRipple
                                    class="bg-base-200 relative h-40 w-full"
                                    (click)="viewLocation()"
                                >
                                    @if (!showing_map()) {
                                        <interactive-map
                                            [src]="level().map_id"
                                            [features]="features()"
                                            [styles]="styles()"
                                        ></interactive-map>
                                    }
                                </button>
                                <div class="space-y-2 p-4">
                                    @if (is_onsite() && has_space()) {
                                        <div>
                                            {{ space().display_name }}
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
                                    <div class="mt-0! text-sm opacity-30">
                                        @if (building() && level()) {
                                            <span>
                                                {{
                                                    building().display_name ||
                                                        building().name
                                                }},
                                                {{
                                                    level().display_name ||
                                                        level().name
                                                }}
                                            </span>
                                        }
                                        @if (!building() || !level()) {
                                            <span class="opacity-30">
                                                {{
                                                    'CALENDAR_EVENT.GROUP_NO_LOCATION'
                                                        | translate
                                                }}
                                            </span>
                                        }
                                    </div>
                                    @if (is_online()) {
                                        <a
                                            class="mt-4 opacity-30"
                                            [class.underline]="
                                                event().meeting_url
                                            "
                                            [href]="event().meeting_url"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {{
                                                (is_onsite()
                                                    ? 'CALENDAR_EVENT.GROUP_BOTH_LOCATIONS'
                                                    : 'CALENDAR_EVENT.GROUP_REMOTE'
                                                ) | translate
                                            }}
                                        </a>
                                    }
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
        @if (show_attendees()) {
            <div class="absolute inset-0 z-50">
                <button
                    class="bg-base-content absolute inset-0 opacity-60"
                    (click)="show_attendees.set(false)"
                ></button>
                <div
                    class="absolute inset-y-8 left-1/2 w-[24rem] -translate-x-1/2 overflow-hidden rounded-sm shadow-sm"
                >
                    <attendee-list
                        [show_host]="false"
                        [list]="event().attendees"
                        [host]="event().host"
                        [show_host]="false"
                        (click)="show_attendees.set(false)"
                    ></attendee-list>
                </div>
            </div>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      AttendeeListComponent,
      InteractiveMapComponent,
      SanitizePipe,
      MatMenuModule,
      MatDialogModule,
      AuthenticatedImageDirective
    ] }]
  }], null, { event: [{ type: Input, args: [{ isSignal: true, alias: "event", required: false }] }, { type: Output, args: ["eventChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(GroupEventDetailsModalComponent, { className: "GroupEventDetailsModalComponent", filePath: "libs/events/src/lib/group-event-details-modal.component.ts", lineNumber: 477 });
})();

// libs/bookings/src/lib/desk-settings-modal.component.ts
function DeskSettingsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "div", 2);
    \u0275\u0275text(2, "Desk Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 3);
    \u0275\u0275text(4, " Set your desk height for the best experience ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 4)(6, "label");
    \u0275\u0275text(7, "Presets");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 5)(9, "mat-form-field", 6)(10, "mat-select", 7);
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_mat_select_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setPreset($event));
    });
    \u0275\u0275elementStart(11, "mat-option", 8);
    \u0275\u0275text(12, "None");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(13, "mat-option", 9);
    \u0275\u0275text(14, "Standing");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 10);
    \u0275\u0275text(16, "Seated");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "button", 11);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_17_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets.set(true));
    });
    \u0275\u0275elementStart(18, "icon");
    \u0275\u0275text(19, "edit");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "label");
    \u0275\u0275text(21, "Current Height");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "div", 12)(23, "mat-slider", 13)(24, "input", 14);
    \u0275\u0275listener("ngModelChange", function DeskSettingsModalComponent_Conditional_0_Template_input_ngModelChange_24_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateHeight($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(25, "div", 15);
    \u0275\u0275text(26);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 16);
    \u0275\u0275listener("click", function DeskSettingsModalComponent_Conditional_0_Template_button_click_27_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDeskHeight());
    });
    \u0275\u0275text(28, " Apply Settings ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(29, "button", 17)(30, "icon");
    \u0275\u0275text(31, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(10);
    \u0275\u0275property("ngModel", ctx_r1.preset());
    \u0275\u0275control();
    \u0275\u0275advance(13);
    \u0275\u0275property("displayWith", ctx_r1.formatLabel);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.height());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.height().toFixed(1), "cm ");
  }
}
function DeskSettingsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "desk-height-presets", 18);
    \u0275\u0275listener("close", function DeskSettingsModalComponent_Conditional_1_Template_desk_height_presets_close_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit_presets.set(false));
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("show_close", true);
  }
}
var DeskSettingsModalComponent = class _DeskSettingsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._dialog_ref = inject(MatDialogRef);
    this.desk_id = this._data.id;
    this.edit_presets = signal(
      false,
      ...ngDevMode ? [{ debugName: "edit_presets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.preset = signal(
      null,
      ...ngDevMode ? [{ debugName: "preset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.height = signal(
      71,
      ...ngDevMode ? [{ debugName: "height" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._sitting_height = this._settings.signal("desk_sitting_height", 71, true);
    this._standing_height = this._settings.signal("desk_standing_height", 102, true);
  }
  ngOnInit() {
    const sitting_height = this._sitting_height();
    const standing_height = this._standing_height();
    if (!sitting_height && !standing_height) {
      this.edit_presets.set(true);
    }
    const last_height = parseInt(localStorage.getItem("PLACEOS.last_desk_height"), 10);
    this.height.set(last_height || sitting_height || 71);
    if (this.height() === sitting_height) {
      this.preset.set("sitting");
    } else if (this.height() === standing_height) {
      this.preset.set("standing");
    }
  }
  updatePreset(new_height) {
    const sitting_height = this._sitting_height() || 71;
    const standing_height = this._standing_height() || 102;
    if (new_height === sitting_height) {
      this.preset.set("sitting");
    } else if (new_height === standing_height) {
      this.preset.set("standing");
    } else {
      this.preset.set(null);
    }
  }
  updateHeight(new_height) {
    this.height.set(new_height);
    this.updatePreset(new_height);
  }
  setPreset(value) {
    this.preset.set(value || null);
    switch (value) {
      case "standing":
        this.height.set(this._standing_height() || 102);
        break;
      case "sitting":
        this.height.set(this._sitting_height() || 71);
        break;
      default:
        this.height.set(70);
        break;
    }
  }
  async setDeskHeight() {
    const mod = this._org.module("desks", "DeskControl");
    localStorage.setItem("PLACEOS.last_desk_height", `${this.height()}`);
    if (!mod)
      return this._dialog_ref.close();
    await mod.execute("set_desk_height", [this.desk_id, this.height()]).catch((_) => {
      notifyError("Error setting desk height." + _);
      throw _;
    });
    notifySuccess("Successfully set desk height");
    this._dialog_ref.close();
  }
  formatLabel(value) {
    return `${value.toFixed(1)}cm`;
  }
  static {
    this.\u0275fac = function DeskSettingsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskSettingsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskSettingsModalComponent, selectors: [["desk-settings-modal"]], decls: 2, vars: 1, consts: [[1, "bg-base-100", "relative", "w-[20rem]", "rounded-sm", "p-4", "shadow-sm"], [3, "show_close"], [1, "text-lg"], [1, "mb-4", "text-xs", "opacity-60"], [1, "mt-2", "mb-4", "flex", "flex-col"], [1, "flex", "items-center", "space-x-2", "pb-4"], ["appearance", "outline", 1, "no-subscript", "w-1/2", "flex-1"], ["placeholder", "No selected preset", 3, "ngModelChange", "ngModel"], ["value", ""], ["value", "standing"], ["value", "sitting"], ["icon", "", "matRipple", "", 1, "bg-secondary", "text-secondary-content", "h-12", "w-12", "rounded-sm", 3, "click"], [1, "flex", "items-center", "space-x-2"], ["min", "60", "max", "120", "step", "0.5", "discrete", "", 1, "flex-1", 3, "displayWith"], ["matSliderThumb", "", 3, "ngModelChange", "ngModel"], [1, "w-12", "text-right", "text-sm"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-2"], [3, "close", "show_close"]], template: function DeskSettingsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskSettingsModalComponent_Conditional_0_Template, 32, 4, "div", 0)(1, DeskSettingsModalComponent_Conditional_1_Template, 1, 1, "desk-height-presets", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.edit_presets() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatFormFieldModule,
      MatFormField,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatSliderModule,
      MatSlider,
      MatSliderThumb,
      MatRippleModule,
      MatRipple,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DeskHeightPresetsComponent
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskSettingsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-settings-modal", template: `
        @if (!edit_presets()) {
            <div
                class="bg-base-100 relative w-[20rem] rounded-sm p-4 shadow-sm"
            >
                <div class="text-lg">Desk Height</div>
                <div class="mb-4 text-xs opacity-60">
                    Set your desk height for the best experience
                </div>
                <div class="mt-2 mb-4 flex flex-col">
                    <label>Presets</label>
                    <div class="flex items-center space-x-2 pb-4">
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-1/2 flex-1"
                        >
                            <mat-select
                                placeholder="No selected preset"
                                [ngModel]="preset()"
                                (ngModelChange)="setPreset($event)"
                            >
                                <mat-option value="">None</mat-option>
                                <mat-option value="standing"
                                    >Standing</mat-option
                                >
                                <mat-option value="sitting">Seated</mat-option>
                            </mat-select>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            (click)="edit_presets.set(true)"
                            class="bg-secondary text-secondary-content h-12 w-12 rounded-sm"
                        >
                            <icon>edit</icon>
                        </button>
                    </div>
                    <label>Current Height</label>
                    <div class="flex items-center space-x-2">
                        <mat-slider
                            min="60"
                            max="120"
                            step="0.5"
                            discrete
                            class="flex-1"
                            [displayWith]="formatLabel"
                        >
                            <input
                                matSliderThumb
                                [ngModel]="height()"
                                (ngModelChange)="updateHeight($event)"
                            />
                        </mat-slider>
                        <div class="w-12 text-right text-sm">
                            {{ height().toFixed(1) }}cm
                        </div>
                    </div>
                </div>
                <button btn matRipple (click)="setDeskHeight()" class="w-full">
                    Apply Settings
                </button>
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 right-2"
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <desk-height-presets
                [show_close]="true"
                (close)="edit_presets.set(false)"
            />
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatFormFieldModule,
      MatSelectModule,
      MatSliderModule,
      MatRippleModule,
      FormsModule,
      DeskHeightPresetsComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskSettingsModalComponent, { className: "DeskSettingsModalComponent", filePath: "libs/bookings/src/lib/desk-settings-modal.component.ts", lineNumber: 112 });
})();

// libs/bookings/src/lib/booking-details-modal.component.ts
var _c06 = (a0) => ({ time: a0 });
var _c13 = () => ({ disable_pan: true, disable_zoom: true });
function BookingDetailsModalComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 3);
  }
}
function BookingDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "image-carousel", 25);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r0.booking()?.extension_data?.images);
  }
}
function BookingDetailsModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 6);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.visitor_display_name(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(1, 1, "COMMON.TYPE_CANCELLED"), " \xB7 ");
  }
}
function BookingDetailsModalComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 10);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.recurr_tooltip());
  }
}
function BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 31);
    \u0275\u0275text(1, "done");
    \u0275\u0275elementEnd();
  }
}
function BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 29);
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_1_Conditional_1_Template, 2, 0, "icon", 31);
    \u0275\u0275elementStart(2, "div");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.booking().checked_in ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("mr-4", ctx_r0.booking().checked_in);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 4, ctx_r0.booking().checked_in ? "COMMON.CHECKED_IN" : "COMMON.CHECK_IN"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 30);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r0.toggleCheckedIn());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_1_Template, 5, 6, "div", 29)(2, BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Conditional_2_Template, 1, 1, "mat-spinner", 30);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-success", ctx_r0.booking().checked_in)("text-success-content", ctx_r0.booking().checked_in);
    \u0275\u0275property("disabled", ctx_r0.checking_in());
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.checking_in() ? 1 : 2);
  }
}
function BookingDetailsModalComponent_Conditional_13_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookingDetailsModalComponent_Conditional_13_Conditional_1_Conditional_0_Template, 3, 6, "button", 27);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(!ctx_r0.booking().checked_out_at && !ctx_r0.checked_out() && !ctx_r0.auto_checkin() && (ctx_r0.booking().state === "upcoming" || ctx_r0.booking().state === "started" || ctx_r0.booking().state === "in_progress") && ctx_r0.booking().status !== "declined" ? 0 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_13_Conditional_1_Template, 1, 1);
    \u0275\u0275elementStart(2, "button", 26)(3, "icon");
    \u0275\u0275text(4, "more_horiz");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    const menu_r3 = \u0275\u0275reference(46);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.can_checkin() && !ctx_r0.is_cancelled() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matMenuTriggerFor", menu_r3);
  }
}
function BookingDetailsModalComponent_Conditional_34_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.visitor_email_label(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(2, BookingDetailsModalComponent_Conditional_34_Conditional_2_Template, 2, 1, "div", 32);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.visitor_display_name());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.visitor_email_label() ? 2 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource_details_label(), " ");
  }
}
function BookingDetailsModalComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 33);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r0.building()?.display_name || ctx_r0.building()?.name, " ", ctx_r0.building()?.address ? ", " + ctx_r0.building().address : "", " ");
  }
}
function BookingDetailsModalComponent_Conditional_37_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "user");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "BOOKINGS.BOOKED_FOR_LABEL"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, ctx_r0.booking().user_email))?.name || ctx_r0.booking().user_name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_38_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "icon", 34);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275text(3, "edit_calendar");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "user");
    \u0275\u0275pipe(7, "async");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 2, "COMMON.BOOKED_BY"));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 6, \u0275\u0275pipeBind1(6, 4, ctx_r0.booking().booked_by_email))?.name || ctx_r0.booking().booked_by_name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_39_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "icon", 39);
    \u0275\u0275text(2, "category");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(group_r4.resource_type);
  }
}
function BookingDetailsModalComponent_Conditional_39_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 37)(1, "icon", 40);
    \u0275\u0275text(2, "tag");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 41);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", group_r4.name, " ");
  }
}
function BookingDetailsModalComponent_Conditional_39_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 35);
    \u0275\u0275text(2, " Group Booking ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 36)(4, "div", 37)(5, "icon", 38);
    \u0275\u0275text(6, "groups");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, BookingDetailsModalComponent_Conditional_39_Conditional_9_Template, 5, 1, "div", 37);
    \u0275\u0275conditionalCreate(10, BookingDetailsModalComponent_Conditional_39_Conditional_10_Template, 5, 1, "div", 37);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const group_r4 = ctx;
    \u0275\u0275advance(8);
    \u0275\u0275textInterpolate1("", group_r4.size, " people");
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r4.resource_type ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(group_r4.name ? 10 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_40_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 51)(1, "div", 52)(2, "span", 46);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r7 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r7.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r7.quantity, " ");
  }
}
function BookingDetailsModalComponent_Conditional_40_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 43)(1, "button", 44);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_40_For_6_Template_button_click_1_listener() {
      const request_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleRequest(request_r6.id));
    });
    \u0275\u0275elementStart(2, "div", 45)(3, "div", 46);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 47)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 48)(11, "icon", 49);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 50);
    \u0275\u0275repeaterCreate(14, BookingDetailsModalComponent_Conditional_40_For_6_For_15_Template, 6, 2, "div", 51, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r6 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 21, "BOOKINGS.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(24, _c06, \u0275\u0275pipeBind2(5, 18, request_r6.deliver_at, "MMM d, " + ctx_r0.time_format()))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r6.state === "approved")("text-success-content", request_r6.state === "approved")("bg-warning", request_r6.state !== "approved" && request_r6.state !== "rejected")("text-warning-content", request_r6.state !== "approved" && request_r6.state !== "rejected")("bg-error", request_r6.state === "rejected")("text-error-content", request_r6.state === "rejected");
    \u0275\u0275property("matTooltip", request_r6.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r6.state === "approved" ? "done" : request_r6.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.showRequest(request_r6.id) ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r0.showRequest(request_r6.id));
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r6.items);
  }
}
function BookingDetailsModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19)(1, "h3", 35);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 42);
    \u0275\u0275repeaterCreate(5, BookingDetailsModalComponent_Conditional_40_For_6_Template, 16, 26, "div", 43, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ASSETS"), " (", ctx_r0.booking().valid_assets?.length || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r0.booking().valid_assets);
  }
}
function BookingDetailsModalComponent_Conditional_41_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 55);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("src", ctx_r0.level()?.map_id)("features", ctx_r0.features())("options", \u0275\u0275pureFunction0(3, _c13));
  }
}
function BookingDetailsModalComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 54);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_41_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.viewLocation());
    });
    \u0275\u0275conditionalCreate(1, BookingDetailsModalComponent_Conditional_41_Conditional_1_Template, 1, 4, "interactive-map", 55);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.hide_map() ? 1 : -1);
  }
}
function BookingDetailsModalComponent_Conditional_47_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 56);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_47_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r9);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.edit(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon");
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_EDIT"));
  }
}
function BookingDetailsModalComponent_Conditional_48_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_48_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setDeskHeight());
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon", 59);
    \u0275\u0275text(3, " height ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_SET_DESK_HEIGHT"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    const _r11 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_49_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r11);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), false));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon", 60);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE"));
  }
}
function BookingDetailsModalComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_50_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r12);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.group_parent_booking(), false));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon", 60);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5, "Delete group");
    \u0275\u0275elementEnd()()();
  }
}
function BookingDetailsModalComponent_Conditional_51_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_51_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.remove(ctx_r0.booking(), true));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon", 60);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_DELETE_SERIES"), " ");
  }
}
function BookingDetailsModalComponent_Conditional_52_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 58);
    \u0275\u0275listener("click", function BookingDetailsModalComponent_Conditional_52_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.end(ctx_r0.booking()));
    });
    \u0275\u0275elementStart(1, "div", 57)(2, "icon", 60);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 1, "BOOKINGS.ACTION_END"));
  }
}
function canEditBooking(booking) {
  const is_visitor = booking.booking_type === "visitor";
  const visitor_edit_allowed = is_visitor && settingSignal("visitors.allow_editing", false)();
  const is_parking = booking.booking_type === "parking";
  const features = settingSignal("features", [])();
  const parking_allocated_edit_blocked = is_parking && !!booking.asset_id && !features.includes("parking");
  return booking.status !== "cancelled" && !booking.is_done && !booking.checked_in && (!is_visitor || visitor_edit_allowed) && !parking_allocated_edit_blocked;
}
var BookingDetailsModalComponent = class _BookingDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.hide_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checked_out = signal(
      false,
      ...ngDevMode ? [{ debugName: "checked_out" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.checking_in = signal(
      false,
      ...ngDevMode ? [{ debugName: "checking_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booking = signal(
      this._data.booking,
      ...ngDevMode ? [{ debugName: "booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_user = userSignal();
    this.edit = this._data.edit_fn;
    this.end = this._data.end_fn;
    this._show_request = signal(
      {},
      ...ngDevMode ? [{ debugName: "_show_request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => [
        {
          location: this.booking()?.extension_data?.map_id || this.booking()?.asset_id,
          content: MapPinComponent
        }
      ],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_assets = computed(
      () => !!this.booking()?.valid_assets.length,
      ...ngDevMode ? [{ debugName: "has_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = computed(
      () => this._org.levelWithID(this.booking()?.zones || []),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level_or_building = computed(
      () => this.level() || this.building(),
      ...ngDevMode ? [{ debugName: "level_or_building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_location = computed(
      () => {
        const location_name = this.level_or_building()?.display_name || this.level_or_building()?.name || "";
        const resource_name = this.booking().asset_name || this.booking().location || this.booking().asset_id;
        return location_name ? `${location_name}, ${resource_name}` : resource_name;
      },
      ...ngDevMode ? [{ debugName: "resource_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._use_region = this._settings.signal("use_region", false);
    this.building = computed(
      () => {
        const zones = this.booking()?.zones || [];
        const level = this.level();
        const building = this._org.buildings.find((bld) => zones.includes(bld.id) || bld.id === level?.parent_id);
        if (this._use_region()) {
          const region = this._org.regions.find((region2) => zones.includes(region2.id) || region2.id === building?.parent_id);
          if (region)
            return region;
        }
        return building;
      },
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_cancelled = computed(
      () => this.booking().status === "cancelled",
      ...ngDevMode ? [{ debugName: "is_cancelled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_actions = computed(
      () => !this.booking().is_done && (!this.is_cancelled() || this.can_manage_group()),
      ...ngDevMode ? [{ debugName: "show_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => canEditBooking(this.booking()),
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_cancel = computed(
      () => !this.is_cancelled() && !this.booking().is_done && !this.booking().checked_in,
      ...ngDevMode ? [{ debugName: "can_cancel" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_checkin = computed(
      () => {
        const booking = this.booking();
        return !(booking.booking_type === "parking" && booking.asset_id.startsWith("unallocated")) && !settingSignal(`${(booking.type || "booking") + "s"}.hide_checkin`)() && !settingSignal(`${booking.type || "bookings"}.hide_checkin`)() && !settingSignal("bookings.hide_checkin")();
      },
      ...ngDevMode ? [{ debugName: "can_checkin" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_series_delete = computed(
      () => {
        const is_assigned = this.booking().extension_data.is_assigned;
        const check_list = [
          `${this.booking()?.type}s`,
          this.booking()?.type,
          "bookings"
        ];
        const key = is_assigned ? `app.{v}.allow_assigned_series_delete` : `app.{v}.allow_series_delete`;
        for (const check of check_list) {
          const check_key = key.replace("{v}", check);
          const value = this._settings.get(check_key);
          if (value != null)
            return !!value;
        }
        return !is_assigned && this.booking().booking_type !== "parking";
      },
      ...ngDevMode ? [{ debugName: "allow_series_delete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.auto_checkin = settingSignal(`${this.booking()?.type || "bookings"}.auto_checkin`, false);
    this.show_waitlist = this._settings.signal("parking.show_waitlist", true);
    this._hide_selected_parking_space = this._settings.signal("parking.hide_selected_space", false);
    this.hide_selected_parking_space = computed(
      () => this.booking()?.booking_type === "parking" && this._hide_selected_parking_space(),
      ...ngDevMode ? [{ debugName: "hide_selected_parking_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_checked_in = computed(
      () => this.booking().checked_in,
      ...ngDevMode ? [{ debugName: "is_checked_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desk_height_enabled = computed(
      () => this.booking()?.type === "desk" && settingSignal("desks.height_enabled")(),
      ...ngDevMode ? [{ debugName: "desk_height_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_visitor = computed(
      () => this.booking()?.booking_type === "visitor",
      ...ngDevMode ? [{ debugName: "is_visitor" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_title = computed(
      () => {
        const booking = this.booking();
        if (!booking)
          return "";
        return booking.title || booking.asset_name || booking.asset_id;
      },
      ...ngDevMode ? [{ debugName: "display_title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_details_label = computed(
      () => {
        const level_name = this.level()?.display_name || this.level()?.name || "";
        if (this.hide_selected_parking_space()) {
          return level_name || i18n("RESOURCE.PARKING");
        }
        const resource_name = this.booking()?.asset_name || this.booking()?.asset_id || "";
        return [level_name, resource_name].filter((_) => !!_).join(", ");
      },
      ...ngDevMode ? [{ debugName: "resource_details_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_display_name = computed(
      () => visitorDisplayNameFor(this.booking()) || "Visitor",
      ...ngDevMode ? [{ debugName: "visitor_display_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_reason = computed(
      () => {
        const booking = this.booking();
        if (!booking || !this.is_visitor())
          return "";
        const visitor_name = (visitorDisplayNameFor(booking) || "Visitor").toLowerCase();
        const reason = `${booking.title || booking.description || ""}`.trim();
        if (!reason.length)
          return "";
        return reason.toLowerCase() === visitor_name ? "" : reason;
      },
      ...ngDevMode ? [{ debugName: "visitor_reason" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitor_email_label = computed(
      () => {
        const booking = this.booking();
        const asset_id = `${booking?.asset_id || ""}`.trim();
        if (!asset_id || !this._looksLikeEmail(asset_id))
          return "";
        const display_name = visitorDisplayNameFor(booking) || "Visitor";
        return display_name.toLowerCase() === asset_id.toLowerCase() ? "" : asset_id;
      },
      ...ngDevMode ? [{ debugName: "visitor_email_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_parent_booking = computed(
      () => {
        const booking = this.booking();
        if (booking.booking_type === "group")
          return booking;
        const parent = booking.linked_parent_booking;
        if (parent?.booking_type !== "group")
          return null;
        return new Booking(__spreadProps(__spreadValues({}, parent), {
          booking_type: "group",
          type: "group",
          date: parent.date || booking.date,
          duration: parent.duration || booking.duration,
          user_email: parent.user_email || booking.user_email,
          booked_by_email: parent.booked_by_email || booking.booked_by_email
        }));
      },
      ...ngDevMode ? [{ debugName: "group_parent_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_manage_group = computed(
      () => {
        const group_booking = this.group_parent_booking();
        if (!group_booking || group_booking.is_done)
          return false;
        const current_email = this.current_user()?.email?.toLowerCase();
        const host_emails = [
          group_booking.user_email,
          group_booking.booked_by_email
        ].map((_) => _?.toLowerCase());
        return !!current_email && host_emails.includes(current_email);
      },
      ...ngDevMode ? [{ debugName: "can_manage_group" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_details = computed(
      () => {
        const booking = this.booking();
        const group_booking = this.group_parent_booking();
        const extension_data = group_booking?.extension_data || booking.extension_data || {};
        const group_members = extension_data.group_members || [];
        const linked_children = (booking.linked_bookings || []).filter((_) => _.parent_id === group_booking?.id);
        const size = group_members.length || linked_children.length;
        if (!group_booking && !size)
          return null;
        return {
          name: extension_data.group || booking.group,
          resource_type: extension_data.group_resource_type || "",
          size
        };
      },
      ...ngDevMode ? [{ debugName: "group_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.is_in_progress = computed(
      () => {
        if (this.is_cancelled())
          return false;
        const ts = Date.now();
        const start = this.booking()?.booking_start * 1e3;
        const end = this.booking()?.booking_end * 1e3;
        if (this.booking()?.all_day)
          return start <= ts;
        return start <= ts && ts <= end;
      },
      ...ngDevMode ? [{ debugName: "is_in_progress" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = this._settings.time_format_signal;
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
    this.booking_status = computed(
      () => {
        if (this.is_cancelled())
          return "error";
        if (this.booking()?.is_done)
          return "neutral";
        if (this.booking()?.status === "approved")
          return "success";
        if (this.booking()?.status === "declined")
          return "error";
        if (this.booking()?.status === "tentative") {
          if (this._parking_status() === "waitlist" && this.show_waitlist())
            return "info";
          if (this._parking_status() === "approval_required")
            return "approval";
          return "warning";
        }
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "booking_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period = computed(
      () => {
        if (this.booking()?.is_all_day)
          return i18n("COMMON.ALL_DAY");
        const start = this.booking()?.date || Date.now();
        const duration = this.booking()?.duration || 60;
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
    this.recurr_tooltip = computed(
      () => formatRecurrence(fromBookingRecurrence(this.booking()), this.booking()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP"),
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(booking, remove_series) {
    if (booking?.status === "cancelled" || booking?.is_done || booking?.checked_in && !remove_series)
      return;
    if (remove_series === void 0)
      this._data.remove_fn(booking);
    else
      this._data.remove_fn(booking, remove_series);
  }
  showRequest(id) {
    return this._show_request()[id];
  }
  toggleRequest(id) {
    this._show_request.update((value) => __spreadProps(__spreadValues({}, value), {
      [id]: !value[id]
    }));
  }
  async toggleCheckedIn() {
    const bkn = this.booking();
    if (bkn.checked_in) {
      const resource_name = bkn.booking_type === "parking" ? "parking space" : bkn.booking_type;
      const response = await openConfirmModal({
        title: i18n("COMMON.CHECK_OUT"),
        content: `You are currently checked in.<br/>Would you like to check out of your ${resource_name} now?<br/>This will make the ${resource_name} available for others to book.`,
        confirm_text: i18n("COMMON.CHECK_OUT"),
        icon: { content: "logout" }
      }, this._dialog);
      if (response.reason !== "done")
        return;
      response.close();
    }
    this.checking_in.set(true);
    const updated_booking = await setBookingCheckedIn(bkn, !bkn.checked_in).catch((_) => {
      notifyError(i18n(bkn.checked_in ? "BOOKINGS.CHECK_OUT_ERROR" : "BOOKINGS.CHECK_IN_ERROR"));
      this.checking_in.set(false);
      throw _;
    });
    this.booking.set(updated_booking);
    this.checked_out.set(!updated_booking.checked_in);
    notifySuccess(i18n(updated_booking.checked_in ? "BOOKINGS.CHECK_IN_SUCCESS" : "BOOKINGS.CHECK_OUT_SUCCESS"));
    this._data.refresh_fn?.();
    this.checking_in.set(false);
  }
  status(id) {
    const booking = this.booking().linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: {
        item: {
          id: this.booking().asset_id,
          name: this.booking().asset_name,
          map_id: this.booking().extension_data.map_id || this.booking().asset_id,
          level: this.level
        }
      }
    });
    ref.afterClosed().subscribe(() => this.hide_map.set(false));
  }
  setDeskHeight() {
    this._dialog.open(DeskSettingsModalComponent, {
      data: {
        id: this.booking().asset_ids[0] || this.booking().asset_id
      }
    });
  }
  _looksLikeEmail(value) {
    return !!value && value.includes("@");
  }
  static {
    this.\u0275fac = function BookingDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingDetailsModalComponent, selectors: [["booking-details-modal"]], decls: 53, vars: 33, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "px-3", "text-sm", "opacity-70"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-4", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], ["matTooltip", "Date"], ["matTooltip", "Time"], ["matTooltip", "Level and Resource"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "left-2"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", ""], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "min-w-40", "flex-1", "border-none", 3, "bg-success", "text-success-content", "disabled"], ["btn", "", "matRipple", "", 1, "h-10", "min-w-40", "flex-1", "border-none", 3, "click", "disabled"], [1, "flex", "items-center", "justify-center", "gap-1"], [1, "mx-auto", 3, "diameter"], [1, "text-xl"], [1, "text-xs", "opacity-60"], ["matTooltip", "Location"], [3, "matTooltip"], [1, "mx-3", "py-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2", "px-3", "text-sm"], [1, "flex", "items-center", "space-x-2"], ["matTooltip", "Group Size"], ["matTooltip", "Resource Type"], ["matTooltip", "Group Reference"], [1, "break-all"], [1, "flex", "flex-col", "space-y-2"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "text-sm"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full"], [1, "text-2xl"], [1, "contract-expand", "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:my-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click"], [1, "flex", "items-center", "space-x-2", "text-base"], ["mat-menu-item", "", 3, "click"], ["className", "material-symbols-rounded"], [1, "text-error"]], template: function BookingDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2);
        \u0275\u0275conditionalCreate(2, BookingDetailsModalComponent_Conditional_2_Template, 1, 0, "div", 3);
        \u0275\u0275conditionalCreate(3, BookingDetailsModalComponent_Conditional_3_Template, 2, 1, "div", 4);
        \u0275\u0275elementStart(4, "h3", 5);
        \u0275\u0275text(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, BookingDetailsModalComponent_Conditional_6_Template, 2, 1, "p", 6);
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "status-pill", 9);
        \u0275\u0275conditionalCreate(10, BookingDetailsModalComponent_Conditional_10_Template, 2, 3);
        \u0275\u0275text(11);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(12, BookingDetailsModalComponent_Conditional_12_Template, 2, 1, "icon", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, BookingDetailsModalComponent_Conditional_13_Template, 5, 2, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "div", 12)(15, "div", 13)(16, "h3", 14);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "div", 15)(20, "icon", 16);
        \u0275\u0275text(21, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(22, "div");
        \u0275\u0275text(23);
        \u0275\u0275pipe(24, "date");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(25, "div", 15)(26, "icon", 17);
        \u0275\u0275text(27, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(28, "div");
        \u0275\u0275text(29);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(30, "div", 15)(31, "icon", 18);
        \u0275\u0275text(32);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(33, "div");
        \u0275\u0275conditionalCreate(34, BookingDetailsModalComponent_Conditional_34_Template, 3, 2)(35, BookingDetailsModalComponent_Conditional_35_Template, 1, 1);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(36, BookingDetailsModalComponent_Conditional_36_Template, 5, 2, "div", 15);
        \u0275\u0275conditionalCreate(37, BookingDetailsModalComponent_Conditional_37_Template, 8, 8, "div", 15);
        \u0275\u0275conditionalCreate(38, BookingDetailsModalComponent_Conditional_38_Template, 8, 8, "div", 15);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(39, BookingDetailsModalComponent_Conditional_39_Template, 11, 3, "div", 19);
        \u0275\u0275conditionalCreate(40, BookingDetailsModalComponent_Conditional_40_Template, 7, 4, "div", 19);
        \u0275\u0275conditionalCreate(41, BookingDetailsModalComponent_Conditional_41_Template, 2, 1, "button", 20);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(42, "button", 21)(43, "icon");
        \u0275\u0275text(44, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(45, "mat-menu", 22, 0);
        \u0275\u0275conditionalCreate(47, BookingDetailsModalComponent_Conditional_47_Template, 7, 3, "button", 23);
        \u0275\u0275conditionalCreate(48, BookingDetailsModalComponent_Conditional_48_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(49, BookingDetailsModalComponent_Conditional_49_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(50, BookingDetailsModalComponent_Conditional_50_Template, 6, 0, "button", 24);
        \u0275\u0275conditionalCreate(51, BookingDetailsModalComponent_Conditional_51_Template, 7, 3, "button", 24);
        \u0275\u0275conditionalCreate(52, BookingDetailsModalComponent_Conditional_52_Template, 7, 3, "button", 24);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_19_0;
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.booking()?.extension_data?.images?.length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking()?.extension_data?.images?.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-4", !ctx.booking()?.extension_data?.images);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.display_title(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_visitor() ? 6 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275property("status", ctx.booking_status());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_cancelled() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.period(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking().instance ? 12 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_actions() ? 13 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 28, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(24, 30, ctx.booking().date, "EEEE, dd LLLL y"), " ");
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.is_visitor() ? "person" : "place");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_visitor() ? 34 : 35);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.is_visitor() ? 36 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.current_user()?.email !== ctx.booking().user_email ? 37 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.booking().booked_by_email !== ctx.booking().user_email ? 38 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional((tmp_19_0 = ctx.group_details()) ? 39 : -1, tmp_19_0);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.level()?.map_id && !ctx.hide_selected_parking_space() ? 41 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.can_edit() ? 47 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_checked_in() && ctx.desk_height_enabled() ? 48 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_cancel() ? 49 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_manage_group() ? 50 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.booking().is_done && !ctx.is_cancelled() && ctx.booking().instance && ctx.allow_series_delete() ? 51 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_in_progress() ? 52 : -1);
      }
    }, dependencies: [
      CommonModule,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatDialogClose,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      MatRipple,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      DatePipe,
      TranslatePipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "booking-details-modal", template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16"
            >
                @if (!booking()?.extension_data?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (booking()?.extension_data?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b"
                    >
                        <image-carousel
                            [images]="booking()?.extension_data?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!booking()?.extension_data?.images"
                >
                    {{ display_title() }}
                </h3>
                @if (is_visitor()) {
                    <p class="w-full px-3 text-sm opacity-70">
                        {{ visitor_display_name() }}
                    </p>
                }
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="booking_status()">
                            @if (is_cancelled()) {
                                {{ 'COMMON.TYPE_CANCELLED' | translate }} \xB7
                            }
                            {{ period() }}
                        </status-pill>
                        @if (booking().instance) {
                            <icon
                                class="text-2xl"
                                [matTooltip]="recurr_tooltip()"
                                >event_repeat</icon
                            >
                        }
                    </div>
                    @if (show_actions()) {
                        <div actions class="flex items-center space-x-2 px-2">
                            @if (can_checkin() && !is_cancelled()) {
                                @if (
                                    !booking().checked_out_at &&
                                    !checked_out() &&
                                    !auto_checkin() &&
                                    (booking().state === 'upcoming' ||
                                        booking().state === 'started' ||
                                        booking().state === 'in_progress') &&
                                    booking().status !== 'declined'
                                ) {
                                    <button
                                        btn
                                        matRipple
                                        class="h-10 min-w-40 flex-1 border-none"
                                        [class.bg-success]="
                                            booking().checked_in
                                        "
                                        [class.text-success-content]="
                                            booking().checked_in
                                        "
                                        [disabled]="checking_in()"
                                        (click)="toggleCheckedIn()"
                                    >
                                        @if (!checking_in()) {
                                            <div
                                                class="flex items-center justify-center gap-1"
                                            >
                                                @if (booking().checked_in) {
                                                    <icon class="text-xl"
                                                        >done</icon
                                                    >
                                                }
                                                <div
                                                    [class.mr-4]="
                                                        booking().checked_in
                                                    "
                                                >
                                                    {{
                                                        (booking().checked_in
                                                            ? 'COMMON.CHECKED_IN'
                                                            : 'COMMON.CHECK_IN'
                                                        ) | translate
                                                    }}
                                                </div>
                                            </div>
                                        } @else {
                                            <mat-spinner
                                                class="mx-auto"
                                                [diameter]="32"
                                            ></mat-spinner>
                                        }
                                    </button>
                                }
                            }
                            <button
                                icon
                                matRipple
                                [matMenuTriggerFor]="menu"
                                class="bg-secondary h-12 w-12 rounded-sm text-white"
                            >
                                <icon>more_horiz</icon>
                            </button>
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-4 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Date">event</icon>
                        <div>
                            {{ booking().date | date: 'EEEE, dd LLLL y' }}
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Time">schedule</icon>
                        <div>{{ period() }}</div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon matTooltip="Level and Resource">{{
                            is_visitor() ? 'person' : 'place'
                        }}</icon>
                        <div>
                            @if (is_visitor()) {
                                <div>{{ visitor_display_name() }}</div>
                                @if (visitor_email_label()) {
                                    <div class="text-xs opacity-60">
                                        {{ visitor_email_label() }}
                                    </div>
                                }
                            } @else {
                                {{ resource_details_label() }}
                            }
                        </div>
                    </div>
                    @if (is_visitor()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Location">place</icon>
                            <div>
                                {{
                                    building()?.display_name || building()?.name
                                }}
                                {{
                                    building()?.address
                                        ? ', ' + building().address
                                        : ''
                                }}
                            </div>
                        </div>
                    }
                    @if (current_user()?.email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon
                                [matTooltip]="
                                    'BOOKINGS.BOOKED_FOR_LABEL' | translate
                                "
                                >person</icon
                            >
                            <div>
                                {{
                                    (booking().user_email | user | async)
                                        ?.name || booking().user_name
                                }}
                            </div>
                        </div>
                    }
                    @if (booking().booked_by_email !== booking().user_email) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon [matTooltip]="'COMMON.BOOKED_BY' | translate"
                                >edit_calendar</icon
                            >
                            <div>
                                {{
                                    (booking().booked_by_email | user | async)
                                        ?.name || booking().booked_by_name
                                }}
                            </div>
                        </div>
                    }
                </div>
                @if (group_details(); as group) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            Group Booking
                        </h3>
                        <div class="flex flex-col space-y-2 px-3 text-sm">
                            <div class="flex items-center space-x-2">
                                <icon matTooltip="Group Size">groups</icon>
                                <div>{{ group.size }} people</div>
                            </div>
                            @if (group.resource_type) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Resource Type"
                                        >category</icon
                                    >
                                    <div>{{ group.resource_type }}</div>
                                </div>
                            }
                            @if (group.name) {
                                <div class="flex items-center space-x-2">
                                    <icon matTooltip="Group Reference"
                                        >tag</icon
                                    >
                                    <div class="break-all">
                                        {{ group.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 py-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                booking().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of booking().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'BOOKINGS.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    showRequest(request.id)
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="contract-expand divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [class.contract-collapsed]="
                                            !showRequest(request.id)
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                @if (level()?.map_id && !hide_selected_parking_space()) {
                    <button
                        map
                        class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:my-2 sm:h-48 sm:w-[16rem]"
                        (click)="viewLocation()"
                    >
                        @if (!hide_map()) {
                            <interactive-map
                                class="pointer-events-none"
                                [src]="level()?.map_id"
                                [features]="features()"
                                [options]="{
                                    disable_pan: true,
                                    disable_zoom: true,
                                }"
                            ></interactive-map>
                        }
                    </button>
                }
            </div>
            <button
                icon
                default
                matRipple
                mat-dialog-close
                class="absolute top-2 left-2"
            >
                <icon>close</icon>
            </button>
        </div>
        <mat-menu #menu="matMenu" xPosition="before">
            @if (can_edit()) {
                <button
                    mat-menu-item
                    mat-dialog-close
                    (click)="edit(booking())"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon>edit</icon>
                        <div>{{ 'BOOKINGS.ACTION_EDIT' | translate }}</div>
                    </div>
                </button>
            }
            @if (is_checked_in() && desk_height_enabled()) {
                <button mat-menu-item (click)="setDeskHeight()">
                    <div class="flex items-center space-x-2 text-base">
                        <icon className="material-symbols-rounded">
                            height
                        </icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_SET_DESK_HEIGHT' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (can_cancel()) {
                <button mat-menu-item (click)="remove(booking(), false)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_DELETE' | translate }}</div>
                    </div>
                </button>
            }
            @if (can_manage_group()) {
                <button
                    mat-menu-item
                    (click)="remove(group_parent_booking(), false)"
                >
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>Delete group</div>
                    </div>
                </button>
            }
            @if (
                !booking().is_done &&
                !is_cancelled() &&
                booking().instance &&
                allow_series_delete()
            ) {
                <button mat-menu-item (click)="remove(booking(), true)">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>
                            {{ 'BOOKINGS.ACTION_DELETE_SERIES' | translate }}
                        </div>
                    </div>
                </button>
            }
            @if (is_in_progress()) {
                <button mat-menu-item (click)="end(booking())">
                    <div class="flex items-center space-x-2 text-base">
                        <icon class="text-error">delete</icon>
                        <div>{{ 'BOOKINGS.ACTION_END' | translate }}</div>
                    </div>
                </button>
            }
        </mat-menu>
    `, imports: [
      CommonModule,
      MatMenuModule,
      TranslatePipe,
      IconComponent,
      InteractiveMapComponent,
      MatDialogModule,
      MatProgressSpinnerModule,
      StatusPillComponent,
      ImageCarouselComponent,
      MatRippleModule,
      UserPipe,
      MatTooltipModule
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingDetailsModalComponent, { className: "BookingDetailsModalComponent", filePath: "libs/bookings/src/lib/booking-details-modal.component.ts", lineNumber: 525 });
})();

// libs/bookings/src/lib/parking.service.ts
var ParkingService = class _ParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._loading = signal(
      [],
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users = signal(
      [],
      ...ngDevMode ? [{ debugName: "_users" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._has_booking = signal(
      false,
      ...ngDevMode ? [{ debugName: "_has_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_space = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booked_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._home_building_id = signal(
      null,
      ...ngDevMode ? [{ debugName: "_home_building_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._load_bookings = signal(
      false,
      ...ngDevMode ? [{ debugName: "_load_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._bookings_request = null;
    this.loading = computed(
      () => this._loading().length > 0,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.levels = computed(
      () => {
        const levels = this._org.level_list();
        if (!this._settings.get("app.use_region")) {
          const blds = this._org.buildingsForRegion();
          const bld_ids = blds.map((bld) => bld.id);
          const list = levels.filter((lvl) => bld_ids.includes(lvl.parent_id) && lvl.tags.includes("parking"));
          list.map((lvl) => __spreadProps(__spreadValues({}, lvl), {
            display_name: `${blds.find((_) => _.id === lvl.parent_id)?.display_name} - ${lvl.display_name}`
          }));
          return list;
        }
        return levels.filter((lvl) => lvl.parent_id === this._org.building.id && lvl.tags.includes("parking"));
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.spaces = this._spaces.asReadonly();
    this.users = this._users.asReadonly();
    this.has_booking = this._has_booking.asReadonly();
    this.assigned_space = computed(
      () => this._spaces().find((_) => _.assigned_to?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "assigned_space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user_details = computed(
      () => this._users().find((_) => _.email?.toLowerCase() === currentUser().email?.toLowerCase()),
      ...ngDevMode ? [{ debugName: "user_details" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.deny_parking_access = computed(
      () => !!this.user_details()?.deny,
      ...ngDevMode ? [{ debugName: "deny_parking_access" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.booked_space = this._booked_space.asReadonly();
    this.home_building_id = this._home_building_id.asReadonly();
    this.is_home_location = computed(
      () => {
        if (!this._settings.get("app.parking.restrict_home_location"))
          return false;
        const home_id = this._home_building_id();
        const bld = this._org.active_building();
        return !!home_id && bld?.id === home_id;
      },
      ...ngDevMode ? [{ debugName: "is_home_location" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const levels = this.levels();
      if (levels[0]?.id)
        untracked(() => this._loadSpaces(levels.map((l) => l.id)));
    });
    effect(() => {
      const bld = this._org.active_building();
      if (!bld?.id)
        return;
      untracked(() => {
        this._loadUsers(bld.id);
        this._loadHomeBuilding();
      });
    });
    effect(() => {
      const spaces = this._spaces();
      if (this._load_bookings() && spaces.length) {
        untracked(() => this._loadBookings(spaces));
      }
    });
  }
  loadBookings() {
    this._load_bookings.set(true);
  }
  async _loadSpaces(level_ids) {
    this._loading.set([...this._loading(), "spaces"]);
    this._spaces.set(await queryParkingSpacesForZones(level_ids));
    this._loading.set(this._loading().filter((_) => _ !== "spaces"));
  }
  async _loadUsers(building_id) {
    this._loading.set([...this._loading(), "users"]);
    this._users.set(await queryParkingUsers(building_id));
    this._loading.set(this._loading().filter((_) => _ !== "users"));
  }
  async _loadBookings(spaces) {
    this._bookings_request = this._bookings_request || queryBookings({
      period_start: getUnixTime(startOfDay(Date.now())),
      period_end: getUnixTime(endOfDay(Date.now())),
      type: "parking"
    }).catch(() => []).finally(() => this._bookings_request = null);
    const bookings = await this._bookings_request;
    this._has_booking.set(bookings.length > 0);
    const booked_spaces = bookings.map((booking) => spaces.find((space) => space.id === booking.asset_id)).filter((space) => !!space);
    this._booked_space.set(booked_spaces[0] || null);
  }
  async _loadHomeBuilding() {
    const buildings = this._org.building_list();
    if (!buildings?.length)
      return;
    const use_desk_assets = this._settings.get("app.desks.use_assets");
    const results = await Promise.all(buildings.map(async (bld) => {
      if (use_desk_assets) {
        const level_ids = this._org.levelsForBuilding(bld).map((level) => level.id);
        const desks = await queryDeskAssetsForZones(level_ids).catch(() => []);
        return { building_id: bld.id, desks };
      }
      return ac(bld.id, { name: "desks" }).then((data) => ({
        building_id: bld.id,
        desks: flatten(data.map((meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((d) => new Desk(__spreadProps(__spreadValues({}, d), {
          zone: meta.zone
        })))))
      })).catch(() => ({
        building_id: bld.id,
        desks: []
      }));
    }));
    const email = currentUser()?.email?.toLowerCase();
    if (!email)
      return this._home_building_id.set(null);
    const match = results.find((r) => r.desks.some((d) => d.assigned_to?.toLowerCase() === email));
    this._home_building_id.set(match?.building_id || null);
  }
  static {
    this.\u0275fac = function ParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ParkingService, factory: _ParkingService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ParkingService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/bookings/src/lib/booking-card.component.ts
var _c07 = [[["", "booking-status", ""]]];
var _c14 = ["[booking-status]"];
var _c22 = () => ["./"];
var _c32 = (a0) => ({ booking: a0 });
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
function BookingCardComponent_Conditional_1_Case_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " desk ");
  }
}
function BookingCardComponent_Conditional_1_Case_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " lock ");
  }
}
function BookingCardComponent_Conditional_1_Case_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " drive_eta ");
  }
}
function BookingCardComponent_Conditional_1_Case_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " people ");
  }
}
function BookingCardComponent_Conditional_1_Case_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0, " book ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_25_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_Conditional_28_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_Conditional_29_Template(rf, ctx) {
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
function BookingCardComponent_Conditional_1_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "RESOURCE.EVENT"), " ");
  }
}
function BookingCardComponent_Conditional_1_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, ctx_r0.booking().status !== "declined" ? "COMMON.STATUS_RESERVED" : "BOOKINGS.RELEASED"), " ");
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
    \u0275\u0275conditionalCreate(18, BookingCardComponent_Conditional_1_Case_18_Template, 1, 0)(19, BookingCardComponent_Conditional_1_Case_19_Template, 1, 0)(20, BookingCardComponent_Conditional_1_Case_20_Template, 1, 0)(21, BookingCardComponent_Conditional_1_Case_21_Template, 1, 0)(22, BookingCardComponent_Conditional_1_Case_22_Template, 1, 0);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(23, "div", 15);
    \u0275\u0275text(24);
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(25, BookingCardComponent_Conditional_1_Conditional_25_Template, 5, 1, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(26, "icon", 17);
    \u0275\u0275text(27, " chevron_right ");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(28, BookingCardComponent_Conditional_1_Conditional_28_Template, 6, 3, "div", 18);
    \u0275\u0275conditionalCreate(29, BookingCardComponent_Conditional_1_Conditional_29_Template, 3, 3, "div", 19);
    \u0275\u0275conditionalCreate(30, BookingCardComponent_Conditional_1_Conditional_30_Template, 3, 3, "div", 19);
    \u0275\u0275conditionalCreate(31, BookingCardComponent_Conditional_1_Conditional_31_Template, 3, 3, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_14_0;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(25, _c22))("queryParams", \u0275\u0275pureFunction1(26, _c32, ctx_r0.booking()?.id));
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-60", ctx_r0.is_cancelled());
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", ctx_r0.typeColors[0])("color", ctx_r0.typeColors[1]);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(4, 23, ctx_r0.typeLabel));
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
    \u0275\u0275conditional((tmp_14_0 = ctx_r0.type()) === "desk" ? 18 : tmp_14_0 === "locker" ? 19 : tmp_14_0 === "parking" ? 20 : tmp_14_0 === "visitor" ? 21 : 22);
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource_label(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.location() ? 25 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.booking()?.checked_in && !ctx_r0.booking()?.is_done ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && !ctx_r0.for_current_user() && ctx_r0.booking()?.booking_type !== "group-event" ? 29 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && ctx_r0.booking()?.booking_type === "group-event" ? 30 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.booking()?.checked_in && ctx_r0.is_reserved_parking_space() ? 31 : -1);
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
        return `${booking.user_name || ""}`.trim() || this._formatEmailName(`${booking.user_email || ""}`.trim());
      },
      ...ngDevMode ? [{ debugName: "booked_for_label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_waitlist = this._settings.signal("parking.show_waitlist", true);
    this.hide_selected_parking_space = this._settings.signal("parking.hide_selected_space", false);
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
        end_fn: this.end_fn(),
        refresh_fn: this.refresh_fn()
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingCardComponent, selectors: [["booking-card"]], inputs: { booking: [1, "booking"], show_day: [1, "show_day"], edit_fn: [1, "edit_fn"], remove_fn: [1, "remove_fn"], end_fn: [1, "end_fn"], refresh_fn: [1, "refresh_fn"] }, ngContentSelectors: _c14, decls: 2, vars: 2, consts: [[1, "mb-2", "flex", "items-center", "px-2"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "routerLink", "queryParams"], ["day", ""], [1, "px-2", "text-xs"], ["name", "view-booking-details", 1, "relative", "w-full", "cursor-pointer", "overflow-hidden", 3, "click", "routerLink", "queryParams"], [1, "border-base-300", "bg-base-100", "relative", "w-full", "rounded-xl", "border", "py-4", "shadow-sm"], [1, "bg-base-300", "absolute", "top-2", "right-2", "rounded-full", "p-1", "text-2xl"], ["matTooltipPosition", "left", 3, "matTooltip"], [1, "px-4", "text-lg"], [1, "mx-4", "my-2", "flex", "items-center", "space-x-2"], [3, "status"], ["booked-for", "", 1, "text-base-content/70", "flex", "min-w-0", "items-center", "space-x-1", "text-sm"], [1, "text-2xl", 3, "matTooltip"], [1, "divide-base-200-500", "flex", "flex-col", "flex-wrap", "space-y-2", "py-2", "sm:flex-row", "sm:space-y-0", "sm:divide-x"], [1, "flex", "max-w-[33%]", "items-center", "px-4"], [1, "mx-2", "w-1/2", "flex-1", "truncate"], [1, "flex", "items-center", "px-4"], [1, "absolute", "top-1/2", "right-1", "-translate-y-1/2", "text-4xl"], ["checked-in-badge", "", 1, "bg-success", "text-success-content", "absolute", "top-2", "right-2", "flex", "items-center", "space-x-1", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "bg-warning/50", "absolute", "top-14", "right-2", "rounded-xl", "px-2", "py-1", "text-xs"], [1, "text-lg"], [1, "truncate"], [1, "mx-2", "truncate"], [1, "text-sm"]], template: function BookingCardComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef(_c07);
        \u0275\u0275conditionalCreate(0, BookingCardComponent_Conditional_0_Template, 7, 9, "h4", 0);
        \u0275\u0275conditionalCreate(1, BookingCardComponent_Conditional_1_Template, 32, 28, "a", 1);
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
                            {{ 'RESOURCE.EVENT' | translate }}
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
                                    ? 'COMMON.STATUS_RESERVED'
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
  }], () => [], { booking: [{ type: Input, args: [{ isSignal: true, alias: "booking", required: false }] }], show_day: [{ type: Input, args: [{ isSignal: true, alias: "show_day", required: false }] }], edit_fn: [{ type: Input, args: [{ isSignal: true, alias: "edit_fn", required: false }] }], remove_fn: [{ type: Input, args: [{ isSignal: true, alias: "remove_fn", required: false }] }], end_fn: [{ type: Input, args: [{ isSignal: true, alias: "end_fn", required: false }] }], refresh_fn: [{ type: Input, args: [{ isSignal: true, alias: "refresh_fn", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingCardComponent, { className: "BookingCardComponent", filePath: "libs/bookings/src/lib/booking-card.component.ts", lineNumber: 210 });
})();

// libs/events/src/lib/event-details-modal.component.ts
var _c08 = (a0) => ({ time: a0 });
var _c15 = (a0, a1) => ({ count: a0, cost: a1 });
var _c23 = (a0) => ({ count: a0 });
var _c33 = () => ({ disable_pan: true, disable_zoom: true });
function EventDetailsModalComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 4);
  }
}
function EventDetailsModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275element(1, "image-carousel", 40);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("images", ctx_r1.event()?.system?.images);
  }
}
function EventDetailsModalComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.period_tz(), " ");
  }
}
function EventDetailsModalComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 12);
    \u0275\u0275text(1, "event_repeat");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r1.recurr_tooltip());
  }
}
function EventDetailsModalComponent_Conditional_15_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 43);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_15_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.checkin());
    });
    \u0275\u0275elementStart(1, "div", 44)(2, "icon", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 46);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-success", ctx_r1.room_status() !== "pending")("border-none", ctx_r1.room_status() !== "pending")("pointer-events-none", ctx_r1.room_status() !== "pending");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.room_status() === "pending" ? "arrow_back" : "done");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 8, ctx_r1.room_status() === "pending" ? "COMMON.CHECK_IN" : "COMMON.CHECKED_IN"), " ");
  }
}
function EventDetailsModalComponent_Conditional_15_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 42)(1, "icon");
    \u0275\u0275text(2, "more_horiz");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275nextContext(2);
    const menu_r4 = \u0275\u0275reference(98);
    \u0275\u0275property("matMenuTriggerFor", menu_r4);
  }
}
function EventDetailsModalComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275conditionalCreate(1, EventDetailsModalComponent_Conditional_15_Conditional_1_Template, 7, 10, "button", 41);
    \u0275\u0275conditionalCreate(2, EventDetailsModalComponent_Conditional_15_Conditional_2_Template, 3, 1, "button", 42);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.room_status() && ctx_r1.event()?.can_check_in && ctx_r1.room_status() !== "free" ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_edit() ? 2 : -1);
  }
}
function EventDetailsModalComponent_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r1.event().date, "EEEE, dd LLLL y (z)", ctx_r1.tz()), " ");
  }
}
function EventDetailsModalComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.period_tz(), " ");
  }
}
function EventDetailsModalComponent_Conditional_40_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", ctx_r1.level()?.display_name || ctx_r1.level()?.name, ", ");
  }
}
function EventDetailsModalComponent_Conditional_42_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon");
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", ctx_r1.building()?.display_name || ctx_r1.building()?.name, ", ", ctx_r1.building()?.address, " ");
  }
}
function EventDetailsModalComponent_Conditional_43_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 17)(4, "icon", 47);
    \u0275\u0275text(5, "person");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    const creator_r5 = \u0275\u0275pipeBind1(2, 3, \u0275\u0275pipeBind1(1, 1, ctx_r1.event().creator))?.name || ctx_r1.event().creator;
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", creator_r5, " ");
  }
}
function EventDetailsModalComponent_Conditional_44_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "icon", 48);
    \u0275\u0275text(2, "visibility");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "uppercase");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "COMMON.VISIBILITY_" + \u0275\u0275pipeBind1(5, 1, ctx_r1.event().visibility)), " ");
  }
}
function EventDetailsModalComponent_For_74_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 49);
    \u0275\u0275element(1, "a-user-avatar", 29);
    \u0275\u0275elementStart(2, "div", 30)(3, "div", 31);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 32);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const user_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275property("user", user_r6);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", user_r6?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275property("title", user_r6.email);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", user_r6.email, " ");
  }
}
function EventDetailsModalComponent_For_74_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, EventDetailsModalComponent_For_74_Conditional_0_Template, 7, 4, "div", 49);
  }
  if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(user_r6.email !== ctx_r1.event().host ? 0 : -1);
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 59);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const order_r8 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", order_r8.caterer, " ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_For_23_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 64);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const item_r9 = \u0275\u0275nextContext().$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("matTooltip", ctx_r1.optionList(item_r9));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT", \u0275\u0275pureFunction1(5, _c23, item_r9.option_list?.length || "0")), " ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_For_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_88_For_6_For_23_Conditional_4_Template, 3, 7, "span", 64);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 65);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "div", 66);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "currency");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r9.name || "Item");
    \u0275\u0275advance();
    \u0275\u0275conditional(item_r9.option_list?.length ? 4 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r9.quantity, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(9, 4, item_r9.unit_price_with_options / 100, ctx_r1.currency_code), " ea ");
  }
}
function EventDetailsModalComponent_Conditional_88_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 52)(1, "div", 53)(2, "div", 54)(3, "div", 55)(4, "icon", 24);
    \u0275\u0275text(5, "meeting_room");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "span");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 56);
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "date");
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 57)(13, "div", 58);
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "currency");
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(17, EventDetailsModalComponent_Conditional_88_For_6_Conditional_17_Template, 2, 1, "div", 59);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(18, "button", 60);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_88_For_6_Template_button_click_18_listener() {
      const order_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleOrder(order_r8.id));
    });
    \u0275\u0275elementStart(19, "icon");
    \u0275\u0275text(20);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(21, "div", 61);
    \u0275\u0275repeaterCreate(22, EventDetailsModalComponent_Conditional_88_For_6_For_23_Template, 10, 7, "div", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const order_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate(ctx_r1.cateringRoomLabel(order_r8));
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(11, 11, "CALENDAR_EVENT.CATERING_ORDER_AT", \u0275\u0275pureFunction1(20, _c08, \u0275\u0275pipeBind2(10, 8, order_r8.deliver_at, "MMM d, " + ctx_r1.time_format()))), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(16, 17, "CALENDAR_EVENT.CATERING_ORDER_DETAILS", \u0275\u0275pureFunction2(22, _c15, order_r8.item_count, \u0275\u0275pipeBind2(15, 14, order_r8.total_cost / 100, ctx_r1.currency_code))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(order_r8.caterer ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275property("matTooltip", ctx_r1.show_order()[order_r8.id] ? "Hide order items" : "Show order items");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_order()[order_r8.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r1.print() && !ctx_r1.show_order()[order_r8.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(order_r8.items);
  }
}
function EventDetailsModalComponent_Conditional_88_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 50);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_88_For_6_Template, 24, 25, "div", 52, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "RESOURCE.CATERING"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_catering);
  }
}
function EventDetailsModalComponent_Conditional_90_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "interactive-map", 34);
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r1.level()?.map_id)("features", ctx_r1.features())("options", \u0275\u0275pureFunction0(3, _c33));
  }
}
function EventDetailsModalComponent_Conditional_91_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 68);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, ctx_r1.body()) || ctx_r1.empty_notes, \u0275\u0275sanitizeHtml);
  }
}
function EventDetailsModalComponent_Conditional_91_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 67);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_91_Conditional_4_Template, 2, 3, "div", 68);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "FORM.NOTES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.raw_body() ? 4 : -1);
  }
}
function EventDetailsModalComponent_Conditional_92_For_6_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 62)(1, "div", 63)(2, "span", 56);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(4, "div", 65);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r12 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(item_r12.name || "Item");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" x", item_r12.quantity, " ");
  }
}
function EventDetailsModalComponent_Conditional_92_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 70)(1, "button", 71);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_92_For_6_Template_button_click_1_listener() {
      const request_r11 = \u0275\u0275restoreView(_r10).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleRequest(request_r11.id));
    });
    \u0275\u0275elementStart(2, "div", 72)(3, "div", 56);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 73)(8, "icon");
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(10, "div", 74)(11, "icon", 45);
    \u0275\u0275text(12);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(13, "div", 61);
    \u0275\u0275repeaterCreate(14, EventDetailsModalComponent_Conditional_92_For_6_For_15_Template, 6, 2, "div", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const request_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 21, "CALENDAR_EVENT.ASSETS_REQUESTED_FOR", \u0275\u0275pureFunction1(24, _c08, \u0275\u0275pipeBind2(5, 18, request_r11.deliver_at, "MMM d, " + ctx_r1.time_format()))), " ");
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-success", request_r11.state === "approved")("text-success-content", request_r11.state === "approved")("bg-warning", request_r11.state !== "approved" && request_r11.state !== "rejected")("text-warning-content", request_r11.state !== "approved" && request_r11.state !== "rejected")("bg-error", request_r11.state === "rejected")("text-error-content", request_r11.state === "rejected");
    \u0275\u0275property("matTooltip", request_r11.state || "Tentative");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", request_r11.state === "approved" ? "done" : request_r11.state === "rejected" ? "close" : "schedule", " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.show_request()[request_r11.id] ? "expand_less" : "expand_more", " ");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r1.print() && !ctx_r1.show_request()[request_r11.id]);
    \u0275\u0275advance();
    \u0275\u0275repeater(request_r11.items);
  }
}
function EventDetailsModalComponent_Conditional_92_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "h3", 69);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 51);
    \u0275\u0275repeaterCreate(5, EventDetailsModalComponent_Conditional_92_For_6_Template, 16, 26, "div", 70, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(3, 2, "RESOURCE.ASSETS"), " (", ctx_r1.event().valid_assets?.length || 0, ") ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.event().valid_assets);
  }
}
function EventDetailsModalComponent_Conditional_96_Template(rf, ctx) {
  if (rf & 1) {
    const _r13 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 36)(1, "attendee-list", 75);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_96_Template_attendee_list_click_1_listener() {
      \u0275\u0275restoreView(_r13);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_attendees.set(false));
    });
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("list", ctx_r1.event().attendees)("host", ctx_r1.event().host);
  }
}
function EventDetailsModalComponent_Conditional_99_Template(rf, ctx) {
  if (rf & 1) {
    const _r14 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 76);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_99_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r14);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.edit ? ctx_r1.edit(ctx_r1.event()) : "");
    });
    \u0275\u0275elementStart(1, "div", 77)(2, "icon", 45);
    \u0275\u0275text(3, "edit");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", !ctx_r1.can_edit() ? ctx_r1.no_edit_message() : "")("disabled", !ctx_r1.can_edit());
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 3, "CALENDAR_EVENT.ACTION_EDIT"), " ");
  }
}
function EventDetailsModalComponent_Conditional_100_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_100_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(ctx_r1.event(), false));
    });
    \u0275\u0275elementStart(1, "div", 77)(2, "icon", 79);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE"), " ");
  }
}
function EventDetailsModalComponent_Conditional_101_Template(rf, ctx) {
  if (rf & 1) {
    const _r16 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_101_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r16);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.printEvent());
    });
    \u0275\u0275elementStart(1, "div", 77)(2, "icon", 45);
    \u0275\u0275text(3, "print");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_PRINT"), " ");
  }
}
function EventDetailsModalComponent_Conditional_102_Template(rf, ctx) {
  if (rf & 1) {
    const _r17 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function EventDetailsModalComponent_Conditional_102_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r17);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.remove(ctx_r1.event(), true));
    });
    \u0275\u0275elementStart(1, "div", 77)(2, "icon", 79);
    \u0275\u0275text(3, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 1, "CALENDAR_EVENT.ACTION_DELETE_SERIES"), " ");
  }
}
function EventDetailsModalComponent_For_104_Template(rf, ctx) {
  if (rf & 1) {
    const _r18 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 78);
    \u0275\u0275listener("click", function EventDetailsModalComponent_For_104_Template_button_click_0_listener() {
      const act_r19 = \u0275\u0275restoreView(_r18).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.action.emit(act_r19.id));
    });
    \u0275\u0275elementStart(1, "div", 77)(2, "icon", 45);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const act_r19 = ctx.$implicit;
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(act_r19.icon);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(act_r19.name);
  }
}
var EMPTY_ACTIONS = [];
var EventDetailsModalComponent = class _EventDetailsModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._org = inject(OrganisationService);
    this._space_pipe = inject(SpacePipe);
    this._settings = inject(SettingsService);
    this._dialog = inject(MatDialog);
    this.action = output();
    this.edit = this._data.edit_fn;
    this.empty_notes = '<div class="p-4 w-full rounded-md bg-base-200 text-center"><span class="opacity-30">No notes</span></div>';
    this.show_order = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_order" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_request = signal(
      {},
      ...ngDevMode ? [{ debugName: "show_request" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.room_status = signal(
      "",
      ...ngDevMode ? [{ debugName: "room_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_map = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_map" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_edit = signal(
      false,
      ...ngDevMode ? [{ debugName: "hide_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_body = signal(
      "",
      ...ngDevMode ? [{ debugName: "raw_body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.print = signal(
      false,
      ...ngDevMode ? [{ debugName: "print" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_attendees = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_attendees" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = signal(
      new CalendarEvent(this._data.event),
      ...ngDevMode ? [{ debugName: "event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_edit_message = signal(
      "Editing bookings long than \n a day is not available",
      ...ngDevMode ? [{ debugName: "no_edit_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => [
        {
          location: this.space().map_id || this.event()?.system?.map_id,
          content: MapPinComponent
        }
      ],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_catering = computed(
      () => this.event()?.ext("catering")?.length > 0,
      ...ngDevMode ? [{ debugName: "has_catering" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.has_assets = computed(
      () => !!this.event()?.linked_bookings?.find((_) => _.booking_type === "asset-request"),
      ...ngDevMode ? [{ debugName: "has_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_edit = computed(
      () => {
        return true;
      },
      ...ngDevMode ? [{ debugName: "can_edit" }] : (
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
    this.level = computed(
      () => this._org.levelWithID(this.space().zones) || new BuildingLevel(),
      ...ngDevMode ? [{ debugName: "level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.building = computed(
      () => this._org.buildings.find((b) => this.space().zones.includes(b.id)) || new Building(),
      ...ngDevMode ? [{ debugName: "building" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = computed(
      () => settingSignal("events.use_building_timezone")() ? this._org.building.timezone : "",
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
    this.tz_date_same = computed(
      () => {
        return !this._date.transform(this.event().date, "yyyy-MM-dd", this.tz()).localeCompare(this._date.transform(this.event().date, "yyyy-MM-dd"));
      },
      ...ngDevMode ? [{ debugName: "tz_date_same" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.accept_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "accepted" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "accept_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.declined_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "declined" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "declined_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.pending_count = computed(
      () => this.event().attendees?.reduce((count, user) => count += user.response_status === "tentative" || user.response_status === "needsAction" ? 1 : 0, 0) || 0,
      ...ngDevMode ? [{ debugName: "pending_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host_name = computed(
      () => {
        const event = this.event();
        const host_email = event.host.toLowerCase();
        const host_attendee = event.attendees.find(({ email }) => email.toLowerCase() === host_email);
        return host_attendee?.name || event.host;
      },
      ...ngDevMode ? [{ debugName: "host_name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.body = computed(
      () => (this.event().body || "").replace(/\\n\\n\[ID\|.*\]/gm, ""),
      ...ngDevMode ? [{ debugName: "body" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_edit = computed(
      () => !settingSignal("events.booking_unavailable")(),
      ...ngDevMode ? [{ debugName: "allow_edit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.custom_actions = settingSignal("events.custom_actions", EMPTY_ACTIONS);
    this._use_24_hour = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this._use_24_hour() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event_status = computed(
      () => {
        if (this.event()?.state === "done")
          return "neutral";
        if (this.event()?.status === "approved")
          return "success";
        if (this.event()?.status === "tentative")
          return "warning";
        if (this.event()?.status === "declined")
          return "error";
        return "warning";
      },
      ...ngDevMode ? [{ debugName: "event_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
    this.period = computed(
      () => this.event()?.all_day ? "All Day" : this.formattedTime(),
      ...ngDevMode ? [{ debugName: "period" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.period_tz = computed(
      () => this.formattedTime(this.tz()),
      ...ngDevMode ? [{ debugName: "period_tz" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = new DatePipe("en");
    this.recurr_tooltip = computed(
      () => formatRecurrence(fromEventRecurrence(this.event().recurrence), this.event()?.date) || i18n("CALENDAR_EVENT.RECURRING_TOOLTIP"),
      ...ngDevMode ? [{ debugName: "recurr_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  remove(event, remove_series) {
    if (event?.state === "done")
      return;
    if (!remove_series && !this.can_cancel)
      return;
    this._data.remove_fn(event, remove_series);
  }
  get can_cancel() {
    const event = this.event();
    return event.state !== "done" && !(this.is_concierge && this.room_status() === "busy" && event.date <= Date.now());
  }
  cateringRoomLabel(order) {
    if (!order.system_id) {
      return i18n("CALENDAR_EVENT.ROOM_REQUIRED");
    }
    const room = this.event().resources.find((space) => space.id === order.system_id || space.email === order.system_id);
    if (!room)
      return i18n("CALENDAR_EVENT.ROOM_REQUIRED");
    const location = this._org.locationWithID(room.zones).label;
    return [location, room.display_name || room.name].filter((_) => !!_).join(" / ");
  }
  get is_concierge() {
    return this._settings.app_name.toLowerCase().includes("concierge");
  }
  get currency_code() {
    return this._org.currency_code;
  }
  ngOnInit() {
    console.log("Event:", this._data);
    this.event.set(new CalendarEvent(this._data.event));
    const doc = new DOMParser().parseFromString(this.event().body, "text/html");
    this.raw_body.set((doc.body.textContent || "").trim());
    this._load().then();
    this.no_edit_message.set(i18n("CALENDAR_EVENT.NO_LONG_EDIT_MSG"));
  }
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
      return "All Day";
    }
    return `${start_time} - ${end_time} ${"(" + tz_format + ")"}`;
  }
  optionList(item) {
    return item.option_list?.map((_) => _.name).join("\n");
  }
  toggleOrder(id) {
    this.show_order.update((show_order) => __spreadProps(__spreadValues({}, show_order), {
      [id]: !show_order[id]
    }));
  }
  toggleRequest(id) {
    this.show_request.update((show_request) => __spreadProps(__spreadValues({}, show_request), {
      [id]: !show_request[id]
    }));
  }
  async checkin() {
    const mod = Dd(this.space()?.id, "Bookings");
    if (!mod)
      return;
    await mod.execute("checkin", [getUnixTime(this.event().date)]).catch((e) => notifyError(`Error checking in booking. ${e}`));
    this.room_status.set("busy");
  }
  async _load() {
    this.space.set(await this._space_pipe.transform(this.event().system?.id || this.event().system?.email));
    const doc = new DOMParser().parseFromString(this.event().body, "text/html");
    this.raw_body.set((doc.body.textContent || "").trim());
    if (this.event().extension_data.catering?.length || this.event().extension_data.assets?.length) {
      return;
    }
    const metadata = await getEventMetadata(this.event().id, this.space().id);
    if (metadata) {
      this.event.set(new CalendarEvent(__spreadProps(__spreadValues({}, this.event()), {
        extension_data: __spreadValues(__spreadValues({}, this.event().extension_data), metadata)
      })));
    }
  }
  status(id) {
    const booking = this.event().linked_bookings.find((_) => _.asset_id === id);
    if (booking.status)
      return booking.status;
    return booking ? booking.approved ? "approved" : booking.rejected ? "rejected" : "pending" : "pending";
  }
  viewLocation() {
    this.hide_map.set(true);
    const ref = this._dialog.open(MapLocateModalComponent, {
      width: "100vw",
      height: "100vh",
      maxWidth: "100vw",
      maxHeight: "100vh",
      panelClass: "fullscreen-dialog",
      data: { item: this.space() }
    });
    ref.afterClosed().subscribe(() => this.hide_map.set(false));
  }
  printEvent() {
    this.print.set(true);
    setTimeout(() => {
      window.print();
      setTimeout(() => this.print.set(false), 100);
    }, 300);
  }
  static {
    this.\u0275fac = function EventDetailsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventDetailsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventDetailsModalComponent, selectors: [["event-details-modal"]], outputs: { action: "action" }, features: [\u0275\u0275ProvidersFeature([SpacePipe])], decls: 105, vars: 68, consts: [["menu", "matMenu"], [1, "bg-base-100", "sm:bg-base-200", "h-screen", "w-screen", "space-y-2", "overflow-auto", "pb-2", "sm:relative", "sm:inset-auto", "sm:h-auto", "sm:max-h-[80vh]", "sm:w-204", "sm:rounded-sm", "print:min-h-screen", "print:w-screen", "print:overflow-visible"], [1, "border-base-200", "bg-base-100", "max-h-screen", "flex-col", "items-center", "pb-4", "sm:flex", "sm:max-h-[80vh]", "sm:border-b", "sm:px-16", "print:border-none"], ["binding", "", "mod", "Bookings", "bind", "status", 3, "modelChange", "model", "sys"], [1, "block", "h-8", "w-full", "sm:hidden"], [1, "bg-neutral", "h-64", "w-full", "overflow-hidden", "sm:rounded-b", "print:hidden"], ["title", "", 1, "mt-2", "w-full", "px-3", "text-xl", "font-medium"], [1, "w-full", "items-center", "justify-between", "sm:flex"], [1, "m-2", "flex", "items-center", "space-x-2"], [3, "status"], [1, "flex", "flex-col", "leading-tight"], [1, "text-xs", "opacity-30"], [1, "text-2xl", 3, "matTooltip"], ["actions", "", 1, "flex", "items-center", "space-x-2", "px-2", "print:hidden"], [1, "flex-wrap", "sm:flex", "sm:px-12"], [1, "border-base-200", "sm:bg-base-100", "min-w-1/3", "grow-3", "space-y-2", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "mt-2", "mb-2", "px-3", "text-lg", "font-medium"], [1, "flex", "items-center", "space-x-2", "px-2"], [1, "border-base-200", "sm:bg-base-100", "mt-4", "min-w-1/3", "grow-3", "rounded-sm", "sm:m-2", "sm:w-[16rem]", "sm:border", "sm:p-4"], [1, "border-base-200", "mx-3", "flex", "items-center", "justify-between", "border-t", "sm:border-none"], [1, "text-lg", "font-medium"], ["matRipple", "", "show-attendees", "", 1, "clear", "text-xs", "underline", "print:hidden", 3, "click"], [1, "flex", "items-center", "p-1"], [1, "flex", "flex-1", "flex-col", "items-center", "justify-center", "space-y-1"], [1, "text-lg"], [1, "text-sm", "uppercase"], [1, "hidden", "print:block"], [1, "border-base-200", "mx-3", "mt-2", "border-t", "pt-2", "text-lg", "font-medium"], ["host", "", 1, "flex", "items-center", "space-x-2", "px-2"], [3, "user"], [1, "w-px", "flex-1", "text-sm"], [1, "w-full", "truncate"], [1, "w-full", "truncate", "opacity-60", 3, "title"], ["map", "", 1, "border-base-200", "sm:bg-base-100", "relative", "m-2", "mt-4", "h-64", "w-[calc(100%-1rem)]", "min-w-1/3", "grow-3", "overflow-hidden", "rounded-sm", "border", "p-2", "sm:mt-2", "sm:h-48", "sm:w-[16rem]", 3, "click"], [1, "pointer-events-none", 3, "src", "features", "options"], ["icon", "", "default", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "left-2", "print:hidden"], [1, "absolute", "inset-0", "z-50"], ["xPosition", "before"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "matTooltip", "disabled"], ["mat-menu-item", ""], [1, "h-64", "w-full", 3, "images"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "bg-success", "border-none", "pointer-events-none"], ["icon", "", "matRipple", "", 1, "bg-secondary", "h-12", "w-12", "rounded-sm", "text-white", 3, "matMenuTriggerFor"], ["btn", "", "matRipple", "", 1, "h-10", "flex-1", 3, "click"], [1, "flex", "items-center", "justify-center", "space-x-2"], [1, "text-2xl"], [1, "pr-4"], ["matTooltip", "Created By"], ["matTooltip", "Visibility"], ["attendee", "", 1, "flex", "items-center", "space-x-2", "px-2"], [1, "mx-3", "my-2", "text-lg", "font-medium"], [1, "flex", "flex-col", "space-y-2"], ["order", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], [1, "flex", "items-center", "space-x-2", "p-3"], [1, "flex-1"], [1, "mb-1", "flex", "items-center", "space-x-1", "text-xs", "opacity-60"], [1, "text-sm"], [1, "flex", "items-center", "space-x-2"], [1, "text-xs", "opacity-60"], [1, "bg-base-200", "rounded-sm", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", 1, "print:hidden", 3, "click", "matTooltip"], [1, "contract-expand", "divide-base-100", "bg-base-200", "flex", "flex-col", "divide-y"], [1, "flex", "items-center", "space-x-2", "px-3", "py-1", "hover:opacity-90"], [1, "flex", "flex-1", "items-center"], [1, "ml-4", "text-xs", "font-normal", "opacity-60", 3, "matTooltip"], [1, "bg-success", "text-success-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "bg-info", "text-info-content", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mx-3", "border-t", "text-lg", "font-medium", "sm:border-none"], ["notes", "", 1, "mx-4", "max-w-full", "overflow-hidden", 3, "innerHTML"], [1, "mx-3", "pt-2", "text-lg", "font-medium"], ["request", "", 1, "border-base-300", "bg-base-100", "overflow-hidden", "rounded-xl", "border"], ["matRipple", "", 1, "flex", "w-full", "items-center", "space-x-2", "p-3", 3, "click"], [1, "flex-1", "text-left"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden", 3, "matTooltip"], [1, "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "print:hidden"], [3, "click", "list", "host"], ["mat-menu-item", "", "mat-dialog-close", "", 3, "click", "matTooltip", "disabled"], [1, "flex", "items-center", "space-x-2", "pr-2", "text-base"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "text-2xl"]], template: function EventDetailsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        const _r1 = \u0275\u0275getCurrentView();
        \u0275\u0275elementStart(0, "div", 1)(1, "div", 2)(2, "i", 3);
        \u0275\u0275twoWayListener("modelChange", function EventDetailsModalComponent_Template_i_modelChange_2_listener($event) {
          \u0275\u0275restoreView(_r1);
          \u0275\u0275twoWayBindingSet(ctx.room_status, $event) || (ctx.room_status = $event);
          return \u0275\u0275resetView($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(3, EventDetailsModalComponent_Conditional_3_Template, 1, 0, "div", 4);
        \u0275\u0275conditionalCreate(4, EventDetailsModalComponent_Conditional_4_Template, 2, 1, "div", 5);
        \u0275\u0275elementStart(5, "h3", 6);
        \u0275\u0275text(6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "div", 8)(9, "status-pill", 9)(10, "div", 10)(11, "div");
        \u0275\u0275text(12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(13, EventDetailsModalComponent_Conditional_13_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(14, EventDetailsModalComponent_Conditional_14_Template, 2, 1, "icon", 12);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(15, EventDetailsModalComponent_Conditional_15_Template, 3, 2, "div", 13);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "div", 14)(17, "div", 15)(18, "h3", 16);
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(21, "div", 17)(22, "icon");
        \u0275\u0275text(23, "event");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(24, "div", 10)(25, "div");
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(28, EventDetailsModalComponent_Conditional_28_Template, 3, 5, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(29, "div", 17)(30, "icon");
        \u0275\u0275text(31, "schedule");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "div", 10)(33, "div");
        \u0275\u0275text(34);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(35, EventDetailsModalComponent_Conditional_35_Template, 2, 1, "div", 11);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(36, "div", 17)(37, "icon");
        \u0275\u0275text(38, "map");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(39, "div");
        \u0275\u0275conditionalCreate(40, EventDetailsModalComponent_Conditional_40_Template, 1, 1);
        \u0275\u0275text(41);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(42, EventDetailsModalComponent_Conditional_42_Template, 5, 2, "div", 17);
        \u0275\u0275conditionalCreate(43, EventDetailsModalComponent_Conditional_43_Template, 8, 5, "div", 17);
        \u0275\u0275conditionalCreate(44, EventDetailsModalComponent_Conditional_44_Template, 7, 5, "div", 17);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(45, "div", 18)(46, "div", 19)(47, "h3", 20);
        \u0275\u0275text(48);
        \u0275\u0275pipe(49, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(50, "button", 21);
        \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_50_listener() {
          return ctx.show_attendees.set(true);
        });
        \u0275\u0275text(51);
        \u0275\u0275pipe(52, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(53, "div", 22)(54, "div", 23)(55, "div", 24);
        \u0275\u0275text(56);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(57, "div", 25);
        \u0275\u0275text(58);
        \u0275\u0275pipe(59, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(60, "div", 23)(61, "div", 24);
        \u0275\u0275text(62);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(63, "div", 25);
        \u0275\u0275text(64);
        \u0275\u0275pipe(65, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(66, "div", 23)(67, "div", 24);
        \u0275\u0275text(68);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(69, "div", 25);
        \u0275\u0275text(70);
        \u0275\u0275pipe(71, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(72, "div", 26);
        \u0275\u0275repeaterCreate(73, EventDetailsModalComponent_For_74_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(75, "h3", 27);
        \u0275\u0275text(76);
        \u0275\u0275pipe(77, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(78, "div", 28);
        \u0275\u0275declareLet(79);
        \u0275\u0275pipe(80, "user");
        \u0275\u0275pipe(81, "async");
        \u0275\u0275element(82, "a-user-avatar", 29);
        \u0275\u0275elementStart(83, "div", 30)(84, "div", 31);
        \u0275\u0275text(85);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(86, "div", 32);
        \u0275\u0275text(87);
        \u0275\u0275elementEnd()()()();
        \u0275\u0275conditionalCreate(88, EventDetailsModalComponent_Conditional_88_Template, 7, 3, "div", 18);
        \u0275\u0275elementStart(89, "button", 33);
        \u0275\u0275listener("click", function EventDetailsModalComponent_Template_button_click_89_listener() {
          return ctx.viewLocation();
        });
        \u0275\u0275conditionalCreate(90, EventDetailsModalComponent_Conditional_90_Template, 1, 4, "interactive-map", 34);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(91, EventDetailsModalComponent_Conditional_91_Template, 5, 4, "div", 18);
        \u0275\u0275conditionalCreate(92, EventDetailsModalComponent_Conditional_92_Template, 7, 4, "div", 18);
        \u0275\u0275elementStart(93, "button", 35)(94, "icon");
        \u0275\u0275text(95, "close");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(96, EventDetailsModalComponent_Conditional_96_Template, 2, 2, "div", 36);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(97, "mat-menu", 37, 0);
        \u0275\u0275conditionalCreate(99, EventDetailsModalComponent_Conditional_99_Template, 7, 5, "button", 38);
        \u0275\u0275conditionalCreate(100, EventDetailsModalComponent_Conditional_100_Template, 7, 3, "button", 39);
        \u0275\u0275conditionalCreate(101, EventDetailsModalComponent_Conditional_101_Template, 7, 3, "button", 39);
        \u0275\u0275conditionalCreate(102, EventDetailsModalComponent_Conditional_102_Template, 7, 3, "button", 39);
        \u0275\u0275repeaterCreate(103, EventDetailsModalComponent_For_104_Template, 6, 2, "button", 39, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275twoWayProperty("model", ctx.room_status);
        \u0275\u0275property("sys", ctx.space()?.id);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.event()?.system?.images?.length ? 3 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event()?.system?.images?.length ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275classProp("pt-4", !ctx.event()?.system?.images?.length);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event().title, " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("status", ctx.event_status());
        \u0275\u0275advance();
        \u0275\u0275classProp("pr-4", ctx.timezone() && ctx.tz());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().recurring_event_id ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().state !== "done" ? 15 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(20, 46, "COMMON.DETAILS"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(27, 48, ctx.event().date, "EEEE, dd LLLL y"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() && !ctx.tz_date_same() ? 28 : -1);
        \u0275\u0275advance(6);
        \u0275\u0275textInterpolate(ctx.period());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 35 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.level() ? 40 : -1);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event()?.system?.display_name || ctx.event()?.system?.name || ctx.event()?.location, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.building() ? 42 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().creator !== ctx.event().host ? 43 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().visibility && ctx.event().visibility !== "normal" ? 44 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(49, 51, "CALENDAR_EVENT.ATTENDEES"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(52, 53, "COMMON.VIEW_ALL"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.accept_count() || 0);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(59, 55, "COMMON.YES"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.declined_count() || 0, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(65, 57, "COMMON.NO"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", ctx.pending_count() || 0, " ");
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(71, 59, "COMMON.PENDING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.event().attendees);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(77, 61, "FORM.HOST"), " ");
        const host_r20 = \u0275\u0275pipeBind1(81, 66, \u0275\u0275pipeBind2(80, 63, ctx.event().host, "email-prefix"))?.name || ctx.host_name();
        \u0275\u0275advance(6);
        \u0275\u0275property("user", ctx.event().organiser);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(host_r20);
        \u0275\u0275advance();
        \u0275\u0275property("title", ctx.event().host);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.event().host, " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_catering() ? 88 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_map() ? 90 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.raw_body() ? 91 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.has_assets() ? 92 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.show_attendees() ? 96 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.hide_edit() ? 99 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.can_cancel ? 100 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.is_concierge ? 101 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.event().state !== "done" && ctx.event().recurring_event_id ? 102 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.custom_actions());
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      MatDialogModule,
      MatDialogClose,
      AttendeeListComponent,
      InteractiveMapComponent,
      UserAvatarComponent,
      StatusPillComponent,
      ImageCarouselComponent,
      BindingDirective,
      MatTooltipModule,
      MatTooltip,
      AsyncPipe,
      UpperCasePipe,
      CurrencyPipe,
      DatePipe,
      TranslatePipe,
      SanitizePipe,
      UserPipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventDetailsModalComponent, [{
    type: Component,
    args: [{ selector: "event-details-modal", template: `
        <div
            class="bg-base-100 sm:bg-base-200 h-screen w-screen space-y-2 overflow-auto pb-2 sm:relative sm:inset-auto sm:h-auto sm:max-h-[80vh] sm:w-204 sm:rounded-sm print:min-h-screen print:w-screen print:overflow-visible"
        >
            <div
                class="border-base-200 bg-base-100 max-h-screen flex-col items-center pb-4 sm:flex sm:max-h-[80vh] sm:border-b sm:px-16 print:border-none"
            >
                <i
                    binding
                    [(model)]="room_status"
                    [sys]="space()?.id"
                    mod="Bookings"
                    bind="status"
                ></i>
                @if (!event()?.system?.images?.length) {
                    <div class="block h-8 w-full sm:hidden"></div>
                }
                @if (event()?.system?.images?.length) {
                    <div
                        class="bg-neutral h-64 w-full overflow-hidden sm:rounded-b print:hidden"
                    >
                        <image-carousel
                            [images]="event()?.system?.images"
                            class="h-64 w-full"
                        ></image-carousel>
                    </div>
                }
                <h3
                    title
                    class="mt-2 w-full px-3 text-xl font-medium"
                    [class.pt-4]="!event()?.system?.images?.length"
                >
                    {{ event().title }}
                </h3>
                <div class="w-full items-center justify-between sm:flex">
                    <div class="m-2 flex items-center space-x-2">
                        <status-pill [status]="event_status()">
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
                    @if (event().state !== 'done') {
                        <div
                            actions
                            class="flex items-center space-x-2 px-2 print:hidden"
                        >
                            @if (
                                room_status() &&
                                event()?.can_check_in &&
                                room_status() !== 'free'
                            ) {
                                <button
                                    btn
                                    matRipple
                                    class="h-10 flex-1"
                                    [class.bg-success]="
                                        room_status() !== 'pending'
                                    "
                                    [class.border-none]="
                                        room_status() !== 'pending'
                                    "
                                    [class.pointer-events-none]="
                                        room_status() !== 'pending'
                                    "
                                    (click)="checkin()"
                                >
                                    <div
                                        class="flex items-center justify-center space-x-2"
                                    >
                                        <icon class="text-2xl">{{
                                            room_status() === 'pending'
                                                ? 'arrow_back'
                                                : 'done'
                                        }}</icon>
                                        <div class="pr-4">
                                            {{
                                                (room_status() === 'pending'
                                                    ? 'COMMON.CHECK_IN'
                                                    : 'COMMON.CHECKED_IN'
                                                ) | translate
                                            }}
                                        </div>
                                    </div>
                                </button>
                            }
                            @if (allow_edit()) {
                                <button
                                    icon
                                    matRipple
                                    [matMenuTriggerFor]="menu"
                                    class="bg-secondary h-12 w-12 rounded-sm text-white"
                                >
                                    <icon>more_horiz</icon>
                                </button>
                            }
                        </div>
                    }
                </div>
            </div>
            <div class="flex-wrap sm:flex sm:px-12">
                <div
                    class="border-base-200 sm:bg-base-100 min-w-1/3 grow-3 space-y-2 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <h3 class="mt-2 mb-2 px-3 text-lg font-medium">
                        {{ 'COMMON.DETAILS' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>event</icon>
                        <div class="flex flex-col leading-tight">
                            <div>
                                {{ event().date | date: 'EEEE, dd LLLL y' }}
                            </div>
                            @if (timezone() && tz() && !tz_date_same()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        event().date
                                            | date: 'EEEE, dd LLLL y (z)' : tz()
                                    }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>schedule</icon>
                        <div class="flex flex-col leading-tight">
                            <div>{{ period() }}</div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{ period_tz() }}
                                </div>
                            }
                        </div>
                    </div>
                    <div class="flex items-center space-x-2 px-2">
                        <icon>map</icon>
                        <div>
                            @if (level()) {
                                {{ level()?.display_name || level()?.name }},
                            }
                            {{
                                event()?.system?.display_name ||
                                    event()?.system?.name ||
                                    event()?.location
                            }}
                        </div>
                    </div>
                    @if (building()) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon>place</icon>
                            <div>
                                {{
                                    building()?.display_name ||
                                        building()?.name
                                }},
                                {{ building()?.address }}
                            </div>
                        </div>
                    }
                    @if (event().creator !== event().host) {
                        @let creator =
                            (event().creator | user | async)?.name ||
                            event().creator;
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Created By">person</icon>
                            <div>
                                {{ creator }}
                            </div>
                        </div>
                    }
                    @if (
                        event().visibility && event().visibility !== 'normal'
                    ) {
                        <div class="flex items-center space-x-2 px-2">
                            <icon matTooltip="Visibility">visibility</icon>
                            <div>
                                {{
                                    'COMMON.VISIBILITY_' +
                                        (event().visibility | uppercase)
                                        | translate
                                }}
                            </div>
                        </div>
                    }
                </div>
                <div
                    class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                >
                    <div
                        class="border-base-200 mx-3 flex items-center justify-between border-t sm:border-none"
                    >
                        <h3 class="text-lg font-medium">
                            {{ 'CALENDAR_EVENT.ATTENDEES' | translate }}
                        </h3>
                        <button
                            matRipple
                            show-attendees
                            class="clear text-xs underline print:hidden"
                            (click)="show_attendees.set(true)"
                        >
                            {{ 'COMMON.VIEW_ALL' | translate }}
                        </button>
                    </div>
                    <div class="flex items-center p-1">
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">{{ accept_count() || 0 }}</div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.YES' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ declined_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.NO' | translate }}
                            </div>
                        </div>
                        <div
                            class="flex flex-1 flex-col items-center justify-center space-y-1"
                        >
                            <div class="text-lg">
                                {{ pending_count() || 0 }}
                            </div>
                            <div class="text-sm uppercase">
                                {{ 'COMMON.PENDING' | translate }}
                            </div>
                        </div>
                    </div>
                    <div class="hidden print:block">
                        @for (user of event().attendees; track user) {
                            @if (user.email !== event().host) {
                                <div
                                    class="flex items-center space-x-2 px-2"
                                    attendee
                                >
                                    <a-user-avatar
                                        [user]="user"
                                    ></a-user-avatar>
                                    <div class="w-px flex-1 text-sm">
                                        <div class="w-full truncate">
                                            {{ user?.name }}
                                        </div>
                                        <div
                                            class="w-full truncate opacity-60"
                                            [title]="user.email"
                                        >
                                            {{ user.email }}
                                        </div>
                                    </div>
                                </div>
                            }
                        }
                    </div>
                    <h3
                        class="border-base-200 mx-3 mt-2 border-t pt-2 text-lg font-medium"
                    >
                        {{ 'FORM.HOST' | translate }}
                    </h3>
                    <div class="flex items-center space-x-2 px-2" host>
                        @let host =
                            (event().host | user: 'email-prefix' | async)
                                ?.name || host_name();
                        <a-user-avatar
                            [user]="event().organiser"
                        ></a-user-avatar>
                        <div class="w-px flex-1 text-sm">
                            <div class="w-full truncate">{{ host }}</div>
                            <div
                                class="w-full truncate opacity-60"
                                [title]="event().host"
                            >
                                {{ event().host }}
                            </div>
                        </div>
                    </div>
                </div>
                @if (has_catering()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 my-2 text-lg font-medium">
                            {{ 'RESOURCE.CATERING' | translate }}
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                order of event().valid_catering;
                                track order
                            ) {
                                <div
                                    order
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <div
                                        class="flex items-center space-x-2 p-3"
                                    >
                                        <div class="flex-1">
                                            <div
                                                class="mb-1 flex items-center space-x-1 text-xs opacity-60"
                                            >
                                                <icon class="text-lg"
                                                    >meeting_room</icon
                                                >
                                                <span>{{
                                                    cateringRoomLabel(order)
                                                }}</span>
                                            </div>
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.CATERING_ORDER_AT'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      order.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                            <div
                                                class="flex items-center space-x-2"
                                            >
                                                <div class="text-xs opacity-60">
                                                    {{
                                                        'CALENDAR_EVENT.CATERING_ORDER_DETAILS'
                                                            | translate
                                                                : {
                                                                      count: order.item_count,
                                                                      cost:
                                                                          order.total_cost /
                                                                              100
                                                                          | currency
                                                                              : currency_code,
                                                                  }
                                                    }}
                                                </div>
                                                @if (order.caterer) {
                                                    <div
                                                        class="bg-base-200 rounded-sm px-2 py-1 text-xs"
                                                    >
                                                        {{ order.caterer }}
                                                    </div>
                                                }
                                            </div>
                                        </div>
                                        <button
                                            icon
                                            matRipple
                                            class="print:hidden"
                                            [matTooltip]="
                                                show_order()[order.id]
                                                    ? 'Hide order items'
                                                    : 'Show order items'
                                            "
                                            (click)="toggleOrder(order.id)"
                                        >
                                            <icon>
                                                {{
                                                    show_order()[order.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </button>
                                    </div>
                                    <div
                                        class="contract-expand divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [class.contract-collapsed]="
                                            !print() && !show_order()[order.id]
                                        "
                                    >
                                        @for (item of order.items; track item) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                    @if (
                                                        item.option_list?.length
                                                    ) {
                                                        <span
                                                            class="ml-4 text-xs font-normal opacity-60"
                                                            [matTooltip]="
                                                                optionList(item)
                                                            "
                                                        >
                                                            {{
                                                                'CALENDAR_EVENT.CATERING_ORDER_OPTION_COUNT'
                                                                    | translate
                                                                        : {
                                                                              count:
                                                                                  item
                                                                                      .option_list
                                                                                      ?.length ||
                                                                                  '0',
                                                                          }
                                                            }}
                                                        </span>
                                                    }
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                                <div
                                                    class="bg-info text-info-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    {{
                                                        item.unit_price_with_options /
                                                            100
                                                            | currency
                                                                : currency_code
                                                    }}
                                                    ea
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <button
                    map
                    class="border-base-200 sm:bg-base-100 relative m-2 mt-4 h-64 w-[calc(100%-1rem)] min-w-1/3 grow-3 overflow-hidden rounded-sm border p-2 sm:mt-2 sm:h-48 sm:w-[16rem]"
                    (click)="viewLocation()"
                >
                    @if (!hide_map()) {
                        <interactive-map
                            class="pointer-events-none"
                            [src]="level()?.map_id"
                            [features]="features()"
                            [options]="{
                                disable_pan: true,
                                disable_zoom: true,
                            }"
                        ></interactive-map>
                    }
                </button>
                @if (raw_body()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3
                            class="border-base-200 mx-3 border-t text-lg font-medium sm:border-none"
                        >
                            {{ 'FORM.NOTES' | translate }}
                        </h3>
                        @if (raw_body()) {
                            <div
                                notes
                                class="mx-4 max-w-full overflow-hidden"
                                [innerHTML]="(body() | sanitize) || empty_notes"
                            ></div>
                        }
                    </div>
                }
                @if (has_assets()) {
                    <div
                        class="border-base-200 sm:bg-base-100 mt-4 min-w-1/3 grow-3 rounded-sm sm:m-2 sm:w-[16rem] sm:border sm:p-4"
                    >
                        <h3 class="mx-3 pt-2 text-lg font-medium">
                            {{ 'RESOURCE.ASSETS' | translate }} ({{
                                event().valid_assets?.length || 0
                            }})
                        </h3>
                        <div class="flex flex-col space-y-2">
                            @for (
                                request of event().valid_assets;
                                track request
                            ) {
                                <div
                                    request
                                    class="border-base-300 bg-base-100 overflow-hidden rounded-xl border"
                                >
                                    <button
                                        matRipple
                                        class="flex w-full items-center space-x-2 p-3"
                                        (click)="toggleRequest(request.id)"
                                    >
                                        <div class="flex-1 text-left">
                                            <div class="text-sm">
                                                {{
                                                    'CALENDAR_EVENT.ASSETS_REQUESTED_FOR'
                                                        | translate
                                                            : {
                                                                  time:
                                                                      request.deliver_at
                                                                      | date
                                                                          : 'MMM d, ' +
                                                                                time_format(),
                                                              }
                                                }}
                                            </div>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
                                            [class.bg-success]="
                                                request.state === 'approved'
                                            "
                                            [class.text-success-content]="
                                                request.state === 'approved'
                                            "
                                            [class.bg-warning]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.text-warning-content]="
                                                request.state !== 'approved' &&
                                                request.state !== 'rejected'
                                            "
                                            [class.bg-error]="
                                                request.state === 'rejected'
                                            "
                                            [class.text-error-content]="
                                                request.state === 'rejected'
                                            "
                                            [matTooltip]="
                                                request.state || 'Tentative'
                                            "
                                        >
                                            <icon>
                                                {{
                                                    request.state === 'approved'
                                                        ? 'done'
                                                        : request.state ===
                                                            'rejected'
                                                          ? 'close'
                                                          : 'schedule'
                                                }}
                                            </icon>
                                        </div>
                                        <div
                                            class="flex h-8 w-8 items-center justify-center rounded-full print:hidden"
                                        >
                                            <icon class="text-2xl">
                                                {{
                                                    show_request()[request.id]
                                                        ? 'expand_less'
                                                        : 'expand_more'
                                                }}
                                            </icon>
                                        </div>
                                    </button>
                                    <div
                                        class="contract-expand divide-base-100 bg-base-200 flex flex-col divide-y"
                                        [class.contract-collapsed]="
                                            !print() &&
                                            !show_request()[request.id]
                                        "
                                    >
                                        @for (
                                            item of request.items;
                                            track item
                                        ) {
                                            <div
                                                class="flex items-center space-x-2 px-3 py-1 hover:opacity-90"
                                            >
                                                <div
                                                    class="flex flex-1 items-center"
                                                >
                                                    <span class="text-sm">{{
                                                        item.name || 'Item'
                                                    }}</span>
                                                </div>
                                                <div
                                                    class="bg-success text-success-content rounded-sm px-2 py-1 text-xs"
                                                >
                                                    x{{ item.quantity }}
                                                </div>
                                            </div>
                                        }
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                }
                <button
                    icon
                    default
                    matRipple
                    mat-dialog-close
                    class="absolute top-2 left-2 print:hidden"
                >
                    <icon>close</icon>
                </button>
                @if (show_attendees()) {
                    <div class="absolute inset-0 z-50">
                        <attendee-list
                            [list]="event().attendees"
                            [host]="event().host"
                            (click)="show_attendees.set(false)"
                        ></attendee-list>
                    </div>
                }
            </div>
            <mat-menu #menu="matMenu" xPosition="before">
                @if (!hide_edit()) {
                    <button
                        mat-menu-item
                        mat-dialog-close
                        (click)="edit ? edit(event()) : ''"
                        [matTooltip]="!can_edit() ? no_edit_message() : ''"
                        [disabled]="!can_edit()"
                    >
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">edit</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_EDIT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (can_cancel) {
                    <button mat-menu-item (click)="remove(event(), false)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_DELETE' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (is_concierge) {
                    <button mat-menu-item (click)="printEvent()">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">print</icon>
                            <div>
                                {{ 'CALENDAR_EVENT.ACTION_PRINT' | translate }}
                            </div>
                        </div>
                    </button>
                }
                @if (event().state !== 'done' && event().recurring_event_id) {
                    <button mat-menu-item (click)="remove(event(), true)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-error text-2xl">delete</icon>
                            <div>
                                {{
                                    'CALENDAR_EVENT.ACTION_DELETE_SERIES'
                                        | translate
                                }}
                            </div>
                        </div>
                    </button>
                }
                @for (act of custom_actions(); track act) {
                    <button mat-menu-item (click)="action.emit(act.id)">
                        <div class="flex items-center space-x-2 pr-2 text-base">
                            <icon class="text-2xl">{{ act.icon }}</icon>
                            <div>{{ act.name }}</div>
                        </div>
                    </button>
                }
            </mat-menu>
        </div>
    `, providers: [SpacePipe], imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatMenuModule,
      MatDialogModule,
      AttendeeListComponent,
      SanitizePipe,
      InteractiveMapComponent,
      UserAvatarComponent,
      StatusPillComponent,
      ImageCarouselComponent,
      BindingDirective,
      MatTooltipModule,
      UserPipe
    ] }]
  }], null, { action: [{ type: Output, args: ["action"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventDetailsModalComponent, { className: "EventDetailsModalComponent", filePath: "libs/events/src/lib/event-details-modal.component.ts", lineNumber: 761 });
})();

// libs/events/src/lib/event-card.component.ts
var _c09 = () => ["./"];
var _c16 = (a0) => ({ event: a0 });
var _c24 = (a0) => ({ count: a0 });
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
    \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(28, _c09))("queryParams", \u0275\u0275pureFunction1(29, _c16, ctx_r0.event()?.id));
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
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(33, 25, "CALENDAR_EVENT.ATTENDEE_COUNT", \u0275\u0275pureFunction1(31, _c24, ctx_r0.event()?.attendees?.length || 0)), " ");
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

// apps/workplace/src/app/schedule/schedule-state.service.ts
function isBookingForOtherUser(item, current_email = currentUser()?.email) {
  if (!(item instanceof Booking))
    return false;
  const current_user_email = current_email?.toLowerCase();
  const booked_by_email = item.booked_by_email?.toLowerCase();
  const user_email = item.user_email?.toLowerCase();
  return !!current_user_email && booked_by_email === current_user_email && !!user_email && user_email !== current_user_email;
}
function deduplicateEventsByIcalUid(events_by_source) {
  const seen_ical_uids = /* @__PURE__ */ new Set();
  const result = [];
  for (const events of events_by_source) {
    for (const event of events) {
      const uid = event.ical_uid;
      if (!uid || !seen_ical_uids.has(uid)) {
        if (uid)
          seen_ical_uids.add(uid);
        result.push(event);
      }
    }
  }
  return result;
}
var ScheduleStateService = class _ScheduleStateService extends AsyncHandler {
  get offset_weekday() {
    return this._settings.get("app.week_start") || 0;
  }
  get dateValue() {
    return this._date();
  }
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._event_form = inject(EventFormService);
    this._booking_form = inject(BookingFormService);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._injector = inject(Injector);
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event_sources = signal(
      ["api"],
      ...ngDevMode ? [{ debugName: "_event_sources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      { period: "day" },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        shown_types: [
          "event",
          "desk",
          "parking",
          "visitor",
          "locker",
          "group-event"
        ],
        show_bookings_for_others: false
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._end_date = signal(
      null,
      ...ngDevMode ? [{ debugName: "_end_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._deleted = [];
    this._ignore_cancel = [];
    this._network_requested = false;
    this._network_started = false;
    this._booking_query_requests = /* @__PURE__ */ new Map();
    this._space_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_space_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_user_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._api_events = signal(
      [],
      ...ngDevMode ? [{ debugName: "_api_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._visitors = signal(
      [],
      ...ngDevMode ? [{ debugName: "_visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desks = signal(
      [],
      ...ngDevMode ? [{ debugName: "_desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._parking_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_parking_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locker_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_locker_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers = signal(
      [],
      ...ngDevMode ? [{ debugName: "_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    this.filters = this._filters.asReadonly();
    this.date = this._date.asReadonly();
    this.end_date = this._end_date.asReadonly();
    this.loading = this._loading.asReadonly();
    this.event_sources = this._event_sources.asReadonly();
    this._query_params = computed(
      () => {
        this._poll();
        if (!this._requests_ready())
          return void 0;
        return {
          date: this._date(),
          end_date: this._end_date(),
          period: this._options().period
        };
      },
      ...ngDevMode ? [{ debugName: "_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params_debounced = debounced(this._query_params, 300);
    this.week_date = computed(
      () => startOfWeek(this._date(), {
        weekStartsOn: this.offset_weekday
      }).valueOf(),
      ...ngDevMode ? [{ debugName: "week_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.week_options = computed(
      () => {
        if (!this._org.active_building())
          return [];
        const options = [];
        const date = startOfDay(Date.now());
        for (let i = -4; i < 48; i++) {
          const day = addWeeks(date, i);
          const week_s_date = startOfWeek(day, {
            weekStartsOn: this.offset_weekday
          });
          const week_e_date = endOfWeek(day, {
            weekStartsOn: this.offset_weekday
          });
          const this_week = isAfter(Date.now(), week_s_date) && isBefore(Date.now(), week_e_date);
          options.push({
            id: week_s_date.valueOf(),
            name: `${format(week_s_date, "dd MMM")} - ${format(week_e_date, "dd MMM")}`,
            this_week
          });
        }
        return options;
      },
      ...ngDevMode ? [{ debugName: "week_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.driver_events = computed(
      () => {
        if (!this._hasFeature("spaces"))
          return [];
        this._requestNetwork();
        return this._filterUserEvents(this._user_bookings());
      },
      ...ngDevMode ? [{ debugName: "driver_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ws_events = computed(
      () => {
        if (!this._hasFeature("spaces"))
          return [];
        this._requestNetwork();
        return this._filterUserEvents(this._space_bookings());
      },
      ...ngDevMode ? [{ debugName: "ws_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.api_events = computed(
      () => {
        if (!this._canLoadEvents())
          return [];
        this._requestNetwork();
        return this._api_events();
      },
      ...ngDevMode ? [{ debugName: "api_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.raw_events = computed(
      () => {
        const sources = this._event_sources();
        if (!sources?.length)
          return [];
        const events_by_source = sources.map((source) => {
          switch (source) {
            case "driver":
              return this.driver_events();
            case "ws":
              return this.ws_events();
            case "api":
            default:
              return this.api_events();
          }
        });
        return deduplicateEventsByIcalUid(events_by_source);
      },
      ...ngDevMode ? [{ debugName: "raw_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.events = computed(
      () => this.raw_events().filter((_) => !_.extension_data?.shared_event),
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visitors = computed(
      () => {
        if (!this._canLoadBookingType("visitor"))
          return [];
        this._requestNetwork();
        return this._visitors();
      },
      ...ngDevMode ? [{ debugName: "visitors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.desks = computed(
      () => {
        if (!this._canLoadBookingType("desk"))
          return [];
        this._requestNetwork();
        return this._desks();
      },
      ...ngDevMode ? [{ debugName: "desks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.parking = computed(
      () => {
        if (!this._canLoadBookingType("parking"))
          return [];
        this._requestNetwork();
        return this._parking_bookings();
      },
      ...ngDevMode ? [{ debugName: "parking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.group_events = computed(
      () => this._hasFeature("group-events") ? this.raw_events().filter((_) => _.extension_data?.shared_event) : [],
      ...ngDevMode ? [{ debugName: "group_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.locker_bookings = computed(
      () => {
        if (!this._canLoadBookingType("locker"))
          return [];
        this._requestNetwork();
        return this._locker_bookings();
      },
      ...ngDevMode ? [{ debugName: "locker_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.lockers = computed(
      () => {
        if (!this._canLoadBookingType("locker"))
          return [];
        this._requestNetwork();
        return this._lockers();
      },
      ...ngDevMode ? [{ debugName: "lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = computed(
      () => {
        const events = this.events();
        const visitors = this.visitors();
        const desks = this.desks();
        const parking = this.parking();
        const lockers = this.lockers();
        const locker_bookings = this.locker_bookings();
        const group_events = this.group_events();
        const filtered_events = events.filter((ev) => !desks.find((bkn) => `${ev.meeting_id}` === `${bkn.id}`) && ev.linked_bookings[0]?.booking_type !== "group-event");
        return [
          ...filtered_events,
          ...visitors,
          ...desks,
          ...parking,
          ...lockers,
          ...locker_bookings,
          ...group_events
        ].sort((a, b) => a.date - b.date);
      },
      ...ngDevMode ? [{ debugName: "bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_bookings = computed(
      () => this.bookings().filter((_) => {
        const filters = this._filters();
        if (this._deleted.includes(_.instance ? `${_.id}|${_.instance}` : _.id)) {
          return false;
        }
        if (this.isBookingForOtherUser(_) && !filters?.show_bookings_for_others) {
          return false;
        }
        if (_.extension_data?.shared_event && !filters?.shown_types?.includes("group-event")) {
          return false;
        }
        if (_ instanceof CalendarEvent && !_.extension_data?.shared_event && !filters?.shown_types?.includes("event")) {
          return false;
        }
        if (_ instanceof CalendarEvent)
          return true;
        return filters?.shown_types?.includes(_.booking_type);
      }),
      ...ngDevMode ? [{ debugName: "filtered_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._deleted = JSON.parse(sessionStorage.getItem("PLACEOS.events.deleted") || "[]");
    effect(() => {
      this._org.active_building();
      this._setConfiguredEventSources();
    });
    effect(() => {
      this._settings.listen("CHAT:task_complete")();
      this.triggerPoll();
    });
  }
  _requestNetwork() {
    if (this._network_requested || this._network_started)
      return;
    this._network_requested = true;
    queueMicrotask(() => this._startNetwork());
  }
  _startNetwork() {
    if (this._network_started)
      return;
    this._network_started = true;
    this._loadSpaceBookings();
    this._loadUserBookings();
    this._loadApiEvents();
    this._loadBookingType("visitor", this._visitors, (list) => list.filter((_) => !_.linked_event));
    this._loadBookingType("desk", this._desks);
    this._loadBookingType("parking", this._parking_bookings, (list) => this._resolveParkingNames(list));
    this._loadBookingType("locker", this._locker_bookings);
    this._loadLockers();
    this.interval("wfh_checks", () => this._checkCancel(), 60 * 1e3);
    this._checkCancel();
  }
  _hasFeature(feature) {
    return (this._settings.get("app.features") || []).includes(feature);
  }
  _canLoadEvents() {
    return this._hasFeature("spaces") || this._hasFeature("group-events");
  }
  _canLoadBookingType(type) {
    switch (type) {
      case "desk":
        return this._hasFeature("desks");
      case "parking":
        return this._hasFeature("parking") || this._hasFeature("parking-requests");
      case "visitor":
        return this._hasFeature("visitor-invite");
      case "locker":
        return this._hasFeature("lockers");
      default:
        return true;
    }
  }
  setOptions(options) {
    this._options.set(options);
  }
  getOptions() {
    return this._options();
  }
  setEventSources(sources) {
    if (sources?.length)
      this._event_sources.set(sources);
  }
  getEventSources() {
    return this._event_sources();
  }
  /** Reload bookings. Drops in-flight requests so a change made just now is not masked by a stale response. */
  triggerPoll() {
    this._booking_query_requests.clear();
    this._poll.set(Date.now());
  }
  startPolling(delay = 3 * MINUTES) {
    this._startNetwork();
    this.interval("poll", () => this._poll.set(Date.now()), delay);
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setDate(date) {
    this._date.set(date);
  }
  setEndDate(date) {
    this._end_date.set(date);
  }
  setDateRange(start, end) {
    this._date.set(start);
    this._end_date.set(end);
  }
  removeItem(item) {
    this._startNetwork();
    this.setAsDeleted(item.instance ? `${item.id}|${item.instance}` : item.id);
    this._poll.set(Date.now());
  }
  setAsDeleted(id) {
    this._deleted.push(id);
    sessionStorage.setItem("PLACEOS.events.deleted", JSON.stringify(this._deleted));
  }
  setType(name, state) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types.includes(name) === state)
      return;
    const new_types = state ? unique([...shown_types, name]) : shown_types.filter((_) => _ !== name);
    this._filters.set(__spreadProps(__spreadValues({}, filters), { shown_types: new_types }));
  }
  setBookingsForOthers(state) {
    const filters = this._filters();
    if (filters.show_bookings_for_others === state)
      return;
    this._filters.set(__spreadProps(__spreadValues({}, filters), { show_bookings_for_others: state }));
  }
  isBookingForOtherUser(item) {
    return isBookingForOtherUser(item);
  }
  toggleBookingsForOthers() {
    this.setBookingsForOthers(!this._filters().show_bookings_for_others);
  }
  async toggleType(name, clear = false) {
    const filters = this._filters();
    const { shown_types } = filters;
    if (shown_types && (shown_types.includes(name) || clear)) {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: shown_types.filter((_) => _ !== name)
      }));
    } else {
      this._filters.set(__spreadProps(__spreadValues({}, filters), {
        shown_types: [...shown_types, name]
      }));
    }
  }
  _loadSpaceBookings() {
    effect(async (onCleanup) => {
      const bld = this._org.active_building();
      if (!this._hasFeature("spaces") || !this._requests_ready() || !bld?.id) {
        this._space_bookings.set([]);
        return;
      }
      let active = true;
      const cleanups = [];
      onCleanup(() => {
        active = false;
        for (const cleanup of cleanups)
          cleanup();
      });
      this._loading.set(true);
      const spaces = await requestSpacesForZone(bld.id).toPromise().catch(() => []);
      const events_by_space = [];
      for (const [idx, space] of (spaces || []).entries()) {
        const binding = Dd(space.id, "Bookings").variable("bookings");
        cleanups.push(binding.bindThenSubscribe((event_list) => {
          events_by_space[idx] = (event_list || []).map((i) => new CalendarEvent(__spreadProps(__spreadValues({}, i), {
            resources: i.attendees.filter((_) => _.email === space.email || _.resource),
            system: space
          })));
          if (active) {
            this._space_bookings.set(flatten(events_by_space));
          }
        }));
      }
      this._loading.set(false);
    }, { injector: this._injector });
  }
  _loadUserBookings() {
    effect(async () => {
      const bld = this._org.active_building();
      const query = this._query_params_debounced.value();
      if (!this._hasFeature("spaces") || !query || !bld?.id) {
        this._user_bookings.set([]);
        return;
      }
      this._loading.set(true);
      const mod = this._org.module("location_services", "LocationServices");
      const list = mod?.system ? await mod.execute("my_bookings").catch(() => []) : [];
      this._user_bookings.set((list || []).map((_) => new CalendarEvent(_)));
      this._loading.set(false);
    }, { injector: this._injector });
  }
  _loadApiEvents() {
    effect(async () => {
      const query_params = this._query_params_debounced.value();
      if (!this._canLoadEvents() || !query_params) {
        this._api_events.set([]);
        return;
      }
      const { date, end_date, period } = query_params;
      this._loading.set(true);
      const query = this._periodQuery(period, date, end_date);
      const list = this._settings.get("app.events.use_bookings") ? await queryBookings(__spreadProps(__spreadValues({}, query), { type: "room" })).then((_) => _.map((i) => newCalendarEventFromBooking(i))).catch(() => []) : await queryEvents(__spreadValues({}, query)).catch(() => []);
      this._api_events.set(list);
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  _loadBookingType(type, target, map_list = (list) => list) {
    effect(async () => {
      const query_params = this._query_params_debounced.value();
      if (!this._canLoadBookingType(type) || !query_params) {
        target.set([]);
        return;
      }
      const { date, end_date, period } = query_params;
      this._loading.set(true);
      const list = await this._bookingQuery(type, period, date, end_date);
      target.set(map_list(list));
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  /**
   * Replace the asset name of parking bookings with the human readable
   * parking space name/identifier. Without this the booking falls back to
   * showing the raw `asset_id` of the space.
   */
  _resolveParkingNames(list) {
    const spaces = this._injector.get(ParkingService).spaces();
    return list.map((booking) => {
      if (booking.asset_name && booking.asset_name !== booking.asset_id) {
        return booking;
      }
      const space = spaces.find((_) => _.id === booking.asset_id);
      const name = space?.name || space?.identifier;
      if (!name)
        return booking;
      return new Booking(__spreadProps(__spreadValues({}, booking.toJSON()), { asset_name: name }));
    });
  }
  _loadLockers() {
    effect(async () => {
      const bld = this._org.active_building();
      const region = this._org.active_region();
      if (!this._canLoadBookingType("locker") || !this._requests_ready()) {
        this._lockers.set([]);
        return;
      }
      const scope_id = this._settings.get("app.use_region") ? region?.id || this._org.region?.id : bld?.id;
      if (!scope_id) {
        this._lockers.set([]);
        return;
      }
      const lockers = await loadLockerResources(this._org, scope_id);
      const mod = this._org.module("lockers", "LockerLocations");
      const my_lockers = mod ? await mod.execute("lockers_allocated_to_me").catch(() => []) : [];
      this._lockers.set(my_lockers.map((i) => {
        const locker = lockers.find((lkr) => lkr.id === i.locker_id);
        if (!locker && (!i.level || !i.building)) {
          return null;
        }
        return new Booking({
          date: startOfDay(Date.now()).valueOf(),
          duration: 24 * 60 - 1,
          title: "Locker Booking",
          description: i.locker_name,
          booking_type: "locker",
          all_day: true,
          asset_id: locker.map_id,
          asset_name: i.locker_name,
          zones: [...locker.bank?.zones || []],
          extension_data: {}
        });
      }).filter((item) => item));
      this.timeout("end_loading", () => this._loading.set(false));
    }, { injector: this._injector });
  }
  _filterUserEvents(list) {
    const user = currentUser();
    const date = this._date();
    return list.filter((_) => isSameDay(_.date, date) && (_.host.toLowerCase() === user.email.toLowerCase() || _.attendees.find((a) => a.email.toLowerCase() === user.email.toLowerCase())) && !_.linked_bookings?.find((b) => b.booking_type === "group-event"));
  }
  _setConfiguredEventSources() {
    const sources_setting = this._settings.get("app.schedule.event_sources");
    if (sources_setting?.length) {
      this._event_sources.set(sources_setting);
    } else {
      const legacy_source = this._settings.get("app.schedule.use_driver") ? "driver" : this._settings.get("app.schedule.use_websocket") ? "ws" : "api";
      this._event_sources.set([legacy_source]);
    }
  }
  _periodQuery(period, date, end_date) {
    return {
      period_start: getUnixTime(period === "range" || period === "day" ? startOfDay(date) : startOfWeek(date, {
        weekStartsOn: this.offset_weekday
      })),
      period_end: getUnixTime(period === "range" ? endOfDay(end_date || date) : period === "day" ? endOfDay(date) : endOfWeek(date, {
        weekStartsOn: this.offset_weekday
      }))
    };
  }
  _bookingQuery(type, period, date, end_date) {
    const query = __spreadProps(__spreadValues({}, this._periodQuery(period, date, end_date)), {
      type,
      include_checked_out: true,
      include_booked_by: true,
      include_deleted: true,
      // Recurring series only expand cancelled instances when the
      // `deleted` flag is also set. Without it a cancelled day of a
      // multi-day parking booking is dropped from the response.
      deleted: true
    });
    const key = JSON.stringify(query);
    const existing = this._booking_query_requests.get(key);
    if (existing)
      return existing;
    const request = queryBookings(query).then((list) => type === "visitor" ? list.filter((booking) => booking.status !== "cancelled" || !booking.extension_data?.removed_from_group) : list).catch(() => []).finally(() => this._booking_query_requests.delete(key));
    this._booking_query_requests.set(key, request);
    return request;
  }
  async _checkCancel() {
    const user = currentUser();
    if (!user?.id)
      return;
    const is_home = user.location !== "wfo";
    const auto_release = this._settings.get("app.auto_release");
    if (!auto_release || !is_home || !(auto_release.time_after || auto_release.time_before) || !auto_release.resources?.length) {
      return;
    }
    for (const type of auto_release.resources) {
      if (!this._canLoadBookingType(type))
        continue;
      const time_after = auto_release[`${type}_time_after`] || auto_release.time_after;
      const time_before = Math.min(60, auto_release[`${type}_time_before`] || auto_release.time_before || 0);
      const bookings = await queryBookings({
        period_start: getUnixTime(startOfMinute(Date.now())),
        period_end: getUnixTime(addMinutes(Date.now(), (time_after || 5) + time_before)),
        type
      });
      const check_block = (time_after || 0) + time_before;
      for (const booking of bookings) {
        if (this._ignore_cancel.includes(booking.id) || booking.checked_in || booking.rejected) {
          continue;
        }
        const start_time = booking.is_all_day ? setHours(booking.date, auto_release.all_day_start) : booking.date;
        this._dialog.closeAll();
        const diff = differenceInMinutes(addMinutes(start_time, time_after || 0), Date.now());
        if (diff > check_block || diff < 0)
          continue;
        const time = addMinutes(start_time, time_after || 0);
        const close_after = differenceInMilliseconds(time.getTime() + 60 * 1e3, Date.now());
        const wording = type === "parking" ? "reservation" : "booking";
        const result = await openConfirmModal({
          title: `Keep ${type} ${wording}`,
          content: `You have indicated you are not in the office.
                                Your  ${wording} for "<i>${booking.asset_name || booking.title}</i>" at ${format(booking.date, this._settings.time_format)} will be cancelled at ${format(time, this._settings.time_format)}.<br/><br/>
                                Do you wish to keep this ${wording}?`,
          icon: { content: "event_busy" },
          confirm_text: "Keep",
          close_delay: close_after
        }, this._dialog);
        if (result.reason !== "done") {
          this._ignore_cancel.push(booking.id);
          continue;
        }
        result.loading("Checking in booking...");
        await setBookingCheckedIn(booking, true);
        result.close();
      }
    }
  }
  ///////////////////////////////////////////////////////////////
  async edit(event) {
    console.log("Edit Event:", event);
    this._router.navigate(["/book", "meeting", "form"]);
    if (event.creator !== event.mailbox) {
      event = (await queryEvents({
        period_start: event.event_start,
        period_end: event.event_end,
        ical_uid: event.ical_uid
      })).find((_) => _.ical_uid === event.ical_uid) || event;
    }
    const resources = event.resources?.length ? event.resources : event.system ? [event.system] : [];
    if (resources.length) {
      const full_resources = await Promise.all(resources.map(async (resource) => {
        const lookup_key = resource.email || resource.id;
        if (!lookup_key)
          return resource;
        let space = this._spaces.find(lookup_key);
        if (!space) {
          try {
            await this._spaces.loadSpace(lookup_key);
            space = this._spaces.find(lookup_key);
          } catch (err) {
            console.warn(`Failed to load space ${lookup_key}:`, err);
          }
        }
        return space || resource;
      }));
      event = new CalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
        resources: full_resources
      }));
    }
    setTimeout(() => this._event_form.newForm(event), 300);
  }
  editBooking(event) {
    console.log("Edit Booking:", event.type);
    const booking_type = `${event.booking_type || ""}`.trim() || event.type;
    this._router.navigate(["/book", `${event.type}`]);
    this._booking_form.newForm(booking_type, event);
    if (booking_type === "visitor")
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
    const resource_name = item instanceof CalendarEvent ? item.title || item.space?.display_name : item.title || item.asset_name || item.asset_id;
    const resp = await openConfirmModal({
      title: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_TITLE" : "APP.WORKPLACE.SCHEDULE_REMOVE_TITLE", { name: resource_name, time }),
      content: i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_MSG" : "APP.WORKPLACE.SCHEDULE_REMOVE_MSG", { name: resource_name, time }),
      icon: { content: "delete" }
    }, this._dialog);
    if (resp.reason !== "done")
      return;
    if (item instanceof CalendarEvent && !item.from_bookings && item.creator !== item.mailbox) {
      item = (await queryEvents({
        period_start: item.event_start,
        period_end: item.event_end,
        ical_uid: item.ical_uid
      })).find((_) => _.ical_uid === item.ical_uid) || item;
    }
    resp.loading(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_LOADING" : "APP.WORKPLACE.SCHEDULE_REMOVE_LOADING"));
    await (item instanceof CalendarEvent && !item.from_bookings ? removeEvent : removeBooking)(remove_series ? item.recurring_event_id || item.id : item.id, {
      calendar: this._settings.get("app.events.use_bookings") ? null : item.calendar || currentUser()?.email,
      system_id: item.system?.id,
      instance: remove_series ? void 0 : !!item.instance,
      start_time: item.instance ? item.instance : void 0
    }).catch((e) => {
      notifyError(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_ERROR" : "APP.WORKPLACE.SCHEDULE_REMOVE_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    notifySuccess(i18n(remove_series ? "APP.WORKPLACE.SCHEDULE_REMOVE_SERIES_SUCCESS" : "APP.WORKPLACE.SCHEDULE_REMOVE_SUCCESS"));
    if (item instanceof CalendarEvent)
      this.removeItem(item);
    else
      this.triggerPoll();
    this._dialog.closeAll();
  }
  async end(item) {
    const now = Date.now();
    const resource_name = item.asset_name || item.asset_id;
    if (isAfter(now, item.date_end)) {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ALREADY_ENDED_ERROR"));
      return;
    }
    if (isBefore(now, item.date)) {
      return this.remove(item);
    }
    const time = `${format(item.date, "dd MMM yyyy h:mma")}`;
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
    const promise = setBookingCheckedIn(item, false).catch((e) => {
      notifyError(i18n("APP.WORKPLACE.SCHEDULE_END_ERROR", { error: e }));
      resp.close();
      throw e;
    });
    await promise;
    notifySuccess(i18n("APP.WORKPLACE.SCHEDULE_END_SUCCESS"));
    this.triggerPoll();
    this._dialog.closeAll();
  }
  static {
    this.\u0275fac = function ScheduleStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ScheduleStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ScheduleStateService, factory: _ScheduleStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ScheduleStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// apps/outlook-addin/src/app/rooms/upcoming-bookings.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function UpcomingBookingsComponent_Conditional_11_For_1_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "event-card", 9);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("event", item_r1);
  }
}
function UpcomingBookingsComponent_Conditional_11_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "booking-card", 10);
  }
  if (rf & 2) {
    const item_r1 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275property("booking", item_r1);
  }
}
function UpcomingBookingsComponent_Conditional_11_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, UpcomingBookingsComponent_Conditional_11_For_1_Conditional_0_Template, 1, 1, "event-card", 9)(1, UpcomingBookingsComponent_Conditional_11_For_1_Conditional_1_Template, 1, 1, "booking-card", 10);
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r1.isEvent(item_r1) ? 0 : 1);
  }
}
function UpcomingBookingsComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, UpcomingBookingsComponent_Conditional_11_For_1_Template, 2, 1, null, null, _forTrack02);
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const event_list_r3 = \u0275\u0275readContextLet(10);
    \u0275\u0275repeater(event_list_r3);
  }
}
function UpcomingBookingsComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "p");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "APP.WORKPLACE.UPCOMING_EMPTY"), " ");
  }
}
var UpcomingBookingsComponent = class _UpcomingBookingsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._schedule = inject(ScheduleStateService);
    this.user = currentUser();
    this.loading = this._schedule.loading;
    this.events = this._schedule.filtered_bookings;
    this.now = signal(
      startOfMinute(Date.now()),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._schedule.toggleType("parking", true);
    this.subscription("poll", this._schedule.startPolling());
  }
  isEvent(item) {
    return item instanceof CalendarEvent;
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UpcomingBookingsComponent_BaseFactory;
      return function UpcomingBookingsComponent_Factory(__ngFactoryType__) {
        return (\u0275UpcomingBookingsComponent_BaseFactory || (\u0275UpcomingBookingsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UpcomingBookingsComponent)))(__ngFactoryType__ || _UpcomingBookingsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UpcomingBookingsComponent, selectors: [["placeos-upcoming-bookings"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 17, vars: 14, consts: [[1, "bg-base-200", "absolute", "inset-0", "overflow-auto"], [1, "border-base-300", "bg-base-100", "mx-auto", "min-h-full", "w-160", "max-w-full", "border-x", "pt-2"], [1, "bg-base-200", "sticky", "top-0", "z-10", "mx-auto", "mb-2", "flex", "h-14", "w-full", "max-w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "px-4", "py-2"], [1, "text-xl", "font-medium", "capitalize"], [1, "px-4", "pt-4", "text-lg", "font-medium"], [1, "h-1/2", "flex-1", "space-y-4", "p-4"], ["empty", "", 1, "my-6", "flex", "h-3/4", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-2", "p-8", "text-center"], ["loading", "", 1, "my-6", "flex", "h-3/4", "w-full", "flex-1", "flex-col", "items-center", "justify-center", "space-y-4"], [3, "diameter"], [3, "event"], [3, "booking"]], template: function UpcomingBookingsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "header", 2)(3, "h2", 3);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(6, "h3", 4);
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "div", 5);
        \u0275\u0275declareLet(10);
        \u0275\u0275conditionalCreate(11, UpcomingBookingsComponent_Conditional_11_Template, 2, 0)(12, UpcomingBookingsComponent_Conditional_12_Template, 4, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(13, "div", 7);
        \u0275\u0275element(14, "mat-spinner", 8);
        \u0275\u0275elementStart(15, "p");
        \u0275\u0275text(16, "Retrieving bookings...");
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 8, "APP.WORKPLACE.UPCOMING"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(8, 10, ctx.now(), "EEE dd LLL yyyy"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", ctx.loading());
        \u0275\u0275advance();
        const event_list_r4 = \u0275\u0275storeLet(ctx.events());
        \u0275\u0275advance();
        \u0275\u0275conditional(event_list_r4?.length ? 11 : 12);
        \u0275\u0275advance(2);
        \u0275\u0275classProp("hidden", !ctx.loading());
        \u0275\u0275advance();
        \u0275\u0275property("diameter", 32);
      }
    }, dependencies: [
      CommonModule,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      EventCardComponent,
      BookingCardComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpcomingBookingsComponent, [{
    type: Component,
    args: [{ selector: "placeos-upcoming-bookings", template: `
        <div class="bg-base-200 absolute inset-0 overflow-auto">
            <div
                class="border-base-300 bg-base-100 mx-auto min-h-full w-160 max-w-full border-x pt-2"
            >
                <header
                    class="bg-base-200 sticky top-0 z-10 mx-auto mb-2 flex h-14 w-full max-w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none px-4 py-2"
                >
                    <h2 class="text-xl font-medium capitalize">
                        {{ 'APP.WORKPLACE.UPCOMING' | translate }}
                    </h2>
                </header>
                <h3 class="px-4 pt-4 text-lg font-medium">
                    {{ now() | date: 'EEE dd LLL yyyy' }}
                </h3>
                <div
                    class="h-1/2 flex-1 space-y-4 p-4"
                    [class.hidden]="loading()"
                >
                    @let event_list = events();
                    @if (event_list?.length) {
                        @for (item of event_list; track item.id) {
                            @if (isEvent(item)) {
                                <event-card [event]="item"></event-card>
                            } @else {
                                <booking-card [booking]="item"></booking-card>
                            }
                        }
                    } @else {
                        <div
                            empty
                            class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-2 p-8 text-center"
                        >
                            <p>
                                {{ 'APP.WORKPLACE.UPCOMING_EMPTY' | translate }}
                            </p>
                        </div>
                    }
                </div>
                <div
                    loading
                    [class.hidden]="!loading()"
                    class="my-6 flex h-3/4 w-full flex-1 flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner [diameter]="32"></mat-spinner>
                    <p>Retrieving bookings...</p>
                </div>
            </div>
        </div>
    `, imports: [
      CommonModule,
      TranslatePipe,
      MatProgressSpinnerModule,
      EventCardComponent,
      BookingCardComponent
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UpcomingBookingsComponent, { className: "UpcomingBookingsComponent", filePath: "apps/outlook-addin/src/app/rooms/upcoming-bookings.component.ts", lineNumber: 78 });
})();
export {
  UpcomingBookingsComponent
};
//# debugId=f70aaa40-3662-5728-832e-bf9243807b74
//# sourceMappingURL=upcoming-bookings.component-F23WIIUS.js.map
