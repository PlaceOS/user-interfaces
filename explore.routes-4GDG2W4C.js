import {
  LandingStateService
} from "./chunk-36DBF75L.js";
import {
  LockerGridComponent
} from "./chunk-U26SUAVM.js";
import {
  VirtualConciergeButtonComponent
} from "./chunk-6YOLSDKV.js";
import {
  ExploreDeskInfoComponent
} from "./chunk-H62VYYAU.js";
import {
  LevelPipe
} from "./chunk-24D7FDRW.js";
import {
  toSignal
} from "./chunk-J2FXMR2O.js";
import {
  ExploreParkingInfoComponent
} from "./chunk-VIV5VJWO.js";
import {
  MapPinComponent
} from "./chunk-YZ3F6BUU.js";
import {
  DEFAULT_COLOURS,
  ExploreIconComponent,
  ExploreSpacesService
} from "./chunk-I254NESN.js";
import {
  DurationFieldComponent
} from "./chunk-KOAY47YO.js";
import {
  InteractiveMapComponent
} from "./chunk-33FOMMQ6.js";
import "./chunk-E2NXHK2Y.js";
import {
  DateFieldComponent
} from "./chunk-R6TRT7PX.js";
import {
  UserSearchFieldComponent
} from "./chunk-IXEDNKIR.js";
import {
  compareAsc,
  differenceInMonths
} from "./chunk-6V4PJSOJ.js";
import {
  FooterMenuComponent,
  TopbarComponent
} from "./chunk-POPIYN2F.js";
import "./chunk-VKMKKQQM.js";
import {
  SpacesService
} from "./chunk-QXGC5XOP.js";
import "./chunk-VHEWC4EI.js";
import {
  ExploreStateService
} from "./chunk-7PVG5BED.js";
import {
  TimeFieldComponent
} from "./chunk-XJ4UHQ2V.js";
import {
  SpacePipe
} from "./chunk-NKZBCC7G.js";
import "./chunk-E3WOGSGP.js";
import {
  ParkingService
} from "./chunk-JMQ7A6SW.js";
import {
  BookingFormService,
  DeskQuestionsModalComponent,
  queryParkingSpacesForZones
} from "./chunk-4SRGPAFM.js";
import {
  SettingsToggleComponent
} from "./chunk-CC5GF324.js";
import {
  AuthenticatedImageDirective,
  CustomTooltipComponent,
  MatCheckbox,
  MatCheckboxModule,
  MatTooltip,
  MatTooltipModule
} from "./chunk-MEOQRCJE.js";
import {
  showStaff
} from "./chunk-RCHDIGSI.js";
import {
  AsyncHandler,
  Booking,
  Desk,
  IconComponent,
  MAP_FEATURE_DATA,
  MAT_DIALOG_DATA,
  MapsPeopleService,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatSelect,
  MatSelectModule,
  OrganisationService,
  SettingsService,
  currentUser,
  firstValueWhere,
  getUnixTime,
  lockerBankFromAsset,
  lockerFromAsset,
  queryAllBookings,
  queryBookings,
  queryLockerAssetsForZones,
  queryLockerBankAssetsForZones,
  rulesForResource,
  saveBooking,
  setHours,
  settingSignal
} from "./chunk-VGBRJ5YL.js";
import {
  ActivatedRoute,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  ElementRef,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  Injectable,
  Injector,
  MatOption,
  MatRipple,
  MatRippleModule,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  Output,
  ReactiveFormsModule,
  Router,
  TranslatePipe,
  ViewChild,
  Vu,
  addDays,
  addMinutes,
  afterNextRender,
  alignDateToBookableHours,
  computed,
  constructFrom,
  differenceInMilliseconds,
  differenceInMinutes,
  effect,
  enUS,
  endOfDay,
  fd,
  flatten,
  getAllDayTimeRange,
  getDefaultOptions,
  getRoundingMethod,
  getTimezoneOffsetInMilliseconds,
  i18n,
  inject,
  isSameDay,
  isWithinBookableHours,
  minutesInDay,
  minutesInMonth,
  normalizeDates,
  notifyError,
  notifySuccess,
  notifyWarn,
  output,
  resource,
  setClassMetadata,
  shiftColorTowards,
  signal,
  startOfDay,
  startOfMinute,
  unique,
  untracked,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdomElement,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵnamespaceHTML,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryAdvance,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵrepeaterTrackByIndex,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵsanitizeUrl,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵviewQuerySignal
} from "./chunk-XUPR3QCE.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/formatDistance.js
function formatDistance(laterDate, earlierDate, options) {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? enUS;
  const minutesInAlmostTwoDays = 2520;
  const comparison = compareAsc(laterDate, earlierDate);
  if (isNaN(comparison)) throw new RangeError("Invalid time value");
  const localizeOptions = Object.assign({}, options, {
    addSuffix: options?.addSuffix,
    comparison
  });
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    ...comparison > 0 ? [earlierDate, laterDate] : [laterDate, earlierDate]
  );
  const seconds = differenceInSeconds(earlierDate_, laterDate_);
  const offsetInSeconds = (getTimezoneOffsetInMilliseconds(earlierDate_) - getTimezoneOffsetInMilliseconds(laterDate_)) / 1e3;
  const minutes = Math.round((seconds - offsetInSeconds) / 60);
  let months;
  if (minutes < 2) {
    if (options?.includeSeconds) {
      if (seconds < 5) {
        return locale.formatDistance("lessThanXSeconds", 5, localizeOptions);
      } else if (seconds < 10) {
        return locale.formatDistance("lessThanXSeconds", 10, localizeOptions);
      } else if (seconds < 20) {
        return locale.formatDistance("lessThanXSeconds", 20, localizeOptions);
      } else if (seconds < 40) {
        return locale.formatDistance("halfAMinute", 0, localizeOptions);
      } else if (seconds < 60) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", 1, localizeOptions);
      }
    } else {
      if (minutes === 0) {
        return locale.formatDistance("lessThanXMinutes", 1, localizeOptions);
      } else {
        return locale.formatDistance("xMinutes", minutes, localizeOptions);
      }
    }
  } else if (minutes < 45) {
    return locale.formatDistance("xMinutes", minutes, localizeOptions);
  } else if (minutes < 90) {
    return locale.formatDistance("aboutXHours", 1, localizeOptions);
  } else if (minutes < minutesInDay) {
    const hours = Math.round(minutes / 60);
    return locale.formatDistance("aboutXHours", hours, localizeOptions);
  } else if (minutes < minutesInAlmostTwoDays) {
    return locale.formatDistance("xDays", 1, localizeOptions);
  } else if (minutes < minutesInMonth) {
    const days = Math.round(minutes / minutesInDay);
    return locale.formatDistance("xDays", days, localizeOptions);
  } else if (minutes < minutesInMonth * 2) {
    months = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("aboutXMonths", months, localizeOptions);
  }
  months = differenceInMonths(earlierDate_, laterDate_);
  if (months < 12) {
    const nearestMonth = Math.round(minutes / minutesInMonth);
    return locale.formatDistance("xMonths", nearestMonth, localizeOptions);
  } else {
    const monthsSinceStartOfYear = months % 12;
    const years = Math.trunc(months / 12);
    if (monthsSinceStartOfYear < 3) {
      return locale.formatDistance("aboutXYears", years, localizeOptions);
    } else if (monthsSinceStartOfYear < 9) {
      return locale.formatDistance("overXYears", years, localizeOptions);
    } else {
      return locale.formatDistance("almostXYears", years + 1, localizeOptions);
    }
  }
}

// node_modules/date-fns/formatDistanceToNow.js
function formatDistanceToNow(date, options) {
  return formatDistance(date, constructNow(date), options);
}

// libs/components/src/lib/map-radius.component.ts
function MapRadiusComponent_Conditional_0_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "span", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, "COMMON.LAST_UPDATE"), ": ", ctx_r1.last_seen_at(), " ");
  }
}
function MapRadiusComponent_Conditional_0_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275conditionalCreate(2, MapRadiusComponent_Conditional_0_Conditional_2_Conditional_2_Template, 3, 4, "span", 4);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275styleProp("top", "-" + ctx_r1.radius() / 2 * ctx_r1.zoom() + "px");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.message, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.last_seen() ? 2 : -1);
  }
}
function MapRadiusComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275domElementContainerStart(0, 0);
    \u0275\u0275domListener("resize", function MapRadiusComponent_Conditional_0_Template_ng_container_resize_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.updateRadius());
    }, \u0275\u0275resolveWindow);
    \u0275\u0275domElement(1, "div", 1);
    \u0275\u0275conditionalCreate(2, MapRadiusComponent_Conditional_0_Conditional_2_Template, 3, 4, "div", 2);
    \u0275\u0275domElementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275styleProp("border-color", ctx_r1.stroke)("background-color", ctx_r1.fill + "40")("width", ctx_r1.radius() * ctx_r1.zoom() + "px")("height", ctx_r1.radius() * ctx_r1.zoom() + "px");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.message && ctx_r1.show_message() ? 2 : -1);
  }
}
var MapRadiusComponent = class _MapRadiusComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._el = inject(ElementRef);
    this.zoom = signal(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.radius = signal(
      this._details.radius || 10,
      ...ngDevMode ? [{ debugName: "radius" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.message = this._details.message;
    this.fill = this._details.fill || "#e53935";
    this.stroke = this._details.stroke || "#e53935";
    this.last_seen = signal(
      this._details.last_seen || 0,
      ...ngDevMode ? [{ debugName: "last_seen" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_seen_at = computed(
      () => {
        return formatDistanceToNow(this.last_seen() * 1e3) + " ago";
      },
      ...ngDevMode ? [{ debugName: "last_seen_at" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_message = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    afterNextRender(() => {
      this.updateRadius();
      setTimeout(() => this.show.set(true), 300);
      setTimeout(() => this.show_message.set(true), 1e3);
    });
  }
  updateRadius() {
    const box = this._el.nativeElement.getBoundingClientRect();
    if (!box.width)
      return setTimeout(() => this.updateRadius(), 300);
    this.radius.set(Math.max(64, (this._details.radius || 10) * (box.width || 10)));
  }
  static {
    this.\u0275fac = function MapRadiusComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapRadiusComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapRadiusComponent, selectors: [["", "map-radius", ""]], decls: 1, vars: 1, consts: [[3, "resize"], ["radius", "", 1, "center", "rounded-full", "border-4", "border-dashed"], ["message", "", 1, "whitespace-no-wrap", "bg-base-100", "absolute", "top-0", "m-2", "flex", "w-64", "flex-col", "rounded-sm", "p-2", "text-gray-700", "shadow-sm", 3, "top"], ["message", "", 1, "whitespace-no-wrap", "bg-base-100", "absolute", "top-0", "m-2", "flex", "w-64", "flex-col", "rounded-sm", "p-2", "text-gray-700", "shadow-sm"], [1, "text-xs"]], template: function MapRadiusComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, MapRadiusComponent_Conditional_0_Template, 3, 9, "ng-container");
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.show() && ctx.radius() ? 0 : -1);
      }
    }, dependencies: [TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n[message][_ngcontent-%COMP%] {\n  transform: translate(-50%, -120%);\n  animation: _ngcontent-%COMP%_fade-in-top 1s;\n}\n@keyframes _ngcontent-%COMP%_fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -220%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -120%);\n  }\n}\n/*# sourceMappingURL=map-radius.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapRadiusComponent, [{
    type: Component,
    args: [{ selector: "[map-radius]", template: `
        @if (show() && radius()) {
            <ng-container (window:resize)="updateRadius()">
                <div
                    radius
                    class="center rounded-full border-4 border-dashed"
                    [style.border-color]="stroke"
                    [style.background-color]="fill + '40'"
                    [style.width]="radius() * zoom() + 'px'"
                    [style.height]="radius() * zoom() + 'px'"
                ></div>
                @if (message && show_message()) {
                    <div
                        message
                        [style.top]="'-' + (radius() / 2) * zoom() + 'px'"
                        class="whitespace-no-wrap bg-base-100 absolute top-0 m-2 flex w-64 flex-col rounded-sm p-2 text-gray-700 shadow-sm"
                    >
                        {{ message }}
                        @if (last_seen()) {
                            <span class="text-xs">
                                {{ 'COMMON.LAST_UPDATE' | translate }}:
                                {{ last_seen_at() }}
                            </span>
                        }
                    </div>
                }
            </ng-container>
        }
    `, imports: [TranslatePipe], styles: ["/* angular:styles/component:css;4855ae5ebbe5e29c3b096322f2acb33633beeb2b058ec42ea10cb0748328f4b1;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-radius.component.ts */\n:host {\n  position: absolute;\n  height: 100%;\n  width: 100%;\n}\n[message] {\n  transform: translate(-50%, -120%);\n  animation: fade-in-top 1s;\n}\n@keyframes fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translate(-50%, -220%);\n  }\n  100% {\n    opacity: 1;\n    transform: translate(-50%, -120%);\n  }\n}\n/*# sourceMappingURL=map-radius.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapRadiusComponent, { className: "MapRadiusComponent", filePath: "libs/components/src/lib/map-radius.component.ts", lineNumber: 79 });
})();

// libs/users/src/lib/location.class.ts
var MapLocation = class {
  constructor(_data = {}) {
    this.type = _data.type || _data.location || "other";
    this.position = _data.position || _data.map_id || _data.asset_id || {
      x: _data.x / _data.map_width || 0,
      y: _data.y / _data.map_height || 0
    };
    this.variance = _data.variance || 0;
    this.last_seen = _data.last_seen || getUnixTime(/* @__PURE__ */ new Date());
    this.level = _data.level;
    this.building = _data.building;
    this.at_location = !!_data.at_location;
    this.coordinates_from = _data.coordinates_from || "top-left";
  }
};

