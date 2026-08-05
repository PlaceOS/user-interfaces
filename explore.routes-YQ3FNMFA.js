import {
  generateQRCode
} from "./chunk-EIIGDJY2.js";
import "./chunk-Q4DQ62MM.js";
import {
  AssetStateService,
  BookingFormService,
  CalendarService,
  CustomTooltipComponent,
  Desk,
  DurationFieldComponent,
  MAT_DIALOG_DATA,
  MapViewer,
  MatAutocomplete,
  MatAutocompleteModule,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger,
  MatTooltip,
  MatTooltipModule,
  UserSearchFieldComponent,
  filterResourcesFromRules,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  newBookingFromCalendarEvent,
  openRecurringClashModal,
  queryCalendarAvailability,
  queryParkingSpacesForZones,
  queryParkingUsers,
  querySpaceFreeBusy,
  requestSpacesForZone,
  rulesForResource,
  searchStaff,
  setHours,
  setMinutes,
  showStaff
} from "./chunk-OOZZBJEX.js";
import {
  FormField,
  MatCheckbox,
  MatCheckboxModule,
  SanitizePipe,
  disabled,
  form,
  required,
  validate,
  validateAssetRequestsForResource
} from "./chunk-TBCNUAQW.js";
import {
  ANIMATION_SHOW_CONTRACT_EXPAND,
  ActivatedRoute,
  AssetRequest,
  AsyncHandler,
  AsyncPipe,
  AuthenticatedImageDirective,
  BidiModule,
  Booking,
  CalendarEvent,
  ChangeDetectorRef,
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  DestroyRef,
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
  HotkeysService,
  IconComponent,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  Ju,
  LOCAL_TIMEZONE,
  MAP_FEATURE_DATA,
  Ma,
  MapsPeopleService,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatInput,
  MatInputModule,
  MatOption,
  MatProgressSpinner,
  MatProgressSpinnerModule,
  MatRipple,
  MatRippleModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NavigationEnd,
  NgComponentOutlet,
  NgControl,
  NgControlStatus,
  NgControlStatusGroup,
  NgModel,
  NgModule,
  NgTemplateOutlet,
  NgZone,
  OrganisationService,
  Output,
  Pipe,
  ReactiveFormsModule,
  Router,
  RouterLink,
  RouterModule,
  Rt,
  RuntimeError,
  S,
  SETTING_KEYS,
  SafePipe,
  SettingsService,
  SlicePipe,
  Space,
  SpacePipe,
  TemplateRef,
  TranslatePipe,
  UpperCasePipe,
  User,
  VERSION,
  ViewChild,
  ViewChildren,
  ViewEncapsulation,
  VirtualKeyboardComponent,
  Wl,
  Wu,
  _CdkPrivateStyleLoader,
  _IdGenerator,
  _MatInternalFormField,
  _StructuralStylesLoader,
  _animationsDisabled,
  add,
  addDays,
  addMinutes,
  addMonths,
  addYears,
  ae,
  afterNextRender,
  alignDateToBookableHours,
  assertInInjectionContext,
  assertNotInReactiveContext,
  booleanAttribute,
  ce,
  computed,
  constructFrom,
  createBookingsForEvent,
  currentUser,
  currentUserIsLoaded,
  currentUserLoaded,
  debounced,
  differenceInCalendarMonths,
  differenceInMilliseconds,
  differenceInMinutes,
  ee,
  effect,
  enUS,
  endOfDay,
  endOfDayInTimezone,
  endOfMonth,
  f,
  firstValueWhere,
  flatten,
  format,
  formatTimeInTimezone,
  forwardRef,
  fromZonedTime,
  getAllDayTimeRange,
  getDefaultOptions,
  getInvalidSignalFields,
  getRoundingMethod,
  getTimeInTimezone,
  getTimezoneOffsetInMilliseconds,
  getTimezoneOffsetString,
  getUnixTime,
  guardModelUndefinedWrites,
  i18n,
  ia,
  inject,
  input,
  isAfter,
  isBefore,
  isEmptyUser,
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
  oa,
  onFieldChange,
  output,
  queryAllBookings,
  queryBookings,
  queryResourceAvailability,
  resource,
  roundToNearestMinutes,
  saveBooking,
  set,
  setClassMetadata,
  setDefaultCreator,
  setTimeInTimezone,
  setting,
  settingSignal,
  setupFormTimeSync,
  shiftColorTowards,
  showGuest,
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
  viewChildren,
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
  ɵɵdefinePipe,
  ɵɵdomElement,
  ɵɵdomElementContainerEnd,
  ɵɵdomElementContainerStart,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementContainer,
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
  ɵɵpureFunction1,
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
  ɵɵsanitizeHtml,
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
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-CGZLA5VW.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/@angular/core/fesm2022/rxjs-interop.mjs
/**
 * @license Angular v22.0.1
 * (c) 2010-2026 Google LLC. https://angular.dev/
 * License: MIT
 */
function toSignal(source, options) {
  typeof ngDevMode !== "undefined" && ngDevMode && assertNotInReactiveContext(toSignal, "Invoking `toSignal` causes new subscriptions every time. Consider moving `toSignal` outside of the reactive context and read the signal value where needed.");
  const requiresCleanup = !options?.manualCleanup;
  if (ngDevMode && requiresCleanup && !options?.injector) {
    assertInInjectionContext(toSignal);
  }
  const cleanupRef = requiresCleanup ? options?.injector?.get(DestroyRef) ?? inject(DestroyRef) : null;
  const equal = makeToSignalEqual(options?.equal);
  let state;
  if (options?.requireSync) {
    state = signal({
      kind: 0
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  } else {
    state = signal({
      kind: 1,
      value: options?.initialValue
    }, __spreadValues({
      equal
    }, ngDevMode ? createDebugNameObject(options?.debugName, "state") : void 0));
  }
  let destroyUnregisterFn;
  const sub = source.subscribe({
    next: (value) => state.set({
      kind: 1,
      value
    }),
    error: (error) => {
      state.set({
        kind: 2,
        error
      });
      destroyUnregisterFn?.();
    },
    complete: () => {
      destroyUnregisterFn?.();
    }
  });
  if (options?.requireSync && state().kind === 0) {
    throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
  }
  destroyUnregisterFn = cleanupRef?.onDestroy(sub.unsubscribe.bind(sub));
  return computed(() => {
    const current = state();
    switch (current.kind) {
      case 1:
        return current.value;
      case 2:
        throw current.error;
      case 0:
        throw new RuntimeError(601, (typeof ngDevMode === "undefined" || ngDevMode) && "`toSignal()` called with `requireSync` but `Observable` did not emit synchronously.");
    }
  }, __spreadValues({
    equal: options?.equal
  }, ngDevMode ? createDebugNameObject(options?.debugName, "source") : void 0));
}
function makeToSignalEqual(userEquality = Object.is) {
  return (a, b) => a.kind === 1 && b.kind === 1 && userEquality(a.value, b.value);
}
function createDebugNameObject(toSignalDebugName, internalSignalDebugName) {
  return {
    debugName: `toSignal${toSignalDebugName ? "#" + toSignalDebugName : ""}.${internalSignalDebugName}`
  };
}

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

// libs/components/src/lib/map-zoom-controls.component.ts
var MapZoomControlsComponent = class _MapZoomControlsComponent {
  constructor() {
    this.zoom = model(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset = model(
      0,
      ...ngDevMode ? [{ debugName: "reset" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function MapZoomControlsComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _MapZoomControlsComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _MapZoomControlsComponent, selectors: [["map-zoom-controls"]], inputs: { zoom: [1, "zoom"], reset: [1, "reset"] }, outputs: { zoom: "zoomChange", reset: "resetChange" }, decls: 13, vars: 9, consts: [[1, "bg-base-100", "divide-base-300", "border-base-300", "absolute", "right-2", "bottom-16", "flex", "flex-col", "divide-y", "overflow-hidden", "rounded-lg", "border", "shadow-md"], ["icon", "", "matRipple", "", "matTooltipPosition", "left", 1, "hover:bg-base-200", 3, "click", "matTooltip"]], template: function MapZoomControlsComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_1_listener($event) {
          ctx.zoom.set(ctx.zoom() * 1.1);
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(3, "icon");
        \u0275\u0275text(4, "add");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "button", 1);
        \u0275\u0275pipe(6, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_5_listener($event) {
          ctx.zoom.set(ctx.zoom() * (10 / 11));
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(7, "icon");
        \u0275\u0275text(8, "remove");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "button", 1);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275listener("click", function MapZoomControlsComponent_Template_button_click_9_listener($event) {
          ctx.reset.set(ctx.reset() + 1);
          return $event.stopPropagation();
        });
        \u0275\u0275elementStart(11, "icon");
        \u0275\u0275text(12, "refresh");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(2, 3, "EXPLORE.ZOOM_IN"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(6, 5, "EXPLORE.ZOOM_OUT"));
        \u0275\u0275advance(4);
        \u0275\u0275property("matTooltip", \u0275\u0275pipeBind1(10, 7, "EXPLORE.ZOOM_RESET"));
      }
    }, dependencies: [IconComponent, MatRippleModule, MatRipple, MatTooltipModule, MatTooltip, TranslatePipe], styles: ["\nbutton[_ngcontent-%COMP%] {\n  border-radius: 0;\n}\n/*# sourceMappingURL=map-zoom-controls.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MapZoomControlsComponent, [{
    type: Component,
    args: [{ selector: "map-zoom-controls", template: `
        <div
            class="bg-base-100 divide-base-300 border-base-300 absolute right-2 bottom-16 flex flex-col divide-y overflow-hidden rounded-lg border shadow-md"
        >
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_IN' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * 1.1); $event.stopPropagation()"
            >
                <icon>add</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_OUT' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="zoom.set(zoom() * (10 / 11)); $event.stopPropagation()"
            >
                <icon>remove</icon>
            </button>
            <button
                icon
                matRipple
                [matTooltip]="'EXPLORE.ZOOM_RESET' | translate"
                matTooltipPosition="left"
                class="hover:bg-base-200"
                (click)="reset.set(reset() + 1); $event.stopPropagation()"
            >
                <icon>refresh</icon>
            </button>
        </div>
    `, imports: [IconComponent, TranslatePipe, MatRippleModule, MatTooltipModule], styles: ["/* angular:styles/component:css;3acd8ef39876159d073e8897fa9cab043ba04b0b5279b833ba6e69fa287e4f39;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/map-zoom-controls.component.ts */\nbutton {\n  border-radius: 0;\n}\n/*# sourceMappingURL=map-zoom-controls.component.css.map */\n"] }]
  }], null, { zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }, { type: Output, args: ["resetChange"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(MapZoomControlsComponent, { className: "MapZoomControlsComponent", filePath: "libs/components/src/lib/map-zoom-controls.component.ts", lineNumber: 55 });
})();

// libs/components/src/lib/dynamic-map.component.ts
var _c0 = ["mapContainer"];
var _c1 = ["feature"];
var _c2 = ["*"];
var _forTrack0 = ($index, $item) => $item.key;
var _forTrack1 = ($index, $item) => $item.selector;
var _forTrack2 = ($index, $item) => $item.name;
var _forTrack3 = ($index, $item) => $item.text;
var _forTrack4 = ($index, $item) => $item.track_id || $index;
function DynamicMapComponent_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 7);
  }
  if (rf & 2) {
    \u0275\u0275property("diameter", 48);
  }
}
function DynamicMapComponent_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_FAILED_TO_LOAD"), " ");
  }
}
function DynamicMapComponent_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicMapComponent_Conditional_2_Conditional_0_Template, 1, 1, "mat-spinner", 7);
    \u0275\u0275conditionalCreate(1, DynamicMapComponent_Conditional_2_Conditional_1_Template, 4, 3, "div", 3);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r0.loading() ? 0 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.error() ? 1 : -1);
  }
}
function DynamicMapComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "EXPLORE.MAP_EMPTY"), " ");
  }
}
function DynamicMapComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "map-zoom-controls", 9);
    \u0275\u0275twoWayListener("zoomChange", function DynamicMapComponent_Conditional_5_Template_map_zoom_controls_zoomChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.zoom, $event) || (ctx_r0.zoom = $event);
      return \u0275\u0275resetView($event);
    })("resetChange", function DynamicMapComponent_Conditional_5_Template_map_zoom_controls_resetChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      \u0275\u0275twoWayBindingSet(ctx_r0.reset, $event) || (ctx_r0.reset = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275twoWayProperty("zoom", ctx_r0.zoom)("reset", ctx_r0.reset);
  }
}
function DynamicMapComponent_Conditional_6_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 13);
    \u0275\u0275listener("click", function DynamicMapComponent_Conditional_6_For_5_Template_button_click_0_listener() {
      const section_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r0.toggleDebugSection(section_r4.key));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const section_r4 = ctx.$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classProp("bg-white/30", ctx_r0.debug_section() === section_r4.key);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", section_r4.key, " (", section_r4.count, ") ");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 18);
  }
  if (rf & 2) {
    const prop_r6 = \u0275\u0275nextContext().$implicit;
    \u0275\u0275styleProp("background", prop_r6.color);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Conditional_3_Template, 1, 2, "span", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const prop_r6 = ctx.$implicit;
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(" " + prop_r6.name + ": " + prop_r6.value + ";");
    \u0275\u0275advance();
    \u0275\u0275conditional(prop_r6.color ? 3 : -1);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(2, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_For_3_Template, 4, 2, "div", 16, _forTrack2);
    \u0275\u0275elementStart(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const block_r7 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(block_r7.selector + " {");
    \u0275\u0275advance();
    \u0275\u0275repeater(block_r7.props);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate("}");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.debug_filter().trim() ? "No matches" : "No styles");
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_For_1_Template, 6, 2, null, null, _forTrack1, false, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_ForEmpty_2_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.debug_style_blocks());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span", 21);
    \u0275\u0275text(1, " [missing on map] ");
    \u0275\u0275elementEnd();
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275listener("mouseenter", function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template_div_mouseenter_0_listener() {
      const entry_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.highlightDebugEntry(entry_r9));
    })("mouseleave", function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template_div_mouseleave_0_listener() {
      const entry_r9 = \u0275\u0275restoreView(_r8).$implicit;
      const ctx_r0 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r0.clearDebugHighlight(entry_r9));
    });
    \u0275\u0275elementStart(1, "span");
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Conditional_3_Template, 2, 0, "span", 21);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const entry_r9 = ctx.$implicit;
    \u0275\u0275classProp("bg-red-500/20", entry_r9.missing)("text-red-200", entry_r9.missing)("cursor-default", entry_r9.ref);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(entry_r9.text);
    \u0275\u0275advance();
    \u0275\u0275conditional(entry_r9.missing ? 3 : -1);
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "span");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.debug_detail_empty_text());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_For_1_Template, 4, 8, "div", 19, _forTrack3, false, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_ForEmpty_2_Template, 2, 1, "span");
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275repeater(ctx_r0.debug_detail_entries());
  }
}
function DynamicMapComponent_Conditional_6_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "input", 14);
    \u0275\u0275twoWayListener("ngModelChange", function DynamicMapComponent_Conditional_6_Conditional_6_Template_input_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r5);
      const ctx_r0 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r0.debug_filter, $event) || (ctx_r0.debug_filter = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(1, "div", 15);
    \u0275\u0275conditionalCreate(2, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_2_Template, 3, 1)(3, DynamicMapComponent_Conditional_6_Conditional_6_Conditional_3_Template, 3, 1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r0.debug_filter);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.debug_section() === "styles" ? 2 : 3);
  }
}
function DynamicMapComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5)(1, "div", 10);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div", 11);
    \u0275\u0275repeaterCreate(4, DynamicMapComponent_Conditional_6_For_5_Template, 2, 4, "button", 12, _forTrack0);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DynamicMapComponent_Conditional_6_Conditional_6_Template, 4, 2);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", ctx_r0.debug_text(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r0.debug_sections());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.debug_section() ? 6 : -1);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_ng_container_0_Template, 1, 0, "ng-container", 24);
  }
  if (rf & 2) {
    const ctx_r9 = \u0275\u0275nextContext(2);
    const element_r11 = ctx_r9.$implicit;
    const \u0275$index_81_r12 = ctx_r9.$index;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngComponentOutlet", element_r11.content)("ngComponentOutletInjector", ctx_r0.injectors()[\u0275$index_81_r12]);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 23);
    \u0275\u0275pipe(1, "sanitize");
  }
  if (rf & 2) {
    const element_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(1, 1, element_r11.content), \u0275\u0275sanitizeHtml);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_ng_container_0_Template, 1, 0, "ng-container", 25);
  }
  if (rf & 2) {
    const element_r11 = \u0275\u0275nextContext(2).$implicit;
    \u0275\u0275property("ngTemplateOutlet", element_r11.content)("ngTemplateOutletContext", element_r11.data);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 22, 1);
    \u0275\u0275conditionalCreate(3, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_3_Template, 1, 2, "ng-container")(4, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_4_Template, 2, 3, "div", 23)(5, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Case_5_Template, 1, 2, "ng-container");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    let tmp_17_0;
    const element_r11 = \u0275\u0275nextContext().$implicit;
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275attribute("el-id", element_r11.location)("track-id", element_r11.track_id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional((tmp_17_0 = ctx_r0.contentType(element_r11.content)) === "component" ? 3 : tmp_17_0 === "html" ? 4 : 5);
  }
}
function DynamicMapComponent_Conditional_7_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, DynamicMapComponent_Conditional_7_For_2_Conditional_0_Template, 6, 3, "div");
  }
  if (rf & 2) {
    const element_r11 = ctx.$implicit;
    \u0275\u0275conditional(element_r11 ? 0 : -1);
  }
}
function DynamicMapComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6);
    \u0275\u0275repeaterCreate(1, DynamicMapComponent_Conditional_7_For_2_Template, 1, 1, null, null, _forTrack4);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.features());
  }
}
var DynamicMapComponent = class _DynamicMapComponent {
  toggleDebugSection(section) {
    this.debug_section.update((current) => current === section ? null : section);
  }
  highlightDebugEntry(entry) {
    if (!entry.ref || entry.missing)
      return;
    this._map_viewer?.setDebugHighlight(entry.ref);
  }
  clearDebugHighlight(entry) {
    if (!entry.ref || entry.missing)
      return;
    this._map_viewer?.setDebugHighlight("");
  }
  constructor() {
    this._injector = inject(Injector);
    this._zone = inject(NgZone);
    this._map_viewer = null;
    this._last_src = "";
    this._map_container = viewChild(
      "mapContainer",
      ...ngDevMode ? [{ debugName: "_map_container" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._feature_elements = viewChildren("feature", __spreadValues({}, ngDevMode ? { debugName: "_feature_elements" } : (
      /* istanbul ignore next */
      {}
    )));
    this.src = input(
      "",
      ...ngDevMode ? [{ debugName: "src" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.zoom = model(
      1,
      ...ngDevMode ? [{ debugName: "zoom" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.center = model(
      { x: 0.5, y: 0.5 },
      ...ngDevMode ? [{ debugName: "center" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.fixedResolution = input(
      0,
      ...ngDevMode ? [{ debugName: "fixedResolution" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug = model(
      false,
      ...ngDevMode ? [{ debugName: "debug" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.reset = model(
      0,
      ...ngDevMode ? [{ debugName: "reset" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.styles = input(
      {},
      ...ngDevMode ? [{ debugName: "styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = input(
      [],
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.labels = input(
      [],
      ...ngDevMode ? [{ debugName: "labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.actions = input(
      [],
      ...ngDevMode ? [{ debugName: "actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      {},
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.focus = input(
      "",
      ...ngDevMode ? [{ debugName: "focus" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.mapInfo = output();
    this.injectors = signal(
      [],
      ...ngDevMode ? [{ debugName: "injectors" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      false,
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._element_mappings = signal(
      null,
      ...ngDevMode ? [{ debugName: "_element_mappings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._hotkey_sub = inject(HotkeysService).listen(["Control", "Alt", "Shift", "KeyG"], () => this.debug.update((state) => !state));
    this._debug_state = signal(
      null,
      ...ngDevMode ? [{ debugName: "_debug_state" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_text = computed(
      () => {
        const state = this._debug_state();
        if (!state)
          return "";
        const center = this.center();
        const status = this.error() ? "error" : this.loading() ? "loading" : this.src() ? "ready" : "no map";
        return [
          "MAP DEBUG (Ctrl+Alt+Shift+G)",
          `src:      ${this._middleTruncate(this.src().split("/").pop() || "\u2014", 36)}`,
          `status:   ${status}`,
          `texture:  ${state.texture} (${state.texture_mode})`,
          `aspect:   ${state.aspect}`,
          `view:     ${state.view}`,
          `zoom:     ${this.zoom().toFixed(2)}`,
          `center:   ${center.x.toFixed(3)}, ${center.y.toFixed(3)}`,
          `pointer:  ${state.pointer}`,
          `hover:    ${state.hover}`,
          `elements: ${state.elements}`,
          `overlays: ${state.overlays}`,
          `draw:     ${state.draw}`
        ].join("\n");
      },
      ...ngDevMode ? [{ debugName: "debug_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_section = signal(
      null,
      ...ngDevMode ? [{ debugName: "debug_section" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_filter = signal(
      "",
      ...ngDevMode ? [{ debugName: "debug_filter" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_sections = computed(
      () => [
        { key: "styles", count: Object.keys(this.styles() || {}).length },
        { key: "features", count: (this.features() || []).length },
        { key: "labels", count: (this.labels() || []).length },
        { key: "actions", count: (this.actions() || []).length }
      ],
      ...ngDevMode ? [{ debugName: "debug_sections" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_style_blocks = computed(
      () => {
        if (this.debug_section() !== "styles")
          return [];
        const blocks = Object.entries(this.styles() || {}).map(([selector, style]) => ({
          selector,
          props: Object.entries(style).map(([name, value]) => {
            const value_text = `${value}`;
            const color = value_text.replace("!important", "").trim();
            return {
              name,
              value: value_text,
              color: typeof CSS !== "undefined" && CSS.supports("color", color) ? color : ""
            };
          })
        }));
        const filter = this.debug_filter().trim().toLowerCase();
        if (!filter)
          return blocks;
        return blocks.filter(({ selector, props }) => selector.toLowerCase().includes(filter) || props.some((prop) => `${prop.name}: ${prop.value}`.toLowerCase().includes(filter)));
      },
      ...ngDevMode ? [{ debugName: "debug_style_blocks" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_detail_entries = computed(
      () => {
        const section = this.debug_section();
        let entries;
        switch (section) {
          case "features":
            entries = this._describeFeatures();
            break;
          case "labels":
            entries = this._describeLabels();
            break;
          case "actions":
            entries = this._describeActions();
            break;
          default:
            return [];
        }
        const filter = this.debug_filter().trim().toLowerCase();
        if (filter) {
          entries = entries.filter((entry) => entry.text.toLowerCase().includes(filter));
        }
        return entries;
      },
      ...ngDevMode ? [{ debugName: "debug_detail_entries" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.debug_detail_empty_text = computed(
      () => {
        const section = this.debug_section();
        const filter = this.debug_filter().trim();
        return filter ? "No matches" : `No ${section}`;
      },
      ...ngDevMode ? [{ debugName: "debug_detail_empty_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const src = this.src();
      if (src && this._map_viewer) {
        if (this._last_src && this._last_src !== src) {
          this.zoom.set(1);
          this.center.set({ x: 0.5, y: 0.5 });
        }
        this._last_src = src;
        this._loadMap(src);
      }
    });
    effect(() => {
      const styles = this.styles() || {};
      if (this._map_viewer) {
        this._applyStyles(styles);
      }
    });
    effect(() => {
      const features = this.features() || [];
      const labels = this.labels() || [];
      const feature_elements = this._feature_elements();
      if (this._map_viewer) {
        this._applyOverlays(features, labels, feature_elements);
      }
    });
    effect(() => {
      this.features();
      this._updateInjectors();
    });
    effect(() => {
      const actions = this.actions() || [];
      if (this._map_viewer) {
        this._applyActions(actions);
      }
    });
    effect(() => {
      const zoom_val = this.zoom() ?? 1;
      this._map_viewer?.setZoom(zoom_val);
    });
    effect(() => {
      const center_val = this.center() ?? { x: 0.5, y: 0.5 };
      this._map_viewer?.setCenter(__spreadValues({}, center_val));
    });
    effect(() => {
      const megapixels = this.fixedResolution() ?? 0;
      this._map_viewer?.setFixedResolution(megapixels);
    });
    effect(() => {
      const options = this.options();
      this._map_viewer?.setOptions(options || {});
    });
    effect(() => {
      if (this.reset() > 0) {
        this.zoom.set(1);
        this.center.set({ x: 0.5, y: 0.5 });
      }
    });
    effect(() => {
      const focus = this.focus();
      if (focus && this._element_mappings()) {
        this._map_viewer?.focusOn(focus);
      }
    });
    effect((onCleanup) => {
      this._map_viewer?.setDebug(this.debug());
      if (!this.debug()) {
        this._debug_state.set(null);
        this.debug_section.set(null);
        this.debug_filter.set("");
        return;
      }
      const update = () => {
        const viewer = this._map_viewer;
        if (!viewer)
          return;
        const image = viewer.map_image;
        const info = viewer.debug_info;
        this._debug_state.set({
          texture: image ? `${image.width}\xD7${image.height}` : "none",
          texture_mode: viewer.texture_mode,
          aspect: (viewer.map?.aspect_ratio || 1).toFixed(3),
          view: `${viewer.container.clientWidth}\xD7${viewer.container.clientHeight}`,
          pointer: info.pointer ? `${info.pointer.x.toFixed(3)}, ${info.pointer.y.toFixed(3)}` : "\u2014",
          hover: info.hover_id ? `#${info.hover_id}` : "\u2014",
          elements: viewer.map?.element_bounds.size || 0,
          overlays: viewer.overlay_count,
          draw: `${info.last_draw_ms.toFixed(1)}ms \xB7 ${info.draws_last_second}/s`
        });
      };
      update();
      const interval = setInterval(update, 250);
      onCleanup(() => clearInterval(interval));
    });
  }
  ngOnInit() {
    const container = this._map_container()?.nativeElement;
    if (!container)
      return;
    this._map_viewer = this._zone.runOutsideAngular(() => new MapViewer(container));
    this._map_viewer.onViewChange = (event) => this._zone.run(() => {
      this.zoom.set(event.zoom);
      this.center.set(event.center);
    });
  }
  ngOnDestroy() {
    this._hotkey_sub.unsubscribe();
    this._map_viewer?.destroy();
    this._map_viewer = null;
  }
  /**
   * Determine the type of content for rendering in template
   */
  contentType(content) {
    return typeof content === "string" ? "html" : content instanceof TemplateRef ? "template" : "component";
  }
  _loadMap(src) {
    const simp_url = src.toLowerCase();
    if (!simp_url.includes("svg") && !simp_url.includes("upload"))
      return;
    this.loading.set(true);
    this.error.set(false);
    this._map_viewer.setMap(src).then(() => {
      if (this.src() !== src || !this._map_viewer)
        return;
      this.loading.set(false);
      const mappings = Object.fromEntries(this._map_viewer.map?.element_bounds || []);
      this._element_mappings.set(mappings);
      this.mapInfo.emit(mappings);
    }).catch((e) => {
      console.warn("[MAP] Failed to load map.", e);
      if (this.src() !== src)
        return;
      this.loading.set(false);
      this.error.set(true);
    });
  }
  _applyStyles(styles) {
    if (!this._map_viewer)
      return;
    const style_map = {};
    for (const [selector, style_obj] of Object.entries(styles)) {
      style_map[selector] = this._objectToCssText(style_obj);
    }
    this._map_viewer.setStyles(style_map);
  }
  _objectToCssText(style_obj) {
    return Object.entries(style_obj).map(([prop, value]) => {
      const kebab_prop = prop.replace(/[A-Z]/g, (match) => `-${match.toLowerCase()}`);
      const important = `${value}`.includes("!important") ? "" : " !important";
      return `${kebab_prop}: ${value}${important}`;
    }).join("; ");
  }
  _applyOverlays(features, labels, feature_elements) {
    if (!this._map_viewer)
      return;
    const overlays = [];
    for (let i = 0; i < features.length; i++) {
      const feature = features[i];
      if (!feature.location)
        continue;
      let contents;
      const content_type = this.contentType(feature.content);
      if (content_type === "component" || content_type === "template") {
        const rendered_el = feature_elements[i]?.nativeElement;
        if (!rendered_el)
          continue;
        contents = rendered_el;
      } else if (feature.content instanceof HTMLElement) {
        contents = feature.content;
      } else if (typeof feature.content === "string") {
        contents = feature.content;
      } else {
        continue;
      }
      const fill_bounds = feature.hover || feature.full_size;
      overlays.push({
        ref: feature.location,
        type: fill_bounds ? "box" : "point",
        contents,
        scale_with_zoom: !fill_bounds,
        hover: feature.hover,
        z_index: feature.z_index
      });
    }
    for (const label of labels) {
      if (!label.location || !label.content)
        continue;
      const classes = ["map-label", ...label.css_class || []].join(" ");
      overlays.push({
        ref: label.location,
        type: "point",
        contents: `<label class="${classes}">${label.content}</label>`,
        scale_with_zoom: true,
        min_zoom: label.zoom_level,
        z_index: label.z_index
      });
    }
    this._map_viewer.setOverlays(overlays);
  }
  _applyActions(actions) {
    if (!this._map_viewer)
      return;
    const map_actions = [];
    for (const action of actions) {
      if (!action.id)
        continue;
      const events = this._convertActionTypes(action.action);
      if (events.length === 0)
        continue;
      const callback = (p) => {
        const synthetic_event = new CustomEvent("mapaction", {
          detail: { point: p }
        });
        action.callback(synthetic_event, { x: p.x, y: p.y });
      };
      map_actions.push({
        ref: action.id,
        events,
        priority: action.priority,
        callback
      });
    }
    this._map_viewer.setActions(map_actions);
  }
  _convertActionTypes(action_types) {
    const types = Array.isArray(action_types) ? action_types : [action_types];
    const events = [];
    for (const type of types) {
      switch (type) {
        case "click":
          events.push("click");
          break;
        case "mousedown":
        case "touchstart":
          events.push("pointerdown");
          break;
        case "mouseup":
        case "touchend":
          events.push("pointerup");
          break;
        case "enter":
          events.push("pointerenter");
          break;
        case "leave":
          events.push("pointerleave");
          break;
        case "*":
          events.push("click", "pointerdown", "pointerup", "pointerenter", "pointerleave");
          break;
        default:
          events.push(type);
      }
    }
    return unique(events);
  }
  /** Truncate the middle of a string with "..." to fit the given length */
  _middleTruncate(value, max_length) {
    if (value.length <= max_length)
      return value;
    const keep = max_length - 3;
    const front = Math.ceil(keep / 2);
    const back = keep - front;
    return `${value.slice(0, front)}...${value.slice(value.length - back)}`;
  }
  _formatLocation(location2) {
    return typeof location2 === "string" ? `#${location2}` : `${location2.x.toFixed(3)}, ${location2.y.toFixed(3)}`;
  }
  _debugRef(ref) {
    if (typeof ref !== "string") {
      return { location: this._formatLocation(ref), missing: false };
    }
    return {
      ref,
      location: this._formatLocation(ref),
      missing: !!this._element_mappings() && !this._element_mappings()?.[ref]
    };
  }
  _describeFeatures() {
    return (this.features() || []).map((feature, index) => {
      const target = this._debugRef(feature.location);
      const content = feature.content instanceof HTMLElement ? "element" : feature.content ? this.contentType(feature.content) : "none";
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          feature.track_id ? `track: ${feature.track_id}` : "",
          `content: ${content}`,
          feature.hover ? "hover" : "",
          feature.full_size ? "full-size" : "",
          feature.z_index != null ? `z: ${feature.z_index}` : "",
          feature.data && Object.keys(feature.data).length ? `data: ${Object.keys(feature.data).join(", ")}` : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _describeLabels() {
    return (this.labels() || []).map((label, index) => {
      const target = this._debugRef(label.location);
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          `"${label.content}"`,
          label.zoom_level != null ? `zoom \u2265 ${label.zoom_level}` : "",
          label.css_class?.length ? `class: ${label.css_class.join(" ")}` : "",
          label.z_index != null ? `z: ${label.z_index}` : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _describeActions() {
    return (this.actions() || []).map((action, index) => {
      const types = Array.isArray(action.action) ? action.action : [action.action];
      const target = this._debugRef(action.id);
      return {
        ref: target.ref,
        missing: target.missing,
        text: [
          `${index}: ${target.location}`,
          types.join(", "),
          action.priority != null ? `priority: ${action.priority}` : "",
          action.zone ? "zone" : ""
        ].filter(Boolean).join(" \xB7 ")
      };
    });
  }
  _updateInjectors() {
    const old_injectors = new Map(untracked(() => this.injectors()).map((injector) => [
      injector.get(MAP_FEATURE_DATA)?.track_id,
      injector
    ]));
    this.injectors.set((this.features() || []).map((f2) => f2.track_id && old_injectors.get(f2.track_id) || Injector.create({
      providers: [
        {
          provide: MAP_FEATURE_DATA,
          useValue: __spreadValues({
            track_id: f2.track_id
          }, f2.data)
        }
      ],
      parent: this._injector
    })));
  }
  static {
    this.\u0275fac = function DynamicMapComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DynamicMapComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DynamicMapComponent, selectors: [["dynamic-map"]], viewQuery: function DynamicMapComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._map_container, _c0, 5)(ctx._feature_elements, _c1, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { src: [1, "src"], zoom: [1, "zoom"], center: [1, "center"], fixedResolution: [1, "fixedResolution"], debug: [1, "debug"], reset: [1, "reset"], styles: [1, "styles"], features: [1, "features"], labels: [1, "labels"], actions: [1, "actions"], options: [1, "options"], focus: [1, "focus"] }, outputs: { zoom: "zoomChange", center: "centerChange", debug: "debugChange", reset: "resetChange", mapInfo: "mapInfo" }, ngContentSelectors: _c2, decls: 8, vars: 6, consts: [["mapContainer", ""], ["feature", ""], ["tabindex", "0", "role", "map", 1, "absolute", "inset-0"], [1, "absolute", "inset-0", "flex", "items-center", "justify-center"], [3, "zoom", "reset"], [1, "absolute", "top-2", "right-2", "z-40", "flex", "max-h-[80%]", "max-w-[32rem]", "flex-col", "rounded", "bg-black/80", "font-mono", "text-[11px]", "leading-4", "text-white"], ["hidden", ""], [1, "absolute", "z-30", 3, "diameter"], [1, "opacity-30"], [3, "zoomChange", "resetChange", "zoom", "reset"], [1, "pointer-events-none", "p-2", "whitespace-pre"], [1, "flex", "gap-1", "px-2", "pb-2"], [1, "rounded", "border", "border-white/30", "px-1", "hover:bg-white/20", 3, "bg-white/30"], [1, "rounded", "border", "border-white/30", "px-1", "hover:bg-white/20", 3, "click"], ["placeholder", "Filter...", 1, "mx-2", "mb-2", "rounded", "border", "border-white/30", "bg-white/10", "px-1", "outline-none", "placeholder:text-white/40", 3, "ngModelChange", "ngModel"], [1, "overflow-auto", "border-t", "border-white/20", "p-2", "whitespace-pre", "select-text"], [1, "flex", "items-center"], [1, "ml-1.5", "inline-block", "h-2.5", "w-2.5", "rounded-sm", "border", "border-white/40", 3, "background"], [1, "ml-1.5", "inline-block", "h-2.5", "w-2.5", "rounded-sm", "border", "border-white/40"], [1, "rounded", "px-1", 3, "bg-red-500/20", "text-red-200", "cursor-default"], [1, "rounded", "px-1", 3, "mouseenter", "mouseleave"], [1, "ml-1", "text-red-300"], [1, "pointer-events-none", "h-full", "w-full"], [3, "innerHTML"], [4, "ngComponentOutlet", "ngComponentOutletInjector"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]], template: function DynamicMapComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275element(0, "div", 2, 0);
        \u0275\u0275conditionalCreate(2, DynamicMapComponent_Conditional_2_Template, 2, 2)(3, DynamicMapComponent_Conditional_3_Template, 4, 3, "div", 3);
        \u0275\u0275projection(4);
        \u0275\u0275conditionalCreate(5, DynamicMapComponent_Conditional_5_Template, 1, 2, "map-zoom-controls", 4);
        \u0275\u0275conditionalCreate(6, DynamicMapComponent_Conditional_6_Template, 7, 2, "div", 5);
        \u0275\u0275conditionalCreate(7, DynamicMapComponent_Conditional_7_Template, 3, 0, "div", 6);
      }
      if (rf & 2) {
        \u0275\u0275classProp("hidden", !ctx.src());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.src() ? 2 : 3);
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.options()?.controls ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.debug() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.injectors().length ? 7 : -1);
      }
    }, dependencies: [
      CommonModule,
      NgComponentOutlet,
      NgTemplateOutlet,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MapZoomControlsComponent,
      TranslatePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nmat-spinner[_ngcontent-%COMP%] {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=dynamic-map.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DynamicMapComponent, [{
    type: Component,
    args: [{ selector: "dynamic-map", template: `
        <div
            #mapContainer
            tabindex="0"
            role="map"
            class="absolute inset-0"
            [class.hidden]="!src()"
        ></div>
        @if (src()) {
            @if (loading()) {
                <mat-spinner class="absolute z-30" [diameter]="48" />
            }
            @if (error()) {
                <div class="absolute inset-0 flex items-center justify-center">
                    <div class="opacity-30">
                        {{ 'EXPLORE.MAP_FAILED_TO_LOAD' | translate }}
                    </div>
                </div>
            }
        } @else {
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="opacity-30">
                    {{ 'EXPLORE.MAP_EMPTY' | translate }}
                </div>
            </div>
        }
        <ng-content />
        @if (options()?.controls) {
            <map-zoom-controls [(zoom)]="zoom" [(reset)]="reset" />
        }
        @if (debug()) {
            <div
                class="absolute top-2 right-2 z-40 flex max-h-[80%] max-w-[32rem] flex-col rounded bg-black/80 font-mono text-[11px] leading-4 text-white"
            >
                <div class="pointer-events-none p-2 whitespace-pre">
                    {{ debug_text() }}
                </div>
                <div class="flex gap-1 px-2 pb-2">
                    @for (section of debug_sections(); track section.key) {
                        <button
                            class="rounded border border-white/30 px-1 hover:bg-white/20"
                            [class.bg-white/30]="
                                debug_section() === section.key
                            "
                            (click)="toggleDebugSection(section.key)"
                        >
                            {{ section.key }} ({{ section.count }})
                        </button>
                    }
                </div>
                @if (debug_section()) {
                    <input
                        class="mx-2 mb-2 rounded border border-white/30 bg-white/10 px-1 outline-none placeholder:text-white/40"
                        placeholder="Filter..."
                        [(ngModel)]="debug_filter"
                    />
                    <div
                        class="overflow-auto border-t border-white/20 p-2 whitespace-pre select-text"
                    >
                        @if (debug_section() === 'styles') {
                            @for (
                                block of debug_style_blocks();
                                track block.selector
                            ) {
                                <div>{{ block.selector + ' {' }}</div>
                                @for (prop of block.props; track prop.name) {
                                    <div class="flex items-center">
                                        <span>{{
                                            '  ' +
                                                prop.name +
                                                ': ' +
                                                prop.value +
                                                ';'
                                        }}</span>
                                        @if (prop.color) {
                                            <span
                                                class="ml-1.5 inline-block h-2.5 w-2.5 rounded-sm border border-white/40"
                                                [style.background]="prop.color"
                                            ></span>
                                        }
                                    </div>
                                }
                                <div>{{ '}' }}</div>
                            } @empty {
                                <span>{{
                                    debug_filter().trim()
                                        ? 'No matches'
                                        : 'No styles'
                                }}</span>
                            }
                        } @else {
                            @for (
                                entry of debug_detail_entries();
                                track entry.text
                            ) {
                                <div
                                    class="rounded px-1"
                                    [class.bg-red-500/20]="entry.missing"
                                    [class.text-red-200]="entry.missing"
                                    [class.cursor-default]="entry.ref"
                                    (mouseenter)="highlightDebugEntry(entry)"
                                    (mouseleave)="clearDebugHighlight(entry)"
                                >
                                    <span>{{ entry.text }}</span>
                                    @if (entry.missing) {
                                        <span class="ml-1 text-red-300">
                                            [missing on map]
                                        </span>
                                    }
                                </div>
                            } @empty {
                                <span>{{ debug_detail_empty_text() }}</span>
                            }
                        }
                    </div>
                }
            </div>
        }
        @if (injectors().length) {
            <div hidden>
                @for (
                    element of features();
                    track $any(element).track_id || $index;
                    let i = $index
                ) {
                    @if (element) {
                        <div>
                            <div
                                #feature
                                class="pointer-events-none h-full w-full"
                                [attr.el-id]="element.location"
                                [attr.track-id]="$any(element).track_id"
                            >
                                @switch (contentType(element.content)) {
                                    @case ('component') {
                                        <ng-container
                                            *ngComponentOutlet="
                                                $any(element.content);
                                                injector: injectors()[i]
                                            "
                                        ></ng-container>
                                    }
                                    @case ('html') {
                                        <div
                                            [innerHTML]="
                                                element.content | sanitize
                                            "
                                        ></div>
                                    }
                                    @default {
                                        <ng-container
                                            *ngTemplateOutlet="
                                                $any(element.content);
                                                context: $any(element).data
                                            "
                                        ></ng-container>
                                    }
                                }
                            </div>
                        </div>
                    }
                }
            </div>
        }
    `, imports: [
      CommonModule,
      FormsModule,
      TranslatePipe,
      SanitizePipe,
      MatProgressSpinnerModule,
      MapZoomControlsComponent
    ], styles: ["/* angular:styles/component:css;e76799c5a4b056820df2f2f8571cac7c4ed809c9aa76d565965bc043e79b2d5d;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/dynamic-map.component.ts */\n:host {\n  display: block;\n  position: relative;\n  width: 100%;\n  height: 100%;\n}\nmat-spinner {\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n/*# sourceMappingURL=dynamic-map.component.css.map */\n"] }]
  }], () => [], { _map_container: [{ type: ViewChild, args: ["mapContainer", { isSignal: true }] }], _feature_elements: [{ type: ViewChildren, args: ["feature", __spreadProps(__spreadValues({}, {}), { isSignal: true })] }], src: [{ type: Input, args: [{ isSignal: true, alias: "src", required: false }] }], zoom: [{ type: Input, args: [{ isSignal: true, alias: "zoom", required: false }] }, { type: Output, args: ["zoomChange"] }], center: [{ type: Input, args: [{ isSignal: true, alias: "center", required: false }] }, { type: Output, args: ["centerChange"] }], fixedResolution: [{ type: Input, args: [{ isSignal: true, alias: "fixedResolution", required: false }] }], debug: [{ type: Input, args: [{ isSignal: true, alias: "debug", required: false }] }, { type: Output, args: ["debugChange"] }], reset: [{ type: Input, args: [{ isSignal: true, alias: "reset", required: false }] }, { type: Output, args: ["resetChange"] }], styles: [{ type: Input, args: [{ isSignal: true, alias: "styles", required: false }] }], features: [{ type: Input, args: [{ isSignal: true, alias: "features", required: false }] }], labels: [{ type: Input, args: [{ isSignal: true, alias: "labels", required: false }] }], actions: [{ type: Input, args: [{ isSignal: true, alias: "actions", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], focus: [{ type: Input, args: [{ isSignal: true, alias: "focus", required: false }] }], mapInfo: [{ type: Output, args: ["mapInfo"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DynamicMapComponent, { className: "DynamicMapComponent", filePath: "libs/components/src/lib/dynamic-map.component.ts", lineNumber: 247 });
})();

// libs/explore/src/lib/explore-state.service.ts
var ExploreStateService = class _ExploreStateService {
  get positions() {
    return this._positions();
  }
  get active_level() {
    return this._level();
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._initialised = this._org.initialised;
    this._active_levels = this._org.active_levels;
    this._active_building = this._org.active_building;
    this._overrides = computed(
      () => this._settings.overrides instanceof Function ? this._settings.overrides() : [],
      ...ngDevMode ? [{ debugName: "_overrides" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._level = signal(
      null,
      ...ngDevMode ? [{ debugName: "_level" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._positions = signal(
      {
        zoom: 1,
        center: { x: 0.5, y: 0.5 }
      },
      ...ngDevMode ? [{ debugName: "_positions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._styles = signal(
      {},
      ...ngDevMode ? [{ debugName: "_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._features = signal(
      {},
      ...ngDevMode ? [{ debugName: "_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._actions = signal(
      {},
      ...ngDevMode ? [{ debugName: "_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._labels = signal(
      {},
      ...ngDevMode ? [{ debugName: "_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        is_public: false,
        disable: ["zones", "devices", "sensors"]
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._message = signal(
      "",
      ...ngDevMode ? [{ debugName: "_message" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.level = this._level.asReadonly();
    this.message = this._message.asReadonly();
    this._spaces = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({
        level: this._level(),
        initialised: this._initialised()
      }),
      loader: ({ params: { level, initialised } }) => initialised ? ia({
        zone_id: level?.id || this._org.organisation.id,
        limit: 50
      }).then(({ data }) => data.map((_) => new Space(_))).catch((_) => []) : Promise.resolve([])
    }));
    this.spaces = computed(
      () => this._spaces.value() ?? [],
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_url = computed(
      () => this._level()?.map_id || "",
      ...ngDevMode ? [{ debugName: "map_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_positions = this._positions.asReadonly();
    this.map_features = computed(
      () => {
        this._overrides();
        const features = this._features();
        const disable = this._disabledGroups(this._options(), "features");
        let list = [];
        for (const key in features) {
          if (disable.includes(key) || key === "zones-canvas" && disable.includes("zones"))
            continue;
          list = list.concat(features[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_actions = computed(
      () => {
        this._overrides();
        const actions = this._actions();
        const disable = this._disabledGroups(this._options(), "actions");
        let list = [];
        for (const key in actions) {
          if (disable.includes(key))
            continue;
          list = list.concat(actions[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_actions" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_labels = computed(
      () => {
        this._overrides();
        const labels = this._labels();
        const disable = this._disabledGroups(this._options(), "labels");
        let list = [];
        for (const key in labels) {
          if (disable.includes(key))
            continue;
          list = list.concat(labels[key]);
        }
        return list;
      },
      ...ngDevMode ? [{ debugName: "map_labels" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_styles = computed(
      () => {
        this._overrides();
        const styles = this._styles();
        const disable = this._disabledGroups(this._options(), "styles");
        let style_mappings = { text: { display: "none" } };
        for (const key in styles) {
          if (disable.includes(key))
            continue;
          style_mappings = __spreadValues(__spreadValues({}, style_mappings), styles[key]);
        }
        if (disable.includes("zones")) {
          style_mappings["#zones"] = { display: "none" };
          style_mappings["#Zones"] = { display: "none" };
        }
        return style_mappings;
      },
      ...ngDevMode ? [{ debugName: "map_styles" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = this._options.asReadonly();
    effect(() => {
      if (!this._initialised())
        return;
      const level_list = this._active_levels();
      if (!level_list)
        return;
      untracked(() => {
        const level = this._level();
        const has_level = level_list.find((lvl) => level?.id === lvl.id);
        if (!has_level && level_list.length) {
          this.setLevel(level_list[0].id);
        }
      });
    });
    effect(() => {
      if (!this._initialised())
        return;
      const bld = this._active_building();
      if (!bld)
        return;
      untracked(() => this.setOptions({}));
    });
  }
  setOptions(options) {
    const old_options = this._options();
    const disable = unique([
      ...this._normaliseDisabledOption(options.disable ?? old_options.disable),
      ...this._normaliseDisabledSetting("app.explore.disable")
    ]);
    this._options.set(__spreadProps(__spreadValues(__spreadValues({}, old_options), options), {
      disable,
      disable_styles: this._normaliseDisabledOption(options.disable_styles ?? old_options.disable_styles),
      disable_actions: this._normaliseDisabledOption(options.disable_actions ?? old_options.disable_actions),
      disable_labels: this._normaliseDisabledOption(options.disable_labels ?? old_options.disable_labels),
      disable_features: this._normaliseDisabledOption(options.disable_features ?? old_options.disable_features)
    }));
  }
  reset() {
    this._styles.set({});
    this._features.set({});
    this._labels.set({});
    this._actions.set({});
    this._options.set({
      is_public: false,
      disable: unique([
        "zones",
        "devices",
        "sensors",
        ...this._normaliseDisabledSetting("app.explore.disable")
      ])
    });
    this.setPositions(1, { x: 0.5, y: 0.5 });
  }
  setLevel(zone_id) {
    const lvl = this._org.levelWithID([zone_id]);
    if (lvl)
      this._level.set(lvl);
  }
  setStyles(name, styles) {
    this._styles.update((map) => __spreadProps(__spreadValues({}, map), { [name]: styles }));
  }
  setFeatures(name, features) {
    this._features.update((map) => __spreadProps(__spreadValues({}, map), { [name]: features }));
  }
  setActions(name, actions) {
    this._actions.update((map) => __spreadProps(__spreadValues({}, map), { [name]: actions }));
  }
  setLabels(name, labels) {
    this._labels.update((map) => __spreadProps(__spreadValues({}, map), { [name]: labels }));
  }
  setPositions(zoom, center) {
    this._positions.set({ zoom, center });
  }
  has(type, id, exclude = []) {
    if (type === "style") {
      const styles_map = untracked(this._styles);
      for (const group in styles_map) {
        if (exclude.includes(group))
          continue;
        const styles = styles_map[group];
        if (id in styles || `#${id}` in styles)
          return true;
      }
    } else if (type === "feature") {
      const feature_map = untracked(this._features);
      for (const group in feature_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of feature_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    } else if (type === "action") {
      const actions_map = untracked(this._actions);
      for (const group in actions_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of actions_map[group]) {
          if (feature.id === id)
            return true;
        }
      }
    } else if (type === "label") {
      const labels_map = untracked(this._labels);
      for (const group in labels_map) {
        if (exclude.includes(group))
          continue;
        for (const feature of labels_map[group]) {
          if (feature.location === id)
            return true;
        }
      }
    }
    return false;
  }
  /**
   * Combined list of disabled groups for the given resource type, merging
   * the current map options with the `app.explore.disable*` settings
   */
  _disabledGroups(options, type) {
    return unique([
      ...this._normaliseDisabledOption(options.disable),
      ...this._normaliseDisabledSetting("app.explore.disable"),
      ...this._normaliseDisabledOption(options[`disable_${type}`]),
      ...this._normaliseDisabledSetting(`app.explore.disable_${type}`)
    ]);
  }
  _normaliseDisabledSetting(name) {
    return this._normaliseDisabledOption(this._settings.get(name));
  }
  _normaliseDisabledOption(value) {
    if (value instanceof Array)
      return value.filter((_) => !!_);
    if (typeof value === "string") {
      return value.split(",").map((_) => _.trim()).filter((_) => !!_);
    }
    return [];
  }
  static {
    this.\u0275fac = function ExploreStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreStateService, factory: _ExploreStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

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
var _c02 = ["*"];
var _forTrack02 = ($index, $item) => $item.id;
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
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
    this._time_options.set(this.generateAvailableTimes(this.date(), !this.no_past_times() || disabled2, this.step()));
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
    ]), \u0275\u0275InheritDefinitionFeature, \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c02, decls: 15, vars: 12, consts: [["menu", "matMenu"], ["type", "button", "time-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], [1, "text-2xl"], [1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "value"], ["mat-menu-item", "", "disabled", ""], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click", "value"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, ""], [1, "text-xs", "opacity-30"], [1, "ml-2", "text-2xl"]], template: function TimeFieldComponent_Template(rf, ctx) {
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
        \u0275\u0275repeaterCreate(11, TimeFieldComponent_For_12_Template, 8, 9, "button", 7, _forTrack02, false, TimeFieldComponent_ForEmpty_13_Template, 2, 0, "div", 8);
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

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
var APP_VERSION = VERSION.raw || VERSION.version || VERSION.hash;
function appName() {
  return setting("app.name") || setting("app.short_name") || "PlaceOS";
}
function withAppVersion(data) {
  return __spreadProps(__spreadValues({}, data), {
    extension_data: __spreadProps(__spreadValues({}, data.extension_data || {}), {
      app_name: appName(),
      app_version: APP_VERSION
    })
  });
}
async function createEvent(data) {
  const item = await S(`${EVENTS_ENDPOINT}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
async function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  const item = await (method === "patch" ? ae : ce)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
var saveEvent = async (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return ee(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
}
async function querySpaceAvailability(id_list, start, duration, ignore, type, ignore_period = [0, 0]) {
  const end = addMinutes(start, duration).valueOf();
  const [spaces, ignore_check] = await Promise.all([
    queryCalendarAvailability({
      system_ids: id_list.join(),
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    }).catch(() => []),
    ignore && id_list.includes(ignore) ? querySpaceFreeBusy({
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      system_ids: ignore
    }) : Promise.resolve([])
  ]);
  const short_list = id_list.map((id) => !!spaces.find((s) => s.id === id || s.resource?.id === id));
  for (const space of ignore_check) {
    if (!id_list.includes(space.id))
      continue;
    const availability = space.availability.filter((i) => !(i.date === ignore_period[0] && i.duration === ignore_period[1]));
    short_list[id_list.indexOf(space.id)] = !availability.find((i) => i.status !== "free");
  }
  return short_list;
}
async function findEventClashes(event, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e4 }));
  try {
    const list = await S(`${EVENTS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, event.toJSON());
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}

// libs/events/src/lib/utilities.ts
var BOOKING_DATE = add(setMinutes(setHours(/* @__PURE__ */ new Date(), 6), 0), { days: -1 });
function eventFormValue(event = new CalendarEvent()) {
  return {
    id: event.id || "",
    ical_uid: event.ical_uid || "",
    host: event.host || event.organiser?.email || currentUser()?.email || "",
    organiser: event.organiser || { email: event.host || "" },
    creator: event.creator || currentUser()?.email || "",
    calendar: event.calendar || "",
    attendees: event.attendees || [],
    resources: event.resources || [],
    title: event.title || "",
    body: event.body || "",
    private: event.private ?? false,
    date: event.date ?? 0,
    duration: event.duration ?? 0,
    all_day: event.all_day ?? false,
    date_end: event.date_end ?? 0,
    recurring: event.recurring ?? false,
    recurrence: event.recurrence ?? null,
    recurring_event_id: event.recurring_event_id || "",
    master: event.master ?? null,
    attachments: event.attachments ?? null,
    catering: event.extension_data?.catering || [],
    catering_notes: event.extension_data?.catering?.[0]?.notes || "",
    catering_charge_code: event.extension_data?.catering?.[0]?.charge_code || "",
    setup_time: event.setup_time || 0,
    breakdown_time: event.breakdown_time || 0,
    assets: event.extension_data?.assets || [],
    visitor_type: event.extension_data?.visitor_type ?? null,
    location: event.location || "",
    visibility: event.visibility || "normal",
    needs_space: true,
    needs_parking: event.extension_data?.needs_parking || false,
    event_type: event.extension_data?.event_type || "",
    category: event.extension_data?.category || "",
    tags: event.extension_data?.tags || [],
    update_master: false,
    system: event.system ?? null,
    attendance_type: event.extension_data?.attendance_type || "ONSITE",
    timezone: event.timezone || LOCAL_TIMEZONE,
    shared_event: event.extension_data?.shared_event || false,
    view_access: event.extension_data?.view_access || "OPEN",
    images: event.extension_data?.images || [],
    featured: event.extension_data?.featured || false,
    meeting_provider: event.meeting_provider || null
  };
}
function generateEventForm(event = new CalendarEvent(), settings, injector) {
  if (!event)
    event = new CalendarEvent();
  const lock_start_time = signal(
    !!event.id && (event.state === "started" || event.state === "in_progress"),
    ...ngDevMode ? [{ debugName: "lock_start_time" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const has_id = !!event.id;
  const notes_required = () => !!(settings?.get("app.events.catering_notes_required") || settings?.value("require_catering_notes"));
  const model2 = signal(
    eventFormValue(event),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model2, eventFormValue(new CalendarEvent()));
  const event_form = form(model2, (p) => {
    required(p.host);
    required(p.date);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    required(p.catering_notes, {
      when: ({ valueOf }) => !!valueOf(p.catering)?.length && notes_required()
    });
    disabled(p.host, { when: () => has_id });
    disabled(p.organiser, { when: () => has_id });
    disabled(p.date, { when: () => lock_start_time() });
    disabled(p.assets, { when: ({ valueOf }) => !valueOf(p.resources)?.length });
    disabled(p.duration, { when: ({ valueOf }) => !!valueOf(p.all_day) });
  }, { injector });
  onFieldChange(model2, (v) => v.organiser, (organiser) => (
    // Coalesce to '' so the `host` sub-field is never removed from the
    // FieldTree (an undefined value breaks its `required`/`[formField]`).
    model2.update((m) => __spreadProps(__spreadValues({}, m), { host: organiser?.email ?? "" }))
  ), injector);
  onFieldChange(model2, (v) => v.resources, (resources) => model2.update((m) => __spreadProps(__spreadValues({}, m), {
    system: resources?.length ? resources[0] : null
  })), injector);
  onFieldChange(model2, (v) => v.date, (date) => {
    const recurrence = model2().recurrence;
    if (!recurrence?.pattern)
      return;
    if (recurrence._pattern !== "custom_display" && recurrence._pattern !== "none") {
      model2.update((m) => __spreadProps(__spreadValues({}, m), {
        recurrence: __spreadProps(__spreadValues({}, m.recurrence), {
          days_of_week: [new Date(date).getDay()]
        })
      }));
    }
  }, injector);
  const setCateringTime = () => {
    const value = model2();
    if (!value.catering?.length || !value.date)
      return;
    const event2 = {
      date: value.all_day ? startOfDay(value.date) : value.date,
      duration: value.all_day ? 24 * 60 : value.duration
    };
    if (value.catering.every((order) => +order.event?.date === +event2.date && order.event?.duration === event2.duration))
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      catering: (m.catering || []).map((order) => __spreadProps(__spreadValues({}, order), {
        event: event2
      }))
    }));
  };
  onFieldChange(model2, (v) => v.catering, setCateringTime, injector);
  const time_sync = setupFormTimeSync(model2, { on_time_change: setCateringTime }, injector);
  return { model: model2, form: event_form, time_sync, lock_start_time };
}
function newCalendarEventFromBooking(booking) {
  let attendees = [
    {
      id: booking.user_id,
      name: booking.user_name,
      email: booking.user_email,
      organizer: true
    }
  ];
  if (booking.booking_type === "visitor") {
    attendees.push(new User({
      name: booking.asset_name || booking.description,
      email: booking.asset_id,
      checked_in: booking.checked_in
    }));
  }
  attendees = attendees.concat(booking.attendees);
  return new CalendarEvent(__spreadProps(__spreadValues(__spreadValues({}, booking), booking.extension_data), {
    attendees,
    id: booking.id || booking.extension_data.id,
    host: booking.user_email,
    from_bookings: true
  }));
}

// libs/form-fields/src/lib/date-calendar.component.ts
var _forTrack03 = ($index, $item) => $item.id;
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
        \u0275\u0275repeaterCreate(13, DateCalendarComponent_For_14_Template, 3, 4, "div", 7, _forTrack03);
        \u0275\u0275pipe(15, "slice");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "div", 8);
        \u0275\u0275repeaterCreate(17, DateCalendarComponent_For_18_Template, 5, 18, "button", 9, _forTrack03);
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
var _c03 = ["*"];
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
    if (new_date < Date.now()) {
      new_date = Date.now();
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
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
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
    ]), \u0275\u0275InheritDefinitionFeature], ngContentSelectors: _c03, decls: 15, vars: 8, consts: [["calendar_picker", ""], [1, "flex", "items-center", "gap-1"], ["type", "button", "customTooltip", "", "yPosition", "top", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "flex-1", "items-center", "justify-between", "rounded-sm", "border", 3, "content", "disabled"], [1, "flex", "w-1/2", "flex-1", "flex-col", "truncate", "px-4", "py-2", "text-left", "leading-tight"], [1, "text-base", "font-normal"], [1, "opacity-30"], [1, "truncate", "text-xs", "opacity-30"], [1, "flex", "h-10", "w-10", "items-center", "justify-center", "text-2xl"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "disabled"], [1, "error", "text-error", "h-5", "p-1", "text-xs"], ["type", "button", "icon", "", "matRipple", "", 1, "border-error", "text-error", "flex", "h-12", "w-12", "items-center", "justify-center", "rounded-sm", "border", 3, "click", "disabled"], [1, "bg-base-100", "relative", "w-[18rem]", "rounded-sm", "px-2", "py-4"], [3, "ngModelChange", "ngModel", "from", "to", "offset_weekday"]], template: function DateFieldComponent_Template(rf, ctx) {
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

// libs/users/src/lib/user.pipe.ts
var USER_LIST = [];
var INFLIGHT_REQUESTS = /* @__PURE__ */ new Map();
var EMPTY_USER = {};
async function fetchUser(user_id) {
  let user = await showStaff(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  user = await showGuest(user_id).catch(() => null);
  if (user) {
    USER_LIST.push(user);
    return user;
  }
  return EMPTY_USER;
}
var UserPipe = class _UserPipe {
  /**
   * Get details of the user with the given ID
   * @param user_id ID or Email of the user
   */
  async transform(user_id) {
    if (!user_id)
      return EMPTY_USER;
    const user = USER_LIST.find(({ id, email }) => id === user_id || email === user_id);
    if (user)
      return user;
    const existing = INFLIGHT_REQUESTS.get(user_id);
    if (existing)
      return existing;
    const request = fetchUser(user_id).finally(() => INFLIGHT_REQUESTS.delete(user_id));
    INFLIGHT_REQUESTS.set(user_id, request);
    return request;
  }
  static {
    this.\u0275fac = function UserPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _UserPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "user", type: _UserPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserPipe, [{
    type: Pipe,
    args: [{
      name: "user"
    }]
  }], null, null);
})();

// libs/events/src/lib/event-link-modal.component.ts
var EventLinkModalComponent = class _EventLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this._dialog = inject(MatDialogRef);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
    this.has_actioned = signal(
      false,
      ...ngDevMode ? [{ debugName: "has_actioned" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  close() {
    if (!this.has_actioned()) {
      return notifyError("You need to select a calendar option to finish creating this booking");
    }
    this._dialog.close(true);
  }
  static {
    this.\u0275fac = function EventLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventLinkModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _EventLinkModalComponent, selectors: [["event-link-modal"]], decls: 29, vars: 28, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "click", "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["btn", "", "matRipple", "", 1, "w-64", 3, "click"], ["icon", "", "matRipple", "", 1, "absolute", "top-2", "right-0", 3, "mat-dialog-close"]], template: function EventLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
        \u0275\u0275pipe(5, "sanitize");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_4_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275element(6, "img", 3);
        \u0275\u0275elementStart(7, "span");
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(10, "a", 2);
        \u0275\u0275pipe(11, "sanitize");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_10_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275element(12, "img", 4);
        \u0275\u0275elementStart(13, "span");
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(16, "a", 2);
        \u0275\u0275pipe(17, "safe");
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_a_click_16_listener() {
          return ctx.has_actioned.set(true);
        });
        \u0275\u0275elementStart(18, "icon", 5);
        \u0275\u0275text(19, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(20, "span");
        \u0275\u0275text(21);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(23, "button", 6);
        \u0275\u0275listener("click", function EventLinkModalComponent_Template_button_click_23_listener() {
          return ctx.close();
        });
        \u0275\u0275text(24);
        \u0275\u0275pipe(25, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(26, "button", 7)(27, "icon");
        \u0275\u0275text(28, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 9, "BOOKINGS.LINK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(5, 11, ctx.outlook_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "BOOKINGS.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(11, 16, ctx.google_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(15, 19, "BOOKINGS.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(17, 21, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(22, 24, "BOOKINGS.LINK_ICAL"));
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(25, 26, "COMMON.CLOSE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.has_actioned());
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe,
      SafePipe,
      SanitizePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventLinkModalComponent, [{
    type: Component,
    args: [{ selector: "event-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKINGS.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link | sanitize: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKINGS.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
                (click)="has_actioned.set(true)"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKINGS.LINK_ICAL' | translate }}</span>
            </a>
            <button class="w-64" btn matRipple (click)="close()">
                {{ 'COMMON.CLOSE' | translate }}
            </button>
        </div>
        <button
            icon
            matRipple
            [mat-dialog-close]="has_actioned()"
            class="absolute top-2 right-0"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe,
      SanitizePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/events/src/lib/event-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=event-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(EventLinkModalComponent, { className: "EventLinkModalComponent", filePath: "libs/events/src/lib/event-link-modal.component.ts", lineNumber: 91 });
})();

// libs/events/src/lib/event-form.service.ts
var BOOKING_URLS = [
  "book/rooms",
  "book/spaces",
  "book/meeting",
  "schedule/view",
  "confirm/success",
  "upcoming"
];
var PERSISTED_EVENT_CONTEXT_URLS = ["landing"];
var IGNORED_DETAIL_FIELDS = [
  "attendees",
  "body",
  "system",
  "date_end",
  "organiser",
  "recurrence",
  "resources"
];
function normaliseEventBody(body) {
  const template = document.createElement("template");
  template.innerHTML = body || "";
  const serialise = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      return (node.textContent || "").replace(/\u200b/g, "");
    }
    if (node.nodeType !== Node.ELEMENT_NODE)
      return "";
    const element = node;
    if (element.tagName === "BR")
      return "\n";
    const content = [...element.childNodes].map(serialise).join("");
    if (element.tagName === "DIV" || element.tagName === "P") {
      return `
${content}
`;
    }
    const tag = element.tagName.toLowerCase();
    const attributes = [...element.attributes].sort((a, b) => a.name.localeCompare(b.name)).map(({ name, value }) => ` ${name}="${value}"`).join("");
    return `<${tag}${attributes}>${content}</${tag}>`;
  };
  return [...template.content.childNodes].map(serialise).join("").replace(/[ \t]+\n|\n[ \t]+/g, "\n").replace(/\n+/g, "\n").trim();
}
var Tags;
(function(Tags2) {
  Tags2["Availability"] = "AVAILABILITY";
  Tags2["BookingRules"] = "BOOKING_RULES";
  Tags2["ListingRooms"] = "LIST_ROOMS";
  Tags2["PostBooking"] = "MAKING_BOOKING";
})(Tags || (Tags = {}));
var ROOM_CAPACITY_RANGES = {
  1: { min: 1, max: 2 },
  3: { min: 3, max: 4 },
  5: { min: 5, max: 8 },
  9: { min: 9, max: 999 }
};
var EventFormService = class _EventFormService extends AsyncHandler {
  get timezone() {
    return this._settings.get("app.events.use_building_timezone") ? this._org.building?.timezone || "" : "";
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  loadLastSuccess() {
    const event = new CalendarEvent(JSON.parse(sessionStorage?.getItem("PLACEOS.last_modified_event") || "{}"));
    this.last_success.set(event);
    return event;
  }
  get form() {
    return this._form;
  }
  get model() {
    return this._model;
  }
  get event() {
    return this._event();
  }
  get is_multiday() {
    return this._event()?.duration > 24 * 60;
  }
  get favorite_spaces() {
    return this._settings.get(SETTING_KEYS.FAVORITE_ROOMS) || [];
  }
  get book_internal() {
    return this._settings.get("app.events.use_bookings") === true;
  }
  get lone_space() {
    return this._settings.get("app.events.no_space_resource");
  }
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._router = inject(Router);
    this._assets = inject(AssetStateService);
    this._calendar = inject(CalendarService);
    this._dialog = inject(MatDialog);
    this._injector = inject(Injector);
    this._user_pipe = new UserPipe();
    this._view = signal(
      "form",
      ...ngDevMode ? [{ debugName: "_view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._options = signal(
      {
        date: Date.now(),
        zones: []
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._filters = signal(
      {
        capacity: -1,
        features: []
      },
      ...ngDevMode ? [{ debugName: "_filters" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._event = signal(
      new CalendarEvent(),
      ...ngDevMode ? [{ debugName: "_event" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_requests = /* @__PURE__ */ new Map();
    this._availability_requests = /* @__PURE__ */ new Map();
    this._form_ref = generateEventForm(void 0, this._settings, this._injector);
    this._form = this._form_ref.form;
    this._model = this._form_ref.model;
    this._initial_attendees = [];
    this._initial_event_details = "";
    this._space_pipe = new SpacePipe();
    this.notify_new_attendees_only = signal(
      false,
      ...ngDevMode ? [{ debugName: "notify_new_attendees_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_notify_new_attendees_only = computed(
      () => {
        const model2 = this._model();
        if (!model2.id)
          return false;
        const attendee_emails = model2.attendees.map((_) => (_.email || _).toLowerCase());
        return this._initial_attendees.every((_) => attendee_emails.includes(_)) && attendee_emails.some((_) => !this._initial_attendees.includes(_)) && this._eventDetails(model2) === this._initial_event_details;
      },
      ...ngDevMode ? [{ debugName: "can_notify_new_attendees_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.removeLoadingTag = (t) => this._loading.set(this._loading().replace(`[${t}]`, "").trim());
    this.addLoadingTag = (t) => t ? this._loading.set(`${this._loading().replace(`[${t}]`, "")}[${t}]`.trim()) : "";
    this._overflow = (id = "") => id ? this._settings.get(`app.events.overflow.${id}`) || {} : {
      setup: this._settings.get(`app.events.setup`) || 0,
      breakdown: this._settings.get(`app.events.breakdown`) || 0
    };
    this._host = (host, space) => this._settings.get("app.events.force_host") || (this._settings.get("app.events.room_as_host") ? space : "") || host;
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
    this.loading = this._loading.asReadonly();
    this.view = this._view.asReadonly();
    this.options = this._options.asReadonly();
    this.filters = this._filters.asReadonly();
    this.last_success = signal(
      null,
      ...ngDevMode ? [{ debugName: "last_success" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        const list = this._org.building_list();
        return list.length ? list.map((bld) => bld.id) : void 0;
      },
      loader: ({ params: ids }) => {
        this.addLoadingTag(Tags.BookingRules);
        return Promise.all(ids.map((id) => Wu(id, "room_booking_rules").then((_) => ({
          id,
          details: _.details instanceof Array ? _.details : []
        })).catch(() => ({ id, details: [] })))).then((building_rules) => {
          const mapping = {};
          for (const rules of building_rules) {
            mapping[rules.id] = rules.details;
          }
          return mapping;
        }).finally(() => this.removeLoadingTag(Tags.BookingRules));
      }
    }));
    this.booking_rules = computed(
      () => {
        return this._booking_rules_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_zone = computed(
      () => {
        const zone = this._settings.get("app.use_region") ? this._org.active_region() : this._org.active_building();
        return zone?.id || "";
      },
      ...ngDevMode ? [{ debugName: "_space_zone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_zone_debounced = debounced(this._space_zone, 300, { injector: this._injector, equal: Object.is });
    this._spaces_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_spaces_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._space_zone_debounced.value() || void 0 : void 0,
      loader: ({ params: zone_id }) => {
        this.addLoadingTag(Tags.ListingRooms);
        return this._requestSpaces(zone_id).then((list) => list.filter((_) => _.bookable && _.email && !_.room_booking_url)).catch(() => []).finally(() => this.removeLoadingTag(Tags.ListingRooms));
      }
    }));
    this.spaces = computed(
      () => {
        return this._spaces_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.spaces().map((_) => _.features))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_alerts_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_consumed() && this._requests_ready() ? this._org.organisation?.id || void 0 : void 0,
      loader: ({ params: id }) => Wu(id, "room_alerts").then((r) => r.details).catch(() => ({}))
    }));
    this.room_alerts = computed(
      () => {
        return this._room_alerts_resource.value() ?? {};
      },
      ...ngDevMode ? [{ debugName: "room_alerts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_spaces = computed(
      () => {
        if (!this._org.initialised())
          return [];
        let list = this.spaces();
        if (!list.length)
          return list;
        const filters = this._filters();
        let zones = this._options().zones;
        if (!zones?.length) {
          zones = this._settings.get("app.use_region") ? [this._org.region.id] : [this._org.building.id];
        }
        if (zones.length) {
          list = list.filter((space) => zones.find((id) => space.zones.includes(id)));
        }
        if (filters.show_fav) {
          list = list.filter(({ id }) => this.favorite_spaces.includes(id));
        }
        if (filters.capacity > 0) {
          const range = ROOM_CAPACITY_RANGES[filters.capacity] || {
            min: filters.capacity,
            max: 999
          };
          list = list.filter(({ capacity }) => capacity < 0 || capacity >= range.min && capacity <= range.max);
        }
        if (filters.features) {
          list = list.filter(({ features }) => filters.features.every((f2) => features.includes(f2)));
        }
        return list.sort((a, b) => {
          const cap_diff = (a.capacity || 0) - (b.capacity || 0);
          if (cap_diff !== 0)
            return cap_diff;
          return (a.display_name || a.name).localeCompare(b.display_name || b.name);
        });
      },
      ...ngDevMode ? [{ debugName: "filtered_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_params = computed(
      () => ({
        spaces: this.filtered_spaces(),
        rules: this.booking_rules(),
        event: this._event(),
        options: this._options()
      }),
      ...ngDevMode ? [{ debugName: "_available_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_params_debounced = debounced(this._available_params, 300, { injector: this._injector, equal: Object.is });
    this._available_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_consumed() || !this._requests_ready()) {
          return void 0;
        }
        if (this._spaces_resource.isLoading() || this._booking_rules_resource.isLoading()) {
          return void 0;
        }
        return this._available_params_debounced.value();
      },
      loader: ({ params: { spaces, rules, event, options } }) => {
        if (!spaces.length)
          return Promise.resolve([]);
        this.addLoadingTag(Tags.Availability);
        return this._computeAvailableSpaces(spaces, rules, event, options).catch(() => []).finally(() => this.removeLoadingTag(Tags.Availability));
      }
    }));
    this.available_spaces = computed(
      () => {
        return this._available_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "available_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._space_pipe.org = this._org;
    effect(() => {
      const overrides = this._settings.overrides();
      if (overrides?.length)
        this._applyDurationSettings();
    });
    this.init();
  }
  async init() {
    await currentUserLoaded();
    setDefaultCreator(currentUser());
    onFieldChange(this._model, (v) => v.date, (date) => this.setOptions({ date }), this._injector);
    onFieldChange(this._model, (v) => v.duration, (duration) => this.setOptions({ duration }), this._injector);
    onFieldChange(this._model, (v) => v.all_day, (all_day) => this.setOptions({ all_day }), this._injector);
    this.subscription("router.events", this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd && !BOOKING_URLS.some((_) => event.url.includes(_)) && !PERSISTED_EVENT_CONTEXT_URLS.some((_) => event.url.includes(_))) {
        this.clearForm();
      }
    }));
    const previous = {};
    effect(() => {
      const { date: raw_date, duration: raw_duration } = this._model();
      if (raw_date && raw_date !== previous["date"] || raw_duration && raw_duration !== previous["duration"]) {
        this._assets.setOptions({
          date: raw_date,
          duration: raw_duration
        });
        previous["date"] = raw_date;
        previous["duration"] = raw_duration;
      }
      this.storeForm();
    }, { injector: this._injector });
    this.loadLastSuccess();
  }
  /** Push the current building's duration and bookable-hours settings into the time sync. */
  _applyDurationSettings() {
    const handle = this._form_ref.time_sync;
    const period = this._settings.get("app.events.all_day_period");
    handle?.updateOptions({
      min_duration: this._settings.get("app.events.min_duration") ?? 30,
      max_duration: this._settings.get("app.events.max_duration") ?? 0,
      default_duration: this._settings.get("app.events.default_duration") ?? 60,
      custom_duration_options: this._settings.get("app.events.custom_duration_options") ?? [],
      bookable_hours: this._settings.get("app.events.bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period?.start,
      all_day_end: period?.end
    });
  }
  _allDayTimeRange(date) {
    const period = this._settings.get("app.events.all_day_period");
    return getAllDayTimeRange(date, this.timezone, period?.start, period?.end);
  }
  /** Resolve the bookable space list for the given zone */
  _requestSpaces(zone_id) {
    if (!zone_id)
      return Promise.resolve([]);
    const existing = this._space_requests.get(zone_id);
    if (existing)
      return existing;
    const request = new Promise((resolve) => {
      requestSpacesForZone(zone_id).subscribe({
        next: (list) => resolve(list || []),
        error: () => resolve([])
      });
    }).finally(() => this._space_requests.delete(zone_id));
    this._space_requests.set(zone_id, request);
    return request;
  }
  _queryAvailability(ids, date, duration, ignore, event) {
    const key = JSON.stringify({
      book_internal: this.book_internal,
      ids,
      date,
      duration,
      ignore,
      event: [event?.date, event?.duration]
    });
    const existing = this._availability_requests.get(key);
    if (existing)
      return existing;
    const request = (this.book_internal ? queryResourceAvailability(ids, date, duration, ignore, void 0) : querySpaceAvailability(ids, date, duration, ignore, void 0, [
      event?.date,
      event?.duration
    ])).finally(() => this._availability_requests.delete(key));
    this._availability_requests.set(key, request);
    return request;
  }
  /** Filter the given spaces down to those available for the selection */
  async _computeAvailableSpaces(spaces, rules, event, { date, duration, all_day }) {
    const period = all_day ? this._allDayTimeRange(date) : { date, duration };
    spaces = filterResourcesFromRules(spaces, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[this._org.building?.id] || []);
    const ignore = event?.resources[0]?.id || event?.system?.id || event?.id;
    const availability = await this._queryAvailability(spaces.map(({ id }) => id), period.date || 60, period.duration || 60, ignore, event);
    let list = spaces.filter((_, i) => availability[i]);
    list = filterResourcesFromRules(list, {
      date: period.date,
      duration: period.duration,
      resource: null,
      host: currentUser()
    }, rules[this._org.building?.id] || []);
    return list;
  }
  /** Resolve once the given resource has finished loading */
  _whenSettled(ref) {
    return firstValueWhere(ref.isLoading, (loading) => !loading, this._injector);
  }
  /** Resolve with the spaces available to book once the list has loaded */
  async listAvailableSpaces() {
    this._startNetwork();
    await this._whenSettled(this._available_resource);
    return this.available_spaces();
  }
  setView(value) {
    this.timeout("set_view", () => this._view.set(value), 50);
  }
  setFilters(filters) {
    this._filters.set(__spreadValues(__spreadValues({}, this._filters()), filters));
  }
  setOptions(options) {
    this._options.set(__spreadValues(__spreadValues({}, this._options()), options));
  }
  newForm(event = new CalendarEvent()) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.newForm(event));
      return;
    }
    this._startNetwork();
    this._calendar.loadCalendars();
    this._loading.set("");
    const lock_start_time = !!event.id && (event.state === "started" || event.state === "in_progress");
    this._form_ref.lock_start_time.set(lock_start_time);
    const value = eventFormValue(event);
    this.notify_new_attendees_only.set(false);
    value.assets = (event.extension_data.assets || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event })));
    this._model.set(value);
    this._form().reset();
    this._applyDurationSettings();
    this._setInitialEvent(this._model());
    if (!event.id)
      return;
    sessionStorage.setItem("PLACEOS.event", JSON.stringify(event?.toJSON() || {}));
    this._event.set(event);
  }
  resetForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.resetForm());
      return;
    }
    this._model.set(eventFormValue(this._event() || new CalendarEvent()));
    this._form().reset();
  }
  storeForm() {
    this.timeout("store", () => {
      sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(this._model() || {}));
    });
  }
  loadForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.loadForm());
      return;
    }
    this._startNetwork();
    this._calendar.loadCalendars();
    const event_data = JSON.parse(sessionStorage.getItem("PLACEOS.event") || "{}");
    const event = new CalendarEvent(event_data);
    this._event.set(event);
    const initial_value = eventFormValue(event);
    initial_value.assets = (event.extension_data.assets || []).map((_) => new AssetRequest(__spreadProps(__spreadValues({}, _), { event })));
    this._setInitialEvent(initial_value);
    this.notify_new_attendees_only.set(false);
    const form_data = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    this._model.update((m) => __spreadValues(__spreadValues(__spreadValues({}, m), initial_value), form_data));
  }
  clearForm() {
    sessionStorage.removeItem("PLACEOS.event");
    sessionStorage.removeItem("PLACEOS.event_form");
    this.newForm();
  }
  openEventLinkModal(force = false) {
    this._form().markAsTouched();
    if (!this._form().valid() && !force)
      return;
    const event = new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), { assets: [] }));
    const ref = this._dialog.open(EventLinkModalComponent, { data: event });
    ref.afterClosed().subscribe((d) => d ? this._router.navigate(["/"]) : "");
  }
  cancelPostForm() {
  }
  async postForm(force = false, ignore_space_check = [], ignore_owner = false, force_calendar = false) {
    const notify_new_attendees_only = this.notify_new_attendees_only() && this.can_notify_new_attendees_only();
    if (isEmptyUser({ email: this._model().host })) {
      this._model.update((m) => __spreadProps(__spreadValues({}, m), { host: currentUser().email }));
    }
    if (isEmptyUser({ email: this._model().creator })) {
      this._model.update((m) => __spreadProps(__spreadValues({}, m), { creator: currentUser().email }));
    }
    this._form().markAsTouched();
    if (this._form().invalid() && !force) {
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: getInvalidSignalFields(this._form, this._model).join(", ")
      });
    }
    const on_error = (e) => {
      this.removeLoadingTag(Tags.PostBooking);
      throw e;
    };
    this.addLoadingTag(Tags.PostBooking);
    try {
      const event = this._event();
      const space_list = this._model().resources || [];
      let spaces = space_list.filter((_) => !ignore_space_check.includes(_.id));
      const recurr = this._model().recurrence;
      const raw_value = this._model();
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        recurring: recurr?._pattern && recurr?._pattern !== "none"
      }));
      if (!this._model().recurring) {
        this._model.update((m) => __spreadProps(__spreadValues({}, m), { recurrence: null }));
      }
      const changed_spaces = spaces.filter((_) => !event.resources.find((s) => s.id === _.id));
      const all_day_period = raw_value.all_day ? this._allDayTimeRange(raw_value.date) : {
        date: raw_value.date,
        duration: raw_value.duration,
        date_end: raw_value.date_end
      };
      const has_time_changed = !event.id || event.date !== raw_value.date || event.duration !== raw_value.duration;
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        timezone: this.timezone || raw_value.timezone
      }));
      const bookable_hours = this._settings.get("app.events.bookable_hours");
      if (!isWithinBookableHours(raw_value.date, bookable_hours, raw_value.timezone)) {
        throw i18n("FORM.BOOKABLE_HOURS_ERROR");
      }
      if (raw_value.date_end && raw_value.duration > 24 * 60 && bookable_hours) {
        const { hours, minutes } = getTimeInTimezone(raw_value.date_end, raw_value.timezone);
        const end_minutes = hours * 60 + minutes;
        const within_end_window = end_minutes >= bookable_hours.start * 60 && end_minutes <= bookable_hours.end * 60;
        if (!within_end_window) {
          throw i18n("FORM.BOOKABLE_HOURS_ERROR");
        }
      }
      if (spaces.length && has_time_changed) {
        const space_list2 = await Promise.all(changed_spaces.map((_) => this._space_pipe.transform(_.email)));
        const date = raw_value.all_day ? all_day_period.date : raw_value.date;
        const duration = raw_value.all_day ? all_day_period.duration : raw_value.duration;
        await this._checkResourcesAvailable(space_list2, date, duration, event.ical_uid || event.id || "").catch(on_error);
        await this._checkResourceRules(space_list2, date, duration, this._host(this._model().host, spaces[0]?.email)).catch(on_error);
      } else if (!space_list.length && this.lone_space) {
        spaces = [await this._space_pipe.transform(this.lone_space)];
        this._model.update((m) => __spreadProps(__spreadValues({}, m), { resources: spaces }));
      }
      if (this._model().recurring && spaces.length) {
        await this._checkRecurringClashes(new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
          date: all_day_period.date,
          duration: all_day_period.duration,
          date_end: all_day_period.date_end,
          resources: spaces
        }))).catch(on_error);
      }
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        attendees: unique([...m.attendees, m.organiser || currentUser()], "email")
      }));
      if (!spaces.length && this._model().attendees.find((_) => _.is_external)) {
        this.removeLoadingTag(Tags.PostBooking);
        throw i18n("CALENDAR_EVENT.SPACE_EXTERNALS_ERROR");
      }
      const default_oflow = this._overflow();
      let [setup, breakdown] = [
        this._model().setup_time || default_oflow.setup,
        this._model().breakdown_time || default_oflow.breakdown
      ];
      for (const space of spaces) {
        const overflow = this._overflow(space.id);
        setup = Math.max(overflow.setup || 0, setup);
        breakdown = Math.max(overflow.breakdown || 0, breakdown);
      }
      this._model.update((m) => __spreadProps(__spreadValues({}, m), {
        setup_time: setup,
        breakdown_time: breakdown
      }));
      for (const order of this._model().catering || []) {
        order.notes = this._model().catering_notes;
        order.charge_code = this._model().catering_charge_code;
      }
      const query = event.id ? {
        system_id: event?.resources[0]?.id || event?.system?.id || spaces[0]?.id
      } : {};
      if (notify_new_attendees_only)
        query.notify_existing_attendees = false;
      const user_email = currentUser()?.email?.toLowerCase() || "";
      const source_calendar = event.calendar || event.host || event.creator || raw_value.calendar || raw_value.creator;
      const target_calendar = raw_value.host || raw_value.creator;
      const query_calendar = event.id ? source_calendar : target_calendar;
      const owner_fields = event.id ? [event.host, event.creator, event.calendar] : [raw_value.host, raw_value.creator, raw_value.calendar];
      const is_owner = owner_fields.some((_) => _?.toLowerCase?.() === user_email);
      if ((is_owner && !ignore_owner || force_calendar) && query_calendar)
        query.calendar = query_calendar;
      if (force_calendar)
        delete query.system_id;
      const processed_assets = (this._model().assets || []).map((_) => new AssetRequest(_).toJSON());
      const host = this._host(this._model().host, spaces[0]?.email);
      const ext = {
        department: this._model().organiser?.department || currentUser()?.department
      };
      if (this._model().host !== host)
        ext.host_override = this._model().host;
      const value = this._model();
      let created_event = await this._performBooking(new CalendarEvent(__spreadProps(__spreadValues({}, this._model()), {
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end: all_day_period.date_end,
        old_system: event?.system,
        host,
        title: this._model().title || "Space Booking",
        attendees: this._model().attendees.map((_) => {
          const v = __spreadValues({}, _);
          delete v.visit_expected;
          delete v.extension_data;
          return v;
        }),
        assets: processed_assets,
        extension_data: ext
      })), query).catch(on_error);
      const date_end = all_day_period.date_end || all_day_period.date + all_day_period.duration * 60 * 1e3;
      created_event = new CalendarEvent(__spreadProps(__spreadValues({}, created_event), {
        event_start: Math.floor(all_day_period.date / 1e3),
        event_end: Math.floor(date_end / 1e3),
        date: all_day_period.date,
        duration: all_day_period.duration,
        date_end,
        resources: space_list,
        system: space_list[0] || null
      }));
      const domain = (currentUser()?.email || "@").split("@")[1];
      const visitors = this._model().attendees.filter((user) => user.is_external && user.email !== event.host && !user.email.includes(domain) && user.visit_expected);
      if (visitors.length) {
        await createBookingsForEvent(created_event, "visitor", visitors).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      if (this._model().catering?.length) {
        await createBookingsForEvent(created_event, "catering-order", this._model().catering).catch((e) => this._removeBookingAfterError(!event.id, created_event, false, e));
      }
      const assets = this._model().assets || event.extension_data.assets || [];
      if (assets.length) {
        const requests = await validateAssetRequestsForResource(created_event, {
          date: all_day_period.date,
          duration: all_day_period.duration,
          host: value.host,
          all_day: value.all_day,
          location_name: spaces[0]?.display_name || spaces[0]?.name || "",
          location_id: spaces[0]?.id || "",
          zones: unique([
            this._org.organisation.id,
            this._org.region?.id,
            this._org.building?.id,
            ...spaces[0]?.zones || []
          ]).filter((_) => !!_),
          reset_state: has_time_changed
        }, assets, changed_spaces.length > 0 || has_time_changed).catch((e) => this._removeBookingAfterError(!event.id, created_event, true, e));
        if (!requests)
          throw i18n("CALENDAR_EVENT.ASSETS_INVALID_ERROR");
        await requests();
      }
      this.clearForm();
      sessionStorage.setItem("PLACEOS.last_modified_event", JSON.stringify(created_event.toJSON()));
      this.last_success.set(created_event);
      return created_event;
    } catch (e) {
      this.removeLoadingTag(Tags.PostBooking);
      if (this._isPermissionError(e))
        this._clearSavedHostChange();
      throw e;
    }
  }
  _isPermissionError(error) {
    const status = error?.status || error?.error?.status;
    if (status === 403)
      return true;
    const message = this._errorMessage(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
  }
  _errorMessage(error) {
    if (typeof error === "string")
      return error;
    if (error instanceof Error && error.message)
      return error.message;
    if (typeof error?.error === "string")
      return error.error;
    if (typeof error?.message === "string")
      return error.message;
    if (typeof error?.error?.message === "string")
      return error.error.message;
    return "";
  }
  _clearSavedHostChange() {
    const user = currentUser();
    if (!user)
      return;
    const host_data = {
      host: user.email,
      organiser: user,
      creator: user.email,
      calendar: user.email
    };
    this._model.update((m) => __spreadValues(__spreadValues({}, m), host_data));
    const saved_form = JSON.parse(sessionStorage.getItem("PLACEOS.event_form") || "{}");
    sessionStorage.setItem("PLACEOS.event_form", JSON.stringify(__spreadValues(__spreadValues({}, saved_form), host_data)));
  }
  async _checkResourcesAvailable(spaces, date, duration, ignore) {
    if (!spaces?.length)
      return true;
    const event = this._event();
    const id_list = spaces.map((_) => _.id);
    const response = await (this.book_internal ? queryResourceAvailability(id_list, date, duration, ignore) : querySpaceAvailability(id_list, date, duration, event?.resources[0]?.id || event?.system?.id || event?.id || void 0, void 0, [event?.date, event?.duration]));
    const unavailable = spaces.filter((_, i) => !response[i]);
    if (unavailable.length) {
      const names = unavailable.map((_) => _.display_name || _.name || _.email).join(", ");
      throw i18n(unavailable.length > 1 ? "CALENDAR_EVENT.SPACES_UNAVAILABLE" : "CALENDAR_EVENT.SPACE_UNAVAILABLE", { spaces: names });
    }
    return true;
  }
  async _checkResourceRules(spaces, date, duration, host) {
    const user = await this._bookingRulesHost(host);
    await this._whenSettled(this._booking_rules_resource);
    const rules = __spreadValues({}, this.booking_rules());
    for (const space of spaces) {
      const bld = this._org.buildings.find((b) => space.zones.includes(b.id));
      if (!bld || rules[bld.id])
        continue;
      const metadata = await Wu(bld.id, "room_booking_rules").catch(() => ({ details: [] }));
      rules[bld.id] = metadata.details instanceof Array ? metadata.details : [];
    }
    const space_rules = spaces.map((space) => {
      const bld = this._org.buildings.find((b) => space.zones.includes(b.id));
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id]);
    });
    const hidden = spaces.filter((_, i) => space_rules[i]?.hidden);
    if (hidden.length) {
      const names = hidden.map((_) => _.display_name || _.name || _.email).join(", ");
      throw i18n("CALENDAR_EVENT.SPACE_BOOKING_RULES_HIDDEN", { spaces: names }, hidden.length);
    }
    return true;
  }
  async _bookingRulesHost(host) {
    const current_user = currentUser();
    if (this._settings.get("app.events.force_current_user_for_booking_rules") === true || host === current_user.email) {
      return current_user;
    }
    return this._user_pipe.transform(host).catch(() => ({ email: host, name: host }));
  }
  /**
   * Check for clashing events in a recurring event series
   * @param event The calendar event to check for clashes
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(event) {
    if (!event.recurring) {
      return true;
    }
    const clashes = await findEventClashes(event, {
      include_clash_time: true
    });
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const event_start_unix = Math.floor(event.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === event_start_unix;
    if (is_first_instance_clash) {
      throw i18n("CALENDAR_EVENT.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this._settings.get("app.events.allow_recurring_instance_clashes") ?? false;
    if (!allow_clashes) {
      throw i18n("CALENDAR_EVENT.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  async _performBooking(event, query) {
    this._updateVisitorList(event.attendees);
    const old_system = event.old_system?.id || event.old_system?.email || event.resources[0]?.email;
    const system_id = event.system?.id || event.system?.email || event.resources[0]?.email;
    if (old_system !== system_id) {
      event.attendees = event.attendees.filter((_) => _.email !== old_system || _.id !== old_system);
    }
    return this.book_internal ? saveBooking(newBookingFromCalendarEvent(__spreadProps(__spreadValues({}, event.toJSON()), {
      status: this._settings.get("app.bookings.no_approval") === true ? "approved" : "tentative"
    }))).then((_) => newCalendarEventFromBooking(_)) : saveEvent(event, query);
  }
  _setInitialEvent(value) {
    this._initial_attendees = value.attendees.map((_) => (_.email || _).toLowerCase());
    this._initial_event_details = this._eventDetails(value);
  }
  _eventDetails(value) {
    const details = Object.entries(value).filter(([key]) => !IGNORED_DETAIL_FIELDS.includes(key));
    const recurrence = value.recurrence;
    details.push(["body", normaliseEventBody(value.body)]);
    details.push(["host_email", value.organiser?.email || ""]);
    details.push([
      "recurrence",
      recurrence?.pattern && recurrence?._pattern !== "none" ? [
        recurrence.pattern,
        recurrence.interval || 1,
        [...recurrence.days_of_week || []].sort(),
        recurrence.nth_of_month || null,
        recurrence.start || null,
        recurrence.end || null,
        recurrence.occurrences || null
      ] : null
    ]);
    details.push([
      "space_ids",
      (value.resources || []).map((_) => (_.email || _.id || "").toLowerCase()).sort()
    ]);
    details.sort(([a], [b]) => a > b ? 1 : -1);
    return JSON.stringify(details);
  }
  async _removeBookingAfterError(is_new, event, assets = false, e) {
    if (is_new) {
      await removeEvent(event.id, event.resources.length ? {
        calendar: this._model().host || currentUser()?.email,
        system_id: event.resources[0].id
      } : {});
      throw e?.status === 409 ? i18n("CALENDAR_EVENT.ASSETS_CLASH_ERROR") : i18n("CALENDAR_EVENT.ASSETS_ERROR");
    } else if (assets) {
      throw i18n("CALENDAR_EVENT.ASSETS_PARTIAL_ERROR", {
        error: this._errorMessage(e) || e
      });
    }
    this.removeLoadingTag(Tags.PostBooking);
    throw e;
  }
  _updateVisitorList(attendees) {
    const visitors = attendees.filter((user) => user.is_external);
    if (!visitors?.length)
      return;
    const old_visitors = this._settings.get("visitor-invitees") || [];
    this._settings.saveUserSetting("visitor-invitees", unique([
      ...old_visitors.filter((_) => !_.includes(_.email)),
      ...visitors.map((_) => `${_.email}|${_.name}|${_.organisation}`)
    ]));
  }
  static {
    this.\u0275fac = function EventFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _EventFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _EventFormService, factory: _EventFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(EventFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/spaces.service.ts
var SPACE_PIPE;
var SpacesService = class _SpacesService {
  /** List of available spaces */
  get space_list() {
    return this._all_spaces().filter((s) => s.map_id);
  }
  constructor() {
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._all_spaces = signal(
      [],
      ...ngDevMode ? [{ debugName: "_all_spaces" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._initialised = signal(
      false,
      ...ngDevMode ? [{ debugName: "_initialised" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.initialised = this._initialised.asReadonly();
    this.all_spaces = this._all_spaces.asReadonly();
    this.list = computed(
      () => this._all_spaces().filter((space) => space.map_id),
      ...ngDevMode ? [{ debugName: "list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => unique(flatten(this.list().map((i) => i.features.filter((_) => _.trim())))),
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._compare = (space) => space.zones.includes(this._org.building.id);
    SPACE_PIPE = new SpacePipe();
    if (!SPACE_PIPE.org)
      SPACE_PIPE.org = this._org;
    effect(() => {
      if (!this._org.initialised())
        return;
      this._init();
    });
  }
  _init() {
    if (!this._settings.get("app.prevent_space_init"))
      this.loadSpaces();
    else
      this._initialised.set(true);
  }
  /**
   * Get a filtered list of the available spaces
   * @param predicate Predicate for filtering spaces
   */
  filter(predicate = this._compare) {
    return this.space_list.filter((_) => predicate(_));
  }
  async loadSpace(space_id) {
    const system = await oa(space_id);
    const space = new Space(__spreadProps(__spreadValues({}, system), {
      level: this._org.levelWithID([...system.zones])
    }));
    SPACE_PIPE.updateSpaceList([space]);
  }
  /**
   * Find space with given id/email
   * @param space_id ID/Email address associated with the space
   */
  find(space_id) {
    return this.space_list.find(({ id, email }) => space_id === id || space_id === email);
  }
  async loadSpaces() {
    const systems = (await ia({
      zone_id: this._org.organisation?.id,
      limit: 5e3
    })).data;
    const space_list = systems.map((sys) => new Space(__spreadProps(__spreadValues({}, sys), {
      level: this._org.levelWithID([...sys.zones])
    })));
    this._all_spaces.set(space_list);
    SPACE_PIPE.updateSpaceList(this.space_list);
    this._initialised.set(true);
  }
  static {
    this.\u0275fac = function SpacesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SpacesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SpacesService, factory: _SpacesService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SpacesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/explore/src/lib/explore-book-qr.component.ts
var _c04 = (a0) => ({ name: a0 });
var DEFAULT_PATH = `workplace/#/explore?space={{id}}`;
var ExploreBookQrComponent = class _ExploreBookQrComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this.space = signal(
      this._data.space,
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.qr_code = signal(
      generateQRCode(`${location.origin}${(this._settings.get("app.booking_qr_path") || DEFAULT_PATH).replace("{{id}}", this._data.space?.email)}`),
      ...ngDevMode ? [{ debugName: "qr_code" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreBookQrComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreBookQrComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookQrComponent, selectors: [["explore-book-qr"]], decls: 10, vars: 7, consts: [[1, "truncate"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "p-4"], [1, "m-auto", "h-64", "w-64", 3, "src"]], template: function ExploreBookQrComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header")(1, "h2", 0);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 1);
        \u0275\u0275elementStart(5, "button", 2)(6, "icon");
        \u0275\u0275text(7, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(8, "main", 3);
        \u0275\u0275element(9, "img", 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 2, "EXPLORE.BOOK_RESOURCE", \u0275\u0275pureFunction1(5, _c04, ctx.space()?.name)), " ");
        \u0275\u0275advance(7);
        \u0275\u0275property("src", ctx.qr_code(), \u0275\u0275sanitizeUrl);
      }
    }, dependencies: [MatRippleModule, MatRipple, IconComponent, TranslatePipe], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookQrComponent, [{
    type: Component,
    args: [{ selector: "explore-book-qr", template: `
        <header>
            <h2 class="truncate">
                {{
                    'EXPLORE.BOOK_RESOURCE' | translate: { name: space()?.name }
                }}
            </h2>
            <div class="flex-1"></div>
            <button icon matRipple mat-dialog-close>
                <icon>close</icon>
            </button>
        </header>
        <main class="p-4">
            <img class="m-auto h-64 w-64" [src]="qr_code()" />
        </main>
    `, imports: [TranslatePipe, MatRippleModule, IconComponent] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookQrComponent, { className: "ExploreBookQrComponent", filePath: "libs/explore/src/lib/explore-book-qr.component.ts", lineNumber: 32 });
})();

// libs/explore/src/lib/explore-booking-modal.component.ts
function ExploreBookingModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3)(1, "icon");
    \u0275\u0275text(2, "close");
    \u0275\u0275elementEnd()();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 8)(1, "label", 18);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275element(7, "a-user-search-field", 19);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 2, "FORM.HOST"));
    \u0275\u0275advance(5);
    \u0275\u0275property("formField", ctx_r1.form.organiser);
    \u0275\u0275control();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 20);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275classProp("bg-info", ctx_r1.alert()[0] === "info")("text-info-content", ctx_r1.alert()[0] === "info")("bg-warning", ctx_r1.alert()[0] === "warn")("text-warning-content", ctx_r1.alert()[0] === "warn")("bg-error", ctx_r1.alert()[0] === "closed")("text-error-content", ctx_r1.alert()[0] === "closed");
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.alert()[1], " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275text(0);
    \u0275\u0275pipe(1, "date");
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275textInterpolate1(" at ", \u0275\u0275pipeBind2(1, 1, ctx_r1.model().date, ctx_r1.time_format()), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 21);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275conditionalCreate(7, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Conditional_7_Template, 2, 4);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 3, "FORM.DATE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 5, ctx_r1.model().date, "mediumDate"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.model().all_day ? 7 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-duration-field", 22);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(3, 6, "FORM.DURATION"), ":");
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.form.duration)("time", ctx_r1.model().date)("max", ctx_r1.max_duration())("end_time", ctx_r1.bookable_hours()?.end)("use_24hr", ctx_r1.use_24hr_time());
    \u0275\u0275control();
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 17)(1, "mat-checkbox", 23);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance();
    \u0275\u0275property("formField", ctx_r1.form.all_day);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "COMMON.ALL_DAY"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_6_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 5)(1, "div", 8)(2, "label", 9);
    \u0275\u0275text(3, "Title");
    \u0275\u0275elementStart(4, "span");
    \u0275\u0275text(5, "*");
    \u0275\u0275elementEnd();
    \u0275\u0275text(6, ":");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-form-field", 10);
    \u0275\u0275element(8, "input", 11);
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(9, "mat-error");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(12, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_12_Template, 8, 4, "div", 8);
    \u0275\u0275elementStart(13, "div", 8)(14, "label");
    \u0275\u0275text(15);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div", 12);
    \u0275\u0275text(18);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(19, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_19_Template, 2, 13, "div", 13);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(20, "div", 14);
    \u0275\u0275conditionalCreate(21, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_21_Template, 8, 8, "div", 15);
    \u0275\u0275conditionalCreate(22, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_22_Template, 5, 8, "div", 16);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(23, ExploreBookingModalComponent_Conditional_6_Conditional_0_Conditional_23_Template, 4, 4, "div", 17);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(8);
    \u0275\u0275property("formField", ctx_r1.form.title);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "EXPLORE.BOOKING_TITLE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.can_book_for_others() ? 12 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(16, 11, "EXPLORE.BOOKING_SPACE"), ":");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r1.model().resources?.[0]?.display_name || ctx_r1.model().resources?.[0]?.name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.alert()?.[0] ? 19 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.form.date ? 21 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.form.duration ? 22 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.allow_all_day() ? 23 : -1);
  }
}
function ExploreBookingModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275conditionalCreate(0, ExploreBookingModalComponent_Conditional_6_Conditional_0_Template, 24, 13, "main", 5);
    \u0275\u0275elementStart(1, "footer", 6)(2, "button", 7);
    \u0275\u0275listener("click", function ExploreBookingModalComponent_Conditional_6_Template_button_click_2_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.save());
    });
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275conditional(ctx_r1.form ? 0 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 2, "COMMON.SAVE"), " ");
  }
}
function ExploreBookingModalComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 4);
    \u0275\u0275element(1, "mat-spinner", 24);
    \u0275\u0275elementStart(2, "p");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275property("diameter", 48);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 2, "CALENDAR_EVENT.CHECKING_AVAILABILITY"));
  }
}
var ExploreBookingModalComponent = class _ExploreBookingModalComponent {
  constructor() {
    this._data = inject(MAT_DIALOG_DATA);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog_ref = inject(MatDialogRef);
    this._router = inject(Router);
    this._min_loading = signal(
      true,
      ...ngDevMode ? [{ debugName: "_min_loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._min_loading() || !!this._event_form.loading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.alert = signal(
      this._data.alert,
      ...ngDevMode ? [{ debugName: "alert" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.max_duration = settingSignal("events.max_duration", 4 * 60);
    this.bookable_hours = settingSignal("events.bookable_hours", null);
    this.can_book_for_others = settingSignal("events.can_book_for_others", false);
    this.use_24hr_time = settingSignal("use_24_hour_time", false);
    this.time_format = computed(
      () => this.use_24hr_time() ? "HH:mm" : "h:mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_all_day = settingSignal("events.allow_all_day", false);
  }
  get form() {
    return this._event_form.form;
  }
  get model() {
    return this._event_form.model;
  }
  ngOnInit() {
    if (!this._data.space) {
      notifyError("Error intialising Ad-hoc booking form. [Space missing]");
      console.error("Book Modal Data:", this._data);
      this._dialog_ref.close();
      return;
    }
    this._event_form.newForm();
    this.model.update((m) => __spreadProps(__spreadValues({}, m), {
      resources: [this._data.space],
      host: currentUser().email,
      organiser: currentUser()
    }));
    setTimeout(() => this._min_loading.set(false), 500);
  }
  async save() {
    await this._event_form.postForm().catch((_) => {
      notifyError(_);
      throw _;
    });
    if (this._settings.app_name.toLowerCase().includes("workplace")) {
      this._router.navigate(["/book", "meeting", "success"]);
    } else {
      notifySuccess(i18n("EXPLORE.BOOKING_SUCCESS"));
    }
    this._dialog_ref.close();
  }
  static {
    this.\u0275fac = function ExploreBookingModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreBookingModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreBookingModalComponent, selectors: [["explore-booking-modal"]], decls: 8, vars: 5, consts: [[1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], [1, "flex-1"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], ["load", "", 1, "flex", "h-64", "flex-col", "items-center", "justify-center"], [1, "max-w-[85vw]", "px-4"], [1, "border-base-300", "flex", "justify-end", "border-t", "p-2"], ["btn", "", "matRipple", "", 1, "mx-2", "w-32", 3, "click"], [1, "flex", "flex-col"], ["for", "title"], ["appearance", "outline"], ["id", "title", "matInput", "", "placeholder", "Booking Title", 3, "formField"], ["name", "space", 1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs", 3, "bg-info", "text-info-content", "bg-warning", "text-warning-content", "bg-error", "text-error-content"], [1, "flex", "flex-wrap", "sm:space-x-4"], [1, "flex", "w-full", "min-w-48", "flex-1", "flex-col", "sm:w-auto"], [1, "flex", "w-full", "flex-col", "sm:w-auto"], [1, "-mt-2", "mb-2", "flex", "justify-end"], ["for", "host"], [1, "mb-4", 3, "formField"], [1, "-mt-2", "mb-4", "rounded-sm", "px-2", "py-1", "text-xs"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], [1, "w-full", 3, "formField", "time", "max", "end_time", "use_24hr"], [3, "formField"], [1, "m-4", 3, "diameter"]], template: function ExploreBookingModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275element(4, "div", 2);
        \u0275\u0275conditionalCreate(5, ExploreBookingModalComponent_Conditional_5_Template, 3, 0, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, ExploreBookingModalComponent_Conditional_6_Template, 5, 4)(7, ExploreBookingModalComponent_Conditional_7_Template, 5, 4, "div", 4);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, "EXPLORE.BOOKING_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275conditional(!ctx.loading() ? 5 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 6 : 7);
      }
    }, dependencies: [
      MatRippleModule,
      MatRipple,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatCheckboxModule,
      MatCheckbox,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      FormField,
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      DatePipe,
      TranslatePipe
    ], styles: ["\nheader[_ngcontent-%COMP%] {\n  max-width: calc(100vw + 100%);\n}\n[load][_ngcontent-%COMP%] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreBookingModalComponent, [{
    type: Component,
    args: [{ selector: "explore-booking-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 class="px-2 text-xl font-medium">
                {{ 'EXPLORE.BOOKING_HEADER' | translate }}
            </h2>
            <div class="flex-1"></div>
            @if (!loading()) {
                <button icon matRipple mat-dialog-close>
                    <icon>close</icon>
                </button>
            }
        </header>
        @if (!loading()) {
            @if (form) {
                <main class="max-w-[85vw] px-4">
                    <div class="flex flex-col">
                        <label for="title">Title<span>*</span>:</label>
                        <mat-form-field appearance="outline">
                            <input
                                id="title"
                                matInput
                                [formField]="form.title"
                                placeholder="Booking Title"
                            />
                            <mat-error>{{
                                'EXPLORE.BOOKING_TITLE_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                    </div>
                    @if (can_book_for_others()) {
                        <div class="flex flex-col">
                            <label for="host"
                                >{{ 'FORM.HOST' | translate
                                }}<span>*</span>:</label
                            >
                            <a-user-search-field
                                [formField]="form.organiser"
                                class="mb-4"
                            ></a-user-search-field>
                        </div>
                    }
                    <div class="flex flex-col">
                        <label
                            >{{ 'EXPLORE.BOOKING_SPACE' | translate }}:</label
                        >
                        <div
                            name="space"
                            class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                        >
                            {{
                                model().resources?.[0]?.display_name ||
                                    model().resources?.[0]?.name
                            }}
                        </div>
                        @if (alert()?.[0]) {
                            <div
                                class="-mt-2 mb-4 rounded-sm px-2 py-1 text-xs"
                                [class.bg-info]="alert()[0] === 'info'"
                                [class.text-info-content]="
                                    alert()[0] === 'info'
                                "
                                [class.bg-warning]="alert()[0] === 'warn'"
                                [class.text-warning-content]="
                                    alert()[0] === 'warn'
                                "
                                [class.bg-error]="alert()[0] === 'closed'"
                                [class.text-error-content]="
                                    alert()[0] === 'closed'
                                "
                            >
                                {{ alert()[1] }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-wrap sm:space-x-4">
                        @if (form.date) {
                            <div
                                class="flex w-full min-w-48 flex-1 flex-col sm:w-auto"
                            >
                                <label>{{ 'FORM.DATE' | translate }}:</label>
                                <div
                                    class="border-base-200 mb-4 w-full rounded-sm border px-4 py-3"
                                >
                                    {{ model().date | date: 'mediumDate' }}
                                    @if (!model().all_day) {
                                        at
                                        {{ model().date | date: time_format() }}
                                    }
                                </div>
                            </div>
                        }
                        @if (form.duration) {
                            <div class="flex w-full flex-col sm:w-auto">
                                <label
                                    >{{ 'FORM.DURATION' | translate }}:</label
                                >
                                <a-duration-field
                                    [formField]="form.duration"
                                    [time]="model().date"
                                    [max]="max_duration()"
                                    [end_time]="bookable_hours()?.end"
                                    class="w-full"
                                    [use_24hr]="use_24hr_time()"
                                ></a-duration-field>
                            </div>
                        }
                    </div>
                    @if (allow_all_day()) {
                        <div class="-mt-2 mb-2 flex justify-end">
                            <mat-checkbox [formField]="form.all_day">
                                {{ 'COMMON.ALL_DAY' | translate }}
                            </mat-checkbox>
                        </div>
                    }
                </main>
            }
            <footer class="border-base-300 flex justify-end border-t p-2">
                <button btn matRipple class="mx-2 w-32" (click)="save()">
                    {{ 'COMMON.SAVE' | translate }}
                </button>
            </footer>
        } @else {
            <div load class="flex h-64 flex-col items-center justify-center">
                <mat-spinner class="m-4" [diameter]="48"></mat-spinner>
                <p>{{ 'CALENDAR_EVENT.CHECKING_AVAILABILITY' | translate }}</p>
            </div>
        }
    `, imports: [
      DatePipe,
      TranslatePipe,
      MatRippleModule,
      MatProgressSpinnerModule,
      MatCheckboxModule,
      DurationFieldComponent,
      UserSearchFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      FormField,
      IconComponent,
      MatDialogModule
    ], styles: ["/* angular:styles/component:css;92dc203883c2e157fe6d9f315fef4a02ef7ca3572d438813349331b81da507b4;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-booking-modal.component.ts */\nheader {\n  max-width: calc(100vw + 100%);\n}\n[load] {\n  width: 32rem;\n  max-width: calc(100vw - 2rem);\n}\n/*# sourceMappingURL=explore-booking-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreBookingModalComponent, { className: "ExploreBookingModalComponent", filePath: "libs/explore/src/lib/explore-booking-modal.component.ts", lineNumber: 197 });
})();

// libs/explore/src/lib/explore-icon.component.ts
var ExploreIconComponent = class _ExploreIconComponent {
  constructor() {
    this._details = inject(MAP_FEATURE_DATA);
    this.icon = signal(
      this._details.icon || { content: "done" },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.color = signal(
      this._details.color || "var(--info)",
      ...ngDevMode ? [{ debugName: "color" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.text_color = signal(
      this._details.text_color || "var(--info-content)",
      ...ngDevMode ? [{ debugName: "text_color" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreIconComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreIconComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreIconComponent, selectors: [["explore-icon"]], decls: 2, vars: 5, consts: [[1, "border-base-200", "flex", "h-8", "w-8", "items-center", "justify-center", "rounded-full", "border", "shadow-sm"], [1, "text-xl", 3, "icon"]], template: function ExploreIconComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275element(1, "icon", 1);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleProp("background-color", ctx.color())("color", ctx.text_color());
        \u0275\u0275advance();
        \u0275\u0275property("icon", ctx.icon());
      }
    }, dependencies: [IconComponent], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreIconComponent, [{
    type: Component,
    args: [{ selector: `explore-icon`, template: `
        <div
            class="border-base-200 flex h-8 w-8 items-center justify-center rounded-full border shadow-sm"
            [style.background-color]="color()"
            [style.color]="text_color()"
        >
            <icon [icon]="icon()" class="text-xl"></icon>
        </div>
    `, imports: [IconComponent], styles: ["/* angular:styles/component:css;8d603d396af10dde7f45bddce919375913a5c5b09729ee8e6482881d125d62c7;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-icon.component.ts */\n:host {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  align-items: end;\n  justify-content: end;\n}\n/*# sourceMappingURL=explore-icon.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreIconComponent, { className: "ExploreIconComponent", filePath: "libs/explore/src/lib/explore-icon.component.ts", lineNumber: 30 });
})();

// libs/explore/src/lib/explore-space-info.component.ts
var _c05 = (a0) => ({ count: a0 });
function ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "img", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("source", ctx_r0.space().images[0]);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 8);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.available_until(), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14)(1, "icon");
    \u0275\u0275text(2, "group");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(5, 1, "COMMON.PEOPLE_COUNT", \u0275\u0275pureFunction1(5, _c05, ctx_r0.space().capacity), ctx_r0.space().capacity), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 17);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const feature_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", feature_r2, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "ul", 15);
    \u0275\u0275repeaterCreate(1, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_For_2_Template, 2, 1, "li", 17, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r0.space().features);
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275declareLet(0);
    \u0275\u0275pipe(1, "user");
    \u0275\u0275pipe(2, "async");
    \u0275\u0275elementStart(3, "div", 18);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(5, "div", 19)(6, "h3");
    \u0275\u0275text(7);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(8, "div", 20);
    \u0275\u0275text(9);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    const host_r3 = \u0275\u0275pipeBind1(2, 5, \u0275\u0275pipeBind1(1, 3, ctx_r0.next().host));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", ctx_r0.current() ? "Current" : "Upcoming", " booking ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(ctx_r0.next().title);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", host_r3?.name || ctx_r0.next().host, " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16)(1, "icon");
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
    \u0275\u0275textInterpolate2(" Free ", ctx_r0.next().date > ctx_r0.now() ? "until" : "at", " ", \u0275\u0275pipeBind2(5, 2, ctx_r0.next().date > ctx_r0.now() ? ctx_r0.next().date : ctx_r0.next().date_end, "shortTime"), " ");
  }
}
function ExploreSpaceInfoComponent_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275element(1, "div", 4);
    \u0275\u0275elementStart(2, "div", 5)(3, "div", 6);
    \u0275\u0275conditionalCreate(4, ExploreSpaceInfoComponent_ng_template_2_Conditional_4_Template, 1, 1, "img", 7)(5, ExploreSpaceInfoComponent_ng_template_2_Conditional_5_Template, 1, 0, "div", 8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 9)(7, "div", 10);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "uppercase");
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(11, ExploreSpaceInfoComponent_ng_template_2_Conditional_11_Template, 2, 1, "div", 11);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "div", 12)(13, "h4", 13);
    \u0275\u0275text(14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(15, ExploreSpaceInfoComponent_ng_template_2_Conditional_15_Template, 6, 7, "div", 14);
    \u0275\u0275conditionalCreate(16, ExploreSpaceInfoComponent_ng_template_2_Conditional_16_Template, 3, 0, "ul", 15);
    \u0275\u0275conditionalCreate(17, ExploreSpaceInfoComponent_ng_template_2_Conditional_17_Template, 10, 7);
    \u0275\u0275conditionalCreate(18, ExploreSpaceInfoComponent_ng_template_2_Conditional_18_Template, 6, 5, "div", 16);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275classProp("-translate-x-full", ctx_r0.x_pos() === "end")("-translate-y-full", ctx_r0.y_pos() === "bottom");
    \u0275\u0275property("id", ctx_r0.space().id);
    \u0275\u0275advance(3);
    \u0275\u0275classProp("bg-neutral", ctx_r0.space().images[0])("h-32", ctx_r0.space().images[0])("h-8", !ctx_r0.space().images[0]);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().images?.length ? 4 : 5);
    \u0275\u0275advance(3);
    \u0275\u0275classMap("text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm " + ctx_r0.status());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 23, ctx_r0.status() === "not-bookable" ? "COMMON.STATUS_NOT_BOOKABLE" : "COMMON.STATUS_" + \u0275\u0275pipeBind1(9, 21, ctx_r0.status())), " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r0.status() !== "not-bookable" ? 11 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.space().display_name || ctx_r0.space().name, " ");
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().capacity >= 0 ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.space().features?.length > 0 && !ctx_r0.hide_features() ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.show_event_details() && ctx_r0.next() ? 17 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r0.next() ? 18 : -1);
  }
}
var ExploreSpaceInfoComponent = class _ExploreSpaceInfoComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this._details = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
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
    this.space = signal(
      this._details.space || new Space(),
      ...ngDevMode ? [{ debugName: "space" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.events = signal(
      this._details.events || [],
      ...ngDevMode ? [{ debugName: "events" }] : (
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
    this.next = computed(
      () => {
        return [...this.events()].sort((a, b) => a.date - b.date).filter((item) => item.date_end > this.now() && isSameDay(item.date, this.now()))[0];
      },
      ...ngDevMode ? [{ debugName: "next" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.current = computed(
      () => this.next() ? this.next()?.date <= this.now() && this.next()?.date_end > this.now() : false,
      ...ngDevMode ? [{ debugName: "current" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_event_details = settingSignal("explore.show_event_details", true);
    this.status = signal(
      this._details.status,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hide_features = settingSignal("spaces.hide_features", false);
    this.available_until = computed(
      () => "",
      ...ngDevMode ? [{ debugName: "available_until" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  ngOnInit() {
    this.space.set(this._details.space || new Space());
    this.events.set(this._details.events || []);
    this.timeout("update_offset", () => this.updateOffset(), 200);
    this.interval("time", () => this.now.set(Date.now()), 5e3);
  }
  updateOffset() {
    const pos = this._element.nativeElement.getBoundingClientRect();
    this.x_pos.set(pos.x < document.body.clientWidth / 2 ? "start" : "end");
    this.y_pos.set(pos.y < document.body.clientHeight / 2 ? "top" : "bottom");
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275ExploreSpaceInfoComponent_BaseFactory;
      return function ExploreSpaceInfoComponent_Factory(__ngFactoryType__) {
        return (\u0275ExploreSpaceInfoComponent_BaseFactory || (\u0275ExploreSpaceInfoComponent_BaseFactory = \u0275\u0275getInheritedFactory(_ExploreSpaceInfoComponent)))(__ngFactoryType__ || _ExploreSpaceInfoComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreSpaceInfoComponent, selectors: [["explore-space-info"]], features: [\u0275\u0275InheritDefinitionFeature], decls: 4, vars: 6, consts: [["tooltip", ""], ["space_tooltip", ""], ["customTooltip", "", 1, "pointer-events-auto", "relative", "h-full", "w-full", "cursor-pointer", 3, "mouseenter", "content", "backdrop", "xPosition", "yPosition", "hover"], ["name", "space-info", 1, "border-base-300", "bg-base-100", "pointer-events-none", "absolute", "top-0", "left-0", "w-64", "transform", "overflow-hidden", "rounded", "border", "shadow", 3, "id"], [1, "arrow"], [1, "relative"], [1, "bg-opacity-20", "relative", "flex", "w-full", "items-center", "justify-center", "overflow-hidden"], ["auth", "", 1, "min-h-full", "min-w-full", "object-cover", 3, "source"], [1, "bg-base-200", "absolute", "inset-0", "opacity-30"], [1, "absolute", "top-2", "left-2", "flex", "flex-wrap", "text-sm"], ["status", ""], ["available-until", ""], [1, "flex", "flex-col", "px-2", "py-4"], [1, "mb-2", "px-2", "text-xl", "font-medium"], ["capacity", "", 1, "mb-2", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "flex", "flex-wrap"], [1, "mt-1", "flex", "items-center", "space-x-2", "px-2", "text-base"], [1, "bg-base-200", "m-1", "rounded-2xl", "px-2", "py-1", "text-xs", "font-medium"], [1, "rounded-sm", "px-2", "pb-1", "text-xs", "opacity-30"], [1, "border-base-300", "mb-1", "flex", "flex-col", "rounded-lg", "border", "p-2"], [1, "text-xs", "opacity-50"]], template: function ExploreSpaceInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2, 0);
        \u0275\u0275listener("mouseenter", function ExploreSpaceInfoComponent_Template_div_mouseenter_0_listener() {
          return ctx.updateOffset();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275template(2, ExploreSpaceInfoComponent_ng_template_2_Template, 19, 25, "ng-template", null, 1, \u0275\u0275templateRefExtractor);
      }
      if (rf & 2) {
        const space_tooltip_r4 = \u0275\u0275reference(3);
        \u0275\u0275property("content", space_tooltip_r4)("backdrop", false)("xPosition", "center")("yPosition", "center")("hover", true);
        \u0275\u0275attribute("id", ctx.space().map_id || ctx.space().id);
      }
    }, dependencies: [
      IconComponent,
      CustomTooltipComponent,
      AuthenticatedImageDirective,
      AsyncPipe,
      DatePipe,
      UpperCasePipe,
      TranslatePipe,
      UserPipe
    ], styles: ["\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpaceInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-space-info", template: `
        <div
            #tooltip
            customTooltip
            [content]="space_tooltip"
            [backdrop]="false"
            [xPosition]="'center'"
            [yPosition]="'center'"
            [hover]="true"
            [attr.id]="space().map_id || space().id"
            (mouseenter)="updateOffset()"
            class="pointer-events-auto relative h-full w-full cursor-pointer"
        ></div>
        <ng-template #space_tooltip>
            <div
                name="space-info"
                [id]="space().id"
                class="border-base-300 bg-base-100 pointer-events-none absolute top-0 left-0 w-64 transform overflow-hidden rounded border shadow"
                [class.-translate-x-full]="x_pos() === 'end'"
                [class.-translate-y-full]="y_pos() === 'bottom'"
            >
                <div class="arrow"></div>
                <div class="relative">
                    <div
                        class="bg-opacity-20 relative flex w-full items-center justify-center overflow-hidden"
                        [class.bg-neutral]="space().images[0]"
                        [class.h-32]="space().images[0]"
                        [class.h-8]="!space().images[0]"
                    >
                        @if (space().images?.length) {
                            <img
                                auth
                                [source]="space().images[0]"
                                class="min-h-full min-w-full object-cover"
                            />
                        } @else {
                            <div
                                class="bg-base-200 absolute inset-0 opacity-30"
                            ></div>
                        }
                    </div>
                    <div class="absolute top-2 left-2 flex flex-wrap text-sm">
                        <div
                            status
                            [class]="
                                'text-light rounded-sm border border-white p-1 px-2 capitalize shadow-sm ' +
                                status()
                            "
                        >
                            {{
                                (status() === 'not-bookable'
                                    ? 'COMMON.STATUS_NOT_BOOKABLE'
                                    : 'COMMON.STATUS_' + (status() | uppercase)
                                ) | translate
                            }}
                        </div>
                        @if (status() !== 'not-bookable') {
                            <div available-until>
                                {{ available_until() }}
                            </div>
                        }
                    </div>
                    <div class="flex flex-col px-2 py-4">
                        <h4 class="mb-2 px-2 text-xl font-medium">
                            {{ space().display_name || space().name }}
                        </h4>
                        @if (space().capacity >= 0) {
                            <div
                                capacity
                                class="mb-2 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>group</icon>
                                <div>
                                    {{
                                        'COMMON.PEOPLE_COUNT'
                                            | translate
                                                : { count: space().capacity }
                                                : space().capacity
                                    }}
                                </div>
                            </div>
                        }
                        @if (space().features?.length > 0 && !hide_features()) {
                            <ul class="flex flex-wrap">
                                @for (
                                    feature of space().features;
                                    track feature
                                ) {
                                    <li
                                        class="bg-base-200 m-1 rounded-2xl px-2 py-1 text-xs font-medium"
                                    >
                                        {{ feature }}
                                    </li>
                                }
                            </ul>
                        }
                        @if (show_event_details() && next()) {
                            @let host = next().host | user | async;
                            <div
                                class="rounded-sm px-2 pb-1 text-xs opacity-30"
                            >
                                {{ current() ? 'Current' : 'Upcoming' }}
                                booking
                            </div>
                            <div
                                class="border-base-300 mb-1 flex flex-col rounded-lg border p-2"
                            >
                                <h3>{{ next().title }}</h3>
                                <div class="text-xs opacity-50">
                                    {{ host?.name || next().host }}
                                </div>
                            </div>
                        }
                        @if (next()) {
                            <div
                                class="mt-1 flex items-center space-x-2 px-2 text-base"
                            >
                                <icon>alarm</icon>
                                <div>
                                    Free
                                    {{ next().date > now() ? 'until' : 'at' }}
                                    {{
                                        (next().date > now()
                                            ? next().date
                                            : next().date_end
                                        ) | date: 'shortTime'
                                    }}
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </ng-template>
    `, imports: [
      AsyncPipe,
      DatePipe,
      UpperCasePipe,
      IconComponent,
      CustomTooltipComponent,
      TranslatePipe,
      AuthenticatedImageDirective,
      UserPipe
    ], styles: ["/* angular:styles/component:css;49d3d38e3c811a7af0b23c1a4eab605a060569aead88ea7b8da86c409617cda8;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-space-info.component.ts */\n[status] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-space-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreSpaceInfoComponent, { className: "ExploreSpaceInfoComponent", filePath: "libs/explore/src/lib/explore-space-info.component.ts", lineNumber: 208 });
})();

// libs/explore/src/lib/explore-spaces.service.ts
var DEFAULT_COLOURS = {
  free: "#43a047",
  pending: "#ffb300",
  reserved: "#e65100",
  busy: "#e53935",
  "signs-of-life": "#1565c0",
  "not-bookable": "#757575",
  unknown: "#757575"
};
var ExploreSpacesService = class _ExploreSpacesService extends AsyncHandler {
  constructor() {
    super();
    this._state = inject(ExploreStateService);
    this._settings = inject(SettingsService);
    this._event_form = inject(EventFormService);
    this._dialog = inject(MatDialog);
    this._org = inject(OrganisationService);
    this._building = this._org.active_building;
    this._bookings = {};
    this._statuses = {};
    this._presence = {};
    this._panning = true;
    this._last_action = "";
    this._booking_rules = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Wu(bld.id, `room_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
    }));
    this.booking_rules = computed(
      () => this._booking_rules.value() ?? [],
      ...ngDevMode ? [{ debugName: "booking_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._room_alerts = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_room_alerts" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: () => Wu(this._org.organisation.id, `room_alerts`).then((_) => _.details || {}).catch(() => ({}))
    }));
    this.room_alerts = computed(
      () => this._room_alerts.value() ?? {},
      ...ngDevMode ? [{ debugName: "room_alerts" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const list = this._state.spaces();
      const { is_public } = this._state.options();
      if (is_public)
        return;
      untracked(() => this._bindToSpaces(list));
    });
  }
  _bindToSpaces(list) {
    this.unsubWith("b-");
    this.unsubWith("s-");
    this.unsubWith("c-");
    this._statuses = {};
    if (!list?.length)
      return;
    for (const space of list) {
      const mod = Wl(space.id, "Bookings");
      let binding = mod.variable("bookings");
      this.subscription(`b-${space.id}`, binding.bindThenSubscribe((d) => this.handleBookingsChange(list, space, d)));
      binding = mod.variable("status");
      this.subscription(`s-${space.id}`, binding.bindThenSubscribe((d) => this.handleStatusChange(list, space, d)));
      binding = mod.variable("presence");
      this.subscription(`c-${space.id}`, binding.bindThenSubscribe((d) => this.handlePresenceChange(list, space, d)));
    }
    this.updateActions(list);
    this._updateHoverElements(list);
  }
  async bookSpace(space, force = false) {
    if (this._panning && this._last_action === "down")
      return;
    const booking_rules = this.booking_rules();
    const room_alerts = this.room_alerts();
    const { hidden } = rulesForResource({
      date: Date.now(),
      duration: 60,
      resource: space,
      host: currentUser()
    }, booking_rules) || {};
    if (hidden) {
      return notifyError(i18n("EXPLORE.SPACES_PERMISSIONS_ERROR"));
    }
    if (this._statuses[space.id] !== "free" && !force || !space.bookable) {
      return notifyError(i18n("EXPLORE.SPACES_UNAVAILABLE_ERROR", {
        name: space.display_name || space.name
      }));
    }
    if (room_alerts[space.id]?.[0] === "closed") {
      return notifyError(`${room_alerts[space.id][1]}`);
    }
    const bookable_hours = this._settings.get("app.events.bookable_hours");
    if (bookable_hours && !isWithinBookableHours(Date.now(), bookable_hours)) {
      return notifyError(i18n("EXPLORE.OUTSIDE_BOOKABLE_HOURS"));
    }
    if (this._settings.get("app.events.booking_unavailable")) {
      return this._event_form.openEventLinkModal();
    }
    if (space.room_booking_url) {
      const [email_start, email_end] = space.email.split("@");
      const url = space.room_booking_url.replace(/\{id\}/g, encodeURIComponent(space.id)).replace(/\{name\}/g, encodeURIComponent(space.display_name || space.name)).replace(/\{map_id\}/g, encodeURIComponent(space.map_id)).replace(/\{email\}/g, encodeURIComponent(space.email)).replace(/\{email_start\}/g, encodeURIComponent(email_start || "")).replace(/\{email_end\}/g, encodeURIComponent(email_end || ""));
      window.open(url, "_blank", "noopener noreferer");
      return;
    }
    this._event_form.newForm();
    this._event_form.model.update((m) => __spreadProps(__spreadValues({}, m), {
      host: currentUser()?.email,
      resources: [space]
    }));
    this._dialog.open(this._settings.get("app.explore.show_booking_qr") ? ExploreBookQrComponent : ExploreBookingModalComponent, {
      data: { space, alert: room_alerts[space.id] }
    });
  }
  handleBookingsChange(spaces, space, bookings) {
    if (!bookings)
      return;
    this._bookings[space.id] = bookings.map((i) => new CalendarEvent(i));
    this.timeout("update_hover_els", () => this._updateHoverElements(spaces), 100);
  }
  handleStatusChange(spaces, space, status) {
    if (space.bookable)
      this._statuses[space.id] = status || "free";
    else
      delete this._statuses[space.id];
    this.timeout("update_statuses", () => {
      this.clearTimeout("update_hover_els");
      this._updateStatus(spaces);
      this._updateHoverElements(spaces);
    }, 100);
  }
  handlePresenceChange(spaces, space, presence) {
    this._presence[space.id] = presence;
    this.timeout("update_icons", () => this._updateIcons(spaces), 100);
  }
  async _updateStatus(spaces) {
    const style_map = {};
    const colours = this._settings.get("app.explore.colors") || {};
    for (const space of spaces) {
      if (!this._statuses[space.id])
        continue;
      const status = this._statuses[space.id];
      style_map[`#${space.map_id}`] = {
        fill: colours[`space-${status}`] || colours[`${status}`] || DEFAULT_COLOURS[`${status}`],
        opacity: 0.6
      };
    }
    this._state.setStyles("spaces", style_map);
  }
  _updateHoverElements(spaces) {
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        full_size: true,
        no_scale: true,
        content: ExploreSpaceInfoComponent,
        z_index: 10,
        data: {
          space: new Space(space),
          events: this._bookings[space.id],
          status: this._statuses[space.id] || "not-bookable"
        }
      });
    }
    this._state.setFeatures("spaces", features);
  }
  _updateIcons(spaces) {
    if (!this._settings.get("app.show_presence_indicators"))
      return;
    const features = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      features.push({
        location: space.map_id,
        content: ExploreIconComponent,
        data: {
          icon: {
            class: "material-symbols-rounded",
            content: "sensor_occupied"
          },
          color: this._presence[space.id] ? "var(--success)" : "var(--base-content)",
          text_color: this._presence[space.id] ? "var(--success-content)" : "var(--base-100)"
        },
        z_index: 98
      });
    }
    this._state.setFeatures("spaces-presence", features);
  }
  updateActions(spaces) {
    const actions = [];
    for (const space of spaces) {
      if (!space.map_id)
        continue;
      for (const action of ["mousedown", "touchstart"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this._panning = false;
            this.timeout("panning", () => this._panning = true, 300);
            this._last_action = "down";
          }
        });
      }
      for (const action of ["mouseup", "touchend"]) {
        actions.push({
          id: space.map_id,
          action,
          priority: 5,
          callback: () => {
            this.bookSpace(space);
            this._last_action = "up";
          }
        });
      }
    }
    this.timeout("set-actions", () => this._state.setActions("spaces", actions), 50);
  }
  static {
    this.\u0275fac = function ExploreSpacesService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreSpacesService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExploreSpacesService, factory: _ExploreSpacesService.\u0275fac });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreSpacesService, [{
    type: Injectable
  }], () => [], null);
})();

// libs/explore/src/lib/set-datetime-modal.component.ts
var _c06 = () => ({ standalone: true });
function SetDatetimeModalComponent_Conditional_6_Conditional_1_Template(rf, ctx) {
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
function SetDatetimeModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
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
function SetDatetimeModalComponent_Conditional_6_Conditional_9_Template(rf, ctx) {
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
function SetDatetimeModalComponent_Conditional_6_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 15)(2, "label");
    \u0275\u0275text(3, "Start Time");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "a-time-field", 16);
    \u0275\u0275listener("ngModelChange", function SetDatetimeModalComponent_Conditional_6_Conditional_10_Template_a_time_field_ngModelChange_4_listener($event) {
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
    \u0275\u0275property("ngModel", ctx_r0.form.value.date)("ngModelOptions", \u0275\u0275pureFunction0(10, _c06))("range", ctx_r0.bookable_hours())("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275property("time", ctx_r0.form.get("date")?.value)("max", 10 * 60)("min", 60)("step", 60)("end_time", ctx_r0.bookable_hours()?.end)("use_24hr", ctx_r0.use_24hr_time());
    \u0275\u0275control();
  }
}
function SetDatetimeModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275conditionalCreate(1, SetDatetimeModalComponent_Conditional_6_Conditional_1_Template, 6, 2, "div", 6);
    \u0275\u0275conditionalCreate(2, SetDatetimeModalComponent_Conditional_6_Conditional_2_Template, 5, 0, "div", 6);
    \u0275\u0275elementStart(3, "div", 6)(4, "div", 7)(5, "label");
    \u0275\u0275text(6, "Date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "a-date-field", 8);
    \u0275\u0275text(8, " Date and time must be in the future ");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(9, SetDatetimeModalComponent_Conditional_6_Conditional_9_Template, 4, 7, "div", 9);
    \u0275\u0275conditionalCreate(10, SetDatetimeModalComponent_Conditional_6_Conditional_10_Template, 9, 11, "div", 6);
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SetDatetimeModalComponent, selectors: [["set-datetime-modal"]], decls: 11, vars: 5, consts: [[1, "bg-base-200", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "items-center", "justify-between", "rounded-sm", "border-none", "p-2"], [1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "w-[24rem]", "max-w-[85vw]", 3, "formGroup"], [1, "bg-base-200", "mx-2", "mb-2", "flex", "w-[calc(100%-1rem)]", "items-center", "justify-end", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", 1, "w-32", 3, "mat-dialog-close"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "flex-col", "space-x-0", "sm:flex-row", "sm:space-x-2"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], ["formControlName", "date", 3, "to"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end", 3, "-mb-7", "mb-2"], [1, "mb-2", "flex", "w-full", "flex-1", "flex-col", "sm:w-1/4"], [1, "border-base-200", "mb-4", "w-full", "rounded-sm", "border", "px-4", "py-3"], ["formControlName", "user", 1, "mb-4"], [1, "mx-auto", "flex", "w-[640px]", "max-w-[calc(100%-2rem)]", "justify-end"], ["formControlName", "all_day"], [1, "flex", "w-full", "flex-1", "flex-col", "sm:w-1/3"], [3, "ngModelChange", "ngModel", "ngModelOptions", "range", "use_24hr"], ["formControlName", "duration", 3, "time", "max", "min", "step", "end_time", "use_24hr"]], template: function SetDatetimeModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 0)(1, "h2", 1);
        \u0275\u0275text(2, "Set date and time");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "button", 2)(4, "icon");
        \u0275\u0275text(5, "close");
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(6, SetDatetimeModalComponent_Conditional_6_Template, 11, 6, "main", 3);
        \u0275\u0275elementStart(7, "footer", 4)(8, "button", 5);
        \u0275\u0275text(9);
        \u0275\u0275pipe(10, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(6);
        \u0275\u0275conditional(ctx.form ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275property("mat-dialog-close", ctx.form.value);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 3, "COMMON.CONTINUE"), " ");
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
            <h2 class="px-2 text-xl font-medium">Set date and time</h2>
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
                {{ 'COMMON.CONTINUE' | translate }}
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SetDatetimeModalComponent, { className: "SetDatetimeModalComponent", filePath: "libs/explore/src/lib/set-datetime-modal.component.ts", lineNumber: 152 });
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
    ], styles: ["\n.top.left[_ngcontent-%COMP%] {\n  border-radius: 0 0.5rem 0.5rem 0.5rem;\n}\n.top.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0 0.5rem 0.5rem;\n}\n.bottom.left[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0.5rem 0;\n}\n.bottom.right[_ngcontent-%COMP%] {\n  border-radius: 0.5rem 0.5rem 0 0.5rem;\n}\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  transform: rotate(0deg);\n}\n.top.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  left: 0.25rem;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n}\n.top.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  top: 0.25rem;\n  right: 0.25rem;\n  border-width: 0.5rem 0 0 0.5rem;\n  border-color: currentColor transparent transparent transparent;\n}\n.bottom.left[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  left: 0.25rem;\n  border-width: 0 0.5rem 0.5rem 0;\n  border-color: transparent transparent currentColor transparent;\n}\n.bottom.right[_ngcontent-%COMP%]   .triangle[_ngcontent-%COMP%] {\n  bottom: 0.25rem;\n  right: 0.25rem;\n  border-width: 0 0 0.5rem 0.5rem;\n  border-color: transparent transparent currentColor transparent;\n}\n[status][_ngcontent-%COMP%] {\n  background-color: var(--success);\n  color: var(--success-content);\n}\n[status].busy[_ngcontent-%COMP%] {\n  background-color: var(--error);\n  color: var(--error-content);\n}\n[status].pending[_ngcontent-%COMP%] {\n  background-color: var(--warn);\n  color: var(--warn-content);\n}\n[status].not-bookable[_ngcontent-%COMP%] {\n  background-color: var(--base-300);\n}\n/*# sourceMappingURL=explore-desk-info.component.css.map */"] });
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
    const mod = Wl(this._details.system, "LocationServices");
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
      loader: ({ params: bld }) => Wu(bld.id, `desk_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
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
      loader: ({ params: lvl }) => Wu(lvl.id, "desks").catch(() => ({ details: [] })).then((i) => (i?.details instanceof Array ? i.details : []).map((j) => new Desk(__spreadProps(__spreadValues({}, j), { zone: lvl }))))
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
    const results = await Promise.all(buildings.map((bld) => Ju(bld.id, { name: "desks" }).then((data) => ({
      building_id: bld.id,
      desks: flatten(data.map((meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((d) => new Desk(__spreadProps(__spreadValues({}, d), {
        zone: meta.zone
      })))))
    })).catch(() => ({
      building_id: bld.id,
      desks: []
    }))));
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

// libs/explore/src/lib/explore-parking-info.component.ts
function ExploreParkingInfoComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 7);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "user");
    \u0275\u0275pipe(3, "async");
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 3, \u0275\u0275pipeBind1(2, 1, ctx_r0.user()))?.name || ctx_r0.user(), " ");
  }
}
function ExploreParkingInfoComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 6);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275conditionalCreate(3, ExploreParkingInfoComponent_Conditional_6_Conditional_3_Template, 4, 5, "div", 7);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r0.status() === "not-bookable" ? \u0275\u0275pipeBind1(2, 2, "COMMON.STATUS_NOT_BOOKABLE") : ctx_r0.status(), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r0.show_parking_users() && ctx_r0.user() ? 3 : -1);
  }
}
function ExploreParkingInfoComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 5)(1, "div", 8);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "div", 9);
    \u0275\u0275text(5);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "BOOKINGS.PARKING_PLATE_NUMBER"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", ctx_r0.plate_number() || "PLATE NO 1", " ");
  }
}
var ExploreParkingInfoComponent = class _ExploreParkingInfoComponent {
  constructor() {
    this._data = inject(MAP_FEATURE_DATA);
    this._element = inject(ElementRef);
    this._settings = inject(SettingsService);
    this.status = computed(
      () => this._data.assigned_to === this._data.user && this._data.user ? "reserved" : this._data.status,
      ...ngDevMode ? [{ debugName: "status" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      this._data.user,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.name = signal(
      this._data.name || this._data.identifier,
      ...ngDevMode ? [{ debugName: "name" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.map_id = signal(
      this._data.map_id,
      ...ngDevMode ? [{ debugName: "map_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.plate_number = signal(
      this._data.plate_number,
      ...ngDevMode ? [{ debugName: "plate_number" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_parking_users = settingSignal("parking.show_users", false);
    this.show_status_details = settingSignal("parking.show_status_details", true);
    this.is_concierge = computed(
      () => this._settings.app_name.toLowerCase().includes("concierge"),
      ...ngDevMode ? [{ debugName: "is_concierge" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  static {
    this.\u0275fac = function ExploreParkingInfoComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ExploreParkingInfoComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ExploreParkingInfoComponent, selectors: [["explore-parking-info"]], decls: 8, vars: 19, consts: [[1, "bg-base-300", "absolute", "top-1/2", "left-1/2", "rounded-lg", "rounded-tl-none!", "p-2", "text-left", "shadow-sm"], [1, "triangle", "absolute", "top-0.5", "left-0.5"], [1, "flex", "space-x-2"], [1, "flex", "min-w-24", "flex-col", "pl-1", "leading-tight"], [1, "whitespace-nowrap"], [1, "bg-base-100", "text-base-content", "relative", "flex", "h-full", "flex-col", "rounded-sm", "px-2", "leading-tight", "shadow-sm"], [1, "text-sm", "font-medium", "capitalize"], [1, "text-sm"], [1, "w-full", "pt-1", "text-center", "text-[0.625rem]", "font-medium", "whitespace-nowrap"], [1, "w-full", "pb-1", "text-center", "font-mono", "uppercase"]], template: function ExploreParkingInfoComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275domElementStart(0, "div", 0);
        \u0275\u0275domElement(1, "div", 1);
        \u0275\u0275domElementStart(2, "div", 2)(3, "div", 3)(4, "div", 4);
        \u0275\u0275text(5);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(6, ExploreParkingInfoComponent_Conditional_6_Template, 4, 4);
        \u0275\u0275domElementEnd();
        \u0275\u0275conditionalCreate(7, ExploreParkingInfoComponent_Conditional_7_Template, 6, 4, "div", 5);
        \u0275\u0275domElementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275classProp("bg-error!", ctx.show_status_details() && ctx.status() === "busy")("text-error-content!", ctx.show_status_details() && ctx.status() === "busy")("bg-warning!", ctx.show_status_details() && ctx.status() === "reserved")("text-warning-content!", ctx.show_status_details() && ctx.status() === "reserved")("bg-success!", ctx.show_status_details() && ctx.status() === "free")("text-success-content!", ctx.show_status_details() && ctx.status() === "free")("bg-neutral!", ctx.show_status_details() && ctx.status() === "not-bookable")("text-neutral-content!", ctx.show_status_details() && ctx.status() === "not-bookable");
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(ctx.name());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_status_details() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.show_status_details() && ctx.is_concierge() && ctx.plate_number() ? 7 : -1);
      }
    }, dependencies: [AsyncPipe, TranslatePipe, UserPipe], styles: ["\n.triangle[_ngcontent-%COMP%] {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExploreParkingInfoComponent, [{
    type: Component,
    args: [{ selector: "explore-parking-info", template: `
        <div
            class="bg-base-300 absolute top-1/2 left-1/2 rounded-lg rounded-tl-none! p-2 text-left shadow-sm"
            [class.bg-error!]="show_status_details() && status() === 'busy'"
            [class.text-error-content!]="
                show_status_details() && status() === 'busy'
            "
            [class.bg-warning!]="
                show_status_details() && status() === 'reserved'
            "
            [class.text-warning-content!]="
                show_status_details() && status() === 'reserved'
            "
            [class.bg-success!]="show_status_details() && status() === 'free'"
            [class.text-success-content!]="
                show_status_details() && status() === 'free'
            "
            [class.bg-neutral!]="
                show_status_details() && status() === 'not-bookable'
            "
            [class.text-neutral-content!]="
                show_status_details() && status() === 'not-bookable'
            "
        >
            <div class="triangle absolute top-0.5 left-0.5"></div>
            <div class="flex space-x-2">
                <div class="flex min-w-24 flex-col pl-1 leading-tight">
                    <div class="whitespace-nowrap">{{ name() }}</div>
                    @if (show_status_details()) {
                        <div class="text-sm font-medium capitalize">
                            {{
                                status() === 'not-bookable'
                                    ? ('COMMON.STATUS_NOT_BOOKABLE' | translate)
                                    : status()
                            }}
                        </div>
                        @if (show_parking_users() && user()) {
                            <div class="text-sm">
                                {{ (user() | user | async)?.name || user() }}
                            </div>
                        }
                    }
                </div>
                @if (
                    show_status_details() && is_concierge() && plate_number()
                ) {
                    <div
                        class="bg-base-100 text-base-content relative flex h-full flex-col rounded-sm px-2 leading-tight shadow-sm"
                    >
                        <div
                            class="w-full pt-1 text-center text-[0.625rem] font-medium whitespace-nowrap"
                        >
                            {{ 'BOOKINGS.PARKING_PLATE_NUMBER' | translate }}
                        </div>
                        <div
                            class="w-full pb-1 text-center font-mono uppercase"
                        >
                            {{ plate_number() || 'PLATE NO 1' }}
                        </div>
                    </div>
                }
            </div>
        </div>
    `, imports: [AsyncPipe, TranslatePipe, UserPipe], styles: ["/* angular:styles/component:css;186a95b4c185bcd2753f7ef9d30513d06855e35c348eb8e66dff829f779ea78f;/home/runner/work/user-interfaces/user-interfaces/libs/explore/src/lib/explore-parking-info.component.ts */\n.triangle {\n  width: 0px;\n  height: 0px;\n  border-style: solid;\n  border-width: 0.5rem 0.5rem 0 0;\n  border-color: currentColor transparent transparent transparent;\n  transform: rotate(0deg);\n}\n/*# sourceMappingURL=explore-parking-info.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreParkingInfoComponent, { className: "ExploreParkingInfoComponent", filePath: "libs/explore/src/lib/explore-parking-info.component.ts", lineNumber: 95 });
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
      loader: ({ params: bld }) => Wu(bld.id, `parking_booking_rules`).then((_) => _?.details instanceof Array ? _.details : []).catch(() => [])
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

// libs/components/src/lib/map-canvas.component.ts
var _c07 = ["canvas"];
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
        \u0275\u0275viewQuerySignal(ctx.canvas_element, _c07, 5);
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
    const zone_metadata = await Promise.all(this._org.levels.map((bld) => Wu(bld.id, "map_regions").catch(() => null)));
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
        const { details } = await Wu(bld.id, "emergency_contacts").catch(() => ({
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
      loader: ({ params: { q } }) => q?.length > 2 ? ia({ q, zone_id: this._org.organisation.id }).then(({ data }) => data.filter((_) => _.map_id).map((_) => new Space(__spreadProps(__spreadValues({}, _), {
        level: this._org.levelWithID(_.zones)
      })))).catch(() => []) : Promise.resolve([])
    }));
    this._desk_search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_desk_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._building() || void 0,
      loader: ({ params: bld }) => Ju(bld.id, { name: "desks" }).then((i) => flatten(i.map((j) => (j.metadata.desks?.details || []).map((k) => new Desk(__spreadProps(__spreadValues({}, k), { zone: j.zone })))))).catch(() => [])
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
        const data = await Ju(this._org.building.id, {
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
      loader: () => Wu(this._org.organisation.id, "points-of-interest").catch((_) => ({ details: {} }))
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
    this.search_fn = (q) => this._settings.get("app.basic_user_search") ? Ma({ q, authority_id: Rt()?.id }).then((_) => _.data) : searchStaff(q);
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
var _c08 = ["input"];
var _c12 = ["button"];
var _forTrack04 = ($index, $item) => $item.name;
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
    \u0275\u0275repeaterCreate(1, ExploreSearchComponent_Conditional_12_For_2_Template, 9, 4, "mat-option", 9, _forTrack04);
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
        \u0275\u0275viewQuerySignal(ctx._input_el, _c08, 5)(ctx._button_el, _c12, 5);
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
    ], styles: ["\n[_nghost-%COMP%] {\n  z-index: 99;\n  position: relative;\n}\n[role=search][_ngcontent-%COMP%] {\n  height: 3rem;\n  width: 0;\n  border-radius: 1.5rem;\n  border: 1px solid var(--base-300);\n  transition: width 200ms opacity 200ms;\n  opacity: 0;\n  pointer-events: none;\n}\n[role=search].show[_ngcontent-%COMP%] {\n  width: 24rem;\n  opacity: 1;\n  pointer-events: auto;\n}\n/*# sourceMappingURL=explore-search.component.css.map */"] });
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
var _c09 = ["switch"];
var _c13 = ["*"];
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
        \u0275\u0275viewQuery(_c09, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx._switchElement = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-slide-toggle"],
    hostVars: 13,
    hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275domProperty("id", ctx.id);
        \u0275\u0275attribute("tabindex", null)("aria-label", null)("name", null)("aria-labelledby", null);
        \u0275\u0275classMap(ctx.color ? "mat-" + ctx.color : "");
        \u0275\u0275classProp("mat-mdc-slide-toggle-focused", ctx._focused)("mat-mdc-slide-toggle-checked", ctx.checked)("_mat-animation-noopable", ctx._noopAnimations);
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
    ngContentSelectors: _c13,
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
    styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n'],
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
      styles: ['.mdc-switch {\n  align-items: center;\n  background: none;\n  border: none;\n  cursor: pointer;\n  display: inline-flex;\n  flex-shrink: 0;\n  margin: 0;\n  outline: none;\n  overflow: visible;\n  padding: 0;\n  position: relative;\n  width: var(--mat-slide-toggle-track-width, 52px);\n}\n.mdc-switch.mdc-switch--disabled {\n  cursor: default;\n  pointer-events: none;\n}\n.mdc-switch.mat-mdc-slide-toggle-disabled-interactive {\n  pointer-events: auto;\n}\n\n.mdc-switch__track {\n  overflow: hidden;\n  position: relative;\n  width: 100%;\n  height: var(--mat-slide-toggle-track-height, 32px);\n  border-radius: var(--mat-slide-toggle-track-shape, var(--mat-sys-corner-full));\n}\n.mdc-switch--disabled.mdc-switch .mdc-switch__track {\n  opacity: var(--mat-slide-toggle-disabled-track-opacity, 0.12);\n}\n.mdc-switch__track::before, .mdc-switch__track::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  height: 100%;\n  left: 0;\n  position: absolute;\n  width: 100%;\n  border-width: var(--mat-slide-toggle-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-track-outline-color, var(--mat-sys-outline));\n}\n.mdc-switch--selected .mdc-switch__track::before, .mdc-switch--selected .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-selected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-selected-track-outline-color, transparent);\n}\n.mdc-switch--disabled .mdc-switch__track::before, .mdc-switch--disabled .mdc-switch__track::after {\n  border-width: var(--mat-slide-toggle-disabled-unselected-track-outline-width, 2px);\n  border-color: var(--mat-slide-toggle-disabled-unselected-track-outline-color, var(--mat-sys-on-surface));\n}\n@media (forced-colors: active) {\n  .mdc-switch__track {\n    border-color: currentColor;\n  }\n}\n.mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0, 0, 0.2, 1);\n  transform: translateX(0);\n  background: var(--mat-slide-toggle-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.6, 1);\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch--selected .mdc-switch__track::before {\n  transform: translateX(-100%);\n}\n.mdc-switch--selected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::before {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-hover-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-focus-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch:enabled:active .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-unselected-pressed-track-color, var(--mat-sys-surface-variant));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::before, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::before, .mdc-switch.mdc-switch--disabled .mdc-switch__track::before {\n  background: var(--mat-slide-toggle-disabled-unselected-track-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch__track::after {\n  transform: translateX(-100%);\n  background: var(--mat-slide-toggle-selected-track-color, var(--mat-sys-primary));\n}\n[dir=rtl] .mdc-switch__track::after {\n  transform: translateX(100%);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  transform: translateX(0);\n}\n.mdc-switch--selected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-visible-track-opacity, 1);\n  transition: var(--mat-slide-toggle-visible-track-transition, opacity 75ms);\n}\n.mdc-switch--unselected .mdc-switch__track::after {\n  opacity: var(--mat-slide-toggle-hidden-track-opacity, 0);\n  transition: var(--mat-slide-toggle-hidden-track-transition, opacity 75ms);\n}\n.mdc-switch:enabled:hover:not(:focus):not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-hover-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:focus:not(:active) .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-focus-track-color, var(--mat-sys-primary));\n}\n.mdc-switch:enabled:active .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-selected-pressed-track-color, var(--mat-sys-primary));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__track::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__track::after, .mdc-switch.mdc-switch--disabled .mdc-switch__track::after {\n  background: var(--mat-slide-toggle-disabled-selected-track-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch__handle-track {\n  height: 100%;\n  pointer-events: none;\n  position: absolute;\n  top: 0;\n  transition: transform 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  left: 0;\n  right: auto;\n  transform: translateX(0);\n  width: calc(100% - var(--mat-slide-toggle-handle-width));\n}\n[dir=rtl] .mdc-switch__handle-track {\n  left: auto;\n  right: 0;\n}\n.mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(100%);\n}\n[dir=rtl] .mdc-switch--selected .mdc-switch__handle-track {\n  transform: translateX(-100%);\n}\n\n.mdc-switch__handle {\n  display: flex;\n  pointer-events: auto;\n  position: absolute;\n  top: 50%;\n  transform: translateY(-50%);\n  left: 0;\n  right: auto;\n  transition: width 75ms cubic-bezier(0.4, 0, 0.2, 1), height 75ms cubic-bezier(0.4, 0, 0.2, 1), margin 75ms cubic-bezier(0.4, 0, 0.2, 1);\n  width: var(--mat-slide-toggle-handle-width);\n  height: var(--mat-slide-toggle-handle-height);\n  border-radius: var(--mat-slide-toggle-handle-shape, var(--mat-sys-corner-full));\n}\n[dir=rtl] .mdc-switch__handle {\n  left: auto;\n  right: 0;\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  height: var(--mat-slide-toggle-unselected-handle-size, 16px);\n  margin: var(--mat-slide-toggle-unselected-handle-horizontal-margin, 0 8px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-unselected-with-icon-handle-horizontal-margin, 0 4px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle {\n  width: var(--mat-slide-toggle-selected-handle-size, 24px);\n  height: var(--mat-slide-toggle-selected-handle-size, 24px);\n  margin: var(--mat-slide-toggle-selected-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected .mdc-switch__handle:has(.mdc-switch__icons) {\n  margin: var(--mat-slide-toggle-selected-with-icon-handle-horizontal-margin, 0 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch__handle:has(.mdc-switch__icons) {\n  width: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n  height: var(--mat-slide-toggle-with-icon-handle-size, 24px);\n}\n.mat-mdc-slide-toggle .mdc-switch:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  width: var(--mat-slide-toggle-pressed-handle-size, 28px);\n  height: var(--mat-slide-toggle-pressed-handle-size, 28px);\n}\n.mat-mdc-slide-toggle .mdc-switch--selected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-selected-pressed-handle-horizontal-margin, 0 22px);\n}\n.mat-mdc-slide-toggle .mdc-switch--unselected:active:not(.mdc-switch--disabled) .mdc-switch__handle {\n  margin: var(--mat-slide-toggle-unselected-pressed-handle-horizontal-margin, 0 2px);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-selected-handle-opacity, 1);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__handle::after {\n  opacity: var(--mat-slide-toggle-disabled-unselected-handle-opacity, 0.38);\n}\n.mdc-switch__handle::before, .mdc-switch__handle::after {\n  border: 1px solid transparent;\n  border-radius: inherit;\n  box-sizing: border-box;\n  content: "";\n  width: 100%;\n  height: 100%;\n  left: 0;\n  position: absolute;\n  top: 0;\n  transition: background-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1), border-color 75ms 0ms cubic-bezier(0.4, 0, 0.2, 1);\n  z-index: -1;\n}\n@media (forced-colors: active) {\n  .mdc-switch__handle::before, .mdc-switch__handle::after {\n    border-color: currentColor;\n  }\n}\n.mdc-switch--selected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-handle-color, var(--mat-sys-on-primary));\n}\n.mdc-switch--selected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-hover-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-focus-handle-color, var(--mat-sys-primary-container));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-selected-pressed-handle-color, var(--mat-sys-primary-container));\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:hover:not(:focus):not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:focus:not(:active) .mdc-switch__handle::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled.mdc-switch--selected:active .mdc-switch__handle::after, .mdc-switch--selected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-selected-handle-color, var(--mat-sys-surface));\n}\n.mdc-switch--unselected:enabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-handle-color, var(--mat-sys-outline));\n}\n.mdc-switch--unselected:enabled:hover:not(:focus):not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-hover-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:focus:not(:active) .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-focus-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-unselected-pressed-handle-color, var(--mat-sys-on-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__handle::after {\n  background: var(--mat-slide-toggle-disabled-unselected-handle-color, var(--mat-sys-on-surface));\n}\n.mdc-switch__handle::before {\n  background: var(--mat-slide-toggle-handle-surface-color);\n}\n\n.mdc-switch__shadow {\n  border-radius: inherit;\n  bottom: 0;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n.mdc-switch:enabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-handle-elevation-shadow);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:hover:not(:focus):not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:focus:not(:active) .mdc-switch__shadow, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:active .mdc-switch__shadow, .mdc-switch.mdc-switch--disabled .mdc-switch__shadow {\n  box-shadow: var(--mat-slide-toggle-disabled-handle-elevation-shadow);\n}\n\n.mdc-switch__ripple {\n  left: 50%;\n  position: absolute;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: -1;\n  width: var(--mat-slide-toggle-state-layer-size, 40px);\n  height: var(--mat-slide-toggle-state-layer-size, 40px);\n}\n.mdc-switch__ripple::after {\n  content: "";\n  opacity: 0;\n}\n.mdc-switch--disabled .mdc-switch__ripple::after {\n  display: none;\n}\n.mat-mdc-slide-toggle-disabled-interactive .mdc-switch__ripple::after {\n  display: block;\n}\n.mdc-switch:hover .mdc-switch__ripple::after {\n  transition: 75ms opacity cubic-bezier(0, 0, 0.2, 1);\n}\n.mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:focus .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:active .mdc-switch__ripple::after, .mat-mdc-slide-toggle-disabled-interactive.mdc-switch--disabled:enabled:hover:not(:focus) .mdc-switch__ripple::after, .mdc-switch--unselected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-hover-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-focus-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--unselected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-unselected-pressed-state-layer-color, var(--mat-sys-on-surface));\n  opacity: var(--mat-slide-toggle-unselected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n.mdc-switch--selected:enabled:hover:not(:focus) .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-hover-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-hover-state-layer-opacity, var(--mat-sys-hover-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:focus .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-focus-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-focus-state-layer-opacity, var(--mat-sys-focus-state-layer-opacity));\n}\n.mdc-switch--selected:enabled:active .mdc-switch__ripple::after {\n  background: var(--mat-slide-toggle-selected-pressed-state-layer-color, var(--mat-sys-primary));\n  opacity: var(--mat-slide-toggle-selected-pressed-state-layer-opacity, var(--mat-sys-pressed-state-layer-opacity));\n  transition: opacity 75ms linear;\n}\n\n.mdc-switch__icons {\n  position: relative;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n  transform: translateZ(0);\n}\n.mdc-switch--disabled.mdc-switch--unselected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-unselected-icon-opacity, 0.38);\n}\n.mdc-switch--disabled.mdc-switch--selected .mdc-switch__icons {\n  opacity: var(--mat-slide-toggle-disabled-selected-icon-opacity, 0.38);\n}\n\n.mdc-switch__icon {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  opacity: 0;\n  transition: opacity 30ms 0ms cubic-bezier(0.4, 0, 1, 1);\n}\n.mdc-switch--unselected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  height: var(--mat-slide-toggle-unselected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--unselected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-unselected-icon-color, var(--mat-sys-surface-variant));\n}\n.mdc-switch--selected .mdc-switch__icon {\n  width: var(--mat-slide-toggle-selected-icon-size, 16px);\n  height: var(--mat-slide-toggle-selected-icon-size, 16px);\n  fill: var(--mat-slide-toggle-selected-icon-color, var(--mat-sys-on-primary-container));\n}\n.mdc-switch--selected.mdc-switch--disabled .mdc-switch__icon {\n  fill: var(--mat-slide-toggle-disabled-selected-icon-color, var(--mat-sys-on-surface));\n}\n\n.mdc-switch--selected .mdc-switch__icon--on,\n.mdc-switch--unselected .mdc-switch__icon--off {\n  opacity: 1;\n  transition: opacity 45ms 30ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n.mat-mdc-slide-toggle {\n  -webkit-user-select: none;\n  user-select: none;\n  display: inline-block;\n  -webkit-tap-highlight-color: transparent;\n  outline: 0;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple,\n.mat-mdc-slide-toggle .mdc-switch__ripple::after {\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  position: absolute;\n  border-radius: 50%;\n  pointer-events: none;\n}\n.mat-mdc-slide-toggle .mat-mdc-slide-toggle-ripple:not(:empty),\n.mat-mdc-slide-toggle .mdc-switch__ripple::after:not(:empty) {\n  transform: translateZ(0);\n}\n.mat-mdc-slide-toggle.mat-mdc-slide-toggle-focused .mat-focus-indicator::before {\n  content: "";\n}\n.mat-mdc-slide-toggle .mat-internal-form-field {\n  color: var(--mat-slide-toggle-label-text-color, var(--mat-sys-on-surface));\n  font-family: var(--mat-slide-toggle-label-text-font, var(--mat-sys-body-medium-font));\n  line-height: var(--mat-slide-toggle-label-text-line-height, var(--mat-sys-body-medium-line-height));\n  font-size: var(--mat-slide-toggle-label-text-size, var(--mat-sys-body-medium-size));\n  letter-spacing: var(--mat-slide-toggle-label-text-tracking, var(--mat-sys-body-medium-tracking));\n  font-weight: var(--mat-slide-toggle-label-text-weight, var(--mat-sys-body-medium-weight));\n}\n.mat-mdc-slide-toggle .mat-ripple-element {\n  opacity: 0.12;\n}\n.mat-mdc-slide-toggle .mat-focus-indicator::before {\n  border-radius: 50%;\n}\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle-track,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__icon,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__handle::after,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::before,\n.mat-mdc-slide-toggle._mat-animation-noopable .mdc-switch__track::after {\n  transition: none;\n}\n.mat-mdc-slide-toggle .mdc-switch:enabled + .mdc-label {\n  cursor: pointer;\n}\n.mat-mdc-slide-toggle .mdc-switch--disabled + label {\n  color: var(--mat-slide-toggle-disabled-label-text-color, var(--mat-sys-on-surface));\n}\n.mat-mdc-slide-toggle label:empty {\n  display: none;\n}\n\n.mat-mdc-slide-toggle-touch-target {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  height: var(--mat-slide-toggle-touch-target-size, 48px);\n  width: 100%;\n  transform: translate(-50%, -50%);\n  display: var(--mat-slide-toggle-touch-target-display, block);\n}\n[dir=rtl] .mat-mdc-slide-toggle-touch-target {\n  left: auto;\n  right: 50%;\n  transform: translate(50%, -50%);\n}\n']
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
var _c010 = () => ({ controls: true });
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
    \u0275\u0275property("@show", ctx_r2.show_levels() ? "show" : "hide");
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
    \u0275\u0275property("@show", ctx_r2.show_legend() ? "show" : "hide");
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
    const mod = Wl(locate_details.system_id, locate_details.module);
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
    ]), \u0275\u0275InheritDefinitionFeature], decls: 29, vars: 18, consts: [["accessibility_controls", ""], ["levelMenu", "matMenu"], ["legendMenu", "matMenu"], ["topbar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "relative", "flex", "items-center", "justify-between", "border-b", "px-4", "py-2"], ["matRipple", "", "routerLink", "/", 1, "rounded-sm", "p-2", "text-2xl"], ["auth", "", "alt", "Logo", 1, "h-12", 3, "source"], [1, "absolute", "top-1/2", "right-2", "flex", "-translate-y-1/2", "items-center"], ["icon", "", "matRipple", "", "customTooltip", "", 1, "bg-base-200", "flex", "sm:hidden", 3, "content"], ["options", "", 1, "bg-base-content", "text-base-100", "flex", "items-center", "space-x-2", "p-2", "sm:hidden"], [1, "flex", "h-1/2", "flex-1"], ["sidebar", "", 1, "border-base-300", "bg-base-100", "text-base-content", "hidden", "w-[20rem]", "overflow-auto", "border-r", "px-2", "py-4", "sm:block"], ["btn", "", "matRipple", "", 1, "items", "clear", "hover:bg-base-200", "flex", "w-full", "space-x-4", 3, "click"], [1, "text-2xl"], [1, "flex-1", "text-left", "font-medium"], [1, "px-8"], [1, "space-y-2", "py-4"], [1, "mx-auto", "w-[calc(100%-4rem)]"], [1, "relative", "h-full", "flex-1"], [1, "absolute", "inset-0"], [3, "zoomChange", "centerChange", "src", "zoom", "center", "styles", "features", "actions", "labels", "options", "focus"], [1, "bg-base-100", "w-[18rem]", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "clear", "text-base-100", 3, "matMenuTriggerFor"], ["mat-menu-item", ""], ["mat-menu-item", "", 3, "click"], [1, "hover:bg-base-200", "flex", "w-full", "items-center", "space-x-4", "rounded-sm", "px-4", "py-2"], [1, "h-3", "w-3", "rounded-full"], [1, "text-left", "opacity-60"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "opacity-30"], ["btn", "", "matRipple", "", 1, "clear", "hover:bg-base-200", "w-full", "hover:opacity-100", 3, "click"], [1, "w-full", "text-left"]], template: function ExploreComponent_Template(rf, ctx) {
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
        \u0275\u0275conditionalCreate(13, ExploreComponent_Conditional_13_Template, 12, 2);
        \u0275\u0275conditionalCreate(14, ExploreComponent_Conditional_14_Template, 12, 2);
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
        \u0275\u0275property("@show", ctx.show_accessibility() ? "show" : "hide");
        \u0275\u0275advance(6);
        \u0275\u0275property("src", ctx.url())("zoom", ctx.positions()?.zoom)("center", ctx.positions()?.center)("styles", ctx.styles())("features", ctx.features())("actions", ctx.actions())("labels", ctx.labels())("options", \u0275\u0275pureFunction0(17, _c010))("focus", ctx.locate());
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
    ], styles: ["\n[_nghost-%COMP%] {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: var(--base-200);\n}\nhr[_ngcontent-%COMP%] {\n  margin-top: 0.5rem !important;\n  margin-bottom: 0.5rem !important;\n}\n/*# sourceMappingURL=explore.component.css.map */"], data: { animation: [ANIMATION_SHOW_CONTRACT_EXPAND] } });
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
                    <div class="px-8" [@show]="show_levels() ? 'show' : 'hide'">
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
                    <div class="px-8" [@show]="show_legend() ? 'show' : 'hide'">
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
                    class="px-8"
                    [@show]="show_accessibility() ? 'show' : 'hide'"
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
    ], animations: [ANIMATION_SHOW_CONTRACT_EXPAND], imports: [
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
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ExploreComponent, { className: "ExploreComponent", filePath: "apps/map-kiosk/src/app/explore.component.ts", lineNumber: 300 });
})();

// apps/visitor-kiosk/src/app/explore.routes.ts
var ROUTES = [
  { path: "", component: ExploreComponent },
  { path: ":search_type", component: ExploreComponent }
];
export {
  ROUTES
};
//# sourceMappingURL=explore.routes-YQ3FNMFA.js.map
