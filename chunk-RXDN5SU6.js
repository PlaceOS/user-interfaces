import {
  CounterComponent
} from "./chunk-EMQPUDAM.js";
import {
  MatMenu,
  MatMenuItem,
  MatMenuModule,
  MatMenuTrigger
} from "./chunk-M3IVCANT.js";
import {
  DateFieldComponent
} from "./chunk-GOYNY2WP.js";
import {
  MatSelect,
  MatSelectModule,
  MatSelectTrigger
} from "./chunk-ZEK4Y6XL.js";
import {
  SettingsToggleComponent
} from "./chunk-HSYNQBVJ.js";
import {
  MatInput,
  MatInputModule
} from "./chunk-5PUHOZFV.js";
import {
  FormField,
  MatError,
  MatFormField,
  MatFormFieldModule
} from "./chunk-CIOF3O5C.js";
import {
  fromUnixTime,
  playlistScheduleExpiryLabel
} from "./chunk-IROTSDQV.js";
import {
  TranslatePipe
} from "./chunk-2MCN5NQW.js";
import {
  MatTooltip,
  MatTooltipModule
} from "./chunk-K5RUP4DL.js";
import {
  AsyncHandler,
  TIMEZONES_IANA,
  getUnixTime,
  isAfter,
  isBefore,
  settingSignal
} from "./chunk-SVCYCBW2.js";
import {
  CommonModule,
  Component,
  DatePipe,
  DefaultValueAccessor,
  FormsModule,
  IconComponent,
  Injector,
  Input,
  LOCAL_TIMEZONE,
  LocaleService,
  MatOption,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  Output,
  ViewChild,
  addMinutes,
  afterNextRender,
  computed,
  differenceInMinutes,
  endOfDay,
  endOfDayInTimezone,
  format,
  formatDuration,
  formatTimeInTimezone,
  forwardRef,
  fromZonedTime,
  getTimeInTimezone,
  getTimezoneOffsetString,
  i18n,
  inject,
  input,
  markUserDateChange,
  model,
  output,
  roundToNearestMinutes,
  set,
  setClassMetadata,
  setTimeInTimezone,
  signal,
  startOfDay,
  startOfDayInTimezone,
  startOfMinute,
  toZonedTime,
  viewChild,
  ɵsetClassDebugInfo,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵariaProperty,
  ɵɵattribute,
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
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵqueryAdvance,
  ɵɵreference,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1,
  ɵɵtextInterpolate2,
  ɵɵtextInterpolate3,
  ɵɵtwoWayBindingSet,
  ɵɵtwoWayListener,
  ɵɵtwoWayProperty,
  ɵɵviewQuerySignal
} from "./chunk-JABNH3I5.js";
import {
  __spreadProps,
  __spreadValues
} from "./chunk-653SOEEV.js";

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

