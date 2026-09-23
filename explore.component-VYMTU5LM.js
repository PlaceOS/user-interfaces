import {
  AuthenticatedImageDirective,
  Booking,
  BookingFormService,
  DEFAULT_COLOURS,
  Desk,
  DurationFieldComponent,
  DynamicMapComponent,
  ExploreIconComponent,
  ExploreParkingService,
  ExploreSpacesService,
  ExploreStateService,
  MAT_DIALOG_DATA,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  SpacesService,
  UserSearchFieldComponent,
  deskFromAsset,
  differenceInCalendarMonths,
  endOfMonth,
  queryBookings,
  queryDeskAssets,
  queryDeskAssetsForZones,
  rulesForResource,
  searchStaff,
  showStaff
} from "./chunk-MEGULNPB.js";
import {
  CustomTooltipComponent
} from "./chunk-EW2KBQO3.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatError,
  MatFormFieldModule,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  SpacePipe,
  VirtualKeyboardComponent,
  toSignal
} from "./chunk-HQ65ACHH.js";
import "./chunk-Y532F2FA.js";
import "./chunk-IODMX2FQ.js";
import {
  TranslatePipe
} from "./chunk-4SLWCLD6.js";
import {
  ActivatedRoute,
  AsyncHandler,
  BidiModule,
  CalendarEvent,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  Dd,
  DefaultValueAccessor,
  ElementRef,
  EventEmitter,
  FocusMonitor,
  FormControl,
  FormControlName,
  FormGroup,
  FormGroupDirective,
  FormsModule,
  HostAttributeToken,
  HostListener,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Ka,
  MAP_FEATURE_DATA,
  MapsPeopleService,
  MatOption,
  MatRipple,
  MatRippleModule,
  Mt,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  OrganisationService,
  Output,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  SettingsService,
  SlicePipe,
  Space,
  UpperCasePipe,
  ViewChild,
  ViewEncapsulation,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  ac,
  addDays,
  addMinutes,
  addMonths,
  addYears,
  afterNextRender,
  alignDateToBookableHours,
  booleanAttribute,
  computed,
  constructFrom,
  currentUser,
  debounced,
  differenceInMilliseconds,
  differenceInMinutes,
  effect,
  enUS,
  endOfDay,
  endOfDayInTimezone,
  f,
  firstValueWhere,
  flatten,
  format,
  formatTimeInTimezone,
  forwardRef,
  fromZonedTime,
  ga,
  getDefaultOptions,
  getRoundingMethod,
  getTimeInTimezone,
  getTimezoneOffsetInMilliseconds,
  getTimezoneOffsetString,
  getUnixTime,
  i18n,
  ic,
  inject,
  input,
  isAfter,
  isBefore,
  isSameDay,
  isValid,
  isWithinBookableHours,
  log,
  markUserDateChange,
  minutesInDay,
  minutesInMonth,
  model,
  normalizeDates,
  notifyError,
  notifySuccess,
  numberAttribute,
  resource,
  roundToNearestMinutes,
  set,
  setClassMetadata,
  setTimeInTimezone,
  settingSignal,
  shiftColorTowards,
  signal,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  startOfWeek,
  toDate,
  toQueryString,
  toZonedTime,
  unique,
  untracked,
  viewChild,
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
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵpipeBind2,
  ɵɵpipeBind3,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵqueryAdvance,
  ɵɵqueryRefresh,
  ɵɵreadContextLet,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵresolveWindow,
  ɵɵrestoreView,
  ɵɵstoreLet,
  ɵɵstyleMap,
  ɵɵstyleProp,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-DG3H76FX.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/compareAsc.js
function compareAsc(dateLeft, dateRight) {
  const diff = +toDate(dateLeft) - +toDate(dateRight);
  if (diff < 0) return -1;
  else if (diff > 0) return 1;
  return diff;
}

// node_modules/date-fns/constructNow.js
function constructNow(date) {
  return constructFrom(date, Date.now());
}

// node_modules/date-fns/isLastDayOfMonth.js
function isLastDayOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  return +endOfDay(_date, options) === +endOfMonth(_date, options);
}

// node_modules/date-fns/differenceInMonths.js
function differenceInMonths(laterDate, earlierDate, options) {
  const [laterDate_, workingLaterDate, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    laterDate,
    earlierDate
  );
  const sign = compareAsc(workingLaterDate, earlierDate_);
  const difference = Math.abs(
    differenceInCalendarMonths(workingLaterDate, earlierDate_)
  );
  if (difference < 1) return 0;
  if (workingLaterDate.getMonth() === 1 && workingLaterDate.getDate() > 27)
    workingLaterDate.setDate(30);
  workingLaterDate.setMonth(workingLaterDate.getMonth() - sign * difference);
  let isLastMonthNotFull = compareAsc(workingLaterDate, earlierDate_) === -sign;
  if (isLastDayOfMonth(laterDate_) && difference === 1 && compareAsc(laterDate_, earlierDate_) === 1) {
    isLastMonthNotFull = false;
  }
  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}

// node_modules/date-fns/differenceInSeconds.js
function differenceInSeconds(laterDate, earlierDate, options) {
  const diff = differenceInMilliseconds(laterDate, earlierDate) / 1e3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}

// node_modules/date-fns/startOfMonth.js
function startOfMonth(date, options) {
  const _date = toDate(date, options?.in);
  _date.setDate(1);
  _date.setHours(0, 0, 0, 0);
  return _date;
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

// node_modules/date-fns/isSameMonth.js
function isSameMonth(laterDate, earlierDate, options) {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate
  );
  return laterDate_.getFullYear() === earlierDate_.getFullYear() && laterDate_.getMonth() === earlierDate_.getMonth();
}

