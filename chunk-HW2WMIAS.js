import {
  MatMenu,
  MatMenuContent,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-I67FZ77R.js";
import {
  MatCheckbox,
  MatCheckboxModule,
  MatRadioButton,
  MatRadioGroup,
  MatRadioModule,
  UserAvatarComponent,
  queryAssetCategories,
  queryGroupAvailability,
  queryTypeAssetsForZones,
  queryTypeAssetsInZone,
  resolveHiddenAssetTypeId,
  validateAssetRequestsForResource
} from "./chunk-TZFQO2A3.js";
import {
  MatProgressSpinner,
  MatProgressSpinnerModule
} from "./chunk-Q767FAJL.js";
import {
  MatSelect,
  MatSelectModule
} from "./chunk-TVNMHGFB.js";
import {
  setAuthCookie
} from "./chunk-LNJN6GSE.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-WXD2DLPA.js";
import {
  MAT_FORM_FIELD,
  MatError,
  MatFormField,
  MatFormFieldModule,
  MatPrefix,
  MatSuffix
} from "./chunk-3Q6NRYPL.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-KKXSVQXR.js";
import {
  MAT_OPTGROUP,
  MAT_OPTION_PARENT_COMPONENT,
  MatOption,
  MatOptionModule,
  MatOptionSelectionChange,
  _countGroupLabelsBeforeOption,
  _getOptionScrollPosition
} from "./chunk-IF6GX6P3.js";
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogClose,
  MatDialogModule,
  MatDialogRef,
  MatDialogTitle,
  setHours
} from "./chunk-U3GO4QVD.js";
import {
  AnnounceDirective,
  bookedResourceList,
  findBookingClashes,
  queryBookings,
  removeBooking,
  saveBooking,
  searchGuests,
  updateBooking
} from "./chunk-PHIUEXTU.js";
import {
  VirtualKeyboardComponent
} from "./chunk-UNEFCTM7.js";
import {
  FormField,
  disabled,
  email,
  form,
  required,
  validate
} from "./chunk-WOXZESQ7.js";
import {
  TranslatePipe
} from "./chunk-253OYS3S.js";
import {
  IconComponent,
  SafePipe
} from "./chunk-V7GD6JRX.js";
import {
  AbstractControl,
  Booking,
  Calendar,
  DefaultValueAccessor,
  Desk,
  FormsModule,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControl,
  NgControlStatus,
  NgModel,
  OrganisationService,
  RequiredValidator,
  firstValueWhere,
  fromEventRecurrence,
  provideValueAccessor,
  rulesForResource,
  stringToMinutes,
  toBookingRecurrence,
  toQueryString
} from "./chunk-QCMRLFOL.js";
import {
  AsyncHandler,
  CalendarEvent,
  EMPTY_USER,
  GuestUser,
  J,
  Mt,
  SETTING_KEYS,
  SettingsService,
  Space,
  StaffUser,
  Un,
  User,
  V,
  Wi,
  _c,
  addDays,
  addHours,
  addMinutes,
  appDetails,
  bc,
  ce,
  currentUser,
  currentUserCanApprove,
  currentUserIsLoaded,
  currentUserLoaded,
  current_user,
  d,
  differenceInMinutes,
  en,
  endOfDay,
  errorMessage,
  et,
  flatten,
  format,
  formatDuration,
  getAllDayTimeRange,
  getInvalidSignalFields,
  getTimeInTimezone,
  getTimezoneOffsetString,
  getUnixTime,
  guardModelUndefinedWrites,
  hi,
  i18n,
  isAfter,
  isBefore,
  isEmptyUser,
  isMobileSafari,
  isWithinBookableHours,
  k,
  li,
  localToTimezone,
  log,
  notifyError,
  notifyWarn,
  oh,
  onFieldChange,
  randomString,
  set,
  setting,
  settingSignal,
  setupFormTimeSync,
  startOfMinute,
  te,
  toDate,
  toVisitorInternalOrExternal,
  uh,
  unique,
  user_group_names
} from "./chunk-PY7SCIED.js";
import {
  MatRipple,
  MatRippleModule
} from "./chunk-ZY2C6ASJ.js";
import {
  CdkScrollableModule,
  OverlayConfig,
  OverlayModule,
  TemplatePortal,
  ViewportRuler,
  createFlexibleConnectedPositionStrategy,
  createOverlayRef,
  createRepositionScrollStrategy
} from "./chunk-SSYVESFM.js";
import {
  ActiveDescendantKeyManager,
  BidiModule,
  BreakpointObserver,
  Breakpoints,
  DOWN_ARROW,
  Directionality,
  ENTER,
  ESCAPE,
  Platform,
  TAB,
  UP_ARROW,
  _IdGenerator,
  _animationsDisabled,
  _getEventTarget,
  _getFocusedElementPierceShadowDom,
  coerceArray,
  hasModifierKey
} from "./chunk-T6A6AC5A.js";
import {
  NavigationEnd,
  Router
} from "./chunk-D4OZLUFK.js";
import {
  ChangeDetectorRef,
  CommonModule,
  Component,
  ContentChildren,
  DatePipe,
  Directive,
  ElementRef,
  EnvironmentInjector,
  EventEmitter,
  Injectable,
  InjectionToken,
  Injector,
  Input,
  NgModule,
  NgZone,
  Observable,
  Output,
  Pipe,
  Renderer2,
  Subject,
  Subscription,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation,
  afterNextRender,
  afterRenderEffect,
  booleanAttribute,
  computed,
  debounced,
  defer,
  delay,
  effect,
  filter,
  first,
  forwardRef,
  inject,
  input,
  map,
  merge,
  model,
  of,
  resource,
  setClassMetadata,
  signal,
  startWith,
  switchMap,
  take,
  tap,
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
  ɵɵcontentQuery,
  ɵɵcontrol,
  ɵɵcontrolCreate,
  ɵɵdeclareLet,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdefinePipe,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomProperty,
  ɵɵdomTemplate,
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
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
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
  ɵɵtemplate,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuery,
  ɵɵviewQuerySignal
} from "./chunk-24GSTF4E.js";
import {
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

// node_modules/date-fns/endOfMinute.js
function endOfMinute(date, options) {
  const _date = toDate(date, options?.in);
  _date.setSeconds(59, 999);
  return _date;
}

// node_modules/date-fns/subHours.js
function subHours(date, amount, options) {
  return addHours(date, -amount, options);
}

// libs/form-fields/src/lib/duration-field.component.ts
var _c0 = ["*"];
var _forTrack0 = ($index, $item) => $item.id;
function DurationFieldComponent_Conditional_0_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 9);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r2.time() + ctx_r2.duration() * 6e4, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_Conditional_0_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.end_time_error(), " ");
  }
}
function DurationFieldComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 5)(1, "input", 6, 1);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275listener("change", function DurationFieldComponent_Conditional_0_Template_input_change_1_listener() {
      \u0275\u0275restoreView(_r1);
      const end_input_r2 = \u0275\u0275reference(2);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.setEndTime(end_input_r2.value));
    })("blur", function DurationFieldComponent_Conditional_0_Template_input_blur_1_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.touch());
    });
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 7);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 8);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(8, DurationFieldComponent_Conditional_0_Conditional_8_Template, 3, 5, "div", 9);
    \u0275\u0275conditionalCreate(9, DurationFieldComponent_Conditional_0_Conditional_9_Template, 2, 1, "div", 10);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.end_time_value())("disabled", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 11, "FORM.TIME_END"))("aria-invalid", !!ctx_r2.end_time_error());
    \u0275\u0275advance(3);
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 13, "FORM.DURATION_CHOOSE"));
    \u0275\u0275advance(4);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 8 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.end_time_error() ? 9 : -1);
  }
}
function DurationFieldComponent_Conditional_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r2.selected()?.date, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 11)(1, "div", 12)(2, "div", 13);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DurationFieldComponent_Conditional_1_Conditional_6_Template, 3, 5, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "icon", 8);
    \u0275\u0275text(8, "arrow_drop_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r2.selected()?.date ? \u0275\u0275pipeBind2(4, 8, ctx_r2.selected()?.date, ctx_r2.selected().id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : ctx_r2.duration_options()?.length ? "" : \u0275\u0275pipeBind1(5, 11, "FORM.DURATION_EMPTY"), "", ctx_r2.selected()?.name, "", ctx_r2.selected()?.date ? ")" : "", " ");
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 6 : -1);
  }
}
function DurationFieldComponent_ng_template_4_For_1_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 14);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r6.date, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_ng_template_4_For_1_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 20);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275text(2, " done ");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275property("label", \u0275\u0275pipeBind1(1, 1, "COMMON.SELECTED"));
  }
}
function DurationFieldComponent_ng_template_4_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 17);
    \u0275\u0275listener("click", function DurationFieldComponent_ng_template_4_For_1_Template_button_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext(2);
      ctx_r2.setValue(option_r6.id);
      return \u0275\u0275resetView(ctx_r2.touch());
    });
    \u0275\u0275elementStart(1, "div", 18)(2, "div", 19)(3, "div", 13);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, DurationFieldComponent_ng_template_4_For_1_Conditional_6_Template, 3, 5, "div", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(7, DurationFieldComponent_ng_template_4_For_1_Conditional_7_Template, 3, 3, "icon", 20);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275attribute("data-duration", option_r6.id);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate3(" ", option_r6.date ? \u0275\u0275pipeBind2(5, 6, option_r6.date, option_r6.id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : "", "", option_r6.name, "", option_r6.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected()?.id === option_r6.id ? 7 : -1);
  }
}
function DurationFieldComponent_ng_template_4_ForEmpty_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "FORM.DURATION_EMPTY"), " ");
  }
}
function DurationFieldComponent_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275repeaterCreate(0, DurationFieldComponent_ng_template_4_For_1_Template, 8, 9, "button", 15, _forTrack0, false, DurationFieldComponent_ng_template_4_ForEmpty_2_Template, 3, 3, "div", 16);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275repeater(ctx_r2.duration_options());
  }
}
var DurationFieldComponent = class _DurationFieldComponent {
  constructor() {
    this.max = input(
      240,
      ...ngDevMode ? [{ debugName: "max" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.min = input(
      30,
      ...ngDevMode ? [{ debugName: "min" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.step = input(
      15,
      ...ngDevMode ? [{ debugName: "step" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "time" }] : (
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
    this.custom_options = input(
      [],
      ...ngDevMode ? [{ debugName: "custom_options" }] : (
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
    this.timezone = input(
      "",
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time = input(
      void 0,
      ...ngDevMode ? [{ debugName: "end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_end_time = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_end_time" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_error = signal(
      "",
      ...ngDevMode ? [{ debugName: "end_time_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.end_time_value = computed(
      () => this.time() != null ? format(addMinutes(this.time(), this.duration()), "HH:mm") : "",
      ...ngDevMode ? [{ debugName: "end_time_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration = signal(
      60,
      ...ngDevMode ? [{ debugName: "duration" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.duration_options = signal(
      [],
      ...ngDevMode ? [{ debugName: "duration_options" }] : (
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
    this._injector = inject(Injector);
    this.time_format = computed(
      () => this.use_24hr() ? "HH : mm" : "h : mm a",
      ...ngDevMode ? [{ debugName: "time_format" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected = computed(
      () => this.duration_options().find((_) => _.id === this.duration()),
      ...ngDevMode ? [{ debugName: "selected" }] : (
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
    this._setDurationOptions();
    this._updateNoOptions();
    this._updateOption();
  }
  ngOnChanges(changes) {
    this._clearEndTimeError();
    if (changes.max || changes.min || changes.step || changes.time || changes.custom_options || changes.end_time || changes.timezone) {
      this._setDurationOptions();
      this._updateNoOptions();
      this._updateOption();
    }
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this._clearEndTimeError();
    this.duration.set(new_value);
    if (this._onChange) {
      this._onChange(+new_value);
    }
  }
  touch() {
    this._onTouch?.(this.duration());
  }
  /** Convert a local end time on the reference date to a duration in minutes. */
  setEndTime(value) {
    const start = this.time();
    if (!this.allow_end_time() || start == null || this.disabled() || this.no_options())
      return;
    const match = /^([01]\d|2[0-3]):([0-5]\d)$/.exec(value);
    const end = match ? set(start, {
      hours: +match[1],
      minutes: +match[2],
      seconds: 0,
      milliseconds: 0
    }) : void 0;
    const duration = end ? differenceInMinutes(end, start) : NaN;
    if (!Number.isFinite(duration) || duration <= 0 || duration < this.min() || duration > this._effectiveMax(this.max(), start)) {
      this.end_time_error.set(i18n("FORM.DURATION_END_ERROR"));
      this._onValidatorChange?.();
      this.touch();
      return;
    }
    this.setValue(duration);
    this._setDurationOptions();
    this._updateNoOptions();
    this.touch();
  }
  _clearEndTimeError() {
    if (!this.end_time_error())
      return;
    this.end_time_error.set("");
    this._onValidatorChange?.();
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this._clearEndTimeError();
    this.duration.set(value);
    this._setDurationOptions();
    this._updateNoOptions();
    this._updateOption(true);
  }
  _setDurationOptions() {
    this.duration_options.set(this.generateDurationOptions(this.max(), this.min(), this.step()));
  }
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
    this._updateNoOptions();
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
  /** Mark the control invalid when the selected date has no valid durations. */
  validate(_) {
    if (this.no_options())
      return { no_duration_options: true };
    return this.end_time_error() ? { invalid_end_time: true } : null;
  }
  registerOnValidatorChange(fn) {
    this._onValidatorChange = fn;
  }
  generateDurationOptions(max, min, step) {
    const blocks = [];
    let time = min;
    const timeValue = this.time();
    const date = timeValue ? timeValue : null;
    const effective_max = this._effectiveMax(max, timeValue);
    const latest_end_max = this._effectiveMax(Number.POSITIVE_INFINITY, timeValue);
    const custom_option_ids = new Set([...this.custom_options(), this.duration()].map((_) => Math.round(+_ || 0)).filter((_) => _ > 0));
    for (const option of custom_option_ids) {
      blocks.push({
        id: option,
        date: date && option < 24 * 60 ? addMinutes(date, option).valueOf() : void 0,
        name: option >= 24 * 60 ? `${formatDuration({
          days: Math.floor(option / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(option / 60),
          minutes: option % 60
        })}`
      });
    }
    while (time <= effective_max) {
      blocks.push({
        id: time,
        date: date && time < 24 * 60 ? addMinutes(date, time).valueOf() : void 0,
        name: time === 0 ? formatDuration({ minutes: 0 }, { zero: true }) : time >= 24 * 60 ? `${formatDuration({
          days: Math.floor(time / (24 * 60))
        })}` : `${formatDuration({
          hours: Math.floor(Math.abs(time) / 60),
          minutes: time % 60
        })}`
      });
      time += step;
    }
    blocks.sort((a, b) => a.id - b.id);
    return blocks.filter((option, index, options) => (index === 0 || options[index - 1].id !== option.id) && option.id > 0 && (custom_option_ids.has(option.id) ? option.id <= latest_end_max : option.id >= min && option.id <= effective_max));
  }
  /** Update whether the field should show as disabled due to no options */
  _updateNoOptions() {
    const next_no_options = !this.disabled() && (!this.duration_options() || this.duration_options().length === 0);
    if (this.no_options() === next_no_options)
      return;
    this.no_options.set(next_no_options);
    this._onValidatorChange?.();
  }
  /**
   * Select the first option when the duration is not an option.
   * @param from_write Whether the form wrote the value. The form still gets
   * the new value. A reactive or template form stays pristine, as the user
   * did not change it.
   */
  _updateOption(from_write = false) {
    const duration_options = this.duration_options();
    if (!duration_options?.length)
      return;
    const idx = duration_options.findIndex((_) => _.id === this.duration());
    if (idx >= 0)
      return;
    const control = from_write ? this._injector.get(NgControl, null, {
      self: true,
      optional: true
    })?.control : null;
    const pristine = control instanceof AbstractControl && control.pristine;
    this.setValue(duration_options[0]?.id ?? this.min());
    if (pristine)
      control.markAsPristine();
  }
  _effectiveMax(max, time_value) {
    const end_time = this.end_time();
    if (end_time === void 0 || end_time === null || !time_value) {
      return max;
    }
    const end_time_minutes = end_time * 60;
    const tz = this.timezone() || void 0;
    const { hours, minutes } = getTimeInTimezone(time_value, tz);
    const start_minutes = hours * 60 + minutes;
    return Math.max(0, Math.min(max, end_time_minutes - start_minutes));
  }
  static {
    this.\u0275fac = function DurationFieldComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DurationFieldComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DurationFieldComponent, selectors: [["a-duration-field"], ["duration-field"]], inputs: { max: [1, "max"], min: [1, "min"], step: [1, "step"], time: [1, "time"], disabled: [1, "disabled"], custom_options: [1, "custom_options"], use_24hr: [1, "use_24hr"], timezone: [1, "timezone"], end_time: [1, "end_time"], allow_end_time: [1, "allow_end_time"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      provideValueAccessor(() => _DurationFieldComponent),
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DurationFieldComponent),
        multi: true
      }
    ]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c0, decls: 7, vars: 1, consts: [["menu", "matMenu"], ["end_input", ""], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "opacity-30", "matMenuTriggerFor"], ["xPosition", "before", 1, "max-h-60", "min-w-[18rem]"], ["matMenuContent", ""], [1, "border-neutral", "flex", "h-12", "w-full", "items-center", "rounded-sm", "border"], ["type", "time", 1, "h-full", "min-w-0", "flex-1", "border-0", "bg-transparent", "px-4", 3, "change", "blur", "value", "disabled"], ["type", "button", "end-time-options", "", 1, "flex", "h-full", "w-12", "shrink-0", "items-center", "justify-center", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], [1, "text-xs", "opacity-30"], ["role", "alert", 1, "text-error", "text-sm"], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], ["type", "button", "mat-menu-item", "", 1, "text-left"], ["mat-menu-item", "", "disabled", ""], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, "ml-2", "text-2xl", 3, "label"]], template: function DurationFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, DurationFieldComponent_Conditional_0_Template, 10, 15)(1, DurationFieldComponent_Conditional_1_Template, 9, 13, "button", 2);
        \u0275\u0275elementStart(2, "mat-menu", 3, 0);
        \u0275\u0275template(4, DurationFieldComponent_ng_template_4_Template, 3, 1, "ng-template", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "mat-error");
        \u0275\u0275projection(6);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.allow_end_time() && ctx.time() != null ? 0 : 1);
      }
    }, dependencies: [
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuContent,
      MatMenuTrigger,
      MatFormFieldModule,
      MatError,
      CommonModule,
      IconComponent,
      DatePipe,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.no-subscript[_nghost-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationFieldComponent, [{
    type: Component,
    args: [{ selector: "a-duration-field,duration-field", template: `
        @if (allow_end_time() && time() != null) {
            <div
                class="border-neutral flex h-12 w-full items-center rounded-sm border"
                [class.opacity-30]="disabled() || no_options()"
            >
                <input
                    #end_input
                    type="time"
                    [attr.aria-label]="'FORM.TIME_END' | translate"
                    class="h-full min-w-0 flex-1 border-0 bg-transparent px-4"
                    [value]="end_time_value()"
                    [disabled]="disabled() || no_options()"
                    [attr.aria-invalid]="!!end_time_error()"
                    (change)="setEndTime(end_input.value)"
                    (blur)="touch()"
                />
                <button
                    type="button"
                    end-time-options
                    [attr.aria-label]="'FORM.DURATION_CHOOSE' | translate"
                    class="flex h-full w-12 shrink-0 items-center justify-center"
                    [disabled]="disabled() || no_options()"
                    [matMenuTriggerFor]="menu"
                >
                    <icon class="text-2xl">arrow_drop_down</icon>
                </button>
            </div>
            @if (timezone() && tz()) {
                <div class="text-xs opacity-30">
                    {{
                        time() + duration() * 60000
                            | date: time_format() + ' (z)' : tz()
                    }}
                </div>
            }
            @if (end_time_error()) {
                <div role="alert" class="text-error text-sm">
                    {{ end_time_error() }}
                </div>
            }
        } @else {
            <button
                type="button"
                duration-field
                class="border-neutral flex h-12 w-full items-center justify-between rounded-sm border px-2"
                [disabled]="disabled() || no_options()"
                [class.opacity-30]="disabled() || no_options()"
                matRipple
                [matMenuTriggerFor]="menu"
            >
                <div
                    class="flex w-1/2 flex-1 flex-col px-2 text-left leading-tight"
                >
                    <div class="truncate">
                        {{
                            selected()?.date
                                ? (selected()?.date
                                      | date
                                          : (selected().id >= 24 * 60
                                                ? 'mediumDate'
                                                : time_format())) + ' ('
                                : duration_options()?.length
                                  ? ''
                                  : ('FORM.DURATION_EMPTY' | translate)
                        }}{{ selected()?.name
                        }}{{ selected()?.date ? ')' : '' }}
                    </div>
                    @if (timezone() && tz()) {
                        <div class="truncate text-xs opacity-30">
                            {{
                                selected()?.date
                                    | date: time_format() + ' (z)' : tz()
                            }}
                        </div>
                    }
                </div>
                <icon class="text-2xl">arrow_drop_down</icon>
            </button>
        }
        <mat-menu
            #menu="matMenu"
            xPosition="before"
            class="max-h-60 min-w-[18rem]"
        >
            <!-- Lazy content: the options only render while the menu is open -->
            <ng-template matMenuContent>
                @for (option of duration_options(); track option.id) {
                    <button
                        type="button"
                        mat-menu-item
                        class="text-left"
                        [attr.data-duration]="option.id"
                        (click)="setValue(option.id); touch()"
                    >
                        <div class="flex items-center justify-between">
                            <div class="flex flex-col leading-tight">
                                <div class="truncate">
                                    {{
                                        option.date
                                            ? (option.date
                                                  | date
                                                      : (option.id >= 24 * 60
                                                            ? 'mediumDate'
                                                            : time_format())) +
                                              ' ('
                                            : ''
                                    }}{{ option.name
                                    }}{{ option.date ? ')' : '' }}
                                </div>
                                @if (timezone() && tz()) {
                                    <div class="truncate text-xs opacity-30">
                                        {{
                                            option.date
                                                | date
                                                    : time_format() + ' (z)'
                                                    : tz()
                                        }}
                                    </div>
                                }
                            </div>
                            @if (selected()?.id === option.id) {
                                <icon
                                    class="ml-2 text-2xl"
                                    [label]="'COMMON.SELECTED' | translate"
                                >
                                    done
                                </icon>
                            }
                        </div>
                    </button>
                } @empty {
                    <div mat-menu-item disabled>
                        {{ 'FORM.DURATION_EMPTY' | translate }}
                    </div>
                }
            </ng-template>
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `, providers: [
      provideValueAccessor(() => DurationFieldComponent),
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      }
    ], imports: [
      MatMenuModule,
      MatFormFieldModule,
      CommonModule,
      IconComponent,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;1a90da3d4d9819e7500633b134638efb235f4203ba84410ba53431dd8a393b18;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/duration-field.component.ts */\n:host {\n  width: 100%;\n}\n:host.no-subscript mat-error {\n  display: none;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */\n"] }]
  }], null, { max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], custom_options: [{ type: Input, args: [{ isSignal: true, alias: "custom_options", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], end_time: [{ type: Input, args: [{ isSignal: true, alias: "end_time", required: false }] }], allow_end_time: [{ type: Input, args: [{ isSignal: true, alias: "allow_end_time", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DurationFieldComponent, { className: "DurationFieldComponent", filePath: "libs/form-fields/src/lib/duration-field.component.ts", lineNumber: 217 });
})();

// node_modules/@angular/material/fesm2022/autocomplete.mjs
var _c02 = ["panel"];
var _c1 = ["*"];
function MatAutocomplete_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1, 0);
    \u0275\u0275projection(2);
    \u0275\u0275domElementEnd();
  }
  if (rf & 2) {
    const formFieldId_r1 = ctx.id;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275classMap(ctx_r1._classList);
    \u0275\u0275classProp("mat-mdc-autocomplete-visible", ctx_r1.showPanel)("mat-mdc-autocomplete-hidden", !ctx_r1.showPanel)("mat-autocomplete-panel-animations-enabled", !ctx_r1._animationsDisabled)("mat-primary", ctx_r1._color === "primary")("mat-accent", ctx_r1._color === "accent")("mat-warn", ctx_r1._color === "warn");
    \u0275\u0275domProperty("id", ctx_r1.id);
    \u0275\u0275attribute("aria-label", ctx_r1.ariaLabel || null)("aria-labelledby", ctx_r1._getPanelAriaLabelledby(formFieldId_r1));
  }
}
var MatAutocompleteSelectedEvent = class {
  source;
  option;
  constructor(source, option) {
    this.source = source;
    this.option = option;
  }
};
var MAT_AUTOCOMPLETE_DEFAULT_OPTIONS = new InjectionToken("mat-autocomplete-default-options", {
  providedIn: "root",
  factory: () => ({
    autoActiveFirstOption: false,
    autoSelectActiveOption: false,
    hideSingleSelectionIndicator: false,
    requireSelection: false,
    hasBackdrop: false
  })
});
var MatAutocomplete = class _MatAutocomplete {
  _changeDetectorRef = inject(ChangeDetectorRef);
  _elementRef = inject(ElementRef);
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS);
  _animationsDisabled = _animationsDisabled();
  _activeOptionChanges = Subscription.EMPTY;
  _keyManager;
  showPanel = false;
  get isOpen() {
    return this._isOpen && this.showPanel;
  }
  _isOpen = false;
  _latestOpeningTrigger;
  _setColor(value) {
    this._color = value;
    this._changeDetectorRef.markForCheck();
  }
  _color;
  template;
  panel;
  options;
  optionGroups;
  ariaLabel;
  ariaLabelledby;
  displayWith = null;
  autoActiveFirstOption;
  autoSelectActiveOption;
  requireSelection;
  panelWidth;
  disableRipple = false;
  optionSelected = new EventEmitter();
  opened = new EventEmitter();
  closed = new EventEmitter();
  optionActivated = new EventEmitter();
  set classList(value) {
    this._classList = value;
    this._elementRef.nativeElement.className = "";
  }
  _classList;
  get hideSingleSelectionIndicator() {
    return this._hideSingleSelectionIndicator;
  }
  set hideSingleSelectionIndicator(value) {
    this._hideSingleSelectionIndicator = value;
    this._syncParentProperties();
  }
  _hideSingleSelectionIndicator;
  _syncParentProperties() {
    if (this.options) {
      for (const option of this.options) {
        option._changeDetectorRef.markForCheck();
      }
    }
  }
  id = inject(_IdGenerator).getId("mat-autocomplete-");
  inertGroups;
  constructor() {
    const platform = inject(Platform);
    this.inertGroups = platform?.SAFARI || false;
    this.autoActiveFirstOption = !!this._defaults.autoActiveFirstOption;
    this.autoSelectActiveOption = !!this._defaults.autoSelectActiveOption;
    this.requireSelection = !!this._defaults.requireSelection;
    this._hideSingleSelectionIndicator = this._defaults.hideSingleSelectionIndicator ?? false;
  }
  ngAfterContentInit() {
    this._keyManager = new ActiveDescendantKeyManager(this.options).withWrap().skipPredicate(this._skipPredicate);
    this._activeOptionChanges = this._keyManager.change.subscribe((index) => {
      if (this.isOpen) {
        this.optionActivated.emit({
          source: this,
          option: this.options.toArray()[index] || null
        });
      }
    });
    this._setVisibility();
  }
  ngOnDestroy() {
    this._keyManager?.destroy();
    this._activeOptionChanges.unsubscribe();
  }
  _setScrollTop(scrollTop) {
    if (this.panel) {
      this.panel.nativeElement.scrollTop = scrollTop;
    }
  }
  _getScrollTop() {
    return this.panel ? this.panel.nativeElement.scrollTop : 0;
  }
  _setVisibility() {
    this.showPanel = !!this.options?.length;
    this._changeDetectorRef.markForCheck();
  }
  _emitSelectEvent(option) {
    const event = new MatAutocompleteSelectedEvent(this, option);
    this.optionSelected.emit(event);
  }
  _getPanelAriaLabelledby(labelId) {
    if (this.ariaLabel) {
      return null;
    }
    const labelExpression = labelId ? labelId + " " : "";
    return this.ariaLabelledby ? labelExpression + this.ariaLabelledby : labelId;
  }
  _skipPredicate() {
    return false;
  }
  static \u0275fac = function MatAutocomplete_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocomplete)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MatAutocomplete,
    selectors: [["mat-autocomplete"]],
    contentQueries: function MatAutocomplete_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, MatOption, 5)(dirIndex, MAT_OPTGROUP, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.options = _t);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.optionGroups = _t);
      }
    },
    viewQuery: function MatAutocomplete_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(TemplateRef, 7)(_c02, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.template = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.panel = _t.first);
      }
    },
    hostAttrs: [1, "mat-mdc-autocomplete"],
    inputs: {
      ariaLabel: [0, "aria-label", "ariaLabel"],
      ariaLabelledby: [0, "aria-labelledby", "ariaLabelledby"],
      displayWith: "displayWith",
      autoActiveFirstOption: [2, "autoActiveFirstOption", "autoActiveFirstOption", booleanAttribute],
      autoSelectActiveOption: [2, "autoSelectActiveOption", "autoSelectActiveOption", booleanAttribute],
      requireSelection: [2, "requireSelection", "requireSelection", booleanAttribute],
      panelWidth: "panelWidth",
      disableRipple: [2, "disableRipple", "disableRipple", booleanAttribute],
      classList: [0, "class", "classList"],
      hideSingleSelectionIndicator: [2, "hideSingleSelectionIndicator", "hideSingleSelectionIndicator", booleanAttribute]
    },
    outputs: {
      optionSelected: "optionSelected",
      opened: "opened",
      closed: "closed",
      optionActivated: "optionActivated"
    },
    exportAs: ["matAutocomplete"],
    features: [\u0275\u0275ProvidersFeature([{
      provide: MAT_OPTION_PARENT_COMPONENT,
      useExisting: _MatAutocomplete
    }])],
    ngContentSelectors: _c1,
    decls: 1,
    vars: 0,
    consts: [["panel", ""], ["role", "listbox", 1, "mat-mdc-autocomplete-panel", "mdc-menu-surface", "mdc-menu-surface--open", 3, "id"]],
    template: function MatAutocomplete_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275domTemplate(0, MatAutocomplete_ng_template_0_Template, 3, 17, "ng-template");
      }
    },
    styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--%NS%mat-autocomplete-container-shape, var(--%NS%mat-sys-corner-extra-small));\n  box-shadow: var(--%NS%mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--%NS%mat-autocomplete-background-color, var(--%NS%mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"],
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocomplete, [{
    type: Component,
    args: [{
      selector: "mat-autocomplete",
      encapsulation: ViewEncapsulation.None,
      exportAs: "matAutocomplete",
      host: {
        "class": "mat-mdc-autocomplete"
      },
      providers: [{
        provide: MAT_OPTION_PARENT_COMPONENT,
        useExisting: MatAutocomplete
      }],
      template: `<ng-template let-formFieldId="id">
  <div
    class="mat-mdc-autocomplete-panel mdc-menu-surface mdc-menu-surface--open"
    role="listbox"
    [id]="id"
    [class]="_classList"
    [class.mat-mdc-autocomplete-visible]="showPanel"
    [class.mat-mdc-autocomplete-hidden]="!showPanel"
    [class.mat-autocomplete-panel-animations-enabled]="!_animationsDisabled"
    [class.mat-primary]="_color === 'primary'"
    [class.mat-accent]="_color === 'accent'"
    [class.mat-warn]="_color === 'warn'"
    [attr.aria-label]="ariaLabel || null"
    [attr.aria-labelledby]="_getPanelAriaLabelledby(formFieldId)"
    #panel>
    <ng-content></ng-content>
  </div>
</ng-template>
`,
      styles: ["div.mat-mdc-autocomplete-panel {\n  width: 100%;\n  max-height: 256px;\n  visibility: hidden;\n  transform-origin: center top;\n  overflow: auto;\n  padding: 8px 0;\n  box-sizing: border-box;\n  position: relative;\n  border-radius: var(--mat-autocomplete-container-shape, var(--mat-sys-corner-extra-small));\n  box-shadow: var(--mat-autocomplete-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));\n  background-color: var(--mat-autocomplete-background-color, var(--mat-sys-surface-container));\n}\n@media (forced-colors: active) {\n  div.mat-mdc-autocomplete-panel {\n    outline: solid 1px;\n  }\n}\n.cdk-overlay-pane:not(.mat-mdc-autocomplete-panel-above) div.mat-mdc-autocomplete-panel {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.mat-mdc-autocomplete-panel-above div.mat-mdc-autocomplete-panel {\n  border-bottom-left-radius: 0;\n  border-bottom-right-radius: 0;\n  transform-origin: center bottom;\n}\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-visible {\n  visibility: visible;\n}\n\ndiv.mat-mdc-autocomplete-panel.mat-mdc-autocomplete-hidden,\n.cdk-overlay-pane:has(> .mat-mdc-autocomplete-hidden) {\n  visibility: hidden;\n  pointer-events: none;\n}\n\n@keyframes _mat-autocomplete-enter {\n  from {\n    opacity: 0;\n    transform: scaleY(0.8);\n  }\n  to {\n    opacity: 1;\n    transform: none;\n  }\n}\n.mat-autocomplete-panel-animations-enabled {\n  animation: _mat-autocomplete-enter 120ms cubic-bezier(0, 0, 0.2, 1);\n}\n\nmat-autocomplete {\n  display: none;\n}\n"]
    }]
  }], () => [], {
    template: [{
      type: ViewChild,
      args: [TemplateRef, {
        static: true
      }]
    }],
    panel: [{
      type: ViewChild,
      args: ["panel"]
    }],
    options: [{
      type: ContentChildren,
      args: [MatOption, {
        descendants: true
      }]
    }],
    optionGroups: [{
      type: ContentChildren,
      args: [MAT_OPTGROUP, {
        descendants: true
      }]
    }],
    ariaLabel: [{
      type: Input,
      args: ["aria-label"]
    }],
    ariaLabelledby: [{
      type: Input,
      args: ["aria-labelledby"]
    }],
    displayWith: [{
      type: Input
    }],
    autoActiveFirstOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autoSelectActiveOption: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    requireSelection: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    panelWidth: [{
      type: Input
    }],
    disableRipple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    optionSelected: [{
      type: Output
    }],
    opened: [{
      type: Output
    }],
    closed: [{
      type: Output
    }],
    optionActivated: [{
      type: Output
    }],
    classList: [{
      type: Input,
      args: ["class"]
    }],
    hideSingleSelectionIndicator: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteOrigin = class _MatAutocompleteOrigin {
  elementRef = inject(ElementRef);
  static \u0275fac = function MatAutocompleteOrigin_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteOrigin)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteOrigin,
    selectors: [["", "matAutocompleteOrigin", ""]],
    exportAs: ["matAutocompleteOrigin"]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteOrigin, [{
    type: Directive,
    args: [{
      selector: "[matAutocompleteOrigin]",
      exportAs: "matAutocompleteOrigin"
    }]
  }], null, null);
})();
var MAT_AUTOCOMPLETE_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => MatAutocompleteTrigger),
  multi: true
};
function getMatAutocompleteMissingPanelError() {
  return Error("Attempting to open an undefined instance of `mat-autocomplete`. Make sure that the id passed to the `matAutocomplete` is correct and that you're attempting to open it after the ngAfterContentInit hook.");
}
var MAT_AUTOCOMPLETE_SCROLL_STRATEGY = new InjectionToken("mat-autocomplete-scroll-strategy", {
  providedIn: "root",
  factory: () => {
    const injector = inject(Injector);
    return () => createRepositionScrollStrategy(injector);
  }
});
var MatAutocompleteTrigger = class _MatAutocompleteTrigger {
  _environmentInjector = inject(EnvironmentInjector);
  _element = inject(ElementRef);
  _injector = inject(Injector);
  _viewContainerRef = inject(ViewContainerRef);
  _zone = inject(NgZone);
  _changeDetectorRef = inject(ChangeDetectorRef);
  _dir = inject(Directionality, {
    optional: true
  });
  _formField = inject(MAT_FORM_FIELD, {
    optional: true,
    host: true
  });
  _viewportRuler = inject(ViewportRuler);
  _scrollStrategy = inject(MAT_AUTOCOMPLETE_SCROLL_STRATEGY);
  _renderer = inject(Renderer2);
  _animationsDisabled = _animationsDisabled();
  _defaults = inject(MAT_AUTOCOMPLETE_DEFAULT_OPTIONS, {
    optional: true
  });
  _overlayRef = null;
  _portal;
  _componentDestroyed = false;
  _initialized = new Subject();
  _keydownSubscription;
  _outsideClickSubscription;
  _cleanupWindowBlur;
  _previousValue = null;
  _valueOnAttach = null;
  _valueOnLastKeydown = null;
  _positionStrategy;
  _manuallyFloatingLabel = false;
  _closingActionsSubscription;
  _viewportSubscription = Subscription.EMPTY;
  _breakpointObserver = inject(BreakpointObserver);
  _handsetLandscapeSubscription = Subscription.EMPTY;
  _canOpenOnNextFocus = true;
  _valueBeforeAutoSelection;
  _pendingAutoselectedOption = null;
  _closeKeyEventStream = new Subject();
  _overlayPanelClass = coerceArray(this._defaults?.overlayPanelClass || []);
  _windowBlurHandler = () => {
    this._canOpenOnNextFocus = this.panelOpen || !this._hasFocus();
  };
  _onChange = () => {
  };
  _onTouched = () => {
  };
  autocomplete;
  position = "auto";
  connectedTo;
  autocompleteAttribute = "off";
  autocompleteDisabled = false;
  _aboveClass = "mat-mdc-autocomplete-panel-above";
  ngAfterViewInit() {
    this._initialized.next();
    this._initialized.complete();
    this._cleanupWindowBlur = this._renderer.listen("window", "blur", this._windowBlurHandler);
  }
  ngOnChanges(changes) {
    if (changes["position"] && this._positionStrategy) {
      this._setStrategyPositions(this._positionStrategy);
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
    }
  }
  ngOnDestroy() {
    this._cleanupWindowBlur?.();
    this._handsetLandscapeSubscription.unsubscribe();
    this._viewportSubscription.unsubscribe();
    this._componentDestroyed = true;
    this._destroyPanel();
    this._closeKeyEventStream.complete();
  }
  get panelOpen() {
    return this._overlayAttached && this.autocomplete.showPanel;
  }
  _overlayAttached = false;
  openPanel() {
    this._openPanelInternal();
  }
  closePanel() {
    this._resetLabel();
    if (!this._overlayAttached) {
      return;
    }
    if (this.panelOpen) {
      this._zone.run(() => {
        this.autocomplete.closed.emit();
      });
    }
    if (this.autocomplete._latestOpeningTrigger === this) {
      this.autocomplete._isOpen = false;
      this.autocomplete._latestOpeningTrigger = null;
    }
    this._overlayAttached = false;
    this._pendingAutoselectedOption = null;
    if (this._overlayRef && this._overlayRef.hasAttached()) {
      this._overlayRef.detach();
      this._closingActionsSubscription.unsubscribe();
    }
    this._updatePanelState();
    if (!this._componentDestroyed) {
      this._changeDetectorRef.detectChanges();
    }
  }
  updatePosition() {
    if (this._overlayAttached) {
      this._overlayRef.updatePosition();
    }
  }
  get panelClosingActions() {
    return merge(this.optionSelections, this.autocomplete._keyManager.tabOut.pipe(filter(() => this._overlayAttached)), this._closeKeyEventStream, this._getOutsideClickStream(), this._overlayRef ? this._overlayRef.detachments().pipe(filter(() => this._overlayAttached)) : of()).pipe(map((event) => event instanceof MatOptionSelectionChange ? event : null));
  }
  optionSelections = defer(() => {
    const options = this.autocomplete ? this.autocomplete.options : null;
    if (options) {
      return options.changes.pipe(startWith(options), switchMap(() => merge(...options.map((option) => option.onSelectionChange))));
    }
    return this._initialized.pipe(switchMap(() => this.optionSelections));
  });
  get activeOption() {
    if (this.autocomplete && this.autocomplete._keyManager) {
      return this.autocomplete._keyManager.activeItem;
    }
    return null;
  }
  _getOutsideClickStream() {
    return new Observable((observer) => {
      const listener = (event) => {
        const clickTarget = _getEventTarget(event);
        const formField = this._formField ? this._formField.getConnectedOverlayOrigin().nativeElement : null;
        const customOrigin = this.connectedTo ? this.connectedTo.elementRef.nativeElement : null;
        if (this._overlayAttached && clickTarget !== this._element.nativeElement && !this._hasFocus() && (!formField || !formField.contains(clickTarget)) && (!customOrigin || !customOrigin.contains(clickTarget)) && !!this._overlayRef && !this._overlayRef.overlayElement.contains(clickTarget)) {
          observer.next(event);
        }
      };
      const cleanups = [this._renderer.listen("document", "click", listener), this._renderer.listen("document", "auxclick", listener), this._renderer.listen("document", "touchend", listener)];
      return () => {
        cleanups.forEach((current) => current());
      };
    });
  }
  writeValue(value) {
    Promise.resolve(null).then(() => this._assignOptionValue(value));
  }
  registerOnChange(fn) {
    this._onChange = fn;
  }
  registerOnTouched(fn) {
    this._onTouched = fn;
  }
  setDisabledState(isDisabled) {
    this._element.nativeElement.disabled = isDisabled;
  }
  _handleKeydown(e) {
    const event = e;
    const keyCode = event.keyCode;
    const hasModifier = hasModifierKey(event);
    if (keyCode === ESCAPE && !hasModifier) {
      event.preventDefault();
    }
    this._valueOnLastKeydown = this._element.nativeElement.value;
    if (this.activeOption && keyCode === ENTER && this.panelOpen && !hasModifier) {
      this.activeOption._selectViaInteraction();
      this._resetActiveItem();
      event.preventDefault();
    } else if (this.autocomplete) {
      const prevActiveItem = this.autocomplete._keyManager.activeItem;
      const isArrowKey = keyCode === UP_ARROW || keyCode === DOWN_ARROW;
      if (keyCode === TAB || isArrowKey && !hasModifier && this.panelOpen) {
        this.autocomplete._keyManager.onKeydown(event);
      } else if (isArrowKey && this._canOpen()) {
        this._openPanelInternal(this._valueOnLastKeydown);
      }
      if (isArrowKey || this.autocomplete._keyManager.activeItem !== prevActiveItem) {
        this._scrollToOption(this.autocomplete._keyManager.activeItemIndex || 0);
        if (this.autocomplete.autoSelectActiveOption && this.activeOption) {
          if (!this._pendingAutoselectedOption) {
            this._valueBeforeAutoSelection = this._valueOnLastKeydown;
          }
          this._pendingAutoselectedOption = this.activeOption;
          this._assignOptionValue(this.activeOption.value);
        }
      }
    }
  }
  _handleInput(event) {
    let target = event.target;
    let value = target.value;
    if (target.type === "number") {
      value = value == "" ? null : parseFloat(value);
    }
    if (this._previousValue !== value) {
      this._previousValue = value;
      this._pendingAutoselectedOption = null;
      if (!this.autocomplete || !this.autocomplete.requireSelection) {
        this._onChange(value);
      }
      if (!value) {
        this._clearPreviousSelectedOption(null, false);
      } else if (this.panelOpen && !this.autocomplete.requireSelection) {
        const selectedOption = this.autocomplete.options?.find((option) => option.selected);
        if (selectedOption) {
          const display = this._getDisplayValue(selectedOption.value);
          if (value !== display) {
            selectedOption.deselect(false);
          }
        }
      }
      if (this._canOpen() && this._hasFocus()) {
        const valueOnAttach = this._valueOnLastKeydown ?? this._element.nativeElement.value;
        this._valueOnLastKeydown = null;
        this._openPanelInternal(valueOnAttach);
      }
    }
  }
  _handleFocus() {
    if (!this._canOpenOnNextFocus) {
      this._canOpenOnNextFocus = true;
    } else if (this._canOpen()) {
      this._previousValue = this._element.nativeElement.value;
      this._attachOverlay(this._previousValue);
      this._floatLabel(true);
    }
  }
  _handleClick() {
    if (this._canOpen() && !this.panelOpen) {
      this._openPanelInternal();
    }
  }
  _hasFocus() {
    return _getFocusedElementPierceShadowDom() === this._element.nativeElement;
  }
  _floatLabel(shouldAnimate = false) {
    if (this._formField && this._formField.floatLabel === "auto") {
      if (shouldAnimate) {
        this._formField._animateAndLockLabel();
      } else {
        this._formField.floatLabel = "always";
      }
      this._manuallyFloatingLabel = true;
    }
  }
  _resetLabel() {
    if (this._manuallyFloatingLabel) {
      if (this._formField) {
        this._formField.floatLabel = "auto";
      }
      this._manuallyFloatingLabel = false;
    }
  }
  _subscribeToClosingActions() {
    const initialRender = new Observable((subscriber) => {
      afterNextRender(() => {
        subscriber.next();
      }, {
        injector: this._environmentInjector
      });
    });
    const optionChanges = this.autocomplete.options?.changes.pipe(tap(() => this._positionStrategy.reapplyLastPosition()), delay(0)) ?? of();
    return merge(initialRender, optionChanges).pipe(switchMap(() => this._zone.run(() => {
      const wasOpen = this.panelOpen;
      this._resetActiveItem();
      this._updatePanelState();
      this._changeDetectorRef.detectChanges();
      if (this.panelOpen) {
        this._overlayRef.updatePosition();
      }
      if (wasOpen !== this.panelOpen) {
        if (this.panelOpen) {
          this._emitOpened();
        } else {
          this.autocomplete.closed.emit();
        }
      }
      return this.panelClosingActions;
    })), take(1)).subscribe((event) => this._setValueAndClose(event));
  }
  _emitOpened() {
    this.autocomplete.opened.emit();
  }
  _destroyPanel() {
    if (this._overlayRef) {
      this.closePanel();
      this._overlayRef.dispose();
      this._overlayRef = null;
    }
  }
  _getDisplayValue(value) {
    const autocomplete = this.autocomplete;
    return autocomplete && autocomplete.displayWith ? autocomplete.displayWith(value) : value;
  }
  _assignOptionValue(value) {
    const toDisplay = this._getDisplayValue(value);
    if (value == null) {
      this._clearPreviousSelectedOption(null, false);
    }
    this._updateNativeInputValue(toDisplay != null ? toDisplay : "");
  }
  _updateNativeInputValue(value) {
    if (this._formField) {
      this._formField._control.value = value;
    } else {
      this._element.nativeElement.value = value;
    }
    this._previousValue = value;
  }
  _setValueAndClose(event) {
    const panel = this.autocomplete;
    const toSelect = event ? event.source : this._pendingAutoselectedOption;
    if (toSelect) {
      this._clearPreviousSelectedOption(toSelect);
      this._assignOptionValue(toSelect.value);
      this._onChange(toSelect.value);
      panel._emitSelectEvent(toSelect);
      this._element.nativeElement.focus();
    } else if (panel.requireSelection && this._element.nativeElement.value !== this._valueOnAttach) {
      this._clearPreviousSelectedOption(null);
      this._assignOptionValue(null);
      this._onChange(null);
    }
    this.closePanel();
  }
  _clearPreviousSelectedOption(skip, emitEvent) {
    this.autocomplete?.options?.forEach((option) => {
      if (option !== skip && option.selected) {
        option.deselect(emitEvent);
      }
    });
  }
  _openPanelInternal(valueOnAttach = this._element.nativeElement.value) {
    this._attachOverlay(valueOnAttach);
    this._floatLabel();
  }
  _attachOverlay(valueOnAttach) {
    if (!this.autocomplete) {
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        throw getMatAutocompleteMissingPanelError();
      } else {
        return;
      }
    }
    let overlayRef = this._overlayRef;
    if (!overlayRef) {
      this._portal = new TemplatePortal(this.autocomplete.template, this._viewContainerRef, {
        id: this._formField?.getLabelId()
      });
      overlayRef = createOverlayRef(this._injector, this._getOverlayConfig());
      this._overlayRef = overlayRef;
      this._viewportSubscription = this._viewportRuler.change().subscribe(() => {
        if (this.panelOpen && overlayRef) {
          overlayRef.updateSize({
            width: this._getPanelWidth()
          });
        }
      });
      this._handsetLandscapeSubscription = this._breakpointObserver.observe(Breakpoints.HandsetLandscape).subscribe((result) => {
        const isHandsetLandscape = result.matches;
        if (isHandsetLandscape) {
          this._positionStrategy.withFlexibleDimensions(true).withGrowAfterOpen(true).withViewportMargin(8);
        } else {
          this._positionStrategy.withFlexibleDimensions(false).withGrowAfterOpen(false).withViewportMargin(0);
        }
      });
    } else {
      this._positionStrategy.setOrigin(this._getConnectedElement());
      overlayRef.updateSize({
        width: this._getPanelWidth()
      });
    }
    if (overlayRef && !overlayRef.hasAttached()) {
      overlayRef.attach(this._portal);
      this._valueOnAttach = valueOnAttach;
      this._valueOnLastKeydown = null;
      this._closingActionsSubscription = this._subscribeToClosingActions();
    }
    const wasOpen = this.panelOpen;
    this.autocomplete._isOpen = this._overlayAttached = true;
    this.autocomplete._latestOpeningTrigger = this;
    this.autocomplete._setColor(this._formField?.color);
    this._updatePanelState();
    if (this.panelOpen && wasOpen !== this.panelOpen) {
      this._emitOpened();
    }
  }
  _handlePanelKeydown = (event) => {
    if (event.keyCode === ESCAPE && !hasModifierKey(event) || event.keyCode === UP_ARROW && hasModifierKey(event, "altKey")) {
      if (this._pendingAutoselectedOption) {
        this._updateNativeInputValue(this._valueBeforeAutoSelection ?? "");
        this._pendingAutoselectedOption = null;
      }
      this._closeKeyEventStream.next();
      this._resetActiveItem();
      event.stopPropagation();
      event.preventDefault();
    }
  };
  _updatePanelState() {
    this.autocomplete._setVisibility();
    if (this.panelOpen) {
      const overlayRef = this._overlayRef;
      if (!this._keydownSubscription) {
        this._keydownSubscription = overlayRef.keydownEvents().subscribe(this._handlePanelKeydown);
      }
      if (!this._outsideClickSubscription) {
        this._outsideClickSubscription = overlayRef.outsidePointerEvents().subscribe();
      }
    } else {
      this._keydownSubscription?.unsubscribe();
      this._outsideClickSubscription?.unsubscribe();
      this._keydownSubscription = this._outsideClickSubscription = void 0;
    }
  }
  _getOverlayConfig() {
    return new OverlayConfig({
      positionStrategy: this._getOverlayPosition(),
      scrollStrategy: this._scrollStrategy(),
      width: this._getPanelWidth(),
      direction: this._dir ?? void 0,
      hasBackdrop: this._defaults?.hasBackdrop,
      backdropClass: this._defaults?.backdropClass || "cdk-overlay-transparent-backdrop",
      panelClass: this._overlayPanelClass,
      disableAnimations: this._animationsDisabled
    });
  }
  _getOverlayPosition() {
    const strategy = createFlexibleConnectedPositionStrategy(this._injector, this._getConnectedElement()).withFlexibleDimensions(false).withPush(false).withPopoverLocation("inline");
    this._setStrategyPositions(strategy);
    this._positionStrategy = strategy;
    return strategy;
  }
  _setStrategyPositions(positionStrategy) {
    const belowPositions = [{
      originX: "start",
      originY: "bottom",
      overlayX: "start",
      overlayY: "top"
    }, {
      originX: "end",
      originY: "bottom",
      overlayX: "end",
      overlayY: "top"
    }];
    const panelClass = this._aboveClass;
    const abovePositions = [{
      originX: "start",
      originY: "top",
      overlayX: "start",
      overlayY: "bottom",
      panelClass
    }, {
      originX: "end",
      originY: "top",
      overlayX: "end",
      overlayY: "bottom",
      panelClass
    }];
    let positions;
    if (this.position === "above") {
      positions = abovePositions;
    } else if (this.position === "below") {
      positions = belowPositions;
    } else {
      positions = [...belowPositions, ...abovePositions];
    }
    positionStrategy.withPositions(positions);
  }
  _getConnectedElement() {
    if (this.connectedTo) {
      return this.connectedTo.elementRef;
    }
    return this._formField ? this._formField.getConnectedOverlayOrigin() : this._element;
  }
  _getPanelWidth() {
    return this.autocomplete.panelWidth || this._getHostWidth();
  }
  _getHostWidth() {
    return this._getConnectedElement().nativeElement.getBoundingClientRect().width;
  }
  _resetActiveItem() {
    const autocomplete = this.autocomplete;
    if (autocomplete.autoActiveFirstOption) {
      let firstEnabledOptionIndex = -1;
      for (let index = 0; index < autocomplete.options.length; index++) {
        const option = autocomplete.options.get(index);
        if (!option.disabled) {
          firstEnabledOptionIndex = index;
          break;
        }
      }
      autocomplete._keyManager.setActiveItem(firstEnabledOptionIndex);
    } else {
      autocomplete._keyManager.setActiveItem(-1);
    }
  }
  _canOpen() {
    const element = this._element.nativeElement;
    return !element.readOnly && !element.disabled && !this.autocompleteDisabled;
  }
  _scrollToOption(index) {
    const autocomplete = this.autocomplete;
    const labelCount = _countGroupLabelsBeforeOption(index, autocomplete.options, autocomplete.optionGroups);
    if (index === 0 && labelCount === 1) {
      autocomplete._setScrollTop(0);
    } else if (autocomplete.panel) {
      const option = autocomplete.options.toArray()[index];
      if (option) {
        const element = option._getHostElement();
        const newScrollPosition = _getOptionScrollPosition(element.offsetTop, element.offsetHeight, autocomplete._getScrollTop(), autocomplete.panel.nativeElement.offsetHeight);
        autocomplete._setScrollTop(newScrollPosition);
      }
    }
  }
  static \u0275fac = function MatAutocompleteTrigger_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteTrigger)();
  };
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _MatAutocompleteTrigger,
    selectors: [["input", "matAutocomplete", ""], ["textarea", "matAutocomplete", ""]],
    hostAttrs: [1, "mat-mdc-autocomplete-trigger"],
    hostVars: 7,
    hostBindings: function MatAutocompleteTrigger_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("focusin", function MatAutocompleteTrigger_focusin_HostBindingHandler() {
          return ctx._handleFocus();
        })("blur", function MatAutocompleteTrigger_blur_HostBindingHandler() {
          return ctx._onTouched();
        })("input", function MatAutocompleteTrigger_input_HostBindingHandler($event) {
          return ctx._handleInput($event);
        })("keydown", function MatAutocompleteTrigger_keydown_HostBindingHandler($event) {
          return ctx._handleKeydown($event);
        })("click", function MatAutocompleteTrigger_click_HostBindingHandler() {
          return ctx._handleClick();
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("autocomplete", ctx.autocompleteAttribute)("role", ctx.autocompleteDisabled ? null : "combobox")("aria-autocomplete", ctx.autocompleteDisabled ? null : "list")("aria-activedescendant", ctx.panelOpen && ctx.activeOption ? ctx.activeOption.id : null)("aria-expanded", ctx.autocompleteDisabled ? null : ctx.panelOpen.toString())("aria-controls", ctx.autocompleteDisabled || !ctx.panelOpen ? null : ctx.autocomplete?.id)("aria-haspopup", ctx.autocompleteDisabled ? null : "listbox");
      }
    },
    inputs: {
      autocomplete: [0, "matAutocomplete", "autocomplete"],
      position: [0, "matAutocompletePosition", "position"],
      connectedTo: [0, "matAutocompleteConnectedTo", "connectedTo"],
      autocompleteAttribute: [0, "autocomplete", "autocompleteAttribute"],
      autocompleteDisabled: [2, "matAutocompleteDisabled", "autocompleteDisabled", booleanAttribute]
    },
    exportAs: ["matAutocompleteTrigger"],
    features: [\u0275\u0275ProvidersFeature([MAT_AUTOCOMPLETE_VALUE_ACCESSOR]), \u0275\u0275NgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteTrigger, [{
    type: Directive,
    args: [{
      selector: `input[matAutocomplete], textarea[matAutocomplete]`,
      host: {
        "class": "mat-mdc-autocomplete-trigger",
        "[attr.autocomplete]": "autocompleteAttribute",
        "[attr.role]": 'autocompleteDisabled ? null : "combobox"',
        "[attr.aria-autocomplete]": 'autocompleteDisabled ? null : "list"',
        "[attr.aria-activedescendant]": "(panelOpen && activeOption) ? activeOption.id : null",
        "[attr.aria-expanded]": "autocompleteDisabled ? null : panelOpen.toString()",
        "[attr.aria-controls]": "(autocompleteDisabled || !panelOpen) ? null : autocomplete?.id",
        "[attr.aria-haspopup]": 'autocompleteDisabled ? null : "listbox"',
        "(focusin)": "_handleFocus()",
        "(blur)": "_onTouched()",
        "(input)": "_handleInput($event)",
        "(keydown)": "_handleKeydown($event)",
        "(click)": "_handleClick()"
      },
      exportAs: "matAutocompleteTrigger",
      providers: [MAT_AUTOCOMPLETE_VALUE_ACCESSOR]
    }]
  }], null, {
    autocomplete: [{
      type: Input,
      args: ["matAutocomplete"]
    }],
    position: [{
      type: Input,
      args: ["matAutocompletePosition"]
    }],
    connectedTo: [{
      type: Input,
      args: ["matAutocompleteConnectedTo"]
    }],
    autocompleteAttribute: [{
      type: Input,
      args: ["autocomplete"]
    }],
    autocompleteDisabled: [{
      type: Input,
      args: [{
        alias: "matAutocompleteDisabled",
        transform: booleanAttribute
      }]
    }]
  });
})();
var MatAutocompleteModule = class _MatAutocompleteModule {
  static \u0275fac = function MatAutocompleteModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _MatAutocompleteModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _MatAutocompleteModule,
    imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
    exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [OverlayModule, MatOptionModule, CdkScrollableModule, MatOptionModule, BidiModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MatAutocompleteModule, [{
    type: NgModule,
    args: [{
      imports: [OverlayModule, MatOptionModule, MatAutocomplete, MatAutocompleteTrigger, MatAutocompleteOrigin],
      exports: [CdkScrollableModule, MatAutocomplete, MatOptionModule, BidiModule, MatAutocompleteTrigger, MatAutocompleteOrigin]
    }]
  }], null, null);
})();

// libs/users/src/lib/staff.fn.ts
var STAFF_ENDPOINT = "/api/staff/v1/people";
async function searchStaff(q, options = {}) {
  const { signal: signal2 } = options;
  const exclude_guests = options.exclude_guests ?? setting("app.staff_search_exclude_guests") === true;
  const fields = [
    "id",
    "name",
    "email",
    "username",
    "organisation",
    "department"
  ];
  const query = toQueryString(__spreadValues({
    q,
    fields: [...fields, ...exclude_guests ? ["unmapped"] : []].join(",")
  }, exclude_guests ? { additional_fields: "userType" } : {}));
  let url = `${STAFF_ENDPOINT}${q || exclude_guests ? "?" + query : ""}`;
  const users = [];
  const visited = /* @__PURE__ */ new Set();
  const limit = 100;
  while (url) {
    signal2?.throwIfAborted();
    const absolute_url = new URL(url, document.baseURI);
    if (absolute_url.origin !== location.origin || absolute_url.pathname.replace(/\/$/, "") !== STAFF_ENDPOINT || visited.has(absolute_url.href)) {
      throw new Error("Invalid staff directory pagination link");
    }
    visited.add(absolute_url.href);
    const list = await d(url);
    signal2?.throwIfAborted();
    for (const item of list) {
      const user_type = item.unmapped?.userType;
      const guest = typeof user_type === "string" ? user_type.toLowerCase() === "guest" : (item.username || "").toLowerCase().includes("#ext#");
      if (exclude_guests && guest)
        continue;
      users.push(new StaffUser(item));
      if (exclude_guests && users.length >= limit)
        return users;
    }
    if (!exclude_guests)
      return users;
    const link = Wi(absolute_url.href).link;
    url = link ? hi(link).next || "" : "";
  }
  return users;
}
async function searchStaffByEmailPrefix(email_prefix) {
  const escaped_prefix = email_prefix.replace(/'/g, "''");
  const query = toQueryString({
    filter: `startsWith(mail,'${escaped_prefix}')`
  });
  const list = await d(`${STAFF_ENDPOINT}?${query}`);
  return list.map((item) => new StaffUser(item));
}
async function showStaff(id) {
  return new StaffUser(await d(`${STAFF_ENDPOINT}/${encodeURIComponent(id)}`));
}

// libs/form-fields/src/lib/user-search-field.component.ts
var _c03 = ["input"];
var _c12 = (a0) => ({ name: a0 });
function UserSearchFieldComponent_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "a-user-avatar", 5);
  }
  if (rf & 2) {
    \u0275\u0275property("user", ctx);
  }
}
function UserSearchFieldComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 6);
    \u0275\u0275text(1, "search");
    \u0275\u0275elementEnd();
  }
}
function UserSearchFieldComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "mat-spinner", 8);
  }
}
function UserSearchFieldComponent_For_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 10)(1, "div", 13);
    \u0275\u0275element(2, "a-user-avatar", 14);
    \u0275\u0275elementStart(3, "div", 15)(4, "div");
    \u0275\u0275text(5);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 16);
    \u0275\u0275text(7);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const user_r1 = ctx.$implicit;
    \u0275\u0275property("value", user_r1);
    \u0275\u0275advance(2);
    \u0275\u0275property("user", user_r1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(user_r1.name);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", user_r1.email, " ");
  }
}
function UserSearchFieldComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 17);
    \u0275\u0275listener("mousedown", function UserSearchFieldComponent_Conditional_14_Template_mat_option_mousedown_0_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275nextContext();
    const term_r2 = \u0275\u0275readContextLet(11);
    \u0275\u0275property("value", term_r2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(2, 2, "FORM.USER_SET_EXTERNAL", \u0275\u0275pureFunction1(5, _c12, term_r2)), " ");
  }
}
function UserSearchFieldComponent_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 11);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const term_r2 = \u0275\u0275readContextLet(11);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind1(2, 2, term_r2 ? "FORM.USER_EMPTY" : ""), " ", ctx_r2.error(), " ");
  }
}
function UserSearchFieldComponent_Conditional_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 18);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("click", function UserSearchFieldComponent_Conditional_18_Template_button_click_0_listener() {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.clearUser());
    });
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "person_cancel");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLEAR"));
  }
}
var UserSearchFieldComponent = class _UserSearchFieldComponent extends AsyncHandler {
  constructor() {
    super(...arguments);
    this.autocomplete = input(
      ...ngDevMode ? [void 0, { debugName: "autocomplete" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.use_basic_search = settingSignal("basic_user_search", false);
    this.search_term = signal(
      "",
      ...ngDevMode ? [{ debugName: "search_term" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.loading = computed(
      () => this._search.isLoading(),
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.user = signal(
      null,
      ...ngDevMode ? [{ debugName: "user" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.selected_user = computed(
      () => {
        const term = this.search_term();
        return term && typeof term !== "string" && term.email !== EMPTY_USER.email ? term : null;
      },
      ...ngDevMode ? [{ debugName: "selected_user" }] : (
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
    this.placeholder = input(
      "FORM.USER_SEARCH",
      ...ngDevMode ? [{ debugName: "placeholder" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.options = input(
      void 0,
      ...ngDevMode ? [{ debugName: "options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests = input(
      void 0,
      ...ngDevMode ? [{ debugName: "guests" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.guests_only = input(
      false,
      ...ngDevMode ? [{ debugName: "guests_only" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disable_search = input(
      false,
      ...ngDevMode ? [{ debugName: "disable_search" }] : (
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
    this.error = input(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.allow_externals = input(
      false,
      ...ngDevMode ? [{ debugName: "allow_externals" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.query_fn = input(
      async (q, signal2) => {
        const guest_query = () => searchGuests(q).catch(() => []);
        if (this.guests_only())
          return guest_query();
        const staff = this.use_basic_search() ? await oh({
          q,
          authority_id: Mt()?.id,
          fields: ["id", "name", "email"].join(",")
        }).then((_) => _.data.map((u) => new User(u))).catch(() => []) : await searchStaff(q, { signal: signal2 }).catch(() => []);
        if (!this.guests())
          return staff;
        return [...staff, ...await guest_query()];
      },
      ...ngDevMode ? [{ debugName: "query_fn" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._debounced_term = debounced(this.search_term, 300);
    this._search = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_search" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => ({ term: this._debounced_term.value() }),
      loader: async ({ params: { term }, abortSignal }) => {
        if (term && typeof term !== "string") {
          const user = term;
          return user.email === EMPTY_USER.email ? [] : [user];
        }
        const selected = this.user();
        if (selected && term === selected.name)
          return [selected];
        if (this.disable_search())
          return [];
        const s = `${term || ""}`.toLowerCase();
        if (this.options()?.length) {
          return this.options().filter((_) => _.email !== EMPTY_USER.email && (_.name?.toLowerCase().includes(s) || _.email?.toLowerCase().includes(s)));
        }
        if (s.length <= 2)
          return [];
        const list = await this.query_fn()(s, abortSignal).catch(() => []);
        return list.filter((_) => !!_ && _.email !== EMPTY_USER.email).sort((a, b) => (a.name?.toLowerCase() || "").localeCompare(b.name?.toLowerCase()));
      }
    }));
    this.search_results = computed(
      () => this._search.value() ?? [],
      ...ngDevMode ? [{ debugName: "search_results" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
    this.setDisabledState = (s) => this.disabled.set(s);
    this._selection_count = 0;
    this._input_el = viewChild("input", __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_input_el" } : (
      /* istanbul ignore next */
      {}
    )), { read: ElementRef }));
    this._autocomplete_trigger = viewChild(
      MatAutocompleteTrigger,
      ...ngDevMode ? [{ debugName: "_autocomplete_trigger" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value, email2) {
    const selection = ++this._selection_count;
    const value = typeof new_value === "string" ? new User({ name: new_value, email: email2 }) : new_value;
    this._onChange ? this._onChange(value) : null;
    this._onTouch ? this._onTouch(value) : null;
    this.user.set(value);
    this.search_term.set(value);
    if (typeof new_value !== "string" && !this.use_basic_search() && (value?.id || value?.email)) {
      uh(value.email || value.id).then((details) => {
        if (!details || selection !== this._selection_count)
          return;
        const updated = new User(__spreadValues(__spreadValues({}, value), new User(details)));
        this._onChange ? this._onChange(updated) : null;
        this.user.set(updated);
        this.search_term.set(updated);
      }).catch(() => value);
    }
  }
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this._selection_count++;
    this.user.set(value);
    this.resetTerm();
  }
  displayFn(user) {
    return user && user.email !== EMPTY_USER.email && user.name ? user.name : "";
  }
  /** Check if a string is a valid email address */
  isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(value);
  }
  /**
   * Set the value from a typed email address
   * @param email Email address to create a user from
   */
  setValueFromEmail(email2) {
    const name = email2.split("@")[0];
    this.setValue(name, email2);
    this.dismissAutocomplete();
  }
  /** Set the value from a picked option. A string is a typed email address */
  selectOption(value) {
    if (typeof value === "string")
      this.setValueFromEmail(value);
    else
      this.setValue(value);
  }
  clearUser() {
    this._selection_count++;
    this.user.set(null);
    this._onChange ? this._onChange(null) : null;
    this._onTouch ? this._onTouch(null) : null;
    this.resetTerm();
  }
  blurInput() {
    this._input_el()?.nativeElement?.blur();
  }
  selectInputText() {
    setTimeout(() => this._input_el()?.nativeElement?.select());
  }
  dismissAutocomplete() {
    setTimeout(() => {
      this._autocomplete_trigger()?.closePanel();
      this.blurInput();
    });
  }
  resetTerm() {
    this.search_term.set(this.user());
    const input2 = this._input_el()?.nativeElement;
    if (input2)
      input2.value = this.displayFn(this.user());
  }
  static {
    this.\u0275fac = /* @__PURE__ */ (() => {
      let \u0275UserSearchFieldComponent_BaseFactory;
      return function UserSearchFieldComponent_Factory(__ngFactoryType__) {
        return (\u0275UserSearchFieldComponent_BaseFactory || (\u0275UserSearchFieldComponent_BaseFactory = \u0275\u0275getInheritedFactory(_UserSearchFieldComponent)))(__ngFactoryType__ || _UserSearchFieldComponent);
      };
    })();
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _UserSearchFieldComponent, selectors: [["a-user-search-field"]], viewQuery: function UserSearchFieldComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._input_el, _c03, 5, ElementRef)(ctx._autocomplete_trigger, MatAutocompleteTrigger, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(2);
      }
    }, inputs: { autocomplete: [1, "autocomplete"], disabled: [1, "disabled"], placeholder: [1, "placeholder"], options: [1, "options"], guests: [1, "guests"], guests_only: [1, "guests_only"], disable_search: [1, "disable_search"], clear: [1, "clear"], error: [1, "error"], allow_externals: [1, "allow_externals"], query_fn: [1, "query_fn"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _UserSearchFieldComponent)]), \u0275\u0275InheritDefinitionFeature], decls: 19, vars: 17, consts: [["input", ""], ["auto", "matAutocomplete"], [1, "flex", "w-full", "space-x-2"], ["appearance", "outline", 1, "w-1/2", "flex-1"], ["matPrefix", "", 1, "mr-2", "-ml-1", "flex", "h-8", "w-8", "items-center", "justify-center"], [3, "user"], [1, "block", "flex", "w-6", "items-center", "justify-center", "text-2xl"], ["keyboard", "", "matInput", "", 3, "ngModelChange", "focus", "blur", "ngModel", "disabled", "matAutocomplete", "placeholder"], ["matSuffix", "", "diameter", "24"], [3, "optionSelected", "displayWith"], [3, "value"], ["disabled", ""], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border"], [1, "flex", "items-center", "space-x-2"], [1, "-ml-2", 3, "user"], [1, "leading-tight"], [1, "text-xs", "opacity-30"], [3, "mousedown", "value"], ["icon", "", "matRipple", "", 1, "border-secondary", "text-secondary", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function UserSearchFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 2)(1, "mat-form-field", 3)(2, "div", 4);
        \u0275\u0275conditionalCreate(3, UserSearchFieldComponent_Conditional_3_Template, 1, 1, "a-user-avatar", 5)(4, UserSearchFieldComponent_Conditional_4_Template, 2, 0, "icon", 6);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "input", 7, 0);
        \u0275\u0275pipe(7, "translate");
        \u0275\u0275listener("ngModelChange", function UserSearchFieldComponent_Template_input_ngModelChange_5_listener($event) {
          return ctx.search_term.set($event);
        })("focus", function UserSearchFieldComponent_Template_input_focus_5_listener() {
          return ctx.selectInputText();
        })("blur", function UserSearchFieldComponent_Template_input_blur_5_listener() {
          return ctx.resetTerm();
        });
        \u0275\u0275elementEnd();
        \u0275\u0275controlCreate();
        \u0275\u0275conditionalCreate(8, UserSearchFieldComponent_Conditional_8_Template, 1, 0, "mat-spinner", 8);
        \u0275\u0275elementStart(9, "mat-autocomplete", 9, 1);
        \u0275\u0275listener("optionSelected", function UserSearchFieldComponent_Template_mat_autocomplete_optionSelected_9_listener($event) {
          return ctx.selectOption($event.option.value);
        });
        \u0275\u0275declareLet(11);
        \u0275\u0275repeaterCreate(12, UserSearchFieldComponent_For_13_Template, 8, 4, "mat-option", 10, \u0275\u0275repeaterTrackByIndex);
        \u0275\u0275conditionalCreate(14, UserSearchFieldComponent_Conditional_14_Template, 3, 7, "mat-option", 10);
        \u0275\u0275conditionalCreate(15, UserSearchFieldComponent_Conditional_15_Template, 3, 4, "mat-option", 11);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(16, "mat-error");
        \u0275\u0275text(17);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(18, UserSearchFieldComponent_Conditional_18_Template, 4, 3, "button", 12);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        let tmp_3_0;
        const auto_r5 = \u0275\u0275reference(10);
        \u0275\u0275advance();
        \u0275\u0275classProp("no-subscript", !ctx.error() && !ctx.selected_user());
        \u0275\u0275advance(2);
        \u0275\u0275conditional((tmp_3_0 = ctx.selected_user()) ? 3 : 4, tmp_3_0);
        \u0275\u0275advance(2);
        \u0275\u0275property("ngModel", ctx.search_term())("disabled", ctx.disabled())("matAutocomplete", auto_r5)("placeholder", \u0275\u0275pipeBind1(7, 14, ctx.placeholder()));
        \u0275\u0275attribute("autocomplete", ctx.autocomplete());
        \u0275\u0275control();
        \u0275\u0275advance(3);
        \u0275\u0275conditional(ctx.loading() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275property("displayWith", ctx.displayFn);
        const user_list_r6 = ctx.search_results();
        \u0275\u0275advance(2);
        const term_r7 = \u0275\u0275storeLet(ctx.search_term());
        \u0275\u0275advance();
        \u0275\u0275repeater(user_list_r6);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(term_r7 && ctx.allow_externals() && ctx.isValidEmail(term_r7) ? 14 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(!user_list_r6?.length && (ctx.search_term() || ctx.error()) && !ctx.disable_search() ? 15 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate(ctx.error());
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.clear() ? 18 : -1);
      }
    }, dependencies: [
      CommonModule,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatPrefix,
      MatSuffix,
      MatInputModule,
      MatInput,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatAutocompleteModule,
      MatAutocomplete,
      MatOption,
      MatAutocompleteTrigger,
      MatRippleModule,
      MatRipple,
      IconComponent,
      UserAvatarComponent,
      VirtualKeyboardComponent,
      TranslatePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\nicon[_ngcontent-%COMP%] {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSearchFieldComponent, [{
    type: Component,
    args: [{ selector: "a-user-search-field", template: `
        <div class="flex w-full space-x-2">
            <mat-form-field
                appearance="outline"
                class="w-1/2 flex-1"
                [class.no-subscript]="!error() && !selected_user()"
            >
                <div
                    matPrefix
                    class="mr-2 -ml-1 flex h-8 w-8 items-center justify-center"
                >
                    @if (selected_user(); as user) {
                        <a-user-avatar [user]="user" />
                    } @else {
                        <icon
                            class="block flex w-6 items-center justify-center text-2xl"
                            >search</icon
                        >
                    }
                </div>
                <input
                    #input
                    keyboard
                    matInput
                    [attr.autocomplete]="autocomplete()"
                    [ngModel]="search_term()"
                    (ngModelChange)="search_term.set($event)"
                    [disabled]="disabled()"
                    [matAutocomplete]="auto"
                    [placeholder]="placeholder() | translate"
                    (focus)="selectInputText()"
                    (blur)="resetTerm()"
                />
                @if (loading()) {
                    <mat-spinner matSuffix diameter="24"></mat-spinner>
                }
                <mat-autocomplete
                    #auto="matAutocomplete"
                    [displayWith]="displayFn"
                    (optionSelected)="selectOption($event.option.value)"
                >
                    @let user_list = search_results();
                    @let term = search_term();
                    @for (user of user_list; track $index) {
                        <mat-option [value]="user">
                            <div class="flex items-center space-x-2">
                                <a-user-avatar class="-ml-2" [user]="user" />
                                <div class="leading-tight">
                                    <div>{{ user.name }}</div>
                                    <div class="text-xs opacity-30">
                                        {{ user.email }}
                                    </div>
                                </div>
                            </div>
                        </mat-option>
                    }
                    @if (term && allow_externals() && isValidEmail(term)) {
                        <!--
                            A string value marks the typed email option. Keep focus in the
                            input on mousedown: blur resets the term, which removes this option
                            before its click
                        -->
                        <mat-option
                            [value]="term"
                            (mousedown)="$event.preventDefault()"
                        >
                            {{
                                'FORM.USER_SET_EXTERNAL'
                                    | translate: { name: term }
                            }}
                        </mat-option>
                    }
                    @if (
                        !user_list?.length &&
                        (search_term() || error()) &&
                        !disable_search()
                    ) {
                        <mat-option disabled>
                            {{ (term ? 'FORM.USER_EMPTY' : '') | translate }}
                            {{ error() }}
                        </mat-option>
                    }
                </mat-autocomplete>
                <mat-error>{{ error() }}</mat-error>
            </mat-form-field>
            @if (clear()) {
                <button
                    icon
                    matRipple
                    class="border-secondary text-secondary h-12 w-12 rounded-sm border"
                    (click)="clearUser()"
                    [attr.aria-label]="'COMMON.CLEAR' | translate"
                >
                    <icon>person_cancel</icon>
                </button>
            }
        </div>
    `, providers: [provideValueAccessor(() => UserSearchFieldComponent)], imports: [
      CommonModule,
      FormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatProgressSpinnerModule,
      MatAutocompleteModule,
      MatRippleModule,
      IconComponent,
      TranslatePipe,
      UserAvatarComponent,
      VirtualKeyboardComponent
    ], styles: ["/* angular:styles/component:css;d84628be6394a4ab204c469dc548d2d04b7c619d7a49b10690a47d4a374a3d83;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/user-search-field.component.ts */\n:host {\n  display: block;\n}\nicon {\n  top: 0.15em;\n  left: -0.15em;\n}\n/*# sourceMappingURL=user-search-field.component.css.map */\n"] }]
  }], null, { autocomplete: [{ type: Input, args: [{ isSignal: true, alias: "autocomplete", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], placeholder: [{ type: Input, args: [{ isSignal: true, alias: "placeholder", required: false }] }], options: [{ type: Input, args: [{ isSignal: true, alias: "options", required: false }] }], guests: [{ type: Input, args: [{ isSignal: true, alias: "guests", required: false }] }], guests_only: [{ type: Input, args: [{ isSignal: true, alias: "guests_only", required: false }] }], disable_search: [{ type: Input, args: [{ isSignal: true, alias: "disable_search", required: false }] }], clear: [{ type: Input, args: [{ isSignal: true, alias: "clear", required: false }] }], error: [{ type: Input, args: [{ isSignal: true, alias: "error", required: false }] }], allow_externals: [{ type: Input, args: [{ isSignal: true, alias: "allow_externals", required: false }] }], query_fn: [{ type: Input, args: [{ isSignal: true, alias: "query_fn", required: false }] }], _input_el: [{ type: ViewChild, args: ["input", __spreadProps(__spreadValues({}, { read: ElementRef }), { isSignal: true })] }], _autocomplete_trigger: [{ type: ViewChild, args: [forwardRef(() => MatAutocompleteTrigger), { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(UserSearchFieldComponent, { className: "UserSearchFieldComponent", filePath: "libs/form-fields/src/lib/user-search-field.component.ts", lineNumber: 164 });
})();

// libs/components/src/lib/confirm-modal.component.ts
var _c04 = ["heading"];
function ConfirmModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 3);
    \u0275\u0275element(1, "icon", 6)(2, "p", 7);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("icon", ctx_r0.icon());
    \u0275\u0275advance();
    \u0275\u0275property("innerHTML", ctx_r0.safe_content(), \u0275\u0275sanitizeHtml);
  }
}
function ConfirmModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 4)(1, "div", 8);
    \u0275\u0275element(2, "mat-spinner", 9);
    \u0275\u0275elementStart(3, "p", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r0.loading());
  }
}
function ConfirmModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "footer", 5)(1, "button", 11);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "button", 12);
    \u0275\u0275listener("click", function ConfirmModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.onConfirm());
    });
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, ctx_r0.cancel_text()), " ");
    \u0275\u0275advance(2);
    \u0275\u0275classProp("error", ctx_r0.destructive());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 6, ctx_r0.confirm_text()), " ");
  }
}
var CONFIRM_METADATA = {
  height: "auto"
};
var CONFIRM_CONTENT_TAGS = /* @__PURE__ */ new Set([
  "B",
  "BR",
  "EM",
  "I",
  "LI",
  "OL",
  "P",
  "STRONG",
  "UL"
]);
function filterConfirmContent(html) {
  const body = new DOMParser().parseFromString(html, "text/html").body;
  for (const el of Array.from(body.querySelectorAll("*"))) {
    if (!CONFIRM_CONTENT_TAGS.has(el.tagName)) {
      el.replaceWith(...Array.from(el.childNodes));
      continue;
    }
    for (const { name } of Array.from(el.attributes)) {
      el.removeAttribute(name);
    }
  }
  return body.innerHTML;
}
async function openConfirmModal(data, dialog) {
  const ref = dialog.open(ConfirmModalComponent, __spreadProps(__spreadValues({}, CONFIRM_METADATA), {
    data
  }));
  return __spreadProps(__spreadValues({}, await Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ])), {
    loading: (s) => {
      ref.componentInstance.loading?.set(s);
      ref.disableClose = !!s;
    },
    close: () => ref.close()
  });
}
var ConfirmModalComponent = class _ConfirmModalComponent extends AsyncHandler {
  constructor() {
    super();
    this._dialog_ref = inject(MatDialogRef);
    this._data = inject(MAT_DIALOG_DATA);
    this.loading = signal(
      "",
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.event = new EventEmitter();
    this.title = signal(
      this._data.title || i18n("COMMON.CONFIRM"),
      ...ngDevMode ? [{ debugName: "title" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.content = signal(
      this._data.content || "Are you sure?",
      ...ngDevMode ? [{ debugName: "content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.safe_content = computed(
      () => filterConfirmContent(this.content()),
      ...ngDevMode ? [{ debugName: "safe_content" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.confirm_text = signal(
      this._data.confirm_text || "COMMON.ACCEPT",
      ...ngDevMode ? [{ debugName: "confirm_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancel_text = signal(
      this._data.cancel_text || "COMMON.CANCEL",
      ...ngDevMode ? [{ debugName: "cancel_text" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.destructive = signal(
      !!this._data.destructive,
      ...ngDevMode ? [{ debugName: "destructive" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.icon = signal(
      this._data.icon || {
        class: "material-symbols-rounded",
        content: "done"
      },
      ...ngDevMode ? [{ debugName: "icon" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disableClose = () => this._dialog_ref.disableClose = true;
    this.enableClose = () => this._dialog_ref.disableClose = false;
    this._heading = viewChild.required(
      "heading",
      ...ngDevMode ? [{ debugName: "_heading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._focus_on_load = afterRenderEffect(() => {
      if (this.loading())
        this._heading().nativeElement.focus();
    });
  }
  ngOnInit() {
    if (this._data.close_delay) {
      this.timeout("close", () => this._dialog_ref.close(), this._data.close_delay);
    }
  }
  /** User confirmation of the content of the modal */
  onConfirm() {
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function ConfirmModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _ConfirmModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _ConfirmModalComponent, selectors: [["confirm-modal"]], viewQuery: function ConfirmModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._heading, _c04, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance();
      }
    }, features: [\u0275\u0275InheritDefinitionFeature], decls: 7, vars: 3, consts: [["heading", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", "tabindex", "-1", 1, "px-2", "text-xl", "font-medium", "focus:outline-none"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-4", "sm:h-auto"], ["loading", ""], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], [1, "text-5xl", 3, "icon"], ["content", "", 1, "text-center", "[&_ul]:my-2", "[&_ul]:text-left", 3, "innerHTML"], [1, "flex", "h-48", "w-full", "flex-col", "items-center", "justify-center", "space-y-4"], ["diameter", "32", "aria-hidden", "true"], ["announce", ""], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", "name", "accept", 1, "flex-1", 3, "click"]], template: function ConfirmModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2, 0);
        \u0275\u0275text(3);
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, ConfirmModalComponent_Conditional_4_Template, 3, 2, "main", 3)(5, ConfirmModalComponent_Conditional_5_Template, 5, 1, "main", 4);
        \u0275\u0275conditionalCreate(6, ConfirmModalComponent_Conditional_6_Template, 7, 8, "footer", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", ctx.title(), " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.loading() ? 4 : 5);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 6 : -1);
      }
    }, dependencies: [
      MatProgressSpinnerModule,
      MatProgressSpinner,
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      AnnounceDirective,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmModalComponent, [{
    type: Component,
    args: [{ selector: "confirm-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
        >
            <h2
                #heading
                mat-dialog-title
                tabindex="-1"
                class="px-2 text-xl font-medium focus:outline-none"
            >
                {{ title() }}
            </h2>
        </header>
        @if (!loading()) {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-4 sm:h-auto"
            >
                <icon [icon]="icon()" class="text-5xl"></icon>
                <p
                    content
                    class="text-center [&_ul]:my-2 [&_ul]:text-left"
                    [innerHTML]="safe_content()"
                ></p>
            </main>
        } @else {
            <main loading>
                <div
                    class="flex h-48 w-full flex-col items-center justify-center space-y-4"
                >
                    <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                    <p announce>{{ loading() }}</p>
                </div>
            </main>
        }
        @if (!loading()) {
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ cancel_text() | translate }}
                </button>
                <button
                    btn
                    matRipple
                    name="accept"
                    class="flex-1"
                    [class.error]="destructive()"
                    (click)="onConfirm()"
                >
                    {{ confirm_text() | translate }}
                </button>
            </footer>
        }
    `, imports: [
      MatProgressSpinnerModule,
      TranslatePipe,
      IconComponent,
      MatRippleModule,
      MatDialogModule,
      AnnounceDirective
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/confirm-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=confirm-modal.component.css.map */\n"] }]
  }], () => [], { _heading: [{ type: ViewChild, args: ["heading", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(ConfirmModalComponent, { className: "ConfirmModalComponent", filePath: "libs/components/src/lib/confirm-modal.component.ts", lineNumber: 211 });
})();

// libs/components/src/lib/recurring-clash-modal.component.ts
var _forTrack02 = ($index, $item) => $item.booking_start;
function RecurringClashModalComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "tr", 10)(1, "td", 15);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "td", 15);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "date");
    \u0275\u0275pipe(7, "date");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const clash_r1 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 3, clash_r1.booking_start * 1e3, "EEE, MMM d, yyyy"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate2(" ", \u0275\u0275pipeBind2(6, 6, clash_r1.booking_start * 1e3, ctx_r1.time_format()), " - ", \u0275\u0275pipeBind2(7, 9, clash_r1.booking_end * 1e3, ctx_r1.time_format()), " ");
  }
}
async function openRecurringClashModal(data, dialog) {
  const ref = dialog.open(RecurringClashModalComponent, {
    data
  });
  return Promise.race([
    ref.componentInstance.event.pipe(first((_) => _.reason === "done")).toPromise(),
    ref.afterClosed().toPromise()
  ]);
}
var RecurringClashModalComponent = class _RecurringClashModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this._data = inject(MAT_DIALOG_DATA);
    this._dialog_ref = inject(MatDialogRef);
    this.time_format = inject(SettingsService).time_format_signal;
  }
  get clashes() {
    return this._data.clashes || [];
  }
  onConfirm() {
    this.event.emit({ reason: "done" });
    this._dialog_ref.close({ reason: "done" });
  }
  static {
    this.\u0275fac = function RecurringClashModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _RecurringClashModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _RecurringClashModalComponent, selectors: [["placeos-recurring-clash-modal"]], outputs: { event: "event" }, decls: 35, vars: 21, consts: [[1, "relative"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], [1, "flex", "max-h-[60vh]", "w-full", "max-w-[calc(100vw-2rem)]", "flex-col", "items-center", "space-y-4", "overflow-auto", "px-4", "py-2", "sm:max-w-md"], [1, "border-base-200", "bg-warning", "text-warning-content", "flex", "items-center", "space-x-2", "rounded-xl", "border", "p-2", "shadow-sm"], [1, "text-5xl"], [1, "border-base-300", "bg-base-100", "max-h-48", "w-full", "overflow-auto", "rounded-sm", "border"], [1, "w-full", "text-sm"], [1, "bg-base-200", "sticky", "top-0"], [1, "p-2", "text-left"], [1, "border-base-300", "border-t"], [1, "text-base-content/70", "text-center", "text-xs"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "justify-center", "space-x-2", "rounded-sm", "border-none", "p-2"], ["btn", "", "matRipple", "", "mat-dialog-close", "", 1, "inverse", "bg-base-100", "flex-1"], ["btn", "", "matRipple", "", 1, "flex-1", 3, "click"], [1, "p-2"]], template: function RecurringClashModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0)(1, "header", 1)(2, "h2", 2);
        \u0275\u0275text(3);
        \u0275\u0275pipe(4, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(5, "main", 3)(6, "div", 4)(7, "icon", 5);
        \u0275\u0275text(8, "warning");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(9, "p");
        \u0275\u0275text(10);
        \u0275\u0275pipe(11, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(12, "div", 6)(13, "table", 7)(14, "thead", 8)(15, "tr")(16, "th", 9);
        \u0275\u0275text(17);
        \u0275\u0275pipe(18, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(19, "th", 9);
        \u0275\u0275text(20);
        \u0275\u0275pipe(21, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(22, "tbody");
        \u0275\u0275repeaterCreate(23, RecurringClashModalComponent_For_24_Template, 8, 12, "tr", 10, _forTrack02);
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(25, "p", 11);
        \u0275\u0275text(26);
        \u0275\u0275pipe(27, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(28, "footer", 12)(29, "button", 13);
        \u0275\u0275text(30);
        \u0275\u0275pipe(31, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(32, "button", 14);
        \u0275\u0275listener("click", function RecurringClashModalComponent_Template_button_click_32_listener() {
          return ctx.onConfirm();
        });
        \u0275\u0275text(33);
        \u0275\u0275pipe(34, "translate");
        \u0275\u0275elementEnd()()();
      }
      if (rf & 2) {
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(4, 7, "BOOKINGS.RECURRING_CLASHES_TITLE"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(11, 9, "BOOKINGS.RECURRING_CLASHES_MSG"), " ");
        \u0275\u0275advance(7);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(18, 11, "FORM.DATE"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 13, "COMMON.TIME"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275repeater(ctx.clashes);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(27, 15, "BOOKINGS.RECURRING_CLASHES_CONFIRM"), " ");
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(31, 17, "COMMON.CANCEL"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(34, 19, "BOOKINGS.CONTINUE_BOOKING"), " ");
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatRippleModule,
      MatRipple,
      TranslatePipe,
      DatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=recurring-clash-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(RecurringClashModalComponent, [{
    type: Component,
    args: [{ selector: "placeos-recurring-clash-modal", template: `
        <div class="relative">
            <header
                class="bg-base-200 sticky top-0 z-10 m-2 h-14 w-[calc(100%-1rem)] min-w-[20rem] rounded-sm border-none p-2"
            >
                <h2 mat-dialog-title class="px-2 text-xl font-medium">
                    {{ 'BOOKINGS.RECURRING_CLASHES_TITLE' | translate }}
                </h2>
            </header>
            <main
                class="flex max-h-[60vh] w-full max-w-[calc(100vw-2rem)] flex-col items-center space-y-4 overflow-auto px-4 py-2 sm:max-w-md"
            >
                <div
                    class="border-base-200 bg-warning text-warning-content flex items-center space-x-2 rounded-xl border p-2 shadow-sm"
                >
                    <icon class="text-5xl">warning</icon>
                    <p>
                        {{ 'BOOKINGS.RECURRING_CLASHES_MSG' | translate }}
                    </p>
                </div>
                <div
                    class="border-base-300 bg-base-100 max-h-48 w-full overflow-auto rounded-sm border"
                >
                    <table class="w-full text-sm">
                        <thead class="bg-base-200 sticky top-0">
                            <tr>
                                <th class="p-2 text-left">
                                    {{ 'FORM.DATE' | translate }}
                                </th>
                                <th class="p-2 text-left">
                                    {{ 'COMMON.TIME' | translate }}
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            @for (clash of clashes; track clash.booking_start) {
                                <tr class="border-base-300 border-t">
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: 'EEE, MMM d, yyyy'
                                        }}
                                    </td>
                                    <td class="p-2">
                                        {{
                                            clash.booking_start * 1000
                                                | date: time_format()
                                        }}
                                        -
                                        {{
                                            clash.booking_end * 1000
                                                | date: time_format()
                                        }}
                                    </td>
                                </tr>
                            }
                        </tbody>
                    </table>
                </div>
                <p class="text-base-content/70 text-center text-xs">
                    {{ 'BOOKINGS.RECURRING_CLASHES_CONFIRM' | translate }}
                </p>
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center justify-center space-x-2 rounded-sm border-none p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    mat-dialog-close
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button btn matRipple class="flex-1" (click)="onConfirm()">
                    {{ 'BOOKINGS.CONTINUE_BOOKING' | translate }}
                </button>
            </footer>
        </div>
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      TranslatePipe,
      DatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/recurring-clash-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=recurring-clash-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(RecurringClashModalComponent, { className: "RecurringClashModalComponent", filePath: "libs/components/src/lib/recurring-clash-modal.component.ts", lineNumber: 129 });
})();

// libs/events/src/lib/calendar.fn.ts
var CALENDAR_ENDPOINT = "/api/staff/v1/calendars";
async function queryCalendars() {
  const list = await d(CALENDAR_ENDPOINT);
  return list.map((c) => new Calendar(c));
}
async function queryCalendarAvailability(q) {
  const query = toQueryString(q);
  const list = await d(`${CALENDAR_ENDPOINT}/availability${query ? "?" + query : ""}`);
  return list.map((c) => new Calendar(c));
}
var calendarsToSpaces = (list, org) => list.filter((cal) => !!cal.resource).map((cal) => new Space(__spreadProps(__spreadValues({}, cal.resource), {
  level: org?.levelWithID(cal.resource.zones),
  availability: cal.availability
}))).filter((space) => space.bookable);
async function querySpaceFreeBusy(q, org) {
  const query = toQueryString(q);
  const list = await d(`${CALENDAR_ENDPOINT}/free_busy${query ? "?" + query : ""}`);
  return calendarsToSpaces(list.map((c) => new Calendar(c)), org);
}

// libs/events/src/lib/calendar.service.ts
var CalendarService = class _CalendarService extends AsyncHandler {
  constructor() {
    super();
    this._org = inject(OrganisationService);
    this._settings = inject(SettingsService);
    this._calendars = signal(
      [],
      ...ngDevMode ? [{ debugName: "_calendars" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._calendars_request = null;
    this.calendar_list = this._calendars.asReadonly();
    this.query = () => queryCalendars();
    this.freeBusy = (q) => querySpaceFreeBusy(q, this._org);
    this.availability = (q) => queryCalendarAvailability(q);
    this._waitForOrg();
  }
  async init() {
    if (this._settings.get("app.events.use_bookings"))
      return;
    this._initialised.next(true);
  }
  get calendars() {
    return this._calendars();
  }
  async loadCalendars() {
    if (this._calendars().length)
      return;
    this._calendars_request = this._calendars_request || queryCalendars().then((list) => this._calendars.set(list)).catch((error) => {
      log("CalendarService", "Failed to load calendars", error, "warn");
    }).finally(() => this._calendars_request = null);
    await this._calendars_request;
  }
  _waitForOrg() {
    const check = () => {
      if (this._org.initialised())
        return this.init();
      this.timeout("init", check, 100);
    };
    check();
  }
  static {
    this.\u0275fac = function CalendarService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _CalendarService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CalendarService, factory: _CalendarService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CalendarService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/events/src/lib/events.fn.ts
var EVENTS_ENDPOINT = `/api/staff/v1/events`;
function withAppVersion(data) {
  return __spreadProps(__spreadValues({}, data), {
    extension_data: __spreadValues(__spreadValues({}, data.extension_data || {}), appDetails())
  });
}
async function createEvent(data) {
  const item = await k(`${EVENTS_ENDPOINT}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
async function updateEvent(id, data, q = {}, method = "patch") {
  const query = toQueryString(q);
  const item = await (method === "patch" ? te : ce)(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, new CalendarEvent(withAppVersion(data)).toJSON());
  return new CalendarEvent(item);
}
var saveEvent = async (data, q) => {
  const id = data.update_master ? data.recurring_event_id || data.id : data.id;
  delete data?.status;
  return id ? updateEvent(id, __spreadProps(__spreadValues({}, data), { id }), q) : createEvent(data);
};
function removeEvent(id, q = {}) {
  const query = toQueryString(q);
  return V(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}${query ? "?" + query : ""}`, {
    response_type: "void"
  });
}
async function removeEventGuest(id, guest, q = {}) {
  const query = toQueryString(q);
  const item = await V(`${EVENTS_ENDPOINT}/${encodeURIComponent(id)}/attendee/${encodeURIComponent(guest.email)}${query ? "?" + query : ""}`);
  return new GuestUser(item);
}
async function querySpaceAvailability(id_list, start, duration, ignore, type, ignore_period = [0, 0]) {
  const end = addMinutes(start, duration).valueOf();
  const ignore_ids = [ignore ?? []].flat().filter((id) => id_list.includes(id));
  const [spaces, ignore_check] = await Promise.all([
    queryCalendarAvailability({
      system_ids: id_list.join(),
      period_start: getUnixTime(start),
      period_end: getUnixTime(end)
    }).catch(() => []),
    ignore_ids.length ? querySpaceFreeBusy({
      period_start: getUnixTime(start),
      period_end: getUnixTime(end),
      system_ids: ignore_ids.join()
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
function eventSpaceIds(event) {
  const ids = (event?.resources || []).map((_) => _.id).filter(Boolean);
  if (ids.length)
    return ids;
  const fallback = event?.system?.id || event?.id;
  return fallback ? [fallback] : [];
}
async function findEventClashes(event, q = {}) {
  const query = toQueryString(__spreadProps(__spreadValues({}, q), { limit: 1e4 }));
  try {
    const list = await k(`${EVENTS_ENDPOINT}/clashing-assets${query ? "?" + query : ""}`, event.toJSON());
    return q.include_clash_time ? list : list;
  } catch (_) {
    return [];
  }
}

// libs/bookings/src/lib/booking-form.model.ts
function bookingAttachments(booking = new Booking()) {
  booking = booking || new Booking();
  const extension_data = booking.extension_data || {};
  return [
    ...extension_data.attachments || [],
    ...extension_data.p2_document_names || []
  ].filter((item) => !!item);
}
function bookingHostUser(booking = new Booking()) {
  if (!booking?.user_email)
    return currentUser();
  return new User({
    id: booking.user_id || "",
    email: booking.user_email,
    name: booking.user_name || booking.user_email
  });
}
function bookingFormValue(booking = new Booking()) {
  const extension_data = booking.extension_data || {};
  const visitor_name = booking.booking_type === "visitor" ? extension_data.visitor_name || booking.asset_name || "" : booking.asset_name || booking.description;
  return {
    id: booking.id || "",
    parent_id: booking.parent_id || "",
    event_id: booking.event_id || "",
    ical_uid: extension_data.ical_uid || "",
    date: booking.date ?? 0,
    date_end: booking.date_end ?? 0,
    all_day: booking.all_day ?? false,
    name: extension_data.name || booking.asset_name || "",
    duration: booking.duration ?? 0,
    booking_type: booking.booking_type,
    zones: booking.zones || [],
    title: booking.title || "",
    description: booking.description || "",
    booking_asset: {},
    resources: [],
    company: extension_data.company || "",
    asset_id: booking.asset_id || "",
    asset_name: visitor_name || "",
    assets: extension_data.assets || [],
    attendees: booking.attendees || [],
    map_id: extension_data.map_id || "",
    featured: extension_data.featured || false,
    user: bookingHostUser(booking),
    user_id: booking.user_id || "",
    group: booking.group ?? {},
    user_email: booking.user_email || "",
    user_name: booking.user_name || "",
    timezone: booking.timezone || "",
    booked_by: currentUser(),
    booked_by_id: booking.booked_by_id || "",
    booked_by_email: booking.booked_by_email || "",
    // Empty when no secondary resource is requested.
    secondary_resource: extension_data.other_asset_type || extension_data.secondary_resource || "",
    location: extension_data.location || "",
    attendance_type: extension_data.attendance_type || "ANY",
    phone: extension_data.phone || "",
    permission: booking.permission || "PRIVATE",
    images: booking.images || [],
    tags: booking?.tags || [],
    plate_number: extension_data.plate_number || "",
    vehicle_type: extension_data.vehicle_type || "car",
    request_type: extension_data.request_type || "standard",
    requires_manual_approval: extension_data.requires_manual_approval ?? false,
    space_restrictions: extension_data.space_restrictions ?? false,
    extra_space_restrictions: extension_data.extra_space_restrictions ?? [],
    approver_group: extension_data.approver_group || "",
    prefer_booked_location_first: extension_data.prefer_booked_location_first ?? false,
    pass_number: extension_data.pass_number || "",
    international: extension_data.international ?? false,
    visitor_internal_or_external: toVisitorInternalOrExternal(extension_data.visitor_internal_or_external),
    recurrence_custom: extension_data.recurrence_custom ?? false,
    recurrence_type: booking.recurrence_type || "none",
    recurrence_days: booking.recurrence_days ?? 0,
    recurrence_nth_of_month: booking.recurrence_nth_of_month ?? 0,
    recurrence_interval: booking.recurrence_interval ?? 0,
    recurrence_end: booking.recurrence_end ?? 0,
    recurrence_instances: extension_data.recurrence_instances ?? 0,
    notes: extension_data.notes || "",
    attachments: bookingAttachments(booking),
    update_master: false,
    self_registered: false,
    is_assgined: false
  };
}
function setBookingAsset(model2, resource2) {
  if (!resource2) {
    model2.update((m) => __spreadProps(__spreadValues({}, m), { asset_id: "" }));
    return;
  }
  model2.update((m) => __spreadProps(__spreadValues({}, m), {
    asset_id: resource2.id,
    asset_name: resource2.name,
    name: resource2.display_name || resource2.name || resource2.id,
    map_id: resource2.map_id || resource2.id,
    description: resource2.name,
    zones: resource2.zone ? [resource2.zone?.parent_id, resource2.zone?.id] : [],
    booking_asset: resource2
  }));
}
function generateBookingForm(booking = new Booking(), injector) {
  const started = booking.state === "started";
  const model2 = signal(
    bookingFormValue(booking),
    ...ngDevMode ? [{ debugName: "model" }] : (
      /* istanbul ignore next */
      []
    )
  );
  guardModelUndefinedWrites(model2, bookingFormValue(new Booking()));
  const require_plate_number = settingSignal("parking.require_plate_number", false);
  const require_space_restriction = settingSignal("parking.require_space_restriction", false);
  const space_restriction_options = settingSignal("parking.request_space_restrictions", []);
  const space_restriction_required = computed(
    () => !!require_space_restriction() && (space_restriction_options() || []).some((_) => !!_?.id),
    ...ngDevMode ? [{ debugName: "space_restriction_required" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const require_visitor_reason = settingSignal("visitors.reason_required", false);
  const lock_locker_times = settingSignal("lockers.disabled_date_select", false);
  const times_locked = computed(
    () => model2().booking_type === "locker" && !!lock_locker_times(),
    ...ngDevMode ? [{ debugName: "times_locked" }] : (
      /* istanbul ignore next */
      []
    )
  );
  const booking_form = form(model2, (p) => {
    required(p.date);
    required(p.asset_id);
    email(p.asset_id, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "visitor"
    });
    required(p.plate_number, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number()
    });
    validate(p.plate_number, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && require_plate_number() && !`${value() || ""}`.trim() ? { kind: "required" } : void 0);
    required(p.title, {
      when: ({ valueOf }) => valueOf(p.booking_type) === "visitor" && require_visitor_reason()
    });
    validate(p.title, ({ value, valueOf }) => valueOf(p.booking_type) === "visitor" && require_visitor_reason() && !`${value() || ""}`.trim() ? { kind: "required" } : void 0);
    validate(p.space_restrictions, ({ value, valueOf }) => valueOf(p.booking_type) === "parking" && space_restriction_required() && !value() ? { kind: "required" } : void 0);
    validate(p.duration, ({ value, valueOf }) => {
      const date = valueOf(p.date);
      if (value() <= 0)
        return { kind: "duration" };
      return date && isAfter(Date.now(), addMinutes(date, value())) ? { kind: "duration" } : void 0;
    });
    disabled(p.date, ({ value }) => {
      if (started || times_locked())
        return true;
      return value() < Date.now() && !!untracked(model2).id;
    });
    disabled(p.duration, () => times_locked());
  }, { injector });
  onFieldChange(model2, (v) => v.user, (user) => {
    if (!user)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      user,
      user_id: user?.id ?? "",
      user_email: user?.email ?? "",
      user_name: user?.name ?? ""
    }));
  }, injector);
  onFieldChange(model2, (v) => v.resources, (resources) => {
    if (untracked(model2).booking_type === "visitor")
      return;
    setBookingAsset(model2, (resources || [])[0]);
  }, injector);
  current_user.subscribe((user) => {
    if (!user)
      return;
    model2.update((m) => __spreadProps(__spreadValues({}, m), {
      booked_by: user,
      booked_by_id: user?.id,
      booked_by_email: user?.email
    }));
  });
  const time_sync = setupFormTimeSync(model2, {}, injector);
  booking_form._time_sync = time_sync;
  model2._time_sync = time_sync;
  return { model: model2, form: booking_form, time_sync };
}

// libs/bookings/src/lib/booking-form.payload.ts
var BOOKING_MODEL_KEYS = new Set(Object.keys(new Booking()));
var BOOKING_FORM_KEYS = new Set(Object.keys(bookingFormValue(new Booking())));
var BOOKING_EXTENSION_FIELD_BLACKLIST = /* @__PURE__ */ new Set([
  "resources",
  "assets",
  "level"
]);
function formExtensionData(data = {}) {
  const extra = {};
  for (const key in data) {
    if (BOOKING_FORM_KEYS.has(key) && !BOOKING_MODEL_KEYS.has(key) && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key)) {
      extra[key] = data[key];
    }
  }
  return extra;
}
function formBookingData(value) {
  const data = {};
  for (const key in value) {
    if (key === "extension_data") {
      data.extension_data = formExtensionData(value.extension_data);
    } else if (
      // `asset_ids` is spread into the form model from the booking being
      // edited and never updated when `asset_id` changes, so sending it
      // back would overwrite the new resource with the old one. The
      // `Booking` constructor rebuilds it from `asset_id`.
      key !== "asset_ids" && !BOOKING_EXTENSION_FIELD_BLACKLIST.has(key) && (BOOKING_FORM_KEYS.has(key) || BOOKING_MODEL_KEYS.has(key))
    ) {
      data[key] = value[key];
    }
  }
  return data;
}
function buildBookingExtensionData(value, group_members) {
  const type = value.booking_type;
  return __spreadProps(__spreadValues(__spreadValues(__spreadValues(__spreadValues(__spreadProps(__spreadValues(__spreadValues({}, formExtensionData(value.extension_data)), value.extension_data?.payment_id ? { payment_id: value.extension_data.payment_id } : {}), {
    // `group` is a getter on `Booking`, so the constructor skips the
    // top-level form value — it has to be set into `extension_data` here.
    group: value.group,
    // `assets` is ignored by the constructor's auto-copy, so map it here.
    assets: value.assets.map((_) => _.toJSON())
  }), type === "desk" ? {
    assigned_asset_id: value.asset_id,
    assigned_asset_name: value.asset_name || value.asset_id
  } : {}), type === "visitor" ? {
    international: !!value.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(value.visitor_internal_or_external),
    visitor_name: value.asset_name || value.asset_id || ""
  } : {}), type === "parking" ? {
    requires_manual_approval: !!value.requires_manual_approval,
    user_groups: [
      ...value.user && value.user.email?.toLowerCase() !== currentUser()?.email?.toLowerCase() ? value.user.groups || [] : currentUser()?.groups || []
    ]
  } : {}), group_members.length ? { group_members } : {}), {
    department: value.user?.department || currentUser()?.department
  });
}
function bookingSaveQuery(value, booking) {
  const { event_id, parent_id } = value;
  const q = event_id ? { ical_uid: value.ical_uid, event_id } : parent_id ? { booking_id: parent_id } : {};
  if (booking.instance && !value.update_master) {
    q.instance = true;
    q.start_time = booking.booking_start;
  }
  return q;
}

// libs/bookings/src/lib/booking-group.utilities.ts
function isGroupBooking(booking) {
  return !!booking?.parent_id || !!booking?.group || !!booking?.extension_data?.group_members?.length;
}
function groupName(existing) {
  return existing || `grp-${randomString(24)}`;
}
function visitorMemberPatch(member, base_form, opts) {
  const member_name = member.name || member.email;
  return __spreadProps(__spreadValues({}, base_form), {
    id: opts.id,
    parent_id: opts.parent_id,
    group: opts.group_name,
    asset_id: member.email,
    asset_name: member_name,
    international: member.international || !!member.extension_data?.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(member.extension_data?.visitor_internal_or_external),
    company: member.company || member.organisation,
    phone: member.phone,
    zones: unique([
      ...opts.org_zones || [],
      ...base_form.zones?.length ? base_form.zones : opts.existing_zones?.length ? opts.existing_zones : opts.fallback_zones || []
    ].filter((_) => _)),
    assets: [],
    attendees: [
      new User({
        name: member_name,
        email: member.email,
        organisation: member.company || member.organisation,
        phone: member.phone
      })
    ]
  });
}
function mapGroupMembers(type, members = []) {
  const user_list = unique(type === "visitor" ? members || [] : [currentUser(), ...members || []], "email");
  return user_list.filter((member) => !!member?.email).map((member) => ({
    id: member.id || "",
    name: member.name || member.email,
    email: member.email,
    company: member.company || member.organisation || "",
    phone: member.phone || "",
    international: !!member.international || !!member.extension_data?.international,
    visitor_internal_or_external: toVisitorInternalOrExternal(member.extension_data?.visitor_internal_or_external)
  }));
}
function mapGroupMembersFromBookings(bookings = [], is_visitor = false) {
  return unique(bookings.map((booking) => {
    const group_member = (booking.extension_data?.group_members || []).find((member) => member?.email === booking.asset_id);
    return is_visitor ? new User({
      name: group_member?.name || booking.extension_data?.visitor_name || booking.asset_name || booking.asset_id,
      email: booking.asset_id,
      organisation: group_member?.company || booking.extension_data?.company,
      phone: group_member?.phone || booking.extension_data?.phone,
      extension_data: {
        international: !!(group_member?.international || booking.extension_data?.international),
        visitor_internal_or_external: group_member?.visitor_internal_or_external === "external" ? "external" : toVisitorInternalOrExternal(booking.extension_data?.visitor_internal_or_external)
      }
    }) : new User({
      id: booking.user_id,
      name: booking.user_name || booking.user_email,
      email: booking.user_email,
      organisation: booking.extension_data?.company,
      phone: booking.extension_data?.phone
    });
  }).filter((member) => !!member?.email), "email");
}
function mapGroupMembersFromExtension(members = [], is_visitor = false) {
  return unique((members || []).filter((member) => !!member?.email).map((member) => new User({
    id: member.id || "",
    name: member.name || member.email,
    email: member.email,
    organisation: member.company || member.organisation || "",
    phone: member.phone || "",
    extension_data: __spreadValues(__spreadProps(__spreadValues({}, member.extension_data || {}), {
      international: !!member.international
    }), is_visitor ? {
      visitor_internal_or_external: toVisitorInternalOrExternal(member.visitor_internal_or_external)
    } : {}),
    international: is_visitor ? !!member.international : false
  })), "email");
}
function matchGroupSiblings(existing_siblings, members, is_visitor) {
  const keyOf = (booking) => is_visitor ? booking.asset_id : booking.user_email;
  const sibling_map = {};
  for (const booking of existing_siblings) {
    const key = keyOf(booking);
    if (key)
      sibling_map[key] = booking;
  }
  const member_keys = new Set(members.map((m) => m.email));
  const to_delete = existing_siblings.filter((booking) => {
    const key = keyOf(booking);
    return key && !member_keys.has(key);
  });
  return { sibling_map, to_delete };
}
async function rollbackGroupBookings(booking_ids) {
  const rollback_errors = (await Promise.allSettled(booking_ids.map((id) => removeBooking(id)))).filter((_) => _.status === "rejected");
  if (rollback_errors.length) {
    console.error("Failed to rollback group bookings", rollback_errors);
  }
}

// libs/events/src/lib/calendar-links.ts
function formatUTC(date) {
  const utc_date = localToTimezone(date, "UTC");
  return `${format(utc_date, "yyyyMMdd")}T${format(utc_date, "HHmmss")}Z`;
}
function formatAllDay(date) {
  return `${format(date, "yyyyMMdd")}`;
}
function escapeText(text) {
  return (text || "").replace(/\\|;|,|\n/g, (match) => {
    switch (match) {
      case "\\":
        return "\\\\";
      case ";":
        return "\\;";
      case ",":
        return "\\,";
      case "\n":
        return "\\n";
      default:
        return match;
    }
  });
}
function generateCalendarFileLink(event) {
  if (!event)
    return "data:text/calendar;charset=utf8,";
  const chunks = [];
  const description = escapeText(`${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`);
  const location2 = escapeText(`${event.location}`);
  chunks.push(["BEGIN", "VCALENDAR"]);
  chunks.push(["VERSION", "2.0"]);
  chunks.push(["BEGIN", "VEVENT"]);
  chunks.push(["UID", `${event.id || "uid-" + Date.now()}`]);
  chunks.push(["DTSTAMP", formatUTC(/* @__PURE__ */ new Date())]);
  if (event.meeting_url) {
    chunks.push(["URL", `${event.meeting_url}`]);
  }
  if (event.all_day) {
    chunks.push(["DTSTART;VALUE=DATE", formatAllDay(event.date)]);
    chunks.push(["DTEND;VALUE=DATE", formatAllDay(addDays(event.date, 1))]);
  } else {
    chunks.push(["DTSTART", formatUTC(event.date)]);
    chunks.push([
      "DTEND",
      formatUTC(addMinutes(event.date, event.duration || 60))
    ]);
  }
  chunks.push(["SUMMARY", escapeText(event.title)]);
  chunks.push(["DESCRIPTION", description]);
  chunks.push(["LOCATION", location2]);
  const hostEmail = event.host || event.user_email || `no-reply@place.tech`;
  const hostName = event.organiser?.name || hostEmail.split("@")[0] || "Staff";
  chunks.push([
    "ORGANIZER",
    `CN=${escapeText(hostName)}:mailto:${hostEmail}`
  ]);
  chunks.push(["END", "VEVENT"]);
  chunks.push(["END", "VCALENDAR"]);
  const content = chunks.map(([key, value]) => `${key}:${value}`).join("\r\n");
  const url_data = encodeURIComponent(content);
  return `data:text/calendar;charset=utf8,${url_data}`;
}
function generateGoogleCalendarLink(event) {
  const fmt = event.all_day ? formatAllDay : formatUTC;
  const details = {
    action: "TEMPLATE",
    text: event.title,
    details: `${event.body || ""}${event.id ? "\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    trp: false,
    dates: `${fmt(event.date)}/${fmt(addMinutes(event.date, event.duration ?? 60))}`
  };
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    details.add = unique([...emails, ...resources]).filter((_) => !!_).join(",");
  return `https://calendar.google.com/calendar/render?${toQueryString(details)}`;
}
function dateToISO(date) {
  return `${format(date, "yyyy-MM-dd")}T${format(date, "HH:mm:ss")}`;
}
function generateMicrosoftCalendarLink(event, type = "office", _status = "free") {
  if (!event.date)
    event.date = Date.now();
  const data = {
    // path: '/calendar/deeplink/compose',
    // rru: 'addevent',
    startdt: dateToISO(event.date),
    enddt: dateToISO(addMinutes(event.date, event.duration ?? 60)),
    subject: event.title,
    body: `${event.body || ""}${event.id ? "\n\n\n[ID|" + event.id + "]" : ""}`,
    location: event.location,
    allday: event.all_day ?? false
    // availability: status,
    // freebusy: status,
  };
  if (event.all_day)
    delete data.enddt;
  const emails = (event.attendees || []).map((_) => _.email || _);
  const resources = ((event.resources?.length ? event.resources : null) || [event.system]).map((_) => _?.email || _);
  if (emails.length || resources.length)
    data.to = unique([...emails, ...resources]).filter((_) => !!_).join(",");
  return type === "office" ? `https://outlook.office.com/calendar/deeplink/compose?${toQueryString(data)}` : `https://outlook.live.com/calendar/deeplink/compose?${toQueryString(data)}`;
}

// libs/bookings/src/lib/booking-link-modal.component.ts
var BookingLinkModalComponent = class _BookingLinkModalComponent {
  constructor() {
    this._event = inject(MAT_DIALOG_DATA);
    this.outlook_link = generateMicrosoftCalendarLink(this._event);
    this.google_link = generateGoogleCalendarLink(this._event);
    this.ical_link = generateCalendarFileLink(this._event);
  }
  static {
    this.\u0275fac = function BookingLinkModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingLinkModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookingLinkModalComponent, selectors: [["booking-link-modal"]], decls: 25, vars: 21, consts: [[1, "w-full", "p-4", "pb-2"], [1, "relative", "flex", "flex-col", "items-center", "space-y-4", "p-4"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener noreferer", 1, "inverse", "flex", "w-64", "items-center", "space-x-2", "rounded-sm", "p-2", "pr-4", 3, "href"], ["src", "assets/icons/outlook.svg", 1, "w-6"], ["src", "assets/icons/gcal.svg", 1, "w-6"], [1, "text-xl"], ["icon", "", "matRipple", "", "mat-dialog-close", "", 1, "absolute", "top-2", "right-0"]], template: function BookingLinkModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 0);
        \u0275\u0275text(1);
        \u0275\u0275pipe(2, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(3, "div", 1)(4, "a", 2);
        \u0275\u0275element(5, "img", 3);
        \u0275\u0275elementStart(6, "span");
        \u0275\u0275text(7);
        \u0275\u0275pipe(8, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(9, "a", 2);
        \u0275\u0275element(10, "img", 4);
        \u0275\u0275elementStart(11, "span");
        \u0275\u0275text(12);
        \u0275\u0275pipe(13, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(14, "a", 2);
        \u0275\u0275pipe(15, "safe");
        \u0275\u0275elementStart(16, "icon", 5);
        \u0275\u0275text(17, "download");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(18, "span");
        \u0275\u0275text(19);
        \u0275\u0275pipe(20, "translate");
        \u0275\u0275elementEnd()()();
        \u0275\u0275elementStart(21, "button", 6);
        \u0275\u0275pipe(22, "translate");
        \u0275\u0275elementStart(23, "icon");
        \u0275\u0275text(24, "close");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 8, "BOOKING.LINK_HEADER"), " ");
        \u0275\u0275advance(3);
        \u0275\u0275property("href", ctx.outlook_link, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(8, 10, "BOOKING.LINK_OUTLOOK"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", ctx.google_link, \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 12, "BOOKING.LINK_GOOGLE"));
        \u0275\u0275advance(2);
        \u0275\u0275property("href", \u0275\u0275pipeBind2(15, 14, ctx.ical_link, "url"), \u0275\u0275sanitizeUrl);
        \u0275\u0275advance(5);
        \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 17, "BOOKING.LINK_ICAL"));
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(22, 19, "COMMON.CLOSE"));
      }
    }, dependencies: [
      IconComponent,
      MatRippleModule,
      MatRipple,
      MatDialogModule,
      MatDialogClose,
      TranslatePipe,
      SafePipe
    ], styles: ["\n[_nghost-%COMP%] {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingLinkModalComponent, [{
    type: Component,
    args: [{ selector: "booking-link-modal", template: `
        <div class="w-full p-4 pb-2">
            {{ 'BOOKING.LINK_HEADER' | translate }}
        </div>
        <div class="relative flex flex-col items-center space-y-4 p-4">
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="outlook_link"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/outlook.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_OUTLOOK' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="google_link"
                target="_blank"
                rel="noopener noreferer"
            >
                <img src="assets/icons/gcal.svg" class="w-6" />
                <span>{{ 'BOOKING.LINK_GOOGLE' | translate }}</span>
            </a>
            <a
                btn
                matRipple
                class="inverse flex w-64 items-center space-x-2 rounded-sm p-2 pr-4"
                [href]="ical_link | safe: 'url'"
                target="_blank"
                rel="noopener noreferer"
            >
                <icon class="text-xl">download</icon>
                <span>{{ 'BOOKING.LINK_ICAL' | translate }}</span>
            </a>
        </div>
        <button
            [attr.aria-label]="'COMMON.CLOSE' | translate"
            icon
            matRipple
            mat-dialog-close
            class="absolute top-2 right-0"
        >
            <icon>close</icon>
        </button>
    `, imports: [
      IconComponent,
      TranslatePipe,
      MatRippleModule,
      MatDialogModule,
      SafePipe
    ], styles: ["/* angular:styles/component:css;726748c2414197d0b1210ead97f5552a150ccdc9b0475e0053e8ed5e76b597ad;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/booking-link-modal.component.ts */\n:host {\n  position: relative;\n}\n/*# sourceMappingURL=booking-link-modal.component.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookingLinkModalComponent, { className: "BookingLinkModalComponent", filePath: "libs/bookings/src/lib/booking-link-modal.component.ts", lineNumber: 81 });
})();

// libs/assets/src/lib/desk-assets.fn.ts
var DESK_CATEGORY_NAME = "_DESKS_";
var DESK_TYPE_NAME = "_DESKS_";
function resolveDeskTypeId() {
  return resolveHiddenAssetTypeId(DESK_CATEGORY_NAME, DESK_TYPE_NAME);
}
async function queryDeskAssets(zone_id) {
  return queryDeskAssetsForZones([zone_id]);
}
async function queryDeskAssetsForZones(zone_ids) {
  if (!zone_ids.length)
    return [];
  return queryTypeAssetsForZones(await resolveDeskTypeId(), zone_ids);
}
async function queryDeskAssetsInZone(zone_id) {
  if (!zone_id)
    return [];
  return queryTypeAssetsInZone(await resolveDeskTypeId(), zone_id);
}
function findDeskByLegacyId(desks, id) {
  if (!id)
    return void 0;
  return desks.find((desk) => desk.id === id) || desks.find((desk) => desk.place_id === id) || desks.find((desk) => desk.map_id === id);
}
function deskFromAsset(asset, zone) {
  const security = asset.security_system_groups?.[0] || "";
  return new Desk(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, asset.other_data || {}), asset.client_ids || {}), asset), {
    name: asset.identifier || asset.name,
    map_id: asset.map_id || asset.id,
    zone: new en(zone || { id: asset.zone_id }),
    groups: asset.place_groups,
    security
  }));
}

// libs/assets/src/lib/parking-assets.fn.ts
var PARKING_CATEGORY_NAME = "_PARKING_";
var PARKING_TYPE_NAME = "_PARKING_SPACES_";
function resolveParkingTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_TYPE_NAME);
}
async function queryParkingSpacesForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveParkingTypeId(), zone_ids);
}
var PARKING_USER_TYPE_NAME = "_PARKING_USERS_";
function resolveParkingUserTypeId() {
  return resolveHiddenAssetTypeId(PARKING_CATEGORY_NAME, PARKING_USER_TYPE_NAME);
}
function toParkingUser(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    name: asset.identifier || "",
    email: data.email || "",
    car_model: data.car_model || "",
    car_colour: data.car_colour || "",
    plate_number: data.plate_number || "",
    phone: data.phone || "",
    notes: asset.notes || "",
    deny: String(data.deny) === "true",
    special_needs: String(data.special_needs) === "true"
  };
}
async function queryParkingUsers(zone_id) {
  const assets = await queryTypeAssetsForZones(await resolveParkingUserTypeId(), [zone_id]);
  return assets.map(toParkingUser);
}

// libs/bookings/src/lib/booking-resource.loaders.ts
var _in_flight = /* @__PURE__ */ new Map();
function shareInFlight(key, load) {
  const scoped_key = `${Un() ? "mock" : "live"}|${key}`;
  const existing = _in_flight.get(scoped_key);
  if (existing)
    return existing;
  const request = load().finally(() => _in_flight.delete(scoped_key));
  _in_flight.set(scoped_key, request);
  return request;
}
function childMetadata(zone_id, name) {
  return shareInFlight(`metadata|${zone_id}|${name}`, () => bc(zone_id, { name }));
}
function deskAssets(zone_id) {
  return shareInFlight(`desk-assets|${zone_id}`, () => queryDeskAssetsInZone(zone_id));
}
async function loadParkingResources(org, use_region) {
  const levels = (use_region ? org.levelsForRegion() : org.levelsForBuilding()).filter((_) => _.tags.includes("parking"));
  const spaces = await queryParkingSpacesForZones(levels.map((l) => l.id));
  return spaces.map((s) => __spreadProps(__spreadValues({}, s), {
    id: s.id || s.map_id,
    groups: s.place_groups,
    zone: org.levelWithID([s.zone_id])
  }));
}
async function loadDeskResources(org, use_region) {
  const zone_id = use_region ? org.building?.parent_id : org.building?.id;
  if (!zone_id)
    return [];
  const assets = await deskAssets(zone_id);
  return assets.map((asset) => deskFromAsset(asset, org.levelWithID([asset.zone_id])));
}
async function loadMetadataResources(org, type, use_region) {
  const map_metadata = (_) => (_?.metadata[type]?.details instanceof Array ? _.metadata[type].details : []).map((d2) => __spreadProps(__spreadValues({}, d2), {
    id: d2.id || d2.map_id,
    zone: _.zone
  }));
  const id = use_region ? org.building?.parent_id : org.building?.id;
  if (!id)
    return [];
  if (use_region) {
    const buildings = org.buildings.filter((_) => _.parent_id === id);
    const lists = await Promise.all(buildings.map((_) => childMetadata(_.id, type).then((data2) => flatten(data2.map(map_metadata)))));
    return flatten(lists);
  }
  const data = await childMetadata(id, type);
  return flatten(data.map(map_metadata));
}
function assignedDeskBuilding(org, user_email, use_assets) {
  const buildings = org.building_list() || [];
  const email2 = user_email?.toLowerCase();
  if (!buildings.length || !email2)
    return Promise.resolve(null);
  const building_ids = buildings.map((building) => building.id);
  const key = `assigned-desk|${use_assets}|${email2}|${building_ids.join(",")}`;
  return shareInFlight(key, async () => {
    if (use_assets) {
      const lists = await Promise.all(building_ids.map((id) => deskAssets(id).catch(() => [])));
      const index2 = lists.findIndex((desks) => desks.some((item) => item.assigned_to?.toLowerCase() === email2));
      return index2 >= 0 ? building_ids[index2] : null;
    }
    const map_metadata = (meta) => (meta?.metadata?.desks?.details instanceof Array ? meta.metadata.desks.details : []).map((desk) => new Desk(__spreadProps(__spreadValues({}, desk), { zone: meta.zone })));
    const desk_lists = await Promise.all(building_ids.map((id) => childMetadata(id, "desks").then((data) => flatten(data.map(map_metadata))).catch(() => [])));
    const index = desk_lists.findIndex((list) => list.some((desk) => desk.assigned_to?.toLowerCase() === email2));
    return index >= 0 ? building_ids[index] : null;
  });
}
async function hasAssignedDesk(org, user_email, use_assets) {
  return !!await assignedDeskBuilding(org, user_email, use_assets);
}

// libs/assets/src/lib/locker-assets.fn.ts
var LOCKER_CATEGORY_NAME = "_LOCKERS_";
var LOCKER_BANK_TYPE_NAME = "_LOCKER_BANKS_";
var LOCKER_TYPE_NAME = "_LOCKERS_";
function resolveLockerBankTypeId() {
  return resolveHiddenAssetTypeId(LOCKER_CATEGORY_NAME, LOCKER_BANK_TYPE_NAME);
}
function resolveLockerTypeId() {
  return resolveHiddenAssetTypeId(LOCKER_CATEGORY_NAME, LOCKER_TYPE_NAME);
}
async function queryLockerBankAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveLockerBankTypeId(), zone_ids);
}
async function queryLockerAssetsForZones(zone_ids) {
  if (!zone_ids?.length)
    return [];
  return queryTypeAssetsForZones(await resolveLockerTypeId(), zone_ids);
}

// libs/components/src/lib/map-viewer.class.ts
var MAX_ZOOM = 10;
var MIN_ZOOM = 1;
var VIEW_PADDING = 0.05;
var DESKTOP_TEXTURE_MEGAPIXELS = 16;
var MOBILE_TEXTURE_MEGAPIXELS = 4;
var FIXED_TEXTURE_CONTAINER_MULTIPLIER = 2;
var MAX_TEXTURE_DIMENSION = 8192;
function isMobileDevice() {
  if (typeof window === "undefined" || !window.matchMedia)
    return false;
  const coarse_pointer = window.matchMedia("(pointer: coarse)").matches;
  const small_viewport = window.matchMedia("(max-width: 1024px)").matches;
  return coarse_pointer && small_viewport;
}
var SVG_NS = "http://www.w3.org/2000/svg";
function escapeXml(text) {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function cleanCssSelector(selector) {
  const escaped = selector.replace(/[!"#$%&'()*+,.\/;<=>?@[\\\]^`{|}~]/g, "\\$&");
  return escaped.split(" ").map((part) => part.replace(/^\\/, "")).join(" ");
}
function getSvgDimensions(svg_element) {
  let x = 0;
  let y = 0;
  let width = 0;
  let height = 0;
  const view_box = svg_element.getAttribute("viewBox");
  if (view_box) {
    const parts = view_box.split(/[\s,]+/).map(parseFloat);
    if (parts.length >= 4) {
      x = parts[0] || 0;
      y = parts[1] || 0;
      width = parts[2];
      height = parts[3];
    }
  }
  if (!width || !height) {
    const width_attr = svg_element.getAttribute("width");
    const height_attr = svg_element.getAttribute("height");
    width = width_attr ? parseFloat(width_attr) : 0;
    height = height_attr ? parseFloat(height_attr) : 0;
  }
  if (!width || !height) {
    try {
      const bbox = svg_element.getBBox();
      x = bbox.x;
      y = bbox.y;
      width = bbox.width;
      height = bbox.height;
    } catch {
    }
  }
  return { x, y, width: width || 1, height: height || 1 };
}
function getElementBoundsInSvgSpace(element, svg_inverse_ctm) {
  const bbox = element.getBBox();
  const ctm = svg_inverse_ctm && element.getScreenCTM?.();
  if (!ctm)
    return bbox;
  const matrix = svg_inverse_ctm.multiply(ctm);
  const corners = [
    { x: bbox.x, y: bbox.y },
    { x: bbox.x + bbox.width, y: bbox.y },
    { x: bbox.x, y: bbox.y + bbox.height },
    { x: bbox.x + bbox.width, y: bbox.y + bbox.height }
  ].map((p) => ({
    x: matrix.a * p.x + matrix.c * p.y + matrix.e,
    y: matrix.b * p.x + matrix.d * p.y + matrix.f
  }));
  const min_x = Math.min(...corners.map((p) => p.x));
  const min_y = Math.min(...corners.map((p) => p.y));
  return {
    x: min_x,
    y: min_y,
    width: Math.max(...corners.map((p) => p.x)) - min_x,
    height: Math.max(...corners.map((p) => p.y)) - min_y
  };
}
var SVG_NAMESPACE = "http://www.w3.org/2000/svg";
function removeActiveSvgContent(svg) {
  for (const element of [svg, ...Array.from(svg.querySelectorAll("*"))]) {
    if (element.namespaceURI !== SVG_NAMESPACE || element.localName === "script" || element.localName === "foreignObject") {
      element.remove();
      continue;
    }
    for (const { name, value } of Array.from(element.attributes)) {
      const url = value.replace(/[\s\u0000-\u001f]/g, "").toLowerCase();
      if (name.toLowerCase().startsWith("on") || url.includes("javascript:")) {
        element.removeAttribute(name);
      }
    }
  }
}
function generateElementBounds(data) {
  const bounds_map = /* @__PURE__ */ new Map();
  const parsed = new DOMParser().parseFromString(data, "image/svg+xml").querySelector("svg");
  if (!(parsed instanceof SVGSVGElement)) {
    return { bounds: bounds_map, aspect_ratio: 1 };
  }
  removeActiveSvgContent(parsed);
  const svg_element = document.importNode(parsed, true);
  const container = document.createElement("div");
  container.style.position = "absolute";
  container.style.visibility = "hidden";
  container.style.pointerEvents = "none";
  container.style.left = "-9999px";
  container.style.top = "-9999px";
  container.appendChild(svg_element);
  document.body.appendChild(container);
  const { x: svg_x, y: svg_y, width: svg_width, height: svg_height } = getSvgDimensions(svg_element);
  const aspect_ratio = svg_width / svg_height;
  const svg_ctm = svg_element.getScreenCTM?.();
  const svg_inverse_ctm = svg_ctm ? svg_ctm.inverse() : null;
  const elements_with_id = svg_element.querySelectorAll("[id]");
  elements_with_id.forEach((element) => {
    const id = element.getAttribute("id");
    if (!id)
      return;
    if (typeof element.getBBox === "function") {
      try {
        const bbox = getElementBoundsInSvgSpace(element, svg_inverse_ctm);
        bounds_map.set(id, {
          x: (bbox.x - svg_x) / svg_width,
          y: (bbox.y - svg_y) / svg_height,
          w: bbox.width / svg_width,
          h: bbox.height / svg_height
        });
      } catch {
      }
    }
  });
  document.body.removeChild(container);
  return { bounds: bounds_map, aspect_ratio };
}
var MAX_CACHED_MAPS = 10;
var MAX_AUTHORITY_CHECKS = 100;
var MapStore = class {
  constructor() {
    this.store = /* @__PURE__ */ new Map();
  }
  get(path) {
    let details = this.store.get(path);
    if (details) {
      this.store.delete(path);
    } else {
      details = this._load(path);
      details.catch(() => {
        if (this.store.get(path) === details)
          this.store.delete(path);
      });
    }
    this.store.set(path, details);
    if (this.store.size > MAX_CACHED_MAPS) {
      const [oldest] = this.store.keys();
      this.store.delete(oldest);
    }
    return details;
  }
  async _load(path) {
    for (let i = 0; !Mt() && i < MAX_AUTHORITY_CHECKS; i++) {
      await new Promise((resolve) => setTimeout(resolve, 300));
    }
    const options = {};
    const tkn = J();
    const is_same_origin = new URL(path, location.origin).origin === location.origin;
    if (tkn && is_same_origin) {
      if (!isMobileSafari()) {
        options.headers = tkn === "x-api-key" ? { "x-api-key": et() } : { Authorization: `Bearer ${tkn}` };
      } else {
        setAuthCookie("/");
      }
    }
    const response = await fetch(path, options);
    if (!response.ok)
      throw new Error("Failed to load map");
    const data = await response.text();
    const { bounds, aspect_ratio } = generateElementBounds(data);
    return { raw_data: data, element_bounds: bounds, aspect_ratio };
  }
};
var STORE = new MapStore();
function getMapDetails(url) {
  return STORE.get(url);
}
var MapViewer = class {
  constructor(el) {
    this.map_image = null;
    this.styles_string = "";
    this.center = { x: 0.5, y: 0.5 };
    this.zoom = 1;
    this.fixed_resolution_megapixels = 0;
    this.disable_zoom = false;
    this.disable_pan = false;
    this.onViewChange = null;
    this.debug = false;
    this.debug_info = {
      /** Pointer position in normalised map coordinates */
      pointer: null,
      /** ID of the smallest map element under the pointer */
      hover_id: "",
      /** ID of the map element explicitly highlighted from debug controls */
      highlight_id: "",
      /** Duration of the last map draw in milliseconds */
      last_draw_ms: 0,
      /** Number of map draws over the last second */
      draws_last_second: 0
    };
    this._map_path = "";
    this._image_generation = 0;
    this._prepared_svg = null;
    this._texture_width = 0;
    this._texture_height = 0;
    this._image_frame_id = null;
    this._draw_frame_id = null;
    this._notify_frame_id = null;
    this._debug_draw_count = 0;
    this._debug_count_start = 0;
    this._events = /* @__PURE__ */ new Map();
    this._resize_observer = null;
    this._pointers = /* @__PURE__ */ new Map();
    this._is_panning = false;
    this._pinch_distance = null;
    this._pan_start = null;
    this._pan_exceeded_threshold = false;
    this._overlay_instances = [];
    this._actions = [];
    this._action_event_handlers = /* @__PURE__ */ new Map();
    this._action_pointerdown_pos = null;
    this._action_last_triggered = /* @__PURE__ */ new Map();
    this.container = el;
    this.id = `m_view-${randomString(8, "0123456789ABCDEF")}`;
    this.container.innerHTML = "";
    this.container.style.overflow = "hidden";
    this.container.style.touchAction = "none";
    this.canvas = document.createElement("canvas");
    this.canvas.style.cssText = "position: absolute; inset: 0; pointer-events: none;";
    this._ctx = this.canvas.getContext("2d");
    this.container.appendChild(this.canvas);
    this.overlays = document.createElement("div");
    this.overlays.id = `${this.id}-overlays`;
    this.overlays.style.cssText = "position: absolute; inset: 0; z-index: 0; pointer-events: none;";
    this.container.appendChild(this.overlays);
    this._resize_observer = new ResizeObserver(() => this._onResize());
    this._resize_observer.observe(this.container);
    this._events.set("wheel", (e) => this._onWheel(e));
    this.container.addEventListener("wheel", this._events.get("wheel"), {
      passive: false
    });
    this._events.set("pointerdown", (e) => this._onPointerDown(e));
    this._events.set("pointermove", (e) => this._onPointerMove(e));
    this._events.set("pointerup", (e) => this._onPointerUp(e));
    this.container.addEventListener("pointerdown", this._events.get("pointerdown"));
    window.addEventListener("pointermove", this._events.get("pointermove"));
    window.addEventListener("pointerup", this._events.get("pointerup"));
    window.addEventListener("pointercancel", this._events.get("pointerup"));
  }
  async setMap(path) {
    this._map_path = path;
    const map2 = await STORE.get(path);
    if (this._map_path !== path)
      return;
    this.map = map2;
    this._renderMapImage();
  }
  setCenter(point) {
    const center = this._clampCenter(point);
    if (center.x === this.center.x && center.y === this.center.y)
      return;
    this.center = center;
    this._renderMap();
  }
  setZoom(new_zoom) {
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === this.zoom)
      return;
    this.zoom = new_zoom;
    this._renderMap();
  }
  /**
   * Override the texture budget for fixed (zoom-disabled) maps, in
   * megapixels. Pass 0 to restore the default of twice the container pixels.
   */
  setFixedResolution(megapixels) {
    const value = megapixels > 0 ? megapixels : 0;
    if (this.fixed_resolution_megapixels === value)
      return;
    this.fixed_resolution_megapixels = value;
    if (this.disable_zoom)
      this._renderMapImage();
  }
  setOptions(options) {
    const was_zoom_disabled = this.disable_zoom;
    this.disable_zoom = !!options?.disable_zoom;
    this.disable_pan = !!options?.disable_pan;
    if (was_zoom_disabled !== this.disable_zoom)
      this._renderMapImage();
  }
  /** Number of overlays currently attached to the map */
  get overlay_count() {
    return this._overlay_instances.length;
  }
  /** Human-readable description of the current texture sizing mode, for debug */
  get texture_mode() {
    if (this.disable_zoom) {
      return this.fixed_resolution_megapixels ? `fixed ${this.fixed_resolution_megapixels}MP` : `fixed ${FIXED_TEXTURE_CONTAINER_MULTIPLIER}\xD7 container`;
    }
    return isMobileDevice() ? `mobile ${MOBILE_TEXTURE_MEGAPIXELS}MP` : `desktop ${DESKTOP_TEXTURE_MEGAPIXELS}MP`;
  }
  /** Toggle rendering of debugging info over the map */
  setDebug(enabled) {
    if (this.debug === enabled)
      return;
    this.debug = enabled;
    if (enabled) {
      const move = (e) => {
        this.debug_info.pointer = this._eventToMap(e);
        this.debug_info.hover_id = this._elementAt(this.debug_info.pointer);
        this._renderMap();
      };
      const leave = () => {
        this.debug_info.pointer = null;
        this.debug_info.hover_id = "";
        this._renderMap();
      };
      const click = (e) => {
        const point = this._eventToMap(e);
        console.log(`[MAP][DEBUG] Click at { x: ${point.x.toFixed(4)}, y: ${point.y.toFixed(4)} } on "${this._elementAt(point) || "no element"}"`);
      };
      this._events.set("debug_move", move);
      this._events.set("debug_leave", leave);
      this._events.set("debug_click", click);
      this.container.addEventListener("pointermove", move);
      this.container.addEventListener("pointerleave", leave);
      this.container.addEventListener("click", click);
    } else {
      for (const name of ["debug_move", "debug_leave", "debug_click"]) {
        const handler = this._events.get(name);
        if (!handler)
          continue;
        const event_name = name === "debug_move" ? "pointermove" : name === "debug_leave" ? "pointerleave" : "click";
        this.container.removeEventListener(event_name, handler);
        this._events.delete(name);
      }
      this.debug_info.pointer = null;
      this.debug_info.hover_id = "";
      this.debug_info.highlight_id = "";
    }
    this._applyOverlayOutlines();
    this._renderMap();
  }
  /** Highlight a map element while debug mode is active */
  setDebugHighlight(ref) {
    if (this.debug_info.highlight_id === ref)
      return;
    this.debug_info.highlight_id = ref;
    if (this.debug)
      this._renderMap();
  }
  /** Center the view on the map element with the given ID */
  focusOn(ref) {
    const bounds = this.map?.element_bounds.get(ref);
    if (!bounds)
      return;
    this.setCenter({
      x: bounds.x + bounds.w / 2,
      y: bounds.y + bounds.h / 2
    });
    this._notifyViewChange();
  }
  /**
   * Replace the overlays. A wrapper whose content element is still present
   * is kept, so that content is not detached and attached again when an
   * unrelated overlay changes.
   */
  setOverlays(overlays) {
    const old_wrappers = /* @__PURE__ */ new Map();
    for (const { overlay, element } of this._overlay_instances) {
      if (typeof overlay.contents === "string")
        element.remove();
      else
        old_wrappers.set(overlay.contents, element);
    }
    this._overlay_instances = [];
    const wrappers = [];
    for (const overlay of overlays) {
      const reused = typeof overlay.contents === "string" ? void 0 : old_wrappers.get(overlay.contents);
      if (reused)
        old_wrappers.delete(overlay.contents);
      const element = reused || document.createElement("div");
      element.style.cssText = "position: absolute; top: 0; left: 0; display: flex; align-items: center; justify-content: center; transform-origin: center center; pointer-events: none;";
      if (overlay.z_index != null) {
        element.style.zIndex = `${overlay.z_index}`;
      }
      element.classList.toggle("map-overlay-hover", !!overlay.hover);
      if (typeof overlay.contents === "string") {
        element.innerHTML = overlay.contents;
      } else if (overlay.contents.parentNode !== element) {
        element.appendChild(overlay.contents);
      }
      wrappers.push(element);
      this._overlay_instances.push({ overlay, element });
    }
    for (const element of old_wrappers.values())
      element.remove();
    let expected = this.overlays.firstChild;
    for (const element of wrappers) {
      if (element === expected) {
        expected = element.nextSibling;
      } else {
        this.overlays.insertBefore(element, expected);
      }
    }
    this._applyOverlayOutlines();
    this._updateOverlayPositions();
  }
  /** Outline overlay elements while debug mode is active */
  _applyOverlayOutlines() {
    for (const { element } of this._overlay_instances) {
      element.style.outline = this.debug ? "1px dashed #f0f" : "";
    }
  }
  /** ID of the smallest map element containing the given point */
  _elementAt(point) {
    let best = "";
    let best_area = Number.POSITIVE_INFINITY;
    for (const [id, bounds] of this.map?.element_bounds || []) {
      if (point.x < bounds.x || point.x > bounds.x + bounds.w || point.y < bounds.y || point.y > bounds.y + bounds.h) {
        continue;
      }
      const area = bounds.w * bounds.h;
      if (area < best_area) {
        best = id;
        best_area = area;
      }
    }
    return best;
  }
  setActions(actions) {
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = actions;
    const event_names = new Set(actions.flatMap((_) => _.events));
    for (const event_name of event_names) {
      const handler = (e) => this._handleActionEvent(event_name, e);
      this._action_event_handlers.set(event_name, handler);
      this.container.addEventListener(event_name, handler);
    }
    if (!this._events.has("action_pointerdown")) {
      const handler = (e) => {
        this._action_pointerdown_pos = { x: e.clientX, y: e.clientY };
      };
      this._events.set("action_pointerdown", handler);
      this.container.addEventListener("pointerdown", handler);
    }
  }
  /** Apply CSS to the map's SVG elements. Mapping of CSS selector to style declaration */
  setStyles(styles) {
    let style_content = "";
    for (const [selector, css_text] of Object.entries(styles)) {
      if (css_text) {
        style_content += `svg ${cleanCssSelector(selector)} { ${css_text} }
`;
      }
    }
    if (style_content !== this.styles_string) {
      this.styles_string = style_content;
      this._renderMapImage();
    }
  }
  destroy() {
    this.setDebug(false);
    this._resize_observer?.disconnect();
    this._resize_observer = null;
    this.container.removeEventListener("wheel", this._events.get("wheel"));
    this.container.removeEventListener("pointerdown", this._events.get("pointerdown"));
    window.removeEventListener("pointermove", this._events.get("pointermove"));
    window.removeEventListener("pointerup", this._events.get("pointerup"));
    window.removeEventListener("pointercancel", this._events.get("pointerup"));
    for (const [event_name, handler] of this._action_event_handlers) {
      this.container.removeEventListener(event_name, handler);
    }
    this._action_event_handlers.clear();
    this._action_last_triggered.clear();
    this._actions = [];
    if (this._events.has("action_pointerdown")) {
      const handler = this._events.get("action_pointerdown");
      this.container.removeEventListener("pointerdown", handler);
      this._events.delete("action_pointerdown");
    }
    this._action_pointerdown_pos = null;
    this._image_generation++;
    this._map_path = "";
    if (this._image_frame_id !== null) {
      cancelAnimationFrame(this._image_frame_id);
      this._image_frame_id = null;
    }
    if (this._draw_frame_id !== null) {
      cancelAnimationFrame(this._draw_frame_id);
      this._draw_frame_id = null;
    }
    if (this._notify_frame_id !== null) {
      cancelAnimationFrame(this._notify_frame_id);
      this._notify_frame_id = null;
    }
    for (const instance of this._overlay_instances) {
      instance.element.remove();
    }
    this._overlay_instances = [];
    this.map_image = null;
    this._prepared_svg = null;
    this.container.innerHTML = "";
  }
  /**
   * Pixels per normalised map unit on each axis at the given zoom level.
   * At zoom 1 the whole map image fits within the view.
   */
  _viewScale(zoom = this.zoom) {
    const aspect = this.map?.aspect_ratio || 1;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const fit_height = Math.min(height, width / aspect) * (1 - VIEW_PADDING * 2) * zoom;
    return { x: fit_height * aspect, y: fit_height };
  }
  /** Convert a pointer event position to normalised map coordinates (0-1) */
  _eventToMap(e, rect = this.container.getBoundingClientRect()) {
    const scale = this._viewScale();
    return {
      x: (e.clientX - rect.left - rect.width / 2) / scale.x + this.center.x,
      y: (e.clientY - rect.top - rect.height / 2) / scale.y + this.center.y
    };
  }
  _clampCenter(point) {
    return {
      x: Math.max(0, Math.min(1, point.x)),
      y: Math.max(0, Math.min(1, point.y))
    };
  }
  /** Zoom about a fixed screen position so the point under it stays in place */
  _zoomAboutPoint(new_zoom, position) {
    const old_zoom = this.zoom;
    new_zoom = Math.max(MIN_ZOOM, Math.min(MAX_ZOOM, new_zoom));
    if (new_zoom === old_zoom)
      return;
    const rect = this.container.getBoundingClientRect();
    const fixed_point = this._eventToMap({ clientX: position.x, clientY: position.y }, rect);
    const new_scale = this._viewScale(new_zoom);
    const new_center = {
      x: fixed_point.x - (position.x - rect.left - rect.width / 2) / new_scale.x,
      y: fixed_point.y - (position.y - rect.top - rect.height / 2) / new_scale.y
    };
    this.zoom = new_zoom;
    this.center = this._clampCenter(new_center);
    this._renderMap();
    this._notifyViewChange();
  }
  _onWheel(e) {
    e.preventDefault();
    if (this.disable_zoom || !this.map_image)
      return;
    const zoom_delta = e.deltaY > 0 ? 0.97 : 1.03;
    this._zoomAboutPoint(this.zoom * zoom_delta, {
      x: e.clientX,
      y: e.clientY
    });
  }
  _onPointerDown(e) {
    if (!this.map_image)
      return;
    if (e.button !== 0)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2) {
      this._is_panning = false;
      const [p1, p2] = [...this._pointers.values()];
      this._pinch_distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      return;
    }
    if (this.disable_pan)
      return;
    this._is_panning = true;
    this._pan_start = { x: e.clientX, y: e.clientY };
    this._pan_exceeded_threshold = false;
    this.container.style.cursor = "grabbing";
  }
  _onPointerMove(e) {
    const last = this._pointers.get(e.pointerId);
    if (!last)
      return;
    this._pointers.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (this._pointers.size === 2 && this._pinch_distance) {
      if (this.disable_zoom)
        return;
      const [p1, p2] = [...this._pointers.values()];
      const distance = Math.hypot(p2.x - p1.x, p2.y - p1.y);
      if (distance > 0) {
        this._zoomAboutPoint(this.zoom * (distance / this._pinch_distance), { x: (p1.x + p2.x) / 2, y: (p1.y + p2.y) / 2 });
        this._pinch_distance = distance;
      }
      return;
    }
    if (!this._is_panning)
      return;
    if (this._pan_start && !this._pan_exceeded_threshold && Math.hypot(e.clientX - this._pan_start.x, e.clientY - this._pan_start.y) > 5) {
      this._pan_exceeded_threshold = true;
    }
    const scale = this._viewScale();
    this.center = this._clampCenter({
      x: this.center.x - (e.clientX - last.x) / scale.x,
      y: this.center.y - (e.clientY - last.y) / scale.y
    });
    this._renderMap();
    this._notifyViewChange();
  }
  _onPointerUp(e) {
    this._pointers.delete(e.pointerId);
    if (this._pointers.size < 2) {
      this._pinch_distance = null;
    }
    if (this._is_panning && this._pointers.size === 0) {
      this._is_panning = false;
      this.container.style.cursor = "";
    }
  }
  _onResize() {
    this._renderMap();
    if (this.disable_zoom && !this.fixed_resolution_megapixels) {
      const { width, height } = this._textureDimensions();
      if (width !== this._texture_width || height !== this._texture_height) {
        this._renderMapImage();
      }
    }
  }
  /**
   * Total texture pixel budget for the current map. Zoomable maps use a
   * fixed megapixel budget (reduced on mobile) so the map stays sharp when
   * zoomed in. Fixed maps never scale up, so they only need enough pixels
   * to cover the container, defaulting to twice the container's pixel count.
   */
  _targetTexturePixels() {
    if (this.disable_zoom) {
      if (this.fixed_resolution_megapixels > 0) {
        return this.fixed_resolution_megapixels * 1e6;
      }
      const container_pixels = (this.container.clientWidth || 1) * (this.container.clientHeight || 1);
      return container_pixels * FIXED_TEXTURE_CONTAINER_MULTIPLIER;
    }
    const megapixels = isMobileDevice() ? MOBILE_TEXTURE_MEGAPIXELS : DESKTOP_TEXTURE_MEGAPIXELS;
    return megapixels * 1e6;
  }
  /**
   * Texture dimensions matching the SVG's aspect ratio with a total area of
   * `_targetTexturePixels()`. Each side is clamped to the maximum canvas
   * dimension, so very wide or tall maps render slightly below the budget.
   */
  _textureDimensions() {
    const aspect = this.map?.aspect_ratio || 1;
    const target_pixels = this._targetTexturePixels();
    const height = Math.sqrt(target_pixels / aspect);
    const width = height * aspect;
    return {
      width: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(width))),
      height: Math.max(1, Math.min(MAX_TEXTURE_DIMENSION, Math.round(height)))
    };
  }
  _renderMapImage() {
    if (this._image_frame_id !== null) {
      cancelAnimationFrame(this._image_frame_id);
    }
    this._image_frame_id = requestAnimationFrame(() => {
      this._image_frame_id = null;
      this._doRenderMapImage();
    });
  }
  _doRenderMapImage() {
    if (!this.map?.raw_data)
      return;
    const generation = ++this._image_generation;
    const { width, height } = this._textureDimensions();
    this._texture_width = width;
    this._texture_height = height;
    const prepared = this._preparedSvg(width, height);
    if (!prepared)
      return;
    const { head, tail } = prepared;
    const svg_string = this.styles_string ? `${head}<style xmlns="${SVG_NS}">${escapeXml(this.styles_string)}</style>${tail}` : `${head}${tail}`;
    const svg_blob = new Blob([svg_string], { type: "image/svg+xml" });
    const url = URL.createObjectURL(svg_blob);
    const svg_image = new Image();
    svg_image.onload = () => {
      URL.revokeObjectURL(url);
      if (generation !== this._image_generation)
        return;
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        console.error("Failed to get canvas context");
        return;
      }
      ctx.drawImage(svg_image, 0, 0, width, height);
      this.map_image = canvas;
      this._renderMap();
    };
    svg_image.onerror = () => {
      URL.revokeObjectURL(url);
      console.error("Failed to load map image");
    };
    svg_image.src = url;
  }
  /**
   * The map SVG sized to the texture, as text split at the root's closing
   * tag. Parsing a large SVG is slow, so this is cached for each map and
   * texture size and style changes only add a style element. `null` when the
   * map has no SVG.
   */
  _preparedSvg(width, height) {
    const data = this.map.raw_data;
    const cached = this._prepared_svg;
    if (cached?.data === data && cached.width === width && cached.height === height) {
      return cached;
    }
    const doc = new DOMParser().parseFromString(data, "image/svg+xml");
    const svg_element = doc.querySelector("svg");
    if (!svg_element)
      return null;
    if (!svg_element.getAttribute("viewBox")) {
      const attr_width = parseFloat(svg_element.getAttribute("width") || "");
      const attr_height = parseFloat(svg_element.getAttribute("height") || "");
      if (attr_width > 0 && attr_height > 0) {
        svg_element.setAttribute("viewBox", `0 0 ${attr_width} ${attr_height}`);
      }
    }
    if (svg_element.getAttribute("viewBox")) {
      svg_element.setAttribute("width", `${width}`);
      svg_element.setAttribute("height", `${height}`);
    }
    svg_element.appendChild(doc.createComment(""));
    const svg_string = new XMLSerializer().serializeToString(svg_element);
    const split = svg_string.lastIndexOf("</");
    this._prepared_svg = {
      data,
      width,
      height,
      head: svg_string.slice(0, split),
      tail: svg_string.slice(split)
    };
    return this._prepared_svg;
  }
  _renderMap() {
    if (this._draw_frame_id !== null)
      return;
    this._draw_frame_id = requestAnimationFrame(() => {
      this._draw_frame_id = null;
      this._drawMap();
    });
  }
  _drawMap() {
    if (!this.map_image)
      return;
    const draw_start = this.debug ? performance.now() : 0;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const dpr = window.devicePixelRatio || 1;
    if (this.canvas.width !== Math.round(width * dpr) || this.canvas.height !== Math.round(height * dpr)) {
      this.canvas.width = Math.round(width * dpr);
      this.canvas.height = Math.round(height * dpr);
      this.canvas.style.width = `${width}px`;
      this.canvas.style.height = `${height}px`;
    }
    const scale = this._viewScale();
    const view_left = this.center.x - width / 2 / scale.x;
    const view_top = this.center.y - height / 2 / scale.y;
    const sx0 = Math.max(0, view_left);
    const sy0 = Math.max(0, view_top);
    const sx1 = Math.min(1, view_left + width / scale.x);
    const sy1 = Math.min(1, view_top + height / scale.y);
    this._ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this._ctx.clearRect(0, 0, width, height);
    if (sx1 > sx0 && sy1 > sy0) {
      this._ctx.imageSmoothingEnabled = true;
      this._ctx.imageSmoothingQuality = "high";
      const img_w = this.map_image.width;
      const img_h = this.map_image.height;
      this._ctx.drawImage(this.map_image, sx0 * img_w, sy0 * img_h, (sx1 - sx0) * img_w, (sy1 - sy0) * img_h, (sx0 - view_left) * scale.x, (sy0 - view_top) * scale.y, (sx1 - sx0) * scale.x, (sy1 - sy0) * scale.y);
    }
    if (this.debug) {
      this._drawDebugInfo(scale, view_left, view_top);
      const now = performance.now();
      this.debug_info.last_draw_ms = now - draw_start;
      this._debug_draw_count++;
      if (now - this._debug_count_start >= 1e3) {
        this.debug_info.draws_last_second = this._debug_draw_count;
        this._debug_draw_count = 0;
        this._debug_count_start = now;
      }
    }
    this._updateOverlayPositions();
  }
  /** Draw element bounds, map border and view crosshair over the map */
  _drawDebugInfo(scale, view_left, view_top) {
    if (!this.map)
      return;
    const ctx = this._ctx;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const toScreenX = (x) => (x - view_left) * scale.x;
    const toScreenY = (y) => (y - view_top) * scale.y;
    ctx.strokeStyle = "#f0f";
    ctx.lineWidth = 2;
    ctx.strokeRect(toScreenX(0), toScreenY(0), scale.x, scale.y);
    ctx.strokeStyle = "rgba(0, 200, 255, 0.6)";
    ctx.lineWidth = 1;
    for (const [, bounds] of this.map.element_bounds) {
      const x = toScreenX(bounds.x);
      const y = toScreenY(bounds.y);
      const w = bounds.w * scale.x;
      const h = bounds.h * scale.y;
      if (x + w < 0 || y + h < 0 || x > width || y > height)
        continue;
      ctx.strokeRect(x, y, w, h);
    }
    const highlight_id = this.debug_info.highlight_id || this.debug_info.hover_id;
    const hover_bounds = highlight_id ? this.map.element_bounds.get(highlight_id) : null;
    if (hover_bounds) {
      const x = toScreenX(hover_bounds.x);
      const y = toScreenY(hover_bounds.y);
      ctx.fillStyle = "rgba(255, 0, 255, 0.25)";
      ctx.fillRect(x, y, hover_bounds.w * scale.x, hover_bounds.h * scale.y);
      const label = `#${highlight_id}`;
      ctx.font = "12px monospace";
      ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
      ctx.fillRect(x, y - 16, ctx.measureText(label).width + 8, 16);
      ctx.fillStyle = "#fff";
      ctx.fillText(label, x + 4, y - 4);
    }
    ctx.strokeStyle = "#f00";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(width / 2 - 8, height / 2);
    ctx.lineTo(width / 2 + 8, height / 2);
    ctx.moveTo(width / 2, height / 2 - 8);
    ctx.lineTo(width / 2, height / 2 + 8);
    ctx.stroke();
  }
  _updateOverlayPositions() {
    if (!this.map?.element_bounds)
      return;
    const width = this.container.clientWidth || 1;
    const height = this.container.clientHeight || 1;
    const scale = this._viewScale();
    const mapToScreen = (point) => ({
      x: (point.x - this.center.x) * scale.x + width / 2,
      y: (point.y - this.center.y) * scale.y + height / 2
    });
    const setDisplay = (instance, value) => {
      if (instance.last_display === value)
        return;
      instance.last_display = value;
      instance.element.style.display = value;
    };
    const setTransform = (instance, value) => {
      if (instance.last_transform === value)
        return;
      instance.last_transform = value;
      instance.element.style.transform = value;
    };
    const setSize = (instance, w, h) => {
      const size = `${w} ${h}`;
      if (instance.last_size === size)
        return;
      instance.last_size = size;
      instance.element.style.width = w;
      instance.element.style.height = h;
    };
    for (const instance of this._overlay_instances) {
      const { overlay } = instance;
      if (overlay.min_zoom && this.zoom < overlay.min_zoom) {
        setDisplay(instance, "none");
        continue;
      }
      let bounds;
      if (typeof overlay.ref === "string") {
        bounds = this.map.element_bounds.get(overlay.ref);
        if (!bounds) {
          setDisplay(instance, "none");
          continue;
        }
      } else {
        bounds = __spreadValues({ w: 0, h: 0 }, overlay.ref);
      }
      setDisplay(instance, "");
      if (overlay.type === "box" && bounds.w > 0 && bounds.h > 0) {
        const top_left = mapToScreen({ x: bounds.x, y: bounds.y });
        setTransform(instance, `translate(${top_left.x}px, ${top_left.y}px)`);
        setSize(instance, `${bounds.w * scale.x}px`, `${bounds.h * scale.y}px`);
      } else {
        const screen_pos = mapToScreen({
          x: bounds.x + bounds.w / 2,
          y: bounds.y + bounds.h / 2
        });
        setSize(instance, "", "");
        setTransform(instance, overlay.scale_with_zoom ? `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%) scale(${this.zoom})` : `translate(${screen_pos.x}px, ${screen_pos.y}px) translate(-50%, -50%)`);
      }
    }
  }
  /**
   * Handle action events (click, pointer events, etc.) on the map.
   * Only the best matching action is triggered, where the best match is the
   * highest priority action with the smallest map element under the event.
   */
  _handleActionEvent(event_name, e) {
    if (!this.map_image || !this.map?.element_bounds)
      return;
    if (this._pan_exceeded_threshold)
      return;
    if (event_name === "click" && this._action_pointerdown_pos) {
      const dx = e.clientX - this._action_pointerdown_pos.x;
      const dy = e.clientY - this._action_pointerdown_pos.y;
      if (Math.hypot(dx, dy) > 5)
        return;
    }
    const norm = this._eventToMap(e);
    if (norm.x < 0 || norm.x > 1 || norm.y < 0 || norm.y > 1)
      return;
    let best = null;
    let best_area = Number.POSITIVE_INFINITY;
    for (const action of this._actions) {
      if (!action.events.includes(event_name))
        continue;
      if (action.ref === "*") {
        if (!best)
          best = action;
        continue;
      }
      const bounds = this.map.element_bounds.get(action.ref);
      if (!bounds)
        continue;
      if (norm.x < bounds.x || norm.x > bounds.x + bounds.w || norm.y < bounds.y || norm.y > bounds.y + bounds.h) {
        continue;
      }
      const area = bounds.w * bounds.h;
      if (!best || best.ref === "*" || (action.priority || 0) > (best.priority || 0) || (action.priority || 0) === (best.priority || 0) && area < best_area) {
        best = action;
        best_area = area;
      }
    }
    if (!best)
      return;
    const now = Date.now();
    const debounce_key = `${best.ref}:${event_name}`;
    const last_triggered = this._action_last_triggered.get(debounce_key) || 0;
    if (now - last_triggered < 300)
      return;
    this._action_last_triggered.set(debounce_key, now);
    best.callback(norm);
  }
  /**
   * Notify listeners of view changes from user interaction. Notifications
   * are coalesced to one per animation frame as pointer events can fire
   * more often than the display refreshes and listeners may be expensive
   */
  _notifyViewChange() {
    if (!this.onViewChange || this._notify_frame_id !== null)
      return;
    this._notify_frame_id = requestAnimationFrame(() => {
      this._notify_frame_id = null;
      this.onViewChange?.({
        zoom: this.zoom,
        center: __spreadValues({}, this.center)
      });
    });
  }
};

// libs/bookings/src/lib/booking.utilities.ts
function parseJson(value, fallback) {
  if (!value)
    return fallback;
  try {
    return JSON.parse(value);
  } catch {
    return fallback;
  }
}
function lockerBankFromAsset(asset) {
  const data = asset.other_data || {};
  return {
    id: asset.id,
    map_id: asset.map_id || data.map_id || "",
    level_id: asset.zone_id,
    name: asset.identifier || data.name || "",
    height: +(data.height || 3),
    notes: asset.notes || "",
    zones: asset.zones || [asset.zone_id].filter((_) => _),
    tags: asset.tags || parseJson(data.tags, []),
    images: parseJson(data.images, []),
    lockers: []
  };
}
function lockerFromAsset(asset, banks) {
  const data = asset.other_data || {};
  const bank_id = asset.parent_id || "";
  const bank = banks.find((_) => _.id === bank_id);
  return {
    id: asset.id,
    bank_id,
    map_id: asset.map_id || data.map_id,
    assigned_to: asset.assigned_to || data.assigned_to,
    assigned_name: asset.assigned_name || data.assigned_name,
    name: asset.identifier || data.name || "",
    accessible: data.accessible === "true",
    bookable: asset.bookable !== false,
    position: parseJson(data.position, [0, 0]),
    size: parseJson(data.size, [1, 1]),
    bank,
    zone: bank?.zone,
    features: asset.features || parseJson(data.features, [])
  };
}
async function findNearbyFeature(map_url, centered_at, desk_ids = []) {
  const details = await getMapDetails(map_url);
  const centerOf = (id) => {
    const bounds = details.element_bounds.get(id);
    return bounds ? { x: bounds.x + bounds.w / 2, y: bounds.y + bounds.h / 2 } : null;
  };
  const point = (typeof centered_at === "string" ? centerOf(centered_at) : centered_at) || { x: 0.5, y: 0.5 };
  let dist = 10;
  let closest = "";
  for (const desk of desk_ids) {
    const { x, y } = centerOf(desk) || { x: 2, y: 2 };
    const d2 = Math.sqrt((x - point.x) * (x - point.x) + (y - point.y) * (y - point.y));
    if (d2 < dist) {
      dist = d2;
      closest = desk;
    }
  }
  return closest;
}
function newBookingFromCalendarEvent(event) {
  const date = event.date || event.event_start * 1e3;
  const duration = event.duration ?? (event.event_end - event.event_start) / 60;
  const recurrence = event.recurrence?.pattern ? toBookingRecurrence(fromEventRecurrence(event.recurrence), date) : {};
  const rooms = [event.system, ...event.resources || []].filter((_) => !!_?.id);
  const { system_id } = event;
  const asset_ids = unique([...rooms.map((_) => _.id), system_id].filter((_) => !!_));
  return new Booking(__spreadProps(__spreadValues({
    id: event.id,
    user_id: event.organiser?.id || event.host,
    user_email: event.host,
    user_name: event.organiser?.name || event.host,
    // An empty title uses the booking type default.
    title: event.title || void 0,
    date,
    duration,
    all_day: event.all_day,
    timezone: event.timezone,
    asset_id: asset_ids[0],
    asset_ids,
    asset_name: event.system?.display_name || event.system?.name,
    zones: unique(rooms.flatMap((_) => _.zones || [])),
    booking_type: "room",
    approved: event.status === "approved"
  }, recurrence), {
    extension_data: __spreadValues({}, event)
  }));
}
async function loadLockerBanksForScope(org, scope_id) {
  if (!scope_id)
    return [];
  const assets = await queryLockerBankAssetsForZones([scope_id]).catch(() => []);
  const banks = assets.map(lockerBankFromAsset);
  for (const bank of banks) {
    bank.zone = org.levelWithID(bank.zones || []);
  }
  return banks;
}
async function loadLockersForScope(org, scope_id, banks) {
  if (!scope_id)
    return [];
  const assets = await queryLockerAssetsForZones([scope_id]).catch(() => []);
  const lockers = assets.map((_) => lockerFromAsset(_, banks));
  for (const bank of banks) {
    const parent = __spreadProps(__spreadValues({}, bank), { lockers: [] });
    bank.lockers = lockers.filter((_) => _.bank_id === bank.id).map((_) => __spreadProps(__spreadValues({}, _), { bank: parent }));
  }
  return lockers.filter((_) => _.bank);
}
async function loadLockerResources(org, scope_id) {
  const banks = await loadLockerBanksForScope(org, scope_id);
  return loadLockersForScope(org, scope_id, banks);
}

// libs/bookings/src/lib/booking-resource.utilities.ts
function resourceMatches(resource2, id) {
  if (!resource2 || !id)
    return false;
  return resource2.id === id || resource2.map_id === id;
}
function findResourceById(resources, id) {
  return (resources || []).find((_) => resourceMatches(_, id));
}
function resourceReserved(resource2, reserved_ids) {
  return !!(resource2 && (resource2.id && reserved_ids.has(resource2.id) || resource2.map_id && reserved_ids.has(resource2.map_id)));
}
function reserveResource(resource2, reserved_ids) {
  if (!resource2)
    return;
  if (resource2.id)
    reserved_ids.add(resource2.id);
  if (resource2.map_id)
    reserved_ids.add(resource2.map_id);
}
async function nearbyResources(map_url, id, resources, count, reserved_ids = /* @__PURE__ */ new Set()) {
  const nearby_resources = [];
  let asset_list = resources.filter((_) => !resourceReserved(_, reserved_ids) && !resourceMatches(_, id));
  for (let i = 0; i < count; i++) {
    const item = await findNearbyFeature(map_url, id, asset_list.map((_) => _.map_id || _.id));
    if (item) {
      const resource2 = resources.find((_) => resourceMatches(_, item));
      if (!resource2 || resourceReserved(resource2, reserved_ids)) {
        asset_list = asset_list.filter((_) => !resourceMatches(_, item));
        continue;
      }
      nearby_resources.push(resource2);
      reserveResource(resource2, reserved_ids);
      asset_list = asset_list.filter((_) => !resourceMatches(_, item));
    }
  }
  return nearby_resources;
}
function preferredAllocationPool(available, user_groups) {
  if (!user_groups.length)
    return available;
  const tagMatch = (asset) => !!asset.tags?.some((tag) => user_groups.includes(tag));
  const homebaseMatch = (asset) => !!asset.homebase && user_groups.includes(asset.homebase);
  const tag_matched = available.filter(tagMatch);
  const homebase_matched = available.filter(homebaseMatch);
  const both_matched = tag_matched.filter(homebaseMatch);
  if (both_matched.length)
    return both_matched;
  if (homebase_matched.length)
    return homebase_matched;
  if (tag_matched.length)
    return tag_matched;
  return available;
}
function pickAutoAllocatedResource(available) {
  const zone_map = {};
  for (const asset of available) {
    const zone_id = asset.zone?.id || "unknown";
    if (!zone_map[zone_id])
      zone_map[zone_id] = [];
    zone_map[zone_id].push(asset);
  }
  let best_zone_id = "";
  let best_count = 0;
  for (const zone_id in zone_map) {
    if (zone_map[zone_id].length > best_count) {
      best_count = zone_map[zone_id].length;
      best_zone_id = zone_id;
    }
  }
  const candidates = zone_map[best_zone_id];
  return candidates[Math.floor(Math.random() * candidates.length)];
}

// libs/bookings/src/lib/desk-questions-modal.component.ts
function DeskQuestionsModalComponent_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 0)(1, "h2", 2);
    \u0275\u0275text(2, "COVID-19 Questionnaire");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "main", 3)(4, "div", 4)(5, "label");
    \u0275\u0275text(6, " Have you travelled overseas within the last 14 days?");
    \u0275\u0275elementStart(7, "span");
    \u0275\u0275text(8, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(9, "mat-radio-group", 5)(10, "mat-radio-button", 6);
    \u0275\u0275text(11, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-radio-button", 6);
    \u0275\u0275text(13, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(14, "div", 4)(15, "label");
    \u0275\u0275text(16, " Are you unwell or experiencing any cold or flu-like symptoms?");
    \u0275\u0275elementStart(17, "span");
    \u0275\u0275text(18, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(19, "mat-radio-group", 5)(20, "mat-radio-button", 6);
    \u0275\u0275text(21, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "mat-radio-button", 6);
    \u0275\u0275text(23, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div", 7)(25, "label");
    \u0275\u0275text(26, " Have you had contact with anyone with suspected COVID-19?");
    \u0275\u0275elementStart(27, "span");
    \u0275\u0275text(28, "*");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(29, "mat-radio-group", 5)(30, "mat-radio-button", 6);
    \u0275\u0275text(31, "Yes");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(32, "mat-radio-button", 6);
    \u0275\u0275text(33, "No");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(34, "footer", 8)(35, "button", 9);
    \u0275\u0275listener("click", function DeskQuestionsModalComponent_Conditional_0_Template_button_click_35_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.submit());
    });
    \u0275\u0275text(36, "Submit");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(37, "button", 10)(38, "icon");
    \u0275\u0275text(39, "close");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(9);
    \u0275\u0275property("formField", ctx_r1.form.travelled);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.unwell);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
    \u0275\u0275advance(7);
    \u0275\u0275property("formField", ctx_r1.form.contact);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("value", true);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", false);
  }
}
function DeskQuestionsModalComponent_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "main", 1)(1, "p", 3);
    \u0275\u0275text(2, " Your request to work from the office has been rejected based on your response to the compulsory Covid-19 questions. Please feel free to submit a new request when circumstances change in a way that changes your answer to the questions. ");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "button", 10)(4, "icon");
    \u0275\u0275text(5, "close");
    \u0275\u0275elementEnd()()();
  }
}
var DeskQuestionsModalComponent = class _DeskQuestionsModalComponent {
  constructor() {
    this.event = new EventEmitter();
    this.model = signal(
      {
        travelled: false,
        unwell: false,
        contact: false
      },
      ...ngDevMode ? [{ debugName: "model" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.form = form(this.model);
    this.failure = signal(
      false,
      ...ngDevMode ? [{ debugName: "failure" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  submit() {
    this.form().markAsTouched();
    if (Object.values(this.model()).find((value) => value === true || value === "true")) {
      this.failure.set(true);
      return;
    }
    this.event.emit({ reason: "done" });
  }
  static {
    this.\u0275fac = function DeskQuestionsModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _DeskQuestionsModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DeskQuestionsModalComponent, selectors: [["desk-question-modal"]], outputs: { event: "event" }, decls: 2, vars: 1, consts: [[1, "relative"], ["failure", "", 1, "relative", "pt-8"], [1, "p-4", "text-xl"], [1, "p-4"], [1, "mb-4", "flex", "flex-col"], [1, "space-x-2", 3, "formField"], [3, "value"], [1, "flex", "flex-col"], [1, "flex", "items-center", "justify-center", "p-2"], ["btn", "", "matRipple", "", 3, "click"], ["aria-label", "Close", "close", "", "icon", "", "matRipple", "", "mat-dialog-close", ""]], template: function DeskQuestionsModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275conditionalCreate(0, DeskQuestionsModalComponent_Conditional_0_Template, 40, 9, "div", 0)(1, DeskQuestionsModalComponent_Conditional_1_Template, 6, 0, "main", 1);
      }
      if (rf & 2) {
        \u0275\u0275conditional(!ctx.failure() ? 0 : 1);
      }
    }, dependencies: [
      IconComponent,
      MatDialogModule,
      MatDialogClose,
      MatRippleModule,
      MatRipple,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      FormField
    ], styles: ["\nmain[_ngcontent-%COMP%] {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close][_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DeskQuestionsModalComponent, [{
    type: Component,
    args: [{ selector: "desk-question-modal", template: `
        @if (!failure()) {
            <div class="relative">
                <h2 class="p-4 text-xl">COVID-19 Questionnaire</h2>
                <main class="p-4">
                    <div class="mb-4 flex flex-col">
                        <label>
                            Have you travelled overseas within the last 14
                            days?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.travelled"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="mb-4 flex flex-col">
                        <label>
                            Are you unwell or experiencing any cold or flu-like
                            symptoms?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.unwell"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                    <div class="flex flex-col">
                        <label>
                            Have you had contact with anyone with suspected
                            COVID-19?<span>*</span>
                        </label>
                        <mat-radio-group
                            [formField]="form.contact"
                            class="space-x-2"
                        >
                            <mat-radio-button [value]="true"
                                >Yes</mat-radio-button
                            >
                            <mat-radio-button [value]="false"
                                >No</mat-radio-button
                            >
                        </mat-radio-group>
                    </div>
                </main>
                <footer class="flex items-center justify-center p-2">
                    <button btn matRipple (click)="submit()">Submit</button>
                </footer>
                <button
                    aria-label="Close"
                    close
                    icon
                    matRipple
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </div>
        } @else {
            <main failure class="relative pt-8">
                <p class="p-4">
                    Your request to work from the office has been rejected based
                    on your response to the compulsory Covid-19 questions.
                    Please feel free to submit a new request when circumstances
                    change in a way that changes your answer to the questions.
                </p>
                <button
                    aria-label="Close"
                    close
                    icon
                    matRipple
                    mat-dialog-close
                >
                    <icon>close</icon>
                </button>
            </main>
        }
    `, imports: [
      IconComponent,
      MatDialogModule,
      MatRippleModule,
      MatRadioModule,
      FormField
    ], styles: ["/* angular:styles/component:css;c7f37c1e60a5fae4a31dda6fbae0d3cc845b39f17b3f09824fe872f6bf4e7f79;/home/runner/work/user-interfaces/user-interfaces/libs/bookings/src/lib/desk-questions-modal.component.ts */\nmain {\n  width: 24rem;\n  max-width: calc(100vw - 4.5rem);\n}\n[close] {\n  position: absolute;\n  top: 0.5rem;\n  right: 0.5rem;\n}\n/*# sourceMappingURL=desk-questions-modal.component.css.map */\n"] }]
  }], null, { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DeskQuestionsModalComponent, { className: "DeskQuestionsModalComponent", filePath: "libs/bookings/src/lib/desk-questions-modal.component.ts", lineNumber: 123 });
})();

// libs/components/src/lib/settings-toggle.component.ts
var _c05 = ["*"];
function SettingsToggleComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 3);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 4);
    \u0275\u0275text(1, "info");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("matTooltip", ctx_r0.info());
  }
}
function SettingsToggleComponent_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "div", 5);
  }
}
function SettingsToggleComponent_Conditional_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 6)(1, "div", 8)(2, "div", 9)(3, "icon", 10);
    \u0275\u0275text(4);
    \u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275classProp("bg-base-200", !ctx_r0.value())("bg-info", ctx_r0.value())("border-info!", ctx_r0.value());
    \u0275\u0275advance();
    \u0275\u0275classProp("left-1", !ctx_r0.value())("left-5", ctx_r0.value())("bg-base-400", !ctx_r0.value())("bg-info-light", ctx_r0.value());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r0.value() ? "done" : "remove");
  }
}
function SettingsToggleComponent_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r2 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 11);
    \u0275\u0275listener("ngModelChange", function SettingsToggleComponent_Conditional_10_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r2);
      const ctx_r0 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r0.setValue($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275property("tabIndex", -1)("ngModel", ctx_r0.value());
    \u0275\u0275control();
  }
}
var SettingsToggleComponent = class _SettingsToggleComponent {
  constructor() {
    this.toggle = input(
      void 0,
      ...ngDevMode ? [{ debugName: "toggle" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.label = input(
      void 0,
      ...ngDevMode ? [{ debugName: "label" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.info = input(
      void 0,
      ...ngDevMode ? [{ debugName: "info" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.inline = input(
      true,
      ...ngDevMode ? [{ debugName: "inline" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.value = signal(
      void 0,
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled = signal(
      false,
      ...ngDevMode ? [{ debugName: "disabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.registerOnChange = (fn) => this._onChange = fn;
    this.registerOnTouched = (fn) => this._onTouch = fn;
  }
  /**
   * Update the form field value
   * @param new_value New value to set on the form field
   */
  setValue(new_value) {
    this.value.set(new_value);
    if (this._onChange)
      this._onChange(new_value);
  }
  /* istanbul ignore next */
  /**
   * Update local value when form control value is changed
   * @param value The new value for the component
   */
  writeValue(value) {
    this.value.set(value);
  }
  /** Disable the toggle with the parent form control */
  setDisabledState(disabled2) {
    this.disabled.set(disabled2);
  }
  static {
    this.\u0275fac = function SettingsToggleComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _SettingsToggleComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _SettingsToggleComponent, selectors: [["settings-toggle"]], inputs: { toggle: [1, "toggle"], label: [1, "label"], info: [1, "info"], inline: [1, "inline"] }, features: [\u0275\u0275ProvidersFeature([provideValueAccessor(() => _SettingsToggleComponent)])], ngContentSelectors: _c05, decls: 11, vars: 17, consts: [["type", "button", "matRipple", "", 1, "hover:bg-base-200", "relative", "flex", "flex-1", "items-center", "space-x-2", "overflow-hidden", "rounded-sm", "border", "py-1", "pr-1", "pl-2", "disabled:opacity-50", 3, "click", "disabled"], [1, "z-10", "flex", "flex-1", "items-center", "space-x-2", "px-2", "text-left"], [1, "flex", "h-full", "w-full", "flex-col", "justify-center", "leading-none"], [1, "text-xs", "opacity-70"], ["aria-hidden", "true", 3, "matTooltip"], [1, "bg-info", "absolute", "inset-0", "z-0", "m-0!", "opacity-10"], [1, "px-2"], ["aria-hidden", "true", 1, "pointer-events-none", 3, "tabIndex", "ngModel"], ["toggle", "", 1, "border-base-400", "relative", "h-8", "w-12", "rounded-full", "border-2"], [1, "absolute", "top-1/2", "flex", "h-6", "w-6", "-translate-x-0.5", "-translate-y-1/2", "items-center", "justify-center", "rounded-full", "text-black", "shadow-sm"], ["aria-hidden", "true"], ["aria-hidden", "true", 1, "pointer-events-none", 3, "ngModelChange", "tabIndex", "ngModel"]], template: function SettingsToggleComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275elementStart(0, "button", 0);
        \u0275\u0275listener("click", function SettingsToggleComponent_Template_button_click_0_listener() {
          return ctx.setValue(!ctx.value());
        });
        \u0275\u0275elementStart(1, "div", 1)(2, "div", 2)(3, "div");
        \u0275\u0275text(4);
        \u0275\u0275projection(5);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(6, SettingsToggleComponent_Conditional_6_Template, 2, 1, "div", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(7, SettingsToggleComponent_Conditional_7_Template, 2, 1, "icon", 4);
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(8, SettingsToggleComponent_Conditional_8_Template, 1, 0, "div", 5);
        \u0275\u0275conditionalCreate(9, SettingsToggleComponent_Conditional_9_Template, 5, 15, "div", 6)(10, SettingsToggleComponent_Conditional_10_Template, 1, 2, "mat-checkbox", 7);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-base-300", !ctx.value())("border-info", ctx.value());
        \u0275\u0275property("disabled", ctx.disabled());
        \u0275\u0275attribute("role", ctx.toggle() ? "switch" : "checkbox")("aria-checked", !!ctx.value())("aria-description", !ctx.inline() ? ctx.info() : null);
        \u0275\u0275advance();
        \u0275\u0275classProp("py-2", !ctx.inline())("py-1", ctx.inline());
        \u0275\u0275advance(3);
        \u0275\u0275textInterpolate(ctx.label());
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.info() && ctx.inline() ? 6 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.info() && !ctx.inline() ? 7 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.value() ? 8 : -1);
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.toggle() ? 9 : 10);
      }
    }, dependencies: [MatCheckboxModule, MatCheckbox, FormsModule, NgControlStatus, NgModel, IconComponent, MatTooltipModule, MatTooltip], styles: ["\n[_nghost-%COMP%] {\n  display: flex;\n}\n[toggle][_ngcontent-%COMP%] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SettingsToggleComponent, [{
    type: Component,
    args: [{ selector: "settings-toggle", template: `
        <button
            type="button"
            matRipple
            class="hover:bg-base-200 relative flex flex-1 items-center space-x-2 overflow-hidden rounded-sm border py-1 pr-1 pl-2 disabled:opacity-50"
            [disabled]="disabled()"
            [class.border-base-300]="!value()"
            [class.border-info]="value()"
            [attr.role]="toggle() ? 'switch' : 'checkbox'"
            [attr.aria-checked]="!!value()"
            [attr.aria-description]="!inline() ? info() : null"
            (click)="setValue(!value())"
        >
            <div
                class="z-10 flex flex-1 items-center space-x-2 px-2 text-left"
                [class.py-2]="!inline()"
                [class.py-1]="inline()"
            >
                <div
                    class="flex h-full w-full flex-col justify-center leading-none"
                >
                    <div>{{ label() }}<ng-content></ng-content></div>
                    @if (info() && inline()) {
                        <div class="text-xs opacity-70">{{ info() }}</div>
                    }
                </div>
                @if (info() && !inline()) {
                    <icon aria-hidden="true" [matTooltip]="info()">info</icon>
                }
            </div>
            @if (value()) {
                <div class="bg-info absolute inset-0 z-0 m-0! opacity-10"></div>
            }
            @if (toggle()) {
                <div class="px-2">
                    <div
                        toggle
                        class="border-base-400 relative h-8 w-12 rounded-full border-2"
                        [class.bg-base-200]="!value()"
                        [class.bg-info]="value()"
                        [class.border-info!]="value()"
                    >
                        <div
                            class="absolute top-1/2 flex h-6 w-6 -translate-x-0.5 -translate-y-1/2 items-center justify-center rounded-full text-black shadow-sm"
                            [class.left-1]="!value()"
                            [class.left-5]="value()"
                            [class.bg-base-400]="!value()"
                            [class.bg-info-light]="value()"
                        >
                            <icon aria-hidden="true">{{
                                value() ? 'done' : 'remove'
                            }}</icon>
                        </div>
                    </div>
                </div>
            } @else {
                <!-- Visual only. The button is the checkbox for assistive technology -->
                <mat-checkbox
                    aria-hidden="true"
                    [tabIndex]="-1"
                    [ngModel]="value()"
                    (ngModelChange)="setValue($event)"
                    class="pointer-events-none"
                ></mat-checkbox>
            }
        </button>
    `, providers: [provideValueAccessor(() => SettingsToggleComponent)], imports: [MatCheckboxModule, FormsModule, IconComponent, MatTooltipModule], styles: ["/* angular:styles/component:css;09d472dfc67150cf01347a580874515fc3cc343b61a90041f2b167ad15a01cf4;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/settings-toggle.component.ts */\n:host {\n  display: flex;\n}\n[toggle] {\n  transition: background 200ms, left 200ms;\n}\n/*# sourceMappingURL=settings-toggle.component.css.map */\n"] }]
  }], null, { toggle: [{ type: Input, args: [{ isSignal: true, alias: "toggle", required: false }] }], label: [{ type: Input, args: [{ isSignal: true, alias: "label", required: false }] }], info: [{ type: Input, args: [{ isSignal: true, alias: "info", required: false }] }], inline: [{ type: Input, args: [{ isSignal: true, alias: "inline", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(SettingsToggleComponent, { className: "SettingsToggleComponent", filePath: "libs/components/src/lib/settings-toggle.component.ts", lineNumber: 93 });
})();

// libs/components/src/lib/attached-resource-config-modal.component.ts
var _c06 = (a0) => ({ name: a0 });
function AttachedResourceConfigModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "button", 3);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275elementStart(2, "icon");
    \u0275\u0275text(3, "close");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(1, 1, "COMMON.CLOSE"));
  }
}
function AttachedResourceConfigModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "settings-toggle", 10);
    \u0275\u0275pipe(1, "translate");
    \u0275\u0275listener("ngModelChange", function AttachedResourceConfigModalComponent_Conditional_6_Template_settings_toggle_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.saveNotesSetting($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275property("ngModel", ctx_r1.require_notes())("label", \u0275\u0275pipeBind1(1, 2, "RESOURCE.REQUIRE_NOTES"));
    \u0275\u0275control();
  }
}
function AttachedResourceConfigModalComponent_For_11_For_36_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const type_r8 = ctx.$implicit;
    \u0275\u0275property("value", type_r8.id);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", type_r8.name, " ");
  }
}
function AttachedResourceConfigModalComponent_For_11_For_36_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 21);
    \u0275\u0275element(1, "div", 22);
    \u0275\u0275elementStart(2, "mat-form-field", 12)(3, "mat-select", 23);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_For_36_Template_mat_select_ngModelChange_3_listener($event) {
      const rule_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r7[0], $event) || (rule_r7[0] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(4, AttachedResourceConfigModalComponent_For_11_For_36_For_5_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12)(7, "input", 25);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_For_36_Template_input_ngModelChange_7_listener($event) {
      const rule_r7 = \u0275\u0275restoreView(_r6).$implicit;
      \u0275\u0275twoWayBindingSet(rule_r7[1], $event) || (rule_r7[1] = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(8, "mat-error");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "button", 26);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_For_36_Template_button_click_11_listener() {
      const \u0275$index_80_r9 = \u0275\u0275restoreView(_r6).$index;
      const set_r4 = \u0275\u0275nextContext().$implicit;
      return \u0275\u0275resetView(set_r4.rules.splice(\u0275$index_80_r9, 1));
    });
    \u0275\u0275elementStart(13, "icon");
    \u0275\u0275text(14, "delete");
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const rule_r7 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r7[0]);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r1.rule_types);
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", rule_r7[1]);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 4, "RESOURCE.RULESET_VALUE_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 6, "RESOURCE.RULESET_REMOVE_RULES"));
  }
}
function AttachedResourceConfigModalComponent_For_11_Template(rf, ctx) {
  if (rf & 1) {
    const _r3 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 7)(1, "div", 11)(2, "mat-form-field", 12)(3, "input", 13);
    \u0275\u0275twoWayListener("ngModelChange", function AttachedResourceConfigModalComponent_For_11_Template_input_ngModelChange_3_listener($event) {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      \u0275\u0275twoWayBindingSet(set_r4.name, $event) || (set_r4.name = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementStart(4, "mat-error");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "button", 14);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "icon");
    \u0275\u0275text(10, "more_vert");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "mat-menu", null, 0)(13, "button", 15);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_13_listener() {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      set_r4.rules.push(["", ""]);
      return \u0275\u0275resetView(ctx_r1.show_rules.set(set_r4.id));
    });
    \u0275\u0275elementStart(14, "div", 16)(15, "icon", 17);
    \u0275\u0275text(16, "add");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(17, "div");
    \u0275\u0275text(18);
    \u0275\u0275pipe(19, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(20, "button", 18);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_20_listener() {
      const set_r4 = \u0275\u0275restoreView(_r3).$implicit;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.show_rules.set(ctx_r1.show_rules() !== set_r4.id ? set_r4.id : ""));
    });
    \u0275\u0275elementStart(21, "div", 16)(22, "icon", 17);
    \u0275\u0275text(23);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "div");
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()()();
    \u0275\u0275elementStart(27, "button", 18);
    \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_For_11_Template_button_click_27_listener() {
      const \u0275$index_24_r5 = \u0275\u0275restoreView(_r3).$index;
      const ctx_r1 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r1.rulesets.splice(\u0275$index_24_r5, 1));
    });
    \u0275\u0275elementStart(28, "div", 19)(29, "icon", 17);
    \u0275\u0275text(30, "delete");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(31, "div");
    \u0275\u0275text(32);
    \u0275\u0275pipe(33, "translate");
    \u0275\u0275elementEnd()()()()();
    \u0275\u0275elementStart(34, "div", 20);
    \u0275\u0275repeaterCreate(35, AttachedResourceConfigModalComponent_For_11_For_36_Template, 15, 8, "div", 21, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const set_r4 = ctx.$implicit;
    const menu_r10 = \u0275\u0275reference(12);
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(3);
    \u0275\u0275twoWayProperty("ngModel", set_r4.name);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 10, "RESOURCE.RULESET_NAME_REQUIRED"));
    \u0275\u0275advance(2);
    \u0275\u0275property("matMenuTriggerFor", menu_r10);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 12, "COMMON.MORE_OPTIONS"));
    \u0275\u0275advance(11);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(19, 14, "RESOURCE.RULESET_ADD_RULE"), " ");
    \u0275\u0275advance(5);
    \u0275\u0275textInterpolate(ctx_r1.show_rules() === set_r4.id ? "expand_less" : "expand_more");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(26, 16, ctx_r1.show_rules() === set_r4.id ? "RESOURCE.RULESET_HIDE_RULES" : "RESOURCE.RULESET_SHOW_RULES"), " ");
    \u0275\u0275advance(7);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(33, 18, "RESOURCE.RULESET_REMOVE_RULES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275styleProp("height", (ctx_r1.show_rules() === set_r4.id ? 4 * set_r4.rules.length : 0) + "em");
    \u0275\u0275advance();
    \u0275\u0275repeater(set_r4.rules);
  }
}
function zoneRulesetLoader(metadata_name) {
  const requests = {};
  return (zone_id, fresh = false) => {
    if (!zone_id)
      return Promise.resolve([]);
    if (!requests[zone_id] || fresh) {
      requests[zone_id] = _c(zone_id, metadata_name).then((_) => _.details instanceof Array ? _.details : []).catch(() => []);
    }
    return requests[zone_id];
  };
}
var RULE_TYPES = [
  { id: "after_hour", name: "After Hour of Day" },
  { id: "before_hour", name: "Before Hour of Day" },
  { id: "min_length", name: "Min. Meeting Length" },
  { id: "max_length", name: "Max. Meeting Length" },
  { id: "is_before", name: "Is Hours before Meeting" },
  { id: "within_hours", name: "Within Hours before Meeting" },
  { id: "visitor_type", name: "Visitor Type" },
  { id: "groups", name: "User in Groups" }
];
var AttachedResourceConfigModalComponent = class _AttachedResourceConfigModalComponent extends AsyncHandler {
  newId() {
    return "ruleset-" + Math.floor(Math.random() * 99999999);
  }
  constructor() {
    super();
    this._data = inject(MAT_DIALOG_DATA);
    this.event = new EventEmitter();
    this.loading = signal(
      false,
      ...ngDevMode ? [{ debugName: "loading" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.show_rules = signal(
      "",
      ...ngDevMode ? [{ debugName: "show_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.require_notes = signal(
      this._data.require_notes,
      ...ngDevMode ? [{ debugName: "require_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pending_notes = null;
    this.resource_name = this._data.resource_name || "Catering";
    this.rule_types = RULE_TYPES;
    this.can_save_notes = computed(
      () => !!this._data.saveNotes,
      ...ngDevMode ? [{ debugName: "can_save_notes" }] : (
        /* istanbul ignore next */
        []
      )
    );
    const _data = this._data;
    this.rulesets = (_data.config || []).map((set2) => {
      set2.rules = set2.rules.map((i) => [
        i[0],
        JSON.stringify(i[1])
      ]);
      return set2;
    });
  }
  saveNotesSetting(value) {
    this._pending_notes = value;
    this.timeout("save-notes", () => this._saveNotes(), 1e3);
  }
  ngOnDestroy() {
    this._saveNotes();
    super.ngOnDestroy();
  }
  _saveNotes() {
    if (this._pending_notes === null)
      return;
    this._data.saveNotes?.(this._pending_notes);
    this._pending_notes = null;
  }
  /**
   * Emit the rulesets for the opener to save. The opener sets `loading` back
   * to false when the save fails, so the user can try again.
   */
  saveChanges() {
    if (this.loading())
      return;
    this.loading.set(true);
    const rulesets = this.rulesets.map((set2) => {
      return __spreadProps(__spreadValues({}, set2), {
        rules: set2.rules.map((i) => {
          let value = i[1];
          try {
            value = JSON.parse(i[1]);
          } catch {
          }
          return [i[0], value];
        })
      });
    });
    this.event.emit({ reason: "done", metadata: rulesets });
  }
  static {
    this.\u0275fac = function AttachedResourceConfigModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AttachedResourceConfigModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _AttachedResourceConfigModalComponent, selectors: [["attached-resource-config-modal"]], outputs: { event: "event" }, features: [\u0275\u0275InheritDefinitionFeature], decls: 16, vars: 14, consts: [["menu", "matMenu"], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "w-[calc(100%-1rem)]", "rounded-sm", "border-none", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], ["icon", "", "matRipple", "", "mat-dialog-close", ""], [1, "max-w-lg", "min-w-xl", "space-y-4", "overflow-auto", "px-4", "pt-2", "pb-4", "text-center"], [3, "ngModel", "label"], ["btn", "", "matRipple", "", 1, "w-full", 3, "click"], [1, "ruleset", "mb-2"], [1, "border-base-200", "flex", "items-center", "justify-end", "border-t", "border-solid", "px-4", "py-2"], ["btn", "", "matRipple", "", 1, "w-36", 3, "click"], [3, "ngModelChange", "ngModel", "label"], [1, "mb-2", "flex", "items-center", "space-x-2"], ["appearance", "outline", 1, "no-subscript", "flex-1"], ["matInput", "", "name", "name", "placeholder", "Zone ID, Category or Tag", "required", "", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", 1, "h-12", "w-12", "rounded-sm", 3, "matMenuTriggerFor"], ["mat-menu-item", "", 1, "w-52", 3, "click"], [1, "flex", "items-center", "space-x-2"], [1, "text-2xl"], ["mat-menu-item", "", 3, "click"], [1, "text-error", "flex", "items-center", "space-x-2"], ["name", "rules", 1, "overflow-hidden"], [1, "relative", "flex", "h-16", "items-center", "space-x-2", "pl-7"], [1, "border-base-200", "absolute", "top-1/2", "left-3", "h-32", "w-4", "-translate-y-full", "border-b-2", "border-l-2"], ["name", "booking-type", "placeholder", "Select Rule", 3, "ngModelChange", "ngModel"], [3, "value"], ["matInput", "", "name", "value", "placeholder", "Rule value", "required", "", 3, "ngModelChange", "ngModel"], ["icon", "", "matRipple", "", 1, "border-error", "text-error", "h-12", "w-12", "rounded-sm", "border", 3, "click"]], template: function AttachedResourceConfigModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 1)(1, "h2", 2);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275conditionalCreate(4, AttachedResourceConfigModalComponent_Conditional_4_Template, 4, 3, "button", 3);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(5, "main", 4);
        \u0275\u0275conditionalCreate(6, AttachedResourceConfigModalComponent_Conditional_6_Template, 2, 4, "settings-toggle", 5);
        \u0275\u0275elementStart(7, "button", 6);
        \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_Template_button_click_7_listener() {
          return ctx.rulesets.push({ id: ctx.newId(), name: "", rules: [] });
        });
        \u0275\u0275text(8);
        \u0275\u0275pipe(9, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275repeaterCreate(10, AttachedResourceConfigModalComponent_For_11_Template, 37, 20, "div", 7, \u0275\u0275repeaterTrackByIdentity);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(12, "footer", 8)(13, "button", 9);
        \u0275\u0275listener("click", function AttachedResourceConfigModalComponent_Template_button_click_13_listener() {
          return ctx.saveChanges();
        });
        \u0275\u0275text(14);
        \u0275\u0275pipe(15, "translate");
        \u0275\u0275elementEnd()();
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(3, 5, "RESOURCE.RULESET_HEADER", \u0275\u0275pureFunction1(12, _c06, ctx.resource_name)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(!ctx.loading() ? 4 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.can_save_notes() ? 6 : -1);
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 8, "RESOURCE.RULESET_NEW"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275repeater(ctx.rulesets);
        \u0275\u0275advance(4);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 10, "COMMON.SAVE"), " ");
      }
    }, dependencies: [
      MatDialogModule,
      MatDialogClose,
      MatDialogTitle,
      MatRippleModule,
      MatRipple,
      MatFormFieldModule,
      MatFormField,
      MatError,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatOption,
      MatMenuModule,
      MatMenu,
      MatMenuItem,
      MatMenuTrigger,
      SettingsToggleComponent,
      IconComponent,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      RequiredValidator,
      NgModel,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */", "\n[name=rules][_ngcontent-%COMP%] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AttachedResourceConfigModalComponent, [{
    type: Component,
    args: [{ selector: "attached-resource-config-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 w-[calc(100%-1rem)] rounded-sm border-none p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{
                    'RESOURCE.RULESET_HEADER'
                        | translate: { name: resource_name }
                }}
            </h2>
            @if (!loading()) {
                <button
                    icon
                    matRipple
                    mat-dialog-close
                    [attr.aria-label]="'COMMON.CLOSE' | translate"
                >
                    <icon>close</icon>
                </button>
            }
        </header>
        <main
            class="max-w-lg min-w-xl space-y-4 overflow-auto px-4 pt-2 pb-4 text-center"
        >
            @if (can_save_notes()) {
                <settings-toggle
                    [ngModel]="require_notes()"
                    (ngModelChange)="saveNotesSetting($event)"
                    [label]="'RESOURCE.REQUIRE_NOTES' | translate"
                ></settings-toggle>
            }
            <button
                btn
                matRipple
                class="w-full"
                (click)="rulesets.push({ id: newId(), name: '', rules: [] })"
            >
                {{ 'RESOURCE.RULESET_NEW' | translate }}
            </button>
            @for (set of rulesets; track set; let i = $index) {
                <div class="ruleset mb-2">
                    <div class="mb-2 flex items-center space-x-2">
                        <mat-form-field
                            class="no-subscript flex-1"
                            appearance="outline"
                        >
                            <input
                                matInput
                                name="name"
                                placeholder="Zone ID, Category or Tag"
                                [(ngModel)]="set.name"
                                required
                            />
                            <mat-error>{{
                                'RESOURCE.RULESET_NAME_REQUIRED' | translate
                            }}</mat-error>
                        </mat-form-field>
                        <button
                            icon
                            matRipple
                            class="h-12 w-12 rounded-sm"
                            [matMenuTriggerFor]="menu"
                            [attr.aria-label]="
                                'COMMON.MORE_OPTIONS' | translate
                            "
                        >
                            <icon>more_vert</icon>
                        </button>
                        <mat-menu #menu="matMenu">
                            <button
                                mat-menu-item
                                class="w-52"
                                (click)="
                                    set.rules.push($any(['', '']));
                                    show_rules.set(set.id)
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">add</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_ADD_RULE'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="
                                    show_rules.set(
                                        show_rules() !== set.id ? set.id : ''
                                    )
                                "
                            >
                                <div class="flex items-center space-x-2">
                                    <icon class="text-2xl">{{
                                        show_rules() === set.id
                                            ? 'expand_less'
                                            : 'expand_more'
                                    }}</icon>
                                    <div>
                                        {{
                                            (show_rules() === set.id
                                                ? 'RESOURCE.RULESET_HIDE_RULES'
                                                : 'RESOURCE.RULESET_SHOW_RULES'
                                            ) | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                            <button
                                mat-menu-item
                                (click)="rulesets.splice(i, 1)"
                            >
                                <div
                                    class="text-error flex items-center space-x-2"
                                >
                                    <icon class="text-2xl">delete</icon>
                                    <div>
                                        {{
                                            'RESOURCE.RULESET_REMOVE_RULES'
                                                | translate
                                        }}
                                    </div>
                                </div>
                            </button>
                        </mat-menu>
                    </div>
                    <div
                        name="rules"
                        class="overflow-hidden"
                        [style.height]="
                            (show_rules() === set.id
                                ? 4 * set.rules.length
                                : 0) + 'em'
                        "
                    >
                        @for (rule of set.rules; track rule; let i = $index) {
                            <div
                                class="relative flex h-16 items-center space-x-2 pl-7"
                            >
                                <div
                                    class="border-base-200 absolute top-1/2 left-3 h-32 w-4 -translate-y-full border-b-2 border-l-2"
                                ></div>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <mat-select
                                        name="booking-type"
                                        [(ngModel)]="rule[0]"
                                        placeholder="Select Rule"
                                    >
                                        @for (type of rule_types; track type) {
                                            <mat-option [value]="type.id">
                                                {{ type.name }}
                                            </mat-option>
                                        }
                                    </mat-select>
                                </mat-form-field>
                                <mat-form-field
                                    class="no-subscript flex-1"
                                    appearance="outline"
                                >
                                    <input
                                        matInput
                                        name="value"
                                        placeholder="Rule value"
                                        [(ngModel)]="rule[1]"
                                        required
                                    />
                                    <mat-error>{{
                                        'RESOURCE.RULESET_VALUE_REQUIRED'
                                            | translate
                                    }}</mat-error>
                                </mat-form-field>
                                <button
                                    icon
                                    matRipple
                                    class="border-error text-error h-12 w-12 rounded-sm border"
                                    [attr.aria-label]="
                                        'RESOURCE.RULESET_REMOVE_RULES'
                                            | translate
                                    "
                                    (click)="set.rules.splice(i, 1)"
                                >
                                    <icon>delete</icon>
                                </button>
                            </div>
                        }
                    </div>
                </div>
            }
        </main>
        <footer
            class="border-base-200 flex items-center justify-end border-t border-solid px-4 py-2"
        >
            <button btn matRipple class="w-36" (click)="saveChanges()">
                {{ 'COMMON.SAVE' | translate }}
            </button>
        </footer>
    `, imports: [
      MatDialogModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatMenuModule,
      SettingsToggleComponent,
      TranslatePipe,
      IconComponent,
      FormsModule
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/attached-resource-config-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */\n", "/* angular:styles/component:css;e42970bb9b1cb2f175261260cd89c08d4c8b2fb74f6c959cde75a7e627b2b6e7;/home/runner/work/user-interfaces/user-interfaces/libs/components/src/lib/attached-resource-config-modal.component.ts */\n[name=rules] {\n  transition: height 200ms;\n}\n/*# sourceMappingURL=attached-resource-config-modal.component.css.map */\n"] }]
  }], () => [], { event: [{
    type: Output
  }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(AttachedResourceConfigModalComponent, { className: "AttachedResourceConfigModalComponent", filePath: "libs/components/src/lib/attached-resource-config-modal.component.ts", lineNumber: 308 });
})();

// libs/assets/src/lib/asset.utilities.ts
var getAssetRulesForZone = zoneRulesetLoader("assets_config");
function assetAvailable(item, rules, event) {
  const current_date = Date.now();
  const event_date = new Date(event.date);
  const isRuleMatch = (rule) => item.name === rule.name || item.category?.name?.includes(rule.name) || event.resources?.some((resource2) => resource2.zones?.includes(rule.name)) || event.space?.zones?.includes(rule.name) || rule.name === "*";
  const countMatches = (rule) => rule.rules.reduce((matches, condition) => {
    switch (condition[0]) {
      case "is_before":
        return matches + (isBefore(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "within_hours":
        return matches + (isAfter(current_date, subHours(event_date, condition[1])) ? 1 : 0);
      case "after_hour":
        return matches + (isAfter(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "before_hour":
        return matches + (isBefore(event_date, setHours(event_date, condition[1])) ? 1 : 0);
      case "min_length":
        return matches + (event.duration >= stringToMinutes(condition[1]) ? 1 : 0);
      case "max_length":
        return matches + (event.duration <= stringToMinutes(condition[1]) ? 1 : 0);
      case "visitor_type":
        return matches + (event.ext("visitor_type") === condition[1] ? 1 : 0);
      default:
        return matches + 1;
    }
  }, 0);
  for (const rule of rules) {
    if (isRuleMatch(rule)) {
      if (countMatches(rule) < rule.rules.length) {
        return false;
      }
    }
  }
  return true;
}

// libs/assets/src/lib/asset-state.service.ts
function assetOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => Object.is(a[key], b[key]));
}
var AssetStateService = class _AssetStateService {
  constructor() {
    this._org = inject(OrganisationService);
    this._settings_service = inject(SettingsService);
    this._injector = inject(Injector);
    this._options = signal(
      { date: Date.now() },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._search = signal(
      "",
      ...ngDevMode ? [{ debugName: "_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category" }] : (
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
    this._rules = signal(
      [],
      ...ngDevMode ? [{ debugName: "_rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_groups = signal(
      [],
      ...ngDevMode ? [{ debugName: "_available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._category_list = signal(
      [],
      ...ngDevMode ? [{ debugName: "_category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._settings = signal(
      {},
      ...ngDevMode ? [{ debugName: "_settings" }] : (
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
    this._category_list_request = null;
    this._available_group_requests = /* @__PURE__ */ new Map();
    this._settings_requests = /* @__PURE__ */ new Map();
    this._options_debounced = debounced(this._options, 300, {
      injector: this._injector,
      equal: assetOptionsMatch
    });
    this._requests_ready = computed(
      () => {
        const building = this._org.active_building();
        const overrides = this._settings_service.overrides();
        return this._network_consumed() && this._assetsEnabled() && this._org.initialised() && !!building?.id && overrides.length >= (this._org.settings?.length || 0) + 2;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.search = this._search.asReadonly();
    this.category = this._category.asReadonly();
    this.options = this._options.asReadonly();
    this.loading = this._loading.asReadonly();
    this.rules = computed(
      () => {
        this._requestNetwork();
        return this._rules();
      },
      ...ngDevMode ? [{ debugName: "rules" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.available_groups = computed(
      () => {
        this._requestNetwork();
        return this._available_groups();
      },
      ...ngDevMode ? [{ debugName: "available_groups" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.category_list = computed(
      () => {
        this._requestNetwork();
        return this._category_list();
      },
      ...ngDevMode ? [{ debugName: "category_list" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.visible_category_ids = computed(
      () => this._category_list().map((item) => item.id),
      ...ngDevMode ? [{ debugName: "visible_category_ids" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_assets = computed(
      () => {
        this._requestNetwork();
        const search = this._search().toLowerCase();
        const category = this._category();
        const visible_categories = this.visible_category_ids();
        const assets = this._available_groups();
        const rules = this._rules();
        const { date, duration, resources } = this._options();
        const event = new CalendarEvent({ date, duration, resources });
        return assets.filter((_) => _.assets?.length && visible_categories.includes(_.category_id) && (!category.length || category.includes(_.category_id)) && (_.name.toLowerCase().includes(search) || _.description.toLowerCase().includes(search)) && assetAvailable(_, rules, event));
      },
      ...ngDevMode ? [{ debugName: "filtered_assets" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.settings = computed(
      () => {
        this._requestNetwork();
        return this._settings();
      },
      ...ngDevMode ? [{ debugName: "settings" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.disabled_rooms = computed(
      () => {
        this._requestNetwork();
        return this._settings().disabled_rooms || [];
      },
      ...ngDevMode ? [{ debugName: "disabled_rooms" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => {
      const options = this._options_debounced.value();
      const bld = this._org.active_building();
      if (!this._requests_ready() || !bld?.id || !options)
        return;
      untracked(() => {
        this._loadRules(options, bld.id);
        this._loadAvailableGroups(options, bld.id);
        this._loadSettings(bld.id);
        this._loadCategories();
      });
    });
    effect(() => {
      const visible_ids = this.visible_category_ids();
      const selected_categories = this._category();
      const valid_categories = selected_categories.filter((item) => visible_ids.includes(item));
      if (valid_categories.length !== selected_categories.length) {
        this._category.set(valid_categories);
      }
    });
  }
  _requestNetwork() {
    if (this._network_requested)
      return;
    this._network_requested = true;
    queueMicrotask(() => this._network_consumed.set(true));
  }
  _assetsEnabled() {
    return this._settings_service.get("app.has_assets") !== false;
  }
  setSearch(value) {
    this._search.set(`${value}`);
  }
  toggleCategory(value) {
    const categories = untracked(this._category);
    if (categories.includes(value)) {
      this._category.set(categories.filter((_) => _ !== value));
    } else {
      this._category.set([...categories, value]);
    }
  }
  getOptions() {
    return this._options();
  }
  setOptions(options) {
    const current = untracked(this._options);
    const next = __spreadValues(__spreadValues({}, current), options);
    if (assetOptionsMatch(current, next)) {
      return;
    }
    this._options.set(next);
  }
  _appendLoading(value) {
    this._loading.set(this._loading() + value);
  }
  _removeLoading(value) {
    this._loading.set(this._loading().split(value).join(""));
  }
  async _loadRules(options, building_id) {
    const zone_id = options.zone || options.zone_id || building_id || "";
    this._appendLoading("[Rules]");
    this._rules.set(await getAssetRulesForZone(zone_id));
    this._removeLoading("[Rules]");
  }
  async _loadAvailableGroups({ zone, zone_id, date, duration, ignore }, building_id) {
    const query = {
      zones: zone || zone_id || building_id || "",
      period_start: getUnixTime(startOfMinute(date)),
      period_end: getUnixTime(endOfMinute(addMinutes(date, duration || 30))),
      type: "asset-request",
      rejected: false
    };
    const key = JSON.stringify({ query, ignore });
    const existing = this._available_group_requests.get(key);
    const request = existing || queryGroupAvailability(query, ignore).catch((e) => {
      console.error(e);
      return [];
    });
    if (!existing)
      this._available_group_requests.set(key, request);
    this._appendLoading("[Availability]");
    const list = await request;
    this._removeLoading("[Availability]");
    request.finally(() => this._available_group_requests.delete(key));
    const sorted_list = list.sort((a, b) => a.name.localeCompare(b.name));
    this._available_groups.set(sorted_list);
  }
  async _loadCategories() {
    if (this._category_list_request)
      return this._category_list_request;
    this._category_list_request = queryAssetCategories().then((categories) => {
      this._category_list.set(categories.data.sort((a, b) => a.name.localeCompare(b.name)).filter((c) => !c.hidden));
      return categories;
    }).finally(() => this._category_list_request = null);
    return this._category_list_request;
  }
  async _loadSettings(building_id) {
    const existing = this._settings_requests.get(building_id);
    const request = existing || _c(building_id, "assets-settings").then((metadata) => metadata.details || {}).catch(() => ({}));
    if (!existing)
      this._settings_requests.set(building_id, request);
    this._settings.set(await request);
    request.finally(() => this._settings_requests.delete(building_id));
  }
  static {
    this.\u0275fac = function AssetStateService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _AssetStateService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AssetStateService, factory: _AssetStateService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AssetStateService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

// libs/payments/src/lib/payment-line-items.ts
var PAYABLE_BOOKING_TYPES = {
  desk: "desk",
  parking: "parking",
  locker: "locker",
  room: "room"
};
function bookingLineItems(booking) {
  const resource_type = PAYABLE_BOOKING_TYPES[booking.type];
  if (!resource_type)
    return [];
  return booking.resources.filter((resource2) => !!resource2?.id).map((resource2) => ({
    resource_type,
    resource_id: resource2.id,
    zone_id: resource2.zone_id,
    name: resource2.name || resource2.id,
    start: Math.floor(booking.date / 1e3),
    duration: booking.duration,
    quantity: 1
  }));
}
function cateringLineItems(orders, zone_id) {
  return orders.flatMap((order) => order.items.filter((item) => item.quantity > 0).map((item) => ({
    resource_type: "catering",
    resource_id: item.id,
    zone_id,
    name: item.name,
    quantity: item.quantity,
    option_ids: item.option_list.map((option) => option.id)
  })));
}

// libs/payments/src/lib/payment-amount.pipe.ts
function currencyDigits(currency) {
  try {
    return new Intl.NumberFormat("en", {
      style: "currency",
      currency
    }).resolvedOptions().maximumFractionDigits ?? 2;
  } catch {
    return 2;
  }
}
function toMajorUnits(amount, currency) {
  return amount / 10 ** currencyDigits(currency);
}
function formatAmount(amount, currency) {
  const code = currency?.toUpperCase() || "USD";
  try {
    return new Intl.NumberFormat(void 0, {
      style: "currency",
      currency: code
    }).format(toMajorUnits(amount || 0, code));
  } catch {
    return `${toMajorUnits(amount || 0, code).toFixed(2)} ${code}`;
  }
}
function unitKey(unit) {
  return `PAYMENTS.UNIT_${(unit || "item").toUpperCase()}`;
}
var PaymentAmountPipe = class _PaymentAmountPipe {
  transform(amount, currency) {
    return formatAmount(amount ?? 0, currency);
  }
  static {
    this.\u0275fac = function PaymentAmountPipe_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentAmountPipe)();
    };
  }
  static {
    this.\u0275pipe = /* @__PURE__ */ \u0275\u0275definePipe({ name: "amount", type: _PaymentAmountPipe, pure: true });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentAmountPipe, [{
    type: Pipe,
    args: [{ name: "amount" }]
  }], null, null);
})();

// libs/payments/src/lib/payment-checkout-modal.component.ts
var _c07 = ["pay_button"];
var _c13 = ["reopen_button"];
var _c2 = ["stop_button"];
var _c3 = (a0) => ({ amount: a0 });
var _forTrack03 = ($index, $item) => $item.id;
function PaymentCheckoutModalComponent_Conditional_4_For_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li", 9)(1, "div", 18)(2, "div", 19);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 20);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(8, "div");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", item_r2.name, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", item_r2.quantity, " \xD7 ", \u0275\u0275pipeBind2(6, 5, item_r2.unit_amount, ctx_r2.data.quote.currency), " ", \u0275\u0275pipeBind1(7, 8, ctx_r2.unit_key(item_r2.unit)), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(10, 10, item_r2.amount, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 21)(1, "dt");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "dd");
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "amount");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(7, "div", 21)(8, "dt");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(11, "dd");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "amount");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "PAYMENTS.SUBTOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(6, 6, ctx_r2.data.quote.subtotal, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 9, "PAYMENTS.TAX"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(13, 11, ctx_r2.data.quote.tax, ctx_r2.data.quote.currency), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-radio-button", 24)(1, "span", 25);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275text(3);
    \u0275\u0275elementStart(4, "span", 20);
    \u0275\u0275text(5);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const method_r5 = ctx.$implicit;
    \u0275\u0275property("value", method_r5.id);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(method_r5.brand || method_r5.type);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" \u2022\u2022\u2022\u2022 ", method_r5.last4, " ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate2(" ", method_r5.exp_month, "/", method_r5.exp_year, " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "fieldset")(1, "legend", 22);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-radio-group", 23);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template_mat_radio_group_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r4);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.method_id, $event) || (ctx_r2.method_id = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275repeaterCreate(5, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_For_6_Template, 6, 5, "mat-radio-button", 24, _forTrack03);
    \u0275\u0275elementStart(7, "mat-radio-button", 24);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 4, "PAYMENTS.PAY_WITH"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.method_id);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(ctx_r2.data.methods);
    \u0275\u0275advance(2);
    \u0275\u0275property("value", ctx_r2.new_method);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(9, 6, "PAYMENTS.NEW_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "mat-checkbox", 26);
    \u0275\u0275twoWayListener("ngModelChange", function PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template_mat_checkbox_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r2 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r2.save_method, $event) || (ctx_r2.save_method = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275twoWayProperty("ngModel", ctx_r2.save_method);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 2, "PAYMENTS.SAVE_METHOD"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 6)(1, "p", 7);
    \u0275\u0275text(2);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "ul", 8);
    \u0275\u0275repeaterCreate(4, PaymentCheckoutModalComponent_Conditional_4_For_5_Template, 11, 13, "li", 9, \u0275\u0275repeaterTrackByIndex);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "dl", 10);
    \u0275\u0275conditionalCreate(7, PaymentCheckoutModalComponent_Conditional_4_Conditional_7_Template, 14, 14);
    \u0275\u0275elementStart(8, "div", 11)(9, "dt");
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "dd", 12);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "amount");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(15, PaymentCheckoutModalComponent_Conditional_4_Conditional_15_Template, 10, 8, "fieldset");
    \u0275\u0275conditionalCreate(16, PaymentCheckoutModalComponent_Conditional_4_Conditional_16_Template, 3, 4, "mat-checkbox", 13);
    \u0275\u0275conditionalCreate(17, PaymentCheckoutModalComponent_Conditional_4_Conditional_17_Template, 2, 1, "p", 14);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "footer", 15)(19, "button", 16);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_19_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.close());
    });
    \u0275\u0275text(20);
    \u0275\u0275pipe(21, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(22, "button", 17, 0);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_4_Template_button_click_22_listener() {
      \u0275\u0275restoreView(_r1);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.pay());
    });
    \u0275\u0275text(24);
    \u0275\u0275pipe(25, "amount");
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.data.description);
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r2.data.quote.items);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.data.quote.tax > 0 ? 7 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 9, "PAYMENTS.TOTAL"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(14, 11, ctx_r2.data.quote.total, ctx_r2.data.quote.currency), " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.data.methods.length ? 15 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.data.can_save_method && ctx_r2.method_id() === ctx_r2.new_method ? 16 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.error() ? 17 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(21, 14, "COMMON.CANCEL"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(26, 19, "PAYMENTS.PAY_AMOUNT", \u0275\u0275pureFunction1(22, _c3, \u0275\u0275pipeBind2(25, 16, ctx_r2.data.quote.total, ctx_r2.data.quote.currency))), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 14);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r2.error(), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5)(1, "icon", 27);
    \u0275\u0275text(2, "tab_close");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "p", 28);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(6, PaymentCheckoutModalComponent_Conditional_5_Conditional_6_Template, 2, 1, "p", 14);
    \u0275\u0275elementStart(7, "button", 29, 1);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_7_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.reopen());
    });
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275elementStart(11, "icon", 30);
    \u0275\u0275text(12, "open_in_new");
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(13, "button", 31);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_5_Template_button_click_13_listener() {
      \u0275\u0275restoreView(_r7);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.cancelPayment());
    });
    \u0275\u0275text(14);
    \u0275\u0275pipe(15, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 10, "PAYMENTS.WINDOW_CLOSED"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.error() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(10, 12, "PAYMENTS.REOPEN_PAYMENT_PAGE"), " ");
    \u0275\u0275advance(4);
    \u0275\u0275classProp("opacity-50", ctx_r2.cancelling());
    \u0275\u0275attribute("aria-disabled", ctx_r2.cancelling());
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(15, 14, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "a", 34);
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementStart(6, "icon", 30);
    \u0275\u0275text(7, "open_in_new");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 3, "PAYMENTS.COMPLETE_IN_WINDOW"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("href", ctx_r2.hosted_url(), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(5, 5, "PAYMENTS.OPEN_PAYMENT_PAGE"), " ");
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 28);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "PAYMENTS.PROCESSING"));
  }
}
function PaymentCheckoutModalComponent_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r8 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "main", 5);
    \u0275\u0275element(1, "mat-spinner", 32);
    \u0275\u0275conditionalCreate(2, PaymentCheckoutModalComponent_Conditional_6_Conditional_2_Template, 8, 7)(3, PaymentCheckoutModalComponent_Conditional_6_Conditional_3_Template, 3, 3, "p", 28);
    \u0275\u0275elementStart(4, "button", 33, 2);
    \u0275\u0275listener("click", function PaymentCheckoutModalComponent_Conditional_6_Template_button_click_4_listener() {
      \u0275\u0275restoreView(_r8);
      const ctx_r2 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r2.stop());
    });
    \u0275\u0275text(6);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.hosted_url() ? 2 : 3);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(7, 2, "PAYMENTS.CANCEL_PAYMENT"), " ");
  }
}
var CheckoutCancelledError = class extends Error {
  constructor() {
    super("Payment cancelled");
  }
};
var PaymentWindowClosedError = class extends Error {
  constructor(payment_id, reason = "") {
    super("Payment window closed");
    this.payment_id = payment_id;
    this.reason = reason;
  }
};
var PaymentEndedError = class extends Error {
  constructor(message = "") {
    super(message || i18n("PAYMENTS.PAYMENT_FAILED"));
  }
};
var NEW_METHOD = "";
var PaymentCheckoutModalComponent = class _PaymentCheckoutModalComponent {
  constructor() {
    this._ref = inject(MatDialogRef);
    this._open_payment_id = "";
    this.data = inject(MAT_DIALOG_DATA);
    this.new_method = NEW_METHOD;
    this.unit_key = unitKey;
    this.method_id = signal(
      this.data.methods.find((_) => _.is_default)?.id ?? this.data.methods[0]?.id ?? NEW_METHOD,
      ...ngDevMode ? [{ debugName: "method_id" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.save_method = signal(
      false,
      ...ngDevMode ? [{ debugName: "save_method" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.view = signal(
      "review",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.hosted_url = signal(
      "",
      ...ngDevMode ? [{ debugName: "hosted_url" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.error = signal(
      "",
      ...ngDevMode ? [{ debugName: "error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.cancelling = signal(
      false,
      ...ngDevMode ? [{ debugName: "cancelling" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pay_button = viewChild(
      "pay_button",
      ...ngDevMode ? [{ debugName: "_pay_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._reopen_button = viewChild(
      "reopen_button",
      ...ngDevMode ? [{ debugName: "_reopen_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._stop_button = viewChild(
      "stop_button",
      ...ngDevMode ? [{ debugName: "_stop_button" }] : (
        /* istanbul ignore next */
        []
      )
    );
    effect(() => this._pay_button()?.nativeElement.focus());
    effect(() => this._reopen_button()?.nativeElement.focus());
    effect(() => this._stop_button()?.nativeElement.focus());
  }
  async pay() {
    const method_id = this.method_id() || void 0;
    const window_ref = method_id ? null : openPaymentWindow();
    if (!method_id && !window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.pay(__spreadProps(__spreadValues({}, options), {
      method_id,
      save_method: !method_id && this.save_method()
    })));
  }
  /** Open the hosted page again with a new link from the driver */
  async reopen() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    const window_ref = openPaymentWindow();
    if (!window_ref)
      return this._popupBlocked();
    await this._run(window_ref, (options) => this.data.resume(id, options));
  }
  /**
   * Cancel the open payment and go back to the review. Stays on the open
   * payment when the cancel fails, so the user cannot pay twice.
   */
  async cancelPayment() {
    const id = this._open_payment_id;
    if (!id || this.cancelling())
      return;
    this.cancelling.set(true);
    this.error.set("");
    try {
      await this.data.cancel(id);
      this._open_payment_id = "";
      this.view.set("review");
    } catch (e) {
      this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
    } finally {
      this.cancelling.set(false);
    }
  }
  /** Stop waiting for the hosted page. The service cancels the payment */
  stop() {
    this._abort?.abort();
  }
  close() {
    this._ref.close();
  }
  ngOnDestroy() {
    if (this.view() === "processing")
      return this._abort?.abort();
    if (this._open_payment_id && !this.cancelling()) {
      this.data.cancel(this._open_payment_id).catch(() => null);
    }
  }
  /** Wait for a payment, then close with it or show what went wrong */
  async _run(window_ref, action) {
    this._abort = new AbortController();
    this.error.set("");
    this.hosted_url.set("");
    this.view.set("processing");
    try {
      const payment = await action({
        window: window_ref,
        signal: this._abort.signal,
        on_url: (url) => this.hosted_url.set(url)
      });
      this._open_payment_id = "";
      this._ref.close(payment);
    } catch (e) {
      window_ref?.close();
      if (e instanceof PaymentWindowClosedError) {
        this._open_payment_id = e.payment_id;
        this.view.set("closed");
        this.error.set(e.reason);
        return;
      }
      if (this._open_payment_id && !(e instanceof CheckoutCancelledError) && !(e instanceof PaymentEndedError)) {
        this.view.set("closed");
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
        return;
      }
      this._open_payment_id = "";
      this.view.set("review");
      if (!(e instanceof CheckoutCancelledError)) {
        this.error.set(errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
      }
    }
  }
  _popupBlocked() {
    this.error.set(i18n("PAYMENTS.POPUP_BLOCKED"));
  }
  static {
    this.\u0275fac = function PaymentCheckoutModalComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentCheckoutModalComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PaymentCheckoutModalComponent, selectors: [["payment-checkout-modal"]], viewQuery: function PaymentCheckoutModalComponent_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuerySignal(ctx._pay_button, _c07, 5)(ctx._reopen_button, _c13, 5)(ctx._stop_button, _c2, 5);
      }
      if (rf & 2) {
        \u0275\u0275queryAdvance(3);
      }
    }, decls: 7, vars: 4, consts: [["pay_button", ""], ["reopen_button", ""], ["stop_button", ""], [1, "bg-base-200", "sticky", "top-0", "z-10", "m-2", "flex", "h-14", "w-[calc(100%-1rem)]", "min-w-[20rem]", "items-center", "rounded-sm", "p-2"], ["mat-dialog-title", "", 1, "px-2", "text-xl", "font-medium"], [1, "flex", "w-md", "max-w-[85vw]", "flex-col", "items-center", "space-y-4", "p-8", "text-center"], [1, "w-md", "max-w-[85vw]", "space-y-4", "p-4"], [1, "text-sm", "opacity-70"], [1, "divide-base-200", "divide-y", "text-sm"], [1, "flex", "items-center", "gap-2", "py-2"], [1, "border-base-200", "space-y-1", "border-t", "pt-2", "text-sm"], [1, "flex", "justify-between", "text-base", "font-medium"], ["total", ""], [3, "ngModel"], ["announce", "", 1, "bg-error/10", "text-error", "rounded-sm", "p-2", "text-sm"], [1, "bg-base-200", "sticky", "bottom-0", "m-2", "flex", "items-center", "gap-2", "rounded-sm", "p-2"], ["btn", "", "matRipple", "", 1, "inverse", "bg-base-100", "flex-1", 3, "click"], ["btn", "", "matRipple", "", "name", "pay", 1, "flex-1", 3, "click"], [1, "min-w-0", "flex-1"], [1, "truncate", "font-medium"], [1, "text-xs", "opacity-70"], [1, "flex", "justify-between"], [1, "mb-1", "text-sm", "font-medium"], [1, "flex", "flex-col", 3, "ngModelChange", "ngModel"], [3, "value"], [1, "capitalize"], [3, "ngModelChange", "ngModel"], [1, "text-5xl", "opacity-60"], ["announce", ""], ["btn", "", "matRipple", "", "name", "reopen", 3, "click"], [1, "ml-2", "text-xl"], ["btn", "", "matRipple", "", "name", "cancel-payment", 1, "clear", 3, "click"], ["diameter", "32", "aria-hidden", "true"], ["btn", "", "matRipple", "", 1, "clear", 3, "click"], ["btn", "", "matRipple", "", "target", "_blank", "rel", "noopener", 1, "inverse", 3, "href"]], template: function PaymentCheckoutModalComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "header", 3)(1, "h2", 4);
        \u0275\u0275text(2);
        \u0275\u0275pipe(3, "translate");
        \u0275\u0275elementEnd()();
        \u0275\u0275conditionalCreate(4, PaymentCheckoutModalComponent_Conditional_4_Template, 27, 24)(5, PaymentCheckoutModalComponent_Conditional_5_Template, 16, 16, "main", 5)(6, PaymentCheckoutModalComponent_Conditional_6_Template, 8, 4, "main", 5);
      }
      if (rf & 2) {
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 2, "PAYMENTS.CHECKOUT_TITLE"), " ");
        \u0275\u0275advance(2);
        \u0275\u0275conditional(ctx.view() === "review" ? 4 : ctx.view() === "closed" ? 5 : 6);
      }
    }, dependencies: [
      AnnounceDirective,
      FormsModule,
      NgControlStatus,
      NgModel,
      IconComponent,
      MatCheckboxModule,
      MatCheckbox,
      MatDialogModule,
      MatDialogTitle,
      MatProgressSpinnerModule,
      MatProgressSpinner,
      MatRadioModule,
      MatRadioGroup,
      MatRadioButton,
      MatRippleModule,
      MatRipple,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["\nh2[mat-dialog-title][_ngcontent-%COMP%] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title][_ngcontent-%COMP%]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentCheckoutModalComponent, [{
    type: Component,
    args: [{ selector: "payment-checkout-modal", template: `
        <header
            class="bg-base-200 sticky top-0 z-10 m-2 flex h-14 w-[calc(100%-1rem)] min-w-[20rem] items-center rounded-sm p-2"
        >
            <h2 mat-dialog-title class="px-2 text-xl font-medium">
                {{ 'PAYMENTS.CHECKOUT_TITLE' | translate }}
            </h2>
        </header>
        @if (view() === 'review') {
            <main class="w-md max-w-[85vw] space-y-4 p-4">
                <p class="text-sm opacity-70">{{ data.description }}</p>
                <ul class="divide-base-200 divide-y text-sm">
                    @for (item of data.quote.items; track $index) {
                        <li class="flex items-center gap-2 py-2">
                            <div class="min-w-0 flex-1">
                                <div class="truncate font-medium">
                                    {{ item.name }}
                                </div>
                                <div class="text-xs opacity-70">
                                    {{ item.quantity }} \xD7
                                    {{
                                        item.unit_amount
                                            | amount: data.quote.currency
                                    }}
                                    {{ unit_key(item.unit) | translate }}
                                </div>
                            </div>
                            <div>
                                {{ item.amount | amount: data.quote.currency }}
                            </div>
                        </li>
                    }
                </ul>
                <dl class="border-base-200 space-y-1 border-t pt-2 text-sm">
                    @if (data.quote.tax > 0) {
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.SUBTOTAL' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.subtotal
                                        | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                        <div class="flex justify-between">
                            <dt>{{ 'PAYMENTS.TAX' | translate }}</dt>
                            <dd>
                                {{
                                    data.quote.tax | amount: data.quote.currency
                                }}
                            </dd>
                        </div>
                    }
                    <div class="flex justify-between text-base font-medium">
                        <dt>{{ 'PAYMENTS.TOTAL' | translate }}</dt>
                        <dd total>
                            {{ data.quote.total | amount: data.quote.currency }}
                        </dd>
                    </div>
                </dl>
                @if (data.methods.length) {
                    <fieldset>
                        <legend class="mb-1 text-sm font-medium">
                            {{ 'PAYMENTS.PAY_WITH' | translate }}
                        </legend>
                        <mat-radio-group
                            class="flex flex-col"
                            [(ngModel)]="method_id"
                        >
                            @for (method of data.methods; track method.id) {
                                <mat-radio-button [value]="method.id">
                                    <span class="capitalize">{{
                                        method.brand || method.type
                                    }}</span>
                                    \u2022\u2022\u2022\u2022 {{ method.last4 }}
                                    <span class="text-xs opacity-70">
                                        {{ method.exp_month }}/{{
                                            method.exp_year
                                        }}
                                    </span>
                                </mat-radio-button>
                            }
                            <mat-radio-button [value]="new_method">
                                {{ 'PAYMENTS.NEW_METHOD' | translate }}
                            </mat-radio-button>
                        </mat-radio-group>
                    </fieldset>
                }
                @if (data.can_save_method && method_id() === new_method) {
                    <mat-checkbox [(ngModel)]="save_method">
                        {{ 'PAYMENTS.SAVE_METHOD' | translate }}
                    </mat-checkbox>
                }
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
            </main>
            <footer
                class="bg-base-200 sticky bottom-0 m-2 flex items-center gap-2 rounded-sm p-2"
            >
                <button
                    btn
                    matRipple
                    class="inverse bg-base-100 flex-1"
                    (click)="close()"
                >
                    {{ 'COMMON.CANCEL' | translate }}
                </button>
                <button
                    #pay_button
                    btn
                    matRipple
                    name="pay"
                    class="flex-1"
                    (click)="pay()"
                >
                    {{
                        'PAYMENTS.PAY_AMOUNT'
                            | translate
                                : {
                                      amount:
                                          data.quote.total
                                          | amount: data.quote.currency,
                                  }
                    }}
                </button>
            </footer>
        } @else if (view() === 'closed') {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <icon class="text-5xl opacity-60">tab_close</icon>
                <p announce>{{ 'PAYMENTS.WINDOW_CLOSED' | translate }}</p>
                @if (error()) {
                    <p
                        announce
                        class="bg-error/10 text-error rounded-sm p-2 text-sm"
                    >
                        {{ error() }}
                    </p>
                }
                <button
                    #reopen_button
                    btn
                    matRipple
                    name="reopen"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="reopen()"
                >
                    {{ 'PAYMENTS.REOPEN_PAYMENT_PAGE' | translate }}
                    <icon class="ml-2 text-xl">open_in_new</icon>
                </button>
                <button
                    btn
                    matRipple
                    name="cancel-payment"
                    class="clear"
                    [class.opacity-50]="cancelling()"
                    [attr.aria-disabled]="cancelling()"
                    (click)="cancelPayment()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        } @else {
            <main
                class="flex w-md max-w-[85vw] flex-col items-center space-y-4 p-8 text-center"
            >
                <mat-spinner diameter="32" aria-hidden="true"></mat-spinner>
                @if (hosted_url()) {
                    <p announce>
                        {{ 'PAYMENTS.COMPLETE_IN_WINDOW' | translate }}
                    </p>
                    <a
                        btn
                        matRipple
                        class="inverse"
                        target="_blank"
                        rel="noopener"
                        [href]="hosted_url()"
                    >
                        {{ 'PAYMENTS.OPEN_PAYMENT_PAGE' | translate }}
                        <icon class="ml-2 text-xl">open_in_new</icon>
                    </a>
                } @else {
                    <p announce>{{ 'PAYMENTS.PROCESSING' | translate }}</p>
                }
                <button
                    #stop_button
                    btn
                    matRipple
                    class="clear"
                    (click)="stop()"
                >
                    {{ 'PAYMENTS.CANCEL_PAYMENT' | translate }}
                </button>
            </main>
        }
    `, imports: [
      AnnounceDirective,
      FormsModule,
      IconComponent,
      MatCheckboxModule,
      MatDialogModule,
      MatProgressSpinnerModule,
      MatRadioModule,
      MatRippleModule,
      PaymentAmountPipe,
      TranslatePipe
    ], styles: ["/* angular:styles/component:css;667dd6e87a0f8ee70b196ba72e30636efb97b1c4a6897353c2c25bfa7854dc6c;/home/runner/work/user-interfaces/user-interfaces/libs/payments/src/lib/payment-checkout-modal.component.ts */\nh2[mat-dialog-title] {\n  color: inherit;\n  font-family: inherit;\n  letter-spacing: inherit;\n  margin: 0;\n  padding: 0;\n}\nh2[mat-dialog-title]::before {\n  display: none;\n}\n/*# sourceMappingURL=payment-checkout-modal.component.css.map */\n"] }]
  }], () => [], { _pay_button: [{ type: ViewChild, args: ["pay_button", { isSignal: true }] }], _reopen_button: [{ type: ViewChild, args: ["reopen_button", { isSignal: true }] }], _stop_button: [{ type: ViewChild, args: ["stop_button", { isSignal: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PaymentCheckoutModalComponent, { className: "PaymentCheckoutModalComponent", filePath: "libs/payments/src/lib/payment-checkout-modal.component.ts", lineNumber: 310 });
})();
function openPaymentWindow() {
  const window_ref = window.open("", "placeos-payment", "popup,width=520,height=760");
  if (window_ref)
    window_ref.opener = null;
  return window_ref;
}

// libs/payments/src/lib/payment.types.ts
var FINAL_PAYMENT_STATES = [
  "succeeded",
  "partially_refunded",
  "refunded",
  "cancelled",
  "failed"
];

// libs/payments/src/lib/payments.service.ts
var PAYMENT_BINDING = "payments";
var PAYMENT_MODULE = "Payments";
var PAYMENT_CHECKOUT = new InjectionToken("PAYMENT_CHECKOUT", { factory: () => false });
var LOCAL_HOSTS = /* @__PURE__ */ new Set(["localhost", "127.0.0.1", "[::1]"]);
function isPaymentContext({ isSecureContext, location: location2 } = window) {
  return isSecureContext || LOCAL_HOSTS.has(location2.hostname);
}
var POLL_INTERVAL_MS = 2e3;
var MAX_POLLS = 450;
var MAX_FAILED_CHECKS = 3;
var PaymentsService = class _PaymentsService {
  constructor() {
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._checkout = inject(PAYMENT_CHECKOUT);
    this._secure = isPaymentContext();
    this.is_enabled = computed(
      () => {
        this._org.active_building();
        return this._org.initialised() && this.enabled;
      },
      ...ngDevMode ? [{ debugName: "is_enabled" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._config = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_config" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this.is_enabled() ? { building: this._org.active_building()?.id } : void 0,
      loader: () => this.call("get_config")
    }));
    this.config = computed(
      () => this._config.hasValue() ? this._config.value() : null,
      ...ngDevMode ? [{ debugName: "config" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.config_error = computed(
      () => {
        const error = this._config.error();
        return error ? errorMessage(error) || `${error}` : "";
      },
      ...ngDevMode ? [{ debugName: "config_error" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.privileged = computed(
      () => !!this.config()?.privileged,
      ...ngDevMode ? [{ debugName: "privileged" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.currency = computed(
      () => this.config()?.currency || this._org.currency_code,
      ...ngDevMode ? [{ debugName: "currency" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  /**
   * Whether the active building or the organisation has a payment driver,
   * and the page is in a secure context or on a local host
   */
  get enabled() {
    return !!this._module;
  }
  /** Whether new bookings and events in this app take a payment */
  get can_checkout() {
    return this._checkout && this.enabled;
  }
  /** Payment driver module. `null` without a driver or a secure context */
  get _module() {
    if (!this._secure)
      return null;
    return this._org.module?.(PAYMENT_BINDING, PAYMENT_MODULE) ?? null;
  }
  /** Whether the driver supports the optional feature */
  hasCapability(capability) {
    return !!this.config()?.capabilities?.includes(capability);
  }
  /** Call a method of the payment driver with type checked arguments */
  async call(method, ...args) {
    const mod = this._module;
    if (!mod)
      throw i18n("PAYMENTS.NOT_ENABLED");
    return mod.execute(method, args).catch((e) => {
      const msg = e?.msg;
      throw typeof msg === "string" && msg ? msg : e;
    });
  }
  /**
   * Show the price of the items and ask the user to pay. Resolves when the
   * payment is authorized, the user cancels or the items are free.
   * Rejects when the driver fails.
   */
  async checkout(details) {
    if (!details.items.length)
      return { status: "free" };
    const quote = await this.call("quote", details.items);
    if (quote.total <= 0)
      return { status: "free" };
    const methods = this.hasCapability("saved_methods") ? await this.call("list_payment_methods").catch(() => []) : [];
    const data = {
      quote,
      description: details.description,
      methods,
      can_save_method: this.hasCapability("saved_methods"),
      pay: (options) => this._pay(details, quote, options),
      resume: (id, options) => this._resume(id, options),
      cancel: (id) => this.call("cancel_payment", id)
    };
    const ref = this._dialog.open(PaymentCheckoutModalComponent, { data, disableClose: true });
    const payment = await new Promise((resolve) => ref.afterClosed().subscribe((result) => resolve(result)));
    return payment ? { status: "paid", payment } : { status: "cancelled" };
  }
  /** Take an authorized payment and link it to the saved booking or event */
  capture(payment, reference) {
    return this.call("capture_payment", payment.id, reference);
  }
  /** Release or refund a payment, e.g. when the booking fails to save */
  cancel(payment) {
    return this.call("cancel_payment", payment.id);
  }
  /**
   * Open the hosted page to add a payment method. Resolves when the user
   * closes the page. Throws when the browser blocks the window.
   */
  async addPaymentMethod(window_ref = this.openWindow()) {
    if (!window_ref)
      throw i18n("PAYMENTS.POPUP_BLOCKED");
    const session = await this.call("create_setup_session", completeUrl("setup")).catch((e) => {
      window_ref.close();
      throw e;
    });
    window_ref.location.href = session.url;
    await waitForClose(window_ref);
  }
  /**
   * Open an empty window for a hosted page. Call it in a click handler, so
   * the browser does not block it. `null` when the browser blocks it.
   */
  openWindow() {
    return openPaymentWindow();
  }
  /**
   * Complete an open payment of the user on a new link to the hosted page,
   * then take it for its reference. Only use it for a payment with a
   * `reference`, so that the user does not pay for nothing. Resolves with
   * the latest payment, also when the user closes the page first. Throws
   * when the browser blocks the window, as the user cannot see the page.
   */
  async completePayment(payment, window_ref = this.openWindow()) {
    const reference = payment.reference;
    if (!reference)
      throw i18n("PAYMENTS.NO_REFERENCE");
    if (!window_ref)
      throw i18n("PAYMENTS.POPUP_BLOCKED");
    const result = await this._resume(payment.id, {
      window: window_ref,
      cancel: false
    }).catch((e) => {
      if (e instanceof PaymentWindowClosedError || e instanceof PaymentEndedError) {
        return this.call("get_payment", payment.id);
      }
      throw e;
    });
    return result.status === "authorized" ? this.capture(result, reference) : result;
  }
  /**
   * Wait for a payment to reach a final or authorized state. Throws
   * `PaymentWindowClosedError` when the user closes the hosted page first,
   * and leaves the payment open. Throws `CheckoutCancelledError` and
   * cancels the payment when the signal aborts or the wait times out.
   * When that cancel fails, throws `PaymentWindowClosedError` with the
   * error, so the user can reopen or cancel the payment again.
   */
  async waitForPayment(id, { window: window_ref, signal: signal2, cancel = true } = {}) {
    const stop = () => this._release(id, cancel);
    let closed_checks = 0;
    let failed_checks = 0;
    for (let i = 0; i < MAX_POLLS; i++) {
      if (signal2?.aborted)
        break;
      const payment = await this.call("get_payment", id).catch(async (e) => {
        if (++failed_checks < MAX_FAILED_CHECKS)
          return null;
        await stop();
        if (cancel)
          throw new PaymentEndedError(errorMessage(e));
        throw e;
      });
      if (signal2?.aborted)
        break;
      if (payment)
        failed_checks = 0;
      if (payment && isComplete(payment))
        return payment;
      if (window_ref?.closed && ++closed_checks > 2) {
        throw new PaymentWindowClosedError(id);
      }
      await delay2(POLL_INTERVAL_MS, signal2);
    }
    await stop();
    throw new CheckoutCancelledError();
  }
  async _pay(details, quote, options) {
    const session = await this.call("create_checkout", {
      items: details.items,
      expected_total: quote.total,
      description: details.description,
      payment_method_id: options.method_id,
      save_method: options.save_method,
      return_url: completeUrl("success"),
      cancel_url: completeUrl("cancel")
    }).catch((e) => {
      options.window?.close();
      throw e;
    });
    return this._waitOnHostedPage(session.payment_id, session.url, options);
  }
  /**
   * Get a new link to the hosted page of an open payment and wait for it.
   * The provider can complete the payment after the user closes the page,
   * so a payment that is already complete resolves with no new link.
   */
  async _resume(id, options) {
    const close = (e) => {
      options.window?.close();
      throw e;
    };
    const settle = (request) => request.catch((e) => options.signal?.aborted ? null : close(e));
    const stopped = async () => {
      options.window?.close();
      await this._release(id, options.cancel !== false);
      throw new CheckoutCancelledError();
    };
    const current = await settle(this.call("get_payment", id));
    if (options.signal?.aborted || !current)
      return stopped();
    if (isComplete(current)) {
      options.window?.close();
      return paidOrThrow(current);
    }
    const session = await settle(this.call("get_payment_link", id, completeUrl("success")));
    if (options.signal?.aborted || !session)
      return stopped();
    return this._waitOnHostedPage(id, session.url, options);
  }
  /** Show the hosted page when there is one, then wait for the payment */
  async _waitOnHostedPage(id, url, options) {
    if (url) {
      if (options.window)
        options.window.location.href = url;
      options.on_url?.(url);
    } else
      options.window?.close();
    const payment = await this.waitForPayment(id, {
      window: options.window,
      signal: options.signal,
      cancel: options.cancel
    });
    return paidOrThrow(payment);
  }
  /**
   * Cancel a payment that the app stops waiting for. When the cancel
   * fails, throws `PaymentWindowClosedError`, as the payment is still open.
   */
  async _release(id, cancel) {
    if (!cancel)
      return;
    await this.call("cancel_payment", id).catch((e) => {
      throw new PaymentWindowClosedError(id, errorMessage(e) || i18n("PAYMENTS.PAYMENT_FAILED"));
    });
  }
  static {
    this.\u0275fac = function PaymentsService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PaymentsService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PaymentsService, factory: _PaymentsService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PaymentsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
function paidOrThrow(payment) {
  if (payment.status === "authorized" || payment.status === "succeeded") {
    return payment;
  }
  if (payment.status === "partially_refunded") {
    throw new PaymentWindowClosedError(payment.id, i18n("PAYMENTS.PAYMENT_FAILED"));
  }
  throw new PaymentEndedError();
}
function isComplete(payment) {
  return payment.status === "authorized" || FINAL_PAYMENT_STATES.includes(payment.status);
}
function completeUrl(state) {
  const url = new URL("assets/payment-complete.html", document.baseURI);
  url.searchParams.set("state", state);
  return url.href;
}
function delay2(ms, signal2) {
  return new Promise((resolve) => {
    const timer = setTimeout(resolve, ms);
    signal2?.addEventListener("abort", () => {
      clearTimeout(timer);
      resolve();
    });
  });
}
async function waitForClose(window_ref) {
  if (!window_ref)
    return;
  for (let i = 0; i < 1800 && !window_ref.closed; i++) {
    await delay2(1e3);
  }
}

// libs/bookings/src/lib/booking-form.service.ts
var BOOKING_TYPES = ["desk", "parking", "locker", "catering"];
var STORAGE_KEYS = {
  booking_form: "PLACEOS.booking_form",
  booking_form_options: "PLACEOS.booking_form_options",
  booking_form_filters: "PLACEOS.booking_form_filters",
  last_booked_booking: "PLACEOS.last_booked_booking",
  last_booked_count: "PLACEOS.last_booked_count",
  last_group_booking_ids: "PLACEOS.last_group_booking_ids",
  last_group_booking_errors: "PLACEOS.last_group_booking_errors"
};
function resourceSettled(ref) {
  const status = ref.status();
  return status === "resolved" || status === "local" || status === "error";
}
function bookingOptionsMatch(a, b) {
  const keys = Array.from(/* @__PURE__ */ new Set([
    ...Object.keys(a),
    ...Object.keys(b)
  ]));
  return keys.every((key) => a[key] === b[key]);
}
var AVAILABILITY_SELECTION_FIELDS = /* @__PURE__ */ new Set([
  "resources",
  "booking_asset",
  "asset_id",
  "asset_name",
  "map_id",
  "name",
  "description",
  "zones"
]);
function availabilityFormMatch(a, b) {
  if (!a || !b)
    return a === b;
  const keys = /* @__PURE__ */ new Set([...Object.keys(a), ...Object.keys(b)]);
  return [...keys].every((key) => AVAILABILITY_SELECTION_FIELDS.has(key) || Object.is(a[key], b[key]));
}
function assetDateValue(date) {
  const date_value = date instanceof Date ? date.valueOf() : Number(date);
  return Number.isFinite(date_value) ? date_value : null;
}
function assetDurationValue(duration) {
  const duration_value = Number(duration);
  return Number.isFinite(duration_value) ? duration_value : null;
}
function assetWindowKey(date, duration) {
  const date_value = assetDateValue(date);
  const duration_value = assetDurationValue(duration);
  return date_value && duration_value ? `${date_value}:${duration_value}` : "";
}
var DESK_ONLY_FIELDS = [
  "secondary_resource",
  "recurrence_type",
  "recurrence_days",
  "recurrence_nth_of_month",
  "recurrence_interval",
  "recurrence_end",
  "recurrence_instances",
  "recurrence_custom"
];
function knownBookingType(type) {
  return type && type !== " " ? type : void 0;
}
function isCrossTypeEdit(booking, type) {
  const booking_type = knownBookingType(booking?.booking_type);
  return !!booking?.id && !!booking_type && booking_type !== type;
}
var BookingFormService = class _BookingFormService extends AsyncHandler {
  get last_count() {
    return parseInt(sessionStorage.getItem(STORAGE_KEYS.last_booked_count) || "1", 10);
  }
  set last_count(value) {
    sessionStorage.setItem(STORAGE_KEYS.last_booked_count, String(value));
  }
  /** Apply a partial patch to the booking form model. */
  _patch(value, _opts) {
    this.model.update((m) => __spreadValues(__spreadValues({}, m), value));
  }
  /**
   * The fields the user has actually edited, with their current values.
   *
   * Reads the signal-forms dirty flags rather than diffing against a
   * default. Programmatic writes (`_patch`, `model.set`) do not mark a field
   * dirty, so this returns user input — which is what makes it safe to
   * replay over a freshly loaded booking. One exception: the recurrence
   * field adjusts a recurrence when the date changes, and that write goes
   * through `setUserValues`.
   */
  _userEditedValues() {
    const form2 = this.form;
    if (!form2)
      return {};
    const model2 = untracked(this.model);
    const edits = {};
    for (const key of Object.keys(model2 || {})) {
      const field = form2[key];
      if (typeof field !== "function")
        continue;
      try {
        if (field()?.dirty?.())
          edits[key] = model2[key];
      } catch {
        continue;
      }
    }
    return edits;
  }
  /**
   * Stash the user's in-progress edits for the reset that is about to run.
   *
   * Merges rather than replaces. A flow resets twice in a row — `loadForm`
   * then `newForm` — and the first `form().reset()` clears the dirty flags
   * `_userEditedValues` reads, so a plain assignment would overwrite a real
   * capture with an empty one on the second call.
   */
  _captureUserEdits() {
    const pending = this._pending_user_edits;
    const values = __spreadValues(__spreadValues({}, pending?.values), this._userEditedValues());
    const { group, members } = this._options();
    const options = pending?.options ?? (group || members?.length ? { group, members } : {});
    const has_edits = Object.keys(values).length || Object.keys(options).length;
    this._pending_user_edits = has_edits ? { values, options } : null;
  }
  /**
   * The stashed edits that apply to a reset for the given booking type.
   *
   * A change from one booking flow to a different one does not reset the
   * form, so the stash can hold edits from the form of a different booking
   * type. A locker request, a recurrence, and a group selection apply only
   * to a desk form, because no other form shows them. All other edits
   * apply to each form.
   */
  _userEditsFor(type) {
    const edits = this._pending_user_edits;
    if (!edits || type === "desk")
      return edits;
    const values = __spreadValues({}, edits.values);
    for (const key of DESK_ONLY_FIELDS)
      delete values[key];
    return { values, options: {} };
  }
  /**
   * Re-apply the user's edits over the booking that a reset loaded.
   *
   * A replayed start time or duration moves the end time with it. If the
   * end time stays at the value of the loaded booking, the time sync
   * calculates the duration from it and discards the user's value.
   */
  _replayUserEdits(edits) {
    if (!edits)
      return;
    this._patch(edits.values);
    const { date, duration, all_day } = this.model();
    const window_changed = "date" in edits.values || "duration" in edits.values;
    if (all_day || !window_changed)
      return;
    this._patch({ date_end: addMinutes(date, duration).valueOf() });
  }
  /**
   * Apply a change the user made in a control that has no `[formField]`
   * binding.
   *
   * Marks each changed field dirty, as `[formField]` does, so
   * `_userEditedValues` keeps the change across a form reset.
   */
  setUserValues(value) {
    this._patch(value);
    for (const key of Object.keys(value)) {
      this.form[key]?.().markAsDirty();
    }
  }
  _syncAssetOptions() {
    const { date, duration } = untracked(this.model);
    const next_asset_window = assetWindowKey(date, duration);
    if (!next_asset_window || this._asset_window === next_asset_window) {
      return;
    }
    const date_value = assetDateValue(date);
    const duration_value = assetDurationValue(duration);
    if (!date_value || !duration_value)
      return;
    this._asset_window = next_asset_window;
    this._assets.setOptions({
      date: date_value,
      duration: duration_value
    });
  }
  _startNetwork() {
    this._network_requested = true;
    this._network_consumed.set(true);
  }
  /**
   * Stop the resource, rule and availability loads when the user leaves
   * the booking flows. Opening or loading a form starts them again. Calls
   * that wait for the loads keep them active until they resolve.
   */
  releaseNetwork() {
    this._network_consumed.set(false);
  }
  /** Keep the loads active while `work` runs */
  async _holdNetwork(work) {
    this._network_holds.update((count) => count + 1);
    try {
      return await work();
    } finally {
      this._network_holds.update((count) => count - 1);
    }
  }
  /** Load the resource list again after a failure */
  reloadResources() {
    this._resources_resource.reload();
  }
  get booking() {
    return this._booking();
  }
  /** Resolve with the resources for the current booking type once loaded */
  async listResources() {
    this._startNetwork();
    return this._holdNetwork(async () => {
      await firstValueWhere(computed(() => this._resourcesReady()), (ready) => ready, this._injector);
      return this.resources();
    });
  }
  /** Resolve with the available resources for the current selection */
  async listAvailableResources() {
    this._startNetwork();
    return this._holdNetwork(async () => {
      await firstValueWhere(computed(() => this._resourcesReady() && this._booking_rules_params_debounced.value() === this._booking_rules_params() && // Rules stay idle when there are no buildings to load.
      (!this._booking_rules_params() || resourceSettled(this._booking_rules_resource))), (ready) => ready, this._injector);
      return this._computeAvailableResources(this._options(), this.resources(), this.booking_rules(), this.model());
    });
  }
  /**
   * Whether the resource list matches the current building and type.
   *
   * Callers check this with the other conditions in one pass. An org reload
   * can make the requests unready after an earlier check passes, and that
   * resets the resources to an idle, empty state.
   */
  _resourcesReady() {
    return this._requests_ready() && this._resource_params_debounced.value() === this._resource_params() && resourceSettled(this._resources_resource);
  }
  /** Resolve once the given resource has finished loading */
  _whenSettled(ref) {
    return firstValueWhere(ref.isLoading, (loading) => !loading, this._injector);
  }
  /** Load the resource list for the given booking type */
  _loadResourcesForType(type) {
    switch (type) {
      case "desk":
        this._loading.set(i18n("BOOKINGS.DESKS_LOADING"));
        return this._finishResourceLoad(this.loadResourceList("desks"));
      case "parking":
        this._loading.set(i18n("BOOKINGS.PARKING_LOADING"));
        return this._finishResourceLoad(this.loadParkingResources());
      case "locker":
        this._loading.set(i18n("BOOKINGS.LOCKERS_LOADING"));
        return this._finishResourceLoad(this._loadLockerResources());
    }
    return Promise.resolve([]);
  }
  _finishResourceLoad(load) {
    return load.then((list) => {
      this._resources_failed.set(false);
      return list;
    }).catch(() => {
      this._resources_failed.set(true);
      return [];
    }).then((list) => {
      this._loading.set("");
      return list;
    });
  }
  _computeHasAssignedDesk(user_email = currentUser()?.email) {
    return hasAssignedDesk(this._org, user_email, this._settings.get("app.desks.use_assets"));
  }
  /**
   * Whether the given user has a resource of `type` reserved (assigned) to
   * them. Only desk/parking/locker support assignment; any other type resolves
   * to `false` so it is never blocked by the reserved-resource restriction.
   */
  async _computeHasAssignedResource(type, user_email = currentUser()?.email) {
    if (type === "desk")
      return this._computeHasAssignedDesk(user_email);
    const email2 = user_email?.toLowerCase();
    if (!email2)
      return false;
    const resources = await this._loadRawResourcesForType(type).catch(() => []);
    return resources.some((resource2) => resource2.assigned_to?.toLowerCase() === email2);
  }
  /**
   * Load the resource list for `type` without the loading-message side effects
   * of `_loadResourcesForType`, so it can be used for background checks (e.g.
   * detecting an assigned resource during submission).
   */
  _loadRawResourcesForType(type) {
    switch (type) {
      case "parking":
        return this.loadParkingResources();
      case "locker":
        return this._loadLockerResources();
    }
    return Promise.resolve([]);
  }
  async _computeAvailableResources(options, resources, restrictions, raw) {
    const { all_day, user } = raw;
    let { date, duration } = raw;
    if (all_day) {
      ({ date, duration } = this._allDayTimeRange(date));
    }
    const favourites = this._favourites[options.type]?.() || [];
    const default_zone = (this._settings.get("app.use_region") ? this._org.region?.id : this._org.building?.id) || this._org.organisation.id;
    const zones = options.zones?.length ? options.zones.join(",") : options.zone_id || default_zone;
    let booked_ids = [];
    if (!Un()) {
      booked_ids = await this._bookedResourceList({
        period_start: getUnixTime(date),
        period_end: getUnixTime(addMinutes(date, duration)),
        type: options.type,
        zones
      }, resources.length);
      if (options.type === "desk" && raw.recurrence_type && raw.recurrence_type !== "none") {
        const recurring_clashes = await this._recurringBookedResourceList(resources, zones, raw);
        booked_ids = unique([...booked_ids, ...recurring_clashes]);
      }
    }
    this._resource_use = {};
    for (const id of booked_ids) {
      this._resource_use[id] = " ";
    }
    return resources.filter((asset) => {
      const is_restricted = rulesForResource({
        date,
        duration,
        resource: asset,
        host: this._bookingRulesHost(user)
      }, restrictions[asset.zone?.id] || restrictions[asset.zone?.parent_id] || restrictions[this._org.building?.id] || []).hidden;
      const zone_filter = options.zones?.length ? options.zones.some((zone_id) => zone_id === asset.zone?.id || zone_id === asset.zone?.parent_id) : options.zone_id ? options.zone_id === asset.zone?.id || options.zone_id === asset.zone?.parent_id : true;
      return !is_restricted && (!options.show_fav || favourites.includes(asset.id)) && (!asset.groups?.length || asset.groups.some((grp) => currentUser().groups.includes(grp))) && asset.bookable !== false && (!options.features || options.features?.every((_) => asset.features.includes(_))) && zone_filter && !booked_ids.includes(asset.id);
    });
  }
  _bookedResourceList(query, resource_count) {
    const key = JSON.stringify(__spreadProps(__spreadValues({}, query), { resource_count }));
    const existing = this._booked_resource_requests.get(key);
    if (existing)
      return existing;
    const request = new Promise((resolve, reject) => {
      this._booked_resource_debounce.push({
        query,
        resource_count,
        resolve,
        reject
      });
      this.timeout("booked-resource", () => {
        const queue = this._booked_resource_debounce;
        this._booked_resource_debounce = [];
        const latest = queue[queue.length - 1];
        bookedResourceList(latest.query, latest.resource_count).then((result) => queue.forEach((item) => item.resolve(result)), (error) => queue.forEach((item) => item.reject(error)));
      });
    }).finally(() => this._booked_resource_requests.delete(key));
    this._booked_resource_requests.set(key, request);
    return request;
  }
  resourceUserName(id) {
    return this._resource_use[id];
  }
  get timezone() {
    const use_building_timezone = this.setting("use_building_timezone");
    return use_building_timezone ? this._org.building?.timezone || "" : "";
  }
  /**
   * Reset the form to `booking`, or to an empty booking of `type`.
   * A booking without an `id` takes the configured `default_duration`, so
   * set a different length on the model after this call.
   */
  newForm(type, booking = new Booking({})) {
    this._resetForm(type, booking, true);
  }
  /**
   * Reset the form to `booking`. Set `start_network` to start the resource,
   * rule and availability loads. When the user is not loaded, the reset
   * waits for the user and keeps the same choice.
   */
  _resetForm(type, booking, start_network) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => {
        this._captureUserEdits();
        this._resetForm(type, booking, start_network);
      });
      return;
    }
    const user_edits = this._userEditsFor(type);
    this._pending_user_edits = null;
    if (isCrossTypeEdit(booking, type))
      booking = new Booking({});
    if (start_network)
      this._startNetwork();
    this._calendar.loadCalendars();
    if (type !== this._options().type) {
      this._clearStoredForm();
    }
    this.setOptions({ type });
    this._asset_window = untracked(() => {
      const { date, duration } = this._assets.getOptions();
      return assetWindowKey(date, duration);
    });
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    if (!booking.id) {
      booking.all_day = this.setting("all_day_default");
    }
    this.model.set(bookingFormValue(new Booking()));
    this.form().reset();
    this._patch(li(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, booking.extension_data), {
      attachments: bookingAttachments(booking)
    }), booking), {
      _in_progress: booking.state === "started" || booking.state === "in_progress",
      // `Booking` has no `user` object, only the flat `user_*`
      // fields, so the host has to be rebuilt from those. Without
      // it the form keeps the signed-in user and editing a
      // delegate booking reassigns the host on save.
      user: bookingHostUser(booking)
    }), [null, void 0, ""]), { emitEvent: false });
    const default_duration = Number(this.setting("default_duration"));
    if (!booking.id && default_duration > 0) {
      this._patch({
        duration: default_duration,
        date_end: addMinutes(this.model().date, default_duration).valueOf()
      });
    }
    this._replayUserEdits(user_edits);
    this._patch({ booking_type: this._formBookingType() });
    this.applyDurationSettings();
    this._syncAssetOptions();
    const form_change = effect(() => {
      this._form_value.set(this.model());
      this._syncAssetOptions();
      this.storeForm();
    }, __spreadProps(__spreadValues({}, ngDevMode ? { debugName: "form_change" } : (
      /* istanbul ignore next */
      {}
    )), { injector: this._injector }));
    this.subscription("form_change", {
      unsubscribe: () => form_change.destroy()
    });
    this._syncWindowIfUnchanged("date", initial_date, initial_duration, booking.date, booking.duration);
    this._booking.set(new Booking(booking));
    this._options.set(__spreadValues({
      type: this._options().type
    }, user_edits?.options));
    this.storeForm();
    this.timeout("set-resource", async () => {
      const resources = this.model().resources;
      if (!resources?.length)
        return;
      const item_list = await this.listResources();
      const new_list = resources.map((asset) => item_list.find((_) => _.id == asset.id) || asset);
      this._patch({ resources: new_list });
    });
  }
  constructor() {
    super();
    this._router = inject(Router);
    this._settings = inject(SettingsService);
    this._org = inject(OrganisationService);
    this._dialog = inject(MatDialog);
    this._payments = inject(PaymentsService);
    this._assets = inject(AssetStateService);
    this._calendar = inject(CalendarService);
    this._injector = inject(Injector);
    this._options = signal(
      {
        type: "desk"
      },
      ...ngDevMode ? [{ debugName: "_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking = signal(
      null,
      ...ngDevMode ? [{ debugName: "_booking" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_use = {};
    this._resources_failed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_resources_failed" }] : (
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
    this._favourites = {
      " ": settingSignal("favorites", [], true),
      room: settingSignal(SETTING_KEYS.FAVORITE_ROOMS, [], true),
      group: signal([]),
      desk: settingSignal(SETTING_KEYS.FAVORITE_DESKS, [], true),
      locker: settingSignal(SETTING_KEYS.FAVORITE_LOCKERS, [], true),
      parking: settingSignal(SETTING_KEYS.FAVORITE_PARKING_SPACES, [], true),
      staff: settingSignal("favorites", [], true),
      visitor: settingSignal("favorites", [], true),
      "group-event": settingSignal("favorites", [], true),
      "asset-request": settingSignal("favorites", [], true),
      "catering-order": settingSignal("favorites", [], true)
    };
    this._network_requested = false;
    this._network_consumed = signal(
      false,
      ...ngDevMode ? [{ debugName: "_network_consumed" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_holds = signal(
      0,
      ...ngDevMode ? [{ debugName: "_network_holds" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._network_active = computed(
      () => this._network_consumed() || this._network_holds() > 0,
      ...ngDevMode ? [{ debugName: "_network_active" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booked_resource_requests = /* @__PURE__ */ new Map();
    this._booked_resource_debounce = [];
    this._recurring_clash_requests = /* @__PURE__ */ new Map();
    this.last_success = new Booking(JSON.parse(sessionStorage.getItem(STORAGE_KEYS.last_booked_booking) || "{}"));
    this.loading = this._loading.asReadonly();
    this.options = this._options.asReadonly();
    this._form_ref = generateBookingForm(new Booking(), this._injector);
    this.form = this._form_ref.form;
    this.model = this._form_ref.model;
    this._asset_window = "";
    this.view = signal(
      "form",
      ...ngDevMode ? [{ debugName: "view" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._pending_user_edits = null;
    this._requests_ready = computed(
      () => {
        const region = this._org.active_region();
        const building = this._org.active_building();
        const overrides = this._settings.overrides();
        const required_overrides = (this._org.settings?.length || 0) + 2;
        return this._org.initialised() && (!this._org.regions.length || !!region?.id) && !!building?.id && // The override count can be satisfied by placeholder `{}` building
        // settings before `loadBuildingData` populates them, so also wait
        // for the active building's metadata to actually land. Otherwise
        // building/region-level settings (e.g. assigned_resource_booking)
        // read as their defaults during the load window.
        this._org.active_building_loaded() && overrides.length >= required_overrides;
      },
      ...ngDevMode ? [{ debugName: "_requests_ready" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value = signal(
      null,
      ...ngDevMode ? [{ debugName: "_form_value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._form_value_debounced = debounced(this._form_value, 500, {
      injector: this._injector,
      equal: availabilityFormMatch
    });
    this._resource_params = computed(
      () => {
        const building = this._org.active_building();
        if (!building?.id)
          return void 0;
        return { building: building.id, type: this._options().type };
      },
      ...ngDevMode ? [{ debugName: "_resource_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._resource_params_debounced = debounced(this._resource_params, 300, { injector: this._injector, equal: Object.is });
    this._resources_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_resources_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_active() && this._requests_ready() ? this._resource_params_debounced.value() : void 0,
      loader: ({ params }) => this._loadResourcesForType(params.type)
    }));
    this.resources = computed(
      () => {
        return this._resources_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.features = computed(
      () => {
        const list = [];
        for (const { features } of this.resources()) {
          features instanceof Array ? features.forEach((_) => list.push(_)) : null;
        }
        return unique(list).sort((a, b) => a.localeCompare(b));
      },
      ...ngDevMode ? [{ debugName: "features" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params = computed(
      () => {
        const list = this._org.building_list();
        const { type } = this._options();
        return list.length ? { ids: list.map((bld) => bld.id), type } : void 0;
      },
      ...ngDevMode ? [{ debugName: "_booking_rules_params" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._booking_rules_params_debounced = debounced(this._booking_rules_params, 300, { injector: this._injector, equal: Object.is });
    this._booking_rules_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_booking_rules_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => this._network_active() && this._requests_ready() ? this._booking_rules_params_debounced.value() : void 0,
      loader: ({ params }) => {
        const { ids, type } = params;
        return Promise.all(ids.map((id) => _c(id, `${type}_booking_rules`))).then((building_rules) => {
          const mapping = {};
          for (const rules of building_rules) {
            mapping[rules.id] = rules.details instanceof Array ? rules.details : [];
          }
          return mapping;
        }).catch(() => ({}));
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
    this._has_assigned_desk_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_has_assigned_desk_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_active() || !this._requests_ready()) {
          return void 0;
        }
        const buildings = this._org.building_list();
        const email2 = currentUser()?.email;
        return buildings.length && email2 ? { buildings, email: email2 } : void 0;
      },
      loader: () => this._computeHasAssignedDesk()
    }));
    this.has_assigned_desk = computed(
      () => {
        return this._has_assigned_desk_resource.value() ?? false;
      },
      ...ngDevMode ? [{ debugName: "has_assigned_desk" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this._available_resource = resource(__spreadProps(__spreadValues({}, ngDevMode ? { debugName: "_available_resource" } : (
      /* istanbul ignore next */
      {}
    )), {
      params: () => {
        if (!this._network_active() || !this._requests_ready()) {
          return void 0;
        }
        if (this._resources_resource.isLoading() || this._booking_rules_resource.isLoading()) {
          return void 0;
        }
        return {
          options: this._options(),
          resources: this.resources(),
          rules: this.booking_rules(),
          // Rules and resource groups can depend on the user's groups
          groups: user_group_names(),
          form: this._form_value_debounced.value()
        };
      },
      loader: ({ params: { options, resources, rules, form: form2 } }) => {
        const raw = form2;
        if (!(raw?.date > 0 && raw?.duration > 0)) {
          return Promise.resolve([]);
        }
        if (!resources.length)
          return Promise.resolve([]);
        this._loading.set(i18n("BOOKINGS.LOADING_AVAILABILITY", { type: options.type }));
        return this._computeAvailableResources(options, resources, rules, raw).catch(() => []).then((available) => {
          this._loading.set("");
          return available;
        });
      }
    }));
    this.available_resources = computed(
      () => {
        return this._available_resource.value() ?? [];
      },
      ...ngDevMode ? [{ debugName: "available_resources" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.load_failed = this._resources_failed.asReadonly();
    this.subscription("router.bookings", this._router.events.subscribe((booking) => {
      const url = booking instanceof NavigationEnd ? booking.urlAfterRedirects || booking.url : "";
      if (booking instanceof NavigationEnd && !url.includes("book") && !BOOKING_TYPES.find((_) => url.includes(_))) {
        this.clearForm();
      }
    }));
    this._org.waitUntilInitialised().then(() => this.setOptions({}));
    this._form_value.set(this.model());
    effect(() => {
      const overrides = this._settings.overrides();
      if (overrides?.length)
        this.applyDurationSettings();
    });
  }
  /** Push the current building's duration and bookable-hours settings into the time sync. */
  applyDurationSettings() {
    const handle = this._form_ref.time_sync;
    const period = this.setting("all_day_period");
    handle?.updateOptions({
      min_duration: this.setting("min_duration") ?? 30,
      max_duration: this.setting("max_duration") ?? 0,
      default_duration: this.setting("default_duration") ?? 60,
      custom_duration_options: this.setting("custom_duration_options") ?? [],
      bookable_hours: this.setting("bookable_hours") ?? null,
      timezone: this.timezone,
      all_day_start: period?.start,
      all_day_end: period?.end
    });
  }
  /**
   * Start and end times (ms) of the booking window for a form value.
   * All-day values use the configured all-day period.
   */
  bookingWindow(value) {
    if (value.all_day) {
      const { date, date_end } = this._allDayTimeRange(value.date);
      return { start: date, end: date_end };
    }
    return {
      start: value.date,
      end: addMinutes(value.date, value.duration).valueOf()
    };
  }
  _allDayTimeRange(date) {
    const period = this.setting("all_day_period");
    return getAllDayTimeRange(date, this.timezone, period?.start, period?.end);
  }
  /**
   * Re-apply the supplied booking window after async form setup only if no
   * other consumer has already changed it.
   */
  _syncWindowIfUnchanged(timeout_name, initial_date, initial_duration, date, duration) {
    this.timeout(timeout_name, async () => {
      const window2 = this.model();
      if (window2.date !== initial_date || window2.duration !== initial_duration) {
        return;
      }
      this._patch({ date, duration });
    });
  }
  setView(value) {
    this.view.set(value);
  }
  setOptions(value) {
    const current = this._options();
    const next = __spreadValues(__spreadValues({}, current), value);
    if (bookingOptionsMatch(current, next))
      return;
    this._options.set(next);
  }
  setFeature(feature, enable) {
    if (!feature?.length)
      return;
    const features = this._options()?.features || [];
    if (enable && !features.includes(feature)) {
      this.setOptions({ features: [...features, feature] });
    }
    if (!enable && features.includes(feature)) {
      this.setOptions({
        features: features.filter((e) => e !== feature)
      });
    }
  }
  resetForm() {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.resetForm());
      return;
    }
    if (!sessionStorage.getItem(STORAGE_KEYS.booking_form)) {
      return this.newForm(this._options().type);
    }
    const booking = this._booking();
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    this._patch(li(__spreadProps(__spreadValues(__spreadValues({}, booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]));
    this._options.set({ type: this._options().type });
  }
  /**
   * Reset the form and its stored state. This does not start the loads: a
   * flow can clear the form while the user leaves it.
   */
  clearForm() {
    this._clearStoredForm();
    this._resetForm(this._options().type, new Booking({}), false);
  }
  _clearStoredForm() {
    sessionStorage.removeItem(STORAGE_KEYS.booking_form);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_options);
    sessionStorage.removeItem(STORAGE_KEYS.booking_form_filters);
  }
  storeForm() {
    if (typeof sessionStorage === "undefined")
      return;
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, this._booking()), li(__spreadValues({}, this.model()), [null, void 0, ""]))));
    sessionStorage.setItem(STORAGE_KEYS.booking_form_filters, JSON.stringify(this._options() || {}));
  }
  loadForm(expected_type) {
    if (!currentUserIsLoaded()) {
      currentUserLoaded().then(() => this.loadForm(expected_type));
      return;
    }
    this._captureUserEdits();
    const user_edits = this._userEditsFor(expected_type);
    queueMicrotask(() => this._pending_user_edits = null);
    this._startNetwork();
    this._calendar.loadCalendars();
    const data = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    const booking = new Booking(data);
    if (expected_type && isCrossTypeEdit(booking, expected_type)) {
      return this.newForm(expected_type);
    }
    const initial_date = booking.date;
    const initial_duration = booking.duration;
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
    this._booking.set(booking);
    this.model.set(__spreadProps(__spreadValues({}, bookingFormValue(new Booking())), {
      user: currentUser(),
      booked_by: currentUser()
    }));
    this.form().reset();
    const booking_data = li(__spreadProps(__spreadValues(__spreadValues(__spreadValues({}, data), booking || {}), booking?.extension_data || {}), {
      attachments: bookingAttachments(booking),
      user: bookingHostUser(booking),
      _in_progress: booking?.state === "started"
    }), [null, void 0, ""]);
    this._patch(booking_data, { emitEvent: false });
    this._replayUserEdits(user_edits);
    if (expected_type) {
      this._patch({
        booking_type: knownBookingType(this.model().booking_type) || expected_type
      });
    }
    this.applyDurationSettings();
    this._form_value.set(this.model());
    this._syncAssetOptions();
    this.storeForm();
    this._syncWindowIfUnchanged("load-date", initial_date, initial_duration, booking.date, booking.duration);
    this.setOptions(__spreadValues({}, JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form_filters) || "{}")));
  }
  clearOldState() {
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_booking);
    sessionStorage.removeItem(STORAGE_KEYS.last_booked_count);
    this._loading.set("");
    this.last_success = new Booking();
  }
  openBookingLinkModal(force = false) {
    this.form().markAsTouched();
    if (!this.form().valid() && !force)
      return;
    const event = new Booking(__spreadValues(__spreadValues({}, this.booking), this.model()));
    this._dialog.open(BookingLinkModalComponent, { data: event });
  }
  async confirmPost() {
    await this.checkQuestions();
    const options = this._options();
    const value = this.model();
    const content = i18n(options.group ? "BOOKINGS.CONFIRM_MSG_GROUP" : "BOOKINGS.CONFIRM_MSG", {
      type: options.type,
      date: format(value.date, "dd MMM yyyy") + (value.duration < 12 * 60 ? " at " + format(value.date, "h:mm a") : "")
    });
    const details = await openConfirmModal({
      title: i18n("BOOKINGS.CONFIRM_TITLE", { type: options.type }),
      content,
      icon: { content: "event_available" }
    }, this._dialog);
    if (details?.reason !== "done")
      throw "User cancelled";
    details.loading(i18n("BOOKINGS.CONFIRM_LOADING"));
    if (options.group) {
      await this.postFormForGroup().catch((_) => {
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    } else
      await this.postForm().catch((_) => {
        notifyError(this._error_message(_));
        details.close();
        throw _;
      });
    details.close();
  }
  async postForm(ignore_check = false, reset_form = true) {
    if (!this.form)
      throw "No form for booking";
    this._prepareFormForPost();
    localStorage.removeItem(STORAGE_KEYS.last_group_booking_ids);
    const value = this.model();
    const effective_timezone = this.timezone || value.timezone;
    const booking = this._booking() || new Booking();
    const all_day_period = value.all_day ? this._allDayTimeRange(value.date) : {
      date: value.date,
      duration: value.duration,
      date_end: value.date_end
    };
    const bookable_hours = this.setting("bookable_hours");
    if (!isWithinBookableHours(value.date, bookable_hours, effective_timezone)) {
      throw i18n("FORM.BOOKABLE_HOURS_ERROR");
    }
    const host = value.user?.email || value.user_email || currentUser()?.email;
    await this._checkBookingAllowed(__spreadProps(__spreadValues(__spreadValues({}, booking), value), { user_email: host }), all_day_period, effective_timezone, ignore_check);
    const payment = await this._takePayment(value, booking, all_day_period);
    const selected_zones = [
      ...value?.zones || [],
      ...value.booking_asset?.zones || []
    ].filter((_) => _);
    value.zones = unique(selected_zones.length ? selected_zones : [...this._booking()?.zones || []]);
    this._loading.set(i18n("COMMON.SAVING"));
    delete value.booking_asset;
    value.timezone = effective_timezone;
    if (value.all_day) {
      value.date = all_day_period.date;
      value.duration = all_day_period.duration;
      value.date_end = all_day_period.date_end;
    }
    delete value.booking_start;
    delete value.booking_end;
    const q = bookingSaveQuery(value, booking);
    delete value.event_id;
    const zones = unique([
      ...this._saveZones(value.resources || []),
      ...value.zones || []
    ]).filter((_) => _);
    this._clampRecurrenceEnd(value);
    const group_members = this._options().group && this._options().members?.length ? mapGroupMembers(value.booking_type, this._options().members) : [];
    const result = await saveBooking(new Booking(__spreadProps(__spreadValues({
      type: this._options().type
    }, formBookingData(value)), {
      description: value.booking_type === "visitor" ? value.description || value.title || value.asset_name : value.asset_name || value.description,
      user_id: value.user?.id ?? value.user_id,
      user_name: value.user?.name || value.user_name,
      user_email: value.user?.email || value.user_email,
      extension_data: buildBookingExtensionData(value, group_members),
      approved: this._settings.get("app.bookings.no_approval") === true && currentUserCanApprove(),
      zones
    })).toJSON(), q).catch(async (e) => {
      if (payment)
        await this._payments.cancel(payment).catch(() => null);
      return this._saveFailure(e);
    });
    if (value.assets?.length || booking.extension_data.assets?.length) {
      await this._saveAssetRequests(result, value, booking, zones).catch(async (e) => {
        if (payment) {
          await this._payments.cancel(payment).catch(() => null);
        }
        throw e;
      });
    }
    if (payment)
      await this._capturePayment(payment, result);
    this._loading.set("");
    const { booking_type } = value;
    if (reset_form) {
      this.clearForm();
      this._patch({ booking_type });
    }
    this.last_success = result;
    sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(result));
    if (reset_form)
      this.setView("success");
    return result;
  }
  /**
   * Bring the form up to date for posting, then throw a list of the
   * invalid fields when the form is not valid.
   */
  _prepareFormForPost() {
    if (isEmptyUser(this.model().user)) {
      this._patch({ user: currentUser(), booked_by: currentUser() });
    }
    if (this.model().all_day && this.model().date) {
      const { date, duration, date_end } = this._allDayTimeRange(this.model().date);
      this._patch({ date, duration, date_end });
    }
    this._patch({ booking_type: this._formBookingType() });
    if (!this.form().valid()) {
      const invalid_fields = getInvalidSignalFields(this.form, this.model, this._invalid_field_mappings());
      throw i18n("FORM.INVALID_FIELDS", {
        field_list: invalid_fields.join(", ")
      });
    }
  }
  /**
   * Check that the booking can be saved: resource availability, booking
   * rules and recurring clashes. With `ignore_check` only the
   * assigned-resource restriction applies.
   */
  async _checkBookingAllowed(request, period, timezone, ignore_check) {
    const type = request.booking_type || this._options().type;
    if (ignore_check) {
      await this._checkAssignedResourceRestriction(request.user_email, type);
      return;
    }
    if (type !== "visitor") {
      await this._checkResourceAvailable(request, type);
    }
    await this._checkResourceRules(request.resources, period.date, period.duration, request.user_email);
    await this._checkRecurringClashes(__spreadProps(__spreadValues(__spreadValues({}, request), period), { timezone }), type);
  }
  /**
   * Ask the user to pay for a new booking when payments are enabled, and
   * store the payment ID on `value`. Throws when the user cancels, so
   * callers do not report a saved booking. Resolves `null` when the
   * booking has no price. Changes to saved
   * bookings and group bookings are not charged. A group booking saves one
   * booking for each member, and has no combined checkout yet.
   */
  async _takePayment(value, booking, period) {
    if (booking.id || this._options().group)
      return null;
    if (!this._payments.can_checkout)
      return null;
    const resources = value.resources?.length ? value.resources : [{ id: value.asset_id, name: value.asset_name }];
    const result = await this._payments.checkout({
      description: value.asset_name || value.title || "",
      items: bookingLineItems({
        type: value.booking_type || this._options().type,
        date: period.date,
        duration: period.duration,
        resources: resources.map((resource2) => ({
          id: resource2?.id,
          name: resource2?.name || resource2?.display_name,
          zone_id: resource2?.zone_id || resource2?.zone?.id
        }))
      })
    });
    if (result.status === "cancelled") {
      throw i18n("PAYMENTS.PAYMENT_CANCELLED");
    }
    if (result.status === "free")
      return null;
    value.extension_data = __spreadProps(__spreadValues({}, value.extension_data), {
      payment_id: result.payment.id
    });
    return result.payment;
  }
  /** Take the authorized payment and link it to the saved booking */
  async _capturePayment(payment, booking) {
    await this._payments.capture(payment, { type: "booking", id: booking.id }).catch((e) => notifyError(i18n("PAYMENTS.CAPTURE_FAILED", {
      error: errorMessage(e) || e
    })));
  }
  /** Org, region, building and level zones of the first selected resource.
   * Uses the active building when the resource has no known level. */
  _saveZones(resources) {
    const zone = this._org.levelWithID(resources[0]?.zone_id) || resources[0]?.zone;
    return zone && zone instanceof Object ? unique([
      this._org.organisation?.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [
      this._org.organisation?.id,
      this._org.region?.id,
      this._org.building?.id
    ];
  }
  /** Limit the end of a recurring booking to the type's available period. */
  _clampRecurrenceEnd(value) {
    if (!value.recurrence_type || value.recurrence_type === "none")
      return;
    const type = value.booking_type;
    const available_days = this._settings.get(`app.${type}s.available_period`) || this._settings.get(`app.${type}.available_period`) || (type === "parking" ? 7 : 90);
    const available_period = getUnixTime(endOfDay(addDays(Date.now(), available_days)));
    if (!value.recurrence_end || value.recurrence_end > available_period) {
      value.recurrence_end = available_period;
    }
  }
  /** Convert a failed save into the error that `postForm` throws. A
   * permission failure also reverts the saved host change. */
  async _saveFailure(e) {
    this._loading.set("");
    let error = e?.error || e;
    if (error instanceof Response) {
      error = await error.clone().json().catch(() => null);
    }
    const failure = e?.status ? {
      message: this._error_message(error),
      status: e.status
    } : error;
    if (this._isPermissionError(failure))
      this._clearSavedHostChange();
    throw failure;
  }
  /**
   * Save the asset requests of a saved booking. The booking record exists
   * by this point, so a new booking is removed again when this fails.
   * Otherwise the user is told the booking failed while the record stays
   * visible in concierge.
   */
  async _saveAssetRequests(result, value, booking, zones) {
    const is_new_booking = !booking.id && !value.id;
    try {
      const requests = await validateAssetRequestsForResource(__spreadProps(__spreadValues({}, result), { from_booking: true }), {
        date: value.date,
        duration: value.duration,
        all_day: value.all_day,
        host: value.booked_by_email,
        zones
      }, value.assets);
      if (!requests)
        throw i18n("BOOKINGS.ASSETS_INVALID_ERROR");
      await requests();
    } catch (e) {
      console.error("Couldn't update asset requests", e);
      this._loading.set("");
      if (is_new_booking && result?.id) {
        await removeBooking(result.id).catch((err) => console.error("Failed to rollback booking", err));
      }
      throw e?.status === 409 ? i18n("BOOKINGS.ASSETS_CLASH_ERROR") : errorMessage(e?.error || e) || i18n("BOOKINGS.ASSETS_INVALID_ERROR");
    }
  }
  setting(key) {
    return this.settingForType(this._options().type, key);
  }
  /**
   * Resolve a setting for a specific booking type. Prefer this over `setting()`
   * when the relevant type is known (e.g. at submission), since this service is
   * a shared singleton and `setting()` resolves against whichever flow's
   * `_options().type` happens to be active.
   */
  settingForType(type, key) {
    return this._settings.get(`app.${type}.${key}`) ?? this._settings.get(`app.${type}s.${key}`) ?? this._settings.get(`app.bookings.${key}`);
  }
  /** Whether auto-allocation is enabled for the current booking type */
  get auto_allocation() {
    return !!this.setting("auto_allocation");
  }
  /**
   * Auto-allocate a desk from the active building.
   * Prefers desks with tags and homebase matching the user's groups, then
   * picks the level with the most available desks and selects one at random.
   */
  async autoAllocateDesk() {
    const available = await this.listAvailableResources();
    if (!available?.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const selected = pickAutoAllocatedResource(preferredAllocationPool(available, currentUser()?.groups || []));
    this._patch({
      resources: [selected],
      asset_id: selected.id,
      asset_name: selected.name || selected.id,
      map_id: selected.map_id || selected.id,
      booking_asset: selected,
      zones: this._assetZones(selected.zone)
    });
  }
  async postFormForGroup() {
    const { members, group, type } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    localStorage.removeItem(STORAGE_KEYS.last_group_booking_errors);
    const member_list = members || [];
    const extra_members = member_list.filter((_) => _.email !== currentUser().email);
    if (extra_members.length <= 0)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const group_members = unique([currentUser(), ...extra_members], "email");
    const resources = await this._resolveDeskGroupResources(group_members, form2);
    const unavailable_errors = [];
    const booking_failures = [];
    const available = await Promise.all(group_members.map(async (member, idx) => {
      const resource2 = resources[idx];
      if (!resource2) {
        const message = i18n("BOOKINGS.GROUP_MEMBER_NO_RESOURCE");
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          error: message
        });
        return false;
      }
      try {
        return await this._checkResourceAvailable(__spreadProps(__spreadValues({}, form2), {
          asset_id: resource2.id,
          user_email: member.email
        }), type);
      } catch (error) {
        const message = this._error_message(error);
        unavailable_errors.push(`${member.name || member.email}: ${message}`);
        booking_failures.push({
          email: member.email,
          name: member.name || member.email,
          asset_id: resource2.id,
          asset_name: resource2.name || resource2.id,
          error: message
        });
        return false;
      }
    }));
    const unavailable = group_members.filter((_, idx) => !available[idx]);
    const group_name = groupName();
    const group_error = i18n("BOOKINGS.GROUP_SOME_HAVE_BOOKINGS", {
      members: unavailable.map((_) => _.name || _.email)?.join(", ")
    });
    let user_booking = null;
    const booking_ids = [];
    const booking_errors = [];
    let parent_id = "";
    try {
      if (available.some((_) => _)) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, group_members, type);
        parent_id = group_booking.id;
        if (parent_id)
          booking_ids.push(parent_id);
      }
      for (let i = 0; i < group_members.length; i++) {
        if (!available[i])
          continue;
        const user = group_members[i];
        const asset = resources[i];
        const assets = user.email == currentUser().email ? form2.assets : [];
        const zones = unique([
          this._org.organisation?.id,
          this._org.region?.id,
          asset?.zone?.parent_id,
          asset?.zone?.id,
          ...form2.zones
        ].filter((_) => _));
        this._patch(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, form2), {
          assets,
          parent_id,
          user,
          user_email: user.email,
          user_id: user.id
        }), this._resourceFormData(asset)), {
          group: group_name,
          zones
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          const message = this._error_message(error);
          const error_message = `${user.name || user.email}: ${message}`;
          if (rollback_on_group_error)
            throw error_message;
          booking_errors.push(error_message);
          booking_failures.push({
            email: user.email,
            name: user.name || user.email,
            asset_id: asset.id,
            asset_name: asset.name || asset.id,
            error: message
          });
          return null;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.user_email?.toLowerCase() === currentUser().email?.toLowerCase())
          user_booking = bkn;
      }
      if (unavailable.length) {
        const unavailable_error = unavailable_errors.length ? unavailable_errors.join("\n") : group_error;
        if (rollback_on_group_error) {
          await rollbackGroupBookings(booking_ids);
          throw unavailable_error;
        }
        notifyWarn(unavailable_error);
      }
      if (booking_errors.length) {
        notifyWarn(booking_errors.join("\n"));
      }
    } catch (error) {
      if (rollback_on_group_error && booking_ids.length) {
        await rollbackGroupBookings(booking_ids);
      }
      throw this._error_message(error);
    }
    if (user_booking) {
      this.last_success = user_booking;
      sessionStorage.setItem(STORAGE_KEYS.last_booked_booking, JSON.stringify(user_booking));
    }
    if (booking_ids.length > 1) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_ids, JSON.stringify(booking_ids));
    }
    if (booking_failures.length) {
      localStorage.setItem(STORAGE_KEYS.last_group_booking_errors, JSON.stringify(booking_failures));
    }
    this._finishGroupFlow(type);
    return user_booking;
  }
  async postFormForVisitorGroup() {
    const { members, group } = this._options();
    if (!group)
      throw i18n("BOOKINGS.GROUP_NOT_SET");
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const rollback_on_group_error = this.setting("rollback_group_bookings") === true;
    const form2 = this.model();
    const group_name = groupName();
    const booking_ids = [];
    const invited = [];
    let parent_id = "";
    let first_booking = null;
    try {
      const group_booking = await this.createGroupContainerBooking(form2, group_name, members, "visitor");
      parent_id = group_booking.id;
      if (parent_id)
        booking_ids.push(parent_id);
      for (const visitor of members) {
        if (!visitor.email)
          continue;
        this._patch(visitorMemberPatch(visitor, form2, {
          id: "",
          parent_id,
          group_name,
          fallback_zones: this._booking()?.zones,
          org_zones: [
            this._org.organisation?.id,
            this._org.region?.id
          ]
        }));
        const bkn = await this.postForm(true, false).catch((error) => {
          throw `${visitor.name || visitor.email}: ${this._error_message(error)}`;
        });
        if (bkn?.id)
          booking_ids.push(bkn.id);
        if (bkn?.id)
          invited.push(visitor);
        if (bkn?.id && !first_booking)
          first_booking = bkn;
      }
    } catch (error) {
      const rolled_back = rollback_on_group_error && booking_ids.length;
      if (rolled_back)
        await rollbackGroupBookings(booking_ids);
      const remaining = rolled_back ? members : members.filter((_) => !invited.includes(_));
      this._patch({ assets: remaining });
      this.setOptions({ members: remaining });
      if (!rolled_back && invited.length) {
        throw i18n("BOOKINGS.VISITOR_GROUP_PARTIAL", {
          names: invited.map((_) => _.name || _.email).join(", "),
          error: this._error_message(error)
        });
      }
      throw this._error_message(error);
    }
    this._finishGroupFlow("visitor");
    return first_booking;
  }
  async loadGroupSiblings(booking) {
    if (!booking?.id)
      return [];
    const stored_booking = this._booking();
    const lookup_booking = stored_booking?.id === booking.id ? stored_booking : booking;
    const parent_id = lookup_booking.parent_id || lookup_booking.id;
    const group_ref = `${lookup_booking.group || ""}`.trim();
    const legacy_group = `${lookup_booking.description || ""}`.startsWith("grp-") ? lookup_booking.description : "";
    const { type } = this._options();
    const list = await queryBookings({
      period_start: getUnixTime(lookup_booking.date),
      period_end: getUnixTime(addMinutes(lookup_booking.date, lookup_booking.duration)),
      type,
      include_booked_by: true
    });
    return list.filter((b) => b.status !== "cancelled" && (b.id === parent_id || b.parent_id === parent_id || !!group_ref && `${b.group || ""}`.trim() === group_ref || !!legacy_group && b.description === legacy_group));
  }
  async loadGroupMembersForBooking(booking) {
    if (!booking?.id)
      return [];
    const type = this._options().type || booking.booking_type || "desk";
    const is_visitor = type === "visitor";
    const sibling_list = await this.loadGroupSiblings(booking);
    if (sibling_list.length) {
      return mapGroupMembersFromBookings(sibling_list, is_visitor);
    }
    return mapGroupMembersFromExtension(booking.extension_data?.group_members || [], is_visitor);
  }
  /**
   * Set the `group` and `members` options when the user edits a group
   * booking. Does nothing for other bookings. The members are empty when
   * they fail to load, so the save fails. It does not save the booking of
   * the organiser only. Pass `isCancelled` to skip the update when the
   * caller has gone.
   */
  async restoreGroupMembers(booking, isCancelled = () => false) {
    if (!booking?.id || !isGroupBooking(booking))
      return;
    const members = await this.loadGroupMembersForBooking(booking).catch(() => []);
    if (isCancelled())
      return;
    this.setOptions({ group: true, members });
  }
  async editFormForGroup(existing_siblings) {
    const { members, type } = this._options();
    if (!members?.length)
      throw i18n("BOOKINGS.GROUP_NO_MEMBERS");
    const form2 = this.model();
    const base_form = __spreadProps(__spreadValues({}, form2), { id: "" });
    let parent_id = form2.parent_id || form2.id;
    const group_name = groupName(form2.group);
    const is_visitor = type === "visitor";
    const needs_group_container_parent = is_visitor && !form2.parent_id;
    const has_group_container_parent = !!form2.parent_id && !existing_siblings.some((s) => s.id === form2.parent_id);
    const { sibling_map, to_delete } = matchGroupSiblings(existing_siblings, members, is_visitor);
    await this._removeGroupSiblings(to_delete, is_visitor);
    const desk_resources = !is_visitor && type === "desk" ? await this._resolveDeskGroupResources(members, form2, [
      ...existing_siblings.filter((s) => !to_delete.find((item) => item.id === s.id))
    ]) : [];
    let first_result = null;
    try {
      if (needs_group_container_parent) {
        const group_booking = await this.createGroupContainerBooking(form2, group_name, members, type);
        parent_id = group_booking.id;
      } else if (has_group_container_parent) {
        await this.saveGroupContainerBooking(form2, group_name, members, type, parent_id);
      }
      for (let index = 0; index < members.length; index++) {
        const member = members[index];
        if (!member.email)
          continue;
        const existing = sibling_map[member.email];
        const booking_id = existing?.id || "";
        if (is_visitor) {
          this._patch(visitorMemberPatch(member, base_form, {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group_name,
            existing_zones: existing?.zones,
            fallback_zones: this._booking()?.zones,
            org_zones: [
              this._org.organisation?.id,
              this._org.region?.id
            ]
          }));
        } else {
          const asset = desk_resources[index];
          this._patch(__spreadValues(__spreadProps(__spreadValues({}, base_form), {
            id: booking_id,
            parent_id: booking_id === parent_id ? "" : parent_id,
            group: group_name,
            user: member,
            user_email: member.email,
            user_id: member.id
          }), asset ? this._resourceFormData(asset) : {}));
        }
        const bkn = await this.postForm(true, false);
        if (!first_result)
          first_result = bkn;
      }
    } catch (error) {
      throw this._error_message(error);
    }
    this._finishGroupFlow(type);
    return first_result;
  }
  /**
   * Remove bookings of members dropped from a group. Removed visitors are
   * also removed from the linked event and marked `removed_from_group`.
   */
  async _removeGroupSiblings(to_delete, is_visitor) {
    for (const booking of to_delete) {
      const event = booking.linked_event;
      const event_id = event?.event_id || event?.id;
      if (is_visitor && event_id) {
        await removeEventGuest(event_id, new GuestUser({ email: booking.asset_id }), {
          system_id: event.system_id,
          calendar: event.resource_calendar
        });
      }
      if (is_visitor) {
        await updateBooking(booking.id, {
          extension_data: __spreadProps(__spreadValues({}, booking.extension_data), {
            removed_from_group: true
          })
        });
      }
      try {
        await removeBooking(booking.id);
      } catch (error) {
        if (is_visitor) {
          await updateBooking(booking.id, {
            extension_data: {
              removed_from_group: booking.extension_data?.removed_from_group ?? false
            }
          });
        }
        throw error;
      }
    }
  }
  /** Shared success tail for every group flow: reset, retag, show success. */
  _finishGroupFlow(booking_type) {
    this.clearForm();
    this._patch({ booking_type });
    this.setView("success");
  }
  _resourceFormData(asset) {
    return {
      resources: asset ? [asset] : [],
      booking_asset: asset || null,
      asset_id: asset?.id,
      asset_name: asset?.name || asset?.id,
      name: asset?.display_name || asset?.name || asset?.id,
      description: asset?.name || asset?.id,
      map_id: asset?.map_id || asset?.id,
      zones: this._assetZones(asset?.zone)
    };
  }
  /** Org, region, building and level zones of a resource on `zone`. */
  _assetZones(zone) {
    return (zone ? unique([
      this._org.organisation.id,
      this._org.region?.id,
      zone.parent_id,
      zone.id
    ]) : [this._org.organisation.id, this._org.region?.id]).filter((_) => _);
  }
  async createGroupContainerBooking(form2, group_name, members, resource_type) {
    return this.saveGroupContainerBooking(form2, group_name, members, resource_type);
  }
  async saveGroupContainerBooking(form2, group_name, members, resource_type, id = "") {
    const group_members = mapGroupMembers(resource_type, members);
    const _a = form2, { group_members: _stale_group_members } = _a, form_data = __objRest(_a, ["group_members"]);
    const zones = unique([
      ...form2.zones || [],
      this._org.organisation.id,
      this._org.region?.id
    ].filter((_) => _));
    return saveBooking(new Booking(__spreadProps(__spreadValues(__spreadProps(__spreadValues({}, formBookingData(form_data)), {
      id,
      parent_id: "",
      asset_id: group_name,
      asset_name: "Group Booking"
    }), resource_type === "visitor" ? { attendees: members } : {}), {
      booking_type: "group",
      type: "group",
      description: form2.title || "Group Booking",
      title: form2.title || "Group Booking",
      user_name: form2.user?.name || form2.user_name,
      user_email: form2.user?.email || form2.user_email,
      user_id: form2.user?.id || form2.user_id,
      approved: this._settings.get("app.bookings.no_approval") === true && currentUserCanApprove(),
      zones,
      extension_data: __spreadProps(__spreadValues({}, formExtensionData(form2.extension_data)), {
        group: group_name,
        group_members,
        group_resource_type: resource_type
      })
    })).toJSON()).catch((error) => {
      this._loading.set("");
      throw error;
    });
  }
  _error_message(error) {
    return errorMessage(error) || i18n("BOOKINGS.ERROR_GENERIC");
  }
  _isPermissionError(error) {
    const status = error?.status || error?.error?.status;
    if (status === 403)
      return true;
    const message = this._error_message(error).toLowerCase();
    return /forbidden|permission|authori[sz]ed|not permitted/.test(message);
  }
  _clearSavedHostChange() {
    const user = currentUser();
    if (!user)
      return;
    const host_data = {
      user,
      user_id: user.id,
      user_email: user.email,
      user_name: user.name
    };
    this._patch(host_data, { emitEvent: false });
    const saved_form = JSON.parse(sessionStorage.getItem(STORAGE_KEYS.booking_form) || "{}");
    sessionStorage.setItem(STORAGE_KEYS.booking_form, JSON.stringify(__spreadValues(__spreadValues({}, saved_form), host_data)));
  }
  _invalid_field_mappings() {
    const resource_label = this._resource_type_label();
    return {
      date: "Start Time",
      duration: "Duration",
      asset_id: resource_label
    };
  }
  /** The form's booking type, or the flow type when the form has none. */
  _formBookingType() {
    return knownBookingType(this.model().booking_type) || this._options().type;
  }
  _resource_type_label() {
    switch (this._formBookingType()) {
      case "desk":
        return "Desk";
      case "parking":
        return "Parking Space";
      case "locker":
        return "Locker";
      case "room":
      case "group-event":
        return "Room";
      case "visitor":
        return "Visitor";
      default:
        return "Resource";
    }
  }
  async checkQuestions() {
    if (this._settings.get("app.desks.ignore_questions") !== false)
      return;
    const ref = this._dialog.open(DeskQuestionsModalComponent);
    const result = await new Promise((resolve) => {
      const subs = [];
      const finish = (value) => {
        subs.forEach((s) => s.unsubscribe());
        resolve(value);
      };
      subs.push(ref.componentInstance.event.subscribe((event) => {
        if (event?.reason === "done")
          finish(event);
      }));
      subs.push(ref.afterClosed().subscribe((event) => finish(event)));
    });
    if (result?.reason !== "done")
      throw "User cancelled";
    const form2 = ref.componentInstance.model();
    for (const key in form2) {
      if (form2[key])
        throw "User failed questionaire";
    }
    ref.close();
  }
  assignedResourceBooking(type) {
    const setting2 = this.settingForType(type, "assigned_resource_booking");
    return setting2 === "allow" || setting2 === "deny" || setting2 === "other_only" ? setting2 : "other_only";
  }
  /**
   * Enforce the assigned-resource restriction for any assignable resource type
   * (desk/parking/locker).
   *
   * `other_only` is evaluated here at submission so the form remains available
   * for booking on behalf of others. `deny` blanket-blocks the form in the UI.
   */
  async _checkAssignedResourceRestriction(user_email, type) {
    const is_self = !user_email || user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    const setting2 = this.assignedResourceBooking(type);
    if (setting2 === "allow")
      return true;
    if (setting2 === "deny" && !is_self && await this._computeHasAssignedResource(type)) {
      throw `You have an assigned ${type} and cannot book another ${type}.`;
    }
    if (await this._computeHasAssignedResource(type, user_email)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    return true;
  }
  /** Check if the given resource is available for the selected user to book */
  async _checkResourceAvailable({ id, asset_id, date, duration, all_day, user_email }, type) {
    if (!user_email)
      throw i18n("BOOKINGS.NO_USER");
    if (type === "group-event")
      return true;
    await this._checkAssignedResourceRestriction(user_email, type);
    const period = all_day ? this._allDayTimeRange(date) : { date, date_end: date + duration * 60 * 1e3 };
    const bookings = await queryBookings({
      period_start: getUnixTime(period.date),
      period_end: getUnixTime(period.date_end),
      type,
      email: user_email,
      limit: 1e3
    });
    const active_bookings = bookings.filter((_) => _.status !== "declined" && _.status !== "cancelled" && _.status !== "ended" && !_.rejected);
    if (active_bookings.find((_) => _.asset_id === asset_id && id !== _.id)) {
      throw i18n(asset_id.includes("@") ? "BOOKINGS.VISITOR_BOOKED" : "BOOKINGS.RESOURCE_BOOKED", { name: asset_id });
    }
    const is_self = user_email.toLowerCase() === currentUser()?.email?.toLowerCase();
    if (this.assignedResourceBooking(type) !== "allow" && active_bookings.some((_) => _.id !== id && _.extension_data?.is_assigned)) {
      throw `${is_self ? "You have" : "This user has"} an assigned ${type} and cannot book another ${type}.`;
    }
    const allowed_bookings = this._settings.get(`app.bookings.allowed_daily_${type}_count`) ?? 1;
    if (allowed_bookings > 0 && active_bookings.filter((_) => _.user_email.toLowerCase() === (user_email || currentUser()?.email || "").toLowerCase() && _.id !== id).length >= allowed_bookings) {
      const current = user_email === currentUser()?.email;
      throw i18n(current ? "BOOKINGS.CLASH_CURRENT_USER" : "BOOKINGS.CLASH_OTHER_USER", { name: user_email });
    }
    return true;
  }
  async _checkResourceRules(assets, date, duration, host) {
    const user = await this._loadBookingRulesHost(host);
    if (!assets?.length)
      return true;
    const rules = await this._holdNetwork(async () => {
      await this._whenSettled(this._booking_rules_resource);
      return this.booking_rules();
    });
    const resource_rules = assets?.filter((s) => s?.zone)?.map((space) => {
      const bld = this._org.buildings.find((b) => space.zone?.parent_id === b.id);
      return rulesForResource({
        date,
        duration,
        host: new User(user),
        resource: space
      }, rules[bld?.id] || []);
    });
    if (!resource_rules.every((_) => !_.hidden)) {
      throw i18n("BOOKINGS.RULES_HIDDEN", { type: this._options().type || "resource" }, assets.length);
    }
    return true;
  }
  _useCurrentUserForBookingRules() {
    return this._settings.get("app.bookings.force_current_user_for_booking_rules") === true || this._settings.get("app.basic_user_search") === false;
  }
  _bookingRulesHost(user) {
    const current_user2 = currentUser();
    if (this._useCurrentUserForBookingRules() || !user || user.email === current_user2.email) {
      return current_user2;
    }
    return user;
  }
  async _loadBookingRulesHost(host) {
    const current_user2 = currentUser();
    if (this._useCurrentUserForBookingRules() || current_user2.email === host) {
      return current_user2;
    }
    return uh(host).catch(() => ({ email: host }));
  }
  /**
   * Check for clashing bookings in a recurring booking series
   * @param booking The booking to check for clashes
   * @param type The booking type
   * @returns true if no clashes or user confirmed to continue
   * @throws Error if first instance clashes or clashes not allowed
   */
  async _checkRecurringClashes(booking, type) {
    if (!booking.recurrence_type || booking.recurrence_type === "none") {
      return true;
    }
    const temp_booking = new Booking(__spreadProps(__spreadValues({}, booking), {
      booking_type: type
    }));
    const clashes = await findBookingClashes(temp_booking, {
      include_clash_time: true
    });
    if (!clashes?.length) {
      return true;
    }
    const sorted_clashes = [...clashes].sort((a, b) => a.booking_start - b.booking_start);
    const booking_start_unix = Math.floor(booking.date / 1e3);
    const first_clash = sorted_clashes[0];
    const is_first_instance_clash = first_clash.booking_start === booking_start_unix;
    if (is_first_instance_clash) {
      throw i18n("BOOKINGS.FIRST_INSTANCE_CLASH");
    }
    const allow_clashes = this.setting("allow_recurring_instance_clashes") ?? true;
    if (!allow_clashes) {
      throw i18n("BOOKINGS.RECURRING_CLASHES_NOT_ALLOWED", {
        count: clashes.length
      });
    }
    const result = await openRecurringClashModal({ clashes: sorted_clashes }, this._dialog);
    if (result?.reason !== "done") {
      throw "User cancelled";
    }
    return true;
  }
  async _recurringBookedResourceList(resources, zones, value) {
    const effective_timezone = this.timezone || value.timezone;
    const booking = new Booking(__spreadProps(__spreadValues({}, value), {
      booking_type: "desk",
      zones: [zones],
      asset_ids: resources.map((_) => _.id),
      timezone: effective_timezone
    }));
    const key = JSON.stringify({
      date: booking.date,
      duration: booking.duration,
      timezone: effective_timezone,
      recurrence_type: booking.recurrence_type,
      recurrence_end: booking.recurrence_end,
      zones,
      asset_ids: resources.map((_) => _.id)
    });
    const existing = this._recurring_clash_requests.get(key);
    if (existing)
      return existing;
    const request = findBookingClashes(booking).then((ids) => ids).catch(() => []).finally(() => this._recurring_clash_requests.delete(key));
    this._recurring_clash_requests.set(key, request);
    return request;
  }
  /** Load the locker resources for the active building or region */
  _loadLockerResources() {
    const use_region = this._settings.get("app.use_region");
    const scope_id = use_region ? this._org.region?.id : this._org.building?.id;
    return loadLockerResources(this._org, scope_id);
  }
  /** Load parking spaces for the active building or region. */
  loadParkingResources() {
    return loadParkingResources(this._org, this._settings.get("app.use_region"));
  }
  /** Load desk resources from the assets API for the active scope. */
  async loadDeskResources() {
    const desks = await loadDeskResources(this._org, this._settings.get("app.use_region"));
    this._migrateFavouriteDesks(desks);
    return desks;
  }
  /**
   * Favourites saved before desks moved to assets reference the old desk id,
   * which migrated desk assets keep as their `place_id` or map id. Point
   * them at the asset.
   */
  _migrateFavouriteDesks(desks) {
    const favourites = this._settings.get(SETTING_KEYS.FAVORITE_DESKS) || [];
    if (!favourites.length)
      return;
    const updated = unique(favourites.map((id) => findDeskByLegacyId(desks, id)?.id || id));
    if (updated.join() === favourites.join())
      return;
    this._settings.saveUserSetting(SETTING_KEYS.FAVORITE_DESKS, updated);
  }
  /** Load the resources of the given metadata `type`, e.g. `desks`. */
  async loadResourceList(type) {
    if (type === "desks" && this._settings.get("app.desks.use_assets")) {
      return this.loadDeskResources();
    }
    return loadMetadataResources(this._org, type, this._settings.get("app.use_region"));
  }
  /** Find resources near the map element `id`. Kept on the service so tests
   * can stub map lookups. */
  _getNearbyResources(map_url, id, resources, count, reserved_ids = /* @__PURE__ */ new Set()) {
    return nearbyResources(map_url, id, resources, count, reserved_ids);
  }
  async _resolveDeskGroupResources(group_members, form2, existing_siblings = []) {
    const available_resources = await this.listAvailableResources();
    const all_resources = await this.listResources();
    const preferred_id = `${form2.map_id || form2.asset_id || ""}`;
    const existing_map = {};
    for (const booking of existing_siblings) {
      if (booking.user_email)
        existing_map[booking.user_email] = booking;
    }
    const selected_resource = findResourceById(available_resources, preferred_id);
    const preferred_resource = selected_resource || (existing_siblings.length ? findResourceById(all_resources, preferred_id) : null);
    if (!selected_resource && !existing_siblings.length) {
      throw i18n("BOOKINGS.DESK_AVAILABLE_ERROR");
    }
    const anchor_resource = preferred_resource || findResourceById(all_resources, existing_siblings[0]?.asset_id || "");
    const level = this._org.levelWithID([anchor_resource?.zone?.id]);
    if (!level?.map_id) {
      throw i18n("BOOKINGS.GROUP_MAP_UNAVAILABLE");
    }
    const reserved_ids = /* @__PURE__ */ new Set();
    const resolved = group_members.map((member) => {
      const booking = existing_map[member.email];
      const resource_id = member.email === currentUser().email ? preferred_id : booking?.asset_id || "";
      const resource2 = findResourceById(all_resources, resource_id) || findResourceById(available_resources, resource_id);
      if (!resource2 || resourceReserved(resource2, reserved_ids)) {
        return null;
      }
      reserveResource(resource2, reserved_ids);
      return resource2;
    });
    const missing_count = resolved.filter((_) => !_).length;
    const nearby_resources = missing_count ? await this._getNearbyResources(level.map_id, anchor_resource?.map_id || anchor_resource?.id || preferred_id, available_resources, missing_count, reserved_ids) : [];
    let available = resolved.filter((_) => !!_).length;
    let nearby_index = 0;
    const final_resources = resolved.map((resource2) => {
      if (resource2)
        return resource2;
      const next_resource = nearby_resources[nearby_index++];
      if (next_resource)
        available++;
      return next_resource || null;
    });
    if (final_resources.some((_) => !_)) {
      throw i18n("BOOKINGS.GROUP_INSUFFICIENT_RESOURCES", {
        available,
        members: group_members.length
      }, available);
    }
    return final_resources;
  }
  static {
    this.\u0275fac = function BookingFormService_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _BookingFormService)();
    };
  }
  static {
    this.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _BookingFormService, factory: _BookingFormService.\u0275fac, providedIn: "root" });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookingFormService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], () => [], null);
})();

export {
  MapViewer,
  MatAutocomplete,
  MatAutocompleteOrigin,
  MatAutocompleteTrigger,
  MatAutocompleteModule,
  searchStaff,
  searchStaffByEmailPrefix,
  showStaff,
  saveEvent,
  removeEvent,
  querySpaceAvailability,
  eventSpaceIds,
  findEventClashes,
  AssetStateService,
  newBookingFromCalendarEvent,
  bookingLineItems,
  cateringLineItems,
  PaymentsService,
  CalendarService,
  generateCalendarFileLink,
  generateGoogleCalendarLink,
  generateMicrosoftCalendarLink,
  openRecurringClashModal,
  DurationFieldComponent,
  UserSearchFieldComponent,
  queryParkingSpacesForZones,
  queryParkingUsers,
  queryDeskAssets,
  queryDeskAssetsInZone,
  deskFromAsset,
  assignedDeskBuilding,
  BookingFormService
};
//# debugId=67c38fb7-4572-5550-bf69-753242f9f0e0
//# sourceMappingURL=chunk-HW2WMIAS.js.map