// libs/form-fields/src/lib/duration-field.component.ts
var _c02 = ["*"];
var _forTrack02 = ($index, $item) => $item.id;
function DurationFieldComponent_Conditional_0_Conditional_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 10);
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
function DurationFieldComponent_Conditional_0_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11);
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
    \u0275\u0275elementStart(0, "div", 6)(1, "input", 7, 1);
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
    \u0275\u0275elementStart(3, "button", 8)(4, "icon", 9);
    \u0275\u0275text(5, "arrow_drop_down");
    \u0275\u0275elementEnd()()();
    \u0275\u0275conditionalCreate(6, DurationFieldComponent_Conditional_0_Conditional_6_Template, 3, 5, "div", 10);
    \u0275\u0275conditionalCreate(7, DurationFieldComponent_Conditional_0_Conditional_7_Template, 2, 1, "div", 11);
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275advance();
    \u0275\u0275property("value", ctx_r2.end_time_value())("disabled", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275attribute("aria-invalid", !!ctx_r2.end_time_error());
    \u0275\u0275advance(2);
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 6 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.end_time_error() ? 7 : -1);
  }
}
function DurationFieldComponent_Conditional_1_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
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
    \u0275\u0275elementStart(0, "button", 12)(1, "div", 13)(2, "div", 14);
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_Conditional_1_Conditional_5_Template, 3, 5, "div", 15);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "icon", 9);
    \u0275\u0275text(7, "arrow_drop_down");
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r2 = \u0275\u0275nextContext();
    const menu_r4 = \u0275\u0275reference(3);
    \u0275\u0275classProp("opacity-30", ctx_r2.disabled() || ctx_r2.no_options());
    \u0275\u0275property("disabled", ctx_r2.disabled() || ctx_r2.no_options())("matMenuTriggerFor", menu_r4);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate3(" ", ctx_r2.selected()?.date ? \u0275\u0275pipeBind2(4, 8, ctx_r2.selected()?.date, ctx_r2.selected().id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : ctx_r2.duration_options()?.length ? "" : "No duration options available", "", ctx_r2.selected()?.name, "", ctx_r2.selected()?.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 5 : -1);
  }
}
function DurationFieldComponent_For_5_Conditional_2_Conditional_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 15);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext(2).$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, option_r6.date, ctx_r2.time_format() + " (z)", ctx_r2.tz()), " ");
  }
}
function DurationFieldComponent_For_5_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 18)(1, "div", 14);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "date");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(4, DurationFieldComponent_For_5_Conditional_2_Conditional_4_Template, 3, 5, "div", 15);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r6 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate3(" ", option_r6.date ? \u0275\u0275pipeBind2(3, 4, option_r6.date, option_r6.id >= 24 * 60 ? "mediumDate" : ctx_r2.time_format()) + " (" : "", "", option_r6.name, "", option_r6.date ? ")" : "", " ");
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r2.timezone() && ctx_r2.tz() ? 4 : -1);
  }
}
function DurationFieldComponent_For_5_Conditional_5_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "icon", 19);
    \u0275\u0275text(1, " done ");
    \u0275\u0275elementEnd();
  }
}
function DurationFieldComponent_For_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 16);
    \u0275\u0275listener("click", function DurationFieldComponent_For_5_Template_button_click_0_listener() {
      const option_r6 = \u0275\u0275restoreView(_r5).$implicit;
      const ctx_r2 = \u0275\u0275nextContext();
      ctx_r2.setValue(option_r6.id);
      return \u0275\u0275resetView(ctx_r2.touch());
    });
    \u0275\u0275elementStart(1, "div", 17);
    \u0275\u0275conditionalCreate(2, DurationFieldComponent_For_5_Conditional_2_Template, 5, 7, "div", 18);
    \u0275\u0275elementStart(3, "div");
    \u0275\u0275text(4);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(5, DurationFieldComponent_For_5_Conditional_5_Template, 2, 0, "icon", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const option_r6 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275attribute("data-duration", option_r6.id);
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r2.force() ? 2 : -1);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(ctx_r2.force());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r2.selected()?.id === option_r6.id ? 5 : -1);
  }
}
function DurationFieldComponent_ForEmpty_6_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 5);
    \u0275\u0275text(1, "No duration options to select");
    \u0275\u0275elementEnd();
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
    this.force = input(
      void 0,
      ...ngDevMode ? [{ debugName: "force" }] : (
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
      this.end_time_error.set("Enter an end time after the start time and within the allowed duration.");
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
    this._updateOption();
  }
  _setDurationOptions() {
    this.duration_options.set(this.generateDurationOptions(this.max(), this.min(), this.step()));
  }
  setDisabledState(disabled) {
    this.disabled.set(disabled);
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
  _updateOption() {
    const duration_options = this.duration_options();
    if (!duration_options?.length)
      return;
    const idx = duration_options.findIndex((_) => _.id === this.duration());
    if (idx < 0)
      this.setValue(duration_options[0]?.id ?? this.min());
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
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _DurationFieldComponent, selectors: [["a-duration-field"], ["duration-field"]], inputs: { max: [1, "max"], min: [1, "min"], step: [1, "step"], time: [1, "time"], disabled: [1, "disabled"], custom_options: [1, "custom_options"], force: [1, "force"], use_24hr: [1, "use_24hr"], timezone: [1, "timezone"], end_time: [1, "end_time"], allow_end_time: [1, "allow_end_time"] }, outputs: { disabled: "disabledChange" }, features: [\u0275\u0275ProvidersFeature([
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => _DurationFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => _DurationFieldComponent),
        multi: true
      }
    ]), \u0275\u0275NgOnChangesFeature], ngContentSelectors: _c02, decls: 9, vars: 2, consts: [["menu", "matMenu"], ["end_input", ""], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "opacity-30", "matMenuTriggerFor"], ["xPosition", "before", 1, "max-h-60", "min-w-[18rem]"], ["type", "button", "mat-menu-item", "", 1, "text-left"], ["mat-menu-item", "", "disabled", ""], [1, "border-neutral", "flex", "h-12", "w-full", "items-center", "rounded-sm", "border"], ["type", "time", "aria-label", "End time", 1, "h-full", "min-w-0", "flex-1", "border-0", "bg-transparent", "px-4", 3, "change", "blur", "value", "disabled"], ["type", "button", "end-time-options", "", "aria-label", "Choose duration", 1, "flex", "h-full", "w-12", "shrink-0", "items-center", "justify-center", 3, "disabled", "matMenuTriggerFor"], [1, "text-2xl"], [1, "text-xs", "opacity-30"], ["role", "alert", 1, "text-error", "text-sm"], ["type", "button", "duration-field", "", "matRipple", "", 1, "border-neutral", "flex", "h-12", "w-full", "items-center", "justify-between", "rounded-sm", "border", "px-2", 3, "disabled", "matMenuTriggerFor"], [1, "flex", "w-1/2", "flex-1", "flex-col", "px-2", "text-left", "leading-tight"], [1, "truncate"], [1, "truncate", "text-xs", "opacity-30"], ["type", "button", "mat-menu-item", "", 1, "text-left", 3, "click"], [1, "flex", "items-center", "justify-between"], [1, "flex", "flex-col", "leading-tight"], [1, "ml-2", "text-2xl"]], template: function DurationFieldComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275projectionDef();
        \u0275\u0275conditionalCreate(0, DurationFieldComponent_Conditional_0_Template, 8, 9)(1, DurationFieldComponent_Conditional_1_Template, 8, 11, "button", 2);
        \u0275\u0275elementStart(2, "mat-menu", 3, 0);
        \u0275\u0275repeaterCreate(4, DurationFieldComponent_For_5_Template, 6, 4, "button", 4, _forTrack02, false, DurationFieldComponent_ForEmpty_6_Template, 2, 0, "div", 5);
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(7, "mat-error");
        \u0275\u0275projection(8);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275conditional(ctx.allow_end_time() && ctx.time() != null && !ctx.force() ? 0 : 1);
        \u0275\u0275advance(4);
        \u0275\u0275repeater(ctx.duration_options());
      }
    }, dependencies: [MatMenuModule, MatMenu, MatMenuItem, MatMenuTrigger, MatFormFieldModule, MatError, CommonModule, IconComponent, DatePipe], styles: ["\n[_nghost-%COMP%] {\n  width: 100%;\n}\n.no-subscript[_nghost-%COMP%]   mat-error[_ngcontent-%COMP%] {\n  display: none;\n}\nmat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */"] });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(DurationFieldComponent, [{
    type: Component,
    args: [{ selector: "a-duration-field,duration-field", template: `
        @if (allow_end_time() && time() != null && !force()) {
            <div
                class="border-neutral flex h-12 w-full items-center rounded-sm border"
                [class.opacity-30]="disabled() || no_options()"
            >
                <input
                    #end_input
                    type="time"
                    aria-label="End time"
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
                    aria-label="Choose duration"
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
                                  : 'No duration options available'
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
            @for (option of duration_options(); track option.id) {
                <button
                    type="button"
                    mat-menu-item
                    class="text-left"
                    [attr.data-duration]="option.id"
                    (click)="setValue(option.id); touch()"
                >
                    <div class="flex items-center justify-between">
                        @if (!force()) {
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
                        }
                        <div>{{ force() }}</div>
                        @if (selected()?.id === option.id) {
                            <icon class="ml-2 text-2xl"> done </icon>
                        }
                    </div>
                </button>
            } @empty {
                <div mat-menu-item disabled>No duration options to select</div>
            }
        </mat-menu>
        <mat-error><ng-content /></mat-error>
    `, providers: [
      {
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      },
      {
        provide: NG_VALIDATORS,
        useExisting: forwardRef(() => DurationFieldComponent),
        multi: true
      }
    ], imports: [MatMenuModule, MatFormFieldModule, CommonModule, IconComponent], styles: ["/* angular:styles/component:css;1a90da3d4d9819e7500633b134638efb235f4203ba84410ba53431dd8a393b18;/home/runner/work/user-interfaces/user-interfaces/libs/form-fields/src/lib/duration-field.component.ts */\n:host {\n  width: 100%;\n}\n:host.no-subscript mat-error {\n  display: none;\n}\nmat-form-field {\n  width: 100%;\n}\n/*# sourceMappingURL=duration-field.component.css.map */\n"] }]
  }], null, { max: [{ type: Input, args: [{ isSignal: true, alias: "max", required: false }] }], min: [{ type: Input, args: [{ isSignal: true, alias: "min", required: false }] }], step: [{ type: Input, args: [{ isSignal: true, alias: "step", required: false }] }], time: [{ type: Input, args: [{ isSignal: true, alias: "time", required: false }] }], disabled: [{ type: Input, args: [{ isSignal: true, alias: "disabled", required: false }] }, { type: Output, args: ["disabledChange"] }], custom_options: [{ type: Input, args: [{ isSignal: true, alias: "custom_options", required: false }] }], force: [{ type: Input, args: [{ isSignal: true, alias: "force", required: false }] }], use_24hr: [{ type: Input, args: [{ isSignal: true, alias: "use_24hr", required: false }] }], timezone: [{ type: Input, args: [{ isSignal: true, alias: "timezone", required: false }] }], end_time: [{ type: Input, args: [{ isSignal: true, alias: "end_time", required: false }] }], allow_end_time: [{ type: Input, args: [{ isSignal: true, alias: "allow_end_time", required: false }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(DurationFieldComponent, { className: "DurationFieldComponent", filePath: "libs/form-fields/src/lib/duration-field.component.ts", lineNumber: 203 });
})();

// apps/signage-manager/src/app/shared/playlist-schedule-form.component.ts
var _c03 = (a0) => ({ number: a0 });
var _c1 = () => ({ standalone: true });
var _c2 = (a0) => [a0];
var _forTrack03 = ($index, $item) => $item.value;
function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_For_15_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const zone_r5 = ctx.$implicit;
    \u0275\u0275property("value", zone_r5);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(zone_r5);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Conditional_16_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 25);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "COMMON.TIMEZONE_EMPTY"));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "label", 20);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(3, "mat-form-field", 12)(4, "mat-select", 21, 0);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template_mat_select_ngModelChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.timezone, $event) || (ctx_r1.timezone = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("openedChange", function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template_mat_select_openedChange_4_listener($event) {
      \u0275\u0275restoreView(_r1);
      const timezone_select_r3 = \u0275\u0275reference(5);
      const timezone_filter_r4 = \u0275\u0275reference(11);
      const ctx_r1 = \u0275\u0275nextContext(2);
      ctx_r1.timezone_search.set("");
      return \u0275\u0275resetView($event && ctx_r1.focusTimezoneSearch(timezone_select_r3, timezone_filter_r4));
    });
    \u0275\u0275elementStart(7, "mat-select-trigger");
    \u0275\u0275text(8);
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(9, "div", 22)(10, "input", 23, 1);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275twoWayListener("ngModelChange", function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template_input_ngModelChange_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      \u0275\u0275twoWayBindingSet(ctx_r1.timezone_search, $event) || (ctx_r1.timezone_search = $event);
      return \u0275\u0275resetView($event);
    });
    \u0275\u0275listener("keydown", function PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template_input_keydown_10_listener($event) {
      \u0275\u0275restoreView(_r1);
      const ctx_r1 = \u0275\u0275nextContext(2);
      return \u0275\u0275resetView(ctx_r1.onTimezoneSearchKeydown($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(14, PlaylistScheduleFormComponent_Conditional_14_Conditional_10_For_15_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275conditionalCreate(16, PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Conditional_16_Template, 3, 3, "mat-option", 25);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "COMMON.TIMEZONE"));
    \u0275\u0275advance(3);
    \u0275\u0275ariaProperty("aria-label", \u0275\u0275pipeBind1(6, 12, "COMMON.TIMEZONE"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.timezone);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(18, _c1));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(ctx_r1.timezone());
    \u0275\u0275advance(2);
    \u0275\u0275property("placeholder", \u0275\u0275pipeBind1(12, 14, "COMMON.SEARCH"));
    \u0275\u0275twoWayProperty("ngModel", ctx_r1.timezone_search);
    \u0275\u0275property("ngModelOptions", \u0275\u0275pureFunction0(19, _c1));
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(13, 16, "SIGNAGE_MANAGER.SEARCH_TIMEZONES"));
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(ctx_r1.timezone_options());
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.filtered_timezones().length ? 16 : -1);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_11_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "p", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.SCHEDULE_TIMEZONE_HINT"), " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_12_For_10_Template(rf, ctx) {
  if (rf & 1) {
    const _r6 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 31);
    \u0275\u0275listener("ngModelChange", function PlaylistScheduleFormComponent_Conditional_14_Conditional_12_For_10_Template_a_time_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.schedule().play_at().value.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("timezone", ctx_r1.timezone())("ngModel", ctx_r1.value().play_at)("ngModelOptions", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275control();
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_12_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 26)(1, "div", 27)(2, "label");
    \u0275\u0275text(3);
    \u0275\u0275pipe(4, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(5, "a-date-field", 28);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "div", 27)(7, "label");
    \u0275\u0275text(8, "\xA0");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(9, PlaylistScheduleFormComponent_Conditional_14_Conditional_12_For_10_Template, 1, 4, "a-time-field", 29, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd()();
    \u0275\u0275elementStart(11, "label");
    \u0275\u0275text(12);
    \u0275\u0275pipe(13, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(14, "a-duration-field", 30);
    \u0275\u0275controlCreate();
    \u0275\u0275element(15, "settings-toggle", 18);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(4, 13, "SIGNAGE_MANAGER.PLAY_AT"));
    \u0275\u0275advance(2);
    \u0275\u0275property("timezone", ctx_r1.timezone())("formField", ctx_r1.schedule().play_at);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275repeater(\u0275\u0275pureFunction1(19, _c2, ctx_r1.timezone()));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(13, 15, "SIGNAGE_MANAGER.PLAY_PERIOD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("timezone", ctx_r1.timezone())("formField", ctx_r1.schedule().play_period)("min", 15)("max", 24 * 60)("time", ctx_r1.value().play_at)("allow_end_time", true)("custom_options", \u0275\u0275pureFunction1(21, _c2, ctx_r1.value().play_period));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 17, "SIGNAGE_MANAGER.TAKEOVER_PLAYBACK"))("formField", ctx_r1.schedule().play_takeover);
    \u0275\u0275control();
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_27_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 41);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.CUSTOM_SCHEDULE"));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_28_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "label", 42)(1, "div");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(4, "a-counter", 51);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 5, ctx_r1.value().recurrence_type === "minutes" ? "SIGNAGE_MANAGER.MINUTES_BETWEEN_PLAYS" : "SIGNAGE_MANAGER.HOURS_BETWEEN_PLAYS"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275property("min", 1)("max", ctx_r1.value().recurrence_type === "minutes" ? 59 : 23)("formField", ctx_r1.schedule().recurrence_interval);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(5, 7, "SIGNAGE_MANAGER.SCHEDULE_INTERVAL_ARIA"));
    \u0275\u0275control();
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_29_For_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r7 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "button", 55);
    \u0275\u0275listener("click", function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_29_For_6_Template_button_click_0_listener() {
      const day_r8 = \u0275\u0275restoreView(_r7).$implicit;
      const ctx_r1 = \u0275\u0275nextContext(4);
      return \u0275\u0275resetView(ctx_r1.toggleRecurrenceWeekday(day_r8.value));
    });
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r8 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275classProp("border-primary", ctx_r1.isRecurrenceWeekdaySelected(day_r8.value))("bg-primary", ctx_r1.isRecurrenceWeekdaySelected(day_r8.value))("text-primary-content", ctx_r1.isRecurrenceWeekdaySelected(day_r8.value))("border-base-300", !ctx_r1.isRecurrenceWeekdaySelected(day_r8.value));
    \u0275\u0275attribute("aria-pressed", ctx_r1.isRecurrenceWeekdaySelected(day_r8.value));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", ctx_r1.weekdayLabel(day_r8.value, "EEE"), " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_29_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "div", 52);
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 53);
    \u0275\u0275repeaterCreate(5, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_29_For_6_Template, 2, 10, "button", 54, _forTrack03);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(3, 1, "SIGNAGE_MANAGER.PLAY_ON"), " ");
    \u0275\u0275advance(3);
    \u0275\u0275repeater(ctx_r1.weekday_options);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_30_For_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r9 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", day_r9);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ordinal(day_r9));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_30_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 12)(5, "mat-select", 56);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275repeaterCreate(7, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_30_For_8_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 3, "SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.schedule().recurrence_day_of_month);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(6, 5, "SIGNAGE_MANAGER.DAYS_OF_MONTH_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.month_days);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_For_9_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const week_r10 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", week_r10);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.ordinal(week_r10));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_For_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "mat-option", 24);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const day_r11 = ctx.$implicit;
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275property("value", day_r11.value);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r1.weekdayLabel(day_r11.value, "EEEE"));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div")(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "div", 57)(5, "mat-form-field", 12)(6, "mat-select", 56);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275repeaterCreate(8, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_For_9_Template, 2, 2, "mat-option", 24, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(10, "mat-form-field", 12)(11, "mat-select", 56);
    \u0275\u0275pipe(12, "translate");
    \u0275\u0275repeaterCreate(13, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_For_14_Template, 2, 2, "mat-option", 24, _forTrack03);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, "SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON"));
    \u0275\u0275advance(4);
    \u0275\u0275property("formField", ctx_r1.schedule().recurrence_week_of_month);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 7, "SIGNAGE_MANAGER.WEEK_OF_MONTH_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.week_of_month_options);
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.schedule().recurrence_weekdays);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(12, 9, "SIGNAGE_MANAGER.DAYS_OF_WEEK_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.weekday_options);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_32_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 43);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.ADVANCED_SCHEDULE_WARNING"), " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Conditional_8_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 60);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "date");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(4);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind3(2, 1, ctx_r1.recurringPlayStartTime(), "h : mm a (z)", ctx_r1.start_timezone_offset()), " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Template(rf, ctx) {
  if (rf & 1) {
    const _r12 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "div", 45)(1, "label");
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(4, "mat-form-field", 58)(5, "input", 59, 2);
    \u0275\u0275pipe(7, "translate");
    \u0275\u0275listener("input", function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Template_input_input_5_listener() {
      \u0275\u0275restoreView(_r12);
      const start_input_r13 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.setPlayStart(start_input_r13.value));
    })("blur", function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Template_input_blur_5_listener() {
      \u0275\u0275restoreView(_r12);
      const start_input_r13 = \u0275\u0275reference(6);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(start_input_r13.value = ctx_r1.recurringStartInputTime());
    });
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(8, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Conditional_8_Template, 3, 5, "div", 60);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 4, "SIGNAGE_MANAGER.START"));
    \u0275\u0275advance(3);
    \u0275\u0275property("value", ctx_r1.recurringStartInputTime());
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(7, 6, "SIGNAGE_MANAGER.PLAY_PERIOD_START_ARIA"));
    \u0275\u0275advance(3);
    \u0275\u0275conditional(ctx_r1.start_timezone_offset() ? 8 : -1);
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_For_47_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 50);
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const play_time_r14 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", play_time_r14, " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_ForEmpty_48_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 16);
    \u0275\u0275text(1);
    \u0275\u0275pipe(2, "translate");
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    \u0275\u0275advance();
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(2, 1, "SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES"), " ");
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 32)(1, "div", 33)(2, "div", 34)(3, "label");
    \u0275\u0275text(4);
    \u0275\u0275pipe(5, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(6, "mat-form-field", 12)(7, "mat-select", 13);
    \u0275\u0275pipe(8, "translate");
    \u0275\u0275elementStart(9, "mat-option", 35);
    \u0275\u0275text(10);
    \u0275\u0275pipe(11, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(12, "mat-option", 36);
    \u0275\u0275text(13);
    \u0275\u0275pipe(14, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(15, "mat-option", 37);
    \u0275\u0275text(16);
    \u0275\u0275pipe(17, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(18, "mat-option", 38);
    \u0275\u0275text(19);
    \u0275\u0275pipe(20, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(21, "mat-option", 39);
    \u0275\u0275text(22);
    \u0275\u0275pipe(23, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(24, "mat-option", 40);
    \u0275\u0275text(25);
    \u0275\u0275pipe(26, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(27, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_27_Template, 3, 3, "mat-option", 41);
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275conditionalCreate(28, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_28_Template, 6, 9, "label", 42);
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(29, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_29_Template, 7, 3, "div")(30, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_30_Template, 9, 7, "div")(31, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_31_Template, 15, 11, "div")(32, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_32_Template, 3, 3, "div", 43);
    \u0275\u0275elementStart(33, "div", 44);
    \u0275\u0275conditionalCreate(34, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Conditional_34_Template, 9, 8, "div", 45);
    \u0275\u0275elementStart(35, "div", 46)(36, "label");
    \u0275\u0275text(37);
    \u0275\u0275pipe(38, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275element(39, "a-duration-field", 47);
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd()();
    \u0275\u0275element(40, "settings-toggle", 18);
    \u0275\u0275pipe(41, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(42, "div", 48)(43, "div", 49);
    \u0275\u0275text(44);
    \u0275\u0275pipe(45, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275repeaterCreate(46, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_For_47_Template, 2, 1, "div", 50, \u0275\u0275repeaterTrackByIdentity, false, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_ForEmpty_48_Template, 3, 3, "div", 16);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(5, 25, "SIGNAGE_MANAGER.REPEAT"));
    \u0275\u0275advance(3);
    \u0275\u0275property("formField", ctx_r1.schedule().recurrence_type);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(8, 27, "SIGNAGE_MANAGER.REPEAT_PATTERN_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(11, 29, "SIGNAGE_MANAGER.EVERY_FEW_HOURS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 31, "SIGNAGE_MANAGER.EVERY_DAY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 33, "SIGNAGE_MANAGER.WEEKDAYS"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(20, 35, "SIGNAGE_MANAGER.WEEKLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(23, 37, "SIGNAGE_MANAGER.MONTHLY"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(26, 39, "SIGNAGE_MANAGER.MONTHLY_BY_WEEKDAY"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.value().recurrence_type === "custom" ? 27 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.isIntervalRecurrence() ? 28 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.value().recurrence_type === "weekly" ? 29 : ctx_r1.value().recurrence_type === "monthly" ? 30 : ctx_r1.value().recurrence_type === "monthly_weekday" ? 31 : ctx_r1.value().recurrence_type === "custom" ? 32 : -1);
    \u0275\u0275advance(5);
    \u0275\u0275conditional(ctx_r1.showRecurringStartTime() ? 34 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(38, 41, "SIGNAGE_MANAGER.PLAY_PERIOD"));
    \u0275\u0275advance(2);
    \u0275\u0275property("timezone", ctx_r1.timezone())("formField", ctx_r1.schedule().play_period)("min", 15)("max", 24 * 60)("time", ctx_r1.recurringPlayStartTime())("allow_end_time", true)("custom_options", \u0275\u0275pureFunction1(47, _c2, ctx_r1.value().play_period));
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275property("label", \u0275\u0275pipeBind1(41, 43, "SIGNAGE_MANAGER.TAKEOVER_PLAYBACK"))("formField", ctx_r1.schedule().play_takeover);
    \u0275\u0275control();
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(45, 45, "SIGNAGE_MANAGER.UPCOMING_PLAY_TIMES"), " ");
    \u0275\u0275advance(2);
    \u0275\u0275repeater(ctx_r1.nextCronPlayTimes());
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_17_For_3_Template(rf, ctx) {
  if (rf & 1) {
    const _r15 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "a-time-field", 63);
    \u0275\u0275listener("ngModelChange", function PlaylistScheduleFormComponent_Conditional_14_Conditional_17_For_3_Template_a_time_field_ngModelChange_0_listener($event) {
      \u0275\u0275restoreView(_r15);
      const ctx_r1 = \u0275\u0275nextContext(3);
      return \u0275\u0275resetView(ctx_r1.schedule().valid_until().value.set($event));
    });
    \u0275\u0275elementEnd();
    \u0275\u0275controlCreate();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(3);
    \u0275\u0275property("timezone", ctx_r1.timezone())("ngModel", ctx_r1.value().valid_until)("ngModelOptions", \u0275\u0275pureFunction0(3, _c1));
    \u0275\u0275control();
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Conditional_17_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 19);
    \u0275\u0275element(1, "a-date-field", 61);
    \u0275\u0275controlCreate();
    \u0275\u0275repeaterCreate(2, PlaylistScheduleFormComponent_Conditional_14_Conditional_17_For_3_Template, 1, 4, "a-time-field", 62, \u0275\u0275repeaterTrackByIdentity);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("timezone", ctx_r1.timezone())("formField", ctx_r1.schedule().valid_until);
    \u0275\u0275control();
    \u0275\u0275advance();
    \u0275\u0275repeater(\u0275\u0275pureFunction1(2, _c2, ctx_r1.timezone()));
  }
}
function PlaylistScheduleFormComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "div", 11)(1, "mat-form-field", 12)(2, "mat-select", 13);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275elementStart(4, "mat-option", 14);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275elementEnd();
    \u0275\u0275elementStart(7, "mat-option", 15);
    \u0275\u0275text(8);
    \u0275\u0275pipe(9, "translate");
    \u0275\u0275elementEnd()();
    \u0275\u0275controlCreate();
    \u0275\u0275elementEnd();
    \u0275\u0275conditionalCreate(10, PlaylistScheduleFormComponent_Conditional_14_Conditional_10_Template, 17, 20);
    \u0275\u0275conditionalCreate(11, PlaylistScheduleFormComponent_Conditional_14_Conditional_11_Template, 3, 3, "p", 16);
    \u0275\u0275conditionalCreate(12, PlaylistScheduleFormComponent_Conditional_14_Conditional_12_Template, 17, 23)(13, PlaylistScheduleFormComponent_Conditional_14_Conditional_13_Template, 49, 49);
    \u0275\u0275elementStart(14, "div", 17);
    \u0275\u0275element(15, "settings-toggle", 18);
    \u0275\u0275pipe(16, "translate");
    \u0275\u0275controlCreate();
    \u0275\u0275conditionalCreate(17, PlaylistScheduleFormComponent_Conditional_14_Conditional_17_Template, 4, 4, "div", 19);
    \u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const ctx_r1 = \u0275\u0275nextContext();
    \u0275\u0275advance(2);
    \u0275\u0275property("formField", ctx_r1.schedule().schedule_type);
    \u0275\u0275attribute("aria-label", \u0275\u0275pipeBind1(3, 10, "SIGNAGE_MANAGER.SCHEDULE_TYPE_ARIA"));
    \u0275\u0275control();
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(6, 12, "SIGNAGE_MANAGER.PLAY_ONCE"));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(9, 14, "SIGNAGE_MANAGER.RECURRING_SCHEDULE"));
    \u0275\u0275advance(2);
    \u0275\u0275conditional(!ctx_r1.schedule_timezone_once_only() || ctx_r1.value().schedule_type === "play_at" ? 10 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(!ctx_r1.schedule_timezone_once_only() && ctx_r1.value().schedule_type === "play_cron" ? 11 : -1);
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r1.value().schedule_type === "play_at" ? 12 : ctx_r1.value().schedule_type === "play_cron" ? 13 : -1);
    \u0275\u0275advance(3);
    \u0275\u0275property("label", \u0275\u0275pipeBind1(16, 16, "FORM.EXPIRES_AT"))("formField", ctx_r1.schedule().has_valid_until);
    \u0275\u0275control();
    \u0275\u0275advance(2);
    \u0275\u0275conditional(ctx_r1.value().has_valid_until ? 17 : -1);
  }
}
var FULL_DAY_START_MINUTES = 0;
var FULL_DAY_END_MINUTES = 23 * 60 + 59;
var DEFAULT_RECURRING_TIME = "00:00";
var DEFAULT_RECURRING_CRON = "0 0 * * *";
var DEFAULT_PLAY_PERIOD_MINUTES = 24 * 60;
var WEEKDAY_OPTIONS = [
  { value: 1 },
  { value: 2 },
  { value: 3 },
  { value: 4 },
  { value: 5 },
  { value: 6 },
  { value: 0 }
];
var WEEK_OF_MONTH_OPTIONS = [1, 2, 3, 4, 5];
function minutesToTime(value) {
  const safe_value = Math.max(FULL_DAY_START_MINUTES, Math.min(FULL_DAY_END_MINUTES, value || 0));
  const hours = Math.floor(safe_value / 60).toString().padStart(2, "0");
  const minutes = (safe_value % 60).toString().padStart(2, "0");
  return `${hours}:${minutes}`;
}
function timeToMinutes(value) {
  const [hours, minutes] = (value || "").split(":").map((_) => +_ || 0);
  return Math.max(FULL_DAY_START_MINUTES, Math.min(FULL_DAY_END_MINUTES, hours * 60 + minutes));
}
function ordinal(value) {
  if (value >= 11 && value <= 13)
    return `${value}th`;
  switch (value % 10) {
    case 1:
      return `${value}st`;
    case 2:
      return `${value}nd`;
    case 3:
      return `${value}rd`;
    default:
      return `${value}th`;
  }
}
function normaliseWeekdays(value) {
  const seen_days = /* @__PURE__ */ new Set();
  for (const day of value || []) {
    if (day >= 0 && day <= 6)
      seen_days.add(day);
  }
  return WEEKDAY_OPTIONS.map((day) => day.value).filter((day) => seen_days.has(day));
}
function normaliseMonthDays(value) {
  const seen_days = /* @__PURE__ */ new Set();
  for (const day of value || []) {
    if (day >= 1 && day <= 31)
      seen_days.add(day);
  }
  return Array.from({ length: 31 }, (_, index) => index + 1).filter((day) => seen_days.has(day));
}
function normaliseWeeksOfMonth(value) {
  const seen_weeks = /* @__PURE__ */ new Set();
  for (const week of value || []) {
    if (week >= 1 && week <= 5)
      seen_weeks.add(week);
  }
  return WEEK_OF_MONTH_OPTIONS.filter((week) => seen_weeks.has(week));
}
function parseCronNumber(value, min, max) {
  if (!/^\d+$/.test(value || ""))
    return null;
  const number_value = +value;
  return number_value >= min && number_value <= max ? number_value : null;
}
function parseCronStep(value, min, max) {
  const match = /^\*\/(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const step = +match[1];
  return step >= min && step <= max ? step : null;
}
function dayRangeForWeekOfMonth(value) {
  const week = Math.max(1, Math.min(5, value || 1));
  if (week === 5)
    return "29-31";
  const start = (week - 1) * 7 + 1;
  return `${start}-${start + 6}`;
}
function parseCronWeekOfMonthRange(value) {
  const match = /^(\d+)-(\d+)$/.exec(value || "");
  if (!match)
    return null;
  const start = +match[1];
  const end = +match[2];
  if (start === 29 && end === 31)
    return 5;
  if ((start - 1) % 7 !== 0 || end !== start + 6)
    return null;
  const week = (start - 1) / 7 + 1;
  return week >= 1 && week <= 4 ? week : null;
}
function parseCronWeeksOfMonth(value) {
  if (!value?.trim() || value === "*")
    return null;
  const weeks = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    const week = parseCronWeekOfMonthRange(part);
    if (week === null)
      return null;
    weeks.add(week);
  }
  return normaliseWeeksOfMonth([...weeks]);
}
function parseCronWeekdays(value) {
  if (!value?.trim() || value === "*")
    return null;
  const days = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    if (part.includes("-")) {
      const [start, end] = part.split("-").map((_) => parseCronNumber(_, 0, 6));
      if (start === null || end === null || start > end)
        return null;
      for (let day = start; day <= end; day++)
        days.add(day);
    } else {
      const day = parseCronNumber(part, 0, 6);
      if (day === null)
        return null;
      days.add(day);
    }
  }
  return normaliseWeekdays([...days]);
}
function parseCronMonthDays(value) {
  if (!value?.trim() || value === "*")
    return null;
  const days = /* @__PURE__ */ new Set();
  for (const part of value.split(",")) {
    const day = parseCronNumber(part, 1, 31);
    if (day === null)
      return null;
    days.add(day);
  }
  return normaliseMonthDays([...days]);
}
function isCronMonthlyWeekday(day_part, weekday_part) {
  return !!parseCronWeeksOfMonth(day_part)?.length && !!parseCronWeekdays(weekday_part)?.length;
}
function parseRecurringCron(value) {
  const [minute_part, hour_part, day_part, month_part, weekday_part] = (value || DEFAULT_RECURRING_CRON).trim().split(/\s+/);
  const minute = parseCronNumber(minute_part, 0, 59);
  const hour = parseCronNumber(hour_part, 0, 23);
  const time = minute === null || hour === null ? DEFAULT_RECURRING_TIME : `${hour.toString().padStart(2, "0")}:${minute.toString().padStart(2, "0")}`;
  const custom = {
    recurrence_type: "custom",
    recurrence_time: time,
    recurrence_interval: 1,
    recurrence_week_of_month: [1],
    recurrence_day_of_week: 1,
    recurrence_weekdays: [1],
    recurrence_day_of_month: [1]
  };
  if (day_part === "*" && month_part === "*" && weekday_part === "*") {
    const minute_step = minute_part === "*" ? 1 : parseCronStep(minute_part, 1, 59);
    if (minute_step !== null && hour_part === "*")
      return custom;
    const hour_step = hour_part === "*" ? 1 : parseCronStep(hour_part, 1, 23);
    if (parseCronNumber(minute_part, 0, 59) === 0 && hour_step !== null) {
      return __spreadProps(__spreadValues({}, custom), {
        recurrence_type: "hours",
        recurrence_interval: hour_step
      });
    }
  }
  if (minute === null || hour === null || month_part !== "*")
    return custom;
  if (day_part === "*" && weekday_part === "*") {
    return __spreadProps(__spreadValues({}, custom), { recurrence_type: "daily" });
  }
  if (day_part === "*" && weekday_part === "1-5") {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "weekdays"
    });
  }
  const weekdays = parseCronWeekdays(weekday_part);
  if (isCronMonthlyWeekday(day_part, weekday_part)) {
    const month_weekdays = parseCronWeekdays(weekday_part) || [1];
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "monthly_weekday",
      recurrence_week_of_month: parseCronWeeksOfMonth(day_part) || [1],
      recurrence_day_of_week: month_weekdays[0],
      recurrence_weekdays: month_weekdays
    });
  }
  if (day_part === "*" && weekdays?.length) {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "weekly",
      recurrence_weekdays: weekdays
    });
  }
  const days_of_month = parseCronMonthDays(day_part);
  if (days_of_month?.length && weekday_part === "*") {
    return __spreadProps(__spreadValues({}, custom), {
      recurrence_type: "monthly",
      recurrence_day_of_month: days_of_month
    });
  }
  return custom;
}
function isIntervalRecurringType(value) {
  return value === "minutes" || value === "hours";
}
function buildRecurringCron(value) {
  if (value.recurrence_type === "custom") {
    return value.play_cron || DEFAULT_RECURRING_CRON;
  }
  const recurrence_time = isIntervalRecurringType(value.recurrence_type) ? value.recurrence_time || DEFAULT_RECURRING_TIME : minutesToTime(value.play_start ?? timeToMinutes(DEFAULT_RECURRING_TIME));
  const [hours, minutes] = recurrence_time.split(":").map((_) => +_ || 0);
  const minute = Math.max(0, Math.min(59, minutes));
  const hour = Math.max(0, Math.min(23, hours));
  if (value.recurrence_type === "minutes") {
    const interval = Math.max(1, Math.min(59, value.recurrence_interval || 1));
    return interval === 1 ? "* * * * *" : `*/${interval} * * * *`;
  }
  if (value.recurrence_type === "hours") {
    const interval = Math.max(1, Math.min(23, value.recurrence_interval || 1));
    return interval === 1 ? "0 * * * *" : `0 */${interval} * * *`;
  }
  if (value.recurrence_type === "weekdays")
    return `${minute} ${hour} * * 1-5`;
  if (value.recurrence_type === "weekly") {
    const weekdays = normaliseWeekdays(value.recurrence_weekdays);
    return `${minute} ${hour} * * ${(weekdays.length ? weekdays : [1]).join(",")}`;
  }
  if (value.recurrence_type === "monthly") {
    const days = normaliseMonthDays(value.recurrence_day_of_month);
    return `${minute} ${hour} ${(days.length ? days : [1]).join(",")} * *`;
  }
  if (value.recurrence_type === "monthly_weekday") {
    const weekdays = normaliseWeekdays(value.recurrence_weekdays);
    const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
    const day_ranges = (weeks.length ? weeks : [1]).map((week) => dayRangeForWeekOfMonth(week)).join(",");
    return `${minute} ${hour} ${day_ranges} * ${(weekdays.length ? weekdays : [1]).join(",")}`;
  }
  return `${minute} ${hour} * * *`;
}
function playlistPlayPeriod(schedule) {
  return Number.isFinite(schedule.play_period) ? Math.max(0, schedule.play_period) : DEFAULT_PLAY_PERIOD_MINUTES;
}
function scheduleTypeFor(schedule) {
  return schedule.play_at ? "play_at" : "play_cron";
}
function currentPlaylistSchedule(playlist) {
  const legacy_playlist = playlist;
  return playlist.schedules?.[0] || {
    play_at: legacy_playlist.play_at,
    play_cron: legacy_playlist.play_cron,
    play_period: legacy_playlist.play_period,
    play_takeover: legacy_playlist.play_takeover
  };
}
function playlistSchedules(playlist) {
  const schedule = currentPlaylistSchedule(playlist);
  return playlist.schedules?.length ? playlist.schedules : [schedule];
}
function matchesCronPart(value, cron_part) {
  if (cron_part === "*")
    return true;
  if (cron_part.includes(",")) {
    return cron_part.split(",").some((item) => matchesCronPart(value, item));
  }
  if (cron_part.includes("/")) {
    const [base, step] = cron_part.split("/");
    return !!+step && value % +step === 0 && matchesCronPart(value, base);
  }
  if (cron_part.includes("-")) {
    const [start, end] = cron_part.split("-").map(Number);
    return value >= start && value <= end;
  }
  return Number(cron_part) === value;
}
function doesCronMatchDate(cron, date) {
  const parts = cron.trim().split(/\s+/);
  if (parts.length !== 5)
    return false;
  const [minute, hour, day, month, day_of_week] = parts;
  if (!matchesCronPart(date.getMinutes(), minute))
    return false;
  if (!matchesCronPart(date.getHours(), hour))
    return false;
  if (!matchesCronPart(date.getMonth() + 1, month))
    return false;
  const day_matches = matchesCronPart(date.getDate(), day);
  const weekday_matches = matchesCronPart(date.getDay(), day_of_week);
  if (day === "*" && day_of_week === "*")
    return true;
  if (day !== "*" && day_of_week === "*")
    return day_matches;
  if (day === "*" && day_of_week !== "*")
    return weekday_matches;
  if (isCronMonthlyWeekday(day, day_of_week)) {
    return day_matches && weekday_matches;
  }
  return day_matches || weekday_matches;
}
function formatPlayDateTime(date, timeZone = LOCAL_TIMEZONE) {
  return date.toLocaleString(void 0, {
    timeZone,
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayTime(date, timeZone = LOCAL_TIMEZONE) {
  return date.toLocaleTimeString(void 0, {
    timeZone,
    hour: "numeric",
    minute: "2-digit"
  });
}
function formatPlayDateTimeRange(start, duration_minutes, timezone = LOCAL_TIMEZONE) {
  const end = new Date(start.getTime() + Math.max(0, duration_minutes || 0) * 6e4 - (duration_minutes > 0 ? 1e3 : 0));
  const end_text = toZonedTime(start, timezone).toDateString() === toZonedTime(end, timezone).toDateString() ? formatPlayTime(end, timezone) : formatPlayDateTime(end, timezone);
  return `${formatPlayDateTime(start, timezone)} \u2013 ${end_text}`;
}
function formatMinutes(value) {
  const total_minutes = Math.max(0, Math.round(value || 0));
  if (!total_minutes)
    return "";
  const days = Math.floor(total_minutes / (24 * 60));
  const hours = Math.floor(total_minutes % (24 * 60) / 60);
  const minutes = total_minutes % 60;
  const parts = [
    {
      value: days,
      key: "SIGNAGE_MANAGER.DURATION_DAY"
    },
    {
      value: hours,
      key: "SIGNAGE_MANAGER.DURATION_HOUR"
    },
    {
      value: minutes,
      key: "SIGNAGE_MANAGER.DURATION_MINUTE"
    }
  ];
  return parts.filter((part) => part.value).map((part) => i18n(part.key, { count: part.value }, part.value)).join(" ");
}
function nextCronPlayTimes(cron, duration_minutes, valid_until = 0, timezone = LOCAL_TIMEZONE) {
  const result = [];
  if (!cron?.trim())
    return result;
  const now = Date.now();
  const date = toZonedTime(now, timezone);
  date.setSeconds(0, 0);
  date.setMinutes(date.getMinutes() + 1);
  const end = new Date(date);
  end.setFullYear(end.getFullYear() + 2);
  const expiry = valid_until ? toZonedTime(valid_until, timezone) : end;
  while (date <= end && date <= expiry && result.length < 5) {
    if (doesCronMatchDate(cron, date)) {
      const instant = fromZonedTime(date, timezone);
      if (instant.getTime() > now && (!valid_until || instant.getTime() <= valid_until) && toZonedTime(instant, timezone).getTime() === date.getTime()) {
        result.push(formatPlayDateTimeRange(instant, duration_minutes, timezone));
      }
    }
    date.setMinutes(date.getMinutes() + 1);
  }
  return result;
}
function createPlaylistScheduleModel(schedule) {
  const source = schedule || {};
  const recurring_schedule = parseRecurringCron(source.play_cron);
  return {
    schedule_type: scheduleTypeFor(source),
    play_start: timeToMinutes(recurring_schedule.recurrence_time),
    // The API carries a unix timestamp in seconds; the form model works in
    // milliseconds, as playlistSchedulePayload's getUnixTime assumes.
    play_at: source.play_at ? fromUnixTime(source.play_at).getTime() : Date.now(),
    play_takeover: !!source.play_takeover,
    play_cron: source.play_cron || DEFAULT_RECURRING_CRON,
    recurrence_type: recurring_schedule.recurrence_type,
    recurrence_time: recurring_schedule.recurrence_time,
    recurrence_interval: recurring_schedule.recurrence_interval,
    recurrence_week_of_month: recurring_schedule.recurrence_week_of_month,
    recurrence_day_of_week: recurring_schedule.recurrence_day_of_week,
    recurrence_weekdays: recurring_schedule.recurrence_weekdays,
    recurrence_day_of_month: recurring_schedule.recurrence_day_of_month,
    play_period: playlistPlayPeriod(source),
    has_valid_until: !!source.valid_until,
    valid_until: source.valid_until ? fromUnixTime(source.valid_until).getTime() : endOfDay(Date.now()).getTime()
  };
}
function playlistSchedulePayload(value) {
  return value.schedule_type === "play_at" ? {
    play_at: value.play_at ? getUnixTime(new Date(value.play_at)) : 0,
    play_cron: DEFAULT_RECURRING_CRON,
    play_period: Math.max(0, value.play_period || 0),
    play_takeover: !!value.play_takeover,
    valid_until: value.has_valid_until ? getUnixTime(new Date(value.valid_until)) : 0
  } : {
    play_at: 0,
    play_cron: buildRecurringCron(value),
    play_period: Math.max(0, value.play_period || 0),
    play_takeover: !!value.play_takeover,
    valid_until: value.has_valid_until ? getUnixTime(new Date(value.valid_until)) : 0
  };
}
var PlaylistScheduleFormComponent = class _PlaylistScheduleFormComponent {
  constructor() {
    this._injector = inject(Injector);
    this._locale = inject(LocaleService);
    this._date_pipe = new DatePipe(this._locale.locale);
    this.schedule = input.required(
      ...ngDevMode ? [{ debugName: "schedule" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.index = input.required(
      ...ngDevMode ? [{ debugName: "index" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.open = input(
      false,
      ...ngDevMode ? [{ debugName: "open" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.can_remove = input(
      false,
      ...ngDevMode ? [{ debugName: "can_remove" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.toggle = output();
    this.remove = output();
    this.schedule_timezone_once_only = settingSignal("schedule_timezone_once_only", true);
    this.timezone = signal(
      LOCAL_TIMEZONE,
      ...ngDevMode ? [{ debugName: "timezone" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezones = [
      .../* @__PURE__ */ new Set([LOCAL_TIMEZONE, "UTC", ...TIMEZONES_IANA])
    ].sort();
    this.timezone_search = signal(
      "",
      ...ngDevMode ? [{ debugName: "timezone_search" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.filtered_timezones = computed(
      () => {
        const search = this.timezone_search().trim().toLowerCase();
        return this.timezones.filter((zone) => zone.toLowerCase().includes(search));
      },
      ...ngDevMode ? [{ debugName: "filtered_timezones" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.timezone_options = computed(
      () => {
        const matches = this.filtered_timezones();
        const selected = this.timezone();
        return matches.includes(selected) ? matches : [selected, ...matches];
      },
      ...ngDevMode ? [{ debugName: "timezone_options" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.weekday_options = WEEKDAY_OPTIONS;
    this.week_of_month_options = WEEK_OF_MONTH_OPTIONS;
    this.month_days = Array.from({ length: 31 }, (_, index) => index + 1);
    this.ordinal = ordinal;
    this.value = computed(
      () => this.schedule()().value(),
      ...ngDevMode ? [{ debugName: "value" }] : (
        /* istanbul ignore next */
        []
      )
    );
    this.formatPlayHour = (value) => minutesToTime(value || 0);
    this.start_timezone_offset = computed(
      () => {
        const date = new Date(this.recurringPlayStartTime());
        const offset = getTimezoneOffsetString(this.timezone(), date);
        return offset === getTimezoneOffsetString(LOCAL_TIMEZONE, date) ? "" : offset;
      },
      ...ngDevMode ? [{ debugName: "start_timezone_offset" }] : (
        /* istanbul ignore next */
        []
      )
    );
  }
  focusTimezoneSearch(select, input2) {
    afterNextRender(() => {
      if (select.panelOpen)
        input2.focus({ preventScroll: true });
    }, { injector: this._injector });
  }
  onTimezoneSearchKeydown(event) {
    const navigation_keys = [
      "Escape",
      "Tab",
      "ArrowUp",
      "ArrowDown",
      "Enter"
    ];
    if (!navigation_keys.includes(event.key) || event.ctrlKey || event.metaKey) {
      event.stopPropagation();
    }
  }
  removeSchedule(event) {
    event.preventDefault();
    event.stopPropagation();
    this.remove.emit(event);
  }
  nextCronPlayTimes() {
    const value = this.value();
    if (value.schedule_type !== "play_cron")
      return [];
    return nextCronPlayTimes(buildRecurringCron(value), value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES, value.has_valid_until ? value.valid_until : 0, this.timezone());
  }
  recurringScheduleSummary() {
    const value = this.value();
    if (value.recurrence_type === "custom") {
      return i18n("SIGNAGE_MANAGER.SUMMARY_ADVANCED");
    }
    const interval = value.recurrence_interval || 1;
    const start_time = this.formatPlayHour(value.play_start);
    const period = value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES;
    const duration = formatMinutes(period) || i18n("SIGNAGE_MANAGER.ONE_PLAYLIST_PASS");
    if (value.recurrence_type === "minutes") {
      return i18n("SIGNAGE_MANAGER.SUMMARY_EVERY_MINUTE", { interval }, interval);
    }
    if (value.recurrence_type === "hours") {
      return i18n("SIGNAGE_MANAGER.SUMMARY_EVERY_HOUR", { interval }, interval);
    }
    if (value.recurrence_type === "weekdays") {
      return i18n("SIGNAGE_MANAGER.SUMMARY_WEEKDAYS", {
        time: start_time,
        duration
      });
    }
    if (value.recurrence_type === "weekly") {
      const days = this._weekdayNames(value.recurrence_weekdays);
      return i18n("SIGNAGE_MANAGER.SUMMARY_WEEKLY", {
        days,
        time: start_time,
        duration
      });
    }
    if (value.recurrence_type === "monthly") {
      const days = normaliseMonthDays(value.recurrence_day_of_month);
      return i18n("SIGNAGE_MANAGER.SUMMARY_MONTHLY", {
        days: (days.length ? days : [1]).map((day) => ordinal(day)).join(", "),
        time: start_time,
        duration
      });
    }
    if (value.recurrence_type === "monthly_weekday") {
      const weeks = normaliseWeeksOfMonth(value.recurrence_week_of_month);
      return i18n("SIGNAGE_MANAGER.SUMMARY_MONTHLY_WEEKDAY", {
        weeks: (weeks.length ? weeks : [1]).map((week) => ordinal(week)).join(", "),
        days: this._weekdayNames(value.recurrence_weekdays),
        time: start_time,
        duration
      });
    }
    return i18n("SIGNAGE_MANAGER.SUMMARY_DAILY", {
      time: start_time,
      duration
    });
  }
  scheduleSummary() {
    const value = this.value();
    const period = value.play_period ?? DEFAULT_PLAY_PERIOD_MINUTES;
    const duration = formatMinutes(period) || i18n("SIGNAGE_MANAGER.ONE_PLAYLIST_PASS");
    const takeover = value.play_takeover ? i18n("SIGNAGE_MANAGER.TAKEOVER_SUFFIX") : "";
    const expiry = playlistScheduleExpiryLabel(playlistSchedulePayload(value));
    const expiry_suffix = expiry ? ` \xB7 ${expiry}` : "";
    if (value.schedule_type === "play_at") {
      const date = new Date(value.play_at || Date.now());
      return `${i18n("SIGNAGE_MANAGER.SUMMARY_PLAY_ONCE", {
        datetime: `${formatPlayDateTime(date, this.timezone())} ${this.timezone()}`,
        duration
      })}${takeover}${expiry_suffix}`;
    }
    return `${this.recurringScheduleSummary()} \xB7 ${this.timezone()}${takeover}${expiry_suffix}`;
  }
  scheduleExpiryTooltip() {
    const value = this.value();
    return value.has_valid_until ? new Date(value.valid_until).toLocaleString(void 0, {
      timeZone: this.timezone()
    }) : "";
  }
  recurringPlayStartTime() {
    if (!this.showRecurringStartTime())
      return void 0;
    const value = this.value();
    return setTimeInTimezone(Date.now(), 0, value.play_start || 0, this.timezone());
  }
  recurringStartInputTime() {
    return formatTimeInTimezone(this.recurringPlayStartTime());
  }
  setPlayStart(value) {
    if (!/^([01]\d|2[0-3]):[0-5]\d$/.test(value))
      return;
    const [local_hours, local_minutes] = value.split(":").map(Number);
    const timestamp = setTimeInTimezone(this.recurringPlayStartTime(), local_hours, local_minutes);
    const { hours, minutes } = getTimeInTimezone(timestamp, this.timezone());
    this.schedule().play_start().value.set(hours * 60 + minutes);
  }
  isIntervalRecurrence() {
    return isIntervalRecurringType(this.value().recurrence_type);
  }
  showRecurringStartTime() {
    return this.value().recurrence_type !== "custom" && !this.isIntervalRecurrence();
  }
  isRecurrenceWeekdaySelected(day) {
    return !!this.value().recurrence_weekdays?.includes(day);
  }
  toggleRecurrenceWeekday(day) {
    const selected_days = this.value().recurrence_weekdays || [];
    const next_days = selected_days.includes(day) ? selected_days.filter((item) => item !== day) : [...selected_days, day];
    this.schedule().recurrence_weekdays().value.set(normaliseWeekdays(next_days.length ? next_days : [day]));
  }
  weekdayLabel(value, format2) {
    const day = typeof value === "number" ? value : 1;
    const monday_based_offset = day === 0 ? 6 : day - 1;
    const date = new Date(2024, 0, 1 + monday_based_offset);
    return this._date_pipe.transform(date, format2) || "";
  }
  _weekdayNames(value) {
    const weekdays = normaliseWeekdays(value);
    return (weekdays.length ? weekdays : [1]).map((day) => this.weekdayLabel(day, "EEEE")).filter((_) => _).join(", ");
  }
  static {
    this.\u0275fac = function PlaylistScheduleFormComponent_Factory(__ngFactoryType__) {
      return new (__ngFactoryType__ || _PlaylistScheduleFormComponent)();
    };
  }
  static {
    this.\u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _PlaylistScheduleFormComponent, selectors: [["playlist-schedule-form"]], inputs: { schedule: [1, "schedule"], index: [1, "index"], open: [1, "open"], can_remove: [1, "can_remove"] }, outputs: { toggle: "toggle", remove: "remove" }, decls: 15, vars: 16, consts: [["timezone_select", ""], ["timezone_filter", ""], ["start_input", ""], [1, "border-base-300", "overflow-hidden", "rounded-sm", "border"], [1, "hover:bg-base-200/60", "flex", "items-center", "gap-3", "px-3", "py-1.5", "transition-colors"], ["type", "button", 1, "flex", "min-w-0", "flex-1", "items-center", "gap-3", "text-left", 3, "click"], [1, "min-w-24", "text-sm", "font-medium"], [1, "text-base-content", "min-w-0", "flex-1", "truncate", "text-xs", 3, "matTooltip", "matTooltipDisabled"], ["icon", "", "default", "", "error", "", "type", "button", 1, "border-base-300", "hover:bg-base-200", "rounded", "border", "px-3", "py-2", "text-sm", "disabled:cursor-not-allowed", "disabled:opacity-40", 3, "click", "disabled"], ["type", "button", 1, "flex", "items-center", 3, "click"], [1, "text-base-content/60", "text-xl"], [1, "border-base-300", "space-y-2", "border-t", "px-2", "pt-4", "pb-2"], ["appearance", "outline", 1, "no-subscript", "w-full"], [3, "formField"], ["value", "play_at"], ["value", "play_cron"], [1, "text-base-content/60", "text-xs"], [1, "bg-base-200/40", "border-base-300", "mt-4", "rounded-lg", "border", "p-3"], [3, "label", "formField"], [1, "mt-3", "flex", "space-x-4"], ["for", "timezone"], ["name", "timezone", 3, "ngModelChange", "openedChange", "aria-label", "ngModel", "ngModelOptions"], [1, "bg-base-100", "sticky", "-top-1.5", "z-10"], [1, "border-base-300", "h-full", "w-full", "border-b", "px-4", "py-3", 3, "ngModelChange", "keydown", "placeholder", "ngModel", "ngModelOptions"], [3, "value"], ["disabled", ""], [1, "flex", "space-x-4"], [1, "flex-1"], [1, "w-full", 3, "timezone", "formField"], [1, "w-full", 3, "timezone", "ngModel", "ngModelOptions"], [1, "w-full", 3, "timezone", "formField", "min", "max", "time", "allow_end_time", "custom_options"], [1, "w-full", 3, "ngModelChange", "timezone", "ngModel", "ngModelOptions"], [1, "bg-base-200/40", "border-base-300", "space-y-4", "rounded-lg", "border", "p-3"], [1, "flex", "flex-col", "gap-3", "md:flex-row", "md:items-end"], [1, "min-w-48", "flex-1"], ["value", "hours"], ["value", "daily"], ["value", "weekdays"], ["value", "weekly"], ["value", "monthly"], ["value", "monthly_weekday"], ["value", "custom"], [1, "m-0", "min-w-40", "flex-1"], [1, "border-warning/30", "bg-warning/10", "text-warning-content", "rounded-lg", "border", "p-3", "text-sm"], [1, "flex", "flex-col", "gap-3", "md:flex-row"], [1, "flex", "w-full", "flex-1", "flex-col"], [1, "w-full", "flex-1"], [1, "no-subscript", "w-full", "flex-1", 3, "timezone", "formField", "min", "max", "time", "allow_end_time", "custom_options"], [1, "border-base-300", "relative", "mt-6", "flex", "flex-col", "gap-2", "rounded", "border", "px-2", "pt-4", "pb-2", "text-sm"], [1, "bg-base-100", "absolute", "top-0", "left-3", "-translate-y-1/2", "rounded", "px-2"], [1, "border-base-200", "hover:bg-base-200/50", "rounded-lg", "border", "p-2", "font-mono", "text-xs"], [3, "min", "max", "formField"], [1, "mb-2", "text-sm", "font-medium"], [1, "flex", "flex-wrap", "gap-2"], ["type", "button", 1, "min-w-12", "rounded-full", "border", "px-3", "py-2", "text-sm", "transition-colors", 3, "border-primary", "bg-primary", "text-primary-content", "border-base-300"], ["type", "button", 1, "min-w-12", "rounded-full", "border", "px-3", "py-2", "text-sm", "transition-colors", 3, "click"], ["multiple", "", 3, "formField"], [1, "grid", "grid-cols-2", "gap-3"], ["appearance", "outline", 1, "no-subscript"], ["matInput", "", "type", "time", "step", "60", 3, "input", "blur", "value"], ["start-timezone", "", 1, "text-xs", "opacity-30"], [1, "w-full", "flex-1", 3, "timezone", "formField"], [1, "w-full", "flex-1", 3, "timezone", "ngModel", "ngModelOptions"], [1, "w-full", "flex-1", 3, "ngModelChange", "timezone", "ngModel", "ngModelOptions"]], template: function PlaylistScheduleFormComponent_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "div", 3)(1, "div", 4)(2, "button", 5);
        \u0275\u0275listener("click", function PlaylistScheduleFormComponent_Template_button_click_2_listener() {
          return ctx.toggle.emit();
        });
        \u0275\u0275elementStart(3, "div", 6);
        \u0275\u0275text(4);
        \u0275\u0275pipe(5, "translate");
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(6, "div", 7);
        \u0275\u0275text(7);
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(8, "button", 8);
        \u0275\u0275listener("click", function PlaylistScheduleFormComponent_Template_button_click_8_listener($event) {
          return ctx.removeSchedule($event);
        });
        \u0275\u0275elementStart(9, "icon");
        \u0275\u0275text(10, "delete");
        \u0275\u0275elementEnd()();
        \u0275\u0275elementStart(11, "button", 9);
        \u0275\u0275listener("click", function PlaylistScheduleFormComponent_Template_button_click_11_listener() {
          return ctx.toggle.emit();
        });
        \u0275\u0275elementStart(12, "icon", 10);
        \u0275\u0275text(13);
        \u0275\u0275elementEnd()()();
        \u0275\u0275conditionalCreate(14, PlaylistScheduleFormComponent_Conditional_14_Template, 18, 18, "div", 11);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classProp("border-primary", ctx.open());
        \u0275\u0275advance(2);
        \u0275\u0275attribute("aria-expanded", ctx.open());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind2(5, 11, "SIGNAGE_MANAGER.SCHEDULE_NUMBER", \u0275\u0275pureFunction1(14, _c03, ctx.index() + 1)), " ");
        \u0275\u0275advance(2);
        \u0275\u0275property("matTooltip", ctx.scheduleExpiryTooltip())("matTooltipDisabled", !ctx.value().has_valid_until);
        \u0275\u0275advance();
        \u0275\u0275textInterpolate1(" ", ctx.scheduleSummary(), " ");
        \u0275\u0275advance();
        \u0275\u0275property("disabled", !ctx.can_remove());
        \u0275\u0275advance(3);
        \u0275\u0275attribute("aria-expanded", ctx.open());
        \u0275\u0275advance(2);
        \u0275\u0275textInterpolate1(" ", ctx.open() ? "expand_less" : "expand_more", " ");
        \u0275\u0275advance();
        \u0275\u0275conditional(ctx.open() ? 14 : -1);
      }
    }, dependencies: [
      FormField,
      FormsModule,
      DefaultValueAccessor,
      NgControlStatus,
      NgModel,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatFormField,
      MatInputModule,
      MatInput,
      MatSelectModule,
      MatSelect,
      MatSelectTrigger,
      MatOption,
      MatTooltipModule,
      MatTooltip,
      IconComponent,
      CounterComponent,
      SettingsToggleComponent,
      DatePipe,
      TranslatePipe
    ], encapsulation: 2 });
  }
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlaylistScheduleFormComponent, [{
    type: Component,
    args: [{ selector: "playlist-schedule-form", template: `
        <div
            class="border-base-300 overflow-hidden rounded-sm border"
            [class.border-primary]="open()"
        >
            <div
                class="hover:bg-base-200/60 flex items-center gap-3 px-3 py-1.5 transition-colors"
            >
                <button
                    type="button"
                    class="flex min-w-0 flex-1 items-center gap-3 text-left"
                    [attr.aria-expanded]="open()"
                    (click)="toggle.emit()"
                >
                    <div class="min-w-24 text-sm font-medium">
                        {{
                            'SIGNAGE_MANAGER.SCHEDULE_NUMBER'
                                | translate: { number: index() + 1 }
                        }}
                    </div>
                    <div
                        class="text-base-content min-w-0 flex-1 truncate text-xs"
                        [matTooltip]="scheduleExpiryTooltip()"
                        [matTooltipDisabled]="!value().has_valid_until"
                    >
                        {{ scheduleSummary() }}
                    </div>
                </button>
                <button
                    icon
                    default
                    error
                    type="button"
                    class="border-base-300 hover:bg-base-200 rounded border px-3 py-2 text-sm disabled:cursor-not-allowed disabled:opacity-40"
                    [disabled]="!can_remove()"
                    (click)="removeSchedule($event)"
                >
                    <icon>delete</icon>
                </button>
                <button
                    type="button"
                    class="flex items-center"
                    [attr.aria-expanded]="open()"
                    (click)="toggle.emit()"
                >
                    <icon class="text-base-content/60 text-xl">
                        {{ open() ? 'expand_less' : 'expand_more' }}
                    </icon>
                </button>
            </div>
            @if (open()) {
                <div class="border-base-300 space-y-2 border-t px-2 pt-4 pb-2">
                    <mat-form-field
                        appearance="outline"
                        class="no-subscript w-full"
                    >
                        <mat-select
                            [formField]="schedule().schedule_type"
                            [attr.aria-label]="
                                'SIGNAGE_MANAGER.SCHEDULE_TYPE_ARIA' | translate
                            "
                        >
                            <mat-option value="play_at">{{
                                'SIGNAGE_MANAGER.PLAY_ONCE' | translate
                            }}</mat-option>
                            <mat-option value="play_cron">{{
                                'SIGNAGE_MANAGER.RECURRING_SCHEDULE' | translate
                            }}</mat-option>
                        </mat-select>
                    </mat-form-field>
                    @if (
                        !schedule_timezone_once_only() ||
                        value().schedule_type === 'play_at'
                    ) {
                        <label for="timezone">{{
                            'COMMON.TIMEZONE' | translate
                        }}</label>
                        <mat-form-field
                            appearance="outline"
                            class="no-subscript w-full"
                        >
                            <mat-select
                                #timezone_select
                                name="timezone"
                                [aria-label]="'COMMON.TIMEZONE' | translate"
                                [(ngModel)]="timezone"
                                [ngModelOptions]="{ standalone: true }"
                                (openedChange)="
                                    timezone_search.set('');
                                    $event &&
                                        focusTimezoneSearch(
                                            timezone_select,
                                            timezone_filter
                                        )
                                "
                            >
                                <mat-select-trigger>{{
                                    timezone()
                                }}</mat-select-trigger>
                                <div class="bg-base-100 sticky -top-1.5 z-10">
                                    <input
                                        #timezone_filter
                                        class="border-base-300 h-full w-full border-b px-4 py-3"
                                        [placeholder]="
                                            'COMMON.SEARCH' | translate
                                        "
                                        [attr.aria-label]="
                                            'SIGNAGE_MANAGER.SEARCH_TIMEZONES'
                                                | translate
                                        "
                                        [(ngModel)]="timezone_search"
                                        [ngModelOptions]="{ standalone: true }"
                                        (keydown)="
                                            onTimezoneSearchKeydown($event)
                                        "
                                    />
                                </div>
                                @for (zone of timezone_options(); track zone) {
                                    <mat-option [value]="zone">{{
                                        zone
                                    }}</mat-option>
                                }
                                @if (!filtered_timezones().length) {
                                    <mat-option disabled>{{
                                        'COMMON.TIMEZONE_EMPTY' | translate
                                    }}</mat-option>
                                }
                            </mat-select>
                        </mat-form-field>
                    }
                    @if (
                        !schedule_timezone_once_only() &&
                        value().schedule_type === 'play_cron'
                    ) {
                        <p class="text-base-content/60 text-xs">
                            {{
                                'SIGNAGE_MANAGER.SCHEDULE_TIMEZONE_HINT'
                                    | translate
                            }}
                        </p>
                    }
                    @if (value().schedule_type === 'play_at') {
                        <div class="flex space-x-4">
                            <div class="flex-1">
                                <label>{{
                                    'SIGNAGE_MANAGER.PLAY_AT' | translate
                                }}</label>
                                <a-date-field
                                    [timezone]="timezone()"
                                    class="w-full"
                                    [formField]="schedule().play_at"
                                ></a-date-field>
                            </div>
                            <div class="flex-1">
                                <label>&nbsp;</label>
                                <!-- Recreate the time input to refresh its cached display when the timezone changes. -->
                                @for (zone of [timezone()]; track zone) {
                                    <a-time-field
                                        [timezone]="timezone()"
                                        class="w-full"
                                        [ngModel]="value().play_at"
                                        (ngModelChange)="
                                            schedule()
                                                .play_at()
                                                .value.set($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                }
                            </div>
                        </div>
                        <label>{{
                            'SIGNAGE_MANAGER.PLAY_PERIOD' | translate
                        }}</label>
                        <a-duration-field
                            [timezone]="timezone()"
                            class="w-full"
                            [formField]="schedule().play_period"
                            [min]="15"
                            [max]="24 * 60"
                            [time]="value().play_at"
                            [allow_end_time]="true"
                            [custom_options]="[value().play_period]"
                        ></a-duration-field>
                        <settings-toggle
                            [label]="
                                'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK' | translate
                            "
                            [formField]="schedule().play_takeover"
                        />
                    } @else if (value().schedule_type === 'play_cron') {
                        <div
                            class="bg-base-200/40 border-base-300 space-y-4 rounded-lg border p-3"
                        >
                            <div
                                class="flex flex-col gap-3 md:flex-row md:items-end"
                            >
                                <div class="min-w-48 flex-1">
                                    <label>{{
                                        'SIGNAGE_MANAGER.REPEAT' | translate
                                    }}</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                schedule().recurrence_type
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.REPEAT_PATTERN_ARIA'
                                                    | translate
                                            "
                                        >
                                            <mat-option value="hours">{{
                                                'SIGNAGE_MANAGER.EVERY_FEW_HOURS'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="daily">{{
                                                'SIGNAGE_MANAGER.EVERY_DAY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="weekdays">{{
                                                'SIGNAGE_MANAGER.WEEKDAYS'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="weekly">{{
                                                'SIGNAGE_MANAGER.WEEKLY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option value="monthly">{{
                                                'SIGNAGE_MANAGER.MONTHLY'
                                                    | translate
                                            }}</mat-option>
                                            <mat-option
                                                value="monthly_weekday"
                                                >{{
                                                    'SIGNAGE_MANAGER.MONTHLY_BY_WEEKDAY'
                                                        | translate
                                                }}</mat-option
                                            >
                                            @if (
                                                value().recurrence_type ===
                                                'custom'
                                            ) {
                                                <mat-option value="custom">{{
                                                    'SIGNAGE_MANAGER.CUSTOM_SCHEDULE'
                                                        | translate
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                                @if (isIntervalRecurrence()) {
                                    <label class="m-0 min-w-40 flex-1">
                                        <div>
                                            {{
                                                (value().recurrence_type ===
                                                'minutes'
                                                    ? 'SIGNAGE_MANAGER.MINUTES_BETWEEN_PLAYS'
                                                    : 'SIGNAGE_MANAGER.HOURS_BETWEEN_PLAYS'
                                                ) | translate
                                            }}
                                        </div>
                                        <a-counter
                                            [min]="1"
                                            [max]="
                                                value().recurrence_type ===
                                                'minutes'
                                                    ? 59
                                                    : 23
                                            "
                                            [formField]="
                                                schedule().recurrence_interval
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.SCHEDULE_INTERVAL_ARIA'
                                                    | translate
                                            "
                                        />
                                    </label>
                                }
                            </div>
                            @if (value().recurrence_type === 'weekly') {
                                <div>
                                    <div class="mb-2 text-sm font-medium">
                                        {{
                                            'SIGNAGE_MANAGER.PLAY_ON'
                                                | translate
                                        }}
                                    </div>
                                    <div class="flex flex-wrap gap-2">
                                        @for (
                                            day of weekday_options;
                                            track day.value
                                        ) {
                                            <button
                                                type="button"
                                                class="min-w-12 rounded-full border px-3 py-2 text-sm transition-colors"
                                                [class.border-primary]="
                                                    isRecurrenceWeekdaySelected(
                                                        day.value
                                                    )
                                                "
                                                [class.bg-primary]="
                                                    isRecurrenceWeekdaySelected(
                                                        day.value
                                                    )
                                                "
                                                [class.text-primary-content]="
                                                    isRecurrenceWeekdaySelected(
                                                        day.value
                                                    )
                                                "
                                                [class.border-base-300]="
                                                    !isRecurrenceWeekdaySelected(
                                                        day.value
                                                    )
                                                "
                                                [attr.aria-pressed]="
                                                    isRecurrenceWeekdaySelected(
                                                        day.value
                                                    )
                                                "
                                                (click)="
                                                    toggleRecurrenceWeekday(
                                                        day.value
                                                    )
                                                "
                                            >
                                                {{
                                                    weekdayLabel(
                                                        day.value,
                                                        'EEE'
                                                    )
                                                }}
                                            </button>
                                        }
                                    </div>
                                </div>
                            } @else if (value().recurrence_type === 'monthly') {
                                <div>
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON'
                                            | translate
                                    }}</label>
                                    <mat-form-field
                                        appearance="outline"
                                        class="no-subscript w-full"
                                    >
                                        <mat-select
                                            [formField]="
                                                schedule()
                                                    .recurrence_day_of_month
                                            "
                                            [attr.aria-label]="
                                                'SIGNAGE_MANAGER.DAYS_OF_MONTH_ARIA'
                                                    | translate
                                            "
                                            multiple
                                        >
                                            @for (
                                                day of month_days;
                                                track day
                                            ) {
                                                <mat-option [value]="day">{{
                                                    ordinal(day)
                                                }}</mat-option>
                                            }
                                        </mat-select>
                                    </mat-form-field>
                                </div>
                            } @else if (
                                value().recurrence_type === 'monthly_weekday'
                            ) {
                                <div>
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_EACH_MONTH_ON'
                                            | translate
                                    }}</label>
                                    <div class="grid grid-cols-2 gap-3">
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    schedule()
                                                        .recurrence_week_of_month
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.WEEK_OF_MONTH_ARIA'
                                                        | translate
                                                "
                                                multiple
                                            >
                                                @for (
                                                    week of week_of_month_options;
                                                    track week
                                                ) {
                                                    <mat-option
                                                        [value]="week"
                                                        >{{
                                                            ordinal(week)
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript w-full"
                                        >
                                            <mat-select
                                                [formField]="
                                                    schedule()
                                                        .recurrence_weekdays
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.DAYS_OF_WEEK_ARIA'
                                                        | translate
                                                "
                                                multiple
                                            >
                                                @for (
                                                    day of weekday_options;
                                                    track day.value
                                                ) {
                                                    <mat-option
                                                        [value]="day.value"
                                                        >{{
                                                            weekdayLabel(
                                                                day.value,
                                                                'EEEE'
                                                            )
                                                        }}</mat-option
                                                    >
                                                }
                                            </mat-select>
                                        </mat-form-field>
                                    </div>
                                </div>
                            } @else if (value().recurrence_type === 'custom') {
                                <div
                                    class="border-warning/30 bg-warning/10 text-warning-content rounded-lg border p-3 text-sm"
                                >
                                    {{
                                        'SIGNAGE_MANAGER.ADVANCED_SCHEDULE_WARNING'
                                            | translate
                                    }}
                                </div>
                            }
                            <div class="flex flex-col gap-3 md:flex-row">
                                @if (showRecurringStartTime()) {
                                    <div class="flex w-full flex-1 flex-col">
                                        <label>{{
                                            'SIGNAGE_MANAGER.START' | translate
                                        }}</label>
                                        <mat-form-field
                                            appearance="outline"
                                            class="no-subscript"
                                        >
                                            <input
                                                #start_input
                                                matInput
                                                type="time"
                                                step="60"
                                                [value]="
                                                    recurringStartInputTime()
                                                "
                                                [attr.aria-label]="
                                                    'SIGNAGE_MANAGER.PLAY_PERIOD_START_ARIA'
                                                        | translate
                                                "
                                                (input)="
                                                    setPlayStart(
                                                        start_input.value
                                                    )
                                                "
                                                (blur)="
                                                    start_input.value =
                                                        recurringStartInputTime()
                                                "
                                            />
                                        </mat-form-field>
                                        @if (start_timezone_offset()) {
                                            <div
                                                start-timezone
                                                class="text-xs opacity-30"
                                            >
                                                {{
                                                    recurringPlayStartTime()
                                                        | date
                                                            : 'h : mm a (z)'
                                                            : start_timezone_offset()
                                                }}
                                            </div>
                                        }
                                    </div>
                                }
                                <div class="w-full flex-1">
                                    <label>{{
                                        'SIGNAGE_MANAGER.PLAY_PERIOD'
                                            | translate
                                    }}</label>
                                    <a-duration-field
                                        [timezone]="timezone()"
                                        class="no-subscript w-full flex-1"
                                        [formField]="schedule().play_period"
                                        [min]="15"
                                        [max]="24 * 60"
                                        [time]="recurringPlayStartTime()"
                                        [allow_end_time]="true"
                                        [custom_options]="[value().play_period]"
                                    ></a-duration-field>
                                </div>
                            </div>
                            <settings-toggle
                                [label]="
                                    'SIGNAGE_MANAGER.TAKEOVER_PLAYBACK'
                                        | translate
                                "
                                [formField]="schedule().play_takeover"
                            />
                        </div>
                        <div
                            class="border-base-300 relative mt-6 flex flex-col gap-2 rounded border px-2 pt-4 pb-2 text-sm"
                        >
                            <div
                                class="bg-base-100 absolute top-0 left-3 -translate-y-1/2 rounded px-2"
                            >
                                {{
                                    'SIGNAGE_MANAGER.UPCOMING_PLAY_TIMES'
                                        | translate
                                }}
                            </div>
                            @for (
                                play_time of nextCronPlayTimes();
                                track play_time
                            ) {
                                <div
                                    class="border-base-200 hover:bg-base-200/50 rounded-lg border p-2 font-mono text-xs"
                                >
                                    {{ play_time }}
                                </div>
                            } @empty {
                                <div class="text-base-content/60 text-xs">
                                    {{
                                        'SIGNAGE_MANAGER.NO_UPCOMING_PLAY_TIMES'
                                            | translate
                                    }}
                                </div>
                            }
                        </div>
                    }
                    <div
                        class="bg-base-200/40 border-base-300 mt-4 rounded-lg border p-3"
                    >
                        <settings-toggle
                            [label]="'FORM.EXPIRES_AT' | translate"
                            [formField]="schedule().has_valid_until"
                        />
                        @if (value().has_valid_until) {
                            <div class="mt-3 flex space-x-4">
                                <a-date-field
                                    [timezone]="timezone()"
                                    class="w-full flex-1"
                                    [formField]="schedule().valid_until"
                                ></a-date-field>
                                @for (zone of [timezone()]; track zone) {
                                    <a-time-field
                                        [timezone]="timezone()"
                                        class="w-full flex-1"
                                        [ngModel]="value().valid_until"
                                        (ngModelChange)="
                                            schedule()
                                                .valid_until()
                                                .value.set($event)
                                        "
                                        [ngModelOptions]="{ standalone: true }"
                                    ></a-time-field>
                                }
                            </div>
                        }
                    </div>
                </div>
            }
        </div>
    `, imports: [
      DatePipe,
      FormField,
      FormsModule,
      DateFieldComponent,
      TimeFieldComponent,
      DurationFieldComponent,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatTooltipModule,
      IconComponent,
      CounterComponent,
      SettingsToggleComponent,
      TranslatePipe
    ] }]
  }], null, { schedule: [{ type: Input, args: [{ isSignal: true, alias: "schedule", required: true }] }], index: [{ type: Input, args: [{ isSignal: true, alias: "index", required: true }] }], open: [{ type: Input, args: [{ isSignal: true, alias: "open", required: false }] }], can_remove: [{ type: Input, args: [{ isSignal: true, alias: "can_remove", required: false }] }], toggle: [{ type: Output, args: ["toggle"] }], remove: [{ type: Output, args: ["remove"] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(PlaylistScheduleFormComponent, { className: "PlaylistScheduleFormComponent", filePath: "apps/signage-manager/src/app/shared/playlist-schedule-form.component.ts", lineNumber: 1207 });
})();

export {
  playlistSchedules,
  createPlaylistScheduleModel,
  playlistSchedulePayload,
  PlaylistScheduleFormComponent
};
//# debugId=c6c23956-04a4-593d-a85d-a1fd76a03132
//# sourceMappingURL=chunk-RXDN5SU6.js.map