// libs/components/src/lib/map-pin.component.ts
function MapPinComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1);
    \u0275\u0275text(1);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.message, " ");
  }
}
function MapPinComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275namespaceSVG();
    \u0275\u0275domElementStart(0, "svg", 3);
    \u0275\u0275domListener("click", function MapPinComponent_Conditional_2_Template_svg_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.action());
    });
    \u0275\u0275domElementStart(1, "g");
    \u0275\u0275domElement(2, "path", 4);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("pointer-events-auto", ctx_r0.action);
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("fill", ctx_r0.fill)("stroke", ctx_r0.stroke);
  }
}
var MapPinComponent = class _MapPinComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.message = this._details.message;
    this.fill = this._details.fill || "#e53935";
    this.stroke = this._details.stroke || "#fff";
    this.action = this._details.action || null;
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
  }
  ngOnInit() {
    setTimeout(() => this.show.set(true), 300);
    setTimeout(() => this.show_message.set(true), 1e3);
  }
  static {
    this.\u0275fac = function MapPinComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapPinComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapPinComponent, selectors: [["", "map-pin", ""]], decls: 3, vars: 2, consts: [[1, "absolute", "bottom-1/2", "left-1/2", "-z-1", "flex", "w-[24rem]", "-translate-x-1/2", "flex-col", "items-center"], ["name", "message", 1, "bg-base-100", "m-2", "rounded-sm", "p-2", "text-gray-700", "shadow-sm"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "pointer-events-auto"], ["name", "pin", "viewBox", "0 0 380 560", 1, "w-8", 3, "click"], ["stroke-width", "25", "d", "M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9\n            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8\n            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"]], template: function MapPinComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275conditionalCreate(1, MapPinComponent_Conditional_1_Template, 2, 1, "div", 1);
        \u0275\u0275conditionalCreate(2, MapPinComponent_Conditional_2_Template, 3, 6, ":svg:svg", 2);
        \u0275\u0275domElementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.message && ctx.show_message() ? 1 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show() ? 2 : -1);
      }
    }, styles: ["\n[name=message][_ngcontent-%COMP%], \n[name=pin][_ngcontent-%COMP%] {\n  animation: _ngcontent-%COMP%_fade-in-top 1s;\n}\n@keyframes _ngcontent-%COMP%_fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapPinComponent, [{
    type: Component,
    args: [{ selector: "[map-pin]", template: `
        <div
            class="absolute bottom-1/2 left-1/2 -z-1 flex w-[24rem] -translate-x-1/2 flex-col items-center"
        >
            @if (message && show_message()) {
                <div
                    name="message"
                    class="bg-base-100 m-2 rounded-sm p-2 text-gray-700 shadow-sm"
                >
                    {{ message }}
                </div>
            }
            @if (show()) {
                <svg
                    name="pin"
                    viewBox="0 0 380 560"
                    class="w-8"
                    [class.pointer-events-auto]="action"
                    (click)="action()"
                >
                    <g>
                        <path
                            [style.fill]="fill"
                            [style.stroke]="stroke"
                            stroke-width="25"
                            d="M182.9,551.7c0,0.1,0.2,0.3,0.2,0.3S358.3,283,358.3,194.6c0-130.1-88.8-186.7-175.4-186.9
            C96.3,7.9,7.5,64.5,7.5,194.6c0,88.4,175.3,357.4,175.3,357.4S182.9,551.7,182.9,551.7z M122.2,187.2c0-33.6,27.2-60.8,60.8-60.8
            c33.6,0,60.8,27.2,60.8,60.8S216.5,248,182.9,248C149.4,248,122.2,220.8,122.2,187.2z"
                        />
                    </g>
                </svg>
            }
        </div>
    `, styles: ["/* angular:styles/component:css;a9cdc3eadab8bc3e96e10ae34e252be907dc13bc9405d57b9245726773f7c391;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-pin.component.ts */\n[name=message],\n[name=pin] {\n  animation: fade-in-top 1s;\n}\n@keyframes fade-in-top {\n  0% {\n    opacity: 0;\n    transform: translateY(-100%);\n  }\n  100% {\n    opacity: 1;\n    transform: translateY(0%);\n  }\n}\n/*# sourceMappingURL=map-pin.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapPinComponent, { className: "MapPinComponent", filePath: "libs/components/src/lib/map-pin.component.ts", lineNumber: 68 });
})();

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

// libs/form-fields/src/lib/time-field.component.ts
var _c0 = ["*"];
var _forTrack0 = ($index, $item) => $item.id;
function TimeFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.active_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r0.force_time(), ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_Conditional_10_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_Conditional_10_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(ctx_r0.force_time().toString()));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_Conditional_10_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_Conditional_10_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", ctx_r0.force_time());
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 4, ctx_r0.force_time(), ctx_r0.time_format()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === ctx_r0.force_time() ? 7 : -1);
  }
}
function TimeFieldComponent_For_12_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 13);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r4 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r4.date, ctx_r0.time_format() + " (z)", ctx_r0.tz()), " ");
  }
}
function TimeFieldComponent_For_12_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 14);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_For_12_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 9);
    \u0275\u0275listener("click", function TimeFieldComponent_For_12_Template_button_click_0_listener() {
      const option_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue(option_r4.id));
    });
    \u0275\u0275elementStart(1, "div", 10)(2, "div", 11)(3, "div", 12);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, TimeFieldComponent_For_12_Conditional_6_Template, 3, 5, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, TimeFieldComponent_For_12_Conditional_7_Template, 2, 0, "icon", 14);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("value", option_r4.id);
    \u0275\u0275attribute("data-time", option_r4.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(5, 6, option_r4.date, ctx_r0.time_format()), " ", ctx_r0.extra_info_fn()(option_r4.date), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.timezone() && ctx_r0.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.active_time() === option_r4.date ? 7 : -1);
  }
}
function TimeFieldComponent_ForEmpty_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275text(1, "No time options to select");
    \u0275\u0275elementEnd();
  }
}
function TimeFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-error");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function toHourOfDay(value) {
  if (value === null || value === void 0 || value === "")
    return null;
  const hour = Number(value);
  return Number.isFinite(hour) ? hour : null;
}
var TimeFieldComponent = class _TimeFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_past_times = input(
      true,
      ...ngDevMode ? [{ debugName: "no_past_times" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.force_time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "force_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_error = input(
      void 0,
      ...ngDevMode ? [{ debugName: "no_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.extra_info_fn = input(
      (t) => "",
      ...ngDevMode ? [{ debugName: "extra_info_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = input(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.range = input(
      void 0,
      ...ngDevMode ? [{ debugName: "range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._range = computed(
      () => {
        const range = this.range();
        if (!range)
          return void 0;
        const start = toHourOfDay(range.start);
        const end = toHourOfDay(range.end);
        if (start === null || end === null || end <= start)
          return void 0;
        return { start, end };
      },
      ...ngDevMode ? [{ debugName: "_range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min_duration = input(
      0,
      ...ngDevMode ? [{ debugName: "min_duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      (/* @__PURE__ */ new Date()).valueOf(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = signal(
      format(/* @__PURE__ */ new Date(), "HH:mm"),
      ...ngDevMode ? [{ debugName: "time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._time_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "_time_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_select = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_select" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.no_options = signal(
      false,
      ...ngDevMode ? [{ debugName: "no_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._menu_trigger = viewChild(
      MatMenuTrigger,
      ...ngDevMode ? [{ debugName: "_menu_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
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
  }
  ngOnInit() {
    this.show_select.set(true);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    this.timeout("hide", () => this.show_select.set(false));
    const tz = this.timezone() || void 0;
    this.active_time.set(this._time_options().find((_) => _.id === formatTimeInTimezone(this.date(), tz))?.date || this.active_time());
  }
  ngOnChanges(changes) {
    if (changes.no_past_times || changes.step || changes.from || changes.range || changes.min_duration) {
      this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
      this._updateNoOptions();
    }
  }
  ngAfterViewInit() {
    const trigger = this._menu_trigger();
    if (trigger) {
      this.subscription("menu_opened", trigger.menuOpened.subscribe(() => {
        this._scrollToSelectedTime();
      }));
    }
  }
  /** Scroll the menu to the selected or nearest time option */
  _scrollToSelectedTime() {
    requestAnimationFrame(() => {
      const trigger = this._menu_trigger();
      if (!trigger?.menu)
        return;
      const panel = document.querySelector(".mat-mdc-menu-panel");
      if (!panel)
        return;
      const tz = this.timezone() || void 0;
      const target_time = this.time() || formatTimeInTimezone(/* @__PURE__ */ new Date(), tz);
      let target_element = panel.querySelector(`[data-time="${target_time}"]`);
      if (!target_element && this._time_options().length) {
        const current_minutes = this._timeToMinutes(target_time);
        let closest_option = this._time_options()[0];
        let closest_diff = Infinity;
        for (const option of this._time_options()) {
          const option_minutes = this._timeToMinutes(option.id);
          const diff = Math.abs(option_minutes - current_minutes);
          if (diff < closest_diff) {
            closest_diff = diff;
            closest_option = option;
          }
        }
        target_element = panel.querySelector(`[data-time="${closest_option.id}"]`);
      }
      if (target_element) {
        if (typeof target_element.scrollIntoView !== "function") {
          return;
        }
        target_element.scrollIntoView({
          block: "center",
          behavior: "instant"
        });
      }
    });
  }
  /** Convert time string (HH:mm) to minutes since midnight */
  _timeToMinutes(time_str) {
    const [hours, minutes] = time_str.split(":").map(Number);
    return hours * 60 + minutes;
  }
  /** Available time blocks for the selected date */
  time_options() {
    const tz = this.timezone() || void 0;
    const time = (this.time() || "00:00").split(":");
    const date_value = setTimeInTimezone(this.date(), +time[0], +time[1], tz);
    const { minutes } = getTimeInTimezone(date_value, tz);
    const time_str = formatTimeInTimezone(date_value, tz);
    const time_options = [...this._time_options()];
    if (minutes % this.step() !== 0 && this._isWithinRange(date_value) && !time_options.find((t) => t.id === time_str)) {
      time_options.push({
        date: date_value,
        id: time_str
      });
      time_options.sort((a, b) => `${a.id}`.localeCompare(`${b.id}`));
    }
    return time_options;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.time.set(new_value);
    const tz = this.timezone() || void 0;
    if (this._onChange) {
      const time2 = (this.time() || "00:00").split(":");
      const date_value2 = setTimeInTimezone(this.date(), +time2[0], +time2[1], tz);
      markUserDateChange();
      this._onChange(date_value2);
    }
    const time = this.force_time() || this.time();
    const time_parts = (typeof time === "string" ? time : formatTimeInTimezone(time, tz)).split(":");
    const date_value = setTimeInTimezone(this.date(), +time_parts[0], +time_parts[1], tz);
    this.active_time.set(this._time_options().find((_) => _.id === (typeof time === "string" ? time : formatTimeInTimezone(time, tz)))?.date || date_value);
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value || this.date());
    const tz = this.timezone() || void 0;
    let date = startOfMinute(this.date());
    date = roundToNearestMinutes(date, { nearestTo: 5 });
    this.time.set(formatTimeInTimezone(date, tz));
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times(), this.step()));
    this._updateNoOptions();
    const force = this.force_time();
    const time_id = force ? formatTimeInTimezone(force, tz) : this.time();
    this.active_time.set(this._time_options().find((_) => _.id === time_id)?.date || date.valueOf());
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times() || disabled, this.step()));
    this._updateNoOptions();
  }
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  /** Update whether the field should show as disabled due to no options */
  _updateNoOptions() {
    this.no_options.set(!this.disabled() && (!this._time_options() || this._time_options().length === 0) && !this.force_time());
  }
  /**
   * Generate a list of time options for the given date
   * @param datestamp Date to generate options for
   * @param show_past Whether past times should be options
   */
  generateAvailableTimes(datestamp, show_past, step = 15) {
    const min_date = show_past ? this.from() : Math.max(this.from(), Date.now());
    const blocks = [];
    const time_range = this._range();
    const tz = this.timezone() || void 0;
    const day_start = tz ? startOfDayInTimezone(datestamp, tz) : startOfDay(datestamp).valueOf();
    const day_end = tz ? endOfDayInTimezone(datestamp, tz) : endOfDay(datestamp).valueOf();
    const min_dur = this.min_duration() || 0;
    const start_minutes = time_range ? time_range.start * 60 : void 0;
    const end_minutes = time_range ? time_range.end * 60 : void 0;
    const effective_end = end_minutes != null && min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const range_start = Math.max(day_start, min_date, start_minutes != null ? day_start + start_minutes * 60 * 1e3 : day_start);
    const range_end = Math.min(day_end, effective_end != null ? day_start + effective_end * 60 * 1e3 : day_end);
    if (range_start > range_end) {
      return blocks;
    }
    let date = this._roundUpToStep(range_start, step);
    const end = this._roundDownToStep(range_end, step);
    while (!isAfter(date, end)) {
      blocks.push({
        date: date.valueOf(),
        id: formatTimeInTimezone(date, tz)
      });
      date = addMinutes(date, step);
    }
    return blocks;
  }
  _isWithinRange(date) {
    if (isBefore(date, this.from())) {
      return false;
    }
    const time_range = this._range();
    if (!time_range) {
      return true;
    }
    const start_minutes = time_range.start * 60;
    const end_minutes = time_range.end * 60;
    const min_dur = this.min_duration() || 0;
    const effective_end = min_dur > 0 ? end_minutes - min_dur : end_minutes;
    const tz = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(date, tz);
    const mins = hours * 60 + minutes;
    if (mins < start_minutes || mins > effective_end) {
      return false;
    }
    return true;
  }
  _roundUpToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isBefore(date, datestamp)) {
      date = addMinutes(date, step);
    }
    return startOfMinute(date);
  }
  _roundDownToStep(datestamp, step) {
    let date = roundToNearestMinutes(datestamp, { nearestTo: step });
    if (isAfter(date, datestamp)) {
      date = addMinutes(date, -step);
    }
    return startOfMinute(date);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275TimeFieldComponent_BaseFactory;
      return function TimeFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275TimeFieldComponent_BaseFactory || (\u0275TimeFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_TimeFieldComponent)))(__ngFactoryType__ || _TimeFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _TimeFieldComponent, selectors: [["a-time-field"], ["time-field"]], viewQuery: function TimeFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._menu_trigger, MatMenuTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { step: [1, "step"], disabled: [1, "disabled"], no_past_times: [1, "no_past_times"], use_24hr: [1, "use_24hr"], force_time: [1, "force_time"], no_error: [1, "no_error"], extra_info_fn: [1, "extra_info_fn"], from: [1, "from"], range: [1, "range"], min_duration: [1, "min_duration"], timezone: [1, "timezone"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _TimeFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 15, vars: 12, consts: [["menu", "matMenu"], ["type", "button", "time-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", "disabled", ""], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 1)(1, "div", 2)(2, "div", 3);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(5, TimeFieldComponent_Conditional_5_Template, 3, 5, "div", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "icon", 5);
        \u0275\u0275text(7, "arrow_drop_down");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "mat-menu", 6, 0);
        \u0275\u0275conditionalCreate(10, TimeFieldComponent_Conditional_10_Template, 8, 7, "button", 7);
        \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 9, "button", 7, _forTrack0, false, TimeFieldComponent_ForEmpty_13_Template, 2, 0, "div", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(14, TimeFieldComponent_Conditional_14_Template, 2, 0, "mat-error");
      }
      if (rf & 2) {
        const menu_r5 = \u0275\u0275reference(9);
        \u0275\u0275classProp("opacity-30", ctx.disabled() || ctx.no_options());
        \u0275\u0275property("disabled", ctx.disabled() || ctx.no_options())("matMenuTriggerFor", menu_r5);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 9, ctx.active_time(), ctx.time_format()), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() ? 5 : -1);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.force_time() ? 10 : -1);
        \u0275\u0275advance();
        \u0275\u0275repeater(ctx.time_options());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.no_error() ? 14 : -1);
      }
    }, dependencies: [CommonModule, MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, IconComponent, DatePipe], styles: ["\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TimeFieldComponent, [{
    type: Component,
    args: [{ selector: "a-time-field,time-field", template: `
        <button
            type="button"
            time-field
            matRipple
            class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
            [disabled]="disabled() || no_options()"
            [class.opacity-30]="disabled() || no_options()"
            [matMenuTriggerFor]="menu"
        >
            <div
                class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
            >
                <div class="truncate">
                    {{ active_time() | date: time_format() }}
                </div>
                @if (timezone() && tz()) {
                    <div class="truncate text-xs opacity-30">
                        {{
                            active_time() | date: time_format() + ' (z)' : tz()
                        }}
                    </div>
                }
            </div>
            <icon class="text-2xl">arrow_drop_down</icon>
        </button>
        <mat-menu #menu="matMenu" class="max-h-60 min-w-[18rem]">
            @if (force_time()) {
                <button
                    type="button"
                    mat-menu-item
                    [value]="force_time()"
                    class="text-left"
                    (click)="setValue(force_time().toString())"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ force_time() | date: time_format() }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        force_time()
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === force_time()) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            }
            @for (option of time_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    [attr.data-time]="option.id"
                    [value]="option.id"
                    class="text-left"
                    (click)="setValue(option.id)"
                >
                    <div class="flex items-center justify-between">
                        <div class="flex flex-col leading-tight">
                            <div class="">
                                {{ option.date | date: time_format() }}
                                {{ extra_info_fn()(option.date) }}
                            </div>
                            @if (timezone() && tz()) {
                                <div class="text-xs opacity-30">
                                    {{
                                        option.date
                                            | date
                                                : time_format() + ' (z)'
                                                : tz()
                                    }}
                                </div>
                            }
                        </div>
                        @if (active_time() === option.date) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No time options to select</div>
            }
        </mat-menu>
        @if (!no_error()) {
            <mat-error><ng-content /></mat-error>
        }
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => TimeFieldComponent),
        multi: true
      }
    ], imports: [CommonModule, MatMenuModule, MatFormFieldModule, IconComponent], styles: ["/* angular:styles/component:css;5a9d4ad78fbd733d6bae3e98235b5cff9293f47e8579cab48bc92b1fef278e28;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/time-field.component.ts */\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=time-field.component.css.map */\n"] }]
  }], null, { step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], no_past_times: [{ type: Input, args: [{ isSignal: true, alias: "no_past_times", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], force_time: [{ type: Input, args: [{ isSignal: true, alias: "force_time", required: false }] }], no_error: [{ type: Input, args: [{ isSignal: true, alias: "no_error", required: false }] }], extra_info_fn: [{ type: Input, args: [{ isSignal: true, alias: "extra_info_fn", required: false }] }], from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], min_duration: [{ type: Input, args: [{ isSignal: true, alias: "min_duration", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], _menu_trigger: [{ type: ViewChild, args: [forwardRef(() => MatMenuTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(TimeFieldComponent, { className: "TimeFieldComponent", filePath: "libs/form-fields/src/lib/time-field.component.ts", lineNumber: 169 });
})();

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack02 = ($index, $item) => $item.id;
function DateCalendarComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 1, day_r1?.id, "EE"), " ");
  }
}
function DateCalendarComponent_For_18_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 11);
  }
}
function DateCalendarComponent_For_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateCalendarComponent_For_18_Template_button_click_0_listener() {
      const day_r3 = \u0275\u0275restoreView(_r2).$implicit;
      const ctx_r3 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r3.setValue(day_r3.id));
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275conditionalCreate(3, DateCalendarComponent_For_18_Conditional_3_Template, 1, 0, "div", 11);
    \u0275\u0275element(4, "div", 12);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r3 = ctx.$implicit;
    const ctx_r3 = \u0275\u0275nextContext();
    \u0275\u0275classProp("hover:bg-base-200", day_r3.id !== ctx_r3.active_date())("text-base-300!", !day_r3.is_month)("text-secondary-content", day_r3.id === ctx_r3.active_date())("text-base-content", day_r3.id !== ctx_r3.active_date())("bg-secondary", day_r3.id === ctx_r3.active_date())("font-normal", day_r3.id !== ctx_r3.active_date());
    \u0275\u0275property("disabled", day_r3.id < ctx_r3.from() || day_r3.id > ctx_r3.to());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 15, day_r3.id, "d"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r3.today === day_r3.id ? 3 : -1);
  }
}
var DateCalendarComponent = class _DateCalendarComponent extends AsyncHandler {
  constructor() {
    super();
    this._settings = inject(SettingsService);
    this.from = input(
      0,
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.to = input(
      Date.now() * 10,
      ...ngDevMode ? [{ debugName: "to" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset_weekday = input(
      0,
      ...ngDevMode ? [{ debugName: "offset_weekday" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.today = startOfDay(Date.now()).valueOf();
    this.date = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_date = signal(
      startOfDay(Date.now()).valueOf(),
      ...ngDevMode ? [{ debugName: "active_date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.offset = signal(
      0,
      ...ngDevMode ? [{ debugName: "offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "date_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.displayed_dates = this.date_list.asReadonly();
    this.display_date = computed(
      () => this.displayed_dates()[6]?.id || this.date(),
      ...ngDevMode ? [{ debugName: "display_date" }] : (
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
  ngOnChanges(changes) {
    if (changes.offset_weekday) {
      this.generateDates();
    }
  }
  setValue(new_value) {
    if (!isValid(new_value))
      return;
    if (new_value < this.from() || new_value >= this.to())
      return;
    const date = new Date(new_value);
    this.date.set(set(this.date(), {
      date: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    }).valueOf());
    this.active_date.set(startOfDay(this.date()).valueOf());
    if (this._onChange)
      this._onChange(new_value);
  }
  writeValue(value) {
    const date = this._validDate(value);
    this.date.set(date);
    this.active_date.set(startOfDay(date).valueOf());
    this.offset.set(0);
    this.generateDates();
  }
  changeMonth(change) {
    this.offset.update((value) => value + change);
    this.generateDates();
  }
  setMonthToCurrent() {
    const diff = differenceInMonths(this.date(), startOfMonth(Date.now()));
    this.offset.set(-diff);
    this.generateDates();
  }
  generateDates() {
    const offset = this._settings.signal("week_start", this.offset_weekday())();
    const date = addMonths(this._validDate(this.date()), this.offset());
    let start = startOfWeek(startOfMonth(date), {
      weekStartsOn: this._validWeekday(offset)
    });
    const now = startOfDay(Date.now());
    const list = [];
    while (list.length < 42) {
      list.push({
        id: start.valueOf(),
        is_past: isBefore(start, now),
        is_month: isSameMonth(start, date)
      });
      start = addDays(start, 1);
    }
    this.date_list.set(list);
  }
  _validDate(date) {
    return isValid(date) ? date : Date.now();
  }
  _validWeekday(day) {
    return Number.isInteger(day) && day >= 0 && day <= 6 ? day : 0;
  }
  static {
    this.\u0275fac = function DateCalendarComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateCalendarComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateCalendarComponent, selectors: [["date-calendar"]], inputs: { from: [1, "from"], to: [1, "to"], offset_weekday: [1, "offset_weekday"] }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DateCalendarComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], decls: 19, vars: 10, consts: [[1, "p-2"], [1, "flex", "items-center", "justify-between"], [1, "pr-2", "pl-1.5", "font-medium", 3, "dblclick"], [1, "flex", "items-center"], ["icon", "", "matRipple", "", "name", "schedule-next-month", 3, "click", "disabled"], ["icon", "", "matRipple", "", "name", "schedule-previous-month", 3, "click", "disabled"], [1, "border-base-200", "mb-2", "flex", "items-center", "border-b", "pb-2", "text-sm"], [1, "flex-1", "text-center", "opacity-60"], [1, "flex", "flex-wrap", "items-center", "justify-between"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "hover:bg-base-200", "text-base-300!", "text-secondary-content", "text-base-content", "bg-secondary", "font-normal", "disabled"], ["icon", "", "name", "schedule-set-date", 1, "relative", "my-0.5", "h-9", "w-9", "min-w-[14%]", "overflow-visible", 3, "click", "disabled"], ["matRipple", "", 1, "border-secondary", "absolute", "-inset-0.5", "z-20", "overflow-hidden", "rounded-full", "border"], ["matRipple", "", 1, "absolute", "inset-0", "overflow-hidden", "rounded-full"]], template: function DateCalendarComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "div", 1)(2, "button", 2);
        \u0275\u0275listener("dblclick", function DateCalendarComponent_Template_button_dblclick_2_listener() {
          return ctx.setMonthToCurrent();
        });
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "date");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "div", 3)(6, "button", 4);
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_6_listener() {
          return ctx.changeMonth(-1);
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "chevron_left");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 5);
        \u0275\u0275listener("click", function DateCalendarComponent_Template_button_click_9_listener() {
          return ctx.changeMonth(1);
        });
        \u0275\u0275elementStart(10, "icon");
        \u0275\u0275text(11, "chevron_right");
        \u0275\u0275elementEnd()()()();
        \u0275\u0275elementStart(12, "div", 6);
        \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack02);
        \u0275\u0275pipe(15, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack02);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(4, 3, ctx.display_date(), "LLLL yyyy"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.displayed_dates()[0]?.id < ctx.from());
        \u0275\u0275advance(3);
        \u0275\u0275property("disabled", ctx.displayed_dates()[34]?.id > ctx.to());
        \u0275\u0275advance(4);
        \u0275\u0275repeater(\u0275\u0275pipeBind3(15, 6, ctx.displayed_dates(), 0, 7));
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.displayed_dates());
      }
    }, dependencies: [CommonModule, IconComponent, MatRippleModule, MatRipple, SlicePipe, DatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateCalendarComponent, [{
    type: Component,
    args: [{ selector: "date-calendar", template: `
        <div class="p-2">
            <div class="flex items-center justify-between">
                <button
                    class="pr-2 pl-1.5 font-medium"
                    (dblclick)="setMonthToCurrent()"
                >
                    {{ display_date() | date: 'LLLL yyyy' }}
                </button>
                <div class="flex items-center">
                    <button
                        icon
                        matRipple
                        name="schedule-next-month"
                        [disabled]="displayed_dates()[0]?.id < from()"
                        (click)="changeMonth(-1)"
                    >
                        <icon>chevron_left</icon>
                    </button>
                    <button
                        icon
                        matRipple
                        name="schedule-previous-month"
                        [disabled]="displayed_dates()[34]?.id > to()"
                        (click)="changeMonth(1)"
                    >
                        <icon>chevron_right</icon>
                    </button>
                </div>
            </div>
            <div
                class="border-base-200 mb-2 flex items-center border-b pb-2 text-sm"
            >
                @for (day of displayed_dates() | slice: 0 : 7; track day.id) {
                    <div class="flex-1 text-center opacity-60">
                        {{ day?.id | date: 'EE' }}
                    </div>
                }
            </div>
            <div class="flex flex-wrap items-center justify-between">
                @for (day of displayed_dates(); track day.id) {
                    <button
                        icon
                        name="schedule-set-date"
                        class="relative my-0.5 h-9 w-9 min-w-[14%] overflow-visible"
                        [class.hover:bg-base-200]="day.id !== active_date()"
                        [class.text-base-300!]="!day.is_month"
                        [class.text-secondary-content]="
                            day.id === active_date()
                        "
                        [class.text-base-content]="day.id !== active_date()"
                        [class.bg-secondary]="day.id === active_date()"
                        [class.font-normal]="day.id !== active_date()"
                        (click)="setValue(day.id)"
                        [disabled]="day.id < from() || day.id > to()"
                    >
                        {{ day.id | date: 'd' }}
                        @if (today === day.id) {
                            <div
                                class="border-secondary absolute -inset-0.5 z-20 overflow-hidden rounded-full border"
                                matRipple
                            ></div>
                        }
                        <div
                            class="absolute inset-0 overflow-hidden rounded-full"
                            matRipple
                        ></div>
                    </button>
                }
            </div>
        </div>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateCalendarComponent),
        multi: true
      }
    ], imports: [CommonModule, IconComponent, MatRippleModule] }]
  }], () => [], { from: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], offset_weekday: [{ type: Input, args: [{ isSignal: true, alias: "offset_weekday", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateCalendarComponent, { className: "DateCalendarComponent", filePath: "libs/form-fields/src/lib/date-calendar.component.ts", lineNumber: 120 });
})();

// libs/form-fields/src/lib/date-field.component.ts
var _c02 = ["*"];
function DateFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(1, 1, ctx_r0.date(), ctx_r0.date_format()), " ");
  }
}
function DateFieldComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 5);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "FORM.DATE_EMPTY"));
  }
}
function DateFieldComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.start_of_day());
  }
}
function DateFieldComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1, " - ");
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.end_of_day());
  }
}
function DateFieldComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275conditionalCreate(1, DateFieldComponent_Conditional_6_Conditional_1_Template, 2, 1, "span");
    \u0275\u0275conditionalCreate(2, DateFieldComponent_Conditional_6_Conditional_2_Template, 2, 0, "span");
    \u0275\u0275conditionalCreate(3, DateFieldComponent_Conditional_6_Conditional_3_Template, 2, 1, "span");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 2 ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() === 0 ? 2 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.range() !== 1 ? 3 : -1);
  }
}
function DateFieldComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 10);
    \u0275\u0275listener("click", function DateFieldComponent_Conditional_10_Template_button_click_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.clearValue($event));
    });
    \u0275\u0275elementStart(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("disabled", ctx_r0.date() === null || ctx_r0.date() === void 0 || ctx_r0.disabled());
    \u0275\u0275attribute("aria-label", "Clear date");
  }
}
function DateFieldComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275projection(1);
    \u0275\u0275elementEnd();
  }
}
function DateFieldComponent_ng_template_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 11)(1, "date-calendar", 12);
    \u0275\u0275listener("ngModelChange", function DateFieldComponent_ng_template_13_Template_date_calendar_ngModelChange_1_listener($event) {
      \u0275\u0275restoreView(_r3);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngModel", ctx_r0.date() || ctx_r0.now)("from", ctx_r0.from().valueOf())("to", ctx_r0.until().valueOf())("offset_weekday", ctx_r0.week_start());
    \u0275\u0275control();
  }
}
var TimezoneDiffRange;
(function(TimezoneDiffRange2) {
  TimezoneDiffRange2[TimezoneDiffRange2["Both"] = 0] = "Both";
  TimezoneDiffRange2[TimezoneDiffRange2["Start"] = 1] = "Start";
  TimezoneDiffRange2[TimezoneDiffRange2["End"] = 2] = "End";
})(TimezoneDiffRange || (TimezoneDiffRange = {}));
var DateFieldComponent = class _DateFieldComponent extends AsyncHandler {
  get has_error() {
    return this._control?.invalid && this._control?.touched;
  }
  constructor() {
    super();
    this._injector = inject(Injector);
    this.from_date = input(startOfDay(Date.now()).valueOf(), __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "from_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "from" }));
    this.to_date = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "to_date" } : (
      /* istanbul ignore next */
      {}
    )), { alias: "to" }));
    this.week_start = input(
      0,
      ...ngDevMode ? [{ debugName: "week_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_24hr = input(
      false,
      ...ngDevMode ? [{ debugName: "use_24hr" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = model(
      void 0,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.short = input(
      false,
      ...ngDevMode ? [{ debugName: "short" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.range = input(
      TimezoneDiffRange.Both,
      ...ngDevMode ? [{ debugName: "range" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.clear = input(
      false,
      ...ngDevMode ? [{ debugName: "clear" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.date = signal(
      null,
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = Date.now();
    this.date_format = computed(
      () => this.short() ? "MMM d, yyyy" : "MMMM d, yyyy",
      ...ngDevMode ? [{ debugName: "date_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._date_pipe = new DatePipe("en");
    this.start_of_day = computed(
      () => {
        const start = startOfDay(this.date() || Date.now()).valueOf();
        const format2 = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(start, format2, this.tz());
      },
      ...ngDevMode ? [{ debugName: "start_of_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_of_day = computed(
      () => {
        const end = endOfDay(this.date() || Date.now()).valueOf();
        const format2 = `MMM d, ${this.time_format()}${this.range() === 1 ? " (z)" : ""}`;
        return this._date_pipe.transform(end, format2, this.tz());
      },
      ...ngDevMode ? [{ debugName: "end_of_day" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._local_tz = getTimezoneOffsetString(Intl.DateTimeFormat().resolvedOptions().timeZone);
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
    this._tooltip = viewChild(
      CustomTooltipComponent,
      ...ngDevMode ? [{ debugName: "_tooltip" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.from = computed(
      () => {
        return this.from_date() ? new Date(this.from_date()) : startOfDay(/* @__PURE__ */ new Date());
      },
      ...ngDevMode ? [{ debugName: "from" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.until = computed(
      () => {
        return this.to_date() ? new Date(this.to_date()) : addYears(endOfDay(/* @__PURE__ */ new Date()), 1);
      },
      ...ngDevMode ? [{ debugName: "until" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this._control = this._injector.get(NgControl);
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    const timezone = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(this.date() || Date.now(), timezone);
    let new_date = setTimeInTimezone(new_value, hours, minutes, timezone);
    if (timezone) {
      const selected_date = new Date(new_value);
      const zoned_date = toZonedTime(this.date() || Date.now(), timezone);
      new_date = startOfMinute(fromZonedTime(set(zoned_date, {
        year: selected_date.getFullYear(),
        month: selected_date.getMonth(),
        date: selected_date.getDate(),
        hours,
        minutes,
        seconds: 0,
        milliseconds: 0
      }), timezone)).valueOf();
    }
    if (new_date < this.from().valueOf()) {
      new_date = this.from().valueOf();
    }
    this.date.set(new_date);
    markUserDateChange();
    if (this._onChange)
      this._onChange(new_date);
    this._tooltip()?.close();
  }
  clearValue(event) {
    event?.stopPropagation();
    this.date.set(null);
    markUserDateChange();
    if (this._onTouch)
      this._onTouch(null);
    if (this._onChange)
      this._onChange(null);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.date.set(value ?? null);
    this._tooltip()?.close();
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function that is called when the control's value changes in the UI.
   * @param fn The callback function to register
   */
  registerOnChange(fn) {
    this._onChange = fn;
  }
  /* istanbul ignore next */
  /**
   * Registers a callback function is called by the forms API on initialization to update the form model on blur.
   * @param fn The callback function to register
   */
  registerOnTouched(fn) {
    this._onTouch = fn;
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
  }
  static {
    this.\u0275fac = function DateFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DateFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DateFieldComponent, selectors: [["a-date-field"], ["date-field"]], viewQuery: function DateFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._tooltip, CustomTooltipComponent, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, inputs: { from_date: [1, "from", "from_date"], to_date: [1, "to", "to_date"], week_start: [1, "week_start"], use_24hr: [1, "use_24hr"], disabled: [1, "disabled"], short: [1, "short"], timezone: [1, "timezone"], range: [1, "range"], clear: [1, "clear"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DateFieldComponent),
        multi: true
      }
    ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c02, decls: 15, vars: 8, consts: [["calendar_picker", ""], [1, "flex", "items-center", "gap-1"], ["type", "button", "customTooltip", "", "yPosition", "top", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "flex-1", "items-center", "justify-between", "rounded-sm", "border", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "disabled"], [1, "error", "text-error", "h-5", "p-1", "text-xs"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "click", "disabled"], [1, "bg-base-100", "relative", "w-[18rem]", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2)(2, "div", 3)(3, "div", 4);
        \u0275\u0275conditionalCreate(4, DateFieldComponent_Conditional_4_Template, 2, 4)(5, DateFieldComponent_Conditional_5_Template, 3, 3, "span", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, DateFieldComponent_Conditional_6_Template, 4, 3, "div", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "div", 7)(8, "icon");
        \u0275\u0275text(9, "today");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(10, DateFieldComponent_Conditional_10_Template, 3, 2, "button", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(11, "div", 9);
        \u0275\u0275conditionalCreate(12, DateFieldComponent_Conditional_12_Template, 2, 0, "span");
        \u0275\u0275elementEnd();
        \u0275\u0275template(13, DateFieldComponent_ng_template_13_Template, 2, 4, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const calendar_picker_r4 = \u0275\u0275reference(14);
        \u0275\u0275advance();
        \u0275\u0275classProp("opacity-30", ctx.disabled());
        \u0275\u0275property("content", calendar_picker_r4)("disabled", ctx.disabled());
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.date() !== null && ctx.date() !== void 0 ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.timezone() && ctx.tz() && ctx.date() !== null && ctx.date() !== void 0 ? 6 : -1);
        \u0275\u0275advance(4);
        \u0275\u0275conditional(ctx.clear() ? 10 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.has_error ? 12 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      NgControlStatus,
      NgModel,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      MatRippleModule,
      MatRipple,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.no-subscript[_nghost-%COMP%]    > .error[_ngcontent-%COMP%] {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DateFieldComponent, [{
    type: Component,
    args: [{ selector: "a-date-field,date-field", template: `
        <div class="flex items-center gap-1">
            <button
                type="button"
                class="border-neutral flex h-12 w-full flex-1 items-center justify-between rounded-sm border"
                customTooltip
                [content]="calendar_picker"
                yPosition="top"
                [disabled]="disabled()"
                [class.opacity-30]="disabled()"
                matRipple
            >
                <div
                    class="flex w-1/2 flex-1 flex-col truncate px-4 py-2 text-left leading-tight"
                >
                    <div class="text-base font-normal">
                        @if (date() !== null && date() !== undefined) {
                            {{ date() | date: date_format() }}
                        } @else {
                            <span class="opacity-30">{{
                                'FORM.DATE_EMPTY' | translate
                            }}</span>
                        }
                    </div>
                    @if (
                        timezone() &&
                        tz() &&
                        date() !== null &&
                        date() !== undefined
                    ) {
                        <div class="truncate text-xs opacity-30">
                            @if (range() !== 2) {
                                <span>{{ start_of_day() }}</span>
                            }
                            @if (range() === 0) {
                                <span> - </span>
                            }
                            @if (range() !== 1) {
                                <span>{{ end_of_day() }}</span>
                            }
                        </div>
                    }
                </div>
                <div
                    class="flex h-10 w-10 items-center justify-center text-2xl"
                >
                    <icon>today</icon>
                </div>
            </button>
            @if (clear()) {
                <button
                    type="button"
                    icon
                    matRipple
                    class="border-error text-error flex h-12 w-12 items-center justify-center rounded-sm border"
                    (click)="clearValue($event)"
                    [attr.aria-label]="'Clear date'"
                    [disabled]="
                        date() === null || date() === undefined || disabled()
                    "
                >
                    <icon>close</icon>
                </button>
            }
        </div>
        <div class="error text-error h-5 p-1 text-xs">
            @if (has_error) {
                <span><ng-content></ng-content></span>
            }
        </div>
        <ng-template #calendar_picker>
            <div class="bg-base-100 relative w-[18rem] rounded-sm px-2 py-4">
                <date-calendar
                    [ngModel]="date() || now"
                    [from]="from().valueOf()"
                    [to]="until().valueOf()"
                    [offset_weekday]="week_start()"
                    (ngModelChange)="setValue($event)"
                ></date-calendar>
            </div>
        </ng-template>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DateFieldComponent),
        multi: true
      }
    ], imports: [
      CommonModule,
      FormsModule,
      DateCalendarComponent,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe,
      MatRippleModule
    ], styles: ["/* angular:styles/component:css;4616f4926c682fe7ceb0f98ecb8aa0ceeb383c5318a41af3f61a9c0da602fb9b;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/date-field.component.ts */\n:host.no-subscript > .error {\n  display: none;\n}\n/*# sourceMappingURL=date-field.component.css.map */\n"] }]
  }], () => [], { from_date: [{ type: Input, args: [{ isSignal: true, alias: "from", required: false }] }], to_date: [{ type: Input, args: [{ isSignal: true, alias: "to", required: false }] }], week_start: [{ type: Input, args: [{ isSignal: true, alias: "week_start", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], short: [{ type: Input, args: [{ isSignal: true, alias: "short", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], range: [{ type: Input, args: [{ isSignal: true, alias: "range", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], _tooltip: [{ type: ViewChild, args: [forwardRef(() => CustomTooltipComponent), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DateFieldComponent, { className: "DateFieldComponent", filePath: "libs/form-fields/src/lib/date-field.component.ts", lineNumber: 149 });
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

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c03 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_7_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", ctx_r0.resource_type(), ":");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.resource().name || ctx_r0.resource().map_id || "Unknown Resource", " ");
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-user-search-field", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 1, "FORM.HOST"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275control();
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 8)(1, "div", 12)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "a-time-field", 13);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_7_Conditional_9_Template_a_time_field_ngModelChange_5_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.form.patchValue({ date: $event }));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 12)(7, "label");
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(10, "a-duration-field", 14);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(4, 12, "FORM.TIME_START"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("ngModel", ctx_r0.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(16, _c03))("range", ctx_r0.bookable_hours())("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(9, 14, "FORM.TIME_END"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("time", ctx_r0.form.get("date")?.value)("max", 10 * 60)("min", 60)("step", 60)("end_time", ctx_r0.bookable_hours()?.end)("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
  }
}
function SetDatetimeModalComponent_Conditional_7_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "mat-checkbox", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "COMMON.ALL_DAY"), " ");
  }
}
function SetDatetimeModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_7_Conditional_1_Template, 5, 2, "div", 6);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_7_Conditional_2_Template, 5, 3, "div", 6);
    \u0275\u0275elementStart(3, "div", 6)(4, "label");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 7);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, SetDatetimeModalComponent_Conditional_7_Conditional_9_Template, 11, 17, "div", 8);
    \u0275\u0275conditionalCreate(10, SetDatetimeModalComponent_Conditional_7_Conditional_10_Template, 4, 3, "div", 9);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("formGroup", ctx_r0.form);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.resource() ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.host() ? 2 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(6, 7, "FORM.DATE"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("to", ctx_r0.book_until());
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r0.all_day() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.allow_all_day() ? 10 : -1);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 12, vars: 8, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[32rem]", "max-w-[85vw]", "px-4", 3, "formGroup"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "mx-2", "w-32", 3, "mat-dialog-close"], [1, "flex", "flex-col"], ["formControlName", "date", 3, "to"], [1, "flex", "flex-col", "sm:flex-row", "sm:gap-4"], [1, "mb-2", "flex", "justify-end"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"], [1, "flex", "min-w-0", "flex-1", "flex-col"], [3, "ngModelChange", "ngModel", "ngModelOptions", "range", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "end_time", "use_24hr"], ["formControlName", "all_day"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(4, "button", 2)(5, "icon");
        \u0275\u0275text(6, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(7, SetDatetimeModalComponent_Conditional_7_Template, 11, 9, "main", 3);
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
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] items-center justify-between rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        @if (form) {
            <main [formGroup]="form" class="w-[32rem] max-w-[85vw] px-4">
                @if (resource()) {
                    <div class="flex flex-col">
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
                }
                @if (host()) {
                    <div class="flex flex-col">
                        <label>{{ 'FORM.HOST' | translate }}:</label>
                        <a-user-search-field
                            formControlName="user"
                            class="mb-4"
                        ></a-user-search-field>
                    </div>
                }
                <div class="flex flex-col">
                    <label>{{ 'FORM.DATE' | translate }}:</label>
                    <a-date-field [to]="book_until()" formControlName="date">
                        Date and time must be in the future
                    </a-date-field>
                </div>
                @if (!all_day()) {
                    <div class="flex flex-col sm:flex-row sm:gap-4">
                        <div class="flex min-w-0 flex-1 flex-col">
                            <label>{{ 'FORM.TIME_START' | translate }}:</label>
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
                        <div class="flex min-w-0 flex-1 flex-col">
                            <label>{{ 'FORM.TIME_END' | translate }}:</label>
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
                @if (allow_all_day()) {
                    <div class="mb-2 flex justify-end">
                        <mat-checkbox formControlName="all_day">
                            {{ 'COMMON.ALL_DAY' | translate }}
                        </mat-checkbox>
                    </div>
                }
            </main>
        }
        <footer class="border-base-300 flex justify-end border-t p-2">
            <button
                btn
                matRipple
                [mat-dialog-close]="form.value"
                class="mx-2 w-32"
            >
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 136 });
})();

// libs/explore/src/lib/explore-desk-info.component.ts
function ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.display_user(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 8);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.department(), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9)(1, "div", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "uppercase");
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275classMap("text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm " + ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 5, ctx_r0.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(3, 3, ctx_r0.status())), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10)(1, "icon");
    \u0275\u0275text(2, "alarm");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate2(" Free ", ctx_r0.current_booking() ? "at" : "until", " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.current_booking() ? ctx_r0.current_booking().date_end : ctx_r0.next_booking().date, "shortTime"), " ");
  }
}
function ExploreDeskInfoComponent_ng_template_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 2)(1, "div", 3);
    \u0275\u0275element(2, "div", 4);
    \u0275\u0275elementStart(3, "div", 5)(4, "div", 6)(5, "h4", 7);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, ExploreDeskInfoComponent_ng_template_1_Conditional_7_Template, 2, 1, "p", 8);
    \u0275\u0275conditionalCreate(8, ExploreDeskInfoComponent_ng_template_1_Conditional_8_Template, 2, 1, "p", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(9, ExploreDeskInfoComponent_ng_template_1_Conditional_9_Template, 5, 7, "div", 9);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, ExploreDeskInfoComponent_ng_template_1_Conditional_10_Template, 6, 5, "div", 10);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classMap("bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm " + ctx_r0.x_pos() + " " + ctx_r0.y_pos());
    \u0275\u0275property("id", ctx_r0.map_id());
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate1(" ", ctx_r0.name() || ctx_r0.map_id() || ctx_r0.id(), " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() ? 7 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.display_user() && ctx_r0.department() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.status() ? 9 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.next_booking() || ctx_r0.current_booking() ? 10 : -1);
  }
}
var ExploreDeskInfoComponent = class _ExploreDeskInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this.status = computed(
      () => this._details.status?.(),
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.id = signal(
      this._details.id,
      ...ngDevMode ? [{ debugName: "id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_id = signal(
      this._details.map_id,
      ...ngDevMode ? [{ debugName: "map_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._details.name,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = this._details.user;
    this.start = signal(
      this._details.start,
      ...ngDevMode ? [{ debugName: "start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end = signal(
      this._details.end,
      ...ngDevMode ? [{ debugName: "end" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.department = signal(
      this._details.department,
      ...ngDevMode ? [{ debugName: "department" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.bookings = this._details.bookings;
    this.date = signal(
      this._details.date || Date.now(),
      ...ngDevMode ? [{ debugName: "date" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.now = signal(
      Date.now(),
      ...ngDevMode ? [{ debugName: "now" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.active_time = computed(
      () => isSameDay(this.date(), Date.now()) ? this.now() : this.date(),
      ...ngDevMode ? [{ debugName: "active_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.next_booking = computed(
      () => this.bookings?.().filter((booking) => booking.date > this.active_time() && isSameDay(booking.date, this.date())).sort((a, b) => a.date - b.date)[0],
      ...ngDevMode ? [{ debugName: "next_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current_booking = computed(
      () => this.bookings?.().find((booking) => this.active_time() >= booking.date && this.active_time() < booking.date_end),
      ...ngDevMode ? [{ debugName: "current_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_booking = computed(
      () => this.next_booking() || null,
      ...ngDevMode ? [{ debugName: "display_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_user = computed(
      () => this.display_booking()?.user_name || this.display_booking()?.booked_by_name || this.user?.(),
      ...ngDevMode ? [{ debugName: "display_user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_start = computed(
      () => this.display_booking()?.date || this.start(),
      ...ngDevMode ? [{ debugName: "display_start" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.display_end = computed(
      () => this.display_booking()?.date_end || this.end(),
      ...ngDevMode ? [{ debugName: "display_end" }] : (
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
    setTimeout(() => this.updatePosition(), 200);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updatePosition(tries = 0) {
    const parent = this._element.nativeElement.parentElement?.parentElement;
    if (!parent)
      return setTimeout(() => this.updatePosition(++tries), 200);
    const box = parent?.getBoundingClientRect();
    const wbox = document.body?.getBoundingClientRect();
    this.y_pos.set(box.y >= wbox.height / 2 ? "bottom" : "top");
    this.x_pos.set(box.x >= wbox.width / 2 ? "right" : "left");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreDeskInfoComponent_BaseFactory;
      return function ExploreDeskInfoComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreDeskInfoComponent_BaseFactory || (\u0275ExploreDeskInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreDeskInfoComponent)))(__ngFactoryType__ || _ExploreDeskInfoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreDeskInfoComponent, selectors: [["explore-desk-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 3, vars: 8, consts: [["desk_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "z-20", "h-full", "w-full", 3, "mouseenter", "touchdown", "content", "backdrop", "xPosition", "yPosition", "hover", "delay"], ["name", "space-info", 3, "id"], [1, "border-base-200", "rounded-md", "border", "p-1"], [1, "triangle", "absolute"], [1, "flex", "w-full", "items-center", "space-x-4"], [1, "flex", "flex-1", "flex-col", "px-2", "py-1"], ["map-id", "", 1, "m-0", "truncate", "font-medium"], ["user", "", 1, "text-xs"], [1, "relative", "flex", "flex-wrap", "text-sm"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "pb-2", "text-sm"], ["status", ""]], template: function ExploreDeskInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 1);
        \u0275\u0275listener("mouseenter", function ExploreDeskInfoComponent_Template_div_mouseenter_0_listener() {
          return ctx.updatePosition();
        })("touchdown", function ExploreDeskInfoComponent_Template_div_touchdown_0_listener() {
          return ctx.updatePosition();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(1, ExploreDeskInfoComponent_ng_template_1_Template, 11, 8, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const desk_tooltip_r2 = \u0275\u0275reference(2);
        \u0275\u0275property("content", desk_tooltip_r2)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true)("delay", 3e3);
        \u0275\u0275attribute("id", ctx.id())("map_id", ctx.map_id());
      }
    }, dependencies: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      UpperCasePipe,
      DatePipe,
      TranslatePipe
    ], styles: ["\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--%NS%success);\n  color: var(--%NS%success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--%NS%error);\n  color: var(--%NS%error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--%NS%warn);\n  color: var(--%NS%warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--%NS%base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreDeskInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-desk-info", template: `
        <div
            customTooltip
            [content]="desk_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [delay]="3000"
            class="pointer-events-auto relative z-20 h-full w-full"
            [attr.id]="id()"
            [attr.map_id]="map_id()"
            (mouseenter)="updatePosition()"
            (touchdown)="updatePosition()"
        ></div>
        <ng-template #desk_tooltip>
            <div
                name="space-info"
                [id]="map_id()"
                [class]="
                    'bg-base-100 pointer-events-none absolute top-0 left-0 w-64 p-1 shadow-sm ' +
                    x_pos() +
                    ' ' +
                    y_pos()
                "
            >
                <div class="border-base-200 rounded-md border p-1">
                    <div class="triangle absolute"></div>
                    <div class="flex w-full items-center space-x-4">
                        <div class="flex flex-1 flex-col px-2 py-1">
                            <h4 map-id class="m-0 truncate font-medium">
                                {{ name() || map_id() || id() }}
                            </h4>
                            @if (display_user()) {
                                <p user class="text-xs">
                                    {{ display_user() }}
                                </p>
                            }
                            @if (display_user() && department()) {
                                <p user class="text-xs">
                                    {{ department() }}
                                </p>
                            }
                        </div>
                        @if (status()) {
                            <div class="relative flex flex-wrap text-sm">
                                <div
                                    status
                                    [class]="
                                        'text-light border-base-100 rounded-sm border p-1 px-2 capitalize shadow-sm ' +
                                        status()
                                    "
                                >
                                    {{
                                        (status() === 'not-bookable'
                                            ? 'COMMON.STATUS_NOT_BOOKABLE'
                                            : 'COMMON.STATUS_' +
                                              (status() | uppercase)
                                        ) | translate
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                    @if (next_booking() || current_booking()) {
                        <div
                            class="mt-1 flex items-center space-x-2 px-2 pb-2 text-sm"
                        >
                            <icon>alarm</icon>
                            <div>
                                Free
                                {{ current_booking() ? 'at' : 'until' }}
                                {{
                                    (current_booking()
                                        ? current_booking().date_end
                                        : next_booking().date
                                    ) | date: 'shortTime'
                                }}
                            </div>
                        </div>
                    }
                </div>
            </div>
        </ng-template>
    `, imports: [
      CommonModule,
      CustomTooltipComponent,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;be9e427f23d2cfa533bc3f1a2b3a60abe03093f3828dce67e30b4276b95b0771;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-desk-info.component.ts */\n.top.left {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left .triangle {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right .triangle {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left .triangle {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right .triangle {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreDeskInfoComponent, { className: "ExploreDeskInfoComponent", filePath: "libs/explore/src/lib/explore-desk-info.component.ts", lineNumber: 220 });
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
    const mod = Dd(this._details.system, "LocationServices");
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
      loader: ({ params: bld }) => ic(bld.id, `desk_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
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
      loader: ({ params: lvl }) => {
        if (this._settings.get("app.desks.use_assets")) {
          return queryDeskAssets(lvl.id).then((assets) => assets.map((asset) => deskFromAsset(asset, lvl))).catch(() => []);
        }
        return ic(lvl.id, "desks").catch(() => ({ details: [] })).then((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl }))));
      }
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
      if (e === "User cancelled")
        throw e;
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
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => ic(bld.id, "map_regions").catch(() => null)));
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

// libs/explore/src/lib/explore-search.service.ts
var EMERGENCY_CONTACTS_CATEGORY_NAME = "_EMERGENCY_CONTACTS_";
var BASE_ENDPOINT = "/api/engine/v2";
var ASCENDING_NAME_SORTER = new Intl.Collator(void 0, {
  numeric: true,
  sensitivity: "base"
});
function queryAssetCategoriesLocal(query = {}) {
  const q = toQueryString(query);
  return f(`${BASE_ENDPOINT}/asset_categories${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetTypesLocal(query = {}) {
  const q = toQueryString(query);
  return f(`${BASE_ENDPOINT}/asset_types${q ? "?" + q : ""}`).then((_) => _);
}
function queryAssetsLocal(query = {}) {
  const q = toQueryString(query);
  return f(`${BASE_ENDPOINT}/assets${q ? "?" + q : ""}`).then((_) => _);
}
var TYPES = ["space", "feature", "contact", "user"];
function typeIndex(item) {
  return TYPES.indexOf(item.is_role ? "contact" : item.type);
}
function compareSearchResultsAscending(item_a, item_b) {
  return ASCENDING_NAME_SORTER.compare(item_a.name || "", item_b.name || "") || ASCENDING_NAME_SORTER.compare(item_a.description || "", item_b.description || "") || typeIndex(item_a) - typeIndex(item_b);
}
function sortGlobalSearchResults(results, local_zones) {
  const local_zone_set = new Set(local_zones.filter((_) => !!_));
  const local_contacts = results.filter((_) => _.is_role && !!_.zone && local_zone_set.has(_.zone || "")).sort(compareSearchResultsAscending);
  const remaining_results = results.filter((_) => !(_.is_role && !!_.zone && local_zone_set.has(_.zone || ""))).sort(compareSearchResultsAscending);
  return [...local_contacts, ...remaining_results];
}
var ExploreSearchService = class _ExploreSearchService {
  /** Extract zones from in-progress bookings */
  _getInProgressZones(bookings) {
    if (!bookings?.length)
      return [];
    const zones = [];
    for (const booking of bookings) {
      if (booking instanceof CalendarEvent) {
        if (booking.system?.zones?.length) {
          zones.push(...booking.system.zones);
        }
        booking.resources?.forEach((r) => {
          if (r.zones?.length) {
            zones.push(...r.zones);
          }
        });
      } else if (booking instanceof Booking) {
        if (booking.zones?.length) {
          zones.push(...booking.zones);
        }
      }
    }
    return zones.filter((z) => this._org.levelWithID([z]));
  }
  _getPriorityZones(bookings, current_level_id) {
    return Array.from(/* @__PURE__ */ new Set([
      ...current_level_id ? [current_level_id] : [],
      ...this._getInProgressZones(bookings)
    ]));
  }
  hideItem(name) {
    const hide_items = this._settings.get("app.hide_global_search_items") || [];
    return hide_items.includes(name);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._maps_people = inject(MapsPeopleService);
    this._state = inject(ExploreStateService);
    this._injector = inject(Injector);
    this._initialised = this._org.initialised;
    this._building = this._org.active_building;
    this._maps_people_available = this._maps_people.available;
    this._in_progress_bookings = signal(
      [],
      ...ngDevMode ? [{ debugName: "_in_progress_bookings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._emergency_contacts = signal(
      [],
      ...ngDevMode ? [{ debugName: "_emergency_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_filter = debounced(this._filter, 400);
    this._slow_debounced_filter = debounced(this._filter, 1e3);
    this.emergency_contacts = this._emergency_contacts.asReadonly();
    this._asset_based_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_asset_based_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        const bld = this._building();
        return bld ? { bld, search: this._debounced_filter.value() } : void 0;
      },
      loader: async ({ params: { bld } }) => {
        const categories = await queryAssetCategoriesLocal({
          zone_id: bld.id
        }).catch(() => []);
        const category = categories.find((c) => c.name === EMERGENCY_CONTACTS_CATEGORY_NAME) || null;
        if (!category)
          return [];
        const groups = await queryAssetTypesLocal({
          zone_id: bld.id,
          q: `"${category.name}"`
        }).catch(() => []);
        const asset_type = groups.find((g) => g.name === EMERGENCY_CONTACTS_CATEGORY_NAME && g.category_id === category.id) || null;
        if (!asset_type)
          return [];
        const assets = await queryAssetsLocal({
          zone_id: bld.id,
          type_id: asset_type.id,
          limit: 200
        }).catch(() => []);
        return assets.filter((a) => a.asset_type_id === asset_type.id).map((a) => {
          const zone = this._org.levelWithID(a.zones) || this._org.buildings.find((_) => a.zones.includes(_.id));
          return {
            id: a.id,
            name: a.identifier || "",
            email: a.other_data?.email || "",
            phone: a.other_data?.phone || "",
            roles: a.other_data?.roles || [],
            zone: zone?.id,
            zone_name: zone?.display_name || zone?.name
          };
        });
      }
    }));
    this._legacy_metadata_contacts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_legacy_metadata_contacts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async ({ params: bld }) => {
        const { details } = await ic(bld.id, "emergency_contacts").catch(() => ({
          details: { contacts: [], migrated: false }
        }));
        const data = details;
        if (data?.migrated)
          return [];
        return data?.contacts || [];
      }
    }));
    this._role_assigned_contacts = computed(
      () => {
        const asset_contacts = this._asset_based_contacts.value() ?? [];
        if (asset_contacts.length > 0)
          return asset_contacts;
        return this._legacy_metadata_contacts.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "_role_assigned_contacts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._user_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_user_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter.value() }),
      loader: ({ params: { q } }) => q?.length > 2 ? this.search_fn(q).catch(() => []) : Promise.resolve([])
    }));
    this._space_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_space_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ q: this._debounced_filter.value() }),
      loader: ({ params: { q } }) => q?.length > 2 ? ga({ q, zone_id: this._org.organisation.id }).then(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
        level: this._org.levelWithID(_.zones)
      })))).catch(() => []) : Promise.resolve([])
    }));
    this._desk_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => {
        if (this._settings.get("app.desks.use_assets")) {
          const levels = this._org.levelsForBuilding(bld);
          return queryDeskAssetsForZones(levels.map((level) => level.id)).then((assets) => assets.map((asset) => deskFromAsset(asset, levels.find((level) => level.id === asset.zone_id)))).catch(() => []);
        }
        return ac(bld.id, { name: "desks" }).then((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone })))))).catch(() => []);
      }
    }));
    this._maps_people_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_maps_people_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        available: this._maps_people_available(),
        q: this._slow_debounced_filter.value(),
        bld: this._building()
      }),
      loader: async ({ params: { available, q } }) => {
        const list = available && q.length > 2 ? await mapsindoors?.services.LocationsService.getLocations({ q }) : [];
        return (list || []).map((_) => ({
          id: _.properties?.externalId || _.properties?.roomId || _.roomId || _.id,
          map_id: _.properties?.externalId || _.properties?.roomId || _.roomId || "",
          type: "feature",
          name: _.properties?.name || "",
          description: `${_.properties?.roomId} , Level ${_.properties?.floorName}`
        }));
      }
    }));
    this._map_features = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_map_features" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: async () => {
        const data = await ac(this._org.building.id, {
          name: "map_features"
        }).catch(() => []);
        const list = [];
        for (const item of data) {
          const metadata = item.metadata.map_features;
          if (!metadata)
            continue;
          const feature_list = metadata.details instanceof Array ? metadata.details : [];
          for (const feature of feature_list) {
            list.push({
              id: feature.id,
              type: "feature",
              name: feature.name,
              description: "",
              zone: item.zone
            });
          }
        }
        return list;
      }
    }));
    this._poi_metadata = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_poi_metadata" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._initialised() || void 0,
      loader: () => ic(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }))
    }));
    this._poi_list = computed(
      () => {
        const bld = this._building();
        const metadata = this._poi_metadata.value();
        if (!bld?.id || !metadata)
          return [];
        const mapping = metadata.details || {};
        const levels = this._org.levelsForBuilding(bld);
        const list = flatten(levels.map((lvl) => mapping[lvl.id] || []));
        return list.filter((_) => _.can_search);
      },
      ...ngDevMode ? [{ debugName: "_poi_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._points_of_interest = computed(
      () => this._poi_list().map((item) => ({
        id: item.location || item.id,
        type: "feature",
        name: item.name,
        description: "",
        zone: item.level_id
      })),
      ...ngDevMode ? [{ debugName: "_points_of_interest" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_results = computed(
      () => {
        const search = this._filter().toLowerCase();
        const spaces = this._space_search.value() ?? [];
        const desks = this._desk_search.value() ?? [];
        const users = this._user_search.value() ?? [];
        const contacts = this._emergency_contacts();
        const roled_contacts = this._role_assigned_contacts();
        const features = this._map_features.value() ?? [];
        const mapspeople_items = this._maps_people_search.value() ?? [];
        const points_of_interest = this._points_of_interest();
        const current_level = this._state.level();
        const in_progress_bookings = this._in_progress_bookings();
        let results = [];
        if (!this.hideItem("mapspeople"))
          results = results.concat(mapspeople_items);
        if (!this.hideItem("spaces")) {
          results = results.concat(spaces.map((s) => ({
            id: s.id,
            type: "space",
            email: s.email,
            name: s.display_name || s.name,
            description: `Capacity: ${s.capacity} `,
            zone: s.level?.id || ""
          })));
        }
        if (!this.hideItem("desks")) {
          results = results.concat(desks.map((s) => ({
            id: s.id,
            type: "feature",
            email: s.assigned_to,
            description: s.id,
            name: s.name || s.id,
            zone: s.zone?.id || ""
          })));
        }
        if (!this.hideItem("emergency_contacts")) {
          results = results.concat(flatten(roled_contacts.map((u) => u.roles.map((role) => ({
            id: u.email,
            type: role || "contact",
            is_role: true,
            name: u.name,
            email: u.email,
            description: u.email,
            zone: u.zone,
            zone_name: u.zone_name
          })))));
        }
        if (!this.hideItem("features")) {
          results = results.concat(features.filter((_) => _.name.toLowerCase().includes(search)).map((s) => ({
            id: s.id,
            type: "feature",
            name: s.name,
            description: "",
            zone: s.zone?.id,
            level_name: s.zone?.display_name || s.zone?.name
          })));
        }
        if (!this.hideItem("points_of_interest"))
          results = results.concat(points_of_interest);
        if (!this.hideItem("contacts")) {
          results = results.concat(contacts.map((u) => ({
            id: u.email,
            type: u.type || "contact",
            is_role: true,
            name: u.name,
            email: u.email,
            description: u.email
          })));
        }
        if (!this.hideItem("users")) {
          results = results.concat(users.map((u) => ({
            id: u.email,
            type: "user",
            name: u.name,
            email: u.email,
            description: u.email
          })));
        }
        results = results.filter((_) => _.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search) || (_.email || "").toLowerCase().includes(search) || _.type.toLowerCase().includes(search) || _.zone_name?.toLowerCase().includes(search));
        const in_progress_zones = this._getInProgressZones(in_progress_bookings);
        results.sort((a, b) => {
          if (current_level?.id) {
            const a_on_level = a.zone === current_level.id;
            const b_on_level = b.zone === current_level.id;
            if (a_on_level && !b_on_level)
              return -1;
            if (!a_on_level && b_on_level)
              return 1;
          }
          if (in_progress_zones.length > 0) {
            const a_near_booking = in_progress_zones.includes(a.zone);
            const b_near_booking = in_progress_zones.includes(b.zone);
            if (a_near_booking && !b_near_booking)
              return -1;
            if (!a_near_booking && b_near_booking)
              return 1;
          }
          return typeIndex(a) - typeIndex(b) || a.name.localeCompare(b.name);
        });
        return results;
      },
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.global_search_results = computed(
      () => sortGlobalSearchResults(this.search_results(), this._getPriorityZones(this._in_progress_bookings(), this._state.level()?.id)),
      ...ngDevMode ? [{ debugName: "global_search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._filter() !== this._debounced_filter.value() || this._user_search.isLoading() || this._space_search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Ka({ q, authority_id: Mt()?.id }).then((_) => _.data) : searchStaff(q);
    this.init();
  }
  async init() {
    await firstValueWhere(this._initialised, (_) => !!_, this._injector);
    await new Promise((resolve) => setTimeout(resolve, 500));
    const { is_public } = this._state.options();
    if (is_public)
      return;
    const mod = this._org.module("location_services", "LocationServices");
    if (mod) {
      const binding = mod.variable("emergency_contacts");
      binding.bindThenSubscribe((contacts_map) => {
        const list = [];
        for (const type in contacts_map) {
          for (const user of contacts_map[type]) {
            list.push(__spreadProps(__spreadValues({}, user), { type }));
          }
        }
        this._emergency_contacts.set(list);
      });
    }
  }
  setFilter(str) {
    this._filter.set(str);
  }
  /**
   * Set in-progress bookings for proximity-based sorting
   * @param bookings List of bookings/events that are currently in progress
   */
  setInProgressBookings(bookings) {
    this._in_progress_bookings.set(bookings || []);
  }
  static {
    this.\u0275fac = function ExploreSearchService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSearchService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSearchService, factory: _ExploreSearchService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-search.component.ts
var _c05 = ["input"];
var _c1 = ["button"];
var _forTrack03 = ($index, $item) => $item.name;
function ExploreSearchComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 32);
  }
}
function ExploreSearchComponent_Conditional_12_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 8);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "COMMON.SEARCH_EMPTY"), " ");
  }
}
function ExploreSearchComponent_Conditional_12_For_2_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-option", 10);
    \u0275\u0275listener("click", function ExploreSearchComponent_Conditional_12_For_2_Template_mat_option_click_0_listener() {
      const option_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.select(option_r2));
    });
    \u0275\u0275elementStart(1, "div", 11)(2, "div", 12)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 14);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 15);
    \u0275\u0275text(8);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const option_r2 = ctx.$implicit;
    \u0275\u0275property("value", option_r2.name);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", option_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r2.description, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", option_r2.type, " ");
  }
}
function ExploreSearchComponent_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ExploreSearchComponent_Conditional_12_Conditional_0_Template, 3, 3, "mat-option", 8);
    \u0275\u0275repeaterCreate(1, ExploreSearchComponent_Conditional_12_For_2_Template, 9, 4, "mat-option", 9, _forTrack03);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r2.results_list().length ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.results_list().slice(0, 5));
  }
}
var ExploreSearchComponent = class _ExploreSearchComponent extends AsyncHandler {
  constructor() {
    super();
    this._el = inject(ElementRef);
    this._search = inject(ExploreSearchService);
    this._router = inject(Router);
    this._route = inject(ActivatedRoute);
    this.show = signal(
      false,
      ...ngDevMode ? [{ debugName: "show" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search_str = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_str" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.right_size = signal(
      false,
      ...ngDevMode ? [{ debugName: "right_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.results = this._search.search_results;
    this.results_list = computed(
      () => this.results() || [],
      ...ngDevMode ? [{ debugName: "results_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = this._search.loading;
    this.setFilter = (value) => {
      this.search_str.set(value || "");
      this._search.setFilter(value);
    };
    this._input_el = viewChild(
      "input",
      ...ngDevMode ? [{ debugName: "_input_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._button_el = viewChild(
      "button",
      ...ngDevMode ? [{ debugName: "_button_el" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.checkButtonPosition();
  }
  clear() {
    this.timeout("clear", () => {
      this.show.set(false);
      this.setFilter("");
    });
  }
  cancelClear() {
    this.clearTimeout("clear");
  }
  focusInput() {
    if (this._input_el()?.nativeElement) {
      this.timeout("focus", () => this._input_el().nativeElement.focus(), 300);
    }
  }
  showSearch() {
    this.show.set(true);
    this.focusInput();
  }
  closeSearch(e) {
    this.show.set(false);
    this.setFilter("");
    const _input_el = this._input_el();
    if (_input_el?.nativeElement) {
      _input_el.nativeElement.focus();
      _input_el.nativeElement.blur();
    }
  }
  select(item) {
    this.search_str.set(item.name);
    const query = {};
    const type = item.type === "space" ? "space" : item.type === "feature" ? "locate" : "user";
    query[type] = item.id;
    if (type === "locate") {
      query.name = item.name;
      query.zone = item.zone;
    }
    this._router.navigate([], {
      relativeTo: this._route,
      queryParams: query
    });
    this.focusInput();
  }
  checkButtonPosition() {
    const window_width = window.innerWidth;
    const button_rect = this._button_el().nativeElement.getBoundingClientRect();
    const x_center = button_rect.left + button_rect.width / 2;
    this.right_size.set(x_center > window_width / 2);
  }
  static {
    this.\u0275fac = function ExploreSearchComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSearchComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSearchComponent, selectors: [["explore-search"]], viewQuery: function ExploreSearchComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c05, 5)(ctx._button_el, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 13, vars: 19, consts: [["button", ""], ["origin", "matAutocompleteOrigin"], ["input", ""], ["auto", "matAutocomplete"], ["icon", "", "matRipple", "", 1, "bg-base-200", "m-2", 3, "resize", "click"], ["role", "search", "tabindex", "0", "matRipple", "", "matAutocompleteOrigin", "", 1, "bg-base-100", "absolute", "top-1/2", "z-10", "flex", "max-w-[calc(100vw-7rem)]", "-translate-y-1/2", "items-center", "overflow-hidden", "px-4", "outline-hidden", 3, "click"], ["keyboard", "", 1, "flex-1", "border-none", "text-base", "outline-hidden", 3, "ngModelChange", "focus", "blur", "ngModel", "placeholder", "matAutocomplete", "matAutocompleteConnectedTo"], [1, "mr-2", 3, "diameter"], [1, "pointer-events-none"], [3, "value"], [3, "click", "value"], [1, "flex", "w-88", "max-w-[calc(100vw-2rem)]", "items-center", "leading-tight"], [1, "w-1/2", "flex-1", "overflow-hidden"], [1, "w-full", "truncate"], [1, "text-xs"], [1, "bg-base-300", "rounded-sm", "p-2", "text-xs", "font-bold", "text-white", "capitalize"]], template: function ExploreSearchComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "button", 4, 0);
        \u0275\u0275listener("resize", function ExploreSearchComponent_Template_button_resize_0_listener() {
          return ctx.checkButtonPosition();
        }, \u0275\u0275resolveWindow)("click", function ExploreSearchComponent_Template_button_click_0_listener($event) {
          return ctx.show() ? ctx.closeSearch($event) : ctx.showSearch();
        });
        \u0275\u0275elementStart(2, "icon");
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(4, "div", 5, 1);
        \u0275\u0275listener("click", function ExploreSearchComponent_Template_div_click_4_listener() {
          return ctx.focusInput();
        });
        \u0275\u0275elementStart(6, "input", 6, 2);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275listener("ngModelChange", function ExploreSearchComponent_Template_input_ngModelChange_6_listener($event) {
          return ctx.setFilter($event);
        })("focus", function ExploreSearchComponent_Template_input_focus_6_listener() {
          return ctx.cancelClear();
        })("blur", function ExploreSearchComponent_Template_input_blur_6_listener() {
          return ctx.clear();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(9, ExploreSearchComponent_Conditional_9_Template, 1, 1, "mat-spinner", 7);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(10, "mat-autocomplete", null, 3);
        \u0275\u0275conditionalCreate(12, ExploreSearchComponent_Conditional_12_Template, 3, 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        const origin_r4 = \u0275\u0275reference(5);
        const auto_r5 = \u0275\u0275reference(11);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.show() || ctx.search_str() ? "close" : "search");
        \u0275\u0275advance();
        \u0275\u0275classProp("right-0", ctx.right_size())("-translate-x-14", ctx.right_size())("left-0", !ctx.right_size())("translate-x-14", !ctx.right_size())("show", ctx.show() || ctx.search_str());
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.search_str())("placeholder", \u0275\u0275pipeBind1(8, 17, "COMMON.SEARCH"))("matAutocomplete", auto_r5)("matAutocompleteConnectedTo", origin_r4);
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 9 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() !== true && (ctx.show() || ctx.search_str()) ? 12 : -1);
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatAutocompleteOrigin,
      VirtualKeyboardComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--%NS%base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSearchComponent, [{
    type: Component,
    args: [{ selector: "explore-search", template: `
        <button
            #button
            icon
            matRipple
            class="bg-base-200 m-2"
            (window:resize)="checkButtonPosition()"
            (click)="show() ? closeSearch($event) : showSearch()"
        >
            <icon>{{ show() || search_str() ? 'close' : 'search' }}</icon>
        </button>
        <div
            role="search"
            tabindex="0"
            matRipple
            class="bg-base-100 absolute top-1/2 z-10 flex max-w-[calc(100vw-7rem)] -translate-y-1/2 items-center overflow-hidden px-4 outline-hidden"
            [class.right-0]="right_size()"
            [class.-translate-x-14]="right_size()"
            [class.left-0]="!right_size()"
            [class.translate-x-14]="!right_size()"
            [class.show]="show() || search_str()"
            (click)="focusInput()"
            matAutocompleteOrigin
            #origin="matAutocompleteOrigin"
        >
            <input
                #input
                keyboard
                class="flex-1 border-none text-base outline-hidden"
                [ngModel]="search_str()"
                (ngModelChange)="setFilter($event)"
                [placeholder]="'COMMON.SEARCH' | translate"
                (focus)="cancelClear()"
                (blur)="clear()"
                [matAutocomplete]="auto"
                [matAutocompleteConnectedTo]="origin"
            />
            @if (loading()) {
                <mat-spinner class="mr-2" [diameter]="32"></mat-spinner>
            }
        </div>
        <mat-autocomplete #auto="matAutocomplete">
            @if (loading() !== true && (show() || search_str())) {
                @if (!results_list().length) {
                    <mat-option class="pointer-events-none">
                        {{ 'COMMON.SEARCH_EMPTY' | translate }}
                    </mat-option>
                }
                @for (option of results_list().slice(0, 5); track option.name) {
                    <mat-option [value]="option.name" (click)="select(option)">
                        <div
                            class="flex w-88 max-w-[calc(100vw-2rem)] items-center leading-tight"
                        >
                            <div class="w-1/2 flex-1 overflow-hidden">
                                <div class="w-full truncate">
                                    {{ option.name }}
                                </div>
                                <div class="text-xs">
                                    {{ option.description }}
                                </div>
                            </div>
                            <div
                                class="bg-base-300 rounded-sm p-2 text-xs font-bold text-white capitalize"
                            >
                                {{ option.type }}
                            </div>
                        </div>
                    </mat-option>
                }
            }
        </mat-autocomplete>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      VirtualKeyboardComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;9f4945b2ccd61cdbcc08723b98fac624bfd389374b9fee892262ad25a3c5edf0;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-search.component.ts */\n:host {\n  z-index: 99;\n  position: relative;\n}\n[role=search] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */\n"] }]
  }], () => [], { _input_el: [{ type: ViewChild, args: ["input", { isSignal: true }] }], _button_el: [{ type: ViewChild, args: ["button", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSearchComponent, { className: "ExploreSearchComponent", filePath: "libs/explore/src/lib/explore-search.component.ts", lineNumber: 130 });
})();

// node_modules/@angular/material/fesm2022/slide-toggle.mjs
var _c06 = ["switch"];
var _c12 = ["*"];
function MatSlideToggle_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 11);
    \u0275\u0275namespaceSVG();
    \u0275\u0275elementStart(1, "svg", 13);
    \u0275\u0275element(2, "path", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "svg", 15);
    \u0275\u0275element(4, "path", 16);
    \u0275\u0275elementEnd()();
  }
}
var MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new InjectionToken("mat-slide-toggle-default-options", {
  providedIn: "root",
  factory: () => ({
    disableToggleValue: false,
    hideIcon: false,
    disabledInteractive: false
  })
});
var MatSlideToggleChange = class {
  source;
  checked;
  constructor(source, checked) {
    this.source = source;
    this.checked = checked;
  }
};
var MatSlideToggle = class _MatSlideToggle {
  _elementRef = inject(ElementRef);
  _focusMonitor = inject(FocusMonitor);
  _changeDetectorRef = inject(ChangeDetectorRef);
  defaults = inject(MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS);
  _onChange = (_) => {
  };
  _onTouched = () => {
  };
  _validatorOnChange = () => {
  };
  _uniqueId;
  _checked = false;
  _createChangeEvent(isChecked) {
    return new MatSlideToggleChange(this, isChecked);
  }
  _labelId;
  get buttonId() {
    return `${this.id || this._uniqueId}-button`;
  }
  _switchElement;
  focus() {
    this._switchElement.nativeElement.focus();
  }
  _noopAnimations = _animationsDisabled();
  _focused = false;
  name = null;
  id;
  labelPosition = "after";
  ariaLabel = null;
  ariaLabelledby = null;
  ariaDescribedby;
  required = false;
  color;
  disabled = false;
  fullWidth = false;
  disableRipple = false;
  tabIndex = 0;
  get checked() {
    return this._checked;
  }
  set checked(value) {
    this._checked = value;
    this._changeDetectorRef.markForCheck();
  }
  hideIcon;
  disabledInteractive;
  change = new EventEmitter();
  toggleChange = new EventEmitter();
  get inputId() {
    return `${this.id || this._uniqueId}-input`;
  }
  constructor() {
    inject(_CdkPrivateStyleLoader).load(_StructuralStylesLoader);
    const tabIndex = inject(new HostAttributeToken("tabindex"), {
      optional: true
    });
    const defaults = this.defaults;
    this.tabIndex = tabIndex == null ? 0 : parseInt(tabIndex) || 0;
    this.color = defaults.color || "accent";
    this.id = this._uniqueId = inject(_IdGenerator).getId("mat-mdc-slide-toggle-");
    this.hideIcon = defaults.hideIcon ?? false;
    this.disabledInteractive = defaults.disabledInteractive ?? false;
    this._labelId = this._uniqueId + "-label";
  }
  ngAfterContentInit() {
    this._focusMonitor.monitor(this._elementRef, true).subscribe((focusOrigin) => {
      if (focusOrigin === "keyboard" || focusOrigin === "program") {
        this._focused = true;
        this._changeDetectorRef.markForCheck();
      } else if (!focusOrigin) {
        Promise.resolve().then(() => {
          this._focused = false;
          this._onTouched();
          this._changeDetectorRef.markForCheck();
        });
      }
    });
  }
  ngOnChanges(changes) {
    if (changes["required"]) {
      this._validatorOnChange();
    }
  }
  ngOnDestroy() {
    this._focusMonitor.stopMonitoring(this._elementRef);
  }
  writeValue(value) {
    this.checked = !!value;
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  validate(control) {
    return this.required && control.value !== true ? {
      "required": true
    } : null;
  }
  registerOnValidatorChange(fn) {
    this._validatorOnChange = fn;
  }
  setDisabledState(isDisabled) {
    this.disabled = isDisabled;
    this._changeDetectorRef.markForCheck();
  }
  toggle() {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }
  _emitChangeEvent() {
    this._onChange(this.checked);
    this.change.emit(this._createChangeEvent(this.checked));
  }
  _handleClick() {
    if (!this.disabled) {
      this.toggleChange.emit();
      if (!this.defaults.disableToggleValue) {
        this.checked = !this.checked;
        this._onChange(this.checked);
        this.change.emit(new MatSlideToggleChange(this, this.checked));
      }
    }
  }
  _getAriaLabelledBy() {
    if (this.ariaLabelledby) {
      return this.ariaLabelledby;
    }
    return this.ariaLabel ? null : this._labelId;
  }
  static \u0275fac = function MatSlideToggle_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggle)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatSlideToggle,
    selectors: [["mat-slide-toggle"]],
    viewQuery: function MatSlideToggle_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c06, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 15,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("mat-slide-toggle-full-width", ctx.fullWidth)("_mat-animation-noopable", ctx._noopAnimations);
      }
    },
    inputs: {
      name: "name",
      id: "id",
      labelPosition: "labelPosition",
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      ariaDescribedby: [0, "aria-describedby", "ariaDescribedby"],
      required: [2, "required", "required", booleanAttribute],
      color: "color",
      disabled: [2, "disabled", "disabled", booleanAttribute],
      fullWidth: [2, "fullWidth", "fullWidth", booleanAttribute],
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      tabIndex: [2, "tabIndex", "tabIndex", (value) => value == null ? 0 : numberAttribute(value)],
      checked: [2, "checked", "checked", booleanAttribute],
      hideIcon: [2, "hideIcon", "hideIcon", booleanAttribute],
      disabledInteractive: [2, "disabledInteractive", "disabledInteractive", booleanAttribute]
    },
    outputs: {
      change: "change",
      toggleChange: "toggleChange"
    },
    exportAs: ["matSlideToggle"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => _MatSlideToggle),
      multi: true
    }, {
      provide: NG_VALIDATORS,
      useExisting: _MatSlideToggle,
      multi: true
    }]), \u0275\u0275NgOnChangesFeature],
    ngContentSelectors: _c12,
    decls: 14,
    vars: 27,
    consts: [["switch", ""], ["mat-internal-form-field", "", 3, "labelPosition"], ["role", "switch", "type", "button", 1, "mdc-switch", 3, "click", "tabIndex", "disabled"], [1, "mat-mdc-slide-toggle-touch-target"], [1, "mdc-switch__track"], [1, "mdc-switch__handle-track"], [1, "mdc-switch__handle"], [1, "mdc-switch__shadow"], [1, "mdc-elevation-overlay"], [1, "mdc-switch__ripple"], ["mat-ripple", "", 1, "mat-mdc-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered"], [1, "mdc-switch__icons"], [1, "mdc-label", 3, "click", "for"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--on"], ["d", "M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z"], ["viewBox", "0 0 24 24", "aria-hidden", "true", 1, "mdc-switch__icon", "mdc-switch__icon--off"], ["d", "M20 13H4v-2h16v2z"]],
    template: function MatSlideToggle_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "div", 1)(1, "button", 2, 0);
        \u0275\u0275listener("click", function MatSlideToggle_Template_button_click_1_listener() {
          return ctx._handleClick();
        });
        \u0275\u0275element(3, "div", 3)(4, "span", 4);
        \u0275\u0275elementStart(5, "span", 5)(6, "span", 6)(7, "span", 7);
        \u0275\u0275element(8, "span", 8);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "span", 9);
        \u0275\u0275element(10, "span", 10);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(11, MatSlideToggle_Conditional_11_Template, 5, 0, "span", 11);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(12, "label", 12);
        \u0275\u0275listener("click", function MatSlideToggle_Template_label_click_12_listener($event) {
          return $event.stopPropagation();
        });
        \u0275\u0275projection(13);
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        const switch_r1 = \u0275\u0275reference(2);
        \u0275\u0275property("labelPosition", ctx.labelPosition);
        \u0275\u0275advance();
        \u0275\u0275classProp("mdc-switch--selected", ctx.checked)("mdc-switch--unselected", !ctx.checked)("mdc-switch--checked", ctx.checked)("mdc-switch--disabled", ctx.disabled)("mat-mdc-slide-toggle-disabled-interactive", ctx.disabledInteractive);
        \u0275\u0275property("tabIndex", ctx.disabled && !ctx.disabledInteractive ? -1 : ctx.tabIndex)("disabled", ctx.disabled && !ctx.disabledInteractive);
        \u0275\u0275attribute("id", ctx.buttonId)("name", ctx.name)("aria-label", ctx.ariaLabel)("aria-labelledby", ctx._getAriaLabelledBy())("aria-describedby", ctx.ariaDescribedby)("aria-required", ctx.required || null)("aria-checked", ctx.checked)("aria-disabled", ctx.disabled && ctx.disabledInteractive ? "true" : null);
        \u0275\u0275advance(9);
        \u0275\u0275property("matRippleTrigger", switch_r1)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.hideIcon ? 11 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("for", ctx.buttonId);
        \u0275\u0275attribute("id", ctx._labelId);
      }
    },
    dependencies: [MatRipple, _MatInternalFormField],
    styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--%NS%mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--%NS%mat-slide-toggle-track-height, 32px);\n  border-radius: var(--%NS%mat-slide-toggle-track-shape, var(--%NS%mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--%NS%mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--%NS%mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-track-outline-color, var(--%NS%mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--%NS%mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--%NS%mat-slide-toggle-disabled-unselected-track-outline-color, var(--%NS%mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--%NS%mat-slide-toggle-unselected-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--%NS%mat-slide-toggle-disabled-unselected-track-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--%NS%mat-slide-toggle-selected-track-color, var(--%NS%mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--%NS%mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--%NS%mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--%NS%mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--%NS%mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-track-color, var(--%NS%mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-track-color, var(--%NS%mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-track-color, var(--%NS%mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--%NS%mat-slide-toggle-disabled-selected-track-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--%NS%mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--%NS%mat-slide-toggle-handle-width);\n  height: var(--%NS%mat-slide-toggle-handle-height);\n  border-radius: var(--%NS%mat-slide-toggle-handle-shape, var(--%NS%mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--%NS%mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--%NS%mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--%NS%mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--%NS%mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--%NS%mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--%NS%mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--%NS%mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--%NS%mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--%NS%selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--%NS%mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--%NS%unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--%NS%mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--%NS%mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--%NS%selected:enabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-handle-color, var(--%NS%mat-sys-on-primary));\n}\n.mdc-switch--%NS%selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mdc-switch--%NS%selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mdc-switch--%NS%selected:enabled:active .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-handle-color, var(--%NS%mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--%NS%selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-disabled-selected-handle-color, var(--%NS%mat-sys-surface));\n}\n.mdc-switch--%NS%unselected:enabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-handle-color, var(--%NS%mat-sys-outline));\n}\n.mdc-switch--%NS%unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--%NS%unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--%NS%unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-handle-color, var(--%NS%mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--%NS%mat-slide-toggle-disabled-unselected-handle-color, var(--%NS%mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--%NS%mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--%NS%mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--%NS%mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--%NS%mat-slide-toggle-state-layer-size, 40px);\n  height: var(--%NS%mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--%NS%disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--%NS%unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--%NS%unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--%NS%unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));\n  opacity: var(--%NS%mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--%NS%selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--%NS%selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--%NS%selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-color, var(--%NS%mat-sys-primary));\n  opacity: var(--%NS%mat-slide-toggle-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--%NS%mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--%NS%mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--%NS%mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--%NS%mat-slide-toggle-unselected-icon-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--%NS%mat-slide-toggle-disabled-unselected-icon-color, var(--%NS%mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--%NS%mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--%NS%mat-slide-toggle-selected-icon-color, var(--%NS%mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--%NS%mat-slide-toggle-disabled-selected-icon-color, var(--%NS%mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--%NS%mat-slide-toggle-label-text-color, var(--%NS%mat-sys-on-surface));\n  font-family: var(--%NS%mat-slide-toggle-label-text-font, var(--%NS%mat-sys-body-medium-font));\n  line-height: var(--%NS%mat-slide-toggle-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));\n  font-size: var(--%NS%mat-slide-toggle-label-text-size, var(--%NS%mat-sys-body-medium-size));\n  letter-spacing: var(--%NS%mat-slide-toggle-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));\n  font-weight: var(--%NS%mat-slide-toggle-label-text-weight, var(--%NS%mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--%NS%mat-slide-toggle-disabled-label-text-color, var(--%NS%mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-slide-toggle-full-width {\n  width: 100%;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field {\n  width: 100%;\n  justify-content: space-between;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field label {\n  margin: 0;\n  flex-grow: 1;\n  text-align: end;\n}\n.mat-slide-toggle-full-width .mdc-form-field--align-end label {\n  text-align: start;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--%NS%mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--%NS%mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggle, [{
    type: Component,
    args: [{
      selector: "mat-slide-toggle",
      host: {
        "class": "mat-mdc-slide-toggle",
        "[id]": "id",
        "[attr.tabindex]": "null",
        "[attr.aria-label]": "null",
        "[attr.name]": "null",
        "[attr.aria-labelledby]": "null",
        "[class.mat-mdc-slide-toggle-focused]": "_focused",
        "[class.mat-mdc-slide-toggle-checked]": "checked",
        "[class.mat-slide-toggle-full-width]": "fullWidth",
        "[class._mat-animation-noopable]": "_noopAnimations",
        "[class]": 'color ? "mat-" + color : ""'
      },
      exportAs: "matSlideToggle",
      encapsulation: ViewEncapsulation.None,
      providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => MatSlideToggle),
        multi: true
      }, {
        provide: NG_VALIDATORS,
        useExisting: MatSlideToggle,
        multi: true
      }],
      imports: [MatRipple, _MatInternalFormField],
      template: `<div mat-internal-form-field [labelPosition]="labelPosition">
  <button
    class="mdc-switch"
    role="switch"
    type="button"
    [class.mdc-switch--selected]="checked"
    [class.mdc-switch--unselected]="!checked"
    [class.mdc-switch--checked]="checked"
    [class.mdc-switch--disabled]="disabled"
    [class.mat-mdc-slide-toggle-disabled-interactive]="disabledInteractive"
    [tabIndex]="disabled && !disabledInteractive ? -1 : tabIndex"
    [disabled]="disabled && !disabledInteractive"
    [attr.id]="buttonId"
    [attr.name]="name"
    [attr.aria-label]="ariaLabel"
    [attr.aria-labelledby]="_getAriaLabelledBy()"
    [attr.aria-describedby]="ariaDescribedby"
    [attr.aria-required]="required || null"
    [attr.aria-checked]="checked"
    [attr.aria-disabled]="disabled && disabledInteractive ? 'true' : null"
    (click)="_handleClick()"
    #switch>
    <div class="mat-mdc-slide-toggle-touch-target"></div>
    <span class="mdc-switch__track"></span>
    <span class="mdc-switch__handle-track">
      <span class="mdc-switch__handle">
        <span class="mdc-switch__shadow">
          <span class="mdc-elevation-overlay"></span>
        </span>
        <span class="mdc-switch__ripple">
          <span class="mat-mdc-slide-toggle-ripple mat-focus-indicator" mat-ripple
            [matRippleTrigger]="switch"
            [matRippleDisabled]="disableRipple || disabled"
            [matRippleCentered]="true"></span>
        </span>
        @if (!hideIcon) {
          <span class="mdc-switch__icons">
            <svg
              class="mdc-switch__icon mdc-switch__icon--on"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M19.69,5.23L8.96,15.96l-4.23-4.23L2.96,13.5l6,6L21.46,7L19.69,5.23z" />
            </svg>
            <svg
              class="mdc-switch__icon mdc-switch__icon--off"
              viewBox="0 0 24 24"
              aria-hidden="true">
              <path d="M20 13H4v-2h16v2z" />
            </svg>
          </span>
        }
      </span>
    </span>
  </button>

  <!--
    Clicking on the label will trigger another click event from the button.
    Stop propagation here so other listeners further up in the DOM don't execute twice.
  -->
  <label class="mdc-label" [for]="buttonId" [attr.id]="_labelId" (click)="$event.stopPropagation()">
    <ng-content></ng-content>
  </label>
</div>
`,
      styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-icon {\n  min-height: fit-content;\n  flex-shrink: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-slide-toggle-full-width {\n  width: 100%;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field {\n  width: 100%;\n  justify-content: space-between;\n}\n.mat-slide-toggle-full-width .mat-internal-form-field label {\n  margin: 0;\n  flex-grow: 1;\n  text-align: end;\n}\n.mat-slide-toggle-full-width .mdc-form-field--align-end label {\n  text-align: start;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
    }]
  }], () => [], {
    _switchElement: [{
      type: ViewChild,
      args: ["switch"]
    }],
    name: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    labelPosition: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    ariaDescribedby: [{
      type: Input,
      args: ["aria-describedby"]
    }],
    required: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    color: [{
      type: Input
    }],
    disabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    fullWidth: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabIndex: [{
      type: Input,
      args: [{
        transform: (value) => value == null ? 0 : numberAttribute(value)
      }]
    }],
    checked: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    hideIcon: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    disabledInteractive: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    change: [{
      type: Output
    }],
    toggleChange: [{
      type: Output
    }]
  });
})();
var MatSlideToggleModule = class _MatSlideToggleModule {
  static \u0275fac = function MatSlideToggleModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatSlideToggleModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatSlideToggleModule,
    imports: [MatSlideToggle],
    exports: [MatSlideToggle, BidiModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [MatSlideToggle, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatSlideToggleModule, [{
    type: NgModule,
    args: [{
      imports: [MatSlideToggle],
      exports: [MatSlideToggle, BidiModule]
    }]
  }], null, null);
})();

// apps/map-kiosk/src/app/accessibility-controls.component.ts
function AccessibilityControlsComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 1);
    \u0275\u0275listener("click", function AccessibilityControlsComponent_Conditional_0_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode(!ctx_r1.dark_mode()));
    });
    \u0275\u0275elementStart(1, "div");
    \u0275\u0275text(2, "Dark Mode");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-slide-toggle", 2);
    \u0275\u0275listener("ngModelChange", function AccessibilityControlsComponent_Conditional_0_Template_mat_slide_toggle_ngModelChange_3_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.setDarkMode($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275property("ngModel", ctx_r1.dark_mode());
    \u0275\u0275control();
  }
}
var AccessibilityControlsComponent = class _AccessibilityControlsComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._settings = inject(SettingsService);
    this._allow_dark_mode = this._settings.signal("allow_dark_mode", false);
    this._accessible = this._settings.signal("accessible", false, true);
    this._font_size = this._settings.signal("font_size", 16, true);
    this.can_change_dark_mode = computed(
      () => !!this._allow_dark_mode(),
      ...ngDevMode ? [{ debugName: "can_change_dark_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.dark_mode = computed(
      () => this.can_change_dark_mode() && this._settings.theme_signal() === "dark",
      ...ngDevMode ? [{ debugName: "dark_mode" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.accessible = computed(
      () => !!this._accessible(),
      ...ngDevMode ? [{ debugName: "accessible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.font_size = computed(
      () => this._font_size() || 16,
      ...ngDevMode ? [{ debugName: "font_size" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.applySetting = (n, v) => this.timeout("apply_setting", () => this._settings.saveUserSetting(n, v), 1e3);
  }
  setDarkMode(state) {
    this.timeout("dark_mode", () => {
      const theme = this._settings.theme_signal();
      if (state && theme !== "dark")
        this._settings.setTheme("dark");
      else if (!state && theme === "dark")
        this._settings.setTheme("light");
    }, 100);
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275AccessibilityControlsComponent_BaseFactory;
      return function AccessibilityControlsComponent_Factory(__ngFactoryType__) {
        return (\u0275AccessibilityControlsComponent_BaseFactory || (\u0275AccessibilityControlsComponent_BaseFactory = \u0275\u0275getInheritedFactory(_AccessibilityControlsComponent)))(__ngFactoryType__ || _AccessibilityControlsComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AccessibilityControlsComponent, selectors: [["accessibility-controls"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 1, vars: 1, consts: [["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "p-2"], ["matRipple", "", 1, "hover:bg-base-200", "flex", "w-full", "items-center", "justify-between", "rounded-sm", "p-2", 3, "click"], [3, "ngModelChange", "ngModel"]], template: function AccessibilityControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, AccessibilityControlsComponent_Conditional_0_Template, 4, 1, "button", 0);
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.can_change_dark_mode() ? 0 : -1);
      }
    }, dependencies: [MatRippleModule, MatRipple, MatSlideToggleModule, MatSlideToggle, FormsModule, NgControlStatus, NgModel], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AccessibilityControlsComponent, [{
    type: Component,
    args: [{ selector: "accessibility-controls", template: `
        @if (can_change_dark_mode()) {
            <button
                matRipple
                class="hover:bg-base-200 flex w-full items-center justify-between rounded-sm p-2"
                (click)="setDarkMode(!dark_mode())"
            >
                <div>Dark Mode</div>
                <mat-slide-toggle
                    [ngModel]="dark_mode()"
                    (ngModelChange)="setDarkMode($event)"
                ></mat-slide-toggle>
            </button>
        }
        <!-- <button
            matRipple
            class="flex items-center justify-between hover:bg-base-200 w-full p-2 rounded-sm"
            (click)="applySetting('accessible', !accessible())"
        >
            <div>Text Size</div>
            <mat-slide-toggle
                [ngModel]="accessible()"
                (ngModelChange)="applySetting('accessible', $event)"
            ></mat-slide-toggle>
        </button>
        <div class="flex items-center pl-2 space-x-4" *ngIf="accessible()">
            <div class="text-sm">A</div>
            <mat-slider
                class="flex-1 w-px min-w-0 text-[16px]"
                [min]="10"
                [max]="24"
                [step]="2"
            >
                <input
                    matSliderThumb
                    class="text-[16px]"
                    [ngModel]="font_size()"
                    (ngModelChange)="applySetting('font_size', $event)"
                />
            </mat-slider>
            <div class="text-2xl">A</div>
            <div
                class="text-base py-1 px-2 rounded-sm bg-base-300 text-base-content my-2"
            >
                {{ font_size() }}px
            </div>
        </div> -->
    `, imports: [MatRippleModule, MatSlideToggleModule, FormsModule] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AccessibilityControlsComponent, { className: "AccessibilityControlsComponent", filePath: "apps/map-kiosk/src/app/accessibility-controls.component.ts", lineNumber: 60 });
})();

// apps/map-kiosk/src/app/explore.component.ts
var _c07 = () => ({ controls: true });
function ExploreComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "explore-search");
  }
}
function ExploreComponent_ng_template_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275element(1, "accessibility-controls");
    \u0275\u0275elementEnd();
  }
}
function ExploreComponent_Conditional_10_Conditional_1_For_8_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 23);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_10_Conditional_1_For_8_Template_button_click_0_listener() {
      const lvl_r2 = \u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r2.setLevel(lvl_r2));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const lvl_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", lvl_r2.display_name || lvl_r2.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "div", 13);
    \u0275\u0275text(2, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 1);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_1_For_8_Template, 2, 1, "button", 22, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const levelMenu_r4 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", levelMenu_r4);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.levels());
  }
}
function ExploreComponent_Conditional_10_Conditional_2_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r5 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r5.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r5.name, " ");
  }
}
function ExploreComponent_Conditional_10_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 21)(1, "div", 13);
    \u0275\u0275text(2, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "icon", 12);
    \u0275\u0275text(4, "keyboard_arrow_down");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(5, "mat-menu", null, 2);
    \u0275\u0275repeaterCreate(7, ExploreComponent_Conditional_10_Conditional_2_For_8_Template, 4, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const legendMenu_r6 = \u0275\u0275reference(6);
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275property("matMenuTriggerFor", legendMenu_r6);
    \u0275\u0275advance(7);
    \u0275\u0275repeater(ctx_r2.legend);
  }
}
function ExploreComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8);
    \u0275\u0275conditionalCreate(1, ExploreComponent_Conditional_10_Conditional_1_Template, 9, 1);
    \u0275\u0275conditionalCreate(2, ExploreComponent_Conditional_10_Conditional_2_Template, 9, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.levels().length ? 1 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.legend.length ? 2 : -1);
  }
}
function ExploreComponent_Conditional_13_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 28);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_13_For_10_Template_button_click_0_listener() {
      const lvl_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r2.setLevel(lvl_r9));
    });
    \u0275\u0275elementStart(1, "div", 29);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const lvl_r9 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("opacity-30", lvl_r9.id !== ctx_r2.level()?.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", lvl_r9.display_name || lvl_r9.name, " ");
  }
}
function ExploreComponent_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_13_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_levels.set(!ctx_r2.show_levels()));
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "corporate_fare");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Level");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_13_For_10_Template, 3, 3, "button", 27, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.show_levels() ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r2.show_levels());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.levels());
  }
}
function ExploreComponent_Conditional_14_For_10_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 24);
    \u0275\u0275element(1, "div", 25);
    \u0275\u0275elementStart(2, "div", 26);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const value_r11 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275styleProp("background-color", value_r11.color);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", value_r11.name, " ");
  }
}
function ExploreComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r10 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 11);
    \u0275\u0275listener("click", function ExploreComponent_Conditional_14_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r10);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.show_legend.set(!ctx_r2.show_legend()));
    });
    \u0275\u0275elementStart(1, "icon", 12);
    \u0275\u0275text(2, "place");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 13);
    \u0275\u0275text(4, "Legend");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "icon", 12);
    \u0275\u0275text(6);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 14)(8, "div", 15);
    \u0275\u0275repeaterCreate(9, ExploreComponent_Conditional_14_For_10_Template, 4, 3, "div", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275element(11, "hr", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(6);
    \u0275\u0275textInterpolate(ctx_r2.show_legend() ? "keyboard_arrow_up" : "keyboard_arrow_down");
    \u0275\u0275advance();
    \u0275\u0275classProp("contract-collapsed", !ctx_r2.show_legend());
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.legend);
  }
}
var ExploreComponent = class _ExploreComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._state = inject(ExploreStateService);
    this._s = inject(ExploreSpacesService);
    this._desks = inject(ExploreDesksService);
    this._zones = inject(ExploreZonesService);
    this._parking = inject(ExploreParkingService);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._spaces = inject(SpacesService);
    this._dialog = inject(MatDialog);
    this._route = inject(ActivatedRoute);
    this._router = inject(Router);
    this._space_pipe = inject(SpacePipe);
    this.reset_delay = 180;
    this.show_levels = signal(
      true,
      ...ngDevMode ? [{ debugName: "show_levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_legend = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_legend" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_accessibility = signal(
      false,
      ...ngDevMode ? [{ debugName: "show_accessibility" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.legend = [
      { id: "free", name: "Space Available", color: "#43a047" },
      { id: "busy", name: "Space In Use", color: "#e53935" },
      { id: "pending", name: "Space Pending", color: "#ffb300" },
      { id: "not-bookable", name: "Space Not-bookable", color: "#ccc" }
    ];
    this._region = this._org.active_region;
    this._building = this._org.active_building;
    this.levels = computed(
      () => {
        const region = this._region();
        const building = this._building();
        return (this._settings.get("app.use_region") ? flatten(this._org.buildings.filter((bld) => region?.id === bld.parent_id).map((bld) => this._org.levelsForBuilding(bld).map((_) => __spreadProps(__spreadValues({}, _), {
          display_name: `${bld.display_name} - ${_.display_name}`
        })))) : this._org.levelsForBuilding(building)) || [];
      },
      ...ngDevMode ? [{ debugName: "levels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = this._state.level;
    this.logo = computed(
      () => this._settings.theme_signal() === "dark" ? this._settings.signal("logo_dark")() : this._settings.signal("logo_light")(),
      ...ngDevMode ? [{ debugName: "logo" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.legend_visible = computed(
      () => this._settings.signal("explore.show_legend")() !== false,
      ...ngDevMode ? [{ debugName: "legend_visible" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_zones = this._settings.signal("explore.hide_zones");
    this.url = this._state.map_url;
    this.styles = this._state.map_styles;
    this.positions = this._state.map_positions;
    this.features = this._state.map_features;
    this.actions = this._state.map_actions;
    this.labels = this._state.map_labels;
    this.options = this._state.options;
    this.locate = signal(
      "",
      ...ngDevMode ? [{ debugName: "locate" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._query_params = toSignal(this._route.queryParamMap);
    this._ready = signal(
      false,
      ...ngDevMode ? [{ debugName: "_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._clear_located_on_level_change = effect(
      () => {
        this._state.level();
        this.timeout("update_location", () => {
          this._state.setFeatures("_located", []);
        });
      },
      ...ngDevMode ? [{ debugName: "_clear_located_on_level_change" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._handle_query_params = effect(
      () => {
        if (!this._ready())
          return;
        const params = this._query_params();
        if (!params)
          return;
        untracked(() => this.handleQueryParams(params));
      },
      ...ngDevMode ? [{ debugName: "_handle_query_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.onMouse = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.onTouch = () => this.timeout("reset", () => this.resetKiosk(), this.reset_delay * 1e3);
    this.setOptions = (o) => this._state.setOptions(o);
    this.setLevel = (lvl) => this._state.setLevel(lvl.id);
    this.can_search = computed(
      () => !!this._settings.signal("explore.search_enabled")(),
      ...ngDevMode ? [{ debugName: "can_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  updateZoom(zoom) {
    this._state.setPositions(zoom, this._state.positions.center);
  }
  updateCenter(center) {
    this._state.setPositions(this._state.positions.zoom, center);
  }
  async toggleZones(enabled) {
    const options = this.options();
    const disable = !enabled ? unique([...options.disable || [], "zones", "devices"]) : options.disable.filter((_) => _ !== "zones" && _ !== "devices") || [];
    this.setOptions({ disable });
  }
  async ngOnInit() {
    if (location.hash.includes("public=true") || location.search.includes("public=true")) {
      this._state.setOptions({ is_public: true });
    }
    while (!this._spaces.initialised()) {
      await new Promise((resolve) => setTimeout(resolve, 100));
    }
    this._desks.setOptions({ custom: true });
    this.reset_delay = this._settings.get("app.inactivity_timeout_secs") || 180;
    this.resetKiosk(false);
    VirtualKeyboardComponent.enabled = localStorage.getItem("OSK.enabled") === "true";
    this._ready.set(true);
  }
  /** React to changes in the route query parameters */
  async handleQueryParams(params) {
    if (params.has("level")) {
      log("Explore", "Level changed to:", params.get("level"));
      this._state.setLevel(params.get("level"));
      const level = this._org.levelWithID([params.get("level")]);
      if (!level)
        return;
      const bld = this._org.buildings.find((_) => level.parent_id === _.id);
      if (!bld)
        return;
      this._org.building = bld;
    }
    this._state.setFeatures("_located", []);
    if (params.has("space")) {
      log("Explore", "Focusing on space:", params.get("space"));
      this.locateSpace(params.get("space"));
    } else if (params.has("user")) {
      log("Explore", "Focusing on user:", params.get("user"));
      let user = this._settings.value("last_search");
      if (!user || params.get("user") !== user.email) {
        user = null;
        user = await showStaff(params.get("user"));
      }
      if (!user)
        return notifyError(`Unable to user details for ${params.get("user")}`);
      this.locateUser(user instanceof Array ? user[0] : user).catch((_) => {
        notifyError(`Unable to locate ${params.get("user")}`);
        this._router.navigate([], {
          relativeTo: this._route,
          queryParams: {}
        });
      });
    } else if (params.has("feature")) {
      log("Explore", "Focusing on feature:", params.get("feature"));
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", [
          {
            location: params.get("feature"),
            content: MapPinComponent,
            data: {}
          }
        ]);
      });
    } else if (params.has("locate")) {
      log("Explore", "Focusing on location:", params.get("locate"));
      this.locate.set(params.get("locate"));
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", [
          {
            location: params.get("locate"),
            content: MapPinComponent,
            data: {}
          }
        ]);
      });
    } else {
      this.timeout("update_location", () => {
        this._state.setFeatures("_located", []);
      });
    }
  }
  async locateSpace(id) {
    const space = await this._space_pipe.transform(id);
    if (!space)
      return;
    this._state.setLevel(this._org.levelWithID(space.zones)?.id);
    const feature = {
      location: space.map_id,
      content: MapPinComponent,
      data: {
        message: `${space.display_name || space.name} is here`
      }
    };
    this.timeout("update_location", () => this._state.setFeatures("_located", [feature]));
  }
  async locateUser(user) {
    let locate_details = this._org.binding("location_services");
    if (!locate_details)
      return;
    if (typeof locate_details === "string") {
      locate_details = {
        system_id: locate_details,
        module: "LocationServices"
      };
    }
    const mod = Dd(locate_details.system_id, locate_details.module);
    const locations = (await mod.execute("locate_user", [
      user.email,
      user.username || user.id
    ])).map((i) => new MapLocation(i));
    locations.sort((a, b) => locate_details.priority.indexOf(a.type) - locate_details.priority.indexOf(b.type));
    if (!locations?.length) {
      throw "No locations for the given user";
    }
    this._state.setLevel(this._org.levelWithID([locations[0]?.level])?.id);
    const pos = locations[0].position;
    const { coordinates_from } = locations[0];
    const feature = {
      location: locations[0].type === "wireless" ? {
        x: coordinates_from?.includes("right") ? 1 - pos.x : pos.x,
        y: coordinates_from?.includes("bottom") ? 1 - pos.y : pos.y
      } : pos,
      content: locations[0].type === "wireless" ? MapRadiusComponent : MapPinComponent,
      z_index: 99,
      data: {
        message: `${user.name} is here`,
        radius: locations[0].variance,
        last_seen: locations[0].last_seen
      }
    };
    this.timeout("update_location", () => {
      this._state.setFeatures("_located", [feature]);
    });
  }
  resetKiosk(navigate = true) {
    if (document.activeElement?.blur)
      document.activeElement?.blur();
    const level = localStorage.getItem("KIOSK.level");
    this._state.setPositions(1, { x: 0.5, y: 0.5 });
    if (level)
      this._state.setLevel(level);
    this._dialog.closeAll();
    if (navigate)
      this._router.navigate(["/"]);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreComponent, selectors: [["", "app-explore", ""]], hostBindings: function ExploreComponent_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("mousedown", function ExploreComponent_mousedown_HostBindingHandler() {
          return ctx.onMouse();
        }, \u0275\u0275resolveWindow)("touchstart", function ExploreComponent_touchstart_HostBindingHandler() {
          return ctx.onTouch();
        }, \u0275\u0275resolveWindow);
      }
    }, features: [\u0275\u0275ProvidersFeature([
      ExploreSpacesService,
      ExploreDesksService,
      ExploreZonesService,
      ExploreParkingService,
      SpacePipe
    ]), \u0275\u0275InheritDefinitionFeature], decls: 29, vars: 19, consts: [["accessibility_controls", ""], ["levelMenu", "matMenu"], ["legendMenu", "matMenu"], ["topbar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "relative", "flex", "items-center", "justify-between", "border-b", "px-4", "py-2"], ["matRipple", "", "routerLink", "/", 1, "rounded-sm", "p-2", "text-2xl"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "absolute", "top-1/2", "right-2", "flex", "-translate-y-1/2", "items-center"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "bg-base-200", "flex", "sm:hidden", 3, "content"], ["options", "", 1, "bg-base-content", "text-base-100", "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], [1, "flex", "h-1/2", "flex-1"], ["sidebar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "hidden", "w-[20rem]", "overflow-auto", "border-r", "px-2", "py-4", "sm:block"], ["btn", "", "matRipple", "", 1, "items", "clear", "hover:bg-base-200", "flex", "w-full", "space-x-4", 3, "click"], [1, "text-2xl"], [1, "flex-1", "text-left", "font-medium"], [1, "contract-expand", "px-8"], [1, "space-y-2", "py-4"], [1, "mx-auto", "w-[calc(100%-4rem)]"], [1, "relative", "h-full", "flex-1"], [1, "absolute", "inset-0"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels", "options", "focus"], [1, "bg-base-100", "w-[18rem]", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "clear", "text-base-100", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-4", "rounded-sm", "px-4", "py-2"], [1, "h-3", "w-3", "rounded-full"], [1, "text-left", "opacity-60"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "opacity-30"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "click"], [1, "w-full", "text-left"]], template: function ExploreComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "a", 4);
        \u0275\u0275element(2, "img", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 6);
        \u0275\u0275conditionalCreate(4, ExploreComponent_Conditional_4_Template, 1, 0, "explore-search");
        \u0275\u0275elementStart(5, "button", 7)(6, "icon");
        \u0275\u0275text(7, "accessible");
        \u0275\u0275elementEnd()();
        \u0275\u0275template(8, ExploreComponent_ng_template_8_Template, 2, 0, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(10, ExploreComponent_Conditional_10_Template, 3, 2, "div", 8);
        \u0275\u0275elementStart(11, "div", 9)(12, "div", 10);
        \u0275\u0275conditionalCreate(13, ExploreComponent_Conditional_13_Template, 12, 3);
        \u0275\u0275conditionalCreate(14, ExploreComponent_Conditional_14_Template, 12, 3);
        \u0275\u0275elementStart(15, "button", 11);
        \u0275\u0275listener("click", function ExploreComponent_Template_button_click_15_listener() {
          return ctx.show_accessibility.set(!ctx.show_accessibility());
        });
        \u0275\u0275elementStart(16, "icon", 12);
        \u0275\u0275text(17, "accessible");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "div", 13);
        \u0275\u0275text(19, " Accessibility ");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "icon", 12);
        \u0275\u0275text(21);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(22, "div", 14)(23, "div", 15);
        \u0275\u0275element(24, "accessibility-controls");
        \u0275\u0275elementEnd()();
        \u0275\u0275element(25, "hr", 16);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(26, "div", 17)(27, "div", 18)(28, "dynamic-map", 19);
        \u0275\u0275listener("zoomChange", function ExploreComponent_Template_dynamic_map_zoomChange_28_listener($event) {
          return ctx.updateZoom($event);
        })("centerChange", function ExploreComponent_Template_dynamic_map_centerChange_28_listener($event) {
          return ctx.updateCenter($event);
        });
        \u0275\u0275elementEnd()()()();
      }
      if (rf & 2) {
        const accessibility_controls_r12 = \u0275\u0275reference(9);
        \u0275\u0275advance(2);
        \u0275\u0275property("source", ctx.logo()?.src || ctx.logo());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_search() ? 4 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("content", accessibility_controls_r12);
        \u0275\u0275advance(5);
        \u0275\u0275conditional(ctx.levels().length || ctx.legend.length ? 10 : -1);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.levels().length ? 13 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.legend.length && ctx.legend_visible() ? 14 : -1);
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate(ctx.show_accessibility() ? "keyboard_arrow_up" : "keyboard_arrow_down");
        \u0275\u0275advance();
        \u0275\u0275classProp("contract-collapsed", !ctx.show_accessibility());
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.url())("zoom", ctx.positions()?.zoom)("center", ctx.positions()?.center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("options", \u0275\u0275pureFunction0(18, _c07))("focus", ctx.locate());
      }
    }, dependencies: [
      AccessibilityControlsComponent,
      MatRippleModule,
      MatRipple,
      IconComponent,
      AuthenticatedImageDirective,
      CustomTooltipComponent,
      RouterModule,
      RouterLink,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      ExploreSearchComponent,
      DynamicMapComponent
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--%NS%base-200);\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreComponent, [{
    type: Component,
    args: [{ selector: "[app-explore]", template: `
        <div
            topbar
            class="border-base-300 bg-base-100 text-base-content relative flex items-center justify-between border-b px-4 py-2"
        >
            <a matRipple routerLink="/" class="rounded-sm p-2 text-2xl">
                <img
                    auth
                    class="h-12"
                    alt="Logo"
                    [source]="logo()?.src || logo()"
                />
            </a>
            <div
                class="absolute top-1/2 right-2 flex -translate-y-1/2 items-center"
            >
                @if (can_search()) {
                    <explore-search></explore-search>
                }
                <button
                    icon
                    matRipple
                    customTooltip
                    [content]="accessibility_controls"
                    class="bg-base-200 flex sm:hidden"
                >
                    <icon>accessible</icon>
                </button>
                <ng-template #accessibility_controls>
                    <div class="bg-base-100 w-[18rem] rounded-sm p-2">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </ng-template>
            </div>
        </div>
        @if (levels().length || legend.length) {
            <div
                options
                class="bg-base-content text-base-100 flex items-center space-x-2 p-2 sm:hidden"
            >
                @if (levels().length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="levelMenu"
                    >
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #levelMenu="matMenu">
                        @for (lvl of levels(); track lvl) {
                            <button mat-menu-item (click)="setLevel(lvl)">
                                {{ lvl.display_name || lvl.name }}
                            </button>
                        }
                    </mat-menu>
                }
                @if (legend.length) {
                    <button
                        btn
                        matRipple
                        class="clear text-base-100"
                        [matMenuTriggerFor]="legendMenu"
                    >
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">keyboard_arrow_down</icon>
                    </button>
                    <mat-menu #legendMenu="matMenu">
                        @for (value of legend; track value) {
                            <div
                                class="hover:bg-base-200 flex w-full items-center space-x-4 rounded-sm px-4 py-2"
                            >
                                <div
                                    class="h-3 w-3 rounded-full"
                                    [style.background-color]="value.color"
                                ></div>
                                <div class="text-left opacity-60">
                                    {{ value.name }}
                                </div>
                            </div>
                        }
                    </mat-menu>
                }
            </div>
        }
        <div class="flex h-1/2 flex-1">
            <div
                sidebar
                class="border-base-300 bg-base-100 text-base-content hidden w-[20rem] overflow-auto border-r px-2 py-4 sm:block"
            >
                @if (levels().length) {
                    <button
                        btn
                        matRipple
                        class="items clear hover:bg-base-200 flex w-full space-x-4"
                        (click)="show_levels.set(!show_levels())"
                    >
                        <icon class="text-2xl">corporate_fare</icon>
                        <div class="flex-1 text-left font-medium">Level</div>
                        <icon class="text-2xl">{{
                            show_levels()
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div
                        class="contract-expand px-8"
                        [class.contract-collapsed]="!show_levels()"
                    >
                        <div class="space-y-2 py-4">
                            @for (lvl of levels(); track lvl) {
                                <button
                                    btn
                                    matRipple
                                    class="clear hover:bg-base-200 w-full hover:opacity-100"
                                    [class.opacity-30]="lvl.id !== level()?.id"
                                    (click)="setLevel(lvl)"
                                >
                                    <div class="w-full text-left">
                                        {{ lvl.display_name || lvl.name }}
                                    </div>
                                </button>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                @if (legend.length && legend_visible()) {
                    <button
                        btn
                        matRipple
                        class="items clear hover:bg-base-200 flex w-full space-x-4"
                        (click)="show_legend.set(!show_legend())"
                    >
                        <icon class="text-2xl">place</icon>
                        <div class="flex-1 text-left font-medium">Legend</div>
                        <icon class="text-2xl">{{
                            show_legend()
                                ? 'keyboard_arrow_up'
                                : 'keyboard_arrow_down'
                        }}</icon>
                    </button>
                    <div
                        class="contract-expand px-8"
                        [class.contract-collapsed]="!show_legend()"
                    >
                        <div class="space-y-2 py-4">
                            @for (value of legend; track value) {
                                <div
                                    class="hover:bg-base-200 flex w-full items-center space-x-4 rounded-sm px-4 py-2"
                                >
                                    <div
                                        class="h-3 w-3 rounded-full"
                                        [style.background-color]="value.color"
                                    ></div>
                                    <div class="text-left opacity-60">
                                        {{ value.name }}
                                    </div>
                                </div>
                            }
                        </div>
                    </div>
                    <hr class="mx-auto w-[calc(100%-4rem)]" />
                }
                <button
                    btn
                    matRipple
                    class="items clear hover:bg-base-200 flex w-full space-x-4"
                    (click)="show_accessibility.set(!show_accessibility())"
                >
                    <icon class="text-2xl">accessible</icon>
                    <div class="flex-1 text-left font-medium">
                        Accessibility
                    </div>
                    <icon class="text-2xl">{{
                        show_accessibility()
                            ? 'keyboard_arrow_up'
                            : 'keyboard_arrow_down'
                    }}</icon>
                </button>
                <div
                    class="contract-expand px-8"
                    [class.contract-collapsed]="!show_accessibility()"
                >
                    <div class="space-y-2 py-4">
                        <accessibility-controls></accessibility-controls>
                    </div>
                </div>
                <hr class="mx-auto w-[calc(100%-4rem)]" />
            </div>
            <div class="relative h-full flex-1">
                <div class="absolute inset-0">
                    <dynamic-map
                        [src]="url()"
                        [zoom]="positions()?.zoom"
                        [center]="positions()?.center"
                        (zoomChange)="updateZoom($event)"
                        (centerChange)="updateCenter($event)"
                        [styles]="styles()"
                        [features]="features()"
                        [actions]="actions()"
                        [labels]="labels()"
                        [options]="{ controls: true }"
                        [focus]="locate()"
                    />
                </div>
            </div>
        </div>
    `, providers: [
      ExploreSpacesService,
      ExploreDesksService,
      ExploreZonesService,
      ExploreParkingService,
      SpacePipe
    ], imports: [
      AccessibilityControlsComponent,
      MatRippleModule,
      IconComponent,
      AuthenticatedImageDirective,
      CustomTooltipComponent,
      RouterModule,
      MatMenuModule,
      ExploreSearchComponent,
      DynamicMapComponent
    ], styles: ["/* angular:styles/component:css;59c187f5c41ee4ecc442e4a27538a3705c2d95e29d3770d64524df8725f62ff7;/home/runner/work/user-interfaces/user-interfaces/apps/map-kiosk/src/app/explore.component.ts */\n:host {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--base-200);\n}\nhr {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */\n"] }]
  }], null, { onMouse: [{
    type: HostListener,
    args: ["window:mousedown"]
  }], onTouch: [{
    type: HostListener,
    args: ["window:touchstart"]
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/map-kiosk/src/app/explore.component.ts", lineNumber: 304 });
})();
export {
  ExploreComponent
};
//# debugId=547906c5-4127-5098-92e2-e501539a59ac
//# sourceMappingURL=explore.component-VYMTU5LM.js.map