// libs/bookings/src/lib/desk-confirm-modal.component.ts
function DeskConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 1)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 4)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-user-search-field", 11);
    \u0275\u0275listener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_1_Template_a_user_search_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.host.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r2.host());
    \u0275\u0275control();
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, ctx_r2.date(), "mediumDate"), " ");
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-date-field", 12);
    \u0275\u0275listener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_7_Template_a_date_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.date.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", ctx_r2.date());
    \u0275\u0275control();
  }
}
function DeskConfirmModalComponent_Conditional_5_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "label");
    \u0275\u0275text(2, "Reason");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 13)(4, "input", 14);
    \u0275\u0275listener("ngModelChange", function DeskConfirmModalComponent_Conditional_5_Conditional_8_Template_input_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.reason.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r2.reason());
    \u0275\u0275control();
  }
}
function DeskConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, DeskConfirmModalComponent_Conditional_5_Conditional_1_Template, 5, 4, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DeskConfirmModalComponent_Conditional_5_Conditional_6_Template, 3, 4, "div", 6)(7, DeskConfirmModalComponent_Conditional_5_Conditional_7_Template, 1, 1, "a-date-field", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(8, DeskConfirmModalComponent_Conditional_5_Conditional_8_Template, 5, 1, "div", 8);
    \u0275\u0275elementStart(9, "p");
    \u0275\u0275text(10);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "footer", 9)(12, "button", 10);
    \u0275\u0275listener("click", function DeskConfirmModalComponent_Conditional_5_Template_button_click_12_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.confirm());
    });
    \u0275\u0275text(13, "Confirm");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.can_set_host() ? 1 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 7, "FORM.DATE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.can_set_date() ? 6 : 7);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.hide_reason() ? 8 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" Your desk", ctx_r2.desks.length === 1 ? "" : "s", " will be ", ctx_r2.desk_list(), " on ", ctx_r2.level?.display_name || ctx_r2.level?.name, " ");
  }
}
function DeskConfirmModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 2);
    \u0275\u0275element(1, "mat-spinner", 15);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.loading());
  }
}
var DeskConfirmModalComponent = class _DeskConfirmModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.event = output();
    this.desks = this._data.desks || [];
    this.date = signal(
      this._data.date,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.host = signal(
      this._data.host,
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_set_date = signal(
      this._data.can_set_date,
      ...ngDevMode ? [{ debugName: "can_set_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reason = signal(
      this._data.reason,
      ...ngDevMode ? [{ debugName: "reason" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = this._data.level;
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._hide_reason = this._settings.signal("desks.hide_reason", false);
    this._can_set_host = this._settings.signal("desks.can_book_for_others", false);
    this.desk_list = computed(
      () => this.desks.map((_) => _.name).join(", "),
      ...ngDevMode ? [{ debugName: "desk_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_reason = this._hide_reason;
    this.can_set_host = this._can_set_host;
  }
  confirm() {
    this.loading.set("Requesting desk booking...");
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskConfirmModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskConfirmModalComponent, selectors: [["desk-flow-confirm-modal-component"]], outputs: { event: "event" }, decls: 7, vars: 2, consts: [[1, "flex-1"], ["icon", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "flex-col", "items-center", "justify-center", "p-12"], [1, "p-4"], ["host", "", 1, "flex", "flex-col"], [1, "mb-4"], ["date", ""], [3, "ngModel"], ["reason", "", 1, "mb-4", "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], [1, "mb-4", 3, "ngModelChange", "ngModel"], [3, "ngModelChange", "ngModel"], ["appearance", "outline"], ["matInput", "", "placeholder", "Reason", 3, "ngModelChange", "ngModel"], [1, "mb-4", 3, "diameter"]], template: function DeskConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2");
        \u0275\u0275text(2, "Confirm Booking");
        \u0275\u0275elementEnd();
        \u0275\u0275element(3, "div", 0);
        \u0275\u0275conditionalCreate(4, DeskConfirmModalComponent_Conditional_4_Template, 3, 0, "button", 1);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, DeskConfirmModalComponent_Conditional_5_Template, 14, 9)(6, DeskConfirmModalComponent_Conditional_6_Template, 4, 2, "main", 2);
      }
      if (rf & 2) {
        \u0275\u0275advance(4);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 5 : 6);
      }
    }, dependencies: [
      CommonModule,
      IconComponent,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      DateFieldComponent,
      UserSearchFieldComponent,
      MatDialogModule,
      MatDialogClose,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DatePipe,
      TranslatePipe
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "desk-flow-confirm-modal-component", template: `
        <header>
            <h2>Confirm Booking</h2>
            <div class="flex-1"></div>
            @if (!loading()) {
                <button icon mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            <main class="p-4">
                @if (can_set_host()) {
                    <div host class="flex flex-col">
                        <label>{{ 'FORM.HOST' | translate }}</label>
                        <a-user-search-field
                            [ngModel]="host()"
                            (ngModelChange)="host.set($event)"
                            class="mb-4"
                        ></a-user-search-field>
                    </div>
                }
                <div class="mb-4">
                    <label>{{ 'FORM.DATE' | translate }}</label>
                    @if (!can_set_date()) {
                        <div date>
                            {{ date() | date: 'mediumDate' }}
                        </div>
                    } @else {
                        <a-date-field
                            [ngModel]="date()"
                            (ngModelChange)="date.set($event)"
                        ></a-date-field>
                    }
                </div>
                @if (!hide_reason()) {
                    <div reason class="mb-4 flex flex-col">
                        <label>Reason</label>
                        <mat-form-field appearance="outline">
                            <input
                                matInput
                                [ngModel]="reason()"
                                (ngModelChange)="reason.set($event)"
                                placeholder="Reason"
                            />
                        </mat-form-field>
                    </div>
                }
                <p>
                    Your desk{{ desks.length === 1 ? '' : 's' }} will be
                    {{ desk_list() }} on
                    {{ level?.display_name || level?.name }}
                </p>
            </main>
            <footer class="flex items-center justify-center p-2">
                <button btn matRipple (click)="confirm()">Confirm</button>
            </footer>
        } @else {
            <main load class="flex flex-col items-center justify-center p-12">
                <mat-spinner [diameter]="48" class="mb-4"></mat-spinner>
                <p>{{ loading() }}</p>
            </main>
        }
    `, imports: [
      CommonModule,
      TranslatePipe,
      IconComponent,
      MatProgressSpinnerModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      DateFieldComponent,
      UserSearchFieldComponent,
      MatDialogModule,
      FormsModule
    ], styles: ["/* angular:styles/component:css;7f15cc7bc0e650ce9b57aff1009958572df1fa928df57767e4e3933e937e548b;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-confirm-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n/*# sourceMappingURL=desk-confirm-modal.component.css.map */\n"] }]
  }], null, { event: [{ type: Output, args: ["event"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskConfirmModalComponent, { className: "DeskConfirmModalComponent", filePath: "libs/bookings/src/lib/desk-confirm-modal.component.ts", lineNumber: 120 });
})();

// libs/bookings/src/lib/desk.service.ts
var DesksService = class _DesksService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this.can_set_date = true;
    this.error_on_host = true;
  }
  async bookDesk({ desks, host, reason, attendees, date }) {
    if (this.error_on_host && !host) {
      return notifyError("You need to select a host to book a desk.");
    } else {
      host = host || currentUser();
    }
    reason = reason || "";
    const level = this._org.levelWithID(desks[0].zone instanceof Array ? desks[0].zone : [desks[0].zone?.id]);
    let ref = this._dialog.open(DeskQuestionsModalComponent);
    let success = await Promise.race([
      this._doneEvent(ref.componentInstance.event),
      new Promise((resolve) => ref.afterClosed().subscribe(() => resolve(null)))
    ]);
    if (!success)
      return;
    ref.close();
    ref = this._dialog.open(DeskConfirmModalComponent, {
      data: {
        host,
        desks,
        date: date ? new Date(date) : /* @__PURE__ */ new Date(),
        reason,
        level,
        can_set_date: this.can_set_date
      }
    });
    success = await Promise.race([
      this._doneEvent(ref.componentInstance.event),
      new Promise((resolve) => ref.afterClosed().subscribe(() => resolve(null)))
    ]);
    if (!success)
      return;
    host = ref.componentInstance.host || host;
    date = ref.componentInstance.date || date;
    reason = ref.componentInstance.reason || reason;
    if (!host) {
      ref.close();
      return notifyError("You need to select a host to book a desk. ");
    }
    ref.componentInstance.loading = "Checking for existing desk bookings...";
    const bookings = await queryBookings({
      type: "desk",
      period_start: getUnixTime(startOfDay(date || /* @__PURE__ */ new Date())),
      period_end: getUnixTime(endOfDay(date || /* @__PURE__ */ new Date()))
    });
    const desk_list = bookings.filter((d) => d.user_email?.toLowerCase() === host.email?.toLowerCase());
    if (desk_list?.length) {
      ref.close();
      return notifyError("You currently already have a desk booked for the selected date.");
    }
    ref.componentInstance.loading = "Booking desk...";
    const users = [host, ...attendees || []];
    await Promise.all([
      desks.map((desk, idx) => this.makeDeskBooking(desk, host, date.valueOf() || (/* @__PURE__ */ new Date()).valueOf(), reason, users[idx]))
    ]);
    notifySuccess("Successfully booked desk");
    ref.close();
    return true;
  }
  async makeDeskBooking(desk, host, date, reason, for_user = null) {
    const location = `${desk.zone?.name}-${desk.id}`;
    const level = this._org.levelWithID(desk.zone instanceof Array ? desk.zone : [desk.zone?.id]);
    const zones = desk.zone?.id ? [desk.zone?.id, level?.parent_id] : [level?.parent_id];
    const booking_data = {
      booking_start: getUnixTime(startOfDay(date)),
      user_id: for_user?.id || host.id,
      user_name: for_user?.name || host.name,
      user_email: for_user?.email || host.email,
      booking_end: Math.floor(endOfDay(date).valueOf() / 1e3),
      asset_id: desk.id,
      asset_name: desk.name,
      title: reason,
      description: location,
      zones,
      booking_type: "desk",
      extension_data: {
        map_id: desk?.map_id || desk?.id,
        groups: desk.groups,
        for_user: for_user?.email
      }
    };
    return saveBooking(booking_data);
  }
  _doneEvent(event) {
    return new Promise((resolve) => {
      let sub;
      sub = event.subscribe((details) => {
        if (details.reason !== "done")
          return;
        sub?.unsubscribe?.();
        resolve(details);
      });
    });
  }
  static {
    this.\u0275fac = function DesksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DesksService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _DesksService, factory: _DesksService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DesksService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c0 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 10)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", ctx_r0.resource_type(), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource().name || ctx_r0.resource().map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 7)(2, "label");
    \u0275\u0275text(3, "Host");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 12);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(4);
    \u0275\u0275control();
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "mat-checkbox", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("-mb-7", !ctx_r0.form.value.all_day)("mb-2", ctx_r0.form.value.all_day);
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, "COMMON.ALL_DAY"), " ");
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15)(2, "label");
    \u0275\u0275text(3, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_7_Conditional_10_Template_a_time_field_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 15)(6, "label");
    \u0275\u0275text(7, "End Time");
    \u0275\u0275elementEnd();
    \u0275\u0275element(8, "a-duration-field", 17);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275property("ngModel", ctx_r0.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(10, _c0))("range", ctx_r0.bookable_hours())("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r0.form.get("date")?.value)("max", 10 * 60)("min", 60)("step", 60)("end_time", ctx_r0.bookable_hours()?.end)("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
  }
}
function SetDatetimeModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_7_Conditional_1_Template, 6, 2, "div", 6);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_7_Conditional_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 8);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, SetDatetimeModalComponent_Conditional_7_Conditional_9_Template, 4, 7, "div", 9);
    \u0275\u0275conditionalCreate(10, SetDatetimeModalComponent_Conditional_7_Conditional_10_Template, 9, 11, "div", 6);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resource() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.host() ? 2 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275property("to", ctx_r0.book_until());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.allow_all_day() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r0.all_day() ? 10 : -1);
  }
}
var SetDatetimeModalComponent = class _SetDatetimeModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.host = signal(
      this._data.host,
      ...ngDevMode ? [{ debugName: "host" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = new FormGroup({
      user: new FormControl(this._data.user),
      date: new FormControl(this._data.date),
      duration: new FormControl(this._data.duration),
      all_day: new FormControl(this._data.all_day ?? false)
    });
    this.book_until = signal(
      this._data.until,
      ...ngDevMode ? [{ debugName: "book_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource_type = signal(
      this._data.resource_type || "Resource",
      ...ngDevMode ? [{ debugName: "resource_type" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.resource = signal(
      this._data.resource,
      ...ngDevMode ? [{ debugName: "resource" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = signal(
      this._data.allow_all_day ?? false,
      ...ngDevMode ? [{ debugName: "allow_all_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookable_hours = signal(
      this._data.bookable_hours ?? null,
      ...ngDevMode ? [{ debugName: "bookable_hours" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.all_day = toSignal(this.form.controls.all_day.valueChanges, {
      initialValue: this.form.controls.all_day.value
    });
    this.use_24hr_time = settingSignal("use_24_hour_time", false);
  }
  ngOnInit() {
    if (this.bookable_hours()) {
      const aligned_date = alignDateToBookableHours(this.form.value.date, this.bookable_hours());
      if (aligned_date !== this.form.value.date) {
        this.form.patchValue({ date: aligned_date });
      }
    }
    this.form.controls.date.valueChanges.subscribe((date) => {
      if (this.bookable_hours() && date) {
        const aligned = alignDateToBookableHours(date, this.bookable_hours(), this._data.date);
        if (aligned !== date) {
          this.form.patchValue({ date: aligned });
        }
      }
    });
    this.form.controls.all_day.valueChanges.subscribe((all_day) => {
      if (all_day) {
        this.form.controls.duration.disable();
      } else {
        this.form.controls.duration.enable();
      }
    });
    if (this._data.all_day) {
      this.form.controls.duration.disable();
    }
  }
  static {
    this.\u0275fac = function SetDatetimeModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SetDatetimeModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 12, vars: 8, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", 3, "formGroup"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end", 3, "-mb-7", "mb-2"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end"], ["formControlName", "all_day"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "range", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "end_time", "use_24hr"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, SetDatetimeModalComponent_Conditional_7_Template, 11, 6, "main", 3);
        \u0275\u0275elementStart(8, "footer", 4)(9, "button", 5);
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "EXPLORE.BOOKING_HEADER"), " ");
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.form ? 7 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.form.value);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 6, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatCheckboxModule,
      MatCheckbox,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      NgControlStatus,
      NgControlStatusGroup,
      NgModel,
      ReactiveFormsModule,
      FormGroupDirective,
      FormControlName,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SetDatetimeModalComponent, [{
    type: Component,
    args: [{ selector: "set-datetime-modal", template: `
        <header
            class="bg-base-200 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[24rem] max-w-[85vw]">
                @if (resource()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="mb-2 flex w-full flex-1 flex-col sm:w-1/4">
                            <label>{{ resource_type() }}:</label>
                            <div
                                class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                            >
                                {{
                                    resource().name ||
                                        resource().map_id ||
                                        'Unknown Resource'
                                }}
                            </div>
                        </div>
                    </div>
                }
                @if (host()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/4">
                            <label>Host</label>
                            <a-user-search-field
                                formControlName="user"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    </div>
                }
                <div
                    class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                >
                    <div class="flex w-full flex-1 flex-col sm:w-1/4">
                        <label>Date</label>
                        <a-date-field
                            [to]="book_until()"
                            formControlName="date"
                        >
                            Date and time must be in the future
                        </a-date-field>
                    </div>
                </div>
                @if (allow_all_day()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] justify-end"
                        [class.-mb-7]="!form.value.all_day"
                        [class.mb-2]="form.value.all_day"
                    >
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
                @if (!all_day()) {
                    <div
                        class="mx-auto flex w-[640px] max-w-[calc(100%-2rem)] flex-col space-x-0 sm:flex-row sm:space-x-2"
                    >
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>Start Time</label>
                            <a-time-field
                                [ngModel]="form.value.date"
                                (ngModelChange)="
                                    form.patchValue({ date: $event })
                                "
                                [ngModelOptions]="{ standalone: true }"
                                [range]="bookable_hours()"
                                [use_24hr]="use_24hr_time()"
                            ></a-time-field>
                        </div>
                        <div class="flex w-full flex-1 flex-col sm:w-1/3">
                            <label>End Time</label>
                            <a-duration-field
                                formControlName="duration"
                                [time]="form.get('date')?.value"
                                [max]="10 * 60"
                                [min]="60"
                                [step]="60"
                                [end_time]="bookable_hours()?.end"
                                [use_24hr]="use_24hr_time()"
                            >
                            </a-duration-field>
                        </div>
                    </div>
                }
            </main>
        }
        <footer
            class="bg-base-200 mx-2 mb-2 flex w-[calc(100%-1rem)] items-center justify-end rounded-sm border-none p-2"
        >
            <button btn matRipple [mat-dialog-close]="form.value" class="w-32">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      MatCheckboxModule,
      IconComponent,
      DurationFieldComponent,
      TimeFieldComponent,
      DateFieldComponent,
      UserSearchFieldComponent,
      FormsModule,
      ReactiveFormsModule,
      TranslatePipe
    ] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 154 });
})();

// libs/explore/src/lib/explore-device-info.component.ts
function ExploreDeviceInfoComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 6);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275styleMap("height: " + ctx_r0.diameter() + "%; width: " + ctx_r0.diameter() + "%;");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 10)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MAC"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.mac(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 11)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_MANUFACTURER"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.manufacturer(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 12)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_OS"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.os(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 13)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_SSID"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.ssid(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const device_user_r2 = \u0275\u0275readContextLet(3);
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "EXPLORE.DEVICE_USERNAME"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", device_user_r2?.name || device_user_r2?.username || ctx_r0.username(), " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const device_user_r2 = \u0275\u0275readContextLet(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 2, "COMMON.TYPE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", device_user_r2.type, " ");
  }
}
function ExploreDeviceInfoComponent_ng_template_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275element(1, "div", 8);
    \u0275\u0275elementStart(2, "div", 9);
    \u0275\u0275declareLet(3);
    \u0275\u0275conditionalCreate(4, ExploreDeviceInfoComponent_ng_template_5_Conditional_4_Template, 5, 4, "p", 10);
    \u0275\u0275elementStart(5, "p")(6, "label");
    \u0275\u0275text(7);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(9);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "p")(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ExploreDeviceInfoComponent_ng_template_5_Conditional_15_Template, 5, 4, "p", 11);
    \u0275\u0275conditionalCreate(16, ExploreDeviceInfoComponent_ng_template_5_Conditional_16_Template, 5, 4, "p", 12);
    \u0275\u0275conditionalCreate(17, ExploreDeviceInfoComponent_ng_template_5_Conditional_17_Template, 5, 4, "p", 13);
    \u0275\u0275conditionalCreate(18, ExploreDeviceInfoComponent_ng_template_5_Conditional_18_Template, 5, 4, "p", 14);
    \u0275\u0275conditionalCreate(19, ExploreDeviceInfoComponent_ng_template_5_Conditional_19_Template, 5, 4, "p", 15);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    const device_user_r3 = \u0275\u0275storeLet(ctx_r0.user());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.mac() && !ctx_r0.hide_fields().includes("mac") ? 4 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(8, 11, "EXPLORE.DEVICE_ACCURACY"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.variance(), "m ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(13, 13, "EXPLORE.DEVICE_LAST_SEEN"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.last_seen(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.manufacturer() && !ctx_r0.hide_fields().includes("manufacturer") ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.os() && !ctx_r0.hide_fields().includes("os") ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.ssid() && !ctx_r0.hide_fields().includes("ssid") ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.username() && !ctx_r0.hide_fields().includes("username") ? 18 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(device_user_r3 && !ctx_r0.hide_fields().includes("user") ? 19 : -1);
  }
}
var EMPTY = [];
var ExploreDeviceInfoComponent = class _ExploreDeviceInfoComponent {
  get _distance() {
    return Math.abs(differenceInMinutes((this._details.last_seen || 0) * 1e3, /* @__PURE__ */ new Date()));
  }
  get _distance_color() {
    return this._distance < 10 ? "#43a047" : this._distance < 20 ? "#ffb300" : "#e53935";
  }
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._settings = inject(SettingsService);
    this._element = inject(ElementRef);
    this.username = signal(
      "",
      ...ngDevMode ? [{ debugName: "username" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_radius = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_radius" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      this._details.user,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mac = signal(
      this._details.mac,
      ...ngDevMode ? [{ debugName: "mac" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.manufacturer = signal(
      this._details.manufacturer,
      ...ngDevMode ? [{ debugName: "manufacturer" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.os = signal(
      this._details.os,
      ...ngDevMode ? [{ debugName: "os" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ssid = signal(
      this._details.ssid,
      ...ngDevMode ? [{ debugName: "ssid" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.variance = signal(
      this._details.variance?.toFixed(2),
      ...ngDevMode ? [{ debugName: "variance" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bg_color = computed(
      () => this._details.bg_color || this._distance_color,
      ...ngDevMode ? [{ debugName: "bg_color" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = signal(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_fields = computed(
      () => {
        return this._settings.get("app.explore.hide_device_fields") || EMPTY;
      },
      ...ngDevMode ? [{ debugName: "hide_fields" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.last_seen = computed(
      () => {
        return formatDistanceToNow((this._details.last_seen || 0) * 1e3, {
          addSuffix: true
        });
      },
      ...ngDevMode ? [{ debugName: "last_seen" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.y_pos = signal(
      "top",
      ...ngDevMode ? [{ debugName: "y_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_pos = signal(
      "start",
      ...ngDevMode ? [{ debugName: "x_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.diameter = computed(
      () => {
        return this._details.variance * 100 * this.zoom();
      },
      ...ngDevMode ? [{ debugName: "diameter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    afterNextRender(() => this._initPosition());
  }
  _initPosition(tries = 0) {
    if (tries > 10)
      return;
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent) {
      setTimeout(() => this._initPosition(++tries), 200);
      return;
    }
    const position = {
      y: parseInt(parent.style.top, 10) / 100,
      x: parseInt(parent.style.left, 10) / 100
    };
    this.y_pos.set(position.y >= 0.5 ? "bottom" : "top");
    this.x_pos.set(position.x >= 0.5 ? "end" : "start");
  }
  async loadUser() {
    if (this.username())
      return;
    const mod = fd(this._details.system, "LocationServices");
    if (!mod)
      return;
    this.username.set("Loading...");
    const details = await mod.execute("check_ownership_of", [this.mac()]).catch(() => null);
    this.username.set(details && details.assigned_to ? details.assigned_to : "");
  }
  static {
    this.\u0275fac = function ExploreDeviceInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreDeviceInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeviceInfoComponent, selectors: [["", "explore-device-info", ""]], decls: 7, vars: 8, consts: [["dot", ""], ["device_tooltip", ""], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30", 3, "style"], ["shadow", "", 1, "center", "pointer-events-auto", "absolute", "h-8", "w-8", "rounded-full", "bg-black", "opacity-30", 3, "mouseenter", "click", "mouseleave"], ["name", "dot", 1, "center", "absolute", "h-3", "w-3", "rounded-full", "border-2", "border-white", "shadow-sm"], ["customTooltip", "", 1, "pointer-events-auto", "absolute", "inset-0", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "radius", 1, "radius", "center", "border-info", "bg-info", "absolute", "rounded-full", "border-8", "border-dashed", "border-blue-600", "opacity-30"], ["name", "device-info", 1, "bg-base-100", "pointer-events-none", "top-0", "left-0", "mx-2", "w-64", "rounded-sm", "p-4", "shadow-sm"], [1, "arrow"], [1, "details"], [1, "wrap-break-word"], ["type", ""], ["os", ""], ["ssid", ""], ["username", ""], ["user", ""]], template: function ExploreDeviceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ExploreDeviceInfoComponent_Conditional_0_Template, 1, 2, "div", 2);
        \u0275\u0275elementStart(1, "div", 3);
        \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_1_listener() {
          return ctx.show_radius.set(true);
        })("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
          return ctx.show_radius.set(false);
        }, \u0275\u0275resolveWindow)("click", function ExploreDeviceInfoComponent_Template_div_click_1_listener() {
          return ctx.show_radius.set(true);
        })("mouseleave", function ExploreDeviceInfoComponent_Template_div_mouseleave_1_listener() {
          return ctx.show_radius.set(false);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275element(2, "div", 4, 0);
        \u0275\u0275elementStart(4, "div", 5);
        \u0275\u0275listener("mouseenter", function ExploreDeviceInfoComponent_Template_div_mouseenter_4_listener() {
          return ctx.loadUser();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(5, ExploreDeviceInfoComponent_ng_template_5_Template, 20, 15, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const device_tooltip_r4 = \u0275\u0275reference(6);
        \u0275\u0275conditional(ctx.show_radius() ? 0 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("background-color", ctx.bg_color());
        \u0275\u0275advance(2);
        \u0275\u0275property("content", device_tooltip_r4)("backdrop", false)("xPosition", ctx.x_pos())("yPosition", ctx.y_pos())("hover", true);
      }
    }, dependencies: [CustomTooltipComponent, TranslatePipe], styles: ["\n[_nghost-%COMP%] {\n  pointer-events: auto;\n}\n[_nghost-%COMP%]    > [name=dot][_ngcontent-%COMP%] {\n  background-color: #616161;\n}\n[_nghost-%COMP%]:hover    > [name=radius][_ngcontent-%COMP%] {\n  opacity: 1;\n}\n[name=radius][_ngcontent-%COMP%] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeviceInfoComponent, [{
    type: Component,
    args: [{ selector: "[explore-device-info]", template: `
        @if (show_radius()) {
            <div
                name="radius"
                class="radius center border-info bg-info absolute rounded-full border-8 border-dashed border-blue-600 opacity-30"
                [style]="
                    'height: ' + diameter() + '%; width: ' + diameter() + '%;'
                "
            ></div>
        }
        <div
            shadow
            class="center pointer-events-auto absolute h-8 w-8 rounded-full bg-black opacity-30"
            (mouseenter)="show_radius.set(true)"
            (window:click)="show_radius.set(false)"
            (click)="show_radius.set(true)"
            (mouseleave)="show_radius.set(false)"
        ></div>
        <div
            name="dot"
            #dot
            class="center absolute h-3 w-3 rounded-full border-2 border-white shadow-sm"
            [style.background-color]="bg_color()"
        ></div>
        <div
            customTooltip
            [content]="device_tooltip"
            [backdrop]="false"
            [xPosition]="x_pos()"
            [yPosition]="y_pos()"
            [hover]="true"
            (mouseenter)="loadUser()"
            class="pointer-events-auto absolute inset-0"
        ></div>

        <ng-template #device_tooltip>
            <div
                name="device-info"
                class="bg-base-100 pointer-events-none top-0 left-0 mx-2 w-64 rounded-sm p-4 shadow-sm"
            >
                <div class="arrow"></div>
                <div class="details">
                    @let device_user = user();
                    @if (mac() && !hide_fields().includes('mac')) {
                        <p class="wrap-break-word">
                            <label
                                >{{ 'EXPLORE.DEVICE_MAC' | translate }}:</label
                            >
                            {{ mac() }}
                        </p>
                    }
                    <p>
                        <label
                            >{{ 'EXPLORE.DEVICE_ACCURACY' | translate }}:</label
                        >
                        {{ variance() }}m
                    </p>
                    <p>
                        <label
                            >{{
                                'EXPLORE.DEVICE_LAST_SEEN' | translate
                            }}:</label
                        >
                        {{ last_seen() }}
                    </p>
                    @if (
                        manufacturer() &&
                        !hide_fields().includes('manufacturer')
                    ) {
                        <p type>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_MANUFACTURER' | translate
                                }}:</label
                            >
                            {{ manufacturer() }}
                        </p>
                    }
                    @if (os() && !hide_fields().includes('os')) {
                        <p os>
                            <label
                                >{{ 'EXPLORE.DEVICE_OS' | translate }}:</label
                            >
                            {{ os() }}
                        </p>
                    }
                    @if (ssid() && !hide_fields().includes('ssid')) {
                        <p ssid>
                            <label
                                >{{ 'EXPLORE.DEVICE_SSID' | translate }}:</label
                            >
                            {{ ssid() }}
                        </p>
                    }
                    @if (username() && !hide_fields().includes('username')) {
                        <p username>
                            <label
                                >{{
                                    'EXPLORE.DEVICE_USERNAME' | translate
                                }}:</label
                            >
                            {{
                                device_user?.name ||
                                    device_user?.username ||
                                    username()
                            }}
                        </p>
                    }
                    @if (device_user && !hide_fields().includes('user')) {
                        <p user>
                            <label>{{ 'COMMON.TYPE' | translate }}:</label>
                            {{ device_user.type }}
                        </p>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [TranslatePipe, CustomTooltipComponent], styles: ["/* angular:styles/component:css;9939b96a3826add6f4c5b0fbbef0c7444ff148d81d00a9d87a90d1a088d1447c;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-device-info.component.ts */\n:host {\n  pointer-events: auto;\n}\n:host > [name=dot] {\n  background-color: #616161;\n}\n:host:hover > [name=radius] {\n  opacity: 1;\n}\n[name=radius] {\n  opacity: 0;\n  transition: opacity 200ms;\n  pointer-events: none;\n}\n/*# sourceMappingURL=explore-device-info.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeviceInfoComponent, { className: "ExploreDeviceInfoComponent", filePath: "libs/explore/src/lib/explore-device-info.component.ts", lineNumber: 174 });
})();

// libs/explore/src/lib/explore-desks.service.ts
var ExploreDesksService = class _ExploreDesksService extends AsyncHandler {
  _desk_key(desk) {
    return desk?.map_id || desk?.id || "";
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this._org_initialised = this._org.initialised;
    this._building = this._org.active_building;
    this._in_use = signal(
      [],
      ...ngDevMode ? [{ debugName: "_in_use" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._presence = signal(
      [],
      ...ngDevMode ? [{ debugName: "_presence" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._signs_of_life = signal(
      [],
      ...ngDevMode ? [{ debugName: "_signs_of_life" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._checked_in = signal(
      [],
      ...ngDevMode ? [{ debugName: "_checked_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._statuses = {};
    this._users = {};
    this._departments = {};
    this._desk_bookings = {};
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Vu(bld.id, `desk_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(
      () => this._booking_rules.value() ?? [],
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._desk_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._state.level() || void 0,
      loader: ({ params: lvl }) => Vu(lvl.id, "desks").catch(() => ({ details: [] })).then((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl }))))
    }));
    this.desk_list = computed(
      () => this._desk_list.value() ?? [],
      ...ngDevMode ? [{ debugName: "desk_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_list = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_list" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const options = this._options();
        const level = this._state.level();
        const wanted = options.use_api || options.date > endOfDay(Date.now()).valueOf();
        return wanted && level ? { date: options.date, zone: level.id } : void 0;
      },
      loader: ({ params: { date, zone } }) => queryBookings({
        type: "desk",
        period_start: getUnixTime(startOfDay(date || Date.now())),
        period_end: getUnixTime(endOfDay(date || Date.now())),
        zones: zone
      }).catch(() => [])
    }));
    effect(() => {
      const lvl = this._state.level();
      const { is_public } = this._state.options();
      if (!this._org_initialised() || !lvl || is_public)
        return;
      this.timeout("bind", () => this._bindToLevel(lvl.id), 300);
    });
    effect(() => {
      const bookings = this._booking_list.value();
      if (!bookings)
        return;
      untracked(() => {
        this._in_use.set(bookings.map((_) => _.asset_id));
        this._checked_in.set(bookings.filter((_) => _.checked_in).map((_) => _.asset_id));
      });
    });
    effect(() => {
      const desks = this.desk_list();
      const in_use = this._in_use();
      const presence = this._presence();
      const checked_in = this._checked_in();
      const signs = this._signs_of_life();
      const restrictions = this.booking_rules();
      this._options();
      this.timeout("state_change", () => this._updateDeskStatuses(desks, in_use, presence, checked_in, signs, restrictions), 50);
    });
    this.init();
  }
  async init() {
    await firstValueWhere(this._org_initialised, (_) => !!_, this._injector);
    this.setOptions({
      enable_booking: this._settings.get("app.desks.enable_maps") !== false
    });
  }
  setOptions(options) {
    this._options.update((value) => __spreadValues(__spreadValues({}, value), options));
  }
  _bindToLevel(zone_id) {
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const binding = mod.variable(zone_id);
    if (binding) {
      this.subscription(`lvl-in_use`, binding.bindThenSubscribe((d) => this.processBindingChange(d || {}, mod.id)));
    }
    const bookings_binding = mod.variable(`${zone_id}:desk_bookings`);
    if (bookings_binding) {
      this.subscription(`lvl-desk_bookings`, bookings_binding.bindThenSubscribe((d) => {
        const value = __spreadValues({}, d || {});
        for (const id in value) {
          const new_bookings = value[id].map((_) => new Booking(__spreadProps(__spreadValues({}, _), {
            booking_start: _.booking_start || _.started_at,
            booking_end: _.booking_end || _.ends_at,
            duration: _.duration / 60
          })));
          if (!this._desk_bookings[id]) {
            this._desk_bookings[id] = signal(new_bookings);
          } else {
            this._desk_bookings[id].set(new_bookings);
          }
        }
      }));
    }
  }
  _updateDeskStatuses(desks, in_use, presence, checked_in, signs, restrictions) {
    const level = this._state.level();
    const active_keys = /* @__PURE__ */ new Set();
    for (const { id, bookable, map_id } of desks) {
      const d_id = map_id || id;
      active_keys.add(d_id);
      const is_used = in_use.some((i) => d_id === i);
      const has_presence = presence.some((i) => d_id === i);
      const has_signs = signs.some((i) => d_id === i);
      const is_checked_in = checked_in.some((i) => d_id === i) || is_used && this._settings.get(`app.desks.auto_checkin`);
      const is_restricted = rulesForResource({
        date: Date.now(),
        duration: 60,
        host: currentUser(),
        resource: {
          id,
          zones: [level?.parent_id, level?.id]
        }
      }, restrictions)?.hidden;
      if (!this._statuses[d_id])
        this._statuses[d_id] = signal("free");
      this._statuses[d_id].set(bookable && !is_restricted ? !is_used && !has_presence && !is_checked_in ? has_signs ? "signs-of-life" : "free" : !has_presence && !is_checked_in ? "pending" : "busy" : "not-bookable");
    }
    for (const d_id in this._statuses) {
      if (!active_keys.has(d_id))
        delete this._statuses[d_id];
    }
    this.processDesks(desks);
  }
  processBindingChange({ value }, system_id) {
    const devices = (value || []).filter((v) => !["desk", "booking"].includes(v.location));
    const desks = (value || []).filter((v) => v.location === "desk" || v.location === "booking" && v.type === "desk");
    const date = this._options().date || Date.now();
    if (date <= endOfDay(Date.now()).valueOf() && !this._options().use_api) {
      this._in_use.set(desks.filter((v) => v.location === "booking").map((v) => v.map_id || v.asset_id));
      this._checked_in.set(desks.filter((v) => v.location === "booking" && v.checked_in).map((v) => v.map_id || v.asset_id));
      this._presence.set(desks.filter((v) => v.at_location).map((v) => v.map_id || v.asset_id));
      this._signs_of_life.set(desks.filter((v) => v.signs_of_life).map((v) => v.map_id || v.asset_id));
    }
    const departments = this._settings.get("app.department_map") || {};
    for (const desk of desks) {
      const d_id = desk.map_id || desk.asset_id;
      if (!this._users[d_id]) {
        this._users[d_id] = signal("");
      }
      this._users[d_id].set(desk.staff_name);
      this._departments[d_id] = departments[desk.department] || "";
    }
    this.processDevices(devices, system_id);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  updateStatus() {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const desk_id in this._statuses) {
      if (!this._statuses[desk_id])
        this._statuses[desk_id] = signal("free");
      const s = this._statuses[desk_id]();
      style_map[`#${desk_id}`] = {
        fill: colours[`desk-${s}`] || colours[`${s}`] || DEFAULT_COLOURS[`${s}`]
      };
    }
    this._state.setStyles("desks", style_map);
  }
  processDevices(devices, system_id) {
    const list = [];
    for (const device of devices) {
      const x = device.x / device.map_width;
      const y = device.y / device.map_height;
      list.push({
        track_id: `device:hover:${x},${y}`,
        location: {
          x: device.coordinates_from?.includes("right") ? 1 - x : x,
          y: device.coordinates_from?.includes("bottom") ? 1 - y : y
        },
        content: ExploreDeviceInfoComponent,
        z_index: 20,
        data: __spreadProps(__spreadValues({}, device), { system: system_id })
      });
    }
    this._state.setFeatures("devices", list);
  }
  processDesks(desks) {
    const list = [];
    const actions = [];
    const options = this._options();
    const show_desk_users = this._settings.get("app.desks.show_users") ?? true;
    for (const desk of desks) {
      const d_id = this._desk_key(desk);
      if (!this._statuses[d_id]) {
        this._statuses[d_id] = signal("free");
      }
      if (!this._desk_bookings[d_id])
        this._desk_bookings[d_id] = signal([]);
      if (!this._users[d_id]) {
        this._users[d_id] = signal("");
      }
      if (show_desk_users) {
        const user_value = this._users[d_id]() || desk.staff_name || desk.assigned_name || "";
        this._users[d_id].set(user_value);
      } else {
        this._users[d_id].set("");
      }
      list.push({
        track_id: `desk:hover:${d_id}`,
        location: d_id,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: d_id,
          map_id: desk.name,
          name: desk.name || desk.map_id,
          user: this._users[d_id],
          status: this._statuses[d_id],
          department: this._departments[d_id] || "",
          bookings: this._desk_bookings[d_id],
          date: options.date || Date.now()
        },
        z_index: 20
      });
      if (!desk.bookable)
        continue;
      let can_book = true;
      const book_fn = async () => {
        if (!can_book)
          return;
        await this._bookDesk(desk, options);
      };
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: d_id,
        action: event,
        priority: 10,
        callback: () => {
          can_book = true;
          this.timeout("booking", () => can_book = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: d_id,
        action: event,
        priority: 10,
        callback: book_fn
      }));
    }
    this._state.setActions("desks", this._options().enable_booking ? actions : []);
    this._state.setFeatures("desks", list);
    this.timeout("update", () => this.updateStatus(), 100);
  }
  async _setBookingTime(date, duration, host = false, resource2 = null, all_day = false, bookable_hours = null) {
    let user = null;
    if (this._settings.get("app.desks.allow_time_changes")) {
      const until = endOfDay(addDays(Date.now(), this._settings.get("app.desks.available_period") || 90));
      const allow_all_day = !!this._settings.get("app.desks.allow_all_day");
      const ref = this._dialog.open(SetDatetimeModalComponent, {
        data: {
          date,
          duration,
          until,
          host,
          resource_type: "Desk",
          resource: resource2,
          all_day,
          allow_all_day,
          bookable_hours
        }
      });
      const details = await new Promise((resolve) => ref.afterClosed().subscribe(resolve));
      if (!details)
        throw "User cancelled";
      date = details.date;
      duration = details.duration;
      user = details.user;
      all_day = details.all_day;
    }
    return { date, duration, user, all_day };
  }
  async _bookDesk(desk, options) {
    const d_id = this._desk_key(desk);
    const asset_id = desk.id || desk.map_id;
    const resource2 = __spreadProps(__spreadValues({}, desk), { id: asset_id });
    if (this._statuses[d_id]?.() !== "free") {
      return notifyError(i18n("EXPLORE.DESK_AVAILABLE_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    if (desk.groups?.length && !desk.groups.find((_) => currentUser().groups.includes(_))) {
      return notifyError(i18n("EXPLORE.DESK_GROUP_ERROR", { name: desk.name || "Desk" }));
    }
    this._bookings.newForm("desk");
    this._bookings.setOptions({ type: "desk" });
    const bookable_hours = this._settings.get("app.desks.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
    if (bookable_hours && !this._settings.get("app.desks.allow_time_changes") && !isWithinBookableHours(Date.now(), bookable_hours)) {
      return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
    }
    if (options.date) {
      this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: bookable_hours ? alignDateToBookableHours(options.date, bookable_hours) : options.date
      }));
      this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
        all_day: options.all_day ?? m.all_day
      }));
    } else if (bookable_hours) {
      this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
        date: alignDateToBookableHours(this._bookings.model().date, bookable_hours)
      }));
    }
    let { date, duration, user, all_day } = await this._setBookingTime(this._bookings.model().date, this._bookings.model().duration, this._options()?.custom ?? false, desk, options.all_day ?? this._bookings.model().all_day, bookable_hours);
    user = user || options.host || currentUser();
    const user_email = user?.email;
    this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources: [resource2],
      asset_id,
      asset_name: desk.name,
      date,
      duration: all_day ? 12 * 60 : duration,
      all_day,
      map_id: desk?.map_id || desk?.id,
      description: desk.name,
      user,
      user_email,
      booking_type: "desk",
      zones: desk.zone ? [desk.zone?.parent_id, desk.zone?.id] : []
    }));
    const restrictions = this.booking_rules();
    const is_restricted = rulesForResource({
      date,
      duration,
      host: currentUser(),
      resource: {
        id: asset_id,
        zones: [desk.zone?.parent_id, desk.zone?.id]
      }
    }, restrictions)?.hidden;
    if (is_restricted) {
      return notifyError(i18n("EXPLORE.DESK_RESTRICTION_ERROR", {
        name: desk.name || "Desk"
      }));
    }
    await this._bookings.confirmPost().catch((e) => {
      console.log(e);
      notifyError(i18n("EXPLORE.DESK_BOOKING_ERROR", {
        name: desk.name || "Desk",
        error: e.message || e.error || e
      }));
      throw e;
    });
    if (!this._users[d_id]) {
      this._users[d_id] = signal("");
    }
    this._users[d_id].set((options.host || currentUser())?.name);
    notifySuccess(i18n("EXPLORE.DESK_BOOKING_SUCCESS", { name: desk.name || "Desk" }));
  }
  static {
    this.\u0275fac = function ExploreDesksService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreDesksService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreDesksService, factory: _ExploreDesksService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDesksService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-map-control.component.ts
var _forTrack0 = ($index, $item) => $item.id;
function ExploreMapControlComponent_Conditional_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const bld_r3 = ctx.$implicit;
    \u0275\u0275property("value", bld_r3);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", bld_r3.display_name || bld_r3.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 1)(1, "mat-select", 3);
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_1_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setBuilding($event));
    });
    \u0275\u0275repeaterCreate(2, ExploreMapControlComponent_Conditional_1_For_3_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.building());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.buildings());
  }
}
function ExploreMapControlComponent_Conditional_2_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 4);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r5 = ctx.$implicit;
    \u0275\u0275property("value", lvl_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r5.display_name || lvl_r5.name, " ");
  }
}
function ExploreMapControlComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-form-field", 2)(1, "mat-select", 5);
    \u0275\u0275listener("ngModelChange", function ExploreMapControlComponent_Conditional_2_Template_mat_select_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setLevel($event));
    });
    \u0275\u0275repeaterCreate(2, ExploreMapControlComponent_Conditional_2_For_3_Template, 2, 2, "mat-option", 4, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275attribute("has-bld", ctx_r1.buildings().length > 1);
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r1.level());
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.levels());
  }
}
var ExploreMapControlComponent = class _ExploreMapControlComponent extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.buildings = this._org.active_buildings;
    this.building = this._org.active_building;
    this.levels = this._org.active_levels;
    this.level = this._state.level;
    this.setLevel = (lvl) => {
      this._state.setFeatures("_located", []);
      this.timeout("set_level", () => this._router.navigate([], {
        relativeTo: this._route,
        queryParams: { zone: lvl.id }
      }), 201);
    };
    this.setBuilding = (bld) => this._org.building = bld;
  }
  async ngOnInit() {
    await this._org.waitUntilInitialised();
    this.subscription("route.query", this._route.queryParamMap.subscribe((params) => params.has("zone") ? this._state.setLevel(params.get("zone")) : ""));
  }
  static {
    this.\u0275fac = function ExploreMapControlComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreMapControlComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapControlComponent, selectors: [["explore-map-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 2, consts: [[1, "flex", "w-full", "space-x-2"], ["overlay", "", "buildings", "", "has-bld", "true", "appearance", "outline", 1, "no-subscript", "min-w-42", "flex-1"], ["overlay", "", "levels", "", "appearance", "outline", 1, "no-subscript", "min-w-41", "flex-1"], ["placeholder", "Select Building...", 3, "ngModelChange", "ngModel"], [3, "value"], ["placeholder", "Select Level...", 3, "ngModelChange", "ngModel"]], template: function ExploreMapControlComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, ExploreMapControlComponent_Conditional_1_Template, 4, 1, "mat-form-field", 1);
        \u0275\u0275conditionalCreate(2, ExploreMapControlComponent_Conditional_2_Template, 4, 2, "mat-form-field", 2);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.buildings().length > 1 ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.levels().length ? 2 : -1);
      }
    }, dependencies: [MatFormFieldModule, MatFormField, MatSelectModule, MatSelect, MatOption, FormsModule, NgControlStatus, NgModel], styles: ["\nmat-form-field[has-bld=true][_ngcontent-%COMP%] {\n  max-width: calc(50vw - 2.5rem);\n}\n[full][_nghost-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapControlComponent, [{
    type: Component,
    args: [{ selector: "explore-map-controls", template: `
        <div class="flex w-full space-x-2">
            @if (buildings().length > 1) {
                <mat-form-field
                    overlay
                    buildings
                    class="no-subscript min-w-42 flex-1"
                    has-bld="true"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Building..."
                        [ngModel]="building()"
                        (ngModelChange)="setBuilding($event)"
                    >
                        @for (bld of buildings(); track bld.id) {
                            <mat-option [value]="bld">
                                {{ bld.display_name || bld.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
            @if (levels().length) {
                <mat-form-field
                    overlay
                    levels
                    class="no-subscript min-w-41 flex-1"
                    [attr.has-bld]="buildings().length > 1"
                    appearance="outline"
                >
                    <mat-select
                        placeholder="Select Level..."
                        [ngModel]="level()"
                        (ngModelChange)="setLevel($event)"
                    >
                        @for (lvl of levels(); track lvl.id) {
                            <mat-option [value]="lvl">
                                {{ lvl.display_name || lvl.name }}
                            </mat-option>
                        }
                    </mat-select>
                </mat-form-field>
            }
        </div>
    `, imports: [MatFormFieldModule, MatSelectModule, FormsModule], styles: ["/* angular:styles/component:css;09806d4e56396268b721c1e6773559de8fe2445d8858101e567dcb2c1dd21cd7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-control.component.ts */\nmat-form-field[has-bld=true] {\n  max-width: calc(50vw - 2.5rem);\n}\n:host[full] mat-form-field {\n  max-width: calc(50% - 2.5rem);\n}\n/*# sourceMappingURL=explore-map-control.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapControlComponent, { className: "ExploreMapControlComponent", filePath: "libs/explore/src/lib/explore-map-control.component.ts", lineNumber: 72 });
})();

// libs/explore/src/lib/explore-locker-bank-modal.component.ts
var ExploreLockerBankModalComponent = class _ExploreLockerBankModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this.bank = signal(
      this._data.bank,
      ...ngDevMode ? [{ debugName: "bank" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.lockers = computed(
      () => this._data.lockers.reduce((map, locker) => {
        map[locker.id] = "busy";
        return map;
      }, {}),
      ...ngDevMode ? [{ debugName: "lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreLockerBankModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockerBankModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankModalComponent, selectors: [["explore-locker-bank-modal"]], decls: 8, vars: 3, consts: [[1, "text-xl", "font-medium"], ["btn", "", "icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "h-[65vh]", "overflow-hidden"], [3, "bank", "bank_status"]], template: function ExploreLockerBankModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 1)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(6, "main", 2);
        \u0275\u0275element(7, "locker-grid", 3);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.bank().name);
        \u0275\u0275advance(5);
        \u0275\u0275property("bank", ctx.bank())("bank_status", ctx.lockers());
      }
    }, dependencies: [MatRippleModule, MatRipple, LockerGridComponent, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankModalComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-modal", template: `
        <header>
            <h2 class="text-xl font-medium">{{ bank().name }}</h2>
            <button btn icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="h-[65vh] overflow-hidden">
            <locker-grid
                [bank]="bank()"
                [bank_status]="lockers()"
            ></locker-grid>
        </main>
    `, imports: [MatRippleModule, LockerGridComponent, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankModalComponent, { className: "ExploreLockerBankModalComponent", filePath: "libs/explore/src/lib/explore-locker-bank-modal.component.ts", lineNumber: 32 });
})();

// libs/explore/src/lib/explore-locker-bank-info.component.ts
var _c02 = (a0, a1) => ({ used: a0, count: a1 });
function ExploreLockerBankInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "h3", 4);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 5);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm " + ctx_r0.x_pos() + " " + ctx_r0.y_pos());
    \u0275\u0275property("id", ctx_r0.bank().map_id || ctx_r0.bank().id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.bank().name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 5, "EXPLORE.LOCKERS_USE", \u0275\u0275pureFunction2(8, _c02, ctx_r0.in_use_count(), ctx_r0.bank().lockers.length || 1)), " ");
  }
}
var ExploreLockerBankInfoComponent = class _ExploreLockerBankInfoComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._dialog = inject(MatDialog);
    this.bank = signal(
      this._details.bank,
      ...ngDevMode ? [{ debugName: "bank" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.in_use_count = signal(
      this._details.in_use_count,
      ...ngDevMode ? [{ debugName: "in_use_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.y_pos = signal(
      "top",
      ...ngDevMode ? [{ debugName: "y_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.x_pos = signal(
      "left",
      ...ngDevMode ? [{ debugName: "x_pos" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit(tries = 0) {
    if (tries > 10)
      return;
    setTimeout(() => {
      const parent = this._element.nativeElement.parentElement?.parentElement;
      if (!parent)
        return this.ngOnInit(++tries);
      const position = {
        y: parseInt(parent.style.top, 10) / 100,
        x: parseInt(parent.style.left, 10) / 100
      };
      this.y_pos.set(position.y >= 0.5 ? "bottom" : "top");
      this.x_pos.set(position.x >= 0.5 ? "right" : "left");
    }, 200);
  }
  openBankModal() {
    this._dialog.open(ExploreLockerBankModalComponent, {
      data: __spreadValues({}, this._details)
    });
  }
  static {
    this.\u0275fac = function ExploreLockerBankInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockerBankInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreLockerBankInfoComponent, selectors: [["explore-locker-bank-info"]], decls: 4, vars: 6, consts: [["desk_tooltip", ""], [1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "click"], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", 3, "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "font-medium"], [1, "text-sm", "whitespace-nowrap"]], template: function ExploreLockerBankInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("click", function ExploreLockerBankInfoComponent_Template_button_click_0_listener() {
          return ctx.openBankModal();
        });
        \u0275\u0275element(1, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, ExploreLockerBankInfoComponent_ng_template_2_Template, 6, 11, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(3);
        \u0275\u0275advance();
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
      }
    }, dependencies: [CustomTooltipComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockerBankInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-locker-bank-info", template: `
        <button
            class="pointer-events-auto relative h-full w-full"
            (click)="openBankModal()"
        >
            <div
                customTooltip
                [content]="desk_tooltip"
                [backdrop]="false"
                [xPosition]="'center'"
                [yPosition]="'center'"
                [hover]="true"
                [delay]="3000"
                class="pointer-events-auto relative h-full w-full"
            ></div>
        </button>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="bank().map_id || bank().id"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 rounded-sm p-4 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <h3 class="font-medium">{{ bank().name }}</h3>
                <p class="text-sm whitespace-nowrap">
                    {{
                        'EXPLORE.LOCKERS_USE'
                            | translate
                                : {
                                      used: in_use_count(),
                                      count: bank().lockers.length || 1,
                                  }
                    }}
                </p>
            </div></ng-template
        >
    `, imports: [TranslatePipe, CustomTooltipComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreLockerBankInfoComponent, { className: "ExploreLockerBankInfoComponent", filePath: "libs/explore/src/lib/explore-locker-bank-info.component.ts", lineNumber: 64 });
})();

// libs/explore/src/lib/explore-lockers.service.ts
var ExploreLockersService = class _ExploreLockersService extends AsyncHandler {
  constructor() {
    super();
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._building = this._org.active_building;
    this._region = this._org.active_region;
    this._status = signal(
      [],
      ...ngDevMode ? [{ debugName: "_status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._change = signal(
      0,
      ...ngDevMode ? [{ debugName: "_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._scope_id = computed(
      () => {
        const bld = this._building();
        const region = this._region();
        return this._settings.get("app.use_region") ? region?.id || this._org.region?.id : bld?.id;
      },
      ...ngDevMode ? [{ debugName: "_scope_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._locker_banks = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_locker_banks" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const changed = this._change();
        return scope_id ? { scope_id, changed } : void 0;
      },
      loader: async ({ params: { scope_id } }) => {
        const assets = await queryLockerBankAssetsForZones([
          scope_id
        ]).catch(() => []);
        const banks = assets.map(lockerBankFromAsset);
        for (const bank of banks) {
          bank.zone = this._org.levelWithID(bank.zones || []);
        }
        return banks;
      }
    }));
    this.locker_banks = computed(
      () => this._locker_banks.value() ?? [],
      ...ngDevMode ? [{ debugName: "locker_banks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._lockers = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_lockers" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const scope_id = this._scope_id();
        const banks = this.locker_banks();
        return scope_id && banks.length ? { scope_id, banks } : void 0;
      },
      loader: async ({ params: { scope_id, banks } }) => {
        const assets = await queryLockerAssetsForZones([scope_id]).catch(() => []);
        const lockers = assets.map((_) => lockerFromAsset(_, banks));
        for (const bank of banks) {
          bank.lockers = lockers.filter((_) => _.bank_id === bank.id).map((_) => __spreadValues({}, _));
        }
        return lockers.filter((_) => _.bank);
      }
    }));
    this.lockers = computed(
      () => this._lockers.value() ?? [],
      ...ngDevMode ? [{ debugName: "lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_lockers = computed(
      () => {
        const level = this._explore.level();
        return this.lockers().filter((item) => !level || (item.zones || item.bank?.zones || []).includes(level.id));
      },
      ...ngDevMode ? [{ debugName: "filtered_lockers" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_banks = computed(
      () => {
        const level = this._explore.level();
        return this.locker_banks().filter((item) => !level || item.zones.includes(level.id));
      },
      ...ngDevMode ? [{ debugName: "filtered_banks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const lvl = this._explore.level();
      const { is_public } = this._explore.options();
      this._building();
      if (!lvl || is_public)
        return;
      untracked(() => {
        const mod = this._org.module("area_management", "AreaManagement");
        if (!mod)
          return;
        const binding = mod.variable(lvl.id);
        this.subscription(`lvl-in_use`, binding.bindThenSubscribe((data) => this._status.set(data?.value?.filter((_) => _.location === "locker") || [])));
      });
    });
    effect(() => {
      const lvl = this._explore.level();
      const locker_banks = this.locker_banks();
      const lockers = this.lockers();
      const status = this._status();
      if (!lvl)
        return;
      untracked(() => {
        const features = [];
        const map_status = {};
        const colours = this._settings.get("app.explore.colors") || {};
        const banks = unique(locker_banks.filter((_) => _.level_id === lvl.id).map((_) => _.id));
        for (const bank of banks) {
          const bank_lockers = lockers.filter((_) => _.bank_id === bank);
          let in_use_count = 0;
          for (const locker of bank_lockers) {
            const in_use = status.find((_) => _.locker_id === locker.id && _.allocated);
            in_use_count += in_use ? 1 : 0;
          }
          const bank_info = locker_banks.find((_) => _.id === bank);
          features.push({
            location: bank_info.map_id,
            content: ExploreLockerBankInfoComponent,
            full_size: true,
            no_scale: true,
            z_index: 20,
            data: {
              bank: bank_info,
              lockers,
              in_use_count,
              locker_count: bank_lockers.length,
              system: this._org.binding("area_management")
            }
          });
          const in_use_percent = bank_lockers.length ? in_use_count / bank_lockers.length : 0;
          const value = in_use_percent > 0.8 ? "busy" : in_use_percent > 0.3 ? "pending" : "free";
          map_status[`#${bank_info.map_id}`] = {
            fill: colours[`lockers-${value}`] || colours[`${value}`] || DEFAULT_COLOURS[`${value}`]
          };
        }
        this._explore.setStyles("lockers", map_status);
        this._explore.setFeatures("lockers", features);
      });
    });
  }
  static {
    this.\u0275fac = function ExploreLockersService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreLockersService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreLockersService, factory: _ExploreLockersService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreLockersService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-parking.service.ts
var ExploreParkingService = class _ExploreParkingService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._bookings = inject(BookingFormService);
    this._parking = inject(ParkingService);
    this._options = signal(
      {},
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._poll = signal(
      0,
      ...ngDevMode ? [{ debugName: "_poll" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._building = this._org.active_building;
    this._active_levels = this._org.active_levels;
    this._parking_users = this._parking.users;
    this._assigned_space = this._parking.assigned_space;
    this._deny_parking_access = this._parking.deny_parking_access;
    this._booked_space = this._parking.booked_space;
    this.options = this._options.asReadonly();
    this.on_book = null;
    this.levels = computed(
      () => this._active_levels().filter((_) => _.tags.includes("parking")),
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Vu(bld.id, `parking_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(
      () => this._booking_rules.value() ?? [],
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        is_public: this._state.options().is_public,
        level_id: this._state.level()?.id,
        date: this._options().date,
        all_day: this._options().all_day,
        duration: this._options().duration,
        poll: this._poll()
      }),
      loader: ({ params: { is_public, level_id, date, all_day, duration } }) => {
        const time = date ?? Date.now();
        const bookable_hours = all_day ? this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null : null;
        const all_day_range = getAllDayTimeRange(time, "", bookable_hours?.start, bookable_hours?.end);
        return is_public || !level_id ? Promise.resolve([]) : queryAllBookings({
          period_start: getUnixTime(all_day ? all_day_range.date : duration ? time : addMinutes(time, -15)),
          period_end: getUnixTime(all_day ? all_day_range.date_end : addMinutes(time, duration || 30)),
          type: "parking",
          zones: level_id,
          rejected: false
        }).catch(() => []);
      }
    }));
    this.events = computed(
      () => this._events.value() ?? [],
      ...ngDevMode ? [{ debugName: "events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_events = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_events" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        date: this._options().date,
        user: this._options().user
      }),
      loader: ({ params: { date, user } }) => queryBookings({
        period_start: getUnixTime(startOfDay(date || Date.now())),
        period_end: getUnixTime(endOfDay(date || Date.now())),
        type: "parking",
        email: user || currentUser()?.email
      }).catch(() => [])
    }));
    this.user_events = computed(
      () => this._user_events.value() ?? [],
      ...ngDevMode ? [{ debugName: "user_events" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const levels = this.levels();
        return levels.length ? levels.map((l) => l.id) : void 0;
      },
      loader: ({ params: zones }) => queryParkingSpacesForZones(zones).catch(() => [])
    }));
    this.spaces = computed(
      () => this._spaces.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_spaces = computed(
      () => {
        const level = this._state.level();
        return level ? this.spaces().filter((_) => _.zone_id === level.id) : [];
      },
      ...ngDevMode ? [{ debugName: "active_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._users = {};
    this._plate_numbers = {};
    this._available_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_spaces = this._available_spaces.asReadonly();
    effect(() => {
      const events = this.events();
      const spaces = this.active_spaces();
      const users = this._parking_users();
      const rules = this.booking_rules();
      const { date } = this._options();
      untracked(() => {
        const available = spaces.filter((space) => {
          const event = events.find((e) => e.asset_id === space.id && !e.rejected);
          const level = this._org.levelWithID([space.zone_id]);
          const assigned = `${event?.user_email || space.assigned_to || ""}`.toLowerCase();
          const user = users.find((u) => u.email.toLowerCase() === assigned.toLowerCase());
          const is_restricted = rulesForResource({
            date: date || Date.now(),
            duration: 60,
            host: currentUser(),
            resource: {
              id: space.id,
              zones: [level?.parent_id, level?.id]
            }
          }, rules)?.hidden;
          this._users[space.id] = assigned;
          this._plate_numbers[space.id] = event?.extension_data?.plate_number || user?.plate_number || void 0;
          return !event && !is_restricted && space.bookable !== false;
        });
        this._available_spaces.set(available);
        this._updateParkingSpaces(spaces, available);
      });
    });
    this.setOptions({
      enable_booking: this._settings.get("app.parking.enable_maps") !== false
    });
  }
  startPolling() {
    this.interval("poll", () => this._poll.set(Date.now()), 10 * 1e3);
    this._poll.set(Date.now());
    return () => this.stopPolling();
  }
  stopPolling() {
    this.clearInterval("poll");
  }
  setOptions(options) {
    this._options.update((value) => __spreadValues(__spreadValues({}, value), options));
  }
  _updateParkingSpaces(spaces, available) {
    const styles = {};
    const features = [];
    const actions = [];
    const colours = this._settings.get("app.explore.colors") || {};
    let options = this._options();
    for (const space of spaces) {
      const can_book = !!available.find((_) => _.id === space.id);
      const is_workplace = this._settings.app_name.toLowerCase().includes("workplace") || this._settings.app_name.toLowerCase().includes("staff");
      const is_assigned = is_workplace ? false : !!space.assigned_to;
      const id = space.map_id || space.id;
      const status = space.bookable === false ? "not-bookable" : is_assigned ? can_book ? "pending" : "busy" : can_book ? "free" : "busy";
      styles[`#${id}`] = {
        fill: colours[`parking-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
      features.push({
        location: `${id}`,
        content: ExploreParkingInfoComponent,
        z_index: 20,
        hover: true,
        data: __spreadProps(__spreadValues({}, space), {
          user: this._users[space.id],
          plate_number: this._plate_numbers[space.id],
          status: status === "pending" && is_assigned ? "reserved" : status
        })
      });
      if (!can_book)
        continue;
      const book_fn = async () => {
        if (this.on_book) {
          await this.on_book(space);
          this._poll.set(Date.now());
          return;
        }
        if (this._deny_parking_access()) {
          const space_zone = this._org.levelWithID([space.zone_id]);
          return notifyError(i18n("EXPLORE.PARKING_PERMISSIONS_ERROR", {
            name: space_zone?.display_name || space_zone?.name
          }));
        }
        if (this._assigned_space() && this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_ASSIGNED_ERROR", {
            name: space.name || space.id
          }));
        }
        if (this._booked_space()) {
          return notifyError(i18n("EXPLORE.PARKING_EXISTING_ERROR"));
        }
        if (status !== "free") {
          return notifyError(i18n("EXPLORE.PARKING_AVAILABLE_ERROR", {
            name: space.name || "Parking Space"
          }));
        }
        if (space.place_groups?.length && !space.place_groups.find((_) => currentUser().groups.includes(_))) {
          return notifyError(i18n("EXPLORE.PARKING_GROUP_ERROR", {
            name: space.name
          }));
        }
        this._bookings.newForm("parking");
        this._bookings.setOptions({ type: "parking" });
        options = this._options();
        const bookable_hours = this._settings.get("app.parking.bookable_hours") || this._settings.get("app.bookings.bookable_hours") || null;
        if (bookable_hours && !this._settings.get("app.parking.allow_time_changes") && !isWithinBookableHours(Date.now(), bookable_hours)) {
          return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
        }
        let user = options.host || currentUser();
        const user_email = user?.email;
        const zone = this._org.levelWithID([
          space.zone_id || space.zone
        ]) || this._state.active_level;
        let date = !options.date || isSameDay(options.date, Date.now()) ? startOfMinute(Date.now()).valueOf() : setHours(options.date, 8).valueOf();
        if (bookable_hours) {
          date = alignDateToBookableHours(date, bookable_hours);
        }
        this._bookings.model.update((m) => __spreadProps(__spreadValues({}, m), {
          resources: [space],
          asset_id: space.id,
          asset_name: space.name,
          date,
          duration: 11 * 60,
          all_day: true,
          map_id: space?.map_id || space?.id,
          description: space.name,
          user,
          user_email,
          booking_type: "parking",
          zones: [
            this._org.organisation.id,
            this._org.region?.id,
            zone?.parent_id,
            zone?.id
          ]
        }));
        await this._bookings.confirmPost().catch((e) => {
          if (e === "User cancelled")
            throw e;
          notifyError(i18n("EXPLORE.PARKING_BOOKING_ERROR", {
            name: space.name || space.id,
            error: e.message || e.error || e
          }));
          throw e;
        });
        notifySuccess(i18n("EXPLORE.PARKING_BOOKING_SUCCESS", {
          name: space.name || space.id
        }));
        this.timeout("poll", () => this._poll.set(Date.now()), 1e3);
      };
      actions.push({
        id,
        action: "click",
        priority: 10,
        callback: book_fn
      });
    }
    this._state.setActions("parking", options.enable_booking ? actions : []);
    this._state.setStyles("parking", styles);
    this._state.setFeatures("parking", features);
  }
  static {
    this.\u0275fac = function ExploreParkingService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreParkingService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreParkingService, factory: _ExploreParkingService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/explore-poi-modal.component.ts
var _c03 = ["media_el"];
function ExplorePointOfInterestModalComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 3);
    \u0275\u0275text(1, " No available details for this point of interest. ");
    \u0275\u0275elementEnd();
  }
}
function ExplorePointOfInterestModalComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 4);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("src", ctx_r0.item().image, \u0275\u0275sanitizeUrl)("alt", ctx_r0.item().name);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "video", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item().media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "audio", 7, 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.item().media_url);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 10);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_1_Template, 2, 1, "video", 7)(2, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_2_Template, 2, 1, "audio", 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 8)(4, "div", 9);
    \u0275\u0275conditionalCreate(5, ExplorePointOfInterestModalComponent_Conditional_10_Conditional_5_Template, 1, 0, "div", 10);
    \u0275\u0275elementStart(6, "button", 11);
    \u0275\u0275listener("click", function ExplorePointOfInterestModalComponent_Conditional_10_Template_button_click_6_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.togglePlay());
    });
    \u0275\u0275elementStart(7, "icon");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(9, "p", 12);
    \u0275\u0275text(10, "Read Aloud");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.item().media_type === "video" ? 1 : 2);
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r0.playing() ? 5 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.playing() ? "stop" : "volume_up");
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const details_r3 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", details_r3?.[0], " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(details_r3?.[1]);
  }
}
function ExplorePointOfInterestModalComponent_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275repeaterCreate(1, ExplorePointOfInterestModalComponent_Conditional_11_For_2_Template, 5, 2, "div", 13, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.item().extra_details);
  }
}
var ExplorePointOfInterestModalComponent = class _ExplorePointOfInterestModalComponent {
  constructor() {
    this.item = signal(
      inject(MAT_DIALOG_DATA),
      ...ngDevMode ? [{ debugName: "item" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.playing = signal(
      false,
      ...ngDevMode ? [{ debugName: "playing" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._media_el = viewChild(
      "media_el",
      ...ngDevMode ? [{ debugName: "_media_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._on_ended = () => {
      this.playing.set(false);
      this._media_el()?.nativeElement.removeEventListener("ended", this._on_ended);
    };
  }
  togglePlay() {
    const el = this._media_el()?.nativeElement;
    if (!el)
      return;
    if (this.playing()) {
      el.pause();
    } else {
      el.addEventListener("ended", this._on_ended);
      el.currentTime = 0;
      el.play();
    }
    this.playing.set(!this.playing());
  }
  static {
    this.\u0275fac = function ExplorePointOfInterestModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePointOfInterestModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExplorePointOfInterestModalComponent, selectors: [["explore-poi-modal"]], viewQuery: function ExplorePointOfInterestModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._media_el, _c03, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, decls: 12, vars: 5, consts: [["media_el", ""], [1, "bg-base-100", "h-screen", "w-full", "max-w-md", "min-w-[20rem]", "overflow-auto", "rounded-sm", "sm:h-auto"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "bg-base-200", "m-4", "flex", "h-[calc(100vh-5.75rem)]", "w-[calc(100%-2rem)]", "items-center", "justify-center", "rounded-lg", "p-8", "text-center", "opacity-50", "sm:h-64"], [1, "bg-base-300", "h-48", "w-full", "object-contain", 3, "src", "alt"], [1, "text-sm"], [1, "pointer-events-none", "absolute", "opacity-0"], ["auth", "", "controls", "", 1, "h-full", "w-full", 3, "source"], [1, "border-base-200", "flex", "w-full", "flex-col", "items-center", "justify-center", "space-y-2", "border-t", "p-4"], [1, "relative"], [1, "bg-info", "absolute", "top-2", "left-2", "h-8", "w-8", "animate-ping", "rounded-full"], ["icon", "", "matRipple", "", 1, "bg-base-200", "relative", "h-12", "w-12", 3, "click"], [1, "text-xs", "font-medium"], [1, "border-base-200", "flex", "space-x-4", "border-t", "p-4"], [1, "text-info", "w-20", "min-w-20"]], template: function ExplorePointOfInterestModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1)(1, "header")(2, "h2");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(7, "main");
        \u0275\u0275conditionalCreate(8, ExplorePointOfInterestModalComponent_Conditional_8_Template, 2, 0, "p", 3);
        \u0275\u0275conditionalCreate(9, ExplorePointOfInterestModalComponent_Conditional_9_Template, 1, 2, "img", 4);
        \u0275\u0275conditionalCreate(10, ExplorePointOfInterestModalComponent_Conditional_10_Template, 11, 3);
        \u0275\u0275conditionalCreate(11, ExplorePointOfInterestModalComponent_Conditional_11_Template, 3, 0, "div", 5);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.item().name);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(!ctx.item().image && !ctx.item().media_url && !ctx.item().extra_details?.length ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().image ? 9 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().media_url ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.item().extra_details?.length ? 11 : -1);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      IconComponent,
      AuthenticatedImageDirective
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestModalComponent, [{
    type: Component,
    args: [{ selector: `explore-poi-modal`, template: `
        <div
            class="bg-base-100 h-screen w-full max-w-md min-w-[20rem] overflow-auto rounded-sm sm:h-auto"
        >
            <header>
                <h2>{{ item().name }}</h2>
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            </header>
            <main>
                @if (
                    !item().image &&
                    !item().media_url &&
                    !item().extra_details?.length
                ) {
                    <p
                        class="bg-base-200 m-4 flex h-[calc(100vh-5.75rem)] w-[calc(100%-2rem)] items-center justify-center rounded-lg p-8 text-center opacity-50 sm:h-64"
                    >
                        No available details for this point of interest.
                    </p>
                }
                @if (item().image) {
                    <img
                        class="bg-base-300 h-48 w-full object-contain"
                        [src]="item().image"
                        [alt]="item().name"
                    />
                }
                @if (item().media_url) {
                    <div class="pointer-events-none absolute opacity-0">
                        @if (item().media_type === 'video') {
                            <video
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item().media_url"
                                controls
                            ></video>
                        } @else {
                            <audio
                                #media_el
                                class="h-full w-full"
                                auth
                                [source]="item().media_url"
                                controls
                            ></audio>
                        }
                    </div>
                    <div
                        class="border-base-200 flex w-full flex-col items-center justify-center space-y-2 border-t p-4"
                    >
                        <div class="relative">
                            @if (playing()) {
                                <div
                                    class="bg-info absolute top-2 left-2 h-8 w-8 animate-ping rounded-full"
                                ></div>
                            }
                            <button
                                icon
                                matRipple
                                class="bg-base-200 relative h-12 w-12"
                                (click)="togglePlay()"
                            >
                                <icon>{{
                                    playing() ? 'stop' : 'volume_up'
                                }}</icon>
                            </button>
                        </div>
                        <p class="text-xs font-medium">Read Aloud</p>
                    </div>
                }
                @if (item().extra_details?.length) {
                    <div class="text-sm">
                        @for (details of item().extra_details; track $index) {
                            <div
                                class="border-base-200 flex space-x-4 border-t p-4"
                            >
                                <div class="text-info w-20 min-w-20">
                                    {{ details?.[0] }}
                                </div>
                                <div>{{ details?.[1] }}</div>
                            </div>
                        }
                    </div>
                }
            </main>
        </div>
    `, imports: [
      MatRippleModule,
      MatDialogModule,
      IconComponent,
      AuthenticatedImageDirective
    ] }]
  }], null, { _media_el: [{ type: ViewChild, args: ["media_el", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExplorePointOfInterestModalComponent, { className: "ExplorePointOfInterestModalComponent", filePath: "libs/explore/src/lib/explore-poi-modal.component.ts", lineNumber: 128 });
})();

// libs/explore/src/lib/explore-poi.service.ts
var ExplorePointOfInterestService = class _ExplorePointOfInterestService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._explore = inject(ExploreStateService);
    this._dialog = inject(MatDialog);
    this._building = this._org.active_building;
    this._features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async () => {
        const metadata = await Vu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }));
        const mapping = metadata.details || {};
        const levels = this._org.levelsForBuilding(this._org.building);
        const list = flatten(levels.map((lvl) => (mapping[lvl.id] || []).map((_) => __spreadProps(__spreadValues({}, _), {
          zone_id: lvl.id
        }))));
        return list;
      }
    }));
    this._poi_list = computed(
      () => {
        const features = this._features.value() ?? [];
        const level = this._explore.level();
        return level ? features.filter((poi) => poi.zone_id === level.id) : [];
      },
      ...ngDevMode ? [{ debugName: "_poi_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const list = this._poi_list();
      untracked(() => this._updateMapDetails(list));
    });
  }
  _updateMapDetails(list) {
    const features = [];
    const actions = [];
    for (const item of list) {
      if (!item.location)
        continue;
      if (!(item.extra_details?.length > 0 || item.image || item.media_url)) {
        continue;
      }
      let can_act = true;
      ["mousedown", "touchstart"].forEach((event) => actions.push({
        id: item.location,
        action: event,
        priority: 10,
        callback: () => {
          can_act = true;
          this.timeout("act", () => can_act = false);
        }
      }));
      ["mouseup", "touchend"].forEach((event) => actions.push({
        id: item.location,
        action: event,
        priority: 10,
        callback: () => {
          if (can_act)
            this.viewDetails(item);
        }
      }));
      features.push({
        track_id: `poi:hover:${item.location}`,
        location: item.location,
        content: ExploreDeskInfoComponent,
        full_size: true,
        no_scale: true,
        data: {
          id: item.location,
          map_id: item.location,
          name: item.name
        },
        z_index: 20
      });
    }
    this._explore.setActions("poi", actions || []);
    this._explore.setFeatures("poi", features || []);
  }
  viewDetails(item) {
    this._dialog.open(ExplorePointOfInterestModalComponent, {
      data: item
    });
  }
  static {
    this.\u0275fac = function ExplorePointOfInterestService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExplorePointOfInterestService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExplorePointOfInterestService, factory: _ExplorePointOfInterestService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExplorePointOfInterestService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/components/src/lib/map-canvas.component.ts
var _c04 = ["canvas"];
var MAX_CANVAS_PIXELS = 16e6;
var MAX_CANVAS_DIMENSION = 8192;
var MapCanvasComponent = class _MapCanvasComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this.canvas_element = viewChild(
      "canvas",
      ...ngDevMode ? [{ debugName: "canvas_element" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect((onCleanup) => {
      const canvas = this.canvas_element()?.nativeElement;
      if (!canvas || typeof ResizeObserver === "undefined")
        return;
      const resize_observer = new ResizeObserver(() => this._resizeCanvas());
      resize_observer.observe(canvas);
      untracked(() => this._resizeCanvas());
      onCleanup(() => resize_observer.disconnect());
    });
    effect(() => {
      const canvas = this.canvas_element();
      const polygons = this._data.polygons();
      if (!canvas)
        return;
      this._handleStateChange(polygons);
    });
  }
  _resizeCanvas() {
    const canvas = this.canvas_element()?.nativeElement;
    if (!canvas?.clientWidth || !canvas.clientHeight)
      return;
    const pixel_ratio = Math.min(window.devicePixelRatio || 1, MAX_CANVAS_DIMENSION / canvas.clientWidth, MAX_CANVAS_DIMENSION / canvas.clientHeight, Math.sqrt(MAX_CANVAS_PIXELS / (canvas.clientWidth * canvas.clientHeight)));
    const width = Math.max(1, Math.floor(canvas.clientWidth * pixel_ratio));
    const height = Math.max(1, Math.floor(canvas.clientHeight * pixel_ratio));
    if (canvas.width === width && canvas.height === height)
      return;
    canvas.width = width;
    canvas.height = height;
    this._handleStateChange(this._data.polygons());
  }
  _handleStateChange(polygon_list) {
    const canvas = this.canvas_element().nativeElement;
    const ctx = canvas.getContext("2d");
    if (!ctx)
      return;
    const width = canvas.clientWidth || canvas.width;
    const height = canvas.clientHeight || canvas.height;
    ctx.setTransform(canvas.clientWidth ? canvas.width / canvas.clientWidth : 1, 0, 0, canvas.clientHeight ? canvas.height / canvas.clientHeight : 1, 0, 0);
    ctx.clearRect(0, 0, width, height);
    polygon_list.forEach((poly) => this._drawPolygon(ctx, poly, width, height));
  }
  _drawPolygon(ctx, polygon, width, height) {
    const points = polygon.points;
    if (!points?.length)
      return;
    ctx.fillStyle = polygon.color + "80";
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = shiftColorTowards(polygon.color, "#888888", 0.5);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(points[0][0] * width, points[0][1] * height);
    points.forEach(([x, y]) => ctx.lineTo(x * width, y * height));
    ctx.closePath();
    ctx.stroke();
    if (this._data.draw_points !== false) {
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = polygon.color;
      ctx.lineWidth = 4;
      points.forEach(([x, y]) => {
        ctx.beginPath();
        ctx.arc(x * width, y * height, 8, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
      });
    }
    if (this._data.draw_labels !== false) {
      const center = points.reduce((acc, [x, y]) => [acc[0] + x, acc[1] + y], [0, 0]);
      center[0] /= points.length;
      center[1] /= points.length;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillStyle = "#FFF";
      ctx.font = "32px sans-serif";
      ctx.fillText(polygon.name, center[0] * width + 1, center[1] * height + 2);
      ctx.fillStyle = "#000";
      ctx.fillText(polygon.name, center[0] * width, center[1] * height);
    }
  }
  static {
    this.\u0275fac = function MapCanvasComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapCanvasComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapCanvasComponent, selectors: [["", "map-canvas", ""]], viewQuery: function MapCanvasComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx.canvas_element, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, hostAttrs: [1, "block", "h-full", "w-full"], decls: 2, vars: 0, consts: [["canvas", ""], [1, "block", "h-full", "w-full"]], template: function MapCanvasComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElement(0, "canvas", 1, 0);
      }
    }, encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapCanvasComponent, [{
    type: Component,
    args: [{ selector: "[map-canvas]", host: { class: "block h-full w-full" }, template: ` <canvas #canvas class="block h-full w-full"></canvas> ` }]
  }], () => [], { canvas_element: [{ type: ViewChild, args: ["canvas", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapCanvasComponent, { className: "MapCanvasComponent", filePath: "libs/components/src/lib/map-canvas.component.ts", lineNumber: 38 });
})();

// libs/explore/src/lib/explore-sensor-info.component.ts
function ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "thermostat");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2("", ctx_r0.temp(), "\u02DA", ctx_r0.temp_unit());
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "icon");
    \u0275\u0275text(2, "opacity");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", ctx_r0.humidity(), "%");
  }
}
function ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4)(1, "icon", 6);
    \u0275\u0275text(2, "error");
    \u0275\u0275elementEnd()();
  }
}
function ExploreSensorInfoComponent_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreSensorInfoComponent_ng_template_3_Conditional_1_Template, 5, 2, "div", 3);
    \u0275\u0275conditionalCreate(2, ExploreSensorInfoComponent_ng_template_3_Conditional_2_Template, 5, 1, "div", 3);
    \u0275\u0275conditionalCreate(3, ExploreSensorInfoComponent_ng_template_3_Conditional_3_Template, 3, 0, "div", 4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.humidity() ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.temp() > 82 ? 3 : -1);
  }
}
var shown_id = "";
var ExploreSensorInfoComponent = class _ExploreSensorInfoComponent extends AsyncHandler {
  constructor() {
    super();
    this._details = inject(MAP_FEATURE_DATA);
    this.temp = signal(
      this._details.temp || 0,
      ...ngDevMode ? [{ debugName: "temp" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.temp_unit = signal(
      this._details.temp_unit || "C",
      ...ngDevMode ? [{ debugName: "temp_unit" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.humidity = signal(
      this._details.humidity || 0,
      ...ngDevMode ? [{ debugName: "humidity" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show = computed(
      () => shown_id === this._details.id,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.setShow = (value) => {
      this.timeout("show", () => shown_id = value ? this._details.id : "");
    };
  }
  static {
    this.\u0275fac = function ExploreSensorInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSensorInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSensorInfoComponent, selectors: [["explore-sensor-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 5, vars: 1, consts: [["stats", ""], ["icon", "", "matRipple", "", "customTooltip", "", "yPosition", "center", "xPosition", "center", 1, "bg-base-100", "pointer-events-auto", "absolute", "top-1/2", "left-1/2", "h-7", "w-7", "min-w-0", "-translate-x-1/2", "-translate-y-1/2", "shadow-sm", 3, "pointerdown", "pointerup", "click", "content"], [1, "border-base-200", "bg-base-100", "absolute", "top-1/2", "left-1/2", "-translate-x-1/2", "-translate-y-1/2", "rounded-lg", "border", "p-2", "text-xl"], [1, "flex", "items-center", "space-x-2", "pr-2", "whitespace-nowrap"], [1, "border-base-200", "bg-base-100", "absolute", "top-0", "right-0", "translate-x-1/2", "-translate-y-1/2", "rounded-full", "border"], [1, ""], [1, "text-error", "text-xl"]], template: function ExploreSensorInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 1);
        \u0275\u0275listener("pointerdown", function ExploreSensorInfoComponent_Template_button_pointerdown_0_listener($event) {
          return $event.stopPropagation();
        })("pointerup", function ExploreSensorInfoComponent_Template_button_pointerup_0_listener($event) {
          return $event.stopPropagation();
        })("click", function ExploreSensorInfoComponent_Template_button_click_0_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(1, "icon");
        \u0275\u0275text(2, " visibility ");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(3, ExploreSensorInfoComponent_ng_template_3_Template, 4, 3, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const stats_r2 = \u0275\u0275reference(4);
        \u0275\u0275property("content", stats_r2);
      }
    }, dependencies: [CustomTooltipComponent, IconComponent], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSensorInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-sensor-info", template: `
        <button
            icon
            matRipple
            customTooltip
            [content]="stats"
            yPosition="center"
            xPosition="center"
            class="bg-base-100 pointer-events-auto absolute top-1/2 left-1/2 h-7 w-7 min-w-0 -translate-x-1/2 -translate-y-1/2 shadow-sm"
            (pointerdown)="$event.stopPropagation()"
            (pointerup)="$event.stopPropagation()"
            (click)="$event.stopPropagation()"
        >
            <icon> visibility </icon>
        </button>
        <ng-template #stats>
            <div
                class="border-base-200 bg-base-100 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg border p-2 text-xl"
            >
                @if (temp()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>thermostat</icon>
                        <div class="">{{ temp() }}\u02DA{{ temp_unit() }}</div>
                    </div>
                }
                @if (humidity()) {
                    <div
                        class="flex items-center space-x-2 pr-2 whitespace-nowrap"
                    >
                        <icon>opacity</icon>
                        <div class="">{{ humidity() }}%</div>
                    </div>
                }
                @if (temp() > 82) {
                    <div
                        class="border-base-200 bg-base-100 absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 rounded-full border"
                    >
                        <icon class="text-error text-xl">error</icon>
                    </div>
                }
            </div>
        </ng-template>
    `, imports: [CustomTooltipComponent, IconComponent] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSensorInfoComponent, { className: "ExploreSensorInfoComponent", filePath: "libs/explore/src/lib/explore-sensor-info.component.ts", lineNumber: 66 });
})();

// libs/explore/src/lib/explore-zones.service.ts
var ExploreZonesService = class _ExploreZonesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._injector = inject(Injector);
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._capacity = {};
    this._draw = {};
    this._points = {};
    this._polygons = signal(
      [],
      ...ngDevMode ? [{ debugName: "_polygons" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._area_data = signal(
      null,
      ...ngDevMode ? [{ debugName: "_area_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._zone_data = signal(
      null,
      ...ngDevMode ? [{ debugName: "_zone_data" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const bld = this._org.active_building();
      const lvl = this._state.level();
      const { is_public } = this._state.options();
      if (!bld || !lvl || is_public)
        return;
      untracked(() => this._bindToLevel(lvl.id));
    });
    effect(() => {
      this._area_data();
      this._zone_data();
      this._state.spaces();
      this.timeout("parse_data", () => this._parseBindingData(), 100);
    });
    this.init();
  }
  async init() {
    await firstValueWhere(this._org.initialised, (_) => !!_, this._injector);
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => Vu(bld.id, "map_regions").catch(() => null)));
    this._capacity = {};
    this._count_key = {};
    this._location = {};
    this._label_location = {};
    this._draw = {};
    this._points = {};
    const use_zone_polygons = this._settings.get("app.explore.use_zone_polygons");
    for (const zone of zone_metadata) {
      const areas = zone?.details?.areas;
      if (!areas)
        continue;
      for (const area of areas) {
        const id = area.map_id || area.id;
        const { capacity, hide_label, label_location, draw_polygon, area_count_key } = area.properties || {};
        const { coordinates } = area.geometry || {};
        this._capacity[id] = capacity || 100;
        this._count_key[id] = area_count_key || "";
        this._location[id] = coordinates?.length ? getCenterPoint(coordinates) : null;
        this._label_location[id] = hide_label === false ? label_location || this._location[id] : null;
        this._draw[id] = !!draw_polygon || use_zone_polygons;
        this._points[id] = coordinates || [];
      }
    }
    this._state.setFeatures("zones-canvas", [
      {
        track_id: "zones-canvas",
        location: { x: 0, y: 0, w: 1, h: 1 },
        content: MapCanvasComponent,
        full_size: true,
        data: {
          polygons: this._polygons.asReadonly(),
          draw_points: false,
          draw_labels: false
        }
      }
    ]);
    this._parseBindingData();
  }
  _bindToLevel(zone_id) {
    this.unsub("binding");
    this.unsub("zone-binding");
    this._area_data.set(null);
    this._zone_data.set(null);
    this._state.setLabels("zones", []);
    this._updateStatus({});
    const mod = this._org.module("area_management", "AreaManagement");
    if (!mod)
      return;
    const bind_areas = mod.variable(`${zone_id}:areas`);
    const bind_zone = mod.variable(`${zone_id}`);
    this.subscription("binding", bind_areas.bindThenSubscribe((d) => this._area_data.set(d)));
    this.subscription("zone-binding", bind_zone.bindThenSubscribe((d) => this._zone_data.set(d)));
  }
  _parseBindingData() {
    const areas = this._area_data()?.value || [];
    const zones = (this._zone_data()?.value || []).filter((_) => _.location === "area");
    this.parseData([...areas, ...zones]);
  }
  parseData(value = []) {
    const labels = [];
    const features = [];
    const statuses = {};
    const temp_unit = this._settings.get("app.use_imperial_units") ? "F" : "C";
    const count_key = this._settings.get("app.explore.area_count_key") || "count";
    const show_zone_labels = this._settings.get("app.explore.show_zone_labels");
    const show_sensor_info = this._settings.get("app.explore.show_zone_sensor_info");
    const room_ids = new Set(this._state.spaces().flatMap((space) => [space.id, space.map_id]).filter((id) => !!id));
    for (const zone of value) {
      const id = zone.map_id || zone.area_id;
      const has_room = room_ids.has(zone.area_id) || !!zone.map_id && room_ids.has(zone.map_id);
      const capacity = zone.capacity || this._capacity[id] || 100;
      const count = Number(zone[this._count_key[id] || count_key] ?? 0);
      const filled = count / capacity;
      if (!has_room) {
        statuses[id] = zone.at_location ? "busy" : filled < 0.4 ? "free" : filled < 0.75 ? "pending" : "busy";
      }
      if (!this._location[id])
        continue;
      let content = "";
      if (zone.count) {
        content += i18n("EXPLORE.DEVICE_COUNT", { count: zone.count }) + "\n";
      }
      if (zone.temperature != null)
        content += i18n("EXPLORE.SENSORS_TEMP", {
          value: `${zone.temperature} \xB0${temp_unit}
`
        });
      if (zone.people_count > 0)
        content += i18n("COMMON.PEOPLE_COUNT", {
          count: `${zone.people_count_sum}
`
        });
      if (zone.humidity != null)
        content += i18n("EXPLORE.SENSORS_HUMIDITY", {
          value: `${zone.humidity}
`
        });
      if (zone.queue_size)
        content += i18n("EXPLORE.SENSORS_QUEUE", {
          value: `${zone.queue_size}
`
        });
      if (zone.counter)
        content += i18n("EXPLORE.SENSORS_COUNT", {
          value: `${zone.counter}
`
        });
      if (!has_room && this._label_location[id] && show_zone_labels) {
        labels.push({
          location: this._label_location[id],
          content,
          z_index: 100
        });
      }
      if (has_room && show_sensor_info && (zone.temperature != null || zone.humidity != null)) {
        features.push({
          track_id: `sensors:${id}`,
          location: this._location[id],
          content: ExploreSensorInfoComponent,
          data: {
            id,
            temp: zone.temperature ?? 10,
            temp_unit,
            humidity: zone.humidity ?? 10
          },
          z_index: 100
        });
      }
    }
    this._state.setLabels("zones", labels);
    this._updateStatus(statuses, features);
  }
  _updateStatus(statuses, sensor_features = []) {
    const style_map = {};
    const features = [];
    const colours = this._settings.get("app.explore.colors") || {};
    const polygons = [];
    for (const [zone_id, status] of Object.entries(statuses)) {
      const colour = colours[`zone-${status}`] || colours[status] || DEFAULT_COLOURS[status];
      if (this._draw[zone_id]) {
        polygons.push({
          name: zone_id,
          points: this._points[zone_id],
          color: colour
        });
      } else if (this._state.has("style", zone_id, ["zones", "zones-styles"])) {
        features.push({
          location: zone_id,
          content: ExploreIconComponent,
          data: {
            icon: { content: "pin_drop" }
          },
          full_size: true,
          z_index: 98
        });
      } else {
        style_map[`#${zone_id}`] = {
          fill: colour,
          opacity: 0.6
        };
      }
    }
    this._polygons.set(polygons);
    this._state.setFeatures("zones", features);
    this._state.setFeatures("sensors", sensor_features);
    this._state.setStyles("zones-styles", style_map);
  }
  static {
    this.\u0275fac = function ExploreZonesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreZonesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreZonesService, factory: _ExploreZonesService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreZonesService, [{
    type: Injectable
  }], () => [], null);
})();
function getCenterPoint(points) {
  const [first_x, first_y] = points[0];
  let x_min = first_x;
  let x_max = first_x;
  let y_min = first_y;
  let y_max = first_y;
  for (const [x, y] of points) {
    x_min = Math.min(x_min, x);
    x_max = Math.max(x_max, x);
    y_min = Math.min(y_min, y);
    y_max = Math.max(y_max, y);
  }
  return {
    x: x_min + (x_max - x_min) / 2,
    y: y_min + (y_max - y_min) / 2
  };
}

// libs/explore/src/lib/explore-map-view.component.ts
var _c05 = () => ({ controls: true });
function ExploreMapViewComponent_Conditional_1_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_1_Conditional_2_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggles_collapsed.set(!ctx_r1.toggles_collapsed()));
    });
    \u0275\u0275elementStart(1, "div", 10);
    \u0275\u0275text(2, "Map Overlays");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", !ctx_r1.toggles_collapsed());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r1.toggles_collapsed() ? "Show" : "Hide", " ");
  }
}
function ExploreMapViewComponent_Conditional_1_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 12);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_1_Conditional_4_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature("zones", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 2, "EXPLORE.AREAS"))("ngModel", !ctx_r1.options()?.disable?.includes("zones"));
    \u0275\u0275control();
  }
}
function ExploreMapViewComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 13);
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_1_Conditional_5_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature("devices", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", !ctx_r1.options()?.disable?.includes("devices"));
    \u0275\u0275control();
  }
}
function ExploreMapViewComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 14);
    \u0275\u0275listener("ngModelChange", function ExploreMapViewComponent_Conditional_1_Conditional_6_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.toggleFeature("sensors", $event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngModel", !ctx_r1.options()?.disable?.includes("sensors"));
    \u0275\u0275control();
  }
}
function ExploreMapViewComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 1);
    \u0275\u0275element(1, "explore-map-controls");
    \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_1_Conditional_2_Template, 5, 2, "button", 4);
    \u0275\u0275elementStart(3, "div", 5);
    \u0275\u0275conditionalCreate(4, ExploreMapViewComponent_Conditional_1_Conditional_4_Template, 2, 4, "settings-toggle", 6);
    \u0275\u0275conditionalCreate(5, ExploreMapViewComponent_Conditional_1_Conditional_5_Template, 1, 1, "settings-toggle", 7);
    \u0275\u0275conditionalCreate(6, ExploreMapViewComponent_Conditional_1_Conditional_6_Template, 1, 1, "settings-toggle", 8);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.toggle_count() >= 2 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("hidden", ctx_r1.toggles_collapsed() && ctx_r1.toggle_count() >= 2);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_zones() ? 4 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_devices() ? 5 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.hide_sensors() ? 6 : -1);
  }
}
function ExploreMapViewComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 19);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_2_Conditional_1_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.legend_collapsed.set(!ctx_r1.legend_collapsed()));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 11);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("aria-expanded", !ctx_r1.legend_collapsed());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "EXPLORE.LEGEND"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.legend_collapsed() ? "Show" : "Hide", " ");
  }
}
function ExploreMapViewComponent_Conditional_2_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "h3", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "EXPLORE.LEGEND"), " ");
  }
}
function ExploreMapViewComponent_Conditional_2_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18);
    \u0275\u0275element(1, "div", 20);
    \u0275\u0275elementStart(2, "div", 21);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const pair_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", pair_r7[1]);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(pair_r7[0]);
  }
}
function ExploreMapViewComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2);
    \u0275\u0275conditionalCreate(1, ExploreMapViewComponent_Conditional_2_Conditional_1_Template, 6, 5, "button", 15)(2, ExploreMapViewComponent_Conditional_2_Conditional_2_Template, 3, 3, "h3", 16);
    \u0275\u0275elementStart(3, "div", 17);
    \u0275\u0275repeaterCreate(4, ExploreMapViewComponent_Conditional_2_For_5_Template, 4, 3, "div", 18, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.legend().length > 3 ? 1 : 2);
    \u0275\u0275advance(2);
    \u0275\u0275classProp("hidden", ctx_r1.legend_collapsed() && ctx_r1.legend().length > 3);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.legend());
  }
}
function ExploreMapViewComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 22);
    \u0275\u0275listener("click", function ExploreMapViewComponent_Conditional_3_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.clearLocate());
    });
    \u0275\u0275text(1, " Clear Pin ");
    \u0275\u0275elementEnd();
  }
}
var EMPTY2 = [];
var ExploreMapViewComponent = class _ExploreMapViewComponent extends AsyncHandler {
  toggleFeature(feature, enabled) {
    const options = this.options();
    const disable = !enabled ? unique([...options?.disable || [], feature]) : options?.disable?.filter((_) => _ !== feature) || [];
    this.setOptions({ disable });
  }
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._lockers = inject(ExploreLockersService);
    this._pois = inject(ExplorePointOfInterestService);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._spaces = inject(SpacesService);
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._space_pipe = inject(SpacePipe);
    this._maps = inject(MapsPeopleService);
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.message = this._state.message;
    this.setOptions = (o) => this._state.setOptions(o);
    this.locate = signal(
      "",
      ...ngDevMode ? [{ debugName: "locate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_info = signal(
      {},
      ...ngDevMode ? [{ debugName: "map_info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.legend_collapsed = signal(
      true,
      ...ngDevMode ? [{ debugName: "legend_collapsed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggles_collapsed = signal(
      true,
      ...ngDevMode ? [{ debugName: "toggles_collapsed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_legend = settingSignal("explore.show_legend", false);
    this.hide_zones = settingSignal("explore.hide_zones", false);
    this.hide_devices = settingSignal("explore.hide_devices", true);
    this.hide_sensors = settingSignal("explore.hide_sensors", true);
    this.toggle_count = computed(
      () => +!this.hide_zones() + +!this.hide_devices() + +!this.hide_sensors(),
      ...ngDevMode ? [{ debugName: "toggle_count" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.legend = settingSignal("explore.legend", EMPTY2);
    this.use_mapsindoors = computed(
      () => this._maps.available instanceof Function ? this._maps.available() : false,
      ...ngDevMode ? [{ debugName: "use_mapsindoors" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  async ngOnInit() {
    this._state.reset();
    while (this._spaces.initialised instanceof Function && !this._spaces.initialised()) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    this.toggleFeature("zones", false);
    const stop_polling = this._parking.startPolling?.() || (() => void 0);
    const cleanup_polling = typeof stop_polling === "function" ? stop_polling : () => stop_polling.unsubscribe?.();
    this.subscription("parking_poll", {
      unsubscribe: cleanup_polling
    });
    this.subscription("route.query", this._route.queryParamMap.subscribe(async (params) => {
      if (params.has("level") || params.has("zone")) {
        this._state.setLevel(params.get("level") || params.get("zone"));
      }
      this._state.setFeatures("_located", []);
      if (params.has("space")) {
        this.locateSpace(params.get("space"));
      } else if (params.has("user")) {
        let user = this._settings.value("last_search");
        if (!user || params.get("user") !== user.email) {
          user = null;
          user = await showStaff(params.get("user"));
        }
        if (!user)
          return notifyError(i18n("EXPLORE.LOCATE_USER_FAILED", {
            name: params.get("user")
          }));
        this.locateUser(user instanceof Array ? user[0] : user).catch((e) => {
          notifyError(e);
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: { user: "" },
            queryParamsHandling: "preserve"
          });
        });
      } else if (params.has("locate")) {
        this._locateFeature(params.get("locate"), params.get("name"));
      } else {
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", []);
        });
      }
    }));
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  clearLocate() {
    this.locate.set("");
    this._state.setFeatures("_located", []);
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: {
        user: void 0,
        space: void 0,
        locate: void 0,
        name: void 0
      },
      queryParamsHandling: "merge"
    });
  }
  _locateFeature(id, name = "") {
    const has_coordinates = id.includes(",");
    const parts = id.split(",");
    const feature = {
      track_id: `locate-${id}`,
      location: has_coordinates ? { x: parseFloat(parts[0]), y: parseFloat(parts[1]) } : id,
      content: MapPinComponent,
      z_index: 99,
      data: { message: name }
    };
    this.timeout("update_location", () => {
      this.locate.set(id);
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateSpace(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return notifyError(i18n("EXPLORE.LOCATE_SPACE_DETAILS_FAILED"));
    this._state.setLevel(this._org.levelWithID(space.zones)?.id);
    const feature = {
      track_id: `locate-${space.id}`,
      location: space.map_id,
      content: MapPinComponent,
      z_index: 99,
      data: {
        message: `${space.display_name || space.name} is here`
      }
    };
    this.timeout("update_location", () => {
      this.locate.set(id);
      this._state.setFeatures("_located", [feature]);
    });
  }
  async locateUser(user) {
    const binding = this._org.binding("location_services");
    const mod = this._org.module("location_services", "LocationServices");
    if (!mod)
      throw i18n("EXPLORE.LOCATE_SERVICE_UNAVAILABLE");
    const priority = binding?.priority || [];
    const locations = (await mod.execute("locate_user", [
      user.email,
      user.username || user.id
    ])).map((i) => new MapLocation(i));
    locations.sort((a, b) => (priority.includes(a.type) ? priority.indexOf(a.type) : 999) - (priority.includes(b.type) ? priority.indexOf(b.type) : 999));
    if (!locations?.length)
      throw i18n("EXPLORE.LOCATE_USER_NOT_FOUND");
    let loc = locations.find(({ position }) => typeof position !== "string" || position in this.map_info());
    if (!loc)
      loc = locations[0];
    if (typeof loc.position !== "string") {
      notifyWarn(i18n(`EXPLORE.LOCATE_USER_FOUND_NO_PIN`, { type: loc.type }));
    }
    this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
    const pos = loc.position;
    const { coordinates_from } = loc;
    const feature = {
      track_id: `locate-${user.id}`,
      location: locations[0].type === "wireless" ? {
        x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
        y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
      } : pos,
      content: loc.type === "wireless" ? MapRadiusComponent : MapPinComponent,
      z_index: 99,
      data: {
        message: i18n("EXPLORE.LOCATE_USER", { name: user.name }),
        radius: loc.variance,
        last_seen: loc.last_seen
      }
    };
    this.timeout("update_location", () => {
      this.locate.set(user.id || user.email);
      this._state.setFeatures("_located", [feature]);
    });
  }
  static {
    this.\u0275fac = function ExploreMapViewComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreMapViewComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreMapViewComponent, selectors: [["explore-map-view"]], features: [\u0275\u0275ProvidersFeature([
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      ExplorePointOfInterestService,
      SpacePipe
    ]), \u0275\u0275InheritDefinitionFeature], decls: 4, vars: 11, consts: [[3, "mapInfo", "src", "styles", "features", "actions", "labels", "focus", "options"], ["controls", "", 1, "flex", "flex-col", "border-base-300", "bg-base-100", "absolute", "top-2", "left-2", "max-w-[calc(100vw-1rem)]", "gap-2", "overflow-hidden", "rounded-lg", "border", "p-2", "shadow-xl"], ["legend", "", 1, "border-base-300", "bg-base-100", "absolute", "bottom-2", "left-2", "gap-2", "rounded-lg", "border"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "bottom-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm"], ["toggle-controls", "", "matRipple", "", "type", "button", "aria-controls", "explore-map-toggle-options", 1, "bg-base-200", "rounded", "flex", "w-full", "items-center", "justify-between", "space-x-4", "font-medium", "p-2"], ["id", "explore-map-toggle-options", 1, "space-y-2"], [3, "label", "ngModel"], ["label", "Show Devices", 3, "ngModel"], ["label", "Show Sensors", 3, "ngModel"], ["toggle-controls", "", "matRipple", "", "type", "button", "aria-controls", "explore-map-toggle-options", 1, "bg-base-200", "rounded", "flex", "w-full", "items-center", "justify-between", "space-x-4", "font-medium", "p-2", 3, "click"], [1, "px-2"], [1, "text-sm", "underline"], [3, "ngModelChange", "label", "ngModel"], ["label", "Show Devices", 3, "ngModelChange", "ngModel"], ["label", "Show Sensors", 3, "ngModelChange", "ngModel"], ["type", "button", "aria-controls", "explore-map-legend-items", 1, "flex", "w-full", "min-w-64", "items-center", "justify-between", "space-x-4", "p-3", "text-left", "font-medium"], [1, "min-w-64", "p-3", "font-medium"], ["id", "explore-map-legend-items", 1, "space-y-1", "px-4", "pb-3"], [1, "flex", "items-center", "space-x-2"], ["type", "button", "aria-controls", "explore-map-legend-items", 1, "flex", "w-full", "min-w-64", "items-center", "justify-between", "space-x-4", "p-3", "text-left", "font-medium", 3, "click"], [1, "border-base-200", "h-3", "w-3", "rounded-full", "border"], [1, "text-sm"], ["matRipple", "", 1, "border-base-300", "bg-base-100", "absolute", "bottom-2", "right-2", "h-12", "min-w-32", "rounded-lg", "border", "px-4", "shadow-sm", 3, "click"]], template: function ExploreMapViewComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "interactive-map", 0);
        \u0275\u0275listener("mapInfo", function ExploreMapViewComponent_Template_interactive_map_mapInfo_0_listener($event) {
          return ctx.map_info.set($event ?? {});
        });
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(1, ExploreMapViewComponent_Conditional_1_Template, 7, 6, "div", 1);
        \u0275\u0275conditionalCreate(2, ExploreMapViewComponent_Conditional_2_Template, 6, 3, "div", 2);
        \u0275\u0275conditionalCreate(3, ExploreMapViewComponent_Conditional_3_Template, 2, 0, "button", 3);
      }
      if (rf & 2) {
        \u0275\u0275property("src", ctx.url())("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("focus", ctx.locate())("options", \u0275\u0275pureFunction0(10, _c05));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.use_mapsindoors() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_legend() && ctx.legend().length ? 2 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.locate() ? 3 : -1);
      }
    }, dependencies: [
      InteractiveMapComponent,
      MatRippleModule,
      MatRipple,
      ExploreMapControlComponent,
      FormsModule,
      NgControlStatus,
      NgModel,
      SettingsToggleComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  height: 100%;\n  width: 100%;\n}\n[zones][_ngcontent-%COMP%] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreMapViewComponent, [{
    type: Component,
    args: [{ selector: "explore-map-view", template: `
        <interactive-map
            [src]="url()"
            [styles]="styles()"
            [features]="features()"
            [actions]="actions()"
            [labels]="labels()"
            [focus]="locate()"
            [options]="{ controls: true }"
            (mapInfo)="map_info.set($event ?? $any({}))"
        />
        @if (!use_mapsindoors()) {
            <div
                controls
                class="flex flex-col border-base-300 bg-base-100 absolute top-2 left-2 max-w-[calc(100vw-1rem)] gap-2 overflow-hidden rounded-lg border p-2 shadow-xl"
            >
                <explore-map-controls></explore-map-controls>
                @if (toggle_count() >= 2) {
                    <button
                        toggle-controls
                        matRipple
                        type="button"
                        class="bg-base-200 rounded flex w-full items-center justify-between space-x-4 font-medium p-2"
                        [attr.aria-expanded]="!toggles_collapsed()"
                        aria-controls="explore-map-toggle-options"
                        (click)="toggles_collapsed.set(!toggles_collapsed())"
                    >
                        <div class="px-2">Map Overlays</div>
                        <div class="text-sm underline">
                            {{ toggles_collapsed() ? 'Show' : 'Hide' }}
                        </div>
                    </button>
                }
                <div
                    id="explore-map-toggle-options"
                    class="space-y-2"
                    [class.hidden]="toggles_collapsed() && toggle_count() >= 2"
                >
                    @if (!hide_zones()) {
                        <settings-toggle
                            [label]="'EXPLORE.AREAS' | translate"
                            [ngModel]="!options()?.disable?.includes('zones')"
                            (ngModelChange)="toggleFeature('zones', $event)"
                        />
                    }
                    @if (!hide_devices()) {
                        <settings-toggle
                            label="Show Devices"
                            [ngModel]="!options()?.disable?.includes('devices')"
                            (ngModelChange)="toggleFeature('devices', $event)"
                        />
                    }
                    @if (!hide_sensors()) {
                        <settings-toggle
                            label="Show Sensors"
                            [ngModel]="!options()?.disable?.includes('sensors')"
                            (ngModelChange)="toggleFeature('sensors', $event)"
                        />
                    }
                </div>
            </div>
        }
        @if (show_legend() && legend().length) {
            <div
                legend
                class="border-base-300 bg-base-100 absolute bottom-2 left-2 gap-2 rounded-lg border"
            >
                @if (legend().length > 3) {
                    <button
                        type="button"
                        class="flex w-full min-w-64 items-center justify-between space-x-4 p-3 text-left font-medium"
                        [attr.aria-expanded]="!legend_collapsed()"
                        aria-controls="explore-map-legend-items"
                        (click)="legend_collapsed.set(!legend_collapsed())"
                    >
                        <div>{{ 'EXPLORE.LEGEND' | translate }}</div>
                        <div class="text-sm underline">
                            {{ legend_collapsed() ? 'Show' : 'Hide' }}
                        </div>
                    </button>
                } @else {
                    <h3 class="min-w-64 p-3 font-medium">
                        {{ 'EXPLORE.LEGEND' | translate }}
                    </h3>
                }
                <div
                    id="explore-map-legend-items"
                    class="space-y-1 px-4 pb-3"
                    [class.hidden]="legend_collapsed() && legend().length > 3"
                >
                    @for (pair of legend(); track pair) {
                        <div class="flex items-center space-x-2">
                            <div
                                class="border-base-200 h-3 w-3 rounded-full border"
                                [style.background-color]="pair[1]"
                            ></div>
                            <div class="text-sm">{{ pair[0] }}</div>
                        </div>
                    }
                </div>
            </div>
        }
        @if (locate()) {
            <button
                class="border-base-300 bg-base-100 absolute bottom-2 right-2 h-12 min-w-32 rounded-lg border px-4 shadow-sm"
                matRipple
                (click)="clearLocate()"
            >
                Clear Pin
            </button>
        }
    `, providers: [
      ExploreDesksService,
      ExploreSpacesService,
      ExploreZonesService,
      ExploreParkingService,
      ExploreLockersService,
      ExplorePointOfInterestService,
      SpacePipe
    ], imports: [
      TranslatePipe,
      InteractiveMapComponent,
      MatRippleModule,
      ExploreMapControlComponent,
      FormsModule,
      SettingsToggleComponent
    ], styles: ["/* angular:styles/component:css;f0dd04a674d5d39d9f19b967c64f941cbd15e6ed17e75f4055e915dd830afa8d;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-map-view.component.ts */\n:host {\n  height: 100%;\n  width: 100%;\n}\n[zones] {\n  top: 3.5rem;\n}\n/*# sourceMappingURL=explore-map-view.component.css.map */\n"] }]
  }], () => [], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreMapViewComponent, { className: "ExploreMapViewComponent", filePath: "libs/explore/src/lib/explore-map-view.component.ts", lineNumber: 186 });
})();

// apps/workplace/src/app/explore/event-pin.component.ts
var EventPinComponent = class _EventPinComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
  }
  get fill() {
    return this._data.fill || "var(--secondary)";
  }
  get stroke() {
    return this._data.stroke || "var(--secondary-focus)";
  }
  get icon_color() {
    return this._data.icon_color || "var(--secondary-content)";
  }
  static {
    this.\u0275fac = function EventPinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventPinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventPinComponent, selectors: [["event-map-pin"]], decls: 10, vars: 4, consts: [[1, "pointer-events-auto", "absolute", "bottom-0", "left-1/2", "-translate-x-1/2"], ["width", "48", "height", "64", "viewBox", "0 0 48 64", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["id", "event-pin-shadow", "x", "-4", "y", "0", "width", "56", "height", "72", "filterUnits", "userSpaceOnUse", "color-interpolation-filters", "sRGB"], ["dx", "0", "dy", "2", "stdDeviation", "2", "flood-opacity", "0.3"], ["filter", "url(#event-pin-shadow)"], ["d", "M24 4\n                           C26 4 28 5 30 7\n                           L42 19\n                           C44 21 45 23 45 25\n                           C45 27 44 29 42 31\n                           L28 45\n                           C26 47 25 49 24 52\n                           C23 49 22 47 20 45\n                           L6 31\n                           C4 29 3 27 3 25\n                           C3 23 4 21 6 19\n                           L18 7\n                           C20 5 22 4 24 4\n                           Z", "stroke-width", "2"], [1, "absolute", "left-0", "top-0", "flex", "h-[52px]", "w-full", "items-center", "justify-center"], [1, "text-2xl"]], template: function EventPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275namespaceSVG();
        \u0275\u0275elementStart(1, "svg", 1)(2, "defs")(3, "filter", 2);
        \u0275\u0275element(4, "feDropShadow", 3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "g", 4);
        \u0275\u0275element(6, "path", 5);
        \u0275\u0275elementEnd()();
        \u0275\u0275namespaceHTML();
        \u0275\u0275elementStart(7, "div", 6)(8, "icon", 7);
        \u0275\u0275text(9, " calendar_month ");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275attribute("fill", ctx.fill)("stroke", ctx.stroke);
        \u0275\u0275advance(2);
        \u0275\u0275styleProp("color", ctx.icon_color);
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=event-pin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventPinComponent, [{
    type: Component,
    args: [{ selector: `event-map-pin`, template: `
        <div
            class="pointer-events-auto absolute bottom-0 left-1/2 -translate-x-1/2"
        >
            <svg
                width="48"
                height="64"
                viewBox="0 0 48 64"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <filter
                        id="event-pin-shadow"
                        x="-4"
                        y="0"
                        width="56"
                        height="72"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                    >
                        <feDropShadow
                            dx="0"
                            dy="2"
                            stdDeviation="2"
                            flood-opacity="0.3"
                        />
                    </filter>
                </defs>
                <!-- Diamond shape: rounded top/left/right corners, pointed bottom -->
                <g filter="url(#event-pin-shadow)">
                    <path
                        d="M24 4
                           C26 4 28 5 30 7
                           L42 19
                           C44 21 45 23 45 25
                           C45 27 44 29 42 31
                           L28 45
                           C26 47 25 49 24 52
                           C23 49 22 47 20 45
                           L6 31
                           C4 29 3 27 3 25
                           C3 23 4 21 6 19
                           L18 7
                           C20 5 22 4 24 4
                           Z"
                        [attr.fill]="fill"
                        [attr.stroke]="stroke"
                        stroke-width="2"
                    />
                </g>
            </svg>
            <div
                class="absolute left-0 top-0 flex h-[52px] w-full items-center justify-center"
            >
                <icon class="text-2xl" [style.color]="icon_color">
                    calendar_month
                </icon>
            </div>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;aca37b045377af9e61ae87ec9ceba230614f528def48741d3190431076d12a3b;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/explore/event-pin.component.ts */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=event-pin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventPinComponent, { className: "EventPinComponent", filePath: "apps/workplace/src/app/explore/event-pin.component.ts", lineNumber: 77 });
})();

// apps/workplace/src/app/explore/explore.component.ts
var _c06 = (a0) => ({ minutes: a0 });
function ExploreComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "topbar");
  }
}
function ExploreComponent_Conditional_4_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "COMMON.BEGINS_IN", \u0275\u0275pureFunction1(5, _c06, ctx_r1.begins_in()), ctx_r1.begins_in()), " ");
  }
}
function ExploreComponent_Conditional_4_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "translate");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(1, 1, "COMMON.ENDS_IN", \u0275\u0275pureFunction1(5, _c06, ctx_r1.ends_in()), ctx_r1.ends_in()), " ");
  }
}
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3)(2, "div", 4);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 5);
    \u0275\u0275declareLet(5);
    \u0275\u0275pipe(6, "level");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div", 6);
    \u0275\u0275conditionalCreate(9, ExploreComponent_Conditional_4_Conditional_9_Template, 2, 7)(10, ExploreComponent_Conditional_4_Conditional_10_Template, 2, 7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "button", 7);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_4_Template_button_click_11_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.pinEvent());
    });
    \u0275\u0275elementStart(12, "icon");
    \u0275\u0275text(13, "place");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r1.next_event().title);
    const lvl_r3 = \u0275\u0275pipeBind1(6, 3, ctx_r1.next_event().system?.zones || ctx_r1.next_event().zones);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", lvl_r3?.display_name || lvl_r3?.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.begins_in() ? 9 : 10);
  }
}
function ExploreComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "footer-menu");
  }
}
var ExploreComponent = class _ExploreComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._desks = inject(DesksService);
    this._landing = inject(LandingStateService);
    this._explore = inject(ExploreStateService);
    this._org = inject(OrganisationService);
    this._upcoming = this._landing.upcoming_events;
    this._time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_event = computed(
      () => {
        const upcoming = this._upcoming()?.[0];
        if (!upcoming)
          return null;
        if (upcoming.type === "desk" || upcoming.system) {
          return upcoming;
        }
        return null;
      },
      ...ngDevMode ? [{ debugName: "next_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.begins_in = computed(
      () => {
        const event = this.next_event();
        if (!event)
          return 0;
        return Math.max(0, differenceInMinutes(event.date, this._time()));
      },
      ...ngDevMode ? [{ debugName: "begins_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.ends_in = computed(
      () => {
        const event = this.next_event();
        if (!event)
          return 0;
        return Math.max(0, differenceInMinutes(event.date_end, this._time()));
      },
      ...ngDevMode ? [{ debugName: "ends_in" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  get hide_nav() {
    return localStorage.getItem("PlaceOS.hide_nav") === "true";
  }
  ngOnInit() {
    this._desks.error_on_host = false;
    this.interval("time", () => this._time.set(Date.now()));
  }
  pinEvent() {
    const event = this.next_event();
    if (!event)
      return;
    const lvl = this._org.levelWithID(event.system?.zones || event.zones);
    const id = event.system?.map_id || event.extension_data.map_id;
    this._explore.setLevel(lvl.id);
    this.subscription("upcoming", () => this._explore.setFeatures("_upcoming_", []));
    this._explore.setFeatures("_upcoming_", [
      {
        location: id,
        content: EventPinComponent,
        data: { event }
      }
    ]);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreComponent_BaseFactory;
      return function ExploreComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreComponent_BaseFactory || (\u0275ExploreComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreComponent)))(__ngFactoryType__ || _ExploreComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["app-explore"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [[1, "bg-base-200", "flex", "h-1/2", "flex-1", "flex-col-reverse", "sm:flex-row"], [1, "relative", "z-0", "flex", "h-1/2", "flex-1", "flex-col", "overflow-hidden", "sm:h-auto"], ["name", "upcoming-booking-map-pill", 1, "border-base-300", "bg-base-100", "absolute", "top-20", "right-2", "left-2", "flex", "items-center", "space-x-2", "rounded-full", "border", "p-1", "sm:top-2", "sm:left-auto"], [1, "max-w-[40vw]", "flex-1", "px-4", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-60"], [1, "bg-base-200", "rounded", "px-2", "py-1", "text-xs"], ["icon", "", "matRipple", "", "matTooltip", "Pin my booking", 1, "border-base-200", "bg-secondary", "text-secondary-content", "border", 3, "click"]], template: function ExploreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, ExploreComponent_Conditional_0_Template, 1, 0, "topbar");
        \u0275\u0275elementStart(1, "div", 0)(2, "main", 1);
        \u0275\u0275element(3, "explore-map-view");
        \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 14, 5, "div", 2);
        \u0275\u0275elementEnd();
        \u0275\u0275element(5, "virtual-concierge-button");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ExploreComponent_Conditional_6_Template, 1, 0, "footer-menu");
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.hide_nav ? 0 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.next_event() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.hide_nav ? 6 : -1);
      }
    }, dependencies: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ExploreMapViewComponent,
      IconComponent,
      MatTooltipModule,
      MatTooltip,
      TranslatePipe,
      LevelPipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "app-explore", template: `
        @if (!hide_nav) {
            <topbar />
        }
        <div class="bg-base-200 flex h-1/2 flex-1 flex-col-reverse sm:flex-row">
            <main
                class="relative z-0 flex h-1/2 flex-1 flex-col overflow-hidden sm:h-auto"
            >
                <explore-map-view></explore-map-view>
                @if (next_event()) {
                    <div
                        name="upcoming-booking-map-pill"
                        class="border-base-300 bg-base-100 absolute top-20 right-2 left-2 flex items-center space-x-2 rounded-full border p-1 sm:top-2 sm:left-auto"
                    >
                        <div class="max-w-[40vw] flex-1 px-4 leading-tight">
                            <div class="truncate">{{ next_event().title }}</div>
                            <div class="truncate text-xs opacity-60">
                                @let lvl =
                                    next_event().system?.zones ||
                                        next_event().zones | level;
                                {{ lvl?.display_name || lvl?.name }}
                            </div>
                        </div>
                        <div class="bg-base-200 rounded px-2 py-1 text-xs">
                            @if (begins_in()) {
                                {{
                                    'COMMON.BEGINS_IN'
                                        | translate
                                            : { minutes: begins_in() }
                                            : begins_in()
                                }}
                            } @else {
                                {{
                                    'COMMON.ENDS_IN'
                                        | translate
                                            : { minutes: ends_in() }
                                            : ends_in()
                                }}
                            }
                        </div>
                        <button
                            icon
                            matRipple
                            matTooltip="Pin my booking"
                            class="border-base-200 bg-secondary text-secondary-content border"
                            (click)="pinEvent()"
                        >
                            <icon>place</icon>
                        </button>
                    </div>
                }
            </main>
            <virtual-concierge-button />
        </div>

        @if (!hide_nav) {
            <footer-menu />
        }
    `, imports: [
      TopbarComponent,
      FooterMenuComponent,
      VirtualConciergeButtonComponent,
      ExploreMapViewComponent,
      IconComponent,
      TranslatePipe,
      LevelPipe,
      MatTooltipModule
    ], styles: ["/* angular:styles/component:css;272d43022913da8b6c60debddc182b5c3d8e2877b2c9bac0eacbbdf7c40c19c6;/home/runner/work/user-interfaces/user-interfaces/apps/workplace/src/app/explore/explore.component.ts */\n:host {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/workplace/src/app/explore/explore.component.ts", lineNumber: 100 });
})();

// apps/workplace/src/app/explore/explore.routes.ts
var ROUTES = [
  {
    path: "",
    component: ExploreComponent,
    title: "Explore",
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }]
  },
  {
    path: ":search_type",
    component: ExploreComponent,
    title: "Explore",
    providers: [{ provide: MAP_FEATURE_DATA, useValue: {} }]
  }
];
export {
  ROUTES
};
//# sourceMappingURL=explore.routes-4GDG2W4C.js.map
